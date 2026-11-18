// Declutter layer: every clue = a punchy TRUE `headline` (<= 8 words) + a small `kicker` (<= 10 words, the joke).
// Headlines are rebuilt from the facts (never from free text), so they can't drift from the truth.
import { km, words, raceType, isRaceName, isIntervalName, aOrAn, cap } from './text.mjs';

export const wc = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;
export const MAX_HEAD = 8, MAX_KICK = 10;
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : null; };
const sum = (a) => (a || []).reduce((s, x) => s + x, 0);
const daysB = (d) => (d === 1 ? 'the day before' : `${words(d)} days before`);

// cand: the generator candidate (cat, said, ...); f: facts of the run
export function headlineFor(cand, f) {
  const c = cand.cat;
  if (cand.head) return cand.head; // field-relative (decisive) clues build their headline from the field's facts
  if (c === 'week_km') return f.km_7d === 0 ? 'No running at all that week' : `${km(f.km_7d)} km in the week before`;
  if (c === 'week_rel') {
    const r = f.km_7d / f.baseline_weekly_km, pct = Math.round(Math.abs(r - 1) * 100 / 5) * 5;
    if (r >= 1.95) return `${`${Math.round(r * 10) / 10}`.replace(/\.0$/, '')}x his usual weekly mileage`;
    if (r >= 1.2) return `About ${pct}% more running than usual`;
    if (r >= 0.8) return 'A perfectly normal week of training';
    if (r >= 0.35) return `About ${pct}% less running than usual`;
    return 'A fraction of his usual mileage';
  }
  if (c === 'month_km') return `${km(f.km_28d)} km in the previous four weeks`;
  if (c === 'consistency') return `Weekly runs, newest first: ${f.runs_per_week_4w.join(', ')}`;
  if (c === 'long_run') {
    const L = f.longest_run_14d;
    return L.km >= 9 ? `${km(L.km)} km long run, ${daysB(L.days_before)}` : `Longest run in a fortnight: ${km(L.km)} km`;
  }
  if (c === 'hard_session') {
    const H = f.hardest_7d;
    if (H.effort < 110) return `Easy week: hardest effort scored ${H.effort}`;
    const what = H.sport !== 'Run' ? `${H.sport.toLowerCase()} session` : isRaceName(H.name) ? raceType(H.km, H.name) : isIntervalName(H.name) ? 'interval session' : `${km(H.km)} km run`;
    const h = `Big ${what} ${daysB(H.days_before)}, effort ${H.effort}`;
    return wc(h) <= MAX_HEAD ? h : `Big session ${daysB(H.days_before)}: effort ${H.effort}`;
  }
  if (c === 'form') {
    const n = f.recent_finsbury_form?.length || 0;
    if (/best recent form/.test(cand.said)) return 'Best recent Finsbury form in this field';
    if (/worst recent form/.test(cand.said)) return 'Worst recent Finsbury form in this field';
    if (/middling/.test(cand.said)) return 'Middling recent form for this field';
    if (/hot streak/.test(cand.said)) return `Last visit: his quickest of ${words(n)}`;
    if (/slowed down/.test(cand.said)) return `Last visit: his slowest of ${words(n)}`;
    return 'Recent results swung by over a minute';
  }
  if (c === 'rest') {
    const d = f.days_since_last_run, r = f.rest_days_7d;
    if (/hadn't run for/.test(cand.said)) return `Hadn't run for ${d} days`;
    if (/took .* rest days/.test(cand.said)) return `${cap(words(r))} rest days in the week before`;
    if (/only had/.test(cand.said)) return `Only ${words(r)} rest days all week`;
    return `${cap(words(f.runs_7d))} runs in the week before`;
  }
  if (c === 'day_before') {
    const list = f.day_before || [];
    const runs = list.filter((a) => a.sport === 'Run');
    const race = runs.find((a) => isRaceName(a.name));
    const runKm = sum(runs.map((a) => a.km));
    if (race) { const t = raceType(race.km, race.name); return `Raced ${t === 'mile race' ? 'a mile' : aOrAn(t)} the day before`; }
    if (runKm >= 7) return `Ran ${km(runKm)} km the day before`;
    if (runKm > 0) return `${km(runKm)} km shake-out run the day before`;
    const o = list.find((a) => a.sport !== 'Run');
    if (o?.sport === 'Ride') return `Cycled ${km(sum(list.filter((a) => a.sport === 'Ride').map((a) => a.km)))} km the day before`;
    if (o?.sport === 'Swim') return 'Went for a swim the day before';
    if (o?.sport === 'WeightTraining') return 'Lifted weights the day before';
    if (o) return 'Cross-training the day before';
    return 'Total rest the day before';
  }
  if (c === 'warmup') { const w = f.warmup_km?.km ?? 0; return w > 0 ? `${km(w)} km warm-up before the start` : 'No warm-up whatsoever'; }
  if (c === 'temp') return `${Math.round(f.weather.temp_c)}°C at the start`;
  if (c === 'wind') {
    const w = f.weather, g = w.gust_kmh, s = Math.round(w.wind_kmh);
    if ((g != null && g >= 38) || s >= 25) return `Gusts up to ${Math.round(g ?? s)} km/h`;
    if (s <= 5) return 'Barely a breath of wind';
    return `A ${s} km/h breeze`;
  }
  if (c === 'damp') {
    const w = f.weather;
    return w.prcp_mm != null && w.prcp_mm >= 0.2 ? `${w.prcp_mm} mm of rain at the start` : `${Math.round(w.rhum)}% humidity at the start`;
  }
  if (c === 'race_soon') {
    const R = f.race_upcoming, a = aOrAn(raceType(R.km, R.name)), d = R.days_after;
    return d === 1 ? `Racing ${a} the very next day` : d <= 3 ? `Racing ${a} in ${words(d)} days` : `${cap(a)} coming up in ${words(d)} days`;
  }
  if (c === 'race_recent') { const R = f.race_recent; return `Raced ${aOrAn(raceType(R.km, R.name))} ${daysB(R.days_before)}`; }
  if (c === 'block') {
    const B = f.training_block;
    const t = /marathon/i.test(B.target) && !/half/i.test(B.target) ? 'marathon' : /half/i.test(B.target) ? 'half marathon' : 'big race';
    return `${cap(words(B.weeks_to))} weeks out from ${aOrAn(t)}`;
  }
  if (c === 'cross') {
    const X = Object.entries(f.cross_training_7d || {});
    if (!X.length) return 'No cross-training at all that week';
    const [s, { count, minutes }] = X.find(([k]) => cand.text.toLowerCase().includes({ Ride: 'bike', Swim: 'swam', WeightTraining: 'weights', Yoga: 'yoga', AlpineSki: 'ski', Elliptical: 'cross-trainer', Workout: 'workout' }[k] || '\u0000')) || X[0];
    if (s === 'Ride') return count > 1 ? `${cap(words(count))} bike rides that week, ${minutes} minutes` : `A ${minutes}-minute bike ride that week`;
    if (s === 'Swim') return `Swam for ${minutes} minutes that week`;
    if (s === 'WeightTraining') return `${minutes} minutes of weights that week`;
    if (s === 'Yoga') return `${minutes} minutes of yoga that week`;
    if (s === 'AlpineSki') return 'Went skiing that week';
    if (s === 'Elliptical') return `${minutes} minutes on a cross-trainer`;
    return `${minutes} minutes of cross-training that week`;
  }
  return cand.text.split(/(?<=[.!?])\s+/)[0];
}

const FALLBACK_KICK = {
  training: ['Make of that what you will.', 'Engine, or exhaust?', 'Read it and weep. Or bet.'],
  weather: ['Excuses, pre-loaded.', 'Weather: friend or foe?'],
  prep: ['Clever, or chaotic?', 'Preparation, of a sort.'],
  diary: ['Saving himself, or sharpening up?', 'Big picture thinking. Possibly.'],
  other: ['Make of that what you will.', 'Interesting. Or is it?'],
};
const GROUPS = { week_km: 'training', week_rel: 'training', month_km: 'training', consistency: 'training', long_run: 'training', hard_session: 'training', form: 'training',
  temp: 'weather', wind: 'weather', damp: 'weather', warmup: 'prep', day_before: 'prep', rest: 'prep', race_soon: 'diary', race_recent: 'diary', block: 'diary', field_km: 'training', field_runs: 'training' };

// The joke part of a template = everything after its first sentence, trimmed to <= MAX_KICK words (whole sentences only).
export function kickerFrom(text, cat, rng) {
  let parts = text.split(/(?<=[.!?"])\s+(?=[A-Z"'])/).slice(1);
  while (parts.length > 1 && wc(parts.join(' ')) > MAX_KICK) parts = parts.slice(0, -1);
  let k = parts.join(' ');
  if (!k || wc(k) > MAX_KICK) { const b = FALLBACK_KICK[GROUPS[cat] || 'other']; k = rng ? rng.pick(b) : b[0]; }
  return k;
}

// text for TTS / back-compat: headline + full stop (if it has no closing punctuation) + kicker
export const joinClue = (headline, kicker) => `${headline}${/[.!?:"]$/.test(headline) ? '' : '.'} ${kicker}`;
