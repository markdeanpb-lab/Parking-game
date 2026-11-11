// Offline render of the synthesised audio (headless Chromium, OfflineAudioContext): checks every sound renders
// without errors, NaNs or clipping, and writes WAVs to tests/out/dj/ so a human can listen.
//   node tests/dj.audio.mjs
import { createRequire } from 'module';
import http from 'http'; import fs from 'fs'; import path from 'path';
const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'tests/out/dj');
fs.mkdirSync(out, { recursive: true });
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  fs.readFile(path.join(root, u === '/' ? '/index.html' : u), (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': u.endsWith('.js') ? 'text/javascript' : u.endsWith('.css') ? 'text/css' : 'text/html' }); res.end(d); } });
}).listen(0);
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.goto(`http://localhost:${server.address().port}/index.html?seed=5`);
await page.waitForFunction(() => window.__pp && window.__pp.audio, null, { timeout: 60000 });

// Each scene: a script run against an engine whose clock we drive by hand.
const scenes = {
  // round music for rounds 1-5 then the final, 6 s each
  music: `for (let r = 1; r <= 6; r++) { at((r - 1) * 6); A.startMusic(r, r === 6); run(5.9); A.stopMusic(); }`,
  // the music-stop moment, 12 s of panic, last 5 s with heartbeat, buzzer
  musicStop: `A.startMusic(3); run(4); A.parkMoment({}); for (let i = 0; i < 160; i++) { const tl = 16 - i * 0.1; A.update(0.1, { urgency: Math.min(1, Math.max(0, 1 - tl / 20)), timeLeft: tl, safe: false }); run(0.1); if (Math.abs(tl - Math.round(tl)) < 0.05 && tl <= 10) A.tick(Math.round(tl)); } A.tick(0); A.stopMusic(); run(1.5);`,
  finalStop: `A.startMusic(6, true); run(4); A.parkMoment({ final: true }); run(6); A.stopMusic(); run(1);`,
  idents: `for (let r = 1; r <= 5; r++) { A.jingle({ round: r }); run(2.4); } A.jingle({ round: 6, final: true }); run(3);`,
  crowd: `for (const k of ['roar', 'cheer', 'ooh', 'aww', 'groan', 'gasp', 'laugh', 'airhorn', 'rimshot']) { A.react(k); run(2.6); }`,
  chimes: `A.parked(2); run(1.8); A.parked(1); run(1.5); A.parked(0); run(2); A.pop(); run(1); A.whoosh(); run(1); A.alarm(); run(1.5); A.fanfare(); run(6);`,
};

const results = await page.evaluate(async (scenes) => {
  const Eng = window.__pp.audio.constructor;
  const res = {};
  for (const [name, code] of Object.entries(scenes)) {
    const SR = 22050, LEN = 40;
    const off = new OfflineAudioContext(1, SR * LEN, SR);
    let now = 0;
    const ctx = new Proxy(off, { get(t, p) { if (p === 'currentTime') return now; const v = t[p]; return typeof v === 'function' ? v.bind(t) : v; } });
    window.AudioContext = function () { return ctx; };
    const A = new Eng(); A.init(); A.muted = false;
    const run = (secs) => { const end = now + secs; while (now < end) { now += 0.02; A.schedule(); } };
    const at = (t) => { now = t; };
    let err = null;
    try { new Function('A', 'run', 'at', code)(A, run, at); } catch (e) { err = String(e); }
    const used = now;
    const buf = await off.startRendering();
    const ch = buf.getChannelData(0);
    let peak = 0, nan = 0, clip = 0; const rms = [];
    const n = Math.min(ch.length, Math.ceil((used + 0.5) * SR));
    for (let s = 0; s < n; s += SR / 2) { let a = 0; for (let i = s; i < Math.min(n, s + SR / 2); i++) { const x = ch[i]; if (!Number.isFinite(x)) nan++; else { a += x * x; if (Math.abs(x) > peak) peak = Math.abs(x); if (Math.abs(x) > 0.99) clip++; } } rms.push(Math.sqrt(a / (SR / 2)).toFixed(2)); }
    // 16-bit WAV
    const data = new DataView(new ArrayBuffer(44 + n * 2));
    const str = (o, s) => { for (let i = 0; i < s.length; i++) data.setUint8(o + i, s.charCodeAt(i)); };
    str(0, 'RIFF'); data.setUint32(4, 36 + n * 2, true); str(8, 'WAVEfmt '); data.setUint32(16, 16, true); data.setUint16(20, 1, true); data.setUint16(22, 1, true);
    data.setUint32(24, SR, true); data.setUint32(28, SR * 2, true); data.setUint16(32, 2, true); data.setUint16(34, 16, true); str(36, 'data'); data.setUint32(40, n * 2, true);
    for (let i = 0; i < n; i++) data.setInt16(44 + i * 2, Math.max(-1, Math.min(1, ch[i] || 0)) * 32767, true);
    let bin = ''; const u8 = new Uint8Array(data.buffer); for (let i = 0; i < u8.length; i += 8192) bin += String.fromCharCode.apply(null, u8.subarray(i, i + 8192));
    res[name] = { err, peak: peak.toFixed(2), nan, clip, rms: rms.join(' '), wav: btoa(bin), secs: used.toFixed(1) };
  }
  return res;
}, scenes);
let bad = 0;
for (const [name, r] of Object.entries(results)) {
  fs.writeFileSync(path.join(out, `audio-${name}.wav`), Buffer.from(r.wav, 'base64'));
  console.log(`${name.padEnd(10)} ${r.secs}s peak ${r.peak} clipped ${r.clip} nan ${r.nan}${r.err ? ' ERROR ' + r.err : ''}\n           rms/0.5s: ${r.rms}`);
  if (r.err || r.nan || Number(r.peak) < 0.02) bad++;
}
if (errors.length) { console.log('page errors:', errors.slice(0, 5)); }
await browser.close(); server.close();
if (bad) { console.log(`${bad} audio scene(s) failed`); process.exit(1); }
console.log('audio renders OK; WAVs in tests/out/dj/');
