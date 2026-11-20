// Course geometry + terrain for the race broadcast.
// Positions come from course.json points (fraction = metres / 5000 along the polyline, 10 m steps).
// Lap 2 re-uses lap 1's ribbon (the two GPS medians differ by 2-5 m) so runners stay on the drawn path;
// the finish spur and the lap-2 start merge use the raw points. Timing is never touched here: this only maps
// metres -> world position.
import * as THREE from 'three';

export const VEX = 2.3;          // vertical exaggeration of the 22 m real relief
export const PATH_W = 7.2;       // drawn path width (m)
export const PATH_LIFT = 0.16;   // path surface above terrain
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function buildCourse(course, park, plan) {
  const P = course.points;
  const N = P.length - 1; // 500 segments of 10 m
  const step = course.lengthM / N;
  const raw = (m) => {
    const x = Math.max(0, Math.min(N, m / step));
    const i = Math.min(N - 1, Math.floor(x)), f = x - i;
    // Catmull-Rom on x/z for smooth motion
    const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(N, i + 2)];
    const cr = (k) => 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * f + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * f * f + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * f * f * f);
    return [cr(0), cr(2), p1[1] + (p2[1] - p1[1]) * f];
  };
  // also allow extrapolation past 5000 (finish run-out) along the final tangent
  const rawExt = (m) => {
    if (m <= course.lengthM) return raw(m);
    const a = raw(course.lengthM - 20), b = raw(course.lengthM);
    const k = (m - course.lengthM) / 20;
    return [b[0] + (b[0] - a[0]) * k, b[1] + (b[1] - a[1]) * k, b[2]];
  };

  // ---- lap-2 -> lap-1 mapping (nearest projection, windowed around the overlap anchors) ----
  const LAP1_END = 2700; // lap-1 geometry used for lap-2 mapping
  const LAP1_END_DRAW = 2585;
  const anchors = course.overlaps.filter(([a, b]) => b > a).sort((x, y) => x[1] - y[1]);
  const guess = (m) => {
    for (let i = 0; i < anchors.length - 1; i++) {
      const [a0, b0] = anchors[i], [a1, b1] = anchors[i + 1];
      if (m <= b1) return a0 + (m - b0) * (a1 - a0) / (b1 - b0);
    }
    const [a, b] = anchors.at(-1); return a + (m - b);
  };
  const lap1Samples = [];
  for (let m = 0; m <= LAP1_END; m += 2) lap1Samples.push([m, ...raw(m)]);
  const MAP_FROM = 2600, MAP_TO = 4900;
  const map2 = [];
  for (let m = MAP_FROM; m <= MAP_TO; m += 10) {
    const q = raw(m), g = guess(m);
    let best = g, bd = 1e9;
    for (const s of lap1Samples) {
      if (Math.abs(s[0] - g) > 60) continue;
      const d = (s[1] - q[0]) ** 2 + (s[2] - q[1]) ** 2;
      if (d < bd) { bd = d; best = s[0]; }
    }
    map2.push(best);
  }
  // smooth + monotonic
  const sm = map2.map((v, i) => { let s = 0, n = 0; for (let k = -3; k <= 3; k++) { const j = i + k; if (j >= 0 && j < map2.length) { s += map2[j]; n++; } } return s / n; });
  for (let i = 1; i < sm.length; i++) sm[i] = Math.max(sm[i], sm[i - 1] + 0.5);
  const mapLap2 = (m) => {
    const x = (m - MAP_FROM) / 10; const i = Math.max(0, Math.min(sm.length - 2, Math.floor(x))); const f = x - i;
    return sm[i] + (sm[i + 1] - sm[i]) * f;
  };

  // ---- diversions (funfair weekends) ----
  const diversions = {};
  function setPlan(pl) {
    for (const k of Object.keys(diversions)) delete diversions[k];
    for (const r of pl?.runners || []) {
      if (!r.diversions || !r.diversions.length) continue;
      diversions[r.id] = r.diversions.map((d) => {
        const pts = d.path; const cum = [0];
        for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
        return { ...d, cum, len: cum.at(-1) };
      });
    }
  }
  setPlan(plan);
  const divPos = (d, m) => {
    const s = Math.max(0, Math.min(1, (m - d.fromM) / (d.toM - d.fromM))) * d.len;
    let i = 0; while (i < d.cum.length - 2 && d.cum[i + 1] < s) i++;
    const f = (s - d.cum[i]) / Math.max(1e-6, d.cum[i + 1] - d.cum[i]);
    return [d.path[i][0] + (d.path[i + 1][0] - d.path[i][0]) * f, d.path[i][1] + (d.path[i + 1][1] - d.path[i][1]) * f];
  };

  // ---- core position (x, z) for a runner at metres m ----
  function baseXZ(m) {
    if (m < MAP_FROM - 60) { const q = rawExt(m); return [q[0], q[1]]; }
    const q = rawExt(m);
    if (m >= MAP_TO + 40) return [q[0], q[1]];
    const w = smooth(MAP_FROM - 60, MAP_FROM + 60, m) * (1 - smooth(MAP_TO - 60, MAP_TO, m));
    if (w <= 0) return [q[0], q[1]];
    const l = raw(Math.min(LAP1_END, mapLap2(Math.max(MAP_FROM, Math.min(MAP_TO, m)))));
    return [q[0] + (l[0] - q[0]) * w, q[1] + (l[1] - q[1]) * w];
  }
  function xzAt(m, runnerId) {
    let p = baseXZ(m);
    const ds = runnerId && diversions[runnerId];
    if (ds) for (const d of ds) {
      if (m > d.fromM && m < d.toM) {
        const w = smooth(d.fromM, d.fromM + 30, m) * (1 - smooth(d.toM - 30, d.toM, m));
        const q = divPos(d, m);
        p = [p[0] + (q[0] - p[0]) * w, p[1] + (q[1] - p[1]) * w];
        return { x: p[0], z: p[1], div: w, divInfo: d };
      }
    }
    return { x: p[0], z: p[1], div: 0, divInfo: null };
  }

  // ---- terrain heightfield ----
  const [bx0, bz0, bx1, bz1] = park.bounds;
  const T = { x0: bx0 - 60, z0: bz0 - 60, cell: 5 };
  T.nx = Math.ceil((bx1 + 60 - T.x0) / T.cell) + 1;
  T.nz = Math.ceil((bz1 + 60 - T.z0) / T.cell) + 1;
  T.h = new Float32Array(T.nx * T.nz);
  const src = [];
  for (let i = 0; i <= N; i += 2) src.push(P[i]);
  let meanY = 0; for (const p of src) meanY += p[1]; meanY /= src.length;
  // pseudo-noise for gentle hummocks away from the course
  const noise = (x, z) => Math.sin(x * 0.011 + 1.3) * Math.cos(z * 0.009 - 0.4) * 2.2 + Math.sin(x * 0.027 + z * 0.019) * 0.9;
  for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) {
    const x = T.x0 + i * T.cell, z = T.z0 + j * T.cell;
    let sw = 0, sh = 0, dmin = 1e9;
    for (const p of src) {
      const d2 = (p[0] - x) ** 2 + (p[2] - z) ** 2;
      if (d2 < dmin) dmin = d2;
      const q = 1 / (d2 + 400), w = q * q; sw += w; sh += w * p[1];
    }
    const far = smooth(30, 160, Math.sqrt(dmin));
    let h = (sh / sw) * (1 - far * 0.4) + meanY * far * 0.4 + noise(x, z) * far;
    T.h[j * T.nx + i] = h * VEX;
  }
  // flatten features (lake bed, track, courts, pitches)
  const flat = park.features.filter((f) => f.closed && ['water', 'track', 'tennis', 'pitch'].includes(f.kind) && f.pts.length > 3);
  for (const f of flat) {
    const bb = bbox(f.pts);
    const cells = [];
    for (let j = Math.max(0, Math.floor((bb[1] - 12 - T.z0) / T.cell)); j <= Math.min(T.nz - 1, Math.ceil((bb[3] + 12 - T.z0) / T.cell)); j++)
      for (let i = Math.max(0, Math.floor((bb[0] - 12 - T.x0) / T.cell)); i <= Math.min(T.nx - 1, Math.ceil((bb[2] + 12 - T.x0) / T.cell)); i++) {
        const x = T.x0 + i * T.cell, z = T.z0 + j * T.cell;
        const d = signedDist(f.pts, x, z); // <0 inside
        if (d < 12) cells.push([j * T.nx + i, d]);
      }
    let mean = 0, n = 0; for (const [k, d] of cells) if (d < 0) { mean += T.h[k]; n++; }
    if (!n) continue; mean /= n;
    if (f.kind === 'water') mean = Math.min(...cells.filter((c) => c[1] < 0).map((c) => T.h[c[0]])) - 0.2;
    f._level = mean;
    for (const [k, d] of cells) {
      const w = 1 - smooth(0, 12, d);
      T.h[k] = T.h[k] * (1 - w) + mean * w - (f.kind === 'water' ? 1.6 * (1 - smooth(-6, 0, d)) : 0);
    }
  }
  // level the ground across the running path so the drawn path sits flat on it
  {
    // light blur of the whole field first (GPS elevation noise makes 3-4 m bumps near the start)
    for (let it = 0; it < 3; it++) {
      const h2 = new Float32Array(T.h);
      for (let j = 1; j < T.nz - 1; j++) for (let i = 1; i < T.nx - 1; i++) {
        const k = j * T.nx + i;
        h2[k] = (T.h[k] * 4 + T.h[k - 1] + T.h[k + 1] + T.h[k - T.nx] + T.h[k + T.nx]) / 8;
      }
      T.h.set(h2);
    }
    const best = new Float32Array(T.nx * T.nz).fill(1e9), sw = new Float32Array(T.nx * T.nz), shh = new Float32Array(T.nx * T.nz);
    const raw0 = (i, j) => T.h[j * T.nx + i];
    const centreH = (x, z) => { const i = Math.round((x - T.x0) / T.cell), j = Math.round((z - T.z0) / T.cell); return raw0(Math.max(0, Math.min(T.nx - 1, i)), Math.max(0, Math.min(T.nz - 1, j))); };
    const ranges = [[0, LAP1_END_DRAW], [2540, 2690], [MAP_TO - 80, course.lengthM + 45]];
    const samples = [];
    for (const [a, b] of ranges) for (let m = a; m <= b; m += 2) { const p = baseXZ(m); samples.push([p[0], p[1], centreH(p[0], p[1])]); }
    for (let k = 0; k < 4; k++) for (let i = 1; i < samples.length - 1; i++) samples[i][2] = (samples[i - 1][2] + samples[i][2] * 2 + samples[i + 1][2]) / 4;
    const Rr = PATH_W / 2 + 7;
    for (const [x, z, h] of samples) {
      const i0 = Math.floor((x - Rr - T.x0) / T.cell), i1 = Math.ceil((x + Rr - T.x0) / T.cell), j0 = Math.floor((z - Rr - T.z0) / T.cell), j1 = Math.ceil((z + Rr - T.z0) / T.cell);
      for (let j = Math.max(0, j0); j <= Math.min(T.nz - 1, j1); j++) for (let i = Math.max(0, i0); i <= Math.min(T.nx - 1, i1); i++) {
        const d = Math.hypot(T.x0 + i * T.cell - x, T.z0 + j * T.cell - z); if (d > Rr) continue;
        const k = j * T.nx + i; const w = (1 - d / Rr) ** 2;
        sw[k] += w; shh[k] += w * h; if (d < best[k]) best[k] = d;
      }
    }
    for (let k = 0; k < best.length; k++) if (best[k] < Rr && sw[k] > 0) { const w = 1 - smooth(PATH_W / 2 + 0.5, Rr, best[k]); T.h[k] = T.h[k] * (1 - w) + (shh[k] / sw[k]) * w; }
    T.pathSamples = samples;
  }
  // ---- where the path crosses a lake inlet the levelling can sink it under the water plane (runners appeared to wade):
  // raise a low causeway, ~0.3 m above the water, easing back to the ground over ~12 m
  for (const f of flat) {
    if (f.kind !== 'water' || f._level == null) continue;
    const top = f._level + 0.3, R0 = PATH_W / 2 + 1.5, R1 = R0 + 12;
    const wet = T.pathSamples.filter(([x, z]) => signedDist(f.pts, x, z) < 4);
    if (!wet.length) continue;
    const bb = bbox(wet.map(([x, z]) => [x, z]));
    for (let j = Math.max(0, Math.floor((bb[1] - R1 - T.z0) / T.cell)); j <= Math.min(T.nz - 1, Math.ceil((bb[3] + R1 - T.z0) / T.cell)); j++)
      for (let i = Math.max(0, Math.floor((bb[0] - R1 - T.x0) / T.cell)); i <= Math.min(T.nx - 1, Math.ceil((bb[2] + R1 - T.x0) / T.cell)); i++) {
        const x = T.x0 + i * T.cell, z = T.z0 + j * T.cell; let d = 1e9;
        for (const [px, pz] of wet) d = Math.min(d, Math.hypot(px - x, pz - z));
        const w = 1 - smooth(R0, R1, d), k = j * T.nx + i;
        if (w > 0 && T.h[k] < top) T.h[k] += (top - T.h[k]) * w;
      }
  }
  // ---- the Hill, dramatised: the climb's middle is made steeper (an S-curve on the heights between its foot and
  // its top, fading out ~100 m either side of the climb). Runners, path, props and cameras all read heightAt(), so
  // everything stays glued together; only the look of the slope changes.
  {
    const hs = []; for (let m = 1640; m <= 2020; m += 5) { const p = baseXZ(m); hs.push(p); }
    const hAt0 = (x, z) => { const i = Math.round((x - T.x0) / T.cell), j = Math.round((z - T.z0) / T.cell); return T.h[Math.max(0, Math.min(T.nz - 1, j)) * T.nx + Math.max(0, Math.min(T.nx - 1, i))]; };
    const hB = hAt0(...baseXZ(1650)), hT = hAt0(...baseXZ(2000));
    if (hT - hB > 8) {
      const bb = [Math.min(...hs.map((p) => p[0])) - 160, Math.min(...hs.map((p) => p[1])) - 160, Math.max(...hs.map((p) => p[0])) + 160, Math.max(...hs.map((p) => p[1])) + 160];
      for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) {
        const x = T.x0 + i * T.cell, z = T.z0 + j * T.cell; if (x < bb[0] || x > bb[2] || z < bb[1] || z > bb[3]) continue;
        let d = 1e9; for (const p of hs) d = Math.min(d, (p[0] - x) ** 2 + (p[1] - z) ** 2); d = Math.sqrt(d);
        const w = 1 - smooth(70, 150, d); if (w <= 0) continue;
        const k = j * T.nx + i, h = T.h[k], u = (h - hB) / (hT - hB); if (u <= 0 || u >= 1) continue;
        const g = 0.5 - 0.5 * Math.cos(Math.PI * Math.pow(u, 0.9)); // ~1.6x steeper mid-climb
        T.h[k] = h + w * (hB + (hT - hB) * g - h);
      }
    }
  }
  const lake = flat.filter((f) => f.kind === 'water').sort((a, b) => b.pts.length - a.pts.length)[0];
  function heightAt(x, z) {
    const fx = (x - T.x0) / T.cell, fz = (z - T.z0) / T.cell;
    const i = Math.max(0, Math.min(T.nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(T.nz - 2, Math.floor(fz)));
    const u = Math.max(0, Math.min(1, fx - i)), v = Math.max(0, Math.min(1, fz - j));
    const a = T.h[j * T.nx + i], b = T.h[j * T.nx + i + 1], c = T.h[(j + 1) * T.nx + i], d = T.h[(j + 1) * T.nx + i + 1];
    // match the mesh triangulation (diagonal from (i+1,j) to (i,j+1))
    if (u + v <= 1) return a + (b - a) * u + (c - a) * v;
    return d + (c - d) * (1 - u) + (b - d) * (1 - v);
  }

  // ---- public sampling ----
  const tmp = new THREE.Vector3();
  function sample(m, runnerId, out = {}) {
    const p = xzAt(m, runnerId);
    const ma = Math.max(0, m - 4), mb = ma + 8;
    const a = xzAt(ma, runnerId), b = xzAt(mb, runnerId);
    let tx = b.x - a.x, tz = b.z - a.z; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    out.x = p.x; out.z = p.z; out.y = heightAt(p.x, p.z) + PATH_LIFT;
    out.tx = tx; out.tz = tz; out.rx = -tz; out.rz = tx; // right-hand side (x east, z south, y up)
    out.slope = (heightAt(b.x, b.z) - heightAt(a.x, a.z)) / Math.max(1, tl);
    out.div = p.div; out.divInfo = p.divInfo;
    return out;
  }
  // smoothed heading over a wider window (camera use)
  function heading(m, span = 25) {
    const ma = Math.max(0, m - span);
    const a = baseXZ(ma), b = baseXZ(ma + 2 * span);
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    return tmp.set((b[0] - a[0]) / l, 0, (b[1] - a[1]) / l).clone();
  }

  // ribbon centrelines (raw metres ranges) for drawing the path
  const ribbons = [{ from: 0, to: LAP1_END_DRAW, lift: 0 }, { from: 2540, to: 2690, lift: 0.02 }, { from: MAP_TO - 80, to: course.lengthM + 45, lift: 0.035 }];
  const finishM = course.lengthM;
  const geoOf = (m) => (m >= MAP_FROM && m <= MAP_TO ? mapLap2(m) : m); // lap-1 equivalent metres (for placing props)
  return { P, raw, rawExt, baseXZ, LAP1_END_DRAW, xzAt, sample, heading, heightAt, terrain: T, ribbons, finishM, lake, flat, geoOf, diversions, setPlan, LAP1_END, MAP_FROM, MAP_TO };
}

export function bbox(pts) {
  let a = [1e9, 1e9, -1e9, -1e9];
  for (const p of pts) { a[0] = Math.min(a[0], p[0]); a[1] = Math.min(a[1], p[1]); a[2] = Math.max(a[2], p[0]); a[3] = Math.max(a[3], p[1]); }
  return a;
}
export function pointInPoly(pts, x, z) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, zi] = pts[i], [xj, zj] = pts[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
export function signedDist(pts, x, z) {
  let d = 1e9;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [ax, az] = pts[j], [bx, bz] = pts[i];
    const vx = bx - ax, vz = bz - az; const l2 = vx * vx + vz * vz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / l2));
    d = Math.min(d, Math.hypot(x - ax - vx * t, z - az - vz * t));
  }
  return pointInPoly(pts, x, z) ? -d : d;
}
