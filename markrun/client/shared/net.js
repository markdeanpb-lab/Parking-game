// WebSocket client with auto-reconnect (exponential backoff), visibility/online handling and clock sync.
export function connect({ role, getToken, getKey, onWelcome, onState, onMessage, onStatus }) {
  let ws = null;
  let attempt = 0;
  let timer = null;
  let closedByUs = false;
  let offset = 0; // serverNow - Date.now()
  let pingTimer = null;
  let lastMsgAt = 0;

  const url = () => `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;

  function status(s) { onStatus?.(s); }

  function open() {
    clearTimeout(timer);
    if (ws && (ws.readyState === 0 || ws.readyState === 1)) return;
    status(attempt ? 'reconnecting' : 'connecting');
    try { ws = new WebSocket(url()); } catch { schedule(); return; }
    const sock = ws;
    sock.onopen = () => {
      attempt = 0;
      status('open');
      lastMsgAt = Date.now();
      send({ t: 'hello', role, token: getToken?.() || undefined, key: getKey?.() || undefined });
      clearInterval(pingTimer);
      pingTimer = setInterval(() => {
        send({ t: 'ping', at: Date.now() });
        // a socket that went silent (phone slept, Wi-Fi hop) gets replaced
        if (Date.now() - lastMsgAt > 25000 && sock.readyState === 1) { try { sock.close(); } catch { /* */ } }
      }, 8000);
    };
    sock.onmessage = (ev) => {
      lastMsgAt = Date.now();
      let m;
      try { m = JSON.parse(ev.data); } catch { return; }
      if (m.t === 'pong') { if (m.serverNow) offset = m.serverNow + (Date.now() - m.at) / 2 - Date.now(); return; }
      if (m.t === 'welcome') onWelcome?.(m);
      else if (m.t === 'state') { if (m.state?.serverNow) offset = m.state.serverNow - Date.now(); onState?.(m.state); }
      else onMessage?.(m);
    };
    sock.onclose = () => {
      clearInterval(pingTimer);
      if (sock !== ws) return;
      status('closed');
      if (!closedByUs) schedule();
    };
    sock.onerror = () => { try { sock.close(); } catch { /* */ } };
  }

  function schedule() {
    clearTimeout(timer);
    const delay = Math.min(8000, 400 * 2 ** attempt) * (0.75 + Math.random() * 0.5);
    attempt++;
    timer = setTimeout(open, delay);
  }

  function send(msg) {
    if (ws && ws.readyState === 1) { ws.send(JSON.stringify(msg)); return true; }
    return false;
  }

  // phones sleep: when we come back, reconnect immediately instead of waiting for backoff
  const wake = () => {
    if (document.visibilityState === 'visible') {
      if (!ws || ws.readyState > 1) { attempt = 0; open(); }
      else send({ t: 'ping', at: Date.now() });
    }
  };
  document.addEventListener('visibilitychange', wake);
  window.addEventListener('online', () => { attempt = 0; open(); });
  window.addEventListener('pageshow', wake);
  window.addEventListener('focus', wake);

  open();
  return {
    send,
    reconnect() { attempt = 0; try { ws?.close(); } catch { /* */ } open(); },
    close() { closedByUs = true; ws?.close(); },
    serverNow: () => Date.now() + offset,
    get open() { return ws?.readyState === 1; },
  };
}
