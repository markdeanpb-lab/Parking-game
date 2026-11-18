// Message framing over WebRTC data channels. Interop-safe data channel messages are < 16 KB, but a phone's state view
// can be bigger, so long strings are split into chunks (each <= ~15 KB of UTF-8) and reassembled on the other side.
// Wire format: a whole message is the JSON text itself (starts with '{'); a chunk is "\u0001<id>|<i>|<n>|<part>".
const CHUNK_CHARS = 5000; // a UTF-16 code unit is at most 3 bytes of UTF-8 -> <= 15000 bytes per chunk
const MAX_PARTS = 400;    // ~2 MB per message, far above anything the game sends
let seq = 0;

export function encodeFrames(str, chunkChars = CHUNK_CHARS) {
  str = String(str);
  if (str.length <= chunkChars) return [str];
  const id = `${Date.now().toString(36)}${(seq++).toString(36)}`;
  const n = Math.ceil(str.length / chunkChars);
  const out = [];
  for (let i = 0; i < n; i++) {
    let a = i * chunkChars, b = Math.min(str.length, a + chunkChars);
    out.push([a, b]);
  }
  // never split a surrogate pair across chunks
  for (let i = 0; i < out.length - 1; i++) {
    const b = out[i][1];
    const c = str.charCodeAt(b - 1);
    if (c >= 0xd800 && c <= 0xdbff) { out[i][1] = b - 1; out[i + 1][0] = b - 1; }
  }
  return out.map(([a, b], i) => `\u0001${id}|${i}|${n}|${str.slice(a, b)}`);
}

export function createDecoder({ maxBytes = 2_000_000, ttlMs = 30_000 } = {}) {
  const pending = new Map(); // id -> { parts, got, n, at }
  return function decode(frame) {
    if (typeof frame !== 'string') {
      if (frame instanceof ArrayBuffer || ArrayBuffer.isView(frame)) frame = new TextDecoder().decode(frame);
      else return null;
    }
    if (frame.charCodeAt(0) !== 1) return frame;
    const m = /^\u0001([^|]+)\|(\d+)\|(\d+)\|/.exec(frame);
    if (!m) return null;
    const [head, id, si, sn] = m;
    const i = Number(si), n = Number(sn);
    if (!(n > 0 && n <= MAX_PARTS && i < n)) return null;
    const now = Date.now();
    for (const [k, v] of pending) if (now - v.at > ttlMs) pending.delete(k);
    let p = pending.get(id);
    if (!p) { p = { parts: new Array(n), got: 0, n, at: now, size: 0 }; pending.set(id, p); }
    if (p.n !== n || p.parts[i] != null) return null;
    p.parts[i] = frame.slice(head.length);
    p.got++;
    p.size += p.parts[i].length;
    if (p.size > maxBytes) { pending.delete(id); return null; }
    if (p.got < n) return null;
    pending.delete(id);
    return p.parts.join('');
  };
}
