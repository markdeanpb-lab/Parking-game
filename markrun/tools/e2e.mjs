// End-to-end playthrough: host server + TV (1920x1080) + two phones (390x844) in headless Chromium.
// Joins, bets, locks, watches a race, sees results, plays a second round to the finale; saves screenshots.
// Blocks every non-localhost request and fails if any was attempted (offline guarantee).
//
//   node tools/e2e.mjs [--race=2d|3d] [--speed=8] [--rounds=2] [--out=tests/out/ui] [--headed] [--source=fixture|game]
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k, d) => { const a = process.argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=').slice(1).join('=') : (process.argv.includes(`--${k}`) ? true : d); };
const RACE = arg('race', '2d');
const SPEED = Number(arg('speed', 8));
const ROUNDS = Number(arg('rounds', 2));
const OUT = path.resolve(ROOT, arg('out', 'tests/out/ui'));
const SOURCE = arg('source', 'auto');
fs.mkdirSync(OUT, { recursive: true });

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-e2e-'));
const env = { ...process.env, PORT: '0', MARKRUN_SESSION_DB: path.join(tmp, 'session.db'), MARKRUN_HOST: '127.0.0.1' };
if (SOURCE === 'fixture') env.MARKRUN_ROUND_SOURCE = 'fixture';
const srv = spawn(process.execPath, ['--disable-warning=ExperimentalWarning', 'server/index.mjs', '--fresh'], { cwd: ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });
let srvOut = '';
srv.stdout.on('data', (d) => { srvOut += d; });
srv.stderr.on('data', (d) => { srvOut += d; });
const port = await new Promise((res, rej) => {
  const t = setTimeout(() => rej(new Error(`server did not start:\n${srvOut}`)), 15000);
  const iv = setInterval(() => { const m = srvOut.match(/MARKRUN_READY port=(\d+)/); if (m) { clearTimeout(t); clearInterval(iv); res(Number(m[1])); } }, 50);
});
const BASE = `http://127.0.0.1:${port}`;
console.log('server on', BASE);

const health = async () => (await fetch(`${BASE}/healthz`)).json();
async function waitPhase(phase, timeout = 120000) {
  const t0 = Date.now();
  for (;;) {
    const h = await health();
    if ((Array.isArray(phase) ? phase : [phase]).includes(h.phase)) return h;
    if (Date.now() - t0 > timeout) throw new Error(`timeout waiting for ${phase}; at ${h.phase}`);
    await new Promise((r) => setTimeout(r, 150));
  }
}

const browser = await chromium.launch({ headless: !arg('headed'), args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const external = [];
const errors = [];
async function ctx(opts, label) {
  const c = await browser.newContext(opts);
  await c.route('**/*', (route) => {
    const u = new URL(route.request().url());
    if (['127.0.0.1', 'localhost'].includes(u.hostname) || u.protocol === 'data:' || u.protocol === 'blob:') return route.continue();
    external.push(`${label}: ${u.href}`);
    return route.abort();
  });
  const page = await c.newPage();
  page.on('pageerror', (e) => errors.push(`${label} pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${label} console: ${m.text()}`); });
  return page;
}
const shot = async (page, name) => { await page.screenshot({ path: path.join(OUT, `${name}.png`) }); console.log('  shot', name); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ok = false;
try {
  const tv = await ctx({ viewport: { width: 1920, height: 1080 } }, 'tv');
  const phoneOpts = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
  const pa = await ctx(phoneOpts, 'phoneA');
  const pb = await ctx({ ...phoneOpts, viewport: { width: 360, height: 740 } }, 'phoneB');

  await tv.goto(`${BASE}/tv?autostart&speed=${SPEED}&race=${RACE}&mute`);
  await tv.waitForSelector('.lobby .qr svg');
  await sleep(600);
  await shot(tv, '01-tv-lobby-empty');

  // settings: rounds -> ROUNDS
  for (let i = 0; i < 12; i++) {
    const cur = await tv.$eval('[data-k="roundsPerGame"] .val', (e) => Number(e.textContent));
    if (cur === ROUNDS) break;
    await tv.click(`[data-k="roundsPerGame"] [data-d="${cur > ROUNDS ? -1 : 1}"]`);
    await sleep(120);
  }

  // phones join
  await pa.goto(`${BASE}/phone`);
  await pa.waitForSelector('#nm');
  await pa.fill('#nm', 'Mark');
  await pa.click('[data-emoji="🦖"]');
  await pa.click('[data-colour="#2f8cff"]');
  await shot(pa, '02-phoneA-join');
  await pa.click('#joinbtn');
  await pa.waitForSelector('.hero-title');
  await pb.goto(`${BASE}/phone`);
  await pb.waitForSelector('#nm');
  await pb.fill('#nm', 'Jo');
  await pb.click('[data-emoji="🦄"]');
  await pb.click('[data-colour="#ff6fb5"]');
  await pb.click('#joinbtn');
  await pb.waitForSelector('.hero-title');
  await sleep(500);
  await shot(pa, '03-phoneA-lobby');
  await shot(tv, '04-tv-lobby-players');

  // reconnect check in lobby: reload phone A -> still joined (token in localStorage)
  await pa.reload();
  await pa.waitForSelector('.hero-title');

  // both ready -> INTRO
  await pa.click('#readybtn');
  await pb.click('#readybtn');
  const h = await waitPhase('INTRO');
  console.log('round source:', h.source);
  await sleep(300);
  await shot(tv, '05-tv-intro-title');
  await tv.waitForSelector('.rcard', { timeout: 30000 });
  await sleep(500);
  await shot(tv, '06-tv-intro-runner');
  await pa.waitForSelector('.rcard');
  await shot(pa, '07-phoneA-intro-cards');

  for (let round = 1; round <= ROUNDS; round++) {
    await waitPhase('BETTING', 120000);
    await pa.waitForSelector('#lockbtn:not([disabled])');
    await sleep(400);
    if (round === 1) await shot(tv, '08-tv-betting');
    // phone A: back runner 1 to win, +50, and a head-to-head pick
    await pa.click('.rcard[data-rid] [data-win]');
    await pa.click('.sbet [data-chip="50"]');
    const pick = await pa.$('.pick');
    if (pick) await pick.click();
    await sleep(300);
    if (round === 1) {
      await shot(pa, '09-phoneA-slip-top');
      await pa.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await sleep(200);
      await shot(pa, '10-phoneA-slip-bottom');
    }
    // mid-betting reconnect: reload phone A, slip must survive
    if (round === 1) {
      await pa.reload();
      await pa.waitForSelector('.sbet');
      const n = await pa.$$eval('.sbet', (x) => x.length);
      if (n < 1) throw new Error('slip lost after reload');
    }
    await pa.click('#lockbtn');
    await pa.waitForSelector('.sheet #yep');
    if (round === 1) await shot(pa, '11-phoneA-confirm');
    await pa.click('#yep');
    await pa.waitForSelector('#waitlist');
    await sleep(300);
    if (round === 1) { await shot(pa, '12-phoneA-locked'); await shot(tv, '13-tv-betting-onelocked'); }
    // TV must not know bets yet
    const leak = await tv.evaluate(() => document.body.innerText.includes('to WIN'));
    if (leak) throw new Error('TV shows bets before everyone locked');
    // phone B: swipe to the 3rd runner and back it, all in
    await pb.$eval('#car', (c) => { c.scrollLeft = c.firstElementChild.getBoundingClientRect().width * 2 + 24; });
    await sleep(300);
    const cards = await pb.$$('.rcard [data-win]');
    await cards[Math.min(2, cards.length - 1)].click();
    await pb.click('.sbet [data-chip="all"]');
    if (round === 1) await shot(pb, '14-phoneB-slip');
    await pb.click('#lockbtn');
    await pb.click('#yep');
    // reveal
    await tv.waitForSelector('.reveal .betline.show', { timeout: 20000 });
    await sleep(Math.max(400, 3000 / SPEED));
    if (round === 1) { await shot(tv, '15-tv-reveal'); await shot(pb, '16-phoneB-revealed'); }
    await waitPhase('RACE', 60000);
    await pa.waitForSelector('.react-grid');
    await sleep(1500);
    if (round === 1) {
      await shot(pa, '17-phoneA-race');
      for (const e of ['😱', '🔥', '😂']) { await pa.click(`[data-react="${e}"]`); await sleep(280); }
      await pb.click('[data-react="🍺"]');
      await sleep(500);
      await shot(tv, '18-tv-race');
      await sleep(Math.max(1500, 40000 / SPEED));
      await shot(tv, '19-tv-race-later');
    }
    await waitPhase('RESULTS', 400000);
    const stages = ['order', 'reveal', 'clues', 'payouts', 'awards'];
    for (let i = 0; i < stages.length; i++) {
      const t0 = Date.now();
      // wait until the TV reports it's on stage i (or the phase moved on)
      for (;;) {
        const st = await tv.evaluate(() => window.__markrun.events.filter((e) => e.type === 'results-stage').map((e) => e.stage).at(-1));
        const hh = await health();
        if (st === stages[i] || hh.phase !== 'RESULTS') break;
        if (Date.now() - t0 > 60000) throw new Error(`stuck before results stage ${stages[i]}`);
        await sleep(150);
      }
      if ((await health()).phase !== 'RESULTS') break;
      await sleep(Math.max(900, 9000 / SPEED));
      if (round === 1) await shot(tv, `20-tv-results-${i}-${stages[i]}`);
      if (round === 1 && stages[i] === 'payouts') { await pa.waitForSelector('.net-big'); await shot(pa, '21-phoneA-payout'); await shot(pb, '22-phoneB-payout'); }
    }
    await waitPhase('SCOREBOARD', 120000);
    await sleep(800);
    if (round === 1) { await shot(tv, '23-tv-scoreboard'); await shot(pa, '24-phoneA-scoreboard'); }
    // ready up on both phones -> next round / finale
    await pa.waitForSelector('#readybtn');
    await pa.click('#readybtn');
    await pb.click('#readybtn');
    if (round < ROUNDS) await waitPhase('INTRO', 30000);
  }
  await waitPhase('FINALE', 30000);
  await sleep(2500);
  await shot(tv, '25-tv-finale');
  await shot(pa, '26-phoneA-finale');

  // restart-resume: host restarts during FINALE, TV/phones reconnect
  ok = true;
} catch (e) {
  console.error('E2E FAILED:', e.stack || e.message);
  console.error('--- server output ---\n' + srvOut.slice(-4000));
} finally {
  await browser.close();
  srv.kill('SIGTERM');
}
if (external.length) { console.error('EXTERNAL REQUESTS ATTEMPTED:\n  ' + external.join('\n  ')); ok = false; }
else console.log('network: no external requests attempted ✓');
const realErrors = errors.filter((e) => !/WebSocket|ERR_ABORTED|favicon/.test(e));
if (realErrors.length) { console.error('PAGE ERRORS:\n  ' + realErrors.join('\n  ')); ok = false; }
console.log(ok ? `E2E PASSED — screenshots in ${path.relative(ROOT, OUT)}/` : 'E2E FAILED');
process.exit(ok ? 0 : 1);
