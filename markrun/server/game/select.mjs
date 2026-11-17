// Field selection: banded fields of 5 from the main pool, classified by race archetype, picked for a varied session.
import { analyse } from './raceplan.mjs';
import { BANDS } from './themes.mjs';

export const ARCHETYPES = {
  photo_finish: { label: 'Photo Finish', blurbs: [
    'Separated by less than a gasp. The stewards needed a magnifying glass and a sit-down.',
    'Decided by a nostril. Possibly an eyebrow. Science is still out.',
    'So close the timing chip filed a complaint.'] },
  comeback: { label: 'The Great Comeback', blurbs: [
    'Written off at halfway, then came storming through like a bus you\'d given up on.',
    'From the back of the pack to the front of the queue. Never write off a man with something to prove.',
    'Dead and buried at two kilometres. Then the zombie apocalypse began.'] },
  fader: { label: 'False Dawn', blurbs: [
    'Led at halfway, then the wheels came off, the doors fell off, and the exhaust is somewhere near the lake.',
    'Went out like a firework. Came home like a damp sparkler.',
    'Front-runner faded faster than a holiday tan.'] },
  chaos: { label: 'Utter Chaos', blurbs: [
    'The lead changed hands more often than a pub quiz pen. Nobody knew what was going on. Including them.',
    'A race with no script, no plan and no mercy. Lead changes galore.',
    'Absolute pandemonium. The leader board looked like a fruit machine.'] },
  runaway: { label: 'Runaway Train', blurbs: [
    'One runner left the station early and never looked back. The rest were waiting for a replacement bus.',
    'A procession at the front. A fight for the scraps behind.',
    'Gone. Out of sight. Probably already in the café queue.'] },
  procession: { label: 'The Grind', blurbs: [
    'No fireworks, just honest graft. Like a Sunday roast: dependable, a bit dry.',
    'A steady, sensible, tactical affair. Pam enjoyed it. Jeff needed a lie-down.',
    'Everybody ran their own race. Some ran it faster than others. That\'s parkrun.'] },
  mismatch: { label: 'Wildcard Mismatch', blurbs: [
    'One of these runners was not, shall we say, giving it the full beans. The clues knew.',
    'A ringer in reverse: somebody turned up for a jog and found himself in a horse race.',
    'Wildcard round. One runner had other priorities this morning, and they were not speed.'] },
  false_favourite: { label: 'False Favourite', blurbs: [
    'The bookies\' darling finished nowhere. Somebody owes the punters an apology.',
    'The favourite strutted to the start line and limped into history.'] },
};

const TARGET_WEIGHTS = { photo_finish: 1.0, comeback: 1.0, fader: 1.0, chaos: 0.9, runaway: 0.75, procession: 0.4 };

export function classify(a, wildcard = false) {
  if (wildcard) return 'mismatch';
  if (a.winningMarginS <= 2) return 'photo_finish';
  if (a.winnerPlaceAt2k >= 4) return 'comeback';
  if (a.leaderAt2kFinalPlace >= 4) return 'fader';
  if (a.leadChanges >= 4) return 'chaos';
  if (a.breakawayAtS != null && a.leaderAt2kFinalPlace === 1 && a.winningMarginS >= 10) return 'runaway';
  return 'procession';
}

export function usageWeights(data, sess, mem, now = Date.now()) {
  const w = new Map();
  const hist = new Map();
  if (sess) {
    try {
      for (const r of sess.prepare('SELECT run_date, COUNT(*) n, MAX(used_at) last FROM usage GROUP BY run_date').all()) hist.set(r.run_date, r);
    } catch { /* no usage table */ }
  }
  for (const p of data.perfs) {
    let x = 1;
    const h = hist.get(p.date);
    if (h) {
      const ageDays = (now - Date.parse(h.last)) / 86400000;
      x = ageDays < 3 ? 0.35 : 1 / (1 + 0.12 * h.n);
    }
    if (mem?.perfs?.has(p.date)) x = 0; // never twice in one session (round.mjs falls back if the pool runs dry)
    if (p.diversions?.length) x *= 0.7;
    w.set(p.date, x);
  }
  return w;
}

function chooseTarget(rng, mem) {
  const recent = mem?.archetypes || [];
  return rng.weighted(Object.keys(TARGET_WEIGHTS), (k) => {
    let wt = TARGET_WEIGHTS[k];
    const lastIdx = recent.lastIndexOf(k);
    if (lastIdx >= 0) {
      const ago = recent.length - lastIdx; // 1 = previous round
      wt *= ago === 1 ? 0.05 : ago === 2 ? 0.3 : ago === 3 ? 0.6 : 0.85;
    }
    return wt;
  });
}

const asField = (perfs) => perfs.map((p, i) => ({ id: `x${i}`, progress: p.progress, officialS: p.officialS, perf: p }));

export const isPBDay = (p) => p.facts?.was_finsbury_pb === true || p.result?.pbFlag === 'PB';

// Returns { perfs, archetype, target, analysis, wildcard }
// theme: from themes.mjs (band / data predicate / funfair / wildcard).
// formGap(perfs): spread of the public form guide (training-load features only, no outcomes).
// formRank(perfs): agreement between the form guide and the real order (curation; odds never see it).
export function selectField({ data, rng, mem, weights, settings = {}, roundNumber = 1, size = 5, tries = 140, formGap = null, formRank = null, theme = null }) {
  const band = settings.bandS ?? 45;
  const wildcard = !!theme?.wildcard;
  const target = wildcard ? 'mismatch' : chooseTarget(rng, mem);
  const W = (p) => weights.get(p.date) ?? 1;
  let main = data.main.filter((p) => W(p) > 0);
  if (roundNumber === 1) main = main.filter((p) => p.officialS >= BANDS.fast.hi); // never open with the fastest band
  const recent = mem?.archetypes || [];
  const scoreField = (pick, a, arch) => {
    let score = (arch === target ? 4 : 0) + pick.reduce((s, p) => s + 0.6 * Math.log(Math.max(1e-3, W(p))), 0) + Math.min(a.leadChanges, 4) * 0.12 + rng.next() * 0.5;
    if (formGap) score += (settings.formGapBonus ?? 0) * Math.min(1, formGap(pick) / (settings.formGapScale ?? 60));
    // curation: prefer fields where the training-load form guide broadly holds, so clues are genuinely useful
    // more often than not (upsets still come from in-race archetypes and from fields where it doesn't hold).
    if (formRank) score += (settings.formHoldsBonus ?? 0) * formRank(pick);
    if (!wildcard && recent.at(-1) === arch) score -= 2.5;
    if (!wildcard && recent.slice(-4).includes(arch)) score -= 0.8;
    return score;
  };

  if (theme?.funfair) { // built around the diversion runs (any band)
    let best = null;
    const div = main.filter((p) => p.diversions?.length);
    for (let i = 0; i < 25; i++) {
      const pick = rng.sampleWeighted(div, Math.min(size, div.length), W);
      if (pick.length < size) {
        const mid = pick.map((p) => p.officialS).sort((a, b) => a - b)[Math.floor(pick.length / 2)];
        const rest = main.filter((p) => !pick.includes(p) && !p.diversions?.length && Math.abs(p.officialS - mid) <= 120 && !(isPBDay(p) && pick.some(isPBDay)));
        pick.push(...rng.sampleWeighted(rest, size - pick.length, W));
      }
      if (pick.length < size) continue;
      const a = analyse(asField(pick));
      const arch = classify(a, false);
      const score = scoreField(pick, a, arch);
      if (!best || score > best.score) best = { score, perfs: pick, archetype: arch, analysis: a };
    }
    if (best) return { perfs: best.perfs, archetype: best.archetype, target, analysis: best.analysis, wildcard: false };
  }

  let pool = theme?.pred ? main.filter((p) => theme.pred(p.facts)) : main;
  let anchors = theme?.band ? pool.filter((p) => p.officialS >= BANDS[theme.band].lo && p.officialS < BANDS[theme.band].hi) : pool;
  if (!anchors.length) anchors = pool;
  const divCap = (mem?.diverted ?? 0) >= 1 ? 0 : 1; // keep most diversion runs for the Funfair Stakes
  const mainSize = wildcard ? size - 1 : size;
  let best = null;
  const cands = [];
  for (const widen of (theme?.pred ? [1, 1.5] : [1, 1.5, 2.2, 4])) {
    const win = (theme?.windowS ?? band * 2) * widen;
    for (let i = 0; i < tries; i++) {
      const anchor = rng.weighted(anchors, W);
      const lo = anchor.officialS - win * rng.next(), hi = lo + win; // a window containing the anchor
      const inWin = pool.filter((p) => p !== anchor && p.officialS >= lo && p.officialS <= hi && !(isPBDay(p) && isPBDay(anchor)));
      if (inWin.length < mainSize - 1) continue;
      const pick = [anchor];
      for (const p of rng.shuffle(inWin)) { // weighted-ish fill honouring the one-PB-day cap
        if (pick.length >= mainSize) break;
        if (isPBDay(p) && pick.some(isPBDay)) continue;
        if (rng.next() > Math.min(1, W(p))) continue;
        pick.push(p);
      }
      if (pick.length < mainSize) continue;
      if (pick.filter((p) => p.diversions?.length).length > divCap) continue;
      if (wildcard) pick.push(rng.weighted(data.novelty, (p) => Math.max(1e-3, W(p)) * (p.officialS <= 2100 ? 1 : 0.35)));
      const a = analyse(asField(pick));
      const arch = classify(a, wildcard);
      const score = scoreField(pick, a, arch);
      const c = { score, perfs: pick, archetype: arch, analysis: a };
      cands.push(c);
      if (!best || score > best.score) best = c;
      if (arch === target && i > 45 && best.archetype === target) break;
    }
    if (best) break;
  }
  if (!best) throw new Error('selectField: no candidate field found');
  // near-best alternatives (distinct fields) so round.mjs can pick the one with the clearest public market
  const seen = new Set();
  const alternatives = cands.filter((c) => c.score >= best.score - (settings.altSlack ?? 1.5)).sort((x, y) => y.score - x.score)
    .filter((c) => { const k = c.perfs.map((p) => p.date).sort().join(); if (seen.has(k)) return false; seen.add(k); return true; })
    .slice(0, settings.alternatives ?? 6)
    .map((c) => ({ perfs: c.perfs, archetype: c.archetype, analysis: c.analysis }));
  return { perfs: best.perfs, archetype: best.archetype, target, analysis: best.analysis, wildcard, alternatives };
}
