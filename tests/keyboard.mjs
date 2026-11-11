// "Keyboard human" driving scripts: only digital inputs (left / right / none, gas / brake / none), sampled at
// human rates with a reaction delay. Used by sim.test.mjs to check the handling is drivable with a keyboard or
// touch buttons, and that every kind of bay can be parked in. Run directly for a handling report:
//   node tests/keyboard.mjs
import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
import { evaluatePark } from '../src/physics.js';
import { wrapAngle, clamp } from '../src/util.js';

/** A Game in free-drive mode with no other moving traffic: just the player, the residents and the bays. */
export function quietGame(seed = 3) {
  const track = buildTrack(map);
  const game = new Game(track, { seed, autoContinue: true });
  game.start('free');
  for (const x of game.extras) game.world.removeCar(x.car);
  game.drivers = []; game.extras = [];
  return game;
}

/** Discrete human: decisions at ~15 Hz, acting on what they saw ~0.12 s ago. */
class Human {
  constructor(game) { this.game = game; this.steer = 0; this.pedal = 0; this.hand = false; this.t = 0; this.queue = []; }
  apply(dt, decide) {
    this.t += dt;
    if (this.t >= 1 / 15) { this.t = 0; this.queue.push({ due: this.game.time + 0.12, d: decide() }); }
    while (this.queue.length && this.queue[0].due <= this.game.time) { const { d } = this.queue.shift(); this.steer = d.steer; this.pedal = d.pedal; this.hand = !!d.hand; }
    const c = this.game.player.car.ctrl;
    c.steer = this.steer; c.throttle = this.pedal; c.handbrake = this.hand;
  }
}

/** Drive laps of the small loop with digital steering. Returns kerb hits, contact time and lap time. */
export function keyboardLap(opts = {}) {
  const { laps = 1, cruise = 11.5, seed = 3 } = opts;
  const game = quietGame(seed), track = game.track, pc = game.player.car;
  const ids = []; for (let i = 0; i < laps; i++) ids.push('grangeBC', 'church', 'bernard');
  ids.push('grangeBC');
  const route = track.buildRoute(ids, 20);
  const P = route.path;
  const start = P.at(0);
  pc.place(start.x, start.z, start.h);
  let kerbHits = 0, contactT = 0, carHits = 0, r = 0, t = 0, maxLat = 0;
  game.world.onImpact = (car, other, speed, kind) => { if (car === pc && kind === 'kerb') kerbHits++; if (car === pc && kind !== 'kerb') { carHits++; if (opts.debug) { const l = track.locate(pc.x, pc.z); const lo = other ? track.locate(other.x, other.z) : null; console.log('HIT', other && other.len.toFixed(2), other && other.wid.toFixed(2), lo && lo.edge.id, lo && lo.s.toFixed(1), lo && lo.lat.toFixed(2), l.edge.id, l.s.toFixed(1), l.lat.toFixed(2), speed.toFixed(2), 'v', pc.v.toFixed(2)); } } };
  const human = new Human(game);
  let lastSteer = 0, lastH = pc.h;
  const end = P.length - 30;
  while (r < end && t < 400) {
    if (opts.debug && Math.round(t * 60) % 30 === 0) console.log(t.toFixed(1), r.toFixed(1), pc.v.toFixed(2), pc.ctrl.steer, pc.ctrl.throttle, P.project(pc.x, pc.z, Math.max(0, r - 5), r + 10).dist.toFixed(2));
    const dt = 1 / 60;
    human.apply(dt, () => {
      const pr = P.project(pc.x, pc.z, Math.max(0, r - 5), r + 20); r = pr.s;
      const look = 4.5 + Math.abs(pc.v) * 0.55;
      const tp = P.at(r + look), l = pc.toLocal(tp.x, tp.z);
      // a person watches the car swing round and lets go early (yaw anticipation)
      const yaw = wrapAngle(pc.h - lastH) * 15; lastH = pc.h;
      const err = Math.atan2(l.r, l.f) - yaw * 0.22;
      const db = lastSteer ? 0.02 : 0.05;     // hysteresis: hold the key until roughly lined up
      const steer = err > db ? 1 : err < -db ? -1 : 0; lastSteer = steer;
      // brake for bends a human can see coming
      let target = cruise;
      const h0 = P.at(r).h;
      for (const d of [8, 14, 20]) { const dh = Math.abs(wrapAngle(P.at(r + d).h - h0)); if (dh > 0.45) target = Math.min(target, 6.5 + d * 0.12); }
      const pedal = pc.v < target - 0.4 ? 1 : pc.v > target + 1.6 ? -1 : 0;
      return { steer, pedal };
    });
    game.update(dt); t += dt;
    let touching = false;
    for (const p of pc.corners()) if (track.sdf.sample(p.x, p.z) < 0.03) touching = true;
    if (touching) contactT += dt;
    maxLat = Math.max(maxLat, Math.abs(P.project(pc.x, pc.z, Math.max(0, r - 5), r + 10).dist));
  }
  return { kerbHits, carHits, contactT, lapTime: t, dist: P.length, finished: r >= end, maxLat };
}

/** Geometry helpers in a bay's frame: u along the bay (+ = travel direction), w away from the kerb. */
function bayFrame(bay) {
  const c = Math.cos(bay.h), s = Math.sin(bay.h), sgn = -bay.side;
  return {
    toBay: (x, z) => { const dx = x - bay.x, dz = z - bay.z; return { u: dx * c + dz * s, w: (-dx * s + dz * c) * sgn }; },
    toWorld: (u, w) => ({ x: bay.x + c * u - s * w * sgn, z: bay.z + s * u + c * w * sgn }),
    ang: (h) => wrapAngle(h - bay.h) * sgn,    // + = nose pointing away from the kerb
    sgn,
  };
}

/**
 * Park the player in `bay` using only digital inputs.
 * mode 'reverse': classic reverse parallel park (pull up past it, full lock in, straighten, opposite lock).
 * mode 'nose': drive in forwards, then shuffle back to straighten up.
 * Returns { parked, ev, time, kerbHits, carHits, steps }.
 */
export function scriptedPark(game, bay, mode = 'reverse', opts = {}) {
  const pc = game.player.car, track = game.track, F = bayFrame(bay);
  const e = track.edges[bay.edgeId];
  const lane = e.laneOff;
  const startS = bay.s - (opts.runUp ?? 26);
  const p0 = e.path.offsetAt(startS, lane);
  pc.kinematic = false; pc.parked = false; pc.place(p0.x, p0.z, p0.h);
  let parked = null, kerbHits = 0, carHits = 0;
  const offImpact = game.world.onImpact;
  game.world.onImpact = (car, other, speed, kind) => { if (car === pc && speed > 1.1) { if (kind === 'kerb') kerbHits++; else carHits++; } offImpact && offImpact(car, other, speed, kind); };
  const listener = (type, d) => { if ((type === 'freePark' || type === 'parked') && !parked) parked = d; };
  game.on(listener);
  const human = new Human(game);
  const wb = pc.spec.wheelbase;
  const R = wb / Math.tan(pc.spec.maxSteer * 0.97);       // full-lock turning radius of the rear axle at parking speed
  const half = wb / 2;
  const rear = () => { const b = F.toBay(pc.x - Math.cos(pc.h) * half, pc.z - Math.sin(pc.h) * half); return b; };
  const wTarget = -bay.wid / 2 + 0.28 + pc.wid / 2;       // car centre-line, measured from the bay centre
  let phase = 'approach', t = 0, steps = 0;
  const towardsKerb = -F.sgn;    // steer sign that turns the nose towards the kerb when going forwards
  // where to stop before reversing: rear axle this far ahead of the bay centre
  const pullUp = Math.min(bay.len / 2 + 2.6, 5.4);
  while (!parked && t < 60) {
    const dt = 1 / 60;
    human.apply(dt, () => {
      const b = F.toBay(pc.x, pc.z), a = F.ang(pc.h), ra = rear();
      const v = pc.v;
      const stopAt = (dist, vmax = 3.5) => { const want = Math.min(vmax, Math.sqrt(Math.max(0, 2 * 3 * dist))); const av = Math.abs(v); return av < want - 0.3 ? 1 : av > want + 0.3 ? -1 : 0; };
      if (mode === 'reverse') {
        if (phase === 'approach') {
          // drive along the lane until the rear axle is level with the pull-up point
          const d = pullUp - ra.u;
          if (d < 0.25 && Math.abs(v) < 0.25) { phase = 'in'; steps++; return { steer: 0, pedal: 0 }; }
          const lat = e.path.project(pc.x, pc.z).lat, steerErr = (lane - lat) * 0.35 - wrapAngle(pc.h - e.path.at(e.path.project(pc.x, pc.z).s).h);
          const g = stopAt(d, 6);
          return { steer: steerErr > 0.03 ? 1 : steerErr < -0.03 ? -1 : 0, pedal: d < 0.25 ? (v > 0.05 ? -1 : 0) : g };
        }
        // reversing: v < 0. Full lock towards the kerb swings the tail in (steer = towardsKerb reversed)
        const backPedal = (want) => { const av = -v; return av < want - 0.25 ? -1 : av > want + 0.25 ? 1 : 0; };
        if (phase === 'in') {
          // turn in until the remaining full-lock arc back to straight lands us on the target line
          const finalW = ra.w - R * (1 - Math.cos(a));
          if (a > 0.15 && finalW <= wTarget + 0.05) phase = 'counter';
          if (a > 0.95) phase = 'straight';
          return { steer: towardsKerb, pedal: backPedal(1.4) };
        }
        if (phase === 'straight') {
          const finalW = ra.w - R * (1 - Math.cos(a));
          if (finalW <= wTarget + 0.05) phase = 'counter';
          return { steer: 0, pedal: backPedal(1.4) };
        }
        if (phase === 'counter') {
          if (a < 0.03) { phase = 'settle'; steps++; }
          // don't reverse into the car behind
          if (b.u < -bay.len / 2 + pc.len / 2 - 0.3) { phase = 'fwdfix'; steps++; return { steer: 0, pedal: v < -0.1 ? 1 : 0 }; }
          return { steer: -towardsKerb, pedal: backPedal(1.2) };
        }
        if (phase === 'fwdfix') {
          // shuffle forwards, still steering to straighten
          if (a < 0.04 || b.u > bay.len / 2 - pc.len / 2 + 0.2) { phase = 'settle'; steps++; }
          return { steer: a > 0.04 ? towardsKerb : 0, pedal: v < 0.9 ? 1 : 0 };
        }
      } else {
        // nose in: run along just outside the parked cars, steer in, then straighten, then fix the angle backwards
        if (phase === 'approach') {
          const wHold = bay.wid / 2 + pc.wid / 2 + 0.55;
          const ps = e.path.project(pc.x, pc.z).s;
          const steerErr = -((wHold - b.w) * 0.3 * -1) - wrapAngle(pc.h - e.path.at(ps).h) * 0;
          const herr = -a;            // + = need to turn nose away from... (in bay frame)
          const want = clamp((wHold - b.w) * 0.25, -0.25, 0.25) + herr;   // desired change of a
          // positive "want" = nose away from the kerb = steer away from it
          let st = want > 0.03 ? -towardsKerb : want < -0.03 ? towardsKerb : 0;
          if (b.u < -bay.len / 2 - 9) {   // still on the way: just follow the lane round any bend
            const pr = e.path.project(pc.x, pc.z), se = (lane - pr.lat) * 0.35 - wrapAngle(pc.h - e.path.at(pr.s).h);
            st = se > 0.03 ? 1 : se < -0.03 ? -1 : 0;
          }
          const dW = b.w - wTarget, th = Math.acos(clamp(1 - dW / (2 * R), -1, 1));
          const turnU = -wb / 2 - 2 * R * Math.sin(th) + (opts.turnIn ?? 0.6);
          if (ra.u > turnU) phase = 'in';
          void steerErr;
          return { steer: st, pedal: stopAt(30, 2.6) };
        }
        if (phase === 'in') {
          if (a < -0.62 || ra.w - R * (1 - Math.cos(a)) < wTarget + 0.15) phase = 'out';
          return { steer: towardsKerb, pedal: stopAt(10, 2.2) };
        }
        if (phase === 'out') {
          if (a > -0.04) { phase = 'settle'; steps++; }
          const front = b.u + pc.len / 2;
          if (front > bay.len / 2 + 0.25) { phase = 'backfix'; steps++; return { steer: 0, pedal: v > 0.1 ? -1 : 0 }; }
          return { steer: -towardsKerb, pedal: stopAt(10, 1.8) };
        }
        if (phase === 'backfix') {
          // reverse with the wheel turned so the tail swings out and the nose comes in line
          if (Math.abs(a) < 0.05 || b.u < -bay.len / 2 + pc.len / 2 - 0.2) { phase = 'settle'; steps++; }
          return { steer: a < 0 ? towardsKerb : -towardsKerb, pedal: v > -0.9 ? -1 : 0 };
        }
      }
      if (phase === 'settle') {
        // centre up along the bay with small forward/back nudges, then stop
        const du = -b.u;
        if (Math.abs(du) > 0.6) phase = du > 0 ? 'nudgeF' : 'nudgeB';
        return { steer: 0, pedal: Math.abs(v) > 0.05 ? (v > 0 ? -1 : 1) : 0 };
      }
      if (phase === 'nudgeF' || phase === 'nudgeB') {
        const du = -F.toBay(pc.x, pc.z).u;
        if (Math.abs(du) < 0.3) { phase = 'settle'; steps++; }
        return { steer: 0, pedal: phase === 'nudgeF' ? (v < 0.7 ? 1 : 0) : (v > -0.7 ? -1 : 0) };
      }
      return { steer: 0, pedal: 0 };
    });
    game.update(1 / 60); t += 1 / 60;
  }
  game.listeners.splice(game.listeners.indexOf(listener), 1);
  game.world.onImpact = offImpact;
  return { parked: !!parked, rating: parked && parked.rating, ev: evaluatePark(pc, bay), time: t, kerbHits, carHits, steps, phase };
}

/** Bays (one of each kind if possible) on the circuit, opened for free practice. */
export function practiceBays(game) {
  const out = [];
  for (const b of game.bays) {
    if (b.stub) continue;
    for (const o of game.bays) if (o !== b && o.state === 'open' && Math.abs(o.s - b.s) < 12 && o.edgeId === b.edgeId) game.setBayState(o, 'coned');
    out.push(b);
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  for (const cruise of [9, 11.5, 13.5]) {
    const r = keyboardLap({ cruise, laps: 2 });
    console.log(`keyboard lap @${cruise} m/s: kerb hits ${r.kerbHits}, car hits ${r.carHits}, kerb contact ${r.contactT.toFixed(1)} s, ${r.lapTime.toFixed(1)} s for ${r.dist.toFixed(0)} m, worst off-line ${r.maxLat.toFixed(2)} m${r.finished ? '' : ' (DNF)'}`);
  }
  const res = {};
  for (const mode of ['reverse', 'nose']) {
    for (const b0 of buildTrack(map).bays) {
      if (b0.stub) continue;
      const game = quietGame(5);
      const bay = game.bays[b0.id];
      for (const o of game.bays) if (o !== bay && o.state === 'open') game.setBayState(o, Math.abs(o.s - bay.s) < 14 && o.edgeId === bay.edgeId ? 'closed' : o.state);
      game.setBayState(bay, 'open');
      const r = scriptedPark(game, bay, mode);
      const k = mode + ':' + bay.kind;
      (res[k] ||= []).push(r.parked ? (r.rating.key + '/' + r.time.toFixed(0) + 's') : 'FAIL(' + r.phase + ',' + (r.ev.issue || '') + ' oh' + r.ev.overhang.toFixed(2) + ' a' + r.ev.angle.toFixed(2) + ' u' + r.ev.along.toFixed(1) + ' #' + bay.id + ')');
    }
  }
  for (const k in res) console.log(k, res[k].join(' '));
}
