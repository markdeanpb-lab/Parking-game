// The web edition's host, running inside the TV page: the authoritative Game (server/net/game.mjs), the hub's rules
// (server/net/hub.mjs) over WebRTC, the real game module on DB shims, and the session saved to localStorage.
import QRCode from 'qrcode';
import { Game, newSessionState } from '../server/net/game.mjs';
import { attachHub } from '../server/net/hub.mjs';
import { loadSession, saveSession, clearSession } from '../server/net/persist.mjs';
import { createHistShim, createSessShim } from './shims.js';
import { createWebRoundSource } from './roundsource.js';
import { FakeWss, localTransport, openHostPeer, newRoomCode, validCode, signallingQuery, signallingFromParams } from './peerlink.js';
import { storage, getJSON, setJSON } from './storage.js';

const ROOM_KEY = 'markrun.web.room';
const LINK_KEY = 'markrun.web.pageLink';

// The TV fetches /data/course.json + /data/park.json from the Node host; here they come from the data bundle.
function installDataFetch(bundle) {
  const orig = globalThis.fetch.bind(globalThis);
  const files = { 'course.json': bundle.course, 'park.json': bundle.park };
  globalThis.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input?.url || '';
    const m = /(?:^|\/)data\/(course|park)\.json(?:[?#].*)?$/.exec(url);
    if (m && files[`${m[1]}.json`]) {
      return Promise.resolve(new Response(JSON.stringify(files[`${m[1]}.json`]), { status: 200, headers: { 'Content-Type': 'application/json' } }));
    }
    return orig(input, init);
  };
}

export const normaliseLink = (s) => {
  s = String(s || '').trim();
  if (!s) return '';
  if (!/^https?:\/\//i.test(s)) s = `https://${s}`;
  try { return new URL(s).href; } catch { return ''; }
};

export async function startHost({ params, onPeerStatus = () => {}, onCode = () => {} } = {}) {
  const res = await fetch('data.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error(`could not load data.json (${res.status})`);
  const bundle = await res.json();
  installDataFetch(bundle);

  const hist = createHistShim(bundle);
  const sess = createSessShim(storage);
  for (const s of [hist, sess]) s.onUnknown = (kind, q) => console.error('[markrun] web shim: unknown query', kind, q);
  const rounds = createWebRoundSource({ hist, sess, fixture: bundle.fixture });

  if (params.has('fresh')) clearSession(sess);
  const saved = loadSession(sess);
  const timeScale = Number(params.get('timerScale')) || 1;
  const game = new Game({ state: saved || newSessionState(), rounds, timeScale });

  // persist (debounced; flushed when the page is hidden or unloaded so a TV reload resumes exactly)
  let saveTimer = null;
  const saveNow = () => {
    clearTimeout(saveTimer); saveTimer = null;
    try { saveSession(game.s, sess); } catch (e) { console.error('[markrun] save failed:', e.message); }
  };
  const save = () => { if (!saveTimer) saveTimer = setTimeout(saveNow, 150); };
  game.on('change', save);
  game.on('persist', save);
  saveNow();
  addEventListener('pagehide', saveNow);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveNow(); });

  // room code (persisted, so a reload re-opens the same peer id and the phones find the TV again)
  let code = storage.getItem(ROOM_KEY);
  const fresh = !validCode(code);
  if (fresh) { code = newRoomCode(); storage.setItem(ROOM_KEY, code); }

  const sigQuery = signallingQuery(params);
  let pageLink = normaliseLink(getJSON(LINK_KEY, ''));
  let qrSvg = '';
  let peerStatus = 'connecting';
  const directLink = () => {
    const base = `${location.origin}${location.pathname}`;
    return `${base}${sigQuery ? `?${sigQuery}` : ''}#join=${code}`;
  };
  const joinLink = () => pageLink || directLink();
  async function refreshQr() {
    try { qrSvg = await QRCode.toString(joinLink(), { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#14183cff', light: '#ffffffff' } }); } catch (e) { qrSvg = ''; console.warn('[markrun] QR failed:', e.message); }
    game.emit('live'); // re-push the TV view (not a state change: nothing to save)
    web.onChange?.();
  }

  const wss = new FakeWss();
  const info = { roundSource: rounds.sourceName(), edition: 'web' };
  const web = {
    game, rounds, wss, bundle, hist, sess,
    get code() { return code; },
    get peerStatus() { return peerStatus; },
    get pageLink() { return pageLink; },
    get joinLink() { return joinLink(); },
    get directLink() { return directLink(); },
    get qrSvg() { return qrSvg; },
    lastIngest: bundle.lastIngest || bundle.meta?.last_ingest || null,
    onChange: null,
    setPageLink(v) { pageLink = normaliseLink(v); setJSON(LINK_KEY, pageLink); return refreshQr(); },
  };
  const hub = attachHub(null, game, {
    wss, info,
    tvExtra: () => ({ joinUrl: joinLink(), qrSvg, web: { code, peerStatus, pageLink, lastIngest: web.lastIngest } }),
  });
  web.hub = hub;
  await refreshQr();

  const sig = signallingFromParams(params);
  let hostPeer = null;
  const openPeer = (isFresh) => {
    hostPeer = openHostPeer({
      code, sig, wss, fresh: isFresh,
      onStatus: (st) => { peerStatus = st; onPeerStatus(st); game.emit('live'); web.onChange?.(); },
      onCodeTaken: () => {
        code = newRoomCode();
        storage.setItem(ROOM_KEY, code);
        onCode(code);
        refreshQr();
        openPeer(true);
      },
    });
    web.peer = hostPeer;
  };
  openPeer(fresh);
  onCode(code);

  // the TV UI connects through the local in-memory channel (the TV role is only ever local in the web edition)
  globalThis.__markrunTransport = localTransport(wss);
  globalThis.__markrunHost = web; // debugging + tests
  return web;
}
