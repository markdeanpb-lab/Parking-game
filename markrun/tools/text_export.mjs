#!/usr/bin/env node
// Export every piece of player-facing text to content/MARKRUN_TEXT.txt (plus content/text_index.json for the import).
// Read-only on game files.
//
//   node tools/text_export.mjs              write content/MARKRUN_TEXT.txt + content/text_index.json
//   node tools/text_export.mjs --excluded   also list what was left out (prose-like strings only) and why
//   node tools/text_export.mjs --out DIR    write to DIR instead of content/ (used by the tests)
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectAll, assignIds, unitKey } from './text_lib.mjs';
import { SECTIONS, BANK_LEAD } from './text_rules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const HEADER = `MARKRUN: ALL THE TEXT A PLAYER CAN SEE OR HEAR
==============================================

HOW TO EDIT THIS FILE
  1. Only change the text lines under each [ID] line. Don't change, delete or copy the [ID] lines themselves.
  2. Keep every {placeholder} exactly as it is, e.g. {name}, {stake}, {a}. The game swaps these for a name, an amount
     and so on. You can move a placeholder to a different place in the sentence, but don't remove, add or rename one.
  3. One entry per ID. An empty line ends an entry, so don't put empty lines inside one. Keep each entry on one line
     (if your editor wraps it onto several lines, that's fine: the lines are joined back together with a space).
     A ⏎ inside a line, if you ever see one, is a forced line break on screen.
  4. Lines starting with # are comments: where the text appears and who says it. They are ignored, so you can add
     your own notes. Your text must not start with #.
  5. Commentary with " || " in it is a little exchange: the named speaker says the part before ||, the other
     commentator answers with the part after it. Keep the same number of ||.
  6. Nicknames look like "Full Name|Short name" (the short one is what the commentators say). Keep the single |.
  7. Tags like <b>...</b> or <small>...</small> make words bold or small on screen. Keep both halves, or remove both.
  8. Apostrophes and quote marks are fine as they are (he's, it's, "airing"). So are emoji.
  9. You don't have to delete anything you leave alone. Unchanged entries are simply skipped.

PLACEHOLDERS YOU WILL SEE A LOT
  {name} a player's name      {a} {b} runner names      {stake} {amount} money      {odds} the odds
  {extra} an optional bit of text the game sometimes adds (it has its own entry, mentioned in the comment)
  {choice} one of two words the game picks (each has its own entry)      {plural} an "s" when there is more than one

Pieces marked "fragment" are joined to other pieces by the game, so read them with their neighbours.
`;

const SPK = (s) => (s ? s.split('/').map((x) => x[0].toUpperCase() + x.slice(1)).join('/') : null);
const area = (title) => { const a = title.split(':')[0].trim(); return /^(TV|PHONE)$/.test(a) ? a : a.toLowerCase(); };

export function buildExport(root = ROOT) {
  const all = collectAll(root);
  assignIds(all.groups);
  // where is each literal exported? (to describe nested pieces)
  const unitsOfLit = new Map();
  const groupOfUnit = new Map();
  for (const g of all.groups) for (const u of g.units) { groupOfUnit.set(u, g); if (u.lit) { if (!unitsOfLit.has(u.lit)) unitsOfLit.set(u.lit, []); unitsOfLit.get(u.lit).push(u); } }
  const entries = [];
  for (const g of all.groups) {
    const u = g.units[0];
    const { meta } = u;
    const speakerLead = meta.speaker || (u.file === 'server/game/commentary.mjs' && ['B', 'R'].includes(meta.decl) && meta.bank ? (BANK_LEAD[meta.bank] || (meta.bank.endsWith('_pam') ? 'pam' : 'jeff')) : null);
    let speaker = SPK(speakerLead);
    if (speaker && / \|\| /.test(u.display) && !speaker.includes('/')) speaker = `${speaker} || ${speaker === 'Jeff' ? 'Pam' : 'Jeff'}`;
    const detail = u.attr ? ({ title: 'tooltip', placeholder: 'input hint', 'aria-label': 'screen-reader label', alt: 'image text' }[u.attr] || u.attr)
      : (meta.bank && meta.keys.includes(`key:${meta.bank}`) ? meta.bank : meta.key && meta.decl ? `${meta.decl}.${meta.key}` : meta.decl || '');
    const notes = [];
    if (meta.fragment) notes.push('fragment: the game joins this to other text');
    if (u.lit?.parent && u.kind === 'js') {
      const p = u.lit.parent.lit;
      const pe = p.exprs[u.lit.parent.exprIndex];
      // the exported unit of the parent literal whose text contains this expression
      const cands = (unitsOfLit.get(p) || []).filter((y) => y.items && y.items[y.from]?.pos <= pe.start && y.items[y.to - 1]?.end >= pe.end);
      const pu = cands[0];
      if (pu) {
        const exprSrc = pu._src.slice(pe.start, pe.end);
        const nm = Object.entries(pu.ph || {}).find(([, v]) => v === exprSrc)?.[0];
        notes.push(`slotted into [${groupOfUnit.get(pu).id}]${nm ? ` as {${nm}}` : ''}`);
      } else if (!meta.fragment) notes.push('fragment: the game slots this into a longer line');
    }
    const odd = Object.keys(u.ph || {}).filter((n) => /^(value|x|extra|choice)\d*$/.test(n) && u.ph[n].trim() !== n);
    for (const n of odd) notes.push(`{${n}} = ${u.ph[n].replace(/\s+/g, ' ').slice(0, 60)}`);
    if (g.units.length > 1) notes.push(`used ${g.units.length} times in this file`);
    const comment = [area(g.section.title), detail, speaker, u.file].filter(Boolean).join(' · ');
    entries.push({ g, id: g.id, section: g.section, comment, notes, text: u.display, u });
  }
  // order: section order, then file order, then position in the file
  const secIndex = new Map(SECTIONS.map((s, i) => [s.prefix, i]));
  const fileIndex = new Map(all.files.map((f, i) => [f, i]));
  entries.sort((a, b) => secIndex.get(a.section.prefix) - secIndex.get(b.section.prefix) || fileIndex.get(a.u.file) - fileIndex.get(b.u.file) || a.u.start - b.u.start);
  return { all, entries };
}

// A text line that would be read as a comment/ID/heading gets a protective backslash.
const protect = (line) => (/^[#[=\\]/.test(line) ? '\\' + line : line);

export function renderText({ entries }) {
  const out = [HEADER.trimEnd().split('\n').map((l) => (l ? `# ${l}` : '#')).join('\n')];
  let sec = null, sub = null;
  const counts = new Map();
  for (const e of entries) counts.set(e.section.prefix, (counts.get(e.section.prefix) || 0) + 1);
  for (const e of entries) {
    if (e.section !== sec) {
      sec = e.section; sub = null;
      out.push('', `=== ${sec.title} ===`, `# ${counts.get(sec.prefix)} entries`, '');
    }
    const subKey = e.u.file === 'server/game/commentary.mjs' ? e.u.meta.bank : null;
    if (subKey && subKey !== sub) { sub = subKey; out.push(`# ---- ${subKey} ----`, ''); }
    out.push(`[${e.id}]  # ${e.comment}`);
    for (const n of e.notes) out.push(`#   ${n}`);
    out.push(protect(e.text.replace(/\n/g, '⏎')));
    out.push('');
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

export function renderIndex({ entries }) {
  const idx = { version: 1, note: 'Sidecar for tools/text_import.mjs. One record per [ID] in MARKRUN_TEXT.txt.', entries: {} };
  for (const e of entries) {
    const u = e.u;
    idx.entries[e.id] = {
      section: e.section.title, file: u.file, kind: u.kind, quote: u.quote, attr: u.attr || null,
      literal: u.raw, container: u.kind === 'js-html' ? u.lit && u._src.slice(u.lit.start, u.lit.end) : undefined,
      text: e.text, placeholders: u.ph || {}, lines: e.g.units.map((x) => x.meta.line), count: e.g.units.length,
      speaker: u.meta.speaker || null, html: !!u.html, key: unitKey(u),
    };
  }
  return idx;
}

export function sectionCounts({ entries }) {
  const m = new Map();
  for (const e of entries) m.set(e.section.title, (m.get(e.section.title) || 0) + 1);
  return m;
}

function main() {
  const args = process.argv.slice(2);
  const outDir = args.includes('--out') ? args[args.indexOf('--out') + 1] : join(ROOT, 'content');
  const res = buildExport(ROOT);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'MARKRUN_TEXT.txt'), renderText(res));
  writeFileSync(join(outDir, 'text_index.json'), JSON.stringify(renderIndex(res), null, 1) + '\n');
  const counts = sectionCounts(res);
  const w = Math.max(...[...counts.keys()].map((k) => k.length));
  console.log(`Wrote ${join(outDir, 'MARKRUN_TEXT.txt')} and text_index.json\n`);
  console.log('Entries by section:');
  for (const [k, v] of counts) console.log(`  ${k.padEnd(w)}  ${String(v).padStart(4)}`);
  console.log(`  ${'TOTAL'.padEnd(w)}  ${String(res.entries.length).padStart(4)}`);
  if (args.includes('--excluded')) {
    console.log('\nLeft out (prose-like strings only):');
    for (const u of res.all.excluded) {
      if (u.why === 'no words' || !/[A-Za-z]{2,}.*\s.*[A-Za-z]{2,}/.test(u.text)) continue;
      console.log(`  ${u.file}:${u.meta.line}  (${u.why})  ${JSON.stringify(u.text).slice(0, 110)}`);
    }
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
