// Cutscene kit: toon-shaded primitive props, stand-in actors (re-using the runner rig), staging + camera helpers.
// Everything a cutscene creates goes into its Bag, which disposes geometry / materials / textures at the end.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { toon, outline, gradientMap } from '../toon.js';
import { textTexture, outlinedText, roundRect, FONT } from '../world.js';
import { createRunner } from '../runner.js';

export const clamp01 = (x) => Math.max(0, Math.min(1, x));
export const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const easeOut = (x) => 1 - Math.pow(1 - clamp01(x), 3);
export const easeIn = (x) => Math.pow(clamp01(x), 2);
export const backOut = (x) => { x = clamp01(x); const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
export const lerp = (a, b, t) => a + (b - a) * t;
export const pulse = (t, a, b) => (t >= a && t < b ? 1 : 0);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

// ---------------- disposal bag ----------------
export class Bag {
  constructor(scene) { this.scene = scene; this.items = []; this.actors = []; this.roots = []; }
  add(x) { if (x) this.items.push(x); return x; }
  group(parent = this.scene) { const g = new THREE.Group(); parent.add(g); this.roots.push(g); return g; }
  // a fresh (uncached) toon material: safe to fade / recolour
  mat(color, opts = {}) { return this.add(new THREE.MeshToonMaterial({ color: new THREE.Color(color), gradientMap: gradientMap(), ...opts })); }
  basic(color, opts = {}) { return this.add(new THREE.MeshBasicMaterial({ color: new THREE.Color(color), ...opts })); }
  // mesh with a cached toon material (or a given material) + inverted-hull outline; the geometry is owned by the bag
  M(geo, colorOrMat, ol = 3, { cast = true } = {}) {
    this.add(geo);
    const m = new THREE.Mesh(geo, colorOrMat?.isMaterial ? colorOrMat : toon(colorOrMat));
    m.castShadow = cast; m.receiveShadow = true;
    if (ol) outline(m, ol, undefined, 12);
    return m;
  }
  tex(w, h, draw) { return textTexture(w, h, draw, this.items); }
  dispose() {
    for (const a of this.actors) { a.root.parent?.remove(a.root); a.dispose(); }
    for (const r of this.roots) r.parent?.remove(r);
    for (const x of this.items) x.dispose?.();
    this.items = []; this.actors = []; this.roots = [];
  }
}

// ---------------- rig access (runner.js builds root > body > hips > [shorts, torso, hipL, hipR]) ----------------
export function rigOf(r) {
  const grp = (o) => o.children.filter((c) => c.type === 'Group');
  const body = grp(r.root)[0];
  const hips = grp(body)[0];
  const [torso, hpL, hpR] = grp(hips);
  // torso groups in build order: neck (holds the head), left shoulder, right shoulder, then any accessory pivots
  const tg = grp(torso);
  const neck = tg[0];
  const head = grp(neck)[0];
  const arms = [tg[1], tg[2]].map((sh) => { const el = grp(sh)[0]; const hand = el.children.filter((c) => c.isMesh)[1] || el.children.find((c) => c.isMesh); return { sh, el, hand }; });
  const legs = [hpL, hpR].map((hp) => { const kn = grp(hp)[0]; const an = kn ? grp(kn)[0] : null; return { hp, kn, an }; });
  const bibs = torso.children.filter((c) => c.isMesh && c.geometry?.type === 'PlaneGeometry');
  // hand position in the actor root's space (for holding props)
  return { body, hips, torso, neck, head, arms, legs, bibs, L: arms[0], R: arms[1] };
}

// ---------------- canvas helpers ----------------
export function bubbleTexture(bag, text, { bg = '#ffffff', fg = '#1a1420', w = 512, h = 256, size = 120, tail = true, burst = false } = {}) {
  return bag.tex(w, h, (g) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = bg; g.strokeStyle = '#1a1420'; g.lineWidth = 14;
    if (burst) {
      g.beginPath(); const n = 14;
      for (let i = 0; i <= n * 2; i++) { const a = (i / (n * 2)) * Math.PI * 2; const r = i % 2 ? 0.36 : 0.48; g.lineTo(w / 2 + Math.cos(a) * w * r, h / 2 + Math.sin(a) * h * r * 0.95); }
      g.closePath(); g.fill(); g.stroke();
    } else {
      roundRect(g, 14, 14, w - 28, h - (tail ? 60 : 28), 60); g.fill(); g.stroke();
      if (tail) { g.beginPath(); g.moveTo(w * 0.42, h - 50); g.lineTo(w * 0.38, h - 8); g.lineTo(w * 0.56, h - 50); g.closePath(); g.fill(); g.stroke(); g.fillRect(w * 0.42, h - 62, w * 0.14, 14); }
    }
    outlinedText(g, text, w / 2, (tail && !burst ? h - 50 : h) / 2 + 6, Math.min(size, (w * 1.55) / Math.max(4, text.length)), fg, fg === '#ffffff' ? '#1a1420' : '#ffffff', 0.0001);
  });
}
export function sprite(bag, tex, scale = 1, aspect = 2) {
  const m = bag.add(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  const s = new THREE.Sprite(m); s.scale.set(scale * aspect, scale, 1); s.renderOrder = 30; s.userData.base = scale; s.userData.aspect = aspect; return s;
}
export function popScale(s, t, t0, dur = 0.25) { const k = backOut((t - t0) / dur); const b = s.userData.base; s.scale.set(b * s.userData.aspect * k, b * k, 1); s.visible = t >= t0; }

export function tartanTexture(bag) {
  return bag.add(new THREE.CanvasTexture((() => {
    const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
    g.fillStyle = '#b3202a'; g.fillRect(0, 0, 128, 128);
    g.globalAlpha = 0.55; g.fillStyle = '#123a7a';
    for (const x of [16, 80]) { g.fillRect(x, 0, 28, 128); g.fillRect(0, x, 128, 28); }
    g.globalAlpha = 0.9; g.fillStyle = '#1b5e2a'; for (const x of [28, 92]) { g.fillRect(x, 0, 6, 128); g.fillRect(0, x, 128, 6); }
    g.fillStyle = '#ffd23f'; for (const x of [58]) { g.fillRect(x, 0, 3, 128); g.fillRect(0, x, 128, 3); }
    return c;
  })()));
}
export function signTexture(bag, lines, { bg = '#ffd23f', fg = '#1a1420', w = 512, h = 256, border = '#1a1420', round = 40, sizes = null } = {}) {
  return bag.tex(w, h, (g) => {
    g.fillStyle = border; roundRect(g, 0, 0, w, h, round); g.fill();
    g.fillStyle = bg; roundRect(g, 12, 12, w - 24, h - 24, Math.max(4, round - 10)); g.fill();
    const n = lines.length;
    lines.forEach((t, i) => { const sz = sizes?.[i] ?? Math.min(h * 0.62 / n, (w * 1.6) / Math.max(4, t.length)); outlinedText(g, t, w / 2, (h * (i + 0.5)) / n + 4, sz, fg, fg === '#ffffff' ? '#1a1420' : (bg === '#ffffff' ? '#ffffff' : bg), 0.0001); });
  });
}
// a flat board with a canvas face on both sides
export function board(bag, tex, w, h, edge = '#1a1420', thick = 0.12) {
  const faceM = bag.add(new THREE.MeshToonMaterial({ map: tex, gradientMap: gradientMap() }));
  const m = new THREE.Mesh(bag.add(new RoundedBoxGeometry(w, h, thick, 2, Math.min(0.05, thick * 0.4))), [toon(edge), toon(edge), toon(edge), toon(edge), faceM, faceM]);
  outline(m, 2.5, undefined, 12); m.castShadow = true; return m;
}

// ---------------- props ----------------
export function makeGoose(bag, { costume = false, plush = false, scale = 1 } = {}) {
  const root = new THREE.Group(); root.scale.setScalar(scale);
  const W = plush ? '#fffaf2' : '#ffffff', O = '#ff9a1f';
  const bodyG = new THREE.Group(); root.add(bodyG);
  const body = bag.M(new THREE.SphereGeometry(0.42, 20, 14).scale(0.95, 0.8, 1.25), W, 3); body.position.y = 0.62; bodyG.add(body);
  const tail = bag.M(new THREE.ConeGeometry(0.2, 0.36, 10).rotateX(-Math.PI / 2 - 0.5), W, 2.5); tail.position.set(0, 0.78, -0.55); bodyG.add(tail);
  const neck = new THREE.Group(); neck.position.set(0, 0.8, 0.36); bodyG.add(neck);
  const neckM = bag.M(new THREE.CapsuleGeometry(0.11, 0.48, 4, 10), W, 2.5); neckM.position.y = 0.26; neckM.rotation.x = 0.15; neck.add(neckM);
  const head = new THREE.Group(); head.position.set(0, 0.56, 0.05); neck.add(head);
  const headM = bag.M(new THREE.SphereGeometry(0.17, 16, 12).scale(1, 0.95, 1.1), W, 2.5); head.add(headM);
  const beak = new THREE.Group(); beak.position.set(0, -0.02, 0.15); head.add(beak);
  const beakTop = bag.M(new THREE.ConeGeometry(0.075, 0.24, 10).rotateX(Math.PI / 2).translate(0, 0.012, 0.1), O, 2); beak.add(beakTop);
  const beakBot = bag.M(new THREE.ConeGeometry(0.06, 0.18, 10).rotateX(Math.PI / 2).translate(0, -0.025, 0.07), O, 2); beak.add(beakBot);
  for (const s of [-1, 1]) {
    const eye = bag.M(new THREE.SphereGeometry(0.035, 8, 6), '#1a1420', 0); eye.position.set(s * 0.11, 0.05, 0.1); head.add(eye);
  }
  // Gerald's single, judgemental eyebrow
  const brow = bag.M(new THREE.BoxGeometry(0.3, 0.045, 0.05), '#1a1420', 0); brow.position.set(0, 0.12, 0.13); brow.rotation.x = -0.3; head.add(brow);
  const wings = [];
  for (const s of [-1, 1]) {
    const piv = new THREE.Group(); piv.position.set(s * 0.36, 0.72, 0.1); bodyG.add(piv);
    const w = bag.M(new THREE.SphereGeometry(0.3, 14, 10).scale(0.28, 0.62, 1.1).translate(0, -0.08, -0.12), plush ? '#f1ece2' : '#f2f2f2', 2.5); piv.add(w);
    wings.push(piv);
  }
  const legs = [];
  if (!plush) for (const s of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(s * 0.14, 0.32, 0.02); root.add(leg);
    const l = bag.M(new THREE.CylinderGeometry(0.035, 0.035, 0.34, 6).translate(0, -0.17, 0), O, 1.5); leg.add(l);
    const f = bag.M(new THREE.ConeGeometry(0.12, 0.05, 3).rotateY(Math.PI).translate(0, -0.33, 0.06), O, 1.5); leg.add(f);
    legs.push(leg);
  }
  if (plush) { body.position.y = 0.42; neck.position.y = 0.6; for (const w of wings) w.position.y = 0.5; tail.position.y = 0.55; }
  if (costume) {
    // a yellow duck costume hood with a little orange bill on top: fooling nobody
    const hood = bag.M(new THREE.SphereGeometry(0.2, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), '#ffd23f', 2.5); hood.position.y = 0.01; hood.scale.set(1.05, 1.05, 1.15); head.add(hood);
    const bill = bag.M(new THREE.SphereGeometry(0.09, 10, 8).scale(1.4, 0.4, 1.3), '#ff8a1f', 2); bill.position.set(0, 0.12, 0.2); head.add(bill);
    const sm = bag.M(new THREE.SphereGeometry(0.42, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.5).scale(0.97, 0.82, 1.27), '#ffd23f', 2); sm.position.y = 0.64; bodyG.add(sm);
  }
  const api = {
    root, head, neck, beakBot, wings, legs, bodyG,
    // gestures: honk (beak open), wing out (0..1, -1 left / 1 right), waddle
    pose({ honk = 0, wingL = 0, wingR = 0, waddle = 0, t = 0, look = 0, nod = 0 } = {}) {
      beakBot.rotation.x = honk * 0.6;
      wings[0].rotation.z = -wingL * 1.3; wings[0].rotation.x = -wingL * 0.3;
      wings[1].rotation.z = wingR * 1.3; wings[1].rotation.x = -wingR * 0.3;
      neck.rotation.y = look; neck.rotation.x = nod;
      bodyG.rotation.z = Math.sin(t * 10) * 0.08 * waddle; bodyG.position.y = Math.abs(Math.sin(t * 10)) * 0.04 * waddle;
      legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 10 + i * Math.PI) * 0.5 * waddle; });
    },
  };
  return api;
}

export function makeDuck(bag, scale = 1) {
  const g = new THREE.Group(); g.scale.setScalar(scale);
  const b = bag.M(new THREE.SphereGeometry(0.2, 12, 10).scale(1, 0.8, 1.2), '#ffd23f', 2); b.position.y = 0.12; g.add(b);
  const h = bag.M(new THREE.SphereGeometry(0.13, 12, 10), '#ffd23f', 2); h.position.set(0, 0.32, 0.12); g.add(h);
  const bk = bag.M(new THREE.SphereGeometry(0.06, 8, 6).scale(1.4, 0.5, 1.4), '#ff8a1f', 1.5); bk.position.set(0, 0.3, 0.25); g.add(bk);
  for (const s of [-1, 1]) { const e = bag.M(new THREE.SphereGeometry(0.022, 6, 5), '#1a1420', 0); e.position.set(s * 0.06, 0.36, 0.22); g.add(e); }
  return g;
}

export function makeCone(bag, h = 0.7) {
  const g = new THREE.Group();
  const tex = bag.add(new THREE.CanvasTexture((() => { const c = document.createElement('canvas'); c.width = 16; c.height = 64; const x = c.getContext('2d'); x.fillStyle = '#ff6a1f'; x.fillRect(0, 0, 16, 64); x.fillStyle = '#ffffff'; x.fillRect(0, 18, 16, 10); x.fillRect(0, 38, 16, 8); return c; })()));
  tex.colorSpace = THREE.SRGBColorSpace;
  const c = bag.M(new THREE.ConeGeometry(h * 0.32, h, 14), bag.mat('#ffffff', { map: tex }), 2.5); c.position.y = h / 2 + 0.05; g.add(c);
  const base = bag.M(new THREE.BoxGeometry(h * 0.75, 0.08, h * 0.75), '#ff6a1f', 2); base.position.y = 0.04; g.add(base);
  return g;
}

export function makeFlask(bag, scale = 1) {
  const g = new THREE.Group(); g.scale.setScalar(scale);
  const tt = tartanTexture(bag); tt.wrapS = tt.wrapT = THREE.RepeatWrapping; tt.repeat.set(2, 1); tt.colorSpace = THREE.SRGBColorSpace;
  const body = bag.M(new THREE.CylinderGeometry(0.11, 0.11, 0.42, 16), bag.mat('#ffffff', { map: tt }), 2.5); body.position.y = 0.21; g.add(body);
  const cup = bag.M(new THREE.CylinderGeometry(0.125, 0.11, 0.12, 16), '#d9dde6', 2); cup.position.y = 0.48; g.add(cup);
  return g;
}

export function makeFlag(bag, text = 'SUMMIT!', colour = '#ff3d8b') {
  const g = new THREE.Group();
  const pole = bag.M(new THREE.CylinderGeometry(0.035, 0.035, 2.4, 8).translate(0, 1.2, 0), '#f4f4f4', 2); g.add(pole);
  const knob = bag.M(new THREE.SphereGeometry(0.07, 8, 6), '#ffd23f', 1.5); knob.position.y = 2.42; g.add(knob);
  const tex = signTexture(bag, [text], { bg: colour, fg: '#ffffff', w: 512, h: 300, round: 8 });
  const cloth = new THREE.Group(); cloth.position.y = 2.05; g.add(cloth);
  const cm = bag.add(new THREE.MeshToonMaterial({ map: tex, gradientMap: gradientMap(), side: THREE.DoubleSide }));
  const geo = bag.add(new THREE.PlaneGeometry(1.2, 0.7, 8, 1).translate(0.6, 0, 0));
  const c = new THREE.Mesh(geo, cm); cloth.add(c); outline(c, 2, undefined, 12);
  const base = geo.attributes.position.array.slice();
  return { root: g, cloth, wave(t) { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const x = base[i * 3]; p.setZ(i, Math.sin(x * 4 - t * 8) * 0.08 * x); } p.needsUpdate = true; } };
}

export function makeTree(bag, s = 1) {
  const g = new THREE.Group(); g.scale.setScalar(s);
  const tr = bag.M(new THREE.CylinderGeometry(0.22, 0.32, 2.4, 8).translate(0, 1.2, 0), '#7a4a2a', 2.5); g.add(tr);
  for (const [x, y, z, r] of [[0, 3.3, 0, 1.4], [0.7, 2.8, 0.2, 0.9], [-0.7, 2.9, -0.1, 1.0]]) { const c = bag.M(new THREE.IcosahedronGeometry(r, 1), '#3fb24a', 3); c.position.set(x, y, z); g.add(c); }
  return g;
}
export function makeBench(bag) {
  const g = new THREE.Group();
  const seat = bag.M(new THREE.BoxGeometry(1.8, 0.12, 0.5), '#b5753f', 2); seat.position.y = 0.5; g.add(seat);
  const back = bag.M(new THREE.BoxGeometry(1.8, 0.4, 0.1), '#b5753f', 2); back.position.set(0, 0.82, -0.22); g.add(back);
  for (const s of [-1, 1]) { const l = bag.M(new THREE.BoxGeometry(0.1, 0.5, 0.45), '#3a3a48', 1.5); l.position.set(s * 0.8, 0.25, 0); g.add(l); }
  return g;
}

export function makeCloud(bag, { grey = '#9aa3b5', scale = 1, face = true } = {}) {
  const g = new THREE.Group(); g.scale.setScalar(scale);
  const m = bag.mat(grey);
  for (const [x, y, z, r] of [[0, 0, 0, 0.75], [0.7, -0.1, 0.1, 0.55], [-0.72, -0.08, 0, 0.58], [0.3, 0.32, -0.1, 0.55], [-0.3, 0.28, 0.12, 0.5]]) {
    const c = bag.M(new THREE.IcosahedronGeometry(r, 1), m, 3); c.position.set(x, y, z); g.add(c);
  }
  if (face) {
    const tex = bag.tex(256, 128, (c) => { c.clearRect(0, 0, 256, 128); c.strokeStyle = '#1a1420'; c.lineWidth = 9; c.lineCap = 'round';
      for (const x of [88, 168]) { c.beginPath(); c.moveTo(x - 18, 46); c.lineTo(x + 18, 40 + (x > 128 ? -6 : 6)); c.stroke(); c.beginPath(); c.arc(x, 62, 7, 0, 7); c.fillStyle = '#1a1420'; c.fill(); }
      c.beginPath(); c.arc(128, 112, 26, Math.PI * 1.15, Math.PI * 1.85); c.stroke(); });
    const f = new THREE.Mesh(bag.add(new THREE.PlaneGeometry(1.1, 0.55)), bag.add(new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })));
    f.position.set(0, -0.02, 0.76); g.add(f); g.userData.face = f;
  }
  return g;
}
// instanced rain streaks falling from a cloud; update(t, dir) moves them
export function makeRain(bag, n = 60, { w = 1.6, h = 2.6 } = {}) {
  const geo = bag.add(new THREE.CylinderGeometry(0.018, 0.018, 0.32, 4));
  const m = bag.basic('#5cb8ff');
  const im = new THREE.InstancedMesh(geo, m, n); im.frustumCulled = false;
  const seeds = Array.from({ length: n }, (_, i) => [((i * 37) % 100) / 100 - 0.5, ((i * 61) % 100) / 100 - 0.5, (i * 0.137) % 1]);
  const d = new THREE.Object3D();
  return {
    mesh: im,
    update(t, tilt = 0) {
      seeds.forEach(([sx, sz, ph], i) => {
        const u = (t * 1.6 + ph) % 1; // fall progress
        d.position.set(sx * w + Math.sin(tilt) * u * h, -u * h * Math.cos(tilt), sz * w * 0.6);
        d.rotation.set(0, 0, -tilt); d.updateMatrix(); im.setMatrixAt(i, d.matrix);
      });
      im.instanceMatrix.needsUpdate = true;
    },
  };
}
export function makeUmbrella(bag, { tartan = true } = {}) {
  const g = new THREE.Group();
  const tt = tartan ? tartanTexture(bag) : null; if (tt) { tt.colorSpace = THREE.SRGBColorSpace; tt.wrapS = tt.wrapT = THREE.RepeatWrapping; tt.repeat.set(3, 1); }
  const canopy = bag.M(new THREE.ConeGeometry(0.95, 0.42, 8, 1, true), bag.mat('#ffffff', { map: tt, side: THREE.DoubleSide }), 2.5); canopy.position.y = 1.05; g.add(canopy);
  const tip = bag.M(new THREE.SphereGeometry(0.05, 6, 5), '#1a1420', 0); tip.position.y = 1.28; g.add(tip);
  const shaft = bag.M(new THREE.CylinderGeometry(0.02, 0.02, 1.1, 6).translate(0, 0.5, 0), '#1a1420', 0); g.add(shaft);
  const handle = bag.M(new THREE.TorusGeometry(0.08, 0.02, 6, 12, Math.PI), '#7a4a2a', 0); handle.rotation.z = Math.PI; handle.position.set(0.08, -0.05, 0); g.add(handle);
  return g;
}

export function makePuffs(bag, n = 7, colour = '#f4f4f4') {
  const g = new THREE.Group();
  const geo = bag.add(new THREE.IcosahedronGeometry(1, 1));
  const puffs = Array.from({ length: n }, (_, i) => {
    const m = new THREE.Mesh(geo, bag.mat(colour, { transparent: true })); g.add(m);
    const a = (i / n) * Math.PI * 2;
    return { m, dir: new THREE.Vector3(Math.cos(a) * 0.7, 0.45 + (i % 3) * 0.25, Math.sin(a) * 0.7), r: 0.35 + (i % 4) * 0.12 };
  });
  return {
    root: g,
    // u = 0..1 lifetime; spread = distance; fwd = extra push along +z
    update(u, spread = 1.4, fwd = 0) {
      for (const p of puffs) {
        const k = easeOut(u);
        p.m.position.set(p.dir.x * spread * k, p.dir.y * spread * k, p.dir.z * spread * k + fwd * k);
        p.m.scale.setScalar(p.r * (0.4 + k * 1.3));
        p.m.material.opacity = 1 - smooth(0.45, 1, u); p.m.visible = u > 0 && u < 1;
      }
    },
  };
}

export function makeMarshalVest(bag, rig, colour = '#d8ff1f') {
  // hi-vis tabard over the shirt (+ two silver reflective bands), hides the race bib
  for (const b of rig.bibs) b.visible = false;
  const tor = rig.torso.children.find((c) => c.isMesh);
  tor.geometry.computeBoundingBox();
  const bb = tor.geometry.boundingBox; const sz = new THREE.Vector3(); bb.getSize(sz);
  const v = bag.M(new RoundedBoxGeometry(sz.x * 1.06, sz.y * 0.82, sz.z * 1.08, 3, Math.min(sz.x, sz.z) * 0.4), colour, 2.5); v.position.copy(tor.position); v.position.y -= sz.y * 0.05; rig.torso.add(v);
  for (const y of [-0.12, 0.12]) { const s = bag.M(new THREE.BoxGeometry(sz.x * 1.08, 0.05, sz.z * 1.1), '#e6edf5', 0); s.position.copy(v.position); s.position.y += y * sz.y; rig.torso.add(s); }
  return v;
}

// ---------------- actors (a fresh runner rig: the featured Mark, or a cast member) ----------------
export function makeActor(bag, info, { vest = null, hideBib = false } = {}) {
  const r = createRunner(info);
  bag.actors.push(r);
  const rig = rigOf(r);
  if (vest) makeMarshalVest(bag, rig, vest);
  else if (hideBib) for (const b of rig.bibs) b.visible = false;
  r.root.traverse((o) => { o.frustumCulled = false; });
  return { r, rig, root: r.root };
}
export const CAST = {
  maureen: { id: 'cast-maureen', nickname: 'Maureen', lane: 0, colour: { primary: '#2a62e0', secondary: '#1d2340' }, look: { build: 'compact', hat: null, hair: 'bun', accessory: 'glasses', skin: '#f1c6a5', face: 'grin', hairColour: '#9aa0a8' } },
  stall: { id: 'cast-stall', nickname: 'Stallholder', lane: 0, colour: { primary: '#ff3d8b', secondary: '#ffffff' }, look: { build: 'stocky', hat: null, hair: 'quiff', accessory: 'moustache', skin: '#c68642', face: 'grin', hairColour: '#1b1b1b' } },
  sherpa: { id: 'cast-sherpa', nickname: 'Sherpa', lane: 0, colour: { primary: '#ff6a1f', secondary: '#1d2340' }, look: { build: 'compact', hat: null, hair: 'bald', accessory: 'beard', skin: '#e0ac69', face: 'grin', hairColour: '#5a3418' } },
  pam: { id: 'cast-pam', nickname: 'Pam', lane: 0, colour: { primary: '#7b4dff', secondary: '#ffffff' }, look: { build: 'tall', hat: null, hair: 'bob', accessory: 'glasses', skin: '#f1c6a5', face: 'smug', hairColour: '#9aa0a8' } },
  jeff: { id: 'cast-jeff', nickname: 'Jeff', lane: 0, colour: { primary: '#2a62e0', secondary: '#ffffff' }, look: { build: 'stocky', hat: null, hair: 'quiff', accessory: null, skin: '#f1c6a5', face: 'grin', hairColour: '#d8a24a' } },
};

// ---------------- staging ----------------
// A course-relative frame at metres m (following runner `who`'s own line, so diversions are respected).
export function stageAt(C, m, who = null) {
  const s = C.sample(Math.max(0, Math.min(5040, m)), who);
  const yaw = Math.atan2(s.tx, s.tz);
  const f = {
    x: s.x, y: s.y, z: s.z, tx: s.tx, tz: s.tz, rx: s.rx, rz: s.rz, yaw, m,
    // a = along the course, l = to the right, u = up (ground-relative unless abs)
    p(a = 0, l = 0, u = 0, { ground = true } = {}) {
      const x = s.x + s.tx * a + s.rx * l, z = s.z + s.tz * a + s.rz * l;
      return V(x, (ground ? C.heightAt(x, z) + 0.16 : s.y) + u, z);
    },
    place(obj, a = 0, l = 0, u = 0, yawOff = 0) { const p = f.p(a, l, u); obj.position.copy(p); obj.rotation.set(0, yaw + yawOff, 0); return obj; },
  };
  return f;
}
// pick the lateral side (+1 right / -1 left) that is inside the park and away from `avoid` (e.g. the fair centre)
export function openSide(world, f, dist = 10, avoid = null) {
  const score = (sg) => {
    const p = f.p(0, sg * dist);
    let s = world.inPark?.(p.x, p.z) ? 1 : 0;
    if (avoid) s += (Math.hypot(p.x - avoid.x, p.z - avoid.z) > Math.hypot(f.x - avoid.x, f.z - avoid.z) ? 0.6 : -0.6);
    return s;
  };
  return score(-1) > score(1) ? -1 : 1;
}

// set a camera with an optional dutch roll (radians)
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _up = new THREE.Vector3(0, 1, 0);
export function setCam(camera, pos, look, fov = 40, roll = 0) {
  camera.position.copy(pos);
  _m4.lookAt(pos, look, _up); camera.quaternion.setFromRotationMatrix(_m4);
  if (roll) { _q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), roll); camera.quaternion.multiply(_q); }
  if (Math.abs(camera.fov - fov) > 0.001) { camera.fov = fov; camera.updateProjectionMatrix(); }
}

// a runner's broadcast-time state (for live beats)
export function liveState(sim, id, b) { return sim.stateAt(Math.max(0, b)).byId[id]; }

export { V, FONT, outlinedText, roundRect };
