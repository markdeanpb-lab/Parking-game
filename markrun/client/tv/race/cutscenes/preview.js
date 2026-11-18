// Cutscene preview: play any cutscene on demand on a real race plan.
//   /client/tv/race/cutscenes/preview.html?cutscene=<kind|all>&fixture=<name>&shot=1
// kind = goose_toll | everest | treadmill_hill | spaghetti_legs | cannonball | raincloud | mirror_signal | ice_cream_van |
//        photographer | sore_loser_var | hook_a_duck | test_strength | all (the plan the game would make)
// Funfair kinds default to the funfair fixture. Buttons replay each planned cutscene from 1.5 s before it.
// Harness API: window.__cuts.at(id, t) -> renders the frame t wall-seconds into cutscene `id`.
import { createRaceView } from '../index.js';
import { planCutscenes } from '../../../../server/game/cutscenes.mjs';

const qs = new URLSearchParams(location.search);
async function j(u) { const r = await fetch(u); if (!r.ok) throw new Error(`${u}: ${r.status}`); return r.json(); }
const FUN = new Set(['hook_a_duck', 'test_strength', 'funfair']);
async function main() {
  const kind = qs.get('cutscene') || 'all';
  const cfx = qs.get('cfx'); // a real-data field where this batch-2 gag's trigger really fires (cutscenes/fixtures/<kind>.json)
  const fx = qs.get('fixture') || (FUN.has(kind) ? 'funfair' : 'real');
  const [course, park, round] = await Promise.all([j('/data/course/course.json'), j('/data/course/park.json'), j(cfx ? `/client/tv/race/cutscenes/fixtures/${cfx}.json` : `/client/tv/race/fixtures/${fx}.json`)]);
  if (qs.get('shot')) document.body.classList.add('shot');
  const plan = round.racePlan;
  const force = kind === 'all' || kind === 'funfair' || cfx ? null : kind;
  const mem = qs.get('night') ? JSON.parse(qs.get('night')) : null; // e.g. {"cutscenes":{"bell":2,"wall":{"shown":2,"holes":3}}}
  let cs = planCutscenes({ racePlan: plan, runners: round.csRunners || round.public.runners, rng: cfx ? round.seed : Number(qs.get('seed') || 7), force, roundNumber: Number(qs.get('round') || 3), sessionMemory: mem });
  if (cfx) cs = cs.filter((c) => c.kind === (kind === 'all' ? cfx : kind));
  if (force && !['hook_a_duck', 'test_strength'].includes(force)) cs = cs.filter((c) => c.kind === force);
  if (kind === 'funfair' || ['hook_a_duck', 'test_strength'].includes(force)) cs = cs.filter((c) => c.group?.startsWith('funfair'));
  if (qs.get('variant')) for (const c of cs) if (c.kind === force) c.params.variant = qs.get('variant');
  const planWith = { ...plan, cutscenes: cs };
  const backedBy = { r2: ['Mark'], r4: ['Mrs M'] };
  const sub = document.getElementById('sub');
  const view = createRaceView(document.getElementById('stage'), { course, park, round: round.public, plan: planWith, backedBy, preserveDrawingBuffer: !!qs.get('shot'), manualLoop: !!qs.get('shot'), onWinnerStamp: () => {} });
  window.view = view; window.__plan = planWith;
  const onEvent = (e) => { if (e.kind === 'commentary' && e.cutscene) sub.textContent = `${e.speaker.toUpperCase()}: ${e.text}`; };
  view.playRace(onEvent, () => { sub.textContent = 'Race over'; });
  const d = view._debug;
  const entry = (id) => d.cuts.debug.entries().find((e) => e.cs.id === id || e.cs.kind === id);
  // jump to t wall-seconds into a cutscene (stepping the real clock + cutscene logic at 30 fps, rendering once)
  function at(id, t = 1, { warm = 0.6 } = {}) {
    const e = entry(id); if (!e) throw new Error(`no cutscene ${id}`);
    const c = e.cs;
    const pre = c.mode === 'slowmo' ? 0.02 : 0.02;
    d.seek(c.atBroadcastS - pre, warm); d.unpause();
    // slow-mo windows and live beats inside them: start from the slow-mo so the clock is eased as in the real broadcast
    const slow = d.cuts.debug.entries().find((x) => x.cs.mode === 'slowmo' && x.cs.atBroadcastS <= c.atBroadcastS && x.cs.params.untilBroadcastS >= c.atBroadcastS);
    void slow;
    let guard = 0;
    while (guard++ < 4000) { if (e.status === 'active' && e.t >= t) break; if (e.status === 'done') break; d.step(1 / 30, false); }
    d.step(0, true);
    return { status: e.status, t: e.t, b: d.b };
  }
  window.__cuts = { at, list: () => d.cuts.list, plan: planWith };
  const ctl = document.getElementById('ctl');
  for (const c of cs) {
    const btn = document.createElement('button'); btn.textContent = `${c.id} ${c.kind} (${c.mode})`;
    btn.onclick = () => { d.seek(Math.max(-8, c.atBroadcastS - (c.mode === 'post' ? 0.5 : 1.5))); d.unpause(); };
    ctl.appendChild(btn);
  }
  if (!qs.get('shot') && cs[0] && qs.get('auto') !== '0') { d.seek(Math.max(-8, cs[0].atBroadcastS - 1.5)); d.unpause(); }
  window.__ready = true;
}
main().catch((e) => { console.error(e); document.getElementById('sub').textContent = String(e); window.__error = String(e); });
