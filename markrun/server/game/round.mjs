// MARKRUN game module: createRound / settleRound (+ iteration-2 helpers), see docs/CONTRACT.md.
import { makeRng } from './rng.mjs';
import { loadData } from './data.mjs';
import { getModel, predict, winProbs, beatProb, oddsFromProb, bookProbs, MODEL_DEFAULTS } from './model.mjs';
import { selectField, usageWeights } from './select.mjs';
import { candidatesFor, assignClues, styleClues, CATEGORY_LABEL } from './clues.mjs';
import { makeCharacters, introLine, roundTitle } from './characters.mjs';
import { raceCommentary, introLines, personalise, COMMENTATORS } from './commentary.mjs';
import { getMemory, peekMemory, saveMemory, ensureSessionSchema, pickLine } from './memory.mjs';
import { leakContext, checkRound, checkText } from './leak.mjs';
import { settle } from './settle.mjs';
import { buildRacePlan } from './raceplan.mjs';
import { chooseTheme, themeInfo, bandOf, THEMES, themeAnnouncement } from './themes.mjs';
import { chooseHotTips } from './hottips.mjs';
import { joinClue } from './headlines.mjs';
import { makeProps, setLapStats, inPlayMarket as ipm, betRevealOrder as bro, sessionSuperlatives as ss } from './markets.mjs';

// Cutscene planner (server/game/cutscenes.mjs, separate owner): loaded dynamically and feature-detected, so the game
// still runs if the module is missing or broken. Hosts that create a round immediately after import can `await gameReady()`.
let CUTSCENES = null;
const cutscenesLoading = import('./cutscenes.mjs').then((m) => { CUTSCENES = m; }, () => { CUTSCENES = false; });
export function gameReady() { return cutscenesLoading; }

export const CURRENCY = { name: 'Parkpounds', singular: 'Parkpound', short: 'pp', symbol: 'ℙ' };
export { COMMENTATORS };
export { provisionalNet } from './provisional.mjs';
export { coldOpenLines, lockLine, stampLine, rematchLine, awardLines, newsDeskScript } from './moments.mjs';
export { themeAnnouncement } from './themes.mjs';

export const DEFAULT_SETTINGS = {
  roundBudget: 500,      // F5 economy: a fresh betting budget every round (NOT the score). Net profit is banked into the score.
  rounds: 8,
  drinks: false,
  playerNames: [],
  runnerPlayerId: null,  // the player who IS Mark: everyone else gets an extra hot tip
  trailingPlayerId: null,// final round only (set by the UI): the trailing player gets an extra hot tip
  wildcardRate: 0.08,    // chance (from round 2, max once per session) of a wildcard round with a novelty-pool run
  funfairRate: 0.16,     // chance per round (from round 3, max once per session) of The Funfair Stakes
  dataThemeRate: 0.5,    // chance (from round 2) of a data theme (Winter Warriors, Heatwave Handicap, ...)
  privateWeight: MODEL_DEFAULTS.privateWeight, // how much the bookie "hears" of gossip clues (hot tips: never)
  sigma: MODEL_DEFAULTS.sigma,
  lambda: MODEL_DEFAULTS.lambda,
  margin: MODEL_DEFAULTS.margin,
  supScale: MODEL_DEFAULTS.supScale,
  supBottomX: MODEL_DEFAULTS.supBottomX,
  longshotFloor: MODEL_DEFAULTS.longshotFloor,
  longshotShade: MODEL_DEFAULTS.longshotShade,
  formHoldsBonus: 3,     // selection curation: prefer fields where the form guide broadly holds (iteration 4: decisive clues do the rest)
  formGapBonus: 2,       // selection: prefer fields with clear public form differences (no outcomes)
  publicPricedBonus: 0.9,// clue assignment: prefer public clues the bookie can price
  minStake: 10,
  maxBetsPerPlayer: 4,
};
export function normalizeSettings(s = {}) {
  const o = { ...DEFAULT_SETTINGS, ...(s || {}) };
  const b = s?.roundBudget ?? s?.budget; // the host may pass either name
  o.roundBudget = Math.max(50, Math.min(100000, Math.round((Number(b) || DEFAULT_SETTINGS.roundBudget) / 10) * 10));
  o.minStake = Math.max(1, Math.min(o.roundBudget, Math.round(Number(o.minStake) || DEFAULT_SETTINGS.minStake)));
  o.rounds = Math.max(1, Math.min(20, Math.round(Number(o.rounds) || DEFAULT_SETTINGS.rounds)));
  o.drinks = !!o.drinks;
  return o;
}


const trimPerf = (p, data) => ({ rank: 1 + data.perfs.filter((q) => q.officialS < p.officialS).length, of: data.perfs.length, date: p.date, officialS: p.officialS, pool: p.pool, pacingSource: p.pacingSource, hr: p.hr, splits: p.splits,
  features: p.features, diversions: p.diversions, result: p.result, facts: p.facts });

export function createRound({ hist, sess = null, players = [], roundNumber = 1, settings = {}, rng } = {}) {
  if (!hist) throw new Error('createRound: hist db required');
  const S = normalizeSettings(settings);
  const R = makeRng(rng);
  if (sess) { try { ensureSessionSchema(sess); } catch { /* read-only */ } }
  const sessionId = S.sessionId || 'default';
  const mem = getMemory(sess, sessionId, roundNumber === 1);
  mem.roundLines = new Set();
  mem.themes ||= []; mem.bands ||= [];
  const data = loadData(hist);
  setLapStats(data);
  const model = getModel(hist, { lambda: S.lambda, features: S.modelFeatures, supScale: S.supScale, supBottomX: S.supBottomX });
  if (!players.length) players = [{ id: 'p1', name: 'Player 1' }];

  // 1. theme + field
  const weights = usageWeights(data, sess, mem);
  const fullGuide = (p) => predict(model, p.date, [{ features: model.features, weight: 1 }]);
  const formGap = (ps) => { const m = ps.map(fullGuide); return Math.max(...m) - Math.min(...m); };
  // Kendall-style agreement (-1..1) between the full form guide and the real finishing order of a candidate field.
  const formRank = (ps) => {
    const m = ps.map(fullGuide);
    let agree = 0, n = 0;
    for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) { n++; agree += Math.sign(m[i] - m[j]) * Math.sign(ps[i].officialS - ps[j].officialS); }
    return n ? agree / n : 0;
  };
  let theme = chooseTheme({ rng: R, mem, roundNumber, settings: S, data, available: (p) => (weights.get(p.date) ?? 1) > 0 });
  const selArgs = () => ({ data, rng: R, mem, weights, settings: S, roundNumber, formGap, formRank, theme, tries: S.selectTries ?? 140 });
  let sel;
  try { sel = selectField(selArgs()); }
  catch {
    try { // a data theme without a contest-worthy field: fall back to a band theme
      theme = THEMES[roundNumber === 1 ? 'band_slow' : 'band_mid'];
      sel = selectField(selArgs());
    } catch { // pool exhausted (very long session): allow repeats again, least-used first
      for (const [k, v] of weights) if (v === 0) weights.set(k, 0.02);
      sel = selectField(selArgs());
    }
  }
  // pick, among near-equal candidate fields, the one whose PUBLIC market is clearest (a real favourite and a real outsider).
  // Uses only the clue features the bookie prices; no outcomes.
  const slots = ['public', ...players.map((p) => p.id)];
  const shapeOf = (decs) => {
    const s = [...decs].sort((a, b) => a - b);
    const fav = s[0], out = s.at(-1);
    return (fav >= 2.5 && fav <= 3.5 ? 1 : -Math.abs(Math.log(fav / 3))) + (out >= 11 ? 1 : out / 11 - 1);
  };
  // decisive clues: one public every round; a second, private one in most rounds, for the player whose turn it is
  // (alternates through the session so both players get the same number of private key clues)
  mem.decisiveTurn ??= 0;
  const privDec = players.length && R.chance(S.privateDecisiveRate ?? 0.65) ? 1 + (mem.decisiveTurn % players.length) : null;
  let chosen = null;
  for (const alt of (sel.alternatives?.length ? sel.alternatives : [sel])) {
    const ps = R.shuffle(alt.perfs);
    const ents = ps.map((p, i) => ({ runnerId: `r${i + 1}`, perf: p, cands: candidatesFor(p, ps, R, mem) }));
    const asg = assignClues(ents, slots, R, model, { publicPricedBonus: S.publicPricedBonus, privateDecisiveSlot: privDec, privateStrength: S.privateStrength ?? 0.6, publicStrength: S.publicStrength ?? 0.35,
      boost: (e, c) => (e.perf.pool === 'novelty' && (c.hint || 0) >= 4 ? 1.2 : 0) });
    const m = ps.map((p, i) => predict(model, p.date, asg[`r${i + 1}`].map(({ slot, clue }) => ({ features: clue.features, weight: slot === 0 ? 1 : S.privateWeight }))));
    const shape = shapeOf(winProbs(m, S.sigma).map((q) => oddsFromProb(q, S.margin).win));
    if (!chosen || shape > chosen.shape + 1e-9) chosen = { shape, perfs: ps, entries: ents, assigned: asg, alt };
    if (S.marketShaping === false) break;
  }
  sel.archetype = chosen.alt.archetype ?? sel.archetype;
  sel.analysis = chosen.alt.analysis ?? sel.analysis;
  const perfs = chosen.perfs;
  const ids = perfs.map((_, i) => `r${i + 1}`);
  const roundId = `R${roundNumber}-${R.id(6)}`;
  const wildcardId = sel.wildcard ? ids[perfs.findIndex((p) => p.pool === 'novelty')] : null;

  // 2. race plan (needed for hot tips; sent to the TV only at race start)
  const plan = buildRacePlan(roundId, perfs.map((p, i) => ({ id: ids[i], officialS: p.officialS, progress: p.progress, pacingSource: p.pacingSource, diversions: p.diversions || null })));

  // 3. clues: slot 0 = public, then one private per player; then styles (hedged / fact / tipster)
  const assigned = chosen.assigned;
  const styleCounts = styleClues(assigned, R, mem, roundNumber, (group, bank) => pickLine(R, mem, group, bank));
  const ctx = leakContext(perfs);
  ctx.raceWords = data.raceWords;
  const clues = {};
  const leaks = [];
  const safe = (c, id) => {
    const probs = checkText(c.text, ctx, { clue: true });
    const probs2 = [...probs, ...checkText(c.headline || '', ctx, { clue: true }), ...checkText(c.kicker || '', ctx, { clue: true })];
    if (probs2.length) { leaks.push({ runnerId: id, text: c.text, probs: probs2 }); Object.assign(c, { text: 'Turned up, laced up. That\'s all we know.', headline: 'Turned up, laced up', kicker: 'That\'s all we know.', features: [], signal: 0, said: null, category: 'misc', style: 'fact' }); }
    return c;
  };
  ids.forEach((id, i) => {
    const lane = i + 1;
    clues[id] = { public: null, private: {} };
    for (const { slot, clue } of assigned[id]) {
      const c = safe({ id: `c${lane}${'abcdefgh'[slot]}`, text: clue.text, headline: clue.headline, kicker: clue.kicker, category: clue.cat, label: CATEGORY_LABEL[clue.cat] || 'Clue', tier: slot === 0 ? undefined : 'gossip',
        style: clue.style || 'fact', voice: clue.voice, lean: clue.lean, family: clue.family, features: clue.features, signal: clue.signal, said: clue.said, factKeys: clue.factKeys,
        ...(clue.decisive ? { decisive: true } : {}) }, id);
      if (slot === 0) clues[id].public = c; else clues[id].private[slots[slot]] = c;
    }
  });

  // 4. HOT TIPS: each player gets one true in-race insider fact (two for the non-runner when someone IS Mark).
  //    A hot tip replaces that player's gossip clue on the tipped runner. The bookie never prices hot tips.
  const pids = players.map((p) => p.id);
  const runnerPid = pids.includes(S.runnerPlayerId) ? S.runnerPlayerId : null;
  // handicaps: the non-runner(s) get one extra hot tip; so does the trailing player in the final round (UI passes trailingPlayerId)
  const trailPid = pids.includes(S.trailingPlayerId) ? S.trailingPlayerId : null;
  const counts = Object.fromEntries(pids.map((pid) => [pid, 1 + (runnerPid && pid !== runnerPid ? 1 : 0) + (trailPid === pid ? 1 : 0)]));
  const preMus = perfs.map((p, i) => predict(model, p.date, assigned[ids[i]].map(({ slot, clue }) => ({ features: clue.features, weight: slot === 0 ? 1 : S.privateWeight }))));
  const marketProb = Object.fromEntries(winProbs(preMus, S.sigma).map((q, i) => [ids[i], q]));
  const avoid = Object.fromEntries(pids.map((pid) => [pid, new Set(ids.filter((id) => clues[id].private[pid]?.decisive))]));
  const tips = chooseHotTips(plan.runners, { events: plan.events }, R.shuffle(pids), counts, R, { marketProb, avoid, favourBias: S.tipFavourBias ?? 6, rivalBias: S.tipRivalBias ?? 2, decisiveDamp: S.tipDecisiveDamp ?? 0.55, positiveShare: S.tipPositiveShare ?? 0.6 });
  for (const [pid, list] of Object.entries(tips)) {
    for (const t of list) {
      const old = clues[t.runnerId].private[pid];
      clues[t.runnerId].private[pid] = safe({ id: old.id, text: t.text.replace('{o}', 'a rival'), headline: t.headline.replace('{o}', 'a rival'), kicker: t.kicker, category: 'hot', label: 'HOT TIP', tier: 'hot', style: 'hot', tipType: t.type, otherId: t.otherId,
        polarity: t.polarity, features: [], signal: t.polarity > 0 ? -6 : 6, said: null, factKeys: ['progress'] }, t.runnerId);
    }
  }

  // 5. odds: public clues at full weight, gossip at a reduced weight, hot tips not at all
  const visible = (id) => [{ features: clues[id].public.features, weight: 1 },
    ...Object.values(clues[id].private).filter((c) => c.tier !== 'hot').map((c) => ({ features: c.features, weight: S.privateWeight }))];
  const mus = perfs.map((p, i) => predict(model, p.date, visible(ids[i])));
  // The Funfair Stakes mixes very different mornings: the bookie (who knows the theme) prices it with extra uncertainty.
  const sigma = S.sigma * (theme.sigmaX ?? 1); // themes the bookie knows are unpredictable get wider prices
  const probs = winProbs(mus, sigma);
  const odds = bookProbs(probs, S.longshotFloor, S.longshotShade).map((p) => oddsFromProb(p, S.margin));

  // 6. characters
  const chars = makeCharacters(perfs.length, R, mem);
  const title = roundTitle(R, mem);
  for (const [pid, list] of Object.entries(tips)) for (const t of list) {
    if (!t.otherId) continue;
    t.headline = t.headline.replace('{o}', chars[ids.indexOf(t.otherId)].shortName);
    t.text = joinClue(t.headline, t.kicker);
    Object.assign(clues[t.runnerId].private[pid], { headline: t.headline, text: t.text });
  }
  const runners = ids.map((id, i) => ({
    id, lane: i + 1,
    nickname: chars[i].nickname, shortName: chars[i].shortName, tagline: chars[i].tagline,
    colour: chars[i].colour, look: chars[i].look, personality: chars[i].personality,
    intro: introLine(chars[i], i + 1),
    publicClue: { id: clues[id].public.id, headline: clues[id].public.headline, kicker: clues[id].public.kicker, text: clues[id].public.text, category: clues[id].public.category, label: clues[id].public.label, style: clues[id].public.style, voice: clues[id].public.voice, lean: clues[id].public.lean },
    odds: { win: odds[i].win, display: odds[i].display, decimalText: odds[i].win.toFixed(2) },
  }));

  // ranks: 1 = favourite .. 5 = outsider (shortest price first; ties broken by the house's probability)
  const byPrice = ids.map((id, i) => ({ id, i })).sort((a, b) => runners[a.i].odds.win - runners[b.i].odds.win || probs[b.i] - probs[a.i]);
  byPrice.forEach(({ i }, k) => { runners[i].rank = k + 1; });

  // 7. ONE head-to-head (the pair where the price and the clues disagree most); side bet only in The Funfair Stakes; multiplier
  const matchups = pickMatchups(R, ids, mus, clues, { ...S, sigma });
  const divOpen = false; // the "anyone at the funfair?" side bet is gone: the funfair prop lives only in The Funfair Stakes
  const { props, outcomes: propOutcomes } = makeProps({ theme, perfs, plan, settings: S, rng: R, divOpen });
  const payoutMultiplier = roundNumber === S.rounds ? 2 : 1;
  // Underdog Special (final round, trailing player only): ONE win pick at boosted odds (winnings x1.5)
  const underdogSpecial = trailPid ? { playerId: trailPid, boost: S.underdogBoost ?? 1.5, label: 'UNDERDOG SPECIAL',
    text: 'One win bet of your choice at boosted odds: winnings x1.5. Pick wisely.' } : null;

  // 8. commentary
  plan.commentary = raceCommentary({ plan, runners, clues: Object.fromEntries(ids.map((id) => [id, { public: clues[id].public, private: Object.values(clues[id].private) }])), wildcardId, rng: R, mem });

  // 8b. cutscenes (TV only, at race start): chosen from real data triggers by cutscenes.mjs. Freeze/replay pause the clock;
  //     nothing here changes a time. Defensive: if the planner is missing or throws, the race simply has no cutscenes.
  const csSeed = R.int(2 ** 31); // always drawn, so the rest of the round is identical with or without the planner
  if (S.cutscenes !== false && typeof CUTSCENES?.planCutscenes === 'function') {
    try {
      const csRunners = plan.runners.map((pr) => {
        const i = ids.indexOf(pr.id), rr = runners[i];
        return { id: pr.id, progress: pr.progress, diversions: pr.diversions ?? null, officialS: pr.officialS, facts: perfs[i].facts, features: perfs[i].features,
          nickname: rr.nickname, shortName: rr.shortName, personality: rr.personality };
      });
      const cs = CUTSCENES.planCutscenes({ racePlan: plan, runners: csRunners, theme, rng: makeRng(csSeed), sessionMemory: mem, roundNumber });
      if (Array.isArray(cs)) plan.cutscenes = cs;
    } catch (e) { plan.cutscenes = []; mem.cutsceneErrors = (mem.cutsceneErrors || 0) + 1; void e; }
  }
  const thInfo = themeInfo(theme, R, perfs);

  const pub = {
    roundId, number: roundNumber, title,
    theme: thInfo,
    runners, matchups, ...(props.length ? { props } : {}), payoutMultiplier,
    ...(underdogSpecial ? { underdogSpecial } : {}),
    rules: { budget: S.roundBudget, minStake: S.minStake, maxBetsPerPlayer: S.maxBetsPerPlayer },
    wildcard: !!sel.wildcard,
    ...(sel.wildcard ? { notice: 'WILDCARD ROUND: one of these five was not exactly trying that morning. Read the clues.' } : {}),
    introLines: introLines(R, mem, { title, wildcard: sel.wildcard, theme: thInfo, finale: payoutMultiplier > 1 }).map(({ speaker, text }) => ({ speaker, text })),
    currency: CURRENCY,
    commentators: COMMENTATORS,
  };
  const priv = {};
  for (const p of players) priv[p.id] = ids.map((id) => { const c = clues[id].private[p.id]; return { runnerId: id, id: c.id, headline: c.headline, kicker: c.kicker, text: c.text, category: c.category, label: c.label, tier: c.tier, style: c.style, voice: c.voice, lean: c.lean }; });

  const round = {
    id: roundId, number: roundNumber,
    public: pub,
    private: priv,
    racePlan: plan,
    hidden: {
      sessionId, settings: S, players: players.map((p) => ({ id: p.id, name: p.name })),
      archetype: sel.archetype, targetArchetype: sel.target, wildcardId, theme: theme.key,
      analysis: { ...sel.analysis, events: undefined },
      runners: ids.map((id, i) => ({ id, date: perfs[i].date, officialS: perfs[i].officialS, pool: perfs[i].pool, diverted: !!perfs[i].diversions?.length })),
      perfs: Object.fromEntries(ids.map((id, i) => [id, trimPerf(perfs[i], data)])),
      model: { mus: Object.fromEntries(ids.map((id, i) => [id, Math.round(mus[i] * 10) / 10])), probs: Object.fromEntries(ids.map((id, i) => [id, Math.round(probs[i] * 1000) / 1000])) },
      clues, hotTips: tips, styleCounts, propOutcomes, divOpen,
      leaks,
    },
  };

  // 9. final leak sweep over everything pre-race (belt and braces)
  ctx.nicknames = runners.flatMap((r) => [r.nickname, r.shortName]);
  const problems = checkRound(round, ctx);
  if (problems.length) round.hidden.leaks.push(...problems.map((p) => ({ payload: p })));

  // 10. bookkeeping: usage + session memory
  mem.archetypes.push(sel.archetype);
  mem.themes.push(theme.key);
  mem.bands.push(bandOf([...perfs].map((p) => p.officialS).sort((a, b) => a - b)[2]));
  for (const p of perfs) mem.perfs.add(p.date);
  if (sel.wildcard) mem.wildcards = (mem.wildcards || 0) + 1;
  if (privDec != null && Object.values(clues).some((c) => c.private[slots[privDec]]?.decisive)) mem.decisiveTurn++;
  if (!theme.funfair && perfs.some((p) => p.diversions?.length)) mem.diverted = (mem.diverted || 0) + 1;
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

// Head-to-heads: pairs where the PRICE (priced features) and the CLUE MOOD (everything said about them, incl. unpriced
// hints and tipster opinions) point different ways, priced as a real favourite vs underdog rather than evens.
function pickMatchups(R, ids, mus, clues, S) {
  const mood = (id) => {
    const all = [clues[id].public, ...Object.values(clues[id].private).filter((c) => c.tier !== 'hot')];
    return all.reduce((s, c) => s + (c.signal || 0) + (c.style === 'tipster' ? -4 * (c.lean || 0) : 0), 0); // negative = sounds quick
  };
  const pairs = [];
  for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
    const p = beatProb(mus[i], mus[j], S.sigma); // P(i beats j)
    const favI = p >= 0.5;
    const moodDiff = mood(ids[i]) - mood(ids[j]); // >0: clues say j is quicker
    const disagree = favI ? moodDiff : -moodDiff; // >0: clues favour the price underdog
    const under = Math.min(p, 1 - p);
    const score = (disagree > 0 ? 2 + Math.min(disagree, 20) / 10 : 0) + (under >= 0.22 && under <= 0.44 ? 1.5 : under < 0.15 ? -2 : 0) + R.next() * 0.6;
    pairs.push({ i, j, p, score });
  }
  pairs.sort((a, b) => b.score - a.score);
  return pairs.slice(0, 1).map((q, k) => {
    const swap = R.chance(0.5);
    const [ia, ib, pa] = swap ? [q.j, q.i, 1 - q.p] : [q.i, q.j, q.p];
    const oa = oddsFromProb(pa, S.h2hMargin ?? S.margin), ob = oddsFromProb(1 - pa, S.h2hMargin ?? S.margin);
    // the phones show each runner's PUBLIC clue headline on the head-to-head card
    return { id: `m${k + 1}`, a: ids[ia], b: ids[ib], clueA: clues[ids[ia]].public.headline, clueB: clues[ids[ib]].public.headline,
      odds: { a: oa.win, b: ob.win, displayA: oa.display, displayB: ob.display } };
  });
}

const memFor = (round) => peekMemory(round.hidden?.sessionId) || getMemory(null, round.hidden?.sessionId || 'default');

// scores: { [playerId]: cumulative score BEFORE this round } (banked net profit; may be negative). Missing = 0.
// Returns payouts[pid] = { bets, staked, returned, net, score, budget, unspent } where score = previous score + net.
export function settleRound(round, betsByPlayer = {}, scores = {}, rng) {
  return settle(round, betsByPlayer, scores || {}, { rng: makeRng(rng), mem: memFor(round), inPlay: ipm(round) });
}

// HALFWAY MARKET: priced only from the on-screen standings at 2500 m.
export function inPlayMarket(round) { return ipm(round); }

// Bet reveal sequence for the TV: smallest to largest stake (as a share of the round budget), with clash / opposition lines.
// The third argument is ignored (it used to be bankrolls; every player now has the same per-round budget).
export function betRevealOrder(round, betsByPlayer, _legacy, players, rng) {
  const ps = players?.length ? players : round.hidden?.players || [];
  return bro(round, betsByPlayer || {}, null, ps, { rng: makeRng(rng), mem: memFor(round) });
}

// Commentary for the end of betting (legacy shape): the reveal lines in order, then "betting closed". [{ speaker, text }]
export function betReactionLines(round, betsByPlayer, players, rng) {
  const ps = players?.length ? players : round.hidden?.players || [];
  const seq = bro(round, betsByPlayer || {}, null, ps, { rng: makeRng(rng), mem: memFor(round), closing: true });
  return seq.map((x) => x.line);
}

export function sessionSuperlatives(history, players) { return ss(history || [], players || []); }

// Called by the server at race start, once bets are known: swaps generic lines for personal ones
// (stakes and positions, tipster accountability, a tagline callback). Returns the new commentary and sets it on the plan.
export function personaliseCommentary(round, betsByPlayer, players, racePlan, rng) {
  const plan = racePlan || round.racePlan;
  const ps = players?.length ? players : round.hidden?.players || [];
  const out = personalise({ round, betsByPlayer: betsByPlayer || {}, players: ps, plan, rng: makeRng(rng), mem: memFor(round) });
  plan.commentary = out;
  return out;
}
