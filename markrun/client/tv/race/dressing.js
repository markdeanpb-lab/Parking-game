// Park life set dressing: playground toys, picnic blankets, dog walkers, prams, flower beds, coffee cart.
// Everything static is merged or instanced (about 12 draw calls + outlines); people are Pips (added to the crowd).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { toon, mesh, outline, canvasTexture } from './toon.js';
import { mulberry, textTexture, outlinedText, roundRect, centroid } from './world.js';
import { bbox, pointInPoly, PATH_W } from './course.js';

const col = (geo, hex) => {
  geo = geo.index ? geo.toNonIndexed() : geo;
  const c = new THREE.Color(hex).convertSRGBToLinear(); const n = geo.getAttribute('position').count; const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (geo.getAttribute('uv')) geo.deleteAttribute('uv');
  return geo;
};
const place = (geo, x, y, z, ry = 0, s = 1.6) => { geo.scale(s, s, s); geo.rotateY(ry); geo.translate(x, y, z); return geo; };

export function buildDressing(scene, C, world, park) {
  const R = mulberry(777);
  const group = new THREE.Group(); scene.add(group);
  const disposables = [];
  const crowd = []; // extra Pips: { x, y, z, yaw, scale, colour?, zone }
  const tileZone = (x, z) => `lawn:${Math.floor(x / 140)},${Math.floor(z / 140)}`;
  const pip = (x, z, yaw, scale = 0.8, colour) => crowd.push({ x, y: C.heightAt(x, z), z, yaw, scale, colour, zone: tileZone(x, z) });
  const { ribbonSamples } = world.anchors;
  // a random lawn spot within [dMin, dMax] metres of the course, clear of everything
  function lawnSpot(dMin, dMax, r) {
    for (let k = 0; k < 40; k++) {
      const s = ribbonSamples[Math.floor(R() * ribbonSamples.length)]; const a = R() * Math.PI * 2, d = dMin + R() * (dMax - dMin);
      const x = s[0] + Math.cos(a) * d, z = s[1] + Math.sin(a) * d;
      if (!world.inPark(x, z) || world.blocked(x, z, r + 1) || !world.clearOf(x, z, r) || world.onPath(x, z, r + 2)) continue;
      world.reserve(x, z, r);
      // face roughly toward the course
      return { x, z, y: C.heightAt(x, z), toPath: Math.atan2(s[0] - x, s[1] - z) };
    }
    return null;
  }

  // ---------- playground toys (one merged mesh) ----------
  {
    const geos = [];
    const pal = ['#ff5d8f', '#ffd23f', '#2e9bff', '#3ddc84', '#ff8a3d', '#b07bff'];
    const slide = (x, y, z, ry, c1, c2) => {
      geos.push(place(col(new THREE.BoxGeometry(1.6, 0.2, 1.6).translate(0, 2.0, 0), c1), x, y, z, ry));
      for (const [px, pz] of [[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]]) geos.push(place(col(new THREE.CylinderGeometry(0.08, 0.08, 2.0, 6).translate(px, 1.0, pz), '#ffffff'), x, y, z, ry));
      geos.push(place(col(new THREE.ConeGeometry(1.25, 1.0, 4).rotateY(Math.PI / 4).translate(0, 2.6, 0), c2), x, y, z, ry));
      const sl = new THREE.BoxGeometry(0.9, 0.12, 3.3); sl.rotateX(-0.62); sl.translate(0, 1.05, 2.1); geos.push(place(col(sl, c2), x, y, z, ry));
      const ld = new THREE.BoxGeometry(0.8, 0.08, 2.4); ld.rotateX(1.0); ld.translate(0, 1.0, -1.3); geos.push(place(col(ld, '#ffffff'), x, y, z, ry));
    };
    const swings = (x, y, z, ry, c1) => {
      for (const sx of [-1.8, 1.8]) for (const sz of [-0.6, 0.6]) { const l = new THREE.CylinderGeometry(0.08, 0.08, 2.8, 6); l.rotateX(sz > 0 ? 0.22 : -0.22); l.translate(sx, 1.35, sz * 0.5); geos.push(place(col(l, c1), x, y, z, ry)); }
      geos.push(place(col(new THREE.CylinderGeometry(0.1, 0.1, 3.8, 8).rotateZ(Math.PI / 2).translate(0, 2.7, 0), c1), x, y, z, ry));
      for (const sx of [-0.8, 0.8]) {
        geos.push(place(col(new THREE.BoxGeometry(0.6, 0.08, 0.35).translate(sx, 0.75, 0), '#22202c'), x, y, z, ry));
        for (const k of [-0.25, 0.25]) geos.push(place(col(new THREE.CylinderGeometry(0.02, 0.02, 1.9, 4).translate(sx + k, 1.7, 0), '#888888'), x, y, z, ry));
      }
    };
    const dome = (x, y, z, c1) => { const g = new THREE.SphereGeometry(1.6, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2); geos.push(place(col(g, c1), x, y, z)); geos.push(place(col(new THREE.CylinderGeometry(0.4, 0.4, 0.5, 8).translate(0, 1.7, 0), '#ffffff'), x, y, z)); };
    const roundabout = (x, y, z, c1, c2) => { geos.push(place(col(new THREE.CylinderGeometry(1.5, 1.5, 0.25, 16).translate(0, 0.35, 0), c1), x, y, z)); geos.push(place(col(new THREE.CylinderGeometry(0.1, 0.1, 1.0, 6).translate(0, 0.9, 0), c2), x, y, z)); geos.push(place(col(new THREE.TorusGeometry(0.9, 0.06, 6, 16).rotateX(Math.PI / 2).translate(0, 1.2, 0), c2), x, y, z)); };
    const springer = (x, y, z, ry, c1) => { geos.push(place(col(new THREE.SphereGeometry(0.45, 10, 8).scale(1, 0.9, 1.4).translate(0, 0.95, 0), c1), x, y, z, ry)); geos.push(place(col(new THREE.SphereGeometry(0.3, 8, 6).translate(0, 1.4, 0.55), c1), x, y, z, ry)); geos.push(place(col(new THREE.CylinderGeometry(0.12, 0.12, 0.6, 6).translate(0, 0.3, 0), '#888888'), x, y, z, ry)); };
    const makers = [slide, swings, dome, roundabout, springer];
    for (const f of park.features) {
      if (f.kind !== 'playground' || !f.closed) continue;
      const b = bbox(f.pts); const area = (b[2] - b[0]) * (b[3] - b[1]);
      const n = Math.max(1, Math.min(9, Math.round(area / 380)));
      const spots = [];
      for (let k = 0, tries = 0; k < n && tries < 80; tries++) {
        const x = b[0] + 3 + R() * (b[2] - b[0] - 6), z = b[1] + 3 + R() * (b[3] - b[1] - 6);
        if (!pointInPoly(f.pts, x, z) || spots.some((q) => Math.hypot(q[0] - x, q[1] - z) < 8.5)) continue;
        spots.push([x, z]); k++;
        const y = C.heightAt(x, z) - 0.05, ry = R() * 6.28, c1 = pal[Math.floor(R() * pal.length)], c2 = pal[Math.floor(R() * pal.length)];
        const m = makers[(k + spots.length + Math.floor(R() * 5)) % makers.length];
        if (m === slide || m === swings || m === springer) m(x, y, z, ry, c1, c2); else m(x, y, z, c1, c2);
        if (R() < 0.6) pip(x + 2.5, z + 1.5, R() * 6, 0.55);
      }
    }
    if (geos.length) { const m = mesh(mergeGeometries(geos), toon('#ffffff', { vertexColors: true }), { ol: 2, olRef: 30 }); group.add(m); }
  }

  // ---------- picnic blankets with sitters ----------
  {
    // the instance colour tints a checker: dark squares tinted, light stripes paler
    const checker = canvasTexture(64, 64, (g, w, h) => { for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { g.fillStyle = (i + j) % 2 ? '#ffffff' : '#c8c8c8'; g.fillRect(i * w / 6, j * h / 6, w / 6 + 1, h / 6 + 1); } });
    disposables.push(checker);
    const geo = new THREE.PlaneGeometry(2.8, 2.2); geo.rotateX(-Math.PI / 2);
    const list = [], cols = [], baskets = [];
    const bc = ['#ff4f6d', '#2e9bff', '#3ddc84', '#ffd23f', '#ff8a3d', '#b07bff'];
    for (let i = 0; i < 90; i++) {
      const sp = lawnSpot(12, 70, 3); if (!sp) continue;
      const ry = R() * 6.28;
      list.push({ x: sp.x, y: sp.y + 0.06, z: sp.z, ry }); cols.push(bc[i % bc.length]);
      baskets.push({ x: sp.x + Math.cos(ry) * 0.7, y: sp.y + 0.05, z: sp.z - Math.sin(ry) * 0.7, ry });
      const n = 1 + Math.floor(R() * 3);
      for (let k = 0; k < n; k++) { const a = ry + (k / n) * Math.PI * 2 + 0.5; const px = sp.x + Math.cos(a) * 0.9, pz = sp.z - Math.sin(a) * 0.9; pip(px, pz, sp.toPath + (R() - 0.5), 0.62 + R() * 0.15); }
    }
    const im = new THREE.InstancedMesh(geo, toon('#ffffff', { map: checker, polygonOffset: true, polygonOffsetFactor: -1 }), list.length);
    const d = new THREE.Object3D();
    list.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.rotation.set(0, t.ry, 0); d.updateMatrix(); im.setMatrixAt(i, d.matrix); im.setColorAt(i, new THREE.Color(cols[i])); });
    im.receiveShadow = true; im.computeBoundingSphere(); group.add(im);
    const bg = mergeGeometries([col(new RoundedBoxGeometry(0.7, 0.45, 0.5, 2, 0.08).translate(0, 0.22, 0), '#c98a4a'), col(new THREE.TorusGeometry(0.25, 0.04, 6, 12, Math.PI).translate(0, 0.45, 0), '#8a5a36')]);
    const bm = new THREE.InstancedMesh(bg, toon('#ffffff', { vertexColors: true }), baskets.length);
    baskets.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.rotation.set(0, t.ry, 0); d.updateMatrix(); bm.setMatrixAt(i, d.matrix); });
    bm.castShadow = true; bm.computeBoundingSphere(); outline(bm, 1.6, undefined, 20); group.add(bm);
  }

  // ---------- dog walkers + prams ----------
  {
    const dogGeo = mergeGeometries([
      new THREE.CapsuleGeometry(0.22, 0.5, 4, 8).rotateX(Math.PI / 2).translate(0, 0.45, 0),
      new THREE.SphereGeometry(0.22, 10, 8).translate(0, 0.72, 0.42),
      new THREE.SphereGeometry(0.1, 6, 5).scale(0.6, 1.4, 0.6).translate(-0.14, 0.86, 0.36), new THREE.SphereGeometry(0.1, 6, 5).scale(0.6, 1.4, 0.6).translate(0.14, 0.86, 0.36),
      new THREE.SphereGeometry(0.09, 6, 5).translate(0, 0.66, 0.64),
      ...[[-0.13, 0.25], [0.13, 0.25], [-0.13, -0.25], [0.13, -0.25]].map(([x, z]) => new THREE.CylinderGeometry(0.06, 0.06, 0.32, 6).translate(x, 0.16, z)),
      new THREE.CylinderGeometry(0.04, 0.03, 0.35, 5).rotateX(-0.9).translate(0, 0.6, -0.42),
    ].map((g) => (g.index ? g.toNonIndexed() : g)).map((g) => { g.deleteAttribute('uv'); return g; }));
    const pramGeo = mergeGeometries([
      col(new THREE.SphereGeometry(0.55, 12, 8, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55).scale(1, 0.8, 1.3).translate(0, 0.95, 0), '#ffffff'),
      col(new THREE.SphereGeometry(0.56, 12, 8, Math.PI, Math.PI, 0, Math.PI * 0.5).scale(1, 0.9, 0.9).translate(0, 0.95, -0.2), '#ffffff'),
      ...[[-0.45, 0.45], [0.45, 0.45], [-0.45, -0.45], [0.45, -0.45]].map(([x, z]) => col(new THREE.TorusGeometry(0.2, 0.06, 6, 12).rotateY(Math.PI / 2).translate(x, 0.22, z), '#22202c')),
      col(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 5).rotateX(0.6).translate(0, 1.15, -0.85), '#22202c'),
    ]);
    const dogs = [], dogCols = [], prams = [], pramCols = [];
    const dc = ['#c98a4a', '#3b2a20', '#f2e6d0', '#8a8a8a', '#e0b070', '#ffffff'];
    for (let i = 0; i < 64; i++) {
      const sp = lawnSpot(8, 60, 1.6); if (!sp) continue;
      const yaw = R() * 6.28; // walking direction
      pip(sp.x, sp.z, yaw, 0.82);
      const fx = Math.sin(yaw), fz = Math.cos(yaw);
      if (i % 4 === 3) { prams.push({ x: sp.x + fx * 1.4, y: sp.y, z: sp.z + fz * 1.4, ry: yaw, s: 1 }); pramCols.push(['#ffb3c7', '#b3dcff', '#c8f0b0', '#fff0a0'][i % 4]); }
      else { dogs.push({ x: sp.x + fx * 1.6 + fz * 0.8, y: sp.y, z: sp.z + fz * 1.6 - fx * 0.8, ry: yaw + (R() - 0.5) * 0.8, s: 0.8 + R() * 0.6 }); dogCols.push(dc[Math.floor(R() * dc.length)]); }
    }
    const d = new THREE.Object3D();
    const inst = (geo, mat, list, colsArr) => { const m = new THREE.InstancedMesh(geo, mat, list.length); list.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.rotation.set(0, t.ry, 0); d.scale.setScalar(t.s); d.updateMatrix(); m.setMatrixAt(i, d.matrix); if (colsArr) m.setColorAt(i, new THREE.Color(colsArr[i])); }); m.castShadow = true; m.receiveShadow = true; m.computeBoundingSphere(); outline(m, 2, undefined, 18); group.add(m); return m; };
    const dogMesh = dogs.length ? inst(dogGeo, toon('#ffffff'), dogs, dogCols) : null;
    // instance colour multiplies the vertex colours: white body/hood take the pastel, black wheels stay black
    if (prams.length) inst(pramGeo, toon('#ffffff', { vertexColors: true }), prams, pramCols);
    void dogMesh;
  }

  // ---------- flower beds near the course ----------
  {
    const beds = [], flowers = [], fcols = [];
    const fc = ['#ff5d8f', '#ffd23f', '#ffffff', '#b06bff', '#ff8a3d', '#ff3d3d'];
    for (let i = 0; i < 26; i++) {
      const sp = lawnSpot(9, 40, 3.2); if (!sp) continue;
      const r = 2.2 + R() * 0.8; beds.push({ x: sp.x, y: sp.y - 0.05, z: sp.z, s: r });
      const theme = [fc[i % fc.length], fc[(i + 2) % fc.length]];
      for (let k = 0; k < 60; k++) { const a = R() * 6.28, rr = Math.sqrt(R()) * (r - 0.25); flowers.push({ x: sp.x + Math.cos(a) * rr, y: sp.y + 0.25, z: sp.z + Math.sin(a) * rr, s: 0.8 + R() * 0.5 }); fcols.push(theme[k % 2]); }
    }
    const d = new THREE.Object3D();
    const bedGeo = mergeGeometries([col(new THREE.CylinderGeometry(1, 1.05, 0.35, 20).translate(0, 0.17, 0), '#4f9e3a'), col(new THREE.TorusGeometry(1.02, 0.08, 6, 24).rotateX(Math.PI / 2).translate(0, 0.35, 0), '#ffffff')]);
    const bm = new THREE.InstancedMesh(bedGeo, toon('#ffffff', { vertexColors: true }), beds.length);
    beds.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.scale.set(t.s, 1, t.s); d.updateMatrix(); bm.setMatrixAt(i, d.matrix); });
    bm.receiveShadow = true; bm.computeBoundingSphere(); outline(bm, 1.6, undefined, 20); group.add(bm);
    const fg = new THREE.IcosahedronGeometry(0.24, 0);
    const fm = new THREE.InstancedMesh(fg, toon('#ffffff', { flatShading: true }), flowers.length);
    d.scale.setScalar(1);
    flowers.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.scale.setScalar(t.s); d.updateMatrix(); fm.setMatrixAt(i, d.matrix); fm.setColorAt(i, new THREE.Color(fcols[i])); });
    fm.computeBoundingSphere(); group.add(fm);
  }

  // ---------- coffee cart by the start ----------
  {
    const s = C.sample(55); const side = -1; const off = PATH_W / 2 + 9;
    let x = s.x + s.rx * off * side, z = s.z + s.rz * off * side;
    if (world.blocked(x, z, 3)) { x = s.x - s.rx * off * side; z = s.z - s.rz * off * side; }
    const g = new THREE.Group();
    const awn = canvasTexture(128, 16, (c, w, h) => { for (let i = 0; i < 8; i++) { c.fillStyle = i % 2 ? '#fff' : '#3a9d5d'; c.fillRect(i * 16, 0, 16, h); } }); disposables.push(awn);
    g.add(mesh(new RoundedBoxGeometry(3.2, 1.6, 1.8, 3, 0.25), toon('#3a9d5d'), { ol: 3, olRef: 20 })).position.y = 1.15;
    const counter = mesh(new RoundedBoxGeometry(3.4, 0.15, 2.0, 2, 0.05), toon('#f4e3c0'), { ol: 2, olRef: 20 }); counter.position.y = 2.0; g.add(counter);
    const a = mesh(new THREE.BoxGeometry(3.8, 0.15, 2.4), toon('#ffffff', { map: awn }), { ol: 2.5, olRef: 20 }); a.position.y = 3.2; g.add(a);
    for (const sx of [-1.6, 1.6]) { const p = mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.2, 6), toon('#ffffff'), { ol: 1.5 }); p.position.set(sx, 2.6, 0.9); g.add(p); }
    for (const sx of [-1.1, 1.1]) { const w = mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.2, 14).rotateZ(Math.PI / 2), toon('#22202c'), { ol: 2 }); w.position.set(sx, 0.4, 0.95); g.add(w); const w2 = w.clone(); w2.position.z = -0.95; g.add(w2); }
    const cup = mesh(new THREE.CylinderGeometry(0.75, 0.55, 1.3, 16), toon('#ffffff'), { ol: 3, olRef: 20 }); cup.position.y = 4.0; g.add(cup);
    const lid = mesh(new THREE.CylinderGeometry(0.82, 0.82, 0.22, 16), toon('#5a3a24'), { ol: 2.5, olRef: 20 }); lid.position.y = 4.75; g.add(lid);
    const sl = mesh(new THREE.CylinderGeometry(0.72, 0.62, 0.45, 16), toon('#c98a4a'), { ol: 2, olRef: 20 }); sl.position.y = 3.95; g.add(sl);
    const tex = textTexture(512, 128, (c, w, h) => { c.fillStyle = '#1a1420'; roundRect(c, 0, 0, w, h, 28); c.fill(); c.fillStyle = '#ffd23f'; roundRect(c, 6, 6, w - 12, h - 12, 22); c.fill(); outlinedText(c, 'FLAT WHITES', w / 2, h / 2 + 4, 62, '#ffffff', '#1a1420', 0.2); }, disposables);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.7), toon('#ffffff', { map: tex })); sign.position.set(0, 1.4, 0.92); g.add(sign);
    const sign2 = sign.clone(); sign2.rotation.y = Math.PI; sign2.position.z = -0.92; g.add(sign2);
    const yaw = Math.atan2(s.x - x, s.z - z);
    g.position.set(x, C.heightAt(x, z), z); g.rotation.y = yaw; group.add(g);
    // a queue of runners-to-be wanting coffee
    for (let k = 0; k < 5; k++) { const qx = x + Math.sin(yaw) * (2.2 + k * 1.1) + Math.cos(yaw) * (k % 2 ? 0.3 : -0.3), qz = z + Math.cos(yaw) * (2.2 + k * 1.1); pip(qx, qz, yaw + Math.PI, 0.8); }
    world.anchors.coffeeCart = g;
  }

  function update() {}
  function dispose() { group.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); for (const d of disposables) d.dispose?.(); scene.remove(group); }
  return { group, crowd, update, dispose };
}
export { centroid };
