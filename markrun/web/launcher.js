// MARKRUN web edition (itch.io HTML5 build) — first screen: "This is the TV" or "Join on my phone".
// Routes: #tv (resume as the TV), #phone=KBXM / #join=KBXM (join that room; the TV's QR uses #join).
import { storage, getJSON, setJSON, installLocalStoragePolyfill, persistent } from './storage.js';
import { ROOM_LETTERS, validCode } from './peerlink.js';

installLocalStoragePolyfill(); // cross-origin iframe with blocked storage: the TV/phone UIs still remember tokens
const LAST_KEY = 'markrun.web.last';
const params = new URLSearchParams(location.search);
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const inIframe = (() => { try { return window.self !== window.top; } catch { return true; } })();
const coarse = () => { try { return matchMedia('(pointer: coarse)').matches; } catch { return false; } };
window.__markrunWeb = { inIframe, persistent: persistent(), events: [] };
const ev = (e) => window.__markrunWeb.events.push({ at: Date.now(), ...e });

function show(id) {
  for (const s of document.querySelectorAll('#launcher > section')) s.classList.toggle('hidden', s.id !== id);
}
function setHash(h) { try { history.replaceState(null, '', `${location.pathname}${location.search}${h}`); } catch { location.hash = h; } }
const remember = (o) => setJSON(LAST_KEY, { ...o, at: Date.now() });
function busy(msg) { show('wl-busy'); $('#wl-busy .msg').textContent = msg; }
function fatal(msg) {
  show('wl-busy');
  $('#wl-busy').innerHTML = `<div class="wl-fatal"><div class="em">😵</div><h2>Something went wrong</h2><p>${esc(msg)}</p><button class="btn white" onclick="location.reload()">Try again</button></div>`;
}
async function goFullscreen() { // phones inside the itch.io page: use the whole screen (itch's own button works too)
  if (!coarse() || document.fullscreenElement) return;
  try { await document.documentElement.requestFullscreen?.({ navigationUI: 'hide' }); } catch { /* not allowed here */ }
}

// ---- TV --------------------------------------------------------------------------------------------------------------
async function startTv() {
  remember({ role: 'tv', code: storage.getItem('markrun.web.room') || null });
  setHash('#tv');
  busy('Starting the TV…');
  try {
    const { startTv: start } = await import('./tv-entry.js');
    const web = await start({ params, onStatus: busy });
    remember({ role: 'tv', code: web.code });
    ev({ type: 'tv-started', code: web.code });
  } catch (e) {
    console.error(e);
    fatal(`The TV could not start: ${e.message}`);
  }
}

// ---- phone -----------------------------------------------------------------------------------------------------------
let problemEl = null;
function phoneProblem(code, p) {
  ev({ type: 'phone-problem', kind: p?.kind || null });
  if (!p) { problemEl?.remove(); problemEl = null; return; }
  if (!problemEl) {
    problemEl = document.createElement('div');
    problemEl.id = 'web-problem';
    document.body.appendChild(problemEl);
  }
  problemEl.innerHTML = `<div class="wp-card"><div class="em">📺❓</div><h2>Can't reach the TV</h2>
    <p>${esc(p.msg)}</p>
    <div class="wp-code">Room <b>${esc(code)}</b></div>
    <div class="wp-acts"><button class="btn green" data-retry>Try again</button><button class="btn white" data-change>Change code</button></div>
    <small>${p.kind === 'unreachable' ? 'Still stuck? Put the phones on the same Wi-Fi as the TV computer, and keep the TV tab open and visible.' : ''}</small></div>`;
  problemEl.querySelector('[data-retry]').onclick = () => { window.__markrunPhoneNet?.reconnect?.(); problemEl.querySelector('small').textContent = 'Trying again…'; };
  problemEl.querySelector('[data-change]').onclick = () => { setHash('#enter'); location.reload(); };
}
async function startPhone(code) {
  code = String(code || '').toUpperCase();
  if (!validCode(code)) { openJoin(code); return; }
  remember({ role: 'phone', code });
  setHash(`#phone=${code}`);
  busy(`Joining room ${code}…`);
  try {
    const { startPhone: start } = await import('./phone-entry.js');
    await start({ code, params, onProblem: (p) => phoneProblem(code, p) });
    ev({ type: 'phone-started', code });
  } catch (e) {
    console.error(e);
    fatal(`Could not start: ${e.message}`);
  }
}

// ---- 4 big letter boxes ----------------------------------------------------------------------------------------------
function openJoin(prefill = '') {
  show('wl-join');
  const boxes = [...document.querySelectorAll('#wl-join .wl-code input')];
  const err = $('#wl-join .wl-err');
  const go = $('#wl-go');
  const clean = (s) => String(s || '').toUpperCase().split('').filter((c) => ROOM_LETTERS.includes(c));
  const value = () => boxes.map((b) => b.value).join('');
  const sync = () => { go.disabled = value().length !== 4; err.textContent = ''; };
  const fill = (letters, from = 0) => {
    let i = from;
    for (const c of letters) { if (i >= 4) break; boxes[i++].value = c; }
    sync();
    (boxes[Math.min(i, 3)] || boxes[3]).focus();
  };
  boxes.forEach((b, i) => {
    b.value = '';
    b.oninput = () => {
      const raw = b.value;
      const letters = clean(raw);
      if (raw && !letters.length) { err.textContent = /[IO]/i.test(raw) ? 'Codes never use I or O.' : 'Letters only.'; b.value = ''; return; }
      b.value = letters[0] || '';
      if (letters.length > 1) fill(letters.slice(1), i + 1);
      else if (letters.length && i < 3) boxes[i + 1].focus();
      sync();
      if (value().length === 4 && letters.length) go.focus();
    };
    b.onkeydown = (e) => {
      if (e.key === 'Backspace' && !b.value && i > 0) { boxes[i - 1].value = ''; boxes[i - 1].focus(); e.preventDefault(); sync(); }
      else if (e.key === 'ArrowLeft' && i > 0) boxes[i - 1].focus();
      else if (e.key === 'ArrowRight' && i < 3) boxes[i + 1].focus();
      else if (e.key === 'Enter' && value().length === 4) go.click();
    };
    b.onpaste = (e) => { const t = e.clipboardData?.getData('text') || ''; e.preventDefault(); boxes.forEach((x) => { x.value = ''; }); fill(clean(t)); };
    b.onfocus = () => b.select?.();
  });
  if (prefill) fill(clean(prefill)); else { sync(); setTimeout(() => { if (!boxes.some((x) => x.value) && !boxes.includes(document.activeElement)) boxes[0].focus(); }, 50); }
  go.onclick = () => { const c = value(); if (c.length === 4) { goFullscreen(); startPhone(c); } };
}

// ---- home ------------------------------------------------------------------------------------------------------------
function home() {
  show('wl-home');
  const last = getJSON(LAST_KEY, null);
  const rj = $('#wl-rejoin');
  const fresh = last && Date.now() - (last.at || 0) < 1000 * 60 * 60 * 18;
  if (fresh && last.role === 'phone' && validCode(last.code)) {
    rj.innerHTML = `↩ Rejoin room <b>${esc(last.code)}</b> on this phone`;
    rj.onclick = () => { goFullscreen(); startPhone(last.code); };
    rj.classList.remove('hidden');
  } else if (fresh && last.role === 'tv') {
    const code = storage.getItem('markrun.web.room');
    rj.innerHTML = `↩ Resume the TV${validCode(code) ? ` · room <b>${esc(code)}</b>` : ''}`;
    rj.onclick = startTv;
    rj.classList.remove('hidden');
  } else rj.classList.add('hidden');
  $('#wl-tv').onclick = startTv;
  $('#wl-phone').onclick = () => { const l = getJSON(LAST_KEY, null); openJoin(l?.role === 'phone' && validCode(l.code) ? l.code : ''); };
  $('#wl-back').onclick = () => { setHash(''); home(); };
}

// ---- route -----------------------------------------------------------------------------------------------------------
const h = location.hash.replace(/^#/, '');
const m = /^(?:phone|join)=([A-Za-z]{4})$/.exec(h);
home();
if (h === 'tv') startTv();
else if (m) startPhone(m[1]);
else if (h === 'enter' || h === 'join') openJoin('');
