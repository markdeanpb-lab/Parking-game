// The cutscenes themselves (first batch of 12 + the funfair five-beat package). Each SCENES[kind](K, cs) returns an
// instance { update(t, dt, b, {gagDur}), dispose(), setVisible(v), camera?, pip?, hide?, banner?, tail?(t, dt, b) }.
// Pausing scenes get gag time (after the freeze-frame sting). Tone: affectionate slapstick, wordless or one line, Mark
// always the hero; captions <= 4 words.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { toon, gradientMap } from '../toon.js';
import { PATH_W } from '../course.js';
import { raceToBroadcast } from '../../../../server/game/raceplan.mjs';
import {
  Bag, makeActor, CAST, makeGoose, makeDuck, makeCone, makeFlask, makeFlag, makeTree, makeBench, makeCloud, makeRain, makeUmbrella, makePuffs,
  bubbleTexture, sprite, popScale, signTexture, board, openSide, stageAt, smooth, easeOut, backOut, lerp, clamp01, V, outlinedText, roundRect, rigOf,
} from './kit.js';

// ---------------- shared helpers ----------------
function base(K, extra = {}) {
  const bag = new Bag(K.scene);
  const I = {
    bag,
    setVisible(v) { for (const r of bag.roots) r.visible = v; for (const a of bag.actors) a.root.visible = v; },
    dispose() { bag.dispose(); },
    ...extra,
  };
  return I;
}
const cues = () => { const done = new Set(); return (key, cond, fn) => { if (cond && !done.has(key)) { done.add(key); fn(); } }; };
const yawTo = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);
const drive = (A, dt, state, variant = null, p = {}) => { A.r.set(state, variant); A.r.update(dt, p); };
function actor(K, I, info, opts) { const A = makeActor(I.bag, info, opts); K.scene.add(A.root); return A; }
function place(A, pos, yaw) { A.root.position.copy(pos); A.root.rotation.set(0, yaw, 0); }
const wp = (o, out = new THREE.Vector3()) => { o.updateWorldMatrix(true, false); return o.getWorldPosition(out); };
// play a beat list at a time scale: nominal gag length -> the actual gag duration
const tscale = (g, gagDur, nominal) => (gagDur > 0 && nominal > 0 ? g * (nominal / gagDur) : g);
// a camera setter that targets the main camera, or the picture-in-picture camera for inset variants
function shooter(K, cs) { const pip = cs.mode === 'inset' && cs.params?.pip; return (pos, look, fov = 40, roll = 0) => (pip ? K.pipCamSet(pos, look, fov) : K.cam(pos, look, fov, roll)); }
// inset (PiP) variant of a staged gag: the staged copy shows only in the inset, the real runner is hidden there
function asInset(K, cs, I) {
  if (!(cs.mode === 'inset' && cs.params?.pip)) return I;
  I.camera = false; I.pip = true; I.hide = 'none'; I.pipHide = [cs.who];
  Object.defineProperty(I, 'pipOnly', { get: () => [...I.bag.roots, ...I.bag.actors.map((a) => a.root)] });
  return I;
}
function arrowTexture(bag, colour) {
  return bag.tex(128, 160, (g) => {
    g.clearRect(0, 0, 128, 160); g.fillStyle = colour; g.strokeStyle = '#1a1420'; g.lineWidth = 10; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(40, 10); g.lineTo(88, 10); g.lineTo(88, 80); g.lineTo(120, 80); g.lineTo(64, 150); g.lineTo(8, 80); g.lineTo(40, 80); g.closePath(); g.fill(); g.stroke();
  });
}
function noteSprites(I, n = 4) {
  // a drawn quaver (no font glyph needed)
  const tex = I.bag.tex(128, 128, (g) => {
    g.clearRect(0, 0, 128, 128); g.fillStyle = '#ff3d8b'; g.strokeStyle = '#1a1420'; g.lineWidth = 7; g.lineJoin = 'round';
    g.beginPath(); g.ellipse(44, 96, 22, 16, -0.4, 0, 7); g.fill(); g.stroke();
    g.fillRect(60, 22, 10, 74); g.strokeRect(60, 22, 10, 74);
    g.beginPath(); g.moveTo(70, 22); g.quadraticCurveTo(108, 38, 100, 72); g.quadraticCurveTo(96, 50, 70, 46); g.closePath(); g.fill(); g.stroke();
  });
  return Array.from({ length: n }, () => sprite(I.bag, tex, 0.7, 1));
}

// diversion data (client course model) for a funfair cutscene
function divOf(K, cs) { const ds = K.C.diversions[cs.who] || []; return ds[(cs.params?.lap || 1) - 1] || ds[0] || null; }
// which side of the course (runner's right = +1) the fair / diversion bulges to
function fairSide(K, cs) {
  const d = divOf(K, cs); if (!d) return 1;
  const mid = (d.fromM + d.toM) / 2, f = stageAt(K.C, mid);
  const P = d.path[Math.floor(d.path.length / 2)];
  return ((P[0] - f.x) * f.rx + (P[1] - f.z) * f.rz) >= 0 ? 1 : -1;
}

// ---------------- persistent funfair dressing: diversion sign + Marshal Maureen + EXIT arch (both laps) ----------------
function fairSetup(K, cs) {
  const P = K.persist;
  if (P.store.has('fair')) return P.store.get('fair');
  const bag = P.bag;
  const d = (K.C.diversions[cs.who] || [])[0];
  const lap1 = d || { fromM: cs.params.fromM, toM: cs.params.toM };
  const s = fairSide(K, cs);
  const fSign = stageAt(K.C, lap1.fromM - 6);
  const g = bag.group();
  // big yellow diamond road sign facing oncoming runners (two single-sided faces so text never reads mirrored;
  // the arrow points at the fair from whichever side you look)
  const signFace = (arrowDir) => bag.tex(512, 512, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.save(); c.translate(w / 2, h / 2); c.rotate(Math.PI / 4);
    c.fillStyle = '#1a1420'; roundRect(c, -170, -170, 340, 340, 30); c.fill();
    c.fillStyle = '#ffd23f'; roundRect(c, -152, -152, 304, 304, 22); c.fill();
    c.restore();
    outlinedText(c, 'DIVERSION', w / 2, h / 2 - 30, 76, '#1a1420', '#ffd23f', 0.0001);
    c.fillStyle = '#1a1420'; c.save(); c.translate(w / 2, h / 2 + 62); c.scale(arrowDir, 1);
    c.beginPath(); c.moveTo(-80, -18); c.lineTo(20, -18); c.lineTo(20, -48); c.lineTo(84, 0); c.lineTo(20, 48); c.lineTo(20, 18); c.lineTo(-80, 18); c.closePath(); c.fill(); c.restore();
  });
  const faceMat = (tex) => bag.add(new THREE.MeshToonMaterial({ map: tex, gradientMap: gradientMap(), transparent: true, alphaTest: 0.5 }));
  const pg = bag.add(new THREE.PlaneGeometry(2.6, 2.6));
  // runner's view: the fair on his right (s>0) -> arrow right; seen from beyond the sign it is the other way round
  const signM = new THREE.Group();
  const fA = new THREE.Mesh(pg, faceMat(signFace(-s))); signM.add(fA);
  const fB = new THREE.Mesh(pg, faceMat(signFace(s))); fB.rotation.y = Math.PI; signM.add(fB);
  const sign = new THREE.Group(); sign.add(signM); signM.position.y = 2.75;
  const post = bag.M(new THREE.CylinderGeometry(0.07, 0.07, 1.6, 8).translate(0, 0.8, 0), '#e9eef5', 2); sign.add(post);
  const feet = bag.M(new THREE.BoxGeometry(1.0, 0.12, 0.5), '#1a1420', 0); feet.position.y = 0.06; sign.add(feet);
  fSign.place(sign, 0, s * (PATH_W / 2 + 0.9), -0.12, Math.PI);
  g.add(sign);
  // Marshal Maureen with a lollipop paddle
  const M = makeActor(bag, CAST.maureen, { vest: '#d8ff1f' }); g.add(M.root);
  const mPos = fSign.p(1.6, s * (PATH_W / 2 + 2.3), 0); place(M, mPos, fSign.yaw + Math.PI - s * 0.5);
  const paddle = new THREE.Group();
  const pole = bag.M(new THREE.CylinderGeometry(0.035, 0.035, 1.3, 6).translate(0, 0.65, 0), '#f4f4f4', 1.5); paddle.add(pole);
  const disc = board(bag, signTexture(bag, ['THIS', 'WAY'], { bg: '#ffffff', fg: '#ff3d3d', w: 256, h: 256, round: 128 }), 0.75, 0.75, '#ff3d3d', 0.06);
  disc.position.y = 1.55; paddle.add(disc);
  M.rig.R.hand.add(paddle); paddle.rotation.x = Math.PI; paddle.position.y = -0.05;
  // EXIT arch where his route rejoins the course
  const arch = new THREE.Group();
  if (d) {
    const fx = stageAt(K.C, d.toM - 30, cs.who);
    for (const l of [-2.2, 2.2]) { const p = bag.M(new THREE.CylinderGeometry(0.16, 0.2, 3.6, 8).translate(0, 1.8, 0), '#ff3d8b', 2.5); p.position.set(l, 0, 0); arch.add(p); }
    const top = board(bag, signTexture(bag, ['EXIT ➜ COURSE'], { bg: '#ff3d8b', fg: '#ffffff', w: 512, h: 128, round: 30 }), 5.0, 1.25, '#1a1420', 0.18);
    top.position.y = 3.9; arch.add(top);
    fx.place(arch, 0, 0, -0.16, 0); arch.rotation.y = fx.yaw + Math.PI; g.add(arch);
  }
  const fair = { g, sign, M, s, fSign, pop: 0, popT: 0, arch };
  sign.scale.setScalar(0.001);
  P.updaters.set('fair', (dt) => {
    fair.popT += dt;
    const k = fair.pop > 0 ? backOut(Math.min(1, fair.popT / 0.45)) : 0.001;
    sign.scale.setScalar(Math.max(0.001, k));
    const t = fair.popT;
    drive(M, dt, 'idle');
    M.rig.R.sh.rotation.set(-2.5 + Math.sin(t * 5) * 0.35, 0, 0.3); M.rig.R.el.rotation.x = -0.2;
    M.rig.L.sh.rotation.set(0, 0, -0.5 - Math.max(0, Math.sin(t * 5)) * 0.3);
    M.rig.head.rotation.y = Math.sin(t * 2) * 0.3;
  });
  P.store.set('fair', fair);
  return fair;
}
function popSign(fair) { if (!fair.pop) { fair.pop = 1; fair.popT = 0; } }

// a carried plush goose on the REAL runner for the rest of the race (lap-1 prize, lap-2 upgrade)
function carryPlush(K, who, scale, kind = 'goose') {
  const P = K.persist; const r = K.runners[who]; if (!r) return;
  const old = P.store.get('plush'); if (old) { old.parent?.remove(old); }
  const g = new THREE.Group(); P.bag.roots.push(g);
  const goose = kind === 'duck' ? { root: makeDuck(P.bag, scale * 2.6) } : makeGoose(P.bag, { plush: true, scale }); goose.root.rotation.y = Math.PI; goose.root.position.set(0, -0.35 * scale, 0.1);
  g.add(goose.root); g.position.set(0, r.hipH + 0.25, 0.55 + 0.2 * scale); r.root.add(g);
  P.store.set('plush', g);
  P.updaters.set('plush', () => {
    // hug pose on the real runner (applied after the race view animates him)
    const rig = P.store.get('plushRig') || (() => { const x = rigFor(r); P.store.set('plushRig', x); return x; })();
    if (!rig || r.root.visible === false) return;
    for (const [i, a] of rig.arms.entries()) { a.sh.rotation.x = -1.15 + Math.sin(performance.now() / 160 + i) * 0.06; a.sh.rotation.z = (i ? 1 : -1) * 0.45; a.el.rotation.x = -1.1; }
  });
}
const rigCache = new WeakMap();
function rigFor(r) { if (!rigCache.has(r)) { try { rigCache.set(r, rigOf(r)); } catch { rigCache.set(r, null); } } return rigCache.get(r); }

// ======================================================================================================
export const SCENES = {};

// ---------- funfair beat 1: the sign ----------
SCENES.funfair_sign = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const fair = fairSetup(K, cs); popSign(fair);
  const cue = cues();
  I.update = (t) => {
    cue('line', t > 0.15, () => K.say(cs.lines?.[0]));
    K.ov.caption(t > 0.25 && t < cs.durationS - 0.15 ? 'DIVERSION!' : null, { yellow: true });
    const s = fair.s, f = fair.fSign;
    // low, past the sign, looking back at the oncoming field: sign + marshal big in the foreground
    K.cam(f.p(9 + t * 0.4, -s * 1.2, 1.5), f.p(-6, s * 2.6, 1.9), 46);
  };
  return I;
};

// ---------- funfair beat 2: the stretch (clock only; handled by the player's rate()) ----------
SCENES.funfair_stretch = (K) => { const I = base(K, { hide: 'none', stamp: false }); I.update = () => {}; return I; };

// ---------- funfair beat 3: drone over the whole fair, his real route drawn ----------
SCENES.funfair_drone = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const fair = fairSetup(K, cs); popSign(fair);
  const d = divOf(K, cs);
  const g = I.bag.group();
  const C = K.C;
  const pts = [];
  if (d) for (let s = 0; s <= d.len; s += 3.2) { let i = 0; while (i < d.cum.length - 2 && d.cum[i + 1] < s) i++; const f = (s - d.cum[i]) / Math.max(1e-6, d.cum[i + 1] - d.cum[i]); pts.push([d.path[i][0] + (d.path[i + 1][0] - d.path[i][0]) * f, d.path[i][1] + (d.path[i + 1][1] - d.path[i][1]) * f]); }
  const dotGeo = I.bag.add(new THREE.CylinderGeometry(1.5, 1.5, 0.25, 12));
  const dots = new THREE.InstancedMesh(dotGeo, I.bag.basic('#ff2d55'), Math.max(1, pts.length)); dots.frustumCulled = false; g.add(dots);
  const O = new THREE.Object3D();
  // the usual course: a bright white dashed centre line
  const fromM = (d?.fromM ?? cs.params.fromM) - 50, toM = (d?.toM ?? cs.params.toM) + 50;
  const dashGeo = I.bag.add(new THREE.BoxGeometry(0.7, 0.2, 3.2));
  const nD = Math.ceil((toM - fromM) / 7);
  const dashes = new THREE.InstancedMesh(dashGeo, I.bag.basic('#ffffff'), nD); dashes.frustumCulled = false; g.add(dashes);
  for (let i = 0; i < nD; i++) { const s = stageAt(C, fromM + i * 7); O.position.set(s.x, C.heightAt(s.x, s.z) + 0.35, s.z); O.rotation.set(0, s.yaw, 0); O.scale.setScalar(1); O.updateMatrix(); dashes.setMatrixAt(i, O.matrix); }
  dashes.instanceMatrix.needsUpdate = true;
  // frame: centre + extent of the bulge and course
  const allP = pts.length ? pts : [[cs.params.x || 0, cs.params.z || 0]];
  const cx = allP.reduce((a, p) => a + p[0], 0) / allP.length, cz = allP.reduce((a, p) => a + p[1], 0) / allP.length;
  const ext = Math.max(35, ...allP.map((p) => Math.hypot(p[0] - cx, p[1] - cz)));
  const centre = V(cx, C.heightAt(cx, cz), cz);
  const mid = stageAt(C, ((d?.fromM ?? 400) + (d?.toM ?? 800)) / 2);
  const away = V(-mid.rx * fair.s, 0, -mid.rz * fair.s).normalize(); // camera over the course side, looking across at the fair
  // label over the apex of the bulge
  let apex = pts[Math.floor(pts.length / 2)] || [cx, cz];
  for (const p of pts) { const l = (p[0] - mid.x) * mid.rx + (p[1] - mid.z) * mid.rz; const la = (apex[0] - mid.x) * mid.rx + (apex[1] - mid.z) * mid.rz; if (Math.abs(l) > Math.abs(la)) apex = p; }
  const lab = sprite(I.bag, bubbleTexture(I.bag, 'HIS ROUTE', { bg: '#ff2d55', fg: '#ffffff', w: 512, h: 220, size: 110 }), 15, 512 / 220);
  lab.position.set(apex[0], C.heightAt(apex[0], apex[1]) + 22, apex[1]); g.add(lab);
  const pub = K.pub(cs.who);
  const arrow = sprite(I.bag, arrowTexture(I.bag, pub?.colour?.primary || '#ffd23f'), 9, 128 / 160); g.add(arrow);
  const cue = cues();
  // beat 3a: a LOW wide establishing shot, rides filling the frame, the runner small among them
  const rides = K.funfair?.anchors?.rides || [];
  const fairC = K.funfair?.anchors?.center ? V(K.funfair.anchors.center.x, K.funfair.anchors.center.y, K.funfair.anchors.center.z) : centre.clone();
  const EST = 2.5;
  I.update = (t0, dt, b) => {
    if (t0 < EST) {
      const st = K.sim.stateAt(Math.max(0, b)).byId[cs.who];
      const rp = V(st.x, st.y, st.z);
      // stand beyond his diverted line, looking back across him at the rides
      const out = V(rp.x - fairC.x, 0, rp.z - fairC.z); if (out.lengthSq() < 1) out.copy(away).negate(); out.normalize();
      const lookAt = fairC.clone().lerp(rp, 0.3); lookAt.y = C.heightAt(lookAt.x, lookAt.z) + 9;
      const camP = rp.clone().addScaledVector(out, 26).add(V(0, 0, 0)).addScaledVector(V(-out.z, 0, out.x), -6 + t0 * 2.2); camP.y = C.heightAt(camP.x, camP.z) + 2.2;
      K.cam(camP, lookAt, 58, 0, { sun: 120 });
      arrow.position.set(st.x, st.y + 4.6 + Math.sin(t0 * 6) * 0.3, st.z); arrow.scale.set(1.6 * 128 / 160, 1.6, 1);
      dots.visible = false; lab.visible = false; dashes.visible = false;
      K.ov.caption(t0 > 0.3 ? 'MEANWHILE, AT THE FAIR…' : null, { yellow: true });
      void rides;
      return;
    }
    dots.visible = true; dashes.visible = true; arrow.scale.set(9 * 128 / 160, 9, 1);
    const t = t0 - EST;
    const reveal = clamp01((t - 0.2) / 1.8);
    const n = Math.floor(pts.length * reveal);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i]; const k = i < n ? 1 + Math.sin(t * 8 - i * 0.35) * 0.18 : 0.0001;
      O.position.set(p[0], C.heightAt(p[0], p[1]) + 0.5, p[1]); O.rotation.set(0, 0, 0); O.scale.set(k, 1, k); O.updateMatrix(); dots.setMatrixAt(i, O.matrix);
    }
    dots.instanceMatrix.needsUpdate = true;
    popScale(lab, t, 1.2, 0.35);
    const st = K.sim.stateAt(Math.max(0, b)).byId[cs.who];
    arrow.position.set(st.x, st.y + 8 + Math.sin(t * 6) * 0.8, st.z);
    cue('cap', true, () => {});
    K.ov.caption(t > 0.2 && t0 < cs.durationS - 0.1 ? 'HIS REAL GPS ROUTE' : null, { yellow: true });
    // high drone, slow drift
    const dist = ext * 1.75 + 30, el = 0.82 + t * 0.02;
    const dir = away.clone().applyAxisAngle(V(0, 1, 0), -0.25 + t * 0.05);
    const pos = centre.clone().addScaledVector(dir, Math.cos(el) * dist).add(V(0, Math.sin(el) * dist, 0));
    K.cam(pos, centre.clone().add(V(0, 4, 0)), 44, 0, { occlude: false, sun: Math.min(220, ext * 1.4) });
  };
  return I;
};

// ---------- funfair beat 5: back on course ----------
SCENES.funfair_rejoin = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const fair = fairSetup(K, cs);
  const d = divOf(K, cs);
  const toM = d?.toM ?? cs.params.toM;
  const fR = stageAt(K.C, toM + 10);
  const cue = cues();
  I.update = (t, dt, b) => {
    const st = K.sim.stateAt(Math.max(0, b)).byId[cs.who];
    const look = V(st.x, st.y + 1.3, st.z);
    K.cam(fR.p(5, -fair.s * 5.5, 1.7), look, 34);
    cue('stamp', t > 0.55, () => K.ov.big('BACK ON COURSE', '#2ec27e'));
    cue('line', t > 0.75, () => K.say(cs.lines?.[0]));
  };
  return I;
};

// ---------- the fair stage (hero stall placement on his own diverted line) ----------
function fairStage(K, cs) {
  const f = stageAt(K.C, cs.params.atM, cs.who);
  const ff = K.funfair?.anchors?.center;
  let s2;
  if (ff) s2 = ((ff.x - f.x) * f.rx + (ff.z - f.z) * f.rz) >= 0 ? 1 : -1;
  else s2 = -fairSide(K, cs);
  return { f, s2 };
}
function makeHookStall(I) {
  const bag = I.bag;
  const g = new THREE.Group();
  const booth = bag.M(new RoundedBoxGeometry(4.6, 2.6, 2.2, 2, 0.2), '#fff6e0'); booth.position.set(0, 1.3, -0.6); g.add(booth);
  const counter = bag.M(new RoundedBoxGeometry(4.8, 1.1, 0.8, 2, 0.15), '#57c7ff'); counter.position.set(0, 0.55, 0.75); g.add(counter);
  const awT = bag.add(new THREE.CanvasTexture((() => { const c = document.createElement('canvas'); c.width = 256; c.height = 32; const x = c.getContext('2d'); for (let i = 0; i < 10; i++) { x.fillStyle = i % 2 ? '#ffffff' : '#57c7ff'; x.fillRect(i * 25.6, 0, 26, 32); } return c; })()));
  awT.colorSpace = THREE.SRGBColorSpace;
  const awn = bag.M(new THREE.BoxGeometry(5.2, 0.18, 2.0), bag.mat('#ffffff', { map: awT }), 2.5); awn.position.set(0, 3.0, 0.5); awn.rotation.x = 0.3; g.add(awn);
  for (const sx of [-1, 1]) { const po = bag.M(new THREE.CylinderGeometry(0.09, 0.09, 2.8, 6), '#ffffff', 1.5); po.position.set(sx * 2.4, 1.5, 1.35); g.add(po); }
  const sign = board(bag, signTexture(bag, ['HOOK-A-DUCK'], { bg: '#57c7ff', fg: '#ffffff', w: 768, h: 192, round: 40 }), 4.6, 1.15); sign.position.set(0, 3.95, 0.2); g.add(sign);
  // prize shelf with a row of little plush geese
  for (let i = 0; i < 4; i++) { const pg = makeGoose(bag, { plush: true, scale: 0.42 }); pg.root.position.set(-1.6 + i * 1.05, 1.15, -0.2); g.add(pg.root); }
  const pool = bag.M(new THREE.CylinderGeometry(1.6, 1.7, 0.6, 24), '#ff3d8b', 2.5); pool.position.set(0, 0.3, 2.3); g.add(pool);
  const water = new THREE.Mesh(bag.add(new THREE.CircleGeometry(1.42, 24).rotateX(-Math.PI / 2)), bag.mat('#8fe3ff')); water.position.set(0, 0.58, 2.3); g.add(water);
  const ducks = [];
  for (let k = 0; k < 7; k++) { const dk = makeDuck(bag, 1.15); g.add(dk); ducks.push({ o: dk, a: (k / 7) * Math.PI * 2, off: 0 }); }
  const goose = makeGoose(bag, { costume: true, scale: 0.62 }); g.add(goose.root);
  return { g, ducks, goose, poolLocal: V(0, 0.6, 2.3) };
}

// ---------- F2 Hook-a-Duck Hustle (lap 1: hook + plush; lap 2: trade it in for a bigger one) ----------
SCENES.hook_a_duck = (K, cs) => {
  const I = asInset(K, cs, base(K, { camera: true }));
  const shot = shooter(K, cs);
  fairSetup(K, cs);
  const lap2 = cs.params.variant === 'swap' || cs.params.lap === 2;
  const { f, s2 } = fairStage(K, cs);
  const root = I.bag.group();
  const stall = makeHookStall(I); root.add(stall.g);
  const stallPos = f.p(0, s2 * 5.4, -0.16); stall.g.position.copy(stallPos);
  stall.g.rotation.y = Math.atan2(-s2 * f.rx, -s2 * f.rz);
  const pool = stall.g.localToWorld(stall.poolLocal.clone());
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const markPos = f.p(0, s2 * 1.75); place(A, markPos, yawTo(markPos, pool));
  const H = actor(K, I, CAST.stall, { hideBib: true });
  const hPos = stall.g.localToWorld(V(0.9, 0, 0.1)); place(H, hPos, stall.g.rotation.y);
  // hook pole
  const pole = new THREE.Group(); root.add(pole);
  const rod = I.bag.M(new THREE.CylinderGeometry(0.035, 0.035, 2.4, 6).rotateX(Math.PI / 2).translate(0, 0, 1.2), '#c99a5a', 1.5); pole.add(rod);
  const line = I.bag.M(new THREE.CylinderGeometry(0.012, 0.012, 1, 4).translate(0, -0.5, 0), '#1a1420', 0); line.position.z = 2.4; pole.add(line);
  const hook = I.bag.M(new THREE.TorusGeometry(0.08, 0.02, 6, 10, Math.PI * 1.4), '#d0d6e0', 1.2); pole.add(hook);
  const prizeKind = cs.params.prize === 'duck' ? 'duck' : 'goose';
  const prize = (sc) => (prizeKind === 'duck' ? { root: makeDuck(I.bag, sc * 2.6), pose() {} } : makeGoose(I.bag, { plush: true, scale: sc }));
  const plushSmall = prize(lap2 ? 1.25 : 0.42); root.add(plushSmall.root);
  const plushBigScale = 2.9;
  const plushBig = prize(plushBigScale); root.add(plushBig.root); plushBig.root.visible = false;
  const honk = sprite(I.bag, bubbleTexture(I.bag, 'HONK!', { burst: true, w: 512, h: 300, size: 120, bg: '#ffffff' }), 0.9, 512 / 300); root.add(honk); honk.visible = false;
  const ding = sprite(I.bag, bubbleTexture(I.bag, 'WINNER!', { burst: true, w: 512, h: 300, size: 110, bg: '#ffd23f' }), 1.1, 512 / 300); root.add(ding); ding.visible = false;
  const cue = cues();
  const caught = { k: -1 };
  const NOM = lap2 ? 4.1 : 6.1;
  const tmp = V(), tmp2 = V();
  I.update = (g0, dt, b, { gagDur }) => {
    const g = tscale(g0, gagDur, NOM);
    const t = g;
    // ducks circle (and dodge the hook)
    const hookW = wp(hook, tmp);
    for (const [k, dk] of stall.ducks.entries()) {
      if (k === caught.k) continue;
      dk.a += dt * 0.7;
      const lp = V(Math.cos(dk.a) * 1.05, 0.55, 2.3 + Math.sin(dk.a) * 1.05);
      const wpos = stall.g.localToWorld(lp.clone());
      const dd = Math.hypot(wpos.x - hookW.x, wpos.z - hookW.z);
      dk.off = lerp(dk.off, dd < 0.7 && !lap2 && t > 1.2 && t < 3.3 ? 0.55 : 0, Math.min(1, dt * 10));
      lp.x *= 1 - dk.off * 0.6; lp.z = 2.3 + (lp.z - 2.3) * (1 - dk.off * 0.6);
      dk.o.position.copy(lp); dk.o.position.y = 0.5 + Math.sin(t * 6 + k) * 0.03; dk.o.rotation.y = -dk.a;
    }
    const ga = -t * 0.55 + 1.7;
    stall.goose.root.position.set(Math.cos(ga) * 0.7, 0.18, 2.3 + Math.sin(ga) * 0.7); stall.goose.root.rotation.y = -ga + Math.PI;
    stall.goose.pose({ honk: t > 2.0 && t < 2.7 ? 1 : 0, t, look: Math.sin(t * 3) * 0.4 });
    honk.visible = !lap2 && t > 2.0 && t < 2.8; if (honk.visible) { wp(stall.goose.head, honk.position).y += 0.9; popScale(honk, t, 2.0); }
    // the stallholder
    drive(H, dt, t > (lap2 ? 1.0 : 4.0) && t < (lap2 ? 2.6 : 5.2) ? 'pose' : 'idle', 'point');
    if (!lap2) {
      // Mark fishing, then the prize, then off he sprints with it
      if (t < 4.2) {
        drive(A, dt, 'idle', null, { expr: t > 3.2 ? 'happy' : t > 2.0 && t < 2.8 ? 'worried' : 'effort' });
        const r = A.rig; r.torso.rotation.x = 0.45; for (const a of r.arms) { a.sh.rotation.set(-1.25, 0, 0); a.el.rotation.x = -0.35; } r.head.rotation.x = 0.35;
        r.arms[0].sh.rotation.z = 0.25; r.arms[1].sh.rotation.z = -0.25;
        const chest = A.root.localToWorld(V(0, A.r.hipH + 0.5, 0.45));
        pole.position.copy(chest); pole.lookAt(pool.clone().setY(chest.y + 0.3));
        const dip = t < 1.4 ? 0.5 : t < 3.2 ? 0.55 + Math.sin(t * 7) * 0.25 : 0.55 - Math.min(1.1, (t - 3.2) * 2.5);
        line.scale.y = Math.max(0.05, dip + 0.3); hook.position.set(0, -(dip + 0.3), 2.4);
        pole.visible = true;
        if (t > 3.2 && caught.k < 0) caught.k = 2;
        if (caught.k >= 0) { const dk = stall.ducks[caught.k].o; stall.g.worldToLocal(wp(hook, tmp2)); dk.position.copy(tmp2).add(V(0, -0.35, 0)); }
      } else {
        pole.visible = false;
        if (caught.k >= 0) stall.ducks[caught.k].o.visible = false;
        const run = Math.max(0, t - 5.0);
        const pos = f.p(run * 6.5, s2 * 1.75 * (1 - Math.min(1, run)), 0);
        place(A, pos, t < 5.0 ? yawTo(markPos, pool) : f.yaw);
        drive(A, dt, t < 5.0 ? 'celebrate' : 'run', 'jump', { speed: 6.5, rate: 1 });
        if (t >= 5.0) for (const [i, a] of A.rig.arms.entries()) { a.sh.rotation.set(-1.15, 0, i ? 0.45 : -0.45); a.el.rotation.x = -1.1; }
      }
      cue('ding', t > 3.25, () => {});
      ding.visible = t > 3.25 && t < 4.4; if (ding.visible) { ding.position.copy(markPos).add(V(0, 3.4, 0)); popScale(ding, t, 3.25); }
      // the prize: from the shelf into his arms
      const handK = smooth(4.2, 4.9, t);
      const shelf = stall.g.localToWorld(V(0.6, 1.4, 0.2));
      const arms = A.root.localToWorld(V(0, A.r.hipH + 0.1, 0.75));
      plushSmall.root.position.copy(shelf).lerp(arms, handK); plushSmall.root.scale.setScalar(lerp(0.42, 1.3, handK) / 0.42 * 0.42 / 0.42);
      plushSmall.root.rotation.y = handK > 0.5 ? A.root.rotation.y + Math.PI : stall.g.rotation.y;
      plushSmall.root.scale.setScalar(lerp(0.42, 1.25, handK) * (prizeKind === 'duck' ? 2.6 : 1));
      cue('line', t > 4.4, () => K.say(cs.lines?.[0]));
      // cameras
      if (t < 1.4) { shot(f.p(-7.5, -s2 * 2.6, 2.6), f.p(0, s2 * 3.2, 1.2), 42); K.ov.caption(t > 0.2 ? 'HOOK-A-DUCK!' : null, { yellow: true }); }
      else if (t >= 2.05 && t < 2.8) {
        // face reaction on the HONK: front three-quarter, close
        const fd = pool.clone().sub(markPos).setY(0).normalize(), sd = V(-fd.z, 0, fd.x);
        A.rig.torso.rotation.x = 0.0; A.rig.head.rotation.x = -0.2; A.rig.head.rotation.y = 0.35; // startled upright
        const headP2 = A.root.localToWorld(V(0, A.r.height - 0.5, 0));
        shot(headP2.clone().addScaledVector(fd, 2.3).addScaledVector(sd, 1.1).add(V(0, -0.15, 0)), headP2.clone().add(V(0, 0.05, 0)), 34);
        honk.visible = false; A.r.setPop('!'); K.ov.caption('HANG ON…');
      }
      else if (t < 3.6) { A.r.setPop(null); shot(f.p(3.0, s2 * 0.9, 2.3), pool.clone().lerp(markPos, 0.35).add(V(0, 0.5, 0)), 44); K.ov.caption(null); }
      else if (t < 5.0) { shot(f.p(4.6, -s2 * 1.6, 2.0), markPos.clone().lerp(stallPos, 0.35).add(V(0, 1.4, 0)), 42); K.ov.caption(t > 4.3 ? 'WINNER!' : null, { yellow: true }); }
      else { const ap = A.root.position; shot(ap.clone().add(V(-f.rx * s2 * 6.5, 2.2, -f.rz * s2 * 6.5)).addScaledVector(V(f.tx, 0, f.tz), 1.5), ap.clone().add(V(0, 1.3, 0)), 40); K.ov.caption(null); }
      if (t > 5.6 && !I._carry) { I._carry = true; carryPlush(K, cs.who, 1.3, prizeKind); }
    } else {
      // lap 2: the old prize goes back ON the counter (it stays there, for scale), a visibly bigger one comes out
      pole.visible = false;
      for (const dk of stall.ducks) dk.o.visible = true;
      const give = smooth(0.25, 0.9, t), big = smooth(1.3, 2.1, t);
      const walking = t > 2.7;
      drive(A, dt, walking ? 'run' : t > 1.9 ? 'celebrate' : 'idle', 'jump', { speed: 3.0, rate: 1, expr: t > 1.5 ? 'love' : 'normal' });
      const run = Math.max(0, t - 2.7);
      const pos = f.p(run * 2.4, s2 * 1.75 * (1 - Math.min(1, run * 0.8)), Math.abs(Math.sin(run * 6)) * 0.08);
      place(A, pos, !walking ? yawTo(markPos, pool) : f.yaw);
      if (t < 1.9 || walking) for (const [i, a] of A.rig.arms.entries()) { a.sh.rotation.set(walking ? -1.9 : -1.35 * (1 - give * 0.6), 0, i ? 0.5 : -0.5); a.el.rotation.x = walking ? -0.9 : -0.5; }
      if (walking) A.rig.torso.rotation.x = -0.3 + Math.sin(t * 9) * 0.07; // staggering under it
      const arms = A.root.localToWorld(V(0, A.r.hipH + 0.15, 0.85));
      const counterW = stall.g.localToWorld(V(-1.4, 1.15, 0.75));
      plushSmall.root.position.copy(arms).lerp(counterW, give); plushSmall.root.visible = true;
      plushSmall.root.rotation.y = give > 0.5 ? stall.g.rotation.y + Math.PI : A.root.rotation.y + Math.PI;
      plushBig.root.visible = big > 0;
      const behind = stall.g.localToWorld(V(0.7, 0.4, 0.4));
      const carry = smooth(2.2, 2.8, t);
      plushBig.root.position.copy(behind).add(V(0, big * 0.6, 0)).lerp(A.root.localToWorld(V(0, A.r.hipH - 0.3, 1.2)), carry);
      plushBig.root.scale.setScalar(lerp(0.3, 1, big) * plushBigScale); plushBig.root.rotation.y = carry > 0.5 ? A.root.rotation.y + Math.PI : stall.g.rotation.y + Math.PI;
      plushBig.pose?.({ t });
      cue('line', t > 1.6, () => K.say(cs.lines?.[0]));
      K.ov.caption(t < 1.3 ? (t > 0.3 ? 'SWAP?' : null) : 'TRADED UP!', { yellow: t >= 1.3 });
      // side-on two-shot across the counter: the small prize and the giant one in the same frame
      const mid = markPos.clone().lerp(stallPos, 0.5);
      if (!walking) shot(f.p(-2.2, -s2 * 4.6, 2.4), mid.clone().add(V(0, 1.5, 0)), 48);
      else { const ap = A.root.position; shot(ap.clone().addScaledVector(V(f.tx, 0, f.tz), 6).add(V(-f.rx * s2 * 2.5, 2.4, -f.rz * s2 * 2.5)), ap.clone().add(V(0, 1.8, 0)), 46); }
      if (t > 3.6 && !I._carry) { I._carry = true; carryPlush(K, cs.who, 2.0, prizeKind); }
    }
  };
  I.outro = () => { if (!I._carry) { I._carry = true; carryPlush(K, cs.who, lap2 ? 2.0 : 1.3, prizeKind); } };
  return I;
};

// ---------- F1 Test Your Strength (lap 1: creep to PARKRUNNER / launch; lap 2: DING, bell into the boating lake) ----------
function makeStrength(I, top = 'JEFF') {
  const bag = I.bag; const g = new THREE.Group();
  const H = 6.4;
  const base0 = bag.M(new RoundedBoxGeometry(1.8, 0.35, 1.8, 2, 0.08), '#2e6fe0'); base0.position.y = 0.17; g.add(base0);
  const labels = [[top, '#ff3d8b'], ['LEGEND', '#ff8a1f'], ['PARKRUNNER', '#ffd23f'], ['WOBBLY', '#8ee86b'], ['FEEBLE', '#57c7ff']];
  const tex = bag.tex(256, 1536, (c, w, h) => {
    c.fillStyle = '#1a1420'; roundRect(c, 0, 0, w, h, 30); c.fill();
    const n = labels.length;
    labels.forEach(([t, col], i) => { const y0 = 20 + (i * (h - 40)) / n, hh = (h - 40) / n - 14; c.fillStyle = col; roundRect(c, 18, y0, w - 36, hh, 18); c.fill(); outlinedText(c, t, w / 2, y0 + hh / 2, t.length > 8 ? 34 : 54, '#1a1420', col, 0.0001); });
  });
  const boardM = board(bag, tex, 1.15, H - 1.2, '#1a1420', 0.2); boardM.position.set(0, 0.35 + (H - 1.2) / 2, -0.15); g.add(boardM);
  const track = bag.M(new THREE.BoxGeometry(0.16, H - 0.9, 0.12), '#d0d6e0', 1.5); track.position.set(0, 0.35 + (H - 0.9) / 2, 0.02); g.add(track);
  const puck = bag.M(new RoundedBoxGeometry(0.5, 0.32, 0.32, 2, 0.08), '#ff2d55', 2.5); g.add(puck);
  const bellG = new THREE.Group(); bellG.position.set(0, H - 0.2, 0.05); g.add(bellG);
  const bell = bag.M(new THREE.SphereGeometry(0.42, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), '#ffd23f', 3); bell.rotation.x = 0; bellG.add(bell);
  const knob = bag.M(new THREE.SphereGeometry(0.1, 8, 6), '#ffd23f', 1.5); knob.position.y = 0.45; bellG.add(knob);
  const striker = bag.M(new RoundedBoxGeometry(0.9, 0.18, 0.7, 2, 0.06), '#ff3d3d', 2); striker.position.set(0, 0.42, 0.75); g.add(striker);
  const sign = board(bag, signTexture(bag, ['TEST YOUR', 'STRENGTH'], { bg: '#ffffff', fg: '#ff3d8b', w: 512, h: 256 }), 2.0, 1.0); sign.position.set(0, H + 0.6, 0); g.add(sign);
  const glow = new THREE.Mesh(bag.add(new THREE.PlaneGeometry(1.5, 1.2)), bag.basic('#fff27a', { transparent: true, opacity: 0.0, depthWrite: false })); glow.position.set(0, 0, -0.04); g.add(glow);
  const puckY = (f) => 0.6 + f * (H - 1.35);
  return { g, puck, bellG, striker, glow, puckY, H, labelY: (i) => 0.35 + (H - 1.2) * (1 - (i + 0.5) / labels.length) };
}
function makeMallet(I) {
  const g = new THREE.Group();
  const h = I.bag.M(new THREE.CylinderGeometry(0.045, 0.05, 1.5, 8).translate(0, 0.75, 0), '#c99a5a', 2); g.add(h);
  const head = I.bag.M(new THREE.CylinderGeometry(0.26, 0.26, 0.62, 14).rotateZ(Math.PI / 2), '#ff3d3d', 3); head.position.y = 1.5; g.add(head);
  const band = I.bag.M(new THREE.CylinderGeometry(0.27, 0.27, 0.14, 14).rotateZ(Math.PI / 2), '#ffffff', 0); band.position.y = 1.5; g.add(band);
  return g;
}
SCENES.test_strength = (K, cs) => {
  const I = asInset(K, cs, base(K, { camera: true }));
  const shot = shooter(K, cs);
  fairSetup(K, cs);
  const v = cs.params.variant || (cs.params.lap === 2 ? 'ding' : 'creep');
  const { f, s2 } = fairStage(K, cs);
  const root = I.bag.group();
  const T = makeStrength(I, cs.params.top === 'pam' ? 'PAM' : 'JEFF'); root.add(T.g);
  const towerPos = f.p(0, s2 * 4.3, -0.16); T.g.position.copy(towerPos); T.g.rotation.y = Math.atan2(-s2 * f.rx, -s2 * f.rz);
  const strikerW = T.g.localToWorld(V(0, 0, 0.75));
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const markPos = T.g.localToWorld(V(0, 0, 1.75)); markPos.y = K.C.heightAt(markPos.x, markPos.z) + 0.16;
  const faceTower = yawTo(markPos, towerPos);
  const H = actor(K, I, CAST.stall, { hideBib: true });
  const hPos = T.g.localToWorld(V(1.6, 0, 1.0)); hPos.y = K.C.heightAt(hPos.x, hPos.z) + 0.16; place(H, hPos, yawTo(hPos, strikerW));
  const mallet = makeMallet(I); A.root.add(mallet); mallet.position.set(0, A.r.hipH + 0.75, 0.05);
  const hMallet = makeMallet(I); H.root.add(hMallet); hMallet.position.set(0, H.r.hipH + 0.75, 0.05); hMallet.visible = v === 'launch';
  const whack = sprite(I.bag, bubbleTexture(I.bag, 'WHACK!', { burst: true, w: 512, h: 300, size: 115, bg: '#ffffff' }), 1.1, 512 / 300); root.add(whack); whack.visible = false;
  const ding = sprite(I.bag, bubbleTexture(I.bag, 'DING!', { burst: true, w: 512, h: 300, size: 140, bg: '#ffd23f' }), 1.6, 512 / 300); root.add(ding); ding.visible = false;
  // lake (lap-2 payoff)
  const lake = K.C.lake; let lakeP = null, lakeCam = null;
  if (lake) {
    const cx = lake.pts.reduce((a, p) => a + p[0], 0) / lake.pts.length, cz = lake.pts.reduce((a, p) => a + p[1], 0) / lake.pts.length;
    const wl = (lake._waterLevel ?? K.C.heightAt(cx, cz)) + 0.05;
    lakeP = V(cx, wl, cz);
    let best = lake.pts[0]; for (const p of lake.pts) if (Math.hypot(p[0] - towerPos.x, p[1] - towerPos.z) < Math.hypot(best[0] - towerPos.x, best[1] - towerPos.z)) best = p;
    const dir = V(best[0] - cx, 0, best[1] - cz); const L = dir.length(); dir.normalize();
    lakeP.addScaledVector(dir, L * 0.55);
    lakeCam = lakeP.clone().addScaledVector(dir, 7.5).add(V(0, 2.4, 0));
  }
  const splash = makePuffs(I.bag, 9, '#e9f8ff'); root.add(splash.root); splash.root.visible = false;
  const duck = makeDuck(I.bag, 2.2); root.add(duck); duck.visible = false;
  const flyBell = T.bellG.clone(); flyBell.visible = false; root.add(flyBell);
  const cue = cues();
  const NOM = v === 'ding' ? 5.1 : 5.6;
  let puckF = 0;
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    drive(H, dt, 'idle');
    if (v === 'ding') {
      // run-up, WHACK, puck to the top, DING, bell off into the sky... and into the boating lake
      const runK = clamp01(t / 0.9);
      const pos = markPos.clone().addScaledVector(V(f.tx, 0, f.tz), -(1 - runK) * 5);
      place(A, pos, runK < 1 ? f.yaw + (runK > 0.6 ? s2 * 0.8 : 0) : faceTower);
      drive(A, dt, runK < 1 ? 'run' : 'idle', null, { speed: 6, rate: 1, expr: 'effort' });
      const sw = t < 0.6 ? -0.5 : t < 0.95 ? lerp(-0.5, -0.9, (t - 0.6) / 0.35) : lerp(-0.9, 2.35, clamp01((t - 0.95) / 0.16));
      mallet.rotation.x = sw; for (const a of A.rig.arms) { a.sh.rotation.set(sw - Math.PI, 0, 0); a.el.rotation.x = -0.1; }
      puckF = t < 1.1 ? 0 : Math.min(1, (t - 1.1) * 4);
      cue('line', t > 1.25, () => K.say(cs.lines?.[0]));
      whack.visible = t > 1.1 && t < 1.5; if (whack.visible) { whack.position.copy(strikerW).add(V(0, 1.4, 0)); popScale(whack, t, 1.1); }
      ding.visible = t > 1.35 && t < 2.6; if (ding.visible) { wp(T.bellG, ding.position).y += 1.5; popScale(ding, t, 1.35); }
      // bell flight
      const bellStart = wp(T.bellG, V());
      const flyU = clamp01((t - 1.4) / 1.5);
      T.bellG.visible = t < 1.4;
      if (t >= 1.4 && lakeP) {
        flyBell.visible = flyU < 1 && t < 2.9;
        const p = bellStart.clone().lerp(lakeP, flyU); p.y += Math.sin(Math.PI * flyU) * 60 * (1 - flyU * 0.2) - flyU * 2;
        flyBell.position.copy(p); flyBell.rotation.set(t * 9, t * 5, 0); flyBell.scale.setScalar(2.6);
      }
      if (t < 1.4) { shot(f.p(-5.2, -s2 * 2.4, 2.0), towerPos.clone().add(V(0, 2.6, 0)), 50); K.ov.caption(t > 0.95 ? 'RUN-UP…' : null); }
      else if (t < 2.9) { shot(towerPos.clone().addScaledVector(V(-f.rx * s2, 0, -f.rz * s2), 6).add(V(0, 1, 0)), flyBell.visible ? flyBell.position : bellStart, 56); K.ov.caption('DING DING DING!', { yellow: true }); }
      else if (lakeP) {
        const u = t - 2.9;
        splash.root.visible = u < 1.2; splash.root.position.copy(lakeP); splash.update(clamp01(u / 1.1), 2.6);
        duck.visible = u > 0.9; duck.position.copy(lakeP).add(V(0, -0.9 + smooth(0.9, 1.4, u) * 0.92, 0)); duck.rotation.y = Math.atan2(lakeCam.x - lakeP.x, lakeCam.z - lakeP.z) + Math.sin(u * 3) * 0.3;
        flyBell.visible = u > 0.9; flyBell.rotation.set(0, 0, 0); flyBell.position.copy(duck.position).add(V(0, 1.05, 0)); flyBell.scale.setScalar(1.35);
        shot(lakeCam, lakeP.clone().add(V(0, 0.8, 0)), 36);
        K.ov.caption(u > 1.2 ? 'NICE HAT.' : 'SPLOOSH!', { yellow: u > 1.2 });
      }
    } else if (v === 'launch') {
      // he stands on the striker; the stallholder whacks the lever; he is catapulted back over onto the course
      const flyU = clamp01((t - 2.2) / 1.6);
      const startP = strikerW.clone().add(V(0, 0.15, 0));
      const land = f.p(9, -s2 * 2.0, 0);
      const p = startP.clone().lerp(land, flyU); p.y += Math.sin(Math.PI * flyU) * 9;
      if (t < 2.2) place(A, startP, faceTower + Math.PI); else { A.root.position.copy(p); A.root.rotation.set(flyU * 6.5, f.yaw, 0); }
      drive(A, dt, t < 2.2 ? 'pose' : 'celebrate', t < 2.2 ? 'flex' : 'jump', { expr: t > 2.2 ? 'happy' : 'normal' });
      mallet.visible = false;
      const hs = t < 1.2 ? lerp(0, -0.8, t / 1.2) : lerp(-0.8, 2.3, clamp01((t - 1.9) / 0.18));
      hMallet.rotation.x = hs; for (const a of H.rig.arms) { a.sh.rotation.set(hs - Math.PI, 0, 0); a.el.rotation.x = -0.1; }
      puckF = t < 2.1 ? 0 : Math.min(0.75, (t - 2.1) * 3);
      whack.visible = t > 2.05 && t < 2.5; if (whack.visible) { whack.position.copy(strikerW).add(V(0, 1.6, 0)); popScale(whack, t, 2.05); }
      cue('line', t > 2.4, () => K.say(cs.lines?.[0]));
      if (t < 2.2) { shot(f.p(-6, -s2 * 1.8, 2.2), towerPos.clone().lerp(hPos, 0.4).add(V(0, 1.8, 0)), 48); K.ov.caption(t > 0.4 ? 'HOLD STILL…' : null); }
      else { shot(f.p(-7, -s2 * 6, 3), p, 52); K.ov.caption('LAUNCHED!', { yellow: true }); }
    } else {
      // creep: swing, the puck creeps past FEEBLE and WOBBLY... and stops at PARKRUNNER. A shrug. Off he jogs.
      place(A, markPos, faceTower);
      const sw = t < 1.0 ? lerp(-0.2, -0.9, smooth(0, 1, t)) : lerp(-0.9, 2.35, clamp01((t - 1.0) / 0.16));
      if (t < 3.6) {
        drive(A, dt, 'idle', null, { expr: t < 1.2 ? 'effort' : t > 3.0 ? 'sad' : 'normal' });
        mallet.visible = true; mallet.rotation.x = sw; for (const a of A.rig.arms) { a.sh.rotation.set(sw - Math.PI, 0, 0); a.el.rotation.x = -0.1; }
        A.rig.torso.rotation.x = t > 1.0 ? 0.35 : -0.15;
      } else {
        mallet.visible = false;
        const run = Math.max(0, t - 4.4);
        if (t < 4.4) { drive(A, dt, 'celebrate', 'shrug'); } else { place(A, f.p(run * 5, s2 * 1.75 * (1 - Math.min(1, run)), 0), f.yaw); drive(A, dt, 'run', null, { speed: 4, rate: 1 }); }
      }
      const tgt = (T.labelY(2) - 0.6) / (T.H - 1.35);
      puckF = t < 1.15 ? 0 : tgt * easeOut((t - 1.15) / 1.6) + (t > 2.75 ? Math.sin((t - 2.75) * 14) * 0.012 * Math.max(0, 1 - (t - 2.75) * 2) : 0);
      whack.visible = t > 1.15 && t < 1.6; if (whack.visible) { whack.position.copy(strikerW).add(V(0, 3.2, 0)); popScale(whack, t, 1.15); }
      T.glow.material.opacity = t > 2.75 ? 0.75 + Math.sin(t * 12) * 0.2 : 0; T.glow.position.y = T.labelY(2);
      cue('line', t > 3.1, () => K.say(cs.lines?.[0]));
      if (t < 1.2) { shot(f.p(-6.4, -s2 * 2.0, 2.0), towerPos.clone().add(V(0, 2.2, 0)), 52); K.ov.caption(t > 0.3 ? 'TEST YOUR STRENGTH' : null, { yellow: true }); }
      else if (t < 3.6) {
        const py = wp(T.puck, V());
        shot(towerPos.clone().addScaledVector(V(-f.rx * s2, 0, -f.rz * s2), 3.0).addScaledVector(V(f.tx, 0, f.tz), -1.2).add(V(0, py.y - towerPos.y + 2.6, 0)), py.clone().add(V(0, 0.1, 0)), 46);
        K.ov.caption(t > 2.8 ? 'PARKRUNNER.' : t > 1.9 ? 'WOBBLY…' : t > 1.3 ? 'FEEBLE…' : null, { yellow: t > 2.8 });
      } else { shot(f.p(-6, -s2 * 2.2, 2.0), A.root.position.clone().add(V(0, 1.3, 0)), 42); K.ov.caption(null); }
    }
    T.puck.position.set(0, T.puckY(puckF), 0.14);
  };
  return I;
};

// ---------- A1 Goose Toll Booth ----------
function makeBooth(I) {
  const bag = I.bag; const g = new THREE.Group();
  const st = bag.add(new THREE.CanvasTexture((() => { const c = document.createElement('canvas'); c.width = 64; c.height = 256; const x = c.getContext('2d'); for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#ffffff' : '#ff3d3d'; x.fillRect(0, i * 32, 64, 32); } return c; })()));
  st.colorSpace = THREE.SRGBColorSpace;
  const hut = bag.M(new RoundedBoxGeometry(1.5, 2.2, 1.5, 2, 0.12), bag.mat('#ffffff', { map: st })); hut.position.y = 1.1; g.add(hut);
  const win = bag.M(new THREE.BoxGeometry(1.0, 0.7, 0.05), '#8fd3ff', 1.5); win.position.set(0, 1.5, 0.76); g.add(win);
  const roof = bag.M(new THREE.ConeGeometry(1.25, 0.7, 4).rotateY(Math.PI / 4), '#1a1420', 2.5); roof.position.y = 2.55; g.add(roof);
  const sign = board(bag, signTexture(bag, ['TOLL'], { bg: '#ffd23f', fg: '#1a1420', w: 512, h: 200 }), 1.9, 0.75); sign.position.set(0, 3.15, 0); g.add(sign);
  const price = board(bag, signTexture(bag, ['1 JELLY', 'BABY'], { bg: '#ffffff', fg: '#ff3d3d', w: 400, h: 300 }), 0.95, 0.7, '#1a1420', 0.06); price.position.set(0, 0.75, 0.78); g.add(price);
  return g;
}
SCENES.goose_toll = (K, cs) => {
  const I = asInset(K, cs, base(K, { camera: true }));
  const shot = shooter(K, cs);
  const f = stageAt(K.C, cs.params.atM || 2100, cs.who);
  const s = openSide(K.world, f, 9);
  const root = I.bag.group();
  const booth = makeBooth(I); root.add(booth); f.place(booth, 1.6, s * (PATH_W / 2 + 1.3), -0.16, -s * Math.PI / 2);
  // barrier across the path: pivot at the post on the booth side
  const post = I.bag.M(new THREE.CylinderGeometry(0.1, 0.12, 1.1, 8).translate(0, 0.55, 0), '#1a1420', 2); root.add(post);
  const postP = f.p(0.4, s * (PATH_W / 2 + 0.2), -0.16); post.position.copy(postP);
  const piv = new THREE.Group(); piv.position.copy(postP).add(V(0, 1.05, 0)); root.add(piv);
  const dirX = V(-s * f.rx, 0, -s * f.rz); piv.rotation.set(0, Math.atan2(-dirX.z, dirX.x), 0);
  const armT = I.bag.add(new THREE.CanvasTexture((() => { const c = document.createElement('canvas'); c.width = 256; c.height = 16; const x = c.getContext('2d'); for (let i = 0; i < 10; i++) { x.fillStyle = i % 2 ? '#ffffff' : '#ff3d3d'; x.fillRect(i * 25.6, 0, 26, 16); } return c; })()));
  armT.colorSpace = THREE.SRGBColorSpace;
  const arm = I.bag.M(new THREE.BoxGeometry(PATH_W + 0.4, 0.16, 0.16).translate((PATH_W + 0.4) / 2, 0, 0), I.bag.mat('#ffffff', { map: armT }), 2.5);
  const lift = new THREE.Group(); piv.add(lift); lift.add(arm);
  const goose = makeGoose(I.bag, { scale: 1.25, bellHat: !!cs.params.gooseBell }); root.add(goose.root);
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const jelly = I.bag.M(new THREE.CapsuleGeometry(0.11, 0.2, 4, 10), '#ff2d55', 2.5); root.add(jelly); jelly.visible = false;
  const peak = cs.params.variant === 'peak';
  const goose2 = makeGoose(I.bag, { scale: 1.0 }); root.add(goose2.root); goose2.root.visible = peak;
  const stampP = new THREE.Group(); root.add(stampP);
  const sh = I.bag.M(new THREE.CylinderGeometry(0.05, 0.06, 0.3, 8).translate(0, 0.25, 0), '#7a4a2a', 1.5); stampP.add(sh);
  const sb = I.bag.M(new RoundedBoxGeometry(0.34, 0.12, 0.24, 2, 0.03), '#ff3d3d', 2); stampP.add(sb); stampP.visible = false;
  const honk = sprite(I.bag, bubbleTexture(I.bag, 'HONK!', { burst: true, w: 512, h: 300, size: 120 }), 1.0, 512 / 300); root.add(honk); honk.visible = false;
  const cue = cues();
  const NOM = 5.1;
  const gooseHome = f.p(1.8, s * (PATH_W / 2 + 0.6)), gooseOut = f.p(1.15, s * 0.9);
  const v1 = V(), v2 = V();
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    // barrier: up -> down (0.6-1.0) -> up (4.2-4.6)
    const down = smooth(0.55, 0.95, t) * (1 - smooth(4.15, 4.6, t));
    lift.rotation.z = (1 - down) * 1.45;
    // goose waddles out, holds out a wing, takes payment, stamps, waves
    const gp = gooseHome.clone().lerp(gooseOut, smooth(0.2, 1.0, t));
    goose.root.position.copy(gp); goose.root.rotation.y = f.yaw + Math.PI - s * 0.35;
    goose.pose({ t, waddle: t < 1.0 ? 1 : 0, wingR: t > 1.3 && t < 3.6 ? 1 : (t > 4.6 ? Math.abs(Math.sin(t * 6)) : 0), wingL: t > 3.6 && t < 4.3 ? 0.8 : 0, honk: t > 0.9 && t < 1.3 ? 1 : 0, nod: t > 3.75 && t < 4.1 ? 0.4 : 0, look: t > 1.3 && t < 2.4 ? -s * 0.3 : 0 });
    honk.visible = t > 0.9 && t < 1.3; if (honk.visible) { wp(goose.head, honk.position).y += 0.8; popScale(honk, t, 0.9); }
    // Mark: jogs in, stops, pats pockets, pays, gets stamped, runs on
    const ain = t < 1.0 ? lerp(-9, -0.9, easeOut(t / 1.0)) : t < 4.5 ? -0.9 : -0.9 + (t - 4.5) * 7;
    place(A, f.p(ain, 0), f.yaw);
    const state = t < 1.0 || t > 4.5 ? 'run' : 'idle';
    drive(A, dt, state, null, { speed: 5, rate: 1, expr: t > 1.2 && t < 2.6 ? 'worried' : t > 3.8 ? 'happy' : 'normal' });
    const r = A.rig;
    if (t > 2.2 && t < 3.0) { const k = Math.sin((t - 2.2) * 16); r.arms[0].sh.rotation.set(0.35 + k * 0.15, 0, -0.35); r.arms[1].sh.rotation.set(0.35 - k * 0.15, 0, 0.35); r.arms[0].el.rotation.x = -1.4; r.arms[1].el.rotation.x = -1.4; r.head.rotation.x = 0.4; r.head.rotation.y = k * 0.3; }
    if (t > 3.0 && t < 4.3) { r.arms[1].sh.rotation.set(-1.4, 0, 0.1); r.arms[1].el.rotation.x = -0.15; }
    const hand = wp(r.arms[1].hand, v1);
    jelly.visible = t > 2.95 && t < 3.6;
    if (jelly.visible) { const wingTip = wp(goose.wings[1], v2).add(V(0, 0.05, 0)); jelly.position.copy(hand).lerp(wingTip, smooth(3.15, 3.5, t)); jelly.rotation.z = t * 6; }
    stampP.visible = t > 3.55 && t < 4.3;
    if (stampP.visible) { stampP.position.copy(hand).add(V(0, 0.25 + Math.abs(Math.sin((t - 3.55) * 9)) * 0.35, 0)); }
    cue('line', t > 1.25, () => K.say(cs.lines?.[0]));
    cue('paid', t > 3.6, () => K.ov.big('PAID', '#ff3d3d'));
    if (t > 3.95) K.ov.big(null);
    // cameras
    if (peak) { goose2.root.position.copy(f.p(2.4, s * (PATH_W / 2 - 0.6))); goose2.root.rotation.y = f.yaw + Math.PI - s * 0.6; goose2.pose({ t: t + 0.4, honk: t > 1.0 && t < 1.4 ? 1 : 0, wingL: t > 1.3 && t < 3.6 ? 0.8 : 0 }); }
    if (t < 1.3) { shot(f.p(-2.2, -s * 7.8, 2.1), f.p(-0.6, s * 0.9, 1.1), 42); K.ov.caption(t > 0.55 ? 'TOLL BOOTH' : null, { yellow: true }); }
    else if (t < 2.25) { shot(f.p(1.9, -s * 4.4, 1.5), f.p(0.3, s * 0.6, 1.2), 32); K.ov.caption(peak ? 'PEAK TIME: TWO!' : '1 JELLY BABY', { yellow: true }); }
    else if (t < 3.05) { shot(f.p(2.6, -s * 4.6, 1.6), f.p(-0.4, s * 0.3, 1.2), 36); K.ov.caption('ER…'); }
    else if (t < 3.95) { shot(f.p(0.1, -s * 2.3, 1.35), f.p(0.1, s * 0.5, 1.2), 36); K.ov.caption('PAYMENT…', { yellow: true }); }
    else if (t < 4.75) { shot(f.p(-4.8, -s * 6.2, 2.3), f.p(0.6, s * 0.4, 1.5), 44); K.ov.caption('BARRIER UP!', { yellow: true }); }
    else { shot(f.p(-2.5, -s * 7.8, 2.1), f.p(1.5, 0, 1.1), 44); K.ov.caption(null); }
  };
  return I;
};

// ---------- C2 The Treadmill Hill (Hanna-Barbera background loop) ----------
// Locked-off side camera; he runs on the spot on the Hill while the SAME tree, bench and goose (or marshal) slide past
// behind him three times, counted on screen. On the third pass he notices.
SCENES.treadmill_hill = (K, cs) => {
  const I = asInset(K, cs, base(K, { camera: true }));
  const shot = shooter(K, cs);
  const f = stageAt(K.C, cs.params.atM || 4300, cs.who);
  const s = openSide(K.world, f, 9);
  const marshal = cs.params.variant === 'marshal';
  const root = I.bag.group();
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const tree = makeTree(I.bag, 1.35), bench = makeBench(I.bag);
  bench.scale.setScalar(1.6);
  const goose = makeGoose(I.bag, { scale: 1.7, bellHat: !!cs.params.gooseBell });
  root.add(tree, bench, goose.root);
  let third = goose.root, M = null, nearly = null;
  if (marshal) {
    goose.root.visible = false;
    M = actor(K, I, CAST.maureen, { vest: '#d8ff1f' }); third = M.root;
    nearly = sprite(I.bag, bubbleTexture(I.bag, 'NEARLY THERE!', { w: 640, h: 280, size: 96 }), 0.8, 640 / 280); root.add(nearly);
  }
  const SP = 7.5, SPAN = SP * 3, PASS = 1.55; // one pass of all three objects every PASS seconds
  const props = [{ o: tree, k: 0 }, { o: bench, k: 1 }, { o: third, k: 2 }];
  const cue = cues();
  const NOM = 5.1;
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    place(A, f.p(0, 0), f.yaw);
    const loop = Math.min(2, Math.floor(t / PASS));
    const noticing = t > PASS * 2 + 0.5;
    drive(A, dt, 'run', null, { speed: 3.4, rate: 1, slope: 0.12, effort: 0.8, expr: noticing ? 'worried' : 'effort' });
    if (noticing) { A.rig.head.rotation.y = s * Math.min(1.2, (t - PASS * 2 - 0.5) * 4); A.r.setPop('!'); } else A.r.setPop(null);
    for (const p of props) {
      // enters from ahead of him (+a), exits behind (-a); wraps so the same three objects come round again
      const u = ((t / PASS) * SPAN + (2 - p.k) * SP) % SPAN;
      let a = SPAN / 2 - u;
      if (noticing && p.k === 2) a = Math.max(a, -1.2); // the third object stops to wave
      p.o.position.copy(f.p(a, p.k === 0 ? -s * 3.6 : s * (p.k === 1 ? 2.7 : 2.3), -0.16)); // tree behind him, bench + goose sweep past in the foreground
      p.o.rotation.y = p.k === 1 ? Math.atan2(s * f.rx, s * f.rz) : p.k === 2 ? (marshal ? Math.atan2(s * f.rx, s * f.rz) : f.yaw + Math.PI - s * 0.7) : 0;
    }
    if (marshal) {
      drive(M, dt, 'idle');
      M.rig.arms[1].sh.rotation.set(-2.6 + Math.sin(t * 8) * 0.3, 0, 0.2);
      nearly.visible = true; nearly.position.copy(M.root.position).add(V(0, 3.0, 0));
    } else goose.pose({ t, wingR: noticing ? Math.abs(Math.sin(t * 7)) : 0, waddle: 0.4, look: noticing ? -s * 0.6 : 0 });
    K.ov.banner(`PASS ${loop + 1} of 3`, loop === 2 ? '#ff3d8b' : '#2e6fe0');
    K.ov.caption(noticing ? 'HANG ON A MINUTE…' : ['SAME TREE…', 'SAME BENCH…', marshal ? 'SAME MARSHAL…' : 'SAME GOOSE…'][Math.floor(((t / PASS) * 3) % 3)], { yellow: noticing });
    cue('line', t > PASS * 2 + 0.6, () => K.say(cs.lines?.[0]));
    shot(f.p(0.3, s * 7.4, 1.25), f.p(0.3, -s * 1.0, 1.4), 48);
  };
  return I;
};

// ---------- C1 Everest Expedition ----------
SCENES.everest = (K, cs) => {
  const I = base(K, { camera: true });
  const f0 = stageAt(K.C, 1730, null), f1 = stageAt(K.C, 1955, null);
  const s = openSide(K.world, f0, 8);
  const root = I.bag.group();
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const S = actor(K, I, CAST.sherpa, { vest: '#ff8a1f' });
  const flask = makeFlask(I.bag, 1.2); root.add(flask);
  const rope = I.bag.M(new THREE.CylinderGeometry(0.035, 0.035, 1, 6).rotateX(Math.PI / 2), '#ffd23f', 1.5); root.add(rope);
  if (cs.params.variant === 'tent') {
    const tent = I.bag.M(new THREE.ConeGeometry(1.9, 2.2, 4).rotateY(Math.PI / 4), '#ff8a1f', 3); tent.position.copy(f0.p(4, -s * (PATH_W / 2 + 2.4), 1.0)); root.add(tent);
    const tflag = makeFlag(I.bag, 'BASE CAMP', '#2e6fe0'); tflag.root.position.copy(f0.p(5.6, -s * (PATH_W / 2 + 1.2), -0.2)); tflag.root.rotation.y = f0.yaw + Math.PI / 2; root.add(tflag.root);
  }
  const flag = makeFlag(I.bag, 'SUMMIT!', '#ff3d8b'); root.add(flag.root);
  // snow: drifts on the crest + falling flakes
  const snowM = I.bag.mat('#ffffff');
  const drifts = [];
  for (let i = 0; i < 14; i++) {
    const l = (i % 2 ? 1 : -1) * (PATH_W / 2 + 1.2 + (i % 5) * 1.6), a = -8 + (i * 2.3) % 18;
    const d = I.bag.M(new THREE.SphereGeometry(1, 12, 8).scale(1.6 + (i % 3) * 0.6, 0.5, 1.2), snowM, 2.5); d.position.copy(f1.p(a, l, -0.3)); root.add(d); drifts.push(d);
  }
  const cap = I.bag.M(new THREE.CylinderGeometry(PATH_W / 2 + 0.6, PATH_W / 2 + 0.6, 0.12, 20), snowM, 0); cap.position.copy(f1.p(0, 0, -0.13)); root.add(cap);
  // a snow-capped peak looming over the crest (the Hill, as it feels on lap 1)
  const peak = new THREE.Group(); root.add(peak);
  const rock = I.bag.M(new THREE.ConeGeometry(70, 120, 7), '#8a93a8', 4); rock.position.y = 60; peak.add(rock);
  const capM = I.bag.M(new THREE.ConeGeometry(31, 54, 7), snowM, 3); capM.position.y = 93.5; peak.add(capM);
  { const dir = V(f1.x - f0.x, 0, f1.z - f0.z).normalize(); peak.position.set(f1.x + dir.x * 260, f1.y - 30, f1.z + dir.z * 260); peak.rotation.y = 0.4; }
  const flakeGeo = I.bag.add(new THREE.SphereGeometry(0.07, 5, 4));
  const flakes = new THREE.InstancedMesh(flakeGeo, I.bag.basic('#ffffff'), 220); flakes.frustumCulled = false; root.add(flakes);
  const O = new THREE.Object3D();
  const cue = cues();
  const NOM = 6.1;
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    const snowK = smooth(0.2, 1.4, t);
    for (const d of drifts) d.scale.y = Math.max(0.01, snowK);
    cap.visible = snowK > 0.3;
    let camPos, camLook;
    if (t < 3.4) {
      // base camp: he trudges up, the camera rolls until the Hill looks vertical
      const a = 2 + t * 0.9;
      place(A, f0.p(a, 0), f0.yaw);
      drive(A, dt, t < 1.8 ? 'run' : 'idle', null, { speed: 1.4, rate: 0.6, slope: 0.35, effort: 1, expr: t > 2.7 ? 'happy' : 'effort' });
      if (t < 1.8) A.rig.torso.rotation.x = 0.75;
      // the sherpa leads him up on a rope, then turns back with the "oxygen"
      const back = smooth(1.55, 1.9, t);
      place(S, f0.p(a + lerp(3.0, 1.3, back), s * lerp(0.2, 1.2, back)), f0.yaw + back * (Math.PI - s * 0.6));
      drive(S, dt, t < 1.6 ? 'run' : 'idle', null, { speed: 1.4, rate: 0.6, slope: 0.35, effort: 0.6 });
      if (t < 1.6) S.rig.torso.rotation.x = 0.6;
      S.root.visible = true; flask.visible = t > 1.8;
      { const h1 = A.root.localToWorld(V(0, A.r.hipH + 0.1, 0)), h2 = S.root.localToWorld(V(0, S.r.hipH + 0.1, 0)); const mid = h1.clone().lerp(h2, 0.5); mid.y -= 0.25; rope.position.copy(mid); rope.lookAt(h2); rope.scale.set(1, 1, Math.max(0.1, h1.distanceTo(h2))); rope.visible = t < 1.9; }
      if (t > 1.8) {
        S.rig.arms[0].sh.rotation.set(-1.3, 0, 0); S.rig.arms[1].sh.rotation.set(-1.3, 0, 0);
        const sHand = wp(S.rig.arms[1].hand, V());
        const mouth = A.root.localToWorld(V(0, A.r.height - 0.55, 0.45));
        const k = smooth(2.2, 2.7, t) * (1 - smooth(3.15, 3.4, t));
        flask.position.copy(sHand).lerp(mouth, k); flask.rotation.set(k * -1.9, f0.yaw, 0);
        if (k > 0.2) { A.rig.arms[1].sh.rotation.set(-2.2, 0, 0.2); A.rig.head.rotation.x = -0.4; }
        if (t > 2.75) A.r.setPop('heart'); else A.r.setPop(null);
      }
      const roll = -s * 0.42 * smooth(0, 1.6, t);
      peak.visible = true;
      if (t < 1.8) { camPos = f0.p(a + 1.0, -s * 3.4, 0.22); camLook = f0.p(a + 2.4, s * 0.4, 2.3); K.cam(camPos, camLook, 50, roll); K.ov.caption(t > 0.35 ? 'BASE CAMP' : null, { yellow: true }); }
      else { camPos = f0.p(a + 3.0, -s * 3.6, 1.5); camLook = f0.p(a + 0.6, s * 0.6, 1.45); K.cam(camPos, camLook, 40, roll * 0.5); K.ov.caption('OXYGEN?', { yellow: false }); }
    } else {
      // the summit: flag planted, arms aloft
      A.r.setPop(null); S.root.visible = false; flask.visible = false; peak.visible = false;
      place(A, f1.p(0, 0), f1.yaw + s * 0.5);
      drive(A, dt, t > 4.3 ? 'celebrate' : 'idle', 'fist', { expr: 'happy' });
      const up = smooth(3.6, 4.2, t);
      flag.root.position.copy(f1.p(0.9, -s * 0.7, -2.6 * (1 - up))); flag.root.rotation.y = f1.yaw + Math.PI / 2;
      flag.wave(t);
      if (t < 4.3) { A.rig.arms[1].sh.rotation.set(-2.6 * up, 0, 0.3); }
      K.cam(f1.p(3.8, -s * 3.4, 0.5), f1.p(0.2, -s * 0.2, 2.0), 44, -s * 0.18);
      K.ov.caption('SUMMIT!', { yellow: true });
      cue('line', t > 3.7, () => K.say(cs.lines?.[0]));
    }
    // falling flakes around the camera's view
    const cpos = K.camera.position;
    for (let i = 0; i < 220; i++) {
      const sx = ((i * 73) % 100) / 100 - 0.5, sz = ((i * 37) % 100) / 100 - 0.5, ph = (i * 0.618) % 1;
      const yy = 9 - ((t * 1.6 + ph * 9) % 9);
      const k = snowK > 0.05 ? 1 : 0.0001;
      O.position.set(cpos.x + sx * 22 + Math.sin(t + i) * 0.4, cpos.y - 3 + yy, cpos.z + sz * 22); O.scale.setScalar(k); O.updateMatrix(); flakes.setMatrixAt(i, O.matrix);
    }
    flakes.instanceMatrix.needsUpdate = true;
  };
  return I;
};

// ---------- E2 Spaghetti Legs ----------
SCENES.spaghetti_legs = (K, cs) => {
  const I = asInset(K, cs, base(K, { camera: true }));
  const shot = shooter(K, cs);
  const f = stageAt(K.C, cs.params.atM || 3500, cs.who);
  const s = openSide(K.world, f, 8);
  const root = I.bag.group();
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  // pasta legs: swap the leg skin to spaghetti yellow
  const pasta = I.bag.mat('#f6d36b');
  const legMeshes = [];
  for (const l of A.rig.legs) { for (const c of l.hp.children) if (c.isMesh && c.geometry.type === 'CapsuleGeometry') legMeshes.push({ m: c, orig: c.material }); for (const c of l.kn.children) if (c.isMesh) legMeshes.push({ m: c, orig: c.material }); }
  // a bundle of wobbly noodles per leg (replacing thigh + shin), drawn as instanced beads along a swinging curve
  const NSTR = 4, NSEG = 15;
  const jellyV = cs.params.variant === 'jelly';
  const noodles = new THREE.InstancedMesh(I.bag.add(new THREE.SphereGeometry(jellyV ? 0.085 : 0.05, 8, 6)), I.bag.mat(jellyV ? '#5fe08a' : '#f6d36b'), 2 * NSTR * NSEG); noodles.frustumCulled = false;
  A.rig.hips.add(noodles); noodles.visible = false;
  const nO = new THREE.Object3D(), hipL = V(), ankL = V();
  const ball = new THREE.Group(); root.add(ball);
  const bm = I.bag.M(new THREE.IcosahedronGeometry(0.42, 2), '#8a4a2a', 3); ball.add(bm);
  const sauce = I.bag.M(new THREE.SphereGeometry(0.3, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.4), '#e8333f', 2); sauce.position.y = 0.2; bm.add(sauce);
  const boing = sprite(I.bag, bubbleTexture(I.bag, 'BOING!', { burst: true, w: 512, h: 300, size: 120, bg: '#f6d36b' }), 1.0, 512 / 300); root.add(boing); boing.visible = false;
  const cue = cues();
  const NOM = 4.1;
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    const a = -2 + t * 3.2;
    place(A, f.p(a, 0), f.yaw);
    const w = smooth(0.6, 1.1, t);
    drive(A, dt, 'run', null, { speed: 3.2, rate: 1, effort: 0.8, expr: t > 2.8 ? 'happy' : 'effort' });
    for (const lm of legMeshes) { lm.m.material = w > 0.5 ? pasta : lm.orig; lm.m.visible = w < 0.5; }
    noodles.visible = w >= 0.5;
    A.rig.legs.forEach((l, i) => {
      const ph = t * 9 + i * 1.7;
      l.hp.rotation.z += Math.sin(ph) * 0.9 * w * (i ? 1 : -1); l.hp.rotation.x += Math.sin(ph * 0.7) * 0.45 * w;
      l.kn.rotation.z = Math.sin(ph * 1.3 + 1) * 0.9 * w; l.kn.rotation.x += Math.cos(ph) * 0.6 * w;
    });
    if (w >= 0.5) {
      A.root.updateMatrixWorld(true);
      let k = 0;
      A.rig.legs.forEach((l, i) => {
        A.rig.hips.worldToLocal(l.hp.getWorldPosition(hipL)); A.rig.hips.worldToLocal(l.an.getWorldPosition(ankL));
        for (let sI = 0; sI < NSTR; sI++) {
          const ox = (sI % 2 ? 1 : -1) * 0.05 * (1 + (sI >> 1)), oz = ((sI >> 1) ? 1 : -1) * 0.04;
          for (let j = 0; j < NSEG; j++) {
            const u = j / (NSEG - 1);
            const wig = Math.sin(u * Math.PI) * (jellyV ? 0.22 : 0.45 + 0.07 * sI) * (jellyV ? 1 + 0.4 * Math.sin(t * 20) : 1);
            nO.position.set(lerp(hipL.x, ankL.x, u) + ox + Math.sin(t * 11 + u * 6 + sI + i * 2) * wig, lerp(hipL.y, ankL.y + 0.08, u), lerp(hipL.z, ankL.z, u) + oz + Math.cos(t * 9 + u * 5 + sI) * wig * 0.7);
            nO.updateMatrix(); noodles.setMatrixAt(k++, nO.matrix);
          }
        }
      });
      noodles.instanceMatrix.needsUpdate = true;
    }
    A.rig.body.rotation.z = Math.sin(t * 6) * 0.12 * w; A.root.position.y += -0.15 * w + Math.abs(Math.sin(t * 9)) * 0.1 * w;
    boing.visible = t > 0.9 && t < 1.6; if (boing.visible) { boing.position.copy(A.root.position).add(V(0, 0.9, 0)).addScaledVector(V(f.rx, 0, f.rz), -s * 0.9); popScale(boing, t, 0.9); }
    // a meatball rolls across in front of him
    const mu = clamp01((t - 1.6) / 1.6);
    ball.position.copy(f.p(a + 2.6, lerp(s * 6, -s * 6, mu), 0.26)); bm.rotation.set(0, 0, -mu * 14 * s);
    ball.visible = t > 1.6 && t < 3.3;
    cue('line', t > 1.4, () => K.say(cs.lines?.[0]));
    K.ov.caption(t > 1.0 ? (jellyV ? 'JELLY LEGS' : 'SPAGHETTI LEGS') : null, { yellow: true });
    const ap = A.root.position;
    shot(ap.clone().addScaledVector(V(f.rx, 0, f.rz), s * 3.1).addScaledVector(V(f.tx, 0, f.tz), 0.9).add(V(0, 0.45, 0)), ap.clone().add(V(0, 0.95, 0)).addScaledVector(V(f.tx, 0, f.tz), 0.3), 50);
  };
  return I;
};

// ---------- E1 Human Cannonball (start pre-roll; live) ----------
// He is LOADED into a circus cannon (or a catapult) behind the start line, face poking out; at the gun it BOOMs and he
// flies, superhero-style, landing exactly where his real self is a second into the race (positions untouched).
function makeCannon(I) {
  const g = new THREE.Group();
  const barrel = new THREE.Group(); g.add(barrel); barrel.position.y = 1.15;
  const tube = I.bag.M(new THREE.CylinderGeometry(0.62, 0.78, 3.0, 20, 1, true).rotateX(Math.PI / 2), I.bag.mat('#ff3d3d', { side: THREE.DoubleSide }), 3); barrel.add(tube);
  const back = I.bag.M(new THREE.SphereGeometry(0.78, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(-Math.PI / 2), '#ff3d3d', 3); back.position.z = -1.5; barrel.add(back);
  for (const z of [-0.9, 0.2, 1.3]) { const band = I.bag.M(new THREE.TorusGeometry(z > 1 ? 0.68 : z > 0 ? 0.72 : 0.76, 0.08, 6, 20), '#ffd23f', 0); band.position.z = z; barrel.add(band); }
  const star = board(I.bag, signTexture(I.bag, ['★'], { bg: '#ffffff', fg: '#ff3d3d', w: 256, h: 256, round: 128 }), 0.6, 0.6, '#1a1420', 0.04); star.position.set(0.8, 0, -0.4); star.rotation.y = Math.PI / 2; barrel.add(star);
  for (const sx of [-1, 1]) { const wh = I.bag.M(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 18).rotateZ(Math.PI / 2), '#2e6fe0', 2.5); wh.position.set(sx * 0.95, 0.8, -0.3); g.add(wh); const hub = I.bag.M(new THREE.SphereGeometry(0.2, 8, 6), '#ffd23f', 1.5); hub.position.set(sx * 1.07, 0.8, -0.3); g.add(hub); }
  const carriage = I.bag.M(new RoundedBoxGeometry(1.4, 0.55, 2.0, 2, 0.1), '#7a4a2a'); carriage.position.set(0, 0.65, -0.4); g.add(carriage);
  return { g, barrel, len: 3.0 };
}
function makeCatapult(I) {
  const g = new THREE.Group();
  const base0 = I.bag.M(new RoundedBoxGeometry(1.6, 0.35, 3.0, 2, 0.08), '#a0662f'); base0.position.y = 0.3; g.add(base0);
  for (const sx of [-1, 1]) { const up = I.bag.M(new THREE.BoxGeometry(0.22, 1.9, 0.22), '#7a4a2a'); up.position.set(sx * 0.65, 1.2, 0.3); g.add(up); }
  const bar = I.bag.M(new THREE.CylinderGeometry(0.1, 0.1, 1.6, 8).rotateZ(Math.PI / 2), '#7a4a2a'); bar.position.set(0, 2.0, 0.3); g.add(bar);
  const arm = new THREE.Group(); arm.position.set(0, 0.6, 0.6); g.add(arm);
  const beam = I.bag.M(new THREE.BoxGeometry(0.24, 0.24, 3.0).translate(0, 0, -1.3), '#a0662f'); arm.add(beam);
  const cup = I.bag.M(new THREE.SphereGeometry(0.55, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), I.bag.mat('#7a4a2a', { side: THREE.DoubleSide }), 2.5); cup.position.set(0, 0.3, -2.7); arm.add(cup);
  for (const sx of [-1, 1]) { const wh = I.bag.M(new THREE.CylinderGeometry(0.5, 0.5, 0.18, 14).rotateZ(Math.PI / 2), '#ff3d3d', 2.5); wh.position.set(sx * 0.9, 0.5, sx > 0 ? 1.0 : -1.0); g.add(wh); }
  return { g, arm, cup };
}
SCENES.cannonball = (K, cs) => {
  const I = base(K, { camera: false, hide: 'none' });
  const r = K.runners[cs.who];
  const st0 = K.stage(0);
  const cata = cs.params.variant === 'catapult';
  const root = I.bag.group();
  const C0 = cata ? makeCatapult(I) : makeCannon(I); root.add(C0.g);
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub); A.root.visible = false;
  const puffs = makePuffs(I.bag, 10, '#ffffff'); root.add(puffs.root);
  const boom = sprite(I.bag, bubbleTexture(I.bag, cata ? 'TWANG!' : 'BOOM!', { burst: true, w: 512, h: 300, size: 140, bg: '#ffd23f' }), 1.5, 512 / 300); root.add(boom); boom.visible = false;
  const fwd = V(st0.tx, 0, st0.tz), right = V(st0.rx, 0, st0.rz);
  const ELEV = 0.42;
  let placed = false, slot = null, side = 1, land = null, muzzle = null, dir = null;
  const cue = cues();
  I.update = (t, dt, b) => {
    if (!placed && r) {
      placed = true; slot = r.root.position.clone();
      const p = slot.clone().addScaledVector(fwd, -4.6); p.y = K.C.heightAt(p.x, p.z) + 0.05;
      C0.g.position.copy(p); C0.g.rotation.set(0, Math.atan2(fwd.x, fwd.z), 0);
      side = openSide(K.world, st0, 9);
      const s1 = K.sim.stateAt(1.1).byId[cs.who]; land = V(s1.x, s1.y, s1.z);
      if (!cata) C0.barrel.rotation.x = -ELEV;
    }
    if (!slot) return;
    const bb = b;
    I.camera = bb > -2.0 && bb < 2.1;
    I.hide = bb < 1.1 ? [cs.who] : 'none'; // the real runner appears where he lands
    C0.g.updateMatrixWorld(true);
    if (cata) {
      const sw = bb < 0 ? 0 : Math.min(1, bb / 0.18);
      C0.arm.rotation.x = -0.05 + sw * 1.9;
      muzzle = wp(C0.cup, V()).add(V(0, 0.4, 0)); dir = fwd.clone().add(V(0, Math.tan(0.7), 0)).normalize();
    } else {
      muzzle = C0.barrel.localToWorld(V(0, 0, 1.45)); dir = muzzle.clone().sub(C0.barrel.localToWorld(V(0, 0, 0))).normalize();
    }
    // loaded: head and shoulders out of the muzzle (or sitting in the catapult cup), waving
    const flyU = clamp01(bb / 1.1);
    A.root.visible = bb < 1.1;
    if (bb < 0) {
      if (cata) { A.root.position.copy(muzzle).add(V(0, -0.85, 0)); A.root.rotation.set(0, Math.atan2(-side * right.x, -side * right.z), 0); drive(A, dt, 'wave', null, { expr: 'happy' }); }
      else {
        // lying along the barrel, head out of the muzzle, facing the camera side
        A.root.position.copy(muzzle).addScaledVector(dir, -(A.r.height - 0.85));
        A.root.quaternion.setFromUnitVectors(V(0, 1, 0), dir); A.root.rotateY(side > 0 ? -Math.PI / 2 : Math.PI / 2);
        drive(A, dt, 'idle', null, { expr: bb > -1.0 ? 'effort' : 'happy' });
        A.rig.arms[1].sh.rotation.set(-2.9 + Math.sin(t * 9) * 0.3, 0, 0);
      }
    } else if (bb < 1.1) {
      // the flight: an arc from the muzzle to where he really is at 1.1 s, superhero pose
      const p = muzzle.clone().lerp(land, flyU); p.y += Math.sin(Math.PI * flyU) * 4.5;
      A.root.position.copy(p);
      A.root.rotation.set(0, Math.atan2(fwd.x, fwd.z), 0); A.rig.body.rotation.x = 1.25;
      drive(A, dt, 'idle', null, { expr: 'happy' });
      A.rig.body.rotation.x = 1.25 - flyU * 0.6;
      for (const a of A.rig.arms) { a.sh.rotation.set(-3.0, 0, 0); a.el.rotation.x = 0; }
      for (const l of A.rig.legs) { l.hp.rotation.x = 0.2; l.kn.rotation.x = 0.3; }
    }
    puffs.root.position.copy(muzzle); puffs.update(clamp01(bb / 1.3), 2.2, 0.8);
    boom.visible = bb > 0 && bb < 0.9; if (boom.visible) { boom.position.copy(muzzle).addScaledVector(fwd, -1.2).add(V(0, -0.2, 0)); popScale(boom, bb, 0, 0.2); }
    cue('flash', bb > 0, () => K.ov.flash(0.5));
    cue('line', bb > 0.35, () => K.say(cs.lines?.[0]));
    // captions avoid the countdown numbers (centre) and GO! (until ~0.8 s)
    K.ov.caption(bb < -0.25 ? 'LOADED…' : bb > 0.85 && bb < 2.0 ? 'HUMAN CANNONBALL!' : null, { yellow: bb > 0 });
    if (I.camera) {
      // side-on, wide: the cannon at left, his arc across the frame
      // loaded: close on the cannon and his face; then follow him up and over
      const cpos = C0.g.position;
      if (bb < 0) K.cam(cpos.clone().addScaledVector(right, side * 5.5).addScaledVector(fwd, 2.4).add(V(0, 2.6, 0)), muzzle.clone().addScaledVector(fwd, -1.0).add(V(0, -0.6, 0)), 44);
      else { const target = A.root.visible ? A.root.position.clone() : land.clone(); K.cam(cpos.clone().addScaledVector(right, side * 11).addScaledVector(fwd, 2.5 + flyU * 5).add(V(0, 3.4, 0)), target.add(V(0, 1.2, 0)), 50); }
    }
  };
  return I;
};

// ---------- W1 Personal Raincloud (live, full frame) ----------
SCENES.raincloud = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const r = K.runners[cs.who];
  const zap = cs.params.variant === 'lightning';
  const root = I.bag.group();
  const cloud = makeCloud(I.bag, { scale: 1.15 }); root.add(cloud);
  const rain = makeRain(I.bag, 80, { w: 1.8, h: 3.0 }); cloud.add(rain.mesh); rain.mesh.position.y = -0.4;
  const umb = makeUmbrella(I.bag); umb.visible = false; root.add(umb);
  // a tiny cartoon lightning bolt (variant)
  const bolt = new THREE.Mesh(I.bag.add(new THREE.ExtrudeGeometry((() => { const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(0.35, 0.9); sh.lineTo(0.12, 0.9); sh.lineTo(0.42, 1.8); sh.lineTo(-0.05, 0.7); sh.lineTo(0.16, 0.7); sh.lineTo(-0.2, 0); return sh; })(), { depth: 0.08, bevelEnabled: false })), I.bag.basic('#ffe23f'));
  bolt.visible = false; root.add(bolt);
  const zapB = sprite(I.bag, bubbleTexture(I.bag, 'ZAP!', { burst: true, w: 512, h: 300, size: 140, bg: '#ffe23f' }), 1.0, 512 / 300); root.add(zapB); zapB.visible = false;
  const cloudPos = V(); let init = false;
  const cue = cues();
  I.update = (t, dt, b) => {
    if (!r) return;
    const st = K.sim.stateAt(Math.max(0, b)).byId[cs.who];
    const right = V(-st.tz, 0, st.tx), fwd = V(st.tx, 0, st.tz);
    // sidestep left (0.9-1.3 s), then right (1.8-2.3 s): lateral, visual only
    const lat = (smooth(0.8, 1.2, t) - smooth(1.7, 2.2, t)) * -1.1 + (smooth(1.7, 2.2, t) - smooth(3.1, 3.5, t)) * 1.1;
    r.root.position.addScaledVector(right, lat);
    const head = r.root.position.clone().add(V(0, r.height + 1.45, 0));
    if (!init) { cloudPos.copy(head); init = true; }
    cloudPos.lerp(head, Math.min(1, dt * (t > 0.8 && t < 2.6 ? 3.0 : 8)));
    cloud.position.copy(cloudPos);
    const tilt = zap ? 0 : smooth(3.0, 3.5, t) * 1.15;
    cloud.rotation.set(0, Math.atan2(st.tx, st.tz), -tilt);
    if (tilt > 0.05) cloud.position.addScaledVector(right, -tilt * 1.6).add(V(0, -tilt * 0.9, 0));
    rain.update(t, 0);
    cloud.scale.setScalar(1.15 * backOut(clamp01(t / 0.4)));
    if (cloud.userData.face) cloud.userData.face.lookAt(K.camera.position);
    const rig = rigFor(r);
    if (!zap) {
      // Pam's tartan umbrella pops up; the cloud tilts and rains sideways under it
      umb.visible = t > 2.6;
      if (umb.visible) { if (rig) { rig.arms[1].sh.rotation.set(-2.9, 0, 0.15); rig.arms[1].el.rotation.x = -0.1; } umb.position.copy(r.root.position).add(V(0, r.height + 0.2, 0)); umb.scale.setScalar(backOut(clamp01((t - 2.6) / 0.3))); }
    } else {
      // a tiny bolt singes his hair; he blinks, carries on
      bolt.visible = t > 3.0 && t < 3.45 && Math.floor(t * 20) % 2 === 0;
      bolt.position.copy(cloud.position).add(V(-0.2, -2.0, 0)); bolt.lookAt(K.camera.position);
      zapB.visible = t > 3.0 && t < 3.8; if (zapB.visible) { zapB.position.copy(r.root.position).add(V(0, r.height + 0.4, 0)).addScaledVector(right, 1.2); popScale(zapB, t, 3.0); }
      if (t > 3.0 && t < 3.8) r.setPop?.('!');
    }
    cue('line', t > 0.4, () => K.say(cs.lines?.[0]));
    K.ov.caption(t > 0.4 ? (t > 3.0 ? (zap ? 'ZAP.' : 'NICE TRY') : 'HIS OWN WEATHER') : null, { yellow: t > 3.0 });
    const ap = r.root.position;
    K.cam(ap.clone().addScaledVector(right, 3.4).addScaledVector(fwd, 2.4).add(V(0, 2.2, 0)), ap.clone().add(V(0, 2.4, 0)), 52, 0, { sun: 30 });
  };
  return I;
};

// ---------- D1 Mirror, Signal, Manoeuvre (one full-frame live beat) ----------
SCENES.mirror_signal = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const by = K.runners[cs.who], on = K.runners[cs.params.on];
  const lplate = cs.params.variant === 'lplate';
  const root = I.bag.group();
  const rigB = by && rigFor(by);
  // a GIANT wing mirror on his shoulder
  const mirror = new THREE.Group();
  const stalk = I.bag.M(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 6).rotateZ(Math.PI / 2).translate(0.35, 0, 0), '#1a1420', 0); mirror.add(stalk);
  const housing = I.bag.M(new RoundedBoxGeometry(0.85, 0.6, 0.3, 3, 0.12), '#1a1420', 3); housing.position.set(0.95, 0.1, 0); mirror.add(housing);
  const glass = new THREE.Mesh(I.bag.add(new THREE.PlaneGeometry(0.72, 0.48)), I.bag.basic('#bfe9ff')); glass.position.set(0.95, 0.1, -0.16); glass.rotation.y = Math.PI; mirror.add(glass);
  const glint = new THREE.Mesh(I.bag.add(new THREE.PlaneGeometry(0.5, 0.08)), I.bag.basic('#ffffff')); glint.position.set(0.95, 0.2, -0.17); glint.rotation.set(0, Math.PI, 0.5); mirror.add(glint);
  const blink = new THREE.Mesh(I.bag.add(new THREE.SphereGeometry(0.24, 12, 8)), I.bag.basic('#ff9a1f'));
  const L = board(I.bag, signTexture(I.bag, ['L'], { bg: '#ffffff', fg: '#e8333f', w: 256, h: 256, round: 20, sizes: [210] }), 0.55, 0.55, '#e8333f', 0.04);
  const parp = sprite(I.bag, bubbleTexture(I.bag, 'PARP PARP!', { w: 640, h: 280, size: 110, bg: '#ffffff' }), 0.9, 640 / 280); root.add(parp); parp.visible = false;
  const tick = sprite(I.bag, bubbleTexture(I.bag, 'TICK-TOCK', { w: 640, h: 280, size: 100, bg: '#ff9a1f', fg: '#ffffff' }), 0.75, 640 / 280); root.add(tick); tick.visible = false;
  let side = 1, attached = false;
  const cue = cues();
  I.update = (t, dt, b) => {
    if (!by || !on || !rigB) return;
    const sim = K.sim.stateAt(Math.max(0, b));
    const sB = sim.byId[cs.who], sO = sim.byId[cs.params.on];
    if (!attached) {
      attached = true;
      side = (sB.lat ?? 0) >= (sO.lat ?? 0) ? 1 : -1;
      const sh = side > 0 ? rigB.arms[1] : rigB.arms[0];
      rigB.torso.add(mirror); mirror.position.copy(sh.sh.position).add(V(0, 0.18, 0)); mirror.scale.set(side > 0 ? 1 : -1, 1, 1);
      sh.hand.add(blink); blink.position.set(0, -0.1, 0);
      if (lplate) { rigB.torso.add(L); L.position.set(0, 0.45, -0.42); L.rotation.y = Math.PI; }
      I.cleanup = () => { mirror.parent?.remove(mirror); blink.parent?.remove(blink); L.parent?.remove(L); };
    }
    const arm = side > 0 ? rigB.arms[1] : rigB.arms[0];
    const sig = smooth(0.5, 0.8, t) * (1 - smooth(3.0, 3.4, t));
    if (sig > 0) { arm.sh.rotation.set(0, 0, (side > 0 ? 1 : -1) * 1.5 * sig); arm.el.rotation.x = -0.05; }
    if (t > 0.15 && t < 0.9) rigB.head.rotation.y = (side > 0 ? -1 : 1) * 1.0;
    blink.visible = sig > 0.5 && Math.floor(t * 4) % 2 === 0;
    tick.visible = sig > 0.5 && t < 2.2; if (tick.visible) { tick.position.copy(by.root.position).add(V(0, by.height + 1.0, 0)); popScale(tick, t, 0.8); }
    parp.visible = t > 2.0 && t < 3.6; if (parp.visible) { parp.position.copy(on.root.position).add(V(0, on.height + 0.9, 0)); popScale(parp, t, 2.0); }
    cue('line', t > 0.25, () => K.say(cs.lines?.[0]));
    K.ov.caption(t < 0.4 ? null : t < 1.4 ? 'MIRROR…' : t < 2.3 ? 'SIGNAL…' : 'MANOEUVRE!', { yellow: t >= 2.3 });
    // over his shoulder from behind, on the mirror side: the mirror big in frame, the man he is passing beyond it
    const fwd = V(sB.tx, 0, sB.tz), right = V(-sB.tz, 0, sB.tx);
    const bp = by.root.position;
    K.cam(bp.clone().addScaledVector(fwd, -3.1).addScaledVector(right, side * 2.3).add(V(0, 2.5, 0)), bp.clone().addScaledVector(fwd, 2.2).addScaledVector(right, side * 0.2).add(V(0, 1.7, 0)), 52, 0, { sun: 30 });
  };
  const d0 = I.dispose; I.dispose = () => { I.cleanup?.(); d0(); };
  return I;
};

// ---------- B2 The Ice-Cream Van Jingle (freeze, then a live chase) ----------
function makeVan(I) {
  const bag = I.bag; const g = new THREE.Group();
  const body = bag.M(new RoundedBoxGeometry(2.3, 2.3, 4.8, 3, 0.35), '#9ff0d0', 3); body.position.set(0, 1.65, 0); g.add(body);
  const cab = bag.M(new RoundedBoxGeometry(2.25, 1.4, 1.2, 3, 0.3), '#ff9bd2', 3); cab.position.set(0, 1.2, 2.75); g.add(cab);
  const wind = bag.M(new THREE.BoxGeometry(1.9, 0.6, 0.05), '#2e6fe0', 0); wind.position.set(0, 1.55, 3.36); wind.rotation.x = -0.2; g.add(wind);
  for (const [x, z] of [[-1.1, 2.4], [1.1, 2.4], [-1.1, -1.5], [1.1, -1.5]]) { const w = bag.M(new THREE.CylinderGeometry(0.48, 0.48, 0.3, 14).rotateZ(Math.PI / 2), '#1a1420', 2); w.position.set(x, 0.48, z); g.add(w); const h = bag.M(new THREE.CylinderGeometry(0.2, 0.2, 0.32, 10).rotateZ(Math.PI / 2), '#ffffff', 0); h.position.set(x, 0.48, z); g.add(h); }
  const side = board(bag, signTexture(bag, ['ICES', '★ 99s ★'], { bg: '#ff9bd2', fg: '#ffffff', w: 512, h: 256 }), 2.6, 1.3, '#1a1420', 0.1);
  for (const sx of [-1, 1]) { const sb = side.clone(); sb.position.set(sx * 1.2, 1.9, -0.3); sb.rotation.y = sx * Math.PI / 2; g.add(sb); }
  const back = board(bag, signTexture(bag, ['SORRY!', 'SOLD OUT', 'OF 99s'], { bg: '#ffffff', fg: '#ff3d3d', w: 512, h: 400 }), 1.9, 1.5, '#1a1420', 0.1); back.position.set(0, 1.85, -2.45); back.rotation.y = Math.PI; g.add(back);
  // giant cone on the roof
  const cone = bag.M(new THREE.ConeGeometry(0.6, 1.6, 12).rotateX(Math.PI), '#e8b26b', 3); cone.position.set(0, 3.7, 0.2); g.add(cone);
  const scoop = bag.M(new THREE.SphereGeometry(0.72, 14, 10), '#fff6e0', 3); scoop.position.set(0, 4.55, 0.2); g.add(scoop);
  const scoop2 = bag.M(new THREE.SphereGeometry(0.5, 12, 8), '#ff9bd2', 2.5); scoop2.position.set(0, 5.1, 0.2); g.add(scoop2);
  const flake = bag.M(new THREE.BoxGeometry(0.16, 0.9, 0.16), '#7a4a2a', 2); flake.position.set(0.3, 5.2, 0.1); flake.rotation.z = -0.4; g.add(flake);
  return g;
}
SCENES.ice_cream_van = (K, cs) => {
  const I = base(K, { camera: true, tailS: cs.params?.liveTailS ?? 3, tailCamera: true });
  const f = stageAt(K.C, cs.params.atM || 2000, cs.who);
  const s = openSide(K.world, f, 9);
  const root = I.bag.group();
  const van = makeVan(I); root.add(van);
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const notes = noteSprites(I, 5); for (const n of notes) root.add(n);
  const cue = cues();
  const NOM = 4.1;
  const placeVan = (pos, yaw, t) => { van.position.copy(pos); van.position.y = K.C.heightAt(pos.x, pos.z); van.rotation.set(0, yaw, Math.sin(t * 9) * 0.015); };
  const tune = (t, anchor) => notes.forEach((n, i) => { const u = (t * 0.8 + i / notes.length) % 1; n.position.copy(anchor).add(V(Math.sin(u * 9 + i) * 0.8, 3.0 + u * 3, 0)); n.material.opacity = 1 - u; n.visible = true; n.scale.setScalar(0.9 + u * 0.4); n.scale.x *= 1; });
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    const rev = cs.params.variant === 'reverse'; // reverses into view from ahead, SOLD OUT sign first
    const vanA = t < 1.4 ? (rev ? lerp(26, 4, easeOut(t / 1.4)) : lerp(-26, 2, easeOut(t / 1.4))) : t < 2.6 ? (rev ? 4 : 2) : (rev ? 4 : 2) + (t - 2.6) * 6.5;
    placeVan(f.p(vanA, s * (PATH_W / 2 + 2.4)), f.yaw, t);
    tune(t, van.position);
    const run = Math.max(0, t - 2.7);
    place(A, f.p(run * 6.2, 0), f.yaw + (t > 1.4 && t < 2.7 ? s * 0.9 : 0));
    drive(A, dt, t > 2.7 ? 'run' : 'idle', null, { speed: 6.5, rate: 1, effort: 0.6, expr: t > 1.4 ? 'love' : 'normal' });
    A.r.setPop(t > 1.5 && t < 2.8 ? 'heart' : null);
    if (t > 1.4 && t < 2.7) A.rig.head.rotation.y = s * 0.4;
    cue('line', t > 1.45, () => K.say(cs.lines?.[0]));
    if (t < 1.4) { K.cam(f.p(-9.5, -s * 3.2, 3.1), f.p(-1.5, s * 1.8, 1.3), 46); K.ov.caption(t > 0.4 ? 'DING-A-LING!' : null, { yellow: true }); }
    else if (t < 2.7) { K.cam(A.root.position.clone().addScaledVector(V(f.tx, 0, f.tz), 3.4).addScaledVector(V(f.rx, 0, f.rz), -s * 1.2).add(V(0, 2.0, 0)), A.root.position.clone().add(V(0, 2.05, 0)), 36); K.ov.caption('THE VAN!', { yellow: true }); }
    else { const vb = f.p(vanA - 2.5, s * (PATH_W / 2 + 2.4), 1.9); K.cam(f.p(run * 6.2 - 4.5, -s * 0.6, 2.2), vb, 40); K.ov.caption('SOLD OUT OF 99s', { yellow: true }); }
  };
  // live tail: the race has resumed; the van keeps exactly his pace, just out of reach (back sign readable)
  I.tail = (u, dt, b) => {
    A.root.visible = false;
    const st = K.sim.stateAt(Math.max(0, b)).byId[cs.who];
    const fwd = V(st.tx, 0, st.tz), right = V(-st.tz, 0, st.tx);
    const rp = V(st.x, st.y, st.z);
    placeVan(rp.clone().addScaledVector(fwd, 7).addScaledVector(right, s * (PATH_W / 2 + 1.6)), Math.atan2(st.tx, st.tz), u);
    tune(u + 3, van.position);
    K.cam(rp.clone().addScaledVector(fwd, -5.5).addScaledVector(right, -s * 0.8).add(V(0, 2.3, 0)), rp.clone().addScaledVector(fwd, 4.6).addScaledVector(right, s * (PATH_W / 2 + 1.6)).add(V(0, 1.8, 0)), 40);
    K.ov.caption(u < 1.8 ? 'SOLD OUT OF 99s' : u < 3.6 ? 'JUST OUT OF REACH' : null, { yellow: u < 1.8 });
  };
  return I;
};

// ---------- finish prints (render-to-texture of the REAL finish, or of a goose) ----------
const LIN2SRGB = (() => { const t = new Uint8ClampedArray(256); for (let i = 0; i < 256; i++) { const c = i / 255; t[i] = Math.round(255 * (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)); } return t; })();
function renderToCanvas(K, cam, w, h, prep) {
  const R = K.renderer;
  const rt = new THREE.WebGLRenderTarget(w, h, { samples: 4 });
  const prev = R.getRenderTarget();
  const undo = prep?.();
  cam.aspect = w / h; cam.updateProjectionMatrix();
  R.setRenderTarget(rt); R.clear(); R.render(K.scene, cam); R.setRenderTarget(prev);
  undo?.();
  const buf = new Uint8Array(w * h * 4);
  R.readRenderTargetPixels(rt, 0, 0, w, h, buf);
  rt.dispose();
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    const src = (h - 1 - y) * w * 4, dst = y * w * 4;
    for (let x = 0; x < w * 4; x += 4) { img.data[dst + x] = LIN2SRGB[buf[src + x]]; img.data[dst + x + 1] = LIN2SRGB[buf[src + x + 1]]; img.data[dst + x + 2] = LIN2SRGB[buf[src + x + 2]]; img.data[dst + x + 3] = 255; }
  }
  g.putImageData(img, 0, 0);
  return c;
}
// the real finish frame at race second raceS (runners placed from the plan), side-on at the line
function finishFrame(K, raceS, w = 960, h = 540, side = 1, extra = null) {
  const fin = K.world.anchors.finish;
  const bF = raceToBroadcast(K.plan.timeMap, raceS);
  const st = K.sim.stateAt(bF);
  const cam = new THREE.PerspectiveCamera(30, w / h, 0.3, 9000);
  const line = V(fin.x, fin.y, fin.z);
  cam.position.copy(line).add(V(fin.rx * side * 9.5, 3.3, fin.rz * side * 9.5)).addScaledVector(V(fin.tx, 0, fin.tz), -0.2);
  cam.lookAt(line.clone().add(V(0, 0.9, 0)).addScaledVector(V(fin.tx, 0, fin.tz), -0.8));
  return renderToCanvas(K, cam, w, h, () => {
    const saved = [];
    for (const id of K.ids) {
      const r = K.runners[id], s = st.byId[id];
      saved.push([r, r.root.position.clone(), r.root.rotation.clone(), r.root.visible, r.state, r.variant]);
      r.root.position.set(s.x, s.y, s.z); r.root.rotation.set(0, Math.atan2(s.tx, s.tz), 0); r.root.visible = true;
      r.set('run'); for (let i = 0; i < 8; i++) r.update(0.06, { speed: 5, rate: 1, effort: 1 });
    }
    const arch = K.world.anchors.finishArch; const av = arch?.visible; if (arch) arch.visible = false;
    const ex = extra?.();
    return () => { for (const [r, p, q, v, sname, vname] of saved) { r.root.position.copy(p); r.root.rotation.copy(q); r.root.visible = v; r.set(sname, vname); } if (arch) arch.visible = av; ex?.(); };
  });
}
function drawRuler(c, x) {
  const g = c.getContext('2d'); const h = c.height;
  g.save(); g.translate(x, 0);
  g.fillStyle = '#ffd23f'; g.strokeStyle = '#1a1420'; g.lineWidth = 4; g.fillRect(-14, 10, 28, h - 20); g.strokeRect(-14, 10, 28, h - 20);
  g.fillStyle = '#1a1420'; for (let y = 20; y < h - 20; y += 12) g.fillRect(-14, y, y % 60 === 20 ? 16 : 8, 2);
  g.restore();
}

// ---------- X1 The Wildlife Photographer (post) ----------
SCENES.photographer = (K, cs) => {
  const I = base(K, { camera: true, postBanner: 'PHOTO FINISH!' });
  const fin = K.world.anchors.finish;
  const fs = stageAt(K.C, K.C.finishM);
  const s = openSide(K.world, fs, 8);
  const root = I.bag.group();
  const P = actor(K, I, CAST.pam, { hideBib: true });
  const camG = new THREE.Group();
  const bodyC = I.bag.M(new RoundedBoxGeometry(0.42, 0.3, 0.26, 2, 0.05), '#1a1420', 2); camG.add(bodyC);
  const lens = I.bag.M(new THREE.CylinderGeometry(0.16, 0.2, 1.7, 14).rotateX(Math.PI / 2).translate(0, 0, 0.95), '#f0f0f0', 3); camG.add(lens);
  const lensEnd = I.bag.M(new THREE.CylinderGeometry(0.22, 0.22, 0.2, 14).rotateX(Math.PI / 2).translate(0, 0, 1.8), '#1a1420', 2); camG.add(lensEnd);
  root.add(camG);
  const click = sprite(I.bag, bubbleTexture(I.bag, 'CLICK!', { burst: true, w: 512, h: 300, size: 120 }), 1.0, 512 / 300); root.add(click); click.visible = false;
  // prints: 1) the goose's backside, 2) the REAL finish, with Jeff's ruler
  const goose = makeGoose(I.bag, { scale: 1.4 });
  const gooseCam = new THREE.PerspectiveCamera(34, 16 / 9, 0.1, 9000);
  const gp = V(fin.x, fin.y, fin.z).addScaledVector(V(fin.rx, 0, fin.rz), s * 1.2);
  goose.root.position.copy(gp); goose.root.rotation.y = Math.atan2(-fin.rx * s, -fin.rz * s);
  gooseCam.position.copy(gp).add(V(fin.rx * s * 2.1, 0.75, fin.rz * s * 2.1)); gooseCam.lookAt(gp.clone().add(V(0, 0.75, 0)));
  const thumb = cs.params.variant === 'thumb';
  const print1 = renderToCanvas(K, gooseCam, 960, 540, () => { if (!thumb) K.scene.add(goose.root); goose.pose({ wingL: 0.3, wingR: 0.3 }); return () => K.scene.remove(goose.root); });
  if (thumb) {
    // variant: print 1 is Jeff's thumb over the lens
    const g = print1.getContext('2d'); g.fillStyle = '#f1b98f'; g.strokeStyle = '#1a1420'; g.lineWidth = 10;
    g.beginPath(); g.ellipse(250, 470, 260, 330, -0.5, 0, 7); g.fill(); g.stroke();
    g.fillStyle = '#ffd9c8'; g.beginPath(); g.ellipse(330, 260, 90, 70, -0.5, 0, 7); g.fill(); g.lineWidth = 6; g.stroke();
  }
  const a = K.pub(cs.who), o = K.pub(cs.params.other);
  const print2 = finishFrame(K, cs.params.finishRaceS ?? K.sim.byId[cs.who].officialS, 960, 540, s);
  // Jeff's ruler against the line
  drawRuler(print2, print2.width * 0.47);
  const lab = print2.getContext('2d');
  const t2 = `${(a?.shortName || a?.nickname || 'HIM').toUpperCase()} BY ${Number(cs.params.marginS ?? 0).toFixed(1)} s`;
  // a big margin plate across the top of the print
  lab.font = '78px "Lilita One", sans-serif'; const tw = Math.min(print2.width - 40, lab.measureText(t2).width + 60);
  lab.fillStyle = '#1a1420'; roundRect(lab, (print2.width - tw) / 2, 14, tw, 104, 24); lab.fill();
  lab.textAlign = 'center'; lab.textBaseline = 'middle'; lab.fillStyle = '#ffd23f'; lab.fillText(t2, print2.width / 2, 70, print2.width - 80);
  let p1 = null, p2 = null;
  const cue = cues();
  const NOM = 6.6;
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM);
    const walk = smooth(0, 1.1, t);
    const pPos = fs.p(3.6, s * lerp(8, PATH_W / 2 - 0.7, walk), 0);
    place(P, pPos, Math.atan2(-fs.rx * s, -fs.rz * s) - 0.5 * s);
    drive(P, dt, t < 1.1 ? 'jog' : 'idle', null, { speed: 2, rate: 1, expr: 'normal' });
    for (const arm of P.rig.arms) { arm.sh.rotation.set(-1.5, 0, 0); arm.el.rotation.x = -0.5; }
    P.rig.head.rotation.x = 0.1;
    camG.position.copy(P.root.localToWorld(V(0, P.r.hipH + 0.75, 0.35))); camG.rotation.set(0, P.root.rotation.y, 0);
    click.visible = t > 1.3 && t < 1.8; if (click.visible) { click.position.copy(camG.position).add(V(0, 1.1, 0)); popScale(click, t, 1.3); }
    cue('flash', t > 1.3, () => K.ov.flash(1));
    cue('p1', t > 1.6, () => { p1 = K.ov.print(print1, thumb ? 'PRINT 1: THUMB' : 'PRINT 1', -4); p1.show(); });
    cue('line', t > 2.0, () => K.say(cs.lines?.[0]));
    cue('p1off', t > 3.5, () => p1?.hide());
    cue('p2', t > 3.6, () => { p2 = K.ov.print(print2, 'PRINT 2', 3); p2.show(); });
    K.ov.caption(t < 1.4 ? 'SAY CHEESE…' : null, { yellow: true });
    K.cam(fs.p(10.5, -s * 0.8, 1.8), P.root.position.clone().add(V(0, 1.45, 0)).addScaledVector(V(fs.tx, 0, fs.tz), -0.8), 36);
  };
  const d0 = I.dispose; I.dispose = () => { p1?.remove(); p2?.remove(); d0(); };
  return I;
};

// ---------- X5 Sore Loser VAR (post) ----------
function makeVarBooth(I, screenTex) {
  const bag = I.bag; const g = new THREE.Group();
  const floor = bag.M(new THREE.BoxGeometry(4.4, 0.2, 3.2), '#2a2f55', 2); floor.position.y = 0.1; g.add(floor);
  const back = bag.M(new THREE.BoxGeometry(4.4, 2.9, 0.18), '#14183c', 2); back.position.set(0, 1.55, -1.5); g.add(back);
  const sign = board(bag, signTexture(bag, ['VAR'], { bg: '#7b4dff', fg: '#ffffff', w: 512, h: 200 }), 2.0, 0.8); sign.position.set(0, 2.55, -1.38); g.add(sign);
  const desk = bag.M(new RoundedBoxGeometry(3.4, 0.95, 1.0, 2, 0.08), '#d0d6e0', 2.5); desk.position.set(0, 0.6, 0.3); g.add(desk);
  const mon = bag.M(new RoundedBoxGeometry(1.9, 1.15, 0.12, 2, 0.04), '#1a1420', 2.5); mon.position.set(0, 1.75, 0.55); mon.rotation.x = -0.12; g.add(mon);
  const screen = new THREE.Mesh(bag.add(new THREE.PlaneGeometry(1.76, 0.99)), bag.add(new THREE.MeshBasicMaterial({ map: screenTex }))); screen.position.set(0, 1.75, 0.485); screen.rotation.set(-0.12, Math.PI, 0); g.add(screen);
  const stand = bag.M(new THREE.CylinderGeometry(0.05, 0.08, 0.6, 6), '#1a1420', 1.5); stand.position.set(0, 1.15, 0.55); g.add(stand);
  return { g, screen };
}
function drawSquirrel(g, x, y, s) {
  g.save(); g.translate(x, y); g.scale(s, s);
  g.fillStyle = '#b5652e'; g.strokeStyle = '#1a1420'; g.lineWidth = 5;
  g.beginPath(); g.moveTo(10, 10); g.bezierCurveTo(70, 10, 80, -90, 30, -100); g.bezierCurveTo(0, -105, -5, -70, 20, -60); g.bezierCurveTo(40, -55, 35, -20, 0, -15); g.closePath(); g.fill(); g.stroke();
  g.beginPath(); g.ellipse(-12, -10, 22, 30, 0, 0, 7); g.fill(); g.stroke();
  g.beginPath(); g.arc(-22, -48, 18, 0, 7); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(-30, -62); g.lineTo(-26, -78); g.lineTo(-18, -63); g.fill(); g.stroke();
  g.fillStyle = '#1a1420'; g.beginPath(); g.arc(-30, -50, 3.5, 0, 7); g.fill();
  g.restore();
}
function drawPigeon(g, x, y, s) {
  g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = '#1a1420'; g.lineWidth = 5;
  g.fillStyle = '#8a93a8'; g.beginPath(); g.ellipse(0, -30, 40, 28, -0.2, 0, 7); g.fill(); g.stroke();
  g.beginPath(); g.ellipse(-8, -34, 26, 14, 0.5, 0, 7); g.fillStyle = '#6f7891'; g.fill(); g.stroke();
  g.fillStyle = '#8a93a8'; g.beginPath(); g.arc(36, -62, 17, 0, 7); g.fill(); g.stroke();
  g.fillStyle = '#ff9a1f'; g.beginPath(); g.moveTo(50, -62); g.lineTo(66, -58); g.lineTo(50, -54); g.fill();
  g.fillStyle = '#1a1420'; g.beginPath(); g.arc(40, -66, 3.5, 0, 7); g.fill();
  g.strokeStyle = '#ff9a1f'; g.beginPath(); g.moveTo(-6, -4); g.lineTo(-10, 12); g.moveTo(8, -4); g.lineTo(10, 12); g.stroke();
  g.restore();
}
SCENES.sore_loser_var = (K, cs) => {
  const I = base(K, { camera: true, postBanner: 'HE WANTS A REVIEW' });
  const pigeon = cs.params.variant === 'pigeon';
  const fs = stageAt(K.C, K.C.finishM);
  const s = openSide(K.world, fs, 8);
  const root = I.bag.group();
  const pub = K.pub(cs.who);
  const A = actor(K, I, pub);
  const J = actor(K, I, CAST.jeff, { hideBib: true });
  // Jeff's headset
  const hs = I.bag.M(new THREE.TorusGeometry(0.42, 0.05, 6, 20, Math.PI), '#1a1420', 0); J.rig.head.add(hs); hs.position.y = 0.48;
  for (const sx of [-1, 1]) { const cup = I.bag.M(new THREE.CylinderGeometry(0.14, 0.14, 0.1, 12).rotateZ(Math.PI / 2), '#1a1420', 1.5); cup.position.set(sx * 0.44, 0.42, 0); J.rig.head.add(cup); }
  const mic = I.bag.M(new THREE.CylinderGeometry(0.02, 0.02, 0.45, 5).rotateX(Math.PI / 2.4), '#1a1420', 0); mic.position.set(0.36, 0.3, 0.22); J.rig.head.add(mic);
  // the replay on the VAR monitor: the real finish frame, plus a squirrel "offside"
  const frame = finishFrame(K, cs.params.finishRaceS ?? K.sim.byId[cs.params.winner].officialS, 768, 432, s);
  { const g = frame.getContext('2d'); g.setLineDash([18, 12]); g.strokeStyle = '#ff2d55'; g.lineWidth = 7; g.beginPath(); g.moveTo(frame.width * 0.3, 0); g.lineTo(frame.width * 0.3, frame.height); g.stroke(); g.setLineDash([]);
    if (pigeon) drawPigeon(g, frame.width * 0.24, frame.height * 0.84, 1.3); else drawSquirrel(g, frame.width * 0.26, frame.height * 0.86, 1.3);
    g.font = '48px "Lilita One", sans-serif'; g.textAlign = 'center'; g.lineWidth = 8; g.strokeStyle = '#1a1420'; g.fillStyle = '#ff2d55'; g.strokeText((pigeon ? 'HANDBALL?' : 'OFFSIDE?'), frame.width / 2, 58); g.fillText((pigeon ? 'HANDBALL?' : 'OFFSIDE?'), frame.width / 2, 58); }
  const scrTex = I.bag.add(new THREE.CanvasTexture(frame)); scrTex.colorSpace = THREE.SRGBColorSpace;
  const booth = makeVarBooth(I, scrTex); root.add(booth.g);
  const bPos = fs.p(-32, s * 16, -0.16); booth.g.position.copy(bPos); booth.g.rotation.y = fs.yaw + s * Math.PI / 2;
  const cone = makeCone(I.bag, 0.75); root.add(cone);
  const boink = sprite(I.bag, bubbleTexture(I.bag, 'BOINK!', { burst: true, w: 512, h: 300, size: 120 }), 0.9, 512 / 300); root.add(boink); boink.visible = false;
  const cue = cues();
  const NOM = 4.4; // trimmed: straight to the screen, the verdict, then the cone
  const aPos = fs.p(7, s * 0.5, 0);
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, NOM) + 1.7;
    const jp = booth.g.localToWorld(V(t < 3.2 ? -0.95 : 0, 0.05, -0.25)); place(J, jp, booth.g.rotation.y + (t < 3.2 ? 0.35 : 0));
    drive(J, dt, t > 3.6 && t < 4.3 ? 'pose' : 'idle', 'point', { expr: t > 3.6 ? 'happy' : 'effort' });
    if (t < 3.6) { J.rig.arms[1].sh.rotation.set(-0.9, 0, 0.2); J.rig.arms[1].el.rotation.x = -1.6; J.rig.head.rotation.x = 0.15; }
    if (t < 1.7) {
      // the TV-rectangle mime
      place(A, aPos, fs.yaw + Math.PI + s * 0.5);
      drive(A, dt, 'idle', null, { expr: 'worried' });
      const u = (t * 1.5) % 1; const corners = [[-1, 1], [1, 1], [1, -1], [-1, -1]]; const k = Math.floor(u * 4), f2 = u * 4 - k; const p0 = corners[k], p1 = corners[(k + 1) % 4];
      const px = lerp(p0[0], p1[0], f2), py = lerp(p0[1], p1[1], f2);
      A.rig.arms[0].sh.rotation.set(-1.7 - py * 0.35, 0, -0.2 + Math.min(0, px) * 0.4); A.rig.arms[1].sh.rotation.set(-1.7 - py * 0.35, 0, 0.2 + Math.max(0, px) * 0.4);
      for (const a of A.rig.arms) a.el.rotation.x = -0.3;
      K.cam(fs.p(2.6, s * 2.4, 1.7), aPos.clone().add(V(0, 1.7, 0)), 40);
      K.ov.caption(t > 0.3 ? 'VAR CHECK!' : null, { yellow: true });
    } else if (t < 4.3) {
      // the booth: over Jeff's shoulder at the replay, then his verdict
      if (t < 3.2) { const sc = booth.screen.getWorldPosition(V()); K.cam(booth.g.localToWorld(V(0.35, 1.95, -0.75)), sc, 42, 0, { occlude: false }); K.ov.caption(pigeon ? 'PIGEON HANDBALL?' : 'SQUIRREL OFFSIDE?', { yellow: true }); }
      else { K.cam(booth.g.localToWorld(V(2.3, 1.9, 0.9)), J.root.localToWorld(V(0, J.r.height - 0.5, 0.1)), 38, 0, { occlude: false }); K.ov.caption(null); }
      cue('line', t > 1.9, () => K.say(cs.lines?.[0]));
      cue('stamp', t > 3.5, () => K.ov.big('RESULT STANDS', '#2ec27e'));
    } else {
      K.ov.big(null);
      // he kicks a cone; it bounces back and taps his shin; a shrug
      place(A, aPos, fs.yaw + Math.PI + s * 0.5);
      const kickT = t - 4.3;
      drive(A, dt, kickT > 0.9 ? 'celebrate' : 'idle', 'shrug', { expr: kickT > 0.9 ? 'normal' : 'effort' });
      if (kickT < 0.5) { const k = Math.sin(clamp01(kickT / 0.35) * Math.PI); A.rig.legs[1].hp.rotation.x = -1.3 * k; }
      const fwd = V(Math.sin(A.root.rotation.y), 0, Math.cos(A.root.rotation.y));
      const out = clamp01((kickT - 0.2) / 0.35), back = clamp01((kickT - 0.55) / 0.3);
      const d = 0.8 + out * 3.5 - back * 3.3;
      const cp = aPos.clone().addScaledVector(fwd, d); cp.y = K.C.heightAt(cp.x, cp.z) + Math.sin(Math.PI * out) * 1.2 + Math.sin(Math.PI * back) * 0.6;
      cone.position.copy(cp); cone.rotation.set((out - back) * 6.3, 0, 0);
      boink.visible = kickT > 0.82 && kickT < 1.3; if (boink.visible) { boink.position.copy(aPos).add(V(0, 1.2, 0)).addScaledVector(fwd, 0.6); popScale(boink, kickT, 0.82); }
      K.cam(aPos.clone().addScaledVector(fwd, 5.5).add(V(fs.rx * s * 2.5, 1.5, fs.rz * s * 2.5)), aPos.clone().add(V(0, 1.0, 0)).addScaledVector(fwd, 1), 40);
      K.ov.caption(kickT > 0.9 ? 'FAIR ENOUGH.' : null);
    }
    if (t < 4.3) { const c0 = aPos.clone().addScaledVector(V(Math.sin(fs.yaw + Math.PI), 0, Math.cos(fs.yaw + Math.PI)), 0.8); cone.position.copy(c0); cone.position.y = K.C.heightAt(c0.x, c0.z); cone.rotation.set(0, 0, 0); }
  };
  return I;
};

// shared with scenes2.js (batch 2)
export { base, cues, yawTo, drive, actor, place, wp, tscale, shooter, asInset, noteSprites, rigFor, renderToCanvas, finishFrame, makeMallet };
