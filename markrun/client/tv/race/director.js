// Calm broadcast camera director (UI_SPEC "Camera: calm broadcast direction", iteration-4 framing pass).
// - ~12-15 shots per race, 8 s minimum (10-12 s typical) through the middle; 1.3 s glides between shots; hard cuts only
//   at the start gun, the finish-line camera and the photo finish. No shake, constant FOV within a shot.
// - Runners are BIG: tracking shots frame the subject at ~42% of the frame height (TARGET_FRAC).
// - Shot types: 'headon' (long-lens camera on the course ahead of the subject, looking back: calm even when the clock
//   runs fast, because the background recedes instead of whipping past), 'side' (long-lens side tracking, only while
//   the clock is slow), 'finishcam' (head-on dolly that parks beyond the line), 'placecam' (battle for the places
//   after the winner), plus 'heli'/'startgo' pre-roll and 'celebrate'. No mid-race drone: the HUD's picture-in-picture
//   course map shows the whole field instead.
// - Subject: the closest duel involving a backed runner, else the closest duel, else the best-placed backed runner (or
//   the leader). On a runaway (winner > 8 s clear) the finale follows the battle for the places players have money on.
// Positions are analytic functions of broadcast time (from the plan), so there is no jitter.
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
  const leaderAtB = (m) => raceToBroadcast(tm, Math.min(...plan.runners.map((r) => timeAtDistance(r.progress, m))));
  const rate = (b) => (b <= 0 ? 4 : sim.rateAt(b));
  const meanRate = (a, b) => { let s = 0, n = 0; for (let t = a; t <= b; t += Math.max(0.5, (b - a) / 12)) { s += rate(t); n++; } return s / Math.max(1, n); };
  const firstFin = sim.firstFinishB, lastFin = sim.lastFinishB;
  const winnerId = sim.finishOrder[0];
  const margin = sim.finishOrder.length > 1 ? sim.byId[sim.finishOrder[1]].officialS - sim.byId[winnerId].officialS : 99;
  const runaway = margin > 8 && backedIds.some((id) => id !== winnerId);

  // ---- subject choice: point the camera at the money ----
  const pickSubject = (a, b, { exclude = [], preferBacked = false } = {}) => {
    const T = []; for (let k = 0; k <= 6; k++) T.push(sim.stateAt(Math.max(0, a + ((b - a) * k) / 6)));
    const live = T[0].order.filter((id) => !T[0].byId[id].finished && !T.at(-1).byId[id].finished && !exclude.includes(id));
    if (!live.length) return { ids: null, kind: 'solo', gap: 0 };
    const pairs = [];
    for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) {
      const x = live[i], y = live[j];
      let mx = 0; for (const st of T) mx = Math.max(mx, Math.abs(st.byId[x].m - st.byId[y].m));
      const pos = T[3].order.indexOf(x) + T[3].order.indexOf(y);
      pairs.push({ ids: [x, y], gap: mx, backed: backedIds.includes(x) || backedIds.includes(y), pos });
    }
    const best = (l) => l.sort((p, q) => (p.gap + p.pos * 2) - (q.gap + q.pos * 2))[0];
    const focusB = live.find((id) => backedIds.includes(id));
    const pick = best(pairs.filter((p) => p.backed && p.gap <= 30)) || (preferBacked && focusB ? null : best(pairs.filter((p) => p.gap <= 24)));
    const ride = (core) => { const ids = [...core]; for (const id of live) if (!ids.includes(id) && T.every((st) => { const ms = core.map((q) => st.byId[q].m); return st.byId[id].m > Math.min(...ms) - 5 && st.byId[id].m < Math.max(...ms) + 5; })) ids.push(id); return ids; };
    const spreadOf = (ids) => { let s = 0; for (const st of T) { const ms = ids.map((q) => st.byId[q].m); s = Math.max(s, Math.max(...ms) - Math.min(...ms)); } return s; };
    if (pick) { const ids = ride(pick.ids); return { ids, kind: pick.backed ? 'backedPair' : 'pair', gap: spreadOf(ids) }; }
    // nobody close to anybody: the best-placed backed runner, else the leader (the PiP map shows the rest)
    const focus = live.find((id) => backedIds.includes(id)) ?? live[0];
    const ids = ride([focus]);
    return { ids, kind: backedIds.includes(focus) ? 'backedSolo' : 'solo', gap: spreadOf(ids) };
  };
  // side tracking only while the clock is slow and the subject fits a 42% frame; otherwise the calm head-on telephoto
  const pairType = (subj, prev, r) => (r > 6 || subj.gap > 6 ? 'headon' : prev === 'side' ? 'headon' : 'side');

  // ---- fixed beats ----
  let gunEnd = 0.25 + 8;
  for (let t = 0.25; t < 30; t += 0.25) if (rate(t) > 7) { gunEnd = Math.max(gunEnd, t); break; }
  let bSlow = firstFin - 6;
  for (let t = firstFin - 12; t > gunEnd; t -= 0.25) if (rate(t) > 6) { bSlow = t; break; }
  // the finish camera locks on for the last ~150 m (only the last ~70 m on a runaway: the money is further back)
  const bFin = Math.max(bSlow + 4, Math.min(firstFin - 2, leaderAtB(runaway ? 4935 : 4850)));
  const b4700 = Math.max(bSlow, Math.min(bFin, leaderAtB(4700)));

  out.push({ type: 'heli', a: -8.5, b: -3.2, hard: true });
  out.push({ type: 'startgo', a: -3.2, b: 0.25 });
  out.push({ type: 'headon', a: 0.25, b: gunEnd, hard: true, ids: null, start: true });

  // middle windows: funfair moment, the Hill (lap 1 + 2)
  const windows = [];
  const divR = plan.runners.find((r) => r.diversions?.length);
  if (divR && funfair) {
    const d = divR.diversions[0];
    const a = raceToBroadcast(tm, timeAtDistance(divR.progress, d.fromM)) - 0.5;
    const e = raceToBroadcast(tm, timeAtDistance(divR.progress, d.toM)) + 0.8;
    windows.push({ type: 'side', tag: 'fair', a, b: Math.max(a + 8, e), ids: [divR.id], fair: true, prio: 3 });
  }
  for (const m of HILL_M) { const hb = leaderAtB(m); windows.push({ type: 'headon', tag: 'hill', a: hb - 1.5, b: hb + 8, prio: 2 }); }
  windows.sort((x, y) => y.prio - x.prio);
  const placed = [];
  for (const w of windows) {
    const b = Math.min(bSlow, w.b), a = Math.max(gunEnd, Math.min(w.a, b - 8));
    if (b - a < 6) continue;
    if (placed.some((p) => a < p.b && b > p.a)) continue;
    placed.push({ ...w, a, b });
  }
  placed.sort((x, y) => x.a - y.a);
  const fill = (a, b, o = {}) => {
    const len = b - a; if (len <= 0.01) return;
    if (len < 8 && out.length >= 3) { out.at(-1).b = b; return; }
    const n = Math.max(1, Math.round(len / 11));
    for (let i = 0; i < n; i++) {
      const s = a + (len * i) / n, e = a + (len * (i + 1)) / n;
      const subj = pickSubject(s, e, o);
      out.push({ type: pairType(subj, out.at(-1)?.type, meanRate(s, e)), a: s, b: e, ids: subj.ids, subject: subj.kind, gap: subj.gap });
    }
  };
  let t = gunEnd;
  for (const p of placed) {
    fill(t, p.a);
    if (p.tag === 'hill') { const subj = pickSubject(p.a, p.b); p.ids = subj.ids; p.subject = subj.kind; }
    out.push(p); t = p.b;
  }
  fill(t, bSlow);
  // finale (slow clock): ~11 s shots of the best duel (on a runaway: the backed battle for the places), head-on for the
  // last stretch, then the finish camera
  {
    const ex = runaway ? [winnerId] : [];
    const fo = { exclude: ex, preferBacked: true };
    const len = b4700 - bSlow;
    if (len >= 8) { const n = Math.max(1, Math.round(len / 11)); for (let i = 0; i < n; i++) { const a = bSlow + (len * i) / n, e = bSlow + (len * (i + 1)) / n, subj = pickSubject(a, e, fo); out.push({ type: pairType(subj, out.at(-1)?.type, meanRate(a, e)), a, b: e, ids: subj.ids, subject: subj.kind, gap: subj.gap }); } }
    const a0 = Math.max(bSlow, out.at(-1).b), n2 = Math.max(1, Math.round((bFin - a0) / 11));
    for (let i = 0; i < n2; i++) {
      const a = a0 + ((bFin - a0) * i) / n2, e = a0 + ((bFin - a0) * (i + 1)) / n2, subj = pickSubject(a, e, fo);
      const last = { type: i < n2 - 1 ? pairType(subj, out.at(-1)?.type, meanRate(a, e)) : 'headon', a, b: e, ids: subj.ids, subject: subj.kind, gap: subj.gap };
      if (out.at(-1).type === last.type && out.at(-1).a >= bSlow && String(out.at(-1).ids) === String(last.ids) && e - out.at(-1).a <= 14) out.at(-1).b = e;
      else out.push(last);
    }
  }
  if (out.at(-1).b - out.at(-1).a < 6 && out.length > 4) { const l = out.pop(); out.at(-1).b = l.b; }
  // the finish camera covers the winner's crossing; the place camera takes over after the winner's replay
  out.push({ type: 'finishcam', a: bFin, b: firstFin + 1.15, hard: true, winner: winnerId });
  // one place-camera shot per later finisher (finishers within 3 s share a shot), gliding from one to the next
  {
    let a = firstFin + 1.15, hard = true;
    const rest = sim.finishOrder.slice(1);
    for (let i = 0; i < rest.length;) {
      const grp = [rest[i]]; let fb = sim.byId[rest[i]].finishB; i++;
      while (i < rest.length && sim.byId[rest[i]].finishB - fb < 3) { grp.push(rest[i]); fb = sim.byId[rest[i]].finishB; i++; }
      const e = i < rest.length ? Math.max(fb + 2.2, a + 4) : lastFin + 2.5;
      if (e > a + 0.5) { out.push({ type: 'placecam', a, b: e, hard, ids: grp }); hard = false; a = e; }
    }
  }
  out.push({ type: 'celebrate', a: Math.max(firstFin + 1.2, lastFin + 2.5), b: lastFin + 90 });

  // priority interrupts (one at a time, 12 s apart): lead change, or an overtake involving a backed runner
  const pri = (plan.events || []).filter((e) => (e.type === 'lead_change' || (e.type === 'overtake' && (backedIds.includes(e.by) || backedIds.includes(e.on)))) && e.broadcastS > gunEnd + 2 && e.broadcastS < bSlow - 3);
  let lastI = -1e9;
  for (const e of pri) {
    const pair = e.type === 'lead_change' ? [e.to, e.from] : [e.by, e.on];
    if (e.broadcastS - lastI < 12) continue;
    const i = out.findIndex((s) => e.broadcastS >= s.a && e.broadcastS < s.b);
    if (i < 0) continue;
    const s = out[i];
    if (['heli', 'startgo', 'finishcam', 'placecam', 'celebrate'].includes(s.type) || s.interrupt || s.tag || s.hard || s.subject === 'backedPair') continue; // a backed duel keeps priority
    if (s.ids && pair.every((id) => s.ids.includes(id))) continue; // already in frame
    if (e.broadcastS - s.a < 8 || s.b - e.broadcastS < 8) {
      Object.assign(s, { type: rate(e.broadcastS) > 6 ? 'headon' : 'side', ids: pair, interrupt: e.type, subject: 'pair', gap: 6 });
    } else {
      const ia = e.broadcastS - 1.8;
      out.splice(i, 1, { ...s, b: ia }, { type: 'headon', a: ia, b: s.b, ids: pair, interrupt: e.type, subject: 'pair', gap: 6 });
    }
    lastI = e.broadcastS;
  }

  // a runner on a funfair detour is filmed side-on from the course side (a head-on camera would sit among the rides)
  const divWin = plan.runners.flatMap((r) => (r.diversions || []).map((d) => ({ id: r.id, a: raceToBroadcast(tm, timeAtDistance(r.progress, d.fromM)), b: raceToBroadcast(tm, timeAtDistance(r.progress, d.toM)) })));
  if (funfair) for (const s of out) {
    if (s.type !== 'headon' || s.start) continue;
    const ids = s.ids || leadGroupAt(sim, (s.a + s.b) / 2);
    const hit = divWin.find((w) => ids.includes(w.id) && w.a < s.b && w.b > s.a);
    if (hit) Object.assign(s, { type: 'side', fair: true, ids: [hit.id] });
  }

  // per-shot constants (rate, side, distances, FOV) so nothing pumps inside a shot
  for (const s of out) {
    s.rate = meanRate(Math.max(0, s.a), Math.max(0.5, s.b));
    s.ids = s.ids || null;
    if (s.type === 'side' || s.type === 'headon') {
      const ids = s.ids || leadGroupAt(sim, (s.a + s.b) / 2);
      let spread = 0;
      for (let k = 0; k <= 6; k++) { const st = sim.stateAt(Math.max(0, s.a + ((s.b - s.a) * k) / 6)); const ms = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished).map((r) => r.m); if (ms.length) spread = Math.max(spread, Math.max(...ms) - Math.min(...ms)); }
      s.spread = spread;
      if (s.type === 'side') {
        s.dist = THREE.MathUtils.clamp(14 + 1.2 * s.rate, 17, 30);
        const fitFov = deg(2 * Math.atan((spread + 3.5) / (2 * ASPECT * s.dist)));
        s.fov = THREE.MathUtils.clamp(Math.max(fovFor(s.dist), fitFov), 5, 34);
        s.side = chooseSide(s, ids);
      } else {
        // camera on the course ahead of the group's centre; FOV for ~42% at the centre distance. Nobody may stand
        // between the camera and its subject: a runner close ahead joins the shot, a further one caps the distance.
        let want = s.start ? 30 : THREE.MathUtils.clamp(18 + 1.25 * s.rate, 20, 40);
        let gap = aheadGap(s, ids);
        if (gap < 16 && !s.start) {
          const st = sim.stateAt(Math.max(0, (s.a + s.b) / 2)); const front = Math.max(...ids.map((id) => st.byId[id].m));
          const nxt = st.order.filter((id) => !ids.includes(id) && !st.byId[id].finished && st.byId[id].m > front).sort((x, y) => st.byId[x].m - st.byId[y].m)[0];
          if (nxt) { s.ids = [...ids, nxt]; spread = spreadOf(s); s.spread = spread; gap = aheadGap(s, s.ids); }
        }
        // s.dist = camera to the FRONT runner (who is framed at ~42-52%; a chaser further back stays >= ~28%)
        s.dist = Math.max(12, Math.min(want, gap - 6));
        s.fov = THREE.MathUtils.clamp(fovFor(s.dist, TARGET_FRAC - 0.02), 4, 30);
        s.lat = chooseLat(s, s.ids || ids);
      }
    }
  }
  return out;

  // metres from the group's front to the nearest live runner ahead (min over the shot)
  function aheadGap(s, ids) {
    let g = 1e9;
    for (let k = 0; k <= 6; k++) {
      const st = sim.stateAt(Math.max(0, s.a + ((s.b - s.a) * k) / 6));
      const live = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished); if (!live.length) continue;
      const front = Math.max(...live.map((r) => r.m));
      for (const id of st.order) { const r = st.byId[id]; if (!ids.includes(id) && !r.finished && r.m > front - 0.5) g = Math.min(g, r.m - front); }
    }
    return g;
  }
  function spreadOf(s) {
    let spread = 0;
    for (let k = 0; k <= 6; k++) { const st = sim.stateAt(Math.max(0, s.a + ((s.b - s.a) * k) / 6)); const ms = s.ids.map((id) => st.byId[id]).filter((r) => r && !r.finished).map((r) => r.m); if (ms.length) spread = Math.max(spread, Math.max(...ms) - Math.min(...ms)); }
    return spread;
  }
  // camera on the inside of the bend (shorter camera path -> calmer), and inside the park
  function chooseSide(s, ids) {
    const at = (t) => { const st = sim.stateAt(Math.max(0, t)); const l = ids.map((id) => st.byId[id]).filter(Boolean); const x = l.reduce((a, r) => a + r.x, 0) / l.length, z = l.reduce((a, r) => a + r.z, 0) / l.length; return [x, z]; };
    const p0 = at(s.a), p1 = at((s.a + s.b) / 2), p2 = at(s.b);
    const cross = (p1[0] - p0[0]) * (p2[1] - p1[1]) - (p1[1] - p0[1]) * (p2[0] - p1[0]);
    let side = cross > 0 ? 1 : -1;
    const h = [p2[0] - p0[0], p2[1] - p0[1]]; const L = Math.hypot(...h) || 1; const r = [-h[1] / L, h[0] / L];
    if (s.fair && funfair) {
      // look across the runner at the rides: camera on the side away from the fair
      const c = funfair.anchors.center;
      return ((c.x - p1[0]) * r[0] + (c.z - p1[1]) * r[1]) > 0 ? -1 : 1;
    }
    const d = s.dist || 30;
    const ok = (sg) => world.inPark(p1[0] + r[0] * d * sg, p1[1] + r[1] * d * sg);
    if (!ok(side) && ok(-side)) side = -side;
    return side;
  }
  // head-on camera: a small lateral offset towards the side the group runs on
  function chooseLat(s, ids) {
    const st = sim.stateAt(Math.max(0, (s.a + s.b) / 2)); const l = ids.map((id) => st.byId[id]).filter(Boolean);
    const lat = l.reduce((a, r) => a + (r.lat || 0), 0) / Math.max(1, l.length);
    return THREE.MathUtils.clamp(lat * 0.6, -1.8, 1.8) + (lat >= 0 ? 0.7 : -0.7);
  }
}
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
    const target = wlAt(m) + d; let lo = Math.max(0, Math.floor(m / WSTEP)), hi = WL.length - 1;
    if (WL[hi] <= target) return hi * WSTEP;
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
export const TRACK_SHOTS = new Set(['side', 'headon', 'finishcam', 'placecam']);
