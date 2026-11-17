// Commentary voices via speechSynthesis (offline/system voices only). Two commentators: Jeff and Pam.
// Always subtitled; never more than ~2 lines queued; falls back to subtitles only when TTS is unavailable/off.
const MALE = /(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i;
const FEMALE = /(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;

export function createVoice({ onLine, onIdle } = {}) {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  let enabled = true;
  let volume = 0.9;
  let voices = { jeff: null, pam: null };
  const queue = [];
  let current = null;
  let watchdog = null;

  function pickVoices() {
    if (!synth) return;
    const all = synth.getVoices() || [];
    if (!all.length) return;
    const gb = all.filter((v) => /en[-_]GB/i.test(v.lang));
    const en = all.filter((v) => /^en/i.test(v.lang));
    const pool = gb.length ? gb : en.length ? en : all;
    const local = (list) => [...list.filter((v) => v.localService), ...list.filter((v) => !v.localService)];
    const p = local(pool);
    const male = p.find((v) => MALE.test(v.name)) || p[0];
    const female = p.find((v) => FEMALE.test(v.name) && v !== male) || p.find((v) => v !== male) || male;
    voices = { jeff: male, pam: female };
  }
  if (synth) { pickVoices(); synth.addEventListener?.('voiceschanged', pickVoices); }

  const estimate = (text) => Math.max(2200, String(text).split(/\s+/).length * 400 + 600);

  function next() {
    clearTimeout(watchdog);
    current = null;
    let item = queue.shift();
    while (item && item.priority < 3 && Date.now() - item.at > 8000) item = queue.shift(); // stale: drop it
    if (!item) { onIdle?.(); return; }
    current = item;
    onLine?.(item);
    const finish = () => { if (current === item) next(); };
    if (enabled && synth && (voices.jeff || voices.pam)) {
      const u = new SpeechSynthesisUtterance(item.text);
      const v = item.speaker === 'pam' ? voices.pam : voices.jeff;
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
      const sameVoice = voices.jeff === voices.pam;
      u.pitch = item.speaker === 'pam' ? (sameVoice ? 1.35 : 1.08) : (sameVoice ? 0.8 : 0.95);
      u.rate = item.rate || 1.06;
      u.volume = volume;
      u.onend = finish; u.onerror = finish;
      try { synth.speak(u); } catch { /* fall through to watchdog */ }
      watchdog = setTimeout(() => { try { synth.cancel(); } catch { /* */ } finish(); }, estimate(item.text) * 2.2 + 2000);
    } else {
      watchdog = setTimeout(finish, estimate(item.text));
    }
  }

  function say(text, speaker = 'jeff', { priority = 2, interrupt = false } = {}) {
    if (!text) return;
    const item = { text: String(text), speaker, priority, at: Date.now() };
    if (interrupt) { queue.length = 0; cancelCurrent(); }
    queue.push(item);
    // keep at most 2 waiting lines: drop the lowest-priority (oldest first) ones
    while (queue.length > 2) {
      let worst = 0;
      for (let i = 1; i < queue.length; i++) if (queue[i].priority < queue[worst].priority) worst = i;
      queue.splice(worst, 1);
    }
    if (!current) next();
  }
  function cancelCurrent() {
    clearTimeout(watchdog);
    if (synth) { try { synth.cancel(); } catch { /* */ } }
    current = null;
  }
  function clear() { queue.length = 0; cancelCurrent(); onIdle?.(); }

  return {
    say, clear,
    get busy() { return !!current || queue.length > 0; },
    get available() { return !!synth; },
    setEnabled(on) { enabled = !!on; if (!enabled && synth) { try { synth.cancel(); } catch { /* */ } } },
    setVolume(v) { volume = Math.max(0, Math.min(1, v)); },
    // resolves when everything queued so far has been said (or after maxMs)
    whenIdle(maxMs = 15000) {
      return new Promise((res) => {
        const t0 = Date.now();
        const iv = setInterval(() => { if ((!current && !queue.length) || Date.now() - t0 > maxMs) { clearInterval(iv); res(); } }, 120);
      });
    },
    get voiceNames() { return { jeff: voices.jeff?.name, pam: voices.pam?.name }; },
  };
}
