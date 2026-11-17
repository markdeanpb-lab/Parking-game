// Loads performances + facts + results from the history DB once (read-only) and caches them.
const cache = new WeakMap();

const j = (s, d = null) => { if (s == null) return d; try { return JSON.parse(s); } catch { return d; } };

// Cache is keyed on the DB handle AND the last ingest stamp, so a Refresh Historical Data run is picked up immediately.
export function loadData(hist) {
  let ver = '';
  try { ver = hist.prepare("SELECT value FROM meta WHERE key='last_ingest'").get()?.value ?? ''; } catch { /* no meta table */ }
  const hit = cache.get(hist);
  if (hit && hit.__ver === ver) return hit;
  const data = loadDataUncached(hist);
  Object.defineProperty(data, '__ver', { value: ver });
  cache.set(hist, data);
  return data;
}
function loadDataUncached(hist) {
  const perfRows = hist.prepare(`SELECT p.*, r.event_number, r.position, r.time_text, r.age_grade, r.pb_flag
    FROM performances p JOIN parkrun_results r USING (run_date) ORDER BY p.run_date`).all();
  const factRows = hist.prepare('SELECT run_date, key, value, basis, refs FROM facts').all();
  const facts = {}, factMeta = {};
  for (const f of factRows) {
    (facts[f.run_date] ??= {})[f.key] = j(f.value);
    (factMeta[f.run_date] ??= {})[f.key] = { basis: f.basis, refs: j(f.refs, []) };
  }
  let hasDiv = true;
  const perfs = perfRows.map((p) => {
    if (!('diversions' in p)) hasDiv = false;
    return {
      date: p.run_date,
      officialS: p.official_s,
      pool: p.pool,
      pacingSource: p.pacing_source,
      progress: j(p.progress),
      hr: j(p.hr),
      splits: j(p.splits),
      features: j(p.features, {}),
      quality: j(p.quality, {}),
      diversions: j(p.diversions ?? null),
      result: { eventNumber: p.event_number, position: p.position, timeText: p.time_text, ageGrade: p.age_grade, pbFlag: p.pb_flag },
      facts: facts[p.run_date] || {},
      factMeta: factMeta[p.run_date] || {},
    };
  }).filter((p) => Array.isArray(p.progress) && p.progress.length === 201);
  const data = {
    perfs,
    byDate: new Map(perfs.map((p) => [p.date, p])),
    main: perfs.filter((p) => p.pool === 'main'),
    novelty: perfs.filter((p) => p.pool === 'novelty'),
    hasDiversions: hasDiv,
    raceWords: raceDenyWords(factRows),
  };
  return data;
}

// Distinctive words from race / activity names in the facts (used by the leak checker on clue text).
const GENERIC = new Set(['half', 'marathon', 'race', 'run', 'running', 'the', 'and', 'with', 'morning', 'afternoon', 'evening', 'lunch',
  'night', 'parkrun', '10k', '5k', 'km', 'mile', 'place', 'around', 'winter', 'my', 'his', 'to', 'of', 'a', 'in', 'on', 'at', 'for', 'xc', 'pb',
  'new', 'first', 'long', 'slow', 'sunday', 'ride', 'swim', 'weight', 'training', 'back', 'lots', 'hills', 'mins', 'min', 'x', 'way', 'round',
  'up', 'down', 'cool', 'warm', 'tempo', 'recovery', 'over', 'under', 'pace', 'alone', 'is', 'was', 'wasn\'t', 'happening', 'today',
  'building', 'getting', 'bag', 'block', 'jog', 'too', 'fast', 'hot', 'setting', 'era', 'pbs', 'feat', 'feet', 'blister', 'weeks', 'all',
  'stitch', 'bit', 'canal', 'countryside', 'roads', 'day', 'boxing', 'lane', 'aka', 'pains', 'treadmill', 'almost', 'sub', 'london', 'finsbury', 'park']);
const COMMON = new Set(['started', 'another', 'retiring', 'return', 'great', 'south', 'north', 'tough', 'slowish', 'sprint', 'finish', 'overslept',
  'pacing', 'brutal', 'hoping', 'cats', 'history', 'lesson', 'final', 'city', 'claw', 'hedge', 'lots', 'getting', 'building']);
function raceDenyWords(factRows) {
  const words = new Set();
  for (const f of factRows) {
    if (!['race_recent', 'race_upcoming', 'hardest_7d', 'longest_run_14d', 'training_block', 'day_before'].includes(f.key)) continue;
    const v = j(f.value);
    const names = Array.isArray(v) ? v.map((x) => x.name) : [v?.name, v?.target];
    for (const n of names) {
      if (!n) continue;
      for (const w of String(n).split(/[^A-Za-z']+/)) {
        const lw = w.toLowerCase();
        if (w.length >= 4 && /^[A-Z]/.test(w) && !GENERIC.has(lw) && !COMMON.has(lw)) words.add(lw);
      }
    }
  }
  return words;
}
