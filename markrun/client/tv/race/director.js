// Automated broadcast camera director. Builds a shot list for the whole race from plan.events + the (fully
// deterministic) runner positions, then evaluates the active shot every frame. Cuts are hard; motion inside a shot
// is smooth (positions are functions of broadcast time; only the framing offsets are damped).
import * as THREE from 'three';

const PRIO = { finish: 10, photo: 11, distracted: 9, hill: 7, lapboard: 6, lead_change: 6, final: 5, backed: 4, overtake: 3, filler: 1 };

export function buildShotList({ plan, sim, backedIds = [], hasDiversion }) {
  const ev = plan.events;
  const endB = sim.lastFinishB + 3.5;
  const windows = [];
  const W = (type, a, b, prio, extra = {}) => { if (b - a >= 1.2) windows.push({ type, a, b, prio, ...extra }); };
  const firstFinish = sim.firstFinishB;
  // finish sequence: finish cam for the winner, then intercut chasers
  const fin = ev.filter((e) => e.type === 'finish').sort((a, b) => a.broadcastS - b.broadcastS);
  let cursor = firstFinish - 5.5;
  fin.forEach((f, i) => {
    const prev = fin[i - 1];
    if (prev && f.broadcastS - prev.broadcastS > 7.5) {
      // gap: show the chaser approaching from the front, then back to the finish cam
      W('front', prev.broadcastS + 2.2, f.broadcastS - 3.2, 10, { ids: [f.who], tag: 'chaser' });
      cursor = f.broadcastS - 3.2;
    }
    W('finishcam', cursor, f.broadcastS + 2.2, 10, { ids: [f.who] });
    cursor = f.broadcastS + 2.2;
  });
  if (sim.photoFinish) W('photo', firstFinish - 0.02, firstFinish + 0.02, 11);
  // final stretch
  const fs = ev.find((e) => e.type === 'final_stretch');
  if (fs) {
    const a = fs.broadcastS, b = firstFinish - 5.5;
    const n = Math.max(1, Math.round((b - a) / 6));
    const kinds = ['final', 'track', 'battle', 'final', 'drone', 'front'];
    for (let i = 0; i < n; i++) {
      const s = a + ((b - a) * i) / n, e = a + ((b - a) * (i + 1)) / n;
      const mid = (s + e) / 2; const o = sim.orderAt(mid);
      let type = kinds[i % kinds.length], ids = [o[0]];
      if (type === 'battle') ids = [o[0], o[1]];
      const close = sim.gapM(o[0], o[1], mid) < 12;
      if (i === 0) { type = 'final'; ids = [o[0]]; }
      else if (close && type !== 'final') { type = 'battle'; ids = [o[0], o[1]]; }
      W(type, s, e, 5, { ids });
    }
  }
  // diversions: only the first one gets a dedicated cut
  const div = ev.filter((e) => e.type === 'diversion').sort((a, b) => a.broadcastS - b.broadcastS);
  if (div[0]) W('distracted', div[0].broadcastS + 0.6, Math.min(div[0].endBroadcastS - 0.4, div[0].broadcastS + 6), 9, { ids: [div[0].who], banner: true });
  for (const h of ev.filter((e) => e.type === 'hill')) { const rate = sim.rateAt(h.broadcastS); const dur = Math.max(2.6, Math.min(6, 140 / Math.max(1, rate * 3.4))); W('hill', h.broadcastS - 1.4, h.broadcastS + dur, 7, { lap: h.lap }); }
  const lap = ev.find((e) => e.type === 'lap'); if (lap) W('lapboard', lap.broadcastS - 2.6, lap.broadcastS + 2.0, 6);
  for (const e of ev.filter((x) => x.type === 'lead_change')) W('battle', e.broadcastS - 1.6, e.broadcastS + 2.8, 6, { ids: [e.to, e.from], tag: 'lead' });
  // overtakes: only the interesting ones (backed runners, or a fight for the top two), with a cooldown for variety
  let lastBattle = -1e9;
  const leadTimes = ev.filter((x) => x.type === 'lead_change').map((x) => x.broadcastS);
  for (const e of ev.filter((x) => x.type === 'overtake')) {
    const backed = backedIds.includes(e.by) || backedIds.includes(e.on);
    const o = sim.orderAt(e.broadcastS + 0.5);
    const top = o.indexOf(e.by) <= 1;
    if (!backed && !top) continue;
    if (e.broadcastS - lastBattle < 11 || leadTimes.some((t) => Math.abs(t - e.broadcastS) < 6)) continue;
    lastBattle = e.broadcastS;
    W('battle', e.broadcastS - 1.4, e.broadcastS + 2.6, backed ? 4 : 3, { ids: [e.by, e.on] });
  }
  // start: runners leave the line
  W('startgo', -3.2, 2.4, 12);
  W('heli', -8.5, -3.2, 12);
  // place by priority
  windows.sort((x, y) => y.prio - x.prio || x.a - y.a);
  const placed = [];
  const free = (a, b) => !placed.some((p) => a < p.b && b > p.a);
  for (const w of windows) {
    if (free(w.a, w.b)) { placed.push(w); continue; }
    // trim against overlaps
    let a = w.a, b = w.b;
    for (const p of placed) { if (a < p.b && b > p.a) { if (p.a <= a) a = p.b; else b = Math.min(b, p.a); } }
    if (b - a >= 2.2 && free(a, b)) placed.push({ ...w, a, b });
  }
  placed.sort((x, y) => x.a - y.a);
  // fill gaps with filler rotation
  const out = [];
  let t = -8.5; let fillerIdx = 0;
  const fillers = ['track', 'drone', 'front', 'chase', 'track', 'blimp', 'front', 'side'];
  const addFill = (a, b) => {
    const len = b - a; if (len <= 0.05) return;
    if (len < 2.2 && out.length) { out.at(-1).b = b; return; }
    const n = Math.max(1, Math.round(len / 5.2));
    for (let i = 0; i < n; i++) {
      const s = a + (len * i) / n, e = a + (len * (i + 1)) / n, mid = (s + e) / 2;
      const o = sim.orderAt(mid);
      let type = fillers[fillerIdx++ % fillers.length], ids = [o[0]];
      // backed runners get airtime when they're not in the lead pack
      const lonelyBacked = backedIds.filter((id) => !sim.finishedAt(id, mid) && sim.gapM(o[0], id, mid) > 25);
      if (lonelyBacked.length && fillerIdx % 3 === 0) { type = 'chase'; ids = [lonelyBacked[fillerIdx % lonelyBacked.length]]; }
      else if (type === 'track' || type === 'side') { ids = o.filter((id) => sim.gapM(o[0], id, mid) < 15).slice(0, 3); }
      else if (type === 'drone' || type === 'blimp') ids = o;
      if (sim.allFinishedAt(mid - 2)) { type = 'celebrate'; ids = sim.finishOrder; }
      out.push({ type, a: s, b: e, prio: 1, ids, filler: true });
    }
  };
  for (const p of placed) { if (p.a > t) addFill(t, p.a); out.push(p); t = Math.max(t, p.b); }
  if (t < endB + 30) addFill(t, endB + 30);
  return out;
}

// ---- runtime camera evaluation ----
export function createDirector({ camera, C, sim, world, funfair }) {
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), fov: 45 };
  const sm = { off: new THREE.Vector3(), lookOff: new THREE.Vector3(), fov: 45, init: false };
  let shot = null;
  const v = new THREE.Vector3(), w = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const tmp = {};

  // focus point for a set of runner ids at broadcast time b: mean metres, on that runner's (possibly diverted) line
  function focus(ids, b) {
    const st = sim.stateAt(b);
    const list = ids.map((id) => st.byId[id]).filter(Boolean);
    if (!list.length) return { p: new THREE.Vector3(st.leader.x, st.leader.y, st.leader.z), h: new THREE.Vector3(st.leader.tx, 0, st.leader.tz), m: st.leader.m, spread: 0 };
    const p = new THREE.Vector3(); let m = 0;
    for (const r of list) { p.x += r.x; p.y += r.y; p.z += r.z; m += r.m; }
    p.divideScalar(list.length); m /= list.length;
    let lo = 1e9, hi = -1e9; for (const r of list) { lo = Math.min(lo, r.m); hi = Math.max(hi, r.m); }
    // heading: smoothed along the lead runner's own line
    const r0 = list[0];
    const ma = Math.max(0, r0.mVis - 18); const a = C.xzAt(ma, r0.id), c = C.xzAt(ma + 36, r0.id);
    const h = new THREE.Vector3(c.x - a.x, 0, c.z - a.z).normalize();
    if (!isFinite(h.x)) h.set(0, 0, 1);
    return { p, h, m, spread: hi - lo, list };
  }
  const right = (h) => new THREE.Vector3(-h.z, 0, h.x);

  function evaluate(s, b, dt) {
    const u = (b - s.a) / Math.max(0.01, s.b - s.a);
    const fin = world.anchors.finish, start = world.anchors.start;
    let pos, look, fov = 45, damp = true;
    switch (s.type) {
      case 'heli': {
        const ctr = new THREE.Vector3(150, 0, 0);
        const st = new THREE.Vector3(start.x, start.y, start.z);
        const k = easeInOut(Math.min(1, u * 1.05));
        const ang = -1.2 + k * 1.6;
        const R = 420 - k * 360;
        const p0 = new THREE.Vector3(ctr.x + Math.cos(ang) * R, 170 - k * 140, ctr.z + Math.sin(ang) * R);
        pos = p0.lerp(new THREE.Vector3(st.x - start.tx * 40 + start.rx * 25, st.y + 22, st.z - start.tz * 40 + start.rz * 25), k * k);
        look = ctr.clone().setY(10).lerp(st, Math.min(1, k * 1.3));
        fov = 50; damp = false; break;
      }
      case 'startgo': {
        const st = new THREE.Vector3(start.x, start.y, start.z); const h = new THREE.Vector3(start.tx, 0, start.tz); const r = right(h);
        if (b < 0.6) { pos = st.clone().addScaledVector(h, 9.5 + (b + 3.2) * 0.25).addScaledVector(r, 2.6).add(up.clone().multiplyScalar(1.9)); look = st.clone().add(up.clone().multiplyScalar(1.3)).addScaledVector(h, -1); fov = 42; }
        else { const f = focus(sim.orderAt(b).slice(0, 3), b); pos = f.p.clone().addScaledVector(f.h, 11).addScaledVector(right(f.h), 3.5).add(up.clone().multiplyScalar(2.2)); look = f.p.clone().add(up.clone().multiplyScalar(1.2)); fov = 44; }
        damp = false; break;
      }
      case 'track': case 'side': {
        const f = focus(s.ids, b); const r = right(f.h);
        const side = s.type === 'side' ? -1 : 1;
        const d = 8 + Math.min(14, f.spread * 0.6);
        pos = f.p.clone().addScaledVector(r, side * (d + 2)).addScaledVector(f.h, 3 + Math.sin(u * 3) * 0.6).add(up.clone().multiplyScalar(2.6));
        look = f.p.clone().addScaledVector(f.h, 1.5).add(up.clone().multiplyScalar(1.1));
        fov = 42; break;
      }
      case 'front': case 'final': {
        const f = focus(s.ids, b); const r = right(f.h);
        const dist = s.type === 'final' ? 7.5 - u * 1.5 : 7;
        pos = f.p.clone().addScaledVector(f.h, dist).addScaledVector(r, s.type === 'final' ? 1.4 : -2).add(up.clone().multiplyScalar(s.type === 'final' ? 0.9 : 1.8));
        look = f.p.clone().add(up.clone().multiplyScalar(1.35)).addScaledVector(f.h, -2);
        fov = s.type === 'final' ? 38 : 42; break;
      }
      case 'chase': {
        const f = focus(s.ids, b); const r = right(f.h);
        pos = f.p.clone().addScaledVector(f.h, -7.5).addScaledVector(r, 2.2).add(up.clone().multiplyScalar(3.0));
        look = f.p.clone().addScaledVector(f.h, 5).add(up.clone().multiplyScalar(1.2));
        fov = 46; break;
      }
      case 'battle': {
        const f = focus(s.ids, b); const r = right(f.h);
        // 3/4 front-side angle, off the path, wide enough to frame both runners
        const side = (Math.floor(s.a * 7) % 2) ? 1 : -1;
        const d = 11 + Math.min(10, f.spread * 0.7);
        pos = f.p.clone().addScaledVector(f.h, d * 0.7).addScaledVector(r, side * d * 0.75).add(up.clone().multiplyScalar(2.3));
        look = f.p.clone().add(up.clone().multiplyScalar(1.1));
        fov = 42; break;
      }
      case 'drone': case 'blimp': {
        const st = sim.stateAt(b);
        const lead = st.byId[st.order[0]];
        const act = st.order.map((id) => st.byId[id]).filter((r) => !r.finished);
        const c = new THREE.Vector3(); for (const r of act.length ? act : [lead]) c.add(new THREE.Vector3(r.x, r.y, r.z)); c.divideScalar(Math.max(1, act.length));
        const spread = act.length ? act[0].m - act.at(-1).m : 0;
        const f = focus([st.order[0]], b);
        const hgt = s.type === 'blimp' ? 38 + Math.min(50, spread * 0.25) : 20 + Math.min(40, spread * 0.25);
        const back = s.type === 'blimp' ? 48 : 30 + Math.min(40, spread * 0.25);
        const tgt = c.clone().lerp(new THREE.Vector3(lead.x, lead.y, lead.z), 0.5);
        pos = tgt.clone().addScaledVector(f.h, -back).addScaledVector(right(f.h), back * 0.6).add(up.clone().multiplyScalar(hgt));
        look = tgt; fov = 46; break;
      }
      case 'hill': {
        // fixed camera beside the climb; it pans and zooms to keep the lead climber framed
        const m = world.anchors.hillM;
        // up the slope, beside the path, looking back down at the climbers (faces + effort, THE HILL sign behind them)
        const mid = C.sample(m + 105); const h = new THREE.Vector3(mid.tx, 0, mid.tz); const r = right(h);
        pos = new THREE.Vector3(mid.x, mid.y, mid.z).addScaledVector(r, 6.5).add(up.clone().multiplyScalar(2.2));
        const st = sim.stateAt(b);
        const onHill = st.order.map((id) => st.byId[id]).filter((x) => C.geoOf(x.m) > m - 120 && C.geoOf(x.m) < m + 200 && !x.finished);
        const tg = onHill.length ? onHill[0] : null;
        const tgt = tg ? new THREE.Vector3(tg.x, tg.y + 1.1, tg.z) : new THREE.Vector3(mid.x, mid.y + 1, mid.z);
        look = tgt;
        const dist = pos.distanceTo(tgt);
        fov = THREE.MathUtils.clamp(2 * Math.atan(5.5 / dist) * 180 / Math.PI, 12, 50); damp = true; break;
      }
      case 'lapboard': {
        // beyond the board on the far side of the path, looking back at runners passing it
        const g = world.anchors.lapBoard; const bp = new THREE.Vector3(); g.getWorldPosition(bp);
        const sb = C.sample(2500 - 25 + 16); const h = new THREE.Vector3(sb.tx, 0, sb.tz); const r = right(h);
        pos = new THREE.Vector3(sb.x, sb.y, sb.z).addScaledVector(r, -(4.6 + 3)).add(up.clone().multiplyScalar(2.4));
        const st = sim.stateAt(b);
        const near = st.order.map((id) => st.byId[id]).filter((x) => x.m > 2350 && x.m < 2600);
        const tgt = near.length ? new THREE.Vector3(near[0].x, near[0].y + 1.2, near[0].z) : bp.clone().add(up.clone().multiplyScalar(2));
        look = bp.clone().add(up.clone().multiplyScalar(1.8)).lerp(tgt, 0.45);
        fov = 46; break;
      }
      case 'finishcam': {
        const h = new THREE.Vector3(fin.tx, 0, fin.tz); const r = right(h);
        const st = sim.stateAt(b);
        const wid = s.ids?.[0] ?? st.order[0];
        const rr = st.byId[wid];
        pos = new THREE.Vector3(fin.x, fin.y, fin.z).addScaledVector(h, 16).addScaledVector(r, -4).add(up.clone().multiplyScalar(2.6));
        const arch = new THREE.Vector3(fin.x, fin.y + 2.5, fin.z);
        const tgt = rr && !rr.finished ? new THREE.Vector3(rr.x, rr.y + 1.3, rr.z) : arch;
        look = arch.clone().lerp(tgt, rr && !rr.finished ? Math.min(0.85, 15 / Math.max(15, rr.distToFinish)) : 0.3);
        fov = rr && !rr.finished && rr.distToFinish > 30 ? 30 : 40; break;
      }
      case 'celebrate': {
        const st = sim.stateAt(b);
        const c = new THREE.Vector3(); for (const id of st.order) c.add(new THREE.Vector3(st.byId[id].x, st.byId[id].y, st.byId[id].z)); c.divideScalar(st.order.length);
        const fh = new THREE.Vector3(fin.tx, 0, fin.tz), fr = right(fh);
        const a = Math.sin(b * 0.15) * 0.5;
        pos = c.clone().addScaledVector(fh, -10 * Math.cos(a)).addScaledVector(fr, 10 * Math.sin(a)).add(up.clone().multiplyScalar(2.6));
        look = c.clone().add(up.clone().multiplyScalar(1.2)); fov = 46; damp = false; break;
      }
      case 'photo': {
        const h = new THREE.Vector3(fin.tx, 0, fin.tz); const r = right(h);
        pos = new THREE.Vector3(fin.x, fin.y, fin.z).addScaledVector(r, 8.5).add(up.clone().multiplyScalar(1.3));
        look = new THREE.Vector3(fin.x, fin.y + 1.1, fin.z);
        fov = 40; damp = false; break;
      }
      case 'distracted': {
        const f = focus(s.ids, b); const r = right(f.h);
        // the fairground sits between the GPS diversion and the usual course
        const q = world.anchors.nearestOnRibbon(f.p.x, f.p.z);
        const side = Math.sign((q[0] - f.p.x) * r.x + (q[1] - f.p.z) * r.z) || 1; const toFair = r.clone().multiplyScalar(side);
        if (u < 0.55) {
          // where the runner is gawping: camera on that line so we get the heart eyes + pop
          const dir = f.h.clone().multiplyScalar(0.55).addScaledVector(toFair, 0.85).normalize();
          pos = f.p.clone().addScaledVector(dir, 5.2).add(up.clone().multiplyScalar(2.0));
          look = f.p.clone().add(up.clone().multiplyScalar(1.85));
          fov = 46;
        } else {
          // high and wide from the course side: runner veering off with the rides beyond
          pos = f.p.clone().addScaledVector(f.h, -12).addScaledVector(toFair, -9).add(up.clone().multiplyScalar(7.5));
          look = f.p.clone().addScaledVector(toFair, 10).add(up.clone().multiplyScalar(2.5));
          fov = 52;
        }
        break;
      }
      default: {
        const f = focus(s.ids || [], b);
        pos = f.p.clone().addScaledVector(f.h, -10).add(up.clone().multiplyScalar(4)); look = f.p.clone();
      }
    }
    return { pos, look, fov, damp };
  }

  let phase = 0;
  function update(b, dt, shots) {
    const s = shots.find((x) => b >= x.a && b < x.b) || shots.at(-1);
    const ph = s.type === 'distracted' && (b - s.a) / (s.b - s.a) >= 0.55 ? 1 : 0;
    const cut = s !== shot || ph !== phase; phase = ph;
    shot = s;
    const r = evaluate(s, b, dt);
    if (!r) return { shot: s, cut };
    // keep camera above terrain
    const gy = C.heightAt(r.pos.x, r.pos.z) + 0.8;
    if (r.pos.y < gy) r.pos.y = gy;
    if (cut || !sm.init || !r.damp) {
      cam.pos.copy(r.pos); cam.look.copy(r.look); sm.fov = r.fov; sm.init = true;
    } else {
      // damp relative to the moving look target so fast motion doesn't lag
      const k = 1 - Math.exp(-4.5 * dt);
      const prevOff = cam.pos.clone().sub(cam.look);
      const newOff = r.pos.clone().sub(r.look);
      prevOff.lerp(newOff, k);
      // the look target is already a smooth function of time: follow it exactly, damp only the framing offset
      cam.look.copy(r.look);
      cam.pos.copy(cam.look).add(prevOff);
      sm.fov += (r.fov - sm.fov) * k;
    }
    camera.position.copy(cam.pos); camera.lookAt(cam.look);
    if (Math.abs(camera.fov - sm.fov) > 0.01) { camera.fov = sm.fov; camera.updateProjectionMatrix(); }
    return { shot: s, cut };
  }
  function reset() { sm.init = false; shot = null; }
  return { update, reset, evaluate, get shot() { return shot; }, cam };
}

export function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
