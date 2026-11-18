// MARKRUN cutscene playback (docs/CUTSCENE_IDEAS.md). Plays racePlan.cutscenes (planned by server/game/cutscenes.mjs).
//
// createCutscenePlayer(ctx) -> { hold(dt, b), rate(b), clamp(prev, next), frame(dt, b), afterRender(), seek(b), reset(),
//                                active, dispose(), debug }
// ctx: { scene, camera, renderer, canvas, container, hudRoot, C, world, runners: {id: runner}, pubById, ids,
//        getPlan(), getSim(), getFunfair(), emit(evt), updateSun(vec3, size) }
//
// Clock contract (never changes a result):
//   - 'freeze' / 'replay' / 'post': hold(dt, b) returns true while the cutscene plays, so the race view does not advance
//     the broadcast clock; it resumes at exactly the same broadcast second. clamp() stops the clock exactly on atBroadcastS.
//   - 'slowmo': rate(b) multiplies the broadcast clock rate between atBroadcastS and params.untilBroadcastS (eased),
//     identically for every runner (it is the shared clock).
//   - 'inset' / 'pre': play live; the clock runs normally.
// Visual-only overrides (camera, props, stand-in actors, hidden runners, lateral offsets) are applied after the race view
// has placed the runners for the frame, and are undone when the cutscene ends.
import * as THREE from 'three';
import { createOverlay } from './overlay.js';
import { Bag, stageAt, setCam } from './kit.js';
import { SCENES } from './scenes.js';
import './scenes2.js'; // batch 2 (docs/CUTSCENE_IDEAS_2.md) registers into SCENES
import { slowRate, clampStep } from './clock.js';

const INTRO = 0.55, OUTRO = 0.35;
const PAUSE_MODES = new Set(['freeze', 'replay']);

export function createCutscenePlayer(ctx) {
  const ov = createOverlay(ctx.container, ctx.hudRoot);
  let planRef = null, list = [];
  const persist = { bag: new Bag(ctx.scene), store: new Map(), updaters: new Map() };
  let curB = -99, liveCam = null;
  const pipCam = new THREE.PerspectiveCamera(40, 16 / 9, 0.3, 9000); // the sky dome is r=5000

  function resetPersist() { persist.bag.dispose(); persist.bag = new Bag(ctx.scene); persist.store.clear(); persist.updaters.clear(); }
  function sync() {
    const p = ctx.getPlan();
    if (p === planRef) return;
    endAll(); resetPersist();
    planRef = p;
    list = (p?.cutscenes || []).filter((c) => SCENES[c.kind] && Number.isFinite(c.atBroadcastS)).map((c) => ({ cs: c, status: 'pending', t: 0, inst: null, tail: 0 }))
      .sort((a, b) => a.cs.atBroadcastS - b.cs.atBroadcastS);
  }

  // ---------- kit context handed to every scene ----------
  function K(cs) {
    return {
      THREE, cs, ov, persist, scene: ctx.scene, camera: ctx.camera, C: ctx.C, world: ctx.world, renderer: ctx.renderer,
      sim: ctx.getSim(), plan: ctx.getPlan(), funfair: ctx.getFunfair?.() || null,
      runners: ctx.runners, ids: ctx.ids, pub: (id) => ctx.pubById[id],
      b: () => curB,
      stage: (m, who = null) => stageAt(ctx.C, m, who),
      say(line) { if (line?.text) ctx.emit?.({ kind: 'commentary', text: line.text, speaker: line.speaker || 'jeff', priority: 3, cutscene: cs.id, broadcastS: curB }); },
      cam(pos, look, fov = 40, roll = 0, { occlude = true, sun = 45 } = {}) {
        setCam(ctx.camera, pos, look, fov, roll);
        liveCam = { pos: pos.clone(), look: look.clone() };
        if (occlude) ctx.world.setOcclusionCorridor?.(pos, look);
        if (sun) ctx.updateSun?.(look, sun);
      },
      pipCam,
      pipCamSet(pos, look, fov = 40) { pipCam.position.copy(pos); pipCam.lookAt(look); if (pipCam.fov !== fov) { pipCam.fov = fov; pipCam.updateProjectionMatrix(); } },
    };
  }

  // ---------- lifecycle of one cutscene ----------
  function start(e) {
    e.status = 'active'; e.t = 0;
    try { e.inst = SCENES[e.cs.kind](K(e.cs), e.cs); } catch (err) { console.error('[cutscene] build failed', e.cs.kind, err); e.status = 'done'; e.inst = null; return; }
    e.pausing = PAUSE_MODES.has(e.cs.mode) || e.cs.mode === 'post';
    e.dur = Math.max(0.5, Number(e.cs.durationS) || e.inst.dur || 4);
    e.tail = e.pausing ? (e.inst.tailS || 0) : 0;
    e.inst.setVisible?.(!e.pausing); // pausing scenes appear after the freeze-frame sting
    ctx.emit?.({ kind: 'cutscene', phase: 'start', id: e.cs.id, cutscene: e.cs.kind, mode: e.cs.mode, who: e.cs.who, durationS: e.dur, broadcastS: curB });
  }
  function end(e) {
    if (e.status !== 'active') return;
    e.status = 'done';
    try { e.inst?.dispose?.(); } catch (err) { console.error(err); }
    e.inst = null;
    restoreRunners(); liveCam = null;
    ov.clear(); ctx.canvas && (ctx.canvas.style.filter = '');
    ctx.emit?.({ kind: 'cutscene', phase: 'end', id: e.cs.id, cutscene: e.cs.kind, broadcastS: curB });
  }
  function endAll() { for (const e of list) if (e.status === 'active') end(e); }
  const holder = () => list.find((e) => e.status === 'active' && e.pausing && e.t < e.dur);

  let hidden = new Set();
  function hideRunners(ids) {
    for (const id of ctx.ids) { const v = !ids.includes(id); const r = ctx.runners[id]; if (r && r.root.visible !== v) r.root.visible = v; if (!v) hidden.add(id); }
  }
  function restoreRunners() { for (const id of hidden) { const r = ctx.runners[id]; if (r) r.root.visible = true; } hidden = new Set(); }

  // ---------- clock hooks ----------
  function rate(b) { sync(); return slowRate(list.filter((e) => e.status !== 'skipped').map((e) => e.cs), b); }
  function clamp(prev, next) { sync(); return clampStep(list.filter((e) => e.status === 'pending').map((e) => e.cs), prev, next); }
  // called once per simulation sub-step while the race clock would run; returns true to hold the clock
  function hold(dt, b) {
    sync(); curB = b;
    for (const e of list) if (e.status === 'pending' && e.cs.mode !== 'slowmo' && b >= e.cs.atBroadcastS - 1e-6 && !holder()) start(e);
    for (const e of list) {
      if (e.status !== 'active') continue;
      e.t += dt;
      if (e.t >= e.dur + e.tail) end(e);
    }
    return !!holder();
  }

  // ---------- visuals (after the race view placed runners + camera for this frame) ----------
  let pipActive = null;
  function frame(dt, b) {
    curB = b;
    pipActive = null; liveCam = null;
    for (const [, fn] of persist.updaters) fn(dt, b);
    const act = list.filter((e) => e.status === 'active' && e.inst);
    if (!act.length) { if (hidden.size) restoreRunners(); return false; }
    let owns = false, paused = false, stampOn = false;
    let wantHide = [];
    for (const e of act) {
      const I = e.inst, c = e.cs;
      if (e.pausing && e.t < e.dur) {
        const g = e.t - INTRO, gagDur = e.dur - INTRO - OUTRO;
        paused = c.mode !== 'post';
        if (e.t < INTRO) {
          // freeze-frame sting on the live picture
          ov.tint(true); ov.banner(I.banner || (c.mode === 'replay' ? 'ACTION REPLAY' : c.mode === 'post' ? (I.postBanner || 'MEANWHILE…') : 'HOLD IT!'), c.mode === 'replay' ? '#2e6fe0' : '#ff3d8b');
          if (ctx.canvas) ctx.canvas.style.filter = 'grayscale(.6) contrast(1.15) brightness(1.05)';
          I.setVisible?.(false);
        } else if (g < gagDur) {
          if (ctx.canvas) ctx.canvas.style.filter = '';
          ov.tint(false); if (e.t > INTRO + 0.5) ov.banner(null);
          I.setVisible?.(true);
          wantHide = I.hide === 'none' ? wantHide : ctx.ids;
          I.update(g, dt, b, { gagDur, phase: 'gag' });
          owns = true; stampOn = true;
        } else {
          // match-cut back to the frozen frame
          I.setVisible?.(false); ov.caption(null); ov.big(null); ov.banner(null); ov.clearPrints?.();
          if (ctx.canvas) ctx.canvas.style.filter = '';
          I.outro?.();
        }
      } else if (e.pausing) {
        // live tail after a freeze (e.g. the van chasing alongside once the race resumes)
        I.setVisible?.(true);
        I.tail?.(e.t - e.dur, dt, b);
        if (I.tailCamera) owns = true;
        stampOn = true;
      } else {
        I.update(e.t, dt, b, { gagDur: e.dur, phase: 'live' });
        for (const o of I.pipOnly || []) o.visible = false; // staged copies only appear inside the inset
        if (I.camera) owns = true;
        if (I.pip) { pipActive = { e, I }; }
        if (I.stamp !== false) stampOn = true;
        if (I.hide && I.hide !== 'none') wantHide = I.hide;
      }
    }
    if (wantHide.length) hideRunners(wantHide); else restoreRunners();
    ov.paused(paused); ov.cut(stampOn || !!pipActive);
    ov.stamp(stampOn, pipActive && !owns ? { pip: ov.pipRect() } : {});
    if (pipActive) ov.pip(ov.pipRect(), { label: pipActive.I.pipLabel || 'MEANWHILE…', caption: pipActive.I.pipCaption || null });
    else ov.pip(null);
    if (owns && !liveCam) { /* scene drove the camera directly */ }
    return owns;
  }
  // persistent props (e.g. the funfair sign) still need their per-frame animation when nothing is active
  function idle(dt, b) { for (const [, fn] of persist.updaters) fn(dt, b); }

  // picture-in-picture pass (after the main render)
  function afterRender() {
    if (!pipActive) return;
    const { I } = pipActive, R = ctx.renderer;
    const rect = ov.pipRect();
    const cw = ctx.container.clientWidth || 1920, chh = ctx.container.clientHeight || 1080;
    // inset border: 0.5u
    const u = Math.min(cw / 100, chh * 1.78 / 100), bw = Math.round(u * 0.5);
    const x = rect.x + bw, y = rect.y + bw, w = rect.w - bw * 2, h = rect.h - bw * 2;
    pipCam.aspect = w / h; pipCam.updateProjectionMatrix();
    const mainOnly = I.mainOnly || [], pipOnly = I.pipOnly || [];
    for (const o of mainOnly) o.visible = false; for (const o of pipOnly) o.visible = true;
    const vis = [];
    for (const id of I.pipHide || []) { const r = ctx.runners[id]; if (r?.root.visible) { r.root.visible = false; vis.push(r); } }
    const prevVp = new THREE.Vector4(); R.getViewport(prevVp);
    const prevSc = new THREE.Vector4(); R.getScissor(prevSc); const prevTest = R.getScissorTest();
    R.setScissorTest(true); R.setScissor(x, chh - y - h, w, h); R.setViewport(x, chh - y - h, w, h);
    R.render(ctx.scene, pipCam);
    R.setViewport(prevVp); R.setScissor(prevSc); R.setScissorTest(prevTest);
    for (const o of mainOnly) o.visible = true; for (const o of pipOnly) o.visible = false;
    for (const r of vis) r.root.visible = true;
  }

  function seek(b) {
    sync(); endAll(); curB = b;
    for (const e of list) e.status = e.cs.mode === 'slowmo' ? 'pending' : (e.cs.atBroadcastS < b - 1e-6 ? 'done' : 'pending');
  }
  function reset() { sync(); endAll(); resetPersist(); for (const e of list) { e.status = 'pending'; e.t = 0; } }

  return {
    hold, rate, clamp, frame, idle, afterRender, seek, reset,
    get active() { return list.some((e) => e.status === 'active' && e.inst && ((e.pausing && e.t >= INTRO && e.t < e.dur - OUTRO) || (!e.pausing && e.inst.camera))); },
    get holding() { return !!holder(); },
    get list() { sync(); return list.map((e) => ({ ...e.cs, status: e.status })); },
    dispose() { endAll(); resetPersist(); ov.dispose(); },
    debug: {
      // start a cutscene now regardless of its time (preview); returns the entry
      start(idOrKind) { sync(); const e = list.find((x) => x.cs.id === idOrKind) || list.find((x) => x.cs.kind === idOrKind); if (e) { endAll(); e.status = 'pending'; start(e); } return e?.cs || null; },
      entries: () => list,
      INTRO, OUTRO,
    },
  };
}
