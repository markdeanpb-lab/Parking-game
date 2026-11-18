// Contact-sheet harness for the race broadcast (headless Chromium + SwiftShader).
//   node client/tv/race/sheet.mjs <fixture|-> <name> [--theme=winter] [--backed=r2,r4] [--race] [--finish] [--intro] [--hud]
// --race   16 frames spread over the whole broadcast (pre-roll -> finish), 4x4 sheet (--few: 6 frames, 3x2)
// --finish the finish set-piece played in real time from ~10 s out (approach, line, slow-mo, photo, replay, stamp)
// --intro  title flyover + two runner close-ups + group
// --hud    one full-size 1920x1080 mid-race frame
// Frames + sheets land in tests/out/3d2/. Each cell is labelled with broadcast time, shot type and the tallest runner's
// height as a fraction of the frame height.
import { createRequire } from 'node:module';
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const root = new URL('../../../', import.meta.url).pathname;
const out = root + 'tests/out/3d2/'; fs.mkdirSync(out, { recursive: true });
const args = process.argv.slice(2);
const fixture = args[0] && args[0] !== '-' ? args[0] : '';
const name = args[1] || (fixture || 'round');
const flag = (k) => args.find((a) => a === `--${k}` || a.startsWith(`--${k}=`));
const val = (k) => flag(k)?.split('=')[1];
const W = Number(process.env.W || 1920), H = Number(process.env.H || 1080);
const port = 8000 + Math.floor(Math.random() * 900);
const srv = spawn('node', [root + 'client/tv/race/devserver.mjs', String(port)], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 600));
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.type(), m.text().slice(0, 300)); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
const q = new URLSearchParams({ shot: '1', auto: '0' });
if (fixture) q.set('fixture', fixture);
if (val('theme')) q.set('theme', val('theme'));
if (val('backed')) q.set('backed', val('backed'));
await page.goto(`http://localhost:${port}/client/tv/race/preview.html?${q}`);
await page.waitForFunction(() => window.__ready || window.__error, null, { timeout: 180000 });
const err = await page.evaluate(() => window.__error || '');
if (err) { console.log('ERROR', err); process.exit(1); }
await page.evaluate(() => document.fonts?.ready);

async function label() {
  return page.evaluate(() => {
    const d = window.view._debug; const sh = d.director?.shot;
    return { b: d.b, shot: sh ? sh.type : d.mode, frac: d.runnerFrac ? d.runnerFrac() : 0 };
  });
}
async function snap(file) { await page.waitForTimeout(450); await page.screenshot({ path: out + file, ...(file.endsWith('.jpg') ? { type: 'jpeg', quality: 88 } : { type: 'png' }) }); }
function sheet(files, labels, outFile, cols = 4) {
  const tiles = files.map((f, i) => ['-label', labels[i], out + f]).flat();
  execFileSync('montage', [...tiles, '-tile', `${cols}x`, '-geometry', '480x270+2+2', '-pointsize', '15', '-fill', 'white', '-background', '#111', '-font', 'DejaVu-Sans-Mono', out + outFile]);
}

if (flag('race')) {
  const { dur, pre, fin } = await page.evaluate(() => ({ dur: window.view.durationS, pre: window.view.preRollS, fin: window.view._debug.sim.firstFinishB }));
  const times = [];
  if (flag('few')) times.push(1.5, 30, 55, 85, fin - 6, fin + 4); // --few: 6 frames (theme variants)
  else {
    times.push(-6, 1.5);
    const a = 8, b = fin - 14; for (let i = 0; i < 11; i++) times.push(a + ((b - a) * i) / 10);
    times.push(fin - 6, fin - 1.5, fin + 4);
  }
  const files = [], labels = [];
  for (const [i, t] of times.entries()) {
    await page.evaluate((t) => window.view._debug.seek(t, 2.5), t);
    const f = `${name}-${String(i).padStart(2, '0')}.jpg`; await snap(f);
    const L = await label(); files.push(f); labels.push(`${t.toFixed(1)}s ${L.shot} h=${Math.round(L.frac * 100)}%`);
    console.log(f, labels.at(-1));
  }
  sheet(files, labels, `${name}-sheet.jpg`, flag('few') ? 3 : 4);
  void dur; void pre;
}
if (flag('finish')) {
  // play the finish in (simulated) real time and grab frames
  const fin = await page.evaluate(() => window.view._debug.sim.firstFinishB);
  await page.evaluate((t) => { const d = window.view._debug; d.seek(t, 2.5); d.unpause(); }, fin - 10);
  const grabs = [0, 6, 9, 9.8, 10.4, 11.4, 12.6, 14.2, 16.5, 19.5, 23, 27];
  const files = [], labels = []; let clock = 0;
  for (const [i, g] of grabs.entries()) {
    await page.evaluate((dt) => { const d = window.view._debug; let left = dt; while (left > 1e-6) { const s = Math.min(left, 1 / 30); left -= s; d.step(s, false); } d.render(); }, g - clock);
    clock = g;
    const f = `${name}-fin-${String(i).padStart(2, '0')}.jpg`; await snap(f);
    const L = await label(); files.push(f); labels.push(`+${g.toFixed(1)}s b=${L.b.toFixed(1)} ${L.shot} h=${Math.round(L.frac * 100)}%`);
    console.log(f, labels.at(-1));
  }
  sheet(files, labels, `${name}-finish-sheet.jpg`);
}
if (flag('intro')) {
  const files = [], labels = [];
  for (const [i, [idx, t]] of [[-1, 2.5], [0, 1.5], [2, 1.5], [5, 1]].entries()) {
    await page.evaluate(([idx, t]) => window.view._debug.introAt(idx, t), [idx, t]);
    const f = `${name}-intro-${i}.jpg`; await snap(f); files.push(f); labels.push(`intro ${idx}`);
  }
  sheet(files, labels, `${name}-intro-sheet.jpg`, 2);
}
if (flag('hud')) {
  const t = Number(val('hud')) || 60;
  // play the last 1.5 s for real (breath puffs, particles, emotes are live), then grab
  await page.evaluate((t) => { const d = window.view._debug; d.seek(t - 1.5, 2.5); d.unpause(); for (let i = 0; i < 45; i++) d.step(1 / 30, false); d.render(); }, t);
  await snap(`${name}-hud.png`);
  console.log('hud', JSON.stringify(await label()));
}
await browser.close(); srv.kill();
