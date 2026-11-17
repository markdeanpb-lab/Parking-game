// WebSocket hub: authenticates sockets (TV or phone+token), routes actions to the Game, pushes per-role views.
// Privacy: each phone only ever receives its own private clues / unlocked bets; the TV never receives bets
// before every player has locked; nobody but the TV receives the race plan, and only from RACE onwards.
import { WebSocketServer } from 'ws';
import { GameError, REACTIONS } from './game.mjs';

export function attachHub(server, game, { joinUrl, tvUrl, qrSvg, info = {} } = {}) {
  const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 64 * 1024 });
  const clients = new Set();

  const send = (c, msg) => { if (c.ws.readyState === 1) c.ws.send(typeof msg === 'string' ? msg : JSON.stringify(msg)); };
  const viewFor = (c) => (c.role === 'tv'
    ? game.tvView({ joinUrl, tvUrl, qrSvg, info })
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
  game.on('kicked', (pid) => {
    for (const c of clients) if (c.playerId === pid) { send(c, { t: 'kicked' }); c.playerId = null; }
  });

  wss.on('connection', (ws, req) => {
    const c = { ws, role: null, playerId: null, lastKey: null, alive: true, reactAt: [] , ip: req.socket.remoteAddress };
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
      if (c.playerId) game.setConnected(c.playerId, -1);
      if (c.role === 'tv') game.emit('tvs', countTvs());
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
        c.role = 'tv';
        send(c, { t: 'welcome', role: 'tv' });
        game.emit('tvs', countTvs());
        return push(c, true);
      }
      c.role = 'phone';
      const p = game.byToken(m.token);
      if (p) {
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
      bindPlayer(c, p);
      send(c, { t: 'welcome', role: 'phone', playerId: p.id, token: p.token });
      return push(c, true);
    }
    if (m.t === 'claim') {
      const p = await game.claim(m.playerId);
      // kick any stale socket still bound to that player (it was disconnected anyway)
      bindPlayer(c, p);
      send(c, { t: 'welcome', role: 'phone', playerId: p.id, token: p.token });
      return push(c, true);
    }
    if (m.t === 'lobbyInfo') return sendLobbyInfo(c);
    const pid = c.playerId;
    if (!pid) return send(c, { t: 'error', msg: 'Join the game first.', code: 'not_joined' });
    switch (m.t) {
      case 'draft': return game.draft(pid, m.bets);
      case 'lock': await game.lock(pid, m.bets); return send(c, { t: 'locked' });
      case 'unlock': return game.unlock(pid);
      case 'ready': return game.ready(pid, m.value !== false);
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

  async function handleTv(c, m) {
    switch (m.t) {
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
  hb.unref();
  wss.on('close', () => clearInterval(hb));
  return { wss, clients, broadcast, close: () => { clearInterval(hb); for (const c of clients) c.ws.terminate(); wss.close(); } };
}
