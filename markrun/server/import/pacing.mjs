// Pacing reconstruction from Strava 1 Hz streams.
// Output: elapsed seconds at every 25 m of course progress (201 values, 0..5000 m), rescaled so the final
// value equals the OFFICIAL parkrun time. Official time is definitive; the stream only supplies the SHAPE.

export const STEP_M = 25;
export const N_PTS = 5000 / STEP_M + 1; // 201

const R = 6371000;
export function haversine(a, b) {
  const toR = Math.PI / 180;
  const dLat = (b[0] - a[0]) * toR, dLon = (b[1] - a[1]) * toR;
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * toR) * Math.cos(b[0] * toR) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

function median(arr) {
  const s = [...arr].sort((x, y) => x - y);
  return s.length ? s[Math.floor(s.length / 2)] : NaN;
}

// Find the running segment of a dedicated parkrun recording: from first movement to the end of sustained running.
export function directSegment(st) {
  const { time, distance } = st;
  const v = st.velocity_smooth || speedFromDistance(time, distance);
  const vm = median(v.filter((x) => x > 1.5));
  let i0 = 0;
  while (i0 < distance.length - 1 && distance[i0 + 1] - distance[0] < 2) i0++;
  let i1 = distance.length - 1;
  // trim trailing walking/standing after the finish
  while (i1 > i0 + 60 && v[i1] < 0.6 * vm) i1--;
  return { i0, i1, vm };
}

function speedFromDistance(time, distance) {
  return time.map((t, i) => {
    const a = Math.max(0, i - 3), b = Math.min(time.length - 1, i + 3);
    return (distance[b] - distance[a]) / Math.max(1, time[b] - time[a]);
  });
}

// Find the parkrun inside a longer recording (warm-up + parkrun + cool-down), using the course's start and finish
// points (learned from the dedicated recordings) and the official time.
export function extractSegment(st, startPt, finishPt, refDist, officialS) {
  const { time, distance, location } = st;
  if (!location) return null;
  let best = null;
  for (let i = 0; i < location.length; i++) {
    if (haversine(location[i], startPt) > 70) continue;
    // find j: distance covered ~ refDist
    let j = i;
    while (j < distance.length - 1 && distance[j] - distance[i] < refDist) j++;
    if (distance[j] - distance[i] < refDist * 0.97) break;
    const dFin = haversine(location[j], finishPt);
    if (dFin > 90) continue;
    const dur = time[j] - time[i];
    const score = Math.abs(dur - officialS) + dFin * 0.2 + haversine(location[i], startPt) * 0.2;
    if (!best || score < best.score) best = { i0: i, i1: j, score, dur, dFin };
  }
  return best;
}

// Convert a segment into the 25 m progress table.
export function buildProgress(st, i0, i1, officialS) {
  const { time, distance } = st;
  const t0 = time[i0], d0 = distance[i0];
  const D = distance[i1] - d0;
  const T = time[i1] - t0;
  const scale = officialS / T;
  const out = new Array(N_PTS);
  const hr = st.heart_rate ? new Array(N_PTS) : null;
  out[0] = 0;
  if (hr) hr[0] = st.heart_rate[i0];
  let k = i0;
  for (let n = 1; n < N_PTS; n++) {
    const target = (n * STEP_M / 5000) * D;
    while (k < i1 && distance[k + 1] - d0 < target) k++;
    const da = distance[k] - d0, db = distance[Math.min(k + 1, i1)] - d0;
    const ta = time[k] - t0, tb = time[Math.min(k + 1, i1)] - t0;
    const f = db > da ? (target - da) / (db - da) : 0;
    out[n] = (ta + f * (tb - ta)) * scale;
    if (hr) hr[n] = st.heart_rate[Math.min(k + (f > 0.5 ? 1 : 0), i1)];
  }
  out[N_PTS - 1] = officialS;
  // enforce strictly increasing (GPS plateaus)
  for (let n = 1; n < N_PTS; n++) if (out[n] <= out[n - 1]) out[n] = out[n - 1] + 0.05;
  if (out[N_PTS - 1] !== officialS) {
    const s = officialS / out[N_PTS - 1];
    for (let n = 0; n < N_PTS; n++) out[n] *= s;
  }
  return {
    progress: out.map((x) => Math.round(x * 100) / 100),
    hr,
    gpsDistance: D,
    recordedDuration: T,
    timeScale: scale,
  };
}

// Typical normalised shape (fraction of total time at each 25 m) from a set of progress tables.
export function typicalShape(progressTables) {
  const shape = new Array(N_PTS).fill(0);
  for (let n = 0; n < N_PTS; n++) shape[n] = median(progressTables.map((p) => p[n] / p[N_PTS - 1]));
  shape[0] = 0; shape[N_PTS - 1] = 1;
  return shape;
}

export function timeAt(progress, metres) {
  const x = Math.max(0, Math.min(5000, metres)) / STEP_M;
  const a = Math.floor(x), b = Math.min(N_PTS - 1, a + 1);
  return progress[a] + (x - a) * (progress[b] - progress[a]);
}

export function features(progress) {
  const T = progress[N_PTS - 1];
  const km = [1000, 2000, 3000, 4000, 5000].map((m) => timeAt(progress, m));
  const splits = km.map((t, i) => t - (i ? km[i - 1] : 0));
  const avgKm = T / 5;
  const firstHalf = timeAt(progress, 2500), secondHalf = T - firstHalf;
  const last400 = T - timeAt(progress, 4600);
  return {
    splits: splits.map((s) => Math.round(s * 10) / 10),
    lap1_s: Math.round(firstHalf * 10) / 10,
    lap2_s: Math.round(secondHalf * 10) / 10,
    firstKmVsAvg: Math.round((splits[0] / avgKm - 1) * 1000) / 1000, // negative = fast start
    halfRatio: Math.round((secondHalf / firstHalf) * 1000) / 1000,    // < 1 = negative split
    kick: Math.round(((last400 / 400) / (T / 5000) - 1) * 1000) / 1000, // negative = strong finish
    slowestKm: splits.indexOf(Math.max(...splits)) + 1,
    fastestKm: splits.indexOf(Math.min(...splits)) + 1,
  };
}
