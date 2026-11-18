// MARKRUN TV shell: lobby, intros, betting, reveal, race broadcast, results, scoreboard, finale.
// Query params (testing): ?speed=8 (speed up TV-side timers + race), ?race=2d (force 2D race), ?autostart (skip the
// "press any key" overlay), ?mute.
import { connect } from '../shared/net.js';
import { createAudio } from '../shared/sfx.js';
import { $, $$, esc, el, money, moneySay, signedMoney, ordinalHtml, avatarHtml, countUp, runnerById, runnerShort, betLabel, betOdds, betRunnerId, betKind, clueHtml, oddsText, betOutcome, clueParts, betWin, confetti, fmtTime } from '../shared/ui.js';
import { runnerPortrait } from '../shared/portrait.js';
import { createVoice } from './voice.js';
import { createFallbackRaceView } from './fallback-race.js';
import { Race3D, introPlan } from './race-bridge.js';
import { provisionalNet } from '../../server/game/provisional.mjs';
import * as Moments from '../../server/game/moments.mjs';
import { broadcastToRace, distanceAt } from '../../server/game/raceplan.mjs';
const moment = (name, ...a) => { try { return typeof Moments[name] === 'function' ? Moments[name](...a) : null; } catch { return null; } };

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
// TV key (only needed when the TV page is not on the host computer itself)
const urlKey = params.get('key');
try { if (urlKey) localStorage.setItem('markrun.tvkey', urlKey); } catch { /* */ }
const tvKey = () => { try { return urlKey || localStorage.getItem('markrun.tvkey'); } catch { return urlKey; } };
const net = connect({
  role: 'tv',
  getKey: tvKey,
  onWelcome: (m) => { if (m.key) { try { localStorage.setItem('markrun.tvkey', m.key); } catch { /* */ } } $('#tvauth')?.remove(); },
  onStatus: (st) => { $('#conn').classList.toggle('hidden', st === 'open' || st === 'connecting'); },
  onState: (st) => onState(st),
  onMessage: (m) => {
    if (m.t === 'react') spawnReaction(m.playerId, m.emoji);
    else if (m.t === 'refresh') refreshLog(m.step, m.msg);
    else if (m.t === 'refreshDone') refreshFinished(m.ok, m.msg);
    else if (m.t === 'claimRequest') claimRequest(m);
    else if (m.t === 'claimClosed') { if ($('#tvmodal')?.dataset.req === m.reqId) closeModal(); }
    else if (m.t === 'error' && m.code === 'tv_auth') showAuthError(m.msg);
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
  if (modalOpen()) { if (e.key === 'Escape') { const c = $('#tvmodal [data-cancel]:not([disabled])'); if (c) c.click(); else closeModal(); } else if (e.key === 'Enter') $('#tvmodal [data-ok]')?.click(); return; }
  if (!audio.ready()) audio.unlock();
  const k = e.key;
  if (k === 'm' || k === 'M') { localMute = !localMute; applyAudioSettings(); toast(localMute ? 'Muted' : 'Sound on'); return; }
  if (k === 'f' || k === 'F') { toggleFs(); return; }
  if (k === 'l' || k === 'L') { if (S?.phase === 'BETTING' && !S.revealed) { send({ t: 'forceLock' }); toast('Locking everyone in!'); } return; }
  if (k === ' ' || k === 'Enter' || k === 'ArrowRight' || k === 'n' || k === 'N') { e.preventDefault(); if (skipExplainer === false) { skipExplainer = true; return; } advance(); }
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
      else if (!old.locked && p.locked && st.phase === 'BETTING') { audio.play('thunk'); audio.play('lock'); const l = moment('lockLine', { name: p.name }) || { text: lockLine(p.name), speaker: 'jeff' }; voice.say(l.text, l.speaker, { priority: 2 }); }
      else if (old.connected && !p.connected) setTimeout(() => { const q = S?.players.find((x) => x.id === p.id); if (q && !q.connected) toast(`${p.name}'s phone dropped out — it'll reconnect`, 'red'); }, 5000);
    }
  }
  prevPlayers = now;
  const key = screenKey(st);
  if (!screen || screen.key !== key) {
    if (!screen) switchScreen(key, st, prev);
    else { // wipe across, swap under it (no hard DOM swaps)
      const old = screen;
      screen = { key, pending: true, destroy: () => old.destroy?.() };
      playWipe();
      setTimeout(() => { if (screen.key === key && screen.pending) { screen = old; switchScreen(key, S, prev); } }, 210);
    }
  }
  else if (!screen.pending) screen.update?.(st, prev);
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

const wipeEl = el('<div id="wipe"><i></i><b></b></div>');
document.body.appendChild(wipeEl);
wipeEl.addEventListener('animationend', (e) => { if (e.target.tagName === 'B') wipeEl.classList.remove('go'); });
let wipeTimer = null;
function playWipe() {
  wipeEl.classList.remove('go'); void wipeEl.offsetWidth; wipeEl.classList.add('go');
  clearTimeout(wipeTimer); wipeTimer = setTimeout(() => wipeEl.classList.remove('go'), 700); // belt and braces: never stuck on screen
  window.__markrun.wipeUntil = Date.now() + 700;
  audio.play('wipe');
}
function switchScreen(key, st, prev) {
  try { screen?.destroy?.(); } catch (e) { console.warn(e); }
  screenEl.innerHTML = '';
  voice.clear();
  subsEl.innerHTML = '';
  const phase = st.phase;
  document.body.className = document.body.className.replace(/\bphase-\w+/g, '').trim() + ` phase-${phase}`;
  document.body.classList.toggle('revealed', !!st.revealed);
  document.body.classList.toggle('racing', phase === 'RACE' || (phase === 'INTRO' && !!raceView));
  log({ type: 'screen', key });
  const make = {
    LOBBY: lobbyScreen, INTRO: introScreen, BETTING: st.revealed ? revealScreen : bettingScreen,
    RACE: raceScreen, RESULTS: resultsScreen, SCOREBOARD: scoreScreen, FINALE: finaleScreen,
  }[phase];
  screen = make ? make(st, prev) : { };
  screen.key = key;
  const keepForRace = phase === 'BETTING' && raceView && raceViewRound === st.round?.roundId && canReuseView(raceView);
  if (keepForRace) { try { raceView.setPaused(true); } catch { /* */ } document.body.classList.remove('racing'); }
  else if (phase !== 'RACE' && phase !== 'RESULTS' && phase !== 'INTRO') disposeRaceView();
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
  const show = st.phase === 'BETTING' && !st.revealed;
  hudBottom.classList.toggle('hidden', !show);
  document.body.classList.toggle('no-hud', !show);
  if (!show) { hudBottom.innerHTML = ''; return; }
  const rank = rankOf(st.players);
  const backs = st.phase === 'RACE' ? (st.bets || {}) : {};
  hudBottom.innerHTML = st.players.map((p) => `<span class="pill ${!p.connected ? 'off' : p.locked ? 'locked' : ''}" data-pid="${p.id}">${avatarHtml(p.avatar, 40)}<b>${esc(p.name)}</b><i>${!p.connected ? '📵' : p.locked ? '🔒 locked' : '🤔'}</i></span>`).join('');
  return;
  // eslint-disable-next-line no-unreachable
  hudBottom.innerHTML = st.players.map((p) => {
    let status = '';
    if (!p.connected) status = '<span class="pp-status off">📵 Offline</span>';
    else if (st.phase === 'BETTING') status = p.locked ? '<span class="pp-status locked">🔒 LOCKED IN</span>' : '<span class="pp-status think">🤔 Thinking…</span>';
    const dots = (backs[p.id] || []).map((b) => runnerById(st.round, betRunnerId(b))).filter(Boolean)
      .map((r) => `<i title="${esc(r.nickname)}" style="background:${esc(r.colour.primary)}"></i>`).join('');
    return `<div class="pp ${p.connected ? '' : 'disconnected'}" data-pid="${p.id}">
      ${st.history?.length ? ordinalHtml(rank.get(p.id), 'pp-ord') : ''}
      ${avatarHtml(p.avatar, 70)}
      <div><div class="pp-name">${esc(p.name)}</div><div class="pp-bank"><span class="coin"></span> ${money(p.bankroll)}</div>${dots ? `<div class="pp-backs">${dots}</div>` : ''}</div>
      ${status}
    </div>`;
  }).join('');
}

function renderNextHint(st) {
  const label = {
    INTRO: 'Skip intros ⏭', RACE: 'Skip race ⏭', RESULTS: 'Next ▶', SCOREBOARD: st.roundNumber >= st.roundsPerGame ? 'Final results ▶' : 'Next round ▶',
    FINALE: (() => { const lo = [...st.players].sort((a, b) => a.bankroll - b.bankroll)[0]; return st.players.length > 1 && lo ? `${lo.name} demands a REMATCH ↻` : 'Play again ↻'; })(), BETTING: st.revealed ? 'Start race ▶' : null,
  }[st.phase];
  if (!label) { nextHint.innerHTML = ''; return; }
  if (nextHint.dataset.label === label) return;
  nextHint.dataset.label = label;
  nextHint.innerHTML = `<button class="btn ${st.phase === 'RACE' || st.phase === 'INTRO' ? 'ghost small' : st.phase === 'FINALE' ? 'red big rematch' : 'white'}">${label} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`;
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
  const maxSubs = 1; // one commentator line at a time, everywhere
  while (subsEl.children.length > maxSubs) subsEl.firstElementChild.remove();
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
    x = (S?.phase === 'RACE' ? 1790 - idx * 90 : idx % 2 === 0 ? 70 : 1790) + (Math.random() - 0.5) * 60; // corners only (race: bottom-right; the money pills live bottom-left)
  }
  const n = el(`<div class="react" style="left:${Math.round(x - 60)}px;--rot:${Math.round((Math.random() - 0.5) * 40)}deg"><span class="e">${esc(emoji)}</span>${p ? avatarHtml(p.avatar, 46) : ''}</div>`);
  reactEl.appendChild(n);
  audio.play('pop');
  setTimeout(() => n.remove(), 3300);
}

function sleepT(ms, token) { return new Promise((res) => { const id = setTimeout(res, T(ms)); token?.timers.push(id); }); }
function makeToken() { return { cancelled: false, timers: [] }; }
function cancelToken(tok) { tok.cancelled = true; tok.timers.forEach((id) => { clearTimeout(id); clearInterval(id); }); }
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
    <div class="settings panel cream hidden"></div>
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
        slots.push(`<div class="slot panel slant ${prevLobby.has(p.id) ? '' : 'joined'}" style="background:${esc(p.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${avatarHtml(p.avatar, 92)}<div><div class="sname">${esc(p.name)}${s.settings.runnerPlayerId === p.id ? ' <span class="tag markt">🏃 THE REAL MARK</span>' : ''}</div><div class="ssub">${money(p.bankroll)} to gamble${s.settings.runnerPlayerId && s.settings.runnerPlayerId !== p.id ? ' · gets an extra 🔥 hot tip' : ''}</div></div><span class="slot-badge">${badge}</span><button class="btn small white kick" data-kick="${p.id}" title="Remove player">✕</button></div></div>`);
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
      <div class="hint">${s.refreshing ? '⏳ Refreshing historical data…' : s.players.length ? (allReady ? 'Everyone is ready!' : 'Press SPACE — or everyone taps READY on their phone') : 'Up to 4 players · best with 2'}</div>
      <button class="btn small white refresh-btn" data-options>⚙ Options</button>`;
    if (optsOpen) renderOptions(s);
  }
  let prevLobby = new Set(st.players.map((p) => p.id));
  let optsOpen = false;
  function renderOptions(s) {
    let m = $('#tvmodal.opts');
    if (!m) { m = openModal('<h2 class="outlined white thin">⚙ Options</h2><div class="optgrid"></div><div class="row"><button class="btn small white" data-refresh>⟳ Refresh Historical Data…</button><span style="flex:1"></span><button class="btn green" data-ok>Done <small>ENTER</small></button></div>'); m.classList.add('opts');
      m.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; if (b.dataset.ok !== undefined) { optsOpen = false; closeModal(); return; } handleSetting(b); }); }
    $('.optgrid', m).innerHTML = $('.settings', root).innerHTML;
  }
  function handleSetting(b) {
    audio.play('tick');
    if (b.dataset.refresh !== undefined) { optsOpen = false; return confirmRefresh(); }
    const k = b.closest('[data-k]')?.dataset.k;
    if (!k) return undefined;
    const st2 = S.settings;
    if (b.dataset.toggle !== undefined) return send({ t: 'settings', settings: { [k]: !st2[k] } });
    const d = Number(b.dataset.d);
    let v;
    if (k === 'startingBankroll') { const i = BANKROLLS.indexOf(st2[k]); v = BANKROLLS[Math.max(0, Math.min(BANKROLLS.length - 1, (i < 0 ? 2 : i) + d))]; }
    else if (k === 'betTimer') { const i = TIMERS.indexOf(st2[k]); v = TIMERS[Math.max(0, Math.min(TIMERS.length - 1, (i < 0 ? 0 : i) + d))]; }
    else if (k === 'volume') v = Math.round(Math.max(0, Math.min(1, (st2.volume ?? 0.8) + d * 0.1)) * 10) / 10;
    else v = st2[k] + d;
    return send({ t: 'settings', settings: { [k]: v } });
  }
  render(st);
  root.addEventListener('click', (e) => {
    unlockAll();
    const b = e.target.closest('button');
    if (!b) return;
    audio.play('tick');
    if (b.dataset.start !== undefined) return advance();
    if (b.dataset.refresh !== undefined) return confirmRefresh();
    if (b.dataset.options !== undefined) { optsOpen = true; return renderOptions(S); }
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

// ---------- "Refresh Historical Data" (lobby only; the only feature that touches the internet) ----------
const modalOpen = () => !!$('#tvmodal');
function closeModal() { $('#tvmodal')?.remove(); }
function openModal(html) {
  closeModal();
  const m = el(`<div id="tvmodal"><div class="tvm panel white anim-pop">${html}</div></div>`);
  stage.appendChild(m);
  m.addEventListener('click', (e) => { if (e.target === m) closeModal(); });
  return m;
}
function showAuthError(msg) {
  if ($('#tvauth')) return;
  document.body.appendChild(el(`<div id="tvauth"><div class="panel white" style="padding:30px 40px;max-width:900px;font-size:26px"><h2 style="font-family:var(--font-display);font-weight:400;margin:0 0 10px">📺 Not the TV</h2><p>${esc(msg)}</p></div></div>`));
}
function claimRequest(m) {
  unlockAll();
  audio.play('bell');
  const md = openModal(`<h2 class="outlined white thin">📱 New phone for ${esc(m.name || 'a player')}?</h2>
    <p>Someone on a <b>new phone</b> wants to take over <b>${esc(m.name || '')}</b>'s seat (and see their secret clues).</p>
    <p>Only allow it if ${esc(m.name || 'they')} really did switch phones. Auto-denied in 30 seconds.</p>
    <div class="row"><button class="btn white" data-cancel>Deny <small>ESC</small></button><button class="btn green" data-ok>Allow <small>ENTER</small></button></div>`);
  md.dataset.req = m.reqId;
  $('[data-cancel]', md).onclick = () => { send({ t: 'claimAnswer', reqId: m.reqId, allow: false }); closeModal(); };
  $('[data-ok]', md).onclick = () => { send({ t: 'claimAnswer', reqId: m.reqId, allow: true }); closeModal(); };
}
function confirmRefresh() {
  if (S?.phase !== 'LOBBY') return;
  const m = openModal(`<h2 class="outlined white thin">⟳ Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online — this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);
  $('[data-cancel]', m).onclick = closeModal;
  $('[data-ok]', m).onclick = () => {
    send({ t: 'refresh' });
    openModal(`<h2 class="outlined white thin">⟳ Refreshing…</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working…</button></div>`);
  };
}
function refreshLog(step, msg) {
  let m = $('#tvmodal .rlog');
  if (!m) { openModal(`<h2 class="outlined white thin">⟳ Refreshing…</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working…</button></div>`); m = $('#tvmodal .rlog'); }
  m.appendChild(el(`<div class="rl"><b>${esc(step)}</b> ${esc(msg)}</div>`));
  while (m.children.length > 9) m.firstElementChild.remove();
}
function refreshFinished(ok, msg) {
  if (msg) refreshLog('error', msg);
  const b = $('#tvmodal [data-cancel]');
  if (b) { b.disabled = false; b.textContent = ok ? 'Done ✓' : 'Close'; b.onclick = closeModal; }
  toast(ok ? 'Historical data refreshed!' : 'Refresh had problems — existing data kept', ok ? '' : 'red');
}

// =====================================================================================================
// INTRO
// =====================================================================================================
let coldOpenDone = null;
let skipExplainer = null; // true -> skip the round-1 explainer beats
let raceView = null;
let raceViewKind = null;
let raceViewRound = null;
// The intro's 3D world can be re-used for the race (built once per round) if the view can take the plan AND the
// players' picks after creation; otherwise a fresh view is made at RACE so the HUD can tag who backed whom.
const canReuseView = (v) => raceViewKind === '3d' && typeof v?.loadPlan === 'function' && (typeof v?.setBackedBy === 'function' || v?.loadPlan.length >= 2);
function disposeRaceView() {
  if (!raceView) return;
  try { raceView.dispose(); } catch (e) { console.warn(e); }
  raceView = null; raceViewKind = null; raceViewRound = null;
  raceLayer.innerHTML = '';
  document.body.classList.remove('racing');
}
async function makeRaceView(opts, { allow2d = true } = {}) {
  disposeRaceView();
  const w = worldData || await worldPromise;
  const full = { course: w.course, park: w.park, speed: SPEED, ...opts };
  if (Race3D?.createRaceView && !FORCE_2D) {
    try {
      try { raceView = await Race3D.createRaceView(raceLayer, full); } catch (e) {
        if (full.plan || !full.round) throw e; // older views needed a plan even for the intro
        raceLayer.innerHTML = '';
        raceView = await Race3D.createRaceView(raceLayer, { ...full, plan: introPlan(full.round) });
      }
      raceViewRound = full.round?.roundId || null;
      raceViewKind = '3d';
      window.__markrun.raceView = raceView;
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

function sayIntroLines(round) {
  const lines = round.introLines?.length ? round.introLines : [{ speaker: 'jeff', text: `Welcome to Finsbury Park for round ${round.number}: ${round.title}!` }];
  lines.slice(0, 2).forEach((l) => say(l.text, l.speaker, 3));
}
function introScreen(st) {
  const tok = makeToken();
  const round = st.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  const root = el(`<div class="intro">${decoWorld()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${runners.map(() => '<i></i>').join('')}</div></div>`);
  screenEl.appendChild(root);
  const box = $('.stagebox', root);
  const bail = (st.bailouts || []).map((b) => `${esc(st.players.find((p) => p.id === b.playerId)?.name || '')} got a ${money(b.amount)} bailout from the Bank of Mum &amp; Dad`).join('<br>');

  const titleHtml = `<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${round.number} <span style="opacity:.8">of ${st.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${round.title.length > 22 ? 104 : 150}px">${esc(round.title)}</div><div class="rs">${runners.length} runners. All of them Mark. Only one of them is having a good day.</div>${round.theme?.label ? `<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${esc(round.theme.label)}</div></div>${round.theme.blurb ? `<div class="tblurb">${esc(round.theme.blurb)}</div>` : ''}` : ''}${Number(round.payoutMultiplier) >= 2 ? '<div class="double-badge outlined">DOUBLE PAYOUT FINALE ×2</div>' : ''}${round.notice ? `<div class="bail panel grape" style="color:#fff">🃏 ${esc(round.notice)}</div><br>` : ''}${bail ? `<div class="bail panel yellow">💸 ${bail}</div>` : ''}</div></div>`;
  const cardHtml = (r) => `<div class="l3 anim-left" style="--c1:${esc(r.colour.primary)}"><div class="l3p">${portrait(r, 150)}</div><div class="l3t"><b>${esc(tvName(r))}</b><span>${esc(r.tagline || '')}</span></div><div class="l3o"><small>ODDS</small><span class="num">${esc(r.odds?.display || '')}</span></div></div>`;
  async function showRunner(i) {
    const r = runners[i];
    $$('.intro-dots i', root).forEach((d, j) => d.classList.toggle('on', j === i));
    box.innerHTML = cardHtml(r);
    audio.play('whoosh');
    say(r.intro || `${r.nickname}. ${r.tagline || ''}`, i % 2 ? 'pam' : 'jeff', 3);
    const cp = clueParts(r.publicClue, 8);
    if (cp.kicker && !/^…/.test(cp.kicker)) say(`${cp.headline} ${cp.kicker}`, i % 2 ? 'jeff' : 'pam', 2); // the joke lives in the kicker
    await waitVoice(tok, 4800, 6500); // intros <= ~45 s in total
  }
  async function finish() {
    if (tok.cancelled) return;
    $$('.intro-dots i', root).forEach((d) => d.classList.remove('on'));
    box.innerHTML = `<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">📱 Grab your phones — your secret clues are waiting 🤫</div></div></div>`;
    audio.play('kaching');
    say('The book is open! Check your phones for your secret clues.', 'pam', 3);
    await waitVoice(tok, 2500, 4000);
    if (!tok.cancelled) send({ t: 'introDone', roundId: round.roundId });
  }

  const t0 = Date.now();
  const hb = setInterval(() => send({ t: 'progress', phase: 'INTRO', roundId: round.roundId, value: Date.now() - t0 }), 2000);
  tok.timers.push(hb);
  async function coldOpen() {
    if (round.number !== 1 || coldOpenDone === st.gameNumber) return;
    coldOpenDone = st.gameNumber;
    box.innerHTML = `<div class="cold"><div class="cw outlined">MARK<span>RUN</span></div><div class="cs outlined white thin">${esc(st.players.map((p) => p.name).join(' vs '))}</div><div class="cp">${st.players.map((p) => avatarHtml(p.avatar, 110)).join('<span class="vsx outlined">VS</span>')}</div></div>`;
    audio.play('drumroll', { dur: 1.4 }); setTimeout(() => { audio.play('fanfare'); audio.play('crowd', { dur: 3, peak: 0.3 }); }, T(1500));
    const lines = moment('coldOpenLines', st.players.map((p) => ({ name: p.name }))) || [{ speaker: 'jeff', text: `Good evening, ${st.players.map((p) => p.name).join(' and ')}! Welcome to MARKRUN!` }];
    await sleepT(1600, tok);
    lines.slice(0, 2).forEach((l) => say(l.text, l.speaker, 3));
    await waitVoice(tok, 6000, 9000);
  }
  async function explainer() {
    if (round.number !== 1) return;
    const beats = [
      ['📺 + 🤫', 'One clue on the telly,', 'one secret on your phone.', 'One clue on the telly, one secret on your phone. Read both.'],
      ['🔥', 'HOT TIP', "means the bookie doesn't know this.", "If it's got a fire on it, the bookie doesn't know about it. Use it."],
      ['½ · ×2', 'Half your pot per round.', 'The final round pays DOUBLE.', 'You can bet half your pot each round. The final round pays double. Pace yourselves.'],
    ];
    skipExplainer = false;
    for (const [icon, l1, l2, voiceLine] of beats) {
      if (tok.cancelled || skipExplainer) break;
      box.innerHTML = `<div class="explain"><div class="anim-pop"><div class="ei">${icon}</div><div class="e1 outlined">${esc(l1)}</div><div class="e2 outlined white thin">${esc(l2)}</div></div><div class="eskip">SPACE to skip</div></div>`;
      audio.play('reveal');
      say(voiceLine, 'pam', 3);
      const t0 = Date.now();
      while (!skipExplainer && !tok.cancelled && (Date.now() - t0 < T(4500) || (SPEED <= 1.5 && voice.busy && Date.now() - t0 < 10000))) await new Promise((r) => setTimeout(r, 100));
    }
    skipExplainer = null;
    voice.clear();
  }
  async function groupIntro(v) { // from round 2: one group frame and one joke line instead of five intros
    box.innerHTML = `${titleHtml}<div class="lineup">${runners.map((r) => `<div class="lu"><div class="rp">${portrait(r, 120)}</div><b>${esc(runnerShort(r))}</b><span class="num">${esc(r.odds?.display || '')}</span></div>`).join('')}</div>`;
    audio.play('fanfare');
    const line = (round.introLines || []).find((l) => l.text) || { speaker: 'jeff', text: `Round ${round.number}: ${round.title}! Five Marks, one winner.` };
    say(line.text, line.speaker || 'jeff', 3);
    const joke = runners.map((r) => r.tagline).filter(Boolean)[Math.floor(Math.random() * runners.length)];
    if (joke) say(joke, 'pam', 2);
    if (v) { try { const info = v.playIntro(() => {}); const n = runners.length; v.seek?.((info?.flyoverS ?? 7) + n * (info?.perRunnerS ?? 4.2) + 0.5); } catch (e) { console.warn(e); } }
    await waitVoice(tok, 5000, 11000);
  }
  (async () => {
    await coldOpen();
    if (tok.cancelled) return;
    await explainer();
    if (tok.cancelled) return;
    if (round.number >= 2) {
      let v = null;
      if (!FORCE_2D && Race3D?.createRaceView) {
        v = await makeRaceView({ round, backedBy: {}, introCards: false }, { allow2d: false }).catch(() => null);
        if (v && !tok.cancelled) { document.body.classList.add('racing'); root.classList.add('over3d'); root.querySelector('.clouds')?.remove(); root.querySelector('.hills')?.remove(); }
      }
      if (tok.cancelled) return;
      await groupIntro(v);
      await finish();
      return;
    }
    // 3D: helicopter fly-over + a close-up per runner; our card + voice line hold each shot (onIntroRunner)
    if (!FORCE_2D && Race3D?.createRaceView) {
      const byId = new Map(runners.map((r, i) => [r.id, i]));
      const v = await makeRaceView({
        round, backedBy: {}, introCards: false,
        onIntroRunner: (id) => (tok.cancelled ? undefined : showRunner(byId.get(id) ?? 0)),
      }, { allow2d: false }).catch(() => null);
      if (v && !tok.cancelled) {
        document.body.classList.add('racing');
        root.classList.add('over3d');
        root.querySelector('.clouds')?.remove(); root.querySelector('.hills')?.remove();
        box.innerHTML = titleHtml;
        audio.play('fanfare');
        sayIntroLines(round);
        let done = false;
        const guard = setTimeout(() => { if (!done) { done = true; finish(); } }, T(150000));
        tok.timers.push(guard);
        try { v.playIntro(() => { if (!done) { done = true; clearTimeout(guard); finish(); } }); } catch (e) { console.error(e); done = true; finish(); }
        return;
      }
    }
    if (tok.cancelled) return;
    box.innerHTML = titleHtml;
    audio.play('fanfare');
    sayIntroLines(round);
    await waitVoice(tok, 4200, 6000);
    for (let i = 0; i < runners.length && !tok.cancelled; i++) { await showRunner(i); if (!tok.cancelled) await sleepT(700, tok); }
    await finish();
  })();
  return { destroy: () => { cancelToken(tok); } };
}

// =====================================================================================================
// BETTING
// =====================================================================================================
const tvName = (r) => (r.nickname.length <= 18 ? r.nickname : runnerShort(r));
function runnerCardHtml(r) {
  const { headline, kicker } = clueParts(r.publicClue, 8);
  return `<div class="rc panel" data-rid="${r.id}">
    <div class="top stripe" style="--c1:${esc(r.colour.primary)};--c2:${esc(shadeHex(r.colour.primary))}"><div class="rp">${portrait(r, 170)}</div></div>
    <div class="odds"><span class="num">${esc(r.odds?.display || '')}</span></div>
    <div class="nick">${esc(tvName(r))}</div>
    <div class="clue"><b>${esc(headline)}</b>${kicker ? `<small>${esc(kicker)}</small>` : ''}</div>
  </div>`;
}
function shadeHex(hex) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  const f = (c) => Math.round(c + (255 - c) * 0.25);
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => f(c).toString(16).padStart(2, '0')).join('')}`;
}
function themeBadge(round) {
  const t = round?.theme;
  const dbl = Number(round?.payoutMultiplier) >= 2;
  return `${t?.label ? `<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${esc(t.label)}</div></div>` : ''}${dbl ? '<div class="double-badge outlined">DOUBLE PAYOUT ×2</div>' : ''}`;
}
function stripHtml(round) {
  const mus = (round.matchups || []).map((m) => {
    const a = runnerById(round, m.a), b = runnerById(round, m.b);
    if (!a || !b) return '';
    return `<span class="si"><i class="dot" style="background:${esc(a.colour.primary)}"></i>${esc(runnerShort(a))} <em>${esc(m.odds.displayA || `×${m.odds.a}`)}</em> <span class="vs">v</span> <i class="dot" style="background:${esc(b.colour.primary)}"></i>${esc(runnerShort(b))} <em>${esc(m.odds.displayB || `×${m.odds.b}`)}</em></span>`;
  });
  const props = (round.props || []).map((p) => `<span class="si prop">🎡 ${esc(p.text)} <em>${esc(p.odds?.displayYes || '')}</em></span>`);
  return [...mus, ...props].filter(Boolean).join('<span class="sep">·</span>');
}
function bettingScreen(st) {
  const round = st.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  const root = el(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${round.number}/${st.roundsPerGame} · ${esc(round.title)}</div>${themeBadge(round)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${runners.length}">${runners.map((r) => runnerCardHtml(r)).join('')}</div>
    <div class="bstrip">${stripHtml(round)}</div>
    ${round.notice ? `<div class="notice panel grape">🃏 ${esc(round.notice)}</div>` : ''}
  </div>`);
  screenEl.appendChild(root);
  $$('.rc', root).forEach((c, i) => { c.style.animation = `slide-up .5s ${i * 0.08}s cubic-bezier(.2,1.3,.4,1) both`; });
  const timerEl = $('.timer', root);
  let lastSec = null;
  function tick() {
    if (!S?.deadline || S.phase !== 'BETTING' || S.revealed) { timerEl.classList.add('hidden'); return; }
    const left = Math.max(0, Math.ceil((S.deadline - net.serverNow()) / 1000));
    timerEl.classList.remove('hidden');
    timerEl.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    if (left <= 10 && left !== lastSec) audio.play('tick');
    lastSec = left;
  }
  const iv = setInterval(tick, 250); tick();
  const tips = [
    ['jeff', 'Each of you has one red-hot insider tip on your phone. Find it. Use it.'],
    ['pam', 'Every one of these runners is Mark. The question is: which Mark turned up?'],
    ['jeff', 'Head-to-heads are a lovely way to lose money slowly.'],
  ];
  if (Number(round.payoutMultiplier) >= 2) say('Final round, and every payout is doubled! Fortunes will be made. Mostly lost.', 'jeff', 3);
  else if (round.theme?.label) say(`Today's theme: ${round.theme.label}. ${round.theme.blurb || ''}`, 'pam', 2);
  const quips = runners.map((r) => ({ r, k: clueParts(r.publicClue, 8).kicker })).filter((x) => x.k && !/^…/.test(x.k));
  const pick = quips[Math.floor(Math.random() * quips.length)];
  const tipTimer = setTimeout(() => { if (pick) say(`${runnerShort(pick.r)}: ${pick.k}`, 'pam', 1); else { const t = tips[Math.floor(Math.random() * tips.length)]; say(t[1], t[0], 1); } }, T(12000));
  return { destroy: () => { clearInterval(iv); clearTimeout(tipTimer); } };
}

// =====================================================================================================
// REVEAL (all locked): one bet at a time, smallest to largest (betRevealOrder), each with its line
// =====================================================================================================
function revealScreen(st) {
  const tok = makeToken();
  const round = st.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  let seq = (st.revealSeq || []).filter((x) => x && x.bet);
  if (!seq.length) {
    const lines = (st.betLines || []).slice();
    seq = st.players.flatMap((p) => (st.bets?.[p.id] || []).map((bet) => ({ playerId: p.id, bet }))).sort((a, b) => a.bet.stake - b.bet.stake)
      .map((x) => ({ ...x, line: lines.shift() || null }));
  }
  const pcol = (pid) => st.players.find((p) => p.id === pid)?.avatar?.colour || '#fff';
  const root = el(`<div class="faceoff">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="fo-grid">${runners.map((r) => `<div class="fo-card" data-rid="${r.id}"><div class="fo-top" style="background:${esc(r.colour.primary)}"><div class="rp">${portrait(r, 150)}</div></div><b>${esc(tvName(r))}</b><span class="num">${esc(r.odds?.display || '')}</span><div class="fo-chips"></div></div>`).join('')}</div>
    <div class="fo-side"></div>
    <div class="fo-legend">${st.players.map((p) => `<span class="lg">${avatarHtml(p.avatar, 40)}<b>${esc(p.name)}</b><i data-tot="${p.id}">0pp</i></span>`).join('')}</div>
  </div>`);
  screenEl.appendChild(root);
  const tot = {};
  (async () => {
    audio.play('drumroll', { dur: 1.2 / SPEED + 0.2 });
    say(seq.length ? 'Right then. The bets, smallest first!' : 'Nobody has bet a penny. Cowards, the lot of them.', 'jeff', 3);
    await sleepT(1300, tok);
    const maxStake = Math.max(1, ...seq.map((x) => x.bet.stake));
    for (let i = 0; i < seq.length && !tok.cancelled; i++) {
      const { playerId, bet, line } = seq[i];
      const p = st.players.find((x) => x.id === playerId);
      const rid = betRunnerId(bet);
      const big = i === seq.length - 1 && seq.length > 1;
      const chip = el(`<div class="fchip ${big ? 'big' : ''} anim-pop" style="--pc:${esc(pcol(playerId))}">${avatarHtml(p?.avatar, 34)}<b>${money(bet.stake)}</b><small>wins +${money(betWin(round, bet))}</small>${bet.type === 'h2h' ? '<i>⚔️</i>' : bet.type === 'special' || bet.boost ? '<i>🚀</i>' : ''}</div>`);
      const card = rid ? root.querySelector(`.fo-card[data-rid="${rid}"] .fo-chips`) : null;
      if (card) card.appendChild(chip);
      else $('.fo-side', root).appendChild(el(`<div class="fside anim-pop" style="--pc:${esc(pcol(playerId))}">${avatarHtml(p?.avatar, 34)}<span>🎡 ${esc(betLabel(round, bet))}</span><b>${money(bet.stake)}</b><small>wins +${money(betWin(round, bet))}</small></div>`));
      if (rid) root.querySelector(`.fo-card[data-rid="${rid}"]`)?.classList.add('backed');
      audio.play(big ? 'kaching' : 'chip', { p: bet.stake / maxStake });
      tot[playerId] = (tot[playerId] || 0) + bet.stake;
      const tEl = root.querySelector(`[data-tot="${playerId}"]`); if (tEl) tEl.textContent = money(tot[playerId]);
      if (line?.text) say(line.text, line.speaker || 'jeff', big ? 3 : 1);
      await sleepT(big ? 1600 : 900, tok);
    }
    if (tok.cancelled) return;
    // CLASH: opposite sides of a head-to-head, or big win money on different runners
    const clashes = [];
    if (st.players.length >= 2) {
      const [pa, pb] = st.players;
      const ba = st.bets?.[pa.id] || [], bb = st.bets?.[pb.id] || [];
      for (const x of ba.filter((q) => q.type === 'h2h')) { const y = bb.find((q) => q.type === 'h2h' && q.matchupId === x.matchupId && q.pick !== x.pick); if (y) clashes.push([x.pick, y.pick]); }
      const top = (bs, p) => bs.filter((q) => q.type === 'win' || q.type === 'special').sort((u, v) => v.stake - u.stake)[0];
      const wa = top(ba), wb = top(bb);
      if (!clashes.length && wa && wb && wa.runnerId !== wb.runnerId && wa.stake >= 0.2 * pa.bankroll && wb.stake >= 0.2 * pb.bankroll) clashes.push([wa.runnerId, wb.runnerId]);
      if (clashes.length) {
        for (const rid of clashes[0]) root.querySelector(`.fo-card[data-rid="${rid}"]`)?.classList.add('clash');
        root.appendChild(el('<div class="clash-stamp"><div class="anim-pop outlined">CLASH!</div></div>'));
        audio.play('sting'); audio.play('stamp');
        const ln = seq.map((x) => x.line?.text).find((t) => /both|against|clash|opposite|other side/i.test(t || ''));
        say(ln || `${pa.name} and ${pb.name} are on opposite sides. Somebody's sleeping on the sofa tonight.`, 'pam', 3);
        await sleepT(2200, tok);
      }
    }
    await waitVoice(tok, 1200, 4000);
    if (tok.cancelled) return;
    for (const n of (Race3D?.createRaceView && !FORCE_2D ? [] : ['3', '2', '1'])) {
      if (tok.cancelled) return;
      const c = el(`<div class="countdown outlined anim-pop">${n}</div>`);
      root.appendChild(c); audio.play('beep');
      await sleepT(700, tok); c.remove();
    }
    if (!tok.cancelled) send({ t: 'revealDone', roundId: round.roundId });
  })();
  return { destroy: () => cancelToken(tok) };
}

// =====================================================================================================
// RACE (+ HALFWAY MARKET)
// =====================================================================================================
function marketHtml(s) {
  const m = s.market;
  const round = s.round;
  if (!m) return '<div class="mk-wait outlined white thin">Opening the market…</div>';
  const inBets = new Set(s.players.filter((p) => (s.bets?.[p.id] || []).some((b) => b.type === 'inplay')).map((p) => p.id));
  const rows = (m.standings || []).map((x) => {
    const r = runnerById(round, x.runnerId);
    const o = m.odds?.[x.runnerId];
    return `<div class="mkrow">${ordinalHtml(x.place)}<span class="rp">${r ? portrait(r, 64) : ''}</span><span class="nm">${esc(r?.nickname || x.runnerId)}</span><span class="gp">${x.place === 1 ? 'LEADS' : `+${Number(x.gapS).toFixed(1)}s`}</span><span class="od num">${esc(o?.display || '')}</span></div>`;
  }).join('');
  return `<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${rows}</div>
    <div class="mkp">${s.players.map((p) => `<span class="mkpl ${inBets.has(p.id) ? 'in' : ''}">${avatarHtml(p.avatar, 44)}${esc(p.name)} ${inBets.has(p.id) ? '✓ IN' : '…'}</span>`).join('')}</div></div>`;
}

function raceScreen(st) {
  const tok = makeToken();
  const round = st.round;
  const root = el(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE · ${esc(round.title)}</div></div><div class="market-layer"></div><div class="ifnow"></div><div class="stamps"></div></div>`);
  screenEl.appendChild(root);
  document.body.classList.add('racing');
  const mkLayer = $('.market-layer', root);
  let lastWhoosh = 0;
  let finished = 0;
  let marketState = 'idle'; // idle | waiting | open | done
  // P4: ONE live number per player - "if it ended now" - from the game's provisionalNet and the live order
  const ifnowEl = $('.ifnow', root);
  const lastNet = {};
  let ifIv = null;
  function liveOrder(b) {
    const plan = st.racePlan;
    const raceS = broadcastToRace(plan.timeMap, Math.max(0, b));
    return plan.runners.map((r) => ({ id: r.id, d: distanceAt(r.progress, raceS), f: r.officialS, done: raceS >= r.officialS }))
      .sort((x, y) => (x.done && y.done ? x.f - y.f : (y.d - x.d) || (x.f - y.f))).map((x) => x.id);
  }
  function updateIfNow(v) {
    const b = v?.broadcastTime;
    if (!Number.isFinite(b) || b < 3 || !S?.bets) return;
    let nets;
    try { nets = provisionalNet(S.round, S.bets, liveOrder(b)); } catch { return; }
    if (!ifnowEl.children.length) ifnowEl.innerHTML = S.players.map((p) => `<div class="ifp" data-pid="${p.id}">${avatarHtml(p.avatar, 40)}<span class="nm">${esc(p.name)}</span><b class="num">±0</b></div>`).join('') + '<div class="ifl">if it ended now</div>';
    for (const p of S.players) {
      const n = Math.round(nets?.[p.id] ?? 0);
      if (lastNet[p.id] === n) continue;
      const row = ifnowEl.querySelector(`.ifp[data-pid="${p.id}"]`);
      if (!row) continue;
      const bEl = row.querySelector('b');
      const prevN = lastNet[p.id];
      lastNet[p.id] = n;
      if (prevN == null) { bEl.textContent = signedMoney(n); continue; }
      countUp(bEl, prevN, n, 600, (x) => signedMoney(x));
      row.classList.remove('up', 'down'); void row.offsetWidth; row.classList.add(n > prevN ? 'up' : 'down');
    }
  }
  // P8: per-player stamps after the finish replay
  let stamped = false;
  function showStamps() {
    if (stamped || tok.cancelled) return;
    stamped = true;
    let nets = {};
    try { nets = provisionalNet(S.round, S.bets || {}, st.racePlan.finishOrder); } catch { /* */ }
    const box = $('.stamps', root);
    S.players.forEach((p, i) => {
      const n = Math.round(nets[p.id] ?? 0);
      setTimeout(() => {
        if (tok.cancelled) return;
        box.appendChild(el(`<div class="stamp ${n > 0 ? 'win' : n < 0 ? 'lose' : ''}" style="--c:${esc(p.avatar.colour)}">${avatarHtml(p.avatar, 70)}<span>${esc(p.name.toUpperCase())} ${n > 0 ? `WINS ${money(n)}` : n < 0 ? signedMoney(n) : 'BREAKS EVEN'}</span></div>`));
        audio.play(n > 0 ? 'kaching' : n < 0 ? 'boo' : 'stamp');
        const l = moment('stampLine', { name: p.name, net: n });
        if (l) say(l.text, l.speaker, 3);
      }, T(350 + i * 1100));
    });
  }
  let priceSaid = false;
  let marketResolve = null;
  let clockIv = null, mkIv = null;
  async function runMarket(v) {
    marketState = 'waiting';
    try { v.setPaused(true, { market: true, marketText: 'Bet on your phones — one bet each!' }); } catch { /* */ }
    audio.play('bell'); audio.play('crowd', { dur: 2, peak: 0.2 });
    voice.clear(); subsEl.innerHTML = '';
    say('Halfway! The market is open. One bet each — quick!', 'jeff', 3);
    send({ t: 'marketOpen', roundId: round.roundId });
    mkLayer.innerHTML = marketHtml(S);
    mkIv = setInterval(() => {
      const t = mkLayer.querySelector('[data-mkt]');
      if (t && S?.market?.closesAt) { const left = Math.max(0, Math.ceil((S.market.closesAt - net.serverNow()) / 1000)); if (left <= 10 && left !== t.dataset.last * 1) { t.dataset.last = left; audio.play('tick'); } t.textContent = `${left}s`; }
    }, 200);
    await new Promise((res) => { marketResolve = res; setTimeout(res, 20000); tok.timers.push(setTimeout(() => { if (!S?.market) res(); }, 3500)); });
    clearInterval(mkIv);
    marketState = 'done';
    mkLayer.innerHTML = '';
    if (tok.cancelled) return;
    say('Market closed! Back to the action!', 'pam', 2);
    try { v.setPaused(false); } catch { /* */ }
  }
  const loadT0 = Date.now();
  const loadHb = setInterval(() => send({ t: 'raceTime', roundId: round.roundId, b: -100000 + (Date.now() - loadT0) / 1000 }), 2000);
  tok.timers.push(loadHb);
  (async () => {
    let v = null;
    if (raceView && raceViewRound === round.roundId && canReuseView(raceView)) {
      try {
        if (typeof raceView.setBackedBy === 'function') { raceView.setBackedBy(st.backedBy || {}); raceView.loadPlan(st.racePlan); }
        else raceView.loadPlan(st.racePlan, { backedBy: st.backedBy || {} });
        raceView.setPaused(false);
        v = raceView;
        log({ type: 'raceview', kind: '3d', reused: true });
      } catch (e) { console.warn('could not re-use the intro view', e); }
    }
    if (!v) v = await makeRaceView({ round, plan: st.racePlan, backedBy: st.backedBy || {}, onWinnerStamp: () => showStamps() });
    clearInterval(loadHb);
    if (tok.cancelled) return;
    if (!v) { root.appendChild(el('<div class="race-err panel red">Race view failed to load</div>')); return; }
    document.body.classList.add('racing');
    if (raceViewKind === '3d') root.querySelector('.live')?.remove(); // the 3D HUD has its own lap/distance chips
    if (raceViewKind !== '3d') {
      audio.play('horn');
      setTimeout(() => audio.play('crowd', { dur: 3, peak: 0.25 }), 300);
      say("And they're off!", 'jeff', 3);
    } else audio.play('crowd', { dur: 4, peak: 0.2 });
    log({ type: 'race-start', kind: raceViewKind });
    // report the broadcast clock so phones can show their runners live (they never get the plan)
    clockIv = setInterval(() => { const b = v.broadcastTime; if (Number.isFinite(b)) send({ t: 'raceTime', roundId: round.roundId, b }); }, 1000);
    ifIv = setInterval(() => updateIfNow(v), 500);
    v.playRace((e) => {
      if (tok.cancelled || !e) return;
      log({ type: 'race-event', e: e.type || 'line', text: e.text });
      if (e.kind === 'countdown') { audio.play(e.n === 0 ? 'go' : 'beep'); if (e.n === 0) { audio.play('horn'); audio.play('crowd', { dur: 3, peak: 0.28 }); } return; }
      if (e.kind === 'photo_finish') { audio.play('stamp'); audio.play('heartbeat', { beats: 5 }); say("It's a photo finish! Hold your breath!", 'pam', 3); return; }
      if (e.kind === 'winner_replay_done') { showStamps(); return; }
      if (e.text && (e.kind === 'commentary' || !e.type)) { if (marketState !== 'waiting') voice.say(e.text, e.speaker || 'jeff', { priority: e.priority || 2 }); return; }
      switch (e.type) {
        case 'overtake': if (Date.now() - lastWhoosh > 1500) { lastWhoosh = Date.now(); audio.play('whoosh'); } break;
        case 'lead_change': audio.play('whoosh'); audio.play('crowd', { dur: 2, peak: 0.18 }); break;
        case 'breakaway': audio.play('crowd', { dur: 2.5, peak: 0.2 }); break;
        case 'lap':
          if (marketState === 'idle' && S?.marketAvailable) { log({ type: 'market' }); runMarket(v); } else audio.play('bell');
          break;
        case 'final_stretch': audio.play('crowd', { dur: 6, peak: 0.4 }); if (S?.settings?.music !== false) audio.startMusic('final'); break;
        case 'finish': finished++; if (finished === 1) { audio.stopMusic(0.6); audio.play('fanfare'); audio.play('crowd', { dur: 4, peak: 0.45 }); } break;
        default: break;
      }
    }, async () => {
      if (tok.cancelled) return;
      log({ type: 'race-done' });
      if (!stamped) { showStamps(); await sleepT(400 + S.players.length * 1100, tok); }
      await sleepT(2500, tok);
      if (!tok.cancelled) send({ t: 'raceDone', roundId: round.roundId });
    });
    // TV reloaded mid-race: jump back to where the broadcast was
    const resumeB = Number(st.resumeB) || 0;
    if (resumeB > 2) {
      try {
        if (typeof v.seek === 'function') v.seek(resumeB);
        else if (v._debug?.seek) { v._debug.seek(resumeB); v.setPaused(false); }
        log({ type: 'race-resume', b: resumeB });
        toast('Back on air! Resuming the race…');
      } catch (e) { console.warn('resume failed', e); }
    }
  })();
  return {
    update(s) {
      if (marketState !== 'waiting') return;
      if (s.market && !s.market.open) { marketResolve?.(); return; }
      if (s.market && !priceSaid) {
        priceSaid = true;
        const lead = s.market.standings?.find((x) => x.place === 1) || s.market.standings?.[0];
        const sec = s.market.standings?.find((x) => x.place === 2);
        const lr = runnerById(s.round, lead?.runnerId), sr = runnerById(s.round, sec?.runnerId);
        if (lr) say(`${lr.nickname} leads at halfway and is now ${s.market.odds?.[lead.runnerId]?.display || 'odds-on'}.${sr ? ` ${sr.nickname}, ${Number(sec.gapS).toFixed(1)} seconds back, is ${s.market.odds?.[sec.runnerId]?.display || ''}.` : ''}`, 'jeff', 3);
      }
      mkLayer.innerHTML = marketHtml(s);
    },
    destroy: () => { cancelToken(tok); clearInterval(clockIv); clearInterval(mkIv); clearInterval(ifIv); marketResolve?.(); audio.stopMusic(0.8); },
  };
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
    return s.players.filter((p) => (s.bets?.[p.id] || []).some((b) => (betRunnerId(b)) === rid)).map((p) => avatarHtml(p.avatar, 50));
  }
  const head = (h, sh = '') => `<div class="res-head"><div class="h outlined">${h}</div>${sh ? `<div class="sh">${sh}</div>` : ''}</div>`;
  const done = (stage) => { if (!tok.cancelled) send({ t: 'stageDone', stage }); };

  async function stageOrder(s) {
    const t = tok;
    const rows = res.finishOrder.map((f) => {
      const r = runnerById(round, f.runnerId);
      return `<div class="orow panel slant ${f.place === 1 ? 'first' : ''}" style="${f.place === 1 ? '' : `background:${esc(r?.colour?.primary || '#2a62e0')}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${ordinalHtml(f.place)}<div class="rp">${r ? portrait(r, 112) : ''}</div>
        <div class="nm ${f.place === 1 ? '' : 'outlined white thin'}">${esc(r?.nickname || f.runnerId)}${res.favouriteId === f.runnerId ? ' <span class="fav">FAV</span>' : ''}<small>${esc(r?.tagline || '')}</small></div>
        <div class="bk">${backersFor(f.runnerId, s).join('')}</div>
        <div class="tm"><span class="num">${esc(f.timeText || fmtTime(f.officialS))}</span>${f.place > 1 && f.gapS != null ? `<span class="gap">+${Math.round(f.gapS)}s</span>` : ''}</div></div></div>`;
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
    await waitVoice(t, 4000, 7000);
    done(0);
  }

  async function stageReveal() {
    const t = tok;
    const order = res.finishOrder.map((f) => f.runnerId);
    const rv = new Map((res.reveal || []).map((x) => [x.runnerId, x]));
    // sofa-readable: date, time, Strava title only (stats + fun facts go to the phones)
    root.innerHTML = head('WHO WERE THEY REALLY?', 'Every runner was a real Mark, on a real Saturday 🕵️ — details on your phones') + `<div class="reveal-grid">${order.map((rid, i) => {
      const r = runnerById(round, rid); const x = rv.get(rid) || {};
      const f = res.finishOrder[i];
      return `<div class="rv" data-i="${i}">
        <div class="face front" style="background:${esc(r?.colour?.primary)}"><div><div class="rp">${r ? portrait(r, 220) : ''}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${esc(r?.colour?.primary)}"><div class="rp">${r ? portrait(r, 74) : ''}</div><div class="n">${esc(r?.nickname || rid)}</div></div>
          <div class="date">${esc(x.dateText || x.date || x.headline || '')}</div>
          <div class="time num">${esc(f?.timeText || '')}</div>
          ${(() => {
            const facts = (x.funFacts || []).filter(Boolean);
            const generic = !x.stravaTitle || /^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(x.stravaTitle).trim()) || /^(run|parkrun)$/i.test(String(x.stravaTitle).trim());
            const box = generic ? (facts[0] ? `<div class="strava fact"><span class="k">DID YOU KNOW?</span>${esc(facts[0])}</div>` : '') : `<div class="strava"><span class="k">STRAVA TITLE</span>“${esc(x.stravaTitle)}”</div>`;
            const ctx = Array.isArray(x.context) ? x.context[0] : x.context || x.contextLine || x.contextText;
            const extra = ctx || x.punchline || facts[generic ? 1 : 0];
            return box + (extra ? `<div class="ff">${esc(extra)}</div>` : '');
          })()}
          ${x.wasPB || x.pbKind ? `<div class="pb">${x.pbKind === 'finsbury' ? 'COURSE PB!' : 'PB! 🏅'}</div>` : ''}
          <div class="place">${ordinalHtml(f?.place || i + 1)}</div>
        </div></div>`;
    }).join('')}</div>`;
    const cards = $$('.rv', root);
    await sleepT(900, t);
    for (let i = cards.length - 1; i >= 0; i--) { // last place first, the winner last
      if (t.cancelled) return;
      cards[i].classList.add('flip');
      const x = rv.get(order[i]);
      const r = runnerById(round, order[i]);
      audio.play(i === 0 ? 'fanfare' : 'reveal');
      if (i === cards.length - 1 && cards.length > 1) say(`And in last place, ${r?.nickname}: ${x?.dateText || ''}`, 'pam', 2);
      if (i === 0) { cards[0].classList.add('winner-big'); say(`The winner, ${r?.nickname}: ${x?.dateText || ''}, ${res.finishOrder[0]?.timeText || ''}.`, 'jeff', 3); }
      await sleepT(i === 0 ? 1800 : 2200, t);
    }
    // a beat of silence, then the punchline lands
    const w0 = rv.get(order[0]) || {};
    const generic = !w0.stravaTitle || /^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(w0.stravaTitle).trim());
    const punch = w0.punchline || (!generic ? `“${w0.stravaTitle}”` : '');
    await waitVoice(t, 900, 5000);
    if (punch && !t.cancelled) {
      root.appendChild(el(`<div class="punch"><div class="anim-pop">${esc(punch)}</div></div>`));
      audio.play('stamp');
      say(punch.replace(/[“”]/g, ''), 'pam', 3);
    }
    const rmf = typeof res.realMarkFact === 'string' ? res.realMarkFact : res.realMarkFact?.text;
    if (rmf && !t.cancelled) {
      await waitVoice(t, 2200, 6000);
      root.querySelector('.punch')?.remove();
      root.appendChild(el(`<div class="punch rmf"><div class="anim-pop"><small>THE REAL MARK</small>${esc(rmf)}</div></div>`));
      say(rmf, 'jeff', 3);
    }
    await waitVoice(t, 3000, 6000);
    done(1);
  }

  async function stageClues(s) {
    const t = tok;
    const all = res.clueReview || [];
    let items = all.filter((c) => c.highlight).slice(0, 3);
    if (!items.length) items = all.filter((c) => c.verdict !== 'neutral').slice(0, 3);
    if (!items.length) { root.innerHTML = ''; await sleepT(300, t); done(2); return; }
    const clueText = new Map((s.clues || []).map((c) => [c.id, c]));
    root.innerHTML = head('THE CLUES THAT MATTERED', 'Useful… or a red herring? 🐟') + `<div class="clue-list big">${items.map((c) => {
      const r = runnerById(round, c.runnerId);
      const ct = clueText.get(c.clueId);
      const p = s.players.find((x) => x.id === c.owner);
      const owner = c.owner === 'public' ? `📺 PUBLIC CLUE${ct?.label ? ` · ${esc(ct.label.toUpperCase())}` : ''}` : `${ct?.tier === 'hot' ? '🔥' : '🤫'} ${esc(p?.name || 'Secret')}'S ${ct?.tier === 'hot' ? 'HOT TIP' : 'SECRET CLUE'}`;
      const verdict = { useful: 'USEFUL ✓', red_herring: 'RED HERRING 🐟', neutral: 'MEH' }[c.verdict] || esc(c.verdict);
      return `<div class="cl panel"><div class="rp">${r ? portrait(r, 100) : ''}</div><div class="txt"><div class="own">${owner} · ${esc(r?.nickname || '')}</div>${esc(c.text || ct?.text || '')}${c.quip ? `<div class="quip">${esc(c.quip)}</div>` : ''}</div><div class="verdict ${esc(c.verdict)}">${verdict}</div></div>`;
    }).join('')}</div>`;
    const els = $$('.cl', root);
    for (let i = 0; i < els.length; i++) {
      if (t.cancelled) return;
      els[i].classList.add('show');
      setTimeout(() => { audio.play('sting'); audio.play('stamp'); }, T(250));
      if (items[i].quip) say(items[i].quip, i % 2 ? 'jeff' : 'pam', 2);
      await waitVoice(t, 2500, 5000);
    }
    await waitVoice(t, 2000, 4000);
    done(2);
  }

  async function stagePayouts(s) {
    const t = tok;
    const drinking = s.settings.drinkingMode;
    root.innerHTML = head('PAY DAY', 'The bookie settles up 💰') + `<div class="payouts">${s.players.map((p) => {
      const pay = res.payouts?.[p.id] || { bets: [], net: 0, bankroll: p.bankroll };
      const lines = (pay.bets || []).map((b) => { const o = betOutcome(b); return `<div class="pl ${o.kind === 'won' ? 'won' : o.kind === 'push' ? 'push' : 'lost'}"><span class="mark">${o.kind === 'won' ? '✅' : o.kind === 'push' ? '↩️' : '❌'}</span><div class="lb">${esc(betLabel(round, b))}<small>staked ${money(b.stake)} · ${esc(oddsText(round, b))}${o.kind === 'won' ? ` · returned ${money(b.returned)}` : ''}</small></div><div class="r">${o.text}</div></div>`; }).join('') || '<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';
      return `<div class="pay panel slant" data-pid="${p.id}" style="background:${esc(p.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${avatarHtml(p.avatar, 90)}${esc(p.name)}</div>
        <div class="lines">${lines}</div>
        <div class="net num outlined ${pay.net > 0 ? 'green' : pay.net < 0 ? 'red' : 'white'}" data-net="${pay.net}" style="visibility:hidden">${signedMoney(pay.net)}</div>
        ${drinking ? drinkHtml(pay.net, p.id) : ''}
      </div></div>`;
    }).join('')}</div>${tugHtml(s, true)}`;
    await sleepT(600, t);
    for (const l of $$('.pl', root)) { if (t.cancelled) return; l.classList.add('show'); audio.play(l.classList.contains('won') ? 'kaching' : 'pop'); await sleepT(700, t); }
    await sleepT(400, t);
    let best = null, worst = null;
    for (const p of s.players) {
      const pay = res.payouts?.[p.id]; if (!pay) continue;
      const panel = root.querySelector(`.pay[data-pid="${p.id}"]`);
      const netEl = panel.querySelector('.net');
      const bankEl = null;
      netEl.style.visibility = 'visible'; netEl.classList.add('anim-pop');
      void bankEl;
      if (!best || pay.net > best.net) best = { ...pay, p, panel };
      if (!worst || pay.net < worst.net) worst = { ...pay, p, panel };
    }
    tugAnimate(root, s);
    if (best && best.net > 0) audio.play('coins', { n: Math.min(30, 8 + Math.round(best.net / 40)) });
    await sleepT(1900, t);
    if (t.cancelled) return;
    const everyone = s.settings.drinkingMode ? (res.drinks || []).filter((d) => !d.playerId) : [];
    if (everyone.length) root.appendChild(el(`<div class="drink-all panel yellow anim-pop">🍻 ${everyone.map((d) => esc(d.text)).join(' · ')}</div>`));
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
    await waitVoice(t, 5000, 8000);
    done(3);
  }
  function drinkHtml(net, pid) {
    if (Array.isArray(res.drinks)) {
      const mine = res.drinks.filter((d) => d.playerId === pid);
      return mine.map((d) => `<div class="drink panel yellow">🍺 ${esc(d.text)}</div>`).join('');
    }
    if (net < 0) { const n = Math.min(5, Math.max(1, Math.ceil(-net / 100))); return `<div class="drink panel yellow">🍺 Take ${n} sip${n > 1 ? 's' : ''}!</div>`; }
    if (net > 0) { const n = Math.min(5, Math.max(1, Math.ceil(net / 150))); return `<div class="drink panel yellow">👉 Hand out ${n} sip${n > 1 ? 's' : ''}</div>`; }
    return '<div class="drink panel yellow">🥤 Water break</div>';
  }

  async function stageAwards(s) {
    const t = tok;
    const awards = res.awards || [];
    if (!awards.length && !res.archetype?.label) { await sleepT(200, t); done(4); return; }
    root.innerHTML = head('ROUND AWARDS', '🏆') + `<div class="awards">${res.archetype?.label ? `<div class="arch panel yellow anim-pop"><div class="al display">${esc(res.archetype.label)}</div><div class="ab">${esc(res.archetype.blurb || '')}</div></div>` : ''}${awards.map((a) => {
      const p = s.players.find((x) => x.id === a.playerId);
      return `<div class="award panel slant ${p ? '' : 'yellow'}" style="${p ? `background:${esc(p.avatar.colour)}` : ''}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">🏆</span>${p ? avatarHtml(p.avatar, 84) : ''}<div><div class="at outlined white thin">${esc(a.title)}${p ? ` — ${esc(p.name)}` : ' — everyone'}</div><div class="ax" style="color:${p ? '#fff' : 'var(--ink)'}">${esc(a.text || '')}</div></div></div></div>`;
    }).join('')}</div>`;
    for (const a of $$('.award', root)) { if (t.cancelled) return; a.classList.add('show'); audio.play('fanfare'); await sleepT(1500, t); }
    if (awards[0]) say(`${awards[0].title}! ${awards[0].text || ''}`, 'jeff', 2);
    await waitVoice(t, 4500, 7000);
    done(4);
  }

  function runStage(s) {
    if (s.resultsStage === shownStage) return;
    if (tok) cancelToken(tok);
    tok = makeToken();
    const first = shownStage === -1;
    shownStage = s.resultsStage;
    voice.clear();
    subsEl.innerHTML = '';
    if (!first) playWipe();
    const name = s.resultStages[s.resultsStage];
    log({ type: 'results-stage', stage: name });
    if (name !== 'order' && raceView) disposeRaceView();
    if (name === 'order' && raceView && raceViewKind === '3d') {
      try { raceView.showPodium?.(res, { card: false }); } catch (e) { console.warn(e); }
    } else if (raceView && name === 'order') disposeRaceView();
    document.body.classList.toggle('racing', !!raceView);
    ({ order: stageOrder, reveal: stageReveal, clues: stageClues, payouts: stagePayouts, awards: stageAwards }[name] || (async () => done(s.resultsStage)))(s).catch((e) => console.error(e));
  }
  if (res) runStage(st);
  return { update: (s) => { if (s.results) runStage(s); }, destroy: () => { if (tok) cancelToken(tok); disposeRaceView(); } };
}
// payouts: one bar, each player's share of the money on the sofa, sliding from before to after
function tugHtml(s, before) {
  const res = s.results;
  const rows = s.players.map((p) => { const pay = res?.payouts?.[p.id]; const after = pay?.bankroll ?? p.bankroll; return { p, before: Math.max(0, after - (pay?.net || 0)), after: Math.max(0, after) }; });
  const tot = rows.reduce((a, r) => a + (before ? r.before : r.after), 0) || 1;
  return `<div class="tug">${rows.map((r) => `<div class="seg" data-pid="${r.p.id}" data-after="${r.after}" style="flex-grow:${Math.max(0.0001, (before ? r.before : r.after) / tot)};background:${esc(r.p.avatar.colour)}">${avatarHtml(r.p.avatar, 56)}<b class="num" data-from="${r.before}">${money(before ? r.before : r.after)}</b></div>`).join('')}</div>`;
}
function tugAnimate(root, s) {
  const segs = $$('.tug .seg', root);
  const tot = segs.reduce((a, x) => a + Number(x.dataset.after), 0) || 1;
  segs.forEach((x) => {
    x.style.flexGrow = String(Math.max(0.0001, Number(x.dataset.after) / tot));
    const b = x.querySelector('b');
    countUp(b, Number(b.dataset.from), Number(x.dataset.after), T(1600), (v) => money(v));
  });
  void s;
}
function winLine(name, net) {
  const l = [`${name} cleans up! Up ${moneySay(net)}. Insufferable for the rest of the evening.`, `Kerching! ${name} is ${moneySay(net)} richer and won't let anyone forget it.`, `${name} read that race like a book.`];
  return l[Math.floor(Math.random() * l.length)];
}
function loseLine(name, net) {
  const l = [`Oh dear. ${name} is down ${moneySay(-net)}. The bank of Mark is not sympathetic.`, `${name} backed the wrong Mark. It happens to the best of us. Mostly to ${name}.`, `That's ${moneySay(-net)} gone, ${name}. Thoughts and prayers.`];
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
function recapHtml(s, narrow) {
  const res = s.results;
  if (!res?.finishOrder?.length) return '';
  const w = runnerById(s.round, res.finishOrder[0].runnerId);
  const rows = s.players.map((p) => {
    const pay = res.payouts?.[p.id];
    const best = (pay?.bets || []).filter((b) => b.won).sort((a, b) => b.returned - a.returned)[0];
    return `<div class="rcp">${avatarHtml(p.avatar, 54)}<span class="rn">${esc(p.name)}</span><span class="rx">${best ? `✅ ${esc(betLabel(s.round, best))} <b class="bw">${signedMoney(betOutcome(best).net)}</b>` : (pay?.bets || []).length ? '❌ nothing came in' : '🙈 no bets'}</span><span class="rnet ${pay?.net > 0 ? 'up' : pay?.net < 0 ? 'down' : ''}"><small>net</small> ${signedMoney(pay?.net || 0)}</span></div>`;
  }).join('');
  const aw = (res.awards || []).slice(0, 2).map((a) => { const p = s.players.find((x) => x.id === a.playerId); return `<span class="raw">🏆 ${esc(a.title)}${p ? ` · ${esc(p.name)}` : ''}</span>`; }).join('');
  return `<div class="recap panel white ${narrow ? 'narrow' : ''}"><div class="rch"><span class="rp">${w ? portrait(w, 64) : ''}</span><span>Last race: <b>${esc(w?.nickname || '')}</b> won${res.archetype?.label ? ` · ${esc(res.archetype.label)}` : ''}</span>${aw}</div>${rows}</div>`;
}
function scoreScreen(st) {
  const root = el('<div class="score"></div>');
  screenEl.appendChild(root);
  let iv = null;
  function render(s) {
    const last = s.roundNumber >= s.roundsPerGame;
    const upnext = last ? '🏁 That was the final round! Champion next…' : s.roundNumber === s.roundsPerGame - 1 ? `Up next: THE FINAL ROUND 😬` : `Up next: Round ${s.roundNumber + 1} of ${s.roundsPerGame}`;
    const showChart = s.history.length >= 2;
    root.innerHTML = `<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${s.roundNumber} of ${s.roundsPerGame}</div></div>
      <div class="standings ${showChart ? '' : 'solo'}">${standingsHtml(s)}</div>
      ${showChart ? `<div class="chart panel white"><div class="ct">The money, round by round</div>${chartSvg(s)}</div>` : ''}
      ${recapHtml(s, showChart)}
      <div class="upnext panel yellow">${upnext}<span class="cd"></span></div>`;
  }
  render(st);
  const s0 = [...st.players].sort((a, b) => b.bankroll - a.bankroll);
  if (s0.length >= 2) {
    const gap = s0[0].bankroll - s0[1].bankroll;
    say(gap === 0 ? "It's dead level at the top!" : `${s0[0].name} leads by ${moneySay(gap)}.`, 'jeff', 2);
  } else if (s0[0]) say(`${s0[0].name} is on ${moneySay(s0[0].bankroll)}.`, 'jeff', 2);
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
  const awards = (st.history || []).flatMap((h) => (h.awards || []).filter((a) => a.text).map((a) => ({ title: a.title, text: `${a.text} (round ${h.round})`, playerId: a.playerId }))).slice(0, 3);
  const reel = [...(st.superlatives || []).filter((x) => x && x.title && x.text), ...awards].slice(0, 7);
  const root = el(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${champ ? `<div class="h outlined">${tie ? "IT'S A DRAW!" : 'CHAMPION!'}</div>
      <div class="who"><div class="crown">👑</div>${avatarHtml(champ.avatar, 200)}<div class="nm outlined white">${esc(tie ? sorted.filter((p) => p.bankroll === champ.bankroll).map((p) => p.name).join(' & ') : champ.name)}</div><div class="bk num">${money(champ.bankroll)}</div></div>` : '<div class="h outlined">GAME OVER</div>'}
      <div class="others">${sorted.slice(1).map((p, i) => `<div class="srow panel slant" style="background:${esc(p.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${ordinalHtml(i + 2)}${avatarHtml(p.avatar, 64)}<div class="nm">${esc(p.name)}</div><div class="bk num">${money(p.bankroll)}</div></div></div>`).join('')}</div>
    </div>
    <div class="reel">${reel.length ? '<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>' : ''}</div>
  </div>`);
  screenEl.appendChild(root);
  const conf = $('.fconf', root);
  audio.play('drumroll', { dur: 1.6 });
  setTimeout(() => { audio.play('fanfare'); audio.play('crowd', { dur: 5, peak: 0.45 }); confetti(conf, { count: 200, duration: 4500, contained: true, zIndex: 0 }); }, T(1700));
  const again = setInterval(() => confetti(conf, { count: 50, duration: 3500, contained: true, zIndex: 0 }), T(7000));
  if (champ) say(tie ? 'We have a dead heat! Nobody wins, which is very British.' : `Ladies and gentlemen, your MARKRUN champion: ${champ.name}, with ${moneySay(champ.bankroll)}!`, 'jeff', 3);
  let k = 0, reelIv = null;
  const card = $('.reel-card', root);
  function showReel() {
    if (!card || !reel.length) return;
    const x = reel[k % reel.length];
    const p = st.players.find((q) => q.id === x.playerId);
    card.innerHTML = `<div class="rc2 panel ${p ? '' : 'yellow'} anim-pop" style="${p ? `background:${esc(p.avatar.colour)}` : ''}"><div class="tro">🏆</div>${p ? avatarHtml(p.avatar, 84) : ''}<div class="t outlined ${p ? 'white' : ''} thin">${esc(x.title)}</div>${p ? `<div class="who2">${esc(p.name)}</div>` : ''}<div class="x">${esc(x.text || '')}</div></div>`;
    $('.reel-dots', root).innerHTML = reel.map((_, i) => `<i class="${i === k % reel.length ? 'on' : ''}"></i>`).join('');
    audio.play('reveal');
    if (k < reel.length) say(`${x.title}! ${x.text || ''}`, k % 2 ? 'pam' : 'jeff', 2);
    k++;
  }
  const startReel = setTimeout(() => { showReel(); reelIv = setInterval(showReel, T(6500)); }, T(6500));
  setTimeout(() => { const l = moment('rematchLine', st.players.map((p) => ({ name: p.name, bankroll: p.bankroll }))); say(l?.text || 'Press space, or tap ready on your phones, to go again.', l?.speaker || 'pam', 2); }, T(6500 * (Math.min(reel.length, 7) + 1)));
  return { destroy: () => { clearInterval(again); clearInterval(reelIv); clearTimeout(startReel); } };
}
