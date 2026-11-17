// Announced round themes (round.public.theme). A theme narrows the pool the field is drawn from; the archetype stays secret.
// Data themes use facts (weather, training block, upcoming race, diversions); band themes vary the speed band across a session.
export const BANDS = {
  fast: { lo: 0, hi: 1185 },
  mid: { lo: 1185, hi: 1300 },
  slow: { lo: 1300, hi: 99999 },
};
export const bandOf = (s) => (s < BANDS.fast.hi ? 'fast' : s < BANDS.mid.hi ? 'mid' : 'slow');

const T = (key, label, blurbs, extra = {}) => ({ key, label, blurbs, ...extra });

export const THEMES = {
  // band themes (always available)
  band_fast: T('band_fast', 'The Speed Merchants\' Stakes', ['The sharp end of the archive. Blink and you\'ll miss the Hill.', 'Only his quicker mornings allowed. Elbows sharpened.'], { band: 'fast' }),
  band_mid: T('band_mid', 'The Middle-Pack Muddle', ['Not the quickest, not the slowest. Absolutely anyone\'s race.', 'Five honest, mid-table mornings. Somebody has to win it.'], { band: 'mid' }),
  band_slow: T('band_slow', 'The Plodders\' Plate', ['Saturday-morning legs, Friday-night choices. Gloriously human.', 'The steadier end of the archive. Lovely scenery, plenty of it.'], { band: 'slow' }),
  // data themes
  winter: T('winter', 'Winter Warriors', ['Every one of these runs started at 5°C or colder. Gloves compulsory, dignity optional.', 'Frost on the grass, steam off the runners. Five cold-weather mornings.'],
    { pred: (f) => f.weather?.temp_c != null && f.weather.temp_c <= 5, windowS: 120 }),
  heat: T('heat', 'The Heatwave Handicap', ['Every one of these started at 15°C or warmer. Sun cream before shoelaces.', 'Five warm mornings. Somebody bring the ice lollies.'],
    { pred: (f) => f.weather?.temp_c != null && f.weather.temp_c >= 15, windowS: 120 }),
  block: T('block', 'The Marathon Block Stakes', ['All five were in serious training: a big long run in the fortnight, or a race countdown on. Engine or exhaust?', 'Long-run season. Every runner here had done 18 km or more in the previous fortnight, or was counting down to a big race.'],
    { pred: (f) => !!f.training_block || (f.longest_run_14d?.km ?? 0) >= 18, windowS: 90 }),
  taper: T('taper', 'The Taper Trophy', ['Every runner here had a race within ten days. Saving the legs, or sharpening them?', 'Big race looming for all five. Who\'s holding back?'],
    { pred: (f) => !!f.race_upcoming && f.race_upcoming.days_after <= 10, windowS: 140 }),
  windy: T('windy', 'The Windy Miller Cup', ['A proper blow on every one of these mornings. Lean into it.', 'Five breezy Saturdays. The Hill has a headwind. Somehow.'],
    { pred: (f) => (f.weather?.wind_kmh ?? 0) >= 20 || (f.weather?.gust_kmh ?? 0) >= 38, windowS: 120 }),
  rusty: T('rusty', 'The Rusty Hinge Handicap', ['Every one of these came after a quiet patch: a week off, or barely a jog. Who\'s oiled the hinges?', 'Five comeback mornings. Fresh legs, or forgotten legs?'],
    { pred: (f) => (f.days_since_last_run ?? 0) >= 7 || (f.km_7d ?? 99) <= 6, windowS: 140 }),
  funfair: T('funfair', 'The Funfair Stakes', ['The fair is in town, and it is VERY distracting. Expect detours.', 'Bank-holiday chaos: the course goes round the fairground. Hold on to your candyfloss.'], { funfair: true }),
  wildcard: T('wildcard', 'The Wildcard Handicap', ['One of these five was not exactly trying that morning. Read the clues.', 'A passenger lurks in this field. Spot the Sunday jogger.'], { wildcard: true }),
};

const DATA_THEMES = ['winter', 'heat', 'block', 'taper', 'windy', 'rusty'];

// Decide this round's theme. mem.themes: keys used this session; mem.bands: band of each previous round.
export function chooseTheme({ rng, mem, roundNumber, settings = {}, data, available }) {
  const used = new Set(mem?.themes || []);
  const lastBand = mem?.bands?.at(-1);
  // wildcard (novelty pool) and funfair: at most once each per session
  if (roundNumber > 1 && !used.has('wildcard') && data.novelty.length && rng.chance(settings.wildcardRate ?? 0.08)) return THEMES.wildcard;
  const divLeft = data.main.filter((p) => p.diversions?.length && available(p)).length;
  if (roundNumber > 2 && !used.has('funfair') && divLeft >= 3 && rng.chance(settings.funfairRate ?? 0.16)) return THEMES.funfair;
  if (roundNumber > 1 && rng.chance(settings.dataThemeRate ?? 0.5)) {
    const opts = DATA_THEMES.filter((k) => !used.has(k) && data.main.filter((p) => available(p) && THEMES[k].pred(p.facts)).length >= 6);
    if (opts.length) return THEMES[rng.pick(opts)];
  }
  // band theme: never the fast band in round 1; avoid repeating the previous band
  const bands = ['fast', 'mid', 'slow'].filter((b) => !(roundNumber === 1 && b === 'fast'));
  const recent = mem?.bands || [];
  const b = rng.weighted(bands, (x) => (x === lastBand ? 0.1 : recent.includes(x) ? 0.6 : 1.2) * (x === 'slow' ? 1.1 : 1));
  return THEMES[`band_${b}`];
}

export function themeInfo(theme, rng) { return { key: theme.key, label: theme.label, blurb: rng.pick(theme.blurbs) }; }
