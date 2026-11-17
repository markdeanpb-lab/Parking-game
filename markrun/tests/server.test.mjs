// Host server tests: state machine, bet hiding, reconnection, persistence across restart, payouts.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

process.env.MARKRUN_ROUND_SOURCE = 'fixture';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const WebSocket = require('ws');
const { Game, newSessionState } = await import('../server/net/game.mjs');
const rounds = await import('../server/net/roundsource.mjs');
const { validateBets } = await import('../server/net/bets.mjs');

const tick = () => new Promise((r) => setImmediate(r));
async function newGame() {
  const g = new Game({ state: newSessionState(), rounds, timeScale: 1000 }); // long safety timers: never fire in tests
  const a = await g.join({ name: 'Mark', avatar: { emoji: '🦖', colour: '#2f8cff' } });
  const b = await g.join({ name: 'Jo', avatar: { emoji: '🦄', colour: '#ff6fb5' } });
  return { g, a, b };
}
const FORBIDDEN = ['racePlan', 'officialS', 'progress', 'finishOrder', 'hidden', 'stravaTitle'];
function assertNoSecrets(view, label) {
  const json = JSON.stringify(view);
  for (const k of FORBIDDEN) assert.ok(!json.includes(`"${k}"`), `${label} leaks ${k}`);
}

test('state machine: LOBBY -> INTRO -> BETTING -> RACE -> RESULTS -> SCOREBOARD -> next round -> FINALE', async () => {
  const { g, a, b } = await newGame();
  await g.setSettings({ roundsPerGame: 2 });
  assert.equal(g.s.phase, 'LOBBY');
  await g.ready(a.id); assert.equal(g.s.phase, 'LOBBY');
  await g.ready(b.id); assert.equal(g.s.phase, 'INTRO', 'all ready starts the game');
  const rid = g.s.round.public.roundId;
  await g.introDone('wrong-round'); assert.equal(g.s.phase, 'INTRO', 'stale TV messages ignored');
  await g.introDone(rid); assert.equal(g.s.phase, 'BETTING');
  await g.lock(a.id, []); await g.lock(b.id, []);
  assert.equal(g.s.revealed, true);
  await g.revealDone(rid); assert.equal(g.s.phase, 'RACE');
  await g.raceDone(rid); assert.equal(g.s.phase, 'RESULTS');
  for (let i = 0; i < 5; i++) await g.stageDone(i);
  assert.equal(g.s.phase, 'SCOREBOARD');
  await g.advance('SCOREBOARD'); assert.equal(g.s.phase, 'INTRO'); assert.equal(g.s.roundNumber, 2);
  await g.advance('INTRO'); await g.lock(a.id, []); await g.lock(b.id, []);
  await g.advance('BETTING'); await g.advance('RACE');
  for (let i = 0; i < 5; i++) await g.advance('RESULTS');
  assert.equal(g.s.phase, 'SCOREBOARD');
  await g.advance('SCOREBOARD'); assert.equal(g.s.phase, 'FINALE');
  const sid = g.s.gameSessionId;
  await g.advance('FINALE'); assert.equal(g.s.phase, 'LOBBY');
  assert.notEqual(g.s.gameSessionId, sid, 'new game gets a new session id');
  assert.ok(g.s.players.every((p) => p.bankroll === g.s.settings.startingBankroll));
  g.dispose();
});

test('bets stay hidden until everyone has locked; phones never get the race plan', async () => {
  const { g, a, b } = await newGame();
  await g.start(); await g.advance('INTRO');
  const pub = g.s.round.public;
  await g.draft(b.id, [{ type: 'win', runnerId: pub.runners[3].id, stake: 40 }]);
  await g.lock(a.id, [{ type: 'win', runnerId: pub.runners[0].id, stake: 100 }]);
  const tv = g.tvView(); const pa = g.phoneView(a.id); const pb = g.phoneView(b.id);
  assert.equal(tv.bets, null, 'TV sees no bets before all lock');
  assert.equal(pb.bets, null, 'other phone sees no bets');
  assert.deepEqual(pb.me.bets, [{ type: 'win', runnerId: pub.runners[3].id, matchupId: undefined, pick: undefined, stake: 40 }], 'own draft restored');
  assert.ok(!JSON.stringify(pb).includes('"stake":100'), "phone B never sees A's stake");
  assert.ok(!JSON.stringify(tv).includes('"stake":100'), "TV never sees A's stake before reveal");
  assert.equal(pa.players.find((p) => p.id === a.id).locked, true);
  for (const v of [tv, pa, pb]) assertNoSecrets(v, v.role);
  // private clues: each phone gets only its own
  assert.ok(pa.me.privateClues.length > 0);
  assert.ok(!JSON.stringify(pb).includes(JSON.stringify(pa.me.privateClues[0].text)) || pa.me.privateClues[0].text === pb.me.privateClues[0].text);
  assert.ok(!('privateClues' in tv));
  await g.lock(b.id, [{ type: 'h2h', matchupId: pub.matchups[0].id, pick: pub.matchups[0].a, stake: 50 }]);
  assert.equal(g.tvView().bets[a.id][0].stake, 100, 'revealed after both lock');
  assert.ok(!g.tvView().racePlan, 'TV gets no race plan before RACE');
  await g.advance('BETTING');
  assert.ok(g.tvView().racePlan, 'TV gets the race plan at RACE');
  assertNoSecrets(g.phoneView(a.id), 'phone during race');
  g.dispose();
});

test('bet validation and payouts are applied to bankrolls', async () => {
  const { g, a, b } = await newGame();
  await g.start(); await g.advance('INTRO');
  const pub = g.s.round.public;
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: 'nope', stake: 10 }], 100).ok, false);
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: pub.runners[0].id, stake: 1 }], 100).ok, false);
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: pub.runners[0].id, stake: 200 }], 100).ok, false, 'cannot exceed bankroll');
  await assert.rejects(g.lock(a.id, [{ type: 'win', runnerId: pub.runners[0].id, stake: 999999 }]));
  const winner = g.s.round.racePlan.finishOrder[0];
  const loser = g.s.round.racePlan.finishOrder.at(-1);
  await g.lock(a.id, [{ type: 'win', runnerId: winner, stake: 100 }]);
  await g.lock(b.id, [{ type: 'win', runnerId: loser, stake: 100 }]);
  const start = g.s.settings.startingBankroll;
  await g.advance('BETTING');
  assert.equal(g.player(a.id).bankroll, start, 'bankroll unchanged until RESULTS');
  assert.equal(g.phoneView(a.id).results, null, 'no results during the race');
  await g.advance('RACE');
  const odds = pub.runners.find((r) => r.id === winner).odds.win;
  assert.equal(g.player(a.id).bankroll, start - 100 + Math.round(100 * odds));
  assert.equal(g.player(b.id).bankroll, start - 100);
  assert.equal(g.s.history.length, 1);
  g.dispose();
});

// ---------------------------------------------------------------------------------------------------
// real server over WebSockets: tokens, reconnection, persistence across a restart
function startServer(db) {
  const env = { ...process.env, PORT: '0', MARKRUN_SESSION_DB: db, MARKRUN_ROUND_SOURCE: 'fixture', MARKRUN_HOST: '127.0.0.1' };
  const p = spawn(process.execPath, ['--disable-warning=ExperimentalWarning', 'server/index.mjs'], { cwd: ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '';
  p.stdout.on('data', (d) => { out += d; }); p.stderr.on('data', (d) => { out += d; });
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error(`no start: ${out}`)), 15000);
    const iv = setInterval(() => { const m = out.match(/MARKRUN_READY port=(\d+)/); if (m) { clearInterval(iv); clearTimeout(t); res({ p, port: Number(m[1]), key: (out.match(/\?key=([0-9a-f]+)/) || [])[1], out: () => out }); } }, 30);
  });
}
function stop(srv) { return new Promise((r) => { srv.p.once('exit', r); srv.p.kill('SIGTERM'); }); }
function client(port, hello, host = '127.0.0.1') {
  const ws = new WebSocket(`ws://${host}:${port}/ws`);
  const c = { ws, msgs: [], state: null, welcome: null };
  ws.on('message', (d) => { const m = JSON.parse(d); c.msgs.push(m); if (m.t === 'state') c.state = m.state; if (m.t === 'welcome') c.welcome = m; });
  c.ready = new Promise((r) => ws.on('open', () => { ws.send(JSON.stringify(hello)); r(); }));
  c.send = (m) => ws.send(JSON.stringify(m));
  c.until = async (fn, ms = 8000) => { const t0 = Date.now(); while (!fn(c)) { if (Date.now() - t0 > ms) throw new Error('timeout'); await new Promise((r) => setTimeout(r, 20)); } };
  c.close = () => new Promise((r) => { ws.once('close', r); ws.close(); });
  return c;
}

test('reconnect with token + session survives a host restart', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-test-'));
  const db = path.join(dir, 'session.db');
  let srv = await startServer(db);
  const tv = client(srv.port, { t: 'hello', role: 'tv' }); await tv.ready;
  const a = client(srv.port, { t: 'hello', role: 'phone' }); await a.ready;
  a.send({ t: 'join', name: 'Mark', avatar: { emoji: '🦖', colour: '#2f8cff' } });
  await a.until((c) => c.welcome?.token);
  const tokenA = a.welcome.token;
  const b = client(srv.port, { t: 'hello', role: 'phone' }); await b.ready;
  b.send({ t: 'join', name: 'Jo', avatar: {} });
  await b.until((c) => c.welcome?.token);
  const tokenB = b.welcome.token;
  tv.send({ t: 'advance', from: 'LOBBY' });
  await tv.until((c) => c.state?.phase === 'INTRO');
  tv.send({ t: 'advance', from: 'INTRO' });
  await a.until((c) => c.state?.phase === 'BETTING');
  const r0 = a.state.round.runners[0].id;
  a.send({ t: 'lock', bets: [{ type: 'win', runnerId: r0, stake: 120 }] });
  await a.until((c) => c.state?.me?.locked);
  // phone A sleeps and comes back with its token
  await a.close();
  const a2 = client(srv.port, { t: 'hello', role: 'phone', token: tokenA }); await a2.ready;
  await a2.until((c) => c.state?.me);
  assert.equal(a2.state.me.name, 'Mark');
  assert.equal(a2.state.me.locked, true);
  assert.equal(a2.state.me.bets[0].stake, 120);
  // unknown token -> join screen, not someone else's seat
  const x = client(srv.port, { t: 'hello', role: 'phone', token: 'bogus' }); await x.ready;
  await x.until((c) => c.welcome);
  assert.equal(x.welcome.playerId, null);
  // nothing secret reached the phones
  for (const m of [...a.msgs, ...a2.msgs, ...b.msgs]) assertNoSecrets(m, 'phone msg');
  for (const m of [...tv.msgs]) assert.ok(!JSON.stringify(m).includes('"stake":120'), 'TV never saw the locked bet');
  await Promise.all([tv.close(), a2.close(), b.close(), x.close()]);

  // restart the host: state is restored from data/session.db
  await stop(srv);
  srv = await startServer(db);
  const a3 = client(srv.port, { t: 'hello', role: 'phone', token: tokenA }); await a3.ready;
  await a3.until((c) => c.state?.me);
  assert.equal(a3.state.phase, 'BETTING');
  assert.equal(a3.state.me.locked, true);
  assert.equal(a3.state.me.bets[0].runnerId, r0);
  const b3 = client(srv.port, { t: 'hello', role: 'phone', token: tokenB }); await b3.ready;
  await b3.until((c) => c.state?.me);
  b3.send({ t: 'lock', bets: [] });
  const tv3 = client(srv.port, { t: 'hello', role: 'tv' }); await tv3.ready;
  await tv3.until((c) => c.state?.revealed);
  assert.equal(tv3.state.bets[a3.state.me.id][0].stake, 120);
  tv3.send({ t: 'revealDone', roundId: tv3.state.round.roundId });
  await tv3.until((c) => c.state?.phase === 'RACE' && c.state.racePlan);
  // restart mid-race: TV gets the race again, phones don't
  await Promise.all([a3.close(), b3.close(), tv3.close()]);
  await stop(srv);
  srv = await startServer(db);
  const tv4 = client(srv.port, { t: 'hello', role: 'tv' }); await tv4.ready;
  await tv4.until((c) => c.state);
  assert.equal(tv4.state.phase, 'RACE');
  assert.ok(tv4.state.racePlan);
  assert.equal(tv4.state.players.length, 2);
  await tv4.close();
  await stop(srv);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('static server: routes, redirect, no path traversal, data files', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-test-'));
  const srv = await startServer(path.join(dir, 's.db'));
  const base = `http://127.0.0.1:${srv.port}`;
  const r = await fetch(`${base}/`, { redirect: 'manual' });
  assert.equal(r.status, 302); assert.match(r.headers.get('location'), /^\/tv\?key=[0-9a-f]+$/, 'host browser goes to the TV with its key');
  assert.equal((await fetch(`${base}/tv`)).status, 200);
  assert.equal((await fetch(`${base}/phone`)).status, 200);
  assert.equal((await fetch(`${base}/data/course.json`)).status, 200);
  assert.equal((await fetch(`${base}/data/park.json`)).status, 200);
  assert.equal((await fetch(`${base}/data/fixtures/round.json`)).status, 200);
  assert.equal((await fetch(`${base}/assets/fonts/LilitaOne-Regular.ttf`)).status, 200);
  assert.match(await (await fetch(`${base}/qr.svg`)).text(), /<svg/);
  assert.equal((await fetch(`${base}/%2e%2e/package.json`)).status, 404);
  assert.equal((await fetch(`${base}/..%2fserver%2fdb.mjs`)).status, 404);
  await stop(srv);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('"Refresh Historical Data" only runs in the lobby and blocks starting while it runs', async () => {
  let release;
  const calls = [];
  const fake = { ...rounds, runRefresh: ({ onProgress }) => { calls.push(1); onProgress('parkrun', 'checking'); return new Promise((r) => { release = () => r({ ok: true }); }); } };
  const g = new Game({ state: newSessionState(), rounds: fake, timeScale: 1000 });
  await g.join({ name: 'Mark' });
  const lines = [];
  const p = g.refreshData((step, msg) => lines.push(`${step}:${msg}`));
  await tick();
  assert.equal(g.s.refreshing, true);
  assert.equal(g.commonView().refreshing, true);
  await assert.rejects(g.refreshData(() => {}), /already running/);
  await assert.rejects(g.start(), /refreshing/);
  release();
  assert.equal((await p).ok, true);
  assert.equal(g.s.refreshing, false);
  assert.deepEqual(lines, ['parkrun:checking']);
  await g.start();
  assert.equal(g.s.phase, 'INTRO');
  await assert.rejects(g.refreshData(() => {}), /only allowed in the lobby/);
  assert.equal(calls.length, 1);
  g.dispose();
});

test('safety timers are progress-based: a slow TV keeps the race alive, a stalled one gets skipped', async () => {
  process.env.MARKRUN_STALL_MS = '45000';
  const g = new Game({ state: newSessionState(), rounds, timeScale: 0.002 }); // 45 s -> 90 ms
  const a = await g.join({ name: 'Mark' });
  g.tvPresence(1);
  await g.start(); await g.advance('INTRO');
  await g.lock(a.id, []); await g.advance('BETTING');
  assert.equal(g.s.phase, 'RACE');
  const rid = g.s.round.public.roundId;
  for (let i = 0; i < 8; i++) { g.raceTime(rid, i * 0.5); await new Promise((r) => setTimeout(r, 40)); } // slow but progressing (320 ms > 90 ms)
  assert.equal(g.s.phase, 'RACE', 'still racing while the TV makes progress');
  g.raceTime(rid, 1); // no progress (same value as an earlier beat would be ignored)
  await new Promise((r) => setTimeout(r, 250));
  await g.queue;
  assert.equal(g.s.phase, 'RESULTS', 'stalled TV -> server moves on');
  g.dispose();
});

test('seat takeover needs TV approval; the original phone always gets its seat back', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-test-'));
  const srv = await startServer(path.join(dir, 's.db'));
  const tv = client(srv.port, { t: 'hello', role: 'tv' }); await tv.ready;
  const a = client(srv.port, { t: 'hello', role: 'phone' }); await a.ready;
  a.send({ t: 'join', name: 'Jo', avatar: {} });
  await a.until((c) => c.welcome?.token);
  const tokenA = a.welcome.token, pid = a.welcome.playerId;
  await a.close();
  // a new device asks for Jo's seat: pending until the TV answers
  const x = client(srv.port, { t: 'hello', role: 'phone' }); await x.ready;
  await x.until((c) => c.welcome);
  x.send({ t: 'claim', playerId: pid });
  await x.until((c) => c.msgs.some((m) => m.t === 'claimPending'));
  await tv.until((c) => c.msgs.some((m) => m.t === 'claimRequest'));
  assert.ok(!x.state, 'no seat (and no secrets) before approval');
  const req = tv.msgs.find((m) => m.t === 'claimRequest');
  tv.send({ t: 'claimAnswer', reqId: req.reqId, allow: true });
  await x.until((c) => c.welcome?.playerId === pid && c.state?.me);
  // the original phone comes back with its own token: it wins, the claimer is kicked
  const a2 = client(srv.port, { t: 'hello', role: 'phone', token: tokenA }); await a2.ready;
  await a2.until((c) => c.state?.me?.id === pid);
  await x.until((c) => c.msgs.some((m) => m.t === 'kicked'));
  // a denied claim gets nothing
  await a2.close();
  const y = client(srv.port, { t: 'hello', role: 'phone' }); await y.ready;
  await y.until((c) => c.welcome);
  y.send({ t: 'claim', playerId: pid });
  await tv.until((c) => c.msgs.filter((m) => m.t === 'claimRequest').length >= 2);
  const req2 = tv.msgs.filter((m) => m.t === 'claimRequest').at(-1);
  tv.send({ t: 'claimAnswer', reqId: req2.reqId, allow: false });
  await y.until((c) => c.msgs.some((m) => m.code === 'claim_denied'));
  assert.ok(!y.state);
  await Promise.all([tv.close(), x.close(), y.close()]);
  await stop(srv);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('TV role: loopback or TV key only', async () => {
  const lan = Object.values(os.networkInterfaces()).flat().find((a) => a && a.family === 'IPv4' && !a.internal)?.address;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-test-'));
  const srv = await startServer(path.join(dir, 's.db'));
  assert.match(srv.key || '', /^[0-9a-f]{6,}$/, 'console prints the TV link with its key');
  const local = client(srv.port, { t: 'hello', role: 'tv' }); await local.ready;
  await local.until((c) => c.state?.role === 'tv');
  if (lan) { // same machine, but through the LAN address: not loopback
    const bad = client(srv.port, { t: 'hello', role: 'tv' }, lan); await bad.ready;
    await bad.until((c) => c.msgs.some((m) => m.code === 'tv_auth'));
    assert.ok(!bad.state, 'no TV state without the key');
    const good = client(srv.port, { t: 'hello', role: 'tv', key: srv.key }, lan); await good.ready;
    await good.until((c) => c.state?.role === 'tv');
    await Promise.all([bad.close(), good.close()]);
  }
  await local.close();
  await stop(srv);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('stakes are capped at half the bankroll per round, except the double-payout finale', async () => {
  const { stakeCap } = await import('../server/net/bets.mjs');
  const { g, a, b } = await newGame();
  await g.start(); await g.advance('INTRO');
  const pub = g.s.round.public;
  pub.payoutMultiplier = 1;
  const r0 = pub.runners[0].id;
  assert.equal(stakeCap(pub, 1000), 500);
  await assert.rejects(g.lock(a.id, [{ type: 'win', runnerId: r0, stake: 600 }]), /half your bankroll/);
  await g.lock(a.id, [{ type: 'win', runnerId: r0, stake: 500 }]);
  assert.equal(g.phoneView(b.id).me.stakeCap, 500);
  pub.payoutMultiplier = 2;
  assert.equal(stakeCap(pub, 1000), 1000, 'finale: all in allowed');
  await g.lock(b.id, [{ type: 'win', runnerId: r0, stake: 1000 }]);
  g.dispose();
});
