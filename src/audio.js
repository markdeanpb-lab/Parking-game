// All sound is synthesised with WebAudio: the breakfast-radio tunes, station idents, the music-stop moment,
// the panic music, engine, horns, parking sensors, crowd reactions and stings. No audio files.
//
// Signal flow: voices -> songBus (per song, so the tape-stop can kill already-scheduled notes) -> musicBus (ducked
// under the DJ) -> master -> compressor -> out. One-shot effects go to sfxBus -> master.

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);   // MIDI -> Hz
const MAJOR = [0, 2, 4, 5, 7, 9, 11];
const MINOR = [0, 2, 3, 5, 7, 8, 10];
const n = null;

// Songs: 8 bars of melody in eighth notes (scale degrees, null = rest) over a 4- or 8-chord progression
// (chord roots as scale degrees). Cheesy on purpose.
const SONGS = [
  { name: 'Permit Me', bpm: 126, prog: [0, 4, 5, 3], drums: 'disco', bass: 'octave', lead: 'square', stab: 'saw',
    mel: [4, n, 4, 5, 4, n, 2, 0, 1, n, 1, 2, 1, n, -1, n, 2, n, 2, 4, 2, n, 0, n, 3, n, 2, n, 0, n, n, n,
      4, n, 4, 5, 7, n, 5, 4, 6, n, 4, n, 6, 7, 8, n, 7, n, 5, n, 4, n, 2, n, 3, n, 4, n, 1, n, n, n] },
  { name: 'Bag For Life', bpm: 118, prog: [5, 3, 0, 4], drums: 'pop', bass: 'walk', lead: 'brass', stab: 'organ',
    mel: [n, 5, n, 4, 5, n, 7, n, n, 3, n, 2, 3, n, 5, n, n, 4, n, 2, 4, n, 7, n, 6, n, 5, n, 4, n, n, n,
      n, 9, n, 8, 9, n, 7, n, n, 8, n, 7, 8, n, 5, n, 7, n, 6, n, 4, n, 2, n, 1, n, 2, n, 4, n, n, n] },
  { name: "Twenty's Plenty", bpm: 138, prog: [0, 3, 4, 3], drums: 'pop', bass: 'root8', lead: 'square', stab: 'saw',
    mel: [0, 2, 4, n, 4, n, 2, 4, 5, n, 5, n, 3, n, 5, n, 6, n, 4, n, 6, 7, 8, n, 7, n, 5, n, 3, n, n, n,
      7, n, 7, 6, 7, n, 4, n, 5, n, 5, 4, 5, n, 3, n, 4, n, 6, n, 8, n, 6, n, 5, n, 4, n, 2, n, 0, n] },
  { name: 'Reversing Into You', bpm: 122, prog: [0, 5, 3, 4], drums: 'disco', bass: 'octave', lead: 'bell', stab: 'saw',
    mel: [4, n, 4, 5, 4, n, 2, n, 0, n, 2, 4, n, 2, 0, n, 5, n, 5, 7, 5, n, 4, n, 2, n, 4, 5, n, 4, 2, n,
      3, n, 5, 7, 8, n, 7, 5, 3, n, 5, 3, n, 2, 0, n, 4, 4, n, 4, 6, n, 8, n, 9, n, 8, 6, 8, n, n, n] },
  { name: 'Loft Conversion', bpm: 130, prog: [0, 5, 3, 4], drums: 'pop', bass: 'walk', lead: 'brass', stab: 'organ',
    mel: [7, n, 4, n, 7, 8, 7, 4, 2, n, 0, n, 2, n, 4, n, 5, n, 2, n, 5, 6, 5, 2, 0, n, -1, n, 0, n, 2, n,
      3, 5, 7, n, 7, 5, 3, n, 5, 7, 8, n, 8, 7, 5, n, 6, n, 6, 6, 8, n, 9, n, 11, n, 9, 8, 6, n, 4, n] },
];
// The final: a minor-key sports-event theme
const FINAL_SONG = { name: 'The Golden Permit', bpm: 140, prog: [0, 5, 6, 0, 0, 5, 3, 6], drums: 'march', bass: 'root8', lead: 'brass', stab: 'brass', minor: true,
  mel: [0, n, 0, 0, 4, n, n, n, 5, n, 4, n, 2, n, 4, n, 6, n, 6, 6, 8, n, n, n, 7, n, n, n, 4, n, n, n,
    7, n, 7, 7, 9, n, 8, 7, 8, n, 7, n, 5, n, 4, n, 3, n, 5, n, 7, n, 8, n, 6, n, n, n, 8, n, n, n] };

export class AudioEngine {
  constructor() {
    this.ctx = null; this.muted = false; this.musicOn = true;
    this.mode = null;            // 'tune' | 'panic' | null
    this.step = 0; this.nextT = 0; this.bpm = 128; this.key = 60;
    this.song = SONGS[0]; this.songOffset = Math.floor(Math.random() * SONGS.length);
    this.sensorT = 0; this.urgency = 0; this.heartT = 0; this.lastBuzz = -10; this.reactAt = {};
    this.timeLeft = null; this.safe = false;
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
    this.newSongBus();
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
  duck(on) { if (this.ctx) this.musicBus.gain.setTargetAtTime(this.musicOn ? (on ? 0.24 : 0.5) : 0, this.ctx.currentTime, 0.15); }
  setMusicOn(on) { this.musicOn = on; this.duck(false); }

  /** A fresh bus for the next piece of music; the old one is faded out and dropped. */
  newSongBus(fade = 0.05) {
    const c = this.ctx, t = c.currentTime;
    if (this.songBus) {
      const old = this.songBus;
      old.gain.setTargetAtTime(0, t, fade);
      setTimeout(() => { try { old.disconnect(); } catch (e) { /* ignore */ } }, 1500);
    }
    this.songBus = c.createGain(); this.songBus.gain.value = 1; this.songBus.connect(this.musicBus);
    this.leadBus = c.createBiquadFilter(); this.leadBus.type = 'lowpass'; this.leadBus.frequency.value = 2600; this.leadBus.Q.value = 2;
    this.leadBus.connect(this.songBus);
  }

  // ------------------------------------------------------------ primitives
  tone(freq, t, dur, type = 'square', vol = 0.2, bus = this.sfxBus, slideTo = null, attack = 0.005) {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(bus); o.start(t); o.stop(t + dur + 0.03);
    return o;
  }
  noise(t, dur, vol, type = 'highpass', freq = 6000, bus = this.sfxBus, q = 1, slideTo = null, attack = 0) {
    const c = this.ctx, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; s.loop = true;
    f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (slideTo) f.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    if (attack) { g.gain.setValueAtTime(0.0008, t); g.gain.linearRampToValueAtTime(vol, t + attack); }
    else g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f); f.connect(g); g.connect(bus); s.start(t, Math.random()); s.stop(t + dur + 0.03);
    return f;
  }
  /** a bell / glockenspiel note (inharmonic partials) */
  bell(freq, t, dur = 0.6, vol = 0.12, bus = this.sfxBus) {
    this.tone(freq, t, dur, 'sine', vol, bus);
    this.tone(freq * 2.76, t, dur * 0.45, 'sine', vol * 0.4, bus);
    this.tone(freq * 5.4, t, dur * 0.2, 'sine', vol * 0.2, bus);
  }
  /** a "sung" vowel: a few detuned saws through two formant filters */
  vowel(freq, t, dur, vol, f1 = 800, f2 = 1200, bus = this.sfxBus, slideTo = null) {
    const c = this.ctx, g = c.createGain();
    const a = c.createBiquadFilter(), b = c.createBiquadFilter();
    a.type = 'bandpass'; a.frequency.value = f1; a.Q.value = 5;
    b.type = 'bandpass'; b.frequency.value = f2; b.Q.value = 7;
    g.gain.setValueAtTime(0.0008, t); g.gain.linearRampToValueAtTime(vol, t + Math.min(0.06, dur * 0.3)); g.gain.setValueAtTime(vol, t + dur * 0.7); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    a.connect(g); b.connect(g); g.connect(bus);
    for (const det of [-7, 0, 6]) {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.detune.value = det;
      o.frequency.setValueAtTime(freq, t); if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
      o.connect(a); o.connect(b); o.start(t); o.stop(t + dur + 0.05);
    }
  }

  // ------------------------------------------------------------ music sequencer
  deg(d) {
    const sc = this.song && this.song.minor ? MINOR : MAJOR;
    const o = Math.floor(d / 7), i = ((d % 7) + 7) % 7;
    return sc[i] + 12 * o;
  }
  chord(rootDeg) { return [this.deg(rootDeg), this.deg(rootDeg + 2), this.deg(rootDeg + 4)]; }

  startMusic(round = 1, final = false) {
    if (!this.ctx) return;
    this.newSongBus();
    this.mode = 'tune'; this.step = 0; this.nextT = this.ctx.currentTime + 0.08;
    this.song = final ? FINAL_SONG : SONGS[(round - 1 + this.songOffset) % SONGS.length];
    this.bpm = this.song.bpm + Math.min(5, round - 1) * 2;
    this.key = final ? 57 : 55 + ((round * 5) % 7);
    this.leadBus.frequency.value = this.song.lead === 'brass' ? 1900 : 3200;
  }
  startPanic(at = 0) {
    if (!this.ctx) return;
    this.newSongBus();
    this.mode = 'panic'; this.step = 0; this.nextT = this.ctx.currentTime + at + 0.05; this.bpm = 152; this.urgency = 0;
    this.song = { minor: true };
    this.key = 52;
  }
  stopMusic(scratch = false) {
    if (!this.ctx) return;
    const was = this.mode; this.mode = null;
    if (scratch && was) { this.tapeStop(); this.scratch(this.ctx.currentTime + 0.04); }
    else if (this.songBus) this.songBus.gain.setTargetAtTime(0, this.ctx.currentTime, 0.12);
  }
  schedule() {
    const c = this.ctx;
    if (!c || !this.mode) return;
    const spb = 60 / this.bpm / 4;     // 16th notes
    if (this.nextT < c.currentTime - 0.25) this.nextT = c.currentTime + 0.02;    // tab was asleep: don't machine-gun the backlog
    while (this.nextT < c.currentTime + 0.14) {
      if (this.mode === 'tune') this.tuneStep(this.step, this.nextT, spb); else this.panicStep(this.step, this.nextT, spb);
      this.nextT += 60 / this.bpm / 4; this.step++;
    }
  }

  drum(kind, t, M, s16) {
    if (kind === 'kick') this.tone(150, t, 0.16, 'sine', 0.55, M, 45);
    else if (kind === 'snare') { this.noise(t, 0.13, 0.26, 'bandpass', 1900, M, 0.8); this.tone(190, t, 0.07, 'triangle', 0.16, M, 120); }
    else if (kind === 'clap') { for (let i = 0; i < 3; i++) this.noise(t + i * 0.011, 0.05 + i * 0.03, 0.16, 'bandpass', 1300, M, 1.4); }
    else if (kind === 'hat') this.noise(t, 0.03, 0.06, 'highpass', 8000, M);
    else if (kind === 'ohat') this.noise(t, 0.12, 0.08, 'highpass', 7000, M);
    else if (kind === 'tom') this.tone(s16 % 2 ? 130 : 165, t, 0.18, 'sine', 0.32, M, 80);
    else if (kind === 'timp') { this.tone(73, t, 0.6, 'sine', 0.45, M, 62); this.noise(t, 0.08, 0.1, 'lowpass', 400, M); }
    else if (kind === 'cowbell') { this.tone(545, t, 0.09, 'square', 0.035, M); this.tone(815, t, 0.09, 'square', 0.03, M); }
  }

  tuneStep(step, t, spb) {
    const S = this.song, M = this.songBus, L = this.leadBus;
    const s16 = step % 16, bar = Math.floor(step / 16), half = Math.floor(step / 2);
    const sec = Math.floor(bar / 8);                         // 8-bar section
    // a cheesy key change every 8 bars (the "truck driver's gear change"), capped
    const key = this.key + Math.min(2, sec) * 2;
    const chordDeg = S.prog[bar % S.prog.length];
    const ch = this.chord(chordDeg);
    const root = key - 24 + ch[0];
    const lift = sec > 0;                                    // second time round: claps, octave lead
    // ---- drums
    if (S.drums === 'disco') {
      if (s16 % 4 === 0) this.drum('kick', t, M);
      if (s16 === 4 || s16 === 12) this.drum(lift ? 'clap' : 'snare', t, M);
      if (s16 % 4 === 2) this.drum('ohat', t, M); else if (s16 % 2 === 0) this.drum('hat', t, M);
      if (lift && s16 % 8 === 6) this.drum('cowbell', t, M);
    } else if (S.drums === 'pop') {
      if (s16 === 0 || s16 === 6 || s16 === 8 || (s16 === 14 && bar % 2)) this.drum('kick', t, M);
      if (s16 === 4 || s16 === 12) { this.drum('snare', t, M); if (lift) this.drum('clap', t, M); }
      if (s16 % 2 === 0) this.drum('hat', t, M);
    } else if (S.drums === 'march') {
      if (s16 % 4 === 0) this.drum('kick', t, M);
      if (s16 === 4 || s16 === 12 || (s16 >= 13 && bar % 2)) this.drum('snare', t, M);
      if (s16 % 2 === 1 && bar % 4 === 3) this.drum('tom', t, M, s16);
      if (s16 === 0 && bar % 2 === 0) this.drum('timp', t, M);
      if (s16 % 2 === 0) this.drum('hat', t, M);
    }
    if (bar % 8 === 7 && s16 >= 12) this.noise(t, 0.06, 0.18, 'bandpass', 1500 + s16 * 150, M, 1);   // fill into the next section
    // ---- bass
    if (S.bass === 'octave') { if (s16 % 2 === 0) this.tone(NOTE(root + (s16 % 4 === 2 ? 12 : 0)), t, spb * 1.7, 'triangle', 0.36, M); }
    else if (S.bass === 'root8') { if (s16 % 2 === 0) this.tone(NOTE(root), t, spb * 1.5, 'sawtooth', 0.12, M); if (s16 % 4 === 0) this.tone(NOTE(root), t, spb * 2, 'triangle', 0.3, M); }
    else if (S.bass === 'walk') { if (s16 % 4 === 0) { const w = [0, 7, 12, 7][s16 / 4]; this.tone(NOTE(root + w), t, spb * 3.4, 'triangle', 0.38, M); } }
    // ---- chords
    if (S.stab === 'saw') { if (s16 % 4 === 2) for (const k of ch) this.tone(NOTE(key + k), t, spb * 1.4, 'sawtooth', 0.04, M); }
    else if (S.stab === 'organ') { if (s16 === 0 || s16 === 8) for (const k of ch) { this.tone(NOTE(key + k), t, spb * 7.5, 'triangle', 0.05, M, null, 0.03); this.tone(NOTE(key + k + 12), t, spb * 7, 'square', 0.012, M, null, 0.03); } }
    else if (S.stab === 'brass') { if (s16 === 0 || s16 === 10) for (const k of ch) this.tone(NOTE(key + k), t, spb * (s16 ? 5 : 8), 'sawtooth', 0.055, L, null, 0.03); }
    // ---- lead
    if (step % 2 === 0) {
      const d = S.mel[half % S.mel.length];
      if (d !== null) {
        const f = NOTE(key + 12 + this.deg(d) + (lift && S.lead !== 'brass' ? 12 : 0));
        const len = S.mel[(half + 1) % S.mel.length] === null ? spb * 3.6 : spb * 1.9;
        if (S.lead === 'square') { this.tone(f, t, len, 'square', 0.075, L); this.tone(f * 2.005, t, len * 0.6, 'triangle', 0.045, M); }
        else if (S.lead === 'brass') { this.tone(f, t, len, 'sawtooth', 0.09, L, null, 0.025); this.tone(f * 1.004, t, len, 'sawtooth', 0.05, L, null, 0.03); }
        else if (S.lead === 'bell') { this.bell(f, t, len * 1.6, 0.11, M); this.tone(f, t, len, 'triangle', 0.06, M); }
        if (lift) this.tone(f / 2, t, len, 'triangle', 0.04, M);
      }
    }
  }

  panicStep(step, t, spb) {
    const M = this.songBus, s16 = step % 16, bar = Math.floor(step / 16);
    const u = this.urgency, last5 = this.timeLeft !== null && this.timeLeft < 5 && !this.safe;
    this.bpm = 152 + u * 44;
    const key = this.key + Math.min(5, Math.floor(bar / 4));     // creeps up a semitone every 4 bars
    // drums: four on the floor, snare, hats getting busier, a roll in the last seconds
    if (s16 % 4 === 0) this.drum('kick', t, M);
    if (s16 === 4 || s16 === 12) this.drum('snare', t, M);
    if (u > 0.3 ? true : s16 % 2 === 1) this.drum('hat', t, M);
    if (last5 && s16 % 2 === 1) this.noise(t, 0.06, 0.12, 'bandpass', 2000, M, 0.8);
    // driving minor bass ostinato
    const pat = [0, 0, 12, 0, 0, 0, 10, 0, 0, 0, 8, 0, 7, 0, 3, 0];
    this.tone(NOTE(key - 12 + pat[s16]), t, spb * 0.9, 'sawtooth', 0.16, M);
    if (s16 % 4 === 0) this.tone(NOTE(key - 24), t, spb * 3, 'triangle', 0.3, M);
    // alarm stabs (diminished), tension strings once things get tight
    if (s16 === 0 || s16 === 6 || s16 === 10) for (const k of [12, 15, 18]) this.tone(NOTE(key + k + (bar % 2)), t, spb * 1.6, 'square', 0.028, M);
    if (u > 0.45 && s16 % 2 === 0) this.tone(NOTE(key + 24 + (s16 % 4 ? 1 : 0)), t, spb * 1.2, 'sawtooth', 0.022 + u * 0.02, M);
    if (u > 0.7 && s16 % 4 === 2) this.tone(NOTE(key + 31 + (Math.floor(step / 16) % 2) * 2), t, spb, 'square', 0.035, M);
  }

  // ------------------------------------------------------------ per-frame
  update(dt, state) {
    if (!this.ctx) return;
    this.timeLeft = state.timeLeft ?? null; this.safe = !!state.safe;
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
    // heartbeat in the last five seconds (only while the player still needs a space)
    const tl = this.timeLeft;
    if (this.mode === 'panic' && tl !== null && tl > 0 && tl < 5.2 && !this.safe) {
      this.heartT -= dt;
      if (this.heartT <= 0) {
        this.heartT = 0.36 + tl * 0.06;
        this.tone(62, t, 0.16, 'sine', 0.6, this.sfxBus, 38);
        this.tone(54, t + 0.17, 0.2, 'sine', 0.42, this.sfxBus, 34);
      }
    } else this.heartT = 0;
  }

  // ------------------------------------------------------------ the music stops
  tapeStop() {
    const c = this.ctx, t = c.currentTime;
    // kill the notes already scheduled, then the song itself winds down like a tape machine losing power
    this.songBus.gain.cancelScheduledValues(t); this.songBus.gain.setValueAtTime(this.songBus.gain.value, t); this.songBus.gain.linearRampToValueAtTime(0, t + 0.06);
    const S = this.song && this.song.prog ? this.song : SONGS[0];
    const bar = Math.floor(this.step / 16);
    const ch = this.chord(S.prog[bar % S.prog.length]);
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(3000, t); f.frequency.exponentialRampToValueAtTime(180, t + 0.6);
    f.connect(this.musicBus);
    setTimeout(() => { try { f.disconnect(); } catch (e) { /* ignore */ } }, 1500);
    for (const k of [ch[0] - 12, ...ch]) this.tone(NOTE(this.key + k), t, 0.62, 'sawtooth', 0.09, f, NOTE(this.key + k) / 5, 0.004);
    this.tone(NOTE(this.key - 24 + ch[0]), t, 0.6, 'triangle', 0.3, f, NOTE(this.key - 24 + ch[0]) / 4, 0.004);
  }
  scratch(t) {
    const f = this.noise(t, 0.5, 0.42, 'bandpass', 700, this.sfxBus, 4);
    f.frequency.setValueAtTime(700, t); f.frequency.exponentialRampToValueAtTime(3600, t + 0.08);
    f.frequency.exponentialRampToValueAtTime(500, t + 0.2); f.frequency.exponentialRampToValueAtTime(2800, t + 0.27); f.frequency.exponentialRampToValueAtTime(350, t + 0.45);
    this.tone(300, t, 0.08, 'sawtooth', 0.12, this.sfxBus, 1400);
    this.tone(1300, t + 0.08, 0.14, 'sawtooth', 0.1, this.sfxBus, 260);
    this.tone(280, t + 0.2, 0.08, 'sawtooth', 0.1, this.sfxBus, 1100);
  }
  /** The big moment: needle off, stinger and siren, the crowd goes up, then the panic music kicks in. */
  parkMoment(opts = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (this.mode) this.tapeStop();
    this.mode = null;
    this.scratch(t + 0.04);
    this.orchestraHit(t + 0.32, opts.final ? 2 : 1);
    this.siren(t + 0.36, opts.final ? 4 : 3);
    this.react('roar', t + 0.42);
    if (opts.final) { for (let i = 0; i < 10; i++) this.tone(70, t + 0.4 + i * 0.07, 0.2, 'sine', 0.2 + i * 0.03, this.sfxBus, 58); }
    this.startPanic(opts.final ? 1.5 : 1.15);
  }
  orchestraHit(t, size = 1) {
    for (const k of [0, 7, 12, 16, 19, 24]) { this.tone(NOTE(50 + k), t, 0.55 * size, 'sawtooth', 0.06, this.sfxBus, null, 0.004); this.tone(NOTE(50 + k) * 1.006, t, 0.45 * size, 'square', 0.025, this.sfxBus, null, 0.004); }
    this.noise(t, 0.3, 0.3, 'lowpass', 2400, this.sfxBus, 0.7);
    this.tone(90, t, 0.7, 'sine', 0.55, this.sfxBus, 32);
  }
  siren(t, cycles = 3) {
    for (let i = 0; i < cycles * 2; i++) {
      const hi = i % 2 === 0, f = hi ? 960 : 720;
      this.tone(f, t + i * 0.2, 0.2, 'triangle', 0.12, this.sfxBus, null, 0.01);
      this.tone(f, t + i * 0.2, 0.2, 'square', 0.03, this.sfxBus, null, 0.01);
    }
  }

  // ------------------------------------------------------------ crowd reactions and stings
  /** kind: roar | cheer | ooh | aww | gasp | groan | laugh | airhorn | rimshot */
  react(kind, at = null) {
    if (!this.ctx) return;
    const t = at ?? this.ctx.currentTime + 0.02;
    if (at === null) {
      if ((this.reactAt[kind] || -10) > t - 1.6) return;          // no stacking the same reaction
      this.reactAt[kind] = t;
    }
    const B = this.sfxBus, R = Math.random;
    switch (kind) {
      case 'roar':
        this.noise(t, 2.4, 0.5, 'bandpass', 600, B, 0.7, 900, 0.3);
        this.noise(t, 2.2, 0.34, 'bandpass', 1400, B, 0.8, 1800, 0.25);
        this.noise(t + 0.1, 1.8, 0.18, 'bandpass', 3000, B, 1, null, 0.2);
        for (let i = 0; i < 4; i++) this.tone(1500 + R() * 800, t + 0.2 + R() * 1.2, 0.35, 'sine', 0.025, B, 2400 + R() * 900, 0.05);
        break;
      case 'cheer':
        this.noise(t, 1.6, 0.36, 'bandpass', 1100, B, 0.7, null, 0.12);
        this.noise(t, 1.4, 0.2, 'bandpass', 2500, B, 0.8, null, 0.1);
        for (let i = 0; i < 14; i++) this.noise(t + R() * 1.3, 0.04, 0.22, 'bandpass', 1200 + R() * 800, B, 1.5);   // claps
        for (let i = 0; i < 3; i++) this.tone(1600 + R() * 600, t + R() * 0.8, 0.3, 'sine', 0.025, B, 2600, 0.04);
        break;
      case 'ooh':
        for (const [f0, v] of [[190, 0.13], [235, 0.11], [290, 0.09]]) this.vowel(f0 * (0.98 + R() * 0.04), t, 1.1, v, 380, 900, B, f0 * 1.25);
        this.noise(t, 1.0, 0.14, 'bandpass', 450, B, 2, 650, 0.2);
        break;
      case 'aww':
        for (const [f0, v] of [[260, 0.13], [205, 0.11], [320, 0.08]]) this.vowel(f0, t, 1.2, v, 750, 1150, B, f0 * 0.72);
        break;
      case 'groan':
        for (const [f0, v] of [[150, 0.13], [185, 0.11], [120, 0.1]]) this.vowel(f0, t, 1.0, v, 600, 1000, B, f0 * 0.8);
        this.noise(t, 0.9, 0.12, 'bandpass', 500, B, 2, 350, 0.15);
        break;
      case 'gasp':
        this.noise(t, 0.35, 0.3, 'bandpass', 1800, B, 1.2, 3200, 0.18);
        break;
      case 'laugh':
        for (let i = 0; i < 7; i++) {
          const tt = t + i * 0.17 + R() * 0.02, v = 0.12 * (1 - i / 9);
          this.vowel(230 - i * 6 + R() * 15, tt, 0.12, v, 820, 1250, B);
          this.vowel(300 - i * 5 + R() * 20, tt + 0.03, 0.11, v * 0.7, 850, 1300, B);
        }
        break;
      case 'airhorn':
        for (const [st, d] of [[0, 0.14], [0.2, 0.14], [0.4, 0.55]]) for (const f of [466, 472, 940]) this.tone(f, t + st, d, 'sawtooth', f > 900 ? 0.025 : 0.06, B, null, 0.01);
        break;
      case 'rimshot':
        this.tone(210, t, 0.12, 'sine', 0.3, B, 150); this.tone(150, t + 0.16, 0.14, 'sine', 0.3, B, 100);
        this.noise(t + 0.32, 0.7, 0.18, 'highpass', 6000, B);
        break;
      default: break;
    }
  }

  // ------------------------------------------------------------ one-shots
  whoosh(t = null) {
    if (!this.ctx) return;
    const tt = t ?? this.ctx.currentTime;
    this.noise(tt, 0.32, 0.22, 'bandpass', 300, this.sfxBus, 1.4, 3800, 0.22);
    this.noise(tt + 0.3, 0.3, 0.12, 'bandpass', 3800, this.sfxBus, 1.4, 600);
  }
  /** Station ident before each round: "Snor-bens F-M" sung by a synthetic choir, varied per round. */
  jingle(d = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.02, round = d.round || 1, final = !!d.final;
    this.whoosh(t);
    const base = final ? 57 : [60, 62, 58, 63, 61][(round - 1) % 5];
    const tunes = [[0, 4, 7, 12, 7], [7, 4, 0, 7, 12], [0, 2, 4, 7, 12], [12, 7, 9, 4, 7]];
    const mel = final ? [0, 3, 7, 12, 15] : tunes[(round - 1) % tunes.length];
    const vowels = [[700, 1100], [500, 1500], [700, 1200], [400, 2200], [450, 900]];   // snor - bens - eff - emm (roughly)
    const durs = [0.16, 0.24, 0.16, 0.16, 0.7];
    let tt = t + 0.18;
    mel.forEach((k, i) => {
      const f = NOTE(base + k);
      const [f1, f2] = vowels[i];
      this.vowel(f, tt, durs[i] * 1.05, 0.15, f1, f2);
      this.vowel(f * 1.26, tt, durs[i] * 1.05, 0.09, f1, f2);
      this.bell(f * 2, tt, 0.4, 0.07);
      tt += durs[i];
    });
    // the big finish chord with a sparkle
    for (const k of final ? [0, 3, 7, 12] : [0, 4, 7, 12]) this.tone(NOTE(base + mel[4] - 12 + k), tt - 0.7, 0.9, 'sawtooth', 0.035, this.sfxBus, null, 0.02);
    for (let i = 0; i < 6; i++) this.bell(NOTE(base + 24 + [0, 4, 7, 12, 16, 19][i]), tt - 0.6 + i * 0.05, 0.5, 0.035);
    if (final) { this.tone(65, t + 0.15, 1.2, 'sine', 0.5, this.sfxBus, 55); this.orchestraHit(tt - 0.7, 1.4); }
  }
  alarm() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.siren(t + 0.05, 2);
    this.tone(1175, t + 0.05, 0.5, 'square', 0.05, this.sfxBus, 1568);
  }
  tick(n) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (n === 0) {
      if (t - this.lastBuzz < 1.5) return;
      this.lastBuzz = t;
      // the buzzer
      for (const f of [110, 116.5, 220]) this.tone(f, t, 0.95, f > 200 ? 'square' : 'sawtooth', f > 200 ? 0.06 : 0.22, this.sfxBus, null, 0.01);
      return;
    }
    if (n <= 5) { this.tone(1320, t, 0.16, 'square', 0.18); this.tone(660, t, 0.16, 'triangle', 0.12); }
    else this.tone(880, t, 0.07, 'square', 0.1);
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
  pop() { if (this.ctx) { const t = this.ctx.currentTime; this.bell(NOTE(84), t, 0.35, 0.07); this.bell(NOTE(88), t + 0.07, 0.35, 0.06); } }
  /** quality: 2 perfect, 1 fine, 0 awful */
  parked(quality = 1) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    // handbrake ratchet
    for (let i = 0; i < 6; i++) this.noise(t + i * 0.035, 0.012, 0.12, 'bandpass', 2600, this.sfxBus, 3);
    this.tone(70, t + 0.22, 0.1, 'sine', 0.3);
    const t0 = t + 0.25;
    if (quality >= 2) {
      [0, 4, 7, 12, 16, 19, 24].forEach((k, i) => this.bell(NOTE(72 + k), t0 + i * 0.06, 0.8, 0.09));
      for (const k of [0, 4, 7]) this.tone(NOTE(60 + k), t0 + 0.42, 0.7, 'sawtooth', 0.04, this.sfxBus, null, 0.02);
    } else if (quality === 1) {
      [0, 4, 7, 12].forEach((k, i) => this.bell(NOTE(76 + k), t0 + i * 0.08, 0.6, 0.09));
    } else {
      // the wah-wah of shame
      [[64, 0.3], [63, 0.3], [62, 0.7]].reduce((tt, [nn, d]) => { this.tone(NOTE(nn), tt, d, 'square', 0.07, this.sfxBus, d > 0.5 ? NOTE(nn - 1) : null, 0.03); this.tone(NOTE(nn - 12), tt, d, 'triangle', 0.1); return tt + d * 0.9; }, t0);
    }
  }
  bad() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(196, t, 0.22, 'sawtooth', 0.2); this.tone(147, t + 0.2, 0.4, 'sawtooth', 0.2);
  }
  sadTrombone() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [58, 57, 56, 55].forEach((nn, i) => this.tone(NOTE(nn), t + i * 0.42, i === 3 ? 1.1 : 0.4, 'sawtooth', 0.2, this.sfxBus, i === 3 ? NOTE(nn - 1.5) : null, 0.04));
  }
  cheer(dur = 3) { if (this.ctx) { this.react('cheer'); if (dur > 2.5) this.react('roar', this.ctx.currentTime + 0.3); } }
  fanfare() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.05;
    const seq = [[0, 0.16], [0, 0.16], [0, 0.16], [0, 0.5], [-4, 0.5], [-2, 0.5], [0, 0.34], [-2, 0.16], [0, 1.4]];
    let tt = t;
    for (const [nn, d] of seq) {
      for (const k of [0, 4, 7]) this.tone(NOTE(72 + nn + k), tt, d * 0.95, 'sawtooth', 0.085, this.sfxBus, null, 0.02);
      this.tone(NOTE(48 + nn), tt, d * 0.95, 'triangle', 0.25);
      tt += d;
    }
    this.react('roar', t);
    this.react('airhorn', t + 2.6);
  }
  firework() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noise(t, 0.5, 0.25, 'lowpass', 500); this.noise(t + 0.02, 0.9, 0.12, 'highpass', 4500);
  }
  ui() { if (this.ctx) this.tone(660, this.ctx.currentTime, 0.06, 'square', 0.08); }
}
