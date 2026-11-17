// Online (cloud-hosted) mode: the hosting proxy connects from loopback, so loopback must NOT grant the TV role,
// and the QR/join URL must be the public https address.
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WebSocket = createRequire(path.join(ROOT, 'package.json'))('ws');

async function start(env) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'markrun-online-'));
  const srv = spawn(process.execPath, ['--disable-warning=ExperimentalWarning', 'server/index.mjs', '--fresh'], {
    cwd: ROOT, env: { ...process.env, PORT: '0', MARKRUN_SESSION_DB: path.join(tmp, 's.db'), ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '';
  srv.stdout.on('data', (d) => { out += d; });
  const port = await new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error(out)), 15000);
    const iv = setInterval(() => { const m = out.match(/MARKRUN_READY port=(\d+)/); if (m) { clearTimeout(t); clearInterval(iv); res(Number(m[1])); } }, 50);
  });
  const key = (out.match(/key=([a-z0-9]+)/) || [])[1];
  return { srv, port, key, out };
}
function helloTv(port, key) {
  return new Promise((res) => {
    const ws = new WebSocket(`ws://127.0.0.1:${port}/ws`);
    ws.on('open', () => ws.send(JSON.stringify({ t: 'hello', role: 'tv', key })));
    ws.on('message', (d) => { const m = JSON.parse(d); if (['welcome', 'error'].includes(m.t)) { ws.close(); res(m.t === 'welcome' ? 'ok' : m.code || 'error'); } });
    setTimeout(() => res('timeout'), 5000);
  });
}

test('online mode: public join URL, no loopback trust, TV needs the key', async () => {
  const { srv, port, key } = await start({ MARKRUN_PUBLIC_URL: 'https://example-8080.app.github.dev' });
  try {
    const h = await (await fetch(`http://127.0.0.1:${port}/healthz`)).json();
    assert.equal(h.joinUrl, 'https://example-8080.app.github.dev/phone');
    const r = await fetch(`http://127.0.0.1:${port}/`, { redirect: 'manual' });
    assert.equal(r.headers.get('location'), '/phone');
    assert.notEqual(await helloTv(port, undefined), 'ok');
    assert.ok(key);
    assert.equal(await helloTv(port, key), 'ok');
  } finally { srv.kill('SIGTERM'); }
});

test('LAN mode: host browser on loopback is the TV; proxied requests are not', async () => {
  const { srv, port } = await start({});
  try {
    const r = await fetch(`http://127.0.0.1:${port}/`, { redirect: 'manual' });
    assert.match(r.headers.get('location'), /^\/tv\?key=/);
    const p = await fetch(`http://127.0.0.1:${port}/`, { redirect: 'manual', headers: { 'X-Forwarded-For': '203.0.113.9' } });
    assert.equal(p.headers.get('location'), '/phone');
    assert.equal(await helloTv(port, undefined), 'ok');
  } finally { srv.kill('SIGTERM'); }
});
