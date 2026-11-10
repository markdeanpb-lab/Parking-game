// Builds the playable street network from the OSM-derived map data:
//  - edges (street centrelines in competition travel direction) and the directed circuit graph
//  - a signed-distance field of the carriageway (for kerb collisions)
//  - the kerbside layout: resident parked cars, competition bay candidates, driveways, yellow lines
//  - lane paths for AI drivers
// Pure logic: no rendering code in here.

import { Path, makeRng, clamp, lerp, smooth, wrapAngle, pointInRing } from './util.js';
import { CAR_TYPES, PARKED_COLOURS, PARKED_MIX } from './cartypes.js';

export const BAY_WIDTH = 2.0;
const JUNCTION_CLEAR = 12;      // no parking this close to a junction (double yellows)
const LAYOUT_SEED = 5137;       // fixed: the street always has the same residents

const flip = (p) => ({ x: p[0], z: -p[1] });

// ------------------------------------------------------------------ SDF
function buildSdf(roadPolys, bounds) {
  const res = 0.5, R = 6;
  const x0 = bounds.minX, z0 = bounds.minZ;
  const nx = Math.ceil((bounds.maxX - x0) / res) + 1, nz = Math.ceil((bounds.maxZ - z0) / res) + 1;
  const grid = new Float32Array(nx * nz).fill(R);
  const edges = [];
  for (const poly of roadPolys) {
    for (const ring of [poly.outer, ...poly.holes]) {
      for (let i = 0; i < ring.length; i++) edges.push([ring[i], ring[(i + 1) % ring.length]]);
    }
  }
  // unsigned distance, splatted around each boundary edge
  for (const [a, b] of edges) {
    const i0 = Math.max(0, Math.floor((Math.min(a.x, b.x) - R - x0) / res)), i1 = Math.min(nx - 1, Math.ceil((Math.max(a.x, b.x) + R - x0) / res));
    const j0 = Math.max(0, Math.floor((Math.min(a.z, b.z) - R - z0) / res)), j1 = Math.min(nz - 1, Math.ceil((Math.max(a.z, b.z) + R - z0) / res));
    const dx = b.x - a.x, dz = b.z - a.z, l2 = dx * dx + dz * dz || 1e-9;
    for (let j = j0; j <= j1; j++) {
      const pz = z0 + j * res;
      for (let i = i0; i <= i1; i++) {
        const px = x0 + i * res;
        const t = clamp(((px - a.x) * dx + (pz - a.z) * dz) / l2, 0, 1);
        const d = Math.hypot(px - a.x - dx * t, pz - a.z - dz * t);
        const k = j * nx + i;
        if (d < grid[k]) grid[k] = d;
      }
    }
  }
  // sign by even-odd scanline fill: inside the carriageway = positive
  const xs = [];
  for (let j = 0; j < nz; j++) {
    const pz = z0 + j * res + 1e-4;
    xs.length = 0;
    for (const [a, b] of edges) {
      if ((a.z > pz) !== (b.z > pz)) xs.push(a.x + ((pz - a.z) / (b.z - a.z)) * (b.x - a.x));
    }
    xs.sort((p, q) => p - q);
    let k = 0, inside = false;
    for (let i = 0; i < nx; i++) {
      const px = x0 + i * res;
      while (k < xs.length && xs[k] < px) { inside = !inside; k++; }
      if (!inside) grid[j * nx + i] = -grid[j * nx + i];
    }
  }
  const sample = (x, z) => {
    const fx = clamp((x - x0) / res, 0, nx - 1.001), fz = clamp((z - z0) / res, 0, nz - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, k = j * nx + i;
    return (grid[k] * (1 - u) + grid[k + 1] * u) * (1 - v) + (grid[k + nx] * (1 - u) + grid[k + nx + 1] * u) * v;
  };
  const grad = (x, z) => {
    const e = 0.4;
    let gx = sample(x + e, z) - sample(x - e, z), gz = sample(x, z + e) - sample(x, z - e);
    const l = Math.hypot(gx, gz) || 1;
    return { x: gx / l, z: gz / l };
  };
  return { sample, grad, res };
}

// ------------------------------------------------------------------ track
export function buildTrack(map) {
  const b = map.meta.bounds; // minx, miny, maxx, maxy (y north)
  const bounds = { minX: b[0], maxX: b[2], minZ: -b[3], maxZ: -b[1] };
  const roadPolys = map.road.map((p) => ({ outer: p.outer.map(flip), holes: p.holes.map((h) => h.map(flip)) }));
  const sdf = buildSdf(roadPolys, bounds);

  const nodes = {};
  for (const k in map.nodes) nodes[k] = flip(map.nodes[k]);

  const edges = {};
  for (const e of map.edges) {
    const path = new Path(e.pts.map(flip));
    const side = e.baySide === 'L' ? -1 : e.baySide === 'R' ? 1 : 0;
    edges[e.id] = {
      id: e.id, name: e.name, from: e.from, to: e.to, path, len: path.length, width: e.width, hw: e.width / 2,
      circuit: !!e.circuit, stub: !!e.stub, baySide: side, realOneway: !!e.realOneway,
      laneOff: side === 0 ? 0 : -side * 1.0, next: [], nextAll: [],
    };
  }
  for (const e of Object.values(edges)) {
    for (const f of Object.values(edges)) {
      if (f.from === e.to && f !== e && f.to !== e.from) {
        e.nextAll.push(f.id);
        if (f.circuit) e.next.push(f.id);
      }
    }
  }
  // Catherine St stubs are behind barriers; nobody routes into them.
  for (const e of Object.values(edges)) e.nextAll = e.nextAll.filter((id) => !id.startsWith('catherine') || id === 'catherine');

  const track = { map, bounds, sdf, nodes, edges, roadPolys, bays: [], parked: [], driveways: [], yellow: [], barriers: [], cushions: [] };

  // ---- barriers closing the competition area (real roads continue beyond) ----
  const addBarrier = (edgeId, s, label) => {
    const e = edges[edgeId];
    const p = e.path.at(s);
    track.barriers.push({ x: p.x, z: p.z, h: p.h, len: 0.5, wid: e.width + 2.4, edgeId, label });
  };
  addBarrier('grangeSE', edges.grangeSE.len - 9, "ST PETER'S ST");
  addBarrier('catherineW', 22, 'CATHERINE ST');
  addBarrier('catherineE', 24, 'CATHERINE ST');

  track.cushions = map.cushions.map(flip).map((c) => {
    const loc = locate(track, c.x, c.z);
    return { x: c.x, z: c.z, h: loc.edge.path.at(loc.s).h, edgeId: loc.edge.id, s: loc.s };
  });

  layoutKerbside(track);

  track.locate = (x, z) => locate(track, x, z);
  track.buildRoute = (edgeIds, startS = 0) => buildRoute(track, edgeIds, startS);
  track.pathDistance = (edgeId, s, toEdgeId, toS) => pathDistance(track, edgeId, s, toEdgeId, toS);
  track.routeEdgesTo = (edgeId, s, toEdgeId, toS) => routeEdgesTo(track, edgeId, s, toEdgeId, toS);
  track.spawnPoints = spawnPoints(track);
  return track;
}

/** Nearest street to a point. lat > 0 means right of the competition travel direction. */
function locate(track, x, z) {
  let best = null;
  for (const e of Object.values(track.edges)) {
    const pr = e.path.project(x, z);
    if (!best || pr.dist < best.dist) best = { edge: e, s: pr.s, lat: pr.lat, dist: pr.dist };
  }
  return best;
}

// ------------------------------------------------------------------ kerbside layout
function layoutKerbside(track) {
  const rng = makeRng(LAYOUT_SEED);
  // real driveway / alley accesses from OSM, matched to an edge and a side
  const accessByEdge = {};
  for (const a of track.map.accesses) {
    const at = flip(a.at), toward = flip(a.toward);
    const loc = locate(track, at.x, at.z);
    if (loc.dist > 1.5) continue;
    const p = loc.edge.path.at(loc.s);
    const side = (toward.x - at.x) * -p.tz + (toward.z - at.z) * p.tx > 0 ? 1 : -1;
    (accessByEdge[loc.edge.id] ||= []).push({ s: loc.s, side, kind: a.kind });
  }
  track.accesses = accessByEdge;

  let bayId = 0;
  for (const e of Object.values(track.edges)) {
    const sA = 6, sB = e.len - 6;
    if (e.baySide === 0) {
      track.yellow.push({ edgeId: e.id, side: -1, s0: sA, s1: sB }, { edgeId: e.id, side: 1, s0: sA, s1: sB });
      continue;
    }
    const side = e.baySide;
    let s0 = JUNCTION_CLEAR, s1 = e.len - JUNCTION_CLEAR;
    if (e.id === 'grangeNW') s1 = e.len - 5;            // real dead end
    if (e.id === 'grangeSE') s1 = e.len - 17;           // barrier
    track.yellow.push({ edgeId: e.id, side: -side, s0: sA, s1: e.id === 'grangeNW' ? e.len - 1 : sB });
    track.yellow.push({ edgeId: e.id, side, s0: sA, s1: s0 - 0.6 }, { edgeId: e.id, side, s0: s1 + 0.6, s1: sB });

    const drives = (accessByEdge[e.id] || []).filter((a) => a.side === side && a.s > s0 + 4 && a.s < s1 - 4)
      .map((a) => ({ s0: a.s - 2.6, s1: a.s + 2.6, kind: a.kind })).sort((p, q) => p.s0 - q.s0);
    for (const d of drives) {
      const mid = (d.s0 + d.s1) / 2;
      const p = e.path.offsetAt(mid, side * (e.hw - 1.0));
      track.driveways.push({ edgeId: e.id, street: e.name, s: mid, len: d.s1 - d.s0, wid: BAY_WIDTH, x: p.x, z: p.z, h: p.h, side, kind: d.kind });
    }

    let s = s0 + rng.range(0, 1.2), sinceBay = rng.int(2, 4), gapTarget = rng.int(5, 7);
    while (s < s1 - 3.6) {
      const drive = drives.find((d) => d.s1 > s);
      const wantBay = sinceBay >= gapTarget && s > s0 + 5 && s < s1 - 13;
      let item;
      if (wantBay) {
        const r = rng();
        const kind = r < 0.25 ? 'tight' : r < 0.8 ? 'normal' : 'generous';
        item = { bay: true, kind, len: kind === 'tight' ? 5.7 : kind === 'normal' ? 6.5 : 7.6 };
      } else {
        const type = rng.pick(PARKED_MIX);
        item = { bay: false, type, len: CAR_TYPES[type].len + rng.range(0.75, 1.15) };
      }
      if (drive && s + item.len > drive.s0) {
        if (drive.s0 - s > 4.2 && !item.bay && CAR_TYPES.mini.len + 0.7 < drive.s0 - s) {
          item = { bay: false, type: 'mini', len: drive.s0 - s };   // squeeze a small car in before the driveway
        } else { s = drive.s1 + 0.2; drives.splice(drives.indexOf(drive), 1); continue; }
      }
      if (s + item.len > s1) break;
      const bend = Math.abs(wrapAngle(e.path.at(s + item.len).h - e.path.at(s).h));
      if (bend > 0.1) { s += 1.5; continue; }
      const mid = s + item.len / 2;
      if (item.bay) {
        const p = e.path.offsetAt(mid, side * (e.hw - BAY_WIDTH / 2));
        const resType = rng.pick(['hatch', 'mini', 'saloon', 'estate', 'hatch']);
        track.bays.push({
          id: bayId++, edgeId: e.id, street: e.name, s: mid, slotLen: item.len, len: item.len - 0.4, wid: BAY_WIDTH,
          x: p.x, z: p.z, h: p.h, side, kind: item.kind, stub: e.stub,
          state: 'closed', occupant: null, claimedBy: null,
          resident: { type: resType, colour: rng.pick(PARKED_COLOURS), h: p.h, ...parkedPose(e, mid, side, CAR_TYPES[resType], rng) },
        });
        sinceBay = 0; gapTarget = rng.int(5, 8);
      } else {
        const spec = CAR_TYPES[item.type];
        const pose = parkedPose(e, mid, side, spec, rng);
        const facing = !e.realOneway && rng.chance(0.12) ? Math.PI : 0;
        track.parked.push({ type: item.type, colour: rng.pick(PARKED_COLOURS), x: pose.x, z: pose.z, h: pose.h + facing + rng.range(-0.02, 0.02), edgeId: e.id });
        sinceBay++;
      }
      s += item.len;
    }
  }
}

function parkedPose(e, s, side, spec, rng) {
  const lat = side * (e.hw - 0.22 - spec.wid / 2 - rng.range(0, 0.14));
  const p = e.path.offsetAt(s, lat);
  return { x: p.x, z: p.z, h: p.h };
}

// ------------------------------------------------------------------ routing
/** Lateral lane offset on edge e at arc s, given the turn into and out of the edge. */
function laneOffsetAt(e, s, swingIn, swingOut) {
  const T = Math.min(14, e.len / 2);
  if (s < T) return lerp(swingIn, e.laneOff, smooth(s / T));
  if (s > e.len - T) return lerp(e.laneOff, swingOut, smooth((s - (e.len - T)) / T));
  return e.laneOff;
}

function turnAngle(a, b) { // signed turn from the end of edge a onto the start of edge b (positive = right)
  return wrapAngle(b.path.at(Math.min(6, b.len)).h - a.path.at(Math.max(a.len - 6, 0)).h);
}

/**
 * Build a drivable lane path through a sequence of edges.
 * Returns { path, spans:[{edgeId, r0, r1, e0, e1}] } where r = arc along the route and e = arc along the edge.
 */
function buildRoute(track, edgeIds, startS = 0) {
  const pts = [];
  const spans = [];
  const SW = 0.9;
  let dist = 0;
  const push = (p) => {
    if (pts.length) dist += Math.hypot(p.x - pts[pts.length - 1].x, p.z - pts[pts.length - 1].z);
    pts.push(p);
  };
  for (let i = 0; i < edgeIds.length; i++) {
    const e = track.edges[edgeIds[i]];
    const prev = i > 0 ? track.edges[edgeIds[i - 1]] : null, next = i < edgeIds.length - 1 ? track.edges[edgeIds[i + 1]] : null;
    const swingIn = prev ? -SW * clamp(turnAngle(prev, e) / 1.2, -1, 1) : e.laneOff;
    const swingOut = next ? -SW * clamp(turnAngle(e, next) / 1.2, -1, 1) : e.laneOff;
    const cut = Math.min(7.5, e.len * 0.42);
    const a = i === 0 ? clamp(startS, 0, e.len) : cut;
    const bEnd = next ? e.len - cut : e.len;
    if (prev && pts.length) {
      // Bezier corner from the last point of the previous edge to the first point of this one
      const p0 = pts[pts.length - 1];
      const q = e.path.offsetAt(a, laneOffsetAt(e, a, swingIn, swingOut));
      const pe = track.edges[edgeIds[i - 1]].path.at(track.edges[edgeIds[i - 1]].len);
      const k = 0.4 * Math.hypot(q.x - p0.x, q.z - p0.z);
      const c1 = { x: p0.x + pe.tx * k, z: p0.z + pe.tz * k }, c2 = { x: q.x - q.tx * k, z: q.z - q.tz * k };
      for (let t = 1; t < 8; t++) {
        const u = t / 8, v = 1 - u;
        push({
          x: v * v * v * p0.x + 3 * v * v * u * c1.x + 3 * v * u * u * c2.x + u * u * u * q.x,
          z: v * v * v * p0.z + 3 * v * v * u * c1.z + 3 * v * u * u * c2.z + u * u * u * q.z,
        });
      }
    }
    let first = true, r0 = 0;
    const n = Math.max(1, Math.ceil((bEnd - a) / 2));
    for (let j = 0; j <= n; j++) {
      const s = a + ((bEnd - a) * j) / n;
      const p = e.path.offsetAt(s, laneOffsetAt(e, s, swingIn, swingOut));
      push({ x: p.x, z: p.z });
      if (first) { r0 = dist; first = false; }
    }
    spans.push({ edgeId: e.id, r0, r1: dist, e0: a, e1: bEnd });
  }
  const route = { path: new Path(pts), spans, edgeIds };
  /** Route arc for a position on a given edge (first span of that edge at/after `afterR`). */
  route.rOf = (edgeId, es, afterR = -1) => {
    for (const sp of spans) {
      if (sp.edgeId === edgeId && sp.r1 >= afterR && es <= sp.e1 + 4) {
        return sp.r0 + ((clamp(es, sp.e0, sp.e1) - sp.e0) / Math.max(1e-6, sp.e1 - sp.e0)) * (sp.r1 - sp.r0);
      }
    }
    return null;
  };
  route.edgeAt = (r) => {
    for (const sp of spans) if (r <= sp.r1 + 0.01) return sp;
    return spans[spans.length - 1];
  };
  return route;
}

/** Shortest directed edge sequence from (edgeId, s) to a point (toEdgeId, toS). Null if unreachable. */
function routeEdgesTo(track, edgeId, s, toEdgeId, toS) {
  if (edgeId === toEdgeId && toS >= s) return { edges: [edgeId], dist: toS - s };
  let best = null;
  const walk = (id, seq, dist) => {
    if (seq.length > 9 || (best && dist >= best.dist)) return;
    for (const nx of track.edges[id].nextAll) {
      if (nx === toEdgeId) {
        const d = dist + toS;
        if (!best || d < best.dist) best = { edges: [...seq, nx], dist: d };
      } else if (!seq.includes(nx) && !track.edges[nx].stub) {
        walk(nx, [...seq, nx], dist + track.edges[nx].len);
      }
    }
  };
  walk(edgeId, [edgeId], track.edges[edgeId].len - s);
  return best;
}

function pathDistance(track, edgeId, s, toEdgeId, toS) {
  const r = routeEdgesTo(track, edgeId, s, toEdgeId, toS);
  return r ? r.dist : Infinity;
}

function spawnPoints(track) {
  const out = [];
  for (const id of ['dalton', 'grangeAB', 'grangeBC', 'church', 'bernard']) {
    const e = track.edges[id];
    for (let s = 20; s < e.len - 24; s += 24) {
      const p = e.path.offsetAt(s, e.laneOff);
      out.push({ edgeId: id, s, x: p.x, z: p.z, h: p.h });
    }
  }
  return out;
}

export function pointInRoad(track, x, z) { return track.sdf.sample(x, z) > 0; }
export { pointInRing };
