// Thin adapter over the game module (server/game/round.mjs). Falls back to data/fixtures/round.json
// if the module is missing or throws, so the host keeps working during development.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, historyDb, sessionDb } from '../db.mjs';
import { fallbackSettle, fmtTime } from './bets.mjs';
import { decorateFixture, fixtureInPlayMarket, fixtureBetRevealOrder, fixtureSuperlatives } from './fixturefx.mjs';

const FIXTURE = path.join(ROOT, 'data', 'fixtures', 'round.json');
let game; // module or null
let loaded = false;

async function loadGame() {
  if (loaded) return game;
  loaded = true;
  game = null;
  if (process.env.MARKRUN_ROUND_SOURCE === 'fixture') return null;
  const file = path.join(ROOT, 'server', 'game', 'round.mjs');
  if (!fs.existsSync(file)) { console.warn('[markrun] server/game/round.mjs not found - using the fixture round'); return null; }
  try {
    const m = await import(pathToFileURL(file).href);
    if (typeof m.createRound === 'function') game = m;
    else console.warn('[markrun] round.mjs has no createRound export - using the fixture round');
  } catch (e) {
    console.warn('[markrun] failed to load round.mjs - using the fixture round:', e.message);
  }
  return game;
}

export function sourceName() { return game ? 'game' : 'fixture'; }
loadGame(); // eager: report the real source from the start (and fail loudly in logs at boot, not mid-game)

function fixtureRound(players, roundNumber, settings) {
  const r = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
  const id = `fixture-${Date.now().toString(36)}-${roundNumber}`;
  r.id = id; r.number = roundNumber;
  r.public.roundId = id; r.public.number = roundNumber;
  r.racePlan.roundId = id;
  // fixture private clues are keyed p1/p2; map them onto the real player ids
  const keys = Object.keys(r.private);
  const priv = {};
  players.forEach((p, i) => { priv[p.id] = r.private[keys[i % keys.length]]; });
  r.private = priv;
  r.hidden = { fixture: true };
  r.source = 'fixture';
  return decorateFixture(r, { players, roundNumber, settings });
}

export async function createRound({ players, roundNumber, settings }) {
  const g = await loadGame();
  if (g) {
    try {
      const r = await g.createRound({ hist: historyDb(), sess: sessionDb(), players: players.map((p) => ({ id: p.id, name: p.name })), roundNumber, settings, rng: Math.random });
      if (!r?.public?.runners?.length || !r.racePlan) throw new Error('createRound returned an incomplete round');
      r.source = 'game';
      return r;
    } catch (e) {
      console.error('[markrun] createRound failed - using the fixture round:', e.stack || e.message);
    }
  }
  return fixtureRound(players, roundNumber, settings);
}

// Iteration 2 (feature-detected: absent exports => the shell falls back gracefully)
const FIXTURE_FX = { betRevealOrder: fixtureBetRevealOrder, inPlayMarket: fixtureInPlayMarket };
const call = (name, round, ...args) => {
  if (round?.source === 'fixture') return FIXTURE_FX[name]?.(round, ...args);
  if (!game || (round && round.source !== 'game') || typeof game[name] !== 'function') return undefined;
  try { return game[name](round, ...args); } catch (e) { console.warn(`[markrun] ${name} failed:`, e.message); return undefined; }
};
export function hasExport(name) { return !!game && typeof game[name] === 'function'; }
export function inPlayAvailable(round) { return round?.source === 'fixture' || (round?.source === 'game' && hasExport('inPlayMarket')); }
export function betRevealOrder(round, betsByPlayer, bankrolls, players) { return call('betRevealOrder', round, betsByPlayer, bankrolls, players); }
export function inPlayMarket(round) { return call('inPlayMarket', round); }
export function personaliseCommentary(round, betsByPlayer, players) { return call('personaliseCommentary', round, betsByPlayer, players, round?.racePlan); }
export function sessionSuperlatives(history, players) {
  if (!hasExport('sessionSuperlatives')) return history.some((h) => h.round?.hidden?.fixture) ? fixtureSuperlatives(history, players) : undefined;
  try { return game.sessionSuperlatives(history, players); } catch (e) { console.warn('[markrun] sessionSuperlatives failed:', e.message); return undefined; }
}

export function betReactionLines(round, betsByPlayer, players) {
  if (!game || round?.source !== 'game' || typeof game.betReactionLines !== 'function') return [];
  try { return game.betReactionLines(round, betsByPlayer, players) || []; } catch (e) { console.warn('[markrun] betReactionLines failed:', e.message); return []; }
}

export async function settleRound(round, betsByPlayer, bankrolls) {
  const g = await loadGame();
  let res = null;
  if (g && round.source === 'game' && typeof g.settleRound === 'function') {
    try { res = await g.settleRound(round, betsByPlayer, bankrolls); } catch (e) { console.error('[markrun] settleRound failed - using fallback settlement:', e.stack || e.message); }
  }
  const fb = fallbackSettle(round, betsByPlayer, bankrolls);
  if (!res) return fb;
  // defensive normalisation: never let a missing field break the show
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
}
