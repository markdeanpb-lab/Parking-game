// Screenshot harness for cutscenes (headless Chromium + SwiftShader, 1920x1080).
// node client/tv/race/cutscenes/shoot.mjs <kind> [fixture|-] [name:id@t ...]   (id = cutscene id or kind; t = wall s into it)
// Shots land in tests/out/cutscenes/. Builds the preview bundle and starts its own static server.
import { createRequire } from 'node:module';
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const root = new URL('../../../../', import.meta.url).pathname;
const out = root + 'tests/out/cutscenes/'; fs.mkdirSync(out, { recursive: true });
if (!process.env.NOBUILD) execFileSync('node', [root + 'client/tv/race/cutscenes/build-preview.mjs'], { stdio: 'inherit' });
const port = 8100 + Math.floor(Math.random() * 800);
const srv = spawn('node', [root + 'client/tv/race/devserver.mjs', String(port)], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 600));
const kind = process.argv[2] || 'all';
const fixture = process.argv[3] && process.argv[3] !== '-' ? process.argv[3] : '';
const specs = process.argv.slice(4);
const W = Number(process.env.W || 1920), H = Number(process.env.H || 1080);
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.type(), m.text().slice(0, 400)); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
const extra = process.env.Q ? `&${process.env.Q}` : '';
await page.goto(`http://localhost:${port}/client/tv/race/cutscenes/preview.html?shot=1&cutscene=${kind}${fixture ? `&fixture=${fixture}` : ''}${extra}`);
await page.waitForFunction(() => window.__ready || window.__error, null, { timeout: 120000 });
const err = await page.evaluate(() => window.__error || '');
if (err) { console.log('ERROR', err); await browser.close(); srv.kill(); process.exit(1); }
const list = await page.evaluate(() => window.__cuts.list().map((c) => ({ id: c.id, kind: c.kind, mode: c.mode, at: c.atBroadcastS, dur: c.durationS, who: c.who, params: c.params, lines: c.lines })));
console.log(JSON.stringify(list.map((c) => `${c.id} ${c.kind} ${c.mode} @${c.at} ${c.dur}s ${c.who} ${c.params.variant || ''}`)));
for (const s of specs) {
  const i1 = s.indexOf(':'), name = s.slice(0, i1), spec = s.slice(i1 + 1);
  const [id, t] = spec.split('@');
  const t1 = Date.now();
  const r = await page.evaluate(([id, t]) => window.__cuts.at(id, Number(t)), [id, t]);
  // the sim was stepped faster than real time: settle CSS animations/transitions (e.g. the HUD's 0.8 s GO!) to where they would be
  await page.evaluate(() => { for (const a of document.getAnimations()) { try { if (a.effect?.getComputedTiming?.().iterations !== Infinity) a.finish(); } catch { /* */ } } });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${out}${name}.png` });
  console.log(name, `${Date.now() - t1}ms`, JSON.stringify(r));
}
await browser.close(); srv.kill();
