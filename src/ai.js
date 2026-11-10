// Computer-controlled drivers: lane following, queueing, bay selection and parking manoeuvres.
// Each rival has a personality that changes how they drive, choose spaces and park.

import { clamp, wrapAngle, lerp } from './util.js';
import { obbOverlap, evaluatePark } from './physics.js';

export const PERSONAS = {
  mum: {
    key: 'mum', name: 'Arabella', title: 'The School Run Mum', car: 'bigsuv', carName: 'enormous SUV', colour: 0xf2f2f0,
    cruise: 8.6, seek: 10.8, reaction: [0.3, 0.7], manSpeed: 2.3, skill: 0.55, shuffles: [0, 1], aggression: 0.9, gap: 2.2, pushy: true, indicates: true,
    bio: 'Late for drop-off since 2019. Will not be giving way.',
  },
  major: {
    key: 'major', name: 'Geoffrey', title: 'The Retired Gentleman', car: 'saloon', carName: 'immaculate beige saloon', colour: 0xcdbb94,
    cruise: 6.0, seek: 6.8, reaction: [1.2, 2.0], manSpeed: 1.6, skill: 0.98, shuffles: [0, 0], aggression: 0.15, gap: 4.0, pushy: false, indicates: true,
    bio: 'Has never exceeded 14 mph. Parks like a Swiss watch.',
  },
  dazza: {
    key: 'dazza', name: 'Dazza', title: 'The Delivery Driver', car: 'van', carName: 'white van', colour: 0xfafafa,
    cruise: 10.2, seek: 12.2, reaction: [0.15, 0.45], manSpeed: 3.1, skill: 0.42, shuffles: [0, 1], aggression: 0.8, gap: 1.6, pushy: true, indicates: true,
    bio: '147 drops to do and you are in the way.',
  },
  tarquin: {
    key: 'tarquin', name: 'Tarquin', title: 'The BMW Driver', car: 'saloon', carName: 'BMW', colour: 0x1c2f55,
    cruise: 9.6, seek: 11.8, reaction: [0.25, 0.6], manSpeed: 2.6, skill: 0.74, shuffles: [0, 0], aggression: 1.0, gap: 1.4, pushy: true, indicates: false,
    bio: 'Indicators are an optional extra he did not tick.',
  },
  poppy: {
    key: 'poppy', name: 'Poppy', title: 'The Nervous Learner', car: 'mini', carName: 'learner car', colour: 0xd8332f,
    cruise: 5.8, seek: 6.8, reaction: [1.2, 2.2], manSpeed: 1.45, skill: 0.3, shuffles: [1, 2], aggression: 0.0, gap: 4.5, pushy: false, indicates: true,
    stalls: true, gullible: true, learner: true,
    bio: 'Third lesson. Has stalled eleven times. Today.',
  },
  sandra: {
    key: 'sandra', name: 'Sandra', title: 'The Local Expert', car: 'estate', carName: 'sensible estate', colour: 0x2f6b4f,
    cruise: 8.0, seek: 9.6, reaction: [0.1, 0.3], manSpeed: 2.1, skill: 0.86, shuffles: [0, 0], aggression: 0.5, gap: 2.4, pushy: false, indicates: true,
    anticipates: true,
    bio: 'Lived at No. 42 for thirty years. Knows every gap.',
  },
  // non-competing traffic
  traffic: {
    key: 'traffic', name: 'Traffic', title: 'School Run Traffic', car: 'suv', carName: 'SUV', colour: 0x40464f,
    cruise: 6.5, seek: 6.5, reaction: [9, 9], manSpeed: 2, skill: 0.5, shuffles: [0, 0], aggression: 0.5, gap: 2.6, pushy: false, indicates: true, civilian: true,
  },
  lorry: {
    key: 'lorry', name: 'Bin Lorry', title: 'The Bin Lorry', car: 'lorry', carName: 'bin lorry', colour: 0x2e7d4a,
    cruise: 3.0, seek: 3.0, reaction: [9, 9], manSpeed: 1, skill: 0.5, shuffles: [0, 0], aggression: 0, gap: 3.5, pushy: false, indicates: true, civilian: true, lorry: true,
  },
  // used when the player car is on autopilot (tests / attract mode)
  auto: {
    key: 'auto', name: 'You', title: 'Autopilot', car: 'hatch', carName: 'hatchback', colour: 0xffc928,
    cruise: 8.5, seek: 10.5, reaction: [0.3, 0.5], manSpeed: 2.4, skill: 0.8, shuffles: [0, 0], aggression: 0.6, gap: 2.4, pushy: false, indicates: true,
  },
};
export const RIVAL_ORDER = ['mum', 'major', 'dazza', 'tarquin', 'poppy', 'sandra'];

const START_AHEAD = 6.6;   // how far past the bay centre a driver pulls up before reversing in

/** Nearest thing in a straight corridor ahead of `car`. Returns {gap, other}. */
export function obstacleAhead(car, others, range, extra = 0.3) {
  let best = range, who = null;
  for (const o of others) {
    if (o === car || o.ghost) continue;
    // a parked car is only an obstacle if it is properly in the way: otherwise squeeze past
    const hc = car.wid / 2 + (o.parked ? -0.25 : extra);
    const dx = o.x - car.x, dz = o.z - car.z;
    if (dx * dx + dz * dz > (range + 8) * (range + 8)) continue;
    const cs = o.corners();
    const loc = cs.map((p) => car.toLocal(p.x, p.z));
    for (let i = 0; i < 4; i++) {
      const a = loc[i], b = loc[(i + 1) % 4];
      // clip segment a-b to |r| <= hc
      let t0 = 0, t1 = 1;
      const dr = b.r - a.r;
      if (Math.abs(dr) < 1e-6) { if (Math.abs(a.r) > hc) continue; }
      else {
        let ta = (-hc - a.r) / dr, tb = (hc - a.r) / dr;
        if (ta > tb) [ta, tb] = [tb, ta];
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) continue;
      }
      const f0 = a.f + (b.f - a.f) * t0, f1 = a.f + (b.f - a.f) * t1;
      if (Math.max(f0, f1) < 0.5) continue;
      const gap = Math.max(0, Math.min(f0, f1) - car.len / 2);
      if (gap < best) { best = gap; who = o; }
    }
  }
  return { gap: best, other: who };
}

/** Poses for reversing from the car's current position into a bay (kinematic S-curve). */
export function planReversePark(car, bay, err, shuffles) {
  const c = Math.cos(bay.h), s = Math.sin(bay.h), sgn = -bay.side;
  const toWorld = (u, w, a) => ({ x: bay.x + c * u - s * w * sgn, z: bay.z + s * u + c * w * sgn, h: bay.h + a * sgn });
  const dx = car.x - bay.x, dz = car.z - bay.z;
  const us = dx * c + dz * s, ws = (-dx * s + dz * c) * sgn, as = wrapAngle(car.h - bay.h) * sgn;
  const slack = Math.max(0, (bay.len - car.len) / 2 - 0.1);
  const uf = clamp(err.along, -slack, slack);
  const wf = -bay.wid / 2 + 0.26 + car.wid / 2 + err.lat;
  const du = Math.max(2.5, us - uf), dw = ws - wf;
  const poses = [];
  let clearIdx = -1;
  const n = Math.ceil(Math.hypot(du, dw) / 0.1);
  const overshoot = shuffles > 0 ? 2.2 : 1;   // messy first attempt, corrected by shuffling
  for (let i = 0; i <= n; i++) {
    const t = i / n, S = t * t * (3 - 2 * t), dS = 6 * t * (1 - t);
    const a = Math.atan2(dw * dS, du) + as * (1 - t) * (1 - t) + err.angle * overshoot * t * t;
    poses.push({ ...toWorld(us - du * t, ws - dw * S, a), v: -1, steer: (t < 0.5 ? 1 : -1) * 0.5 * -sgn });
    if (clearIdx < 0 && dw * (1 - S) < 0.5) clearIdx = i;   // from here on we are tucked in enough for traffic to pass
  }
  let ang = err.angle * overshoot, u = us - du;
  for (let k = 0; k < shuffles; k++) {
    const next = k === shuffles - 1 ? err.angle : ang * 0.6;
    const fwd = Math.min(0.9, slack + 0.25);
    for (let i = 1; i <= 9; i++) poses.push({ ...toWorld(u + fwd * (i / 9), wf, lerp(ang, (ang + next) / 2, i / 9)), v: 1, steer: 0.2 });
    for (let i = 1; i <= 9; i++) poses.push({ ...toWorld(u + fwd * (1 - i / 9), wf, lerp((ang + next) / 2, next, i / 9)), v: -1, steer: -0.2 });
    ang = next;
  }
  poses.clearIdx = clearIdx < 0 ? n : clearIdx;
  return poses;
}

export class Driver {
  constructor(game, car, persona) {
    this.game = game; this.car = car; this.p = persona;
    car.aiSteer = true;
    this.state = 'idle';       // idle | cruise | seek | manoeuvre | pullout | parked | out
    this.route = null; this.r = 0;
    this.target = null; this.stopR = null;
    this.reactT = 0; this.thinkT = 0; this.waitT = 0; this.blockT = 0; this.ignoreT = 0;
    this.blacklist = new Map();
    this.poses = null; this.pi = 0;
    this.indicator = 0;       // -1 left, +1 right, 0 off
    this.hazards = false;
    this.stallT = game.rng.range(6, 14);
    this.lorryT = 3; this.lorryStop = 0;
    this.honkCooldown = 0;
    this.speedScale = 1;
    this.fooled = null;       // driveway the gullible learner is heading for
  }

  // ---- route helpers -------------------------------------------------
  loc() {
    if (!this.route) return this.game.track.locate(this.car.x, this.car.z);
    const sp = this.route.edgeAt(this.r);
    const es = sp.e0 + clamp((this.r - sp.r0) / Math.max(1e-6, sp.r1 - sp.r0), 0, 1) * (sp.e1 - sp.e0);
    return { edge: this.game.track.edges[sp.edgeId], s: es };
  }
  wander(fromEdge, es) {
    const track = this.game.track, rng = this.game.rng;
    const ids = [fromEdge];
    let len = track.edges[fromEdge].len - es;
    while (len < 700) {
      const e = track.edges[ids[ids.length - 1]];
      if (!e.next.length) break;
      // at the bottom of Church Street: up Bernard Street, or round via Catherine Street
      const nx = e.next.length > 1 ? (rng.chance(this.p.lorry ? 1 : 0.55) ? e.next[0] : e.next[1]) : e.next[0];
      ids.push(nx); len += track.edges[nx].len;
    }
    this.setRoute(track.buildRoute(ids, es));
  }
  setRoute(route) { this.route = route; this.r = 0; this.projectOnRoute(true); }
  projectOnRoute(wide = false) {
    const pr = this.route.path.project(this.car.x, this.car.z, wide ? 0 : Math.max(0, this.r - 3), wide ? 25 : this.r + 12);
    this.r = pr.s;
  }

  startCruise() {
    const l = this.game.track.locate(this.car.x, this.car.z);
    this.car.kinematic = false;
    this.state = 'cruise'; this.target = null; this.stopR = null; this.indicator = 0; this.hazards = false;
    this.wander(l.edge.id, l.s);
  }
  onMusicStop() {
    if (this.p.civilian || this.state === 'out') return;
    this.reactT = this.game.rng.range(this.p.reaction[0], this.p.reaction[1]);
    this.state = 'react';
  }
  eliminate() { this.state = 'out'; this.car.kinematic = false; this.hazards = true; this.indicator = 0; this.releaseClaim(); }
  releaseClaim() { if (this.target && this.target.claimedBy === this) this.target.claimedBy = null; }

  // ---- bay choice ------------------------------------------------------
  chooseBay() {
    const g = this.game, track = g.track, me = this.loc();
    let best = null, bestCost = Infinity;
    for (const bay of g.bays) {
      if (bay.state !== 'open' || bay.occupant) continue;
      if (bay.claimedBy && bay.claimedBy !== this) continue;
      if ((this.blacklist.get(bay.id) || 0) > g.time) continue;
      const dt = this.distTo(bay, me);
      if (!dt) continue;
      const { dist, rt, passed } = dt;
      const eta = dist / (this.p.seek * this.speedScale);
      let cost = eta;
      // someone else will get there first?
      for (const d of g.drivers) {
        if (d === this || d.target !== bay || d.state === 'out') continue;
        const dEta = d.etaTo(bay);
        if (dEta < eta) cost += (1 - this.p.aggression) * 14 + 3;
      }
      const pd = Math.hypot(g.player.car.x - bay.x, g.player.car.z - bay.z);
      if (!g.playerComp.parked && pd < dist * 0.6 && pd < 40) cost += (1 - this.p.aggression) * 8;
      if (bay.stub) cost += 6;
      if (bay.kind === 'tight') cost += (1 - this.p.skill) * 6;
      if (bay.perfect) cost -= 18;
      if (bay === this.assigned) cost -= 9 - this.p.aggression * 4;   // the sensible choice; pushy drivers are less sensible
      cost += g.rng.range(0, 1.5 + (1 - this.p.skill) * 3);
      if (bay === this.target) cost -= 2.5;   // hysteresis
      if (cost < bestCost) { bestCost = cost; best = { bay, rt, passed }; }
    }
    return best;
  }
  /** Driving distance to the point where we would pull up for `bay` (looping round the block if we've passed it). */
  distTo(bay, me = this.loc()) {
    const track = this.game.track;
    const startS = bay.s + START_AHEAD;
    const passed = me.edge.id === bay.edgeId && me.s > startS - 0.5;
    const rt = passed ? track.routeEdgesTo(me.edge.id, me.edge.len - 0.01, bay.edgeId, startS) : track.routeEdgesTo(me.edge.id, me.s, bay.edgeId, startS);
    if (!rt) return null;
    return { dist: rt.dist + (passed ? me.edge.len - me.s : 0), rt, passed };
  }
  /** Speed we can realistically make: no overtaking on these streets, so the car in front sets the pace. */
  effSpeed() {
    let v = this.p.seek * this.speedScale;
    const ob = obstacleAhead(this.car, this.game.world.cars, 28, 0.6).other;
    if (ob) { const d = this.game.drivers.find((q) => q.car === ob); if (d && !d.p.civilian) v = Math.min(v, d.p.seek * d.speedScale + 0.5); else if (d) v = Math.min(v, 5.5); }
    return v;
  }
  etaTo(bay) {
    const d = this.distTo(bay);
    return d ? d.dist / this.effSpeed() : Infinity;
  }
  /** Rough time to be parked in `bay`, including the manoeuvre itself. */
  parkEta(bay) { return this.etaTo(bay) + 4.5 + (1 - this.p.skill) * 6 + this.p.reaction[1]; }
  retarget() {
    const g = this.game;
    this.releaseClaim();
    const pick = this.chooseBay();
    if (!pick) {
      // nothing to aim for: keep circulating and hope
      if (this.target || !this.route || this.route.path.length - this.r < 60) { const l = this.loc(); this.target = null; this.stopR = null; this.wander(l.edge.id, l.s); }
      this.target = null; this.stopR = null; this.indicator = 0;
      return;
    }
    if (pick.bay === this.target && this.stopR !== null) return;
    const me = this.loc();
    this.target = pick.bay;
    const edges = pick.rt.edges.slice();
    if (pick.passed && edges[0] !== me.edge.id) edges.unshift(me.edge.id);
    const route = g.track.buildRoute(edges, me.s);
    const after = edges.length > 1 && edges[0] === pick.bay.edgeId ? route.spans[0].r1 + 1 : -1;
    this.setRoute(route);
    this.stopR = route.rOf(pick.bay.edgeId, pick.bay.s + START_AHEAD, after);
    if (this.stopR === null) { this.target = null; }
  }

  // ---- per-frame --------------------------------------------------------
  update(dt) {
    const g = this.game, car = this.car, p = this.p;
    this.honkCooldown -= dt;
    car.ctrl.handbrake = false;
    switch (this.state) {
      case 'idle': case 'parked':
        car.ctrl.throttle = 0; car.ctrl.steer = 0; car.ctrl.handbrake = true; return;
      case 'out':
        car.ctrl.throttle = 0; car.ctrl.handbrake = true; return;
      case 'manoeuvre': case 'pullout':
        this.updateManoeuvre(dt); return;
      case 'react':
        this.reactT -= dt;
        if (this.reactT <= 0) {
          this.state = 'seek'; this.thinkT = 0;
          if (p.gullible && g.fakeTip && g.rng.chance(0.8)) this.fooled = { drive: g.fakeTip, until: g.time + 9 };
        }
        this.drive(dt, p.cruise * 0.6);
        return;
      case 'cruise': {
        let speed = p.cruise * this.speedScale;
        if (p.anticipates && g.phase === 'music') speed = this.anticipate(speed);
        if (p.stalls) {
          this.stallT -= dt;
          if (this.stallT <= 0 && Math.abs(car.v) > 2 && g.phase === 'music') { car.stalled = 2.2; car.v *= 0.2; this.stallT = g.rng.range(11, 20); this.hazards = true; g.emit('stall', { driver: this }); }
          if (car.stalled <= 0 && this.hazards && this.state === 'cruise') this.hazards = false;
        }
        if (p.lorry) {
          this.lorryT -= dt;
          if (g.phase === 'music') {
            if (this.lorryT <= 0) { this.lorryStop = 3.2; this.lorryT = g.rng.range(7, 10); }
          } else if (!this.lorryDone) { this.lorryDone = true; this.lorryStop = 5.5; }   // one last bin, right when it matters
          if (this.lorryStop > 0) { this.lorryStop -= dt; speed = 0; } else if (g.phase !== 'music') speed = 7.5;
          this.hazards = true;
        }
        if (this.route.path.length - this.r < 160) {
          const l = this.loc();
          if (l.s > 18 && l.s < l.edge.len - 18) this.wander(l.edge.id, l.s);
        }
        this.drive(dt, speed);
        return;
      }
      case 'seek': {
        this.thinkT -= dt;
        const t = this.target;
        if (this.fooled) {
          if (g.time > this.fooled.until) { this.fooled = null; g.emit('fooled', { driver: this, street: g.fakeTip.street }); }
          else { this.seekFake(dt); return; }
        }
        if (!t || t.state !== 'open' || t.occupant || (t.claimedBy && t.claimedBy !== this) || this.thinkT <= 0) {
          if (this.thinkT <= 0 || !t || t.state !== 'open' || t.occupant || (t.claimedBy && t.claimedBy !== this)) {
            const wasNear = t && this.stopR !== null && this.stopR - this.r < 9;
            // don't dither once we're right on top of our space
            if (!(wasNear && t.state === 'open' && !t.occupant && (!t.claimedBy || t.claimedBy === this))) this.retarget();
          }
          this.thinkT = 0.8 + g.rng.range(0, 0.5);
        }
        if (!this.target) { this.drive(dt, p.seek * 0.8); return; }
        const remain = this.stopR - this.r;
        if (remain < 14 && !this.target.claimedBy) this.target.claimedBy = this;
        if (remain < 30) this.indicator = p.indicates ? this.target.side : 0;
        let speed = Math.min(p.seek * this.speedScale, Math.sqrt(Math.max(0, 2 * 2.6 * (remain - 0.15))) + 0.25);
        if (remain < -1.5) { this.blacklist.set(this.target.id, g.time + 20); this.retarget(); return; }   // overshot it
        this.drive(dt, speed, remain < 12);
        if (remain < 0.5 && Math.abs(car.v) < 0.4) this.beginManoeuvre();
        return;
      }
    }
  }

  /** The Local Expert dawdles where she knows spaces are, and hurries through the bits with none. */
  anticipate(speed) {
    const me = this.loc();
    let near = Infinity;
    for (const bay of this.game.bays) {
      if (bay.state !== 'coned' || bay.edgeId !== me.edge.id) continue;
      const d = bay.s + START_AHEAD - me.s;
      if (d > 2 && d < near) near = d;
    }
    return near < 38 ? 4.2 : speed * 1.15;
  }

  seekFake(dt) {
    // the learner believes the DJ and heads for somebody's driveway
    const g = this.game, d = this.fooled.drive, me = this.loc();
    if (me.edge.id !== d.edgeId || me.s > d.s + 4) { this.fooled = null; return; }
    const remain = d.s + 3 - me.s;
    this.indicator = d.side;
    this.drive(dt, Math.min(this.p.seek, Math.sqrt(Math.max(0, 2 * 2.5 * remain))));
    if (remain < 0.6 && Math.abs(this.car.v) < 0.3) this.fooled.until = Math.min(this.fooled.until, g.time + 2.5);
  }

  /** Follow the route at up to `maxSpeed`, slowing for bends and whatever is in front. */
  drive(dt, maxSpeed, precise = false) {
    const g = this.game, car = this.car, p = this.p, path = this.route.path;
    this.projectOnRoute();
    // pure pursuit
    const look = clamp(2.6 + Math.abs(car.v) * 0.55, 3, 7.5);
    const tp = path.at(Math.min(path.length, this.r + look));
    const l = car.toLocal(tp.x, tp.z);
    const ld2 = l.f * l.f + l.r * l.r || 1;
    const delta = Math.atan((2 * l.r / ld2) * car.spec.wheelbase);
    car.ctrl.steer = clamp(delta / car.spec.maxSteer, -1, 1);

    // slow for bends ahead
    let speed = maxSpeed;
    const h0 = path.at(this.r).h;
    for (const d of [5, 10, 16]) {
      const dh = Math.abs(wrapAngle(path.at(Math.min(path.length, this.r + d)).h - h0));
      const k = dh / d;
      if (k > 0.01) speed = Math.min(speed, Math.max(3.0, Math.sqrt(2.4 / k)));
    }
    // give way where Bernard Street joins Grange Street
    const me = this.loc();
    car.loc = { edgeId: me.edge.id, s: me.s };
    if (me.edge.id === 'bernard' && me.s > me.edge.len - 26 && me.s < me.edge.len - 8) {
      for (const o of g.world.cars) {
        if (o === car || !o.loc || o.ghost) continue;
        if (o.loc.edgeId === 'grangeAB' && o.loc.s > 75 - 26 && Math.abs(o.v) > 0.5) {
          speed = Math.min(speed, Math.sqrt(Math.max(0, 2 * 2.5 * (me.edge.len - 9.5 - me.s))));
        }
      }
    }
    // keep the road clear behind someone who is about to reverse into a space
    for (const d of g.drivers) {
      if (d === this || !d.target || (d.state !== 'seek' && d.state !== 'manoeuvre')) continue;
      if (d.state === 'seek' && (d.stopR === null || d.stopR - d.r > 22)) continue;
      if (d.state === 'manoeuvre' && d.pi >= d.poses.clearIdx) continue;
      const b = d.target;
      if (b.edgeId !== me.edge.id || !d.car.loc || d.car.loc.edgeId !== me.edge.id || d.car.loc.s < me.s) continue;
      const line = b.s - b.slotLen / 2 - 1.2 - car.len / 2;
      if (me.s < line + 1.5 && this.target !== b) {
        if (this.target && this.target.edgeId === me.edge.id && this.target.s + START_AHEAD < line) continue;
        speed = Math.min(speed, Math.sqrt(Math.max(0, 2 * 2.5 * (line - me.s))));
      }
    }
    // traffic in front
    const range = 7 + car.v * car.v / 5;
    const ob = obstacleAhead(car, g.world.cars, range, precise ? 0.15 : 0.3);
    let blocked = false;
    if (ob.other && this.ignoreT <= 0) {
      const o = ob.other;
      const along = Math.max(0, o.v * (o.fx * car.fx + o.fz * car.fz));
      const lim = along * 0.9 + Math.sqrt(Math.max(0, 2 * 3.2 * (ob.gap - p.gap)));
      if (lim < speed) { speed = lim; blocked = lim < 0.6; }
      if (blocked) {
        this.waitT += dt;
        const isPlayer = o === g.player.car;
        if (this.waitT > 2.2 && this.honkCooldown <= 0 && (isPlayer || g.rng.chance(0.3))) { this.honkCooldown = 3.5; g.emit('honk', { driver: this, atPlayer: isPlayer }); }
        // patience runs out: creep forward (and shove, if you are that sort of driver)
        const patience = isPlayer ? (p.pushy ? 3.5 : 7) : (o.kinematic ? 99 : 3 + (car.id % 5) * 0.9);
        if (this.waitT > patience) { this.ignoreT = 1.6; this.waitT = 0; if (isPlayer) g.emit('shove', { driver: this }); }
      }
    }
    if (!blocked) this.waitT = Math.max(0, this.waitT - dt * 2);
    if (this.ignoreT > 0) { this.ignoreT -= dt; speed = Math.min(speed, 1.6); }

    const dv = speed - car.v;
    if (speed < 0.15 && Math.abs(car.v) < 0.6) { car.ctrl.throttle = 0; car.ctrl.handbrake = true; }
    else car.ctrl.throttle = clamp(dv * (dv < 0 ? 1.2 : 0.9), -1, 1);
    if (car.v < -0.05 && speed >= 0) car.ctrl.throttle = 0.6;
  }

  // ---- parking ----------------------------------------------------------
  beginManoeuvre() {
    const g = this.game, p = this.p, bay = this.target;
    if (!bay || bay.state !== 'open' || bay.occupant || (bay.claimedBy && bay.claimedBy !== this)) { this.retarget(); return; }
    bay.claimedBy = this;
    const bad = 1 - p.skill;
    const err = {
      angle: g.rng.range(-1, 1) * bad * 0.3,
      lat: g.rng.range(0.1, 1) * bad * 0.5,
      along: g.rng.range(-1, 1) * bad * 0.7,
    };
    const shuffles = g.rng.int(p.shuffles[0], p.shuffles[1]);
    this.poses = planReversePark(this.car, bay, err, shuffles);
    this.pi = 0; this.blockT = 0; this.pauseT = 0.25 + bad * 0.8;
    this.state = 'manoeuvre';
    this.car.kinematic = true; this.car.v = 0;
    this.indicator = p.indicates ? bay.side : 0;
    g.emit('manoeuvre', { driver: this, bay });
  }

  updateManoeuvre(dt) {
    const g = this.game, car = this.car;
    if (this.pauseT > 0) { this.pauseT -= dt; car.v = 0; return; }
    const out = this.state === 'pullout';
    const bay = this.target;
    if (!out && bay && bay.occupant && bay.occupant !== this) { this.abortManoeuvre(); return; }
    const step = (out ? 2.6 : this.p.manSpeed) * dt / 0.1;
    const ni = Math.min(this.poses.length - 1, this.pi + step);
    const pose = this.poses[Math.round(ni)];
    // would this move hit a moving car?
    const probe = { x: pose.x, z: pose.z, h: pose.h, len: car.len + 0.1, wid: car.wid + 0.1 };
    let hit = null;
    for (const o of g.world.cars) {
      if (o === car || o.ghost) continue;
      if (obbOverlap(probe, o)) { hit = o; break; }
    }
    if (hit) {
      car.v = 0; this.blockT += dt;
      if (this.honkCooldown <= 0) { this.honkCooldown = 3; g.emit('honk', { driver: this, atPlayer: hit === g.player.car }); }
      const progress = this.pi / this.poses.length;
      if (!out && this.blockT > 3.2 && progress < 0.55) this.abortManoeuvre();
      if (out && this.blockT > 1.2 && this.pi > 0) {
        // pulling out into a queue: tuck back in so they can get past, then try again
        this.pi = Math.max(0, this.pi - step);
        const q = this.poses[Math.round(this.pi)];
        if (![...g.world.cars].some((o) => o !== car && !o.ghost && obbOverlap({ x: q.x, z: q.z, h: q.h, len: car.len, wid: car.wid }, o))) { car.x = q.x; car.z = q.z; car.h = q.h; }
        if (this.pi === 0) { this.blockT = 0; this.pauseT = 1.5; }
      }
      return;
    }
    if (out && this.pi === 0) {
      // only pull out into a decent gap
      for (const o of g.world.cars) {
        if (o === car || o.ghost || o.kinematic) continue;
        const lo = car.toLocal(o.x, o.z);
        if (lo.f > -13 && lo.f < 7 && Math.abs(lo.r) < 5 && Math.abs(o.v) > 0.3) { this.pauseT = 0.4; return; }
      }
    }
    const prev = this.poses[Math.round(this.pi)];
    this.pi = ni;
    car.x = pose.x; car.z = pose.z; car.h = pose.h;
    car.v = pose.v * (out ? 2.6 : this.p.manSpeed); car.steer = pose.steer; car.wheelSpin += car.v * dt / 0.31;
    if (prev.v !== pose.v) this.pauseT = 0.35;
    if (this.pi >= this.poses.length - 1) {
      car.v = 0; car.steer = 0;
      if (out) { this.finishPullout(); return; }
      this.state = 'parked'; this.indicator = 0; car.parked = true;
      g.aiParked(this, bay, evaluatePark(car, bay));
    }
  }

  abortManoeuvre() {
    // drive back out the way we came and look elsewhere
    const g = this.game;
    const i = Math.round(this.pi);
    this.poses = this.poses.slice(0, i + 1).reverse().map((q) => ({ ...q, v: 1 }));
    this.pi = 0; this.blockT = 0;
    this.state = 'pullout';
    if (this.target) { this.blacklist.set(this.target.id, g.time + 12); this.releaseClaim(); }
    this.afterPullout = 'seek';
    g.emit('aborted', { driver: this, bay: this.target });
  }
  finishPullout() {
    const l = this.game.track.locate(this.car.x, this.car.z);
    this.car.kinematic = false;
    this.target = null; this.stopR = null; this.indicator = 0;
    this.wander(l.edge.id, l.s);
    this.state = this.afterPullout || 'cruise';
    this.thinkT = 0;
  }
  /** Leave a bay we are sitting in (delivery van). */
  pullOutOf(bay) {
    const car = this.car;
    const e = this.game.track.edges[bay.edgeId];
    const lane = e.path.offsetAt(bay.s + START_AHEAD + 1, e.laneOff);
    const ghostStart = { x: lane.x, z: lane.z, h: lane.h, len: car.len, wid: car.wid };
    const poses = planReversePark(ghostStart, bay, { angle: 0, lat: 0.05, along: 0 }, 0).reverse().map((q) => ({ ...q, v: 1 }));
    this.poses = poses; this.pi = 0; this.blockT = 0; this.pauseT = 0.6;
    this.state = 'pullout'; this.afterPullout = 'cruise'; this.target = null;
    this.indicator = -bay.side;
  }
}
