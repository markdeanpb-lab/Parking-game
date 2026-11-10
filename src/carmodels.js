// Procedural low-poly vehicles. Model space: +X forward, +Y up, origin on the ground at the car's centre.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CAR_TYPES } from './cartypes.js';

const PAINT = new THREE.Color(1, 0, 1);          // marker colour swapped for the real paint
const GLASS = new THREE.Color(0x16222c);
const TRIM = new THREE.Color(0x1c1d20);
const TYRE = new THREE.Color(0x141416);
const HUB = new THREE.Color(0xb9bdc4);
const WHITE = new THREE.Color(0xf4f4f0);
const LAMP = new THREE.Color(0xfff6d8);
const RED = new THREE.Color(0xb3121a);
const AMBER = new THREE.Color(0xff9b1a);
const PLATE_Y = new THREE.Color(0xf2c21c);

export const carMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.05 });
const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff3c4 });
const tailMat = new THREE.MeshBasicMaterial({ color: 0x7a0c10 });
const tailOnMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
const indMat = new THREE.MeshBasicMaterial({ color: 0xffa51e });

function paint(geo, colour) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = colour.r; arr[i * 3 + 1] = colour.g; arr[i * 3 + 2] = colour.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  g.deleteAttribute('uv');
  return g;
}
function box(w, h, d, x, y, z, colour) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  return paint(g, colour);
}
function extrude(pts, width, colour, bevel = 0.05) {
  const shape = new THREE.Shape(pts.map((p) => new THREE.Vector2(p[0], p[1])));
  const g = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, curveSegments: 4 });
  g.translate(0, 0, -(width - bevel * 2) / 2);
  return paint(g, colour);
}

function wheelGeometry(r, w) {
  const tyre = new THREE.CylinderGeometry(r, r, w, 16); tyre.rotateX(Math.PI / 2);
  const hub = new THREE.CylinderGeometry(r * 0.62, r * 0.62, w + 0.02, 5); hub.rotateX(Math.PI / 2);
  return mergeGeometries([paint(tyre, TYRE), paint(hub, HUB)]);
}

const cache = {};
/** Returns { body, wheel, wheelPos:[{x,y,z,front}], lights } geometries for a vehicle type (paint left as a marker colour). */
function buildParts(type) {
  if (cache[type]) return cache[type];
  const s = CAR_TYPES[type], L = s.len, W = s.wid, H = s.hgt, shape = s.shape;
  const parts = [];
  const tall = shape === 'suv' || shape === 'van';
  const gc = tall ? 0.3 : 0.22;                     // ground clearance
  const belt = shape === 'van' ? H * 0.52 : shape === 'suv' ? H * 0.56 : H * 0.58;
  const r = shape === 'lorry' ? 0.5 : tall ? 0.37 : 0.31;
  const wheelPos = [];
  const lights = { head: [], tail: [], ind: [] };

  if (shape === 'lorry') {
    const cabL = 2.0;
    parts.push(box(L - 0.2, 0.35, W - 0.5, 0, 0.75, 0, TRIM));
    parts.push(box(cabL, 2.05, W - 0.1, L / 2 - cabL / 2, 1.95, 0, WHITE));
    parts.push(box(0.06, 0.9, W - 0.35, L / 2 + 0.01, 2.3, 0, GLASS));
    parts.push(box(0.9, 0.75, W - 0.06, L / 2 - 0.65, 2.35, 0, GLASS));
    parts.push(box(L - cabL - 1.2, 2.5, W, -0.35, 2.15, 0, PAINT));
    parts.push(box(L - cabL - 1.3, 0.25, W + 0.02, -0.35, 1.5, 0, new THREE.Color(0xf2c21c)));
    parts.push(box(1.1, 2.1, W - 0.1, -L / 2 + 0.55, 1.75, 0, new THREE.Color(0x3a4046)));
    parts.push(box(0.3, 0.5, W - 0.2, -L / 2 + 0.1, 1.0, 0, TRIM));
    parts.push(box(0.25, 0.14, 0.5, L / 2 - 0.5, 3.06, 0, AMBER));
    for (const x of [L / 2 - 1.1, -L / 2 + 2.3, -L / 2 + 1.2]) for (const z of [-1, 1]) wheelPos.push({ x, y: r, z: z * (W / 2 - 0.16), front: x > 0 });
    for (const z of [-1, 1]) {
      lights.head.push([L / 2 + 0.02, 1.1, z * (W / 2 - 0.3), 0.06, 0.16, 0.3]);
      lights.tail.push([-L / 2 - 0.02, 1.1, z * (W / 2 - 0.25), 0.06, 0.2, 0.2]);
      lights.ind.push([L / 2 + 0.02, 1.32, z * (W / 2 - 0.3), 0.08, 0.1, 0.3, z], [-L / 2 - 0.02, 1.36, z * (W / 2 - 0.25), 0.08, 0.12, 0.2, z]);
    }
  } else {
    // lower body
    const nose = shape === 'van' ? 0.45 : shape === 'suv' ? 0.95 : 0.9;
    const drop = shape === 'van' ? 0.05 : 0.14;
    parts.push(extrude([
      [-L / 2 + 0.1, gc], [-L / 2, gc + 0.22], [-L / 2 + 0.03, belt], [L / 2 - nose, belt],
      [L / 2 - 0.1, belt - drop], [L / 2, gc + 0.26], [L / 2 - 0.08, gc],
    ], W, PAINT, 0.06));
    // greenhouse
    let xr0, xr1, xf1, xf0;
    if (shape === 'saloon') { xr0 = -L / 2 + 0.72; xr1 = -L / 2 + 1.28; xf1 = 0.28; xf0 = L / 2 - 1.22; }
    else if (shape === 'estate') { xr0 = -L / 2 + 0.1; xr1 = -L / 2 + 0.38; xf1 = 0.5; xf0 = L / 2 - 1.2; }
    else if (shape === 'suv') { xr0 = -L / 2 + 0.12; xr1 = -L / 2 + 0.42; xf1 = 0.42; xf0 = L / 2 - 1.15; }
    else if (shape === 'van') { xr0 = -L / 2 + 0.04; xr1 = -L / 2 + 0.08; xf1 = L / 2 - 1.2; xf0 = L / 2 - 0.5; }
    else { xr0 = -L / 2 + 0.12; xr1 = -L / 2 + 0.5; xf1 = 0.3; xf0 = L / 2 - 1.05; }
    const cw = W - 0.16;
    const cabinPts = [[xr0, belt - 0.02], [xr1, H - 0.04], [xf1, H - 0.04], [xf0, belt - 0.02]];
    if (shape === 'van') {
      parts.push(extrude(cabinPts, cw + 0.1, PAINT, 0.05));
      parts.push(box(0.5, H - belt - 0.3, cw + 0.14, L / 2 - 1.05, (H + belt) / 2 - 0.02, 0, GLASS));     // side windows
      const ws = new THREE.BoxGeometry(0.05, H - belt - 0.22, cw - 0.1); ws.rotateZ(0.85 - Math.PI / 2 + 0.72); ws.translate(L / 2 - 0.83, (H + belt) / 2 - 0.02, 0);
      parts.push(paint(ws, GLASS));
      parts.push(box(L * 0.5, 0.16, W + 0.03, -L * 0.18, belt + 0.25, 0, new THREE.Color(0x2b6cb0)));     // livery stripe
    } else {
      parts.push(extrude(cabinPts, cw, GLASS, 0.04));
      parts.push(box(xf1 - xr1 + 0.12, 0.06, cw - 0.02, (xf1 + xr1) / 2, H - 0.02, 0, PAINT));            // roof
      const bx = (xr1 + xf1) / 2 - 0.12;
      for (const z of [-1, 1]) parts.push(box(0.1, H - belt, 0.03, bx, (H + belt) / 2 - 0.03, z * (cw / 2 + 0.005), PAINT));   // B pillars
      if (shape === 'suv') for (const z of [-1, 1]) parts.push(box(xf1 - xr1 - 0.3, 0.05, 0.05, (xf1 + xr1) / 2, H + 0.04, z * (cw / 2 - 0.12), TRIM)); // roof rails
    }
    // trim
    parts.push(box(0.12, 0.2, W + 0.04, L / 2 - 0.03, gc + 0.14, 0, TRIM));
    parts.push(box(0.12, 0.2, W + 0.04, -L / 2 + 0.03, gc + 0.14, 0, TRIM));
    parts.push(box(0.04, 0.16, W * 0.42, L / 2 - 0.02, belt - drop - 0.14, 0, TRIM));                    // grille
    parts.push(box(0.03, 0.11, 0.46, L / 2 + 0.035, gc + 0.2, 0, WHITE));                                 // plates
    parts.push(box(0.03, 0.11, 0.46, -L / 2 - 0.035, gc + 0.32, 0, PLATE_Y));
    for (const z of [-1, 1]) {
      parts.push(box(0.12, 0.1, 0.16, xf0 - 0.05, belt + 0.09, z * (W / 2 + 0.07), PAINT));               // mirrors
      parts.push(box(L - 1.5, 0.07, 0.02, 0, gc + 0.06, z * (W / 2 + 0.005), TRIM));                      // sills
      const hy = belt - drop - 0.1, ty = belt - 0.14;
      lights.head.push([L / 2 - 0.02, hy, z * (W / 2 - 0.3), 0.1, 0.12, 0.34]);
      lights.tail.push([-L / 2 + 0.0, ty, z * (W / 2 - 0.26), 0.08, 0.14, 0.3]);
      lights.ind.push([L / 2 - 0.06, hy, z * (W / 2 - 0.06), 0.12, 0.1, 0.1, z], [-L / 2 + 0.03, ty - 0.15, z * (W / 2 - 0.2), 0.08, 0.08, 0.22, z]);
    }
    for (const x of [s.wheelbase / 2, -s.wheelbase / 2]) for (const z of [-1, 1]) wheelPos.push({ x, y: r, z: z * (W / 2 - 0.09), front: x > 0 });
  }
  const body = mergeGeometries(parts);
  body.computeVertexNormals();
  cache[type] = { body, wheel: wheelGeometry(r, shape === 'lorry' ? 0.3 : 0.22), wheelPos, lights, r };
  return cache[type];
}

function tint(geo, colour) {
  const g = geo.clone();
  const c = g.attributes.color, col = new THREE.Color(colour);
  for (let i = 0; i < c.count; i++) {
    if (c.getX(i) === 1 && c.getY(i) === 0 && c.getZ(i) === 1) c.setXYZ(i, col.r, col.g, col.b);
  }
  return g;
}
function lightBoxes(list) {
  return mergeGeometries(list.map(([x, y, z, w, h, d]) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); return g; }));
}

/** Single merged, world-transformed geometry for a parked car (body + wheels + lamps baked as colours). */
export function parkedCarGeometry(type, colour, x, z, h) {
  const p = buildParts(type);
  const geos = [tint(p.body, colour)];
  for (const w of p.wheelPos) { const g = p.wheel.clone(); g.translate(w.x, w.y, w.z); geos.push(g); }
  geos.push(paint(lightBoxes(p.lights.head), LAMP), paint(lightBoxes(p.lights.tail), RED));
  for (const g of geos) { if (!g.attributes.normal) g.computeVertexNormals(); }
  const merged = mergeGeometries(geos.map((g) => (g.index ? g.toNonIndexed() : g)));
  merged.applyMatrix4(new THREE.Matrix4().makeRotationY(-h).setPosition(x, 0, z));
  return merged;
}

/** Animated vehicle: body, steerable spinning wheels, brake lights and indicators. */
export function createCarMesh(type, colour, opts = {}) {
  const p = buildParts(type);
  const group = new THREE.Group();
  const chassis = new THREE.Group();
  group.add(chassis);
  const body = new THREE.Mesh(tint(p.body, colour), carMaterial);
  body.castShadow = true; body.receiveShadow = true;
  chassis.add(body);
  chassis.add(new THREE.Mesh(lightBoxes(p.lights.head), lampMat));
  const tail = new THREE.Mesh(lightBoxes(p.lights.tail), tailMat);
  chassis.add(tail);
  const mk = (side) => { const m = new THREE.Mesh(lightBoxes(p.lights.ind.filter((l) => l[6] === side)), indMat); m.visible = false; chassis.add(m); return m; };
  const indL = mk(-1), indR = mk(1);
  const wheels = p.wheelPos.map((w) => {
    const pivot = new THREE.Group(); pivot.position.set(w.x, w.y, w.z);
    const m = new THREE.Mesh(p.wheel, carMaterial); m.castShadow = true;
    pivot.add(m); group.add(pivot);
    return { pivot, mesh: m, front: w.front };
  });
  // extras
  if (opts.learner) {
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.34), new THREE.MeshStandardMaterial({ color: 0xffffff, map: textTexture('L', '#d8232a', '#ffffff', 64, 44, 40) }));
    l.position.set(-0.1, CAR_TYPES[type].hgt + 0.13, 0); chassis.add(l);
    for (const sx of [1, -1]) {
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.26), new THREE.MeshBasicMaterial({ map: textTexture('L', '#d8232a', '#ffffff', 64, 64, 54) }));
      pl.position.set(sx * (CAR_TYPES[type].len / 2 + 0.045), 0.62, 0.45); pl.rotation.y = sx * Math.PI / 2; chassis.add(pl);
    }
  }
  if (opts.roofBox) {
    const rb = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.34, 0.8), new THREE.MeshStandardMaterial({ color: 0x25272b, roughness: 0.5 }));
    rb.position.set(-0.3, CAR_TYPES[type].hgt + 0.24, 0); rb.castShadow = true; chassis.add(rb);
  }
  if (opts.beacon) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.6), indMat);
    b.position.set(CAR_TYPES[type].len / 2 - 0.5, CAR_TYPES[type].hgt + 0.02, 0); chassis.add(b);
    group.userData.beacon = b;
  }
  group.userData = { ...group.userData, chassis, wheels, tail, indL, indR, type, r: p.r };
  return group;
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
  u.tail.material = car.braking || (driver && (driver.state === 'parked' ? false : Math.abs(car.v) < 0.1 && driver.state !== 'idle')) ? tailOnMat : tailMat;
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
