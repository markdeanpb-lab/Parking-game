// Build the MARKRUN web edition (itch.io HTML5): dist-web/ (index.html at the root, relative paths only, everything
// bundled: three.js, PeerJS, fonts, data) + dist-web/markrun-itch.zip ready to upload.
//   npm run build:web            (re-exports web/data.json from data/markrun.db first)
//   node tools/build_web.mjs --no-export [--no-minify] [--no-zip]
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist-web');
const flag = (k) => process.argv.includes(`--${k}`);
const rel = (p) => path.relative(ROOT, p);
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

// 1. data bundle
const DATA = path.join(ROOT, 'web', 'data.json');
if (!flag('no-export') && fs.existsSync(path.join(ROOT, 'data', 'markrun.db'))) {
  const { buildWebData } = await import('./export_web_data.mjs');
  const { DatabaseSync } = await import('node:sqlite');
  const db = new DatabaseSync(path.join(ROOT, 'data', 'markrun.db'), { readOnly: true });
  fs.writeFileSync(DATA, JSON.stringify(buildWebData(db)));
  db.close();
  console.log(`exported ${rel(DATA)} (${kb(fs.statSync(DATA).size)})`);
}
if (!fs.existsSync(DATA)) { console.error('web/data.json is missing: run node tools/export_web_data.mjs'); process.exit(1); }

// 2. page shells, extracted from the Node edition's pages so both editions always use the same markup
function shell(file) {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const body = /<body([^>]*)>([\s\S]*)<\/body>/i.exec(html);
  if (!body) throw new Error(`${file}: no <body>`);
  const bodyClass = (/class="([^"]*)"/.exec(body[1]) || [])[1] || '';
  const inner = body[2].replace(/<script\b[\s\S]*?<\/script>/gi, '').trim();
  const css = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => path.basename(m[1])).filter((h) => h !== 'theme.css');
  return { bodyClass, html: inner, css };
}
const SHELLS = { tv: shell('client/tv/index.html'), phone: shell('client/phone/index.html') };

const stub = (name, contents) => ({ name, contents });
const STUBS = [
  // persist.mjs imports ../db.mjs (node:sqlite) only for its default argument; the web host always passes the shim
  { filter: /^\.\.\/db\.mjs$/, importer: /server[\\/]net[\\/]persist\.mjs$/, ...stub('db', 'export function sessionDb() { throw new Error("no SQLite in the browser"); }') },
  // "Refresh Historical Data" (Node + internet) is not part of the web edition
  { filter: /^\.\.\/import\/refresh\.mjs$/, ...stub('refresh', 'export async function runRefresh() { throw new Error("Refresh needs the home-computer edition"); }') },
  // the hub only constructs a WebSocketServer when no transport is injected
  { filter: /^ws$/, ...stub('ws', 'export class WebSocketServer { constructor() { throw new Error("no WebSocket server in the browser"); } } export default {};') },
];
const webPlugin = {
  name: 'markrun-web',
  setup(b) {
    b.onResolve({ filter: /^markrun:shells$/ }, () => ({ path: 'shells', namespace: 'markrun' }));
    b.onLoad({ filter: /^shells$/, namespace: 'markrun' }, () => ({ contents: `export default ${JSON.stringify(SHELLS)};`, loader: 'js' }));
    for (const s of STUBS) {
      b.onResolve({ filter: s.filter }, (a) => (!s.importer || s.importer.test(a.importer) ? { path: s.name, namespace: 'markrun-stub' } : undefined));
    }
    b.onLoad({ filter: /.*/, namespace: 'markrun-stub' }, (a) => ({ contents: STUBS.find((s) => s.name === a.path).contents, loader: 'js' }));
    // anything else node-only reaching the browser bundle is a bug: fail the build loudly
    b.onResolve({ filter: /^node:/ }, (a) => ({ errors: [{ text: `${a.path} imported by ${rel(a.importer)} cannot run in the browser` }] }));
  },
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'js'), { recursive: true });
const result = await esbuild.build({
  entryPoints: [path.join(ROOT, 'web', 'launcher.js')],
  outdir: path.join(OUT, 'js'),
  bundle: true, splitting: true, format: 'esm', platform: 'browser',
  target: ['es2020', 'safari15', 'chrome90', 'firefox90'],
  minify: !flag('no-minify'), sourcemap: false, legalComments: 'none',
  chunkNames: 'chunk-[hash]', entryNames: '[name]',
  plugins: [webPlugin], metafile: true, logLevel: 'warning',
});

// 3. static files (CSS rewritten to relative URLs: itch.io serves the game from a sub-folder)
const relCss = (s) => s.replace(/url\((['"]?)\/assets\//g, 'url($1assets/');
const copy = (from, to, fn) => { fs.mkdirSync(path.dirname(to), { recursive: true }); if (fn) fs.writeFileSync(to, fn(fs.readFileSync(from, 'utf8'))); else fs.copyFileSync(from, to); };
copy(path.join(ROOT, 'web/index.html'), path.join(OUT, 'index.html'));
copy(path.join(ROOT, 'web/web.css'), path.join(OUT, 'web.css'));
copy(path.join(ROOT, 'client/shared/theme.css'), path.join(OUT, 'theme.css'), relCss);
copy(path.join(ROOT, 'client/tv/tv.css'), path.join(OUT, 'tv.css'), relCss);
copy(path.join(ROOT, 'client/phone/phone.css'), path.join(OUT, 'phone.css'), relCss);
for (const f of fs.readdirSync(path.join(ROOT, 'client/assets/fonts'))) copy(path.join(ROOT, 'client/assets/fonts', f), path.join(OUT, 'assets/fonts', f));
// music + stings (local files: nothing loads from a CDN at play time) and the premium-voice engine (the voice model
// itself is fetched from Hugging Face on first use and cached by the browser, so the zip stays small)
for (const f of fs.readdirSync(path.join(ROOT, 'client/assets/audio'))) if (/\.(mp3|json|md)$/.test(f)) copy(path.join(ROOT, 'client/assets/audio', f), path.join(OUT, 'assets/audio', f));
if (fs.existsSync(path.join(ROOT, 'client/dist/tts-worker.js'))) copy(path.join(ROOT, 'client/dist/tts-worker.js'), path.join(OUT, 'js/tts-worker.js'));
copy(DATA, path.join(OUT, 'data.json'));

// guard: no absolute (root-relative) URLs left in what we ship
for (const f of ['index.html', 'theme.css', 'tv.css', 'phone.css', 'web.css']) {
  const s = fs.readFileSync(path.join(OUT, f), 'utf8');
  const bad = s.match(/(?:url\(\s*['"]?|(?:href|src)=")\/(?!\/)[^'")]*/g);
  if (bad) { console.error(`${f}: absolute URL(s) ${bad.join(', ')}`); process.exit(1); }
}

// 4. zip (index.html at the root), no external zip tool needed
function walk(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p, base) : [path.relative(base, p).split(path.sep).join('/')];
  }).filter((p) => !p.endsWith('.zip'));
}
export function writeZip(file, rootDir, names) {
  const local = [], central = [];
  let offset = 0;
  const dosTime = 0, dosDate = (2026 - 1980) << 9 | 1 << 5 | 1; // fixed timestamp: reproducible zips
  for (const name of names.sort((a, b) => (a === 'index.html' ? -1 : b === 'index.html' ? 1 : a.localeCompare(b)))) {
    const data = fs.readFileSync(path.join(rootDir, name));
    const crc = zlib.crc32(data);
    const comp = zlib.deflateRawSync(data, { level: 9 });
    const useComp = comp.length < data.length;
    const body = useComp ? comp : data;
    const nm = Buffer.from(name, 'utf8');
    const h = Buffer.alloc(30);
    h.writeUInt32LE(0x04034b50, 0); h.writeUInt16LE(20, 4); h.writeUInt16LE(0x0800, 6); h.writeUInt16LE(useComp ? 8 : 0, 8);
    h.writeUInt16LE(dosTime, 10); h.writeUInt16LE(dosDate, 12); h.writeUInt32LE(crc >>> 0, 14);
    h.writeUInt32LE(body.length, 18); h.writeUInt32LE(data.length, 22); h.writeUInt16LE(nm.length, 26); h.writeUInt16LE(0, 28);
    local.push(h, nm, body);
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(0x0800, 8); c.writeUInt16LE(useComp ? 8 : 0, 10);
    c.writeUInt16LE(dosTime, 12); c.writeUInt16LE(dosDate, 14); c.writeUInt32LE(crc >>> 0, 16); c.writeUInt32LE(body.length, 20);
    c.writeUInt32LE(data.length, 24); c.writeUInt16LE(nm.length, 28); c.writeUInt32LE(offset, 42);
    central.push(c, nm);
    offset += 30 + nm.length + body.length;
  }
  const cd = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(names.length, 8); end.writeUInt16LE(names.length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16);
  fs.writeFileSync(file, Buffer.concat([...local, cd, end]));
}
const files = walk(OUT);
const ZIP = path.join(OUT, 'markrun-itch.zip');
if (!flag('no-zip')) writeZip(ZIP, OUT, files);

// 5. report
const size = (f) => fs.statSync(path.join(OUT, f)).size;
const total = files.reduce((a, f) => a + size(f), 0);
const js = files.filter((f) => f.startsWith('js/'));
console.log(`\nweb edition built: ${rel(OUT)}/  (${files.length} files, ${kb(total)} uncompressed)`);
for (const f of js) console.log(`  ${f.padEnd(28)} ${kb(size(f))}`);
console.log(`  data.json                    ${kb(size('data.json'))}   fonts ${kb(files.filter((f) => f.startsWith('assets/fonts/')).reduce((a, f) => a + size(f), 0))}   audio ${kb(files.filter((f) => f.startsWith('assets/audio/')).reduce((a, f) => a + size(f), 0))}`);
if (!flag('no-zip')) console.log(`  ZIP: ${rel(ZIP)}  ${kb(fs.statSync(ZIP).size)}  <- upload this to itch.io (Kind: HTML)`);
void result;
