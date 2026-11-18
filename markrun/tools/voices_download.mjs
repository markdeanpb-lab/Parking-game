// npm run voices:download
// Downloads the premium commentary voices (Kokoro-82M, q8, ~90 MB) once, into data/voices/ (git-ignored).
// After this the Node edition's TV loads them from the host computer: the game stays fully offline during play.
//   data/voices/hf/<model>/resolve/main/...   model, tokenizer and the voice style tables (as Hugging Face lays them out)
//   data/voices/ort/...                        the onnxruntime-web wasm runtime the voice engine runs on
//   data/voices/manifest.json                  what is there (the TV checks it)
// Options: --force (re-download everything)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { KOKORO_MODEL, KOKORO_REVISION, MODEL_FILES, VOICES, ORT_FILES, ORT_CDN, ORT_VERSION, hfUrl } from '../client/shared/audio/config.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'data', 'voices');
const force = process.argv.includes('--force');
const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;

const jobs = [
  ...MODEL_FILES.map((f) => ({ url: hfUrl(f), to: path.join(OUT, 'hf', KOKORO_MODEL, 'resolve', KOKORO_REVISION, f) })),
  ...Object.values(VOICES).map((v) => ({ url: hfUrl(`voices/${v}.bin`), to: path.join(OUT, 'hf', KOKORO_MODEL, 'resolve', KOKORO_REVISION, 'voices', `${v}.bin`) })),
  ...ORT_FILES.map((f) => ({ url: ORT_CDN + f, to: path.join(OUT, 'ort', f) })),
];

async function get(job) {
  if (!force && fs.existsSync(job.to) && fs.statSync(job.to).size > 0) return { ...job, size: fs.statSync(job.to).size, cached: true };
  fs.mkdirSync(path.dirname(job.to), { recursive: true });
  for (let attempt = 1; ; attempt++) {
    try {
      const r = await fetch(job.url, { redirect: 'follow' });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const total = Number(r.headers.get('content-length')) || 0;
      const tmp = `${job.to}.part`;
      const fh = fs.openSync(tmp, 'w');
      let got = 0, lastPct = -1;
      for await (const chunk of r.body) {
        fs.writeSync(fh, chunk);
        got += chunk.length;
        const pct = total ? Math.floor((got / total) * 10) : -1;
        if (total > 5e6 && pct !== lastPct) { lastPct = pct; process.stdout.write(`\r  ${path.basename(job.to)} ${pct * 10}% of ${mb(total)}   `); }
      }
      fs.closeSync(fh);
      if (total && got !== total) throw new Error(`short download (${got}/${total})`);
      fs.renameSync(tmp, job.to);
      if (total > 5e6) process.stdout.write('\n');
      return { ...job, size: got, cached: false };
    } catch (e) {
      if (attempt >= 3) throw new Error(`${job.url}: ${e.message}`);
      console.warn(`  retrying ${path.basename(job.to)} (${e.message})`);
    }
  }
}

console.log(`Downloading the premium commentary voices into ${path.relative(ROOT, OUT)}/ (once, ~90 MB)…`);
const done = [];
try {
  for (const j of jobs) {
    const r = await get(j);
    done.push(r);
    console.log(`  ${r.cached ? '✓ have' : '✓ got '} ${path.relative(OUT, r.to).padEnd(70)} ${mb(r.size)}`);
  }
} catch (e) {
  console.error(`\nDownload failed: ${e.message}\nThe game still works: the commentators use the computer's built-in voices. Try again later.`);
  process.exit(1);
}
const manifest = {
  model: KOKORO_MODEL, revision: KOKORO_REVISION, dtype: 'q8', ort: ORT_VERSION, voices: VOICES,
  files: done.map((d) => ({ path: path.relative(OUT, d.to).split(path.sep).join('/'), size: d.size })),
  bytes: done.reduce((a, d) => a + d.size, 0), downloadedAt: new Date().toISOString(),
};
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`\nDone: ${mb(manifest.bytes)} in data/voices/. Restart \`npm start\`; the TV's ⚙ Options show "Premium voices: ready".`);
