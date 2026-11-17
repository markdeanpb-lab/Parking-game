// Session memory: what this game session has already used (performances, archetypes, nicknames, lines).
// Kept in-process and mirrored to session.db `kv` so a restarted host keeps avoiding repeats.
const MEMS = new Map();
const KEY = (id) => `game:memory:${id}`;

function blank() {
  return { archetypes: [], perfs: new Set(), nicknames: new Set(), taglines: new Set(), personalities: new Set(), titles: new Set(), lines: new Set(), clueSkel: new Set(), wildcards: 0, diverted: 0, rounds: 0 };
}
const SETS = ['perfs', 'nicknames', 'taglines', 'titles', 'lines', 'clueSkel'];

export function ensureSessionSchema(sess) {
  if (!sess) return;
  sess.exec(`CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS usage (run_date TEXT NOT NULL, used_at TEXT NOT NULL, round_id TEXT);`);
}

export function getMemory(sess, sessionId = 'default', reset = false) {
  let m = MEMS.get(sessionId);
  if (reset) m = blank();
  if (!m && sess) {
    try {
      const row = sess.prepare('SELECT value FROM kv WHERE key = ?').get(KEY(sessionId));
      if (row) {
        const o = JSON.parse(row.value);
        m = blank();
        Object.assign(m, o);
        for (const k of SETS) m[k] = new Set(o[k] || []);
        m.personalities = new Set();
      }
    } catch { /* ignore */ }
  }
  if (!m) m = blank();
  MEMS.set(sessionId, m);
  return m;
}
export function peekMemory(sessionId = 'default') { return MEMS.get(sessionId) || null; }

export function saveMemory(sess, sessionId, m) {
  if (!sess) return;
  const o = { ...m, personalities: [], roundLines: [] };
  for (const k of SETS) o[k] = [...m[k]];
  try { sess.prepare('INSERT INTO kv(key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value').run(KEY(sessionId), JSON.stringify(o)); } catch { /* ignore */ }
}

// Template picker that never repeats a line id within a session (falls back to least-bad if a bank is exhausted).
export function pickLineId(rng, mem, group, bank) {
  const ids = bank.map((_, i) => `${group}:${i}`);
  const fresh = ids.filter((id) => !mem?.lines?.has(id));
  const notThisRound = ids.filter((id) => !mem?.roundLines?.has(id));
  const id = fresh.length ? rng.pick(fresh) : notThisRound.length ? rng.pick(notThisRound) : rng.pick(ids);
  mem?.lines?.add(id);
  mem?.roundLines?.add(id);
  return { entry: bank[Number(id.split(':').at(-1))], id };
}
export function pickLine(rng, mem, group, bank) { return pickLineId(rng, mem, group, bank).entry; }
export function releaseLine(mem, id) { mem?.lines?.delete(id); mem?.roundLines?.delete(id); }
export function hasFresh(mem, group, bank) { return bank.some((_, i) => !mem?.lines?.has(`${group}:${i}`)); }
