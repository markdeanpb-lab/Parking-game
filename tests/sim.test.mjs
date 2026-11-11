// Headless simulation tests of the game logic (no rendering). Run: npm test   (add -v for per-round detail)
import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
import { obbOverlap, evaluatePark } from '../src/physics.js';
import { keyboardLap, quietGame, scriptedPark } from './keyboard.mjs';

const verbose = process.argv.includes('-v');
let failures = 0;
const fail = (msg) => { failures++; console.log('  FAIL:', msg); };
const check = (ok, msg) => { if (!ok) fail(msg); else if (verbose) console.log('  ok:', msg); };

// ---------------------------------------------------------------- track
{
  const track = buildTrack(map);
  console.log(`track: ${Object.keys(track.edges).length} edges, ${track.parked.length} resident cars, ${track.bays.length} candidate bays, ${track.driveways.length} driveways`);
  check(track.bays.length >= 14, 'enough candidate bays');
  for (const r of [['dalton', 'grangeAB', 'grangeBC', 'church', 'bernardS', 'catherine', 'dalton'], ['church', 'bernard', 'grangeBC', 'church']]) {
    const P = track.buildRoute(r).path;
    let min = 9;
    for (let s = 0; s <= P.length; s += 0.5) { const p = P.at(s); min = Math.min(min, track.sdf.sample(p.x, p.z)); }
    check(min > 1.3, `AI lane ${r.join('>')} keeps ${min.toFixed(2)} m from the kerb`);
  }
  for (const p of track.parked) check(track.sdf.sample(p.x, p.z) > 0.6, 'resident car is on the carriageway');
}

// ---------------------------------------------------------------- full competitions on autopilot
function runGame(seed, mode, autoplay) {
  const track = buildTrack(map);
  const game = new Game(track, { seed, autoplay, autoContinue: true });
  const rounds = []; let cur = null, ended = null, offroad = 0, overlaps = 0;
  const events = new Set();
  game.on((type, d) => {
    if (type === 'roundIntro') { cur = { round: d.round, cars: d.cars, bays: d.bays, parked: [], t0: game.time }; rounds.push(cur); }
    if (type === 'musicStop') { cur.music = game.time - cur.t0; cur.countdown = d.countdown; }
    if (type === 'parked') cur.parked.push(`${d.comp.name}@${d.comp.parkTime.toFixed(1)}s/${d.rating.key}`);
    if (type === 'roundEnd') { cur.out = d.out.map((c) => c.name); cur.left = game.timeLeft; }
    if (type === 'event') { cur.ev = (cur.ev || '') + d.kind + ' '; events.add(d.kind); }
    if (type === 'gameover' || type === 'victory') ended = type;
  });
  game.start(mode);
  let steps = 0;
  while (!ended && steps < 60 * 60 * 40) {
    game.update(1 / 60); steps++;
    if (steps % 30 === 0) {
      const cars = game.world.cars.filter((c) => !c.ghost);
      for (const c of cars) {
        if (track.sdf.sample(c.x, c.z) < 0.3) offroad++;
        if (!Number.isFinite(c.x + c.z + c.h + c.v)) { fail('NaN in car state'); ended = 'nan'; }
      }
      for (let i = 0; i < cars.length; i++) for (let j = i + 1; j < cars.length; j++) { const o = obbOverlap(cars[i], cars[j]); if (o && o.depth > 0.4) overlaps++; }
    }
    if (ended === 'victory' && game.mode.key === 'champ' && game.champIndex < 2) { ended = null; game.nextHeat(); }
  }
  return { ended, rounds, time: game.time, offroad, overlaps, events, game };
}

const allEvents = new Set();
const elim = {};
let wins = 0;
for (const [mode, n] of [['classic', 14], ['rush', 5], ['champ', 4]]) {
  for (let i = 0; i < n; i++) {
    const seed = 1000 + i * 77;
    const r = runGame(seed, mode, true);
    r.events.forEach((e) => allEvents.add(e));
    if (r.ended === 'victory') wins++;
    console.log(`${mode} seed ${seed}: ${r.ended} after ${r.rounds.length} rounds (${(r.time / 60).toFixed(1)} min), offroad ${r.offroad}, overlaps ${r.overlaps}`);
    check(!!r.ended && r.ended !== 'nan', 'game reaches an ending');
    check(r.offroad <= 5, 'cars stay on the road');
    check(r.overlaps <= 20, 'cars do not sit inside each other');
    for (const rd of r.rounds) {
      if (verbose) console.log(`   R${rd.round} ${rd.cars}c/${rd.bays}b music ${rd.music?.toFixed(0)}s cd ${rd.countdown?.toFixed(0)}s ev:${rd.ev || '-'} parked [${rd.parked.join(', ')}] out [${rd.out}]`);
      if (!rd.out) continue;
      check(rd.out.length >= 1, `round ${rd.round} eliminates somebody`);
      check(rd.parked.length <= rd.bays, 'never more cars parked than spaces');
      elim[rd.out.length] = (elim[rd.out.length] || 0) + 1;
    }
  }
}
console.log('autopilot victories:', wins);
check(wins > 0, 'a competition can be won all the way to the Golden Parking Permit');
console.log('eliminations per round:', elim, '| random events seen:', [...allEvents].join(', '));
check((elim[1] || 0) > (elim[2] || 0) + (elim[3] || 0), 'most rounds eliminate exactly one driver');
for (const e of ['binLorry', 'permit', 'schoolRun', 'fakeSpace', 'deliveryVan', 'perfectSpot']) check(allEvents.has(e), `event "${e}" occurs`);

// ---------------------------------------------------------------- player-specific rules
{
  const r = runGame(42, 'classic', false);
  console.log('idle player:', r.ended, 'in round', r.rounds.length);
  check(r.ended === 'gameover' && r.rounds.length === 1, 'a player who never moves is eliminated in round 1');
}
{
  // the player has to be properly in the bay, straight, and stopped
  const track = buildTrack(map);
  const game = new Game(track, { seed: 7, autoContinue: true });
  let parked = null;
  game.on((type, d) => { if (type === 'parked' && d.isPlayer) parked = d; });
  game.start('classic');
  while (game.phase !== 'park') game.update(1 / 60);
  const bay = game.bays.find((b) => b.state === 'open' && !b.occupant && !b.claimedBy);
  const pc = game.player.car;
  const settle = (dx, dh) => { pc.kinematic = false; pc.place(bay.x + Math.cos(bay.h) * dx, bay.z + Math.sin(bay.h) * dx, bay.h + dh); for (let i = 0; i < 70 && !parked; i++) { pc.x = bay.x + Math.cos(bay.h) * dx; pc.z = bay.z + Math.sin(bay.h) * dx; pc.h = bay.h + dh; pc.v = 0; game.update(1 / 60); } };
  settle(0, 0.6);
  check(!parked, 'a car at 34 degrees to the kerb is not accepted');
  check(evaluatePark(pc, bay).issue === 'angle', 'parking assist reports the angle problem');
  settle(0, 0.03);
  check(parked && parked.rating.key !== 'awful', 'a straight, centred, stationary car is accepted (' + (parked ? parked.rating.label : 'not parked') + ')');
  check(game.playerComp.parked && bay.occupant === game.playerComp, 'the bay now belongs to the player');
}

// ---------------------------------------------------------------- keyboard handling + parking with digital inputs only
{
  const lap = keyboardLap({ cruise: 11.5, laps: 1 });
  console.log(`keyboard lap: ${lap.kerbHits} kerb hits, ${lap.carHits} scrapes, ${lap.lapTime.toFixed(0)} s, worst ${lap.maxLat.toFixed(2)} m off line`);
  check(lap.finished, 'a keyboard-style driver gets round the loop');
  check(lap.kerbHits <= 3, `keyboard lap hits the kerb rarely (${lap.kerbHits})`);
  const res = { reverse: [0, 0], nose: [0, 0] }, fails = [];
  for (const mode of ['reverse', 'nose']) {
    for (const b0 of buildTrack(map).bays) {
      if (b0.stub) continue;
      const game = quietGame(5), bay = game.bays[b0.id];
      // the hardest case: residents parked right up to both ends of the space
      for (const o of game.bays) if (o !== bay && o.edgeId === bay.edgeId && Math.abs(o.s - bay.s) < 14) game.setBayState(o, 'closed');
      game.setBayState(bay, 'open');
      const r = scriptedPark(game, bay, mode);
      res[mode][1]++; if (r.parked) res[mode][0]++; else fails.push(`${mode}#${bay.id}/${bay.kind}`);
      if (mode === 'reverse') check(r.parked, `keyboard reverse park into ${bay.kind} bay #${bay.id} on ${bay.street}`);
    }
  }
  console.log(`scripted keyboard parking: reverse ${res.reverse[0]}/${res.reverse[1]}, nose-in ${res.nose[0]}/${res.nose[1]}${fails.length ? ' (failed: ' + fails.join(' ') + ')' : ''}`);
  check(res.nose[0] >= res.nose[1] * 0.8, 'nose-in parking works in most bays');
  // an untidy but legal park counts; a precise one scores better
  const g = quietGame(5), bay = g.bays.find((b) => !b.stub && b.state === 'open');
  const pc = g.player.car, c = Math.cos(bay.h), sn = Math.sin(bay.h), sgn = -bay.side;
  const at = (w, dh) => { pc.place(bay.x - sn * w * sgn, bay.z + c * w * sgn, bay.h + dh); return evaluatePark(pc, bay); };
  const sloppy = at(0.6, 0.18), tidy = at(-bay.wid / 2 + 0.25 + pc.wid / 2, 0.02);
  check(sloppy.valid && tidy.valid && tidy.quality > sloppy.quality + 30, `forgiving validity, precise rating (${sloppy.quality}${sloppy.issue || ""} vs ${tidy.quality})`);
}

// ---------------------------------------------------------------- termination and fairness over many seeds
{
  let roundsSeen = 0, badBays = 0, stuckRounds = 0, longest = 0, ends = 0;
  const seen = new Set();
  let told = null, tellMismatch = 0;
  const N = 20;
  for (let i = 0; i < N; i++) {
    const track = buildTrack(map);
    const game = new Game(track, { seed: 7000 + i * 101, autoplay: i % 4 !== 3, autoPersona: 'human', autoContinue: true });
    let ended = false, roundT = 0;
    game.on((type, d) => {
      seen.add(type);
      if (type === 'tell') told = d.bays.map((b) => b.id).sort().join();
      if (type === 'musicStop' && told !== null) { if (told !== game.bays.filter((b) => b.state === 'open' || b.state === 'blocked').map((b) => b.id).sort().join()) tellMismatch++; told = null; }
      if (type === 'gameover' || type === 'victory') ended = true;
      if (type === 'musicStop') { roundsSeen++; if (d.bays !== d.cars - 1) badBays++; }
    });
    game.start(i % 3 === 0 ? 'rush' : 'classic');
    let n = 0;
    while (!ended && n++ < 60 * 60 * 30) {
      const before = game.round;
      game.update(1 / 60); roundT += 1 / 60;
      if (game.round !== before) { longest = Math.max(longest, roundT); roundT = 0; }
      if (roundT > 200 && game.phase !== 'title') { stuckRounds++; break; }
    }
    if (ended) ends++;
  }
  console.log(`termination: ${ends}/${N} games ended, ${roundsSeen} music stops, longest round ${longest.toFixed(0)} s`);
  check(ends === N && stuckRounds === 0, 'every round and every game terminates');
  check(badBays === 0, 'there is always exactly one fewer space than cars when the music stops');
  check(tellMismatch === 0, 'the bays that give a tell are exactly the ones that open');
  for (const e of ['contested', 'rivalRobbed', 'leader', 'lastSpace', 'tell']) check(seen.has(e), `event "${e}" is emitted`);
}
console.log(failures ? `\n${failures} FAILURE(S)` : '\nall simulations passed');
process.exit(failures ? 1 : 0);
