// Monte-Carlo session simulator for the game module.
//   node --disable-warning=ExperimentalWarning tools/simulate.mjs [--sessions 150] [--rounds 8] [--seed 1] [--sigma 14] [--json]
//   tuning: --lambda --pw (private weight) --holds (form-holds curation) --gap (form-gap bonus) --pub (public priced bonus) --band --wild
// Reports favourite win rate, odds spread, calibration, strategy ROIs (incl. hot-tip followers and the halfway market),
// prop base rates, archetype / theme / style mix, repetition and leaks.
import { DatabaseSync } from 'node:sqlite';
import { historyDb } from '../server/db.mjs';
import { createRound, settleRound, inPlayMarket, betRevealOrder } from '../server/game/round.mjs';
import { makeRng } from '../server/game/rng.mjs';
import { isPBDay } from '../server/game/select.mjs';
import { loadData } from '../server/game/data.mjs';
import { bandOf } from '../server/game/themes.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, arr) => (x.startsWith('--') ? [...a, [x.slice(2), arr[i + 1]?.startsWith('--') || arr[i + 1] == null ? true : arr[i + 1]]] : a), []));
const SESSIONS = Number(args.sessions ?? 150), ROUNDS = Number(args.rounds ?? 8), SEED = Number(args.seed ?? 1);
const settings = { drinks: true, rounds: ROUNDS };
const num = { sigma: 'sigma', lambda: 'lambda', pw: 'privateWeight', wild: 'wildcardRate', gap: 'formGapBonus', band: 'bandS', holds: 'formHoldsBonus', pub: 'publicPricedBonus', ff: 'funfairRate', alt: 'alternatives', slack: 'altSlack', bias: 'tipFavourBias', pos: 'tipPositiveShare' };
for (const [k, v] of Object.entries(num)) if (args[k] != null) settings[v] = Number(args[k]);
if (args.features) settings.modelFeatures = String(args.features).split(',');
if (args.runner) settings.runnerPlayerId = 'p2';

const hist = historyDb();
const data = loadData(hist);
const players = [{ id: 'p1', name: 'Alice' }, { id: 'p2', name: 'Bob' }];
const S = {
  rounds: 0, favWins: 0, favTop2: 0, longshotWins: 0, longshot10: 0, winnerDec: [], favDec: [], maxDec: [], favInBand: 0, outsider10: 0, both: 0,
  logLoss: 0, logLossU: 0, archetypes: {}, themes: {}, round1Bands: {}, bandRepeats: 0, wildcards: 0, diverted: 0, perfRepeats: 0, lineRepeats: 0, linesTotal: 0,
  raceLines: 0, gaps: [], leaks: 0, h2h: 0, h2hFavWins: 0, h2hUnder: [], styles: { hedge: 0, fact: 0, tipster: 0 }, hotTypes: {}, pbMax: 0, ms: [],
  propYesNon: 0, propNon: 0, propYesFun: 0, propFun: 0, ipLeaderWins: 0, ip: 0, ipLogLoss: 0, multOk: true, verdicts: {}, highlights: 0,
};
// strategy ledgers: staked / returned (100 per round each)
const L = {}; const led = (k, stake, ret) => { (L[k] ??= { staked: 0, returned: 0, bets: 0, wins: 0 }); L[k].staked += stake; L[k].returned += ret; L[k].bets++; if (ret > 0) L[k].wins++; };

for (let s = 0; s < SESSIONS; s++) {
  const sess = new DatabaseSync(':memory:');
  const R = makeRng(SEED * 7919 + s);
  const seenPerf = new Set(), seenLines = new Set();
  let lastBand = null;
  for (let k = 1; k <= ROUNDS; k++) {
    const t0 = performance.now();
    const round = createRound({ hist, sess, players, roundNumber: k, settings: { ...settings, sessionId: `sim${SEED}-${s}` }, rng: SEED * 1e6 + s * 100 + k });
    S.ms.push(performance.now() - t0);
    S.rounds++;
    const P = round.public, H = round.hidden, plan = round.racePlan;
    const order = plan.finishOrder, winner = order[0];
    const odds = (id) => P.runners.find((r) => r.id === id).odds.win;
    S.archetypes[H.archetype] = (S.archetypes[H.archetype] || 0) + 1;
    S.themes[P.theme.key] = (S.themes[P.theme.key] || 0) + 1;
    const band = bandOf([...H.runners].map((r) => r.officialS).sort((a, b) => a - b)[2]);
    if (k === 1) S.round1Bands[band] = (S.round1Bands[band] || 0) + 1;
    if (band === lastBand && P.theme.key.startsWith('band_')) S.bandRepeats++;
    lastBand = band;
    if (P.wildcard) S.wildcards++;
    if (H.runners.some((r) => r.diverted)) S.diverted++;
    S.leaks += H.leaks.length;
    S.pbMax = Math.max(S.pbMax, Object.values(H.perfs).filter((p) => isPBDay(p)).length);
    for (const r of H.runners) { if (seenPerf.has(r.date)) S.perfRepeats++; seenPerf.add(r.date); }
    for (const [st, n] of Object.entries(H.styleCounts || {})) S.styles[st] = (S.styles[st] || 0) + n;
    for (const list of Object.values(H.hotTips || {})) for (const t of list) S.hotTypes[t.type] = (S.hotTypes[t.type] || 0) + 1;
    S.raceLines += plan.commentary.length;
    for (let i = 1; i < plan.commentary.length; i++) S.gaps.push(plan.commentary[i].broadcastS - plan.commentary[i - 1].broadcastS);

    // odds shape
    const sorted = [...P.runners].sort((a, b) => a.odds.win - b.odds.win);
    const fav = sorted[0], out = sorted.at(-1);
    S.favDec.push(fav.odds.win); S.maxDec.push(out.odds.win); S.winnerDec.push(odds(winner));
    const inBand = fav.odds.win >= 2.5 && fav.odds.win <= 3.5, o10 = out.odds.win >= 11;
    if (inBand) S.favInBand++; if (o10) S.outsider10++; if (inBand && o10) S.both++;
    if (fav.id === winner) S.favWins++;
    (S.rankWins ??= [0, 0, 0, 0, 0])[sorted.findIndex((r) => r.id === winner)]++;
    (S.themeFav ??= {})[P.theme.key] ??= [0, 0]; S.themeFav[P.theme.key][0]++; if (fav.id === winner) S.themeFav[P.theme.key][1]++;
    if (order.indexOf(fav.id) <= 1) S.favTop2++;
    if (odds(winner) >= 7) S.longshotWins++;
    if (odds(winner) >= 11) S.longshot10++;
    S.logLoss += -Math.log(Math.max(1e-6, H.model.probs[winner])); S.logLossU += Math.log(P.runners.length);
    for (const m of P.matchups) {
      S.h2h++;
      const favSide = m.odds.a <= m.odds.b ? m.a : m.b, other = favSide === m.a ? m.b : m.a;
      if (order.indexOf(favSide) < order.indexOf(other)) S.h2hFavWins++;
      S.h2hUnder.push(Math.max(m.odds.a, m.odds.b));
    }
    // props
    const pr = P.props[0], outc = H.propOutcomes[pr.id];
    if (P.theme.key === 'funfair') { S.propFun++; if (outc === 'yes') S.propYesFun++; } else { S.propNon++; if (outc === 'yes') S.propYesNon++; }
    led('prop_yes', 100, outc === 'yes' ? Math.round(100 * pr.odds.yes) : 0);
    led('prop_no', 100, outc === 'no' ? Math.round(100 * pr.odds.no) : 0);

    // win strategies
    const win = (k2, id) => led(k2, 100, id === winner ? Math.round(100 * odds(id)) : 0);
    win('favourite', fav.id); win('random', R.pick(P.runners).id); win('longshot', out.id);
    for (const pid of ['p1', 'p2']) {
      for (const t of H.hotTips[pid] || []) {
        // "sensible": back a good-sounding tipped runner; on a bad-sounding tip, back the favourite unless that's the tipped one
        const pick = t.polarity > 0 ? t.runnerId : (fav.id === t.runnerId ? sorted[1].id : fav.id);
        win('hotTipSensible', pick);
        if (t.polarity > 0) win('hotTipPositiveOnly', t.runnerId);
        else win('hotTipNegative_favExcl', pick);
      }
    }
    // halfway market
    const ip = inPlayMarket(round);
    const leader = ip.standings[0].runnerId;
    S.ip++; if (leader === winner) S.ipLeaderWins++;
    S.ipLogLoss += -Math.log(Math.max(1e-6, 1 / ip.odds[winner].win * 0.99));
    const ipBet = (k2, id) => led(k2, 100, id === winner ? Math.round(100 * ip.odds[id].win) : 0);
    ipBet('inplay_leader', leader); ipBet('inplay_random', R.pick(ip.standings).runnerId); ipBet('inplay_second', ip.standings[1].runnerId);

    // settle with a mixed bet slip to exercise every bet type + the multiplier
    const bets = {
      p1: [{ type: 'win', runnerId: fav.id, stake: 100 }, { type: 'h2h', matchupId: 'm1', pick: P.matchups[0].a, stake: 50 }, { type: 'prop', propId: pr.id, pick: 'no', stake: 20 }],
      p2: [{ type: 'win', runnerId: R.pick(P.runners).id, stake: 100 }, { type: 'inplay', runnerId: leader, stake: 50, odds: ip.odds[leader].win }],
    };
    const lines = betRevealOrder(round, bets, { p1: 1000, p2: 1000 }, players);
    const res = settleRound(round, bets, { p1: 1000, p2: 1000 });
    const fb = res.payouts.p1.bets[0];
    if (fb.won && !res.deadHeat && fb.returned !== Math.round(100 * (1 + P.payoutMultiplier * (fav.odds.win - 1)))) S.multOk = false;
    for (const c of res.clueReview) { S.verdicts[c.verdict] = (S.verdicts[c.verdict] || 0) + 1; if (c.highlight) S.highlights++; }
    for (const l of [...P.introLines, ...plan.commentary, ...res.commentary, ...lines.map((x) => x.line)]) { S.linesTotal++; if (seenLines.has(l.text)) S.lineRepeats++; seenLines.add(l.text); }
  }
}

const pct = (x) => `${(100 * x).toFixed(1)}%`;
const q = (arr, p) => { const s = [...arr].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(p * s.length))]; };
const N = S.rounds;
const roi = Object.fromEntries(Object.entries(L).map(([k, v]) => [k, { roi: `${((v.returned / v.staked - 1) * 100).toFixed(1)}%`, bets: v.bets, hitRate: pct(v.wins / v.bets) }]));
const report = {
  rounds: N, sessions: SESSIONS,
  favouriteWinRate: pct(S.favWins / N), favouriteTop2: pct(S.favTop2 / N),
  winsByPriceRank: S.rankWins.map((x) => pct(x / N)),
  favWinByTheme: Object.fromEntries(Object.entries(S.themeFav).map(([k, [n, w]]) => [k, `${w}/${n}`])),
  oddsShape: {
    favouriteDecimal: { p10: q(S.favDec, 0.1), median: q(S.favDec, 0.5), p90: q(S.favDec, 0.9) },
    longestPriceDecimal: { p10: q(S.maxDec, 0.1), median: q(S.maxDec, 0.5), p90: q(S.maxDec, 0.9) },
    favBetween6to4and5to2: pct(S.favInBand / N), outsider10to1orLonger: pct(S.outsider10 / N), both: pct(S.both / N),
  },
  winners: { median: q(S.winnerDec, 0.5), p90: q(S.winnerDec, 0.9), at6to1plus: pct(S.longshotWins / N), at10to1plus: pct(S.longshot10 / N) },
  calibration: { logLoss: (S.logLoss / N).toFixed(3), uniform: (S.logLossU / N).toFixed(3) },
  h2h: { favouriteWins: pct(S.h2hFavWins / S.h2h), underdogDecimalMedian: q(S.h2hUnder, 0.5) },
  halfwayMarket: { leaderWins: pct(S.ipLeaderWins / S.ip), logLoss: (S.ipLogLoss / S.ip).toFixed(3) },
  props: { funfairYesRate_nonFunfairRounds: pct(S.propYesNon / Math.max(1, S.propNon)), clearBy20s_funfairRounds: `${S.propYesFun}/${S.propFun}` },
  strategyROI_100perBet: roi,
  themes: Object.fromEntries(Object.entries(S.themes).map(([k, v]) => [k, pct(v / N)])),
  round1Bands: S.round1Bands, consecutiveBandThemeRepeats: S.bandRepeats, maxPBDaysInAField: S.pbMax,
  archetypes: Object.fromEntries(Object.entries(S.archetypes).map(([k, v]) => [k, pct(v / N)])),
  clueStyles: S.styles, hotTipTypes: S.hotTypes, clueVerdicts: S.verdicts, highlightsPerRound: (S.highlights / N).toFixed(2),
  roundsWithDiversion: pct(S.diverted / N), wildcardRounds: pct(S.wildcards / N),
  repetitionWithinSession: { perfRepeats: S.perfRepeats, lineRepeats: `${S.lineRepeats}/${S.linesTotal}` },
  commentary: { raceLinesPerRound: (S.raceLines / N).toFixed(1), minGapS: Math.min(...S.gaps).toFixed(2), medianGapS: q(S.gaps, 0.5).toFixed(1) },
  multiplierPaysCorrectly: S.multOk, leaks: S.leaks,
  createRoundMs: { median: q(S.ms, 0.5).toFixed(0), p95: q(S.ms, 0.95).toFixed(0) },
};
void data;
if (args.json) console.log(JSON.stringify(report));
else console.dir(report, { depth: 4 });
