// Browser smoke test: loads the real bundle in headless Chromium, plays through an elimination,
// and saves screenshots to tests/out/. Needs Playwright (npx playwright install chromium). Run: npm run test:browser
import { createRequire } from 'module';
import http from 'http'; import fs from 'fs'; import path from 'path';
const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.resolve(new URL('..', import.meta.url).pathname);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  fs.readFile(path.join(root, u === '/' ? '/index.html' : u), (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(u)] || 'text/html' }); res.end(d); } });
}).listen(0);
fs.mkdirSync(path.join(root, 'tests/out'), { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
const shot = (n) => page.screenshot({ path: path.join(root, `tests/out/${n}.png`) });
const state = () => page.evaluate(() => ({ phase: window.__pp.game.phase, screen: window.__pp.ui.screen }));
const ff = (cond, max = 9000) => page.evaluate(([c, m]) => { const g = window.__pp.game; let n = 0; const f = new Function('g', 'return ' + c); while (!f(g) && n++ < m) g.update(1 / 60); return g.phase; }, [cond, max]);
let failures = 0;
const check = (ok, msg) => { console.log((ok ? '  ok: ' : '  FAIL: ') + msg); if (!ok) failures++; };

await page.goto(`http://localhost:${server.address().port}/index.html?seed=5&low&fixeddpr`);
await page.waitForFunction(() => window.__pp && window.__pp.ui.screen === 'title', null, { timeout: 30000 });
await page.waitForTimeout(1500); await shot('1-title');
check((await state()).screen === 'title', 'title screen is shown');
await page.click('[data-mode="classic"]');
check((await state()).screen === 'tutorial', 'first run shows the tutorial');
for (let i = 0; i < 4; i++) await page.click('#tut-next');
await page.waitForTimeout(800);
check((await state()).phase === 'intro', 'competition starts after the tutorial');
await ff("g.phase==='music' && g.phaseT>5"); await page.waitForTimeout(1200); await shot('2-music');
check((await state()).phase === 'music', 'music phase');
await ff("g.phase==='park' && g.phaseT>1"); await page.waitForTimeout(1200); await shot('3-park');
check((await state()).phase === 'park', 'music stops and the scramble begins');
await page.keyboard.press('KeyC'); await page.waitForTimeout(1500); await shot('4-overhead-camera'); await page.keyboard.press('KeyC');
await ff("g.phase==='roundEnd'");
for (let i = 0; i < 40 && (await state()).screen !== 'results'; i++) { await page.keyboard.press('KeyX'); await page.waitForTimeout(700); }
await shot('5-results');
check((await state()).screen === 'results', 'results table appears (idle player has been eliminated)');
await page.keyboard.press('Enter'); await page.waitForTimeout(1200); await shot('6-eliminated');
check((await state()).screen === 'gameover', 'elimination screen');
await page.click('#go-menu'); await page.waitForTimeout(600);
check((await state()).screen === 'title', 'back to the menu');
await page.click('[data-mode="free"]'); await page.waitForTimeout(1500);
check((await state()).phase === 'free', 'free drive starts');
await page.keyboard.down('ArrowUp'); await page.waitForTimeout(3000); await page.keyboard.up('ArrowUp');
check(await page.evaluate(() => Math.abs(window.__pp.game.player.car.v) > 0.5), 'keyboard drives the car');
await shot('7-free-drive');
check(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
await browser.close(); server.close();
console.log(failures ? `\n${failures} FAILURE(S)` : '\nbrowser smoke test passed');
process.exit(failures ? 1 : 0);
