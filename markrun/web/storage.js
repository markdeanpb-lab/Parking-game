// Storage that never throws. Inside a cross-origin iframe (itch.io) localStorage can be missing, blocked (third-party
// storage settings, Safari) or throw SecurityError on access. We fall back to an in-memory map for the page lifetime.
const mem = new Map();
const memStorage = {
  get length() { return mem.size; },
  key: (i) => [...mem.keys()][i] ?? null,
  getItem: (k) => (mem.has(String(k)) ? mem.get(String(k)) : null),
  setItem: (k, v) => { mem.set(String(k), String(v)); },
  removeItem: (k) => { mem.delete(String(k)); },
  clear: () => mem.clear(),
};

function probe() {
  try {
    const ls = globalThis.localStorage;
    if (!ls) return null;
    const k = '__markrun_probe__';
    ls.setItem(k, '1');
    const ok = ls.getItem(k) === '1';
    ls.removeItem(k);
    return ok ? ls : null;
  } catch { return null; }
}

let backend = probe();
export const persistent = () => !!backend;

// A Storage-shaped object (getItem/setItem/removeItem/key/length) that writes through to localStorage when it works and
// keeps going in memory when it doesn't (e.g. quota exceeded: the in-memory copy still serves this page).
export const storage = {
  get length() { try { return backend ? backend.length : mem.size; } catch { return mem.size; } },
  key(i) { try { return backend ? backend.key(i) : memStorage.key(i); } catch { return memStorage.key(i); } },
  getItem(k) {
    if (mem.has(String(k))) return mem.get(String(k));
    try { return backend ? backend.getItem(k) : null; } catch { return null; }
  },
  setItem(k, v) {
    if (backend) {
      try { backend.setItem(k, String(v)); mem.delete(String(k)); return; } catch { /* quota / blocked: fall back */ }
    }
    mem.set(String(k), String(v));
  },
  removeItem(k) { mem.delete(String(k)); try { backend?.removeItem(k); } catch { /* */ } },
  keys() {
    const out = new Set(mem.keys());
    try { if (backend) for (let i = 0; i < backend.length; i++) out.add(backend.key(i)); } catch { /* */ }
    return [...out];
  },
};

export const getJSON = (k, d = null) => { try { const v = storage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } };
export const setJSON = (k, v) => storage.setItem(k, JSON.stringify(v));

// If window.localStorage itself is unusable, replace it with the safe store so code we don't own (the TV/phone UIs use
// localStorage directly inside try/catch) still remembers tokens and slips for the page lifetime.
export function installLocalStoragePolyfill() {
  if (backend) return false;
  try {
    Object.defineProperty(globalThis, 'localStorage', { value: memStorage, configurable: true, writable: true });
    return true;
  } catch { return false; }
}
