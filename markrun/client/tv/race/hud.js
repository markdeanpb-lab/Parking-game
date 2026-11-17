// Broadcast HUD overlay (DOM over the canvas). Leaves the bottom ~15% clear for the shell's subtitles.
const CSS = `
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:"Lilita One","Arial Black",Impact,sans-serif;color:#fff;
  --ink:#1a1420;--blue:#2e6fe0;--blue2:#1d4fb8;--yellow:#ffd23f;--pink:#ff3d8b;--u:calc(min(1vw,1.78vh));letter-spacing:.02em}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(-10deg);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.35)}
.mr-panel>.mr-unskew{transform:skewX(10deg)}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;gap:calc(var(--u)*1);align-items:stretch}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;animation:mrblink 1s infinite}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*8.2);width:calc(var(--u)*28)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*4.1);display:flex;align-items:center;transition:transform .55s cubic-bezier(.3,1.4,.5,1),opacity .3s}
.mr-row .mr-pos{width:calc(var(--u)*5.2);font-size:calc(var(--u)*3.3);text-align:center;line-height:1}
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;height:calc(var(--u)*3.4);display:flex;align-items:center;padding:0 calc(var(--u)*.8) 0 0;background:rgba(20,22,48,.82);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);transform:skewX(-10deg);overflow:hidden}
.mr-row .mr-card>*{transform:skewX(10deg)}
.mr-row .mr-chip{width:calc(var(--u)*1.6);align-self:stretch;margin-right:calc(var(--u)*.8)}
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*1.2);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-row .mr-badges{position:absolute;left:100%;top:50%;transform:translateY(-50%);display:flex;gap:calc(var(--u)*.25);margin-left:calc(var(--u)*.6)}
.mr-row .mr-badges .mr-badge{margin:0;font-size:calc(var(--u)*1.25)}
.mr-row.backed .mr-card{box-shadow:0 0 0 calc(var(--u)*.22) var(--bc,#ffd23f),0 0 calc(var(--u)*1.2) var(--bc,#ffd23f)}
.mr-tag .mr-tb{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*.2);margin-bottom:calc(var(--u)*.3)}
.mr-tag .mr-tb .mr-badge{margin:0;font-size:calc(var(--u)*1.15)}
.mr-title{position:absolute;left:41%;top:9%;width:max-content;max-width:64%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:all .6s cubic-bezier(.3,1.5,.5,1)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-title .mr-t1{display:block;white-space:normal;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);line-height:1.02;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(-10deg);background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity .5s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:60%;top:15%;transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:calc(var(--u)*.45) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.35) calc(var(--u)*1.8);font-size:calc(var(--u)*3.5);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.7) 0 rgba(0,0,0,.35);animation:mrpulse 1.6s ease-in-out infinite}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:60%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*17);height:calc(var(--u)*21);padding:calc(var(--u)*.5)}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.88);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.3)}
.mr-banner{position:absolute;left:50%;top:74%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.3) calc(var(--u)*2.4);font-size:calc(var(--u)*4.2);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.35);font-size:calc(var(--u)*1.25);will-change:transform;transition:opacity .25s}
.mr-tag .mr-tp{background:var(--ink);color:var(--yellow);border-radius:calc(var(--u)*.5);padding:0 calc(var(--u)*.45);font-size:calc(var(--u)*1.35)}
.mr-tag .mr-tn{padding:calc(var(--u)*.05) calc(var(--u)*.6);border:calc(var(--u)*.22) solid var(--ink);border-radius:calc(var(--u)*.6);-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.3)}
.mr-tag:after{content:"";position:absolute;left:50%;bottom:calc(var(--u)*-.75);border:calc(var(--u)*.45) solid transparent;border-top-color:var(--ink);transform:translateX(-50%)}
.mr-card3{position:absolute;left:calc(var(--u)*5);bottom:19%;display:flex;align-items:stretch;opacity:0;transform:translateX(-30%);transition:all .45s cubic-bezier(.3,1.4,.5,1)}
.mr-card3.on{opacity:1;transform:none}
.mr-card3 .mr-lane{width:calc(var(--u)*8);font-size:calc(var(--u)*6.5);display:flex;align-items:center;justify-content:center;border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg);margin-right:calc(var(--u)*-.6);z-index:1}
.mr-card3 .mr-lane span{transform:skewX(10deg)}
.mr-card3 .mr-info{padding:calc(var(--u)*.8) calc(var(--u)*3) calc(var(--u)*.8) calc(var(--u)*2.4)}
.mr-card3 .mr-nick{font-size:calc(var(--u)*4.4);line-height:1;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-card3 .mr-tagl{font-family:Nunito,sans-serif;font-weight:900;font-size:calc(var(--u)*1.55);opacity:.95;margin-top:calc(var(--u)*.4)}
.mr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(1);font-size:calc(var(--u)*16);opacity:0}
.mr-count.pop{animation:mrpop .9s ease-out}
@keyframes mrpop{0%{transform:translate(-50%,-50%) scale(2.2);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.8);opacity:0}}
.mr-photo{position:absolute;inset:0;opacity:0;transition:opacity .15s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 50%,rgba(0,0,0,.55) 100%)}
.mr-photo.on{opacity:1}
.mr-photo .mr-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mr-photo.on .mr-flash{animation:mrflash .6s ease-out}
@keyframes mrflash{0%{opacity:.95}100%{opacity:0}}
.mr-photo .mr-pf{position:absolute;left:50%;top:14%;transform:translateX(-50%) skewX(-10deg);background:#fff;color:var(--ink);border:calc(var(--u)*.4) solid var(--ink);padding:calc(var(--u)*.4) calc(var(--u)*2.5);font-size:calc(var(--u)*4)}
.mr-photo .mr-line{position:absolute;left:0;top:0;height:calc(var(--u)*.35);background:rgba(255,40,80,.9);transform-origin:0 50%;box-shadow:0 0 6px rgba(255,40,80,.8)}
.mr-results{position:absolute;right:calc(var(--u)*3);top:50%;transform:translate(120%,-50%);transition:transform .6s cubic-bezier(.3,1.3,.5,1);width:calc(var(--u)*30)}
.mr-results.on{transform:translate(0,-50%)}
.mr-results .mr-rh{font-size:calc(var(--u)*3);margin-bottom:calc(var(--u)*.8);padding:calc(var(--u)*.3) calc(var(--u)*1.5);display:inline-block}
.mr-results .mr-rr{display:flex;align-items:center;gap:calc(var(--u)*.8);margin:calc(var(--u)*.5) 0;font-size:calc(var(--u)*1.8);background:rgba(20,22,48,.85);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1);transform:skewX(-10deg)}
.mr-results .mr-rr>*{transform:skewX(10deg)}
.mr-results .mr-rr .mr-num{font-size:calc(var(--u)*2.6);width:calc(var(--u)*4.2)}
.mr-results .mr-rr .mr-t{margin-left:auto;font-family:Nunito,sans-serif;font-weight:900}
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity .4s}
`;

const ord = (n) => `${n}<sup>${['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}</sup>`;
export const ordText = (n) => `${n}${['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}`;
const fmt = (s) => { s = Math.max(0, s); const m = Math.floor(s / 60), r = Math.floor(s % 60); return `${m}:${String(r).padStart(2, '0')}`; };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const textOn = (hex) => { const c = parseInt(hex.slice(1), 16); const l = ((c >> 16) & 255) * 0.299 + ((c >> 8) & 255) * 0.587 + (c & 255) * 0.114; return l > 165 ? '#1a1420' : '#ffffff'; };

export function createHud(container, { runners, backedBy = {}, course, park, C }) {
  if (!document.getElementById('mr-hud-css')) { const st = document.createElement('style'); st.id = 'mr-hud-css'; st.textContent = CSS; document.head.appendChild(st); }
  const root = document.createElement('div'); root.className = 'mr-hud mr-dim';
  root.innerHTML = `
    <div class="mr-top">
      <div class="mr-panel mr-live"><div class="mr-unskew"><i></i> LIVE</div></div>
      <div class="mr-panel mr-clock"><div class="mr-unskew mr-num" data-k="clock">0:00</div></div>
      <div class="mr-panel mr-lap"><div class="mr-unskew">LAP <b class="mr-num" data-k="lap">1</b>/2</div></div>
      <div class="mr-panel mr-dist"><div class="mr-unskew"><span data-k="dist">0.0 KM</span><div class="mr-bar"><i data-k="bar"></i></div></div></div>
    </div>
    <div class="mr-tower"></div>
    <div class="mr-map"><div class="mr-mapwrap"></div><canvas></canvas></div>
    <div class="mr-tags"></div>
    <div class="mr-banner"><div class="mr-b1"><span></span></div><span class="mr-b2"></span></div>
    <div class="mr-card3"><div class="mr-lane mr-num"><span></span></div><div class="mr-panel mr-info"><div class="mr-unskew"><div class="mr-nick"></div><div class="mr-tagl"></div></div></div></div>
    <div class="mr-count mr-num"></div>
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div><div class="mr-pcap"></div></div>
    <div class="mr-market"><div class="mr-m1">MARKET OPEN</div><div class="mr-m2"></div></div>
    <div class="mr-title"><div class="mr-t0"></div><span class="mr-t1"></span><div class="mr-t2"></div></div>
    <div class="mr-results"></div>`;
  container.appendChild(root);
  const q = (s) => root.querySelector(s);
  const K = {}; root.querySelectorAll('[data-k]').forEach((e) => (K[e.dataset.k] = e));
  const tower = q('.mr-tower');
  const rows = {};
  const tags = {};
  for (const r of runners) {
    const row = document.createElement('div'); row.className = 'mr-row';
    row.innerHTML = `<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${r.colour.primary};border-right:4px solid ${r.colour.secondary}"></div><div class="mr-name">${esc(shortOf(r))}</div><div class="mr-gap"></div></div><span class="mr-badges"></span>`;
    tower.appendChild(row); rows[r.id] = { el: row, pos: row.querySelector('.mr-pos'), gap: row.querySelector('.mr-gap'), last: '' };
    const tag = document.createElement('div'); tag.className = 'mr-tag';
    tag.innerHTML = `<span class="mr-tb"></span><span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${r.colour.primary};color:#fff">${esc(shortOf(r))}</span>`;
    tag.style.opacity = '0';
    q('.mr-tags').appendChild(tag); tags[r.id] = { el: tag, pos: tag.querySelector('.mr-tp'), x: 0, y: 0, vis: false };
  }
  // backer badges on the tower rows and name tags (rebuildable after betting)
  function setBackedBy(bb = {}) {
    for (const r of runners) {
      const bl = (bb[r.id] || []).filter((n) => n != null && n !== '');
      const backers = bl.map((n) => `<span class="mr-badge" style="--bc:${backerColour(n)}">${isEmoji(n) ? '' : '★'}${esc(String(n)).slice(0, 10)}</span>`).join('');
      const row = rows[r.id].el;
      row.classList.toggle('backed', bl.length > 0);
      if (bl.length) row.style.setProperty('--bc', backerColour(bl[0])); else row.style.removeProperty('--bc');
      row.querySelector('.mr-badges').innerHTML = backers;
      tags[r.id].el.querySelector('.mr-tb').innerHTML = backers;
    }
  }
  setBackedBy(backedBy);
  // minimap
  const mapCanvas = q('.mr-map canvas');
  const mctx = mapCanvas.getContext('2d');
  let mapBg = null; const MW = 340, MH = 420; mapCanvas.width = MW; mapCanvas.height = MH;
  const pts = course.points;
  let bx0 = 1e9, bz0 = 1e9, bx1 = -1e9, bz1 = -1e9; for (const p of pts) { bx0 = Math.min(bx0, p[0]); bx1 = Math.max(bx1, p[0]); bz0 = Math.min(bz0, p[2]); bz1 = Math.max(bz1, p[2]); }
  if (course.funfair) { const [fx, fz] = course.funfair.center, fr = course.funfair.radius * 0.6; bx0 = Math.min(bx0, fx - fr); bx1 = Math.max(bx1, fx + fr); bz0 = Math.min(bz0, fz - fr); bz1 = Math.max(bz1, fz + fr); }
  for (const id in C.diversions) for (const d of C.diversions[id]) for (const p of d.path) { bx0 = Math.min(bx0, p[0]); bx1 = Math.max(bx1, p[0]); bz0 = Math.min(bz0, p[1]); bz1 = Math.max(bz1, p[1]); }
  const pad = 26; const sc = Math.min((MW - pad * 2) / (bx1 - bx0), (MH - pad * 2) / (bz1 - bz0));
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
    line(cl, '#1a1420', 11); line(cl, '#8fa0c4', 6);
    const sp = []; for (let m = C.MAP_TO - 80; m <= C.finishM; m += 10) sp.push(C.baseXZ(m));
    line(sp, '#1a1420', 11); line(sp, '#8fa0c4', 6);
    // finish flag
    const f = C.rawExt(C.finishM); g.fillStyle = '#fff'; g.strokeStyle = '#1a1420'; g.lineWidth = 3; g.fillRect(MX(f[0]) - 7, MZ(f[1]) - 7, 14, 14); g.strokeRect(MX(f[0]) - 7, MZ(f[1]) - 7, 14, 14);
    g.fillStyle = '#1a1420'; g.fillRect(MX(f[0]) - 7, MZ(f[1]) - 7, 7, 7); g.fillRect(MX(f[0]), MZ(f[1]), 7, 7);
    return c;
  }
  mapBg = drawMapBg();
  function redrawMap() { mapBg = drawMapBg(); }

  let bannerT = 0;
  const banner = q('.mr-banner');
  function showBanner(text, sub = '', colour = '#ff3d8b', secs = 2.4) {
    banner.querySelector('.mr-b1 span').textContent = text;
    banner.querySelector('.mr-b1').style.background = colour;
    banner.querySelector('.mr-b2').textContent = sub;
    banner.classList.remove('on'); void banner.offsetWidth; banner.classList.add('on');
    bannerT = secs;
  }

  // per-frame update
  // state: { raceS, leaderM, lap, order:[{id, m, gapS, finished, place}], tags:[{id, x, y, visible, pos}] }
  let lastOrderKey = '';
  function update(dt, s) {
    if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) banner.classList.remove('on'); }
    if (!s) return;
    if (s.raceS != null) K.clock.textContent = fmt(s.raceS);
    if (s.leaderM != null) {
      K.lap.textContent = s.leaderM >= 2500 ? '2' : '1';
      K.dist.textContent = `${(Math.min(5000, s.leaderM) / 1000).toFixed(1)} KM`;
      K.bar.style.width = `${Math.min(100, (s.leaderM / 5000) * 100)}%`;
    }
    if (s.order) {
      const h = tower.clientHeight || 0; const rowH = (tower.querySelector('.mr-row')?.offsetHeight || 40) + 6;
      s.order.forEach((o, i) => {
        const r = rows[o.id]; if (!r) return;
        r.el.style.transform = `translateY(${i * rowH}px)`;
        const key = `${i}|${o.gapText}|${o.finished}`;
        const key2 = key + (o.posHtml || '');
        if (key2 !== r.last) {
          r.last = key2; r.pos.innerHTML = o.posHtml ?? ord(i + 1);
          r.gap.textContent = o.gapText;
          r.el.classList.toggle('lead', i === 0 && !o.posHtml); r.el.classList.toggle('fin', !!o.finished);
        }
      });
    }
    if (s.tags) for (const t of s.tags) {
      const g = tags[t.id]; if (!g) continue;
      if (t.visible !== g.vis) { g.vis = t.visible; g.el.style.opacity = t.visible ? '1' : '0'; }
      if (t.visible) { g.el.style.transform = `translate(${t.x}px, ${t.y}px) translate(-50%,-100%) scale(${t.scale ?? 1})`; if (g.p !== t.pos) { g.p = t.pos; g.pos.textContent = t.pos ? ordText(t.pos) : ''; g.pos.style.display = t.pos ? '' : 'none'; } }
    }
    if (s.dots) {
      mctx.clearRect(0, 0, MW, MH); mctx.drawImage(mapBg, 0, 0);
      for (const d of [...s.dots].reverse()) {
        mctx.beginPath(); mctx.arc(MX(d.x), MZ(d.z), d.lead ? 11 : 9, 0, 7); mctx.fillStyle = d.colour; mctx.fill(); mctx.lineWidth = 3.5; mctx.strokeStyle = '#1a1420'; mctx.stroke();
        if (d.focus) { mctx.beginPath(); mctx.arc(MX(d.x), MZ(d.z), 15, 0, 7); mctx.strokeStyle = '#fff'; mctx.lineWidth = 3; mctx.stroke(); }
      }
      if (s.camDot) { mctx.save(); mctx.translate(MX(s.camDot.x), MZ(s.camDot.z)); mctx.rotate(s.camDot.a); mctx.fillStyle = 'rgba(26,20,32,.6)'; mctx.beginPath(); mctx.moveTo(0, 0); mctx.lineTo(-10, -22); mctx.lineTo(10, -22); mctx.fill(); mctx.restore(); }
    }
  }
  function setDim(b) { root.classList.toggle('mr-dim', !!b); }
  function setDimTop(b) { root.classList.toggle('mr-dimtop', !!b); }
  function clearBanner() { bannerT = 0; banner.classList.remove('on'); }
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
  function photo(on, caption = '') { q('.mr-photo').classList.toggle('on', !!on); q('.mr-pcap').textContent = caption; q('.mr-pcap').style.display = caption ? '' : 'none'; }
  function market(on, sub = 'Place your halfway bets!') { q('.mr-market').classList.toggle('on', !!on); q('.mr-market .mr-m2').textContent = sub; }
  function titleCard(on, { title = '', kicker = '', theme = '' } = {}) {
    const el = q('.mr-title');
    if (on) { el.querySelector('.mr-t0').textContent = kicker; el.querySelector('.mr-t1').textContent = title; const t2 = el.querySelector('.mr-t2'); t2.textContent = theme; t2.style.display = theme ? '' : 'none'; el.querySelector('.mr-t0').style.display = kicker ? '' : 'none'; }
    el.classList.toggle('on', !!on);
  }
  function photoLine(a, c) {
    // extend the projected finish line well past both path edges
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
  return { root, update, setBackedBy, redrawMap, showBanner, clearBanner, setDim, setDimTop, introCard, countdown, photo, photoLine, results, market, titleCard, dispose };
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
function shade(hex, k) {
  const c = parseInt(hex.slice(1), 16); let r = (c >> 16) & 255, g = (c >> 8) & 255, b = c & 255;
  const f = (v) => Math.max(0, Math.min(255, Math.round(k < 0 ? v * (1 + k) : v + (255 - v) * k)));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}
