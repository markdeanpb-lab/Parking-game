// HOT TIPS: true in-race insider facts read from the pacing tables of THIS field (never a time, date or result).
// The bookie never prices them; that is the player's edge. Tips are relative to the other four runners in the round.
import { timeAtDistance, HILL_M } from './raceplan.mjs';

const T = (r, m) => timeAtDistance(r.progress, m);
const HILL_TOP = [HILL_M[0] + 180, HILL_M[1] + 180];

// polarity: +1 = sounds good for him, -1 = sounds bad. "Sensible" punters back +1 tips and avoid -1 tips.
export const TIP_TYPES = {
  hill1_first: { polarity: 1, texts: ['Insider: he was first to the top of the Hill on lap one.', 'A marshal on the Hill swears he led the field over it on lap one.', 'Word from the Hill: nobody crested it ahead of him first time round.'] },
  hill2_fastest: { polarity: 1, texts: ['Insider: nobody in this field climbed the Hill quicker on lap two.', 'The Hill marshal\'s notes: quickest up it second time round, of this lot.', 'Strongest second climb of the Hill in this field. Legs of a mountain goat.'] },
  open_fastest: { polarity: 1, texts: ['Insider: quickest opening kilometre of anyone in this field.', 'Off like a scalded cat: fastest first kilometre of these five.', 'No one in this field reached the 1 km marker before him.'] },
  last_km_fastest: { polarity: 1, texts: ['Insider: strongest last kilometre in this lot.', 'The funnel volunteers say nobody here finished the final kilometre quicker.', 'Kept the best for last: quickest final kilometre of these five.'] },
  top3_2k: { polarity: 1, texts: ['Insider: in the top three of this field at 2 km.', 'Clocked in the front three of this lot at the 2 km cone.'] },
  even_pacer: { polarity: 1, texts: ['Insider: the most even two laps of anyone in this field.', 'Paced it like a metronome: smallest lap-two slowdown of these five.'] },
  overtaker: { polarity: 1, texts: ['Insider: made more overtakes than anyone else in this field.', 'Spent the morning passing people: most overtakes in this lot.'] },
  ahead_hill1: { polarity: 1, pair: true, texts: ['Insider: he crested the Hill on lap one ahead of {other}.', 'A marshal saw him over the Hill on lap one before {other}.'] },
  ahead_2k: { polarity: 1, pair: true, texts: ['Insider: he went through 2 km ahead of {other}.', 'At the 2 km cone he was in front of {other}.'] },
  ahead_4k: { polarity: 1, pair: true, texts: ['Insider: he was ahead of {other} at 4 km.', 'With a kilometre to go, he had {other} behind him.'] },
  behind_1k: { polarity: -1, pair: true, texts: ['Insider: he was behind {other} at 1 km.', 'At the first kilometre, {other} was ahead of him.'] },
  behind_hill2: { polarity: -1, pair: true, texts: ['Insider: {other} climbed the Hill on lap two quicker than him.', 'Second time up the Hill, {other} outclimbed him.'] },
  dead_last_1k: { polarity: -1, texts: ['Insider: dead last of this field at 1 km.', 'At the first kilometre he was at the back of these five. Dawdling, or plotting?'] },
  hill2_slowest: { polarity: -1, texts: ['Insider: slowest up the Hill on lap two, of this field.', 'The Hill marshal says he was the slowest of these five on the second climb.'] },
  big_fade: { polarity: -1, texts: ['Insider: the biggest lap-two slowdown of anyone in this field.', 'Lap two was not kind: he slowed more than any of the others.'] },
  last_km_slowest: { polarity: -1, texts: ['Insider: the weakest final kilometre in this lot.', 'Final kilometre: slowest of these five. Running on fumes, apparently.'] },
};

// All true tips for a field: [{ runnerId, type, polarity }]
export function fieldTips(field, analysis) {
  const out = [];
  const add = (id, type) => out.push({ runnerId: id, type, polarity: TIP_TYPES[type].polarity });
  const argmin = (f) => field.reduce((a, b) => (f(b) < f(a) ? b : a)).id;
  const argmax = (f) => field.reduce((a, b) => (f(b) > f(a) ? b : a)).id;
  const unique = (f, id) => field.filter((r) => Math.abs(f(r) - f(field.find((x) => x.id === id))) < 0.5).length === 1;
  const pick = (f, best, type) => { const id = best ? argmin(f) : argmax(f); if (unique(f, id)) add(id, type); };
  pick((r) => T(r, HILL_TOP[0]), true, 'hill1_first');
  pick((r) => T(r, HILL_TOP[1]) - T(r, HILL_M[1]), true, 'hill2_fastest');
  pick((r) => T(r, 1000), true, 'open_fastest');
  pick((r) => r.officialS - T(r, 4000), true, 'last_km_fastest');
  pick((r) => (r.officialS - T(r, 2500)) - T(r, 2500), true, 'even_pacer');
  pick((r) => T(r, 1000), false, 'dead_last_1k');
  pick((r) => T(r, HILL_TOP[1]) - T(r, HILL_M[1]), false, 'hill2_slowest');
  pick((r) => (r.officialS - T(r, 2500)) - T(r, 2500), false, 'big_fade');
  pick((r) => r.officialS - T(r, 4000), false, 'last_km_slowest');
  const at2k = [...field].sort((a, b) => T(a, 2000) - T(b, 2000)).map((r) => r.id);
  for (const id of at2k.slice(0, 3)) add(id, 'top3_2k');
  // pairwise facts (weaker, and handy for head-to-heads)
  for (const a of field) for (const b of field) {
    if (a === b) continue;
    if (T(a, HILL_TOP[0]) < T(b, HILL_TOP[0])) out.push({ runnerId: a.id, otherId: b.id, type: 'ahead_hill1', polarity: 1 });
    if (T(a, 2000) < T(b, 2000)) out.push({ runnerId: a.id, otherId: b.id, type: 'ahead_2k', polarity: 1 });
    if (T(a, 4000) < T(b, 4000)) out.push({ runnerId: a.id, otherId: b.id, type: 'ahead_4k', polarity: 1 });
    if (T(a, 1000) > T(b, 1000)) out.push({ runnerId: a.id, otherId: b.id, type: 'behind_1k', polarity: -1 });
    if (T(a, HILL_TOP[1]) - T(a, HILL_M[1]) > T(b, HILL_TOP[1]) - T(b, HILL_M[1])) out.push({ runnerId: a.id, otherId: b.id, type: 'behind_hill2', polarity: -1 });
  }
  if (analysis?.events) {
    const n = {};
    for (const e of analysis.events) if (e.type === 'overtake') n[e.by] = (n[e.by] || 0) + 1;
    const ranked = Object.entries(n).sort((a, b) => b[1] - a[1]);
    if (ranked.length && (ranked.length === 1 || ranked[0][1] > ranked[1][1])) add(ranked[0][0], 'overtaker');
  }
  return out;
}

// How much each tip type tends to give away (P(tipped runner wins) in our own sims): used to keep tips informative but not decisive.
const STRENGTH = { ahead_hill1: 0.25, ahead_2k: 0.25, ahead_4k: 0.3, behind_1k: 0.15, behind_hill2: 0.15, hill1_first: 0.45, hill2_fastest: 0.45, open_fastest: 0.4, led_1k: 0.4, last_km_fastest: 0.5, top3_2k: 0.3, even_pacer: 0.4,
  overtaker: 0.35, dead_last_1k: 0.08, open_slowest: 0.08, hill2_slowest: 0.05, big_fade: 0.08, last_km_slowest: 0.06 };
export const tipStrength = (type) => STRENGTH[type] ?? 0.3;
// how often each type is chosen (decisive types are rare; tuned with tools/simulate.mjs for a modest hot-tip edge)
export const TYPE_WEIGHT = { hill1_first: 0.1, hill2_fastest: 0.1, open_fastest: 0.25, last_km_fastest: 0.05, top3_2k: 0.3, even_pacer: 0.8, overtaker: 0.6,
  ahead_hill1: 0.7, ahead_2k: 1.4, ahead_4k: 0.15, behind_1k: 1.3, behind_hill2: 0.8, dead_last_1k: 0.8, hill2_slowest: 0.7, big_fade: 1, last_km_slowest: 0.4 };

// Choose `counts[playerId]` hot tips per player: different runners per player where possible, mixed polarities.
// marketProb: { runnerId: implied win probability }. Good-sounding tips lean towards runners the market already likes,
// so a tip is an edge, not a lottery ticket: following tips sensibly should pay, but modestly.
export function chooseHotTips(field, analysis, playerIds, counts, rng, { positiveShare = 0.55, marketProb = {}, favourBias = 1.5 } = {}) {
  const all = fieldTips(field, analysis);
  const used = new Set();
  const usedTypes = new Set();
  const out = {};
  for (const pid of playerIds) {
    out[pid] = [];
    for (let k = 0; k < (counts[pid] ?? 1); k++) {
      const wantPos = rng.chance(positiveShare);
      let pool = all.filter((t) => !used.has(t.runnerId) && !usedTypes.has(t.type) && (t.polarity > 0) === wantPos);
      if (!pool.length) pool = all.filter((t) => !used.has(t.runnerId) && !usedTypes.has(t.type));
      if (!pool.length) pool = all.filter((t) => !out[pid].some((x) => x.runnerId === t.runnerId));
      if (!pool.length) continue;
      // de-emphasise the most decisive types
      const w = (x) => {
        const base = TYPE_WEIGHT[x.type] ?? 1;
        const lean = x.polarity > 0 ? Math.pow((marketProb[x.runnerId] ?? 0.2) / 0.2, favourBias) : 1;
        const pairW = x.otherId ? 1 / (field.length - 1) : 1; // pair facts come in bunches: weight per runner, not per pair
        return base * lean * pairW;
      };
      const t = rng.weighted(pool, w);
      used.add(t.runnerId); usedTypes.add(t.type);
      out[pid].push({ ...t, text: rng.pick(TIP_TYPES[t.type].texts) }); // {other} filled in once nicknames exist
    }
  }
  return out;
}

// Verify a tip against the field (used by tests): is the stated fact true?
export function tipIsTrue(field, analysis, tip) {
  return fieldTips(field, analysis).some((t) => t.runnerId === tip.runnerId && t.type === tip.type && (t.otherId ?? null) === (tip.otherId ?? null));
}
