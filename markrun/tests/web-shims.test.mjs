// Web edition (itch.io build) unit tests: the DB-shaped shims must answer EVERY query the game module makes,
// return the same rows as SQLite, and the unmodified game module must run on them. Also: framing + isomorphic Game.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { classifyHist, classifySess, classifyExec, createHistShim, createSessShim, normSql } = await import('../web/shims.js');
const { buildWebData, findForbidden } = await import('../tools/export_web_data.mjs');
const { encodeFrames, createDecoder } = await import('../web/frames.js');

const memStore = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k), _m: m }; };
const histDb = () => new DatabaseSync(path.join(ROOT, 'data', 'markrun.db'), { readOnly: true });

// Every SQL string the game module (and persist.mjs, which the web host reuses) passes to prepare()/exec().
function scanQueries() {
  const files = [...fs.readdirSync(path.join(ROOT, 'server/game')).filter((f) => f.endsWith('.mjs')).map((f) => path.join(ROOT, 'server/game', f)),
    path.join(ROOT, 'server/net/persist.mjs')];
  const found = [];
  const nonLiteral = [];
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    const calls = [...src.matchAll(/\.(prepare|exec)\(/g)];
    for (const c of calls) {
      const rest = src.slice(c.index + c[0].length);
      const m = /^\s*(['"`])([\s\S]*?)\1\s*[),]/.exec(rest);
      if (!m) { nonLiteral.push(`${path.basename(f)}: .${c[1]}(${rest.slice(0, 50)}`); continue; }
      found.push({ file: path.basename(f), fn: c[1], sql: m[2], dynamic: m[1] === '`' && m[2].includes('${') });
    }
  }
  return { found, nonLiteral };
}

test('web shims recognise every query in server/game/** and persist.mjs (fails on a new, unhandled query)', () => {
  const { found, nonLiteral } = scanQueries();
  assert.ok(found.length >= 7, `expected the known queries, found ${found.length}`);
  assert.deepEqual(nonLiteral, [], 'every prepare()/exec() must take a literal SQL string the web shim can match');
  const unknown = found.filter((q) => q.dynamic || !(q.fn === 'exec' ? (classifyExec(q.sql) || classifySess(q.sql)) : (classifyHist(q.sql) || classifySess(q.sql))));
  assert.deepEqual(unknown.map((q) => `${q.file}: ${normSql(q.sql)}`), [],
    'NEW QUERY in the game module: teach web/shims.js (hist or sess shim) to answer it, or the itch.io web edition will break');
});

test('hist shim returns the same rows as SQLite for every recognised query', () => {
  const db = histDb();
  const shim = createHistShim(JSON.parse(JSON.stringify(buildWebData(db))));
  const { found } = scanQueries();
  const hq = found.filter((q) => q.fn === 'prepare' && classifyHist(q.sql));
  assert.ok(hq.length >= 3);
  for (const q of hq) {
    const real = db.prepare(q.sql).all();
    const fake = shim.prepare(q.sql).all();
    assert.equal(fake.length, real.length, `row count for ${normSql(q.sql).slice(0, 60)}`);
    for (let i = 0; i < real.length; i++) {
      for (const [k, v] of Object.entries(real[i])) {
        const a = typeof v === 'string' && /^[[{"\d-]/.test(v) ? (() => { try { return JSON.parse(v); } catch { return v; } })() : v;
        const fv = fake[i][k];
        const b = typeof fv === 'string' && /^[[{"\d-]/.test(fv) ? (() => { try { return JSON.parse(fv); } catch { return fv; } })() : fv;
        assert.deepEqual(b, a, `${normSql(q.sql).slice(0, 40)} row ${i} column ${k}`);
      }
    }
  }
  assert.equal(shim.unknown.length, 0);
  db.close();
});

test('data bundle excludes raw Strava streams, polylines and raw_json', () => {
  const db = histDb();
  const b = buildWebData(db);
  db.close();
  assert.deepEqual(findForbidden(b), []);
  const json = JSON.stringify(b);
  assert.ok(!json.includes('"raw_json"') && !json.includes('"polyline"') && !json.includes('"summary_polyline"'));
  assert.ok(b.performances.length > 50 && b.facts.length > 100 && b.course && b.lastIngest);
});

test('unmodified game module runs on the shims: createRound x2 + settleRound, usage + memory persisted', async () => {
  const { createRound, settleRound } = await import('../server/game/round.mjs');
  const db = histDb();
  const hist = createHistShim(JSON.parse(JSON.stringify(buildWebData(db))));
  db.close();
  const store = memStore();
  const sess = createSessShim(store);
  const players = [{ id: 'p1', name: 'Mark' }, { id: 'p2', name: 'Jo' }];
  const settings = { sessionId: 'webtest-1', rounds: 2, roundsPerGame: 2, startingBankroll: 1000 };
  const seen = new Set();
  for (const n of [1, 2]) {
    const r = await createRound({ hist, sess, players, roundNumber: n, settings, rng: Math.random });
    assert.equal(r.public.runners.length >= 4, true);
    assert.ok(r.racePlan?.runners?.length);
    for (const x of r.racePlan.runners) assert.equal(x.progress.length, 201);
    const res = await settleRound(r, { p1: [{ type: 'win', runnerId: r.public.runners[0].id, stake: 50 }], p2: [] }, { p1: 1000, p2: 1000 });
    assert.ok(res.finishOrder.length && Number.isFinite(res.payouts.p1.bankroll));
    seen.add(r.public.runners.map((x) => x.id).join());
  }
  assert.deepEqual(hist.unknown, [], 'hist shim saw an unknown query');
  assert.deepEqual(sess.unknown, [], 'sess shim saw an unknown query');
  const usage = JSON.parse(store.getItem('markrun.web.usage'));
  assert.ok(Object.keys(usage).length >= 8, 'usage rows recorded');
  assert.ok(store.getItem('markrun.web.kv:game:memory:webtest-1'), 'session memory saved to kv');
  const agg = sess.prepare('SELECT run_date, COUNT(*) n, MAX(used_at) last FROM usage GROUP BY run_date').all();
  assert.ok(agg.every((r) => r.n >= 1 && typeof r.last === 'string'));
});

test('persist.mjs snapshot round-trips through the localStorage-backed sess shim', async () => {
  const { loadSession, saveSession, clearSession } = await import('../server/net/persist.mjs');
  const { newSessionState } = await import('../server/net/game.mjs');
  const sess = createSessShim(memStore());
  assert.equal(loadSession(sess), null);
  const s = newSessionState();
  s.players.push({ id: 'p1', name: 'Mark', token: 't', bankroll: 900 });
  saveSession(s, sess);
  assert.deepEqual(loadSession(sess), s);
  clearSession(sess);
  assert.equal(loadSession(sess), null);
  assert.deepEqual(sess.unknown, []);
});

test('an unknown query throws and is recorded', () => {
  const sess = createSessShim(memStore());
  assert.throws(() => sess.prepare('SELECT * FROM round_log'));
  assert.equal(sess.unknown.length, 1);
  const hist = createHistShim({ meta: {}, performances: [], facts: [] });
  assert.throws(() => hist.prepare('SELECT * FROM strava_activities'));
  assert.equal(hist.unknown.length, 1);
});

test('frames: big messages are chunked (<= 15 KB UTF-8 each) and reassembled, emoji-safe', () => {
  const big = JSON.stringify({ t: 'state', s: '🦊é'.repeat(30000) + 'x'.repeat(12345) });
  const frames = encodeFrames(big);
  assert.ok(frames.length > 5);
  for (const f of frames) assert.ok(new TextEncoder().encode(f).length <= 16000);
  const dec = createDecoder();
  let out = null;
  for (const f of [...frames].reverse()) out = dec(f) ?? out;
  assert.equal(out, big);
  assert.equal(dec('{"t":"ping"}'), '{"t":"ping"}');
});

test('Game state machine is isomorphic: no node:crypto / node:events / bare process.env', () => {
  const src = fs.readFileSync(path.join(ROOT, 'server/net/game.mjs'), 'utf8');
  assert.ok(!/from 'node:/.test(src), 'game.mjs must not import node: modules');
  assert.ok(!/(^|[^.\w])process\.env/.test(src.replace(/typeof process !== 'undefined' && process\.env/g, '')), 'guard process.env');
});
