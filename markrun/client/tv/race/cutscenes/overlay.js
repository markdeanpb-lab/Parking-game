// DOM overlay for cutscenes: the DRAMATISATION stamp, intro/outro banners, <= 4-word captions, the LIVE RACE PAUSED chip,
// the picture-in-picture frame, rubber stamps ("BACK ON COURSE"), a camera flash and photo prints. Owned by the cutscene player.
const CSS = `
.mrc{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:3;font-family:var(--font-display,"Lilita One","Arial Black",Impact,sans-serif);color:#fff;
  --ink:#14183c;--u:calc(min(1vw,1.78vh));--sk:-8deg;--usk:8deg;--ease:cubic-bezier(.2,.8,.2,1)}
.mrc *{box-sizing:border-box}
.mrc-stamp{position:absolute;right:calc(var(--u)*2.4);top:calc(var(--u)*17);display:flex;align-items:center;gap:calc(var(--u)*.5);padding:calc(var(--u)*.35) calc(var(--u)*1.1) calc(var(--u)*.35) calc(var(--u)*.6);
  border:calc(var(--u)*.32) solid #e8333f;border-radius:calc(var(--u)*.8);color:#e8333f;background:rgba(255,250,240,.88);transform:rotate(-6deg) scale(.6);opacity:0;
  transition:opacity .25s var(--ease),transform .25s var(--ease);font-size:calc(var(--u)*1.25);letter-spacing:.08em;box-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.25)}
.mrc-stamp.on{opacity:1;transform:rotate(-6deg) scale(1)}
.mrc-stamp svg{width:calc(var(--u)*2.3);height:calc(var(--u)*2.3);flex:none}
.mrc-stamp.pip{top:auto}
.mrc-banner{position:absolute;left:50%;top:15%;transform:translate(-50%,-50%) scale(0) rotate(-4deg);transition:transform .22s var(--ease);white-space:nowrap}
.mrc-banner.on{transform:translate(-50%,-50%) scale(1) rotate(-4deg)}
.mrc-banner b{display:inline-block;font-weight:400;font-size:calc(var(--u)*4.6);padding:calc(var(--u)*.25) calc(var(--u)*2.2);background:var(--bg,#ff3d8b);border:calc(var(--u)*.45) solid var(--ink);
  border-radius:calc(var(--u)*1.2);transform:skewX(var(--sk));box-shadow:0 calc(var(--u)*.7) 0 var(--ink);-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill}
.mrc-banner b span{display:inline-block;transform:skewX(var(--usk))}
.mrc-cap{position:absolute;left:50%;bottom:23%;transform:translate(-50%,40%) scale(.85);opacity:0;transition:opacity .2s var(--ease),transform .2s var(--ease);width:max-content;max-width:86%;text-align:center;line-height:1.05;
  font-size:calc(var(--u)*3.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.42) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mrc-cap.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mrc-cap.y{color:#ffd23f}
.mrc-chip{position:absolute;left:50%;top:calc(var(--u)*1.6);transform:translateX(-50%) skewX(var(--sk));background:var(--ink);border:calc(var(--u)*.22) solid #fff;border-radius:calc(var(--u)*.7);
  padding:calc(var(--u)*.2) calc(var(--u)*1.2);font-size:calc(var(--u)*1.35);opacity:0;transition:opacity .2s;display:flex;gap:calc(var(--u)*.6);align-items:center;white-space:nowrap}
.mrc-chip.on{opacity:1}
.mrc-chip i{display:inline-block;width:calc(var(--u)*.45);height:calc(var(--u)*1.2);background:#fff;box-shadow:calc(var(--u)*.7) 0 0 #fff;margin-right:calc(var(--u)*.6)}
.mrc-pip{position:absolute;right:calc(var(--u)*2.4);top:calc(var(--u)*17.5);width:calc(var(--u)*34);height:calc(var(--u)*19.125);border:calc(var(--u)*.5) solid var(--ink);border-radius:calc(var(--u)*1);
  box-shadow:0 calc(var(--u)*.7) 0 var(--ink),inset 0 0 0 calc(var(--u)*.25) #fff;opacity:0;transform:scale(.6);transform-origin:100% 0;transition:opacity .2s var(--ease),transform .25s var(--ease)}
.mrc-pip.on{opacity:1;transform:scale(1)}
.mrc-pip .mrc-pl{position:absolute;left:calc(var(--u)*-.6);top:calc(var(--u)*-1.6);background:#ff3d8b;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.6);padding:0 calc(var(--u)*.8);
  font-size:calc(var(--u)*1.5);transform:skewX(var(--sk));white-space:nowrap}
.mrc-pip .mrc-pc{position:absolute;left:50%;bottom:calc(var(--u)*.8);transform:translateX(-50%);font-size:calc(var(--u)*2.2);white-space:nowrap;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;opacity:0;transition:opacity .2s}
.mrc-pip .mrc-pc.on{opacity:1}
.mrc-big{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%) rotate(-8deg) scale(2.4);opacity:0;white-space:nowrap;font-size:calc(var(--u)*6.2);color:var(--c,#2ec27e);
  border:calc(var(--u)*.7) solid currentColor;border-radius:calc(var(--u)*1.4);padding:calc(var(--u)*.2) calc(var(--u)*2);background:rgba(255,255,255,.88);transition:transform .18s cubic-bezier(.3,1.6,.5,1),opacity .12s}
.mrc-big.on{opacity:1;transform:translate(-50%,-50%) rotate(-8deg) scale(1)}
.mrc-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mrc-tint{position:absolute;inset:0;opacity:0;transition:opacity .15s;background:radial-gradient(circle,rgba(0,0,0,.18) 1.2px,transparent 1.6px) 0 0/7px 7px,radial-gradient(ellipse at center,rgba(0,0,0,0) 40%,rgba(20,10,40,.45) 100%)}
.mrc-tint.on{opacity:1}
.mrc-prints{position:absolute;inset:0}
.mrc-print{position:absolute;left:50%;top:44%;width:calc(var(--u)*46);padding:calc(var(--u)*1.1) calc(var(--u)*1.1) calc(var(--u)*4.2);background:#fffdf6;border-radius:calc(var(--u)*.4);
  box-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.45);transform:translate(-50%,-50%) translateY(120vh) rotate(8deg);transition:transform .45s var(--ease)}
.mrc-print.on{transform:translate(-50%,-50%) rotate(var(--r,-3deg))}
.mrc-print.off{transform:translate(-50%,-50%) translateX(-120vw) rotate(-14deg)}
.mrc-print canvas{display:block;width:100%;height:auto;border-radius:calc(var(--u)*.2)}
.mrc-print .mrc-pt{position:absolute;left:0;right:0;bottom:calc(var(--u)*.9);text-align:center;color:var(--ink);font-size:calc(var(--u)*2.4)}
`;

const GOOSE_SVG = '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M27 4c3 0 5 2 5 5l6 2-6 2c-1 2-3 3-4 4-2 3-1 6 2 9 3 4 2 10-4 12-6 2-16 1-20-4-3-4 0-8 4-8 4 1 7 1 9-1 2-3 1-6 1-10 0-6 3-11 7-11z"/><circle cx="28" cy="8" r="1.6" fill="#fffaf0"/></svg>';

export function createOverlay(container, hudRoot) {
  let style = document.getElementById('mrc-style');
  if (!style) { style = document.createElement('style'); style.id = 'mrc-style'; style.textContent = CSS; document.head.appendChild(style); }
  const root = document.createElement('div');
  root.className = 'mrc';
  root.innerHTML = `<div class="mrc-tint"></div><div class="mrc-prints"></div><div class="mrc-pip"><span class="mrc-pl">MEANWHILE…</span><span class="mrc-pc"></span></div>
    <div class="mrc-chip"><i></i>LIVE RACE PAUSED</div><div class="mrc-banner"><b><span></span></b></div><div class="mrc-cap"></div><div class="mrc-big"></div>
    <div class="mrc-stamp">${GOOSE_SVG}<span>DRAMATISATION</span></div><div class="mrc-flash"></div>`;
  container.appendChild(root);
  const $ = (s) => root.querySelector(s);
  const el = { tint: $('.mrc-tint'), pip: $('.mrc-pip'), pipLabel: $('.mrc-pl'), pipCap: $('.mrc-pc'), chip: $('.mrc-chip'), banner: $('.mrc-banner'), bannerText: $('.mrc-banner span'),
    bannerBox: $('.mrc-banner b'), cap: $('.mrc-cap'), big: $('.mrc-big'), stamp: $('.mrc-stamp'), flash: $('.mrc-flash'), prints: $('.mrc-prints') };
  const timers = new Set();
  const later = (ms, fn) => { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; };
  let capText = null, bigText = null, bannerText = null, flashT = 0;

  const api = {
    root,
    stamp(on, { pip = null } = {}) {
      el.stamp.classList.toggle('on', !!on);
      // only the inset is a dramatisation: the stamp hangs just under the picture-in-picture box
      if (pip && on) { const w = container.clientWidth || 1920; el.stamp.style.top = `${pip.y + pip.h + 8}px`; el.stamp.style.right = `${w - pip.x - pip.w - 6}px`; }
      else { el.stamp.style.top = ''; el.stamp.style.right = ''; }
    },
    banner(text, colour = '#ff3d8b') {
      if (!text) { el.banner.classList.remove('on'); bannerText = null; return; }
      if (text !== bannerText) { el.bannerText.textContent = text; el.bannerBox.style.setProperty('--bg', colour); }
      bannerText = text; el.banner.classList.add('on');
    },
    caption(text, { yellow = false } = {}) {
      if (!text) { el.cap.classList.remove('on'); capText = null; return; }
      if (text !== capText) { el.cap.textContent = text; el.cap.classList.toggle('y', !!yellow); }
      capText = text; el.cap.classList.add('on');
    },
    paused(on) { el.chip.classList.toggle('on', !!on); hudRoot?.classList.toggle('mrc-paused', !!on); },
    // any cutscene on screen: the HUD's closing-gap chip (which sits where the inset goes) steps aside
    cut(on) { hudRoot?.classList.toggle('mrc-cut', !!on); document.body.classList.toggle('mrc-active', !!on); },
    tint(on) { el.tint.classList.toggle('on', !!on); },
    pip(rect, { label = 'MEANWHILE…', caption = null } = {}) {
      if (!rect) { el.pip.classList.remove('on'); el.pipCap.classList.remove('on'); return; }
      el.pip.style.left = `${rect.x}px`; el.pip.style.top = `${rect.y}px`; el.pip.style.width = `${rect.w}px`; el.pip.style.height = `${rect.h}px`; el.pip.style.right = 'auto';
      if (el.pipLabel.textContent !== label) el.pipLabel.textContent = label;
      if (caption) { if (el.pipCap.textContent !== caption) el.pipCap.textContent = caption; el.pipCap.classList.add('on'); } else el.pipCap.classList.remove('on');
      el.pip.classList.add('on');
    },
    // PiP rectangle in CSS pixels of the container (right side, under the course map)
    pipRect() {
      const w = container.clientWidth || 1920, h = container.clientHeight || 1080; const u = Math.min(w / 100, h * 1.78 / 100);
      const pw = Math.round(u * 38), ph = Math.round(pw * 9 / 16);
      return { x: Math.round(w - u * 2.4 - pw), y: Math.round(u * 17.5), w: pw, h: ph };
    },
    big(text, colour = '#2ec27e') {
      if (!text) { el.big.classList.remove('on'); bigText = null; return; }
      if (text !== bigText) { el.big.textContent = text; el.big.style.setProperty('--c', colour); el.big.classList.remove('on'); void el.big.offsetWidth; }
      bigText = text; el.big.classList.add('on');
    },
    flash(strength = 1) { flashT = strength; el.flash.style.transition = 'none'; el.flash.style.opacity = String(strength); void el.flash.offsetWidth; el.flash.style.transition = 'opacity .45s ease-out'; el.flash.style.opacity = '0'; },
    // a photo print: a canvas (already drawn) on a white card with a title; returns { show(), hide(), remove() }
    print(canvas, title, rot = -3) {
      const card = document.createElement('div'); card.className = 'mrc-print'; card.style.setProperty('--r', `${rot}deg`);
      card.appendChild(canvas);
      const t = document.createElement('div'); t.className = 'mrc-pt'; t.textContent = title; card.appendChild(t);
      el.prints.appendChild(card);
      return { el: card, show() { void card.offsetWidth; card.classList.add('on'); card.classList.remove('off'); }, hide() { card.classList.add('off'); }, remove() { card.remove(); } };
    },
    clearPrints() { el.prints.innerHTML = ''; },
    clear() {
      api.banner(null); api.caption(null); api.big(null); api.paused(false); api.cut(false); api.tint(false); api.pip(null); api.stamp(false); api.clearPrints();
      el.flash.style.opacity = '0';
    },
    later,
    dispose() { for (const t of timers) clearTimeout(t); timers.clear(); hudRoot?.classList.remove('mrc-paused'); document.body.classList.remove('mrc-active'); root.remove(); },
  };
  // greyed HUD while the race is paused (positions stay visible, per the catalogue)
  if (!document.getElementById('mrc-style2')) {
    const s2 = document.createElement('style'); s2.id = 'mrc-style2';
    s2.textContent = '.mrc-paused .mr-tower,.mrc-paused .mr-top,.mrc-paused .mr-map{filter:grayscale(1) brightness(.9);opacity:.8;transition:filter .2s,opacity .2s}.mrc-paused .mr-tags{opacity:0}.mrc-cut .mr-close,.mrc-cut .mr-banner,.mrc-cut .mr-title{opacity:0!important}' +
      // sofa legibility while a cutscene plays: one big outlined commentary plate, low, never under the caption
      'body.mrc-active #subs{bottom:14px!important}body.mrc-active #subs .sub:not(:last-child){display:none}' +
      'body.mrc-active #subs .sub{font-size:44px;padding:12px 34px 14px 18px;border-width:5px;background:rgba(20,24,60,.94);text-shadow:0 3px 0 #000;white-space:normal;max-width:1400px;text-align:center}' +
      'body.mrc-active #subs .sub .who{font-size:30px}';
    document.head.appendChild(s2);
  }
  void flashT;
  return api;
}
