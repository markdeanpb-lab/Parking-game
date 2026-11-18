// Real-data preview fixtures for the batch-2 cutscenes: one 5-run field per kind where its trigger really fires.
// node --disable-warning=ExperimentalWarning client/tv/race/cutscenes/make_fixtures.mjs  -> client/tv/race/cutscenes/fixtures/<kind>.json
import fs from 'node:fs';
import { historyDb } from '../../../../server/db.mjs';
import { loadData } from '../../../../server/game/data.mjs';
import { buildRacePlan } from '../../../../server/game/raceplan.mjs';
import { planCutscenes } from '../../../../server/game/cutscenes.mjs';
const root = new URL('../../../../', import.meta.url).pathname;
const tpl = JSON.parse(fs.readFileSync(root + 'client/tv/race/fixtures/real.json', 'utf8'));
const data = loadData(historyDb());
const pool = data.perfs.filter((p) => p.pool === 'main' && !p.diversions?.length);
let seed = 7; const R = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const want = ['pointing_standoff', 'sub20_wall', 'mirror_routine', 'heart_vs_heart', 'breakfast', 'before_after', 'road_to_100', 'incline_button', 'pb_bell', 'wrong_kit_bag'];
const got = {};
for (let k = 0; k < 6000 && Object.keys(got).length < want.length; k++) {
  const base = pool[Math.floor(R() * pool.length)];
  const picks = new Set([base]);
  const span = R() < 0.5 ? 60 : 160;
  while (picks.size < 5) { const p = pool[Math.floor(R() * pool.length)]; if (Math.abs(p.officialS - base.officialS) < span) picks.add(p); }
  const perfs = [...picks];
  const plan = buildRacePlan(`CF${k}`, perfs.map((p, i) => ({ id: `r${i + 1}`, officialS: p.officialS, progress: p.progress, pacingSource: p.pacingSource })));
  const runners = perfs.map((p, i) => ({ id: `r${i + 1}`, ...tpl.public.runners[i], date: p.date, perf: { facts: p.facts, features: p.features } }));
  for (const kind of want) {
    if (got[kind]) continue;
    const cs = planCutscenes({ racePlan: plan, runners, rng: 11 + k, roundNumber: 3 });
    if (!cs.some((c) => c.kind === kind && (kind !== 'sub20_wall' || c.params.near.length))) continue;
    const pub = { ...tpl.public, roundId: plan.roundId, runners: tpl.public.runners.map((r, i) => ({ ...r, id: `r${i + 1}`, lane: i + 1 })) };
    got[kind] = { id: plan.roundId, number: 3, public: pub, racePlan: plan, csRunners: runners.map((r) => ({ id: r.id, nickname: r.nickname, shortName: r.shortName, date: r.date, perf: r.perf })), seed: 11 + k };
    fs.writeFileSync(root + `client/tv/race/cutscenes/fixtures/${kind}.json`, JSON.stringify(got[kind]));
    console.log(kind, 'field', k, perfs.map((p) => p.officialS).join(' '));
  }
}
console.log('missing:', want.filter((k) => !got[k]).join(' ') || 'none');
