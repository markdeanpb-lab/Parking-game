// Game rules: the musical-chairs competition, rounds, eliminations, scoring and random events.
// Pure logic. Talks to the outside world (DJ, audio, UI, renderer) only through emit().

import { makeRng, clamp, wrapAngle } from './util.js';
import { Car, PhysicsWorld, makeBox, evaluatePark, ratingFor, obbOverlap } from './physics.js';
import { Driver, PERSONAS, RIVAL_ORDER, obstacleAhead } from './ai.js';
import { CAR_TYPES } from './cartypes.js';

export const MODES = {
  classic: { key: 'classic', label: 'Musical Chairs', rivals: RIVAL_ORDER, traffic: 0, countdownK: 1, music: [13, 22], eventsFrom: 2, aiBoost: 1 },
  rush: { key: 'rush', label: 'Rush Hour', rivals: RIVAL_ORDER, traffic: 2, countdownK: 0.8, music: [8, 15], eventsFrom: 1, aiBoost: 1.06 },
  free: { key: 'free', label: 'Free Drive', rivals: [], traffic: 2, countdownK: 1, music: [0, 0], eventsFrom: 99, aiBoost: 1 },
};
export const CHAMPIONSHIP = [
  { key: 'champ', heat: 1, label: 'Heat 1: The Qualifier', rivals: ['major', 'poppy', 'sandra', 'mum'], traffic: 0, countdownK: 1.05, music: [13, 21], eventsFrom: 2, aiBoost: 0.96 },
  { key: 'champ', heat: 2, label: 'Heat 2: The Semi-Final', rivals: ['major', 'poppy', 'sandra', 'mum', 'dazza'], traffic: 1, countdownK: 0.92, music: [10, 18], eventsFrom: 1, aiBoost: 1.04 },
  { key: 'champ', heat: 3, label: 'Heat 3: The Grand Final', rivals: RIVAL_ORDER, traffic: 2, countdownK: 0.82, music: [8, 16], eventsFrom: 1, aiBoost: 1.12 },
];
const EVENTS = ['binLorry', 'permit', 'schoolRun', 'fakeSpace', 'deliveryVan', 'perfectSpot'];

export class Game {
  constructor(track, opts = {}) {
    this.track = track;
    this.rng = makeRng(opts.seed ?? (Date.now() & 0xffffff));
    this.world = new PhysicsWorld(track);
    this.listeners = [];
    this.bays = track.bays;
    this.driveways = track.driveways;
    this.autoplay = !!opts.autoplay;       // AI drives the player's car (tests / attract)
    this.autoContinue = !!opts.autoContinue;
    this.phase = 'title';
    this.time = 0;
    this.drivers = [];
    this.competitors = [];
    this.extras = [];                      // non-competing vehicles (traffic, lorry, van)
    this.residentBoxes = new Map();        // bay id -> static box
    this.timeScale = 1;

    for (const pc of track.parked) {
      const spec = CAR_TYPES[pc.type];
      this.world.addStatic(makeBox(pc.x, pc.z, pc.h, spec.len, spec.wid));
    }
    for (const b of track.barriers) this.world.addStatic(makeBox(b.x, b.z, b.h, b.len, b.wid));
    for (const bay of this.bays) this.setBayState(bay, 'closed');

    this.player = { car: new Car('hatch', { isPlayer: true }) };
    this.player.car.ghost = true;
    this.playerComp = { parked: false };
    this.world.onImpact = (car, other, speed, kind) => this.onImpact(car, other, speed, kind);
  }

  on(fn) { this.listeners.push(fn); }
  emit(type, data = {}) { for (const fn of this.listeners) fn(type, data); }

  // ------------------------------------------------------------- bays
  /**
   * Bay states: closed (a resident's car is in it), coned (suspended: may be released when the music stops),
   * open (in play), permit (surprise residents-only), blocked (delivery van sitting in it).
   */
  setBayState(bay, state) {
    const had = this.residentBoxes.get(bay.id);
    if (had) { this.world.removeStatic(had); this.residentBoxes.delete(bay.id); }
    let box = null;
    if (state === 'closed') {
      const spec = CAR_TYPES[bay.resident.type];
      box = makeBox(bay.resident.x, bay.resident.z, bay.resident.h, spec.len, spec.wid);
    } else if (state === 'coned') {
      box = makeBox(bay.x, bay.z, bay.h, bay.len - 0.5, 1.5);
    }
    if (box) { this.residentBoxes.set(bay.id, box); this.world.addStatic(box); }
    bay.state = state;
    if (state === 'closed' || state === 'coned') { bay.occupant = null; bay.claimedBy = null; bay.perfect = false; }
  }
  openBays() { return this.bays.filter((b) => b.state === 'open' || b.state === 'blocked'); }
  freeBays() { return this.bays.filter((b) => (b.state === 'open' || b.state === 'blocked') && !b.occupant); }

  /**
   * Set up the kerbside for a round: most candidate bays are coned off ("PARKING SUSPENDED"),
   * a few have a resident's car in them (so the layout shifts from round to round).
   * When the music stops, some of the coned bays are released.
   */
  coneBays() {
    // (bays in the two dead-end stubs of Grange Street stay out of the competition: nobody could get back out)
    const closed = new Set(this.rng.shuffle(this.bays.filter((b) => !b.stub && !(this.event === 'perfectSpot' && b.kind === 'generous'))).slice(0, 5));
    for (const b of this.bays) this.setBayState(b, closed.has(b) || b.stub ? 'closed' : 'coned');
  }

  /** How far the player has to drive to reach a bay (going with the flow; no credit for reversing back up the road). */
  playerDistTo(bay, l, withFlow) {
    const pc = this.player.car;
    if (!withFlow) return Math.hypot(bay.x - pc.x, bay.z - pc.z) * 1.6 + 25;      // facing the wrong way: turn round first
    const from = l.edge.id === bay.edgeId && bay.s < l.s + 7 && bay.s > l.s - 3 ? l.s + 0.01 : l.s;   // level with it already = effectively passed
    if (l.edge.id === bay.edgeId && bay.s <= from) {
      const loop = this.track.routeEdgesTo(l.edge.id, l.edge.len - 0.01, bay.edgeId, bay.s);
      return loop ? loop.dist + (l.edge.len - l.s) : Infinity;
    }
    return this.track.pathDistance(l.edge.id, l.s, bay.edgeId, bay.s);
  }

  /**
   * Decide which coned bays to release when the music stops, so the scramble is fair and frantic:
   * every rival gets a space they can reach in time, and the player gets a genuine duel for one of them.
   */
  pickRelease(n) {
    const cands = this.bays.filter((b) => b.state === 'coned');
    const rivals = this.drivers.filter((d) => !d.p.civilian && d.state !== 'out' && d.comp && !d.comp.isPlayer);
    const pc = this.player.car, l = this.track.locate(pc.x, pc.z), pp = l.edge.path.at(l.s);
    const withFlow = Math.cos(pc.h) * pp.tx + Math.sin(pc.h) * pp.tz > -0.2;
    const pd = new Map(cands.map((b) => [b, this.playerDistTo(b, l, withFlow)]));
    const eta = new Map(rivals.map((d) => [d, new Map(cands.map((b) => [b, d.parkEta(b)]))]));
    // Nobody can overtake on these streets, so whoever is first in the queue behind a space gets it.
    // So spaces are handed out in queue order: the car with the shortest drive to any coned bay gets that
    // bay, then the next car, and so on, the player included. One space too many is chosen, then the
    // last rival's is withheld: that rival is the odd one out unless the player fluffs it, in which case
    // they (or whoever is behind the player) inherit the player's space.
    const dist = new Map(rivals.map((d) => [d, new Map(cands.map((b) => { const q = d.distTo(b); return [b, q ? q.dist : Infinity]; }))]));
    const PLAYER = 'player';
    const dOf = (who, b) => (who === PLAYER ? pd.get(b) + 6.6 : dist.get(who).get(b));
    const usable = cands.filter((b) => pd.get(b) >= 30);
    const todo = new Set([PLAYER, ...rivals]);
    const taken = new Set();
    const order = [];
    while (todo.size && taken.size < usable.length) {
      let pick = null;
      for (const who of todo) {
        for (const b of usable) {
          if (taken.has(b)) continue;
          let d = dOf(who, b);
          if (this.event === 'perfectSpot' && who === PLAYER && b.kind !== 'generous') d += 40;
          if (!pick || d < pick.d) pick = { who, b, d };
        }
      }
      if (!pick || !Number.isFinite(pick.d)) break;
      todo.delete(pick.who); taken.add(pick.b); order.push(pick);
    }
    const mine = order.find((o) => o.who === PLAYER);
    if (!mine) return null;
    const theirs = order.filter((o) => o.who !== PLAYER);
    while (theirs.length > n - 1) {
      // One rival goes without. Make it somebody BEHIND the player in the queue for the player's space
      // (ideally right on their bumper): anyone ahead would simply drive up and take it.
      let drop = -1, gap = Infinity;
      theirs.forEach((o, i) => { const g2 = dist.get(o.who).get(mine.b) - (pd.get(mine.b) + 6.6); if (g2 > 8 && g2 < gap) { gap = g2; drop = i; } });
      if (drop < 0) drop = theirs.length - 1;
      theirs.splice(drop, 1);
    }
    const bays = [mine.b, ...theirs.map((o) => o.b)];
    let makespan = 0;
    for (const o of theirs) makespan = Math.max(makespan, eta.get(o.who).get(o.b));
    const queueAhead = theirs.filter((o) => pd.get(o.b) < pd.get(mine.b) && o.b.edgeId === mine.b.edgeId).length;
    const myD = pd.get(mine.b);
    const pEta = myD / 8 + 6.5 + queueAhead * 5;
    const fair = bays.length === n && myD <= 220 && makespan < 34;
    return { bays, makespan, pd: myD, pEta, duel: { bay: mine.b }, fair };
  }

  // ------------------------------------------------------------- setup
  start(modeKey, opts = {}) {
    this.cleanup();
    if (modeKey === 'champ') { this.champIndex = opts.heat ?? 0; this.mode = CHAMPIONSHIP[this.champIndex]; }
    else { this.mode = MODES[modeKey]; this.champIndex = null; }
    if (!opts.keepScore) { this.score = 0; this.streak = 0; }
    this.round = 0;
    this.eventPool = this.rng.shuffle(EVENTS);
    this.stats = { kerbs: 0, bumps: 0, perfects: 0, wrongWays: 0 };

    const pc = this.player.car;
    pc.ghost = false; pc.kinematic = false; pc.v = 0;
    this.world.addCar(pc);
    this.competitors = [];
    this.playerComp = this.makeComp({ key: 'player', name: 'You', title: 'Our Plucky Contestant', carName: 'yellow hatchback', colour: 0xffc928 }, pc, true);
    this.competitors.push(this.playerComp);
    this.drivers = [];
    if (this.autoplay) { this.playerComp.driver = new Driver(this, pc, PERSONAS.auto); this.drivers.push(this.playerComp.driver); }
    for (const key of this.mode.rivals) {
      const p = PERSONAS[key];
      const car = new Car(p.car, { persona: key, colour: p.colour });
      this.world.addCar(car);
      const d = new Driver(this, car, p);
      d.speedScale = this.mode.aiBoost;
      this.drivers.push(d);
      const comp = this.makeComp(p, car, false); comp.driver = d; d.comp = comp;
      this.competitors.push(comp);
    }
    if (this.playerComp.driver) this.playerComp.driver.comp = this.playerComp;
    this.totalRounds = this.competitors.length - 1;
    this.emit('gameStart', { mode: this.mode, competitors: this.competitors });
    if (this.mode.key === 'free') this.startFree(); else this.startRound();
  }

  makeComp(p, car, isPlayer) {
    return { key: p.key, name: p.name, title: p.title, carName: p.carName, colour: p.colour, persona: p, car, isPlayer, alive: true, parked: false, points: 0, roundPoints: 0, parkTime: null, rating: null, bay: null, outRound: null };
  }

  cleanup() {
    for (const c of [...this.world.cars]) this.world.removeCar(c);
    for (const x of this.extras) this.emit('carRemoved', { car: x.car });
    this.extras = []; this.drivers = []; this.competitors = [];
    this.fakeTip = null; this.timeScale = 1;
    for (const b of this.bays) this.setBayState(b, 'closed');
  }

  alive() { return this.competitors.filter((c) => c.alive); }

  placeCars(cars) {
    const pts = this.rng.shuffle(this.track.spawnPoints);
    const used = [];
    for (const car of cars) {
      for (const minSep of [46, 34, 22, 14]) {
        const p = pts.find((q) => !used.includes(q) && used.every((u) => Math.hypot(u.x - q.x, u.z - q.z) > minSep) &&
          this.bays.every((b) => b.state === 'closed' || Math.hypot(b.x - q.x, b.z - q.z) > 9));
        if (p) { used.push(p); car.place(p.x, p.z, p.h); car.loc = { edgeId: p.edgeId, s: p.s }; break; }
      }
    }
  }

  startRound() {
    this.round++;
    // clear out last round's leftovers
    for (const x of this.extras) { this.world.removeCar(x.car); this.drivers.splice(this.drivers.indexOf(x.driver), 1); this.emit('carRemoved', { car: x.car }); }
    this.extras = [];
    for (const c of this.competitors) {
      if (!c.alive && !c.car.ghost) { c.car.ghost = true; this.world.removeCar(c.car); this.emit('carRemoved', { car: c.car }); }
      c.parked = false; c.parkTime = null; c.rating = null; c.bay = null; c.roundPoints = 0;
    }
    const alive = this.alive();
    const nBays = alive.length - 1;
    this.final = alive.length === 2;
    this.event = this.round >= this.mode.eventsFrom ? this.eventPool[(this.round - this.mode.eventsFrom) % this.eventPool.length] : null;

    this.nBays = nBays;
    this.coneBays();

    for (const c of alive) { c.car.kinematic = false; c.car.ghost = false; c.car.stalled = 0; c.car.parked = false; }
    this.placeCars(alive.map((c) => c.car));
    for (const d of this.drivers) { d.state = 'idle'; d.target = null; d.stopR = null; d.route = null; d.indicator = 0; d.hazards = false; d.fooled = null; d.blacklist.clear(); }
    for (let i = 0; i < this.mode.traffic; i++) this.spawnTraffic('traffic');

    this.phase = 'intro'; this.phaseT = 0; this.timeScale = 1;
    this.fakeTip = null; this.eventDone = false; this.eventT = 0; this.van = null; this.lastPick = null;
    this.loiter = 0; this.loiterPenalty = false; this.gearChanges = 0; this.lastGear = 0; this.struggleSaid = 0;
    this.stopHold = 0; this.illegalHold = 0; this.wrongWayT = 0; this.speedT = 0; this.cooldowns = {};
    this.trail = [];
    this.emit('roundIntro', { round: this.round, total: this.totalRounds, cars: alive.length, bays: nBays, coned: this.bays.filter((b) => b.state === 'coned').length, final: this.final, event: this.event, mode: this.mode });
  }

  startFree() {
    this.round = 1; this.final = false; this.event = null;
    for (const b of this.bays) this.setBayState(b, b.id % 2 === 0 || b.kind !== 'normal' ? 'open' : b.id % 3 === 0 ? 'coned' : 'closed');
    const sp = this.track.spawnPoints.find((p) => p.edgeId === 'bernard' && p.s > 60) || this.track.spawnPoints[0];
    this.player.car.place(sp.x, sp.z, sp.h);
    for (let i = 0; i < this.mode.traffic; i++) this.spawnTraffic('traffic');
    for (const x of this.extras) x.driver.startCruise();
    this.phase = 'free'; this.phaseT = 0; this.stopHold = 0; this.illegalHold = 0; this.cooldowns = {}; this.wrongWayT = 0; this.speedT = 0;
    this.gearChanges = 0; this.lastGear = 0;
    this.emit('freeStart', {});
  }

  spawnTraffic(personaKey, at = null, colour = null) {
    const p = PERSONAS[personaKey];
    const car = new Car(p.car, { persona: personaKey, colour: colour ?? this.rng.pick([0x40464f, 0x8a8f96, 0x1f2a3a, 0xdadde0, 0x5b2a2a]) });
    let sp = at;
    if (!sp) {
      const pts = this.rng.shuffle(this.track.spawnPoints);
      sp = pts.find((q) => this.world.cars.every((c) => Math.hypot(c.x - q.x, c.z - q.z) > 16)) || pts[0];
    }
    car.place(sp.x, sp.z, sp.h); car.loc = { edgeId: sp.edgeId, s: sp.s };
    this.world.addCar(car);
    const d = new Driver(this, car, p);
    this.drivers.push(d);
    const x = { car, driver: d, kind: personaKey };
    this.extras.push(x);
    this.emit('carAdded', { car, persona: p });
    return x;
  }

  // ------------------------------------------------------------- frame
  update(dtReal) {
    const dt = dtReal * this.timeScale;
    this.time += dt;
    if (this.phase === 'title' || this.phase === 'paused') return;
    this.phaseT += dt;
    const pc = this.player.car;

    switch (this.phase) {
      case 'intro':
        pc.ctrl.handbrake = true; pc.ctrl.throttle = 0;
        if (this.phaseT > (this.autoContinue ? 0.5 : 5.0)) this.beginMusic();
        break;
      case 'music': this.updateMusic(dt); break;
      case 'park': this.updatePark(dt); break;
      case 'roundEnd':
        if (!this.playerComp.driver) { pc.ctrl.handbrake = true; pc.ctrl.throttle = 0; }
        if (this.autoContinue && this.phaseT > 1) this.continue();
        break;
      case 'free': this.updateFree(dt); break;
      default: break;
    }
    if (this.phase === 'gameover' || this.phase === 'victory') { pc.ctrl.handbrake = true; pc.ctrl.throttle = 0; }

    for (const d of this.drivers) d.update(dt);
    this.world.step(dt);
    this.playerLoc = this.track.locate(pc.x, pc.z);
    if (!this.playerComp.driver) pc.loc = { edgeId: this.playerLoc.edge.id, s: this.playerLoc.s };
    this.checkCushions();
  }

  beginMusic() {
    this.phase = 'music'; this.phaseT = 0;
    const [a, b] = this.mode.music;
    this.stopAt = this.rng.range(a, b) - (this.final ? 2 : 0);
    this.banterT = 5;
    for (const d of this.drivers) if (d.state !== 'out') d.startCruise();
    this.emit('musicStart', { round: this.round, final: this.final });
  }

  /** Driving distance from the player to the nearest free bay. */
  playerBayDistance() {
    const pc = this.player.car, l = this.track.locate(pc.x, pc.z);
    const p = l.edge.path.at(l.s);
    const withFlow = Math.cos(pc.h) * p.tx + Math.sin(pc.h) * p.tz > -0.2;
    let best = Infinity, bestBay = null;
    for (const b of this.freeBays()) {
      const d = this.playerDistTo(b, l, withFlow);
      if (d < best) { best = d; bestBay = b; }
    }
    return { dist: best, bay: bestBay };
  }

  updateMusic(dt) {
    const pc = this.player.car;
    this.runEventsDuringMusic(dt);
    this.checkDrivingRules(dt, true);

    // "keep moving" rule: no hovering beside a space
    if (!this.playerComp.driver) {
      this.trail.push({ t: this.time, x: pc.x, z: pc.z });
      while (this.trail.length && this.time - this.trail[0].t > 5) this.trail.shift();
      const moved = Math.hypot(pc.x - this.trail[0].x, pc.z - this.trail[0].z);
      const blockedAhead = obstacleAhead(pc, this.world.cars, 9).other;
      const hovering = this.phaseT > 5 && moved < 9 && !blockedAhead && pc.stalled <= 0;
      this.loiter = clamp(this.loiter + (hovering ? dt / 4 : -dt / 2), 0, 1);
      if (hovering && this.loiter > 0.45 && this.cool('loiterWarn', 30)) this.emit('loiter', { level: 1 });
      if (this.loiter >= 1 && !this.loiterPenalty) { this.loiterPenalty = true; this.penalise('loiter', 50); this.emit('loiter', { level: 2 }); }
    }

    this.banterT -= dt;
    if (this.banterT <= 0) { this.banterT = 7.5; this.emit('banter', this.banterContext()); }

    if (this.phaseT >= this.stopAt) {
      // wait (briefly) for a moment when the spaces can be reached and the player has a fighting chance
      this.fairT = (this.fairT || 0) - dt;
      if (this.fairT <= 0) {
        this.fairT = 0.35;
        const pick = this.pickRelease(this.nBays);
        const fair = pick && pick.fair;
        if (pick && (fair || this.phaseT > this.stopAt + 14)) this.stopMusic(pick);
      }
    }
  }

  banterContext() {
    const pc = this.player.car, loc = this.track.locate(pc.x, pc.z);
    // who is holding everyone up?
    let queue = null;
    for (const d of this.drivers) {
      if (d.p.civilian && !d.p.lorry) continue;
      const behind = this.world.cars.filter((o) => o !== d.car && !o.ghost && (() => { const l = d.car.toLocal(o.x, o.z); return l.f < -2 && l.f > -45 && Math.abs(l.r) < 4 && Math.abs(o.v) < d.car.v + 1.5; })());
      if (behind.length >= 2 && (!queue || behind.length > queue.count)) queue = { leader: d.p, count: behind.length, hasPlayer: behind.includes(pc) };
    }
    return { street: loc.edge.name, mph: Math.abs(pc.v) * 2.237, queue, round: this.round, final: this.final, cars: this.alive().length, bayStreets: [...new Set(this.freeBays().map((b) => b.street))] };
  }

  stopMusic(pick) {
    this.phase = 'park'; this.phaseT = 0; this.lastPick = pick;
    for (const b of pick.bays) this.setBayState(b, 'open');
    const d = Number.isFinite(pick.pd) ? pick.pd : 150;
    this.countdown = clamp(Math.max(pick.makespan * 1.3 + 10, pick.pEta * 1.5 + 8), 20, 55) * (0.5 + 0.5 * this.mode.countdownK);
    this.lastSpace = false;
    if (this.extras.some((x) => x.kind === 'lorry')) this.countdown += 10;
    else if (this.extras.length) this.countdown += 5;
    if (this.event === 'deliveryVan') this.countdown += 10;
    this.timeLeft = this.countdown; this.lastTick = Math.ceil(this.timeLeft) + 1;
    this.parkOrder = 0; this.endHold = 0; this.grace = 0; this.whistled = false;
    if (this.loiterPenalty && !this.playerComp.driver) { this.player.car.stalled = 2.2; this.emit('falseStart', {}); }
    const near = this.playerBayDistance().bay;
    let fake = null;
    if (this.event === 'fakeSpace' && this.driveways.length) {
      fake = this.rng.pick(this.driveways); this.fakeTip = fake;
    }
    if (this.event === 'perfectSpot') {
      const g = this.bays.find((b) => b.state === 'open' && b.kind === 'generous') || this.rng.pick(this.bays.filter((b) => b.state === 'open'));
      if (g) { g.perfect = true; this.emit('event', { kind: 'perfectSpot', street: g.street, bay: g }); }
    }
    if (this.event === 'deliveryVan') this.spawnVan();
    for (const dr of this.drivers) dr.onMusicStop();
    this.emit('musicStop', { street: near ? near.street : null, fakeStreet: fake ? fake.street : null, countdown: this.countdown, final: this.final, bays: this.freeBays().length, cars: this.alive().length });
    if (fake) this.emit('event', { kind: 'fakeSpace', street: fake.street, drive: fake });
  }

  // ------------------------------------------------------------- random events
  runEventsDuringMusic(dt) {
    if (this.eventDone || !this.event) return;
    if (this.event === 'binLorry' && this.phaseT > 3) {
      this.eventDone = true;
      // put it somewhere it will be properly in the way: a one-lane street with nobody right behind
      const spots = this.rng.shuffle(this.track.spawnPoints.filter((p) => ['church', 'bernard', 'dalton', 'grangeBC'].includes(p.edgeId)));
      const sp = spots.find((q) => this.world.cars.every((c) => Math.hypot(c.x - q.x, c.z - q.z) > 24) && this.openBays().every((b) => Math.hypot(b.x - q.x, b.z - q.z) > 14));
      if (sp) {
        const x = this.spawnTraffic('lorry', sp, 0x2e7d4a);
        x.driver.startCruise();
        this.emit('event', { kind: 'binLorry', street: this.track.edges[sp.edgeId].name, car: x.car });
      }
    }
    if (this.event === 'schoolRun' && this.phaseT > 2) {
      this.eventDone = true;
      const spots = this.rng.shuffle(this.track.spawnPoints).filter((q) => this.world.cars.every((c) => Math.hypot(c.x - q.x, c.z - q.z) > 18));
      const cols = [0xe8e8ea, 0x15181d, 0x6d7279];
      let n = 0, street = null;
      for (const sp of spots) {
        if (n >= 3) break;
        if (this.extras.some((x) => Math.hypot(x.car.x - sp.x, x.car.z - sp.z) < 18)) continue;
        const x = this.spawnTraffic('traffic', sp, cols[n]); x.driver.startCruise();
        street = street || this.track.edges[sp.edgeId].name; n++;
      }
      this.emit('event', { kind: 'schoolRun', street, count: n });
    }
  }

  spawnVan() {
    // a delivery van is sitting in the space nearest the player
    const target = this.playerBayDistance().bay;
    if (!target) return;
    const car = new Car('van', { persona: 'traffic', colour: 0xf4f4f2, livery: 'delivery' });
    const d = new Driver(this, car, { ...PERSONAS.traffic, car: 'van', carName: 'delivery van', cruise: 9 });
    d.pullOutOf(target);
    const p0 = d.poses[0];
    car.place(p0.x, p0.z, p0.h); car.kinematic = true;
    if (this.world.cars.some((o) => !o.ghost && obbOverlap(car, o))) return;   // somebody is already in there
    d.state = 'parked'; d.hazards = true;
    this.world.addCar(car); this.drivers.push(d);
    const x = { car, driver: d, kind: 'van', bay: target, leaveAt: this.rng.range(8, 11) };
    this.extras.push(x); this.van = x;
    target.state = 'blocked';
    this.emit('carAdded', { car, persona: d.p });
    this.emit('event', { kind: 'deliveryVan', street: target.street, bay: target });
  }

  runEventsDuringPark() {
    if (this.event === 'permit' && !this.eventDone && this.phaseT > 2.2) {
      this.eventDone = true;
      // the space the player is closest to is suddenly residents-only; another opens elsewhere
      const pc = this.player.car;
      const cands = this.bays.filter((b) => b.state === 'open' && !b.occupant && !(b.claimedBy && b.claimedBy.state === 'manoeuvre'));
      cands.sort((a, b) => Math.hypot(a.x - pc.x, a.z - pc.z) - Math.hypot(b.x - pc.x, b.z - pc.z));
      const victim = cands[0];
      // the replacement is the next coned bay the player can be first to (a nasty surprise, not a death sentence)
      const l = this.track.locate(pc.x, pc.z), pp = l.edge.path.at(l.s);
      const withFlow = Math.cos(pc.h) * pp.tx + Math.sin(pc.h) * pp.tz > -0.2;
      const rivals = this.drivers.filter((d) => d.comp && !d.comp.isPlayer && (d.state === 'seek' || d.state === 'react'));
      let repl = null, replD = Infinity;
      for (const b of this.bays) {
        if (b.state !== 'coned') continue;
        const d0 = this.playerDistTo(b, l, withFlow);
        if (d0 < 25) continue;
        const queue = rivals.filter((d) => { const q = d.distTo(b); return q && q.dist < d0 + 8; }).length;
        const score = d0 + queue * 150;
        if (score < replD) { replD = score; repl = b; }
      }
      const replEta = replD / 7 + 12;
      if (victim && repl) {
        if (victim.claimedBy) victim.claimedBy = null;
        this.setBayState(victim, 'permit');
        this.setBayState(repl, 'open');
        this.timeLeft = Math.max(this.timeLeft, Math.min(replEta, 45));
        this.emit('event', { kind: 'permit', street: victim.street, bay: victim, newStreet: repl.street, newBay: repl });
      }
    }
    if (this.van && !this.van.leaving && this.van.bay.state === 'blocked' && this.phaseT > this.van.leaveAt) {
      const v = this.van;
      v.driver.state = 'pullout'; v.driver.hazards = false;
      v.leaving = true;
    }
    if (this.van && this.van.leaving && this.van.driver.blockT > 1 && this.cool('vanBlocked', 6)) {
      const pc = this.player.car;
      if (Math.hypot(pc.x - this.van.car.x, pc.z - this.van.car.z) < 14) this.emit('vanBlocked', { street: this.van.bay.street });
    }
    if (this.van && this.van.leaving && this.van.driver.state !== 'pullout') {
      this.van.bay.state = 'open'; this.emit('event', { kind: 'vanGone', street: this.van.bay.street, bay: this.van.bay });
      this.van = null;
    }
  }

  // ------------------------------------------------------------- park phase
  updatePark(dt) {
    const pc = this.player.car, me = this.playerComp;
    this.timeLeft -= dt;
    this.runEventsDuringPark();
    this.assignT = (this.assignT || 0) - dt;
    if (this.assignT <= 0) { this.assignT = 0.5; this.assignBays(); }
    this.checkDrivingRules(dt, false);
    const t = Math.ceil(this.timeLeft);
    if (t < this.lastTick && t >= 0) { this.lastTick = t; this.emit('tick', { t }); }

    if (!me.parked && me.alive && !me.driver) this.checkPlayerParking(dt);
    this.timeScale = me.parked && !this.autoContinue ? 2.4 : 1;

    const alive = this.alive();
    const unparked = alive.filter((c) => !c.parked);
    const free = this.freeBays().length;
    // "LAST SPACE!": once only one space is left, the clock is cut so the stragglers have to get on with it
    if (free === 1 && unparked.length >= 2 && !this.lastSpace && !this.van && this.phaseT > 4) {
      this.lastSpace = true;
      const need = clamp(this.playerBayDistance().dist / 7 + 9, 12, 30) * this.mode.countdownK;
      if (!me.parked && this.timeLeft > need) { this.timeLeft = need; this.lastTick = Math.ceil(need) + 1; this.emit('lastSpace', { t: Math.ceil(need), street: this.freeBays()[0].street }); }
    }
    if (this.timeLeft <= 0) {
      // "on the whistle": anyone already most of the way into a space is allowed to finish
      this.timeLeft = 0;
      const finishing = free > 0 && this.drivers.some((d) => d.state === 'manoeuvre' && d.comp && d.pi / d.poses.length > 0.4);
      this.grace = (this.grace || 0) + dt;
      if (finishing && this.grace < 4) { if (!this.whistled) { this.whistled = true; this.emit('whistle', {}); } return; }
      this.endRound();
    } else if (unparked.length === 0 || free === 0) {
      this.endHold += dt;
      if (this.endHold > 0.6) this.endRound();
    }
  }

  /**
   * Work out a sensible "who goes where" for the rivals (nearest driver gets first dibs).
   * Drivers lean towards their assignment, which stops the whole pack chasing one space,
   * but aggressive personalities will still try to rob each other (and you).
   */
  assignBays() {
    const bays = this.bays.filter((b) => b.state === 'open' && !b.occupant && !(b.claimedBy && b.claimedBy.state === 'manoeuvre'));
    const pairs = [];
    for (const d of this.drivers) {
      d.assigned = null;
      if (d.p.civilian || !d.comp || d.comp.isPlayer) continue;
      if (d.state !== 'seek' && d.state !== 'react') continue;
      for (const b of bays) { if ((d.blacklist.get(b.id) || 0) > this.time) continue; pairs.push({ d, b, eta: d.etaTo(b) * (b.perfect ? 0.5 : 1) }); }
    }
    pairs.sort((x, y) => x.eta - y.eta);
    const ub = new Set();
    for (const p of pairs) {
      if (p.d.assigned || ub.has(p.b) || !Number.isFinite(p.eta)) continue;
      p.d.assigned = p.b; ub.add(p.b);
    }
  }

  nearestBay(maxDist = 9) {
    const pc = this.player.car;
    let best = null, bd = maxDist;
    for (const b of this.bays) {
      if (b.state === 'closed' || b.state === 'coned') continue;
      const d = Math.hypot(b.x - pc.x, b.z - pc.z);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  }

  checkPlayerParking(dt) {
    const pc = this.player.car;
    const gear = pc.v > 0.5 ? 1 : pc.v < -0.5 ? -1 : 0;
    const bay = this.nearestBay(9);
    if (gear && gear !== this.lastGear) {
      if (this.lastGear && bay) {
        this.gearChanges++;
        const attempts = Math.floor(this.gearChanges / 2) + 1;
        if (attempts >= 4 && attempts > this.struggleSaid && attempts % 2 === 0) { this.struggleSaid = attempts; this.emit('struggle', { count: attempts }); }
      }
      this.lastGear = gear;
    }
    this.guide = null;
    const stopped = Math.abs(pc.v) < 0.18;
    if (bay) {
      const ev = evaluatePark(pc, bay);
      this.guide = { bay, ev, state: bay.state, taken: !!bay.occupant };
      if (ev.valid && stopped && bay.state === 'open' && !bay.occupant) {
        this.stopHold += dt;
        if (this.stopHold > 0.7) { this.playerParked(bay, ev); return; }
      } else this.stopHold = 0;
      if (ev.inBay && stopped && bay.state === 'permit' && this.cool('permitParked', 8)) { this.penalise('permit', 40); this.emit('permitParked', { street: bay.street }); }
      if (ev.inBay && stopped && bay.state === 'blocked' && this.cool('blockedParked', 8)) this.emit('blockedParked', { street: bay.street });
    } else this.stopHold = 0;
    this.checkIllegalStop(dt, stopped, bay);
  }

  checkIllegalStop(dt, stopped, bay) {
    const pc = this.player.car;
    if (!stopped || (bay && this.guide && this.guide.ev.inBay)) { this.illegalHold = 0; return; }
    this.illegalHold += dt;
    if (this.illegalHold < 1.3) return;
    for (const d of this.driveways) {
      if (evaluatePark(pc, d).inBay) {
        if (this.cool('drive' + d.s, 12)) { this.penalise('driveway', 40); this.emit('driveway', { street: d.street }); }
        return;
      }
    }
    const l = this.playerLoc;
    if (l && l.dist < l.edge.hw && Math.abs(l.lat) > l.edge.hw - 1.35 && !obstacleAhead(pc, this.world.cars, 5).other) {
      if (this.cool('yellow', 10)) { this.penalise('yellow', 30); this.emit('yellow', { street: l.edge.name }); }
    }
  }

  playerParked(bay, ev) {
    const me = this.playerComp, pc = this.player.car;
    bay.occupant = me; me.parked = true; me.bay = bay;
    pc.kinematic = true; pc.v = 0; pc.parked = true;
    this.registerPark(me, bay, ev);
    // did we pinch it from under someone's nose?
    for (const d of this.drivers) {
      if (d.target === bay && d.state !== 'out' && !d.p.civilian && Math.hypot(d.car.x - bay.x, d.car.z - bay.z) < 28) {
        this.emit('stole', { rival: d.comp, street: bay.street }); break;
      }
    }
  }

  aiParked(driver, bay, ev) {
    const comp = driver.comp;
    bay.occupant = comp || driver; bay.claimedBy = null;
    if (!comp) return;
    comp.parked = true; comp.bay = bay;
    this.registerPark(comp, bay, ev);
    const me = this.playerComp, pc = this.player.car;
    if (!comp.isPlayer && me.alive && !me.parked) {
      const d = Math.hypot(pc.x - bay.x, pc.z - bay.z);
      const nearest = this.nearestBayBefore === bay || d < 24;
      if (nearest && d < 30) this.emit('robbed', { rival: comp, street: bay.street });
    }
  }

  registerPark(comp, bay, ev) {
    const rating = ratingFor(ev.quality);
    comp.parkTime = this.countdown - this.timeLeft; comp.rating = rating; comp.quality = ev.quality;
    const speedBonus = Math.round(Math.max(0, this.timeLeft) * 4);
    comp.roundPoints = 100 + rating.points + speedBonus + (bay.kind === 'tight' ? 40 : 0);
    comp.points += comp.roundPoints;
    if (comp.isPlayer) {
      this.score += comp.roundPoints;
      if (rating.key === 'perfect') this.stats.perfects++;
    }
    this.parkOrder++;
    this.emit('parked', { comp, bay, ev, rating, isPlayer: comp.isPlayer, timeLeft: this.timeLeft, order: this.parkOrder, speedBonus, points: comp.roundPoints, final: this.final, baysLeft: this.freeBays().length });
  }

  endRound() {
    const alive = this.alive();
    const out = alive.filter((c) => !c.parked);
    for (const c of out) {
      c.alive = false; c.outRound = this.round;
      if (c.driver) c.driver.eliminate();
    }
    for (const d of this.drivers) if (d.p.civilian && d.state !== 'parked') { d.state = 'idle'; }
    const survivors = this.alive();
    const playerOut = out.includes(this.playerComp);
    this.timeScale = 1;
    this.phase = 'roundEnd'; this.phaseT = 0;
    this.pendingResult = playerOut ? 'gameover' : survivors.length <= 1 ? 'victory' : 'next';
    if (this.pendingResult === 'victory') {
      const bonus = 1000 + (this.mode.heat ? this.mode.heat * 250 : 0) + (this.mode.key === 'rush' ? 400 : 0);
      this.score += bonus; this.playerComp.points += bonus; this.streak++;
      this.victoryBonus = bonus;
    }
    const results = [...this.competitors].sort((a, b) => (b.alive - a.alive) || ((b.outRound ?? 99) - (a.outRound ?? 99)) || (b.points - a.points));
    this.emit('roundEnd', { round: this.round, out, playerOut, survivors, results, result: this.pendingResult, final: this.final, focus: out[0] || null });
  }

  /** Player pressed "continue" on the results screen. */
  continue() {
    if (this.phase !== 'roundEnd') return;
    if (this.pendingResult === 'next') { this.startRound(); return; }
    if (this.pendingResult === 'gameover') { this.phase = 'gameover'; this.streak = 0; this.emit('gameover', { round: this.round, score: this.score, mode: this.mode }); return; }
    const champNext = this.champIndex !== null && this.champIndex < CHAMPIONSHIP.length - 1;
    this.phase = 'victory';
    this.emit('victory', { score: this.score, mode: this.mode, bonus: this.victoryBonus, champNext, champion: this.champIndex !== null && !champNext, stats: this.stats });
  }
  nextHeat() { if (this.champIndex !== null && this.champIndex < CHAMPIONSHIP.length - 1) this.start('champ', { heat: this.champIndex + 1, keepScore: true }); }

  // ------------------------------------------------------------- free drive
  updateFree(dt) {
    const pc = this.player.car;
    this.checkDrivingRules(dt, false);
    const bay = this.nearestBay(9);
    this.guide = null;
    const stopped = Math.abs(pc.v) < 0.18;
    if (bay) {
      const ev = evaluatePark(pc, bay);
      this.guide = { bay, ev, state: bay.state, taken: false };
      if (ev.valid && stopped && bay.state === 'open') {
        this.stopHold += dt;
        if (this.stopHold > 0.8 && bay.occupant !== 'free') {
          bay.occupant = 'free';
          const rating = ratingFor(ev.quality);
          this.score += Math.max(0, rating.points);
          this.emit('freePark', { bay, ev, rating });
        }
      } else this.stopHold = 0;
    }
    for (const b of this.bays) if (b.occupant === 'free' && Math.hypot(b.x - pc.x, b.z - pc.z) > 7) b.occupant = null;
    this.checkIllegalStop(dt, stopped, bay);
  }

  // ------------------------------------------------------------- rules + penalties
  cool(key, seconds) {
    if ((this.cooldowns[key] || -1e9) > this.time) return false;
    this.cooldowns[key] = this.time + seconds; return true;
  }
  penalise(reason, pts) {
    this.score -= pts; this.playerComp.points -= pts;
    this.emit('penalty', { reason, pts });
  }

  checkDrivingRules(dt, music) {
    const pc = this.player.car;
    if (this.playerComp.driver) return;
    const l = this.playerLoc || this.track.locate(pc.x, pc.z);
    const p = l.edge.path.at(l.s);
    const along = (Math.cos(pc.h) * p.tx + Math.sin(pc.h) * p.tz) * pc.v;
    if (l.edge.circuit && l.dist < l.edge.hw && along < -2.5 && l.s > 10 && l.s < l.edge.len - 10) {
      this.wrongWayT += dt;
      if (this.wrongWayT > 1.4 && this.cool('wrongWay', 9)) {
        this.stats.wrongWays++;
        if (l.edge.realOneway) this.penalise('wrongWay', 30);
        this.emit('wrongWay', { real: l.edge.realOneway, street: l.edge.name });
      }
    } else this.wrongWayT = Math.max(0, this.wrongWayT - dt);
    if (Math.abs(pc.v) > 12.2) {
      this.speedT += dt;
      if (this.speedT > 1.5 && this.cool('speeding', 25)) this.emit('speeding', { mph: Math.round(Math.abs(pc.v) * 2.237), street: l.edge.name });
    } else this.speedT = 0;
  }

  checkCushions() {
    for (const car of this.world.cars) {
      if (car.ghost || Math.abs(car.v) < 2) continue;
      for (const c of this.track.cushions) {
        const d = Math.hypot(car.x - c.x, car.z - c.z);
        if (d < 1.6 && !(car.lastCushion === c && this.time - car.lastCushionT < 1.5)) {
          car.lastCushion = c; car.lastCushionT = this.time;
          car.bump = Math.max(car.bump, clamp(Math.abs(car.v) / 9, 0.25, 1));
          if (car === this.player.car) { if (Math.abs(car.v) > 8.5) car.v *= 0.82; this.emit('cushion', { speed: Math.abs(car.v) }); }
        }
      }
    }
  }

  onImpact(car, other, speed, kind) {
    const pc = this.player.car;
    const involvesPlayer = car === pc || other === pc;
    if (!involvesPlayer) { if (speed > 2.5 && this.cool('aiCrash', 4)) this.emit('impact', { kind, speed, player: false, x: car.x, z: car.z }); return; }
    if (this.playerComp.driver) return;
    const otherCar = car === pc ? other : car;
    const rivalComp = otherCar ? this.competitors.find((c) => c.car === otherCar) : null;
    if (!this.cool('impact_' + kind, kind === 'kerb' ? 1.2 : 0.9)) return;
    let pts = 0;
    if (kind === 'kerb') { this.stats.kerbs++; if (speed > 2.2) pts = 10; }
    else { this.stats.bumps++; if (speed > 1.5 && car === pc) pts = kind === 'static' ? 25 : 15; }
    if (pts && this.phase !== 'free' && this.phase !== 'roundEnd') this.penalise(kind === 'kerb' ? 'kerb' : 'bump', pts);
    this.emit('impact', { kind, speed, player: true, playerAtFault: car === pc, rival: rivalComp, extra: otherCar && otherCar.persona, x: pc.x, z: pc.z, kerbs: this.stats.kerbs });
  }
}
