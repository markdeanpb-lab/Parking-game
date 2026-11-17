// Bundle the browser clients (offline: three.js is bundled, nothing loads from a CDN).
import * as esbuild from 'esbuild';
import fs from 'node:fs';
const watch = process.argv.includes('--watch');
const entries = [['client/tv/main.js', 'client/dist/tv.js'], ['client/phone/main.js', 'client/dist/phone.js'], ['client/tv/race/preview.js', 'client/dist/race-preview.js']]
  .filter(([src]) => fs.existsSync(src));
for (const [src, out] of entries) {
  const opts = { entryPoints: [src], outfile: out, bundle: true, format: 'esm', target: 'es2020', minify: !watch, sourcemap: watch, logLevel: 'info' };
  if (watch) (await esbuild.context(opts)).watch(); else await esbuild.build(opts);
}
