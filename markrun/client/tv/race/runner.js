// Chunky stylised runner characters with a procedural rig (no skinning: a hierarchy of toon parts + outlines).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { toon, mesh, canvasTexture } from './toon.js';
import { FONT, outlinedText, roundRect, mulberry } from './world.js';

const BUILDS = {
  stocky: { torso: [0.9, 0.76, 0.58], leg: 0.66, legR: 0.16, arm: 0.66, armR: 0.14, head: 0.47, hand: 0.19, shoe: [0.34, 0.25, 0.6] },
  lanky: { torso: [0.56, 0.86, 0.38], leg: 1.06, legR: 0.095, arm: 0.9, armR: 0.085, head: 0.39, hand: 0.15, shoe: [0.27, 0.21, 0.62] },
  compact: { torso: [0.68, 0.6, 0.5], leg: 0.52, legR: 0.13, arm: 0.52, armR: 0.11, head: 0.5, hand: 0.17, shoe: [0.3, 0.23, 0.5] },
  tall: { torso: [0.7, 0.94, 0.46], leg: 0.92, legR: 0.125, arm: 0.8, armR: 0.11, head: 0.43, hand: 0.17, shoe: [0.31, 0.24, 0.6] },
};
const HAIR_COLS = ['#2b1d14', '#5a3a1e', '#c8642a', '#e8c66a', '#1d1d24', '#a9a9b3', '#3a2a1e', '#8a5a2b', '#ff5fa2'];
const OL = 3.2;
const geoCache = new Map();
const G = (key, fn) => { if (!geoCache.has(key)) geoCache.set(key, fn()); return geoCache.get(key); };
export function disposeRunnerGeometry() { for (const g of geoCache.values()) g.dispose(); geoCache.clear(); }

function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
const lerp = (a, b, t) => a + (b - a) * t;

// ---- face textures ----
function drawFace(g, w, h, skin, face, expr) {
  g.fillStyle = skin; g.fillRect(0, 0, w, h);
  const cx = w * 0.25, eyeY = h * 0.47, mouthY = h * 0.64, ex = w * 0.058;
  const ink = '#1a1420';
  // cheeks
  g.fillStyle = 'rgba(255,90,90,0.28)';
  for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * ex * 1.75, mouthY - h * 0.03, w * 0.022, h * 0.03, 0, 0, 7); g.fill(); }
  const eye = (x, kind) => {
    if (kind === 'heart') {
      g.fillStyle = '#ff2d6f'; g.strokeStyle = ink; g.lineWidth = 5;
      g.beginPath(); const s = w * 0.03; g.moveTo(x, eyeY + s * 1.1); g.bezierCurveTo(x - s * 2.2, eyeY - s * 0.2, x - s * 0.9, eyeY - s * 1.9, x, eyeY - s * 0.6);
      g.bezierCurveTo(x + s * 0.9, eyeY - s * 1.9, x + s * 2.2, eyeY - s * 0.2, x, eyeY + s * 1.1); g.fill(); g.stroke(); return;
    }
    if (kind === 'closed' || kind === 'happy') {
      g.strokeStyle = ink; g.lineWidth = 9; g.lineCap = 'round'; g.beginPath();
      if (kind === 'happy') g.arc(x, eyeY + h * 0.02, w * 0.024, Math.PI * 1.1, Math.PI * 1.9); else { g.moveTo(x - w * 0.025, eyeY); g.lineTo(x + w * 0.025, eyeY); }
      g.stroke(); return;
    }
    if (kind === 'x') { g.strokeStyle = ink; g.lineWidth = 8; g.lineCap = 'round'; const s = w * 0.02; g.beginPath(); g.moveTo(x - s, eyeY - s); g.lineTo(x + s, eyeY + s); g.moveTo(x + s, eyeY - s); g.lineTo(x - s, eyeY + s); g.stroke(); return; }
    if (kind === 'wink' && x > cx) kind = 'happy';
    if (kind === 'wink') kind = 'open';
    if (kind === 'happy') { g.strokeStyle = ink; g.lineWidth = 9; g.lineCap = 'round'; g.beginPath(); g.arc(x, eyeY + h * 0.02, w * 0.024, Math.PI * 1.1, Math.PI * 1.9); g.stroke(); return; }
    const big = kind === 'wide' ? 1.3 : 1;
    const rw = w * 0.03 * big, rh = h * 0.085 * big;
    g.fillStyle = '#fff'; g.strokeStyle = ink; g.lineWidth = 6; g.beginPath(); g.ellipse(x, eyeY, rw, rh, 0, 0, 7); g.fill(); g.stroke();
    const pr = kind === 'wide' ? 0.38 : 0.55;
    g.fillStyle = ink; g.beginPath(); g.ellipse(x + rw * 0.15, eyeY + rh * 0.12, rw * pr, rh * pr * 1.1, 0, 0, 7); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(x + rw * 0.35, eyeY - rh * 0.2, rw * 0.22, 0, 7); g.fill();
    if (kind === 'half') { g.fillStyle = skin; g.fillRect(x - rw - 4, eyeY - rh - 4, rw * 2 + 8, rh * 1.05); g.strokeStyle = ink; g.lineWidth = 7; g.beginPath(); g.moveTo(x - rw - 2, eyeY - rh * 0.1); g.lineTo(x + rw + 2, eyeY - rh * 0.1); g.stroke(); }
  };
  let eyeKind = { sleepy: 'half', smug: 'half', cheeky: 'wink', 'wide-eyed': 'wide' }[face] || 'open';
  if (expr === 'happy') eyeKind = 'happy';
  if (expr === 'love') eyeKind = 'heart';
  if (expr === 'dead') eyeKind = 'x';
  if (expr === 'effort' && face !== 'goofy') eyeKind = 'open';
  for (const s of [-1, 1]) eye(cx + s * ex, eyeKind);
  // brows
  g.strokeStyle = ink; g.lineWidth = 10; g.lineCap = 'round';
  const browTilt = expr === 'effort' || face === 'determined' || face === 'gritted' ? 0.35 : expr === 'sad' || face === 'worried' ? -0.35 : face === 'smug' || face === 'cheeky' ? 0.15 : face === 'wide-eyed' ? -0.2 : 0;
  for (const s of [-1, 1]) {
    const x = cx + s * ex, y = eyeY - h * 0.13, d = w * 0.026;
    const xi = x - s * d, xo = x + s * d; // inner end is towards the face centre
    g.beginPath(); g.moveTo(xo, y - browTilt * 18); g.lineTo(xi, y + browTilt * 18); g.stroke();
  }
  // mouth
  g.lineWidth = 8; g.strokeStyle = ink; g.fillStyle = '#7a1e2e';
  const mx = cx;
  const m = expr || 'normal';
  if (m === 'happy' || (m === 'normal' && face === 'grin')) {
    g.beginPath(); g.moveTo(mx - w * 0.04, mouthY - h * 0.02); g.quadraticCurveTo(mx, mouthY + h * 0.12, mx + w * 0.04, mouthY - h * 0.02); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#fff'; g.fillRect(mx - w * 0.03, mouthY - h * 0.018, w * 0.06, h * 0.03);
    g.fillStyle = '#ff7d8f'; g.beginPath(); g.ellipse(mx, mouthY + h * 0.06, w * 0.015, h * 0.02, 0, 0, 7); g.fill();
  } else if (m === 'effort') {
    g.fillStyle = '#fff'; g.beginPath(); roundRect(g, mx - w * 0.035, mouthY - h * 0.03, w * 0.07, h * 0.065, 10); g.fill(); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.moveTo(mx - w * 0.035, mouthY); g.lineTo(mx + w * 0.035, mouthY); for (let i = -2; i <= 2; i++) { g.moveTo(mx + i * w * 0.012, mouthY - h * 0.03); g.lineTo(mx + i * w * 0.012, mouthY + h * 0.035); } g.stroke();
  } else if (m === 'sad' || m === 'dead') {
    g.beginPath(); g.moveTo(mx - w * 0.03, mouthY + h * 0.04); g.quadraticCurveTo(mx, mouthY - h * 0.04, mx + w * 0.03, mouthY + h * 0.04); g.stroke();
    if (m === 'dead') { g.fillStyle = '#ff7d8f'; g.beginPath(); g.ellipse(mx + w * 0.012, mouthY + h * 0.07, w * 0.012, h * 0.04, 0.2, 0, 7); g.fill(); g.stroke(); }
  } else if (m === 'love' || m === 'pant') {
    g.beginPath(); g.ellipse(mx, mouthY + h * 0.02, w * 0.022, h * 0.05, 0, 0, 7); g.fill(); g.stroke();
  } else if (face === 'gritted') {
    g.fillStyle = '#fff'; g.beginPath(); roundRect(g, mx - w * 0.04, mouthY - h * 0.03, w * 0.08, h * 0.06, 10); g.fill(); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.moveTo(mx - w * 0.04, mouthY); g.lineTo(mx + w * 0.04, mouthY); for (let i = -2; i <= 2; i++) { g.moveTo(mx + i * w * 0.014, mouthY - h * 0.03); g.lineTo(mx + i * w * 0.014, mouthY + h * 0.03); } g.stroke();
  } else if (face === 'tongue-out') {
    g.beginPath(); g.moveTo(mx - w * 0.035, mouthY); g.quadraticCurveTo(mx, mouthY + h * 0.05, mx + w * 0.035, mouthY); g.stroke();
    g.fillStyle = '#ff6f8a'; g.beginPath(); g.ellipse(mx + w * 0.008, mouthY + h * 0.06, w * 0.016, h * 0.05, 0.15, 0, 7); g.fill(); g.stroke();
    g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 3; g.beginPath(); g.moveTo(mx + w * 0.008, mouthY + h * 0.03); g.lineTo(mx + w * 0.01, mouthY + h * 0.08); g.stroke();
  } else if (face === 'wide-eyed') {
    g.beginPath(); g.ellipse(mx, mouthY + h * 0.02, w * 0.016, h * 0.04, 0, 0, 7); g.fill(); g.stroke();
  } else if (face === 'cheeky') {
    g.beginPath(); g.moveTo(mx - w * 0.04, mouthY - h * 0.01); g.quadraticCurveTo(mx, mouthY + h * 0.08, mx + w * 0.045, mouthY - h * 0.035); g.stroke();
  } else if (face === 'smug') {
    g.beginPath(); g.moveTo(mx - w * 0.03, mouthY + h * 0.01); g.quadraticCurveTo(mx + w * 0.01, mouthY + h * 0.05, mx + w * 0.04, mouthY - h * 0.03); g.stroke();
  } else if (face === 'worried') {
    g.beginPath(); g.moveTo(mx - w * 0.03, mouthY + h * 0.02); for (let i = 0; i <= 6; i++) g.lineTo(mx - w * 0.03 + i * w * 0.01, mouthY + h * 0.02 + (i % 2 ? -1 : 1) * h * 0.012); g.stroke();
  } else if (face === 'goofy') {
    g.beginPath(); g.moveTo(mx - w * 0.04, mouthY); g.quadraticCurveTo(mx, mouthY + h * 0.09, mx + w * 0.04, mouthY); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#ff7d8f'; g.beginPath(); g.ellipse(mx + w * 0.01, mouthY + h * 0.07, w * 0.016, h * 0.045, 0, 0, 7); g.fill(); g.stroke();
    g.fillStyle = '#fff'; g.fillRect(mx - w * 0.02, mouthY - 2, w * 0.016, h * 0.03);
  } else if (face === 'determined') {
    g.beginPath(); g.moveTo(mx - w * 0.03, mouthY + h * 0.01); g.lineTo(mx + w * 0.03, mouthY + h * 0.01); g.stroke();
  } else {
    g.beginPath(); g.moveTo(mx - w * 0.035, mouthY - h * 0.01); g.quadraticCurveTo(mx, mouthY + h * 0.07, mx + w * 0.035, mouthY - h * 0.01); g.stroke();
  }
  // nose
  g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 6; g.beginPath(); g.arc(cx, eyeY + h * 0.09, w * 0.012, 0.2, Math.PI - 0.2); g.stroke();
}

function bibTexture(lane, primary) {
  return canvasTexture(256, 200, (g, w, h) => {
    g.fillStyle = '#ffffff'; roundRect(g, 0, 0, w, h, 20); g.fill();
    g.fillStyle = primary; g.fillRect(0, 0, w, 44);
    g.font = `30px ${FONT}`; g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('MARKRUN', w / 2, 24);
    outlinedText(g, String(lane), w / 2, 128, 140, '#1a1420', '#1a1420', 0.0);
    g.fillStyle = '#c33'; for (const [x, y] of [[16, 60], [w - 16, 60], [16, h - 16], [w - 16, h - 16]]) { g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); }
  });
}

function popTexture(kind) {
  return canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = '#ffffff'; g.strokeStyle = '#1a1420'; g.lineWidth = 8;
    g.beginPath(); g.arc(w / 2, h / 2 - 6, 48, 0, 7); g.fill(); g.stroke();
    g.beginPath(); g.moveTo(w / 2 - 12, h - 26); g.lineTo(w / 2, h - 4); g.lineTo(w / 2 + 8, h - 28); g.fill();
    if (kind === '!') outlinedText(g, '!', w / 2, h / 2 - 4, 84, '#ff3d8b', '#1a1420', 0.12);
    else if (kind === 'heart') { g.fillStyle = '#ff2d6f'; const x = w / 2, y = h / 2 - 2, s = 16; g.beginPath(); g.moveTo(x, y + s * 1.3); g.bezierCurveTo(x - s * 2.6, y - s * 0.3, x - s, y - s * 2.2, x, y - s * 0.7); g.bezierCurveTo(x + s, y - s * 2.2, x + s * 2.6, y - s * 0.3, x, y + s * 1.3); g.fill(); g.stroke(); }
    else if (kind === 'floss') { g.fillStyle = '#ff9bd2'; for (const [x, y, r] of [[54, 44, 18], [74, 46, 17], [64, 30, 16], [62, 54, 16]]) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); } g.strokeStyle = '#c99a5a'; g.lineWidth = 6; g.beginPath(); g.moveTo(64, 62); g.lineTo(64, 96); g.stroke(); }
    else if (kind === 'sweat') { g.fillStyle = '#57c7ff'; for (const [x, y] of [[50, 50], [78, 64]]) { g.beginPath(); g.moveTo(x, y - 22); g.quadraticCurveTo(x + 14, y, x, y + 10); g.quadraticCurveTo(x - 14, y, x, y - 22); g.fill(); g.stroke(); } }
  });
}

export function createRunner(info, opts = {}) {
  const look = info.look || {};
  const B = BUILDS[look.build] || BUILDS.compact;
  const seed = hash(info.id + (info.nickname || ''));
  const R = mulberry(seed);
  const primary = info.colour?.primary || '#ff4757', secondary = info.colour?.secondary || '#ffffff';
  const skin = look.skin || '#f1c6a5';
  const hairCol = HAIR_COLS[seed % HAIR_COLS.length];
  const disposables = [];
  const mShirt = toon(primary), mShorts = toon(secondary), mSkin = toon(skin), mHair = toon(hairCol);
  const shoeCol = new THREE.Color(secondary).getHSL({}).l > 0.85 ? '#ffffff' : secondary;
  const mShoe = toon(shoeCol), mSole = toon('#ffffff'), mDark = toon('#22202c');
  const ink = (geo, mat, ol = OL) => mesh(geo, mat, { ol, olRef: 9 });

  const root = new THREE.Group(); root.name = `runner-${info.id}`;
  const body = new THREE.Group(); root.add(body); // lie-down / jump transforms
  const hips = new THREE.Group(); body.add(hips);
  const legLen = B.leg / 2;
  const hipH = B.leg + B.shoe[1] * 0.75;
  hips.position.y = hipH;
  // shorts
  const shorts = ink(G(`shorts${look.build}`, () => new RoundedBoxGeometry(B.torso[0] * 0.92, 0.32, B.torso[2] * 0.95, 3, 0.12)), mShorts);
  shorts.position.y = 0.02; hips.add(shorts);
  // torso
  const torso = new THREE.Group(); torso.position.y = 0.12; hips.add(torso);
  const tor = ink(G(`torso${look.build}`, () => new RoundedBoxGeometry(...B.torso, 4, Math.min(B.torso[2], B.torso[0]) * 0.42)), mShirt);
  tor.position.y = B.torso[1] / 2; torso.add(tor);
  // contrast side stripes
  for (const s of [-1, 1]) { const st = mesh(G(`stripe${look.build}`, () => new THREE.BoxGeometry(0.06, B.torso[1] * 0.8, B.torso[2] * 0.7)), toon(secondary), { cast: false }); st.position.set(s * B.torso[0] * 0.5, B.torso[1] * 0.5, 0); torso.add(st); }
  // bib
  const bibTex = bibTexture(info.lane ?? 0, primary); disposables.push(bibTex);
  const bib = new THREE.Mesh(G('bib', () => new THREE.PlaneGeometry(1, 0.78)), toon(0xffffff, { map: bibTex }));
  const bw = Math.min(0.42, B.torso[0] * 0.6); bib.scale.setScalar(bw);
  bib.position.set(0, B.torso[1] * 0.45, B.torso[2] / 2 + 0.012); torso.add(bib);
  // head
  const neck = new THREE.Group(); neck.position.y = B.torso[1] + 0.02; torso.add(neck);
  const head = new THREE.Group(); neck.add(head);
  const faceCanvas = document.createElement('canvas'); faceCanvas.width = 1024; faceCanvas.height = 512;
  const faceTex = new THREE.CanvasTexture(faceCanvas); faceTex.colorSpace = THREE.SRGBColorSpace; faceTex.anisotropy = 4; disposables.push(faceTex);
  let curExpr = null;
  const setExpr = (e) => { if (e === curExpr) return; curExpr = e; drawFace(faceCanvas.getContext('2d'), 1024, 512, skin, look.face || 'grin', e); faceTex.needsUpdate = true; };
  setExpr('normal');
  const hr = B.head;
  const headM = ink(G(`head${hr}`, () => new THREE.SphereGeometry(hr, 32, 20).scale(1, 0.98, 0.96)), toon(0xffffff, { map: faceTex }));
  headM.position.y = hr * 0.92; head.add(headM);
  // ears
  for (const s of [-1, 1]) { const e = ink(G(`ear${hr}`, () => new THREE.SphereGeometry(hr * 0.2, 10, 8).scale(0.6, 1, 0.8)), mSkin, 2.5); e.position.set(s * hr * 0.97, hr * 0.9, 0); head.add(e); }
  // nose
  const nose = ink(G(`nose${hr}`, () => new THREE.SphereGeometry(hr * 0.14, 10, 8)), mSkin, 2); nose.position.set(0, hr * 0.84, hr * 0.97); head.add(nose);
  buildHair(look.hair, look.hat);
  buildHat(look.hat);
  // arms
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group(); sh.position.set(s * (B.torso[0] / 2 + B.armR * 0.55), B.torso[1] - B.armR * 1.1, 0); torso.add(sh);
    const sleeve = ink(G(`sleeve${look.build}`, () => new THREE.SphereGeometry(B.armR * 1.65, 14, 10)), mShirt); sh.add(sleeve);
    const up = ink(G(`uarm${look.build}`, () => new THREE.CapsuleGeometry(B.armR, B.arm / 2 - B.armR, 4, 10).translate(0, -B.arm / 4, 0)), mSkin); sh.add(up);
    const el = new THREE.Group(); el.position.y = -B.arm / 2 + B.armR * 0.4; sh.add(el);
    const fo = ink(G(`farm${look.build}`, () => new THREE.CapsuleGeometry(B.armR * 0.95, B.arm / 2 - B.armR, 4, 10).translate(0, -B.arm / 4, 0)), mSkin); el.add(fo);
    const hand = ink(G(`hand${look.build}`, () => new THREE.SphereGeometry(B.hand, 14, 10).scale(1, 1.1, 0.9)), mSkin); hand.position.y = -B.arm / 2 - B.hand * 0.4; el.add(hand);
    arms.push({ sh, el, hand });
  }
  // legs
  const legs = [];
  for (const s of [-1, 1]) {
    const hp = new THREE.Group(); hp.position.set(s * B.torso[0] * 0.24, 0, 0); hips.add(hp);
    const th = ink(G(`thigh${look.build}`, () => new THREE.CapsuleGeometry(B.legR * 1.15, legLen - B.legR, 4, 10).translate(0, -legLen / 2, 0)), mSkin); hp.add(th);
    const shortLeg = ink(G(`sleg${look.build}`, () => new THREE.CylinderGeometry(B.legR * 1.6, B.legR * 1.5, legLen * 0.5, 12).translate(0, -legLen * 0.2, 0)), mShorts); hp.add(shortLeg);
    const kn = new THREE.Group(); kn.position.y = -legLen; hp.add(kn);
    const sn = ink(G(`shin${look.build}`, () => new THREE.CapsuleGeometry(B.legR, legLen - B.legR, 4, 10).translate(0, -legLen / 2, 0)), mSkin); kn.add(sn);
    const sock = ink(G(`sock${look.build}`, () => new THREE.CylinderGeometry(B.legR * 1.12, B.legR * 1.12, legLen * 0.25, 10).translate(0, -legLen * 0.86, 0)), toon(0xffffff), 2.5); kn.add(sock);
    const an = new THREE.Group(); an.position.y = -legLen; kn.add(an);
    const shoe = ink(G(`shoe${look.build}`, () => new RoundedBoxGeometry(...B.shoe, 3, B.shoe[1] * 0.45).translate(0, -B.shoe[1] * 0.25, B.shoe[2] * 0.22)), mShoe); an.add(shoe);
    const sole = mesh(G(`sole${look.build}`, () => new RoundedBoxGeometry(B.shoe[0] * 1.04, B.shoe[1] * 0.3, B.shoe[2] * 1.03, 2, 0.05).translate(0, -B.shoe[1] * 0.62, B.shoe[2] * 0.22)), mSole, { ol: 2.5, olRef: 9 }); an.add(sole);
    const swoosh = mesh(G(`swoosh${look.build}`, () => new THREE.BoxGeometry(B.shoe[0] * 1.06, B.shoe[1] * 0.18, B.shoe[2] * 0.5).translate(0, -B.shoe[1] * 0.2, B.shoe[2] * 0.2)), toon(primary), { cast: false }); an.add(swoosh);
    legs.push({ hp, kn, an });
  }
  buildAccessory(look.accessory);

  // distraction / emote pop
  const pops = {};
  const pop = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthTest: false }));
  pop.scale.setScalar(0.9); pop.visible = false; pop.renderOrder = 20; root.add(pop);
  const setPop = (kind) => {
    if (!kind) { pop.visible = false; return; }
    if (!pops[kind]) { pops[kind] = popTexture(kind); disposables.push(pops[kind]); }
    pop.material.map = pops[kind]; pop.material.needsUpdate = true; pop.visible = true;
  };
  const topY = hipH + 0.12 + B.torso[1] + 0.02 + hr * 2;
  pop.position.y = topY + 0.45;

  // only the chunky parts cast shadows (keeps the shadow pass cheap)
  const casters = new Set([tor, shorts, headM, ...arms.flatMap((a) => [a.hand]), ...legs.map((l) => l.an.children[0])]);
  for (const a of arms) a.sh.children.forEach((c) => c.isMesh && casters.add(c));
  for (const l of legs) l.hp.children.forEach((c) => c.isMesh && casters.add(c));
  root.traverse((o) => { if (o.isMesh && !o.userData.isOutline) o.castShadow = casters.has(o); });

  // ---- hair / hats / accessories ----
  function buildHair(hair, hat) {
    const h = hair || 'short';
    if (h === 'bald') return;
    const cap = (scale = 1.07, cut = 0.48) => { const m = ink(G(`hcap${hr}${scale}${cut}`, () => new THREE.SphereGeometry(hr * scale, 24, 14, 0, Math.PI * 2, 0, Math.PI * cut)), mHair); m.position.y = hr * 0.92; m.rotation.x = -0.32; head.add(m); return m; };
    if (h === 'curly' || h === 'afro') {
      const geo = G(`curly${hr}`, () => { const r2 = mulberry(7); const gs = []; for (let i = 0; i < 26; i++) { const th = r2() * Math.PI * 0.55, ph = r2() * Math.PI * 2; const v = new THREE.Vector3(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)).multiplyScalar(hr * 1.02); if (v.z > hr * 0.55 && v.y < hr * 0.75) continue; gs.push(new THREE.IcosahedronGeometry(hr * 0.33, 1).translate(v.x, v.y, v.z - hr * 0.08)); } return mergeGeometries(gs); });
      const m = ink(geo, mHair); m.position.y = hr * 0.98; if (h === 'afro') { m.scale.setScalar(1.28); m.position.y = hr * 1.05; } head.add(m); return;
    }
    if (hat === 'beanie' || hat === 'bucket' || hat === 'bobble') { cap(1.05, 0.5); if (h === 'mullet' || h === 'long' || h === 'ponytail') { const b = ink(G(`mul${hr}`, () => new RoundedBoxGeometry(hr * 1.5, hr * 0.9, hr * 0.4, 3, hr * 0.15)), mHair); b.position.set(0, hr * 0.35, -hr * 0.78); head.add(b); } return; }
    if (h === 'buzz') { const m = ink(G(`buzz${hr}`, () => new THREE.SphereGeometry(hr * 1.025, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.45)), mHair, 2); m.position.y = hr * 0.92; m.rotation.x = -0.32; head.add(m); return; }
    cap();
    if (h === 'quiff' || h === 'swept') {
      const q = ink(G(`quiff${hr}${h}`, () => new THREE.SphereGeometry(hr * 0.55, 16, 10).scale(h === 'quiff' ? 1.3 : 1.7, h === 'quiff' ? 0.75 : 0.45, 1.0)), mHair);
      q.position.set(h === 'swept' ? hr * 0.25 : 0, hr * 1.82, hr * 0.38); q.rotation.set(-0.5, 0, h === 'swept' ? -0.35 : 0); head.add(q);
    }
    if (h === 'mullet') { const b = ink(G(`mul${hr}`, () => new RoundedBoxGeometry(hr * 1.5, hr * 0.9, hr * 0.4, 3, hr * 0.15)), mHair); b.position.set(0, hr * 0.35, -hr * 0.78); head.add(b); }
    if (h === 'long') { const b = ink(G(`hlong${hr}`, () => new RoundedBoxGeometry(hr * 1.8, hr * 1.6, hr * 0.5, 3, hr * 0.2)), mHair); b.position.set(0, hr * 0.4, -hr * 0.62); head.add(b); }
    if (h === 'ponytail') { const p = new THREE.Group(); p.position.set(0, hr * 1.35, -hr * 0.85); head.add(p); for (let i = 0; i < 3; i++) { const s = ink(G(`pt${hr}${i}`, () => new THREE.SphereGeometry(hr * (0.32 - i * 0.05), 12, 8)), mHair); s.position.set(0, -i * hr * 0.32, -i * hr * 0.18); p.add(s); } head.userData.pony = p; }
    if (h === 'bun') { const s = ink(G(`bun${hr}`, () => new THREE.SphereGeometry(hr * 0.38, 14, 10)), mHair); s.position.set(0, hr * 2.0, -hr * 0.2); head.add(s); }
    if (h === 'mohawk' || h === 'spiky') {
      const n = h === 'mohawk' ? 5 : 9;
      for (let i = 0; i < n; i++) { const c = ink(G(`spk${hr}`, () => new THREE.ConeGeometry(hr * 0.2, hr * 0.7, 8)), mHair); const a = h === 'mohawk' ? 0 : (i / n) * Math.PI * 2; const t = h === 'mohawk' ? -0.9 + (i / (n - 1)) * 1.8 : 0.6; c.position.set(Math.sin(a) * Math.sin(t) * hr, hr * 0.92 + Math.cos(t) * hr * 1.05, (h === 'mohawk' ? Math.sin(t) : Math.cos(a) * Math.sin(t)) * hr); c.lookAt(c.position.clone().multiplyScalar(3)); c.rotateX(Math.PI / 2); head.add(c); }
    }
  }
  function buildHat(hat) {
    if (!hat) return;
    const mA = toon(secondary === '#ffffff' || secondary === '#f8f8f8' ? primary : secondary), mB = toon(primary);
    if (hat === 'backwards-cap') {
      const d = ink(G(`capd${hr}`, () => new THREE.SphereGeometry(hr * 1.1, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.42)), mA); d.position.y = hr * 0.98; d.rotation.x = -0.18; head.add(d);
      const brim = ink(G(`brim${hr}`, () => new THREE.CylinderGeometry(hr * 0.75, hr * 0.75, hr * 0.08, 20, 1, false, -Math.PI / 2, Math.PI).scale(1.2, 1, 1.15)), mB);
      brim.position.set(0, hr * 1.42, -hr * 0.62); brim.rotation.set(-0.12, Math.PI, 0); head.add(brim);
    } else if (hat === 'bobble') {
      const d = ink(G(`bean${hr}`, () => new THREE.SphereGeometry(hr * 1.1, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.5).scale(1, 1.15, 1)), mB); d.position.y = hr * 0.96; d.rotation.x = -0.12; head.add(d);
      const rim = ink(G(`brim2${hr}`, () => new THREE.TorusGeometry(hr * 1.05, hr * 0.17, 8, 24)), mA); rim.rotation.x = Math.PI / 2 - 0.12; rim.position.y = hr * 1.12; head.add(rim);
      const bob = ink(G(`bigbob${hr}`, () => new THREE.IcosahedronGeometry(hr * 0.48, 1)), mA); bob.position.y = hr * 2.45; head.add(bob); head.userData.bobble = bob;
    } else if (hat === 'cap' || hat === 'visor') {
      if (hat === 'cap') { const d = ink(G(`capd${hr}`, () => new THREE.SphereGeometry(hr * 1.1, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.42)), mA); d.position.y = hr * 0.98; d.rotation.x = -0.18; head.add(d); }
      else { const band = ink(G(`vband${hr}`, () => new THREE.TorusGeometry(hr * 1.0, hr * 0.12, 8, 24)), mA); band.rotation.x = Math.PI / 2 - 0.25; band.position.y = hr * 1.35; head.add(band); }
      const brim = ink(G(`brim${hr}`, () => new THREE.CylinderGeometry(hr * 0.75, hr * 0.75, hr * 0.08, 20, 1, false, -Math.PI / 2, Math.PI).scale(1.2, 1, 1.15)), mB);
      brim.position.set(0, hr * 1.42, hr * 0.62); brim.rotation.x = 0.12; head.add(brim);
    } else if (hat === 'beanie') {
      const d = ink(G(`bean${hr}`, () => new THREE.SphereGeometry(hr * 1.1, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.5).scale(1, 1.15, 1)), mA); d.position.y = hr * 0.96; d.rotation.x = -0.12; head.add(d);
      const rim = ink(G(`brim2${hr}`, () => new THREE.TorusGeometry(hr * 1.05, hr * 0.17, 8, 24)), mB); rim.rotation.x = Math.PI / 2 - 0.12; rim.position.y = hr * 1.12; head.add(rim);
      const bob = ink(G(`bob${hr}`, () => new THREE.IcosahedronGeometry(hr * 0.3, 1)), mB); bob.position.y = hr * 2.25; head.add(bob);
    } else if (hat === 'headband' || hat === 'sweatband') {
      const b = ink(G(`hb${hr}`, () => new THREE.TorusGeometry(hr * 1.0, hr * 0.13, 8, 28)), mA); b.rotation.x = Math.PI / 2 - 0.2; b.position.y = hr * 1.3; head.add(b);
      const t1 = ink(G(`hbt${hr}`, () => new RoundedBoxGeometry(hr * 0.2, hr * 0.5, hr * 0.08, 2, 0.02)), mA); t1.position.set(0.12, hr * 1.1, -hr * 1.05); t1.rotation.z = 0.5; head.add(t1); head.userData.tail = t1;
    } else if (hat === 'bucket') {
      const d = ink(G(`buck${hr}`, () => new THREE.CylinderGeometry(hr * 0.8, hr * 1.02, hr * 0.7, 20)), mA); d.position.y = hr * 1.75; head.add(d);
      const b = ink(G(`buckb${hr}`, () => new THREE.CylinderGeometry(hr * 1.5, hr * 1.5, hr * 0.06, 24)), mB); b.position.y = hr * 1.42; b.rotation.x = 0.1; head.add(b);
    } else if (hat === 'crown' || hat === 'tiara') {
      const c = ink(G(`crown${hr}`, () => new THREE.CylinderGeometry(hr * 0.7, hr * 0.62, hr * 0.5, 8, 1, true)), toon('#ffd23f', { side: THREE.DoubleSide })); c.position.y = hr * 2.0; head.add(c);
    } else if (hat === 'wizard' || hat === 'party') {
      const c = ink(G(`cone${hr}`, () => new THREE.ConeGeometry(hr * 0.8, hr * 1.8, 16)), mA); c.position.y = hr * 2.3; c.rotation.z = 0.15; head.add(c);
      const bob = ink(G(`bob${hr}`, () => new THREE.IcosahedronGeometry(hr * 0.3, 1)), mB); bob.position.set(-hr * 0.12, hr * 3.15, 0); head.add(bob);
    } else if (hat === 'helmet' || hat === 'bike_helmet') {
      const d = ink(G(`helm${hr}`, () => new THREE.SphereGeometry(hr * 1.14, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.46).scale(1, 0.9, 1.15)), mA); d.position.y = hr * 1.0; head.add(d);
    } else if (hat === 'santa') {
      const c = ink(G(`santa${hr}`, () => new THREE.ConeGeometry(hr * 0.95, hr * 1.6, 16)), toon('#e8313f')); c.position.y = hr * 2.2; c.rotation.z = 0.5; head.add(c);
      const r = ink(G(`santar${hr}`, () => new THREE.TorusGeometry(hr * 0.95, hr * 0.2, 8, 24)), toon('#ffffff')); r.rotation.x = Math.PI / 2; r.position.y = hr * 1.45; head.add(r);
    } else {
      // unknown hat word: a jaunty cone
      const c = ink(G(`cone${hr}`, () => new THREE.ConeGeometry(hr * 0.8, hr * 1.8, 16)), mA); c.position.y = hr * 2.3; head.add(c);
    }
  }
  function buildAccessory(acc) {
    if (!acc) return;
    if (acc === 'sunglasses' || acc === 'glasses') {
      const dark = acc === 'sunglasses';
      for (const s of [-1, 1]) { const l = ink(G(`lens${hr}${dark}`, () => new RoundedBoxGeometry(hr * 0.5, hr * 0.32, hr * 0.08, 2, hr * 0.06)), dark ? toon('#141420') : toon('#cfefff'), 2); l.position.set(s * hr * 0.3, hr * 1.02, hr * 0.98); l.rotation.y = s * 0.28; head.add(l); }
      const br = mesh(G(`bridge${hr}`, () => new THREE.BoxGeometry(hr * 0.3, hr * 0.06, hr * 0.06)), toon('#141420'), { cast: false }); br.position.set(0, hr * 1.06, hr * 1.04); head.add(br);
    } else if (acc === 'medal') {
      const rb = ink(G('ribbon', () => new THREE.TorusGeometry(0.2, 0.03, 6, 20, Math.PI)), toon('#2e9bff'), 2); rb.rotation.z = Math.PI; rb.position.set(0, B.torso[1] + 0.02, B.torso[2] / 2 - 0.05); rb.rotation.x = -0.3; torso.add(rb);
      const md = ink(G('medal', () => new THREE.CylinderGeometry(0.11, 0.11, 0.04, 16).rotateX(Math.PI / 2)), toon('#ffd23f', { emissive: '#664400', emissiveIntensity: 0.3 }), 2.5); md.position.set(0, B.torso[1] - 0.22, B.torso[2] / 2 + 0.05); torso.add(md);
      bib.position.y -= 0.1; bib.position.x = 0.12; bib.scale.multiplyScalar(0.8);
    } else if (acc === 'headphones') {
      const band = ink(G(`hp${hr}`, () => new THREE.TorusGeometry(hr * 1.08, hr * 0.07, 6, 24, Math.PI)), toon('#22202c'), 2); band.position.y = hr * 0.95; head.add(band);
      for (const s of [-1, 1]) { const c = ink(G(`hpc${hr}`, () => new THREE.CylinderGeometry(hr * 0.3, hr * 0.3, hr * 0.2, 14).rotateZ(Math.PI / 2)), toon(primary), 2.5); c.position.set(s * hr * 1.02, hr * 0.92, 0); head.add(c); }
    } else if (acc === 'sweatband' || acc === 'wristbands' || acc === 'watch') { /* wristbands */
      for (const a of arms) { const w = ink(G(`wb${look.build}`, () => new THREE.CylinderGeometry(B.armR * 1.3, B.armR * 1.3, 0.12, 10).translate(0, -B.arm / 2 + 0.1, 0)), toon(acc === 'watch' ? '#22202c' : secondary), 2); a.el.add(w); if (acc === 'watch') break; }
    } else if (acc === 'scarf') {
      const sc = ink(G('scarf', () => new THREE.TorusGeometry(0.22, 0.08, 8, 18)), toon(secondary)); sc.rotation.x = Math.PI / 2; sc.position.y = 0.02; neck.add(sc);
      const tail = ink(G('scarft', () => new RoundedBoxGeometry(0.14, 0.5, 0.06, 2, 0.03)), toon(secondary)); tail.position.set(0.1, -0.15, -0.25); tail.rotation.x = 0.5; neck.add(tail); head.userData.tail2 = tail;
    } else if (acc === 'cape') {
      const cp = ink(G(`cape${look.build}`, () => new THREE.PlaneGeometry(B.torso[0] * 1.2, B.torso[1] * 1.5, 1, 4).translate(0, -B.torso[1] * 0.75, 0)), toon(secondary, { side: THREE.DoubleSide }), 2);
      const pivot = new THREE.Group(); pivot.position.set(0, B.torso[1], -B.torso[2] / 2 - 0.03); pivot.add(cp); torso.add(pivot); head.userData.cape = pivot;
    } else if (acc === 'backpack') {
      const bp = ink(G(`bp${look.build}`, () => new RoundedBoxGeometry(B.torso[0] * 0.7, B.torso[1] * 0.7, 0.25, 3, 0.08)), toon(secondary)); bp.position.set(0, B.torso[1] * 0.5, -B.torso[2] / 2 - 0.12); torso.add(bp);
    } else if (acc === 'moustache' || acc === 'mustache') {
      const m = ink(G(`mou${hr}`, () => new THREE.CapsuleGeometry(hr * 0.09, hr * 0.5, 4, 8).rotateZ(Math.PI / 2)), toon('#3a2616'), 2); m.position.set(0, hr * 0.7, hr * 0.98); head.add(m);
    } else if (acc === 'beard') {
      const b = ink(G(`beard${hr}`, () => new THREE.SphereGeometry(hr * 0.78, 18, 12, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55).scale(1.05, 1, 0.75)), mHair, 2.5); b.position.set(0, hr * 0.78, hr * 0.32); head.add(b);
      const m = ink(G(`mou${hr}`, () => new THREE.CapsuleGeometry(hr * 0.09, hr * 0.5, 4, 8).rotateZ(Math.PI / 2)), mHair, 2); m.position.set(0, hr * 0.7, hr * 0.98); head.add(m);
    } else if (acc === 'bumbag') {
      const bb = ink(G(`bum${look.build}`, () => new RoundedBoxGeometry(B.torso[0] * 0.5, 0.2, 0.18, 2, 0.07)), toon(secondary === '#ffffff' || secondary === '#f8f8f8' ? '#22202c' : secondary)); bb.position.set(B.torso[0] * 0.12, 0.08, B.torso[2] / 2 + 0.08); hips.add(bb);
      const strap = mesh(G(`strap${look.build}`, () => new THREE.TorusGeometry(B.torso[0] * 0.48, 0.025, 6, 24).scale(1, B.torso[2] / B.torso[0] * 1.05, 1).rotateX(Math.PI / 2)), toon('#22202c'), { cast: false }); strap.position.y = 0.1; hips.add(strap);
    } else if (acc === 'bib') {
      // vintage race number on the back too
      const bk = new THREE.Mesh(G('bib', () => new THREE.PlaneGeometry(1, 0.78)), bib.material); bk.scale.copy(bib.scale); bk.position.set(0, B.torso[1] * 0.5, -B.torso[2] / 2 - 0.012); bk.rotation.y = Math.PI; torso.add(bk);
      bib.scale.multiplyScalar(1.3);
    } else if (acc === 'bowtie') {
      for (const s of [-1, 1]) { const b = ink(G('bow', () => new THREE.ConeGeometry(0.08, 0.16, 4).rotateZ(Math.PI / 2)), toon(secondary), 2); b.position.set(s * 0.08, B.torso[1] - 0.06, B.torso[2] / 2 + 0.03); b.rotation.z = s > 0 ? Math.PI : 0; torso.add(b); }
    } else if (acc === 'tutu') {
      const t = ink(G(`tutu${look.build}`, () => new THREE.CylinderGeometry(B.torso[0] * 0.55, B.torso[0] * 0.9, 0.18, 16, 1, true)), toon('#ff9bd2', { side: THREE.DoubleSide }), 2); t.position.y = -0.05; hips.add(t);
    }
  }

  // ---- animation state ----
  const st = { phase: R() * 6.28, t: R() * 10, lean: 0, j: {} , look: 0, lookPitch: 0 };
  const J = st.j; // smoothed joint targets
  const names = ['hipLx', 'hipRx', 'kneeL', 'kneeR', 'ankL', 'ankR', 'shLx', 'shRx', 'shLz', 'shRz', 'elL', 'elR', 'twist', 'lean', 'bob', 'roll', 'headY', 'headX', 'bodyX', 'bodyY', 'bodyZ', 'hipSpread'];
  for (const n of names) J[n] = 0;
  const target = {};
  let state = 'idle', variant = null, stateT = 0;

  function set(s, v = null) { if (s !== state || v !== variant) { state = s; variant = v; stateT = 0; } }

  // speed: race m/s; rate: race seconds per broadcast second (for cadence compression)
  function update(dt, p = {}) {
    st.t += dt; stateT += dt;
    const t = st.t;
    for (const n of names) target[n] = 0;
    let expr = 'normal';
    let k = 10; // smoothing rate
    if (state === 'run' || state === 'jog' || state === 'trudge' || state === 'distracted') {
      const v = Math.max(0.5, p.speed ?? 3.5);
      const rate = Math.max(0.2, p.rate ?? 1);
      const walk = state === 'trudge';
      const cad = walk ? 1.7 : (2.55 + 0.14 * (v - 3.5)) * Math.pow(rate, 0.3) * (state === 'jog' ? 0.8 : 1);
      st.phase += dt * Math.PI * cad;
      const ph = st.phase, s = Math.sin(ph), c = Math.cos(ph);
      const A = walk ? 0.4 : Math.max(0.45, Math.min(1.0, 0.62 + 0.13 * (v - 3.5)));
      target.hipLx = -A * s; target.hipRx = A * s;
      target.kneeL = 0.2 + (walk ? 0.5 : 1.35) * Math.max(0, c) * (0.7 + A * 0.3); target.kneeR = 0.2 + (walk ? 0.5 : 1.35) * Math.max(0, -c) * (0.7 + A * 0.3);
      target.ankL = -0.2 * s; target.ankR = 0.2 * s;
      const armA = walk ? 0.3 : 0.75 * A + 0.15;
      target.shLx = armA * s; target.shRx = -armA * s; target.shLz = -0.18; target.shRz = 0.18;
      target.elL = walk ? -0.5 : -1.5; target.elR = walk ? -0.5 : -1.5;
      target.twist = 0.16 * s; target.roll = 0.05 * s;
      target.bob = (walk ? 0.03 : 0.11) * (Math.abs(c) - 0.4);
      target.lean = (walk ? 0.05 : 0.16) + Math.max(-0.25, Math.min(0.45, (p.slope ?? 0) * 1.6));
      target.headX = -target.lean * 0.6;
      target.headY = -0.08 * s;
      k = 18;
      expr = p.effort > 0.6 ? 'effort' : p.effort > 0.3 ? 'pant' : 'normal';
      if (walk) { target.headX = 0.35; target.lean = 0.25; expr = 'sad'; }
      if (state === 'distracted') {
        target.headY = (p.lookYaw ?? 0.9); target.headX = -0.15; target.twist += (p.lookYaw ?? 0.9) * 0.3; expr = 'love';
      }
    } else if (state === 'ready') {
      target.hipLx = -0.5; target.hipRx = 0.35; target.kneeL = 0.6; target.kneeR = 0.5; target.lean = 0.35; target.bob = -0.12;
      target.shLx = 0.5; target.shRx = -0.6; target.elL = -1.3; target.elR = -1.3; target.headX = -0.25;
      target.bob += Math.sin(t * 3) * 0.01; expr = 'effort';
    } else if (state === 'wave') {
      target.shRz = 2.7; target.elR = 0.2 * Math.sin(t * 9) - 0.25; target.shRx = Math.sin(t * 9) * 0.25;
      target.shLz = -0.3; target.elL = -0.4;
      target.bob = Math.abs(Math.sin(t * 4)) * 0.05; target.headY = 0.1 * Math.sin(t * 2); expr = 'happy';
    } else if (state === 'pose') {
      const v = variant || 'flex';
      if (v === 'flex') { target.shLz = -1.5; target.shRz = 1.5; target.elL = -1.9 - Math.sin(t * 6) * 0.15; target.elR = -1.9 - Math.sin(t * 6 + 1) * 0.15; target.shLx = -0.0; target.bob = -0.06 + Math.abs(Math.sin(t * 3)) * 0.03; target.hipSpread = 0.25; target.kneeL = 0.3; target.kneeR = 0.3; expr = 'effort'; }
      else if (v === 'point') { target.shRx = -1.5; target.elR = 0; target.shLz = -0.3; target.elL = -1.6; target.shLx = -0.3; target.headX = -0.1; target.lean = -0.05; expr = 'happy'; target.bob = Math.sin(t * 5) * 0.02; }
      else if (v === 'stretch') { target.hipRx = -0.2; target.kneeR = 2.3; target.shRx = 0.8; target.elR = -0.6; target.shLz = -2.6; target.lean = 0.08 + Math.sin(t * 2) * 0.04; expr = 'smug'; }
      else if (v === 'spin') { const sp = Math.min(1, stateT / 1.1); target.bodyY = (1 - (1 - sp) ** 2) * Math.PI * 4; target.shLz = sp < 1 ? -1.3 : -2.6; target.shRz = sp < 1 ? 1.3 : 2.6; target.bob = sp < 1 ? Math.abs(Math.sin(t * 7)) * 0.2 : Math.abs(Math.sin(t * 5)) * 0.12; expr = 'happy'; }
      else if (v === 'bow') { target.lean = 0.75 + Math.sin(t * 2) * 0.05; target.shLx = 0.4; target.shRx = -1.2; target.elR = -1.6; target.shRz = 0.4; target.headX = -0.2; expr = 'happy'; }
      else { target.shLz = -2.5; target.shRz = 2.5; target.bob = Math.abs(Math.sin(t * 6)) * 0.25; expr = 'happy'; }
      if (expr === 'smug') expr = 'normal';
    } else if (state === 'celebrate') {
      const v = variant || 'jump';
      if (v === 'jump') { const j = Math.abs(Math.sin(t * 5.5)); target.bob = j * 0.55; target.shLz = -2.6 - j * 0.3; target.shRz = 2.6 + j * 0.3; target.elL = -0.2; target.elR = -0.2; target.kneeL = target.kneeR = (1 - j) * 0.8; target.hipLx = target.hipRx = -(1 - j) * 0.4; expr = 'happy'; k = 22; }
      else if (v === 'fist') { const j = Math.sin(t * 7); target.shRx = -2.6; target.elR = -0.4 + j * 0.4; target.shLx = 0.4; target.elL = -1.8; target.bob = Math.abs(j) * 0.08; target.lean = -0.1; expr = 'happy'; }
      else if (v === 'kneel') { target.lean = 0.85; target.kneeL = target.kneeR = 0.7; target.hipLx = target.hipRx = -0.6; target.bob = -0.25 + Math.sin(t * 7) * 0.025; target.shLx = target.shRx = -0.55; target.elL = target.elR = -0.1; target.shLz = -0.15; target.shRz = 0.15; target.headX = -0.6; expr = 'pant'; }
      else if (v === 'collapse') {
        target.bodyX = -Math.PI / 2 + 0.05;
        target.shLz = -2.2; target.shRz = 2.2; target.hipSpread = 0.4; target.kneeL = 0.3 + Math.max(0, Math.sin(t * 9)) * 0.4 * (Math.sin(t * 0.7) > 0.6 ? 1 : 0); target.kneeR = 0.2;
        expr = 'dead'; k = 4;
      } else if (v === 'shrug') { target.shLz = -0.9; target.shRz = 0.9; target.elL = -1.4; target.elR = -1.4; target.shLx = -0.5; target.shRx = -0.5; target.headX = 0.1; target.headY = Math.sin(t * 1.5) * 0.3; expr = 'sad'; }
    } else { // idle
      target.bob = Math.sin(t * 2) * 0.015; target.shLz = -0.18; target.shRz = 0.18; target.elL = -0.25; target.elR = -0.25;
      target.headY = Math.sin(t * 0.7) * 0.25; target.lean = 0.02; target.kneeL = target.kneeR = 0.05;
    }
    if (p.lookYaw != null && state !== 'distracted') target.headY += p.lookYaw;
    // smoothing
    const a = 1 - Math.exp(-k * dt);
    for (const n of names) {
      if (n === 'bodyY' && state === 'pose' && variant === 'spin') { J[n] = target[n]; continue; }
      J[n] += (target[n] - J[n]) * a;
    }
    if (!(state === 'pose' && variant === 'spin')) { J.bodyY = J.bodyY % (Math.PI * 2); if (J.bodyY > Math.PI) J.bodyY -= Math.PI * 2; }
    // apply
    legs[0].hp.rotation.set(J.hipLx, 0, -J.hipSpread); legs[1].hp.rotation.set(J.hipRx, 0, J.hipSpread);
    legs[0].kn.rotation.x = J.kneeL; legs[1].kn.rotation.x = J.kneeR;
    legs[0].an.rotation.x = J.ankL - J.kneeL * 0.35; legs[1].an.rotation.x = J.ankR - J.kneeR * 0.35;
    // arms: x = swing (positive = backwards), z = raise sideways
    arms[0].sh.rotation.set(J.shLx, 0, J.shLz - 0.0); arms[1].sh.rotation.set(J.shRx, 0, J.shRz);
    arms[0].el.rotation.x = J.elL; arms[1].el.rotation.x = J.elR;
    torso.rotation.set(J.lean, J.twist, 0);
    hips.rotation.set(0, -J.twist * 0.5, J.roll);
    hips.position.y = hipH + J.bob;
    head.rotation.set(J.headX, J.headY, 0);
    body.rotation.set(J.bodyX, J.bodyY, J.bodyZ);
    body.position.y += ((state === 'celebrate' && variant === 'collapse' ? B.torso[2] * 0.5 + 0.08 : 0) - body.position.y) * a;
    if (head.userData.bobble) head.userData.bobble.position.y = hr * 2.45 + Math.abs(Math.sin(st.phase)) * 0.04;
    if (head.userData.pony) head.userData.pony.rotation.x = 0.4 + Math.sin(st.phase * 2) * 0.35;
    if (head.userData.tail) head.userData.tail.rotation.x = 0.6 + Math.sin(st.phase * 2) * 0.3;
    if (head.userData.cape) head.userData.cape.rotation.x = -0.3 - Math.min(1.1, (p.speed ?? 0) * 0.15) + Math.sin(t * 8) * 0.08;
    if (p.expr) expr = p.expr;
    setExpr(expr);
    if (pop.visible) { pop.position.y = topY + 0.45 + Math.sin(t * 6) * 0.08; const sc = 0.9 + Math.sin(t * 9) * 0.05; pop.scale.set(sc, sc, sc); }
  }

  function dispose() { for (const d of disposables) d.dispose?.(); pop.material.dispose(); }
  return { id: info.id, info, root, update, set, setPop, setExpr, dispose, height: topY, hipH, get state() { return state; }, get variant() { return variant; } };
}
