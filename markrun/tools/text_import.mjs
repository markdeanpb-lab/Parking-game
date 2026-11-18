#!/usr/bin/env node
// Apply a revised copy of content/MARKRUN_TEXT.txt back to the source code.
//
//   node tools/text_import.mjs <revised.txt>            dry run: report what would change and any problems
//   node tools/text_import.mjs <revised.txt> --apply    write the changes into the source files
//   options: --index <text_index.json> (default content/text_index.json)
//
// Every entry is matched by its [ID] through content/text_index.json, and the original literal must still be in its
// file (otherwise the entry is reported as STALE, never guessed). Placeholders, "||" speaker splits, nickname "|"
// separators and <b>-style tags must survive the edit, or the entry is REJECTED. Quotes are escaped for the
// literal's own quote style (', ", `), and every rewritten file is syntax-checked before it is written.
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { analyseFile, unitKey, buildEdit, applyEdits, placeholdersIn, INLINE_TAGS } from './text_lib.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ID_LINE = /^\[([A-Z]+(?:-[A-Z]+)*-[0-9a-f]{5}(?:-\d+)?)\]\s*(#.*)?$/;

// ---------------------------------------------------------------------------------------------------------------
// Parse the text file
// ---------------------------------------------------------------------------------------------------------------
export function parseTextFile(txt) {
  const entries = new Map();
  const problems = [];
  let cur = null;
  const close = () => {
    if (!cur) return;
    if (!cur.lines.length) problems.push({ id: cur.id, line: cur.line, msg: 'entry has no text (to keep it unchanged, put the text back)' });
    else if (entries.has(cur.id)) problems.push({ id: cur.id, line: cur.line, msg: `ID appears twice (also on line ${entries.get(cur.id).line}); keep one entry per ID` });
    else entries.set(cur.id, { id: cur.id, line: cur.line, text: cur.lines.join(' ').replace(/⏎/g, '\n') });
    cur = null;
  };
  txt.replace(/\r\n?/g, '\n').split('\n').forEach((raw, i) => {
    const n = i + 1;
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) { close(); return; }
    if (/^\s*#/.test(line)) return; // comment
    if (/^===.*===$/.test(line.trim())) { close(); return; } // section heading
    const m = line.trim().match(ID_LINE);
    if (m) { close(); cur = { id: m[1], line: n, lines: [] }; return; }
    if (/^\s*\[[^\]]*\]/.test(line) && !cur) { problems.push({ line: n, msg: `this looks like an ID line but the ID is not valid: ${line.trim().slice(0, 40)}` }); return; }
    if (!cur) { problems.push({ line: n, msg: `text outside an entry (an empty line may have split an entry in two): "${line.trim().slice(0, 60)}"` }); return; }
    cur.lines.push(line.trim().replace(/^\\/, ''));
  });
  close();
  return { entries, problems };
}

// ---------------------------------------------------------------------------------------------------------------
// Checks on one changed entry
// ---------------------------------------------------------------------------------------------------------------
const sortedPh = (t) => placeholdersIn(t).sort();
const count = (t, re) => (t.match(re) || []).length;
const tagsOf = (t) => [...t.matchAll(/<\s*(\/?)\s*([a-zA-Z][\w-]*)([^>]*)>/g)].map((m) => ({ close: !!m[1], name: m[2].toLowerCase(), attrs: m[3].trim() }));

export function checkEntry(rec, newText) {
  const errs = [];
  const old = rec.text;
  if (!newText.trim()) errs.push('the text is empty');
  const a = sortedPh(old), b = sortedPh(newText);
  const missing = a.filter((x, i, arr) => count(newText, new RegExp(`\\{${x}\\}`, 'g')) < arr.filter((y) => y === x).length);
  const added = b.filter((x, i, arr) => count(old, new RegExp(`\\{${x}\\}`, 'g')) < arr.filter((y) => y === x).length);
  for (const x of [...new Set(missing)]) errs.push(`placeholder {${x}} is missing (it must appear ${a.filter((y) => y === x).length} time(s))`);
  for (const x of [...new Set(added)]) errs.push(a.includes(x) ? `placeholder {${x}} appears more often than in the original` : `unknown placeholder {${x}} (only ${[...new Set(a)].map((y) => `{${y}}`).join(' ') || 'none'} can be used here)`);
  if (count(old, /\|\|/g) !== count(newText, /\|\|/g)) errs.push(`the number of "||" (speaker changes) must stay ${count(old, /\|\|/g)}`);
  const single = (t) => count(t.replace(/\|\|/g, ''), /\|/g);
  if (single(old) !== single(newText)) errs.push(`the number of "|" separators must stay ${single(old)}`);
  const oldTags = tagsOf(old), newTags = tagsOf(newText);
  if (rec.html || oldTags.length) {
    for (const t of newTags) {
      if (!INLINE_TAGS.has(t.name) || t.attrs) errs.push(`tag <${t.close ? '/' : ''}${t.name}${t.attrs ? ' ' + t.attrs : ''}> is not allowed here (use <b>, <small>, <i>, <br> ...)`);
    }
    const bal = (tags, nm) => tags.filter((t) => t.name === nm && !t.close).length - tags.filter((t) => t.name === nm && t.close).length;
    for (const nm of new Set([...newTags, ...oldTags].map((t) => t.name))) {
      if (nm === 'br') continue;
      if (bal(newTags, nm) !== bal(oldTags, nm)) errs.push(`<${nm}> is not closed properly: keep both <${nm}> and </${nm}>, or remove both`);
    }
  } else if (newTags.length) errs.push('formatting tags like <b> do not work in this piece of text');
  if (!rec.html && /[<>]/.test(newText) && !/[<>]/.test(old) && !newTags.length) { /* plain < or > in plain text is fine */ }
  return errs;
}

// ---------------------------------------------------------------------------------------------------------------
// Plan the import (pure: reads sources through `read`, returns the new sources without writing)
// ---------------------------------------------------------------------------------------------------------------
export function planImport({ root = ROOT, index, revisedText, read = (f) => readFileSync(join(root, f), 'utf8'), exists = (f) => existsSync(join(root, f)) }) {
  const parsed = parseTextFile(revisedText);
  const report = { total: parsed.entries.size, changed: [], rejected: [], stale: [], unknown: [], unchanged: 0, missing: [], parseProblems: parsed.problems, files: {} };
  const ids = Object.keys(index.entries);
  for (const id of ids) if (!parsed.entries.has(id)) report.missing.push(id);
  const byFile = new Map();
  for (const [id, e] of parsed.entries) {
    const rec = index.entries[id];
    if (!rec) { report.unknown.push({ id, line: e.line }); continue; }
    if (e.text === rec.text) { report.unchanged++; continue; }
    const errs = checkEntry(rec, e.text);
    if (errs.length) { report.rejected.push({ id, line: e.line, file: rec.file, errs, old: rec.text, text: e.text }); continue; }
    if (!byFile.has(rec.file)) byFile.set(rec.file, []);
    byFile.get(rec.file).push({ id, rec, text: e.text, line: e.line });
  }
  for (const [file, list] of byFile) {
    if (!exists(file)) { for (const c of list) report.stale.push({ ...c, why: `${file} no longer exists` }); continue; }
    const src = read(file);
    const { units } = analyseFile(root, file, src);
    const edits = [];
    const done = [];
    for (const c of list) {
      const occ = units.filter((u) => u.include && unitKey(u) === c.rec.key);
      if (!occ.length || !src.includes(c.rec.literal)) {
        report.stale.push({ ...c, why: `the original text is no longer in ${file} (someone changed it after the export): re-export, then redo this edit` });
        continue;
      }
      try {
        for (const u of occ) edits.push(buildEdit(u, c.text));
        done.push({ ...c, lines: occ.map((u) => u.meta.line), occurrences: occ.length });
      } catch (err) { report.rejected.push({ ...c, file, errs: [`could not rewrite: ${err.message}`] }); }
    }
    if (!edits.length) continue;
    let out;
    try { out = applyEdits(src, edits); } catch (err) { for (const c of done) report.rejected.push({ ...c, file, errs: [err.message] }); continue; }
    // verify: the file still parses, and every changed entry now reads as intended
    const syntax = checkSyntax(file, out);
    if (syntax) { for (const c of done) report.rejected.push({ ...c, file, errs: [`the rewritten file would not parse (${syntax}); nothing written for this file`] }); continue; }
    const after = analyseFile(root, file, out).units;
    const norm = (t, html) => (html ? t.replace(/\s+/g, ' ').trim() : t);
    const bad = done.filter((c) => !after.some((u) => norm(u.display, c.rec.html) === norm(c.text, c.rec.html)));
    if (bad.length) { for (const c of done) report.rejected.push({ ...c, file, errs: [bad.includes(c) ? 'after rewriting, the new text could not be found again; nothing written for this file' : 'another change in the same file failed; nothing written for this file'] }); continue; }
    report.files[file] = out;
    for (const c of done) report.changed.push({ ...c, file, old: c.rec.text });
  }
  return report;
}

export function checkSyntax(file, src) {
  if (!/\.(m?js)$/.test(file)) return null;
  const dir = mkdtempSync(join(tmpdir(), 'markrun-text-'));
  try {
    const p = join(dir, 'check.mjs');
    writeFileSync(p, src);
    const r = spawnSync(process.execPath, ['--check', p], { encoding: 'utf8' });
    return r.status === 0 ? null : (r.stderr.split('\n').find((l) => /Error/.test(l)) || 'syntax error').trim();
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

export function formatReport(rep, { apply, revisedPath }) {
  const L = [];
  const short = (t) => t.replace(/\n/g, ' ⏎ ');
  L.push(`MARKRUN text import: ${revisedPath}`);
  L.push(`  ${rep.total} entries read: ${rep.changed.length} to change, ${rep.unchanged} unchanged, ${rep.rejected.length} rejected, ${rep.stale.length} stale, ${rep.unknown.length} unknown ID(s)${rep.missing.length ? `, ${rep.missing.length} not in the file (left as they are)` : ''}`);
  if (rep.changed.length) {
    L.push('', `${apply ? 'CHANGED' : 'WOULD CHANGE'} (${rep.changed.length})`);
    for (const c of rep.changed) L.push(`  [${c.id}] ${c.file}:${c.lines.join(',')}${c.occurrences > 1 ? ` (${c.occurrences} places)` : ''}`, `    was: ${short(c.old)}`, `    now: ${short(c.text)}`);
  }
  if (rep.rejected.length) {
    L.push('', `REJECTED (${rep.rejected.length}): fix these in the text file and run the import again`);
    for (const r of rep.rejected) { L.push(`  [${r.id}] (line ${r.line} of the text file) ${r.file || ''}`); for (const e of r.errs) L.push(`    - ${e}`); }
  }
  if (rep.stale.length) {
    L.push('', `STALE (${rep.stale.length}): the source changed since the export, so these were not applied`);
    for (const s of rep.stale) L.push(`  [${s.id}] (line ${s.line}) ${s.why}`);
  }
  if (rep.unknown.length) { L.push('', `UNKNOWN IDs (${rep.unknown.length}): not in text_index.json (typed by hand, or from another export?)`); for (const u of rep.unknown) L.push(`  [${u.id}] (line ${u.line})`); }
  if (rep.parseProblems.length) { L.push('', `FILE PROBLEMS (${rep.parseProblems.length})`); for (const p of rep.parseProblems) L.push(`  line ${p.line}${p.id ? ` [${p.id}]` : ''}: ${p.msg}`); }
  L.push('');
  if (apply) L.push(Object.keys(rep.files).length ? `Wrote ${Object.keys(rep.files).length} file(s): ${Object.keys(rep.files).join(', ')}.\nNext: node tools/text_export.mjs (refreshes the IDs of the lines you changed), then npm test.` : 'Nothing written.');
  else L.push(rep.changed.length ? 'Dry run: nothing written. Run again with --apply to change the source files.' : 'Dry run: nothing to change.');
  return L.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const ii = args.indexOf('--index');
  const indexPath = ii >= 0 ? resolve(args[ii + 1]) : join(ROOT, 'content', 'text_index.json');
  const revisedPath = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--index');
  if (!revisedPath) { console.error('usage: node tools/text_import.mjs <revised.txt> [--apply] [--index content/text_index.json]'); process.exit(2); }
  if (!existsSync(indexPath)) { console.error(`missing ${indexPath}: run node tools/text_export.mjs first`); process.exit(2); }
  const index = JSON.parse(readFileSync(indexPath, 'utf8'));
  const rep = planImport({ root: ROOT, index, revisedText: readFileSync(resolve(revisedPath), 'utf8') });
  if (apply) for (const [f, src] of Object.entries(rep.files)) writeFileSync(join(ROOT, f), src);
  console.log(formatReport(rep, { apply, revisedPath }));
  const problems = rep.rejected.length + rep.stale.length + rep.unknown.length + rep.parseProblems.length;
  process.exit(problems ? 1 : 0);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
