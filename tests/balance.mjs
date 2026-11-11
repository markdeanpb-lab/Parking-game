// Dev tool: plays many competitions with an autopilot in the player's car and reports how often the player
// survives each round and why they went out. Used for balancing. Run: node tests/balance.mjs [-v] [auto|human]
//   auto  = "competent human": reacts fast, drives briskly, parks cleanly
//   human = "typical human": slower to react and to drive, takes a shuffle or two to get in
import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';

const verbose = process.argv.includes('-v');
const only = process.argv.find((a) => a === 'auto' || a === 'human');
const N = +(process.argv.find((a) => /^\d+$/.test(a)) || 20);

function run(persona) {
  const stat = {}; const why = {}; const elim = {}; let wins = 0, games = 0, rounds = 0, finals = 0, photo = 0, robbed = 0, contested = 0;
  const parkT = [], countdowns = [];
  for (const mode of ['classic', 'rush']) for (let i = 0; i < N; i++) {
    const track = buildTrack(map);
    const game = new Game(track, { seed: 500 + i * 31, autoplay: true, autoContinue: true, autoPersona: persona });
    let ended = false, log = [];
    game.on((type, d) => {
      if (type === 'gameover') ended = true;
      if (type === 'victory') { ended = true; wins++; }
      if (type === 'musicStop') { log = []; countdowns.push(d.countdown); }
      if (type === 'photoFinish') photo++;
      if (type === 'rivalRobbed') robbed++;
      if (type === 'contested') contested++;
      if (type === 'parked' && d.isPlayer) parkT.push(d.comp.parkTime);
      if (['parked', 'aborted', 'event', 'manoeuvre'].includes(type)) log.push(`${game.phaseT.toFixed(0)}:${type[0]}:${d.comp?.name || d.driver?.p.name || d.kind}${d.bay ? '#' + d.bay.id : ''}`);
      if (type === 'roundEnd') {
        rounds++; elim[d.out.length] = (elim[d.out.length] || 0) + 1; if (d.final) finals++;
        const k = 'R' + d.round; stat[k] ||= [0, 0]; stat[k][0]++;
        if (d.playerOut) {
          stat[k][1]++;
          const me = game.playerComp.driver;
          const key = (game.event || 'none') + ':' + me.stateAtEnd.replace(/#\d+/, '');
          why[key] = (why[key] || 0) + 1;
          if (verbose) console.log(`${persona} ${mode} seed ${500 + i * 31} R${d.round} ev ${game.event} mine #${game.lastPick.duel.bay.id} pd ${game.lastPick.pd.toFixed(0)} cd ${game.countdown.toFixed(0)} state ${me.stateAtEnd} | ${log.join(' ')}`);
        }
      }
    });
    const origEnd = game.endRound.bind(game);
    game.endRound = () => { const me = game.playerComp.driver; me.stateAtEnd = me.state + (me.target ? '#' + me.target.id : ''); origEnd(); };
    game.start(mode); games++;
    let n = 0;
    while (!ended && n++ < 60 * 60 * 25) game.update(1 / 60);
  }
  const surv = Object.fromEntries(Object.entries(stat).map(([k, [p, o]]) => [k, `${p - o}/${p}`]));
  const med = (a) => { const b = [...a].sort((x, y) => x - y); return b.length ? b[b.length >> 1].toFixed(1) : '-'; };
  console.log(`\n[${persona}] wins ${wins}/${games} | survived per round ${JSON.stringify(surv)}`);
  console.log(`  eliminations per round ${JSON.stringify(elim)} | multi-elimination ${(100 * (rounds - (elim[1] || 0)) / rounds).toFixed(0)}% | finals ${finals}, photo finishes ${photo}`);
  console.log(`  player park time median ${med(parkT)} s, countdown median ${med(countdowns)} s | rival robberies ${robbed}, contested ${contested}`);
  console.log('  player out because:', why);
}
for (const p of only ? [only] : ['auto', 'human']) run(p);
