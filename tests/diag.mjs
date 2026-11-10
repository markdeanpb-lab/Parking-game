import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
import { obstacleAhead } from '../src/ai.js';
const seeds = process.argv.slice(2).map(Number);
const reasons = {};
for (const seed of seeds.length ? seeds : [1000, 1077, 1154, 1231, 1308, 1385, 1462, 1539, 1616, 1693]) {
  const track = buildTrack(map);
  const game = new Game(track, { seed, autoplay: true, autoContinue: true });
  let ended = false, snap = null;
  game.on((type, d) => {
    if (type === 'gameover' || type === 'victory') ended = true;
    if (type === 'musicStop') snap = game.drivers.filter(x => x.comp).map(x => ({ n: x.p.name, etas: game.freeBays().map(b => x.parkEta(b).toFixed(0)).join('/') }));
    if (type === 'roundEnd') {
      if (d.out.length > 1) {
        console.log(`seed ${seed} R${d.round}: cd ${game.countdown.toFixed(0)} out ${d.out.length}; free bays left ${game.freeBays().length}`);
        for (const c of d.out) {
          const x = c.driver; if (!x) continue;
          const ob = obstacleAhead(x.car, game.world.cars, 12);
          const obn = ob.other ? (game.drivers.find(q => q.car === ob.other)?.p.name + ':' + game.drivers.find(q => q.car === ob.other)?.stateAtEnd) : '-';
          const key = x.stateAtEnd + (x.targetAtEnd ? '' : '/notarget');
          reasons[key] = (reasons[key] || 0) + 1;
          console.log(`   ${c.name.padEnd(9)} state ${x.stateAtEnd} target ${x.targetAtEnd ? x.targetAtEnd.id + '@' + x.targetAtEnd.edgeId : '-'} remain ${x.remainAtEnd} v ${x.car.v.toFixed(1)} wait ${x.waitT.toFixed(1)} ahead ${obn} gap ${ob.gap.toFixed(1)} edge ${x.car.loc?.edgeId}@${x.car.loc?.s.toFixed(0)} etas@stop ${snap.find(s => s.n === x.p.name)?.etas}`);
        }
      }
    }
  });
  const origEnd = game.endRound.bind(game);
  game.endRound = () => { for (const x of game.drivers) { x.stateAtEnd = x.state; x.targetAtEnd = x.target; x.remainAtEnd = x.stopR !== null && x.stopR !== undefined ? (x.stopR - x.r).toFixed(0) : '-'; } origEnd(); };
  game.start('classic');
  let n = 0;
  while (!ended && n++ < 60 * 60 * 20) game.update(1 / 60);
}
console.log(reasons);
