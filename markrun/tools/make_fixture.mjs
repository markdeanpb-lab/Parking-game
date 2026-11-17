// Fixture round from REAL performances (placeholder names/clues/odds) for parallel development.
import fs from 'node:fs';
import { historyDb } from '../server/db.mjs';
import { buildRacePlan, analyse } from '../server/game/raceplan.mjs';
const db = historyDb();
const P = db.prepare("SELECT run_date, official_s, progress, pacing_source FROM performances WHERE pool='main' ORDER BY run_date").all()
  .map((p) => ({ date: p.run_date, officialS: p.official_s, progress: JSON.parse(p.progress), pacingSource: p.pacing_source }));
// deterministic: find a banded 5-set with a late lead change
let field;
for (let i = 0; i < P.length && !field; i++) {
  const band = P.filter((x) => Math.abs(x.officialS - P[i].officialS) <= 40);
  for (let k = 0; k + 5 <= band.length; k++) {
    const f = band.slice(k, k + 5).map((x, j) => ({ ...x, id: `r${j + 1}` }));
    const a = analyse(f);
    if (a.lateLeadChange && a.leadChanges >= 3 && a.winningMarginS <= 6) { field = f; break; }
  }
}
const cols = [['#ff4757', '#ffd32a', 'Tomato'], ['#1e90ff', '#ffffff', 'Royal Blue'], ['#2ed573', '#1e272e', 'Lime'], ['#ffa502', '#5f27cd', 'Tangerine'], ['#a55eea', '#f8f8f8', 'Violet']];
const plan = buildRacePlan('fixture-1', field);
plan.commentary = plan.events.filter((e) => e.type !== 'overtake' || Math.random() < 0.5).map((e) => ({ broadcastS: e.broadcastS, text: `[PLACEHOLDER ${e.type}] ${e.by || e.to || e.who || ''}`, speaker: 'jeff', priority: 2 }));
const round = {
  id: 'fixture-1', number: 1,
  public: {
    roundId: 'fixture-1', number: 1, title: 'The Placeholder Stakes',
    runners: field.map((r, i) => ({ id: r.id, lane: i + 1, nickname: `PLACEHOLDER Runner ${i + 1}`, tagline: 'placeholder tagline',
      colour: { primary: cols[i][0], secondary: cols[i][1], name: cols[i][2] },
      look: { build: ['stocky', 'lanky', 'compact', 'tall', 'compact'][i], hat: [null, 'headband', 'cap', null, 'beanie'][i], hair: 'short', accessory: [null, 'sunglasses', null, 'medal', null][i], skin: '#f1c6a5', face: 'grin' },
      personality: 'placeholder', intro: 'placeholder intro line',
      publicClue: { id: `c${i}a`, text: 'PLACEHOLDER public clue', category: 'volume' }, odds: { win: [3.5, 4, 5, 6, 8][i], display: ['5/2', '3/1', '4/1', '5/1', '7/1'][i] } })),
    matchups: [{ id: 'm1', a: 'r1', b: 'r2', odds: { a: 1.9, b: 1.9 } }],
    rules: { minStake: 10, maxBetsPerPlayer: 3 },
  },
  private: { p1: field.map((r, i) => ({ runnerId: r.id, id: `c${i}b`, text: 'PLACEHOLDER private clue (p1)', category: 'form' })),
             p2: field.map((r, i) => ({ runnerId: r.id, id: `c${i}c`, text: 'PLACEHOLDER private clue (p2)', category: 'weather' })) },
  racePlan: plan,
};
fs.writeFileSync('data/fixtures/round.json', JSON.stringify(round));
console.log('fixture', field.map((f) => `${f.id}:${f.officialS}`).join(' '), plan.summary, 'broadcast', plan.timeMap.durationS, 's');
