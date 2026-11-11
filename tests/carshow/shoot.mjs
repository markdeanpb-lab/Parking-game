#!/usr/bin/env node
// node tests/carshow/shoot.mjs [outdir]   (needs playwright; NODE_PATH=$(npm root -g) if installed globally)
import { createRequire } from 'module';
import { execSync } from 'child_process';
import http from 'http'; import fs from 'fs'; import path from 'path';
const { chromium } = createRequire(import.meta.url)('playwright');
const dir = path.dirname(new URL(import.meta.url).pathname), root = path.resolve(dir, '../..');
const out = path.resolve(process.argv[2] || path.join(root, 'tests/out/vehicle-art'));
fs.mkdirSync(out, { recursive: true });
execSync(`npx esbuild ${dir}/show.js --bundle --format=iife --outfile=${out}/show.bundle.js --log-level=warning`, { cwd: root, stdio: 'inherit' });
const server = http.createServer((req, res) => { const u = req.url.split('?')[0], f = u.endsWith('.js') ? path.join(out, u) : path.join(dir, 'index.html'); fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': f.endsWith('.js') ? 'text/javascript' : 'text/html' }); res.end(d); } }); }).listen(0);
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message));
await page.goto(`http://localhost:${server.address().port}/`);
await page.waitForFunction(() => window.ready, null, { timeout: 60000 });
const types = await page.evaluate(() => window.types);
const shot = async (n, pos, look) => { await page.evaluate(([p, l]) => window.view(p, l), [pos, look]); await page.screenshot({ path: path.join(out, n + '.png') }); console.log('saved', n); };
const zc = (t) => types.indexOf(t) * 6 + (t === 'lorry' ? 3 : 0);
await shot('all-top', [-10, 26, 24], [4, 0, 24]);
for (const t of types) {
  const z = zc(t), big = t === 'lorry' ? 1.8 : 1;
  await shot(`${t}-34front`, [5 * big, 2.6 * big, z + 5.5 * big], [0, 0.8, z]);
  await shot(`${t}-chase`, [-7 * big, 3.6 * big, z + 0.6], [1, 0.9, z]);
}
await shot('parked-row', [8, 3.5, -4], [14, 0.6, 14]);
await shot('parked-row-rear', [20, 3.5, -4], [14, 0.6, 14]);
await browser.close(); server.close();
