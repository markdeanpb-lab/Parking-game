// MARKRUN TV shell: lobby, intros, betting, reveal, race broadcast, results, scoreboard, finale.
// Query params (testing): ?speed=8 (speed up TV-side timers + race), ?race=2d (force 2D race), ?autostart (skip the
// "press any key" overlay), ?mute.
import { connect } from '../shared/net.js';
import { createAudio } from '../shared/sfx.js';
import { $, $$, esc, el, money, signedMoney, ordinalHtml, avatarHtml, countUp, runnerById, betLabel, betOdds, confetti, fmtTime } from '../shared/ui.js';
import { runnerPortrait } from '../shared/portrait.js';
import { createVoice } from './voice.js';
import { createFallbackRaceView } from './fallback-race.js';
import { Race3D } from './race-bridge.js';

const params = new URLSearchParams(location.search);
const SPEED = Math.max(0.25, Number(params.get('speed')) || 1);
const FORCE_2D = params.get('race') === '2d';
const T = (ms) => Math.round(ms / SPEED);
window.__markrun = { events: [], speed: SPEED };
const log = (e) => { window.__markrun.events.push({ at: Date.now(), ...e }); if (window.__markrun.events.length > 500) window.__markrun.events.shift(); };

const stage = $('#stage');
const screenEl = $('#screen');
const hudBottom = $('#hud-bottom');
const subsEl = $('#subs');
const reactEl = $('#reactions');
const nextHint = $('#next-hint');
const raceLayer = $('#race-layer');

let S = null;
let screen = null; // { key, update?, destroy? }
let gestureDone = params.has('autostart');
let localMute = params.has('mute');
const audio = createAudio();
const voice = createVoice({ onLine: showSub, onIdle: () => { audio.duck(false); } });

// ---------- stage scaling ----------
function fit() {
  const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  stage.style.transformOrigin = 'center center';
  stage.style.left = '50%'; stage.style.top = '50%';
}
window.addEventListener('resize', fit);
fit();

// ---------- data the race view needs (local files only) ----------
let worldData = null;
const worldPromise = Promise.all([
  fetch('/data/course.json').then((r) => r.json()),
  fetch('/data/park.json').then((r) => r.json()).catch(() => null),
]).then(([course, park]) => { worldData = { course, park }; return worldData; });

// ---------- networking ----------
const net = connect({
  role: 'tv',
  onStatus: (st) => { $('#conn').classList.toggle('hidden', st === 'open' || st === 'connecting'); },
  onState: (st) => onState(st),
  onMessage: (m) => {
    if (m.t === 'react') spawnReaction(m.playerId, m.emoji);
    else if (m.t === 'error') toast(m.msg, 'red');
  },
});
const send = (m) => net.send(m);

// ---------- gesture / audio unlock ----------
function unlockAll() {
  if (gestureDone && audio.ready()) return;
  gestureDone = true;
  audio.unlock();
  $('#gesture').classList.add('gone');
  try { window.speechSynthesis?.getVoices(); } catch { /* */ }
  applyAudioSettings();
  if (S) phaseMusic(S, true);
}
if (gestureDone) $('#gesture').classList.add('gone');
$('#gesture').addEventListener('click', unlockAll);
window.addEventListener('pointerdown', () => { if (!audio.ready()) unlockAll(); });

function applyAudioSettings() {
  const st = S?.settings || {};
  audio.setVolume(st.volume ?? 0.8);
  audio.setMuted(localMute);
  audio.setMusicEnabled(st.music !== false);
  voice.setEnabled(!localMute && st.voice !== false && SPEED <= 1.5);
  voice.setVolume(Math.min(1, (st.volume ?? 0.8) + 0.1));
  $('#btn-mute').textContent = localMute ? '🔇' : '🔊';
}
$('#btn-mute').addEventListener('click', (e) => { e.stopPropagation(); localMute = !localMute; applyAudioSettings(); });
$('#btn-fs').addEventListener('click', (e) => { e.stopPropagation(); toggleFs(); });
function toggleFs() { if (document.fullscreenElement) document.exitFullscreen?.(); else document.documentElement.requestFullscreen?.().catch(() => {}); }

let cursorTimer;
window.addEventListener('mousemove', () => { document.body.classList.remove('hide-cursor'); clearTimeout(cursorTimer); cursorTimer = setTimeout(() => document.body.classList.add('hide-cursor'), 3000); });

// ---------- keyboard ----------
window.addEventListener('keydown', (e) => {
  if (e.target.closest?.('input, textarea')) return;
  if (!gestureDone) { unlockAll(); return; }
  if (!audio.ready()) audio.unlock();
  const k = e.key;
  if (k === 'm' || k === 'M') { localMute = !localMute; applyAudioSettings(); toast(localMute ? 'Muted' : 'Sound on'); return; }
  if (k === 'f' || k === 'F') { toggleFs(); return; }
  if (k === 'l' || k === 'L') { if (S?.phase === 'BETTING' && !S.revealed) { send({ t: 'forceLock' }); toast('Locking everyone in!'); } return; }
  if (k === ' ' || k === 'Enter' || k === 'ArrowRight' || k === 'n' || k === 'N') { e.preventDefault(); advance(); }
});
function advance() {
  if (!S) return;
  if (S.phase === 'LOBBY' && !S.players.length) { toast('Scan the QR code to join first!', 'red'); return; }
  if (S.phase === 'BETTING' && !S.revealed) { toast('Waiting for everyone to lock in (press L to force it)'); return; }
  send({ t: 'advance', from: S.phase, stage: S.phase === 'RESULTS' ? S.resultsStage : undefined });
}

// ---------- state handling ----------
let prevPlayers = new Map();
function onState(st) {
  const prev = S;
  S = st;
  applyAudioSettings();
  // presence / joins / locks: little moments
  const now = new Map(st.players.map((p) => [p.id, p]));
  if (prev) {
    for (const p of st.players) {
      const old = prevPlayers.get(p.id);
      if (!old) { audio.play('join'); if (st.phase === 'LOBBY') voice.say(`${p.name} has entered the paddock!`, 'pam', { priority: 1 }); }
      else if (!old.locked && p.locked && st.phase === 'BETTING') { audio.play('lock'); voice.say(lockLine(p.name), Math.random() < 0.5 ? 'jeff' : 'pam', { priority: 1 }); }
      else if (old.connected && !p.connected) setTimeout(() => { const q = S?.players.find((x) => x.id === p.id); if (q && !q.connected) toast(`${p.name}'s phone dropped out — it'll reconnect`, 'red'); }, 5000);
    }
  }
  prevPlayers = now;
  const key = screenKey(st);
  if (!screen || screen.key !== key) switchScreen(key, st, prev);
  else screen.update?.(st, prev);
  renderHud(st);
  renderNextHint(st);
  phaseMusic(st);
}

function screenKey(st) {
  const rid = st.round?.roundId || '';
  if (st.phase === 'BETTING') return `BETTING|${rid}|${st.revealed ? 'reveal' : 'bet'}`;
  if (['INTRO', 'RACE', 'RESULTS', 'SCOREBOARD'].includes(st.phase)) return `${st.phase}|${rid}`;
  return `${st.phase}|${st.gameNumber}`;
}

function switchScreen(key, st, prev) {
  try { screen?.destroy?.(); } catch (e) { console.warn(e); }
  screenEl.innerHTML = '';
  voice.clear();
  subsEl.innerHTML = '';
  const phase = st.phase;
  document.body.className = document.body.className.replace(/\bphase-\w+/g, '').trim() + ` phase-${phase}`;
  document.body.classList.toggle('racing', phase === 'RACE' || (phase === 'INTRO' && !!raceView));
  log({ type: 'screen', key });
  const make = {
    LOBBY: lobbyScreen, INTRO: introScreen, BETTING: st.revealed ? revealScreen : bettingScreen,
    RACE: raceScreen, RESULTS: resultsScreen, SCOREBOARD: scoreScreen, FINALE: finaleScreen,
  }[phase];
  screen = make ? make(st, prev) : { };
  screen.key = key;
  if (phase !== 'RACE' && phase !== 'RESULTS' && phase !== 'INTRO') disposeRaceView();
}

let lastMusic = null;
function phaseMusic(st, force = false) {
  if (!gestureDone) return;
  const want = { LOBBY: 'lobby', BETTING: st.revealed ? null : 'betting', SCOREBOARD: 'lobby', RESULTS: null, INTRO: null, RACE: null, FINALE: null }[st.phase];
  if (want === lastMusic && !force) return;
  lastMusic = want;
  if (want) audio.startMusic(want); else audio.stopMusic(1.2);
}

// ---------- shared HUD bits ----------
function rankOf(players) {
  const sorted = [...players].sort((a, b) => b.bankroll - a.bankroll);
  const rank = new Map();
  sorted.forEach((p, i) => rank.set(p.id, i > 0 && p.bankroll === sorted[i - 1].bankroll ? rank.get(sorted[i - 1].id) : i + 1));
  return rank;
}
function renderHud(st) {
  const show = ['INTRO', 'BETTING', 'RACE'].includes(st.phase) && !(st.phase === 'BETTING' && st.revealed);
  hudBottom.classList.toggle('hidden', !show);
  document.body.classList.toggle('no-hud', !show);
  if (!show) { hudBottom.innerHTML = ''; return; }
  const rank = rankOf(st.players);
  const backs = st.phase === 'RACE' ? (st.bets || {}) : {};
  hudBottom.innerHTML = st.players.map((p) => {
    let status = '';
    if (!p.connected) status = '<span class="pp-status off">📵 Offline</span>';
    else if (st.phase === 'BETTING') status = p.locked ? '<span class="pp-status locked">🔒 LOCKED IN</span>' : '<span class="pp-status think">🤔 Thinking…</span>';
    const dots = (backs[p.id] || []).map((b) => runnerById(st.round, b.type === 'win' ? b.runnerId : b.pick)).filter(Boolean)
      .map((r) => `<i title="${esc(r.nickname)}" style="background:${esc(r.colour.primary)}"></i>`).join('');
    return `<div class="pp ${p.connected ? '' : 'disconnected'}" data-pid="${p.id}">
      ${ordinalHtml(rank.get(p.id), 'pp-ord')}
      ${avatarHtml(p.avatar, 70)}
      <div><div class="pp-name">${esc(p.name)}</div><div class="pp-bank"><span class="coin"></span> ${money(p.bankroll)}</div>${dots ? `<div class="pp-backs">${dots}</div>` : ''}</div>
      ${status}
    </div>`;
  }).join('');
}

function renderNextHint(st) {
  const label = {
    INTRO: 'Skip intros ⏭', RACE: 'Skip race ⏭', RESULTS: 'Next ▶', SCOREBOARD: st.roundNumber >= st.roundsPerGame ? 'Final results ▶' : 'Next round ▶',
    FINALE: 'Play again ↻', BETTING: st.revealed ? 'Start race ▶' : null,
  }[st.phase];
  if (!label) { nextHint.innerHTML = ''; return; }
  if (nextHint.dataset.label === label) return;
  nextHint.dataset.label = label;
  nextHint.innerHTML = `<button class="btn ${st.phase === 'RACE' || st.phase === 'INTRO' ? 'ghost small' : 'white'}">${label} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`;
  nextHint.firstElementChild.addEventListener('click', (e) => { e.stopPropagation(); unlockAll(); advance(); });
}

function toast(msg, kind = '') {
  const t = el(`<div class="t panel ${kind === 'red' ? 'red' : 'yellow'} anim-pop">${esc(msg)}</div>`);
  const host = $('#toast');
  host.innerHTML = '';
  host.appendChild(t);
  setTimeout(() => { if (t.parentNode) t.remove(); }, 3200);
}

// subtitles (always on), max 2 visible
function showSub(item) {
  audio.duck(true);
  const s = el(`<div class="sub"><span class="who ${item.speaker === 'pam' ? 'pam' : 'jeff'}">${item.speaker === 'pam' ? 'PAM' : 'JEFF'}</span><span>${esc(item.text)}</span></div>`);
  subsEl.appendChild(s);
  while (subsEl.children.length > 2) subsEl.firstElementChild.remove();
  const ttl = Math.max(3000, item.text.split(/\s+/).length * 420 + 1500);
  setTimeout(() => { s.classList.add('out'); setTimeout(() => s.remove(), 450); }, ttl);
  log({ type: 'line', text: item.text, speaker: item.speaker });
}
const say = (text, speaker = 'jeff', priority = 2) => voice.say(text, speaker, { priority });

function lockLine(name) {
  const lines = [`${name} has locked in. No take-backs!`, `And ${name}'s money is down!`, `${name} has committed. Bold. Possibly foolish.`, `Bets are in from ${name}!`];
  return lines[Math.floor(Math.random() * lines.length)];
}

function spawnReaction(pid, emoji) {
  const p = S?.players.find((x) => x.id === pid);
  const panel = hudBottom.querySelector(`[data-pid="${pid}"]`);
  let x;
  if (panel && !hudBottom.classList.contains('hidden')) {
    const r = panel.getBoundingClientRect();
    const sr = stage.getBoundingClientRect();
    const sc = sr.width / 1920;
    x = (r.left + r.width / 2 - sr.left) / sc + (Math.random() - 0.5) * 160;
  } else {
    const idx = S?.players.findIndex((x2) => x2.id === pid) ?? 0;
    x = 1920 * ((idx + 1) / ((S?.players.length || 1) + 1)) + (Math.random() - 0.5) * 220;
  }
  const n = el(`<div class="react" style="left:${Math.round(x - 60)}px;--rot:${Math.round((Math.random() - 0.5) * 40)}deg"><span class="e">${esc(emoji)}</span>${p ? avatarHtml(p.avatar, 46) : ''}</div>`);
  reactEl.appendChild(n);
  audio.play('pop');
  setTimeout(() => n.remove(), 3300);
}

function sleepT(ms, token) { return new Promise((res) => { const id = setTimeout(res, T(ms)); token?.timers.push(id); }); }
function makeToken() { return { cancelled: false, timers: [] }; }
function cancelToken(tok) { tok.cancelled = true; tok.timers.forEach(clearTimeout); }
async function waitVoice(tok, minMs, maxMs = 12000) {
  const t0 = Date.now();
  await sleepT(minMs, tok);
  if (SPEED > 1.5) return;
  while (!tok.cancelled && voice.busy && Date.now() - t0 < maxMs) await new Promise((r) => setTimeout(r, 150));
}
const portrait = (r, size = 120) => runnerPortrait(r, { size, idSuffix: Math.random().toString(36).slice(2, 6) });

function decoWorld() {
  return `<div class="clouds">${[0, 1, 2, 3, 4].map((i) => `<div class="cloud" style="top:${40 + i * 70}px;width:${180 + (i % 3) * 70}px;height:${50 + (i % 2) * 18}px;animation-duration:${70 + i * 17}s;animation-delay:-${i * 19}s"></div>`).join('')}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`;
}

// =====================================================================================================
// LOBBY
// =====================================================================================================
const BANKROLLS = [100, 250, 500, 1000, 2000, 5000];
const TIMERS = [0, 60, 90, 120, 180];
function lobbyScreen(st) {
  const root = el(`<div class="lobby">
    ${decoWorld()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. 🍷</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">📱 SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);
  screenEl.appendChild(root);
  $('.qr', root).innerHTML = st.qrSvg || '';
  $('.url', root).textContent = (st.joinUrl || '').replace(/^https?:\/\//, '');
  say(st.players.length ? `Welcome back to MARKRUN!` : `Welcome to MARKRUN! Grab your phones and scan the code.`, 'jeff', 1);

  const setRow = (label, key, valHtml, controls) => `<div class="set" data-k="${key}"><div class="lbl">${label}</div><div class="ctl-row">${controls.replace('{val}', `<span class="val">${valHtml}</span>`)}</div></div>`;
  function render(s) {
    const slots = [];
    const n = Math.max(2, s.players.length);
    for (let i = 0; i < n; i++) {
      const p = s.players[i];
      if (p) {
        const badge = !p.connected ? '<span class="tag" style="background:var(--tomato);color:#fff">📵 offline</span>'
          : p.ready ? '<span class="tag" style="background:var(--grass);color:#fff">✓ READY</span>' : '<span class="tag">joined</span>';
        slots.push(`<div class="slot panel slant ${prevLobby.has(p.id) ? '' : 'joined'}" style="background:${esc(p.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${avatarHtml(p.avatar, 92)}<div><div class="sname">${esc(p.name)}</div><div class="ssub">${money(p.bankroll)} to gamble</div></div><span class="slot-badge">${badge}</span><button class="btn small white kick" data-kick="${p.id}" title="Remove player">✕</button></div></div>`);
      } else {
        slots.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${i + 1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`);
      }
    }
    prevLobby = new Set(s.players.map((p) => p.id));
    $('.slots', root).innerHTML = slots.join('');
    $('.slots', root).classList.toggle('many', n > 2);
    const set = s.settings;
    const vol = Math.round((set.volume ?? 0.8) * 10);
    $('.settings', root).innerHTML = [
      setRow('Starting pot', 'startingBankroll', money(set.startingBankroll), '<button class="btn small white" data-d="-1">−</button>{val}<button class="btn small white" data-d="1">+</button>'),
      setRow('Rounds', 'roundsPerGame', set.roundsPerGame, '<button class="btn small white" data-d="-1">−</button>{val}<button class="btn small white" data-d="1">+</button>'),
      setRow('Bet timer', 'betTimer', set.betTimer ? `${set.betTimer}s` : 'Off', '<button class="btn small white" data-d="-1">−</button>{val}<button class="btn small white" data-d="1">+</button>'),
      setRow('Drinking', 'drinkingMode', '', `<button class="btn small toggle ${set.drinkingMode ? 'on' : 'off'}" data-toggle>${set.drinkingMode ? '🍺 ON' : 'OFF'}</button>`),
      setRow('Voice', 'voice', '', `<button class="btn small toggle ${set.voice ? 'on' : 'off'}" data-toggle>${set.voice ? '🎙️ ON' : 'OFF'}</button>`),
      setRow('Music', 'music', '', `<button class="btn small toggle ${set.music ? 'on' : 'off'}" data-toggle>${set.music ? '🎵 ON' : 'OFF'}</button>`),
      setRow('Volume', 'volume', `${vol * 10}%`, '<button class="btn small white" data-d="-1">−</button>{val}<button class="btn small white" data-d="1">+</button>'),
    ].join('');
    const allReady = s.players.length && s.players.every((p) => p.ready);
    $('.start-wrap', root).innerHTML = `<button class="btn green ${s.players.length ? 'pulse' : ''}" data-start ${s.players.length ? '' : 'disabled'}>${s.players.length ? (s.players.length === 1 ? 'START SOLO ▶' : "LET'S RACE ▶") : 'Waiting for players…'}</button>
      <div class="hint">${s.players.length ? (allReady ? 'Everyone is ready!' : 'Press SPACE — or everyone taps READY on their phone') : 'Up to 4 players · best with 2'}</div>`;
  }
  let prevLobby = new Set(st.players.map((p) => p.id));
  render(st);
  root.addEventListener('click', (e) => {
    unlockAll();
    const b = e.target.closest('button');
    if (!b) return;
    audio.play('tick');
    if (b.dataset.start !== undefined) return advance();
    if (b.dataset.kick) return send({ t: 'kick', playerId: b.dataset.kick });
    const k = b.closest('[data-k]')?.dataset.k;
    if (!k) return;
    const s = S.settings;
    if (b.dataset.toggle !== undefined) return send({ t: 'settings', settings: { [k]: !s[k] } });
    const d = Number(b.dataset.d);
    let v;
    if (k === 'startingBankroll') { const i = BANKROLLS.indexOf(s[k]); v = BANKROLLS[Math.max(0, Math.min(BANKROLLS.length - 1, (i < 0 ? 2 : i) + d))]; }
    else if (k === 'betTimer') { const i = TIMERS.indexOf(s[k]); v = TIMERS[Math.max(0, Math.min(TIMERS.length - 1, (i < 0 ? 0 : i) + d))]; }
    else if (k === 'volume') v = Math.round(Math.max(0, Math.min(1, (s.volume ?? 0.8) + d * 0.1)) * 10) / 10;
    else v = s[k] + d;
    send({ t: 'settings', settings: { [k]: v } });
  });
  return { update: (s) => render(s) };
}

// =====================================================================================================
// INTRO
// =====================================================================================================
let raceView = null;
let raceViewKind = null;
function disposeRaceView() {
  if (!raceView) return;
  try { raceView.dispose(); } catch (e) { console.warn(e); }
  raceView = null; raceViewKind = null;
  raceLayer.innerHTML = '';
  document.body.classList.remove('racing');
}
async function makeRaceView(opts, { allow2d = true } = {}) {
  disposeRaceView();
  const w = worldData || await worldPromise;
  const full = { course: w.course, park: w.park, speed: SPEED, ...opts };
  if (Race3D?.createRaceView && !FORCE_2D) {
    try {
      raceView = await Race3D.createRaceView(raceLayer, full);
      raceViewKind = '3d';
      log({ type: 'raceview', kind: '3d' });
      return raceView;
    } catch (e) {
      console.error('3D race view failed, using 2D fallback', e);
      log({ type: 'raceview-error', msg: String(e?.message || e) });
      raceLayer.innerHTML = '';
    }
  }
  if (!allow2d || !opts.plan) return null;
  raceView = createFallbackRaceView(raceLayer, full);
  raceViewKind = '2d';
  window.__markrun.raceView = raceView;
  log({ type: 'raceview', kind: '2d' });
  return raceView;
}

function introScreen(st) {
  const tok = makeToken();
  const round = st.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  const root = el(`<div class="intro">${decoWorld()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${runners.map(() => '<i></i>').join('')}</div></div>`);
  screenEl.appendChild(root);
  const box = $('.stagebox', root);
  const bail = (st.bailouts || []).map((b) => `${esc(st.players.find((p) => p.id === b.playerId)?.name || '')} got a ${money(b.amount)} bailout from the Bank of Mum &amp; Dad`).join('<br>');

  (async () => {
    // try the 3D intro fly-by behind the cards
    let introDone3d = Promise.resolve();
    if (!FORCE_2D && Race3D?.createRaceView) {
      const v = await makeRaceView({ round, plan: null, backedBy: {} }, { allow2d: false }).catch(() => null);
      if (v && !tok.cancelled) {
        document.body.classList.add('racing');
        root.querySelector('.clouds')?.remove(); root.querySelector('.hills')?.remove();
        introDone3d = new Promise((res) => { try { v.playIntro(res); } catch { res(); } setTimeout(res, T(90000)); });
      }
    }
    if (tok.cancelled) return;
    box.innerHTML = `<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${round.number} <span style="opacity:.8">of ${st.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${round.title.length > 22 ? 104 : 150}px">${esc(round.title)}</div><div class="rs">${runners.length} runners. All of them Mark. Only one of them is having a good day.</div>${bail ? `<div class="bail panel yellow">💸 ${bail}</div>` : ''}</div></div>`;
    audio.play('fanfare');
    say(`Welcome to Finsbury Park for round ${round.number}: ${round.title}!`, 'jeff', 3);
    await waitVoice(tok, 4200, 7000);
    for (let i = 0; i < runners.length && !tok.cancelled; i++) {
      const r = runners[i];
      $$('.intro-dots i', root).forEach((d, j) => d.classList.toggle('on', j === i));
      box.innerHTML = `<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${esc(r.colour.primary)}"><div class="rp">${portrait(r, 300)}</div><div class="unslant">
        <div class="nick outlined">${esc(r.nickname)}</div>
        <div class="tagl">${esc(r.tagline || '')}</div>
        ${r.intro ? `<div class="introline">“${esc(r.intro)}”</div>` : ''}
        ${r.publicClue ? `<div class="clue"><span class="k">CLUE</span><span>${esc(r.publicClue.text)}</span></div>` : ''}
      </div><div class="lane">LANE ${r.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${esc(r.odds?.display || '')}</div></div></div></div>`;
      audio.play('whoosh');
      say(r.intro || `${r.nickname}. ${r.tagline || ''}`, i % 2 ? 'pam' : 'jeff', 3);
      await waitVoice(tok, 5200, 12000);
      if (!tok.cancelled) await sleepT(700, tok);
    }
    if (tok.cancelled) return;
    $$('.intro-dots i', root).forEach((d) => d.classList.remove('on'));
    box.innerHTML = `<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">📱 Grab your phones — your secret clues are waiting 🤫</div></div></div>`;
    audio.play('kaching');
    say('The book is open! Check your phones for your secret clues.', 'pam', 3);
    await Promise.race([introDone3d, sleepT(100, tok)]);
    await waitVoice(tok, 3200, 6000);
    if (!tok.cancelled) send({ t: 'introDone', roundId: round.roundId });
  })();
  return { destroy: () => { cancelToken(tok); } };
}

// =====================================================================================================
// BETTING
// =====================================================================================================
function runnerCardHtml(r, backers = []) {
  return `<div class="rc panel" data-rid="${r.id}">
    <div class="top stripe" style="--c1:${esc(r.colour.primary)};--c2:${esc(shadeHex(r.colour.primary))}"><div class="lane">${r.lane}</div><div class="rp">${portrait(r, 170)}</div></div>
    <div class="odds"><span class="num">${esc(r.odds?.display || '')}</span></div>
    <div class="nick">${esc(r.nickname)}</div>
    <div class="tagl">${esc(r.tagline || '')}</div>
    <div class="clue"><span class="k">PUBLIC CLUE</span>${esc(r.publicClue?.text || '')}</div>
    ${backers.length ? `<div class="backers">${backers.join('')}</div>` : ''}
  </div>`;
}
function shadeHex(hex) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  const f = (c) => Math.round(c + (255 - c) * 0.25);
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => f(c).toString(16).padStart(2, '0')).join('')}`;
}
function matchupsHtml(round) {
  return (round.matchups || []).map((m) => {
    const a = runnerById(round, m.a), b = runnerById(round, m.b);
    if (!a || !b) return '';
    return `<div class="mu panel slant dark"><div class="unslant" style="display:flex;align-items:center;gap:18px"><span class="lbl">HEAD-TO-HEAD</span>
      <span class="side"><i class="dot" style="background:${esc(a.colour.primary)}"></i>${esc(a.nickname)} <span class="od">×${m.odds.a}</span></span>
      <span class="vs">VS</span>
      <span class="side"><i class="dot" style="background:${esc(b.colour.primary)}"></i>${esc(b.nickname)} <span class="od">×${m.odds.b}</span></span></div></div>`;
  }).join('');
}

function bettingScreen(st) {
  const round = st.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  const root = el(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${round.number}/${st.roundsPerGame} · ${esc(round.title)}</div><div class="timer num hidden"></div></div>
    <div class="runner-grid n${runners.length}">${runners.map((r) => runnerCardHtml(r)).join('')}</div>
    <div class="matchups">${matchupsHtml(round)}</div>
  </div>`);
  screenEl.appendChild(root);
  $$('.rc', root).forEach((c, i) => { c.style.animation = `slide-up .5s ${i * 0.08}s cubic-bezier(.2,1.3,.4,1) both`; });
  const timerEl = $('.timer', root);
  let iv = null;
  let lastSec = null;
  function tick() {
    if (!S?.deadline || S.phase !== 'BETTING' || S.revealed) { timerEl.classList.add('hidden'); return; }
    const left = Math.max(0, Math.ceil((S.deadline - net.serverNow()) / 1000));
    timerEl.classList.remove('hidden');
    timerEl.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    if (left <= 10 && left !== lastSec) audio.play('tick');
    lastSec = left;
  }
  iv = setInterval(tick, 250); tick();
  const tips = [
    ['jeff', 'Remember: the odds are set on public information only. Your secret clue might know better.'],
    ['pam', 'Every one of these runners is Mark. The question is: which Mark turned up?'],
    ['jeff', "Head-to-heads are a lovely way to lose money slowly."],
  ];
  const tipTimer = setTimeout(() => { const t = tips[Math.floor(Math.random() * tips.length)]; say(t[1], t[0], 1); }, T(9000));
  return { destroy: () => { clearInterval(iv); clearTimeout(tipTimer); } };
}

// =====================================================================================================
// REVEAL (all locked)
// =====================================================================================================
function revealScreen(st) {
  const tok = makeToken();
  const round = st.round;
  const root = el(`<div class="reveal"><div class="rh outlined">THE BETS ARE IN!</div><div class="cols"></div></div>`);
  screenEl.appendChild(root);
  const cols = $('.cols', root);
  cols.innerHTML = st.players.map((p) => {
    const bets = st.bets?.[p.id] || [];
    const lines = bets.map((b) => {
      const rid = b.type === 'win' ? b.runnerId : b.pick;
      const r = runnerById(round, rid);
      const oddsTxt = b.type === 'win' ? (r?.odds?.display || '') : `×${betOdds(round, b)}`;
      return `<div class="betline"><div class="rp">${r ? portrait(r, 76) : ''}</div><div class="bl">${esc(betLabel(round, b))}<div class="bt">${b.type === 'win' ? 'WIN' : 'HEAD-TO-HEAD'} · ${esc(oddsTxt)} · pays ${money(b.stake * betOdds(round, b))}</div></div><div class="st num">${money(b.stake)}</div></div>`;
    }).join('');
    return `<div class="col panel slant" style="background:${esc(p.avatar.colour)}"><div class="unslant"><div class="who">${avatarHtml(p.avatar, 80)}${esc(p.name)}</div>${lines || '<div class="nobets">Kept their wallet shut. 🙈</div>'}</div></div>`;
  }).join('');
  (async () => {
    audio.play('drumroll', { dur: 1.8 / SPEED + 0.2 });
    say("Right then. Let's see who's backed what!", 'jeff', 3);
    await sleepT(2000, tok);
    const lines = $$('.betline', root);
    for (const l of lines) { if (tok.cancelled) return; l.classList.add('show'); audio.play('pop'); await sleepT(1100, tok); }
    // same pick banter
    const picks = st.players.map((p) => new Set((st.bets?.[p.id] || []).filter((b) => b.type === 'win').map((b) => b.runnerId)));
    let shared = null;
    if (picks.length >= 2) for (const r of picks[0]) if (picks.slice(1).every((s) => s.has(r))) shared = runnerById(round, r);
    if (shared) {
      root.appendChild(el(`<div class="same panel yellow anim-pop">Great minds… both backing ${esc(shared.nickname)}! 🤝</div>`));
      say(`They've both gone for ${shared.nickname}. Either genius, or a shared delusion.`, 'pam', 3);
    } else {
      const total = st.players.reduce((a, p) => a + (st.bets?.[p.id] || []).reduce((x, b) => x + b.stake, 0), 0);
      say(total ? `That's ${money(total)} riding on this one. Pressure!` : 'Nobody has bet a penny. Cowards, the lot of them.', 'pam', 2);
    }
    await waitVoice(tok, 2600, 7000);
    if (tok.cancelled) return;
    // 3-2-1
    for (const n of ['3', '2', '1']) {
      if (tok.cancelled) return;
      const c = el(`<div class="countdown outlined anim-pop">${n}</div>`);
      root.appendChild(c); audio.play('beep');
      await sleepT(800, tok); c.remove();
    }
    if (!tok.cancelled) send({ t: 'revealDone', roundId: round.roundId });
  })();
  return { destroy: () => cancelToken(tok) };
}

// =====================================================================================================
// RACE
// =====================================================================================================
function raceScreen(st) {
  const tok = makeToken();
  const round = st.round;
  const root = el(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE · ${esc(round.title)}</div></div></div>`);
  screenEl.appendChild(root);
  document.body.classList.add('racing');
  let lastWhoosh = 0;
  let finished = 0;
  (async () => {
    const v = await makeRaceView({ round, plan: st.racePlan, backedBy: st.backedBy || {} });
    if (tok.cancelled) return;
    if (!v) { root.appendChild(el('<div class="race-err panel red">Race view failed to load</div>')); return; }
    document.body.classList.add('racing');
    audio.play('horn');
    setTimeout(() => audio.play('crowd', { dur: 3, peak: 0.25 }), 300);
    say("And they're off!", 'jeff', 3);
    log({ type: 'race-start', kind: raceViewKind });
    v.playRace((e) => {
      if (tok.cancelled || !e) return;
      log({ type: 'race-event', e: e.type || 'line', text: e.text });
      if (e.text) { voice.say(e.text, e.speaker || 'jeff', { priority: e.priority || 2 }); return; }
      switch (e.type) {
        case 'overtake': if (Date.now() - lastWhoosh > 1500) { lastWhoosh = Date.now(); audio.play('whoosh'); } break;
        case 'lead_change': audio.play('whoosh'); audio.play('crowd', { dur: 2, peak: 0.18 }); break;
        case 'breakaway': audio.play('crowd', { dur: 2.5, peak: 0.2 }); break;
        case 'lap': audio.play('bell'); break;
        case 'final_stretch': audio.play('crowd', { dur: 6, peak: 0.4 }); break;
        case 'finish': finished++; if (finished === 1) { audio.play('fanfare'); audio.play('crowd', { dur: 4, peak: 0.45 }); } break;
        default: break;
      }
    }, async () => {
      if (tok.cancelled) return;
      log({ type: 'race-done' });
      await sleepT(2500, tok);
      if (!tok.cancelled) send({ t: 'raceDone', roundId: round.roundId });
    });
  })();
  return { destroy: () => { cancelToken(tok); } };
}

// =====================================================================================================
// RESULTS (stages driven by the server; TV animates each stage, then reports stageDone)
// =====================================================================================================
function resultsScreen(st) {
  let tok = null;
  let shownStage = -1;
  const root = el('<div class="results"></div>');
  screenEl.appendChild(root);
  const round = st.round;
  const res = st.results;

  function backersFor(rid, s) {
    return s.players.filter((p) => (s.bets?.[p.id] || []).some((b) => (b.type === 'win' ? b.runnerId : b.pick) === rid)).map((p) => avatarHtml(p.avatar, 50));
  }
  const head = (h, sh = '') => `<div class="res-head"><div class="h outlined">${h}</div>${sh ? `<div class="sh">${sh}</div>` : ''}</div>`;
  const done = (stage) => { if (!tok.cancelled) send({ t: 'stageDone', stage }); };

  async function stageOrder(s) {
    const t = tok;
    const rows = res.finishOrder.map((f) => {
      const r = runnerById(round, f.runnerId);
      return `<div class="orow panel slant ${f.place === 1 ? 'first' : ''}" style="${f.place === 1 ? '' : `background:${esc(r?.colour?.primary || '#2a62e0')}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${ordinalHtml(f.place)}<div class="rp">${r ? portrait(r, 112) : ''}</div>
        <div class="nm ${f.place === 1 ? '' : 'outlined white thin'}">${esc(r?.nickname || f.runnerId)}<small>${esc(r?.tagline || '')}</small></div>
        <div class="bk">${backersFor(f.runnerId, s).join('')}</div>
        <div class="tm num">${esc(f.timeText || fmtTime(f.officialS))}</div></div></div>`;
    });
    root.innerHTML = head('THE RESULT', 'Official times, as recorded by the volunteers 📋') + `<div class="order">${rows.join('')}</div>`;
    const els = $$('.orow', root);
    for (let i = els.length - 1; i >= 0; i--) {
      if (t.cancelled) return;
      els[i].classList.add('show');
      if (i === 0) { audio.play('fanfare'); confetti(document.body, { count: 90 }); } else audio.play('pop');
      await sleepT(i === 1 ? 1600 : 800, t);
    }
    const lines = res.commentary || [];
    lines.slice(0, 2).forEach((l) => say(l.text, l.speaker, 3));
    await waitVoice(t, 5500, 14000);
    done(0);
  }

  async function stageReveal() {
    const t = tok;
    const order = res.finishOrder.map((f) => f.runnerId);
    const rv = new Map((res.reveal || []).map((x) => [x.runnerId, x]));
    root.innerHTML = head('WHO WERE THEY REALLY?', 'Every runner was a real Mark, on a real Saturday 🕵️') + `<div class="reveal-grid">${order.map((rid, i) => {
      const r = runnerById(round, rid); const x = rv.get(rid) || {};
      const f = res.finishOrder[i];
      const facts = (x.funFacts || []).slice(0, 2).map((ff) => `<div>• ${esc(ff)}</div>`).join('');
      const meta = [x.eventNumber ? `Event #${x.eventNumber}` : '', x.overallPosition ? `${x.overallPosition}${['th', 'st', 'nd', 'rd'][x.overallPosition % 10 > 3 || [11, 12, 13].includes(x.overallPosition % 100) ? 0 : x.overallPosition % 10]} overall` : '', x.ageGrade ? `${x.ageGrade}% AG` : ''].filter(Boolean).join(' · ');
      return `<div class="rv" data-i="${i}">
        <div class="face front" style="background:${esc(r?.colour?.primary)}"><div><div class="rp">${r ? portrait(r, 220) : ''}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${esc(r?.colour?.primary)}"><div class="rp">${r ? portrait(r, 74) : ''}</div><div class="n">${esc(r?.nickname || rid)}</div></div>
          <div class="date">${esc(x.dateText || x.date || '')}</div>
          <div class="time num">${esc(f?.timeText || '')}</div>
          <div class="meta">${esc(meta)}${x.finsburyNumber ? ` · Finsbury run #${x.finsburyNumber}` : ''}</div>
          ${x.stravaTitle ? `<div class="strava"><span class="k">STRAVA TITLE</span>“${esc(x.stravaTitle)}”</div>` : ''}
          <div class="facts">${facts}</div>
          ${x.wasPB ? '<div class="pb">PB! 🏅</div>' : ''}
          <div class="place">${ordinalHtml(f?.place || i + 1)}</div>
        </div></div>`;
    }).join('')}</div>`;
    const cards = $$('.rv', root);
    await sleepT(900, t);
    for (let i = 0; i < cards.length; i++) {
      if (t.cancelled) return;
      cards[i].classList.add('flip');
      audio.play('reveal');
      const x = rv.get(order[i]);
      const r = runnerById(round, order[i]);
      if (i === 0 && x?.dateText) say(`The winner, ${r?.nickname}, was Mark on ${x.dateText}.`, 'jeff', 2);
      await sleepT(1900, t);
    }
    if (res.archetype?.label) {
      root.appendChild(el(`<div class="archetype"><div class="arch panel yellow anim-pop" style="padding:12px 30px"><span class="display" style="font-size:34px">${esc(res.archetype.label)}</span>${res.archetype.blurb ? ` <span style="font-size:24px">— ${esc(res.archetype.blurb)}</span>` : ''}</div></div>`));
    }
    await waitVoice(t, 9000, 15000);
    done(1);
  }

  async function stageClues(s) {
    const t = tok;
    const items = (res.clueReview || []).filter((c) => c.verdict !== 'neutral' || c.quip).slice(0, 10);
    if (!items.length) { root.innerHTML = ''; await sleepT(300, t); done(2); return; }
    const clueText = new Map((s.clues || []).map((c) => [c.id, c]));
    root.innerHTML = head('CLUE POST-MORTEM', 'Useful… or a red herring? 🐟') + `<div class="clue-list">${items.map((c) => {
      const r = runnerById(round, c.runnerId);
      const ct = clueText.get(c.clueId);
      const owner = c.owner === 'public' ? 'PUBLIC CLUE' : `${esc(s.players.find((p) => p.id === c.owner)?.name || 'Secret')}'S SECRET CLUE 🤫`;
      const verdict = { useful: 'USEFUL ✓', red_herring: 'RED HERRING 🐟', neutral: 'MEH' }[c.verdict] || esc(c.verdict);
      return `<div class="cl panel"><div class="rp">${r ? portrait(r, 74) : ''}</div><div class="txt"><div class="own">${owner} · ${esc(r?.nickname || '')}</div>${esc(ct?.text || '')}${c.quip ? `<div class="quip">${esc(c.quip)}</div>` : ''}</div><div class="verdict ${esc(c.verdict)}">${verdict}</div></div>`;
    }).join('')}</div>`;
    const els = $$('.cl', root);
    for (const e of els) { if (t.cancelled) return; e.classList.add('show'); setTimeout(() => audio.play('stamp'), T(250)); await sleepT(1300, t); }
    const herring = items.find((c) => c.verdict === 'red_herring' && c.quip);
    if (herring) say(herring.quip, 'pam', 2);
    await waitVoice(t, 7000, 12000);
    done(2);
  }

  async function stagePayouts(s) {
    const t = tok;
    const drinking = s.settings.drinkingMode;
    root.innerHTML = head('PAY DAY', 'The bookie settles up 💰') + `<div class="payouts">${s.players.map((p) => {
      const pay = res.payouts?.[p.id] || { bets: [], net: 0, bankroll: p.bankroll };
      const lines = (pay.bets || []).map((b) => `<div class="pl ${b.won ? 'won' : 'lost'}"><span class="mark">${b.won ? '✅' : '❌'}</span><div class="lb">${esc(betLabel(round, b))}<small>staked ${money(b.stake)}</small></div><div class="r">${b.won ? `+${money(b.returned)}` : `−${money(b.stake)}`}</div></div>`).join('') || '<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';
      return `<div class="pay panel slant" data-pid="${p.id}" style="background:${esc(p.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${avatarHtml(p.avatar, 90)}${esc(p.name)}</div>
        <div class="lines">${lines}</div>
        <div class="net num" data-net="${pay.net}">${signedMoney(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${money(pay.bankroll - pay.net)}</span></div>
        ${drinking ? drinkHtml(pay.net) : ''}
      </div></div>`;
    }).join('')}</div>`;
    await sleepT(600, t);
    for (const l of $$('.pl', root)) { if (t.cancelled) return; l.classList.add('show'); audio.play(l.classList.contains('won') ? 'kaching' : 'pop'); await sleepT(700, t); }
    await sleepT(400, t);
    let best = null, worst = null;
    for (const p of s.players) {
      const pay = res.payouts?.[p.id]; if (!pay) continue;
      const panel = root.querySelector(`.pay[data-pid="${p.id}"]`);
      const netEl = panel.querySelector('.net');
      const bankEl = panel.querySelector('[data-bank]');
      netEl.classList.add(pay.net > 0 ? 'green' : pay.net < 0 ? 'red' : 'white');
      netEl.classList.add('outlined');
      countUp(netEl, 0, pay.net, T(1800), (v) => signedMoney(v));
      countUp(bankEl, pay.bankroll - pay.net, pay.bankroll, T(1800), (v) => money(v));
      if (!best || pay.net > best.net) best = { ...pay, p, panel };
      if (!worst || pay.net < worst.net) worst = { ...pay, p, panel };
    }
    await sleepT(1900, t);
    if (t.cancelled) return;
    if (best && best.net > 0) {
      audio.play('kaching'); confetti(document.body, { count: 140 });
      best.panel.classList.add('big-win');
      best.panel.appendChild(el('<div class="mood">🤑</div>'));
      say(winLine(best.p.name, best.net), 'jeff', 3);
    }
    if (worst && worst.net < 0) {
      setTimeout(() => audio.play('sadtrombone'), T(900));
      worst.panel.classList.add('big-loss');
      worst.panel.appendChild(el('<div class="raincloud">🌧️</div>'));
      say(loseLine(worst.p.name, worst.net), 'pam', 3);
    }
    if (!best?.net && !worst?.net) say('Nobody won, nobody lost. The bookie is furious.', 'pam', 2);
    await waitVoice(t, 7000, 14000);
    done(3);
  }
  function drinkHtml(net) {
    if (net < 0) { const n = Math.min(5, Math.max(1, Math.ceil(-net / 100))); return `<div class="drink panel yellow">🍺 Take ${n} sip${n > 1 ? 's' : ''}!</div>`; }
    if (net > 0) { const n = Math.min(5, Math.max(1, Math.ceil(net / 150))); return `<div class="drink panel yellow">👉 Hand out ${n} sip${n > 1 ? 's' : ''}</div>`; }
    return '<div class="drink panel yellow">🥤 Water break</div>';
  }

  async function stageAwards(s) {
    const t = tok;
    const awards = res.awards || [];
    if (!awards.length && !res.archetype?.label) { await sleepT(200, t); done(4); return; }
    root.innerHTML = head('ROUND AWARDS', '🏆') + `<div class="awards">${awards.map((a) => {
      const p = s.players.find((x) => x.id === a.playerId);
      return `<div class="award panel slant ${p ? '' : 'yellow'}" style="${p ? `background:${esc(p.avatar.colour)}` : ''}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">🏆</span>${p ? avatarHtml(p.avatar, 84) : ''}<div><div class="at outlined white thin">${esc(a.title)}</div><div class="ax" style="color:${p ? '#fff' : 'var(--ink)'}">${esc(a.text || '')}</div></div></div></div>`;
    }).join('')}${res.archetype?.label ? `<div class="arch panel yellow anim-pop" style="margin-top:20px"><div class="al display">${esc(res.archetype.label)}</div><div class="ab">${esc(res.archetype.blurb || '')}</div></div>` : ''}</div>`;
    for (const a of $$('.award', root)) { if (t.cancelled) return; a.classList.add('show'); audio.play('fanfare'); await sleepT(1500, t); }
    if (awards[0]) say(`${awards[0].title}! ${awards[0].text || ''}`, 'jeff', 2);
    await waitVoice(t, 6500, 12000);
    done(4);
  }

  function runStage(s) {
    if (s.resultsStage === shownStage) return;
    if (tok) cancelToken(tok);
    tok = makeToken();
    shownStage = s.resultsStage;
    voice.clear();
    const name = s.resultStages[s.resultsStage];
    log({ type: 'results-stage', stage: name });
    if (name !== 'order' && raceView) disposeRaceView();
    if (name === 'order' && raceView && raceViewKind === '3d') {
      try { raceView.showPodium?.(res); } catch (e) { console.warn(e); }
    } else if (raceView && name === 'order') disposeRaceView();
    document.body.classList.toggle('racing', !!raceView);
    ({ order: stageOrder, reveal: stageReveal, clues: stageClues, payouts: stagePayouts, awards: stageAwards }[name] || (async () => done(s.resultsStage)))(s).catch((e) => console.error(e));
  }
  if (res) runStage(st);
  return { update: (s) => { if (s.results) runStage(s); }, destroy: () => { if (tok) cancelToken(tok); disposeRaceView(); } };
}
function winLine(name, net) {
  const l = [`${name} cleans up! ${signedMoney(net)}. Insufferable for the rest of the evening.`, `Kerching! ${name} is ${money(net)} richer and won't let anyone forget it.`, `${name} read that race like a book.`];
  return l[Math.floor(Math.random() * l.length)];
}
function loseLine(name, net) {
  const l = [`Oh dear. ${name} is down ${money(-net)}. The bank of Mark is not sympathetic.`, `${name} backed the wrong Mark. It happens to the best of us. Mostly to ${name}.`, `That's ${money(-net)} gone, ${name}. Thoughts and prayers.`];
  return l[Math.floor(Math.random() * l.length)];
}

// =====================================================================================================
// SCOREBOARD
// =====================================================================================================
function standingsHtml(s, { compact = false } = {}) {
  const rank = rankOf(s.players);
  const last = s.history.at(-1);
  return [...s.players].sort((a, b) => b.bankroll - a.bankroll).map((p) => {
    const r = rank.get(p.id);
    const d = last?.nets?.[p.id] ?? 0;
    return `<div class="srow panel slant ${r === 1 && !compact ? 'lead' : ''}" style="${r === 1 && !compact ? '' : `background:${esc(p.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${ordinalHtml(r)}${avatarHtml(p.avatar, compact ? 70 : 96)}<div class="nm">${esc(p.name)}</div>
      ${compact ? '' : `<span class="dl ${d > 0 ? 'up' : d < 0 ? 'down' : 'flat'}">${signedMoney(d)}</span>`}
      <div class="bk num">${money(p.bankroll)}</div>
      ${!compact && p.ready ? '<span class="tag" style="background:var(--grass);color:#fff">✓ READY</span>' : ''}
    </div></div>`;
  }).join('');
}
function chartSvg(s) {
  const hist = s.history;
  const start = s.settings.startingBankroll;
  const series = s.players.map((p) => ({ p, pts: [start, ...hist.map((h) => h.bankrolls?.[p.id] ?? start)] }));
  const n = Math.max(2, (hist.length || 0) + 1);
  const maxV = Math.max(start * 1.2, ...series.flatMap((x) => x.pts));
  const W = 540, H = 420, pad = 36;
  const xs = (i) => pad + (i * (W - pad * 2)) / (n - 1);
  const ys = (v) => H - pad - (v / maxV) * (H - pad * 2);
  const grid = [0, 0.5, 1].map((f) => `<line x1="${pad}" x2="${W - pad}" y1="${ys(maxV * f)}" y2="${ys(maxV * f)}" stroke="#14183c22" stroke-width="2"/>`).join('');
  const base = `<line x1="${pad}" x2="${W - pad}" y1="${ys(start)}" y2="${ys(start)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`;
  const lines = series.map(({ p, pts }) => `<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${pts.map((v, i) => `${xs(i)},${ys(v)}`).join(' ')}"/><polyline fill="none" stroke="${esc(p.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${pts.map((v, i) => `${xs(i)},${ys(v)}`).join(' ')}"/>${pts.map((v, i) => `<circle cx="${xs(i)}" cy="${ys(v)}" r="8" fill="${esc(p.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join('')}`).join('');
  const labels = Array.from({ length: n }, (_, i) => `<text x="${xs(i)}" y="${H - 6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${i === 0 ? 'Start' : `R${i}`}</text>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="440">${grid}${base}${lines}${labels}</svg>`;
}
function scoreScreen(st) {
  const root = el('<div class="score"></div>');
  screenEl.appendChild(root);
  let iv = null;
  function render(s) {
    const last = s.roundNumber >= s.roundsPerGame;
    const upnext = last ? '🏁 That was the final round! Champion next…' : s.roundNumber === s.roundsPerGame - 1 ? `Up next: THE FINAL ROUND 😬` : `Up next: Round ${s.roundNumber + 1} of ${s.roundsPerGame}`;
    root.innerHTML = `<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${s.roundNumber} of ${s.roundsPerGame}</div></div>
      <div class="standings">${standingsHtml(s)}</div>
      <div class="chart panel white"><div class="ct">The money, round by round</div>${chartSvg(s)}</div>
      <div class="upnext panel yellow">${upnext}<span class="cd"></span></div>`;
  }
  render(st);
  const s0 = [...st.players].sort((a, b) => b.bankroll - a.bankroll);
  if (s0.length >= 2) {
    const gap = s0[0].bankroll - s0[1].bankroll;
    say(gap === 0 ? "It's dead level at the top!" : `${s0[0].name} leads by ${money(gap)}.`, 'jeff', 2);
  } else if (s0[0]) say(`${s0[0].name} is on ${money(s0[0].bankroll)}.`, 'jeff', 2);
  iv = setInterval(() => {
    const cd = root.querySelector('.cd');
    if (!cd || !S) return;
    if (S.deadline && S.phase === 'SCOREBOARD') { const left = Math.max(0, Math.ceil((S.deadline - net.serverNow()) / 1000)); cd.textContent = ` — starting in ${left}…`; } else cd.textContent = S.players.length ? ' — tap READY on your phones' : '';
  }, 300);
  return { update: render, destroy: () => clearInterval(iv) };
}

// =====================================================================================================
// FINALE
// =====================================================================================================
function finaleScreen(st) {
  const sorted = [...st.players].sort((a, b) => b.bankroll - a.bankroll);
  const champ = sorted[0];
  const tie = sorted.length > 1 && sorted[1].bankroll === champ?.bankroll;
  const root = el(`<div class="finale"><div class="rays"></div>
    <div class="champ">${champ ? `<div class="h outlined">${tie ? "IT'S A DRAW!" : 'CHAMPION!'}</div>
      <div class="who"><div class="crown">👑</div>${avatarHtml(champ.avatar, 220)}<div class="nm outlined white">${esc(tie ? sorted.filter((p) => p.bankroll === champ.bankroll).map((p) => p.name).join(' & ') : champ.name)}</div><div class="bk num">${money(champ.bankroll)}</div></div>` : '<div class="h outlined">GAME OVER</div>'}
    </div>
    <div class="others">${sorted.slice(1).map((p, i) => `<div class="srow panel slant" style="background:${esc(p.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${ordinalHtml(i + 2)}${avatarHtml(p.avatar, 70)}<div class="nm">${esc(p.name)}</div><div class="bk num">${money(p.bankroll)}</div></div></div>`).join('')}</div>
  </div>`);
  screenEl.appendChild(root);
  audio.play('drumroll', { dur: 1.6 });
  setTimeout(() => { audio.play('fanfare'); audio.play('crowd', { dur: 5, peak: 0.45 }); confetti(document.body, { count: 200, duration: 4500 }); }, T(1700));
  const again = setInterval(() => confetti(document.body, { count: 60, duration: 3500 }), T(6000));
  if (champ) say(tie ? 'We have a dead heat! Nobody wins, which is very British.' : `Ladies and gentlemen, your MARKRUN champion: ${champ.name}, with ${money(champ.bankroll)}!`, 'jeff', 3);
  setTimeout(() => say('Press space, or tap ready on your phones, to go again.', 'pam', 1), T(7000));
  return { destroy: () => clearInterval(again) };
}
