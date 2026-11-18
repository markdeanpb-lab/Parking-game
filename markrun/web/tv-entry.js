// TV role: start the in-page host (game + hub + WebRTC room), then load the unmodified TV UI on the local channel.
import { startHost } from './host.js';
import { mountShell } from './shell.js';
import { decorateTv } from './tv-decor.js';

export async function startTv({ params, onStatus = () => {} }) {
  onStatus('Loading the race data…');
  const web = await startHost({ params });
  onStatus('Opening the room…');
  await mountShell('tv');
  decorateTv(web);
  await import('../client/tv/main.js');
  // keep the MacBook awake while it's the TV (not allowed in some iframes: ignore)
  let lock = null;
  const keepAwake = async () => { try { if (!lock && document.visibilityState === 'visible' && navigator.wakeLock) { lock = await navigator.wakeLock.request('screen'); lock.addEventListener?.('release', () => { lock = null; }); } } catch { /* */ } };
  addEventListener('pointerdown', keepAwake);
  addEventListener('keydown', keepAwake);
  document.addEventListener('visibilitychange', keepAwake);
  return web;
}
