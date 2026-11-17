// Race analysis + broadcast timeline. Pure functions over pacing tables (no randomness, no outcome changes).
// A runner's position at race time t is read from its real progress table (elapsed seconds at every 25 m).
// Owned by the lead. Used by selection (analyse) and by round creation (buildRacePlan).

export const STEP_M = 25;
export const N_PTS = 201;
export const HILL_M = [1720, 4220]; // start of "the Hill" climb on each lap (from the course build: steepest climb at 1720 m)
export const LAP_M = 2500;

export function distanceAt(progress, t) {
  if (t <= 0) return 0;
  if (t >= progress[N_PTS - 1]) return 5000;
  let lo = 0, hi = N_PTS - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (progress[mid] <= t) lo = mid; else hi = mid; }
  const f = (t - progress[lo]) / (progress[hi] - progress[lo]);
  return (lo + f) * STEP_M;
}
export function timeAtDistance(progress, m) {
  const x = Math.max(0, Math.min(5000, m)) / STEP_M;
  const a = Math.floor(x), b = Math.min(N_PTS - 1, a + 1);
  return progress[a] + (x - a) * (progress[b] - progress[a]);
}

// Full analysis of a field (array of {id, progress, officialS}).
export function analyse(field, { dt = 1, debounceS = 6 } = {}) {
  const ids = field.map((r) => r.id);
  const T = Math.max(...field.map((r) => r.officialS));
  const order = [...field].sort((a, b) => a.officialS - b.officialS).map((r) => r.id);
  const samples = [];
  for (let t = 0; t <= Math.ceil(T); t += dt) {
    const d = field.map((r) => distanceAt(r.progress, t));
    samples.push({ t, d });
  }
  // stable rank tracking with debounce: a pair swap only counts once it has held for debounceS seconds
  const events = [];
  const n = field.length;
  const pairState = {}; // key i-j -> {ahead: i|j, since}
  const key = (i, j) => `${i}-${j}`;
  let leader = null, leaderSince = 0, pendingLeader = null, pendingSince = 0;
  let leadChanges = 0, overtakes = 0, lateLeadChange = false, breakawayAt = null;
  for (const s of samples) {
    if (s.t < 15) continue; // ignore the start scrum
    const done = field.map((r) => s.t >= r.officialS);
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      if (done[i] && done[j]) continue;
      const ahead = s.d[i] > s.d[j] ? i : j;
      const st = pairState[key(i, j)];
      if (!st) { pairState[key(i, j)] = { ahead, cand: ahead, since: s.t }; continue; }
      if (ahead !== st.cand) { st.cand = ahead; st.since = s.t; }
      if (st.cand !== st.ahead && s.t - st.since >= debounceS) {
        const passer = st.cand, passed = st.cand === i ? j : i;
        st.ahead = st.cand;
        const tPass = st.since;
        overtakes++;
        events.push({ type: 'overtake', raceS: tPass, by: ids[passer], on: ids[passed], atM: Math.round(distanceAt(field[passer].progress, tPass)) });
      }
    }
    const lead = s.d.indexOf(Math.max(...s.d));
    if (leader === null) { leader = lead; leaderSince = s.t; continue; }
    if (lead !== leader) {
      if (pendingLeader !== lead) { pendingLeader = lead; pendingSince = s.t; }
      else if (s.t - pendingSince >= debounceS && !done[leader]) {
        events.push({ type: 'lead_change', raceS: pendingSince, from: ids[leader], to: ids[lead], atM: Math.round(s.d[lead]) });
        leadChanges++;
        if (s.d[lead] > 3500) lateLeadChange = true;
        leader = lead; leaderSince = pendingSince; pendingLeader = null;
      }
    } else pendingLeader = null;
    const sorted = [...s.d].sort((a, b) => b - a);
    if (breakawayAt === null && sorted[0] - sorted[1] > 60 && sorted[0] < 5000) {
      breakawayAt = s.t;
      events.push({ type: 'breakaway', raceS: s.t, who: ids[lead], gapM: Math.round(sorted[0] - sorted[1]), atM: Math.round(sorted[0]) });
    }
  }
  // milestones for the leader
  const leaderAt = (m) => Math.min(...field.map((r) => timeAtDistance(r.progress, m)));
  for (const [i, m] of HILL_M.entries()) events.push({ type: 'hill', raceS: leaderAt(m), lap: i + 1, atM: m });
  events.push({ type: 'lap', raceS: leaderAt(LAP_M), atM: LAP_M, order: rankAt(field, leaderAt(LAP_M)) });
  events.push({ type: 'final_stretch', raceS: leaderAt(4600), atM: 4600, order: rankAt(field, leaderAt(4600)) });
  for (const r of field) events.push({ type: 'finish', raceS: r.officialS, who: r.id, place: order.indexOf(r.id) + 1 });
  events.sort((a, b) => a.raceS - b.raceS);

  const times = field.map((r) => r.officialS).sort((a, b) => a - b);
  const at = (m) => rankAt(field, leaderAt(m));
  const leaderAt2k = at(2000)[0], leaderAt1k = at(1000)[0], leaderAt4k = at(4000)[0];
  const lastAt2k = at(2000).at(-1);
  return {
    finishOrder: order,
    winningMarginS: times[1] - times[0],
    spreadS: times.at(-1) - times[0],
    leadChanges, overtakes, lateLeadChange,
    leaderAt1k, leaderAt2k, leaderAt4k,
    leaderAt2kFinalPlace: order.indexOf(leaderAt2k) + 1,
    winnerPlaceAt2k: at(2000).indexOf(order[0]) + 1,
    winnerPlaceAt1k: at(1000).indexOf(order[0]) + 1,
    lastAt2kFinalPlace: order.indexOf(lastAt2k) + 1,
    breakawayAtS: breakawayAt,
    events,
  };
}

export function rankAt(field, t) {
  return field.map((r) => ({ id: r.id, d: distanceAt(r.progress, t), f: r.officialS }))
    .sort((a, b) => (b.d - a.d) || (a.f - b.f)).map((x) => x.id);
}

// Non-uniform broadcast clock. Same mapping for every runner, so relative positions are never altered.
// rate = race seconds per broadcast second. Slow at the start, fast through the middle, slow for the finale.
export function buildTimeMap(field, { targetS = 140 } = {}) {
  const T = Math.max(...field.map((r) => r.officialS));
  const leaderFinal = Math.min(...field.map((r) => timeAtDistance(r.progress, 4500)));
  const startEnd = 45;
  // finale: from leader at 4500 m to the last finisher (+3 s)
  const finaleStart = leaderFinal, end = T + 3;
  const finaleRace = end - finaleStart;
  // choose rates: start x4, finale rate so that finale lasts ~45% of the broadcast (capped), middle fills the rest
  const startRate = 4;
  const finaleB = Math.min(targetS * 0.45, Math.max(25, finaleRace / 1.6));
  const finaleRate = finaleRace / finaleB;
  const middleRace = finaleStart - startEnd;
  const middleB = Math.max(30, targetS - startEnd / startRate - finaleB);
  const middleRate = middleRace / middleB;
  const rate = (t) => {
    // smooth blends of 20 race-seconds (start) and 40 race-seconds (finale) between regimes
    const s1 = smoothstep(startEnd - 10, startEnd + 10, t), s2 = smoothstep(finaleStart - 60, finaleStart, t);
    return startRate + (middleRate - startRate) * s1 + (finaleRate - middleRate) * s2;
  };
  const map = [[0, 0]];
  let b = 0;
  for (let t = 1; t <= Math.ceil(end); t++) { b += 1 / rate(t - 0.5); map.push([t, Math.round(b * 1000) / 1000]); }
  return { map, durationS: Math.round(b * 10) / 10, raceEndS: Math.ceil(end), rates: { start: startRate, middle: Math.round(middleRate * 10) / 10, finale: Math.round(finaleRate * 100) / 100 } };
}
function smoothstep(a, b, x) { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

export function raceToBroadcast(timeMap, t) {
  const m = timeMap.map;
  if (t <= 0) return 0;
  if (t >= m.length - 1) return m.at(-1)[1];
  const a = Math.floor(t), f = t - a;
  return m[a][1] + f * (m[a + 1][1] - m[a][1]);
}
export function broadcastToRace(timeMap, b) {
  const m = timeMap.map;
  if (b <= 0) return 0;
  let lo = 0, hi = m.length - 1;
  if (b >= m[hi][1]) return m[hi][0];
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (m[mid][1] <= b) lo = mid; else hi = mid; }
  return m[lo][0] + (b - m[lo][1]) / (m[hi][1] - m[lo][1]);
}

// The race plan sent to the TV. `runners` = [{id, officialS, progress, pacingSource}]
export function buildRacePlan(roundId, runners, opts = {}) {
  const a = analyse(runners);
  const timeMap = buildTimeMap(runners, opts);
  const evts = [...a.events];
  // Real course diversions from GPS (funfair weekends): the runner's own trace left the usual route here.
  for (const r of runners) for (const [i, d] of (r.diversions || []).entries()) {
    evts.push({ type: 'diversion', who: r.id, lap: i + 1, raceS: timeAtDistance(r.progress, d.fromM), endRaceS: timeAtDistance(r.progress, d.toM), fromM: d.fromM, toM: d.toM });
  }
  evts.sort((x, y) => x.raceS - y.raceS);
  const events = evts.map((e) => ({ ...e, broadcastS: Math.round(raceToBroadcast(timeMap, e.raceS) * 100) / 100,
    ...(e.endRaceS != null ? { endBroadcastS: Math.round(raceToBroadcast(timeMap, e.endRaceS) * 100) / 100 } : {}) }));
  return {
    roundId,
    courseLengthM: 5000,
    runners: runners.map((r) => ({ id: r.id, officialS: r.officialS, progress: r.progress, pacingSource: r.pacingSource, diversions: r.diversions || null })),
    timeMap,
    events,
    finishOrder: a.finishOrder,
    summary: { winningMarginS: a.winningMarginS, spreadS: a.spreadS, leadChanges: a.leadChanges, overtakes: a.overtakes, lateLeadChange: a.lateLeadChange },
  };
}
