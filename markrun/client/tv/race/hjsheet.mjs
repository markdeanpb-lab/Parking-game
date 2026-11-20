// Harness for the standalone hijinks preview (release/hijinks-preview.html; build: node tools/build_hijinks_preview.mjs).
//   node client/tv/race/hjsheet.mjs <name> [--every=2.5] [--shots] [--tags] [--page=release/hijinks-preview.html]
// --every  contact sheet, one frame every N broadcast seconds (tests/out/3d4/<name>-sheet.jpg)
// --shots  the shot list + the share of race time per camera family
// --tags   plays the race frame by frame (small viewport) and counts name-tag show/hide toggles per runner
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const root = new URL('../../../', import.meta.url).pathname;
const args = process.argv.slice(2);
const name = args.find((a) => !a.startsWith('--')) || 'hj';
const val = (k) => args.find((a) => a.startsWith(`--${k}=`))?.split('=')[1];
const has = (k) => args.some((a) => a === `--${k}` || a.startsWith(`--${k}=`));
const out = root + (process.env.OUT || 'tests/out/3d4/'); fs.mkdirSync(out, { recursive: true });
const page0 = root + (val('page') || 'release/hijinks-preview.html');
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--allow-file-access-from-files'] });
const small = has('tags') && !has('every');
const page = await browser.newPage({ viewport: small ? { width: 640, height: 360 } : { width: Number(process.env.W || 1280), height: Number(process.env.H || 720) } });
page.on('pageerror', (e) => console.log('[pageerror]', e.message)); if (process.env.DEBUG) page.on('console', (m) => console.log('[page]', m.text().slice(0, 300)));
await page.goto('file://' + page0 + '?shot=1');
await page.waitForFunction(() => window.__ready, null, { timeout: 180000 });
await page.evaluate(() => { document.getElementById('title')?.classList.add('gone'); document.fonts?.ready; });
const FAM = { close: ['headon', 'side', 'high3q', 'gag3q', 'gagside', 'gagrear', 'breakaway', 'hilltop'], fixed: ['fixed', 'cutaway'], drone: ['drone', 'pack'], other: ['chase', 'shoulder', 'hill'] };
const famOf = (t) => Object.keys(FAM).find((k) => FAM[k].includes(t)) || 'set-piece';
if (has('shots')) {
  const shots = await page.evaluate(() => { const d = window.view._debug; const last = d.sim.firstFinishB; return { last, list: d.shots.filter((s) => s.a >= 0.2 && s.a < last).map((s) => ({ a: s.a, b: Math.min(s.b, last), type: s.type, ids: s.ids, cam: s.cam?.name, reason: s.reason, hard: s.hard })) }; });
  const fam = {}, types = {}; let tot = 0; const mid = [];
  for (const s of shots.list) { const L = s.b - s.a; tot += L; const f = famOf(s.type); fam[f] = (fam[f] || 0) + L; types[s.type] = (types[s.type] || 0) + 1; if (!['finishcam', 'placecam', 'cutaway'].includes(s.type) && s.a > 1) mid.push(L); }
  let run = 1, best = 1; for (let i = 1; i < shots.list.length; i++) { run = shots.list[i].type === shots.list[i - 1].type ? run + 1 : 1; best = Math.max(best, run); }
  for (const s of shots.list) console.log(`${s.a.toFixed(1).padStart(6)} ${(s.b - s.a).toFixed(1).padStart(5)}s ${(s.type + (s.cam ? ':' + s.cam : '')).padEnd(20)} ${s.hard ? 'CUT  ' : 'glide'} ${String(s.ids || '').padEnd(12)} ${s.reason || ''}`);
  const share = Object.fromEntries(Object.entries(fam).map(([k, v]) => [k, +(v / tot).toFixed(2)]));
  console.log(JSON.stringify({ shots: shots.list.length, share, types, meanLen: +(mid.reduce((a, x) => a + x, 0) / mid.length).toFixed(1), minLen: +Math.min(...mid).toFixed(1), longestSameRun: best }));
}
if (has('tags')) {
  // play the race frame by frame in chunks (a single long evaluate stalls the renderer) and count tag toggles
  await page.evaluate(() => {
    const d = window.view._debug, root = window.view.hudRoot; const tags = [...root.querySelectorAll('.mr-tag')];
    const ids = window.__data.round.runners.slice().sort((a, b) => (a.lane ?? 0) - (b.lane ?? 0)).map((x) => x.id);
    d.seek(0.2, 0.5); d.unpause();
    window.__T = { tags, ids, prev: tags.map(() => false), tog: tags.map(() => 0), visT: tags.map(() => 0), n: 0, hjVis: {}, hj: window.__data.plan.hijinks || [] };
  });
  for (;;) {
    const done = await page.evaluate(() => {
      const d = window.view._debug, T = window.__T;
      for (let k = 0; k < 40; k++) {
        if (d.b >= d.sim.firstFinishB - 0.5) return true;
        d.step(1 / 12, true); T.n++;
        T.tags.forEach((t, i) => { const v = t.style.opacity !== '0' && parseFloat(t.style.opacity || '0') > 0.5; if (v !== T.prev[i]) { T.tog[i]++; T.prev[i] = v; } if (v) T.visT[i]++; });
        for (const h of T.hj) if (d.b >= h.atBroadcastS && d.b < h.untilBroadcastS) { const i = T.ids.indexOf(h.who); T.hjVis[h.id] ||= { kind: h.kind, who: h.who, frames: 0, shown: 0 }; T.hjVis[h.id].frames++; if (T.prev[i]) T.hjVis[h.id].shown++; }
      }
      return false;
    });
    if (done) break;
  }
  const r = await page.evaluate(() => { const T = window.__T; return { frames: T.n, toggles: Object.fromEntries(T.ids.map((id, i) => [id, T.tog[i]])), visibleShare: Object.fromEntries(T.ids.map((id, i) => [id, +(T.visT[i] / T.n).toFixed(2)])), hijinkTagShown: Object.values(T.hjVis).map((x) => ({ ...x, share: +(x.shown / x.frames).toFixed(2) })) }; });
  console.log(JSON.stringify(r));
}
const every = Number(val('every')) || 0;
if (every) {
  const fin = await page.evaluate(() => window.view._debug.sim.firstFinishB);
  const files = [], labels = [];
  for (let t = 0, i = 0; t <= fin + 6; t += every, i++) {
    await page.evaluate((t) => window.view._debug.seek(t, 2.5), t);
    await page.waitForTimeout(350);
    const f = `${name}-${String(i).padStart(2, '0')}.jpg`;
    await page.screenshot({ path: out + f, type: 'jpeg', quality: 85 });
    const L = await page.evaluate(() => { const d = window.view._debug, s = d.director?.shot; return { shot: s ? s.type + (s.cam ? ':' + s.cam.name : '') : d.mode, frac: d.runnerFrac() }; });
    files.push(f); labels.push(`${t.toFixed(1)}s ${L.shot} h=${Math.round(L.frac * 100)}%`); console.log(f, labels.at(-1));
  }
  execFileSync('montage', [...files.map((f, i) => ['-label', labels[i], out + f]).flat(), '-tile', '8x', '-geometry', '320x180+2+2', '-pointsize', '12', '-fill', 'white', '-background', '#111', '-font', 'DejaVu-Sans-Mono', out + `${name}-sheet.jpg`]);
}
await browser.close();
