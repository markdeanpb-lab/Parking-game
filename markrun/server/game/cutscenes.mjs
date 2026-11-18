// MARKRUN cutscene planner (data-driven; docs/CUTSCENE_IDEAS.md, first batch of 12 + the funfair five-beat package).
//
//   planCutscenes({ racePlan, runners, theme, rng, sessionMemory, backedBy?, roundNumber?, force? })
//     -> [{ id, kind, who, mode, atBroadcastS, durationS, params, lines, truth, group? }]
//
// The rule: THE SLOWDOWN IS REAL, THE REASON IS MADE UP. Every cutscene is triggered by something that really happened in a
// runner's pacing table, weather or finishing margin. Nothing here changes a time, a position or the time map:
//   - 'freeze' / 'replay': the TV holds the broadcast clock at atBroadcastS for durationS wall seconds, then resumes at the
//     exact same broadcast second (so every runner still crosses the line at officialS).
//   - 'slowmo': the shared broadcast clock runs at params.rate between atBroadcastS and params.untilBroadcastS (eased),
//     the same for ALL runners. durationS is the resulting wall time.
//   - 'inset': plays live while the race runs (params.pip: picture-in-picture box, else a live camera beat), durationS wall s.
//   - 'pre' / 'post': before the gun (no clock cost) / after the last finisher (the clock is already past every finish).
// Pacing (RULES): <= 3 pausing cutscenes and <= 18 s of pause per race, >= 20 broadcast s apart, >= 6 s between any two;
// none in the first 8 broadcast s, none once the leader is inside the final 300 m, no pause during a live battle;
// per-kind cooldowns across the night via sessionMemory.cutscenes.
//
// `runners`: [{ id, nickname?, shortName?, personality?, facts?, features?, perf?: { facts, features } }] (any subset;
//   pacing comes from racePlan.runners[].progress, weather from facts.weather). `backedBy` ({ runnerId: [names] } or an
//   array of ids) is optional: when the call happens after betting it tilts featured-runner choice towards backed runners.
// `force`: a cutscene kind; plans that kind for the best-fitting runner even when the trigger threshold is not met
//   (preview / screenshots only). Never used by the game.
import { distanceAt, timeAtDistance, raceToBroadcast, broadcastToRace } from './raceplan.mjs';
import { makeRng } from './rng.mjs';

export const RULES = {
  maxPausing: 1, maxPauseS: 18, pauseGapS: 20, anyGapS: 6, startQuietS: 8, noGoM: 4700, maxInsets: 3,
  cooldownRaces: 4, cooldownLiveRaces: 3, marketGapS: 6, battleGapS: 2, battleWindowS: 3.5, scrumM: 1000,
};
const HILLS = [[1720, 1960], [4220, 4460]];
// lap-1 equivalent course zones (approximate metres; lap 2 = m - 2500)
const ZONES = { start: [0, 600], avenue: [800, 1310], hill: [1720, 1960], lake: [1980, 2320] };
const geo = (m) => (m >= 2500 ? m - 2500 : m);
const zoneOf = (m) => { const g = geo(m); for (const [k, [a, b]] of Object.entries(ZONES)) if (g >= a && g <= b && !(k === 'start' && m >= 2500)) return k; return 'park'; };

// catalogue keys -> metadata (cat = variety category, pausing = counts against the pause budget)
export const CUTSCENE_KINDS = {
  funfair_sign: { cat: 'funfair', label: 'Diversion!', ref: 'section 1, beat 1' },
  funfair_stretch: { cat: 'funfair', label: 'Funfair slow-mo', ref: 'section 1, beat 2' },
  funfair_drone: { cat: 'funfair', label: 'The whole fair', ref: 'section 1, beat 3' },
  hook_a_duck: { cat: 'funfair', label: 'Hook-a-Duck Hustle', ref: 'F2' },
  test_strength: { cat: 'funfair', label: 'Test Your Strength', ref: 'F1' },
  funfair_rejoin: { cat: 'funfair', label: 'Back on course', ref: 'section 1, beat 5' },
  goose_toll: { cat: 'slow', label: 'Goose Toll Booth', ref: 'A1' },
  treadmill_hill: { cat: 'hill', label: 'The Treadmill Hill', ref: 'C2' },
  everest: { cat: 'hill', label: 'Everest Expedition', ref: 'C1' },
  spaghetti_legs: { cat: 'fade', label: 'Spaghetti Legs', ref: 'E2' },
  cannonball: { cat: 'start', label: 'Human Cannonball', ref: 'E1' },
  raincloud: { cat: 'weather', label: 'Personal Raincloud', ref: 'W1' },
  mirror_signal: { cat: 'overtake', label: 'Mirror, Signal, Manoeuvre', ref: 'D1' },
  ice_cream_van: { cat: 'surge', label: 'The Ice-Cream Van Jingle', ref: 'B2' },
  photographer: { cat: 'finish', label: 'The Wildlife Photographer', ref: 'X1' },
  sore_loser_var: { cat: 'finish', label: 'Sore Loser VAR', ref: 'X5' },
  // batch 2 (docs/CUTSCENE_IDEAS_2.md)
  pointing_standoff: { cat: 'finish', label: 'The Pointing Standoff', ref: '2/1' },
  sub20_wall: { cat: 'wall', label: 'The Sub-20 Wall', ref: '2/2', story: true },
  mirror_routine: { cat: 'pair', label: 'The Mirror Routine', ref: '2/3' },
  heart_vs_heart: { cat: 'pair', label: 'Heart vs Heart', ref: '2/4' },
  breakfast: { cat: 'start', label: 'Half Marathon Before Breakfast', ref: '2/5' },
  before_after: { cat: 'pair', label: 'Before and After', ref: '2/6' },
  road_to_100: { cat: 'tag', label: 'Road to 100', ref: '2/7', story: true },
  incline_button: { cat: 'hill', label: 'Where\'s the Incline Button?', ref: '2/8' },
  pb_bell: { cat: 'finish', label: 'The PB Bell', ref: '2/9', story: true },
  wrong_kit_bag: { cat: 'start', label: 'The Wrong Kit Bag', ref: '2/10' },
};
export const BENCHED = new Set(['mirror_signal']); // docs/CUTSCENE_IDEAS_2.md section 4
export const PAUSING = new Set(['freeze', 'replay']);
// default wall durations (s)
const DUR = { funfair_sign: 2.6, funfair_drone: 5.8, hook_a_duck: 7, hook_a_duck2: 5, test_strength: 6.5, test_strength2: 6, funfair_rejoin: 2.8,
  goose_toll: 6, treadmill_hill: 6, everest: 7, spaghetti_legs: 5, cannonball: 5.5, raincloud: 5, mirror_signal: 4, ice_cream_van: 5, photographer: 7.5, sore_loser_var: 6,
  pointing_standoff: 7, mirror_routine: 5, heart_vs_heart: 5, before_after: 5, incline_button: 5, pb_bell: 4.5, road_to_100: 3.2, breakfast: 4.2, wrong_kit_bag: 5, sub20_wall: 6 };

// Line banks (3-4 per kind; one line plays per cutscene, never repeated within a night) and visual variants.
const J = (text) => ({ speaker: 'jeff', text }), P = (text) => ({ speaker: 'pam', text });
export const LINE_BANKS = {
  funfair_sign: [J('Hang on, hang on, there\'s a DIVERSION!'), P('Ah. The funfair\'s in town.'), J('He\'s going OFF-PISTE!'), P('That is not the course, Jeff.')],
  hook_a_duck_1: [P('He\'s won a goose. Of course he has.'), J('He\'s HOOKED one! Give that man a prize!'), P('One hook. One duck. One very suspicious goose.')],
  hook_a_duck_2: [J('He\'s only gone and traded UP!'), P('That\'s not a prize. That\'s a passenger.'), P('Bigger goose. Same pace. Remarkable.')],
  test_strength_creep: [P('Parkrunner. Fair.'), J('Ooh! So close to LEGEND!'), P('Solid. Unspectacular. Very him.')],
  test_strength_launch: [J('He\'s been LAUNCHED back onto the course!'), P('Not strictly the route, Jeff.'), J('Is that... allowed?')],
  test_strength_ding: [J('DING DING DING! Somebody fetch that bell!'), P('That bell\'s in the boating lake now.'), J('RING THE BELL! RING IT!')],
  rejoin_even: [P('And he\'s lost... no time at all. Suspicious.'), P('Not a second lost. I have questions.'), J('Round the fair and NO time lost!')],
  rejoin_slow: [J('That cost him {n} seconds!'), P('{n} seconds at the fair. Worth it.'), J('The fair has taken {n} seconds off him!')],
  rejoin_fast: [P('He came out quicker than he went in. I want a steward\'s enquiry.'), J('QUICKER through the fair?!'), P('Faster round the funfair than on the path. Typical.')],
  goose_toll: [J('He\'s been TOLLED!'), P('Contactless was down.'), P('One jelly baby. Daylight robbery.'), J('Pay the goose, Mark! PAY THE GOOSE!')],
  treadmill_hill: [P('Same tree. Same bench. Same goose.'), J('Haven\'t we seen this bit?'), P('The Hill. Now on a loop.')],
  everest: [P('It\'s about thirteen metres high, Jeff.'), J('BASE CAMP TO MARK! Do you read me?'), P('Thirteen metres. Bring a flask.')],
  spaghetti_legs: [P('Legs: al dente.'), J('He\'s gone all SPAGHETTI!'), P('Those legs are cooked.')],
  cannonball: [J('He\'s shot out like a CANNONBALL!'), J('And he is AWAY! Like a CANNONBALL!'), P('Steady on.')],
  raincloud: [J('It\'s only raining on HIM!'), P('Different Saturday, different weather.'), P('He\'s brought his own weather.')],
  mirror_signal: [P('Mirror, signal, manoeuvre.'), J('He\'s INDICATING! Who indicates?'), J('Textbook overtake!')],
  ice_cream_van: [J('He\'s heard the VAN!'), P('Sold out. Every time.'), J('Faster, Mark! It\'s got FLAKES!')],
  photographer: [P('Hold on. Wrong end of the goose.'), J('Lovely shot, Pam.'), P('Second time lucky.')],
  sore_loser_var: [J('Checking... checking... the result STANDS!'), P('The squirrel was onside, Jeff.'), J('VAR says NO!')],
  pointing_standoff: [P('Same man. Same time. Different Saturday.'), J('It\'s a DEAD HEAT! With HIMSELF!'), P('One of them is copying.')],
  sub20_wall: [J('It\'s the TWENTY-MINUTE WALL! And he\'s gone STRAIGHT THROUGH IT!'), P('He spent months on the wrong side of that.'), P('There\'s a door, Jeff.'), J('Another HOLE in the wall!')],
  mirror_routine: [P('He\'s just been overtaken by his own future.'), J('It\'s MARK against MARK! And the newer model\'s got more features!'), P('No spoilers, please.')],
  heart_vs_heart: [P('Same pace. One of them is having a lovely time.'), J('Look at that heart GO! And look at that one... reading!'), P('I\'d ask for a refund on the watch.')],
  breakfast: [P('He\'s been for a run already. Before nine.'), J('He thinks he\'s FINISHED! Somebody tell him!'), P('The rest of them have had toast.')],
  before_after: [P('One of them knows how it goes.'), J('That\'s the SAME RACE! He\'s run it and he HASN\'T run it!'), P('Don\'t tell him. He\'ll only worry.')],
  road_to_100: [P('He needs to get to a hundred. He knows.'), J('Stamp it, Maureen! STAMP IT!'), P('Free coffee at a hundred. Probably.')],
  incline_button: [P('Outdoors doesn\'t have a console.'), J('He\'s looking for the INCLINE BUTTON!'), P('That\'s what Thursdays indoors do to a man.')],
  pb_bell: [J('RING THE BELL! That was a PERSONAL BEST on the day!'), P('Twenty-one of these in the archive. The bell is tired.'), P('That\'s the goose\'s bell now.')],
  wrong_kit_bag: [P('Wrong bag.'), J('He\'s brought the WRONG KIT!'), P('Some of him is still at the gym.')],
};
export const VISUAL_VARIANTS = {
  goose_toll: ['jelly', 'peak'], treadmill_hill: ['goose', 'marshal'], everest: ['flask', 'tent'], spaghetti_legs: ['spaghetti', 'jelly'],
  cannonball: ['cannon', 'catapult'], raincloud: ['umbrella', 'lightning'], mirror_signal: ['mirror', 'lplate'], ice_cream_van: ['chase', 'reverse'],
  photographer: ['goose', 'thumb'], sore_loser_var: ['squirrel', 'pigeon'], hook_a_duck: ['goose', 'duck'], test_strength: ['jeff', 'pam'],
};
// the three gags whose picture is weakest fire less often until a stronger staging lands (rates ~15-20% a race)
const GATE = { cannonball: 0.33, mirror_signal: 0.33, treadmill_hill: 0.6, breakfast: 0.3, wrong_kit_bag: 0.3, incline_button: 0.5, heart_vs_heart: 0.8, mirror_routine: 0.8, before_after: 0.9, pb_bell: 0.9 };
export const PER_NIGHT_CAP = 2;
const r1 = (x) => Math.round(x * 10) / 10;
const r2 = (x) => Math.round(x * 100) / 100;
const pct = (ratio) => Math.round(Math.abs(ratio - 1) * 100);
const km = (m) => `${(m / 1000).toFixed(1)} km`;

// ---------------- per-runner pacing analysis (pure) ----------------
export function runnerStats(pr) {
  const P = pr.progress, T = pr.officialS, avg = T / 5000;
  const t = (m) => timeAtDistance(P, m);
  const pace = (m0, m1) => (t(m1) - t(m0)) / (m1 - m0) / avg; // 1 = his own average pace; 1.2 = 20% slower
  const divs = (pr.diversions || []).map((d) => [d.fromM, d.toM]);
  const excluded = (a, b, { hills = true, div = true } = {}) => (hills && HILLS.some(([h0, h1]) => a < h1 && b > h0)) || (div && divs.some(([d0, d1]) => a < d1 + 25 && b > d0 - 25));
  const windows = (len, lo, hi, opt) => { const out = []; for (let m0 = lo; m0 + len <= hi; m0 += 25) if (!excluded(m0, m0 + len, opt)) out.push({ m0, m1: m0 + len, ratio: pace(m0, m0 + len) }); return out; };
  const w250 = windows(250, 100, RULES.noGoM);
  const worst = w250.reduce((a, w) => (!a || w.ratio > a.ratio ? w : a), null);
  const best = w250.reduce((a, w) => (!a || w.ratio < a.ratio ? w : a), null);
  const lap2 = windows(250, 2500, RULES.noGoM);
  const bestMid = w250.filter((w) => w.m0 >= 600).reduce((a, w) => (!a || w.ratio < a.ratio ? w : a), null);
  const worstLap2 = lap2.reduce((a, w) => (!a || w.ratio > a.ratio ? w : a), null);
  const t2500 = t(2500);
  return {
    avg, pace, worst, best, bestMid, worstLap2,
    firstKmVsAvg: t(1000) / (avg * 1000) - 1,
    halfRatio: (T - t2500) / t2500,
    kick: pace(4600, 5000) - 1,
    hill1: pace(...HILLS[0]), hill2: pace(...HILLS[1]),
    divPace: (pr.diversions || []).map((d) => ({ ...d, ratio: pace(d.fromM, d.toM), costS: (pace(d.fromM, d.toM) - 1) * avg * (d.toM - d.fromM) })),
  };
}

// ---------------- planner ----------------
export function planCutscenes({ racePlan, runners = [], theme = null, rng, sessionMemory = null, backedBy = null, roundNumber = null, force = null } = {}) {
  if (!racePlan?.runners?.length || !racePlan.timeMap?.map) return [];
  const R = rng && typeof rng === 'object' && typeof rng.next === 'function' ? rng : makeRng(rng ?? hashSeed(racePlan.roundId || 'x'));
  const tm = racePlan.timeMap;
  const PR = racePlan.runners;
  const byId = Object.fromEntries(PR.map((r) => [r.id, r]));
  const info = Object.fromEntries(PR.map((r) => {
    const x = runners.find((q) => q.id === r.id) || {};
    const p = x.perf || x;
    return [r.id, { name: x.shortName || x.nickname || null, personality: x.personality || null, facts: p.facts || x.facts || {}, features: p.features || x.features || {}, date: x.date || p.date || null }];
  }));
  const S = Object.fromEntries(PR.map((r) => [r.id, runnerStats(r)]));
  const backed = new Set(Array.isArray(backedBy) ? backedBy : Object.keys(backedBy || {}).filter((k) => (backedBy[k] || []).length));
  const mem = sessionMemory || null;
  const cm = mem ? (mem.cutscenes ||= { races: 0, last: {}, funfairSigs: [], goose: 0 }) : { races: 0, last: {}, funfairSigs: [], goose: 0 };
  const raceNo = roundNumber ?? cm.races + 1;
  const name = (id) => info[id]?.name || 'He';
  const B = (id, m) => raceToBroadcast(tm, timeAtDistance(byId[id].progress, m));
  const order = [...PR].sort((a, b) => a.officialS - b.officialS);
  const firstFinishB = raceToBroadcast(tm, order[0].officialS), lastFinishB = raceToBroadcast(tm, order.at(-1).officialS);
  const leaderM = (b) => { const t = broadcastToRace(tm, Math.max(0, b)); return Math.max(...PR.map((r) => distanceAt(r.progress, t))); };
  const lapB = (racePlan.events || []).find((e) => e.type === 'lap')?.broadcastS ?? null;
  const evts = (racePlan.events || []).filter((e) => e.type === 'overtake' || e.type === 'lead_change');
  // live battle: two runners within ~2 s who are actually contesting: a pass within +-3.5 broadcast s (once the field has
  // left the start scrum: in the first km places reshuffle every few seconds and that IS the scrum), or a lead duel in km 4-5
  const battle = (b) => {
    if (leaderM(b) >= RULES.scrumM && evts.some((e) => Math.abs(e.broadcastS - b) <= RULES.battleWindowS)) return true;
    const t = broadcastToRace(tm, Math.max(0, b));
    const live = PR.filter((r) => t < r.officialS).map((r) => ({ r, d: distanceAt(r.progress, t) })).sort((a, c) => c.d - a.d);
    if (live.length < 2 || live[0].d < 3500) return false;
    return timeAtDistance(live[1].r.progress, live[0].d) - t <= RULES.battleGapS;
  };
  const LIVE_KINDS = new Set(['cannonball', 'raincloud', 'mirror_signal', 'photographer', 'sore_loser_var']);
  const freshness = (kind) => { if (CUTSCENE_KINDS[kind]?.story) return 1; const l = cm.last?.[kind]; if (l == null) return 1; const ago = raceNo - l; return ago >= (LIVE_KINDS.has(kind) ? RULES.cooldownLiveRaces : RULES.cooldownRaces) ? 0.6 : -1; };
  if (raceNo <= 1 || raceNo < (cm.races || 0)) { cm.night = {}; cm.lines = []; cm.variants = {}; cm.wall = { shown: 0, holes: 0 }; cm.bell = 0; cm.road = []; }
  cm.night ||= {}; cm.lines ||= []; cm.variants ||= {}; cm.last ||= {}; cm.funfairSigs ||= [];
  const capped = (kind) => !CUTSCENE_KINDS[kind]?.story && (cm.night[kind] || 0) >= PER_NIGHT_CAP; // storylines have their own night caps
  const gateRoll = {}; // one roll per kind per race
  const gate = (kind) => GATE[kind] == null || (gateRoll[kind] ??= R.next()) < GATE[kind];
  const cool = (kind) => force === kind || (freshness(kind) >= 0 && !capped(kind) && gate(kind));
  const rel = (id) => (backed.has(id) ? 1 : 0);

  const out = [];
  const pausing = () => out.filter((c) => PAUSING.has(c.mode));
  const pauseS = () => pausing().reduce((s, c) => s + c.durationS, 0);
  // span of broadcast time a cutscene occupies (for spacing)
  const span = (c) => [c.atBroadcastS, c.mode === 'slowmo' ? c.params.untilBroadcastS : c.atBroadcastS + (PAUSING.has(c.mode) || c.mode === 'post' ? (c.params?.liveTailS || 0) : c.durationS)];
  function fits(c, { ignoreGroup = null } = {}) {
    if (force && c.kind === force) return true;
    const [a, b] = span(c);
    if (c.params?.tag) return !out.some((x) => x.kind === c.kind);
    if (c.params?.overlay) return !out.some((x) => x.kind === c.kind); // the finish-straight wall: world prop only, no clock, no camera
    if (c.mode === 'pre') return !out.some((x) => x.mode === 'pre');
    if (c.mode === 'post') return !out.some((x) => x.mode === 'post' && !x.params?.tag);
    if (a < RULES.startQuietS) return false;
    if (leaderM(b + (PAUSING.has(c.mode) ? 0.3 : 0.5)) >= RULES.noGoM) return false;
    if (PAUSING.has(c.mode)) {
      if (pausing().length >= RULES.maxPausing || pauseS() + c.durationS > RULES.maxPauseS + 1e-9) return false;
      if (pausing().some((x) => Math.abs(x.atBroadcastS - a) < RULES.pauseGapS && (!ignoreGroup || x.group !== ignoreGroup))) return false;
      if (lapB != null && Math.abs(lapB - a) < RULES.marketGapS) return false;
      if (!c.params?.allowBattle && battle(a)) return false;
    }
    if (c.mode === 'inset' && c.params?.pip && out.filter((x) => x.mode === 'inset' && x.params?.pip).length >= RULES.maxInsets) return false;
    for (const x of out) {
      if (x.mode === 'pre' || x.mode === 'post' || x.mode === 'slowmo' || x.params?.overlay) continue;
      if (ignoreGroup && x.group === ignoreGroup) continue;
      const [xa, xb] = span(x);
      if (a < xb + RULES.anyGapS && b > xa - RULES.anyGapS) return false;
    }
    return true;
  }
  const mk = (kind, who, mode, atBroadcastS, extra = {}) => ({ id: '', kind, who, mode, atBroadcastS: r2(atBroadcastS), durationS: extra.durationS ?? DUR[kind], params: extra.params || {}, lines: extra.lines || [], truth: extra.truth || '', ...(extra.group ? { group: extra.group } : {}), _score: extra.score ?? 0 });

  // ---------- 1. funfair package (the fix for "you couldn't even see the funfair") ----------
  const diverters = PR.filter((r) => r.diversions?.length);
  if (diverters.length && (!capped('funfair_stretch') || ['hook_a_duck', 'test_strength'].includes(force))) {
    const cand = [...diverters].sort((a, b) => (rel(b.id) - rel(a.id)) || (Math.abs(S[b.id].divPace[0].ratio - 1) - Math.abs(S[a.id].divPace[0].ratio - 1)));
    for (const r of cand) {
      const pkg = funfairPackage(r);
      if (pkg) { out.push(...pkg); break; }
    }
  }
  function funfairPackage(r) {
    const id = r.id, st = S[id];
    const sigs = ['hook_a_duck', 'test_strength'];
    const usedSigs = cm.funfairSigs || [];
    let sig = force && sigs.includes(force) ? force : sigs.find((s) => !usedSigs.includes(s)) || R.pick(sigs);
    const pkg = [];
    const laps = st.divPace.slice(0, 2);
    for (const [i, d] of laps.entries()) {
      const lap = i + 1, g = `funfair-${lap}`;
      const mid = Math.round((d.fromM + d.toM) / 2);
      const slowFrom = B(id, d.fromM - (lap === 1 ? 55 : 25)), slowTo = B(id, d.toM + 15);
      const rate = lap === 1 ? 0.4 : 0.55;
      const sl = mk('funfair_stretch', id, 'slowmo', slowFrom, { group: g, durationS: r1((slowTo - slowFrom) / rate + 1.2), params: { rate, untilBroadcastS: r2(slowTo), lap, fromM: d.fromM, toM: d.toM, easeS: 0.6 } });
      const lines = [];
      const v = d.ratio <= 0.97 ? 'fast' : d.ratio >= 1.03 ? 'slow' : 'even';
      const variant = sig === 'test_strength' ? (lap === 1 ? (v === 'fast' ? 'launch' : 'creep') : 'ding') : (lap === 1 ? 'hook' : 'swap');
      const tag = { lap, fromM: d.fromM, toM: d.toM, maxOffM: d.maxOffM, atM: mid, ratio: r2(d.ratio), costS: r1(d.costS), variant };
      const setLines = sig === 'hook_a_duck'
        ? (lap === 1 ? [{ speaker: 'pam', text: 'He\'s won a goose. Of course he has.' }] : [{ speaker: 'jeff', text: 'He\'s only gone and traded UP!' }])
        : (lap === 1 ? (variant === 'launch' ? [{ speaker: 'jeff', text: 'He\'s been LAUNCHED back onto the course!' }] : [{ speaker: 'pam', text: 'Parkrunner. Fair.' }]) : [{ speaker: 'jeff', text: 'DING DING DING! Somebody fetch that bell!' }]);
      const setKind = sig;
      const setDur = sig === 'hook_a_duck' ? (lap === 1 ? DUR.hook_a_duck : DUR.hook_a_duck2) : (lap === 1 ? DUR.test_strength : DUR.test_strength2);
      // beats are laid out in WALL time inside the slow-mo window so no two camera beats overlap
      const signB = B(id, d.fromM - 50), droneB = Math.max(B(id, d.fromM + 25), signB + (DUR.funfair_sign + 0.3) * rate);
      const setB = Math.max(B(id, mid), (lap === 1 ? droneB + (DUR.funfair_drone + 0.3) * rate : B(id, mid)));
      const mSet = Math.max(d.fromM + 40, Math.min(d.toM - 40, distanceAt(byId[id].progress, broadcastToRace(tm, setB))));
      let setPiece = mk(setKind, id, 'freeze', setB, { group: g, durationS: setDur, params: { ...tag, atM: Math.round(mSet), stage: 'fair' }, lines: setLines, score: 10 });
      const rejoinLine = v === 'even' ? { speaker: 'pam', text: 'And he\'s lost... no time at all. Suspicious.' }
        : v === 'slow' ? { speaker: 'jeff', text: `That cost him ${Math.max(1, Math.round(d.costS))} seconds!` }
          : { speaker: 'pam', text: 'He came out quicker than he went in. I want a steward\'s enquiry.' };
      const rejoin = mk('funfair_rejoin', id, 'inset', Math.min(slowTo - DUR.funfair_rejoin * rate, Math.max(B(id, d.toM - 22), setB + 0.6 * rate)), { group: g, params: { ...tag, pip: false }, lines: [rejoinLine] });
      if (lap === 1) {
        pkg.push(sl, mk('funfair_sign', id, 'inset', signB, { group: g, params: { ...tag, pip: false }, lines: [{ speaker: 'jeff', text: 'Hang on, hang on, there\'s a DIVERSION!' }] }));
        pkg.push(mk('funfair_drone', id, 'inset', droneB, { group: g, params: { ...tag, pip: false }, lines: [] }));
      } else pkg.push(sl);
      pkg.push(setPiece, rejoin);
      const truthAll = `${name(id)}'s real GPS trace left the usual course at ${km(d.fromM)} and bulged up to ${d.maxOffM} m round the fairground before rejoining at ${km(d.toM)}${laps.length > 1 ? ' (he did it on both laps)' : ''}. Through that detour he ran ${v === 'even' ? 'within 3% of' : `${pct(d.ratio)}% ${v === 'slow' ? 'slower than' : 'quicker than'}`} his average pace. The ${sig === 'hook_a_duck' ? 'hook-a-duck' : 'strongman'} bit is a dramatisation.`;
      setPiece.truth = truthAll;
      for (const c of pkg) if (c.group === g && !c.truth) c.truth = truthAll;
    }
    // check the package against the rules as a unit (internal beats may sit close together)
    const keep = [];
    const saved = out.length;
    for (const c of pkg) {
      if (fits(c, { ignoreGroup: c.group })) { out.push(c); keep.push(c); continue; }
      // the lap-2 set piece may fall back to a live picture-in-picture inset if the pause budget / spacing is tight
      if (PAUSING.has(c.mode) && c.params.lap === 2) {
        const alt = { ...c, mode: 'inset', durationS: 4.5, params: { ...c.params, pip: true } };
        if (fits(alt, { ignoreGroup: c.group })) { out.push(alt); keep.push(alt); continue; }
      }
      if (c.kind === 'funfair_stretch' || c.kind === 'funfair_sign' || c.kind === 'funfair_drone') continue; // optional beats
      if (c.params.lap === 1 && (c.kind === sig)) { out.length = saved; return null; } // no lap-1 set piece -> no package
    }
    out.length = saved;
    if (!keep.some((c) => c.kind === sig)) return null;
    // the lap-2 payoff needs its lap-1 set-up (and vice versa the set-up is still fine alone)
    cm._sig = sig;
    return keep;
  }

  // ---------- 2. candidates from real triggers ----------
  const C = [];
  const isForced = (k) => force === k;
  // E1 Human Cannonball (pre): the most extreme fast start, first km >= 6% quicker than average
  {
    const r = [...PR].sort((a, b) => S[a.id].firstKmVsAvg - S[b.id].firstKmVsAvg)[0];
    const f = S[r.id].firstKmVsAvg;
    if ((f <= -0.06 || isForced('cannonball')) && cool('cannonball')) C.push(mk('cannonball', r.id, 'pre', -3.2, { params: { firstKmVsAvg: r2(f) }, score: 3 + Math.abs(f) * 20 + rel(r.id) * 2,
      lines: [{ speaker: 'jeff', text: 'He\'s shot out like a CANNONBALL!' }],
      truth: `${name(r.id)}'s first kilometre really was ${pct(1 + f)}% quicker than his average pace for the whole run: the quickest start in this field.` }));
  }
  // E2 Spaghetti Legs (replay): a fade after a fast start, at his worst lap-2 window
  for (const r of PR) {
    const s = S[r.id], w = s.worstLap2;
    if (!w || !cool('spaghetti_legs')) continue;
    const ok = s.halfRatio >= 1.05 && s.firstKmVsAvg <= -0.03 && w.ratio >= 1.08;
    if (!ok && !isForced('spaghetti_legs')) continue;
    C.push(mk('spaghetti_legs', r.id, 'replay', B(r.id, w.m1) + 0.8, { params: { m0: w.m0, m1: w.m1, atM: Math.round((w.m0 + w.m1) / 2), ratio: r2(w.ratio), halfRatio: r2(s.halfRatio) },
      score: 4 + (s.halfRatio - 1) * 40 + rel(r.id) * 2, lines: [{ speaker: 'pam', text: 'Legs: al dente.' }],
      truth: `${name(r.id)} went off quick (first km ${pct(1 + s.firstKmVsAvg)}% faster than his average) and ran the second half ${pct(s.halfRatio)}% slower than the first. His slowest lap-2 stretch was 250 m at ${pct(w.ratio)}% slower than average, around ${km(w.m0)}.` }));
  }
  // A1 Goose Toll Booth (replay): his worst 250 m (>= 12% slower than his own average; the catalogue's 20% almost never happens in
  // the smoothed 1 Hz data: the 90th percentile is 15%) by the boating lake, anywhere on the goose's night (race 3+), or >= 15% anywhere
  for (const r of PR) {
    const w = S[r.id].worst; if (!w || !cool('goose_toll')) continue;
    const z = zoneOf((w.m0 + w.m1) / 2);
    // the goose lives by the lake; on his night (race 3+) or on a really sharp slowdown he will set up anywhere
    const arc = raceNo >= 3 && !(cm.goose > 0);
    if (!((w.ratio >= 1.12 && (z === 'lake' || arc || w.ratio >= 1.15)) || isForced('goose_toll'))) continue;
    C.push(mk('goose_toll', r.id, 'replay', B(r.id, w.m1) + 0.8, { params: { m0: w.m0, m1: w.m1, atM: Math.round((w.m0 + w.m1) / 2), ratio: r2(w.ratio), zone: z },
      score: 5 + (w.ratio - 1) * 20 + (z === 'lake' ? 1.5 : 0) + rel(r.id) * 2, lines: [{ speaker: 'jeff', text: 'He\'s been TOLLED!' }],
      truth: `${name(r.id)} really did slow ${pct(w.ratio)}% below his own average for 250 m${z === 'lake' ? ' by the boating lake' : ''} (${km(w.m0)} to ${km(w.m1)}). Why? Nobody knows. We blame the goose.` }));
  }
  // C1 Everest Expedition (freeze): the biggest lap-1 Hill slowdown, >= 1.18x
  {
    const r = [...PR].sort((a, b) => S[b.id].hill1 - S[a.id].hill1)[0];
    const h = S[r.id].hill1;
    if ((h >= 1.18 || isForced('everest')) && cool('everest')) C.push(mk('everest', r.id, 'freeze', B(r.id, 1700), { params: { atM: 1720, ratio: r2(h) }, score: 5 + (h - 1) * 15 + rel(r.id) * 2,
      lines: [{ speaker: 'pam', text: 'It\'s about thirteen metres high, Jeff.' }],
      truth: `The Hill is real: about 13 m of climb from ${km(1720)}. ${name(r.id)} went up it ${pct(h)}% slower than his average pace, the slowest climb in this field. No sherpas were involved.` }));
  }
  // C2 Treadmill Hill (replay): lap-2 Hill slower than lap 1 (biggest difference); played at his lap-2 crest
  {
    const r = [...PR].sort((a, b) => (S[b.id].hill2 - S[b.id].hill1) - (S[a.id].hill2 - S[a.id].hill1))[0];
    const d = S[r.id].hill2 - S[r.id].hill1;
    if ((d >= 0.04 || isForced('treadmill_hill')) && cool('treadmill_hill')) C.push(mk('treadmill_hill', r.id, 'replay', B(r.id, 4460) + 0.6, { params: { atM: 4300, hill1: r2(S[r.id].hill1), hill2: r2(S[r.id].hill2) },
      score: 4 + d * 25 + rel(r.id) * 2, lines: [{ speaker: 'pam', text: 'Same tree. Same bench. Same goose.' }],
      truth: `${name(r.id)} climbed the Hill ${pct(1 + d)}% slower on lap 2 than on lap 1 (${pct(S[r.id].hill1)}% then ${pct(S[r.id].hill2)}% off his average pace). It only felt like a loop.` }));
  }
  // B2 Ice-Cream Van Jingle (freeze, then a live chase): his best mid-race 250 m (>= 9% quicker than average, from 600 m) on an 11 C+ morning
  for (const r of PR) {
    const w = S[r.id].bestMid; if (!w || !cool('ice_cream_van')) continue;
    const temp = info[r.id].facts?.weather?.temp_c;
    if (!((w.ratio <= 0.91 && temp != null && temp >= 11) || isForced('ice_cream_van'))) continue;
    C.push(mk('ice_cream_van', r.id, 'freeze', B(r.id, w.m0), { params: { m0: w.m0, m1: w.m1, atM: w.m0, ratio: r2(w.ratio), tempC: temp ?? null, liveTailS: 4 },
      score: 4 + (1 - w.ratio) * 15 + rel(r.id) * 2, lines: [{ speaker: 'jeff', text: 'He\'s heard the VAN!' }],
      truth: `${name(r.id)} really did surge: 250 m at ${pct(w.ratio)}% quicker than his average from ${km(w.m0)}${temp != null ? `, on a ${Math.round(temp)}°C morning` : ''}. There was no van. Sorry.` }));
  }
  // W1 Personal Raincloud (inset): it was raining on his Saturday (code 7-8 or > 0.3 mm)
  for (const r of PR) {
    const w = info[r.id].facts?.weather || {};
    const wet = w.coco === 7 || w.coco === 8 || (w.prcp_mm ?? 0) > 0.3;
    if ((!wet && !isForced('raincloud')) || !cool('raincloud')) continue;
    for (const m of [1150, 3050, 650, 3550]) C.push(mk('raincloud', r.id, 'inset', B(r.id, m), { params: { atM: m, pip: false, coco: w.coco ?? null, prcpMm: w.prcp_mm ?? null },
      score: 3 + rel(r.id) * 2 - (m === 1150 ? 0 : 0.2), lines: [{ speaker: 'jeff', text: 'It\'s only raining on HIM!' }],
      truth: `It really was ${w.coco === 8 ? 'raining' : 'drizzling'} on ${name(r.id)}'s Saturday${w.prcp_mm ? ` (${w.prcp_mm} mm)` : ''}. The other four ran on different days, in different weather. Every Mark brings his own.` }));
  }
  // D1 Mirror, Signal, Manoeuvre (inset): a real overtake (prefer backed runners, then the front of the race)
  {
    for (const e of evts) {
      if (BENCHED.has('mirror_signal') && !isForced('mirror_signal')) break; // benched: the pair gags cover overtakes now
      if (e.type !== 'overtake' && !isForced('mirror_signal')) continue;
      if (!cool('mirror_signal')) break;
      const by = e.by || e.to, on = e.on || e.from;
      C.push(mk('mirror_signal', by, 'inset', e.broadcastS - 1.6, { params: { on, atM: e.atM, pip: false, eventRaceS: r1(e.raceS) },
        score: 2.5 + (rel(by) + rel(on)) * 2 + (e.atM > 1000 && e.atM < 4000 ? 0.5 : 0), lines: [{ speaker: 'pam', text: 'Mirror, signal, manoeuvre.' }],
        truth: `${name(by)} really did overtake ${info[on]?.name || 'a rival'} at ${km(e.atM)}. Indicating is optional in parkrun.` }));
    }
  }
  // X1 Wildlife Photographer / X5 Sore Loser VAR (post): real finishing margins
  {
    const gaps = order.slice(1).map((r, i) => ({ a: order[i], b: r, g: r.officialS - order[i].officialS, place: i + 1 }));
    const top = gaps[0];
    const postB = Math.min(lastFinishB + 3.2, Math.max(lastFinishB + 0.9, firstFinishB + 6.5));
    const photo = gaps.find((x) => x.g <= 1.0);
    if ((photo || isForced('photographer')) && cool('photographer')) {
      const x = photo || top;
      C.push(mk('photographer', x.a.id, 'post', postB, { params: { other: x.b.id, marginS: r1(x.g), place: x.place, finishRaceS: x.a.officialS },
        score: x.place === 1 ? 8 : 4.5, lines: [{ speaker: 'pam', text: 'Hold on. Wrong end of the goose.' }],
        truth: `Only ${r1(x.g)} s separated ${name(x.a.id)} and ${info[x.b.id]?.name || 'the next man'} at the line (${ordinal(x.place)} and ${ordinal(x.place + 1)}). Both real times, from different Saturdays.` }));
    }
    if ((top.g < 3 || isForced('sore_loser_var')) && cool('sore_loser_var')) {
      C.push(mk('sore_loser_var', top.b.id, 'post', postB, { params: { winner: top.a.id, marginS: r1(top.g), finishRaceS: top.a.officialS },
        score: 5.5 + (3 - top.g) * 0.5, lines: [{ speaker: 'jeff', text: 'Checking... checking... the result STANDS!' }],
        truth: `${name(top.b.id)} really did finish just ${r1(top.g)} s behind ${name(top.a.id)}. There was no squirrel. The result stands.` }));
    }
  }

  // ======== batch 2 (docs/CUTSCENE_IDEAS_2.md, gags 1-10) ========
  const fact = (id, k) => info[id]?.facts?.[k];
  const yearsApart = (a, b) => { const da = info[a]?.date, db = info[b]?.date; if (!da || !db) return null; return Math.abs(new Date(da) - new Date(db)) / (365.25 * 864e5); };
  const finB = (id) => raceToBroadcast(tm, byId[id].officialS);
  const postB2 = Math.min(lastFinishB + 3.2, Math.max(lastFinishB + 0.9, firstFinishB + 6.5));
  // 1. The Pointing Standoff (post): two runners with the SAME official time
  {
    const pairs = [];
    for (let i = 0; i < order.length; i++) for (let j = i + 1; j < order.length; j++) if (Math.round(order[i].officialS) === Math.round(order[j].officialS)) pairs.push([order[i], order[j]]);
    if (pairs.length && cool('pointing_standoff')) { const [a, b] = pairs[0];
      C.push(mk('pointing_standoff', a.id, 'post', postB2, { params: { other: b.id, finishRaceS: a.officialS }, score: 12,
        truth: `${name(a.id)} and ${info[b.id]?.name || 'his twin'} really did run the identical time, to the second, on two different Saturdays${yearsApart(a.id, b.id) != null ? ` ${Math.round(yearsApart(a.id, b.id) * 12)} months apart` : ''}.` })); }
  }
  // 2. The Sub-20 Wall (live overlay at the finish, never pauses, never takes the camera): drops at 20:00 on the race clock
  {
    const sub = order.filter((r) => r.officialS < 1200), near = order.filter((r) => r.officialS >= 1200 && r.officialS <= 1237);
    const wall = (cm.wall ||= { shown: 0, holes: 0 });
    if ((sub.length || near.length) && (wall.shown || 0) < 4 && !force) {
      const g = near.length ? 0.9 : !wall.shown ? 0.8 : 0.25;
      if (R.next() < g || force === 'sub20_wall') {
        const at = raceToBroadcast(tm, 1200);
        const lastHit = near.length ? raceToBroadcast(tm, timeAtDistance(byId[near.at(-1).id].progress, 4960)) : at;
        C.push(mk('sub20_wall', (near[0] || sub[0]).id, 'inset', at, { durationS: r1(Math.min(30, Math.max(3.5, lastHit - at + 2.5))), params: { overlay: true, near: near.map((r) => r.id), sub: sub.map((r) => r.id), holesBefore: wall.holes || 0, wallM: 4960 }, score: 20,
          truth: near.length ? `${name(near[0].id)} finished just over 20 minutes. He spent months on the wrong side of that wall before he first broke it.` : `Everyone in this race who finished in under 20 minutes was through before the wall dropped.` }));
      }
    } else if (force === 'sub20_wall') C.push(mk('sub20_wall', order[0].id, 'inset', Math.max(8, raceToBroadcast(tm, Math.min(1200, order[0].officialS - 10))), { durationS: 6, params: { overlay: true, near: [order[1]?.id].filter(Boolean), sub: [], holesBefore: 2, wallM: 4960 }, score: 20, truth: 'Preview.' }));
  }
  // 3. The Mirror Routine: runs 3+ years apart, the newer really overtakes the older between 1 km and 4.7 km
  for (const e of evts) {
    if (e.type !== 'overtake' || e.atM < 1000 || e.atM > 4600 || !cool('mirror_routine')) continue;
    const ya = yearsApart(e.by, e.on); if (ya == null || ya < 3) continue;
    if (!(new Date(info[e.by].date) > new Date(info[e.on].date))) continue;
    C.push(mk('mirror_routine', e.by, 'inset', e.broadcastS - 1.2, { params: { on: e.on, atM: e.atM, pip: true, years: Math.floor(ya) }, score: 6,
      truth: `These two runs were ${Math.floor(ya)} years and ${Math.round((ya % 1) * 12)} months apart. Same man, same course. The later one really did pass the earlier one at ${km(e.atM)}.` }));
    break;
  }
  // 4. Heart vs Heart: what his watch recorded differs by 25+ bpm, finishing times within 30 s
  {
    const hr = PR.filter((r) => Number.isFinite(Number(fact(r.id, 'hr_mean'))));
    let best = null;
    for (let i = 0; i < hr.length; i++) for (let j = i + 1; j < hr.length; j++) { const a = hr[i], b = hr[j]; const d = Math.abs(fact(a.id, 'hr_mean') - fact(b.id, 'hr_mean')); if (d >= 25 && Math.abs(a.officialS - b.officialS) <= 30 && (!best || d > best.d)) best = { a, b, d }; }
    if (best && cool('heart_vs_heart')) {
      const [hi, lo] = fact(best.a.id, 'hr_mean') >= fact(best.b.id, 'hr_mean') ? [best.a, best.b] : [best.b, best.a];
      C.push(mk('heart_vs_heart', hi.id, 'inset', Math.max(20, B(hi.id, 2200)), { params: { other: lo.id, hr: Math.round(fact(hi.id, 'hr_mean')), hr2: Math.round(fact(lo.id, 'hr_mean')), pip: true, panel: true }, score: 5,
        truth: `His watch recorded an average of ${Math.round(fact(hi.id, 'hr_mean'))} bpm on one of these runs and ${Math.round(fact(lo.id, 'hr_mean'))} on the other. The finishing times were ${Math.round(Math.abs(hi.officialS - lo.officialS))} seconds apart.` }));
    }
  }
  // 5. Half Marathon Before Breakfast (pre): a run logged earlier that same morning
  {
    const wu = PR.map((r) => ({ r, km: Number(fact(r.id, 'warmup_km')?.km ?? 0) })).filter((x) => x.km > 0).sort((a, b) => b.km - a.km)[0];
    if (wu && !capped('breakfast') && (wu.km >= 8 || gate('breakfast')) || (force === 'breakfast')) {
      const x = wu || { r: order[0], km: 2.1 };
      const big = x.km >= 8;
      C.push(mk('breakfast', x.r.id, 'pre', -8.4, { durationS: big ? 5.4 : 4.1, // before the race title card (-4.2) params: { km: Math.round(x.km * 10) / 10, variant: big ? 'big' : 'standard' }, score: big ? 9 : 4,
        truth: big ? `He really had run ${x.km.toFixed(1)} km earlier that morning before running this one.` : `He really had jogged ${x.km.toFixed(1)} km earlier that morning to warm up. The others, on their Saturdays, did not.` }));
    }
  }
  // 6. Before and After: one has a race coming up, another has that same race just behind him
  {
    let pair = null;
    for (const a of PR) for (const b of PR) { if (a === b) continue; const up = fact(a.id, 'race_upcoming'), rec = fact(b.id, 'race_recent'); if (up?.name && rec?.name && up.name === rec.name) pair = pair || { a, b, up, rec }; }
    if (pair && cool('before_after')) {
      const at = Math.max(22, Math.min(B(pair.a.id, 3000), B(pair.b.id, 3000)));
      C.push(mk('before_after', pair.a.id, 'inset', at, { params: { other: pair.b.id, pip: true }, score: 5.5,
        truth: `One of these runs was ${pair.up.days_after} day${pair.up.days_after === 1 ? '' : 's'} before a ${Math.round(pair.up.km || 0) >= 20 ? 'half marathon' : 'race'}; the other was ${pair.rec.days_before} days after the very same race.` }));
    }
  }
  // 7. Road to 100 (post tag, every race): Maureen stamps the five run numbers on a 100-box loyalty card
  {
    const nums = PR.map((r) => ({ id: r.id, n: Number(fact(r.id, 'finsbury_number')) })).filter((x) => Number.isFinite(x.n) && x.n > 0);
    if (nums.length) C.push(mk('road_to_100', order[0].id, 'post', postB2 + 0.01, { durationS: 3.2, params: { tag: true, numbers: nums.map((x) => x.n).sort((a, b) => a - b), before: [...(cm.road || [])] }, score: 0,
      truth: `Tonight's runs were Finsbury runs number ${nums.map((x) => x.n).sort((a, b) => a - b).join(', ')}. He has run it 98 times.` }));
  }
  // 8. Where's the Incline Button? (live): a treadmill session that week and a lap-1 Hill 15%+ slower than average
  {
    const r = [...PR].filter((x) => Number(fact(x.id, 'treadmill_7d')) > 0).sort((a, b) => S[b.id].hill1 - S[a.id].hill1)[0];
    if (r && (S[r.id].hill1 >= 1.15 || force === 'incline_button') && cool('incline_button')) C.push(mk('incline_button', r.id, 'inset', B(r.id, 1790), { params: { atM: 1790, ratio: r2(S[r.id].hill1), treadmill: Number(fact(r.id, 'treadmill_7d')) }, score: 5.5,
      truth: `He had run on a treadmill ${Number(fact(r.id, 'treadmill_7d')) === 1 ? 'once' : `${fact(r.id, 'treadmill_7d')} times`} that week. The real Hill then cost him ${pct(S[r.id].hill1)}% of his pace.` }));
  }
  // 9. The PB Bell (post): a course PB on its day that finishes in the top two; three escalating rings a night
  {
    const bell = cm.bell || 0;
    const pb = order.slice(0, 2).find((r) => fact(r.id, 'was_finsbury_pb') === true);
    if ((pb && bell < 3 && gate('pb_bell')) || force === 'pb_bell') {
      const w = pb || order[0];
      C.push(mk('pb_bell', w.id, 'post', postB2, { params: { ring: Math.min(3, bell + 1) }, score: 8.5, truth: `This run was a course PB on the day he ran it. He has set 21 of them here.` }));
    }
  }
  // 10. The Wrong Kit Bag (pre): swim / weights / yoga / ski in the 7 days before (most minutes picks the costume)
  {
    const SPORT = { Swim: 'swim', WeightTraining: 'weights', Yoga: 'yoga', AlpineSki: 'ski' };
    let best = null;
    for (const r of PR) { const ct = fact(r.id, 'cross_training_7d') || {}; for (const [k, v] of Object.entries(ct)) if (SPORT[k] && (!best || (v.minutes || 0) > best.min)) best = { r, sport: SPORT[k], min: v.minutes || 0, count: v.count || 1 }; }
    if ((best && cool('wrong_kit_bag')) || force === 'wrong_kit_bag') {
      const b0 = best || { r: order[0], sport: 'swim', count: 1 };
      const what = { swim: 'went swimming', weights: 'lifted weights', yoga: 'did yoga', ski: 'went skiing' }[b0.sport];
      C.push(mk('wrong_kit_bag', b0.r.id, 'pre', -3.0, { durationS: 5, params: { variant: b0.sport }, score: 4.5,
        truth: `In the week before this run he really ${what}${b0.count > 1 ? ` ${b0.count} times` : ' once'}.` }));
    }
  }

  // callback: the cannonball who fades gets Pam's line
  const cb = C.find((c) => c.kind === 'cannonball');
  for (const c of C) if (c.kind === 'spaghetti_legs' && cb && c.who === cb.who) { c.lines = [{ speaker: 'pam', text: 'The cannonball\'s run out of cannon.' }]; c.params.callback = true; c._score += 3; }

  // ---------- 3. greedy selection within the budget ----------
  const used = new Set(out.map((c) => CUTSCENE_KINDS[c.kind].cat));
  const badLuck = new Map(); // featured runner -> count of "bad luck" gags (fairness when two players back different runners)
  const scoreOf = (c) => c._score + (freshness(c.kind) > 0 ? 0 : -0.5) + (used.has(CUTSCENE_KINDS[c.kind].cat) ? -3 : 0) - (badLuck.get(c.who) || 0) * (backed.has(c.who) ? 1.5 : 0) + R.next() * 0.3;
  const forcedFirst = (a, b) => (b.kind === force) - (a.kind === force);
  const pool = [...C];
  while (pool.length) {
    pool.sort((a, b) => forcedFirst(a, b) || scoreOf(b) - scoreOf(a));
    const c = pool.shift();
    const cat = CUTSCENE_KINDS[c.kind].cat;
    if (used.has(cat) && !(force === c.kind && !out.some((x) => x.kind === force))) continue; // one per category (one Hill gag, one finish gag, ...)
    let pick = c;
    if (!fits(pick)) {
      // a pausing gag that can't pause here may still play as a live inset
      if (PAUSING.has(c.mode) && ['spaghetti_legs', 'goose_toll', 'treadmill_hill'].includes(c.kind)) {
        const alt = { ...c, mode: 'inset', durationS: Math.min(c.durationS, 4.5), params: { ...c.params, pip: true } };
        if (fits(alt)) pick = alt; else continue;
      } else continue;
    }
    out.push(pick); used.add(cat);
    if (['goose_toll', 'spaghetti_legs', 'treadmill_hill', 'everest', 'raincloud'].includes(c.kind)) badLuck.set(c.who, (badLuck.get(c.who) || 0) + 1);
  }

  // ---------- 4. finalise + session memory ----------
  out.sort((a, b) => a.atBroadcastS - b.atBroadcastS || (a.mode === 'slowmo' ? -1 : 1));
  // lines (fresh within the night) + visual variants (rotate per kind)
  const pickLine = (bank, vars = {}) => {
    const keys = bank.map((_, i) => i).filter((i) => !cm.lines.includes(`${bank._k}:${i}`));
    const i = keys.length ? keys[Math.floor(R.next() * keys.length)] : Math.floor(R.next() * bank.length);
    cm.lines.push(`${bank._k}:${i}`);
    const l = bank[i]; return { speaker: l.speaker, text: l.text.replace('{n}', vars.n ?? '') };
  };
  for (const [k, v] of Object.entries(LINE_BANKS)) Object.defineProperty(v, '_k', { value: k, enumerable: false });
  const sigVar = {};
  for (const c of out) {
    let bankKey = c.kind;
    if (c.kind === 'hook_a_duck') bankKey = `hook_a_duck_${c.params.lap === 2 ? 2 : 1}`;
    if (c.kind === 'test_strength') bankKey = `test_strength_${c.params.variant || 'creep'}`;
    if (c.kind === 'funfair_rejoin') { const r = c.params.ratio ?? 1; bankKey = r <= 0.97 ? 'rejoin_fast' : r >= 1.03 ? 'rejoin_slow' : 'rejoin_even'; }
    if (c.kind === 'road_to_100' && !c.params.numbers.some((n) => n >= 95)) { c.lines = []; continue; } // the card is wordless unless the later runs are in
    if (LINE_BANKS[bankKey] && !c.params.callback) c.lines = [pickLine(LINE_BANKS[bankKey], { n: Math.max(1, Math.round(c.params.costS ?? 0)) })];
    const vv = VISUAL_VARIANTS[c.kind];
    if (vv) {
      const key = c.kind === 'hook_a_duck' ? 'prize' : c.kind === 'test_strength' ? 'top' : 'variant';
      if (c.params[key] == null) {
        if (sigVar[c.kind] == null) { const last = cm.variants[c.kind]; const opts = vv.filter((x) => x !== last); sigVar[c.kind] = (opts.length ? opts : vv)[Math.floor(R.next() * (opts.length || vv.length))]; }
        c.params[key] = sigVar[c.kind];
      }
    }
  }
  if ((cm.bell || 0) >= 3) for (const c of out) if (['goose_toll', 'treadmill_hill', 'pb_bell', 'pointing_standoff'].includes(c.kind)) c.params.gooseBell = true;
  out.forEach((c, i) => { c.id = `cs${i + 1}`; delete c._score; c.lines = (c.lines || []).slice(0, 2); });
  if (mem && !force) {
    cm.races = raceNo;
    for (const c of out) cm.last[c.kind] = raceNo;
    for (const k of new Set(out.map((c) => c.kind))) cm.night[k] = (cm.night[k] || 0) + 1;
    const wl = out.find((c) => c.kind === 'sub20_wall'); if (wl) { cm.wall.shown = (cm.wall.shown || 0) + 1; cm.wall.holes = (cm.wall.holes || 0) + wl.params.near.length; }
    if (out.some((c) => c.kind === 'pb_bell')) cm.bell = (cm.bell || 0) + 1;
    const rd = out.find((c) => c.kind === 'road_to_100'); if (rd) cm.road = [...new Set([...(cm.road || []), ...rd.params.numbers])];
    for (const [k, v] of Object.entries(sigVar)) cm.variants[k] = v;
    if (cm._sig) { cm.funfairSigs = [...(cm.funfairSigs || []), cm._sig]; }
    if (out.some((c) => c.kind === 'goose_toll')) cm.goose = (cm.goose || 0) + 1;
  }
  delete cm._sig;
  return out;
}

// "What really happened" cards for the reveal: [{ cutsceneId, kind, label, runnerId, text }]
export function cutsceneTruths(racePlan) {
  const seen = new Set();
  return (racePlan?.cutscenes || []).filter((c) => c.truth && !['funfair_stretch', 'funfair_sign', 'funfair_drone', 'funfair_rejoin'].includes(c.kind))
    .filter((c) => { const k = `${c.kind}|${c.who}`; if (seen.has(k)) return false; seen.add(k); return true; })
    .map((c) => ({ cutsceneId: c.id, kind: c.kind, label: CUTSCENE_KINDS[c.kind]?.label || c.kind, runnerId: c.who, text: c.truth }));
}

// Pause / slow-motion cost of a plan (wall seconds the cutscenes add to the broadcast).
export function cutsceneCost(cutscenes = []) {
  let pause = 0, slow = 0;
  for (const c of cutscenes) {
    if (PAUSING.has(c.mode)) pause += c.durationS;
    if (c.mode === 'slowmo') slow += c.durationS - (c.params.untilBroadcastS - c.atBroadcastS);
    if (c.mode === 'post') pause += c.durationS;
  }
  return { pauseS: r1(pause), slowS: r1(slow) };
}

function ordinal(n) { return `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`; }
function hashSeed(s) { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
