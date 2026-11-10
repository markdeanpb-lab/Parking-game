import map from '../src/mapdata.js';
import { buildTrack } from '../src/track.js';
const t0 = Date.now();
const track = buildTrack(map);
console.log('build ms', Date.now() - t0);
for (const e of Object.values(track.edges)) console.log(e.id.padEnd(11), e.name.padEnd(17), 'len', e.len.toFixed(0).padStart(4), 'next', e.next.join(','), '| all', e.nextAll.join(','));
console.log('parked', track.parked.length, 'bays', track.bays.length, 'driveways', track.driveways.map(d => d.edgeId + '@' + d.s.toFixed(0)));
const per = {};
for (const b of track.bays) (per[b.edgeId] ||= []).push(b.s.toFixed(0) + b.kind[0]);
console.log(per);
// lane clearance along representative routes
const routes = [
  ['dalton', 'grangeAB', 'grangeBC', 'church', 'bernardS', 'catherine', 'dalton'],
  ['church', 'bernard', 'grangeBC', 'church'],
  ['dalton', 'grangeNW'], ['grangeBC', 'grangeSE'],
];
for (const r of routes) {
  const route = track.buildRoute(r);
  let min = 9, at = null, maxK = 0;
  const P = route.path;
  for (let s = 0; s <= P.length; s += 0.5) {
    const p = P.at(s), d = track.sdf.sample(p.x, p.z);
    if (d < min) { min = d; at = [p.x.toFixed(1), p.z.toFixed(1), route.edgeAt(s).edgeId]; }
    if (s > 2 && s < P.length - 2) {
      const a = P.at(s - 2), b = P.at(s + 2);
      let dh = Math.abs(Math.atan2(Math.sin(b.h - a.h), Math.cos(b.h - a.h)));
      maxK = Math.max(maxK, dh / 4);
    }
  }
  console.log(r.join('>'), 'len', P.length.toFixed(0), 'min clearance', min.toFixed(2), at, 'min radius', (1 / maxK).toFixed(1));
}
console.log('dist dalton@50 -> church@100', track.pathDistance('dalton', 50, 'church', 100).toFixed(0), track.routeEdgesTo('dalton', 50, 'church', 100).edges.join('>'));
console.log('dist bernard@50 -> bernard@20', track.pathDistance('bernard', 50, 'bernard', 20).toFixed(0), track.routeEdgesTo('bernard', 50, 'bernard', 20).edges.join('>'));
console.log('spawn', track.spawnPoints.length);
