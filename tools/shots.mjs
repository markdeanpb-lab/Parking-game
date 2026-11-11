#!/usr/bin/env node
// Screenshot rig for visual review.  node tools/shots.mjs <set> [outdir] [extra url params]
//   sets: streets   eye-level views that roughly match the reference photographs
//         play      title, round intro, music, the scramble, overhead cam, results, final, victory
//         phone     a few views at phone size with touch controls
//         all       streets + play
import { createRequire } from 'module';
import http from 'http'; import fs from 'fs'; import path from 'path';
const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const set = process.argv[2] || 'all';
const out = path.resolve(process.argv[3] || path.join(root, 'tests/out/shots'));
const extra = process.argv[4] || '';
fs.mkdirSync(out, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  fs.readFile(path.join(root, u === '/' ? '/index.html' : u), (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(u)] || 'text/html' }); res.end(d); } });
}).listen(0);
const phone = set === 'phone';
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: phone ? { width: 844, height: 390 } : { width: 1280, height: 720 }, hasTouch: phone });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
const shot = async (n) => { await page.screenshot({ path: path.join(out, n + '.png') }); console.log('saved', path.join(out, n + '.png')); };
const ff = (cond, max = 9000) => page.evaluate(([c, m]) => { const g = window.__pp.game; let n = 0; const f = new Function('g', 'return ' + c); while (!f(g) && n++ < m) g.update(1 / 60); return g.phase; }, [cond, max]);
const cam = (pos, look) => page.evaluate(([p, l]) => { window.__pp.debugCam = p ? { pos: p, look: l } : null; }, [pos, look]);
await page.goto(`http://localhost:${server.address().port}/index.html?seed=5&${extra}`);
await page.waitForFunction(() => window.__pp && window.__pp.ui.screen === 'title', null, { timeout: 60000 });
await page.evaluate(() => { try { localStorage.setItem('pp_tutorial', '1'); } catch (e) {} });
await page.waitForTimeout(1200);

// Eye-level views: [name, edgeId, arc s, look direction (+1 = with competition flow, -1 = against), lateral offset (m, + = right of flow)]
const STREET_VIEWS = [
  ['church-1-terraces', 'church', 150, -1, 0],
  ['church-2-junction', 'grangeBC', 118, 1, 0.8, 'church', 12],
  ['grange-3-campervans', 'grangeAB', 10, 1, 0],
  ['grange-3b-mid', 'grangeBC', 30, 1, 0],
  ['dalton-4-terraces', 'dalton', 120, 1, 0],
  ['dalton-5-far-end', 'dalton', 220, 1, 0],
  ['bernard-6-straight', 'bernard', 120, -1, 0],
  ['bernard-7-curve', 'bernard', 200, -1, 0],
];
async function streets() {
  await page.evaluate(() => { document.getElementById('screen-title').classList.add('hidden'); });
  for (const [name, edgeId, s, dir, lat, lookEdge, lookS] of STREET_VIEWS) {
    const v = await page.evaluate(([id, s, dir, lat, le, ls]) => {
      const T = window.__pp.track, e = T.edges[id]; const p = e.path.offsetAt(Math.min(s, e.len - 1), lat);
      const q = le ? T.edges[le].path.offsetAt(ls, 0) : e.path.offsetAt(Math.max(0, Math.min(e.len, s + dir * 30)), lat);
      return [[p.x, 1.75, p.z], [q.x, 1.3, q.z]];
    }, [edgeId, s, dir, lat, lookEdge || null, lookS || 0]);
    await cam(v[0], v[1]); await page.waitForTimeout(700); await shot('street-' + name);
  }
  await cam([-160, 60, 150], [-60, 0, 20]); await page.waitForTimeout(700); await shot('street-aerial');
  await cam(null);
}
async function play() {
  await cam(null);
  await page.evaluate(() => { const ui = window.__pp.ui; ui.show('title'); });
  await page.waitForTimeout(500); await shot('play-1-title');
  await page.click('[data-mode="classic"]'); await page.waitForTimeout(1500); await shot('play-2-intro');
  await ff("g.phase==='music' && g.phaseT>5"); await page.waitForTimeout(1500); await shot('play-3-music');
  await ff("g.phase==='park' && g.phaseT>0.3"); await page.waitForTimeout(700); await shot('play-4-music-stops');
  await ff("g.phase==='park' && g.phaseT>4"); await page.waitForTimeout(500); await shot('play-5-scramble');
  await page.keyboard.press('KeyC'); await page.waitForTimeout(1300); await shot('play-6-overhead'); await page.keyboard.press('KeyC');
  // watch a rival reverse in
  const m = await page.evaluate(() => { const g = window.__pp.game; let n = 0; while (!g.drivers.some((d) => d.state === 'manoeuvre' && d.pi > 15) && n++ < 3000) g.update(1 / 60); const d = g.drivers.find((x) => x.state === 'manoeuvre'); if (!d) return null; const c = d.car; return [[c.x - Math.cos(c.h) * 9 + Math.sin(c.h) * 4, 4, c.z - Math.sin(c.h) * 9 - Math.cos(c.h) * 4], [c.x, 0.8, c.z]]; });
  if (m) { await cam(m[0], m[1]); await page.waitForTimeout(800); await shot('play-7-rival-parking'); await cam(null); }
  await ff("g.phase==='roundEnd'");
  for (let i = 0; i < 40 && (await page.evaluate(() => window.__pp.ui.screen)) !== 'results'; i++) { if (i === 3) await shot('play-8-replay'); await page.waitForTimeout(600); }
  await shot('play-9-results');
  // jump to a final: knock everyone but the player and one rival out, keep the player alive
  await page.evaluate(() => { const g = window.__pp.game; g.pendingResult = 'next'; const keep = g.competitors.find((c) => !c.isPlayer && c.alive) || g.competitors.find((c) => !c.isPlayer); g.competitors.forEach((c) => { if (!c.isPlayer && c !== keep) { c.alive = false; c.outRound = c.outRound || 1; } }); keep.alive = true; keep.outRound = null; if (keep.driver) keep.driver.state = 'idle'; g.playerComp.alive = true; window.__pp.ui.hideScreens(); g.continue(); });
  await page.waitForTimeout(1500); await shot('play-10-final-intro');
  await ff("g.phase==='park' && g.phaseT>1"); await page.waitForTimeout(800); await shot('play-11-final-scramble');
  await page.evaluate(() => { const g = window.__pp.game; for (const c of g.competitors) if (!c.isPlayer) { c.alive = false; c.outRound = 2; } g.playerComp.parked = true; g.endRound(); });
  for (let i = 0; i < 40 && (await page.evaluate(() => window.__pp.ui.screen)) !== 'results'; i++) { await page.keyboard.press('KeyX'); await page.waitForTimeout(500); }
  await page.keyboard.press('Enter'); await page.waitForTimeout(2500); await shot('play-12-celebration');
  for (let i = 0; i < 20 && (await page.evaluate(() => window.__pp.ui.screen)) !== 'victory'; i++) await page.waitForTimeout(500);
  await shot('play-13-victory');
}
async function phoneSet() {
  await shot('phone-1-title');
  await page.tap('[data-mode="classic"]'); await page.waitForTimeout(1500);
  await ff("g.phase==='music' && g.phaseT>4"); await page.waitForTimeout(1200); await shot('phone-2-music');
  await ff("g.phase==='park' && g.phaseT>2"); await page.waitForTimeout(800); await shot('phone-3-park');
}
if (set === 'streets' || set === 'all') await streets();
if (set === 'play' || set === 'all') await play();
if (set === 'phone') await phoneSet();
const fps = await page.evaluate(() => new Promise((r) => { let n = 0; const t0 = performance.now(); const f = () => { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(f); else r(n / 2); }; requestAnimationFrame(f); }));
console.log('fps (software GL, not representative):', fps.toFixed(1));
console.log(errors.length ? 'PAGE ERRORS:\n' + errors.slice(0, 10).join('\n') : 'no page errors');
await browser.close(); server.close();
