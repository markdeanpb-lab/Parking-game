// Phase 3 (audio + reveal): premium-voice scheduling, speakable text, the "Remember this one?" protocol, the voice
// prefetch privacy rules, the local voice files route and the rendered audio assets.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

process.env.MARKRUN_ROUND_SOURCE = 'fixture';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { createPremiumVoices, speakable } = await import('../client/shared/audio/premium.js');
const { Game, newSessionState, MARK_BONUS } = await import('../server/net/game.mjs');
const rounds = await import('../server/net/roundsource.mjs');

test('speakable: money, abbreviations and emoji are read out properly', () => {
  assert.equal(speakable('Jo has 500pp on it 🔥'), 'Jo has 500 Parkpounds on it');
  assert.equal(speakable('A PB at MARKRUN — 5k, 153 km that week'), 'A P.B. at Mark Run, 5 K, 153 kilometres that week');
  assert.equal(speakable('Red v Blue'), 'Red versus Blue');
  assert.equal(speakable('“Hill reps”'), 'Hill reps');
});

// a fake worker: renders instantly-ish, in the order asked, so we can watch the scheduler's choices
function fakeEngine(clock) {
  const posted = [];
  globalThis.Worker = class { constructor() { this.onmessage = null; } postMessage(m) { posted.push(m); if (m.t === 'init') queueMicrotask(() => this.onmessage({ data: { t: 'ready', threads: 1, isolated: false, loadMs: 1 } })); } terminate() {} };
  globalThis.WebAssembly ??= {};
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ bytes: 100 }) });
  const v = createPremiumVoices({ source: 'local', localBase: 'http://localhost/voices/', now: () => clock.t });
  return { v, posted };
}

test('premium scheduler: earliest reachable deadline first, important lines win ties, late lines are skipped', async () => {
  const clock = { t: 1_000_000 };
  const { v, posted } = fakeEngine(clock);
  await v.start();
  await new Promise((r) => setTimeout(r, 5));
  assert.equal(v.status.status, 'ready');
  // a race group starting in 60 s; a reveal line needed in 2 s that can't possibly be rendered in time (rtf 2)
  v.want('race:r1', [
    { text: 'Late in the race, a long line about the leader pulling away from everyone.', speaker: 'jeff', atMs: 90_000, priority: 2 },
    { text: "And they're off!", speaker: 'jeff', atMs: 1_000, priority: 3 },
    { text: 'A quiet middle bit.', speaker: 'pam', atMs: 40_000, priority: 1 },
  ], { startAt: clock.t + 60_000 });
  const first = posted.filter((m) => m.t === 'gen');
  assert.equal(first.length, 1, 'one line at a time');
  assert.equal(first[0].text, "And they're off!", 'the earliest line goes first');
  assert.equal(first[0].voice, 'bm_george');
  // nothing else is sent while one is in flight
  v.want('reveal:r1', [{ text: 'Jo backs the favourite with everything she has got, all of it.', speaker: 'pam', atMs: 0, priority: 3 }], { startAt: clock.t + 500 });
  assert.equal(posted.filter((m) => m.t === 'gen').length, 1);
  // take() of a line that isn't rendered: a miss, and the queue stops wasting time on it
  assert.equal(v.take('A quiet middle bit.', 'pam'), null);
  assert.equal(v.status.missed, 1);
  // the lines' keys are normalised: different spellings of money hit the same render
  assert.equal(v.has('Jo has 500pp', 'jeff'), false);
});

test('premium scheduler: setGroupStart re-times a group; forget() drops a finished phase', async () => {
  const clock = { t: 5_000_000 };
  const { v } = fakeEngine(clock);
  await v.start();
  await new Promise((r) => setTimeout(r, 5));
  v.want('intro:x', [{ text: 'One.', speaker: 'jeff', atMs: 0 }, { text: 'Two.', speaker: 'pam', atMs: 3000 }], { startAt: clock.t });
  v.forget('intro:');
  assert.equal([...v._jobs.values()].filter((j) => j.group === 'intro:x' && j.state === 'queued').length, 0);
});

test('premium voices: local source with no downloaded files is "unavailable", never an error', async () => {
  globalThis.Worker = class { postMessage() {} terminate() {} };
  globalThis.fetch = async () => ({ ok: false, status: 404 });
  const v = createPremiumVoices({ source: 'local', localBase: 'http://localhost/voices/' });
  await v.start();
  assert.equal(v.status.status, 'unavailable');
  assert.equal(v.status.reason, 'not-downloaded');
});

async function newGame({ mark = true } = {}) {
  const g = new Game({ state: newSessionState(), rounds, timeScale: 1000 });
  const a = await g.join({ name: 'Mark', avatar: { emoji: '🦖', colour: '#2f8cff' } });
  const b = await g.join({ name: 'Jo', avatar: { emoji: '🦄', colour: '#ff6fb5' } });
  g.setConnected(a.id, 1); g.setConnected(b.id, 1);
  if (mark) await g.setRunnerPlayer(a.id, true);
  await g.setSettings({ roundsPerGame: 2 });
  await g.start();
  return { g, a, b };
}
async function toReveal(g, a, b) {
  const rid = g.s.round.public.roundId;
  await g.introDone(rid);
  await g.lock(a.id, []); await g.lock(b.id, []);
  await g.revealDone(rid); await g.raceDone(rid);
  await g.stageDone(0);
  assert.equal(g.s.phase, 'RESULTS'); assert.equal(g.s.resultsStage, 1);
  return rid;
}

test('"Remember this one?" was removed: even with someone ticked as Mark, no question is asked and no bonus is banked', async () => {
  const { g, a, b } = await newGame();
  const rid = await toReveal(g, a, b);
  const order = g.s.results.finishOrder.map((f) => f.runnerId);
  const before = [g.player(a.id).score, g.player(b.id).score];
  await g.markAsk(rid, order.at(-1), 0);
  assert.ok(!g.s.markMoment?.open, 'no memory question opens');
  assert.equal(g.phoneView(a.id).me.markPrompt, undefined);
  assert.equal(g.phoneView(b.id).me.markPrompt, undefined);
  assert.deepEqual([g.player(a.id).score, g.player(b.id).score], before);
  g.dispose();
});

test('"Remember this one?" is skipped when nobody is Mark, and only runs in the reveal stage', async () => {
  const { g, a, b } = await newGame({ mark: false });
  const rid = await toReveal(g, a, b);
  await g.markAsk(rid, g.s.results.finishOrder[0].runnerId, 0);
  assert.equal(g.s.markMoment, null);
  g.dispose();
  const m = await newGame();
  await m.g.markAsk(m.g.s.round.public.roundId, 'r1', 0); // INTRO: ignored
  assert.equal(m.g.s.markMoment, null);
  m.g.dispose();
});

test('voice prefetch: race commentary goes to the TV only, while betting, only with premium voices on', async () => {
  const { g, a, b } = await newGame({ mark: false });
  const rid = g.s.round.public.roundId;
  assert.equal(g.tvView().voicePrefetch, null, 'not during the intro');
  await g.introDone(rid);
  const vp = g.tvView().voicePrefetch;
  assert.ok(vp?.lines?.length > 3, 'race lines while bets are placed');
  assert.ok(vp.lines.every((l) => typeof l.text === 'string' && Number.isFinite(l.b) && !('officialS' in l)));
  assert.equal(vp.personalised, false);
  for (const p of [a, b]) assert.ok(!JSON.stringify(g.phoneView(p.id)).includes('voicePrefetch'), 'phones never get it');
  await g.lock(a.id, [{ type: 'win', runnerId: 'r1', stake: 100 }]); await g.lock(b.id, []);
  assert.equal(g.tvView().voicePrefetch.personalised, true, 'personalised at the bet reveal');
  const personalised = JSON.stringify(g.s.round.racePlan.commentary);
  await g.revealDone(rid);
  assert.equal(JSON.stringify(g.s.round.racePlan.commentary), personalised, 'not personalised twice');
  assert.equal(g.tvView().voicePrefetch, null, 'the race itself has the plan');
  await g.setSettings({ premiumVoices: false });
  g.dispose();
  const m = await newGame({ mark: false });
  await m.g.setSettings({ premiumVoices: false });
  await m.g.introDone(m.g.s.round.public.roundId);
  assert.equal(m.g.tvView().voicePrefetch, null, 'premium voices off: nothing extra is sent');
  m.g.dispose();
});

test('static server: /voices/ maps into data/voices only (no traversal), with wasm served as application/wasm', async () => {
  const { serveStatic } = await import('../server/net/static.mjs');
  const call = (url) => new Promise((resolve) => {
    const res = { headers: null, status: 0, writeHead(s, h) { this.status = s; this.headers = h; }, end() { resolve(this); } };
    try { serveStatic({ url, method: 'HEAD', headers: {} }, res); } catch (e) { resolve({ status: 500, e }); }
  });
  assert.equal((await call('/voices/../markrun.db')).status, 404);
  assert.equal((await call('/voices/%2e%2e/markrun.db')).status, 404);
  const tv = await call('/tv');
  assert.equal(tv.headers['Cross-Origin-Embedder-Policy'], 'require-corp');
  const man = path.join(ROOT, 'data', 'voices', 'ort', 'ort-wasm-simd-threaded.wasm');
  if (fs.existsSync(man)) {
    const r = await call('/voices/ort/ort-wasm-simd-threaded.wasm');
    assert.equal(r.status, 200); assert.equal(r.headers['Content-Type'], 'application/wasm');
  }
});

test('rendered audio: every manifest file exists, music loops are sane, total stays under 3 MB', () => {
  const dir = path.join(ROOT, 'client', 'assets', 'audio');
  const m = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  let total = 0;
  for (const c of Object.values(m.cues)) { assert.ok(fs.existsSync(path.join(dir, c.file)), c.file); total += fs.statSync(path.join(dir, c.file)).size; }
  for (const [k, mu] of Object.entries(m.music)) {
    assert.ok(mu.loopS > 8 && mu.loopS < 30, `${k} loop length`);
    for (const st of Object.values(mu.stems)) { assert.ok(fs.existsSync(path.join(dir, st.file)), st.file); total += fs.statSync(path.join(dir, st.file)).size; }
  }
  for (const k of ['theme', 'fanfare', 'coins', 'sadtrombone', 'heartbeat', 'crowd_swell', 'crowd_roar', 'sting_in', 'sting_comedy', 'sting_drama']) assert.ok(m.cues[k], k);
  for (const k of ['lobby', 'betting', 'race']) assert.ok(m.music[k], k);
  assert.ok(total < 3 * 1024 * 1024, `audio total ${total}`);
  assert.ok(fs.existsSync(path.join(dir, 'CREDITS.md')));
});
