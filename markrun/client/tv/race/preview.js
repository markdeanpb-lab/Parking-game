// Standalone dev page for the race view: intro -> race -> podium with the fixture round.
// URL params: ?fixture=funfair|photo (client/tv/race/fixtures/*.json, default data/fixtures/round.json)
//             &auto=0 (don't autoplay)  &backed=r2,r5  &shot=1 (harness mode: no controls)
import { createRaceView } from './index.js';

const qs = new URLSearchParams(location.search);
async function j(u) { const r = await fetch(u); if (!r.ok) throw new Error(`${u}: ${r.status}`); return r.json(); }
async function main() {
const fx = qs.get('fixture');
const [course, park, round] = await Promise.all([
  j('/data/course/course.json'), j('/data/course/park.json'),
  j(fx ? `/client/tv/race/fixtures/${fx}.json` : '/data/fixtures/round.json'),
]);
if (qs.get('shot')) document.body.classList.add('shot');
// default: Mark backs r2, Mrs M backs r4, both back r1 (as the shell would pass it)
const backedBy = {};
if (qs.get('backed') != null) qs.get('backed').split(',').filter(Boolean).forEach((id, i) => (backedBy[id] = [i % 2 ? 'Mrs M' : 'Mark']));
else Object.assign(backedBy, { r2: ['Mark'], r4: ['Mrs M'], r1: ['Mark', 'Mrs M'] });
const sub = document.getElementById('sub');
const view = createRaceView(document.getElementById('stage'), {
  course, park, round: round.public, plan: round.racePlan, backedBy, speed: Number(qs.get('speed')) || 1, preserveDrawingBuffer: !!qs.get('shot'), manualLoop: !!qs.get('shot'),
  onIntroRunner: (id) => { const r = round.public.runners.find((x) => x.id === id); sub.textContent = `${r.nickname} - ${r.tagline}`; },
});
window.view = view; window.__create = createRaceView; window.__data = { course, park, round };
const onEvent = (e) => { if (e.kind === 'commentary') sub.textContent = e.text; if (e.kind === 'countdown') sub.textContent = e.text; };
const actions = {
  intro: () => view.playIntro(() => { sub.textContent = '(betting would happen here)'; if (qs.get('auto') !== '0') setTimeout(actions.race, 1500); }),
  race: () => view.playRace(onEvent, () => { sub.textContent = 'Race over'; setTimeout(actions.podium, 2500); }),
  podium: () => view.showPodium(null),
  pause: (() => { let p = false; return () => view.setPaused((p = !p)); })(),
};
document.getElementById('ctl').addEventListener('click', (e) => { const a = e.target.dataset?.a; if (a) actions[a](); });
if (!qs.get('shot')) setInterval(() => { document.getElementById('fps').textContent = `${view._debug.fps().toFixed(0)} fps`; }, 1000);
if (qs.get('auto') !== '0' && !qs.get('shot')) actions.intro();
window.__ready = true;
}
main().catch((e) => { console.error(e); document.getElementById('sub').textContent = String(e); window.__error = String(e); });
