// Automated leak checker for anything shown before the race (TV + phones).
// Flags: years, month names, dates, clock times (mm:ss), the official time of any runner in the round,
// event numbers, PB / record language, Strava titles/descriptions, race names, funfair/diversion hints.
const MONTHS = ['january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const MONTH_ABBR = ['jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec'];
const GENERIC_TITLES = /^(morning|afternoon|evening|lunch|night) (run|ride|swim|walk|weight training)$|^parkrun$|^finsbury$/i;

const STATIC_RULES = [
  [/\b(19|20)\d\d\b/, 'year'],
  [new RegExp(`\\b(${MONTHS.join('|')})\\b`, 'i'), 'month name'],
  [/\bMay\b|\bMAY\b/, 'month name (May)'],
  [new RegExp(`\\b\\d{1,2}(st|nd|rd|th)?\\s+(${MONTH_ABBR.join('|')})\\b|\\b(${MONTH_ABBR.join('|')})\\.?\\s+\\d{1,2}\\b`, 'i'), 'date (abbr)'],
  [/\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/, 'numeric date'],
  [/\b\d{1,2}:\d{2}\b/, 'clock time'],
  [/\b\d{1,2}\s*(m|min|mins|minutes?)\s*\d{1,2}\s*(s|secs?|seconds?)\b/i, 'time in words'],
  [/\b(PB|PBs|personal best|course record|season'?s best|fastest ever|quickest ever|new best|parkrun best)\b/i, 'PB language'],
  [/#\s?\d+/, 'event number'],
  [/\b(funfair|fun fair|fairground|waltzers|diversion|diverted|detour|bank[- ]holiday|easter)\b/i, 'diversion hint'],
  [/\b(finish(ed|ing)? (position|place)|came (first|second|third|last)|\d+(st|nd|rd|th) place)\b/i, 'finishing position'],
  [/\b(strava title|titled|captioned)\b/i, 'strava title reference'],
];

export function leakContext(perfs) {
  return {
    times: perfs.map((p) => p.officialS),
    eventNumbers: perfs.map((p) => p.result?.eventNumber).filter((x) => x != null),
    titles: perfs.map((p) => p.facts?.activity?.name).filter((t) => t && t.trim().length >= 6 && !GENERIC_TITLES.test(t.trim())),
    descriptions: perfs.map((p) => p.facts?.activity?.description).filter(Boolean),
  };
}

const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

// Returns a list of problems ([] = clean). `opts.clue` = apply clue-only rules (race-name deny words).
export function checkText(text, ctx = {}, opts = {}) {
  const out = [];
  if (typeof text !== 'string') return out;
  for (const [re, why] of STATIC_RULES) {
    if (opts.allowFunfair && why === 'diversion hint') continue;
    if (re.test(text)) out.push(`${why}: "${text.match(re)[0]}"`);
  }
  for (const t of ctx.times || []) {
    const m = Math.floor(t / 60), s = t % 60, ss = String(s).padStart(2, '0');
    const pats = [`\\b${m}[:.,'’ ]${ss}\\b`, `\\b${m}${ss}\\b`, `\\b${t}\\b`, `\\b${m}\\s*m(in(ute)?s?)?\\s*${s}\\b`];
    for (const p of pats) if (new RegExp(p, 'i').test(text)) out.push(`official time ${m}:${ss}`);
  }
  for (const e of ctx.eventNumbers || []) if (e >= 100 && new RegExp(`\\b${e}\\b`).test(text)) out.push(`event number ${e}`);
  const nt = norm(text);
  for (const t of ctx.titles || []) { const n = norm(t); if (n.length >= 6 && nt.includes(n)) out.push(`strava title "${t}"`); }
  for (const d of ctx.descriptions || []) {
    const w = norm(d).split(' ');
    for (let i = 0; i + 4 <= w.length; i++) { const chunk = w.slice(i, i + 4).join(' '); if (chunk.length >= 12 && nt.includes(chunk)) { out.push(`strava description "${chunk}"`); break; } }
  }
  if (opts.clue && ctx.raceWords) {
    for (const w of nt.split(' ')) if (ctx.raceWords.has(w)) out.push(`race/activity name word "${w}"`);
  }
  return out;
}

// Keys that must never appear in anything sent before the race.
const FORBIDDEN_KEYS = new Set(['date', 'officialS', 'official_s', 'run_date', 'archetype', 'finishOrder', 'eventNumber', 'position', 'wasPB', 'stravaTitle', 'progress', 'timeText']);

// Check a whole pre-race payload (round.public or a private clue list). Returns problems.
export function checkPayload(obj, ctx, path = '') {
  const out = [];
  if (obj == null) return out;
  if (typeof obj === 'string' && /^#[0-9a-f]{3,8}$/i.test(obj)) return out;
  // the funfair prop and an announced Funfair Stakes theme name the funfair on purpose (same every round / announced theme)
  const allowFunfair = /^public\.(props|theme|introLines)/.test(path);
  if (typeof obj === 'string') return checkText(obj, ctx, { clue: /clue|text/i.test(path) && /clue|private/i.test(path), allowFunfair }).map((p) => `${path}: ${p}`);
  if (Array.isArray(obj)) { obj.forEach((v, i) => out.push(...checkPayload(v, ctx, `${path}[${i}]`))); return out; }
  if (typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (FORBIDDEN_KEYS.has(k)) out.push(`${path}.${k}: forbidden key`);
      out.push(...checkPayload(v, ctx, `${path}.${k}`));
    }
  }
  return out;
}

// Check everything pre-race in a Round: public + every private list.
export function checkRound(round, ctx) {
  return [
    ...checkPayload(round.public, ctx, 'public'),
    ...Object.entries(round.private || {}).flatMap(([pid, list]) => checkPayload(list, ctx, `private.${pid}`)),
  ];
}
