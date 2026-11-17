// Persistent storage. Two SQLite files:
//   data/markrun.db  - historical data (parkrun results, Strava activities, streams, pacing, facts, weather).
//                      Written ONLY by the import/refresh pipeline. Read-only during play.
//   data/session.db  - game sessions, players, bankrolls, rounds, bets, usage history. Written during play.
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA = path.join(ROOT, 'data');

const HIST_SCHEMA = `
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS sources (
  id INTEGER PRIMARY KEY, kind TEXT NOT NULL, path TEXT NOT NULL UNIQUE, sha256 TEXT NOT NULL,
  bytes INTEGER, imported_at TEXT NOT NULL, note TEXT);
CREATE TABLE IF NOT EXISTS parkrun_results (
  run_date TEXT PRIMARY KEY, event_number INTEGER, position INTEGER, time_s INTEGER NOT NULL,
  time_text TEXT NOT NULL, age_grade REAL, pb_flag TEXT, source_id INTEGER REFERENCES sources(id));
CREATE TABLE IF NOT EXISTS strava_activities (
  id TEXT PRIMARY KEY, start_local TEXT NOT NULL, sport_type TEXT, name TEXT, description TEXT,
  distance_m REAL, moving_s INTEGER, elapsed_s INTEGER, elev_gain REAL, relative_effort REAL,
  avg_speed REAL, avg_cadence REAL, is_trainer INTEGER, tags TEXT, polyline TEXT, raw_json TEXT NOT NULL,
  source_id INTEGER REFERENCES sources(id));
CREATE INDEX IF NOT EXISTS idx_act_start ON strava_activities(start_local);
CREATE TABLE IF NOT EXISTS streams (
  activity_id TEXT PRIMARY KEY, n_samples INTEGER, keys TEXT, raw_json TEXT NOT NULL,
  source_id INTEGER REFERENCES sources(id));
CREATE TABLE IF NOT EXISTS matches (
  run_date TEXT PRIMARY KEY REFERENCES parkrun_results(run_date), activity_id TEXT, method TEXT NOT NULL,
  confidence REAL, note TEXT);
CREATE TABLE IF NOT EXISTS performances (
  run_date TEXT PRIMARY KEY REFERENCES parkrun_results(run_date), official_s INTEGER NOT NULL,
  pacing_source TEXT NOT NULL,      -- 'strava_1hz' | 'strava_1hz_extracted' | 'estimated_typical'
  progress TEXT NOT NULL,           -- JSON: seconds elapsed at every 25 m of course (201 values, last == official_s)
  hr TEXT,                          -- JSON: heart rate at every 25 m (201 values) or null
  splits TEXT,                      -- JSON: km split seconds (5 values)
  lap1_s REAL, lap2_s REAL,
  quality TEXT,                     -- JSON data-quality notes
  features TEXT,                    -- JSON derived pacing features
  pool TEXT NOT NULL                -- 'main' | 'novelty'
);
CREATE TABLE IF NOT EXISTS weather (
  run_date TEXT PRIMARY KEY, station TEXT, obs_hour TEXT, temp_c REAL, dewpoint_c REAL, rhum REAL,
  prcp_mm REAL, wdir REAL, wind_kmh REAL, gust_kmh REAL, pressure REAL, coco INTEGER,
  source_id INTEGER REFERENCES sources(id));
CREATE TABLE IF NOT EXISTS facts (
  run_date TEXT NOT NULL, key TEXT NOT NULL, value TEXT NOT NULL, -- JSON value
  basis TEXT NOT NULL,              -- human-readable factual basis
  refs TEXT NOT NULL,               -- JSON array of source refs (activity ids, source paths)
  PRIMARY KEY (run_date, key));
CREATE TABLE IF NOT EXISTS import_log (
  id INTEGER PRIMARY KEY, started_at TEXT, finished_at TEXT, kind TEXT, status TEXT, detail TEXT);
`;

const SESSION_SCHEMA = `
CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS usage (run_date TEXT NOT NULL, used_at TEXT NOT NULL, round_id TEXT);
CREATE INDEX IF NOT EXISTS idx_usage_date ON usage(run_date);
CREATE TABLE IF NOT EXISTS round_log (id TEXT PRIMARY KEY, session_id TEXT, created_at TEXT, archetype TEXT, data TEXT);
`;

function open(file, schema) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec('PRAGMA journal_mode=WAL; PRAGMA synchronous=NORMAL; PRAGMA foreign_keys=ON;');
  db.exec(schema);
  return db;
}

let hist, sess;
export function historyDb(file = process.env.MARKRUN_DB || path.join(DATA, 'markrun.db')) {
  if (!hist) hist = open(file, HIST_SCHEMA);
  return hist;
}
export function sessionDb(file = process.env.MARKRUN_SESSION_DB || path.join(DATA, 'session.db')) {
  if (!sess) sess = open(file, SESSION_SCHEMA);
  return sess;
}
export function closeAll() { hist?.close(); sess?.close(); hist = sess = undefined; }

export function tx(db, fn) {
  db.exec('BEGIN');
  try { const r = fn(); db.exec('COMMIT'); return r; } catch (e) { db.exec('ROLLBACK'); throw e; }
}
