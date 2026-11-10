// Builds the static 3D neighbourhood from the OSM-derived map data:
// ground, carriageway, pavements + kerbs, terraced houses, garden walls, trees,
// street furniture, road markings, signs, resident parked cars and bay props.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeRng, pointInRing, clamp } from './util.js';
import { parkedCarGeometry, carMaterial, createCarMesh, textTexture } from './carmodels.js';
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
function noiseFill(g, w, h, base, spread, n, rng) {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) {
    const v = Math.floor(128 + (rng() - 0.5) * spread);
    g.fillStyle = `rgba(${v},${v},${v},0.12)`;
    g.fillRect(rng() * w, rng() * h, 1 + rng() * 3, 1 + rng() * 3);
  }
}

function paintGeo(geo, colour) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = colour.r; arr[i * 3 + 1] = colour.g; arr[i * 3 + 2] = colour.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  return g;
}
/** Box with its local +X along `h` (world heading), positioned at x,y,z (y = centre). */
function boxAt(w, hgt, d, x, y, z, h, colour) {
  const g = new THREE.BoxGeometry(w, hgt, d);
  g.rotateY(-h); g.translate(x, y, z);
  return paintGeo(g, colour);
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

export function buildWorld(scene, track, quality) {
  const map = track.map, rng = makeRng(90210);
  const out = { bayProps: new Map(), update: null };
  const texRng = makeRng(7);

  // ------------------------------------------------------------ textures
  const tarmac = canvasTex(256, 256, (g, w, h) => noiseFill(g, w, h, '#4a4d52', 110, 5000, texRng));
  const paving = canvasTex(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#b9b7b0', 60, 2500, texRng);
    g.strokeStyle = 'rgba(70,70,66,0.5)'; g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); }
    for (let r = 0; r < 4; r++) for (let i = 0; i < 2; i++) { const x = i * 128 + (r % 2) * 64; g.beginPath(); g.moveTo(x, r * 64); g.lineTo(x, r * 64 + 64); g.stroke(); }
  });
  const grass = canvasTex(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#7d9a63', 90, 6000, texRng);
    for (let i = 0; i < 900; i++) { g.fillStyle = texRng() < 0.5 ? 'rgba(60,95,45,0.25)' : 'rgba(150,175,95,0.2)'; g.fillRect(texRng() * w, texRng() * h, 2, 5); }
  });
  const brick = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#d9d2c8'; g.fillRect(0, 0, w, h);
    const bh = 16, bw = 43;
    for (let r = 0; r < h / bh; r++) for (let c = -1; c < w / bw + 1; c++) {
      const v = 200 + Math.floor(texRng() * 55);
      g.fillStyle = `rgb(${v},${v - 6},${v - 12})`;
      g.fillRect(c * bw + (r % 2) * bw / 2 + 1.5, r * bh + 1.5, bw - 3, bh - 3);
    }
  });
  const slate = canvasTex(128, 128, (g, w, h) => {
    noiseFill(g, w, h, '#565c66', 50, 800, texRng);
    g.strokeStyle = 'rgba(20,22,28,0.45)'; g.lineWidth = 2;
    for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(0, i * 16); g.lineTo(w, i * 16); g.stroke(); }
  });

  // ------------------------------------------------------------ ground + roads
  const b = track.bounds;
  const groundGeo = new THREE.PlaneGeometry(1400, 1400); groundGeo.rotateX(-Math.PI / 2);
  grass.repeat.set(280, 280);
  const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ map: grass, roughness: 1 }));
  ground.position.set((b.minX + b.maxX) / 2, -0.02, (b.minZ + b.maxZ) / 2); ground.receiveShadow = true;
  scene.add(ground);

  const addFlat = (polys, y, mat, uvScale, shadow = true) => {
    const g = flatGeometry(polys, y, uvScale);
    if (!g) return null;
    const m = new THREE.Mesh(g, mat); m.receiveShadow = shadow; scene.add(m); return m;
  };
  addFlat(map.areas.filter((a) => a.kind === 'park'), 0.0, new THREE.MeshStandardMaterial({ color: 0x6fa857, roughness: 1 }), 1);
  addFlat(map.areas.filter((a) => a.kind === 'carpark'), 0.004, new THREE.MeshStandardMaterial({ map: tarmac, color: 0xb9b9b9, roughness: 0.95 }), 0.25);
  addFlat(map.context, 0.008, new THREE.MeshStandardMaterial({ map: tarmac, color: 0xcfcfcf, roughness: 0.95 }), 0.25);
  addFlat(map.footways, 0.012, new THREE.MeshStandardMaterial({ map: paving, color: 0xd8d4cc, roughness: 1 }), 0.5);
  addFlat(map.road, 0.02, new THREE.MeshStandardMaterial({ map: tarmac, roughness: 0.92 }), 0.25);

  // pavements, extruded so the kerb is a real step
  {
    const geos = map.pave.map((p) => {
      const g = new THREE.ExtrudeGeometry(shapeFromPoly(p), { depth: 0.14, bevelEnabled: false });
      const uv = g.attributes.uv, pos = g.attributes.position, nor = g.attributes.normal;
      for (let i = 0; i < uv.count; i++) {
        if (Math.abs(nor.getZ(i)) > 0.5) uv.setXY(i, pos.getX(i) * 0.5, pos.getY(i) * 0.5);
        else uv.setXY(i, (pos.getX(i) + pos.getY(i)) * 0.5, pos.getZ(i) * 0.5);
      }
      g.rotateX(-Math.PI / 2);
      return g;
    });
    const m = new THREE.Mesh(mergeGeometries(geos), new THREE.MeshStandardMaterial({ map: paving, roughness: 0.95 }));
    m.receiveShadow = true; scene.add(m);
  }

  // ------------------------------------------------------------ buildings
  const wallGeos = [], roofGeos = [], detailGeos = [];
  const BRICKS = [0xa8563c, 0x9c5b3e, 0xb26a44, 0x8e4f3b, 0xc7a46c, 0xbf9a62, 0xa8563c, 0x9c5b3e, 0xe9e3d2, 0xd9d4c8, 0xcfd6d8];
  const DOORS = [0x1f3a5f, 0x8c1c24, 0x1f4d3a, 0x17181b, 0xe0b23a, 0x2d6f7a, 0x5a2a5e, 0x24303c];
  const buildingRings = [];
  const sdf = track.sdf;

  const pushQuad = (arr, uvArr, a, bq, c, d, uv) => {   // a,b,c,d counter-clockwise, each [x,y,z]
    arr.push(...a, ...bq, ...c, ...a, ...c, ...d);
    if (uvArr) uvArr.push(uv[0], uv[1], uv[2], uv[1], uv[2], uv[3], uv[0], uv[1], uv[2], uv[3], uv[0], uv[3]);
  };

  for (const bd of map.buildings) {
    let ring = bd.p.map((p) => ({ x: p[0], z: -p[1] }));
    // ensure counter-clockwise in (x, z) so outward normals are consistent
    let area = 0;
    for (let i = 0; i < ring.length; i++) { const a = ring[i], c = ring[(i + 1) % ring.length]; area += a.x * c.z - c.x * a.z; }
    if (area > 0) ring.reverse();
    area = Math.abs(area) / 2;
    buildingRings.push(ring);
    const cx = ring.reduce((s, p) => s + p.x, 0) / ring.length, cz = ring.reduce((s, p) => s + p.z, 0) / ring.length;
    const small = area < 34 || bd.t === 'shed' || bd.t === 'garage';
    const storeys = small ? 1 : bd.t === 'apartments' ? 3 : 2;
    const H = small ? 2.5 + rng() * 0.4 : storeys * 2.75 + 0.4 + rng() * 0.5;
    const tintC = col(small ? rng.pick([0x8d8478, 0x9c5b3e, 0xb9b3a6]) : rng.pick(BRICKS));

    // walls
    const pos = [], uvs = [];
    let run = rng() * 5;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const len = Math.hypot(c.x - a.x, c.z - a.z);
      pushQuad(pos, uvs, [a.x, 0, a.z], [c.x, 0, c.z], [c.x, H, c.z], [a.x, H, a.z], [run / 2.6, 0, (run + len) / 2.6, H / 2.6]);
      run += len;
    }
    const wg = new THREE.BufferGeometry();
    wg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    wg.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    const cArr = new Float32Array(pos.length); for (let i = 0; i < pos.length; i += 3) { cArr[i] = tintC.r; cArr[i + 1] = tintC.g; cArr[i + 2] = tintC.b; }
    wg.setAttribute('color', new THREE.BufferAttribute(cArr, 3));
    wg.computeVertexNormals();
    wallGeos.push(wg);

    // roof: gable if the footprint is roughly a rectangle, otherwise a simple hipped cap
    const loc = track.locate(cx, cz);
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
    const roofC = col(rng.pick([0x4d535c, 0x565c66, 0x5d5148, 0x47494f]));
    const rpos = [];
    const rectish = best && area / best.A > 0.8 && !small;
    if (rectish) {
      let { ux, uz, mnU, mxU, mnV, mxV } = best;
      // ridge runs along the street for terraces, else along the long side
      const st = loc.edge.path.at(loc.s);
      const alongStreet = Math.abs(ux * st.tx + uz * st.tz);
      const ridgeAlongU = loc.dist < 16 ? alongStreet > 0.7 : (mxU - mnU) >= (mxV - mnV);
      const P = (u, v, y) => [u * ux - v * uz, y, u * uz + v * ux];
      const o = 0.3;
      if (ridgeAlongU) {
        const mid = (mnV + mxV) / 2, rh = Math.min(3.2, (mxV - mnV) * 0.36);
        pushQuad(rpos, null, P(mnU - o, mnV - o, H - 0.05), P(mnU - o, mid, H + rh), P(mxU + o, mid, H + rh), P(mxU + o, mnV - o, H - 0.05));
        pushQuad(rpos, null, P(mxU + o, mxV + o, H - 0.05), P(mxU + o, mid, H + rh), P(mnU - o, mid, H + rh), P(mnU - o, mxV + o, H - 0.05));
        for (const u of [mnU, mxU]) { const tri = [P(u, mnV, H), P(u, mxV, H), P(u, mid, H + rh)]; wallExtraTri(tri, tintC); }
        for (let u = mnU + 1.2; u < mxU - 0.8; u += 4.9) detailGeos.push(boxAt(0.55, 1.1, 0.95, ...P(u, mid, H + rh + 0.2), Math.atan2(uz, ux), col(0x7c4a36)));
      } else {
        const mid = (mnU + mxU) / 2, rh = Math.min(3.2, (mxU - mnU) * 0.36);
        pushQuad(rpos, null, P(mnU - o, mxV + o, H - 0.05), P(mid, mxV + o, H + rh), P(mid, mnV - o, H + rh), P(mnU - o, mnV - o, H - 0.05));
        pushQuad(rpos, null, P(mxU + o, mnV - o, H - 0.05), P(mid, mnV - o, H + rh), P(mid, mxV + o, H + rh), P(mxU + o, mxV + o, H - 0.05));
        for (const v of [mnV, mxV]) { const tri = [P(mnU, v, H), P(mxU, v, H), P(mid, v, H + rh)]; wallExtraTri(tri, tintC); }
        for (let v = mnV + 1.2; v < mxV - 0.8; v += 4.9) detailGeos.push(boxAt(0.95, 1.1, 0.55, ...P(mid, v, H + rh + 0.2), Math.atan2(uz, ux), col(0x7c4a36)));
      }
    } else {
      const k = small ? 0.86 : 0.45, rh = small ? 0.25 : 1.7;
      const inner = ring.map((p) => ({ x: cx + (p.x - cx) * k, z: cz + (p.z - cz) * k }));
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], c = ring[(i + 1) % ring.length], ai = inner[i], ci = inner[(i + 1) % ring.length];
        pushQuad(rpos, null, [a.x, H, a.z], [c.x, H, c.z], [ci.x, H + rh, ci.z], [ai.x, H + rh, ai.z]);
      }
      const tris = THREE.ShapeUtils.triangulateShape(inner.map((p) => new THREE.Vector2(p.x, p.z)), []);
      for (const t of tris) for (const idx of [t[2], t[1], t[0]]) rpos.push(inner[idx].x, H + rh, inner[idx].z);
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(rpos, 3));
    rg.computeVertexNormals();
    roofGeos.push(paintGeo(rg, roofC));

    // street-facing facades get doors and sash windows
    if (!small) {
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], c = ring[(i + 1) % ring.length];
        const len = Math.hypot(c.x - a.x, c.z - a.z);
        if (len < 3.4) continue;
        const tx = (c.x - a.x) / len, tz = (c.z - a.z) / len;
        const nx = tz, nz = -tx;                                // outward for a CCW ring in (x,z)... verified below
        const mx = (a.x + c.x) / 2, mz = (a.z + c.z) / 2;
        const l2 = track.locate(mx, mz);
        if (l2.dist > 15) continue;
        const cp = l2.edge.path.at(l2.s);
        const toRoad = (cp.x - mx) * nx + (cp.z - mz) * nz;
        if (toRoad < l2.dist * 0.6) continue;
        // nothing in between us and the street?
        if (sdf.sample(mx + nx * Math.min(l2.dist, 6), mz + nz * Math.min(l2.dist, 6)) < -4.5) continue;
        const hd = Math.atan2(tz, tx);
        const units = Math.max(1, Math.round(len / 4.9));
        const ul = len / units;
        for (let u = 0; u < units; u++) {
          const s0 = (u + 0.5) * ul;
          const at = (off, y, dOut) => [a.x + tx * (s0 + off) + nx * dOut, y, a.z + tz * (s0 + off) + nz * dOut];
          const frame = col(0xf3f1ea), glass = col(0x27323d), door = col(rng.pick(DOORS));
          const dOff = ul > 3.6 ? -ul * 0.22 : 0, wOff = ul * 0.2;
          if (ul > 3.6 || u % 2 === 0) {
            detailGeos.push(boxAt(1.2, 2.3, 0.1, ...at(dOff, 1.15, 0.03), hd, frame));
            detailGeos.push(boxAt(0.92, 2.02, 0.1, ...at(dOff, 1.03, 0.07), hd, door));
            detailGeos.push(boxAt(1.4, 0.16, 0.5, ...at(dOff, 0.08, 0.25), hd, col(0xa9a59c)));
          }
          if (ul > 3.6) {   // bay window
            detailGeos.push(boxAt(1.7, 1.75, 0.45, ...at(wOff + 0.3, 1.55, 0.2), hd, frame));
            detailGeos.push(boxAt(1.4, 1.3, 0.1, ...at(wOff + 0.3, 1.6, 0.4), hd, glass));
            detailGeos.push(boxAt(1.9, 0.1, 0.6, ...at(wOff + 0.3, 2.47, 0.24), hd, col(0x565c66)));
          }
          for (let fl = 1; fl < storeys; fl++) {
            for (const off of ul > 3.6 ? [dOff, wOff + 0.3] : [0]) {
              detailGeos.push(boxAt(1.05, 1.5, 0.08, ...at(off, fl * 2.75 + 1.45, 0.03), hd, frame));
              detailGeos.push(boxAt(0.85, 1.3, 0.08, ...at(off, fl * 2.75 + 1.45, 0.06), hd, glass));
              detailGeos.push(boxAt(1.2, 0.08, 0.2, ...at(off, fl * 2.75 + 0.68, 0.08), hd, frame));
            }
          }
        }
      }
    }
  }
  function wallExtraTri(tri, tintC) {
    const g = new THREE.BufferGeometry();
    const p = [...tri[0], ...tri[1], ...tri[2], ...tri[0], ...tri[2], ...tri[1]];
    g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    const uv = []; for (let i = 0; i < 6; i++) uv.push(p[i * 3] / 2.6 + p[i * 3 + 2] / 2.6, p[i * 3 + 1] / 2.6);
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    const cArr = new Float32Array(18); for (let i = 0; i < 18; i += 3) { cArr[i] = tintC.r; cArr[i + 1] = tintC.g; cArr[i + 2] = tintC.b; }
    g.setAttribute('color', new THREE.BufferAttribute(cArr, 3));
    g.computeVertexNormals();
    wallGeos.push(g);
  }
  const walls = new THREE.Mesh(mergeGeometries(wallGeos), new THREE.MeshStandardMaterial({ map: brick, vertexColors: true, roughness: 0.9, side: THREE.DoubleSide }));
  walls.castShadow = true; walls.receiveShadow = true; scene.add(walls);
  const roofs = new THREE.Mesh(mergeGeometries(roofGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide }));
  roofs.castShadow = true; scene.add(roofs);

  // ------------------------------------------------------------ garden walls, hedges, bins
  const inBuilding = (x, z) => buildingRings.some((r) => pointInRing(x, z, r));
  const ctxRings = [...map.context, ...map.footways].map((p) => p.outer.map((q) => ({ x: q[0], z: -q[1] })));
  const inCtx = (x, z) => ctxRings.some((r) => pointInRing(x, z, r));
  const accessPts = map.accesses.map((a) => ({ x: a.at[0], z: -a.at[1] }));
  const propGeos = [];
  const hedgeC = [col(0x3f6b3a), col(0x4a7a41), col(0x35592f)];
  const binC = [col(0x2f3a33), col(0x1f2226), col(0x1d4f8c), col(0x2f3a33), col(0x6b3d1f)];
  for (const p of map.pave) {
    for (const ringRaw of [p.outer, ...p.holes]) {
      const ring = ringRaw.map((q) => ({ x: q[0], z: -q[1] }));
      let style = rng.int(0, 3), runLeft = rng.range(8, 16);
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], c = ring[(i + 1) % ring.length];
        const len = Math.hypot(c.x - a.x, c.z - a.z);
        if (len < 0.4) continue;
        const mx = (a.x + c.x) / 2, mz = (a.z + c.z) / 2;
        if (sdf.sample(mx, mz) > -1.2) continue;        // this edge is the kerb, not the back of the pavement
        const g = sdf.grad(mx, mz), ox = -g.x, oz = -g.z;
        const tx = (c.x - a.x) / len, tz = (c.z - a.z) / len, hd = Math.atan2(tz, tx);
        const n = Math.max(1, Math.round(len / 2.3)), pl = len / n;
        for (let k = 0; k < n; k++) {
          const px = a.x + tx * (k + 0.5) * pl, pz = a.z + tz * (k + 0.5) * pl;
          runLeft -= pl;
          if (runLeft < 0) { style = rng.int(0, 4); runLeft = rng.range(7, 18); }
          if (inBuilding(px + ox * 0.6, pz + oz * 0.6) || inBuilding(px + ox * 1.6, pz + oz * 1.6)) continue;
          if (inCtx(px + ox * 0.8, pz + oz * 0.8) || accessPts.some((q) => Math.hypot(q.x - px, q.z - pz) < 5.2)) continue;
          if (px < b.minX + 2 || px > b.maxX - 2 || pz < b.minZ + 2 || pz > b.maxZ - 2) continue;
          const gate = rng.chance(0.16);
          if (gate) continue;
          if (style <= 1) {            // brick wall with coping
            propGeos.push(boxAt(pl + 0.02, 0.72, 0.22, px + ox * 0.13, 0.5, pz + oz * 0.13, hd, col(style ? 0x9c5b3e : 0xa8563c)));
            propGeos.push(boxAt(pl + 0.02, 0.07, 0.3, px + ox * 0.13, 0.9, pz + oz * 0.13, hd, col(0xb9b3a6)));
          } else if (style === 2) {    // hedge
            propGeos.push(boxAt(pl + 0.05, 1.05 + rng() * 0.25, 0.65, px + ox * 0.36, 0.66, pz + oz * 0.36, hd, rng.pick(hedgeC)));
          } else if (style === 3) {    // railings on a dwarf wall
            propGeos.push(boxAt(pl + 0.02, 0.3, 0.2, px + ox * 0.12, 0.29, pz + oz * 0.12, hd, col(0x8e4f3b)));
            propGeos.push(boxAt(pl, 0.05, 0.05, px + ox * 0.12, 1.0, pz + oz * 0.12, hd, col(0x1c1d20)));
            for (let q = 0; q < 5; q++) propGeos.push(boxAt(0.04, 0.6, 0.04, px + ox * 0.12 + tx * (q / 5 - 0.4) * pl, 0.72, pz + oz * 0.12 + tz * (q / 5 - 0.4) * pl, hd, col(0x1c1d20)));
          }
          if (rng.chance(0.2)) {       // wheelie bin, left out on the pavement obviously
            const bc = rng.pick(binC), bx = px - ox * 0.36, bz = pz - oz * 0.36, bh = hd + rng.range(-0.3, 0.3);
            propGeos.push(boxAt(0.52, 0.92, 0.56, bx, 0.14 + 0.5, bz, bh, bc));
            propGeos.push(boxAt(0.58, 0.07, 0.62, bx, 0.14 + 1.0, bz, bh, bc.clone().multiplyScalar(0.7)));
          }
        }
      }
    }
  }
  for (const w of map.walls) {
    for (let i = 0; i < w.length - 1; i++) {
      const a = { x: w[i][0], z: -w[i][1] }, c = { x: w[i + 1][0], z: -w[i + 1][1] };
      const len = Math.hypot(c.x - a.x, c.z - a.z);
      if (len > 0.3) propGeos.push(boxAt(len, 1.5, 0.25, (a.x + c.x) / 2, 0.75, (a.z + c.z) / 2, Math.atan2(c.z - a.z, c.x - a.x), col(0x94583f)));
    }
  }

  // ------------------------------------------------------------ street furniture along the streets
  for (const e of Object.values(track.edges)) {
    const side = e.baySide ? -e.baySide : 1;
    for (let s = 14; s < e.len - 8; s += 37) {          // streetlights on the non-parking side
      const p = e.path.offsetAt(s, side * (e.hw + 0.45));
      const inx = -side * -p.tz, inz = -side * p.tx;      // towards the road
      propGeos.push(boxAt(0.14, 6.2, 0.14, p.x, 3.1, p.z, p.h, col(0x3a3f45)));
      propGeos.push(boxAt(0.1, 0.1, 1.5, p.x + inx * 0.7, 6.15, p.z + inz * 0.7, p.h, col(0x3a3f45)));
      propGeos.push(boxAt(0.5, 0.12, 0.26, p.x + inx * 1.35, 6.08, p.z + inz * 1.35, p.h + Math.PI / 2, col(0xfff1c0)));
    }
  }
  // speed cushions (real ones, from OSM)
  for (const c of track.cushions) {
    propGeos.push(boxAt(3.4, 0.09, 1.9, c.x, 0.06, c.z, c.h, col(0x8c3f36)));
    for (const k of [-1, 1]) propGeos.push(boxAt(0.5, 0.1, 1.1, c.x + Math.cos(c.h) * 1.2 * k, 0.065, c.z + Math.sin(c.h) * 1.2 * k, c.h, col(0xe9e6dd)));
  }
  // barriers closing the course
  const closedTex = textTexture('ROAD CLOSED · PARKING PANIC IN PROGRESS', '#ffffff', '#c8102e', 1024, 96, 52);
  for (const br of track.barriers) {
    const wdt = br.wid - 2.2;
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, wdt), [0, 1, 2, 3, 4, 5].map((i) => new THREE.MeshStandardMaterial({ color: 0xffffff, map: i < 2 ? closedTex : null, roughness: 0.6 })));
    m.position.set(br.x, 0.95, br.z); m.rotation.y = -br.h; m.castShadow = true; scene.add(m);
    for (const k of [-1, 1]) propGeos.push(boxAt(0.1, 1.3, 0.1, br.x - Math.sin(br.h) * k * (wdt / 2 - 0.2), 0.65, br.z + Math.cos(br.h) * k * (wdt / 2 - 0.2), br.h, col(0xdadada)));
    for (let k = -2; k <= 2; k++) {
      const cx = br.x - Math.cos(br.h) * 1.2 - Math.sin(br.h) * k * 1.3, cz = br.z - Math.sin(br.h) * 1.2 + Math.cos(br.h) * k * 1.3;
      const cone = new THREE.ConeGeometry(0.2, 0.6, 10); cone.translate(cx, 0.32, cz); propGeos.push(paintGeo(cone, col(0xff6a13)));
      propGeos.push(boxAt(0.42, 0.04, 0.42, cx, 0.04, cz, br.h, col(0xff6a13)));
    }
  }

  // ------------------------------------------------------------ road markings
  const markPos = [];
  const strip = (pts, width, y = 0.035) => {             // pts: [{x,z}] polyline, flat ribbon
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], c = pts[i + 1];
      const l = Math.hypot(c.x - a.x, c.z - a.z) || 1, nx = -(c.z - a.z) / l * width / 2, nz = (c.x - a.x) / l * width / 2;
      markPos.push(a.x - nx, y, a.z - nz, c.x - nx, y, c.z - nz, c.x + nx, y, c.z + nz, a.x - nx, y, a.z - nz, c.x + nx, y, c.z + nz, a.x + nx, y, a.z + nz);
    }
  };
  const whiteStart = 0;
  const bayLine = (item, e, solid) => {
    const side = item.side, hl = item.len / 2 + 0.15, edgeLat = side * (e.hw - item.wid);
    const p0 = e.path.offsetAt(item.s - hl, edgeLat), p1 = e.path.offsetAt(item.s + hl, edgeLat);
    const k0 = e.path.offsetAt(item.s - hl, side * (e.hw - 0.1)), k1 = e.path.offsetAt(item.s + hl, side * (e.hw - 0.1));
    if (solid) strip([p0, p1], 0.12);
    else for (let t = 0; t < 1; t += 0.2) strip([{ x: p0.x + (p1.x - p0.x) * t, z: p0.z + (p1.z - p0.z) * t }, { x: p0.x + (p1.x - p0.x) * (t + 0.12), z: p0.z + (p1.z - p0.z) * (t + 0.12) }], 0.1);
    strip([p0, k0], 0.1); strip([p1, k1], 0.1);
  };
  for (const bay of track.bays) bayLine(bay, track.edges[bay.edgeId], false);
  for (const d of track.driveways) {
    const e = track.edges[d.edgeId];
    const edgeLat = d.side * (e.hw - 1.0);
    const p0 = e.path.offsetAt(d.s - d.len / 2, edgeLat), p1 = e.path.offsetAt(d.s + d.len / 2, edgeLat);
    strip([p0, p1], 0.12);
    for (const p of [p0, p1]) { const t = e.path.at(d.s); strip([{ x: p.x - t.tz * 0.3, z: p.z + t.tx * 0.3 }, { x: p.x + t.tz * 0.3, z: p.z - t.tx * 0.3 }], 0.12); }
    // dropped kerb + driveway slab across the pavement
    const c0 = e.path.offsetAt(d.s, d.side * (e.hw + 0.75));
    propGeos.push(boxAt(d.len - 1.2, 0.03, 1.56, c0.x, 0.142, c0.z, c0.h, col(0x8f9094)));
    const g0 = e.path.offsetAt(d.s, d.side * (e.hw + 1.62));
    propGeos.push(boxAt(d.len - 1.6, 1.25, 0.08, g0.x, 0.76, g0.z, g0.h, col(0x2f3d36)));     // gates
    for (const k of [-1, 1]) propGeos.push(boxAt(0.3, 1.45, 0.3, g0.x + Math.cos(g0.h) * k * (d.len / 2 - 0.65), 0.72, g0.z + Math.sin(g0.h) * k * (d.len / 2 - 0.65), g0.h, col(0x9c5b3e)));
  }
  // give-way dashes where Bernard St meets Grange St, and at the Catherine St end of Dalton St
  for (const [id, s] of [['bernard', track.edges.bernard.len - 4.2], ['dalton', 5.5]]) {
    const e = track.edges[id];
    for (let k = -2; k <= 2; k++) { const p = e.path.offsetAt(s, k * 0.9 - 0.3), q = e.path.offsetAt(s, k * 0.9 + 0.3); strip([p, q], 0.2); }
  }
  const whiteCount = markPos.length;
  for (const y of track.yellow) {
    const e = track.edges[y.edgeId];
    if (y.s1 - y.s0 < 1) continue;
    for (const inset of [0.2, 0.42]) {
      const pts = [];
      for (let s = y.s0; s < y.s1; s += 2) pts.push(e.path.offsetAt(s, y.side * (e.hw - inset)));
      pts.push(e.path.offsetAt(y.s1, y.side * (e.hw - inset)));
      strip(pts, 0.09, 0.033);
    }
  }
  {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(markPos, 3));
    const cArr = new Float32Array(markPos.length);
    const wc = col(0xf2f0e8), yc = col(0xe8b317);
    for (let i = 0; i < markPos.length; i += 3) { const c = i < whiteCount ? wc : yc; cArr[i] = c.r; cArr[i + 1] = c.g; cArr[i + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(cArr, 3));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    m.receiveShadow = true; scene.add(m);
  }
  // painted flow arrows + 20 roundels
  {
    const arrowTex = canvasTex(64, 256, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.fillStyle = '#f2f0e8';
      g.beginPath(); g.moveTo(32, 6); g.lineTo(60, 90); g.lineTo(40, 90); g.lineTo(40, 250); g.lineTo(24, 250); g.lineTo(24, 90); g.lineTo(4, 90); g.closePath(); g.fill();
    }, false);
    const twentyTex = canvasTex(128, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.strokeStyle = '#f2f0e8'; g.lineWidth = 9; g.beginPath(); g.ellipse(64, 64, 54, 54, 0, 0, 7); g.stroke();
      g.fillStyle = '#f2f0e8'; g.font = 'bold 62px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('20', 64, 68);
    }, false);
    const decal = (tex, w, l, list) => {
      const pos = [], uv = [];
      for (const d of list) {
        const c = Math.cos(d.h), s = Math.sin(d.h);
        const P = (f, r) => [d.x + c * f - s * r, 0.04, d.z + s * f + c * r];
        const q = [P(-l / 2, -w / 2), P(-l / 2, w / 2), P(l / 2, w / 2), P(l / 2, -w / 2)];
        pos.push(...q[0], ...q[1], ...q[2], ...q[0], ...q[2], ...q[3]);
        uv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals();
      const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.8, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
      scene.add(m);
    };
    const arrows = [], twenties = [];
    for (const e of Object.values(track.edges)) {
      if (!e.circuit) continue;
      for (let s = 20; s < e.len - 14; s += 46) { const p = e.path.offsetAt(s, e.laneOff); arrows.push({ x: p.x, z: p.z, h: p.h }); }
      if (e.len > 60) { const p = e.path.offsetAt(13, e.laneOff); twenties.push({ x: p.x, z: p.z, h: p.h + Math.PI / 2 }); }
    }
    decal(arrowTex, 0.9, 3.6, arrows.map((a) => ({ ...a, h: a.h + Math.PI })).map((a) => ({ x: a.x, z: a.z, h: a.h })));
    decal(twentyTex, 2.0, 2.0, twenties);
  }

  // ------------------------------------------------------------ signs
  const signPost = (x, z) => propGeos.push(boxAt(0.07, 2.4, 0.07, x, 1.2, z, 0, col(0x70757b)));
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
    m.position.set(p.x, 0.95, p.z); m.rotation.y = -p.h + (side > 0 ? 0 : Math.PI); scene.add(m);
    for (const k of [-0.7, 0.7]) propGeos.push(boxAt(0.06, 1.15, 0.06, p.x + Math.cos(p.h) * k, 0.57, p.z + Math.sin(p.h) * k, p.h, col(0x1c1d20)));
  };
  const roundSign = (tex, e, s, side, faceAlong, y = 2.25) => {
    const p = e.path.offsetAt(s, side * (e.hw + 0.5));
    const m = new THREE.Mesh(new THREE.CircleGeometry(0.34, 24), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, side: THREE.DoubleSide }));
    m.position.set(p.x, y, p.z); m.rotation.y = -p.h + (faceAlong ? -Math.PI / 2 : Math.PI / 2); scene.add(m);
    signPost(p.x - Math.cos(p.h) * 0.04 * (faceAlong ? -1 : 1), p.z - Math.sin(p.h) * 0.04 * (faceAlong ? -1 : 1));
  };
  const noEntry = canvasTex(128, 128, (g) => { g.fillStyle = '#c8102e'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.fillStyle = '#fff'; g.fillRect(20, 50, 88, 28); }, false);
  const zone20 = canvasTex(128, 128, (g) => { g.fillStyle = '#fff'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.strokeStyle = '#c8102e'; g.lineWidth = 14; g.beginPath(); g.arc(64, 64, 54, 0, 7); g.stroke(); g.fillStyle = '#111'; g.font = 'bold 58px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('20', 64, 68); }, false);
  const oneWay = canvasTex(128, 128, (g) => { g.fillStyle = '#1e5aa8'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(64, 14); g.lineTo(100, 60); g.lineTo(76, 60); g.lineTo(76, 112); g.lineTo(52, 112); g.lineTo(52, 60); g.lineTo(28, 60); g.closePath(); g.fill(); }, false);
  for (const e of Object.values(track.edges)) {
    if (e.id.startsWith('catherine') || e.id === 'bernardS') continue;
    const side = e.baySide ? -e.baySide : 1;
    nameSign(e, Math.min(11, e.len * 0.3), side);
    if (e.len > 90) nameSign(e, e.len - 11, side);
    if (e.circuit && e.len > 60) roundSign(zone20, e, 9, side, false);
    if (e.realOneway) {
      roundSign(oneWay, e, 6.5, -side, false, 2.2);
      for (const sd of [-1, 1]) roundSign(noEntry, e, e.len - 6.5, sd, true);   // you may not drive in from this end
    }
  }

  // ------------------------------------------------------------ trees
  {
    const spots = [];
    let tries = 0;
    while (spots.length < (quality.low ? 70 : 130) && tries++ < 6000) {
      const x = rng.range(b.minX + 4, b.maxX - 4), z = rng.range(b.minZ + 4, b.maxZ - 4);
      const d = sdf.sample(x, z);
      if (d > -3.2) continue;
      if (inBuilding(x, z) || inBuilding(x + 2, z) || inBuilding(x - 2, z) || inBuilding(x, z + 2) || inBuilding(x, z - 2) || inCtx(x, z)) continue;
      if (spots.some((s) => Math.hypot(s.x - x, s.z - z) < 5)) continue;
      spots.push({ x, z, s: rng.range(0.75, 1.5) });
    }
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16, 0.24, 2.4, 6), new THREE.MeshStandardMaterial({ color: 0x5b4332, roughness: 1 }), spots.length);
    const leafGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const leafMat = new THREE.MeshStandardMaterial({ roughness: 0.95, flatShading: true });
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, spots.length * 2);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
    const greens = [0x4f8a3c, 0x5d9a45, 0x3f7534, 0x6aa24d, 0x89a84a, 0xb5803a];
    spots.forEach((s, i) => {
      m4.compose(new THREE.Vector3(s.x, 1.2 * s.s, s.z), q, new THREE.Vector3(s.s, s.s, s.s)); trunk.setMatrixAt(i, m4);
      const g = rng.pick(greens);
      for (let k = 0; k < 2; k++) {
        const sc = s.s * (k ? 0.72 : 1);
        m4.compose(new THREE.Vector3(s.x + (k ? rng.range(-0.8, 0.8) : 0), (k ? 4.6 : 3.3) * s.s, s.z + (k ? rng.range(-0.8, 0.8) : 0)), q.setFromEuler(new THREE.Euler(rng() * 3, rng() * 3, 0)), new THREE.Vector3(sc, sc * 0.9, sc));
        leaves.setMatrixAt(i * 2 + k, m4); leaves.setColorAt(i * 2 + k, c.set(g).multiplyScalar(k ? 1.12 : 1));
      }
    });
    trunk.castShadow = true; leaves.castShadow = true; leaves.receiveShadow = true;
    scene.add(trunk, leaves);
  }

  const props = new THREE.Mesh(mergeGeometries(propGeos.map((g) => (g.index ? g.toNonIndexed() : g))), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
  props.castShadow = true; props.receiveShadow = true; scene.add(props);
  const details = new THREE.Mesh(mergeGeometries(detailGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }));
  details.castShadow = !quality.low; scene.add(details);

  // ------------------------------------------------------------ resident parked cars (one draw call)
  {
    const geos = track.parked.map((p) => parkedCarGeometry(p.type, p.colour, p.x, p.z, p.h));
    const m = new THREE.Mesh(mergeGeometries(geos), carMaterial);
    m.castShadow = true; m.receiveShadow = true; scene.add(m);
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
  for (const bay of track.bays) {
    const grp = new THREE.Group();
    grp.position.set(bay.x, 0, bay.z); grp.rotation.y = -bay.h;
    // cones + sign (coned state)
    const cones = new THREE.Group();
    for (const [fx, fz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, -1]]) {
      const cm = new THREE.Mesh(coneGeo, coneMat); cm.position.set(fx * (bay.len / 2 - 0.5), 0.02, fz * -bay.side * 0.75); cm.castShadow = true; cones.add(cm);
    }
    const board = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.78), new THREE.MeshStandardMaterial({ map: suspendedTex, roughness: 0.6, side: THREE.DoubleSide }));
    board.position.set(0, 1.15, bay.side * 0.55); board.rotation.y = bay.side > 0 ? Math.PI : 0;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.8, 0.05), coneMat); leg.position.set(0, 0.4, bay.side * 0.56);
    cones.add(board, leg);
    // permit sign
    const permit = new THREE.Group();
    const pb = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.12), new THREE.MeshStandardMaterial({ map: permitTex, roughness: 0.6, side: THREE.DoubleSide }));
    pb.position.set(0, 1.6, bay.side * 0.5); pb.rotation.y = bay.side > 0 ? Math.PI : 0;
    const pl = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.1, 0.07), coneMat); pl.position.set(0, 0.55, bay.side * 0.52);
    permit.add(pb, pl);
    // glowing floor + floating P
    const glow = new THREE.Mesh(glowGeo, new THREE.MeshBasicMaterial({ color: 0x35e06a, transparent: true, opacity: 0.4, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
    glow.scale.set(bay.len, 1, bay.wid - 0.1); glow.position.y = 0.045;
    const marker = new THREE.Sprite(new THREE.SpriteMaterial({ map: pTex, transparent: true, depthTest: false }));
    marker.scale.set(1.6, 1.6, 1); marker.position.y = 4;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.9, 7, 14, 1, true), new THREE.MeshBasicMaterial({ color: 0x35e06a, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false }));
    beam.position.y = 3.5;
    // resident's car (closed state)
    const resident = createCarMesh(bay.resident.type, bay.resident.colour);
    resident.position.set(bay.resident.x, 0, bay.resident.z); resident.rotation.y = -bay.resident.h;
    scene.add(resident);
    grp.add(cones, permit, glow, marker, beam);
    scene.add(grp);
    out.bayProps.set(bay.id, { grp, cones, permit, glow, marker, beam, resident, state: null, pop: 0 });
  }

  /** Reflect bay state changes and animate the indicators. */
  out.update = (t, dt, phase) => {
    for (const bay of track.bays) {
      const p = out.bayProps.get(bay.id);
      const key = bay.state + (bay.occupant ? '+occ' : '') + (bay.perfect ? '+perfect' : '');
      if (p.state !== key) {
        if (p.state && p.state.startsWith('coned') && bay.state === 'open') p.pop = 1;
        p.state = key;
        p.resident.visible = bay.state === 'closed';
        p.cones.visible = bay.state === 'coned';
        p.permit.visible = bay.state === 'permit';
      }
      const live = (bay.state === 'open' || bay.state === 'blocked') && !bay.occupant;
      const showGlow = live || bay.state === 'permit' || (bay.state === 'open' && bay.occupant);
      p.glow.visible = showGlow; p.marker.visible = live && bay.state === 'open'; p.beam.visible = live && bay.state === 'open';
      if (showGlow) {
        const colour = bay.state === 'permit' ? 0xff3344 : bay.state === 'blocked' ? 0xffa51e : bay.occupant ? 0x7a8894 : bay.perfect ? 0xffd23c : 0x35e06a;
        p.glow.material.color.setHex(colour); p.beam.material.color.setHex(colour);
        p.glow.material.opacity = bay.occupant ? 0.18 : 0.3 + 0.18 * Math.sin(t * 6 + bay.id);
        p.marker.position.y = 3.6 + Math.sin(t * 3 + bay.id) * 0.35 + p.pop * 2;
        const sc = (bay.perfect ? 2.4 : 1.7) * (1 + p.pop * 0.8);
        p.marker.scale.set(sc, sc, 1);
        p.marker.material.color.setHex(bay.perfect ? 0xffe27a : 0xffffff);
      }
      p.pop = Math.max(0, p.pop - dt * 2.5);
    }
  };
  return out;
}

/** Sky dome, sun, ambient light and distant haze. */
export function buildSky(scene, renderer, quality) {
  const skyGeo = new THREE.SphereGeometry(900, 24, 12);
  const top = col(0x4f96d8), mid = col(0xa8d4f2), low = col(0xf3e8d2);
  const pos = skyGeo.attributes.position, cArr = new Float32Array(pos.count * 3), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const h = clamp(pos.getY(i) / 900, -0.1, 1);
    if (h < 0.18) c.copy(low).lerp(mid, clamp(h / 0.18, 0, 1)); else c.copy(mid).lerp(top, clamp((h - 0.18) / 0.6, 0, 1));
    cArr[i * 3] = c.r; cArr[i * 3 + 1] = c.g; cArr[i * 3 + 2] = c.b;
  }
  skyGeo.setAttribute('color', new THREE.BufferAttribute(cArr, 3));
  const sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  scene.add(sky);
  scene.fog = new THREE.Fog(0xdfe6ea, 140, 620);
  // a few fluffy clouds
  const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false, transparent: true, opacity: 0.92 });
  const rng = makeRng(31);
  for (let i = 0; i < 14; i++) {
    const g = new THREE.Group();
    for (let k = 0; k < 5; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(rng.range(14, 30), 8, 6), cloudMat); s.position.set(rng.range(-40, 40), rng.range(-5, 6), rng.range(-16, 16)); s.scale.y = 0.45; g.add(s); }
    const a = rng() * Math.PI * 2, r = rng.range(380, 760);
    g.position.set(Math.cos(a) * r, rng.range(150, 260), Math.sin(a) * r);
    sky.add(g);
  }
  const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x8a8f78, 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d6, 2.5);
  sun.position.set(-70, 90, -50);
  sun.castShadow = !quality.noShadows;
  const sz = quality.low ? 1024 : 2048;
  sun.shadow.mapSize.set(sz, sz);
  const sc = sun.shadow.camera; sc.left = -75; sc.right = 75; sc.top = 75; sc.bottom = -75; sc.near = 10; sc.far = 320;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);
  return { sky, sun, follow(x, z) { sun.position.set(x - 70, 110, z - 55); sun.target.position.set(x, 0, z); sky.position.set(x, 0, z); } };
}
