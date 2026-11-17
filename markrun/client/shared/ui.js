// Small DOM + formatting helpers shared by TV and phone.
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Fictional currency: Parkpounds (shown as "pp"; the game module's ℙ symbol isn't in the display font)
export const CURRENCY = 'pp';
export function money(n) {
  const v = Math.round(Number(n) || 0);
  return `${v < 0 ? '−' : ''}${Math.abs(v).toLocaleString('en-GB')}${CURRENCY}`;
}
export function signedMoney(n) {
  const v = Math.round(Number(n) || 0);
  return `${v > 0 ? '+' : v < 0 ? '−' : '±'}${Math.abs(v).toLocaleString('en-GB')}${CURRENCY}`;
}
// for speech: "250 Parkpounds"
export function moneySay(n) {
  const v = Math.abs(Math.round(Number(n) || 0));
  return `${v.toLocaleString('en-GB')} Parkpound${v === 1 ? '' : 's'}`;
}
export const runnerShort = (r) => r?.shortName || r?.nickname || '';

export function ordinalSuffix(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return 'th';
  return { 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th';
}
export function ordinalHtml(n, cls = '') {
  return `<span class="ordinal p${n} ${cls}">${n}<sup>${ordinalSuffix(n)}</sup></span>`;
}

export function avatarHtml(avatar, size = 64, extra = '') {
  const a = avatar || { emoji: '🙂', colour: '#2f8cff' };
  return `<span class="avatar ${extra}" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.58)}px;background:${esc(a.colour)}">${esc(a.emoji)}</span>`;
}

export function fmtTime(s) {
  s = Math.round(Number(s) || 0);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Animated number counter. Returns a cancel fn.
export function countUp(node, from, to, ms = 1200, fmt = (v) => String(Math.round(v)), onTick) {
  const t0 = performance.now();
  let raf;
  let lastInt = Math.round(from);
  const step = (t) => {
    const k = Math.min(1, (t - t0) / ms);
    const e = 1 - (1 - k) ** 3;
    const v = from + (to - from) * e;
    node.textContent = fmt(v);
    const vi = Math.round(v);
    if (onTick && vi !== lastInt) { lastInt = vi; onTick(vi); }
    if (k < 1) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

export function runnerById(round, id) { return round?.runners?.find((r) => r.id === id); }

export function betLabel(round, b) {
  if (!round || !b) return '';
  if (b.type === 'win' || b.type === 'special') return `${b.type === 'special' || b.boost ? '🚀 ' : ''}${runnerById(round, b.runnerId)?.nickname || b.runnerId} to WIN`;
  if (b.type === 'inplay') return `${runnerById(round, b.runnerId)?.nickname || b.runnerId} to WIN (halfway)`;
  if (b.type === 'prop') { const pr = round.props?.find((x) => x.id === b.propId); return `${pr?.text || 'Side bet'} — ${String(b.pick).toUpperCase()}`; }
  // head-to-heads use short names so the line fits a phone
  const m = round.matchups?.find((x) => x.id === b.matchupId);
  if (!m) return 'Head-to-head';
  const pick = runnerShort(runnerById(round, b.pick)) || b.pick;
  const other = runnerShort(runnerById(round, b.pick === m.a ? m.b : m.a));
  return `${pick} to beat ${other}`;
}
export function betOdds(round, b) {
  if (b.type === 'win' || b.type === 'special') {
    const dec = runnerById(round, b.runnerId)?.odds?.win ?? 0;
    const boost = (b.type === 'special' || b.boost) && round?.underdogSpecial ? round.underdogSpecial.boost || 1.5 : 1;
    return Math.round((1 + (dec - 1) * boost) * 100) / 100;
  }
  if (b.type === 'inplay') return Number(b.odds) || 0;
  if (b.type === 'prop') { const pr = round?.props?.find((x) => x.id === b.propId); return (b.pick === 'yes' ? pr?.odds?.yes : pr?.odds?.no) ?? 0; }
  const m = round?.matchups?.find((x) => x.id === b.matchupId);
  if (!m) return 0;
  return b.pick === m.a ? m.odds.a : m.odds.b;
}

// Confetti burst (DOM, no canvas). Removes itself.
export function confetti(container = document.body, { count = 120, colours = ['#ffd23f', '#ff4d5a', '#2ec27e', '#2f8cff', '#ff6fb5', '#7b4dff'], duration = 3200, zIndex = 9000, contained = false } = {}) {
  const layer = document.createElement('div');
  layer.style.cssText = `position:${contained ? 'absolute' : 'fixed'};inset:0;pointer-events:none;overflow:hidden;z-index:${zIndex}`;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('i');
    const size = 8 + Math.random() * 12;
    const x = Math.random() * 100;
    const dx = (Math.random() - 0.5) * 30;
    const rot = Math.random() * 720 - 360;
    const delay = Math.random() * 400;
    const dur = duration * (0.6 + Math.random() * 0.5);
    p.style.cssText = `position:absolute;left:${x}%;top:-30px;width:${size}px;height:${size * (0.4 + Math.random() * 0.6)}px;background:${colours[i % colours.length]};border:2px solid #14183c;border-radius:${Math.random() < 0.3 ? '50%' : '2px'}`;
    p.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${dx}vw, 110vh) rotate(${rot}deg)`, opacity: 1 },
    ], { duration: dur, delay, easing: 'cubic-bezier(.2,.6,.4,1)', fill: 'forwards' });
    layer.appendChild(p);
  }
  container.appendChild(layer);
  setTimeout(() => layer.remove(), duration * 1.3 + 500);
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function betRunnerId(b) { return b?.type === 'prop' ? null : (b?.runnerId || b?.pick || null); }
export function betKind(b) { return b?.boost ? 'UNDERDOG SPECIAL' : ({ win: 'WIN', special: 'UNDERDOG SPECIAL', h2h: 'HEAD-TO-HEAD', prop: 'SIDE BET', inplay: 'HALFWAY' }[b?.type] || ''); }

// Clue text, styled by the game module's clue `style`: tipster clues end with a commentator's quoted opinion.
export function clueHtml(c) {
  const text = String(c?.text || '');
  if (c?.style === 'tipster') {
    const i = text.indexOf('"');
    if (i > 0) {
      const head = text.slice(0, i).trim();
      const quote = text.slice(i).replace(/^"|"$/g, '').replace(/"/g, '');
      const voice = c.voice || (/\bpam\b/i.test(head) ? 'pam' : /\bjeff\b/i.test(head) ? 'jeff' : '');
      return `<span class="cfact">${esc(head)}</span> <span class="cquote ${voice}">${voice ? `<b>${voice === 'pam' ? 'PAM' : 'JEFF'}</b>` : ''}“${esc(quote)}”</span>`;
    }
  }
  return esc(text);
}

// Odds exactly as shown when betting (fractional where the game provides it).
export function oddsText(round, b) {
  if (!b) return '';
  if ((b.type === 'win' || b.type === 'special') && !(b.type === 'special' || b.boost)) return runnerById(round, b.runnerId)?.odds?.display || `×${betOdds(round, b)}`;
  if (b.type === 'win' || b.type === 'special') return `×${betOdds(round, b)} 🚀`;
  if (b.type === 'inplay') return b.display || `×${Number(b.lockedOdds ?? b.odds) || ''}`;
  if (b.type === 'prop') { const pr = round?.props?.find((x) => x.id === b.propId); return (b.pick === 'yes' ? pr?.odds?.displayYes : pr?.odds?.displayNo) || `×${betOdds(round, b)}`; }
  const m = round?.matchups?.find((x) => x.id === b.matchupId);
  return (b.pick === m?.a ? m?.odds?.displayA : m?.odds?.displayB) || `×${betOdds(round, b)}`;
}
// Settled bet -> { kind: 'won'|'lost'|'push', net, text }: net per bet so the lines add up to the round net.
export function betOutcome(b) {
  const returned = Math.round(Number(b?.returned) || 0);
  const stake = Math.round(Number(b?.stake) || 0);
  if (b?.void || b?.push || (!b?.won && returned === stake && stake > 0)) return { kind: 'push', net: 0, text: 'refunded ±0' };
  if (b?.won) return { kind: 'won', net: returned - stake, text: signedMoney(returned - stake) };
  return { kind: 'lost', net: -stake, text: signedMoney(-stake) };
}

// Clue -> { headline (bold, short), kicker (small) }. Uses the game module's headline/kicker when present;
// otherwise the first sentence (capped at maxWords) is the headline and the rest (incl. a tipster's quote) the kicker.
export function clueParts(c, maxWords = 10) {
  if (!c) return { headline: '', kicker: '' };
  if (c.headline) return { headline: c.headline, kicker: c.kicker || '' };
  let text = String(c.text || '').trim();
  let quote = '';
  const qi = text.indexOf('"');
  if (qi > 0) { quote = text.slice(qi).replace(/"/g, '').trim(); text = text.slice(0, qi).trim(); }
  const m = text.match(/^(.+?[.!?])(\s+|$)([\s\S]*)$/);
  let head = m ? m[1] : text;
  let rest = m ? m[3].trim() : '';
  const words = head.split(/\s+/);
  if (words.length > maxWords) { rest = `…${words.slice(maxWords - 1).join(' ')}${rest ? ` ${rest}` : ''}`; head = `${words.slice(0, maxWords - 1).join(' ')}…`; }
  const kicker = [rest, quote ? `“${quote}”` : ''].filter(Boolean).join(' ');
  return { headline: head, kicker };
}
