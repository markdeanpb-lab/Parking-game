// Original chunky fairground for the funfair-weekend diversions (only built when a runner has diversions).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { toon, mesh, canvasTexture, outline } from './toon.js';
import { textTexture, outlinedText, roundRect, mulberry } from './world.js';

const stripes = (a, b, n = 12, vertical = true) => canvasTexture(256, 256, (g, w, h) => { for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? a : b; if (vertical) g.fillRect((i * w) / n, 0, w / n + 1, h); else g.fillRect(0, (i * h) / n, w, h / n + 1); } });

export function buildFunfair(scene, C, world, diversion) {
  const R = mulberry(42);
  const group = new THREE.Group(); scene.add(group);
  const disposables = [];
  const spinners = [];
  const ol = (m, w = 3) => { outline(m, w, undefined, 30); return m; };
  const M = (geo, mat, w = 3) => mesh(geo, mat, { ol: w, olRef: 30 });

  // --- midline of the strip between the usual route and the diverted route ---
  const mids = [];
  for (let i = 0; i < diversion.path.length; i++) {
    const p = diversion.path[i]; const q = world.anchors.nearestOnRibbon(p[0], p[1]);
    const gap = Math.hypot(p[0] - q[0], p[1] - q[1]);
    mids.push({ x: (p[0] + q[0]) / 2, z: (p[1] + q[1]) / 2, gap });
  }
  // arc-length along mids
  let acc = 0; mids.forEach((m, i) => { if (i) acc += Math.hypot(m.x - mids[i - 1].x, m.z - mids[i - 1].z); m.s = acc; });
  const total = acc;
  const at = (s) => {
    let i = 0; while (i < mids.length - 2 && mids[i + 1].s < s) i++;
    const a = mids[i], b = mids[i + 1]; const f = Math.max(0, Math.min(1, (s - a.s) / Math.max(1e-6, b.s - a.s)));
    const x = a.x + (b.x - a.x) * f, z = a.z + (b.z - a.z) * f;
    const l = Math.hypot(b.x - a.x, b.z - a.z) || 1;
    return { x, z, gap: a.gap + (b.gap - a.gap) * f, tx: (b.x - a.x) / l, tz: (b.z - a.z) / l, y: C.heightAt(x, z) };
  };
  // usable stretch: where the strip is wide
  const wide = mids.filter((m) => m.gap > 26);
  const s0 = wide.length ? wide[0].s : total * 0.25, s1 = wide.length ? wide.at(-1).s : total * 0.75;
  const spots = (n) => Array.from({ length: n }, (_, i) => at(s0 + ((i + 0.5) / n) * (s1 - s0)));
  const place = (obj, p, extraYaw = 0) => { obj.position.set(p.x, p.y - 0.1, p.z); obj.rotation.y = Math.atan2(p.tx, p.tz) + extraYaw; group.add(obj); return obj; };
  const anchors = { center: at((s0 + s1) / 2), rides: [] };

  const S = spots(7); // ride slots along the strip
  // 1) Ferris wheel (at the widest slot)
  {
    const p = S.slice(1, 6).sort((a, b) => b.gap - a.gap)[0];
    const g = new THREE.Group();
    const Rr = 17; // big and readable from the hill and drone cams; the wheel plane runs along the strip
    const hubY = Rr + 2.6;
    const legG = new THREE.CylinderGeometry(0.35, 0.5, hubY / Math.cos(0.32) + 1, 8);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = M(legG, toon('#ffffff')); l.position.set(sx * 1.8, hubY / 2, sz * Math.tan(0.32) * hubY / 2); l.rotation.x = -sz * 0.32; g.add(l); }
    const base = M(new RoundedBoxGeometry(6, 1, 8, 2, 0.3), toon('#2e9bff')); base.position.y = 0.5; g.add(base);
    const wheel = new THREE.Group(); wheel.position.y = hubY; g.add(wheel);
    const rim = M(new THREE.TorusGeometry(Rr, 0.45, 8, 64), toon('#ff3d8b')); rim.rotation.y = Math.PI / 2; rim.position.x = 1.2; wheel.add(rim);
    const rim2 = M(new THREE.TorusGeometry(Rr, 0.45, 8, 64), toon('#ff3d8b')); rim2.rotation.y = Math.PI / 2; rim2.position.x = -1.2; wheel.add(rim2);
    const hub = M(new THREE.CylinderGeometry(1.3, 1.3, 3.2, 16).rotateZ(Math.PI / 2), toon('#ffd23f')); wheel.add(hub);
    const n = 16; const cars = [];
    const lightPos = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const sp = M(new THREE.BoxGeometry(0.18, Rr, 0.18).translate(0, Rr / 2, 0), toon('#ffffff'), 2); sp.rotation.x = a; sp.position.x = 1.2; wheel.add(sp);
      const sp2 = sp.clone(); sp2.position.x = -1.2; wheel.add(sp2);
      const pivot = new THREE.Group(); pivot.position.set(0, Math.cos(a) * Rr, Math.sin(a) * Rr); wheel.add(pivot);
      const car = new THREE.Group(); pivot.add(car);
      const col = ['#ffd23f', '#3ddc84', '#2e9bff', '#ff8a3d', '#b07bff'][i % 5];
      const tub = M(new RoundedBoxGeometry(1.7, 1.3, 1.5, 2, 0.35), toon(col)); tub.position.y = -1.3; car.add(tub);
      const roof = M(new THREE.ConeGeometry(1.2, 0.7, 4).rotateY(Math.PI / 4), toon('#ffffff'), 2); roof.position.y = -0.1; car.add(roof);
      cars.push(pivot);
      for (let k = 0; k < 3; k++) { const b = a + (k / 3) * (Math.PI * 2 / n); lightPos.push([1.2, Math.cos(b) * Rr, Math.sin(b) * Rr], [-1.2, Math.cos(b) * Rr, Math.sin(b) * Rr]); }
    }
    const lights = new THREE.InstancedMesh(new THREE.SphereGeometry(0.32, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), lightPos.length);
    const d = new THREE.Object3D();
    lightPos.forEach((q, i) => { d.position.set(...q); d.updateMatrix(); lights.setMatrixAt(i, d.matrix); lights.setColorAt(i, new THREE.Color(['#fff27a', '#ff7ac8', '#7affff'][i % 3])); });
    wheel.add(lights);
    place(g, p, 0);
    spinners.push((t) => { wheel.rotation.x = t * 0.18; for (const c of cars) c.rotation.x = -t * 0.18; });
    anchors.rides.push({ kind: 'wheel', obj: g, pos: new THREE.Vector3(p.x, p.y + hubY, p.z), r: Rr });
    p.used = true;
  }
  // 2) Carousel
  {
    const p = S.filter((s) => !s.used).sort((a, b) => b.gap - a.gap)[0]; p.used = true;
    const g = new THREE.Group(); const Rr = Math.min(6.5, p.gap * 0.28); g.scale.setScalar(1.45);
    const st = stripes('#ffffff', '#ff4f6d', 16); disposables.push(st);
    const base = M(new THREE.CylinderGeometry(Rr, Rr + 0.3, 0.9, 32), toon('#ffffff', { map: st })); base.position.y = 0.45; g.add(base);
    const rot = new THREE.Group(); g.add(rot);
    const pole = M(new THREE.CylinderGeometry(0.7, 0.7, 5, 16), toon('#ffd23f')); pole.position.y = 3; rot.add(pole);
    const roofTex = stripes('#ffd23f', '#ff3d8b', 16); disposables.push(roofTex);
    const roof = M(new THREE.ConeGeometry(Rr + 0.8, 2.8, 16), toon('#ffffff', { map: roofTex })); roof.position.y = 6.6; rot.add(roof);
    const scal = M(new THREE.CylinderGeometry(Rr + 0.8, Rr + 0.8, 0.7, 16, 1, true), toon('#2e9bff', { side: THREE.DoubleSide })); scal.position.y = 4.9; rot.add(scal);
    const top = M(new THREE.SphereGeometry(0.5, 12, 8), toon('#ff3d8b')); top.position.y = 8.2; rot.add(top);
    const horses = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2; const r = Rr * 0.72;
      const hp = new THREE.Group(); hp.position.set(Math.cos(a) * r, 0, Math.sin(a) * r); hp.rotation.y = -a; rot.add(hp);
      const rod = M(new THREE.CylinderGeometry(0.06, 0.06, 4.2, 6), toon('#ffd23f'), 1.5); rod.position.y = 2.9; hp.add(rod);
      const horse = new THREE.Group(); hp.add(horse);
      const col = ['#ffffff', '#ffd6f0', '#d6f0ff', '#fff2b0'][i % 4];
      const bodyM = M(new RoundedBoxGeometry(0.7, 0.7, 1.6, 2, 0.3), toon(col)); horse.add(bodyM);
      const neck = M(new RoundedBoxGeometry(0.45, 0.9, 0.5, 2, 0.2), toon(col)); neck.position.set(0, 0.55, 0.7); neck.rotation.x = 0.4; horse.add(neck);
      const head = M(new RoundedBoxGeometry(0.45, 0.45, 0.8, 2, 0.2), toon(col)); head.position.set(0, 0.95, 1.05); horse.add(head);
      const mane = M(new RoundedBoxGeometry(0.15, 0.8, 0.3, 1, 0.06), toon(['#ff3d8b', '#2e9bff', '#3ddc84', '#ff8a3d'][i % 4]), 2); mane.position.set(0, 0.75, 0.55); mane.rotation.x = 0.4; horse.add(mane);
      const saddle = M(new RoundedBoxGeometry(0.75, 0.2, 0.6, 1, 0.08), toon('#ff3d8b'), 2); saddle.position.y = 0.4; horse.add(saddle);
      for (const [lx, lz] of [[-0.22, 0.55], [0.22, 0.55], [-0.22, -0.55], [0.22, -0.55]]) { const l = M(new THREE.BoxGeometry(0.16, 0.7, 0.16), toon(col), 1.5); l.position.set(lx, -0.55, lz); l.rotation.x = lz > 0 ? -0.5 : 0.5; horse.add(l); }
      horse.rotation.y = Math.PI / 2;
      horses.push({ horse, ph: i * 0.8 });
    }
    place(g, p);
    spinners.push((t) => { rot.rotation.y = t * 0.6; for (const h of horses) h.horse.position.y = 2.0 + Math.sin(t * 2.2 + h.ph) * 0.35; });
    anchors.rides.push({ kind: 'carousel', obj: g, pos: new THREE.Vector3(p.x, p.y + 6, p.z), r: Rr * 1.45 });
  }
  // 3) Helter-skelter
  {
    const p = S.filter((s) => !s.used).sort((a, b) => b.gap - a.gap)[0]; p.used = true;
    const g = new THREE.Group(); const H = 15; g.scale.setScalar(1.5);
    const st = stripes('#ff3d3d', '#ffffff', 10, false); disposables.push(st);
    const tower = M(new THREE.CylinderGeometry(1.6, 2.6, H, 16), toon('#ffffff', { map: st })); tower.position.y = H / 2; g.add(tower);
    const roof = M(new THREE.ConeGeometry(2.6, 3.4, 16), toon('#2e9bff')); roof.position.y = H + 1.7; g.add(roof);
    const flagPole = M(new THREE.CylinderGeometry(0.06, 0.06, 2, 6), toon('#ffffff'), 1.5); flagPole.position.y = H + 4.2; g.add(flagPole);
    const flag = M(new THREE.PlaneGeometry(1.2, 0.7).translate(0.6, 0, 0), toon('#ffd23f', { side: THREE.DoubleSide }), 1.5); flag.position.y = H + 4.8; g.add(flag);
    const pts = []; const turns = 3.2;
    for (let i = 0; i <= 160; i++) { const t = i / 160; const a = t * turns * Math.PI * 2; const r = 2.6 + (1 - t) * -0.8 + 1.6; pts.push(new THREE.Vector3(Math.cos(a) * r, H - 1 - t * (H - 2), Math.sin(a) * r)); }
    const slide = M(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 220, 0.55, 8, false), toon('#ffd23f'));
    slide.scale.y = 1; g.add(slide);
    const mat = M(new RoundedBoxGeometry(3, 0.3, 2, 2, 0.1), toon('#3ddc84'), 2); mat.position.set(pts.at(-1).x + 1, 0.15, pts.at(-1).z); g.add(mat);
    place(g, p);
    spinners.push((t) => { flag.rotation.y = Math.sin(t * 3) * 0.4; });
    anchors.rides.push({ kind: 'helter', obj: g, pos: new THREE.Vector3(p.x, p.y + 12, p.z), r: 6 });
  }
  // 4) Stalls in the remaining slots and between rides
  const stallNames = [['CANDYFLOSS', '#ff9bd2'], ['HOOK-A-DUCK', '#57c7ff'], ['DOUGHNUTS', '#ffb347'], ['COCONUT SHY', '#8ee86b'], ['TOFFEE APPLES', '#ff5d5d'], ['HOOK-A-DUCK', '#57c7ff']];
  const ducks = [];
  const stallSpots = [...S.filter((s) => !s.used), ...spots(13).filter((_, i) => i % 2 === 1)].slice(0, 7);
  stallSpots.forEach((p, i) => {
    const [name, col] = stallNames[i % stallNames.length];
    const g = new THREE.Group();
    const side = i % 2 ? 1 : -1;
    const booth = M(new RoundedBoxGeometry(4.2, 2.4, 3, 2, 0.2), toon('#fff6e0')); booth.position.y = 1.2; g.add(booth);
    const counter = M(new RoundedBoxGeometry(4.4, 1.1, 0.8, 2, 0.15), toon(col)); counter.position.set(0, 0.55, 1.7); g.add(counter);
    const aw = stripes('#ffffff', col, 10); disposables.push(aw);
    const awn = M(new THREE.BoxGeometry(4.8, 0.18, 2.4), toon('#ffffff', { map: aw })); awn.position.set(0, 2.9, 1.4); awn.rotation.x = 0.32; g.add(awn);
    for (const sx of [-1, 1]) { const po = M(new THREE.CylinderGeometry(0.09, 0.09, 2.6, 6), toon('#ffffff'), 1.5); po.position.set(sx * 2.2, 1.6, 2.4); g.add(po); }
    const signTex = textTexture(512, 128, (c, w, h) => { c.fillStyle = '#1a1420'; roundRect(c, 0, 0, w, h, 30); c.fill(); c.fillStyle = col; roundRect(c, 8, 8, w - 16, h - 16, 24); c.fill(); outlinedText(c, name, w / 2, h / 2 + 4, name.length > 11 ? 52 : 64, '#ffffff', '#1a1420', 0.2); }, disposables);
    const sign = mesh(new RoundedBoxGeometry(4.2, 1.05, 0.3, 2, 0.1), [toon(col), toon(col), toon(col), toon(col), toon('#ffffff', { map: signTex }), toon('#ffffff', { map: signTex })], { ol: 2.5, olRef: 30 });
    sign.position.set(0, 3.7, 0.4); g.add(sign);
    if (name === 'CANDYFLOSS') for (let k = 0; k < 4; k++) { const cf = M(new THREE.IcosahedronGeometry(0.32, 1), toon('#ff9bd2'), 1.5); cf.position.set(-1.4 + k * 0.9, 1.45, 1.75); g.add(cf); }
    if (name === 'HOOK-A-DUCK') {
      const pool = M(new THREE.CylinderGeometry(1.6, 1.6, 0.6, 20), toon('#57c7ff'), 2); pool.position.set(0, 0.3, 3.6); g.add(pool);
      const ring = new THREE.Group(); ring.position.set(0, 0.7, 3.6); g.add(ring);
      for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; const dk = M(new THREE.SphereGeometry(0.22, 10, 8), toon('#ffd23f'), 1.5); dk.position.set(Math.cos(a) * 1.1, 0, Math.sin(a) * 1.1); const hd = M(new THREE.SphereGeometry(0.14, 8, 6), toon('#ffd23f'), 1.2); hd.position.set(0, 0.22, 0.12); dk.add(hd); ring.add(dk); }
      ducks.push(ring);
    }
    // face the usual course (so the camera on the course sees the fronts)
    const q = world.anchors.nearestOnRibbon(p.x, p.z);
    const yaw = Math.atan2(q[0] - p.x, q[1] - p.z);
    const off = Math.min(p.gap * 0.3, 7) * side;
    const obj = place(g, { ...p, x: p.x + p.tz * off, z: p.z - p.tx * off, y: C.heightAt(p.x + p.tz * off, p.z - p.tx * off) });
    obj.rotation.y = yaw + (side > 0 ? 0 : Math.PI) * 0;
  });
  spinners.push((t) => { for (const d of ducks) d.rotation.y = t * 0.8; });

  // 5) Bunting + fairy lights along both edges of the strip
  {
    const rope = [], bulbs = [], bulbCols = [], flags = [], flagCols = [];
    for (const side of [-1, 1]) {
      let prev = null;
      for (let s = s0 - 10; s <= s1 + 10; s += 9) {
        const p = at(s); const off = (p.gap / 2 - 6) * side;
        const x = p.x + p.tz * off, z = p.z - p.tx * off; const y = C.heightAt(x, z);
        const top = new THREE.Vector3(x, y + 4.2, z);
        const pole = M(new THREE.CylinderGeometry(0.08, 0.1, 4.3, 6), toon('#ffffff'), 1.5); pole.position.set(x, y + 2.1, z); group.add(pole);
        if (prev) for (let i = 0; i <= 10; i++) {
          const t = i / 10; const v = prev.clone().lerp(top, t); v.y -= Math.sin(t * Math.PI) * 0.7; rope.push(v);
          if (i < 10) { if (i % 2) { bulbs.push(v.clone()); bulbCols.push(['#fff27a', '#ff7ac8', '#7affff', '#9dff7a'][(i + Math.round(s)) % 4]); } else { flags.push({ v: v.clone(), a: Math.atan2(-(top.z - prev.z), top.x - prev.x) }); flagCols.push(['#ff3d8b', '#ffd23f', '#2e9bff', '#3ddc84', '#ff8a3d'][(i + Math.round(s / 9)) % 5]); } }
        }
        prev = top;
      }
    }
    const d = new THREE.Object3D();
    const bl = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), bulbs.length);
    bulbs.forEach((v, i) => { d.position.copy(v); d.updateMatrix(); bl.setMatrixAt(i, d.matrix); bl.setColorAt(i, new THREE.Color(bulbCols[i])); }); group.add(bl);
    const tri = new THREE.BufferGeometry(); tri.setAttribute('position', new THREE.Float32BufferAttribute([-0.32, 0, 0, 0.32, 0, 0, 0, -0.65, 0], 3)); tri.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
    const fl = new THREE.InstancedMesh(tri, toon('#ffffff', { side: THREE.DoubleSide }), flags.length);
    flags.forEach((f, i) => { d.position.copy(f.v); d.rotation.set(0, f.a, 0); d.updateMatrix(); fl.setMatrixAt(i, d.matrix); fl.setColorAt(i, new THREE.Color(flagCols[i])); }); group.add(fl);
    const segs = []; for (let i = 0; i + 1 < rope.length; i++) if (rope[i].distanceTo(rope[i + 1]) < 3) segs.push(rope[i], rope[i + 1]);
    group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(segs), new THREE.LineBasicMaterial({ color: 0x333333 })));
    spinners.push((t) => { bl.material.color.setScalar(0.85 + 0.15 * Math.sin(t * 6)); });
  }
  // a big entrance arch sign at the start of the strip
  {
    const p = at(s0 - 4);
    const tex = textTexture(1024, 256, (c, w, h) => { c.fillStyle = '#1a1420'; roundRect(c, 0, 0, w, h, 60); c.fill(); c.fillStyle = '#ff3d8b'; roundRect(c, 10, 10, w - 20, h - 20, 52); c.fill(); outlinedText(c, '★ FUNFAIR ★', w / 2, h / 2 + 6, 120, '#ffe14d', '#1a1420', 0.18); }, disposables);
    const sign = mesh(new RoundedBoxGeometry(10, 2.4, 0.4, 2, 0.15), [toon('#ff3d8b'), toon('#ff3d8b'), toon('#ff3d8b'), toon('#ff3d8b'), toon('#ffffff', { map: tex }), toon('#ffffff', { map: tex })], { ol: 3, olRef: 30 });
    sign.position.set(p.x, p.y + 7.5, p.z); sign.rotation.y = Math.atan2(p.tx, p.tz) + Math.PI / 2; group.add(sign);
    for (const s of [-1, 1]) { const po = M(new THREE.CylinderGeometry(0.25, 0.3, 7.6, 8), toon('#ffd23f')); po.position.set(p.x + p.tz * 4.5 * s, p.y + 3.8, p.z - p.tx * 4.5 * s); group.add(po); }
  }

  // spectators for the funfair (returned for the crowd system)
  const crowd = [];
  for (let i = 0; i < 60; i++) {
    const s = s0 + R() * (s1 - s0); const p = at(s); const off = (R() - 0.5) * (p.gap - 16);
    const x = p.x + p.tz * off, z = p.z - p.tx * off;
    crowd.push({ x, y: C.heightAt(x, z), z, yaw: R() * 6.28 });
  }

  // is (x, z) inside the fairground strip? (used to clear trees / picnics / pips out of the way)
  function contains(x, z) {
    for (const m of mids) { if (m.s < s0 - 20 || m.s > s1 + 20) continue; const r = Math.max(6, m.gap / 2 - 4); if ((x - m.x) ** 2 + (z - m.z) ** 2 < r * r) return true; }
    return false;
  }
  function update(t) { for (const f of spinners) f(t); }
  function dispose() { group.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); for (const d of disposables) d.dispose?.(); scene.remove(group); }
  return { group, update, dispose, anchors, crowd, at, s0, s1, contains };
}
