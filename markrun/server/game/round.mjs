// MARKRUN game module: createRound / settleRound (see docs/CONTRACT.md).
import { makeRng } from './rng.mjs';
import { loadData } from './data.mjs';
import { getModel, predict, winProbs, beatProb, oddsFromProb, MODEL_DEFAULTS } from './model.mjs';
import { selectField, usageWeights } from './select.mjs';
import { candidatesFor, assignClues, CATEGORY_LABEL } from './clues.mjs';
import { makeCharacters, introLine, roundTitle } from './characters.mjs';
import { raceCommentary, introLines, betReactions, COMMENTATORS } from './commentary.mjs';
import { getMemory, peekMemory, saveMemory, ensureSessionSchema } from './memory.mjs';
import { leakContext, checkRound, checkText } from './leak.mjs';
import { settle } from './settle.mjs';
import { buildRacePlan } from './raceplan.mjs';

export const CURRENCY = { name: 'Parkpounds', singular: 'Parkpound', short: 'pp', symbol: 'ℙ' };
export { COMMENTATORS };

export const DEFAULT_SETTINGS = {
  startingBankroll: 1000,
  rounds: 8,
  drinks: false,
  playerNames: [],
  wildcardRate: 0.08,   // chance (from round 2, max once per session) of a wildcard round with a novelty-pool run
  privateWeight: MODEL_DEFAULTS.privateWeight, // how much the bookie "hears" of private clues
  sigma: MODEL_DEFAULTS.sigma,
  lambda: MODEL_DEFAULTS.lambda,
  margin: MODEL_DEFAULTS.margin,
  formHoldsBonus: 2,  // selection curation: how strongly to prefer fields where the form guide broadly holds
  minStake: 10,
  maxBetsPerPlayer: 4,
};
export function normalizeSettings(s = {}) {
  const o = { ...DEFAULT_SETTINGS, ...(s || {}) };
  o.startingBankroll = Math.max(100, Math.round(Number(o.startingBankroll) || DEFAULT_SETTINGS.startingBankroll));
  o.rounds = Math.max(1, Math.min(20, Math.round(Number(o.rounds) || DEFAULT_SETTINGS.rounds)));
  o.drinks = !!o.drinks;
  return o;
}

const SAFE_FALLBACK = ['Turned up, laced up, ready to go. That\'s all we know.', 'Arrived at the start line with a look of quiet determination. Or wind.'];

const trimPerf = (p) => ({ date: p.date, officialS: p.officialS, pool: p.pool, pacingSource: p.pacingSource, hr: p.hr, splits: p.splits,
  features: p.features, diversions: p.diversions, result: p.result, facts: p.facts });

export function createRound({ hist, sess = null, players = [], roundNumber = 1, settings = {}, rng } = {}) {
  if (!hist) throw new Error('createRound: hist db required');
  const S = normalizeSettings(settings);
  const R = makeRng(rng);
  if (sess) { try { ensureSessionSchema(sess); } catch { /* read-only */ } }
  const sessionId = S.sessionId || 'default';
  const mem = getMemory(sess, sessionId, roundNumber === 1);
  mem.roundLines = new Set();
  const data = loadData(hist);
  const model = getModel(hist, { lambda: S.lambda, features: S.modelFeatures });
  if (!players.length) players = [{ id: 'p1', name: 'Player 1' }];

  // 1. field
  const weights = usageWeights(data, sess, mem);
  const formGap = (ps) => { const m = ps.map((p) => predict(model, p.date, [{ features: model.features, weight: 1 }])); return Math.max(...m) - Math.min(...m); };
  // Kendall-style agreement (-1..1) between the full form guide and the real finishing order of a candidate field.
  const formRank = (ps) => {
    const m = ps.map((p) => predict(model, p.date, [{ features: model.features, weight: 1 }]));
    let agree = 0, n = 0;
    for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) { n++; agree += Math.sign(m[i] - m[j]) * Math.sign(ps[i].officialS - ps[j].officialS); }
    return n ? agree / n : 0;
  };
  let sel;
  try { sel = selectField({ data, rng: R, mem, weights, settings: S, roundNumber, formGap, formRank, tries: S.selectTries ?? 140 }); }
  catch { // pool exhausted (very long session): allow repeats again, least-used first
    for (const [k, v] of weights) if (v === 0) weights.set(k, 0.02);
    sel = selectField({ data, rng: R, mem, weights, settings: S, roundNumber, formGap, formRank, tries: S.selectTries ?? 140 });
  }
  const perfs = R.shuffle(sel.perfs);
  const ids = perfs.map((_, i) => `r${i + 1}`);
  const roundId = `R${roundNumber}-${R.id(6)}`;
  const wildcardId = sel.wildcard ? ids[perfs.findIndex((p) => p.pool === 'novelty')] : null;

  // 2. clues: slot 0 = public, then one private per player
  const slots = ['public', ...players.map((p) => p.id)];
  const entries = perfs.map((p, i) => ({ runnerId: ids[i], perf: p, cands: candidatesFor(p, perfs, R, mem) }));
  const assigned = assignClues(entries, slots, R, model, { mem, boost: (e, c) => (e.perf.pool === 'novelty' && (c.hint || 0) >= 4 ? 1.2 : 0) });
  const ctx = leakContext(perfs);
  ctx.raceWords = data.raceWords;
  const clues = {};
  const leaks = [];
  ids.forEach((id, i) => {
    const lane = i + 1;
    clues[id] = { public: null, private: {} };
    for (const { slot, clue } of assigned[id]) {
      const c = { id: `c${lane}${'abcdefgh'[slot]}`, text: clue.text, category: clue.cat, label: CATEGORY_LABEL[clue.cat] || 'Clue',
        family: clue.family, features: clue.features, signal: clue.signal, said: clue.said, factKeys: clue.factKeys };
      const probs = checkText(c.text, ctx, { clue: true });
      if (probs.length) { leaks.push({ runnerId: id, text: c.text, probs }); c.text = R.pick(SAFE_FALLBACK); c.features = []; c.signal = 0; c.said = null; c.category = 'misc'; }
      if (slot === 0) clues[id].public = c; else clues[id].private[slots[slot]] = c;
    }
  });

  // 3. odds (public-information model; private clues heard as rumours at reduced weight)
  const mus = perfs.map((p, i) => predict(model, p.date, assigned[ids[i]].map(({ slot, clue }) => ({ features: clue.features, weight: slot === 0 ? 1 : S.privateWeight }))));
  const probs = winProbs(mus, S.sigma);
  const odds = probs.map((p) => oddsFromProb(p, S.margin));

  // 4. characters
  const chars = makeCharacters(perfs.length, R, mem);
  const title = roundTitle(R, mem);

  const runners = ids.map((id, i) => ({
    id, lane: i + 1,
    nickname: chars[i].nickname, shortName: chars[i].shortName, tagline: chars[i].tagline,
    colour: chars[i].colour, look: chars[i].look, personality: chars[i].personality,
    intro: introLine(chars[i], i + 1),
    publicClue: { id: clues[id].public.id, text: clues[id].public.text, category: clues[id].public.category, label: clues[id].public.label },
    odds: { win: odds[i].win, display: odds[i].display, decimalText: odds[i].win.toFixed(2) },
  }));

  // 5. head-to-heads: one coin-flip pair, one "upset" pair
  const matchups = pickMatchups(R, ids, mus, probs, S);

  // 6. race plan + commentary
  const plan = buildRacePlan(roundId, perfs.map((p, i) => ({ id: ids[i], officialS: p.officialS, progress: p.progress, pacingSource: p.pacingSource, diversions: p.diversions || null })));
  plan.commentary = raceCommentary({ plan, runners, clues: Object.fromEntries(ids.map((id) => [id, { public: clues[id].public, private: Object.values(clues[id].private) }])), wildcardId, rng: R, mem });

  const pub = {
    roundId, number: roundNumber, title,
    runners, matchups,
    rules: { minStake: S.minStake, maxBetsPerPlayer: S.maxBetsPerPlayer },
    wildcard: !!sel.wildcard,
    ...(sel.wildcard ? { notice: 'WILDCARD ROUND: one of these five was not exactly trying that morning. Read the clues.' } : {}),
    introLines: introLines(R, mem, { title, wildcard: sel.wildcard }).map(({ speaker, text }) => ({ speaker, text })),
    currency: CURRENCY,
    commentators: COMMENTATORS,
  };
  const priv = {};
  for (const p of players) priv[p.id] = ids.map((id) => { const c = clues[id].private[p.id]; return { runnerId: id, id: c.id, text: c.text, category: c.category, label: c.label }; });

  const round = {
    id: roundId, number: roundNumber,
    public: pub,
    private: priv,
    racePlan: plan,
    hidden: {
      sessionId, settings: S, players: players.map((p) => ({ id: p.id, name: p.name })),
      archetype: sel.archetype, targetArchetype: sel.target, wildcardId,
      analysis: { ...sel.analysis, events: undefined },
      runners: ids.map((id, i) => ({ id, date: perfs[i].date, officialS: perfs[i].officialS, pool: perfs[i].pool, diverted: !!perfs[i].diversions?.length })),
      perfs: Object.fromEntries(ids.map((id, i) => [id, trimPerf(perfs[i])])),
      model: { mus: Object.fromEntries(ids.map((id, i) => [id, Math.round(mus[i] * 10) / 10])), probs: Object.fromEntries(ids.map((id, i) => [id, Math.round(probs[i] * 1000) / 1000])) },
      clues,
      leaks,
    },
  };

  // 7. final leak sweep over everything pre-race (belt and braces)
  const problems = checkRound(round, ctx);
  if (problems.length) round.hidden.leaks.push(...problems.map((p) => ({ payload: p })));

  // 8. bookkeeping: usage + session memory
  mem.archetypes.push(sel.archetype);
  for (const p of perfs) mem.perfs.add(p.date);
  if (sel.wildcard) mem.wildcards = (mem.wildcards || 0) + 1;
  if (perfs.some((p) => p.diversions?.length)) mem.diverted = (mem.diverted || 0) + 1;
  mem.rounds = roundNumber;
  if (sess) {
    try {
      const now = new Date().toISOString();
      const st = sess.prepare('INSERT INTO usage(run_date, used_at, round_id) VALUES (?, ?, ?)');
      for (const p of perfs) st.run(p.date, now, roundId);
    } catch { /* ignore */ }
    saveMemory(sess, sessionId, mem);
  }
  return round;
}

function pickMatchups(R, ids, mus, probs, S) {
  const pairs = [];
  for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) pairs.push({ i, j, p: beatProb(mus[i], mus[j], S.sigma) });
  const close = R.shuffle(pairs).sort((a, b) => Math.abs(a.p - 0.5) - Math.abs(b.p - 0.5)).slice(0, 3);
  const first = R.pick(close);
  const fav = probs.indexOf(Math.max(...probs));
  const rest = pairs.filter((q) => q.i !== first.i && q.i !== first.j && q.j !== first.i && q.j !== first.j);
  const score = (q) => { const pu = Math.min(q.p, 1 - q.p); return (pu >= 0.22 && pu <= 0.42 ? 2 : 0) + (q.i === fav || q.j === fav ? 1 : 0) + R.next(); };
  const second = rest.length ? rest.reduce((a, b) => (score(b) > score(a) ? b : a)) : null;
  return [first, second].filter(Boolean).map((q, k) => {
    // random a/b order so "a" isn't always the shorter price
    const swap = R.chance(0.5);
    const [ia, ib, pa] = swap ? [q.j, q.i, 1 - q.p] : [q.i, q.j, q.p];
    const oa = oddsFromProb(pa, S.margin), ob = oddsFromProb(1 - pa, S.margin);
    return { id: `m${k + 1}`, a: ids[ia], b: ids[ib], odds: { a: oa.win, b: ob.win, displayA: oa.display, displayB: ob.display } };
  });
}

export function settleRound(round, betsByPlayer = {}, bankrolls = {}, rng) {
  const R = makeRng(rng);
  const mem = peekMemory(round.hidden?.sessionId) || getMemory(null, round.hidden?.sessionId || 'default');
  return settle(round, betsByPlayer, bankrolls, { rng: R, mem });
}

// Commentary for the end of betting: who backed whom. [{ speaker, text }]
export function betReactionLines(round, betsByPlayer, players, rng) {
  const R = makeRng(rng);
  const mem = peekMemory(round.hidden?.sessionId) || getMemory(null, round.hidden?.sessionId || 'default');
  const ps = players?.length ? players : round.hidden?.players || [];
  return betReactions(R, mem, round, betsByPlayer || {}, ps).map(({ speaker, text }) => ({ speaker, text }));
}
