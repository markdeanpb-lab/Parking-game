// Clue generation. Every clue states a TRUE value taken from the `facts` table, framed mischievously.
// Clues never mention dates, months, years, official times, this run's result, PB status, event numbers or
// Strava titles/descriptions (race names are reduced to "a half marathon" etc.). Funfair diversions are never hinted.
// Each clue declares which odds-model features it reveals (`features`), so the house can only price what players see.
import { fill, km, words, raceType, isRaceName, isIntervalName, aOrAn, aKm, cap } from './text.mjs';
import { contribution } from './model.mjs';

const med = (a) => { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : null; };
const sum = (a) => (a || []).reduce((s, x) => s + x, 0);

// ---------- generators: (ctx) -> [candidate] ----------
// candidate: { cat, family, features, text, said, interest, factKeys, group? }

const G = {};

G.week_km = ({ f, rng }) => {
  const k = f.km_7d; if (k == null) return [];
  const v = { k: km(k) };
  let T, said, interest, group;
  if (k === 0) {
    group = 'idle';
    T = ['Ran precisely zero kilometres in the seven days before. Bold taper or full sofa residency?',
      'Training log for the previous week: blank. Fresh legs or forgotten legs?',
      'Hadn\'t run a single step all week. A masterclass in rest, or a cry for help?',
      'Week before: no running whatsoever. The trainers were reportedly "airing".'];
    said = 'hadn\'t run a step all week'; interest = 0.9;
  } else if (k < 12) {
    T = ['Only managed {k} km of training that week. Tactical taper or complete surrender?',
      '{k} km in the whole week before. That\'s barely a trip to Tesco and back.',
      'Just {k} km the week before. Resting the legs or resting on his laurels?',
      'Weekly mileage: {k} km. Some people call that a warm-up. He called it a week.'];
    said = `only ran ${v.k} kilometres all week`; interest = 0.65;
  } else if (k < 35) {
    T = ['{k} km in the legs the week before. Respectable. Suspiciously respectable.',
      'Clocked {k} km in the previous seven days. Sensible, which is very unlike him.',
      '{k} km that week. Neither hero nor zero. Thrilling stuff.',
      'Ran {k} km the week before. A solid, middle-of-the-road, building-society sort of week.'];
    said = `ran ${v.k} kilometres the week before`; interest = 0.35;
  } else if (k < 55) {
    T = ['Ran {k} km the week before. Sharp as a tack, or knackered as a carthorse?',
      '{k} km in seven days. Fit as a butcher\'s dog or tired as a Monday?',
      'A {k} km week beforehand. Either peak fitness or legs filing a formal complaint.',
      'Put in {k} km that week. The shoes are fine. The calves have questions.'];
    said = `ran ${v.k} kilometres the week before`; interest = 0.6;
  } else {
    T = ['Ran {k} km the week before. Elite fitness or legs approaching industrial action?',
      '{k} km in seven days. The man clearly has no other hobbies.',
      'A whopping {k} km that week. Built like an engine, or running on fumes?',
      '{k} km the week before. His physio has started sending Christmas cards.'];
    said = `ran ${v.k} kilometres the week before`; interest = 0.85;
  }
  return [{ cat: 'week_km', family: 'fitness', features: ['vol7'], text: fill(rng.pick(T), v), said, interest, group, factKeys: ['km_7d'] }];
};

G.week_rel = ({ f, rng }) => {
  const k = f.km_7d, b = f.baseline_weekly_km; if (k == null || !b) return [];
  const r = k / b;
  const x = r >= 1.95 ? `${Math.round(r * 10) / 10}`.replace(/\.0$/, '') : null;
  const pct = Math.round(Math.abs(r - 1) * 100 / 5) * 5;
  let T, said, interest;
  if (k === 0) return [];
  if (r >= 1.95) {
    T = ['Ran {x} times his usual weekly mileage. Peak form or dangerous overreach?',
      'Training load that week: {x}x his normal. Somebody\'s been reading running forums.',
      'Did {x} times his usual week. Either a new man or a broken one.',
      'Weekly mileage at {x} times his recent average. Ambitious. Possibly unhinged.'];
    said = `ran ${x} times his usual mileage that week`; interest = 0.9;
  } else if (r >= 1.2) {
    T = ['A bigger week than usual: about {pct}% above his recent average. Building or burning?',
      'Upped the mileage by roughly {pct}% that week. Is this a plan, or a midlife crisis?',
      'Running about {pct}% more than normal that week. Keen bean or overcooked bean?'];
    said = `ran about ${pct} percent more than usual that week`; interest = 0.55;
  } else if (r >= 0.8) {
    T = ['A perfectly average week by his own standards. Boring? Or the calm before the storm?',
      'Training that week: bang on his usual. A creature of habit. A creature of beige.',
      'Exactly his normal weekly mileage, give or take a biscuit. Nothing to see here. Or is there?'];
    said = 'had a perfectly normal training week'; interest = 0.25;
  } else if (r >= 0.35) {
    T = ['Ran about {pct}% less than his usual week. Clever taper or life got in the way?',
      'Mileage down roughly {pct}% on his normal that week. Fresh legs, or fading interest?',
      'A light week: around {pct}% below his average. Saving it for today, or saving it for never?'];
    said = `ran about ${pct} percent less than usual that week`; interest = 0.55;
  } else {
    T = ['A tiny fraction of his usual mileage that week. Resting like royalty or resting like a sloth?',
      'Barely a quarter of his normal week, if that. Taper genius or Netflix casualty?',
      'Mileage that week fell off a cliff compared with his usual. Injury, illness, or idleness?'];
    said = 'barely ran at all compared with his usual week'; interest = 0.8;
  }
  return [{ cat: 'week_rel', family: 'fitness', features: ['rel'], text: fill(rng.pick(T), { x, pct }), said, interest, hint: r >= 1.95 || r < 0.35 ? 3 : 0, group: r < 0.35 ? 'idle' : undefined, factKeys: ['km_7d', 'baseline_weekly_km', 'rel_week'] }];
};

G.month_km = ({ f, rng }) => {
  const k = f.km_28d; if (k == null) return [];
  const v = { k: km(k) };
  let T, interest;
  if (k < 25) {
    T = ['{k} km across the previous four weeks. Roughly the distance to Watford. Once.',
      'Four weeks, {k} km. That\'s about one decent Sunday long run for some people.',
      'Total for the previous month: {k} km. Not so much training as occasional jogging.'];
    interest = 0.7;
  } else if (k < 90) {
    T = ['{k} km in the four weeks before. Enough to reach Brighton, if he\'d tried. He did not.',
      'Ran {k} km over the previous month. Steady Eddie, or just Eddie?',
      '{k} km in four weeks. A modest pile of miles. A hillock, not a mountain.'];
    interest = 0.4;
  } else if (k < 160) {
    T = ['{k} km in the previous four weeks. That\'s London to Cambridge, with change.',
      'Banked {k} km over the month before. The legs have been to work.',
      'Four-week total: {k} km. Serious business, or serious fatigue?'];
    interest = 0.55;
  } else {
    T = ['{k} km in four weeks. That\'s further than London to Birmingham. On foot. For fun.',
      'A monstrous {k} km over the month before. Fitness of a whippet, or legs of a pensioner?',
      'Four weeks, {k} km. His trainers have filed for divorce.'];
    interest = 0.85;
  }
  return [{ cat: 'month_km', family: 'fitness', features: ['vol28'], text: fill(rng.pick(T), v), said: `ran ${v.k} kilometres in the previous month`, interest, factKeys: ['km_28d'] }];
};

G.consistency = ({ f, rng }) => {
  const w = f.runs_per_week_4w; if (!Array.isArray(w) || w.length < 4) return [];
  const list = w.join(', ');
  const tot = sum(w);
  const rising = w[0] - w[3] >= 2 && w[0] >= w[1];
  const falling = w[3] - w[0] >= 2 && w[0] <= w[1];
  const flat = w.every((x) => x === w[0]) || (Math.max(...w) - Math.min(...w) <= 1 && tot >= 10);
  let T, interest = 0.45;
  let group;
  if (w[0] === 0) group = 'idle';
  if (tot <= 4) { T = ['Runs per week over the previous month: {list}, most recent first. A part-time enthusiast.', 'Weekly run count, latest first: {list}. The trainers mostly lived in the hallway.', 'Runs in each of the last four weeks, newest first: {list}. Hardly a lifestyle.']; interest = 0.7; }
  else if (tot <= 8 && !rising) T = ['Weekly runs, most recent first: {list}. A runner in the same way I\'m a gardener.', 'Runs per week over the month, latest first: {list}. Ticking over. Barely.'];
  else if (flat) T = ['Runs per week for the last month, latest first: {list}. Metronomic. Possibly a robot.', 'Weekly run count, most recent first: {list}. Consistent as a bus timetable. A good one.', 'Weekly runs, newest first: {list}. Reliable as a Sunday roast.'];
  else if (rising) T = ['Runs per week, most recent first: {list}. Ramping up nicely. Or ramping up dangerously.', 'Weekly runs, latest first: {list}. Building towards something. Today, perhaps?', 'Runs per week, newest first: {list}. Somebody\'s found a training plan.'];
  else if (falling) T = ['Runs per week, most recent first: {list}. Trailing off like a bad punchline.', 'Weekly run count, latest first: {list}. Is that a taper, or is the enthusiasm leaking?', 'Runs per week, newest first: {list}. Easing off. Cleverly, or lazily?'];
  else T = ['Runs per week over the last month, latest first: {list}. Patterns? None. Chaos? Some.', 'Weekly run count, most recent first: {list}. A training plan written by a raccoon.', 'Runs per week, newest first: {list}. Consistency is a concept he has heard of.'];
  return [{ cat: 'consistency', family: 'fitness', features: ['rpw'], text: fill(rng.pick(T), { list }), said: `had ${tot} runs in the previous month`, interest, group, factKeys: ['runs_per_week_4w'] }];
};

G.long_run = ({ f, rng }) => {
  const L = f.longest_run_14d; if (!L || !L.km) return [];
  const v = { k: km(L.km), ak: aKm(km(L.km)), d: L.days_before === 1 ? 'the day before' : `${words(L.days_before)} days before` };
  let T, interest;
  if (L.km >= 18) {
    T = ['Ran {k} km in one go, {d}. Endurance banked, or legs still in the post?',
      'Longest run of the fortnight: {k} km, {d}. Half-marathon legs or half-dead legs?',
      'Did {ak} long run {d}. Builds the engine. Also empties the tank.',
      'Went the distance {d}: {k} km non-stop. Diesel engine, or flat battery?',
      'Squeezed in a {k} km epic, {d}. Stamina of a camel. Or the knees of one.'];
    interest = L.days_before <= 3 ? 0.85 : 0.6;
  } else if (L.km >= 9) {
    T = ['Longest run in the previous two weeks: {k} km, {d}. Neither epic nor tragic.',
      'His big run of the fortnight was {k} km, {d}. A respectable trot.',
      'Biggest single outing in two weeks: {k} km, {d}. Medium-rare.'];
    interest = 0.35;
  } else {
    T = ['Longest run in a fortnight: a mere {k} km. Not exactly an ultra.',
      'Nothing longer than {k} km in the previous two weeks. Sprinter\'s legs, or lazy legs?',
      'Two weeks, and never once further than {k} km. Short and sharp, or short and lazy?'];
    interest = 0.65;
  }
  return [{ cat: 'long_run', family: 'fitness', features: ['long14'], text: fill(rng.pick(T), v), said: `did a ${v.k} kilometre long run ${v.d}`, interest, factKeys: ['longest_run_14d'] }];
};

G.hard_session = ({ f, rng }) => {
  const H = f.hardest_7d; if (!H || H.effort == null) return [];
  const d = H.days_before === 1 ? 'the day before' : `${words(H.days_before)} days before`;
  const what = H.sport !== 'Run' ? `a ${H.sport.toLowerCase()} session` : isRaceName(H.name) ? aOrAn(raceType(H.km, H.name)) : isIntervalName(H.name) ? 'an interval session' : `${aKm(km(H.km))} run`;
  const v = { e: H.effort, d, what };
  let T, interest;
  let said;
  if (H.effort >= 250) {
    T = ['Toughest effort of the week: {what}, {d}, which Strava rated a {e}. That\'s a lot of suffering.',
      'Strava scored his hardest session that week a whopping {e}: {what}, {d}. Toughened up or worn down?',
      'Strava\'s suffer-o-meter hit {e} that week, for {what}, {d}. Forged in fire, or still smouldering?'];
    interest = 0.8; said = `put in a monster session ${d}`;
  } else if (H.effort >= 110) {
    T = ['Hardest session that week: {what}, {d}. Strava gave it a solid {e}.',
      'Biggest effort of the week was {what}, {d}, scoring {e} on Strava. Sharpened or blunted?',
      'Put in {what} {d} that Strava rated {e}. Proper graft, or proper tired?'];
    interest = H.days_before <= 2 ? 0.6 : 0.4; said = `put in a solid session ${d}`;
  } else {
    T = ['His hardest effort all week scored a measly {e} on Strava. Rested, or just rusty?',
      'Toughest session that week scored a gentle {e} on Strava. A week of light jogging and heavy sitting.',
      'Strava rated his hardest effort all week a mere {e}. Saving himself, or saving nothing?'];
    interest = 0.55; said = 'had a very easy week';
  }
  return [{ cat: 'hard_session', family: 'fitness', features: ['hard'], text: fill(rng.pick(T), v), said, interest, factKeys: ['hardest_7d'] }];
};

G.form = ({ f, field, p, rng }) => {
  const out = [];
  const form = f.recent_finsbury_form;
  if (!form?.length) return out;
  const mine = med(form);
  const others = field.filter((q) => q !== p && q.facts.recent_finsbury_form?.length).map((q) => med(q.facts.recent_finsbury_form));
  if (others.length >= 3) {
    const rank = 1 + others.filter((o) => o < mine).length;
    const n = others.length + 1;
    let T, interest = 0.6;
    if (rank === 1) T = ['Arrives with the strongest recent Finsbury form of anyone in this field. Obvious pick, or obvious trap?',
      'On recent Finsbury form, he\'s the pick of this bunch. The bookies have noticed. Or have they?'];
    else if (rank === n) T = ['Weakest recent Finsbury form in today\'s line-up. Due a big one, or due a lie-down?',
      'Recent Finsbury form: the worst of this lot. Underdog story, or just a dog?'];
    else { T = ['Recent Finsbury form: smack in the middle of this field. Thrillingly average.', 'On recent Finsbury results he ranks somewhere in the muddle of this field. Very much a "maybe".']; interest = 0.3; }
    out.push({ cat: 'form', family: 'fitness', features: ['form'], text: rng.pick(T), said: rank === 1 ? 'came in with the best recent form' : rank === n ? 'came in with the worst recent form' : 'came in with middling form', interest, factKeys: ['recent_finsbury_form'] });
  }
  if (form.length >= 4) {
    const last = form[form.length - 1], prev = form.slice(0, -1);
    const spread = Math.max(...form) - Math.min(...form);
    if (last < Math.min(...prev)) out.push({ cat: 'form', family: 'fitness', features: ['form'], text: rng.pick([`His previous visit here was his quickest of his last ${words(form.length)}. Momentum, or a fluke?`, `Last time out at Finsbury he beat his previous ${words(prev.length)} efforts. Hot streak, or hot air?`]), said: 'was on a hot streak at Finsbury', interest: 0.7, factKeys: ['recent_finsbury_form'] });
    else if (last > Math.max(...prev)) out.push({ cat: 'form', family: 'fitness', features: ['form'], text: rng.pick([`His previous Finsbury outing was his slowest of his last ${words(form.length)}. Blip, or the start of a slide?`, `Last time at Finsbury: slower than any of the ${words(prev.length)} before it. Wounded animal, or just wounded?`]), said: 'had slowed down last time out at Finsbury', interest: 0.7, factKeys: ['recent_finsbury_form'] });
    else if (spread >= 60) out.push({ cat: 'form', family: 'fitness', features: ['form'], text: rng.pick([`His last ${words(form.length)} Finsbury results swung by over a minute. Consistency is not his brand.`, `Recent Finsbury results have varied by more than a minute. Could be anyone. Literally.`]), said: 'had been all over the place lately', interest: 0.5, factKeys: ['recent_finsbury_form'] });
  }
  return out;
};

G.rest = ({ f, rng }) => {
  const r = f.rest_days_7d, d = f.days_since_last_run, n = f.runs_7d;
  const out = [];
  if (d != null && d >= 9) {
    out.push({ cat: 'rest', family: 'day', features: ['rest'], text: fill(rng.pick([
      'Hadn\'t run for {d} days beforehand. Fresh as a daisy or rusty as a park bench?',
      'Last run before this one: {d} days earlier. Fully recharged or fully forgotten how?',
      'A {d}-day break from running beforehand. The legs are rested. The lungs are a mystery.']), { d }),
    said: `hadn't run for ${d} days`, hint: 8, interest: 0.85, group: 'idle', factKeys: ['days_since_last_run'] });
  } else if (r != null && r >= 6) {
    out.push({ cat: 'rest', family: 'day', features: ['rest'], text: fill(rng.pick([
      '{r} rest days out of the previous seven. Recharged batteries, or a lie-in enthusiast?',
      'Took {rl} of the previous seven days off. Tapering like a pro or hibernating like a hedgehog?']), { r: cap(words(r)), rl: words(r) }),
    said: `took ${r} rest days that week`, hint: 3, interest: 0.6, factKeys: ['rest_days_7d'] });
  } else if (r != null && r <= 2) {
    out.push({ cat: 'rest', family: 'day', features: ['rest'], text: fill(rng.pick([
      'Only {r} rest days all week. Machine or madman?',
      'Rested on just {r} of the previous seven days. Dedication, or a cry for help?']), { r: words(r) }),
    said: `only had ${r} rest days that week`, hint: -2, interest: 0.6, factKeys: ['rest_days_7d'] });
  } else if (n != null) {
    out.push({ cat: 'rest', family: 'day', features: ['rest'], text: fill(rng.pick([
      'Ran {n} times in the seven days before. Sensible. Suspiciously sensible.',
      '{N} runs in the previous week, with rest days in between. Textbook. Who is he trying to impress?']), { n: words(n), N: cap(words(n)) }),
    said: `ran ${n} times that week`, interest: 0.25, factKeys: ['runs_7d', 'rest_days_7d'] });
  }
  return out;
};

G.day_before = ({ f, rng }) => {
  const list = f.day_before; if (!Array.isArray(list)) return [];
  const runs = list.filter((a) => a.sport === 'Run');
  const race = runs.find((a) => isRaceName(a.name));
  const runKm = sum(runs.map((a) => a.km));
  const other = list.filter((a) => a.sport !== 'Run');
  const C = (text, said, interest, hint = 0) => [{ cat: 'day_before', family: 'day', features: ['daybefore'], text, said, interest, hint, factKeys: ['day_before'], group: 'daybefore' }];
  if (race) {
    const t = raceType(race.km, race.name);
    const ra = t === 'mile race' ? 'a mile' : aOrAn(t);
    return C(rng.pick([`Raced ${ra} the day before. Warmed up, or worn out?`, `Squeezed in ${aOrAn(t)}, as a race, the day before. Glutton for punishment, or secret weapon?`, `The day before, he only went and raced ${ra}. Ambitious double, or idiotic double?`]), `raced ${ra} the day before`, 0.95, 15);
  }
  if (runKm >= 7) return C(fill(rng.pick(['Ran {k} km the day before. Bold. Very bold.', '{ak} run the day before. Loosening up or wearing down?', 'Knocked out {k} km the day before parkrun. Who does that? Him, apparently.']), { k: km(runKm), ak: cap(aKm(km(runKm))) }), `ran ${km(runKm)} kilometres the day before`, 0.8, 5);
  if (runKm > 0) return C(fill(rng.pick(['A little {k} km shake-out run the day before. Very professional. Very smug.', 'Jogged {k} km the day before. Legs primed, or legs pre-cooked?']), { k: km(runKm) }), `did a little shake-out run the day before`, 0.5);
  if (other.length) {
    const o = other[0];
    const s = o.sport;
    if (s === 'Ride') return C(fill(rng.pick(['Cycled {k} km the day before. Legs: primed, or pre-cooked?', 'Hopped on a bike the day before for {k} km. Active recovery, or passive sabotage?']), { k: km(sum(other.filter((a) => a.sport === 'Ride').map((a) => a.km))) }), 'was on the bike the day before', 0.55);
    if (s === 'Swim') return C(rng.pick(['Went for a swim the day before. Loose limbs, or just smells faintly of chlorine?', 'A swim the day before. Is he a runner, or a very confused duck?']), 'went swimming the day before', 0.5);
    if (s === 'WeightTraining') return C(rng.pick(['Lifted weights the day before. Mighty legs, or mighty sore legs?', 'Hit the gym for weights the day before. Strong like ox. Slow like ox?']), 'lifted weights the day before', 0.55);
    return C(rng.pick(['Did some sort of cross-training the day before. Details are sketchy. Much like his warm-up.']), 'did some cross-training the day before', 0.4);
  }
  return C(rng.pick(['Did absolutely nothing the day before. Carb-loading on the sofa, presumably.', 'No exercise at all the day before. Feet up, telly on. Elite preparation.', 'Total rest the day before. Either fresh as paint, or stiff as a board.']), 'rested completely the day before', 0.3);
};

G.warmup = ({ f, rng }) => {
  const w = f.warmup_km?.km; if (w == null) return [];
  if (w >= 8) return [{ cat: 'warmup', family: 'day', features: ['warmup'], text: fill(rng.pick(['Ran {k} km before the start. That\'s not a warm-up, that\'s a separate event.', '{k} km in the legs BEFORE parkrun even began. Is he even trying to win this one?', 'Warm-up: {k} km. Thorough, or completely lost?']), { k: km(w) }), said: `ran ${km(w)} kilometres before the start`, hint: w >= 12 ? 25 : 6, interest: 0.95, factKeys: ['warmup_km'] }];
  if (w > 0) return [{ cat: 'warmup', family: 'day', features: ['warmup'], text: fill(rng.pick(['Jogged {k} km to warm up first. Professional, or just keen to be seen?', '{ak} warm-up before the start. Muscles primed. Ego primed.', 'Warmed up with {k} km beforehand. Didn\'t want to waste the first kilometre, apparently.']), { k: km(w), ak: cap(aKm(km(w))) }), said: 'did a proper warm-up', interest: 0.45, factKeys: ['warmup_km'] }];
  return [{ cat: 'warmup', family: 'day', features: ['warmup'], text: rng.pick(['No recorded warm-up whatsoever. Rolled out of bed and onto the start line.', 'Warm-up distance: zero. Started stone cold, like a Tuesday pasty.', 'Didn\'t bother warming up. The first kilometre IS the warm-up, apparently.']), said: 'didn\'t warm up at all', interest: 0.3, factKeys: ['warmup_km'] }];
};

G.temp = ({ f, rng }) => {
  const t = f.weather?.temp_c; if (t == null) return [];
  const v = { t: Math.round(t) };
  let T, interest;
  if (t >= 18) { T = ['{t}°C at the start. The man is approximately 40% sweat.', '{t}°C on the start line. Glorious for a picnic. Less so for a 5K.', 'A balmy {t}°C. Factor 30 or Factor Fast?']; interest = 0.75; }
  else if (t <= 2) { T = ['{t}°C at the start. Ice on the boating lake, ice in the veins?', 'A bitter {t}°C. Gloves on, nose running faster than the man.', 'Just {t}°C on the start line. Brass monkeys were reportedly seen leaving.']; interest = 0.75; }
  else if (t <= 7) { T = ['A chilly {t}°C. Crisp running weather, or a reason to stay in bed?', '{t}°C at the start. Proper bobble-hat weather.']; interest = 0.4; }
  else { T = ['A mild {t}°C. Perfect running weather, which means no excuses.', '{t}°C. Ideal conditions. If he loses, it\'s entirely on him.', 'Temperature: a pleasant {t}°C. Even the ducks looked motivated.']; interest = 0.25; }
  return [{ cat: 'temp', family: 'fluff', features: ['temp'], text: fill(rng.pick(T), v), said: `ran in ${v.t} degrees`, hint: t >= 18 ? 6 : t <= 2 ? 3 : 0, interest, factKeys: ['weather'] }];
};

G.wind = ({ f, rng }) => {
  const w = f.weather; if (!w || w.wind_kmh == null) return [];
  const g = w.gust_kmh, s = Math.round(w.wind_kmh);
  if ((g != null && g >= 38) || s >= 25) {
    const v = { g: Math.round(g ?? s), s };
    const WT = ['Gusts up to {g} km/h. Flapping like a bin bag on the Seven Sisters Road.', 'Wind gusting to {g} km/h. Headwind up the Hill, tailwind on the way down. Swings and roundabouts.', 'Gusting {g} km/h. Hold on to your hats. And your dignity.'];
    if (s >= 20) WT.push('A blustery {s} km/h wind, gusting {g}. Lean runners need not apply.');
    return [{ cat: 'wind', family: 'day', features: ['wind'], text: fill(rng.pick(WT), v), said: 'battled a proper gale', hint: 7, interest: 0.75, factKeys: ['weather'] }];
  }
  if (s <= 5) return [{ cat: 'wind', family: 'day', features: ['wind'], text: rng.pick(['Barely a breath of wind. Flags hanging like wet washing.', 'Dead calm conditions. Not even the ducks were blown off course.', 'Wind speed: practically nil. No excuses on the back straight today.']), said: 'had no wind to blame', hint: -3, interest: 0.45, factKeys: ['weather'] }];
  return [{ cat: 'wind', family: 'day', features: ['wind'], text: fill(rng.pick(['A breeze of about {s} km/h. Enough to ruffle a fringe, not enough to blame.', 'Moderate wind, around {s} km/h. Middling. Like most of his excuses.']), { s }), said: 'had a bit of a breeze', interest: 0.2, factKeys: ['weather'] }];
};

G.damp = ({ f, rng }) => {
  const w = f.weather; if (!w) return [];
  if (w.prcp_mm != null && w.prcp_mm >= 0.2) return [{ cat: 'damp', family: 'fluff', features: [], text: fill(rng.pick(['{p} mm of rain that hour. Slippery corners, or lovely cooling drizzle?', 'Rain falling at the start: {p} mm. Puddles on the course. Puddles in the shoes.']), { p: w.prcp_mm }), said: 'got rained on', hint: w.prcp_mm >= 1 ? 3 : 0, interest: 0.55, factKeys: ['weather'] }];
  if (w.rhum != null && w.rhum >= 92) return [{ cat: 'damp', family: 'fluff', features: [], text: fill(rng.pick(['{h}% humidity. Less a run, more a wade through soup.', 'Humidity at {h}%. The air was basically a damp flannel.', 'Air so damp ({h}% humidity) you could wring it out.']), { h: Math.round(w.rhum) }), said: 'ran through soup', interest: 0.3, factKeys: ['weather'] }];
  return [];
};

G.race_soon = ({ f, rng }) => {
  const R = f.race_upcoming; if (!R) return [];
  const t = raceType(R.km, R.name), d = R.days_after;
  const v = { a: aOrAn(t), t, d: words(d), D: cap(words(d)) };
  let T, interest;
  if (d <= 3) { T = [`Racing ${v.a} ${d === 1 ? 'the very next day' : 'in just {d} days'}. Saving the legs, or sharpening them?`, `${cap(v.a)} was coming up ${d === 1 ? 'the very next day' : 'within {d} days'}. Peak condition, or tiptoeing round?`]; interest = 0.9; }
  else if (d <= 16) { T = [`${cap(v.a)} was on the horizon, {d} days away. Peak condition, or pre-race nerves?`, `Had ${v.a} pencilled in for {d} days later. Dress rehearsal, or damage limitation?`, `{D} days out from ${v.a}. Sharpening up, or wrapping himself in cotton wool?`]; interest = 0.6; }
  else { T = [`${cap(v.a)} was looming, about {d} days off. In the thick of training, or just thick?`, `Had ${v.a} booked for {d} days later. Building fitness, or building excuses?`, `Training for ${v.a}, {d} days away. Today is either a stepping stone or a speed bump.`]; interest = 0.4; }
  return [{ cat: 'race_soon', family: 'day', features: ['raceNear'], text: fill(rng.pick(T), v), said: `had ${v.a} coming up`, hint: d <= 3 ? 4 : 0, interest, factKeys: ['race_upcoming'] }];
};

G.race_recent = ({ f, rng }) => {
  const R = f.race_recent; if (!R) return [];
  const t = raceType(R.km, R.name), d = R.days_before;
  const v = { a: aOrAn(t), d: words(d) };
  const T = d <= 8
    ? [`Raced ${v.a} just {d} days earlier. Legs: fresh, or flambéed?`, `Only {d} days since racing ${v.a}. Riding the high, or still recovering on the sofa?`, `Fresh from ${v.a} {d} days before. Race-sharp, or race-shattered?`]
    : [`Raced ${v.a} {d} days earlier. Long enough to recover? Long enough to get lazy?`, `Ran ${v.a} {d} days before. The medal is still on the fridge.`, `${cap(v.a)} {d} days ago. Still dining out on it, apparently.`];
  return [{ cat: 'race_recent', family: 'day', features: ['raceNear'], text: fill(rng.pick(T), v), said: `had raced ${v.a} recently`, hint: d <= 8 ? 5 : 0, interest: d <= 8 ? 0.75 : 0.4, factKeys: ['race_recent'] }];
};

G.block = ({ f, rng }) => {
  const B = f.training_block; if (!B?.weeks_to) return [];
  const t = /marathon/i.test(B.target) && !/half/i.test(B.target) ? 'marathon' : /half/i.test(B.target) ? 'half marathon' : 'big race';
  const v = { w: words(B.weeks_to), a: aOrAn(t) };
  return [{ cat: 'block', family: 'fluff', features: [], text: fill(rng.pick(['In the middle of a training plan: roughly {w} weeks out from {a}. Today is either a test or a nuisance.', 'Officially in "{w} weeks to go" mode for {a}. Serious face on, or tired face on?']), v), said: `was in the middle of training for ${v.a}`, interest: 0.6, factKeys: ['training_block'] }];
};

G.cross = ({ f, rng }) => {
  const X = f.cross_training_7d || {};
  const entries = Object.entries(X);
  if (!entries.length) return [{ cat: 'cross', family: 'fluff', features: [], text: rng.pick(['No cross-training whatsoever that week. Pure, unfiltered runner.', 'Cross-training that week: none. Doesn\'t own a bike, a swimming cap or a yoga mat. Allegedly.']), said: 'did no cross-training whatsoever', interest: 0.15, factKeys: ['cross_training_7d'] }];
  const [s, { count, minutes }] = rng.pick(entries);
  const v = { n: words(count), Nw: cap(words(count)), m: minutes, times: count === 2 ? 'twice' : `${words(count)} times` };
  const T = {
    Ride: count > 1 ? ['{Nw} bike rides that week, {m} minutes in the saddle. Clearly can\'t afford the bus.', 'Cycled {times} that week, {m} minutes in total. Lycra may have been involved.'] : ['A {m}-minute bike ride that week. Commuting, or cross-training? Nobody knows.'],
    Swim: ['Swam for {m} minutes that week. Training, or just enjoys a nice bath?', '{m} minutes in the pool that week. Lungs of a dolphin, legs of a dolphin?'],
    WeightTraining: ['Lifted weights for {m} minutes that week. Mighty calves, or mighty sore?', '{m} minutes of weights that week. Building power, or just building a selfie collection?'],
    Yoga: ['{m} minutes of yoga that week. Supple as an eel, or just very calm about losing?', 'Did {m} minutes of yoga that week. Namaste ahead of the others, perhaps.'],
    AlpineSki: ['Went skiing that week. Après-ski legs on a parkrun start line? Brave.', 'Skied for {m} minutes that week. Thighs of steel, or thighs of jelly?'],
    Elliptical: ['{m} minutes on a cross-trainer that week. Nobody knows why. Least of all him.'],
    Workout: ['A {m}-minute "workout" that week. Unspecified. Suspicious.'],
  }[s] || ['Did {m} minutes of assorted cross-training that week. Busy boy.'];
  return [{ cat: 'cross', family: 'fluff', features: [], text: fill(rng.pick(T), v), said: 'had been cross-training', interest: 0.45, factKeys: ['cross_training_7d'] }];
};

export const CATEGORIES = Object.keys(G);
export const CATEGORY_LABEL = {
  week_km: 'Training', week_rel: 'Training', month_km: 'Training', consistency: 'Habits', long_run: 'Long run', hard_session: 'Hard yards',
  form: 'Form', rest: 'Rest', day_before: 'Day before', warmup: 'Warm-up', temp: 'Weather', wind: 'Weather', damp: 'Weather',
  race_soon: 'Race diary', race_recent: 'Race diary', block: 'Race diary', cross: 'Cross-training',
};

export const skeleton = (t) => t.replace(/-?\d+(\.\d+)?/g, '#').replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\b/gi, '#');

// One candidate per category, carrying several wordings of the SAME fact (re-rolled templates) for the style pass.
export function candidatesFor(p, field, rng, mem) {
  const ctx = { p, f: p.facts, field, rng };
  const byCat = {};
  for (const [cat, gen] of Object.entries(G)) {
    let primary = null;
    const variants = new Map();
    for (let k = 0; k < 7; k++) {
      let list = [];
      try { list = gen(ctx) || []; } catch { list = []; }
      if (!list.length) break;
      const c = rng.pick(list);
      if (!primary) primary = c;
      if (c.said !== primary.said || c.features.join() !== primary.features.join()) continue;
      variants.set(c.text, { text: c.text, skel: skeleton(c.text), style: /\?\s*$/.test(c.text) ? 'hedge' : 'fact' });
    }
    if (primary) {
      primary.skel = skeleton(primary.text);
      primary.variants = [...variants.values()];
      primary.factSentence = splitFact(primary.text).fact;
      byCat[cat] = primary;
    }
  }
  return byCat;
}
export const splitFact = (t) => { const m = t.match(/^(.+?[.!?])\s+(.+)$/); return m ? { fact: m[1], tail: m[2] } : { fact: t, tail: '' }; };

// ---------- clue styles: hedged "…or …?", plain fact + punchline, or a confident tipster opinion from Jeff or Pam ----------
const GROUP = { week_km: 'training', week_rel: 'training', month_km: 'training', consistency: 'training', long_run: 'training', hard_session: 'training',
  form: 'form', warmup: 'prep', day_before: 'prep', rest: 'prep', temp: 'weather', wind: 'weather', damp: 'weather',
  race_soon: 'diary', race_recent: 'diary', block: 'diary', cross: 'cross' };
const OPINIONS = {
  training: {
    pos: ['All those miles. He\'ll fly round.', 'Engine like a diesel lorry. Lump on.', 'That\'s a man in form. Easy money.', 'Proper graft in the bank. He\'s the one.', 'Fit as a flea. Back him.', 'The work is done. Now he collects.'],
    neg: ['Overcooked. He\'ll be walking the Hill.', 'Legs like lead. Lay him.', 'Not enough in the tank. Swerve.', 'Tired as a Monday. No chance.', 'Undercooked. Pass.', 'Wrong side of the training plan. Avoid.'] },
  form: {
    pos: ['Class is permanent. Back him.', 'Bounce-back time. Back him.', 'He\'s the one they all have to beat.', 'Read the form however you like. I like him.'],
    neg: ['Peaked too soon. Sell.', 'Due a bad one. Mark my words.', 'Can\'t keep it up. Lay him.', 'Form is a liar. Swerve.'] },
  prep: {
    pos: ['Perfect preparation. He\'s ready.', 'Fresh as a daisy. He\'ll go well.', 'Smart prep. Clever lad.', 'Rested and raring. Lump on.'],
    neg: ['Shocking preparation. Rusty as a gate.', 'Wrong prep. He\'ll pay for it on the Hill.', 'Did the wrong thing beforehand. Dead legs.', 'Amateur hour. No thanks.'] },
  weather: {
    pos: ['Loves these conditions. Born for it.', 'Perfect weather for him. Mark my words.', 'He thrives on a morning like this.', 'Weather\'s no excuse. He\'ll go.'],
    neg: ['Hates these conditions. Swerve.', 'Not a day for him. Trust me.', 'That weather will find him out.', 'Wrong weather, wrong runner.'] },
  diary: {
    pos: ['Race sharp. Peaking nicely. Back him.', 'Peaking at the right time.', 'Taper legs. Lethal.', 'Big-race fitness. Watch out.'],
    neg: ['Saving himself for the big one. Ignore.', 'Legs still in the last race. Avoid.', 'Mind\'s elsewhere. On the big race.', 'He\'ll be jogging it. Trust me.'] },
  cross: {
    pos: ['Cross-training! Strong as an ox.', 'All-round athlete. Dangerous.', 'Fitness is fitness. Back him.'],
    neg: ['Should\'ve been running instead.', 'Jack of all trades. Master of none.', 'Wrong sport, mate.'] },
};
const VOICE = {
  jeff: { pos: ['Jeff fancies him:', 'Jeff\'s banker of the day:', 'Jeff is all over this one:', 'Jeff can\'t see past him:'], neg: ['Jeff\'s not having it:', 'Jeff says swerve:', 'Jeff has gone off him:', 'Jeff is waving him away:'] },
  pam: { pos: ['Pam\'s quiet tip:', 'Pam, unusually, is keen:', 'Pam has a sneaky fancy:', 'Pam, against her better judgement:'], neg: ['Pam won\'t touch him:', 'Pam\'s verdict:', 'Pam is unconvinced:', 'Pam, with a sigh:'] },
};

// Give every assigned clue a style, balancing roughly thirds across the round, never repeating a wording in the
// round, and keeping a session cooldown on wordings used in the last few rounds.
export function styleClues(assigned, rng, mem, roundNumber, pickOpinion) {
  const counts = { hedge: 0, fact: 0, tipster: 0 };
  const slotCounts = {};
  const usedIntros = new Set(); // tipster openers never repeat within a round (so never twice on one runner)
  const tipVoices = {}; // runnerId -> voices already used on that runner
  const usedRound = new Set();
  const last = mem?.clueSkelRound || {};
  const cooling = (sk) => last[sk] != null && roundNumber - last[sk] <= 3;
  const all = rng.shuffle(Object.entries(assigned).flatMap(([rid, list]) => list.map((x) => Object.assign(x, { runnerId: rid }))));
  for (const x of all) {
    const c = x.clue;
    const opts = [];
    for (const v of c.variants || [{ text: c.text, skel: c.skel, style: /\?\s*$/.test(c.text) ? 'hedge' : 'fact' }]) {
      if (usedRound.has(v.skel)) continue;
      opts.push({ ...v, cool: cooling(v.skel) });
    }
    const tipSkel = `${skeleton(c.factSentence || splitFact(c.text).fact)}|tip`;
    if (GROUP[c.cat] && !usedRound.has(tipSkel)) opts.push({ style: 'tipster', skel: tipSkel, cool: false });
    if (!opts.length) { usedRound.add(c.skel); continue; }
    const sc = (slotCounts[x.slot] ||= { hedge: 0, fact: 0, tipster: 0 });
    const score = (o) => counts[o.style] + 1.2 * sc[o.style] + (o.cool ? 2.5 : 0) + rng.next() * 0.9;
    const o = opts.reduce((a, b) => (score(b) < score(a) ? b : a));
    counts[o.style]++; sc[o.style]++;
    usedRound.add(o.skel);
    if (mem) { mem.clueSkelRound ||= {}; mem.clueSkelRound[o.skel] = roundNumber; }
    let text = o.text;
    if (o.style === 'tipster') {
      const natural = c.signal < -1.5 ? 'pos' : c.signal > 1.5 ? 'neg' : rng.chance(0.5) ? 'pos' : 'neg';
      const lean = rng.chance(0.68) ? natural : natural === 'pos' ? 'neg' : 'pos';
      const rv = (tipVoices[x.runnerId] ||= new Set());
      let voice = rng.chance(0.55) ? 'jeff' : 'pam';
      if (rv.has(voice) && !rv.has(voice === 'jeff' ? 'pam' : 'jeff')) voice = voice === 'jeff' ? 'pam' : 'jeff';
      let pool = VOICE[voice][lean].filter((t) => !usedIntros.has(t));
      if (!pool.length) { voice = voice === 'jeff' ? 'pam' : 'jeff'; pool = VOICE[voice][lean].filter((t) => !usedIntros.has(t)); }
      if (!pool.length) pool = VOICE[voice][lean];
      const intro = rng.pick(pool);
      usedIntros.add(intro); rv.add(voice);
      const op = pickOpinion(`op_${GROUP[c.cat]}_${lean}`, OPINIONS[GROUP[c.cat]][lean]);
      text = `${c.factSentence || splitFact(c.text).fact} ${intro} "${op}"`;
      x.clue = { ...c, text, style: 'tipster', voice, lean: lean === 'pos' ? 1 : -1 };
    } else {
      x.clue = { ...c, text, style: o.style };
    }
  }
  return counts;
}

// Assign clues to slots: slots[0] = 'public', then one per player. Returns { [runnerId]: [{slot, clue}] }.
const PRICED = (model, c) => c.family === 'fitness' && c.features.some((k) => model.features.includes(k));
export function assignClues(entries, slots, rng, model, { boost, publicPricedBonus } = {}) {
  // entries: [{ runnerId, perf, cands: {cat: clue} }]
  const nSlots = slots.length;
  let best = null;
  for (let attempt = 0; attempt < 60; attempt++) {
    const usedSlotCat = slots.map(() => new Map());
    const catCount = new Map();
    const famSlot = slots.map(() => ({ fitness: 0, day: 0, fluff: 0 }));
    const res = {};
    let score = 0, ok = true;
    for (const e of rng.shuffle(entries)) {
      const chosen = [];
      const slotOrder = rng.shuffle(slots.map((_, i) => i));
      for (let si = 0; si < slotOrder.length; si++) {
        const s = slotOrder[si];
        const remaining = slotOrder.length - si;
        const hasFitness = chosen.some((c) => c.clue.family === 'fitness');
        let opts = Object.values(e.cands).filter((c) => !chosen.some((x) => x.clue.cat === c.cat || (c.group && x.clue.group === c.group) || (c.cat === 'rest' && x.clue.cat === 'day_before') || (c.cat === 'day_before' && x.clue.cat === 'rest')));
        if (!hasFitness && remaining === 1) { const fo = opts.filter((c) => c.family === 'fitness'); if (fo.length) opts = fo; }
        // same-family pairs (week_km + week_rel + month_km) are redundant on one runner
        opts = opts.filter((c) => !(['week_km', 'week_rel', 'month_km'].includes(c.cat) && chosen.some((x) => ['week_km', 'week_rel', 'month_km'].includes(x.clue.cat))) || opts.length <= 1);
        if (!opts.length) { ok = false; break; }
        const sc = (c) => c.interest + rng.next() * 0.7 + (boost?.(e, c) ?? 0) + (s === 0 && PRICED(model, c) ? (publicPricedBonus ?? 0.45) : 0)
          - 1.3 * (usedSlotCat[s].get(c.cat) || 0)
          - 0.45 * (catCount.get(c.cat) || 0)
          - (famSlot[s][c.family] >= 3 ? 0.8 : 0)
          + (c.family === 'fitness' && !hasFitness ? 0.25 : 0);
        const c = opts.reduce((a, b) => (sc(b) > sc(a) ? b : a));
        score += c.interest - 1.3 * (usedSlotCat[s].get(c.cat) || 0) - 0.45 * (catCount.get(c.cat) || 0);
        usedSlotCat[s].set(c.cat, (usedSlotCat[s].get(c.cat) || 0) + 1);
        catCount.set(c.cat, (catCount.get(c.cat) || 0) + 1);
        famSlot[s][c.family]++;
        chosen.push({ slot: s, clue: c });
      }
      if (!ok) break;
      res[e.runnerId] = chosen.sort((a, b) => a.slot - b.slot);
    }
    if (!ok) continue;
    // variety bonus: each slot should mix families (some red herrings by nature)
    for (const fs of famSlot) score += (fs.fitness > 0 ? 0.5 : 0) + ((fs.day + fs.fluff) > 0 ? 0.5 : 0);
    if (!best || score > best.score) best = { score, res };
  }
  if (!best) throw new Error('clue assignment failed');
  // attach model signal (seconds; negative = suggests faster)
  for (const e of entries) for (const x of best.res[e.runnerId]) {
    x.clue = { ...x.clue };
    x.clue.priced = Math.round(contribution(model, e.perf.date, x.clue.features) * 10) / 10;
    x.clue.signal = Math.round((x.clue.priced + (x.clue.hint || 0)) * 10) / 10;
  }
  return best.res;
}
