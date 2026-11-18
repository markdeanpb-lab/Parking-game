// Development stand-ins for the iteration-2 game-module features, used ONLY for fixture rounds
// (MARKRUN_ROUND_SOURCE=fixture or when round.mjs is unavailable), so the UI can be built and tested end to end.
import { broadcastToRace, distanceAt, timeAtDistance } from '../game/raceplan.mjs';

export function decorateFixture(r, { players, roundNumber, settings }) {
  const pub = r.public;
  // round 2 is The Funfair Stakes (so the side-bet flow is exercised); otherwise a plain placeholder theme
  const funfair = roundNumber === 2;
  pub.theme = funfair
    ? { key: 'funfair', label: 'The Funfair Stakes', blurb: 'The fair is in town. Some of these runners will be taking a detour.',
      explainer: ['Bank-holiday weekend: the course went round the fairground.', 'Diverted runners lose time to the rides.', 'Side bet tonight: will anyone visit the funfair?'],
      visual: { season: 'summer', weather: 'sun', time: 'morning' } }
    : { key: 'fixture', label: 'The Placeholder Cup', blurb: 'A development fixture: real race, made-up everything else.',
      explainer: ['Every runner is a real Mark from a real Saturday.', 'Clues are placeholders in fixture mode.'],
      visual: { season: 'autumn', weather: 'clear', time: 'morning' } };
  pub.payoutMultiplier = roundNumber >= (settings?.rounds || settings?.roundsPerGame || 99) ? 2 : 1;
  pub.rules = { ...(pub.rules || {}), budget: Number(settings?.budget ?? settings?.roundBudget) || 500 };
  const byOdds = [...pub.runners].sort((a, b) => a.odds.win - b.odds.win);
  byOdds.forEach((x, i) => { x.rank = i + 1; });
  pub.matchups = (pub.matchups || []).slice(0, 1).map((m) => ({ ...m,
    clueA: pub.runners.find((x) => x.id === m.a)?.publicClue?.text || '', clueB: pub.runners.find((x) => x.id === m.b)?.publicClue?.text || '' }));
  if (funfair) pub.props = [{ id: 'pr1', text: 'Will anyone visit the funfair?', odds: { yes: 1.8, no: 2.0, displayYes: '4/5', displayNo: 'evens' } }];
  else delete pub.props;
  for (const p of players) {
    const list = r.private[p.id] || [];
    const hotIdx = [roundNumber % list.length];
    if (settings?.runnerPlayerId && settings.runnerPlayerId !== p.id) hotIdx.push((roundNumber + 2) % list.length);
    r.private[p.id] = list.map((c, i) => ({ ...c, tier: hotIdx.includes(i) ? 'hot' : 'gossip', label: hotIdx.includes(i) ? 'Insider' : 'Gossip',
      text: hotIdx.includes(i) ? `PLACEHOLDER hot tip for ${p.id}: hit the Hill first on lap 1` : c.text }));
  }
  return r;
}

export function fixtureInPlayMarket(round) {
  const plan = round.racePlan;
  const lead = Math.min(...plan.runners.map((x) => timeAtDistance(x.progress, 2500)));
  const rows = plan.runners.map((x) => ({ runnerId: x.id, d: distanceAt(x.progress, lead) }))
    .sort((a, b) => b.d - a.d);
  const leader = plan.runners.find((x) => x.id === rows[0].runnerId);
  const standings = rows.map((x, i) => ({ runnerId: x.runnerId, place: i + 1, gapS: Math.round((lead - timeAtDistance(leader.progress, x.d)) * 10) / 10 }));
  const odds = {};
  for (const s of standings) {
    const win = Math.round((1.6 + s.gapS * 0.45 + (s.place - 1) * 0.6) * 10) / 10;
    odds[s.runnerId] = { win, display: `${Math.max(1, Math.round((win - 1) * 2))}/2` };
  }
  void broadcastToRace;
  return { atM: 2500, standings, odds };
}

export function fixtureBetRevealOrder(round, betsByPlayer, budgets, players) {
  const name = (id) => players.find((p) => p.id === id)?.name || id;
  const nick = (id) => round.public.runners.find((x) => x.id === id)?.nickname || id;
  const all = [];
  for (const [pid, bets] of Object.entries(betsByPlayer)) for (const bet of bets || []) all.push({ playerId: pid, bet, rel: bet.stake / Math.max(1, budgets[pid] || 1) });
  all.sort((a, b) => a.rel - b.rel);
  return all.map(({ playerId, bet }, i) => ({
    playerId, bet,
    line: { speaker: i % 2 ? 'pam' : 'jeff', text: bet.type === 'win' ? `${name(playerId)}: ${bet.stake} on ${nick(bet.runnerId)} to win.` : bet.type === 'prop' ? `${name(playerId)} fancies a side bet. ${bet.stake} on it.` : `${name(playerId)}: ${bet.stake} on ${nick(bet.pick)} in the head-to-head.` },
  }));
}

export function fixtureSuperlatives(history, players) {
  const out = [];
  let best = null, worst = null;
  for (const h of history) for (const [pid, pay] of Object.entries(h.results?.payouts || {})) {
    if (!best || pay.net > best.net) best = { pid, net: pay.net, round: h.number };
    if (!worst || pay.net < worst.net) worst = { pid, net: pay.net, round: h.number };
  }
  const nm = (id) => players.find((p) => p.id === id)?.name || id;
  if (best && best.net > 0) out.push({ title: 'Biggest Win', text: `${nm(best.pid)} banked ${best.net} in round ${best.round}.`, playerId: best.pid });
  if (worst && worst.net < 0) out.push({ title: 'Worst Bet of the Night', text: `${nm(worst.pid)} lost ${-worst.net} in round ${worst.round}.`, playerId: worst.pid });
  out.push({ title: 'The Real Mark of the Night', text: 'PLACEHOLDER: fastest actual run shown tonight, with its date.' });
  return out;
}
