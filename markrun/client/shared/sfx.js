// MARKRUN sound: rendered music + stings (client/assets/audio/, composed by tools/compose_audio.mjs) with synthesised
// WebAudio fallbacks for every cue, a looping stem player for the music beds, and a voice bus for the premium
// commentary. Everything loads from the game's own files (no CDN). Browsers need a user gesture first: call
// audio.unlock() from a click/keydown handler; the TV calls audio.preload() once unlocked.
const DEFAULT_BASE = (() => { try { return new URL('../assets/audio/', import.meta.url).href; } catch { return '/assets/audio/'; } })();
// cue name -> rendered asset (the synthesised version plays until the file has loaded, or if it can't)
const ASSET_CUES = { theme: 'theme', fanfare: 'fanfare', coins: 'coins', sadtrombone: 'sadtrombone', heartbeat: 'heartbeat', drumroll: 'drumroll',
  sting_in: 'sting_in', sting_comedy: 'sting_comedy', sting_drama: 'sting_drama', cardflip: 'cardflip' };
const SYNTH_STANDIN = { theme: 'fanfare', sting_in: 'sting', sting_comedy: 'reveal', sting_drama: 'sting', cardflip: 'reveal' };
const MUSIC_VOL = 0.32, MUSIC_DUCKED = 0.13;
export function createAudio({ assetBase = DEFAULT_BASE } = {}) {
  let ctx = null, master = null, sfxBus = null, musicBus = null, noiseBuf = null, comp = null, voiceBus = null;
  let volume = 0.8, muted = false, musicOn = true, voiceGain = 1;
  let music = null; // synth: { kind, timer, nextT, step, bus } | assets: { kind, assets: true, timer, nextT, bus, stems, sources }
  let ducked = false;
  // ---- rendered assets ----
  let manifest = null, manifestP = null;
  const buffers = new Map(); // file -> AudioBuffer | null (failed)
  const loading = new Map(); // file -> Promise

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.005; comp.release.value = 0.2;
    master = ctx.createGain();
    master.gain.value = muted ? 0 : volume;
    sfxBus = ctx.createGain(); sfxBus.gain.value = 0.9;
    musicBus = ctx.createGain(); musicBus.gain.value = 0.32;
    sfxBus.connect(comp); musicBus.connect(comp); comp.connect(master); master.connect(ctx.destination);
    // voices skip the music compressor (no pumping): a gentle low cut and a touch of presence
    voiceBus = ctx.createGain(); voiceBus.gain.value = voiceGain;
    const vhp = ctx.createBiquadFilter(); vhp.type = 'highpass'; vhp.frequency.value = 75;
    const vpk = ctx.createBiquadFilter(); vpk.type = 'peaking'; vpk.frequency.value = 3200; vpk.Q.value = 0.9; vpk.gain.value = 2.5;
    voiceBus.connect(vhp); vhp.connect(vpk); vpk.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return ctx;
  }

  function unlock() {
    const c = ensure();
    if (c && c.state === 'suspended') c.resume();
    return !!c;
  }
  const ready = () => ctx && ctx.state === 'running';

  function env(g, t, a, peak, hold, rel) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.setValueAtTime(peak, t + a + hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + rel);
  }
  function osc(type, freq, t, dur, { gain = 0.2, a = 0.01, rel = 0.2, dest = sfxBus, detune = 0, filter = null, pan = 0 } = {}) {
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t); o.detune.value = detune;
    const g = ctx.createGain();
    let node = o;
    if (filter) { const f = ctx.createBiquadFilter(); f.type = filter.type || 'lowpass'; f.frequency.value = filter.freq; f.Q.value = filter.q || 0.7; node.connect(f); node = f; }
    node.connect(g);
    let out = g;
    if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); out = p; }
    out.connect(dest);
    env(g, t, a, gain, Math.max(0, dur - a), rel);
    o.start(t); o.stop(t + dur + rel + 0.05);
    return o;
  }
  function noise(t, dur, { gain = 0.2, a = 0.01, rel = 0.2, type = 'bandpass', freq = 1000, q = 1, dest = sfxBus } = {}) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    const g = ctx.createGain();
    s.connect(f); f.connect(g); g.connect(dest);
    env(g, t, a, gain, Math.max(0, dur - a), rel);
    s.start(t, Math.random()); s.stop(t + dur + rel + 0.05);
    return { s, f, g };
  }
  const mtof = (m) => 440 * 2 ** ((m - 69) / 12);

  const SFX = {
    horn(t) { // air-horn start
      for (const [f, det] of [[233, 0], [293.7, 6], [349, -5]]) {
        const o = osc('sawtooth', f * 0.92, t, 1.1, { gain: 0.13, a: 0.03, rel: 0.25, filter: { freq: 2200 }, detune: det });
        o.frequency.exponentialRampToValueAtTime(f, t + 0.12);
      }
      osc('square', 116.5, t, 1.1, { gain: 0.05, a: 0.03, rel: 0.25, filter: { freq: 800 } });
    },
    crowd(t, { dur = 3.5, peak = 0.32 } = {}) { // crowd swell
      for (const [freq, q, gn] of [[700, 0.8, 1], [1800, 1.2, 0.7], [3200, 1.5, 0.35]]) {
        const n = noise(t, dur * 0.4, { gain: peak * gn, a: dur * 0.45, rel: dur * 0.55, freq, q });
        const lfo = ctx.createOscillator(); lfo.frequency.value = 5 + Math.random() * 4;
        const lg = ctx.createGain(); lg.gain.value = peak * gn * 0.35;
        lfo.connect(lg); lg.connect(n.g.gain); lfo.start(t); lfo.stop(t + dur + 0.2);
      }
      // a few "woo"s
      for (let i = 0; i < 4; i++) {
        const tt = t + 0.4 + Math.random() * dur * 0.5;
        const o = osc('triangle', 500 + Math.random() * 300, tt, 0.35, { gain: 0.025, a: 0.08, rel: 0.25, filter: { freq: 1600 }, pan: Math.random() * 1.6 - 0.8 });
        o.frequency.exponentialRampToValueAtTime(800 + Math.random() * 400, tt + 0.3);
      }
    },
    whoosh(t) {
      const n = noise(t, 0.45, { gain: 0.35, a: 0.12, rel: 0.25, freq: 400, q: 2.5 });
      n.f.frequency.exponentialRampToValueAtTime(3500, t + 0.3);
      n.f.frequency.exponentialRampToValueAtTime(700, t + 0.7);
    },
    bell(t) { // final-lap bell: two dings
      for (const tt of [t, t + 0.42]) {
        [[1, 0.22, 1.6], [2.76, 0.09, 0.9], [5.4, 0.05, 0.5], [8.93, 0.03, 0.3]].forEach(([m, g, d]) => osc('sine', 830 * m, tt, 0.01, { gain: g, a: 0.003, rel: d }));
      }
    },
    fanfare(t) {
      const notes = [[67, 0, 0.14], [72, 0.15, 0.14], [76, 0.3, 0.14], [79, 0.45, 0.32], [76, 0.8, 0.14], [79, 0.95, 0.9]];
      for (const [m, dt, d] of notes) {
        for (const det of [-7, 7]) osc('sawtooth', mtof(m), t + dt, d, { gain: 0.07, a: 0.02, rel: 0.18, filter: { freq: 2600 }, detune: det });
        osc('square', mtof(m - 12), t + dt, d, { gain: 0.03, a: 0.02, rel: 0.15, filter: { freq: 1200 } });
      }
      for (const m of [60, 64, 67, 72]) osc('triangle', mtof(m), t + 0.95, 0.9, { gain: 0.06, a: 0.03, rel: 0.6 });
      SFX.cymbal(t + 0.95, 0.12);
    },
    cymbal(t, g = 0.15) { noise(t, 0.05, { gain: g, a: 0.002, rel: 1.4, type: 'highpass', freq: 6000, q: 0.5 }); },
    kaching(t) { // cash register
      noise(t, 0.03, { gain: 0.3, a: 0.002, rel: 0.05, type: 'highpass', freq: 3000 });
      noise(t + 0.05, 0.02, { gain: 0.25, a: 0.002, rel: 0.06, type: 'bandpass', freq: 1800, q: 3 });
      for (const [f, g] of [[2093, 0.14], [2637, 0.1], [3136, 0.08], [4186, 0.05]]) osc('sine', f, t + 0.12, 0.02, { gain: g, a: 0.003, rel: 0.9 });
      for (let i = 0; i < 6; i++) osc('sine', 3000 + Math.random() * 2000, t + 0.2 + i * 0.05, 0.01, { gain: 0.03, a: 0.002, rel: 0.12 });
    },
    sadtrombone(t) {
      const seq = [[55, 0, 0.42], [54, 0.48, 0.42], [53, 0.96, 0.42], [52, 1.44, 1.3]];
      for (const [m, dt, d] of seq) {
        const o = osc('sawtooth', mtof(m), t + dt, d, { gain: 0.11, a: 0.04, rel: 0.2, filter: { freq: 1100, q: 2 } });
        if (dt > 1) { // wobble on the last note
          const lfo = ctx.createOscillator(); lfo.frequency.value = 6; const lg = ctx.createGain(); lg.gain.value = 6;
          lfo.connect(lg); lg.connect(o.frequency); lfo.start(t + dt); lfo.stop(t + dt + d + 0.3);
          o.frequency.setValueAtTime(mtof(m), t + dt); o.frequency.linearRampToValueAtTime(mtof(m - 1), t + dt + d);
        }
      }
    },
    drumroll(t, { dur = 2.2 } = {}) {
      const n = Math.floor(dur * 16);
      for (let i = 0; i < n; i++) noise(t + i / 16, 0.02, { gain: 0.04 + 0.16 * (i / n), a: 0.002, rel: 0.06, freq: 1800, q: 0.8 });
      SFX.cymbal(t + dur, 0.2);
      osc('sine', 70, t + dur, 0.05, { gain: 0.5, a: 0.003, rel: 0.4 });
    },
    sting(t) { // dramatic brass stab for a stamped verdict
      for (const m of [48, 55, 60, 63]) for (const det of [-8, 8]) osc('sawtooth', mtof(m), t, 0.16, { gain: 0.05, a: 0.01, rel: 0.5, filter: { freq: 1800 }, detune: det });
      SFX.cymbal(t, 0.1);
    },
    chip(t, { p = 0.3 } = {}) { // pitch rises with the stake (p = stake / max, 0..1)
      const f = 420 + Math.min(1, Math.max(0, p)) * 900;
      const o = osc('triangle', f, t, 0.03, { gain: 0.16, a: 0.003, rel: 0.12 }); o.frequency.exponentialRampToValueAtTime(f * 1.5, t + 0.06);
      noise(t, 0.01, { gain: 0.06, a: 0.001, rel: 0.03, type: 'highpass', freq: 4000 });
    },
    heartbeat(t, { beats = 5, bpm = 92 } = {}) {
      for (let i = 0; i < beats; i++) { const tt = t + i * 60 / bpm; osc('sine', 62, tt, 0.04, { gain: 0.55, a: 0.004, rel: 0.16 }); osc('sine', 54, tt + 0.22, 0.04, { gain: 0.4, a: 0.004, rel: 0.2 }); }
    },
    coins(t, { n = 14 } = {}) {
      for (let i = 0; i < n; i++) { const tt = t + i * 0.07 + Math.random() * 0.03; const f = 2200 + Math.random() * 1800; osc('sine', f, tt, 0.01, { gain: 0.05, a: 0.002, rel: 0.18 }); osc('sine', f * 1.5, tt + 0.01, 0.01, { gain: 0.025, a: 0.002, rel: 0.12 }); }
    },
    thunk(t) { osc('sine', 95, t, 0.05, { gain: 0.6, a: 0.002, rel: 0.25 }); noise(t, 0.03, { gain: 0.25, a: 0.002, rel: 0.08, type: 'lowpass', freq: 900 }); },
    wipe(t) { const n = noise(t, 0.18, { gain: 0.16, a: 0.04, rel: 0.12, freq: 800, q: 1.5 }); n.f.frequency.exponentialRampToValueAtTime(4200, t + 0.25); osc('triangle', 880, t + 0.16, 0.03, { gain: 0.05, a: 0.004, rel: 0.15 }); },
    pop(t) { const o = osc('sine', 520, t, 0.02, { gain: 0.18, a: 0.003, rel: 0.12 }); o.frequency.exponentialRampToValueAtTime(1100, t + 0.08); },
    tick(t) { osc('square', 1600, t, 0.005, { gain: 0.04, a: 0.001, rel: 0.03, filter: { freq: 3000 } }); },
    lock(t) { osc('sine', 140, t, 0.04, { gain: 0.4, a: 0.002, rel: 0.2 }); noise(t, 0.02, { gain: 0.2, a: 0.002, rel: 0.05, freq: 2500, q: 1 }); osc('triangle', 660, t + 0.06, 0.05, { gain: 0.08, a: 0.005, rel: 0.2 }); osc('triangle', 990, t + 0.14, 0.08, { gain: 0.08, a: 0.005, rel: 0.3 }); },
    join(t) { [72, 76, 79, 84].forEach((m, i) => osc('triangle', mtof(m), t + i * 0.07, 0.06, { gain: 0.1, a: 0.005, rel: 0.2 })); },
    beep(t) { osc('square', 880, t, 0.08, { gain: 0.06, a: 0.005, rel: 0.05, filter: { freq: 2500 } }); },
    go(t) { osc('square', 1320, t, 0.3, { gain: 0.07, a: 0.005, rel: 0.1, filter: { freq: 3000 } }); },
    stamp(t) { osc('sine', 90, t, 0.05, { gain: 0.5, a: 0.002, rel: 0.25 }); noise(t, 0.04, { gain: 0.25, a: 0.002, rel: 0.1, type: 'lowpass', freq: 1200 }); },
    reveal(t) { [64, 67, 71, 74].forEach((m, i) => osc('triangle', mtof(m + 12), t + i * 0.05, 0.05, { gain: 0.06, a: 0.004, rel: 0.25 })); },
    scratch(t) { // vinyl scratch: a bandpassed noise swept down, back up and down again (cutscene start/end)
      const n = noise(t, 0.32, { gain: 0.22, a: 0.01, rel: 0.08, freq: 2400, q: 3 });
      n.f.frequency.setValueAtTime(2400, t); n.f.frequency.exponentialRampToValueAtTime(500, t + 0.12);
      n.f.frequency.exponentialRampToValueAtTime(1900, t + 0.2); n.f.frequency.exponentialRampToValueAtTime(350, t + 0.34);
    },
    clink(t) { // Pam's flask on a glass: two bright partials, a hair apart
      osc('sine', 2637, t, 0.01, { gain: 0.08, a: 0.001, rel: 0.6 }); osc('sine', 3951, t + 0.004, 0.01, { gain: 0.05, a: 0.001, rel: 0.45 });
      osc('sine', 2794, t + 0.11, 0.01, { gain: 0.05, a: 0.001, rel: 0.5 });
    },
    boo(t) { const o = osc('sawtooth', 160, t, 0.7, { gain: 0.06, a: 0.1, rel: 0.3, filter: { freq: 600 } }); o.frequency.linearRampToValueAtTime(110, t + 0.8); },
  };

  // ---- asset loading ----
  function loadManifest() {
    manifestP ||= (typeof fetch === 'function' ? fetch(`${assetBase}manifest.json`).then((r) => (r.ok ? r.json() : null)) : Promise.resolve(null))
      .catch(() => null).then((m) => { manifest = m; return m; });
    return manifestP;
  }
  function loadFile(file) {
    if (buffers.has(file)) return Promise.resolve(buffers.get(file));
    if (loading.has(file)) return loading.get(file);
    const p = (async () => {
      try {
        if (!ensure()) return null;
        const r = await fetch(assetBase + file);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = await r.arrayBuffer();
        const buf = await new Promise((res, rej) => { const q = ctx.decodeAudioData(data, res, rej); if (q?.then) q.then(res, rej); });
        buffers.set(file, buf);
        return buf;
      } catch (e) { console.warn('audio asset', file, e?.message || e); buffers.set(file, null); return null; } finally { loading.delete(file); }
    })();
    loading.set(file, p);
    return p;
  }
  const cueFile = (cue) => manifest?.cues?.[cue]?.file;
  async function preload() { // every cue and music stem (TV only; phones stay on the tiny synthesised UI sounds)
    const m = await loadManifest();
    if (!m) return false;
    // music first (it is needed first), then the stings
    const files = [...Object.values(m.music || {}).flatMap((x) => Object.values(x.stems || {}).map((st) => st.file)), ...Object.values(m.cues || {}).map((c) => c.file)];
    await Promise.all(files.map(loadFile));
    return true;
  }
  function playBuffer(buf, t, { gain = 0.85, offset = 0, rate = 1, pan = 0, dest = sfxBus } = {}) {
    const src = ctx.createBufferSource(); src.buffer = buf; src.playbackRate.value = rate;
    const g = ctx.createGain(); g.gain.value = gain;
    src.connect(g);
    let out = g;
    if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); out = p; }
    out.connect(dest);
    src.start(t, Math.max(0, offset));
    return src;
  }
  // asset cue: name -> { file, gain, offset, rate }
  function assetFor(name, opts = {}) {
    if (name === 'crowd') {
      const dur = opts.dur ?? 3.5, peak = opts.peak ?? 0.32;
      const cue = dur > 3.6 ? 'crowd_roar' : 'crowd_swell';
      return { cue, gain: Math.max(0.35, Math.min(1.4, peak / 0.3)) * 0.75, rate: 0.94 + Math.random() * 0.12 };
    }
    if (name === 'drumroll') { const dur = opts.dur ?? 2.2; return { cue: 'drumroll', gain: 0.8, offset: Math.max(0, 2.4 - dur) }; }
    if (name === 'heartbeat') return { cue: 'heartbeat', gain: 1 };
    if (name === 'coins') return { cue: 'coins', gain: Math.min(1, 0.55 + (opts.n ?? 14) / 40) };
    const cue = ASSET_CUES[name];
    return cue ? { cue, gain: name === 'cardflip' ? 0.7 : 0.85 } : null;
  }
  function play(name, opts) {
    if (!ready() || muted) return;
    const a = assetFor(name, opts || {});
    const file = a && cueFile(a.cue);
    const buf = file && buffers.get(file);
    if (buf) { try { playBuffer(buf, ctx.currentTime + 0.01, a); return; } catch (e) { console.warn('sfx asset', name, e); } }
    if (file && !buffers.has(file)) loadFile(file); // next time
    const fn = SFX[name] || SFX[SYNTH_STANDIN[name]];
    if (!fn) return;
    try { fn(ctx.currentTime + 0.02, opts); } catch (e) { console.warn('sfx', name, e); }
  }

  // ---- music bed --------------------------------------------------------------------------------
  const PROGS = {
    lobby: { bpm: 92, chords: [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 67]], arp: [0, 2, 1, 3, 2, 1, 3, 2], swing: 0.08, shaker: true, block: false },
    betting: { bpm: 108, chords: [[57, 60, 64], [53, 57, 60], [60, 64, 67], [55, 59, 62]], arp: [0, 1, 2, 1, 0, 2, 1, 2], swing: 0.05, shaker: true, block: true },
    final: { bpm: 138, chords: [[57, 60, 64], [57, 60, 64], [53, 57, 60], [55, 59, 62]], arp: [0, 2, 1, 2, 0, 2, 1, 2], swing: 0, shaker: true, block: true },
    results: { bpm: 100, chords: [[60, 64, 67], [65, 69, 72], [55, 59, 62], [60, 64, 67]], arp: [0, 1, 2, 3, 2, 1, 0, 1], swing: 0.06, shaker: false, block: false },
  };
  function scheduleMusic() {
    if (!music) return;
    const P = PROGS[music.kind];
    const eighth = 60 / P.bpm / 2;
    while (music.nextT < ctx.currentTime + 0.35) {
      const step = music.step;
      const bar = Math.floor(step / 8) % P.chords.length;
      const chord = P.chords[bar];
      const t = music.nextT + (step % 2 ? P.swing * eighth : 0);
      const inBar = step % 8;
      if (inBar === 0) {
        for (const m of chord.slice(0, 3)) {
          for (const det of [-6, 6]) osc('triangle', mtof(m), t, eighth * 7.5, { gain: 0.022, a: 0.35, rel: 0.6, dest: musicBus, detune: det, filter: { freq: 1300 } });
        }
        osc('sine', mtof(chord[0] - 24), t, eighth * 2.5, { gain: 0.14, a: 0.01, rel: 0.25, dest: musicBus });
      }
      if (inBar === 4) osc('sine', mtof(chord[0] - 24 + 7), t, eighth * 2, { gain: 0.1, a: 0.01, rel: 0.25, dest: musicBus });
      const n = chord[P.arp[inBar] % chord.length] + 12;
      if (step % 16 < 15) osc('sine', mtof(n), t, 0.02, { gain: 0.045, a: 0.004, rel: eighth * 1.6, dest: musicBus });
      osc('triangle', mtof(n + 12), t, 0.01, { gain: 0.01, a: 0.002, rel: 0.15, dest: musicBus });
      if (P.shaker && step % 2 === 1) noise(t, 0.01, { gain: 0.018, a: 0.003, rel: 0.05, type: 'highpass', freq: 7000, dest: musicBus });
      if (P.block && (inBar === 2 || inBar === 6)) osc('sine', 1250, t, 0.004, { gain: 0.04, a: 0.001, rel: 0.05, dest: musicBus });
      music.step++;
      music.nextT += eighth;
    }
  }
  // Rendered beds: kind -> manifest music entry + which stems start audible. 'final' is the race bed with its
  // final-km layer; 'betting' adds its hurry layer via setMusicLayer('bet_b', true).
  const BEDS = { lobby: { music: 'lobby', on: ['lobby'] }, betting: { music: 'betting', on: ['bet_a'] }, race: { music: 'race', on: ['race_a'] }, final: { music: 'race', on: ['race_a', 'race_b'] } };
  let pendingKind = null;
  let startTok = 0;
  function newBus(target = MUSIC_VOL) {
    const fresh = ctx.createGain(); fresh.gain.value = 0.0001; fresh.connect(comp);
    fresh.gain.exponentialRampToValueAtTime(ducked ? MUSIC_DUCKED : target, ctx.currentTime + 1.2);
    musicBus = fresh;
    return fresh;
  }
  function startMusic(kind = 'lobby') {
    if (!ensure()) return;
    if (music?.kind === kind) return;
    // the race bed is already playing: the final km just brings in its extra layer, in time
    if (kind === 'final' && music?.assets && music.kind === 'race') { setMusicLayer('race_b', true, 0.6); music.kind = 'final'; return; }
    stopMusic(0.6);
    pendingKind = kind;
    if (!musicOn) { music = null; return; }
    const tok = ++startTok;
    const bed = BEDS[kind];
    const begin = () => {
      if (tok !== startTok || !musicOn) return;
      const m = bed && manifest?.music?.[bed.music];
      const stems = m && Object.entries(m.stems || {}).map(([name, st]) => ({ name, buf: buffers.get(st.file), onsetS: st.onsetS || 0 }));
      if (stems?.length && stems.every((x) => x.buf)) startBed(kind, m, stems, bed.on);
      else startSynth(kind);
    };
    const m = bed && manifest?.music?.[bed.music];
    if (bed && (!manifest || (m && Object.values(m.stems).some((st) => !buffers.has(st.file))))) {
      // wait (briefly) for the rendered bed; fall back to the synthesised one if it isn't there in time
      let done = false;
      const go = () => { if (!done) { done = true; begin(); } };
      setTimeout(go, 2500);
      loadManifest().then((mm) => { const e = mm?.music?.[bed.music]; return e ? Promise.all(Object.values(e.stems).map((st) => loadFile(st.file))) : null; }).then(go, go);
    } else begin();
  }
  function startSynth(kind) {
    if (!PROGS[kind]) { music = null; return; }
    const bus = newBus();
    music = { kind, nextT: ctx.currentTime + 0.1, step: 0, bus };
    music.timer = setInterval(() => { if (ready()) scheduleMusic(); }, 90);
  }
  function startBed(kind, m, stems, on) {
    const bus = newBus();
    const st = {};
    for (const x of stems) {
      const g = ctx.createGain(); g.gain.value = on.includes(x.name) ? 1 : 0.0001; g.connect(bus);
      // decoder alignment: the composer recorded where the first transient is; most decoders trim the encoder delay
      let lead = 0;
      if (x.onsetS > 0) { const d = x.buf.getChannelData(0); const thr = 0.0316 * 0.7; for (let i = 0; i < Math.min(d.length, x.buf.sampleRate); i++) if (Math.abs(d[i]) > thr) { const sh = i / x.buf.sampleRate - x.onsetS; lead = sh > 0.002 && sh < 0.1 ? sh : 0; break; } }
      st[x.name] = { gain: g, buf: x.buf, lead };
    }
    music = { kind, assets: true, bus, stems: st, loopS: m.loopS, nextT: ctx.currentTime + 0.12, sources: [] };
    const sched = () => {
      if (!music?.assets || !ready()) return;
      while (music.nextT < ctx.currentTime + 1.5) {
        for (const x of Object.values(music.stems)) {
          const src = ctx.createBufferSource(); src.buffer = x.buf; src.connect(x.gain);
          src.start(music.nextT, x.lead);
          music.sources.push({ src, end: music.nextT + x.buf.duration });
        }
        music.nextT += music.loopS;
      }
      music.sources = music.sources.filter((s) => s.end > ctx.currentTime);
    };
    sched();
    music.timer = setInterval(sched, 250);
  }
  function setMusicLayer(name, on, fade = 1.2) {
    const x = music?.stems?.[name];
    if (!x || !ctx) return false;
    x.gain.gain.cancelScheduledValues(ctx.currentTime);
    x.gain.gain.setTargetAtTime(on ? 1 : 0.0001, ctx.currentTime, fade / 3);
    return true;
  }
  function stopMusic(fade = 0.8) {
    if (!music) { startTok++; return; }
    startTok++;
    clearInterval(music.timer);
    const bus = music.bus;
    const srcs = music.sources || [];
    if (ctx && bus) {
      bus.gain.cancelScheduledValues(ctx.currentTime); bus.gain.setValueAtTime(Math.max(0.0001, bus.gain.value), ctx.currentTime); bus.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + fade);
      setTimeout(() => { for (const s of srcs) { try { s.src.stop(); } catch { /* */ } } bus.disconnect(); }, fade * 1000 + 500);
    }
    music = null;
  }
  function duck(on) { // lower music under commentary
    ducked = !!on;
    if (!music || !ctx) return;
    music.bus.gain.cancelScheduledValues(ctx.currentTime);
    music.bus.gain.setTargetAtTime(on ? MUSIC_DUCKED : MUSIC_VOL, ctx.currentTime, on ? 0.12 : 0.4);
  }
  // premium commentary: play rendered PCM on the voice bus. Returns { stop(), durationMs } or null.
  function playVoice(pcm, sampleRate = 24000, { onended } = {}) {
    if (!ready() || !pcm?.length) return null;
    const buf = ctx.createBuffer(1, pcm.length, sampleRate);
    buf.copyToChannel(pcm instanceof Float32Array ? pcm : Float32Array.from(pcm), 0);
    const src = ctx.createBufferSource(); src.buffer = buf; src.connect(voiceBus);
    let ended = false;
    src.onended = () => { if (!ended) { ended = true; onended?.(); } };
    src.start(ctx.currentTime + 0.03);
    return { durationMs: Math.round(buf.duration * 1000), stop() { if (!ended) { ended = true; try { src.stop(); } catch { /* */ } } } };
  }

  return {
    unlock, play, ready, preload, playVoice, setMusicLayer,
    get context() { return ctx; },
    setVolume(v) { volume = Math.max(0, Math.min(1, v)); if (master) master.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.05); },
    setVoiceVolume(v) { voiceGain = Math.max(0, Math.min(1.5, v)); if (voiceBus) voiceBus.gain.setTargetAtTime(voiceGain, ctx.currentTime, 0.05); },
    setMuted(m) { muted = !!m; if (master) master.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.05); },
    get muted() { return muted; },
    setMusicEnabled(on) { musicOn = !!on; if (!musicOn) { const k = music?.kind || pendingKind; stopMusic(); pendingKind = k; } else if (pendingKind && !music) startMusic(pendingKind); },
    startMusic, stopMusic, duck,
    get musicKind() { return music?.kind || null; },
    get musicMode() { return music ? (music.assets ? 'assets' : 'synth') : null; },
    get assetsLoaded() { return [...buffers.values()].filter(Boolean).length; },
  };
}
