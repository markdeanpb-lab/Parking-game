// Bet validation + a fallback settlement used only when server/game/round.mjs is unavailable.

export function validateBets(pub, bets, bankroll) {
  if (!Array.isArray(bets)) return { ok: false, error: 'Bets must be a list.' };
  const rules = pub.rules || {};
  const minStake = rules.minStake ?? 10;
  const maxBets = rules.maxBetsPerPlayer ?? 3;
  if (bets.length > maxBets) return { ok: false, error: `Max ${maxBets} bets per round.` };
  const runners = new Set(pub.runners.map((r) => r.id));
  const matchups = new Map((pub.matchups || []).map((m) => [m.id, m]));
  const out = [];
  const seen = new Set();
  let total = 0;
  for (const b of bets) {
    if (!b || typeof b !== 'object') return { ok: false, error: 'Bad bet.' };
    const stake = Math.floor(Number(b.stake));
    if (!Number.isFinite(stake) || stake < minStake) return { ok: false, error: `Minimum stake is ${minStake}.` };
    if (b.type === 'win') {
      if (!runners.has(b.runnerId)) return { ok: false, error: 'Unknown runner.' };
      const k = `win:${b.runnerId}`;
      if (seen.has(k)) return { ok: false, error: 'Duplicate bet.' };
      seen.add(k);
      out.push({ type: 'win', runnerId: b.runnerId, stake });
    } else if (b.type === 'h2h') {
      const m = matchups.get(b.matchupId);
      if (!m) return { ok: false, error: 'Unknown matchup.' };
      if (b.pick !== m.a && b.pick !== m.b) return { ok: false, error: 'Pick must be one of the matchup runners.' };
      const k = `h2h:${b.matchupId}`;
      if (seen.has(k)) return { ok: false, error: 'One pick per matchup.' };
      seen.add(k);
      out.push({ type: 'h2h', matchupId: b.matchupId, pick: b.pick, stake });
    } else if (b.type === 'prop') {
      const pr = (pub.props || []).find((x) => x.id === b.propId);
      if (!pr) return { ok: false, error: 'Unknown prop.' };
      if (b.pick !== 'yes' && b.pick !== 'no') return { ok: false, error: 'Pick yes or no.' };
      const k = `prop:${b.propId}`;
      if (seen.has(k)) return { ok: false, error: 'One pick per prop.' };
      seen.add(k);
      out.push({ type: 'prop', propId: b.propId, pick: b.pick, stake });
    } else return { ok: false, error: 'Unknown bet type.' };
    total += stake;
  }
  if (total > bankroll) return { ok: false, error: `You only have ${bankroll} to bet.` };
  return { ok: true, bets: out, total };
}

export function fmtTime(s) {
  s = Math.round(s);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Minimal settlement from the race plan (fixture / dev mode only).
export function fallbackSettle(round, betsByPlayer, bankrolls) {
  const plan = round.racePlan;
  const pub = round.public;
  const byId = new Map(plan.runners.map((r) => [r.id, r]));
  const order = plan.finishOrder;
  const place = new Map(order.map((id, i) => [id, i + 1]));
  const finishOrder = order.map((id, i) => ({ runnerId: id, place: i + 1, officialS: byId.get(id).officialS, timeText: fmtTime(byId.get(id).officialS) }));
  const payouts = {};
  for (const [pid, bets] of Object.entries(betsByPlayer)) {
    let staked = 0, back = 0;
    const res = (bets || []).map((b) => {
      staked += b.stake;
      let won = false, returned = 0;
      if (b.type === 'win') {
        const r = pub.runners.find((x) => x.id === b.runnerId);
        won = place.get(b.runnerId) === 1;
        returned = won ? Math.round(b.stake * (r?.odds?.win ?? 2)) : 0;
      } else if (b.type === 'inplay') {
        won = place.get(b.runnerId) === 1;
        returned = won ? Math.round(b.stake * (Number(b.odds) || 2)) : 0;
      } else if (b.type === 'prop') { // fixture mode can't settle props: void, stake returned
        back += b.stake; return { ...b, won: false, returned: b.stake, void: true };
      } else {
        const m = (pub.matchups || []).find((x) => x.id === b.matchupId);
        const other = m.a === b.pick ? m.b : m.a;
        won = place.get(b.pick) < place.get(other);
        returned = won ? Math.round(b.stake * (m.a === b.pick ? m.odds.a : m.odds.b)) : 0;
      }
      back += returned;
      return { ...b, won, returned };
    });
    const bank = (bankrolls[pid] ?? 0) - staked + back;
    payouts[pid] = { bets: res, net: back - staked, bankroll: bank };
  }
  const winner = pub.runners.find((r) => r.id === order[0]);
  return {
    roundId: pub.roundId,
    finishOrder,
    reveal: order.map((id) => ({
      runnerId: id, date: null, dateText: 'Fixture round', eventNumber: null, overallPosition: null, ageGrade: null,
      stravaTitle: '(fixture: no reveal data)', stravaDescription: '', finsburyNumber: null, wasPB: false,
      pacingSource: byId.get(id).pacingSource, funFacts: [],
    })),
    clueReview: [],
    archetype: { key: 'fixture', label: 'Fixture race', blurb: 'Development fixture — the real game module is not loaded.' },
    payouts,
    awards: [],
    commentary: [{ text: `${winner?.nickname || order[0]} takes it! What a race.`, speaker: 'jeff' }],
  };
}
