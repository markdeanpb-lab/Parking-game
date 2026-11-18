// Batch 2 cutscenes (docs/CUTSCENE_IDEAS_2.md, gags 1-10). Same contract as scenes.js; registered into SCENES.
// Never shows a year or a date; PB status and run numbers only after the finish.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { gradientMap } from '../toon.js';
import { PATH_W } from '../course.js';
import {
  CAST, makeGoose, makeCone, makePuffs, bubbleTexture, sprite, popScale, signTexture, board, openSide, stageAt, smooth, backOut, lerp, clamp01, V,
} from './kit.js';
import { SCENES, base, cues, yawTo, drive, actor, place, wp, tscale, noteSprites, rigFor, makeMallet } from './scenes.js';

const goldDisc = (I, r = 0.16) => { const g = new THREE.Group(); const d = I.bag.M(new THREE.CylinderGeometry(r, r, 0.05, 18).rotateX(Math.PI / 2), I.bag.mat('#ffd23f', { emissive: '#664400', emissiveIntensity: 0.25 }), 2.5); g.add(d); const rib = I.bag.M(new THREE.BoxGeometry(0.08, 0.45, 0.02).translate(0, 0.32, 0), '#2e6fe0', 0); g.add(rib); return g; };
const fin = (K) => stageAt(K.C, K.C.finishM);

// two staged copies running side by side (used by the pair gags, played in the picture-in-picture box)
function pairStage(K, cs, I, aId, bId, m) {
  const f = stageAt(K.C, m, null);
  const A = actor(K, I, K.pub(aId)), Bq = actor(K, I, K.pub(bId));
  return { f, A, B: Bq };
}

// ---------- 1. The Pointing Standoff (post): the same official time, to the second ----------
SCENES.pointing_standoff = (K, cs) => {
  const I = base(K, { camera: true, postBanner: 'DEAD HEAT?!' });
  const fs = fin(K); const s = openSide(K.world, fs, 8);
  const root = I.bag.group();
  const A = actor(K, I, K.pub(cs.who)), Bq = actor(K, I, K.pub(cs.params.other));
  const M = actor(K, I, CAST.maureen, { vest: '#d8ff1f' });
  const goose = makeGoose(I.bag, { scale: 1.5, bellHat: !!cs.params.gooseBell }); root.add(goose.root);
  const halves = [0, 1].map((k) => { const h = I.bag.M(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 16, 1, false, k * Math.PI, Math.PI).rotateX(Math.PI / 2), '#ffd23f', 2.5); root.add(h); return h; });
  const centre = fs.p(6, 0, 0);
  const cue = cues();
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, 6.1);
    // circle each other, pointing
    const ang = t < 1.2 ? 0 : (t - 1.2) * 1.1;
    const R = 1.25;
    const pa = centre.clone().add(V(Math.cos(ang) * R * fs.rx + Math.sin(ang) * R * fs.tx, 0, Math.cos(ang) * R * fs.rz + Math.sin(ang) * R * fs.tz));
    const pb = centre.clone().sub(V(Math.cos(ang) * R * fs.rx + Math.sin(ang) * R * fs.tx, 0, Math.cos(ang) * R * fs.rz + Math.sin(ang) * R * fs.tz));
    pa.y = pb.y = centre.y;
    const gooseT = clamp01((t - 4.4) / 1.4);
    const gp = fs.p(7.2, lerp(-6, 6, gooseT) * s, 0);
    goose.root.position.copy(gp); goose.root.rotation.y = Math.atan2(fs.rx * s, fs.rz * s); goose.pose({ t, waddle: 1, honk: t > 5.0 && t < 5.4 ? 1 : 0 });
    goose.root.visible = t > 4.3;
    const lookAtGoose = t > 4.8;
    place(A, pa, lookAtGoose ? yawTo(pa, gp) : yawTo(pa, pb)); place(Bq, pb, lookAtGoose ? yawTo(pb, gp) : yawTo(pb, pa));
    for (const X of [A, Bq]) { drive(X, dt, t < 0.6 ? 'run' : 'idle', null, { speed: 4, rate: 1, expr: t > 0.6 ? 'worried' : 'effort' }); if (t > 0.6) { X.rig.arms[1].sh.rotation.set(-1.55, 0, 0.05); X.rig.arms[1].el.rotation.x = -0.05; } }
    // Maureen arrives with ONE finish token, looks, shrugs, snaps it in half
    const mIn = smooth(2.2, 3.0, t);
    const mp = centre.clone().addScaledVector(V(fs.tx, 0, fs.tz), lerp(-6, -1.6, mIn)).addScaledVector(V(fs.rx, 0, fs.rz), -s * 0.4);
    place(M, mp, yawTo(mp, centre)); drive(M, dt, t > 2.2 && t < 3.0 ? 'jog' : t > 3.6 && t < 4.3 ? 'celebrate' : 'idle', 'shrug', { speed: 2, rate: 1 });
    M.root.visible = t > 2.1;
    const hand = M.root.localToWorld(V(0, M.r.hipH + 0.55, 0.45));
    const snap = smooth(3.5, 3.9, t);
    halves.forEach((h, k) => { h.visible = t > 2.1; h.position.copy(hand).add(V((k ? 1 : -1) * snap * 0.45, snap * 0.2, 0)); h.rotation.set(0, M.root.rotation.y, (k ? 1 : -1) * snap * 0.8); });
    cue('line', t > 1.3, () => K.say(cs.lines?.[0]));
    K.ov.caption(t < 1.2 ? 'SAME TIME. TO THE SECOND.' : t < 3.4 ? 'DEAD HEAT!' : t < 4.6 ? 'ONE TOKEN…' : 'IT WAS GERALD.', { yellow: t >= 1.2 && t < 3.4 });
    K.cam(centre.clone().addScaledVector(V(fs.tx, 0, fs.tz), 6.5).add(V(fs.rx * s * 2.2, 2.0, fs.rz * s * 2.2)), centre.clone().add(V(0, 1.4, 0)), 44);
  };
  return I;
};

// ---------- 2. The Sub-20 Wall (live finish-straight overlay; keeps its holes all night) ----------
SCENES.sub20_wall = (K, cs) => {
  const I = base(K, { camera: false, hide: 'none' });
  const wallM = cs.params.wallM || 4960;
  const f = stageAt(K.C, wallM, null);
  const root = I.bag.group();
  const COLS = 12, ROWS = 7, BW = (PATH_W + 1.2) / COLS, BH = 0.34;
  const geo = I.bag.add(new RoundedBoxGeometry(BW * 0.96, BH * 0.92, 0.35, 1, 0.04));
  const bricks = new THREE.InstancedMesh(geo, I.bag.mat('#c8553d'), COLS * ROWS); bricks.frustumCulled = false; root.add(bricks);
  const mortar = new THREE.Mesh(I.bag.add(new THREE.BoxGeometry(PATH_W + 1.2, ROWS * BH, 0.2)), I.bag.mat('#e9d8c4')); root.add(mortar);
  const sign = board(I.bag, signTexture(I.bag, ['20:00'], { bg: '#ffffff', fg: '#e8333f', w: 512, h: 220 }), 1.6, 0.7, '#1a1420', 0.1); root.add(sign);
  const O = new THREE.Object3D();
  const lat0 = -(PATH_W + 1.2) / 2 + BW / 2;
  // holes: earlier smashes tonight (deterministic lateral spots) + any made live now
  const holes = [];
  for (let k = 0; k < (cs.params.holesBefore || 0); k++) holes.push({ lat: ((k * 0.37 + 0.2) % 1 - 0.5) * PATH_W * 0.8, t0: -9 });
  const hit = new Set();
  const flying = []; // bricks knocked out live
  const smash = sprite(I.bag, bubbleTexture(I.bag, 'SMASH!', { burst: true, w: 512, h: 300, size: 130, bg: '#ffd23f' }), 1.4, 512 / 300); root.add(smash); smash.visible = false;
  const inHole = (c, r) => { const lat = lat0 + c * BW, y = r * BH; return holes.some((h) => Math.abs(lat - h.lat) < 0.55 + (y > 1.6 ? -0.15 : 0) && y < 2.05); };
  const cue = cues();
  let lastSmash = -9;
  I.update = (t, dt, b) => {
    const st = K.sim.stateAt(Math.max(0, b));
    // a near-miss Mark reaching the wall makes a Mark-shaped hole where he really is
    for (const id of cs.params.near || []) {
      const r = st.byId[id]; if (!r || hit.has(id) || r.m < wallM - 0.5) continue;
      hit.add(id); holes.push({ lat: r.lat ?? 0, t0: t }); lastSmash = t;
      smash.position.copy(f.p(0, r.lat ?? 0, 2.6));
    }
    const drop = backOut(clamp01(t / 0.5));
    const fade = 1 - smooth(cs.durationS - 0.6, cs.durationS, t);
    root.position.set(0, (1 - drop) * 7, 0);
    root.scale.setScalar(Math.max(0.001, fade));
    let k = 0;
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const off = r % 2 ? BW / 2 : 0;
      const hole = inHole(c, r);
      const p = f.p(0, lat0 + c * BW + off - (r % 2 ? BW / 4 : 0), r * BH + BH / 2);
      O.position.copy(p); O.rotation.set(0, f.yaw + Math.PI / 2, 0); O.scale.setScalar(hole ? 0.0001 : 1); O.updateMatrix(); bricks.setMatrixAt(k++, O.matrix);
    }
    bricks.instanceMatrix.needsUpdate = true;
    mortar.position.copy(f.p(0, 0, (ROWS * BH) / 2 - 0.02).add(V(-f.tx * 0.08, 0, -f.tz * 0.08))); mortar.rotation.set(0, f.yaw, 0); mortar.visible = false;
    sign.position.copy(f.p(0, 0, ROWS * BH + 0.55)); sign.rotation.set(0, f.yaw + Math.PI, 0);
    smash.visible = t - lastSmash < 0.9 && lastSmash > 0; if (smash.visible) popScale(smash, t, lastSmash, 0.2);
    cue('line', lastSmash > 0, () => K.say(cs.lines?.[0]));
    K.ov.caption(t < 0.4 ? null : lastSmash > 0 && t - lastSmash < 1.6 ? 'STRAIGHT THROUGH!' : `THE 20-MINUTE WALL · HOLES: ${holes.length}`, { yellow: lastSmash > 0 && t - lastSmash < 1.6 });
    void flying;
  };
  return I;
};

// ---------- 3. The Mirror Routine (inset): past and future Mark, silent-film mirror ----------
SCENES.mirror_routine = (K, cs) => {
  const I = base(K, { camera: false, pip: true, hide: 'none', pipLabel: 'MARK v MARK' });
  const { f, A: N, B: O } = pairStage(K, cs, I, cs.who, cs.params.on, Math.min(4600, (cs.params.atM || 2400)));
  I.pipOnly = [N.root, O.root];
  const medal = goldDisc(I); N.root.add(medal); medal.visible = false;
  const s = openSide(K.world, f, 8);
  const cue = cues();
  I.update = (t, dt) => {
    const run = t * 4.2;
    const ahead = smooth(3.9, 5.0, t) * 2.6;
    place(N, f.p(run + ahead, -s * 0.7), f.yaw); place(O, f.p(run, s * 0.7), f.yaw);
    // beats: glance (0.4-1.0), scratch head (1.0-1.7), check watch (1.7-2.4), wave (2.4-2.9), star jump (2.9-3.6), medal + nose tap (3.6-4.2)
    for (const [X, me] of [[N, 1], [O, 0]]) {
      drive(X, dt, 'run', null, { speed: 4.2, rate: 1, expr: t > 3.7 ? (me ? 'happy' : 'worried') : 'normal' });
      const r = X.rig;
      if (t > 0.4 && t < 1.0) r.head.rotation.y = (me ? 1 : -1) * s * 0.9;
      if (t > 1.0 && t < 1.7) { r.arms[1].sh.rotation.set(-2.6, 0, 0.6); r.arms[1].el.rotation.x = -1.8; }
      if (t > 1.7 && t < 2.4) { r.arms[0].sh.rotation.set(-1.5, 0, 0.4); r.arms[0].el.rotation.x = -1.6; r.head.rotation.x = 0.4; }
      if (t > 2.4 && t < 2.9) { r.arms[1].sh.rotation.set(0, 0, 2.6); r.arms[1].el.rotation.x = 0.2 * Math.sin(t * 20); }
      if (t > 2.9 && t < 3.6) { const j = Math.abs(Math.sin((t - 2.9) * 9)); r.arms[0].sh.rotation.set(0, 0, -2.4 * j); r.arms[1].sh.rotation.set(0, 0, 2.4 * j); r.legs[0].hp.rotation.z = -0.5 * j; r.legs[1].hp.rotation.z = 0.5 * j; X.root.position.y += j * 0.35; }
      if (!me && t > 4.1) { r.arms[0].sh.rotation.set(0.3, 0, -0.3); r.arms[1].sh.rotation.set(0.3, 0, 0.3); r.head.rotation.x = 0.5; }
    }
    medal.visible = t > 3.6; medal.position.set(0.1, N.r.hipH + 0.9, 0.45);
    if (t > 3.6 && t < 4.2) { N.rig.arms[1].sh.rotation.set(-1.2, 0, 0.2); N.rig.arms[0].sh.rotation.set(-2.2, 0, -0.3); N.rig.arms[0].el.rotation.x = -2.0; }
    cue('line', t > 0.5, () => K.say(cs.lines?.[0]));
    I.pipCaption = t < 2.9 ? 'MIRROR, MIRROR…' : t < 3.6 ? 'STAR JUMP!' : 'NEWER MODEL';
    const c = N.root.position.clone().lerp(O.root.position, 0.5);
    K.pipCamSet(c.clone().addScaledVector(V(f.tx, 0, f.tz), 6.0).addScaledVector(V(f.rx, 0, f.rz), s * 2.6).add(V(0, 1.8, 0)), c.clone().add(V(0, 1.3, 0)), 44);
  };
  return I;
};

// ---------- 4. Heart vs Heart (inset panel): what his watch recorded, two Saturdays, same pace ----------
SCENES.heart_vs_heart = (K, cs) => {
  const I = base(K, { camera: false, hide: 'none' });
  const a = K.pub(cs.who), o = K.pub(cs.params.other);
  const nm = (p) => (p?.shortName || p?.nickname || 'MARK').toUpperCase();
  const el = document.createElement('div');
  el.className = 'mrc-hh';
  const heart = 'M50 88 C10 60 0 40 12 22 C24 6 44 10 50 26 C56 10 76 6 88 22 C100 40 90 60 50 88 Z';
  el.innerHTML = `<style>
    .mrc-hh{position:absolute;display:flex;gap:0;border:calc(var(--u)*.5) solid #14183c;border-radius:calc(var(--u)*1);overflow:hidden;box-shadow:0 calc(var(--u)*.7) 0 #14183c;opacity:0;transform:scale(.6);transform-origin:100% 0;transition:opacity .2s,transform .25s cubic-bezier(.2,.8,.2,1)}
    .mrc-hh.on{opacity:1;transform:none}.mrc-hh>div{flex:1;position:relative;background:#1d2350;display:flex;flex-direction:column;align-items:center;justify-content:center}
    .mrc-hh>div+div{background:#24305f;border-left:calc(var(--u)*.3) dashed #fff}
    .mrc-hh svg{width:78%;height:auto;overflow:visible}.mrc-hh b{font-weight:400;font-size:calc(var(--u)*2.4);-webkit-text-stroke:calc(var(--u)*.25) #14183c;paint-order:stroke fill}
    .mrc-hh i{font-style:normal;font-size:calc(var(--u)*1.7);opacity:.95}
    .mrc-hh .hb{transform-origin:50% 55%;animation:mrchb .28s infinite}@keyframes mrchb{0%,100%{transform:scale(1)}40%{transform:scale(1.28)}}
    .mrc-hh .calm .hb{animation:mrchb2 1.6s infinite}@keyframes mrchb2{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
    .mrc-hh .lean{transition:transform .4s}.mrc-hh.knock .lean{transform:translateX(26%) rotate(12deg)}
  </style>
  <div><svg viewBox="-20 -25 140 140"><g class="lean"><g class="hb"><path d="${heart}" fill="#ff2d55" stroke="#14183c" stroke-width="5"/><path d="M28 30 q8-10 14 0" stroke="#fff" stroke-width="5" fill="none"/></g>
    <g fill="#e9eef5" opacity=".9"><circle cx="18" cy="-4" r="8"/><circle cx="84" cy="-10" r="10"/><circle cx="60" cy="-18" r="7"/></g><circle cx="100" cy="6" r="9" fill="#ffd23f" stroke="#14183c" stroke-width="4"/></g></svg>
    <b style="color:${a?.colour?.primary || '#ffd23f'}">${nm(a)}</b><i>his watch: ${cs.params.hr} bpm</i></div>
  <div class="calm"><svg viewBox="-20 -25 140 140"><path d="M-6 98 L28 64 L84 64 L104 98" stroke="#7a4a2a" stroke-width="7" fill="none"/><path d="M24 64 L50 30 L96 30" stroke="#ff8a1f" stroke-width="7" fill="none"/>
    <g class="hb"><path d="${heart}" fill="#ff8fb0" stroke="#14183c" stroke-width="5" transform="translate(6 -4) scale(.82)"/></g>
    <rect class="pg" x="40" y="44" width="46" height="34" fill="#fff" stroke="#14183c" stroke-width="4"/><path d="M48 54 h30 M48 62 h30 M48 70 h20" stroke="#9aa0a8" stroke-width="3"/>
    <rect x="-8" y="60" width="16" height="18" rx="3" fill="#fff" stroke="#14183c" stroke-width="4"/></svg>
    <b style="color:${o?.colour?.primary || '#57c7ff'}">${nm(o)}</b><i>his watch: ${cs.params.hr2} bpm</i></div>`;
  K.ov.root.appendChild(el);
  const cue = cues();
  I.update = (t) => {
    const rc = K.ov.pipRect(); const w = rc.w * 0.86, h = rc.h * 1.15; Object.assign(el.style, { left: `${rc.x + rc.w - w}px`, top: `${rc.y}px`, width: `${w}px`, height: `${h}px` });
    el.classList.toggle('on', t > 0.05 && t < cs.durationS - 0.25);
    el.classList.toggle('knock', t > 3.4 && t < 4.4);
    cue('line', t > 0.4, () => K.say(cs.lines?.[0]));
    K.ov.caption(t > 0.3 ? (t > 3.4 ? 'HOW?' : 'SAME PACE.') : null, { yellow: t > 3.4 });
  };
  const d0 = I.dispose; I.dispose = () => { el.remove(); d0(); };
  return I;
};

// ---------- 5. Half Marathon Before Breakfast (pre-roll) ----------
SCENES.breakfast = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const big = cs.params.variant === 'big';
  const st0 = K.stage(0); const s = openSide(K.world, st0, 9);
  const root = I.bag.group();
  const who = K.runners[cs.who];
  const C = actor(K, I, K.pub(cs.who));
  const gowns = [];
  for (const id of K.ids) {
    if (id === cs.who) continue;
    const r = K.runners[id], rig = rigFor(r); if (!rig) continue;
    const g = new THREE.Group();
    const robe = I.bag.M(new RoundedBoxGeometry(0.95, 1.0, 0.7, 3, 0.2), ['#ff9bd2', '#9fd8ff', '#c7f59a', '#ffe08a'][gowns.length % 4], 2.5); robe.position.y = 0.35; g.add(robe);
    const mug = I.bag.M(new THREE.CylinderGeometry(0.1, 0.09, 0.2, 12), '#ffffff', 2); rig.arms[1].hand.add(mug); mug.position.y = -0.12;
    rig.torso.add(g); gowns.push({ r, rig, g, mug, fall: 0 });
  }
  let cape = null, tape = null, M = null;
  if (big) {
    cape = new THREE.Mesh(I.bag.add(new THREE.PlaneGeometry(1.2, 1.5)), I.bag.mat('#dfe6f0', { side: THREE.DoubleSide, emissive: '#556070', emissiveIntensity: 0.3 })); C.rig.torso.add(cape); cape.position.set(0, 0.3, -0.42); cape.rotation.x = 0.2;
    tape = new THREE.Mesh(I.bag.add(new THREE.BoxGeometry(PATH_W, 0.08, 0.02)), I.bag.basic('#ff3d8b')); root.add(tape);
    M = actor(K, I, CAST.maureen, { vest: '#d8ff1f' });
  }
  const steam = makePuffs(I.bag, 6, '#ffffff'); root.add(steam.root);
  const cue = cues();
  I.update = (t, dt, b) => {
    const slot = who.root.position.clone();
    const T = cs.durationS;
    who.root.visible = t > T - 0.3; // his real self takes the slot as the copy arrives
    const arrive = smooth(0.2, big ? 3.4 : 2.0, t);
    const from = big ? st0.p(60, 0, 0) : slot.clone().addScaledVector(V(st0.tx, 0, st0.tz), 3).addScaledVector(V(st0.rx, 0, st0.rz), -s * 10);
    const cp = from.clone().lerp(slot, arrive); cp.y = K.C.heightAt(cp.x, cp.z) + 0.16;
    C.root.visible = t < T - 0.3;
    const turned = big && t > 4.2;
    place(C, cp, arrive < 1 ? yawTo(cp, slot) : (big && !turned ? st0.yaw + Math.PI : st0.yaw));
    if (arrive < 1) drive(C, dt, big ? 'trudge' : 'jog', null, { speed: 2.5, rate: 1, expr: big ? 'pant' : 'happy' });
    else if (big && t < 4.2) { drive(C, dt, 'celebrate', 'jump', { expr: 'happy' }); }
    else if (big) { drive(C, dt, 'idle', null, { expr: 'sad' }); }
    else { drive(C, dt, 'pose', 'stretch', { expr: 'normal' }); }
    steam.root.position.copy(C.root.position).add(V(0, C.r.height + 0.2, 0)); steam.update((t * 0.7) % 1, 0.8, 0);
    if (tape) { tape.position.copy(st0.p(0.5, 0, 1.15)); tape.rotation.set(0, st0.yaw + Math.PI / 2, 0); tape.visible = !(arrive >= 1); }
    if (M) { M.root.visible = t > 3.6; const mp = slot.clone().addScaledVector(V(st0.rx, 0, st0.rz), s * 1.2); place(M, mp, yawTo(mp, C.root.position)); drive(M, dt, 'idle'); if (t > 4.4) { M.rig.arms[1].sh.rotation.set(-1.5, 0, 0); M.root.rotation.y = st0.yaw; } }
    // the other four: yawning in dressing gowns, mugs; gowns drop when he arrives (big: they stay smug)
    for (const G of gowns) {
      G.rig.arms[0].sh.rotation.set(-0.3 - Math.max(0, Math.sin(t * 2)) * 2.0, 0, -0.3);
      G.rig.arms[1].sh.rotation.set(-1.1, 0, 0.2); G.rig.arms[1].el.rotation.x = -1.3;
      const drop = !big && t > 2.3 ? smooth(2.3, 2.8, t) : 0;
      G.g.position.y = -drop * 1.4; G.g.visible = drop < 0.95; G.mug.visible = drop < 0.95;
    }
    cue('line', t > (big ? 3.4 : 1.4), () => K.say(cs.lines?.[0]));
    K.ov.caption(big ? (t < 3.4 ? `${cs.params.km} KM ALREADY…` : t < 4.4 ? 'FINISHED!' : 'WRONG WAY, MARK.') : (t > 0.4 ? 'ALREADY WARMED UP' : null), { yellow: !big || t < 3.4 });
    const look = slot.clone().add(V(0, 1.3, 0)).lerp(C.root.position.clone().add(V(0, 1.3, 0)), 0.5);
    K.cam(st0.p(big ? 9 : 7.5, -s * 3.5, 2.4), look, big ? 52 : 46);
  };
  const d0 = I.dispose; I.dispose = () => { for (const G of gowns) { G.g.parent?.remove(G.g); G.mug.parent?.remove(G.mug); } if (who) who.root.visible = true; d0(); };
  return I;
};

// ---------- 6. Before and After (inset): the same race, one each side of it ----------
SCENES.before_after = (K, cs) => {
  const I = base(K, { camera: false, pip: true, hide: 'none', pipLabel: 'BEFORE / AFTER' });
  const { f, A: Bf, B: Af } = pairStage(K, cs, I, cs.who, cs.params.other, 2600);
  I.pipOnly = [Bf.root, Af.root];
  const s = openSide(K.world, f, 8);
  const bib = board(I.bag, signTexture(I.bag, ['RACE', 'DAY?'], { bg: '#ffffff', fg: '#e8333f', w: 256, h: 256, round: 14 }), 0.5, 0.5, '#1a1420', 0.03); Bf.rig.torso.add(bib); bib.position.set(0, 0.45, 0.42);
  const medal = goldDisc(I, 0.2); Af.root.add(medal);
  const cape = new THREE.Mesh(I.bag.add(new THREE.PlaneGeometry(1.1, 1.3)), I.bag.mat('#dfe6f0', { side: THREE.DoubleSide, emissive: '#556070', emissiveIntensity: 0.3 })); Af.rig.torso.add(cape); cape.position.set(0, 0.25, -0.45); cape.rotation.x = 0.35;
  const notes = noteSprites(I, 3);
  const grp = I.bag.group(); for (const n of notes) grp.add(n);
  I.pipOnly.push(grp);
  const cue = cues();
  I.update = (t, dt) => {
    const run = t * 4.0;
    place(Bf, f.p(run, s * 0.7), f.yaw); place(Af, f.p(run + smooth(0, 1.0, t) * 0.0, -s * 0.7), f.yaw);
    drive(Bf, dt, 'run', null, { speed: 4, rate: 1, expr: t > 1.4 && t < 3.4 ? 'love' : 'worried' });
    drive(Af, dt, 'run', null, { speed: 4, rate: 1, expr: 'smug' });
    // before: polishing his shoes mid-stride, then staring, pointing
    if (t < 1.2) { Bf.rig.torso.rotation.x = 0.7; Bf.rig.arms[1].sh.rotation.set(-0.6, 0, 0.1); Bf.rig.arms[1].el.rotation.x = -0.2 + Math.sin(t * 25) * 0.3; }
    else if (t < 3.0) { Bf.rig.head.rotation.y = -s * 0.9; Bf.rig.arms[1].sh.rotation.set(-1.4, 0, 0.0); Bf.rig.arms[1].el.rotation.x = 0; if (t > 2.2) { Bf.rig.arms[1].sh.rotation.set(-0.9, 0, -0.9); Bf.rig.arms[1].el.rotation.x = -1.7; } }
    else { Bf.rig.head.rotation.y = -s * 1.2; Bf.root.position.addScaledVector(V(f.rx, 0, f.rz), -s * 0.3); }
    // after: medal on the chest, then hidden behind his back, whistling
    const hide = smooth(3.0, 3.4, t);
    medal.position.set(0, Af.r.hipH + 0.75 - hide * 0.4, lerp(0.45, -0.55, hide));
    if (hide > 0) { Af.rig.arms[0].sh.rotation.set(0.9, 0, -0.2); Af.rig.arms[1].sh.rotation.set(0.9, 0, 0.2); Af.rig.head.rotation.x = -0.25; }
    notes.forEach((n, i) => { const u = (t * 0.9 + i / 3) % 1; n.visible = t > 3.3; n.position.copy(Af.root.position).add(V(0.3, Af.r.height + 0.2 + u * 1.2, 0)); n.material.opacity = 1 - u; });
    cue('line', t > 1.3, () => K.say(cs.lines?.[0]));
    I.pipCaption = t < 1.3 ? 'BEFORE…' : t < 3.0 ? '…AND AFTER' : 'IS THAT…?';
    const c = Bf.root.position.clone().lerp(Af.root.position, 0.5);
    K.pipCamSet(c.clone().addScaledVector(V(f.tx, 0, f.tz), 6.0).addScaledVector(V(f.rx, 0, f.rz), s * 2.6).add(V(0, 1.8, 0)), c.clone().add(V(0, 1.3, 0)), 44);
  };
  return I;
};

// ---------- 7. Road to 100 (post tag): Maureen's loyalty card ----------
SCENES.road_to_100 = (K, cs) => {
  const I = base(K, { camera: false, hide: 'none', postBanner: 'ROAD TO 100' });
  const nums = cs.params.numbers || [], before = new Set(cs.params.before || []);
  const el = document.createElement('div');
  el.className = 'mrc-r100';
  let cells = '';
  for (let n = 1; n <= 100; n++) cells += `<span data-n="${n}" class="${before.has(n) ? 'old' : ''} ${n > 98 ? 'todo' : ''}">${n}</span>`;
  const special = nums.includes(95) ? '<em class="sp">MOVING DAY</em>' : nums.some((n) => n >= 96 && n <= 98) ? '<em class="sp">VISITOR</em>' : '';
  el.innerHTML = `<style>
    .mrc-r100{position:absolute;right:calc(var(--u)*2.4);top:calc(var(--u)*17.5);width:calc(var(--u)*34);padding:calc(var(--u)*1) calc(var(--u)*1.2);background:#fff6df;color:#14183c;border:calc(var(--u)*.5) solid #14183c;border-radius:calc(var(--u)*1);box-shadow:0 calc(var(--u)*.7) 0 #14183c;transform:translateX(130%) rotate(4deg);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
    .mrc-r100.on{transform:rotate(-2deg)}
    .mrc-r100 h3{margin:0 0 calc(var(--u)*.5);font-weight:400;font-size:calc(var(--u)*2.2);display:flex;justify-content:space-between}
    .mrc-r100 .g{display:grid;grid-template-columns:repeat(10,1fr);gap:calc(var(--u)*.25)}
    .mrc-r100 span{aspect-ratio:1;border:2px solid #c9b88f;border-radius:50%;font:800 calc(var(--u)*.75) Nunito,sans-serif;display:flex;align-items:center;justify-content:center;color:#b8a77e}
    .mrc-r100 span.old{background:#cfd4dc;color:#fff;border-color:#9aa0a8}
    .mrc-r100 span.new{background:#e8333f;color:#fff;border-color:#a8151f;transform:scale(1.35) rotate(-10deg);transition:transform .2s cubic-bezier(.3,1.6,.5,1)}
    .mrc-r100 span.todo{border-style:dashed;border-color:#e8333f;color:#e8333f}
    .mrc-r100 .sp{position:absolute;right:calc(var(--u)*1);bottom:calc(var(--u)*-1.2);font-style:normal;font-size:calc(var(--u)*1.7);color:#e8333f;border:calc(var(--u)*.3) solid #e8333f;padding:0 calc(var(--u)*.6);background:#fff;transform:rotate(-8deg)}
  </style><h3><span>ROAD TO 100</span><span>${nums.length} STAMPS</span></h3><div class="g">${cells}</div>${special}`;
  K.ov.root.appendChild(el);
  const cue = cues();
  I.update = (t) => {
    el.classList.toggle('on', t > 0.05 && t < cs.durationS - 0.2);
    nums.forEach((n, i) => cue(`s${n}`, t > 0.5 + i * 0.32, () => el.querySelector(`[data-n="${n}"]`)?.classList.add('new')));
    cue('line', t > 0.6, () => K.say(cs.lines?.[0]));
  };
  const d0 = I.dispose; I.dispose = () => { el.remove(); d0(); };
  return I;
};

// ---------- 8. Where's the Incline Button? (live, lap-1 Hill) ----------
SCENES.incline_button = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const r = K.runners[cs.who];
  const root = I.bag.group();
  const screenTex = (txt) => I.bag.tex(512, 256, (g) => { g.fillStyle = '#14183c'; g.fillRect(0, 0, 512, 256); g.font = '58px "Lilita One", sans-serif'; g.textAlign = 'center'; g.fillStyle = '#7dff9a'; g.fillText('INCLINE', 256, 92); g.font = '96px "Lilita One", sans-serif'; g.fillStyle = txt.includes('!') ? '#ff3d5a' : '#7dff9a'; g.fillText(txt, 256, 200); });
  const tA = screenTex('4.0%'), tB = screenTex('9.0%!');
  const con = new THREE.Group(); root.add(con);
  const body = new THREE.Mesh(I.bag.add(new RoundedBoxGeometry(1.4, 0.8, 0.12, 2, 0.05)), I.bag.mat('#9fd8ff', { transparent: true, opacity: 0.55 })); con.add(body);
  const scr = new THREE.Mesh(I.bag.add(new THREE.PlaneGeometry(0.9, 0.45)), I.bag.add(new THREE.MeshBasicMaterial({ map: tA, transparent: true, opacity: 0.95 }))); scr.position.set(-0.15, 0.08, 0.07); con.add(scr);
  const up = new THREE.Mesh(I.bag.add(new THREE.ConeGeometry(0.1, 0.16, 3)), I.bag.basic('#2ec27e')); up.position.set(0.48, 0.14, 0.08); con.add(up);
  const dn = up.clone(); dn.material = I.bag.basic('#ff3d5a'); dn.rotation.z = Math.PI; dn.position.y = -0.14; con.add(dn);
  const goose = makeGoose(I.bag, { scale: 1.2 }); root.add(goose.root);
  const beep = sprite(I.bag, bubbleTexture(I.bag, 'BEEP.', { w: 400, h: 220, size: 100 }), 0.55, 400 / 220); root.add(beep); beep.visible = false;
  const creak = sprite(I.bag, bubbleTexture(I.bag, 'CREAK!', { burst: true, w: 512, h: 300, size: 120, bg: '#ffd23f' }), 0.9, 512 / 300); root.add(creak); creak.visible = false;
  const cue = cues();
  I.update = (t, dt, b) => {
    if (!r) return;
    const st = K.sim.stateAt(Math.max(0, b)).byId[cs.who];
    const fwd = V(st.tx, 0, st.tz), right = V(-st.tz, 0, st.tx);
    const ap = r.root.position;
    con.position.copy(ap).addScaledVector(fwd, 0.85).add(V(0, r.hipH + 0.55, 0)); con.lookAt(ap.clone().add(V(0, r.hipH + 0.55, 0)));
    con.scale.setScalar(backOut(clamp01(t / 0.4)));
    const rig = rigFor(r);
    if (rig && t < 3.6) { const poke = Math.max(0, Math.sin(t * 9)); rig.arms[1].sh.rotation.set(-1.45 - poke * 0.15, 0, 0.1); rig.arms[1].el.rotation.x = -0.3 * (1 - poke); }
    beep.visible = t > 0.7 && t < 2.2 && Math.floor(t * 3) % 2 === 0; if (beep.visible) beep.position.copy(con.position).add(V(0, 0.65, 0));
    // Gerald leans in and presses UP with his beak
    goose.root.visible = t > 2.2;
    goose.root.position.copy(ap).addScaledVector(fwd, 0.9).addScaledVector(right, 1.0); goose.root.position.y = K.C.heightAt(goose.root.position.x, goose.root.position.z);
    goose.root.rotation.y = Math.atan2(-right.x, -right.z); goose.pose({ t, nod: t > 2.6 && t < 3.0 ? 0.6 : 0 });
    if (t > 2.85) scr.material.map = tB;
    creak.visible = t > 3.0 && t < 3.9; if (creak.visible) { creak.position.copy(ap).add(V(0, r.height + 0.9, 0)); popScale(creak, t, 3.0); }
    if (rig && t > 3.6) { rig.head.rotation.y = 0.9; r.setPop?.('!'); }
    cue('line', t > 0.6, () => K.say(cs.lines?.[0]));
    K.ov.caption(t < 0.4 ? null : t < 2.3 ? 'DOWN. DOWN!' : t < 3.0 ? '…UP?' : 'THANKS, GERALD.', { yellow: t >= 2.3 });
    const roll = smooth(3.0, 3.6, t) * 0.12;
    K.cam(ap.clone().addScaledVector(right, -3.4).addScaledVector(fwd, 3.0).add(V(0, 1.9, 0)), ap.clone().add(V(0, 1.6, 0)).addScaledVector(fwd, 0.4), 46, roll, { sun: 30 });
  };
  return I;
};

// ---------- 9. The PB Bell (post): three escalating rings a night ----------
SCENES.pb_bell = (K, cs) => {
  const I = base(K, { camera: true, postBanner: 'PERSONAL BEST!' });
  const ring = cs.params.ring || 1;
  const fs = fin(K); const s = openSide(K.world, fs, 8);
  const root = I.bag.group();
  const postP = fs.p(4, s * (PATH_W / 2 + 1.6), 0);
  const post = I.bag.M(new THREE.CylinderGeometry(0.1, 0.12, 3.2, 8).translate(0, 1.6, 0), '#7a4a2a', 2.5); post.position.copy(postP); root.add(post);
  const arm = I.bag.M(new THREE.BoxGeometry(0.9, 0.12, 0.12).translate(0.45, 0, 0), '#7a4a2a', 2); arm.position.copy(postP).add(V(0, 3.1, 0)); arm.rotation.y = Math.atan2(fs.tx, fs.tz) - Math.PI / 2; root.add(arm);
  const bellG = new THREE.Group(); root.add(bellG);
  const bell = I.bag.M(new THREE.SphereGeometry(0.45, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), I.bag.mat('#ffd23f', { emissive: '#664400', emissiveIntensity: 0.25, side: THREE.DoubleSide }), 3); bell.position.y = -0.45; bellG.add(bell);
  const clap = I.bag.M(new THREE.SphereGeometry(0.1, 8, 6), '#7a4a2a', 1.5); clap.position.y = -0.75; bellG.add(clap);
  const rope = I.bag.M(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 6).translate(0, -0.8, 0), '#e9d8c4', 0); bellG.add(rope); rope.position.y = -0.8;
  const bellHome = arm.localToWorld(V(0.8, 0, 0));
  const M = actor(K, I, CAST.maureen, { vest: '#d8ff1f' });
  const W = actor(K, I, K.pub(cs.who));
  const cone = makeCone(I.bag, 0.6); root.add(cone); cone.visible = false;
  const goose = makeGoose(I.bag, { scale: 1.4, bellHat: true }); root.add(goose.root); goose.root.visible = false;
  const ding = sprite(I.bag, bubbleTexture(I.bag, ring === 2 ? 'DONK.' : 'DING!', { burst: true, w: 512, h: 300, size: 130, bg: '#ffd23f' }), 1.0, 512 / 300); root.add(ding); ding.visible = false;
  const cue = cues();
  I.update = (g0, dt, b, { gagDur }) => {
    const t = tscale(g0, gagDur, 3.6);
    const mp = bellHome.clone().addScaledVector(V(fs.tx, 0, fs.tz), -1.7); mp.y = K.C.heightAt(mp.x, mp.z) + 0.16;
    place(M, mp, yawTo(mp, bellHome)); drive(M, dt, 'idle');
    const wp2 = fs.p(5.2, s * (PATH_W / 2 - 0.6), 0); place(W, wp2, yawTo(wp2, bellHome) + 0.6); drive(W, dt, 'celebrate', 'jump', { expr: 'happy' });
    let swing = 0, fall = 0;
    if (ring === 1) { swing = t > 0.8 ? Math.sin((t - 0.8) * 9) * 0.5 * Math.exp(-(t - 0.8) * 0.6) : 0; M.rig.arms[1].sh.rotation.set(-2.4 + Math.max(0, Math.sin(t * 9)) * 0.4, 0, 0); }
    else if (ring === 2) { rope.visible = t < 0.9; cone.visible = t > 0.9; M.rig.arms[1].sh.rotation.set(-2.6 + Math.max(0, Math.sin(t * 7)) * 0.9, 0, 0); cone.position.copy(wp(M.rig.arms[1].hand, V())); swing = t > 1.3 ? Math.sin((t - 1.3) * 8) * 0.3 : 0; }
    else { fall = smooth(1.0, 1.6, t); M.rig.arms[1].sh.rotation.set(-2.4, 0, 0); }
    bellG.position.copy(bellHome).add(V(0, -fall * 2.6, 0)).addScaledVector(V(fs.tx, 0, fs.tz), fall > 0.99 ? (t - 1.6) * 6 : 0);
    bellG.rotation.set(fall * 2.5 + (fall > 0.99 ? (t - 1.6) * 8 : 0), 0, swing);
    goose.root.visible = ring === 3 && t > 2.4; goose.root.position.copy(fs.p(2.5, s * 2.5, 0)); goose.root.rotation.y = Math.atan2(-fs.rx * s, -fs.rz * s); goose.pose({ t, waddle: 0.5 });
    ding.visible = (ring === 1 && t > 0.8 && t < 1.8) || (ring === 2 && t > 1.3 && t < 2.2); if (ding.visible) { ding.position.copy(bellHome).add(V(0, 0.8, 0)); popScale(ding, t, ring === 2 ? 1.3 : 0.8); }
    cue('line', t > 0.9, () => K.say(cs.lines?.[0]));
    K.ov.caption(ring === 1 ? (t > 0.8 ? 'PB BELL!' : null) : ring === 2 ? (t < 0.9 ? 'PB BELL…' : 'WITH A CONE.') : (t < 2.4 ? 'OH NO.' : "THE GOOSE'S BELL NOW"), { yellow: ring !== 3 || t > 2.4 });
    const focus = ring === 3 && t > 2.4 ? goose.root.position.clone().add(V(0, 1, 0)) : bellHome.clone().add(V(0, -1.2, 0));
    K.cam(focus.clone().addScaledVector(V(fs.tx, 0, fs.tz), 3.5).add(V(fs.rx * s * 6.0, 0.2, fs.rz * s * 6.0)), focus.clone().add(V(0, 0.1, 0)), 48);
  };
  return I;
};

// ---------- 10. The Wrong Kit Bag (pre-roll + a short live tail) ----------
SCENES.wrong_kit_bag = (K, cs) => {
  const I = base(K, { camera: true, hide: 'none' });
  const v = cs.params.variant || 'swim';
  const r = K.runners[cs.who], rig = r && rigFor(r);
  const st0 = K.stage(0); const s = openSide(K.world, st0, 9);
  const kit = new THREE.Group();
  const add = (o, parent) => { parent.add(o); return o; };
  if (rig) {
    if (v === 'swim') {
      const ring = add(I.bag.M(new THREE.TorusGeometry(0.55, 0.16, 10, 24).rotateX(Math.PI / 2), '#ff3d5a', 2.5), rig.hips); ring.position.y = 0.2;
      const gog = add(I.bag.M(new THREE.TorusGeometry(0.34, 0.06, 6, 20), '#57c7ff', 2), rig.head); gog.position.set(0, 0.48, 0.12); gog.rotation.x = -0.1;
      for (const a of rig.arms) { const band = add(I.bag.M(new THREE.TorusGeometry(0.15, 0.08, 8, 14).rotateX(Math.PI / 2), '#ff9a1f', 2), a.sh); band.position.y = -0.25; }
    } else if (v === 'weights') {
      const bar = add(I.bag.M(new THREE.CylinderGeometry(0.04, 0.04, 2.6, 8).rotateZ(Math.PI / 2), '#9aa0a8', 1.5), rig.torso); bar.position.set(0, 0.85, -0.25);
      for (const sx of [-1, 1]) { const pl = I.bag.M(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 18).rotateZ(Math.PI / 2), '#1a1420', 2.5); pl.position.set(sx * 1.15, 0, 0); bar.add(pl); }
    } else if (v === 'ski') {
      for (const l of rig.legs) { const ski = add(I.bag.M(new THREE.BoxGeometry(0.16, 0.05, 2.2).translate(0, 0, 0.4), '#2e6fe0', 2), l.an); ski.position.y = -0.2; }
      for (const a of rig.arms) { const pole = add(I.bag.M(new THREE.CylinderGeometry(0.025, 0.025, 1.4, 6).translate(0, -0.7, 0), '#1a1420', 0), a.hand); pole.rotation.x = 0.3; }
    }
  }
  const thrown = makePuffs(I.bag, 6, '#f4f4f4'); const root = I.bag.group(); root.add(thrown.root);
  const cue = cues();
  I.update = (t, dt, b) => {
    if (!r || !rig) return;
    const bb = b;
    const on = bb < 1.1;
    for (const o of [...rig.hips.children, ...rig.head.children, ...rig.torso.children, ...rig.legs.flatMap((l) => l.an.children), ...rig.arms.flatMap((a) => [...a.sh.children, ...a.hand.children])]) if (o.userData.__kit) o.visible = on;
    if (v === 'yoga' && bb < 0.6) {
      // tree pose, eyes shut, as the others leave
      rig.legs[1].hp.rotation.set(-0.2, 0, 1.0); rig.legs[1].kn.rotation.x = 2.3; rig.legs[0].hp.rotation.set(0, 0, 0); rig.legs[0].kn.rotation.x = 0;
      for (const [i, a] of rig.arms.entries()) { a.sh.rotation.set(0, 0, (i ? 1 : -1) * 2.9); a.el.rotation.x = 0; }
      r.setPop?.(bb > 0 ? '!' : null);
    }
    if (v === 'weights' && bb < 1.1) for (const a of rig.arms) { a.sh.rotation.set(-2.6, 0, 0); a.el.rotation.x = -1.6; }
    if (v === 'swim' && bb > 0 && bb < 1.1) { const k = t * 6; rig.arms[0].sh.rotation.set(-Math.PI + Math.sin(k) * 2.4, 0, 0); rig.arms[1].sh.rotation.set(-Math.PI + Math.sin(k + Math.PI) * 2.4, 0, 0); }
    if (v === 'ski' && bb < 1.1) { rig.legs[0].hp.rotation.z = -0.25; rig.legs[1].hp.rotation.z = 0.25; }
    thrown.root.position.copy(r.root.position).add(V(0, 1.2, 0)); thrown.update(clamp01((bb - 1.1) / 0.8), 1.2, -1);
    cue('line', bb > -2.2, () => K.say(cs.lines?.[0]));
    K.ov.caption(bb < 1.1 ? { swim: 'WRONG BAG: SWIMMING', weights: 'WRONG BAG: WEIGHTS', yoga: 'WRONG BAG: YOGA', ski: 'WRONG BAG: SKIS' }[v] : null, { yellow: true });
    I.camera = bb > -2.8 && bb < 1.6;
    if (I.camera) { const ap = r.root.position; K.cam(ap.clone().addScaledVector(V(st0.tx, 0, st0.tz), 4.8).addScaledVector(V(st0.rx, 0, st0.rz), s * 2.2).add(V(0, 1.9, 0)), ap.clone().add(V(0, 1.5, 0)), 46); }
  };
  // tag what we added so it can be hidden / removed
  const tagged = [];
  if (rig) for (const o of [...rig.hips.children, ...rig.head.children, ...rig.torso.children, ...rig.legs.flatMap((l) => l.an.children), ...rig.arms.flatMap((a) => [...a.sh.children, ...a.hand.children])]) if (I.bag.items.includes(o.geometry)) { o.userData.__kit = true; tagged.push(o); }
  void kit; void add;
  const d0 = I.dispose; I.dispose = () => { for (const o of tagged) o.parent?.remove(o); d0(); };
  return I;
};

void RoundedBoxGeometry; void gradientMap; void makeMallet; void lerp;
