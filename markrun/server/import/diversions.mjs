// Course diversions: sections where a run's own GPS trace leaves the canonical course (e.g. funfair weekends, when
// the course is re-routed around the fairground). Detected from the parkrun segment of the 1 Hz stream only.
// Stored per performance as [{ fromM, toM, maxOffM, path: [[x, z], ...] }] in course-local metres, so the 3D
// runner can follow the real diverted route. Also writes the funfair area into data/course/course.json.
import fs from 'node:fs';
import path from 'node:path';
import { DATA, tx } from '../db.mjs';

const ENTER_M = 35, EXIT_M = 20, MIN_LEN_M = 80, PAD_M = 40;

export function computeDiversions(db) {
  const courseFile = path.join(DATA, 'course', 'course.json');
  if (!fs.existsSync(courseFile)) return 0; // course is built after the first ingest; re-run ingest afterwards
  const course = JSON.parse(fs.readFileSync(courseFile, 'utf8'));
  const { lat: LAT0, lon: LON0 } = course.origin;
  const KX = 111320 * Math.cos((LAT0 * Math.PI) / 180), KZ = 110540;
  const P = course.points.map((p) => [p[0], p[2]]);
  const cum = [0];
  for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
  const total = cum.at(-1);
  const courseAt = (m) => { // point on the course for parkrun metres m (fraction of 5000 along the polyline)
    const s = (Math.max(0, Math.min(5000, m)) / 5000) * total;
    let i = 1; while (i < cum.length - 1 && cum[i] < s) i++;
    const f = (s - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
    return [P[i - 1][0] + f * (P[i][0] - P[i - 1][0]), P[i - 1][1] + f * (P[i][1] - P[i - 1][1])];
  };
  const nearestOnCourse = (x, z) => {
    let best = Infinity, bp = null;
    for (let i = 0; i < P.length - 1; i++) {
      const [ax, az] = P[i], [bx, bz] = P[i + 1];
      const dx = bx - ax, dz = bz - az, L = dx * dx + dz * dz;
      const t = L ? Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / L)) : 0;
      const d = Math.hypot(x - ax - t * dx, z - az - t * dz);
      if (d < best) { best = d; bp = [ax + t * dx, az + t * dz]; }
    }
    return bp;
  };
  const distToCourse = (x, z) => {
    let best = Infinity;
    for (let i = 0; i < P.length - 1; i++) {
      const [ax, az] = P[i], [bx, bz] = P[i + 1];
      const dx = bx - ax, dz = bz - az, L = dx * dx + dz * dz;
      const t = L ? Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / L)) : 0;
      best = Math.min(best, Math.hypot(x - ax - t * dx, z - az - t * dz));
    }
    return best;
  };

  const rows = db.prepare(`SELECT p.run_date, p.quality, s.raw_json FROM performances p JOIN matches m USING(run_date)
    JOIN streams s ON s.activity_id = m.activity_id`).all();
  const up = db.prepare('UPDATE performances SET diversions = ? WHERE run_date = ?');
  let found = 0;
  const allPts = [];
  tx(db, () => {
    db.exec('UPDATE performances SET diversions = NULL');
    for (const r of rows) {
      const q = JSON.parse(r.quality);
      if (q.i0 == null || q.i1 == null) continue;
      const st = JSON.parse(r.raw_json);
      if (!st.location) continue;
      const { distance: d, location: loc } = st;
      const D = d[q.i1] - d[q.i0];
      const toM = (k) => ((d[k] - d[q.i0]) / D) * 5000;
      const xz = (k) => [(loc[k][1] - LON0) * KX, -(loc[k][0] - LAT0) * KZ];
      const dev = [];
      for (let k = q.i0; k <= q.i1; k++) dev.push(distToCourse(...xz(k)));
      const divs = [];
      for (let a = 0; a < dev.length; a++) {
        if (dev[a] <= ENTER_M) continue;
        let b = a; while (b < dev.length && dev[b] > EXIT_M) b++;
        // walk back to where it left the course
        let s0 = a; while (s0 > 0 && dev[s0] > 8) s0--;
        let s1 = Math.min(b, dev.length - 1); while (s1 < dev.length - 1 && dev[s1] > 8) s1++;
        const fromM = toM(q.i0 + s0), endM = toM(q.i0 + s1);
        if (endM - fromM >= MIN_LEN_M && fromM > 20 && endM < 4980) {
          const f0 = Math.max(0, fromM - PAD_M), f1 = Math.min(5000, endM + PAD_M);
          const pts = [courseAt(f0)];
          for (let k = q.i0 + s0; k <= q.i0 + s1; k++) pts.push(xz(k));
          pts.push(courseAt(f1));
          // light smoothing of interior points
          const sm = pts.map((p, i) => (i === 0 || i === pts.length - 1) ? p
            : [(pts[i - 1][0] + 2 * p[0] + pts[i + 1][0]) / 4, (pts[i - 1][1] + 2 * p[1] + pts[i + 1][1]) / 4]);
          divs.push({ fromM: Math.round(f0), toM: Math.round(f1), maxOffM: Math.round(Math.max(...dev.slice(a, b))),
            path: sm.map(([x, z]) => [Math.round(x * 10) / 10, Math.round(z * 10) / 10]) });
          for (let k = a; k < b; k++) if (dev[k] > 25) { const p = xz(q.i0 + k), c = nearestOnCourse(...p); allPts.push([(p[0] + c[0]) / 2, (p[1] + c[1]) / 2]); }
        }
        a = b;
      }
      if (divs.length) { up.run(JSON.stringify(divs), r.run_date); found++; }
    }
  });
  // funfair area = where the diverted runners went
  if (allPts.length) {
    const cx = allPts.reduce((s, p) => s + p[0], 0) / allPts.length, cz = allPts.reduce((s, p) => s + p[1], 0) / allPts.length;
    const radius = Math.max(...allPts.map((p) => Math.hypot(p[0] - cx, p[1] - cz)));
    course.funfair = { center: [Math.round(cx), Math.round(cz)], radius: Math.round(radius),
      note: 'Midline between the usual course and the GPS diversion taken on funfair weekends (Easter/August bank holidays). Place the fairground along this strip.' };
    fs.writeFileSync(courseFile, JSON.stringify(course));
  }
  return found;
}
