// Game module tests: contract shape, leak checker, payouts, determinism, clue counts, colours, commentary pacing.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { historyDb } from '../server/db.mjs';
import { createRound, settleRound, betReactionLines, normalizeSettings, inPlayMarket, betRevealOrder, sessionSuperlatives } from '../server/game/round.mjs';
import { tipIsTrue, finishSteer, TIP_TYPES } from '../server/game/hottips.mjs';
import { skeleton } from '../server/game/clues.mjs';
import { isPBDay } from '../server/game/select.mjs';
import { revealCard } from '../server/game/settle.mjs';
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
      const r = createRound({ hist, sess, players: P2, roundNumber: k, settings: { sessionId: `leak${s}`, selectTries: 10, wildcardRate: 0.3, funfairRate: 0.3, alternatives: 2 }, rng: 9000 + s * 10 + k });
      const ctx = { ...leakContext(Object.values(r.hidden.perfs)), raceWords: loadData(hist).raceWords, nicknames: r.public.runners.flatMap((x) => [x.nickname, x.shortName]) };
      if (r.hidden.leaks.length) problems.push(...r.hidden.leaks.map((l) => JSON.stringify(l)));
      problems.push(...checkRound(r, ctx));
      // declutter: every clue is a <= 8-word headline + a <= 10-word kicker, and text = headline + ' ' + kicker
      for (const c of [...r.public.runners.map((x) => x.publicClue), ...Object.values(r.private).flat()]) {
        if (!(c.headline && c.kicker)) problems.push(`missing headline/kicker: ${c.text}`);
        else {
          if (countWords(c.headline) > 8) problems.push(`headline > 8 words: ${c.headline}`);
          if (countWords(c.kicker) > 10) problems.push(`kicker > 10 words: ${c.kicker}`);
          if (c.text !== `${c.headline} ${c.kicker}`) problems.push(`text mismatch: ${c.text}`);
        }
      }
      // props: only plausible ones
      for (const pr of r.public.props || []) {
        if (pr.id === 'funfair' && !(r.hidden.divOpen || r.public.theme.key === 'funfair')) problems.push('funfair prop offered when no funfair runner was possible');
        if (!['funfair', 'photo', 'latelead'].includes(pr.id)) problems.push(`unknown prop ${pr.id}`);
      }
      // the betting-phase commentary must be clean too
      problems.push(...betReactionLines(r, { p1: [{ type: 'win', runnerId: 'r1', stake: 300 }], p2: [] }, P2).flatMap((l) => checkText(l.text, ctx)));
      problems.push(...betRevealOrder(r, { p1: [{ type: 'win', runnerId: 'r2', stake: 300 }, { type: 'prop', propId: 'funfair', pick: 'yes', stake: 10 }], p2: [{ type: 'h2h', matchupId: 'm1', pick: r.public.matchups[0].a, stake: 20 }] }, { p1: 1000, p2: 1000 }, P2)
        .flatMap((x) => checkText(x.line.text, ctx, { allowFunfair: true })));
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

test('hot tips: one per player (two for the non-runner), always true, never priced', () => {
  for (let s = 1; s <= 120; s++) {
    const runner = s % 2 === 0 ? 'p1' : null;
    const r = mk({ rng: 3000 + s, settings: { runnerPlayerId: runner } });
    const plan = r.racePlan;
    for (const p of P2) {
      const hot = r.private[p.id].filter((c) => c.tier === 'hot');
      const expect = runner && p.id !== runner ? 2 : 1;
      assert.equal(hot.length, expect, `player ${p.id} hot tips`);
      assert.ok(r.private[p.id].every((c) => c.tier === 'hot' || c.tier === 'gossip'));
      assert.equal(new Set(hot.map((c) => c.runnerId)).size, hot.length, 'one hot tip per runner per player');
    }
    const tipped = Object.values(r.hidden.hotTips).flat();
    if (tipped.length <= 5) assert.equal(new Set(tipped.map((t) => t.runnerId)).size, tipped.length, 'different runners across players');
    for (const [pid, list] of Object.entries(r.hidden.hotTips)) for (const t of list) {
      assert.ok(tipIsTrue(plan.runners, { events: plan.events }, t), `false tip ${t.type}`);
      if (TIP_TYPES[t.type].pair) assert.equal(t.polarity, 1, 'relational tips sit on the runner who was ahead');
      if (t.steer) assert.equal(t.steer, finishSteer(plan.runners.find((x) => x.id === t.runnerId)), 'pacing steer is true');
      const c = r.hidden.clues[t.runnerId].private[pid];
      assert.equal(c.tier, 'hot'); assert.deepEqual(c.features, []); // the bookie cannot price it
      assert.ok(!/\{other\}/.test(c.text));
    }
  }
});

test('no clue wording repeated within a round; styles are mixed', () => {
  const tot = { hedge: 0, fact: 0, tipster: 0 };
  for (let s = 1; s <= 60; s++) {
    const r = mk({ rng: 4000 + s });
    const texts = Object.values(r.hidden.clues).flatMap((c) => [c.public, ...Object.values(c.private)]).filter((c) => c.tier !== 'hot');
    const sk = texts.map((c) => c.style === 'tipster' ? `${skeleton(c.text.split(/ (Jeff|Pam)/)[0])}|tip` : skeleton(c.text));
    assert.equal(new Set(sk).size, sk.length, `repeat in round: ${sk.join(' / ')}`);
    for (const c of texts) tot[c.style] = (tot[c.style] || 0) + 1;
  }
  const n = tot.hedge + tot.fact + tot.tipster;
  for (const k of ['hedge', 'fact', 'tipster']) assert.ok(tot[k] / n > 0.22 && tot[k] / n < 0.45, `${k} share ${tot[k] / n}`);
});

test('themes, bands and PB caps', () => {
  for (let s = 0; s < 6; s++) {
    const sess = freshSess();
    for (let k = 1; k <= 8; k++) {
      const r = createRound({ hist, sess, players: P2, roundNumber: k, settings: { sessionId: `th${s}`, selectTries: 30 }, rng: 6000 + s * 10 + k });
      assert.ok(r.public.theme?.key && r.public.theme.label && r.public.theme.blurb);
      assert.ok(Object.values(r.hidden.perfs).filter(isPBDay).length <= 1, 'at most one PB-day run');
      if (k === 1) assert.ok(r.hidden.runners.every((x) => x.officialS >= 1185), 'round 1 never draws from the fastest band');
      assert.equal(r.public.payoutMultiplier, k === 8 ? 2 : 1);
      assert.ok(!('archetype' in r.public));
    }
  }
});

test('prop, in-play and multiplier settlement', () => {
  const sess = freshSess();
  let r;
  for (let k = 1; k <= 8; k++) r = createRound({ hist, sess, players: P2, roundNumber: k, settings: { sessionId: 'mult', rounds: 8, selectTries: 20 }, rng: 7100 + k });
  assert.equal(r.public.payoutMultiplier, 2);
  const order = r.racePlan.finishOrder;
  const win = r.public.runners.find((x) => x.id === order[0]);
  const prop = r.public.props?.[0] ?? { id: 'none', odds: { yes: 2, no: 2 } };
  const outcome = r.hidden.propOutcomes[prop.id] ?? 'yes';
  const ip = inPlayMarket(r);
  assert.equal(ip.atM, 2500);
  assert.deepEqual(ip.standings.map((x) => x.place), [1, 2, 3, 4, 5]);
  assert.equal(ip.standings[0].gapS, 0);
  assert.ok(ip.standings.every((x, i) => i === 0 || x.gapS >= ip.standings[i - 1].gapS));
  const book = Object.values(ip.odds).reduce((s2, o) => s2 + 1 / o.win, 0);
  assert.ok(book > 0.85 && book < 1.15, `in-play book ${book}`);
  const bets = { p1: [{ type: 'win', runnerId: win.id, stake: 100 }, { type: 'prop', propId: prop.id, pick: outcome, stake: 50 }],
    p2: [{ type: 'inplay', runnerId: order[0], stake: 40, odds: 999 }, { type: 'prop', propId: prop.id, pick: outcome === 'yes' ? 'no' : 'yes', stake: 30 }] };
  const res = settleRound(r, bets, { p1: 1000, p2: 1000 });
  const dbl = (stake, dec) => Math.round(stake * (1 + 2 * (dec - 1)));
  const [w, pr] = res.payouts.p1.bets;
  if (!res.deadHeat) assert.equal(w.returned, dbl(100, win.odds.win));
  if (r.public.props?.length) assert.equal(pr.returned, dbl(50, outcome === 'yes' ? prop.odds.yes : prop.odds.no));
  else assert.equal(pr.returned, 50, 'a bet on a prop that was not offered is refunded');
  const [ipb, pr2] = res.payouts.p2.bets;
  if (!res.deadHeat) assert.equal(ipb.returned, dbl(40, ip.odds[order[0]].win), 'in-play uses the market price, not the client claim');
  if (r.public.props?.length) assert.equal(pr2.returned, 0);
  assert.equal(res.payoutMultiplier, 2);
});

test('bet reveal order, clash lines, superlatives, highlights and headlines', () => {
  const r = mk({ rng: 81 });
  const [a, b] = r.public.runners;
  const m = r.public.matchups[0];
  const bets = { p1: [{ type: 'win', runnerId: a.id, stake: 20 }, { type: 'h2h', matchupId: m.id, pick: m.a, stake: 30 }], p2: [{ type: 'win', runnerId: a.id, stake: 600 }, { type: 'h2h', matchupId: m.id, pick: m.b, stake: 40 }] };
  const seq = betRevealOrder(r, bets, { p1: 1000, p2: 1000 }, P2);
  assert.equal(seq.length, 4);
  const fr = seq.map((x) => x.bet.stake / 1000);
  assert.deepEqual(fr, [...fr].sort((x, y) => x - y), 'smallest to largest relative stake');
  const all = seq.map((x) => x.line.text).join(' ');
  assert.match(all, /both|too|Snap|as well/i, 'clash named');
  assert.match(all, /opposite|opposition|sofa to sofa|against/i, 'h2h opposition named');
  for (const x of seq) assert.ok(['jeff', 'pam'].includes(x.line.speaker));
  const res = settleRound(r, bets, { p1: 1000, p2: 1000 });
  assert.ok(res.clueReview.filter((c) => c.highlight).length <= 3);
  for (const rv of res.reveal) assert.ok(rv.headline.includes(rv.dateText) && rv.headline.includes(rv.timeText));
  const sup = sessionSuperlatives([{ number: 1, round: { public: r.public, hidden: r.hidden }, bets, results: res }], P2.map((p) => ({ ...p, bankroll: res.payouts[p.id].bankroll })));
  assert.ok(sup.length >= 3 && sup.every((x) => x.title && x.text));
  assert.ok(sup.some((x) => x.title === 'The Real Mark of the Night'));
});

test('reveal cards: no repeated jokes on one screen; lying heart-rate monitors are a joke, not a stat', () => {
  const data = loadData(hist);
  const used = new Set();
  const pbs = data.perfs.filter((p) => p.result.pbFlag === 'PB').slice(0, 5);
  const facts = pbs.map((p) => revealCard('r', p, used).funFacts).flat();
  assert.equal(new Set(facts).size, facts.length);
  const fake = { ...data.byDate.get('2024-10-05'), hr: Array(201).fill(158) };
  const card = revealCard('r', fake, new Set());
  assert.ok(card.funFacts.some((f) => /lying watch/.test(f)));
  assert.ok(!card.funFacts.some((f) => /peaked at/.test(f)));
});

test('trailing player in the final round gets an extra hot tip; tipster openers never repeat in a round', () => {
  const r = mk({ rng: 9100, settings: { trailingPlayerId: 'p2' } });
  assert.equal(r.private.p2.filter((c) => c.tier === 'hot').length, 2);
  assert.equal(r.private.p1.filter((c) => c.tier === 'hot').length, 1);
  const r2 = mk({ rng: 9101, settings: { trailingPlayerId: 'p2', runnerPlayerId: 'p1' } });
  assert.equal(r2.private.p2.filter((c) => c.tier === 'hot').length, 3);
  for (let s2 = 0; s2 < 60; s2++) {
    const rr = mk({ rng: 9200 + s2 });
    const intros = Object.values(rr.hidden.clues).flatMap((c) => [c.public, ...Object.values(c.private)])
      .filter((c) => c.style === 'tipster').map((c) => c.text.match(/((?:Jeff|Pam)[^:"]*:) "/)?.[1]);
    assert.ok(intros.every(Boolean));
    assert.equal(new Set(intros).size, intros.length, `repeated opener: ${intros.join(' | ')}`);
  }
});

test('generic Strava titles lead with the most entertaining true fact', () => {
  const data = loadData(hist);
  for (const p of data.perfs) {
    const c = revealCard('r', p, new Set());
    if (!c.genericTitle) continue;
    assert.ok(c.funFacts.length >= 1);
    if (p.diversions?.length) assert.match(c.funFacts[0], /funfair|fairground/);
    else if (p.result.pbFlag === 'PB') assert.match(c.funFacts[0], /PB/);
  }
});

test('reveal punchlines: one short true line per card, never the same shape twice on a screen', () => {
  const data = loadData(hist);
  for (let i = 0; i + 5 <= data.perfs.length; i += 5) {
    const used = new Set();
    const cards = data.perfs.slice(i, i + 5).map((p) => revealCard('r', p, used));
    for (const c of cards) assert.ok(c.punchline && countWords(c.punchline) <= 12, c.punchline);
  }
  const r = mk({ rng: 99 });
  const res = settleRound(r, {}, { p1: 1000, p2: 1000 });
  const shapes = res.reveal.map((x) => x.punchline.replace(/-?\d+(:\d\d)?/g, '#'));
  assert.equal(new Set(shapes).size, shapes.length);
});
