// MARKRUN TV shell: lobby, intros, betting, reveal, race broadcast, results, scoreboard, finale.
// Query params (testing): ?speed=8 (speed up TV-side timers + race), ?race=2d (force 2D race), ?autostart (skip the
// "press any key" overlay), ?mute.
import { connect } from '../shared/net.js';
import { createAudio } from '../shared/sfx.js';
import { $, $$, esc, el, money, moneySay, signedMoney, ordinalHtml, avatarHtml, countUp, runnerById, runnerShort, betLabel, betOdds, betRunnerId, betKind, clueHtml, oddsText, betOutcome, confetti, fmtTime } from '../shared/ui.js';
import { runnerPortrait } from '../shared/portrait.js';
import { createVoice } from './voice.js';
import { createFallbackRaceView } from './fallback-race.js';
import { Race3D, introPlan } from './race-bridge.js';

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
  const maxSubs = ['RESULTS', 'SCOREBOARD', 'FINALE', 'LOBBY'].includes(S?.phase) ? 1 : 2;
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
    x = 1920 * ((idx + 1) / ((S?.players.length || 1) + 1)) + (Math.random() - 0.5) * 220;
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
      <button class="btn small white refresh-btn" data-refresh ${s.refreshing ? 'disabled' : ''}>⟳ Refresh Historical Data</button>`;
  }
  let prevLobby = new Set(st.players.map((p) => p.id));
  render(st);
  root.addEventListener('click', (e) => {
    unlockAll();
    const b = e.target.closest('button');
    if (!b) return;
    audio.play('tick');
    if (b.dataset.start !== undefined) return advance();
    if (b.dataset.refresh !== undefined) return confirmRefresh();
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
  const cardHtml = (r) => `<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${esc(r.colour.primary)}"><div class="rp">${portrait(r, 300)}</div><div class="unslant">
        <div class="nick outlined">${esc(r.nickname)}</div>
        <div class="tagl">${esc(r.tagline || '')}</div>
        ${r.intro ? `<div class="introline">“${esc(r.intro)}”</div>` : ''}
        ${r.publicClue ? `<div class="clue"><span class="k">CLUE</span><span>${clueHtml(r.publicClue)}</span></div>` : ''}
      </div><div class="lane">LANE ${r.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${esc(r.odds?.display || '')}</div></div></div></div>`;
  async function showRunner(i) {
    const r = runners[i];
    $$('.intro-dots i', root).forEach((d, j) => d.classList.toggle('on', j === i));
    box.innerHTML = cardHtml(r);
    audio.play('whoosh');
    say(r.intro || `${r.nickname}. ${r.tagline || ''}`, i % 2 ? 'pam' : 'jeff', 3);
    await waitVoice(tok, 4800, 12000);
  }
  async function finish() {
    if (tok.cancelled) return;
    $$('.intro-dots i', root).forEach((d) => d.classList.remove('on'));
    box.innerHTML = `<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">📱 Grab your phones — your secret clues are waiting 🤫</div></div></div>`;
    audio.play('kaching');
    say('The book is open! Check your phones for your secret clues.', 'pam', 3);
    await waitVoice(tok, 3200, 6000);
    if (!tok.cancelled) send({ t: 'introDone', roundId: round.roundId });
  }

  const t0 = Date.now();
  const hb = setInterval(() => send({ t: 'progress', phase: 'INTRO', roundId: round.roundId, value: Date.now() - t0 }), 2000);
  tok.timers.push(hb);
  (async () => {
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
    await waitVoice(tok, 4200, 14000);
    for (let i = 0; i < runners.length && !tok.cancelled; i++) { await showRunner(i); if (!tok.cancelled) await sleepT(700, tok); }
    await finish();
  })();
  return { destroy: () => { cancelToken(tok); } };
}

// =====================================================================================================
// BETTING
// =====================================================================================================
function runnerCardHtml(r, backers = []) {
  return `<div class="rc panel" data-rid="${r.id}">
    <div class="top stripe" style="--c1:${esc(r.colour.primary)};--c2:${esc(shadeHex(r.colour.primary))}"><div class="lane">${r.lane}</div><div class="rp">${portrait(r, 170)}</div></div>
    <div class="odds"><span class="num">${esc(r.odds?.display || '')}</span>${r.odds?.decimalText ? `<small>pays ×${esc(r.odds.decimalText)}</small>` : ''}</div>
    <div class="nick">${esc(r.nickname)}</div>
    <div class="tagl">${esc(r.tagline || '')}</div>
    <div class="clue"><span class="k">${esc((r.publicClue?.label || 'Public clue').toUpperCase())} · PUBLIC CLUE</span>${clueHtml(r.publicClue)}</div>
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
      <span class="side"><i class="dot" style="background:${esc(a.colour.primary)}"></i>${esc(runnerShort(a))} <span class="od">${esc(m.odds.displayA || `×${m.odds.a}`)}</span></span>
      <span class="vs">VS</span>
      <span class="side"><i class="dot" style="background:${esc(b.colour.primary)}"></i>${esc(runnerShort(b))} <span class="od">${esc(m.odds.displayB || `×${m.odds.b}`)}</span></span></div></div>`;
  }).join('');
}

function themeBadge(round) {
  const t = round?.theme;
  const dbl = Number(round?.payoutMultiplier) >= 2;
  return `${t?.label ? `<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${esc(t.label)}</div></div>` : ''}${dbl ? '<div class="double-badge outlined">DOUBLE PAYOUT FINALE ×2</div>' : ''}`;
}
function propsHtml(round) {
  return (round.props || []).map((p) => `<div class="mu prop panel slant"><div class="unslant" style="display:flex;align-items:center;gap:16px"><span class="lbl">🎡 SIDE BET</span><span class="ptxt">${esc(p.text)}</span>
    <span class="od yes">YES ${esc(p.odds?.displayYes || `×${p.odds?.yes}`)}</span><span class="od no">NO ${esc(p.odds?.displayNo || `×${p.odds?.no}`)}</span></div></div>`).join('');
}

function bettingScreen(st) {
  const round = st.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  const root = el(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${round.number}/${st.roundsPerGame} · ${esc(round.title)}</div>${themeBadge(round)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${runners.length}">${runners.map((r) => runnerCardHtml(r)).join('')}</div>
    <div class="matchups">${matchupsHtml(round)}</div>
    <div class="props-row">${propsHtml(round)}</div>
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
  const tipTimer = setTimeout(() => { const t = tips[Math.floor(Math.random() * tips.length)]; say(t[1], t[0], 1); }, T(12000));
  return { destroy: () => { clearInterval(iv); clearTimeout(tipTimer); } };
}

// =====================================================================================================
// REVEAL (all locked): one bet at a time, smallest to largest (betRevealOrder), each with its line
// =====================================================================================================
function revealScreen(st) {
  const tok = makeToken();
  const round = st.round;
  let seq = (st.revealSeq || []).filter((x) => x && x.bet);
  if (!seq.length) { // fallback: interleave players, smallest first
    const lines = (st.betLines || []).slice();
    seq = st.players.flatMap((p) => (st.bets?.[p.id] || []).map((bet) => ({ playerId: p.id, bet }))).sort((a, b) => a.bet.stake - b.bet.stake)
      .map((x) => ({ ...x, line: lines.shift() || null }));
  }
  const root = el(`<div class="reveal">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="spot"></div>
    <div class="tally">${st.players.map((p) => `<div class="tcol panel slant" data-pid="${p.id}" style="background:${esc(p.avatar.colour)}"><div class="unslant"><div class="who">${avatarHtml(p.avatar, 64)}<span>${esc(p.name)}</span><span class="tot num" data-tot>0pp</span></div><div class="chips"></div></div></div>`).join('')}</div>
  </div>`);
  screenEl.appendChild(root);
  const spot = $('.spot', root);
  const totals = {};
  (async () => {
    audio.play('drumroll', { dur: 1.6 / SPEED + 0.2 });
    say(seq.length ? "Right then. Let's see the damage, smallest first." : 'Nobody has bet a penny. Cowards, the lot of them.', 'jeff', 3);
    await sleepT(1800, tok);
    for (let i = 0; i < seq.length && !tok.cancelled; i++) {
      const { playerId, bet, line } = seq[i];
      const p = st.players.find((x) => x.id === playerId);
      const r = runnerById(round, betRunnerId(bet));
      const odds = betOdds(round, bet);
      const oddsTxt = oddsText(round, bet);
      const big = i === seq.length - 1 && seq.length > 1;
      spot.innerHTML = `<div class="spotcard"><div class="anim-pop"><div class="sc panel ${big ? 'yellow' : 'white'}">
        <div class="scp">${avatarHtml(p?.avatar, 110)}<div class="scn">${esc(p?.name || '')}</div></div>
        <div class="scr">${r ? portrait(r, 150) : '<span class="propicon big">🎡</span>'}</div>
        <div class="scb"><div class="sck">${betKind(bet)}${big ? ' · THE BIG ONE' : ''}</div><div class="scl">${esc(betLabel(round, bet))}</div><div class="sco">${esc(oddsTxt)} · pays ${money(bet.stake * odds)}</div></div>
        <div class="scs num">${money(bet.stake)}</div></div></div></div>`;
      audio.play(big ? 'kaching' : 'pop');
      if (line?.text) say(line.text, line.speaker || (i % 2 ? 'pam' : 'jeff'), 3);
      totals[playerId] = (totals[playerId] || 0) + bet.stake;
      const col = root.querySelector(`.tcol[data-pid="${playerId}"]`);
      if (col) {
        col.querySelector('.chips').appendChild(el(`<div class="tchip anim-pop">${r ? `<i style="background:${esc(r.colour.primary)}"></i>` : '🎡 '}<span>${esc(bet.type === 'prop' ? 'Side bet' : runnerShort(r))}</span><b>${money(bet.stake)}</b></div>`));
        col.querySelector('[data-tot]').textContent = money(totals[playerId]);
      }
      await waitVoice(tok, 2600, 9000);
    }
    if (tok.cancelled) return;
    if (!(st.revealSeq || []).length) { // clash banter when the game module didn't provide lines
      const picks = st.players.map((p) => new Set((st.bets?.[p.id] || []).filter((b) => b.type === 'win').map((b) => b.runnerId)));
      let shared = null;
      if (picks.length >= 2) for (const r of picks[0]) if (picks.slice(1).every((s) => s.has(r))) shared = runnerById(round, r);
      if (shared) { spot.innerHTML = `<div class="spotcard"><div class="same panel yellow anim-pop">Great minds… both backing ${esc(shared.nickname)}! 🤝</div></div>`; say(`They've both gone for ${shared.nickname}. Either genius, or a shared delusion.`, 'pam', 3); await waitVoice(tok, 2200, 7000); }
    }
    if (tok.cancelled) return;
    for (const n of (Race3D?.createRaceView && !FORCE_2D ? [] : ['3', '2', '1'])) {
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
  const root = el(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE · ${esc(round.title)}</div></div><div class="market-layer"></div></div>`);
  screenEl.appendChild(root);
  document.body.classList.add('racing');
  const mkLayer = $('.market-layer', root);
  let lastWhoosh = 0;
  let finished = 0;
  let marketState = 'idle'; // idle | waiting | open | done
  let marketResolve = null;
  let clockIv = null, mkIv = null;
  async function runMarket(v) {
    marketState = 'waiting';
    try { v.setPaused(true, { market: true, marketText: 'Bet on your phones — one bet each!' }); } catch { /* */ }
    audio.play('bell'); audio.play('crowd', { dur: 2, peak: 0.2 });
    say('Halfway! The market is open. One bet each — quick!', 'jeff', 3);
    send({ t: 'marketOpen', roundId: round.roundId });
    mkLayer.innerHTML = marketHtml(S);
    mkIv = setInterval(() => {
      const t = mkLayer.querySelector('[data-mkt]');
      if (t && S?.market?.closesAt) t.textContent = `${Math.max(0, Math.ceil((S.market.closesAt - net.serverNow()) / 1000))}s`;
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
    if (!v) v = await makeRaceView({ round, plan: st.racePlan, backedBy: st.backedBy || {} });
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
    v.playRace((e) => {
      if (tok.cancelled || !e) return;
      log({ type: 'race-event', e: e.type || 'line', text: e.text });
      if (e.kind === 'countdown') { audio.play(e.n === 0 ? 'go' : 'beep'); if (e.n === 0) { audio.play('horn'); audio.play('crowd', { dur: 3, peak: 0.28 }); } return; }
      if (e.kind === 'photo_finish') { audio.play('stamp'); say("It's a photo finish! Hold your breath!", 'pam', 3); return; }
      if (e.text && (e.kind === 'commentary' || !e.type)) { if (marketState !== 'waiting') voice.say(e.text, e.speaker || 'jeff', { priority: e.priority || 2 }); return; }
      switch (e.type) {
        case 'overtake': if (Date.now() - lastWhoosh > 1500) { lastWhoosh = Date.now(); audio.play('whoosh'); } break;
        case 'lead_change': audio.play('whoosh'); audio.play('crowd', { dur: 2, peak: 0.18 }); break;
        case 'breakaway': audio.play('crowd', { dur: 2.5, peak: 0.2 }); break;
        case 'lap':
          if (marketState === 'idle' && S?.marketAvailable) { log({ type: 'market' }); runMarket(v); } else audio.play('bell');
          break;
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
      mkLayer.innerHTML = marketHtml(s);
    },
    destroy: () => { cancelToken(tok); clearInterval(clockIv); clearInterval(mkIv); marketResolve?.(); },
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
    await waitVoice(t, 5500, 14000);
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
          ${x.stravaTitle ? `<div class="strava"><span class="k">STRAVA TITLE</span>“${esc(x.stravaTitle)}”</div>` : ''}
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
      if (i === 0 || i === cards.length - 1) say(`${i === 0 ? 'The winner' : 'And in last place'}, ${r?.nickname}: ${x?.headline || x?.dateText || ''}`, i === 0 ? 'jeff' : 'pam', 2);
      await sleepT(i === 0 ? 3200 : 2600, t);
    }
    await waitVoice(t, 6000, 12000);
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
      await waitVoice(t, 2800, 8000);
    }
    await waitVoice(t, 3500, 9000);
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
        <div class="net num" data-net="${pay.net}">${signedMoney(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${money(pay.bankroll - pay.net)}</span></div>
        ${drinking ? drinkHtml(pay.net, p.id) : ''}
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
    await waitVoice(t, 7000, 14000);
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
      return `<div class="award panel slant ${p ? '' : 'yellow'}" style="${p ? `background:${esc(p.avatar.colour)}` : ''}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">🏆</span>${p ? avatarHtml(p.avatar, 84) : ''}<div><div class="at outlined white thin">${esc(a.title)}</div><div class="ax" style="color:${p ? '#fff' : 'var(--ink)'}">${esc(a.text || '')}</div></div></div></div>`;
    }).join('')}</div>`;
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
    subsEl.innerHTML = '';
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
    return `<div class="rcp">${avatarHtml(p.avatar, 54)}<span class="rn">${esc(p.name)}</span><span class="rx">${best ? `✅ ${esc(betLabel(s.round, best))}` : (pay?.bets || []).length ? '❌ nothing came in' : '🙈 no bets'}</span><span class="rnet ${pay?.net > 0 ? 'up' : pay?.net < 0 ? 'down' : ''}">${signedMoney(pay?.net || 0)}</span></div>`;
  }).join('');
  const aw = (res.awards || []).slice(0, 2).map((a) => `<span class="raw">🏆 ${esc(a.title)}</span>`).join('');
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
  const awards = (st.history || []).flatMap((h) => (h.awards || []).map((a) => ({ title: a.title, text: `Round ${h.round}`, playerId: a.playerId })));
  const reel = [...(st.superlatives || []), ...awards].filter((x) => x && x.title);
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
    card.innerHTML = `<div class="rc2 panel ${p ? '' : 'yellow'} anim-pop" style="${p ? `background:${esc(p.avatar.colour)}` : ''}"><div class="tro">🏆</div>${p ? avatarHtml(p.avatar, 84) : ''}<div class="t outlined ${p ? 'white' : ''} thin">${esc(x.title)}</div><div class="x">${esc(x.text || '')}</div></div>`;
    $('.reel-dots', root).innerHTML = reel.map((_, i) => `<i class="${i === k % reel.length ? 'on' : ''}"></i>`).join('');
    audio.play('reveal');
    if (k < reel.length) say(`${x.title}! ${x.text || ''}`, k % 2 ? 'pam' : 'jeff', 2);
    k++;
  }
  const startReel = setTimeout(() => { showReel(); reelIv = setInterval(showReel, T(6500)); }, T(6500));
  setTimeout(() => say('Press space, or tap ready on your phones, to go again.', 'pam', 1), T(6500 * (reel.length + 1)));
  return { destroy: () => { clearInterval(again); clearInterval(reelIv); clearTimeout(startReel); } };
}
