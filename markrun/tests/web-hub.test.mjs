// Web edition: the UNCHANGED hub rules (server/net/hub.mjs) over the injected WebRTC-style transport.
// Remote peers can never be the TV, the page's own local channel is; phones get no race plan; claiming a seat from a
// new phone needs approval on the TV; big messages are framed under the data-channel size limit.
import { test } from 'node:test';
import assert from 'node:assert/strict';

process.env.MARKRUN_ROUND_SOURCE = 'fixture';
const { Game, newSessionState } = await import('../server/net/game.mjs');
const { attachHub } = await import('../server/net/hub.mjs');
const rounds = await import('../server/net/roundsource.mjs');
const { FakeWss, PeerSocket, localTransport, newRoomCode, validCode, peerIdFor, signallingFromParams, signallingQuery } = await import('../web/peerlink.js');
const { createDecoder } = await import('../web/frames.js');
const { Emitter } = await import('../server/net/emitter.mjs');

const wait = (ms = 30) => new Promise((r) => setTimeout(r, ms));
class MockConn extends Emitter { // the bits of a PeerJS DataConnection that PeerSocket uses
  constructor(peer) { super(); this.peer = peer; this.open = true; this.frames = []; this.dec = createDecoder(); this.msgs = []; }
  send(f) { assert.ok(new TextEncoder().encode(f).length < 16300, 'frame over the interop data-channel limit'); this.frames.push(f); const s = this.dec(f); if (s != null) this.msgs.push(JSON.parse(s)); }
  close() { if (!this.open) return; this.open = false; this.emit('close'); }
  say(o) { this.emit('data', JSON.stringify(o)); }
  last(t) { return this.msgs.filter((m) => m.t === t).at(-1); }
}

function setup() {
  const game = new Game({ state: newSessionState(), rounds, timeScale: 1000 });
  const wss = new FakeWss();
  const hub = attachHub(null, game, { wss, tvExtra: () => ({ web: { code: 'KBXM' }, joinUrl: 'https://x.itch.io/markrun' }) });
  const phone = (id) => { const c = new MockConn(id); wss.emit('connection', new PeerSocket(c), { socket: { remoteAddress: `peer:${id}` }, headers: {} }); return c; };
  return { game, wss, hub, phone, done: () => { hub.close(); game.dispose(); } };
}

test('a remote peer can never take the TV role; the local channel can (and gets the web extras)', async () => {
  const { wss, phone, done } = setup();
  const evil = phone('evil');
  evil.say({ t: 'hello', role: 'tv' });
  await wait();
  assert.equal(evil.last('error')?.code, 'tv_auth');
  assert.equal(evil.last('state'), undefined);
  let welcome = null, state = null;
  const tv = localTransport(wss).connect({ role: 'tv', onWelcome: (m) => { welcome = m; }, onState: (s) => { state = s; } });
  await wait();
  assert.equal(welcome?.role, 'tv');
  assert.equal(state?.role, 'tv');
  assert.equal(state.web.code, 'KBXM');
  assert.ok(tv.open);
  done();
});

test('phones join over the peer transport and never receive the race plan; seat claims need TV approval', async () => {
  const { game, wss, phone, done } = setup();
  const tvMsgs = [];
  let tvState = null;
  const tv = localTransport(wss).connect({ role: 'tv', onState: (s) => { tvState = s; }, onMessage: (m) => tvMsgs.push(m) });
  const a = phone('a'); const b = phone('b');
  a.say({ t: 'hello', role: 'phone' }); b.say({ t: 'hello', role: 'phone' });
  await wait();
  assert.equal(a.last('welcome').playerId, null);
  assert.equal(a.last('lobby').canJoin, true);
  a.say({ t: 'join', name: 'Mark' }); b.say({ t: 'join', name: 'Jo' });
  await wait();
  const ta = a.last('welcome').token;
  assert.ok(ta && a.last('welcome').playerId === 'p1');
  assert.equal(tvState.players.length, 2);
  // play into the race: phones never see the plan, TV does
  a.say({ t: 'ready' }); b.say({ t: 'ready' });
  await wait(80);
  assert.equal(game.s.phase, 'INTRO');
  tv.send({ t: 'introDone', roundId: game.s.round.public.roundId });
  await wait();
  const rid = game.s.round.public.roundId;
  a.say({ t: 'lock', bets: [{ type: 'win', runnerId: game.s.round.public.runners[0].id, stake: 50 }] });
  b.say({ t: 'lock', bets: [] });
  await wait();
  tv.send({ t: 'revealDone', roundId: rid });
  await wait(80);
  assert.equal(game.s.phase, 'RACE');
  assert.ok(tvState.racePlan, 'TV gets the race plan in RACE');
  for (const c of [a, b]) {
    assert.ok(!JSON.stringify(c.msgs).includes('"racePlan"'), 'phone received the race plan');
    assert.ok(!JSON.stringify(c.msgs).includes('"hidden"'), 'phone received hidden round data');
  }
  // big messages were split into frames under the limit and reassembled (MockConn asserts frame sizes)
  assert.ok(a.frames.length >= a.msgs.length);
  // heartbeat: the hub pings, any traffic counts as alive; a closed connection marks the player offline
  b.close();
  await wait();
  assert.equal(game.isConnected('p2'), false);
  // a NEW phone claims Jo's seat: the TV must approve
  const c = phone('c');
  c.say({ t: 'hello', role: 'phone' });
  c.say({ t: 'claim', playerId: 'p2' });
  await wait();
  assert.equal(c.last('claimPending')?.name, 'Jo');
  const req = tvMsgs.find((m) => m.t === 'claimRequest');
  assert.ok(req, 'TV was asked');
  assert.equal(c.last('welcome')?.playerId ?? null, null, 'no seat before approval');
  tv.send({ t: 'claimAnswer', reqId: req.reqId, allow: true });
  await wait();
  assert.equal(c.last('welcome').playerId, 'p2');
  assert.equal(c.last('state').state.me.id, 'p2');
  assert.ok(game.isConnected('p2'));
  // the original phone comes back with its token: it wins its seat back
  const a2 = phone('a2');
  a2.say({ t: 'hello', role: 'phone', token: ta });
  await wait();
  assert.equal(a2.last('welcome').playerId, 'p1');
  done();
});

test('room codes: 4 easy letters, no I/O/0/1; peer ids and signalling config', () => {
  for (let i = 0; i < 500; i++) {
    const c = newRoomCode();
    assert.ok(validCode(c), c);
    assert.ok(!/[IO01]/.test(c));
  }
  assert.equal(peerIdFor('kbxm'), 'markrun-KBXM-v1');
  assert.ok(!validCode('KBIM') && !validCode('KB0M') && !validCode('KBX'));
  const p = new URLSearchParams('peerHost=127.0.0.1&peerPort=9000&peerPath=/peerjs&peerSecure=0&ice=none&race=2d');
  const sig = signallingFromParams(p);
  assert.deepEqual({ host: sig.host, port: sig.port, path: sig.path, secure: sig.secure }, { host: '127.0.0.1', port: 9000, path: '/peerjs', secure: false });
  assert.deepEqual(sig.config.iceServers, []);
  assert.deepEqual(signallingFromParams(new URLSearchParams('')).config.iceServers, [{ urls: 'stun:stun.l.google.com:19302' }]);
  assert.equal(signallingQuery(p), 'peerHost=127.0.0.1&peerPort=9000&peerPath=%2Fpeerjs&peerSecure=0&ice=none');
});
