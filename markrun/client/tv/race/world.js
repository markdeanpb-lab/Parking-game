// Static world: terrain + painted ground, course path, lake, buildings, trees, props, sky, clouds.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { toon, mesh, outline, canvasTexture, addOutlineNormals } from './toon.js';
import { PATH_W, PATH_LIFT, pointInPoly, bbox, signedDist } from './course.js';

export const FONT = '"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif';
const rnd = mulberry(20240817);
export function mulberry(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// text texture that redraws when the display font finishes loading
export function textTexture(w, h, draw, disposables) {
  const tex = canvasTexture(w, h, draw);
  if (document.fonts && document.fonts.load) {
    document.fonts.load(`64px "Lilita One"`).then(() => {
      const g = tex.image.getContext('2d'); g.clearRect(0, 0, w, h); draw(g, w, h); tex.needsUpdate = true;
    }).catch(() => {});
  }
  disposables?.push(tex);
  return tex;
}
export function outlinedText(g, text, x, y, size, fill = '#fff', stroke = '#1a1420', lw = 0.16, align = 'center') {
  g.font = `${size}px ${FONT}`; g.textAlign = align; g.textBaseline = 'middle';
  g.lineJoin = 'round'; g.lineWidth = size * lw; g.strokeStyle = stroke; g.strokeText(text, x, y);
  g.fillStyle = fill; g.fillText(text, x, y);
}

export function buildWorld(scene, C, opts) {
  const { course, park, hasFunfair } = opts;
  const disposables = [];
  const group = new THREE.Group(); scene.add(group);
  const add = (o) => { group.add(o); return o; };
  const T = C.terrain;
  const Wm = (T.nx - 1) * T.cell, Hm = (T.nz - 1) * T.cell;

  // ---------- spatial occupancy (path + reserved areas) ----------
  const occ = new Map(); const OC = 6;
  const occKey = (x, z) => `${Math.floor(x / OC)},${Math.floor(z / OC)}`;
  const reserve = (x, z, r) => { const k = occKey(x, z); let a = occ.get(k); if (!a) occ.set(k, (a = [])); a.push([x, z, r]); };
  const clearOf = (x, z, r) => {
    const cx = Math.floor(x / OC), cz = Math.floor(z / OC); const R = Math.ceil((r + 30) / OC);
    for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) {
      const a = occ.get(`${cx + i},${cz + j}`); if (!a) continue;
      for (const [px, pz, pr] of a) if ((px - x) ** 2 + (pz - z) ** 2 < (pr + r) ** 2) return false;
    }
    return true;
  };
  const ribbonSamples = [];
  for (const rb of C.ribbons) for (let m = rb.from; m <= rb.to; m += 3) { const q = C.baseXZ(m); ribbonSamples.push(q); reserve(q[0], q[1], PATH_W / 2 + 1.5); }
  for (const id in C.diversions) for (const d of C.diversions[id]) for (const p of d.path) reserve(p[0], p[1], 4);

  const parkPoly = park.features.filter((f) => f.kind === 'park').sort((a, b) => b.pts.length - a.pts.length)[0].pts;
  const inPark = (x, z) => pointInPoly(parkPoly, x, z);
  const blockers = park.features.filter((f) => f.closed && ['water', 'track', 'tennis', 'pitch', 'playground', 'building'].includes(f.kind));
  const blockBB = blockers.map((f) => [bbox(f.pts), f]);
  const blocked = (x, z, pad = 2) => blockBB.some(([b, f]) => x > b[0] - pad && x < b[2] + pad && z > b[1] - pad && z < b[3] + pad && signedDist(f.pts, x, z) < pad);

  // ---------- painted ground texture ----------
  const PX = 1.7; // px per metre
  // instanced props that can be cleared from an area later (e.g. the fairground strip once a plan with diversions loads)
  const registry = [];
  function registerInstanced(im, list) { registry.push({ im, list }); }
  const zeroM = new THREE.Matrix4().makeScale(0, 0, 0);
  function clearArea(fn) {
    for (const { im, list } of registry) {
      let hit = false;
      list.forEach((t, i) => { if (!t.cleared && fn(t.x, t.z)) { t.cleared = true; im.setMatrixAt(i, zeroM); hit = true; } });
      if (hit) im.instanceMatrix.needsUpdate = true;
    }
  }
  function redrawGround() { const g = groundTex.image.getContext('2d'); drawGround(g, groundTex.image.width, groundTex.image.height); groundTex.needsUpdate = true; }
  const groundTex = canvasTexture(Math.round(Wm * PX), Math.round(Hm * PX), (g, w, h) => drawGround(g, w, h), { aniso: 8 });
  disposables.push(groundTex);
  function drawGround(g, w, h) {
    const X = (x) => (x - T.x0) * PX, Z = (z) => (z - T.z0) * PX;
    const poly = (pts, close = true) => { g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(X(p[0]), Z(p[1])) : g.moveTo(X(p[0]), Z(p[1])))); if (close) g.closePath(); };
    g.fillStyle = '#d8d2c2'; g.fillRect(0, 0, w, h);
    // pavement speckle
    for (let i = 0; i < 9000; i++) { g.fillStyle = rnd() < 0.5 ? '#cfc8b6' : '#e2dccd'; g.fillRect(rnd() * w, rnd() * h, 3, 3); }
    // park
    poly(parkPoly); g.fillStyle = '#66cf45'; g.fill();
    g.save(); poly(parkPoly); g.clip();
    // mowing stripes
    g.translate(w / 2, h / 2); g.rotate(-0.62);
    for (let k = -2000; k < 2000; k += 2 * 14 * PX) { g.fillStyle = 'rgba(255,255,140,0.10)'; g.fillRect(k, -2500, 14 * PX, 5000); }
    g.setTransform(1, 0, 0, 1, 0, 0);
    // grass tufts
    for (let i = 0; i < 26000; i++) { const x = rnd() * w, y = rnd() * h; g.fillStyle = rnd() < 0.6 ? 'rgba(40,140,40,0.35)' : 'rgba(190,255,120,0.35)'; g.fillRect(x, y, 2 + rnd() * 2, 2 + rnd() * 3); }
    g.restore();
    const fillK = (kind, col, stroke) => { for (const f of park.features) if (f.kind === kind && f.closed) { poly(f.pts); g.fillStyle = col; g.fill(); if (stroke) { g.strokeStyle = stroke; g.lineWidth = 2; g.stroke(); } } };
    fillK('grass', '#72d64e'); fillK('garden', '#86dc5c');
    fillK('wood', '#3f9e3a'); fillK('scrub', '#5cb544');
    // pitches: striped
    for (const f of park.features) if (f.kind === 'pitch' && f.closed) {
      g.save(); poly(f.pts); g.clip(); g.fillStyle = '#5ccc3f'; g.fill();
      const b = bbox(f.pts); for (let x = b[0]; x < b[2]; x += 8) { g.fillStyle = 'rgba(255,255,255,0.10)'; g.fillRect(X(x), Z(b[1]), 4 * PX, (b[3] - b[1]) * PX); }
      g.restore(); poly(f.pts); g.strokeStyle = '#ffffff'; g.lineWidth = 2.2; g.stroke();
    }
    // playgrounds: pale sand/bark surface with a picket edge (3D toys are added below)
    for (const f of park.features) if (f.kind === 'playground' && f.closed) {
      // soft rubber safety surface (teal) with hopscotch-style dots, white kerb
      poly(f.pts); g.fillStyle = '#7fcfb4'; g.fill();
      g.save(); poly(f.pts); g.clip(); const b = bbox(f.pts);
      for (let i = 0; i < 260; i++) { g.fillStyle = rnd() < 0.5 ? 'rgba(20,80,70,0.18)' : 'rgba(255,255,255,0.22)'; g.fillRect(X(b[0] + rnd() * (b[2] - b[0])), Z(b[1] + rnd() * (b[3] - b[1])), 3, 3); }
      for (let i = 0; i < (b[2] - b[0]) * (b[3] - b[1]) / 400; i++) { g.beginPath(); g.arc(X(b[0] + rnd() * (b[2] - b[0])), Z(b[1] + rnd() * (b[3] - b[1])), 1.6 * PX, 0, 7); g.fillStyle = ['#ffd93b', '#57c7ff', '#ff6f91'][i % 3]; g.fill(); }
      g.restore();
      poly(f.pts); g.strokeStyle = '#ffffff'; g.lineWidth = 0.8 * PX; g.stroke();
    }
    // athletics: the big oval is a proper track (red band, white lanes, green infield); small bits are jump pits etc.
    const trackArea = (f) => { let a = 0; for (let i = 0, j = f.pts.length - 1; i < f.pts.length; j = i++) a += (f.pts[j][0] + f.pts[i][0]) * (f.pts[j][1] - f.pts[i][1]); return Math.abs(a / 2); };
    for (const f of park.features) if (f.kind === 'track' && f.closed && trackArea(f) > 5000) {
      g.save(); poly(f.pts); g.clip();
      g.fillStyle = '#e2523a'; g.fill();
      const band = 9 * PX;
      // infield: inset copy of the oval
      const c = centroid(f.pts); const b = bbox(f.pts); const w = (b[2] - b[0]), h = (b[3] - b[1]);
      const inset = (k) => f.pts.map((p) => [c[0] + (p[0] - c[0]) * k, c[1] + (p[1] - c[1]) * k]);
      const k = 1 - (2 * 9) / Math.min(w, h);
      for (let i = 1; i <= 5; i++) { poly(inset(1 - (1 - k) * (i / 6))); g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 1.6; g.stroke(); }
      poly(inset(k)); g.fillStyle = '#5ccc3f'; g.fill(); g.strokeStyle = '#ffffff'; g.lineWidth = 3; g.stroke();
      g.restore(); poly(f.pts); g.strokeStyle = '#ffffff'; g.lineWidth = 3; g.stroke();
      void band;
    }
    for (const f of park.features) if (f.kind === 'track' && f.closed && trackArea(f) <= 5000) {
      const sand = f.tags?.surface === 'sand'; if (!f.tags?.surface) continue;
      poly(f.pts); g.fillStyle = sand ? '#f2d58f' : '#e2523a'; g.fill(); g.strokeStyle = '#ffffff'; g.lineWidth = 1.5; g.stroke();
    }
    // tennis courts
    for (const f of park.features) if (f.kind === 'tennis' && f.closed) {
      poly(f.pts); g.fillStyle = '#3f9fd1'; g.fill(); g.strokeStyle = '#ffffff'; g.lineWidth = 2.5; g.stroke();
      const c = centroid(f.pts); const b = bbox(f.pts);
      g.save(); poly(f.pts); g.clip(); g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(X(c[0]), Z(b[1])); g.lineTo(X(c[0]), Z(b[3])); g.stroke(); g.restore();
    }
    // water (painted under the water mesh) + foam bank ring
    for (const f of park.features) if (f.kind === 'water' && f.closed) {
      poly(f.pts); g.strokeStyle = '#f4efe0'; g.lineWidth = 3.4 * PX; g.lineJoin = 'round'; g.stroke();
      g.fillStyle = '#2f8fe0'; g.fill();
    }
    // OSM paths: tan with darker edge
    for (const f of park.features) if (f.kind === 'path') { poly(f.pts, false); g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = '#c9ad78'; g.lineWidth = 3.6 * PX; g.stroke(); }
    for (const f of park.features) if (f.kind === 'path') { poly(f.pts, false); g.strokeStyle = '#ecd8a6'; g.lineWidth = 2.6 * PX; g.stroke(); }
    // roads
    const rw = (f) => ({ primary: 15, secondary: 12, tertiary: 11, residential: 8, unclassified: 8, service: 5, trunk: 16 }[f.tags?.highway] || 7);
    for (const f of park.features) if (f.kind === 'road') { poly(f.pts, f.closed); g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = '#ece6d6'; g.lineWidth = (rw(f) + 4) * PX; g.stroke(); }
    for (const f of park.features) if (f.kind === 'road') { poly(f.pts, f.closed); g.strokeStyle = '#7f8597'; g.lineWidth = rw(f) * PX; g.stroke(); }
    for (const f of park.features) if (f.kind === 'road' && rw(f) >= 11) { poly(f.pts, false); g.setLineDash([5 * PX, 5 * PX]); g.strokeStyle = '#f4f1e6'; g.lineWidth = 0.5 * PX; g.stroke(); g.setLineDash([]); }
    // rail
    for (const f of park.features) if (f.kind === 'rail') { poly(f.pts, false); g.strokeStyle = '#9b8f84'; g.lineWidth = 5 * PX; g.stroke(); }
    for (const f of park.features) if (f.kind === 'rail') { poly(f.pts, false); g.setLineDash([1, 2]); g.strokeStyle = '#5b4f46'; g.lineWidth = 3 * PX; g.stroke(); g.setLineDash([]); poly(f.pts, false); g.strokeStyle = '#c9ccd6'; g.lineWidth = 0.8; g.stroke(); }
    // building footprints shadow
    for (const f of park.features) if (f.kind === 'building' && f.closed) { poly(f.pts); g.fillStyle = '#9c968a'; g.fill(); }
    // worn diversion trails (funfair weekends)
    for (const id in C.diversions) for (const d of C.diversions[id]) {
      g.beginPath(); d.path.forEach((p, i) => (i ? g.lineTo(X(p[0]), Z(p[1])) : g.moveTo(X(p[0]), Z(p[1]))));
      g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = 'rgba(196,160,96,0.85)'; g.lineWidth = 4 * PX; g.stroke();
      g.setLineDash([2 * PX, 3 * PX]); g.strokeStyle = 'rgba(255,240,200,0.8)'; g.lineWidth = 0.6 * PX; g.stroke(); g.setLineDash([]);
    }
  }

  // ---------- terrain mesh ----------
  {
    const n = T.nx * T.nz; const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2);
    for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) {
      const k = j * T.nx + i; pos[k * 3] = T.x0 + i * T.cell; pos[k * 3 + 1] = T.h[k]; pos[k * 3 + 2] = T.z0 + j * T.cell;
      uv[k * 2] = i / (T.nx - 1); uv[k * 2 + 1] = 1 - j / (T.nz - 1);
    }
    const idx = new Uint32Array((T.nx - 1) * (T.nz - 1) * 6); let q = 0;
    for (let j = 0; j < T.nz - 1; j++) for (let i = 0; i < T.nx - 1; i++) {
      const a = j * T.nx + i, b = a + 1, c = a + T.nx, d = c + 1;
      idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(new THREE.BufferAttribute(idx, 1)); geo.computeVertexNormals();
    const tmat = toon(0xffffff, { map: groundTex });
    const detail = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#808080'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1800; i++) { const v = 100 + Math.floor(rnd() * 70); g.fillStyle = `rgb(${v},${v},${v})`; const x = rnd() * w, y = rnd() * h; g.fillRect(x, y, 2, 3 + rnd() * 5); }
      for (let i = 0; i < 500; i++) { g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    }, { repeat: true, srgb: false });
    disposables.push(detail);
    tmat.onBeforeCompile = (sh) => {
      sh.uniforms.uDetail = { value: detail };
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos; uniform sampler2D uDetail;')
        .replace('#include <map_fragment>', `#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`);
    };
    tmat.customProgramCacheKey = () => 'terrain-detail';
    const m = mesh(geo, tmat, { cast: false });
    m.name = 'terrain'; add(m);
    // skirt ground far beyond (town-coloured) so drone shots never see the edge
    const far = new THREE.Mesh(new THREE.RingGeometry(700, 5200, 48, 1), toon(0xc9d6a0));
    far.rotation.x = -Math.PI / 2; far.position.set(T.x0 + Wm / 2, -2, T.z0 + Hm / 2); far.receiveShadow = false; add(far);
    const fill = new THREE.Mesh(new THREE.PlaneGeometry(Wm + 1800, Hm + 1800), toon(0xd0d5b5)); fill.rotation.x = -Math.PI / 2; fill.position.set(T.x0 + Wm / 2, -3, T.z0 + Hm / 2); add(fill);
  }

  // ---------- course path ribbon ----------
  const pathTex = canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#7f8fb0'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1600; i++) { g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.07)' : 'rgba(30,40,70,0.08)'; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    g.fillStyle = '#6b7a9b'; g.fillRect(0, 0, w * 0.035, h); g.fillRect(w * 0.965, 0, w * 0.035, h);
    g.fillStyle = '#ffffff'; g.fillRect(w * 0.06, 0, w * 0.045, h); g.fillRect(w * 0.895, 0, w * 0.045, h);
    g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(w * 0.49, 0, w * 0.02, h * 0.5);
  }, { repeat: true });
  disposables.push(pathTex);
  {
    const geos = [];
    for (const rb of C.ribbons) geos.push(ribbonGeometry(rb));
    const geo = mergeGeometries(geos);
    const m = mesh(geo, toon(0xffffff, { map: pathTex }), { cast: false });
    m.name = 'path'; add(m);
    const skirtGeo = mergeGeometries(C.ribbons.map((rb) => ribbonGeometry(rb, true)));
    const sk = mesh(skirtGeo, toon(0x5a6582), { cast: false }); add(sk);
  }
  function ribbonGeometry(rb, skirt = false) {
    const pts = [];
    for (let m = rb.from; m <= rb.to + 0.01; m += 2) pts.push(C.baseXZ(m));
    const pos = [], uv = [], idx = [];
    let v = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      let tx = b[0] - a[0], tz = b[1] - a[1]; const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
      const rx = -tz, rz = tx; const hw = PATH_W / 2;
      const L = [pts[i][0] - rx * hw, pts[i][1] - rz * hw], R = [pts[i][0] + rx * hw, pts[i][1] + rz * hw];
      const yc = C.heightAt(pts[i][0], pts[i][1]);
      const yl = Math.max(C.heightAt(L[0], L[1]), yc - 0.05) + PATH_LIFT + rb.lift;
      const yr = Math.max(C.heightAt(R[0], R[1]), yc - 0.05) + PATH_LIFT + rb.lift;
      if (!skirt) { pos.push(L[0], yl, L[1], R[0], yr, R[1]); uv.push(0, v / 8, 1, v / 8); }
      else {
        const d = 0.45;
        pos.push(L[0] - rx * 0.15, yl - d, L[1] - rz * 0.15, L[0], yl, L[1], R[0], yr, R[1], R[0] + rx * 0.15, yr - d, R[1] + rz * 0.15);
        uv.push(0, 0, 0, 1, 0, 1, 0, 0);
      }
      if (i) v += 2;
    }
    const stride = skirt ? 4 : 2;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = i * stride, b = (i + 1) * stride;
      if (!skirt) idx.push(a, b, a + 1, a + 1, b, b + 1);
      else { idx.push(a, b, a + 1, a + 1, b, b + 1); idx.push(a + 2, b + 2, a + 3, a + 3, b + 2, b + 3); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    // flip winding if normals face down
    if (geo.getAttribute('normal').getY(0) < 0 && !skirt) { const ix = geo.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } geo.computeVertexNormals(); }
    return geo;
  }

  // ---------- lake water + boats ----------
  const waterU = { uTime: { value: 0 } };
  const lakes = park.features.filter((f) => f.kind === 'water' && f.closed);
  for (const f of lakes) {
    const level = (f._level ?? Math.min(...f.pts.map((p) => C.heightAt(p[0], p[1])))) + 0.05;
    const shape = new THREE.Shape(f.pts.map((p) => new THREE.Vector2(p[0], -p[1])));
    const geo = new THREE.ShapeGeometry(shape, 4); geo.rotateX(-Math.PI / 2);
    geo.translate(0, level, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { ...waterU, ...THREE.UniformsLib.fog },
      vertexShader: `varying vec3 vW;
${THREE.ShaderChunk.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${THREE.ShaderChunk.fog_vertex}
}`,
      fragmentShader: `uniform float uTime; varying vec3 vW;
${THREE.ShaderChunk.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${THREE.ShaderChunk.fog_fragment}
        }`, fog: true,
    });
    const wm = new THREE.Mesh(geo, mat); wm.name = 'water'; add(wm); disposables.push(mat);
    f._waterLevel = level;
  }
  const boats = [];
  if (C.lake) {
    const L = C.lake; const b = bbox(L.pts); const cols = [0xffd93b, 0xff5d5d, 0x57c7ff, 0xffffff, 0xff8fd1, 0x7dff8a];
    const hull = new RoundedBoxGeometry(2.0, 0.7, 3.6, 2, 0.32);
    const seat = new RoundedBoxGeometry(1.2, 0.5, 0.8, 2, 0.2);
    for (let i = 0, tries = 0; i < 9 && tries < 300; tries++) {
      const x = b[0] + rnd() * (b[2] - b[0]), z = b[1] + rnd() * (b[3] - b[1]);
      if (signedDist(L.pts, x, z) > -7) continue;
      const g = new THREE.Group();
      const h = mesh(hull, toon(cols[i % cols.length]), { ol: 2.5 }); g.add(h);
      const s = mesh(seat, toon(0xffffff), { ol: 2 }); s.position.y = 0.45; g.add(s);
      const sw = mesh(new THREE.SphereGeometry(0.42, 12, 8), toon(cols[(i + 2) % cols.length]), { ol: 2 }); sw.position.set(0, 0.9, 0.7); g.add(sw);
      g.position.set(x, (L._waterLevel ?? 0) + 0.1, z); g.rotation.y = rnd() * 6.28; add(g);
      boats.push({ g, ph: rnd() * 6.28, x, z, a: g.rotation.y });
      i++;
    }
  }

  // ---------- buildings (merged extrusions with a window facade texture) ----------
  {
    const facade = canvasTexture(128, 128, (g, w, h) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, 14, 14);
      g.fillStyle = '#3b4a6b'; g.fillRect(34, 30, 60, 58);
      g.fillStyle = '#9ec9ff'; g.fillRect(38, 34, 52, 50);
      g.fillStyle = '#ffffff'; g.fillRect(62, 34, 4, 50); g.fillRect(38, 56, 52, 4);
      g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(0, 118, w, 10);
    }, { repeat: true });
    disposables.push(facade);
    const uvGen = {
      generateTopUV: (geo, v, a, b, c) => [new THREE.Vector2(0.02, 0.98), new THREE.Vector2(0.02, 0.98), new THREE.Vector2(0.02, 0.98)],
      generateSideWallUV: (geo, v, a, b, c, d) => {
        const ax = v[a * 3], ay = v[a * 3 + 1], az = v[a * 3 + 2], bx = v[b * 3], by = v[b * 3 + 1], bz = v[b * 3 + 2];
        const cz = v[c * 3 + 2], dz = v[d * 3 + 2];
        const ua = (Math.abs(ay - by) < Math.abs(ax - bx) ? ax : ay) / 4.2, ub = (Math.abs(ay - by) < Math.abs(ax - bx) ? bx : by) / 4.2;
        return [new THREE.Vector2(ua, az / 3.2), new THREE.Vector2(ub, bz / 3.2), new THREE.Vector2(ub, cz / 3.2), new THREE.Vector2(ua, dz / 3.2)];
      },
    };
    const walls = ['#e98a64', '#f3d9a6', '#d86f5a', '#f6efe0', '#a8c8e6', '#f2b5a0', '#c9b6e4', '#f4c46a'];
    const roofs = ['#5d6488', '#7a5d6c', '#4f6b78'];
    const geos = [];
    for (const f of park.features) {
      if (f.kind !== 'building' || !f.closed || f.pts.length < 4) continue;
      const c = centroid(f.pts); if (inPark(c[0], c[1])) continue;
      const lv = parseFloat(f.tags?.['building:levels']) || (rnd() < 0.7 ? 3 : 4);
      const hgt = Math.min(30, lv * 3.1);
      const shape = new THREE.Shape(f.pts.map((p) => new THREE.Vector2(p[0], -p[1])));
      let geo;
      try { geo = new THREE.ExtrudeGeometry(shape, { depth: hgt, bevelEnabled: false, UVGenerator: uvGen }); } catch { continue; }
      geo.rotateX(-Math.PI / 2);
      const base = Math.min(...f.pts.map((p) => C.heightAt(p[0], p[1]))) - 1.5;
      geo.translate(0, base, 0);
      const ni = geo.getAttribute('normal'); const n = ni.count; const col = new Float32Array(n * 3);
      const wc = new THREE.Color(walls[Math.floor(rnd() * walls.length)]).convertSRGBToLinear(), rc = new THREE.Color(roofs[Math.floor(rnd() * roofs.length)]).convertSRGBToLinear();
      for (let i = 0; i < n; i++) { const cc = ni.getY(i) > 0.5 ? rc : wc; col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b; }
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      geos.push(geo.index ? geo.toNonIndexed() : geo);
    }
    if (geos.length) {
      const geo = mergeGeometries(geos);
      const m = mesh(geo, toon(0xffffff, { map: facade, vertexColors: true }), { cast: true, ol: 1.6, olRef: 60 });
      m.name = 'buildings'; add(m);
    }
  }

  // ---------- props ----------
  const finish = C.sample(C.finishM);
  const start = C.sample(0);
  const anchors = { start, finish };

  // inflatable arches
  const archGroup = new THREE.Group(); add(archGroup);
  function arch(s, label, colA, colB) {
    const g = new THREE.Group();
    const R = PATH_W / 2 + 1.4, tube = 0.85;
    const stripe = canvasTexture(256, 32, (c, w, h) => { for (let i = 0; i < 16; i++) { c.fillStyle = i % 2 ? colA : colB; c.fillRect((i * w) / 16, 0, w / 16 + 1, h); } }, { repeat: false });
    disposables.push(stripe);
    const tor = new THREE.TorusGeometry(R, tube, 14, 40, Math.PI); tor.scale(1, 1.25, 1);
    const t = mesh(tor, toon(0xffffff, { map: stripe }), { ol: 3.5 }); g.add(t);
    const foot = new THREE.CylinderGeometry(tube * 1.4, tube * 1.6, 0.8, 16);
    for (const sx of [-1, 1]) { const f = mesh(foot, toon(colB), { ol: 3 }); f.position.set(sx * R, 0.3, 0); g.add(f); }
    const bannerTex = textTexture(1024, 256, (c, w, h) => {
      c.fillStyle = '#1b1b3a'; roundRect(c, 0, 0, w, h, 60); c.fill();
      c.fillStyle = colA; roundRect(c, 12, 12, w - 24, h - 24, 50); c.fill();
      outlinedText(c, 'MARKRUN', w / 2, h * 0.42, 150, '#ffffff', '#1b1b3a', 0.18);
      outlinedText(c, label, w / 2, h * 0.83, 56, '#ffe14d', '#1b1b3a', 0.2);
    }, disposables);
    const banner = mesh(new RoundedBoxGeometry(R * 1.55, R * 0.4, 0.7, 3, 0.25), [toon(colB), toon(colB), toon(colB), toon(colB), toon(0xffffff, { map: bannerTex }), toon(0xffffff, { map: bannerTex })], { ol: 3.5 });
    banner.position.y = R * 1.25 + tube * 1.25 + R * 0.2 - 0.15; g.add(banner);
    g.position.set(s.x, s.y - 0.1, s.z);
    // arch plane must be perpendicular to the path: its local X axis = path right
    g.rotation.y = Math.atan2(-s.rz, s.rx);
    archGroup.add(g);
    return g;
  }
  anchors.finishArch = arch(finish, 'FINISH', '#ff3d8b', '#ffd23f');
  arch(start, 'START', '#2e9bff', '#ffd23f');
  // chequered finish line + start line decals
  const chequer = canvasTexture(256, 64, (c, w, h) => { const n = 16, s = w / n; for (let i = 0; i < n; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? '#111' : '#fff'; c.fillRect(i * s, j * s, s, s); } });
  disposables.push(chequer);
  function decal(s, tex, depth, lift = 0.03) {
    const geo = new THREE.PlaneGeometry(PATH_W, depth); geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, toon(0xffffff, { map: tex, transparent: true, alphaTest: 0.3, polygonOffset: true, polygonOffsetFactor: -2 }));
    m.position.set(s.x, s.y + lift, s.z); m.rotation.y = Math.atan2(-s.rz, s.rx); m.receiveShadow = true;
    // tilt with slope
    add(m); return m;
  }
  decal(finish, chequer, 2.2, 0.05);
  const startTex = textTexture(512, 128, (c, w, h) => { c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, 22); outlinedText(c, 'START', w / 2, 80, 72, '#ffffff', 'rgba(0,0,0,0)', 0); }, disposables);
  { const s2 = C.sample(2.5); decal(s2, startTex, 3, 0.05).rotation.y += Math.PI; }

  // instanced helpers
  const dummy = new THREE.Object3D();
  // Instanced props. With `chunk` (metres) the instances are split into spatial tiles so the main and shadow passes
  // can frustum-cull them (big win for trees / grass spread over the whole park).
  function instanced(geo, mat, list, { ol = 0, olRef, cast = true, colors, chunk = 0 } = {}) {
    if (!list.length) return null;
    if (chunk) {
      const tiles = new Map();
      list.forEach((t, i) => { const k = `${Math.floor(t.x / chunk)},${Math.floor(t.z / chunk)}`; let a = tiles.get(k); if (!a) tiles.set(k, (a = { l: [], c: [] })); a.l.push(t); if (colors) a.c.push(colors[i]); });
      let first = null;
      for (const { l, c } of tiles.values()) { const m = instanced(geo, mat, l, { ol, olRef, cast, colors: colors ? c : null }); first = first || m; }
      return first;
    }
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((t, i) => { dummy.position.set(t.x, t.y, t.z); dummy.rotation.set(t.rx || 0, t.ry || 0, t.rz || 0); dummy.scale.set(t.sx ?? t.s ?? 1, t.sy ?? t.s ?? 1, t.sz ?? t.s ?? 1); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); if (colors) im.setColorAt(i, new THREE.Color(colors[i])); });
    im.castShadow = cast; im.receiveShadow = true;
    im.computeBoundingSphere();
    if (ol) outline(im, ol, undefined, olRef);
    registerInstanced(im, list);
    add(im); return im;
  }

  // corners: chevron A-frames on the outside, cones + kerbs on the inside
  const corners = [];
  {
    const ang = (m) => { const a = C.rawExt(m - 12), b = C.rawExt(m), c = C.rawExt(m + 12); const h1 = Math.atan2(b[1] - a[1], b[0] - a[0]), h2 = Math.atan2(c[1] - b[1], c[0] - b[0]); let d = h2 - h1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return d; };
    const ranges = [[20, C.LAP1_END_DRAW - 20], [C.MAP_TO - 40, C.finishM - 10]];
    for (const [a, b] of ranges) {
      let best = null;
      for (let m = a; m < b; m += 4) {
        const d = ang(m);
        if (Math.abs(d) > 0.45) { if (!best || Math.abs(d) > Math.abs(best.d)) best = { m, d }; }
        else if (best) { if (!corners.some((c) => Math.abs(c.m - best.m) < 50)) corners.push(best); best = null; }
      }
    }
  }
  const aframeL = [], aframeR = [], cones = [], kerbs = [];
  for (const c of corners) {
    const turnRight = c.d > 0; // heading increases -> turning toward +right (x east, z south)
    for (let k = -2; k <= 2; k++) {
      const s = C.sample(c.m + k * 5);
      const side = turnRight ? -1 : 1; // outside of the bend
      const off = PATH_W / 2 + 1.6;
      const x = s.x + s.rx * off * side, z = s.z + s.rz * off * side;
      if (!clearOf(x, z, 0.3) && false) continue;
      (turnRight ? aframeR : aframeL).push({ x, y: C.heightAt(x, z), z, ry: Math.atan2(-s.tz, s.tx) + (side > 0 ? Math.PI : 0) });
    }
    for (let k = -3; k <= 3; k++) {
      const s = C.sample(c.m + k * 3.5);
      const side = turnRight ? 1 : -1;
      const off = PATH_W / 2 + 0.7;
      cones.push({ x: s.x + s.rx * off * side, y: C.heightAt(s.x + s.rx * off * side, s.z + s.rz * off * side), z: s.z + s.rz * off * side, ry: rnd() * 6 });
      for (let q = 0; q < 2; q++) {
        const s2 = C.sample(c.m + k * 3.5 + q * 1.75); const o2 = PATH_W / 2 + 0.1;
        kerbs.push({ x: s2.x + s2.rx * o2 * side, y: s2.y - 0.05, z: s2.z + s2.rz * o2 * side, ry: Math.atan2(s2.tx, s2.tz), red: (k * 2 + q) % 2 === 0 });
      }
    }
  }
  anchors.corners = corners;
  {
    const chev = canvasTexture(256, 96, (c, w, h) => {
      c.fillStyle = '#2f6fe0'; c.fillRect(0, 0, w, h); c.fillStyle = '#ffffff';
      for (let i = 0; i < 4; i++) { const x0 = 18 + i * 60; c.beginPath(); c.moveTo(x0, 12); c.lineTo(x0 + 26, 12); c.lineTo(x0 + 54, h / 2); c.lineTo(x0 + 26, h - 12); c.lineTo(x0, h - 12); c.lineTo(x0 + 28, h / 2); c.closePath(); c.fill(); }
      c.strokeStyle = '#1b3f8f'; c.lineWidth = 8; c.strokeRect(0, 0, w, h);
    });
    const chevL = chev.clone(); chevL.repeat.x = -1; chevL.offset.x = 1; chevL.wrapS = THREE.RepeatWrapping; chevL.needsUpdate = true;
    disposables.push(chev, chevL);
    const panel = (tex) => {
      const a = new THREE.BoxGeometry(3.2, 1.2, 0.12); a.rotateX(-0.32); a.translate(0, 0.62, 0.22);
      const b = new THREE.BoxGeometry(3.2, 1.2, 0.12); b.rotateX(0.32); b.translate(0, 0.62, -0.22); b.rotateY(Math.PI);
      return mergeGeometries([a, b]);
    };
    const pg = panel(); addOutlineNormals(pg);
    instanced(pg, toon(0xffffff, { map: chev }), aframeR, { ol: 2.5 });
    instanced(pg, toon(0xffffff, { map: chevL }), aframeL, { ol: 2.5 });
    const coneTex = canvasTexture(16, 64, (c, w, h) => { for (let i = 0; i < 4; i++) { c.fillStyle = i % 2 ? '#ffffff' : '#ff6a2b'; c.fillRect(0, (i * h) / 4, w, h / 4); } });
    disposables.push(coneTex);
    const cg = new THREE.CylinderGeometry(0.06, 0.32, 0.9, 12, 1); cg.translate(0, 0.5, 0);
    const cb = new THREE.BoxGeometry(0.8, 0.08, 0.8); cb.translate(0, 0.04, 0);
    instanced(cg, toon(0xffffff, { map: coneTex }), cones, { ol: 2 });
    instanced(cb, toon(0xff6a2b), cones, { ol: 1.5 });
    const kg = new THREE.BoxGeometry(0.5, 0.22, 1.75); kg.translate(0, 0.11, 0);
    instanced(kg, toon(0xffffff), kerbs.map((k) => k), { ol: 1.5, colors: kerbs.map((k) => (k.red ? 0xe8313f : 0xffffff)) });
  }

  // signs: THE HILL, km boards, lap board
  const signs = new THREE.Group(); add(signs);
  function board(s, side, w, h, draw, { postH = 1.6, face = 0, scale = 1 } = {}) {
    const tex = textTexture(512, Math.round(512 * h / w), draw, disposables);
    const g = new THREE.Group();
    const b = mesh(new RoundedBoxGeometry(w, h, 0.25, 2, 0.08), [toon(0x5b3a24), toon(0x5b3a24), toon(0x5b3a24), toon(0x5b3a24), toon(0xffffff, { map: tex }), toon(0xffffff, { map: tex })], { ol: 3 });
    b.position.y = postH + h / 2; g.add(b);
    const post = new THREE.BoxGeometry(0.25, postH + h * 0.5, 0.25);
    for (const sx of [-1, 1]) { const p = mesh(post, toon(0x8a5a36), { ol: 2 }); p.position.set(sx * w * 0.35, (postH + h * 0.5) / 2, -0.1); g.add(p); }
    const off = PATH_W / 2 + 2.2 + w * 0.15;
    const x = s.x + s.rx * off * side, z = s.z + s.rz * off * side;
    g.position.set(x, C.heightAt(x, z) - 0.1, z);
    // face oncoming runners, angled toward the path
    g.rotation.y = Math.atan2(-s.tx, -s.tz) + side * 0.5 + face;
    g.scale.setScalar(scale);
    signs.add(g); return g;
  }
  const hillM = 1720;
  const hillS = C.sample(hillM - 10);
  anchors.hillSign = board(hillS, 1, 6, 3.2, (c, w, h) => {
    c.fillStyle = '#ffd23f'; roundRect(c, 0, 0, w, h, 40); c.fill(); c.lineWidth = 16; c.strokeStyle = '#1b1b3a'; roundRect(c, 8, 8, w - 16, h - 16, 34); c.stroke();
    c.fillStyle = '#3aa845'; c.beginPath(); c.moveTo(40, h - 40); c.lineTo(150, 70); c.lineTo(260, h - 40); c.closePath(); c.fill(); c.strokeStyle = '#1b1b3a'; c.lineWidth = 8; c.stroke();
    c.fillStyle = '#fff'; c.beginPath(); c.moveTo(118, 118); c.lineTo(150, 70); c.lineTo(182, 118); c.closePath(); c.fill();
    outlinedText(c, 'THE', 380, h * 0.3, 72, '#ffffff', '#1b1b3a', 0.2);
    outlinedText(c, 'HILL', 370, h * 0.66, 120, '#ff3d8b', '#1b1b3a', 0.16);
  }, { postH: 1.4 });
  anchors.hillM = hillM;
  for (const km of [1, 2, 3, 4]) {
    const m = km * 1000; const s = C.sample(C.geoOf(m));
    board(s, -1, 1.6, 1.3, (c, w, h) => { c.fillStyle = '#ffffff'; roundRect(c, 0, 0, w, h, 50); c.fill(); c.fillStyle = '#ff3d8b'; roundRect(c, 20, 20, w - 40, h - 40, 36); c.fill(); outlinedText(c, `${km}K`, w / 2, h / 2 + 8, 230, '#ffffff', '#1b1b3a', 0.14); }, { postH: 0.7 });
  }
  const lapS = C.sample(2500 - 25);
  anchors.lapBoard = board(lapS, 1, 4.4, 2.6, (c, w, h) => {
    c.fillStyle = '#1b1b3a'; roundRect(c, 0, 0, w, h, 40); c.fill(); c.fillStyle = '#2e9bff'; roundRect(c, 14, 14, w - 28, h - 28, 30); c.fill();
    outlinedText(c, 'LAP', w / 2, h * 0.28, 90, '#ffffff', '#1b1b3a', 0.18);
    outlinedText(c, '2 OF 2', w / 2, h * 0.66, 150, '#ffe14d', '#1b1b3a', 0.14);
  }, { postH: 1.2 });
  anchors.lapM = 2500;

  // bunting + fences + crowd zones around start/finish/hill
  const flagList = [], poleList = [], ropes = [], fences = [];
  function buntingRun(m0, m1, side, height = 3.2, every = 12) {
    let prev = null;
    for (let m = m0; m <= m1; m += every) {
      const s = C.sample(m); const off = PATH_W / 2 + 1.0;
      const x = s.x + s.rx * off * side, z = s.z + s.rz * off * side, y = C.heightAt(x, z);
      poleList.push({ x, y, z });
      const top = new THREE.Vector3(x, y + height, z);
      if (prev) {
        const pts = [];
        for (let i = 0; i <= 12; i++) { const t = i / 12; const p = prev.clone().lerp(top, t); p.y -= Math.sin(t * Math.PI) * 0.6; pts.push(p); }
        ropes.push(pts);
        for (let i = 1; i < 12; i++) { const p = pts[i]; const d = pts[i + 1].clone().sub(pts[i - 1]); flagList.push({ x: p.x, y: p.y, z: p.z, ry: Math.atan2(-d.z, d.x) }); }
      }
      prev = top;
    }
  }
  function fenceRun(m0, m1, side, off = PATH_W / 2 + 2.2) {
    for (let m = m0; m <= m1; m += 2.4) { const s = C.sample(m); const x = s.x + s.rx * off * side, z = s.z + s.rz * off * side; fences.push({ x, y: C.heightAt(x, z), z, ry: Math.atan2(s.tx, s.tz) }); }
  }
  const fm = C.finishM;
  buntingRun(fm - 70, fm + 10, 1); buntingRun(fm - 70, fm + 10, -1);
  buntingRun(-6, 50, 1); buntingRun(-6, 50, -1);
  fenceRun(fm - 60, fm + 14, 1); fenceRun(fm - 60, fm + 14, -1);
  fenceRun(-4, 40, 1); fenceRun(-4, 40, -1);
  {
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([-0.3, 0, 0, 0.3, 0, 0, 0, -0.62, 0], 3)); tri.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
    const fcols = flagList.map((_, i) => [0xff3d8b, 0xffd23f, 0x2e9bff, 0x3ddc84, 0xff8a3d, 0xffffff][i % 6]);
    instanced(tri, toon(0xffffff, { side: THREE.DoubleSide }), flagList, { colors: fcols, cast: false });
    const pole = new THREE.CylinderGeometry(0.07, 0.09, 3.3, 6); pole.translate(0, 1.65, 0);
    instanced(pole, toon(0xffffff), poleList, { ol: 1.5 });
    const ropeGeo = new THREE.BufferGeometry().setFromPoints(ropes.flatMap((pts) => pts.slice(0, -1).flatMap((p, i) => [p, pts[i + 1]])));
    const rl = new THREE.LineSegments(ropeGeo, new THREE.LineBasicMaterial({ color: 0x333333 })); add(rl); disposables.push(ropeGeo);
    // white picket fence segments
    const pk = [];
    for (let i = 0; i < 4; i++) { const b = new THREE.BoxGeometry(0.16, 1.0, 0.06); b.translate(-0.9 + i * 0.6, 0.5, 0); pk.push(b); }
    const rail = new THREE.BoxGeometry(2.4, 0.12, 0.05); rail.translate(0, 0.65, 0.05); pk.push(rail);
    const rail2 = rail.clone(); rail2.translate(0, -0.35, 0); pk.push(rail2);
    const fenceGeo = mergeGeometries(pk); fenceGeo.rotateY(Math.PI / 2);
    instanced(fenceGeo, toon(0xffffff), fences, { ol: 1.8 });
  }

  // crowd zones (the crowd module fills these)
  const crowdZones = [];
  const zone = (m0, m1, side, depth, density, spacing = 1.35) => crowdZones.push({ m0, m1, side, off: PATH_W / 2 + 3.0, depth, density, spacing });
  zone(fm - 58, fm + 12, 1, 6, 1); zone(fm - 58, fm + 12, -1, 6, 1);
  zone(-2, 38, 1, 5, 0.9); zone(-2, 38, -1, 5, 0.9);
  zone(1940, 2010, 1, 4, 0.7); zone(1960, 2010, -1, 3, 0.6); // top of the hill
  zone(hillM - 10, hillM + 40, -1, 3, 0.55);
  zone(2440, 2490, -1, 3, 0.7); // lap board
  zone(hillM - 70, hillM + 10, 1, 3, 0.5); // foot of the climb (hill-cam background)
  zone(hillM - 70, hillM - 20, -1, 3, 0.45);
  zone(2080, 2160, 1, 4, 0.75); zone(2080, 2160, -1, 4, 0.75); // by the boating lake
  zone(800, 860, 1, 3, 0.6); zone(1250, 1310, -1, 3, 0.6); // tree avenue + far end
  anchors.crowdZones = crowdZones;

  // benches + cafe kiosks
  {
    const benches = park.pois.filter((p) => p.kind === 'bench' && inPark(p.pos[0], p.pos[1]) && clearOf(p.pos[0], p.pos[1], 1)).map((p) => ({ x: p.pos[0], y: C.heightAt(p.pos[0], p.pos[1]), z: p.pos[1], ry: rnd() * 6 }));
    const bg = mergeGeometries([new THREE.BoxGeometry(1.8, 0.12, 0.5).translate(0, 0.5, 0), new THREE.BoxGeometry(1.8, 0.4, 0.1).translate(0, 0.8, -0.22), new THREE.BoxGeometry(0.1, 0.5, 0.45).translate(-0.8, 0.25, 0), new THREE.BoxGeometry(0.1, 0.5, 0.45).translate(0.8, 0.25, 0)]);
    instanced(bg, toon(0xb5753f), benches, { ol: 1.5 });
    const cafes = park.pois.filter((p) => p.kind === 'cafe' && inPark(p.pos[0], p.pos[1]) && clearOf(p.pos[0], p.pos[1], 4));
    for (const c of cafes) {
      const g = new THREE.Group();
      g.add(mesh(new RoundedBoxGeometry(5, 3, 4, 2, 0.2), toon(0xfff3dc), { ol: 2.5 })).position.y = 1.5;
      const awn = canvasTexture(128, 16, (cx, w, h) => { for (let i = 0; i < 8; i++) { cx.fillStyle = i % 2 ? '#fff' : '#ff4f6d'; cx.fillRect(i * 16, 0, 16, h); } }); disposables.push(awn);
      const a = mesh(new THREE.BoxGeometry(5.6, 0.2, 2), toon(0xffffff, { map: awn }), { ol: 2 }); a.position.set(0, 2.9, 2.3); a.rotation.x = 0.35; g.add(a);
      const r = mesh(new THREE.ConeGeometry(4, 1.6, 4), toon(0x2e9bff), { ol: 2.5 }); r.position.y = 3.8; r.rotation.y = Math.PI / 4; g.add(r);
      g.position.set(c.pos[0], C.heightAt(c.pos[0], c.pos[1]), c.pos[1]); g.rotation.y = rnd() * 6; add(g);
      reserve(c.pos[0], c.pos[1], 5);
    }
  }

  // reserve zones for props / crowds before scattering trees
  for (const z of crowdZones) for (let m = z.m0 - 8; m <= z.m1 + 8; m += 4) { const s = C.sample(m); const o = z.off + z.depth / 2; reserve(s.x + s.rx * o * z.side, s.z + s.rz * o * z.side, z.depth / 2 + 3); }
  for (const s of [start, finish]) reserve(s.x, s.z, 14);
  function nearestOnRibbon(x, z) { let best = null, bd = 1e9; for (const s of ribbonSamples) { const d = (s[0] - x) ** 2 + (s[1] - z) ** 2; if (d < bd) { bd = d; best = s; } } return best; }
  anchors.nearestOnRibbon = nearestOnRibbon; anchors.ribbonSamples = ribbonSamples;
  const ribHash = new Map();
  for (const q of ribbonSamples) { const k = `${Math.floor(q[0] / 10)},${Math.floor(q[1] / 10)}`; let a = ribHash.get(k); if (!a) ribHash.set(k, (a = [])); a.push(q); }
  const onPath = (x, z, margin = 1) => {
    const cx = Math.floor(x / 10), cz = Math.floor(z / 10); const r2 = (PATH_W / 2 + margin) ** 2;
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const q of ribHash.get(`${cx + i},${cz + j}`) || []) if ((q[0] - x) ** 2 + (q[1] - z) ** 2 < r2) return true;
    return false;
  };
  anchors.reserve = reserve; anchors.clearOf = clearOf;

  // ---------- trees ----------
  const trees = [];
  const pushTree = (x, z, kind, s) => { if (!clearOf(x, z, 2.5 * s) || blocked(x, z, 1.5)) return false; trees.push({ x, z, kind, s }); reserve(x, z, 2.2 * s); return true; };
  for (const p of park.pois) if (p.kind === 'tree') pushTree(p.pos[0], p.pos[1], 0, 0.85 + rnd() * 0.35);
  for (const f of park.features) if (f.kind === 'wood' && f.closed) {
    const b = bbox(f.pts); const area = (b[2] - b[0]) * (b[3] - b[1]);
    for (let i = 0; i < area / 90; i++) { const x = b[0] + rnd() * (b[2] - b[0]), z = b[1] + rnd() * (b[3] - b[1]); if (pointInPoly(f.pts, x, z)) pushTree(x, z, 1, 0.9 + rnd() * 0.5); }
  }
  {
    const b = bbox(parkPoly);
    for (let i = 0; i < 2600; i++) {
      const x = b[0] + rnd() * (b[2] - b[0]), z = b[1] + rnd() * (b[3] - b[1]);
      if (!inPark(x, z)) continue;
      // clumps: denser near the park edge and away from the open lawns
      const edge = -signedDist(parkPoly, x, z);
      if (edge > 45 && rnd() < 0.75) continue;
      pushTree(x, z, rnd() < 0.7 ? 1 : 2, 0.8 + rnd() * 0.5);
    }
    // street trees outside the park
    for (const f of park.features) if (f.kind === 'road' && !f.closed) for (let i = 1; i < f.pts.length; i++) {
      const a = f.pts[i - 1], c = f.pts[i]; const L = Math.hypot(c[0] - a[0], c[1] - a[1]);
      for (let d = 0; d < L; d += 22) { const t = d / L; const x = a[0] + (c[0] - a[0]) * t, z = a[1] + (c[1] - a[1]) * t; const nx = -(c[1] - a[1]) / L, nz = (c[0] - a[0]) / L; const o = 8 + rnd() * 2; if (rnd() < 0.5) pushTree(x + nx * o, z + nz * o, 0, 0.6 + rnd() * 0.2); }
    }
  }
  {
    const greens = [0x3cb44b, 0x4cc552, 0x2fa04a, 0x63c94a, 0x7fd14a, 0x34a853];
    const trunkG = new THREE.CylinderGeometry(0.32, 0.5, 4.2, 7); trunkG.translate(0, 2.1, 0);
    const lolli = new THREE.IcosahedronGeometry(3.2, 1); lolli.scale(1, 1.08, 1); lolli.translate(0, 6.6, 0);
    const blob = mergeGeometries([new THREE.IcosahedronGeometry(3.0, 1).translate(0, 6.2, 0), new THREE.IcosahedronGeometry(2.3, 0).translate(1.9, 5.3, 0.6), new THREE.IcosahedronGeometry(2.2, 0).translate(-1.7, 5.5, -0.8), new THREE.IcosahedronGeometry(2.0, 0).translate(0.2, 8.2, 0.3)].map(flatGeo));
    const cone = mergeGeometries([new THREE.ConeGeometry(3.0, 4.2, 8).translate(0, 5.0, 0), new THREE.ConeGeometry(2.4, 3.6, 8).translate(0, 7.2, 0), new THREE.ConeGeometry(1.6, 3.0, 8).translate(0, 9.2, 0)].map(flatGeo));
    const tlist = trees.map((t) => ({ x: t.x, y: C.heightAt(t.x, t.z) - 0.2, z: t.z, ry: rnd() * 6.28, s: t.s }));
    instanced(trunkG, toon(0x8a5a36), tlist, { ol: 2, olRef: 40, chunk: 160 });
    const crownMat = toon(0xffffff);
    lolli.computeVertexNormals();
    const kinds = [lolli, blob, cone];
    kinds.forEach((g, k) => {
      const l = tlist.filter((_, i) => trees[i].kind === k);
      instanced(g, crownMat, l, { ol: 2.2, olRef: 40, colors: l.map(() => greens[Math.floor(rnd() * greens.length)]), chunk: 160 });
    });
    anchors.treeCount = trees.length;
  }

  // ---------- flowers + grass tufts along the course (instanced) ----------
  {
    const tuft = mergeGeometries([0, 1, 2, 3].map((i) => { const c = new THREE.ConeGeometry(0.09, 0.55, 3); c.translate(0, 0.27, 0); c.rotateZ((i - 1.5) * 0.25); c.rotateY(i * 1.7); c.translate((i - 1.5) * 0.08, 0, (i % 2) * 0.06); return c.index ? c.toNonIndexed() : c; }));
    const flower = mergeGeometries([new THREE.CylinderGeometry(0.03, 0.03, 0.35, 4).translate(0, 0.17, 0).toNonIndexed(), new THREE.IcosahedronGeometry(0.13, 0).translate(0, 0.38, 0)]);
    const tl = [], fl = [], fc = [];
    for (let i = 0; i < 9000; i++) {
      const sm = ribbonSamples[Math.floor(rnd() * ribbonSamples.length)]; const a = rnd() * 6.283, r = PATH_W / 2 + 1 + rnd() * 22;
      const x = sm[0] + Math.cos(a) * r, z = sm[1] + Math.sin(a) * r;
      if (!inPark(x, z) || blocked(x, z, 0.5) || !clearOf(x, z, 0.2)) continue;
      const y = C.heightAt(x, z) - 0.03;
      if (rnd() < 0.62) tl.push({ x, y, z, ry: rnd() * 6, s: 0.5 + rnd() * 0.6 });
      else { fl.push({ x, y, z, ry: rnd() * 6, s: 0.35 + rnd() * 0.25 }); fc.push(['#ff5d8f', '#ffd93b', '#ffffff', '#b06bff', '#ff8a3d', '#57c7ff'][Math.floor(rnd() * 6)]); }
    }
    instanced(tuft, toon(0x4fbf38), tl, { cast: false, chunk: 120 });
    instanced(flower, toon(0xffffff), fl, { cast: false, colors: fc, chunk: 120 });
  }

  // ---------- sky, clouds, distant hills ----------
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(0x2f8cff) }, mid: { value: new THREE.Color(0x8fd3ff) }, bot: { value: new THREE.Color(0xe9f8ff) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);\n#include <colorspace_fragment>\n}',
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(5000, 32, 16), skyMat); sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky); disposables.push(skyMat, sky.geometry);
  const cloudGeo = mergeGeometries([[0, 0, 0, 14], [13, -3, 2, 10], [-13, -4, -1, 10], [6, 6, -2, 9], [-6, 5, 3, 8], [22, -6, 0, 6], [-22, -7, 1, 6]].map(([x, y, z, r]) => new THREE.IcosahedronGeometry(r, 2).translate(x, y, z)));
  cloudGeo.scale(1, 0.7, 0.8);
  const ctr = [T.x0 + Wm / 2, T.z0 + Hm / 2];
  const clouds = [];
  for (let i = 0; i < 26; i++) { const a = rnd() * 6.28, r = 300 + rnd() * 1300; clouds.push({ x: ctr[0] + Math.cos(a) * r, y: 170 + rnd() * 120, z: ctr[1] + Math.sin(a) * r, ry: rnd() * 6, s: 0.8 + rnd() * 1.4 }); }
  const cloudMesh = instanced(cloudGeo, toon(0xffffff, { emissive: 0x6a88b0, emissiveIntensity: 0.35, fog: false }), clouds, { ol: 1.5, olRef: 300, cast: false });
  const hills = [];
  for (let i = 0; i < 18; i++) { const a = (i / 18) * 6.28 + rnd() * 0.2; const r = 1900 + rnd() * 500; hills.push({ x: ctr[0] + Math.cos(a) * r, y: -40, z: ctr[1] + Math.sin(a) * r, sx: 320 + rnd() * 260, sy: 80 + rnd() * 90, sz: 260 + rnd() * 200, ry: rnd() * 6 }); }
  instanced(new THREE.SphereGeometry(1, 24, 12), toon(0x6cc77a), hills, { cast: false, colors: hills.map((_, i) => [0x7acb7f, 0x5fb985, 0x8fd18a][i % 3]) });

  function update(t) {
    waterU.uTime.value = t;
    for (const b of boats) { b.g.position.y = (C.lake?._waterLevel ?? 0) + 0.1 + Math.sin(t * 1.7 + b.ph) * 0.08; b.g.rotation.z = Math.sin(t * 1.3 + b.ph) * 0.06; b.g.rotation.y = b.a + Math.sin(t * 0.1 + b.ph) * 0.4; }
    if (cloudMesh) cloudMesh.position.x = Math.sin(t * 0.01) * 40;
  }
  function dispose() {
    group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    for (const d of disposables) d.dispose?.();
    scene.remove(group); scene.remove(sky);
  }
  return { group, anchors, update, dispose, inPark, clearOf, reserve, blocked, groundTex, onPath, registerInstanced, clearArea, redrawGround };
}

// non-indexed with per-face normals (the toon material has no flatShading option)
export function flatGeo(g) { const n = g.index ? g.toNonIndexed() : g; n.computeVertexNormals(); return n; }
export function centroid(pts) { let x = 0, z = 0; for (const p of pts) { x += p[0]; z += p[1]; } return [x / pts.length, z / pts.length]; }
export function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
