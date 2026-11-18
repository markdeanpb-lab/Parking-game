// Calm broadcast camera director (UI_SPEC "Camera: calm broadcast direction").
// - ~12-15 shots per race, 8 s minimum (10-12 s typical) through the middle.
// - 1.3 s camera glides between shots; hard cuts only at the start gun, the finish-line camera and the photo finish.
// - Few shot types: 'side' (long-lens side tracking), 'headon' (long-lens head-on tracking), 'drone' (wide), 'finishcam'
//   (+ 'heli'/'startgo' pre-roll and 'celebrate' after the last finisher).
// - Tracking shots keep runners at >= ~15-20% of frame height via distance + long lens; positions are analytic,
//   window-averaged functions of broadcast time, so there is no shake and the FOV is constant within a shot.
// - Lead changes / overtakes are framed inside the current shot (lead group); one priority interrupt (a lead change,
//   or an overtake involving a backed runner) may glide to a dedicated framing mid-shot.
import * as THREE from 'three';
import { raceToBroadcast, timeAtDistance, HILL_M } from '../../../server/game/raceplan.mjs';

export const GLIDE_S = 1.3;
const RUNNER_H = 2.4;     // character height incl. hat (m)
const TARGET_FRAC = 0.24;  // runner height as a fraction of frame height in tracking shots
const ASPECT = 16 / 9;
const deg = (r) => (r * 180) / Math.PI;
const fovFor = (dist, frac = TARGET_FRAC) => deg(2 * Math.atan(RUNNER_H / (2 * frac * dist)));

export function buildShotList({ plan, sim, backedIds = [], C, world, funfair }) {
  const out = [];
  const tm = plan.timeMap;
  const leaderAtB = (m) => raceToBroadcast(tm, Math.min(...plan.runners.map((r) => timeAtDistance(r.progress, m))));
  const rate = (b) => (b <= 0 ? 4 : sim.rateAt(b));
  const meanRate = (a, b) => { let s = 0, n = 0; for (let t = a; t <= b; t += Math.max(0.5, (b - a) / 12)) { s += rate(t); n++; } return s / Math.max(1, n); };
  const firstFin = sim.firstFinishB, lastFin = sim.lastFinishB;
  // lead group: runners within 20 m of the leader (fits a long-lens frame)
  const packGroup = (t) => { const st = sim.stateAt(Math.max(0, t)); const live = st.order.filter((id) => !st.byId[id].finished); const l = live[0] ?? st.order[0]; return (live.length ? live : st.order).filter((id) => Math.abs(st.byId[id].m - st.byId[l].m) < 120); };
  const leadGroup = (t) => { const st = sim.stateAt(Math.max(0, t)); const live = st.order.filter((id) => !st.byId[id].finished); const l = live[0] ?? st.order[0]; return (live.length ? live : st.order).filter((id) => Math.abs(st.byId[id].m - st.byId[l].m) < 20); };
  const groupNear = (id, t) => { const st = sim.stateAt(Math.max(0, t)); return st.order.filter((x) => !st.byId[x].finished && Math.abs(st.byId[x].m - st.byId[id].m) < 20); };

  // ---- subject choice: point the camera at the money ----
  // 1) the tightest pair involving a backed runner (within ~30 m all shot), 2) the tightest pair anywhere (~40 m),
  // 3) otherwise a wide drone over the biggest cluster. Runners staying inside the pair's span ride along.
  const pickSubject = (a, b) => {
    const T = []; for (let k = 0; k <= 6; k++) T.push(sim.stateAt(Math.max(0, a + ((b - a) * k) / 6)));
    const live = T[0].order.filter((id) => !T[0].byId[id].finished && !T.at(-1).byId[id].finished);
    const pairs = [];
    for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) {
      const x = live[i], y = live[j];
      let mx = 0; for (const st of T) mx = Math.max(mx, Math.abs(st.byId[x].m - st.byId[y].m));
      const pos = T[3].order.indexOf(x) + T[3].order.indexOf(y);
      pairs.push({ ids: [x, y], gap: mx, backed: backedIds.includes(x) || backedIds.includes(y), pos });
    }
    const best = (l) => l.sort((p, q) => (p.gap + p.pos * 2) - (q.gap + q.pos * 2))[0];
    let pick = best(pairs.filter((p) => p.backed && p.gap <= 30)) || best(pairs.filter((p) => p.gap <= 40));
    if (pick) {
      const ids = [...pick.ids];
      for (const id of live) if (!ids.includes(id) && T.every((st) => { const ms = pick.ids.map((q) => st.byId[q].m); return st.byId[id].m > Math.min(...ms) - 6 && st.byId[id].m < Math.max(...ms) + 6; })) ids.push(id);
      return { ids, kind: pick.backed ? 'backedPair' : 'pair', gap: pick.gap };
    }
    // nobody close to anybody: the biggest cluster within 150 m, framed wide
    const st = T[3]; const ord = st.order.filter((id) => live.includes(id));
    let bestG = [ord[0]];
    for (let i = 0; i < ord.length; i++) { const g = ord.filter((id) => st.byId[ord[i]].m - st.byId[id].m >= 0 && st.byId[ord[i]].m - st.byId[id].m < 150); if (g.length > bestG.length) bestG = g; }
    return { ids: bestG.length ? bestG : null, kind: 'pack' };
  };
  // long-lens side for duels up to ~24 m apart (FOV widens to fit), head-on when they're strung out in depth; alternate for variety
  const pairType = (subj, prev) => (subj.kind === 'pack' ? 'drone' : subj.gap > 24 ? 'headon' : prev === 'side' ? 'headon' : 'side');

  // ---- fixed beats ----
  let gunEnd = 0.25 + 8;
  for (let t = 0.25; t < 30; t += 0.25) if (rate(t) > 7) { gunEnd = Math.max(gunEnd, t); break; }
  let bSlow = firstFin - 6;
  for (let t = firstFin - 12; t > gunEnd; t -= 0.25) if (rate(t) > 6) { bSlow = t; break; }
  // the finish-line camera locks on for the last ~150 m of the leading contenders
  const bFin = Math.max(bSlow + 4, Math.min(firstFin - 3, leaderAtB(4850)));
  const b4700 = Math.max(bSlow, Math.min(bFin, leaderAtB(4700)));

  out.push({ type: 'heli', a: -8.5, b: -3.2, hard: true });
  out.push({ type: 'startgo', a: -3.2, b: 0.25 });
  out.push({ type: 'side', a: 0.25, b: gunEnd, hard: true, ids: null });

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
  // fill the middle with calm ~10-12 s shots, each framed on the best subject for its window
  const fill = (a, b) => {
    const len = b - a; if (len <= 0.01) return;
    if (len < 8 && out.length >= 3) { out.at(-1).b = b; return; }
    const n = Math.max(1, Math.round(len / 11));
    for (let i = 0; i < n; i++) {
      const s = a + (len * i) / n, e = a + (len * (i + 1)) / n;
      const subj = pickSubject(s, e);
      out.push({ type: pairType(subj, out.at(-1)?.type), a: s, b: e, ids: subj.ids, subject: subj.kind, pack: subj.kind === 'pack' });
    }
  };
  let t = gunEnd;
  for (const p of placed) {
    fill(t, p.a);
    if (p.tag === 'hill') { const subj = pickSubject(p.a, p.b); if (subj.kind !== 'pack') { p.ids = subj.ids; p.subject = subj.kind; } }
    out.push(p); t = p.b;
  }
  fill(t, bSlow);
  // finale (slow clock): tight side / head-on shots of ~11 s, head-on for the last 300 m, then the finish-line camera
  {
    const len = b4700 - bSlow;
    if (len >= 8) { const n = Math.max(1, Math.round(len / 11)); for (let i = 0; i < n; i++) { const a = bSlow + (len * i) / n, e = bSlow + (len * (i + 1)) / n, subj = pickSubject(a, e); out.push({ type: pairType(subj, out.at(-1)?.type), a, b: e, ids: subj.ids, subject: subj.kind, pack: subj.kind === 'pack' }); } }
    const a = Math.max(bSlow, out.at(-1).b), subj = pickSubject(a, bFin);
    const last = { type: subj.kind === 'pack' ? 'headon' : 'headon', a, b: bFin, ids: subj.kind === 'pack' ? null : subj.ids, subject: subj.kind };
    if (out.at(-1).type === 'headon' && out.at(-1).a >= bSlow && String(out.at(-1).ids) === String(last.ids)) out.at(-1).b = bFin;
    else out.push(last);
  }
  if (out.at(-1).b - out.at(-1).a < 6 && out.length > 4) { const l = out.pop(); out.at(-1).b = l.b; }
  out.push({ type: 'finishcam', a: bFin, b: lastFin + 2.5, hard: true });
  out.push({ type: 'celebrate', a: lastFin + 2.5, b: lastFin + 90 });

  // priority interrupts (one at a time, 12 s apart): lead change, or an overtake involving a backed runner
  const pri = (plan.events || []).filter((e) => (e.type === 'lead_change' || (e.type === 'overtake' && (backedIds.includes(e.by) || backedIds.includes(e.on)))) && e.broadcastS > gunEnd + 2 && e.broadcastS < bSlow - 3);
  let lastI = -1e9;
  for (const e of pri) {
    const pair = e.type === 'lead_change' ? [e.to, e.from] : [e.by, e.on];
    if (e.broadcastS - lastI < 12) continue;
    const i = out.findIndex((s) => e.broadcastS >= s.a && e.broadcastS < s.b);
    if (i < 0) continue;
    const s = out[i];
    if (['heli', 'startgo', 'finishcam', 'celebrate', 'drone'].includes(s.type) || s.interrupt || s.tag || s.hard || s.subject === 'backedPair') continue; // the drone shows the pack; a backed duel keeps priority
    const framed = (s.ids || leadGroup((s.a + s.b) / 2));
    if (pair.every((id) => framed.includes(id))) continue; // already in frame
    if (e.broadcastS - s.a < 8 || s.b - e.broadcastS < 8) {
      // short shot: plan the whole calm shot around the pair instead of cutting mid-shot
      Object.assign(s, { type: 'side', ids: pair, interrupt: e.type, pack: false, subject: 'pair' });
    } else {
      // long shot: one blended move to frame the pair, then the shot continues
      const ia = e.broadcastS - 1.8;
      out.splice(i, 1, { ...s, b: ia }, { type: 'side', a: ia, b: s.b, ids: pair, interrupt: e.type, subject: 'pair' });
    }
    lastI = e.broadcastS;
  }

  // per-shot constants (rate, side, distances, FOV) so nothing pumps inside a shot
  for (const s of out) {
    s.rate = meanRate(Math.max(0, s.a), Math.max(0.5, s.b));
    s.ids = s.ids || null;
    if (s.type === 'side' || s.type === 'headon' || s.type === 'drone') {
      const ids = s.ids || (s.type === 'drone' ? packGroup((s.a + s.b) / 2) : leadGroup((s.a + s.b) / 2));
      if (s.type === 'drone' && !s.ids) s.pack = true;
      // spread of the framed group over the shot
      let spread = 0;
      for (let k = 0; k <= 6; k++) { const st = sim.stateAt(Math.max(0, s.a + ((s.b - s.a) * k) / 6)); const ms = ids.map((id) => st.byId[id]).filter((r) => r && !r.finished).map((r) => r.m); if (ms.length) spread = Math.max(spread, Math.max(...ms) - Math.min(...ms)); }
      s.spread = spread;
      if (s.type === 'side') {
        s.dist = THREE.MathUtils.clamp(14 + 1.7 * s.rate, 18, 48);
        let fov = fovFor(s.dist);
        const needW = spread + 7; const fitFov = deg(2 * Math.atan(needW / (2 * ASPECT * s.dist)));
        s.fov = THREE.MathUtils.clamp(Math.max(fov, fitFov), 10, 34);
        s.side = chooseSide(s, ids);
      } else if (s.type === 'headon') {
        s.dist = THREE.MathUtils.clamp(16 + 1.9 * s.rate, 20, 52) + spread * 0.6;
        s.fov = THREE.MathUtils.clamp(fovFor(s.dist - spread * 0.3, 0.2), 10, 30);
      } else {
        s.back = 30 + 2.2 * s.rate + spread * 0.35; s.height = 16 + 1.9 * s.rate + spread * 0.25; s.fov = 40; s.side = chooseSide(s, ids);
      }
    }
  }
  return out;

  // camera on the inside of the bend (shorter camera path -> calmer), and inside the park
  function chooseSide(s, ids) {
    const at = (t) => { const st = sim.stateAt(Math.max(0, t)); const l = ids.map((id) => st.byId[id]).filter(Boolean); const x = l.reduce((a, r) => a + r.x, 0) / l.length, z = l.reduce((a, r) => a + r.z, 0) / l.length; return [x, z]; };
    const p0 = at(s.a), p1 = at((s.a + s.b) / 2), p2 = at(s.b);
    const cross = (p1[0] - p0[0]) * (p2[1] - p1[1]) - (p1[1] - p0[1]) * (p2[0] - p1[0]);
    let side = s.fair ? null : (cross > 0 ? 1 : -1);
    if (s.fair && funfair) {
      // look across the runner at the rides: camera on the side away from the fair
      const c = funfair.anchors.center; const h = [p2[0] - p0[0], p2[1] - p0[1]]; const r = [-h[1], h[0]];
      side = ((c.x - p1[0]) * r[0] + (c.z - p1[1]) * r[1]) > 0 ? -1 : 1;
      return side;
    }
    const h = [p2[0] - p0[0], p2[1] - p0[1]]; const L = Math.hypot(...h) || 1; const r = [-h[1] / L, h[0] / L];
    const d = s.dist || 40;
    const ok = (sg) => world.inPark(p1[0] + r[0] * d * sg, p1[1] + r[1] * d * sg);
    if (!ok(side) && ok(-side)) side = -side;
    return side;
  }
}

// ---- runtime ----
export function createDirector({ camera, C, sim, world, funfair }) {
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3() };
  const up = new THREE.Vector3(0, 1, 0);
  let shot = null, glide = null, hardNext = true, smoothLook = null;
  const q = new THREE.Quaternion(), m4 = new THREE.Matrix4();

  function center(ids, t) {
    const st = sim.stateAt(Math.max(0, t));
    let l = (ids || st.order.slice(0, 1)).map((id) => st.byId[id]).filter(Boolean);
    const live = l.filter((r) => !r.finished); if (live.length) l = live;
    const v = new THREE.Vector3(); for (const r of l) v.add(new THREE.Vector3(r.x, r.y, r.z)); return v.divideScalar(Math.max(1, l.length));
  }
  // window-averaged centre + heading: smooth through bends, no jitter
  // c = the group's real centre (runner motion is already smooth; averaging along a bend would drift off the runners),
  // h = heading averaged over a window, so camera offsets swing gently through bends
  function smooth(ids, t, w) {
    const c = center(ids, t);
    const a = center(ids, t - w * 1.5), b = center(ids, t + w * 1.5);
    const h = new THREE.Vector3(b.x - a.x, 0, b.z - a.z);
    if (h.lengthSq() < 1e-4) { const id = ids?.[0] ?? sim.stateAt(Math.max(0, t)).order[0]; const s = sim.stateAt(Math.max(0, t)).byId[id]; h.set(s.tx, 0, s.tz); }
    h.normalize();
    return { c, h, r: new THREE.Vector3(-h.z, 0, h.x) };
  }
  const groupOf = (s, t) => {
    if (s.ids) return s.ids;
    // fixed membership per shot (evaluated at the shot midpoint) so the framing never jumps when the group changes
    if (!s._group) {
      const tm = (s.a + s.b) / 2, st = sim.stateAt(Math.max(0, tm)); const live = st.order.filter((id) => !st.byId[id].finished); const l = live[0] ?? st.order[0];
      s._group = (live.length ? live : st.order).filter((id) => Math.abs(st.byId[id].m - st.byId[l].m) < (s.pack ? 120 : 20));
      if (!s._group.length) s._group = [l];
    }
    return s._group;
  };

  function evaluate(s, b) {
    const fin = world.anchors.finish, start = world.anchors.start;
    let pos, look, fov = 40;
    // window (s) for smoothing scales with how fast the clock runs
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
        const { c, h, r } = smooth(groupOf(s, b), b, w);
        pos = c.clone().addScaledVector(r, s.side * s.dist).addScaledVector(h, s.dist * 0.18).add(up.clone().multiplyScalar(2.5 + s.dist * 0.2));
        look = c.clone().add(up.clone().multiplyScalar(1.1)); fov = s.fov; break;
      }
      case 'headon': {
        const { c, h, r } = smooth(groupOf(s, b), b, w);
        pos = c.clone().addScaledVector(h, s.dist).addScaledVector(r, 1.5).add(up.clone().multiplyScalar(2 + s.dist * 0.16));
        look = c.clone().add(up.clone().multiplyScalar(1.15)); fov = s.fov; break;
      }
      case 'drone': {
        const { c, h, r } = smooth(groupOf(s, b), b, w * 1.3);
        pos = c.clone().addScaledVector(h, -s.back).addScaledVector(r, s.side * s.back * 0.5).add(up.clone().multiplyScalar(s.height));
        look = c.clone().addScaledVector(h, s.back * 0.15); fov = s.fov; break;
      }
      case 'finishcam': {
        // low, side-on to the line, telephoto; pans with the next contender and settles on the line as they cross
        const h = new THREE.Vector3(fin.tx, 0, fin.tz), r = new THREE.Vector3(-h.z, 0, h.x);
        if (!s.fside) s.fside = world.inPark(fin.x + r.x * 16, fin.z + r.z * 16) ? 1 : -1;
        const line = new THREE.Vector3(fin.x, fin.y + 1.0, fin.z);
        pos = line.clone().addScaledVector(r, s.fside * 15).addScaledVector(h, 11).add(up.clone().multiplyScalar(1.9));
        const st = sim.stateAt(Math.max(0, b));
        const next = st.order.map((id) => st.byId[id]).find((x) => !x.finished);
        const fins = st.order.map((id) => st.byId[id]).filter((x) => x.finished).sort((a, c) => a.post - c.post);
        const fresh = fins[0];
        if (fresh && fresh.post < 6 && (!next || next.distToFinish > 45)) {
          // hold on the runner who just finished (celebration / winner stamp moment) until the next one is close
          look = new THREE.Vector3(fresh.x, fresh.y + 1.1, fresh.z);
        } else {
          const k = next ? Math.min(1, Math.max(0, next.distToFinish / 150)) : 0;
          look = next ? line.clone().lerp(new THREE.Vector3(next.x, next.y + 1.0, next.z), Math.min(1, 0.25 + k)) : line;
        }
        fov = 22; s.smoothLook = true; break;
      }
      case 'celebrate': {
        const st = sim.stateAt(Math.max(0, b));
        const c = new THREE.Vector3(); for (const id of st.order) c.add(new THREE.Vector3(st.byId[id].x, st.byId[id].y, st.byId[id].z)); c.divideScalar(st.order.length);
        const fh = new THREE.Vector3(fin.tx, 0, fin.tz), fr = new THREE.Vector3(-fh.z, 0, fh.x);
        const a = Math.sin((b - s.a) * 0.08) * 0.5;
        pos = c.clone().addScaledVector(fh, -11 * Math.cos(a)).addScaledVector(fr, 11 * Math.sin(a)).add(up.clone().multiplyScalar(2.8));
        look = c.clone().add(up.clone().multiplyScalar(1.2)); fov = 44; break;
      }
      default: {
        const { c, h } = smooth(groupOf(s, b), b, w);
        pos = c.clone().addScaledVector(h, -12).add(up.clone().multiplyScalar(5)); look = c.clone();
      }
    }
    return { pos, look, fov };
  }

  function update(b, dt, shots) {
    const s = shots.find((x) => b >= x.a && b < x.b) || shots.at(-1);
    let cut = false;
    if (s !== shot) {
      const hard = hardNext || !!s.hard;
      glide = hard ? null : { from: { pos: camera.position.clone(), look: cam.look.clone(), fov: camera.fov }, t0: b };
      cut = hard; hardNext = false; shot = s; smoothLook = null;
    }
    const T = evaluate(s, b);
    const gy = C.heightAt(T.pos.x, T.pos.z) + 1.2; if (T.pos.y < gy) T.pos.y = gy;
    if (s.smoothLook) { if (!smoothLook) smoothLook = T.look.clone(); smoothLook.lerp(T.look, 1 - Math.exp(-2.5 * dt)); T.look.copy(smoothLook); }
    m4.lookAt(T.pos, T.look, up); q.setFromRotationMatrix(m4);
    let pos = T.pos, quat = q, fov = T.fov;
    if (glide) {
      const u = (b - glide.t0) / GLIDE_S;
      if (u >= 1 || u < 0) glide = null;
      else {
        const e = u * u * u * (u * (u * 6 - 15) + 10); // smootherstep
        const arc = Math.sin(Math.PI * e) * Math.min(12, glide.from.pos.distanceTo(T.pos) * 0.12);
        pos = glide.from.pos.clone().lerp(T.pos, e).add(up.clone().multiplyScalar(arc));
        // aim at a blend of the old and new subjects so the action stays in frame during the move
        const el = Math.min(1, u * 2.2); const lk = glide.from.look.clone().lerp(T.look, el * el * (3 - 2 * el)); // reach the new subject early
        m4.lookAt(pos, lk, up); quat = new THREE.Quaternion().setFromRotationMatrix(m4);
        fov = glide.from.fov + (T.fov - glide.from.fov) * e;
      }
    }
    cam.pos.copy(T.pos); cam.look.copy(T.look);
    camera.position.copy(pos); camera.quaternion.copy(quat);
    if (Math.abs(camera.fov - fov) > 0.001) { camera.fov = fov; camera.updateProjectionMatrix(); }
    return { shot: s, cut };
  }
  // hard=true: next frame snaps (seek); hard=false: glide from wherever the camera is now (e.g. after the market pause)
  function reset(hard = true) { shot = null; glide = null; hardNext = !!hard; smoothLook = null; }
  return { update, reset, evaluate, get shot() { return shot; }, get gliding() { return !!glide; }, cam };
}

export function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
export const WIDE_SHOTS = new Set(['drone', 'heli']);
