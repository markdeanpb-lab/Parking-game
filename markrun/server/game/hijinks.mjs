// MARKRUN live hijinks planner v2 (docs/HIJINKS_V2.md): Wacky Races in the race shot itself.
//
//   planHijinks({ racePlan, runners?, facts?, backedBy?, rng?, max? }) -> hijinks[]
//   hijinkWindows(hijinks) -> slow windows (race seconds) for retimeForWindows
//   applyHijinks(racePlan, hijinks, { maxDurationS }) -> NEW plan: clock eased to 1x round each beat, every broadcastS recomputed
//
// Every hijink is the visible CAUSE of something that really happens at that moment, and most of them have a real
// CONSEQUENCE: a place lost or gained on screen.
//   - a real pass where the passed runner had really slowed (>= 4% off his own pace): a "lose" gag on him
//   - a real pass where the passer had really surged (>= 4% quicker than his own pace): a "gain" gag on him
//   - any other real pass: leapfrog / cartwheel (gain for the passer)
//   - flavour (no place changes hands): the Hill rope on a slow lap-1 climb, raincloud / wasps on a real slow / fast 200 m
// Training-life gags use the runner's own facts for that morning (the 7 days before): rides, swims, weights, treadmill,
// intervals, a half last week, a marathon block, a race tomorrow. Names from activity titles are never used.
// Nothing here moves a runner or changes a time: the TV places runners from the plan and only animates on top.
// Pure: no DOM, no randomness beyond `rng`.
import { timeAtDistance, raceToBroadcast, distanceAt, rankAt, retimeForWindows } from './raceplan.mjs';

const HILLS = [[1720, 1960], [4220, 4460]];
const onHill = (m) => HILLS.some(([a, b]) => m >= a - 20 && m <= b + 20);
export const RULES = { slow: 1.04, surge: 0.96, gapB: 2, max: 10, beatBefore: 2.2, beatAfter: 1.8, ramp: 3.5, maxDurationS: 178 };

// kind: { cause: 'slow'|'surge'|'pass'|'hill'|'flavourSlow'|'flavourSurge', fact?, caption, warn (threat, shown in the uh-oh chip), angles, line }
export const HIJINK_KINDS = {
  // lose a place: he really slowed and someone really went past
  goose_chase: { cause: 'slow', caption: 'GOOSE!', warn: 'GOOSE AHEAD', angles: ['gag3q', 'gagside'], line: [{ speaker: 'jeff', text: 'The GOOSE has spotted him!' }, { speaker: 'pam', text: 'That goose has a grievance.' }] },
  banana: { cause: 'slow', caption: 'BANANA!', warn: 'BANANA SKIN', angles: ['gagside', 'gag3q'], line: [{ speaker: 'jeff', text: 'BANANA SKIN! He\'s all over the place!' }, { speaker: 'pam', text: 'Classic. Absolutely classic.' }] },
  raincloud: { cause: 'slow', caption: 'SOAKED!', warn: 'RAINCLOUD', angles: ['gag3q', 'gagside'], line: [{ speaker: 'pam', text: 'His own personal raincloud. Lovely.' }, { speaker: 'jeff', text: 'He\'s SOAKED!' }] },
  // gain a place: he really surged and really went past someone
  rocket_shoes: { cause: 'surge', caption: 'WHOOSH!', warn: 'SHOES FIZZING', angles: ['gagside', 'gagrear'], line: [{ speaker: 'jeff', text: 'ROCKET SHOES! He\'s found another gear!' }, { speaker: 'pam', text: 'Are those legal?' }] },
  wasps: { cause: 'surge', caption: 'WASPS!', warn: 'WASPS', angles: ['gag3q', 'gagside'], line: [{ speaker: 'jeff', text: 'WASPS! Run, run, RUN!' }, { speaker: 'pam', text: 'Motivation comes in many forms.' }] },
  ice_cream: { cause: 'surge', caption: 'ICE CREAM!', warn: 'ICE-CREAM VAN', angles: ['gagside', 'gag3q'], lookAhead: 2.5, line: [{ speaker: 'pam', text: 'He\'s heard the ice-cream van.' }, { speaker: 'jeff', text: 'Chase that van, son!' }] },
  // a pass with no pace story: show-off passes
  leapfrog: { cause: 'pass', caption: 'LEAPFROG!', warn: 'COMING THROUGH', angles: ['gagside', 'gag3q'], line: [{ speaker: 'jeff', text: 'He\'s gone straight OVER the top of him!' }, { speaker: 'pam', text: 'Cheeky.' }] },
  cartwheel: { cause: 'pass', caption: 'SHOW-OFF!', warn: 'SHOW-OFF ALERT', angles: ['gagside', 'gag3q'], line: [{ speaker: 'pam', text: 'Oh, he is NOT cartwheeling past him.' }, { speaker: 'jeff', text: 'A CARTWHEEL! At this stage!' }] },
  // the Hill
  hill_rope: { cause: 'hill', caption: 'HEAVE!', warn: 'THE HILL', angles: ['gagrear', 'gagside'], lookAhead: 3, line: [{ speaker: 'pam', text: 'Maureen\'s giving him a hand.' }, { speaker: 'jeff', text: 'HEAVE! HEAVE!' }] },
  // training life (his own week before this run)
  pedal_legs: { cause: 'surge', fact: 'ride', caption: 'PEDAL POWER!', warn: 'BIKE LEGS', angles: ['gagside', 'gag3q'], line: [{ speaker: 'jeff', text: 'He\'s been on the BIKE all week! Look at those legs go!' }, { speaker: 'pam', text: 'Somebody check his shoes for pedals.' }] },
  front_crawl: { cause: 'surge', fact: 'swim', caption: 'SPLASH!', warn: 'PUDDLE AHEAD', angles: ['gagside', 'gag3q'], line: [{ speaker: 'pam', text: 'He\'s been swimming this week. It shows.' }, { speaker: 'jeff', text: 'FRONT CRAWL! Straight through the puddle!' }] },
  lap_counter: { cause: 'surge', fact: 'intervals', caption: 'REP!', warn: 'STOPWATCH', angles: ['gag3q', 'gagside'], line: [{ speaker: 'jeff', text: 'Interval week! The stopwatch says GO!' }, { speaker: 'pam', text: 'He hears a beep, he runs. Like a dog with a whistle.' }] },
  flex_hill: { cause: 'surge', fact: 'weights', hillOnly: true, caption: 'FLEX!', warn: 'GUN SHOW', angles: ['gag3q', 'gagside'], line: [{ speaker: 'pam', text: 'All those gym sessions. Up the Hill like it\'s nothing.' }, { speaker: 'jeff', text: 'LOOK at the guns on him!' }] },
  incline_button: { cause: 'slow', fact: 'treadmill', caption: 'INCLINE?!', warn: 'NO INCLINE BUTTON', angles: ['gag3q', 'gagside'], line: [{ speaker: 'jeff', text: 'He\'s looking for the incline button!' }, { speaker: 'pam', text: 'Treadmill week. Real hills don\'t have a button, love.' }] },
  foil_cape: { cause: 'slow', fact: 'half', caption: 'DRAG!', warn: 'HEADWIND', angles: ['gagside', 'gagrear'], line: [{ speaker: 'pam', text: 'Still wearing his foil blanket from the half marathon.' }, { speaker: 'jeff', text: 'It\'s acting like a PARACHUTE!' }] },
  marathon_legs: { cause: 'slow', fact: 'marathon', caption: 'JELLY LEGS!', warn: 'MARATHON LEGS', angles: ['gagside', 'gag3q'], line: [{ speaker: 'jeff', text: 'Marathon legs! They\'ve gone to jelly!' }, { speaker: 'pam', text: 'Twenty-six miles of training in those knees.' }] },
  bubble_wrap: { cause: 'slow', fact: 'raceTomorrow', caption: 'CAREFUL!', warn: 'BIG RACE TOMORROW', angles: ['gagside', 'gag3q'], line: [{ speaker: 'pam', text: 'He\'s racing again tomorrow. Wrapped himself up.' }, { speaker: 'jeff', text: 'Bubble wrap! He\'s tiptoeing!' }] },
};
const GAIN_POOL = ['rocket_shoes', 'wasps', 'ice_cream'], LOSE_POOL = ['goose_chase', 'banana', 'raincloud'];
const FLAVOUR = { goose_chase: 1.0, banana: 0.8, raincloud: 0.4, rocket_shoes: 0.6, wasps: 0.5, ice_cream: 0.9, leapfrog: 0.7, cartwheel: 0.3, hill_rope: 0.2 };

// training facts for one runner's morning: { ride, swim, weights, treadmill, intervals, half, marathon, raceTomorrow }
export function trainingFacts(f = {}) {
  const xt = f.cross_training_7d || {}, yd = (f.day_before || []).map((x) => x.sport), rr = f.race_recent, ru = f.race_upcoming;
  const n = (s) => (xt[s]?.count || 0) + (yd.includes(s) ? 1 : 0);
  return {
    ride: n('Ride') + n('EBikeRide') > 0 ? { count: n('Ride') + n('EBikeRide'), text: `${n('Ride') + n('EBikeRide')} bike ride${n('Ride') + n('EBikeRide') > 1 ? 's' : ''} in the week before` } : null,
    swim: n('Swim') > 0 ? { count: n('Swim'), text: `${n('Swim')} swim${n('Swim') > 1 ? 's' : ''} in the week before` } : null,
    weights: n('WeightTraining') > 0 ? { count: n('WeightTraining'), text: `${n('WeightTraining')} weights session${n('WeightTraining') > 1 ? 's' : ''} in the week before` } : null,
    treadmill: (f.treadmill_7d || 0) > 0 ? { count: f.treadmill_7d, text: `${f.treadmill_7d} treadmill run${f.treadmill_7d > 1 ? 's' : ''} in the week before` } : null,
    intervals: (f.intervals_7d || 0) > 0 ? { count: f.intervals_7d, text: `${f.intervals_7d} interval session${f.intervals_7d > 1 ? 's' : ''} in the week before` } : null,
    half: rr && rr.km > 20 && rr.km < 30 && rr.days_before <= 7 ? { text: 'a half marathon earlier that week' } : null,
    marathon: (rr && rr.km > 40 && rr.days_before <= 14) || /marathon/i.test(f.training_block?.target || '') ? { text: rr && rr.km > 40 ? 'a marathon a fortnight before' : 'in the middle of a marathon block' } : null,
    raceTomorrow: ru && ru.days_after <= 1 ? { text: 'another race the very next day' } : null,
  };
}

function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const pct = (r) => Math.round(Math.abs(r - 1) * 100);
const km = (m) => `${(m / 1000).toFixed(1)} km`;
const UP = (s) => String(s).toUpperCase();

export function planHijinks({ racePlan, runners = [], facts = {}, backedBy = {}, backedIds = null, rng = 1, max = RULES.max } = {}) {
  if (!racePlan?.runners?.length || !racePlan.timeMap?.map) return [];
  const R = typeof rng === 'function' ? rng : mulberry(typeof rng === 'number' ? rng : 1);
  const tm = racePlan.timeMap, PR = racePlan.runners;
  const byId = Object.fromEntries(PR.map((r) => [r.id, r]));
  const name = (id) => { const x = runners.find((q) => q.id === id); return x?.shortName || x?.nickname || id; };
  const backers = (id) => backedBy[id] || (backedIds?.includes(id) ? ['Backed'] : []);
  const isB = (id) => backers(id).length > 0;
  const pace = (r, m0, m1) => (timeAtDistance(r.progress, Math.min(5000, m1)) - timeAtDistance(r.progress, Math.max(0, m0))) / (Math.min(5000, m1) - Math.max(0, m0)) / (r.officialS / 5000);
  const B = (t) => raceToBroadcast(tm, t);
  const rate = (t) => 1 / Math.max(1e-3, B(t + 0.5) - B(t - 0.5)); // race s per broadcast s here
  const leaderT = (m) => Math.min(...PR.map((r) => timeAtDistance(r.progress, m)));
  const tFinalKm = leaderT(4000), tLast300 = leaderT(4700);
  const top2 = (t) => rankAt(PR, t).slice(0, 2);
  const TF = Object.fromEntries(PR.map((r) => [r.id, trainingFacts(facts[r.id] || {})]));
  const C = [];
  // ---- real passes, with or without a pace story ----
  const seen = [];
  for (const e of racePlan.events || []) {
    if (e.type !== 'overtake' || e.atM < 350) continue;
    const tp = e.raceS;
    if (tp >= tLast300) continue;
    if (tp >= tFinalKm && (top2(tp - 2).includes(e.by) || top2(tp - 2).includes(e.on))) continue; // the final lead battle stays clean
    if (seen.some((s) => Math.abs(s.t - tp) < 8 && s.ids.includes(e.by) && s.ids.includes(e.on))) continue; // back-and-forth counts once
    seen.push({ t: tp, ids: [e.by, e.on] });
    { const hold = rankAt(PR, tp + 20); if (hold.indexOf(e.by) > hold.indexOf(e.on)) continue; } // a place given straight back isn't a consequence
    const A = byId[e.by], Bq = byId[e.on];
    const mA = distanceAt(A.progress, tp), mB = distanceAt(Bq.progress, tp);
    const pa = pace(A, mA - 150, mA + 50), pb = pace(Bq, mB - 150, mB + 50);
    const lead = (racePlan.events || []).some((x) => x.type === 'lead_change' && Math.abs(x.raceS - tp) < 3 && x.to === e.by);
    const base = { t: tp, atM: Math.round(mA), lead, early: mA < 700 };
    if (pb >= RULES.slow) {
      // he slowed and was passed: a "lose" gag on him
      const tf = TF[Bq.id];
      const kinds = [...LOSE_POOL, ...(onHill(mB) ? ['hill_rope'] : []), ...['incline_button', 'foil_cape', 'marathon_legs', 'bubble_wrap'].filter((k) => tf[HIJINK_KINDS[k].fact])];
      for (const kind of kinds) C.push({ ...base, kind, who: Bq.id, other: A.id, type: 'lose', ratio: pb, strength: (pb - 1) * 30,
        fact: HIJINK_KINDS[kind].fact ? tf[HIJINK_KINDS[kind].fact].text : null,
        truth: `${name(Bq.id)} really did slow down here (${pct(pb)}% off his own pace around ${km(mB)}) and ${name(A.id)} really did go past.` });
    }
    if (pa <= RULES.surge) {
      const tf = TF[A.id];
      const kinds = [...GAIN_POOL, ...['pedal_legs', 'front_crawl', 'lap_counter', 'flex_hill'].filter((k) => tf[HIJINK_KINDS[k].fact] && (!HIJINK_KINDS[k].hillOnly || onHill(mA)))];
      for (const kind of kinds) C.push({ ...base, kind, who: A.id, other: Bq.id, type: 'gain', ratio: pa, strength: (1 - pa) * 30,
        fact: HIJINK_KINDS[kind].fact ? tf[HIJINK_KINDS[kind].fact].text : null,
        truth: `${name(A.id)} really did surge here (${pct(pa)}% quicker than his own pace around ${km(mA)}) and really did pass ${name(Bq.id)}.` });
    }
    for (const kind of ['leapfrog', 'cartwheel']) C.push({ ...base, kind, who: A.id, other: Bq.id, type: 'gain', strength: 0.6,
      truth: `${name(A.id)} really did overtake ${name(Bq.id)} at ${km(mA)}. Without leaving the ground.` });
  }
  // ---- flavour: the Hill on lap 1 (no place has to change) ----
  for (const r of PR) {
    const h = pace(r, 1720, 1960);
    if (h >= 1.12) { const t = timeAtDistance(r.progress, 1880); C.push({ kind: 'hill_rope', who: r.id, type: 'none', t, atM: 1880, strength: (h - 1) * 12, ratio: h, truth: `${name(r.id)} climbed the Hill ${pct(h)}% slower than his average pace. Maureen did not actually tow him.` }); }
  }
  // ---- flavour fillers: a real slow / fast 200 m with no place changing hands ----
  for (const r of PR) {
    let bestS = null, bestF = null;
    for (let m0 = 400; m0 + 200 <= 4600; m0 += 25) {
      if (HILLS.some(([a, b]) => m0 < b && m0 + 200 > a)) continue;
      const p = pace(r, m0, m0 + 200);
      if (p >= 1.08 && (!bestS || p > bestS.p)) bestS = { m0, p };
      if (p <= 0.92 && (!bestF || p < bestF.p)) bestF = { m0, p };
    }
    if (bestS) for (const kind of LOSE_POOL) C.push({ kind, who: r.id, type: 'none', t: timeAtDistance(r.progress, bestS.m0 + 100), atM: bestS.m0 + 100, ratio: bestS.p, strength: (bestS.p - 1) * 10 - 1.5,
      truth: `${name(r.id)} really did slow down here: 200 m from ${km(bestS.m0)} at ${pct(bestS.p)}% below his own average pace.` });
    if (bestF) for (const kind of ['rocket_shoes', 'wasps']) C.push({ kind, who: r.id, type: 'none', t: timeAtDistance(r.progress, bestF.m0 + 100), atM: bestF.m0 + 100, ratio: bestF.p, strength: (1 - bestF.p) * 10 - 1.5,
      truth: `${name(r.id)} really did surge here: 200 m from ${km(bestF.m0)} at ${pct(bestF.p)}% quicker than his own average pace.` });
  }
  // ---- score ----
  for (const c of C) {
    const K = HIJINK_KINDS[c.kind];
    c.score = c.strength + R() * 0.8 + (FLAVOUR[c.kind] || 0)
      + (K.fact ? 3 : 0) // his own week: the best kind of gag
      + (isB(c.who) ? 4 : 0) + (c.other && isB(c.other) ? 2.5 : 0) // the money is watching
      + (c.type !== 'none' ? 2 : 0) + (c.lead ? 1.5 : 0) - (c.early ? 1.5 : 0);
    // race-second timeline: telegraph -> gag -> beat (1x) -> consequence
    const r = rate(c.t);
    c.beat = c.t + 0.5;
    c.at = c.beat - RULES.beatBefore - RULES.ramp - Math.min(20, 1.6 * r);
    c.tel = c.at - Math.min(26, 2.2 * r);
    c.until = c.beat + RULES.beatAfter + RULES.ramp * 0.6;
  }
  // ---- choose: best first, spread out, one of each kind, nothing overlapping (telegraph to until), >= gapB apart ----
  const out = [];
  const pool = C.filter((c) => c.tel > 50 && c.at > 0 && (c.type !== 'none' || c.t < tFinalKm || !top2(c.t).includes(c.who)) && c.until < tLast300);
  while (out.length < max) {
    let best = null, bestS = -1e9;
    for (const c of pool) {
      if (out.some((o) => o.kind === c.kind)) continue;
      if (out.some((o) => B(c.tel) < B(o.until) + RULES.gapB && B(c.until) > B(o.tel) - RULES.gapB)) continue;
      if (out.filter((o) => o.who === c.who).length >= 3) continue;
      const near = out.length ? Math.min(...out.map((o) => Math.abs(B(c.beat) - B(o.beat)))) : 20;
      const sc = c.score + 2 * Math.min(1, near / 18);
      if (sc > bestS) { bestS = sc; best = c; }
    }
    if (!best) break;
    out.push(best);
  }
  out.sort((a, b) => a.t - b.t);
  return out.map((c, i) => {
    const K = HIJINK_KINDS[c.kind];
    const subj = UP(name(c.who)), money = backers(c.who), moneyO = c.other ? backers(c.other) : [];
    const consequence = c.type === 'none' ? null : { type: c.type, places: 1, other: c.other };
    const warn = `${subj}${money.length ? ` (${money.join(' & ')}'s pick)` : ''}: ${K.warn}`;
    const after = !consequence ? null
      : money.length ? (c.type === 'lose' ? pickLine(R, [`There goes ${money[0]}'s place!`, `Uh oh. That's a place gone for ${money[0]}.`, `${money[0]} won't like that one bit.`]) : pickLine(R, [`${money[0]} will like THAT!`, `Up a place! ${money[0]} is out of the seat!`, `Good news for ${money[0]}!`]))
        : moneyO.length ? (c.type === 'lose' ? pickLine(R, [`And that's good news for ${moneyO[0]}.`, `${moneyO[0]} gratefully accepts.`]) : pickLine(R, [`Bad news for ${moneyO[0]}.`, `Sorry, ${moneyO[0]}.`]))
          : null;
    return {
      id: `hj${i + 1}`, kind: c.kind, who: c.who, ...(c.other ? { other: c.other } : {}),
      raceS: { telegraph: r2(c.tel), at: r2(c.at), beat: r2(c.beat), until: r2(c.until), slow0: r2(c.beat - RULES.beatBefore), slow1: r2(c.beat + RULES.beatAfter) },
      telegraphAtBroadcastS: r2(B(c.tel)), atBroadcastS: r2(B(c.at)), beatBroadcastS: r2(B(c.beat)), untilBroadcastS: r2(B(c.until)),
      params: { atM: c.atM, ...(c.ratio ? { ratio: r2(c.ratio) } : {}), passB: r2(B(c.beat)) },
      consequence, warn, caption: K.caption, line: K.line[Math.floor(R() * K.line.length)],
      ...(after ? { after: { speaker: R() < 0.5 ? 'jeff' : 'pam', text: after } } : {}),
      ...(c.fact ? { fact: c.fact } : {}),
      angles: K.angles, ...(K.lookAhead ? { lookAhead: K.lookAhead } : {}), prio: 2.8,
      truth: c.fact ? `${c.truth} His week: ${c.fact}.` : c.truth,
    };
  });
}
const r2 = (x) => Math.round(x * 100) / 100;
const pickLine = (R, a) => a[Math.floor(R() * a.length)];

// slow windows (race seconds) for retimeForWindows: real time round each beat
export function hijinkWindows(hijinks = []) {
  return hijinks.filter((h) => h.raceS?.slow0 != null).map((h) => ({ t0: h.raceS.slow0, t1: h.raceS.slow1, rate: 1, ramp: RULES.ramp }));
}
export function applyHijinks(racePlan, hijinks, { maxDurationS = RULES.maxDurationS, telegraphB = 2.6, leadInB = 1.2 } = {}) {
  const np = retimeForWindows({ ...racePlan, hijinks }, hijinkWindows(hijinks), { maxDurationS });
  // on the new clock: the gag starts leadInB before the clock starts to ease, the telegraph telegraphB before that
  const B = (t) => r2(raceToBroadcast(np.timeMap, t));
  let prevEnd = -1e9;
  np.hijinks = np.hijinks.map((h) => {
    if (!h.raceS?.slow0) return h;
    const easeIn = B(h.raceS.slow0 - RULES.ramp), beat = B(h.raceS.beat);
    const at = Math.max(prevEnd + 1.6, easeIn - leadInB);
    let tel = Math.max(prevEnd + 0.6, at - telegraphB);
    if (tel - prevEnd < 4.5) tel = Math.max(prevEnd + 0.1, at - 6); // no stub shot between two hijinks: the next threat appears straight away
    const until = Math.max(beat + 2.2, B(h.raceS.slow1 + RULES.ramp * 0.6));
    prevEnd = until;
    return { ...h, telegraphAtBroadcastS: r2(tel), atBroadcastS: r2(Math.min(at, beat - 1.5)), beatBroadcastS: beat, untilBroadcastS: r2(until), params: { ...h.params, passB: beat } };
  });
  return np;
}
