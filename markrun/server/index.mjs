// MARKRUN host: static web server for the TV + phones, WebSocket game hub, persistent session.
// Usage: npm start [-- --port 8080 --host 192.168.1.20 --fresh]
// Env: PORT, MARKRUN_HOST (address advertised to phones), MARKRUN_SESSION_DB, MARKRUN_ROUND_SOURCE=fixture
// Never makes outbound internet requests.
import http from 'node:http';
import QRCode from 'qrcode';
import { serveStatic, notFound } from './net/static.mjs';
import { pickLanAddress, lanCandidates } from './net/lan.mjs';
import { Game, newSessionState } from './net/game.mjs';
import { attachHub } from './net/hub.mjs';
import { loadSession, saveSession, clearSession } from './net/persist.mjs';
import * as rounds from './net/roundsource.mjs';
import { sessionDb, closeAll } from './db.mjs';

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  if (i >= 0) return process.argv[i + 1];
  const eq = process.argv.find((a) => a.startsWith(`--${name}=`));
  return eq ? eq.split('=').slice(1).join('=') : undefined;
}
const flag = (name) => process.argv.includes(`--${name}`);

const PORT = Number(arg('port') ?? process.env.PORT ?? 8080);
const LISTEN = arg('listen') || process.env.MARKRUN_LISTEN || '0.0.0.0';
const TIMER_SCALE = Number(process.env.MARKRUN_TIMER_SCALE || 1);

const db = sessionDb();
if (flag('fresh')) clearSession(db);
const saved = loadSession(db);
const game = new Game({ state: saved || newSessionState(), rounds, timeScale: TIMER_SCALE });
const save = () => { try { saveSession(game.s, db); } catch (e) { console.error('[markrun] save failed:', e.message); } };
game.on('change', save);
game.on('persist', save);
save();

let joinUrl = '', tvUrl = '', qrSvg = '';
const info = { roundSource: 'unknown' };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/') { res.writeHead(302, { Location: '/tv' }); return res.end(); }
  if (url.pathname === '/qr.svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'no-cache' });
    return res.end(qrSvg);
  }
  if (url.pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, phase: game.s.phase, round: game.s.roundNumber, players: game.s.players.length, source: rounds.sourceName(), joinUrl, tvUrl }));
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
  if (url.pathname.startsWith('/ws')) return notFound(res);
  serveStatic(req, res);
});

server.listen(PORT, LISTEN, async () => {
  const port = server.address().port;
  const host = pickLanAddress(arg('host') || process.env.MARKRUN_HOST);
  const base = `http://${host}:${port}`;
  tvUrl = `${base}/tv`;
  joinUrl = `${base}/phone`;
  qrSvg = await QRCode.toString(joinUrl, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#14183cff', light: '#ffffffff' } });
  attachHub(server, game, { joinUrl, tvUrl, qrSvg, info });
  const others = lanCandidates().filter((c) => c.address !== host).map((c) => `${c.address} (${c.name})`);
  console.log('');
  console.log('  ███ MARKRUN host is up ███');
  console.log(`  TV  (open on the computer driving the telly):  ${tvUrl}`);
  console.log(`  Phones join at:                                ${joinUrl}   (or scan the QR on the TV)`);
  if (others.length) console.log(`  Wrong network? Other addresses: ${others.join(', ')}  -> restart with --host <ip>`);
  console.log(`  Session: ${saved ? `resumed (${game.s.phase}, round ${game.s.roundNumber}, ${game.s.players.length} players)` : 'new'}  ·  Ctrl+C to stop`);
  console.log(`MARKRUN_READY port=${port}`);
});

function shutdown() {
  save();
  game.dispose();
  server.close();
  closeAll();
  process.exit(0);
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
