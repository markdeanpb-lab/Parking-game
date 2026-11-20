// MARKRUN live hijinks v2 (docs/HIJINKS_V2.md): plays racePlan.hijinks (server/game/hijinks.mjs) ON the live race.
// Nothing pauses and nothing moves a runner along the course: the race view places every runner from the plan (the plan's
// own clock is eased to real time round each beat), then this module adds props, other actors and an animation layer.
// Each hijink: TELEGRAPH (the threat comes into view + a HUD "uh-oh" chip) -> the GAG -> the BEAT (at 1x: the real pass)
// -> the CONSEQUENCE (+1 / -1 PLACE). Everything is a pure function of broadcast time b (seek / speed / restart safe).
//
// createHijinks(ctx) -> { frame(dt, b), seek(b), reset(), dispose(), list, activeAt(b) }
// ctx: { scene, camera, C, world, runners: {id: runner}, pubById, getPlan(), getSim(), emit(evt), container }
import * as THREE from 'three';
import { Bag, rigOf, makeGoose, makePuffs, makeActor, makeCloud, makeRain, CAST, bubbleTexture, signTexture, board, sprite, popScale, smooth, clamp01, backOut, V } from '../cutscenes/kit.js';
import { PATH_W } from '../course.js';

const POST = 1.4; // props linger a little after a hijink
const u0 = 'min(1vw,1.78vh)';
const CSS = `.mrh-chip{position:absolute;left:50%;bottom:calc(${u0}*4.6);transform:translateX(-50%) skewX(-8deg) scale(.6);opacity:0;transition:opacity .18s,transform .22s cubic-bezier(.3,1.6,.5,1);
  background:#ffd23f;color:#14183c;border:calc(${u0}*.32) solid #14183c;border-radius:calc(${u0}*.8);padding:calc(${u0}*.15) calc(${u0}*1.3);
  font-family:var(--font-display,"Lilita One","Arial Black",sans-serif);font-size:calc(${u0}*2.3);box-shadow:0 calc(${u0}*.45) 0 #14183c;pointer-events:none;z-index:4;white-space:nowrap}
.mrh-chip.on{opacity:1;transform:translateX(-50%) skewX(-8deg) scale(1)}
.mrh-chip.lose{background:#ff3d5a;color:#fff}.mrh-chip.gain{background:#2fd16b;color:#fff}
.mrh-warn{position:absolute;left:50%;top:calc(${u0}*1.2);transform:translateX(-50%) translateY(-140%);transition:transform .3s cubic-bezier(.3,1.5,.5,1);display:flex;align-items:center;gap:calc(${u0}*.7);
  background:#14183c;color:#ffd23f;border:calc(${u0}*.25) solid #ffd23f;border-radius:calc(${u0}*1);padding:calc(${u0}*.3) calc(${u0}*1.2) calc(${u0}*.35) calc(${u0}*.6);
  font-family:var(--font-display,"Lilita One","Arial Black",sans-serif);font-size:calc(${u0}*2.1);pointer-events:none;z-index:5;white-space:nowrap;box-shadow:0 calc(${u0}*.4) 0 rgba(0,0,0,.35)}
.mrh-warn.on{transform:translateX(-50%)}
.mrh-warn i{font-style:normal;display:inline-flex;align-items:center;justify-content:center;width:calc(${u0}*2.2);height:calc(${u0}*2.2);border-radius:50%;background:#ffd23f;color:#14183c;animation:mrhblink .5s steps(2) infinite}
.mrh-warn.backed{border-color:#ff3d5a;color:#fff}.mrh-warn.backed i{background:#ff3d5a;color:#fff}
@keyframes mrhblink{50%{opacity:.25}}`;

export function createHijinks(ctx) {
  let planRef = null, list = [];
  const live = new Map();
  const said = new Set();
  const rigs = new WeakMap();
  const rigFor = (r) => { if (!r) return null; if (!rigs.has(r)) { try { rigs.set(r, rigOf(r)); } catch { rigs.set(r, null); } } return rigs.get(r); };
  if (!document.getElementById('mrh-style')) { const s = document.createElement('style'); s.id = 'mrh-style'; s.textContent = CSS; document.head.appendChild(s); }
  const chip = document.createElement('div'); chip.className = 'mrh-chip'; ctx.container.appendChild(chip);
  const warn = document.createElement('div'); warn.className = 'mrh-warn'; ctx.container.appendChild(warn);
  let chipKey = '', warnKey = '';

  function sync() { const p = ctx.getPlan(); if (p === planRef) return; clearAll(); planRef = p; list = (p?.hijinks || []).filter((h) => KINDS[h.kind]); }
  function clearAll() { for (const inst of live.values()) inst.dispose(); live.clear(); }
  const tel = (h) => h.telegraphAtBroadcastS ?? h.atBroadcastS - 1.5;
  const beat = (h) => h.beatBroadcastS ?? h.params?.passB ?? (h.atBroadcastS + h.untilBroadcastS) / 2;

  function frame(dt, b) {
    sync();
    if (!list.length) return;
    let cap = null, wn = null;
    for (const h of list) {
      const on = b >= tel(h) - 0.3 && b < h.untilBroadcastS + POST;
      let inst = live.get(h.id);
      if (on && !inst) { try { inst = KINDS[h.kind](K(), h, { T: h.atBroadcastS - tel(h), B: beat(h) - h.atBroadcastS, D: h.untilBroadcastS - h.atBroadcastS }); inst.badge = makeBadge(inst.bag, h); live.set(h.id, inst); } catch (e) { console.error('[hijinks]', h.kind, e); list = list.filter((x) => x !== h); continue; } }
      if (!on && inst) { inst.dispose(); live.delete(h.id); continue; }
      if (!inst) continue;
      const u = b - h.atBroadcastS, bt = beat(h) - h.atBroadcastS;
      try { inst.update(u, dt, b); } catch (e) { console.error('[hijinks]', h.kind, e); }
      // the consequence badge over the runner: -1 / +1 just after the real pass
      if (inst.badge) { const r = ctx.runners[h.who]; const f = u - bt - 0.6; inst.badge.visible = !!h.consequence && f > 0 && f < 2.6 && !!r; if (inst.badge.visible) { inst.badge.position.copy(r.root.position).add(V(0, r.height + 1.9 + Math.sin(f * 5) * 0.08, 0)); popScale(inst.badge, f, 0, 0.25); } }
      // DOM: uh-oh (telegraph), caption (gag), consequence (after the pass)
      if (b >= tel(h) && b < beat(h) - 0.3) wn = h;
      if (u >= 0 && u < bt + 0.6) cap = { key: `${h.id}c`, text: h.caption, cls: '' };
      if (h.consequence && u >= bt + 0.6 && u < h.untilBroadcastS - h.atBroadcastS + 1.4) {
        const nm = String(ctx.pubById[h.who]?.shortName || ctx.pubById[h.who]?.nickname || '').toUpperCase();
        cap = { key: `${h.id}q`, text: `${nm} ${h.consequence.type === 'lose' ? '−1' : '+1'} PLACE`, cls: h.consequence.type };
      }
      if (u >= 0.3 && !said.has(h.id) && h.line?.text) { said.add(h.id); ctx.emit?.({ kind: 'commentary', text: h.line.text, speaker: h.line.speaker, priority: 3, hijink: h.id, broadcastS: b }); }
      if (u >= bt + 0.9 && !said.has(`${h.id}a`) && h.after?.text) { said.add(`${h.id}a`); ctx.emit?.({ kind: 'commentary', text: h.after.text, speaker: h.after.speaker, priority: 3, hijink: h.id, broadcastS: b }); }
    }
    const ck = cap ? cap.key : '';
    if (ck !== chipKey) { chipKey = ck; if (cap) { chip.textContent = cap.text; chip.className = `mrh-chip on ${cap.cls}`; } else chip.className = 'mrh-chip'; }
    const wk = wn ? wn.id : '';
    if (wk !== warnKey) { warnKey = wk; if (wn) { warn.innerHTML = `<i>!</i><span></span>`; warn.lastChild.textContent = wn.warn || wn.caption; warn.className = `mrh-warn on${/'s pick/.test(wn.warn || '') ? ' backed' : ''}`; } else warn.className = 'mrh-warn'; }
  }
  function seek(b) {
    sync(); clearAll(); said.clear();
    for (const h of list) { if (h.atBroadcastS + 0.3 < b) said.add(h.id); if (beat(h) + 0.9 < b) said.add(`${h.id}a`); }
    chip.className = 'mrh-chip'; chipKey = ''; warn.className = 'mrh-warn'; warnKey = '';
  }
  function reset() { seek(-1e9); said.clear(); }
  function makeBadge(bag, h) {
    if (!h.consequence) return null;
    const lose = h.consequence.type === 'lose';
    const s = sprite(bag, bubbleTexture(bag, lose ? '−1' : '+1', { burst: true, w: 360, h: 300, size: 170, bg: lose ? '#ff3d5a' : '#2fd16b', fg: '#ffffff' }), 1.25, 360 / 300);
    bag.group().add(s); s.visible = false; return s;
  }
  function K() {
    const sim = ctx.getSim();
    return {
      THREE, sim, C: ctx.C, scene: ctx.scene, camera: ctx.camera, world: ctx.world,
      runner: (id) => ctx.runners[id], rig: (id) => rigFor(ctx.runners[id]),
      st: (id, b) => sim.stateAt(Math.max(0, b)).byId[id],
      frameOf(id, b) { const s = sim.stateAt(Math.max(0, b)).byId[id]; const fwd = V(s.tx, 0, s.tz).normalize(); return { s, pos: V(s.x, s.y, s.z), fwd, right: V(-fwd.z, 0, fwd.x) }; },
      // which side of runner `id` the camera is on right now (+1 = his right)
      camSide(pos, right) { return Math.sign((ctx.camera.position.x - pos.x) * right.x + (ctx.camera.position.z - pos.z) * right.z) || 1; },
      ground(p) { p.y = ctx.C.heightAt(p.x, p.z); return p; },
    };
  }
  return {
    frame, seek, reset,
    get list() { sync(); return list.slice(); },
    activeAt(b) { sync(); return list.find((h) => b >= tel(h) && b < h.untilBroadcastS) || null; },
    dispose() { clearAll(); chip.remove(); warn.remove(); },
  };
}

// ======================================================================================================
// The hijinks. KINDS[kind](k, h, { T, B, D }) -> { bag, update(u, dt, b), dispose() }
//   u = broadcast seconds since the gag starts (-T..0 = the telegraph); B = the beat (the real pass); D = the gag's end.
const KINDS = {};
const base = (k) => { const bag = new Bag(k.scene); return { bag, root: bag.group(), dispose() { bag.dispose(); } }; };
const ease = (x) => x * x * (3 - 2 * x);
const env = (u, a, b, r = 0.3) => smooth(a, a + r, u) * (1 - smooth(b - r, b, u)); // 0..1 envelope over [a, b]
const label = (I, text, opts = {}, scale = 0.9) => { const w = opts.w || 560, h = opts.h || 300; const s = sprite(I.bag, bubbleTexture(I.bag, text, { burst: true, size: 120, ...opts, w, h }), scale, w / h); I.root.add(s); s.visible = false; return s; };
const showAt = (s, p, t, t0, t1, up = 3.0) => { s.visible = t >= t0 && t < t1; if (s.visible) { s.position.copy(p).add(V(0, up, 0)); popScale(s, t, t0, 0.2); } };
// a hazard waiting up the course: at its real spot once he's within `max` metres of it, until then held `max` m ahead of
// him (at the fast clock he closes 50 m a second; this keeps the threat in the shot while he runs at it)
function ahead(spot, pos, fwd, max = 7) { const d = (spot.x - pos.x) * fwd.x + (spot.z - pos.z) * fwd.z; if (d <= max) return spot.clone(); const p = spot.clone().addScaledVector(fwd, max - d); p.y = spot.y; return p; }
// a marker that flashes over a hazard during the telegraph
function hazardRing(I, colour = '#ffd23f') {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(I.bag.add(new THREE.RingGeometry(0.9, 1.25, 32).rotateX(-Math.PI / 2)), I.bag.basic(colour, { transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }));
  ring.position.y = 0.06; g.add(ring);
  const bang = sprite(I.bag, bubbleTexture(I.bag, '!', { w: 256, h: 256, size: 200, bg: colour, tail: false }), 0.9, 1); bang.position.y = 2.2; g.add(bang);
  I.root.add(g);
  return { g, update(t) { const k = 1 + 0.25 * Math.sin(t * 12); ring.scale.setScalar(k); ring.material.opacity = 0.55 + 0.4 * Math.abs(Math.sin(t * 6)); bang.position.y = 2.2 + Math.abs(Math.sin(t * 6)) * 0.3; } };
}
// arms flail / hop helpers on the rig (applied after runner.update each frame)
function flail(rig, r, u, k2, hop = 0.25) {
  rig.arms[0].sh.rotation.set(-1.2 - Math.sin(u * 16) * 0.9 * k2, 0, -0.9 * k2); rig.arms[1].sh.rotation.set(-1.2 + Math.sin(u * 16) * 0.9 * k2, 0, 0.9 * k2);
  r.root.position.y += Math.abs(Math.sin(u * 9)) * hop * k2;
}
function speedLines(I, n = 16) {
  const lines = new THREE.InstancedMesh(I.bag.add(new THREE.BoxGeometry(0.05, 0.05, 2.8)), I.bag.basic('#ffffff', { transparent: true, opacity: 0.85 }), n); lines.frustumCulled = false; I.root.add(lines);
  const O = new THREE.Object3D();
  return (u, pos, fwd, right, k) => { for (let i = 0; i < n; i++) { const f = ((u * 3 + i * 0.37) % 1); O.position.copy(pos).addScaledVector(right, ((i * 0.61) % 1 - 0.5) * 3.4).addScaledVector(fwd, 2 - f * 9).add(V(0, 0.4 + ((i * 0.43) % 1) * 2.1, 0)); O.rotation.set(0, Math.atan2(fwd.x, fwd.z), 0); O.scale.setScalar(k > 0.01 ? k : 0.0001); O.updateMatrix(); lines.setMatrixAt(i, O.matrix); } lines.instanceMatrix.needsUpdate = true; };
}

// ---- GOOSE: spotted on the verge ahead, then it's after him, nipping his shorts (he slows, someone goes past) ----
KINDS.goose_chase = (k, h, { T, B, D }) => {
  const I = base(k);
  const g = makeGoose(I.bag, { scale: 1.7 }); I.root.add(g.root);
  const honk = label(I, 'HONK!', { bg: '#ffffff' }), chomp = label(I, 'CHOMP!', { bg: '#ff9a1f' }, 1.0);
  const spot = k.frameOf(h.who, h.atBroadcastS); let side = 0; const G0 = V();
  const feathers = makePuffs(I.bag, 6, '#ffffff'); I.root.add(feathers.root);
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    if (!side || u < -T + 0.5) { side = -k.camSide(spot.pos, spot.right); G0.copy(spot.pos).addScaledVector(spot.right, side * (PATH_W / 2 + 0.6)); k.ground(G0); }
    const outK = ease(clamp01((u - D) / 1.2));
    let gp;
    if (u < 0) { // waiting on the verge, neck out, honking at him
      gp = ahead(G0, pos, fwd, 7); k.ground(gp); g.root.rotation.y = Math.atan2(-spot.fwd.x, -spot.fwd.z) - side * 0.6;
      g.pose({ t: u, honk: Math.sin(u * 8) > 0.3 ? 1 : 0, wingL: 0.4 + 0.4 * Math.sin(u * 9), wingR: 0.4 + 0.4 * Math.sin(u * 9 + 1), nod: -0.3 });
    } else {
      const lunge = Math.max(0, Math.sin(u * 7)) ** 3 * (1 + 1.5 * env(u, B - 1.6, B + 0.6));
      const joinK = ease(clamp01(u / 0.6));
      gp = pos.clone().addScaledVector(fwd, -1.8 + lunge * 0.7 - outK * 7).addScaledVector(right, Math.sin(u * 3) * 0.35);
      gp.lerp(ahead(G0, pos, fwd, 7), 1 - joinK); k.ground(gp);
      g.root.rotation.y = Math.atan2(fwd.x, fwd.z);
      g.pose({ t: u + 5, waddle: 1.7, honk: Math.max(0, Math.sin(u * 7 + 0.6)) > 0.5 ? 1 : 0, nod: -0.6 * lunge, wingL: 0.7 + 0.4 * Math.sin(u * 14), wingR: 0.7 + 0.4 * Math.sin(u * 14 + 1) });
    }
    gp.y += 0.16; g.root.position.copy(gp); g.root.visible = outK < 0.99;
    showAt(honk, gp, u, -T + 0.2, 0.2, 2.9);
    showAt(chomp, pos, u, B - 1.0, B + 0.4, 3.0);
    feathers.root.position.copy(pos).addScaledVector(fwd, -0.4).add(V(0, 1.0, 0)); feathers.root.scale.setScalar(0.35); feathers.update((u * 1.4) % 1, 1.2, -1); feathers.root.visible = u > 0 && u < D;
    if (rig && u > 0 && u < D) {
      const k2 = env(u, 0, D, 0.4);
      rig.head.rotation.y = 2.2 * k2 * (Math.sin(u * 2.2) > 0 ? 1 : -1);
      flail(rig, r, u, k2, 0.3 + 0.2 * env(u, B - 1.6, B + 0.6));
      r.setPop?.('!');
    }
  };
  return I;
};

// ---- BANANA: a skin on the path with a flashing marker... he slips right as the rival comes past ----
function makeBanana(bag) {
  const g = new THREE.Group();
  const peel = bag.M(new THREE.TorusGeometry(0.32, 0.09, 8, 16, 2.4), '#ffe23f', 3); peel.rotation.x = Math.PI / 2; g.add(peel);
  for (let i = 0; i < 3; i++) { const f = bag.M(new THREE.ConeGeometry(0.1, 0.4, 6), '#ffd23f', 2); f.position.set(Math.cos(i * 2.1) * 0.22, 0.05, Math.sin(i * 2.1) * 0.22); f.rotation.set(Math.PI / 2, 0, i * 2.1); g.add(f); }
  const tip = bag.M(new THREE.SphereGeometry(0.06, 6, 5), '#5a3418', 0); tip.position.set(0.3, 0, 0.12); g.add(tip);
  g.scale.setScalar(2.2); return g;
}
KINDS.banana = (k, h, { T, B, D }) => {
  const I = base(k);
  const ban = makeBanana(I.bag); I.root.add(ban);
  const mark = hazardRing(I);
  const slipAt = B - 1.1, SLIP = 2.0;
  const sp = k.frameOf(h.who, h.atBroadcastS + slipAt);
  const home = sp.pos.clone(); k.ground(home); home.y += 0.2;
  const whoops = label(I, 'WHOOPS!', { bg: '#ffe23f' }, 1.0);
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const s = u - slipAt;
    const waitAt = ahead(home, pos, fwd, 6);
    mark.g.visible = s < 0; mark.g.position.copy(waitAt).add(V(0, -0.2, 0)); mark.update(u);
    if (s < 0) { ban.position.copy(waitAt); ban.rotation.set(0, u * 0.2, 0); ban.visible = true; }
    else if (s < SLIP) { ban.position.copy(pos).addScaledVector(fwd, 0.35).add(V(0, 0.18 + Math.abs(Math.sin(s * 11)) * 0.25, 0)); ban.rotation.set(0, s * 14, Math.sin(s * 9) * 0.4); }
    else { const f = clamp01((s - SLIP) / 1.0); ban.position.copy(pos).addScaledVector(fwd, -0.5 - f * 4).add(V(0, 0.2 + Math.sin(Math.PI * f) * 3, 0)); ban.rotation.set(s * 9, s * 5, 0); ban.visible = f < 1; }
    showAt(whoops, pos, s, 0, 1.3, 3.2);
    if (rig && s > 0 && s < SLIP) {
      const k2 = Math.sin(Math.PI * clamp01(s / SLIP));
      rig.body.rotation.x = -0.55 * k2 + Math.sin(s * 11) * 0.12 * k2;
      rig.legs[0].hp.rotation.x = -1.3 * k2 + Math.sin(s * 22) * 0.9 * k2; rig.legs[1].hp.rotation.x = -1.3 * k2 + Math.sin(s * 22 + Math.PI) * 0.9 * k2;
      rig.arms[0].sh.rotation.set(s * 18, 0, -1.2 * k2); rig.arms[1].sh.rotation.set(s * 18 + Math.PI, 0, 1.2 * k2);
      r.root.position.y += 0.35 * k2; r.setPop?.('!');
    }
  };
  return I;
};

// ---- RAINCLOUD: a black cloud rolls in from up the course and parks over his head (he slows) ----
KINDS.raincloud = (k, h, { T, B, D }) => {
  const I = base(k);
  const cloud = makeCloud(I.bag, { grey: '#6f788c', scale: 1.25 }); I.root.add(cloud);
  const rain = makeRain(I.bag, 90, { w: 2.2, h: 3.0 }); cloud.add(rain.mesh); rain.mesh.position.y = -0.3; rain.mesh.scale.setScalar(1 / 1.25);
  const rumble = label(I, 'RUMBLE', { bg: '#c9d3e6' }), splosh = label(I, 'SPLOSH!', { bg: '#9fd8ff' });
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const comeK = ease(clamp01((u + T) / Math.max(0.5, T))), outK = ease(clamp01((u - D) / 0.8));
    cloud.visible = outK < 0.99;
    cloud.position.copy(pos).addScaledVector(fwd, 0.15 + (1 - comeK) * 8).add(V(0, 3.35 + (1 - comeK) * 2.5 + Math.sin(u * 2.5) * 0.12 + outK * 3, 0));
    cloud.rotation.y = Math.atan2(k.camera.position.x - pos.x, k.camera.position.z - pos.z) * 0.6 + Math.atan2(fwd.x, fwd.z) * 0.4;
    rain.update(u + 3, 0.08); rain.mesh.visible = u > -0.2 && u < D;
    showAt(rumble, cloud.position, u, -T + 0.3, -0.2, 1.4);
    showAt(splosh, pos, u, B - 1.0, B + 0.3, 4.8);
    if (rig && u > 0 && u < D) {
      const k2 = env(u, 0, D, 0.3);
      rig.arms[0].sh.rotation.set(-2.8 * k2, 0, -0.35 * k2); rig.arms[1].sh.rotation.set(-2.8 * k2, 0, 0.35 * k2); rig.arms[0].el.rotation.x = -1.7 * k2; rig.arms[1].el.rotation.x = -1.7 * k2;
      rig.torso.rotation.x += 0.3 * k2; rig.head.rotation.x = 0.45 * k2; r.root.position.y -= 0.1 * k2;
    }
  };
  return I;
};

// ---- WASPS: a swarm hanging about by the path; it goes for him; he BOLTS (a real surge, past someone) ----
KINDS.wasps = (k, h, { T, B, D }) => {
  const I = base(k);
  const N = 14;
  const body = new THREE.InstancedMesh(I.bag.add(new THREE.CapsuleGeometry(0.09, 0.16, 4, 8).rotateX(Math.PI / 2)), I.bag.mat('#ffd23f'), N); body.frustumCulled = false; I.root.add(body);
  const stripe = new THREE.InstancedMesh(I.bag.add(new THREE.CylinderGeometry(0.095, 0.095, 0.06, 8).rotateX(Math.PI / 2)), I.bag.mat('#1a1420'), N * 2); stripe.frustumCulled = false; I.root.add(stripe);
  const wing = new THREE.InstancedMesh(I.bag.add(new THREE.PlaneGeometry(0.22, 0.12)), I.bag.basic('#e9f8ff', { transparent: true, opacity: 0.8, side: THREE.DoubleSide }), N * 2); wing.frustumCulled = false; I.root.add(wing);
  const buzz = label(I, 'BZZZZ!', { bg: '#ffd23f' }), zoom = label(I, 'ZOOM!', { bg: '#2fd16b', fg: '#ffffff' });
  const spot = k.frameOf(h.who, h.atBroadcastS); const nest = V(); let side = 0;
  const O = new THREE.Object3D(), P = V();
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    if (!side || u < -T + 0.5) { side = -k.camSide(spot.pos, spot.right); nest.copy(spot.pos).addScaledVector(spot.right, side * (PATH_W / 2 + 0.8)); k.ground(nest); nest.y += 2.2; }
    const outK = ease(clamp01((u - D) / 1.2)), joinK = ease(clamp01(u / 0.5));
    const c = pos.clone().addScaledVector(fwd, -1.1 - outK * 8).add(V(0, 2.2, 0)).lerp(ahead(nest, pos, fwd, 7), 1 - joinK);
    for (let i = 0; i < N; i++) {
      const ph = i * 1.37, rr = u < 0 ? 1.4 : 1.1;
      P.copy(c).add(V(Math.sin(u * 7 + ph) * rr, Math.sin(u * 9 + ph * 2) * 0.55, Math.cos(u * 6 + ph) * rr));
      O.position.copy(P); O.rotation.set(0, Math.atan2(fwd.x, fwd.z) + Math.sin(u * 5 + ph) * 0.8, 0); O.scale.setScalar(outK < 0.99 ? 2.3 : 0.0001); O.updateMatrix(); body.setMatrixAt(i, O.matrix);
      for (const [j, dz] of [-0.05, 0.07].entries()) { const o2 = O.clone(); o2.translateZ(dz * O.scale.x); o2.updateMatrix(); stripe.setMatrixAt(i * 2 + j, o2.matrix); }
      for (const s of [0, 1]) { const o3 = O.clone(); o3.translateY(0.11 * O.scale.x); o3.translateX((s ? 1 : -1) * 0.1 * O.scale.x); o3.rotateZ((s ? 1 : -1) * (0.5 + Math.sin(u * 60 + ph) * 0.5)); o3.updateMatrix(); wing.setMatrixAt(i * 2 + s, o3.matrix); }
    }
    body.instanceMatrix.needsUpdate = true; stripe.instanceMatrix.needsUpdate = true; wing.instanceMatrix.needsUpdate = true;
    showAt(buzz, c, u, -T + 0.2, 0.6, 1.4);
    showAt(zoom, pos, u, B - 0.8, B + 0.6, 3.2);
    if (rig && u > 0 && u < D) {
      const k2 = env(u, 0, D, 0.3);
      rig.arms[0].sh.rotation.set(-2.6 * k2 + Math.sin(u * 20) * 0.5, 0, -0.5 * k2); rig.arms[1].sh.rotation.set(-2.6 * k2 + Math.sin(u * 20 + 2) * 0.5, 0, 0.5 * k2);
      rig.torso.rotation.x += (0.3 + 0.25 * env(u, B - 1.2, B + 0.8)) * k2; rig.head.rotation.y = Math.sin(u * 6) * 0.6 * k2;
      r.setPop?.('!');
    }
  };
  return I;
};

// ---- ROCKET SHOES: his heels start to fizz... then ignition, right as he goes past (a real surge) ----
KINDS.rocket_shoes = (k, h, { T, B, D }) => {
  const I = base(k);
  const rig = k.rig(h.who);
  const flames = [];
  const flameGeo = I.bag.add(new THREE.ConeGeometry(0.17, 0.95, 10).rotateX(-Math.PI / 2).translate(0, 0, -0.58));
  const coreGeo = I.bag.add(new THREE.ConeGeometry(0.09, 0.55, 8).rotateX(-Math.PI / 2).translate(0, 0, -0.4));
  if (rig) for (const l of rig.legs) { const g = new THREE.Group(); g.position.set(0, -0.15, -0.12); g.add(new THREE.Mesh(flameGeo, I.bag.basic('#ff7a1f')), new THREE.Mesh(coreGeo, I.bag.basic('#fff27a'))); l.an.add(g); flames.push(g); }
  const smoke = []; for (let i = 0; i < 8; i++) { const p = makePuffs(I.bag, 4, '#e9eef5'); I.root.add(p.root); smoke.push(p); }
  const lines = speedLines(I);
  const fizz = label(I, 'FZZT!', { bg: '#fff27a' }, 0.75), whoosh = label(I, 'WHOOSH!', { bg: '#ff7a1f', fg: '#ffffff' }, 1.0);
  const ign = Math.max(0.2, B - 1.6);
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b);
    const fizzK = u < ign ? clamp01((u + T) / (T + ign)) * 0.35 : 0;
    const k2 = env(u, ign, D, 0.3);
    for (const f of flames) { f.visible = fizzK > 0.02 || k2 > 0.01; f.scale.set(1 + Math.sin(u * 40) * 0.15, 1 + Math.sin(u * 37) * 0.15, (fizzK * (0.5 + 0.5 * Math.sin(u * 30)) + (1.3 + Math.sin(u * 53) * 0.35) * k2) + 0.001); }
    smoke.forEach((p, i) => { const f = ((u * 2.2 + i / smoke.length) % 1); p.root.position.copy(pos).addScaledVector(fwd, -1.2 - f * 9).add(V(0, 0.35, 0)); p.root.scale.setScalar(0.5); p.update(f, 0.9, 0); p.root.visible = k2 > 0.05; });
    lines(u, pos, fwd, right, k2);
    showAt(fizz, pos, u, -T + 0.3, ign, 0.9);
    showAt(whoosh, pos, u, ign, ign + 1.2, 3.2);
    if (rig && k2 > 0) { rig.torso.rotation.x += 0.45 * k2; for (const [i, a] of rig.arms.entries()) { a.sh.rotation.set(1.3 * k2, 0, (i ? 0.35 : -0.35) * k2); a.el.rotation.x = -0.2; } }
  };
  const d0 = I.dispose; I.dispose = () => { for (const f of flames) f.parent?.remove(f); d0(); };
  return I;
};

// ---- ICE-CREAM VAN: a jingle up ahead... the van pulls away and he CHASES it, past a rival (a real surge) ----
function makeVan(bag) {
  const g = new THREE.Group();
  const body = bag.M(new THREE.BoxGeometry(2.3, 2.3, 4.8), '#9ff0d0', 3); body.position.set(0, 1.65, 0); g.add(body);
  const cab = bag.M(new THREE.BoxGeometry(2.25, 1.4, 1.2), '#ff9bd2', 3); cab.position.set(0, 1.2, 2.75); g.add(cab);
  const wind = bag.M(new THREE.BoxGeometry(1.9, 0.6, 0.05), '#2e6fe0', 0); wind.position.set(0, 1.55, 3.36); wind.rotation.x = -0.2; g.add(wind);
  for (const [x, z] of [[-1.1, 2.4], [1.1, 2.4], [-1.1, -1.5], [1.1, -1.5]]) { const w = bag.M(new THREE.CylinderGeometry(0.48, 0.48, 0.3, 14).rotateZ(Math.PI / 2), '#1a1420', 2); w.position.set(x, 0.48, z); g.add(w); }
  const side = board(bag, signTexture(bag, ['ICES', '★ 99s ★'], { bg: '#ff9bd2', fg: '#ffffff', w: 512, h: 256 }), 2.6, 1.3, '#1a1420', 0.1);
  for (const sx of [-1, 1]) { const sb = side.clone(); sb.position.set(sx * 1.2, 1.9, -0.3); sb.rotation.y = sx * Math.PI / 2; g.add(sb); }
  const cone = bag.M(new THREE.ConeGeometry(0.6, 1.6, 12).rotateX(Math.PI), '#e8b26b', 3); cone.position.set(0, 3.7, 0.2); g.add(cone);
  const scoop = bag.M(new THREE.SphereGeometry(0.72, 14, 10), '#fff6e0', 3); scoop.position.set(0, 4.55, 0.2); g.add(scoop);
  const scoop2 = bag.M(new THREE.SphereGeometry(0.5, 12, 8), '#ff9bd2', 2.5); scoop2.position.set(0, 5.1, 0.2); g.add(scoop2);
  return g;
}
KINDS.ice_cream = (k, h, { T, B, D }) => {
  const I = base(k);
  const van = makeVan(I.bag); I.root.add(van);
  const notes = []; for (let i = 0; i < 5; i++) { const s = sprite(I.bag, bubbleTexture(I.bag, i % 2 ? '♫' : '♪', { w: 200, h: 200, size: 170, tail: false, bg: '#ffffff' }), 0.6, 1); I.root.add(s); notes.push(s); }
  const ding = label(I, 'DING-A-LING!', { bg: '#ff9bd2', fg: '#ffffff', w: 700 }, 1.0), want = label(I, 'WAIT!', { bg: '#ffffff' }, 0.8);
  let side = 0;
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    if (!side || u < -T + 0.5) side = -k.camSide(pos, right);
    // parked ahead on the verge during the telegraph, then it pulls away, always just out of reach
    const vAhead = u < 0 ? 7 + (-u / Math.max(0.5, T)) * 3 : 5 + Math.sin(u * 0.8) * 1.0 + ease(clamp01((u - D) / 1.5)) * 25;
    const vp = pos.clone().addScaledVector(fwd, vAhead).addScaledVector(right, side * (PATH_W / 2 + 1.8)); k.ground(vp);
    van.position.copy(vp); van.rotation.y = Math.atan2(fwd.x, fwd.z); van.visible = u < D + 1.4;
    notes.forEach((s, i) => { const f = ((u * 0.7 + i / notes.length) % 1); s.visible = u < D; s.position.copy(vp).add(V(Math.sin(i * 2 + u * 3) * 1.2, 5.6 + f * 2.5, 0)); s.material.opacity = 1 - f; });
    showAt(ding, vp, u, -T + 0.2, 0.4, 7.6);
    showAt(want, pos, u, B - 1.0, B + 0.6, 3.1);
    if (rig && u > 0 && u < D) {
      const k2 = env(u, 0, D, 0.3);
      rig.torso.rotation.x += 0.45 * k2; rig.head.rotation.x = -0.3 * k2;
      rig.arms[0].sh.rotation.set(-1.6 * k2, 0, -0.15); rig.arms[1].sh.rotation.set(-1.5 * k2 + Math.sin(u * 14) * 0.3, 0, 0.15); // reaching for the van
      r.setPop?.('heart');
    }
  };
  return I;
};

// ---- LEAPFROG: the passer vaults clean over the man he's passing; the passed man shakes a fist ----
function spring(I) { const g = new THREE.Group(); for (let i = 0; i < 4; i++) { const t = I.bag.M(new THREE.TorusGeometry(0.16, 0.035, 6, 14).rotateX(Math.PI / 2), '#c9d3e6', 1.5); t.position.y = i * 0.09; g.add(t); } I.root.add(g); return g; }
KINDS.leapfrog = (k, h, { T, B }) => {
  const I = base(k);
  const boing = label(I, 'BOING!', { bg: '#ffd23f' }), oi = label(I, 'OI!', { bg: '#ffffff' }, 0.8);
  const coils = [spring(I), spring(I)];
  I.update = (u, dt, b) => {
    const A = k.runner(h.who), Bq = k.runner(h.other); const ra = k.rig(h.who), rb = k.rig(h.other);
    if (!A || !Bq) return;
    const sa = k.st(h.who, b), sb = k.st(h.other, b);
    // telegraph: springs on his heels
    const sk = env(u, -T, B + 0.6, 0.3);
    coils.forEach((c, i) => { c.visible = sk > 0.02; if (ra && c.visible) { ra.legs[i].an.getWorldPosition(c.position); c.position.y -= 0.35; c.scale.set(1, 0.6 + 0.4 * Math.abs(Math.sin(u * 10)), 1); } });
    const v = clamp01((u - (B - 0.6)) / 1.2);
    if (v > 0 && v < 1) {
      const arc = Math.sin(Math.PI * v), rightA = V(-sa.tz, 0, sa.tx);
      A.root.position.addScaledVector(rightA, ((sb.lat ?? 0) - (sa.lat ?? 0)) * arc); A.root.position.y += arc * 1.75;
      if (ra) { ra.body.rotation.x = 0.5 * arc; ra.legs[0].hp.rotation.set(-0.6 * arc, 0, -1.0 * arc); ra.legs[1].hp.rotation.set(-0.6 * arc, 0, 1.0 * arc); for (const a of ra.arms) { a.sh.rotation.set(-1.9 * arc, 0, 0); a.el.rotation.x = 0; } }
      if (rb) { rb.torso.rotation.x += 0.7 * arc; rb.head.rotation.x = 0.6 * arc; Bq.root.position.y -= 0.3 * arc; }
    }
    showAt(boing, A.root.position, v > 0.05 && v < 0.9 ? 1 : 0, 0.5, 2, 3.3);
    const f = u - (B + 0.7);
    if (f > 0 && f < 2.2) { const k2 = env(f, 0, 2.2, 0.25); if (rb) { rb.arms[1].sh.rotation.set(-2.6 * k2, 0, 0.3); rb.arms[1].el.rotation.x = (-1.0 + Math.sin(f * 22) * 0.4) * k2; } if (ra && f < 1.2) { ra.head.rotation.y = 2.0 * k2; ra.arms[0].sh.rotation.set(0, 0, -2.5 * k2); } }
    showAt(oi, Bq.root.position, f, 0, 1.8, 3.0);
  };
  return I;
};

// ---- CARTWHEEL: the passer cartwheels past (a real overtake); the passed man does a double take ----
KINDS.cartwheel = (k, h, { T, B }) => {
  const I = base(k);
  const tada = label(I, 'TA-DA!', { bg: '#ffd23f' }), huh = label(I, '?!', { w: 300, h: 260, bg: '#ffffff' }, 0.7), stretch = label(I, 'WATCH THIS', { bg: '#ffffff', w: 640 }, 0.7);
  const W0 = B - 1.0, W1 = B + 1.0; let rigA = null;
  I.update = (u, dt, b) => {
    const A = k.runner(h.who), Bq = k.runner(h.other); const ra = (rigA = k.rig(h.who)), rb = k.rig(h.other);
    if (!A || !Bq || !ra) return;
    showAt(stretch, A.root.position, u, -T + 0.2, W0 - 0.2, 3.2);
    if (u > W0 && u < W1) {
      const th = ((u - W0) / (W1 - W0)) * Math.PI * 4, hh = A.hipH + 0.1;
      ra.body.rotation.z = th; ra.body.position.set(hh * Math.sin(th), hh - hh * Math.cos(th), 0);
      for (const [i, a] of ra.arms.entries()) { a.sh.rotation.set(0, 0, (i ? 1 : -1) * 2.7); a.el.rotation.x = 0; }
      for (const [i, l] of ra.legs.entries()) { l.hp.rotation.set(0, 0, (i ? 1 : -1) * 0.75); l.kn.rotation.x = 0; }
    } else ra.body.position.set(0, ra.body.position.y, 0);
    showAt(tada, A.root.position, u, W1 - 0.1, W1 + 1.4, 3.2);
    if (rb) { const f = u - (B - 0.2); if (f > 0 && f < 2.4) { const k2 = env(f, 0, 2.4, 0.15); rb.head.rotation.y = (f < 0.35 ? 0.6 : f < 0.7 ? 0 : 1.1) * k2; rb.torso.rotation.x -= 0.25 * k2; } }
    showAt(huh, Bq.root.position, u, B + 0.4, B + 2.0, 3.0);
  };
  const d0 = I.dispose; I.dispose = () => { if (rigA) { rigA.body.rotation.z = 0; rigA.body.position.set(0, 0, 0); } d0(); };
  return I;
};

// ---- the Hill: Marshal Maureen walks backwards up the climb in front of him, hauling him on a rope ----
KINDS.hill_rope = (k, h, { T, D }) => {
  const I = base(k);
  const M = makeActor(I.bag, CAST.maureen, { vest: '#d8ff1f' }); I.root.add(M.root);
  const rope = I.bag.M(new THREE.CylinderGeometry(0.05, 0.05, 1, 6).rotateX(Math.PI / 2), '#ffd23f', 2); I.root.add(rope);
  const heave = label(I, 'HEAVE!', { bg: '#ffffff' }, 1.0);
  const hand = V(), hip = V(), O = V(); let side = null;
  I.update = (u, dt, b) => {
    const r = k.runner(h.who), rig = k.rig(h.who);
    const { pos, fwd, right } = k.frameOf(h.who, b);
    const inK = ease(clamp01((u + 0.6) / 0.8)), outK = ease(clamp01((u - D) / 0.8));
    M.root.visible = u < D + 0.8; rope.visible = u > -0.3 && u < D + 0.2;
    if (side == null || u < -T + 0.5) side = -k.camSide(pos, right);
    const lat = ((1 - inK + outK) * 4.5 + 0.6) * side;
    O.copy(pos).addScaledVector(fwd, 4.6 + Math.sin(u * 7) * 0.12).addScaledVector(right, lat); k.ground(O); O.y += 0.16;
    M.root.position.copy(O); M.root.rotation.y = Math.atan2(-fwd.x, -fwd.z);
    M.r.set('idle'); M.r.update(dt, {});
    const pull = Math.sin(u * 7), wave = u < 0;
    M.rig.body.rotation.x = wave ? 0 : -0.32;
    if (wave) { M.rig.arms[1].sh.rotation.set(0, 0, 2.6 + Math.sin(u * 10) * 0.4); }
    else {
      M.rig.legs[0].hp.rotation.x = -0.55; M.rig.legs[0].kn.rotation.x = 0.4; M.rig.legs[1].hp.rotation.x = 0.35;
      M.rig.arms[0].sh.rotation.set(-1.4 + pull * 0.45, 0, 0.15); M.rig.arms[1].sh.rotation.set(-1.4 - pull * 0.45, 0, -0.15);
    }
    M.root.updateMatrixWorld(true); M.rig.arms[pull > 0 ? 0 : 1].hand.getWorldPosition(hand);
    r.root.updateMatrixWorld(true); hip.copy(r.root.position).add(V(0, r.hipH + 0.12, 0)).addScaledVector(fwd, 0.18);
    rope.position.copy(hip).lerp(hand, 0.5); rope.lookAt(hand); rope.scale.set(1, 1, Math.max(0.1, hip.distanceTo(hand)));
    heave.visible = u > 0 && u < D && Math.floor(u * 1.4) % 2 === 0; if (heave.visible) { heave.position.copy(O).add(V(0, 3.1, 0)); popScale(heave, (u * 1.4) % 1 / 1.4, 0, 0.15); }
    if (rig && u > -0.3 && u < D) { const k2 = env(u, -0.3, D, 0.4); rig.torso.rotation.x += 0.45 * k2; rig.head.rotation.x = -0.35 * k2; for (const a of rig.arms) { a.sh.rotation.set(-1.45 * k2, 0, 0); a.el.rotation.x = -0.15; } r.root.position.y += Math.abs(Math.sin(u * 7)) * 0.12 * k2; }
  };
  return I;
};

// ======================================================================================================
// TRAINING LIFE: his own week before this run

// ---- PEDAL LEGS (bike rides that week): a ghost bike fades in under him, his legs spin like pedals ----
function ghostBike(I) {
  const g = new THREE.Group();
  const m = I.bag.basic('#bff3ff', { transparent: true, opacity: 0.6, depthWrite: false });
  for (const z of [-0.85, 0.85]) { const w = new THREE.Mesh(I.bag.add(new THREE.TorusGeometry(0.5, 0.05, 6, 28)), m); w.rotation.y = Math.PI / 2; w.position.set(0, 0.5, z); g.add(w); }
  const bar = (a, b) => { const d = b.clone().sub(a); const c = new THREE.Mesh(I.bag.add(new THREE.CylinderGeometry(0.04, 0.04, d.length(), 6)), m); c.position.copy(a).add(b).multiplyScalar(0.5); c.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize()); g.add(c); };
  const P = { rear: V(0, 0.5, -0.85), front: V(0, 0.5, 0.85), crank: V(0, 0.45, 0), seat: V(0, 1.1, -0.25), head: V(0, 1.15, 0.6) };
  bar(P.rear, P.crank); bar(P.crank, P.seat); bar(P.seat, P.rear); bar(P.seat, P.head); bar(P.head, P.crank); bar(P.head, P.front);
  const hb = new THREE.Mesh(I.bag.add(new THREE.CylinderGeometry(0.035, 0.035, 0.7, 6).rotateZ(Math.PI / 2)), m); hb.position.set(0, 1.25, 0.65); g.add(hb);
  I.root.add(g); g.userData.mat = m; return g;
}
KINDS.pedal_legs = (k, h, { T, B, D }) => {
  const I = base(k);
  const bike = ghostBike(I); const lines = speedLines(I);
  const ding = label(I, 'DING DING!', { bg: '#bff3ff', w: 640 }, 0.9), pedal = label(I, 'PEDAL POWER!', { bg: '#2fd16b', fg: '#ffffff', w: 700 }, 1.0);
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const fade = clamp01((u + T) / Math.max(0.5, T)) * (1 - clamp01((u - D) / 0.8));
    bike.visible = fade > 0.02; bike.userData.mat.opacity = 0.65 * fade;
    bike.position.copy(pos); bike.rotation.y = Math.atan2(fwd.x, fwd.z);
    const k2 = env(u, 0, D, 0.4), boost = env(u, B - 1.4, B + 0.8, 0.3);
    lines(u, pos, fwd, right, boost);
    showAt(ding, pos, u, -T + 0.2, 0.4, 3.2);
    showAt(pedal, pos, u, B - 1.2, B + 0.6, 3.3);
    if (rig && k2 > 0) {
      const ph = u * (14 + 10 * boost);
      for (const [i, l] of rig.legs.entries()) { const a = ph + i * Math.PI; l.hp.rotation.x = (-0.9 + Math.sin(a) * 0.75) * k2 + l.hp.rotation.x * (1 - k2); l.kn.rotation.x = (1.1 + Math.cos(a) * 0.6) * k2 + l.kn.rotation.x * (1 - k2); }
      rig.torso.rotation.x += 0.55 * k2; for (const a of rig.arms) { a.sh.rotation.set(-1.25 * k2, 0, 0); a.el.rotation.x = -0.3 * k2; } // hands on the bars
      r.root.position.y += 0.25 * k2;
    }
  };
  return I;
};

// ---- FRONT CRAWL (swims that week): a puddle ahead... he swims straight through it, past a rival ----
KINDS.front_crawl = (k, h, { T, B, D }) => {
  const I = base(k);
  const puddle = new THREE.Mesh(I.bag.add(new THREE.CircleGeometry(1, 40).rotateX(-Math.PI / 2)), I.bag.basic('#58b8ff', { transparent: true, opacity: 0.85 })); puddle.scale.set(2.4, 1, 4.2); I.root.add(puddle);
  const ripples = [0, 1, 2].map(() => { const m = new THREE.Mesh(I.bag.add(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2)), I.bag.basic('#ffffff', { transparent: true, opacity: 0.8, depthWrite: false })); I.root.add(m); return m; });
  const splash = []; for (let i = 0; i < 4; i++) { const p = makePuffs(I.bag, 5, '#bfe6ff'); I.root.add(p.root); splash.push(p); }
  const mark = hazardRing(I, '#58b8ff');
  const lbl = label(I, 'SPLASH!', { bg: '#58b8ff', fg: '#ffffff' }, 1.0);
  const spot = k.frameOf(h.who, h.atBroadcastS);
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const at = u < 0 ? ahead(spot.pos, pos, fwd, 6) : pos.clone().addScaledVector(fwd, 0.3); k.ground(at); at.y += 0.05;
    puddle.position.copy(at); puddle.rotation.y = Math.atan2(fwd.x, fwd.z); puddle.visible = u < D + 0.3;
    ripples.forEach((m, i) => { const f = (u * 0.9 + i / 3) % 1; m.position.copy(at).add(V(0, 0.02, 0)); m.scale.setScalar(0.6 + f * 2.2); m.material.opacity = 0.8 * (1 - f); m.visible = puddle.visible; });
    mark.g.visible = u < 0; mark.g.position.copy(at); mark.update(u);
    splash.forEach((p, i) => { const f = (u * 2 + i / 4) % 1; p.root.position.copy(pos).addScaledVector(fwd, -0.4 - f * 2).add(V((i % 2 ? 0.6 : -0.6), 0.6, 0)); p.root.scale.setScalar(0.35); p.update(f, 1.3, 0); p.root.visible = u > 0 && u < D; });
    showAt(lbl, pos, u, B - 1.2, B + 0.6, 3.1);
    if (rig && u > 0 && u < D) {
      const k2 = env(u, 0, D, 0.35), ph = u * 9;
      rig.torso.rotation.x += 0.75 * k2; rig.head.rotation.set(-0.5 * k2, Math.sin(ph) * 0.6 * k2, 0); // breathing to the side
      rig.arms[0].sh.rotation.set((-ph % (Math.PI * 2)) * k2, 0, -0.15); rig.arms[1].sh.rotation.set(((-ph + Math.PI) % (Math.PI * 2)) * k2, 0, 0.15);
      rig.arms[0].el.rotation.x = 0; rig.arms[1].el.rotation.x = 0;
    }
  };
  return I;
};

// ---- LAP COUNTER (interval sessions that week): a giant stopwatch counts him in... BEEP: rep! (a real surge) ----
KINDS.lap_counter = (k, h, { T, B, D }) => {
  const I = base(k);
  const faces = ['3', '2', '1', 'GO!', 'REP!'].map((t, i) => signTexture(I.bag, [t], { bg: i >= 3 ? '#2fd16b' : '#ffffff', fg: '#14183c', w: 256, h: 256, round: 128 }));
  const watch = new THREE.Group();
  const caseM = I.bag.M(new THREE.CylinderGeometry(0.85, 0.85, 0.3, 28).rotateX(Math.PI / 2), '#e6edf5', 3); watch.add(caseM);
  const face = new THREE.Mesh(I.bag.add(new THREE.CircleGeometry(0.72, 28)), I.bag.add(new THREE.MeshBasicMaterial({ map: faces[0], transparent: true }))); face.position.z = 0.16; watch.add(face);
  const face2 = face.clone(); face2.rotation.y = Math.PI; face2.position.z = -0.16; watch.add(face2);
  const knob = I.bag.M(new THREE.CylinderGeometry(0.16, 0.16, 0.3, 10), '#ff3d5a', 2); knob.position.y = 1.0; watch.add(knob);
  I.root.add(watch);
  const beep = label(I, 'BEEP!', { bg: '#2fd16b', fg: '#ffffff' }, 0.9); const lines = speedLines(I);
  const go = Math.max(0.3, B - 1.4);
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const side = -k.camSide(pos, right); // just beyond him from the camera, above his shoulder: in frame whatever the angle
    watch.visible = u < D; watch.scale.setScalar(1.25); watch.position.copy(pos).addScaledVector(right, side * 1.3).addScaledVector(fwd, 0.8).add(V(0, 3.2 + Math.sin(u * 3) * 0.1, 0));
    watch.lookAt(k.camera.position);
    const idx = u < go ? Math.min(2, Math.max(0, Math.floor(3 * clamp01((u + T) / (T + go))))) : u < go + 1.2 ? 3 : 4;
    face.material.map = faces[idx]; face.material.needsUpdate = true;
    knob.position.y = 1.0 - (idx >= 3 && u < go + 0.3 ? 0.12 : 0);
    showAt(beep, watch.position, u, go, go + 0.9, 1.3);
    const k2 = env(u, go, D, 0.25);
    lines(u, pos, fwd, right, k2);
    if (rig && k2 > 0) { rig.torso.rotation.x += 0.45 * k2; for (const [i, a] of rig.arms.entries()) a.sh.rotation.x += Math.sin(u * 24 + i * Math.PI) * 0.9 * k2; r.setPop?.('!'); }
  };
  return I;
};

// ---- FLEX (weights that week): up the Hill, he hits a double biceps... and powers past (a real gain on the climb) ----
KINDS.flex_hill = (k, h, { T, B, D }) => {
  const I = base(k);
  const think = label(I, 'GYM WEEK...', { bg: '#ffffff', w: 640 }, 0.75), flex = label(I, 'FLEX!', { bg: '#ffd23f' }, 1.0);
  const stars = []; for (let i = 0; i < 6; i++) { const s = sprite(I.bag, bubbleTexture(I.bag, '✦', { w: 160, h: 160, size: 150, tail: false, bg: '#fff27a' }), 0.4, 1); I.root.add(s); stars.push(s); }
  I.update = (u, dt, b) => {
    const { pos } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    showAt(think, pos, u, -T + 0.2, 0.2, 3.0);
    const k2 = env(u, 0.2, D, 0.3), pump = 0.5 + 0.5 * Math.sin(u * 6);
    stars.forEach((s, i) => { const a = u * 3 + i * 1.05; s.visible = k2 > 0.3; s.position.copy(pos).add(V(Math.cos(a) * 1.3, 1.8 + Math.sin(a * 1.3) * 0.5, Math.sin(a) * 1.3)); });
    showAt(flex, pos, u, B - 1.2, B + 0.6, 3.3);
    if (rig && k2 > 0) {
      // double biceps: upper arms out and up, forearms up, pumping
      rig.arms[0].sh.rotation.set(0, 0, -1.55 * k2); rig.arms[1].sh.rotation.set(0, 0, 1.55 * k2);
      rig.arms[0].el.rotation.set(-1.9 * k2 - pump * 0.3 * k2, 0, 0); rig.arms[1].el.rotation.set(-1.9 * k2 - pump * 0.3 * k2, 0, 0);
      rig.torso.rotation.x -= 0.1 * k2; rig.head.rotation.x = -0.2 * k2; r.setPop?.('heart');
    }
  };
  return I;
};

// ---- INCLINE BUTTON (treadmill runs that week): he looks for the button... there isn't one (he slows; someone passes) ----
KINDS.incline_button = (k, h, { T, B, D }) => {
  const I = base(k);
  const tex = [signTexture(I.bag, ['INCLINE', '0.0%'], { bg: '#1a2a3a', fg: '#7dff9b', w: 512, h: 320, round: 30 }), signTexture(I.bag, ['INCLINE', '- - -'], { bg: '#1a2a3a', fg: '#ff6a6a', w: 512, h: 320, round: 30 })];
  const consoleG = new THREE.Group();
  const panel = board(I.bag, tex[0], 1.6, 1.0, '#3a4656', 0.14); consoleG.add(panel);
  for (const [x, c] of [[-0.55, '#ff3d5a'], [0.55, '#2fd16b']]) { const btn = I.bag.M(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 14).rotateX(Math.PI / 2), c, 1.5); btn.position.set(x, -0.62, 0.05); consoleG.add(btn); }
  I.root.add(consoleG);
  const where = label(I, 'WHERE\'S THE BUTTON?', { bg: '#ffffff', w: 900 }, 0.8), beepb = label(I, 'BEEP? BEEP?', { bg: '#ff6a6a', fg: '#ffffff', w: 700 }, 0.8);
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const inK = ease(clamp01((u + T) / Math.max(0.5, T)));
    consoleG.visible = u < D + 0.4;
    consoleG.position.copy(pos).addScaledVector(fwd, 1.0 + (1 - inK) * 5).add(V(0, 1.75 + (1 - inK) * 1.5 + Math.sin(u * 2.5) * 0.06, 0));
    consoleG.rotation.y = Math.atan2(-fwd.x, -fwd.z) + Math.PI; // the face towards him (and a front camera)
    const jab = env(u, 0, D, 0.3);
    panel.material[4].map = tex[jab > 0.5 && Math.floor(u * 3) % 2 ? 1 : 0]; panel.material[4].needsUpdate = true;
    showAt(where, pos, u, 0.1, B - 0.4, 3.2);
    showAt(beepb, consoleG.position, u, B - 0.4, B + 1.2, 1.2);
    if (rig && jab > 0) {
      const poke = Math.max(0, Math.sin(u * 12));
      rig.arms[1].sh.rotation.set(-1.5 * jab - poke * 0.2, 0, 0.1); rig.arms[1].el.rotation.x = -0.6 * (1 - poke) * jab;
      rig.arms[0].sh.rotation.set(-0.4 * jab, 0, -0.5 * jab);
      rig.head.rotation.set(0.35 * jab, Math.sin(u * 4) * 0.4 * jab, 0); rig.torso.rotation.x -= 0.15 * jab;
      r.setPop?.('!');
    }
  };
  return I;
};

// ---- FOIL CAPE (a half marathon that week): the finisher's foil blanket catches the wind like a parachute (he slows) ----
KINDS.foil_cape = (k, h, { T, B, D }) => {
  const I = base(k);
  const SEG = 10;
  const geo = I.bag.add(new THREE.PlaneGeometry(1.5, 2.2, 6, SEG)); const pos0 = geo.attributes.position.array.slice();
  const cape = new THREE.Mesh(geo, I.bag.add(new THREE.MeshStandardMaterial({ color: '#d9dde6', metalness: 0.95, roughness: 0.25, side: THREE.DoubleSide, emissive: '#30343c' }))); cape.frustumCulled = false; I.root.add(cape);
  const wind = speedLines(I, 12);
  const flap = label(I, 'FLAP FLAP!', { bg: '#e6edf5', w: 640 }, 0.85), drag = label(I, 'DRAG!', { bg: '#ff3d5a', fg: '#ffffff' }, 1.0);
  const nk = V();
  I.update = (u, dt, b) => {
    const { pos, fwd, right } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const on = u > -T * 0.6 && u < D + 0.3, billow = 0.35 + 0.65 * env(u, 0, D, 0.6) + 0.4 * env(u, B - 1.2, B + 0.8, 0.3);
    cape.visible = on;
    if (on) {
      // pinned at his shoulders, streaming back and up, rippling
      nk.copy(r.root.position).add(V(0, r.height * 0.78, 0)).addScaledVector(fwd, -0.15);
      cape.position.copy(nk); cape.rotation.set(0, Math.atan2(fwd.x, fwd.z), 0);
      const a = geo.attributes.position.array;
      for (let i = 0; i < a.length; i += 3) {
        const x = pos0[i], y = pos0[i + 1], tt = clamp01((1.1 - y) / 2.2); // 0 at the shoulders .. 1 at the tail
        const back = -tt * 2.2 * (0.4 + 0.6 * billow), lift = tt * tt * 1.4 * billow;
        a[i] = x * (1 + tt * 0.9 * billow); a[i + 1] = -tt * 2.2 * (1 - billow * 0.55) + lift + Math.sin(u * 12 + tt * 5 + x * 2) * 0.12 * tt; a[i + 2] = back + Math.sin(u * 9 + x * 3 + tt * 4) * 0.25 * tt * billow;
      }
      geo.attributes.position.needsUpdate = true; geo.computeVertexNormals();
    }
    wind(u, pos.clone().addScaledVector(fwd, 6), fwd.clone().negate(), right, u < D ? 0.8 : 0);
    showAt(flap, pos, u, 0.1, B - 1.3, 3.4);
    showAt(drag, pos, u, B - 1.2, B + 0.6, 3.4);
    if (rig && u > 0 && u < D) { const k2 = env(u, 0, D, 0.4); rig.torso.rotation.x += 0.55 * k2; rig.head.rotation.x = -0.3 * k2; for (const a of rig.arms) { a.sh.rotation.x += 0.6 * k2; } r.root.position.y -= 0.05 * k2; }
  };
  return I;
};

// ---- MARATHON LEGS (a marathon block): his legs go to jelly (he slows) ----
KINDS.marathon_legs = (k, h, { T, B, D }) => {
  const I = base(k);
  const wob = label(I, 'WOBBLE', { bg: '#ffb3e0', w: 600 }, 0.9);
  I.update = (u, dt, b) => {
    const { pos } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const k2 = env(u, -T * 0.5, D, 0.5);
    showAt(wob, pos, u, B - 1.4, B + 0.6, 3.2);
    if (rig && k2 > 0) { for (const [i, l] of rig.legs.entries()) { l.hp.rotation.z += Math.sin(u * 13 + i * 2) * 0.45 * k2; l.kn.rotation.x += Math.abs(Math.sin(u * 11 + i)) * 0.5 * k2; } rig.hips.rotation.z = Math.sin(u * 7) * 0.25 * k2; r.root.position.y -= Math.abs(Math.sin(u * 7)) * 0.15 * k2; }
  };
  return I;
};

// ---- BUBBLE WRAP (another race tomorrow): wrapped up to save his legs, tiptoeing (he slows) ----
KINDS.bubble_wrap = (k, h, { T, B, D }) => {
  const I = base(k);
  const N = 110;
  const bub = new THREE.InstancedMesh(I.bag.add(new THREE.SphereGeometry(0.075, 8, 6)), I.bag.add(new THREE.MeshStandardMaterial({ color: '#e8f6ff', transparent: true, opacity: 0.55, roughness: 0.1, metalness: 0.1 })), N); bub.frustumCulled = false; I.root.add(bub);
  const sheet = new THREE.Mesh(I.bag.add(new THREE.CylinderGeometry(0.62, 0.55, 1.9, 18, 1, true)), I.bag.add(new THREE.MeshStandardMaterial({ color: '#e8f6ff', transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false }))); I.root.add(sheet);
  const pops = [0, 1, 2].map(() => label(I, 'POP!', { bg: '#ffffff', w: 360, h: 240 }, 0.55));
  const careful = label(I, 'CAREFUL!', { bg: '#ffffff' }, 0.9);
  const O = new THREE.Object3D();
  I.update = (u, dt, b) => {
    const { pos, fwd } = k.frameOf(h.who, b); const r = k.runner(h.who), rig = k.rig(h.who);
    const wrapK = ease(clamp01((u + T) / Math.max(0.5, T))) * (1 - ease(clamp01((u - D) / 0.6)));
    sheet.visible = wrapK > 0.02; sheet.position.copy(r.root.position).add(V(0, 0.95 + r.root.position.y * 0, 0)); sheet.position.y = r.root.position.y + 1.0; sheet.scale.set(wrapK, wrapK, wrapK);
    for (let i = 0; i < N; i++) {
      const a = (i * 2.399) % (Math.PI * 2), y = ((i * 0.618) % 1) * 1.8 - 0.9, rr = 0.6 - y * 0.03;
      O.position.set(r.root.position.x + Math.cos(a) * rr * wrapK, r.root.position.y + 1.0 + y * wrapK, r.root.position.z + Math.sin(a) * rr * wrapK); O.scale.setScalar(wrapK > 0.02 ? 1 : 0.0001); O.updateMatrix(); bub.setMatrixAt(i, O.matrix);
    }
    bub.instanceMatrix.needsUpdate = true;
    pops.forEach((s, i) => { const t0 = 0.4 + i * 0.9; showAt(s, pos.clone().add(V(Math.sin(i * 2) * 0.9, 0, Math.cos(i * 2) * 0.9)), u % 3, t0, t0 + 0.5, 2.2 + i * 0.2); if (u < 0 || u > D) s.visible = false; });
    showAt(careful, pos, u, B - 1.2, B + 0.6, 3.4);
    if (rig && u > 0 && u < D) { const k2 = env(u, 0, D, 0.3); rig.arms[0].sh.rotation.set(0, 0, -1.2 * k2); rig.arms[1].sh.rotation.set(0, 0, 1.2 * k2); for (const l of rig.legs) l.hp.rotation.x *= 1 - 0.6 * k2; r.root.position.y += Math.abs(Math.sin(u * 14)) * 0.08 * k2; r.setPop?.('!'); }
    void fwd;
  };
  return I;
};

void backOut;
