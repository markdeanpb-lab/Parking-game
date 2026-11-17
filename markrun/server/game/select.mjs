// Field selection: banded fields of 5 from the main pool, classified by race archetype, picked for a varied session.
import { analyse } from './raceplan.mjs';

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

// Returns { perfs, archetype, target, analysis, wildcard }
// formGap(perfs) -> seconds between the best and worst "form guide" estimate (training-load features only, no outcomes).
export function selectField({ data, rng, mem, weights, settings = {}, roundNumber = 1, size = 5, tries = 140, formGap = null, formRank = null }) {
  const band = settings.bandS ?? 45;
  const wildRate = settings.wildcardRate ?? 0.08;
  const wildcard = roundNumber > 1 && (mem?.wildcards ?? 0) < 1 && data.novelty.length > 0 && rng.chance(wildRate);
  const target = wildcard ? 'mismatch' : chooseTarget(rng, mem);
  const W = (p) => weights.get(p.date) ?? 1;
  const main = data.main.filter((p) => W(p) > 0);
  const divCap = (mem?.diverted ?? 0) >= 2 ? 0 : 1;
  const mainSize = wildcard ? size - 1 : size;
  let best = null;
  for (let i = 0; i < tries; i++) {
    const anchor = rng.weighted(main, W);
    const lo = anchor.officialS - band * 2 * rng.next(), hi = lo + band * 2; // a 2*band window containing the anchor
    const inWin = main.filter((p) => p !== anchor && p.officialS >= lo && p.officialS <= hi);
    if (inWin.length < mainSize - 1) continue;
    const pick = [anchor, ...rng.sampleWeighted(inWin, mainSize - 1, W)];
    if (pick.filter((p) => p.diversions?.length).length > divCap) continue;
    if (wildcard) {
      const nov = rng.weighted(data.novelty, (p) => (W(p)) * (p.officialS <= 2100 ? 1 : 0.35));
      pick.push(nov);
    }
    const a = analyse(asField(pick));
    const arch = classify(a, wildcard);
    let score = (arch === target ? 4 : 0) + pick.reduce((s, p) => s + 0.6 * Math.log(W(p)), 0) + Math.min(a.leadChanges, 4) * 0.12 + rng.next() * 0.5;
    if (formGap) score += (settings.formGapBonus ?? 0) * Math.min(1, formGap(pick) / (settings.formGapScale ?? 60));
    // curation: prefer fields where the training-load form guide broadly holds, so clues are genuinely useful
    // more often than not (upsets still come from in-race archetypes and from fields where it doesn't hold).
    if (formRank) score += (settings.formHoldsBonus ?? 0) * formRank(pick);
    const recent = mem?.archetypes || [];
    if (!wildcard && recent.at(-1) === arch) score -= 2.5;
    if (!wildcard && recent.slice(-4).includes(arch)) score -= 0.8;
    if (!best || score > best.score) best = { score, perfs: pick, archetype: arch, analysis: a };
    if (arch === target && i > 30 && best.archetype === target) break;
  }
  if (!best) throw new Error('selectField: no candidate field found');
  return { perfs: best.perfs, archetype: best.archetype, target, analysis: best.analysis, wildcard };
}
