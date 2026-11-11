// Builds the static 3D neighbourhood from the OSM-derived map data:
// ground, carriageway, pavements + kerbs, Victorian terraces (per-house facades with sash windows, bays,
// porches, chimney stacks), front yards and garden walls, trees, street furniture, road markings, signs,
// resident parked cars and bay props.
// Everything static is accumulated into a handful of merged geometries (one draw call per material).

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeRng, pointInRing, clamp } from './util.js';
import { parkedCarGeometry, carMaterial, textTexture } from './carmodels.js';
import { CAR_TYPES } from './cartypes.js';

const V2 = (p) => new THREE.Vector2(p[0], p[1]);
const col = (hex) => new THREE.Color(hex);

function canvasTex(w, h, draw, repeat = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function noiseFill(g, w, h, base, spread, n, rng, alpha = 0.12) {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) {
    const v = Math.floor(128 + (rng() - 0.5) * spread);
    g.fillStyle = `rgba(${v},${v},${v},${alpha})`;
    g.fillRect(rng() * w, rng() * h, 1 + rng() * 3, 1 + rng() * 3);
  }
}

// ---------------------------------------------------------------------------------------------- geometry builder
/**
 * Accumulates flat-shaded triangles with vertex colours (and optional UVs) straight into arrays.
 * `uvScale` > 0: UVs are generated per face (vertical faces: horizontal run + height; flat faces: x/z), in metres * uvScale.
 * `shade(x, y, z)`: optional per-vertex colour multiplier (cheap baked ambient occlusion).
 */
class GB {
  constructor(uvScale = 0) { this.p = []; this.n = []; this.c = []; this.uv = uvScale ? [] : null; this.us = uvScale; this.shade = null; }
  tri(a, b, c, colour, uvs = null) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz); if (l < 1e-9) return;
    nx /= l; ny /= l; nz /= l;
    for (const [k, v] of [a, b, c].entries()) {
      this.p.push(v[0], v[1], v[2]); this.n.push(nx, ny, nz);
      const f = this.shade ? this.shade(v[0], v[1], v[2]) : 1;
      this.c.push(colour.r * f, colour.g * f, colour.b * f);
      if (this.uv) {
        if (uvs) this.uv.push(uvs[k * 2], uvs[k * 2 + 1]);
        else if (Math.abs(ny) > 0.6) this.uv.push(v[0] * this.us, v[2] * this.us);
        else this.uv.push((v[0] * -nz + v[2] * nx) * this.us, v[1] * this.us);
      }
    }
  }
  /** a,b,c,d counter-clockwise as seen from the front. */
  quad(a, b, c, d, colour, uvs = null) {
    this.tri(a, b, c, colour, uvs && [uvs[0], uvs[1], uvs[2], uvs[3], uvs[4], uvs[5]]);
    this.tri(a, c, d, colour, uvs && [uvs[0], uvs[1], uvs[4], uvs[5], uvs[6], uvs[7]]);
  }
  /** Box in a local frame F (see frame()); faces: string of f,b,l,r,t,u (u = underside). */
  box(F, x0, x1, y0, y1, z0, z1, colour, faces = 'fblrt') {
    const P = F.p;
    if (faces.includes('f')) this.quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), colour);
    if (faces.includes('b')) this.quad(P(x1, y0, z0), P(x0, y0, z0), P(x0, y1, z0), P(x1, y1, z0), colour);
    if (faces.includes('l')) this.quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), colour);
    if (faces.includes('r')) this.quad(P(x1, y0, z1), P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), colour);
    if (faces.includes('t')) this.quad(P(x0, y1, z1), P(x1, y1, z1), P(x1, y1, z0), P(x0, y1, z0), colour);
    if (faces.includes('u')) this.quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1), colour);
  }
  /** Centred box with heading h (local x along h), like the old boxAt helper. */
  boxH(w, hgt, d, x, y, z, h, colour, faces = 'fblrt') { this.box(frameH(x, z, h), -w / 2, w / 2, y - hgt / 2, y + hgt / 2, -d / 2, d / 2, colour, faces); }
  /** Vertical n-gon prism (poles, pots, bollards). */
  cyl(x, z, y0, y1, r0, r1, sides, colour, cap = true) {
    for (let i = 0; i < sides; i++) {
      const a0 = (i / sides) * Math.PI * 2, a1 = ((i + 1) / sides) * Math.PI * 2;
      const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      this.quad([x + c1 * r0, y0, z + s1 * r0], [x + c0 * r0, y0, z + s0 * r0], [x + c0 * r1, y1, z + s0 * r1], [x + c1 * r1, y1, z + s1 * r1], colour);
      if (cap) this.tri([x, y1, z], [x + c1 * r1, y1, z + s1 * r1], [x + c0 * r1, y1, z + s0 * r1], colour);
    }
  }
  get count() { return this.p.length / 3; }
  geometry() {
    if (!this.p.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    if (this.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    return g;
  }
  mesh(scene, material, cast = true, receive = true) {
    const g = this.geometry(); if (!g) return null;
    const m = new THREE.Mesh(g, material); m.castShadow = cast; m.receiveShadow = receive; scene.add(m); return m;
  }
}
/** Local frame: x along t, y up, z along outward normal n = (-tz, tx) (right-handed). */
function frame(ox, oz, tx, tz) {
  const nx = -tz, nz = tx;
  return { ox, oz, tx, tz, nx, nz, p: (x, y, z) => [ox + tx * x + nx * z, y, oz + tz * x + nz * z] };
}
const frameH = (x, z, h) => frame(x, z, Math.cos(h), Math.sin(h));

// piecewise-linear ambient occlusion by height for walls: dark at the foot, slightly dark under the eaves
function wallAO(y, top) {
  if (y < 0.7) return 0.6 + (y / 0.7) * 0.34;
  if (y > top - 0.4) return 0.97 - ((y - (top - 0.4)) / 0.4) * 0.15;
  return 0.94 + Math.min(1, (y - 0.7) / 2) * 0.06;
}

function distSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1e-9;
  const t = clamp(((px - ax) * dx + (pz - az) * dz) / l2, 0, 1);
  return Math.hypot(px - ax - dx * t, pz - az - dz * t);
}
function shapeFromPoly(poly) {
  const s = new THREE.Shape(poly.outer.map(V2));
  for (const h of poly.holes || []) s.holes.push(new THREE.Path(h.map(V2)));
  return s;
}
/** Flat polygon(s) (map coords: x east, y north) laid on the ground at height y. UVs in metres * scale. */
function flatGeometry(polys, y, uvScale = 1) {
  const geos = polys.map((p) => {
    const g = new THREE.ShapeGeometry(shapeFromPoly(p));
    const uv = g.attributes.uv, pos = g.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i) * uvScale, pos.getY(i) * uvScale);
    g.rotateX(-Math.PI / 2); g.translate(0, y, 0);
    return g;
  });
  return geos.length ? mergeGeometries(geos) : null;
}

// ---------------------------------------------------------------------------------------------- street palettes
// From the reference photographs. m: 'brick' | 'render' (painted).
const PALETTES = {
  church: {          // white / cream / grey painted render, the odd brick house; tiny brick front walls with railings
    houses: [['render', 0xf1f0ea], ['render', 0xe9e2cc], ['render', 0xc9cecc], ['render', 0xdedbd0], ['render', 0xf3f1e8], ['brick', 0xa65a3e], ['render', 0xd5dad6], ['render', 0xe5ddc8]],
    trim: 0xf6f4ee, lintel: 'band', bay: 0, canopy: 'hood', front: 'railwall', sash: 2,
  },
  bernard: {         // mixed dark brick, red brick and white painted; white lintels, stone sills
    houses: [['render', 0xf2f0e9], ['render', 0xebe4cf], ['brick', 0x4f4a4c], ['brick', 0x5e4a42], ['render', 0xf2f0e9], ['brick', 0xae5a3d], ['render', 0xe3ddca], ['brick', 0x3f3d42], ['brick', 0xb8683f], ['render', 0xdfe2df]],
    trim: 0xf3f1ea, lintel: 'white', bay: 0, canopy: 'surround', front: 'railwall', sash: 2,
  },
  grange: {          // red brick, white surrounds, ground-floor bays
    houses: [['brick', 0xb4583a], ['brick', 0xa94f35], ['brick', 0xbd623f], ['brick', 0xa9543a], ['render', 0xf1efe8]],
    trim: 0xf4f2ec, lintel: 'surround', bay: 0.9, canopy: 'porch', front: 'wall', sash: 1,
  },
  dalton: {          // red brick, white stucco lintels, picket fences
    houses: [['brick', 0x9a4630], ['brick', 0x8f4430], ['brick', 0xa04c34], ['brick', 0x93492f]],
    trim: 0xf4f2ec, lintel: 'white', bay: 0.15, canopy: 'hood', front: 'picket', sash: 2,
  },
  junction: { houses: [['brick', 0xa9563c]], trim: 0xf4f2ec, lintel: 'white', bay: 0, canopy: 'hood', front: 'gardenwall', sash: 2, door: 0x1f2a3a },
  gault: { houses: [['brick', 0xd9c896]], trim: 0xf4f2ec, lintel: 'white', bay: 0, canopy: 'hood', front: 'railwall', sash: 2, door: 0x141518 },
  other: {
    houses: [['brick', 0xc9ae76], ['render', 0xe9e5d8], ['brick', 0x9c5b3e], ['render', 0xd9d6cc], ['brick', 0xbfa06a], ['brick', 0x8e4f3b], ['render', 0xcfd3cf], ['brick', 0x6e5a50]],
    trim: 0xf1efe8, lintel: 'white', bay: 0.25, canopy: 'hood', front: 'mixed', sash: 1,
  },
};
const DOORS = [0x1f3a5f, 0x8c1c24, 0x1f4d3a, 0x17181b, 0x17181b, 0x2d6f7a, 0x5a2a5e, 0x24303c, 0x6d7f8c, 0x3c5a46];
const GLASS = [0x34424f, 0x3b4c5e, 0x2e3a46, 0x455a6e];
function streetKey(edge) {
  if (!edge) return 'other';
  if (edge.id.startsWith('grange')) return 'grange';
  if (edge.id === 'church' || edge.id === 'dalton') return edge.id;
  if (edge.id === 'bernard' || edge.id === 'bernardS') return 'bernard';
  return 'other';
}

export function buildWorld(scene, track, quality) {
  const map = track.map, rng = makeRng(90210);
  const out = { bayProps: new Map(), update: null };
  const texRng = makeRng(7);
  const sdf = track.sdf, b = track.bounds;
  const PAVE = map.meta.paveWidth || 1.5;

  // ------------------------------------------------------------ textures (generated once)
  const tarmac = canvasTex(1024, 1024, (g, w, h) => {
    noiseFill(g, w, h, '#4b4e53', 120, 26000, texRng, 0.16);
    // patched repairs, slightly different shades, crisp edges
    for (let i = 0; i < 9; i++) {
      const pw = 60 + texRng() * 260, ph = 40 + texRng() * 160, px = texRng() * w, py = texRng() * h;
      g.fillStyle = texRng() < 0.5 ? 'rgba(30,32,36,0.1)' : 'rgba(120,122,126,0.07)'; g.fillRect(px, py, pw, ph);
      g.strokeStyle = 'rgba(25,26,28,0.18)'; g.lineWidth = 2; g.strokeRect(px, py, pw, ph);
    }
    // cracks
    g.strokeStyle = 'rgba(22,23,26,0.45)'; g.lineWidth = 1.4;
    for (let i = 0; i < 26; i++) {
      let x = texRng() * w, y = texRng() * h; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 7; k++) { x += (texRng() - 0.5) * 40; y += (texRng() - 0.5) * 40; g.lineTo(x, y); }
      g.stroke();
    }
    // oil drips and dark blotches
    for (let i = 0; i < 40; i++) { const r = 6 + texRng() * 22; const gr = g.createRadialGradient(0, 0, 0, 0, 0, r); gr.addColorStop(0, 'rgba(20,20,22,0.18)'); gr.addColorStop(1, 'rgba(20,20,22,0)'); g.save(); g.translate(texRng() * w, texRng() * h); g.scale(1, 0.6); g.fillStyle = gr; g.fillRect(-r, -r, 2 * r, 2 * r); g.restore(); }
  });
  const paving = canvasTex(512, 512, (g, w, h) => {        // 600 mm flags, slightly irregular tones
    g.fillStyle = '#8f8d87'; g.fillRect(0, 0, w, h);
    const n = 6, s = w / n;
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      const v = 176 + Math.floor((texRng() - 0.5) * 34), x = c * s + (r % 2) * s / 2;
      for (const ox of [0, -w]) { g.fillStyle = `rgb(${v},${v - 2},${v - 7})`; g.fillRect(x + ox + 2, r * s + 2, s - 4, s - 4); }
    }
    for (let i = 0; i < 7000; i++) { const v = Math.floor(100 + texRng() * 120); g.fillStyle = `rgba(${v},${v},${v},0.13)`; g.fillRect(texRng() * w, texRng() * h, 1 + texRng() * 2, 1 + texRng() * 2); }
    g.strokeStyle = 'rgba(60,58,54,0.45)'; g.lineWidth = 1.2;
    for (let i = 0; i < 6; i++) { let x = texRng() * w, y = texRng() * h; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += (texRng() - 0.5) * 50; y += (texRng() - 0.5) * 50; g.lineTo(x, y); } g.stroke(); }
  });
  const grass = canvasTex(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#76935c', 90, 6000, texRng);
    for (let i = 0; i < 900; i++) { g.fillStyle = texRng() < 0.5 ? 'rgba(60,95,45,0.25)' : 'rgba(150,175,95,0.2)'; g.fillRect(texRng() * w, texRng() * h, 2, 5); }
  });
  const brick = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#cfc7bb'; g.fillRect(0, 0, w, h);
    const bh = 18, bw = 48;
    for (let r = 0; r < h / bh; r++) for (let c = -1; c < w / bw + 1; c++) {
      const v = 196 + Math.floor(texRng() * 59), warm = Math.floor(texRng() * 10);
      g.fillStyle = texRng() < 0.06 ? `rgb(${v - 40},${v - 48},${v - 52})` : `rgb(${v},${v - 5 - warm},${v - 10 - warm})`;
      g.fillRect(c * bw + (r % 2) * bw / 2 + 2, r * bh + 2, bw - 3, bh - 3);
    }
    for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(0,0,0,${0.04 + texRng() * 0.05})`; g.fillRect(texRng() * w, texRng() * h, 2, 2); }
  });
  const renderTex = canvasTex(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#f4f3ef', 50, 5000, texRng, 0.07);
    for (let i = 0; i < 12; i++) { g.fillStyle = 'rgba(120,120,110,0.035)'; g.fillRect(texRng() * w, 0, 4 + texRng() * 20, h); }   // faint streaking
  });
  const slate = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#2e3238'; g.fillRect(0, 0, w, h);
    const rows = 10, sh = h / rows, sw = 26;
    for (let r = 0; r < rows; r++) for (let c = -1; c < w / sw + 1; c++) {
      const v = 165 + Math.floor((texRng() - 0.5) * 50);
      g.fillStyle = `rgb(${v},${v + 3},${v + 10})`; g.fillRect(c * sw + (r % 2) * sw / 2 + 1, r * sh + 1, sw - 2, sh - 3);
      g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(c * sw + (r % 2) * sw / 2 + 1, r * sh + sh - 5, sw - 2, 3);
    }
  });
  const yardTex = canvasTex(256, 256, (g, w, h) => {      // front yards: quarry tiles, gravel and pots
    noiseFill(g, w, h, '#a39a8c', 120, 9000, texRng, 0.2);
    for (let i = 0; i < 9; i++) { g.fillStyle = texRng() < 0.5 ? 'rgba(150,72,52,0.35)' : 'rgba(90,110,70,0.35)'; g.fillRect(texRng() * w, texRng() * h, 30 + texRng() * 60, 30 + texRng() * 60); }
    g.strokeStyle = 'rgba(60,55,50,0.25)'; g.lineWidth = 1;
    for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(0, i * 32); g.lineTo(w, i * 32); g.stroke(); g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, h); g.stroke(); }
  });
  const blockPave = canvasTex(256, 256, (g, w, h) => {    // herringbone-ish block paving
    g.fillStyle = '#5d5550'; g.fillRect(0, 0, w, h);
    const u = 16;
    for (let y = 0; y < h; y += u) for (let x = 0; x < w; x += u * 2) {
      const v = 132 + Math.floor(texRng() * 18), red = texRng() < 0.3;
      g.fillStyle = red ? `rgb(${v + 4},${v - 14},${v - 20})` : `rgb(${v - 6},${v - 8},${v - 10})`;
      if (((x / u) + (y / u)) % 4 < 2) g.fillRect(x + ((y / u) % 2) * u + 1, y + 1, u * 2 - 2, u - 2);
      else { g.fillRect(x + 1, y + 1, u - 2, u - 2); g.fillRect(x + u + 1, y + 1, u - 2, u - 2); }
    }
  });
  const wearTex = canvasTex(256, 256, (g, w, h) => {      // multiplies road paint: scuffed, patchy
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const v = Math.floor(120 + texRng() * 120); g.fillStyle = `rgba(${v - 40},${v - 38},${v - 36},${0.25 + texRng() * 0.4})`; g.fillRect(texRng() * w, texRng() * h, 1 + texRng() * 4, 1 + texRng() * 3); }
  });
  const blobTex = canvasTex(64, 64, (g, w, h) => {
    const gr = g.createRadialGradient(32, 32, 4, 32, 32, 31); gr.addColorStop(0, 'rgba(0,0,0,0.62)'); gr.addColorStop(0.55, 'rgba(0,0,0,0.38)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  }, false);
  const gradTex = canvasTex(4, 64, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  }, false);
  gradTex.wrapS = THREE.ClampToEdgeWrapping; gradTex.wrapT = THREE.ClampToEdgeWrapping;

  // ------------------------------------------------------------ ground, roads, pavements
  const groundGeo = new THREE.PlaneGeometry(1400, 1400); groundGeo.rotateX(-Math.PI / 2);
  grass.repeat.set(280, 280);
  const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ map: grass, roughness: 1 }));
  ground.position.set((b.minX + b.maxX) / 2, -0.02, (b.minZ + b.maxZ) / 2); ground.receiveShadow = true;
  scene.add(ground);

  // Generic backdrop OUTSIDE the mapped (OSM) area, so the neighbourhood sits in a town rather than in fields.
  // Deliberately anonymous: repeated instanced terrace blocks, back streets and trees. Nothing here is real data.
  {
    const br = makeRng(4040), C = 38, M = 14, R = 300;
    const blocks = [], roads = new GB(), trees = [];
    const tarmacC = col(0x55585c);
    for (let gx = b.minX - R; gx < b.maxX + R; gx += C) for (let gz = b.minZ - R; gz < b.maxZ + R; gz += C) {
      const cx = gx + C / 2, cz = gz + C / 2;
      if (cx > b.minX - M - C / 2 && cx < b.maxX + M + C / 2 && cz > b.minZ - M - C / 2 && cz < b.maxZ + M + C / 2) continue;
      const ang = 0.5 * Math.sin(cx * 0.004) + 0.4 * Math.cos(cz * 0.005), F = frameH(cx, cz, ang);
      roads.quad(F.p(-C / 2, 0.01, 3), F.p(C / 2, 0.01, 3), F.p(C / 2, 0.01, -3), F.p(-C / 2, 0.01, -3), tarmacC);
      for (const sd of [-1, 1]) {
        let x = -C / 2 + 1;
        while (x < C / 2 - 6) {
          const L = Math.min(C / 2 - 1 - x, br.range(14, 34)); if (L < 6) break;
          if (br() > 0.12) {
            const p = F.p(x + L / 2, 0, sd * 9.2);
            blocks.push({ x: p[0], z: p[2], h: ang, L, D: 8.4, H: 5.9 + br() * 0.8, c: br.pick([0x9c5a42, 0xa86048, 0x8d5440, 0xb59a70, 0xd9d4c6, 0x9c5a42]), r: br.pick([0x5d636c, 0x646a73, 0x6a625a]) });
          } else if (br() < 0.8) { const p = F.p(x + L / 2 + br.range(-4, 4), 0, sd * br.range(10, 15)); trees.push(p); }
          x += L + br.range(1, 4);
        }
        if (br() < 0.5) { const p = F.p(br.range(-C / 2, C / 2), 0, sd * br.range(14, 17)); trees.push(p); }
      }
    }
    const wallGeo = new THREE.BoxGeometry(1, 1, 1); wallGeo.translate(0, 0.5, 0);
    const roofGeo = new THREE.BufferGeometry();
    roofGeo.setAttribute('position', new THREE.Float32BufferAttribute([
      -0.5, 0, -0.5, -0.5, 1, 0, 0.5, 1, 0, -0.5, 0, -0.5, 0.5, 1, 0, 0.5, 0, -0.5,
      0.5, 0, 0.5, 0.5, 1, 0, -0.5, 1, 0, 0.5, 0, 0.5, -0.5, 1, 0, -0.5, 0, 0.5,
      -0.5, 0, 0.5, -0.5, 1, 0, -0.5, 0, -0.5, 0.5, 0, -0.5, 0.5, 1, 0, 0.5, 0, 0.5], 3));
    roofGeo.computeVertexNormals();
    const wm = new THREE.InstancedMesh(wallGeo, new THREE.MeshStandardMaterial({ roughness: 0.95 }), blocks.length);
    const rm = new THREE.InstancedMesh(roofGeo, new THREE.MeshStandardMaterial({ roughness: 0.85, side: THREE.DoubleSide }), blocks.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), cc = new THREE.Color();
    blocks.forEach((k, i) => {
      q.setFromAxisAngle(up, -k.h);
      m4.compose(new THREE.Vector3(k.x, 0, k.z), q, new THREE.Vector3(k.L, k.H, k.D)); wm.setMatrixAt(i, m4); wm.setColorAt(i, cc.set(k.c));
      m4.compose(new THREE.Vector3(k.x, k.H, k.z), q, new THREE.Vector3(k.L + 0.4, 2.3, k.D + 0.6)); rm.setMatrixAt(i, m4); rm.setColorAt(i, cc.set(k.r));
    });
    wm.receiveShadow = rm.receiveShadow = false;
    scene.add(wm, rm);
    roads.mesh(scene, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }), false, false);
    const tg = new THREE.IcosahedronGeometry(2.6, 0); tg.translate(0, 4.2, 0);
    const tm = new THREE.InstancedMesh(tg, new THREE.MeshStandardMaterial({ roughness: 1, flatShading: true }), trees.length);
    trees.forEach((p, i) => { const s2 = br.range(0.8, 1.4); m4.compose(new THREE.Vector3(p[0], 0, p[2]), q.identity(), new THREE.Vector3(s2, s2, s2)); tm.setMatrixAt(i, m4); tm.setColorAt(i, cc.set(br.pick([0x4f8a3c, 0x5d9a45, 0x3f7534]))); });
    scene.add(tm);
  }

  const addFlat = (polys, y, mat, uvScale, shadow = true) => {
    const g = polys && polys.length ? flatGeometry(polys, y, uvScale) : null;
    if (!g) return null;
    const m = new THREE.Mesh(g, mat); m.receiveShadow = shadow; scene.add(m); return m;
  };
  addFlat(map.areas.filter((a) => a.kind === 'park'), 0.0, new THREE.MeshStandardMaterial({ color: 0x6fa857, roughness: 1 }), 1);
  addFlat(map.areas.filter((a) => a.kind === 'carpark'), 0.004, new THREE.MeshStandardMaterial({ map: tarmac, color: 0xb9b9b9, roughness: 0.95 }), 1 / 14);
  addFlat(map.context, 0.008, new THREE.MeshStandardMaterial({ map: tarmac, color: 0xcfcfcf, roughness: 0.95 }), 1 / 14);
  addFlat(map.footways, 0.012, new THREE.MeshStandardMaterial({ map: paving, color: 0xd8d4cc, roughness: 1 }), 1 / 3.6);
  addFlat(map.yards || [], 0.016, new THREE.MeshStandardMaterial({ map: yardTex, roughness: 1 }), 0.33);
  addFlat(map.road, 0.02, new THREE.MeshStandardMaterial({ map: tarmac, roughness: 0.9 }), 1 / 14);

  // pavements, extruded so the kerb is a real step
  {
    const geos = map.pave.map((p) => {
      const g = new THREE.ExtrudeGeometry(shapeFromPoly(p), { depth: 0.14, bevelEnabled: false });
      const uv = g.attributes.uv, pos = g.attributes.position, nor = g.attributes.normal;
      for (let i = 0; i < uv.count; i++) {
        if (Math.abs(nor.getZ(i)) > 0.5) uv.setXY(i, pos.getX(i) / 3.6, pos.getY(i) / 3.6);
        else uv.setXY(i, (pos.getX(i) + pos.getY(i)) / 3.6, pos.getZ(i) / 3.6);
      }
      g.rotateX(-Math.PI / 2);
      return g;
    });
    const m = new THREE.Mesh(mergeGeometries(geos), new THREE.MeshStandardMaterial({ map: paving, roughness: 0.95 }));
    m.receiveShadow = true; scene.add(m);
  }

  // kerb stones (granite strip with joints) + gutter grime along every kerb line
  const kerbs = new GB();
  const grime = [];
  const cornerKerbs = [];     // kerb segments round the Church St / Grange St corners: double yellows follow them          // quads for the gradient AO mesh: [a, b, c, d] with v=0 at the dark edge
  {
    const kc = [col(0xc9c7c1), col(0xb9b7b0), col(0xd3d0c9)];
    for (const poly of map.road) for (const ringRaw of [poly.outer, ...poly.holes]) {
      const ring = ringRaw.map((q) => ({ x: q[0], z: -q[1] }));
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], c = ring[(i + 1) % ring.length];
        const len = Math.hypot(c.x - a.x, c.z - a.z); if (len < 0.05) continue;
        const gr = sdf.grad((a.x + c.x) / 2, (a.z + c.z) / 2);        // points into the road
        const nk = Math.max(1, Math.round(len / 0.9));
        for (let k = 0; k < nk; k++) {
          const t0 = k / nk, t1 = (k + 1) / nk - 0.012;
          const p0 = { x: a.x + (c.x - a.x) * t0, z: a.z + (c.z - a.z) * t0 }, p1 = { x: a.x + (c.x - a.x) * t1, z: a.z + (c.z - a.z) * t1 };
          const kc0 = kc[(i * 7 + k) % 3];
          const o = 0.16;
          kerbs.quad([p0.x - gr.x * o, 0.142, p0.z - gr.z * o], [p0.x, 0.142, p0.z], [p1.x, 0.142, p1.z], [p1.x - gr.x * o, 0.142, p1.z - gr.z * o], kc0);
        }
        const g2 = 0.42;
        const nC = track.nodes.C;
        if (nC && Math.hypot((a.x + c.x) / 2 - nC.x, (a.z + c.z) / 2 - nC.z) < 13.5) cornerKerbs.push({ a, c, gr });
        grime.push([[a.x, 0.024, a.z], [c.x, 0.024, c.z], [c.x + gr.x * g2, 0.024, c.z + gr.z * g2], [a.x + gr.x * g2, 0.024, a.z + gr.z * g2], 0.55]);
      }
    }
    const m = kerbs.mesh(scene, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }), false, true);
  }

  // ------------------------------------------------------------ helpers shared by the scenery builders
  const buildingRings = [];
  for (const bd of map.buildings) buildingRings.push(bd.p.map((p) => ({ x: p[0], z: -p[1] })));
  const inBuilding = (x, z) => buildingRings.some((r) => pointInRing(x, z, r));
  const ctxRings = [...map.context, ...map.footways].map((p) => p.outer.map((q) => ({ x: q[0], z: -q[1] })));
  const inCtx = (x, z) => ctxRings.some((r) => pointInRing(x, z, r));
  const accessPts = map.accesses.map((a) => ({ x: a.at[0], z: -a.at[1] }));
  const forecourtAt = (edgeId, side, s) => (track.forecourts || []).find((f) => f.edgeId === edgeId && f.side === side && s > f.s0 - 0.5 && s < f.s1 + 0.5);

  const shopSigns = [];
  const wallsNear = new GB(1 / 1.4), wallsFar = new GB(1 / 1.4);     // brick (near the drivable streets: casts shadows)
  let walls = wallsNear;              // brick masses + brick facades (brick texture)
  const render = new GB(1 / 2);       // painted render facades
  const roofsNear = new GB(), roofsFar = new GB();
  roofsNear.uv = []; roofsNear.us = 1; roofsFar.uv = []; roofsFar.us = 1;
  let roofs = roofsNear;              // slate (explicit UVs)
  const det = new GB();               // white joinery, doors, sills, gutters, chimneys
  const glass = new GB();             // window glass (glossy)
  const props = new GB();             // walls, fences, bins, poles, signs posts, scaffolding
  const blobs = [];                   // contact shadow decals: {x, z, h, l, w, a}
  const blobs2 = [];                  // under the bays' resident cars
  const wires = [];                   // telegraph wires: pairs of [x,y,z]
  walls.shade = (x, y) => wallAO(y, 99);

  // ------------------------------------------------------------ building masses + roofs
  const roofInfo = [];
  const shopPt = (() => {      // the corner shop faces up Bernard St from across Catherine St
    const e = track.edges.bernardS || track.edges.bernard; if (!e) return null;
    const p = e.path.at(e.len); return { x: p.x + p.tx * 12, z: p.z + p.tz * 12 };
  })();
  const bInfo = [];
  map.buildings.forEach((bd, bi) => {
    let ring = buildingRings[bi].slice();
    let area = 0;
    for (let i = 0; i < ring.length; i++) { const a = ring[i], c = ring[(i + 1) % ring.length]; area += a.x * c.z - c.x * a.z; }
    if (area > 0) ring.reverse();           // now clockwise in (x,z) screen sense: outward normal = (-tz, tx)
    area = Math.abs(area) / 2;
    const cx = ring.reduce((s, p) => s + p.x, 0) / ring.length, cz = ring.reduce((s, p) => s + p.z, 0) / ring.length;
    const small = area < 34 || bd.t === 'shed' || bd.t === 'garage';
    const storeys = small ? 1 : bd.t === 'apartments' ? 3 : 2;
    const H = small ? 2.5 + rng() * 0.4 : storeys * 2.85 + 0.25 + rng() * 0.35;
    const loc = track.locate(cx, cz);
    const far = loc.dist > 26;
    walls = far ? wallsFar : wallsNear; roofs = far ? roofsFar : roofsNear;
    const key = streetKey(loc.dist < 22 ? loc.edge : null);
    const pal = PALETTES[key];
    const spec = small ? ['brick', rng.pick([0x8d8478, 0x9c5b3e, 0xb9b3a6])] : rng.pick(pal.houses);
    const tintC = col(spec[1]);
    bInfo.push({ ring, H, storeys, small, key, tintC, spec, loc });

    // walls in three bands so the baked AO has vertices to live on
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      for (const [y0, y1] of [[0, 0.7], [0.7, H - 0.4], [H - 0.4, H]]) {
        walls.shade = (x, y) => wallAO(y, H);
        walls.quad([a.x, y0, a.z], [c.x, y0, c.z], [c.x, y1, c.z], [a.x, y1, a.z], tintC);
      }
    }
    // roof: gable if the footprint is roughly a rectangle, otherwise a simple hipped cap
    let best = null;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const l = Math.hypot(c.x - a.x, c.z - a.z); if (l < 1) continue;
      const ux = (c.x - a.x) / l, uz = (c.z - a.z) / l;
      let mnU = 1e9, mxU = -1e9, mnV = 1e9, mxV = -1e9;
      for (const p of ring) { const u = p.x * ux + p.z * uz, v = -p.x * uz + p.z * ux; mnU = Math.min(mnU, u); mxU = Math.max(mxU, u); mnV = Math.min(mnV, v); mxV = Math.max(mxV, v); }
      const A = (mxU - mnU) * (mxV - mnV);
      if (!best || A < best.A) best = { A, ux, uz, mnU, mxU, mnV, mxV };
    }
    const roofC = col(rng.pick([0x5d636c, 0x646a73, 0x6a625a, 0x575b62, 0x6e7074]));
    let rectish = best && area / best.A > 0.8 && !small;
    if (rectish) {       // an L-shaped footprint would leave a roof slab hanging over thin air: every rectangle corner must be near the wall
      const { ux, uz, mnU, mxU, mnV, mxV } = best;
      for (const [u, v] of [[mnU, mnV], [mnU, mxV], [mxU, mnV], [mxU, mxV]]) {
        const x = u * ux - v * uz, z = u * uz + v * ux;
        let dmin = 1e9;
        for (let i = 0; i < ring.length; i++) { const a = ring[i], c = ring[(i + 1) % ring.length]; dmin = Math.min(dmin, distSeg(x, z, a.x, a.z, c.x, c.z)); }
        if (dmin > 0.9) { rectish = false; break; }
      }
    }
    const fasciaC = col(0x2a2b2e);
    let info = null;
    if (rectish) {
      let { ux, uz, mnU, mxU, mnV, mxV } = best;
      const st = loc.edge.path.at(loc.s);
      const alongStreet = Math.abs(ux * st.tx + uz * st.tz);
      const ridgeAlongU = loc.dist < 18 ? alongStreet > 0.7 : (mxU - mnU) >= (mxV - mnV);
      if (!ridgeAlongU) { [ux, uz] = [-uz, ux]; [mnU, mxU, mnV, mxV] = [mnV, mxV, -mxU, -mnU]; }
      const P = (u, v, y) => [u * ux - v * uz, y, u * uz + v * ux];
      const o = 0.32, mid = (mnV + mxV) / 2, half = (mxV - mnV) / 2, rh = Math.min(3.0, half * 0.72);
      const sl = Math.hypot(half + o, rh + 0.1);
      // two slopes (u along the ridge); UV: u along eaves, v up the slope (metres / 2.6)
      const U0 = mnU - o, U1 = mxU + o, k = 1 / 2.6;
      roofs.quad(P(U1, mnV - o, H - 0.1), P(U1, mid, H + rh), P(U0, mid, H + rh), P(U0, mnV - o, H - 0.1), roofC, [U1 * k, 0, U1 * k, sl * k, U0 * k, sl * k, U0 * k, 0]);
      roofs.quad(P(U0, mxV + o, H - 0.1), P(U0, mid, H + rh), P(U1, mid, H + rh), P(U1, mxV + o, H - 0.1), roofC, [U0 * k, 0, U0 * k, sl * k, U1 * k, sl * k, U1 * k, 0]);
      // undersides of the eaves (so the overhang reads from below)
      roofs.quad(P(U0, mnV - o, H - 0.1), P(U0, mnV, H), P(U1, mnV, H), P(U1, mnV - o, H - 0.1), fasciaC, [0, 0, 0, 0, 0, 0, 0, 0]);
      roofs.quad(P(U1, mxV + o, H - 0.1), P(U1, mxV, H), P(U0, mxV, H), P(U0, mxV + o, H - 0.1), fasciaC, [0, 0, 0, 0, 0, 0, 0, 0]);
      // gable ends in wall material
      walls.shade = (x, y) => (y > H + rh - 0.2 ? 0.9 : 1);
      walls.tri(P(mnU, mnV, H), P(mnU, mxV, H), P(mnU, mid, H + rh), tintC);
      walls.tri(P(mxU, mxV, H), P(mxU, mnV, H), P(mxU, mid, H + rh), tintC);
      // ridge tiles + fascia boards along both eaves
      const rF = frame(...[P(mnU, mid, 0)[0], P(mnU, mid, 0)[2]], ux, uz);
      det.box(rF, -o, mxU - mnU + o, H + rh - 0.06, H + rh + 0.1, -0.12, 0.12, col(0x6b4b3e), 'fblrt');
      for (const v of [mnV - o, mxV + o]) {
        const p0 = P(mnU, v, 0); const fF = frame(p0[0], p0[2], ux, uz);
        det.box(fF, -o, mxU - mnU + o, H - 0.32, H - 0.06, -0.05, 0.05, fasciaC, v < mid ? 'b' : 'f');
      }
      info = { P, ux, uz, mnU, mxU, mnV, mxV, mid, rh, H };
    } else {
      const kk = small ? 0.86 : 0.45, rh = small ? 0.25 : 1.7;
      const inner = ring.map((p) => ({ x: cx + (p.x - cx) * kk, z: cz + (p.z - cz) * kk }));
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], c = ring[(i + 1) % ring.length], ai = inner[i], ci = inner[(i + 1) % ring.length];
        const L = Math.hypot(c.x - a.x, c.z - a.z) / 2.6;
        roofs.quad([a.x, H, a.z], [c.x, H, c.z], [ci.x, H + rh, ci.z], [ai.x, H + rh, ai.z], roofC, [0, 0, L, 0, L, 0.7, 0, 0.7]);
      }
      const tris = THREE.ShapeUtils.triangulateShape(inner.map((p) => new THREE.Vector2(p.x, p.z)), []);
      for (const t of tris) roofs.tri([inner[t[2]].x, H + rh, inner[t[2]].z], [inner[t[1]].x, H + rh, inner[t[1]].z], [inner[t[0]].x, H + rh, inner[t[0]].z], roofC.clone().multiplyScalar(0.9), [0, 0, 1, 0, 1, 1]);
      if (!small) info = { flat: true, H, rh, cx, cz };
    }
    roofInfo.push(info);
    // background chimneys for buildings that don't face one of our streets get added later if needed
  });

  walls = wallsNear; roofs = roofsNear;
  // ------------------------------------------------------------ street facades
  const facadeSegs = [];
  bInfo.forEach((bi, idx) => {
    if (bi.small) return;
    const ring = bi.ring;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const len = Math.hypot(c.x - a.x, c.z - a.z);
      if (len < 1.8) continue;
      const tx = (c.x - a.x) / len, tz = (c.z - a.z) / len;
      let nx = -tz, nz = tx;
      const mx = (a.x + c.x) / 2, mz = (a.z + c.z) / 2;
      if (pointInRing(mx + nx * 0.3, mz + nz * 0.3, ring)) { nx = -nx; nz = -nz; }
      const l2 = track.locate(mx, mz);
      const e = l2.edge;
      const yard = l2.dist - e.hw - PAVE;
      if (yard > 7 || yard < -0.6) continue;
      const cp = e.path.at(l2.s);
      const dx = cp.x - mx, dz = cp.z - mz, dl = Math.hypot(dx, dz) || 1;
      if ((dx * nx + dz * nz) / dl < 0.8) continue;           // must face the street squarely
      // nothing (another building) in between
      let blocked = false;
      for (let d = 0.6; d < yard + 0.2; d += 0.8) if (inBuilding(mx + nx * d, mz + nz * d)) { blocked = true; break; }
      if (blocked) continue;
      facadeSegs.push({ bi: idx, a, c, len, nx, nz, e, s: l2.s, lat: l2.lat, yard: Math.max(0, yard) });
    }
  });

  let shopSeg = null;
  if (shopPt) {
    let bestD = 11;
    for (const sg of facadeSegs) {
      const mx = (sg.a.x + sg.c.x) / 2, mz = (sg.a.z + sg.c.z) / 2, dd = Math.hypot(mx - shopPt.x, mz - shopPt.z);
      if (dd < bestD && sg.len > 2.4 && sg.e.id.startsWith('catherine')) { bestD = dd; shopSeg = sg; }
    }
  }
  let binIdx = 0;
  const BIN_COLOURS = [0x2f6b3a, 0x1d1f22, 0x6e4224];       // green, black, brown (photo 5)
  let houseCount = 0;
  const scaffoldDone = { n: 0 };
  for (const seg of facadeSegs) {
    const bi = bInfo[seg.bi];
    const H = bi.H, d = 0.15;
    // local frame: x along the facade, z out towards the street
    const tx = seg.nz, tz = -seg.nx;                       // so that frame normal (-tz, tx) == outward normal
    const xa = (seg.a.x * tx + seg.a.z * tz), xc = (seg.c.x * tx + seg.c.z * tz);
    const o = xa < xc ? seg.a : seg.c;
    const F = frame(o.x, o.z, tx, tz);
    const len = seg.len;
    let key = streetKey(seg.e);
    const side = Math.sign(seg.lat) || 1;
    if (key === 'dalton' && side === -track.edges.dalton.baySide && seg.s > 205) key = 'gault';    // the yellow-brick house at the north end
    const units = Math.max(1, Math.round(len / 4.6));
    const w = len / units;
    const gf = H > 7 ? 2.9 : H * 0.47;          // ground floor height
    const isShop = seg === shopSeg;
    if (seg.e.id === 'church' && seg.s < 34 && side === seg.e.baySide) key = 'junction';
    if (isShop) shopSign(F, len, d);
    let pal = PALETTES[key];
    const yardAt = (x) => {
      const p = F.p(x, 0, 0); const l = track.locate(p[0], p[2]); return Math.max(0, l.dist - l.edge.hw - PAVE);
    };
    // per-house pass
    for (let u = 0; u < units; u++) {
      const x0 = u * w, x1 = (u + 1) * w;
      const hrng = makeRng(9001 + houseCount * 31 + seg.bi);
      houseCount++;
      const spec = key === 'gault' ? pal.houses[0] : (u === 0 && seg.bi % 3 === 0) ? bi.spec : hrng.pick(pal.houses);
      const isRender = spec[0] === 'render';
      const tone = isRender ? 1 : 0.94 + hrng() * 0.12;
      const wallC = col(spec[1]).multiplyScalar(tone);
      const B = isRender ? render : walls;
      const trimC = col(pal.trim), darkTrim = col(0x2a2b2e);
      const doorC = col(pal.door || hrng.pick(DOORS));
      const narrow = w < 3.4;
      const doorLeft = ((houseCount + (seg.bi % 2)) % 2) === 0;
      const doorX = narrow ? -99 : doorLeft ? x0 + 0.95 : x1 - 0.95;
      const winX = narrow ? (x0 + x1) / 2 : doorLeft ? x1 - 1.75 : x0 + 1.75;
      const shop = isShop;
      const hasBay = !shop && !narrow && w >= 4.1 && hrng() < pal.bay;
      // openings: {x0,x1,y0,y1,kind}
      const ops = [];
      const ffY0 = gf + 0.55, ffY1 = Math.min(H - 0.45, gf + 1.95);
      if (shop) {
        ops.push({ x0: x0 + 0.4, x1: x1 - 1.6, y0: 0.55, y1: 2.45, kind: 'shop' });
        ops.push({ x0: x1 - 1.35, x1: x1 - 0.4, y0: 0.12, y1: 2.45, kind: 'door' });
      } else {
        if (!narrow) ops.push({ x0: doorX - 0.5, x1: doorX + 0.5, y0: 0.15, y1: 2.5, kind: 'door' });
        if (!hasBay) ops.push({ x0: winX - 0.6, x1: winX + 0.6, y0: 0.8, y1: 2.3, kind: 'win' });
      }
      for (let fl = 1; fl < bi.storeys; fl++) {
        const y0 = ffY0 + (fl - 1) * 2.85, y1 = Math.min(H - 0.45, ffY1 + (fl - 1) * 2.85);
        if (y1 - y0 < 0.8) continue;
        if (!narrow) ops.push({ x0: doorX - 0.42, x1: doorX + 0.42, y0: y0 + 0.1, y1, kind: 'win' });
        ops.push({ x0: winX - 0.58, x1: winX + 0.58, y0, y1, kind: 'win' });
      }
      // --- the facade slab with real openings (front quads by horizontal bands, plus reveals)
      const ys = new Set([0, 0.7, H - 0.4, H]);
      for (const op of ops) { ys.add(op.y0); ys.add(op.y1); }
      const yl = [...ys].filter((y) => y >= 0 && y <= H).sort((p, q) => p - q);
      B.shade = (x, y) => wallAO(y, H);
      for (let k = 0; k < yl.length - 1; k++) {
        const ya = yl[k], yb = yl[k + 1]; if (yb - ya < 1e-4) continue;
        const cuts = ops.filter((op) => op.y0 <= ya + 1e-4 && op.y1 >= yb - 1e-4).sort((p, q) => p.x0 - q.x0);
        let xs = x0;
        for (const cdef of cuts) { if (cdef.x0 > xs) B.box(F, xs, cdef.x0, ya, yb, 0, d, wallC, 'f'); xs = Math.max(xs, cdef.x1); }
        if (xs < x1) B.box(F, xs, x1, ya, yb, 0, d, wallC, 'f');
      }
      if (u === 0) B.box(F, x0, x0 + 0.01, 0, H, 0, d, wallC, 'l');
      if (u === units - 1) B.box(F, x1 - 0.01, x1, 0, H, 0, d, wallC, 'r');
      for (const op of ops) {     // reveals (inner faces of the opening)
        B.shade = (x, y) => 0.8 * wallAO(y, H);
        B.quad(F.p(op.x0, op.y0, d), F.p(op.x0, op.y0, 0.04), F.p(op.x0, op.y1, 0.04), F.p(op.x0, op.y1, d), wallC);
        B.quad(F.p(op.x1, op.y0, 0.04), F.p(op.x1, op.y0, d), F.p(op.x1, op.y1, d), F.p(op.x1, op.y1, 0.04), wallC);
        B.quad(F.p(op.x0, op.y1, d), F.p(op.x0, op.y1, 0.04), F.p(op.x1, op.y1, 0.04), F.p(op.x1, op.y1, d), wallC);
        B.quad(F.p(op.x0, op.y0, 0.04), F.p(op.x0, op.y0, d), F.p(op.x1, op.y0, d), F.p(op.x1, op.y0, 0.04), wallC);
      }
      B.shade = null;
      // --- joinery, glass, lintels, sills
      const sillC = isRender ? trimC : col(key === 'bernard' ? 0xd8d3c6 : pal.trim);
      for (const op of ops) {
        const ow = op.x1 - op.x0;
        if (op.kind === 'win' || op.kind === 'shop') {
          det.box(F, op.x0, op.x1, op.y0, op.y1, 0.03, 0.045, trimC, 'f');          // painted sash box (shows as frame + bars)
          sashPanes(F, op.x0, op.x1, op.y0, op.y1, 0.05, op.kind === 'shop' ? 3 : pal.sash, hrng);
          // lintel / surround
          if (op.kind === 'shop') {
            det.box(F, x0 + 0.1, x1 - 0.1, 2.5, 3.0, d, d + 0.12, col(0x1f4d3a));                      // fascia
            det.box(F, x0 + 0.1, x1 - 0.1, 3.0, 3.08, d, d + 0.18, trimC);
            det.box(F, op.x0, op.x1, 0.1, op.y0, d - 0.02, d + 0.02, col(0x1f4d3a), 'ft');            // stall riser
          } else if (pal.lintel === 'surround') {
            det.box(F, op.x0 - 0.14, op.x1 + 0.14, op.y1, op.y1 + 0.2, d, d + 0.05, trimC);
            det.box(F, op.x0 - 0.14, op.x0, op.y0, op.y1, d, d + 0.04, trimC, 'flrt');
            det.box(F, op.x1, op.x1 + 0.14, op.y0, op.y1, d, d + 0.04, trimC, 'flrt');
          } else if (pal.lintel === 'band' || isRender) {
            det.box(F, op.x0 - 0.1, op.x1 + 0.1, op.y1, op.y1 + 0.12, d, d + 0.025, trimC.clone().multiplyScalar(isRender ? 0.93 : 1));
          } else {
            const dark = wallC.r + wallC.g + wallC.b < 1.0;
            det.box(F, op.x0 - 0.12, op.x1 + 0.12, op.y1, op.y1 + 0.24, d, d + 0.04, dark ? col(0x9a4a33) : trimC);
          }
          det.box(F, op.x0 - 0.1, op.x1 + 0.1, op.y0 - 0.08, op.y0, d - 0.02, d + 0.09, sillC);
        } else if (op.kind === 'door') {
          det.box(F, op.x0, op.x1, op.y0, op.y1, 0.03, 0.045, trimC, 'f');                                   // frame
          det.box(F, op.x0 + 0.06, op.x1 - 0.06, op.y0, op.y1 - 0.42, 0.045, 0.06, doorC, 'f');            // door leaf
          const pc = doorC.clone().multiplyScalar(0.82);
          for (const [py0, py1] of [[0.35, 1.05], [1.25, 1.95]]) for (const px of [0.17, 0.53]) det.box(F, op.x0 + px, op.x0 + px + 0.3, op.y0 + py0, op.y0 + py1, 0.06, 0.075, pc, 'flrt');
          glass.box(F, op.x0 + 0.08, op.x1 - 0.08, op.y1 - 0.36, op.y1 - 0.06, 0.05, 0.055, col(0x3b4c5e), 'f');   // fanlight
          det.box(F, op.x0 - 0.12, op.x1 + 0.12, 0, 0.15, d - 0.02, d + 0.32, col(0xb9b5ab));             // step
          det.box(F, op.x0 + 0.42, op.x0 + 0.58, 1.0, 1.06, 0.06, 0.1, col(0xc9a24a), 'flrt');            // letterbox/knocker glint
          if (shop) continue;
          if (pal.canopy === 'hood' || (pal.canopy === 'porch' && !hasBay)) {
            // door surround pilasters carrying a small lean-to slate hood (reads as one attached piece)
            det.box(F, op.x0 - 0.16, op.x0, 0.15, op.y1 + 0.18, d - 0.01, d + 0.06, trimC, 'flrt');
            det.box(F, op.x1, op.x1 + 0.16, 0.15, op.y1 + 0.18, d - 0.01, d + 0.06, trimC, 'flrt');
            leanTo(F, op.x0 - 0.3, op.x1 + 0.3, d, d + 0.48, op.y1 + 0.18, op.y1 + 0.58, trimC);
          } else if (pal.canopy === 'surround') {
            det.box(F, op.x0 - 0.2, op.x0, 0, op.y1 + 0.05, d, d + 0.08, trimC, 'flrt');
            det.box(F, op.x1, op.x1 + 0.2, 0, op.y1 + 0.05, d, d + 0.08, trimC, 'flrt');
            det.box(F, op.x0 - 0.3, op.x1 + 0.3, op.y1 + 0.05, op.y1 + 0.3, d, d + 0.16, trimC);
          }
        }
      }
      // --- ground-floor canted bay window
      if (hasBay) {
        const cx = winX, bw = 1.22, fw = 0.78, dp = 0.62, zb = d - 0.02;
        const pl = [[cx - bw, zb], [cx - fw, zb + dp], [cx + fw, zb + dp], [cx + bw, zb]];
        const faceQ = (Bd, p, q, y0, y1, c, off = 0) => {
          const ex = q[0] - p[0], ez = q[1] - p[1], el = Math.hypot(ex, ez), onx = -ez / el * off, onz = ex / el * off;
          Bd.quad(F.p(p[0] + onx, y0, p[1] + onz), F.p(q[0] + onx, y0, q[1] + onz), F.p(q[0] + onx, y1, q[1] + onz), F.p(p[0] + onx, y1, p[1] + onz), c);
        };
        B.shade = (x, y) => wallAO(y, H);
        for (let k = 0; k < 3; k++) faceQ(B, pl[k], pl[k + 1], 0, 0.7, wallC);
        B.shade = null;
        for (let k = 0; k < 3; k++) {
          faceQ(det, pl[k], pl[k + 1], 0.7, 2.35, trimC);
          const p = pl[k], q = pl[k + 1], panes = k === 1 ? 2 : 1;
          for (let j = 0; j < panes; j++) {
            const t0 = 0.09 + (j / panes) * 0.82 + (j ? 0.03 : 0), t1 = 0.09 + ((j + 1) / panes) * 0.82 - (j < panes - 1 ? 0.03 : 0);
            const a2 = [p[0] + (q[0] - p[0]) * t0, p[1] + (q[1] - p[1]) * t0], b2 = [p[0] + (q[0] - p[0]) * t1, p[1] + (q[1] - p[1]) * t1];
            const net = hrng() < 0.4;
            glass.shade = (x, y) => (y > 1.9 ? 1.5 : 1);
            faceQ(glass, a2, b2, 0.85, 1.75, net ? col(0xc9c6bb) : col(hrng.pick(GLASS)), 0.012);
            faceQ(glass, a2, b2, 1.82, 2.22, col(hrng.pick(GLASS)), 0.012);
            glass.shade = null;
          }
        }
        // sill ledge, cornice and lead/slate cap
        const ex = 0.07;
        const plo = [[cx - bw - ex, zb], [cx - fw - ex * 0.6, zb + dp + ex], [cx + fw + ex * 0.6, zb + dp + ex], [cx + bw + ex, zb]];
        for (let k = 0; k < 3; k++) { faceQ(det, plo[k], plo[k + 1], 0.62, 0.72, sillC); faceQ(det, plo[k], plo[k + 1], 2.35, 2.6, trimC); }
        det.quad(F.p(plo[0][0], 0.72, plo[0][1]), F.p(plo[1][0], 0.72, plo[1][1]), F.p(plo[2][0], 0.72, plo[2][1]), F.p(plo[3][0], 0.72, plo[3][1]), sillC);
        const ap = (x, y) => F.p(x, y, zb);
        const capC = col(0x585e66);
        if (pal.canopy === 'porch' && !narrow) {
          // one continuous slate canopy over the bay and the front door, resting on the bay cornice (photo 3)
          const xa = Math.min(plo[0][0], doorX - 0.65), xb = Math.max(plo[3][0], doorX + 0.65), zf = zb + dp + ex;
          leanTo(F, xa, xb, zb, zf, 2.6, 3.1, trimC);
          const postX = doorX < cx ? xa + 0.06 : xb - 0.06;
          det.box(F, postX - 0.06, postX + 0.06, 0, 2.6, zf - 0.14, zf - 0.02, trimC, 'fblr');
        } else
        roofs.quad(F.p(plo[1][0], 2.6, plo[1][1]), F.p(plo[2][0], 2.6, plo[2][1]), ap(cx + fw * 0.8, 3.0), ap(cx - fw * 0.8, 3.0), capC, [0, 0, 0.6, 0, 0.6, 0.3, 0, 0.3]);
        roofs.tri(F.p(plo[0][0], 2.6, plo[0][1]), F.p(plo[1][0], 2.6, plo[1][1]), ap(cx - fw * 0.8, 3.0), capC, [0, 0, 0.3, 0, 0.15, 0.3]);
        roofs.tri(F.p(plo[2][0], 2.6, plo[2][1]), F.p(plo[3][0], 2.6, plo[3][1]), ap(cx + fw * 0.8, 3.0), capC, [0, 0, 0.3, 0, 0.15, 0.3]);
      }
      // --- plinth, gutter, downpipe
      const plinthC = isRender ? col(0x45474b) : wallC.clone().multiplyScalar(0.68);
      for (const [px0, px1] of splitAround(x0, x1, ops.filter((op) => op.y0 < 0.4).map((op) => [op.x0 - 0.12, op.x1 + 0.12]))) {
        det.shade = (x, y) => (y < 0.05 ? 0.6 : 1);
        det.box(F, px0, px1, 0, 0.38, d - 0.01, d + 0.045, plinthC, 'ft');
        det.shade = null;
      }
      det.box(F, x0 - 0.02, x1 + 0.02, H - 0.2, H - 0.04, d, d + 0.2, col(0x1f2023), 'ftu');
      if (u < units - 1 || units === 1) { const px = u < units - 1 ? x1 - 0.08 : x1 - 0.25; det.box(F, px - 0.03, px + 0.03, 0, H - 0.12, d + 0.02, d + 0.08, col(0x34363a), 'flr'); }
      if (key === 'dalton' && !isRender) det.box(F, x0, x1, gf - 0.08, gf + 0.04, d, d + 0.03, trimC.clone().multiplyScalar(0.96));   // stucco band
      // --- front yard party wall / fence
      if (seg.yard > 0.7 && u > 0) {
        const yd = yardAt(x0) - 0.15;
        if (yd > 0.5) {
          if (pal.front === 'picket') picketRun(props, frame(...[F.p(x0, 0, d)[0], F.p(x0, 0, d)[2]], F.nx, F.nz), 0, yd - d, 0.95);
          else props.box(F, x0 - 0.1, x0 + 0.1, 0, 0.75, d, yd, col(0x9c5b3e));
        }
      }
      // --- wheelie bins in the yard (or on the pavement when there is no yard)
      if (hrng() < 0.33) {
        const ydp = yardAt(winX);
        const bz = ydp > 1.2 ? d + 0.55 : ydp + PAVE * 0.5 + 0.05;
        const bc = BIN_COLOURS[binIdx++ % 3];
        const bp = F.p(winX + hrng.range(-0.4, 0.4), 0, bz);
        wheelieBin(props, bp[0], bp[2], Math.atan2(F.tz, F.tx) + hrng.range(-0.25, 0.25), col(bc), ydp > 1.2 ? 0 : 0.14);
      }
      // --- scaffolding on one Dalton terrace (north end, west side)
      if (key === 'dalton' && side === track.edges.dalton.baySide && seg.s > 222 && scaffoldDone.n < 3) {
        scaffoldDone.n++;
        scaffold(props, F, x0, x1, d, H);
      }
      // --- rear garden behind the house: fences, patio, lawn, the odd shed
      if (!isShop && !quality.low) rearGarden(F, x0, x1, bi.ring, u === units - 1, hrng);
    }
    // --- chimney stacks on the party walls
    const info = roofInfo[seg.bi];
    if (info) {
      for (let u = 1; u <= units; u++) {
        if (u === units && units > 1) break;
        const bx = units === 1 ? len * 0.5 : u * w;
        const wp = F.p(bx, 0, 0);
        let sx, sz, sy;
        if (info.flat) { sx = wp[0] - F.nx * 2.5; sz = wp[2] - F.nz * 2.5; sy = info.H + info.rh * 0.6; }
        else {
          const uu = wp[0] * info.ux + wp[2] * info.uz;
          const pr = info.P(clamp(uu, info.mnU + 0.4, info.mxU - 0.4), info.mid, 0);
          const al = Math.abs(info.ux * F.tx + info.uz * F.tz);
          if (al < 0.8) continue;
          sx = pr[0]; sz = pr[2]; sy = info.H + info.rh;
        }
        chimney(sx, sz, sy, Math.atan2(F.tz, F.tx), makeRng(77 + houseCount + u));
      }
    }
  }

  // background buildings: a few chimneys so the skyline isn't bald
  roofInfo.forEach((info, i) => {
    if (!info || info.flat || facadeSegs.some((s) => s.bi === i)) return;
    walls = wallsFar;
    for (let uu = info.mnU + 2.4; uu < info.mxU - 1; uu += 9.5) { const p = info.P(uu, info.mid, 0); chimney(p[0], p[2], info.H + info.rh, Math.atan2(info.uz, info.ux), makeRng(i * 13 + uu)); }
  });
  walls = wallsNear;

  function chimney(x, z, ridgeY, h, r) {
    const F = frameH(x, z, h);
    const brickC = col(r.pick([0x8e4a36, 0x9c5b3e, 0x7f4434, 0xa25f45]));
    const top = ridgeY + 0.95 + r() * 0.25;
    walls.shade = (xx, y) => (y < ridgeY ? 0.75 : 1);
    walls.box(F, -0.32, 0.32, ridgeY - 0.6, top, -0.48, 0.48, brickC, 'fblrt');
    walls.shade = null;
    det.box(F, -0.38, 0.38, top, top + 0.12, -0.54, 0.54, brickC.clone().multiplyScalar(0.85), 'fblrt');      // corbel cap
    const pots = quality.low && walls === wallsFar ? 0 : r.int(2, 4);
    for (let k = 0; k < pots; k++) {
      const pz = -0.36 + (k + 0.5) * (0.72 / pots), pp = F.p(0, 0, pz);
      const potC = col(r.pick([0xb5653f, 0xc27a4c, 0xa95a3a, 0xc9b28a]));
      det.cyl(pp[0], pp[2], top + 0.12, top + 0.5 + r() * 0.2, 0.12, 0.095, 6, potC);
    }
  }
  function sashPanes(F, x0, x1, y0, y1, z, mode, r) {
    // mode 1: one-over-one; 2: two-over-two; 3: shop window (big panes)
    const fr = 0.075, rail = 0.06;
    const ym = (y0 + y1) / 2 + 0.03;
    const rows = mode === 3 ? [[y0 + fr, y1 - fr]] : [[y0 + fr, ym - rail / 2], [ym + rail / 2, y1 - fr]];
    const cols = mode === 2 && x1 - x0 > 0.7 ? 2 : mode === 3 ? Math.max(2, Math.round((x1 - x0) / 1.1)) : 1;
    const net = r() < 0.35;
    rows.forEach(([ya, yb], ri) => {
      for (let c = 0; c < cols; c++) {
        const xa = x0 + fr + c * ((x1 - x0 - 2 * fr) / cols) + (c ? 0.022 : 0), xb = x0 + fr + (c + 1) * ((x1 - x0 - 2 * fr) / cols) - (c < cols - 1 ? 0.022 : 0);
        const gc = col(mode === 3 ? 0xf2dfa8 : ri === 0 && net ? 0xcfccc2 : r.pick(GLASS));     // shop windows read as lit
        glass.shade = (x, y) => (y > yb - 0.05 ? 1.55 : 1);
        glass.box(F, xa, xb, ya, yb, z - 0.01, z, gc, 'f');
        glass.shade = null;
      }
    });
  }
  function splitAround(a, bnd, cuts) {
    const res = []; let s = a;
    for (const [c0, c1] of cuts.sort((p, q) => p[0] - q[0])) { if (c0 > s) res.push([s, Math.min(c0, bnd)]); s = Math.max(s, c1); }
    if (s < bnd) res.push([s, bnd]);
    return res.filter(([p, q]) => q - p > 0.05);
  }
  function picketRun(G, F, xa, xb, hgt) {
    const white = col(0xf2f1ec);
    for (let x = xa + 0.04; x < xb - 0.03; x += quality.low ? 0.24 : 0.16) G.box(F, x, x + 0.075, 0.05, hgt - 0.05 + ((x * 7) % 1 > 0.5 ? 0.02 : 0), -0.02, 0.02, white, 'fbt');
    for (const y of [0.25, hgt - 0.25]) G.box(F, xa, xb, y, y + 0.07, -0.05, -0.02, white, 'fbt');
  }
  /** Lean-to slate canopy against the facade: x range, z from wall (zw) to front (zf), eaves y0 at the front, y1 at the wall. */
  function leanTo(F, xa, xb, zw, zf, y0, y1, trimC) {
    const capC = col(0x5a6069), uL = (xb - xa) / 2.6;
    roofs.quad(F.p(xa, y0, zf), F.p(xb, y0, zf), F.p(xb, y1, zw), F.p(xa, y1, zw), capC, [0, 0, uL, 0, uL, 0.25, 0, 0.25]);
    roofs.quad(F.p(xa, y0 - 0.12, zf), F.p(xa, y0 - 0.12, zw), F.p(xb, y0 - 0.12, zw), F.p(xb, y0 - 0.12, zf), col(0x2c2d30), [0, 0, 0, 0, 0, 0, 0, 0]);   // soffit
    det.box(F, xa, xb, y0 - 0.16, y0 + 0.02, zf - 0.03, zf + 0.02, trimC, 'fblrt');                    // fascia board
    for (const [x, sgn] of [[xa, -1], [xb, 1]]) {       // solid cheeks back to the wall
      const P0 = F.p(x, y0 - 0.16, zw), P1 = F.p(x, y0 - 0.16, zf), P2 = F.p(x, y0 + 0.02, zf), P3 = F.p(x, y1 + 0.02, zw);
      if (sgn < 0) det.quad(P0, P1, P2, P3, trimC); else det.quad(P1, P0, P3, P2, trimC);
    }
  }
  function shopSign(F, len, d) {
    const L = Math.max(2.4, len - 0.3);
    shopSigns.push({ F, x0: (len - L) / 2, x1: (len + L) / 2, d });
    det.box(F, 0.05, len - 0.05, 2.5, 3.05, d, d + 0.14, col(0x23664a), 'fblrt');
    det.box(F, 0.0, len, 3.05, 3.14, d, d + 0.22, col(0xf3f1ea), 'fblrt');
    // striped awning over the windows
    roofs.quad(F.p(0.3, 2.35, d + 1.0), F.p(len - 0.3, 2.35, d + 1.0), F.p(len - 0.3, 2.48, d + 0.15), F.p(0.3, 2.48, d + 0.15), col(0x2f7a4b), [0, 0, 0, 0, 0, 0, 0, 0]);
  }
  function rearGarden(F, x0, x1, ring, last, r) {
    const xm = (x0 + x1) / 2;
    let depthB = 0.2;
    while (depthB < 20) { const p = F.p(xm, 0, -depthB); if (!pointInRing(p[0], p[2], ring)) break; depthB += 0.4; }
    let hit = null;
    for (let t = 0.6; t < 32; t += 0.6) {
      const p = F.p(xm, 0, -(depthB + t));
      if (inBuilding(p[0], p[2]) || sdf.sample(p[0], p[2]) > -PAVE - 0.3 || inCtx(p[0], p[2])) { hit = t; break; }
    }
    const gd = hit === null ? 11 : Math.min(14, hit / 2 - 0.1);
    if (gd < 2.2 || depthB >= 20) return;
    const z0 = -depthB + 0.05, z1 = -(depthB + gd);
    const timber = col(r.pick([0x7a5b3e, 0x8a6a48, 0x6b5440, 0x94754f]));
    const lawn = col(r.pick([0x6f9653, 0x7a9d58, 0x668d4c, 0x83a35e])), patio = col(r.pick([0xa9a49a, 0xb7ad9c, 0x9c968c]));
    const pz = Math.max(z1 + 0.5, z0 - 1.8);
    props.quad(F.p(x0, 0.006, z0), F.p(x1, 0.006, z0), F.p(x1, 0.006, pz), F.p(x0, 0.006, pz), patio);
    props.quad(F.p(x0, 0.006, pz), F.p(x1, 0.006, pz), F.p(x1, 0.006, z1), F.p(x0, 0.006, z1), lawn);
    props.shade = (x, y) => (y < 0.05 ? 0.7 : 1);
    const fh = 1.6 + r() * 0.2;
    for (const fx of last ? [x0, x1] : [x0]) props.box(F, fx - 0.03, fx + 0.03, 0, fh, z1, z0, timber, 'lrt');
    props.box(F, x0, x1, 0, fh, z1 - 0.03, z1 + 0.03, timber, 'fbt');
    props.shade = null;
    if (r() < 0.35 && x1 - x0 > 3) {       // shed in the far corner
      const sx0 = r() < 0.5 ? x0 + 0.15 : x1 - 2.05, sc = col(r.pick([0x4f6b4a, 0x7b5a3c, 0x5d6d73, 0x8c6c48]));
      props.box(F, sx0, sx0 + 1.9, 0, 1.95, z1 + 0.1, z1 + 1.7, sc, 'fblr');
      roofs.quad(F.p(sx0 - 0.1, 1.95, z1 + 1.8), F.p(sx0 + 2.0, 1.95, z1 + 1.8), F.p(sx0 + 2.0, 2.2, z1), F.p(sx0 - 0.1, 2.2, z1), col(0x3c3f44), [0, 0, 0.8, 0, 0.8, 0.7, 0, 0.7]);
    }
  }
  function fenceRun(F, xa, xb, y0 = 0, hgt = 1.75) {      // close-boarded timber fence, posts every 1.8 m
    const t1 = col(0x8a6a48), t2 = col(0x765a3d);
    props.shade = (x, y) => (y < y0 + 0.1 ? 0.7 : 1);
    props.box(F, xa, xb, y0, y0 + hgt, -0.03, 0.03, t1, 'fblrt');
    props.shade = null;
    if (!quality.low) for (let x = xa; x < xb; x += 0.14) props.box(F, x, x + 0.02, y0 + 0.02, y0 + hgt - 0.02, 0.03, 0.045, t2, 'f');
    for (let x = xa; x <= xb + 0.01; x += 1.8) props.box(F, x - 0.05, x + 0.05, y0, y0 + hgt + 0.08, -0.07, 0.07, t2, 'fblrt');
    props.box(F, xa, xb, y0 + hgt - 0.02, y0 + hgt + 0.04, -0.05, 0.05, t2, 'fbt');
  }
  function wheelieBin(G, x, z, h, c, y0 = 0) {
    const F = frameH(x, z, h);
    G.box(F, -0.28, 0.28, y0, y0 + 0.95, -0.3, 0.3, c, 'fblrt');
    G.box(F, -0.31, 0.31, y0 + 0.95, y0 + 1.02, -0.36, 0.33, c.clone().multiplyScalar(0.75), 'fblrt');
    G.box(F, -0.3, 0.3, y0 + 0.02, y0 + 0.2, -0.37, -0.3, col(0x18191b), 'fblrt');   // wheels/axle
    blobs.push({ x, z, h, l: 0.9, w: 0.9, a: 0.6 });
  }
  function scaffold(G, F, x0, x1, d, H) {
    const pole = col(0x9aa1a8), board = col(0xb48b55), top = H + 0.9;
    for (let x = x0 + 0.2; x <= x1 - 0.1; x += 1.9) for (const z of [d + 0.35, d + 1.25]) G.box(F, x - 0.03, x + 0.03, 0, top, z - 0.03, z + 0.03, pole, 'fblr');
    for (const y of [2.0, 4.0, H + 0.2]) {
      for (const z of [d + 0.35, d + 1.25]) G.box(F, x0, x1, y + 0.9, y + 0.95, z - 0.03, z + 0.03, pole, 'fbtu');
      G.box(F, x0, x1, y - 0.05, y + 0.02, d + 0.3, d + 1.3, board, 'fbtu');
      G.box(F, x0, x1, y + 0.02, y + 0.2, d + 1.28, d + 1.32, board, 'fbt');     // toe board
    }
    for (let x = x0 + 0.2; x < x1 - 1.8; x += 3.8) {    // diagonal brace
      G.quad(F.p(x, 0.1, d + 1.34), F.p(x + 1.9, 3.8, d + 1.34), F.p(x + 1.9, 3.88, d + 1.34), F.p(x, 0.18, d + 1.34), pole);
    }
  }

  // ------------------------------------------------------------ boundaries along the back of the pavement
  const railStep = quality.low ? 0.26 : 0.14;
  const hedgeC = [col(0x3f6b3a), col(0x4a7a41), col(0x35592f), col(0x456f3b)];
  const churchTrees = [];
  {
    const brickW = col(0x9c5b3e), brickW2 = col(0xa8563c), coping = col(0xc2bcae), iron = col(0x1c1d20), timber = col(0x8a6a48), timber2 = col(0x9b7a52);
    for (const p of map.pave) {
      for (const ringRaw of [p.outer, ...p.holes]) {
        const ring = ringRaw.map((q) => ({ x: q[0], z: -q[1] }));
        const rr = makeRng(ring.length * 17 + 3);
        let style = null, runLeft = 0;
        for (let i = 0; i < ring.length; i++) {
          const a = ring[i], c = ring[(i + 1) % ring.length];
          const len = Math.hypot(c.x - a.x, c.z - a.z);
          if (len < 0.3) continue;
          const mx = (a.x + c.x) / 2, mz = (a.z + c.z) / 2;
          if (sdf.sample(mx, mz) > -1.2) continue;        // this edge is the kerb, not the back of the pavement
          const g = sdf.grad(mx, mz), ox = -g.x, oz = -g.z;  // away from the road
          const tx = (c.x - a.x) / len, tz = (c.z - a.z) / len, hd = Math.atan2(tz, tx);
          const n = Math.max(1, Math.round(len / 1.2)), pl = len / n;
          for (let k = 0; k < n; k++) {
            const px = a.x + tx * (k + 0.5) * pl, pz = a.z + tz * (k + 0.5) * pl;
            if (inBuilding(px + ox * 0.4, pz + oz * 0.4) || inBuilding(px + ox * 1.1, pz + oz * 1.1)) { runLeft = 0; continue; }
            if (inCtx(px + ox * 0.8, pz + oz * 0.8) || accessPts.some((q) => Math.hypot(q.x - px, q.z - pz) < 4.2)) continue;
            if (px < b.minX + 2 || px > b.maxX - 2 || pz < b.minZ + 2 || pz > b.maxZ - 2) continue;
            const l = track.locate(px, pz), sd = Math.sign(l.lat) || 1;
            const key = streetKey(l.dist < 12 ? l.edge : null);
            if (l.edge.id === 'dalton' && sd === -l.edge.baySide && forecourtAt('dalton', sd, l.s)) {
              // close-boarded timber fence flanking the forecourt only at its ends
              continue;
            }
            // setpieces: Church St junction (photo 2) and the flush fronts of Bernard St (photo 6)
            let zone = null;
            if (l.edge.id === 'church' && sd === l.edge.baySide && l.s < 34) zone = l.s < 11 ? 'railtall' : Math.abs(l.s - 21) < 0.9 ? 'gate' : 'gardenwall';
            else if ((l.edge.id === 'church' && sd !== l.edge.baySide && l.s < 16) || (l.edge.id === 'grangeBC' && sd !== l.edge.baySide && l.s > l.edge.len - 16)) zone = 'fence';
            else if (l.edge.id === 'bernard' && l.s < 165) zone = 'none';
            if (zone === 'none') continue;
            runLeft -= pl;
            if (zone) { style = zone; runLeft = 0; } else if (runLeft <= 0 || ['railtall', 'gate', 'gardenwall'].includes(style)) {
              const pal = PALETTES[key];
              let f = pal.front;
              if (key === 'church' && sd !== l.edge.baySide && l.s > 18 && l.s < l.edge.len - 8) f = 'hedge';
              else if (key === 'church' && l.s < 30 && sd !== l.edge.baySide) f = 'fence';              // close-boarded fence on the corner
              else if (key === 'church' && l.s < 30) f = 'railwall';
              else if (key === 'dalton' && sd === -l.edge.baySide) f = rr() < 0.5 ? 'wall' : 'fence';
              if (f === 'mixed') f = rr.pick(['wall', 'wall', 'hedge', 'railwall', 'fence']);
              if (f === 'railwall' && rr() < 0.25) f = 'wall';
              if (key === 'grange' && rr() < 0.3) f = 'hedge';
              style = f; runLeft = rr.range(6, 14);
            }
            const F = frameH(px, pz, hd);
            const flip = (ox * -Math.sin(hd) + oz * Math.cos(hd)) < 0 ? -1 : 1;    // +z of F should point away from the road
            const Z = (zz) => zz * flip;
            const zr = (z0, z1) => (flip > 0 ? [z0, z1] : [-z1, -z0]);
            const hw = pl / 2 + 0.01;
            if (!zone && rr() < 0.07 && style !== 'hedge') continue;          // a gateway
            if (style === 'gardenwall' || style === 'railtall') {      // long brick garden wall with piers; railings on a dwarf wall near the corner
              const top = style === 'gardenwall' ? 1.75 : 0.62;
              props.shade = (x, y) => (y < 0.05 ? 0.65 : 1);
              props.box(F, -hw, hw, 0.13, top, ...zr(0.02, 0.3), brickW2, 'fblr');
              props.shade = null;
              props.box(F, -hw - 0.01, hw + 0.01, top, top + 0.08, ...zr(-0.02, 0.34), coping, 'fblrt');
              if (style === 'railtall') {
                props.box(F, -hw, hw, 1.62, 1.67, ...zr(0.14, 0.18), iron, 'fbt');
                for (let q = -hw + 0.06; q < hw; q += railStep) props.box(F, q - 0.013, q + 0.013, top + 0.08, 1.78, ...zr(0.145, 0.175), iron, 'fb');
              }
              if (Math.abs(((l.s % 2.6) + 2.6) % 2.6 - 1.3) < pl / 2) props.box(F, -0.22, 0.22, 0.13, (style === 'gardenwall' ? 1.75 : 1.85) + 0.12, ...zr(-0.03, 0.36), brickW, 'fblrt');   // pier
            } else if (style === 'gate') {
              props.box(F, -hw, hw, 0.13, 1.8, ...zr(0.1, 0.16), col(0x6e4a32), 'fblrt');
              for (let q = -hw; q < hw; q += 0.12) props.box(F, q, q + 0.02, 0.16, 1.78, ...zr(0.06, 0.1), col(0x5c3d29), 'fb');
            } else if (style === 'wall') {
              props.shade = (x, y) => (y < 0.05 ? 0.65 : 1);
              props.box(F, -hw, hw, 0.13, 0.85, ...zr(0.02, 0.24), rr() < 0.5 ? brickW : brickW2, 'fblr');
              props.shade = null;
              props.box(F, -hw - 0.01, hw + 0.01, 0.85, 0.93, ...zr(-0.02, 0.28), coping, 'fblrt');
            } else if (style === 'railwall') {
              props.box(F, -hw, hw, 0.13, 0.5, ...zr(0.02, 0.24), brickW2, 'fblr');
              props.box(F, -hw - 0.01, hw + 0.01, 0.5, 0.56, ...zr(0, 0.26), coping, 'fblrt');
              props.box(F, -hw, hw, 1.12, 1.16, ...zr(0.11, 0.15), iron, 'fbt');
              for (let q = -hw + 0.06; q < hw; q += railStep) { props.box(F, q - 0.012, q + 0.012, 0.56, 1.22, ...zr(0.115, 0.145), iron, 'fb'); }
            } else if (style === 'picket') {
              picketRun(props, frame(px - tx * hw + ox * 0.12, pz - tz * hw + oz * 0.12, tx, tz), 0, 2 * hw, 1.0);
              props.box(F, -hw, hw, 0.13, 0.3, ...zr(0.02, 0.24), brickW2, 'fblrt');
            } else if (style === 'fence') {
              props.box(F, -hw, hw, 0.13, 1.8, ...zr(0.04, 0.1), rr() < 0.5 ? timber : timber2, 'fblrt');
              if (!quality.low) for (let q = -hw; q < hw; q += 0.15) props.box(F, q, q + 0.02, 0.15, 1.78, ...zr(0.0, 0.04), timber.clone().multiplyScalar(0.8), flip > 0 ? 'b' : 'f');
              props.box(F, -0.05, 0.05, 0.13, 1.9, ...zr(0.0, 0.14), timber.clone().multiplyScalar(0.7), 'fblrt');
            } else {     // hedge, chunky and a bit lumpy
              const hc = rr.pick(hedgeC), hh = (key === 'church' ? 1.7 : 1.1) + rr() * 0.3;
              props.shade = (x, y) => (y < 0.3 ? 0.6 : y > hh ? 1.12 : 1);
              props.box(F, -hw - 0.05, hw + 0.05, 0.1, hh, ...zr(0.05, 0.85), hc, 'fblrt');
              props.box(F, -hw * 0.7, hw * 0.7, hh, hh + 0.18, ...zr(0.15, 0.75), hc.clone().multiplyScalar(1.08), 'fblrt');
              props.shade = null;
              if (key === 'church' && rr() < 0.42 && !churchTrees.some((t) => Math.hypot(t.x - px, t.z - pz) < 6)) {
                churchTrees.push({ x: px + ox * 1.6, z: pz + oz * 1.6, s: rr.range(1.35, 1.8), lean: { x: -ox * 1.4, z: -oz * 1.4 } });
              }
            }
          }
        }
      }
    }
    for (const w of map.walls) {
      for (let i = 0; i < w.length - 1; i++) {
        const a = { x: w[i][0], z: -w[i][1] }, c = { x: w[i + 1][0], z: -w[i + 1][1] };
        const len = Math.hypot(c.x - a.x, c.z - a.z);
        if (len > 0.3) props.boxH(len, 1.5, 0.25, (a.x + c.x) / 2, 0.75, (a.z + c.z) / 2, Math.atan2(c.z - a.z, c.x - a.x), col(0x94583f));
      }
    }
  }

  // ------------------------------------------------------------ Dalton St forecourt: block paving, fence, cars
  const blockGeo = new GB(0.5);
  const decoCars = [];
  for (const f of track.forecourts || []) {
    const e = track.edges[f.edgeId];
    const pts = [];
    for (let s = f.s0; s <= f.s1 + 0.01; s += 1) {
      let depth = 0.2;
      while (depth < 9) { const p = e.path.offsetAt(s, f.side * (e.hw + PAVE + depth + 0.4)); if (inBuilding(p.x, p.z)) break; depth += 0.4; }
      pts.push({ s, d: Math.min(depth, 9) });
    }
    for (let i = 0; i < pts.length - 1; i++) {
      const A = pts[i], C = pts[i + 1];
      const lat0 = f.side * (e.hw + 0.01);
      const a0 = e.path.offsetAt(A.s, lat0), c0 = e.path.offsetAt(C.s, lat0);
      const a1 = e.path.offsetAt(A.s, f.side * (e.hw + PAVE + A.d)), c1 = e.path.offsetAt(C.s, f.side * (e.hw + PAVE + C.d));
      const q = [[a0.x, 0.146, a0.z], [c0.x, 0.146, c0.z], [c1.x, 0.146, c1.z], [a1.x, 0.146, a1.z]];
      if (f.side > 0) blockGeo.quad(q[0], q[1], q[2], q[3], col(0xffffff)); else blockGeo.quad(q[3], q[2], q[1], q[0], col(0xffffff));
    }
    // timber fences down both ends
    for (const s of [f.s0, f.s1]) {
      const p0 = e.path.offsetAt(s, f.side * (e.hw + PAVE + 0.1));
      const dd = pts[s === f.s0 ? 0 : pts.length - 1].d;
      const p1 = e.path.offsetAt(s, f.side * (e.hw + PAVE + dd));
      const L = Math.hypot(p1.x - p0.x, p1.z - p0.z);
      fenceRun(frame(p0.x, p0.z, (p1.x - p0.x) / L, (p1.z - p0.z) / L), 0, L, 0.14);
    }
    // cars nose-in on the forecourt
    const fr = makeRng(4242);
    for (let s = f.s0 + 2.0; s < f.s1 - 1.5; s += 2.9) {
      const dd = pts[Math.round(s - f.s0)].d;
      if (dd < 4.6 || fr() < 0.2) continue;
      const type = fr.pick(['hatch', 'hatch', 'suv', 'mini', 'estate']);
      const p = e.path.offsetAt(s, f.side * (e.hw + PAVE + Math.min(dd, 6) - CAR_TYPES[type].len / 2 - 0.4 + 1.2));
      decoCars.push({ type, colour: fr.pick([0x1f3a63, 0x2d3036, 0x8d9299, 0xe9ebee, 0x9c2f2f]), x: p.x, z: p.z, h: p.h + Math.PI / 2 * f.side + fr.range(-0.06, 0.06), y: 0.146 });
    }
  }
  if (shopSigns.length) {
    const tex = canvasTex(1024, 128, (g, w, h) => {
      g.fillStyle = '#1d4a35'; g.fillRect(0, 0, w, h); g.fillStyle = '#f3f1ea'; g.font = 'bold 70px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('NEWS  ·  FOOD  ·  WINE', w / 2, h / 2 + 4);
    }, false);
    const sg = new GB(); sg.uv = []; sg.us = 1;
    for (const sh of shopSigns) sg.quad(sh.F.p(sh.x0, 2.53, sh.d + 0.145), sh.F.p(sh.x1, 2.53, sh.d + 0.145), sh.F.p(sh.x1, 3.02, sh.d + 0.145), sh.F.p(sh.x0, 3.02, sh.d + 0.145), col(0xffffff), [0, 0, 1, 0, 1, 1, 0, 1]);
    sg.mesh(scene, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }), false, true);
  }
  if (blockGeo.count) blockGeo.mesh(scene, new THREE.MeshStandardMaterial({ map: blockPave, vertexColors: true, roughness: 0.95, side: THREE.DoubleSide }), false, true);

  // ------------------------------------------------------------ street furniture along the streets
  const poleC = col(0x3a3f45), woodC = col(0x6e5640), bollardC = col(0x1b1c1e);
  for (const e of Object.values(track.edges)) {
    if (e.id.startsWith('catherine') || e.id === 'bernardS') continue;
    const side = e.baySide ? -e.baySide : 1;
    for (let s = 14; s < e.len - 8; s += 37) {          // streetlights (modern column, lantern head) on the non-parking side
      const p = e.path.offsetAt(s, side * (e.hw + 0.4));
      const inx = side * p.tz, inz = -side * p.tx;      // towards the road
      props.cyl(p.x, p.z, 0.14, 6.0, 0.09, 0.06, 8, poleC);
      props.boxH(0.08, 0.08, 1.2, p.x + inx * 0.55, 5.95, p.z + inz * 0.55, p.h, poleC);
      props.boxH(0.42, 0.14, 0.62, p.x + inx * 1.15, 5.9, p.z + inz * 1.15, p.h, poleC);
      props.boxH(0.36, 0.03, 0.54, p.x + inx * 1.15, 5.82, p.z + inz * 1.15, p.h, col(0xfff3c8), 'fblrtu');
      blobs.push({ x: p.x, z: p.z, h: p.h, l: 0.7, w: 0.7, a: 0.5 });
    }
  }
  // telegraph poles + overhead wires (Dalton, Bernard, Grange as in the photos)
  for (const [id, step] of [['dalton', 34], ['bernard', 38], ['grangeBC', 40], ['grangeAB', 40], ['church', 45]]) {
    const e = track.edges[id]; if (!e) continue;
    const side = id === 'dalton' ? e.baySide : -e.baySide;
    let prev = null;
    for (let s = 20; s < e.len - 10; s += step) {
      const p = e.path.offsetAt(s, side * (e.hw + 0.3));
      props.cyl(p.x, p.z, 0.14, 8.6, 0.13, 0.1, 7, woodC);
      props.boxH(1.1, 0.1, 0.1, p.x, 8.2, p.z, p.h + Math.PI / 2, woodC);
      blobs.push({ x: p.x, z: p.z, h: p.h, l: 0.8, w: 0.8, a: 0.5 });
      const top = [p.x, 8.25, p.z];
      if (prev) sag(prev, top, 0.35);
      // drops to houses on both sides
      for (const ds of [-1, 1]) {
        const q = e.path.offsetAt(s + ds * 6, -side * (e.hw + PAVE + 0.8));
        sag(top, [q.x, 5.4, q.z], 0.25);
        const q2 = e.path.offsetAt(s + ds * 9, side * (e.hw + PAVE + 0.6));
        sag(top, [q2.x, 5.4, q2.z], 0.15);
      }
      prev = top;
    }
  }
  function sag(a, c, amt) {
    const n = 6;
    for (let i = 0; i < n; i++) {
      const t0 = i / n, t1 = (i + 1) / n;
      const P = (t) => [a[0] + (c[0] - a[0]) * t, a[1] + (c[1] - a[1]) * t - Math.sin(Math.PI * t) * amt, a[2] + (c[2] - a[2]) * t];
      wires.push(P(t0), P(t1));
    }
  }
  // short black bollards: Bernard St kerb opposite the bays, and the north end of Dalton St
  const bollard = (x, z) => {
    props.cyl(x, z, 0.12, 0.95, 0.075, 0.07, 8, bollardC);
    props.cyl(x, z, 0.95, 1.0, 0.085, 0.05, 8, bollardC);
    props.cyl(x, z, 0.8, 0.85, 0.078, 0.078, 8, col(0xc9a24a), false);
    blobs.push({ x, z, h: 0, l: 0.45, w: 0.45, a: 0.5 });
  };
  {
    const e = track.edges.bernard;
    if (e) for (let s = 110; s < e.len - 14; s += 3.6) { const p = e.path.offsetAt(s, -e.baySide * (e.hw + 0.32)); bollard(p.x, p.z); }
    const d = track.edges.dalton;
    if (d) for (let s = d.len - 32; s < d.len - 12; s += 4) { const p = d.path.offsetAt(s, -d.baySide * (d.hw + 0.32)); bollard(p.x, p.z); }
  }
  // bins out on the pavement at the north end of Dalton St (bin day)
  {
    const d = track.edges.dalton;
    if (d) {
      const br = makeRng(66);
      for (let s = d.len - 60; s < d.len - 14; s += br.range(3, 7)) {
        const p = d.path.offsetAt(s, d.baySide * (d.hw + PAVE - 0.4));
        wheelieBin(props, p.x, p.z, p.h + br.range(-0.3, 0.3), col(BIN_COLOURS[binIdx++ % 3]), 0.14);
      }
    }
  }
  // speed cushions (real ones, from OSM)
  for (const c of track.cushions) {
    props.boxH(3.4, 0.09, 1.9, c.x, 0.06, c.z, c.h, col(0x8c3f36));
    for (const k of [-1, 1]) props.boxH(0.5, 0.1, 1.1, c.x + Math.cos(c.h) * 1.2 * k, 0.065, c.z + Math.sin(c.h) * 1.2 * k, c.h, col(0xe9e6dd));
  }
  // block-paved speed table on Church St (photo 1)
  {
    const e = track.edges.church;
    if (e) {
      let s = 146;
      while (track.bays.some((bay) => bay.edgeId === 'church' && Math.abs(bay.s - s) < bay.len / 2 + 3)) s += 2;
      const F = frameH(e.path.at(s).x, e.path.at(s).z, e.path.at(s).h);
      const tab = new GB(0.9);
      const hw = e.hw - 0.02, top = 0.075;
      tab.quad(F.p(-1.6, top, hw), F.p(1.6, top, hw), F.p(1.6, top, -hw), F.p(-1.6, top, -hw), col(0xffffff));
      tab.quad(F.p(-2.4, 0.022, hw), F.p(-1.6, top, hw), F.p(-1.6, top, -hw), F.p(-2.4, 0.022, -hw), col(0xd8d8d8));
      tab.quad(F.p(1.6, top, hw), F.p(2.4, 0.022, hw), F.p(2.4, 0.022, -hw), F.p(1.6, top, -hw), col(0xd8d8d8));
      tab.mesh(scene, new THREE.MeshStandardMaterial({ map: blockPave, vertexColors: true, roughness: 0.95 }), false, true);
    }
  }
  // barriers closing the course
  const closedTex = textTexture('ROAD CLOSED · PARKING PANIC IN PROGRESS', '#ffffff', '#c8102e', 1024, 96, 52);
  for (const br of track.barriers) {
    const wdt = br.wid - 2.2;
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, wdt), [0, 1, 2, 3, 4, 5].map((i) => new THREE.MeshStandardMaterial({ color: 0xffffff, map: i < 2 ? closedTex : null, roughness: 0.6 })));
    m.position.set(br.x, 0.95, br.z); m.rotation.y = -br.h; m.castShadow = true; scene.add(m);
    for (const k of [-1, 1]) props.boxH(0.1, 1.3, 0.1, br.x - Math.sin(br.h) * k * (wdt / 2 - 0.2), 0.65, br.z + Math.cos(br.h) * k * (wdt / 2 - 0.2), br.h, col(0xdadada));
    for (let k = -2; k <= 2; k++) {
      const cx = br.x - Math.cos(br.h) * 1.2 - Math.sin(br.h) * k * 1.3, cz = br.z - Math.sin(br.h) * 1.2 + Math.cos(br.h) * k * 1.3;
      props.cyl(cx, cz, 0.04, 0.62, 0.2, 0.02, 8, col(0xff6a13));
      props.boxH(0.42, 0.04, 0.42, cx, 0.04, cz, br.h, col(0xff6a13));
    }
  }

  // ------------------------------------------------------------ road markings (worn paint, world-space UVs)
  const marks = new GB(0.35);
  const white = col(0xeeece4), yellowC = col(0xe2ad1c);
  const strip = (pts, width, colour, y = 0.035) => {             // pts: [{x,z}] polyline, flat ribbon
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], c = pts[i + 1];
      const l = Math.hypot(c.x - a.x, c.z - a.z) || 1, nx = -(c.z - a.z) / l * width / 2, nz = (c.x - a.x) / l * width / 2;
      marks.quad([a.x + nx, y, a.z + nz], [c.x + nx, y, c.z + nz], [c.x - nx, y, c.z - nz], [a.x - nx, y, a.z - nz], colour);
    }
  };
  // continuous dashed bay line along every parking stretch (as in the photos), ticks at competition bay ends
  for (const run of track.parkingRuns || []) {
    const e = track.edges[run.edgeId];
    if (run.kerb) continue;          // pavement parking on Church St: no markings
    const lat = run.side * (e.hw - run.wid - 0.05);
    for (let s = run.s0; s < run.s1 - 0.4; s += 1.6) strip([e.path.offsetAt(s, lat), e.path.offsetAt(Math.min(run.s1, s + 0.8), lat)], 0.1, white);
  }
  for (const bay of track.bays) {
    const e = track.edges[bay.edgeId];
    for (const ds of [-1, 1]) {
      const s = bay.s + ds * (bay.len / 2 + 0.2);
      strip([e.path.offsetAt(s, bay.side * (e.hw - bay.wid - 0.05)), e.path.offsetAt(s, bay.side * (e.hw - 0.15))], 0.1, white);
    }
  }
  for (const dw of track.driveways) {
    const e = track.edges[dw.edgeId];
    const edgeLat = dw.side * (e.hw - 1.0);
    const p0 = e.path.offsetAt(dw.s - dw.len / 2, edgeLat), p1 = e.path.offsetAt(dw.s + dw.len / 2, edgeLat);
    strip([p0, p1], 0.12, white);
    for (const p of [p0, p1]) { const t = e.path.at(dw.s); strip([{ x: p.x - t.tz * 0.3, z: p.z + t.tx * 0.3 }, { x: p.x + t.tz * 0.3, z: p.z - t.tx * 0.3 }], 0.12, white); }
    // dropped kerb + driveway slab across the pavement
    const c0 = e.path.offsetAt(dw.s, dw.side * (e.hw + 0.75));
    props.boxH(dw.len - 1.2, 0.03, 1.56, c0.x, 0.142, c0.z, c0.h, col(0x8f9094));
    const g0 = e.path.offsetAt(dw.s, dw.side * (e.hw + 1.62));
    props.boxH(dw.len - 1.6, 1.25, 0.08, g0.x, 0.76, g0.z, g0.h, col(0x2f3d36));     // gates
    for (const k of [-1, 1]) props.boxH(0.3, 1.45, 0.3, g0.x + Math.cos(g0.h) * k * (dw.len / 2 - 0.65), 0.72, g0.z + Math.sin(g0.h) * k * (dw.len / 2 - 0.65), g0.h, col(0x9c5b3e));
  }
  // give-way dashes where Bernard St meets Grange St, and at the Catherine St end of Dalton St
  for (const [id, s] of [['bernard', track.edges.bernard.len - 4.2], ['dalton', 5.5]]) {
    const e = track.edges[id];
    for (let k = -3; k <= 3; k++) { if (Math.abs(k * 0.9) > e.hw - 0.4) continue; const p = e.path.offsetAt(s, k * 0.9 - 0.3), q = e.path.offsetAt(s, k * 0.9 + 0.3); strip([p, q], 0.2, white); }
  }
  for (const y of track.yellow) {
    const e = track.edges[y.edgeId];
    if (y.s1 - y.s0 < 1) continue;
    for (const inset of y.single ? [0.25] : [0.2, 0.42]) {
      const pts = [];
      for (let s = y.s0; s < y.s1; s += 2) pts.push(e.path.offsetAt(s, y.side * (e.hw - inset)));
      pts.push(e.path.offsetAt(y.s1, y.side * (e.hw - inset)));
      strip(pts, 0.09, yellowC, 0.033);
    }
  }
  for (const k of cornerKerbs) for (const inset of [0.2, 0.42]) {
    const A = { x: k.a.x + k.gr.x * inset, z: k.a.z + k.gr.z * inset }, C = { x: k.c.x + k.gr.x * inset, z: k.c.z + k.gr.z * inset };
    strip([A, C], 0.09, yellowC, 0.033); strip([C, A], 0.09, yellowC, 0.033);
  }
  marks.mesh(scene, new THREE.MeshStandardMaterial({ map: wearTex, vertexColors: true, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), false, true);
  // painted flow arrows + 20 roundels
  {
    const arrowTex = canvasTex(64, 256, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.fillStyle = '#eeece4';
      g.beginPath(); g.moveTo(32, 6); g.lineTo(60, 90); g.lineTo(40, 90); g.lineTo(40, 250); g.lineTo(24, 250); g.lineTo(24, 90); g.lineTo(4, 90); g.closePath(); g.fill();
      g.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(0,0,0,${texRng() * 0.6})`; g.fillRect(texRng() * w, texRng() * h, 2, 2); }
    }, false);
    const twentyTex = canvasTex(128, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.strokeStyle = '#eeece4'; g.lineWidth = 9; g.beginPath(); g.ellipse(64, 64, 54, 54, 0, 0, 7); g.stroke();
      g.fillStyle = '#eeece4'; g.font = 'bold 62px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('20', 64, 68);
      g.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(0,0,0,${texRng() * 0.6})`; g.fillRect(texRng() * w, texRng() * h, 2, 2); }
    }, false);
    const decal = (tex, w, l, list) => {
      const pos = [], uv = [];
      for (const dd of list) {
        const c = Math.cos(dd.h), s = Math.sin(dd.h);
        const P = (f, r) => [dd.x + c * f - s * r, 0.04, dd.z + s * f + c * r];
        const q = [P(-l / 2, -w / 2), P(-l / 2, w / 2), P(l / 2, w / 2), P(l / 2, -w / 2)];
        pos.push(...q[0], ...q[1], ...q[2], ...q[0], ...q[2], ...q[3]);
        uv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals();
      const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.8, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
      m.receiveShadow = true; scene.add(m);
    };
    const arrows = [], twenties = [];
    for (const e of Object.values(track.edges)) {
      if (!e.circuit) continue;
      for (let s = 20; s < e.len - 14; s += 46) { const p = e.path.offsetAt(s, e.laneOff); arrows.push({ x: p.x, z: p.z, h: p.h }); }
      if (e.len > 60) { const p = e.path.offsetAt(13, e.laneOff); twenties.push({ x: p.x, z: p.z, h: p.h }); }
    }
    decal(arrowTex, 0.9, 3.6, arrows);
    decal(twentyTex, 2.0, 2.0, twenties);
  }

  // ------------------------------------------------------------ signs
  const signPost = (x, z, top = 2.4) => props.cyl(x, z, 0.1, top, 0.04, 0.04, 6, col(0x70757b));
  const nameTex = {};
  const nameSign = (e, s, side) => {
    const p = e.path.offsetAt(s, side * (e.hw + 1.1));
    const name = e.name.toUpperCase();
    nameTex[name] ||= canvasTex(512, 112, (g, w, h) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h); g.strokeStyle = '#111'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10);
      g.fillStyle = '#111'; g.font = 'bold 58px "Arial Narrow", Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(name, w / 2, 50);
      g.font = '20px Arial'; g.fillStyle = '#1d5c3a'; g.fillText('CITY AND DISTRICT OF ST ALBANS', w / 2, 92);
    }, false);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.37), new THREE.MeshStandardMaterial({ map: nameTex[name], roughness: 0.6, side: THREE.DoubleSide }));
    m.position.set(p.x, 0.95, p.z); m.rotation.y = -p.h + (side > 0 ? Math.PI : 0); scene.add(m);     // plate normal points at the carriageway
    for (const k of [-0.7, 0.7]) props.boxH(0.06, 1.15, 0.06, p.x + Math.cos(p.h) * k, 0.57, p.z + Math.sin(p.h) * k, p.h, col(0x1c1d20));
  };
  const signMat = {};
  const roundSign = (tex, e, s, side, faceAlong, y = 2.25, post = true, shape = 'circle') => {
    const p = e.path.offsetAt(s, side * (e.hw + 0.5));
    const geo = shape === 'circle' ? new THREE.CircleGeometry(0.34, 24) : new THREE.PlaneGeometry(0.5, 0.62);
    const m = new THREE.Mesh(geo, signMat[tex.id] ||= new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, side: THREE.DoubleSide }));
    m.position.set(p.x, y, p.z); m.rotation.y = -p.h + (faceAlong ? -Math.PI / 2 : Math.PI / 2); scene.add(m);
    if (post) signPost(p.x - Math.cos(p.h) * 0.04 * (faceAlong ? -1 : 1), p.z - Math.sin(p.h) * 0.04 * (faceAlong ? -1 : 1), y + 0.3);
  };
  const noEntry = canvasTex(128, 128, (g) => { g.fillStyle = '#c8102e'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.fillStyle = '#fff'; g.fillRect(20, 50, 88, 28); }, false);
  const zone20 = canvasTex(128, 128, (g) => { g.fillStyle = '#fff'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.strokeStyle = '#c8102e'; g.lineWidth = 14; g.beginPath(); g.arc(64, 64, 54, 0, 7); g.stroke(); g.fillStyle = '#111'; g.font = 'bold 58px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('20', 64, 68); }, false);
  const oneWay = canvasTex(128, 160, (g) => {      // rectangular blue one-way sign, white arrow pointing ahead
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 160); g.fillStyle = '#1e5aa8'; g.fillRect(6, 6, 116, 148);
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(64, 18); g.lineTo(104, 70); g.lineTo(78, 70); g.lineTo(78, 142); g.lineTo(50, 142); g.lineTo(50, 70); g.lineTo(24, 70); g.closePath(); g.fill();
  }, false);
  for (const e of Object.values(track.edges)) {
    if (e.id.startsWith('catherine') || e.id === 'bernardS') continue;
    const side = e.baySide ? -e.baySide : 1;
    nameSign(e, Math.min(11, e.len * 0.3), side);
    if (e.len > 90) nameSign(e, e.len - 11, side);
    if (e.realOneway) {
      // one-way above a 20 on the same post (Church St junction, photo 2)
      roundSign(oneWay, e, 4.5, side, true, 2.75, true, 'rect');
      if (e.circuit && e.len > 60) roundSign(zone20, e, 4.5, side, true, 2.1, false);
      for (const sd of [-1, 1]) roundSign(noEntry, e, e.len - 6.5, sd, false);   // you may not drive in from this end
    } else if (e.circuit && e.len > 60) roundSign(zone20, e, 9, side, true);
  }

  // ------------------------------------------------------------ trees
  {
    const spots = [];
    for (const t of churchTrees) spots.push({ x: t.x, z: t.z, s: t.s, lx: t.lean.x, lz: t.lean.z });
    let tries = 0;
    while (spots.length < (quality.low ? 70 : 130) + churchTrees.length && tries++ < 6000) {
      const x = rng.range(b.minX + 4, b.maxX - 4), z = rng.range(b.minZ + 4, b.maxZ - 4);
      const dd = sdf.sample(x, z);
      if (dd > -3.2) continue;
      if (inBuilding(x, z) || inBuilding(x + 2, z) || inBuilding(x - 2, z) || inBuilding(x, z + 2) || inBuilding(x, z - 2) || inCtx(x, z)) continue;
      if (spots.some((s) => Math.hypot(s.x - x, s.z - z) < 5)) continue;
      spots.push({ x, z, s: rng.range(0.75, 1.5), lx: 0, lz: 0 });
    }
    // the tree at the far end of Dalton St
    { const d = track.edges.dalton; if (d) { const p = d.path.offsetAt(d.len + 8, 0); if (!inBuilding(p.x, p.z)) spots.push({ x: p.x + 6, z: p.z - 4, s: 1.5, lx: 0, lz: 0 }); } }
    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.26, 2.6, 6); trunkGeo.translate(0, 1.3, 0);
    const trunk = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x5b4332, roughness: 1 }), spots.length);
    const leafGeo = new THREE.IcosahedronGeometry(1.7, 1);
    {   // darker underneath, lighter on top
      const pos = leafGeo.attributes.position, cArr = new Float32Array(pos.count * 3);
      for (let i = 0; i < pos.count; i++) { const f = 0.62 + 0.5 * clamp((pos.getY(i) + 1.7) / 3.4, 0, 1); cArr[i * 3] = cArr[i * 3 + 1] = cArr[i * 3 + 2] = f; }
      leafGeo.setAttribute('color', new THREE.BufferAttribute(cArr, 3));
    }
    const leafMat = new THREE.MeshStandardMaterial({ roughness: 0.95, flatShading: true, vertexColors: true });
    const per = 3;
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, spots.length * per);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
    const greens = [0x4f8a3c, 0x5d9a45, 0x3f7534, 0x6aa24d, 0x7f9f45, 0x4a7f3a];
    spots.forEach((s, i) => {
      m4.compose(new THREE.Vector3(s.x, 0, s.z), q.identity(), new THREE.Vector3(s.s, s.s, s.s)); trunk.setMatrixAt(i, m4);
      const g = rng.pick(greens);
      for (let k = 0; k < per; k++) {
        const sc = s.s * (k === 0 ? 1.05 : 0.78);
        const ox = k === 0 ? s.lx * 0.5 : s.lx + rng.range(-1.1, 1.1) * s.s, oz = k === 0 ? s.lz * 0.5 : s.lz + rng.range(-1.1, 1.1) * s.s;
        m4.compose(new THREE.Vector3(s.x + ox, (k === 0 ? 3.6 : 4.4 + rng() * 0.8) * s.s, s.z + oz), q.setFromEuler(new THREE.Euler(rng() * 3, rng() * 3, 0)), new THREE.Vector3(sc * 1.1, sc * 0.85, sc * 1.1));
        leaves.setMatrixAt(i * per + k, m4); leaves.setColorAt(i * per + k, c.set(g).multiplyScalar(k ? 1.1 : 0.95));
      }
      blobs.push({ x: s.x, z: s.z, h: 0, l: 1.4 * s.s, w: 1.4 * s.s, a: 0.5 });
    });
    trunk.castShadow = !quality.low; leaves.castShadow = !quality.low; leaves.receiveShadow = true;
    scene.add(trunk, leaves);
  }

  // ------------------------------------------------------------ merged static meshes
  walls = wallsNear;
  const brickMat = new THREE.MeshStandardMaterial({ map: brick, vertexColors: true, roughness: 0.92 });
  wallsNear.mesh(scene, brickMat); wallsFar.mesh(scene, brickMat, false, true);
  render.mesh(scene, new THREE.MeshStandardMaterial({ map: renderTex, vertexColors: true, roughness: 0.88 }));
  const slateMat = new THREE.MeshStandardMaterial({ map: slate, vertexColors: true, roughness: 0.75, side: THREE.DoubleSide });
  roofsNear.mesh(scene, slateMat); roofsFar.mesh(scene, slateMat, false, true);
  det.mesh(scene, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }), !quality.low, true);
  glass.mesh(scene, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.12, metalness: 0.3 }), false, false);
  props.mesh(scene, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }), !quality.low, true);
  {
    const g = new THREE.BufferGeometry();
    const pos = []; for (const p of wires) pos.push(...p);
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0x1d1e20, transparent: true, opacity: 0.75 })));
  }

  // ------------------------------------------------------------ resident parked cars (one draw call) + contact shadows
  {
    // Chunked by 48 m cells; each chunk is a THREE.LOD: full cars near the camera, the ~140-triangle version beyond 40 m.
    // quality.low: low-poly everywhere, no LOD switching.
    const carGeo = (p, lod) => {
      const o = lod ? { lod: 'low' } : {};
      if (!p.roll) { const g = parkedCarGeometry(p.type, p.colour, p.x, p.z, p.h, o); if (p.y) g.translate(0, p.y, 0); return g; }
      const g = parkedCarGeometry(p.type, p.colour, 0, 0, 0, o);       // two wheels up on the kerb
      g.applyMatrix4(new THREE.Matrix4().makeRotationX(p.roll)); g.translate(0, 0.075, 0);
      g.applyMatrix4(new THREE.Matrix4().makeRotationY(-p.h)); g.translate(p.x, 0, p.z);
      return g;
    };
    const all = [...track.parked, ...decoCars];
    for (const dc of decoCars) blobs.push({ x: dc.x, z: dc.z, h: dc.h, l: CAR_TYPES[dc.type].len + 0.3, w: CAR_TYPES[dc.type].wid + 0.3, a: 0.85, y: dc.y });
    const cells = new Map();
    for (const p of all) { const k = Math.floor(p.x / 48) + ',' + Math.floor(p.z / 48); (cells.get(k) || cells.set(k, []).get(k)).push(p); }
    for (const list of cells.values()) {
      const cx = list.reduce((a, p) => a + p.x, 0) / list.length, cz = list.reduce((a, p) => a + p.z, 0) / list.length;
      const mk = (lod) => { const g = mergeGeometries(list.map((p) => carGeo(p, lod))); g.translate(-cx, 0, -cz); const m = new THREE.Mesh(g, carMaterial); m.castShadow = true; m.receiveShadow = true; return m; };
      if (quality.low) { const m = mk(true); m.position.set(cx, 0, cz); scene.add(m); continue; }
      const lodObj = new THREE.LOD(); lodObj.position.set(cx, 0, cz);
      lodObj.addLevel(mk(false), 0); lodObj.addLevel(mk(true), 40);
      scene.add(lodObj);
    }
    for (const p of track.parked) { const sp = CAR_TYPES[p.type]; blobs.push({ x: p.x, z: p.z, h: p.h, l: sp.len + 0.35, w: sp.wid + 0.35, a: 0.9 }); }
  }
  // decals: soft contact shadows (one mesh) + gradient AO strips at wall feet and in the gutters (one mesh)
  {
    const pos = [], uv = [];
    for (const s of blobs) {
      const c = Math.cos(s.h), sn = Math.sin(s.h), y = (s.y || 0) + 0.045 + (sdf.sample(s.x, s.z) < 0 && !s.y ? 0.1 : 0);
      const P = (f, r) => [s.x + c * f - sn * r, y, s.z + sn * f + c * r];
      const q = [P(-s.l / 2, -s.w / 2), P(s.l / 2, -s.w / 2), P(s.l / 2, s.w / 2), P(-s.l / 2, s.w / 2)];
      pos.push(...q[0], ...q[2], ...q[1], ...q[0], ...q[3], ...q[2]);
      uv.push(0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(pos.length).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
    m.renderOrder = 1; scene.add(m);
  }
  {
    // AO at the foot of every building wall (on the ground / yard / pavement)
    for (const ring of bInfo.map((x) => x.ring)) {
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], c = ring[(i + 1) % ring.length];
        const len = Math.hypot(c.x - a.x, c.z - a.z); if (len < 0.3) continue;
        let nx = -(c.z - a.z) / len, nz = (c.x - a.x) / len;
        if (pointInRing((a.x + c.x) / 2 + nx * 0.2, (a.z + c.z) / 2 + nz * 0.2, ring)) { nx = -nx; nz = -nz; }
        const mx = (a.x + c.x) / 2 + nx * 0.4, mz = (a.z + c.z) / 2 + nz * 0.4;
        const y = sdf.sample(mx, mz) > -PAVE - 0.1 && sdf.sample(mx, mz) < 0 ? 0.15 : 0.03;
        const o = 0.75;
        grime.push([[c.x, y, c.z], [a.x, y, a.z], [a.x + nx * o, y, a.z + nz * o], [c.x + nx * o, y, c.z + nz * o], 1]);
      }
    }
    const pos = [], uv = [], colArr = [];
    for (const [a, c, d2, e2, k] of grime) {
      for (const p of [a, c, d2, a, d2, e2]) pos.push(...p);
      uv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
      for (let i = 0; i < 6; i++) colArr.push(k, k, k);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv.map((v, i) => (i % 2 ? v : 0.5)), 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(colArr, 3));
    const mat = new THREE.MeshBasicMaterial({ map: gradTex, transparent: true, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    mat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n diffuseColor.a *= vColor.r; diffuseColor.rgb = vec3(0.0);'); };
    mat.vertexColors = true;
    const m = new THREE.Mesh(g, mat); m.renderOrder = 1; scene.add(m);
  }

  // ------------------------------------------------------------ per-bay props (state driven)
  const coneGeo = (() => {
    const c = new THREE.ConeGeometry(0.17, 0.55, 10); c.translate(0, 0.3, 0);
    const band = new THREE.CylinderGeometry(0.105, 0.135, 0.12, 10); band.translate(0, 0.3, 0);
    const base = new THREE.BoxGeometry(0.4, 0.04, 0.4); base.translate(0, 0.03, 0);
    return mergeGeometries([paintGeo(c, col(0xff6a13)), paintGeo(band, col(0xffffff)), paintGeo(base, col(0xff6a13))]);
  })();
  const coneMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 });
  const suspendedTex = canvasTex(256, 320, (g, w, h) => {
    g.fillStyle = '#f6d21c'; g.fillRect(0, 0, w, h); g.strokeStyle = '#111'; g.lineWidth = 10; g.strokeRect(8, 8, w - 16, h - 16);
    g.fillStyle = '#111'; g.textAlign = 'center'; g.font = 'bold 44px Arial'; g.fillText('PARKING', w / 2, 70); g.fillText('SUSPENDED', w / 2, 122);
    g.font = 'bold 150px Arial'; g.fillText('P', w / 2, 262); g.strokeStyle = '#c8102e'; g.lineWidth = 16; g.beginPath(); g.moveTo(60, 290); g.lineTo(196, 150); g.stroke();
  }, false);
  const permitTex = canvasTex(256, 320, (g, w, h) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h); g.strokeStyle = '#c8102e'; g.lineWidth = 12; g.strokeRect(8, 8, w - 16, h - 16);
    g.fillStyle = '#c8102e'; g.textAlign = 'center'; g.font = 'bold 46px Arial'; g.fillText('PERMIT', w / 2, 78); g.fillText('HOLDERS', w / 2, 130); g.fillText('ONLY', w / 2, 182);
    g.fillStyle = '#111'; g.font = 'bold 54px Arial'; g.fillText('ZONE B', w / 2, 262);
  }, false);
  const pTex = canvasTex(128, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h); g.fillStyle = '#ffffff'; g.beginPath(); g.roundRect(8, 8, 112, 112, 22); g.fill();
    g.fillStyle = '#1560d4'; g.beginPath(); g.roundRect(16, 16, 96, 96, 16); g.fill();
    g.fillStyle = '#fff'; g.font = 'bold 86px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('P', 64, 68);
  }, false);
  const glowGeo = new THREE.PlaneGeometry(1, 1); glowGeo.rotateX(-Math.PI / 2);
  const beamGeo = new THREE.CylinderGeometry(0.5, 0.9, 7, 14, 1, true);
  // shared materials (one per colour state) instead of one per bay
  const boardGeo = (() => {          // sign board + its leg in one geometry (leg samples the black border of the texture)
    const b = new THREE.PlaneGeometry(0.62, 0.78); b.translate(0, 1.15, 0);
    const l = new THREE.BoxGeometry(0.05, 0.8, 0.05); l.translate(0, 0.4, -0.01);
    const uv = l.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.05, 0.05);
    return mergeGeometries([b.toNonIndexed(), l.toNonIndexed()]);
  })();
  const permitGeo = (() => {
    const b = new THREE.PlaneGeometry(0.9, 1.12); b.translate(0, 1.6, 0);
    const l = new THREE.BoxGeometry(0.07, 1.1, 0.07); l.translate(0, 0.55, -0.02);
    const uv = l.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.02, 0.02);
    return mergeGeometries([b.toNonIndexed(), l.toNonIndexed()]);
  })();
  const boardMat = new THREE.MeshStandardMaterial({ map: suspendedTex, roughness: 0.6, side: THREE.DoubleSide });
  const permitMat = new THREE.MeshStandardMaterial({ map: permitTex, roughness: 0.6, side: THREE.DoubleSide });
  const glowMats = {}, beamMats = {};
  const glowMat = (c) => (glowMats[c] ||= new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.4, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
  const beamMat = (c, mine) => (beamMats[c + (mine ? 'm' : '')] ||= new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: mine ? 0.17 : 0.09, side: THREE.DoubleSide, depthWrite: false }));
  const markerMats = [false, true].map((perfect) => new THREE.SpriteMaterial({ map: pTex, transparent: true, depthTest: false, color: perfect ? 0xffe27a : 0xffffff }));
  // council worker in hi-vis (bay "tell": this bay is about to open)
  const workerGeo = (() => {
    const G = new GB(), F = frameH(0, 0, 0);
    const navy = col(0x1f2a44), vis = col(0xd9ef1c), band = col(0xd8dde0), skin = col(0xe0b08c), hat = col(0xf2f2ee), boots = col(0x1b1b1d);
    for (const z of [-0.12, 0.12]) { G.box(F, -0.09, 0.09, 0, 0.1, z - 0.08, z + 0.08, boots, 'fblrt'); G.box(F, -0.07, 0.07, 0.1, 0.85, z - 0.07, z + 0.07, navy, 'fblr'); }
    G.box(F, -0.13, 0.13, 0.85, 1.45, -0.22, 0.22, vis, 'fblrt');
    for (const y of [1.0, 1.2]) G.box(F, -0.135, 0.135, y, y + 0.05, -0.225, 0.225, band, 'fblr');
    for (const z of [-0.29, 0.29]) G.box(F, -0.05, 0.25, 1.05, 1.42, z - 0.06, z + 0.06, vis, 'fblrt');      // arms reaching forward
    G.box(F, -0.1, 0.1, 1.48, 1.7, -0.1, 0.1, skin, 'fblrt');
    G.box(F, -0.14, 0.14, 1.7, 1.8, -0.14, 0.14, hat, 'fblrt');
    G.box(F, 0.1, 0.2, 1.7, 1.73, -0.12, 0.12, hat, 'fblrt');
    return G.geometry();
  })();
  const workerMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 });
  const conePos = (bay) => [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, -1]].map(([fx, fz]) => [fx * (bay.len / 2 - 0.5), fz * -bay.side * 0.75]);
  const m4 = new THREE.Matrix4(), qq = new THREE.Quaternion(), eul = new THREE.Euler(), v1 = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  const setCones = (p, bay, t, tell) => {
    conePos(bay).forEach(([x, z], i) => {
      const wob = tell > 0 ? Math.sin(t * (13 + i * 2.3) + i * 1.7) * 0.16 * tell : 0;
      eul.set(wob, 0, wob * 0.7); qq.setFromEuler(eul);
      const lifted = tell > 0 && i === 4;       // the worker has this one
      m4.compose(v1.set(x, 0.02, z), qq, lifted ? v1.clone().set(0, 0, 0) : one);
      p.cones.setMatrixAt(i, m4);
    });
    p.cones.instanceMatrix.needsUpdate = true;
  };
  for (const bay of track.bays) {
    const grp = new THREE.Group();
    grp.position.set(bay.x, 0, bay.z); grp.rotation.y = -bay.h;
    // cones (one instanced draw) + suspended sign
    const cones = new THREE.InstancedMesh(coneGeo, coneMat, 5);
    cones.castShadow = !quality.low;
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(0, 0, bay.side * 0.55); board.rotation.y = bay.side > 0 ? Math.PI : 0;
    const conesGrp = new THREE.Group(); conesGrp.add(cones, board);
    const permit = new THREE.Mesh(permitGeo, permitMat);
    permit.position.set(0, 0, bay.side * 0.5); permit.rotation.y = bay.side > 0 ? Math.PI : 0;
    // glowing floor + floating P
    const glow = new THREE.Mesh(glowGeo, glowMat(0x35e06a));
    glow.scale.set(bay.len, 1, bay.wid - 0.1); glow.position.y = 0.045;
    const marker = new THREE.Sprite(markerMats[0]);
    marker.scale.set(1.6, 1.6, 1); marker.position.y = 4;
    const beam = new THREE.Mesh(beamGeo, beamMat(0x35e06a, false));
    beam.position.y = 3.5;
    // resident's car (closed state): one merged mesh
    const sp = CAR_TYPES[bay.resident.type];
    const resident = new THREE.Mesh(parkedCarGeometry(bay.resident.type, bay.resident.colour, 0, 0, 0, quality.low ? { lod: 'low' } : {}), carMaterial);
    resident.position.set(bay.resident.x, 0, bay.resident.z); resident.rotation.y = -bay.resident.h;
    resident.castShadow = true; resident.receiveShadow = true;
    blobs2.push({ x: bay.resident.x, z: bay.resident.z, h: bay.resident.h, l: sp.len + 0.35, w: sp.wid + 0.35 });
    scene.add(resident);
    grp.add(conesGrp, permit, glow, marker, beam);
    scene.add(grp);
    const p = { grp, cones, conesGrp, permit, glow, marker, beam, resident, worker: null, state: null, pop: 0, tell: 0 };
    setCones(p, bay, 0, 0);
    out.bayProps.set(bay.id, p);
  }
  function makeWorker(bay, p) {
    const w = new THREE.Group();
    const body = new THREE.Mesh(workerGeo, workerMat); body.castShadow = !quality.low;
    const carried = new THREE.Mesh(coneGeo, coneMat);
    w.add(body, carried);
    // stands at the kerb end of the bay, facing along it
    w.position.set(-(bay.len / 2 - 0.2), 0, bay.side * 0.35);
    p.grp.add(w);
    return { w, body, carried };
  }

  /** Reflect bay state changes and animate the indicators. */
  out.update = (t, dt, phase, hint = null, player = null) => {
    const pulse = 0.3 + 0.18 * Math.sin(t * 6);
    for (const c in glowMats) glowMats[c].opacity = +c === 0x7a8894 ? 0.18 : pulse;
    for (const bay of track.bays) {
      const p = out.bayProps.get(bay.id);
      const key = bay.state + (bay.occupant ? '+occ' : '') + (bay.perfect ? '+perfect' : '');
      if (p.state !== key) {
        if (p.state && p.state.startsWith('coned') && bay.state === 'open') p.pop = 1;
        p.state = key;
        p.resident.visible = bay.state === 'closed';
        p.conesGrp.visible = bay.state === 'coned';
        p.permit.visible = bay.state === 'permit';
      }
      // "tell": a council worker in hi-vis turns up and starts lifting a cone, the others wobble
      const tell = bay.state === 'coned' ? clamp(bay.tell || 0, 0, 1) : 0;
      if (tell > 0.02 || p.tell > 0) {
        if (tell > 0.02 && !p.worker) p.worker = makeWorker(bay, p);
        if (p.worker) {
          p.worker.w.visible = tell > 0.02;
          const lift = clamp(tell * 1.4, 0, 1), bob = Math.sin(t * 9) * 0.04 * tell;
          p.worker.carried.position.set(0.42, 0.25 + lift * 0.95 + bob, 0);
          p.worker.carried.rotation.z = -0.5 * lift;
          p.worker.body.rotation.z = -0.12 * lift;
        }
        setCones(p, bay, t, tell);
        p.tell = tell;
      }
      const live = (bay.state === 'open' || bay.state === 'blocked') && !bay.occupant;
      const showGlow = live || bay.state === 'permit' || (bay.state === 'open' && bay.occupant);
      // close to the player the HUD target marker takes over: the floating P shrinks away and the beam fades out
      const near = player ? Math.hypot(player.x - bay.x, player.z - bay.z) : 99;
      const fade = clamp((near - 12) / 13, 0, 1);
      p.glow.visible = showGlow; p.marker.visible = live && bay.state === 'open' && fade > 0.02; p.beam.visible = live && bay.state === 'open' && fade > 0.05;
      if (showGlow) {
        const colour = bay.state === 'permit' ? 0xff3344 : bay.state === 'blocked' ? 0xffa51e : bay.occupant ? 0x7a8894 : bay.perfect ? 0xffd23c : 0x35e06a;
        const mine = bay === hint && !bay.occupant;                 // the space the player is first in the queue for
        p.glow.material = glowMat(colour); p.beam.material = beamMat(colour, mine);
        const sc = (bay.perfect ? 2.0 : mine ? 2.0 + 0.2 * Math.sin(t * 8) : 1.5) * (1 + p.pop * 0.8) * (0.35 + 0.65 * fade);
        p.marker.position.y = (2.4 + 1.2 * fade) + Math.sin(t * 3 + bay.id) * 0.3 * fade + p.pop * 2;
        p.beam.scale.set(mine ? 1.3 : 1, (mine ? 1.2 : 1) * Math.max(0.05, fade), mine ? 1.3 : 1);
        p.beam.position.y = 3.5 * Math.max(0.05, fade) * (mine ? 1.2 : 1);
        p.marker.scale.set(sc, sc, 1);
        p.marker.material = markerMats[bay.perfect ? 1 : 0];
      }
      p.pop = Math.max(0, p.pop - dt * 2.5);
    }
  };
  // contact shadows under the bays' resident cars (one mesh; they read as oil-stained bays when the car has gone)
  {
    const pos = [], uv = [];
    for (const s of blobs2) {
      const c = Math.cos(s.h), sn = Math.sin(s.h);
      const P = (f, r) => [s.x + c * f - sn * r, 0.046, s.z + sn * f + c * r];
      const q = [P(-s.l / 2, -s.w / 2), P(s.l / 2, -s.w / 2), P(s.l / 2, s.w / 2), P(-s.l / 2, s.w / 2)];
      pos.push(...q[0], ...q[2], ...q[1], ...q[0], ...q[3], ...q[2]);
      uv.push(0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
    m.renderOrder = 1; scene.add(m);
  }
  return out;
}

function paintGeo(geo, colour) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = colour.r; arr[i * 3 + 1] = colour.g; arr[i * 3 + 2] = colour.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  return g;
}

/** Sky dome (overcast-but-bright English morning), sun, sky fill and distant haze. */
export function buildSky(scene, renderer, quality) {
  const rng = makeRng(31);
  const skyTex = canvasTex(1024, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h / 2);
    gr.addColorStop(0, '#6f97c6'); gr.addColorStop(0.5, '#93b3d6'); gr.addColorStop(0.85, '#c9d6e2'); gr.addColorStop(1, '#e2e7ea');
    g.fillStyle = gr; g.fillRect(0, 0, w, h / 2);
    g.fillStyle = '#d6dbdc'; g.fillRect(0, h / 2, w, h / 2);
    // soft stratocumulus: lots of flattened gradient puffs, denser and greyer towards the horizon
    for (let i = 0; i < 34; i++) {          // cloud banks: clusters of puffs with grey undersides, blue gaps between
      const cy = h * 0.47 - Math.pow(rng(), 0.8) * h * 0.38, cx = rng() * w;
      const sc = 0.35 + 0.65 * (1 - (h * 0.5 - cy) / (h * 0.5));
      for (let k = 0; k < 9; k++) {
        const x = cx + (rng() - 0.5) * 120 * sc, y = cy + (rng() - 0.6) * 22 * sc;
        const r = (12 + rng() * 26) * sc;
        const shade = Math.floor(236 + rng() * 19), a = 0.35 + rng() * 0.35;
        for (const ox of [0, -w, w]) {
          const cg = g.createRadialGradient(x + ox, y - r * 0.3, 0, x + ox, y, r * 1.6);
          cg.addColorStop(0, `rgba(${shade},${shade},${shade + 3},${a})`); cg.addColorStop(0.55, `rgba(${shade - 18},${shade - 15},${shade - 10},${a * 0.6})`); cg.addColorStop(1, 'rgba(205,212,222,0)');
          g.save(); g.translate(x + ox, y); g.scale(1, 0.45); g.translate(-(x + ox), -y);
          g.fillStyle = cg; g.fillRect(x + ox - r * 1.6, y - r * 1.6, r * 3.2, r * 3.2); g.restore();
        }
      }
    }
  }, false);
  skyTex.wrapS = THREE.RepeatWrapping;
  const skyGeo = new THREE.SphereGeometry(900, 32, 16);
  const sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.renderOrder = -1;
  scene.add(sky);
  scene.background = new THREE.Color(0xd6dbdc);
  scene.fog = new THREE.Fog(0xd9dfe2, 120, 560);
  const hemi = new THREE.HemisphereLight(0xdfe9f5, 0x8a8170, 1.55);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.05);
  const SUN = new THREE.Vector3(62, 88, 40);          // morning sun from the south-east, fairly high
  sun.position.copy(SUN);
  sun.castShadow = !quality.noShadows;
  const sz = quality.low ? 1024 : 2048;
  sun.shadow.mapSize.set(sz, sz);
  const sc = sun.shadow.camera; sc.left = -62; sc.right = 62; sc.top = 62; sc.bottom = -62; sc.near = 10; sc.far = 300;
  sun.shadow.bias = -0.00035; sun.shadow.normalBias = 0.035;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight(0xc9d8f0, 0.35);    // soft bounce from the opposite side so shaded facades keep their form
  fill.position.set(-50, 40, -60);
  scene.add(fill, fill.target);
  return {
    sky, sun,
    follow(x, z) {
      sun.position.set(x + SUN.x, SUN.y, z + SUN.z); sun.target.position.set(x, 0, z);
      fill.position.set(x - 50, 40, z - 60); fill.target.position.set(x, 0, z);
      sky.position.set(x, 0, z);
    },
  };
}
