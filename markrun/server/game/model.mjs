// Public-information odds model.
// Each clue reveals one or more numeric features of its runner. The house predicts each runner's time from ONLY
// the features revealed by that runner's clues (public at full weight, private at a shrunk weight: "rumours"),
// never from finish times of the runs in play. Coefficients are a small ridge regression fitted
// leave-one-out on the main pool: the prediction for run X uses a model that never saw run X.
import { loadData } from './data.mjs';

const med = (a) => { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : null; };
const sum = (a) => (a || []).reduce((s, x) => s + x, 0);

export const FEATURES = {
  vol7: (f) => f.km_7d ?? null,
  vol28: (f) => f.km_28d ?? null,
  rel: (f) => (f.km_7d != null && f.baseline_weekly_km != null ? Math.log((f.km_7d + 5) / (f.baseline_weekly_km + 5)) : null),
  rpw: (f) => (f.runs_per_week_4w ? sum(f.runs_per_week_4w) : null),
  long14: (f) => f.longest_run_14d?.km ?? 0,
  hard: (f) => f.hardest_7d?.effort ?? 0,
  rest: (f) => f.rest_days_7d ?? null,
  form: (f) => (f.recent_finsbury_form?.length ? med(f.recent_finsbury_form) : null),
  wind: (f) => f.weather?.wind_kmh ?? null,
  temp: (f) => (f.weather?.temp_c != null ? Math.abs(f.weather.temp_c - 9) : null),
  daybefore: (f) => sum((f.day_before || []).filter((d) => d.sport === 'Run').map((d) => d.km)),
  warmup: (f) => f.warmup_km?.km ?? 0,
  raceNear: (f) => ((f.race_recent && f.race_recent.days_before <= 8) || (f.race_upcoming && f.race_upcoming.days_after <= 3) ? 1 : 0),
};
export const FKEYS = Object.keys(FEATURES);

// Odds use the training-load features only (the only ones with out-of-fold predictive power inside a banded field).
export const ODDS_FEATURES = ['vol28', 'vol7', 'long14', 'hard', 'rpw', 'form'];
// sigma: spread of the house's race model (s). privateWeight: how much the house hears of gossip clues (hot tips: never).
// supScale: fields in play are curated (form broadly holds), so a field superlative bites harder than on random synthetic
// fields; a single constant factor, calibrated with tools/simulate.mjs, never this round's result. margin: bookie's edge.
// supBottomX: "bottom" superlatives (quietest month, fewest runs, worst form) are even more telling than "top" ones.
// longshotFloor: like any bookie, the house never offers silly prices: every runner is priced at no less than this probability.
export const MODEL_DEFAULTS = { lambda: 50, sigma: 16, privateWeight: 0.95, supScale: 2.4, supBottomX: 1.4, margin: 0.055, longshotFloor: 0.025 };

// Field superlatives (the DECISIVE clues): "busiest month in this field", "fewest runs here"... A superlative only counts
// with a clear margin over the next runner. The house prices each one by its measured average effect (seconds vs the
// field mean) on synthetic banded fields, out-of-fold like the regression, so a superlative never encodes its own result.
export const SUPERLATIVES = {
  field_km: { fn: (f) => f.km_28d ?? null, gap: 12, ratio: 1.12 },
  field_runs: { fn: (f) => (f.runs_per_week_4w ? sum(f.runs_per_week_4w) : null), gap: 3, ratio: 1.2 },
  field_long: { fn: (f) => f.longest_run_14d?.km ?? 0, gap: 4, ratio: 1.3 },
  field_form: { fn: (f) => (f.recent_finsbury_form?.length ? -med(f.recent_finsbury_form) : null), gap: 25, ratio: 1 },
};
// -> 'top' | 'bottom' | null for runner `facts` within `fieldFacts` (array incl. itself)
export function superlative(kind, facts, fieldFacts) {
  const S = SUPERLATIVES[kind];
  const vals = fieldFacts.map(S.fn);
  if (vals.some((v) => v == null)) return null;
  const me = S.fn(facts);
  let seen = false;
  const others = fieldFacts.filter((f) => (f === facts && !seen ? (seen = true, false) : true)).map(S.fn);
  const hi = Math.max(...others), lo = Math.min(...others);
  const ok = (a, b) => a - b >= S.gap && (S.ratio === 1 || (b > 0 ? a >= b * S.ratio : a > 0));
  if (ok(me, hi)) return 'top';
  if (ok(lo, me)) return 'bottom';
  return null;
}
export const supKey = (kind, side) => `sup:${kind}_${side}`;

const modelCache = new WeakMap();

// Coefficients are fitted on synthetic banded fields (the same shape the game selects: 5 runs inside a 90 s window),
// regressing each runner's time-minus-field-mean on his features-minus-field-mean. That measures what separates runners
// INSIDE a contest rather than which fitness era a run came from. 5-fold by run: a run's coefficients come from fields
// that never contained it (out-of-fold, so odds never encode the outcome of the runs in play).
export function getModel(hist, opts = {}) {
  const data = loadData(hist);
  const lambda = opts.lambda ?? MODEL_DEFAULTS.lambda;
  const fkeys = opts.features ?? ODDS_FEATURES;
  const supScale = opts.supScale ?? MODEL_DEFAULTS.supScale, supBottomX = opts.supBottomX ?? MODEL_DEFAULTS.supBottomX;
  const ck = `${lambda}|${fkeys.join(',')}|${supScale}|${supBottomX}`;
  if (!modelCache.has(data)) modelCache.set(data, new Map());
  if (modelCache.get(data).has(ck)) return modelCache.get(data).get(ck);
  const FK = fkeys;
  const main = data.main;
  const rawOf = (p) => FK.map((k) => FEATURES[k](p.facts));
  const rawMain = main.map(rawOf);
  const mu = FK.map((_, k) => { const v = rawMain.map((r) => r[k]).filter((x) => x != null); return v.reduce((a, b) => a + b, 0) / v.length; });
  const sd = FK.map((_, k) => { const v = rawMain.map((r) => r[k]).filter((x) => x != null); return Math.sqrt(v.reduce((a, b) => a + (b - mu[k]) ** 2, 0) / v.length) || 1; });
  const zOf = (p) => rawOf(p).map((x, k) => (x == null ? 0 : Math.max(-2, Math.min(2, (x - mu[k]) / sd[k])))); // clipped: robust to freak weeks
  const Zm = main.map(zOf);
  // deterministic synthetic fields
  let seed = 20240907;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const fields = [];
  for (let it = 0; it < 6000 && fields.length < 3500; it++) {
    const ai = Math.floor(rnd() * main.length);
    const lo = main[ai].officialS - 90 * rnd();
    const band = main.map((_, i) => i).filter((i) => i !== ai && main[i].officialS >= lo && main[i].officialS <= lo + 90);
    if (band.length < 4) continue;
    const pick = [ai];
    while (pick.length < 5) { const c = band[Math.floor(rnd() * band.length)]; if (!pick.includes(c)) pick.push(c); }
    fields.push(pick);
  }
  const fold = main.map((_, i) => i % 5);
  const fitFields = (fs) => {
    const X = [], y = [];
    for (const f of fs) {
      const mt = f.reduce((s, i) => s + main[i].officialS, 0) / f.length;
      const mz = FK.map((_, k) => f.reduce((s, i) => s + Zm[i][k], 0) / f.length);
      for (const i of f) { X.push(Zm[i].map((z, k) => z - mz[k])); y.push(main[i].officialS - mt); }
    }
    return ridge(X, y, lambda).beta;
  };
  const betaFold = [0, 1, 2, 3, 4].map((k) => fitFields(fields.filter((f) => f.every((i) => fold[i] !== k))));
  const betaFull = fitFields(fields);
  // superlative effects: mean (time - field mean) of the runner holding it, shrunk towards 0 for small samples
  const supFit = (fs) => {
    const acc = {};
    for (const f of fs) {
      const mt = f.reduce((s2, i) => s2 + main[i].officialS, 0) / f.length;
      const ff = f.map((i) => main[i].facts);
      for (const kind of Object.keys(SUPERLATIVES)) f.forEach((i, j) => {
        const side = superlative(kind, ff[j], ff);
        if (!side) return;
        const a = (acc[supKey(kind, side)] ||= { n: 0, s: 0 });
        a.n++; a.s += main[i].officialS - mt;
      });
    }
    return Object.fromEntries(Object.entries(acc).map(([k, a]) => [k, supScale * (k.endsWith('_bottom') ? supBottomX : 1) * a.s / (a.n + 40)])); // shrunk for small samples
  };
  const supFold = [0, 1, 2, 3, 4].map((k) => supFit(fields.filter((f) => f.every((i) => fold[i] !== k))));
  const supFull = supFit(fields);
  const ym = main.reduce((s, p) => s + p.officialS, 0) / main.length;
  const perRun = new Map();
  const mainIdx = new Map(main.map((p, i) => [p.date, i]));
  for (const p of data.perfs) {
    const i = mainIdx.get(p.date);
    const beta = i != null ? betaFold[fold[i]] : betaFull; // out-of-fold for every main run
    const z = i != null ? Zm[i] : zOf(p);
    const sup = i != null ? supFold[fold[i]] : supFull;
    perRun.set(p.date, { ym, contrib: { ...Object.fromEntries(FK.map((k, q) => [k, beta[q] * z[q]])), ...sup }, z: Object.fromEntries(FK.map((k, q) => [k, z[q]])) });
  }
  const model = { lambda, features: FK, full: { ym, beta: Object.fromEntries(FK.map((k, q) => [k, betaFull[q]])), sup: supFull }, perRun, mu, sd, nFields: fields.length };
  modelCache.get(data).set(ck, model);
  return model;
}

function ridge(X, y, lambda) {
  const n = X.length, p = X[0].length;
  const ym = y.reduce((a, b) => a + b, 0) / n;
  const A = Array.from({ length: p }, () => Array(p).fill(0)), b = Array(p).fill(0);
  for (let r = 0; r < n; r++) for (let i = 0; i < p; i++) { b[i] += X[r][i] * (y[r] - ym); for (let k = 0; k < p; k++) A[i][k] += X[r][i] * X[r][k]; }
  for (let i = 0; i < p; i++) A[i][i] += lambda;
  for (let i = 0; i < p; i++) {
    let m = i; for (let k = i + 1; k < p; k++) if (Math.abs(A[k][i]) > Math.abs(A[m][i])) m = k;
    [A[i], A[m]] = [A[m], A[i]]; [b[i], b[m]] = [b[m], b[i]];
    for (let k = i + 1; k < p; k++) { const f = A[k][i] / A[i][i]; for (let c = i; c < p; c++) A[k][c] -= f * A[i][c]; b[k] -= f * b[i]; }
  }
  const beta = Array(p).fill(0);
  for (let i = p - 1; i >= 0; i--) { let s = b[i]; for (let c = i + 1; c < p; c++) s -= A[i][c] * beta[c]; beta[i] = s / A[i][i]; }
  return { ym, beta };
}

// Contribution (seconds; negative = suggests faster) of a feature list for one run.
export function contribution(model, date, featureKeys) {
  const r = model.perRun.get(date);
  if (!r) return 0;
  return [...new Set(featureKeys)].reduce((s, k) => s + (r.contrib[k] ?? 0), 0);
}

// Predicted time for a runner from the clues the house can "see".
// visible: [{ features: [...], weight }] ; features revealed by several clues count once at the highest weight.
export function predict(model, date, visible) {
  const r = model.perRun.get(date);
  const w = {};
  for (const v of visible) for (const k of v.features || []) w[k] = Math.max(w[k] ?? 0, v.weight);
  let pred = r ? r.ym : model.full.ym;
  if (r) for (const [k, wt] of Object.entries(w)) pred += wt * (r.contrib[k] ?? 0);
  return pred;
}

// Normal approximation; P(i finishes first). Deterministic numeric integration.
const SQ2 = Math.SQRT2;
function erf(x) { // Abramowitz-Stegun 7.1.26
  const s = Math.sign(x); x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
export const Phi = (z) => 0.5 * (1 + erf(z / SQ2));
export function winProbs(mus, sigma) {
  const lo = Math.min(...mus) - 6 * sigma, hi = Math.max(...mus) + 6 * sigma, N = 800, dt = (hi - lo) / N;
  const p = mus.map(() => 0);
  for (let s = 0; s <= N; s++) {
    const t = lo + s * dt;
    const surv = mus.map((m) => 1 - Phi((t - m) / sigma));
    for (let i = 0; i < mus.length; i++) {
      const dens = Math.exp(-0.5 * ((t - mus[i]) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
      let prod = dens;
      for (let k = 0; k < mus.length; k++) if (k !== i) prod *= surv[k];
      p[i] += prod * dt;
    }
  }
  const tot = p.reduce((a, b) => a + b, 0);
  return p.map((x) => x / tot);
}
export function beatProb(muA, muB, sigma) { return Phi((muB - muA) / (sigma * SQ2)); }
// Bookie's book from fair probabilities: a floor under the longest shots, renormalised (constant shading, never result-aware).
export function bookProbs(probs, floor = MODEL_DEFAULTS.longshotFloor) {
  const q = probs.map((x) => Math.max(x, floor || 0));
  const t = q.reduce((a, b) => a + b, 0);
  return q.map((x) => x / t);
}

// British fractional odds ladder (num/den). Decimal = num/den + 1 exactly.
export const LADDER = [[1, 5], [2, 9], [1, 4], [2, 7], [1, 3], [4, 11], [2, 5], [4, 9], [1, 2], [8, 15], [4, 7], [8, 13], [4, 6], [8, 11], [4, 5], [5, 6], [10, 11],
  [1, 1], [11, 10], [6, 5], [5, 4], [11, 8], [6, 4], [13, 8], [7, 4], [15, 8], [2, 1], [9, 4], [5, 2], [11, 4], [3, 1], [10, 3], [7, 2], [4, 1], [9, 2],
  [5, 1], [11, 2], [6, 1], [13, 2], [7, 1], [15, 2], [8, 1], [17, 2], [9, 1], [10, 1], [11, 1], [12, 1], [14, 1], [16, 1], [18, 1], [20, 1], [25, 1], [33, 1], [40, 1], [50, 1]];

// fair probability -> { win: decimal, display: 'n/d' }. Snapped to the nearest ladder price (log scale) after a tiny
// margin, capped 1/5 .. 50/1. Decimal = fractional + 1 exactly, so the display and the payout always agree.
export function oddsFromProb(p, margin = MODEL_DEFAULTS.margin) {
  const target = Math.max(0.2, (1 / Math.max(1e-4, p)) * (1 - margin) - 1); // fractional value
  let best = LADDER[0], bd = Infinity;
  for (const [n, d] of LADDER) { const dist = Math.abs(Math.log((n / d + 1) / (target + 1))); if (dist < bd) { bd = dist; best = [n, d]; } }
  const [n, d] = best;
  return { win: Math.round((n / d + 1) * 1000) / 1000, display: d === 1 && n === 1 ? 'evens' : `${n}/${d}`, num: n, den: d };
}
export function spokenOdds(display) {
  if (display === 'evens') return 'evens';
  const [n, d] = display.split('/');
  return `${n} to ${d}`;
}
