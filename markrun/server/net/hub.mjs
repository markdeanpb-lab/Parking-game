// WebSocket hub: authenticates sockets (TV or phone+token), routes actions to the Game, pushes per-role views.
// Privacy: each phone only ever receives its own private clues / unlocked bets; the TV never receives bets
// before every player has locked; nobody but the TV receives the race plan, and only from RACE onwards.
import { WebSocketServer } from 'ws';
import { GameError, REACTIONS } from './game.mjs';

const LOOPBACK = new Set(['127.0.0.1', '::1', '::ffff:127.0.0.1']);
let trustLoopback = true;
// Online/cloud mode: the hosting proxy connects from loopback, so loopback proves nothing - require the TV key.
export function setTrustLoopback(v) { trustLoopback = !!v; }
export const isLoopback = (addr) => trustLoopback && LOOPBACK.has(String(addr || ''));
// A request relayed by a proxy (it carries forwarding headers) is never treated as the host's own browser.
export const isTrustedLocal = (req) => isLoopback(req.socket.remoteAddress)
  && !req.headers['x-forwarded-for'] && !req.headers['x-forwarded-host'] && !req.headers['forwarded'];

// Transport-agnostic: pass `wss` (anything with on('connection', (ws, req)) whose sockets look like ws: send, readyState,
// on('message'|'close'|'pong'), ping, terminate) to run the hub over another transport (the web edition uses WebRTC).
// `tvExtra()` adds fields to the TV view that can change at runtime (web edition: room code, join link, QR).
export function attachHub(server, game, { joinUrl, tvUrl, qrSvg, info = {}, tvKey = null, wss: injected = null, tvExtra = null } = {}) {
  const claims = new Map(); // reqId -> { c, playerId, timer }
  const wss = injected || new WebSocketServer({ server, path: '/ws', maxPayload: 64 * 1024 });
  const clients = new Set();

  const send = (c, msg) => { if (c.ws.readyState === 1) c.ws.send(typeof msg === 'string' ? msg : JSON.stringify(msg)); };
  const viewFor = (c) => (c.role === 'tv'
    ? game.tvView({ joinUrl, tvUrl, qrSvg, info, ...(tvExtra?.() || {}) })
    : game.phoneView(c.playerId));

  function push(c, force = false) {
    if (!c.role || (c.role === 'phone' && !c.playerId)) return;
    const view = viewFor(c);
    // serverNow changes every time; compare without it to avoid spamming identical views
    const { serverNow, ...rest } = view;
    const key = JSON.stringify(rest);
    if (!force && key === c.lastKey) return;
    c.lastKey = key;
    send(c, { t: 'state', state: view });
  }
  const broadcast = () => { for (const c of clients) push(c); };
  game.on('change', broadcast);
  game.on('live', broadcast);
  game.on('kicked', (pid) => {
    for (const c of clients) if (c.playerId === pid) { send(c, { t: 'kicked' }); c.playerId = null; }
  });

  wss.on('connection', (ws, req) => {
    const c = { ws, role: null, playerId: null, lastKey: null, alive: true, reactAt: [] , ip: req.socket.remoteAddress, local: isTrustedLocal(req) };
    clients.add(c);
    ws.on('pong', () => { c.alive = true; });
    ws.on('message', async (data) => {
      let m;
      try { m = JSON.parse(String(data)); } catch { return; }
      if (!m || typeof m.t !== 'string') return;
      try { await handle(c, m); } catch (e) {
        if (e instanceof GameError) send(c, { t: 'error', msg: e.message, code: e.code, re: m.t });
        else { console.error('[markrun] ws handler error:', e.stack || e.message); send(c, { t: 'error', msg: 'Something went wrong on the host.', re: m.t }); }
      }
    });
    ws.on('close', () => {
      clients.delete(c);
      for (const [id, r] of claims) if (r.c === c) { clearTimeout(r.timer); claims.delete(id); notifyTvs({ t: 'claimClosed', reqId: id }); }
      if (c.playerId) game.setConnected(c.playerId, -1);
      if (c.role === 'tv') { game.emit('tvs', countTvs()); game.tvPresence(countTvs()); }
    });
  });

  const countTvs = () => [...clients].filter((c) => c.role === 'tv').length;

  function bindPlayer(c, p) {
    if (c.playerId === p.id) return;
    if (c.playerId) game.setConnected(c.playerId, -1);
    c.playerId = p.id;
    game.setConnected(p.id, +1);
  }

  async function handle(c, m) {
    if (m.t === 'ping') return send(c, { t: 'pong', at: m.at, serverNow: Date.now() });
    if (m.t === 'hello') {
      if (m.role === 'tv') {
        // the TV role is powerful (settings, kicks, race plan): only the host's own browser or a holder of the TV key
        if (!c.local && !(tvKey && m.key === tvKey)) {
          send(c, { t: 'error', code: 'tv_auth', msg: 'This screen is not authorised as the TV. Open the TV link printed in the host console (it includes ?key=…).' });
          return undefined;
        }
        c.role = 'tv';
        send(c, { t: 'welcome', role: 'tv', key: tvKey });
        game.emit('tvs', countTvs());
        game.tvPresence(countTvs());
        for (const [id, r] of claims) send(c, { t: 'claimRequest', reqId: id, playerId: r.playerId, name: game.player(r.playerId)?.name });
        return push(c, true);
      }
      c.role = 'phone';
      const p = game.byToken(m.token);
      if (p) {
        if (m.token === p.token && (p.claimTokens || []).length) { // the original phone is back: it always wins its seat
          for (const o of clients) if (o !== c && o.playerId === p.id && o.token !== p.token) { send(o, { t: 'kicked', reason: 'reclaimed' }); game.setConnected(p.id, -1); o.playerId = null; }
          game.revokeClaims(p);
        }
        c.token = m.token;
        bindPlayer(c, p);
        send(c, { t: 'welcome', role: 'phone', playerId: p.id, token: p.token });
        return push(c, true);
      }
      // unknown / no token: give the join screen what it needs
      send(c, { t: 'welcome', role: 'phone', playerId: null, tokenRejected: !!m.token });
      return sendLobbyInfo(c);
    }
    if (c.role === 'tv') return handleTv(c, m);
    if (c.role === 'phone') return handlePhone(c, m);
  }

  function sendLobbyInfo(c) {
    const v = game.commonView();
    send(c, {
      t: 'lobby', phase: v.phase,
      players: v.players.map((p) => ({ id: p.id, name: p.name, avatar: p.avatar, connected: p.connected })),
      canJoin: v.phase === 'LOBBY' && v.players.length < 4,
    });
  }

  async function handlePhone(c, m) {
    if (m.t === 'join') {
      const p = await game.join({ name: m.name, avatar: m.avatar });
      c.token = p.token;
      bindPlayer(c, p);
      send(c, { t: 'welcome', role: 'phone', playerId: p.id, token: p.token });
      return push(c, true);
    }
    if (m.t === 'claim') { // taking over a disconnected seat from a NEW device needs approval on the TV
      const target = game.player(m.playerId);
      if (!target) return send(c, { t: 'error', msg: 'No such player.' });
      if (game.isConnected(target.id)) return send(c, { t: 'error', msg: `${target.name} is still connected.` });
      if (!countTvs()) return send(c, { t: 'error', msg: 'The TV needs to be on to approve this.' });
      const reqId = Math.random().toString(36).slice(2, 10);
      const timer = setTimeout(() => answerClaim(reqId, false, 'timeout'), 30_000);
      timer.unref?.();
      claims.set(reqId, { c, playerId: target.id, timer });
      notifyTvs({ t: 'claimRequest', reqId, playerId: target.id, name: target.name });
      return send(c, { t: 'claimPending', name: target.name });
    }
    if (m.t === 'lobbyInfo') return sendLobbyInfo(c);
    const pid = c.playerId;
    if (!pid) return send(c, { t: 'error', msg: 'Join the game first.', code: 'not_joined' });
    switch (m.t) {
      case 'draft': return game.draft(pid, m.bets);
      case 'lock': await game.lock(pid, m.bets); return send(c, { t: 'locked' });
      case 'unlock': return game.unlock(pid);
      case 'ready': return game.ready(pid, m.value !== false);
      case 'inplay': await game.placeInPlay(pid, { runnerId: m.runnerId, stake: m.stake }); return send(c, { t: 'inplayOk' });
      case 'next': return game.phoneNext(pid);
      case 'iAmMark': return game.setRunnerPlayer(pid, m.value !== false);
      case 'profile': return game.updateProfile(pid, { name: m.name, avatar: m.avatar });
      case 'react': {
        if (!REACTIONS.includes(m.emoji)) return undefined;
        const now = Date.now();
        c.reactAt = c.reactAt.filter((x) => now - x < 2000);
        if (c.reactAt.length >= 6) return undefined; // rate limit
        c.reactAt.push(now);
        const msg = JSON.stringify({ t: 'react', playerId: pid, emoji: m.emoji });
        for (const o of clients) if (o.role === 'tv') send(o, msg);
        return undefined;
      }
      case 'leave': {
        if (game.s.phase === 'LOBBY') await game.kick(pid);
        return undefined;
      }
      default: return undefined;
    }
  }

  function notifyTvs(msg) { const s2 = JSON.stringify(msg); for (const o of clients) if (o.role === 'tv') send(o, s2); }
  async function answerClaim(reqId, allow, why = '') {
    const r = claims.get(reqId);
    if (!r) return;
    clearTimeout(r.timer);
    claims.delete(reqId);
    notifyTvs({ t: 'claimClosed', reqId });
    if (!allow || r.c.ws.readyState !== 1) { send(r.c, { t: 'error', code: 'claim_denied', msg: why === 'timeout' ? 'Nobody approved that on the TV.' : 'The TV said no.' }); return; }
    try {
      const { player, token } = await game.claim(r.playerId);
      r.c.token = token;
      bindPlayer(r.c, player);
      send(r.c, { t: 'welcome', role: 'phone', playerId: player.id, token });
      push(r.c, true);
    } catch (e) { send(r.c, { t: 'error', msg: e.message }); }
  }

  async function handleTv(c, m) {
    switch (m.t) {
      case 'claimAnswer': return answerClaim(m.reqId, !!m.allow);
      case 'progress': return game.heartbeat(m.phase, m.roundId, m.value);
      case 'advance': return game.advance(m.from, m.stage);
      case 'start': return game.start();
      case 'introDone': return game.introDone(m.roundId);
      case 'revealDone': return game.revealDone(m.roundId);
      case 'raceDone': return game.raceDone(m.roundId);
      case 'stageDone': return game.stageDone(m.stage);
      case 'settings': return game.setSettings(m.settings || {});
      case 'kick': return game.kick(m.playerId);
      case 'newGame': return game.newGame();
      case 'forceLock': return game.forceLock();
      case 'marketOpen': return game.openMarket(m.roundId);
      case 'raceTime': return game.raceTime(m.roundId, m.b);
      case 'refresh': {
        const toTvs = (msg) => { const s = JSON.stringify(msg); for (const o of clients) if (o.role === 'tv') send(o, s); };
        toTvs({ t: 'refresh', step: 'start', msg: 'Starting refresh (this uses the internet)…' });
        game.refreshData((step, msg) => toTvs({ t: 'refresh', step, msg: String(msg) }))
          .then((rep) => toTvs({ t: 'refreshDone', ok: rep?.ok !== false }))
          .catch((e) => toTvs({ t: 'refreshDone', ok: false, msg: e.message }));
        return undefined;
      }
      default: return undefined;
    }
  }

  // heartbeat: drop dead sockets (phones that went to sleep) so presence is accurate
  const hb = setInterval(() => {
    for (const c of clients) {
      if (!c.alive) { c.ws.terminate(); continue; }
      c.alive = false;
      try { c.ws.ping(); } catch { /* ignore */ }
    }
  }, 10_000);
  hb.unref?.();
  wss.on('close', () => clearInterval(hb));
  return { wss, clients, broadcast, close: () => { clearInterval(hb); for (const c of clients) c.ws.terminate(); wss.close(); } };
}
