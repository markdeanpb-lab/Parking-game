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
//   freezes for photoFreezeS (default 1.4 s) with a caption). onDone fires 3.5 s after the last finisher.
// Finish set-piece: the finish-line camera (low, side-on, telephoto) locks on ~150 m out; the broadcast clock eases to
//   0.35x for ~1 s either side of the first finish (all runners equally, so order/timing are untouched); the photo
//   freeze (margins <= 1.5 s) follows; then a ~3.2 s instant REPLAY of the winner's last 60 m from a head-on angle
//   (broadcast time holds still during it, nothing fires). Then onEvent({kind:'winner_replay_done', winnerId,
//   photoFinish}) and opts.onWinnerStamp?.({winnerId, photoFinish}) fire: the shell shows its stamp there (without
//   the hook the view shows its own WINNER stinger). opts.finishSlowMo=false / opts.finishReplay=false disable them.
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
// Iteration 4 (3D broadcast pass):
// - opts.players / setPlayers(players): [{ name, avatar: { emoji, colour } }] (the shell's player list). backedBy may hold
//   names or { name, avatar } objects; backers then show as their avatars on the position tower, the floating name
//   tags, the PiP map and the ground rings. Without avatars the view falls back to coloured initials.
// - Framing: runners at ~40-45% of the frame height in the tracking shots (director.js); no mid-race drone, a
//   picture-in-picture course map instead; floating name + position tags (never stacked, hidden in close-ups).
// - Finish: head-on camera that parks beyond the line, full-colour photo finish with a verdict, a place camera for
//   the battle behind the winner (on runaways > 8 s, the finale follows the backed battle for the places).
// - Themes: round.public.theme.visual = { season, weather, time } (fallback: theme.key) drives sky, light, fog, grade,
//   particles, puddles, breath and crowd outfits (weather.js). Runner looks come from shared/portrait.js resolveLook().
import * as THREE from 'three';
import { buildCourse, PATH_W } from './course.js';
import { buildWorld, mulberry } from './world.js';
import { buildCrowd, crowdMembersFromZones, setCrowdStyle } from './crowd.js';
import { buildWeather, themeVisual, crowdStyleFor } from './weather.js';
import { createRunner, disposeRunnerGeometry } from './runner.js';
import { createSim, fmtTime } from './sim.js';
import { buildShotList, createDirector, easeInOut, WIDE_SHOTS, TRACK_SHOTS } from './director.js';
import { createHijinks } from './hijinks/index.js';
import { timeAtDistance, raceToBroadcast } from '../../../server/game/raceplan.mjs';
import { createHud, ordText, shortOf, backerInfo } from './hud.js';
import { buildFunfair } from './funfair.js';
import { outlineUniforms, disposeMaterialCache, toon, mesh, canvasTexture } from './toon.js';
import { buildPodium } from './podium.js';
import { buildDressing } from './dressing.js';
import { createCutscenePlayer } from './cutscenes/index.js'; // racePlan.cutscenes playback (cutscene engineer)

const PRE_ROLL = 8.5; // broadcast seconds of helicopter + start line before the gun (b runs from -PRE_ROLL)

export function createRaceView(container, opts = {}) {
  const { course, park, round } = opts;
  let plan = opts.plan || null;
  let backedBy = opts.backedBy || {};
  let backedIds = Object.keys(backedBy).filter((k) => (backedBy[k] || []).length);
  let players = opts.players || [];
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
  // the round's theme drives season / weather / light (round.public.theme.visual, else theme.key)
  const visual = themeVisual(round?.theme);
  setCrowdStyle(crowdStyleFor(visual), visual.weather === 'wind' ? 1 : 0);
  let funfair = null, fairCrowd = null;
  const crowdMembers = crowdMembersFromZones(C, world.anchors.crowdZones, 5, world.onPath, world.blocked);
  const dressing = buildDressing(scene, C, world, park);
  crowdMembers.push(...dressing.crowd);
  // one instanced crowd per zone so off-screen clusters are frustum-culled
  const byZone = new Map(); for (const m of crowdMembers) { const k = m.zone ?? 'x'; if (!byZone.has(k)) byZone.set(k, []); byZone.get(k).push(m); }
  const crowds = [...byZone.values()].map((list) => buildCrowd(scene, list));
  const weather = buildWeather({ scene, world, hemi, sun, sunDir, C, visual });
  const crowd = { update: (...a) => { crowds.forEach((c) => c.update(...a)); fairCrowd?.update(...a); }, setMask: (fn) => { crowds.forEach((c) => c.setMask(fn)); fairCrowd?.setMask(fn); }, dispose: () => { crowds.forEach((c) => c.dispose()); fairCrowd?.dispose(); } };

  // ---------- runners ----------
  const runners = {};
  for (const r of runnersPub) { const rr = createRunner(r); runners[r.id] = rr; scene.add(rr.root); }
  const ids = runnersPub.map((r) => r.id);
  const pubById = Object.fromEntries(runnersPub.map((r) => [r.id, r]));

  // ---------- HUD ----------
  const hud = createHud(container, { runners: runnersPub, backedBy, players, course, park, C });
  let podium = null;
  // cutscenes (cutscenes/index.js): holds / eases the broadcast clock, drives camera + props while one plays
  const cuts = createCutscenePlayer({ scene, camera, renderer, canvas, container, hudRoot: hud.root, C, world, runners, pubById, ids,
    getPlan: () => plan, getSim: () => sim, getFunfair: () => funfair, updateSun: (v, sz) => updateSun(v, sz),
    emit: (e) => { try { raceCb?.onEvent?.(e); } catch (err) { console.error(err); } } });
  // live hijinks (hijinks/index.js): plan.hijinks played ON the running race (props + animation only; nothing pauses)
  const hij = createHijinks({ scene, camera, C, world, runners, pubById, container, getPlan: () => plan, getSim: () => sim, getPlayers: () => players, getShot: () => director?.shot,
    emit: (e) => { try { raceCb?.onEvent?.(e); } catch (err) { console.error(err); } } });

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
      shots = buildShotList({ plan, sim, backedIds, hasDiversion, C, world, funfair, hijinks: plan.hijinks || [] });
      director = createDirector({ camera, C, sim, world, funfair }); director.setBacked(backedIds);
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
  // finish set-piece: slow motion on the line (all runners equally), then an instant replay, then the winner stamp
  let replay = null, replayDone = false, curSlow = 1, freeze0 = 1, photoVerdict = false, maskKind = '';
  const SLOW = 0.35, REPLAY_S = 3.2;
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
      const p = { speed: s.vRace, rate: st.rate * curSlow, slope: s.slope };
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
      r.update(dt * curSlow, p);
    }
  }

  // ---------- name tags / HUD state ----------
  const proj = new THREE.Vector3();
  let _rects = null, _rectsAt = -1;
  const hudRects = () => { if (_rectsAt !== wall || !_rects) { const cr = canvas.getBoundingClientRect(); _rects = [...hud.root.querySelectorAll('.mr-tower, .mr-map, .mr-top, .mr-close.on')].filter((e) => !hud.root.classList.contains('mr-dim') && !(hud.root.classList.contains('mr-dimtop') && !e.classList.contains('mr-map')) && !(e.classList.contains('mr-map') && hud.root.classList.contains('mr-nomap'))).map((e) => {
        const r = e.getBoundingClientRect(); let right = r.right, bottom = r.bottom;
        if (e.classList.contains('mr-tower')) {
          // the tower element has no height (rows are absolute): use the visible rows
          for (const row of e.querySelectorAll('.mr-row:not(.off)')) { const br = row.getBoundingClientRect(); bottom = Math.max(bottom, br.bottom); right = Math.max(right, br.right); }
        }
        return { left: r.left - cr.left, right: right - cr.left, top: r.top - cr.top, bottom: bottom - cr.top };
      }); _rectsAt = wall; } return _rects; };
  const tagState = {}; let lastTagShot = null;
  function hudState(st, showTags = true) {
    camera.updateMatrixWorld(); // project with this frame's camera (not last frame's)
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const focal = h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
    const tags = [];
    const track = mode === 'race' && TRACK_SHOTS.has(director?.shot?.type);
    // runners a live hijink is happening to: their tag always shows (it must be clear who it's happening to)
    const hjIds = new Set(); for (const hj of plan?.hijinks || []) if (b >= Math.min(hj.telegraphAtBroadcastS ?? 1e9, hj.atBroadcastS - 0.6) && b < (hj.untilBroadcastS ?? hj.endBroadcastS ?? hj.atBroadcastS + 4) + 1.5) { hjIds.add(hj.who); if (hj.other) hjIds.add(hj.other); }
    const cutNow = director?.shot !== lastTagShot; lastTagShot = director?.shot;
    const wideShot = director?.shot?.type === 'wide';
    for (const id of ids) {
      const r = runners[id];
      proj.set(r.root.position.x, r.root.position.y + r.height + (r.popping ? 1.4 : 0.5), r.root.position.z); // above any emote bubble
      const dist = proj.distanceTo(camera.position);
      proj.project(camera);
      const pxTall = (r.height / Math.max(0.1, dist)) * focal;
      const S0 = tagState[id];
      const hj = hjIds.has(id);
      // the body's vertical extent on screen (the tag may sit at the top edge when the head is above the frame)
      const fy = new THREE.Vector3(r.root.position.x, r.root.position.y + 0.3, r.root.position.z).project(camera).y;
      const onScreen = proj.z < 1 && proj.z > -1 && Math.abs(proj.x) < 0.95 && fy < 0.95 && proj.y > -0.75;
      // size hysteresis: appears above ~9% of the frame height, stays down to ~7%
      const bigEnough = pxTall > h * (S0?.on ? 0.07 : 0.09) || hj || wideShot; // (the establishing wide: position badges)
      const sx = (proj.x * 0.5 + 0.5) * w, sy = (-proj.y * 0.5 + 0.5) * h;
      const close = pxTall > h * 0.55; // close-up: a small tag above the head instead of none
      tags.push({ id, x: sx, y: sy - 4, want: showTags && track && onScreen && bigEnough, hard: !showTags || !track || !onScreen, hj, pos: st ? st.order.indexOf(id) + 1 : 0, px: pxTall,
        scale: close ? 0.72 : THREE.MathUtils.clamp(0.75 + pxTall / h * 0.6, 0.8, 1.05), dist, mini: false,
        body: { l: sx - pxTall * 0.24, r: sx + pxTall * 0.24, t: sy, b: sy + pxTall * 1.05 } });
    }
    // a runner hidden behind a nearer one gets no tag (unless a hijink is happening to them)
    for (const t of tags) if (t.want && !t.hj && tags.some((o) => o !== t && o.dist < t.dist - 1 && t.x > o.body.l && t.x < o.body.r && t.y + 10 > o.body.t && t.y < o.body.b)) t.want = false;
    // never stacked: hijink runners, then backed runners, then by position; a clash shrinks a tag to its position badge
    // (hijink tags never shrink or hide), then hides it
    const orderNow = st ? st.order : ids;
    tags.sort((a, b) => (b.hj - a.hj) || (backedIds.includes(b.id) - backedIds.includes(a.id)) || (orderNow.indexOf(a.id) - orderNow.indexOf(b.id)));
    const placed = [];
    const rects = hudRects();
    const hit = (box, p, m = 4) => box.l < p.r + m && box.r > p.l - m && box.t < p.b + m && box.b > p.t - m;
    // what other tags must never cover: the whole body of a runner a gag is happening to, and the head of any nearer,
    // bigger runner (a tag on a face reads as clutter)
    const keepClear = (t) => tags.filter((o) => o !== t && o.want && (o.hj || (o.dist < t.dist - 1 && o.px > h * 0.18))).map((o) => (o.hj ? o.body : { l: o.body.l, r: o.body.r, t: o.body.t, b: o.body.t + (o.body.b - o.body.t) * 0.38 }));
    for (const t of tags) {
      if (!t.want) continue;
      const [, th0] = hud.tagSize(t.id);
      t.y = Math.max(t.y, th0 * t.scale + 12); // keep a close-up's tag inside the frame
      let ok = false;
      const prevMini = tagState[t.id]?.mini;
      const clear = t.hj ? [] : keepClear(t);
      for (const mini of t.hj ? [false] : wideShot ? [true] : prevMini ? [true, false] : [false, true]) {
        const [tw0] = hud.tagSize(t.id); const tw = (mini ? th0 * 1.5 : tw0) * t.scale, th = th0 * t.scale, pad = 8;
        const box = { l: t.x - tw / 2, r: t.x + tw / 2, t: t.y - th - 6, b: t.y + 4 };
        if (t.hj) {
          // a gag's tag always shows: slide it clear of the tower / map / bars (sideways first, else below)
          for (const rc of rects) {
            if (!hit(box, { l: rc.left, r: rc.right, t: rc.top, b: rc.bottom }, pad)) continue;
            const dxR = rc.right + pad - box.l, dxL = box.r - (rc.left - pad);
            const dx = (dxR <= dxL || rc.left - pad - tw < 0) && rc.right + pad + tw < w ? dxR : -dxL;
            if (Math.abs(dx) < tw * 1.3 && box.l + dx >= 0 && box.r + dx <= w) { box.l += dx; box.r += dx; t.x += dx; }
            else { const dy = rc.bottom + pad - box.t; box.t += dy; box.b += dy; t.y += dy; }
          }
          placed.push(box); t.mini = false; ok = true; break;
        }
        if (placed.some((p) => hit(box, p))) continue;
        if (clear.some((p) => hit(box, p, 2))) continue;
        if (rects.some((rc) => hit(box, { l: rc.left, r: rc.right, t: rc.top, b: rc.bottom }, pad))) continue;
        placed.push(box); t.mini = mini; ok = true; break;
      }
      if (!ok) { t.want = false; t.hjBlock = tags.some((o) => o.hj && o.want && o !== t && hit({ l: t.x - th0, r: t.x + th0, t: t.y - th0 - 6, b: t.y + 4 }, o.body, 2)); }
    }
    // stability: show after 0.2 s of wanting (at once for a hijink / right after a cut), stay up >= 1.2 s, hide after
    // 0.45 s of not wanting (at once when off screen); badge <-> full name only after 0.5 s; CSS fades both ways
    for (const t of tags) {
      const S1 = tagState[t.id] ||= { on: false, chg: -1e9, wantT: null, unwantT: null, mini: false, miniT: null };
      if (t.want) { S1.unwantT = null; S1.wantT ??= wall; } else { S1.wantT = null; S1.unwantT ??= wall; }
      if (!S1.on && t.want && (t.hj || cutNow || wall - S1.wantT >= 0.2)) { S1.on = true; S1.chg = wall; S1.mini = t.mini; }
      else if (S1.on && !t.want && !t.hj && (t.hard || t.hjBlock || (wall - S1.unwantT >= 0.45 && wall - S1.chg >= 1.2))) { S1.on = false; S1.chg = wall; }
      if (S1.on && t.mini !== S1.mini) { S1.miniT ??= wall; if (wall - S1.miniT >= 0.5 || t.hj) { S1.mini = t.mini; S1.miniT = null; } } else S1.miniT = null;
      t.visible = S1.on && !(t.hard && !t.hj && !t.want); t.mini = S1.mini && !t.hj;
      if (t.hard && t.hj && !t.want) t.visible = false; // a hijink runner off the screen: nothing to point at
    }
    if (!st) {
      if (mode !== 'race') return { tags, closing: null };
      // before the gun: no positions yet, so no tower rows
      return { tags, raceS: 0, leaderM: 0, map: false, closing: null, order: ids.map((id) => ({ id, hidden: true, gapText: '' })) };
    }
    // compact tower: top 3 + backed runners outside the top 3; gaps only in the final km / after finishing, or when a
    // backed runner is within ~5 s of the place ahead (then shown as the gap to that runner)
    const finalKm = st.leader.m >= 4000;
    const order = st.order.map((id, i) => {
      const r = st.byId[id];
      const show = i < 3 || backedIds.includes(id) || hjIds.has(id); // a runner a gag is happening to is on the tower
      let gapText = finalKm || r.finished ? (r.gapText === 'LEADER' ? '' : r.gapText) : '';
      if (r.finished && sim.photoFinish && id === sim.finishOrder[1] && /^\+0(\.0)?s$/.test(gapText || '')) gapText = 'PHOTO';
      if (!gapText && backedIds.includes(id) && i > 0 && !r.finished) {
        const ahead = st.byId[st.order[i - 1]];
        const g = st.raceS - timeAtDistance(sim.byId[st.order[i - 1]].progress, r.m);
        if (!ahead.finished && g >= 0 && g <= 5) gapText = `↑${g.toFixed(1)}s`;
      }
      return { id, gapText, finished: r.finished, hidden: !show };
    });
    return {
      raceS: st.raceS, leaderM: st.leader.m, tags, order, map: mapOn(), closing: closingBar(st),
      dots: st.order.map((id, i) => ({ x: st.byId[id].x, z: st.byId[id].z, colour: pubById[id].colour.primary, lead: i === 0, focus: director?.shot?.ids?.includes(id), ring: backedBy[id]?.length ? backerInfo(backedBy[id][0], players).colour : null })),
    };
  }

  // picture-in-picture course map: through the race, not in the finish set-piece / replays / freeze-frames
  function mapOn() { const t = director?.shot?.type; return mode === 'race' && b > 0.5 && !replay && freeze <= 0 && marketT == null && !['finishcam', 'linecam', 'placecam', 'celebrate'].includes(t) && !(sim && b > sim.firstFinishB); }

  // ---------- closing-gap bar: the one backed duel that matters most right now ----------
  let closeState = null;
  function closingBar(st) {
    // breakaway shot: the gap graphic (leader clear of the chaser)
    if (director?.shot?.type === 'breakaway' && !replay && freeze <= 0 && st.order.length > 1) {
      const l = st.order[0], c2 = st.order[1];
      if (!st.byId[l].finished) { const g = st.raceS - timeAtDistance(sim.byId[l].progress, st.byId[c2].m); return { id: l, name: shortOf(pubById[l]), colour: pubById[l].colour.primary, text: `clear by ${g.toFixed(1)} s`, hot: false }; }
    }
    if (!backedIds.length || replay || freeze > 0 || marketT != null) { closeState = null; return null; }
    const gapS = (aheadId, behindId) => st.raceS - timeAtDistance(sim.byId[aheadId].progress, st.byId[behindId].m);
    const cands = [];
    st.order.forEach((id, i) => {
      if (i === 0 || st.byId[id].finished || st.byId[st.order[i - 1]].finished) return;
      const ahead = st.order[i - 1];
      const bIn = backedIds.includes(id), aIn = backedIds.includes(ahead);
      if (!bIn && !aIn) return;
      const g = gapS(ahead, id);
      if (g >= 0 && g <= 5) cands.push({ key: `${ahead}>${id}`, ahead, behind: id, g, who: bIn ? id : ahead, role: bIn ? 'chase' : 'hunted' });
    });
    // keep the current duel unless it's gone (> 5.5 s) or another is clearly tighter
    let cur = closeState && cands.find((c) => c.key === closeState.key);
    if (!cur && closeState) { const [a, bh] = closeState.key.split('>'); const g = !st.byId[bh].finished && st.order.indexOf(bh) === st.order.indexOf(a) + 1 ? gapS(a, bh) : 99; if (g <= 5.5) cur = { ...closeState, g }; }
    const tight = cands.sort((x, y) => x.g - y.g)[0];
    if (!cur || (tight && tight.key !== cur.key && tight.g < cur.g * 0.6)) cur = tight ? { ...tight, g0: tight.g } : null;
    if (!cur) { closeState = null; return null; }
    if (!closeState || closeState.key !== cur.key) closeState = { ...cur, g0: cur.g0 ?? cur.g };
    const g0 = closeState.g0, g = cur.g, name = shortOf(pubById[cur.who]);
    const colour = pubById[cur.who].colour.primary;
    if (g < 0.5) return { id: cur.who, text: 'ALONGSIDE!', name, colour, hot: true };
    const closingIn = g < g0 - 0.15;
    const verb = cur.role === 'chase' ? (closingIn ? 'closing' : 'chasing') : (closingIn ? 'under pressure' : 'holding on');
    return { id: cur.who, name, colour, text: closingIn ? `${verb}: ${g0.toFixed(1)} s → ${g.toFixed(1)} s` : `${verb}: ${g.toFixed(1)} s`, hot: g < 1.5 };
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
        const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: backerInfo(name, players).colour, transparent: true, opacity: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
        m.scale.setScalar(1 + k * 0.32); m.position.y = 0.06 + k * 0.01; m.renderOrder = 2; g.add(m);
      });
    }
  }
  function scaleRings() {
    for (const id of ids) { const g = rings[id]; if (!g || !g.children.length) continue; const d = camera.position.distanceTo(runners[id].root.position); g.scale.setScalar(THREE.MathUtils.clamp(d * 0.016, 0.9, 3.2)); }
  }
  updateRings();

  // the camera->subject sightline (2D) for the crowd mask of tracking shots
  const sight = { ax: 0, az: 0, bx: 0, bz: 0 };
  function corridorMask(x, z) {
    const vx = sight.bx - sight.ax, vz = sight.bz - sight.az, L2 = vx * vx + vz * vz || 1;
    if (sight.near && (x - sight.ax) ** 2 + (z - sight.az) ** 2 < 144) return true; // close hijink cameras: nobody right in the lens
    const u = ((x - sight.ax) * vx + (z - sight.az) * vz) / L2; if (u < 0.03 || u > 0.92) return false;
    const px = sight.ax + vx * u - x, pz = sight.az + vz * u - z; return px * px + pz * pz < (sight.near ? 16 : 2.2 * 2.2);
  }
  // bunting (and the picket fences: they'd fill the low side-on line cameras' foreground)
  function setBunting(on) { const T = world.theme; for (const o of [T.flags, T.poles, T.rope, T.fences]) if (o) o.visible = on; }
  // the photo-finish camera stands on the park side of the line
  let _ps = 0; function photoSide() { if (!_ps) { const f = world.anchors.finish; _ps = world.inPark(f.x + f.rx * 16, f.z + f.rz * 16) ? 1 : -1; } return _ps; }

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
    b = -PRE_ROLL; evIdx = 0; countdownIdx = 0; freeze = 0; photoDone = false; raceDone = false; replay = null; replayDone = false; curSlow = 1; hud.replay(false); firedBanners.clear(); for (const k in pairBanner) delete pairBanner[k]; titleShown = !!opts.skipRaceTitle; hud.setDimTop(false);
    raceCb = { onEvent, onDone };
    placeAtStart('idle');
    director.reset();
    cuts.reset(); hij.reset();
  }
  const countdowns = [[-3, '3'], [-2, '2'], [-1, '1'], [0, 'GO!']];
  // short stingers (UI_SPEC: <= 1.5 s, upper third, one at a time)
  const pairBanner = {};
  function bannerFor(e) {
    switch (e.type) {
      case 'lead_change': return ['LEAD CHANGE', '', '#ff3d8b'];
      case 'overtake': {
        // one stinger per duel: a back-and-forth between the same two inside 12 s, or a pass that is also the lead
        // changing hands (that one gets LEAD CHANGE), doesn't repeat it
        const pair = [e.by, e.on].sort().join('|'), at = e.broadcastS ?? b;
        if ((plan.events || []).some((x) => x.type === 'lead_change' && Math.abs((x.broadcastS ?? -9) - at) < 0.3 && x.to === e.by)) return null;
        if (at - (pairBanner[pair] ?? -99) < 12) { pairBanner[pair] = at; return null; }
        pairBanner[pair] = at;
      }
        return backedIds.includes(e.by) || backedIds.includes(e.on) ? ['OVERTAKE', pubById[e.by] && pubById[e.on] ? `${shortOf(pubById[e.by])} passes ${shortOf(pubById[e.on])}` : '', '#2e6fe0'] : null;
      case 'hill': return ['THE HILL', '', '#3aa845'];
      case 'lap': return ['LAP 2', '', '#2e6fe0'];
      case 'final_stretch': return ['FINAL STRETCH', '', '#ff8a1f'];
      case 'diversion': return firedBanners.has('div') ? null : (firedBanners.add('div'), ['DISTRACTED!', '', '#b04bff']);
      case 'finish': return e.place === 1 && !sim.photoFinish ? ['WINNER!', shortOf(pubById[sim.finishOrder[0]]), '#ffb000', 2.2] : null;
      default: return null;
    }
  }
  function stepRace(dt) {
    if (freeze > 0) {
      freeze -= dt;
      // the verdict lands after the scan (~60% of the freeze)
      if (!photoVerdict && freeze < freeze0 * 0.4) {
        photoVerdict = true; const [a1, a2] = sim.finishOrder;
        const mg = sim.byId[a2].officialS - sim.byId[a1].officialS;
        hud.photoResult(shortOf(pubById[a1]), photoMargin(mg));
      }
      if (freeze <= 0) { freeze = 0; hud.photo(false); world.anchors.finishArch.visible = true; setBunting(true); startReplay(); }
      return;
    }
    if (replay) { stepReplay(dt); return; }
    if (cuts.hold(dt, b)) return; // freeze / replay / post cutscene: the broadcast clock holds, resumes at the same b
    const prev = b;
    curSlow = slowFactor(b) * cuts.rate(b); // slow-mo cutscenes ease the shared clock (every runner equally)
    b = cuts.clamp(prev, b + dt * curSlow);
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
      photoDone = true; b = sim.firstFinishB; freeze = freeze0 = opts.photoFreezeS ?? 2.8; photoVerdict = false;
      { const [a1, a2] = sim.finishOrder; hud.photo(true, { a: shortOf(pubById[a1]), b: shortOf(pubById[a2]) }); }
      raceCb?.onEvent?.({ kind: 'photo_finish', broadcastS: b, ids: sim.finishOrder.slice(0, 2) });
    }
    // instant replay once the slow-mo has eased out (photo finishes go via the freeze-frame first)
    if (!replayDone && !replay && b >= sim.firstFinishB + 1.1) startReplay();
    if (!raceDone && b >= sim.lastFinishB + 3.5) { raceDone = true; raceCb?.onDone?.(); }
  }
  // the verdict's margin: the clock's gap, or (a dead heat on the clock) how far back the runner-up was on the line
  function photoMargin(mg) {
    if (mg >= 0.95) return `${mg.toFixed(mg < 1.5 ? 1 : 0)} s`;
    const st0 = sim.stateAt(sim.firstFinishB), r2 = st0.byId[sim.finishOrder[1]];
    const m = Math.max(0, 5000 - (r2.finished ? 5000 : r2.m));
    const md = m < 0.08 ? 'a nose' : m < 1 ? `${Math.round(m * 100)} cm` : `${m.toFixed(1)} m`;
    return mg < 0.5 ? `${md} (same time!)` : md;
  }
  // 0.35x for ~1 s either side of the first finish, eased in/out over 0.6 s (same clock for every runner)
  function slowFactor(bb) {
    if (!sim || opts.finishSlowMo === false) return 1;
    const d = Math.abs(bb - sim.firstFinishB);
    const w = d < 1 ? 1 : d < 1.6 ? 1 - smooth01((d - 1) / 0.6) : 0;
    return 1 - (1 - SLOW) * w;
  }
  function smooth01(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
  function startReplay() {
    if (replayDone || opts.finishReplay === false) { replayDone = true; afterReplay(); return; }
    const win = sim.byId[sim.finishOrder[0]];
    const b0 = Math.max(0, raceToBroadcast(plan.timeMap, timeAtDistance(win.progress, 5000 - 60)));
    replay = { t: 0, b0, b1: sim.firstFinishB + 0.6, resume: b };
    hud.replay(true);
  }
  function stepReplay(dt) {
    replay.t += dt;
    if (replay.t >= REPLAY_S) { replay = null; replayDone = true; hud.replay(false); director.reset(true); afterReplay(); }
  }
  function replayB() { const u = Math.min(1, replay.t / REPLAY_S); return replay.b0 + (replay.b1 - replay.b0) * (1 - Math.pow(1 - u, 1.7)); }
  function afterReplay() {
    const winnerId = sim.finishOrder[0];
    const info = { kind: 'winner_replay_done', winnerId, photoFinish: !!sim.photoFinish, broadcastS: b };
    try { raceCb?.onEvent?.(info); } catch (err) { console.error(err); }
    if (opts.onWinnerStamp) { try { opts.onWinnerStamp({ winnerId, photoFinish: !!sim.photoFinish }); } catch (err) { console.error(err); } }
    else hud.showBanner('WINNER!', shortOf(pubById[winnerId]), '#ffb000', 2.4);
  }

  function applyBackedBy(bb) {
    backedBy = bb || {};
    backedIds = Object.keys(backedBy).filter((k) => (backedBy[k] || []).length);
    hud.setBackedBy(backedBy); director?.setBacked(backedIds);
    updateRings();
  }

  // ---------- seeking (TV reload / resume mid-broadcast) ----------
  function seekRace(bb, warm = 1.2) {
    if (!sim) throw new Error('createRaceView: seek in a race needs a plan');
    bb = Math.max(-PRE_ROLL, Math.min(sim.lastFinishB + 3.5, Number(bb) || 0));
    mode = 'race'; introState = null; clearPodium(); raceCb = raceCb || {};
    hud.setDim(false); hud.introCard(null); hud.results(null); hud.photo(false); hud.market(false); hud.clearBanner(); hud.titleCard(false); hud.setDimTop(false);
    canvas.style.filter = ''; world.anchors.finishArch.visible = true; setBunting(true); marketT = null; freeze0 = 1; photoVerdict = false;
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
    replay = null; replayDone = b >= sim.firstFinishB + 1.1; curSlow = 1; hud.replay(false);
    cuts.seek(b); hij.seek(b);
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
        setBunting(false); // nothing hanging between the photo camera and the line
        // frame the line and the runner-up: both big, side-on, low
        const st2 = sim.stateAt(b), s2 = st2.byId[sim.finishOrder[1]];
        const back = Math.min(7, Math.max(0.8, 5000 - s2.m)); // metres the runner-up still has to go
        const midA = -back / 2 + 0.3, Ls = photoSide();
        const fitH = Math.max(3.6, (back + 4.5) / 1.78);
        const camD = 11;
        camera.position.set(f.x + f.rx * camD * Ls + f.tx * midA, f.y + 2.3, f.z + f.rz * camD * Ls + f.tz * midA);
        camera.lookAt(f.x + f.tx * midA, f.y + 1.15, f.z + f.tz * midA); setFov(THREE.MathUtils.radToDeg(2 * Math.atan(fitH / (2 * camD))));
        camera.updateMatrixWorld();
        const a = new THREE.Vector3(f.x + f.rx * 3, f.y + 0.05, f.z + f.rz * 3).project(camera), c = new THREE.Vector3(f.x - f.rx * 3, f.y + 0.05, f.z - f.rz * 3).project(camera);
        hud.photoLine([(a.x * 0.5 + 0.5) * canvas.clientWidth, (-a.y * 0.5 + 0.5) * canvas.clientHeight], [(c.x * 0.5 + 0.5) * canvas.clientWidth, (-c.y * 0.5 + 0.5) * canvas.clientHeight]);
      } else if (replay) {
        // REPLAY: low head-on telephoto from beyond the line, re-evaluated from the sim
        const f = world.anchors.finish, rb = replayB(), w = sim.stateAt(rb).byId[sim.finishOrder[0]];
        camera.position.set(f.x + f.tx * 30 + f.rx * 2.2, f.y + 1.1, f.z + f.tz * 30 + f.rz * 2.2);
        camera.lookAt(w.x, w.y + 1.0, w.z); setFov(13);
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
      if (replay) st = sim.stateAt(replayB());
      // cut away trees between a tracking camera and its subject
      const occ = freeze <= 0 && marketT == null && TRACK_SHOTS.has(director.shot?.type);
      // the side-on place and close-finish line cameras look across the line, the gantry back through it: the arch's
      // legs would fill their frames; the bunting and fences hang across the side-on lines of sight
      const onLine = ['linecam', 'placecam'].includes(director.shot?.type) && !replay;
      if (freeze <= 0) { // (freeze ends slightly negative: "!freeze" would be false for good after a photo finish)
        world.anchors.finishArch.visible = !((onLine || director.shot?.cam?.name === 'gantry') && !replay); setBunting(!onLine); }
      world.setOcclusionCorridor(occ ? camera.position : null, occ ? director.cam.look : null);
      // keep spectators out of the sightline: the camera->subject corridor of tracking shots, and the near side of
      // the line for the side-on place / photo cameras
      const stype = director.shot?.type;
      const kind = freeze > 0 || stype === 'linecam' ? `photo${photoSide()}` : replay ? '' : stype === 'placecam' ? `place${director.shot.fside || 0}` : TRACK_SHOTS.has(stype) ? 'corridor' : '';
      if (kind !== maskKind) {
        maskKind = kind;
        const f = world.anchors.finish;
        if (kind.startsWith('photo') || kind.startsWith('place')) {
          const sd = kind.startsWith('photo') ? photoSide() : director.shot.fside || 1;
          crowd.setMask((x, z) => { const lat = ((x - f.x) * f.rx + (z - f.z) * f.rz) * sd, al = (x - f.x) * f.tx + (z - f.z) * f.tz; return lat > 0 && lat < 17 && al > -30 && al < 14; });
        } else if (kind === 'corridor') crowd.setMask(corridorMask);
        else crowd.setMask(null);
      }
      if (kind === 'corridor') { sight.near = stype?.startsWith('gag') || stype === 'hillside' || !!director.shot?.angled || !!director.shot?.cam?.hill; /* (cameras standing among the spectators) */ sight.ax = camera.position.x; sight.az = camera.position.z; sight.bx = director.cam.look.x; sight.bz = director.cam.look.z; }
      if (b < 0) { for (const id of ids) runners[id].update(ddt, {}); }
      else if (replay) { const u = Math.min(1, replay.t / REPLAY_S); curSlow = Math.max(0.2, (replay.b1 - replay.b0) / REPLAY_S * 1.7 * Math.pow(1 - u, 0.7)); applyRace(replayB(), ddt); }
      else applyRace(b, freeze > 0 ? 0 : ddt);
      const shotType = director.shot?.type;
      updateSun(director.cam.look, WIDE_SHOTS.has(shotType) ? 160 : 70);
      cuts.frame(ddt, b);
      if (!replay && b >= 0) hij.frame(ddt, b);
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
    if (noRender) { weather.update(wall, Math.min(0.1, dt), camera, null, ids.map((id) => runners[id]), true); return; }
    scaleRings(); // intermediate sub-step: simulation only
    world.update(wall);
    funfair?.update(wall);
    const rpos = ids.map((id) => runners[id].root.position);
    crowd.update(wall, camera.position, rpos, mode === 'podium' ? 0.9 : null);
    weather.update(wall, Math.min(0.1, dt), camera, mode === 'race' && director ? director.cam.look : null, ids.map((id) => runners[id]));
    hud.update(hudDt, mode === 'race' ? hudState(st, b > -1 && marketT == null && !replay && !cuts.active) : hudState(null, false));
    hudDt = 0;
    renderer.render(scene, camera);
    cuts.afterRender();
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
    cuts.dispose(); hij.dispose(); crowd.dispose(); weather.dispose(); funfair?.dispose(); dressing.dispose(); world.dispose(); hud.dispose();
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
    // tallest on-screen runner's height as a fraction of the frame height (framing checks)
    runnerFrac() {
      camera.updateMatrixWorld(); let best = 0; const a = new THREE.Vector3(), c = new THREE.Vector3();
      for (const id of ids) { const r = runners[id]; a.copy(r.root.position).project(camera); c.copy(r.root.position).setY(r.root.position.y + r.height).project(camera); if (a.z > 1 || Math.abs(a.x) > 1 || a.y > 1.2 || c.y < -1.2) continue; best = Math.max(best, Math.abs(c.y - a.y) / 2); }
      return best;
    },
    lookFrom(px, py, pz, lx, ly, lz, fov = 45) { mode = 'debugcam'; camera.position.set(px, py, pz); camera.lookAt(lx, ly, lz); setFov(fov); hud.setDim(true); renderer.render(scene, camera); },
    step(dt, render = true) { frame(dt, !render); },
    cuts, hij,
    get mode() { return mode; },
    visual, get b() { return b; }, get shots() { return shots; }, get sim() { return sim; }, C, get director() { return director; }, renderer, scene, camera, info: () => renderer.info, fps: () => frameStats.fps,
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
    // the shell's players ([{ name, avatar: { emoji, colour } }]): backers show as avatars on the tower, tags and map
    setPlayers(list) { players = list || []; hud.setPlayers(players); updateRings(); },
    seek,
    loadPlan(pl, { backedBy: bb } = {}) {
      if (mode === 'race') throw new Error('createRaceView: loadPlan during a race');
      if (bb) applyBackedBy(bb);
      setupPlan(pl);
    },
    setBackedBy(bb) {
      applyBackedBy(bb);
      // re-plan the camera (backed-runner preference) unless a race is mid-broadcast
      if (sim && mode !== 'race') { shots = buildShotList({ plan, sim, backedIds, hasDiversion, C, world, funfair, hijinks: plan.hijinks || [] }); }
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
