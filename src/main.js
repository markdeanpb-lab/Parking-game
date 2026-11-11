// PARKING PANIC: ST ALBANS EDITION — entry point.
// Glues the simulation (game.js) to rendering, audio, the DJ and the UI.

import * as THREE from 'three';
import map from './mapdata.js';
import { buildTrack } from './track.js';
import { Game } from './game.js';
import { PERSONAS } from './ai.js';
import { CAR_TYPES } from './cartypes.js';
import { buildWorld, buildSky } from './world3d.js';
import { createCarMesh, syncCarMesh } from './carmodels.js';
import { DJ } from './dj.js';
import { AudioEngine } from './audio.js';
import { UI, idColour } from './ui.js';
import { clamp, lerp, wrapAngle } from './util.js';

const params = new URLSearchParams(location.search);
const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
const quality = { low: coarse || params.has('low'), noShadows: params.has('noshadows') };

// ------------------------------------------------------------------ renderer
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !quality.low, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.low ? 1.5 : 2));
renderer.shadowMap.enabled = !quality.noShadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, 1, 0.4, 1800);
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 72 : 58; camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize); resize();

// ------------------------------------------------------------------ world + game
const track = buildTrack(map);
const sky = buildSky(scene, renderer, quality);
const world = buildWorld(scene, track, quality);
const game = new Game(track, { autoplay: params.has('auto'), autoContinue: params.has('auto'), seed: params.has('seed') ? Number(params.get('seed')) : undefined });
const audio = new AudioEngine();
let settings = { voice: true, music: true, muted: false };
try { settings = { ...settings, ...JSON.parse(localStorage.getItem('pp_settings') || '{}') }; } catch (e) { /* ignore */ }
const saveSettings = () => { try { localStorage.setItem('pp_settings', JSON.stringify(settings)); } catch (e) { /* ignore */ } };

let currentMode = 'classic';
let paused = false;
let pendingResults = null, resultsDelay = 0;
let lastQuote = '';

const ui = new UI(track, {
  onMode(mode) {
    audio.init(); audio.ui();
    currentMode = mode;
    if (!ui.seenTutorial()) ui.showTutorial(() => startGame(mode)); else startGame(mode);
  },
  onToggle(kind) {
    audio.init();
    settings[kind] = !settings[kind]; saveSettings(); applySettings();
  },
  onContinue() { if (ui.screen !== 'results') return; audio.ui(); ui.hideScreens(); game.continue(); },
  onRetry() { audio.ui(); startGame(currentMode); },
  onMenu() { toMenu(); },
  onVictoryNext() {
    audio.ui(); clearCelebration();
    if (game.champIndex !== null && game.champIndex < 2) { ui.hideScreens(); game.nextHeat(); } else startGame(currentMode);
  },
  onPause(p) { setPaused(p); },
  onKey(k) { if (k === 'cam') toggleCam(); if (k === 'mute') toggleMute(); if (k === 'horn') audio.horn(); },
});
const dj = new DJ((text) => ui.subtitle(text));
dj.sfx = audio;
function applySettings() {
  dj.voiceOn = settings.voice && !settings.muted; if (!dj.voiceOn) dj.interrupt();
  audio.setMusicOn(settings.music); audio.setMuted(settings.muted);
  ui.setToggle('voice', settings.voice); ui.setToggle('music', settings.music); ui.setToggle('mute', settings.muted);
}
applySettings();
function toggleMute() { settings.muted = !settings.muted; saveSettings(); applySettings(); }

function startGame(mode) {
  clearCelebration();
  ui.hideScreens(); ui.setHud(true);
  pendingResults = null; replay = null; ui.replay(false); paused = false;
  game.start(mode);
}
function toMenu() {
  clearCelebration(); dj.silence(); audio.stopMusic();
  for (const [car] of meshes) removeMesh(car);
  ui.hideIntro();
  game.cleanup(); game.phase = 'title'; game.player.car.ghost = true;
  pendingResults = null; replay = null; paused = false; ui.replay(false);
  ui.setHud(false); ui.show('title');
}
function setPaused(p) {
  if (p && !['intro', 'music', 'park', 'free'].includes(game.phase)) return;
  paused = p;
  if (p) { ui.show('pause'); dj.interrupt(); if (audio.ctx) audio.ctx.suspend(); }
  else { ui.hideScreens(); if (audio.ctx) audio.ctx.resume(); }
}
document.addEventListener('visibilitychange', () => { if (document.hidden && !game.autoplay) setPaused(true); });

// ------------------------------------------------------------------ vehicle meshes
const meshes = new Map();   // car -> { mesh, driver, tag }
// Contestant name tags: one small canvas per state (racing / parked / out), swapped on change; a ground ring in the
// contestant's identity colour so rivals stand out from resident cars at a glance.
const TAG_FONT = "'Overpass', 'Helvetica Neue', Arial, sans-serif";
function tagTexture(text, sub, colour, state) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 160;
  const g = c.getContext('2d'), col = '#' + colour.toString(16).padStart(6, '0');
  const bg = state === 'parked' ? '#00703c' : state === 'out' ? '#3a3f4b' : '#0b1530';
  g.fillStyle = bg; g.beginPath(); g.roundRect(8, 8, 496, 112, 18); g.fill();
  g.fillStyle = col; g.beginPath(); g.roundRect(8, 8, 30, 112, [18, 0, 0, 18]); g.fill();
  g.lineWidth = 8; g.strokeStyle = state === 'out' ? '#888' : '#ffffff'; g.beginPath(); g.roundRect(8, 8, 496, 112, 18); g.stroke();
  g.beginPath(); g.moveTo(236, 120); g.lineTo(256, 152); g.lineTo(276, 120); g.closePath(); g.fillStyle = state === 'out' ? '#888' : '#ffffff'; g.fill();
  g.textAlign = 'center'; g.fillStyle = '#fff';
  g.font = `900 58px ${TAG_FONT}`; g.fillText(text.toUpperCase(), 272, 70);
  g.fillStyle = state === 'parked' ? '#b9ffcf' : state === 'out' ? '#ff9aa4' : '#ffd21f'; g.font = `800 28px ${TAG_FONT}`;
  g.fillText(state === 'parked' ? '✔ PARKED' : state === 'out' ? 'OUT' : sub.toUpperCase(), 272, 106);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return tex;
}
function nameTag(text, sub, colour) {
  const maps = { race: tagTexture(text, sub, colour, 'race'), parked: null, out: null };
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: maps.race, transparent: true, depthWrite: false }));
  s.center.set(0.5, 0); s.scale.set(3.2, 1.0, 1); s.renderOrder = 5;
  s.userData = { maps, state: 'race', make: (st) => tagTexture(text, sub, colour, st) };
  return s;
}
function setTagState(tag, st) {
  const u = tag.userData; if (u.state === st) return;
  u.state = st; tag.material.map = u.maps[st] ||= u.make(st); tag.material.needsUpdate = true;
}
const ringGeo = new THREE.RingGeometry(2.25, 3.0, 40); ringGeo.rotateX(-Math.PI / 2);
function addMesh(car, persona, driver, tagged, comp) {
  if (meshes.has(car)) return;
  const mesh = createCarMesh(car.type, car.colour ?? persona.colour, { learner: persona.learner, roofBox: persona.key === 'mum', beacon: persona.lorry });
  let tag = null, ring = null;
  if (tagged) {
    const col = comp ? idColour(comp) : persona.colour;
    tag = nameTag(persona.name, persona.title.replace('The ', ''), col); tag.position.y = CAR_TYPES[car.type].hgt + 0.9; mesh.add(tag);
    ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.9, depthWrite: false }));
    ring.position.y = 0.06; ring.renderOrder = 2; mesh.add(ring);
  }
  scene.add(mesh);
  meshes.set(car, { mesh, driver, tag, ring, baseY: tag ? tag.position.y : 0 });
}
function removeMesh(car) {
  const m = meshes.get(car);
  if (!m) return;
  scene.remove(m.mesh); meshes.delete(car);
}

// ------------------------------------------------------------------ particles
const MAXP = 1400;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(MAXP * 3), pCol = new Float32Array(MAXP * 3);
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
const pMat = new THREE.PointsMaterial({ size: 0.34, vertexColors: true, transparent: true, depthWrite: false, sizeAttenuation: true });
const points = new THREE.Points(pGeo, pMat); points.frustumCulled = false; scene.add(points);
const parts = [];
for (let i = 0; i < MAXP; i++) { parts.push({ life: 0, vx: 0, vy: 0, vz: 0, g: 0, drag: 0 }); pPos[i * 3 + 1] = -100; }
let pNext = 0;
const tmpC = new THREE.Color();
function emit(x, y, z, n, opt) {
  for (let k = 0; k < n; k++) {
    const i = pNext; pNext = (pNext + 1) % MAXP;
    const p = parts[i], a = Math.random() * Math.PI * 2, sp = opt.speed * (0.4 + Math.random() * 0.6), up = opt.up ?? 1;
    const el = opt.sphere ? Math.acos(2 * Math.random() - 1) : Math.PI / 2;
    p.vx = Math.cos(a) * Math.sin(el) * sp; p.vz = Math.sin(a) * Math.sin(el) * sp; p.vy = opt.sphere ? Math.cos(el) * sp : up * sp * (0.6 + Math.random());
    p.life = opt.life * (0.6 + Math.random() * 0.4); p.g = opt.gravity ?? 9; p.drag = opt.drag ?? 0.6;
    pPos[i * 3] = x + (Math.random() - 0.5) * (opt.spread ?? 0.4); pPos[i * 3 + 1] = y; pPos[i * 3 + 2] = z + (Math.random() - 0.5) * (opt.spread ?? 0.4);
    tmpC.setHex(opt.colours[Math.floor(Math.random() * opt.colours.length)]);
    pCol[i * 3] = tmpC.r; pCol[i * 3 + 1] = tmpC.g; pCol[i * 3 + 2] = tmpC.b;
  }
}
function updateParticles(dt) {
  for (let i = 0; i < MAXP; i++) {
    const p = parts[i];
    if (p.life <= 0) continue;
    p.life -= dt;
    if (p.life <= 0) { pPos[i * 3 + 1] = -100; continue; }
    p.vy -= p.g * dt; const d = Math.exp(-p.drag * dt); p.vx *= d; p.vz *= d; if (p.vy < 0) p.vy *= Math.exp(-p.drag * 1.5 * dt);
    pPos[i * 3] += p.vx * dt; pPos[i * 3 + 1] += p.vy * dt; pPos[i * 3 + 2] += p.vz * dt;
    if (pPos[i * 3 + 1] < 0.05) { pPos[i * 3 + 1] = 0.05; p.vy = 0; p.vx *= 0.5; p.vz *= 0.5; }
  }
  pGeo.attributes.position.needsUpdate = true; pGeo.attributes.color.needsUpdate = true;
}
const CONFETTI = [0xffc928, 0xe63946, 0x2fd36b, 0x4cc9f0, 0xf72585, 0xffffff];
const confetti = (x, z, n = 120) => emit(x, 2.2, z, n, { speed: 7, life: 3.2, gravity: 5, drag: 1.6, colours: CONFETTI, spread: 1.5 });
const puff = (x, z, n = 16, colours = [0xdddddd, 0xbbbbbb, 0xffffff]) => emit(x, 0.5, z, n, { speed: 2.4, life: 0.9, gravity: -1.5, drag: 2.5, colours, spread: 1.2 });
const sparks = (x, z, n = 10) => emit(x, 0.3, z, n, { speed: 4, life: 0.45, gravity: 9, drag: 1, colours: [0xffd27a, 0xff9b1a, 0xffffff], spread: 0.3 });
const firework = (x, y, z) => { emit(x, y, z, 90, { speed: 11, life: 1.6, gravity: 3.5, drag: 1.4, colours: [CONFETTI[Math.floor(Math.random() * 5)], 0xffffff], sphere: true, spread: 0.2 }); audio.firework(); };

// ------------------------------------------------------------------ celebration
let celebration = null;
function startCelebration() {
  const pc = game.player.car;
  const c = document.createElement('canvas'); c.width = 512; c.height = 320;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 512, 320); grad.addColorStop(0, '#fff3b0'); grad.addColorStop(0.5, '#ffc928'); grad.addColorStop(1, '#b8860b');
  g.fillStyle = grad; g.beginPath(); g.roundRect(6, 6, 500, 308, 28); g.fill(); g.lineWidth = 10; g.strokeStyle = '#6b4e00'; g.stroke();
  g.fillStyle = '#3d2c00'; g.textAlign = 'center'; g.font = '40px Anton, Impact, Arial, sans-serif'; g.fillText('GOLDEN PARKING PERMIT', 256, 62);
  g.fillStyle = '#1560d4'; g.beginPath(); g.roundRect(196, 84, 120, 120, 18); g.fill(); g.fillStyle = '#fff'; g.font = 'bold 100px Arial'; g.fillText('P', 256, 180);
  g.fillStyle = '#3d2c00'; g.font = '700 26px Overpass, Arial, sans-serif'; g.fillText('ZONE: ALL OF THEM', 256, 246); g.fillText('ST ALBANS · VALID FOREVER', 256, 284);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const permit = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
  permit.position.set(pc.x, 4.6, pc.z); scene.add(permit);
  celebration = { t: 0, permit, next: 0.3, x: pc.x, z: pc.z };
  audio.fanfare(); confetti(pc.x, pc.z, 260);
}
function clearCelebration() { if (celebration) { scene.remove(celebration.permit); celebration = null; } }

// ------------------------------------------------------------------ replay
const history = [];
let replay = null;
function record(time) {
  const frame = { t: time, poses: [] };
  for (const [car] of meshes) if (!car.ghost) frame.poses.push([car, car.x, car.z, car.h, car.steer, car.v, car.wheelSpin]);
  history.push(frame);
  while (history.length && time - history[0].t > 7) history.shift();
}
function startReplay(focusCar, seconds, speed) {
  if (history.length < 20) return false;
  const end = history[history.length - 1].t;
  const frames = history.filter((f) => f.t >= end - seconds);
  const l = track.locate(focusCar.x, focusCar.z), p = l.edge.path.at(l.s);
  const sideSign = l.lat > 0 ? -1 : 1;
  replay = { frames, t: frames[0].t, end, speed, focus: focusCar, cam: new THREE.Vector3(focusCar.x + p.tx * 8 - p.tz * sideSign * 0.6, 2.2, focusCar.z + p.tz * 8 + p.tx * sideSign * 0.6) };
  ui.replay(true); audio.whoosh();
  return true;
}
function stepReplay(dt) {
  replay.t += dt * replay.speed;
  if (replay.t >= replay.end) { endReplay(); return; }
  let f = replay.frames[0];
  for (const fr of replay.frames) { if (fr.t <= replay.t) f = fr; else break; }
  const ghost = { x: 0, z: 0, h: 0, steer: 0, v: 0, wheelSpin: 0, bump: 0, braking: false, stalled: 0 };
  for (const [car, x, z, h, steer, v, spin] of f.poses) {
    const m = meshes.get(car); if (!m) continue;
    ghost.x = x; ghost.z = z; ghost.h = h; ghost.steer = steer; ghost.v = v; ghost.wheelSpin = spin;
    syncCarMesh(m.mesh, ghost, replay.t, null);
    if (car === replay.focus) replay.look = new THREE.Vector3(x, 0.9, z);
  }
}
function endReplay() {
  replay = null; ui.replay(false);
  for (const [car, m] of meshes) syncCarMesh(m.mesh, car, 0, m.driver);
}

// ------------------------------------------------------------------ input
const keys = {};
const KEYMAP = { ArrowUp: 'gas', KeyW: 'gas', ArrowDown: 'brake', KeyS: 'brake', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right', Space: 'hand' };
window.addEventListener('keydown', (e) => {
  if (KEYMAP[e.code]) { keys[KEYMAP[e.code]] = true; e.preventDefault(); }
  if (e.repeat) return;
  audio.init();
  if (replay) { endReplay(); return; }
  if (e.code === 'KeyC') toggleCam();
  if (e.code === 'KeyH') audio.horn();
  if (e.code === 'KeyM') toggleMute();
  if (e.code === 'KeyP' || e.code === 'Escape') { if (ui.screen === 'tutorial') return; setPaused(!paused); }
  if (e.code === 'Enter' || e.code === 'Space') {
    if (ui.screen === 'results') { ui.cb.onContinue(); e.preventDefault(); }
    else if (ui.screen === 'tutorial' && e.code === 'Enter') ui.tutStep(1);
  }
});
window.addEventListener('keyup', (e) => { if (KEYMAP[e.code]) keys[KEYMAP[e.code]] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
canvas.addEventListener('pointerdown', () => { audio.init(); if (replay) endReplay(); });

function applyInput() {
  const pc = game.player.car;
  if (game.playerComp.driver) return;                         // autopilot
  const active = ['music', 'park', 'free'].includes(game.phase) && !pc.kinematic;
  const t = ui.touch;
  const gas = keys.gas || t.gas, brake = keys.brake || t.brake;
  const steer = (keys.right || t.right ? 1 : 0) - (keys.left || t.left ? 1 : 0);
  if (!active) { pc.ctrl.throttle = 0; pc.ctrl.steer = 0; pc.ctrl.handbrake = true; return; }
  pc.ctrl.throttle = gas ? 1 : brake ? -1 : 0;
  pc.ctrl.steer = steer;
  pc.ctrl.handbrake = !!keys.hand || (gas && brake);
}

// ------------------------------------------------------------------ camera
const cam = { mode: 'chase', h: 0, park: 0, shake: 0, pos: new THREE.Vector3(0, 60, 80), look: new THREE.Vector3(), lift: 0, orbit: 0 };
function toggleCam() { cam.mode = cam.mode === 'chase' ? 'top' : 'chase'; ui.toast(cam.mode === 'top' ? 'OVERHEAD PARKING CAM' : 'CHASE CAM', 'info'); }
const vTmp = new THREE.Vector3(), vLook = new THREE.Vector3();
/**
 * Stop the camera ending up inside a house or a van: pull it back towards the carriageway
 * (houses stand ~2 m beyond the kerb) unless it is high enough to clear the roofs, and lift it
 * over any vehicle it would otherwise sit inside.
 */
const ROOF_CLEAR = 13;
function keepCameraClear(p) {
  const d = track.sdf.sample(p.x, p.z);
  if (d < -1.4 && p.y < ROOF_CLEAR) {
    const g = track.sdf.grad(p.x, p.z), push = (-1.4 - d) * clamp((ROOF_CLEAR - p.y) / 4, 0, 1);
    p.x += g.x * push; p.z += g.z * push;
  }
  for (const c of game.world.cars) {
    if (c.ghost || c === game.player.car) continue;
    if (Math.abs(c.x - p.x) > 4 || Math.abs(c.z - p.z) > 4) continue;
    const l = c.toLocal(p.x, p.z);
    if (Math.abs(l.f) < c.len / 2 + 0.6 && Math.abs(l.r) < c.wid / 2 + 0.6) p.y = Math.max(p.y, CAR_TYPES[c.type].hgt + 1.2);
  }
}

function updateCamera(dt, time) {
  const pc = game.player.car;
  cam.shake = Math.max(0, cam.shake - dt * 2.2);
  if (window.__pp.debugCam) { const d = window.__pp.debugCam; camera.up.set(0, 1, 0); camera.position.set(...d.pos); camera.lookAt(...d.look); sky.follow(d.look[0], d.look[2]); return; }
  if (game.phase === 'title' || pc.ghost) {
    cam.orbit += dt * 0.05;
    vTmp.set(-20 + Math.cos(cam.orbit) * 175, 95, 5 + Math.sin(cam.orbit) * 175); vLook.set(-20, 0, 5);
    camera.up.set(0, 1, 0);
    cam.pos.lerp(vTmp, 1 - Math.exp(-dt * 1.2)); cam.look.lerp(vLook, 1 - Math.exp(-dt * 2));
  } else if (replay) {
    camera.up.set(0, 1, 0);
    cam.pos.lerp(replay.cam, 1 - Math.exp(-dt * 6));
    if (replay.look) cam.look.lerp(replay.look, 1 - Math.exp(-dt * 10));
  } else if (celebration || game.phase === 'victory') {
    cam.orbit += dt * 0.5;
    vTmp.set(pc.x + Math.cos(cam.orbit) * 8, 10.5, pc.z + Math.sin(cam.orbit) * 8); vLook.set(pc.x, 1.8, pc.z);
    camera.up.set(0, 1, 0);
    cam.pos.lerp(vTmp, 1 - Math.exp(-dt * 2.5)); cam.look.lerp(vLook, 1 - Math.exp(-dt * 5));
  } else {
    cam.h += wrapAngle(pc.h - cam.h) * (1 - Math.exp(-dt * (Math.abs(pc.v) > 1 ? 4.5 : 2)));
    const near = (game.phase === 'park' || game.phase === 'free') && !game.playerComp.parked && game.guide && Math.abs(pc.v) < 6;
    cam.park = lerp(cam.park, near ? 1 : 0, 1 - Math.exp(-dt * 2.5));
    const fx = Math.cos(cam.h), fz = Math.sin(cam.h);
    if (cam.mode === 'top') {
      vTmp.set(pc.x - fx * 0.5, 22 + Math.abs(pc.v) * 0.6, pc.z - fz * 0.5); vLook.set(pc.x + fx * 1.5, 0, pc.z + fz * 1.5);
      camera.up.set(fx, 0, fz);
      cam.pos.lerp(vTmp, 1 - Math.exp(-dt * 6)); cam.look.lerp(vLook, 1 - Math.exp(-dt * 8));
    } else {
      camera.up.set(0, 1, 0);
      const dist = lerp(7.4, 6.0, cam.park) + Math.abs(pc.v) * 0.13;
      let height = lerp(3.3, 8.6, cam.park);
      const cx = pc.x - fx * dist, cz = pc.z - fz * dist;
      // if the camera would end up in someone's front room, go over the roof instead
      const inside = clamp((-track.sdf.sample(cx, cz) - 1.6) / 2.5, 0, 1);
      cam.lift = lerp(cam.lift, inside, 1 - Math.exp(-dt * 4));
      height += cam.lift * 7;
      vTmp.set(cx, height, cz); vLook.set(pc.x + fx * lerp(3.5, 0.6, cam.park), 1.0, pc.z + fz * lerp(3.5, 0.6, cam.park));
      cam.pos.lerp(vTmp, 1 - Math.exp(-dt * 7)); cam.look.lerp(vLook, 1 - Math.exp(-dt * 12));
    }
  }
  if (!(game.phase === 'title' || pc.ghost)) keepCameraClear(cam.pos);
  camera.position.copy(cam.pos);
  if (cam.shake > 0) { camera.position.x += (Math.random() - 0.5) * cam.shake * 0.5; camera.position.y += (Math.random() - 0.5) * cam.shake * 0.4; }
  camera.lookAt(cam.look);
  sky.follow(cam.look.x, cam.look.z);
}

// ------------------------------------------------------------------ game events
const EVENT_TITLES = { binLorry: '🚛 BIN LORRY!', permit: '🚫 SURPRISE PERMIT ZONE!', schoolRun: '🚙 THE SCHOOL RUN!', fakeSpace: "🏠 DJ'S TIP… OR IS IT?", deliveryVan: '📦 DELIVERY VAN!', vanGone: '📦 VAN GONE — BAY FREE!', perfectSpot: '✨ THE PERFECT SPOT!' };
const PENALTY = { kerb: 'KERBED IT', bump: 'BUMP', wrongWay: 'WRONG WAY', loiter: 'LOITERING', driveway: "THAT'S A DRIVEWAY", yellow: 'DOUBLE YELLOWS', permit: 'PERMIT ONLY' };
let slowmo = 0;

game.on((type, d) => {
  dj.handle(type, d, game);
  const pc = game.player.car;
  switch (type) {
    case 'gameStart':
      for (const [car] of meshes) removeMesh(car);
      for (const c of d.competitors) addMesh(c.car, c.isPlayer ? { ...PERSONAS.auto } : c.persona, c.driver || null, !c.isPlayer, c);
      ui.setRivals(game); history.length = 0;
      cam.h = pc.h;
      break;
    case 'carAdded': addMesh(d.car, d.persona, game.drivers.find((x) => x.car === d.car) || null, false); break;
    case 'carRemoved': { const m = meshes.get(d.car); if (m) puff(d.car.x, d.car.z, 14); removeMesh(d.car); break; }
    case 'roundIntro':
      if (replay) endReplay();
      pendingResults = null; ui.replay(false);
      ui.hideScreens(); ui.roundIntro(d); audio.jingle(d); history.length = 0;
      cam.h = pc.h; cam.pos.set(pc.x - Math.cos(pc.h) * 14, 9, pc.z - Math.sin(pc.h) * 14);
      break;
    case 'freeStart': cam.h = pc.h; break;
    case 'musicStart': audio.startMusic(game.round, game.final); ui.flash('GO!', 'KEEP MOVING · SCOUT THE CONES', 'green'); break;
    case 'musicStop':
      audio.parkMoment(d);
      ui.musicStop(d);
      cam.shake = 1;
      for (const b of game.bays) if (b.state === 'open') puff(b.x, b.z, 18, [0xff6a13, 0xffffff, 0xffc928]);
      break;
    case 'tick': if (d.t <= 10) audio.tick(d.t); break;
    case 'lastSpace': ui.flash('LAST SPACE!', `${d.t} SECONDS`, 'red'); audio.alarm(); cam.shake = 0.5; break;
    case 'parked':
      if (d.isPlayer) {
        audio.parked(d.rating.key === 'perfect' ? 2 : d.rating.key === 'awful' ? 0 : 1);
        ui.flash(d.rating.label, `+${d.points} POINTS`, d.rating.key === 'awful' ? 'red' : 'green');
        if (d.rating.key !== 'awful') confetti(pc.x, pc.z, d.rating.key === 'perfect' ? 160 : 60);
        if (d.rating.key === 'perfect') audio.cheer(2);
      } else { audio.pop(); ui.toast(`${d.comp.name} PARKED · ${d.bay.street.toUpperCase()}`, 'info'); }
      break;
    case 'robbed': ui.flash('ROBBED!', `BY ${d.rival.name.toUpperCase()}`, 'red'); audio.bad(); cam.shake = 0.6; break;
    case 'stole': ui.toast(`CHEEKY! YOU PINCHED ${d.rival.name.toUpperCase()}'S SPACE`, 'good'); break;
    case 'penalty': ui.toast(`−${d.pts} ${PENALTY[d.reason] || ''}`, 'bad'); break;
    case 'impact':
      if (d.player) {
        if (d.kind === 'kerb') audio.kerb(d.speed); else audio.crash(d.speed);
        cam.shake = Math.max(cam.shake, clamp(d.speed / 6, 0.2, 1.2)); sparks(d.x, d.z, 6 + Math.round(d.speed * 2));
        if (d.speed > 7 && d.kind !== 'kerb') slowmo = 1.1;
      } else if (Math.hypot(d.x - pc.x, d.z - pc.z) < 60) audio.crash(1);
      break;
    case 'honk': { const c = d.driver.car; audio.horn(Math.hypot(c.x - pc.x, c.z - pc.z) > 30); break; }
    case 'vanBlocked': ui.toast('LET THE VAN OUT!', 'bad'); audio.horn(); break;
    case 'shove': ui.toast('BEING SHOVED!', 'bad'); break;
    case 'cushion': audio.thud(); break;
    case 'event':
      ui.toast(EVENT_TITLES[d.kind] || '', 'info');
      if (d.kind === 'permit') { audio.bad(); ui.flash('PERMIT ONLY!', `NEW SPACE: ${d.newStreet.toUpperCase()}`, 'red'); puff(d.newBay.x, d.newBay.z, 18, [0xff6a13, 0xffffff]); }
      if (d.kind === 'perfectSpot') ui.flash('PERFECT SPOT!', d.street.toUpperCase(), '');
      break;
    case 'loiter': ui.toast(d.level === 2 ? 'LOITERING PENALTY!' : 'KEEP MOVING!', 'bad'); if (d.level === 2) audio.bad(); break;
    case 'falseStart': ui.toast('ENGINE CUT — 2 SECONDS!', 'bad'); break;
    case 'wrongWay': ui.toast(d.real ? 'ONE-WAY STREET!' : 'AGAINST THE FLOW', 'bad'); break;
    case 'driveway': case 'yellow': case 'permitParked': audio.bad(); break;
    case 'freePark':
      audio.parked(d.rating.key === 'perfect' ? 2 : d.rating.key === 'awful' ? 0 : 1);
      ui.flash(d.rating.label, `QUALITY ${d.ev.quality}%`, d.rating.key === 'awful' ? 'red' : 'green');
      if (d.rating.key === 'perfect') confetti(pc.x, pc.z, 100);
      break;
    case 'roundEnd': {
      audio.stopMusic(); audio.tick(0);
      for (const c of d.out) puff(c.car.x, c.car.z, 26, [0x555555, 0x888888, 0x333333]);
      if (d.playerOut) { audio.sadTrombone(); ui.flash('OUT!', 'NO SPACE FOR YOU', 'red'); }
      else if (d.result === 'victory') ui.flash('WINNER!', 'THE GOLDEN PERMIT IS YOURS', '');
      else ui.flash('SAFE!', d.out.length ? `${d.out.map((c) => c.name.toUpperCase()).join(' & ')} ${d.out.length > 1 ? 'ARE' : 'IS'} OUT` : '', 'green');
      pendingResults = d; resultsDelay = 1.6;
      // slow-motion replay of the moment it all went wrong
      const f = d.playerOut ? game.playerComp : d.focus;
      const dramatic = f && (f.isPlayer || (f.driver && (f.driver.poses && f.car.kinematic || game.bays.some((b) => b.state === 'open' && Math.hypot(b.x - f.car.x, b.z - f.car.z) < 14))));
      pendingResults.replay = dramatic && d.result !== 'victory' && !game.autoplay ? { car: f.car, seconds: f.isPlayer ? 3.6 : 2.6, speed: f.isPlayer ? 0.4 : 0.5 } : null;
      break;
    }
    case 'gameover': {
      lastQuote = dj.line('eliminatedPlayer');
      const best = ui.addScore(game.mode.key, game.score, false);
      ui.gameover({ ...d, stats: game.stats }, lastQuote, best);
      break;
    }
    case 'victory': {
      const best = d.champNext ? false : ui.addScore(game.mode.key, game.score, true);
      startCelebration();
      setTimeout(() => { if (game.phase === 'victory') ui.victory(d, best); }, 3800);
      break;
    }
    default: break;
  }
});

// ------------------------------------------------------------------ main loop
let last = performance.now(), time = 0, frame = 0, sensor = null;
function tick(now) {
  requestAnimationFrame(tick);
  let dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (paused) { renderer.render(scene, camera); return; }
  time += dt; frame++;
  if (slowmo > 0) { slowmo -= dt; dt *= 0.3; }

  if (replay) stepReplay(dt);
  else {
    applyInput();
    // fixed-ish sub-steps keep collisions solid at low frame rates
    const n = dt > 1 / 45 ? 2 : 1;
    for (let i = 0; i < n; i++) game.update(dt / n);
    for (const [car, m] of meshes) { m.mesh.visible = !car.ghost; if (!car.ghost) syncCarMesh(m.mesh, car, time, m.driver); }
    if (game.phase === 'music' || game.phase === 'park') record(time);
    if (pendingResults) {
      resultsDelay -= dt;
      if (resultsDelay <= 0) {
        const r = pendingResults.replay; pendingResults.replay = null;
        if (game.autoContinue) pendingResults = null;
        else if (!(r && startReplay(r.car, r.seconds, r.speed))) { ui.results(pendingResults, game); pendingResults = null; }
        else resultsDelay = 0.3;
      }
    }
  }
  // name tags: grey out the eliminated
  for (const c of game.competitors) {
    const m = meshes.get(c.car); if (!m || !m.tag) continue;
    setTagState(m.tag, !c.alive ? 'out' : c.parked ? 'parked' : 'race');
    const dc = Math.hypot(c.car.x - camera.position.x, c.car.z - camera.position.z);
    // grow with distance so a name stays readable down the street; only fade when right on top of the camera
    const k = clamp(dc / 16, 1, 2.6);
    m.tag.scale.set(3.2 * k, 1.0 * k, 1); m.tag.position.y = m.baseY + (k - 1) * 0.35;
    m.tag.material.opacity = replay ? 0 : clamp((dc - 3.5) / 2.5, 0, 1);
    if (m.ring) { m.ring.visible = c.alive && !replay; m.ring.material.opacity = c.parked ? 0.45 : 0.6 + 0.3 * Math.sin(time * 6); }
  }

  if (celebration) {
    celebration.t += dt; celebration.next -= dt;
    celebration.permit.rotation.y += dt * 2.2; celebration.permit.position.y = 4.4 + Math.sin(celebration.t * 2) * 0.4;
    if (celebration.next <= 0) { celebration.next = 0.55 + Math.random() * 0.5; firework(celebration.x + (Math.random() - 0.5) * 30, 12 + Math.random() * 10, celebration.z + (Math.random() - 0.5) * 30); confetti(celebration.x, celebration.z, 40); }
  }
  updateParticles(dt);
  world.update(time, dt, game.phase, game.phase === 'park' && !game.playerComp.parked && game.lastPick ? game.lastPick.duel.bay : null);
  updateCamera(dt, time);

  const pc = game.player.car, playing = ['music', 'park', 'free'].includes(game.phase);
  if (frame % 3 === 0) sensor = playing && (game.phase !== 'music') && !pc.kinematic && Math.abs(pc.v) < 4 && game.guide ? game.world.proximity(pc, 1.6) : null;
  audio.update(dt, {
    speed: pc.v, throttle: playing && Math.abs(pc.ctrl.throttle) > 0 && pc.stalled <= 0, engine: playing && !pc.ghost && !replay, sensor: replay ? null : sensor,
    urgency: game.phase === 'park' ? clamp(1 - game.timeLeft / 20, 0, 1) : 0,
    timeLeft: game.phase === 'park' ? game.timeLeft : null, safe: !game.playerComp.alive || !!game.playerComp.parked,
  });
  audio.duck(dj.speaking);
  dj.update(dt);
  if (!pc.ghost) ui.update(game, dt, time);
  renderer.render(scene, camera);
}

// ------------------------------------------------------------------ boot
ui.show('title');
window.__pp = { game, track, ui, audio, dj, camera, cam, meshes, startGame, THREE, scene, renderer };
requestAnimationFrame(tick);
