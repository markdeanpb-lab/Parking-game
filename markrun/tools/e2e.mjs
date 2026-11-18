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
const RESTART_AFTER = Number(arg('restart-after', 0));
const env = { ...process.env, PORT: String(arg('port', RESTART_AFTER ? 18790 : 0)), MARKRUN_SESSION_DB: path.join(tmp, 'session.db'), MARKRUN_HOST: '127.0.0.1', MARKRUN_MARKET_MS: process.env.MARKRUN_MARKET_MS || '20000' };
if (SOURCE === 'fixture') env.MARKRUN_ROUND_SOURCE = 'fixture';
let srv, srvOut = '', stopping = false;
async function startServer(fresh) {
  srvOut = '';
  srv = spawn(process.execPath, ['--disable-warning=ExperimentalWarning', 'server/index.mjs', ...(fresh ? ['--fresh'] : [])], { cwd: ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });
  srv.stdout.on('data', (d) => { srvOut += d; });
  srv.stderr.on('data', (d) => { srvOut += d; });
  srv.on('exit', (code, sig) => { if (!stopping) console.log(`  [host exited code=${code} signal=${sig}]`); });
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error(`server did not start:\n${srvOut}`)), 15000);
    const iv = setInterval(() => { const m = srvOut.match(/MARKRUN_READY port=(\d+)/); if (m) { clearTimeout(t); clearInterval(iv); res(Number(m[1])); } }, 50);
  });
}
const port = await startServer(true);
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
const pages = [];
async function ctx(opts, label) {
  const c = await browser.newContext(opts);
  await c.route('**/*', (route) => {
    const u = new URL(route.request().url());
    if (['127.0.0.1', 'localhost'].includes(u.hostname) || u.protocol === 'data:' || u.protocol === 'blob:') return route.continue();
    external.push(`${label}: ${u.href}`);
    return route.abort();
  });
  const page = await c.newPage();
  pages.push([label, page]);
  page.on('pageerror', (e) => errors.push(`${label} pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${label} console: ${m.text()}`); });
  return page;
}
const shot = async (page, name) => { const t0 = Date.now(); try { await page.waitForFunction(() => !document.querySelector('#wipe.go'), null, { timeout: 3000 }).catch(() => {}); await page.screenshot({ path: path.join(OUT, `${name}.png`), timeout: 60000 }); console.log('  shot', name, `${Date.now() - t0}ms`); } catch (e) { console.log('  shot FAILED (slow headless GPU?)', name, e.message.split('\n')[0]); } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ok = false;
let inplayPlaced = 0;
try {
  const tv = await ctx({ viewport: { width: 1920, height: 1080 } }, 'tv');
  const phoneOpts = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
  const pa = await ctx(phoneOpts, 'phoneA');
  const pb = await ctx({ ...phoneOpts, viewport: { width: 360, height: 740 } }, 'phoneB');

  await tv.goto(`${BASE}/tv?autostart&speed=${SPEED}&race=${RACE}&mute`);
  await tv.waitForSelector('.lobby .qr svg');
  await sleep(600);
  await shot(tv, '01-tv-lobby-empty');
  // "Refresh Historical Data" confirmation (cancelled: e2e must never go online)
  await tv.click('[data-options]');
  await tv.click('#tvmodal [data-refresh]');
  await tv.waitForSelector('#tvmodal [data-ok]');
  await sleep(700);
  await shot(tv, '01b-tv-refresh-confirm');
  await tv.click('#tvmodal [data-cancel]');

  // settings live behind one "Options" button: rounds -> ROUNDS
  await tv.click('[data-options]');
  await tv.waitForSelector('#tvmodal [data-k="roundsPerGame"]');
  for (let i = 0; i < 12; i++) {
    const cur = await tv.$eval('#tvmodal [data-k="roundsPerGame"] .val', (e) => Number(e.textContent));
    if (cur === ROUNDS) break;
    await tv.click(`#tvmodal [data-k="roundsPerGame"] [data-d="${cur > ROUNDS ? -1 : 1}"]`);
    await sleep(200);
  }
  await shot(tv, '01c-tv-options');
  await tv.click('#tvmodal [data-ok]');

  // phones join
  await pa.goto(`${BASE}/phone`);
  await pa.waitForSelector('#nm');
  await pa.fill('#nm', 'Mark');
  await pa.click('[data-emoji="🦖"]');
  await pa.click('[data-colour="#2f8cff"]');
  await shot(pa, '02-phoneA-join');
  await pa.click('#joinbtn');
  await pa.waitForSelector('#markbtn');
  await pb.goto(`${BASE}/phone`);
  await pb.waitForSelector('#nm');
  await pb.fill('#nm', 'Jo');
  await pb.click('[data-emoji="🦄"]');
  await pb.click('[data-colour="#ff6fb5"]');
  await pb.click('#joinbtn');
  await pb.waitForSelector('#markbtn');
  // "I'm Mark (the runner)" on phone A: phone B gets an extra hot tip
  await pa.waitForSelector('#markbtn');
  await pa.click('#markbtn');
  await tv.waitForFunction(() => document.body.innerText.includes('THE REAL MARK'), null, { timeout: 5000 });
  await sleep(500);
  await shot(pa, '03-phoneA-lobby');
  await shot(tv, '04-tv-lobby-players');

  // reconnect check in lobby: reload phone A -> still joined (token in localStorage)
  await pa.reload();
  await pa.waitForSelector('#markbtn');

  // both ready -> INTRO
  await pa.click('#readybtn');
  await pb.click('#readybtn');
  const h = await waitPhase('INTRO');
  console.log('round source:', h.source);
  await sleep(300);
  await shot(tv, '05-tv-intro-title');
  await tv.waitForSelector('.intro .l3, .intro .explain, .betting', { timeout: 30000 });
  await sleep(500);
  await shot(tv, '06-tv-intro-runner');
  await pa.waitForSelector('.flow');
  await shot(pa, '07-phoneA-intro-runner');

  for (let round = 1; round <= ROUNDS; round++) {
    const hb = await waitPhase('BETTING', 120000);
    if (SOURCE !== 'fixture' && hb.source !== 'game') throw new Error(`round ${round} did not come from the real game module (source=${hb.source})`);
    console.log(`round ${round}: source=${hb.source} bankrolls=${JSON.stringify(hb.bankrolls)}`);
    await sleep(400);
    if (round === 1) await shot(tv, '08-tv-betting');
    // phone A (click-through flow): back runner 1 to win (+50), pick a head-to-head side, a side bet, then review
    await pa.click('.strip .face:first-child');
    await pa.click('[data-open="win"]');
    await pa.click('[data-add="clear"]');
    await pa.click('[data-add="50"]');
    if (round === 1) await shot(pa, '09-phoneA-tray');
    await pa.click('[data-tray="ok"]');
    if (round === 1) await shot(pa, '10-phoneA-runner-backed');
    const h2hDot = await pa.$('.strip .sdots i');
    if (h2hDot) {
      await h2hDot.click();
      if (await pa.$('.side[data-open="h2h"]')) {
        await pa.click('.side[data-open="h2h"]'); await pa.click('[data-tray="ok"]');
        if (round === 1) await shot(pa, '10b-phoneA-h2h');
      }
    }
    // the side bet is the last small dot (before Review), if offered
    const dots = await pa.$$('.strip .sdots i');
    if (dots.length) {
      await dots[dots.length - 1].click();
      if (await pa.$('.side.yn.yes')) { await pa.click('.side.yn.yes'); await pa.click('[data-tray="ok"]'); if (round === 1) { console.log('  prop bet placed'); await shot(pa, '10c-phoneA-sidebet'); } }
    }
    await pa.click('.rvbtn');
    await pa.waitForSelector('#holdlock');
    if (round === 1) await shot(pa, '11-phoneA-review');
    // mid-betting reconnect: reload phone A, slip must survive
    if (round === 1) {
      await pa.reload();
      await pa.waitForSelector('.flow');
      await pa.click('.rvbtn');
      const n = await pa.$$eval('.rv-line', (x) => x.length);
      if (n < 2) throw new Error('slip lost after reload');
    }
    const hold = async (pg) => {
      const bx = await (await pg.waitForSelector('#holdlock')).boundingBox();
      await pg.mouse.move(bx.x + bx.width / 2, bx.y + bx.height / 2);
      await pg.mouse.down(); await sleep(900); await pg.mouse.up();
    };
    await hold(pa);
    await pa.waitForFunction(() => document.body.innerText.includes('Locked in!'), null, { timeout: 10000 });
    await sleep(300);
    if (round === 1) { await shot(pa, '12-phoneA-locked'); await shot(tv, '13-tv-betting-onelocked'); }
    // TV must not know bets yet
    const leak = await tv.evaluate(() => document.body.innerText.includes('to WIN'));
    if (leak) throw new Error('TV shows bets before everyone locked');
    // phone B: jump to the 3rd runner and back it with the round's MAX
    await pb.click('.strip .face:nth-child(3)');
    await pb.click('[data-open="win"]');
    await pb.click('[data-add="max"]');
    if (round === 1) await shot(pb, '14-phoneB-max');
    await pb.click('[data-tray="ok"]');
    await pb.click('.rvbtn');
    await hold(pb);
    // reveal
    await tv.waitForSelector('.faceoff .fchip, .faceoff .fside, .faceoff .clash-stamp', { timeout: 20000 });
    await sleep(Math.max(400, 3000 / SPEED));
    if (round === 1) { await shot(tv, '15-tv-reveal'); await shot(pb, '16-phoneB-revealed'); }
    await waitPhase('RACE', 60000);
    await pa.waitForSelector('.reacts');
    // HALFWAY MARKET: both phones get the sheet; A bets on the leader, B on the 2nd
    {
      const t0 = Date.now();
      let opened = false;
      while (Date.now() - t0 < 300000) {
        if ((await health()).phase !== 'RACE') break;
        if (await pa.$('#modal .mkr:not([disabled])')) { opened = true; break; }
        await sleep(200);
      }
      if (opened) try {
        if (round === 1) { await sleep(300); await shot(pa, '19b-phoneA-market'); }
        await pa.click('[data-ms="100"]', { timeout: 3000 }).catch(() => {});
        await pa.click('#modal .mkr:not([disabled])', { timeout: 5000 });
        const pbRow = await pb.$$('#modal .mkr:not([disabled])');
        if (pbRow[1]) await pbRow[1].click({ timeout: 5000 });
        if (round === 1) await shot(tv, '19c-tv-market');
        await pa.waitForFunction(() => document.querySelector('#modal .done') || document.body.innerText.includes('(halfway)'), null, { timeout: 15000 });
        if (round === 1) { await shot(pa, '19d-phoneA-market-placed'); await sleep(300); await shot(tv, '19e-tv-market-bets'); }
        console.log(`  round ${round}: halfway (inplay) bets placed`);
        inplayPlaced++;
        await sleep(1500);
        await pa.waitForFunction(() => !document.querySelector('#modal .market'), null, { timeout: 30000 });
        if (round === 1) await shot(pa, '19f-phoneA-live');
      } catch (e) { console.log(`  round ${round}: market closed before the bot could bet (slow headless) - ${e.message.split('\n')[0]}`); }
      else console.log(`  round ${round}: no halfway market (2nd was >20 s behind, or not offered)`);
    }
    if (round === 1 && (await health()).phase === 'RACE') {
      await shot(pa, '17-phoneA-race');
      if ((await health()).phase === 'RACE') {
        for (const e of ['😱', '🔥', '😂']) { await pa.click(`[data-react="${e}"]`, { timeout: 3000 }).catch(() => {}); await sleep(250); }
        await pb.click('[data-react="🍺"]', { timeout: 3000 }).catch(() => {});
        await sleep(400);
        await shot(tv, '18-tv-race');
      }
    }
    const atRes = await waitPhase(['RESULTS', 'SCOREBOARD'], 400000);
    if (atRes.phase !== 'RESULTS') console.log('  (results already over by the time screenshots finished — slow headless GPU)');
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
      if (round === 1 && stages[i] === 'payouts') {
        await pa.waitForSelector('.net-big', { timeout: 10000 });
        await Promise.all([shot(pa, '21-phoneA-payout'), shot(pb, '22-phoneB-payout')]);
        await sleep(Math.max(1500, 22000 / SPEED));
      } else await sleep(Math.max(900, 9000 / SPEED));
      if (round === 1) await shot(tv, `20-tv-results-${i}-${stages[i]}`);
    }
    await waitPhase('SCOREBOARD', 120000);
    await sleep(800);
    if (round === 1) { await shot(tv, '23-tv-scoreboard'); await shot(pa, '24-phoneA-scoreboard'); }
    if (round === RESTART_AFTER) {
      const before = await health();
      console.log(`RESTART TEST: killing host during SCOREBOARD of round ${round}`, JSON.stringify(before));
      srv.kill('SIGKILL');
      await sleep(1500);
      const p2 = await startServer(false);
      if (p2 !== port) throw new Error(`restarted on a different port ${p2}`);
      const after = await waitPhase('SCOREBOARD', 20000);
      console.log('RESTART TEST: host back', JSON.stringify(after));
      if (JSON.stringify(after.bankrolls ?? after.players ?? null) !== JSON.stringify(before.bankrolls ?? before.players ?? null)) throw new Error('session state changed across restart');
      await pa.waitForSelector('#readybtn', { timeout: 30000 });
      await sleep(3000); // phones/TV reconnect with their tokens
      await shot(tv, `restart-tv-after-round${round}`);
      await shot(pa, `restart-phoneA-after-round${round}`);
    }
    // ready up on both phones -> next round / finale
    await pa.waitForSelector('#readybtn');
    await pa.click('#readybtn');
    await pb.click('#readybtn');
    if (round < ROUNDS) await waitPhase('INTRO', 30000);
  }
  await waitPhase('FINALE', 30000);
  await sleep(2500);
  await shot(tv, '25-tv-finale');
  await sleep(Math.max(1500, 9000 / SPEED));
  await shot(tv, '25b-tv-finale-reel');
  await shot(pa, '26-phoneA-finale');

  // restart-resume: host restarts during FINALE, TV/phones reconnect
  if (!inplayPlaced) console.log('  NOTE: no halfway market this game (it is skipped when 2nd is >20 s behind at halfway)');
  ok = true;
} catch (e) {
  console.error('E2E FAILED:', e.stack || e.message);
  try { await Promise.all(pages.map(([n, pg]) => pg.screenshot({ path: path.join(OUT, `FAIL-${n}.png`) }))); } catch { /* */ }
  console.error('page errors so far:', errors.slice(0, 10).join('\n'));
  console.error('--- server output ---\n' + srvOut.slice(-4000));
} finally {
  await browser.close();
  stopping = true;
  srv.kill('SIGTERM');
}
if (external.length) { console.error('EXTERNAL REQUESTS ATTEMPTED:\n  ' + external.join('\n  ')); ok = false; }
else console.log('network: no external requests attempted ✓');
const realErrors = errors.filter((e) => !/WebSocket|ERR_ABORTED|favicon/.test(e));
if (realErrors.length) { console.error('PAGE ERRORS:\n  ' + realErrors.join('\n  ')); ok = false; }
console.log(ok ? `E2E PASSED — screenshots in ${path.relative(ROOT, OUT)}/` : 'E2E FAILED');
process.exit(ok ? 0 : 1);
