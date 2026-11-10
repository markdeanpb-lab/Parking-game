// All sound is synthesised with WebAudio: the radio tune, jingles, the panic music,
// engine, horns, parking sensors, crashes and crowd. No audio files.

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);   // MIDI -> Hz

// Two cheesy 8-bar tunes over a I-vi-IV-V "breakfast radio" progression. Degrees of the major scale; null = rest.
const SCALE = [0, 2, 4, 5, 7, 9, 11];
const CHORDS = [[0, 4, 7], [9, 12, 16], [5, 9, 12], [7, 11, 14]];   // I vi IV V (semitones from tonic)
const TUNES = [
  [4, null, 4, 5, 4, null, 2, null, 0, null, 2, 4, null, 2, 0, null,
   5, null, 5, 7, 5, null, 4, null, 2, null, 4, 5, null, 4, 2, null,
   3, null, 5, 7, 8, null, 7, 5, 3, null, 5, 3, null, 2, 0, null,
   4, 4, null, 4, 6, null, 8, null, 9, null, 8, 6, 8, null, null, null],
  [7, null, 4, null, 7, 8, 7, 4, 2, null, 0, null, 2, null, 4, null,
   5, null, 2, null, 5, 6, 5, 2, 0, null, -1, null, 0, null, 2, null,
   3, 5, 7, null, 7, 5, 3, null, 5, 7, 8, null, 8, 7, 5, null,
   6, null, 6, 6, 8, null, 9, null, 11, null, 9, 8, 6, null, 4, null],
];
const deg = (d) => (d < 0 ? SCALE[(d + 7) % 7] - 12 : SCALE[d % 7] + 12 * Math.floor(d / 7));

export class AudioEngine {
  constructor() {
    this.ctx = null; this.muted = false; this.musicOn = true;
    this.mode = null;            // 'tune' | 'panic' | null
    this.step = 0; this.nextT = 0; this.bpm = 128; this.key = 60; this.tune = 0;
    this.sensorT = 0; this.urgency = 0;
  }
  /** Must be called from a user gesture. */
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.9;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 5;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = 0.5; this.musicBus.connect(this.master);
    this.sfxBus = ctx.createGain(); this.sfxBus.gain.value = 0.8; this.sfxBus.connect(this.master);
    // noise buffer
    const len = ctx.sampleRate * 1.5, buf = ctx.createBuffer(1, len, ctx.sampleRate), ch = buf.getChannelData(0);
    for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
    // engine
    this.engOsc = ctx.createOscillator(); this.engOsc.type = 'sawtooth'; this.engOsc.frequency.value = 50;
    this.engOsc2 = ctx.createOscillator(); this.engOsc2.type = 'square'; this.engOsc2.frequency.value = 25;
    this.engFilter = ctx.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.frequency.value = 300;
    this.engGain = ctx.createGain(); this.engGain.gain.value = 0;
    this.engOsc.connect(this.engFilter); this.engOsc2.connect(this.engFilter); this.engFilter.connect(this.engGain); this.engGain.connect(this.sfxBus);
    this.engOsc.start(); this.engOsc2.start();
  }
  get ready() { return !!this.ctx; }
  setMuted(m) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05); }
  duck(on) { if (this.ctx) this.musicBus.gain.setTargetAtTime(this.musicOn ? (on ? 0.22 : 0.5) : 0, this.ctx.currentTime, 0.15); }
  setMusicOn(on) { this.musicOn = on; this.duck(false); }

  // ------------------------------------------------------------ primitives
  tone(freq, t, dur, type = 'square', vol = 0.2, bus = this.sfxBus, slideTo = null, attack = 0.005) {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(bus); o.start(t); o.stop(t + dur + 0.03);
    return o;
  }
  noise(t, dur, vol, type = 'highpass', freq = 6000, bus = this.sfxBus, q = 1, slideTo = null) {
    const c = this.ctx, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; s.loop = true;
    f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (slideTo) f.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f); f.connect(g); g.connect(bus); s.start(t, Math.random()); s.stop(t + dur + 0.03);
  }

  // ------------------------------------------------------------ music sequencer
  startMusic(round = 1) {
    if (!this.ctx) return;
    this.mode = 'tune'; this.step = 0; this.nextT = this.ctx.currentTime + 0.08;
    this.bpm = 124 + Math.min(6, round) * 5; this.key = 57 + ((round * 5) % 7); this.tune = round % 2;
  }
  startPanic() {
    if (!this.ctx) return;
    this.mode = 'panic'; this.step = 0; this.nextT = this.ctx.currentTime + 0.5; this.bpm = 150; this.urgency = 0;
  }
  stopMusic(scratch = false) {
    if (!this.ctx) return;
    const was = this.mode; this.mode = null;
    if (scratch && was) {
      const t = this.ctx.currentTime;
      this.noise(t, 0.45, 0.5, 'bandpass', 3200, this.sfxBus, 3, 300);
      this.tone(520, t, 0.5, 'sawtooth', 0.25, this.sfxBus, 60);
    }
  }
  schedule() {
    const c = this.ctx;
    if (!c || !this.mode) return;
    const spb = 60 / this.bpm / 4;     // 16th notes
    while (this.nextT < c.currentTime + 0.14) {
      if (this.mode === 'tune') this.tuneStep(this.step, this.nextT, spb); else this.panicStep(this.step, this.nextT, spb);
      this.nextT += spb; this.step++;
    }
  }
  tuneStep(step, t, spb) {
    const M = this.musicBus, s16 = step % 16, bar = Math.floor(step / 16) % 8, half = Math.floor(step / 2);
    const chord = CHORDS[Math.floor(bar / 2) % 4 === 3 && bar % 2 ? 3 : [0, 1, 2, 3][Math.floor(bar / 2) % 4]];
    const root = this.key - 24 + chord[0];
    // drums
    if (s16 % 4 === 0) { this.tone(150, t, 0.16, 'sine', 0.55, M, 45); }
    if (s16 === 4 || s16 === 12) { this.noise(t, 0.13, 0.28, 'bandpass', 1900, M, 0.8); this.tone(190, t, 0.07, 'triangle', 0.18, M, 120); }
    if (s16 % 2 === 0) this.noise(t, s16 % 4 === 2 ? 0.09 : 0.03, s16 % 4 === 2 ? 0.1 : 0.06, 'highpass', 8000, M);
    if (bar === 7 && s16 >= 12) this.noise(t, 0.06, 0.2, 'bandpass', 1500 + s16 * 150, M, 1);   // fill
    // bass: bouncing octaves
    if (s16 % 2 === 0) this.tone(NOTE(root + (s16 % 4 === 2 ? 12 : 0)), t, spb * 1.7, 'triangle', 0.36, M);
    // off-beat chord stabs
    if (s16 % 4 === 2) for (const n of chord) this.tone(NOTE(this.key + n), t, spb * 1.4, 'sawtooth', 0.045, M);
    // lead
    const mel = TUNES[this.tune];
    if (step % 2 === 0) {
      const d = mel[half % 64];
      if (d !== null) {
        const f = NOTE(this.key + 12 + deg(d));
        this.tone(f, t, spb * 1.9, 'square', 0.085, M);
        this.tone(f * 2.005, t, spb * 1.2, 'triangle', 0.05, M);
      }
    }
  }
  panicStep(step, t, spb) {
    const M = this.musicBus, s16 = step % 16;
    this.bpm = 150 + this.urgency * 50;
    if (s16 % 4 === 0) this.tone(120, t, 0.14, 'sine', 0.6, M, 40);
    if (s16 % 2 === 1) this.noise(t, 0.03, 0.07, 'highpass', 9000, M);
    const n = [40, 40, 41, 40, 40, 43, 41, 40][Math.floor(step / 2) % 8];
    if (s16 % 2 === 0) this.tone(NOTE(n), t, spb * 1.6, 'sawtooth', 0.2, M);
    if (s16 % 8 === 4) for (const k of [0, 3, 6]) this.tone(NOTE(64 + k + (Math.floor(step / 32) % 2)), t, spb * 2, 'square', 0.035, M);
    if (this.urgency > 0.6 && s16 % 4 === 2) this.tone(NOTE(76 + (Math.floor(step / 16) % 4)), t, spb, 'square', 0.05, M);
  }

  // ------------------------------------------------------------ per-frame
  update(dt, state) {
    if (!this.ctx) return;
    this.schedule();
    const t = this.ctx.currentTime;
    // engine note follows speed and throttle
    const sp = Math.abs(state.speed || 0), on = state.engine ? 1 : 0;
    this.engOsc.frequency.setTargetAtTime(48 + sp * 9 + (state.throttle ? 14 : 0), t, 0.08);
    this.engOsc2.frequency.setTargetAtTime((48 + sp * 9) / 2, t, 0.08);
    this.engFilter.frequency.setTargetAtTime(220 + sp * 60 + (state.throttle ? 250 : 0), t, 0.1);
    this.engGain.gain.setTargetAtTime(on * (0.035 + (state.throttle ? 0.035 : 0)), t, 0.1);
    // parking sensor
    if (state.sensor !== null && state.sensor !== undefined && state.sensor < 1.6) {
      this.sensorT -= dt;
      if (this.sensorT <= 0) {
        const d = state.sensor;
        this.tone(d < 0.3 ? 1500 : 1250, t, d < 0.3 ? 0.14 : 0.06, 'square', 0.07);
        this.sensorT = d < 0.3 ? 0.13 : 0.1 + d * 0.32;
      }
    } else this.sensorT = 0;
    this.urgency = state.urgency || 0;
  }

  // ------------------------------------------------------------ one-shots
  jingle() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.02;
    [0, 4, 7, 12, 7, 12, 16].forEach((n, i) => { this.tone(NOTE(72 + n), t + i * 0.09, 0.22, 'square', 0.12); this.tone(NOTE(60 + n), t + i * 0.09, 0.22, 'triangle', 0.14); });
    for (const n of [0, 4, 7, 12]) this.tone(NOTE(72 + n), t + 0.66, 0.9, 'sawtooth', 0.06);
    this.noise(t + 0.66, 0.5, 0.12, 'highpass', 7000);
  }
  alarm() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 6; i++) this.tone(i % 2 ? 880 : 1175, t + 0.45 + i * 0.11, 0.1, 'square', 0.16);
  }
  tick(n) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(n <= 5 ? 1320 : 880, t, n <= 5 ? 0.16 : 0.07, 'square', n <= 5 ? 0.2 : 0.1);
    if (n === 0) this.tone(220, t, 0.9, 'sawtooth', 0.3, this.sfxBus, 110);
  }
  horn(far = false) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, v = far ? 0.06 : 0.16;
    this.tone(392, t, 0.38, 'sawtooth', v, this.sfxBus, null, 0.02); this.tone(494, t, 0.38, 'sawtooth', v, this.sfxBus, null, 0.02);
  }
  crash(strength = 1) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, v = Math.min(0.7, 0.2 + strength * 0.1);
    this.noise(t, 0.3, v, 'lowpass', 900 + strength * 250);
    this.tone(90, t, 0.22, 'sine', v, this.sfxBus, 40);
    if (strength > 3) this.noise(t + 0.05, 0.5, 0.2, 'highpass', 5000);      // tinkle
  }
  kerb(strength = 1) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noise(t, 0.2, Math.min(0.5, 0.15 + strength * 0.07), 'bandpass', 500, this.sfxBus, 2);
    this.tone(70, t, 0.14, 'sine', 0.4, this.sfxBus, 45);
  }
  thud() { if (this.ctx) this.tone(80, this.ctx.currentTime, 0.12, 'sine', 0.35, this.sfxBus, 50); }
  pop() { if (this.ctx) { const t = this.ctx.currentTime; this.tone(500, t, 0.12, 'sine', 0.25, this.sfxBus, 1400); } }
  parked(quality = 1) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = quality >= 2 ? [0, 4, 7, 12, 16] : quality === 1 ? [0, 4, 7] : [0, -1];
    notes.forEach((n, i) => this.tone(NOTE(76 + n), t + i * 0.08, 0.25, 'square', 0.13));
    this.tone(60, t, 0.1, 'sine', 0.3);   // handbrake clunk
  }
  bad() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(196, t, 0.22, 'sawtooth', 0.2); this.tone(147, t + 0.2, 0.4, 'sawtooth', 0.2);
  }
  sadTrombone() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [58, 57, 56, 55].forEach((n, i) => this.tone(NOTE(n), t + i * 0.42, i === 3 ? 1.1 : 0.4, 'sawtooth', 0.2, this.sfxBus, i === 3 ? NOTE(n - 1.5) : null, 0.04));
  }
  cheer(dur = 3) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noise(t, dur, 0.3, 'bandpass', 1200, this.sfxBus, 0.6);
    this.noise(t + 0.1, dur * 0.8, 0.2, 'bandpass', 2600, this.sfxBus, 0.8);
    for (let i = 0; i < 9; i++) this.tone(700 + Math.random() * 900, t + Math.random() * dur * 0.7, 0.25, 'sine', 0.03, this.sfxBus, 900 + Math.random() * 1200);
  }
  fanfare() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.05;
    const seq = [[0, 0.16], [0, 0.16], [0, 0.16], [0, 0.5], [-4, 0.5], [-2, 0.5], [0, 0.34], [-2, 0.16], [0, 1.4]];
    let tt = t;
    for (const [n, d] of seq) {
      for (const k of [0, 4, 7]) this.tone(NOTE(72 + n + k), tt, d * 0.95, 'sawtooth', 0.085, this.sfxBus, null, 0.02);
      this.tone(NOTE(48 + n), tt, d * 0.95, 'triangle', 0.25);
      tt += d;
    }
    this.cheer(5);
  }
  firework() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noise(t, 0.5, 0.25, 'lowpass', 500); this.noise(t + 0.02, 0.9, 0.12, 'highpass', 4500);
  }
  whoosh() { if (this.ctx) this.noise(this.ctx.currentTime, 0.5, 0.2, 'bandpass', 400, this.sfxBus, 1.2, 3000); }
  ui() { if (this.ctx) this.tone(660, this.ctx.currentTime, 0.06, 'square', 0.08); }
}
