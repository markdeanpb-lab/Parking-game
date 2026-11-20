// Proof shots for release/hijinks-preview.html, taken from the standalone page itself over file:// (headless Chromium).
//   node tools/shoot_hijinks_preview.mjs [hijinks|race|all] [--html release/hijinks-preview.html] [--every 2.5]
// Writes tests/out/hijinks/*.png and reports every network request the page made (there should be none).
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT || '/opt/node-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
const what = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'all';
const HTML = path.resolve(ROOT, arg('html', 'release/hijinks-preview.html'));
const OUT = path.resolve(ROOT, arg('outdir', 'tests/out/hijinks')); fs.mkdirSync(OUT, { recursive: true });
const EVERY = Number(arg('every', 2.5));
const only = arg('only', '');

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const net = [];
page.on('request', (r) => { const u = r.url(); if (!u.startsWith('data:') && !u.startsWith('blob:') && u !== `file://${HTML}?shot=1`) net.push(u); });
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.type(), m.text().slice(0, 300)); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
await page.goto(`file://${HTML}?shot=1`);
await page.waitForFunction(() => window.__ready, null, { timeout: 120000 });
await page.screenshot({ path: path.join(OUT, 'title.png') });
await page.evaluate(() => { window.__start(); document.getElementById('title').style.transition = 'none'; });
const settle = () => page.evaluate(() => { window.__tick(); for (const a of document.getAnimations()) { try { if (a.effect?.getComputedTiming?.().iterations !== Infinity) a.finish(); } catch { /* */ } } });
// step the manual loop to broadcast time `to` (renders only the last frame)
const stepTo = (to) => page.evaluate((to) => { const d = window.view._debug; let n = 0; while (d.b < to - 1e-4 && n++ < 20000) d.step(1 / 30, false); d.render(); return d.b; }, to);
const shoot = async (name) => { await settle(); await page.waitForTimeout(120); await page.screenshot({ path: path.join(OUT, `${name}.png`) }); };
const info = () => page.evaluate(() => { const d = window.view._debug; const s = d.director?.shot; return { b: +d.b.toFixed(2), shot: s ? `${s.type} ${s.kind || ''} ${s.reason || ''}`.slice(0, 90) : '', sub: document.getElementById('subs').textContent, chip: document.querySelector('.mrh-chip.on')?.textContent || '' }; });

const hj = await page.evaluate(() => window.__data.plan.hijinks);
if (what === 'hijinks' || what === 'all') {
  for (const h of hj) {
    if (only && !only.split(',').includes(h.id)) continue;
    const L = h.untilBroadcastS - h.atBroadcastS;
    const ts = h.params.passB != null ? [h.params.passB - 0.9, h.params.passB, h.params.passB + 1.4] : [h.atBroadcastS + 0.9, h.atBroadcastS + L * 0.5, h.untilBroadcastS - 0.6];
    await page.evaluate((b0) => { window.view._debug.seek(b0, 1.2); window.view._debug.unpause(); }, h.atBroadcastS - 3);
    for (const [i, t] of ts.entries()) {
      await stepTo(t);
      await shoot(`${h.id}_${h.kind}_${i + 1}`);
      console.log(h.id, h.kind, i + 1, JSON.stringify(await info()));
    }
  }
}
if (what === 'race' || what === 'all') {
  await page.evaluate(() => { window.__start(); });
  const end = await page.evaluate(() => window.view._debug.sim.lastFinishB + 3);
  let n = 0;
  for (let t = -8.5 + EVERY; t <= end; t += EVERY) {
    const b = await stepTo(t);
    await shoot(`race_${String(++n).padStart(3, '0')}`);
    const i = await info();
    console.log('race', n, JSON.stringify(i));
    if (b < t - 1) { console.log('clock held (photo / replay) at', b); }
  }
}
console.log('NETWORK REQUESTS:', net.length ? net : 'none');
await browser.close();
