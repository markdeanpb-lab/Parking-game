// Browser round source for the web edition: the same adapter contract as server/net/roundsource.mjs (createRound,
// settleRound, betRevealOrder, inPlayMarket, personaliseCommentary, sessionSuperlatives, betReactionLines, ...),
// running the REAL game module (server/game/round.mjs) on DB-shaped shims. Falls back to the bundled fixture round if
// the game module throws, so a party never stops.
import * as G from '../server/game/round.mjs';
import { fallbackSettle, fmtTime } from '../server/net/bets.mjs';
import { decorateFixture, fixtureInPlayMarket, fixtureBetRevealOrder, fixtureSuperlatives } from '../server/net/fixturefx.mjs';
import { GameError } from '../server/net/game.mjs';

export function createWebRoundSource({ hist, sess, fixture, log = console }) {
  const game = typeof G.createRound === 'function' ? G : null;
  const has = (name) => !!game && typeof game[name] === 'function';

  function fixtureRound(players, roundNumber, settings) {
    if (!fixture) throw new Error('no fixture round bundled');
    const r = JSON.parse(JSON.stringify(fixture));
    const id = `fixture-${Date.now().toString(36)}-${roundNumber}`;
    r.id = id; r.number = roundNumber;
    r.public.roundId = id; r.public.number = roundNumber;
    r.racePlan.roundId = id;
    const keys = Object.keys(r.private);
    const priv = {};
    players.forEach((p, i) => { priv[p.id] = r.private[keys[i % keys.length]]; });
    r.private = priv;
    r.hidden = { fixture: true };
    r.source = 'fixture';
    return decorateFixture(r, { players, roundNumber, settings });
  }

  const FIXTURE_FX = { betRevealOrder: fixtureBetRevealOrder, inPlayMarket: fixtureInPlayMarket };
  const call = (name, round, ...args) => {
    if (round?.source === 'fixture') return FIXTURE_FX[name]?.(round, ...args);
    if (!game || (round && round.source !== 'game') || !has(name)) return undefined;
    try { return game[name](round, ...args); } catch (e) { log.warn(`[markrun] ${name} failed:`, e.message); return undefined; }
  };

  return {
    sourceName: () => (game ? 'game' : 'fixture'),
    hasExport: has,
    async createRound({ players, roundNumber, settings }) {
      if (game) {
        try {
          const r = await game.createRound({ hist, sess, players: players.map((p) => ({ id: p.id, name: p.name })), roundNumber, settings, rng: Math.random });
          if (!r?.public?.runners?.length || !r.racePlan) throw new Error('createRound returned an incomplete round');
          r.source = 'game';
          return r;
        } catch (e) { log.error('[markrun] createRound failed - using the fixture round:', e.stack || e.message); }
      }
      return fixtureRound(players, roundNumber, settings);
    },
    inPlayAvailable: (round) => round?.source === 'fixture' || (round?.source === 'game' && has('inPlayMarket')),
    betRevealOrder: (round, betsByPlayer, bankrolls, players) => call('betRevealOrder', round, betsByPlayer, bankrolls, players),
    inPlayMarket: (round) => call('inPlayMarket', round),
    personaliseCommentary: (round, betsByPlayer, players) => call('personaliseCommentary', round, betsByPlayer, players, round?.racePlan),
    sessionSuperlatives(history, players) {
      if (!has('sessionSuperlatives')) return history.some((h) => h.round?.hidden?.fixture) ? fixtureSuperlatives(history, players) : undefined;
      try { return game.sessionSuperlatives(history, players); } catch (e) { log.warn('[markrun] sessionSuperlatives failed:', e.message); return undefined; }
    },
    betReactionLines(round, betsByPlayer, players) {
      if (!game || round?.source !== 'game' || !has('betReactionLines')) return [];
      try { return game.betReactionLines(round, betsByPlayer, players) || []; } catch (e) { log.warn('[markrun] betReactionLines failed:', e.message); return []; }
    },
    async settleRound(round, betsByPlayer, bankrolls) {
      let res = null;
      if (game && round.source === 'game' && has('settleRound')) {
        try { res = await game.settleRound(round, betsByPlayer, bankrolls); } catch (e) { log.error('[markrun] settleRound failed - using fallback settlement:', e.stack || e.message); }
      }
      const fb = fallbackSettle(round, betsByPlayer, bankrolls);
      if (!res) return fb;
      res.finishOrder ||= fb.finishOrder;
      res.finishOrder = res.finishOrder.map((f) => ({ ...f, timeText: f.timeText || fmtTime(f.officialS) }));
      res.reveal ||= [];
      res.clueReview ||= [];
      res.awards ||= [];
      res.commentary ||= [];
      res.archetype ||= null;
      res.payouts ||= {};
      for (const pid of Object.keys(betsByPlayer)) {
        const p = res.payouts[pid];
        if (!p || typeof p.bankroll !== 'number' || !Number.isFinite(p.bankroll)) res.payouts[pid] = fb.payouts[pid];
      }
      return res;
    },
    // "Refresh Historical Data" needs Node + the internet: not possible in the browser. Rebuild + re-upload the zip instead.
    runRefresh() { throw new GameError('Refreshing needs the home-computer edition. New data = rebuild the web zip (npm run build:web) and re-upload it.'); },
  };
}
