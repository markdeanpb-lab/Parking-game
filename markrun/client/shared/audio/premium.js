// Premium commentary voices (Kokoro neural TTS) for the TV: worker management, a deadline-aware render queue and a
// cache of rendered lines. voice.js asks for a line when it is due; if it is not rendered yet it falls back to the
// browser's speechSynthesis for that line.
//
// Lines are registered ahead of time in GROUPS ("race:<roundId>", "intro:<roundId>", ...). Each line has an offset
// (ms) inside its group; a group's start time is estimated, then fixed when the phase really starts. The scheduler
// renders, one line at a time, the line whose deadline is nearest and still reachable, preferring important lines:
// on a slow machine the important / early lines get rendered and the rest fall back gracefully.
import { VOICES, VOICE_SPEED, ORT_CDN } from './config.js';

const WORKER_URL = (() => { try { return new URL('tts-worker.js', import.meta.url).href; } catch { return '/dist/tts-worker.js'; } })();
const keyOf = (text, speaker) => `${VOICES[speaker] ? speaker : 'jeff'}|${speakable(text)}`;

// Text as it should be spoken (both engines): no emoji, money read out, a few abbreviations expanded.
export function speakable(text) {
  return String(text || '')
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}]/gu, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[−–]\s?(\d)/g, 'minus $1')
    .replace(/\b(\d[\d,]*)\s?pp\b/gi, (_, n) => `${n} Parkpound${n === '1' ? '' : 's'}`)
    .replace(/\bpp\b/g, 'Parkpounds')
    .replace(/×\s?(\d+)/g, 'times $1')
    .replace(/\bMARKRUN\b/gi, 'Mark Run')
    .replace(/\bPBs\b/g, 'P.B.s').replace(/\bPB\b/g, 'P.B.')
    .replace(/(\d)\s?km\b/gi, '$1 kilometres').replace(/\bkm\b/gi, 'K')
    .replace(/(\d)k\b/gi, '$1 K')
    .replace(/\s+v\s+/g, ' versus ').replace(/\bvs\.?\s/gi, 'versus ')
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/&/g, ' and ')
    .replace(/[“”"]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
// rough spoken length (s) of a line: ~14 characters per second, at least a second
export const spokenS = (text) => Math.max(1, speakable(text).length / 14);

export function createPremiumVoices({ source = 'local', localBase = '/voices/', onStatus, now = () => Date.now(), threads, workerUrl = WORKER_URL, maxCache = 220 } = {}) {
  const st = { status: 'idle', reason: '', progress: 0, loadedMB: 0, totalMB: 0, cached: false, threads: 0, isolated: false, loadMs: 0, rtf: 2, rendered: 0, missed: 0, renderMs: [], lastError: '' };
  let worker = null;
  let wanted = true; // the Options toggle
  let inFlight = null; // job
  let seq = 0;
  const jobs = new Map(); // key -> job { key, text, speaker, group, atMs, priority, seq, state: 'queued'|'rendering'|'done'|'late' }
  const cache = new Map(); // key -> { pcm, sampleRate, durMs, used }
  const groups = new Map(); // name -> { startAt }
  const files = new Map(); // download progress per file
  const emit = () => { try { onStatus?.({ ...st }); } catch { /* */ } };
  const set = (patch) => { Object.assign(st, patch); emit(); };

  const abs = (u) => { try { return new URL(u, typeof location !== 'undefined' ? location.href : 'http://localhost/').href; } catch { return u; } };

  async function probe() {
    if (typeof Worker === 'undefined' || typeof WebAssembly === 'undefined') { set({ status: 'unavailable', reason: 'This browser cannot run the voice engine' }); return false; }
    if (source === 'local') {
      try {
        const r = await fetch(`${localBase}manifest.json`, { cache: 'no-store' });
        if (!r.ok) throw new Error(String(r.status));
        const m = await r.json();
        set({ totalMB: Math.round((m.bytes || 0) / 1048576), cached: true });
        return true;
      } catch {
        set({ status: 'unavailable', reason: 'not-downloaded' });
        return false;
      }
    }
    // remote (web edition): already in this browser's cache?
    try {
      if (typeof caches !== 'undefined') {
        const c = await caches.open('transformers-cache');
        st.cached = !!(await c.match('https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/onnx/model_quantized.onnx'));
      }
    } catch { /* no Cache API (e.g. not a secure context) */ }
    if (typeof navigator !== 'undefined' && navigator.onLine === false && !st.cached) { set({ status: 'unavailable', reason: 'offline' }); return false; }
    return true;
  }

  async function start() {
    wanted = true;
    if (worker || st.status === 'loading' || st.status === 'checking') return;
    set({ status: 'checking' });
    if (!(await probe())) return;
    if (!wanted) { set({ status: 'off' }); return; }
    try { worker = new Worker(workerUrl, { type: 'module' }); } catch (e) { set({ status: 'unavailable', reason: `worker: ${e.message}` }); return; }
    set({ status: 'loading', progress: 0 });
    worker.onmessage = (e) => onMsg(e.data || {});
    worker.onerror = (e) => { set({ status: 'error', lastError: String(e?.message || 'worker error') }); stopWorker(); };
    const hc = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
    const n = threads || Math.max(1, Math.min(4, Math.floor(hc / 2)));
    worker.postMessage({
      t: 'init', source,
      localBase: abs(localBase), ortBase: source === 'local' ? abs(`${localBase}ort/`) : ORT_CDN,
      threads: n, voices: [VOICES.jeff, VOICES.pam], warm: true,
    });
  }
  function stopWorker() {
    try { worker?.terminate(); } catch { /* */ }
    worker = null; inFlight = null;
    for (const j of jobs.values()) if (j.state === 'rendering') j.state = 'queued';
  }
  function stop() {
    wanted = false;
    stopWorker();
    if (st.status !== 'unavailable') set({ status: 'off' });
  }

  function onMsg(m) {
    if (m.t === 'progress') {
      if (m.file) files.set(m.file, { loaded: m.loaded || 0, total: m.total || 0 });
      let l = 0, t = 0;
      for (const f of files.values()) { l += f.loaded; t += f.total; }
      set({ progress: t ? l / t : 0, loadedMB: Math.round(l / 1048576), totalMB: Math.max(st.totalMB, Math.round(t / 1048576)) });
    } else if (m.t === 'ready') {
      set({ status: 'ready', progress: 1, threads: m.threads, isolated: m.isolated, loadMs: m.loadMs, cached: true });
      pump();
    } else if (m.t === 'audio') {
      const j = inFlight && inFlight.id === m.id ? inFlight : null;
      inFlight = null;
      if (j) {
        j.state = 'done';
        const durMs = Math.round((m.pcm.length / m.sampleRate) * 1000);
        cache.set(j.key, { pcm: m.pcm, sampleRate: m.sampleRate, durMs, used: now(), doneAt: now(), group: j.group });
        st.rendered++;
        st.renderMs.push(m.ms); if (st.renderMs.length > 40) st.renderMs.shift();
        st.rtf = 0.6 * st.rtf + 0.4 * (m.ms / Math.max(300, durMs));
        evict();
        emit();
      }
      pump();
    } else if (m.t === 'error') {
      if (m.fatal) { set({ status: 'error', lastError: m.msg }); stopWorker(); return; }
      if (inFlight && m.id === inFlight.id) { inFlight.state = 'late'; inFlight = null; }
      st.lastError = m.msg;
      pump();
    }
  }

  function needAt(j) {
    const g = groups.get(j.group);
    return g && Number.isFinite(g.startAt) ? g.startAt + j.atMs : Infinity;
  }
  // the next line worth rendering: earliest deadline that can still be met, important lines first
  function pick() {
    const t = now();
    const estMs = (j) => spokenS(j.text) * 1000 * st.rtf;
    let best = null, bestScore = Infinity;
    for (const j of jobs.values()) {
      if (j.state !== 'queued' || cache.has(j.key)) continue;
      const need = needAt(j);
      if (need !== Infinity && t + estMs(j) > need + 400) { // can't make it any more
        if (need < t) { j.state = 'late'; continue; }
        continue; // maybe later its group start moves; skip for now
      }
      const score = (need === Infinity ? 1e13 + j.seq * 10 : need) - j.priority * 4000;
      if (score < bestScore) { bestScore = score; best = j; }
    }
    return best;
  }
  function pump() {
    if (!worker || st.status !== 'ready' || inFlight) return;
    const j = pick();
    if (!j) return;
    j.state = 'rendering'; j.id = ++seq; j.startedAt = now();
    inFlight = j;
    worker.postMessage({ t: 'gen', id: j.id, text: speakable(j.text), voice: VOICES[j.speaker] || VOICES.jeff, speed: VOICE_SPEED[j.speaker] || 1 });
  }
  function evict() {
    if (cache.size <= maxCache) return;
    const active = new Set([...jobs.values()].filter((j) => j.state === 'queued' || needAt(j) > now()).map((j) => j.key));
    const old = [...cache.entries()].filter(([k]) => !active.has(k)).sort((a, b) => a[1].used - b[1].used);
    for (const [k] of old) { if (cache.size <= maxCache) break; cache.delete(k); }
  }

  // Register (or replace) a group's lines: [{ text, speaker, atMs, priority }]. Lines no longer in the group are dropped.
  function want(group, lines, { startAt } = {}) {
    if (startAt !== undefined) setGroupStart(group, startAt);
    else if (!groups.has(group)) groups.set(group, { startAt: Infinity });
    const keep = new Set();
    for (const l of lines || []) {
      if (!l?.text || !speakable(l.text)) continue;
      const speaker = VOICES[l.speaker] ? l.speaker : 'jeff';
      const key = keyOf(l.text, speaker);
      keep.add(key);
      const j = jobs.get(key);
      if (j) { // a line may be wanted by several groups: keep the earliest need
        if (j.group !== group && needAt(j) <= (groups.get(group).startAt + (l.atMs || 0))) continue;
        Object.assign(j, { group, atMs: l.atMs || 0, priority: Math.max(j.priority, l.priority || 1) });
        if (j.state === 'late') j.state = 'queued';
        continue;
      }
      jobs.set(key, { key, text: l.text, speaker, group, atMs: l.atMs || 0, priority: l.priority || 1, seq: ++seq, state: 'queued' });
    }
    for (const [k, j] of jobs) if (j.group === group && !keep.has(k) && j.state === 'queued') jobs.delete(k);
    pump();
  }
  function setGroupStart(group, startAt) {
    const g = groups.get(group) || {};
    g.startAt = startAt;
    groups.set(group, g);
    for (const j of jobs.values()) if (j.group === group && j.state === 'late' && !cache.has(j.key)) j.state = 'queued'; // re-judged on the new clock
    pump();
  }
  function forget(prefix) { // a finished phase: its queued lines are no use any more
    for (const [k, j] of jobs) if (j.group.startsWith(prefix) && j.state !== 'rendering') jobs.delete(k);
    for (const g of [...groups.keys()]) if (g.startsWith(prefix)) groups.delete(g);
  }
  // the rendered line, or null (the caller falls back). A miss also stops the queue rendering it for nothing.
  function take(text, speaker) {
    const key = keyOf(text, speaker);
    const c = cache.get(key);
    if (c) { c.used = now(); return c; }
    const j = jobs.get(key);
    if (j && j.state === 'queued') { j.state = 'missed'; st.missed++; } else if (!j || j.state !== 'rendering') st.missed++;
    return null;
  }
  // ms until a line is likely ready (Infinity if it isn't being rendered right now)
  function eta(text, speaker) {
    const key = keyOf(text, speaker);
    if (cache.has(key)) return 0;
    const j = jobs.get(key);
    if (!j || j.state !== 'rendering') return Infinity;
    return Math.max(0, j.startedAt + spokenS(j.text) * 1000 * st.rtf - now());
  }
  function has(text, speaker) { return cache.has(keyOf(text, speaker)); }
  function peek(text, speaker) { return cache.get(keyOf(text, speaker)) || null; }

  return {
    start, stop, want, setGroupStart, forget, take, eta, has, peek,
    get ready() { return st.status === 'ready'; },
    get status() { return { ...st }; },
    get queued() { return [...jobs.values()].filter((j) => j.state === 'queued').length; },
    _jobs: jobs, _cache: cache, _pick: pick,
  };
}
