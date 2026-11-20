// Broadcast HUD overlay (DOM over the canvas). Leaves the bottom ~15% clear for the shell's subtitles.
// Shell visual language: Lilita One display type, theme tokens (client/shared/theme.css), chunky slanted panels with ink
// outlines and drop shadows, big yellow outlined numerals.
// - Position tower (top-left): big slanted rows, runner portrait + shortName (never truncated) + the backing players'
//   avatars; top 3 + backed runners only.
// - PiP course map (top-right) during the race: every runner as a dot, backed runners ringed in the backer's colour.
// - Floating name tags above runners (positioned by index.js; never stacked, hidden in close-ups).
// - Event banners: one at a time in the lower third (above the subtitles), full colour.
import { runnerPortrait } from '../../shared/portrait.js';

const CSS = `
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:var(--font-display,"Lilita One","Arial Black",Impact,sans-serif);color:#fff;
  --ink:#14183c;--blue:var(--panel,#2a62e0);--blue2:var(--panel-deep,#173c9c);--yellow:var(--sun,#ffd23f);--pink:#ff6fb5;--tomato:#ff4d5a;--grass:#2ec27e;--u:calc(min(1vw,1.78vh));letter-spacing:.02em;
  --ease:cubic-bezier(.2,.8,.2,1);--fast:150ms;--slow:400ms;--sk:-8deg;--usk:8deg;--ol:calc(var(--u)*.3);--drop:0 calc(var(--u)*.4) 0 var(--ink);--body:var(--font-body,Nunito,"Arial Rounded MT Bold",sans-serif);
  --emo:var(--emoji,"Noto Color Emoji","Apple Color Emoji","Segoe UI Emoji",sans-serif)}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));box-shadow:var(--drop)}
.mr-panel>.mr-unskew{transform:skewX(var(--usk))}
/* lap / distance header */
.mr-top{position:absolute;left:calc(var(--u)*1.6);top:calc(var(--u)*1.3);display:flex}
.mr-pill{display:flex;align-items:center;gap:calc(var(--u)*.8);background:linear-gradient(180deg,#3d86ff,#2457c8);border:var(--ol) solid var(--ink);box-shadow:var(--drop);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk));padding:calc(var(--u)*.2) calc(var(--u)*1.2);font-size:calc(var(--u)*1.7);line-height:1.15}
.mr-pill>*{transform:skewX(var(--usk))}
.mr-pill b{font-weight:400;color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.2) var(--ink);paint-order:stroke fill}
.mr-pill .mr-sep{width:calc(var(--u)*.2);align-self:stretch;background:rgba(20,24,60,.45);border-radius:2px}
.mr-pill .mr-clk{font-family:var(--body);font-weight:900;font-size:.72em;opacity:.8}
/* position tower */
.mr-tower{position:absolute;left:calc(var(--u)*1.6);top:calc(var(--u)*4.6);width:calc(var(--u)*29)}
.mr-row{position:absolute;left:0;top:0;width:100%;height:calc(var(--u)*3.5);display:flex;align-items:center;transition:transform var(--slow) var(--ease),opacity var(--slow) var(--ease)}
.mr-row.snap{transition:opacity var(--slow) var(--ease)}
.mr-row.off{opacity:0}
.mr-row .mr-pos{width:calc(var(--u)*4.6);flex-shrink:0;font-size:calc(var(--u)*3.1);text-align:center;line-height:1}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;min-width:0;height:calc(var(--u)*3.1);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:0 calc(var(--u)*.7) 0 0;background:linear-gradient(180deg,#3d86ff,#2457c8);border:var(--ol) solid var(--ink);box-shadow:0 calc(var(--u)*.3) 0 var(--ink);border-radius:calc(var(--u)*.7);transform:skewX(var(--sk))}
.mr-row .mr-card>*{transform:skewX(var(--usk))}
.mr-row .mr-chip{width:calc(var(--u)*3.6);height:calc(100% + var(--u)*.7);margin:calc(var(--u)*-.35) 0 calc(var(--u)*-.35) calc(var(--u)*-.6);flex-shrink:0;display:flex;align-items:center;justify-content:center}
.mr-row .mr-chip svg{width:calc(var(--u)*3.6);height:calc(var(--u)*3.6);display:block;filter:drop-shadow(0 calc(var(--u)*.15) 0 var(--ink))}
.mr-row .mr-name{flex:1 0 auto;font-size:calc(var(--u)*2.05);line-height:1;white-space:nowrap;-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill}
.mr-row .mr-gap{font-family:var(--body);font-weight:900;font-size:calc(var(--u)*1.35);color:#e3ecff;white-space:nowrap}
.mr-row.lead .mr-card{background:linear-gradient(180deg,#ffe066,#ffb21f)}
.mr-row.lead .mr-name{color:#fff}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#9dffb4}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-avs{display:inline-flex;flex-shrink:0}
.mr-av{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);margin-left:calc(var(--u)*-.5);border-radius:50%;background:var(--bc);border:calc(var(--u)*.22) solid var(--ink);font-family:var(--emo);font-size:calc(var(--u)*1.45);line-height:1;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35)}
.mr-av:first-child{margin-left:0}
.mr-av.txt{font-family:var(--font-display,"Lilita One",sans-serif);font-size:calc(var(--u)*1.25);color:var(--ink)}
/* PiP course map */
.mr-map{position:absolute;right:calc(var(--u)*1.6);top:calc(var(--u)*1.3);width:calc(var(--u)*13.5);height:calc(var(--u)*16);transition:opacity var(--slow) var(--ease)}
.mr-hud.mr-nomap .mr-map{opacity:0}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.82);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.1);box-shadow:var(--drop)}
.mr-maplbl{position:absolute;left:50%;bottom:calc(var(--u)*-1.1);transform:translateX(-50%) skewX(var(--sk));background:var(--ink);padding:0 calc(var(--u)*.8);border-radius:calc(var(--u)*.5);font-size:calc(var(--u)*1.1);white-space:nowrap}
/* event banners: lower third, above the subtitles */
.mr-banner{position:absolute;left:50%;bottom:18.5%;transform:translate(-50%,0) scale(0);text-align:center;white-space:nowrap;transition:transform var(--fast) var(--ease)}
.mr-banner.on{transform:translate(-50%,0) scale(1)}
.mr-banner .mr-b1{display:inline-block;box-shadow:var(--drop);padding:calc(var(--u)*.1) calc(var(--u)*2);font-size:calc(var(--u)*3.4);line-height:1.1;background:var(--pink);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.1);transform:skewX(var(--sk)) rotate(-2deg)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(var(--usk));-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.4);font-size:calc(var(--u)*1.9);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
/* floating name tags */
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;display:flex;align-items:center;white-space:nowrap;font-size:calc(var(--u)*1.75);line-height:1;will-change:transform;transition:opacity 260ms var(--ease);transform-origin:50% 100%}
.mr-tag .mr-tp{position:relative;z-index:1;background:var(--ink);color:var(--yellow);border:calc(var(--u)*.2) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.2) calc(var(--u)*.45);font-size:calc(var(--u)*1.6);margin-right:calc(var(--u)*-.35);transform:skewX(var(--sk))}
.mr-tag .mr-tn{padding:calc(var(--u)*.22) calc(var(--u)*.75);border:calc(var(--u)*.22) solid var(--ink);border-radius:calc(var(--u)*.6);box-shadow:0 calc(var(--u)*.25) 0 var(--ink);transform:skewX(var(--sk))}
.mr-tag .mr-tn>span{display:inline-block;transform:skewX(var(--usk));-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill;color:#fff}
.mr-tag .mr-avs{margin-left:calc(var(--u)*.3)}
.mr-tag .mr-av{width:calc(var(--u)*2.2);height:calc(var(--u)*2.2);font-size:calc(var(--u)*1.25)}
.mr-tag:after{content:"";position:absolute;left:50%;bottom:calc(var(--u)*-.85);border:calc(var(--u)*.5) solid transparent;border-top-color:var(--ink);transform:translateX(-50%)}
.mr-tag.mini .mr-tn,.mr-tag.mini .mr-avs{display:none}
.mr-tag.mini .mr-tp{margin-right:0}
/* title card */
.mr-title{position:absolute;left:50%;top:9%;width:max-content;max-width:64%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:opacity var(--slow) var(--ease),transform var(--slow) var(--ease)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk))}
.mr-title .mr-t1{display:block;white-space:normal;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);line-height:1.02;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk))}
/* photo finish: full colour, lower third */
.mr-photo{position:absolute;inset:0;opacity:0;transition:opacity var(--fast) var(--ease)}
.mr-photo.on{opacity:1}
.mr-photo .mr-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mr-photo.on .mr-flash{animation:mrflash var(--slow) var(--ease)}
.mr-photo .mr-frame{position:absolute;inset:calc(var(--u)*1.2);border:calc(var(--u)*.55) solid #fff;border-radius:calc(var(--u)*.6);box-shadow:0 0 0 calc(var(--u)*.3) var(--ink),inset 0 0 0 calc(var(--u)*.3) var(--ink)}
@keyframes mrflash{0%{opacity:.95}100%{opacity:0}}
.mr-photo .mr-pbox{position:absolute;left:50%;bottom:17.5%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.5)}
.mr-photo .mr-pf{transform:skewX(var(--sk)) rotate(-2deg);background:#fff;color:var(--ink);border:var(--ol) solid var(--ink);box-shadow:var(--drop);border-radius:calc(var(--u)*.9);padding:calc(var(--u)*.1) calc(var(--u)*2.2);font-size:calc(var(--u)*3.6);white-space:nowrap}
.mr-photo .mr-pcap{transform:skewX(var(--sk));background:var(--ink);color:#fff;border:calc(var(--u)*.25) solid #fff;border-radius:calc(var(--u)*.7);padding:calc(var(--u)*.25) calc(var(--u)*1.6);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-photo .mr-pcap b{font-weight:400;color:var(--yellow)}
.mr-photo .mr-line{position:absolute;left:0;top:0;height:calc(var(--u)*.3);background:rgba(255,40,80,.95);transform-origin:0 50%;box-shadow:0 0 0 2px #fff,0 0 8px rgba(255,40,80,.8)}
.mr-photo .mr-scan{position:absolute;top:0;bottom:0;width:calc(var(--u)*.35);left:-5%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);opacity:0}
.mr-photo.scan .mr-scan{animation:mrscan 1.5s linear infinite;opacity:1}
@keyframes mrscan{0%{left:5%}100%{left:95%}}
.mr-photo.result .mr-pf{background:var(--yellow)}
/* market */
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity var(--slow) var(--ease);background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:58%;top:15%;transform:translate(-50%,-50%) skewX(var(--sk)) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.35) calc(var(--u)*1.8);font-size:calc(var(--u)*3.5);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:var(--drop);}
.mr-market .mr-m2{position:absolute;left:58%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
/* intro lower-third */
.mr-card3{position:absolute;left:calc(var(--u)*5);bottom:19%;display:flex;align-items:stretch;opacity:0;transform:translateX(-30%);transition:opacity var(--slow) var(--ease),transform var(--slow) var(--ease)}
.mr-card3.on{opacity:1;transform:none}
.mr-card3 .mr-lane{width:calc(var(--u)*8);font-size:calc(var(--u)*6.5);display:flex;align-items:center;justify-content:center;border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(var(--sk));margin-right:calc(var(--u)*-.6);z-index:1}
.mr-card3 .mr-lane span{transform:skewX(var(--usk))}
.mr-card3 .mr-info{padding:calc(var(--u)*.8) calc(var(--u)*3) calc(var(--u)*.8) calc(var(--u)*2.4)}
.mr-card3 .mr-nick{font-size:calc(var(--u)*4.4);line-height:1;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-card3 .mr-tagl{font-family:var(--body);font-weight:900;font-size:calc(var(--u)*1.55);opacity:.95;margin-top:calc(var(--u)*.4)}
.mr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(1);font-size:calc(var(--u)*16);opacity:0}
.mr-count.pop{animation:mrpop .8s var(--ease)}
@keyframes mrpop{0%{transform:translate(-50%,-50%) scale(2.2);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.8);opacity:0}}
.mr-results{position:absolute;right:calc(var(--u)*3);top:50%;transform:translate(120%,-50%);transition:transform var(--slow) var(--ease);width:calc(var(--u)*30)}
.mr-results.on{transform:translate(0,-50%)}
.mr-results .mr-rh{font-size:calc(var(--u)*3);margin-bottom:calc(var(--u)*.8);padding:calc(var(--u)*.3) calc(var(--u)*1.5);display:inline-block}
.mr-results .mr-rr{display:flex;align-items:center;gap:calc(var(--u)*.8);margin:calc(var(--u)*.5) 0;font-size:calc(var(--u)*1.8);background:rgba(20,24,60,.88);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1);transform:skewX(var(--sk))}
.mr-results .mr-rr>*{transform:skewX(var(--usk))}
.mr-results .mr-rr .mr-num{font-size:calc(var(--u)*2.6);width:calc(var(--u)*4.2)}
.mr-results .mr-rr .mr-t{margin-left:auto;font-family:var(--body);font-weight:900}
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dim .mr-tags,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map,.mr-tags{transition:opacity var(--slow) var(--ease)}
.mr-replay{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*.35) calc(var(--u)*1.2);background:var(--tomato);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*.9);box-shadow:var(--drop);transform:skewX(var(--sk)) translateX(140%);font-size:calc(var(--u)*2.2);transition:transform var(--slow) var(--ease)}
.mr-replay>*{transform:skewX(var(--usk))}
.mr-replay i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff}
.mr-hud.mr-inreplay .mr-replay{transform:skewX(var(--sk)) translateX(0)}
.mr-hud.mr-inreplay .mr-map,.mr-hud.mr-inreplay .mr-tags{opacity:0}
.mr-replayframe{position:absolute;inset:0;border:calc(var(--u)*.5) solid rgba(255,77,90,.0);transition:border-color var(--slow) var(--ease);pointer-events:none}
.mr-hud.mr-inreplay .mr-replayframe{border-color:rgba(255,77,90,.55)}
.mr-wipe{position:absolute;top:-10%;bottom:-10%;left:-60%;width:45%;background:linear-gradient(90deg,var(--blue),var(--blue2));border-left:var(--ol) solid var(--ink);border-right:var(--ol) solid var(--ink);transform:skewX(var(--sk)) translateX(0);opacity:0}
.mr-wipe.go{animation:mrwipe var(--slow) var(--ease)}
@keyframes mrwipe{0%{opacity:1;transform:skewX(var(--sk)) translateX(0)}100%{opacity:1;transform:skewX(var(--sk)) translateX(420%)}}
/* closing-gap bar (one backed duel), under the map */
.mr-close{position:absolute;right:calc(var(--u)*1.6);top:calc(var(--u)*1.3);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1.1) calc(var(--u)*.3) calc(var(--u)*.4);background:linear-gradient(180deg,#3d86ff,#2457c8);border:var(--ol) solid var(--ink);box-shadow:var(--drop);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk));font-family:var(--body);font-weight:900;font-size:calc(var(--u)*1.45);opacity:0;transition:opacity var(--slow) var(--ease),top var(--slow) var(--ease),background var(--fast) var(--ease);white-space:nowrap}
.mr-close>*{transform:skewX(var(--usk))}
.mr-close.on{opacity:1}
.mr-hud:not(.mr-nomap) .mr-close{top:calc(var(--u)*19.4)}
.mr-close .mr-cc{width:calc(var(--u)*2.2);height:calc(var(--u)*2.2);flex-shrink:0}
.mr-close .mr-cc svg{width:100%;height:100%;display:block}
.mr-close b{font-family:var(--font-display,"Lilita One",sans-serif);font-weight:400;color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.18) var(--ink);paint-order:stroke fill}
.mr-close.hot{background:linear-gradient(180deg,#ff6b74,#e8313f)}
.mr-close.hot b{color:#fff}
`;

const ord = (n) => `${n}<sup>${['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}</sup>`;
export const ordText = (n) => `${n}${['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}`;
const fmt = (s) => { s = Math.max(0, s); const m = Math.floor(s / 60), r = Math.floor(s % 60); return `${m}:${String(r).padStart(2, '0')}`; };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const textOn = (hex) => { const c = parseInt(hex.slice(1), 16); const l = ((c >> 16) & 255) * 0.299 + ((c >> 8) & 255) * 0.587 + (c & 255) * 0.114; return l > 165 ? '#1a1420' : '#ffffff'; };
let uid = 0;

// Players backing a runner: backedBy[runnerId] may hold names (strings) or { name, avatar: { emoji, colour } };
// avatars are also looked up by name in `players` ([{ name, avatar }], the shell's player list).
export function backerInfo(b, players = []) {
  const name = typeof b === 'string' ? b : (b?.name ?? '');
  const av = (typeof b === 'object' && b?.avatar) || players.find((p) => p?.name === name)?.avatar || null;
  const emoji = av?.emoji || (isEmoji(name) ? [...String(name).trim()][0] : null);
  return { name, emoji, colour: av?.colour || backerColour(name) };
}
function avatarsHtml(list, players) {
  return list.map((b) => { const i = backerInfo(b, players); return i.emoji ? `<span class="mr-av" style="--bc:${esc(i.colour)}">${esc(i.emoji)}</span>` : `<span class="mr-av txt" style="--bc:${esc(i.colour)}">${esc(initialOf(i.name))}</span>`; }).join('');
}

export function createHud(container, { runners, backedBy = {}, players = [], course, park, C }) {
  if (!document.getElementById('mr-hud-css2')) { document.getElementById('mr-hud-css')?.remove(); const st = document.createElement('style'); st.id = 'mr-hud-css2'; st.textContent = CSS; document.head.appendChild(st); }
  const root = document.createElement('div'); root.className = 'mr-hud mr-dim';
  root.innerHTML = `
    <div class="mr-top"><div class="mr-pill"><span>LAP <b data-k="lap">1</b>/2</span><span class="mr-sep"></span><span data-k="dist">0.0 KM</span><span class="mr-clk" data-k="clock">0:00</span></div></div>
    <div class="mr-tower"></div>
    <div class="mr-map"><div class="mr-mapwrap"></div><canvas></canvas></div>
    <div class="mr-tags"></div>
    <div class="mr-banner"><div class="mr-b1"><span></span></div><span class="mr-b2"></span></div>
    <div class="mr-card3"><div class="mr-lane mr-num"><span></span></div><div class="mr-panel mr-info"><div class="mr-unskew"><div class="mr-nick"></div><div class="mr-tagl"></div></div></div></div>
    <div class="mr-count mr-num"></div>
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-frame"></div><div class="mr-scan"></div><div class="mr-line"></div><div class="mr-pbox"><div class="mr-pf">PHOTO FINISH!</div><div class="mr-pcap"></div></div></div>
    <div class="mr-market"><div class="mr-m1">MARKET OPEN</div><div class="mr-m2"></div></div>
    <div class="mr-title"><div class="mr-t0"></div><span class="mr-t1"></span><div class="mr-t2"></div></div>
    <div class="mr-results"></div>
    <div class="mr-close"><span class="mr-cc"></span><span><b class="mr-cn"></b> <span class="mr-ct"></span></span></div><div class="mr-replayframe"></div><div class="mr-replay"><i></i><span>REPLAY</span></div><div class="mr-wipe"></div>`;
  container.appendChild(root);
  const q = (s) => root.querySelector(s);
  const K = {}; root.querySelectorAll('[data-k]').forEach((e) => (K[e.dataset.k] = e));
  const tower = q('.mr-tower');
  const rows = {};
  const tags = {};
  const pub = Object.fromEntries(runners.map((r) => [r.id, r]));
  const face = (r, px) => runnerPortrait(r, { size: px, idSuffix: `h${(uid++).toString(36)}` });
  // one width for every row, wide enough for the longest shortName + gap + two avatars (never truncated)
  const longest = Math.max(...runners.map((r) => shortOf(r).length));
  tower.style.width = `calc(var(--u) * ${Math.max(27, Math.min(44, 19 + longest * 1.08)).toFixed(1)})`;
  for (const r of runners) {
    const row = document.createElement('div'); row.className = 'mr-row off snap';
    row.innerHTML = `<div class="mr-pos mr-num">1</div><div class="mr-card" style="border-left:calc(var(--u)*.55) solid ${esc(r.colour.primary)}"><span class="mr-chip">${face(r, 64)}</span><div class="mr-name">${esc(shortOf(r))}</div><div class="mr-gap"></div><span class="mr-avs"></span></div>`;
    tower.appendChild(row); rows[r.id] = { el: row, pos: row.querySelector('.mr-pos'), gap: row.querySelector('.mr-gap'), last: '', shown: false, y: 0 };
    const tag = document.createElement('div'); tag.className = 'mr-tag';
    tag.innerHTML = `<span class="mr-tp"></span><span class="mr-tn" style="background:${esc(r.colour.primary)}"><span>${esc(shortOf(r))}</span></span><span class="mr-avs"></span>`;
    tag.style.opacity = '0';
    q('.mr-tags').appendChild(tag); tags[r.id] = { el: tag, pos: tag.querySelector('.mr-tp'), x: 0, y: 0, vis: false, w: 0, h: 0 };
  }
  // backers: the players' avatars on the tower rows and the name tags (rebuildable after betting)
  let bb0 = backedBy, playersList = players || [];
  function setBackedBy(bb = {}) {
    bb0 = bb || {};
    for (const r of runners) {
      const bl = (bb0[r.id] || []).filter((n) => n != null && n !== '');
      const html = avatarsHtml(bl, playersList);
      rows[r.id].el.classList.toggle('backed', bl.length > 0);
      rows[r.id].el.querySelector('.mr-avs').innerHTML = html;
      tags[r.id].el.querySelector('.mr-avs').innerHTML = html;
      tags[r.id].w = 0; // re-measure
    }
  }
  function setPlayers(list) { playersList = list || []; setBackedBy(bb0); }
  setBackedBy(backedBy);
  // tag sizes (for the overlap test in index.js), measured lazily
  document.fonts?.ready?.then(() => { for (const id in tags) tags[id].w = 0; }).catch(() => {});
  function tagSize(id) { const t = tags[id]; if (!t.w) { t.w = t.el.offsetWidth || 160; t.h = t.el.offsetHeight || 36; } return [t.w, t.h]; }

  // ---------- PiP course map ----------
  const mapCanvas = q('.mr-map canvas');
  const mctx = mapCanvas.getContext('2d');
  let mapBg = null; const MW = 360, MH = 426; mapCanvas.width = MW; mapCanvas.height = MH;
  const pts = course.points;
  let bx0 = 1e9, bz0 = 1e9, bx1 = -1e9, bz1 = -1e9; for (const p of pts) { bx0 = Math.min(bx0, p[0]); bx1 = Math.max(bx1, p[0]); bz0 = Math.min(bz0, p[2]); bz1 = Math.max(bz1, p[2]); }
  if (course.funfair) { const [fx, fz] = course.funfair.center, fr = course.funfair.radius * 0.6; bx0 = Math.min(bx0, fx - fr); bx1 = Math.max(bx1, fx + fr); bz0 = Math.min(bz0, fz - fr); bz1 = Math.max(bz1, fz + fr); }
  for (const id in C.diversions) for (const d of C.diversions[id]) for (const p of d.path) { bx0 = Math.min(bx0, p[0]); bx1 = Math.max(bx1, p[0]); bz0 = Math.min(bz0, p[1]); bz1 = Math.max(bz1, p[1]); }
  const pad = 30; const sc = Math.min((MW - pad * 2) / (bx1 - bx0), (MH - pad * 2) / (bz1 - bz0));
  const ox = (MW - (bx1 - bx0) * sc) / 2, oz = (MH - (bz1 - bz0) * sc) / 2;
  const MX = (x) => ox + (x - bx0) * sc, MZ = (z) => oz + (z - bz0) * sc;
  function drawMapBg() {
    const c = document.createElement('canvas'); c.width = MW; c.height = MH; const g = c.getContext('2d');
    const line = (arr, col, w, dash) => { g.beginPath(); arr.forEach((p, i) => (i ? g.lineTo(MX(p[0]), MZ(p[1])) : g.moveTo(MX(p[0]), MZ(p[1])))); g.strokeStyle = col; g.lineWidth = w; g.lineJoin = g.lineCap = 'round'; g.setLineDash(dash || []); g.stroke(); g.setLineDash([]); };
    const fillF = (kind, col) => { for (const f of park.features) if (f.kind === kind && f.closed) { g.beginPath(); f.pts.forEach((p, i) => (i ? g.lineTo(MX(p[0]), MZ(p[1])) : g.moveTo(MX(p[0]), MZ(p[1])))); g.fillStyle = col; g.fill(); } };
    const parkF = park.features.filter((f) => f.kind === 'park').sort((a, b) => b.pts.length - a.pts.length)[0];
    g.save(); g.beginPath(); parkF.pts.forEach((p, i) => (i ? g.lineTo(MX(p[0]), MZ(p[1])) : g.moveTo(MX(p[0]), MZ(p[1])))); g.fillStyle = '#9be27a'; g.fill(); g.restore();
    fillF('water', '#49a6ff'); fillF('track', '#ff7a5c');
    for (const id in C.diversions) for (const d of C.diversions[id]) line(d.path, '#c79a5a', 4, [6, 6]);
    const cl = []; for (let m = 0; m <= C.LAP1_END_DRAW; m += 10) cl.push(C.baseXZ(m));
    line(cl, '#14183c', 13); line(cl, '#c9d3ea', 7);
    const sp = []; for (let m = C.MAP_TO - 80; m <= C.finishM; m += 10) sp.push(C.baseXZ(m));
    line(sp, '#14183c', 13); line(sp, '#c9d3ea', 7);
    const f = C.rawExt(C.finishM); g.fillStyle = '#fff'; g.strokeStyle = '#14183c'; g.lineWidth = 3; g.fillRect(MX(f[0]) - 8, MZ(f[1]) - 8, 16, 16); g.strokeRect(MX(f[0]) - 8, MZ(f[1]) - 8, 16, 16);
    g.fillStyle = '#14183c'; g.fillRect(MX(f[0]) - 8, MZ(f[1]) - 8, 8, 8); g.fillRect(MX(f[0]), MZ(f[1]), 8, 8);
    return c;
  }
  mapBg = drawMapBg();
  function redrawMap() { mapBg = drawMapBg(); }

  // one banner at a time, <= 1.5 s each (finish banners may hold longer); newer ones queue, stale ones are dropped
  let bannerT = 0, hudClock = 0;
  const bannerQ = [];
  const banner = q('.mr-banner');
  function popBanner() {
    while (bannerQ.length && hudClock - bannerQ[0].at > 2) bannerQ.shift();
    const b = bannerQ.shift(); if (!b) return;
    banner.querySelector('.mr-b1 span').textContent = b.text;
    banner.querySelector('.mr-b1').style.background = b.colour;
    banner.querySelector('.mr-b2').textContent = b.sub || '';
    banner.classList.remove('on'); void banner.offsetWidth; banner.classList.add('on');
    bannerT = b.secs;
  }
  function showBanner(text, sub = '', colour = '#ff3d8b', secs = 1.4) {
    if (bannerQ.length >= 3) bannerQ.shift();
    bannerQ.push({ text, sub, colour, secs: Math.min(secs, 3), at: hudClock });
    if (bannerT <= 0) popBanner();
  }

  // per-frame update
  function update(dt, s) {
    hudClock += dt;
    if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) { banner.classList.remove('on'); bannerT = -0.25; } }
    else if (bannerT < 0) { bannerT = Math.min(0, bannerT + dt); if (bannerT === 0) popBanner(); }
    if (!s) return;
    if (s.map != null) root.classList.toggle('mr-nomap', !s.map);
    if ('closing' in s) {
      const c = s.closing, el = q('.mr-close');
      el.classList.toggle('on', !!c);
      if (c) {
        el.classList.toggle('hot', !!c.hot);
        if (el.dataset.who !== c.id) { el.dataset.who = c.id; el.querySelector('.mr-cc').innerHTML = c.id && pub[c.id] ? face(pub[c.id], 44) : ''; }
        el.querySelector('.mr-cn').textContent = c.name; el.querySelector('.mr-ct').textContent = c.text;
      }
    }
    if (s.raceS != null) K.clock.textContent = fmt(s.raceS);
    if (s.leaderM != null) {
      K.lap.textContent = s.leaderM >= 2500 ? '2' : '1';
      K.dist.textContent = `${(Math.min(5000, s.leaderM) / 1000).toFixed(1)} KM`;
    }
    if (s.order) {
      const rowH = (tower.querySelector('.mr-row')?.offsetHeight || 60) * 1.12;
      let slot = 0;
      s.order.forEach((o, i) => {
        const r = rows[o.id]; if (!r) return;
        if (o.hidden) { if (r.shown) { r.shown = false; r.el.classList.add('off'); } return; }
        if (slot === 3) slot += 0.3; // small gap before backed runners outside the top 3
        const y = slot * rowH; slot++;
        if (!r.shown) {
          // appear in place (no slide from a stale slot), then fade in
          r.el.classList.add('snap'); r.el.style.transform = `translateY(${y}px)`; void r.el.offsetWidth;
          r.el.classList.remove('off'); r.shown = true; requestAnimationFrame(() => r.el.classList.remove('snap'));
        } else if (Math.abs(r.y - y) > 0.5) r.el.style.transform = `translateY(${y}px)`;
        r.y = y;
        const key = `${i}|${o.gapText}|${o.finished}|${o.posHtml || ''}`;
        if (key !== r.last) {
          r.last = key; r.pos.innerHTML = o.posHtml ?? ord(i + 1);
          r.gap.textContent = o.gapText;
          r.el.classList.toggle('lead', i === 0 && !o.posHtml); r.el.classList.toggle('fin', !!o.finished);
        }
      });
    }
    if (s.tags) for (const t of s.tags) {
      const g = tags[t.id]; if (!g) continue;
      if (t.visible !== g.vis) { g.vis = t.visible; g.el.style.opacity = t.visible ? '1' : '0'; }
      if (t.visible) {
        g.el.classList.toggle('mini', !!t.mini);
        const [w, h] = tagSize(t.id);
        g.el.style.transform = `translate(${(t.x - (t.mini ? h * 0.75 : w / 2)).toFixed(1)}px, ${(t.y - h).toFixed(1)}px) scale(${t.scale ?? 1})`;
        if (g.p !== t.pos) { g.p = t.pos; g.pos.innerHTML = t.pos ? ord(t.pos) : ''; g.pos.style.display = t.pos ? '' : 'none'; g.w = 0; }
      }
    }
    if (s.dots) {
      mctx.clearRect(0, 0, MW, MH); mctx.drawImage(mapBg, 0, 0);
      for (const d of [...s.dots].reverse()) {
        const x = MX(d.x), z = MZ(d.z);
        if (d.ring) { mctx.beginPath(); mctx.arc(x, z, 17, 0, 7); mctx.fillStyle = d.ring; mctx.fill(); mctx.lineWidth = 3; mctx.strokeStyle = '#14183c'; mctx.stroke(); }
        mctx.beginPath(); mctx.arc(x, z, d.lead ? 12 : 10, 0, 7); mctx.fillStyle = d.colour; mctx.fill(); mctx.lineWidth = 4; mctx.strokeStyle = '#14183c'; mctx.stroke();
        if (d.focus) { mctx.beginPath(); mctx.arc(x, z, d.ring ? 21 : 16, 0, 7); mctx.strokeStyle = '#fff'; mctx.lineWidth = 3.5; mctx.stroke(); }
      }
    }
  }
  function setDim(b) { root.classList.toggle('mr-dim', !!b); }
  function setDimTop(b) { root.classList.toggle('mr-dimtop', !!b); }
  function clearBanner() { bannerT = 0; bannerQ.length = 0; banner.classList.remove('on'); }
  function introCard(r) {
    const c = q('.mr-card3');
    if (!r) { c.classList.remove('on'); return; }
    c.querySelector('.mr-lane span').textContent = r.lane ?? '';
    c.querySelector('.mr-lane').style.background = r.colour.primary;
    c.querySelector('.mr-info').style.background = `linear-gradient(180deg, ${r.colour.primary}, ${shade(r.colour.primary, -0.25)})`;
    c.querySelector('.mr-nick').textContent = r.nickname; c.querySelector('.mr-nick').style.color = '#fff';
    c.querySelector('.mr-tagl').textContent = r.tagline || ''; c.querySelector('.mr-tagl').style.color = textOn(r.colour.primary) === '#ffffff' ? '#fff' : '#1a1420';
    c.classList.remove('on'); void c.offsetWidth; c.classList.add('on');
  }
  function countdown(text) { const c = q('.mr-count'); c.textContent = text; c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop'); }
  function wipe() { const w = q('.mr-wipe'); w.classList.remove('go'); void w.offsetWidth; w.classList.add('go'); }
  function replay(on) { const was = root.classList.contains('mr-inreplay'); root.classList.toggle('mr-inreplay', !!on); if (!!on !== was) wipe(); }
  // photo(on, caption | { a, b }) -> "A or B?" with a scan line; photoResult(name, margin) reveals the verdict
  function photo(on, cap = '') {
    const el = q('.mr-photo'); el.classList.toggle('on', !!on); el.classList.remove('result');
    el.classList.toggle('scan', !!on);
    q('.mr-pf').textContent = 'PHOTO FINISH!';
    const pc = q('.mr-pcap');
    if (cap && typeof cap === 'object') pc.innerHTML = `<b>${esc(cap.a)}</b> or <b>${esc(cap.b)}</b>? Checking the camera…`;
    else pc.textContent = cap || '';
    pc.style.display = cap ? '' : 'none';
  }
  function photoResult(name, margin) {
    const el = q('.mr-photo'); el.classList.remove('scan'); el.classList.add('result');
    q('.mr-pf').textContent = `${String(name).toUpperCase()} WINS IT!`;
    q('.mr-pcap').innerHTML = margin != null ? `by <b>${esc(margin)}</b>` : ''; q('.mr-pcap').style.display = margin != null ? '' : 'none';
  }
  function market(on, sub = 'Place your halfway bets!') { q('.mr-market').classList.toggle('on', !!on); q('.mr-market .mr-m2').textContent = sub; }
  function titleCard(on, { title = '', kicker = '', theme = '' } = {}) {
    const el = q('.mr-title');
    if (on) { el.querySelector('.mr-t0').textContent = kicker; el.querySelector('.mr-t1').textContent = title; const t2 = el.querySelector('.mr-t2'); t2.textContent = theme; t2.style.display = theme ? '' : 'none'; el.querySelector('.mr-t0').style.display = kicker ? '' : 'none'; }
    el.classList.toggle('on', !!on);
  }
  function photoLine(a, c) {
    const dx = c[0] - a[0], dy = c[1] - a[1]; const L = Math.hypot(dx, dy) || 1; const ux = dx / L, uy = dy / L;
    const x0 = a[0] - ux * L * 0.6, y0 = a[1] - uy * L * 0.6;
    const el = q('.mr-photo .mr-line'); el.style.width = `${L * 2.2}px`; el.style.transform = `translate(${x0}px, ${y0}px) rotate(${Math.atan2(uy, ux)}rad)`;
  }
  function results(list) {
    const el = q('.mr-results');
    if (!list) { el.classList.remove('on'); return; }
    el.innerHTML = `<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>` + list.map((r) => `<div class="mr-rr"><span class="mr-num">${ord(r.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${r.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${esc(r.nickname)}</span><span class="mr-t">${esc(r.timeText || '')}</span></div>`).join('');
    requestAnimationFrame(() => el.classList.add('on'));
  }
  function dispose() { root.remove(); }
  return { root, update, setBackedBy, setPlayers, tagSize, replay, wipe, redrawMap, showBanner, clearBanner, setDim, setDimTop, introCard, countdown, photo, photoResult, photoLine, results, market, titleCard, dispose };
}

// shortName from the game module, else an abbreviated nickname that fits the tower
export function shortOf(r) {
  if (r.shortName) return r.shortName;
  const n = String(r.nickname || r.id).replace(/^the\s+/i, '');
  if (n.length <= 14) return n;
  const w = n.split(/\s+/);
  const two = w.slice(-2).join(' ');
  return two.length <= 14 ? two : w.at(-1).slice(0, 14);
}
const BACKER_COLS = ['#ffd23f', '#ff8fc8', '#7fe0ff', '#9dff8a', '#ffb067', '#c7a6ff'];
const backerIdx = new Map();
export function backerColour(name) { if (!backerIdx.has(name)) backerIdx.set(name, backerIdx.size); return BACKER_COLS[backerIdx.get(name) % BACKER_COLS.length]; }
const isEmoji = (s) => /\p{Extended_Pictographic}/u.test(String(s));
export function initialOf(n) { const t = String(n).trim(); if (isEmoji(t)) return [...t][0]; const w = t.split(/\s+/).filter(Boolean); return (w.length > 1 && w[0].length <= 3 ? w[0][0] + w[1][0] : t[0] || '?').toUpperCase(); }
function shade(hex, k) {
  const c = parseInt(hex.slice(1), 16); let r = (c >> 16) & 255, g = (c >> 8) & 255, b = c & 255;
  const f = (v) => Math.max(0, Math.min(255, Math.round(k < 0 ? v * (1 + k) : v + (255 - v) * k)));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}
