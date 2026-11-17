// Podium celebration scene, built just past the finish arch (arch + crowd in the background).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { toon, mesh } from './toon.js';
import { textTexture, outlinedText, roundRect, mulberry } from './world.js';

export function buildPodium(scene, C, world, runners, order, { camera }) {
  const group = new THREE.Group(); scene.add(group);
  const disposables = [];
  const fin = C.sample(C.finishM + 28);
  const h = new THREE.Vector3(fin.tx, 0, fin.tz), r = new THREE.Vector3(fin.rx, 0, fin.rz);
  const center = new THREE.Vector3(fin.x, C.heightAt(fin.x, fin.z), fin.z);
  const yaw = Math.atan2(h.x, h.z); // podium faces +tangent (camera stands further along the run-out, looking back)
  group.position.copy(center); group.rotation.y = yaw;
  const steps = [{ place: 2, x: -2.3, hgt: 1.3, col: '#c9d3e6' }, { place: 1, x: 0, hgt: 1.9, col: '#ffd23f' }, { place: 3, x: 2.3, hgt: 0.9, col: '#e59a5c' }];
  for (const s of steps) {
    const tex = textTexture(256, 256, (c, w, hh) => { c.fillStyle = '#2e6fe0'; c.fillRect(0, 0, w, hh); c.fillStyle = s.col; c.fillRect(0, 0, w, 26); outlinedText(c, String(s.place), w / 2, hh / 2 + 14, 170, s.col, '#1a1420', 0.16); }, disposables);
    const blk = mesh(new RoundedBoxGeometry(2.25, s.hgt, 2.0, 3, 0.12), [toon('#2e6fe0'), toon('#2e6fe0'), toon(s.col), toon('#2e6fe0'), toon('#ffffff', { map: tex }), toon('#2e6fe0')], { ol: 3.5, olRef: 12 });
    blk.position.set(s.x, s.hgt / 2, 0); group.add(blk);
    s.top = s.hgt;
  }
  // backdrop banner
  const bt = textTexture(1024, 256, (c, w, hh) => { c.fillStyle = '#1a1420'; roundRect(c, 0, 0, w, hh, 50); c.fill(); c.fillStyle = '#ff3d8b'; roundRect(c, 10, 10, w - 20, hh - 20, 42); c.fill(); outlinedText(c, 'MARKRUN CHAMPIONS', w / 2, hh / 2 + 6, 100, '#ffffff', '#1a1420', 0.16); }, disposables);
  const ban = mesh(new RoundedBoxGeometry(9, 2.2, 0.3, 2, 0.1), [toon('#ff3d8b'), toon('#ff3d8b'), toon('#ff3d8b'), toon('#ff3d8b'), toon('#ffffff', { map: bt }), toon('#ffffff', { map: bt })], { ol: 3, olRef: 14 });
  ban.position.set(0, 4.6, -2.4); group.add(ban);
  for (const s of [-1, 1]) { const p = mesh(new THREE.CylinderGeometry(0.14, 0.16, 4.6, 8), toon('#ffffff'), { ol: 2, olRef: 14 }); p.position.set(s * 4.3, 2.3, -2.4); group.add(p); }

  // place runners
  const n = order.length;
  const others = [];
  for (const o of order) {
    const rr = runners[o.runnerId]; if (!rr) continue;
    const st = steps.find((s) => s.place === o.place);
    const local = st ? new THREE.Vector3(st.x, st.top, 0.1) : null;
    let pose;
    if (o.place === 1) pose = ['celebrate', 'jump'];
    else if (o.place === 2) pose = ['pose', 'flex'];
    else if (o.place === 3) pose = ['celebrate', 'fist'];
    else if (o.place === n && n > 3) pose = ['celebrate', 'collapse'];
    else pose = ['celebrate', 'shrug'];
    if (!local) { others.push({ rr, o, pose }); continue; }
    place(rr, local, pose);
  }
  others.forEach((x, i) => {
    const side = i % 2 ? 1 : -1; const k = Math.floor(i / 2);
    const lying = x.pose[1] === 'collapse';
    const local = new THREE.Vector3(side * (lying ? 4.6 : 4.2 + k * 1.6), 0, lying ? 1.6 : 0.6 + k * 0.8);
    place(x.rr, local, x.pose, lying ? -side * Math.PI / 2 : 0);
  });
  function place(rr, local, pose, extraYaw = 0) {
    const w = local.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw).add(center);
    if (local.y === 0) w.y = C.heightAt(w.x, w.z) + 0.05;
    rr.root.position.copy(w); rr.root.rotation.set(0, yaw + extraYaw, 0);
    rr.set(...pose); rr.setPop(null);
  }

  // confetti
  const R = mulberry(3); const N = 420;
  const conf = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.16, 0.26), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), N);
  const P = [];
  const cols = ['#ff3d8b', '#ffd23f', '#2e9bff', '#3ddc84', '#ff8a3d', '#ffffff', '#b07bff'];
  for (let i = 0; i < N; i++) { P.push({ x: (R() - 0.5) * 14, y: R() * 12, z: (R() - 0.5) * 8, vy: 1 + R() * 1.6, sp: R() * 6, ph: R() * 6.28 }); conf.setColorAt(i, new THREE.Color(cols[i % cols.length])); }
  conf.frustumCulled = false; group.add(conf);
  const d = new THREE.Object3D();
  let t = 0;
  function update(dt, wall) {
    t += dt;
    for (let i = 0; i < N; i++) {
      const p = P[i]; p.y -= p.vy * dt; if (p.y < 0) p.y += 12;
      d.position.set(p.x + Math.sin(t * 1.3 + p.ph) * 0.5, p.y, p.z + Math.cos(t + p.ph) * 0.4);
      d.rotation.set(t * p.sp + p.ph, t * p.sp * 0.7, p.ph); d.updateMatrix(); conf.setMatrixAt(i, d.matrix);
    }
    conf.instanceMatrix.needsUpdate = true;
    // slow arc in front of the podium
    const a = Math.sin(t * 0.18) * 0.4;
    const dist = 15 - Math.min(2.5, t * 0.2);
    const off = new THREE.Vector3(Math.sin(a) * dist, 3.0 + Math.sin(t * 0.3) * 0.3, Math.cos(a) * dist).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    camera.position.copy(center).add(off);
    // frame the podium left of centre (the results card lives on the right)
    const lk = new THREE.Vector3(3.2, 2.2, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw).add(center);
    camera.lookAt(lk);
    if (camera.fov !== 42) { camera.fov = 42; camera.updateProjectionMatrix(); }
  }
  function dispose() { group.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); conf.material.dispose(); for (const x of disposables) x.dispose?.(); scene.remove(group); }
  return { update, dispose, center };
}
