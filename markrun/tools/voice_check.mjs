// Premium voice check in a real TV page (headless Chromium): loads the Kokoro engine from the host's data/voices/,
// pre-renders a real race's commentary on a deadline, then plays lines through the shell's voice queue.
// Reports load time, per-line synthesis time, how many lines were ready in time, fallbacks, and any external request.
// Writes WAVs of the first rendered lines to tests/out/audio/.
//   node tools/voice_check.mjs [--secs=150] [--lead=60] [--missing]   (--missing: pretend voices aren't downloaded)
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k, d) => { const a = process.argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : (process.argv.includes(`--${k}`) ? true : d); };
const SECS = Number(arg('secs', 150)), LEAD = Number(arg('lead', 60)), MISSING = !!arg('missing');
const OUT = path.join(ROOT, 'tests', 'out', 'audio');
fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-voice-'));
process.env.MARKRUN_SESSION_DB ||= path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-vc-')), 's.db');
const env = { ...process.env, PORT: '0', MARKRUN_SESSION_DB: path.join(tmp, 'session.db'), MARKRUN_HOST: '127.0.0.1', ...(MISSING ? { MARKRUN_VOICES_DIR: path.join(tmp, 'none') } : {}) };
let out = '';
const srv = spawn(process.execPath, ['--disable-warning=ExperimentalWarning', 'server/index.mjs', '--fresh'], { cwd: ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });
srv.stdout.on('data', (d) => { out += d; }); srv.stderr.on('data', (d) => { out += d; });
const port = await new Promise((res, rej) => { const t = setTimeout(() => rej(new Error(out)), 15000); const iv = setInterval(() => { const m = out.match(/MARKRUN_READY port=(\d+)/); if (m) { clearInterval(iv); clearTimeout(t); res(Number(m[1])); } }, 50); });
const browser = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required', '--use-angle=swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
const external = [];
await ctx.route('**/*', (route) => { const u = new URL(route.request().url()); if (['127.0.0.1', 'localhost'].includes(u.hostname) || /^(data|blob):/.test(u.protocol)) return route.continue(); external.push(u.href); return route.abort(); });
const page = await ctx.newPage();
page.on('request', (r) => { const u = new URL(r.url()); if (!['127.0.0.1', 'localhost'].includes(u.hostname) && !/^(data|blob):/.test(u.protocol)) external.push(u.href); });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.goto(`http://localhost:${port}/tv?autostart`);
await page.mouse.click(10, 10);
const t0 = Date.now();
const status = await page.waitForFunction(() => { const s = window.__markrun?.voice?.premium?.status; return s && ['ready', 'unavailable', 'error'].includes(s.status) ? s : null; }, null, { timeout: 180000, polling: 250 }).then((h) => h.jsonValue());
const report = { status: status.status, reason: status.reason, loadMs: status.loadMs, wallLoadMs: Date.now() - t0, threads: status.threads, isolated: status.isolated, optionsHint: await page.evaluate(() => document.querySelector('.vstat')?.textContent || null) };
if (MISSING || status.status !== 'ready') {
  // the Options hint for the missing case
  await page.click('[data-options]').catch(() => {});
  await page.waitForTimeout(500);
  report.optionsHint = await page.evaluate(() => document.querySelector('#tvmodal .vstat')?.textContent || null);
  await page.screenshot({ path: path.join(ROOT, 'tests', 'out', 'audio', `options-${MISSING ? 'missing' : status.status}.png`) });
} else {
  // a real race's commentary (the fixture plan), due LEAD seconds from now like during betting
  // a real round from the game module, personalised for two players with a bet each
  const rs = await import('../server/net/roundsource.mjs');
  for (let i = 0; i < 100 && rs.sourceName() !== 'game'; i++) await new Promise((r) => setTimeout(r, 100)); // the module loads asynchronously
  const players = [{ id: 'p1', name: 'Mark' }, { id: 'p2', name: 'Jo' }];
  const round = await rs.createRound({ players, roundNumber: 1, settings: { rounds: 4, budget: 500, roundBudget: 500, sessionId: 'voicecheck' } });
  const rid0 = round.public.runners[0].id, rid1 = round.public.runners[1].id;
  rs.personaliseCommentary(round, { p1: [{ type: 'win', runnerId: rid0, stake: 300 }], p2: [{ type: 'win', runnerId: rid1, stake: 200 }] }, players);
  const plan = round.racePlan;
  const raw = [...(plan.commentary || []).map((l) => ({ text: l.text, speaker: l.speaker, atMs: Math.round((l.broadcastS || 0) * 1000), priority: l.priority || 2 })),
    ...(plan.cutscenes || []).flatMap((c) => (c.lines || []).map((l) => ({ text: l.text, speaker: l.speaker, atMs: Math.round((c.atBroadcastS || 0) * 1000), priority: 3 })))]
    .map((l) => ({ ...l, speaker: l.speaker === 'pam' ? 'pam' : 'jeff' }));
  const lines = await page.evaluate(({ lead, ls }) => {
    window.__markrun.voice.prefetch('race:check', ls, { startAt: Date.now() + lead * 1000 });
    window.__vc = { t0: Date.now(), ls, lead };
    return ls;
  }, { lead: LEAD, ls: raw });
  report.lines = lines.length;
  report.lastLineAtS = Math.round(Math.max(...lines.map((l) => l.atMs)) / 1000);
  // follow the rendering until the "race" is over
  const end = Date.now() + Math.min(SECS, LEAD + report.lastLineAtS + 5) * 1000;
  while (Date.now() < end) await page.waitForTimeout(1000);
  Object.assign(report, await page.evaluate(() => {
    const p = window.__markrun.voice.premium; const st = p.status;
    const now = Date.now();
    const start = window.__vc.t0 + window.__vc.lead * 1000;
    const per = window.__vc.ls.map((l) => { const c = p.peek(l.text, l.speaker); return { atS: Math.round(l.atMs / 1000), ready: !!c && c.doneAt <= start + l.atMs, late: !!c && c.doneAt > start + l.atMs }; });
    return { rendered: st.rendered, renderMs: st.renderMs, rtf: +st.rtf.toFixed(2), readyInTime: per.filter((x) => x.ready).length, renderedLate: per.filter((x) => x.late).length, neverRendered: per.filter((x) => !x.ready && !x.late).length, readyBeforeStart: per.filter((x) => x.ready && p.peek(window.__vc.ls[per.indexOf(x)].text, window.__vc.ls[per.indexOf(x)].speaker).doneAt <= start).length, elapsed: Math.round((now - window.__vc.t0) / 1000) };
  }));
  // play through the shell's queue: one rendered line (premium), then one that isn't (speech fallback)
  report.playback = await page.evaluate(async () => {
    const v = window.__markrun.voice; const p = v.premium;
    const hit = window.__vc.ls.find((l) => p.has(l.text, l.speaker));
    const evs = window.__markrun.events;
    const n0 = evs.length;
    if (hit) v.say(hit.text, hit.speaker, { priority: 3 });
    v.say('A brand new line that nobody rendered, about a pigeon.', 'pam', { priority: 3 });
    await new Promise((r) => setTimeout(r, 200));
    const st1 = v.stats;
    await v.whenIdle(20000);
    return { premiumLines: st1.premium, fallbackLines: v.stats.fallback, subtitles: evs.slice(n0).filter((e) => e.type === 'line').map((e) => e.text.slice(0, 40)) };
  });
  // WAVs of rendered race lines
  const pcms = await page.evaluate(() => {
    const p = window.__markrun.voice.premium;
    return window.__vc.ls.filter((l) => p.has(l.text, l.speaker)).slice(0, 6).map((l) => { const c = p.peek(l.text, l.speaker); return c ? { text: l.text, speaker: l.speaker, sr: c.sampleRate, pcm: Array.from(c.pcm) } : null; });
  });
  let k = 0;
  for (const x of pcms.filter(Boolean)) {
    k++;
    const n = x.pcm.length, data = Buffer.alloc(n * 2);
    for (let i = 0; i < n; i++) data.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(x.pcm[i] * 32767))), i * 2);
    const h = Buffer.alloc(44);
    h.write('RIFF', 0); h.writeUInt32LE(36 + data.length, 4); h.write('WAVE', 8); h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
    h.writeUInt32LE(x.sr, 24); h.writeUInt32LE(x.sr * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(data.length, 40);
    const f = path.join(OUT, `race-line-${String(k).padStart(2, '0')}-${x.speaker}.wav`);
    fs.writeFileSync(f, Buffer.concat([h, data]));
    fs.appendFileSync(path.join(OUT, 'race-lines.txt'), `${path.basename(f)}: ${x.text}\n`);
  }
  report.wavs = k;
}
report.external = [...new Set(external)];
report.errors = errors;
console.log(JSON.stringify(report, null, 1));
await browser.close();
srv.kill('SIGTERM');
fs.rmSync(tmp, { recursive: true, force: true });
if (report.external.length) { console.error('EXTERNAL REQUESTS!'); process.exit(1); }
