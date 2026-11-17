// 2D top-down race view used when the 3D broadcast (client/tv/race/index.js) is unavailable or fails.
// Same API as createRaceView in the contract. Positions come from the real race plan via raceplan.mjs.
import { broadcastToRace, distanceAt } from '../../server/game/raceplan.mjs';

const INK = '#14183c';

export function createFallbackRaceView(container, { course, round, plan, speed = 1 }) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d', { alpha: false });
  const runners = round?.runners || [];
  const pts = course?.points || [];
  let raf = 0, paused = false, disposed = false;
  let b = 0; // broadcast seconds
  let mode = 'idle';
  let lastT = 0, lastDraw = 0;
  let onEventCb = null, onDoneCb = null;
  let queue = [];
  let podium = null;

  // bounds of the course (x east, z south)
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const p of pts) { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minZ = Math.min(minZ, p[2]); maxZ = Math.max(maxZ, p[2]); }

  function resize() {
    // fallback view: cap the backing store (it's CSS-scaled) so slow GPUs never fall behind
    const k = Math.min(1, 1280 / Math.max(1, container.clientWidth));
    canvas.width = Math.round(container.clientWidth * k);
    canvas.height = Math.round(container.clientHeight * k);
  }
  resize();
  const ro = new ResizeObserver(resize); ro.observe(container);

  function proj(x, z) {
    const W = canvas.width, H = canvas.height;
    const padTop = H * 0.16, padBot = H * 0.24, padX = W * 0.08;
    const s = Math.min((W - padX * 2 - W * 0.22) / (maxX - minX || 1), (H - padTop - padBot) / (maxZ - minZ || 1));
    const ox = padX + (W - padX * 2 - W * 0.22 - (maxX - minX) * s) / 2;
    const oy = padTop + (H - padTop - padBot - (maxZ - minZ) * s) / 2;
    return [ox + (x - minX) * s, oy + (z - minZ) * s, s];
  }
  function pointAt(m) {
    if (!pts.length) return [0, 0];
    const f = Math.max(0, Math.min(pts.length - 1, (m / 5000) * (pts.length - 1)));
    const i = Math.floor(f), j = Math.min(pts.length - 1, i + 1), k = f - i;
    return [pts[i][0] + (pts[j][0] - pts[i][0]) * k, pts[i][2] + (pts[j][2] - pts[i][2]) * k];
  }

  let bg = null;
  function drawBackground() {
    const W = canvas.width, H = canvas.height;
    bg = document.createElement('canvas'); bg.width = W; bg.height = H;
    const c = bg.getContext('2d');
    const g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#45cf86'); g.addColorStop(1, '#1f9e5c');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.fillStyle = 'rgba(255,255,255,.05)';
    const k = W / 1920;
    for (let x = -H; x < W; x += 160 * k) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 80 * k, 0); c.lineTo(x + 80 * k + H * 0.5, H); c.lineTo(x + H * 0.5, H); c.fill(); }
    if (pts.length) {
      const path = new Path2D();
      pts.forEach((p, i) => { const [x, y] = proj(p[0], p[2]); if (i) path.lineTo(x, y); else path.moveTo(x, y); });
      const s = proj(0, 0)[2];
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.strokeStyle = INK; c.lineWidth = Math.max(16, s * 14); c.stroke(path);
      c.strokeStyle = '#fff'; c.lineWidth = Math.max(12, s * 11); c.stroke(path);
      c.strokeStyle = '#6f84a8'; c.lineWidth = Math.max(8, s * 8); c.stroke(path);
      const [fx, fy] = proj(...(course.finish ? [course.finish[0], course.finish[1]] : [pts.at(-1)[0], pts.at(-1)[2]]));
      c.save(); c.translate(fx, fy);
      for (let i = -2; i < 2; i++) for (let j = -1; j < 1; j++) { c.fillStyle = (i + j) & 1 ? '#fff' : INK; c.fillRect(i * 8, j * 8, 8, 8); }
      c.restore();
    }
  }

  function draw() {
    const W = canvas.width, H = canvas.height;
    if (!bg || bg.width !== W || bg.height !== H) drawBackground();
    ctx.drawImage(bg, 0, 0);
    // runners
    const raceS = plan ? broadcastToRace(plan.timeMap, b) : 0;
    const pos = (plan?.runners || []).map((r) => ({ id: r.id, m: distanceAt(r.progress, raceS), done: raceS >= r.officialS, f: r.officialS }));
    pos.sort((a, c) => (c.m - a.m) || (a.f - c.f));
    const R = Math.max(14, W / 90);
    for (const p of [...pos].reverse()) {
      const run = runners.find((x) => x.id === p.id);
      const [x, y] = proj(...pointAt(p.m));
      ctx.beginPath(); ctx.arc(x, y + 4, R, 0, Math.PI * 2); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2); ctx.fillStyle = run?.colour?.primary || '#fff'; ctx.fill();
      ctx.lineWidth = R * 0.28; ctx.strokeStyle = INK; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = `${Math.round(R * 1.15)}px "Lilita One", sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.lineWidth = R * 0.25; ctx.strokeText(String(run?.lane ?? ''), x, y + 1); ctx.fillText(String(run?.lane ?? ''), x, y + 1);
    }
    // leaderboard
    const lx = W * 0.77, ly = H * 0.16, rowH = H * 0.075;
    ctx.font = `${Math.round(H * 0.035)}px "Lilita One", sans-serif`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    pos.forEach((p, i) => {
      const run = runners.find((x) => x.id === p.id);
      const y = ly + i * rowH;
      ctx.save(); ctx.translate(lx, y); ctx.transform(1, 0, -0.14, 1, 0, 0);
      ctx.fillStyle = INK; ctx.fillRect(4, 6, W * 0.2, rowH * 0.82);
      ctx.fillStyle = i === 0 ? '#ffd23f' : '#2a62e0'; ctx.fillRect(0, 0, W * 0.2, rowH * 0.82);
      ctx.fillStyle = run?.colour?.primary || '#fff'; ctx.fillRect(0, 0, W * 0.012, rowH * 0.82);
      ctx.restore();
      ctx.fillStyle = i === 0 ? INK : '#fff';
      ctx.fillText(`${i + 1}  ${(run?.nickname || p.id).slice(0, 18)}`, lx + W * 0.02, y + rowH * 0.41);
    });
    // clock
    ctx.font = `${Math.round(H * 0.04)}px "Lilita One", sans-serif`; ctx.textAlign = 'left';
    const tt = Math.floor(raceS);
    const txt = `${Math.floor(tt / 60)}:${String(tt % 60).padStart(2, '0')}`;
    ctx.lineWidth = 8; ctx.strokeStyle = INK; ctx.strokeText(txt, lx, ly - H * 0.05); ctx.fillStyle = '#ffd23f'; ctx.fillText(txt, lx, ly - H * 0.05);
  }

  function frame(t) {
    if (disposed) return;
    const dt = lastT ? Math.min(0.1, (t - lastT) / 1000) : 0;
    lastT = t;
    if (mode === 'race' && !paused) {
      b += dt * speed;
      while (queue.length && queue[0].broadcastS <= b) { const e = queue.shift(); try { onEventCb?.(e); } catch (err) { console.warn(err); } }
      if (b >= (plan.timeMap.durationS || 0) + 1.5) {
        mode = 'done';
        const cb = onDoneCb; onDoneCb = null;
        cb?.();
      }
    }
    if (t - lastDraw > 30) { lastDraw = t; draw(); } // ~30 fps is plenty for dots on a map
    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  return {
    kind: '2d',
    playIntro(onDone) { setTimeout(() => onDone?.(), 10); },
    playRace(onEvent, onDone) {
      onEventCb = onEvent; onDoneCb = onDone;
      queue = [...(plan.events || []), ...(plan.commentary || [])].sort((a, c) => a.broadcastS - c.broadcastS);
      b = 0; mode = 'race';
    },
    showPodium(results) { podium = results; void podium; },
    setPaused(p) { paused = !!p; },
    dispose() { disposed = true; cancelAnimationFrame(raf); ro.disconnect(); canvas.remove(); },
  };
}
