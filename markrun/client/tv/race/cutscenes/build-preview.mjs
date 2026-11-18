// Bundle the cutscene preview page: node client/tv/race/cutscenes/build-preview.mjs  ->  client/dist/cutscene-preview.js
import * as esbuild from 'esbuild';
const root = new URL('../../../../', import.meta.url).pathname;
await esbuild.build({ entryPoints: [root + 'client/tv/race/cutscenes/preview.js'], outfile: root + 'client/dist/cutscene-preview.js', bundle: true, format: 'esm', target: 'es2020', minify: false, logLevel: 'warning' });
console.log('built client/dist/cutscene-preview.js');
