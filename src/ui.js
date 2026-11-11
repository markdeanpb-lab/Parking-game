// DOM user interface: HUD, minimap, DJ subtitles, screens, touch controls, high scores.
// Look and feel: an absurdly overproduced local-radio game show about parking. British road-sign panels,
// permit-zone hazard stripes and the studio "ON AIR" lamp. All styling lives in style.css.

import { DJ_NAME, STATION } from './dj.js';
import { PERSONAS } from './ai.js';

const $ = (id) => document.getElementById(id);
const hex = (n) => '#' + (n ?? 0x999999).toString(16).padStart(6, '0');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const SCREENS = ['loading', 'title', 'tutorial', 'results', 'gameover', 'victory', 'pause'];
const SIGN_FONT = "'Overpass', 'Helvetica Neue', Arial, sans-serif";
const reducedMotion = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

const TUTORIAL = [
  ['IT\'S MUSICAL CHAIRS. WITH CARS.', `
    <div class="tut-hero"><span style="background:#1a56b0">♪ MUSIC PLAYING · KEEP MOVING</span><span style="background:#d7142f">PARK! PARK! PARK!</span></div>
    <p>Seven drivers circulate round four real St Albans streets while the radio plays. Along the kerb are bays the council has <b>coned off</b>.</p>
    <ul>
      <li><b>While the music plays:</b> keep moving, clockwise, and scout the coned bays.</li>
      <li><b>When it stops:</b> some coned bays open. There is always <b>one fewer space than cars</b>.</li>
      <li>Park before the clock runs out or you're out. A yellow <span class="tag" style="background:#1a56b0">P</span> marker and the minimap point to your best bet.</li>
      <li>Every round another space disappears. Last driver parked wins the <b>Golden Parking Permit</b>.</li>
    </ul>`],
  ['DRIVING', `
    <div class="keys">
      <span><kbd>W</kbd> <kbd>↑</kbd></span><span>Accelerate</span>
      <span><kbd>S</kbd> <kbd>↓</kbd></span><span>Brake, then reverse</span>
      <span><kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd></span><span>Steer</span>
      <span><kbd>Space</kbd></span><span>Handbrake</span>
      <span><kbd>C</kbd></span><span>Chase camera / overhead parking camera</span>
      <span><kbd>H</kbd></span><span>Horn (achieves nothing, feels great)</span>
      <span><kbd>M</kbd> <kbd>P</kbd></span><span>Mute / Pause</span>
    </div>
    <p style="margin-top:12px">On a phone or tablet: steer with the arrows bottom-left, <b>GO</b> and <b>BRAKE</b> bottom-right. The streets are one car wide: there is no overtaking, only patience.</p>`],
  ['PARKING PROPERLY', `
    <p>Driving over the bay isn't enough. To count, your car must be:</p>
    <ul>
      <li><b>Inside the green bay</b>, between the cars either end</li>
      <li><b>Roughly straight</b> and <b>not sticking out</b> into the road</li>
      <li><b>Stopped</b> for a moment (handbrake!)</li>
    </ul>
    <p>The <b>Parking Assist</b> panel and the beeping sensors help. Reverse in like a grown-up, or dive in nose-first and shuffle.</p>
    <p>Straight, central and tight to the kerb earns a <span class="badge perfect">SHOWROOM FINISH</span>. A wonky one is <span class="badge awful">ABANDONED</span>: you survive, but you're fined.</p>`],
  ['RULES, AND WHAT GOES WRONG', `
    <ul>
      <li><b>No hovering</b> next to a bay while the music plays: your engine gets cut when it stops.</li>
      <li><b>Church St and Bernard St are one-way</b> (they really are). Kerbs, parked cars and wrong-way driving cost points.</li>
      <li><b>Driveways and double yellows</b> are not spaces, whatever the DJ shouts.</li>
      <li>Rivals genuinely race you. A space is yours only once you've <b>stopped</b> in it.</li>
      <li>When only one space is left the DJ <b>cuts the clock</b>. Get on with it.</li>
      <li>Expect the <b>bin lorry</b>, the <b>school run</b>, <b>delivery vans</b>, <b>surprise permit zones</b> and the occasional <b>Perfect Spot</b>.</li>
    </ul>
    <p>Good luck. You'll need it on Dalton Street.</p>`],
];
/** Identity colours for the contestants: the car paint is often white or grey, so chips, minimap dots,
 *  name tags and ground rings all use these instead. */
export const RIVAL_COLOURS = { player: 0xffd21f, mum: 0xff4fa3, major: 0xb98cff, dazza: 0xff8a1c, tarquin: 0x3d8bff, poppy: 0xff3b4e, sandra: 0x22d36b };
export const idColour = (c) => RIVAL_COLOURS[c.key] ?? c.colour;
const CONFETTI = ['#ffd21f', '#d7142f', '#1fbf5b', '#4cc9f0', '#f72585', '#ffffff', '#1a56b0'];

export class UI {
  constructor(track, cb) {
    this.track = track; this.cb = cb;
    this.scores = this.loadScores();
    this.tutPage = 0; this.tutThen = null;
    this.touch = { left: false, right: false, gas: false, brake: false, horn: false };
    this.subText = null; this.game = null;
    this.cache = {}; this.tape = {}; this.lastCount = null; this.lastScore = null;
    $('dj-name').textContent = `${DJ_NAME.toUpperCase()}\u2002·\u2002${STATION.toUpperCase()}`;
    const tape = 'MUSIC STOPPED · PARK! PARK! PARK! · ONE FEWER SPACE THAN CARS · '.repeat(6);
    document.querySelectorAll('.sf-tape span').forEach((s) => { s.textContent = tape; });
    $('stopfx').addEventListener('animationend', (e) => { if (e.target.classList.contains(reducedMotion() ? 'sf-white' : 't1')) $('stopfx').classList.remove('go'); });
    $('c').addEventListener('animationend', () => document.body.classList.remove('quake'));
    this.setupMinimap();
    // repaint the static map once the road-sign font arrives
    if (document.fonts && document.fonts.load) document.fonts.load(`900 15px ${SIGN_FONT}`).then(() => this.setupMinimap()).catch(() => {});
    this.bind();
    this.renderScores();
  }

  // ---------------------------------------------------------------- wiring
  bind() {
    const cb = this.cb;
    document.querySelectorAll('.mode').forEach((b) => b.addEventListener('click', () => cb.onMode(b.dataset.mode)));
    $('btn-how').addEventListener('click', () => this.showTutorial(null));
    $('btn-voice').addEventListener('click', () => cb.onToggle('voice'));
    $('btn-music').addEventListener('click', () => cb.onToggle('music'));
    $('tut-prev').addEventListener('click', () => this.tutStep(-1));
    $('tut-next').addEventListener('click', () => this.tutStep(1));
    $('res-continue').addEventListener('click', () => cb.onContinue());
    $('go-retry').addEventListener('click', () => cb.onRetry());
    $('go-menu').addEventListener('click', () => cb.onMenu());
    $('vic-next').addEventListener('click', () => cb.onVictoryNext());
    $('vic-menu').addEventListener('click', () => cb.onMenu());
    $('pause-resume').addEventListener('click', () => cb.onPause(false));
    $('pause-menu').addEventListener('click', () => cb.onMenu());
    $('btn-cam').addEventListener('click', () => cb.onKey('cam'));
    $('btn-mute').addEventListener('click', () => cb.onKey('mute'));
    $('btn-pause').addEventListener('click', () => cb.onPause(true));
    // touch buttons
    const enableTouch = () => { document.body.classList.add('touch'); this.isTouch = true; if (!$('hud').classList.contains('hidden')) $('touch').classList.remove('hidden'); };
    window.addEventListener('touchstart', enableTouch, { once: true, passive: true });
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) enableTouch();
    // Each finger is tracked by pointer id and re-targeted as it slides, so a thumb can roll from ◀ to ▶ (or GO to BRAKE)
    // without a control sticking on. Buttons are looked up with elementFromPoint, which ignores pointer capture.
    this.pointers = new Map();
    const pad = $('touch');
    const keyAt = (x, y) => { const el = document.elementFromPoint(x, y); const b = el && el.closest && el.closest('#touch button'); return b ? b.dataset.k : null; };
    const sync = () => {
      const held = new Set(this.pointers.values());
      for (const k of Object.keys(this.touch)) this.touch[k] = held.has(k);
      pad.querySelectorAll('button').forEach((b) => b.classList.toggle('on', held.has(b.dataset.k)));
    };
    const assign = (id, k) => {
      if (this.pointers.get(id) === k) return;
      this.pointers.set(id, k); if (k === 'horn') cb.onKey('horn');
      sync();
    };
    pad.addEventListener('pointerdown', (e) => {
      const b = e.target.closest && e.target.closest('#touch button'); if (!b) return;
      e.preventDefault();
      try { if (b.hasPointerCapture(e.pointerId)) b.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      assign(e.pointerId, b.dataset.k);
    });
    window.addEventListener('pointermove', (e) => { if (this.pointers.has(e.pointerId)) assign(e.pointerId, keyAt(e.clientX, e.clientY)); }, { passive: true });
    const up = (e) => { if (this.pointers.has(e.pointerId)) { this.pointers.delete(e.pointerId); sync(); } };
    window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
    window.addEventListener('blur', () => { this.pointers.clear(); sync(); });
    pad.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  show(name) {
    for (const s of SCREENS) $('screen-' + s).classList.toggle('hidden', s !== name);
    this.screen = name;
    document.body.classList.toggle('screen-on', !!name && name !== 'loading');
    // keyboard users land on the main action
    const focus = { title: '[data-mode="classic"]', tutorial: '#tut-next', results: '#res-continue', gameover: '#go-retry', victory: '#vic-next', pause: '#pause-resume' }[name];
    if (focus) { const el = document.querySelector(focus); if (el) try { el.focus({ preventScroll: true }); } catch (e) { /* old browsers */ } }
  }
  hideScreens() { this.show(null); }
  hideIntro() {
    clearTimeout(this.leaveTimer);
    for (const id of ['screen-intro', 'screen-final']) $(id).classList.add('hidden'), $(id).classList.remove('leaving');
  }
  /** Round bumpers stay up for the whole (game-time) intro, then slide away when the music starts. */
  leaveIntro() {
    const els = ['screen-intro', 'screen-final'].map($).filter((e) => !e.classList.contains('hidden') && !e.classList.contains('leaving'));
    if (!els.length) return;
    for (const e of els) e.classList.add('leaving');
    clearTimeout(this.leaveTimer); this.leaveTimer = setTimeout(() => this.hideIntro(), 450);
  }
  setHud(on) {
    $('hud').classList.toggle('hidden', !on);
    $('touch').classList.toggle('hidden', !(on && this.isTouch));
  }
  setToggle(kind, on) {
    if (kind === 'voice' || kind === 'music') {
      const b = $(kind === 'voice' ? 'btn-voice' : 'btn-music');
      b.textContent = (kind === 'voice' ? 'DJ VOICE: ' : 'MUSIC: ') + (on ? 'ON' : 'OFF');
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    if (kind === 'mute') { $('btn-mute').classList.toggle('muted', on); $('btn-mute').setAttribute('aria-label', on ? 'Unmute' : 'Mute'); }
  }

  // ---------------------------------------------------------------- tutorial
  showTutorial(then) {
    this.tutThen = then; this.tutPage = 0; this.show('tutorial'); this.renderTut();
  }
  tutStep(d) {
    this.tutPage += d;
    if (this.tutPage < 0) { this.tutPage = 0; if (!this.tutThen) this.show('title'); return; }
    if (this.tutPage >= TUTORIAL.length) {
      try { localStorage.setItem('pp_tutorial', '1'); } catch (e) { /* private mode */ }
      const then = this.tutThen; this.tutThen = null;
      if (then) then(); else this.show('title');
      return;
    }
    this.renderTut();
  }
  renderTut() {
    const [t, body] = TUTORIAL[this.tutPage];
    $('tut-title').textContent = t; $('tut-body').innerHTML = body;
    $('tut-step').textContent = this.tutPage + 1;
    $('tut-dots').innerHTML = TUTORIAL.map((_, i) => `<i class="${i === this.tutPage ? 'on' : ''}"></i>`).join('');
    $('tut-next').textContent = this.tutPage === TUTORIAL.length - 1 ? (this.tutThen ? "LET'S PARK!" : 'GOT IT') : 'NEXT';
    $('tut-prev').textContent = this.tutPage === 0 && !this.tutThen ? 'CLOSE' : 'BACK';
  }
  seenTutorial() { try { return localStorage.getItem('pp_tutorial') === '1'; } catch (e) { return false; } }

  // ---------------------------------------------------------------- high scores
  loadScores() { try { return JSON.parse(localStorage.getItem('pp_scores') || '{}'); } catch (e) { return {}; } }
  addScore(mode, score, won) {
    if (score <= 0) return false;
    const list = this.scores[mode] ||= [];
    const entry = { score, won, date: new Date().toISOString().slice(0, 10) };
    list.push(entry); list.sort((a, b) => b.score - a.score); list.length = Math.min(list.length, 5);
    try { localStorage.setItem('pp_scores', JSON.stringify(this.scores)); } catch (e) { /* ignore */ }
    this.renderScores();
    return list[0] === entry;
  }
  renderScores() {
    const names = { classic: 'MUSICAL CHAIRS', rush: 'RUSH HOUR', champ: 'CHAMPIONSHIP' };
    const html = Object.keys(names).filter((k) => this.scores[k] && this.scores[k].length)
      .map((k) => `<div><b>BEST · ${names[k]}</b>${this.scores[k].slice(0, 3).map((s) => `${s.won ? '🏆 ' : ''}${s.score}`).join(' &nbsp;·&nbsp; ')}</div>`).join('');
    $('highscores').innerHTML = html;
  }

  // ---------------------------------------------------------------- notifications
  subtitle(text) {
    this.subText = text;
    $('dj-panel').classList.toggle('quiet', !text);
    if (text) $('dj-text').textContent = text;
  }
  /** One toast at a time: same text refreshes (×2, ×3…), a lower-priority one never replaces a live higher one. */
  toast(text, kind = 'info') {
    if (!text) return;
    const now = performance.now(), prio = kind === 'info' ? 1 : 2, cur = this.curToast;
    if (now < (this.quietUntil || 0) && prio < 3) return;
    const live = cur && now < cur.until;
    if (live && cur.text === text) { cur.n++; cur.until = now + 1700; cur.el.textContent = `${text}  ×${cur.n}`; return; }
    if (live && prio < cur.prio) return;
    const box = $('toasts'); box.textContent = '';
    const el = document.createElement('div');
    el.className = 'toast ' + kind; el.textContent = text; box.appendChild(el);
    this.curToast = { text, prio, el, n: 1, until: now + 1700 };
    clearTimeout(this.toastTimer); this.toastTimer = setTimeout(() => { box.textContent = ''; this.curToast = null; }, 1900);
  }
  /** Clears transient overlays at round transitions. */
  clearTransient() {
    $('toasts').textContent = ''; this.curToast = null;
    $('flash').className = ''; $('stopfx').classList.remove('go'); document.body.classList.remove('quake');
    this.replay(false);
  }
  flash(text, sub = '', cls = '') {
    const f = $('flash');
    f.className = ''; void f.offsetWidth;
    f.innerHTML = esc(text) + (sub ? `<small>${esc(sub)}</small>` : '');
    f.className = 'show ' + cls;
  }
  /** The music has stopped: the loudest moment in the show. */
  musicStop(d) {
    this.flash('PARK!', `${d.bays} SPACE${d.bays === 1 ? '' : 'S'}\u2002·\u2002${d.cars} CARS`, 'big');
    this.quietUntil = performance.now() + 900; $('toasts').textContent = ''; this.curToast = null;
    const fx = $('stopfx');
    fx.classList.remove('go'); void fx.offsetWidth; fx.classList.add('go');
    if (!reducedMotion()) { document.body.classList.remove('quake'); void document.body.offsetWidth; document.body.classList.add('quake'); }
    if (navigator.vibrate && this.isTouch) try { navigator.vibrate([90, 60, 160]); } catch (e) { /* not allowed */ }
  }
  roundIntro(d) {
    this.hideIntro(); this.clearTransient();
    if (d.final) { this.finalIntro(d); return; }
    $('intro-mode').textContent = `${STATION.toUpperCase()} · ${d.mode.label.toUpperCase()}`;
    $('intro-round').textContent = 'ROUND ' + d.round;
    $('intro-of').textContent = d.total ? `OF ${d.total}` : '';
    $('intro-counts').innerHTML = `<span><i>${d.cars}</i>CARS</span><span><i class="ic-p">P</i>${d.bays} SPACE${d.bays === 1 ? '' : 'S'}</span>`;
    const g = this.game, out = g ? g.competitors.filter((c) => c.outRound === d.round - 1) : [];
    $('intro-out').innerHTML = out.length ? `<span class="lbl">OUT LAST ROUND</span>` + out.slice(0, 3).map((c) => `<span><i style="background:${hex(idColour(c))}"></i> <b>${c.isPlayer ? 'YOU' : esc(c.name)}</b> · ${esc(c.title.replace('The ', ''))}</span>`).join(' ') + (out.length > 3 ? ` <span>+${out.length - 3} more</span>` : '') : '';
    $('intro-note').textContent = d.round === 1 ? 'Circulate clockwise while the music plays. Scout the coned-off bays: some open when it stops.' : out.length ? '' : 'One fewer space. Same number of egos.';
    const el = $('screen-intro');
    el.classList.remove('hidden');
    const card = el.firstElementChild; card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';

  }
  finalIntro() {
    const g = this.game;
    const alive = g ? g.competitors.filter((c) => c.alive) : [];
    const a = alive.find((c) => c.isPlayer) || alive[0], b = alive.find((c) => c !== a);
    if (a && b) {
      const st = (c) => this.tape[c.key] || { parks: 0, best: null, perfects: 0 };
      const sa = st(a), sb = st(b);
      const cmp = (x, y, lower) => (x == null || y == null || x === y ? ['', ''] : (lower ? x < y : x > y) ? ['win', ''] : ['', 'win']);
      const row = (k, va, vb, fa, fb, lower, i) => { const [ca, cb2] = cmp(va, vb, lower); return `<div class="tp-row" style="animation-delay:${2.1 + i * 0.12}s"><span class="${ca}">${fa}</span><span class="k">${k}</span><span class="${cb2}">${fb}</span></div>`; };
      const side = (c) => `<div class="tp-side ${c.isPlayer ? 'me' : ''}"><div class="tp-sw" style="background:${hex(idColour(c))}"></div><div class="tp-name">${c.isPlayer ? 'YOU' : esc(c.name.toUpperCase())}</div><div class="tp-title">${esc(c.title)}</div></div>`;
      const t = (s) => (s.best == null ? '—' : s.best.toFixed(1) + 's');
      $('tape-body').innerHTML = side(a) + '<div class="tp-vs">VS</div>' + side(b) + '<div class="tp-rows">' +
        row('POINTS', a.points, b.points, a.points, b.points, false, 0) +
        row('SPACES BAGGED', sa.parks, sb.parks, sa.parks, sb.parks, false, 1) +
        row('FASTEST PARK', sa.best, sb.best, t(sa), t(sb), true, 2) +
        row('SHOWROOM FINISHES', sa.perfects, sb.perfects, sa.perfects, sb.perfects, false, 3) +
        row('MOTOR', null, null, esc(a.carName || ''), esc(b.carName || ''), false, 4) + '</div>';
    }
    const el = $('screen-final');
    el.classList.remove('hidden');
    for (const c of el.children) { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }

  }
  replay(on) { $('replay-badge').classList.toggle('hidden', !on); }

  // ---------------------------------------------------------------- end screens
  results(d) {
    const n = d.results.length;
    const head = '<div class="lg-row lg-head" style="--i:0"><span class="lg-pos">POS</span><span></span><span>DRIVER</span><span class="lg-status">THIS ROUND</span><span class="lg-rp">RND</span><span class="lg-tot">TOTAL</span></div>';
    const rows = d.results.map((c, i) => {
      const outNow = d.out.includes(c);
      const status = c.alive
        ? (c.rating ? `<span class="badge ${c.rating.key}">${esc(c.rating.label)}</span><span class="lg-time">${c.parkTime.toFixed(1)}s</span>` : '')
        : outNow ? '<span class="badge out">NO SPACE</span>' : `<span class="badge out">OUT · R${c.outRound}</span>`;
      const rp = c.alive && c.roundPoints ? `+${c.roundPoints}` : '';
      const from = c.alive && c.roundPoints ? c.points - c.roundPoints : c.points;
      return `<div class="lg-row ${c.isPlayer ? 'me' : ''} ${!c.alive ? (outNow ? 'outnow' : 'out') : ''}" style="--i:${i + 1};--n:${n}">` +
        `<span class="lg-pos">${i + 1}</span><span class="lg-sw" style="background:${hex(idColour(c))}"></span>` +
        `<span class="lg-name"><b>${c.isPlayer ? 'YOU' : esc(c.name)}</b><small>${esc(c.title)}</small></span>` +
        `<span class="lg-status">${status}</span><span class="lg-rp">${rp}</span><span class="lg-tot" data-from="${from}" data-to="${c.points}">${from}</span>` +
        (outNow ? '<span class="lg-stamp">ELIMINATED</span>' : '') + '</div>';
    }).join('');
    $('res-table').innerHTML = head + rows;
    const names = d.out.map((c) => (c.isPlayer ? 'You' : `${c.name} (${c.title.replace('The ', '')})`)).join(', ');
    const title = $('res-title');
    title.textContent = d.result === 'victory' ? 'YOU WON THE FINAL!' : d.playerOut ? 'NO SPACE FOR YOU' : d.final ? 'THE FINAL' : `YOU'RE SAFE`;
    title.className = d.result === 'victory' ? 'gold' : d.playerOut ? 'bad' : 'good';
    $('res-round').textContent = d.final ? 'THE FINAL' : `ROUND ${d.round} RESULTS`;
    $('res-sub').textContent = d.out.length ? `Leaving us this round: ${names}.` : 'Nobody eliminated?! The stewards are confused.';
    $('res-continue').innerHTML = (d.result === 'next' ? 'NEXT ROUND ' : 'CONTINUE ') + '<small>(Enter)</small>';
    this.show('results');
    // count the totals up once the rows have landed
    const els = [...$('res-table').querySelectorAll('.lg-tot[data-to]')];
    const t0 = performance.now() + 500 + n * 90;
    const step = (now) => {
      const k = Math.min(1, Math.max(0, (now - t0) / 800)), e = 1 - Math.pow(1 - k, 3);
      for (const el of els) { const a = +el.dataset.from, b = +el.dataset.to; el.textContent = Math.round(a + (b - a) * e); }
      if (k < 1 && this.screen === 'results') requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  gameover(d, quote, best) {
    const g = this.game;
    $('go-quote').textContent = `"${quote}"`;
    $('go-no').textContent = 'PCN SA' + String(Math.floor(100000 + Math.random() * 899999));
    $('go-why').textContent = `Failed to park when the music stopped (round ${d.round}).`;
    $('go-where').textContent = g && g.playerLoc ? `${g.playerLoc.edge.name}, St Albans AL1` : 'St Albans AL1';
    $('go-stats').innerHTML = `<div><b>${d.round}</b>ROUND REACHED</div><div><b>${d.score}</b>POINTS${best ? ' · NEW BEST!' : ''}</div><div><b>${d.stats.kerbs}</b>KERBS HIT</div><div><b>${d.stats.bumps}</b>BUMPS</div>`;
    this.show('gameover');
  }
  victory(d, best) {
    $('vic-title').textContent = d.champion ? 'PARKING CHAMPION OF ST ALBANS!' : d.champNext ? 'HEAT WON!' : 'CHAMPION OF THE KERB!';
    $('vic-stats').innerHTML = `<div><b>${d.score}</b>POINTS${best ? ' · NEW BEST!' : ''}</div><div><b>+${d.bonus}</b>VICTORY BONUS</div><div><b>${d.stats.perfects}</b>SHOWROOM PARKS</div><div><b>${d.stats.kerbs}</b>KERBS HIT</div>`;
    $('vic-next').textContent = d.champNext ? 'NEXT HEAT' : 'PLAY AGAIN';
    const cf = $('vic-confetti');
    cf.innerHTML = reducedMotion() ? '' : Array.from({ length: 46 }, () => {
      const c = CONFETTI[Math.floor(Math.random() * CONFETTI.length)];
      return `<i style="left:${(Math.random() * 100).toFixed(1)}%;background:${c};animation-duration:${(2.6 + Math.random() * 2.6).toFixed(2)}s;animation-delay:${(-Math.random() * 5).toFixed(2)}s;width:${6 + Math.random() * 6 | 0}px"></i>`;
    }).join('');
    this.show('victory');
  }

  // ---------------------------------------------------------------- minimap
  setupMinimap() {
    const cv = $('minimap'); this.mm = cv.getContext('2d');
    const t = this.track, W = cv.width, H = cv.height;
    let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
    for (const p of t.roadPolys[0].outer) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z); }
    const pad = 20, sc = Math.min((W - pad * 2) / (maxX - minX), (H - pad * 2) / (maxZ - minZ));
    const ox = (W - (maxX - minX) * sc) / 2 - minX * sc, oz = (H - (maxZ - minZ) * sc) / 2 - minZ * sc;
    this.mmT = (x, z) => [x * sc + ox, z * sc + oz];
    this.mmS = sc;
    // static layer: a sat-nav style map on sign blue
    const bg = document.createElement('canvas'); bg.width = W; bg.height = H;
    const g = bg.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, H); grad.addColorStop(0, '#174a98'); grad.addColorStop(1, '#0d3473');
    g.fillStyle = grad; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(255,255,255,0.06)'; g.lineWidth = 1;
    for (let x = 0; x < W; x += 28) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    for (let y = 0; y < H; y += 28) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    g.lineJoin = 'round'; g.lineCap = 'round';
    const edges = Object.values(t.edges);
    const stroke = (e, w, c) => { g.beginPath(); e.path.pts.forEach((p, i) => { const [x, y] = this.mmT(p.x, p.z); if (i) g.lineTo(x, y); else g.moveTo(x, y); }); g.strokeStyle = c; g.lineWidth = w; g.stroke(); };
    for (const e of edges) stroke(e, Math.max(7, e.width * sc) + 6, '#071a3d');
    for (const e of edges) stroke(e, Math.max(7, e.width * sc), e.circuit ? '#ffffff' : '#8ea4cc');
    // flow chevrons on the circuit
    g.fillStyle = '#1a56b0';
    for (const e of edges) {
      if (!e.circuit || e.len < 60) continue;
      for (const f of [0.3, 0.7]) { const p = e.path.at(e.len * f); const [x, y] = this.mmT(p.x, p.z); g.save(); g.translate(x, y); g.rotate(p.h); g.beginPath(); g.moveTo(5, 0); g.lineTo(-3, -3.6); g.lineTo(-3, 3.6); g.fill(); g.restore(); }
    }
    g.font = `900 14px ${SIGN_FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
    const label = (id, s, txt, dx, dy) => {
      const e = t.edges[id]; if (!e) return; const p = e.path.at(Math.min(s, e.len)); const [x, y] = this.mmT(p.x, p.z);
      g.save(); g.translate(x + dx, y + dy); let a = p.h; if (Math.cos(a) < 0) a += Math.PI; g.rotate(a);
      g.lineWidth = 4; g.strokeStyle = '#071a3d'; g.strokeText(txt, 0, 0); g.fillStyle = '#ffd21f'; g.fillText(txt, 0, 0); g.restore();
    };
    label('dalton', 130, 'DALTON ST', -17, 4); label('grangeBC', 60, 'GRANGE ST', 15, -13); label('church', 100, 'CHURCH ST', 4, 23); label('bernard', 110, 'BERNARD ST', 18, 6);
    this.mmBg = bg;
  }
  drawMinimap(game, t) {
    const g = this.mm, W = g.canvas.width, H = g.canvas.height;
    g.clearRect(0, 0, W, H); g.drawImage(this.mmBg, 0, 0);
    const pulse = 0.5 + 0.5 * Math.sin(t * 8);
    const best = game.lastPick && game.lastPick.duel ? game.lastPick.duel.bay : null;
    const sq = (x, y, r, fill, line = '#071a3d') => { g.beginPath(); g.roundRect(x - r, y - r, r * 2, r * 2, r * 0.35); g.fillStyle = fill; g.fill(); g.lineWidth = 2.5; g.strokeStyle = line; g.stroke(); };
    g.textAlign = 'center'; g.textBaseline = 'middle';
    for (const b of game.bays) {
      if (b.state === 'closed') continue;
      const [x, y] = this.mmT(b.x, b.z);
      if (b.state === 'coned') {
        if (game.phase === 'park') { g.beginPath(); g.arc(x, y, 3, 0, 7); g.fillStyle = '#5d6f93'; g.fill(); continue; }
        // gameplay's "tell": cones that are about to come off wobble and warm up slightly (a hint, not a giveaway)
        const tell = game.phase === 'music' ? Math.min(1, Math.max(0, b.tell || 0)) : 0;
        g.save(); g.translate(x, y);
        if (tell > 0) { g.rotate(Math.sin(t * 11 + b.id) * 0.32 * tell); g.scale(1 + 0.18 * tell * (0.5 + 0.5 * Math.sin(t * 7)), 1 + 0.18 * tell * (0.5 + 0.5 * Math.sin(t * 7))); }
        g.beginPath(); g.moveTo(0, -7); g.lineTo(6, 5); g.lineTo(-6, 5); g.closePath();
        g.fillStyle = tell > 0.05 ? `rgb(255,${Math.round(122 + 80 * tell)},${Math.round(26 + 20 * tell)})` : '#ff7a1a'; g.fill(); g.lineWidth = 2; g.strokeStyle = '#071a3d'; g.stroke();
        g.restore();
        continue;
      }
      if (b.state === 'open') {
        if (b.occupant) { sq(x, y, 6, '#7d8aa3'); continue; }
        const r = 8 + pulse * 2;
        if (best === b && !game.playerComp.parked) {
          g.beginPath(); g.arc(x, y, r + 8 + pulse * 3, 0, 7); g.strokeStyle = '#ffd21f'; g.lineWidth = 4; g.stroke();
        }
        sq(x, y, r, b.perfect ? '#f5c542' : '#1fbf5b', '#ffffff');
        g.fillStyle = b.perfect ? '#071a3d' : '#fff'; g.font = `900 ${Math.round(r * 1.4)}px ${SIGN_FONT}`; g.fillText('P', x, y + 1.5);
      } else if (b.state === 'permit') { sq(x, y, 7, '#d7142f', '#fff'); g.fillStyle = '#fff'; g.fillRect(x - 4, y - 1.2, 8, 2.4); }
      else if (b.state === 'blocked') sq(x, y, 7, '#ff9f1c', '#fff');
    }
    if (game.fakeTip && game.phase === 'park') { const [x, y] = this.mmT(game.fakeTip.x, game.fakeTip.z); g.fillStyle = pulse > 0.5 ? '#ff7ad9' : '#fff'; g.font = `900 20px ${SIGN_FONT}`; g.fillText('?', x, y + 1); }
    for (const c of game.world.cars) {
      if (c.ghost || c.isPlayer) continue;
      const [x, y] = this.mmT(c.x, c.z);
      const rc = this.rivalCars && this.rivalCars.get(c);
      if (rc == null) { g.beginPath(); g.arc(x, y, c.type === 'lorry' ? 6 : 3.8, 0, 7); g.fillStyle = '#9fb0cf'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = '#071a3d'; g.stroke(); continue; }
      g.beginPath(); g.arc(x, y, 7, 0, 7); g.fillStyle = hex(rc); g.fill(); g.lineWidth = 2.5; g.strokeStyle = '#fff'; g.stroke();
    }
    const pc = game.player.car;
    if (!pc.ghost) {
      const [x, y] = this.mmT(pc.x, pc.z);
      g.save(); g.translate(x, y); g.rotate(pc.h);
      g.beginPath(); g.arc(0, 0, 15, 0, 7); g.fillStyle = 'rgba(255,210,31,0.25)'; g.fill();
      g.beginPath(); g.moveTo(13, 0); g.lineTo(-8, -9); g.lineTo(-3, 0); g.lineTo(-8, 9); g.closePath();
      g.fillStyle = '#ffd21f'; g.fill(); g.lineWidth = 3; g.strokeStyle = '#071a3d'; g.stroke(); g.restore();
    }
  }

  // ---------------------------------------------------------------- per-frame HUD
  setRivals(game) {
    this.game = game; this.tape = {}; this.cache = {}; this.lastCount = null;
    this.rivalCars = new Map(game.competitors.filter((c) => !c.isPlayer).map((c) => [c.car, idColour(c)]));
    $('rivals').innerHTML = game.competitors.map((c, i) => `<div class="chip ${c.isPlayer ? 'me' : ''}" id="chip${i}" style="--c:${hex(idColour(c))}"><b>${c.isPlayer ? 'YOU' : esc(c.name)}</b><em>${c.isPlayer ? '' : esc(c.title.replace('The ', ''))}</em><span class="st"></span></div>`).join('');
  }
  set(id, prop, v) {
    const k = id + prop;
    if (this.cache[k] === v) return;
    this.cache[k] = v; $(id)[prop] = v;
  }
  update(game, dt, time) {
    if (this.game !== game) this.game = game;
    const pc = game.player.car, ph = game.phase, free = ph === 'free';
    if (ph !== 'intro') this.leaveIntro();
    const pk = ph === 'park' && !(game.playerComp && game.playerComp.parked);
    if (pk !== this.pk) { this.pk = pk; $('hud').classList.toggle('pk', pk); }
    const mph = Math.round(Math.abs(pc.v) * 2.237);
    this.set('mph', 'textContent', mph); $('mph').classList.toggle('over', mph > 24);
    this.set('gear', 'textContent', pc.parked ? 'P' : pc.v < -0.3 ? 'R' : pc.stalled > 0 ? '!' : 'D');
    if (game.playerLoc) this.set('street', 'textContent', game.playerLoc.edge.name);
    if (game.score !== this.lastScore) {
      const sb = $('score-box');
      if (this.lastScore !== null) { sb.classList.remove('bump'); void sb.offsetWidth; sb.classList.add('bump'); }
      this.lastScore = game.score; $('score').textContent = game.score;
    }
    // round box
    this.set('round-label', 'textContent', free ? 'FREE DRIVE' : game.final ? 'THE FINAL' : `ROUND ${game.round}/${game.totalRounds}`);
    $('round-box').classList.toggle('final', !!game.final && !free);
    const nFree = ph === 'park' ? game.freeBays().length : (game.nBays ?? 0);
    this.set('counts', 'innerHTML', free ? '<span>NO PRESSURE · PRACTISE</span>'
      : `<span><i class="ic-car">${game.alive().length}</i>CARS</span><span><i class="ic-p">P</i>${nFree} ${ph === 'park' ? 'FREE' : nFree === 1 ? 'SPACE' : 'SPACES'}</span>`);
    // phase banner + countdown roundel
    const parked = game.playerComp && game.playerComp.parked;
    let cls = '', label = '', cdCls = 'off', count = '';
    if (ph === 'intro') { cls = 'intro'; label = game.final ? 'THE FINAL\u2002·\u2002GET READY' : 'GET READY…'; }
    else if (ph === 'music') { cls = 'music'; label = '♪ MUSIC PLAYING\u2002·\u2002KEEP MOVING ♪'; cdCls = 'music'; }
    else if (ph === 'park') {
      count = Math.max(0, Math.ceil(game.timeLeft));
      if (parked) { cls = 'safe'; label = "YOU'RE IN! WATCHING THE CARNAGE…"; cdCls = 'safe'; }
      else {
        cls = 'park'; label = pc.stalled > 0 ? 'ENGINE CUT! LOITERING PENALTY' : 'PARK! PARK! PARK!';
        cdCls = count <= 3 ? 'crit c3' : count <= 5 ? 'crit' : count <= 10 ? 'urgent' : '';
      }
    } else if (free) { cls = 'free'; label = 'FREE DRIVE\u2002·\u2002PARK IN ANY GREEN BAY'; }
    else if (ph === 'roundEnd') label = 'TIME!';
    if (game.final && !free) cls += ' final';
    this.set('phase-banner', 'className', cls);
    this.set('phase-text', 'textContent', label);
    $('phase-text').style.display = label ? '' : 'none';
    this.set('countdown', 'className', cdCls);
    if (count !== this.lastCount) {
      const n = $('cd-num'); n.textContent = count;
      if (count !== '' && count <= 10 && !parked) { n.classList.remove('tick'); void n.offsetWidth; n.classList.add('tick'); }
      this.lastCount = count;
    }
    const crit = ph === 'park' && !parked && count !== '' && count <= 5;
    this.set('vignette', 'className', crit ? (count <= 3 ? 'on c3' : 'on') : game.final && (ph === 'music' || ph === 'park') ? 'final' : '');
    const lo = $('loiter'); lo.classList.toggle('on', ph === 'music' && game.loiter > 0.15);
    lo.querySelector('i').style.width = Math.round((game.loiter || 0) * 100) + '%';
    // rival chips + tale-of-the-tape bookkeeping
    game.competitors.forEach((c, i) => {
      const el = $('chip' + i); if (el) { el.classList.toggle('out', !c.alive); el.classList.toggle('parked', c.alive && c.parked); }
      if (c.parked && c.rating && c.parkTime != null) {
        const s = this.tape[c.key] ||= { parks: 0, best: null, perfects: 0, round: 0 };
        if (s.round !== game.round) { s.round = game.round; s.parks++; if (c.rating.key === 'perfect') s.perfects++; if (s.best == null || c.parkTime < s.best) s.best = c.parkTime; }
      }
    });
    // parking assist
    const gd = (ph === 'park' || free) && game.guide && !parked ? game.guide : null;
    const panel = $('guide');
    panel.classList.toggle('hidden', !gd);
    if (gd) {
      const ev = gd.ev, row = (id, ok, on = true) => { const r = $(id); r.className = 'g-row ' + (!on ? '' : ok ? 'ok' : 'no'); };
      const legal = gd.state === 'open' && !gd.taken;
      row('g-in', ev.inBay && ev.issue !== 'ends');
      row('g-angle', ev.angle < 0.36, ev.inBay);
      row('g-kerb', ev.overhang <= 0.75, ev.inBay);
      row('g-stop', Math.abs(pc.v) < 0.18, ev.inBay);
      let msg = '';
      if (gd.state === 'permit') msg = 'PERMIT HOLDERS ONLY!';
      else if (gd.state === 'blocked') msg = 'VAN IN THE WAY';
      else if (gd.taken) msg = 'TAKEN!';
      else if (!ev.inBay) msg = 'GET IN THE BAY';
      else if (ev.issue === 'angle') msg = 'STRAIGHTEN UP!';
      else if (ev.issue === 'overhang') msg = 'TUCK IN TO THE KERB!';
      else if (ev.issue === 'ends') msg = 'TOO FAR ' + (ev.along > 0 !== ev.reversed ? 'FORWARD' : 'BACK') + '!';
      else if (Math.abs(pc.v) >= 0.18) msg = 'NOW STOP! (SPACE)';
      else msg = 'HOLD IT…';
      this.set('guide-msg', 'textContent', msg);
      panel.classList.toggle('bad', !legal || !!ev.issue || !ev.inBay);
    }
    this.updateTarget(game, time);
    this.drawMinimap(game, time);
  }

  /** True if a screen-space box overlaps the countdown/navigator column, the minimap or the left HUD (rects cached ~0.5 s). */
  overlapsHud(x0, y0, x1, y1) {
    const now = performance.now();
    if (!this.hudRects || now - this.hudRectsT > 500) { this.hudRectsT = now; this.hudRects = ['phase-banner', 'hud-right', 'hud-left'].map((id) => $(id).getBoundingClientRect()).filter((r) => r.width > 0); }
    return this.hudRects.some((r) => x1 > r.left - 6 && x0 < r.right + 6 && y1 > r.top - 6 && y0 < r.bottom + 6);
  }
  /** Points the player at the ringed bay. A fixed navigator badge sits in the top-centre column under the countdown
   *  (it never wanders into other HUD); within 25 m, where the world's big P billboard is hidden, a small P pin also
   *  marks the bay itself unless it would land on HUD. */
  updateTarget(game, time) {
    const pin = $('target'), nav = $('tg-nav'), pc = game.player.car;
    const bay = game.phase === 'park' && !game.playerComp.parked && game.lastPick && game.lastPick.duel ? game.lastPick.duel.bay : null;
    const cam = window.__pp && window.__pp.camera;
    const dist = bay ? Math.hypot(bay.x - pc.x, bay.z - pc.z) : 0;
    const showNav = !!(bay && cam && bay.state === 'open' && !bay.occupant && dist >= 6);
    if (showNav !== this.navOn) { this.navOn = showNav; nav.classList.toggle('hidden', !showNav); }
    if (!showNav) { if (!this.targetHidden) { pin.classList.add('hidden'); this.targetHidden = true; } return; }
    const W = window.innerWidth, H = window.innerHeight;
    const me = cam.matrixWorldInverse.elements, pe = cam.projectionMatrix.elements;
    const x = bay.x, y = 1.2, z = bay.z;
    const vx = me[0] * x + me[4] * y + me[8] * z + me[12], vy = me[1] * x + me[5] * y + me[9] * z + me[13], vz = me[2] * x + me[6] * y + me[10] * z + me[14];
    const cx = pe[0] * vx + pe[4] * vy + pe[8] * vz + pe[12], cy = pe[1] * vx + pe[5] * vy + pe[9] * vz + pe[13], cw = pe[3] * vx + pe[7] * vy + pe[11] * vz + pe[15];
    let sx = 0, sy = 0, onScreen = false;
    if (cw > 0.1) { sx = (cx / cw * 0.5 + 0.5) * W; sy = (0.5 - cy / cw * 0.5) * H; onScreen = sx > 20 && sx < W - 20 && sy > 60 && sy < H - 20; }
    // navigator arrow: bearing of the bay relative to the view (up = straight ahead, down = behind you)
    let dx, dy;
    if (cw > 0.1) { dx = sx - W / 2; dy = sy - H * 0.62; } else { dx = vx; dy = Math.max(Math.abs(vx) * 0.3, -vy, 1); }
    const ang = Math.round(Math.atan2(dy, dx) * 180 / Math.PI + 90);
    if (ang !== this.navAng) { this.navAng = ang; nav.firstElementChild.firstElementChild.style.transform = `rotate(${ang}deg)`; }
    const txt = `${Math.round(dist)} m · ${bay.street.replace(' Street', ' St').toUpperCase()}`;
    if (this.cache.tgTxt !== txt) { this.cache.tgTxt = txt; $('tg-dist').textContent = txt; }
    // the bay pin: close range only, and never on top of HUD
    if (!this.avoid || time - this.avoidT > 0.5) { this.avoidT = time; this.avoid = ['hud-left', 'hud-right', 'phase-banner', 'dj-panel', 'guide', 'speedo'].map((id) => $(id).getBoundingClientRect()).filter((r) => r.width > 0); }
    let showPin = onScreen && dist < 25;
    if (showPin) showPin = !this.avoid.some((r) => sx + 26 > r.left && sx - 26 < r.right && sy > r.top && sy - 66 < r.bottom);
    if (this.targetHidden !== !showPin) { pin.classList.toggle('hidden', !showPin); this.targetHidden = !showPin; }
    if (showPin) pin.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
  }

}

export function personaFor(key) { return PERSONAS[key]; }
