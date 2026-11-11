// Procedural low-poly vehicles. Model space: +X forward, +Y up, +Z right; origin on the ground at the car's centre.
//
// Bodies are lofted: a list of cross-section "stations" from tail to nose, each a rounded ring with a sill, a
// shoulder crease, a tumblehome greenhouse and a crowned roof. Every segment between two stations has a kind
// (body / glass / screen / pillar / bpillar) that decides which bands of the ring are paint, glass or trim, so
// windscreens, A/B/C pillars, bonnets and boots fall out of one routine. Everything is flat-shaded vertex colour
// on one shared material; paint is stored as a per-vertex mask so each car is tinted from a cached geometry.

import * as THREE from 'three';
import { CAR_TYPES } from './cartypes.js';

const col = (h) => new THREE.Color(h);
const TRIM = col(0x1e2024), TRIM2 = col(0x34373d), TYRE = col(0x18181b), HUB = col(0xc4c8ce), HUB_D = col(0x4a4e55);
const CHROME = col(0xdfe3e8), GLASS_LO = col(0x0d1620), GLASS_HI = col(0x8fa8bd);
const LAMP = col(0xfff3d2), LAMP_RIM = col(0x8d939b), RED = col(0xa8131c), RED_D = col(0x5c0c10), AMBER = col(0xff9b1a);
const PLATE_W = col(0xf5f5ef), PLATE_Y = col(0xf4c518), INK = col(0x26272b), CREAM = col(0xf2ecd8), WHITE = col(0xf1f2ef);
const GREY_PAINT = col(0x9a9ea5);

// colour descriptors: { c: Color } fixed, { m: k } paint * k, { glass: true } sky-reflection gradient
const P = (m = 1) => ({ m });
const F = (c) => ({ c });
const G = { glass: true };
const D_TRIM = F(TRIM);

export const carMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.08 });
const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff3c4 });
const tailMat = new THREE.MeshBasicMaterial({ color: 0x9a1119 });
const tailOnMat = new THREE.MeshBasicMaterial({ color: 0xff2f2f });
const indMat = new THREE.MeshBasicMaterial({ color: 0xffa51e });
let glowMat = null;
function getGlowMat() {
  if (glowMat) return glowMat;
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 2, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,90,70,1)'); gr.addColorStop(0.35, 'rgba(255,40,30,0.55)'); gr.addColorStop(1, 'rgba(255,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  glowMat = new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  return glowMat;
}
function mergeUV(list) {
  const pos = [], uv = [];
  for (let g of list) { g = g.index ? g.toNonIndexed() : g; pos.push(...g.attributes.position.array); uv.push(...g.attributes.uv.array); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); out.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return out;
}

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _n = new THREE.Vector3(), _c = new THREE.Vector3(), _col = new THREE.Color();

/** Accumulates flat-shaded, vertex-coloured triangles plus a paint mask. */
const M_tri = (m, a, b, c, d, ref) => m.tri(a, b, c, d, ref);
class Mesher {
  constructor(glassY = [0.8, 1.4]) { this.p = []; this.c = []; this.m = []; this.glassY = glassY; }
  push(v, colour, mask) { this.p.push(v.x, v.y, v.z); this.c.push(colour.r, colour.g, colour.b); this.m.push(mask); }
  tri(a, b, c, d, ref) {
    _a.subVectors(b, a); _b.subVectors(c, a); _n.crossVectors(_a, _b);
    if (_n.lengthSq() < 1e-10) return;
    if (ref) { _c.copy(a).add(b).add(c).multiplyScalar(1 / 3).sub(ref); if (_n.dot(_c) < 0) { const t = b; b = c; c = t; _n.negate(); } }
    _n.normalize();
    for (const v of [a, b, c]) {
      if (d.glass) {
        const t = THREE.MathUtils.clamp((v.y - this.glassY[0]) / (this.glassY[1] - this.glassY[0]), 0, 1);
        const k = Math.min(0.9, 0.1 + 0.42 * t + 0.5 * Math.max(0, _n.y));
        this.push(v, _col.copy(GLASS_LO).lerp(GLASS_HI, k), 0);
      } else if (d.m) this.push(v, GREY_PAINT, d.m);
      else this.push(v, d.c, 0);
    }
  }
  quad(a, b, c, d, desc, ref) { this.tri(a, b, c, desc, ref); this.tri(a, c, d, desc, ref); }
  /** Append a three.js geometry (optionally transformed). desc overrides its colours. */
  geo(g, desc, matrix) {
    const ma = g.userData.mask;
    if (g.index) g = g.toNonIndexed();
    const pa = g.attributes.position.clone(), ca = g.attributes.color;
    if (matrix) pa.applyMatrix4(matrix);
    for (let i = 0; i < pa.count; i += 3) {
      const a = V(pa.getX(i), pa.getY(i), pa.getZ(i)), b = V(pa.getX(i + 1), pa.getY(i + 1), pa.getZ(i + 1)), c = V(pa.getX(i + 2), pa.getY(i + 2), pa.getZ(i + 2));
      if (desc) { this.tri(a, b, c, desc); continue; }
      for (let j = 0; j < 3; j++) {
        const v = [a, b, c][j], k = i + j;
        this.push(v, ca ? _col.setRGB(ca.getX(k), ca.getY(k), ca.getZ(k)) : GREY_PAINT, ma ? ma[k] : 0);
      }
    }
  }
  box(w, h, d, x, y, z, desc, rx = 0, ry = 0, rz = 0) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
    g.translate(x, y, z);
    this.geo(g, desc);
  }
  /** Cylinder with its axis along X (lamps, exhausts, beacons use axis 'y'). */
  cyl(r, len, x, y, z, desc, axis = 'x', seg = 10) {
    const g = new THREE.CylinderGeometry(r, r, len, seg);
    if (axis === 'x') g.rotateZ(Math.PI / 2); else if (axis === 'z') g.rotateX(Math.PI / 2);
    g.translate(x, y, z);
    this.geo(g, desc);
  }
  /** Lamp-style n-gon facing +X (dir 1) or -X (dir -1): front face + short side wall, no hidden back. */
  disc(r, depth, x, y, z, desc, dir = 1, seg = 8, rz = r) {
    const pt = (i, dx) => { const a = (i / seg) * Math.PI * 2; return V(x + dx, y + Math.cos(a) * r, z + Math.sin(a) * rz); };
    const front = V(x + dir * depth / 2, y, z), ref = V(x - dir, y, z);
    for (let i = 0; i < seg; i++) {
      M_tri(this, front, pt(i, dir * depth / 2), pt(i + 1, dir * depth / 2), desc, ref);
      this.quad(pt(i, -dir * depth / 2), pt(i + 1, -dir * depth / 2), pt(i + 1, dir * depth / 2), pt(i, dir * depth / 2), desc, V(x, y, z));
    }
  }
  /** Flat decal quad on a side (normal ±Z) or end (normal ±X) face. */
  decal(axis, sgn, cx, cy, cz, a, b, desc) {
    const pts = axis === 'z'
      ? [V(cx - a / 2, cy - b / 2, cz), V(cx + a / 2, cy - b / 2, cz), V(cx + a / 2, cy + b / 2, cz), V(cx - a / 2, cy + b / 2, cz)]
      : [V(cx, cy - b / 2, cz - a / 2), V(cx, cy - b / 2, cz + a / 2), V(cx, cy + b / 2, cz + a / 2), V(cx, cy + b / 2, cz - a / 2)];
    const ref = axis === 'z' ? V(cx, cy, cz - sgn) : V(cx - sgn, cy, cz);
    this.quad(pts[0], pts[1], pts[2], pts[3], desc, ref);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.computeVertexNormals();
    g.userData.mask = new Float32Array(this.m);
    return g;
  }
}

// ------------------------------------------------------------------ the loft
function ringPts(s) {
  const { w, y0, yb, yt, wt, rb, rs, rt } = s;
  const r3 = [w - 0.03 * rs, yb], r4 = [w - 0.1 * rs, yb + 0.015 * rs];
  const r5 = [Math.min(r4[0], wt), Math.max(r4[1], yt - 0.07 * rt)];
  const r4b = [r5[0], Math.max(r4[1], r5[1] - (s.gt || 0))];                // top of the side glass (gt = body-colour header above it)
  const r6 = [Math.max(0.04, Math.min(r5[0], wt - 0.09 * rt)), Math.max(r5[1], yt)];
  return [[w - 0.09 * rb, y0], [w, y0 + 0.13 * rb], [w, Math.max(y0 + 0.13 * rb, yb - 0.08 * rs)], r3, r4, r4b, r5, r6, [0, r6[1] + s.crown]];
}
function stationList(list, d) {
  return list.map((s) => {
    const o = { w: d.hw, y0: d.gc, yb: d.yb, rb: d.rb ?? 1, rs: d.rs ?? 1, rt: d.rt ?? 1, gt: d.gt ?? 0, crown: d.crown ?? 0.025, k: 'body', ...s };
    if (o.wf) o.w = d.hw * o.wf;
    if (o.yt === undefined) { o.yt = o.yb + (o.hood ?? 0.07); if (o.wt === undefined) o.wt = o.w - 0.12; }
    else if (o.wt === undefined) o.wt = d.wt;
    return o;
  });
}
function loft(M, st, pal) {
  const look = (b, k) => {
    if (b < 0) return D_TRIM;
    if (b === 0) return pal.lower;
    if (b <= 3) return b === 3 ? pal.shoulder : pal.body;
    if (b === 4) return k === 'glass' ? G : k === 'screen' ? pal.screenSide : k === 'bpillar' ? pal.bpillar : k === 'pillar' ? pal.pillar : pal.upper;
    if (b === 5) return k === 'screen' ? pal.apillar : k === 'body' ? pal.upper : pal.header || pal.roofEdge;
    if (b === 6) return k === 'screen' ? pal.apillar : k === 'body' ? pal.upper : pal.roofEdge;
    return k === 'screen' ? G : k === 'body' ? pal.upper : pal.roof;
  };
  const rings = st.map((s) => {
    const r = ringPts(s);
    const full = r.map(([z, y]) => V(s.x, y, z));
    for (let i = r.length - 2; i >= 0; i--) full.push(V(s.x, r[i][1], -r[i][0]));
    return full;
  });
  const n = rings[0].length, half = (n - 1) / 2;
  const band = (e) => (e === n - 1 ? -1 : e < half ? e : n - 2 - e);
  for (let i = 0; i < st.length - 1; i++) {
    const A = rings[i], B = rings[i + 1];
    const ref = V(0, 0, 0); for (const v of A.concat(B)) ref.add(v); ref.multiplyScalar(1 / (A.length + B.length));
    for (let e = 0; e < n; e++) { const e2 = (e + 1) % n; M.quad(A[e], A[e2], B[e2], B[e], look(band(e), st[i].k), ref); }
  }
  // end caps in horizontal strips (so two-tone paint splits level, not as a fan)
  for (const [R, sg] of [[rings[0], -1], [rings[rings.length - 1], 1]]) {
    const ref = V(R[0].x - sg, 0, 0); ref.y = R[half].y / 2;
    for (let i = 0; i < half; i++) M.quad(R[i], R[i + 1], R[n - 2 - i], R[n - 1 - i], look(i, 'body'), V(R[0].x - sg, R[i].y, 0));
  }
}
const lerpSt = (st, x, f) => {
  if (x <= st[0].x) return st[0][f];
  for (let i = 1; i < st.length; i++) if (x <= st[i].x) { const a = st[i - 1], b = st[i]; return a[f] + (b[f] - a[f]) * (x - a.x) / (b.x - a.x); }
  return st[st.length - 1][f];
};

// ------------------------------------------------------------------ shared details
function arch(M, x, cy, z, ra, y0, lipDesc, lipW = 0.06) {
  const side = Math.sign(z), segs = 7;
  const a0 = Math.asin(THREE.MathUtils.clamp((y0 - cy) / ra, -0.95, 0.95));
  const ang = (i) => a0 + (Math.PI - 2 * a0) * i / segs;
  const cen = V(x, Math.max(cy, y0), z + side * 0.004), refIn = V(x, cy, 0);
  for (let i = 0; i < segs; i++) {
    const p = (a, r, dz) => V(x + Math.cos(a) * r, cy + Math.sin(a) * r, z + side * dz);
    M.tri(cen, p(ang(i), ra, 0.004), p(ang(i + 1), ra, 0.004), D_TRIM, refIn);
    M.quad(p(ang(i), ra, 0.028), p(ang(i), ra + lipW, 0.028), p(ang(i + 1), ra + lipW, 0.028), p(ang(i + 1), ra, 0.028), lipDesc, refIn);
    M.quad(p(ang(i), ra + lipW, 0), p(ang(i), ra + lipW, 0.028), p(ang(i + 1), ra + lipW, 0.028), p(ang(i + 1), ra + lipW, 0), lipDesc, V(x, cy, z));
  }
}
function doorLine(M, x, yLo, yHi, w, wheels) {
  for (const wh of wheels) {
    const dx = Math.abs(x - wh.x);
    if (dx < wh.ra + 0.06) yLo = Math.max(yLo, wh.y + Math.sqrt(Math.max(0, (wh.ra + 0.06) ** 2 - dx * dx)) + 0.01);
  }
  if (yHi - yLo < 0.1) return;
  for (const s of [-1, 1]) M.decal('z', s, x, (yHi + yLo) / 2, s * w(x), 0.016, yHi - yLo, D_TRIM);
}
function plate(M, x, y, front, wide = 0.5) {
  const s = front ? 1 : -1;
  M.box(0.02, 0.145, wide + 0.035, x + s * 0.008, y, 0, F(TRIM));
  M.box(0.025, 0.12, wide, x + s * 0.0125, y, 0, F(front ? PLATE_W : PLATE_Y));
  M.decal('x', s, x + s * 0.026, y, 0, wide * 0.72, 0.05, F(INK));
}

function wheelGeometry(r, w) {
  const M = new Mesher();
  const hw = w / 2;
  const prof = [[r * 0.86, -hw], [r, -hw + 0.045], [r, hw - 0.045], [r * 0.88, hw], [r * 0.64, hw - 0.012]];
  const seg = 10;
  const pt = (rad, y, i) => { const a = (i / seg) * Math.PI * 2; return V(Math.cos(a) * rad, y, Math.sin(a) * rad); };
  for (let i = 0; i < seg; i++) for (let j = 0; j < prof.length - 1; j++) {
    const [r0, y0] = prof[j], [r1, y1] = prof[j + 1];
    M.quad(pt(r0, y0, i), pt(r1, y1, i), pt(r1, y1, i + 1), pt(r0, y0, i + 1), F(TYRE), V(0, 0, 0));
  }
  // dished five-spoke rim (alternating fan) + centre cap
  const n = 10, cen = V(0, hw - 0.012, 0), ref = V(0, -1, 0);
  for (let i = 0; i < n; i++) M.tri(cen, pt(r * 0.64, hw - 0.03, i * seg / n), pt(r * 0.64, hw - 0.03, (i + 1) * seg / n), F(i % 2 ? HUB : HUB_D), ref);
  for (let i = 0; i < 5; i++) M.tri(V(0, hw + 0.002, 0), pt(r * 0.15, hw - 0.006, i * 2), pt(r * 0.15, hw - 0.006, i * 2 + 2), F(CHROME), ref);
  const g = M.build();
  g.rotateX(Math.PI / 2);   // axle along Z, rim facing +Z
  return g;
}

// ------------------------------------------------------------------ per-shape definitions
function carDef(type) {
  const s = CAR_TYPES[type], L = s.len, W = s.wid, H = s.hgt, hw = W / 2, R = -L / 2, Fx = L / 2;
  const shape = s.shape;
  const d = { hw, crown: 0.025 };
  const pal = { lower: P(0.72), body: P(1), shoulder: P(1.06), upper: P(1), pillar: P(1), bpillar: D_TRIM, apillar: P(1), roof: P(1), roofEdge: P(1), screenSide: G };
  const x = { rails: false, spoiler: false, exhaust: 0, grille: 'hatch', head: 'wide', tail: 'wide', doors: [], cladding: false, plateR: null };
  let list, r = 0.31;
  if (shape === 'hatch' && type === 'mini') {
    Object.assign(d, { gc: 0.19, yb: 0.8, wt: hw - 0.13 }); r = 0.29;
    const roof = H - 0.02;
    list = [
      { x: R, wf: 0.9, y0: 0.29, yb: 0.76 }, { x: R + 0.07, wf: 0.985, y0: 0.21 },
      { x: R + 0.11, yt: 0.86, wt: hw - 0.14, k: 'screen' }, { x: R + 0.22, yt: roof, k: 'pillar' },
      { x: R + 0.34, yt: roof, k: 'glass' }, { x: -0.12, yt: roof, k: 'bpillar' }, { x: -0.02, yt: roof, k: 'glass' },
      { x: Fx - 1.08, yt: roof, k: 'screen' }, { x: Fx - 0.78, hood: 0.06 },
      { x: Fx - 0.14, wf: 0.97, yb: 0.72 }, { x: Fx, wf: 0.86, y0: 0.27, yb: 0.62 },
    ];
    Object.assign(pal, { pillar: D_TRIM, apillar: D_TRIM, roof: F(WHITE), roofEdge: F(WHITE) });
    Object.assign(x, { head: 'round', grille: 'mini', tail: 'tall', doors: [Fx - 0.8, -0.1] });
  } else if (shape === 'hatch') {
    Object.assign(d, { gc: 0.2, yb: 0.85, wt: hw - 0.18 });
    const roof = H - 0.02;
    list = [
      { x: R, wf: 0.9, y0: 0.31, yb: 0.8 }, { x: R + 0.07, wf: 0.985, y0: 0.22 },
      { x: R + 0.13, yt: 0.92, wt: hw - 0.16, k: 'screen' }, { x: R + 0.45, yt: roof - 0.05, k: 'pillar' },
      { x: R + 0.86, yt: roof - 0.02, k: 'glass' }, { x: -0.2, yt: roof, k: 'bpillar' }, { x: -0.09, yt: roof, k: 'glass' },
      { x: Fx - 1.42, yt: roof, k: 'screen' }, { x: Fx - 0.86 },
      { x: Fx - 0.16, wf: 0.97, yb: 0.76 }, { x: Fx, wf: 0.84, y0: 0.28, yb: 0.64 },
    ];
    Object.assign(x, { doors: [Fx - 0.92, -0.15, R + 0.9] });
  } else if (shape === 'saloon') {
    // sporty German saloon: long bonnet, fast rear screen, short boot with a lip spoiler, kidney grille
    Object.assign(d, { gc: 0.17, yb: 0.8, wt: hw - 0.2 }); r = 0.33;
    const roof = H - 0.02;
    list = [
      { x: R, wf: 0.9, y0: 0.3, yb: 0.76 }, { x: R + 0.08, wf: 0.985, y0: 0.2, yb: 0.81 },
      { x: R + 0.24, yb: 0.82, hood: 0.1 }, { x: R + 0.55, yt: 0.93, wt: hw - 0.22, k: 'screen' },
      { x: R + 1.2, yt: roof - 0.03, k: 'pillar' }, { x: R + 1.42, yt: roof - 0.01, k: 'glass' },
      { x: -0.12, yt: roof, k: 'bpillar' }, { x: 0.0, yt: roof, k: 'glass' },
      { x: Fx - 1.85, yt: roof, k: 'screen' }, { x: Fx - 1.1, yb: 0.79, hood: 0.06 },
      { x: Fx - 0.15, wf: 0.975, yb: 0.7 }, { x: Fx, wf: 0.86, y0: 0.24, yb: 0.6 },
    ];
    Object.assign(x, { spoiler: true, exhaust: 2, grille: 'kidney', head: 'slim', tail: 'wrap', doors: [Fx - 1.12, -0.06, R + 1.3] });
  } else if (shape === 'estate') {
    Object.assign(d, { gc: 0.19, yb: 0.84, wt: hw - 0.18 }); r = 0.32;
    const roof = H - 0.02;
    list = [
      { x: R, wf: 0.9, y0: 0.3, yb: 0.8 }, { x: R + 0.07, wf: 0.985, y0: 0.21 },
      { x: R + 0.12, yt: 0.92, wt: hw - 0.2, k: 'screen' }, { x: R + 0.3, yt: roof - 0.04, k: 'glass' },
      { x: R + 0.75, yt: roof - 0.03, k: 'pillar' }, { x: R + 0.86, yt: roof - 0.02, k: 'glass' },
      { x: -0.18, yt: roof, k: 'bpillar' }, { x: -0.06, yt: roof, k: 'glass' },
      { x: Fx - 1.55, yt: roof, k: 'screen' }, { x: Fx - 0.95, hood: 0.06 },
      { x: Fx - 0.16, wf: 0.975, yb: 0.74 }, { x: Fx, wf: 0.86, y0: 0.27, yb: 0.62 },
    ];
    Object.assign(x, { rails: true, exhaust: 1, head: 'slim', doors: [Fx - 1.0, -0.12, R + 1.0] });
  } else if (shape === 'suv' && type === 'bigsuv') {
    // boxy luxury SUV: floating black-pillared roof, clamshell bonnet, upright tailgate
    Object.assign(d, { gc: 0.32, yb: 1.2, wt: hw - 0.13, rs: 0.7, crown: 0.015 }); r = 0.41;
    const roof = H - 0.02;
    list = [
      { x: R, wf: 0.93, y0: 0.45, yb: 1.15 }, { x: R + 0.06, wf: 0.99, y0: 0.34, yb: 1.2 },
      { x: R + 0.1, yt: 1.28, wt: hw - 0.15, k: 'screen' }, { x: R + 0.2, yt: roof - 0.02, k: 'pillar' },
      { x: R + 0.34, yt: roof - 0.01, k: 'glass' }, { x: R + 0.95, yt: roof, k: 'pillar' }, { x: R + 1.05, yt: roof, k: 'glass' },
      { x: -0.12, yt: roof, k: 'bpillar' }, { x: 0.0, yt: roof, k: 'glass' },
      { x: Fx - 1.55, yt: roof, k: 'screen' }, { x: Fx - 0.95, hood: 0.05, wt: hw - 0.1 },
      { x: Fx - 0.1, wf: 0.99, yb: 1.17, hood: 0.04 }, { x: Fx, wf: 0.95, y0: 0.42, yb: 1.09, hood: 0.04 },
    ];
    Object.assign(pal, { lower: D_TRIM, pillar: D_TRIM, apillar: D_TRIM, roof: F(col(0x45484e)), roofEdge: F(col(0x45484e)) });
    Object.assign(x, { rails: true, exhaust: 2, grille: 'mesh', head: 'slim', tail: 'slimwide', cladding: true, doors: [Fx - 1.02, -0.07, R + 1.12] });
  } else if (shape === 'suv') {
    // compact crossover: raked tailgate, black cladding, roof rails
    Object.assign(d, { gc: 0.27, yb: 1.0, wt: hw - 0.2 }); r = 0.37;
    const roof = H - 0.03;
    list = [
      { x: R, wf: 0.9, y0: 0.42, yb: 0.95 }, { x: R + 0.07, wf: 0.985, y0: 0.3 },
      { x: R + 0.14, yt: 1.07, wt: hw - 0.24, k: 'screen' }, { x: R + 0.5, yt: roof - 0.06, k: 'pillar' },
      { x: R + 0.95, yt: roof - 0.02, k: 'glass' }, { x: -0.14, yt: roof, k: 'bpillar' }, { x: -0.02, yt: roof, k: 'glass' },
      { x: Fx - 1.55, yt: roof, k: 'screen' }, { x: Fx - 0.92, hood: 0.07 },
      { x: Fx - 0.16, wf: 0.975, yb: 0.92 }, { x: Fx, wf: 0.87, y0: 0.38, yb: 0.8 },
    ];
    Object.assign(pal, { lower: D_TRIM });
    Object.assign(x, { rails: true, exhaust: 1, grille: 'suv', head: 'slim', tail: 'wrap', cladding: true, doors: [Fx - 1.0, -0.13, R + 1.05] });
  } else if (shape === 'van') {
    Object.assign(d, { gc: 0.26, yb: 1.08, wt: hw - 0.08, rt: 1.4 }); r = 0.36;
    const roof = H - 0.02;
    list = [
      { x: R, wf: 0.96, y0: 0.36, yt: roof - 0.03, wt: hw - 0.12 }, { x: R + 0.06, wf: 0.995, yt: roof },
      { x: Fx - 1.62, yt: roof }, { x: Fx - 1.5, yt: roof, k: 'bpillar' }, { x: Fx - 1.4, yt: roof - 0.01, k: 'glass' },
      { x: Fx - 1.1, yt: roof - 0.06, k: 'screen' }, { x: Fx - 0.52, yb: 1.0, hood: 0.06 },
      { x: Fx - 0.12, wf: 0.97, yb: 0.86, hood: 0.05 }, { x: Fx, wf: 0.86, y0: 0.32, yb: 0.76, hood: 0.04 },
    ];
    Object.assign(pal, { lower: D_TRIM });
    Object.assign(x, { grille: 'van', head: 'tall', tail: 'van', cladding: true, livery: true, doors: [Fx - 1.06, Fx - 1.56] });
  } else if (shape === 'camper') {
    // split-screen-era style camper: two-tone, upright rounded nose, bay windows, white roof
    Object.assign(d, { gc: 0.25, yb: 1.12, wt: hw - 0.05, rb: 1.6, rs: 0.15, rt: 2.4, crown: 0.04, gt: 0.14 }); r = 0.34;
    const roof = H - 0.05;
    list = [
      { x: R, wf: 0.9, y0: 0.42, yt: roof - 0.08, wt: hw * 0.9 - 0.06 }, { x: R + 0.14, wf: 0.995, y0: 0.27, yt: roof },
      { x: R + 0.62, yt: roof, k: 'glass' }, { x: R + 1.22, yt: roof, k: 'pillar' }, { x: R + 1.32, yt: roof, k: 'glass' },
      { x: R + 2.02, yt: roof, k: 'pillar' }, { x: R + 2.12, yt: roof, k: 'glass' }, { x: Fx - 1.4, yt: roof, k: 'pillar' },
      { x: Fx - 1.3, yt: roof, k: 'glass' }, { x: Fx - 0.42, yt: roof, k: 'screen' },
      { x: Fx - 0.16, wf: 0.97, hood: 0.05 }, { x: Fx, wf: 0.86, y0: 0.4, yb: 1.04, hood: 0.03 },
    ];
    Object.assign(pal, { lower: P(0.85), shoulder: P(1), upper: F(CREAM), pillar: F(CREAM), bpillar: F(CREAM), apillar: F(CREAM), roof: F(CREAM), roofEdge: F(CREAM), screenSide: F(CREAM) });
    Object.assign(x, { grille: 'camper', head: 'round', tail: 'camper', wheelShift: 0.1, doors: [Fx - 1.3, Fx - 0.45, R + 1.22, R + 2.12],
      windows: [[R + 0.62, R + 1.22], [R + 1.32, R + 2.02], [R + 2.12, Fx - 1.4]] });
  }
  return { s, L, W, H, hw, R, Fx, r, d, pal, x, st: stationList(list, d) };
}

function buildCar(type) {
  const D = carDef(type), { s, H, hw, R, Fx, r, d, pal, x, st } = D;
  const M = new Mesher([d.yb, H]);
  loft(M, st, pal);
  const w = (px) => lerpSt(st, px, 'w');
  const rear = st[0], front = st[st.length - 1];
  const topR = rear.yt + rear.crown, topF = front.yt + front.crown;
  const lights = { head: [], tail: [], ind: [] };
  const wheels = [];
  for (const px of [s.wheelbase / 2 + (x.wheelShift || 0), -s.wheelbase / 2 + (x.wheelShift || 0)]) for (const z of [-1, 1]) wheels.push({ x: px, y: r, z: z * (hw - 0.1), front: px > 0, ra: r + 0.06 });
  // arches
  for (const wh of wheels) arch(M, wh.x, wh.y, Math.sign(wh.z) * w(wh.x), wh.ra, d.gc, x.cladding ? F(TRIM2) : P(1), x.cladding ? 0.085 : 0.05);
  // door shut lines + handles
  for (const dx of x.doors) doorLine(M, dx, d.gc + 0.1, d.yb - 0.03, (px) => w(px) + 0.003, wheels);
  if (s.shape !== 'camper') for (let i = 0; i + 1 < x.doors.length || (i === 0 && x.doors.length === 1); i++) {
    const hx = x.doors[i] - 0.22;
    for (const z of [-1, 1]) M.decal('z', z, hx, d.yb - 0.1, z * (w(hx) + 0.006), 0.14, 0.03, F(TRIM2));
  }
  // mirrors at the base of the windscreen
  const ws = st.findIndex((q) => q.k === 'screen' && q.x > 0);
  if (ws >= 0) {
    const mx = st[ws + 1].x - 0.06, my = st[ws + 1].yb + 0.1;
    const bodyMirror = x.cladding && s.shape === 'van' ? F(TRIM) : P(1);
    for (const z of [-1, 1]) {
      M.box(0.05, 0.035, 0.1, mx, my - 0.02, z * (w(mx) + 0.0), F(TRIM));
      M.box(0.1, 0.085, 0.14, mx + 0.01, my + 0.0, z * (w(mx) + 0.1), bodyMirror, 0, z * 0.12, 0);
      M.box(0.012, 0.065, 0.11, mx - 0.042, my + 0.0, z * (w(mx) + 0.1), F(TRIM2), 0, z * 0.12, 0);
    }
  }
  // ---- rear end
  const rw = rear.w;
  M.box(0.1, 0.22, rw * 2 - 0.06, R + 0.03, d.gc + 0.16, 0, s.shape === 'camper' ? F(CHROME) : x.cladding ? F(TRIM2) : P(1));    // bumper
  M.box(0.06, 0.07, rw * 2 - 0.4, R + 0.0, d.gc + 0.06, 0, D_TRIM);                                                       // diffuser
  const plateRY = s.shape === 'van' ? d.gc + 0.34 : s.shape === 'camper' ? d.gc + 0.42 : Math.min(topR - 0.26, d.gc + 0.42);
  plate(M, R, plateRY, false);
  for (let i = 0; i < x.exhaust; i++) M.disc(0.04, 0.12, R - 0.01, d.gc + 0.04, (x.exhaust === 1 ? -0.5 : (i ? 1 : -1) * 0.55) * rw, F(col(0x8c9097)), -1, 6);
  const tz = rw - 0.18;
  const lampBox = (list, px, py, pz, lw, lh, ld, extra = {}) => list.push({ x: px, y: py, z: pz, w: lw, h: lh, d: ld, ...extra });
  for (const z of [-1, 1]) {
    if (x.tail === 'van') {
      lampBox(lights.tail, R - 0.01, d.gc + 0.62, z * (rw - 0.08), 0.06, 0.34, 0.12);
      lampBox(lights.ind, R - 0.012, d.gc + 0.4, z * (rw - 0.08), 0.06, 0.1, 0.12, { side: z });
    } else if (x.tail === 'camper') {
      lampBox(lights.tail, R - 0.01, d.gc + 0.62, z * (rw - 0.22), 0.06, 0.15, 0.15, { round: true });
      lampBox(lights.ind, R - 0.01, d.gc + 0.82, z * (rw - 0.22), 0.06, 0.09, 0.09, { round: true, side: z });
    } else if (x.tail === 'tall') {
      lampBox(lights.tail, R - 0.012, topR - 0.17, z * (rw - 0.13), 0.06, 0.24, 0.16);
      lampBox(lights.ind, R - 0.012, topR - 0.36, z * (rw - 0.13), 0.06, 0.08, 0.16, { side: z });
    } else {
      const wide = x.tail === 'slimwide' ? 0.5 : x.tail === 'wrap' ? 0.42 : 0.34, lh = x.tail === 'slimwide' ? 0.09 : 0.14;
      lampBox(lights.tail, R - 0.012, topR - 0.1, z * (rw - 0.04 - wide / 2), 0.06, lh, wide);
      if (x.tail === 'wrap' || x.tail === 'slimwide') M.box(0.3, lh, 0.05, R + 0.14, topR - 0.1, z * (w(R + 0.14) - 0.005), F(RED));
      lampBox(lights.ind, R - 0.016, topR - 0.1 - lh / 2 - 0.05, z * (rw - 0.14), 0.06, 0.07, 0.16, { side: z });
      M.box(0.05, 0.06, 0.1, R - 0.005, topR - 0.1 - lh / 2 - 0.05, z * (rw - 0.3), F(CHROME));          // reversing lamp
    }
  }
  // high-level brake light at the top of the tailgate / rear window
  const rs = st.findIndex((q) => q.k === 'screen' && q.x < 0);
  if (rs >= 0) { const a = st[rs], b = st[rs + 1], sl = (b.x - a.x) / (b.yt - a.yt); lampBox(lights.tail, b.x - 0.035 * sl - 0.025, b.yt - 0.035, 0, 0.05, 0.035, 0.32, { high: true }); }
  else if (s.shape === 'van' || s.shape === 'camper') lampBox(lights.tail, R - 0.01, topR - 0.06, 0, 0.04, 0.04, 0.3, { high: true });
  if (x.spoiler) M.box(0.12, 0.035, rear.w * 2 - 0.2, st[2].x - 0.07, st[2].yt + st[2].crown + 0.02, 0, P(1), 0, 0, 0.18);
  if (s.shape === 'van') {
    M.box(0.012, topR - d.gc - 0.32, 0.016, R - 0.005, (topR + d.gc + 0.3) / 2, 0, D_TRIM);                            // barn door split
    for (const z of [-1, 1]) M.box(0.02, 0.34, rw - 0.22, R - 0.004, topR - 0.42, z * (rw / 2 - 0.02), G);              // rear windows
  }
  if (s.shape === 'camper') {
    M.box(0.02, 0.3, rw * 1.2, R - 0.004, topR - 0.32, 0, G);                                                         // rear window
    M.box(0.01, 0.26, rw * 1.1, R - 0.004, d.gc + 0.62, 0, P(0.9));                                                    // engine lid
    for (const z of [-1, 1]) for (let i = 0; i < 4; i++) M.box(0.12, 0.018, 0.012, R + 0.32, 0.98 - i * 0.05 + 0.0, z * (w(R + 0.32) + 0.004), D_TRIM);   // cooling louvres
  }
  // ---- front end
  const fw = front.w;
  M.box(0.1, 0.22, fw * 2 - 0.04, Fx - 0.03, d.gc + 0.14, 0, s.shape === 'camper' ? F(CHROME) : x.cladding ? F(TRIM2) : P(1));
  M.box(0.06, 0.08, fw * 2 - 0.3, Fx - 0.0, d.gc + 0.03, 0, D_TRIM);
  plate(M, Fx + 0.02, d.gc + 0.16, true);
  const hy = topF - 0.09;
  for (const z of [-1, 1]) {
    if (x.head === 'round') {
      const hz = z * (fw - 0.2), hY = s.shape === 'camper' ? 0.82 : topF - 0.12;
      M.disc(0.1, 0.05, Fx + 0.0, hY, hz, F(CHROME), 1, 10);
      lampBox(lights.head, Fx + 0.012, hY, hz, 0.04, 0.15, 0.15, { round: true });
      lampBox(lights.ind, Fx + 0.01, s.shape === 'camper' ? 1.0 : hY - 0.16, z * (fw - (s.shape === 'camper' ? 0.18 : 0.12)), 0.05, 0.06, 0.06, { round: true, side: z });
    } else if (x.head === 'tall') {
      lampBox(lights.head, Fx - 0.03, hy - 0.05, z * (fw - 0.16), 0.08, 0.2, 0.22);
      lampBox(lights.ind, Fx - 0.025, hy - 0.2, z * (fw - 0.12), 0.08, 0.07, 0.16, { side: z });
    } else {
      const lh = x.head === 'slim' ? 0.08 : 0.11, lw = x.head === 'slim' ? 0.36 : 0.3;
      M.box(0.06, lh + 0.04, lw + 0.04, Fx - 0.035, hy, z * (fw - 0.04 - lw / 2), F(TRIM));
      lampBox(lights.head, Fx - 0.02, hy, z * (fw - 0.06 - lw / 2), 0.06, lh, lw - 0.04);
      lampBox(lights.ind, Fx - 0.07, hy, z * (fw + 0.002), 0.14, lh, 0.04, { side: z });
    }
  }
  const gy = topF - 0.24;
  if (x.grille === 'kidney') for (const z of [-1, 1]) { M.box(0.06, 0.13, 0.17, Fx - 0.01, hy - 0.04, z * 0.1, F(CHROME)); M.box(0.06, 0.1, 0.13, Fx + 0.002, hy - 0.04, z * 0.1, D_TRIM); }
  if (x.grille === 'kidney') M.box(0.06, 0.1, fw * 1.2, Fx - 0.01, d.gc + 0.32, 0, D_TRIM);
  if (x.grille === 'hatch') { M.box(0.06, 0.06, fw * 0.7, Fx - 0.01, hy - 0.04, 0, D_TRIM); M.box(0.06, 0.12, fw * 1.0, Fx - 0.01, d.gc + 0.32, 0, D_TRIM); }
  if (x.grille === 'mini') { M.box(0.06, 0.13, 0.52, Fx - 0.005, hy - 0.08, 0, F(CHROME)); M.box(0.06, 0.1, 0.46, Fx + 0.005, hy - 0.08, 0, D_TRIM); }
  if (x.grille === 'mesh') { M.box(0.06, 0.16, fw * 1.0, Fx - 0.01, hy - 0.02, 0, D_TRIM); for (let i = 0; i < 2; i++) M.box(0.065, 0.015, fw * 1.0, Fx - 0.005, hy - 0.06 + i * 0.07, 0, F(TRIM2)); M.box(0.06, 0.12, fw * 1.1, Fx - 0.01, d.gc + 0.32, 0, D_TRIM); }
  if (x.grille === 'suv') { M.box(0.06, 0.18, fw * 0.9, Fx - 0.02, hy - 0.08, 0, D_TRIM); M.box(0.065, 0.02, fw * 0.92, Fx - 0.012, hy - 0.08, 0, F(CHROME)); }
  if (x.grille === 'van') { M.box(0.06, 0.2, fw * 1.0, Fx - 0.02, hy - 0.06, 0, D_TRIM); M.box(0.065, 0.025, fw * 1.0, Fx - 0.01, hy - 0.06, 0, F(TRIM2)); }
  if (x.grille === 'camper') {
    for (const z of [-1, 1]) M.box(0.02, 0.07, 0.66, Fx - 0.004, 0.93, z * 0.25, F(CREAM), z * 0.6);                  // the V
    M.disc(0.1, 0.03, Fx + 0.005, 0.8, 0, F(CHROME), 1, 10); M.disc(0.07, 0.035, Fx + 0.008, 0.8, 0, F(CREAM), 1, 10);
    M.box(0.02, 0.05, fw * 1.4, Fx - 0.02, d.gc + 0.38, 0, D_TRIM);                                                   // vent slot
  }
  // ---- roof furniture
  const cab = st.filter((q) => q.k !== 'body' || q.yt > d.yb + 0.3);
  if (x.rails && cab.length) {
    const x0 = cab[1].x + 0.05, x1 = cab[cab.length - 1].x - 0.15, ry = Math.min(cab[1].yt, cab[cab.length - 1].yt) + 0.03;
    for (const z of [-1, 1]) {
      M.box(x1 - x0, 0.035, 0.045, (x0 + x1) / 2, ry + 0.06, z * (d.wt - 0.1), s.shape === 'estate' ? F(CHROME) : D_TRIM);
      for (const fx of [x0 + 0.04, x1 - 0.04]) M.box(0.08, 0.07, 0.05, fx, ry + 0.025, z * (d.wt - 0.1), D_TRIM);
    }
  }
  if (type === 'bigsuv') for (const z of [-1, 1]) {                                     // signature wing vent
    const vx = Fx - 1.05; M.decal('z', z, vx + 0.15, d.yb - 0.2, z * (w(vx + 0.15) + 0.008), 0.32, 0.07, F(TRIM2));
  }
  if (s.shape === 'van') {
    // livery: bold blue band + orange flash
    for (const z of [-1, 1]) {
      const zz = z * (hw + 0.004);
      M.box(Fx - 1.7 - R - 0.25, 0.22, 0.01, (R + Fx - 1.7) / 2 + 0.05, d.yb + 0.04, zz, F(col(0x1f5fb8)));
      M.box(0.8, 0.08, 0.012, Fx - 2.5, d.yb + 0.21, zz, F(col(0xf28c1b)), 0, 0, 0.12);
      M.box(0.9, 0.08, 0.012, R + 0.8, d.yb - 0.16, zz, F(col(0xf28c1b)), 0, 0, 0.12);
    }
    M.box(0.014, 0.6, 0.012, Fx - 2.75, d.yb - 0.25, hw + 0.003, D_TRIM);              // sliding door rail line
    M.box(0.9, 0.025, 0.012, Fx - 2.3, d.yb + 0.35, hw + 0.003, D_TRIM);
  }
  if (s.shape === 'camper') {
    for (const z of [-1, 1]) M.box(D.L - 0.5, 0.035, 0.035, -0.05, H - 0.2, z * (d.wt + 0.01), F(CREAM));                  // rain gutter
    const curtain = F(col(0xe7d3a1)), gTop = d.yb + 0.4;
    for (const [a, b] of x.windows) for (const z of [-1, 1]) for (const cx of [a + 0.08, b - 0.08]) M.decal('z', z, cx, (d.yb + gTop) / 2 + 0.02, z * (hw - 0.004), 0.13, gTop - d.yb - 0.04, curtain);
    M.box(2.3, 0.09, 2 * (d.wt - 0.32), -0.25, H - 0.02, 0, F(col(0xe9e2cc)));                                    // pop-top roof
    M.box(2.32, 0.02, 2 * (d.wt - 0.31), -0.25, H - 0.07, 0, F(TRIM2));
  }
  // tail glow quads (live cars only)
  const plateRear = { x: R, y: plateRY }, plateFront = { x: Fx + 0.02, y: d.gc + 0.16 };
  // facts the low-LOD builder and the competitor livery need
  const topOf = (q) => q.yt + q.crown, maxTop = Math.max(...st.map(topOf));
  const roofSt = st.filter((q) => topOf(q) > maxTop - 0.09);
  const cabSt = st.filter((q) => q.k !== 'body');
  const info = {
    shape: s.shape, L: D.L, W: D.W, H, hw, gc: d.gc, yb: d.yb, R, Fx, wt: d.wt, roofY: maxTop,
    roofX0: roofSt[0].x, roofX1: roofSt[roofSt.length - 1].x,
    cabX0: cabSt.length ? cabSt[0].x : R, cabX1: cabSt.length ? st[st.indexOf(cabSt[cabSt.length - 1]) + 1].x : Fx,
    pal, wheels, r,
  };
  return { body: M.build(), lights, wheelPos: wheels, r, tw: s.shape === 'van' ? 0.24 : 0.22, plateRear, plateFront, roofY: H, info };
}

// ------------------------------------------------------------------ the bin lorry
function buildLorry(type) {
  const s = CAR_TYPES[type], L = s.len, W = s.wid, H = s.hgt, hw = W / 2, R = -L / 2, Fx = L / 2, r = 0.5;
  const M = new Mesher([1.5, 2.8]);
  const cabX = Fx - 2.05;
  // cab: low-entry, white with a deep windscreen
  const cabSt = stationList([
    { x: cabX, w: hw - 0.04, y0: 0.55, yb: 1.45, yt: H - 0.32, wt: hw - 0.12, k: 'glass' },
    { x: cabX + 0.45, w: hw - 0.04, y0: 0.55, yb: 1.45, yt: H - 0.32, wt: hw - 0.12, k: 'bpillar' },
    { x: cabX + 0.55, w: hw - 0.04, y0: 0.55, yb: 1.45, yt: H - 0.32, wt: hw - 0.12, k: 'glass' },
    { x: Fx - 0.3, w: hw - 0.04, y0: 0.55, yb: 1.45, yt: H - 0.34, wt: hw - 0.12, k: 'screen' },
    { x: Fx - 0.05, w: hw - 0.08, y0: 0.55, yb: 1.1, hood: 0.03 },
    { x: Fx, w: hw - 0.2, y0: 0.6, yb: 1.0, hood: 0.03 },
  ], { hw, gc: 0.55, yb: 1.45, rb: 1.5, rs: 0.6, rt: 2 });
  loft(M, cabSt, { lower: D_TRIM, body: F(WHITE), shoulder: F(WHITE), upper: F(WHITE), pillar: F(WHITE), bpillar: F(WHITE), apillar: F(TRIM), roof: F(WHITE), roofEdge: F(WHITE), screenSide: G });
  for (const z of [-1, 1]) M.box(1.9, 0.14, 0.012, Fx - 1.0, 1.25, z * (hw - 0.035), P(1));   // green cab stripe
  // body: green, rounded
  const bx0 = R + 1.05, bx1 = cabX - 0.08;
  loft(M, stationList([
    { x: bx0, w: hw, y0: 0.95, yb: 2.0, yt: H, wt: hw - 0.12 },
    { x: bx1, w: hw, y0: 0.95, yb: 2.0, yt: H, wt: hw - 0.12 },
  ], { hw, gc: 0.95, yb: 2.0, rb: 1, rs: 0.5, rt: 2.6, crown: 0.06 }), { lower: P(0.8), body: P(1), shoulder: P(1), upper: P(1), pillar: P(1), bpillar: P(1), apillar: P(1), roof: P(1), roofEdge: P(1), screenSide: P(1) });
  for (const z of [-1, 1]) {
    M.box(bx1 - bx0 - 0.2, 0.18, 0.012, (bx0 + bx1) / 2, 1.55, z * (hw + 0.004), F(WHITE));      // white band
    M.box(bx1 - bx0 - 0.2, 0.05, 0.014, (bx0 + bx1) / 2, 1.45, z * (hw + 0.004), F(PLATE_Y));
  }
  // compactor tailgate: grey, bulging, with a hopper mouth and rear chevrons
  const tg = new THREE.Shape([[0, 0.75], [-0.35, 0.75], [-0.98, 1.3], [-1.08, 1.32], [-1.08, 2.35], [-0.8, H - 0.05], [0.05, H - 0.02], [0.05, 0.75]].map(([a, b]) => new THREE.Vector2(a, b)));
  const tgG = new THREE.ExtrudeGeometry(tg, { depth: W - 0.06, bevelEnabled: false }); tgG.translate(bx0, 0, -(W - 0.06) / 2);
  M.geo(tgG, F(col(0x7f8790)));
  M.box(0.06, 0.5, W - 0.3, R + 0.13, 1.2, 0, F(col(0x22262b)), 0, 0, -0.78);                       // hopper mouth
  {   // red/yellow rear chevrons (inverted V), sheared stripes clamped to the panel
    const px = R - 0.035, y0 = 1.42, y1 = 2.25, pw = hw - 0.14, sh = (y1 - y0) * 0.9, sw = 0.16;
    M.decal('x', -1, px, (y0 + y1) / 2, 0, pw * 2, y1 - y0, F(PLATE_Y));
    const cl = (v) => THREE.MathUtils.clamp(v, -pw, pw);
    for (const sg of [-1, 1]) for (let k = 0; k < 7; k++) {
      const z0 = sg * (0.04 + k * sw * 2), cz = (v) => (sg > 0 ? THREE.MathUtils.clamp(v, 0, pw) : THREE.MathUtils.clamp(v, -pw, 0));
      const q = [V(px - 0.004, y0, cz(z0)), V(px - 0.004, y0, cz(z0 + sg * sw)), V(px - 0.004, y1, cz(z0 + sg * sw - sg * sh)), V(px - 0.004, y1, cz(z0 - sg * sh))];
      M.quad(q[0], q[1], q[2], q[3], F(col(0xd8202a)), V(px + 1, (y0 + y1) / 2, 0));
    }
  }
  // bin lifter + a wheelie bin
  M.box(0.12, 0.5, 1.2, R - 0.02, 0.85, 0, F(col(0x2a2d31)));
  M.box(0.55, 0.85, 0.5, R - 0.33, 0.95, hw - 0.42, F(col(0x2f6d3f)));
  M.box(0.6, 0.06, 0.55, R - 0.33, 1.4, hw - 0.42, F(col(0x255a33)));
  // chassis + skirts
  M.box(L - 0.5, 0.35, W - 0.6, -0.1, 0.62, 0, D_TRIM);
  for (const z of [-1, 1]) M.box(2.0, 0.28, 0.04, R + 2.5, 0.7, z * (hw - 0.05), F(PLATE_Y));
  // front details
  M.box(0.1, 0.3, W - 0.2, Fx - 0.03, 0.62, 0, D_TRIM);
  M.box(0.06, 0.25, W * 0.5, Fx - 0.01, 0.95, 0, F(TRIM2));
  plate(M, Fx, 0.66, true, 0.52);
  plate(M, R - 0.08, 0.72, false, 0.52);
  for (const z of [-1, 1]) {
    M.box(0.08, 0.06, 0.06, Fx - 0.2, 2.45, z * (hw + 0.1), F(TRIM));
    M.box(0.12, 0.38, 0.2, Fx - 0.12, 2.25, z * (hw + 0.18), F(TRIM));
  }
  M.box(0.35, 0.1, 0.9, Fx - 0.6, H - 0.22, 0, F(TRIM));                                             // beacon bar base
  for (const z of [-1, 1]) M.cyl(0.09, 0.1, Fx - 0.6, H - 0.12, z * 0.32, F(col(0xb7680e)), 'y', 6);
  const lights = { head: [], tail: [], ind: [] };
  for (const z of [-1, 1]) {
    lights.head.push({ x: Fx - 0.01, y: 1.0, z: z * (hw - 0.35), w: 0.06, h: 0.14, d: 0.32 });
    lights.ind.push({ x: Fx - 0.01, y: 1.18, z: z * (hw - 0.35), w: 0.06, h: 0.08, d: 0.32, side: z }, { x: R - 0.02, y: 1.42, z: z * (hw - 0.12), w: 0.08, h: 0.12, d: 0.14, side: z });
    lights.tail.push({ x: R - 0.02, y: 1.22, z: z * (hw - 0.12), w: 0.08, h: 0.22, d: 0.14 });
  }
  const wheelPos = [];
  for (const x of [Fx - 1.1, R + 2.3, R + 1.25]) for (const z of [-1, 1]) wheelPos.push({ x, y: r, z: z * (hw - 0.2), front: x > 0, ra: r + 0.06 });
  for (const wh of wheelPos) arch(M, wh.x, wh.y, Math.sign(wh.z) * (wh.x > 0 ? hw - 0.04 : hw), wh.ra, wh.x > 0 ? 0.55 : 0.95, F(TRIM), 0.06);
  return { body: M.build(), lights, wheelPos, r, tw: 0.32, plateRear: { x: R - 0.08, y: 0.72 }, plateFront: { x: Fx, y: 0.66 }, roofY: H, beaconPos: [Fx - 0.6, H - 0.06] };
}

// ------------------------------------------------------------------ low LOD (far parked cars / phones), ~150-300 tris
function frustum(M, x0, x1, y0, w0, tx0, tx1, y1, w1, sideD, endD, topD) {
  const b = [V(x0, y0, -w0), V(x1, y0, -w0), V(x1, y0, w0), V(x0, y0, w0)];
  const t = [V(tx0, y1, -w1), V(tx1, y1, -w1), V(tx1, y1, w1), V(tx0, y1, w1)];
  const ref = V((x0 + x1) / 2, (y0 + y1) / 2, 0);
  M.quad(b[0], b[1], t[1], t[0], sideD, ref); M.quad(b[2], b[3], t[3], t[2], sideD, ref);
  M.quad(b[1], b[2], t[2], t[1], endD, ref); M.quad(b[3], b[0], t[0], t[3], endD, ref);
  M.quad(t[0], t[1], t[2], t[3], topD, ref);
}
function buildLow(type, p) {
  const f = p.info, M = new Mesher([f.yb, f.H]);
  const { R, Fx, hw, gc, yb, H } = f, up = f.pal.upper, lower = f.pal.lower;
  // lower body: chamfered slab (sill band + main side), nose/tail pulled in a touch
  frustum(M, R + 0.06, Fx - 0.06, gc, hw - 0.06, R, Fx, gc + 0.14, hw, lower, lower, P(1));
  frustum(M, R, Fx, gc + 0.14, hw, R + 0.04, Fx - 0.08, yb, hw - 0.03, P(1), P(1), P(1));
  if (f.shape === 'van' || f.shape === 'camper') {
    frustum(M, R + 0.02, Fx - (f.shape === 'van' ? 0.55 : 0.12), yb, hw - 0.03, R + 0.06, Fx - (f.shape === 'van' ? 1.1 : 0.4), H - 0.02, f.wt, up, up, up);
    const gx0 = f.shape === 'van' ? Fx - 1.45 : R + 0.6, gx1 = f.shape === 'van' ? Fx - 1.0 : Fx - 0.5;
    for (const z of [-1, 1]) M.decal('z', z, (gx0 + gx1) / 2, yb + 0.33, z * (hw - 0.0), gx1 - gx0, 0.4, G);
    M.box(0.05, 0.42, (hw - 0.15) * 2, Fx - (f.shape === 'van' ? 0.8 : 0.27), yb + 0.35, 0, G, 0, 0, f.shape === 'van' ? 0.75 : 0.25);
  } else {
    // glasshouse: glass sides/ends, painted roof
    frustum(M, f.cabX0, f.cabX1, yb, hw - 0.08, f.roofX0, f.roofX1, f.roofY - 0.04, f.wt - 0.04, G, G, P(1));
    M.box(f.roofX1 - f.roofX0 + 0.05, 0.04, (f.wt - 0.05) * 2, (f.roofX0 + f.roofX1) / 2, f.roofY - 0.03, 0, f.pal.roof);
  }
  // wheels: hexagonal stubs, outer face only
  for (const w of f.wheels) {
    const sz = Math.sign(w.z), zo = w.z + sz * 0.11;
    const pt = (i, zz) => { const a = (i / 8) * Math.PI * 2 + Math.PI / 8; return V(w.x + Math.cos(a) * f.r, w.y + Math.sin(a) * f.r, zz); };
    for (let i = 0; i < 8; i++) {
      M.tri(V(w.x, w.y, zo + sz * 0.01), pt(i, zo), pt(i + 1, zo), F(TYRE), V(w.x, w.y, w.z));
      M.quad(pt(i, w.z - sz * 0.05), pt(i + 1, w.z - sz * 0.05), pt(i + 1, zo), pt(i, zo), F(TYRE), V(w.x, w.y, zo - sz * 0.5));
    }
  }
  // lamps + plates as end decals
  for (const z of [-1, 1]) {
    M.decal('x', 1, Fx + 0.004, yb - 0.12, z * (hw - 0.24), 0.3, 0.1, F(LAMP));
    M.decal('x', -1, R - 0.004, yb - 0.08, z * (hw - 0.22), 0.3, 0.13, F(RED));
  }
  M.decal('x', 1, Fx + 0.004, gc + 0.17, 0, 0.45, 0.11, F(PLATE_W));
  M.decal('x', -1, R - 0.004, gc + 0.3, 0, 0.45, 0.11, F(PLATE_Y));
  return dropHidden(M.build());
}

// ------------------------------------------------------------------ competitor livery
const SHOW_ACCENTS = [0xffc928, 0xd8232a, 0x1f8fe0, 0x111418];
function lum(c) { const k = new THREE.Color(c); return 0.2126 * k.r + 0.7152 * k.g + 0.0722 * k.b; }
function accentFor(body, wanted) {
  const tries = [wanted, ...SHOW_ACCENTS];
  return tries.find((c) => c != null && Math.abs(lum(c) - lum(body)) > 0.22) ?? 0xd8232a;
}
const _numTex = {};
function numberTexture(n, bg, fg, ring) {
  const key = `${n}|${bg}|${fg}|${ring}`;
  if (_numTex[key]) return _numTex[key];
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const hex = (v) => '#' + v.toString(16).padStart(6, '0');
  if (ring) { g.clearRect(0, 0, 128, 128); g.fillStyle = hex(ring); g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.fillStyle = hex(bg); g.beginPath(); g.arc(64, 64, 50, 0, 7); g.fill(); }
  else { g.fillStyle = hex(bg); g.fillRect(0, 0, 128, 128); }
  g.fillStyle = hex(fg); g.font = '900 84px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(String(n), 64, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (_numTex[key] = t);
}
function addLivery(chassis, p, type, body, comp, opts) {
  const f = p.info; if (!f) return;
  const acc = accentFor(body, comp.colour);
  const accMat = new THREE.MeshStandardMaterial({ color: acc, roughness: 0.45 });
  const ink = lum(acc) > 0.45 ? 0x111418 : 0xffffff;
  // twin racing stripes over the roof
  if (f.shape !== 'camper') for (const z of [-0.17, 0.17]) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(f.roofX1 - f.roofX0 + 0.1, 0.012, 0.16), accMat);
    st.position.set((f.roofX0 + f.roofX1) / 2, f.roofY + 0.004, z); chassis.add(st);
  }
  // side flash along the doors
  for (const z of [-1, 1]) {
    const len = Math.min(f.L * 0.62, f.L - 1.6);
    const sf = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.09), accMat);
    sf.position.set(0, f.yb - 0.05, z * (f.hw + 0.012)); sf.rotation.y = z > 0 ? 0 : Math.PI; chassis.add(sf);
    const rm = new THREE.Mesh(new THREE.CircleGeometry(0.27, 20), new THREE.MeshStandardMaterial({ map: numberTexture(comp.number, 0xffffff, 0x111418, acc), transparent: true, roughness: 0.5 }));
    rm.position.set(f.shape === 'van' ? -0.6 : -0.05, (f.gc + f.yb) / 2 + 0.06, z * (f.hw + 0.016)); rm.rotation.y = z > 0 ? 0 : Math.PI; chassis.add(rm);
  }
  // roof board (magnetic game-show sign), readable from the chase camera
  const numMat = new THREE.MeshStandardMaterial({ map: numberTexture(comp.number, acc, ink, 0), roughness: 0.5 });
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.62), [numMat, numMat, accMat, accMat, accMat, accMat]);
  const bx = opts.learner ? f.roofX0 + 0.3 : opts.roofBox ? f.roofX1 - 0.25 : (f.roofX0 + f.roofX1) / 2 - 0.1;
  board.position.set(bx, f.roofY + 0.19, 0); board.castShadow = true; chassis.add(board);
  const foot = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.5), new THREE.MeshStandardMaterial({ color: 0x1e2024 }));
  foot.position.set(bx, f.roofY + 0.015, 0); chassis.add(foot);
  return board;
}

// ------------------------------------------------------------------ cache + public API
const cache = {};
function parts(type) {
  if (cache[type]) return cache[type];
  const p = CAR_TYPES[type].shape === 'lorry' ? buildLorry(type) : buildCar(type);
  p.wheelR = wheelGeometry(p.r, p.tw);
  p.wheelL = p.wheelR.clone().rotateY(Math.PI);
  const lg = (list, colour) => {
    if (!list.length) return null;
    const M = new Mesher();
    for (const l of list) {
      if (l.round) M.disc(l.h / 2, l.w, l.x, l.y, l.z, F(colour), l.x > 0 ? 1 : -1, 8);
      else M.box(l.w, l.h, l.d, l.x, l.y, l.z, F(colour));
    }
    return M.build();
  };
  p.headGeo = lg(p.lights.head, LAMP);
  p.tailGeo = lg(p.lights.tail, RED);
  p.indGeo = { [-1]: lg(p.lights.ind.filter((l) => l.side < 0), AMBER), [1]: lg(p.lights.ind.filter((l) => l.side > 0), AMBER) };
  // brake-light glow: soft quads behind each rear lamp
  const gl = p.lights.tail.filter((l) => !l.high).map((l) => { const g = new THREE.PlaneGeometry(Math.max(l.d, 0.12) * 1.9, Math.max(l.h, 0.1) * 2.4); g.rotateY(-Math.PI / 2); g.translate(l.x - l.w / 2 - 0.015, l.y, l.z); return g; });
  if (gl.length) p.glowGeo = mergeUV(gl);
  // everything baked for parked cars: body + wheels + lamps
  const M = new Mesher();
  M.geo(p.body);
  for (const w of p.wheelPos) M.geo(w.z < 0 ? p.wheelL : p.wheelR, null, new THREE.Matrix4().makeTranslation(w.x, w.y, w.z));
  for (const g of [p.headGeo, p.tailGeo, p.indGeo[-1], p.indGeo[1]]) if (g) M.geo(g);
  p.baked = dropHidden(M.build());
  cache[type] = p;
  return p;
}

/** Remove triangles that face the ground (never seen, and not needed for sun shadows) from the merged parked mesh. */
function dropHidden(g) {
  const pa = g.attributes.position.array, na = g.attributes.normal.array, ca = g.attributes.color.array, ma = g.userData.mask;
  const P = [], N = [], C = [], K = [];
  for (let t = 0; t < pa.length; t += 9) {
    if ((na[t + 1] + na[t + 4] + na[t + 7]) / 3 < -0.85) continue;
    for (let j = 0; j < 9; j++) { P.push(pa[t + j]); N.push(na[t + j]); C.push(ca[t + j]); }
    for (let j = 0; j < 3; j++) K.push(ma[t / 3 + j]);
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  out.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  out.userData.mask = new Float32Array(K);
  return out;
}

// Period paints for campervans (whatever colour the street generator asks for, campers come out like this)
const CAMPER_PAINTS = [0x8f9c52, 0xe4d9a6, 0xd9772d, 0x86b5c9, 0xb8432f, 0x6f8f7a];
function paintFor(type, colour) {
  if (CAR_TYPES[type].shape === 'camper') { const h = (colour * 2654435761) >>> 0; return CAMPER_PAINTS[(h >>> 7) % CAMPER_PAINTS.length]; }
  return colour;
}
function tint(geo, colour) {
  const g = new THREE.BufferGeometry();
  for (const k of ['position', 'normal', 'color']) g.setAttribute(k, geo.attributes[k].clone());
  const c = g.attributes.color, mask = geo.userData.mask, p = new THREE.Color(colour);
  for (let i = 0; i < c.count; i++) { const k = mask[i]; if (k > 0) c.setXYZ(i, Math.min(1, p.r * k), Math.min(1, p.g * k), Math.min(1, p.b * k)); }
  return g;
}

/** Single merged, world-transformed geometry for a parked car (body + wheels + lamps baked as colours). */
export function parkedCarGeometry(type, colour, x, z, h, opts = {}) {
  const p = parts(type);
  if (opts.lod === 'low' && p.info && !p.low) p.low = buildLow(type, p);
  const g = tint(opts.lod === 'low' && p.low ? p.low : p.baked, paintFor(type, colour));
  g.applyMatrix4(new THREE.Matrix4().makeRotationY(-h).setPosition(x, 0, z));
  return g;
}

/** Animated vehicle: body, steerable spinning wheels, brake lights and indicators. */
export function createCarMesh(type, colour, opts = {}) {
  const p = parts(type), spec = CAR_TYPES[type];
  const group = new THREE.Group();
  const chassis = new THREE.Group();
  group.add(chassis);
  const body = new THREE.Mesh(tint(p.body, paintFor(type, colour)), carMaterial);
  body.castShadow = true; body.receiveShadow = true;
  chassis.add(body);
  if (p.headGeo) chassis.add(new THREE.Mesh(p.headGeo, lampMat));
  const tail = new THREE.Mesh(p.tailGeo, tailMat);
  chassis.add(tail);
  let tailGlow = null;
  if (p.glowGeo) { tailGlow = new THREE.Mesh(p.glowGeo, getGlowMat()); tailGlow.visible = false; tailGlow.renderOrder = 2; chassis.add(tailGlow); }
  const mk = (side) => { const m = new THREE.Mesh(p.indGeo[side], indMat); m.visible = false; chassis.add(m); return m; };
  const indL = mk(-1), indR = mk(1);
  const wheels = p.wheelPos.map((w) => {
    const pivot = new THREE.Group(); pivot.position.set(w.x, w.y, w.z);
    const m = new THREE.Mesh(w.z < 0 ? p.wheelL : p.wheelR, carMaterial); m.castShadow = true;
    pivot.add(m); group.add(pivot);
    return { pivot, mesh: m, front: w.front };
  });
  // extras
  if (opts.learner) {
    const roofSign = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.34), new THREE.MeshStandardMaterial({ color: 0xffffff, map: textTexture('L', '#d8232a', '#ffffff', 64, 44, 40) }));
    roofSign.position.set(-0.1, p.roofY + 0.14, 0); chassis.add(roofSign);
    const lTex = textTexture('L', '#d8232a', '#ffffff', 64, 64, 54);
    for (const [pp, sx] of [[p.plateFront, 1], [p.plateRear, -1]]) {
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ map: lTex }));
      pl.position.set(pp.x + sx * 0.045, pp.y + 0.03, 0.42); pl.rotation.y = sx * Math.PI / 2; chassis.add(pl);
    }
  }
  if (opts.roofBox) {
    const g = new THREE.CapsuleGeometry(0.16, 1.5, 3, 10); g.rotateZ(Math.PI / 2); g.scale(1, 1, 2.4);
    const rb = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x25272b, roughness: 0.35, metalness: 0.2 }));
    rb.position.set(-0.45, p.roofY + 0.3, 0); rb.castShadow = true; chassis.add(rb);
  }
  if (opts.beacon) {
    const b = new THREE.Group();
    const pos = p.beaconPos || [spec.len / 2 - 0.6, spec.hgt + 0.02];
    for (const z of [-1, 1]) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 10), indMat); m.position.set(pos[0], pos[1], z * 0.32); b.add(m); }
    chassis.add(b);
    group.userData.beacon = b;
  }
  if (spec.shape === 'van') {
    const tex = liveryTexture();
    for (const z of [-1, 1]) {
      const d = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.42), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.5 }));
      d.position.set(-0.75, 1.52, z * (spec.wid / 2 + 0.008)); d.rotation.y = z > 0 ? 0 : Math.PI; chassis.add(d);
    }
  }
  if (opts.competitor) group.userData.board = addLivery(chassis, p, type, paintFor(type, colour), opts.competitor, opts);
  group.userData = { ...group.userData, chassis, wheels, tail, tailGlow, indL, indR, type, r: p.r };
  return group;
}

let _livery = null;
function liveryTexture() {
  if (_livery) return _livery;
  const c = document.createElement('canvas'); c.width = 512; c.height = 144;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 512, 144);
  g.fillStyle = '#1f5fb8'; g.font = 'italic 900 70px Arial, sans-serif'; g.textBaseline = 'middle';
  g.fillText('PARCEL', 10, 52);
  g.fillStyle = '#f28c1b'; g.fillText('PANIC', 280, 52);
  g.fillStyle = '#33373d'; g.font = 'bold 30px Arial, sans-serif'; g.fillText('next-day-ish delivery', 14, 118);
  _livery = new THREE.CanvasTexture(c); _livery.colorSpace = THREE.SRGBColorSpace; _livery.anisotropy = 4;
  return _livery;
}

/** Update a car mesh from simulation state. `t` = seconds (for blinking). */
export function syncCarMesh(mesh, car, t, driver = null) {
  const u = mesh.userData;
  mesh.position.set(car.x, 0, car.z);
  mesh.rotation.y = -car.h;
  const bump = car.bump || 0;
  u.chassis.position.y = Math.sin(bump * Math.PI) * 0.09;
  u.chassis.rotation.z = Math.sin(bump * 9) * bump * 0.035;                 // pitch wobble after a jolt
  u.chassis.rotation.x = THREE.MathUtils.clamp(car.v * Math.tan(car.steer) * 0.012, -0.05, 0.05);   // body roll
  for (const w of u.wheels) {
    if (w.front) w.pivot.rotation.y = -car.steer;
    w.mesh.rotation.z = -car.wheelSpin;
  }
  const lit = car.braking || (driver && (driver.state === 'parked' ? false : Math.abs(car.v) < 0.1 && driver.state !== 'idle'));
  u.tail.material = lit ? tailOnMat : tailMat;
  if (u.tailGlow) u.tailGlow.visible = !!lit;
  const blink = Math.floor(t * 2.6) % 2 === 0;
  const hazards = (driver && driver.hazards) || car.stalled > 0;
  const ind = driver ? driver.indicator : car.indicator || 0;
  u.indL.visible = blink && (hazards || ind < 0);
  u.indR.visible = blink && (hazards || ind > 0);
  if (u.beacon) u.beacon.visible = blink;
}

export function textTexture(text, fg, bg, w = 256, h = 64, size = 40, font = 'bold') {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.fillStyle = fg; g.font = `${font} ${size}px "Arial Narrow", Arial, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + size * 0.04);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
