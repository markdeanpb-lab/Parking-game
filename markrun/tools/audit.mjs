// Data audit: coverage, pacing quality, pools, race-shape potential.
import { historyDb } from '../server/db.mjs';
import { timeAt } from '../server/import/pacing.mjs';
const db = historyDb();
const P = db.prepare('SELECT p.*, r.time_text FROM performances p JOIN parkrun_results r USING(run_date) ORDER BY official_s').all();
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
console.log('performances', P.length);
const q = {}; for (const p of P) { const g = JSON.parse(p.quality).grade; q[g] = (q[g] || 0) + 1; }
console.log('quality grades', q);
const bad = P.filter((p) => JSON.parse(p.quality).grade !== 'good').map((p) => [p.run_date, p.time_text, JSON.parse(p.quality).durationDiff, JSON.parse(p.quality).gpsDistance]);
console.log('non-good:', JSON.stringify(bad));
for (const pool of ['main', 'novelty']) {
  const L = P.filter((p) => p.pool === pool);
  console.log(pool, L.length, L.map((p) => p.time_text).join(' '));
}
// Leader changes potential: for random 5-sets of main pool within 60s spread, count lead changes along course
const main = P.filter((p) => p.pool === 'main').map((p) => ({ ...p, prog: JSON.parse(p.progress) }));
function leadChanges(set) {
  let leader = null, changes = 0;
  for (let t = 10; t < Math.max(...set.map((s) => s.official_s)); t += 2) {
    // distance at time t
    const d = set.map((s) => { let k = 0; while (k < 200 && s.prog[k + 1] < t) k++; return k; });
    const best = d.indexOf(Math.max(...d));
    if (leader !== null && best !== leader && d[best] > d[leader] + 0) changes++;
    leader = best;
  }
  return changes;
}
let stats = { n: 0, lc: [], spread: [] };
for (let i = 0; i < 400; i++) {
  const s = [...main].sort(() => Math.random() - 0.5).slice(0, 5);
  stats.lc.push(leadChanges(s)); stats.spread.push(Math.max(...s.map((x) => x.official_s)) - Math.min(...s.map((x) => x.official_s)));
}
const med = (a) => [...a].sort((x, y) => x - y)[a.length >> 1];
console.log('random main 5-sets: median spread', med(stats.spread), 's; median lead changes', med(stats.lc), '; sets with >=2 lead changes', stats.lc.filter((x) => x >= 2).length / 4, '%');
const f = main.map((p) => JSON.parse(p.features));
console.log('firstKmVsAvg range', Math.min(...f.map((x) => x.firstKmVsAvg)), Math.max(...f.map((x) => x.firstKmVsAvg)), 'halfRatio range', Math.min(...f.map((x) => x.halfRatio)), Math.max(...f.map((x) => x.halfRatio)));
const facts = db.prepare("SELECT key, count(*) n FROM facts GROUP BY key").all();
console.log('facts by key', facts.map((r) => `${r.key}:${r.n}`).join(' '));
