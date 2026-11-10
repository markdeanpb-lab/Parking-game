// Small maths helpers shared by the logic and rendering code.
// World convention: ground plane is (x, z); x = east, z = south (so north is -z).
// Heading h: forward = (cos h, sin h); increasing h turns RIGHT (clockwise seen from above).

export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const sign = (v) => (v < 0 ? -1 : 1);
export const smooth = (t) => t * t * (3 - 2 * t);

export function wrapAngle(a) {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
}
export const angleDiff = (a, b) => wrapAngle(a - b);

export function approach(v, target, maxStep) {
  if (v < target) return Math.min(v + maxStep, target);
  return Math.max(v - maxStep, target);
}

/** Deterministic PRNG (mulberry32). */
export function makeRng(seed) {
  let a = seed >>> 0;
  const rng = () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  rng.range = (lo, hi) => lo + (hi - lo) * rng();
  rng.int = (lo, hi) => Math.floor(rng.range(lo, hi + 1));
  rng.pick = (arr) => arr[Math.floor(rng() * arr.length)];
  rng.chance = (p) => rng() < p;
  rng.shuffle = (arr) => {
    const a2 = arr.slice();
    for (let i = a2.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a2[i], a2[j]] = [a2[j], a2[i]];
    }
    return a2;
  };
  return rng;
}

export function distPointSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz;
  let t = l2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0;
  t = clamp(t, 0, 1);
  const cx = ax + dx * t, cz = az + dz * t;
  return Math.hypot(px - cx, pz - cz);
}

export function pointInRing(x, z, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if ((a.z > z) !== (b.z > z) && x < ((b.x - a.x) * (z - a.z)) / (b.z - a.z) + a.x) inside = !inside;
  }
  return inside;
}

/** A polyline with arc-length parameterisation. Points are {x, z}. */
export class Path {
  constructor(pts) {
    this.pts = pts;
    this.cum = [0];
    for (let i = 1; i < pts.length; i++) {
      this.cum.push(this.cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
    }
    this.length = this.cum[this.cum.length - 1];
  }
  segAt(s) {
    const c = this.cum;
    let lo = 0, hi = c.length - 2;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (c[mid] <= s) lo = mid; else hi = mid - 1;
    }
    return lo;
  }
  /** Position, unit tangent and heading at arc length s (clamped). */
  at(s) {
    s = clamp(s, 0, this.length);
    const i = this.segAt(s);
    const a = this.pts[i], b = this.pts[i + 1];
    const l = this.cum[i + 1] - this.cum[i] || 1e-9;
    const t = (s - this.cum[i]) / l;
    const tx = (b.x - a.x) / l, tz = (b.z - a.z) / l;
    return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, tx, tz, h: Math.atan2(tz, tx) };
  }
  /** Nearest point on the path. Optionally restrict to arc range [s0, s1]. Returns {s, dist, lat} (lat > 0 = right of travel). */
  project(x, z, s0 = 0, s1 = this.length) {
    let best = { s: s0, dist: Infinity, lat: 0 };
    const i0 = this.segAt(clamp(s0, 0, this.length)), i1 = this.segAt(clamp(s1, 0, this.length));
    for (let i = i0; i <= i1; i++) {
      const a = this.pts[i], b = this.pts[i + 1];
      const dx = b.x - a.x, dz = b.z - a.z;
      const l2 = dx * dx + dz * dz || 1e-9;
      const t = clamp(((x - a.x) * dx + (z - a.z) * dz) / l2, 0, 1);
      const cx = a.x + dx * t, cz = a.z + dz * t;
      const d = Math.hypot(x - cx, z - cz);
      if (d < best.dist) {
        const l = Math.sqrt(l2);
        // right normal of (tx,tz) is (-tz, tx)
        const lat = ((x - cx) * -dz + (z - cz) * dx) / l;
        best = { s: clamp(this.cum[i] + l * t, s0, s1), dist: d, lat };
      }
    }
    return best;
  }
  /** Point offset laterally (positive = right of travel). */
  offsetAt(s, lat) {
    const p = this.at(s);
    return { x: p.x - p.tz * lat, z: p.z + p.tx * lat, h: p.h, tx: p.tx, tz: p.tz };
  }
}

export function formatMph(ms) { return Math.round(Math.abs(ms) * 2.23694); }
