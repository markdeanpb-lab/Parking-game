// MARKRUN phone controller: join, private clues, bet slip, lock-in, race reactions, results, ready-up.
import { connect } from '../shared/net.js';
import { $, $$, esc, money, signedMoney, ordinalHtml, avatarHtml, runnerById, runnerShort, betLabel, betOdds, betRunnerId, betKind, clueHtml, oddsText, betOutcome, confetti } from '../shared/ui.js';
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
let carouselIndex = 0;
let profile = store.get('markrun.profile', { name: '', avatar: { emoji: AVATAR_EMOJI[Math.floor(Math.random() * 12)], colour: AVATAR_COLOURS[Math.floor(Math.random() * 8)] } });

const vibrate = (p) => { try { navigator.vibrate?.(p); } catch { /* */ } };
const portrait = (r, size) => runnerPortrait(r, { size, idSuffix: `p${Math.random().toString(36).slice(2, 6)}` });

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
    else if (m.t === 'claimPending') { app.innerHTML = `<div class="join"><div class="logo-s outlined">MARK<span>RUN</span></div><div class="card center"><div class="big-emoji">📺</div><h2>Ask the TV</h2><p>Waiting for someone to press <b>Allow</b> on the TV to take over ${esc(m.name)}'s seat…</p></div></div>`; viewKey = 'claim'; }
  },
});
const send = (m) => net.send(m);

// keep the screen awake while playing (where supported)
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
  toast.t = setTimeout(() => { host.innerHTML = ''; }, 2600);
}

// ---------------------------------------------------------------------------------------------------
function onState() {
  if (!me) { render(); return; }
  // new round -> load slip (local draft first, then server draft)
  const rid = S.round?.roundId || null;
  if (rid !== slipRound) {
    slipRound = rid;
    carouselIndex = 0;
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
  if (k !== viewKey) {
    viewKey = k;
    modal.innerHTML = '';
    window.scrollTo(0, 0);
    if (!me) return renderJoin();
    const ph = S.phase;
    if (ph === 'LOBBY') return renderLobby();
    if (ph === 'INTRO' || ph === 'BETTING') return me.locked || S.revealed ? renderLocked() : renderBetting();
    if (ph === 'RACE') return renderRace();
    if (ph === 'RESULTS') return renderResults();
    if (ph === 'SCOREBOARD') return renderScore();
    if (ph === 'FINALE') return renderFinale();
    return undefined;
  }
  update();
  return undefined;
}

// partial updates on the current view (no scroll jumps)
function update() {
  if (!me) return;
  const tb = $('.topbar');
  if (tb) tb.outerHTML = topbar();
  const ph = S.phase;
  if ((ph === 'INTRO' || ph === 'BETTING') && !me.locked && !S.revealed) { renderSlip(); renderBottomBet(); markCards(); }
  if ((ph === 'INTRO' || ph === 'BETTING') && (me.locked || S.revealed)) { const w = $('#waitlist'); if (w) w.innerHTML = waitList(); }
  if (ph === 'LOBBY') { const l = $('#lobbylist'); if (l) l.innerHTML = lobbyList(); renderBottomReady('LOBBY'); }
  if (ph === 'RESULTS' || ph === 'SCOREBOARD' || ph === 'FINALE') renderBottomReady(ph);
  if (ph === 'SCOREBOARD') { const st = $('#stand'); if (st) st.innerHTML = standHtml(); }
  if (ph === 'RACE') { renderLive(); renderMarket(); }
  if (ph === 'LOBBY') { const mk = $('#markbtn'); if (mk) mk.outerHTML = markBtn(); }
}

function topbar() {
  const ph = { LOBBY: 'Lobby', INTRO: 'Intros', BETTING: S.revealed ? 'Revealed!' : 'Betting open', RACE: 'Racing', RESULTS: 'Results', SCOREBOARD: 'Standings', FINALE: 'Full time' }[S.phase] || '';
  const staked = slip.reduce((a, b) => a + (b.stake || 0), 0);
  const betting = (S.phase === 'INTRO' || S.phase === 'BETTING') && !me.locked && !S.revealed;
  const racing = S.phase === 'RACE';
  const leftNow = betting ? capOf() - staked : racing ? capOf() - (me.bets || []).reduce((a, b) => a + b.stake, 0) : me.bankroll;
  return `<div class="topbar">${avatarHtml(me.avatar, 44)}<div><div class="nm">${esc(me.name)}</div><div class="ph">${S.round && S.phase !== 'LOBBY' ? `Round ${S.roundNumber}/${S.roundsPerGame} · ` : ''}${ph}</div></div>
    <div class="bank"><div class="v num">${money(Math.max(0, leftNow))}</div><div class="l">${betting || racing ? 'left to bet' : 'bankroll'}</div></div></div>`;
}

// ---------------------------------------------------------------------------------------------------
// JOIN
function renderJoin() {
  const canJoin = lobby ? lobby.canJoin : true;
  const offline = (lobby?.players || []).filter((p) => !p.connected);
  if (!canJoin) {
    app.innerHTML = `<div class="join"><div class="logo-s outlined">MARK<span>RUN</span></div>
      <div class="card center"><div class="big-emoji">🏃‍♂️</div><h2>Game in progress</h2><p>${lobby?.phase === 'LOBBY' ? 'The sofa is full!' : 'A game is already running.'}</p>
      ${offline.length ? `<p>Are you one of these players? Tap to get back in:</p><div class="claim-list">${offline.map((p) => `<button class="btn white block" data-claim="${p.id}">${avatarHtml(p.avatar, 40)} ${esc(p.name)}</button>`).join('')}</div>` : '<p>Ask the host to start a new game from the TV.</p>'}
      </div></div>`;
    app.onclick = (e) => { const b = e.target.closest('[data-claim]'); if (b) send({ t: 'claim', playerId: b.dataset.claim }); };
    return;
  }
  app.innerHTML = `<div class="join">
    <div class="logo-s outlined">MARK<span>RUN</span></div>
    <div class="sub">Grab a drink. Pick a name. Back a Mark.</div>
    <div class="field panel cream"><label for="nm">What do we call you?</label><input id="nm" maxlength="16" autocomplete="off" autocapitalize="words" enterkeyhint="go" placeholder="Your name" value="${esc(profile.name)}"></div>
    <div class="field panel cream"><label>Pick your mascot</label>
      <div class="emoji-grid">${AVATAR_EMOJI.map((e) => `<button data-emoji="${e}" class="${profile.avatar.emoji === e ? 'sel' : ''}" aria-label="${e}">${e}</button>`).join('')}</div>
      <div class="colour-row">${AVATAR_COLOURS.map((c) => `<button data-colour="${c}" class="${profile.avatar.colour === c ? 'sel' : ''}" style="background:${c}" aria-label="colour"></button>`).join('')}</div>
    </div>
    <div class="preview">${avatarHtml(profile.avatar, 72)}<span class="pn">${esc(profile.name || 'You')}</span></div>
    ${joinErr ? `<div class="card center" style="background:#ffe3e5"><p style="color:var(--tomato)">${esc(joinErr)}</p></div>` : ''}
    ${(lobby?.players || []).length ? `<p class="sub">Already on the sofa: ${lobby.players.map((p) => `${esc(p.avatar.emoji)} ${esc(p.name)}`).join(', ')}</p>` : ''}
  </div>
  <div class="bottom-bar"><button class="btn green" id="joinbtn">JOIN THE GAME ▶</button></div>`;
  const input = $('#nm');
  const upd = () => { $('.preview').innerHTML = `${avatarHtml(profile.avatar, 72)}<span class="pn">${esc(profile.name || 'You')}</span>`; };
  input.addEventListener('input', () => { profile.name = input.value; upd(); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doJoin(); });
  app.onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.emoji) { profile.avatar.emoji = b.dataset.emoji; $$('[data-emoji]').forEach((x) => x.classList.toggle('sel', x === b)); upd(); vibrate(10); }
    if (b.dataset.colour) { profile.avatar.colour = b.dataset.colour; $$('[data-colour]').forEach((x) => x.classList.toggle('sel', x === b)); upd(); vibrate(10); }
  };
  $('#joinbtn').onclick = doJoin;
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
function lobbyList() {
  return S.players.map((p) => `<div class="who-row">${avatarHtml(p.avatar, 40)}${esc(p.name)}${p.id === me.id ? ' (you)' : ''}${S.settings?.runnerPlayerId === p.id ? ' 🏃' : ''}<span class="st">${!p.connected ? '📵' : p.ready ? '✅ ready' : '…'}</span></div>`).join('');
}
function markBtn() {
  const rp = S.settings?.runnerPlayerId;
  const mine = rp === me.id;
  const other = rp && !mine ? S.players.find((p) => p.id === rp) : null;
  return `<button class="btn ${mine ? 'pink' : 'white'} block" id="markbtn">${mine ? "🏃 I'm Mark ✓" : other ? `🏃 ${esc(other.name)} is Mark` : "🏃 I'm Mark (the runner)"}</button>`;
}
function renderLobby() {
  app.innerHTML = `${topbar()}
    <div class="hero-title outlined">YOU'RE IN!</div>
    <div class="card center"><div style="display:flex;justify-content:center">${avatarHtml(me.avatar, 110)}</div><h2>${esc(me.name)}</h2><p>You start with <b>${money(me.bankroll)}</b> of entirely fictional money.</p></div>
    <div class="card center">${markBtn()}<p style="font-size:14px;margin-top:8px">Is this your parkrun history? The other player gets an extra 🔥 hot tip to make it fair.</p></div>
    <div class="card"><h2 style="font-size:22px">On the sofa</h2><div class="who-list" id="lobbylist">${lobbyList()}</div>
    <p style="font-size:14px;margin-top:12px">Look at the TV — the game starts when everyone's ready, or when the host presses start.</p></div>
    <div class="bottom-bar" id="bb"></div>`;
  renderBottomReady('LOBBY');
  app.onclick = (e) => { if (e.target.closest('#markbtn')) { send({ t: 'iAmMark', value: S.settings?.runnerPlayerId !== me.id }); vibrate(15); } };
}
function renderBottomReady(phase) {
  const bb = $('#bb'); if (!bb) return;
  const waiting = S.players.filter((p) => !p.ready && p.id !== me.id).map((p) => p.name);
  let label, show = true;
  if (phase === 'LOBBY') label = me.ready ? "✓ READY — waiting…" : "I'M READY ▶";
  else if (phase === 'RESULTS') { show = S.resultsStage >= 3; label = me.ready ? '✓ READY' : 'NEXT ROUND ▶'; }
  else if (phase === 'SCOREBOARD') label = me.ready ? '✓ READY' : (S.roundNumber >= S.roundsPerGame ? 'SHOW THE CHAMPION ▶' : 'NEXT ROUND ▶');
  else if (phase === 'FINALE') label = me.ready ? '✓ READY' : 'PLAY AGAIN ↻';
  const nextBtn = phase === 'RESULTS' && S.resultsStage < (S.resultStages?.length || 5) - 1 ? `<button class="btn blue" id="nextbtn">Next ▶</button>` : '';
  if (!show) { bb.innerHTML = nextBtn ? `<div class="row2">${nextBtn}</div>` : ''; wireNext(); return; }
  const sum = me.ready && waiting.length ? `<div class="summary"><span>Waiting for ${esc(waiting.join(' & '))}…</span></div>` : '';
  bb.innerHTML = `${sum}<div class="row2">${nextBtn}<button class="btn ${me.ready ? 'white' : 'green'}" id="readybtn">${label}</button></div>`;
  $('#readybtn').onclick = () => { send({ t: 'ready', value: !me.ready }); vibrate(25); };
  wireNext();
}

function wireNext() {
  const b = $('#nextbtn');
  if (b) b.onclick = () => { send({ t: 'next' }); vibrate(15); b.disabled = true; setTimeout(() => { b.disabled = false; }, 1200); };
}

// ---------------------------------------------------------------------------------------------------
// BETTING
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
  // if over budget, trim from the last bet backwards
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
  draftTimer = setTimeout(() => send({ t: 'draft', bets: slip }), 350);
  renderSlip(); renderBottomBet(); markCards();
  const tb = $('.topbar'); if (tb) tb.outerHTML = topbar();
}
function findWin(rid) { return slip.find((b) => b.type === 'win' && b.runnerId === rid); }
function findH2h(mid) { return slip.find((b) => b.type === 'h2h' && b.matchupId === mid); }
function findProp(pid) { return slip.find((b) => b.type === 'prop' && b.propId === pid); }
function pickProp(pid, pick) {
  const ex = findProp(pid);
  if (ex && ex.pick === pick) slip = slip.filter((b) => b !== ex);
  else if (ex) ex.pick = pick;
  else { if (!canAdd()) return; slip.push({ type: 'prop', propId: pid, pick, stake: defaultStake() }); toast('✓ Side bet added'); }
  vibrate(15);
  slipChanged();
}
function defaultStake() { const { minStake } = rules(); return Math.max(minStake, Math.min(50, left())); }
function canAdd() {
  const { minStake, maxBets } = rules();
  if (slip.length >= maxBets) { toast(`Max ${maxBets} bets per round`, 'red'); vibrate([40, 30, 40]); return false; }
  if (left() < minStake) { toast(isFinale() ? "You're out of money!" : 'That\'s your limit this round (half your bankroll)', 'red'); vibrate([40, 30, 40]); return false; }
  return true;
}
function toggleWin(rid) {
  const ex = findWin(rid);
  if (ex) slip = slip.filter((b) => b !== ex);
  else { if (!canAdd()) return; slip.push({ type: 'win', runnerId: rid, stake: defaultStake() }); toast(`✓ Added: ${runnerById(S.round, rid)?.nickname} to win`); }
  vibrate(15);
  slipChanged();
}
function pickH2h(mid, pick) {
  const ex = findH2h(mid);
  if (ex && ex.pick === pick) slip = slip.filter((b) => b !== ex);
  else if (ex) ex.pick = pick;
  else { if (!canAdd()) return; slip.push({ type: 'h2h', matchupId: mid, pick, stake: defaultStake() }); }
  vibrate(15);
  slipChanged();
}

function renderBetting() {
  const round = S.round;
  const runners = [...round.runners].sort((a, b) => a.lane - b.lane);
  const privList = me.privateClues || [];
  const hot = privList.filter((c) => c.tier === 'hot');
  const dbl = Number(round.payoutMultiplier) >= 2;
  app.innerHTML = `${topbar()}
    ${dbl ? '<div class="card center dbl"><div class="outlined" style="font-size:30px">DOUBLE PAYOUT FINALE ×2</div><p style="color:#fff">Every winning bet pays double this round!</p></div>' : ''}
    ${round.theme?.label ? `<div class="card theme"><span class="tk">THEME</span><b>${esc(round.theme.label)}</b>${round.theme.blurb ? `<p>${esc(round.theme.blurb)}</p>` : ''}</div>` : ''}
    ${round.notice ? `<div class="card center" style="background:var(--grape);color:#fff;padding:12px"><b>🃏 ${esc(round.notice)}</b></div>` : ''}
    ${hot.length ? `<button class="hotbar" data-jump="${hot[0].runnerId}">🔥 You have ${hot.length === 1 ? 'a HOT TIP' : `${hot.length} HOT TIPS`} this round — tap to see ${hot.length === 1 ? 'it' : 'the first'}</button>` : ''}
    <div class="section-title">The field <small>swipe for all ${runners.length} →</small></div>
    <div class="carousel" id="car">${runners.map((r) => {
      const pcs = privList.filter((c) => c.runnerId === r.id);
      return `<div class="rcard ${pcs.some((c) => c.tier === 'hot') ? 'has-hot' : ''}" data-rid="${r.id}">
        <div class="head stripe" style="--c1:${esc(r.colour.primary)};--c2:${esc(r.colour.secondary || '#fff')}">
          <div class="rp">${portrait(r, 108)}</div>
          <div class="who"><div class="nick">${esc(r.nickname)}</div><span class="lane">LANE ${r.lane}</span></div>
          <div class="odds"><div class="o">${esc(r.odds?.display || '')}</div><div class="l">${r.odds?.decimalText ? `PAYS ×${esc(r.odds.decimalText)}` : 'TO WIN'}</div></div>
        </div>
        <div class="body">
          <div class="tagl">${esc(r.tagline || '')}</div>
          <div class="clue-box"><span class="k">📺 PUBLIC CLUE${r.publicClue?.label ? ` · ${esc(r.publicClue.label.toUpperCase())}` : ''}</span>${clueHtml(r.publicClue)}</div>
          ${pcs.map((pc) => (pc.tier === 'hot'
    ? `<div class="clue-box hot"><span class="k">🔥 HOT TIP · ONLY YOU CAN SEE THIS</span>${clueHtml(pc)}</div>`
    : `<div class="clue-box secret"><span class="k">🤫 GOSSIP · ONLY YOU CAN SEE THIS${pc.label && pc.label.toLowerCase() !== 'gossip' ? ` · ${esc(pc.label.toUpperCase())}` : ''}</span>${clueHtml(pc)}</div>`)).join('')}
          <div class="actions"><button class="btn" data-win="${r.id}">Back to WIN</button></div>
        </div></div>`;
    }).join('')}</div>
    <div class="dots" id="dots">${runners.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('')}</div>
    ${(round.matchups || []).length ? `<div class="section-title">Head-to-heads <small>who finishes ahead?</small></div><div class="mus">${round.matchups.map((m) => {
      const a = runnerById(round, m.a), b = runnerById(round, m.b);
      if (!a || !b) return '';
      return `<div class="mu" data-mid="${m.id}"><div class="ml">HEAD-TO-HEAD</div><div class="row">
        <button class="pick" data-mid="${m.id}" data-pick="${a.id}"><span class="rp">${portrait(a, 44)}</span>${esc(runnerShort(a))}<span class="x">${esc(m.odds.displayA || `×${m.odds.a}`)}</span></button>
        <span class="vs">VS</span>
        <button class="pick" data-mid="${m.id}" data-pick="${b.id}"><span class="rp">${portrait(b, 44)}</span>${esc(runnerShort(b))}<span class="x">${esc(m.odds.displayB || `×${m.odds.b}`)}</span></button></div></div>`;
    }).join('')}</div>` : ''}
    ${(round.props || []).length ? `<div class="section-title">Side bets 🎡 <small>yes or no?</small></div><div class="mus">${round.props.map((pr) => `<div class="mu prop" data-prop="${pr.id}"><div class="ptext">${esc(pr.text)}</div><div class="row yn">
        <button class="pick yes" data-prop="${pr.id}" data-yn="yes">YES<span class="x">${esc(pr.odds?.displayYes || `×${pr.odds?.yes}`)}</span></button>
        <button class="pick no" data-prop="${pr.id}" data-yn="no">NO<span class="x">${esc(pr.odds?.displayNo || `×${pr.odds?.no}`)}</span></button></div></div>`).join('')}</div>` : ''}
    <div class="section-title">Your bet slip <small id="slipcount"></small></div>
    <div class="slip" id="slip"></div>
    <div style="height:30px"></div>
    <div class="bottom-bar" id="bb"></div>`;
  const car = $('#car');
  car.addEventListener('scroll', () => {
    const w = car.firstElementChild?.getBoundingClientRect().width || 1;
    const i = Math.round(car.scrollLeft / (w + 12));
    if (i !== carouselIndex) { carouselIndex = i; $$('#dots i').forEach((d, j) => d.classList.toggle('on', j === i)); }
  }, { passive: true });
  app.onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.win) return toggleWin(b.dataset.win);
    if (b.dataset.yn) return pickProp(b.dataset.prop, b.dataset.yn);
    if (b.dataset.pick) return pickH2h(b.dataset.mid, b.dataset.pick);
    if (b.dataset.jump) { const i = runners.findIndex((r) => r.id === b.dataset.jump); const c = $('#car'); const w = c.firstElementChild.getBoundingClientRect().width + 12; c.scrollTo({ left: i * w, behavior: 'smooth' }); c.scrollIntoView({ behavior: 'smooth', block: 'center' }); return undefined; }
    if (b.dataset.chip) return chip(Number(b.dataset.i), b.dataset.chip);
    if (b.dataset.rm) { slip.splice(Number(b.dataset.rm), 1); vibrate(10); return slipChanged(); }
    return undefined;
  };
  renderSlip(); renderBottomBet(); markCards();
}
function chip(i, kind) {
  const b = slip[i]; if (!b) return;
  const { minStake } = rules();
  const room = left();
  if (kind === 'all') b.stake += room;
  else if (kind === 'minus') b.stake = Math.max(minStake, b.stake - 10);
  else b.stake += Math.min(room, Number(kind));
  if (kind !== 'minus' && room <= 0) toast(isFinale() ? "That's everything you've got!" : 'Max for this round: half your bankroll. Go big in the finale!', 'red');
  vibrate(8);
  slipChanged();
}
function markCards() {
  for (const c of $$('.rcard')) {
    const on = !!findWin(c.dataset.rid);
    const btn = c.querySelector('[data-win]');
    btn.classList.toggle('on', on);
    btn.textContent = on ? `✓ Backing to WIN (${money(findWin(c.dataset.rid).stake)})` : 'Back to WIN';
  }
  for (const p of $$('.pick')) {
    if (p.dataset.yn) { const ex = findProp(p.dataset.prop); p.classList.toggle('on', !!ex && ex.pick === p.dataset.yn); continue; }
    const ex = findH2h(p.dataset.mid); p.classList.toggle('on', !!ex && ex.pick === p.dataset.pick);
  }
}
function renderSlip() {
  const el = $('#slip'); if (!el) return;
  const { maxBets } = rules();
  $('#slipcount').textContent = `${slip.length}/${maxBets} bets`;
  if (!slip.length) { el.innerHTML = '<div class="empty">Nothing yet. Tap <b>Back to WIN</b> on a runner, or pick a head-to-head. 👆</div>'; return; }
  const room = left();
  el.innerHTML = slip.map((b, i) => {
    const r = runnerById(S.round, betRunnerId(b));
    const odds = betOdds(S.round, b);
    return `<div class="sbet"><div class="r1"><span class="rp">${r ? portrait(r, 40) : ''}</span><div class="lb">${esc(betLabel(S.round, b))}<small>${betKind(b)} · ${esc(oddsText(S.round, b))}</small></div><button class="x" data-rm="${i}" aria-label="Remove bet">✕</button></div>
      <div class="r2"><span class="stake num">${money(b.stake)}</span><span class="pays">returns<b>${money(b.stake * odds)}</b></span></div>
      <div class="chips"><button class="chip minus" data-i="${i}" data-chip="minus">−10</button><button class="chip" data-i="${i}" data-chip="10" ${room < 1 ? 'disabled' : ''}>+10</button><button class="chip" data-i="${i}" data-chip="50" ${room < 1 ? 'disabled' : ''}>+50</button><button class="chip" data-i="${i}" data-chip="100" ${room < 1 ? 'disabled' : ''}>+100</button><button class="chip allin" data-i="${i}" data-chip="all" ${room < 1 ? 'disabled' : ''}>${isFinale() ? 'ALL IN' : 'MAX'}</button></div></div>`;
  }).join('') + `<div class="slip-meta"><span>Staked ${money(staked())}</span><span>Left ${money(room)}</span></div>${isFinale() ? '<div class="slip-rule">🔥 Finale: everything can go on it!</div>' : `<div class="slip-rule">Max this round: ${money(capOf())} (half your bankroll)</div>`}`;
}
function renderBottomBet() {
  const bb = $('#bb'); if (!bb) return;
  const open = S.phase === 'BETTING';
  const n = slip.length;
  let timer = '';
  if (open && S.deadline) { const s = Math.max(0, Math.ceil((S.deadline - net.serverNow()) / 1000)); timer = ` · ⏱ ${s}s`; }
  bb.innerHTML = `<div class="summary"><span>${n} bet${n === 1 ? '' : 's'} · ${money(staked())} staked${timer}</span><span>${money(left())} left</span></div>
    <button class="btn ${open ? 'red' : 'white'}" id="lockbtn" ${open ? '' : 'disabled'}>${open ? 'LOCK IN 🔒' : '📺 Betting opens after the intros…'}</button>`;
  $('#lockbtn').onclick = confirmLock;
}
setInterval(() => { if (S?.phase === 'BETTING' && S.deadline && !me?.locked && $('#lockbtn')) renderBottomBet(); }, 1000);

function confirmLock() {
  if (!net.open) { toast('Not connected — retrying…', 'red'); net.reconnect(); return; }
  const n = slip.length;
  modal.innerHTML = `<div class="sheet"><h3>${n ? `Lock in ${n} bet${n > 1 ? 's' : ''}?` : 'Lock in with NO bets?'}</h3>
    <p>${n ? `${money(staked())} on the line. No take-backs once everyone's locked!` : 'Sitting this one out? Coward. (Fair enough.)'}</p>
    <div class="row"><button class="btn white" id="nope">Not yet</button><button class="btn red" id="yep">LOCK IT 🔒</button></div></div>`;
  $('#nope').onclick = () => { modal.innerHTML = ''; };
  modal.onclick = (e) => { if (e.target === modal) modal.innerHTML = ''; };
  $('#yep').onclick = () => { send({ t: 'lock', bets: slip }); modal.innerHTML = ''; vibrate([30, 30, 80]); };
}

// ---------------------------------------------------------------------------------------------------
// LOCKED / REVEALED
function myBetsHtml(bets, results) {
  const res = results ? new Map((results.payouts?.[me.id]?.bets || []).map((b, i) => [i, b])) : null;
  if (!bets.length) return '<p>No bets this round. Just vibes. 🧘</p>';
  return `<div class="mybets">${bets.map((b, i) => {
    const r = runnerById(S.round, betRunnerId(b));
    const rr = res?.get(i);
    const o = rr ? betOutcome(rr) : null;
    return `<div class="mybet ${o ? o.kind : ''}"><span class="rp">${r ? portrait(r, 40) : '<span class="propicon">🎡</span>'}</span><div class="lb">${esc(betLabel(S.round, b))}<small>${betKind(b)} · ${esc(oddsText(S.round, b))} · ${o ? `staked ${money(b.stake)}` : `returns ${money(b.stake * betOdds(S.round, b))}`}</small></div><span class="s">${o ? o.text : money(b.stake)}</span></div>`;
  }).join('')}</div>`;
}
function waitList() {
  return S.players.map((p) => `<div class="who-row">${avatarHtml(p.avatar, 36)}${esc(p.name)}${p.id === me.id ? ' (you)' : ''}<span class="st">${p.locked ? '🔒 locked' : '🤔 thinking…'}</span></div>`).join('');
}
function renderLocked() {
  const others = S.players.filter((p) => p.id !== me.id);
  if (S.revealed) {
    app.innerHTML = `${topbar()}<div class="hero-title outlined">BETS REVEALED!</div>
      <div class="card center"><div class="big-emoji">👀</div><h2>Look at the telly!</h2><p>Everyone's bets are up on the TV.</p></div>
      <div class="card"><h2 style="font-size:22px">Your bets</h2>${myBetsHtml(me.bets || [])}</div>
      ${others.map((p) => `<div class="card"><h2 style="font-size:22px">${esc(p.avatar.emoji)} ${esc(p.name)}'s bets</h2>${(S.bets?.[p.id] || []).length ? `<div class="mybets">${S.bets[p.id].map((b) => `<div class="mybet"><span class="rp">${(runnerById(S.round, betRunnerId(b)) ? portrait(runnerById(S.round, betRunnerId(b)), 40) : '<span class="propicon">🎡</span>')}</span><div class="lb">${esc(betLabel(S.round, b))}</div><span class="s">${money(b.stake)}</span></div>`).join('')}</div>` : '<p>No bets!</p>'}</div>`).join('')}`;
    return;
  }
  app.innerHTML = `${topbar()}<div class="hero-title outlined">LOCKED IN!</div>
    <div class="card center"><div class="big-emoji">🔒</div><h2>No peeking!</h2><p>${others.length ? 'Waiting for everyone else to lock in. Bets stay secret until then.' : 'Bets are in.'}</p>
    <div class="who-list" id="waitlist">${waitList()}</div></div>
    <div class="card"><h2 style="font-size:22px">Your bets</h2>${myBetsHtml(me.bets || [])}</div>
    <div class="bottom-bar"><button class="btn white" id="unlock">✏️ Change my bets</button></div>`;
  $('#unlock').onclick = () => { send({ t: 'unlock' }); vibrate(10); };
}

// ---------------------------------------------------------------------------------------------------
// RACE
let lastLeader = null;
let marketStake = 50;
function renderRace() {
  lastLeader = null;
  app.innerHTML = `${topbar()}<div class="hero-title outlined">EYES ON THE TELLY!</div>
    <div class="card live" id="live"><p>📺 Waiting for the start…</p></div>
    <div class="react-grid">${(S.reactions || []).map((e) => `<button data-react="${e}">${e}</button>`).join('')}</div>
    <div class="card"><h2 style="font-size:22px">Your bets</h2><div id="racebets">${myBetsHtml(me.bets || [])}</div></div>`;
  let last = 0;
  app.onclick = (e) => {
    const b = e.target.closest('[data-react]'); if (!b) return;
    const now = Date.now(); if (now - last < 250) return; last = now;
    send({ t: 'react', emoji: b.dataset.react });
    vibrate(12);
  };
  renderLive(); renderMarket();
}
function ordWord(n) { return `${n}${['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}`; }
function renderLive() {
  const box = $('#live'); if (!box) return;
  const L = me.live;
  const rb = $('#racebets'); if (rb) rb.innerHTML = myBetsHtml(me.bets || []);
  if (!L) return;
  const stakeOn = (rid) => (me.bets || []).filter((b) => betRunnerId(b) === rid).reduce((a, b) => a + b.stake, 0);
  const rows = (L.mine || []).map((x) => {
    const r = runnerById(S.round, x.runnerId);
    const status = x.place === 1 ? (x.finished ? 'WON IT!' : 'LEADING!') : `${ordWord(x.place)}, +${Number(x.gapS).toFixed(1)}s`;
    return `<div class="lv ${x.place === 1 ? 'lead' : ''}"><span class="rp">${r ? portrait(r, 46) : ''}</span><div class="lb">Your ${money(stakeOn(x.runnerId))} runner<small>${esc(r?.nickname || '')}</small></div><span class="ls">${status}</span></div>`;
  }).join('');
  box.innerHTML = rows || '<p>No runners to cheer — just enjoy the chaos. 🍿</p>';
  // buzz when the lead changes and it involves one of my runners
  const mine = new Set((L.mine || []).map((x) => x.runnerId));
  if (lastLeader && L.leaderId && L.leaderId !== lastLeader && (mine.has(L.leaderId) || mine.has(lastLeader))) {
    vibrate(mine.has(L.leaderId) ? [60, 40, 60, 40, 160] : [300]);
    toast(mine.has(L.leaderId) ? `🔥 ${runnerById(S.round, L.leaderId)?.nickname} takes the lead!` : `😱 ${runnerById(S.round, lastLeader)?.nickname} has lost the lead!`, mine.has(L.leaderId) ? '' : 'red');
  }
  lastLeader = L.leaderId || lastLeader;
}
function renderMarket() {
  const m = S.market;
  const placed = (me.bets || []).find((b) => b.type === 'inplay');
  if (!m || (!m.open && !placed)) { if (modal.dataset.kind === 'market') { modal.innerHTML = ''; modal.dataset.kind = ''; } return; }
  if (!m.open) { if (modal.dataset.kind === 'market') { modal.innerHTML = ''; modal.dataset.kind = ''; } return; }
  const free = capOf() - (me.bets || []).reduce((a, b) => a + b.stake, 0);
  const minStake = S.round?.rules?.minStake ?? 10;
  marketStake = Math.max(minStake, Math.min(marketStake, free));
  const secs = Math.max(0, Math.ceil((m.closesAt - net.serverNow()) / 1000));
  const rows = (m.standings || []).map((x) => {
    const r = runnerById(S.round, x.runnerId);
    const o = m.odds?.[x.runnerId];
    return `<button class="mkr" data-ip="${x.runnerId}" ${placed || free < minStake ? 'disabled' : ''}>${ordinalHtml(x.place)}<span class="rp">${r ? portrait(r, 40) : ''}</span><span class="n">${esc(runnerShort(r) || x.runnerId)}<small>${x.place === 1 ? 'leads' : `+${Number(x.gapS).toFixed(1)}s`}</small></span><span class="o">${esc(o?.display || '')}</span></button>`;
  }).join('');
  const stakes = [minStake, 50, 100, 250].filter((v, i, a) => v <= free && a.indexOf(v) === i);
  modal.dataset.kind = 'market';
  modal.innerHTML = `<div class="sheet market"><h3>⏱ HALFWAY MARKET <span class="secs">${secs}s</span></h3>
    ${placed ? `<p class="done">✓ You're on <b>${esc(runnerById(S.round, placed.runnerId)?.nickname || '')}</b> — ${money(placed.stake)} @ ${esc(placed.display || `×${placed.odds}`)}</p>`
    : free < minStake ? '<p>No money left for a halfway bet. Just watch! 🍿</p>' : `<p>One bet. Pick a stake, then tap a runner.</p>
    <div class="mkst">${stakes.map((v) => `<button class="chip ${v === marketStake ? 'sel' : ''}" data-ms="${v}">${money(v)}</button>`).join('')}<button class="chip allin ${marketStake === free ? 'sel' : ''}" data-ms="${free}">${isFinale() ? 'ALL IN' : 'MAX'}</button></div>`}
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
// RESULTS
function renderResults() {
  const res = S.results;
  if (!res) { app.innerHTML = `${topbar()}<div class="card center"><div class="big-emoji">⏳</div><h2>Results coming…</h2></div>`; return; }
  const order = `<div class="order-mini">${res.finishOrder.map((f) => { const r = runnerById(S.round, f.runnerId); return `<div class="om">${ordinalHtml(f.place)}<span class="dot" style="background:${esc(r?.colour?.primary)}"></span>${esc(r?.nickname || f.runnerId)}<span class="t">${esc(f.timeText || '')}</span></div>`; }).join('')}</div>`;
  if (S.resultsStage >= 2 && S.resultsStage < 3) {
    const rv = new Map((res.reveal || []).map((x) => [x.runnerId, x]));
    app.innerHTML = `${topbar()}<div class="hero-title outlined">THE DETAILS</div>
      <div class="card center"><p>📺 The TV is revealing who they really were. Here's the small print:</p></div>
      ${res.finishOrder.map((f) => { const r = runnerById(S.round, f.runnerId); const x = rv.get(f.runnerId) || {};
        const meta = [x.eventNumber ? `Event #${x.eventNumber}` : '', x.overallPosition ? `${ordWord(x.overallPosition)} overall` : '', x.ageGrade ? `${x.ageGrade}% age grade` : '', x.finsburyNumber ? `Finsbury run #${x.finsburyNumber}` : ''].filter(Boolean).join(' · ');
        return `<div class="card det"><div class="dh">${ordinalHtml(f.place)}<span class="rp">${r ? portrait(r, 44) : ''}</span><b>${esc(r?.nickname || '')}</b><span class="t">${esc(f.timeText || '')}</span></div>
          <div class="dd">${esc(x.dateText || '')}${x.stravaTitle ? ` · “${esc(x.stravaTitle)}”` : ''}</div>${meta ? `<div class="dm">${esc(meta)}</div>` : ''}
          ${(x.funFacts || []).length ? `<ul>${x.funFacts.map((ff) => `<li>${esc(ff)}</li>`).join('')}</ul>` : ''}</div>`; }).join('')}
      <div class="bottom-bar" id="bb"></div>`;
    renderBottomReady('RESULTS');
    return;
  }
  if (S.resultsStage < 3) {
    app.innerHTML = `${topbar()}<div class="hero-title outlined">WHAT A RACE!</div>
      <div class="card center"><div class="big-emoji">📺</div><h2>Eyes on the TV!</h2><p>The result and the big reveal are on the telly. Payouts land here after that.</p></div>
      <div class="card"><h2 style="font-size:22px">Your bets</h2>${myBetsHtml(me.bets || [])}</div><div class="bottom-bar" id="bb"></div>`;
    renderBottomReady('RESULTS');
    return;
  }
  const pay = res.payouts?.[me.id] || { net: 0, bankroll: me.bankroll, bets: [] };
  const drinking = S.settings.drinkingMode;
  const gameDrinks = Array.isArray(res.drinks) ? res.drinks.filter((d) => d.playerId === me.id || !d.playerId).map((d) => `🍺 ${d.text}`).join(' · ') : null;
  const drink = !drinking ? '' : gameDrinks != null ? gameDrinks : pay.net < 0 ? `🍺 Take ${Math.min(5, Math.max(1, Math.ceil(-pay.net / 100)))} sips` : pay.net > 0 ? `👉 Hand out ${Math.min(5, Math.max(1, Math.ceil(pay.net / 150)))} sips` : '🥤 Water break';
  const mood = pay.net > 0 ? '🤑' : pay.net < 0 ? '😭' : '😐';
  const awards = (res.awards || []).filter((a) => a.playerId === me.id);
  app.innerHTML = `${topbar()}
    <div class="card center"><div class="big-emoji">${mood}</div><div class="net-big outlined ${pay.net > 0 ? 'green' : pay.net < 0 ? 'red' : 'white'}">${signedMoney(pay.net)}</div>
    <p>Bankroll now <b>${money(pay.bankroll)}</b></p>${drink ? `<div class="drink-chip">${drink}</div>` : ''}</div>
    ${awards.map((a) => `<div class="card center" style="background:var(--sun)"><div class="big-emoji">🏆</div><h2>${esc(a.title)}</h2><p>${esc(a.text || '')}</p></div>`).join('')}
    <div class="card"><h2 style="font-size:22px">Your bets</h2>${myBetsHtml(me.bets || [], res)}</div>
    <div class="card"><h2 style="font-size:22px">Finishing order</h2>${order}</div>
    <div class="bottom-bar" id="bb"></div>`;
  renderBottomReady('RESULTS');
  if (pay.net > 0) { confetti(document.body, { count: 80 }); vibrate([30, 40, 30, 40, 120]); } else if (pay.net < 0) vibrate(300);
}

function standHtml() {
  const sorted = [...S.players].sort((a, b) => b.bankroll - a.bankroll);
  return sorted.map((p, i) => `<div class="sr" style="background:${esc(p.avatar.colour)}">${ordinalHtml(i + 1)}${avatarHtml(p.avatar, 36)}<span>${esc(p.name)}${p.ready ? ' ✓' : ''}</span><span class="b">${money(p.bankroll)}</span></div>`).join('');
}
function renderScore() {
  app.innerHTML = `${topbar()}<div class="hero-title outlined">STANDINGS</div>
    <div class="card"><div class="stand" id="stand">${standHtml()}</div>
    <p style="margin-top:12px">${S.roundNumber >= S.roundsPerGame ? 'That was the last round!' : `Next up: round ${S.roundNumber + 1} of ${S.roundsPerGame}.`}</p></div>
    <div class="bottom-bar" id="bb"></div>`;
  renderBottomReady('SCOREBOARD');
}
function renderFinale() {
  const sorted = [...S.players].sort((a, b) => b.bankroll - a.bankroll);
  const place = sorted.findIndex((p) => p.id === me.id) + 1;
  const won = place === 1;
  app.innerHTML = `${topbar()}<div class="hero-title outlined">${won ? 'CHAMPION!' : 'GAME OVER'}</div>
    <div class="card center"><div class="big-emoji">${won ? '👑' : place === sorted.length ? '🥄' : '🥈'}</div><h2>You finished ${ordinalHtml(place)}</h2><p>with <b>${money(me.bankroll)}</b></p></div>
    <div class="card"><div class="stand" id="stand">${standHtml()}</div></div>
    <div class="bottom-bar" id="bb"></div>`;
  renderBottomReady('FINALE');
  if (won) confetti(document.body, { count: 150 });
}
