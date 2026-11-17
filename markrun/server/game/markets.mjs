// Iteration-2 markets: prop bets, the in-play HALFWAY MARKET, the bet reveal sequence and the finale superlatives.
import { timeAtDistance, distanceAt, LAP_M } from './raceplan.mjs';
import { winProbs, oddsFromProb, spokenOdds, MODEL_DEFAULTS } from './model.mjs';
import { pickLine } from './memory.mjs';
import { fill, fmtTime } from './text.mjs';
import { makeRng } from './rng.mjs';

// ---------- props ----------
// Base rate of "a funfair visitor in the field" in non-funfair rounds, measured with tools/simulate.mjs (prop.yesRate).
export const FUNFAIR_BASE_RATE = 0.10;
// P(a funfair-goer wins The Funfair Stakes), measured with tools/simulate.mjs (props.funfairStakesVisitorWins).
export const FUNFAIR_STAKES_VISITOR_WIN = 0.41;

// Base rates measured with tools/simulate.mjs (block "props"); constants, so a price never depends on this round's result.
export const PROP_BASE = { photo: 0.2, latelead: 0.3, funfair_open: FUNFAIR_BASE_RATE };

// At most one cheap side bet per round, and only where it makes sense:
//  - The Funfair Stakes: "Will one of the funfair-goers win?"
//  - "Will anyone visit the funfair?" only when a diversion run could be drawn this round (offered half the time then)
//  - otherwise sometimes a photo-finish or late-lead-change prop, sometimes nothing (props: [])
export function makeProps({ theme, perfs, plan, settings = {}, rng, divOpen = true }) {
  const margin = settings.margin ?? MODEL_DEFAULTS.margin;
  const mk = (id, text, p, outcome) => {
    const y = oddsFromProb(p, margin), n = oddsFromProb(1 - p, margin);
    return { pub: { id, text, odds: { yes: y.win, no: n.win, displayYes: y.display, displayNo: n.display } }, outcome };
  };
  let prop = null;
  if (theme?.funfair) {
    const visitors = new Set(plan.runners.filter((r) => r.diversions?.length).map((r) => r.id));
    prop = mk('funfair', 'Will one of the funfair-goers win?', FUNFAIR_STAKES_VISITOR_WIN, visitors.has(plan.finishOrder[0]) ? 'yes' : 'no');
  } else {
    const r = rng ? rng.next() : 0;
    if (divOpen && r < (settings.funfairPropRate ?? 0.5)) {
      prop = mk('funfair', 'Will anyone visit the funfair?', settings.funfairPropBase ?? PROP_BASE.funfair_open, perfs.some((p) => p.diversions?.length) ? 'yes' : 'no');
    } else if (r < 0.75) {
      const which = rng && rng.chance(0.5) ? 'photo' : 'latelead';
      if (which === 'photo') prop = mk('photo', 'Photo finish? Won by two seconds or less', PROP_BASE.photo, plan.summary.winningMarginS <= 2 ? 'yes' : 'no');
      else prop = mk('latelead', 'Will the lead change in the last kilometre?', PROP_BASE.latelead, plan.events.some((e) => e.type === 'lead_change' && e.atM > 4000) ? 'yes' : 'no');
    }
  }
  return prop ? { props: [prop.pub], outcomes: { [prop.pub.id]: prop.outcome } } : { props: [], outcomes: {} };
}

// ---------- in-play HALFWAY MARKET ----------
// Population constants (all main runs): typical lap-two / lap-one ratio and the spread of lap two around it.
let lapStats = { ratio: 1.04, sd: 18 };
const lapModel = () => lapStats;
export function setLapStats(data) {
  const xs = data.main.map((p) => [p.features?.lap1_s, p.features?.lap2_s]).filter(([a, b]) => a && b);
  const ratio = xs.reduce((s, [a, b]) => s + b / a, 0) / xs.length;
  const dev = xs.map(([a, b]) => Math.abs(b - ratio * a)).sort((x, y) => x - y);
  const sd = 1.4826 * dev[Math.floor(dev.length / 2)]; // robust spread (a few odd lap splits shouldn't flatten the market)
  lapStats = { ratio, sd };
  return lapStats;
}

export function inPlayMarket(round) {
  const plan = round.racePlan;
  if (!plan) return null;
  const { ratio, sd } = lapModel(round);
  const tStar = Math.min(...plan.runners.map((r) => timeAtDistance(r.progress, LAP_M)));
  const rows = plan.runners.map((r) => {
    const d = Math.max(1, distanceAt(r.progress, tStar));
    const gapS = Math.max(0, (LAP_M - d) / (d / tStar)); // on-screen: distance behind at the leader's current pace
    return { runnerId: r.id, d, gapS };
  }).sort((a, b) => b.d - a.d);
  // projected finish = halfway time x (1 + typical lap-two ratio); the rest is lap-two uncertainty
  const mus = rows.map((x) => (tStar + x.gapS) * (1 + ratio));
  const probs = winProbs(mus, sd * 1.15).map((q) => Math.max(q, 0.035)); // cap the drift at about 25/1
  const margin = round.hidden?.settings?.margin ?? MODEL_DEFAULTS.margin;
  const odds = {};
  rows.forEach((x, i) => { const o = oddsFromProb(probs[i], margin); odds[x.runnerId] = { win: o.win, display: o.display }; });
  return {
    atM: LAP_M,
    standings: rows.map((x, i) => ({ runnerId: x.runnerId, place: i + 1, gapS: Math.round(x.gapS * 10) / 10 })),
    odds,
  };
}

// ---------- bet reveal ----------
const RV = {
  rv_tiny: ['{name} dips a toe: {stake} on {a}.', 'A nervous {stake} from {name} on {a}. Pam approves of the restraint.', '{name}: {stake} on {a}. Pocket money.', '{name}: {stake} on {a}. A cautious toe in the water.', '{name} has risked a modest {stake} on {a}. The bookie yawns.', '{stake} on {a} from {name}. Mild interest, no more.', '{name}, {stake} on {a}. Loose change from the sofa cushions.'],
  rv_mid: ['{name} likes {a}. {stake} parkpounds of like.', '{stake} on {a} for {name}. Middle of the road. Very Volvo.', '{name} has {a} onside: {stake} at {odds}.', '{name} has {stake} on {a} at {odds}.', '{name} puts {stake} on {a}. A proper bet, that.', '{a} carries {stake} of {name}\'s parkpounds.', '{name} goes {stake} on {a}. Reasonable. Suspiciously reasonable.'],
  rv_fav: ['{name} goes with the crowd: {a}, {stake}.', 'Favourite backer {name}: {stake} on {a}. Nobody tell the romantics.', '{name} is with the favourite, {a}. {stake} parkpounds.', '{name} backs the jolly: {stake} on {a}.', '{stake} on the favourite {a}, from {name}. Safety first.'],
  rv_longshot: ['{name} is chasing a fairy tale: {stake} on {a} at {odds}.', '{odds} about {a}, and {name} is having some!', '{name} has {stake} on {a}, the {odds} outsider! Somebody knows something. Or nothing.', 'Look at this: {name} on {a} at {odds}! Dreamer!', '{name} wants the shock: {stake} on {a} at {odds}.'],
  rv_allin: ['{name} has gone all in, nearly: {pct} percent on {a}!', 'Gulp. {name}, {pct} percent of the bankroll, {a}.', '{name} has put {pct} percent of the bankroll on {a}! Brave doesn\'t cover it.', '{pct} percent of everything {name} owns, on {a}. Hold onto something.', '{name}: {stake} on {a}. That\'s {pct} percent of the lot.'],
  rv_biggest: ['The headline bet: {name}, {stake} on {a}. Deep breaths.', 'And topping the bill: {stake} from {name} on {a}!', 'And the big one: {name}, {stake} on {a}!', 'Saving the biggest till last: {name} has {stake} on {a}!', 'Here it is. The serious money. {name}, {stake}, {a}!'],
  rv_clash: ['They\'ve BOTH backed {a}! {name} joins {other}. Shared joy, or shared blame.', '{name} is on {a} as well! Same runner as {other}. How romantic. How risky.', 'Snap! {name} has {a} too. {other} won\'t be pleased to share.'],
  rv_oppose: ['{name} has {a} to beat {b}. {other} has the opposite! Pistols at dawn.', 'Direct opposition! {name} backs {a} over {b}, against {other}.', 'Head to head, sofa to sofa: {name} says {a}, {other} says {b}.'],
  rv_oppose_win: ['{name} has {b} to beat {a}. That\'s {other}\'s runner. Petty. Delicious.', '{name} is betting against {other}\'s pick: {b} to beat {a}.'],
  rv_h2h: ['{name} has {a} over {b} in the head-to-head.', 'Grudge match money from {name}: {a} to beat {b}.', '{name} has {a} to beat {b}, {stake} on it.', 'Side bet from {name}: {a} over {b}.', '{name} reckons {a} has the beating of {b}.'],
  rv_prop_yes: ['{name} says yes: {stake} on "{prop}"', '{name} goes yes on the side bet. {stake} parkpounds.'],
  rv_prop_no: ['{name} says no to "{prop}" {stake} on it.', '{name} says no on the side bet. {stake} parkpounds of scepticism.'],
  rv_hot: ['Hmm. {name} looks very sure about {a}. Very sure.', '{name} is on {a}. Has somebody had a word in their ear?'],
  rv_none: ['{name} keeps the wallet shut. Not a penny.', 'Zero from {name}. A spectator. A coward. A genius?', '{name} hasn\'t bet a single parkpound. Wise. Cowardly, but wise.', 'Nothing at all from {name}. Saving it for later, apparently.', '{name} sits this one out. Arms folded.'],
  bet_closed: ['That\'s the book closed! Let\'s go racing!', 'Bets are in! Runners to the line!', 'All the money is down. Here we go!', 'The betting window slams shut! Off we go!'],
};
const SPEAKER = { rv_tiny: 'pam', rv_mid: 'jeff', rv_fav: 'pam', rv_longshot: 'jeff', rv_allin: 'jeff', rv_biggest: 'jeff', rv_clash: 'jeff', rv_oppose: 'jeff', rv_oppose_win: 'pam', rv_h2h: 'pam', rv_prop_yes: 'jeff', rv_prop_no: 'pam', rv_hot: 'pam', rv_none: 'pam', bet_closed: 'jeff' };

export function betRevealOrder(round, betsByPlayer, bankrolls, players, { rng = makeRng(), mem = null, closing = false } = {}) {
  const pub = round.public;
  const R = new Map(pub.runners.map((r) => [r.id, r]));
  const fav = [...pub.runners].sort((a, b) => a.odds.win - b.odds.win)[0];
  const name = (pid) => players.find((p) => p.id === pid)?.name ?? pid;
  const items = [];
  for (const p of players) {
    const bets = betsByPlayer[p.id] || [];
    const bank = Math.max(1, bankrolls[p.id] ?? round.hidden?.settings?.startingBankroll ?? 1000);
    if (!bets.length) items.push({ playerId: p.id, bet: null, frac: -1 });
    for (const b of bets) items.push({ playerId: p.id, bet: b, frac: b.stake / bank });
  }
  items.sort((a, b) => a.frac - b.frac);
  const out = [];
  const seenWin = new Map(); // runnerId -> [playerId]
  const seenH2h = new Map(); // matchupId -> {playerId, pick}
  const lastIdx = items.length - 1;
  items.forEach((it, idx) => {
    const v = { name: name(it.playerId) };
    let g;
    const b = it.bet;
    if (!b) g = 'rv_none';
    else if (b.type === 'win' || b.type === 'inplay') {
      const r = R.get(b.runnerId);
      Object.assign(v, { a: r?.nickname, stake: b.stake, odds: spokenOdds(r?.odds?.display || 'evens'), pct: Math.round(it.frac * 100) });
      const others = (seenWin.get(b.runnerId) || []).filter((x) => x !== it.playerId);
      const opp = [...seenH2h.values()].find((h) => h.playerId !== it.playerId && h.against === b.runnerId);
      const hot = round.hidden?.clues?.[b.runnerId]?.private?.[it.playerId];
      if (others.length) { g = 'rv_clash'; v.other = name(others[0]); }
      else if (opp) { g = 'rv_oppose_win'; v.other = name(opp.playerId); v.b = R.get(opp.pick)?.nickname; }
      else if (idx === lastIdx && it.frac >= 0.12 && items.length > 1) g = 'rv_biggest';
      else if (it.frac >= 0.4) g = 'rv_allin';
      else if (hot?.tier === 'hot' && hot.polarity > 0 && rng.chance(0.5)) g = 'rv_hot';
      else if ((r?.odds?.win ?? 0) >= 9) g = 'rv_longshot';
      else if (r?.id === fav.id) g = 'rv_fav';
      else if (it.frac < 0.06) g = 'rv_tiny';
      else g = 'rv_mid';
      (seenWin.get(b.runnerId) || seenWin.set(b.runnerId, []).get(b.runnerId)).push(it.playerId);
    } else if (b.type === 'h2h') {
      const m = pub.matchups.find((x) => x.id === b.matchupId);
      const other = m ? (m.a === b.pick ? m.b : m.a) : null;
      Object.assign(v, { a: R.get(b.pick)?.nickname, b: R.get(other)?.nickname, stake: b.stake });
      const prev = seenH2h.get(b.matchupId);
      const winOpp = (seenWin.get(other) || []).find((x) => x !== it.playerId);
      if (prev && prev.playerId !== it.playerId && prev.pick !== b.pick) { g = 'rv_oppose'; v.other = name(prev.playerId); }
      else if (winOpp) { g = 'rv_oppose_win'; v.other = name(winOpp); [v.a, v.b] = [R.get(other)?.nickname, R.get(b.pick)?.nickname]; }
      else g = 'rv_h2h';
      seenH2h.set(b.matchupId, { playerId: it.playerId, pick: b.pick, against: other });
    } else if (b.type === 'prop') {
      const pr = (pub.props || []).find((x) => x.id === b.propId);
      Object.assign(v, { stake: b.stake, prop: pr?.text || 'the prop' });
      g = b.pick === 'yes' ? 'rv_prop_yes' : 'rv_prop_no';
    } else g = 'rv_mid';
    const text = fill(pickLine(rng, mem, g, RV[g]), v);
    out.push({ playerId: it.playerId, bet: b, line: { speaker: SPEAKER[g], text } });
  });
  if (closing) out.push({ playerId: null, bet: null, line: { speaker: 'jeff', text: pickLine(rng, mem, 'bet_closed_rv', RV.bet_closed) } });
  return out;
}

// ---------- finale superlatives ----------
// history: [{ number, round: { public, hidden }, bets, results, bankrolls }]
export function sessionSuperlatives(history, players) {
  const out = [];
  const name = (pid) => players.find((p) => p.id === pid)?.name ?? pid;
  let bigWin = null, worst = null, misleading = null, fastest = null, funfair = { visits: 0, wins: 0 }, hotHero = {};
  for (const h of history) {
    const pub = h.round?.public, hid = h.round?.hidden, res = h.results;
    if (!pub || !res) continue;
    const R = new Map(pub.runners.map((r) => [r.id, r]));
    const place = new Map((res.finishOrder || []).map((f) => [f.runnerId, f.place]));
    for (const [pid, P] of Object.entries(res.payouts || {})) {
      for (const b of P.bets || []) {
        const gain = (b.returned || 0) - b.stake;
        const rid = b.runnerId || b.pick;
        if (b.won && (!bigWin || gain > bigWin.gain)) bigWin = { pid, gain, b, nick: R.get(rid)?.nickname, n: h.number };
        if (!b.won && !b.push && (!worst || b.stake > worst.b.stake || (b.stake === worst.b.stake && (place.get(rid) || 0) > worst.place))) worst = { pid, b, nick: R.get(rid)?.nickname, place: place.get(rid), n: h.number };
        const hot = hid?.clues?.[rid]?.private?.[pid];
        if (hot?.tier === 'hot') hotHero[pid] = (hotHero[pid] || 0) + gain;
      }
    }
    for (const c of res.clueReview || []) {
      if (c.verdict !== 'red_herring') continue;
      const clue = hid?.clues?.[c.runnerId];
      const full = c.owner === 'public' ? clue?.public : clue?.private?.[c.owner];
      const strength = Math.abs(full?.signal || 0) + (full?.style === 'tipster' ? 3 : 0);
      if (!misleading || strength > misleading.strength) misleading = { strength, text: c.text, nick: R.get(c.runnerId)?.nickname, place: place.get(c.runnerId), n: h.number };
    }
    for (const rv of res.reveal || []) {
      const f = (res.finishOrder || []).find((x) => x.runnerId === rv.runnerId);
      if (f && (!fastest || f.officialS < fastest.s)) fastest = { s: f.officialS, dateText: rv.dateText, title: rv.stravaTitle, nick: R.get(rv.runnerId)?.nickname, n: h.number };
    }
    const div = (hid?.runners || []).filter((r) => r.diverted);
    funfair.visits += div.length;
    if (div.some((r) => r.id === res.finishOrder?.[0]?.runnerId)) funfair.wins++;
  }
  const ord = (n) => { const s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  if (bigWin) out.push({ title: 'Biggest Win', playerId: bigWin.pid, text: `${name(bigWin.pid)} turned ${bigWin.b.stake} into ${bigWin.b.returned} on ${bigWin.nick} in round ${bigWin.n}.` });
  if (worst) out.push({ title: 'Worst Bet of the Night', playerId: worst.pid, text: `${name(worst.pid)} put ${worst.b.stake} on ${worst.nick}, who finished ${worst.place ? ord(worst.place) : 'nowhere'}. Round ${worst.n}. We don't talk about round ${worst.n}.` });
  if (misleading) out.push({ title: 'Most Misleading Clue', text: `"${misleading.text}" It was about ${misleading.nick}, who came home ${misleading.place ? ord(misleading.place) : 'eventually'} in round ${misleading.n}.` });
  if (fastest) out.push({ title: 'The Real Mark of the Night', text: `The quickest run we watched: ${fmtTime(fastest.s)} on ${fastest.dateText}${fastest.title ? ` ("${fastest.title}")` : ''}, raced tonight as ${fastest.nick}.` });
  if (funfair.visits) out.push({ title: 'Funfair Moments', text: funfair.wins ? `${funfair.visits} trips to the funfair tonight, and ${funfair.wins === 1 ? 'one of them still won' : `${funfair.wins} of them still won`}. Candyfloss: performance-enhancing.` : `${funfair.visits} trip${funfair.visits === 1 ? '' : 's'} to the funfair tonight. Not one of them won. Candyfloss is not a gel.` });
  const hh = Object.entries(hotHero).sort((a, b) => b[1] - a[1])[0];
  if (hh && hh[1] > 0) out.push({ title: 'Hot Tip Hero', playerId: hh[0], text: `${name(hh[0])} made ${hh[1]} parkpounds backing their hot tips. Insider trading, but legal.` });
  const champ = [...players].sort((a, b) => (b.bankroll ?? 0) - (a.bankroll ?? 0))[0];
  if (champ && players.length > 1) out.push({ title: 'Champion of the Sofa', playerId: champ.id, text: `${champ.name} finishes top with ${champ.bankroll} parkpounds.` });
  return out;
}
