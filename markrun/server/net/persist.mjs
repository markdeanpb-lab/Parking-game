// Session persistence in data/session.db (kv table) so a host restart resumes the game exactly where it was.
import { sessionDb } from '../db.mjs';

const KEY = 'session';

export function loadSession(db = sessionDb()) {
  try {
    const row = db.prepare('SELECT value FROM kv WHERE key = ?').get(KEY);
    if (!row) return null;
    const s = JSON.parse(row.value);
    // v1 (bankroll economy) sessions are migrated by the Game (server/net/game.mjs migrateState); anything else: fresh
    return s && (s.v === 1 || s.v === 2) && Array.isArray(s.players) ? s : null;
  } catch (e) {
    console.warn('[markrun] could not read saved session, starting fresh:', e.message);
    return null;
  }
}

export function saveSession(state, db = sessionDb()) {
  db.prepare('INSERT INTO kv (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value')
    .run(KEY, JSON.stringify(state));
}

export function clearSession(db = sessionDb()) {
  db.prepare('DELETE FROM kv WHERE key = ?').run(KEY);
}
