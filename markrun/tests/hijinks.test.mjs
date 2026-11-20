// Live hijinks planner (server/game/hijinks.mjs): every gag sits on something that really happens in the race.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { planHijinks, HIJINK_KINDS, RULES } from '../server/game/hijinks.mjs';
import { timeAtDistance, raceToBroadcast, broadcastToRace, distanceAt } from '../server/game/raceplan.mjs';

const fx = JSON.parse(fs.readFileSync(new URL('../data/fixtures/round.json', import.meta.url), 'utf8'));
const plan = fx.racePlan, runners = fx.public.runners;

test('planHijinks: deterministic, spaced, one of each kind, clear of the gun and the last 200 m', () => {
  const a = planHijinks({ racePlan: plan, runners, rng: 3 }), b = planHijinks({ racePlan: plan, runners, rng: 3 });
  assert.deepEqual(a, b);
  assert.ok(a.length >= 3 && a.length <= 6, `got ${a.length}`);
  assert.equal(new Set(a.map((h) => h.kind)).size, a.length);
  for (let i = 1; i < a.length; i++) assert.ok(a[i].atBroadcastS >= a[i - 1].untilBroadcastS + RULES.gapS - 1e-6);
  for (const h of a) {
    assert.ok(HIJINK_KINDS[h.kind], h.kind);
    assert.ok(h.atBroadcastS >= 16 && h.untilBroadcastS > h.atBroadcastS);
    const t = broadcastToRace(plan.timeMap, h.untilBroadcastS);
    assert.ok(Math.max(...plan.runners.map((r) => distanceAt(r.progress, t))) < 4800, `${h.id} runs into the last 200 m`);
    assert.ok(h.caption && !/\s/.test(h.caption.trim()), 'one-word caption');
    assert.ok(h.line?.text && ['jeff', 'pam'].includes(h.line.speaker));
    assert.ok(h.truth && /really|slower|overtake/.test(h.truth));
  }
});

test('planHijinks: the trigger is real (slowdown / surge / pass / slow climb)', () => {
  for (const rng of [1, 2, 3, 4, 5]) for (const h of planHijinks({ racePlan: plan, runners, rng })) {
    const r = plan.runners.find((x) => x.id === h.who);
    const pace = (m0, m1) => (timeAtDistance(r.progress, m1) - timeAtDistance(r.progress, m0)) / (m1 - m0) / (r.officialS / 5000);
    const trig = HIJINK_KINDS[h.kind].trig;
    if (trig === 'slow') assert.ok(pace(h.params.m0, h.params.m1) >= 1.08, `${h.kind} without a slowdown`);
    if (trig === 'surge') assert.ok(pace(h.params.m0, h.params.m1) <= 0.91, `${h.kind} without a surge`);
    if (trig === 'hill') assert.ok(pace(1720, 1960) >= 1.12);
    if (trig === 'overtake') {
      const e = plan.events.find((x) => Math.abs(x.broadcastS - h.params.passB) < 0.02 && (x.by || x.to) === h.who && (x.on || x.from) === h.other);
      assert.ok(e, `${h.kind}: no real pass at ${h.params.passB}`);
      assert.ok(h.atBroadcastS < h.params.passB && h.untilBroadcastS > h.params.passB);
    } else {
      // the gag's window covers (the middle of) the real course window
      const mid = raceToBroadcast(plan.timeMap, timeAtDistance(r.progress, (h.params.m0 + h.params.m1) / 2));
      assert.ok(mid > h.atBroadcastS - 1 && mid < h.untilBroadcastS + 1);
    }
  }
});

test('planHijinks: nothing without a plan', () => {
  assert.deepEqual(planHijinks({}), []);
  assert.deepEqual(planHijinks({ racePlan: { runners: [] } }), []);
});
