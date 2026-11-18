// MARKRUN host: static web server for the TV + phones, WebSocket game hub, persistent session.
// Usage: npm start [-- --port 8080 --host 192.168.1.20 --fresh]  (--fresh forgets the saved session; older saves are migrated)
// Env: PORT, MARKRUN_HOST (address advertised to phones), MARKRUN_SESSION_DB, MARKRUN_ROUND_SOURCE=fixture
// Never makes outbound internet requests — except the explicit "Refresh Historical Data" button in the TV lobby
// (server/import/refresh.mjs, loaded lazily only when that button is pressed).
import http from 'node:http';
import QRCode from 'qrcode';
import { serveStatic, notFound } from './net/static.mjs';
import { pickLanAddress, lanCandidates } from './net/lan.mjs';
import { Game, newSessionState } from './net/game.mjs';
import { attachHub, isTrustedLocal, setTrustLoopback } from './net/hub.mjs';
import crypto from 'node:crypto';
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
// TV key: lets a smart-TV browser on the LAN act as the TV. Persisted with the session so a restart keeps it valid.
game.s.tvKey ||= crypto.randomBytes(5).toString('hex');
const tvKey = game.s.tvKey;
save();
const info = { roundSource: 'unknown' };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/') { // the host's own browser goes to the TV (with its key); anyone else is probably a phone
    res.writeHead(302, { Location: isTrustedLocal(req) ? `/tv?key=${tvKey}` : '/phone' });
    return res.end();
  }
  if (url.pathname === '/qr.svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'no-cache' });
    return res.end(qrSvg);
  }
  if (url.pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, phase: game.s.phase, round: game.s.roundNumber, players: game.s.players.length, scores: game.s.players.map((p) => [p.name, p.score || 0]), history: (game.s.history || []).length, source: rounds.sourceName(), joinUrl, tvUrl }));
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
  if (url.pathname.startsWith('/ws')) return notFound(res);
  serveStatic(req, res);
});

server.listen(PORT, LISTEN, async () => {
  const port = server.address().port;
  const host = pickLanAddress(arg('host') || process.env.MARKRUN_HOST);
  // Cloud hosting (e.g. GitHub Codespaces): advertise the public https address instead of a LAN IP.
  const cs = process.env.CODESPACE_NAME && process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
    ? `https://${process.env.CODESPACE_NAME}-${port}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}` : '';
  const publicUrl = String(arg('public-url') || process.env.MARKRUN_PUBLIC_URL || cs).replace(/\/+$/, '');
  const base = publicUrl || `http://${host}:${port}`;
  if (publicUrl) setTrustLoopback(false);
  tvUrl = `${base}/tv`;
  joinUrl = `${base}/phone`;
  qrSvg = await QRCode.toString(joinUrl, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#14183cff', light: '#ffffffff' } });
  attachHub(server, game, { joinUrl, tvUrl, qrSvg, info, tvKey });
  const others = lanCandidates().filter((c) => c.address !== host).map((c) => `${c.address} (${c.name})`);
  console.log('');
  console.log('  ███ MARKRUN host is up ███');
  if (publicUrl) {
    console.log(`  ONLINE MODE - open this on the computer plugged into the TV (keep it private, it contains the TV key):`);
    console.log(`  TV:  ${tvUrl}?key=${tvKey}`);
  } else console.log(`  TV  (open on the computer driving the telly):  http://localhost:${port}/   or on a smart TV: ${tvUrl}?key=${tvKey}`);
  console.log(`  Phones join at:                                ${joinUrl}   (or scan the QR on the TV)`);
  if (others.length) console.log(`  Wrong network? Other addresses: ${others.join(', ')}  -> restart with --host <ip>`);
  console.log(`  Session: ${saved ? `resumed (${game.s.phase}, round ${game.s.roundNumber}, ${game.s.players.length} players)` : 'new'}  ·  Ctrl+C to stop`);
  console.log(`MARKRUN_READY port=${port}`);
});

function shutdown(sig) {
  console.log(`[markrun] ${sig || 'shutdown'} received - session saved, exiting`);
  save();
  game.dispose();
  server.close();
  closeAll();
  process.exit(0);
}
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
