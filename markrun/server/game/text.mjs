// Small text helpers shared by clues / commentary / settlement.
export function fill(tpl, vars) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : `{${k}}`));
}
export function km(x) {
  if (x == null) return '?';
  if (x >= 20) return String(Math.round(x));
  const r = Math.round(x * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
}
const SMALL = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
export const words = (n) => (Number.isInteger(n) && n >= 0 && n <= 20 ? SMALL[n] : String(n));
export const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const plural = (n, one, many = one + 's') => `${n} ${n === 1 ? one : many}`;
export const pluralW = (n, one, many = one + 's') => `${words(n)} ${n === 1 ? one : many}`;
export const daysAgo = (d) => (d === 1 ? 'the day before' : `${words(d)} days before`);
export const daysAhead = (d) => (d === 1 ? 'the very next day' : `${words(d)} days later`);
export const countWords = (s) => s.split(/\s+/).filter(Boolean).length;
export function fmtTime(s) { s = Math.round(s); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }

// Race type from km and name; never echoes the race's own name.
export function raceType(km, name = '') {
  const n = String(name);
  if (/\bxc\b|cross ?country/i.test(n)) return 'cross-country race';
  if (km >= 38) return 'marathon';
  if (km >= 19 && km <= 23.5) return 'half marathon';
  if (km >= 9 && km <= 11.5) return '10K';
  if (km >= 4.5 && km <= 5.6) return '5K';
  if (km >= 1.3 && km <= 2.1) return 'mile race';
  if (km < 1.3) return 'very short race';
  return `${Math.round(km)} km race`;
}
export function isRaceName(name = '') {
  return /race|\b10k\b|\b5k\b|5000s|\bhalf\b|marathon|\bmile\b|\bxc\b|parkrun|\d+:\d\d|\d\.\d\d\.\d\d|place|runthrough|neighbours/i.test(name)
    && !/weeks to/i.test(name);
}
export function isIntervalName(name = '') { return /\d+\s*x\s*\d+|\bx\s*\d|tempo|interval|recovery|pace,/i.test(name); }
export const aOrAn = (w) => (/^[aeiou8]|^1[18]\b|^hon/i.test(w) ? `an ${w}` : `a ${w}`);
// "a 10 km run" / "an 8 km run" / "an 11.2 km run"
export const aKm = (k) => aOrAn(`${k} km`);
