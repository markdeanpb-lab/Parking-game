// Headless DJ test: plays whole competitions on autopilot, feeds every game event into a DJ (no speech engine,
// so line durations are estimated from word counts), and checks the commentary.
//   node tests/dj.test.mjs            -> stats + checks, writes tests/out/dj/transcript.txt
//   node tests/dj.test.mjs -n 40      -> more games
// Events the gameplay code does not (yet) emit natively (contested, rivalRobbed, lastGasp, photoFinish, leader)
// are synthesised from the game state, and player-only events that autopilot suppresses (kerbs, near misses,
// struggles...) are injected at random, so every handler gets exercised.
import fs from 'node:fs';
import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
import { DJ, DJ_LINES } from '../src/dj.js';

const args = process.argv.slice(2);
const N = Number(args[args.indexOf('-n') + 1]) || 24;
let failures = 0;
const fail = (m) => { failures++; console.log('  FAIL:', m); };

// deterministic Math.random for the DJ's choices
function seedRandom(seed) { let s = seed >>> 0; Math.random = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

const NATIVE = new Set();
const SYNTH = ['contested', 'rivalRobbed', 'lastGasp', 'photoFinish', 'leader', 'nearMiss', 'overshot', 'longReverse'];

function runGame(seed, mode, track) {
  seedRandom(seed * 7 + 3);
  const game = new Game(track, { seed, autoplay: true, autoContinue: false });
  const dj = new DJ(() => {});
  dj.log = [];
  const events = [];
  let ended = null, kerbs = 0, pendingHeat = false;
  const contestedSaid = new Set();
  let leader = null;
  const fire = (type, d) => { events.push({ t: dj.clock, type, d, round: game.round, phase: game.phase }); dj.handle(type, d, game); };
  game.on((type, d) => {
    if (SYNTH.includes(type)) NATIVE.add(type);
    if (type === 'roundEnd' && d.final && !NATIVE.has('photoFinish') && Math.random() < 0.4) {
      const win = d.survivors[0], lose = d.out[0];
      if (win && lose) fire('photoFinish', { winner: win, loser: lose, street: win.bay ? win.bay.street : null });
    }
    fire(type, d);
    if (type === 'parked' && !d.isPlayer && !NATIVE.has('rivalRobbed')) {
      const victim = game.drivers.find((x) => x.comp && x.comp !== d.comp && !x.comp.isPlayer && x.target === d.bay && Math.hypot(x.car.x - d.bay.x, x.car.z - d.bay.z) < 30);
      if (victim) fire('rivalRobbed', { thief: d.comp, victim: victim.comp, bay: d.bay, street: d.bay.street });
    }
    if (type === 'parked' && d.timeLeft < 3 && !NATIVE.has('lastGasp')) fire('lastGasp', { comp: d.comp, timeLeft: d.timeLeft, street: d.bay.street });
    if (type === 'roundIntro') { contestedSaid.clear(); kerbs = 0; }
    if (type === 'roundIntro' && d.round > 1 && !NATIVE.has('leader')) {
      const top = game.competitors.filter((c) => c.alive).sort((a, b) => b.points - a.points)[0];
      if (top && top.name !== leader) { leader = top.name; fire('leader', { name: top.name, points: top.points }); }
    }
    if (type === 'victory' && game.mode.key === 'champ' && game.champIndex < 2) pendingHeat = true;
    else if (type === 'gameover' || type === 'victory') ended = type;
  });
  game.start(mode);
  let steps = 0, waitHeat = 0;
  const dt = 1 / 60;
  while (!ended && steps < 60 * 60 * 40) {
    game.update(dt); dj.update(dt); steps++;
    if (steps % 30 === 0 && game.phase === 'park') {
      // contested: two drivers closing on the same free bay
      if (!NATIVE.has('contested')) for (const b of game.freeBays()) {
        if (contestedSaid.has(b.id)) continue;
        const ds = game.drivers.filter((x) => x.comp && x.target === b && x.state === 'seek' && Math.hypot(x.car.x - b.x, x.car.z - b.z) < 35);
        if (ds.length >= 2) { contestedSaid.add(b.id); fire('contested', { bay: b, drivers: ds.map((x) => x.comp.name), street: b.street }); }
      }
      // player-only incidents the autopilot never has
      if (!game.playerComp.parked && Math.random() < 0.06) {
        const pick = Math.random();
        const rival = game.competitors.filter((c) => c.alive && !c.isPlayer)[0];
        if (pick < 0.3) { kerbs++; game.stats.kerbs++; fire('impact', { kind: 'kerb', speed: 3 + Math.random() * 2, player: true, kerbs: game.stats.kerbs, x: 0, z: 0 }); }
        else if (pick < 0.45 && !NATIVE.has('nearMiss')) fire('nearMiss', { rival: Math.random() < 0.6 ? rival : null, extra: Math.random() < 0.5 ? 'traffic' : null, gap: 0.2 });
        else if (pick < 0.55 && !NATIVE.has('overshot')) fire('overshot', { street: game.lastPick && game.lastPick.duel.bay.street });
        else if (pick < 0.62) fire('struggle', { count: 4 + Math.floor(Math.random() * 3) * 2 });
        else if (pick < 0.7 && !NATIVE.has('longReverse')) fire('longReverse', { seconds: 6 + Math.floor(Math.random() * 6) });
        else if (pick < 0.8) fire('impact', { kind: 'static', speed: 2.5, player: true, kerbs: game.stats.kerbs, x: 0, z: 0 });
        else if (pick < 0.88 && rival) fire('impact', { kind: 'car', speed: 2.5, player: true, playerAtFault: Math.random() < 0.5, rival, x: 0, z: 0 });
      }
    }
    if (steps % 60 === 0 && game.phase === 'music' && Math.random() < 0.04) {
      const l = game.track.locate(game.player.car.x, game.player.car.z);
      const r = Math.random();
      if (r < 0.4) fire('wrongWay', { real: l.edge.realOneway, street: l.edge.name });
      else if (r < 0.7) fire('speeding', { mph: 29 + Math.floor(Math.random() * 8), street: l.edge.name });
      else fire('loiter', { level: 1 });
    }
    // the player reads the results screen for a few seconds, then presses continue
    if (game.phase === 'roundEnd' && game.phaseT > 6) game.continue();
    if (pendingHeat) { waitHeat += dt; if (waitHeat > 6) { waitHeat = 0; pendingHeat = false; game.nextHeat(); } }
  }
  // let the last line finish
  for (let i = 0; i < 600; i++) dj.update(dt);
  return { game, dj, events, ended, time: dj.clock };
}

function transcript(r) {
  const out = [];
  const fmt = (t) => `${String(Math.floor(t / 60)).padStart(2, '0')}:${(t % 60).toFixed(1).padStart(4, '0')}`;
  const big = new Set(['roundIntro', 'musicStart', 'musicStop', 'parked', 'robbed', 'stole', 'roundEnd', 'lastSpace', 'event', 'rivalRobbed', 'contested', 'lastGasp', 'photoFinish', 'leader', 'victory', 'gameover']);
  const rows = [];
  for (const e of r.events) {
    if (!big.has(e.type) && !['impact', 'nearMiss', 'overshot', 'struggle', 'longReverse', 'wrongWay', 'speeding', 'stall', 'fooled', 'tick', 'banter'].includes(e.type)) continue;
    if (e.type === 'tick' && ![20, 10, 5].includes(e.d.t)) continue;
    let desc = e.type;
    const d = e.d;
    if (e.type === 'roundIntro') desc = `=== ROUND ${d.round} (${d.cars} cars, ${d.bays} bays${d.event ? ', event ' + d.event : ''}) ===`;
    else if (e.type === 'parked') desc = `parked ${d.comp.name} ${d.bay.street} ${d.rating.key} t-${d.timeLeft.toFixed(1)}`;
    else if (e.type === 'event') desc = `event ${d.kind} ${d.street || ''}`;
    else if (e.type === 'roundEnd') desc = `roundEnd out: ${d.out.map((c) => c.name).join(', ')}`;
    else if (e.type === 'impact') desc = `impact ${d.kind}${d.player ? '' : ' (rivals)'}`;
    else if (e.type === 'tick') desc = `tick ${d.t}`;
    else if (e.type === 'robbed' || e.type === 'stole') desc = `${e.type} by/from ${d.rival.name}`;
    rows.push({ t: e.t, s: `${fmt(e.t)}            [${desc}]` });
  }
  for (const l of r.dj.log) {
    if (l.kind === 'say' || l.kind === 'say-reuse') rows.push({ t: l.t + 0.0001, s: `${fmt(l.t)}  P${l.pri} ${l.key.padEnd(10).slice(0, 10)} "${l.text}"` });
    else if (l.kind === 'cut' || l.kind === 'stale' || l.kind === 'error') rows.push({ t: l.t + 0.0002, s: `${fmt(l.t)}      (${l.kind} ${l.key}${l.kind === 'cut' ? ' ' + l.text : ''})` });
  }
  rows.sort((a, b) => a.t - b.t);
  for (const x of rows) out.push(x.s);
  return out.join('\n');
}

const track = buildTrack(map);
const plan = [];
for (let i = 0; i < N; i++) plan.push([2000 + i * 131, i % 6 === 5 ? 'rush' : i % 6 === 4 ? 'champ' : 'classic']);
const tally = { lines: 0, repeats: 0, errors: 0, cuts: 0, stale: 0, critStale: 0, minutes: 0, airtime: 0, byKey: {}, nothing: {} };
let sample = null;
for (const [seed, mode] of plan) {
  const r = runGame(seed, mode, track);
  if (!sample && mode === 'classic' && r.events.filter((e) => e.type === 'roundIntro').length >= 4) sample = { r, seed, mode };
  const seen = new Map();
  for (const l of r.dj.log) {
    if (l.kind === 'error') { tally.errors++; fail(`DJ threw on ${l.key}: ${l.text.split('\n')[0]}`); }
    if (l.kind === 'cut') tally.cuts++;
    if (l.kind === 'stale') { tally.stale++; if (l.pri >= 3) tally.critStale++; }
    if (l.kind === 'nothing') tally.nothing[l.key] = (tally.nothing[l.key] || 0) + 1;
    if (l.kind === 'say-reuse') { tally.reuse = (tally.reuse || 0) + 1; l.kind = 'say'; l.reused = true; }
    if (l.kind !== 'say') continue;
    tally.lines++;
    tally.byKey[l.key] = (tally.byKey[l.key] || 0) + 1;
    tally.airtime += 0.5 + l.text.split(/\s+/).length * 0.32;
    const bank = DJ_LINES[l.key];
    const repeatOk = bank && !Array.isArray(bank) && bank.repeat;
    if (seen.has(l.id) && !repeatOk && !l.reused) { tally.repeats++; fail(`repeated line in one game (seed ${seed}): ${l.text}`); }
    seen.set(l.id, true);
  }
  tally.minutes += r.time / 60;
  if (!r.ended) fail(`seed ${seed} did not finish`);
  // every round has an intro, a music-stop shout and a result line
  const said = (k) => r.dj.log.filter((l) => l.kind === 'say' && k.test(l.key)).length;
  const rounds = r.events.filter((e) => e.type === 'roundIntro').length;
  if (said(/^musicStop/) < rounds) fail(`seed ${seed}: a music stop went unannounced (${said(/^musicStop/)}/${rounds})`);
  if (said(/^(roundIntro|finalIntro|gameStart|rushStart|champStart)/) < rounds) fail(`seed ${seed}: a round intro was lost (${said(/^(roundIntro|finalIntro|gameStart|rushStart|champStart)/)}/${rounds})`);
}
console.log(`DJ: ${N} games, ${tally.minutes.toFixed(1)} min of play, ${tally.lines} lines (${(tally.lines / tally.minutes).toFixed(1)}/min, ~${(100 * tally.airtime / 60 / tally.minutes).toFixed(0)}% airtime)`);
console.log(`    repeats ${tally.repeats}, critical reuses ${tally.reuse || 0}, errors ${tally.errors}, cut ${tally.cuts}, stale ${tally.stale} (critical ${tally.critStale})`);
console.log('    natively emitted new events:', [...NATIVE].join(', ') || 'none (synthesised)');
const keys = Object.entries(tally.byKey).sort((a, b) => b[1] - a[1]);
console.log('    by bank:', keys.map(([k, n]) => `${k} ${n}`).join(', '));
console.log('    banks exhausted/empty:', Object.entries(tally.nothing).sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k} ${n}`).join(', '));
if (tally.critStale > tally.lines * 0.03) fail('too many critical lines went stale');
if ((tally.reuse || 0) > tally.lines * 0.01) fail('too many critical lines had to be reused (banks too small)');
if (sample) {
  fs.mkdirSync('tests/out/dj', { recursive: true });
  const head = `Snorbens FM transcript: ${sample.mode} seed ${sample.seed}, ${(sample.r.time / 60).toFixed(1)} min, result ${sample.r.ended}\n` +
    `Columns: time, priority (4 result / 3 critical / 2 important / 1 colour), bank, line. [brackets] are game events.\n\n`;
  fs.writeFileSync('tests/out/dj/transcript.txt', head + transcript(sample.r) + '\n');
  console.log('    transcript: tests/out/dj/transcript.txt');
}
if (failures) { console.log(`${failures} DJ check(s) failed`); process.exit(1); }
console.log('DJ checks passed');
