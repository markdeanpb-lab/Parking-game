// Contextual facts per parkrun, computed ONLY from imported records (Strava activity summaries, parkrun results,
// weather observations). Every fact stores its factual basis and source references. No invented values.
import { tx } from '../db.mjs';

const RUN_TYPES = new Set(['Run', 'TrailRun', 'VirtualRun']);
const DAY = 86400000;
const toMs = (iso) => Date.parse(iso.length <= 10 ? iso + 'T00:00:00Z' : iso + 'Z'); // treat local times as naive
const r1 = (x) => Math.round(x * 10) / 10;

const RACE_INCLUDE = /(marathon|\bhalf\b|10k|\bxc\b|cross.?country|race the neighbours|runthrough|runfest|relay|ultra|\brace\b)/i;
const RACE_EXCLUDE = /(training|weeks? to|taper|easy|treadmill|cheeky|not a half|pace|spectate|dream over|delayed|era\b|getting a|with louis|long run|before parkrun|warm|cool|recovery|shakeout|x \(|tempo|interval|run to)/i;

export function isRace(a, curation = {}) {
  if ((curation.race_include || []).includes(a.id)) return true;
  if ((curation.race_exclude || []).includes(a.id)) return false;
  if (!RUN_TYPES.has(a.sport_type)) return false;
  const tags = JSON.parse(a.tags || '[]');
  if (tags.includes('Race')) return true;
  return (a.distance_m ?? 0) >= 7000 && RACE_INCLUDE.test(a.name || '') && !RACE_EXCLUDE.test(a.name || '');
}

const BLOCK_RE = [
  /week\s*(\d+)\s*\/\s*(\d+)\s*of\s+([A-Za-z][A-Za-z ]+?)\s+training/i,
  /(\d+)\s*weeks?\s*(?:to|until|out from)\s+([A-Z][A-Za-z ]+?(?:marathon|half|10k))/i,
];

export function computeFacts(db, curation = {}) {
  const perfs = db.prepare(`SELECT p.run_date, p.official_s, m.activity_id, m.method FROM performances p
    LEFT JOIN matches m ON m.run_date = p.run_date ORDER BY p.run_date`).all();
  const acts = db.prepare('SELECT * FROM strava_activities ORDER BY start_local').all();
  const results = db.prepare('SELECT * FROM parkrun_results ORDER BY run_date').all();
  const weather = new Map(db.prepare('SELECT * FROM weather').all().map((w) => [w.run_date, w]));
  const byId = new Map(acts.map((a) => [a.id, a]));
  const t = acts.map((a) => toMs(a.start_local));
  const races = acts.filter((a) => isRace(a, curation));

  const ins = db.prepare('INSERT OR REPLACE INTO facts(run_date,key,value,basis,refs) VALUES (?,?,?,?,?)');
  const perfQ = db.prepare('SELECT hr, quality FROM performances WHERE run_date = ?');
  const streamQ = db.prepare('SELECT raw_json FROM streams WHERE activity_id = ?');
  let n = 0;
  tx(db, () => {
    db.exec('DELETE FROM facts');
    for (const p of perfs) {
      const pa = p.activity_id ? byId.get(p.activity_id) : null;
      const embedded = p.method === 'embedded';
      // Reference instant: start of the parkrun recording (or 09:00 on the day).
      const startMs = pa && !embedded ? toMs(pa.start_local) : toMs(p.run_date + 'T09:00:00');
      const dayStart = toMs(p.run_date);
      const put = (key, value, basis, refs = []) => { ins.run(p.run_date, key, JSON.stringify(value), basis, JSON.stringify(refs)); n++; };

      const before = (days) => acts.filter((a, i) => t[i] < startMs && t[i] >= startMs - days * DAY && a.id !== p.activity_id);
      const runsIn = (days) => before(days).filter((a) => RUN_TYPES.has(a.sport_type));
      const km = (list) => r1(list.reduce((s, a) => s + (a.distance_m || 0), 0) / 1000);

      // --- training volume
      for (const d of [7, 14, 28]) {
        const L = runsIn(d).filter((a) => toMs(a.start_local) < dayStart); // exclude same-morning warm-ups
        put(`km_${d}d`, km(L), `Sum of ${L.length} Strava runs in the ${d} days before the parkrun`, L.map((a) => a.id));
        put(`runs_${d}d`, L.length, `Count of Strava runs in the ${d} days before the parkrun`, L.map((a) => a.id));
      }
      const L91 = runsIn(91).filter((a) => toMs(a.start_local) < dayStart);
      const base = km(L91) / 13;
      put('baseline_weekly_km', r1(base), `Average weekly running km over the previous 13 weeks (${L91.length} runs)`, []);
      const k7 = km(runsIn(7).filter((a) => toMs(a.start_local) < dayStart));
      put('rel_week', base > 0 ? Math.round((k7 / base) * 100) / 100 : null, 'Last-7-days km divided by 13-week weekly average', []);

      // --- rest / consistency
      const lastRun = [...runsIn(60)].filter((a) => toMs(a.start_local) < dayStart).pop();
      if (lastRun) put('days_since_last_run', Math.round((dayStart - toMs(lastRun.start_local.slice(0, 10))) / DAY),
        `Most recent prior run: "${lastRun.name}" (${r1(lastRun.distance_m / 1000)} km)`, [lastRun.id]);
      const runDays7 = new Set(runsIn(7).filter((a) => toMs(a.start_local) < dayStart).map((a) => a.start_local.slice(0, 10)));
      put('rest_days_7d', 7 - runDays7.size, 'Days without a recorded run in the 7 days before', []);
      const weeks = [0, 1, 2, 3].map((w) => acts.filter((a, i) => RUN_TYPES.has(a.sport_type) && t[i] < dayStart - w * 7 * DAY && t[i] >= dayStart - (w + 1) * 7 * DAY).length);
      put('runs_per_week_4w', weeks, 'Runs per week for each of the 4 weeks before (most recent first)', []);

      // --- long run, hardest session, day before
      const r14 = runsIn(14).filter((a) => toMs(a.start_local) < dayStart);
      const longest = r14.reduce((b, a) => (!b || a.distance_m > b.distance_m ? a : b), null);
      if (longest) put('longest_run_14d', { km: r1(longest.distance_m / 1000), days_before: Math.round((dayStart - toMs(longest.start_local.slice(0, 10))) / DAY), name: longest.name },
        `Longest run in the 14 days before: "${longest.name}"`, [longest.id]);
      const a7 = before(7).filter((a) => toMs(a.start_local) < dayStart && a.relative_effort != null);
      const hardest = a7.reduce((b, a) => (!b || a.relative_effort > b.relative_effort ? a : b), null);
      if (hardest) put('hardest_7d', { effort: hardest.relative_effort, sport: hardest.sport_type, km: r1((hardest.distance_m || 0) / 1000), name: hardest.name,
        days_before: Math.round((dayStart - toMs(hardest.start_local.slice(0, 10))) / DAY) },
        `Highest Strava relative effort in the 7 days before: "${hardest.name}" (${hardest.relative_effort})`, [hardest.id]);
      const prevDay = p.run_date && new Date(dayStart - DAY).toISOString().slice(0, 10);
      const dayBefore = acts.filter((a) => a.start_local.slice(0, 10) === prevDay);
      put('day_before', dayBefore.map((a) => ({ sport: a.sport_type, km: r1((a.distance_m || 0) / 1000), minutes: Math.round((a.moving_s || 0) / 60), name: a.name })),
        dayBefore.length ? `Activities on the day before: ${dayBefore.map((a) => `"${a.name}"`).join(', ')}` : 'No activities recorded the day before', dayBefore.map((a) => a.id));
      const cross = before(7).filter((a) => !RUN_TYPES.has(a.sport_type) && a.sport_type !== 'Walk' && toMs(a.start_local) < dayStart);
      const crossBy = {};
      for (const a of cross) { crossBy[a.sport_type] ??= { count: 0, minutes: 0 }; crossBy[a.sport_type].count++; crossBy[a.sport_type].minutes += Math.round((a.moving_s || 0) / 60); }
      put('cross_training_7d', crossBy, `Non-running activities in the 7 days before (${cross.length})`, cross.map((a) => a.id));

      // --- same-morning warm-up
      const sameMorning = acts.filter((a, i) => a.start_local.slice(0, 10) === p.run_date && t[i] < startMs && RUN_TYPES.has(a.sport_type) && a.id !== p.activity_id);
      const warm = embedded && pa ? { km: r1(pa.distance_m / 1000 - 5), note: 'parkrun was part of a longer run' } : { km: km(sameMorning) };
      put('warmup_km', warm, embedded ? `The parkrun was recorded inside "${pa?.name}" (${r1((pa?.distance_m || 0) / 1000)} km total)` : `Runs recorded earlier that morning: ${sameMorning.length}`,
        embedded && pa ? [pa.id] : sameMorning.map((a) => a.id));

      // --- training-type counts in the 7 days before (treadmill / interval sessions), from titles, descriptions and trainer flag
      const prev7 = runsIn(7).filter((a) => toMs(a.start_local) < dayStart);
      const isTreadmill = (a) => a.is_trainer === 1 || /treadmill|dreadmill/i.test(`${a.name || ''} ${a.description || ''}`);
      const isIntervals = (a) => /interval|reps\b|\breps|track session|\btrack\b|\d+\s*[x×]\s*\d|fartlek|tempo|session/i.test(`${a.name || ''} ${a.description || ''}`);
      const tm = prev7.filter(isTreadmill), iv = prev7.filter(isIntervals);
      put('treadmill_7d', tm.length, `Treadmill runs in the 7 days before: ${tm.map((a) => `"${a.name}"`).join(', ') || 'none'}`, tm.map((a) => a.id));
      put('intervals_7d', iv.length, `Interval/track/tempo sessions in the 7 days before: ${iv.map((a) => `"${a.name}"`).join(', ') || 'none'}`, iv.map((a) => a.id));

      // --- races
      const recent = races.filter((a) => toMs(a.start_local) < dayStart && toMs(a.start_local) >= dayStart - 21 * DAY).pop();
      if (recent) put('race_recent', { name: recent.name, km: r1(recent.distance_m / 1000), days_before: Math.round((dayStart - toMs(recent.start_local.slice(0, 10))) / DAY) },
        `Race recorded on Strava: "${recent.name}"`, [recent.id]);
      const upcoming = races.find((a) => toMs(a.start_local) > startMs + 6 * 3600000 && toMs(a.start_local) <= dayStart + 35 * DAY);
      if (upcoming) put('race_upcoming', { name: upcoming.name, km: r1(upcoming.distance_m / 1000), days_after: Math.round((toMs(upcoming.start_local.slice(0, 10)) - dayStart) / DAY) },
        `Next race recorded on Strava: "${upcoming.name}"`, [upcoming.id]);

      // --- training block mentions in the athlete's own titles/descriptions (+/- 14 days)
      const near = acts.filter((a, i) => Math.abs(t[i] - dayStart) <= 14 * DAY);
      for (const a of near) {
        const text = `${a.name || ''} ${a.description || ''}`;
        let m;
        if ((m = text.match(BLOCK_RE[0]))) { put('training_block', { week: +m[1], of: +m[2], target: m[3].trim(), said_on_days_offset: Math.round((toMs(a.start_local.slice(0, 10)) - dayStart) / DAY) }, `Strava text: "${m[0]}"`, [a.id]); break; }
        if ((m = text.match(BLOCK_RE[1]))) { put('training_block', { weeks_to: +m[1], target: m[2].trim(), said_on_days_offset: Math.round((toMs(a.start_local.slice(0, 10)) - dayStart) / DAY) }, `Strava text: "${m[0]}"`, [a.id]); break; }
      }

      // --- parkrun history
      const idx = results.findIndex((r) => r.run_date === p.run_date);
      const prev = idx > 0 ? results[idx - 1] : null;
      if (prev) put('prev_finsbury', { time_s: prev.time_s, days_before: Math.round((dayStart - toMs(prev.run_date)) / DAY), delta_s: p.official_s - prev.time_s },
        `Previous official Finsbury parkrun result (${prev.time_text})`, [`parkrun:${prev.run_date}`]);
      put('finsbury_number', idx + 1, 'Position of this run in his Finsbury parkrun history', [`parkrun:${p.run_date}`]);
      const priorBest = results.slice(0, idx).reduce((b, r) => Math.min(b, r.time_s), Infinity);
      put('was_finsbury_pb', idx > 0 && p.official_s < priorBest, 'Faster than every previous Finsbury result', []);
      const last5 = results.slice(Math.max(0, idx - 5), idx);
      if (last5.length) put('recent_finsbury_form', last5.map((r) => r.time_s), 'Official times of up to 5 previous Finsbury parkruns', last5.map((r) => `parkrun:${r.run_date}`));

      // --- weather
      const w = weather.get(p.run_date);
      if (w) put('weather', { temp_c: w.temp_c, wind_kmh: w.wind_kmh, gust_kmh: w.gust_kmh, prcp_mm: w.prcp_mm, rhum: w.rhum, coco: w.coco, station: w.station },
        `Hourly observation ${w.obs_hour} at ${w.station}`, [`weather:${w.station}`]);

      // --- in-run measurements from the parkrun segment of the stream: mean HR, cadence (steps/min); kudos (post-race only)
      if (pa) {
        const perf = perfQ.get(p.run_date);
        const hr = perf?.hr ? JSON.parse(perf.hr).filter((x) => x > 0) : [];
        if (hr.length > 20) put('hr_mean', Math.round(hr.reduce((x, y) => x + y, 0) / hr.length), 'Mean recorded heart rate during the parkrun (watch sensor)', [pa.id]);
        const q = perf ? JSON.parse(perf.quality || '{}') : {};
        const st = streamQ.get(pa.id);
        if (st && q.i0 != null && q.i1 != null) {
          const cad = (JSON.parse(st.raw_json).cadence || []).slice(q.i0, q.i1).filter((x) => x > 50);
          if (cad.length > 20) put('cadence_spm', Math.round((2 * cad.reduce((x, y) => x + y, 0)) / cad.length), 'Mean cadence during the parkrun (Strava stream, per-leg rpm x 2)', [pa.id]);
        }
        const kudos = JSON.parse(pa.raw_json).summary?.kudos_count;
        if (Number.isFinite(kudos)) put('kudos', kudos, 'Kudos on the Strava activity', [pa.id]);
      }

      // --- in-run measurements (post-race reveal only)
      if (pa) {
        const raw = JSON.parse(pa.raw_json);
        put('activity', { name: pa.name, description: pa.description, start_local: pa.start_local, elev_gain: pa.elev_gain, cadence: pa.avg_cadence,
          relative_effort: pa.relative_effort, kudos: raw.summary?.kudos_count ?? null }, 'Strava activity summary', [pa.id]);
      }
    }
  });
  return n;
}
