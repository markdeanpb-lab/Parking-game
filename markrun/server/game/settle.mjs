// Settlement: payouts, reveal cards, clue post-mortem, archetype, awards, results commentary, drinks.
import { fmtTime } from './text.mjs';
import { ARCHETYPES } from './select.mjs';
import { resultsLines } from './commentary.mjs';
import { pickLine } from './memory.mjs';
import { fill } from './text.mjs';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function dateText(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return `${WEEKDAYS[dt.getUTCDay()]} ${d} ${MONTHS[m - 1]} ${y}`;
}
const ordinal = (n) => { const s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };

// ---------- reveal ----------
export function revealCard(runnerId, perf) {
  const f = perf.facts || {};
  const act = f.activity || {};
  const desc = (act.description || '').replace(/\s+/g, ' ').trim();
  const finsPB = f.was_finsbury_pb === true;
  const parkrunPB = perf.result.pbFlag === 'PB';
  const fun = [];
  if (parkrunPB) fun.push('A genuine parkrun PB that morning. Medals all round (there are no medals).');
  else if (finsPB) fun.push('A new Finsbury Park best at the time.');
  if (perf.diversions?.length) {
    fun.push(/fun ?fair/i.test(act.name || '') || /fun ?fair/i.test(desc)
      ? 'His GPS took a detour round the funfair (course diverted that weekend).'
      : 'Course diverted around the fairground on a bank-holiday weekend, and his GPS went the long way round.');
  }
  const hr = Array.isArray(perf.hr) ? perf.hr.filter((x) => x > 60 && x < 230) : [];
  if (hr.length > 100) {
    const avg = Math.round(hr.reduce((a, b) => a + b, 0) / hr.length), max = Math.max(...hr);
    fun.push(`Heart rate averaged ${avg} bpm and peaked at ${max}.`);
  }
  const sp = perf.splits || perf.features?.splits;
  if (Array.isArray(sp) && sp.length === 5) {
    const i = sp.indexOf(Math.min(...sp)), j = sp.indexOf(Math.max(...sp));
    fun.push(`Quickest kilometre: the ${ordinal(i + 1)} (${fmtTime(sp[i])}). Slowest: the ${ordinal(j + 1)} (${fmtTime(sp[j])}).`);
  }
  const l1 = perf.features?.lap1_s, l2 = perf.features?.lap2_s;
  if (l1 && l2) {
    const d = Math.round(l2 - l1);
    if (d <= -3) fun.push(`Negative split: lap two was ${-d} seconds quicker than lap one.`);
    else if (d >= 25) fun.push(`Lap two was ${d} seconds slower than lap one. The Hill sends its regards.`);
  }
  if (act.cadence) fun.push(`Average cadence: ${Math.round(act.cadence * 2)} steps per minute.`);
  if (act.relative_effort) fun.push(`Strava relative effort: ${Math.round(act.relative_effort)}.`);
  if (act.kudos != null) fun.push(act.kudos === 0 ? 'Received zero kudos on Strava. Brutal.' : `Collected ${act.kudos} kudos on Strava.`);
  const w = f.weather;
  if (w?.temp_c != null) fun.push(`Conditions: ${Math.round(w.temp_c)}°C${w.wind_kmh != null ? `, wind ${Math.round(w.wind_kmh)} km/h` : ''}.`);
  if (perf.pacingSource === 'estimated_typical') fun.push('No GPS trace that day: pacing reconstructed from his typical race shape.');
  return {
    runnerId,
    date: perf.date,
    dateText: dateText(perf.date),
    eventNumber: perf.result.eventNumber,
    overallPosition: perf.result.position,
    ageGrade: perf.result.ageGrade,
    stravaTitle: act.name || null,
    stravaDescription: desc.length > 180 ? `${desc.slice(0, 177).replace(/\s+\S*$/, '')}...` : desc,
    finsburyNumber: f.finsbury_number ?? null,
    wasPB: finsPB || parkrunPB,
    pbKind: parkrunPB ? 'parkrun' : finsPB ? 'finsbury' : null,
    pacingSource: perf.pacingSource,
    pool: perf.pool,
    funFacts: fun.slice(0, 5),
  };
}

// ---------- clue review ----------
const QUIPS = {
  useful: [
    'Spot on. That clue was practically a tip-off.', 'Bang on the money. Whoever read that properly deserves a biscuit.',
    'Sherlock would be proud. Watson would still be confused.', 'That one told you everything. Did you listen?',
    'A genuine nugget of wisdom. Rare as a quiet marshal.', 'The clue called it. The clue is smug about it.',
    'Gold dust. Not literally. Legally it\'s just a fact.', 'Turns out the numbers don\'t lie. This time.',
    'If you ignored that one, that\'s on you.', 'Tip-top intel. MI5 are recruiting.', 'Read it, believe it, bank it.',
    'The rare clue that did exactly what it said on the tin.', 'A clue so useful it should be framed.',
    'Prophetic. Slightly annoying, but prophetic.', 'That clue earned its keep.',
  ],
  red_herring: [
    'Total red herring. True, and utterly useless.', 'A kipper of a clue. Smoked you, didn\'t it?',
    'Facts: correct. Conclusions: catastrophic.', 'Pointed one way, the race went the other.',
    'The clue was right. The race just didn\'t read it.', 'Misdirection worthy of a magician at a children\'s party.',
    'Lured you in, then left you in the lake.', 'As reliable as a Northern line timetable.',
    'Sounded important. Was not.', 'That clue owes somebody an apology.', 'Fishy. Very fishy. Red and fishy.',
    'True story, wrong ending.', 'A clue that confidently pointed at the wrong door.',
    'The numbers said one thing. His legs said something rude.', 'Classic red herring. Served with chips.',
  ],
  neutral: [
    'Decorative. Like a parsley garnish.', 'Neither here nor there. Mostly there.', 'Interesting, in the way that weather is interesting.',
    'Harmless. Helpful as a chocolate teapot, but harmless.', 'Pure scene-setting. Lovely scenery, though.',
    'Didn\'t move the needle. Didn\'t even find the needle.', 'A fact! Just not a useful one.',
    'Background noise. Like Jeff.', 'Made no difference whatsoever. Very calming.', 'Shrug-worthy.',
    'Filed under "nice to know".', 'A clue in the same way a cone is an obstacle.',
  ],
};

const CAT_QUIPS = {
  weather: { useful: ['The weather forecast finally did something useful.', 'Turns out the thermometer knew all along.', 'Michael Fish would be proud.'],
    red_herring: ['The weather was a decoy. A damp, chilly decoy.', 'Blaming the weather? The weather says no.'], neutral: ['Weather: present. Influence: none.'] },
  training: { useful: ['The training diary does not lie. Today, anyway.', 'Miles in the legs, money in the bank.', 'All those kilometres paid off. Literally.'],
    red_herring: ['All that mileage and nothing to show for it. Classic.', 'The training log wrote a cheque the legs couldn\'t cash.'], neutral: ['A lot of kilometres, not a lot of difference.'] },
  prep: { useful: ['The pre-race routine told the whole story.', 'You could read it in the warm-up. And someone did.'],
    red_herring: ['Prepared like a pro, ran like a pro-crastinator.', 'The prep was a bluff. A double bluff, possibly.'], neutral: ['The routine made no odds. Unlike the bookie.'] },
  diary: { useful: ['The race calendar gave the game away.', 'Racing schedules: the punter\'s best friend.'],
    red_herring: ['Big race on the horizon, no effect whatsoever.', 'The diary said one thing. The legs had other plans.'], neutral: ['The calendar shrugged.'] },
};
const CAT_GROUP = { temp: 'weather', wind: 'weather', damp: 'weather', week_km: 'training', week_rel: 'training', month_km: 'training', consistency: 'training',
  long_run: 'training', hard_session: 'training', warmup: 'prep', day_before: 'prep', rest: 'prep', race_soon: 'diary', race_recent: 'diary', block: 'diary' };

function verdictFor(signal, place, n) {
  if (signal == null || Math.abs(signal) < 1.5) return 'neutral';
  const good = place <= 2, bad = place >= n - 1;
  if (signal < 0) return good ? 'useful' : bad ? 'red_herring' : 'neutral';
  return bad ? 'useful' : good ? 'red_herring' : 'neutral';
}

// ---------- awards ----------
const AWARD_TEXT = {
  clairvoyant: ['Clairvoyant', '{name} backed {a} at {odds}. Mystic Meg has been notified.'],
  backed_donkey: ['Backed the Donkey', '{name} put money on {a}, who finished last. Hee-haw.'],
  bank_of_mum: ['Bank of Mum', '{name} lost {loss} parkpounds, generously funding everyone else\'s fun.'],
  heartbreak: ['Heartbreak Hotel', '{name}\'s pick {a} lost by {gap}. A whisker. A cruel whisker.'],
  h2h_hero: ['Grudge Match Guru', '{name} called every head-to-head correctly.'],
  hedge_fund: ['Hedge Fund Manager', '{name} spread bets across {n} runners. Diversified. Terrified.'],
  sat_on_hands: ['Sat On Hands', '{name} bet nothing at all. Mysterious. Cowardly. Possibly wise.'],
  clue_whisperer: ['Clue Whisperer', '{name}\'s secret clue on {a} was gold, and {name} cashed it in.'],
  herring_victim: ['Hooked by a Herring', '{name} trusted the secret clue on {a}. The clue was a red herring.'],
  all_in: ['All In', '{name} staked {pct}% of the bankroll in one round. Nerves of steel. Brain of jelly.'],
  sensible_shoes: ['Sensible Shoes', '{name} backed the favourite, and the favourite won. Thrilling.'],
  big_winner: ['Top of the Shop', '{name} won {gain} parkpounds this round. Insufferable now.'],
};

export function settle(round, betsByPlayer = {}, bankrolls = {}, { rng, mem }) {
  const H = round.hidden;
  const pub = round.public;
  const plan = round.racePlan;
  const perfOf = new Map(H.runners.map((r) => [r.id, r]));
  const R = new Map(pub.runners.map((r) => [r.id, r]));
  const order = plan.finishOrder;
  const place = new Map(order.map((id, i) => [id, i + 1]));
  const t = (id) => perfOf.get(id).officialS;
  const bestT = Math.min(...order.map(t));
  const deadHeat = order.filter((id) => t(id) === bestT);
  const n = order.length;
  const players = H.players || Object.keys(betsByPlayer).map((id) => ({ id, name: id }));
  const finishOrder = order.map((id, i) => ({ runnerId: id, place: i + 1, officialS: t(id), timeText: fmtTime(t(id)), nickname: R.get(id).nickname, gapS: t(id) - bestT }));

  // payouts
  const payouts = {};
  for (const [pid, bets] of Object.entries(betsByPlayer || {})) {
    let staked = 0, back = 0;
    const res = (bets || []).map((b) => {
      staked += b.stake;
      let won = false, returned = 0, push = false;
      if (b.type === 'win') {
        const r = R.get(b.runnerId);
        won = deadHeat.includes(b.runnerId);
        returned = won ? Math.round((b.stake * (r?.odds?.win ?? 0)) / deadHeat.length) : 0;
      } else if (b.type === 'h2h') {
        const m = pub.matchups.find((x) => x.id === b.matchupId);
        if (m) {
          const other = m.a === b.pick ? m.b : m.a;
          if (t(b.pick) === t(other)) { push = true; returned = b.stake; }
          else { won = t(b.pick) < t(other); returned = won ? Math.round(b.stake * (m.a === b.pick ? m.odds.a : m.odds.b)) : 0; }
        }
      }
      back += returned;
      return { ...b, won, returned, ...(push ? { push: true } : {}) };
    });
    const bank = (bankrolls[pid] ?? 0) - staked + back;
    payouts[pid] = { bets: res, staked, net: back - staked, bankroll: bank };
  }
  for (const p of players) if (!payouts[p.id]) payouts[p.id] = { bets: [], staked: 0, net: 0, bankroll: bankrolls[p.id] ?? 0 };

  // clue review
  const clueReview = [];
  for (const id of order) {
    const C = H.clues[id];
    const all = [{ owner: 'public', c: C.public }, ...Object.entries(C.private).map(([pid, c]) => ({ owner: pid, c }))];
    for (const { owner, c } of all) {
      const verdict = verdictFor(c.signal, place.get(id), n);
      const grp = CAT_GROUP[c.category];
      const useCat = grp && rng.chance(0.4);
      const quip = useCat ? pickLine(rng, mem, `quip_${grp}_${verdict}`, CAT_QUIPS[grp][verdict]) : pickLine(rng, mem, `quip_${verdict}`, QUIPS[verdict]);
      clueReview.push({ runnerId: id, clueId: c.id, owner, text: c.text, category: c.category, verdict, quip });
    }
  }

  // archetype
  let key = H.archetype;
  const favId = [...pub.runners].sort((a, b) => a.odds.win - b.odds.win)[0].id;
  if (key === 'procession' && place.get(favId) === n) key = 'false_favourite';
  const A = ARCHETYPES[key] || ARCHETYPES.procession;
  const archetype = { key, label: A.label, blurb: rng.pick(A.blurbs) };

  // awards
  const awards = [];
  const nets = players.map((p) => payouts[p.id].net);
  for (const p of players) {
    const P = payouts[p.id];
    const wins = P.bets.filter((b) => b.type === 'win');
    const cands = [];
    const add = (k, score, vars) => cands.push({ k, score, vars: { name: p.name, ...vars } });
    if (!P.bets.length) add('sat_on_hands', 2, {});
    for (const b of wins) {
      const r = R.get(b.runnerId);
      if (b.won && r.odds.win >= 5) add('clairvoyant', 10 + r.odds.win, { a: r.nickname, odds: r.odds.display });
      if (b.won && b.runnerId === favId) add('sensible_shoes', 3, {});
      if (place.get(b.runnerId) === n) add('backed_donkey', 6, { a: r.nickname });
      if (place.get(b.runnerId) === 2 && t(b.runnerId) - bestT <= 3) add('heartbreak', 8, { a: r.nickname, gap: `${t(b.runnerId) - bestT} second${t(b.runnerId) - bestT === 1 ? '' : 's'}` });
      const priv = H.clues[b.runnerId].private[p.id];
      if (priv) {
        const v = verdictFor(priv.signal, place.get(b.runnerId), n);
        if (v === 'useful' && b.won) add('clue_whisperer', 9, { a: r.nickname });
        if (v === 'red_herring' && !b.won) add('herring_victim', 5, { a: r.nickname });
      }
    }
    const h2h = P.bets.filter((b) => b.type === 'h2h' && !b.push);
    if (h2h.length && h2h.every((b) => b.won)) add('h2h_hero', 4 + h2h.length, {});
    if (new Set(wins.map((b) => b.runnerId)).size >= 3) add('hedge_fund', 3, { n: new Set(wins.map((b) => b.runnerId)).size });
    const pre = bankrolls[p.id] ?? 0;
    if (pre > 0 && P.staked >= 0.8 * pre) add('all_in', 7, { pct: Math.round((100 * P.staked) / pre) });
    if (P.net < 0 && P.net === Math.min(...nets) && P.net <= -100) add('bank_of_mum', 4, { loss: -P.net });
    if (P.net >= 300 && P.net === Math.max(...nets)) add('big_winner', 6, { gain: P.net });
    cands.sort((a, b) => b.score - a.score);
    const seen = new Set();
    for (const c of cands) {
      if (seen.size >= 2) break;
      if (seen.has(c.k)) continue;
      seen.add(c.k);
      const [title, tpl] = AWARD_TEXT[c.k];
      awards.push({ playerId: p.id, key: c.k, title, text: fill(tpl, c.vars) });
    }
  }

  // commentary
  const winner = R.get(order[0]);
  const heartbreak = [];
  for (const p of players) for (const b of payouts[p.id].bets) {
    if (b.type === 'win' && place.get(b.runnerId) === 2 && t(b.runnerId) - bestT <= 3) heartbreak.push({ name: p.name, nickname: R.get(b.runnerId).nickname });
  }
  const commentary = resultsLines(rng, mem, { round, players, payouts, winner, winnerOdds: winner.odds, favId, heartbreak: heartbreak.slice(0, 1) })
    .map(({ speaker, text }) => ({ speaker, text }));

  // drinks (optional)
  let drinks;
  if (H.settings?.drinks) {
    drinks = [];
    for (const p of players) {
      const P = payouts[p.id];
      const sips = [];
      if (!P.bets.length) sips.push('No bets? Take a sip for cowardice.');
      for (const b of P.bets) {
        if (b.type === 'win' && place.get(b.runnerId) === n) sips.push(`Backed the donkey (${R.get(b.runnerId).nickname}): two sips.`);
        if (b.type === 'win' && b.won && R.get(b.runnerId).odds.win >= 5) sips.push('Longshot winner! Hand out three sips to whoever you like.');
        if (b.type === 'h2h' && !b.won && !b.push) sips.push('Lost a head-to-head: one sip.');
      }
      if (P.net >= 300) sips.push('Big winner: make a toast, then everyone else drinks.');
      for (const s of sips.slice(0, 2)) drinks.push({ playerId: p.id, text: s });
    }
    if (H.archetype === 'photo_finish') drinks.push({ playerId: null, text: 'Photo finish! Everybody drinks.' });
    else if (players.every((p) => payouts[p.id].net < 0)) drinks.push({ playerId: null, text: 'Everybody lost money. Everybody drinks.' });
  }

  return {
    roundId: pub.roundId,
    finishOrder,
    reveal: order.map((id) => ({ ...revealCard(id, H.perfs[id]), nickname: R.get(id).nickname })),
    clueReview,
    archetype,
    payouts,
    awards,
    commentary,
    ...(drinks ? { drinks } : {}),
    favouriteId: favId,
    deadHeat: deadHeat.length > 1 ? deadHeat : undefined,
  };
}
