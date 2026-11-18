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
const { Game, newSessionState, migrateState, normaliseRound, REACTIONS, DEFAULT_SETTINGS } = await import('../server/net/game.mjs');
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
  assert.ok(g.s.players.every((p) => p.score === 0), 'a new game resets every score to 0');
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
  assert.deepEqual(pb.me.bets, [{ type: 'win', runnerId: pub.runners[3].id, matchupId: undefined, propId: undefined, pick: undefined, stake: 40 }], 'own draft restored');
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

test('bet validation uses the round budget; the net is banked into a cumulative score', async () => {
  const { g, a, b } = await newGame();
  await g.start(); await g.advance('INTRO');
  const pub = g.s.round.public;
  assert.equal(pub.rules.budget, 500, 'the round budget is in the public rules');
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: 'nope', stake: 10 }], 100).ok, false);
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: pub.runners[0].id, stake: 1 }], 100).ok, false);
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: pub.runners[0].id, stake: 200 }], 100).ok, false, 'cannot exceed the budget');
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: pub.runners[0].id, stake: 500 }]).ok, true, 'defaults to rules.budget');
  await assert.rejects(g.lock(a.id, [{ type: 'win', runnerId: pub.runners[0].id, stake: 501 }]), /budget/);
  const winner = g.s.round.racePlan.finishOrder[0];
  const loser = g.s.round.racePlan.finishOrder.at(-1);
  await g.lock(a.id, [{ type: 'win', runnerId: winner, stake: 100 }]);
  await g.lock(b.id, [{ type: 'win', runnerId: loser, stake: 100 }]);
  await g.advance('BETTING');
  assert.equal(g.player(a.id).score, 0, 'score unchanged until RESULTS');
  assert.equal(g.phoneView(a.id).results, null, 'no results during the race');
  await g.advance('RACE');
  const odds = pub.runners.find((r) => r.id === winner).odds.win;
  const netA = Math.round(100 * odds) - 100;
  assert.equal(g.player(a.id).score, netA);
  assert.equal(g.player(b.id).score, -100, 'scores can go negative (no bankruptcy, no bailout)');
  assert.deepEqual({ net: g.s.results.payouts[a.id].net, score: g.s.results.payouts[a.id].score }, { net: netA, score: netA }, 'payouts carry { net, score }');
  assert.equal(g.s.history[0].scores[b.id], -100);
  // next round: a fresh budget for everyone, whatever their score
  for (let i = 0; i < 5; i++) await g.advance('RESULTS');
  await g.advance('SCOREBOARD');
  assert.equal(g.s.phase, 'INTRO');
  assert.equal(g.phoneView(b.id).me.budget, 500);
  assert.equal(g.phoneView(b.id).me.score, -100);
  assert.ok(!('bailouts' in g.commonView()), 'no bailouts any more');
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

test('round budget from the settings; the halfway bet counts within it; the finale keeps the same budget', async () => {
  const { g, a, b } = await newGame();
  await g.setSettings({ roundBudget: 300, roundsPerGame: 1 });
  await g.start(); await g.advance('INTRO');
  const pub = g.s.round.public;
  assert.equal(pub.payoutMultiplier, 2, 'one-round game: the final round pays double');
  assert.equal(pub.rules.budget, 300);
  const r0 = pub.runners[0].id;
  await assert.rejects(g.lock(a.id, [{ type: 'win', runnerId: r0, stake: 310 }]), /budget/);
  await g.lock(a.id, [{ type: 'win', runnerId: r0, stake: 250 }]);
  await g.lock(b.id, []);
  await g.setSettings({ roundBudget: 900 });
  assert.equal(g.s.settings.roundBudget, 300, 'budget cannot change mid-round');
  await g.advance('BETTING');
  await g.openMarket(pub.roundId);
  assert.ok(g.s.market.open && g.s.market.durationS > 0, 'market carries its duration (one timer for TV and phones)');
  await assert.rejects(g.placeInPlay(a.id, { runnerId: r0, stake: 60 }), /budget/);
  await g.placeInPlay(a.id, { runnerId: r0, stake: 50 });
  assert.equal(g.s.bets[a.id].reduce((t, x) => t + x.stake, 0), 300);
  g.dispose();
});

test('v1 saved sessions (bankrolls) migrate to scores; unknown versions start fresh', async () => {
  const v1 = { v: 1, sessionId: 'x', phase: 'SCOREBOARD', roundNumber: 2, players: [{ id: 'p1', name: 'Mark', token: 't', bankroll: 1250 }, { id: 'p2', name: 'Jo', token: 'u', bankroll: 700 }],
    settings: { startingBankroll: 1000, roundsPerGame: 4, betTimer: 0, voice: false }, history: [{ round: 1, bankrolls: { p1: 1100, p2: 950 }, nets: { p1: 100, p2: -50 } }], bailouts: [{ playerId: 'p2', amount: 100 }],
    round: { public: { roundId: 'r', runners: [], rules: { minStake: 10 } } }, results: null, bets: {}, drafts: {}, locked: {} };
  const s = migrateState(JSON.parse(JSON.stringify(v1)));
  assert.equal(s.v, 2);
  assert.deepEqual(s.players.map((p) => p.score), [250, -300]);
  assert.ok(s.players.every((p) => !('bankroll' in p)));
  assert.deepEqual(s.history[0].scores, { p1: 100, p2: -50 });
  assert.equal(s.settings.roundsPerGame, 4, 'settings kept');
  assert.equal(s.settings.voice, false);
  assert.equal(s.settings.roundBudget, 500);
  assert.equal(s.settings.betTimer, 90, 'the soft bet timer is the new default');
  assert.ok(!('startingBankroll' in s.settings) && !('bailouts' in s));
  assert.equal(s.round.public.rules.budget, 500);
  assert.equal(migrateState({ v: 99, players: [] }), null);
  const g = new Game({ state: JSON.parse(JSON.stringify(v1)), rounds, timeScale: 1000 });
  assert.equal(g.s.v, 2);
  assert.deepEqual(g.commonView().players.map((p) => p.score), [250, -300]);
  g.dispose();
});

test('round normalisation: ranks from the odds, one head-to-head, the side bet only in The Funfair Stakes', () => {
  const mk = (theme) => ({ public: { theme, runners: [{ id: 'r1', odds: { win: 6 } }, { id: 'r2', odds: { win: 2.5 } }, { id: 'r3', odds: { win: 11 } }],
    matchups: [{ id: 'm1', a: 'r1', b: 'r2' }, { id: 'm2', a: 'r2', b: 'r3' }], props: [{ id: 'pr1' }], rules: { minStake: 10 } } });
  const a = normaliseRound(mk({ key: 'winter', label: 'Winter Warriors' }), 400).public;
  assert.deepEqual(a.runners.map((r) => r.rank), [2, 1, 3]);
  assert.equal(a.matchups.length, 1);
  assert.equal(a.props, undefined);
  assert.equal(a.rules.budget, 400);
  const f = normaliseRound(mk({ key: 'funfair', label: 'The Funfair Stakes' }), 400).public;
  assert.equal(f.props.length, 1);
  const ranked = mk({ key: 'x' }); ranked.public.runners.forEach((r, i) => { r.rank = 5 - i; });
  assert.deepEqual(normaliseRound(ranked, 500).public.runners.map((r) => r.rank), [5, 4, 3], 'game-provided ranks are kept');
});

test('lobby defaults: 3 reactions, a soft 90 s bet timer, 6 rounds (Full night), 500pp budget', async () => {
  assert.equal(REACTIONS.length, 3);
  assert.equal(DEFAULT_SETTINGS.betTimer, 90);
  assert.equal(DEFAULT_SETTINGS.roundsPerGame, 6);
  assert.equal(DEFAULT_SETTINGS.roundBudget, 500);
  const { g, a, b } = await newGame();
  await g.start(); await g.advance('INTRO');
  assert.ok(g.s.deadline > Date.now(), 'betting countdown armed');
  await g.lock(a.id, []); await g.lock(b.id, []);
  g.dispose();
});

test('presenter scripts: news desk (round 1) and theme lines reach the TV in INTRO only; fallbacks when absent', async () => {
  const fake = { ...rounds,
    newsDeskScript: (players, settings) => ({ lines: [{ speaker: 'jeff', text: `Good evening ${players.map((p) => p.name).join(' and ')}`, strap: 'TONIGHT' }, { speaker: 'pam', text: `${settings.rounds} rounds` }, { text: '' }], ticker: ['BREAKING: SOFA'] }),
    themeAnnouncement: (theme) => [{ speaker: 'pam', text: `Theme: ${theme.label}` }] };
  const g = new Game({ state: newSessionState(), rounds: fake, timeScale: 1000 });
  const a = await g.join({ name: 'Mark' });
  await g.join({ name: 'Jo' });
  await g.start();
  const tv = g.tvView();
  assert.equal(tv.introExtras.newsDesk.lines.length, 2, 'empty lines dropped');
  assert.equal(tv.introExtras.newsDesk.lines[0].text, 'Good evening Mark and Jo');
  assert.equal(tv.introExtras.newsDesk.lines[1].text, '6 rounds');
  assert.deepEqual(tv.introExtras.newsDesk.ticker, ['BREAKING: SOFA']);
  assert.match(tv.introExtras.themeLines[0].text, /^Theme: /);
  assert.ok(!('introExtras' in g.phoneView(a.id)), 'phones do not get the scripts');
  await g.advance('INTRO');
  assert.equal(g.tvView().introExtras, null, 'only during INTRO');
  g.dispose();
  const g2 = new Game({ state: newSessionState(), rounds, timeScale: 1000 }); // fixture: no scripts -> TV fallback
  await g2.join({ name: 'Mark' }); await g2.start();
  assert.equal(g2.tvView().introExtras.newsDesk, null);
  g2.dispose();
});

test('Underdog Special: only its owner may boost, at most one pick', async () => {
  const pub = { runners: [{ id: 'r1', odds: { win: 3 } }, { id: 'r2', odds: { win: 5 } }], matchups: [], rules: { minStake: 10, maxBetsPerPlayer: 4 }, payoutMultiplier: 2,
    underdogSpecial: { playerId: 'p2', boost: 1.5, label: 'UNDERDOG SPECIAL' } };
  const ok = validateBets(pub, [{ type: 'win', runnerId: 'r1', stake: 50, boost: true }], 500, 'p2');
  assert.equal(ok.ok, true); assert.equal(ok.bets[0].boost, true, 'boost preserved');
  assert.equal(validateBets(pub, [{ type: 'special', runnerId: 'r2', stake: 50 }], 500, 'p2').bets[0].type, 'special');
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: 'r1', stake: 50, boost: true }], 500, 'p1').ok, false, 'not the owner');
  assert.equal(validateBets(pub, [{ type: 'special', runnerId: 'r1', stake: 50 }], 500, 'p1').ok, false);
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: 'r1', stake: 50, boost: true }, { type: 'special', runnerId: 'r2', stake: 50 }], 500, 'p2').ok, false, 'one boosted pick only');
  assert.equal(validateBets(pub, [{ type: 'win', runnerId: 'r1', stake: 50 }], 500, 'p1').bets[0].boost, undefined);
});
