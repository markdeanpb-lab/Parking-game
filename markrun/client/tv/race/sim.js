// Deterministic race state at any broadcast time. Positions come ONLY from the plan:
//   raceS = broadcastToRace(plan.timeMap, b); metres = distanceAt(progress, raceS)
// Lateral lane offsets and the post-finish coast-down are visual only (never alter order or crossing time).
import { broadcastToRace, raceToBroadcast, distanceAt, timeAtDistance } from '../../../server/game/raceplan.mjs';
import { PATH_W } from './course.js';

const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function createSim(plan, C, publicRunners) {
  const tm = plan.timeMap;
  const lanes = {}; publicRunners.forEach((r, i) => (lanes[r.id] = r.lane ?? i + 1));
  const n = plan.runners.length;
  const laneVals = Object.values(lanes); const midLane = (Math.min(...laneVals) + Math.max(...laneVals)) / 2;
  const spacing = Math.min(1.25, (PATH_W - 1.6) / Math.max(1, n - 1));
  const R = plan.runners.map((r, i) => {
    const finishB = raceToBroadcast(tm, r.officialS);
    const base = ((lanes[r.id] ?? i + 1) - midLane) * spacing;
    return { ...r, finishB, base, seed: i * 1.7 + 0.3 };
  });
  const byId = Object.fromEntries(R.map((r) => [r.id, r]));
  const finishOrder = [...R].sort((a, b) => a.officialS - b.officialS).map((r) => r.id);
  const place = Object.fromEntries(finishOrder.map((id, i) => [id, i + 1]));
  const winner = byId[finishOrder[0]];
  const times = finishOrder.map((id) => byId[id].officialS);
  const firstFinishB = byId[finishOrder[0]].finishB;
  const lastFinishB = byId[finishOrder.at(-1)].finishB;
  const photoFinish = n > 1 && times[1] - times[0] <= 1.5;
  const rateAt = (b) => Math.max(0.05, (broadcastToRace(tm, b + 0.05) - broadcastToRace(tm, b - 0.05)) / 0.1);

  const cache = new Map();
  function stateAt(b) {
    const key = Math.round(b * 1000);
    if (cache.has(key)) return cache.get(key);
    const raceS = b <= 0 ? 0 : broadcastToRace(tm, b);
    const rate = b <= 0 ? 4 : rateAt(b);
    const st = { b, raceS, rate, byId: {}, order: [] };
    // metres for all first (needed for neighbour spacing)
    for (const r of R) {
      const m = distanceAt(r.progress, raceS);
      const finished = raceS >= r.officialS && b >= r.finishB - 1e-6;
      const vRace = (distanceAt(r.progress, raceS + 1) - distanceAt(r.progress, Math.max(0, raceS - 1))) / (raceS > 1 ? 2 : 1);
      st.byId[r.id] = { id: r.id, m, finished, vRace: finished ? 0 : vRace, place: place[r.id] };
    }
    for (const r of R) {
      const s = st.byId[r.id];
      let mVis = s.m, lat = r.base;
      // gentle stable racing-line drift + make room during overtakes
      lat += 0.22 * Math.sin(s.m / 85 + r.seed);
      for (const o of R) {
        if (o === r) continue; const so = st.byId[o.id];
        const dm = s.m - so.m;
        if (Math.abs(dm) < 4 && !s.finished && !so.finished) {
          const k = (1 - Math.abs(dm) / 4) * 0.32;
          lat += Math.sign(r.base - o.base || (r.seed - o.seed)) * k;
        }
      }
      let post = 0;
      if (s.finished) {
        const sf = b - r.finishB;
        const vF = (distanceAt(r.progress, r.officialS) - distanceAt(r.progress, r.officialS - 2)) / 2 * rateAt(r.finishB);
        const v0 = Math.min(14, Math.max(4, vF)), Td = 1.6;
        const coast = sf < Td ? v0 * (sf - (sf * sf) / (2 * Td)) : v0 * Td / 2 + Math.min(10 + place[r.id] * 1.5, (sf - Td) * 0.9);
        mVis = 5000 + coast;
        const pen = (place[r.id] - (n + 1) / 2) * 1.6;
        lat = lat + (pen - lat) * smooth(0, 2.5, sf);
        post = sf;
      }
      const smp = C.sample(mVis, r.id);
      lat *= 1 - smp.div; // the diverted runner follows the GPS line itself
      lat = Math.max(-PATH_W / 2 + 0.6, Math.min(PATH_W / 2 - 0.6, lat));
      Object.assign(s, {
        mVis, x: smp.x + smp.rx * lat, z: smp.z + smp.rz * lat, y: C.heightAt(smp.x + smp.rx * lat, smp.z + smp.rz * lat) + 0.16,
        tx: smp.tx, tz: smp.tz, slope: smp.slope, div: smp.div, divInfo: smp.divInfo, lat, post,
        distToFinish: Math.max(0, 5000 - s.m),
      });
    }
    const fin = R.filter((r) => st.byId[r.id].finished).sort((a, b) => a.officialS - b.officialS);
    const run = R.filter((r) => !st.byId[r.id].finished).sort((a, b) => (st.byId[b.id].m - st.byId[a.id].m) || (a.officialS - b.officialS));
    st.order = [...fin, ...run].map((r) => r.id);
    st.leader = st.byId[st.order[0]];
    const lead = byId[st.order[0]];
    for (const [i, id] of st.order.entries()) {
      const s = st.byId[id];
      if (s.finished) s.gapText = i === 0 ? fmtTime(byId[id].officialS) : `+${(byId[id].officialS - winner.officialS).toFixed(0)}s`;
      else if (i === 0) s.gapText = 'LEADER';
      else {
        const ref = st.byId[st.order[0]].finished ? winner : lead;
        s.gapText = `+${Math.max(0, raceS - timeAtDistance(ref.progress, s.m)).toFixed(1)}s`;
      }
    }
    if (cache.size > 400) cache.clear();
    cache.set(key, st);
    return st;
  }
  const orderAt = (b) => stateAt(b).order;
  const gapM = (a, c, b) => { const s = stateAt(b); return Math.abs((s.byId[a]?.m ?? 0) - (s.byId[c]?.m ?? 0)); };
  const finishedAt = (id, b) => stateAt(b).byId[id]?.finished;
  const allFinishedAt = (b) => b > lastFinishB;
  return { stateAt, orderAt, gapM, finishedAt, allFinishedAt, firstFinishB, lastFinishB, photoFinish, finishOrder, place, byId, R, rateAt, durationS: tm.durationS };
}
export function fmtTime(s) { const m = Math.floor(s / 60), r = Math.round(s - m * 60); return `${m}:${String(r).padStart(2, '0')}`; }
