// Pure broadcast-clock maths for cutscenes (no DOM / three.js; unit-tested in tests/cutscenes.test.mjs).
// The race view advances its broadcast clock b by dt * rate; cutscenes may only (1) ease that rate for everyone
// ('slowmo'), (2) stop the step exactly on a cutscene's start, and (3) hold b still while a freeze / replay / post plays.
// None of these can move a runner's finish: b -> race seconds is still the plan's own time map.
export const PAUSING_MODES = new Set(['freeze', 'replay', 'post']);
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// clock-rate multiplier at broadcast time b (product of eased slow-mo windows)
export function slowRate(cutscenes, b) {
  let f = 1;
  for (const c of cutscenes) {
    if (c.mode !== 'slowmo') continue;
    const a = c.atBroadcastS, z = c.params?.untilBroadcastS ?? a; if (!(b >= a && b <= z)) continue;
    const ease = Math.min((z - a) / 2, c.params?.easeS ?? 0.6);
    const w = smooth(a, a + ease, b) * (1 - smooth(z - ease, z, b));
    f *= 1 - (1 - Math.max(0.05, c.params?.rate ?? 0.5)) * w;
  }
  return f;
}
// stop a clock step exactly on the next pending cutscene start in (prev, next]
export function clampStep(pending, prev, next) {
  let out = next;
  for (const c of pending) { if (c.mode === 'slowmo') continue; const a = c.atBroadcastS; if (a > prev + 1e-9 && a < out) out = a; }
  return out;
}
// Simulate a broadcast with cutscenes at a fixed wall step: returns { frames: [{ wall, b }], wallS, pauseS }.
// Mirrors the race view: hold while a pausing cutscene plays, else b += dt * rate, clamped to cutscene starts.
export function simulateClock(cutscenes, { from = -8.5, to, dt = 0.1, baseRate = () => 1 } = {}) {
  const pending = cutscenes.filter((c) => c.mode !== 'slowmo').map((c) => ({ ...c })).sort((a, b) => a.atBroadcastS - b.atBroadcastS);
  let b = from, wall = 0, hold = null, pauseS = 0;
  const frames = [{ wall, b }];
  for (let guard = 0; guard < 1e6 && b < to; guard++) {
    wall += dt;
    if (!hold) { const i = pending.findIndex((c) => b >= c.atBroadcastS - 1e-9); if (i >= 0) { const c = pending.splice(i, 1)[0]; if (PAUSING_MODES.has(c.mode)) hold = { left: c.durationS }; } }
    if (hold) { hold.left -= dt; pauseS += dt; if (hold.left <= 1e-9) hold = null; frames.push({ wall, b }); continue; }
    const prev = b;
    b = clampStep(pending, prev, b + dt * baseRate(b) * slowRate(cutscenes, b));
    frames.push({ wall, b });
  }
  return { frames, wallS: wall, pauseS };
}
