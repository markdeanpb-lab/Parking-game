// MARKRUN phone controller: a click-through flow of single-purpose screens (no vertical scrolling).
// Join -> lobby -> this round (theme + budget) -> meet the field (one runner per screen) -> head-to-head duel ->
// funfair side bet (Funfair Stakes only) -> review -> HOLD to lock -> locked -> race (your runners live + reactions) ->
// halfway market -> results (one card per screen) -> standings.
// Economy: a fresh betting BUDGET every round ("Budget left" while betting); the round's net is banked into a SCORE.
import { connect } from '../shared/net.js';
import { $, $$, esc, money, signedMoney, ordinalHtml, avatarHtml, runnerById, runnerShort, betLabel, betRunnerId, oddsText, betOutcome, confetti, clueParts, betWin, rankHtml, runnerRank, winsHtml, EXAMPLE_STAKE, themeIcon, clueHeadline } from '../shared/ui.js';
import { runnerPortrait } from '../shared/portrait.js';
import { createAudio } from '../shared/sfx.js';

const audio = createAudio(); // tiny UI sounds (chip taps); unlocked by the first touch
window.addEventListener('pointerdown', () => { if (!audio.ready()) { audio.unlock(); audio.setVolume(0.6); } }, { capture: true });

const AVATAR_EMOJI = ['🦊', '🐸', '🦉', '🐙', '🦄', '🐯', '🐼', '🦖', '🐧', '🐝', '🦩', '🐶'];
const AVATAR_COLOURS = ['#ff4d5a', '#ffb000', '#2ec27e', '#2f8cff', '#9b5cff', '#ff6fb5', '#13c4c4', '#ff7a1a'];
const HURRY_S = 20; // soft bet timer: the "hurry up" nudge starts this many seconds before the slip is locked
const store = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* */ } },
};
const TOKEN_KEY = 'markrun.token';
const app = $('#app');
const modal = $('#modal');

let S = null;           // latest phone view
let me = null;          // S.me
let lobby = null;       // pre-join lobby info
let joinErr = '';
let slip = [];          // working bet slip
let slipRound = null;   // round id the slip belongs to
let viewKey = '';
let step = 0;           // betting flow position
let tray = null;        // open chip tray: { kind:'win'|'h2h'|'prop', id, pick?, stake }
let resCard = 0;        // results pager
let holding = false;    // finger on HOLD TO LOCK: don't re-render under it
let profile = store.get('markrun.profile', { name: '', avatar: { emoji: AVATAR_EMOJI[Math.floor(Math.random() * 12)], colour: AVATAR_COLOURS[Math.floor(Math.random() * 8)] } });

const vibrate = (p) => { try { navigator.vibrate?.(p); } catch { /* */ } };
const portrait = (r, size) => runnerPortrait(r, { size, idSuffix: `p${Math.random().toString(36).slice(2, 6)}` });
const nameOf = (r) => (r?.nickname && r.nickname.length <= 20 ? r.nickname : runnerShort(r));
const scoreText = (n) => signedMoney(n || 0);

const net = connect({
  role: 'phone',
  getToken: () => store.get(TOKEN_KEY),
  onStatus: (st) => $('#offline').classList.toggle('hidden', st === 'open' || st === 'connecting'),
  onWelcome: (m) => {
    if (m.playerId && m.token) { store.set(TOKEN_KEY, m.token); }
    else if (m.tokenRejected) store.del(TOKEN_KEY);
    if (!m.playerId) { S = null; me = null; render(); }
  },
  onState: (st) => { S = st; me = st.me; onState(); },
  onMessage: (m) => {
    if (m.t === 'lobby') { lobby = m; if (!me) render(); }
    else if (m.t === 'error') {
      if (!me) { joinErr = m.msg; render(); }
      toast(m.msg, 'red'); vibrate([60, 40, 60]);
    } else if (m.t === 'kicked') { store.del(TOKEN_KEY); S = null; me = null; toast('You were removed from the game', 'red'); render(); }
    else if (m.t === 'locked') { vibrate(80); }
    else if (m.t === 'inplayOk') { toast('✓ Halfway bet placed!'); }
    else if (m.t === 'claimPending') { viewKey = 'claim'; app.innerHTML = screen('', `<div class="big-emoji">📺</div><h1 class="h">Ask the TV</h1><p class="sub">Waiting for someone to press <b>Allow</b> on the TV to take over ${esc(m.name)}'s seat…</p>`, ''); }
  },
});
const send = (m) => net.send(m);

let wakeLock = null;
async function keepAwake() {
  try { if ('wakeLock' in navigator && document.visibilityState === 'visible' && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener?.('release', () => { wakeLock = null; }); } } catch { /* not allowed: ignore */ }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') keepAwake(); });
window.addEventListener('pointerdown', keepAwake, { once: true });

function toast(msg, kind = '') {
  const host = $('#ptoast');
  host.innerHTML = `<div class="t ${kind}">${esc(msg)}</div>`;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => { host.innerHTML = ''; }, 2400);
}

// ---------------------------------------------------------------------------------------------------
// screen scaffold: [top bar] [progress strip] [main: one job] [actions in the thumb zone]
function screen(top, main, actions, { dots = '', cls = '' } = {}) {
  return `<div class="scr ${cls}">${top}${dots}<div class="main">${main}</div><div class="acts">${actions}</div></div>`;
}
const bettingOpen = () => (S.phase === 'INTRO' || S.phase === 'BETTING') && !me.locked && !S.revealed;
function secsLeft() { return S?.deadline ? Math.max(0, Math.ceil((S.deadline - net.serverNow()) / 1000)) : null; }
function clockHtml() {
  if (!S || S.phase !== 'BETTING' || S.revealed || !S.deadline || me?.locked) return '';
  const s = secsLeft();
  return `<span class="clock ${s <= HURRY_S ? 'hurry' : ''}" id="clock">⏱ ${s}s</span>`;
}
// Header: who you are + the ONE number that matters right now.
//   betting -> budget left this round; race -> "if it ended now"; everywhere else -> your score.
function topbar() {
  if (!me || !S) return '';
  const inRound = S.round && S.phase !== 'LOBBY';
  const ph = inRound ? `Round ${S.roundNumber}/${S.roundsPerGame}${isFinale() ? ' · ×2' : ''}` : 'Lobby';
  let big, label, sub = ph;
  if (bettingOpen()) { big = money(Math.max(0, left())); label = 'budget left'; }
  else if (S.phase === 'RACE' && Number.isFinite(me.live?.ifNow)) {
    big = signedMoney(me.live.ifNow); label = 'if it ended now';
    sub = `${ph} · score ${scoreText(me.score)}`;
  } else { big = scoreText(me.score); label = 'score'; }
  const tone = label === 'budget left' ? '' : (label === 'if it ended now' ? me.live.ifNow : me.score) > 0 ? 'up' : (label === 'if it ended now' ? me.live.ifNow : me.score) < 0 ? 'down' : '';
  return `<div class="tb">${avatarHtml(me.avatar, 36)}<div class="tn"><b>${esc(me.name)}</b><small>${esc(sub)}</small></div>${clockHtml()}
    ${S.phase === 'LOBBY' ? '' : `<div class="tm ${tone}"><b class="num">${big}</b><small>${label}</small></div>`}</div>`;
}

// ---------------------------------------------------------------------------------------------------
function onState() {
  if (!me) { render(); return; }
  const rid = S.round?.roundId || null;
  if (rid !== slipRound) {
    slipRound = rid;
    step = 0; tray = null; resCard = 0; hurried = false;
    const local = rid ? store.get(`markrun.slip.${rid}`) : null;
    slip = Array.isArray(local) && local.length ? local : (me.bets || []).map((b) => ({ ...b }));
  }
  if (me.locked) slip = (me.bets || []).map((b) => ({ ...b }));
  clampSlip();
  render();
}

function key() {
  if (!me) return `join|${lobby?.canJoin}|${(lobby?.players || []).map((p) => p.id + p.connected).join()}`;
  const ph = S.phase;
  if (ph === 'INTRO' || ph === 'BETTING') return `bet|${S.round?.roundId}|${me.locked ? 'L' : 'O'}|${S.revealed}`;
  if (ph === 'RESULTS' && me.markPrompt) return `res|${S.round?.roundId}|mark|${me.markPrompt.runnerId}|${me.markPrompt.answer || ''}`;
  if (ph === 'RESULTS') return `res|${S.round?.roundId}|${S.resultsStage >= 3 ? 'pay' : S.resultsStage >= 2 ? 'who' : 'wait'}`;
  return `${ph}|${S.round?.roundId || ''}|${S.gameNumber}`;
}

function render() {
  const k = key();
  const fresh = k !== viewKey;
  if (fresh) { viewKey = k; modal.innerHTML = ''; modal.dataset.kind = ''; resCard = k.startsWith('res|') ? 0 : resCard; }
  if (!me) { if (fresh) renderJoin(); return; }
  const ph = S.phase;
  if (ph === 'LOBBY') return renderLobby();
  if (ph === 'INTRO' || ph === 'BETTING') { if (holding && !me.locked && !S.revealed) return undefined; return me.locked || S.revealed ? renderLocked() : renderFlow(); }
  if (ph === 'RACE') { renderRace(fresh); return renderMarket(); }
  if (ph === 'RESULTS') return renderResults(fresh);
  if (ph === 'SCOREBOARD') return renderScore();
  if (ph === 'FINALE') return renderFinale(fresh);
  return undefined;
}

// soft bet timer: tick the clock in place; one buzz + toast when the hurry-up starts
let hurried = false;
setInterval(() => {
  if (!S || !me || S.phase !== 'BETTING' || S.revealed || me.locked || !S.deadline) return;
  const s = secsLeft();
  const c = $('#clock');
  if (c) { c.textContent = `⏱ ${s}s`; c.classList.toggle('hurry', s <= HURRY_S); }
  if (s <= HURRY_S && s > 0 && !hurried) { hurried = true; vibrate([40, 60, 40]); toast(`Hurry up! ${s}s — your slip locks as it is`, 'red'); }
}, 500);

// ---------------------------------------------------------------------------------------------------
// JOIN (only re-rendered when the lobby info changes, so typing isn't interrupted)
function renderJoin() {
  const canJoin = lobby ? lobby.canJoin : true;
  const offline = (lobby?.players || []).filter((p) => !p.connected);
  if (!canJoin) {
    app.innerHTML = screen('', `<div class="logo-s outlined">MARK<span>RUN</span></div><h1 class="h">Game in progress</h1>
      ${offline.length ? `<p class="sub">Is one of these you? Tap to get your seat back (the TV will ask to confirm):</p><div class="claim-list">${offline.map((p) => `<button class="btn white block" data-claim="${p.id}">${avatarHtml(p.avatar, 36)} ${esc(p.name)}</button>`).join('')}</div>` : '<p class="sub">Ask the host to start a new game from the TV.</p>'}`, '');
    app.onclick = (e) => { const b = e.target.closest('[data-claim]'); if (b) send({ t: 'claim', playerId: b.dataset.claim }); };
    return;
  }
  app.innerHTML = screen('', `<div class="logo-s outlined">MARK<span>RUN</span></div>
    <input id="nm" class="nm-in" maxlength="16" autocomplete="off" autocapitalize="words" enterkeyhint="go" placeholder="Your name" value="${esc(profile.name)}">
    <div class="emoji-grid">${AVATAR_EMOJI.map((e) => `<button data-emoji="${e}" class="${profile.avatar.emoji === e ? 'sel' : ''}" aria-label="${e}">${e}</button>`).join('')}</div>
    <div class="colour-row">${AVATAR_COLOURS.map((c) => `<button data-colour="${c}" class="${profile.avatar.colour === c ? 'sel' : ''}" style="background:${c}" aria-label="colour"></button>`).join('')}</div>
    ${joinErr ? `<p class="err">${esc(joinErr)}</p>` : (lobby?.players || []).length ? `<p class="sub small">On the sofa: ${lobby.players.map((p) => `${esc(p.avatar.emoji)} ${esc(p.name)}`).join(', ')}</p>` : ''}`,
  `<button class="btn green big-btn" id="joinbtn"><span class="pv">${avatarHtml(profile.avatar, 34)}</span> JOIN ▶</button>`, { cls: 'join' });
  const input = $('#nm');
  const upd = () => { $('.pv').innerHTML = avatarHtml(profile.avatar, 34); };
  input.addEventListener('input', () => { profile.name = input.value; });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doJoin(); });
  app.onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.emoji) { profile.avatar.emoji = b.dataset.emoji; $$('[data-emoji]').forEach((x) => x.classList.toggle('sel', x === b)); upd(); vibrate(10); }
    if (b.dataset.colour) { profile.avatar.colour = b.dataset.colour; $$('[data-colour]').forEach((x) => x.classList.toggle('sel', x === b)); upd(); vibrate(10); }
    if (b.id === 'joinbtn') doJoin();
  };
}
function doJoin() {
  const name = ($('#nm')?.value || '').trim();
  if (!name) { toast('Pick a name first!', 'red'); $('#nm')?.focus(); return; }
  profile.name = name;
  store.set('markrun.profile', profile);
  joinErr = '';
  send({ t: 'join', name, avatar: profile.avatar });
  vibrate(20);
  keepAwake();
}

// ---------------------------------------------------------------------------------------------------
// LOBBY
function renderLobby() {
  const rp = S.settings?.runnerPlayerId;
  const mine = rp === me.id;
  const other = rp && !mine ? S.players.find((p) => p.id === rp) : null;
  const rows = S.players.map((p) => `<div class="pr">${avatarHtml(p.avatar, 30)}<span>${esc(p.name)}${p.id === me.id ? ' (you)' : ''}${rp === p.id ? ' 🏃' : ''}</span><b>${!p.connected ? '📵' : p.ready ? '✅' : '…'}</b></div>`).join('');
  const budget = S.settings?.roundBudget ?? S.budget ?? 500;
  app.innerHTML = screen(topbar(), `<div class="hero">${avatarHtml(me.avatar, 96)}</div><h1 class="h">You're in!</h1>
    <p class="sub">${money(budget)} to bet every round. Winnings go on your score.</p>
    <button class="btn ${mine ? 'pink' : 'white'} block mid" id="markbtn">${mine ? "🏃 I'm Mark ✓" : other ? `🏃 ${esc(other.name)} is Mark` : "🏃 I'm Mark (the runner)"}</button>
    <div class="plist">${rows}</div>`,
  readyBtn(me.ready ? '✓ READY — waiting…' : "I'M READY ▶"));
  app.onclick = (e) => {
    if (e.target.closest('#markbtn')) { send({ t: 'iAmMark', value: S.settings?.runnerPlayerId !== me.id }); vibrate(15); }
    if (e.target.closest('#readybtn')) { send({ t: 'ready', value: !me.ready }); vibrate(25); }
  };
}
function readyBtn(label) { return `<button class="btn ${me.ready ? 'white' : 'green'} big-btn" id="readybtn">${label}</button>`; }

// ---------------------------------------------------------------------------------------------------
// BETTING FLOW
const rules = () => ({ minStake: S.round?.rules?.minStake ?? 10, maxBets: S.round?.rules?.maxBetsPerPlayer ?? 3 });
const staked = () => slip.reduce((a, b) => a + (b.stake || 0), 0);
const budgetOf = () => (Number.isFinite(me?.budget) ? me.budget : Number.isFinite(S?.round?.rules?.budget) ? S.round.rules.budget : Number.isFinite(me?.stakeCap) ? me.stakeCap : 500);
const isFinale = () => Number(S?.round?.payoutMultiplier) >= 2;
const left = () => budgetOf() - staked();
const matchups = () => (S.round?.matchups || []).slice(0, 1); // ONE head-to-head per round
function clampSlip() {
  if (!S?.round) { slip = []; return; }
  const { minStake, maxBets } = rules();
  slip = slip.filter((b) => (b.type === 'win' ? runnerById(S.round, b.runnerId) : b.type === 'prop' ? S.round.props?.some((x) => x.id === b.propId) : matchups().some((m) => m.id === b.matchupId))).slice(0, maxBets);
  for (const b of slip) b.stake = Math.max(minStake, Math.floor(b.stake || minStake));
  let over = staked() - budgetOf();
  for (let i = slip.length - 1; i >= 0 && over > 0; i--) {
    const can = slip[i].stake - minStake;
    const cut = Math.min(can, over);
    slip[i].stake -= cut; over -= cut;
    if (over > 0) { over -= slip[i].stake; slip.splice(i, 1); }
  }
}
let draftTimer = null;
function slipChanged() {
  clampSlip();
  if (slipRound) store.set(`markrun.slip.${slipRound}`, slip);
  clearTimeout(draftTimer);
  draftTimer = setTimeout(() => send({ t: 'draft', bets: slip }), 300);
}
const findBet = (kind, id) => slip.find((b) => b.type === kind && (kind === 'win' ? b.runnerId === id : kind === 'h2h' ? b.matchupId === id : b.propId === id));

function steps() {
  const r = S.round;
  return [
    { kind: 'round' },
    ...[...r.runners].sort((a, b) => a.lane - b.lane).map((x) => ({ kind: 'runner', id: x.id })),
    ...matchups().map((m) => ({ kind: 'h2h', id: m.id })),
    ...(r.props || []).map((p) => ({ kind: 'prop', id: p.id })),
    { kind: 'review' },
  ];
}
const RANK_SHORT = (round, r) => { const k = runnerRank(round, r); const n = round?.runners?.length || 5; return k === 1 ? 'FAV' : k >= n && n > 2 ? 'OUT' : k ? `${k}${['th', 'st', 'nd', 'rd'][k] || 'th'}` : ''; };
// the field at a glance on every betting screen: tap a face to jump to that runner; shortcut to Review & lock
function dotsHtml(list) {
  const faces = list.map((st, i) => {
    if (st.kind !== 'runner') return '';
    const r = runnerById(S.round, st.id);
    const bet = findBet('win', st.id);
    return `<button class="face ${i === step ? 'on' : ''} ${bet ? 'bet' : ''}" data-go="${i}" aria-label="${esc(runnerShort(r))}"><span class="fp">${portrait(r, 34)}</span><span class="fo">${RANK_SHORT(S.round, r)}</span></button>`;
  }).join('');
  const others = list.map((st, i) => (st.kind === 'runner' || st.kind === 'review' || st.kind === 'round' ? '' : `<i class="${i === step ? 'on' : ''} ${findBet(st.kind, st.id) ? 'bet' : ''}" data-go="${i}"></i>`)).join('');
  const onReview = list[step]?.kind === 'review';
  const th = `<button class="tbtn ${step === 0 ? 'on' : ''}" data-go="0" aria-label="This round">${themeIcon(S.round.theme)}</button>`;
  return `<div class="strip">${th}${faces}${others ? `<span class="sdots">${others}</span>` : ''}${onReview ? '' : `<button class="rvbtn" data-go="${list.length - 1}">Review ›</button>`}</div>`;
}
function clueBlock(c, icon, cls = '') {
  if (!c) return '';
  const { headline, kicker } = clueParts(c);
  const tag = cls === 'hot' ? '<em class="ctag hot">HOT TIP</em>' : cls === 'secret' ? '<em class="ctag">GOSSIP</em>' : '<em class="ctag pub">ON THE TELLY</em>';
  return `<div class="clue ${cls}"><span class="ci">${icon}</span><div>${tag}<b>${esc(headline)}</b>${kicker ? `<small>${esc(kicker)}</small>` : ''}</div></div>`;
}

function roundCardHtml() {
  const r = S.round;
  const t = r.theme || {};
  const ex = (Array.isArray(t.explainer) ? t.explainer : []).filter(Boolean).slice(0, 3);
  return `<div class="kick">ROUND ${S.roundNumber} OF ${S.roundsPerGame}</div>
    <div class="theme-card"><div class="ti">${themeIcon(t)}</div><div class="tl">${esc(t.label || r.title || '')}</div>${t.blurb ? `<div class="tb3">${esc(t.blurb)}</div>` : ''}
      ${ex.length ? `<ul class="tex">${ex.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div>
    ${isFinale() ? '<div class="x2">🔥 FINAL ROUND: every win pays DOUBLE</div>' : ''}
    <div class="budget-pill"><b>${money(budgetOf())}</b> to bet this round<small>winnings go on your score</small></div>`;
}

function renderFlow() {
  const list = steps();
  step = Math.max(0, Math.min(step, list.length - 1));
  const st = list[step];
  let main = '', acts = '';
  const navBack = step > 0 ? '<button class="btn white nav" data-nav="-1" aria-label="Back">‹</button>' : '';
  if (st.kind === 'round') {
    main = roundCardHtml();
    acts = '<button class="btn blue grow" data-nav="1">Meet the runners ›</button>';
  } else if (st.kind === 'runner') {
    const r = runnerById(S.round, st.id);
    const priv = (me.privateClues || []).filter((c) => c.runnerId === r.id);
    const bet = findBet('win', r.id);
    main = `<div class="rhead hero" style="--c1:${esc(r.colour.primary)}"><div class="rp">${portrait(r, 140)}</div>
        <div class="rn">${rankHtml(S.round, r)}<b>${esc(nameOf(r))}</b><span class="money">${winsHtml(S.round, { type: 'win', runnerId: r.id, stake: bet?.stake || EXAMPLE_STAKE })}</span></div></div>
      ${clueBlock(r.publicClue, '📺')}
      ${priv.map((c) => clueBlock(c, c.tier === 'hot' ? '🔥' : '🤫', c.tier === 'hot' ? 'hot' : 'secret')).join('')}
      ${bet ? `<div class="onit">✓ ${money(bet.stake)} on to win${bet.boost ? ' 🚀' : ''}</div>` : ''}
      ${mySpecial() && !slip.some((x) => x.boost) && !bet ? `<div class="special">🚀 <b>${esc(mySpecial().label || 'UNDERDOG SPECIAL')}</b> — ${esc(mySpecial().text || 'one win pick at boosted odds')}</div>` : ''}`;
    acts = tray ? trayHtml() : `${navBack}<button class="btn ${bet ? 'white' : 'yellow'} grow" data-open="win" data-id="${r.id}">${bet ? 'Change stake' : 'Back to win'}</button><button class="btn blue nav" data-nav="1" aria-label="Next">›</button>`;
  } else if (st.kind === 'h2h') {
    const m = matchups().find((x) => x.id === st.id);
    const a = runnerById(S.round, m.a), b = runnerById(S.round, m.b);
    const bet = findBet('h2h', m.id);
    const side = (r, clue) => {
      const on = bet?.pick === r.id;
      const hyp = { type: 'h2h', matchupId: m.id, pick: r.id, stake: on ? bet.stake : EXAMPLE_STAKE };
      return `<button class="side duel ${on ? 'on' : ''}" data-open="h2h" data-id="${m.id}" data-pick="${r.id}" style="--c1:${esc(r.colour.primary)}"><span class="rp">${portrait(r, 76)}</span><b>${esc(runnerShort(r))}</b>${rankHtml(S.round, r)}<span class="dm">${winsHtml(S.round, hyp)}</span>${clue ? `<span class="dc">“${esc(clue)}”</span>` : ''}${on ? `<small>✓ ${money(bet.stake)}</small>` : ''}</button>`;
    };
    const ca = clueHeadline(m.clueA) || clueHeadline(a.publicClue), cb = clueHeadline(m.clueB) || clueHeadline(b.publicClue);
    main = `<div class="kick">⚔️ HEAD-TO-HEAD</div><h1 class="h duel-h">WHO WINS THIS SCRAP?</h1>
      <div class="sides">${side(a, ca)}<span class="vs">VS</span>${side(b, cb)}</div>
      <p class="sub small">Just these two: whoever finishes ahead wins. Tap a side, or skip.</p>`;
    acts = tray ? trayHtml() : `${navBack}<button class="btn ${bet ? 'blue' : 'white'} grow" data-nav="1">${bet ? 'Next ›' : 'Skip ›'}</button>`;
  } else if (st.kind === 'prop') {
    const p = S.round.props.find((x) => x.id === st.id);
    const bet = findBet('prop', p.id);
    const yn = (k) => { const on = bet?.pick === k; const hyp = { type: 'prop', propId: p.id, pick: k, stake: on ? bet.stake : EXAMPLE_STAKE }; return `<button class="side yn ${k} ${on ? 'on' : ''}" data-open="prop" data-id="${p.id}" data-pick="${k}"><b>${k.toUpperCase()}</b><span class="dm">${winsHtml(S.round, hyp)}</span>${on ? `<small>✓ ${money(bet.stake)}</small>` : ''}</button>`; };
    const hints = (Array.isArray(p.clues) ? p.clues : []).map((c) => (typeof c === 'string' ? c : c?.headline || c?.text)).filter(Boolean);
    const lines = (hints.length ? hints : (S.round.theme?.explainer || [])).slice(0, 2);
    main = `<div class="kick">🎡 FUNFAIR SIDE BET</div><h1 class="h prop">${esc(p.text)}</h1>
      ${lines.length ? `<div class="hints">${lines.map((x) => `<div>🎢 ${esc(x)}</div>`).join('')}</div>` : ''}
      <div class="sides">${yn('yes')}${yn('no')}</div>`;
    acts = tray ? trayHtml() : `${navBack}<button class="btn ${bet ? 'blue' : 'white'} grow" data-nav="1">${bet ? 'Next ›' : 'Skip ›'}</button>`;
  } else {
    const open = S.phase === 'BETTING';
    const lines = slip.map((b, i) => `<div class="rv-line"><div class="rl"><span>${esc(betLabel(S.round, b))}</span><small>${esc(money(b.stake))} wins <b>${money(betWin(S.round, b))}</b> · ${esc(oddsText(S.round, b))}</small></div><b>${money(b.stake)}</b><button class="x" data-rm="${i}" aria-label="Remove">✕</button></div>`).join('');
    main = `<div class="kick">YOUR BETS</div>
      <div class="review">${lines || '<p class="sub">No bets yet. Sitting this one out is allowed (and cowardly).</p>'}</div>
      <div class="totals"><span>Staked <b>${money(staked())}</b></span><span>Budget left <b>${money(left())}</b></span></div>
      <p class="sub small">${isFinale() ? '🔥 Final round: every win pays double.' : 'Unspent budget is not lost: only wins and losses go on your score.'}</p>`;
    acts = `<button class="btn white nav" data-edit="1">✏️ Edit</button>${open
      ? '<button class="btn red grow hold" id="holdlock"><span class="fill"></span><span class="lbl">HOLD TO LOCK IN 🔒</span></button>'
      : '<button class="btn grow" disabled>Betting opens after the intros…</button>'}`;
  }
  app.innerHTML = screen(topbar(), main, acts, { dots: dotsHtml(list), cls: `flow ${st.kind}` });
  wireFlow(list);
}
const mySpecial = () => (S.round?.underdogSpecial && S.round.underdogSpecial.playerId === me.id ? S.round.underdogSpecial : null);
const boostUsedElsewhere = () => slip.some((b) => b.boost && !(tray && tray.kind === 'win' && b.runnerId === tray.id));
const trayBet = () => (tray.kind === 'win' ? { type: 'win', runnerId: tray.id, stake: tray.stake, ...(tray.boost ? { boost: true } : {}) } : tray.kind === 'h2h' ? { type: 'h2h', matchupId: tray.id, pick: tray.pick, stake: tray.stake } : { type: 'prop', propId: tray.id, pick: tray.pick, stake: tray.stake });
function trayHtml() {
  const room = left() + (tray.prev || 0);
  const sp = tray.kind === 'win' && mySpecial() && !boostUsedElsewhere() ? mySpecial() : null;
  const chips = [10, 50, 100].map((v) => `<button class="chip" data-add="${v}" ${tray.stake + v > room ? 'disabled' : ''}>+${v}</button>`).join('');
  const hypo = trayBet();
  return `<div class="tray"><div class="ts"><span class="tw"><b class="num">${money(tray.stake)}</b> wins <b class="w">${money(betWin(S.round, hypo))}</b> <small>${esc(oddsText(S.round, hypo))}</small></span><button class="chip ghost" data-add="clear">clear</button></div>
    <div class="tc">${chips}<button class="chip max" data-add="max">MAX</button></div>
    ${sp ? `<button class="chip boost ${tray.boost ? 'on' : ''}" data-boost="1">🚀 ${esc(sp.label || 'UNDERDOG SPECIAL')} · winnings ×${sp.boost || 1.5}${tray.boost ? ' ✓' : ''}</button>` : ''}
    <div class="tb2"><button class="btn white" data-tray="cancel">${tray.prev ? 'Remove' : 'Cancel'}</button><button class="btn green grow" data-tray="ok" ${tray.stake < rules().minStake ? 'disabled' : ''}>Done ✓</button></div></div>`;
}
function openTray(kind, id, pick) {
  const ex = findBet(kind, id);
  const { maxBets, minStake } = rules();
  if (!ex && slip.length >= maxBets) { toast(`Max ${maxBets} bets — remove one in Review`, 'red'); vibrate([40, 30, 40]); return; }
  if (!ex && left() < minStake) { toast("That's your whole budget for this round", 'red'); return; }
  tray = { kind, id, pick, stake: ex ? ex.stake : Math.min(EXAMPLE_STAKE, left()), prev: ex ? ex.stake : 0, boost: !!ex?.boost };
  vibrate(10);
}
function commitTray(ok) {
  const t = tray; tray = null;
  const ex = findBet(t.kind, t.id);
  if (!ok) { if (ex && t.prev) slip = slip.filter((b) => b !== ex); slipChanged(); return; }
  const bet = t.kind === 'win' ? { type: 'win', runnerId: t.id, stake: t.stake, ...(t.boost ? { boost: true } : {}) } : t.kind === 'h2h' ? { type: 'h2h', matchupId: t.id, pick: t.pick, stake: t.stake } : { type: 'prop', propId: t.id, pick: t.pick, stake: t.stake };
  if (ex) { delete ex.boost; Object.assign(ex, bet); } else slip.push(bet);
  slipChanged();
  vibrate(15);
}
function wireFlow(list) {
  const go = (d) => { tray = null; step = Math.max(0, Math.min(list.length - 1, step + d)); renderFlow(); };
  app.onclick = (e) => {
    const b = e.target.closest('button, [data-go]'); if (!b) return;
    if (b.dataset.go != null && b.dataset.go !== '') { tray = null; step = Number(b.dataset.go); return renderFlow(); }
    if (b.dataset.nav) return go(Number(b.dataset.nav));
    if (b.dataset.edit) { tray = null; step = 1; return renderFlow(); }
    if (b.dataset.open) { const kind = b.dataset.open; if (kind !== 'win' && findBet(kind, b.dataset.id) && !tray) { const ex = findBet(kind, b.dataset.id); ex.pick = b.dataset.pick; slipChanged(); } openTray(kind, b.dataset.id, b.dataset.pick); return renderFlow(); }
    if (b.dataset.add && tray) {
      const room = left() + (tray.prev || 0);
      if (b.dataset.add === 'clear') tray.stake = 0;
      else if (b.dataset.add === 'max') tray.stake = room;
      else tray.stake = Math.min(room, tray.stake + Number(b.dataset.add));
      vibrate(b.dataset.add === 'max' ? [10, 20, 30] : 8);
      audio.play('chip', { p: room ? tray.stake / room : 0 });
      return renderFlow();
    }
    if (b.dataset.boost && tray) { tray.boost = !tray.boost; vibrate(tray.boost ? [20, 30, 60] : 10); audio.play(tray.boost ? 'reveal' : 'pop'); return renderFlow(); }
    if (b.dataset.tray) { const ok = b.dataset.tray === 'ok'; const was = tray?.kind; commitTray(ok); if (ok && was === 'win') toast('✓ On the slip'); return renderFlow(); }
    if (b.dataset.rm) { slip.splice(Number(b.dataset.rm), 1); slipChanged(); vibrate(10); return renderFlow(); }
    return undefined;
  };
  // swipe between screens
  const main = $('.main');
  let x0 = null;
  main.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  main.addEventListener('touchend', (e) => { if (x0 == null || tray) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1); }, { passive: true });
  // press-and-hold to lock (0.6 s, fill + haptic)
  const h = $('#holdlock');
  if (h) {
    let t0 = 0, raf = 0;
    const fill = h.querySelector('.fill');
    const stop = () => { cancelAnimationFrame(raf); t0 = 0; holding = false; fill.style.width = '0%'; };
    const tick = () => {
      const k = Math.min(1, (performance.now() - t0) / 600);
      fill.style.width = `${k * 100}%`;
      if (k >= 1) { stop(); doLock(); return; }
      raf = requestAnimationFrame(tick);
    };
    h.addEventListener('pointerdown', (e) => { e.preventDefault(); holding = true; t0 = performance.now(); vibrate(15); raf = requestAnimationFrame(tick); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => h.addEventListener(ev, () => { if (t0) { stop(); toast('Keep holding to lock in'); } }));
  }
}
function doLock() {
  if (!net.open) { toast('Not connected — retrying…', 'red'); net.reconnect(); return; }
  send({ t: 'lock', bets: slip });
  vibrate([30, 30, 120]);
  audio.play('thunk');
}

// ---------------------------------------------------------------------------------------------------
// LOCKED / REVEALED: one big status
function renderLocked() {
  if (S.revealed) {
    app.innerHTML = screen(topbar(), '<div class="big-emoji">👀</div><h1 class="h">Look at the telly!</h1><p class="sub">The bets are being revealed.</p>', '', { cls: 'locked' });
    app.onclick = null;
    return;
  }
  const waiting = S.players.filter((p) => !p.locked && p.id !== me.id).map((p) => p.name);
  app.innerHTML = screen(topbar(), `<div class="big-emoji">🔒</div><h1 class="h">Locked in!</h1>
    <p class="sub big">${waiting.length ? `Waiting for ${esc(waiting.join(' & '))}…` : "Everyone's in!"}</p>
    <p class="sub small">${slip.length} bet${slip.length === 1 ? '' : 's'} · ${money(staked())} of your ${money(budgetOf())} budget</p>`,
  '<button class="btn white grow" id="unlock">✏️ Change my bets</button>', { cls: 'locked' });
  app.onclick = (e) => { if (e.target.closest('#unlock')) { send({ t: 'unlock' }); step = steps().length - 1; vibrate(10); } };
}

// ---------------------------------------------------------------------------------------------------
// RACE: your runners, big; three reactions in one row
let lastLeader = null;
let lastGap = {};
let marketStake = 50;
function ordWord(n) { return `${n}${['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}`; }
function renderRace(fresh) {
  if (fresh) { lastLeader = null; lastGap = {}; }
  const L = me.live;
  const mine = new Map();
  for (const b of me.bets || []) { const rid = betRunnerId(b); if (rid) mine.set(rid, (mine.get(rid) || 0) + b.stake); }
  let main;
  if (!mine.size) main = '<div class="big-emoji">🍿</div><h1 class="h">No horse in this race</h1><p class="sub">Just enjoy the chaos on the TV.</p>';
  else if (!L) main = `<div class="big-emoji">📺</div><h1 class="h">Under starter's orders…</h1><p class="sub">${mine.size} runner${mine.size > 1 ? 's' : ''} carrying your money.</p>`;
  else {
    const rows = (L.mine || []).slice().sort((a, b) => a.place - b.place).slice(0, 3).map((x) => {
      const r = runnerById(S.round, x.runnerId);
      const prev = lastGap[x.runnerId];
      const trend = x.place === 1 ? (x.finished ? 'WON IT!' : 'leading') : prev == null ? `+${Number(x.gapS).toFixed(1)}s` : x.gapS < prev - 0.3 ? `+${Number(x.gapS).toFixed(1)}s · closing` : x.gapS > prev + 0.3 ? `+${Number(x.gapS).toFixed(1)}s · fading` : `+${Number(x.gapS).toFixed(1)}s`;
      lastGap[x.runnerId] = x.gapS;
      return `<div class="lv ${x.place === 1 ? 'lead' : ''}"><span class="lp">${ordWord(x.place)}</span><div><b>${esc(runnerShort(r))}</b><small>${money(mine.get(x.runnerId) || 0)} · ${trend}</small></div></div>`;
    }).join('');
    const more = mine.size > 3 ? `<p class="sub small">+${mine.size - 3} more on the TV</p>` : '';
    const best = (L.mine || []).slice().sort((a, b) => a.place - b.place)[0];
    const hero = best ? `<div class="race-hero">${portrait(runnerById(S.round, best.runnerId), 130)}</div>` : '';
    main = `${hero}<div class="kick">YOUR RUNNERS</div>${rows}${more}`;
    // haptics on lead changes involving my runners
    if (lastLeader && L.leaderId && L.leaderId !== lastLeader && (mine.has(L.leaderId) || mine.has(lastLeader))) {
      vibrate(mine.has(L.leaderId) ? [60, 40, 60, 40, 160] : [300]);
    }
    lastLeader = L.leaderId || lastLeader;
  }
  const reacts = (S.reactions || []).slice(0, 3).map((e) => `<button class="re" data-react="${e}">${e}</button>`).join('');
  app.innerHTML = screen(topbar(), main, `<div class="reacts">${reacts}</div>`, { cls: 'race' });
  let last = 0;
  app.onclick = (e) => {
    const b = e.target.closest('[data-react]'); if (!b) return;
    const now = Date.now(); if (now - last < 250) return; last = now;
    send({ t: 'react', emoji: b.dataset.react });
    vibrate(12);
  };
}
const marketSecs = (m) => Math.max(0, Math.ceil((m.closesAt - net.serverNow()) / 1000)); // same clock as the TV
function renderMarket() {
  const m = S.market;
  const placed = (me.bets || []).find((b) => b.type === 'inplay');
  if (!m || !m.open) { if (modal.dataset.kind === 'market') { modal.innerHTML = ''; modal.dataset.kind = ''; } return; }
  const free = budgetOf() - (me.bets || []).reduce((a, b) => a + b.stake, 0);
  const minStake = S.round?.rules?.minStake ?? 10;
  marketStake = Math.max(minStake, Math.min(marketStake, free));
  const can = !placed && free >= minStake;
  const rows = (m.standings || []).map((x) => {
    const r = runnerById(S.round, x.runnerId);
    const o = m.odds?.[x.runnerId];
    const hyp = { type: 'inplay', runnerId: x.runnerId, stake: marketStake, odds: o?.win, display: o?.display };
    return `<button class="mkr" data-ip="${x.runnerId}" ${can ? '' : 'disabled'}>${ordinalHtml(x.place)}<span class="n">${esc(runnerShort(r) || x.runnerId)}<small>${x.place === 1 ? 'leads' : `+${Number(x.gapS).toFixed(1)}s`}</small></span><span class="o">${can ? `<b>wins ${money(betWin(S.round, hyp))}</b>` : ''}<small>${esc(o?.display || '')}</small></span></button>`;
  }).join('');
  const stakes = [minStake, 50, 100].filter((v, i, a) => v <= free && a.indexOf(v) === i);
  modal.dataset.kind = 'market';
  modal.innerHTML = `<div class="sheet market"><h3>⏱ HALFWAY MARKET <span class="secs">${marketSecs(m)}s</span></h3>
    ${placed ? `<p class="done">✓ You're on <b>${esc(runnerShort(runnerById(S.round, placed.runnerId)))}</b> · ${money(placed.stake)} wins ${money(betWin(S.round, placed))}</p>`
    : free < minStake ? '<p>No budget left for a halfway bet. Just watch! 🍿</p>' : `<p class="mkq">Stake, then tap a runner:</p><div class="mkst">${stakes.map((v) => `<button class="chip ${v === marketStake ? 'sel' : ''}" data-ms="${v}">${money(v)}</button>`).join('')}<button class="chip max ${marketStake === free ? 'sel' : ''}" data-ms="${free}">MAX</button></div>`}
    <div class="mkrows">${rows}</div></div>`;
  modal.onclick = (e) => {
    const st = e.target.closest('[data-ms]');
    if (st) { marketStake = Number(st.dataset.ms); vibrate(8); renderMarket(); return; }
    const b = e.target.closest('[data-ip]');
    if (b && !b.disabled) { send({ t: 'inplay', runnerId: b.dataset.ip, stake: marketStake }); vibrate([30, 30, 80]); }
  };
}
setInterval(() => { if (S?.phase === 'RACE' && S.market?.open) { const el2 = $('#modal .secs'); if (el2) el2.textContent = `${marketSecs(S.market)}s`; } }, 250);

// ---------------------------------------------------------------------------------------------------
// RESULTS: one card per screen
// "Remember this one?" (the TV's reveal, when someone ticked "I'm Mark"): Mark sees the run privately and says if he
// remembers it; everyone else bets on his answer (believe / doubt) for a small bonus. A few seconds, then the TV flips.
function renderMarkPrompt(fresh) {
  const mp = me.markPrompt;
  const res = S.results;
  const r = runnerById(S.round, mp.runnerId);
  const x = (res?.reveal || []).find((v) => v.runnerId === mp.runnerId) || {};
  const f = (res?.finishOrder || []).find((v) => v.runnerId === mp.runnerId) || {};
  const mark = S.players.find((p) => p.id === S.settings.runnerPlayerId);
  const left = Math.max(0, Math.ceil((mp.closesAt - net.serverNow()) / 1000));
  const head = `<div class="mk-time"><i style="--p:${Math.min(1, left / 7)}"></i><span id="mkleft">${left}s</span></div>`;
  let main, acts;
  if (mp.role === 'mark') {
    const title = x.stravaTitle && !x.genericTitle ? `“${esc(x.stravaTitle)}”` : esc(x.punchline || '');
    main = `${head}<div class="kick">ONLY YOU CAN SEE THIS</div><h1 class="h">Remember this one?</h1>
      <div class="mk-run"><div class="mk-date">${esc(x.dateText || '')}</div><div class="mk-title">${title}</div><div class="mk-meta"><span class="num">${esc(f.timeText || '')}</span>${x.contextLine ? `<small>${esc(x.contextLine)}</small>` : ''}</div></div>`;
    acts = mp.answer ? `<div class="mk-done">${mp.answer === 'yes' ? '🧠 You remember it' : '🤷 Not a clue'}: watch the TV!</div>`
      : '<button class="btn green grow mk-a" data-mk="yes">🧠 Yes, I remember</button><button class="btn white grow mk-a" data-mk="no">🤷 No idea</button>';
  } else {
    main = `${head}<div class="kick">DOES HE REALLY?</div><div class="rhead small"><div class="rp">${portrait(r, 72)}</div><div class="rn">${ordinalHtml(f.place || 0)}<b>${esc(runnerShort(r))}</b></div></div>
      <h1 class="h">Will ${esc(mark?.name || 'Mark')} say he remembers this run?</h1><p class="sub">He's looking at it on his phone right now.${mp.markAnswered ? ' <b>He has answered!</b>' : ''}</p><p class="sub small">Call it right: +25pp</p>`;
    acts = mp.answer ? `<div class="mk-done">${mp.answer === 'believe' ? '👍 You believe him' : '🤨 You doubt it'}: watch the TV!</div>`
      : '<button class="btn green grow mk-a" data-mk="believe">👍 Believe</button><button class="btn red grow mk-a" data-mk="doubt">🤨 Doubt</button>';
  }
  app.innerHTML = screen(topbar(), main, acts, { cls: 'results markq' });
  if (fresh && !mp.answer) vibrate([40, 60, 40]);
  app.onclick = (e) => {
    const b = e.target.closest('[data-mk]'); if (!b) return;
    send({ t: 'markAnswer', runnerId: mp.runnerId, answer: b.dataset.mk }); vibrate(25); audio.play('pop');
    app.querySelectorAll('[data-mk]').forEach((x) => { x.disabled = true; });
  };
  clearInterval(renderMarkPrompt.iv);
  renderMarkPrompt.iv = setInterval(() => {
    const el2 = document.getElementById('mkleft');
    if (!el2 || !me?.markPrompt) { clearInterval(renderMarkPrompt.iv); return; }
    const l = Math.max(0, Math.ceil((me.markPrompt.closesAt - net.serverNow()) / 1000));
    el2.textContent = `${l}s`; el2.previousElementSibling?.style.setProperty('--p', String(Math.min(1, l / 7)));
  }, 250);
}
function renderResults(fresh) {
  if (me.markPrompt) return renderMarkPrompt(fresh);
  const res = S.results;
  const skip = '<button class="btn blue grow" id="nextbtn">Skip ahead on the TV ▶</button>';
  if (!res || S.resultsStage < 2) {
    app.innerHTML = screen(topbar(), '<div class="big-emoji">📺</div><h1 class="h">Eyes on the TV!</h1><p class="sub">The result and the big reveal are on the telly. Your payout lands here after that.</p>', skip, { cls: 'results' });
    return wireResults();
  }
  let cards;
  if (S.resultsStage < 3) { // the small print, one runner per card (no money yet: that's the TV's moment)
    const rv = new Map((res.reveal || []).map((x) => [x.runnerId, x]));
    cards = res.finishOrder.map((f) => {
      const r = runnerById(S.round, f.runnerId); const x = rv.get(f.runnerId) || {};
      return `<div class="kick">WHO WERE THEY REALLY?</div><div class="rhead small"><div class="rp">${portrait(r, 72)}</div><div class="rn">${ordinalHtml(f.place)}<b>${esc(runnerShort(r))}</b></div></div>
        <div class="bigline">${esc(x.dateText || '')}</div><div class="num tbig">${esc(f.timeText || '')}</div>
        ${x.punchline ? `<p class="sub">${esc(x.punchline)}</p>` : ''}${(x.funFacts || [])[0] ? `<p class="sub small">${esc(x.funFacts[0])}</p>` : ''}`;
    });
  } else {
    const pay = res.payouts?.[me.id] || { net: 0, score: me.score, bets: [] };
    const drinks = S.settings.drinkingMode && Array.isArray(res.drinks) ? res.drinks.filter((d) => d.playerId === me.id || !d.playerId).map((d) => `🍺 ${esc(d.text)}`).join('<br>') : '';
    const lines = (pay.bets || []).slice(0, 6).map((b) => { const o = betOutcome(b); return `<div class="rv-line ${o.kind}"><span>${esc(betLabel(S.round, b))}</span><b>${o.text}</b></div>`; }).join('');
    const awards = (res.awards || []).filter((a) => a.playerId === me.id);
    const score = Number.isFinite(pay.score) ? pay.score : me.score;
    cards = [
      `<div class="big-emoji">${pay.net > 0 ? '🤑' : pay.net < 0 ? '😭' : '😐'}</div><div class="kick">THIS ROUND</div><div class="net-big outlined ${pay.net > 0 ? 'green' : pay.net < 0 ? 'red' : 'white'}">${signedMoney(pay.net)}</div><p class="sub big">Score ${scoreText(score)}</p>${pay.bonus ? `<p class="sub">🧠 incl. memory bonus ${signedMoney(pay.bonus)}</p>` : ''}${drinks ? `<p class="drink">${drinks}</p>` : ''}`,
      `<div class="kick">YOUR BETS</div><div class="review">${lines || '<p class="sub">No bets this round.</p>'}</div>`,
      ...awards.map((a) => `<div class="big-emoji">🏆</div><h1 class="h">${esc(a.title)}</h1><p class="sub">${esc(a.text || '')}</p>`),
    ];
  }
  resCard = Math.max(0, Math.min(resCard, cards.length - 1));
  const lastCard = resCard === cards.length - 1;
  const dots = `<div class="pdots">${cards.map((_, i) => `<i class="${i === resCard ? 'on' : ''}"></i>`).join('')}</div>`;
  const acts = S.resultsStage >= 3
    ? (lastCard ? `${resCard ? '<button class="btn white nav" data-rc="-1">‹</button>' : ''}${readyBtn(me.ready ? '✓ READY' : 'NEXT ROUND ▶')}` : `${resCard ? '<button class="btn white nav" data-rc="-1">‹</button>' : ''}<button class="btn blue grow" data-rc="1">Next ›</button>`)
    : `${resCard ? '<button class="btn white nav" data-rc="-1">‹</button>' : ''}${lastCard ? skip : '<button class="btn white grow" data-rc="1">Next ›</button>'}`;
  app.innerHTML = screen(topbar(), cards[resCard], acts, { dots, cls: 'results' });
  if (S.resultsStage >= 3 && resCard === 0 && !renderResults.celebrated?.[S.round.roundId]) {
    (renderResults.celebrated ||= {})[S.round.roundId] = true;
    const net2 = res.payouts?.[me.id]?.net || 0;
    if (net2 > 0) { confetti(document.body, { count: 80 }); vibrate([30, 40, 30, 40, 120]); } else if (net2 < 0) vibrate(300);
  }
  wireResults();
}
function wireResults() {
  app.onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.rc) { resCard += Number(b.dataset.rc); vibrate(8); return renderResults(); }
    if (b.id === 'readybtn') { send({ t: 'ready', value: !me.ready }); vibrate(25); }
    if (b.id === 'nextbtn') { send({ t: 'next' }); vibrate(15); b.disabled = true; setTimeout(() => { b.disabled = false; }, 1200); }
    return undefined;
  };
}

// ---------------------------------------------------------------------------------------------------
const byScore = () => [...S.players].sort((a, b) => (b.score || 0) - (a.score || 0));
function standHtml() {
  const sorted = byScore();
  return `<div class="stand">${sorted.map((p, i) => `<div class="sr" style="background:${esc(p.avatar.colour)}">${ordinalHtml(i > 0 && sorted[i - 1].score === p.score ? i : i + 1)}${avatarHtml(p.avatar, 32)}<span>${esc(p.name)}${p.ready ? ' ✓' : ''}</span><b class="num">${scoreText(p.score)}</b></div>`).join('')}</div>`;
}
function renderScore() {
  const lastR = S.roundNumber >= S.roundsPerGame;
  const waiting = S.players.filter((p) => !p.ready && p.id !== me.id).map((p) => p.name);
  app.innerHTML = screen(topbar(), `<div class="kick">STANDINGS</div>${standHtml()}
    <p class="sub">${lastR ? 'That was the last round!' : S.roundNumber === S.roundsPerGame - 1 ? 'Next: the DOUBLE PAYOUT finale 🔥' : `Next up: round ${S.roundNumber + 1} of ${S.roundsPerGame}`}</p>
    ${me.ready && waiting.length ? `<p class="sub small">Waiting for ${esc(waiting.join(' & '))}…</p>` : ''}`,
  readyBtn(me.ready ? '✓ READY' : lastR ? 'SHOW THE CHAMPION ▶' : 'NEXT ROUND ▶'));
  app.onclick = (e) => { if (e.target.closest('#readybtn')) { send({ t: 'ready', value: !me.ready }); vibrate(25); } };
}
function renderFinale(fresh) {
  const sorted = byScore();
  const place = sorted.findIndex((p) => p.id === me.id) + 1;
  const won = place === 1;
  app.innerHTML = screen(topbar(), `<div class="big-emoji">${won ? '👑' : place === sorted.length ? '🥄' : '🥈'}</div>
    <h1 class="h">${won ? 'CHAMPION!' : `You finished ${ordWord(place)}`}</h1><p class="sub big">Final score ${scoreText(me.score)}</p>${standHtml()}`,
  readyBtn(me.ready ? '✓ READY' : won ? 'REMATCH? ↻' : 'DEMAND A REMATCH ↻'));
  app.onclick = (e) => { if (e.target.closest('#readybtn')) { send({ t: 'ready', value: !me.ready }); vibrate(25); } };
  if (fresh && won) confetti(document.body, { count: 150 });
}
