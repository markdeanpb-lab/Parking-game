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
    { speaker: 'pam', text: fill(fresh(ns.length >= 2 ? ['{a}, {b}. I\'ve seen your betting. I\'m worried.', 'Evening, {a}. Evening, {b}. Try to read the clues this time.', 'Hello {a}, hello {b}. Somebody\'s going home poorer.'] : ['Evening, {a}. Just you and the bookie tonight.', 'Hello, {a}. Try not to bankrupt yourself.'], rng), v) },
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

// Rematch prompt naming the loser. results: [{ name, bankroll }] or { players: [...] }.
export function rematchLine(results, rng) {
  const ps = (Array.isArray(results) ? results : results?.players || []).filter((p) => p && p.name);
  if (ps.length < 2) return { speaker: 'jeff', text: 'Same again? The runners are ready when you are!' };
  const sorted = [...ps].sort((a, b) => (a.bankroll ?? 0) - (b.bankroll ?? 0));
  const loser = sorted[0].name, winner = sorted.at(-1).name;
  return { speaker: 'pam', text: fill(fresh(['{l}, are you going to let {w} get away with that? Rematch?', 'Rematch? {l} looks like they want one.', '{l}, revenge is one more game away.', 'I believe {l} is demanding a rematch. Loudly.'], rng), { l: loser, w: winner }) };
}

// Champion awards: one line each, from sessionSuperlatives() entries ({ title, text }).
export function awardLines(superlatives, rng) {
  return (superlatives || []).map((s, i) => ({ speaker: i % 2 ? 'pam' : 'jeff', text: `${s.title}! ${s.text}` }));
}
