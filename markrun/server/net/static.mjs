// Tiny static file server for the LAN host. Serves client/ and a few data files. No outbound requests, ever.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { ROOT, DATA } from '../db.mjs';

export const CLIENT = path.join(ROOT, 'client');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.ttf': 'font/ttf', '.otf': 'font/otf', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.map': 'application/json', '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json',
  '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.webmanifest': 'application/manifest+json',
  '.wasm': 'application/wasm', '.onnx': 'application/octet-stream', '.bin': 'application/octet-stream',
};
// Premium voices (npm run voices:download) live in data/voices/ and are served at /voices/ to the TV.
const VOICES_DIR = path.resolve(process.env.MARKRUN_VOICES_DIR || path.join(DATA, 'voices'));
const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg', '.txt', '.map', '.gltf']);

// Fixed routes (url path -> file)
const ROUTES = {
  '/tv': 'client/tv/index.html',
  '/tv/': 'client/tv/index.html',
  '/phone': 'client/phone/index.html',
  '/phone/': 'client/phone/index.html',
  '/join': 'client/phone/index.html',
  '/p': 'client/phone/index.html',
  '/data/course.json': 'data/course/course.json',
  '/data/park.json': 'data/course/park.json',
  '/data/fixtures/round.json': 'data/fixtures/round.json',
};

const gzCache = new Map(); // file -> {mtimeMs, buf}

function resolveFile(urlPath) {
  if (ROUTES[urlPath]) return path.join(ROOT, ROUTES[urlPath]);
  let p;
  try { p = decodeURIComponent(urlPath); } catch { return null; }
  if (p.includes('\0')) return null;
  if (p.startsWith('/voices/')) {
    const full = path.normalize(path.join(VOICES_DIR, p.slice('/voices/'.length)));
    return full.startsWith(VOICES_DIR + path.sep) ? full : null;
  }
  // /dist/* -> client/dist/*, everything else maps into client/
  const full = path.normalize(path.join(CLIENT, p));
  if (!full.startsWith(CLIENT + path.sep)) return null;
  return full;
}

export function serveStatic(req, res) {
  const url = new URL(req.url, 'http://x');
  let file = resolveFile(url.pathname);
  if (!file) return notFound(res);
  let st;
  try { st = fs.statSync(file); } catch { return notFound(res); }
  if (st.isDirectory()) {
    file = path.join(file, 'index.html');
    try { st = fs.statSync(file); } catch { return notFound(res); }
  }
  const ext = path.extname(file).toLowerCase();
  const headers = {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.ttf' || ext === '.woff2' || url.pathname.startsWith('/voices/') ? 'public, max-age=86400' : 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  };
  // The TV page is cross-origin isolated when the browser allows it (http://localhost), so the voice engine can use
  // several threads; everything it loads is same-origin, and workers/modules carry the matching header.
  if (file.endsWith(`${path.sep}tv${path.sep}index.html`)) { headers['Cross-Origin-Opener-Policy'] = 'same-origin'; headers['Cross-Origin-Embedder-Policy'] = 'require-corp'; }
  else if (ext === '.js' || ext === '.mjs') headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
  const etag = `"${st.size.toString(36)}-${Math.floor(st.mtimeMs).toString(36)}"`;
  headers.ETag = etag;
  if (req.headers['if-none-match'] === etag) { res.writeHead(304, headers); return res.end(); }
  const gz = COMPRESSIBLE.has(ext) && st.size > 2048 && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (gz) {
    let c = gzCache.get(file);
    if (!c || c.mtimeMs !== st.mtimeMs) {
      c = { mtimeMs: st.mtimeMs, buf: zlib.gzipSync(fs.readFileSync(file), { level: 6 }) };
      gzCache.set(file, c);
    }
    headers['Content-Encoding'] = 'gzip';
    headers['Content-Length'] = c.buf.length;
    headers.Vary = 'Accept-Encoding';
    res.writeHead(200, headers);
    return res.end(req.method === 'HEAD' ? undefined : c.buf);
  }
  headers['Content-Length'] = st.size;
  res.writeHead(200, headers);
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
}

export function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
}

export { DATA };
