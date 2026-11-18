// Server-authoritative MARKRUN session state machine.
//   LOBBY -> INTRO -> BETTING -> RACE -> RESULTS -> SCOREBOARD -> (INTRO of next round | FINALE)
// Pure game-flow logic: no sockets here. The hub (server/net/hub.mjs) turns actions into calls and state into views.
// Isomorphic (Node + browser web edition): Web Crypto + a tiny emitter instead of node:crypto / node:events.
import { Emitter as EventEmitter, randHex } from './emitter.mjs';
import { validateBets, budgetOf, DEFAULT_BUDGET } from './bets.mjs';
import { broadcastToRace, distanceAt, timeAtDistance } from '../game/raceplan.mjs';
import { provisionalNet } from '../game/provisional.mjs';

export const PHASES = ['LOBBY', 'INTRO', 'BETTING', 'RACE', 'RESULTS', 'SCOREBOARD', 'FINALE'];
export const RESULT_STAGES = ['order', 'reveal', 'clues', 'payouts', 'awards'];
export const MAX_PLAYERS = 4;
export const REACTIONS = ['😱', '😂', '🔥'];
export const AVATAR_EMOJI = ['🦊', '🐸', '🦉', '🐙', '🦄', '🐯', '🐼', '🦖', '🐧', '🐝', '🦩', '🐶'];
export const AVATAR_COLOURS = ['#ff4d5a', '#ffb000', '#2ec27e', '#2f8cff', '#9b5cff', '#ff6fb5', '#13c4c4', '#ff7a1a'];

export const NIGHTS = Object.freeze({ quick: 4, full: 6 }); // lobby: "Quick night" / "Full night"
export const DEFAULT_SETTINGS = Object.freeze({
  roundBudget: DEFAULT_BUDGET, // fresh betting budget per round (NOT the score)
  roundsPerGame: NIGHTS.full,
  drinkingMode: false,
  voice: true,
  music: true,
  volume: 0.8,
  betTimer: 90, // seconds; a soft countdown (hurry-up nudge, then your slip is locked as it stands); 0 = off
  runnerPlayerId: null, // "I'm Mark": the other player gets an extra hot tip
});
const SETTING_LIMITS = {
  roundBudget: [100, 5000], roundsPerGame: [1, 12], volume: [0, 1], betTimer: [0, 600],
};
export const SESSION_VERSION = 2;

const ENV = (typeof process !== 'undefined' && process.env) || {};
const T = { // default timeouts (ms) - safety nets; the TV normally drives these phases
  INTRO: 180_000, REVEAL_BASE: 8_000, REVEAL_PER_BET: 4_000, RACE_EXTRA: 60_000, STAGE: 45_000,
  MARKET: Number(ENV.MARKRUN_MARKET_MS) || 15_000,
  STALL: Number(ENV.MARKRUN_STALL_MS) || 45_000,     // TV made no progress for this long -> force on
  NO_TV: Number(ENV.MARKRUN_NO_TV_MS) || 60_000,     // no TV connected at all for this long -> force on
  SCOREBOARD_ALL_READY: 12_000, SCOREBOARD_READY_NOW: 3_500,
};

export function newSessionState(settings = {}) {
  return {
    v: SESSION_VERSION,
    sessionId: randHex(6),
    phase: 'LOBBY',
    settings: { ...DEFAULT_SETTINGS, ...settings },
    players: [],
    roundNumber: 0,
    round: null,
    drafts: {},
    bets: {},
    locked: {},
    revealed: false,
    results: null,
    resultsStage: 0,
    history: [],
    deadline: null,
    carryReady: false,
    gameNumber: 1,
    gameSessionId: randHex(6), // new id per game (passed to createRound as settings.sessionId)
    refreshing: false,
    updatedAt: Date.now(),
  };
}

// Saved sessions from before the budget/score economy (v1: bankrolls, bailouts, starting pot) are migrated in place:
// score = bankroll - starting pot, so the standings keep their order and gaps. Anything unrecognisable -> null (fresh).
export function migrateState(s) {
  if (!s || typeof s !== 'object' || !Array.isArray(s.players)) return null;
  if (s.v === SESSION_VERSION) return s;
  if (s.v !== 1) return null;
  const old = s.settings || {};
  const start = Number(old.startingBankroll) || 1000;
  const toScore = (v) => Math.round((Number.isFinite(Number(v)) ? Number(v) : start) - start);
  const settings = { ...DEFAULT_SETTINGS };
  for (const k of Object.keys(DEFAULT_SETTINGS)) if (k in old) settings[k] = old[k];
  if (!old.betTimer) settings.betTimer = DEFAULT_SETTINGS.betTimer; // the soft timer is the new default
  s.settings = settings;
  for (const p of s.players) {
    if (!Number.isFinite(p.score)) p.score = toScore(p.bankroll);
    delete p.bankroll;
  }
  const conv = (o) => Object.fromEntries(Object.entries(o || {}).map(([k, v]) => [k, toScore(v)]));
  for (const h of s.history || []) { if (h.bankrolls && !h.scores) h.scores = conv(h.bankrolls); delete h.bankrolls; }
  for (const r of s.roundLog || []) { if (r.bankrolls && !r.scores) r.scores = conv(r.bankrolls); delete r.bankrolls; }
  delete s.bailouts;
  if (s.round?.public) s.round.public.rules = { ...(s.round.public.rules || {}), budget: budgetOf(s.round.public, settings.roundBudget) };
  s.v = SESSION_VERSION;
  return s;
}

// Round tidy-up for transport (feature-detected; the game module normally provides all of this already):
// a rank per runner (1 = favourite), the round budget in the rules, ONE head-to-head, and the side bet only
// in The Funfair Stakes.
export function normaliseRound(round, budget) {
  const pub = round?.public;
  if (!pub) return round;
  pub.rules = { ...(pub.rules || {}), budget: budgetOf(pub, budget) };
  const runners = pub.runners || [];
  if (runners.some((r) => !Number.isFinite(r.rank))) {
    const sorted = [...runners].sort((a, b) => (a.odds?.win ?? 99) - (b.odds?.win ?? 99));
    sorted.forEach((r, i) => { r.rank = i > 0 && (sorted[i - 1].odds?.win ?? 99) === (r.odds?.win ?? 99) ? sorted[i - 1].rank : i + 1; });
  }
  if (Array.isArray(pub.matchups) && pub.matchups.length > 1) pub.matchups = pub.matchups.slice(0, 1);
  const funfair = pub.theme?.key === 'funfair' || /funfair/i.test(pub.theme?.label || '');
  if (pub.props?.length && pub.theme?.key && !funfair) delete pub.props;
  return round;
}

// Presenter scripts from the game module are accepted as [{ speaker, text, ... }] or { lines: [...], ticker: [...] }.
function normaliseScript(x) {
  const raw = Array.isArray(x) ? x : Array.isArray(x?.lines) ? x.lines : x && typeof x === 'object' && x.text ? [x] : [];
  const lines = raw.filter((l) => l && typeof l.text === 'string' && l.text.trim())
    .map((l) => ({ ...l, speaker: l.speaker === 'pam' ? 'pam' : 'jeff', text: String(l.text) })).slice(0, 14);
  if (!lines.length) return null;
  const ticker = (Array.isArray(x?.ticker) ? x.ticker : []).map(String).filter(Boolean).slice(0, 12);
  return ticker.length ? { lines, ticker } : { lines };
}

export class Game extends EventEmitter {
  constructor({ state, rounds, timeScale = 1, now = () => Date.now() } = {}) {
    super();
    this.s = migrateState(state) || newSessionState();
    this.rounds = rounds; // { createRound, settleRound }
    this.timeScale = timeScale;
    this.now = now;
    this.timer = null;
    this.queue = Promise.resolve();
    this.connected = new Map(); // playerId -> socket count
    this.busy = false;
    this.rearm(true);
    if (this.s.market?.open) { this.s.market.closesAt = Math.max(this.s.market.closesAt, this.now() + 3000); this.armMarket(); }
  }

  // ---- helpers ------------------------------------------------------------------------------------
  run(fn) { // serialise all actions
    const p = this.queue.then(() => fn());
    this.queue = p.catch((e) => { if (!(e instanceof GameError)) console.error('[markrun] action failed:', e.stack || e.message); });
    return p;
  }
  changed() { this.s.updatedAt = this.now(); this.emit('change'); }
  player(id) { return this.s.players.find((p) => p.id === id); }
  byToken(token) { return token ? this.s.players.find((p) => p.token === token || (p.claimTokens || []).includes(token)) : undefined; }
  revokeClaims(p) { const had = (p.claimTokens || []).length; p.claimTokens = []; if (had) this.changed(); }
  isConnected(id) { return (this.connected.get(id) || 0) > 0; }
  setConnected(id, delta) {
    const n = Math.max(0, (this.connected.get(id) || 0) + delta);
    this.connected.set(id, n);
    this.emit('change'); // presence is not persisted, just re-broadcast
  }
  allReady() { return this.s.players.length > 0 && this.s.players.every((p) => p.ready); }
  allLocked() { return this.s.players.length > 0 && this.s.players.every((p) => this.s.locked[p.id]); }
  budget() { return budgetOf(this.s.round?.public, this.s.settings.roundBudget); }
  scores() { return Object.fromEntries(this.s.players.map((p) => [p.id, p.score || 0])); }
  clearReady() { for (const p of this.s.players) p.ready = false; }

  setDeadline(ms) {
    this.s.deadline = ms == null ? null : this.now() + ms * this.timeScale;
    this.rearm();
  }
  rearm(restoring = false) {
    clearTimeout(this.timer);
    this.timer = null;
    if (this.s.deadline == null) return;
    if (restoring && (this.s.phase === 'RACE' || this.s.phase === 'INTRO')) { // the TV resumes on reconnect
      this.s.deadline = this.now() + T.NO_TV * this.timeScale;
    }
    let wait = this.s.deadline - this.now();
    if (restoring) wait = Math.max(wait, 5000 * this.timeScale);
    const tag = `${this.s.phase}:${this.s.resultsStage}:${this.s.revealed}:${this.s.roundNumber}`;
    this.timer = setTimeout(() => this.run(() => this.onTimeout(tag)), Math.max(0, wait));
    this.timer.unref?.();
  }
  dispose() { clearTimeout(this.timer); this.removeAllListeners(); }

  async onTimeout(tag) {
    const now = `${this.s.phase}:${this.s.resultsStage}:${this.s.revealed}:${this.s.roundNumber}`;
    if (tag !== now) return;
    this.s.deadline = null;
    switch (this.s.phase) {
      case 'INTRO': return this.toBetting();
      case 'BETTING':
        if (this.s.revealed) return this.toRace();
        return this.autoLockAll();
      case 'RACE': return this.toResults();
      case 'RESULTS': return this.nextStage(this.s.resultsStage);
      case 'SCOREBOARD': return this.nextRound();
      default: return undefined;
    }
  }

  // ---- players ------------------------------------------------------------------------------------
  join({ name, avatar }) {
    return this.run(() => {
      name = String(name || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 16);
      if (!name) throw new GameError('Pick a name first!');
      if (this.s.phase !== 'LOBBY') throw new GameError('A game is in progress. Ask the host to start a new game, or take over a disconnected player.', 'in_progress');
      if (this.s.players.length >= MAX_PLAYERS) throw new GameError('The sofa is full!', 'full');
      if (this.s.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) throw new GameError('That name is taken.');
      let n = 1;
      while (this.player(`p${n}`)) n++;
      const p = {
        id: `p${n}`, name, token: randHex(16),
        avatar: cleanAvatar(avatar, this.s.players.length),
        score: 0, ready: false, joinedAt: this.now(),
      };
      this.s.players.push(p);
      this.changed();
      return p;
    });
  }
  claim(playerId) { // take over a disconnected player's seat (lost token / new phone)
    return this.run(() => {
      const p = this.player(playerId);
      if (!p) throw new GameError('No such player.');
      if (this.isConnected(p.id)) throw new GameError(`${p.name} is still connected.`);
      const t = randHex(16);
      p.claimTokens = [...(p.claimTokens || []), t].slice(-3);
      this.changed();
      return { player: p, token: t };
    });
  }
  updateProfile(playerId, { name, avatar }) {
    return this.run(() => {
      const p = this.player(playerId);
      if (!p) return;
      if (name) {
        const nm = String(name).replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 16);
        if (nm && !this.s.players.some((o) => o !== p && o.name.toLowerCase() === nm.toLowerCase())) p.name = nm;
      }
      if (avatar) p.avatar = cleanAvatar(avatar, 0);
      this.changed();
    });
  }
  kick(playerId) {
    return this.run(() => {
      if (this.s.phase !== 'LOBBY') throw new GameError('Players can only be removed in the lobby.');
      this.s.players = this.s.players.filter((p) => p.id !== playerId);
      this.emit('kicked', playerId);
      this.changed();
    });
  }

  setSettings(patch = {}) {
    return this.run(() => {
      const s = this.s.settings;
      for (const [k, v] of Object.entries(patch)) {
        if (!(k in DEFAULT_SETTINGS)) continue;
        if (k === 'runnerPlayerId') { s[k] = this.player(v) ? v : null; continue; }
        if (k === 'roundBudget' && this.s.phase !== 'LOBBY' && this.s.phase !== 'SCOREBOARD') continue; // not mid-round
        if (typeof DEFAULT_SETTINGS[k] === 'boolean') s[k] = !!v;
        else {
          const n = Number(v);
          if (!Number.isFinite(n)) continue;
          const [lo, hi] = SETTING_LIMITS[k] || [-Infinity, Infinity];
          s[k] = Math.min(hi, Math.max(lo, k === 'volume' ? n : Math.round(n)));
        }
      }
      this.changed();
    });
  }

  // ---- flow ---------------------------------------------------------------------------------------
  start() {
    return this.run(async () => {
      if (this.s.phase !== 'LOBBY') return;
      if (this.s.refreshing) throw new GameError('Hang on — the historical data is still refreshing.');
      if (!this.s.players.length) throw new GameError('Nobody has joined yet!');
      await this.nextRound();
    });
  }

  async nextRound() {
    if (this.s.roundNumber >= this.s.settings.roundsPerGame && this.s.phase !== 'LOBBY') return this.toFinale();
    if (this.busy) return;
    this.busy = true;
    try {
      const number = this.s.roundNumber + 1;
      this.s.gameSessionId ||= randHex(6);
      const st = this.s.settings;
      // final round: the player in last place gets an extra hot tip (game module)
      const trailing = number >= st.roundsPerGame && this.s.players.length > 1
        ? [...this.s.players].sort((a, b) => (a.score || 0) - (b.score || 0))[0].id : null;
      const gameSettings = { ...st, rounds: st.roundsPerGame, budget: st.roundBudget, drinks: st.drinkingMode, sessionId: `${this.s.sessionId}-${this.s.gameSessionId}`, ...(trailing ? { trailingPlayerId: trailing } : {}) };
      const round = normaliseRound(await this.rounds.createRound({ players: this.s.players, roundNumber: number, settings: gameSettings }), st.roundBudget);
      // presenters: the news-desk cold open (round 1 of each game) and the theme announcement (game module; optional)
      const plist = this.s.players.map((p) => ({ id: p.id, name: p.name }));
      let newsDesk = null, themeLines = null;
      if (number === 1) { try { newsDesk = normaliseScript(this.rounds.newsDeskScript?.(plist, gameSettings)); } catch (e) { console.warn('[markrun] newsDeskScript failed:', e.message); } }
      if (round.public?.theme) { try { themeLines = normaliseScript(this.rounds.themeAnnouncement?.(round.public.theme))?.lines || null; } catch (e) { console.warn('[markrun] themeAnnouncement failed:', e.message); } }
      this.s.introExtras = { newsDesk, themeLines };
      this.s.round = round;
      this.s.roundNumber = number;
      this.s.phase = 'INTRO';
      this.s.drafts = {};
      this.s.bets = {};
      this.s.locked = {};
      this.s.revealed = false;
      this.s.results = null;
      this.s.resultsStage = 0;
      this.s.carryReady = false;
      this.s.market = null; this.s.marketUsed = false; this.s.live = null; this.s.revealSeq = null;
      this.clearReady();
      this.progress = { key: null, value: -1 };
      this.setDeadline(this.tvCount ? T.STALL : T.NO_TV);
      this.changed();
    } finally { this.busy = false; }
  }

  introDone(roundId) {
    return this.run(() => {
      if (this.s.phase !== 'INTRO' || (roundId && roundId !== this.s.round?.id && roundId !== this.s.round?.public?.roundId)) return;
      this.toBetting();
    });
  }
  toBetting() {
    this.s.phase = 'BETTING';
    this.clearReady();
    const bt = this.s.settings.betTimer;
    this.setDeadline(bt > 0 ? bt * 1000 : null);
    this.changed();
  }

  draft(playerId, bets) {
    return this.run(() => {
      if (!['INTRO', 'BETTING'].includes(this.s.phase) || this.s.locked[playerId] || !this.player(playerId)) return;
      if (!Array.isArray(bets)) return;
      this.s.drafts[playerId] = bets.slice(0, 10).map((b) => ({ type: b?.type, runnerId: b?.runnerId, matchupId: b?.matchupId, propId: b?.propId, pick: b?.pick, stake: Math.floor(Number(b?.stake) || 0), ...(b?.boost === true ? { boost: true } : {}) }));
      this.emit('persist');
    });
  }

  lock(playerId, bets) {
    return this.run(() => {
      if (this.s.phase !== 'BETTING' || this.s.revealed) throw new GameError('Betting is not open.');
      const p = this.player(playerId);
      if (!p) throw new GameError('Unknown player.');
      const v = validateBets(this.s.round.public, bets || [], this.budget(), p.id);
      if (!v.ok) throw new GameError(v.error, 'bad_bets');
      this.s.bets[playerId] = v.bets;
      this.s.drafts[playerId] = v.bets;
      this.s.locked[playerId] = true;
      if (this.allLocked()) this.reveal();
      this.changed();
    });
  }
  unlock(playerId) {
    return this.run(() => {
      if (this.s.phase !== 'BETTING' || this.s.revealed) return;
      delete this.s.locked[playerId];
      delete this.s.bets[playerId];
      this.changed();
    });
  }
  autoLockAll() { // betting countdown expired: lock everyone with their valid draft (or nothing)
    for (const p of this.s.players) {
      if (this.s.locked[p.id]) continue;
      const v = validateBets(this.s.round.public, this.s.drafts[p.id] || [], this.budget(), p.id);
      let bets = v.ok ? v.bets : [];
      if (!v.ok) { // keep every bet that is valid on its own, in order, while it fits the budget and the bet limit
        for (const b of this.s.drafts[p.id] || []) {
          const t = validateBets(this.s.round.public, [...bets, b], this.budget(), p.id);
          if (t.ok) bets = t.bets;
        }
      }
      this.s.bets[p.id] = bets;
      this.s.locked[p.id] = true;
    }
    this.reveal();
    this.changed();
  }
  reveal() {
    this.s.revealed = true;
    this.s.betLines = [];
    const players = this.s.players.map((p) => ({ id: p.id, name: p.name }));
    const budgets = Object.fromEntries(this.s.players.map((p) => [p.id, this.budget()])); // "smallest to largest relative to the budget"
    const seq = this.rounds.betRevealOrder?.(this.s.round, this.s.bets, budgets, players);
    this.s.revealSeq = Array.isArray(seq) && seq.length ? seq : null;
    if (!this.s.revealSeq) {
      try { this.s.betLines = this.rounds.betReactionLines?.(this.s.round, this.s.bets, players) || []; } catch (e) { console.warn('[markrun] betReactionLines failed:', e.message); }
    }
    const n = Object.values(this.s.bets).reduce((a, b) => a + b.length, 0);
    this.setDeadline(Math.min(40_000, T.REVEAL_BASE + n * T.REVEAL_PER_BET));
  }
  revealDone(roundId) {
    return this.run(() => {
      if (this.s.phase !== 'BETTING' || !this.s.revealed || (roundId && roundId !== this.s.round.public.roundId)) return;
      return this.toRace();
    });
  }
  async toRace() {
    const r = this.s.round;
    this.s.results = null; // settled at the finish: in-play bets can still be added at halfway
    // personalised race commentary now the bets are known (game module; feature-detected)
    try {
      const pc = this.rounds.personaliseCommentary?.(r, Object.fromEntries(this.s.players.map((p) => [p.id, this.s.bets[p.id] || []])), this.s.players.map((p) => ({ id: p.id, name: p.name })));
      const merged = Array.isArray(pc) ? pc : Array.isArray(pc?.commentary) ? pc.commentary : null;
      if (merged && r.racePlan) r.racePlan.commentary = merged;
    } catch (e) { console.warn('[markrun] personaliseCommentary failed:', e.message); }
    // halfway market only when it's still a contest: skip it if 2nd is more than 20 s behind at halfway
    const pm = this.rounds.inPlayMarket?.(r);
    const second = pm?.standings?.find((x) => x.place === 2) || pm?.standings?.[1];
    this.s.marketPending = pm && pm.odds && (second?.gapS ?? 0) <= 20 ? pm : null;
    this.s.marketUsed = !this.s.marketPending;
    this.s.phase = 'RACE';
    this.s.raceStartedAt = this.now();
    this.clearReady();
    this.progress = { key: null, value: -1 };
    this.s.live = null;
    this.setDeadline(this.tvCount ? T.STALL : T.NO_TV);
    this.changed();
  }
  raceDone(roundId) {
    return this.run(() => {
      if (this.s.phase !== 'RACE' || (roundId && roundId !== this.s.round.public.roundId)) return;
      return this.toResults();
    });
  }
  async toResults() {
    this.closeMarket(false);
    const betsByPlayer = {};
    const scores = this.scores();
    for (const p of this.s.players) betsByPlayer[p.id] = this.s.bets[p.id] || [];
    this.s.results = await this.rounds.settleRound(this.s.round, betsByPlayer, scores);
    const res = this.s.results;
    this.s.live = null;
    // bank the round's net into the cumulative score (the server owns the score: score = previous + net)
    for (const p of this.s.players) {
      const pay = res?.payouts?.[p.id];
      const net = Number.isFinite(Number(pay?.net)) ? Math.round(Number(pay.net)) : 0;
      p.score = (p.score || 0) + net;
      if (pay) { pay.net = net; pay.score = p.score; delete pay.bankroll; }
    }
    const pub = this.s.round.public;
    this.s.history.push({
      round: this.s.roundNumber, title: pub.title,
      winner: res?.finishOrder?.[0]?.runnerId ? pub.runners.find((x) => x.id === res.finishOrder[0].runnerId)?.nickname : null,
      scores: this.scores(),
      nets: Object.fromEntries(this.s.players.map((p) => [p.id, res?.payouts?.[p.id]?.net ?? 0])),
      awards: (res?.awards || []).map((a) => ({ playerId: a.playerId, title: a.title, text: a.text || '' })),
    });
    // full log for the finale superlatives reel (game module's sessionSuperlatives)
    (this.s.roundLog ||= []).push({ number: this.s.roundNumber, round: { public: pub, hidden: this.s.round.hidden }, bets: betsByPlayer, results: res, scores: { ...this.s.history.at(-1).scores } });
    this.s.phase = 'RESULTS';
    this.s.resultsStage = 0;
    this.clearReady();
    this.setDeadline(T.STAGE);
    this.changed();
  }
  stageDone(from) { // TV finished showing results stage `from`
    return this.run(() => this.nextStage(from));
  }
  nextStage(from) {
    if (this.s.phase !== 'RESULTS' || (from != null && from !== this.s.resultsStage)) return;
    if (this.s.resultsStage >= RESULT_STAGES.length - 1) return this.toScoreboard();
    this.s.resultsStage++;
    this.setDeadline(T.STAGE);
    this.changed();
  }
  toScoreboard() {
    const carry = this.allReady();
    this.s.phase = 'SCOREBOARD';
    this.s.carryReady = carry;
    if (!carry) this.clearReady();
    this.setDeadline(carry ? T.SCOREBOARD_ALL_READY : null);
    this.changed();
  }
  toFinale() {
    const sup = this.rounds.sessionSuperlatives?.(this.s.roundLog || [], this.s.players.map((p) => ({ id: p.id, name: p.name, score: p.score || 0, bankroll: p.score || 0 })));
    this.s.superlatives = Array.isArray(sup) ? sup : [];
    this.s.phase = 'FINALE';
    this.clearReady();
    this.setDeadline(null);
    this.changed();
  }
  newGame() {
    return this.run(() => this.newGameInner());
  }

  ready(playerId, value = true) {
    return this.run(async () => {
      const p = this.player(playerId);
      if (!p) return;
      p.ready = !!value;
      const ph = this.s.phase;
      if (this.allReady()) {
        if (ph === 'LOBBY' && !this.s.refreshing) return this.nextRound();
        if (ph === 'RESULTS' && this.s.resultsStage >= RESULT_STAGES.indexOf('payouts')) return this.toScoreboard();
        if (ph === 'SCOREBOARD') { this.setDeadline(this.s.carryReady ? T.SCOREBOARD_ALL_READY : T.SCOREBOARD_READY_NOW); }
        if (ph === 'FINALE') { this.changed(); return this.newGameInner(); }
      }
      this.changed();
    });
  }
  newGameInner() {
    this.s.phase = 'LOBBY'; this.s.roundNumber = 0; this.s.round = null; this.s.results = null; this.s.history = []; this.s.roundLog = []; this.s.superlatives = [];
    this.s.bets = {}; this.s.drafts = {}; this.s.locked = {}; this.s.revealed = false;
    this.s.gameNumber = (this.s.gameNumber || 1) + 1;
    this.s.gameSessionId = randHex(6);
    for (const p of this.s.players) p.score = 0;
    this.s.introExtras = null;
    this.clearReady(); this.setDeadline(null); this.changed();
  }

  // TV "next" button / key. `from` guards against double presses and stale TVs.
  advance(from, stage) {
    return this.run(async () => {
      if (from && from !== this.s.phase) return;
      switch (this.s.phase) {
        case 'LOBBY': if (this.s.refreshing) throw new GameError('Hang on — the historical data is still refreshing.'); if (this.s.players.length) await this.nextRound(); return;
        case 'INTRO': return this.toBetting();
        case 'BETTING': if (this.s.revealed) return this.toRace(); return undefined;
        case 'RACE': return this.toResults();
        case 'RESULTS': return this.nextStage(stage ?? this.s.resultsStage);
        case 'SCOREBOARD': return this.nextRound();
        case 'FINALE': return this.newGameInner();
        default: return undefined;
      }
    });
  }
  // ---- iteration 2: in-play "halfway market", live standings for phones, phone-driven results ----------
  marketAvailable() { return !!this.rounds.inPlayAvailable?.(this.s.round); }
  openMarket(roundId) {
    return this.run(() => {
      if (this.s.phase !== 'RACE' || this.s.marketUsed || (roundId && roundId !== this.s.round.public.roundId)) return;
      const m = this.s.marketPending || this.rounds.inPlayMarket?.(this.s.round);
      this.s.marketUsed = true;
      if (!m || !m.odds) { this.changed(); return; }
      const ms = T.MARKET;
      this.s.market = { open: true, atM: m.atM ?? 2500, standings: m.standings || [], odds: m.odds, durationS: Math.round(ms / 1000), closesAt: this.now() + ms };
      this.armMarket();
      this.changed();
    });
  }
  armMarket() {
    clearTimeout(this.marketTimer);
    if (!this.s.market?.open) return;
    const wait = Math.max(0, this.s.market.closesAt - this.now());
    this.marketTimer = setTimeout(() => this.run(() => this.closeMarket(true)), wait);
    this.marketTimer.unref?.();
  }
  closeMarket(emit = true) {
    clearTimeout(this.marketTimer);
    if (!this.s.market?.open) return;
    this.s.market.open = false;
    if (emit) this.changed();
  }
  placeInPlay(playerId, { runnerId, stake }) {
    return this.run(() => {
      const m = this.s.market;
      if (this.s.phase !== 'RACE' || !m?.open) throw new GameError('The halfway market is closed.');
      const p = this.player(playerId);
      if (!p) throw new GameError('Unknown player.');
      const bets = this.s.bets[playerId] || [];
      if (bets.some((b) => b.type === 'inplay')) throw new GameError('One halfway bet each!');
      const o = m.odds[runnerId];
      if (!o) throw new GameError('Unknown runner.');
      const minStake = this.s.round.public.rules?.minStake ?? 10;
      const free = this.budget() - bets.reduce((a, b) => a + b.stake, 0);
      const st = Math.floor(Number(stake));
      if (!Number.isFinite(st) || st < minStake) throw new GameError(`Minimum stake is ${minStake}.`);
      if (st > free) throw new GameError(`Only ${Math.max(0, free)}pp of this round's budget left.`);
      this.s.bets[playerId] = [...bets, { type: 'inplay', runnerId, stake: st, odds: o.win, lockedOdds: o.win, display: o.display }];
      this.changed();
    });
  }
  // ---- progress heartbeats: safety timers only fire if the TV stops making progress ----
  tvPresence(count) {
    const before = this.tvCount || 0;
    this.tvCount = count;
    if (!['INTRO', 'RACE'].includes(this.s.phase)) return;
    if (count === 0) this.setDeadline(T.NO_TV);
    else if (before === 0 || count > before) this.setDeadline(T.STALL); // a TV (re)connected: give it time to resume
  }
  heartbeat(phase, roundId, value) {
    if (phase !== this.s.phase || !['INTRO', 'RACE'].includes(phase)) return;
    if (roundId && this.s.round && roundId !== this.s.round.public.roundId) return;
    const v = Number(value);
    if (!Number.isFinite(v)) return;
    const key = `${phase}:${this.s.roundNumber}`;
    if (!this.progress || this.progress.key !== key) this.progress = { key, value: -Infinity };
    if (v > this.progress.value) { this.progress.value = v; this.setDeadline(T.STALL); }
  }
  // TV reports its broadcast clock; phones get standings of their own runners (never the plan itself)
  raceTime(roundId, b) {
    if (this.s.phase !== 'RACE' || !this.s.round || (roundId && roundId !== this.s.round.public.roundId)) return;
    const bb = Number(b);
    if (!Number.isFinite(bb)) return;
    this.s.live = { b: bb, at: this.now() };
    this.heartbeat('RACE', roundId, bb);
    this.emit('live'); // re-broadcast only; not worth a disk write every second
  }
  liveStandings() {
    const plan = this.s.round?.racePlan;
    if (!plan || !this.s.live) return null;
    const raceS = broadcastToRace(plan.timeMap, Math.max(0, this.s.live.b));
    const rows = plan.runners.map((r) => ({ id: r.id, d: distanceAt(r.progress, raceS), f: r.officialS, done: raceS >= r.officialS }))
      .sort((x, y) => (x.done && y.done ? x.f - y.f : (y.d - x.d) || (x.f - y.f)));
    const leader = plan.runners.find((r) => r.id === rows[0].id);
    return rows.map((r, i) => {
      const run = plan.runners.find((x) => x.id === r.id);
      const gapS = i === 0 ? 0 : r.done ? r.f - leader.officialS : Math.max(0, raceS - timeAtDistance(leader.progress, r.d));
      return { runnerId: r.id, place: i + 1, gapS: Math.round(gapS * 10) / 10, finished: r.done && !!run };
    });
  }
  phoneNext(playerId) { // either phone can move the results on, so nobody has to get up
    return this.run(() => {
      if (!this.player(playerId)) return;
      if (this.s.phase === 'RESULTS') return this.nextStage(this.s.resultsStage);
      return undefined;
    });
  }
  setRunnerPlayer(playerId, value) {
    return this.run(() => {
      if (this.s.phase !== 'LOBBY' && this.s.phase !== 'SCOREBOARD') throw new GameError('Change this in the lobby.');
      if (value) this.s.settings.runnerPlayerId = playerId;
      else if (this.s.settings.runnerPlayerId === playerId) this.s.settings.runnerPlayerId = null;
      this.changed();
    });
  }

  // "Refresh Historical Data" (TV lobby only). The ONLY path that may touch the internet; never called by gameplay.
  refreshData(onProgress) {
    if (this.s.phase !== 'LOBBY') return Promise.reject(new GameError('Refreshing is only allowed in the lobby.'));
    if (this.s.refreshing) return Promise.reject(new GameError('A refresh is already running.'));
    this.s.refreshing = true;
    this.changed();
    return (async () => {
      try {
        const run = this.rounds.runRefresh || (await import('../import/refresh.mjs')).runRefresh;
        return await run({ onProgress });
      } finally {
        this.s.refreshing = false;
        this.changed();
      }
    })();
  }

  forceLock() { // TV: lock everyone who hasn't (with their current valid draft)
    return this.run(() => { if (this.s.phase === 'BETTING' && !this.s.revealed) this.autoLockAll(); });
  }

  // ---- views --------------------------------------------------------------------------------------
  backedBy() {
    const out = {};
    const pub = this.s.round?.public;
    if (!pub) return out;
    for (const p of this.s.players) {
      for (const b of this.s.bets[p.id] || []) {
        if (b.type === 'prop') continue;
        const rid = b.runnerId || b.pick;
        (out[rid] ||= []);
        if (!out[rid].includes(p.name)) out[rid].push(p.name);
      }
    }
    return out;
  }

  allClues() {
    const r = this.s.round;
    if (!r) return [];
    const out = r.public.runners.filter((x) => x.publicClue).map((x) => ({ ...x.publicClue, runnerId: x.id, owner: 'public' }));
    for (const [pid, list] of Object.entries(r.private || {})) for (const c of list || []) out.push({ ...c, owner: pid });
    return out;
  }

  commonView() {
    const s = this.s;
    const showRound = s.round && s.phase !== 'LOBBY';
    const showResults = s.results && ['RESULTS', 'SCOREBOARD', 'FINALE'].includes(s.phase);
    return {
      sessionId: s.sessionId,
      gameNumber: s.gameNumber || 1,
      phase: s.phase,
      settings: { ...s.settings },
      roundNumber: s.roundNumber,
      roundsPerGame: s.settings.roundsPerGame,
      budget: this.budget(),
      players: s.players.map((p) => ({
        id: p.id, name: p.name, avatar: p.avatar, score: p.score || 0, ready: !!p.ready,
        connected: this.isConnected(p.id), locked: !!s.locked[p.id],
      })),
      round: showRound ? s.round.public : null, // (phones: underdogSpecial is filtered per player in phoneView)
      roundSource: s.round?.source || null,
      revealed: !!s.revealed,
      bets: s.revealed || ['RACE', 'RESULTS', 'SCOREBOARD'].includes(s.phase) ? Object.fromEntries(s.players.map((p) => [p.id, s.bets[p.id] || []])) : null,
      betLines: s.revealed && s.phase === 'BETTING' ? (s.betLines || []) : [],
      refreshing: !!s.refreshing,
      revealSeq: s.revealed && s.phase === 'BETTING' ? s.revealSeq : null,
      market: s.phase === 'RACE' && s.market ? { open: s.market.open, atM: s.market.atM, standings: s.market.standings, odds: s.market.odds, closesAt: s.market.closesAt, durationS: s.market.durationS } : null,
      superlatives: s.phase === 'FINALE' ? (s.superlatives || []) : [],
      results: showResults ? s.results : null,
      clues: showResults ? this.allClues() : null, // after the race every clue (incl. private ones) can be reviewed
      resultsStage: s.phase === 'RESULTS' ? s.resultsStage : RESULT_STAGES.length,
      resultStages: RESULT_STAGES,
      history: s.history,
      deadline: s.deadline,
      serverNow: this.now(),
      carryReady: !!s.carryReady,
      reactions: REACTIONS,
    };
  }

  tvView(extra = {}) {
    const v = this.commonView();
    if ((this.s.phase === 'RACE' || this.s.phase === 'RESULTS') && this.s.round) {
      v.racePlan = this.s.round.racePlan;
      v.raceStartedAt = this.s.raceStartedAt;
      v.resumeB = this.s.phase === 'RACE' && this.s.live ? this.s.live.b : 0;
    }
    v.backedBy = this.s.revealed || ['RACE', 'RESULTS'].includes(this.s.phase) ? this.backedBy() : {};
    v.marketAvailable = this.s.phase === 'RACE' && this.marketAvailable() && !this.s.marketUsed;
    v.introExtras = this.s.phase === 'INTRO' ? (this.s.introExtras || null) : null;
    return { ...v, role: 'tv', ...extra };
  }

  phoneView(playerId) {
    const v = this.commonView();
    if (v.round?.underdogSpecial && v.round.underdogSpecial.playerId !== playerId && !this.s.revealed) {
      const { underdogSpecial, ...rest } = v.round; void underdogSpecial; v.round = rest;
    }
    const p = this.player(playerId);
    if (!p) return { ...v, role: 'phone', me: null };
    const budget = this.budget();
    v.me = {
      id: p.id, name: p.name, avatar: p.avatar, score: p.score || 0, ready: !!p.ready,
      locked: !!this.s.locked[p.id],
      privateClues: this.s.round && this.s.phase !== 'LOBBY' ? (this.s.round.private?.[p.id] || []) : [],
      bets: this.s.locked[p.id] ? (this.s.bets[p.id] || []) : (this.s.drafts[p.id] || []),
      budget, stakeCap: budget,
    };
    if (this.s.phase === 'RACE' && this.s.live) {
      const st = this.liveStandings() || [];
      const mine = new Set((this.s.bets[p.id] || []).map((b) => b.runnerId || b.pick).filter((x) => x && x !== 'yes' && x !== 'no'));
      let ifNow = null; // "if it ended now": this player's net against the live order (same maths as settlement)
      try { if (st.length && this.s.live.b >= 0) ifNow = Math.round(provisionalNet(this.s.round.public, { [p.id]: this.s.bets[p.id] || [] }, st.map((r) => r.runnerId))?.[p.id] ?? 0); } catch { ifNow = null; }
      v.me.live = { b: this.s.live.b, leaderId: st[0]?.runnerId || null, ifNow, mine: st.filter((r) => mine.has(r.runnerId)).map(({ runnerId, place, gapS, finished }) => ({ runnerId, place, gapS, finished })) };
    }
    return { ...v, role: 'phone' };
  }
}

export class GameError extends Error {
  constructor(msg, code = 'error') { super(msg); this.code = code; }
}

function cleanAvatar(a, i) {
  const emoji = AVATAR_EMOJI.includes(a?.emoji) ? a.emoji : AVATAR_EMOJI[i % AVATAR_EMOJI.length];
  const colour = AVATAR_COLOURS.includes(a?.colour) ? a.colour : AVATAR_COLOURS[i % AVATAR_COLOURS.length];
  return { emoji, colour };
}
