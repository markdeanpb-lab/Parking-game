// Browser-safe payout maths (no imports). Used by settlement AND by the TV for live "if it ended now" numbers.

// Multiplier (final round = 2) doubles the WINNINGS; the stake comes back once.
export function payReturn(stake, decimal, mult = 1) { return Math.round(stake * (1 + mult * (decimal - 1))); }

// Underdog Special: the boosted pick's winnings (fractional part) are multiplied by `boost`.
export function boostedDecimal(decimal, boost = 1) { return 1 + (decimal - 1) * boost; }

const winDecimal = (pub, b) => {
  if (b.type === 'inplay') return typeof b.odds === 'number' ? b.odds : b.odds?.win ?? 0;
  const dec = pub.runners.find((r) => r.id === b.runnerId)?.odds?.win ?? 0;
  return isBoosted(pub, b) ? boostedDecimal(dec, pub.underdogSpecial.boost) : dec;
};
// a bet uses the Underdog Special if it says so (type 'special' or win + boost:true) and the special belongs to that player
export function isBoosted(pub, b, playerId = b.playerId) {
  const sp = pub.underdogSpecial;
  return !!sp && (b.type === 'special' || (b.type === 'win' && b.boost === true)) && (playerId == null || playerId === sp.playerId);
}

// "If the race ended now" net per player. orderNow: runner ids in current race order (leader first).
// Win / special / in-play (locked odds) / head-to-head bets settle against orderNow; props are unresolved (count 0).
export function provisionalNet(publicRound, betsByPlayer, orderNow) {
  const pub = publicRound;
  const mult = pub.payoutMultiplier ?? 1;
  const pos = new Map((orderNow || []).map((id, i) => [id, i]));
  const out = {};
  for (const [pid, bets] of Object.entries(betsByPlayer || {})) {
    let net = 0, boostUsed = false;
    for (const b of bets || []) {
      if (b.type === 'prop') continue;
      if (b.type === 'win' || b.type === 'inplay' || b.type === 'special') {
        let dec = winDecimal(pub, { ...b, playerId: pid });
        if (isBoosted(pub, b, pid)) { if (boostUsed) dec = pub.runners.find((r) => r.id === b.runnerId)?.odds?.win ?? 0; boostUsed = true; }
        net += orderNow?.[0] === b.runnerId ? payReturn(b.stake, dec, mult) - b.stake : -b.stake;
      } else if (b.type === 'h2h') {
        const m = (pub.matchups || []).find((x) => x.id === b.matchupId);
        if (!m) continue;
        const other = m.a === b.pick ? m.b : m.a;
        const won = (pos.get(b.pick) ?? 99) < (pos.get(other) ?? 99);
        net += won ? payReturn(b.stake, m.a === b.pick ? m.odds.a : m.odds.b, mult) - b.stake : -b.stake;
      }
    }
    out[pid] = net;
  }
  return out;
}
