// Data integrity: every competitor is a verified official Finsbury parkrun; official times are definitive;
// pacing is monotone and ends exactly on the official time; facts carry sources; refresh normalisers are faithful.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { historyDb, DATA } from '../server/db.mjs';
import { parseParkrunHtml } from '../server/import/ingest.mjs';
import { normaliseApiActivity, normaliseApiStreams } from '../server/import/refresh.mjs';
import { analyse, buildRacePlan, distanceAt, broadcastToRace, raceToBroadcast } from '../server/game/raceplan.mjs';

const db = historyDb();

test('every performance is an official Finsbury parkrun result from the stored parkrun page', () => {
  const dir = path.join(DATA, 'raw', 'parkrun');
  const latest = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).sort().pop();
  const official = new Map(parseParkrunHtml(fs.readFileSync(path.join(dir, latest), 'utf8')).map((r) => [r.run_date, r.time_s]));
  const perfs = db.prepare('SELECT run_date, official_s FROM performances').all();
  assert.ok(perfs.length >= 98);
  for (const p of perfs) {
    assert.ok(official.has(p.run_date), `${p.run_date} not in official results`);
    assert.equal(p.official_s, official.get(p.run_date), `${p.run_date} time differs from official`);
  }
});

test('pacing tables are monotone and finish exactly at the official time', () => {
  for (const p of db.prepare('SELECT run_date, official_s, progress FROM performances').all()) {
    const prog = JSON.parse(p.progress);
    assert.equal(prog.length, 201);
    assert.equal(prog[0], 0);
    assert.equal(prog[200], p.official_s, p.run_date);
    for (let i = 1; i < prog.length; i++) assert.ok(prog[i] > prog[i - 1], `${p.run_date} not increasing at ${i}`);
  }
});

test('every performance with real pacing is matched to a Strava activity on the same date with a stored stream', () => {
  const rows = db.prepare(`SELECT p.run_date, p.pacing_source, m.activity_id, a.start_local, s.n_samples FROM performances p
    JOIN matches m USING(run_date) LEFT JOIN strava_activities a ON a.id = m.activity_id LEFT JOIN streams s ON s.activity_id = m.activity_id`).all();
  for (const r of rows) {
    if (r.pacing_source === 'estimated_typical') continue;
    assert.ok(r.activity_id, r.run_date);
    assert.equal(r.start_local.slice(0, 10), r.run_date);
    assert.ok(r.n_samples > 300, `${r.run_date} stream too short`);
  }
});

test('facts have a basis and refs; no fact is empty', () => {
  const rows = db.prepare('SELECT * FROM facts').all();
  assert.ok(rows.length > 1000);
  for (const f of rows) {
    assert.ok(f.basis && f.basis.length > 5, `${f.run_date}/${f.key} basis`);
    assert.doesNotThrow(() => JSON.parse(f.refs));
    assert.doesNotThrow(() => JSON.parse(f.value));
  }
  // spot check: km_7d equals the sum of the referenced Strava activities
  const f = db.prepare("SELECT * FROM facts WHERE key='km_7d' AND json_array_length(refs) > 2 LIMIT 1").get();
  const ids = JSON.parse(f.refs);
  const sum = ids.reduce((s, id) => s + db.prepare('SELECT distance_m FROM strava_activities WHERE id=?').get(id).distance_m, 0) / 1000;
  assert.equal(Math.round(sum * 10) / 10, JSON.parse(f.value));
});

test('race plan: runners finish at official time in race clock; broadcast clock is monotone and shared', () => {
  const field = db.prepare("SELECT run_date, official_s, progress, pacing_source FROM performances WHERE pool='main' LIMIT 5").all()
    .map((p, i) => ({ id: `r${i + 1}`, officialS: p.official_s, progress: JSON.parse(p.progress), pacingSource: p.pacing_source }));
  const plan = buildRacePlan('t', field);
  for (const r of plan.runners) {
    assert.ok(distanceAt(r.progress, r.officialS - 0.5) < 5000);
    assert.equal(distanceAt(r.progress, r.officialS), 5000);
  }
  const m = plan.timeMap.map;
  for (let i = 1; i < m.length; i++) assert.ok(m[i][1] > m[i - 1][1]);
  for (const t of [0, 100, 500, 1000, 1200]) assert.ok(Math.abs(broadcastToRace(plan.timeMap, raceToBroadcast(plan.timeMap, t)) - t) < 0.01);
  assert.ok(plan.timeMap.durationS > 90 && plan.timeMap.durationS < 190, `broadcast ${plan.timeMap.durationS}s`);
  const finishOrder = [...field].sort((a, b) => a.officialS - b.officialS).map((r) => r.id);
  assert.deepEqual(plan.finishOrder, finishOrder);
  assert.deepEqual(analyse(field).finishOrder, finishOrder);
});

test('refresh normalisers map Strava API shapes onto the importer shapes', () => {
  const a = normaliseApiActivity({ id: 1, name: 'Finsbury', type: 'Run', sport_type: 'Run', start_date_local: '2026-11-21T09:00:05Z', distance: 5000.5,
    moving_time: 1170, elapsed_time: 1172, total_elevation_gain: 60, average_speed: 4.27, map: { summary_polyline: 'abc' }, workout_type: 1 });
  assert.equal(a.id, '1'); assert.equal(a.start_local, '2026-11-21T09:00:05'); assert.equal(a.summary.distance, 5000.5);
  assert.deepEqual(a.activity_tags, ['Race']);
  const s = normaliseApiStreams({ latlng: { data: [[51.5, -0.1]] }, heartrate: { data: [150] }, time: { data: [0] }, distance: { data: [0] } });
  assert.deepEqual(Object.keys(s).sort(), ['distance', 'heart_rate', 'location', 'time']);
});

test('import is idempotent (sources registered once, no duplicate rows)', () => {
  const dup = db.prepare('SELECT path, count(*) c FROM sources GROUP BY path HAVING c > 1').all();
  assert.equal(dup.length, 0);
  const acts = db.prepare('SELECT count(*) c, count(DISTINCT id) d FROM strava_activities').get();
  assert.equal(acts.c, acts.d);
});
