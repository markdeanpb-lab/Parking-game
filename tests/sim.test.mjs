// Headless simulation of complete competitions (no rendering). Run: npm test
import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
import { obbOverlap } from '../src/physics.js';

const verbose = process.argv.includes('-v');
const games = Number(process.argv.find((a) => /^\d+$/.test(a)) || 12);
const modeArg = process.argv.find((a) => ['classic', 'rush', 'champ'].includes(a)) || 'classic';
let failures = 0;
const fail = (msg) => { failures++; console.log('  FAIL:', msg); };

function runGame(seed, mode, autoplay) {
  const track = buildTrack(map);
  const game = new Game(track, { seed, autoplay, autoContinue: true });
  const log = [];
  let rounds = [], cur = null, ended = null, offroad = 0, overlaps = 0, maxKerb = 0;
  game.on((type, d) => {
    if (type === 'roundIntro') { cur = { round: d.round, cars: d.cars, bays: d.bays, event: d.event, parked: [], t0: game.time }; rounds.push(cur); }
    if (type === 'musicStop') { cur.music = game.time - cur.t0; cur.countdown = d.countdown; }
    if (type === 'parked') cur.parked.push(`${d.comp.name}@${d.comp.parkTime.toFixed(1)}s/${d.rating.key}`);
    if (type === 'roundEnd') { cur.out = d.out.map((c) => c.name); cur.dur = game.time - cur.t0; cur.left = game.timeLeft; }
    if (type === 'event') cur.ev = (cur.ev || '') + d.kind + ' ';
    if (type === 'gameover' || type === 'victory') ended = type;
    if (verbose && ['robbed', 'stole', 'aborted', 'fooled', 'stall', 'shove'].includes(type)) log.push(`${game.time.toFixed(1)} ${type} ${d.driver ? d.driver.p.name : d.rival ? d.rival.name : ''}`);
  });
  game.start(mode);
  const dt = 1 / 60;
  let steps = 0;
  while (!ended && steps < 60 * 60 * 30) {
    game.update(dt); steps++;
    if (steps % 30 === 0) {
      for (const c of game.world.cars) {
        if (c.ghost) continue;
        const d = track.sdf.sample(c.x, c.z);
        if (d < 0.3) offroad++;
        if (!Number.isFinite(c.x + c.z + c.h + c.v)) { fail('NaN in car state'); ended = 'nan'; }
      }
      for (let i = 0; i < game.world.cars.length; i++) for (let j = i + 1; j < game.world.cars.length; j++) {
        const a = game.world.cars[i], b = game.world.cars[j];
        if (a.ghost || b.ghost) continue;
        const o = obbOverlap(a, b); if (o && o.depth > 0.35) overlaps++;
      }
    }
    if (game.phase === 'victory' && game.mode.key === 'champ' && game.champIndex < 2) { ended = null; game.nextHeat(); }
  }
  return { ended, rounds, time: game.time, score: game.score, offroad, overlaps, log, game };
}

const tally = {};
for (let i = 0; i < games; i++) {
  const seed = 1000 + i * 77;
  const r = runGame(seed, modeArg, true);
  const winner = r.game.competitors.find((c) => c.alive);
  tally[winner ? winner.name : 'nobody'] = (tally[winner ? winner.name : 'nobody'] || 0) + 1;
  console.log(`seed ${seed}: ${r.ended} after ${r.rounds.length} rounds, ${(r.time / 60).toFixed(1)} min, winner ${winner ? winner.name : '-'}, offroad ${r.offroad}, overlaps ${r.overlaps}`);
  if (!r.ended) fail('game did not finish');
  if (r.offroad > 5) fail('cars leaving the road: ' + r.offroad);
  for (const rd of r.rounds) {
    if (verbose) console.log(`   R${rd.round} ${rd.cars}c/${rd.bays}b music ${rd.music?.toFixed(0)}s cd ${rd.countdown?.toFixed(0)}s left ${rd.left?.toFixed(0)} ev:${rd.ev || rd.event || '-'} parked [${rd.parked.join(', ')}] out [${rd.out}]`);
    if (rd.out && rd.out.length === 0) fail(`round ${rd.round}: nobody eliminated`);
  }
  if (verbose) r.log.forEach((l) => console.log('     ', l));
}
console.log('winners:', tally);

// an idle player must be eliminated in round one
{
  const r = runGame(42, 'classic', false);
  console.log('idle player:', r.ended, 'after', r.rounds.length, 'round(s); round 1 parked', r.rounds[0].parked.length, 'of', r.rounds[0].bays);
  if (r.ended !== 'gameover' || r.rounds.length !== 1) fail('idle player should be knocked out in round 1');
}
console.log(failures ? `\n${failures} FAILURE(S)` : '\nall simulations passed');
process.exit(failures ? 1 : 0);
