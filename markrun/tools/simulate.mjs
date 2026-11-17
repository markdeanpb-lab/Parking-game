// Monte-Carlo session simulator for the game module.
//   node --disable-warning=ExperimentalWarning tools/simulate.mjs [--sessions 150] [--rounds 8] [--seed 1] [--sigma 26] [--lambda 12] [--pw 0.5] [--json]
// Reports favourite win rate, longshot wins, calibration, odds/payout distributions, archetype mix,
// repetition (runs, lines, nicknames within a session), leak count, h2h stats, and strategy ROIs.
import { DatabaseSync } from 'node:sqlite';
import { historyDb } from '../server/db.mjs';
import { createRound, settleRound } from '../server/game/round.mjs';
import { getModel, predict, winProbs } from '../server/game/model.mjs';
import { makeRng } from '../server/game/rng.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, arr) => (x.startsWith('--') ? [...a, [x.slice(2), arr[i + 1]?.startsWith('--') || arr[i + 1] == null ? true : arr[i + 1]]] : a), []));
const SESSIONS = Number(args.sessions ?? 150), ROUNDS = Number(args.rounds ?? 8), SEED = Number(args.seed ?? 1);
const settings = { drinks: true };
if (args.sigma) settings.sigma = Number(args.sigma);
if (args.lambda) settings.lambda = Number(args.lambda);
if (args.pw) settings.privateWeight = Number(args.pw);
if (args.wild) settings.wildcardRate = Number(args.wild);
if (args.gap) settings.formGapBonus = Number(args.gap);
if (args.band) settings.bandS = Number(args.band);
if (args.holds) settings.formHoldsBonus = Number(args.holds);
if (args.features) settings.modelFeatures = String(args.features).split(',');

const hist = historyDb();
const players = [{ id: 'p1', name: 'Alice' }, { id: 'p2', name: 'Bob' }];
const stats = {
  rounds: 0, favWins: 0, favTop2: 0, longshotWins: 0, longshot10: 0, winnerDecimal: [], favDecimal: [], logLoss: 0, logLossUniform: 0, brier: 0,
  archetypes: {}, targets: {}, wildcards: 0, diverted: 0, perfRepeats: 0, lineRepeats: 0, linesTotal: 0, raceLines: 0, nickRepeats: 0, titleRepeats: 0,
  leaks: 0, h2h: 0, h2hFavWins: 0, verdicts: { useful: 0, red_herring: 0, neutral: 0 }, verdictByOwner: {}, ms: [], gaps: [], clueCats: {},
  marginLE3: 0, leadChange1: 0, lateLC: 0, publicCats: {}, overround: [],
};
const strat = { fav: [], random: [], longshot: [], smart: [], smartPublic: [] };

for (let s = 0; s < SESSIONS; s++) {
  const sess = new DatabaseSync(':memory:');
  const R = makeRng(SEED * 7919 + s);
  const bank = Object.fromEntries(Object.keys(strat).map((k) => [k, 1000]));
  const seenPerf = new Set(), seenLines = new Set(), seenNick = new Set(), seenTitle = new Set();
  for (let k = 1; k <= ROUNDS; k++) {
    const t0 = performance.now();
    const round = createRound({ hist, sess, players, roundNumber: k, settings: { ...settings, sessionId: `sim${s}` }, rng: SEED * 1e6 + s * 100 + k });
    stats.ms.push(performance.now() - t0);
    stats.rounds++;
    const P = round.public, H = round.hidden, plan = round.racePlan;
    stats.archetypes[H.archetype] = (stats.archetypes[H.archetype] || 0) + 1;
    stats.targets[H.targetArchetype] = (stats.targets[H.targetArchetype] || 0) + 1;
    if (P.wildcard) stats.wildcards++;
    if (H.runners.some((r) => r.diverted)) stats.diverted++;
    stats.leaks += H.leaks.length;
    for (const r of H.runners) { if (seenPerf.has(r.date)) stats.perfRepeats++; seenPerf.add(r.date); }
    for (const r of P.runners) { if (seenNick.has(r.nickname)) stats.nickRepeats++; seenNick.add(r.nickname); stats.publicCats[r.publicClue.category] = (stats.publicCats[r.publicClue.category] || 0) + 1; }
    if (seenTitle.has(P.title)) stats.titleRepeats++; seenTitle.add(P.title);
    const lines = [...P.introLines, ...plan.commentary];
    stats.raceLines += plan.commentary.length;
    for (let i = 1; i < plan.commentary.length; i++) stats.gaps.push(plan.commentary[i].broadcastS - plan.commentary[i - 1].broadcastS);
    const sm = plan.summary;
    if (sm.winningMarginS <= 3) stats.marginLE3++;
    if (sm.leadChanges >= 1) stats.leadChange1++;
    if (sm.lateLeadChange) stats.lateLC++;
    for (const id of Object.keys(H.clues)) for (const c of [H.clues[id].public, ...Object.values(H.clues[id].private)]) stats.clueCats[c.category] = (stats.clueCats[c.category] || 0) + 1;

    // odds stats
    const order = plan.finishOrder;
    const winner = order[0];
    const runners = [...P.runners].sort((a, b) => a.odds.win - b.odds.win);
    const fav = runners[0];
    stats.overround.push(P.runners.reduce((s, r) => s + 1 / r.odds.win, 0));
    if (fav.id === winner) stats.favWins++;
    if (order.indexOf(fav.id) <= 1) stats.favTop2++;
    const wOdds = P.runners.find((r) => r.id === winner).odds.win;
    stats.winnerDecimal.push(wOdds); stats.favDecimal.push(fav.odds.win);
    if (wOdds >= 7) stats.longshotWins++;
    if (wOdds >= 11) stats.longshot10++;
    const pw = H.model.probs[winner];
    stats.logLoss += -Math.log(Math.max(1e-6, pw)); stats.logLossUniform += -Math.log(1 / P.runners.length);
    for (const r of P.runners) stats.brier += ((r.id === winner ? 1 : 0) - H.model.probs[r.id]) ** 2;
    for (const m of P.matchups) {
      stats.h2h++;
      const favSide = m.odds.a <= m.odds.b ? m.a : m.b, other = favSide === m.a ? m.b : m.a;
      if (order.indexOf(favSide) < order.indexOf(other)) stats.h2hFavWins++;
    }

    // strategies (100 per round, win bets)
    const model = getModel(hist, { lambda: H.settings.lambda, features: H.settings.modelFeatures });
    const ownProbs = (pid) => {
      const mus = H.runners.map((r) => predict(model, r.date, [
        { features: H.clues[r.id].public.features, weight: 1 },
        ...(pid ? [{ features: H.clues[r.id].private[pid].features, weight: 1 }] : []),
      ]));
      return winProbs(mus, H.settings.sigma);
    };
    const pick = {
      fav: fav.id,
      random: R.pick(P.runners).id,
      longshot: runners.at(-1).id,
      smart: (() => { const pr = ownProbs('p1'); let best = null, ev = 0; H.runners.forEach((r, i) => { const o = P.runners.find((x) => x.id === r.id).odds.win; if (pr[i] * o > ev) { ev = pr[i] * o; best = r.id; } }); return best; })(),
      smartPublic: (() => { const pr = ownProbs(null); let best = null, ev = 0; H.runners.forEach((r, i) => { const o = P.runners.find((x) => x.id === r.id).odds.win; if (pr[i] * o > ev) { ev = pr[i] * o; best = r.id; } }); return best; })(),
    };
    for (const [k, id] of Object.entries(pick)) { bank[k] -= 100; if (id === winner) bank[k] += Math.round(100 * P.runners.find((x) => x.id === id).odds.win); }

    // settle with two simple bettors to exercise awards/commentary
    const bets = { p1: [{ type: 'win', runnerId: pick.smart, stake: 100 }, { type: 'h2h', matchupId: 'm1', pick: P.matchups[0].a, stake: 50 }], p2: [{ type: 'win', runnerId: pick.random, stake: 100 }] };
    const res = settleRound(round, bets, { p1: 1000, p2: 1000 });
    for (const c of res.clueReview) { stats.verdicts[c.verdict]++; const o = c.owner === 'public' ? 'public' : 'private'; (stats.verdictByOwner[o] ??= { useful: 0, red_herring: 0, neutral: 0 })[c.verdict]++; }
    for (const l of [...lines, ...res.commentary]) { stats.linesTotal++; if (seenLines.has(l.text)) stats.lineRepeats++; seenLines.add(l.text); }
  }
  for (const k of Object.keys(strat)) strat[k].push(bank[k]);
}

const pct = (x) => `${(100 * x).toFixed(1)}%`;
const q = (arr, p) => { const s = [...arr].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(p * s.length))]; };
const mean = (a) => a.reduce((s, x) => s + x, 0) / a.length;
const N = stats.rounds;
const report = {
  rounds: N, sessions: SESSIONS,
  favouriteWinRate: pct(stats.favWins / N), favouriteTop2: pct(stats.favTop2 / N),
  longshotWins_6to1plus: pct(stats.longshotWins / N), longshotWins_10to1plus: pct(stats.longshot10 / N),
  winnerOdds: { p25: q(stats.winnerDecimal, 0.25), median: q(stats.winnerDecimal, 0.5), p75: q(stats.winnerDecimal, 0.75), p95: q(stats.winnerDecimal, 0.95) },
  favouriteOdds: { median: q(stats.favDecimal, 0.5), min: Math.min(...stats.favDecimal), max: Math.max(...stats.favDecimal) },
  bookOverround: { median: q(stats.overround, 0.5).toFixed(3), min: Math.min(...stats.overround).toFixed(3), max: Math.max(...stats.overround).toFixed(3) },
  calibration: { logLoss: (stats.logLoss / N).toFixed(3), uniformLogLoss: (stats.logLossUniform / N).toFixed(3), brier: (stats.brier / N).toFixed(3) },
  h2hFavouriteWinRate: pct(stats.h2hFavWins / stats.h2h),
  race: { marginLE3s: pct(stats.marginLE3 / N), anyLeadChange: pct(stats.leadChange1 / N), lateLeadChange: pct(stats.lateLC / N) },
  archetypes: Object.fromEntries(Object.entries(stats.archetypes).map(([k, v]) => [k, pct(v / N)])),
  wildcardRounds: pct(stats.wildcards / N), roundsWithDiversion: pct(stats.diverted / N),
  repetitionWithinSession: { perfRepeats: stats.perfRepeats, nicknameRepeats: stats.nickRepeats, titleRepeats: stats.titleRepeats, lineRepeats: `${stats.lineRepeats}/${stats.linesTotal}` },
  commentary: { raceLinesPerRound: (stats.raceLines / N).toFixed(1), minGapS: Math.min(...stats.gaps).toFixed(2), medianGapS: q(stats.gaps, 0.5).toFixed(1) },
  clueVerdicts: stats.verdicts, verdictByOwner: stats.verdictByOwner,
  clueCategories: stats.clueCats, publicClueCategories: stats.publicCats,
  leaks: stats.leaks,
  createRoundMs: { median: q(stats.ms, 0.5).toFixed(0), p95: q(stats.ms, 0.95).toFixed(0) },
  strategyFinalBankroll_100perRound: Object.fromEntries(Object.entries(strat).map(([k, v]) => [k, { mean: Math.round(mean(v)), p10: q(v, 0.1), median: q(v, 0.5), p90: q(v, 0.9) }])),
};
if (args.json) console.log(JSON.stringify(report));
else console.dir(report, { depth: 4 });
