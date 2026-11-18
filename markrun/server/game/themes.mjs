// Announced round themes (round.public.theme). A theme narrows the pool the field is drawn from; the archetype stays secret.
// Data themes use facts (weather, training block, upcoming race, diversions); band themes vary the speed band across a session.
// Every theme carries a punchy label, a blurb, a <= 3-line explainer (what is different, what to look for) and a `visual`
// for the 3D world, derived truthfully from the runs in play (see themeVisual).
export const BANDS = {
  fast: { lo: 0, hi: 1185 },
  mid: { lo: 1185, hi: 1300 },
  slow: { lo: 1300, hi: 99999 },
};
export const bandOf = (s) => (s < BANDS.fast.hi ? 'fast' : s < BANDS.mid.hi ? 'mid' : 'slow');

const T = (key, label, blurbs, explainer, extra = {}) => ({ key, label, blurbs, explainer, ...extra });

// sigmaX: how much wider the bookie prices a theme it knows is less predictable (calibrated with tools/simulate.mjs).
// visual.weather / visual.season: fixed by the theme where the theme IS the weather; otherwise read from the median run.
export const THEMES = {
  // band themes (always available)
  band_fast: T('band_fast', 'Speed Merchants', ['The sharp end of the archive. Blink and you\'ll miss the Hill.', 'Only his quicker mornings allowed. Elbows sharpened.'],
    ['Five of his quicker mornings. No passengers.', 'At this pace, the training clues matter most.', 'Find the KEY CLUE before you bet.'], { band: 'fast' }),
  band_mid: T('band_mid', 'The Middle-Pack Muddle', ['Not the quickest, not the slowest. Absolutely anyone\'s race.', 'Five honest, mid-table mornings. Somebody has to win it.'],
    ['Five ordinary Saturdays: not quick, not slow.', 'Form and fitness clues are your best guide.', 'Trust the facts over the jokes.'], { band: 'mid' }),
  band_slow: T('band_slow', 'The Plodders\' Plate', ['Saturday-morning legs, Friday-night choices. Gloriously human.', 'The steadier end of the archive. Lovely scenery, plenty of it.'],
    ['His steadier mornings. Life got in the way.', 'Ask why he was slow: rest, racing or idleness?', 'Who had actually been training? Back him.'], { band: 'slow' }),
  // data themes
  winter: T('winter', 'Winter Warriors', ['Every one of these started at 5°C or colder. Gloves compulsory, dignity optional.', 'Frost on the grass, steam off the runners. Five cold-weather mornings.'],
    ['Every runner started at 5°C or colder.', 'Cold for all five, so fitness still tells.', 'Ignore the shivering. Read the training.'],
    { pred: (f) => f.weather?.temp_c != null && f.weather.temp_c <= 5, windowS: 120, visual: { season: 'winter', weather: 'frost' } }),
  heat: T('heat', 'The Heatwave Handicap', ['Every one of these started at 15°C or warmer. Sun cream before shoelaces.', 'Five warm mornings. Somebody bring the ice lollies.'],
    ['Every runner started at 15°C or warmer.', 'Warm for everyone, so look at who did the work.', 'A British heatwave. Hydrate accordingly.'],
    { pred: (f) => f.weather?.temp_c != null && f.weather.temp_c >= 15, windowS: 120, visual: { weather: 'sun' } }),
  block: T('block', 'The Marathon Block Stakes', ['All five were in serious training: big long runs or a race countdown. Engine or exhaust?', 'Long-run season. Big miles in every pair of legs. Who has the engine?'],
    ['All five were deep in long-distance training.', 'Big miles build engines. They also tire legs.', 'Look at the last week, not just the month.'],
    { pred: (f) => !!f.training_block || (f.longest_run_14d?.km ?? 0) >= 18, windowS: 90 }),
  taper: T('taper', 'The Taper Trophy', ['Every runner here had a race within ten days. Saving legs, or sharpening them?', 'Big race looming for all five. Who\'s holding back?'],
    ['Every runner had a race within ten days.', 'Some were saving their legs. Some were not.', 'Ask who had something to prove that morning.'],
    { pred: (f) => !!f.race_upcoming && f.race_upcoming.days_after <= 10, windowS: 140 }),
  windy: T('windy', 'The Windy Miller Cup', ['A proper blow on every one of these mornings. Lean into it.', 'Five breezy Saturdays. The Hill has a headwind. Somehow.'],
    ['A proper wind on every one of these mornings.', 'Wind punishes the Hill. Big engines cope best.', 'Prices are a touch wider. Anything can blow in.'],
    { pred: (f) => (f.weather?.wind_kmh ?? 0) >= 20 || (f.weather?.gust_kmh ?? 0) >= 38, windowS: 120, sigmaX: 1.6, visual: { weather: 'wind' } }),
  rusty: T('rusty', 'The Rusty Hinge Handicap', ['All five came after a quiet patch. Who has oiled the hinges?', 'Five comeback mornings. Fresh legs, or forgotten legs?'],
    ['All five came back after a quiet spell.', 'Comebacks are hard to price. The odds are wide open.', 'Fresh legs or rusty legs? The clues will say.'],
    { pred: (f) => (f.days_since_last_run ?? 0) >= 7 || (f.km_7d ?? 99) <= 6, windowS: 140, sigmaX: 3 }),
  funfair: T('funfair', 'The Funfair Stakes', ['The fair is in town. Three of these five will be taking a detour.', 'Bank-holiday chaos: three of our runners get lured round the fairground.'],
    ['The fair is in town: three runners get diverted round it.', 'Nobody knows which three. Not even the bookie.', 'Side bet: will a funfair-goer still win?'],
    { funfair: true, sigmaX: 2 }),
  wildcard: T('wildcard', 'The Wildcard Handicap', ['One of these five was not exactly trying that morning. Read the clues.', 'A passenger lurks in this field. Spot the Sunday jogger.'],
    ['One of these five was barely trying that morning.', 'The clues will give the passenger away.', 'Whatever you do, don\'t back the jogger.'], { wildcard: true }),
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
  // never more than two pace-band themes in a row; round 1 may open with a data theme too
  const lastTwoBand = (mem?.themes || []).slice(-2).length === 2 && (mem?.themes || []).slice(-2).every((k) => k.startsWith('band_'));
  if (lastTwoBand || rng.chance(roundNumber === 1 ? (settings.openingThemeRate ?? 0.4) : (settings.dataThemeRate ?? 0.5))) {
    const opts = DATA_THEMES.filter((k) => !used.has(k) && data.main.filter((p) => available(p) && THEMES[k].pred(p.facts)).length >= 6);
    if (opts.length) return THEMES[rng.pick(opts)];
  }
  // band theme: never the fast band in round 1; avoid repeating the previous band
  const bands = ['fast', 'mid', 'slow'].filter((b) => !(roundNumber === 1 && b === 'fast'));
  const recentBandThemes = (mem?.themes || []).filter((k) => k.startsWith('band_'));
  const lastBandTheme = recentBandThemes.at(-1)?.slice(5);
  const b = rng.weighted(bands, (x) => (x === lastBandTheme || x === lastBand ? 0.08 : recentBandThemes.slice(-3).includes(`band_${x}`) ? 0.5 : 1.2));
  return THEMES[`band_${b}`];
}

// ---------- visuals ----------
const SEASON = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
export const seasonOf = (iso) => SEASON[Number(String(iso).slice(5, 7)) - 1] || 'spring';
// Meteostat condition codes: 1-2 clear/fair, 3-4 cloud, 5-6 fog, 7-13 and 17-20 rain/sleet, 14-16 and 21-22 snow, 23-27 storms.
export function weatherOf(w) {
  if (!w) return 'clear';
  const c = w.coco ?? 0, t = w.temp_c;
  if ((c >= 7 && c <= 13) || (c >= 17 && c <= 20) || c >= 23 || (w.prcp_mm ?? 0) >= 0.3) return 'rain';
  if ((c >= 14 && c <= 16) || c === 21 || c === 22) return 'frost';
  if (c === 5 || c === 6) return 'fog';
  if ((w.gust_kmh ?? 0) >= 40 || (w.wind_kmh ?? 0) >= 25) return 'wind';
  if (t != null && t <= 1) return 'frost';
  if (c >= 1 && c <= 2 && t != null && t >= 12) return 'sun';
  return 'clear';
}
// The median run (by official time) stands for the field: its real season and weather, unless the theme fixes them.
// For The Funfair Stakes the season comes from the funfair runs themselves (Easter or August).
export function themeVisual(theme, perfs = []) {
  const ps = theme?.funfair && perfs.some((p) => p.diversions?.length) ? perfs.filter((p) => p.diversions?.length) : perfs;
  const sorted = [...ps].sort((a, b) => a.officialS - b.officialS);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  const real = median ? { season: seasonOf(median.date), weather: weatherOf(median.facts?.weather) } : { season: 'spring', weather: 'clear' };
  return { season: theme?.visual?.season ?? real.season, weather: theme?.visual?.weather ?? real.weather, time: 'morning' };
}

export function themeInfo(theme, rng, perfs = []) {
  return { key: theme.key, label: theme.label, blurb: rng.pick(theme.blurbs), explainer: [...theme.explainer].slice(0, 3), visual: themeVisual(theme, perfs) };
}

// ---------- TV announcement when a themed round starts: [{ speaker, text }] (2 short lines, dry) ----------
const ANNOUNCE = {
  band_fast: [['jeff', 'Speed Merchants! Five of Mark\'s quicker mornings, and no hanging about!'], ['pam', 'Fast is relative. It\'s still a parkrun.']],
  band_mid: [['jeff', 'It\'s the Middle-Pack Muddle! Five honest, ordinary Saturdays!'], ['pam', 'Mid-table. The natural home of the British male.']],
  band_slow: [['jeff', 'The Plodders\' Plate! His steadier mornings, lovingly restored!'], ['pam', 'Slow, but in fairness, so is the Northern line.']],
  winter: [['jeff', 'Winter Warriors! Every start line at five degrees or colder!'], ['pam', 'The ducks stayed in. The ducks were right.']],
  heat: [['jeff', 'The Heatwave Handicap! Fifteen degrees and above, so tropical by our standards!'], ['pam', 'Someone has already mentioned the hosepipe ban.']],
  block: [['jeff', 'The Marathon Block Stakes! Big miles in every pair of legs!'], ['pam', 'Five men who say "my long run" at dinner parties.']],
  taper: [['jeff', 'The Taper Trophy! Every runner had a race within ten days!'], ['pam', 'Some are saving their legs. Some just say they are.']],
  windy: [['jeff', 'The Windy Miller Cup! A proper blow on every one of these mornings!'], ['pam', 'Lean forward going up the Hill. It doesn\'t help.']],
  rusty: [['jeff', 'The Rusty Hinge Handicap! All five back from a quiet spell!'], ['pam', 'Comebacks. The bookie has frankly given up.']],
  funfair: [['jeff', 'The Funfair Stakes! The fair is in town and three runners are going round it!'], ['pam', 'Candyfloss is not a recognised energy gel.']],
  wildcard: [['jeff', 'Wildcard round! One of these five was barely trying that morning!'], ['pam', 'There is always one. Usually it\'s me.']],
};
export function themeAnnouncement(theme) {
  const t = theme?.key ? theme : THEMES[theme] || null;
  if (!t) return [];
  const lines = ANNOUNCE[t.key] || [['jeff', `Our theme this round: ${t.label}!`], ['pam', t.blurb || (t.blurbs || [])[0] || 'Read the clues.']];
  return lines.map(([speaker, text]) => ({ speaker, text }));
}
