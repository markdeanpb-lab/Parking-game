// Seedable randomness helpers. createRound receives `rng` (a () => [0,1) function, or a numeric seed).
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRng(rng) {
  const next = typeof rng === 'function' ? rng : typeof rng === 'number' ? mulberry32(rng) : Math.random;
  const R = {
    next,
    int: (n) => Math.floor(next() * n),
    range: (a, b) => a + next() * (b - a),
    chance: (p) => next() < p,
    pick: (arr) => arr[Math.floor(next() * arr.length)],
    shuffle: (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      return a;
    },
    weighted: (items, weightFn) => {
      const w = items.map(weightFn);
      const tot = w.reduce((s, x) => s + Math.max(0, x), 0);
      if (!(tot > 0)) return items[Math.floor(next() * items.length)];
      let r = next() * tot;
      for (let i = 0; i < items.length; i++) { r -= Math.max(0, w[i]); if (r <= 0) return items[i]; }
      return items[items.length - 1];
    },
    // sample k distinct items, weighted
    sampleWeighted: (items, k, weightFn) => {
      const pool = [...items], out = [];
      while (out.length < k && pool.length) {
        const it = R.weighted(pool, weightFn);
        out.push(it); pool.splice(pool.indexOf(it), 1);
      }
      return out;
    },
    id: (n = 6) => Array.from({ length: n }, () => 'abcdefghijkmnpqrstuvwxyz23456789'[Math.floor(next() * 32)]).join(''),
  };
  return R;
}
