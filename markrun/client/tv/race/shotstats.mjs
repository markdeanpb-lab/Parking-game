// Shot-list statistics for the race director (node, no browser):
//   node client/tv/race/shotstats.mjs [fixture ...] [--director=path] [--backed=r2,r4] [--json]
// Prints the shot list (type, subject, reason, length), the number of distinct angle types, the longest run of the
// same angle, mid-race shot lengths, and the share of sampled frames (every 0.5 s, gun -> finish) with 2+ runners
// readable on screen (>= 10% of the frame height, inside the frame). Occlusion is ignored.
import fs from 'node:fs';
import * as THREE from 'three';
const root = new URL('../../../', import.meta.url).pathname;
const args = process.argv.slice(2);
const opt = (k) => args.find((a) => a.startsWith(`--${k}=`))?.split('=')[1];
const fixtures = args.filter((a) => !a.startsWith('--')); if (!fixtures.length) fixtures.push('real', 'real-funfair');
const { buildCourse, PATH_W } = await import(root + 'client/tv/race/course.js');
const { createSim } = await import(root + 'client/tv/race/sim.js');
const D = await import(opt('director') ? new URL(opt('director'), 'file://' + process.cwd() + '/').href : root + 'client/tv/race/director.js');
const course = JSON.parse(fs.readFileSync(root + 'data/course/course.json')), park = JSON.parse(fs.readFileSync(root + 'data/course/park.json'));
const backed = (opt('backed') ?? 'r2,r4,r1').split(',').filter(Boolean);
const results = {};
for (const fx of fixtures) {
  const round = JSON.parse(fs.readFileSync(root + `client/tv/race/fixtures/${fx}.json`));
  const C = buildCourse(course, park, round.racePlan);
  const sim = createSim(round.racePlan, C, round.public.runners);
  const fm = C.finishM, hillM = 1720, off = PATH_W / 2 + 3.0;
  const zones = [[fm - 58, fm + 12, 1, 6], [fm - 58, fm + 12, -1, 6], [-2, 38, 1, 5], [-2, 38, -1, 5], [1940, 2010, 1, 4], [1960, 2010, -1, 3], [hillM - 10, hillM + 40, -1, 3], [2440, 2490, -1, 3], [hillM - 70, hillM + 10, 1, 3], [hillM - 70, hillM - 20, -1, 3], [2080, 2160, 1, 4], [2080, 2160, -1, 4], [800, 860, 1, 3], [1250, 1310, -1, 3]].map(([m0, m1, side, depth]) => ({ m0, m1, side, depth, off }));
  const world = { inPark: () => true, anchors: { start: C.sample(0), finish: C.sample(C.finishM), crowdZones: zones, lapM: 2500 } };
  const shots = D.buildShotList({ plan: round.racePlan, sim, backedIds: backed, C, world, funfair: null });
  const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.3, 9000);
  const dir = D.createDirector({ camera, C, sim, world, funfair: null }); dir.setBacked?.(backed);
  // sample frames from the gun to the first finish
  let two = 0, n = 0; const v = new THREE.Vector3();
  const end = sim.firstFinishB;
  for (let b = 0.5, k = 0; b < end; b += 1 / 30, k++) {
    dir.update(b, 1 / 30, shots);
    if (k % 15) continue;
    camera.updateMatrixWorld(); camera.updateProjectionMatrix();
    const st = sim.stateAt(b); let vis = 0;
    for (const id of st.order) {
      const r = st.byId[id]; v.set(r.x, r.y + 1.2, r.z); const d = v.distanceTo(camera.position); v.project(camera);
      const frac = 2.4 / (2 * d * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
      if (v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && frac >= 0.1) vis++;
    }
    n++; if (vis >= 2) two++;
  }
  const race = shots.filter((s) => s.a >= 0 && s.b <= sim.lastFinishB + 3);
  let run = 1, best = 1; for (let i = 1; i < race.length; i++) { run = race[i].type === race[i - 1].type ? run + 1 : 1; best = Math.max(best, run); }
  const midT = race.filter((s) => !['heli', 'startgo', 'finishcam', 'placecam', 'celebrate'].includes(s.type));
  let r2 = 1, best2 = 1; for (let i = 1; i < midT.length; i++) { r2 = midT[i].type === midT[i - 1].type ? r2 + 1 : 1; best2 = Math.max(best2, r2); }
  const mid = race.filter((s) => !['heli', 'startgo', 'finishcam', 'placecam', 'celebrate', 'cutaway'].includes(s.type));
  const lens = mid.map((s) => s.b - s.a);
  const types = [...new Set(race.map((s) => s.type))];
  const hard = race.filter((s) => s.hard).length;
  results[fx] = { shots: race.length, distinctTypes: types.length, types, longestSameRun: best, longestSameRunMidRace: best2, twoPlusShare: +(two / n).toFixed(3), midLen: { min: +Math.min(...lens).toFixed(1), max: +Math.max(...lens).toFixed(1), mean: +(lens.reduce((a, x) => a + x, 0) / lens.length).toFixed(1) }, hardCuts: hard, glides: race.length - hard };
  if (!args.includes('--json')) {
    console.log(`\n=== ${fx} (backed ${backed.join(',')}) ===`);
    for (const s of race) console.log(`${s.a.toFixed(1).padStart(6)}  ${(s.b - s.a).toFixed(1).padStart(5)}s  ${s.type.padEnd(10)} ${s.hard ? 'CUT  ' : 'glide'} ${String(s.ids || '').padEnd(12)} ${s.reason || ''}`);
    console.log(JSON.stringify(results[fx]));
  }
}
if (args.includes('--json')) console.log(JSON.stringify(results, null, 1));
