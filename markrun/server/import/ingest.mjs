// MARKRUN ingest: raw source files (data/raw/**) -> data/markrun.db
// Idempotent: every raw file is registered with its sha256; unchanged files are skipped, records are upserted by
// natural key (parkrun run_date, Strava activity id). Safe to interrupt and re-run.
//
// Usage: node server/import/ingest.mjs [--force]
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { historyDb, DATA, tx } from '../db.mjs';
import { directSegment, extractSegment, buildProgress, typicalShape, features, haversine, N_PTS } from './pacing.mjs';
import { computeFacts } from './facts.mjs';
import { computeDiversions } from './diversions.mjs';

const RAW = path.join(DATA, 'raw');
const FORCE = process.argv.includes('--force');
const log = (...a) => (process.env.MARKRUN_QUIET ? null : console.log('[ingest]', ...a));

const nowIso = () => new Date().toISOString();
const sha = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

function registerSource(db, kind, file, note) {
  const buf = fs.readFileSync(file);
  const rel = path.relative(DATA, file);
  const h = sha(buf);
  const ex = db.prepare('SELECT id, sha256 FROM sources WHERE path = ?').get(rel);
  if (ex && ex.sha256 === h) return { id: ex.id, changed: false, buf };
  if (ex) {
    db.prepare('UPDATE sources SET sha256=?, bytes=?, imported_at=?, note=? WHERE id=?').run(h, buf.length, nowIso(), note ?? null, ex.id);
    return { id: ex.id, changed: true, buf };
  }
  const r = db.prepare('INSERT INTO sources(kind, path, sha256, bytes, imported_at, note) VALUES (?,?,?,?,?,?)')
    .run(kind, rel, h, buf.length, nowIso(), note ?? null);
  return { id: Number(r.lastInsertRowid), changed: true, buf };
}

// ---------------------------------------------------------------- parkrun
export function parseParkrunHtml(html) {
  const tables = [...html.matchAll(/<table[^>]*id="results"[^>]*>([\s\S]*?)<\/table>/g)].map((m) => m[1]);
  const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
  for (const t of tables) {
    const rows = [...t.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => strip(c[1])));
    if (!rows.length || rows[0][0] !== 'Run Date') continue;
    return rows.slice(1).filter((r) => r.length >= 4).map((r) => {
      const [d, m, y] = r[0].split('/');
      const parts = r[3].split(':').map(Number);
      const time_s = parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : parts[0] * 60 + parts[1];
      return {
        run_date: `${y}-${m}-${d}`, event_number: Number(r[1]), position: Number(r[2]), time_s, time_text: r[3],
        age_grade: parseFloat(r[4]) || null, pb_flag: r[5] || null,
      };
    });
  }
  throw new Error('parkrun results table not found');
}

function ingestParkrun(db) {
  const dir = path.join(RAW, 'parkrun');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).sort(); // timestamped; later files win
  let n = 0;
  for (const f of files) {
    const src = registerSource(db, 'parkrun_html', path.join(dir, f), 'Official parkrun results page (Finsbury, parkrunner A2425906)');
    if (!src.changed && !FORCE) continue;
    const rows = parseParkrunHtml(src.buf.toString('utf8'));
    const st = db.prepare(`INSERT INTO parkrun_results(run_date,event_number,position,time_s,time_text,age_grade,pb_flag,source_id)
      VALUES (?,?,?,?,?,?,?,?) ON CONFLICT(run_date) DO UPDATE SET event_number=excluded.event_number, position=excluded.position,
      time_s=excluded.time_s, time_text=excluded.time_text, age_grade=excluded.age_grade, pb_flag=excluded.pb_flag, source_id=excluded.source_id`);
    tx(db, () => rows.forEach((r) => st.run(r.run_date, r.event_number, r.position, r.time_s, r.time_text, r.age_grade, r.pb_flag, src.id)));
    n += rows.length;
  }
  log('parkrun results upserted:', n, 'total:', db.prepare('SELECT count(*) c FROM parkrun_results').get().c);
}

// ---------------------------------------------------------------- Strava activities
function ingestActivities(db) {
  const dir = path.join(RAW, 'strava', 'activities');
  const st = db.prepare(`INSERT INTO strava_activities(id,start_local,sport_type,name,description,distance_m,moving_s,elapsed_s,elev_gain,
    relative_effort,avg_speed,avg_cadence,is_trainer,tags,polyline,raw_json,source_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    ON CONFLICT(id) DO UPDATE SET start_local=excluded.start_local, sport_type=excluded.sport_type, name=excluded.name,
    description=excluded.description, distance_m=excluded.distance_m, moving_s=excluded.moving_s, elapsed_s=excluded.elapsed_s,
    elev_gain=excluded.elev_gain, relative_effort=excluded.relative_effort, avg_speed=excluded.avg_speed, avg_cadence=excluded.avg_cadence,
    is_trainer=excluded.is_trainer, tags=excluded.tags, polyline=excluded.polyline, raw_json=excluded.raw_json, source_id=excluded.source_id`);
  let n = 0;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
    const src = registerSource(db, 'strava_activity_page', path.join(dir, f), 'Strava MCP list_activities page');
    if (!src.changed && !FORCE) continue;
    const page = JSON.parse(src.buf.toString('utf8'));
    tx(db, () => {
      for (const a of page.activities || []) {
        const s = a.summary || {};
        st.run(String(a.id), a.start_local, a.sport_type, a.name ?? null, a.description ?? null, s.distance ?? null, s.moving_time ?? null,
          s.elapsed_time ?? null, s.elevation_gain ?? null, s.relative_effort ?? null, s.avg_speed ?? null, s.avg_cadence ?? null,
          a.is_trainer ? 1 : 0, JSON.stringify(a.activity_tags || []), a.reduced_polyline ?? null, JSON.stringify(a), src.id);
        n++;
      }
    });
  }
  log('strava activities upserted:', n, 'total:', db.prepare('SELECT count(*) c FROM strava_activities').get().c);
}

// ---------------------------------------------------------------- matching
const minutesOf = (iso) => Number(iso.slice(11, 13)) * 60 + Number(iso.slice(14, 16));
function matchResults(db) {
  const results = db.prepare('SELECT * FROM parkrun_results ORDER BY run_date').all();
  const cand = db.prepare(`SELECT * FROM strava_activities WHERE substr(start_local,1,10)=? AND sport_type IN ('Run','TrailRun')
    AND distance_m > 3800 AND CAST(substr(start_local,12,2) AS INTEGER) BETWEEN 7 AND 9`);
  const up = db.prepare(`INSERT INTO matches(run_date,activity_id,method,confidence,note) VALUES (?,?,?,?,?)
    ON CONFLICT(run_date) DO UPDATE SET activity_id=excluded.activity_id, method=excluded.method, confidence=excluded.confidence, note=excluded.note`);
  let direct = 0, embedded = 0, none = 0;
  tx(db, () => {
    for (const r of results) {
      const cs = cand.all(r.run_date);
      // Prefer recordings that are a ~5 km run starting close to 09:00; otherwise a longer run that contains it.
      const scored = cs.map((a) => {
        const d = a.distance_m, dt = Math.abs(minutesOf(a.start_local) - 9 * 60);
        const isDirect = d >= 4500 && d <= 5700 && Math.abs((a.elapsed_s ?? 0) - r.time_s) < 240;
        return { a, isDirect, score: (isDirect ? 0 : 1000) + dt + Math.abs(d - 5000) / 100 };
      }).sort((x, y) => x.score - y.score);
      if (!scored.length) { up.run(r.run_date, null, 'none', 0, 'No Strava run recorded that morning'); none++; continue; }
      const best = scored[0];
      if (best.isDirect) {
        const conf = Math.max(0.5, 1 - Math.abs(best.a.elapsed_s - r.time_s) / 240);
        up.run(r.run_date, best.a.id, 'direct', Math.round(conf * 100) / 100,
          `"${best.a.name}" ${best.a.start_local.slice(11, 16)}, ${(best.a.distance_m / 1000).toFixed(2)} km, elapsed ${best.a.elapsed_s}s vs official ${r.time_s}s`);
        direct++;
      } else {
        up.run(r.run_date, best.a.id, 'embedded', 0.6,
          `parkrun is inside a longer recording "${best.a.name}" (${(best.a.distance_m / 1000).toFixed(1)} km from ${best.a.start_local.slice(11, 16)})`);
        embedded++;
      }
    }
  });
  log(`matches: direct=${direct} embedded=${embedded} none=${none}`);
}

// ---------------------------------------------------------------- streams
function ingestStreams(db) {
  const dir = path.join(RAW, 'strava', 'streams');
  const st = db.prepare(`INSERT INTO streams(activity_id,n_samples,keys,raw_json,source_id) VALUES (?,?,?,?,?)
    ON CONFLICT(activity_id) DO UPDATE SET n_samples=excluded.n_samples, keys=excluded.keys, raw_json=excluded.raw_json, source_id=excluded.source_id`);
  let n = 0;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
    const src = registerSource(db, 'strava_streams', path.join(dir, f), 'Strava MCP get_activity_streams (full resolution)');
    if (!src.changed && !FORCE && db.prepare('SELECT 1 FROM streams WHERE activity_id=?').get(f.slice(0, -5))) continue;
    const text = src.buf.toString('utf8');
    const d = JSON.parse(text);
    st.run(f.slice(0, -5), d.time?.length ?? 0, Object.keys(d).join(','), text, src.id);
    n++;
  }
  log('streams upserted:', n, 'total:', db.prepare('SELECT count(*) c FROM streams').get().c);
}

// ---------------------------------------------------------------- pacing
function loadCuration() {
  const f = path.join(DATA, 'curation.json');
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
}

function buildPerformances(db) {
  const cur = loadCuration();
  const rows = db.prepare(`SELECT r.*, m.activity_id, m.method, m.note AS match_note FROM parkrun_results r
    LEFT JOIN matches m ON m.run_date = r.run_date ORDER BY r.run_date`).all();
  const getStream = db.prepare('SELECT raw_json FROM streams WHERE activity_id=?');
  const getAct = db.prepare('SELECT * FROM strava_activities WHERE id=?');

  const built = [];
  const pending = [];
  const startPts = [], finishPts = [], dists = [];
  // pass 1: direct recordings
  for (const r of rows) {
    const s = r.activity_id && getStream.get(r.activity_id);
    if (!s || r.method !== 'direct') { pending.push(r); continue; }
    const st = JSON.parse(s.raw_json);
    const seg = directSegment(st);
    const p = buildProgress(st, seg.i0, seg.i1, r.time_s);
    const q = {
      method: 'direct', samples: st.time.length,
      sampleInterval: Math.round((st.time.at(-1) / st.time.length) * 10) / 10,
      recordedDuration: p.recordedDuration, officialDuration: r.time_s,
      durationDiff: p.recordedDuration - r.time_s, gpsDistance: Math.round(p.gpsDistance), i0: seg.i0, i1: seg.i1,
    };
    q.grade = Math.abs(q.durationDiff) <= 20 && q.gpsDistance > 4700 && q.gpsDistance < 5300 ? 'good' : 'fair';
    if (st.location) { startPts.push(st.location[seg.i0]); finishPts.push(st.location[seg.i1]); }
    dists.push(p.gpsDistance);
    built.push({ r, p, q, source: 'strava_1hz', activity: getAct.get(r.activity_id) });
  }
  const med = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
  const startPt = [med(startPts.map((x) => x[0])), med(startPts.map((x) => x[1]))];
  const finishPt = [med(finishPts.map((x) => x[0])), med(finishPts.map((x) => x[1]))];
  const refDist = med(dists);
  log('course start', startPt, 'finish', finishPt, 'median GPS distance', Math.round(refDist));

  // pass 2: embedded recordings, then estimated
  const shape = typicalShape(built.map((b) => b.p.progress));
  for (const r of pending) {
    const s = r.activity_id && getStream.get(r.activity_id);
    let done = false;
    if (s) {
      const st = JSON.parse(s.raw_json);
      const seg = extractSegment(st, startPt, finishPt, refDist, r.time_s);
      if (seg) {
        const p = buildProgress(st, seg.i0, seg.i1, r.time_s);
        const q = { method: 'embedded', samples: st.time.length, recordedDuration: p.recordedDuration, officialDuration: r.time_s,
          durationDiff: p.recordedDuration - r.time_s, gpsDistance: Math.round(p.gpsDistance), segmentStartIndex: seg.i0, i0: seg.i0, i1: seg.i1,
          finishMiss_m: Math.round(seg.dFin) };
        q.grade = Math.abs(q.durationDiff) <= 30 ? 'good' : 'fair';
        built.push({ r, p, q, source: 'strava_1hz_extracted', activity: getAct.get(r.activity_id) });
        done = true;
      }
    }
    if (!done) {
      const progress = shape.map((f) => Math.round(f * r.time_s * 100) / 100);
      built.push({ r, p: { progress, hr: null }, q: { method: 'estimated', grade: 'estimated',
        note: 'No usable Strava stream: pacing shape is the median of all recorded Finsbury parkruns, scaled to the official time. Overtakes involving this runner are illustrative, not historical.' },
        source: 'estimated_typical', activity: r.activity_id ? getAct.get(r.activity_id) : null });
    }
  }

  const st = db.prepare(`INSERT INTO performances(run_date,official_s,pacing_source,progress,hr,splits,lap1_s,lap2_s,quality,features,pool)
    VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(run_date) DO UPDATE SET official_s=excluded.official_s, pacing_source=excluded.pacing_source,
    progress=excluded.progress, hr=excluded.hr, splits=excluded.splits, lap1_s=excluded.lap1_s, lap2_s=excluded.lap2_s,
    quality=excluded.quality, features=excluded.features, pool=excluded.pool`);
  const novelty = new Set(cur.novelty || []);
  tx(db, () => {
    for (const b of built) {
      const f = features(b.p.progress);
      // 'novelty' = runs over 26:00 (jogging with a friend, sprint from the back...) or curated. Kept out of normal fields.
      const isNovelty = !(cur.main || []).includes(b.r.run_date) && (novelty.has(b.r.run_date) || b.r.time_s > 26 * 60);
      st.run(b.r.run_date, b.r.time_s, b.source, JSON.stringify(b.p.progress), b.p.hr ? JSON.stringify(b.p.hr) : null,
        JSON.stringify(f.splits), f.lap1_s, f.lap2_s, JSON.stringify(b.q), JSON.stringify(f), isNovelty ? 'novelty' : 'main');
    }
  });
  db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES ('course_start',?),('course_finish',?),('ref_gps_distance',?)")
    .run(JSON.stringify(startPt), JSON.stringify(finishPt), String(Math.round(refDist)));
  const c = db.prepare('SELECT pacing_source, pool, count(*) n FROM performances GROUP BY 1,2').all();
  log('performances:', JSON.stringify(c));
}

// ---------------------------------------------------------------- weather (Meteostat hourly bulk CSV)
function ingestWeather(db) {
  const dir = path.join(RAW, 'weather');
  if (!fs.existsSync(dir)) return;
  // Preference order: closest station first.
  const stations = [
    { file: 'meteostat_hourly_03768_london_city.csv.gz', name: 'London City Airport (Meteostat 03768)' },
    { file: 'meteostat_hourly_03772_heathrow.csv.gz', name: 'London Heathrow (Meteostat 03772)' },
  ];
  const dates = new Set(db.prepare('SELECT run_date FROM parkrun_results').all().map((r) => r.run_date));
  const have = new Set(db.prepare('SELECT run_date FROM weather').all().map((r) => r.run_date));
  const st = db.prepare(`INSERT INTO weather(run_date,station,obs_hour,temp_c,dewpoint_c,rhum,prcp_mm,wdir,wind_kmh,gust_kmh,pressure,coco,source_id)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(run_date) DO NOTHING`);
  for (const s of stations) {
    const file = path.join(dir, s.file);
    if (!fs.existsSync(file)) continue;
    const src = registerSource(db, 'weather_csv', file, s.name);
    const lines = zlib.gunzipSync(src.buf).toString('utf8').split('\n');
    let n = 0;
    tx(db, () => {
      for (const line of lines) {
        const c = line.split(',');
        if (c[1] !== '9' && c[1] !== '09') continue; // 09:00 local-ish (Meteostat is UTC; 09 UTC = 09/10 local) - use 09 UTC
        if (!dates.has(c[0]) || have.has(c[0])) continue;
        const num = (x) => (x === '' || x === undefined ? null : Number(x));
        st.run(c[0], s.name, `${c[0]}T09:00Z`, num(c[2]), num(c[3]), num(c[4]), num(c[5]), num(c[7]), num(c[8]), num(c[9]), num(c[10]), num(c[12]), src.id);
        have.add(c[0]); n++;
      }
    });
    log(`weather from ${s.name}: ${n}`);
  }
}

// ---------------------------------------------------------------- main
export function ingestAll() {
  const db = historyDb();
  const id = db.prepare('INSERT INTO import_log(started_at,kind,status) VALUES (?,?,?)').run(nowIso(), 'ingest', 'running').lastInsertRowid;
  try {
    ingestParkrun(db);
    ingestActivities(db);
    matchResults(db);
    ingestStreams(db);
    buildPerformances(db);
    ingestWeather(db);
    const nd = computeDiversions(db);
    log('course diversions found:', nd);
    const nf = computeFacts(db);
    log('facts written:', nf);
    db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES ('last_ingest',?)").run(nowIso());
    db.prepare('UPDATE import_log SET finished_at=?, status=? WHERE id=?').run(nowIso(), 'ok', id);
  } catch (e) {
    db.prepare('UPDATE import_log SET finished_at=?, status=?, detail=? WHERE id=?').run(nowIso(), 'error', String(e.stack || e), id);
    throw e;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) ingestAll();
