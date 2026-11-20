// MARKRUN live hijinks (Wacky Races in the race shot): plays racePlan.hijinks (server/game/hijinks.mjs) ON the live race.
// Nothing pauses and nothing moves a runner along the course: the race view places every runner from the plan, then
// this module adds props, other actors and an animation layer on top (a hop, a flail, a look back, a vault).
// Everything is a pure function of broadcast time b (seek / speed / restart safe).
//
// createHijinks(ctx) -> { frame(dt, b), seek(b), reset(), dispose(), list, active(b) }
// ctx: { scene, camera, C, world, runners: {id: runner}, pubById, getPlan(), getSim(), emit(evt), container }
import * as THREE from 'three';
import { Bag, rigOf, makeGoose, makePuffs, makeActor, makeCloud, makeRain, CAST, bubbleTexture, sprite, popScale, smooth, clamp01, backOut, V } from '../cutscenes/kit.js';

const PRE = 1.5, POST = 1.2; // props appear a little before a hijink and linger after it
const CSS = `.mrh-chip{position:absolute;left:50%;bottom:calc(min(1vw,1.78vh)*4.6);transform:translateX(-50%) skewX(-8deg) scale(.6);opacity:0;transition:opacity .18s,transform .22s cubic-bezier(.3,1.6,.5,1);
  background:#ffd23f;color:#14183c;border:calc(min(1vw,1.78vh)*.32) solid #14183c;border-radius:calc(min(1vw,1.78vh)*.8);padding:calc(min(1vw,1.78vh)*.15) calc(min(1vw,1.78vh)*1.3);
  font-family:var(--font-display,"Lilita One","Arial Black",sans-serif);font-size:calc(min(1vw,1.78vh)*2.3);box-shadow:0 calc(min(1vw,1.78vh)*.45) 0 #14183c;pointer-events:none;z-index:4;white-space:nowrap}
.mrh-chip.on{opacity:1;transform:translateX(-50%) skewX(-8deg) scale(1)}`;

export function createHijinks(ctx) {
  let planRef = null, list = [];
  const live = new Map(); // id -> instance
  const said = new Set();
  const rigs = new WeakMap();
  const rigFor = (r) => { if (!rigs.has(r)) { try { rigs.set(r, rigOf(r)); } catch { rigs.set(r, null); } } return rigs.get(r); };
  if (!document.getElementById('mrh-style')) { const s = document.createElement('style'); s.id = 'mrh-style'; s.textContent = CSS; document.head.appendChild(s); }
  const chip = document.createElement('div'); chip.className = 'mrh-chip'; ctx.container.appendChild(chip);
  let chipText = '';

  function sync() {
    const p = ctx.getPlan();
    if (p === planRef) return;
    clearAll(); planRef = p; list = (p?.hijinks || []).filter((h) => KINDS[h.kind]);
  }
  function clearAll() { for (const inst of live.values()) inst.dispose(); live.clear(); }

  function frame(dt, b) {
    sync();
    if (!list.length) return;
    let cap = '';
    for (const h of list) {
      const on = b >= h.atBroadcastS - PRE && b < h.untilBroadcastS + POST;
      let inst = live.get(h.id);
      if (on && !inst) { try { inst = KINDS[h.kind](K(), h); live.set(h.id, inst); } catch (e) { console.error('[hijinks]', h.kind, e); list = list.filter((x) => x !== h); continue; } }
      if (!on && inst) { inst.dispose(); live.delete(h.id); continue; }
      if (!inst) continue;
      const u = b - h.atBroadcastS; // seconds into the gag (negative = setting up)
      try { inst.update(u, dt, b); } catch (e) { console.error('[hijinks]', h.kind, e); }
      if (u >= 0 && u < h.untilBroadcastS - h.atBroadcastS) cap = h.caption || '';
      if (u >= 0.35 && u < 1.5 && !said.has(h.id) && h.line?.text) { said.add(h.id); ctx.emit?.({ kind: 'commentary', text: h.line.text, speaker: h.line.speaker, priority: 3, hijink: h.id, broadcastS: b }); }
    }
    if (cap !== chipText) { chipText = cap; if (cap) chip.textContent = cap; chip.classList.toggle('on', !!cap); }
  }
  function seek(b) { sync(); clearAll(); said.clear(); for (const h of list) if (h.atBroadcastS + 0.35 < b) said.add(h.id); chip.classList.remove('on'); chipText = ''; }
  function reset() { sync(); clearAll(); said.clear(); chip.classList.remove('on'); chipText = ''; }

  // context for one hijink: runner state + rig helpers
  function K() {
    const sim = ctx.getSim();
    return {
      THREE, sim, C: ctx.C, scene: ctx.scene, camera: ctx.camera, world: ctx.world, pub: (id) => ctx.pubById[id],
      runner: (id) => ctx.runners[id], rig: (id) => rigFor(ctx.runners[id]),
      st: (id, b) => sim.stateAt(Math.max(0, b)).byId[id],
      frameOf(id, b) { const s = sim.stateAt(Math.max(0, b)).byId[id]; const fwd = V(s.tx, 0, s.tz).normalize(); return { s, pos: V(s.x, s.y, s.z), fwd, right: V(-fwd.z, 0, fwd.x) }; },
    };
  }
  return {
    frame, seek, reset,
    get list() { sync(); return list.slice(); },
    activeAt(b) { sync(); return list.find((h) => b >= h.atBroadcastS && b < h.untilBroadcastS) || null; },
    dispose() { clearAll(); chip.remove(); },
  };
}

// ======================================================================================================
// The hijinks. Each returns { update(u, dt, b), dispose() }; u = seconds since the gag started (broadcast time).
const KINDS = {};
const base = (k) => { const bag = new Bag(k.scene); return { bag, root: bag.group(), dispose() { bag.dispose(); } }; };
const ease = (x) => x * x * (3 - 2 * x);
const L = (h) => h.untilBroadcastS - h.atBroadcastS;

// ---- Gerald the goose chases him, nipping at his shorts (a real slowdown: he keeps looking back, swatting) ----
KINDS.goose_chase = (k, h) => {
  const I = base(k);
  const g = makeGoose(I.bag, { scale: 1.6 }); I.root.add(g.root);
  const feathers = makePuffs(I.bag, 6, '#ffffff'); I.root.add(feathers.root);
  const honk = sprite(I.bag, bubbleTexture(I.bag, 'HONK!', { burst: true, w: 512, h: 300, size: 130 }), 0.9, 512 / 300); I.root.add(honk);
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const D = L(h);
    const inK = ease(clamp01((u + 0.6) / 1.0)), outK = ease(clamp01((u - D) / POST));
    const lunge = Math.max(0, Math.sin(u * 7)) ** 3; // nips
    const gp = pos.clone().addScaledVector(fwd, -1.9 + lunge * 0.6 - outK * 6).addScaledVector(right, (1 - inK) * 7 + Math.sin(u * 3) * 0.35);
    gp.y = k.C.heightAt(gp.x, gp.z) + 0.16;
    g.root.position.copy(gp); g.root.rotation.y = Math.atan2(fwd.x, fwd.z) + (1 - inK) * -1.0;
    g.pose({ t: u + 5, waddle: 1.6, honk: Math.max(0, Math.sin(u * 7 + 0.6)) > 0.6 ? 1 : 0, nod: -0.5 * lunge, wingL: 0.6 + 0.4 * Math.sin(u * 14), wingR: 0.6 + 0.4 * Math.sin(u * 14 + 1) });
    g.root.visible = u > -0.6 && outK < 0.99;
    honk.visible = u > 0 && u < D && Math.floor(u * 1.4) % 2 === 0; if (honk.visible) { honk.position.copy(gp).add(V(0, 2.8, 0)); popScale(honk, u % (1 / 0.7), 0, 0.15); }
    feathers.root.position.copy(pos).addScaledVector(fwd, -0.4).add(V(0, 1.0, 0)); feathers.root.scale.setScalar(0.35); feathers.update(((u * 1.4) % 1), 1.2, -1); feathers.root.visible = u > 0 && u < D;
    // him: looks back over his shoulder, arms up and swatting, little hops
    if (rig && u > 0 && u < D) {
      const k2 = smooth(0, 0.4, u) * (1 - smooth(D - 0.4, D, u));
      rig.head.rotation.y = 2.2 * k2 * (Math.sin(u * 2.2) > 0 ? 1 : -1);
      rig.arms[0].sh.rotation.set(-1.0 - Math.sin(u * 16) * 0.8 * k2, 0, -0.9 * k2); rig.arms[1].sh.rotation.set(-1.0 + Math.sin(u * 16) * 0.8 * k2, 0, 0.9 * k2);
      r.root.position.y += Math.abs(Math.sin(u * 9)) * 0.28 * k2;
      r.setPop?.('!');
    }
  };
  return I;
};

// ---- a banana skin on the path: a slip, legs windmilling, arms everywhere, then on he goes (a real slowdown) ----
function makeBanana(bag) {
  const g = new THREE.Group();
  const peel = bag.M(new THREE.TorusGeometry(0.32, 0.09, 8, 16, 2.4), '#ffe23f', 3); peel.rotation.x = Math.PI / 2; g.add(peel);
  for (let i = 0; i < 3; i++) { const f = bag.M(new THREE.ConeGeometry(0.1, 0.36, 6), '#ffd23f', 2); f.position.set(Math.cos(i * 2.1) * 0.22, 0.05, Math.sin(i * 2.1) * 0.22); f.rotation.set(Math.PI / 2, 0, i * 2.1); g.add(f); }
  const tip = bag.M(new THREE.SphereGeometry(0.06, 6, 5), '#5a3418', 0); tip.position.set(0.3, 0, 0.12); g.add(tip);
  g.scale.setScalar(2.2);
  return g;
}
KINDS.banana = (k, h) => {
  const I = base(k);
  const ban = makeBanana(I.bag); I.root.add(ban);
  const slipAt = Math.min(1.0, L(h) * 0.25);
  const sp = k.frameOf(h.who, h.atBroadcastS + slipAt);
  const home = sp.pos.clone(); home.y = k.C.heightAt(home.x, home.z) + 0.2;
  const zing = sprite(I.bag, bubbleTexture(I.bag, 'WHOOPS!', { burst: true, w: 560, h: 300, size: 120, bg: '#ffe23f' }), 1.0, 560 / 300); I.root.add(zing);
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const s = u - slipAt, SLIP = 1.9;
    // the peel lies in wait; then it's under his feet, spinning, for the whole slip; then it flips away behind him
    if (s < 0) { ban.position.copy(home); ban.rotation.set(0, u * 0.2, 0); }
    else if (s < SLIP) { ban.position.copy(pos).addScaledVector(fwd, 0.35).add(V(0, 0.18 + Math.abs(Math.sin(s * 11)) * 0.25, 0)); ban.rotation.set(0, s * 14, Math.sin(s * 9) * 0.4); }
    else { const f = clamp01((s - SLIP) / 1.0); ban.position.copy(pos).addScaledVector(fwd, -0.5 - f * 4).add(V(0, 0.2 + Math.sin(Math.PI * f) * 3, 0)); ban.rotation.set(s * 9, s * 5, 0); ban.visible = f < 1; }
    zing.visible = s > 0 && s < 1.1; if (zing.visible) { zing.position.copy(pos).add(V(0, 3.2, 0)); popScale(zing, s, 0, 0.18); }
    if (rig && s > 0 && s < SLIP) {
      const k2 = Math.sin(Math.PI * clamp01(s / SLIP));
      rig.body.rotation.x = -0.55 * k2 + Math.sin(s * 11) * 0.12 * k2; // feet out front, leaning back
      rig.legs[0].hp.rotation.x = -1.3 * k2 + Math.sin(s * 22) * 0.9 * k2; rig.legs[1].hp.rotation.x = -1.3 * k2 + Math.sin(s * 22 + Math.PI) * 0.9 * k2; // cartoon leg-wheel
      rig.arms[0].sh.rotation.set(s * 18, 0, -1.2 * k2); rig.arms[1].sh.rotation.set(s * 18 + Math.PI, 0, 1.2 * k2); // windmill
      r.root.position.y += 0.35 * k2;
      r.setPop?.('!');
    }
  };
  return I;
};

// ---- his own personal raincloud: it follows him, pouring, while he hunches under it (a real slowdown) ----
KINDS.raincloud = (k, h) => {
  const I = base(k);
  const cloud = makeCloud(I.bag, { grey: '#7d879b', scale: 1.35 }); I.root.add(cloud);
  const rain = makeRain(I.bag, 90, { w: 2.2, h: 3.0 }); cloud.add(rain.mesh); rain.mesh.position.y = -0.3; rain.mesh.scale.setScalar(1 / 1.35);
  const splash = makePuffs(I.bag, 6, '#9fd8ff'); I.root.add(splash.root);
  const drip = sprite(I.bag, bubbleTexture(I.bag, 'SPLOSH!', { burst: true, w: 560, h: 300, size: 120, bg: '#9fd8ff' }), 0.9, 560 / 300); I.root.add(drip);
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const D = L(h);
    const inK = backOut(clamp01((u + 1.0) / 0.9)), outK = ease(clamp01((u - D) / 0.8));
    cloud.visible = u > -1.0 && outK < 0.99;
    cloud.position.copy(pos).addScaledVector(fwd, 0.15).add(V(0, 3.35 + Math.sin(u * 2.5) * 0.12 + (1 - inK) * 3 + outK * 3, 0));
    cloud.rotation.y = Math.atan2(k.camera.position.x - pos.x, k.camera.position.z - pos.z) * 0.6 + Math.atan2(fwd.x, fwd.z) * 0.4; // half-turned to camera: the grumpy face reads
    cloud.scale.setScalar(1.35 * Math.max(0.01, inK) * (1 - outK));
    rain.update(u + 3, 0.08); rain.mesh.visible = u > -0.3 && u < D;
    splash.root.position.copy(pos).add(V(0, 2.25, 0)); splash.root.scale.setScalar(0.28); splash.update((u * 2.2) % 1, 1.2, 0); splash.root.visible = u > 0 && u < D;
    drip.visible = u > 0.2 && u < 1.4; if (drip.visible) { drip.position.copy(pos).add(V(0, 4.8, 0)).addScaledVector(fwd, 0.8); popScale(drip, u, 0.2, 0.18); }
    if (rig && u > 0 && u < D) {
      const k2 = smooth(0, 0.3, u) * (1 - smooth(D - 0.4, D, u));
      rig.arms[0].sh.rotation.set(-2.8 * k2, 0, -0.35 * k2); rig.arms[1].sh.rotation.set(-2.8 * k2, 0, 0.35 * k2); rig.arms[0].el.rotation.x = -1.7 * k2; rig.arms[1].el.rotation.x = -1.7 * k2;
      rig.torso.rotation.x += 0.3 * k2; rig.head.rotation.x = 0.45 * k2;
      r.root.position.y -= 0.1 * k2;
    }
  };
  return I;
};

// ---- rocket shoes: flames from his heels, smoke rings, speed lines (a real surge) ----
KINDS.rocket_shoes = (k, h) => {
  const I = base(k);
  const rig = k.rig(h.who);
  const flames = [];
  const flameGeo = I.bag.add(new THREE.ConeGeometry(0.16, 0.9, 10).rotateX(-Math.PI / 2).translate(0, 0, -0.55));
  const coreGeo = I.bag.add(new THREE.ConeGeometry(0.09, 0.55, 8).rotateX(-Math.PI / 2).translate(0, 0, -0.4));
  if (rig) for (const l of rig.legs) {
    const g = new THREE.Group(); g.position.set(0, -0.15, -0.12);
    const f = new THREE.Mesh(flameGeo, I.bag.basic('#ff7a1f')); const c = new THREE.Mesh(coreGeo, I.bag.basic('#fff27a'));
    g.add(f, c); l.an.add(g); flames.push(g);
  }
  const smoke = []; for (let i = 0; i < 8; i++) { const p = makePuffs(I.bag, 4, '#e9eef5'); I.root.add(p.root); smoke.push(p); }
  const lines = new THREE.InstancedMesh(I.bag.add(new THREE.BoxGeometry(0.04, 0.04, 2.6)), I.bag.basic('#ffffff', { transparent: true, opacity: 0.85 }), 16); lines.frustumCulled = false; I.root.add(lines);
  const O = new THREE.Object3D();
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b);
    const on = u > -0.2 && u < L(h);
    const k2 = smooth(-0.2, 0.3, u) * (1 - smooth(L(h) - 0.3, L(h), u));
    for (const f of flames) { f.visible = on; f.scale.set(1 + Math.sin(u * 40) * 0.15, 1 + Math.sin(u * 37) * 0.15, (1.2 + Math.sin(u * 53) * 0.35) * k2 + 0.001); }
    smoke.forEach((p, i) => { const f = ((u * 2.2 + i / smoke.length) % 1); p.root.position.copy(pos).addScaledVector(fwd, -1.2 - f * 9).add(V(0, 0.35, 0)); p.root.scale.setScalar(0.5); p.update(f, 0.9, 0); p.root.visible = on && u > 0; });
    for (let i = 0; i < 16; i++) { const f = ((u * 3 + i * 0.37) % 1); O.position.copy(pos).addScaledVector(right, ((i * 0.61) % 1 - 0.5) * 3.2).addScaledVector(fwd, 2 - f * 8).add(V(0, 0.4 + ((i * 0.43) % 1) * 2.0, 0)); O.rotation.set(0, Math.atan2(fwd.x, fwd.z), 0); O.scale.setScalar(on ? k2 + 0.001 : 0.0001); O.updateMatrix(); lines.setMatrixAt(i, O.matrix); }
    lines.instanceMatrix.needsUpdate = true;
    if (rig && on) { rig.torso.rotation.x += 0.45 * k2; for (const [i, a] of rig.arms.entries()) { a.sh.rotation.set(1.3 * k2, 0, (i ? 0.35 : -0.35) * k2); a.el.rotation.x = -0.2; } }
  };
  const d0 = I.dispose; I.dispose = () => { for (const f of flames) f.parent?.remove(f); d0(); };
  return I;
};

// ---- a swarm of wasps (a real surge: he bolts, arms flailing over his head) ----
KINDS.wasps = (k, h) => {
  const I = base(k);
  const N = 14;
  const body = new THREE.InstancedMesh(I.bag.add(new THREE.CapsuleGeometry(0.09, 0.16, 4, 8).rotateX(Math.PI / 2)), I.bag.mat('#ffd23f'), N); body.frustumCulled = false; I.root.add(body);
  const stripe = new THREE.InstancedMesh(I.bag.add(new THREE.CylinderGeometry(0.095, 0.095, 0.06, 8).rotateX(Math.PI / 2)), I.bag.mat('#1a1420'), N * 2); stripe.frustumCulled = false; I.root.add(stripe);
  const wing = new THREE.InstancedMesh(I.bag.add(new THREE.PlaneGeometry(0.22, 0.12)), I.bag.basic('#e9f8ff', { transparent: true, opacity: 0.8, side: THREE.DoubleSide }), N * 2); wing.frustumCulled = false; I.root.add(wing);
  const buzz = sprite(I.bag, bubbleTexture(I.bag, 'BZZZZ!', { burst: true, w: 560, h: 300, size: 120, bg: '#ffd23f' }), 0.9, 560 / 300); I.root.add(buzz);
  const O = new THREE.Object3D(), P = V();
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const inK = ease(clamp01((u + 0.8) / 1.0)), outK = ease(clamp01((u - L(h)) / POST));
    const c = pos.clone().addScaledVector(fwd, -1.1 - outK * 8).add(V(0, 2.2, 0)).addScaledVector(right, (1 - inK) * -6);
    for (let i = 0; i < N; i++) {
      const ph = i * 1.37;
      P.copy(c).add(V(Math.sin(u * 7 + ph) * 1.1, Math.sin(u * 9 + ph * 2) * 0.55, Math.cos(u * 6 + ph) * 1.1)).addScaledVector(right, Math.sin(ph * 3) * 0.7);
      O.position.copy(P); O.rotation.set(0, Math.atan2(fwd.x, fwd.z) + Math.sin(u * 5 + ph) * 0.8, 0); O.scale.setScalar(u > -0.8 && outK < 0.99 ? 2.3 : 0.0001); O.updateMatrix(); body.setMatrixAt(i, O.matrix);
      for (const [j, dz] of [[0, -0.05], [1, 0.07]].entries()) { const o2 = O.clone(); o2.translateZ(dz[1] * O.scale.x); o2.updateMatrix(); stripe.setMatrixAt(i * 2 + j, o2.matrix); }
      for (const s of [0, 1]) { const o3 = O.clone(); o3.translateY(0.11 * O.scale.x); o3.translateX((s ? 1 : -1) * 0.1 * O.scale.x); o3.rotateZ((s ? 1 : -1) * (0.5 + Math.sin(u * 60 + ph) * 0.5)); o3.updateMatrix(); wing.setMatrixAt(i * 2 + s, o3.matrix); }
    }
    body.instanceMatrix.needsUpdate = true; stripe.instanceMatrix.needsUpdate = true; wing.instanceMatrix.needsUpdate = true;
    buzz.visible = u > 0.1 && u < 1.3; if (buzz.visible) { buzz.position.copy(c).add(V(0, 1.4, 0)); popScale(buzz, u, 0.1, 0.2); }
    if (rig && u > 0 && u < L(h)) {
      const k2 = smooth(0, 0.3, u) * (1 - smooth(L(h) - 0.3, L(h), u));
      rig.arms[0].sh.rotation.set(-2.6 * k2 + Math.sin(u * 20) * 0.5, 0, -0.5 * k2); rig.arms[1].sh.rotation.set(-2.6 * k2 + Math.sin(u * 20 + 2) * 0.5, 0, 0.5 * k2);
      rig.torso.rotation.x += 0.3 * k2; rig.head.rotation.y = Math.sin(u * 6) * 0.6 * k2;
      r.setPop?.('!');
    }
  };
  return I;
};

// ---- leapfrog: the passer vaults clean over the man he's passing (a real overtake); the passed man shakes a fist ----
KINDS.leapfrog = (k, h) => {
  const I = base(k);
  const T = h.params.passB - h.atBroadcastS; // the moment of the pass, in gag seconds
  const boing = sprite(I.bag, bubbleTexture(I.bag, 'BOING!', { burst: true, w: 512, h: 300, size: 120, bg: '#ffd23f' }), 0.9, 512 / 300); I.root.add(boing);
  const grr = sprite(I.bag, bubbleTexture(I.bag, 'OI!', { w: 380, h: 260, size: 140 }), 0.8, 380 / 260); I.root.add(grr);
  I.update = (u, dt, b) => {
    const A = k.runner(h.who), Bq = k.runner(h.other); const ra = k.rig(h.who), rb = k.rig(h.other);
    if (!A || !Bq) return;
    const sa = k.st(h.who, b), sb = k.st(h.other, b);
    const v = clamp01((u - (T - 0.55)) / 1.1); // the vault
    if (v > 0 && v < 1) {
      const arc = Math.sin(Math.PI * v);
      // over his head: drift onto his line, up and over
      const fwdA = V(sa.tx, 0, sa.tz), rightA = V(-sa.tz, 0, sa.tx);
      A.root.position.addScaledVector(rightA, ((sb.lat ?? 0) - (sa.lat ?? 0)) * arc);
      A.root.position.y += arc * 1.75;
      if (ra) { ra.body.rotation.x = 0.5 * arc; ra.legs[0].hp.rotation.set(-0.6 * arc, 0, -1.0 * arc); ra.legs[1].hp.rotation.set(-0.6 * arc, 0, 1.0 * arc); for (const a of ra.arms) { a.sh.rotation.set(-1.9 * arc, 0, 0); a.el.rotation.x = 0; } }
      if (rb) { rb.torso.rotation.x += 0.7 * arc; rb.head.rotation.x = 0.6 * arc; Bq.root.position.y -= 0.3 * arc; }
      void fwdA;
    }
    boing.visible = v > 0.05 && v < 0.9; if (boing.visible) { boing.position.copy(A.root.position).add(V(0, 3.3, 0)); popScale(boing, v, 0.05, 0.2); }
    // then the shaken fist (and a cheeky wave back)
    const f = u - (T + 0.6);
    if (f > 0 && f < 2.2) {
      const k2 = smooth(0, 0.25, f) * (1 - smooth(1.9, 2.2, f));
      if (rb) { rb.arms[1].sh.rotation.set(-2.6 * k2, 0, 0.3); rb.arms[1].el.rotation.x = (-1.0 + Math.sin(f * 22) * 0.4) * k2; }
      if (ra && f < 1.2) { ra.head.rotation.y = 2.0 * k2; ra.arms[0].sh.rotation.set(0, 0, -2.5 * k2); ra.arms[0].el.rotation.x = 0.3 * Math.sin(f * 14); }
      grr.visible = k2 > 0.3; if (grr.visible) { grr.position.copy(Bq.root.position).add(V(0, 3.0, 0)); popScale(grr, f, 0, 0.2); }
    } else grr.visible = false;
  };
  return I;
};

// ---- cartwheel: the passer cartwheels past the man he's overtaking (a real overtake); the passed man does a double take ----
KINDS.cartwheel = (k, h) => {
  const I = base(k);
  const T = h.params.passB - h.atBroadcastS;
  const tada = sprite(I.bag, bubbleTexture(I.bag, 'TA-DA!', { burst: true, w: 512, h: 300, size: 120, bg: '#ffd23f' }), 0.9, 512 / 300); I.root.add(tada);
  const huh = sprite(I.bag, bubbleTexture(I.bag, '?!', { w: 300, h: 260, size: 150 }), 0.7, 300 / 260); I.root.add(huh);
  const W0 = T - 1.0, W1 = T + 1.0; // two cartwheels
  let rigA = null;
  I.update = (u, dt, b) => {
    const A = k.runner(h.who), Bq = k.runner(h.other); const ra = (rigA = k.rig(h.who)), rb = k.rig(h.other);
    if (!A || !Bq || !ra) return;
    if (u > W0 && u < W1) {
      const th = ((u - W0) / (W1 - W0)) * Math.PI * 4, hh = A.hipH + 0.1;
      ra.body.rotation.z = th; ra.body.position.set(hh * Math.sin(th), hh - hh * Math.cos(th), 0);
      for (const [i, a] of ra.arms.entries()) { a.sh.rotation.set(0, 0, (i ? 1 : -1) * 2.7); a.el.rotation.x = 0; }
      for (const [i, l] of ra.legs.entries()) { l.hp.rotation.set(0, 0, (i ? 1 : -1) * 0.75); l.kn.rotation.x = 0; }
    } else ra.body.position.set(0, ra.body.position.y, 0);
    tada.visible = u > W1 - 0.2 && u < W1 + 1.2; if (tada.visible) { tada.position.copy(A.root.position).add(V(0, 3.2, 0)); popScale(tada, u, W1 - 0.2, 0.2); }
    // the double take: a glance, a look away, then a big snap round
    if (rb) { const f = u - (T - 0.3); if (f > 0 && f < 2.4) { const k2 = smooth(0, 0.15, f) * (1 - smooth(2.1, 2.4, f)); rb.head.rotation.y = (f < 0.35 ? 0.6 : f < 0.7 ? 0 : 1.1) * k2 * (A.root.position.clone().sub(Bq.root.position).dot(V(Math.cos(Bq.root.rotation.y), 0, -Math.sin(Bq.root.rotation.y))) > 0 ? -1 : 1); rb.torso.rotation.x -= 0.25 * k2; for (const a of rb.arms) a.sh.rotation.z += (a === rb.arms[0] ? -0.9 : 0.9) * k2; } }
    huh.visible = u > T + 0.4 && u < T + 2.0; if (huh.visible) { huh.position.copy(Bq.root.position).add(V(0, 3.0, 0)); popScale(huh, u, T + 0.4, 0.15); }
  };
  const d0 = I.dispose; I.dispose = () => { if (rigA) { rigA.body.rotation.z = 0; rigA.body.position.set(0, 0, 0); } d0(); };
  return I;
};

// ---- the Hill: Marshal Maureen walks backwards up the climb in front of him, hauling him up on a rope (a real slow climb) ----
KINDS.hill_rope = (k, h) => {
  const I = base(k);
  const M = makeActor(I.bag, CAST.maureen, { vest: '#d8ff1f' }); I.root.add(M.root);
  const rope = I.bag.M(new THREE.CylinderGeometry(0.05, 0.05, 1, 6).rotateX(Math.PI / 2), '#ffd23f', 2); I.root.add(rope);
  const heave = sprite(I.bag, bubbleTexture(I.bag, 'HEAVE!', { burst: true, w: 560, h: 300, size: 120, bg: '#ffffff' }), 1.0, 560 / 300); I.root.add(heave);
  const hand = V(), hip = V(), O = V();
  I.update = (u, dt, b) => {
    const r = k.runner(h.who), rig = k.rig(h.who);
    const { pos, fwd, right } = k.frameOf(h.who, b);
    const D = L(h);
    const inK = ease(clamp01((u + 1.2) / 1.0)), outK = ease(clamp01((u - D) / 0.8));
    const on = u > -1.2 && u < D + 0.8;
    M.root.visible = on; rope.visible = on && u > -0.5 && u < D + 0.2;
    // 4.6 m ahead of him, just on the far side of his line from the camera; steps in from the verge, drops back after
    const camSide = Math.sign((k.camera.position.x - pos.x) * right.x + (k.camera.position.z - pos.z) * right.z) || 1;
    if (I.side == null || u < -0.6) I.side = -camSide;
    const lat = ((1 - inK + outK) * 4.5 + 0.6) * I.side;
    O.copy(pos).addScaledVector(fwd, 4.6 + Math.sin(u * 7) * 0.12).addScaledVector(right, lat); O.y = k.C.heightAt(O.x, O.z) + 0.16;
    M.root.position.copy(O);
    M.root.rotation.y = Math.atan2(-fwd.x, -fwd.z);
    M.r.set('idle'); M.r.update(dt, {});
    // braced, leaning back, hand over hand
    const pull = Math.sin(u * 7);
    M.rig.body.rotation.x = -0.32; M.rig.torso.rotation.x = -0.1;
    M.rig.legs[0].hp.rotation.x = -0.55; M.rig.legs[0].kn.rotation.x = 0.4; M.rig.legs[1].hp.rotation.x = 0.35; M.rig.legs[1].kn.rotation.x = 0.2;
    M.rig.arms[0].sh.rotation.set(-1.4 + pull * 0.45, 0, 0.15); M.rig.arms[1].sh.rotation.set(-1.4 - pull * 0.45, 0, -0.15);
    M.rig.arms[0].el.rotation.x = -0.3 - Math.max(0, pull) * 0.6; M.rig.arms[1].el.rotation.x = -0.3 - Math.max(0, -pull) * 0.6;
    M.root.updateMatrixWorld(true);
    M.rig.arms[pull > 0 ? 0 : 1].hand.getWorldPosition(hand);
    r.root.updateMatrixWorld(true); hip.copy(r.root.position).add(V(0, r.hipH + 0.12, 0)).addScaledVector(fwd, 0.18);
    rope.position.copy(hip).lerp(hand, 0.5); rope.lookAt(hand); rope.scale.set(1, 1, Math.max(0.1, hip.distanceTo(hand)));
    heave.visible = u > 0 && u < D && Math.floor(u * 1.4) % 2 === 0; if (heave.visible) { heave.position.copy(O).add(V(0, 3.1, 0)); popScale(heave, (u * 1.4) % 1 / 1.4, 0, 0.15); }
    if (rig && u > -0.3 && u < D) {
      const k2 = smooth(-0.3, 0.3, u) * (1 - smooth(D - 0.4, D, u));
      // towed: leaning into it, arms out in front like he's being reeled in, little skips
      rig.torso.rotation.x += 0.45 * k2; rig.head.rotation.x = -0.35 * k2;
      for (const a of rig.arms) { a.sh.rotation.set(-1.45 * k2, 0, 0); a.el.rotation.x = -0.15; }
      r.root.position.y += Math.abs(Math.sin(u * 7)) * 0.12 * k2;
    }
  };
  return I;
};

