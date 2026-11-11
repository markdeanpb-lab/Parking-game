#!/usr/bin/env node
// In-game vehicle close-ups (needs dist/game.js built + playwright).  node tests/carshow/ingame.mjs [outdir]
import { createRequire } from 'module';
import http from 'http'; import fs from 'fs'; import path from 'path';
const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const out = path.resolve(process.argv[2] || path.join(root, 'tests/out/vehicle-art/ingame'));
fs.mkdirSync(out, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((req, res) => { const u = decodeURIComponent(req.url.split('?')[0]); fs.readFile(path.join(root, u === '/' ? '/index.html' : u), (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(u)] || 'text/html' }); res.end(d); } }); }).listen(0);
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message));
await page.goto(`http://localhost:${server.address().port}/index.html?seed=5`);
await page.waitForFunction(() => window.__pp && window.__pp.ui.screen === 'title', null, { timeout: 60000 });
await page.evaluate(() => { try { localStorage.setItem('pp_tutorial', '1'); } catch (e) {} });
const shot = async (n) => { await page.waitForTimeout(600); await page.screenshot({ path: path.join(out, n + '.png') }); console.log('saved', n); };
const cam = (pos, look) => page.evaluate(([p, l]) => { window.__pp.debugCam = p ? { pos: p, look: l } : null; }, [pos, look]);
// view a parked car of a type from its 3/4 front at eye height
const viewParked = (type, idx = 0, dist = 7, side = 1, h = 1.7) => page.evaluate(([t, i, d, sd, hh]) => {
  const p = window.__pp.track.parked.filter((q) => q.type === t)[i]; if (!p) return null;
  const fx = Math.cos(p.h), fz = Math.sin(p.h);
  return [[p.x + fx * d * 0.8 - fz * sd * d * 0.6, hh, p.z + fz * d * 0.8 + fx * sd * d * 0.6], [p.x, 0.8, p.z]];
}, [type, idx, dist, side, h]);
await page.evaluate(() => document.getElementById('screen-title').classList.add('hidden'));
for (const [t, i] of [['camper', 0], ['camper', 2], ['bigsuv', 0], ['suv', 1], ['hatch', 2], ['estate', 0], ['van', 0], ['saloon', 1]]) {
  for (const sd of [1, -1]) { const v = await viewParked(t, i, 7, sd); if (v) { await cam(v[0], v[1]); await shot(`parked-${t}${i}-${sd > 0 ? 'a' : 'b'}`); } }
}
await cam(null);
await page.evaluate(() => { window.__pp.ui.show('title'); });
await page.click('[data-mode="classic"]'); await page.waitForTimeout(800);
const ff = (cond, max = 9000) => page.evaluate(([c, m]) => { const g = window.__pp.game; let n = 0; const f = new Function('g', 'return ' + c); while (!f(g) && n++ < m) g.update(1 / 60); return g.phase; }, [cond, max]);
await ff("g.phase==='music' && g.phaseT>16");
await shot('chase-music');
// rivals close up (behind-and-above, like a chase camera)
const rivals = await page.evaluate(() => window.__pp.game.drivers.filter((d) => d.p && d.p.key).map((d) => d.p.key));
for (const key of rivals) {
  const v = await page.evaluate((k) => { const d = window.__pp.game.drivers.find((x) => x.p.key === k); const c = d.car; return [[c.x - Math.cos(c.h) * 7, 3.4, c.z - Math.sin(c.h) * 7], [c.x + Math.cos(c.h) * 2, 0.9, c.z + Math.sin(c.h) * 2], [c.x + Math.cos(c.h) * 5 + Math.sin(c.h) * 3, 1.6, c.z + Math.sin(c.h) * 5 - Math.cos(c.h) * 3]]; }, key);
  await cam(v[0], v[1]); await shot(`rival-${key}-chase`);
  await cam(v[2], [v[1][0], 0.8, v[1][2]]); await shot(`rival-${key}-front`);
}
// bin lorry
await page.evaluate(() => { const g = window.__pp.game; g.event = 'binLorry'; g.eventDone = false; g.phaseT = 4; });
await ff("g.drivers.some((d)=>d.p.key==='lorry') ", 600);
await page.evaluate(() => { const g = window.__pp.game; for (let i = 0; i < 90; i++) g.update(1 / 60); });
const lv = await page.evaluate(() => { const d = window.__pp.game.drivers.find((x) => x.p.key === 'lorry'); if (!d) return null; const c = d.car; return [[c.x - Math.cos(c.h) * 13, 7, c.z - Math.sin(c.h) * 13], [c.x, 1.4, c.z], [c.x + Math.cos(c.h) * 10, 3.2, c.z + Math.sin(c.h) * 10]]; });
if (lv) { await cam(lv[0], lv[1]); await shot('lorry-chase'); await cam(lv[2], lv[1]); await shot('lorry-front'); }
await cam(null);
await browser.close(); server.close();
