// MARKRUN phone controller: a click-through flow of single-purpose screens (no vertical scrolling).
// Join -> lobby -> meet the field (one runner per screen) -> head-to-heads -> side bet -> review -> HOLD to lock ->
// locked -> race (your runners live + reactions) -> halfway market -> results (one card per screen) -> standings.
import { connect } from '../shared/net.js';
import { $, $$, esc, money, signedMoney, ordinalHtml, avatarHtml, runnerById, runnerShort, betLabel, betOdds, betRunnerId, oddsText, betOutcome, confetti, clueParts } from '../shared/ui.js';
import { runnerPortrait } from '../shared/portrait.js';

const AVATAR_EMOJI = ['🦊', '🐸', '🦉', '🐙', '🦄', '🐯', '🐼', '🦖', '🐧', '🐝', '🦩', '🐶'];
const AVATAR_COLOURS = ['#ff4d5a', '#ffb000', '#2ec27e', '#2f8cff', '#9b5cff', '#ff6fb5', '#13c4c4', '#ff7a1a'];
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
// screen scaffold: [top bar] [progress dots] [main: one job] [actions in the thumb zone]
function screen(top, main, actions, { dots = '', cls = '' } = {}) {
  return `<div class="scr ${cls}">${top}${dots}<div class="main">${main}</div><div class="acts">${actions}</div></div>`;
}
function topbar() {
  if (!me || !S) return '';
  const betting = (S.phase === 'INTRO' || S.phase === 'BETTING') && !me.locked && !S.revealed;
  const racing = S.phase === 'RACE';
  const leftNow = betting ? capOf() - staked() : racing ? capOf() - (me.bets || []).reduce((a, b) => a + b.stake, 0) : me.bankroll;
  const ph = S.round && S.phase !== 'LOBBY' ? `Round ${S.roundNumber}/${S.roundsPerGame}` : 'Lobby';
  return `<div class="tb">${avatarHtml(me.avatar, 36)}<div class="tn"><b>${esc(me.name)}</b><small>${ph}${isFinale() && S.phase !== 'LOBBY' ? ' · ×2 FINALE' : ''}</small></div>
    <div class="tm"><b class="num">${money(Math.max(0, leftNow))}</b><small>${betting || racing ? 'left to bet' : 'bankroll'}</small></div></div>`;
}

// ---------------------------------------------------------------------------------------------------
function onState() {
  if (!me) { render(); return; }
  const rid = S.round?.roundId || null;
  if (rid !== slipRound) {
    slipRound = rid;
    step = 0; tray = null; resCard = 0;
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
  app.innerHTML = screen(topbar(), `<div class="hero">${avatarHtml(me.avatar, 96)}</div><h1 class="h">You're in!</h1>
    <p class="sub">${money(me.bankroll)} of entirely fictional money.</p>
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
const capOf = () => (Number.isFinite(me?.stakeCap) ? me.stakeCap : me.bankroll); // 50% of bankroll, except the finale
const isFinale = () => Number(S?.round?.payoutMultiplier) >= 2;
const left = () => capOf() - staked();
function clampSlip() {
  if (!S?.round) { slip = []; return; }
  const { minStake, maxBets } = rules();
  slip = slip.filter((b) => (b.type === 'win' ? runnerById(S.round, b.runnerId) : b.type === 'prop' ? S.round.props?.some((x) => x.id === b.propId) : S.round.matchups?.some((m) => m.id === b.matchupId))).slice(0, maxBets);
  for (const b of slip) b.stake = Math.max(minStake, Math.floor(b.stake || minStake));
  let over = staked() - capOf();
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
    ...[...r.runners].sort((a, b) => a.lane - b.lane).map((x) => ({ kind: 'runner', id: x.id })),
    ...(r.matchups || []).map((m) => ({ kind: 'h2h', id: m.id })),
    ...(r.props || []).map((p) => ({ kind: 'prop', id: p.id })),
    { kind: 'review' },
  ];
}
// the field at a glance on every betting screen: tap a face to jump to that runner; shortcut to Review & lock
function dotsHtml(list) {
  const faces = list.map((st, i) => {
    if (st.kind !== 'runner') return '';
    const r = runnerById(S.round, st.id);
    const bet = findBet('win', st.id);
    return `<button class="face ${i === step ? 'on' : ''} ${bet ? 'bet' : ''}" data-go="${i}" aria-label="${esc(runnerShort(r))}"><span class="fp">${portrait(r, 34)}</span><span class="fo">${esc(r.odds?.display || '')}</span></button>`;
  }).join('');
  const others = list.map((st, i) => (st.kind === 'runner' || st.kind === 'review' ? '' : `<i class="${i === step ? 'on' : ''} ${findBet(st.kind, st.id) ? 'bet' : ''}" data-go="${i}"></i>`)).join('');
  const onReview = list[step]?.kind === 'review';
  return `<div class="strip">${faces}${others ? `<span class="sdots">${others}</span>` : ''}${onReview ? '' : `<button class="rvbtn" data-go="${list.length - 1}">Review ›</button>`}</div>`;
}
function clueBlock(c, icon, cls = '') {
  if (!c) return '';
  const { headline, kicker } = clueParts(c);
  return `<div class="clue ${cls}"><span class="ci">${icon}</span><div><b>${esc(headline)}</b>${kicker ? `<small>${esc(kicker)}</small>` : ''}</div></div>`;
}

function renderFlow() {
  const list = steps();
  step = Math.max(0, Math.min(step, list.length - 1));
  const st = list[step];
  let main = '', acts = '';
  const navBack = step > 0 ? '<button class="btn white nav" data-nav="-1" aria-label="Back">‹</button>' : '';
  if (st.kind === 'runner') {
    const r = runnerById(S.round, st.id);
    const priv = (me.privateClues || []).filter((c) => c.runnerId === r.id);
    const bet = findBet('win', r.id);
    main = `<div class="rhead" style="--c1:${esc(r.colour.primary)}"><div class="rp">${portrait(r, 112)}</div>
        <div class="rn"><span class="lane">LANE ${r.lane}</span><b>${esc(nameOf(r))}</b><span class="odds num">${esc(r.odds?.display || '')}</span></div></div>
      ${clueBlock(r.publicClue, '📺')}
      ${priv.map((c) => clueBlock(c, c.tier === 'hot' ? '🔥' : '🤫', c.tier === 'hot' ? 'hot' : 'secret')).join('')}
      ${bet ? `<div class="onit">✓ ${money(bet.stake)} on to win</div>` : ''}`;
    acts = tray ? trayHtml() : `${navBack}<button class="btn ${bet ? 'white' : 'yellow'} grow" data-open="win" data-id="${r.id}">${bet ? 'Change stake' : 'Back to win'}</button><button class="btn blue nav" data-nav="1" aria-label="Next">›</button>`;
  } else if (st.kind === 'h2h') {
    const m = S.round.matchups.find((x) => x.id === st.id);
    const a = runnerById(S.round, m.a), b = runnerById(S.round, m.b);
    const bet = findBet('h2h', m.id);
    const side = (r, od) => `<button class="side ${bet?.pick === r.id ? 'on' : ''}" data-open="h2h" data-id="${m.id}" data-pick="${r.id}"><span class="rp">${portrait(r, 84)}</span><b>${esc(runnerShort(r))}</b><span class="num">${esc(od)}</span>${bet?.pick === r.id ? `<small>✓ ${money(bet.stake)}</small>` : ''}</button>`;
    main = `<div class="kick">HEAD-TO-HEAD</div><h1 class="h">Who finishes ahead?</h1>
      <div class="sides">${side(a, m.odds.displayA || `×${m.odds.a}`)}<span class="vs">VS</span>${side(b, m.odds.displayB || `×${m.odds.b}`)}</div>`;
    acts = tray ? trayHtml() : `${navBack}<button class="btn white grow" data-nav="1">${bet ? 'Next ›' : 'Skip ›'}</button>`;
  } else if (st.kind === 'prop') {
    const p = S.round.props.find((x) => x.id === st.id);
    const bet = findBet('prop', p.id);
    const yn = (k, od) => `<button class="side yn ${k} ${bet?.pick === k ? 'on' : ''}" data-open="prop" data-id="${p.id}" data-pick="${k}"><b>${k.toUpperCase()}</b><span class="num">${esc(od)}</span>${bet?.pick === k ? `<small>✓ ${money(bet.stake)}</small>` : ''}</button>`;
    main = `<div class="kick">🎡 SIDE BET</div><h1 class="h prop">${esc(p.text)}</h1>
      <div class="sides">${yn('yes', p.odds?.displayYes || `×${p.odds?.yes}`)}${yn('no', p.odds?.displayNo || `×${p.odds?.no}`)}</div>`;
    acts = tray ? trayHtml() : `${navBack}<button class="btn white grow" data-nav="1">${bet ? 'Next ›' : 'Skip ›'}</button>`;
  } else {
    const open = S.phase === 'BETTING';
    const lines = slip.map((b, i) => `<div class="rv-line"><span>${esc(betLabel(S.round, b))}</span><small>${esc(oddsText(S.round, b))}</small><b>${money(b.stake)}</b><button class="x" data-rm="${i}" aria-label="Remove">✕</button></div>`).join('');
    main = `<div class="kick">YOUR BETS</div>
      <div class="review">${lines || '<p class="sub">No bets yet. Sitting this one out is allowed (and cowardly).</p>'}</div>
      <div class="totals"><span>Staked <b>${money(staked())}</b></span><span>Left <b>${money(left())}</b></span></div>
      <p class="sub small">${isFinale() ? '🔥 Double payout finale — everything can go on it.' : `Max ${money(capOf())} this round (half your bankroll).`}</p>`;
    acts = `<button class="btn white nav" data-edit="1">Edit</button>${open
      ? `<button class="btn red grow hold" id="holdlock"><span class="fill"></span><span class="lbl">HOLD TO LOCK IN 🔒</span></button>`
      : '<button class="btn grow" disabled>Betting opens after the intros…</button>'}`;
  }
  app.innerHTML = screen(topbar(), main, acts, { dots: dotsHtml(list), cls: `flow ${st.kind}` });
  wireFlow(list);
}
function trayHtml() {
  const room = left() + (tray.prev || 0);
  const chips = [10, 50, 100].map((v) => `<button class="chip" data-add="${v}" ${tray.stake + v > room ? 'disabled' : ''}>+${v}</button>`).join('');
  return `<div class="tray"><div class="ts"><span>Stake</span><b class="num">${money(tray.stake)}</b><button class="chip ghost" data-add="clear">clear</button></div>
    <div class="tc">${chips}<button class="chip max" data-add="max">${isFinale() ? 'ALL IN' : 'MAX'}</button></div>
    <div class="tb2"><button class="btn white" data-tray="cancel">${tray.prev ? 'Remove' : 'Cancel'}</button><button class="btn green grow" data-tray="ok" ${tray.stake < rules().minStake ? 'disabled' : ''}>Done ✓</button></div></div>`;
}
function openTray(kind, id, pick) {
  const ex = findBet(kind, id);
  const { maxBets, minStake } = rules();
  if (!ex && slip.length >= maxBets) { toast(`Max ${maxBets} bets — remove one in Review`, 'red'); vibrate([40, 30, 40]); return; }
  if (!ex && left() < minStake) { toast(isFinale() ? "You're out of money!" : "That's your limit this round (half your bankroll)", 'red'); return; }
  tray = { kind, id, pick, stake: ex ? ex.stake : Math.min(50, left()), prev: ex ? ex.stake : 0 };
  vibrate(10);
}
function commitTray(ok) {
  const t = tray; tray = null;
  const ex = findBet(t.kind, t.id);
  if (!ok) { if (ex && t.prev) slip = slip.filter((b) => b !== ex); slipChanged(); return; }
  const bet = t.kind === 'win' ? { type: 'win', runnerId: t.id, stake: t.stake } : t.kind === 'h2h' ? { type: 'h2h', matchupId: t.id, pick: t.pick, stake: t.stake } : { type: 'prop', propId: t.id, pick: t.pick, stake: t.stake };
  if (ex) Object.assign(ex, bet); else slip.push(bet);
  slipChanged();
  vibrate(15);
}
function wireFlow(list) {
  const go = (d) => { tray = null; step = Math.max(0, Math.min(list.length - 1, step + d)); renderFlow(); };
  app.onclick = (e) => {
    const b = e.target.closest('button, [data-go]'); if (!b) return;
    if (b.dataset.go != null && b.dataset.go !== '') { tray = null; step = Number(b.dataset.go); return renderFlow(); }
    if (b.dataset.nav) return go(Number(b.dataset.nav));
    if (b.dataset.edit) { tray = null; step = 0; return renderFlow(); }
    if (b.dataset.open) { const kind = b.dataset.open; if (kind !== 'win' && findBet(kind, b.dataset.id) && !tray) { const ex = findBet(kind, b.dataset.id); ex.pick = b.dataset.pick; slipChanged(); } openTray(kind, b.dataset.id, b.dataset.pick); return renderFlow(); }
    if (b.dataset.add && tray) {
      const room = left() + (tray.prev || 0);
      if (b.dataset.add === 'clear') tray.stake = 0;
      else if (b.dataset.add === 'max') tray.stake = room;
      else tray.stake = Math.min(room, tray.stake + Number(b.dataset.add));
      vibrate(8);
      return renderFlow();
    }
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
}

// ---------------------------------------------------------------------------------------------------
// LOCKED / REVEALED: one big status
function renderLocked() {
  if (S.revealed) {
    app.innerHTML = screen(topbar(), '<div class="big-emoji">👀</div><h1 class="h">Look at the telly!</h1><p class="sub">The bets are being revealed.</p>', '');
    app.onclick = null;
    return;
  }
  const waiting = S.players.filter((p) => !p.locked && p.id !== me.id).map((p) => p.name);
  app.innerHTML = screen(topbar(), `<div class="big-emoji">🔒</div><h1 class="h">Locked in!</h1>
    <p class="sub big">${waiting.length ? `Waiting for ${esc(waiting.join(' & '))}…` : "Everyone's in!"}</p>
    <p class="sub small">${slip.length} bet${slip.length === 1 ? '' : 's'} · ${money(staked())}</p>`,
  '<button class="btn white grow" id="unlock">✏️ Change my bets</button>');
  app.onclick = (e) => { if (e.target.closest('#unlock')) { send({ t: 'unlock' }); step = steps().length - 1; vibrate(10); } };
}

// ---------------------------------------------------------------------------------------------------
// RACE: your runners, big; reactions in one row
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
    main = `<div class="kick">YOUR RUNNERS</div>${rows}${more}`;
    // haptics on lead changes involving my runners
    if (lastLeader && L.leaderId && L.leaderId !== lastLeader && (mine.has(L.leaderId) || mine.has(lastLeader))) {
      vibrate(mine.has(L.leaderId) ? [60, 40, 60, 40, 160] : [300]);
    }
    lastLeader = L.leaderId || lastLeader;
  }
  const reacts = (S.reactions || []).slice(0, 6).map((e) => `<button class="re" data-react="${e}">${e}</button>`).join('');
  app.innerHTML = screen(topbar(), main, `<div class="reacts">${reacts}</div>`, { cls: 'race' });
  let last = 0;
  app.onclick = (e) => {
    const b = e.target.closest('[data-react]'); if (!b) return;
    const now = Date.now(); if (now - last < 250) return; last = now;
    send({ t: 'react', emoji: b.dataset.react });
    vibrate(12);
  };
}
function renderMarket() {
  const m = S.market;
  const placed = (me.bets || []).find((b) => b.type === 'inplay');
  if (!m || !m.open) { if (modal.dataset.kind === 'market') { modal.innerHTML = ''; modal.dataset.kind = ''; } return; }
  const free = capOf() - (me.bets || []).reduce((a, b) => a + b.stake, 0);
  const minStake = S.round?.rules?.minStake ?? 10;
  marketStake = Math.max(minStake, Math.min(marketStake, free));
  const secs = Math.max(0, Math.ceil((m.closesAt - net.serverNow()) / 1000));
  const rows = (m.standings || []).map((x) => {
    const r = runnerById(S.round, x.runnerId);
    const o = m.odds?.[x.runnerId];
    return `<button class="mkr" data-ip="${x.runnerId}" ${placed || free < minStake ? 'disabled' : ''}>${ordinalHtml(x.place)}<span class="n">${esc(runnerShort(r) || x.runnerId)}<small>${x.place === 1 ? 'leads' : `+${Number(x.gapS).toFixed(1)}s`}</small></span><span class="o">${esc(o?.display || '')}</span></button>`;
  }).join('');
  const stakes = [minStake, 50, 100].filter((v, i, a) => v <= free && a.indexOf(v) === i);
  modal.dataset.kind = 'market';
  modal.innerHTML = `<div class="sheet market"><h3>⏱ HALFWAY <span class="secs">${secs}s</span></h3>
    ${placed ? `<p class="done">✓ You're on <b>${esc(runnerShort(runnerById(S.round, placed.runnerId)))}</b> · ${money(placed.stake)} @ ${esc(placed.display || `×${placed.odds}`)}</p>`
    : free < minStake ? '<p>No money left for a halfway bet. Just watch! 🍿</p>' : `<div class="mkst">${stakes.map((v) => `<button class="chip ${v === marketStake ? 'sel' : ''}" data-ms="${v}">${money(v)}</button>`).join('')}<button class="chip max ${marketStake === free ? 'sel' : ''}" data-ms="${free}">${isFinale() ? 'ALL IN' : 'MAX'}</button></div>`}
    <div class="mkrows">${rows}</div></div>`;
  modal.onclick = (e) => {
    const st = e.target.closest('[data-ms]');
    if (st) { marketStake = Number(st.dataset.ms); vibrate(8); renderMarket(); return; }
    const b = e.target.closest('[data-ip]');
    if (b && !b.disabled) { send({ t: 'inplay', runnerId: b.dataset.ip, stake: marketStake }); vibrate([30, 30, 80]); }
  };
}
setInterval(() => { if (S?.phase === 'RACE' && S.market?.open) { const el2 = $('#modal .secs'); if (el2) el2.textContent = `${Math.max(0, Math.ceil((S.market.closesAt - net.serverNow()) / 1000))}s`; } }, 250);

// ---------------------------------------------------------------------------------------------------
// RESULTS: one card per screen
function renderResults() {
  const res = S.results;
  const skip = '<button class="btn blue grow" id="nextbtn">Skip ahead on the TV ▶</button>';
  if (!res || S.resultsStage < 2) {
    app.innerHTML = screen(topbar(), '<div class="big-emoji">📺</div><h1 class="h">Eyes on the TV!</h1><p class="sub">The result and the big reveal are on the telly. Your payout lands here after that.</p>', skip);
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
    const pay = res.payouts?.[me.id] || { net: 0, bankroll: me.bankroll, bets: [] };
    const drinks = S.settings.drinkingMode && Array.isArray(res.drinks) ? res.drinks.filter((d) => d.playerId === me.id || !d.playerId).map((d) => `🍺 ${esc(d.text)}`).join('<br>') : '';
    const lines = (pay.bets || []).slice(0, 6).map((b) => { const o = betOutcome(b); return `<div class="rv-line ${o.kind}"><span>${esc(betLabel(S.round, b))}</span><b>${o.text}</b></div>`; }).join('');
    const awards = (res.awards || []).filter((a) => a.playerId === me.id);
    cards = [
      `<div class="big-emoji">${pay.net > 0 ? '🤑' : pay.net < 0 ? '😭' : '😐'}</div><div class="net-big outlined ${pay.net > 0 ? 'green' : pay.net < 0 ? 'red' : 'white'}">${signedMoney(pay.net)}</div><p class="sub big">Bankroll ${money(pay.bankroll)}</p>${drinks ? `<p class="drink">${drinks}</p>` : ''}`,
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
function standHtml() {
  const sorted = [...S.players].sort((a, b) => b.bankroll - a.bankroll);
  return `<div class="stand">${sorted.map((p, i) => `<div class="sr" style="background:${esc(p.avatar.colour)}">${ordinalHtml(i + 1)}${avatarHtml(p.avatar, 32)}<span>${esc(p.name)}${p.ready ? ' ✓' : ''}</span><b class="num">${money(p.bankroll)}</b></div>`).join('')}</div>`;
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
  const sorted = [...S.players].sort((a, b) => b.bankroll - a.bankroll);
  const place = sorted.findIndex((p) => p.id === me.id) + 1;
  const won = place === 1;
  app.innerHTML = screen(topbar(), `<div class="big-emoji">${won ? '👑' : place === sorted.length ? '🥄' : '🥈'}</div>
    <h1 class="h">${won ? 'CHAMPION!' : `You finished ${ordWord(place)}`}</h1><p class="sub big">${money(me.bankroll)}</p>${standHtml()}`,
  readyBtn(me.ready ? '✓ READY' : 'PLAY AGAIN ↻'));
  app.onclick = (e) => { if (e.target.closest('#readybtn')) { send({ t: 'ready', value: !me.ready }); vibrate(25); } };
  if (fresh && won) confetti(document.body, { count: 150 });
}
