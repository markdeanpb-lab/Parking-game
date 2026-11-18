// Commentary voices: Jeff and Pam. Two engines, chosen per line:
//   premium  - Kokoro neural voices rendered ahead of time in a Web Worker (client/shared/audio/premium.js) and
//              played on the audio engine's voice bus (music ducks under it);
//   fallback - the browser's speechSynthesis (offline/system voices), for any line that isn't rendered in time.
// Always subtitled (onLine fires when the line actually starts, with durMs when it is known); one line at a time,
// never more than 2 waiting (lowest priority dropped first), stale low-priority lines dropped; subtitles only when
// TTS is unavailable/off.
import { createPremiumVoices, speakable } from '../shared/audio/premium.js';

const MALE = /(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i;
const FEMALE = /(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;

export function createVoice({ onLine, onIdle, audio = null, premium: premiumOpts = null } = {}) {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  let enabled = true;
  let volume = 0.9;
  let voices = { jeff: null, pam: null };
  const queue = [];
  let current = null;
  let watchdog = null;
  let handle = null; // premium playback
  let premiumOn = false;
  const premium = premiumOpts && audio ? createPremiumVoices(premiumOpts) : null;
  const stats = { premium: 0, fallback: 0 };

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
    current = null; handle = null;
    let item = queue.shift();
    while (item && item.priority < 3 && Date.now() - item.at > 8000) item = queue.shift(); // stale: drop it
    if (!item) { onIdle?.(); return; }
    current = item;
    const usePremium = premiumOn && enabled && premium?.ready && audio?.ready?.() && !audio.muted;
    if (usePremium) {
      // being rendered right now and nearly done? a short pause beats switching voices mid-scene
      const wait = item.waited ? Infinity : premium.eta(item.text, item.speaker);
      if (wait > 0 && wait < 900) { item.waited = true; watchdog = setTimeout(() => { if (current === item) { queue.unshift(item); next(); } }, wait + 60); return; }
      const hit = premium.take(item.text, item.speaker);
      if (hit) { playPremium(item, hit); return; }
    }
    playFallback(item);
  }
  function playPremium(item, hit) {
    stats.premium++;
    item.engine = 'premium'; item.durMs = hit.durMs;
    onLine?.(item);
    const finish = () => { if (current === item) next(); };
    handle = audio.playVoice(hit.pcm, hit.sampleRate, { onended: finish });
    if (!handle) { playFallback(item, true); return; }
    watchdog = setTimeout(finish, hit.durMs + 1500);
  }
  function playFallback(item, already = false) {
    stats.fallback++;
    item.engine = 'speech';
    if (!already) onLine?.(item);
    const finish = () => { if (current === item) next(); };
    if (enabled && synth && (voices.jeff || voices.pam)) {
      const u = new SpeechSynthesisUtterance(speakable(item.text));
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
    try { handle?.stop(); } catch { /* */ }
    handle = null;
    if (synth) { try { synth.cancel(); } catch { /* */ } }
    current = null;
  }
  function clear() { queue.length = 0; cancelCurrent(); onIdle?.(); }

  return {
    say, clear,
    get busy() { return !!current || queue.length > 0; },
    get available() { return !!synth || premiumOn; },
    setEnabled(on) { enabled = !!on; if (!enabled) { try { handle?.stop(); } catch { /* */ } if (synth) { try { synth.cancel(); } catch { /* */ } } } },
    setVolume(v) { volume = Math.max(0, Math.min(1, v)); audio?.setVoiceVolume?.(Math.min(1.3, volume * 1.15)); },
    // premium (Kokoro) voices: turn on/off (the Options toggle); prefetch lines; status for the Options screen
    setPremium(on) {
      if (!premium) return;
      on = !!on;
      if (on === premiumOn) return;
      premiumOn = on;
      if (on) premium.start(); else premium.stop();
    },
    get premium() { return premium; },
    get premiumOn() { return premiumOn; },
    prefetch(group, lines, opts) { if (premium && premiumOn) premium.want(group, lines, opts); },
    groupStarts(group, at = Date.now()) { if (premium && premiumOn) premium.setGroupStart(group, at); },
    forget(prefix) { premium?.forget(prefix); },
    get stats() { return { ...stats, ...(premium ? { engine: premium.status } : {}) }; },
    // resolves when everything queued so far has been said (or after maxMs)
    whenIdle(maxMs = 15000) {
      return new Promise((res) => {
        const t0 = Date.now();
        const iv = setInterval(() => { if ((!current && !queue.length) || Date.now() - t0 > maxMs) { clearInterval(iv); res(); } }, 120);
      });
    },
    // resolves once these lines are rendered (or after maxMs): lets a scene hold its first beat for the good voice
    whenRendered(lines, maxMs = 2500) {
      return new Promise((res) => {
        if (!premium || !premiumOn || premium.status.status !== 'ready') { res(false); return; }
        const t0 = Date.now();
        const iv = setInterval(() => {
          const all = lines.every((l) => premium.has(l.text, l.speaker));
          if (all || Date.now() - t0 > maxMs) { clearInterval(iv); res(all); }
        }, 100);
      });
    },
    get voiceNames() { return { jeff: voices.jeff?.name, pam: voices.pam?.name }; },
  };
}
