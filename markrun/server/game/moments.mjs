// Premium-moment commentary (no imports, browser-safe): cold open, lock-in callouts, finish stamps, rematch, awards.
// Every function returns { speaker, text } objects (or arrays of them); lines are short for TTS.
const pick = (arr, rng = Math.random) => arr[Math.floor(rng() * arr.length)];
const names = (players) => (players || []).map((p) => (typeof p === 'string' ? p : p?.name)).filter(Boolean);
const list = (ns) => (ns.length <= 1 ? ns[0] || 'everyone' : `${ns.slice(0, -1).join(', ')} and ${ns.at(-1)}`);
const recent = []; // avoid back-to-back repeats within a process
function fresh(arr, rng) {
  const ok = arr.filter((t) => !recent.includes(t));
  const t = pick(ok.length ? ok : arr, rng);
  recent.push(t); if (recent.length > 40) recent.shift();
  return t;
}
const fill = (t, v) => t.replace(/\{(\w+)\}/g, (_, k) => (v[k] != null ? String(v[k]) : ''));

// Cold open: Jeff and Pam greet the players by name (2-3 lines).
export function coldOpenLines(players, rng) {
  const ns = names(players);
  const v = { all: list(ns), a: ns[0] || 'our first player', b: ns[1] || ns[0] || 'our guest' };
  const out = [
    { speaker: 'jeff', text: fill(fresh(['Good evening, {all}! Welcome to MARKRUN!', 'Live from the sofa, it\'s MARKRUN! Hello, {all}!', 'Ladies and gentlemen, {all}! The parkrun betting spectacular starts now!'], rng), v) },
    { speaker: 'pam', text: fill(fresh(ns.length >= 2 ? ['{a}, {b}. I\'ve seen your betting. I\'m worried.', 'Evening, {a}. Evening, {b}. Try to read the clues this time.', 'Hello {a}, hello {b}. Somebody\'s going home poorer.'] : ['Evening, {a}. Just you and the bookie tonight.', 'Hello, {a}. Try to finish with a positive score.'], rng), v) },
  ];
  if (ns.length >= 2 && (rng ?? Math.random)() < 0.6) out.push({ speaker: 'jeff', text: fill(fresh(['Real runs, fake money, genuine grudges! Let\'s go!', 'Grab a drink, grab your phones, here we go!'], rng), v) });
  return out;
}

// Lock-in callout as a player locks their bets.
export function lockLine(player, rng) {
  const name = typeof player === 'string' ? player : player?.name || 'Somebody';
  return { speaker: (rng ?? Math.random)() < 0.6 ? 'jeff' : 'pam', text: fill(fresh(['{n}\'s in!', '{n} is locked and loaded!', 'And {n} has committed!', '{n}: no going back now!', '{n} has pressed the button. Brave.', 'Bets in from {n}!'], rng), { n: name }) };
}

// Finish stamp for one player: playerNet = { name, net, staked? }.
export function stampLine(playerNet, rng) {
  const { name = 'Somebody', net = 0 } = playerNet || {};
  if (net > 0) return { speaker: 'jeff', text: fill(fresh(['{N} WINS {x}!', '{n} cashes in: plus {x}!', 'Kerching! {x} to {n}!'], rng), { n: name, N: name.toUpperCase(), x: net }) };
  if (net < 0) return { speaker: 'pam', text: fill(fresh(['{n}\'s {x} goes up in smoke.', '{n} is down {x}. Unlucky.', 'That\'s {x} of {n}\'s money gone.'], rng), { n: name, x: Math.abs(net) }) };
  return { speaker: 'pam', text: fill(fresh(['{n} breaks even. Thrilling.', 'Nothing gained, nothing lost for {n}.'], rng), { n: name }) };
}

// Rematch prompt naming the loser. results: [{ name, score }] (or legacy { name, bankroll }) or { players: [...] }.
export function rematchLine(results, rng) {
  const ps = (Array.isArray(results) ? results : results?.players || []).filter((p) => p && p.name);
  if (ps.length < 2) return { speaker: 'jeff', text: 'Same again? The runners are ready when you are!' };
  const sc = (p) => p.score ?? p.bankroll ?? 0;
  const sorted = [...ps].sort((a, b) => sc(a) - sc(b));
  const loser = sorted[0].name, winner = sorted.at(-1).name;
  return { speaker: 'pam', text: fill(fresh(['{l}, are you going to let {w} get away with that? Rematch?', 'Rematch? {l} looks like they want one.', '{l}, revenge is one more game away.', 'I believe {l} is demanding a rematch. Loudly.'], rng), { l: loser, w: winner }) };
}

// Champion awards: one line each, from sessionSuperlatives() entries ({ title, text }).
export function awardLines(superlatives, rng) {
  return (superlatives || []).map((s, i) => ({ speaker: i % 2 ? 'pam' : 'jeff', text: `${s.title}! ${s.text}` }));
}

// ---------- NEWS-DESK COLD OPEN (start of a game) ----------
// A sports-news parody: Jeff and Pam at the desk explain the game in 6-8 short lines (each <= 16 words):
// welcome, real runs and real times, one public + one secret clue, "favourite" = likely winner, the per-round budget
// with profit banked to the score, the double-payout finale, sign-off. Returned as an array of { speaker, text },
// with a `ticker` property (scrolling headlines for the strap). settings: { roundBudget | budget, rounds, runnerPlayerId }.
const ND = {
  welcome: ['Good evening. This is MARKRUN, live from a sofa in North London.', 'Good evening, and welcome to MARKRUN. Tonight\'s top story: {all}.',
    'Good evening. You\'re watching MARKRUN. I\'m Jeff Bellows, and this is huge.'],
  real: ['Five of Mark\'s real parkruns each round. Real results, real times. No refunds.', 'Every runner is Mark, on a different Saturday. The times are real. The outfits are not.',
    'All five are the real Mark, on five different Saturdays. Every time is official.'],
  clues: ['Each runner gets one public clue on the telly, and one secret clue on your phone.', 'One clue on the big screen for everyone. One secret clue each, on your phone.'],
  fav: ['The favourite is the bookie\'s likely winner. The outsider is everyone else\'s excuse.', 'Shortest odds means favourite: the likely winner. Likely. This is still parkrun.'],
  budget: ['You each get {budget} parkpounds to bet every round. Any profit is banked to your score.', 'A fresh {budget} to bet each round. Profit is banked. Losses come off your score.'],
  double: ['The final round pays double, which is traditionally when couples stop speaking.', 'And the final round pays double. Please keep the remote out of reach.'],
  mark: ['{mark} is playing. He remembers these runs, so {other} gets an extra hot tip.', 'The real {mark} is playing. He was there, so {other} gets an extra hot tip.'],
  signoffPam: ['That\'s the news. Phones out, {all}. Over to Finsbury Park.', 'Phones out, {all}. Back to Finsbury Park, where the real Mark is still running.'],
  signoff: ['That\'s the news. {all}: phones out. Over to Finsbury Park!', 'Phones at the ready, {all}. Now, over to Finsbury Park!'],
  reply: ['It\'s a recording, Jeff. It\'s always been a recording.', 'Jeff, we are in a cupboard.', 'We\'re not really in a studio, Jeff.'],
};
const TICKER = ['BREAKING: Local man still running in circles in North London', 'Finsbury Park Hill "no flatter than last week", say marshals',
  'Bookies slash odds on someone blaming the wind', 'Café queue reaches record length after 9.32am', 'Barcode found in washing machine, again',
  'Duck on boating lake declines to comment', 'Experts warn: final round pays double', 'Strava kudos inflation hits new high'];
export function newsDeskScript(players, settings = {}, rng) {
  const r = typeof rng === 'function' ? rng : Math.random;
  const ps = (players || []).map((p) => (typeof p === 'string' ? { name: p } : p)).filter((p) => p?.name);
  const ns = ps.map((p) => p.name);
  const budget = Math.round(Number(settings.roundBudget ?? settings.budget) || 500);
  const mark = ps.find((p) => p.id != null && p.id === settings.runnerPlayerId);
  const other = mark && ps.find((p) => p !== mark);
  const v = { all: list(ns), budget, mark: mark?.name, other: other?.name };
  const say = (speaker, key) => ({ speaker, text: fill(pick(ND[key], r), v) });
  const out = [say('jeff', 'welcome'), say('pam', 'real'), say('jeff', 'clues'), say('pam', 'fav'), say('jeff', 'budget'), say('pam', 'double')];
  if (mark && other) out.push(say('jeff', 'mark'), say('pam', 'signoffPam'));
  else out.push(say('jeff', 'signoff'), say('pam', 'reply'));
  out.ticker = [...TICKER].sort(() => r() - 0.5).slice(0, 5);
  return out;
}
