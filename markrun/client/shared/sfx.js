// Synthesised WebAudio sound effects + a gentle generative music bed. No audio files.
// Browsers need a user gesture first: call audio.unlock() from a click/keydown handler.
export function createAudio() {
  let ctx = null, master = null, sfxBus = null, musicBus = null, noiseBuf = null, comp = null;
  let volume = 0.8, muted = false, musicOn = true;
  let music = null; // { kind, timer, nextT, step }

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
    boo(t) { const o = osc('sawtooth', 160, t, 0.7, { gain: 0.06, a: 0.1, rel: 0.3, filter: { freq: 600 } }); o.frequency.linearRampToValueAtTime(110, t + 0.8); },
  };

  function play(name, opts) {
    if (!ready() || muted) return;
    const fn = SFX[name];
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
  function startMusic(kind = 'lobby') {
    if (!ensure()) return;
    if (music?.kind === kind) return;
    stopMusic(0.6);
    if (!musicOn) { music = null; pendingKind = kind; return; }
    pendingKind = kind;
    const fresh = ctx.createGain(); fresh.gain.value = 0.0001; fresh.connect(comp);
    const prevBus = musicBus; musicBus = fresh;
    fresh.gain.exponentialRampToValueAtTime(0.32, ctx.currentTime + 1.5);
    music = { kind, nextT: ctx.currentTime + 0.1, step: 0, bus: fresh };
    music.timer = setInterval(() => { if (ready()) scheduleMusic(); }, 90);
    void prevBus;
  }
  let pendingKind = null;
  function stopMusic(fade = 0.8) {
    if (!music) return;
    clearInterval(music.timer);
    const bus = music.bus;
    if (ctx && bus) { bus.gain.cancelScheduledValues(ctx.currentTime); bus.gain.setValueAtTime(bus.gain.value, ctx.currentTime); bus.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + fade); setTimeout(() => bus.disconnect(), fade * 1000 + 500); }
    music = null;
  }
  function duck(on) { // lower music under commentary
    if (!music || !ctx) return;
    music.bus.gain.setTargetAtTime(on ? 0.14 : 0.32, ctx.currentTime, 0.25);
  }

  return {
    unlock, play, ready,
    get context() { return ctx; },
    setVolume(v) { volume = Math.max(0, Math.min(1, v)); if (master) master.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.05); },
    setMuted(m) { muted = !!m; if (master) master.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.05); },
    get muted() { return muted; },
    setMusicEnabled(on) { musicOn = !!on; if (!musicOn) { const k = music?.kind || pendingKind; stopMusic(); pendingKind = k; } else if (pendingKind && !music) startMusic(pendingKind); },
    startMusic, stopMusic, duck,
    get musicKind() { return music?.kind || null; },
  };
}
