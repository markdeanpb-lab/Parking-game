// REFRESH HISTORICAL DATA — the ONLY code path in MARKRUN that talks to the internet. Never runs at startup or during play.
// Fetches only new/changed information, writes raw files atomically, then re-runs the idempotent ingest.
//
//   npm run refresh                 parkrun results + weather (+ Strava if data/strava_credentials.json exists)
//   npm run refresh -- --no-strava  skip Strava
//   node server/import/refresh.mjs --strava-auth --client-id ID --client-secret SECRET   (one-time Strava API setup)
//
// Strava route: the user's own free Strava API application (https://www.strava.com/settings/api), OAuth tokens kept
// in data/strava_credentials.json (git-ignored). Alternative route: ask Claude Code (Strava connector) to follow
// docs/REFRESH.md — it drops raw files into data/raw/strava/ and runs the same ingest.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import { DATA, historyDb } from '../db.mjs';
import { ingestAll, parseParkrunHtml } from './ingest.mjs';

const RAW = path.join(DATA, 'raw');
const CRED = path.join(DATA, 'strava_credentials.json');
const PARKRUN_URL = 'https://www.parkrun.org.uk/finsbury/parkrunner/2425906/';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const STREAM_KEYS = 'time,distance,latlng,altitude,heartrate,velocity_smooth,grade_smooth,moving,cadence';

function writeAtomic(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.part-${process.pid}`;
  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, file);
}
const sha = (b) => crypto.createHash('sha256').update(b).digest('hex');
const stamp = () => new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');

async function fetchWithRetry(url, opts = {}, tries = 4) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { ...opts, signal: AbortSignal.timeout(30000) });
      if (r.status === 429 || r.status >= 500) throw new Error(`HTTP ${r.status}`);
      return r;
    } catch (e) { last = e; await new Promise((res) => setTimeout(res, 1000 * 2 ** i)); }
  }
  throw last;
}

// ---------------------------------------------------------------- parkrun
async function refreshParkrun(progress) {
  progress('parkrun', 'Fetching official Finsbury parkrun results…');
  const r = await fetchWithRetry(PARKRUN_URL, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-GB' } });
  if (!r.ok) throw new Error(`parkrun returned HTTP ${r.status} (the site sometimes blocks automated requests; try again later)`);
  const html = await r.text();
  const rows = parseParkrunHtml(html); // throws if the page is not a results page
  const dir = path.join(RAW, 'parkrun');
  const latest = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).sort().pop();
  const prevRows = latest ? parseParkrunHtml(fs.readFileSync(path.join(dir, latest), 'utf8')) : [];
  const known = new Set(prevRows.map((x) => x.run_date));
  const fresh = rows.filter((x) => !known.has(x.run_date));
  if (!fresh.length && rows.length === prevRows.length) { progress('parkrun', `No new results (${rows.length} on record).`); return []; }
  writeAtomic(path.join(dir, `parkrunner_2425906_${stamp()}.html`), html);
  progress('parkrun', `${fresh.length} new result(s): ${fresh.map((x) => x.run_date).join(', ') || '(changes to existing rows)'}`);
  return fresh;
}

// ---------------------------------------------------------------- weather (Meteostat hourly bulk)
async function refreshWeather(progress) {
  const db = historyDb();
  const missing = db.prepare('SELECT r.run_date FROM parkrun_results r LEFT JOIN weather w USING(run_date) WHERE w.run_date IS NULL').all();
  if (!missing.length) { progress('weather', 'Weather already recorded for every parkrun.'); return; }
  progress('weather', `Looking for weather for ${missing.length} run(s)…`);
  for (const [id, name] of [['03768', 'london_city'], ['03772', 'heathrow']]) {
    try {
      const r = await fetchWithRetry(`https://bulk.meteostat.net/v2/hourly/${id}.csv.gz`);
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      const file = path.join(RAW, 'weather', `meteostat_hourly_${id}_${name}.csv.gz`);
      if (fs.existsSync(file) && sha(fs.readFileSync(file)) === sha(buf)) continue;
      writeAtomic(file, buf);
      progress('weather', `Updated station ${id} (${name}).`);
    } catch (e) { progress('weather', `Station ${id}: ${e.message}`); }
  }
}

// ---------------------------------------------------------------- Strava API (user's own app)
function loadCred() { return fs.existsSync(CRED) ? JSON.parse(fs.readFileSync(CRED, 'utf8')) : null; }
async function accessToken(cred) {
  if (cred.expires_at && cred.expires_at * 1000 > Date.now() + 60000) return cred.access_token;
  const r = await fetchWithRetry('https://www.strava.com/oauth/token', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: cred.client_id, client_secret: cred.client_secret, grant_type: 'refresh_token', refresh_token: cred.refresh_token }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`Strava token refresh failed: ${JSON.stringify(j)}`);
  Object.assign(cred, { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: j.expires_at });
  writeAtomic(CRED, JSON.stringify(cred, null, 2));
  return cred.access_token;
}

// Normalise Strava API v3 shapes to the same shapes the importer already uses (the Strava MCP shapes).
export function normaliseApiActivity(a) {
  return {
    id: String(a.id), name: a.name, description: a.description ?? undefined, sport_type: a.sport_type || a.type,
    start_local: String(a.start_date_local).replace(/Z$/, ''), is_trainer: !!a.trainer,
    activity_tags: a.workout_type === 1 ? ['Race'] : a.commute ? ['Commute'] : [],
    summary: { distance: a.distance, moving_time: a.moving_time, elapsed_time: a.elapsed_time, elevation_gain: a.total_elevation_gain,
      avg_speed: a.average_speed, max_speed: a.max_speed, avg_cadence: a.average_cadence, relative_effort: a.suffer_score ?? undefined,
      kudos_count: a.kudos_count, achievement_count: a.achievement_count, pr_count: a.pr_count },
    reduced_polyline: a.map?.summary_polyline || undefined, _source: 'strava_api_v3',
  };
}
export function normaliseApiStreams(s) {
  const map = { latlng: 'location', heartrate: 'heart_rate' };
  const out = {};
  for (const [k, v] of Object.entries(s)) out[map[k] || k] = v.data;
  return out;
}

async function refreshStrava(progress) {
  const cred = loadCred();
  if (!cred) { progress('strava', 'Strava API not set up — skipped (see README "Refreshing historical data").'); return; }
  const token = await accessToken(cred);
  const db = historyDb();
  const last = db.prepare('SELECT max(start_local) m FROM strava_activities').get().m;
  // re-list the last 3 days too, so edited titles/descriptions are picked up without refetching everything
  const after = Math.floor((Date.parse(last + 'Z') - 3 * 86400000) / 1000);
  progress('strava', `Listing activities since ${last.slice(0, 10)} (minus 3 days)…`);
  const acts = [];
  for (let page = 1; page < 50; page++) {
    const r = await fetchWithRetry(`https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=100&page=${page}`, { headers: { Authorization: `Bearer ${token}` } });
    if (!r.ok) throw new Error(`Strava activities HTTP ${r.status}`);
    const j = await r.json();
    acts.push(...j);
    progress('strava', `…${acts.length} activities`);
    if (j.length < 100) break;
  }
  if (acts.length) {
    const page = { activities: acts.map(normaliseApiActivity), _fetched_at: new Date().toISOString(), _source: 'strava_api_v3' };
    writeAtomic(path.join(RAW, 'strava', 'activities', `page_${page.activities[0].start_local.replace(/:/g, '')}_api.json`), JSON.stringify(page));
  }
  // Ingest so matching sees the new activities, then fetch streams only for matched parkruns without one.
  ingestAll();
  const need = db.prepare(`SELECT m.run_date, m.activity_id FROM matches m LEFT JOIN streams s ON s.activity_id = m.activity_id
    WHERE m.activity_id IS NOT NULL AND s.activity_id IS NULL`).all();
  for (const [i, n] of need.entries()) {
    const file = path.join(RAW, 'strava', 'streams', `${n.activity_id}.json`);
    if (fs.existsSync(file)) continue;
    progress('strava', `Pacing stream ${i + 1}/${need.length} (parkrun ${n.run_date})…`);
    const r = await fetchWithRetry(`https://www.strava.com/api/v3/activities/${n.activity_id}/streams?keys=${STREAM_KEYS}&key_by_type=true`, { headers: { Authorization: `Bearer ${token}` } });
    if (!r.ok) { progress('strava', `stream ${n.activity_id}: HTTP ${r.status}`); continue; }
    const raw = await r.json();
    writeAtomic(path.join(RAW, 'strava', 'streams_api_raw', `${n.activity_id}.json`), JSON.stringify(raw));
    writeAtomic(file, JSON.stringify(normaliseApiStreams(raw)));
  }
}

// ---------------------------------------------------------------- orchestration
export async function runRefresh({ onProgress = (step, msg) => console.log(`[refresh:${step}] ${msg}`), strava = true } = {}) {
  const report = { ok: true, steps: [] };
  const progress = (step, msg) => { report.steps.push({ step, msg }); onProgress(step, msg); };
  const before = countRows();
  for (const [name, fn] of [['parkrun', refreshParkrun], ['strava', strava ? refreshStrava : null], ['weather', refreshWeather]]) {
    if (!fn) continue;
    try { await fn(progress); } catch (e) { report.ok = false; progress(name, `FAILED: ${e.message} — existing data is untouched.`); }
  }
  progress('ingest', 'Updating the local database…');
  ingestAll();
  const after = countRows();
  progress('done', `parkruns ${before.r}→${after.r}, Strava activities ${before.a}→${after.a}, pacing traces ${before.p}→${after.p}`);
  return report;
}
function countRows() {
  const db = historyDb();
  const c = (t) => db.prepare(`SELECT count(*) c FROM ${t}`).get().c;
  return { r: c('parkrun_results'), a: c('strava_activities'), p: c('performances') };
}

// One-time Strava OAuth for the user's own API application.
async function stravaAuth(clientId, clientSecret, port = 8089) {
  const redirect = `http://localhost:${port}/callback`;
  const url = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirect)}&approval_prompt=auto&scope=read,activity:read_all`;
  console.log(`\nOpen this URL in a browser on THIS computer and approve access:\n\n  ${url}\n`);
  const code = await new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const u = new URL(req.url, redirect);
      if (u.pathname !== '/callback') { res.end(); return; }
      res.end('MARKRUN: Strava connected. You can close this tab.');
      srv.close(); resolve(u.searchParams.get('code'));
    }).listen(port);
  });
  const r = await fetch('https://www.strava.com/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, grant_type: 'authorization_code' }) });
  const j = await r.json();
  if (!r.ok) throw new Error(JSON.stringify(j));
  writeAtomic(CRED, JSON.stringify({ client_id: clientId, client_secret: clientSecret, access_token: j.access_token, refresh_token: j.refresh_token, expires_at: j.expires_at }, null, 2));
  console.log('Saved', CRED);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
  if (process.argv.includes('--strava-auth')) await stravaAuth(arg('--client-id'), arg('--client-secret'));
  else { const r = await runRefresh({ strava: !process.argv.includes('--no-strava') }); process.exitCode = r.ok ? 0 : 1; }
}
