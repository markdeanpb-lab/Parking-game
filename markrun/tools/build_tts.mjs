// Build the premium-voice engine: client/dist/tts-worker.js (Kokoro TTS in a Web Worker).
//   node tools/build_tts.mjs
// The output is committed (like client/dist/tv.js), so players never need this. It is a developer tool: it fetches
// the exact library tarballs from the npm registry with `npm pack` into tools/.cache/tts/ (git-ignored). Installing
// kokoro-js normally would pull ~400 MB of Node-only native packages (onnxruntime-node, sharp) we never use.
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { TTS_PACKAGES } from '../client/shared/audio/config.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, 'tools', '.cache', 'tts');
const NM = path.join(CACHE, 'node_modules');

function vendor(name, version) {
  const dir = path.join(NM, name);
  try { if (JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).version === version) return; } catch { /* fetch it */ }
  fs.mkdirSync(path.join(CACHE, 'tgz'), { recursive: true });
  const out = execFileSync('npm', ['pack', `${name}@${version}`, '--silent', '--pack-destination', path.join(CACHE, 'tgz')], { cwd: CACHE, encoding: 'utf8' }).trim().split('\n').pop();
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  execFileSync('tar', ['-xzf', path.join(CACHE, 'tgz', out), '-C', dir, '--strip-components=1']);
  console.log(`vendored ${name}@${version}`);
}
for (const [name, version] of Object.entries(TTS_PACKAGES)) vendor(name, version);

const OUT = path.join(ROOT, 'client', 'dist', 'tts-worker.js');
await esbuild.build({
  entryPoints: [path.join(ROOT, 'client', 'shared', 'audio', 'tts-worker.js')],
  outfile: OUT, bundle: true, format: 'esm', platform: 'browser', target: ['es2021', 'safari16'],
  minify: true, legalComments: 'none', logLevel: 'warning',
  nodePaths: [NM],
  // wasm-only onnxruntime (11 MB wasm instead of the 21 MB WebGPU build), with the .mjs glue loaded from wasmPaths
  alias: { 'onnxruntime-web': 'onnxruntime-web/wasm' },
  conditions: ['onnxruntime-web-use-extern-wasm'],
});
console.log(`built ${path.relative(ROOT, OUT)} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)`);
