// Arcade vehicle physics: kinematic bicycle model + oriented-box collisions against
// other vehicles and a signed-distance field of the carriageway (kerbs).
// Pure logic, no rendering.

import { clamp, approach, wrapAngle } from './util.js';
import { CAR_TYPES } from './cartypes.js';

let nextId = 1;

export class Car {
  constructor(type, opts = {}) {
    const spec = CAR_TYPES[type];
    this.id = nextId++;
    this.type = type;
    this.spec = spec;
    this.len = spec.len; this.wid = spec.wid;
    this.x = 0; this.z = 0; this.h = 0;
    this.v = 0;               // signed speed along heading (m/s)
    this.steer = 0;           // current front wheel angle (rad, + = right)
    this.ctrl = { throttle: 0, steer: 0, handbrake: false };
    this.isStatic = false;    // never moves (resident cars, barriers)
    this.kinematic = false;   // moved by script (parking manoeuvres, lorry); pushes others, is not pushed
    this.ghost = false;       // ignored by collisions
    this.maxSpeed = spec.maxSpeed;
    this.accel = spec.accel;
    this.wheelSpin = 0;
    this.braking = false;
    this.bump = 0;            // visual jolt (speed cushions, impacts)
    this.stalled = 0;         // seconds of engine cut-out remaining
    Object.assign(this, opts);
  }

  place(x, z, h) { this.x = x; this.z = z; this.h = h; this.v = 0; this.steer = 0; }

  get fx() { return Math.cos(this.h); }
  get fz() { return Math.sin(this.h); }

  corners(grow = 0) {
    const c = Math.cos(this.h), s = Math.sin(this.h);
    const hl = this.len / 2 + grow, hw = this.wid / 2 + grow;
    // forward (c,s); right (-s,c)
    return [
      { x: this.x + c * hl - s * hw, z: this.z + s * hl + c * hw },   // front right
      { x: this.x + c * hl + s * hw, z: this.z + s * hl - c * hw },   // front left
      { x: this.x - c * hl + s * hw, z: this.z - s * hl - c * hw },   // rear left
      { x: this.x - c * hl - s * hw, z: this.z - s * hl + c * hw },   // rear right
    ];
  }

  /** World point -> local frame {f: forward, r: right}. */
  toLocal(x, z) {
    const dx = x - this.x, dz = z - this.z, c = Math.cos(this.h), s = Math.sin(this.h);
    return { f: dx * c + dz * s, r: -dx * s + dz * c };
  }

  step(dt) {
    if (this.isStatic || this.kinematic) return;
    const sp = this.spec, c = this.ctrl;
    let throttle = clamp(c.throttle, -1, 1);
    if (this.stalled > 0) { this.stalled -= dt; throttle = 0; }

    // steering: slower and shallower at speed
    let speedK = 1 / (1 + Math.pow(Math.abs(this.v) / 11, 2) * 1.6);
    if (this.aiSteer) speedK = Math.max(speedK, 0.88);
    const target = clamp(c.steer, -1, 1) * sp.maxSteer * speedK;
    this.steer = approach(this.steer, target, 2.6 * dt);

    // longitudinal
    this.braking = false;
    if (c.handbrake) {
      this.v = approach(this.v, 0, 16 * dt); this.braking = true;
    } else if (throttle > 0) {
      if (this.v < -0.2) { this.v = approach(this.v, 0, 11 * dt * throttle); this.braking = true; }
      else this.v += this.accel * throttle * Math.max(0, 1 - Math.pow(this.v / this.maxSpeed, 2)) * dt;
    } else if (throttle < 0) {
      if (this.v > 0.2) { this.v = approach(this.v, 0, 11 * dt * -throttle); this.braking = true; }
      else this.v += this.accel * 0.75 * throttle * Math.max(0, 1 - Math.pow(this.v / 5.5, 2)) * dt;
    } else {
      this.v = approach(this.v, 0, (1.4 + Math.abs(this.v) * 0.22) * dt);
    }
    this.v -= this.v * 0.05 * dt;

    // kinematic bicycle, pivoting about the rear axle
    const wb = sp.wheelbase, half = wb / 2;
    let rx = this.x - Math.cos(this.h) * half, rz = this.z - Math.sin(this.h) * half;
    rx += Math.cos(this.h) * this.v * dt; rz += Math.sin(this.h) * this.v * dt;
    this.h = wrapAngle(this.h + (this.v * Math.tan(this.steer) / wb) * dt);
    this.x = rx + Math.cos(this.h) * half; this.z = rz + Math.sin(this.h) * half;
    this.wheelSpin += this.v * dt / 0.31;
    this.bump = approach(this.bump, 0, dt * 2.5);
  }
}

/** Static oriented box (barriers etc.) in the same shape as a Car for collision purposes. */
export function makeBox(x, z, h, len, wid) {
  const b = new Car('hatch', { isStatic: true });
  b.len = len; b.wid = wid; b.x = x; b.z = z; b.h = h; b.isBox = true;
  return b;
}

// ---------------------------------------------------------------- SAT
/** Returns null or {nx, nz, depth}: minimum translation to move `a` out of `b`. */
export function obbOverlap(a, b) {
  const dx = a.x - b.x, dz = a.z - b.z;
  const ra = Math.hypot(a.len, a.wid) / 2, rb = Math.hypot(b.len, b.wid) / 2;
  if (dx * dx + dz * dz > (ra + rb) * (ra + rb)) return null;
  const ac = Math.cos(a.h), as = Math.sin(a.h), bc = Math.cos(b.h), bs = Math.sin(b.h);
  const axes = [[ac, as], [-as, ac], [bc, bs], [-bs, bc]];
  const ahl = a.len / 2, ahw = a.wid / 2, bhl = b.len / 2, bhw = b.wid / 2;
  let best = Infinity, bx = 0, bz = 0;
  for (const [ux, uz] of axes) {
    const pa = ahl * Math.abs(ux * ac + uz * as) + ahw * Math.abs(-ux * as + uz * ac);
    const pb = bhl * Math.abs(ux * bc + uz * bs) + bhw * Math.abs(-ux * bs + uz * bc);
    const d = dx * ux + dz * uz;
    const overlap = pa + pb - Math.abs(d);
    if (overlap <= 0) return null;
    if (overlap < best) { best = overlap; const sg = d < 0 ? -1 : 1; bx = ux * sg; bz = uz * sg; }
  }
  return { nx: bx, nz: bz, depth: best };
}

/** Distance from a point to an oriented box (0 if inside). */
export function distPointBox(px, pz, b) {
  const l = b.toLocal(px, pz);
  const df = Math.max(0, Math.abs(l.f) - b.len / 2), dr = Math.max(0, Math.abs(l.r) - b.wid / 2);
  return Math.hypot(df, dr);
}

/** Approximate gap between two boxes (corner-to-box both ways). */
export function boxGap(a, b) {
  let d = Infinity;
  for (const p of a.corners()) d = Math.min(d, distPointBox(p.x, p.z, b));
  for (const p of b.corners()) d = Math.min(d, distPointBox(p.x, p.z, a));
  return d;
}

// ---------------------------------------------------------------- world
export class PhysicsWorld {
  constructor(track) {
    this.track = track;
    this.cars = [];          // dynamic + kinematic vehicles
    this.statics = [];       // resident cars, barriers
    this.cell = 10;
    this.hash = new Map();
    this.onImpact = null;    // (car, other|null, speed, kind) kind: 'kerb' | 'car' | 'static'
  }
  key(x, z) { return Math.floor(x / this.cell) * 4096 + Math.floor(z / this.cell); }
  addStatic(box) {
    this.statics.push(box);
    const k = this.key(box.x, box.z);
    if (!this.hash.has(k)) this.hash.set(k, []);
    this.hash.get(k).push(box);
  }
  removeStatic(box) {
    const i = this.statics.indexOf(box); if (i >= 0) this.statics.splice(i, 1);
    const arr = this.hash.get(this.key(box.x, box.z)); if (arr) { const j = arr.indexOf(box); if (j >= 0) arr.splice(j, 1); }
  }
  addCar(car) { this.cars.push(car); }
  removeCar(car) { const i = this.cars.indexOf(car); if (i >= 0) this.cars.splice(i, 1); }

  /** Static boxes near a point. */
  near(x, z, out = []) {
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
      const arr = this.hash.get((cx + i) * 4096 + (cz + j));
      if (arr) for (const b of arr) out.push(b);
    }
    return out;
  }

  step(dt) {
    for (const c of this.cars) c.step(dt);
    const tmp = [];
    for (const c of this.cars) {
      if (c.kinematic || c.isStatic || c.ghost) continue;
      this.collideKerb(c);
      tmp.length = 0;
      for (const s of this.near(c.x, c.z, tmp)) {
        if (s.ghost) continue;
        const o = obbOverlap(c, s);
        if (o) this.resolve(c, s, o, 1);
      }
    }
    const n = this.cars.length;
    for (let i = 0; i < n; i++) {
      const a = this.cars[i];
      if (a.ghost) continue;
      for (let j = i + 1; j < n; j++) {
        const b = this.cars[j];
        if (b.ghost) continue;
        const aFixed = a.kinematic || a.isStatic, bFixed = b.kinematic || b.isStatic;
        if (aFixed && bFixed) continue;
        const o = obbOverlap(a, b);
        if (!o) continue;
        if (bFixed) this.resolve(a, b, o, 1);
        else if (aFixed) this.resolve(b, a, { nx: -o.nx, nz: -o.nz, depth: o.depth }, 1);
        else {
          const share = b.spec.mass / (a.spec.mass + b.spec.mass);
          this.resolve(a, b, o, share, true);
        }
      }
    }
    // a second kerb pass so cars shoved by others don't end up on the pavement
    for (const c of this.cars) if (!c.kinematic && !c.isStatic && !c.ghost) this.collideKerb(c, true);
  }

  /** Push car a out of b along the contact normal. share = fraction of the correction applied to a. */
  resolve(a, b, o, share, both = false) {
    const va = a.v * (a.fx * o.nx + a.fz * o.nz);
    const vb = b.kinematic || both ? b.v * (b.fx * o.nx + b.fz * o.nz) : 0;
    const rel = va - vb;   // < 0 when closing
    a.x += o.nx * o.depth * share; a.z += o.nz * o.depth * share;
    if (both) { b.x -= o.nx * o.depth * (1 - share); b.z -= o.nz * o.depth * (1 - share); }
    if (rel < 0) {
      const e = 0.25;
      const an = a.fx * o.nx + a.fz * o.nz;
      a.v -= (1 + e) * rel * share * an;
      if (both) { const bn = b.fx * o.nx + b.fz * o.nz; b.v += (1 + e) * rel * (1 - share) * bn; }
      // glancing blows twist the car a little
      const twist = clamp(-rel * 0.012, 0, 0.05) * Math.sign(a.fx * o.nz - a.fz * o.nx || 1) * (Math.abs(an) < 0.95 ? 1 : 0);
      a.h = wrapAngle(a.h + twist * share);
      const speed = -rel;
      if (speed > 0.6 && this.onImpact) this.onImpact(a, b, speed, b.isStatic ? 'static' : 'car');
      if (speed > 0.6) { a.bump = Math.min(1, speed / 6); if (both) b.bump = Math.min(1, speed / 6); }
    }
  }

  collideKerb(c, quiet = false) {
    const sdf = this.track.sdf;
    // quick reject: centre comfortably inside the carriageway
    if (sdf.sample(c.x, c.z) > c.len / 2 + 0.3) return;
    const cs = c.corners();
    let worst = 0, wp = null;
    for (let i = 0; i < 4; i++) {
      const p = cs[i], q = cs[(i + 1) % 4];
      for (const pt of [p, { x: (p.x + q.x) / 2, z: (p.z + q.z) / 2 }]) {
        const d = sdf.sample(pt.x, pt.z);
        if (d < worst) { worst = d; wp = pt; }
      }
    }
    if (!wp) return;
    const g = sdf.grad(wp.x, wp.z);   // points into the road
    const pen = -worst;
    c.x += g.x * pen; c.z += g.z * pen;
    const fn = c.fx * g.x + c.fz * g.z;
    const vn = c.v * fn;
    if (vn < 0) {
      const impact = -vn;
      c.v -= (1 + 0.15) * c.v * fn * fn;
      if (!quiet && impact > 1.1 && this.onImpact) this.onImpact(c, null, impact, 'kerb');
      if (impact > 1.1) c.bump = Math.min(1, impact / 5);
    }
    // rotate so the body lies along the kerb instead of grinding into it
    const rx = wp.x - c.x, rz = wp.z - c.z;
    c.h = wrapAngle(c.h + clamp((rx * g.z - rz * g.x) * pen * 0.12, -0.04, 0.04));
  }

  /** Smallest gap from car to anything solid nearby (for parking sensors). */
  proximity(car, range = 2.5) {
    let d = range;
    const tmp = this.near(car.x, car.z, []);
    for (const s of tmp) if (!s.ghost && Math.abs(s.x - car.x) + Math.abs(s.z - car.z) < 12) d = Math.min(d, boxGap(car, s));
    for (const o of this.cars) if (o !== car && !o.ghost && Math.abs(o.x - car.x) + Math.abs(o.z - car.z) < 14) d = Math.min(d, boxGap(car, o));
    for (const p of car.corners()) d = Math.min(d, Math.max(0, this.track.sdf.sample(p.x, p.z)));
    return d;
  }
}

/**
 * Evaluate how well a car sits in a bay.
 * Returns { inBay, valid, angle, overhang, kerbGap, along, quality (0-100), issue }.
 */
export function evaluatePark(car, bay) {
  const c = Math.cos(bay.h), s = Math.sin(bay.h);
  // bay frame: u along the bay, w across it with +w pointing towards the road (away from kerb)
  const sgn = -bay.side;   // side +1 = kerb on the right => road is to the left (-right normal)
  const toBay = (x, z) => {
    const dx = x - bay.x, dz = z - bay.z;
    return { u: dx * c + dz * s, w: (-dx * s + dz * c) * sgn };
  };
  const ctr = toBay(car.x, car.z);
  let dh = Math.abs(wrapAngle(car.h - bay.h));
  const reversed = dh > Math.PI / 2;
  if (reversed) dh = Math.PI - dh;
  let maxU = 0, maxW = -9, minW = 9;
  for (const p of car.corners()) {
    const l = toBay(p.x, p.z);
    maxU = Math.max(maxU, Math.abs(l.u)); maxW = Math.max(maxW, l.w); minW = Math.min(minW, l.w);
  }
  const overEnd = Math.max(0, maxU - bay.len / 2);
  const overhang = Math.max(0, maxW - bay.wid / 2);      // sticking out into the road
  const kerbGap = minW + bay.wid / 2;                    // distance from kerb to the nearest part of the car
  const inBay = Math.abs(ctr.u) < bay.len / 2 && Math.abs(ctr.w) < bay.wid / 2 + 0.5;
  let issue = null;
  if (!inBay) issue = 'out';
  else if (dh > 0.36) issue = 'angle';
  else if (overhang > 0.75) issue = 'overhang';
  else if (overEnd > 0.35) issue = 'ends';
  const valid = inBay && !issue;
  const qAngle = clamp(1 - dh / 0.24, 0, 1);
  const qKerb = clamp(1 - Math.max(0, kerbGap - 0.3) / 0.75, 0, 1) * clamp(1 - overhang / 0.6, 0, 1);
  const qCentre = clamp(1 - Math.abs(ctr.u) / Math.max(0.5, (bay.len - car.len) / 2), 0, 1);
  const quality = Math.round((qAngle * 0.45 + qKerb * 0.35 + qCentre * 0.2) * 100);
  return { inBay, valid, angle: dh, overhang, kerbGap, along: ctr.u, across: ctr.w, quality, issue, reversed };
}

export function ratingFor(quality) {
  if (quality >= 86) return { key: 'perfect', label: 'SHOWROOM FINISH', points: 250 };
  if (quality >= 66) return { key: 'tidy', label: 'TIDY', points: 150 };
  if (quality >= 42) return { key: 'ok', label: "IT'LL DO", points: 60 };
  return { key: 'awful', label: 'ABANDONED, NOT PARKED', points: -75 };
}
