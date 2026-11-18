// Web edition transports.
//  - FakeWss + PeerSocket: present PeerJS DataConnections to server/net/hub.mjs exactly like `ws` sockets
//    (send, readyState, on('message'|'close'|'pong'), ping, terminate), so the hub's rules apply unchanged.
//  - localTransport: the TV UI talks to the in-page host through the same JSON protocol (an in-memory channel).
//  - peerTransport: phones connect a DataConnection to the TV's peer id; auto-reconnect with backoff, heartbeats,
//    clock sync, "can't reach the TV" detection. Implements the same API as client/shared/net.js connect().
import * as PeerJS from 'peerjs';
import { Emitter } from '../server/net/emitter.mjs';
import { encodeFrames, createDecoder } from './frames.js';

// (bundlers see PeerJS's ES module; Node, used by the unit tests, sees its CommonJS build)
const Peer = PeerJS.Peer || PeerJS.default?.Peer;
export const PROTOCOL = 'v1';
export const ROOM_LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I / O (and no digits: no 0 / 1)
const ROOM_BLOCK = /^(FUCK|SHIT|CUNT|TWAT|PISS|DICK|COCK|SLAG|WANK|NAZI|ANUS|ARSE|CRAP|TITS|PAKI|SPAZ|FAGS|KKKK)$/;
export const peerIdFor = (code) => `markrun-${String(code).toUpperCase()}-${PROTOCOL}`;
export const validCode = (c) => typeof c === 'string' && c.length === 4 && [...c].every((ch) => ROOM_LETTERS.includes(ch));
export function newRoomCode(rand = Math.random) {
  for (;;) {
    let c = '';
    for (let i = 0; i < 4; i++) c += ROOM_LETTERS[Math.floor(rand() * ROOM_LETTERS.length)];
    if (!ROOM_BLOCK.test(c)) return c;
  }
}
const HB = '{"t":"__hb"}';
const HBR = '{"t":"__hbr"}';
const MAX_IN = 64 * 1024; // same limit as the ws hub (maxPayload)

// ---- signalling + ICE config ----------------------------------------------------------------------------------------
// Default: the free PeerJS cloud + Google's public STUN. Overridable for tests/self-hosting via query params:
//   ?peerHost=127.0.0.1&peerPort=9000&peerPath=/peerjs&peerSecure=0&peerKey=peerjs&ice=none|google|peerjs|<json>
export function signallingFromParams(params) {
  const g = (k) => params.get(k);
  const cfg = {};
  if (g('peerHost')) cfg.host = g('peerHost');
  if (g('peerPort')) cfg.port = Number(g('peerPort'));
  if (g('peerPath')) cfg.path = g('peerPath');
  if (g('peerSecure')) cfg.secure = !/^(0|false|no)$/i.test(g('peerSecure'));
  if (g('peerKey')) cfg.key = g('peerKey');
  if (g('peerDebug')) cfg.debug = Number(g('peerDebug')) || 0;
  const ice = g('ice') || 'google';
  const GOOGLE = [{ urls: 'stun:stun.l.google.com:19302' }];
  const PEERJS_TURN = [{ urls: ['turn:eu-0.turn.peerjs.com:3478', 'turn:us-0.turn.peerjs.com:3478'], username: 'peerjs', credential: 'peerjsp' }];
  let iceServers = GOOGLE;
  if (ice === 'none') iceServers = [];
  else if (ice === 'peerjs') iceServers = [...GOOGLE, ...PEERJS_TURN];
  else if (ice.startsWith('[')) { try { iceServers = JSON.parse(ice); } catch { /* keep default */ } }
  cfg.config = { iceServers };
  return cfg;
}
// the query params to carry over to phones (QR / direct link) so they reach the same signalling server
export function signallingQuery(params) {
  const out = new URLSearchParams();
  for (const k of ['peerHost', 'peerPort', 'peerPath', 'peerSecure', 'peerKey', 'ice']) if (params.get(k)) out.set(k, params.get(k));
  return out.toString();
}
const peerOptions = (sig) => ({ debug: 0, ...sig, config: sig?.config || { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] } });

// ---- ws-like sockets for the hub ------------------------------------------------------------------------------------
export class FakeWss extends Emitter {
  close() { this.emit('close'); }
}

export class PeerSocket extends Emitter {
  constructor(conn) {
    super();
    this.conn = conn;
    this.closed = false;
    const dec = createDecoder();
    conn.on('data', (d) => {
      const s = dec(d);
      if (s == null || s.length > MAX_IN) return;
      this.emit('pong'); // any traffic proves the phone is alive
      if (s === HBR) return;
      if (s === HB) { this.send(HBR); return; }
      this.emit('message', s);
    });
    const done = () => { if (this.closed) return; this.closed = true; this.emit('close'); };
    conn.on('close', done);
    conn.on('error', done);
    try {
      conn.peerConnection?.addEventListener('connectionstatechange', () => {
        const st = conn.peerConnection?.connectionState;
        if (st === 'failed' || st === 'closed') this.terminate();
      });
    } catch { /* */ }
  }
  get readyState() { return this.closed ? 3 : this.conn.open ? 1 : 0; }
  send(str) {
    if (this.readyState !== 1) return;
    try { for (const f of encodeFrames(typeof str === 'string' ? str : JSON.stringify(str))) this.conn.send(f); } catch { this.terminate(); }
  }
  ping() { this.send(HB); }
  terminate() {
    try { this.conn.close(); } catch { /* */ }
    if (!this.closed) { this.closed = true; this.emit('close'); }
  }
  close() { this.terminate(); }
}

// The TV page's own socket: delivered asynchronously like a network, JSON-serialised so nothing is shared by reference.
class LocalServerSocket extends Emitter {
  constructor(toClient) { super(); this.toClient = toClient; this.readyState = 1; }
  send(str) { if (this.readyState === 1) queueMicrotask(() => this.toClient(typeof str === 'string' ? str : JSON.stringify(str))); }
  ping() { queueMicrotask(() => this.emit('pong')); }
  terminate() { if (this.readyState === 3) return; this.readyState = 3; this.emit('close'); }
  close() { this.terminate(); }
}

export function localTransport(wss) {
  return {
    connect({ role, getToken, getKey, onWelcome, onState, onMessage, onStatus }) {
      let sock = null;
      const dispatch = (str) => {
        let m;
        try { m = JSON.parse(str); } catch { return; }
        if (m.t === 'pong') return;
        if (m.t === 'welcome') onWelcome?.(m);
        else if (m.t === 'state') onState?.(m.state);
        else onMessage?.(m);
      };
      const send = (msg) => {
        if (!sock || sock.readyState !== 1) return false;
        const s = JSON.stringify(msg);
        queueMicrotask(() => sock.emit('message', s));
        return true;
      };
      const open = () => {
        sock = new LocalServerSocket(dispatch);
        // the hub trusts this socket as the host's own screen (loopback, no proxy headers) -> TV role allowed
        wss.emit('connection', sock, { socket: { remoteAddress: '127.0.0.1' }, headers: {} });
        queueMicrotask(() => { onStatus?.('open'); send({ t: 'hello', role, token: getToken?.() || undefined, key: getKey?.() || undefined }); });
      };
      open();
      return {
        send,
        reconnect() { sock?.terminate(); open(); },
        close() { sock?.terminate(); },
        serverNow: () => Date.now(),
        get open() { return sock?.readyState === 1; },
      };
    },
  };
}

// ---- TV host peer -----------------------------------------------------------------------------------------------------
// Registers markrun-<CODE>-v1 at the signalling server and hands every phone DataConnection to the hub as a socket.
// Survives signalling drops (reconnect with backoff); on "id taken" retries (a reloaded TV's old registration may linger
// for a few seconds), then asks for a new code via onCodeTaken (fresh codes are replaced immediately).
export function openHostPeer({ code, sig, wss, fresh = false, onStatus = () => {}, onCodeTaken = () => {}, log = console }) {
  let peer = null;
  let stopped = false;
  let attempt = 0;
  let takenTries = 0;
  let timer = null;
  let everOpen = false;
  const id = peerIdFor(code);

  function create() {
    clearTimeout(timer);
    if (stopped) return;
    try { peer?.destroy(); } catch { /* */ }
    onStatus(attempt ? 'reconnecting' : 'connecting');
    const p = new Peer(id, peerOptions(sig));
    peer = p;
    p.on('open', () => { if (p !== peer) return; attempt = 0; takenTries = 0; everOpen = true; onStatus('online'); });
    p.on('connection', (conn) => {
      const hand = () => wss.emit('connection', new PeerSocket(conn), { socket: { remoteAddress: `peer:${conn.peer}` }, headers: {} });
      if (conn.open) hand(); else conn.on('open', hand);
    });
    p.on('disconnected', () => { // lost the signalling server (existing phone connections keep working)
      if (p !== peer || stopped || p.destroyed) return;
      onStatus('reconnecting');
      retry(() => { try { if (!p.destroyed) p.reconnect(); else create(); } catch { create(); } });
    });
    p.on('error', (err) => {
      if (p !== peer || stopped) return;
      const type = err?.type;
      if (type === 'unavailable-id') {
        takenTries++;
        if (fresh && !everOpen) { stop(); onCodeTaken(); return; }
        if (takenTries > 12) { stop(); onCodeTaken(); return; }
        onStatus('taken');
        try { p.destroy(); } catch { /* */ }
        timer = setTimeout(create, Math.min(6000, 1000 + takenTries * 500));
        return;
      }
      if (type === 'peer-unavailable' || type === 'webrtc' || type === 'negotiation-failed' || type === 'connection-closed') return; // per-phone problems
      if (type === 'browser-incompatible') { onStatus('incompatible'); return; }
      log.warn?.('[markrun] signalling problem:', type, err?.message);
      onStatus('reconnecting');
      retry(() => { if (p.destroyed) create(); else if (p.disconnected) { try { p.reconnect(); } catch { create(); } } });
    });
    p.on('close', () => { if (p === peer && !stopped) retry(create); });
  }
  function retry(fn) {
    clearTimeout(timer);
    const delay = Math.min(10000, 500 * 2 ** attempt) * (0.8 + Math.random() * 0.4);
    attempt++;
    timer = setTimeout(() => { if (!stopped) fn(); }, delay);
  }
  function stop() { stopped = true; clearTimeout(timer); try { peer?.destroy(); } catch { /* */ } }
  const wake = () => { if (!stopped && peer && (peer.disconnected || peer.destroyed)) { attempt = 0; if (peer.destroyed) create(); else try { peer.reconnect(); } catch { create(); } } };
  globalThis.addEventListener?.('online', wake);
  globalThis.document?.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') wake(); });
  // a reload must free the id at once so the reloaded TV can take it back
  globalThis.addEventListener?.('pagehide', () => { try { peer?.destroy(); } catch { /* */ } });
  create();
  return { id, stop, get peer() { return peer; } };
}

// ---- phone transport --------------------------------------------------------------------------------------------------
// onProblem(null | { kind: 'unreachable'|'signalling'|'incompatible', msg }) drives the big error card in the launcher UI.
export function peerTransport({ code, sig, onProblem = () => {}, log = console }) {
  const hostId = peerIdFor(code);
  return {
    connect({ role, getToken, getKey, onWelcome, onState, onMessage, onStatus }) {
      let peer = null, conn = null;
      let attempt = 0, timer = null, openTimer = null, pingTimer = null;
      let closedByUs = false;
      let offset = 0;
      let lastMsgAt = 0;
      let everOpen = false;
      let downSince = Date.now();
      let hostMissing = 0;
      let problem = null;
      const status = (s) => onStatus?.(s);
      const setProblem = (p) => { if ((p?.kind || null) === (problem?.kind || null)) return; problem = p; onProblem(p); };
      const dec = createDecoder();

      function ensurePeer() {
        if (peer && !peer.destroyed) {
          if (peer.disconnected) { try { peer.reconnect(); } catch { peer.destroy(); peer = null; return ensurePeer(); } }
          return peer;
        }
        const p = new Peer(peerOptions(sig));
        peer = p;
        p.on('open', () => { if (p === peer) dial(); });
        p.on('disconnected', () => { if (p === peer && !closedByUs) setTimeout(() => { if (p === peer && !p.destroyed && p.disconnected) { try { p.reconnect(); } catch { /* */ } } }, 1000); });
        p.on('error', (err) => {
          if (p !== peer || closedByUs) return;
          const type = err?.type;
          if (type === 'peer-unavailable') { hostMissing++; if (conn) dropConn(conn); else schedule(); return; }
          if (type === 'browser-incompatible') { setProblem({ kind: 'incompatible', msg: "This browser can't make peer-to-peer connections (WebRTC). Try Chrome or Safari." }); return; }
          if (['network', 'server-error', 'socket-error', 'socket-closed', 'disconnected', 'unavailable-id'].includes(type)) {
            try { p.destroy(); } catch { /* */ }
            peer = null;
            if (conn) dropConn(conn); else schedule();
            return;
          }
          log.warn?.('[markrun] peer error:', type, err?.message);
        });
        return null;
      }

      function dial() {
        clearTimeout(timer);
        if (closedByUs) return;
        if (conn && (conn.open || conn.__pending)) return;
        const p = ensurePeer();
        if (!p || !p.open) return; // dial() runs again on 'open'
        status(everOpen || attempt ? 'reconnecting' : 'connecting');
        let c;
        try { c = p.connect(hostId, { reliable: true, serialization: 'raw', metadata: { role, v: PROTOCOL } }); } catch { schedule(); return; }
        if (!c) { schedule(); return; }
        conn = c;
        c.__pending = true;
        clearTimeout(openTimer);
        openTimer = setTimeout(() => { if (c === conn && !c.open) dropConn(c); }, 12000);
        c.on('open', () => {
          if (c !== conn) return;
          c.__pending = false;
          clearTimeout(openTimer);
          attempt = 0; hostMissing = 0; everOpen = true;
          lastMsgAt = Date.now();
          setProblem(null);
          status('open');
          send({ t: 'hello', role, token: getToken?.() || undefined, key: getKey?.() || undefined });
          clearInterval(pingTimer);
          pingTimer = setInterval(() => {
            send({ t: 'ping', at: Date.now() });
            if (Date.now() - lastMsgAt > 25000 && c.open) dropConn(c); // silent connection (phone slept, Wi-Fi hop): replace it
          }, 8000);
        });
        c.on('data', (d) => {
          if (c !== conn) return;
          const s = dec(d);
          if (s == null) return;
          lastMsgAt = Date.now();
          const rec = globalThis.__markrunRecord; // tests only (privacy checks): set by the test harness
          if (Array.isArray(rec) && rec.length < 20000) rec.push(s);
          if (s === HB) { rawSend(HBR); return; }
          if (s === HBR) return;
          let m;
          try { m = JSON.parse(s); } catch { return; }
          if (m.t === 'pong') { if (m.serverNow) offset = m.serverNow + (Date.now() - m.at) / 2 - Date.now(); return; }
          if (m.t === 'welcome') onWelcome?.(m);
          else if (m.t === 'state') { if (m.state?.serverNow) offset = m.state.serverNow - Date.now(); onState?.(m.state); }
          else onMessage?.(m);
        });
        c.on('close', () => dropConn(c));
        c.on('error', () => dropConn(c));
        try {
          c.peerConnection?.addEventListener('connectionstatechange', () => {
            const st = c.peerConnection?.connectionState;
            if (st === 'failed' || st === 'closed') dropConn(c);
          });
        } catch { /* */ }
      }

      function dropConn(c) {
        if (!c || c !== conn) return;
        clearTimeout(openTimer);
        clearInterval(pingTimer);
        const wasOpen = c.open || !c.__pending;
        conn = null;
        try { c.close(); } catch { /* */ }
        if (wasOpen) downSince = Date.now();
        status('closed');
        if (!closedByUs) schedule();
      }

      function schedule() {
        clearTimeout(timer);
        if (closedByUs) return;
        // big error card: the TV isn't there (never connected: at once; mid-game: after a grace period for TV reloads)
        const downFor = Date.now() - downSince;
        if (hostMissing >= (everOpen ? 4 : 1) || (!everOpen && attempt >= 3) || downFor > 15000) {
          setProblem({ kind: 'unreachable', msg: "Can't reach the TV — check the code and that the TV tab is open." });
        }
        const delay = Math.min(5000, 400 * 2 ** attempt) * (0.75 + Math.random() * 0.5);
        attempt++;
        timer = setTimeout(() => { if (!peer || peer.destroyed || peer.disconnected) { ensurePeer(); } else dial(); }, delay);
      }

      function rawSend(str) {
        if (!conn || !conn.open) return false;
        try { for (const f of encodeFrames(str)) conn.send(f); return true; } catch { dropConn(conn); return false; }
      }
      function send(msg) { return rawSend(JSON.stringify(msg)); }

      const wake = () => {
        if (closedByUs) return;
        if (document.visibilityState === 'visible') {
          if (!conn || !conn.open) { attempt = 0; if (!peer || peer.destroyed || peer.disconnected) ensurePeer(); else dial(); }
          else send({ t: 'ping', at: Date.now() });
        }
      };
      document.addEventListener('visibilitychange', wake);
      window.addEventListener('online', () => { attempt = 0; wake(); });
      window.addEventListener('pageshow', wake);
      window.addEventListener('focus', wake);
      window.addEventListener('pagehide', () => { try { peer?.destroy(); } catch { /* */ } });

      status('connecting');
      ensurePeer();
      return {
        send,
        reconnect() { attempt = 0; hostMissing = 0; setProblem(null); if (conn) dropConn(conn); else if (!peer || peer.destroyed || peer.disconnected) ensurePeer(); else dial(); },
        close() { closedByUs = true; clearTimeout(timer); clearInterval(pingTimer); try { conn?.close(); peer?.destroy(); } catch { /* */ } },
        serverNow: () => Date.now() + offset,
        get open() { return !!conn?.open; },
      };
    },
  };
}
