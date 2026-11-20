// Build release/hijinks-preview.html: ONE real round (createRound) with live hijinks, as a single self-contained page.
// Everything is inlined (three.js bundle, course + park data, the race plan, fonts as base64): no server, no fetch,
// no external requests; runs from file:// and in a sandboxed iframe.
//   node tools/build_hijinks_preview.mjs [--seed 53] [--mark r2] [--jo r3] [--out release/hijinks-preview.html]
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import * as esbuild from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
const K = Number(arg('seed', 53));
const OUT = path.resolve(ROOT, arg('out', 'release/hijinks-preview.html'));

const { historyDb } = await import(path.join(ROOT, 'server/db.mjs'));
const { createRound, gameReady, personaliseCommentary } = await import(path.join(ROOT, 'server/game/round.mjs'));
const { planHijinks } = await import(path.join(ROOT, 'server/game/hijinks.mjs'));
await gameReady?.();

// ---- the round: a real one from the game's own round builder (no funfair detour) ----
const players = [{ id: 'p1', name: 'Mark' }, { id: 'p2', name: 'Jo' }];
const round = createRound({ hist: historyDb(), sess: new DatabaseSync(':memory:'), players, roundNumber: 2, settings: { sessionId: `h${K}`, rounds: 6 }, rng: 900 + K });
const plan = round.racePlan;
if (plan.runners.some((r) => r.diversions?.length)) throw new Error('this round has a funfair detour: pick another --seed');
const pub = round.public;
const ord = [...plan.runners].sort((a, b) => a.officialS - b.officialS).map((r) => r.id);
const markId = arg('mark', ord[0]), joId = arg('jo', ord.find((x) => x !== markId));
if (markId === joId) throw new Error('Mark and Jo must back different runners');
const nameOf = (id) => { const r = pub.runners.find((x) => x.id === id); return r?.shortName || r?.nickname || id; };

// personalised commentary as if both had a win bet down
const bets = { p1: [{ type: 'win', runnerId: markId, stake: 20 }], p2: [{ type: 'win', runnerId: joId, stake: 20 }] };
try { personaliseCommentary(round, bets, players, plan, 7); } catch (e) { console.warn('personaliseCommentary:', e.message); }
// the hijinks (the visible causes of real slowdowns, surges, passes and the Hill)
plan.hijinks = planHijinks({ racePlan: plan, runners: pub.runners, rng: K, backedIds: [markId, joId] });
// a hijink line has the floor: drop the regular commentary lines that would land on top of one
plan.commentary = (plan.commentary || []).filter((c) => !plan.hijinks.some((h) => c.broadcastS > h.atBroadcastS - 2.5 && c.broadcastS < h.untilBroadcastS + 1.5));

const data = {
  course: JSON.parse(fs.readFileSync(path.join(ROOT, 'data/course/course.json'), 'utf8')),
  park: JSON.parse(fs.readFileSync(path.join(ROOT, 'data/course/park.json'), 'utf8')),
  round: pub, plan,
  backedBy: { [markId]: ['Mark'], [joId]: ['Jo'] },
  players: [{ name: 'Mark', avatar: { emoji: '🦊', colour: '#ffb000' } }, { name: 'Jo', avatar: { emoji: '🐼', colour: '#ff6fb5' } }],
  backers: { Mark: nameOf(markId), Jo: nameOf(joId) },
};

// ---- bundle ----
const res = await esbuild.build({ entryPoints: [path.join(ROOT, 'client/tv/race/hijinks/preview_app.js')], bundle: true, format: 'esm', target: 'es2020', minify: !process.argv.includes('--dev'), write: false, logLevel: 'warning', legalComments: 'none' });
const js = res.outputFiles[0].text;
const font = (f) => `data:font/ttf;base64,${fs.readFileSync(path.join(ROOT, 'client/assets/fonts', f)).toString('base64')}`;
const theme = fs.readFileSync(path.join(ROOT, 'client/shared/theme.css'), 'utf8')
  .replace("url('/assets/fonts/LilitaOne-Regular.ttf')", `url('${font('LilitaOne-Regular.ttf')}')`)
  .replace("url('/assets/fonts/Nunito-Variable.ttf')", `url('${font('Nunito-Variable.ttf')}')`);
if (/url\(['"]?\//.test(theme)) throw new Error('theme.css still references a server path');
const safe = (s) => s.replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--');
const dataJson = JSON.stringify(data).replace(/</g, '\\u003c');

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>MARKRUN hijinks preview</title>
<style>${theme}</style>
<style>
html,body{margin:0;height:100%;background:#0d1020;overflow:hidden;font-family:var(--font-body,Nunito,system-ui,sans-serif)}
#stage{position:absolute;inset:0}
:root{--u:min(1vw,1.78vh)}
#subs{position:absolute;left:50%;bottom:calc(var(--u)*1.1);transform:translateX(-50%);width:calc(var(--u)*80);display:flex;justify-content:center;pointer-events:none;z-index:8}
.sub{display:flex;align-items:center;gap:calc(var(--u)*.8);max-width:100%;padding:calc(var(--u)*.35) calc(var(--u)*1) calc(var(--u)*.45) calc(var(--u)*.55);background:rgba(20,24,60,.78);border:calc(var(--u)*.16) solid #14183c;border-radius:calc(var(--u)*.9);color:#fff;font-size:calc(var(--u)*1.45);line-height:1.2;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;animation:mrsub .25s ease both}
.sub .who{flex:none;font-family:var(--font-display,'Lilita One',sans-serif);font-weight:400;font-size:calc(var(--u)*1);padding:calc(var(--u)*.15) calc(var(--u)*.7);border-radius:calc(var(--u)*.5);border:calc(var(--u)*.14) solid #14183c;color:#14183c;background:#ffd23f;transform:skewX(-8deg)}
.sub .who.pam{background:#ff6fb5;color:#fff}
@keyframes mrsub{from{transform:translateY(40%);opacity:0}to{transform:none;opacity:1}}
#title{position:absolute;inset:0;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*1.6);background:radial-gradient(ellipse at 50% 40%,#2a3fa8 0%,#141a4a 60%,#0b0e26 100%);color:#fff;transition:opacity .6s}
#title.gone{opacity:0;pointer-events:none}
#title .logo{font-family:var(--font-display,'Lilita One',sans-serif);font-size:calc(var(--u)*9);letter-spacing:.02em;color:#ffd23f;-webkit-text-stroke:calc(var(--u)*.25) #14183c;text-shadow:0 calc(var(--u)*.7) 0 #14183c;transform:skewX(-6deg)}
#title .tag{font-family:var(--font-display,'Lilita One',sans-serif);font-size:calc(var(--u)*2.6);background:#ff6fb5;color:#fff;padding:calc(var(--u)*.3) calc(var(--u)*1.6);border:calc(var(--u)*.25) solid #14183c;border-radius:calc(var(--u)*1);transform:skewX(-8deg);box-shadow:0 calc(var(--u)*.45) 0 #14183c}
#title .who{display:flex;gap:calc(var(--u)*3);margin-top:calc(var(--u)*1.4);font-size:calc(var(--u)*2.3);font-weight:800}
#title .who div{display:flex;align-items:center;gap:calc(var(--u)*.8);background:rgba(255,255,255,.08);border:calc(var(--u)*.18) solid rgba(255,255,255,.25);border-radius:calc(var(--u)*1.4);padding:calc(var(--u)*.6) calc(var(--u)*1.4)}
#title .who .av{width:calc(var(--u)*3.6);height:calc(var(--u)*3.6);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*2.2);border:calc(var(--u)*.22) solid #14183c}
#title .who b{color:#ffd23f}
#title .go{margin-top:calc(var(--u)*1.2);font-size:calc(var(--u)*1.3);opacity:.7}
#ctl{position:absolute;right:calc(var(--u)*1);bottom:calc(var(--u)*1);display:flex;gap:calc(var(--u)*.5);z-index:30;opacity:.35;transition:opacity .2s}
#ctl:hover{opacity:1}
#ctl button{font:800 calc(var(--u)*1.05) var(--font-body,Nunito,system-ui,sans-serif);padding:calc(var(--u)*.35) calc(var(--u)*.9);border-radius:calc(var(--u)*.6);border:calc(var(--u)*.14) solid #14183c;background:#fff;color:#14183c;cursor:pointer}
#end{position:absolute;left:50%;bottom:calc(var(--u)*6);transform:translateX(-50%);z-index:25;display:none}
#end.on{display:block}
#end button{font:400 calc(var(--u)*2) var(--font-display,'Lilita One',sans-serif);padding:calc(var(--u)*.5) calc(var(--u)*2);border-radius:calc(var(--u)*1);border:calc(var(--u)*.25) solid #14183c;background:#ffd23f;color:#14183c;cursor:pointer;box-shadow:0 calc(var(--u)*.4) 0 #14183c}
body.shot #ctl,body.shot #end{display:none!important}
</style></head>
<body>
<div id="stage"></div>
<div id="subs"></div>
<div id="title"><div class="logo">MARKRUN</div><div class="tag">Hijinks preview</div>
  <div class="who"><div><span class="av" style="background:#ffb000">🦊</span><span>Mark backs <b id="tMark"></b></span></div><div><span class="av" style="background:#ff6fb5">🐼</span><span>Jo backs <b id="tJo"></b></span></div></div>
  <div class="go">${esc(pub.title || '')}</div></div>
<div id="ctl"><button id="bPlay">Pause</button><button id="bRestart">Restart</button><button id="bNext">Next hijink</button><button id="bSpeed">1x</button></div>
<div id="end"><button id="bAgain">Watch again</button></div>
<script type="application/json" id="mr-data">${dataJson}</script>
<script type="module">${safe(js)}</script>
</body></html>
`;
function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
const mb = (fs.statSync(OUT).size / 1048576).toFixed(2);
console.log(`${path.relative(ROOT, OUT)}: ${mb} MB  round "${pub.title}" (seed ${K}); Mark backs ${nameOf(markId)} (${markId}), Jo backs ${nameOf(joId)} (${joId})`);
for (const h of plan.hijinks) console.log(`  ${h.id} ${h.kind.padEnd(12)} b ${h.atBroadcastS.toFixed(1)}-${h.untilBroadcastS.toFixed(1)}  ${nameOf(h.who)}${h.other ? ` / ${nameOf(h.other)}` : ''}  ${h.truth}`);
console.log('  finish:', ord.map((id) => `${nameOf(id)} ${plan.runners.find((r) => r.id === id).officialS}s`).join(', '));
