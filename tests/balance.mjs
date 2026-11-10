// Dev tool: plays many competitions with a "competent human" autopilot and reports how often the player
// survives each round and why they went out. Used for balancing. Run: node tests/balance.mjs [-v]
import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
const stat = {}; const why = {}; let wins = 0, games = 0;
for (const mode of ['classic', 'rush']) for (let i = 0; i < 20; i++) {
  const track = buildTrack(map);
  const game = new Game(track, { seed: 500 + i * 31, autoplay: true, autoContinue: true });
  let ended = false, log = [];
  game.on((type, d) => {
    if (type === 'gameover') ended = true;
    if (type === 'victory') { ended = true; wins++; }
    if (type === 'musicStop') log = [];
    if (['parked', 'aborted', 'event', 'manoeuvre'].includes(type)) log.push(`${game.phaseT.toFixed(0)}:${type[0]}:${d.comp?.name || d.driver?.p.name || d.kind}${d.bay ? '#' + d.bay.id : ''}`);
    if (type === 'roundEnd') {
      const k = 'R' + d.round; stat[k] ||= [0, 0]; stat[k][0]++;
      if (d.playerOut) {
        stat[k][1]++;
        const me = game.playerComp.driver;
        const key = (game.event || 'none') + ':' + me.stateAtEnd;
        why[key] = (why[key] || 0) + 1;
        if (process.argv.includes('-v')) console.log(`${mode} seed ${500 + i * 31} R${d.round} ev ${game.event} mine #${game.lastPick.duel.bay.id} pd ${game.lastPick.pd.toFixed(0)} cd ${game.countdown.toFixed(0)} state ${me.stateAtEnd} | ${log.join(' ')}`);
      }
    }
  });
  const origEnd = game.endRound.bind(game);
  game.endRound = () => { const me = game.playerComp.driver; me.stateAtEnd = me.state + (me.target ? '#' + me.target.id : ''); origEnd(); };
  game.start(mode); games++;
  let n = 0;
  while (!ended && n++ < 60 * 60 * 20) game.update(1 / 60);
}
console.log('rounds [played, player out]:', stat, 'wins', wins, '/', games);
console.log(why);
