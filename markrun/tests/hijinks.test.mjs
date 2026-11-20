// Live hijinks v2 (server/game/hijinks.mjs) and the eased broadcast clock (raceplan.retimeForWindows).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { planHijinks, applyHijinks, hijinkWindows, trainingFacts, HIJINK_KINDS, RULES } from '../server/game/hijinks.mjs';
import { timeAtDistance, raceToBroadcast, broadcastToRace, distanceAt, rankAt, retimeForWindows } from '../server/game/raceplan.mjs';

const fx = JSON.parse(fs.readFileSync(new URL('../data/fixtures/round.json', import.meta.url), 'utf8'));
const plan = fx.racePlan, runners = fx.public.runners;
const ids = plan.runners.map((r) => r.id);
// a made-up training week for the fixture's runners (the fixture has no facts)
const facts = { [ids[0]]: { cross_training_7d: { Ride: { count: 2, minutes: 90 } }, treadmill_7d: 1 }, [ids[1]]: { intervals_7d: 1, cross_training_7d: { Swim: { count: 1, minutes: 30 } } }, [ids[2]]: { race_upcoming: { name: 'x', km: 10, days_after: 1 } } };
const backedBy = { [ids[0]]: ['Mark'], [ids[1]]: ['Jo'] };

test('retimeForWindows: real time inside the windows, same race, monotone clock, nothing mutated', () => {
  const before = JSON.stringify(plan);
  const W = [{ t0: 300, t1: 305, rate: 1, ramp: 4 }, { t0: 700, t1: 704, rate: 1, ramp: 4 }];
  const np = retimeForWindows(plan, W);
  assert.equal(JSON.stringify(plan), before, 'input plan untouched');
  assert.deepEqual(np.runners, plan.runners, 'runners (progress, officialS) untouched');
  assert.deepEqual(np.finishOrder, plan.finishOrder);
  const m = np.timeMap.map;
  for (let i = 1; i < m.length; i++) { assert.equal(m[i][0], plan.timeMap.map[i][0]); assert.ok(m[i][1] > m[i - 1][1], 'monotone'); }
  for (const w of W) for (let t = w.t0; t < w.t1; t++) assert.ok(Math.abs((m[t + 1][1] - m[t][1]) - 1) < 1e-6, `1x at race ${t}`);
  assert.ok(np.timeMap.durationS > plan.timeMap.durationS, 'the slowed race is longer');
  // every event at its own race moment on the new clock, in the same order
  for (const e of np.events) assert.ok(Math.abs(e.broadcastS - raceToBroadcast(np.timeMap, e.raceS)) < 0.02);
  assert.deepEqual(np.events.map((e) => e.type + e.raceS), plan.events.map((e) => e.type + e.raceS));
  // commentary keeps its race moment
  for (const [i, c] of (np.commentary || []).entries()) assert.ok(Math.abs(broadcastToRace(np.timeMap, c.broadcastS) - broadcastToRace(plan.timeMap, plan.commentary[i].broadcastS)) < 0.6);
});

test('retimeForWindows: a duration budget speeds up the middle only (and never past the cap)', () => {
  const W = Array.from({ length: 8 }, (_, i) => ({ t0: 200 + i * 100, t1: 204 + i * 100, rate: 1, ramp: 4 }));
  const free = retimeForWindows(plan, W), capped = retimeForWindows(plan, W, { maxDurationS: free.timeMap.durationS - 15 });
  assert.ok(capped.timeMap.durationS <= free.timeMap.durationS - 15 + 0.2);
  assert.ok(capped.timeMap.retimed.speedup > 1 && capped.timeMap.retimed.speedup <= 1.8);
  const m = capped.timeMap.map; for (const w of W) assert.ok(Math.abs((m[w.t0 + 2][1] - m[w.t0 + 1][1]) - 1) < 1e-6, 'still 1x in the windows');
  const fin = Math.min(...plan.runners.map((r) => timeAtDistance(r.progress, 4500)));
  const tail = (tm) => tm.map.at(-1)[1] - raceToBroadcast(tm, fin);
  assert.ok(Math.abs(tail(capped.timeMap) - tail(plan.timeMap)) < 0.05, 'the finale is untouched');
});

test('planHijinks v2: real consequences, real training facts, spaced, the final battle clean', () => {
  const hj = planHijinks({ racePlan: plan, runners, facts, backedBy, rng: 3 });
  assert.deepEqual(hj, planHijinks({ racePlan: plan, runners, facts, backedBy, rng: 3 }), 'deterministic');
  assert.ok(hj.length >= 4 && hj.length <= RULES.max, `got ${hj.length}`);
  assert.equal(new Set(hj.map((h) => h.kind)).size, hj.length, 'one of each kind');
  const tFinal = Math.min(...plan.runners.map((r) => timeAtDistance(r.progress, 4000)));
  for (const h of hj) {
    const K = HIJINK_KINDS[h.kind]; assert.ok(K, h.kind);
    assert.ok(h.raceS.telegraph < h.raceS.at && h.raceS.at < h.raceS.beat && h.raceS.beat < h.raceS.until);
    assert.ok(h.warn && h.caption && h.line?.text && h.truth);
    if (K.fact) assert.ok(trainingFacts(facts[h.who])[K.fact], `${h.kind} without his own ${K.fact} fact`);
    if (h.consequence) {
      // the place really changes hands round the beat
      const pre = rankAt(plan.runners, h.raceS.beat - 6), post = rankAt(plan.runners, h.raceS.beat + 20);
      const other = h.consequence.other;
      if (h.consequence.type === 'lose') { assert.ok(pre.indexOf(h.who) < pre.indexOf(other) && post.indexOf(h.who) > post.indexOf(other), `${h.id} lose`); }
      else { assert.ok(pre.indexOf(h.who) > pre.indexOf(other) && post.indexOf(h.who) < post.indexOf(other), `${h.id} gain`); }
      // the final km: only THE moment (the deciding lead change, a backed runner in it)
      if (h.raceS.beat > tFinal) { assert.ok(h.finale && h.kind === 'lasso_reel', 'only the finale gag in the final km'); assert.ok(backedBy[h.who] || backedBy[other]); assert.equal(post[0], h.who); }
      assert.equal(h.consequence.from, pre.indexOf(h.who) + 1); assert.equal(h.consequence.to, post.indexOf(h.who) + 1);
    }
    if (backedBy[h.who] && h.consequence) assert.ok(h.after?.text.includes(backedBy[h.who][0]), 'a money line for the backer');
    if (h.consequence) assert.ok(h.retort?.text && h.retort.speaker !== h.line.speaker, 'a retort from the other commentator');
  }
  // after easing the clock: telegraph -> gag -> beat -> end, in order, never overlapping, beats at 1x
  const np = applyHijinks(plan, hj);
  const H = np.hijinks;
  for (let i = 0; i < H.length; i++) {
    const h = H[i];
    assert.ok(h.telegraphAtBroadcastS < h.atBroadcastS && h.atBroadcastS < h.beatBroadcastS && h.beatBroadcastS < h.untilBroadcastS);
    if (i) assert.ok(h.telegraphAtBroadcastS >= H[i - 1].untilBroadcastS, 'no overlap');
    const rate = 1 / (raceToBroadcast(np.timeMap, h.raceS.beat + 0.5) - raceToBroadcast(np.timeMap, h.raceS.beat - 0.5));
    assert.ok(rate < 1.05, `${h.id} beat at real time (${rate.toFixed(2)}x)`);
  }
  assert.ok(np.timeMap.durationS <= RULES.maxDurationS + 10, `broadcast ${np.timeMap.durationS} s`);
  assert.equal(hijinkWindows(hj).length, hj.filter((h) => h.raceS.slow0 != null).length);
});

test('trainingFacts reads only the counts / kinds (never names)', () => {
  const t = trainingFacts({ cross_training_7d: { Ride: { count: 3 } }, race_recent: { name: 'Some Half - 1:30', km: 21.1, days_before: 6 }, race_upcoming: { name: 'Big 10k', km: 10, days_after: 1 } });
  assert.ok(t.ride && t.half && t.raceTomorrow && !t.swim);
  assert.ok(!JSON.stringify(t).includes('Some Half') && !JSON.stringify(t).includes('Big 10k'));
});

test('planHijinks: nothing without a plan', () => {
  assert.deepEqual(planHijinks({}), []);
  assert.deepEqual(planHijinks({ racePlan: { runners: [] } }), []);
});
void distanceAt;
