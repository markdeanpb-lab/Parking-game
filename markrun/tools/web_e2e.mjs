// Web edition (itch.io HTML5 build) end-to-end test. No PeerJS cloud, no internet:
//  - a LOCAL PeerJS signalling server (npm `peer`), dist-web served from http://127.0.0.1:B,
//  - every screen runs inside a cross-origin iframe, like itch.io: http://localhost:A/wrapper.html iframes 127.0.0.1:B,
//  - TV (1920x1080) + two phones (390x844, 360x740) play full rounds: bets, lock, reveal, race, results, next round,
//  - reload the TV mid-betting (iframe reload) and from the top (itch page reload -> "Resume the TV"): phones reconnect,
//    the game resumes; reload a phone mid-betting (iframe) and another from the top ("Rejoin"): they rejoin, slips kept.
//  - phone A joins through the TV's QR link (#join=CODE), phone B types the code into the 4 letter boxes.
//   node tools/web_e2e.mjs [--rounds=2] [--speed=8] [--race=2d] [--no-build] [--headed] [--out=tests/out/web]
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PeerServer } from 'peer';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k, d) => { const a = process.argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=').slice(1).join('=') : (process.argv.includes(`--${k}`) ? true : d); };
const ROUNDS = Number(arg('rounds', 2));
const SPEED = Number(arg('speed', 8));
const RACE = arg('race', '2d');
const OUT = path.resolve(ROOT, arg('out', 'tests/out/web'));
const DIST = path.join(ROOT, 'dist-web');
fs.mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a);

if (!arg('no-build') || !fs.existsSync(path.join(DIST, 'index.html'))) {
  log('building dist-web …');
  const r = spawnSync(process.execPath, ['--disable-warning=ExperimentalWarning', 'tools/build_web.mjs'], { cwd: ROOT, stdio: 'inherit' });
  if (r.status !== 0) process.exit(1);
}

// ---- servers ---------------------------------------------------------------------------------------------------------
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.ttf': 'font/ttf', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.zip': 'application/zip' };
const listen = (srv, host) => new Promise((res) => srv.listen(0, host, () => res(srv.address().port)));
const game = http.createServer((req, res) => { // like itch.zone: plain static files
  const u = new URL(req.url, 'http://x');
  const f = path.normalize(path.join(DIST, decodeURIComponent(u.pathname === '/' ? '/index.html' : u.pathname)));
  if (!f.startsWith(DIST) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  fs.createReadStream(f).pipe(res);
});
const GAME_PORT = await listen(game, '127.0.0.1');
const wrapper = http.createServer((req, res) => { // like the itch.io game page: a different origin that iframes the game
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;height:100%;background:#222}iframe{border:0;width:100%;height:100%;display:block}</style></head>
<body><iframe id="game" allow="autoplay; fullscreen; screen-wake-lock" allowfullscreen></iframe>
<script>document.getElementById('game').src = decodeURIComponent(location.hash.slice(1));</script></body></html>`);
});
const WRAP_PORT = await listen(wrapper, '127.0.0.1');
const PEER_PORT = await new Promise((res) => { const s = http.createServer(); s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); }); });
const peerSrv = PeerServer({ port: PEER_PORT, host: '127.0.0.1', path: '/peerjs', alive_timeout: 20000 });
peerSrv.on('connection', (c) => peerLog.push(`+${c.getId()}`));
peerSrv.on('disconnect', (c) => peerLog.push(`-${c.getId()}`));
const peerLog = [];
await sleep(300);
const SIG = `peerHost=127.0.0.1&peerPort=${PEER_PORT}&peerPath=/peerjs&peerSecure=0&ice=none`;
const GAME = `http://127.0.0.1:${GAME_PORT}/index.html`;
const wrap = (url) => `http://localhost:${WRAP_PORT}/wrapper.html#${encodeURIComponent(url)}`;
log(`game http://127.0.0.1:${GAME_PORT}  wrapper http://localhost:${WRAP_PORT} (cross-origin)  peer signalling :${PEER_PORT}`);

// ---- browser ---------------------------------------------------------------------------------------------------------
const browser = await chromium.launch({
  headless: !arg('headed'),
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required', '--disable-features=WebRtcHideLocalIpsWithMdns'],
});
const external = [];
const errors = [];
const pages = [];
async function ctx(opts, label) {
  const c = await browser.newContext(opts);
  await c.route('**/*', (route) => {
    const u = new URL(route.request().url());
    if (['127.0.0.1', 'localhost'].includes(u.hostname) || u.protocol === 'data:' || u.protocol === 'blob:') return route.continue();
    external.push(`${label}: ${u.href}`);
    return route.abort();
  });
  // record every message a phone receives (privacy checks)
  await c.addInitScript(() => { window.__markrunRecord = []; });
  const page = await c.newPage();
  pages.push([label, page]);
  page.on('pageerror', (e) => errors.push(`${label} pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${label} console: ${m.text()}`); });
  return page;
}
const gameFrame = async (page) => {
  for (let i = 0; i < 200; i++) {
    const f = page.frames().find((x) => x.url().startsWith(`http://127.0.0.1:${GAME_PORT}/`));
    if (f) return f;
    await sleep(50);
  }
  throw new Error('game iframe not found');
};
const shot = async (page, name) => {
  try { // never capture a screen mid-wipe (the broadcast wipe covers the TV for ~0.1 s at its midpoint)
    const f = page.frames().find((x) => x.url().startsWith(`http://127.0.0.1:${GAME_PORT}/`));
    await f?.waitForFunction(() => !document.querySelector('#wipe.go'), null, { timeout: 3000 }).catch(() => {});
  } catch { /* */ }
  try { await page.screenshot({ path: path.join(OUT, `${name}.png`), timeout: 60000 }); log('  shot', name); } catch (e) { log('  shot FAILED', name, e.message.split('\n')[0]); }
};

let ok = false;
const checks = [];
const pass = (what) => { checks.push(what); log(`✓ ${what}`); };
let tvPage, tv;
const host = async (fn, arg2) => { // evaluate against the in-page host on the TV (retries across TV reloads)
  for (let i = 0; i < 100; i++) {
    try { tv = await gameFrame(tvPage); return await tv.evaluate(fn, arg2); } catch { await sleep(150); }
  }
  throw new Error('TV host not reachable');
};
const phase = () => host(() => globalThis.__markrunHost?.game?.s?.phase || null);
async function waitPhase(want, timeout = 120000) {
  const list = Array.isArray(want) ? want : [want];
  const t0 = Date.now();
  for (;;) {
    const ph = await phase();
    if (list.includes(ph)) return ph;
    if (Date.now() - t0 > timeout) throw new Error(`timeout waiting for ${list} (at ${ph})`);
    await sleep(150);
  }
}
const snapshot = () => host(() => { const s = globalThis.__markrunHost.game.s; return { phase: s.phase, round: s.roundNumber, roundId: s.round?.public?.roundId, source: s.round?.source, bank: s.players.map((p) => [p.name, p.score]), locked: { ...s.locked }, revealed: s.revealed, conn: s.players.map((p) => globalThis.__markrunHost.game.isConnected(p.id)) }; });
async function waitConnected(n = 2, timeout = 45000) {
  const t0 = Date.now();
  for (;;) {
    const s = await snapshot();
    if (s.conn.filter(Boolean).length >= n) return s;
    if (Date.now() - t0 > timeout) throw new Error(`phones did not reconnect (${JSON.stringify(s.conn)})`);
    await sleep(200);
  }
}
const hold = async (page, f) => {
  const bx = await (await f.waitForSelector('#holdlock')).boundingBox();
  await page.mouse.move(bx.x + bx.width / 2, bx.y + bx.height / 2);
  await page.mouse.down(); await sleep(900); await page.mouse.up();
};

try {
  // ---------------- TV ----------------
  tvPage = await ctx({ viewport: { width: 1920, height: 1080 } }, 'tv');
  await tvPage.goto(wrap(`${GAME}?${SIG}&race=${RACE}&speed=${SPEED}&autostart&mute`));
  tv = await gameFrame(tvPage);
  await tv.waitForSelector('#wl-tv');
  const inFrame = await tv.evaluate(() => ({ iframe: window.__markrunWeb.inIframe, origin: location.origin, top: (() => { try { return window.top.location.href; } catch { return 'cross-origin (blocked)'; } })() }));
  if (!inFrame.iframe || inFrame.top !== 'cross-origin (blocked)') throw new Error(`not a cross-origin iframe: ${JSON.stringify(inFrame)}`);
  pass(`game runs in a cross-origin iframe (${inFrame.origin} inside http://localhost:${WRAP_PORT})`);
  await shot(tvPage, '00-launcher-tv');
  await tv.click('#wl-tv');
  await tv.waitForSelector('.lobby .qr-card.web-room .wr-status.ok', { timeout: 30000 });
  const code = await tv.$eval('.wr-code', (e) => e.dataset.code);
  if (!/^[A-HJ-NP-Z]{4}$/.test(code)) throw new Error(`bad room code ${code}`);
  pass(`TV opened room ${code} (peer id markrun-${code}-v1) on the local signalling server`);
  await sleep(500);
  await shot(tvPage, '01-tv-lobby-code');
  // Options: refresh hidden, data date shown, game page link -> QR + text
  await tv.click('[data-options]');
  await tv.waitForSelector('#tvmodal .web-opt');
  const refreshVisible = await tv.$$eval('[data-refresh]', (els) => els.some((e) => e.offsetParent !== null));
  if (refreshVisible) throw new Error('Refresh Historical Data is visible in the web edition');
  const dataTxt = await tv.$eval('#tvmodal .web-data', (e) => e.textContent);
  if (!/Data last updated: \d/.test(dataTxt)) throw new Error(`no data date: ${dataTxt}`);
  pass(`Options: Refresh hidden; "${dataTxt.split('·')[0].trim()}"`);
  await tv.click('#tvmodal [data-advanced]');
  await tv.waitForSelector('#tvmodal [data-k="roundsPerGame"]');
  // the soft 90 s bet timer is the real-play default; a slow headless bot turns it off so it can't auto-lock mid-script
  for (let i = 0; i < 6; i++) {
    const t = await tv.$eval('#tvmodal [data-k="betTimer"] .val', (e) => e.textContent.trim());
    if (t === 'Off') break;
    await tv.click('#tvmodal [data-k="betTimer"] [data-d="-1"]');
    await sleep(250);
  }
  for (let i = 0; i < 12; i++) {
    const cur = await tv.$eval('#tvmodal [data-k="roundsPerGame"] .val', (e) => Number(e.textContent));
    if (cur === ROUNDS) break;
    await tv.click(`#tvmodal [data-k="roundsPerGame"] [data-d="${cur > ROUNDS ? -1 : 1}"]`);
    await sleep(200);
  }
  await tv.fill('#tvmodal .web-opt input', 'example-player.itch.io/markrun?secret=abc');
  await tv.click('#tvmodal [data-weblink]');
  await tv.waitForFunction(() => document.querySelector('.wr-link')?.textContent.includes('example-player.itch.io/markrun'));
  await shot(tvPage, '02-tv-options');
  await tv.click('#tvmodal [data-ok]');
  await sleep(400);
  await shot(tvPage, '03-tv-lobby-pagelink');
  const qrLink = await host(() => globalThis.__markrunHost.joinLink);
  if (qrLink !== 'https://example-player.itch.io/markrun?secret=abc') throw new Error(`QR link ${qrLink}`);
  pass('Game page link saved: the QR encodes it and the card shows it next to the code');
  // clear it again: the QR goes back to the direct link (#join=CODE)
  await tv.click('[data-options]');
  await tv.fill('#tvmodal .web-opt input', '');
  await tv.click('#tvmodal [data-weblink]');
  await sleep(300);
  await tv.click('#tvmodal [data-ok]');
  const direct = await host(() => globalThis.__markrunHost.joinLink);
  if (!direct.includes(`#join=${code}`) || !direct.includes('peerHost=')) throw new Error(`direct link ${direct}`);

  // ---------------- phones ----------------
  const phoneOpts = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
  const paPage = await ctx(phoneOpts, 'phoneA');
  const pbPage = await ctx({ ...phoneOpts, viewport: { width: 360, height: 740 } }, 'phoneB');
  // A: scans the QR (direct link with the code filled in)
  await paPage.goto(wrap(direct));
  let pa = await gameFrame(paPage);
  await pa.waitForSelector('#nm', { timeout: 30000 });
  pass('phone A joined room via the QR direct link (#join=CODE) inside an iframe');
  // B: launcher -> "Join on my phone" -> 4 letter boxes
  await pbPage.goto(wrap(`${GAME}?${SIG}`));
  let pb = await gameFrame(pbPage);
  await pb.click('#wl-phone');
  await pb.waitForSelector('.wl-code input');
  await pb.type('.wl-code input', code.toLowerCase(), { delay: 60 });
  await shot(pbPage, '04-phoneB-code');
  await pb.click('#wl-go');
  await pb.waitForSelector('#nm', { timeout: 30000 });
  pass('phone B joined by typing the code into the big letter boxes');
  await pa.fill('#nm', 'Mark'); await pa.click('[data-emoji="🦖"]'); await pa.click('[data-colour="#2f8cff"]');
  await shot(paPage, '05-phoneA-join');
  await pa.click('#joinbtn'); await pa.waitForSelector('#markbtn');
  await pb.fill('#nm', 'Jo'); await pb.click('[data-emoji="🦄"]'); await pb.click('[data-colour="#ff6fb5"]');
  await pb.click('#joinbtn'); await pb.waitForSelector('#markbtn');
  await pa.click('#markbtn');
  await tv.waitForFunction(() => document.body.innerText.includes('THE REAL MARK'), null, { timeout: 8000 });
  await sleep(500);
  await shot(paPage, '06-phoneA-lobby');
  await shot(tvPage, '07-tv-lobby-players');
  // wrong code -> "Can't reach the TV"
  {
    const pc = await ctx(phoneOpts, 'phoneC');
    await pc.goto(wrap(`${GAME}?${SIG}#join=ZZZZ`));
    const f = await gameFrame(pc);
    await f.waitForSelector('#web-problem .wp-card', { timeout: 20000 });
    const t = await f.$eval('#web-problem', (e) => e.innerText);
    if (!/Can.t reach the TV/.test(t)) throw new Error('no unreachable message');
    await shot(pc, '08-phoneC-wrong-code');
    pass('wrong code shows "Can\'t reach the TV — check the code and that the TV tab is open"');
    await pc.context().close();
    pages.splice(pages.findIndex(([l]) => l === 'phoneC'), 1);
  }

  // launcher + code entry at other phone sizes (small portrait, landscape): everything on screen, no sideways scroll
  for (const [w, h] of [[320, 568], [844, 390], [412, 915]]) {
    const pv = await ctx({ viewport: { width: w, height: h }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }, `phone${w}`);
    await pv.goto(wrap(`${GAME}?${SIG}`));
    const f = await gameFrame(pv);
    await f.waitForSelector('#wl-phone');
    await shot(pv, `08b-launcher-${w}x${h}`);
    await f.click('#wl-phone');
    await f.type('.wl-code input', code, { delay: 30 });
    const lay = await f.evaluate(() => {
      const r = document.querySelector('#wl-go').getBoundingClientRect();
      const boxes = [...document.querySelectorAll('.wl-code input')].map((x) => x.getBoundingClientRect());
      return { overflowX: document.documentElement.scrollWidth > innerWidth + 1, goVisible: r.bottom <= innerHeight + 1 && r.top >= 0, boxesIn: boxes.every((b) => b.left >= 0 && b.right <= innerWidth), enabled: !document.querySelector('#wl-go').disabled };
    });
    await shot(pv, `08c-join-${w}x${h}`);
    if (lay.overflowX || !lay.boxesIn || !lay.enabled) throw new Error(`launcher layout broken at ${w}x${h}: ${JSON.stringify(lay)}`);
    if (!lay.goVisible) log(`  note: at ${w}x${h} the JOIN button needs a scroll (on-screen keyboard sizes vary)`);
    await pv.context().close();
    pages.splice(pages.findIndex(([l]) => l === `phone${w}`), 1);
  }
  pass('launcher + code entry fit 320x568, 844x390 (landscape) and 412x915 with no sideways scrolling');
  { // a phone whose iframe storage is blocked (third-party storage off / Safari): localStorage throws on access
    const pz = await ctx(phoneOpts, 'phoneNoStorage');
    await pz.context().addInitScript(() => {
      if (window === window.top) return;
      Object.defineProperty(window, 'localStorage', { configurable: true, get() { throw new DOMException('The operation is insecure.', 'SecurityError'); } });
    });
    await pz.goto(wrap(`${GAME}?${SIG}#join=${code}`));
    const f = await gameFrame(pz);
    await f.waitForSelector('#nm', { timeout: 30000 });
    const st = await f.evaluate(() => { localStorage.setItem('x', '1'); return { persistent: window.__markrunWeb.persistent, roundTrip: localStorage.getItem('x') }; });
    if (st.persistent !== false || st.roundTrip !== '1') throw new Error(`storage fallback: ${JSON.stringify(st)}`);
    pass('blocked localStorage in the iframe: in-memory fallback kicks in and the phone still reaches the join screen');
    await pz.context().close();
    pages.splice(pages.findIndex(([l]) => l === 'phoneNoStorage'), 1);
  }

  await pa.click('#readybtn');
  await pb.click('#readybtn');
  await waitPhase('INTRO');
  await sleep(600);
  await shot(tvPage, '09-tv-intro');
  if (await tv.waitForSelector('.newsdesk', { timeout: 10000 }).catch(() => null)) { await sleep(1500); await shot(tvPage, '09b-tv-newsdesk'); pass('round 1 opens on the news desk'); }
  await pa.waitForSelector('.flow', { timeout: 30000 });

  for (let round = 1; round <= ROUNDS; round++) {
    await waitPhase('BETTING', 180000);
    const s0 = await snapshot();
    if (s0.source !== 'game') throw new Error(`round ${round} did not come from the real game module (source=${s0.source})`);
    log(`round ${round}: source=${s0.source} scores=${JSON.stringify(s0.bank)}`);
    pa = await gameFrame(paPage); pb = await gameFrame(pbPage);
    await pa.waitForSelector('.strip .face', { timeout: 30000 });
    await pa.locator('.strip .face').first().click();
    await pa.click('[data-open="win"]');
    await pa.click('[data-add="clear"]');
    await pa.click('[data-add="50"]');
    await pa.click('[data-tray="ok"]');
    const dots = await pa.$$('.strip .sdots i');
    if (dots.length) {
      await dots[dots.length - 1].click();
      if (await pa.$('.side.yn.yes')) { await pa.click('.side.yn.yes'); await pa.click('[data-tray="ok"]'); }
      else if (await pa.$('.side[data-open="h2h"]')) { await pa.click('.side[data-open="h2h"]'); await pa.click('[data-tray="ok"]'); }
    }
    await pa.click('.rvbtn');
    await pa.waitForSelector('#holdlock');
    const linesBefore = await pa.$$eval('.rv-line', (x) => x.length);
    if (round === 1) await shot(paPage, '10-phoneA-review');
    // phone reload mid-betting (round 1): the game iframe reloads (keeps #phone=CODE) -> rejoins by itself, slip kept
    if (round === 1) {
      await pa.evaluate(() => location.reload());
      await sleep(500);
      pa = await gameFrame(paPage);
      await pa.waitForSelector('.flow', { timeout: 30000 });
      await pa.click('.rvbtn');
      const linesAfter = await pa.$$eval('.rv-line', (x) => x.length);
      if (linesAfter < linesBefore) throw new Error(`slip lost after reload (${linesBefore} -> ${linesAfter})`);
      pass(`phone A reloaded mid-betting (iframe) and rejoined automatically, bet slip kept (${linesAfter} bets)`);
    }
    await hold(paPage, pa);
    await pa.waitForFunction(() => document.body.innerText.includes('Locked in!'), null, { timeout: 15000 });
    if (round === 1) { await shot(paPage, '11-phoneA-locked'); await shot(tvPage, '12-tv-betting-onelocked'); }
    if (await tv.evaluate(() => document.body.innerText.includes('to WIN'))) throw new Error('TV shows bets before everyone locked');

    if (round === 1) { // TV reload mid-session (A locked, B still betting): phones reconnect, game resumes
      const before = await snapshot();
      await tv.evaluate(() => location.reload());
      await sleep(800);
      tv = await gameFrame(tvPage);
      await tv.waitForSelector('#stage', { timeout: 30000 });
      const after = await waitConnected(2);
      if (after.phase !== 'BETTING' || after.roundId !== before.roundId || !after.locked.p1 || JSON.stringify(after.bank) !== JSON.stringify(before.bank)) throw new Error(`state changed across TV reload: ${JSON.stringify({ before, after })}`);
      pass(`TV reloaded mid-betting: same room, game resumed (${after.phase}, round ${after.round}, A still locked) and both phones reconnected`);
      await sleep(1200);
      await shot(tvPage, '13-tv-after-reload');
      pa = await gameFrame(paPage); pb = await gameFrame(pbPage);
      await pa.waitForFunction(() => document.body.innerText.includes('Locked in!'), null, { timeout: 15000 });
    }

    await pb.waitForSelector('.strip .face', { timeout: 30000 });
    await pb.locator('.strip .face').nth(2).click();
    await pb.click('[data-open="win"]');
    await pb.click('[data-add="max"]');
    await pb.click('[data-tray="ok"]');
    await pb.click('.rvbtn');
    if (round === 2) { // the whole page reloads (like the itch.io page): launcher -> one tap on "Rejoin room" -> back in, slip kept
      await pbPage.reload();
      pb = await gameFrame(pbPage);
      await pb.waitForSelector('#wl-rejoin:not(.hidden)', { timeout: 15000 });
      const label = await pb.$eval('#wl-rejoin', (e) => e.textContent.trim());
      await shot(pbPage, '16b-phoneB-rejoin-button');
      await pb.click('#wl-rejoin');
      await pb.waitForSelector('.flow', { timeout: 30000 });
      await pb.click('.rvbtn');
      const n = await pb.$$eval('.rv-line', (x) => x.length);
      if (n < 1) throw new Error('phone B slip lost after page reload');
      pass(`phone B page reloaded mid-betting (itch-style): "${label}" -> back in with its bet slip`);
    }
    await hold(pbPage, pb);
    await tv.waitForSelector('.faceoff .fchip, .faceoff .fside, .faceoff .clash-stamp', { timeout: 30000 });
    await sleep(Math.max(400, 3000 / SPEED));
    if (round === 1) { await shot(tvPage, '14-tv-reveal'); await shot(pbPage, '15-phoneB-revealed'); }
    pass(`round ${round}: both locked -> bets revealed on the TV`);
    await waitPhase('RACE', 90000);
    await pa.waitForSelector('.reacts', { timeout: 30000 });
    // halfway market (if offered)
    {
      const t0 = Date.now();
      let opened = false;
      while (Date.now() - t0 < 300000) {
        if ((await phase()) !== 'RACE') break;
        if (await pa.$('#modal .mkr:not([disabled])')) { opened = true; break; }
        await sleep(200);
      }
      if (opened) {
        try {
          if (round === 1) await shot(paPage, '16-phoneA-market');
          await pa.click('#modal .mkr:not([disabled])', { timeout: 5000 });
          await pa.waitForFunction(() => document.querySelector('#modal .done') || document.body.innerText.includes('(halfway)'), null, { timeout: 15000 });
          pass(`round ${round}: halfway market bet placed over WebRTC`);
        } catch (e) { log(`  round ${round}: market closed before the bot could bet - ${e.message.split('\n')[0]}`); }
      } else log(`  round ${round}: no halfway market offered`);
    }
    if (round === 1 && (await phase()) === 'RACE') {
      for (const e of ['😱', '🔥']) { await pa.click(`[data-react="${e}"]`, { timeout: 3000 }).catch(() => {}); await sleep(250); }
      await shot(paPage, '17-phoneA-race');
      await shot(tvPage, '18-tv-race');
    }
    await waitPhase(['RESULTS', 'SCOREBOARD'], 400000);
    pass(`round ${round}: race finished -> results`);
    if (round === 1) {
      await pa.waitForSelector('.net-big, #readybtn, #nextbtn', { timeout: 60000 }).catch(() => {});
      await sleep(1500);
      await shot(tvPage, '19-tv-results');
      await shot(paPage, '20-phoneA-results');
    }
    // phones can move results along
    for (let i = 0; i < 12 && (await phase()) === 'RESULTS'; i++) {
      const nb = await pa.$('#nextbtn:not([disabled])');
      if (nb) await nb.click().catch(() => {});
      await sleep(Math.max(1200, 9000 / SPEED));
    }
    await waitPhase('SCOREBOARD', 180000);
    await sleep(800);
    if (round === 1) { await shot(tvPage, '21-tv-scoreboard'); await shot(paPage, '22-phoneA-scoreboard'); }
    pass(`round ${round}: scoreboard (scores ${JSON.stringify((await snapshot()).bank)})`);

    if (round === 1) { // the whole itch page reloads on the TV: launcher -> "Resume the TV" -> same room, same game
      const before = await snapshot();
      await tvPage.reload();
      tv = await gameFrame(tvPage);
      await tv.waitForSelector('#wl-rejoin:not(.hidden)', { timeout: 15000 });
      const label = await tv.$eval('#wl-rejoin', (e) => e.textContent);
      if (!label.includes(code)) throw new Error(`resume button does not name room ${code}: ${label}`);
      await shot(tvPage, '23-tv-launcher-resume');
      await tv.click('#wl-rejoin');
      const after = await waitConnected(2);
      if (after.phase !== 'SCOREBOARD' || JSON.stringify(after.bank) !== JSON.stringify(before.bank)) throw new Error('state changed across TV page reload');
      const code2 = await tv.$eval('.wr-code', (e) => e.dataset.code).catch(() => null);
      pass(`TV page reloaded (itch-style): "${label.trim()}" -> resumed at ${after.phase}, both phones reconnected${code2 ? '' : ''}`);
      await sleep(1000);
      await shot(tvPage, '24-tv-after-page-reload');
    }

    pa = await gameFrame(paPage); pb = await gameFrame(pbPage);
    await pa.waitForSelector('#readybtn', { timeout: 30000 });
    await pa.click('#readybtn');
    await pb.waitForSelector('#readybtn', { timeout: 30000 });
    await pb.click('#readybtn');
    if (round < ROUNDS) await waitPhase('INTRO', 60000);
  }
  await waitPhase('FINALE', 60000);
  await sleep(2500);
  await shot(tvPage, '25-tv-finale');
  await shot(paPage, '26-phoneA-finale');
  pass(`${ROUNDS} full rounds played to the FINALE`);

  // privacy: phones never received the race plan or hidden data; nothing secret before the race
  for (const [label, page] of pages.filter(([l]) => l.startsWith('phone'))) {
    const f = await gameFrame(page);
    const rec = await f.evaluate(() => window.__markrunRecord || []);
    const all = rec.join('\n');
    for (const k of ['"racePlan"', '"hidden"', '"progress"']) if (all.includes(k)) throw new Error(`${label} received ${k}`);
    const preRace = rec.filter((m) => /"phase":"(BETTING|INTRO)"/.test(m) && !/"revealed":true/.test(m));
    for (const k of ['"officialS"', '"finishOrder"', '"stravaTitle"']) if (preRace.some((m) => m.includes(k))) throw new Error(`${label} saw ${k} before the race`);
    if (!rec.length) throw new Error(`${label}: no messages recorded`);
    pass(`${label}: ${rec.length} messages received, never the race plan / hidden data, no results before the race`);
  }
  ok = true;
} catch (e) {
  console.error('WEB E2E FAILED:', e.stack || e.message);
  for (const [n, pg] of pages) {
    for (const f of pg.frames()) {
      const info = await f.evaluate(() => ({ url: location.href, body: document.body?.className, text: document.body?.innerText.slice(0, 120) })).catch((err) => ({ err: err.message.split('\n')[0] }));
      console.error(`  [${n}] frame detached=${f.isDetached()} ${JSON.stringify(info)}`);
    }
  }
  try { await Promise.all(pages.map(([n, pg]) => pg.screenshot({ path: path.join(OUT, `FAIL-${n}.png`) }))); } catch { /* */ }
  console.error('page errors so far:\n  ' + errors.slice(0, 15).join('\n  '));
  console.error('signalling log:', peerLog.slice(-20).join(' '));
} finally {
  await browser.close().catch(() => {});
  game.close(); wrapper.close();
  try { peerSrv._server?.close?.(); } catch { /* */ }
}
if (external.length) { console.error('EXTERNAL REQUESTS ATTEMPTED:\n  ' + external.join('\n  ')); ok = false; }
else console.log('network: no external requests attempted ✓ (local signalling server only)');
const realErrors = errors.filter((e) => !/favicon|ERR_ABORTED|net::ERR|WebSocket/.test(e));
if (realErrors.length) { console.error('PAGE ERRORS:\n  ' + realErrors.join('\n  ')); ok = false; }
console.log(`\n${checks.length} checks passed`);
console.log(ok ? `WEB E2E PASSED — screenshots in ${path.relative(ROOT, OUT)}/` : 'WEB E2E FAILED');
process.exit(ok ? 0 : 1);
