// Game module tests: contract shape, leak checker, payouts, determinism, clue counts, colours, commentary pacing.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { historyDb } from '../server/db.mjs';
import { createRound, settleRound, betReactionLines, normalizeSettings } from '../server/game/round.mjs';
import { checkText, checkRound, leakContext } from '../server/game/leak.mjs';
import { oddsFromProb, LADDER, winProbs } from '../server/game/model.mjs';
import { loadData } from '../server/game/data.mjs';
import { countWords } from '../server/game/text.mjs';

const hist = historyDb();
const P2 = [{ id: 'p1', name: 'Alice' }, { id: 'p2', name: 'Bob' }];
const freshSess = () => new DatabaseSync(':memory:');
let sid = 0;
const mk = (opts = {}) => createRound({ hist, sess: opts.sess ?? freshSess(), players: opts.players ?? P2, roundNumber: opts.roundNumber ?? 1,
  settings: { sessionId: opts.sessionId ?? `t${sid++}`, ...(opts.settings || {}) }, rng: opts.rng ?? 42 });

test('round matches the contract shape', () => {
  const r = mk();
  assert.ok(r.id && r.public.roundId === r.id && r.number === 1);
  assert.equal(r.public.runners.length, 5);
  for (const [i, x] of r.public.runners.entries()) {
    assert.equal(x.id, `r${i + 1}`); assert.equal(x.lane, i + 1);
    for (const k of ['nickname', 'tagline', 'personality', 'intro']) assert.equal(typeof x[k], 'string', k);
    assert.match(x.colour.primary, /^#[0-9a-f]{6}$/i); assert.match(x.colour.secondary, /^#[0-9a-f]{6}$/i); assert.ok(x.colour.name);
    assert.ok(['stocky', 'lanky', 'compact', 'tall'].includes(x.look.build));
    for (const k of ['hair', 'skin', 'face']) assert.equal(typeof x.look[k], 'string');
    assert.ok(x.publicClue.id && x.publicClue.text && x.publicClue.category);
    assert.ok(x.odds.win > 1 && typeof x.odds.display === 'string');
  }
  assert.ok(r.public.matchups.length >= 1 && r.public.matchups.length <= 2);
  for (const m of r.public.matchups) { assert.notEqual(m.a, m.b); assert.ok(m.odds.a > 1 && m.odds.b > 1); }
  assert.ok(r.public.rules.minStake > 0 && r.public.rules.maxBetsPerPlayer > 0);
  const plan = r.racePlan;
  assert.equal(plan.runners.length, 5);
  for (const pr of plan.runners) { assert.equal(pr.progress.length, 201); assert.equal(pr.progress[200], pr.officialS); }
  assert.ok(Array.isArray(plan.commentary) && plan.commentary.length >= 8);
  for (const c of plan.commentary) { assert.ok(['jeff', 'pam'].includes(c.speaker)); assert.ok(c.priority >= 1 && c.priority <= 3); assert.ok(c.broadcastS >= 0); }
  // public payload must not carry hidden data
  const pub = JSON.stringify(r.public);
  for (const k of ['"date"', 'officialS', 'archetype', 'finishOrder', 'progress']) assert.ok(!pub.includes(k), k);
});

test('exactly three clues per runner (public + one private per player), unique ids', () => {
  const r = mk();
  const ids = new Set();
  for (const x of r.public.runners) {
    const priv = P2.map((p) => r.private[p.id].find((c) => c.runnerId === x.id));
    assert.equal(priv.filter(Boolean).length, 2);
    const all = [x.publicClue, ...priv];
    assert.equal(all.length, 3);
    for (const c of all) { assert.ok(!ids.has(c.id), 'duplicate clue id'); ids.add(c.id); }
    assert.equal(new Set(all.map((c) => c.category)).size, 3, 'categories distinct within a runner');
  }
  for (const p of P2) assert.equal(r.private[p.id].length, 5);
  // one player -> public + one private
  const r1 = mk({ players: [{ id: 'solo', name: 'Solo' }] });
  assert.deepEqual(Object.keys(r1.private), ['solo']);
  assert.equal(r1.private.solo.length, 5);
});

test('colours and nicknames are unique within a round', () => {
  for (let s = 1; s <= 40; s++) {
    const r = mk({ rng: s });
    assert.equal(new Set(r.public.runners.map((x) => x.colour.primary)).size, 5);
    assert.equal(new Set(r.public.runners.map((x) => x.colour.name)).size, 5);
    assert.equal(new Set(r.public.runners.map((x) => x.nickname)).size, 5);
  }
});

test('deterministic with a seeded rng', () => {
  const a = mk({ rng: 1234, sessionId: 'detA' });
  const b = mk({ rng: 1234, sessionId: 'detB' });
  assert.deepEqual(a.public, { ...b.public });
  assert.deepEqual(a.private, b.private);
  assert.deepEqual(a.racePlan, b.racePlan);
  const c = mk({ rng: 1235, sessionId: 'detC' });
  assert.notDeepEqual(a.public, c.public);
});

test('leak checker catches the obvious', () => {
  const data = loadData(hist);
  const p = data.byDate.get('2024-09-07');
  const ctx = { ...leakContext([p]), raceWords: data.raceWords };
  const bad = ['Ran 2024 metres', 'Back in March he was flying', 'It was May', 'Finished in 18:52', 'clocked 1852 on the day', '18 min 52',
    'A new PB!', 'Event #745', 'Raced the Hackney Half', 'Got lost at the funfair', 'came second', '7th Sept', 'The Robin Hood Half was coming',
    'Finsbury Parkrun - 18:52'];
  for (const t of bad) assert.ok(checkText(t, ctx, { clue: true }).length > 0, `should flag: ${t}`);
  const good = ['Ran 57 km the week before. Elite fitness or legs approaching industrial action?', 'A half marathon was on the horizon, eight days away.',
    '21°C at the start. The man is approximately 40% sweat.', 'Runs per week, most recent first: 3, 3, 2, 4.', 'He may well win.'];
  for (const t of good) assert.deepEqual(checkText(t, ctx, { clue: true }), [], t);
});

test('no leaks in 2000 generated rounds (clues, names, intros, odds, matchups)', () => {
  let rounds = 0;
  const problems = [];
  for (let s = 0; rounds < 2000; s++) {
    const sess = freshSess();
    for (let k = 1; k <= 8 && rounds < 2000; k++, rounds++) {
      const r = createRound({ hist, sess, players: P2, roundNumber: k, settings: { sessionId: `leak${s}`, selectTries: 10, wildcardRate: 0.3 }, rng: 9000 + s * 10 + k });
      const ctx = { ...leakContext(Object.values(r.hidden.perfs)), raceWords: loadData(hist).raceWords };
      if (r.hidden.leaks.length) problems.push(...r.hidden.leaks.map((l) => JSON.stringify(l)));
      problems.push(...checkRound(r, ctx));
      // the betting-phase commentary must be clean too
      problems.push(...betReactionLines(r, { p1: [{ type: 'win', runnerId: 'r1', stake: 300 }], p2: [] }, P2).flatMap((l) => checkText(l.text, ctx)));
      if (problems.length > 5) break;
    }
    if (problems.length > 5) break;
  }
  assert.deepEqual(problems, []);
  assert.equal(rounds, 2000);
});

test('odds: fractional display agrees with decimal; ladder snapping; probabilities sum to 1', () => {
  for (const p of [0.9, 0.6, 0.5, 0.33, 0.22, 0.1, 0.05, 0.01]) {
    const o = oddsFromProb(p, 0);
    const [n, d] = o.display === 'evens' ? [1, 1] : o.display.split('/').map(Number);
    assert.ok(LADDER.some(([a, b]) => a === n && b === d));
    assert.ok(Math.abs(o.win - (n / d + 1)) < 1e-3);
  }
  const pr = winProbs([1200, 1210, 1220, 1230, 1240], 22);
  assert.ok(Math.abs(pr.reduce((a, b) => a + b, 0) - 1) < 1e-9);
  assert.ok(pr[0] > pr[1] && pr[3] > pr[4]);
  const r = mk({ rng: 77 });
  for (const x of r.public.runners) { const [n, d] = x.odds.display === 'evens' ? [1, 1] : x.odds.display.split('/').map(Number); assert.ok(Math.abs(x.odds.win - (n / d + 1)) < 1e-3); }
  const book = r.public.runners.reduce((s, x) => s + 1 / x.odds.win, 0);
  assert.ok(book > 0.9 && book < 1.1, `near-zero margin book, got ${book}`);
});

test('settlement: payout maths, bankrolls, h2h, contract shape', () => {
  const r = mk({ rng: 5 });
  const order = r.racePlan.finishOrder;
  const win = r.public.runners.find((x) => x.id === order[0]);
  const lose = r.public.runners.find((x) => x.id === order[4]);
  const m = r.public.matchups[0];
  const better = order.indexOf(m.a) < order.indexOf(m.b) ? m.a : m.b;
  const bets = {
    p1: [{ type: 'win', runnerId: win.id, stake: 100 }, { type: 'h2h', matchupId: m.id, pick: better, stake: 50 }],
    p2: [{ type: 'win', runnerId: lose.id, stake: 200 }, { type: 'h2h', matchupId: m.id, pick: better === m.a ? m.b : m.a, stake: 30 }],
  };
  const res = settleRound(r, bets, { p1: 1000, p2: 1000 });
  const h2hOdds = better === m.a ? m.odds.a : m.odds.b;
  const ret1 = Math.round(100 * win.odds.win) + Math.round(50 * h2hOdds);
  assert.equal(res.payouts.p1.bankroll, 1000 - 150 + ret1);
  assert.equal(res.payouts.p1.net, ret1 - 150);
  assert.deepEqual(res.payouts.p1.bets.map((b) => b.won), [true, true]);
  assert.equal(res.payouts.p2.bankroll, 1000 - 230);
  assert.deepEqual(res.payouts.p2.bets.map((b) => b.returned), [0, 0]);
  assert.equal(res.roundId, r.id);
  assert.deepEqual(res.finishOrder.map((f) => f.runnerId), order);
  for (const f of res.finishOrder) assert.match(f.timeText, /^\d+:\d\d$/);
  assert.equal(res.reveal.length, 5);
  for (const rv of res.reveal) { assert.match(rv.date, /^\d{4}-\d\d-\d\d$/); assert.match(rv.dateText, /^(Sat|Sun|Mon|Tue|Wed|Thu|Fri)\w+ \d{1,2} \w+ \d{4}$/); assert.ok(Array.isArray(rv.funFacts)); }
  assert.equal(res.clueReview.length, 15);
  for (const c of res.clueReview) { assert.ok(['useful', 'red_herring', 'neutral'].includes(c.verdict)); assert.ok(c.quip); assert.ok(c.owner === 'public' || c.owner in bets); }
  assert.ok(res.archetype.key && res.archetype.label && res.archetype.blurb);
  assert.ok(Array.isArray(res.awards) && res.awards.every((a) => a.playerId && a.title && a.text));
  assert.ok(res.commentary.length >= 1 && res.commentary.every((c) => c.text && ['jeff', 'pam'].includes(c.speaker)));
  // no bets at all
  const res0 = settleRound(r, {}, { p1: 500, p2: 700 });
  assert.equal(res0.payouts.p1.bankroll, 500); assert.equal(res0.payouts.p2.bankroll, 700);
});

test('dead heat for first splits the win payout; h2h tie is a push', () => {
  const r = mk({ rng: 11 });
  const [a, b] = r.racePlan.finishOrder;
  r.hidden.runners.find((x) => x.id === b).officialS = r.hidden.runners.find((x) => x.id === a).officialS; // force a tie
  r.public.matchups = [{ id: 'm1', a, b, odds: { a: 1.9, b: 1.9 } }];
  const oa = r.public.runners.find((x) => x.id === a).odds.win;
  const res = settleRound(r, { p1: [{ type: 'win', runnerId: a, stake: 100 }, { type: 'h2h', matchupId: 'm1', pick: b, stake: 40 }] }, { p1: 1000 });
  assert.equal(res.payouts.p1.bets[0].returned, Math.round((100 * oa) / 2));
  assert.equal(res.payouts.p1.bets[1].returned, 40);
  assert.equal(res.payouts.p1.bets[1].push, true);
});

test('drinking mode adds sip prompts only when enabled', () => {
  const r = mk({ rng: 3, settings: { drinks: true } });
  const last = r.racePlan.finishOrder[4];
  const res = settleRound(r, { p1: [{ type: 'win', runnerId: last, stake: 50 }], p2: [] }, { p1: 1000, p2: 1000 });
  assert.ok(res.drinks.some((d) => d.playerId === 'p1'));
  const r2 = mk({ rng: 3 });
  assert.equal(settleRound(r2, {}, {}).drinks, undefined);
});

test('commentary: spaced out, short, never repeated within a session', () => {
  const sess = freshSess();
  const seen = new Set();
  for (let k = 1; k <= 8; k++) {
    const r = createRound({ hist, sess, players: P2, roundNumber: k, settings: { sessionId: 'comm' }, rng: 500 + k });
    const c = r.racePlan.commentary;
    for (let i = 1; i < c.length; i++) assert.ok(c[i].broadcastS - c[i - 1].broadcastS >= 4.5, `gap ${c[i].broadcastS - c[i - 1].broadcastS}`);
    for (const l of [...c, ...r.public.introLines]) {
      assert.ok(countWords(l.text) <= 22, `too long: ${l.text}`);
      assert.ok(!seen.has(l.text), `repeated: ${l.text}`);
      seen.add(l.text);
    }
    assert.ok(c.some((l) => l.priority === 1));
    const res = settleRound(r, { p1: [{ type: 'win', runnerId: 'r1', stake: 100 }] }, { p1: 1000, p2: 1000 });
    for (const l of res.commentary) seen.add(l.text);
  }
});

test('session variety: no performance reused within an 8-round session; usage is written', () => {
  const sess = freshSess();
  const used = new Set();
  for (let k = 1; k <= 8; k++) {
    const r = createRound({ hist, sess, players: P2, roundNumber: k, settings: { sessionId: 'var' }, rng: 70 + k });
    for (const x of r.hidden.runners) { assert.ok(!used.has(x.date), `reused ${x.date}`); used.add(x.date); }
  }
  assert.equal(sess.prepare('SELECT COUNT(*) n FROM usage').get().n, 40);
});

test('settings defaults', () => {
  const s = normalizeSettings({});
  assert.equal(s.startingBankroll, 1000); assert.equal(s.rounds, 8); assert.equal(s.drinks, false);
});
