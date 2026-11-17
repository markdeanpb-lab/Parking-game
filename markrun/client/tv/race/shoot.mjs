// Screenshot harness for the race view (headless Chromium + SwiftShader).
// node client/tv/race/shoot.mjs [fixture] [name:spec ...]   spec = race@<b> | intro@<idx>,<t> | podium@<t> | photo
// Shots land in tests/out/3d/. Starts its own static server.
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const root = new URL('../../../', import.meta.url).pathname;
const out = root + 'tests/out/3d/'; fs.mkdirSync(out, { recursive: true });
const port = 8000 + Math.floor(Math.random() * 900);
const srv = spawn('node', [root + 'client/tv/race/devserver.mjs', String(port)], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 600));
const fixture = process.argv[2] && process.argv[2] !== '-' ? process.argv[2] : '';
const specs = process.argv.slice(3).length ? process.argv.slice(3) : ['start:race@-5', 'go:race@1', 'mid:race@30'];
const W = Number(process.env.W || 1920), H = Number(process.env.H || 1080);
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.type(), m.text().slice(0, 300)); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
const t0 = Date.now();
await page.goto(`http://localhost:${port}/client/tv/race/preview.html?shot=1&auto=0${fixture ? `&fixture=${fixture}` : ''}${process.env.BACKED ? `&backed=${process.env.BACKED}` : ''}`);
await page.waitForFunction(() => window.__ready || window.__error, null, { timeout: 120000 });
console.log('ready in', Date.now() - t0, 'ms', await page.evaluate(() => window.__error || ''));
for (const s of specs) {
  const i1 = s.indexOf(':'), name = s.slice(0, i1), spec = s.slice(i1 + 1);
  const i2 = spec.indexOf('@'), kind = spec.slice(0, i2), arg = spec.slice(i2 + 1);
  const t1 = Date.now();
  await page.evaluate(([kind, arg]) => {
    const d = window.view._debug;
    if (kind === 'race') d.seek(Number(arg));
    else if (kind === 'intro') { const [i, t] = arg.split(',').map(Number); d.introAt(i, t); }
    else if (kind === 'podium') d.podiumAt(Number(arg || 3));
    else if (kind === 'photo') d.photoAt();
    else if (kind === 'cam') d.lookFrom(...arg.split(',').map(Number));
    else if (kind === 'js') (0, eval)(arg);
  }, [kind, arg]);
  await page.waitForTimeout(400);
  const info = await page.evaluate(() => { const i = window.view._debug.info(); const sh = window.view._debug.shots.find((x) => window.view._debug.b >= x.a && window.view._debug.b < x.b); return { calls: i.render.calls, tris: i.render.triangles, shot: sh && `${sh.type} ${sh.ids || ''}` }; });
  await page.screenshot({ path: `${out}${fixture ? fixture + '-' : ''}${name}.png` });
  console.log(name, `${Date.now() - t1}ms`, JSON.stringify(info), await page.title());
}
await browser.close(); srv.kill();
