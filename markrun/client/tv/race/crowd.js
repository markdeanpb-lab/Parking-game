// Original cheering crowd: "Pips" - gumdrop-shaped mascot spectators with big eyes, stubby arms and toppers.
// Fully instanced (a handful of draw calls); only clusters near the camera are animated each frame.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { toon, outline } from './toon.js';
import { mulberry } from './world.js';
import { PATH_W } from './course.js';

const COLS = [0xff5d8f, 0xffd23f, 0x57c7ff, 0x7dde6a, 0xff8a3d, 0xb07bff, 0x4fe0c8, 0xff6b6b, 0xffffff, 0x8fa8ff];
const TOPS = [0x3ddc84, 0xff3d8b, 0xffd23f, 0x2e9bff, 0xffffff];
const BRIGHT = [0xff3d8b, 0xffd23f, 0x2e9bff, 0x3ddc84, 0xff8a3d, 0xb07bff, 0xff4d5a, 0x13c4c4];
// crowd outfits by weather (weather.js picks a style): topper weights + scarf / sunglasses odds + coat colours
// toppers: 0 sprout, 1 party cone, 2 bobble, 3 umbrella, 4 sun hat, 5 woolly hat
export const CROWD_STYLES = {
  default: { tops: [0.25, 0.2, 0.25, 0, 0, 0], none: 0.3, scarf: 0, shades: 0.05 },
  sun: { tops: [0.12, 0.08, 0, 0, 0.55, 0], none: 0.25, scarf: 0, shades: 0.55 },
  rain: { tops: [0.05, 0, 0, 0.62, 0, 0.15], none: 0.18, scarf: 0.2, shades: 0, coats: [0xffd23f, 0xffd23f, 0xff4d5a, 0x2e9bff, 0x3ddc84] },
  cold: { tops: [0.05, 0, 0.1, 0, 0, 0.6], none: 0.25, scarf: 0.75, shades: 0 },
  autumn: { tops: [0.12, 0.08, 0.1, 0, 0, 0.35], none: 0.35, scarf: 0.4, shades: 0.03 },
  wind: { tops: [0.15, 0.2, 0.1, 0, 0, 0.3], none: 0.25, scarf: 0.4, shades: 0 },
  fog: { tops: [0.08, 0.05, 0.1, 0.1, 0, 0.45], none: 0.22, scarf: 0.55, shades: 0 },
};
let crowdStyle = CROWD_STYLES.default, crowdWind = 0;
export function setCrowdStyle(key, wind = 0) { crowdStyle = CROWD_STYLES[key] || CROWD_STYLES.default; crowdWind = wind; }

function gumdrop() {
  const pts = [];
  const n = 8;
  for (let i = 0; i <= n; i++) {
    const t = i / n; // 0 bottom .. 1 top
    const y = t * 1.25;
    const r = t < 0.12 ? 0.48 + t * 1.2 : Math.sqrt(Math.max(0, 1 - Math.pow((t - 0.12) / 0.88, 2.2))) * 0.62;
    pts.push(new THREE.Vector2(Math.max(0.001, r), y));
  }
  pts.unshift(new THREE.Vector2(0.001, 0));
  const g = new THREE.LatheGeometry(pts, 12);
  g.computeVertexNormals();
  return g;
}

export function buildCrowd(scene, members) {
  const R = mulberry(99);
  const N = members.length;
  const group = new THREE.Group(); scene.add(group);
  if (!N) return { update() {}, hideWhere() {}, setMask() {}, dispose() { scene.remove(group); }, group };
  const bodyG = gumdrop();
  const eyeG = new THREE.SphereGeometry(0.15, 8, 5); eyeG.scale(0.8, 1.15, 0.5);
  const pupG = new THREE.SphereGeometry(0.075, 6, 4); pupG.scale(0.85, 1.2, 0.5);
  const handG = new THREE.SphereGeometry(0.13, 6, 5);
  const sproutG = new THREE.ConeGeometry(0.14, 0.36, 6); sproutG.translate(0, 0.18, 0);
  const hatG = new THREE.ConeGeometry(0.26, 0.55, 8); hatG.translate(0, 0.27, 0);
  const bobG = new THREE.SphereGeometry(0.2, 7, 5);
  const umbG = mergeGeometries([new THREE.ConeGeometry(0.95, 0.42, 10, 1, true).translate(0, 0.95, 0), new THREE.CylinderGeometry(0.035, 0.035, 0.95, 5).translate(0, 0.5, 0), new THREE.SphereGeometry(0.06, 5, 4).translate(0, 1.18, 0)].map((g) => { g = g.index ? g.toNonIndexed() : g; g.deleteAttribute('uv'); return g; }));
  umbG.translate(0.25, -0.15, 0);
  const sunG = mergeGeometries([new THREE.CylinderGeometry(0.62, 0.62, 0.05, 16).translate(0, -0.08, 0), new THREE.CylinderGeometry(0.3, 0.34, 0.26, 12).translate(0, 0.05, 0)].map((g) => { g = g.index ? g.toNonIndexed() : g; g.deleteAttribute('uv'); return g; }));
  const beanG = mergeGeometries([new THREE.SphereGeometry(0.4, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, -0.12, 0), new THREE.SphereGeometry(0.13, 6, 5).translate(0, 0.3, 0)].map((g) => { g = g.index ? g.toNonIndexed() : g; g.deleteAttribute('uv'); return g; }));
  const scarfG = new THREE.TorusGeometry(0.5, 0.11, 6, 16); scarfG.rotateX(Math.PI / 2);
  const shadeG = new THREE.BoxGeometry(0.62, 0.13, 0.1);
  const mk = (geo, mat, count, ol) => { const m = new THREE.InstancedMesh(geo, mat, count); m.castShadow = true; m.receiveShadow = true; m.userData.ol = ol; group.add(m); return m; };
  const body = mk(bodyG, toon(0xffffff), N, 2.6);
  const eyes = mk(eyeG, new THREE.MeshBasicMaterial({ color: 0xffffff }), N * 2, 0);
  const pups = mk(pupG, new THREE.MeshBasicMaterial({ color: 0x1a1420 }), N * 2, 0);
  const hands = mk(handG, toon(0xffffff), N * 2, 2);
  eyes.castShadow = pups.castShadow = false;
  const tops = [mk(sproutG, toon(0xffffff), N, 2), mk(hatG, toon(0xffffff), N, 2), mk(bobG, toon(0xffffff), N, 2), mk(umbG, toon(0xffffff, { side: THREE.DoubleSide, name: 'umbrella' }), N, 2), mk(sunG, toon(0xffffff), N, 2), mk(beanG, toon(0xffffff), N, 2)];
  const scarves = mk(scarfG, toon(0xffffff), N, 2), shades = mk(shadeG, new THREE.MeshBasicMaterial({ color: 0x14183c }), N, 0);
  shades.castShadow = false;
  const counts = [0, 0, 0, 0, 0, 0]; let nScarf = 0, nShade = 0;
  const c = new THREE.Color();
  const sty = crowdStyle;
  const pickTop = () => { if (R() < sty.none) return -1; const tot = sty.tops.reduce((a, b) => a + b, 0) || 1; let x = R() * tot; for (let k = 0; k < sty.tops.length; k++) { x -= sty.tops[k]; if (x <= 0 && sty.tops[k] > 0) return k; } return -1; };
  const M = members.map((m, i) => {
    const col = m.colour ?? (sty.coats && R() < 0.45 ? sty.coats[Math.floor(R() * sty.coats.length)] : COLS[Math.floor(R() * COLS.length)]);
    body.setColorAt(i, c.set(col)); hands.setColorAt(i * 2, c); hands.setColorAt(i * 2 + 1, c);
    const tk = m.marshal ? -1 : pickTop();
    let ti = -1; if (tk >= 0) { ti = counts[tk]++; tops[tk].setColorAt(ti, c.set(tk === 3 || tk === 5 ? BRIGHT[Math.floor(R() * BRIGHT.length)] : tk === 4 ? [0xfff1c8, 0xffe08a, 0xffffff, 0xf2c48d][Math.floor(R() * 4)] : TOPS[Math.floor(R() * TOPS.length)])); }
    let si = -1; if (!m.marshal && R() < sty.scarf) { si = nScarf++; scarves.setColorAt(si, c.set(BRIGHT[Math.floor(R() * BRIGHT.length)])); }
    let gi = -1; if ((m.marshal ? false : R() < sty.shades)) gi = nShade++;
    return { ...m, s: m.scale ?? 0.85 + R() * 0.35, ph: R() * 6.28, sp: 5 + R() * 4, tk, ti, si, gi, wave: m.marshal || R() < 0.5, ex: m.marshal ? 0.7 : 0.3 };
  });
  tops.forEach((t, k) => { t.count = counts[k]; });
  scarves.count = nScarf; shades.count = nShade;
  for (const m of [body, hands, scarves, ...tops]) if (m.instanceColor) m.instanceColor.needsUpdate = true;
  const wind = crowdWind;

  const zero = new THREE.Matrix4().makeScale(0, 0, 0);
  let mask = null;
  const rotZ = new THREE.Matrix4();
  const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), s = new THREE.Vector3(), base = new THREE.Matrix4(), loc = new THREE.Matrix4();
  function place(i, t, force) {
    const m = M[i];
    if (m.hidden || (mask && mask(m.x, m.z))) { for (const im of [body]) im.setMatrixAt(i, zero); for (let k = 0; k < 2; k++) { eyes.setMatrixAt(i * 2 + k, zero); pups.setMatrixAt(i * 2 + k, zero); hands.setMatrixAt(i * 2 + k, zero); } if (m.tk >= 0) tops[m.tk].setMatrixAt(m.ti, zero); if (m.si >= 0) scarves.setMatrixAt(m.si, zero); if (m.gi >= 0) shades.setMatrixAt(m.gi, zero); return; }
    const ex = m.ex;
    const ph = t * m.sp * (0.5 + ex * 0.6) + m.ph;
    const hop = Math.max(0, Math.sin(ph)) * 0.32 * ex;
    const squash = 1 - Math.cos(ph * 2) * 0.05 * ex;
    e.set(0, m.yaw + Math.sin(t * 0.8 + m.ph) * 0.25 * (1 - ex), Math.sin(ph * 0.5) * 0.08 * ex);
    q.setFromEuler(e);
    base.compose(v.set(m.x, m.y + hop, m.z), q, s.set(m.s / Math.sqrt(squash), m.s * squash, m.s / Math.sqrt(squash)));
    body.setMatrixAt(i, base);
    // eyes
    for (let k = 0; k < 2; k++) {
      const sx = k ? 0.19 : -0.19;
      loc.makeTranslation(sx, 0.86, 0.5); mat.multiplyMatrices(base, loc); eyes.setMatrixAt(i * 2 + k, mat);
      loc.makeTranslation(sx * 1.02, 0.84 + (ex > 0.6 ? 0.03 : 0), 0.565); mat.multiplyMatrices(base, loc); pups.setMatrixAt(i * 2 + k, mat);
      // hands: raised & waving when excited
      const up = ex > 0.55 ? 1 : 0.15 + 0.2 * Math.max(0, Math.sin(ph));
      const wav = m.wave ? Math.sin(ph * 1.5 + k * 3) * 0.25 * ex : 0;
      const hx = (k ? 1 : -1) * (0.62 + up * 0.05 + wav * 0.3), hy = 0.45 + up * 0.85 + wav;
      loc.makeTranslation(hx, hy, 0.12); mat.multiplyMatrices(base, loc); hands.setMatrixAt(i * 2 + k, mat);
    }
    if (m.tk >= 0) {
      loc.makeTranslation(0, m.tk === 3 ? 1.0 : 1.22, 0);
      const wob = (m.tk === 0 ? Math.sin(ph) * 0.3 : 0) + wind * (m.tk === 3 ? 0.25 : 0.45) * Math.sin(t * 6 + m.ph * 3);
      if (wob) loc.multiply(rotZ.makeRotationZ(wob));
      mat.multiplyMatrices(base, loc); tops[m.tk].setMatrixAt(m.ti, mat);
    }
    if (m.si >= 0) { loc.makeTranslation(0, 0.66, 0); mat.multiplyMatrices(base, loc); scarves.setMatrixAt(m.si, mat); }
    if (m.gi >= 0) { loc.makeTranslation(0, 0.87, 0.52); mat.multiplyMatrices(base, loc); shades.setMatrixAt(m.gi, mat); }
  }
  for (let i = 0; i < N; i++) place(i, 0, true);
  const flag = () => { for (const m of [body, eyes, pups, hands, scarves, shades, ...tops]) m.instanceMatrix.needsUpdate = true; };
  flag();
  // culling bounds (padded for hops/waves), then outlines that share them
  for (const m of [body, eyes, pups, hands, scarves, shades, ...tops]) {
    if (!m.count) { m.visible = false; continue; }
    m.computeBoundingSphere(); m.boundingSphere.radius += 2;
    if (m.userData.ol) outline(m, m.userData.ol, undefined, 18);
  }

  // excitement: from the nearest runner distance (pass in positions)
  function update(t, camPos, runnerPos = [], forceEx = null) {
    let any = false;
    for (let i = 0; i < N; i++) {
      const m = M[i];
      if (camPos && (m.x - camPos.x) ** 2 + (m.z - camPos.z) ** 2 > 260 * 260) continue;
      let target = m.marshal ? 0.75 : 0.25;
      if (forceEx != null) target = forceEx;
      else for (const p of runnerPos) { const d2 = (p.x - m.x) ** 2 + (p.z - m.z) ** 2; if (d2 < 45 * 45) { target = Math.max(target, 1 - Math.sqrt(d2) / 70); } }
      m.ex += (target - m.ex) * 0.05;
      place(i, t); any = true;
    }
    if (any) flag();
  }
  function dispose() {
    for (const g of [bodyG, eyeG, pupG, handG, sproutG, hatG, bobG, umbG, sunG, beanG, scarfG, shadeG]) g.dispose();
    for (const m of [body, eyes, pups, hands, scarves, shades, ...tops]) m.dispose();
    scene.remove(group);
  }
  function hideWhere(fn) { let any = false; for (let i = 0; i < N; i++) if (!M[i].hidden && fn(M[i].x, M[i].z)) { M[i].hidden = true; place(i, 0); any = true; } if (any) flag(); }
  // temporary visibility mask (e.g. clear the camera's sightline); re-applied on the next update
  function setMask(fn) { if (fn === mask) return; mask = fn; for (let i = 0; i < N; i++) place(i, 0); flag(); }
  return { update, dispose, hideWhere, setMask, group, members: M };
}

// Fill crowd zones defined along the course.
export function crowdMembersFromZones(C, zones, seed = 5, onPath = null, blocked = null) {
  const R = mulberry(seed);
  const out = [];
  for (const [zi, z] of zones.entries()) {
    for (let m = z.m0; m <= z.m1; m += z.spacing ?? 1.35) {
      const s = C.sample(m);
      const rows = Math.max(1, Math.round(z.depth / 1.25));
      for (let r = 0; r < rows; r++) {
        if (R() > z.density) continue;
        const off = z.off + r * 1.25 + R() * 0.35;
        const along = (R() - 0.5) * 0.6;
        const x = s.x + s.rx * off * z.side + s.tx * along, zz = s.z + s.rz * off * z.side + s.tz * along;
        if (onPath && onPath(x, zz, 1.4)) continue;
        if (blocked && blocked(x, zz, 0.6)) continue;
        out.push({ zone: zi, x, y: C.heightAt(x, zz), z: zz, yaw: Math.atan2(-s.rx * z.side, -s.rz * z.side) + (R() - 0.5) * 0.5 });
      }
    }
  }
  return out;
}
export { PATH_W };
