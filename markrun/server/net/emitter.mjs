// Tiny isomorphic EventEmitter (Node + browser): the subset of node:events the game/hub use.
export class Emitter {
  #h = new Map();
  on(ev, fn) { (this.#h.get(ev) || this.#h.set(ev, []).get(ev)).push(fn); return this; }
  addListener(ev, fn) { return this.on(ev, fn); }
  once(ev, fn) { const w = (...a) => { this.off(ev, w); fn.apply(this, a); }; w.listener = fn; return this.on(ev, w); }
  off(ev, fn) {
    const l = this.#h.get(ev);
    if (!l) return this;
    const i = l.findIndex((x) => x === fn || x.listener === fn);
    if (i >= 0) l.splice(i, 1);
    if (!l.length) this.#h.delete(ev);
    return this;
  }
  removeListener(ev, fn) { return this.off(ev, fn); }
  removeAllListeners(ev) { if (ev === undefined) this.#h.clear(); else this.#h.delete(ev); return this; }
  listenerCount(ev) { return this.#h.get(ev)?.length || 0; }
  listeners(ev) { return [...(this.#h.get(ev) || [])]; }
  setMaxListeners() { return this; }
  emit(ev, ...args) {
    const l = this.#h.get(ev);
    if (!l?.length) {
      if (ev === 'error') throw args[0] instanceof Error ? args[0] : new Error(String(args[0]));
      return false;
    }
    for (const fn of [...l]) fn.apply(this, args);
    return true;
  }
}

// Web Crypto (globalThis.crypto exists in Node >= 19 and every browser)
export function randHex(bytes) {
  const a = new Uint8Array(bytes);
  globalThis.crypto.getRandomValues(a);
  return Array.from(a, (b) => b.toString(16).padStart(2, '0')).join('');
}
