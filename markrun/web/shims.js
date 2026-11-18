// DB-shaped shims so the unmodified game module (server/game/*.mjs) and persist.mjs run in the browser.
//   hist: read-only history "database" answering the handful of queries the game module makes, from web/data.json.
//   sess: session "database" (kv + usage tables) backed by localStorage (or any Storage-like object).
// Queries are matched robustly (whitespace/case normalised, matched on key fragments). Anything unrecognised throws
// AND is recorded in shim.unknown, so tests/web-shims.test.mjs fails the moment the game module starts using a new query.

export const normSql = (sql) => String(sql).replace(/\s+/g, ' ').trim().toLowerCase();

// ---- query classification (pure; also used by the unit test's static scan of server/game) -------------------------
export function classifyHist(sql) {
  const n = normSql(sql);
  if (!n.startsWith('select ')) return null;
  if (/\bfrom meta\b/.test(n) && /\bwhere key\s*=/.test(n)) return 'meta';
  if (/\bfrom performances\b/.test(n) && /\bjoin parkrun_results\b/.test(n) && !/\bwhere\b/.test(n)) return 'perfs';
  if (/\bfrom facts\b/.test(n) && !/\bwhere\b/.test(n) && !/\bjoin\b/.test(n)) return 'facts';
  return null;
}
export function classifySess(sql) {
  const n = normSql(sql);
  if (/^select value from kv where key\s*=\s*\?$/.test(n)) return 'kv_get';
  if (/^insert into kv\s*\(\s*key\s*,\s*value\s*\) values\s*\(\s*\?\s*,\s*\?\s*\)/.test(n) && /on conflict\s*\(\s*key\s*\) do update set value\s*=\s*excluded\.value$/.test(n)) return 'kv_upsert';
  if (/^delete from kv where key\s*=\s*\?$/.test(n)) return 'kv_delete';
  if (/^insert into usage\s*\(\s*run_date\s*,\s*used_at\s*,\s*round_id\s*\) values\s*\(\s*\?\s*,\s*\?\s*,\s*\?\s*\)$/.test(n)) return 'usage_insert';
  if (/^select run_date\s*,/.test(n) && /\bcount\(\*\)/.test(n) && /\bmax\(used_at\)/.test(n) && /\bfrom usage group by run_date$/.test(n)) return 'usage_agg';
  return null;
}
// exec(): only idempotent schema statements are allowed (they're no-ops here)
export function classifyExec(sql) {
  const parts = String(sql).split(';').map(normSql).filter(Boolean);
  return parts.every((p) => /^create (table|index) if not exists\b/.test(p) || /^pragma\b/.test(p)) ? 'ddl' : null;
}

function unknown(shim, kind, sql) {
  const q = normSql(sql);
  shim.unknown.push({ kind, sql: q });
  try { shim.onUnknown?.(kind, q); } catch { /* */ }
  throw new Error(`MARKRUN web edition: unsupported ${kind} query: ${q.slice(0, 160)}`);
}

// ---- hist -----------------------------------------------------------------------------------------------------------
// bundle (tools/export_web_data.mjs): { meta: {k: v}, jsonColumns: { performances: [...], facts: [...] },
//   performances: [row with JSON columns parsed], facts: [row with JSON columns parsed] }
export function createHistShim(bundle) {
  const jc = bundle.jsonColumns || {};
  const restring = (rows, cols) => rows.map((r) => {
    const o = { ...r };
    for (const c of cols || []) if (c in o && o[c] != null) o[c] = JSON.stringify(o[c]);
    return Object.freeze(o);
  });
  let perfRows = null, factRows = null; // stringified lazily, once
  const perfs = () => (perfRows ||= restring([...(bundle.performances || [])].sort((a, b) => String(a.run_date).localeCompare(String(b.run_date))), jc.performances));
  const facts = () => (factRows ||= restring(bundle.facts || [], jc.facts));
  const shim = {
    unknown: [], queries: [], onUnknown: null,
    prepare(sql) {
      const kind = classifyHist(sql);
      shim.queries.push(kind || 'unknown');
      if (!kind) return unknown(shim, 'hist', sql);
      const literalKey = (normSql(sql).match(/key\s*=\s*'([^']*)'/) || [])[1];
      const rows = (params) => {
        if (kind === 'meta') {
          const k = literalKey ?? params[0];
          return k in (bundle.meta || {}) ? [{ value: bundle.meta[k] }] : [];
        }
        return kind === 'perfs' ? perfs() : facts();
      };
      return {
        get: (...p) => rows(p)[0],
        all: (...p) => rows(p).map((r) => ({ ...r })),
        iterate: (...p) => rows(p).map((r) => ({ ...r }))[Symbol.iterator](),
        run: () => unknown(shim, 'hist-write', sql),
      };
    },
    exec(sql) { if (!classifyExec(sql)) unknown(shim, 'hist-exec', sql); },
    close() {},
  };
  return shim;
}

// ---- sess -----------------------------------------------------------------------------------------------------------
export function createSessShim(store, prefix = 'markrun.web.') {
  const KV = (k) => `${prefix}kv:${k}`;
  const USAGE = `${prefix}usage`;
  const readUsage = () => { try { return JSON.parse(store.getItem(USAGE) || '{}') || {}; } catch { return {}; } };
  const shim = {
    unknown: [], queries: [], onUnknown: null,
    prepare(sql) {
      const kind = classifySess(sql);
      shim.queries.push(kind || 'unknown');
      if (!kind) return unknown(shim, 'sess', sql);
      const n = normSql(sql);
      const alias = (re, d) => (n.match(re) || [])[1] || d;
      const nAlias = alias(/count\(\*\)\s+(?:as\s+)?([a-z_]\w*)/, 'COUNT(*)');
      const lastAlias = alias(/max\(used_at\)\s+(?:as\s+)?([a-z_]\w*)/, 'MAX(used_at)');
      const rows = (p) => {
        if (kind === 'kv_get') { const v = store.getItem(KV(p[0])); return v == null ? [] : [{ value: v }]; }
        if (kind === 'usage_agg') return Object.entries(readUsage()).map(([run_date, u]) => ({ run_date, [nAlias]: u.n, [lastAlias]: u.last }));
        return unknown(shim, 'sess-read', sql);
      };
      const run = (...p) => {
        if (kind === 'kv_upsert') { store.setItem(KV(p[0]), String(p[1])); return { changes: 1 }; }
        if (kind === 'kv_delete') { store.removeItem(KV(p[0])); return { changes: 1 }; }
        if (kind === 'usage_insert') {
          const u = readUsage();
          const [date, usedAt] = p;
          const cur = u[date] || { n: 0, last: '' };
          u[date] = { n: cur.n + 1, last: String(usedAt) > cur.last ? String(usedAt) : cur.last };
          store.setItem(USAGE, JSON.stringify(u));
          return { changes: 1 };
        }
        return unknown(shim, 'sess-write', sql);
      };
      return { get: (...p) => rows(p)[0], all: (...p) => rows(p), run };
    },
    exec(sql) { if (!classifySess(sql) && !classifyExec(sql)) unknown(shim, 'sess-exec', sql); },
    close() {},
  };
  return shim;
}
