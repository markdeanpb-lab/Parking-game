// Server-authoritative MARKRUN session state machine.
//   LOBBY -> INTRO -> BETTING -> RACE -> RESULTS -> SCOREBOARD -> (INTRO of next round | FINALE)
// Pure game-flow logic: no sockets here. The hub (server/net/hub.mjs) turns actions into calls and state into views.
import crypto from 'node:crypto';
import { EventEmitter } from 'node:events';
import { validateBets } from './bets.mjs';

export const PHASES = ['LOBBY', 'INTRO', 'BETTING', 'RACE', 'RESULTS', 'SCOREBOARD', 'FINALE'];
export const RESULT_STAGES = ['order', 'reveal', 'clues', 'payouts', 'awards'];
export const MAX_PLAYERS = 4;
export const REACTIONS = ['😱', '🔥', '😂', '🏃', '🍺', '👏', '😭', '🙈', '💸', '🐌'];
export const AVATAR_EMOJI = ['🦊', '🐸', '🦉', '🐙', '🦄', '🐯', '🐼', '🦖', '🐧', '🐝', '🦩', '🐶'];
export const AVATAR_COLOURS = ['#ff4d5a', '#ffb000', '#2ec27e', '#2f8cff', '#9b5cff', '#ff6fb5', '#13c4c4', '#ff7a1a'];

export const DEFAULT_SETTINGS = Object.freeze({
  startingBankroll: 500,
  roundsPerGame: 5,
  drinkingMode: false,
  voice: true,
  music: true,
  volume: 0.8,
  betTimer: 0, // seconds; 0 = no betting countdown
});
const SETTING_LIMITS = {
  startingBankroll: [100, 10000], roundsPerGame: [1, 12], volume: [0, 1], betTimer: [0, 600],
};

const T = { // default timeouts (ms) - safety nets; the TV normally drives these phases
  INTRO: 180_000, REVEAL_BASE: 8_000, REVEAL_PER_BET: 2_500, RACE_EXTRA: 60_000, STAGE: 45_000,
  SCOREBOARD_ALL_READY: 12_000, SCOREBOARD_READY_NOW: 3_500,
};

export function newSessionState(settings = {}) {
  return {
    v: 1,
    sessionId: crypto.randomBytes(6).toString('hex'),
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
    updatedAt: Date.now(),
  };
}

export class Game extends EventEmitter {
  constructor({ state, rounds, timeScale = 1, now = () => Date.now() } = {}) {
    super();
    this.s = state || newSessionState();
    this.rounds = rounds; // { createRound, settleRound }
    this.timeScale = timeScale;
    this.now = now;
    this.timer = null;
    this.queue = Promise.resolve();
    this.connected = new Map(); // playerId -> socket count
    this.busy = false;
    this.rearm(true);
  }

  // ---- helpers ------------------------------------------------------------------------------------
  run(fn) { // serialise all actions
    const p = this.queue.then(() => fn());
    this.queue = p.catch((e) => { console.error('[markrun] action failed:', e.stack || e.message); });
    return p;
  }
  changed() { this.s.updatedAt = this.now(); this.emit('change'); }
  player(id) { return this.s.players.find((p) => p.id === id); }
  byToken(token) { return token ? this.s.players.find((p) => p.token === token) : undefined; }
  isConnected(id) { return (this.connected.get(id) || 0) > 0; }
  setConnected(id, delta) {
    const n = Math.max(0, (this.connected.get(id) || 0) + delta);
    this.connected.set(id, n);
    this.emit('change'); // presence is not persisted, just re-broadcast
  }
  allReady() { return this.s.players.length > 0 && this.s.players.every((p) => p.ready); }
  allLocked() { return this.s.players.length > 0 && this.s.players.every((p) => this.s.locked[p.id]); }
  clearReady() { for (const p of this.s.players) p.ready = false; }

  setDeadline(ms) {
    this.s.deadline = ms == null ? null : this.now() + ms * this.timeScale;
    this.rearm();
  }
  rearm(restoring = false) {
    clearTimeout(this.timer);
    this.timer = null;
    if (this.s.deadline == null) return;
    if (restoring && this.s.phase === 'RACE' && this.s.round) { // TV will replay the race on reconnect
      this.s.deadline = this.now() + ((this.s.round.racePlan?.timeMap?.durationS || 150) * 1000 + T.RACE_EXTRA) * this.timeScale;
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
        id: `p${n}`, name, token: crypto.randomBytes(16).toString('hex'),
        avatar: cleanAvatar(avatar, this.s.players.length),
        bankroll: this.s.settings.startingBankroll, ready: false, joinedAt: this.now(),
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
      p.token = crypto.randomBytes(16).toString('hex');
      this.changed();
      return p;
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
        if (typeof DEFAULT_SETTINGS[k] === 'boolean') s[k] = !!v;
        else {
          const n = Number(v);
          if (!Number.isFinite(n)) continue;
          const [lo, hi] = SETTING_LIMITS[k] || [-Infinity, Infinity];
          s[k] = Math.min(hi, Math.max(lo, k === 'volume' ? n : Math.round(n)));
        }
      }
      if (this.s.phase === 'LOBBY' && this.s.roundNumber === 0 && 'startingBankroll' in patch) {
        for (const p of this.s.players) p.bankroll = s.startingBankroll;
      }
      this.changed();
    });
  }

  // ---- flow ---------------------------------------------------------------------------------------
  start() {
    return this.run(async () => {
      if (this.s.phase !== 'LOBBY') return;
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
      const bailouts = [];
      const minStake = 10;
      for (const p of this.s.players) {
        if (p.bankroll < minStake) {
          const amt = Math.max(minStake * 5, Math.round(this.s.settings.startingBankroll / 5 / 10) * 10);
          bailouts.push({ playerId: p.id, amount: amt - p.bankroll });
          p.bankroll = amt;
        }
      }
      const round = await this.rounds.createRound({ players: this.s.players, roundNumber: number, settings: { ...this.s.settings } });
      this.s.round = round;
      this.s.roundNumber = number;
      this.s.phase = 'INTRO';
      this.s.drafts = {};
      this.s.bets = {};
      this.s.locked = {};
      this.s.revealed = false;
      this.s.results = null;
      this.s.resultsStage = 0;
      this.s.bailouts = bailouts;
      this.s.carryReady = false;
      this.clearReady();
      this.setDeadline(T.INTRO);
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
      this.s.drafts[playerId] = bets.slice(0, 10).map((b) => ({ type: b?.type, runnerId: b?.runnerId, matchupId: b?.matchupId, pick: b?.pick, stake: Math.floor(Number(b?.stake) || 0) }));
      this.emit('persist');
    });
  }

  lock(playerId, bets) {
    return this.run(() => {
      if (this.s.phase !== 'BETTING' || this.s.revealed) throw new GameError('Betting is not open.');
      const p = this.player(playerId);
      if (!p) throw new GameError('Unknown player.');
      const v = validateBets(this.s.round.public, bets || [], p.bankroll);
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
      const v = validateBets(this.s.round.public, this.s.drafts[p.id] || [], p.bankroll);
      this.s.bets[p.id] = v.ok ? v.bets : [];
      this.s.locked[p.id] = true;
    }
    this.reveal();
    this.changed();
  }
  reveal() {
    this.s.revealed = true;
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
    const betsByPlayer = {};
    const bankrolls = {};
    for (const p of this.s.players) { betsByPlayer[p.id] = this.s.bets[p.id] || []; bankrolls[p.id] = p.bankroll; }
    this.s.results = await this.rounds.settleRound(r, betsByPlayer, bankrolls);
    this.s.phase = 'RACE';
    this.s.raceStartedAt = this.now();
    this.clearReady();
    this.setDeadline((r.racePlan?.timeMap?.durationS || 150) * 1000 + T.RACE_EXTRA);
    this.changed();
  }
  raceDone(roundId) {
    return this.run(() => {
      if (this.s.phase !== 'RACE' || (roundId && roundId !== this.s.round.public.roundId)) return;
      this.toResults();
    });
  }
  toResults() {
    const res = this.s.results;
    for (const p of this.s.players) {
      const pay = res?.payouts?.[p.id];
      if (pay && Number.isFinite(pay.bankroll)) p.bankroll = Math.max(0, Math.round(pay.bankroll));
    }
    const pub = this.s.round.public;
    this.s.history.push({
      round: this.s.roundNumber, title: pub.title,
      winner: res?.finishOrder?.[0]?.runnerId ? pub.runners.find((x) => x.id === res.finishOrder[0].runnerId)?.nickname : null,
      bankrolls: Object.fromEntries(this.s.players.map((p) => [p.id, p.bankroll])),
      nets: Object.fromEntries(this.s.players.map((p) => [p.id, res?.payouts?.[p.id]?.net ?? 0])),
      awards: (res?.awards || []).map((a) => ({ playerId: a.playerId, title: a.title })),
    });
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
        if (ph === 'LOBBY') return this.nextRound();
        if (ph === 'RESULTS' && this.s.resultsStage >= RESULT_STAGES.indexOf('payouts')) return this.toScoreboard();
        if (ph === 'SCOREBOARD') { this.setDeadline(this.s.carryReady ? T.SCOREBOARD_ALL_READY : T.SCOREBOARD_READY_NOW); }
        if (ph === 'FINALE') { this.changed(); return this.newGameInner(); }
      }
      this.changed();
    });
  }
  newGameInner() {
    this.s.phase = 'LOBBY'; this.s.roundNumber = 0; this.s.round = null; this.s.results = null; this.s.history = [];
    this.s.bets = {}; this.s.drafts = {}; this.s.locked = {}; this.s.revealed = false;
    this.s.gameNumber = (this.s.gameNumber || 1) + 1;
    for (const p of this.s.players) p.bankroll = this.s.settings.startingBankroll;
    this.clearReady(); this.setDeadline(null); this.changed();
  }

  // TV "next" button / key. `from` guards against double presses and stale TVs.
  advance(from, stage) {
    return this.run(async () => {
      if (from && from !== this.s.phase) return;
      switch (this.s.phase) {
        case 'LOBBY': if (this.s.players.length) await this.nextRound(); return;
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
        const rid = b.type === 'win' ? b.runnerId : b.pick;
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
      players: s.players.map((p) => ({
        id: p.id, name: p.name, avatar: p.avatar, bankroll: p.bankroll, ready: !!p.ready,
        connected: this.isConnected(p.id), locked: !!s.locked[p.id],
      })),
      round: showRound ? s.round.public : null,
      roundSource: s.round?.source || null,
      revealed: !!s.revealed,
      bets: s.revealed ? Object.fromEntries(s.players.map((p) => [p.id, s.bets[p.id] || []])) : null,
      results: showResults ? s.results : null,
      clues: showResults ? this.allClues() : null, // after the race every clue (incl. private ones) can be reviewed
      resultsStage: s.phase === 'RESULTS' ? s.resultsStage : RESULT_STAGES.length,
      resultStages: RESULT_STAGES,
      history: s.history,
      bailouts: s.phase === 'INTRO' || s.phase === 'BETTING' ? (s.bailouts || []) : [],
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
    }
    v.backedBy = this.s.revealed || ['RACE', 'RESULTS'].includes(this.s.phase) ? this.backedBy() : {};
    return { ...v, role: 'tv', ...extra };
  }

  phoneView(playerId) {
    const v = this.commonView();
    const p = this.player(playerId);
    if (!p) return { ...v, role: 'phone', me: null };
    v.me = {
      id: p.id, name: p.name, avatar: p.avatar, bankroll: p.bankroll, ready: !!p.ready,
      locked: !!this.s.locked[p.id],
      privateClues: this.s.round && this.s.phase !== 'LOBBY' ? (this.s.round.private?.[p.id] || []) : [],
      bets: this.s.locked[p.id] ? (this.s.bets[p.id] || []) : (this.s.drafts[p.id] || []),
    };
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
