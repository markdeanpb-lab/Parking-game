// Cutscene planner (server/game/cutscenes.mjs) + the pure broadcast-clock maths (client/tv/race/cutscenes/clock.js).
// Real performances from the history DB; the plan's real outcomes and timings must never move.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { historyDb } from '../server/db.mjs';
import { loadData } from '../server/game/data.mjs';
import { buildRacePlan, raceToBroadcast, broadcastToRace, distanceAt, timeAtDistance } from '../server/game/raceplan.mjs';
import { planCutscenes, runnerStats, RULES, PAUSING, cutsceneTruths, CUTSCENE_KINDS, LINE_BANKS, VISUAL_VARIANTS, PER_NIGHT_CAP } from '../server/game/cutscenes.mjs';
import { simulateClock, slowRate } from '../client/tv/race/cutscenes/clock.js';

const data = loadData(historyDb());
const main = data.perfs.filter((p) => p.pool === 'main');
const divs = data.perfs.filter((p) => p.diversions?.length);
const rand = (seed) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

// fields of 5 real runs (a few with a funfair diversion); runners carry their real facts
function fields(n = 70) {
  const out = [];
  const R = rand(99);
  for (let k = 0; k < n; k++) {
    const pool = k % 7 === 0 ? [...divs.slice(0, 1 + (k % 3)), ...main] : main;
    const picks = new Set(); const base = pool[Math.floor(R() * pool.length)];
    picks.add(k % 7 === 0 ? divs[k % divs.length] : base);
    while (picks.size < 5) { const p = main[Math.floor(R() * main.length)]; if (Math.abs(p.officialS - base.officialS) < 150) picks.add(p); }
    const perfs = [...picks];
    const plan = buildRacePlan(`T${k}`, perfs.map((p, i) => ({ id: `r${i + 1}`, officialS: p.officialS, progress: p.progress, pacingSource: p.pacingSource, diversions: p.diversions || null })));
    const runners = perfs.map((p, i) => ({ id: `r${i + 1}`, shortName: `Runner ${i + 1}`, date: p.date, perf: { facts: p.facts, features: p.features } }));
    out.push({ plan, runners, perfs });
  }
  return out;
}
const F = fields();
const snapshot = (plan) => JSON.stringify({ tm: plan.timeMap, runners: plan.runners.map((r) => [r.id, r.officialS, r.progress]), order: plan.finishOrder, ev: plan.events });
const leaderM = (plan, b) => { const t = broadcastToRace(plan.timeMap, Math.max(0, b)); return Math.max(...plan.runners.map((r) => distanceAt(r.progress, t))); };
const B = (plan, id, m) => raceToBroadcast(plan.timeMap, timeAtDistance(plan.runners.find((r) => r.id === id).progress, m));

test('planner output shape, determinism, no mutation of the plan', () => {
  for (const { plan, runners } of F.slice(0, 20)) {
    const before = snapshot(plan);
    const a = planCutscenes({ racePlan: plan, runners, rng: 5 });
    const b = planCutscenes({ racePlan: plan, runners, rng: 5 });
    assert.deepEqual(a, b, 'same seed, same plan');
    assert.equal(snapshot(plan), before, 'the race plan is untouched');
    for (const c of a) {
      assert.ok(CUTSCENE_KINDS[c.kind], c.kind);
      assert.ok(['replay', 'freeze', 'inset', 'slowmo', 'pre', 'post'].includes(c.mode));
      assert.ok(Number.isFinite(c.atBroadcastS) && c.durationS > 0);
      assert.ok(plan.runners.some((r) => r.id === c.who));
      assert.ok(Array.isArray(c.lines) && c.lines.length <= 2);
      for (const l of c.lines) { assert.ok(['jeff', 'pam'].includes(l.speaker)); assert.ok(l.text.length > 3 && l.text.length < 90); }
      assert.ok(typeof c.truth === 'string' && c.truth.length > 20, `${c.kind} has a "what really happened" line`);
      assert.match(c.id, /^cs\d+$/);
    }
  }
});

test('pacing: <= 3 pausing, <= 18 s pause, >= 20 s apart, nothing in the last 300 m, no pause in a live battle', () => {
  let total = 0;
  for (const { plan, runners } of F) {
    const cs = planCutscenes({ racePlan: plan, runners, rng: 3 });
    total += cs.length;
    const pz = cs.filter((c) => PAUSING.has(c.mode)).sort((a, b) => a.atBroadcastS - b.atBroadcastS);
    assert.ok(pz.length <= RULES.maxPausing, `${pz.length} pausing`);
    assert.ok(pz.reduce((s, c) => s + c.durationS, 0) <= RULES.maxPauseS + 1e-9);
    for (let i = 1; i < pz.length; i++) assert.ok(pz[i].atBroadcastS - pz[i - 1].atBroadcastS >= RULES.pauseGapS, 'pauses >= 20 s apart');
    const lapB = plan.events.find((e) => e.type === 'lap')?.broadcastS;
    for (const c of cs) {
      if (c.mode === 'pre' || c.mode === 'post' || c.params.overlay) continue;
      const end = c.mode === 'slowmo' ? c.params.untilBroadcastS : PAUSING.has(c.mode) ? c.atBroadcastS : c.atBroadcastS + c.durationS;
      assert.ok(leaderM(plan, end) < RULES.noGoM, `${c.kind} ends with the leader at ${leaderM(plan, end).toFixed(0)} m`);
      assert.ok(c.atBroadcastS >= RULES.startQuietS, `${c.kind} not in the start scrum`);
    }
    for (const c of pz) {
      if (leaderM(plan, c.atBroadcastS) >= RULES.scrumM) assert.ok(!plan.events.some((e) => (e.type === 'overtake' || e.type === 'lead_change') && Math.abs(e.broadcastS - c.atBroadcastS) <= RULES.battleWindowS), `${c.kind} pauses during a pass`);
      if (lapB != null) assert.ok(Math.abs(lapB - c.atBroadcastS) >= RULES.marketGapS, 'clear of the halfway market');
    }
    const pre = cs.filter((c) => c.mode === 'pre'), post = cs.filter((c) => c.mode === 'post');
    assert.ok(pre.length <= 1 && post.filter((c) => !c.params.tag).length <= 1);
    for (const c of post) assert.ok(c.atBroadcastS >= Math.max(...plan.runners.map((r) => raceToBroadcast(plan.timeMap, r.officialS))), 'post plays after the last finisher');
    for (const c of pre) assert.ok(c.atBroadcastS < 0);
  }
  assert.ok(total > F.length * 2, `cutscenes are common (${total} in ${F.length} races)`);
});

test('triggers come from real data', () => {
  const seen = new Set();
  for (const [k, { plan, runners, perfs }] of F.entries()) {
    const cs = planCutscenes({ racePlan: plan, runners, rng: 11 + k });
    const S = Object.fromEntries(plan.runners.map((r) => [r.id, runnerStats(r)]));
    const facts = (id) => perfs[Number(id.slice(1)) - 1].facts;
    for (const c of cs) {
      seen.add(c.kind);
      const s = S[c.who];
      switch (c.kind) {
        case 'cannonball': assert.ok(s.firstKmVsAvg <= -0.06); assert.equal(Math.min(...Object.values(S).map((x) => x.firstKmVsAvg)), s.firstKmVsAvg); break;
        case 'spaghetti_legs': assert.ok(s.halfRatio >= 1.05 && s.firstKmVsAvg <= -0.03 && s.pace(c.params.m0, c.params.m1) >= 1.08); break;
        case 'goose_toll': assert.ok(s.pace(c.params.m0, c.params.m1) >= 1.12); assert.ok(c.atBroadcastS > B(plan, c.who, c.params.m1), 'replay comes after the real slowdown'); break;
        case 'everest': assert.ok(s.hill1 >= 1.18); break;
        case 'treadmill_hill': assert.ok(s.hill2 - s.hill1 >= 0.04); break;
        case 'ice_cream_van': assert.ok(s.pace(c.params.m0, c.params.m1) <= 0.91 && facts(c.who).weather.temp_c >= 11); break;
        case 'raincloud': { const w = facts(c.who).weather; assert.ok(w.coco === 7 || w.coco === 8 || w.prcp_mm > 0.3); break; }
        case 'mirror_signal': assert.ok(plan.events.some((e) => e.type === 'overtake' && e.by === c.who && e.on === c.params.on)); break;
        case 'photographer': { const g = Math.abs(plan.runners.find((r) => r.id === c.params.other).officialS - plan.runners.find((r) => r.id === c.who).officialS); assert.ok(g <= 1.0 + 1e-9); break; }
        case 'sore_loser_var': { const o = [...plan.runners].sort((a, b) => a.officialS - b.officialS); assert.equal(o[1].id, c.who); assert.ok(o[1].officialS - o[0].officialS < 3); break; }
        case 'hook_a_duck': case 'test_strength': case 'funfair_sign': case 'funfair_drone': case 'funfair_rejoin': case 'funfair_stretch':
          assert.ok(plan.runners.find((r) => r.id === c.who).diversions?.length, 'funfair only for a runner whose real GPS trace diverted'); break;
        case 'pointing_standoff': assert.equal(Math.round(plan.runners.find((r) => r.id === c.who).officialS), Math.round(plan.runners.find((r) => r.id === c.params.other).officialS)); break;
        case 'sub20_wall': assert.ok(plan.runners.some((r) => r.officialS <= 1237)); for (const id of c.params.near) { const o = plan.runners.find((r) => r.id === id).officialS; assert.ok(o >= 1200 && o <= 1237); } break;
        case 'mirror_routine': assert.ok(plan.events.some((e) => e.type === 'overtake' && e.by === c.who && e.on === c.params.on)); assert.ok(new Date(perfs[Number(c.who.slice(1)) - 1].date) - new Date(perfs[Number(c.params.on.slice(1)) - 1].date) >= 3 * 365 * 864e5); break;
        case 'heart_vs_heart': assert.ok(Math.abs(facts(c.who).hr_mean - facts(c.params.other).hr_mean) >= 25); break;
        case 'breakfast': assert.ok(facts(c.who).warmup_km.km > 0); break;
        case 'before_after': assert.equal(facts(c.who).race_upcoming.name, facts(c.params.other).race_recent.name); break;
        case 'road_to_100': assert.deepEqual([...c.params.numbers].sort((a, b) => a - b), perfs.map((p) => p.facts.finsbury_number).sort((a, b) => a - b)); break;
        case 'incline_button': assert.ok(facts(c.who).treadmill_7d > 0 && s.hill1 >= 1.15); break;
        case 'pb_bell': assert.equal(facts(c.who).was_finsbury_pb, true); assert.ok([...plan.runners].sort((a, b) => a.officialS - b.officialS).slice(0, 2).some((r) => r.id === c.who)); break;
        case 'wrong_kit_bag': { const ct = facts(c.who).cross_training_7d || {}; assert.ok(['Swim', 'WeightTraining', 'Yoga', 'AlpineSki'].some((k) => ct[k])); break; }
        default: assert.fail(`unexpected ${c.kind}`);
      }
    }
    if (!plan.runners.some((r) => r.diversions?.length)) assert.ok(!cs.some((c) => CUTSCENE_KINDS[c.kind].cat === 'funfair'));
  }
  for (const k of ['cannonball', 'spaghetti_legs', 'treadmill_hill', 'raincloud', 'photographer', 'road_to_100', 'breakfast', 'pb_bell', 'sub20_wall']) assert.ok(seen.has(k), `${k} fires on real data`);
  assert.ok(!seen.has('mirror_signal'), 'Mirror, Signal, Manoeuvre is benched');
  assert.ok(seen.has('hook_a_duck') || seen.has('test_strength'), 'a funfair signature fires');
});

test('no weather facts -> no weather gag; no diversion -> no funfair', () => {
  for (const { plan } of F.slice(0, 25)) {
    const bare = { ...plan, runners: plan.runners.map((r) => ({ ...r, diversions: null })) };
    const cs = planCutscenes({ racePlan: bare, runners: [], rng: 1 });
    assert.ok(!cs.some((c) => ['raincloud', 'ice_cream_van'].includes(c.kind)));
    assert.ok(!cs.some((c) => CUTSCENE_KINDS[c.kind].cat === 'funfair'));
  }
});

test('the funfair package: sign, slow-mo, drone, set piece at the fair, back on course; lap 1 set-up, lap 2 payoff', () => {
  const withDiv = F.filter((f) => f.plan.runners.some((r) => r.diversions?.length));
  assert.ok(withDiv.length >= 5);
  let lap2 = 0;
  for (const { plan, runners } of withDiv) {
    const cs = planCutscenes({ racePlan: plan, runners, rng: 2 });
    const g1 = cs.filter((c) => c.group === 'funfair-1');
    const kinds = g1.map((c) => c.kind);
    for (const k of ['funfair_stretch', 'funfair_sign', 'funfair_drone', 'funfair_rejoin']) assert.ok(kinds.includes(k), `lap 1 has ${k}`);
    const set1 = g1.find((c) => c.kind === 'hook_a_duck' || c.kind === 'test_strength');
    assert.ok(set1 && set1.mode === 'freeze', 'lap-1 set piece freezes the clock');
    const who = set1.who, d = plan.runners.find((r) => r.id === who).diversions[0];
    const slow = g1.find((c) => c.kind === 'funfair_stretch');
    assert.ok(slow.params.rate < 0.6 && slow.atBroadcastS < B(plan, who, d.fromM) && slow.params.untilBroadcastS > B(plan, who, d.toM), 'slow-mo covers his whole detour');
    assert.ok(set1.atBroadcastS > B(plan, who, d.fromM) && set1.atBroadcastS < B(plan, who, d.toM), 'the set piece happens while he is AT the fair');
    const order = ['funfair_sign', 'funfair_drone', set1.kind, 'funfair_rejoin'].map((k) => g1.find((c) => c.kind === k).atBroadcastS);
    assert.deepEqual([...order].sort((a, b) => a - b), order, 'beats in order');
    const rejoin = g1.find((c) => c.kind === 'funfair_rejoin');
    const bankKey = rejoin.params.ratio <= 0.97 ? 'rejoin_fast' : rejoin.params.ratio >= 1.03 ? 'rejoin_slow' : 'rejoin_even';
    const n = String(Math.max(1, Math.round(rejoin.params.costS)));
    assert.ok(LINE_BANKS[bankKey].some((l) => l.text.replace('{n}', n) === rejoin.lines[0].text), `data-true rejoin line: ${rejoin.lines[0].text}`);
    const g2 = cs.filter((c) => c.group === 'funfair-2' && c.kind === set1.kind);
    if (g2.length) { lap2++; assert.ok(['freeze', 'inset'].includes(g2[0].mode)); assert.notEqual(g2[0].params.variant, set1.params.variant); }
  }
  assert.ok(lap2 >= 1, 'a lap-2 payoff plays');
});

test('the night: cooldowns via session memory, funfair signature rotates', () => {
  const mem = {};
  const plan = F[1].plan, runners = F[1].runners;
  const r1 = planCutscenes({ racePlan: plan, runners, rng: 4, sessionMemory: mem, roundNumber: 1 });
  const r2 = planCutscenes({ racePlan: plan, runners, rng: 4, sessionMemory: mem, roundNumber: 2 });
  const pausing1 = new Set(r1.filter((c) => PAUSING.has(c.mode) || c.mode === 'inset').map((c) => c.kind));
  for (const c of r2) assert.ok(!pausing1.has(c.kind), `${c.kind} cooled down`);
  assert.ok(mem.cutscenes.races === 2);
  const r6 = planCutscenes({ racePlan: plan, runners, rng: 4, sessionMemory: mem, roundNumber: 6 });
  assert.ok(r6.length >= r2.length, 'cooldowns expire');
  // funfair signature: never the same twice in a night
  const fz = F.filter((f) => f.plan.runners.some((r) => r.diversions?.length)).slice(0, 2);
  const m2 = {};
  const s1 = planCutscenes({ racePlan: fz[0].plan, runners: fz[0].runners, rng: 1, sessionMemory: m2, roundNumber: 3 }).find((c) => c.group === 'funfair-1' && ['hook_a_duck', 'test_strength'].includes(c.kind));
  const s2 = planCutscenes({ racePlan: fz[1].plan, runners: fz[1].runners, rng: 1, sessionMemory: m2, roundNumber: 4 }).find((c) => c.group === 'funfair-1' && ['hook_a_duck', 'test_strength'].includes(c.kind));
  assert.ok(s1 && s2 && s1.kind !== s2.kind, 'rotated');
});

test('timing is unchanged: every runner still finishes at the plan broadcast time; pauses and slow-mo only add wall time', () => {
  for (const { plan, runners } of F.slice(0, 30)) {
    const cs = planCutscenes({ racePlan: plan, runners, rng: 8 });
    const fin = plan.runners.map((r) => ({ id: r.id, b: raceToBroadcast(plan.timeMap, r.officialS) }));
    const end = Math.max(...fin.map((f) => f.b)) + 4;
    const sim = simulateClock(cs, { to: end, dt: 0.05 });
    const plain = simulateClock([], { to: end, dt: 0.05 });
    // b never jumps or runs backwards
    for (let i = 1; i < sim.frames.length; i++) { const d = sim.frames[i].b - sim.frames[i - 1].b; assert.ok(d >= -1e-12 && d <= 0.05 + 1e-9); }
    // the first frame at/after each finish shows that runner exactly at the line, at his official race time
    for (const f of fin) {
      const fr = sim.frames.find((x) => x.b >= f.b - 1e-9);
      assert.ok(fr.b - f.b < 0.051, 'no finish is skipped over');
      const raceS = broadcastToRace(plan.timeMap, f.b);
      assert.ok(Math.abs(raceS - plan.runners.find((r) => r.id === f.id).officialS) < 1e-6);
    }
    // wall time added = the pauses (+ slow-mo); post cutscenes play after the end
    const pauseIn = cs.filter((c) => PAUSING.has(c.mode)).reduce((s, c) => s + c.durationS, 0) + cs.filter((c) => c.mode === 'post').reduce((s, c) => s + c.durationS, 0);
    assert.ok(Math.abs(sim.pauseS - pauseIn) < 0.11, `pause ${sim.pauseS} vs ${pauseIn}`);
    assert.ok(sim.wallS >= plain.wallS + pauseIn - 0.11);
    // slow-mo is one shared clock factor in [rate, 1]
    for (const c of cs.filter((x) => x.mode === 'slowmo')) {
      const mid = (c.atBroadcastS + c.params.untilBroadcastS) / 2;
      assert.ok(Math.abs(slowRate(cs, mid) - c.params.rate) < 1e-9);
      assert.equal(slowRate(cs, c.atBroadcastS - 0.01), 1);
    }
  }
});

test('truth cards for the reveal (no real names, no dates)', () => {
  for (const { plan, runners } of F.slice(0, 30)) {
    plan.cutscenes = planCutscenes({ racePlan: plan, runners, rng: 6 });
    for (const t of cutsceneTruths(plan)) {
      assert.ok(t.text.length > 20);
      assert.doesNotMatch(t.text, /\b(19|20)\d\d\b/, 'no years');
      assert.doesNotMatch(t.text, /\d+:\d\d/, 'no clock times');
    }
    delete plan.cutscenes;
  }
});

test('variety across a night: <= 2 of each kind, lines never repeat, visual variants rotate', () => {
  for (let night = 0; night < 4; night++) {
    const mem = {};
    const count = {}, lines = new Set(), vars = {};
    for (let k = 1; k <= 8; k++) {
      const { plan, runners } = F[(night * 8 + k) % F.length];
      const cs = planCutscenes({ racePlan: plan, runners, rng: 100 + night * 10 + k, sessionMemory: mem, roundNumber: k });
      for (const kind of new Set(cs.map((c) => c.kind))) count[kind] = (count[kind] || 0) + 1;
      for (const c of cs) {
        for (const l of c.lines) { if (c.params.callback) continue; assert.ok(!lines.has(`${c.kind}|${l.text}`) || c.group, `repeated line ${l.text}`); lines.add(`${c.kind}|${l.text}`); }
        if (VISUAL_VARIANTS[c.kind] && !c.group && c.kind !== 'mirror_signal') { const v = c.params.variant; assert.ok(VISUAL_VARIANTS[c.kind].includes(v), `${c.kind} variant ${v}`); (vars[c.kind] ||= []).push(v); }
      }
    }
    for (const [kind, n] of Object.entries(count)) assert.ok(n <= (CUTSCENE_KINDS[kind].story ? { sub20_wall: 4, pb_bell: 3, road_to_100: 8 }[kind] : PER_NIGHT_CAP), `${kind} x${n} in a night`);
    for (const [kind, vs] of Object.entries(vars)) if (vs.length === 2) assert.notEqual(vs[0], vs[1], `${kind} variant rotates`);
  }
  for (const [k, bank] of Object.entries(LINE_BANKS)) assert.ok(bank.length >= 3, `${k} has 3+ lines`);
});

test('batch 2: facts gate the training-life and pair gags (missing fact -> no gag); one pause per race', () => {
  const strip = (runners) => runners.map((r) => ({ ...r, date: undefined, perf: { facts: {}, features: {} } }));
  for (const [k, { plan, runners }] of F.slice(0, 40).entries()) {
    const cs = planCutscenes({ racePlan: plan, runners: strip(runners), rng: 300 + k });
    for (const kind of ['heart_vs_heart', 'breakfast', 'before_after', 'incline_button', 'pb_bell', 'wrong_kit_bag', 'mirror_routine', 'road_to_100', 'raincloud']) assert.ok(!cs.some((c) => c.kind === kind), `${kind} without its fact`);
    const full = planCutscenes({ racePlan: plan, runners, rng: 300 + k });
    assert.ok(full.filter((c) => PAUSING.has(c.mode)).length <= 1, 'at most one pause');
    for (const c of full) if (['sub20_wall', 'heart_vs_heart', 'mirror_routine', 'before_after', 'incline_button'].includes(c.kind)) assert.ok(!PAUSING.has(c.mode), `${c.kind} never pauses`);
    for (const c of full) if (c.kind === 'pb_bell' || c.kind === 'road_to_100' || c.kind === 'pointing_standoff') assert.equal(c.mode, 'post');
  }
});

test('batch 2: night storylines (wall holes, bell rings, road-to-100 stamps) live in session memory', () => {
  const mem = {};
  let rings = 0, walls = 0, stamped = 0;
  for (let k = 1; k <= 8; k++) {
    const { plan, runners } = F[(k * 5) % F.length];
    const cs = planCutscenes({ racePlan: plan, runners, rng: 900 + k, sessionMemory: mem, roundNumber: k });
    const b = cs.find((c) => c.kind === 'pb_bell'); if (b) { rings++; assert.equal(b.params.ring, rings); }
    const w = cs.find((c) => c.kind === 'sub20_wall'); if (w) { walls++; }
    const r = cs.find((c) => c.kind === 'road_to_100'); if (r) { assert.deepEqual(r.params.before, [...new Set(r.params.before)]); stamped++; }
  }
  assert.ok(rings <= 3 && walls <= 4);
  assert.equal(mem.cutscenes.bell, rings); assert.equal(mem.cutscenes.wall.shown, walls);
  assert.ok(stamped >= 6 && mem.cutscenes.road.length > 0);
});
