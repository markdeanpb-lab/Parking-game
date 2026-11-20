// MARKRUN live hijinks planner (Wacky Races in the race shot itself; nothing pauses, nothing changes a time).
//
//   planHijinks({ racePlan, runners?, rng?, max? }) -> [{ id, kind, who, other?, atBroadcastS, untilBroadcastS, params, line, caption, truth, angles, prio }]
//
// Every hijink is the visible "cause" of something that REALLY happens in this race at that moment:
//   - a real slowdown window (200 m >= 8% slower than his own average): goose_chase, banana, raincloud
//   - a real surge (200 m >= 9% quicker than his own average): rocket_shoes, wasps
//   - a real overtake from racePlan.events: leapfrog (the passer vaults the passed runner, who shakes a fist), cartwheel
//   - the Hill (lap-1 climb >= 12% slower than his average): hill_rope (Marshal Maureen hauls him up)
// Runner positions always come from the plan (the TV only animates on top). Pure: no DOM, no randomness beyond `rng`.
import { timeAtDistance, raceToBroadcast, broadcastToRace, distanceAt } from './raceplan.mjs';

const HILLS = [[1720, 1960], [4220, 4460]];
export const RULES = { gapS: 6 }; // broadcast seconds between hijinks
export const HIJINK_KINDS = {
  goose_chase: { trig: 'slow', caption: 'GOOSE!', len: [4, 7], angles: ['gag3q', 'gagside'], line: [{ speaker: 'jeff', text: 'The GOOSE is after him!' }, { speaker: 'pam', text: 'That goose has a grievance.' }] },
  banana: { trig: 'slow', caption: 'BANANA!', len: [3.5, 6], angles: ['gagside', 'gag3q'], line: [{ speaker: 'jeff', text: 'BANANA SKIN! He\'s all over the place!' }, { speaker: 'pam', text: 'Classic. Absolutely classic.' }] },
  raincloud: { trig: 'slow', caption: 'SOAKED!', len: [3.5, 6], angles: ['gag3q', 'gagside'], line: [{ speaker: 'pam', text: 'His own personal raincloud. Lovely.' }, { speaker: 'jeff', text: 'He\'s SOAKED!' }] },
  rocket_shoes: { trig: 'surge', caption: 'WHOOSH!', len: [3.5, 6], angles: ['gagside', 'gagrear'], line: [{ speaker: 'jeff', text: 'ROCKET SHOES! He\'s found another gear!' }, { speaker: 'pam', text: 'Are those legal?' }] },
  wasps: { trig: 'surge', caption: 'WASPS!', len: [3.5, 6], angles: ['gag3q', 'gagside'], line: [{ speaker: 'jeff', text: 'WASPS! Run, run, RUN!' }, { speaker: 'pam', text: 'Motivation comes in many forms.' }] },
  leapfrog: { trig: 'overtake', caption: 'LEAPFROG!', len: [4, 5], angles: ['gagside', 'gag3q'], line: [{ speaker: 'jeff', text: 'He\'s gone straight OVER the top of him!' }, { speaker: 'pam', text: 'Cheeky.' }] },
  cartwheel: { trig: 'overtake', caption: 'SHOW-OFF!', len: [4, 5], angles: ['gagside', 'gag3q'], line: [{ speaker: 'pam', text: 'Oh, he is NOT cartwheeling past him.' }, { speaker: 'jeff', text: 'A CARTWHEEL! At this stage!' }] },
  hill_rope: { trig: 'hill', caption: 'HEAVE!', len: [4.5, 7], lookAhead: 3, angles: ['gagrear', 'gagside'], line: [{ speaker: 'pam', text: 'Maureen\'s giving him a hand.' }, { speaker: 'jeff', text: 'HEAVE! HEAVE!' }] },
};

function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const pct = (r) => Math.round(Math.abs(r - 1) * 100);
const km = (m) => `${(m / 1000).toFixed(1)} km`;

export function planHijinks({ racePlan, runners = [], rng = 1, max = 6, backedIds = [] } = {}) {
  if (!racePlan?.runners?.length || !racePlan.timeMap?.map) return [];
  const R = typeof rng === 'function' ? rng : mulberry(typeof rng === 'number' ? rng : 1);
  const tm = racePlan.timeMap, PR = racePlan.runners;
  const byId = Object.fromEntries(PR.map((r) => [r.id, r]));
  const name = (id) => { const x = runners.find((q) => q.id === id); return x?.shortName || x?.nickname || id; };
  const B = (id, m) => raceToBroadcast(tm, timeAtDistance(byId[id].progress, m));
  const leaderM = (b) => { const t = broadcastToRace(tm, Math.max(0, b)); return Math.max(...PR.map((r) => distanceAt(r.progress, t))); };
  const top2 = (b) => { const t = broadcastToRace(tm, Math.max(0, b)); return [...PR].sort((x, y) => distanceAt(y.progress, t) - distanceAt(x.progress, t)).slice(0, 2).map((x) => x.id); };
  const pace = (r, m0, m1) => (timeAtDistance(r.progress, m1) - timeAtDistance(r.progress, m0)) / (m1 - m0) / (r.officialS / 5000);
  const clear = (m0, m1) => !HILLS.some(([a, b]) => m0 < b && m1 > a) && m0 > 150 && m1 <= 4750;
  const C = [];
  // a broadcast window of the right length around a real course window
  const win = (id, m0, m1, [lo, hi]) => {
    let a = B(id, m0), b = B(id, m1);
    const mid = (a + b) / 2, len = Math.min(hi, Math.max(lo, b - a));
    return [mid - len / 2, mid + len / 2];
  };
  for (const r of PR) {
    const avg = r.officialS / 5000;
    // real slowdowns (200 m windows, step 25 m): the worst two that don't overlap
    const slow = [], fast = [];
    for (let m0 = 150; m0 + 200 <= 4750; m0 += 25) {
      if (!clear(m0, m0 + 200)) continue;
      const p = pace(r, m0, m0 + 200);
      if (p >= 1.08) slow.push({ m0, m1: m0 + 200, p });
      if (p <= 0.91 && m0 >= 400) fast.push({ m0, m1: m0 + 200, p });
    }
    const pickN = (list, better, n) => { const out = []; for (const w of [...list].sort(better)) if (out.length < n && !out.some((o) => Math.abs(o.m0 - w.m0) < 400)) out.push(w); return out; };
    for (const w of pickN(slow, (a, b) => b.p - a.p, 2)) for (const kind of ['goose_chase', 'banana', 'raincloud']) C.push({ kind, who: r.id, m0: w.m0, m1: w.m1, ratio: w.p, score: (w.p - 1) * 30, truth: `${name(r.id)} really did slow down here: 200 m from ${km(w.m0)} at ${pct(w.p)}% below his own average pace.` });
    for (const w of pickN(fast, (a, b) => a.p - b.p, 2)) for (const kind of ['rocket_shoes', 'wasps']) C.push({ kind, who: r.id, m0: w.m0, m1: w.m1, ratio: w.p, score: (1 - w.p) * 30, truth: `${name(r.id)} really did surge here: 200 m from ${km(w.m0)} at ${pct(w.p)}% quicker than his own average pace.` });
    // the Hill, lap 1
    const h = pace(r, 1720, 1960);
    if (h >= 1.12) C.push({ kind: 'hill_rope', who: r.id, m0: 1740, m1: 1940, ratio: h, score: (h - 1) * 25, truth: `${name(r.id)} climbed the Hill ${pct(h)}% slower than his average pace. Maureen did not actually tow him.` });
    void avg;
  }
  // real overtakes (lead changes first)
  for (const e of racePlan.events || []) {
    if ((e.type !== 'overtake' && e.type !== 'lead_change') || e.atM < 400 || e.atM > 4500) continue;
    const by = e.by || e.to, on = e.on || e.from;
    const sc = 2.5 + (e.type === 'lead_change' ? 1.5 : 0) + (backedIds.includes(by) || backedIds.includes(on) ? 1 : 0);
    C.push({ kind: 'leapfrog', who: by, other: on, atB: e.broadcastS, m0: e.atM, m1: e.atM, score: sc, truth: `${name(by)} really did overtake ${name(on)} at ${km(e.atM)}. Without leaving the ground.` });
    C.push({ kind: 'cartwheel', who: by, other: on, atB: e.broadcastS, m0: e.atM, m1: e.atM, score: sc - 0.6, truth: `${name(by)} really did overtake ${name(on)} at ${km(e.atM)}. On his feet, mind.` });
  }
  // one of each kind, >= RULES.gapS broadcast s apart, spread through the race
  const out = [];
  const FLAVOUR = { goose_chase: 1.2, banana: 0.7, raincloud: 0.5, rocket_shoes: 0.6, wasps: 0.4, leapfrog: 0.8, hill_rope: 0.6 }; // the signature gags first
  for (const c of C) c.score += R() * 0.6 + (backedIds.includes(c.who) ? 1 : 0) + (FLAVOUR[c.kind] || 0);
  // valid windows only (after the gun shot, clear of the last 200 m and of the final-km lead battle)
  const V = [];
  for (const c of C) {
    const K = HIJINK_KINDS[c.kind];
    const [a, b] = c.atB != null ? [c.atB - 2.2, c.atB + 2.4] : win(c.who, c.m0, c.m1, K.len);
    if (a < 16 || leaderM(b) >= 4800) continue;
    if (leaderM(a) >= 4000 && [c.who, c.other].some((id) => id && top2(a).includes(id))) continue;
    V.push({ ...c, a, b, K });
  }
  // pick best-first, but spread out: a candidate far from every chosen hijink earns up to +3 (one every ~20 s)
  while (out.length < max) {
    let best = null, bestS = -1e9;
    for (const c of V) {
      if (out.some((o) => o.kind === c.kind)) continue;
      if (out.some((o) => c.a < o.untilBroadcastS + RULES.gapS && c.b > o.atBroadcastS - RULES.gapS)) continue;
      const near = out.length ? Math.min(...out.map((o) => Math.abs((c.a + c.b) / 2 - (o.atBroadcastS + o.untilBroadcastS) / 2))) : 20;
      const sc = c.score + 3 * Math.min(1, near / 20);
      if (sc > bestS) { bestS = sc; best = c; }
    }
    if (!best) break;
    const c = best, K = c.K;
    out.push({ id: '', kind: c.kind, who: c.who, ...(c.other ? { other: c.other } : {}), atBroadcastS: Math.round(c.a * 100) / 100, untilBroadcastS: Math.round(c.b * 100) / 100,
      params: { m0: c.m0, m1: c.m1, ...(c.ratio ? { ratio: Math.round(c.ratio * 100) / 100 } : {}), ...(c.atB ? { passB: Math.round(c.atB * 100) / 100 } : {}) },
      line: K.line[Math.floor(R() * K.line.length)], caption: K.caption, angles: K.angles, ...(K.lookAhead ? { lookAhead: K.lookAhead } : {}), prio: 2.8, truth: c.truth });
  }
  out.sort((a, b) => a.atBroadcastS - b.atBroadcastS);
  out.forEach((h, i) => { h.id = `hj${i + 1}`; });
  return out;
}
