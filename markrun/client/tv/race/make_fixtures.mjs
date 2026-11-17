// Dev fixtures for the 3D race view (owned by the 3D specialist). Real performances, made-up names/looks.
// node --disable-warning=ExperimentalWarning client/tv/race/make_fixtures.mjs
import fs from 'node:fs';
import { historyDb } from '../../../server/db.mjs';
import { buildRacePlan, analyse } from '../../../server/game/raceplan.mjs';
const db = historyDb();
const P = db.prepare("SELECT run_date, official_s, progress, pacing_source, diversions, pool FROM performances ORDER BY run_date").all()
  .map((p) => ({ date: p.run_date, officialS: p.official_s, progress: JSON.parse(p.progress), pacingSource: p.pacing_source,
    diversions: p.diversions ? JSON.parse(p.diversions) : null, pool: p.pool }));
const main = P.filter((p) => p.pool === 'main' && !p.diversions);
const NAMES = [['Sir Puffington', 'Never knowingly overtaken'], ['Gravy Train', 'Fuelled by Sunday roasts'], ['The Duchess', 'Runs like she owns the park'],
  ['Turbo Nan', 'Knitted her own shoes'], ['Captain Sprout', 'Mostly vegetables'], ['Doughnut Dave', 'Has a glaze'], ['Lady Lightning', 'Probably a weather event']];
const COLS = [['#ff4757', '#ffd32a', 'Tomato'], ['#1e90ff', '#ffffff', 'Royal Blue'], ['#2ed573', '#1e272e', 'Lime'], ['#ffa502', '#5f27cd', 'Tangerine'], ['#a55eea', '#f8f8f8', 'Violet']];
const LOOKS = [
  { build: 'stocky', hat: 'cap', hair: 'short', accessory: 'sweatband', skin: '#e0ac69', face: 'grin' },
  { build: 'lanky', hat: 'headband', hair: 'long', accessory: 'sunglasses', skin: '#f1c6a5', face: 'determined' },
  { build: 'compact', hat: null, hair: 'curly', accessory: null, skin: '#8d5524', face: 'smug' },
  { build: 'tall', hat: 'beanie', hair: 'ponytail', accessory: 'medal', skin: '#c68642', face: 'goofy' },
  { build: 'compact', hat: 'bucket', hair: 'bald', accessory: 'headphones', skin: '#ffdbac', face: 'worried' },
];
function round(id, title, field) {
  const plan = buildRacePlan(id, field);
  plan.commentary = plan.events.filter((e) => e.type !== 'overtake').map((e) => ({ broadcastS: e.broadcastS, text: `${e.type} ${e.by || e.to || e.who || ''}`, speaker: 'jeff', priority: 2 }));
  return { id, number: 1, public: { roundId: id, number: 1, title, runners: field.map((r, i) => ({ id: r.id, lane: i + 1, nickname: NAMES[i][0], tagline: NAMES[i][1],
    colour: { primary: COLS[i][0], secondary: COLS[i][1], name: COLS[i][2] }, look: LOOKS[i], personality: 'x', intro: 'x',
    publicClue: { id: `c${i}`, text: 'clue', category: 'volume' }, odds: { win: 3 + i, display: `${2 + i}/1` } })), matchups: [], rules: { minStake: 10, maxBetsPerPlayer: 3 } },
    racePlan: plan };
}
// 1) funfair: 2023-04-22 + 4 main-pool runs near 20:06
const div = P.find((p) => p.date === '2023-04-22');
const band = main.filter((p) => Math.abs(p.officialS - div.officialS) <= 30).sort((a, b) => Math.abs(a.officialS - div.officialS) - Math.abs(b.officialS - div.officialS)).slice(0, 4);
const ff = [band[0], band[1], div, band[2], band[3]].map((x, j) => ({ ...x, id: `r${j + 1}` }));
fs.writeFileSync('client/tv/race/fixtures/funfair.json', JSON.stringify(round('fixture-funfair', 'The Funfair Handicap', ff)));
console.log('funfair', ff.map((f) => `${f.id}:${f.officialS}${f.diversions ? '(div)' : ''}`).join(' '));
// 2) photo finish: top two within 1 s
let pf;
for (let i = 0; i < main.length && !pf; i++) {
  const b = main.filter((x) => Math.abs(x.officialS - main[i].officialS) <= 25);
  for (let k = 0; k + 5 <= b.length; k++) {
    const f = b.slice(k, k + 5).map((x, j) => ({ ...x, id: `r${j + 1}` }));
    const a = analyse(f);
    if (a.winningMarginS <= 1 && a.leadChanges >= 2) { pf = f; break; }
  }
}
if (pf) { fs.writeFileSync('client/tv/race/fixtures/photo.json', JSON.stringify(round('fixture-photo', 'The Photo Finish Plate', pf))); console.log('photo', pf.map((f) => `${f.id}:${f.officialS}`).join(' ')); }

// 3) real rounds from the game module (createRound); keep the first one that has a funfair diversion + one ordinary
{
  const { DatabaseSync } = await import('node:sqlite');
  const { createRound } = await import('../../../server/game/round.mjs');
  const players = [{ id: 'p1', name: 'Mark' }, { id: 'p2', name: 'Mrs M' }];
  let gotDiv = false, gotPlain = false;
  for (let k = 1; k <= 400 && !(gotDiv && gotPlain); k++) {
    const sess = new DatabaseSync(':memory:');
    let r;
    try { r = createRound({ hist: db, sess, players, roundNumber: 1, settings: { sessionId: `fx${k}` }, rng: 4242 + k }); } catch (e) { if (k === 1) console.log('createRound failed:', e.message); continue; }
    const out = { id: r.id, number: r.number, public: r.public, racePlan: r.racePlan };
    const hasDiv = r.racePlan.runners.some((x) => x.diversions?.length);
    if (hasDiv && !gotDiv) { gotDiv = true; fs.writeFileSync('client/tv/race/fixtures/real-funfair.json', JSON.stringify(out)); console.log('real-funfair', k, r.public.title); }
    if (!hasDiv && !gotPlain) { gotPlain = true; fs.writeFileSync('client/tv/race/fixtures/real.json', JSON.stringify(out)); console.log('real', k, r.public.title); }
  }
}

// 4) look-book: the real round with looks overridden to cover the remaining LOOK_OPTIONS values (visual QA only)
{
  const r = JSON.parse(fs.readFileSync('client/tv/race/fixtures/real.json'));
  const L = [
    { build: 'stocky', hat: 'visor', hair: 'quiff', accessory: 'beard', face: 'wide-eyed', skin: '#e0ac69' },
    { build: 'lanky', hat: null, hair: 'afro', accessory: 'headphones', face: 'tongue-out', skin: '#5c3a21' },
    { build: 'compact', hat: null, hair: 'mohawk', accessory: 'bumbag', face: 'grin', skin: '#ffdbc4' },
    { build: 'tall', hat: 'bobble', hair: 'buzz', accessory: 'scarf', face: 'gritted', skin: '#c68642' },
    { build: 'stocky', hat: null, hair: 'swept', accessory: 'bib', face: 'cheeky', skin: '#f1c6a5' },
  ];
  r.public.runners.forEach((x, i) => (x.look = L[i]));
  fs.writeFileSync('client/tv/race/fixtures/looks.json', JSON.stringify(r));
}
