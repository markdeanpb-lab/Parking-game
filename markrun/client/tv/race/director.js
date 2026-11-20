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
// D. Camera families, balanced by race time: close tracking ~30% / SET CAMERAS ~30% (fixed broadcast positions around
//    the real course - finish gantry, avenue, far corner, Hill foot (low hero angle up the climb), Hill top (looking
//    down it), lake bend, cafe, bend towers, trackside towers - each pans and zooms with the runners through its stretch)
//    / high DRONE ~25% (aerial tracking that shows the course shape; tags keep runners readable) / chase & other ~15%.
//    The Hill gets its set camera on BOTH laps (lap 1 the foot, lap 2 a low side-on; whatever story is on the Hill, and a
//    gag on the Hill stays on it). One establishing WIDE per lap at a story break (the opening flyover when lap 1 has none).
// E. Gags (hijinks, v2 timing): the threat + the gag on the hijink's own close angle, a hard cut ~1 s before the pass to a
//    set camera / the drone / the other gag angle; a gag never takes the screen from a backed lead battle in the final km
//    unless it is happening to one of them. Head-on shots of two runners within ~1 s swing ~23 degrees off the line.
// F. Finish: head-on dolly; a close finish (photo finish, or under 1 s) cuts to the side-on LINE camera for the last ~3 s
//    (slow-mo, then the photo freeze takes over from the same side); after the replay <= 5 s of the place camera (only if
//    someone is about to cross), then the finish gantry pans on to each later finisher.
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

export function buildShotList({ plan, sim, backedIds = [], C, world, funfair, hijinks = [] }) {
  const out = [];
  let _signs = null; // gagSide(): sign boards to keep the hijink camera away from
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
    if (hijinks.some((h) => h.params?.passB != null && Math.abs(h.params.passB - e.broadcastS) < 0.5)) continue; // a live hijink is filming this pass
    ovs.push({ at: e.broadcastS, by, on, lead });
  }
  const hillWin = HILL_M.map((m) => [leaderAtB(m - 90), leaderAtB(m + 250)]);
  const divR = funfair ? plan.runners.filter((r) => r.diversions?.length) : [];
  const divWin = divR.flatMap((r) => r.diversions.map((d) => ({ id: r.id, a: raceToBroadcast(tm, timeAtDistance(r.progress, d.fromM)) - 0.5, b: raceToBroadcast(tm, timeAtDistance(r.progress, d.toM)) + 0.8 })));
  const lastSeen = {}; for (const r of plan.runners) lastSeen[r.id] = gunEnd;
  let hillShown = false; const hillDone = [false, false]; // the Hill gets its set camera on BOTH laps
  // the establishing wide: lap 1 once the field has settled, lap 2 just after the lap board
  // (a quiet 6.5 s: no gag or pass due; else the first moment the window offers)
  const estWin = [[380, 2300], [2600, 4000]].map(([m0, m1]) => {
    const a = leaderAtB(m0), e = leaderAtB(m1);
    for (const strict of [true, false]) for (let t = Math.max(a, gunEnd + 2); t < e; t += 0.25) {
      if (hijinks.some((h) => (h.telegraphAtBroadcastS ?? h.atBroadcastS - 1.2) < t + 6 && h.untilBroadcastS > t - 0.5)) continue;
      if (strict && (plan.events || []).some((ev) => ['overtake', 'lead_change'].includes(ev.type) && ev.broadcastS > t - 0.5 && ev.broadcastS < t + 6.5)) continue;
      return [t, t + 4];
    }
    return [a, e];
  });
  const estDone = [false, false];
  // a hijink may take the screen from a final-km lead battle only while no lead is changing hands (+-3 s)
  const leadB = (plan.events || []).filter((e) => e.type === 'lead_change').map((e) => e.broadcastS);
  const hjPrio = (h) => h.finale ? 1.5 : (leadB.some((x) => x > h.atBroadcastS - 3 && x < h.untilBroadcastS + 3) ? (h.prio ?? 2.8) : Math.min(1.9, h.prio ?? 2.8));
  function cands(t) {
    const st = S(t); const live = st.order.filter((id) => !st.byId[id].finished);
    if (!live.length) return [];
    const c = [];
    const L = st.byId[live[0]];
    const near = (core, within = 6) => { const ms = core.map((id) => st.byId[id].m); return [...core, ...live.filter((id) => !core.includes(id) && st.byId[id].m > Math.min(...ms) - within && st.byId[id].m < Math.max(...ms) + within)]; };
    // 2.8: a live hijink (hijinks/: the visible cause of a real slowdown / surge / pass / climb); cut in just before it starts
    // 2: lead battle in the final km
    const lb = live.length > 1 && L.m >= 4000 && gapS(st, live[0], live[1]) <= 2;
    if (lb) c.push({ prio: 2, key: `lb:${live[0]}|${live[1]}`, ids: near([live[0], live[1]]), kind: 'battle', reason: `lead battle in the final km (${gapS(st, live[0], live[1]).toFixed(1)} s)` });
    // in the final km a gag that isn't happening to the battling leaders never takes the screen from a backed lead battle
    const lbBacked = lb && (isB(live[0]) || isB(live[1]));
    for (const h of hijinks) if (t >= (h.telegraphAtBroadcastS ?? h.atBroadcastS - 1.2) && t < h.untilBroadcastS && !st.byId[h.who]?.finished) {
      const unrelated = lbBacked && ![live[0], live[1]].includes(h.who) && ![live[0], live[1]].includes(h.other);
      const hjPhase = t < (h.beatBroadcastS ?? h.untilBroadcastS) - 1 ? 'gag' : 'beat'; // the threat + the gag, then the pass
      c.push({ prio: unrelated ? 2.9 : hjPrio(h), key: `hj:${h.id}`, hjPhase, ids: [h.who, h.other].filter(Boolean), kind: 'hijink', angles: h.angles, lookAhead: h.lookAhead || 0, reason: `hijink: ${h.kind} (${short(h.who)})` });
    }
    // 3.6: one wide establishing shot each lap (outranks the backed battles once, while it's in its window) (the field and the shape of the course)
    for (const [i, [e0, e1]] of estWin.entries()) if (!estDone[i] && t >= e0 && t < e1) c.push({ prio: 3.6, key: `est:${i}`, ids: live, kind: 'establish', lap: i, reason: `establishing wide, lap ${i + 1}` });
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
      c.push({ prio: hillDone[i] ? 5 : 3.05, key: `hill:${i}`, ids: near([who]), kind: 'hill', lap: i, reason: `the Hill, lap ${i + 1}: ${short(who)}` });
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

  // ---- set cameras around the real course (lap-1 geometry metres; lap 2 passes them again) ----
  // each: where it stands, which stretch it covers (runner's geo metres) and how it frames: it pans and zooms with them
  const FIXED_DEF = [
    { name: 'gantry', m: 4905, cover: [4640, 4880], off: 7, h: 8, look: 'down the home straight from the finish gantry' },
    { name: 'avenue', m: 905, cover: [470, 890], off: 2.6, h: 2.6, look: 'down the tree avenue' },
    { name: 'farcorner', m: 1335, cover: [920, 1320], off: 10, h: 5, look: 'at the far corner' },
    { name: 'hillfoot', m: 1640, cover: [1600, 1960], off: 4.5, h: 0.7, hill: true, lap: 0, look: 'up the Hill from its foot (hero low angle)' },
    { name: 'hillside', m: 1800, cover: [1655, 1960], off: 14, h: 0.45, hill: true, lap: 1, low: true, look: 'side-on, low: the climb against the sky' },
    { name: 'hilltop', m: 2025, cover: [1560, 2005], off: 4, h: 3.2, hill: true, look: 'down the Hill from the top' },
    { name: 'lake', m: 2215, cover: [1900, 2200], off: 9, h: 4, look: 'across the lake bend' },
  ];
  // the café: the course point nearest a park café, if one is close to the course
  for (const cf of world.anchors?.cafes || []) {
    let bm = -1, bd = 1e9; for (let m = 0; m <= 2580; m += 10) { const p = C.baseXZ(m); const d = Math.hypot(p[0] - cf.x, p[1] - cf.z); if (d < bd) { bd = d; bm = m; } }
    if (bd < 60 && !FIXED_DEF.some((f) => Math.abs(f.m - bm) < 150)) { FIXED_DEF.push({ name: 'cafe', m: bm + 20, cover: [bm - 220, bm + 5], off: Math.min(14, bd), h: 3, look: 'from the café' }); break; }
  }
  // trackside towers on the outside of the sharp bends (runners run at them, then turn: little background whip)
  for (const c of world.anchors?.corners || []) {
    const g = C.geoOf(c.m); if (g > 2560 || FIXED_DEF.some((f) => Math.abs(f.m - g) < 160)) continue;
    FIXED_DEF.push({ name: `bend${Math.round(g / 100)}`, m: g + 25, cover: [g - 420, g + 15], off: 9, h: 5.5, side: c.d > 0 ? -1 : 1, look: `the bend at ${(g / 1000).toFixed(1)} km` });
  }
  // fill the remaining gaps (lap-1 geometry, so lap 2 too) with trackside towers every ~250 m
  for (let g = 120; g < 2540; g += 10) {
    if (FIXED_DEF.some((f) => g >= f.cover[0] && g <= f.cover[1])) continue;
    let e = g; while (e < 2540 && !FIXED_DEF.some((f) => e >= f.cover[0] && e <= f.cover[1]) && e - g < 380) e += 10;
    if (e - g >= 100) FIXED_DEF.push({ name: `track${Math.round(e / 100)}`, m: e + 18, cover: [Math.min(g - 10, e - 420), e], off: 8, h: 4.5, look: `trackside at ${(e / 1000).toFixed(1)} km` });
    g = e;
  }
  const FIXED = FIXED_DEF.map((f) => {
    const q = C.sample(f.m);
    let best = null;
    for (const sd of f.side ? [f.side, -f.side] : [1, -1]) for (const o of [f.off, f.off + 3, f.off + 6, Math.max(2.4, f.off - 2)]) {
      const x = q.x + q.rx * o * sd, z = q.z + q.rz * o * sd;
      let cost = 0;
      if (world.inPark && !world.inPark(x, z)) cost += 5;
      if (world.blocked && world.blocked(x, z, 1)) cost += 8;
      if (world.anchors?.clearOf && o > PATH_W_HALF + 1.6 && !world.anchors.clearOf(x, z, 1.2)) cost += 3;
      if (f.side && sd !== f.side) cost += 1;
      if (f.low) cost += Math.max(0, C.heightAt(x, z) - q.y) * 0.6; // low side-on: the downhill side, the climb against the sky
      if (!best || cost < best.cost) best = { x, z, cost };
    }
    return { ...f, x: best.x, z: best.z, y: C.heightAt(best.x, best.z) + f.h };
  });
  // a set camera that has `ids` in its stretch from t for at least `need` s: [cam, until] (else null)
  function fixedFor(ids, t, need = 3.5, hillOnly = false, lap = null, only = null) {
    const front = (st) => { const l = (ids || []).map((id) => st.byId[id]).filter((r) => r && !r.finished && !(r.div > 0.05)); return l.length ? l.reduce((a, r) => (r.m > a.m ? r : a)) : null; };
    let best = null;
    for (const f of FIXED) {
      if (hillOnly && (!f.hill || (lap != null && f.lap !== lap % 2))) continue;
      if (only && f !== only) continue;
      const r0 = front(S(t)); if (!r0) return null;
      const g0 = C.geoOf(r0.m); if (g0 < f.cover[0] - 25 || g0 > f.cover[1]) continue;
      let u = t; for (; u < t + 14; u += 0.25) { const r = front(S(u)); if (!r) break; const g = C.geoOf(r.m); if (g > f.cover[1] || g < f.cover[0] - 30) break; }
      if (u - t >= need && (!best || u - t > best[1] - t)) best = [f, Math.min(u, t + 10)];
    }
    return best;
  }

  // ---- B: angle grammar ----
  // camera families and the target share of race time: close tracking / set cameras / high drone / chase & other
  const FAMILY = { headon: 'close', side: 'close', high3q: 'close', gag3q: 'close', gagside: 'close', gagrear: 'close', breakaway: 'close', hilltop: 'close', hillside: 'close',
    fixed: 'fixed', cutaway: 'fixed', drone: 'drone', pack: 'drone', wide: 'drone', chase: 'other', shoulder: 'other', hill: 'other' };
  const TARGET = { close: 0.3, fixed: 0.3, drone: 0.25, other: 0.15 };
  const famTime = { close: 6, fixed: 6, drone: 5, other: 3 }; // a prior (20 s at the target shares) so early shots don't swing it
  let hjN = 0;
  const deficit = (type) => { const f = FAMILY[type] || 'other'; const tot = Object.values(famTime).reduce((a, x) => a + x, 0) + 1e-6; return TARGET[f] - famTime[f] / tot; };
  const FRONT = new Set(['headon', 'high3q', 'breakaway', 'hilltop', 'gag3q']), REAR = new Set(['chase', 'shoulder', 'pack', 'hill', 'gagrear']);
  const used = {};
  function angleFor(c, prevType, r) {
    const slow = r <= 6;
    let list;
    switch (c.kind) {
      case 'overtake': list = c.phase === 'pre' ? ['chase', 'shoulder'] : slow ? ['headon', 'high3q'] : ['headon', 'chase']; { const fx = c.phase === 'post' && fixedFor(c.ids, c.t ?? 0, 3); if (fx) { list = ['fixed', ...list]; c._fixed = fx; } } break;
      case 'battle': { const st = S(c.t ?? 0), ms = (c.ids || []).map((id) => st.byId[id]?.m ?? 0), sp = Math.max(...ms) - Math.min(...ms); list = slow ? ['side', 'headon', 'high3q', 'chase'] : sp > 9 ? ['headon', 'chase'] : ['headon', 'chase', 'pack']; break; }
      case 'hill': list = c.lap % 2 ? ['hillside', 'hilltop', 'hill'] : ['hill', 'hillside', 'hilltop']; break;
      case 'establish': list = ['wide']; break;
      case 'break': list = slow ? ['breakaway', 'high3q', 'headon'] : ['breakaway', 'headon', 'chase']; break;
      case 'checkin': list = ['shoulder', 'chase']; break;
      case 'fair': list = ['side']; break;
      case 'hijink': list = c.angles?.length ? c.angles : ['gag3q', 'gagside']; break;
      case 'solo': list = slow ? ['headon', 'side', 'chase'] : ['headon', 'chase']; break;
      default: list = (c.ids?.length || 0) < 2 || (c.spread ?? 0) > 9 ? (slow ? ['headon', 'side', 'chase'] : ['headon', 'chase']) : slow ? ['pack', 'high3q', 'headon', 'side'] : ['pack', 'chase', 'headon'];
    }
    // set cameras and the high drone join every story they can show (not the scripted chase -> front of a pass)
    if (c.kind !== 'overtake' && c.kind !== 'fair' && c.kind !== 'checkin' && c.kind !== 'establish') {
      const onHill = (() => { const r = S(c.t ?? 0).byId[c.ids?.[0]]; const g = r ? C.geoOf(r.m) : 0; return g > 1600 && g < 1975; })();
      // the Hill story uses its lap's own set camera (lap 1 the foot, lap 2 the low side-on); a gag on the Hill any Hill camera
      const fx = c.kind === 'hill' ? fixedFor(c.ids, c.t ?? 0, 2.8, true, c.lap) : c.kind === 'hijink' && onHill ? (fixedFor(c.ids, c.t ?? 0, 2.8, true, S(c.t ?? 0).leader.m > 2500 ? 1 : 0) || fixedFor(c.ids, c.t ?? 0, 2.8, true)) : fixedFor(c.ids, c.t ?? 0, c.kind === 'hijink' ? 3 : 3.5);
      if (fx) { list = c.kind === 'hill' || (c.kind === 'hijink' && fx[0].hill) ? ['fixed', ...list] : [...list, 'fixed']; c._fixed = fx; }
      if (c.kind === 'hijink' && onHill) list = [...list.filter((x) => x === 'fixed'), 'hillside', ...list.filter((x) => x !== 'fixed')]; // else low side-on: the slope reads
      if (c.kind !== 'hill' && c.kind !== 'hijink') list = [...list, 'drone'];
    }
    // the Hill not yet shown on this lap and these runners are on it: whatever the story, the Hill's set camera has it
    {
      const r0 = S(c.t ?? 0).byId[c.ids?.[0]], g = r0 ? C.geoOf(r0.m) : 0, lapNow = r0 && r0.m > 2500 ? 1 : 0;
      if (c.kind !== 'hijink' && c.kind !== 'fair' && g > 1600 && g < 1960 && !hillDone[lapNow] && prevType !== 'fixed') {
        const fx = fixedFor(c.ids, c.t ?? 0, 2.8, true, lapNow) || fixedFor(c.ids, c.t ?? 0, 2.8, true);
        if (fx) { c._fixed = fx; c._hill = true; return 'fixed'; }
      }
    }
    // never the same angle twice in a row; among the rest, the grammar's order, nudged towards the camera family
    // furthest below its share of the race (close ~30%, set cameras ~30%, drone ~25%, chase/other ~15%)
    const ok = list.filter((x) => x !== prevType);
    if (!ok.length) return list.find((x) => x !== prevType) || (prevType === 'headon' ? 'chase' : 'headon');
    if (c.kind === 'overtake' && c.phase === 'post' && ok.includes('fixed') && deficit('fixed') > deficit('close') - 0.05) return 'fixed'; // a set camera ahead of the pass: the passer comes at us
    if (c.kind === 'hill' || c.kind === 'establish') return ok[0]; // the Hill's set camera first
    if (c.kind === 'overtake' || c.kind === 'fair') return ok.filter((x) => x !== 'fixed')[0] ?? ok[0];
    // a gag on the Hill is shot from the Hill's set camera; elsewhere a set camera that's close enough, else the gag angle
    if (c.kind === 'hijink') {
      // a gag in three beats: the threat (telegraph) on a set camera when one is near enough (else a two-shot angle),
      // the gag itself on the hijink's own close angle, the pass / consequence on another angle (a set camera if near)
      const A = c.angles?.length ? c.angles : ['gag3q', 'gagside'];
      const pick = (xs) => xs.find((x) => x && x !== prevType && (x !== 'fixed' || ok.includes('fixed')));
      const fxOK = ok.includes('fixed') && c._fixed && (c._fixed[0].hill || fixedDist(c._fixed[0], c.ids, (c.t ?? 0) + 1.5) < 220);
      const hillS = list.includes('hillside') ? ['hillside'] : [];
      if (c.hjPhase === 'gag' && !c.again) return pick([A[0], A[1], 'gagside', 'gag3q']);
      if (fxOK) return 'fixed';
      // the pass (or a long gag's second angle): the high drone over the two of them when the set cameras can't see it
      const two = (c.ids || []).length > 1 && deficit('drone') > deficit('close');
      return pick([...hillS, ...(two ? ['drone'] : []), A[1], 'gagside', 'gag3q', A[0]]);
    }
    return ok.map((x, i) => [x, i * 0.3 + (used[x] || 0) * 0.2 - deficit(x) * 10]).sort((p, q) => p[1] - q[1])[0][0];
  }

  function fixedDist(f, ids, t) { const st = S(t ?? 0); const r = (ids || []).map((id) => st.byId[id]).find(Boolean); return r ? Math.hypot(r.x - f.x, r.z - f.z) : 1e9; }

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
    const cc = { ...c, t: a };
    const type = extra.type || angleFor(cc, prevT, r);
    if (out.at(-1) && out.at(-1).a >= gunEnd - 0.01) { const p0 = out.at(-1); famTime[FAMILY[p0.type] || 'other'] += Math.max(0, a - p0.a); }
    used[type] = (used[type] || 0) + 1;
    const same = out.at(-1)?.key === c.key;
    if (!same) keyStart = a;
    // glide only to reframe the same subject (never through it: front <-> rear is a cut); hard cuts on action
    const pt = out.at(-1)?.type;
    const glide = same && !extra.hard && !(FRONT.has(pt) && REAR.has(type)) && !(REAR.has(pt) && FRONT.has(type)) && extra.type !== 'cutaway';
    const { hard: _h, ...rest } = extra;
    const shot = { type, a, b: a + 4, ids: c.ids, key: c.key, kind: c.kind, prio: c.prio, phase: c.phase, hjPhase: c.hjPhase, lap: c.lap, reason: why, fair: c.kind === 'fair', ...(c.lookAhead ? { lookAhead: c.lookAhead } : {}), ...rest, hard: !glide };
    if (type === 'fixed' && cc._fixed) { shot.cam = cc._fixed[0]; shot.until = cc._fixed[1]; shot.reason += ` [set cam: ${shot.cam.look}]`; shot.hard = true; if (shot.cam.hill) hillDone[S(a).byId[c.ids?.[0]]?.m > 2500 ? 1 : 0] = true; }
    if (c.kind === 'establish') { estDone[c.lap] = true; shot.until = a + 5.5; shot.hard = true; }
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
    let best = cs[0]; if (!best) continue;
    // the lap's establishing wide takes the first natural story break in its window
    const est = cs.find((c) => c.kind === 'establish'); if (est && cur && cur.kind !== 'hijink' && best.kind !== 'hijink') best = est;
    if (!cur || cur.type === 'cutaway') { if (!cur || t >= cur.b) { if (cur) cur.b = t; push(best, t, best.reason); if (best.kind === 'hill') { hillShown = true; hillDone[best.lap] = true; } } continue; }
    const len = t - cur.a;
    const holdCheck = cur.kind === 'checkin' && len < 4;
    const holdHill = cur.kind === 'hill' && len < 5;
    const live = cs.find((c) => c.key === cur.key);
    const still = live || (holdCheck || holdHill ? cur : null);
    if (bFin - t < 3) continue; // no stub shot before the finish camera
    let next = null, why = '', hard = false;
    // only a lead change or a backed pass may interrupt before 4 s (never before 3 s); the Hill runs its course unless a lead changes
    const canInterrupt = (c) => c.key !== cur.key && c.prio < cur.prio - 0.5 && (holdHill ? c.kind === 'overtake' && c.prio <= 3 : len >= (c.kind === 'overtake' ? 3 : 4)) && !(holdCheck && c.kind !== 'overtake');
    // a live hijink is always a motivated cut (after >= 2.5 s; >= 3 s off a pass), never over another hijink (or a lead changing hands)
    const hjCut = (c) => c.kind === 'hijink' && c.key !== cur.key && cur.kind !== 'hijink' && c.prio < cur.prio && len >= (cur.kind === 'overtake' || cur.kind === 'establish' ? 3.5 : 2.5);
    const intr = cs.find((c) => hjCut(c) || canInterrupt(c));
    if (est && !['hijink', 'hill'].includes(cur.kind) && !(cur.kind === 'overtake' && cur.phase !== 'post') && len >= 3.5 && !holdHill && !cs.some((c) => (c.kind === 'hijink' || (c.kind === 'overtake' && c.key !== cur.key)) && c.prio < 3.6)) { next = est; why = `${est.reason}: a story break`; hard = true; }
    else if (live && cur.kind === 'hijink' && (live.hjPhase !== cur.hjPhase || (len >= 7 && (hijinks.find((h) => `hj:${h.id}` === cur.key)?.untilBroadcastS ?? 0) - t > 3)) && len >= 2.4) {
      next = live.hjPhase === cur.hjPhase ? { ...live, again: true } : live; why = `${live.reason}: ${live.hjPhase === 'tele' ? 'the threat' : live.hjPhase === 'gag' ? 'the gag' : 'the pass'}${live.hjPhase === cur.hjPhase ? ' (new angle)' : ''}`; hard = true;
    }
    else if (still && cur.kind === 'overtake' && still.phase !== cur.phase && len >= 3) { next = still; why = `the pass: ${still.reason.split(': ')[1]} - cut to the front`; hard = true; }
    else if (intr) { next = intr; why = intr.reason; hard = true; }
    else if (!still && (len >= minL || (cur.kind === 'hijink' && len >= 4))) { next = best; why = `${best.reason} (previous story over)`; }
    else if (cur.kind === 'checkin' && len >= 4) { next = cs.find((c) => c.key !== cur.key && c.kind !== 'checkin') || best; why = `back to the action: ${next.reason}`; hard = true; }
    else if (cur.until != null && t >= cur.until - 0.01 && len >= 2.5 && !holdHill && !(cur.kind === 'hijink' && live && len < 3)) { // the runners leave the set camera's stretch
      next = (best.kind === 'establish' ? null : live) || best; why = next === live ? `out of the ${cur.cam?.name} camera's stretch: new angle on the same story` : `${best.reason} (previous story over)`;
    }
    else if (len >= maxL && !(cur.kind === 'hijink' && live)) { // a live gag holds its angle to the end
      const alt = cs.find((c) => c.key !== cur.key && c.kind !== 'checkin');
      if (t - keyStart > 26 && alt) { next = alt; why = `fresh subject after ${Math.round(t - keyStart)} s: ${alt.reason}`; hard = true; }
      else { next = (best.kind === 'establish' ? null : live) || best; why = next === live ? `${maxL} s max: new angle on the same story` : `${best.reason} (previous story over)`; }
    } else if (cur.prio >= 6 && len >= 5) {
      // motivated cutaway: the subject is about to reach a crowd / the lap board (at most one per 40 s)
      const f = cutawayAt(t, cur.ids?.[0]);
      if (f) { cur.b = t; lastCut = t; push({ ...cur, key: `cut:${t}` }, t, `cutaway: ${f.kind} as ${short(cur.ids[0])} arrives`, { type: 'cutaway', feat: f, b: t + 2.5, hard: true, ids: cur.ids }); out.at(-1).b = t + 2.5; prevT = 'cutaway'; continue; }
    }
    if (next) {
      // a gag on the Hill while the Hill's set camera is up: keep rolling on that camera (it is the best seat for it)
      const fxh = next.kind === 'hijink' && cur.type === 'fixed' && cur.cam?.hill && fixedFor(next.ids, t, 2.5, true, null, cur.cam);
      if (fxh) {
        const fx = fxh; cur.key = next.key; cur.kind = 'hijink'; cur.hjPhase = next.hjPhase; cur.prio = next.prio; cur.ids = next.ids; cur.until = fx[1]; cur.reason += ` -> ${next.reason} (same camera)`; continue;
      }
      // the same runners in a new story (e.g. a battle that becomes 'the pack'): keep rolling, just relabel
      if (next.key !== cur.key && sameSet(next.ids, cur.ids) && next.kind !== 'overtake' && cur.kind !== 'overtake' && cur.kind !== 'checkin' && len < maxL && next.kind !== 'hill' && next.kind !== 'hijink' && cur.kind !== 'hijink' && next.kind !== 'establish') {
        cur.key = next.key; cur.kind = next.kind; cur.prio = next.prio; cur.reason += ` -> ${next.reason}`; continue;
      }
      cur.b = t; const sh = push(next, t, why, { hard });
      if (next.kind === 'hill') { hillShown = true; hillDone[next.lap] = true; }
      if (sh.cam?.hill) hillDone[S(t).leader.m > 2500 ? 1 : 0] = true;
    }
  }
  if (cur) cur.b = bFin;
  // the finish: the head-on camera brings them up the straight; a close finish (a dead heat on the clock, or under ~1 s)
  // cuts to the side-on LINE camera for the last ~3 s, so the slow-mo and the photo freeze read who got there first
  const tight = sim.photoFinish || margin < 1;
  const bLine = tight ? Math.max(bFin + 2.5, firstFin - 3) : null;
  out.push({ type: 'finishcam', a: bFin, b: tight ? bLine : firstFin + 1.15, hard: true, winner: winnerId, reason: 'the finish: the winner\'s last metres', ids: [winnerId], key: 'finish' });
  if (tight) out.push({ type: 'linecam', a: bLine, b: firstFin + 1.15, hard: true, winner: winnerId, ids: sim.finishOrder.slice(0, 2), key: 'finish', reason: `close finish (${margin.toFixed(1)} s): side-on on the line` });
  {
    // after the winner's replay: ~5 s of the place camera on the next finishers, then the gantry camera (high, beyond
    // the line, looking back down the straight) brings the rest home, then the celebrations
    const f = world.anchors.finish, gm = Math.min(5110, 5000 + 22), gq = C.sample(gm);
    const gside = world.inPark?.(gq.x + gq.rx * 9, gq.z + gq.rz * 9) === false ? -1 : 1;
    const gantry = { name: 'gantry', x: gq.x + gq.rx * 9 * gside, z: gq.z + gq.rz * 9 * gside, y: (gq.y ?? f.y) + 7, look: 'from the finish gantry, back down the straight' };
    let a = firstFin + 1.15;
    const rest = sim.finishOrder.slice(1).filter((id) => sim.byId[id].finishB > a - 0.2); // (a dead-heat runner-up is already over)
    const grps = [];
    for (let i = 0; i < rest.length;) {
      const grp = [rest[i]]; let fb = sim.byId[rest[i]].finishB; i++;
      while (i < rest.length && sim.byId[rest[i]].finishB - fb < 3) { grp.push(rest[i]); fb = sim.byId[rest[i]].finishB; i++; }
      grps.push({ grp, fb });
    }
    let placeDone = false;
    for (const [gi, { grp, fb }] of grps.entries()) {
      const e = gi < grps.length - 1 ? Math.max(fb + 1.6, a + 4) : lastFin + 2.5;
      if (e <= a + 0.5) continue;
      // the place camera only while someone is about to cross (<= 5 s); the gantry for the long run-ins
      if (!placeDone && fb - a < 4.2) { const pe = Math.min(e, a + 5); out.push({ type: 'placecam', a, b: pe, hard: true, ids: grp, key: `place:${grp}`, reason: `finishers: ${grp.join(' & ')}` }); placeDone = true; if (pe < e) out.push({ type: 'fixed', a: pe, b: e, hard: true, cam: gantry, ids: grp, groups: [grp], key: `place:${grp}`, reason: `finishers: ${grp.join(' & ')} [set cam: ${gantry.look}]` }); }
      else if (out.at(-1)?.cam === gantry) { const p = out.at(-1); p.b = e; p.groups = [...p.groups, grp]; p.ids = [...p.ids, ...grp]; p.reason += ` + ${grp.join(' & ')}`; } // one gantry shot pans on to the next
      else out.push({ type: 'fixed', a, b: e, hard: true, cam: gantry, ids: grp, groups: [grp], key: `place:${grp}`, reason: `finishers: ${grp.join(' & ')} [set cam: ${gantry.look}]` });
      a = e;
    }
    if (!grps.length) out.push({ type: 'placecam', a, b: lastFin + 2.5, hard: true, ids: [winnerId], key: 'place', reason: 'the winner over the line' });
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
    if (['heli', 'startgo', 'finishcam', 'linecam', 'placecam', 'celebrate', 'fixed'].includes(s.type)) continue;
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
        s.lat = chooseLat(s, s.ids || ids);
        // two runners within ~1 s: swing the camera 20-30 degrees off the line so the trailing one isn't hidden
        if (!s.start && (s.ids || ids).length > 1 && closeSec(s, s.ids || ids) <= 1.1) { s.dist = Math.min(s.dist, 22); s.lat = angledLat(s, s.ids || ids); s.angled = true; }
        s.fov = THREE.MathUtils.clamp(fovFor(Math.hypot(s.dist, s.lat), TARGET_FRAC - 0.02), 4, 30);
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
      case 'hillside': {
        // low and side-on, on the downhill side: the climb runs diagonally across the frame against the sky
        s.dist = 13; s.fov = THREE.MathUtils.clamp(Math.max(fovFor(s.dist, 0.36), deg(2 * Math.atan((spread + 6) / (2 * ASPECT * s.dist)))), 10, 44);
        const st = S((s.a + s.b) / 2), me = ids.map((id) => st.byId[id]).find(Boolean);
        if (me) { const hs = (sg) => C.heightAt(me.x - me.tz * sg * 13, me.z + me.tx * sg * 13) + (world.inPark?.(me.x - me.tz * sg * 13, me.z + me.tx * sg * 13) === false ? 50 : 0) + (world.blocked?.(me.x - me.tz * sg * 13, me.z + me.tx * sg * 13, 1) ? 50 : 0); s.side = hs(1) <= hs(-1) ? 1 : -1; }
        break;
      }
      case 'wide': {
        // the establishing wide: high, far, the whole field and the shape of the course around it
        const slant = Math.hypot(60, 36, 62);
        s.fov = THREE.MathUtils.clamp(deg(2 * Math.atan((Math.min(spread, 260) * 0.7 + 45) / (2 * ASPECT * slant))), 24, 55);
        break;
      }
      case 'high3q': { s.dist = 12; s.fov = THREE.MathUtils.clamp(Math.min(fovFor(15 + spread * 0.3, 0.3), Math.max(fovFor(15, 0.4), deg(2 * Math.atan((spread + 5) / (2 * ASPECT * 15))))), 8, 40); break; }
      case 'pack': {
        // high rear camera: the vertical angle between the rear and front runners must fit too (else the near one drops out)
        s.dist = 18; const hz = Math.hypot(18, 6), hgt = 8;
        const span = deg(Math.atan(hgt / hz) - Math.atan(hgt / (hz + spread))) + deg(2 * Math.atan(2.8 / hz));
        s.fov = THREE.MathUtils.clamp(Math.max(fovFor(21 + spread * 0.5, 0.3), span * 1.1, deg(2 * Math.atan((spread * 0.35 + 6) / (2 * (21 + spread * 0.5))))), 10, 40);
        break;
      }
      case 'breakaway': { s.dist = 20; s.fov = 24; break; }
      case 'drone': {
        // high aerial tracking behind-and-above the group: the course shape around them, runners still readable (tags)
        s.dist = 42; const slant = Math.hypot(42, 18, 30);
        s.fov = THREE.MathUtils.clamp(Math.max(fovFor(slant, 0.17), deg(2 * Math.atan((spread * 0.55 + 14) / (2 * ASPECT * slant))), s.rate > 6 ? 22 : 0), 12, 40);
        break;
      }
      // live hijinks: close on the gag's runner(s), front three-quarter / side / rear three-quarter
      case 'gag3q': case 'gagside': case 'gagrear': {
        const two = (s.ids || []).length > 1;
        s.dist = s.type === 'gagside' ? 11 : 10;
        s.fov = THREE.MathUtils.clamp(Math.max(fovFor(s.dist, 0.4), two ? deg(2 * Math.atan((spread + 5) / (2 * ASPECT * s.dist))) : 0), 8, 40);
        s.side = gagSide(s);
        break;
      }
      case 'hilltop': { s.dist = THREE.MathUtils.clamp(Math.min(24, aheadGap(s, ids) - 5), 12, 24); s.fov = THREE.MathUtils.clamp(fovFor(s.dist, 0.36), 8, 30); break; }
      default: break;
    }
    // no camera standing in (or looking across) the lake / a closed feature: the water plane would swallow their legs
    if (['high3q', 'side', 'hilltop', 'breakaway', 'chase', 'shoulder', 'hill'].includes(s.type) && !s.fair) {
      const wc = (sg) => wetCost(s, ids, sg); const c0 = wc(s.side), c1 = wc(-s.side);
      if (c1 < c0) s.side = -s.side;
    }
  }
  out.fixedCams = FIXED; out.fixedFor = fixedFor; // (debug / stats)
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
  // the camera's ground position for a lateral / high shot (course-metre approximation of the runtime formulas)
  function wetCost(s, ids, sg) {
    let c = 0;
    for (let k = 0; k <= 6; k++) {
      const st = S(s.a + ((s.b - s.a) * k) / 6); const l = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished); if (!l.length) continue;
      const x0 = l.reduce((a, r) => a + r.x, 0) / l.length, z0 = l.reduce((a, r) => a + r.z, 0) / l.length, front = Math.max(...l.map((r) => r.m));
      let px, pz;
      if (s.type === 'side') { const r = l[0]; px = x0 - r.tz * sg * s.dist; pz = z0 + r.tx * sg * s.dist; }
      else if (['chase', 'shoulder', 'hill'].includes(s.type)) { const rear = Math.min(...l.map((r) => r.m)); const q = C.sample(Math.max(0, rear - (s.dist || 13))); const lat = s.type === 'shoulder' ? 1.1 : s.type === 'hill' ? 2.2 : 3.4; px = q.x + q.rx * lat * sg; pz = q.z + q.rz * lat * sg; }
      else { const q = C.sample(Math.min(5110, front + (s.dist || 12))); const lat = s.type === 'high3q' ? 7 : s.type === 'breakaway' ? 3 : 2.4; px = q.x + q.rx * lat * sg; pz = q.z + q.rz * lat * sg; }
      if (world.inPark && !world.inPark(px, pz)) c += 2;
      for (let u = 0; u <= 0.85; u += 0.17) if (world.blocked?.(px + (x0 - px) * u, pz + (z0 - pz) * u, 0.4)) c += u === 0 ? 3 : 1;
    }
    return c;
  }
  // the smallest time gap (s) between consecutive subjects over the shot
  function closeSec(s, ids) {
    let g = 99;
    for (let k = 0; k <= 6; k++) {
      const st = S(s.a + ((s.b - s.a) * k) / 6); const l = ids.filter((id) => st.byId[id] && !st.byId[id].finished).sort((x, y) => st.byId[y].m - st.byId[x].m);
      for (let i = 1; i < l.length; i++) g = Math.min(g, Math.max(0, gapS(st, l[i - 1], l[i])));
    }
    return g;
  }
  // a head-on lateral offset of ~23 degrees: the side that separates the two nearest runners most on screen, out of
  // the lake / features and inside the park
  function angledLat(s, ids) {
    const L = s.dist * Math.tan((23 * Math.PI) / 180); // (<= ~9 m off the path: inside the spectators' line)
    let best = null;
    for (const sg of [1, -1]) {
      let sep = 1e9, cost = 0;
      for (let k = 0; k <= 4; k++) {
        const st = S(s.a + ((s.b - s.a) * k) / 4); const l = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished).sort((x, y) => y.m - x.m); if (l.length < 2) continue;
        const q = C.sample(Math.min(5110, l[0].m + s.dist)); const px = q.x + q.rx * L * sg, pz = q.z + q.rz * L * sg;
        const ang = (r) => Math.atan2(r.z - pz, r.x - px);
        let d = Math.abs(ang(l[0]) - ang(l[1])); if (d > Math.PI) d = 2 * Math.PI - d; sep = Math.min(sep, d);
        if (world.inPark && !world.inPark(px, pz)) cost += 3;
        if (world.blocked?.(px, pz, 1)) cost += 4;
        if (world.anchors?.clearOf && !world.anchors.clearOf(px, pz, 0.8)) cost += 0.5;
      }
      const score = cost - sep * 20;
      if (!best || score < best.score) best = { sg, score };
    }
    return L * best.sg;
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
  function signsXZ() { return _signs ||= [1000, 2000, 3000, 4000].map((m) => { const q = C.sample(C.geoOf(m)); return [q.x - q.rx * (PATH_W_HALF + 2.4), q.z - q.rz * (PATH_W_HALF + 2.4)]; })
    .concat([world.anchors?.hillSign, world.anchors?.lapBoard].filter(Boolean).map((g) => [g.position.x, g.position.z]))
      // the chevron A-frames on the outside of each bend (world.js)
      .concat((world.anchors?.corners || []).flatMap((c) => [-10, 0, 10].map((k) => { const q = C.sample(c.m + k), sd = c.d > 0 ? -1 : 1, o = PATH_W_HALF + 1.6; return [q.x + q.rx * o * sd, q.z + q.rz * o * sd, 12]; }))); } // (low A-frames: the sightline corridor can hide them)
  // the side for a close hijink camera: not inside a tree / crowd, not on the uphill bank, no other runner in between
  function gagSide(s) {
    const along = s.type === 'gag3q' ? 0.8 : s.type === 'gagrear' ? -0.8 : 0.08, across = s.type === 'gagside' ? 1 : 0.6, d = s.dist;
    const cost = (sg) => {
      let c = 0;
      const n = Math.max(6, Math.ceil((s.b - s.a) / 0.2)); // fine steps: at the fast clock he covers ~10 m per step
      for (let k = 0; k <= n; k++) {
        const st = S(s.a + ((s.b - s.a) * k) / n), me = st.byId[s.ids[0]]; if (!me || me.finished) continue;
        const x = me.x + me.tx * d * along - me.tz * sg * d * across, z = me.z + me.tz * d * along + me.tx * sg * d * across;
        if (world.anchors?.clearOf && !world.anchors.clearOf(x, z, 0.6)) c += 3; // a tree / stall (the path's own reservation is ~5 m wide)
        for (const q of signsXZ()) { // km boards / the Hill / the lap board: not beside the lens, not in the sightline
          const vx = me.x - x, vz = me.z - z, L2 = vx * vx + vz * vz || 1, u = Math.max(0, Math.min(1, ((q[0] - x) * vx + (q[1] - z) * vz) / L2));
          if ((x + vx * u - q[0]) ** 2 + (z + vz * u - q[1]) ** 2 < 9 || (q[0] - x) ** 2 + (q[1] - z) ** 2 < 36) c += q[2] || 60; // a board can't be hidden: never film through one
        }
        if (world.inPark && !world.inPark(x, z)) c += 2;
        if (world.blocked?.(x, z, 0.5)) c += 4; // not over the lake
        const g = C.geoOf(me.m); if ((world.anchors?.crowdZones || []).some((q) => q.side === sg && g > q.m0 - 12 && g < q.m1 + 12)) c += 3; // not among the spectators
        c += Math.max(0, C.heightAt(x, z) - me.y - 0.5) * 1.5;
        for (const id of st.order) { if (s.ids.includes(id)) continue; const o = st.byId[id]; if (o.finished) continue; const al = (o.x - me.x) * me.tx + (o.z - me.z) * me.tz, la = ((o.x - me.x) * -me.tz + (o.z - me.z) * me.tx) * sg; if (Math.abs(al - d * along * 0.5) < Math.max(2.5, Math.abs(d * along) * 0.6) && la > 0.4) c += 6 / n; }
      }
      return c;
    };
    const cp = cost(1), cm = cost(-1);
    return cp === cm ? (s.side || 1) : cp < cm ? 1 : -1;
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
  let shot = null, glide = null, hardNext = true, smoothLook = null, frozenFrom = false, fovS = null;
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
      case 'gag3q': case 'gagside': case 'gagrear': {
        const { c, h, r } = smooth(s.ids, b, Math.min(w, 2.4 / Math.max(1, s.rate || 1))); const d = s.dist; // heading over ~+-3 race s: stays square to him through bends
        const along = s.type === 'gag3q' ? 0.8 : s.type === 'gagrear' ? -0.8 : 0.08, across = s.type === 'gagside' ? 1 : 0.6;
        pos = c.clone().addScaledVector(h, d * along).addScaledVector(r, s.side * d * across).add(up.clone().multiplyScalar(1.45 + d * 0.04));
        look = c.clone().addScaledVector(h, s.lookAhead || 0).add(up.clone().multiplyScalar(1.15)); fov = s.fov; break;
      }
      case 'hillside': {
        // low side-on on the climb: the camera just above the grass, looking slightly up so the slope reads against the sky
        const { c, h, r } = smooth(groupOf(s), b, Math.min(w, 1.2));
        pos = c.clone().addScaledVector(r, s.side * s.dist).addScaledVector(h, s.dist * 0.08); pos.y = c.y + 0.35;
        look = c.clone().addScaledVector(h, 1.2).add(up.clone().multiplyScalar(1.55)); fov = s.fov; break;
      }
      case 'wide': {
        // establishing wide: high behind-and-beside the whole field, the course shape around it
        const { c, h, r } = smooth(groupOf(s), b, 3);
        pos = c.clone().addScaledVector(h, -60).addScaledVector(r, (s.side || 1) * 36).add(up.clone().multiplyScalar(62));
        look = c.clone().addScaledVector(h, 22); fov = s.fov; s.smoothLook = true; break;
      }
      case 'linecam': {
        // close finish: low side-on on the line's extension (the photo-finish camera's side), panning with the leading
        // pair as they come in and settling on the line; the photo freeze-frame picks up from here
        const st = sim.stateAt(Math.max(0, b)); const pr = (s.ids || []).map((id) => st.byId[id]).filter(Boolean);
        const Ls = world.inPark(fin.x + fin.rx * 16, fin.z + fin.rz * 16) ? 1 : -1;
        const al = pr.map((x) => (x.x - fin.x) * fin.tx + (x.z - fin.z) * fin.tz);
        const mid = pr.length ? THREE.MathUtils.clamp((Math.max(...al) + Math.min(...al)) / 2, -45, 0.6) : 0;
        const camD = 12;
        pos = new THREE.Vector3(fin.x + fin.rx * camD * Ls - fin.tx * 0.6, fin.y + 2.2, fin.z + fin.rz * camD * Ls - fin.tz * 0.6);
        look = new THREE.Vector3(fin.x + fin.tx * mid, fin.y + 1.3, fin.z + fin.tz * mid);
        const d = pos.distanceTo(look), spread = pr.length > 1 ? Math.max(...al) - Math.min(...al) : 0;
        fov = THREE.MathUtils.clamp(Math.max(fovFor(d, 0.33), deg(2 * Math.atan((spread + 4.5) / (2 * ASPECT * d)))), 10, 46);
        s.smoothLook = true; s.smoothFov = true; s.noLift = true; break;
      }
      case 'fixed': {
        // a set broadcast camera: stands still, pans and zooms with the runners (subject ~28% of the frame, group fits)
        const st = sim.stateAt(Math.max(0, b));
        const ids = s.groups ? s.groups.find((g) => g.some((id) => !st.byId[id]?.finished || b - (sim.byId[id]?.finishB ?? -9) < 1.2)) || s.groups.at(-1) : groupOf(s);
        const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished);
        const c = center(ids, b + 0.3); // (aimed a beat ahead: the smoothed pan then sits on them instead of trailing)
        pos = new THREE.Vector3(s.cam.x, s.cam.y, s.cam.z);
        look = new THREE.Vector3(c.x, c.y + 1.1, c.z);
        const d = Math.max(4, pos.distanceTo(look));
        let sp = 0; if (live.length > 1) { const xs = live.map((r) => r.x), zs = live.map((r) => r.z); sp = Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...zs) - Math.min(...zs)); }
        // (the Hill's cameras keep some of the slope in shot: never tighter than ~13 degrees)
        fov = THREE.MathUtils.clamp(Math.max(fovFor(d, s.cam.hill ? 0.26 : 0.28), deg(2 * Math.atan((sp * 0.7 + 4) / (2 * ASPECT * d)))), s.cam.hill ? 13 : 2.4, 46);
        s.smoothLook = true; s.smoothFov = true; break;
      }
      case 'drone': {
        const { c, h, r } = smooth(groupOf(s), b, 2.4);
        pos = c.clone().addScaledVector(h, -s.dist).addScaledVector(r, (s.side || 1) * 18).add(up.clone().multiplyScalar(30));
        look = c.clone().addScaledVector(h, 6).add(up.clone().multiplyScalar(0.8)); fov = s.fov; break;
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
    if (s.type !== 'heli' && s.type !== 'celebrate' && !s.noLift) {
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
      cut = hard; hardNext = false; shot = s; smoothLook = null; frozenFrom = false; fovS = null;
    }
    const T = solve(s, b, dt, cut);
    if (s.smoothLook) { if (!smoothLook) smoothLook = T.look.clone(); smoothLook.lerp(T.look, 1 - Math.exp(-3 * dt)); T.look.copy(smoothLook); }
    // set cameras zoom smoothly (tan space), like an operator riding the zoom
    if (s.smoothFov) { const tt = Math.tan(THREE.MathUtils.degToRad(T.fov) / 2); fovS = fovS == null ? tt : fovS + (tt - fovS) * (1 - Math.exp(-2.5 * dt)); T.fov = THREE.MathUtils.radToDeg(2 * Math.atan(fovS)); } else fovS = null;
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
export const WIDE_SHOTS = new Set(['drone', 'heli', 'wide']);
// tracking shots in which runners are framed big (name tags + PiP map apply)
export const TRACK_SHOTS = new Set(['linecam', 'hillside', 'wide', 'side', 'headon', 'chase', 'shoulder', 'hill', 'hilltop', 'high3q', 'breakaway', 'pack', 'fixed', 'drone', 'gag3q', 'gagside', 'gagrear', 'finishcam', 'placecam']);
