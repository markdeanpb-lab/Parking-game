// MARKRUN hijinks preview: one real round played as a self-contained page (tools/build_hijinks_preview.mjs inlines it).
// Reads its data from <script type="application/json" id="mr-data">. No fetch, no server.
// URL: ?shot=1 (harness: no controls, manual loop, no autoplay)
import { createRaceView } from '../index.js';

const D = JSON.parse(document.getElementById('mr-data').textContent);
const qs = new URLSearchParams(location.search);
const SHOT = !!qs.get('shot');
if (SHOT) document.body.classList.add('shot');
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const view = createRaceView($('stage'), {
  course: D.course, park: D.park, round: D.round, plan: D.plan, backedBy: D.backedBy, players: D.players,
  maxPixelRatio: 1.25, preserveDrawingBuffer: SHOT, manualLoop: SHOT, introCards: false,
});
window.view = view; window.__data = D;

// ---- subtitles on the broadcast clock (so pause / 2x / skip behave) ----
const subs = $('subs');
let sub = null;
function say(e) {
  const b = view._debug.b;
  subs.innerHTML = `<div class="sub"><span class="who ${e.speaker === 'pam' ? 'pam' : 'jeff'}">${e.speaker === 'pam' ? 'PAM' : 'JEFF'}</span><span>${esc(e.text)}</span></div>`;
  sub = { until: b + Math.max(3, e.text.split(/\s+/).length * 0.42 + 1.4), el: subs.firstElementChild, pri: e.hijink ? 3 : (e.priority || 2), at: b };
}
function tickSubs() {
  const b = view._debug.b;
  if (sub && (b > sub.until || b < sub.at - 0.5)) { subs.innerHTML = ''; sub = null; }
}
const onEvent = (e) => {
  if (e.kind !== 'commentary' || !e.text) return;
  // a hijink line has the floor for its few seconds
  if (sub && sub.pri === 3 && !e.hijink && view._debug.b < sub.until) return;
  say(e);
};

// ---- flow: title card -> race (flyover, countdown) -> podium ----
let state = 'title', finished = false;
function startRace() {
  $('title').classList.add('gone'); $('end').classList.remove('on');
  state = 'race'; finished = false; subs.innerHTML = ''; sub = null;
  view.setPaused(false, { market: false });
  view.playRace(onEvent, () => { finished = true; setTimeout(() => { if (finished) { view.showPodium(null); $('end').classList.add('on'); } }, 1500); });
  setPlayBtn();
}
function restart() { view.setSpeed(speed); startRace(); }
let paused = false, speed = 1;
function setPlayBtn() { $('bPlay').textContent = paused ? 'Play' : 'Pause'; }
function togglePause() { if (state !== 'race') return; paused = !paused; view.setPaused(paused, { market: false }); setPlayBtn(); }
function nextHijink() {
  if (state !== 'race') startRace();
  const b = view._debug.b;
  const h = (D.plan.hijinks || []).find((x) => x.atBroadcastS - 2.6 > b + 0.5);
  if (!h) return;
  subs.innerHTML = ''; sub = null; finished = false; $('end').classList.remove('on');
  view.seek(h.atBroadcastS - 2.6);
  if (paused) { paused = false; view.setPaused(false, { market: false }); setPlayBtn(); }
}
function toggleSpeed() { speed = speed === 1 ? 2 : 1; view.setSpeed(speed); $('bSpeed').textContent = `${speed}x`; }
$('bPlay').onclick = togglePause; $('bRestart').onclick = restart; $('bNext').onclick = nextHijink; $('bSpeed').onclick = toggleSpeed; $('bAgain').onclick = restart;
addEventListener('keydown', (e) => { if (e.key === ' ') { e.preventDefault(); togglePause(); } else if (e.key === 'n' || e.key === 'ArrowRight') nextHijink(); else if (e.key === 'r') restart(); else if (e.key === 's') toggleSpeed(); });
(function loop() { tickSubs(); requestAnimationFrame(loop); })();

// the title card, then go
$('tMark').textContent = D.backers.Mark; $('tJo').textContent = D.backers.Jo;
window.__start = startRace; window.__say = say; window.__tick = tickSubs;
if (!SHOT) setTimeout(startRace, 3600);
window.__ready = true;
