// MARKRUN 3D race broadcast (three.js).
//
// createRaceView(container, { course, park, round: Round.public, plan?: RacePlan, backedBy: {runnerId: [playerName|emoji]},
//                             onIntroRunner?(runnerId, index) -> void | Promise, speed?=1, introPerRunnerS?=4.2,
//                             photoFreezeS?=2.8, maxPixelRatio?=1.5, introCards?=true, podiumCard?=true,
//                             marketOnPause?=true, marketText?='Place your halfway bets!' })
//  -> { playIntro(onDone, {perRunnerS, flyoverS}?) -> {flyoverS, perRunnerS, runners},
//       loadPlan(plan, {backedBy}?), setBackedBy(backedBy), playRace(onEvent, onDone), seek(t), showPodium(results|null, {card?}),
//       setPaused(bool, {market?, marketText?}?), setSpeed(x), dispose(),
//       hudRoot, broadcastTime, durationS, preRollS }
// One view can live across INTRO -> BETTING -> RACE -> RESULTS: create it without `plan` for the intro (the plan is
//   only sent at RACE start), then loadPlan(plan) before playRace. loadPlan swaps in the race (sim, director, events,
//   funfair if any runner has diversions) without rebuilding the world. Not allowed while a race is playing.
//   setBackedBy(backedBy) (or loadPlan(plan, { backedBy })) updates the players' picks after betting: tower + name-tag
//   badges and the director's backed-runner shots. During a race only the badges change (the shot list is kept).
// Intro: ~7 s helicopter flyover with the round title card (round.public.title / .number / optional .theme), then each
//   runner in lane order gets a close-up + pose + name card; onIntroRunner(id, index) fires at the start of each turn.
//   STABLE API: return a Promise to hold the camera on that runner until it resolves (minimum 2.5 s), otherwise each
//   turn lasts perRunnerS. Then a 3 s group shot -> onDone(). Plans without events/commentary are supported.
// Race: playRace starts PRE_ROLL (8.5 s) before the gun (flyover + title, start line, countdown). onEvent receives
//   {kind:'countdown', n, text}, every plan event as {kind:'event', ...event}, every commentary line as
//   {kind:'commentary', ...line}, and {kind:'photo_finish', ids} when the top two finish within 1.5 s (the broadcast
//   freezes for photoFreezeS with a caption). onDone fires 3.5 s after the last finisher.
// seek(t): resume mid-broadcast (e.g. after a TV reload). Call it right after playRace(onEvent, onDone) with the
//   broadcast time t (-preRollS .. end): runners, camera and director jump there and nothing at or before t fires
//   again. After playIntro(onDone), seek(t) jumps t seconds into the intro (flyoverS + index * perRunnerS lands on
//   runner `index`; onIntroRunner fires only for that runner). `broadcastTime` reports the current position of either.
// showPodium(results, { card: false }) skips the built-in RESULTS card (the race HUD is hidden on the podium anyway).
// setPaused(true) during the race = HALFWAY MARKET: broadcast time stops exactly (no drift), the camera slowly orbits
//   the leaders under a "MARKET OPEN" overlay; setPaused(false) resumes from the same broadcast time.
// Timing uses real elapsed wall time (sub-stepped <= 0.1 s, at most 2 s catch-up per frame), so low fps never means
//   slow motion. speed (opts.speed or setSpeed) scales the clock, e.g. 10 for fast e2e runs.
// HUD: DOM overlay inside `container`; the bottom 15% is left clear for the shell's subtitles.
import * as THREE from 'three';
import { buildCourse, PATH_W } from './course.js';
import { buildWorld, mulberry } from './world.js';
import { buildCrowd, crowdMembersFromZones } from './crowd.js';
import { createRunner, disposeRunnerGeometry } from './runner.js';
import { createSim, fmtTime } from './sim.js';
import { buildShotList, createDirector, easeInOut, WIDE_SHOTS } from './director.js';
import { timeAtDistance } from '../../../server/game/raceplan.mjs';
import { createHud, ordText, shortOf, backerColour } from './hud.js';
import { buildFunfair } from './funfair.js';
import { outlineUniforms, disposeMaterialCache, toon, mesh, canvasTexture } from './toon.js';
import { buildPodium } from './podium.js';
import { buildDressing } from './dressing.js';

const PRE_ROLL = 8.5; // broadcast seconds of helicopter + start line before the gun (b runs from -PRE_ROLL)

export function createRaceView(container, opts = {}) {
  const { course, park, round } = opts;
  let plan = opts.plan || null;
  let backedBy = opts.backedBy || {};
  let backedIds = Object.keys(backedBy).filter((k) => (backedBy[k] || []).length);
  const runnersPub = [...(round?.runners || [])].sort((a, b) => (a.lane ?? 0) - (b.lane ?? 0));
  let hasDiversion = false;

  // ---------- renderer / scene ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: !!opts.preserveDrawingBuffer });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, opts.maxPixelRatio ?? 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const canvas = renderer.domElement;
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.appendChild(canvas);
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xcdeeff, 700, 3200);
  const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.3, 9000);
  const hemi = new THREE.HemisphereLight(0xdff0ff, 0x8fc070, 1.45); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff3dd, 2.3);
  const sunDir = new THREE.Vector3(-0.45, 0.82, 0.38).normalize();
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03; sun.shadow.radius = 3;
  scene.add(sun); scene.add(sun.target);

  // ---------- world ----------
  const C = buildCourse(course, park, plan);
  const world = buildWorld(scene, C, { course, park });
  let funfair = null, fairCrowd = null;
  const crowdMembers = crowdMembersFromZones(C, world.anchors.crowdZones, 5, world.onPath, world.blocked);
  const dressing = buildDressing(scene, C, world, park);
  crowdMembers.push(...dressing.crowd);
  // one instanced crowd per zone so off-screen clusters are frustum-culled
  const byZone = new Map(); for (const m of crowdMembers) { const k = m.zone ?? 'x'; if (!byZone.has(k)) byZone.set(k, []); byZone.get(k).push(m); }
  const crowds = [...byZone.values()].map((list) => buildCrowd(scene, list));
  const crowd = { update: (...a) => { crowds.forEach((c) => c.update(...a)); fairCrowd?.update(...a); }, dispose: () => { crowds.forEach((c) => c.dispose()); fairCrowd?.dispose(); } };

  // ---------- runners ----------
  const runners = {};
  for (const r of runnersPub) { const rr = createRunner(r); runners[r.id] = rr; scene.add(rr.root); }
  const ids = runnersPub.map((r) => r.id);
  const pubById = Object.fromEntries(runnersPub.map((r) => [r.id, r]));

  // ---------- HUD ----------
  const hud = createHud(container, { runners: runnersPub, backedBy, course, park, C });
  let podium = null;

  // ---------- plan-dependent parts (rebuilt by loadPlan) ----------
  let sim = null, shots = [], director = null, timeline = [], hadDiversion = false;
  function setupPlan(pl) {
    plan = pl || null;
    C.setPlan(plan);
    hasDiversion = !!plan?.runners?.some((r) => r.diversions && r.diversions.length);
    if (funfair) { funfair.dispose(); funfair = null; }
    if (fairCrowd) { fairCrowd.dispose(); fairCrowd = null; }
    if (hasDiversion) {
      const who = plan.runners.find((r) => r.diversions?.length).id;
      funfair = buildFunfair(scene, C, world, C.diversions[who][0]);
      // clear trees, picnics and spectators out of the fairground strip, add the fair's own visitors
      world.clearArea(funfair.contains);
      crowds.forEach((c) => c.hideWhere(funfair.contains));
      fairCrowd = buildCrowd(scene, funfair.crowd);
    }
    if (hasDiversion || hadDiversion) { world.redrawGround(); hud.redrawMap(); } // worn GPS trail of the diversion
    hadDiversion = hasDiversion;
    timeline = [];
    if (plan) {
      sim = createSim(plan, C, runnersPub);
      shots = buildShotList({ plan, sim, backedIds, hasDiversion, C, world, funfair });
      director = createDirector({ camera, C, sim, world, funfair });
      for (const e of plan.events || []) timeline.push({ at: e.broadcastS, evt: { ...e, kind: 'event' } });
      for (const c of plan.commentary || []) timeline.push({ at: c.broadcastS, evt: { ...c, kind: 'commentary' } });
      timeline.sort((a, b) => a.at - b.at);
    } else { sim = null; shots = []; director = null; }
  }

  // ---------- state ----------
  let mode = 'idle'; // idle | intro | race | podium
  let paused = false, disposed = false;
  let b = -PRE_ROLL; // broadcast clock
  let wall = 0; // wall clock seconds since creation
  let raceCb = null, introState = null, freeze = 0, photoDone = false, raceDone = false;
  let evIdx = 0, countdownIdx = 0;
  let titleShown = false, hudDt = 0;
  let speed = Math.max(0.05, Number(opts.speed) || 1);
  let marketT = null, marketBase = 0;
  const firedBanners = new Set();

  // ---------- resize ----------
  function resize() {
    const w = container.clientWidth || window.innerWidth, h = container.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    outlineUniforms.uRes.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
  }
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  ro?.observe(container); window.addEventListener('resize', resize); resize();

  // ---------- runner placement ----------
  const startSlots = {};
  {
    const n = ids.length;
    ids.forEach((id, i) => {
      const lat = (i - (n - 1) / 2) * Math.min(1.25, (PATH_W - 1.6) / Math.max(1, n - 1));
      const s = C.sample(0); startSlots[id] = { x: s.x + s.rx * lat - s.tx * 1.2, z: s.z + s.rz * lat - s.tz * 1.2, yaw: Math.atan2(s.tx, s.tz) };
      startSlots[id].y = C.heightAt(startSlots[id].x, startSlots[id].z) + 0.16;
    });
  }
  function placeAtStart(pose = 'idle') {
    for (const id of ids) { const s = startSlots[id]; const r = runners[id]; r.root.position.set(s.x, s.y, s.z); r.root.rotation.set(0, s.yaw, 0); if (pose) r.set(pose); r.setPop(null); }
  }
  placeAtStart();
  setupPlan(plan);

  const celebrateFor = (place, n) => (place === 1 ? 'jump' : place === 2 ? 'fist' : place === 3 ? 'fist' : place === n ? 'collapse' : 'kneel');
  function applyRace(bb, dt) {
    const st = sim.stateAt(Math.max(0, bb));
    const n = ids.length;
    for (const id of ids) {
      const s = st.byId[id], r = runners[id];
      if (bb < 0) continue;
      r.root.position.set(s.x, s.y, s.z);
      // face along motion (smoothed with heading)
      // celebrating finishers turn round to face the finish line / crowd
      const yaw = Math.atan2(s.tx, s.tz) + (s.finished && s.post > 2.4 && !(s.place > 3 && s.post < 4) ? Math.PI * (s.place % 2 ? 1 : -1) * 0.92 : 0);
      let cur = r.root.rotation.y; let d = yaw - cur; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      r.root.rotation.y = cur + d * Math.min(1, dt * 10);
      const p = { speed: s.vRace, rate: st.rate, slope: s.slope };
      // Pam's favourite gag: anyone who detoured through the funfair comes back holding candyfloss (eaten as they go)
      const d0 = C.diversions[id]?.[0];
      if (d0) r.setProp('floss', s.m > d0.toM - 20 ? Math.max(0.25, 1 - (s.m - d0.toM) / 3500) : 0);
      if (s.finished) {
        const pl = s.place;
        if (s.post < 1.6) { r.set('run'); p.speed = 3; p.rate = 1.2; }
        else if (pl > 3 && s.post < 4) { r.set('trudge'); }
        else r.set('celebrate', celebrateFor(pl, n));
        r.setPop(null);
      } else if (s.div > 0.3) {
        r.set('distracted');
        const ride = funfair?.anchors.rides.reduce((best, x) => (!best || x.pos.distanceToSquared(r.root.position) < best.pos.distanceToSquared(r.root.position) ? x : best), null);
        if (ride) { const to = Math.atan2(ride.pos.x - s.x, ride.pos.z - s.z) - r.root.rotation.y; let a = to; while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; p.lookYaw = Math.max(-1.3, Math.min(1.3, a)); }
        r.setPop(['!', 'heart', 'floss'][Math.floor((s.m - s.divInfo.fromM) / 120) % 3]);
      } else {
        r.set('run'); r.setPop(null);
        const geo = C.geoOf(s.m);
        p.effort = s.m > 4300 ? 0.4 + (s.m - 4300) / 700 * 0.5 : (geo > 1700 && geo < 2060) ? 0.7 : 0.1;
      }
      r.update(dt, p);
    }
  }

  // ---------- name tags / HUD state ----------
  const proj = new THREE.Vector3();
  let _rects = null, _rectsAt = -1;
  const hudRects = () => { if (_rectsAt !== wall || !_rects) { const cr = canvas.getBoundingClientRect(); _rects = [...hud.root.querySelectorAll('.mr-tower, .mr-map, .mr-top')].filter((e) => !hud.root.classList.contains('mr-dim') && !(hud.root.classList.contains('mr-dimtop') && !e.classList.contains('mr-map'))).map((e) => {
        const r = e.getBoundingClientRect(); let right = r.right, bottom = r.bottom;
        if (e.classList.contains('mr-tower')) {
          // the tower element has no height (rows are absolute) and the backer badges hang off its right edge
          bottom = r.top + e.querySelectorAll('.mr-row').length * ((e.querySelector('.mr-row')?.offsetHeight || 40) + 6);
          for (const bdg of e.querySelectorAll('.mr-badges')) { const br = bdg.getBoundingClientRect(); if (br.width) right = Math.max(right, br.right); }
        }
        return { left: r.left - cr.left, right: right - cr.left, top: r.top - cr.top, bottom: bottom - cr.top };
      }); _rectsAt = wall; } return _rects; };
  function hudState(st, showTags = true) {
    camera.updateMatrixWorld(); // project with this frame's camera (not last frame's)
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const tags = [];
    for (const id of ids) {
      const r = runners[id];
      proj.set(r.root.position.x, r.root.position.y + r.height + 0.55, r.root.position.z);
      const dist = proj.distanceTo(camera.position);
      proj.project(camera);
      let vis = showTags && proj.z < 1 && proj.z > -1 && Math.abs(proj.x) < 0.95 && proj.y < 0.82 && proj.y > -0.62 && dist > 9.5 && dist < (WIDE_SHOTS.has(director?.shot?.type) ? 450 : 150);
      // tight close-up of this runner (body fills > ~30% of the frame height): the face is enough, no tag
      const pxTall = (r.height / Math.max(0.1, dist)) * (h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)));
      if (pxTall > h * 0.3) vis = false;
      tags.push({ id, x: (proj.x * 0.5 + 0.5) * w, y: (-proj.y * 0.5 + 0.5) * h, visible: vis, pos: st ? st.order.indexOf(id) + 1 : 0, scale: Math.max(0.7, Math.min(1.15, 30 / dist)), dist });
    }
    // name tags only in wide shots, for the top 3 and backed runners; never stacked (lower position just hides)
    const wide = mode === 'race' && WIDE_SHOTS.has(director?.shot?.type) && !director?.gliding;
    const orderNow = st ? st.order : ids;
    const want = new Set([...orderNow.slice(0, 3), ...backedIds]);
    tags.sort((a, b) => orderNow.indexOf(a.id) - orderNow.indexOf(b.id));
    const placed = [];
    for (const t of tags) {
      if (!wide || !want.has(t.id)) t.visible = false;
      if (!t.visible) continue;
      const tw = (shortOf(pubById[t.id]).length * 10 + 50 + (backedBy[t.id]?.length || 0) * 18) * t.scale, th = 26 * t.scale, pad = 10;
      const box = { l: t.x - tw / 2, r: t.x + tw / 2, t: t.y - th, b: t.y + 6 };
      if (placed.some((p) => box.l < p.r + 4 && box.r > p.l - 4 && box.t < p.b + 2 && box.b > p.t - 2)) { t.visible = false; continue; }
      if (hudRects().some((rc) => box.l < rc.right + pad && box.r > rc.left - pad && box.t < rc.bottom + pad && box.b > rc.top - pad)) { t.visible = false; continue; }
      placed.push(box);
    }
    if (!st) {
      if (mode !== 'race') return { tags };
      // before the gun: no positions yet, so no tower rows
      return { tags, raceS: 0, leaderM: 0, map: false, order: ids.map((id) => ({ id, hidden: true, gapText: '' })) };
    }
    // compact tower: top 3 + backed runners outside the top 3; gaps only in the final km / after finishing, or when a
    // backed runner is within ~5 s of the place ahead (then shown as the gap to that runner)
    const finalKm = st.leader.m >= 4000;
    const order = st.order.map((id, i) => {
      const r = st.byId[id];
      const show = i < 3 || backedIds.includes(id);
      let gapText = finalKm || r.finished ? r.gapText : '';
      if (!gapText && backedIds.includes(id) && i > 0 && !r.finished) {
        const ahead = st.byId[st.order[i - 1]];
        const g = st.raceS - timeAtDistance(sim.byId[st.order[i - 1]].progress, r.m);
        if (!ahead.finished && g >= 0 && g <= 5) gapText = `↑${g.toFixed(1)}s`;
      }
      return { id, gapText, finished: r.finished, hidden: !show };
    });
    return {
      raceS: st.raceS, leaderM: st.leader.m, tags, order, map: WIDE_SHOTS.has(director?.shot?.type),
      dots: st.order.map((id, i) => ({ x: st.byId[id].x, z: st.byId[id].z, colour: pubById[id].colour.primary, lead: i === 0, focus: director?.shot?.ids?.includes(id) })),
    };
  }

  // ---------- spatial backer rings (ground halo in each backing player's colour) ----------
  const ringGeo = new THREE.RingGeometry(0.78, 1.0, 48); ringGeo.rotateX(-Math.PI / 2);
  const rings = {};
  function updateRings() {
    for (const id of ids) {
      const g = rings[id] || (rings[id] = new THREE.Group());
      if (!g.parent) runners[id].root.add(g);
      for (const c of [...g.children]) { g.remove(c); c.material.dispose(); }
      (backedBy[id] || []).forEach((name, k) => {
        const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: backerColour(name), transparent: true, opacity: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
        m.scale.setScalar(1 + k * 0.32); m.position.y = 0.06 + k * 0.01; m.renderOrder = 2; g.add(m);
      });
    }
  }
  function scaleRings() {
    for (const id of ids) { const g = rings[id]; if (!g || !g.children.length) continue; const d = camera.position.distanceTo(runners[id].root.position); g.scale.setScalar(THREE.MathUtils.clamp(d * 0.016, 0.9, 3.2)); }
  }
  updateRings();

  // ---------- shadows follow the action ----------
  function updateSun(target, size) {
    const s = Math.max(30, Math.min(220, size));
    const cam = sun.shadow.camera;
    if (cam.right !== s) { cam.left = -s; cam.right = s; cam.top = s; cam.bottom = -s; cam.near = 1; cam.far = 900; cam.updateProjectionMatrix(); }
    const texel = (2 * s) / sun.shadow.mapSize.x;
    const tx = Math.round(target.x / texel) * texel, tz = Math.round(target.z / texel) * texel;
    sun.target.position.set(tx, target.y, tz);
    sun.position.set(tx + sunDir.x * 400, target.y + sunDir.y * 400, tz + sunDir.z * 400);
  }

  // ---------- intro ----------
  const INTRO_POSES = ['wave', 'flex', 'point', 'stretch', 'spin', 'bow'];
  function introPose(r, i) { const h = [...(r.personality || r.id)].reduce((a, c) => a + c.charCodeAt(0), i); return INTRO_POSES[h % INTRO_POSES.length]; }
  function playIntro(onDone, o = {}) {
    mode = 'intro'; hud.setDim(true); hud.clearBanner(); hud.photo(false); hud.results(null); clearPodium(); hud.market(false); marketT = null; paused = false; canvas.style.filter = '';
    placeAtStart('idle');
    const per = o.perRunnerS ?? opts.introPerRunnerS ?? 4.2;
    const fly = o.flyoverS ?? 7;
    introState = { t: 0, idx: -1, per, fly, onDone, waiting: false, segStart: 0, minSeg: 2.5, done: false, group: false };
    return { flyoverS: fly, perRunnerS: per, runners: ids.slice() };
  }
  function advanceIntro(dt) {
    const I = introState; if (!I) return;
    I.t += dt;
    const st = startSlots;
    if (I.idx === -1) {
      if (!I.title && I.t > 0.8) { I.title = true; showTitle(true); }
      // helicopter flyover onto the start line
      const u = Math.min(1, I.t / I.fly), k = easeInOut(u);
      const s = C.sample(0);
      const ctr = new THREE.Vector3(170, 0, -40);
      const ang = 2.2 - k * 2.0, R = 520 - k * 470;
      const pos = new THREE.Vector3(ctr.x + Math.cos(ang) * R, 190 - k * 170, ctr.z + Math.sin(ang) * R);
      const end = new THREE.Vector3(s.x + s.tx * 22 + s.rx * 10, s.y + 9, s.z + s.tz * 22 + s.rz * 10);
      pos.lerp(end, k * k);
      const look = ctr.clone().setY(15).lerp(new THREE.Vector3(s.x, s.y + 1, s.z), Math.min(1, k * 1.2));
      camera.position.copy(pos); camera.lookAt(look); setFov(50);
      if (u >= 1) nextIntro();
      return;
    }
    if (I.group) {
      const s = C.sample(0); const u = (I.t - I.segStart) / 3;
      camera.position.set(s.x + s.tx * (9 + u * 2) + s.rx * 2, s.y + 2.2 + u * 0.6, s.z + s.tz * (9 + u * 2) + s.rz * 2);
      camera.lookAt(s.x, s.y + 1.3, s.z); setFov(46);
      if (u >= 1 && !I.done) { I.done = true; hud.introCard(null); const cb = I.onDone; introState = null; mode = 'idle'; cb?.(); }
      return;
    }
    const id = ids[I.idx]; const sl = st[id];
    const u = I.t - I.segStart;
    const fwd = new THREE.Vector3(Math.sin(sl.yaw), 0, Math.cos(sl.yaw)), rt = new THREE.Vector3(-fwd.z, 0, fwd.x);
    const ht = runners[id].height;
    const dist = 3.2 + ht * 0.6 - Math.min(0.6, u * 0.12);
    camera.position.set(sl.x + fwd.x * dist + rt.x * 0.9, sl.y + ht * 0.62, sl.z + fwd.z * dist + rt.z * 0.9);
    camera.lookAt(sl.x - rt.x * 1.25, sl.y + ht * 0.55, sl.z - rt.z * 1.25); setFov(40);
    if (!I.waiting && u >= I.per) nextIntro();
    if (I.waiting === 'released' && u >= I.minSeg) nextIntro();
  }
  function showTitle(on) {
    const pr = round || {};
    hud.titleCard(on, { title: pr.title || 'MARKRUN', kicker: pr.number ? `ROUND ${pr.number}` : 'LIVE FROM FINSBURY PARK', theme: pr.theme ? (typeof pr.theme === 'string' ? pr.theme : pr.theme.label || pr.theme.name || '') : '' });
  }
  function nextIntro() {
    const I = introState; if (I.idx === -1) showTitle(false); I.idx++; I.segStart = I.t;
    for (const id of ids) runners[id].set('idle');
    if (I.idx >= ids.length) { I.group = true; for (const id of ids) runners[id].set('pose', 'point'); hud.introCard(null); setTimeout(() => {}, 0); for (const id of ids) runners[id].set('wave'); return; }
    const id = ids[I.idx]; const r = runners[id];
    r.set(introPose(pubById[id], I.idx) === 'wave' ? 'wave' : 'pose', introPose(pubById[id], I.idx));
    if (opts.introCards !== false) hud.introCard(pubById[id]);
    I.waiting = false;
    const ret = opts.onIntroRunner?.(id, I.idx);
    if (ret && typeof ret.then === 'function') { I.waiting = true; ret.then(() => { if (introState === I) I.waiting = 'released'; }, () => { if (introState === I) I.waiting = 'released'; }); }
  }

  // ---------- race ----------
  function playRace(onEvent, onDone) {
    if (!sim) throw new Error('createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)');
    mode = 'race'; hud.setDim(false); hud.results(null); clearPodium(); introState = null; hud.introCard(null); hud.titleCard(false); hud.market(false); marketT = null; paused = false; canvas.style.filter = '';
    b = -PRE_ROLL; evIdx = 0; countdownIdx = 0; freeze = 0; photoDone = false; raceDone = false; firedBanners.clear(); titleShown = !!opts.skipRaceTitle; hud.setDimTop(false);
    raceCb = { onEvent, onDone };
    placeAtStart('idle');
    director.reset();
  }
  const countdowns = [[-3, '3'], [-2, '2'], [-1, '1'], [0, 'GO!']];
  // short stingers (UI_SPEC: <= 1.5 s, upper third, one at a time)
  function bannerFor(e) {
    switch (e.type) {
      case 'lead_change': return ['LEAD CHANGE', '', '#ff3d8b'];
      case 'overtake': return backedIds.includes(e.by) || backedIds.includes(e.on) ? ['OVERTAKE', '', '#2e6fe0'] : null;
      case 'hill': return ['THE HILL', '', '#3aa845'];
      case 'lap': return ['LAP 2', '', '#2e6fe0'];
      case 'final_stretch': return ['FINAL STRETCH', '', '#ff8a1f'];
      case 'diversion': return firedBanners.has('div') ? null : (firedBanners.add('div'), ['DISTRACTED!', '', '#b04bff']);
      case 'finish': return e.place === 1 && !sim.photoFinish ? ['WINNER', '', '#ffb000'] : null;
      default: return null;
    }
  }
  function stepRace(dt) {
    if (freeze > 0) {
      freeze -= dt;
      if (freeze <= 0) { hud.photo(false); canvas.style.filter = ''; world.anchors.finishArch.visible = true; director.reset(); hud.showBanner('WINNER', '', '#ffb000'); }
      return;
    }
    const prev = b;
    b += dt;
    if (b < -4.2 && !titleShown) { titleShown = true; showTitle(true); hud.setDimTop(true); }
    if (b >= -3.6 && titleShown === true) { titleShown = 'done'; showTitle(false); hud.setDimTop(false); }
    // countdown
    while (countdownIdx < countdowns.length && b >= countdowns[countdownIdx][0]) {
      const [t, txt] = countdowns[countdownIdx++];
      hud.countdown(txt);
      raceCb?.onEvent?.({ kind: 'countdown', n: txt === 'GO!' ? 0 : Number(txt), text: txt, broadcastS: t });
      if (t === -3) for (const id of ids) runners[id].set('ready');
    }
    // plan events + commentary
    while (evIdx < timeline.length && b >= timeline[evIdx].at) {
      const e = timeline[evIdx++].evt;
      try { raceCb?.onEvent?.(e); } catch (err) { console.error(err); }
      if (e.kind === 'event') { const bn = bannerFor(e); if (bn) hud.showBanner(...bn); }
    }
    // photo finish freeze-frame
    if (sim.photoFinish && !photoDone && b >= sim.firstFinishB) {
      photoDone = true; b = sim.firstFinishB; freeze = opts.photoFreezeS ?? 2.8; { const [a1, a2] = sim.finishOrder; hud.photo(true, `${shortOf(pubById[a1])} or ${shortOf(pubById[a2])}? Checking the camera...`); } canvas.style.filter = 'grayscale(0.55) sepia(0.35) contrast(1.12)';
      raceCb?.onEvent?.({ kind: 'photo_finish', broadcastS: b, ids: sim.finishOrder.slice(0, 2) });
    }
    if (!raceDone && b >= sim.lastFinishB + 3.5) { raceDone = true; raceCb?.onDone?.(); }
  }

  function applyBackedBy(bb) {
    backedBy = bb || {};
    backedIds = Object.keys(backedBy).filter((k) => (backedBy[k] || []).length);
    hud.setBackedBy(backedBy);
    updateRings();
  }

  // ---------- seeking (TV reload / resume mid-broadcast) ----------
  function seekRace(bb, warm = 1.2) {
    if (!sim) throw new Error('createRaceView: seek in a race needs a plan');
    bb = Math.max(-PRE_ROLL, Math.min(sim.lastFinishB + 3.5, Number(bb) || 0));
    mode = 'race'; introState = null; clearPodium(); raceCb = raceCb || {};
    hud.setDim(false); hud.introCard(null); hud.results(null); hud.photo(false); hud.market(false); hud.clearBanner(); hud.titleCard(false); hud.setDimTop(false);
    canvas.style.filter = ''; world.anchors.finishArch.visible = true; marketT = null;
    titleShown = bb >= -3.6 ? 'done' : bb < -4.2 ? false : 'done';
    director.reset();
    // warm up animation/camera state over the last `warm` seconds without firing anything
    const steps = Math.round(warm * 30);
    for (let i = steps; i >= 0; i--) {
      b = bb - i / 30;
      if (b < -3) for (const id of ids) runners[id].set('idle'); else if (b < 0) for (const id of ids) runners[id].set('ready');
      if (i > 0) { director.update(b, 1 / 30, shots); if (b >= 0) applyRace(b, 1 / 30); else for (const id of ids) runners[id].update(1 / 30, {}); }
    }
    b = bb;
    // everything at or before bb counts as already broadcast
    evIdx = timeline.findIndex((x) => x.at > b); if (evIdx < 0) evIdx = timeline.length;
    countdownIdx = countdowns.findIndex((c) => c[0] > b); if (countdownIdx < 0) countdownIdx = countdowns.length;
    photoDone = b >= sim.firstFinishB; raceDone = b >= sim.lastFinishB + 3.5; freeze = 0;
  }
  function seekIntro(t) {
    const I = introState; if (!I) return;
    t = Math.max(0, Number(t) || 0);
    const n = ids.length;
    if (t < I.fly) { I.t = t; return; }
    showTitle(false); I.title = true;
    const idx = Math.min(n, Math.floor((t - I.fly) / I.per));
    I.idx = idx - 1; I.t = t;
    nextIntro(); // fires onIntroRunner for the runner we land on (not for the skipped ones)
    I.segStart = I.fly + idx * I.per;
  }
  function seek(t) {
    if (mode === 'intro') return seekIntro(t);
    return seekRace(t);
  }

  // ---------- podium ----------
  function clearPodium() { if (podium) { podium.dispose(); podium = null; } }
  function showPodium(results, { card } = {}) {
    mode = 'podium'; hud.setDim(true); hud.clearBanner(); introState = null; hud.titleCard(false); hud.market(false); marketT = null; paused = false; canvas.style.filter = ''; hud.photo(false);
    clearPodium();
    const order = results?.finishOrder?.length ? [...results.finishOrder].sort((a, b) => a.place - b.place) : (sim?.finishOrder || ids).map((id, i) => ({ runnerId: id, place: i + 1, officialS: sim?.byId[id].officialS ?? 0, timeText: sim ? fmtTime(sim.byId[id].officialS) : '' }));
    podium = buildPodium(scene, C, world, runners, order, { camera, offsetX: (card ?? opts.podiumCard) !== false ? 3.2 : 0 });
    if ((card ?? opts.podiumCard) !== false) hud.results(order.map((o) => ({ place: o.place, nickname: pubById[o.runnerId]?.nickname || o.runnerId, colour: pubById[o.runnerId]?.colour.primary || '#888', timeText: o.timeText || fmtTime(o.officialS) })));
  }

  // ---------- main loop ----------
  let last = performance.now(), raf = 0;
  const frameStats = { frames: 0, acc: 0, fps: 0 };
  function setFov(f) { if (Math.abs(camera.fov - f) > 0.01) { camera.fov = f; camera.updateProjectionMatrix(); } }
  function frame(dt, noRender = false) {
    wall += dt;
    let st = null;
    if (!paused) {
      if (mode === 'intro') advanceIntro(dt);
      if (mode === 'race') stepRace(dt);
    }
    const ddt = paused ? 0 : dt;
    if (mode === 'race') {
      if (freeze > 0) {
        // photo-finish freeze-frame: side-on at the line
        const f = world.anchors.finish;
        world.anchors.finishArch.visible = false; // virtual side-on camera looks straight down the line
        camera.position.set(f.x + f.rx * 9 - f.tx * 0.6, f.y + 6.4, f.z + f.rz * 9 - f.tz * 0.6);
        camera.lookAt(f.x - f.rx * 0.6 - f.tx * 0.6, f.y + 0.8, f.z - f.rz * 0.6 - f.tz * 0.6); setFov(42);
        camera.updateMatrixWorld();
        const a = new THREE.Vector3(f.x + f.rx * 3, f.y + 0.05, f.z + f.rz * 3).project(camera), c = new THREE.Vector3(f.x - f.rx * 3, f.y + 0.05, f.z - f.rz * 3).project(camera);
        hud.photoLine([(a.x * 0.5 + 0.5) * canvas.clientWidth, (-a.y * 0.5 + 0.5) * canvas.clientHeight], [(c.x * 0.5 + 0.5) * canvas.clientWidth, (-c.y * 0.5 + 0.5) * canvas.clientHeight]);
      } else if (paused && marketT != null) {
        // HALFWAY MARKET: freeze-frame of the race, slow orbit around the leaders
        marketT += dt;
        const stm = sim.stateAt(Math.max(0, b));
        const l0 = stm.byId[stm.order[0]];
        const lead = stm.order.slice(0, 3).map((id) => stm.byId[id]).filter((r) => Math.abs(r.m - l0.m) < 25);
        const c = new THREE.Vector3(); for (const r of lead) c.add(new THREE.Vector3(r.x, r.y, r.z)); c.divideScalar(Math.max(1, lead.length));
        if (!marketBase) marketBase = Math.atan2(camera.position.x - c.x, camera.position.z - c.z);
        const a = marketBase + marketT * 0.12, R = 10 + Math.min(25, l0.m - lead.at(-1).m) * 0.4;
        const k = Math.min(1, marketT / 1.2); const ease = k * k * (3 - 2 * k);
        const px = c.x + Math.sin(a) * R, pz = c.z + Math.cos(a) * R;
        camera.position.set(px, Math.max(c.y + 3 + ease * 2, C.heightAt(px, pz) + 2.5), pz);
        camera.lookAt(c.x, c.y + 2.3, c.z); setFov(44);
      } else director.update(b, ddt, shots);
      st = b >= 0 ? sim.stateAt(b) : null;
      // cut away trees between a tracking camera and its subject
      const occ = !freeze && marketT == null && ['side', 'headon', 'finishcam'].includes(director.shot?.type);
      world.setOcclusionCorridor(occ ? camera.position : null, occ ? director.cam.look : null);
      if (b < 0) { for (const id of ids) runners[id].update(ddt, {}); }
      else applyRace(b, freeze > 0 ? 0 : ddt);
      const shotType = director.shot?.type;
      updateSun(director.cam.look, WIDE_SHOTS.has(shotType) ? 160 : 70);
    } else if (mode === 'podium' && podium) {
      world.setOcclusionCorridor(null);
      podium.update(ddt, wall);
      for (const id of ids) runners[id].update(ddt, {});
      updateSun(podium.center, 40);
    } else {
      for (const id of ids) runners[id].update(ddt, {});
      if (mode === 'idle') {
        const s = C.sample(0); const a = wall * 0.12;
        camera.position.set(s.x + Math.sin(a) * 14, s.y + 4.5, s.z + Math.cos(a) * 14); camera.lookAt(s.x, s.y + 1.2, s.z); setFov(45);
      }
      updateSun(new THREE.Vector3(startSlots[ids[0]]?.x ?? 0, 0, startSlots[ids[0]]?.z ?? 0), mode === 'intro' && introState?.idx === -1 ? 160 : 40);
    }
    hudDt += dt;
    if (noRender) return;
    scaleRings(); // intermediate sub-step: simulation only
    world.update(wall);
    funfair?.update(wall);
    const rpos = ids.map((id) => runners[id].root.position);
    crowd.update(wall, camera.position, rpos, mode === 'podium' ? 0.9 : null);
    hud.update(hudDt, mode === 'race' ? hudState(st, b > -1 && marketT == null) : hudState(null, false));
    hudDt = 0;
    renderer.render(scene, camera);
  }
  // Real elapsed wall time drives the clock (no slow motion on slow GPUs). It is sub-stepped in <=0.1 s chunks so no
  // event is skipped; a long gap (background tab) catches up at most MAX_CATCHUP s per frame.
  const MAX_CATCHUP = 2;
  function loop(now) {
    if (disposed) return;
    raf = requestAnimationFrame(loop);
    const real = Math.max(0, (now - last) / 1000); last = now;
    frameStats.frames++; frameStats.acc += real; if (frameStats.acc > 1) { frameStats.fps = frameStats.frames / frameStats.acc; frameStats.frames = 0; frameStats.acc = 0; }
    advance(Math.min(MAX_CATCHUP, real) * speed);
  }
  function advance(total) {
    let left = total;
    if (left <= 1e-6) { frame(0); return; }
    while (left > 1e-6) { const step = Math.min(left, 0.1); left -= step; frame(step, left > 1e-6); }
  }
  if (!opts.manualLoop) raf = requestAnimationFrame(loop);

  function dispose() {
    disposed = true; cancelAnimationFrame(raf);
    ro?.disconnect(); window.removeEventListener('resize', resize);
    for (const id in rings) for (const c of rings[id].children) c.material.dispose(); ringGeo.dispose();
    clearPodium();
    for (const id of ids) { scene.remove(runners[id].root); runners[id].dispose(); }
    crowd.dispose(); funfair?.dispose(); dressing.dispose(); world.dispose(); hud.dispose();
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    disposeRunnerGeometry(); disposeMaterialCache();
    renderer.dispose(); renderer.forceContextLoss?.(); canvas.remove();
  }

  // debug / test helpers (used by preview + screenshot harness)
  const debug = {
    seek(bb, warm = 1.2) { seekRace(bb, warm); paused = true; frame(0); },
    introAt(idx, t = 1.5) {
      playIntro(() => {}, {}); paused = false;
      if (idx < 0) { introState.t = t; advanceIntro(0); frame(0); paused = true; return; }
      introState.t = introState.fly; advanceIntro(0);
      while (introState && introState.idx < idx) { introState.t = introState.segStart + introState.per + 0.01; advanceIntro(0); }
      for (let i = 0; i < t * 30; i++) { advanceIntro(1 / 30); for (const id of ids) runners[id].update(1 / 30, {}); }
      paused = true; frame(0);
    },
    podiumAt(t = 3) { hud.introCard(null); showPodium(null); for (let i = 0; i < t * 30; i++) { podium.update(1 / 30, i / 30); for (const id of ids) runners[id].update(1 / 30, {}); } paused = true; frame(0); },
    photoAt() { this.seek(sim.firstFinishB - 0.05); paused = false; photoDone = false; for (let i = 0; i < 3; i++) frame(1 / 30); paused = true; frame(0); },
    render() { frame(0); },
    unpause() { paused = false; },
    lookFrom(px, py, pz, lx, ly, lz, fov = 45) { mode = 'debugcam'; camera.position.set(px, py, pz); camera.lookAt(lx, ly, lz); setFov(fov); hud.setDim(true); renderer.render(scene, camera); },
    step(dt, render = true) { frame(dt, !render); },
    get mode() { return mode; },
    get b() { return b; }, get shots() { return shots; }, get sim() { return sim; }, C, get director() { return director; }, renderer, scene, camera, info: () => renderer.info, fps: () => frameStats.fps,
  };

  return {
    playIntro, playRace, showPodium,
    // During the race, pausing shows the HALFWAY MARKET freeze-frame (slow orbit; broadcast time does not advance).
    setPaused(p, { market = true, marketText } = {}) {
      p = !!p; if (p === paused) return; paused = p;
      if (mode === 'race' && freeze <= 0 && opts.marketOnPause !== false && market) {
        if (p) { marketT = 0; marketBase = 0; hud.market(true, marketText ?? opts.marketText ?? 'Place your halfway bets!'); canvas.style.filter = 'saturate(1.2) contrast(1.06)'; }
        else { marketT = null; hud.market(false); canvas.style.filter = ''; director.reset(false); }
      }
    },
    setSpeed(x) { speed = Math.max(0.05, Number(x) || 1); },
    seek,
    loadPlan(pl, { backedBy: bb } = {}) {
      if (mode === 'race') throw new Error('createRaceView: loadPlan during a race');
      if (bb) applyBackedBy(bb);
      setupPlan(pl);
    },
    setBackedBy(bb) {
      applyBackedBy(bb);
      // re-plan the camera (backed-runner preference) unless a race is mid-broadcast
      if (sim && mode !== 'race') { shots = buildShotList({ plan, sim, backedIds, hasDiversion, C, world, funfair }); }
    },
    dispose,
    /** extras */
    hudRoot: hud.root,
    get broadcastTime() { return mode === 'intro' ? (introState?.t ?? 0) : b; },
    get durationS() { return sim ? PRE_ROLL + sim.lastFinishB + 3.5 : 0; },
    preRollS: PRE_ROLL,
    _debug: debug,
  };
}
