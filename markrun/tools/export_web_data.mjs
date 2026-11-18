// Export ONLY what the browser game needs from data/markrun.db into web/data.json (the web edition's data bundle):
//   performances (+ the parkrun_results columns they join to), facts, meta (last_ingest etc.), course.json, park.json,
//   and the dev fixture round (fallback if the game module throws in the browser).
// Deliberately NOT exported: raw Strava streams, activity polylines, any raw_json, the strava_activities table, sources.
//   node --disable-warning=ExperimentalWarning tools/export_web_data.mjs [--db data/markrun.db] [--out web/data.json]
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_COLS = {
  performances: ['progress', 'hr', 'splits', 'quality', 'features', 'diversions'],
  facts: ['value', 'refs'],
};
const FORBIDDEN_KEYS = ['raw_json', 'polyline', 'summary_polyline', 'latlng', 'streams'];

const parse = (v) => { if (v == null) return null; try { return JSON.parse(v); } catch { return v; } };

export function buildWebData(db, { root = ROOT } = {}) {
  const meta = Object.fromEntries(db.prepare('SELECT key, value FROM meta').all().map((r) => [r.key, r.value]));
  const perfCols = db.prepare('PRAGMA table_info(performances)').all().map((c) => c.name);
  const resCols = db.prepare('PRAGMA table_info(parkrun_results)').all().map((c) => c.name).filter((c) => c !== 'run_date' && c !== 'source_id');
  // every performance column + every result column (a superset of what server/game/data.mjs selects)
  const performances = db.prepare(`SELECT p.*, ${resCols.map((c) => `r.${c}`).join(', ')}
    FROM performances p JOIN parkrun_results r USING (run_date) ORDER BY p.run_date`).all().map((row) => {
    const o = { ...row };
    for (const c of JSON_COLS.performances) if (c in o) o[c] = parse(o[c]);
    return o;
  });
  // natural (rowid) order: the same order the Node edition reads
  const facts = db.prepare('SELECT run_date, key, value, basis, refs FROM facts').all().map((row) => {
    const o = { ...row };
    for (const c of JSON_COLS.facts) o[c] = parse(o[c]);
    return o;
  });
  const readJson = (rel) => { const f = path.join(root, rel); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null; };
  const bundle = {
    v: 1,
    exportedAt: new Date().toISOString(),
    lastIngest: meta.last_ingest || null,
    meta,
    jsonColumns: { performances: JSON_COLS.performances.filter((c) => perfCols.includes(c)), facts: JSON_COLS.facts },
    performances,
    facts,
    course: readJson('data/course/course.json'),
    park: readJson('data/course/park.json'),
    fixture: readJson('data/fixtures/round.json'),
  };
  const bad = findForbidden(bundle);
  if (bad.length) throw new Error(`export would include forbidden fields: ${bad.slice(0, 5).join(', ')}`);
  return bundle;
}

export function findForbidden(obj, at = '$', out = []) {
  if (Array.isArray(obj)) { obj.forEach((x, i) => { if (out.length < 20) findForbidden(x, `${at}[${i}]`, out); }); return out; }
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (FORBIDDEN_KEYS.includes(k)) out.push(`${at}.${k}`);
      findForbidden(v, `${at}.${k}`, out);
    }
  }
  return out;
}

if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i >= 0 ? process.argv[i + 1] : d; };
  const dbFile = path.resolve(ROOT, arg('db', 'data/markrun.db'));
  const out = path.resolve(ROOT, arg('out', 'web/data.json'));
  const { DatabaseSync } = await import('node:sqlite');
  const db = new DatabaseSync(dbFile, { readOnly: true });
  const bundle = buildWebData(db);
  db.close();
  const json = JSON.stringify(bundle);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, json);
  const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
  const part = (k) => kb(JSON.stringify(bundle[k] ?? null).length);
  console.log(`web data bundle: ${path.relative(ROOT, out)}  ${kb(json.length)} (gzip ${kb(zlib.gzipSync(json).length)})`);
  console.log(`  performances ${bundle.performances.length} (${part('performances')}), facts ${bundle.facts.length} (${part('facts')}), course ${part('course')}, park ${part('park')}, fixture ${part('fixture')}`);
  console.log(`  data last updated (last_ingest): ${bundle.lastIngest}`);
}
