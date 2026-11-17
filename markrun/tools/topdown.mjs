import fs from 'node:fs';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)(process.env.PW || 'playwright');
const c = JSON.parse(fs.readFileSync('data/course/course.json'));
const p = JSON.parse(fs.readFileSync('data/course/park.json'));
import { DatabaseSync } from 'node:sqlite';
const divs = new DatabaseSync('data/markrun.db').prepare('select diversions from performances where diversions is not null').all().flatMap((r) => JSON.parse(r.diversions));
const zoom = process.argv[2] === 'funfair';
const xs = c.points.map(q => q[0]), zs = c.points.map(q => q[2]);
let x0 = Math.min(...xs) - 150, x1 = Math.max(...xs) + 150, z0 = Math.min(...zs) - 150, z1 = Math.max(...zs) + 150;
if (zoom) { const f = c.funfair; x0 = f.center[0] - 260; x1 = f.center[0] + 260; z0 = f.center[1] - 260; z1 = f.center[1] + 260; }
const col = { park: '#cfe8b0', grass: '#b5dc8a', water: '#5aa9e6', track: '#d9634a', tennis: '#4a8f5a', pitch: '#8fcf6a', playground: '#f2c94c', wood: '#3f7d3a', scrub: '#6a9a4a', garden: '#e88fb0', building: '#999', path: '#c9b38a', road: '#666', rail: '#333', barrier: '#a07040' };
let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x0} ${z0} ${x1 - x0} ${z1 - z0}" width="1200" height="${1200 * (z1 - z0) / (x1 - x0)}" style="background:#eee">`;
for (const k of ['park', 'grass', 'wood', 'scrub', 'garden', 'pitch', 'tennis', 'track', 'playground', 'water', 'building', 'road', 'rail', 'path', 'barrier'])
  for (const f of p.features.filter(f => f.kind === k)) {
    const d = f.pts.map(q => q.join(',')).join(' ');
    s += f.closed && !['path', 'road', 'rail', 'barrier'].includes(k) ? `<polygon points="${d}" fill="${col[k]}" stroke="none" opacity="0.9"/>` : `<polyline points="${d}" fill="none" stroke="${col[k]}" stroke-width="${k === 'road' ? 6 : k === 'path' ? 2.5 : 1}"/>`;
  }
for (const t of p.pois.filter(q => q.kind === 'tree')) s += `<circle cx="${t.pos[0]}" cy="${t.pos[1]}" r="3" fill="#2d6a2d"/>`;
const pts = c.points.map(q => `${q[0]},${q[2]}`).join(' ');
s += `<polyline points="${pts}" fill="none" stroke="#e0218a" stroke-width="5" opacity="0.8"/>`;
for (let i = 0; i < c.points.length; i += 50) s += `<text x="${c.points[i][0] + 8}" y="${c.points[i][2]}" font-size="22" fill="#000">${i * 10}</text>`;
const hmax = Math.max(...c.points.map(q => q[1]));
for (let i = 0; i < c.points.length; i += 5) s += `<circle cx="${c.points[i][0]}" cy="${c.points[i][2]}" r="4" fill="hsl(${240 - 240 * c.points[i][1] / hmax},90%,50%)"/>`;
for (const d of divs) s += `<polyline points="${d.path.map(q => q.join(',')).join(' ')}" fill="none" stroke="#ff7f00" stroke-width="3"/>`;
if (c.funfair) s += `<circle cx="${c.funfair.center[0]}" cy="${c.funfair.center[1]}" r="${c.funfair.radius}" fill="none" stroke="purple" stroke-dasharray="8 6" stroke-width="3"/>`;
s += `<circle cx="0" cy="0" r="10" fill="lime"/><circle cx="${c.finish[0]}" cy="${c.finish[1]}" r="10" fill="red"/></svg>`;
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1200, height: zoom ? 1200 : 1300 } });
await pg.setContent(s); await pg.screenshot({ path: zoom ? '/tmp/claude-0/shots/funfair.png' : '/tmp/claude-0/shots/topdown.png', fullPage: true }); await b.close();
