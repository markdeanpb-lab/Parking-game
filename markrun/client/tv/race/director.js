// Broadcast camera director: a SUBJECT HIERARCHY (what matters now) + an ANGLE GRAMMAR (how to shoot it) + editing rules.
// A. Subject priority, re-evaluated every 0.25 s of broadcast time (lower = more important):
//    1 the finish (finishcam / placecam set-piece)  2 a lead battle in the final km (top two within 2 s)
//    3 a lead change about to happen (overtakes are known in advance, so the camera is in place before the pass)
//    3.5 a funfair detour  4 a battle / pass involving a BACKED runner  5 the Hill (each lap)
//    6 a breakaway leader whose gap is growing  6.5 a short check-in on a lone backed runner  7 the pack / overview
// B. Angle grammar: battles = low side tracking (slow clock) / front telephoto / rear chase / high 3/4;
//    overtakes = rear 3/4 chase BEFORE the pass, hard cut to the front telephoto AFTER it; the Hill = low crane up the
//    slope or from the top looking down; breakaway = high front looking back down the empty road (+ gap graphic);
//    pack = high rear 3/4 keeping the group in frame; lone backed runner = 3.5 s over-the-shoulder, then back;
//    occasional motivated cutaways (crowd / lap board as the runners arrive, <= one per 30 s); the finish set-piece.
// C. Editing: 5-10 s shots mid-race, 3-6 s in the final km, never under 2.5 s (except cutaways); never the same angle
//    twice in a row; cuts only for a reason (higher priority, beat over, the pass, max length); hard cuts on action,
//    glides only to reframe the same subject (never front <-> rear); 180-degree rule within a story; while the clock runs
//    fast only axis-aligned angles (front / rear / high rear), so the background never whips past.
// Every shot carries `reason` (see client/tv/race/shotstats.mjs). Positions are analytic in broadcast time: no jitter.
import * as THREE from 'three';
import { raceToBroadcast, timeAtDistance, HILL_M } from '../../../server/game/raceplan.mjs';

export const GLIDE_S = 1.3;
const RUNNER_H = 2.4;      // character height incl. hat (m)
export const TARGET_FRAC = 0.42; // runner height as a fraction of frame height in tracking shots
const ASPECT = 16 / 9;
const FIN_PARK = 26;       // the finish camera parks this far beyond the line
const deg = (r) => (r * 180) / Math.PI;
const fovFor = (dist, frac = TARGET_FRAC) => deg(2 * Math.atan(RUNNER_H / (2 * frac * dist)));
const sstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function buildShotList({ plan, sim, backedIds = [], C, world, funfair }) {
  const out = [];
  const tm = plan.timeMap;
  const S = (t) => sim.stateAt(Math.max(0, t));
  const leaderAtB = (m) => raceToBroadcast(tm, Math.min(...plan.runners.map((r) => timeAtDistance(r.progress, m))));
  const rate = (b) => (b <= 0 ? 4 : sim.rateAt(b));
  const meanRate = (a, b) => { let s = 0, n = 0; for (let t = a; t <= b; t += Math.max(0.5, (b - a) / 12)) { s += rate(t); n++; } return s / Math.max(1, n); };
  const firstFin = sim.firstFinishB, lastFin = sim.lastFinishB;
  const winnerId = sim.finishOrder[0];
  const margin = sim.finishOrder.length > 1 ? sim.byId[sim.finishOrder[1]].officialS - sim.byId[winnerId].officialS : 99;
  const runaway = margin > 8 && backedIds.some((id) => id !== winnerId);
  const isB = (id) => backedIds.includes(id);
  const short = (id) => id;
  // seconds `behind` trails `ahead` at broadcast time t
  const gapS = (st, ahead, behind) => st.raceS - timeAtDistance(sim.byId[ahead].progress, st.byId[behind].m);

  // ---- fixed beats ----
  let gunEnd = 0.25 + 8;
  for (let t = 0.25; t < 30; t += 0.25) if (rate(t) > 7) { gunEnd = Math.max(gunEnd, t); break; }
  // the finish camera locks on for the last ~150 m (only the last ~70 m on a runaway: the money is further back)
  const bFin = Math.max(gunEnd + 8, Math.min(firstFin - 2, leaderAtB(runaway ? 4935 : 4850)));

  out.push({ type: 'heli', a: -8.5, b: -3.2, hard: true, reason: 'opening flyover' });
  out.push({ type: 'startgo', a: -3.2, b: 0.25, hard: true, reason: 'on your marks' });
  out.push({ type: 'headon', a: 0.25, b: gunEnd, hard: true, ids: null, start: true, key: 'start', kind: 'pack', reason: 'the gun: the whole field coming at us' });

  // ---- what is worth looking at, at time t (A: subject hierarchy, lower prio = more important) ----
  // overtakes known in advance: lead changes and passes involving a backed runner (a back-and-forth inside 6 s counts once)
  const ovs = [];
  for (const e of plan.events || []) {
    if (e.broadcastS < gunEnd + 1 || e.broadcastS > bFin - 2) continue;
    const lead = e.type === 'lead_change';
    if (e.type !== 'overtake' && !lead) continue;
    const by = lead ? e.to : e.by, on = lead ? e.from : e.on;
    if (!lead && !isB(by) && !isB(on)) continue;
    const dup = ovs.find((o) => Math.abs(o.at - e.broadcastS) < 0.3 && o.by === by);
    if (dup) { dup.lead = dup.lead || lead; continue; }
    if (ovs.some((o) => e.broadcastS - o.at < 6 && [o.by, o.on].includes(by) && [o.by, o.on].includes(on))) continue;
    ovs.push({ at: e.broadcastS, by, on, lead });
  }
  const hillWin = HILL_M.map((m) => [leaderAtB(m - 30), leaderAtB(m + 240)]);
  const divR = funfair ? plan.runners.filter((r) => r.diversions?.length) : [];
  const divWin = divR.flatMap((r) => r.diversions.map((d) => ({ id: r.id, a: raceToBroadcast(tm, timeAtDistance(r.progress, d.fromM)) - 0.5, b: raceToBroadcast(tm, timeAtDistance(r.progress, d.toM)) + 0.8 })));
  const lastSeen = {}; for (const r of plan.runners) lastSeen[r.id] = gunEnd;
  let hillShown = false;
  function cands(t) {
    const st = S(t); const live = st.order.filter((id) => !st.byId[id].finished);
    if (!live.length) return [];
    const c = [];
    const L = st.byId[live[0]];
    const near = (core, within = 6) => { const ms = core.map((id) => st.byId[id].m); return [...core, ...live.filter((id) => !core.includes(id) && st.byId[id].m > Math.min(...ms) - within && st.byId[id].m < Math.max(...ms) + within)]; };
    // 2: lead battle in the final km
    if (live.length > 1 && L.m >= 4000 && gapS(st, live[0], live[1]) <= 2) c.push({ prio: 2, key: `lb:${live[0]}|${live[1]}`, ids: near([live[0], live[1]]), kind: 'battle', reason: `lead battle in the final km (${gapS(st, live[0], live[1]).toFixed(1)} s)` });
    // 3 / 4: a pass about to happen (pre-positioned), then the passer coming at us
    for (const o of ovs) if (t >= o.at - 4.5 && t < o.at + 4) c.push({ prio: o.lead ? 3 : 4, key: `ov:${o.at.toFixed(2)}`, ids: near([o.by, o.on], 3), kind: 'overtake', phase: t < o.at ? 'pre' : 'post', at: o.at, reason: `${o.lead ? 'lead change' : 'backed pass'}: ${short(o.by)} passes ${short(o.on)}` });
    // funfair detour (the planned gag)
    for (const w of divWin) if (t >= w.a && t < w.b) c.push({ prio: 3.5, key: `fair:${w.id}`, ids: [w.id], kind: 'fair', reason: `${short(w.id)} detours through the funfair` });
    // 4: a battle involving a backed runner (tightest first)
    for (let i = 1; i < live.length; i++) {
      const a = live[i - 1], bh = live[i]; if (!isB(a) && !isB(bh)) continue;
      const g = gapS(st, a, bh); if (g > 3 || g < 0) continue;
      c.push({ prio: 4.2 + g * 0.05, key: `bb:${a}|${bh}`, ids: near([a, bh]), kind: 'battle', reason: `backed battle: ${short(bh)} ${g.toFixed(1)} s behind ${short(a)}` });
    }
    // 5: the Hill, framed on whoever is most interesting there (a backed runner, else the leader)
    for (const [i, [h0, h1]] of hillWin.entries()) if (t >= h0 && t < h1) {
      const on = live.filter((id) => { const g = C.geoOf(st.byId[id].m); return g > 1650 && g < 2010; });
      const who = on.find(isB) ?? on[0] ?? live[0];
      // guaranteed slot: if lap 1's Hill was never shown, lap 2's outranks everything but a lead change
      c.push({ prio: i === 1 && !hillShown ? 3.2 : 5, key: `hill:${i}`, ids: near([who]), kind: 'hill', lap: i, reason: `the Hill, lap ${i + 1}: ${short(who)}` });
    }
    // 6: a breakaway leader whose gap is growing
    if (live.length > 1) {
      const g = gapS(st, live[0], live[1]), st2 = S(t + 6), g2 = st2.byId[live[0]].finished ? g : gapS(st2, live[0], live[1]);
      if (g >= 6 && g2 > g + 0.3) c.push({ prio: 6, key: `br:${live[0]}`, ids: [live[0]], kind: 'break', reason: `breakaway: ${short(live[0])} ${g.toFixed(0)} s clear and pulling away` });
    }
    // 6.5: a lone backed runner we haven't seen for a while (a short check-in, then back to the action)
    for (const id of live) if (isB(id) && t - (lastSeen[id] ?? -99) > 35) {
      const i = live.indexOf(id); const ga = i > 0 ? gapS(st, live[i - 1], id) : 99, gb = i < live.length - 1 ? gapS(st, id, live[i + 1]) : 99;
      if (ga > 5 && gb > 5 && t - lastCut > 10) c.push({ prio: 6.5, key: `chk:${id}`, ids: [id], kind: 'checkin', reason: `check-in on backed ${short(id)}, alone` });
    }
    // 7: the pack: the biggest group (within 15 m, so it frames big), else a solo story
    let grp = [live[0]];
    const onCourse = live.filter((x) => !(st.byId[x].div > 0.05)); // a funfair detour isn't part of the pack
    for (const id of onCourse) { const g = onCourse.filter((x) => Math.abs(st.byId[x].m - st.byId[id].m) < 15 && st.byId[x].m <= st.byId[id].m); if (g.length > grp.length) grp = g; }
    if (grp.length > 1) c.push({ prio: 7, key: 'pack', ids: grp, kind: 'pack', spread: Math.max(...grp.map((x) => st.byId[x].m)) - Math.min(...grp.map((x) => st.byId[x].m)), reason: `the pack: ${grp.length} together` });
    else { const who = live.find(isB) ?? live[0]; c.push({ prio: 7, key: `solo:${who}`, ids: [who], kind: 'solo', reason: `field strung out: ${isB(who) ? 'backed ' : 'leader '}${short(who)}` }); }
    return c.sort((x, y) => x.prio - y.prio);
  }

  // ---- B: angle grammar ----
  const FRONT = new Set(['headon', 'high3q', 'breakaway', 'hilltop']), REAR = new Set(['chase', 'shoulder', 'pack', 'hill']);
  const used = {};
  function angleFor(c, prevType, r) {
    const slow = r <= 6;
    let list;
    switch (c.kind) {
      case 'overtake': list = c.phase === 'pre' ? ['chase', 'shoulder'] : slow ? ['headon', 'high3q'] : ['headon', 'chase']; break;
      case 'battle': { const st = S(c.t ?? 0), ms = (c.ids || []).map((id) => st.byId[id]?.m ?? 0), sp = Math.max(...ms) - Math.min(...ms); list = slow ? ['side', 'headon', 'high3q', 'chase'] : sp > 9 ? ['headon', 'chase'] : ['headon', 'chase', 'pack']; break; }
      case 'hill': list = c.lap % 2 ? ['hilltop', 'hill'] : ['hill', 'hilltop']; break;
      case 'break': list = slow ? ['breakaway', 'high3q', 'headon'] : ['breakaway', 'headon', 'chase']; break;
      case 'checkin': list = ['shoulder', 'chase']; break;
      case 'fair': list = ['side']; break;
      case 'solo': list = slow ? ['headon', 'side', 'chase'] : ['headon', 'chase']; break;
      default: list = (c.ids?.length || 0) < 2 || (c.spread ?? 0) > 9 ? (slow ? ['headon', 'side', 'chase'] : ['headon', 'chase']) : slow ? ['pack', 'high3q', 'headon', 'side'] : ['pack', 'chase', 'headon'];
    }
    // never the same angle twice in a row; among the rest, the grammar's order, nudged towards the least used
    const ok = list.filter((x) => x !== prevType);
    if (!ok.length) return list.find((x) => x !== prevType) || (prevType === 'headon' ? 'chase' : 'headon');
    if (c.kind === 'overtake' || c.kind === 'hill' || c.kind === 'fair') return ok[0];
    return ok.map((x, i) => [x, i + (used[x] || 0) * 0.6]).sort((p, q) => p[1] - q[1])[0][0];
  }

  // ---- cutaway features (crowd, the lap board / bell, the lake): course metres on lap-1 geometry ----
  const feats = [];
  for (const z of world.anchors?.crowdZones || []) if (z.m0 > 300 && z.m1 < 2560) feats.push({ m: (z.m0 + z.m1) / 2, side: z.side, kind: z.m0 > 1900 && z.m1 < 2020 ? 'hilltop crowd' : z.m0 > 2050 && z.m1 < 2200 ? 'lakeside crowd' : z.m0 > 2400 && z.m1 < 2500 ? 'lap-board crowd' : 'crowd', off: z.off + z.depth / 2 });
  if (world.anchors?.lapM) feats.push({ m: 2475, side: 1, kind: 'the lap board (bell lap)', off: PATH_W_HALF + 3.6 });
  let lastCut = -1e9;
  function cutawayAt(t, front) {
    if (t - lastCut < 40 || t > bFin - 12) return null;
    for (let tau = 1.4; tau <= 2.2; tau += 0.2) {
      const st = S(t + tau); const r = st.byId[front]; if (!r || r.finished) return null;
      const g = C.geoOf(r.m);
      const f = feats.find((q) => Math.abs(q.m - g) < 10);
      if (f) return f;
    }
    return null;
  }

  // ---- C: editing: walk the race, cutting only for a reason ----
  let cur = null, keyStart = 0, prevT = 'headon';
  const push = (c, a, why, extra = {}) => {
    const r = meanRate(a, a + 4);
    const type = extra.type || angleFor({ ...c, t: a }, prevT, r);
    used[type] = (used[type] || 0) + 1;
    const same = out.at(-1)?.key === c.key;
    if (!same) keyStart = a;
    // glide only to reframe the same subject (never through it: front <-> rear is a cut); hard cuts on action
    const pt = out.at(-1)?.type;
    const glide = same && !extra.hard && !(FRONT.has(pt) && REAR.has(type)) && !(REAR.has(pt) && FRONT.has(type)) && extra.type !== 'cutaway';
    const { hard: _h, ...rest } = extra;
    const shot = { type, a, b: a + 4, ids: c.ids, key: c.key, kind: c.kind, prio: c.prio, phase: c.phase, lap: c.lap, reason: why, fair: c.kind === 'fair', ...rest, hard: !glide };
    out.push(shot); cur = shot; prevT = type;
    for (const id of c.ids || []) lastSeen[id] = a;
    return shot;
  };
  const sameSet = (x, y) => x && y && x.length === y.length && x.every((id) => y.includes(id));
  for (let t = gunEnd; t < bFin - 0.01; t += 0.25) {
    const st = S(t);
    // final-km pacing follows the story on screen (a runaway leader doesn't speed up the cutting of the battle behind)
    const subjM = (ids) => Math.max(0, ...(ids || []).map((id) => (st.byId[id]?.finished ? 5000 : st.byId[id]?.m ?? 0)));
    const fk = subjM(cur?.ids || [st.order[0]]) >= 4000;
    // calm pacing: a story ends after >= 8 s mid-race (>= 4 s in the final km); max 10 s / 5 s per angle
    const minL = fk ? 4 : 8, maxL = fk ? 5 : 10;
    const cs = cands(t).map((c) => (c.kind === 'overtake' && c.phase === 'pre' && c.at - t < 3 && cur?.key !== c.key ? { ...c, phase: 'post' } : c)); // too late to set up the chase: go straight to the front
    const best = cs[0]; if (!best) continue;
    if (!cur || cur.type === 'cutaway') { if (!cur || t >= cur.b) { if (cur) cur.b = t; push(best, t, best.reason); if (best.kind === 'hill') hillShown = true; } continue; }
    const len = t - cur.a;
    const holdCheck = cur.kind === 'checkin' && len < 4;
    const holdHill = cur.kind === 'hill' && len < 5;
    const live = cs.find((c) => c.key === cur.key);
    const still = live || (holdCheck || holdHill ? cur : null);
    if (bFin - t < 3) continue; // no stub shot before the finish camera
    let next = null, why = '', hard = false;
    // only a lead change or a backed pass may interrupt before 4 s (never before 3 s); the Hill runs its course unless a lead changes
    const canInterrupt = (c) => c.key !== cur.key && c.prio < cur.prio - 0.5 && (holdHill ? c.kind === 'overtake' && c.prio <= 3 : len >= (c.kind === 'overtake' ? 3 : 4)) && !(holdCheck && c.kind !== 'overtake');
    const intr = cs.find(canInterrupt);
    if (still && cur.kind === 'overtake' && still.phase !== cur.phase && len >= 3) { next = still; why = `the pass: ${still.reason.split(': ')[1]} - cut to the front`; hard = true; }
    else if (intr) { next = intr; why = intr.reason; hard = true; }
    else if (!still && len >= minL) { next = best; why = `${best.reason} (previous story over)`; }
    else if (cur.kind === 'checkin' && len >= 4) { next = cs.find((c) => c.key !== cur.key && c.kind !== 'checkin') || best; why = `back to the action: ${next.reason}`; hard = true; }
    else if (len >= maxL) {
      const alt = cs.find((c) => c.key !== cur.key && c.kind !== 'checkin');
      if (t - keyStart > 26 && alt) { next = alt; why = `fresh subject after ${Math.round(t - keyStart)} s: ${alt.reason}`; hard = true; }
      else { next = live || best; why = live ? `${maxL} s max: new angle on the same story` : `${best.reason} (previous story over)`; }
    } else if (cur.prio >= 6 && len >= 5) {
      // motivated cutaway: the subject is about to reach a crowd / the lap board (at most one per 40 s)
      const f = cutawayAt(t, cur.ids?.[0]);
      if (f) { cur.b = t; lastCut = t; push({ ...cur, key: `cut:${t}` }, t, `cutaway: ${f.kind} as ${short(cur.ids[0])} arrives`, { type: 'cutaway', feat: f, b: t + 2.5, hard: true, ids: cur.ids }); out.at(-1).b = t + 2.5; prevT = 'cutaway'; continue; }
    }
    if (next) {
      // the same runners in a new story (e.g. a battle that becomes 'the pack'): keep rolling, just relabel
      if (next.key !== cur.key && sameSet(next.ids, cur.ids) && next.kind !== 'overtake' && cur.kind !== 'overtake' && cur.kind !== 'checkin' && len < maxL && next.kind !== 'hill') {
        cur.key = next.key; cur.kind = next.kind; cur.prio = next.prio; cur.reason += ` -> ${next.reason}`; continue;
      }
      cur.b = t; push(next, t, why, { hard });
      if (next.kind === 'hill') hillShown = true;
    }
  }
  if (cur) cur.b = bFin;
  // runaway: the finish camera covers the winner's crossing; the place camera takes over after the winner's replay
  out.push({ type: 'finishcam', a: bFin, b: firstFin + 1.15, hard: true, winner: winnerId, reason: 'the finish: the winner\'s last metres', ids: [winnerId], key: 'finish' });
  {
    let a = firstFin + 1.15, hard = true;
    const rest = sim.finishOrder.slice(1);
    for (let i = 0; i < rest.length;) {
      const grp = [rest[i]]; let fb = sim.byId[rest[i]].finishB; i++;
      while (i < rest.length && sim.byId[rest[i]].finishB - fb < 3) { grp.push(rest[i]); fb = sim.byId[rest[i]].finishB; i++; }
      const e = i < rest.length ? Math.max(fb + 2.2, a + 4) : lastFin + 2.5;
      if (e > a + 0.5) { out.push({ type: 'placecam', a, b: e, hard, ids: grp, key: `place:${grp}`, reason: `finishers: ${grp.join(' & ')}` }); hard = false; a = e; }
    }
  }
  out.push({ type: 'celebrate', a: Math.max(firstFin + 1.2, lastFin + 2.5), b: lastFin + 90, hard: true, reason: 'celebrations' });

  // a detouring runner is filmed side-on from the course side (a front/rear camera would sit among the rides)
  if (funfair) for (const s of out) {
    if (!['headon', 'chase', 'shoulder', 'pack', 'high3q', 'breakaway', 'hill', 'hilltop'].includes(s.type) || s.start) continue;
    const ids = s.ids || leadGroupAt(sim, (s.a + s.b) / 2);
    const hit = divWin.find((w) => ids.includes(w.id) && w.a < s.b && w.b > s.a);
    if (hit) Object.assign(s, { type: 'side', fair: true, ids: [hit.id] });
  }

  // ---- per-shot constants (distances, FOV, screen side) so nothing pumps inside a shot ----
  let seqSide = 0, seqKey = null;
  for (const s of out) {
    s.rate = meanRate(Math.max(0, s.a), Math.max(0.5, s.b));
    s.ids = s.ids || null;
    if (['heli', 'startgo', 'finishcam', 'placecam', 'celebrate'].includes(s.type)) continue;
    const ids = s.ids || leadGroupAt(sim, (s.a + s.b) / 2);
    let spread = 0;
    for (let k = 0; k <= 6; k++) { const st = S(s.a + ((s.b - s.a) * k) / 6); const ms = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished).map((r) => r.m); if (ms.length) spread = Math.max(spread, Math.max(...ms) - Math.min(...ms)); }
    s.spread = spread;
    // 180-degree rule: lateral cameras stay on one side of the runners' line within a sequence (same story)
    if (s.key !== seqKey || !seqSide) { seqKey = s.key; seqSide = chooseSide({ ...s, dist: 20 }, ids); }
    s.side = s.fair ? chooseSide({ ...s, dist: 20 }, ids) : seqSide;
    switch (s.type) {
      case 'side': {
        s.dist = THREE.MathUtils.clamp(14 + 1.2 * s.rate, 17, 30);
        const fitFov = deg(2 * Math.atan((spread + 4) / (2 * ASPECT * s.dist)));
        s.fov = THREE.MathUtils.clamp(Math.max(fovFor(s.dist, 0.36), fitFov), 5, 34);
        if (!s.fair && !world.inPark?.(0, 0) && false) s.side = -s.side;
        break;
      }
      case 'headon': {
        let want = s.start ? 30 : THREE.MathUtils.clamp(18 + 1.25 * s.rate, 20, 40);
        let gap = aheadGap(s, ids);
        if (gap < 16 && !s.start) {
          const st = S((s.a + s.b) / 2); const front = Math.max(...ids.map((id) => st.byId[id].m));
          const nxt = st.order.filter((id) => !ids.includes(id) && !st.byId[id].finished && st.byId[id].m > front).sort((x, y) => st.byId[x].m - st.byId[y].m)[0];
          if (nxt) { s.ids = [...ids, nxt]; spread = spreadOf(s); s.spread = spread; gap = aheadGap(s, s.ids); }
        }
        s.dist = Math.max(12, Math.min(want, gap - 6));
        s.fov = THREE.MathUtils.clamp(fovFor(s.dist, TARGET_FRAC - 0.02), 4, 30);
        s.lat = chooseLat(s, s.ids || ids);
        break;
      }
      case 'chase': case 'shoulder': case 'hill': {
        // behind the rearmost subject; nobody between the camera and them: a runner close behind joins the shot
        let back = behindGap(s, ids);
        for (let k = 0; k < 3 && back < 13; k++) {
          const st = S((s.a + s.b) / 2); const rear = Math.min(...(s.ids || ids).map((id) => st.byId[id].m));
          const prv = st.order.filter((id) => !(s.ids || ids).includes(id) && !st.byId[id].finished && st.byId[id].m < rear).sort((x, y) => st.byId[y].m - st.byId[x].m)[0];
          if (!prv) break;
          s.ids = [...(s.ids || ids), prv]; back = behindGap(s, s.ids); spread = spreadOf(s); s.spread = spread;
        }
        const want = s.type === 'shoulder' ? 6.5 : s.type === 'hill' ? 13 : THREE.MathUtils.clamp(13 + 0.4 * s.rate, 13, 22);
        s.dist = Math.max(s.type === 'shoulder' ? 4 : 8, Math.min(want, back - 4));
        // the nearest (rear) runner never above ~50% of the frame
        s.fov = s.type === 'shoulder' ? 40 : s.type === 'hill' ? 34 : THREE.MathUtils.clamp(Math.max(fovFor(s.dist + spread * 0.4, 0.34), fovFor(s.dist + 1, 0.5)), 6, 34);
        break;
      }
      // subjects >= ~28-30% of the frame height (the nearest bigger)
      case 'high3q': { s.dist = 12; s.fov = THREE.MathUtils.clamp(Math.min(fovFor(15 + spread * 0.3, 0.3), Math.max(fovFor(15, 0.4), deg(2 * Math.atan((spread + 5) / (2 * ASPECT * 15))))), 8, 40); break; }
      case 'pack': {
        // high rear camera: the vertical angle between the rear and front runners must fit too (else the near one drops out)
        s.dist = 18; const hz = Math.hypot(18, 6), hgt = 8;
        const span = deg(Math.atan(hgt / hz) - Math.atan(hgt / (hz + spread))) + deg(2 * Math.atan(2.8 / hz));
        s.fov = THREE.MathUtils.clamp(Math.max(fovFor(21 + spread * 0.5, 0.3), span * 1.1, deg(2 * Math.atan((spread * 0.35 + 6) / (2 * (21 + spread * 0.5))))), 10, 40);
        break;
      }
      case 'breakaway': { s.dist = 20; s.fov = 24; break; }
      case 'hilltop': { s.dist = THREE.MathUtils.clamp(Math.min(24, aheadGap(s, ids) - 5), 12, 24); s.fov = THREE.MathUtils.clamp(fovFor(s.dist, 0.36), 8, 30); break; }
      default: break;
    }
  }
  return out;

  // metres from the group's front to the nearest live runner ahead (min over the shot)
  function aheadGap(s, ids) {
    let g = 1e9;
    for (let k = 0; k <= 6; k++) {
      const st = S(s.a + ((s.b - s.a) * k) / 6);
      const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished); if (!live.length) continue;
      const front = Math.max(...live.map((r) => r.m));
      for (const id of st.order) { const r = st.byId[id]; if (!ids.includes(id) && !r.finished && r.m > front - 0.5) g = Math.min(g, r.m - front); }
    }
    return g;
  }
  // metres from the group's rearmost runner back to the nearest live runner behind (min over the shot)
  function behindGap(s, ids) {
    let g = 1e9;
    for (let k = 0; k <= 6; k++) {
      const st = S(s.a + ((s.b - s.a) * k) / 6);
      const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished); if (!live.length) continue;
      const rear = Math.min(...live.map((r) => r.m));
      for (const id of st.order) { const r = st.byId[id]; if (!ids.includes(id) && !r.finished && r.m < rear + 0.5) g = Math.min(g, rear - r.m); }
    }
    return g;
  }
  function spreadOf(s) {
    let spread = 0;
    for (let k = 0; k <= 6; k++) { const st = S(s.a + ((s.b - s.a) * k) / 6); const ms = s.ids.map((id) => st.byId[id]).filter((r) => r && !r.finished).map((r) => r.m); if (ms.length) spread = Math.max(spread, Math.max(...ms) - Math.min(...ms)); }
    return spread;
  }
  // camera on the inside of the bend (shorter camera path -> calmer), and inside the park
  function chooseSide(s, ids) {
    const at = (t) => { const st = S(t); const l = ids.map((id) => st.byId[id]).filter(Boolean); const x = l.reduce((a, r) => a + r.x, 0) / l.length, z = l.reduce((a, r) => a + r.z, 0) / l.length; return [x, z]; };
    const p0 = at(s.a), p1 = at((s.a + s.b) / 2), p2 = at(s.b);
    const cross = (p1[0] - p0[0]) * (p2[1] - p1[1]) - (p1[1] - p0[1]) * (p2[0] - p1[0]);
    let side = cross > 0 ? 1 : -1;
    const h = [p2[0] - p0[0], p2[1] - p0[1]]; const L = Math.hypot(...h) || 1; const r = [-h[1] / L, h[0] / L];
    if (s.fair && funfair) {
      const c = funfair.anchors.center;
      return ((c.x - p1[0]) * r[0] + (c.z - p1[1]) * r[1]) > 0 ? -1 : 1;
    }
    const d = s.dist || 30;
    const ok = (sg) => world.inPark ? world.inPark(p1[0] + r[0] * d * sg, p1[1] + r[1] * d * sg) : true;
    if (!ok(side) && ok(-side)) side = -side;
    return side;
  }
  function chooseLat(s, ids) {
    const st = S((s.a + s.b) / 2); const l = ids.map((id) => st.byId[id]).filter(Boolean);
    const lat = l.reduce((a, r) => a + (r.lat || 0), 0) / Math.max(1, l.length);
    return THREE.MathUtils.clamp(lat * 0.6, -1.8, 1.8) + (lat >= 0 ? 0.7 : -0.7);
  }
}
const PATH_W_HALF = 3.6;
function leadGroupAt(sim, t) { const st = sim.stateAt(Math.max(0, t)); const live = st.order.filter((id) => !st.byId[id].finished); const l = live[0] ?? st.order[0]; return (live.length ? live : st.order).filter((id) => Math.abs(st.byId[id].m - st.byId[l].m) < 20); }

// ---- runtime ----
export function createDirector({ camera, C, sim, world, funfair }) {
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3() };
  const up = new THREE.Vector3(0, 1, 0);
  let shot = null, glide = null, hardNext = true, smoothLook = null, frozenFrom = false;
  const q = new THREE.Quaternion(), m4 = new THREE.Matrix4();
  const tmpS = {};
  // course metres are not world metres (the GPS line is ~5% short, much more in the finish funnel): cumulative world
  // length along the course, so 'N metres ahead' means N real metres in the scene
  const WSTEP = 2, WL = [0];
  { let prev = C.baseXZ(0); for (let m = WSTEP; m <= 5120; m += WSTEP) { const p = C.baseXZ(m); WL.push(WL.at(-1) + Math.hypot(p[0] - prev[0], p[1] - prev[1])); prev = p; } }
  const wlAt = (m) => { const x = Math.max(0, Math.min(WL.length - 1.001, m / WSTEP)); const i = Math.floor(x); return WL[i] + (WL[i + 1] - WL[i]) * (x - i); };
  function mAhead(m, d) {
    const target = wlAt(m) + d; let lo = 0, hi = WL.length - 1;
    if (WL[hi] <= target) return hi * WSTEP;
    if (target <= 0) return 0;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (WL[mid] < target) lo = mid; else hi = mid; }
    return (lo + (target - WL[lo]) / Math.max(1e-6, WL[hi] - WL[lo])) * WSTEP;
  }

  function center(ids, t) {
    const st = sim.stateAt(Math.max(0, t));
    let l = (ids || st.order.slice(0, 1)).map((id) => st.byId[id]).filter(Boolean);
    const live = l.filter((r) => !r.finished); if (live.length) l = live;
    const v = new THREE.Vector3(); let m = 0; for (const r of l) { v.add(new THREE.Vector3(r.x, r.y, r.z)); m += r.mVis ?? r.m; }
    v.divideScalar(Math.max(1, l.length)); v.m = m / Math.max(1, l.length);
    return v;
  }
  // window-averaged heading: smooth through bends, no jitter
  function smooth(ids, t, w) {
    const c = center(ids, t);
    const a = center(ids, t - w * 1.5), b = center(ids, t + w * 1.5);
    const h = new THREE.Vector3(b.x - a.x, 0, b.z - a.z);
    if (h.lengthSq() < 1e-4) { const id = ids?.[0] ?? sim.stateAt(Math.max(0, t)).order[0]; const s = sim.stateAt(Math.max(0, t)).byId[id]; h.set(s.tx, 0, s.tz); }
    h.normalize();
    return { c, h, r: new THREE.Vector3(-h.z, 0, h.x) };
  }
  const groupOf = (s) => {
    if (s.ids) return s.ids;
    if (!s._group) { s._group = leadGroupAt(sim, (s.a + s.b) / 2); if (!s._group.length) s._group = [sim.stateAt(0).order[0]]; }
    return s._group;
  };
  // the next runner still to finish (backed runners first when they're within reach of the line)
  const backedFirst = (st, backed) => {
    const live = st.order.map((id) => st.byId[id]).filter((x) => !x.finished);
    const bk = live.find((x) => backed?.includes(x.id) && x.distToFinish < 220);
    return bk || live[0] || null;
  };
  // head-on: camera on the course `dist` metres ahead of the subject (looking back at it)
  function headOn(c, dist, lat, lookH = 1.2, frontM = c.m) {
    const sm = C.sample(Math.min(mAhead(frontM, dist), 5110), undefined, tmpS);
    const pos = new THREE.Vector3(sm.x + sm.rx * lat, sm.y + 1.35 + dist * 0.045, sm.z + sm.rz * lat);
    const look = new THREE.Vector3(c.x, c.y + lookH, c.z);
    return { pos, look };
  }

  function evaluate(s, b) {
    const fin = world.anchors.finish, start = world.anchors.start;
    let pos, look, fov = 40;
    const w = s.rate > 8 ? 2.2 : 1.2;
    switch (s.type) {
      case 'heli': {
        const u = (b - s.a) / Math.max(0.01, s.b - s.a);
        const ctr = new THREE.Vector3(150, 0, 0); const st = new THREE.Vector3(start.x, start.y, start.z);
        const k = easeInOut(Math.min(1, u)); const ang = -1.2 + k * 1.6, R = 420 - k * 360;
        pos = new THREE.Vector3(ctr.x + Math.cos(ang) * R, 170 - k * 140, ctr.z + Math.sin(ang) * R)
          .lerp(new THREE.Vector3(st.x - start.tx * 40 + start.rx * 25, st.y + 22, st.z - start.tz * 40 + start.rz * 25), k * k);
        look = ctr.clone().setY(10).lerp(st, Math.min(1, k * 1.3)); fov = 50; break;
      }
      case 'startgo': {
        const st = new THREE.Vector3(start.x, start.y, start.z); const h = new THREE.Vector3(start.tx, 0, start.tz); const r = new THREE.Vector3(-h.z, 0, h.x);
        pos = st.clone().addScaledVector(h, 10.5).addScaledVector(r, 2.6).add(up.clone().multiplyScalar(1.9));
        look = st.clone().add(up.clone().multiplyScalar(1.3)).addScaledVector(h, -1); fov = 42; break;
      }
      case 'side': {
        const { c, h, r } = smooth(groupOf(s), b, w);
        const d = s.dist;
        pos = c.clone().addScaledVector(r, s.side * d).addScaledVector(h, d * 0.12).add(up.clone().multiplyScalar(1.7 + d * 0.07));
        look = c.clone().add(up.clone().multiplyScalar(1.15)); fov = s.fov; break;
      }
      case 'headon': {
        const ids = groupOf(s), c = center(ids, b);
        const st = sim.stateAt(Math.max(0, b)); const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished);
        const front = live.length ? Math.max(...live.map((r) => r.m)) : c.m;
        // look a little towards the front runner so the near (bigger) one sits centrally
        const fr = live.find((r) => r.m === front); if (fr && live.length > 1) { c.x = c.x * 0.6 + fr.x * 0.4; c.z = c.z * 0.6 + fr.z * 0.4; c.y = c.y * 0.6 + fr.y * 0.4; }
        ({ pos, look } = headOn(c, s.dist, s.lat ?? 1, 1.2, front));
        // a runner off the course (funfair detour): ride ahead along their real heading instead of the course
        const dv = Math.max(0, ...live.map((r) => r.div || 0));
        if (dv > 0.01) { const sm = smooth(ids, b, 1.2); const p2 = sm.c.clone().addScaledVector(sm.h, s.dist).addScaledVector(sm.r, 1.2); p2.y = sm.c.y + 1.35 + s.dist * 0.045; pos.lerp(p2, Math.min(1, dv * 1.5)); }
        fov = s.fov; break;
      }
      case 'chase': case 'shoulder': case 'hill': {
        // behind the rearmost subject, looking up the course past them (rear three-quarter / over-the-shoulder / low
        // crane up the Hill); axis-aligned, so calm even at the fast clock
        const ids = groupOf(s), st = sim.stateAt(Math.max(0, b)); const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished);
        const c = center(ids, b); const rear = live.length ? Math.min(...live.map((r) => r.m)) : c.m;
        const sm = C.sample(mAhead(rear, -s.dist), undefined, tmpS);
        const lat = s.type === 'shoulder' ? 1.1 : s.type === 'hill' ? 2.2 : 3.4;
        const hgt = s.type === 'shoulder' ? 2.35 : s.type === 'hill' ? 0.75 : 2.0 + s.dist * 0.05;
        pos = new THREE.Vector3(sm.x + sm.rx * lat * s.side, sm.y + hgt, sm.z + sm.rz * lat * s.side);
        if (s.type === 'shoulder') { const f = C.sample(mAhead(rear, 22), undefined, {}); look = new THREE.Vector3(f.x, f.y + 1.3, f.z); }
        else if (s.type === 'hill') { const f = C.sample(mAhead(rear, 18), undefined, {}); look = new THREE.Vector3(c.x * 0.6 + f.x * 0.4, Math.max(c.y + 1.3, f.y + 0.8), c.z * 0.6 + f.z * 0.4); }
        else look = new THREE.Vector3(c.x, c.y + 1.15, c.z);
        fov = s.fov; break;
      }
      case 'high3q': case 'breakaway': case 'hilltop': {
        // in front and above: high three-quarter (battles at the slow clock), the breakaway shot looking back down the
        // empty road behind the leader, or the top of the Hill looking down the climb
        const ids = groupOf(s), st = sim.stateAt(Math.max(0, b)); const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished);
        const c = center(ids, b); const front = live.length ? Math.max(...live.map((r) => r.m)) : c.m;
        const sm = C.sample(Math.min(mAhead(front, s.dist), 5110), undefined, tmpS);
        const lat = s.type === 'high3q' ? 7 : s.type === 'breakaway' ? 3 : 2.4, hgt = s.type === 'high3q' ? 5 : s.type === 'breakaway' ? 7.5 : 3.2;
        pos = new THREE.Vector3(sm.x + sm.rx * lat * s.side, sm.y + hgt, sm.z + sm.rz * lat * s.side);
        if (s.type === 'breakaway') { const bk = C.sample(mAhead(front, -7), undefined, {}); look = new THREE.Vector3(c.x * 0.55 + bk.x * 0.45, c.y + 0.5, c.z * 0.55 + bk.z * 0.45); }
        else look = new THREE.Vector3(c.x, c.y + 1.1, c.z);
        fov = s.fov; break;
      }
      case 'pack': {
        // high rear three-quarter keeping the group in frame (the wide of the field)
        const ids = groupOf(s), st = sim.stateAt(Math.max(0, b)); const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished);
        const c = center(ids, b); const rear = live.length ? Math.min(...live.map((r) => r.m)) : c.m;
        const sm = C.sample(mAhead(rear, -s.dist), undefined, tmpS);
        pos = new THREE.Vector3(sm.x + sm.rx * 6 * s.side, sm.y + 8, sm.z + sm.rz * 6 * s.side);
        look = new THREE.Vector3(c.x, c.y + 0.9, c.z); fov = s.fov; break;
      }
      case 'cutaway': {
        // locked-off camera across the path from the feature (crowd / lap board), the runners about to run through
        const f = s.feat; const sm = C.sample(f.m - 9, undefined, tmpS);
        const tgt = C.sample(f.m + 3, undefined, {});
        pos = new THREE.Vector3(sm.x - sm.rx * f.side * 5.5, sm.y + 1.5, sm.z - sm.rz * f.side * 5.5);
        look = new THREE.Vector3(tgt.x + tgt.rx * f.side * f.off, tgt.y + 1.2, tgt.z + tgt.rz * f.side * f.off); fov = 40; break;
      }
      case 'finishcam': {
        // head-on dolly: FIN_PARK m ahead of the leading contender, parking FIN_PARK m beyond the line, so the winner
        // stays big and runs at the camera through the line (no crowd or arch in the sightline)
        const st = sim.stateAt(Math.max(0, b));
        const lead = st.byId[s.winner] || st.byId[st.order[0]];
        const grp = st.order.map((id) => st.byId[id]).filter((x) => !x.finished && x.m > lead.m - 14);
        const c = center(grp.length ? grp.map((x) => x.id) : [lead.id], b);
        if (lead.finished) { c.set(lead.x, lead.y, lead.z); c.m = lead.mVis; }
        const camM = Math.min(mAhead(c.m, FIN_PARK), mAhead(5000, FIN_PARK));
        const sm = C.sample(camM, undefined, tmpS);
        pos = new THREE.Vector3(sm.x + sm.rx * 0.5, sm.y + 1.45, sm.z + sm.rz * 0.5);
        look = new THREE.Vector3(c.x, c.y + 1.15, c.z);
        fov = fovFor(FIN_PARK); s.smoothLook = true; break;
      }
      case 'placecam': {
        // battle for the places: head-on tracking until the subject is ~45 m out, then a side-on camera at the line
        // (finished runners walk on beyond the line, out of this frame)
        const st = sim.stateAt(Math.max(0, b));
        const sub = (s.ids || []).map((id) => st.byId[id]);
        const next = sub.find((x) => !x.finished) || null;
        const fresh = sub.filter((x) => x.finished).sort((a, c) => a.post - c.post)[0];
        const h = new THREE.Vector3(fin.tx, 0, fin.tz), r = new THREE.Vector3(-h.z, 0, h.x);
        if (!s.fside) s.fside = world.inPark(fin.x + r.x * 16, fin.z + r.z * 16) ? 1 : -1;
        const line = new THREE.Vector3(fin.x, fin.y + 1.0, fin.z);
        const sidePos = line.clone().addScaledVector(r, s.fside * 13).addScaledVector(h, -1.5).add(up.clone().multiplyScalar(2.6));
        let sideLook;
        if (fresh && (!next || next.distToFinish > 40)) sideLook = new THREE.Vector3(fresh.x, fresh.y + 1.1, fresh.z);
        else { const k = next ? Math.min(1, Math.max(0, next.distToFinish / 60)) : 0; sideLook = next ? line.clone().lerp(new THREE.Vector3(next.x, next.y + 1.0, next.z), Math.min(1, 0.3 + k)) : line; }
        if (next && next.distToFinish > 45) {
          const c = center([next.id], b);
          const ho = headOn(c, 24, 1.2);
          const k = sstep(70, 45, next.distToFinish);
          pos = ho.pos.lerp(sidePos, k); look = ho.look.lerp(sideLook, k);
          fov = fovFor(24) + (24 - fovFor(24)) * k;
        } else { pos = sidePos; look = sideLook; fov = 24; }
        s.smoothLook = true; break;
      }
      case 'celebrate': {
        const st = sim.stateAt(Math.max(0, b));
        const c = new THREE.Vector3(); for (const id of st.order) c.add(new THREE.Vector3(st.byId[id].x, st.byId[id].y, st.byId[id].z)); c.divideScalar(st.order.length);
        const fh = new THREE.Vector3(fin.tx, 0, fin.tz), fr = new THREE.Vector3(-fh.z, 0, fh.x);
        const a = Math.sin((b - s.a) * 0.08) * 0.5;
        pos = c.clone().addScaledVector(fh, 11 * Math.cos(a)).addScaledVector(fr, 11 * Math.sin(a)).add(up.clone().multiplyScalar(2.6));
        look = c.clone().add(up.clone().multiplyScalar(1.2)); fov = 44; break;
      }
      default: { // legacy 'drone' (kept for old shot lists)
        const { c, h, r } = smooth(groupOf(s), b, w * 1.3);
        pos = c.clone().addScaledVector(h, -(s.back || 40)).addScaledVector(r, (s.side || 1) * (s.back || 40) * 0.5).add(up.clone().multiplyScalar(s.height || 25));
        look = c.clone(); fov = s.fov || 40;
      }
    }
    return { pos, look, fov };
  }

  let backed = [];
  // camera for shot s at time b, lifted clear of the terrain (lift smoothed per shot)
  function solve(s, b, dt, cut) {
    s.backed = backed;
    const T = evaluate(s, b);
    const gy = C.heightAt(T.pos.x, T.pos.z) + 1.1; if (T.pos.y < gy) T.pos.y = gy;
    // low long-lens cameras: lift until the line of sight to the subject's feet clears the terrain (hill crests)
    if (s.type !== 'heli' && s.type !== 'celebrate') {
      let need = 0; const fy = T.look.y - 0.7;
      for (let k = 1; k < 20; k++) {
        const u = k / 20, x = T.pos.x + (T.look.x - T.pos.x) * u, z = T.pos.z + (T.look.z - T.pos.z) * u, y = T.pos.y + (fy - T.pos.y) * u;
        const def = C.heightAt(x, z) + 0.45 - y; if (def > 0) need = Math.max(need, def / (1 - u));
      }
      need = Math.min(need, 25);
      if (s._lift == null || cut) s._lift = need;
      s._lift += (need - s._lift) * (dt > 0 ? 1 - Math.exp(-4 * dt) : 0);
      if (s._lift < need * 0.6) s._lift = need * 0.6;
      T.pos.y += s._lift;
    }
    return T;
  }
  function update(b, dt, shots) {
    const s = shots.find((x) => b >= x.a && b < x.b) || shots.at(-1);
    let cut = false;
    if (s !== shot) {
      const hard = hardNext || !!s.hard;
      // glide between the two LIVE cameras (both keep tracking their subjects), or from a frozen pose after a pause
      glide = hard ? null : { prev: shot && !frozenFrom ? shot : null, from: { pos: camera.position.clone(), look: cam.look.clone(), fov: camera.fov }, t0: b };
      cut = hard; hardNext = false; shot = s; smoothLook = null; frozenFrom = false;
    }
    const T = solve(s, b, dt, cut);
    if (s.smoothLook) { if (!smoothLook) smoothLook = T.look.clone(); smoothLook.lerp(T.look, 1 - Math.exp(-3 * dt)); T.look.copy(smoothLook); }
    m4.lookAt(T.pos, T.look, up); q.setFromRotationMatrix(m4);
    let pos = T.pos, quat = q, fov = T.fov;
    if (glide) {
      const u = (b - glide.t0) / GLIDE_S;
      if (u >= 1 || u < 0) glide = null;
      else {
        const e = u * u * u * (u * (u * 6 - 15) + 10); // smootherstep
        const F = glide.prev ? solve(glide.prev, b, dt, false) : glide.from;
        const arc = Math.sin(Math.PI * e) * Math.min(6, F.pos.distanceTo(T.pos) * 0.06);
        pos = F.pos.clone().lerp(T.pos, e).add(up.clone().multiplyScalar(arc));
        // crane up and over any runner the move would brush past
        const st = sim.stateAt(Math.max(0, b)); let rise = 0;
        for (const id of st.order) { const r = st.byId[id]; const d = Math.hypot(r.x - pos.x, r.z - pos.z); if (d < 14) rise = Math.max(rise, (14 - d) * 0.45 * Math.sin(Math.PI * e)); }
        pos.y += rise;
        const el = Math.min(1, u * 1.6); const lk = F.look.clone().lerp(T.look, el * el * (3 - 2 * el));
        m4.lookAt(pos, lk, up); quat = new THREE.Quaternion().setFromRotationMatrix(m4);
        // interpolate the zoom in tan space (no pumping)
        const t0 = Math.tan(THREE.MathUtils.degToRad(F.fov) / 2), t1 = Math.tan(THREE.MathUtils.degToRad(T.fov) / 2);
        fov = THREE.MathUtils.radToDeg(2 * Math.atan(t0 + (t1 - t0) * e));
      }
    }
    cam.pos.copy(T.pos); cam.look.copy(T.look);
    camera.position.copy(pos); camera.quaternion.copy(quat);
    if (Math.abs(camera.fov - fov) > 0.001) { camera.fov = fov; camera.updateProjectionMatrix(); }
    return { shot: s, cut };
  }
  // hard=true: next frame snaps (seek); hard=false: glide from wherever the camera is now (e.g. after the market pause)
  function reset(hard = true) { shot = null; glide = null; hardNext = !!hard; smoothLook = null; frozenFrom = !hard; }
  function setBacked(ids) { backed = ids || []; }
  return { update, reset, evaluate, setBacked, get shot() { return shot; }, get gliding() { return !!glide; }, cam };
}

export function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
export const WIDE_SHOTS = new Set(['drone', 'heli']);
// tracking shots in which runners are framed big (name tags + PiP map apply)
export const TRACK_SHOTS = new Set(['side', 'headon', 'chase', 'shoulder', 'hill', 'hilltop', 'high3q', 'breakaway', 'pack', 'finishcam', 'placecam']);
