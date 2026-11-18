// Portrait sheet: the shared SVG portraits (client/shared/portrait.js) for a fixture's runners, next to their resolved
// look, so they can be compared with the 3D intro close-ups.   node client/tv/race/portraits.mjs [fixture] [out.png]
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { runnerPortrait, resolveLook } from '../../shared/portrait.js';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const root = new URL('../../../', import.meta.url).pathname;
const fx = process.argv[2] || 'real';
const out = process.argv[3] || `${root}tests/out/3d2/portraits-${fx}.png`;
const round = JSON.parse(fs.readFileSync(`${root}client/tv/race/fixtures/${fx}.json`, 'utf8'));
const font = `${root}client/assets/fonts/LilitaOne-Regular.ttf`;
const cells = round.public.runners.map((r) => { const L = resolveLook(r); return `<div class="c"><div style="background:${r.colour.primary}" class="sw"></div>${runnerPortrait(r, { size: 300 })}<b>${r.shortName || r.nickname}</b><small>${L.signature} · ${L.hat || 'no hat'}${L.accessory ? ' · ' + L.accessory : ''}</small></div>`; }).join('');
const html = `<html><head><style>@font-face{font-family:'Lilita One';src:url(file://${font})}body{margin:0;background:#cfe9ff;font-family:'Lilita One';display:flex;gap:24px;padding:24px}.c{display:flex;flex-direction:column;align-items:center;gap:6px;color:#14183c}.c b{font-size:30px}.c small{font:600 16px sans-serif}.sw{width:300px;height:10px;border-radius:5px}</style></head><body>${cells}</body></html>`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1700, height: 420 } });
await page.setContent(html); await page.waitForTimeout(300);
await page.screenshot({ path: out });
await browser.close();
console.log(out);
