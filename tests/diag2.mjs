import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
import { Game } from '../src/game.js';
import { obbOverlap, boxGap } from '../src/physics.js';
const [seed, round, name] = [Number(process.argv[2]), Number(process.argv[3]), process.argv[4]];
const track = buildTrack(map);
const game = new Game(track, { seed, autoplay: true, autoContinue: true });
let ended = false, watch = false;
game.on((type, d) => {
  if (type === 'gameover' || type === 'victory') ended = true;
  if (type === 'musicStop' && game.round === round) watch = true;
  if (type === 'roundEnd') watch = false;
  if (watch && ['manoeuvre', 'aborted', 'parked', 'honk', 'shove', 'event'].includes(type)) console.log(game.phaseT.toFixed(1), type, d.driver?.p.name || d.comp?.name || d.kind || '');
});
game.start('classic');
let n = 0, last = -1;
while (!ended && n++ < 60 * 60 * 20) {
  game.update(1 / 60);
  if (watch && Math.floor(game.phaseT * 0.5) !== last) {
    last = Math.floor(game.phaseT * 0.5);
    const x = game.drivers.find((q) => q.p.name === name);
    const c = x.car, l = track.locate(c.x, c.z);
    const near = game.world.near(c.x, c.z).map((s) => boxGap(c, s)).sort((a, b) => a - b)[0];
    console.log(`  t${game.phaseT.toFixed(1)} ${x.state} tgt ${x.target?.id ?? '-'}@${x.target?.edgeId ?? ''} ${l.edge.id}@${l.s.toFixed(1)} lat ${l.lat.toFixed(2)} v ${c.v.toFixed(2)} thr ${c.ctrl.throttle.toFixed(2)} hb ${c.ctrl.handbrake} steer ${c.ctrl.steer.toFixed(2)} r ${x.r.toFixed(0)}/${x.stopR?.toFixed(0)} wait ${x.waitT.toFixed(1)} ign ${x.ignoreT.toFixed(1)} sdf ${track.sdf.sample(c.x, c.z).toFixed(2)} staticGap ${near?.toFixed(2)} kin ${c.kinematic}`);
  }
}
