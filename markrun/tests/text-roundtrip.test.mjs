// Text round trip: tools/text_export.mjs -> content/MARKRUN_TEXT.txt -> tools/text_import.mjs.
// Everything here runs in memory (or in a temporary copy of the sources): no game file is ever written.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildExport, renderText, renderIndex } from '../tools/text_export.mjs';
import { planImport, parseTextFile, checkSyntax } from '../tools/text_import.mjs';
import { analyseFile, unitKey, scanJs } from '../tools/text_lib.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const res = buildExport(ROOT);
const TXT = renderText(res);
const INDEX = renderIndex(res);
const ids = Object.keys(INDEX.entries);

// replace the text of one entry in the exported file
function edit(txt, id, newText) {
  const lines = txt.split('\n');
  const i = lines.findIndex((l) => l.startsWith(`[${id}]`));
  assert.ok(i >= 0, `entry ${id} not in the file`);
  let j = i + 1;
  while (lines[j].startsWith('#')) j++;
  lines[j] = newText;
  return lines.join('\n');
}
const find = (pred, why) => { const id = ids.find((k) => pred(INDEX.entries[k], k)); assert.ok(id, `no entry found for: ${why}`); return id; };
const plan = (revisedText, read) => planImport({ root: ROOT, index: INDEX, revisedText, ...(read ? { read } : {}) });

test('the export covers the main kinds of player-facing text', () => {
  assert.ok(ids.length > 1500, `only ${ids.length} entries`);
  const sections = new Set(Object.values(INDEX.entries).map((e) => e.section));
  for (const s of ['COMMENTARY: Overtakes', 'RUNNERS: Nicknames', 'CLUES: Headlines', 'HOT TIPS', 'RESULTS: Clue review quips', 'RACE: 3D broadcast banners', 'TV: Start screen', 'PHONE: Betting flow', 'WEB EDITION'])
    assert.ok([...sections].some((x) => x.startsWith(s)), `missing section ${s}`);
  const texts = new Set(Object.values(INDEX.entries).map((e) => e.text));
  for (const t of ['LEAD CHANGE', 'DISTRACTED!', 'PHOTO FINISH!']) assert.ok(texts.has(t), `missing "${t}"`);
  // code identifiers stay out
  for (const t of ['LOBBY', 'red_herring', 'week_km', '#ff3b3b']) assert.ok(!texts.has(t), `"${t}" should not be exported`);
});

test('every entry has the documented layout: [ID]  # comment, then the text, then an empty line', () => {
  const { entries, problems } = parseTextFile(TXT);
  assert.deepEqual(problems, []);
  assert.equal(entries.size, ids.length);
  assert.match(TXT, /^\[CMT-OVT-[0-9a-f]{5}(-\d+)?\]  # commentary · overtake · Jeff · server\/game\/commentary\.mjs$/m);
  assert.match(TXT, /^=== COMMENTARY: Overtakes ===$/m);
});

test('exporting then importing the unmodified file changes nothing', () => {
  const rep = plan(TXT);
  assert.equal(rep.changed.length, 0);
  assert.equal(rep.unchanged, ids.length);
  assert.deepEqual([rep.rejected.length, rep.stale.length, rep.unknown.length, rep.parseProblems.length], [0, 0, 0, 0]);
  assert.deepEqual(rep.files, {});
});

test('IDs are stable: same IDs on re-export, and they do not depend on line numbers', () => {
  const again = renderIndex(buildExport(ROOT));
  assert.deepEqual(Object.keys(again.entries).sort(), [...ids].sort());
  const file = 'server/game/commentary.mjs';
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const keys = (s) => analyseFile(ROOT, file, s).units.filter((u) => u.include).map(unitKey).sort();
  assert.deepEqual(keys('\n\n\n// shifted\n' + src), keys(src));
});

test('changing one entry changes exactly that literal (apostrophes escaped for a single-quoted string)', () => {
  const id = find((e) => e.kind === 'js' && e.quote === "'" && e.count === 1 && e.literal.includes("\\'") && /\{\w+\}/.test(e.text) && e.file === 'server/game/commentary.mjs', "single-quoted line with an apostrophe and a placeholder");
  const rec = INDEX.entries[id];
  const ph = rec.text.match(/\{\w+\}/)[0];
  const newText = `It's ${ph}, and he's "flying"!`;
  const rep = plan(edit(TXT, id, newText));
  assert.equal(rep.changed.length, 1);
  assert.deepEqual(Object.keys(rep.files), [rec.file]);
  const before = fs.readFileSync(path.join(ROOT, rec.file), 'utf8');
  const expectedLiteral = `'It\\'s ${ph}, and he\\'s "flying"!'`;
  assert.equal(rep.files[rec.file], before.replace(rec.literal, expectedLiteral), 'only the one literal may change');
  assert.equal(checkSyntax(rec.file, rep.files[rec.file]), null);
  const after = analyseFile(ROOT, rec.file, rep.files[rec.file]).units.filter((u) => u.include);
  assert.ok(after.some((u) => u.display === newText));
});

test('double-quoted and template literals are escaped for their own quote style', () => {
  const dq = find((e) => e.kind === 'js' && e.quote === '"' && e.count === 1, 'double-quoted literal');
  const tl = find((e) => e.kind === 'js' && e.quote === '`' && e.count === 1 && Object.keys(e.placeholders).length >= 1, 'template literal with ${}');
  const t1 = `Say "cheese" & it's \`fine\` ${(INDEX.entries[dq].text.match(/\{\w+\}/g) || []).join(' ')}`.trim();
  const phs = INDEX.entries[tl].text.match(/\{\w+\}/g);
  const t2 = `Backtick \` and \${ and "quotes" — ${[...phs].reverse().join(' then ')}`; // placeholders moved around
  const rep = plan(edit(edit(TXT, dq, t1), tl, t2));
  assert.equal(rep.rejected.length, 0, JSON.stringify(rep.rejected));
  assert.equal(rep.changed.length, 2);
  for (const [f, src] of Object.entries(rep.files)) {
    assert.equal(checkSyntax(f, src), null, f);
    const shown = analyseFile(ROOT, f, src).units.map((u) => u.display);
    for (const c of rep.changed.filter((x) => x.file === f)) assert.ok(shown.includes(c.text), `${c.id} not found after rewrite`);
  }
  // the template's ${expressions} survive verbatim
  const rec = INDEX.entries[tl];
  for (const expr of Object.values(rec.placeholders)) assert.ok(rep.files[rec.file].includes('${' + expr + '}'), `expression ${expr} lost`);
});

test('placeholders must be preserved: dropping or inventing one is rejected', () => {
  const id = find((e) => e.file === 'server/game/commentary.mjs' && !e.text.includes('|') && new Set(e.text.match(/\{\w+\}/g) || []).size >= 2, 'commentary line with two placeholders');
  const rec = INDEX.entries[id];
  const [, p2] = rec.text.match(/\{\w+\}/g);
  const dropped = plan(edit(TXT, id, rec.text.replace(p2, 'someone')));
  assert.equal(dropped.changed.length, 0);
  assert.equal(dropped.rejected.length, 1);
  assert.match(dropped.rejected[0].errs.join(' '), new RegExp(`placeholder \\${p2.slice(0, -1)}\\} is missing`));
  assert.deepEqual(dropped.files, {});
  const invented = plan(edit(TXT, id, `${rec.text} {mystery}`));
  assert.equal(invented.rejected.length, 1);
  assert.match(invented.rejected[0].errs.join(' '), /unknown placeholder \{mystery\}/);
  const moved = plan(edit(TXT, id, `${[...rec.text.match(/\{\w+\}/g)].reverse().join(' and ')}, rewritten.`)); // all kept, order changed
  assert.equal(moved.rejected.length, 0);
  assert.equal(moved.changed.length, 1);
});

test('speaker splits (||), nickname separators (|) and tags are protected', () => {
  const dbl = find((e) => e.text.includes(' || '), 'line with ||');
  assert.equal(plan(edit(TXT, dbl, INDEX.entries[dbl].text.replace(' || ', ' '))).rejected.length, 1);
  const nick = find((e) => e.section.startsWith('RUNNERS: Nicknames'), 'nickname');
  assert.equal(plan(edit(TXT, nick, 'Just One Name')).rejected.length, 1);
  assert.equal(plan(edit(TXT, nick, 'Sir Testalot|Testy')).rejected.length, 0);
  const tag = find((e) => e.html && /<b>[^<]*<\/b>/.test(e.text) && e.count === 1, 'text with <b>');
  assert.equal(plan(edit(TXT, tag, INDEX.entries[tag].text.replace('</b>', ''))).rejected.length, 1);
});

test('an entry whose source changed since the export is reported STALE, not guessed', () => {
  const id = find((e) => e.kind === 'js' && e.file === 'server/game/characters.mjs', 'characters entry');
  const rec = INDEX.entries[id];
  const read = (f) => { const s = fs.readFileSync(path.join(ROOT, f), 'utf8'); return f === rec.file ? s.replace(rec.literal, "'Somebody else rewrote this'") : s; };
  const rep = plan(edit(TXT, id, 'My new version'), read);
  assert.equal(rep.changed.length, 0);
  assert.equal(rep.stale.length, 1);
  assert.equal(rep.stale[0].id, id);
});

test('file problems are reported: duplicate IDs, stray text, unknown IDs', () => {
  const [a] = ids;
  const lines = TXT.split('\n');
  const i = lines.findIndex((l) => l.startsWith(`[${a}]`));
  const dup = [...lines.slice(0, i), lines[i], 'first copy', '', lines[i], 'second copy', '', ...lines.slice(i)].join('\n');
  assert.ok(parseTextFile(dup).problems.some((p) => /twice/.test(p.msg)));
  assert.ok(parseTextFile(`${TXT}\nstray words\n`).problems.some((p) => /outside an entry/.test(p.msg)));
  assert.equal(plan(`${TXT}\n[CMT-OVT-00000]\nmade up\n`).unknown.length, 1);
});

test('every entry can be rewritten (quotes, backticks, ${, backslashes, &) and still parses and reads back', () => {
  const MUT = ' it\'s "Q" `b` ${ a\\b & c';
  const lines = TXT.split('\n');
  let cur = false;
  const all = lines.map((l) => { if (/^\[[A-Z]/.test(l)) { cur = true; return l; } if (cur && l && !l.startsWith('#')) { cur = false; return l + MUT; } return l; }).join('\n');
  const rep = plan(all);
  assert.deepEqual(rep.rejected.map((r) => `${r.id}: ${r.errs.join('; ')}`), []);
  assert.equal(rep.stale.length, 0);
  assert.equal(rep.changed.length, ids.length);
});

test('--apply on a temporary copy writes the change, and a re-export shows it', () => {
  const id = find((e) => e.file === 'server/game/characters.mjs' && e.section.startsWith('RUNNERS: Taglines'), 'tagline');
  const rec = INDEX.entries[id];
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-text-test-'));
  try {
    for (const d of ['server', 'client', 'web']) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true, filter: (p) => !/node_modules|[\\/]dist[\\/]?|\.db$/.test(p) });
    const rep = planImport({ root: tmp, index: INDEX, revisedText: edit(TXT, id, "Doesn't own a single gel.") });
    assert.equal(rep.changed.length, 1);
    for (const [f, src] of Object.entries(rep.files)) fs.writeFileSync(path.join(tmp, f), src);
    const again = renderIndex(buildExport(tmp));
    assert.ok(Object.values(again.entries).some((e) => e.text === "Doesn't own a single gel." && e.file === rec.file));
    assert.ok(!Object.values(again.entries).some((e) => e.text === rec.text && e.file === rec.file));
    assert.equal(Object.keys(again.entries).length, ids.length);
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

test('the scanner understands every scanned source file (string boundaries survive an esbuild-free syntax check)', () => {
  for (const f of res.all.files.filter((x) => /\.m?js$/.test(x))) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const { literals } = scanJs(src);
    const blanked = src.split('');
    for (const l of literals) for (const q of l.quasis) for (let k = q.start; k < q.end; k++) if (blanked[k] !== '\n') blanked[k] = 'Z';
    assert.equal(checkSyntax(f, blanked.join('')), null, `${f}: literal boundaries are wrong`);
  }
});
