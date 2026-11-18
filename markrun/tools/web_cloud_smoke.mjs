// Smoke test against the REAL free PeerJS cloud (0.peerjs.com) with the default settings the itch.io build uses:
// a TV page opens a room, a phone page joins it with the code, the phone's "join" reaches the TV's in-page host and the
// TV's state comes back over WebRTC. Not part of `npm run test:web` (that one never touches the internet).
//   node tools/web_cloud_smoke.mjs        (uses $HTTPS_PROXY for Chromium when set)
import { createRequire } from 'node:module';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist-web');
const OUT = path.join(ROOT, 'tests/out/web');
fs.mkdirSync(OUT, { recursive: true });
if (!fs.existsSync(path.join(DIST, 'index.html'))) { console.error('build first: npm run build:web'); process.exit(1); }
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.ttf': 'font/ttf' };
const srv = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  const f = path.normalize(path.join(DIST, u.pathname === '/' ? '/index.html' : decodeURIComponent(u.pathname)));
  if (!f.startsWith(DIST) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
const port = await new Promise((r) => srv.listen(0, '127.0.0.1', () => r(srv.address().port)));
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy || '';
const args = ['--autoplay-policy=no-user-gesture-required', '--disable-features=WebRtcHideLocalIpsWithMdns'];
if (proxy) args.push(`--proxy-server=${proxy}`);
const browser = await chromium.launch({ args });
const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a);
let ok = false;
const errs = [];
try {
  const tvc = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const tv = await tvc.newPage();
  tv.on('console', (m) => { if (m.type() === 'error') errs.push(`tv: ${m.text()}`); });
  await tv.goto(`http://127.0.0.1:${port}/index.html?race=2d&autostart&mute`);
  await tv.click('#wl-tv');
  const t0 = Date.now();
  await tv.waitForSelector('.wr-status.ok', { timeout: 45000 });
  const code = await tv.$eval('.wr-code', (e) => e.dataset.code);
  log(`TV registered markrun-${code}-v1 on the PeerJS cloud in ${Date.now() - t0} ms`);
  const pc = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const ph = await pc.newPage();
  ph.on('console', (m) => { if (m.type() === 'error') errs.push(`phone: ${m.text()}`); });
  const t1 = Date.now();
  await ph.goto(`http://127.0.0.1:${port}/index.html#join=${code}`);
  await ph.waitForSelector('#nm', { timeout: 60000 });
  log(`phone connected to the TV over WebRTC via the cloud in ${Date.now() - t1} ms`);
  await ph.fill('#nm', 'Cloudy');
  await ph.click('#joinbtn');
  await ph.waitForSelector('#markbtn', { timeout: 20000 });
  await tv.waitForFunction(() => document.body.innerText.includes('Cloudy'), null, { timeout: 20000 });
  log('message exchange OK: the phone joined, the TV lobby shows "Cloudy", the phone got its state back');
  await tv.screenshot({ path: path.join(OUT, 'cloud-tv.png') });
  await ph.screenshot({ path: path.join(OUT, 'cloud-phone.png') });
  ok = true;
} catch (e) {
  console.error('CLOUD SMOKE FAILED:', e.message.split('\n')[0]);
  console.error(errs.slice(0, 8).join('\n'));
} finally {
  await browser.close();
  srv.close();
}
console.log(ok ? 'PEERJS CLOUD SMOKE TEST PASSED' : 'PEERJS CLOUD SMOKE TEST FAILED');
process.exit(ok ? 0 : 1);
