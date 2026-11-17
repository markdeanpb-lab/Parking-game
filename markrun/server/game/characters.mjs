// Random per-round characters: nickname, tagline, colour, look, personality, announcer intro. Independent of identity.
import { fill } from './text.mjs';

// "Full name|Short spoken name" (short defaults to the last word).
export const NICKNAMES = [
  'Sir Lapsalot|Sir Lapsalot', 'The Hackney Hurricane|Hurricane', 'Captain Calves|Captain Calves', 'The Seven Sisters Shuffler|Shuffler',
  'Duke of the Boating Lake|The Duke', 'Lord Lactic|Lord Lactic', 'The Manor House Missile|Missile', 'Barcode Barry|Barcode Barry',
  'The Stroud Green Streak|Streak', 'Flat White Fury|Flat White', 'The Holloway Hare|Hare', 'Baron von Bagel|The Baron',
  'Sir Strides-a-Lot|Sir Strides', 'The Finsbury Phantom|Phantom', 'Gilet Guevara|Gilet', 'The Crouch End Comet|Comet',
  'Uncle Negative Split|Uncle Split', 'The Tufnell Tornado|Tornado', 'Chafe Expectations|Chafe', 'The Sourdough Sprinter|Sourdough',
  'Admiral Ankle|The Admiral', 'The Hill Botherer|Botherer', 'Count Cadence|The Count', 'Mister Motivator|Motivator',
  'The Gel Pack Bandit|Bandit', 'Hamstring Harry|Hamstring Harry', 'The Arsenal Arrow|Arrow', 'Professor Pace|The Professor',
  'Lycra Lightning|Lightning', 'The Pigeon Botherer|Pigeon Botherer', 'Rapid Rupert|Rupert', 'The Oat Milk Outlaw|Outlaw',
  'Major Tom Tom|Major Tom', 'The Highbury Hammer|Hammer', 'Kipchoge\'s Cousin|The Cousin',
  'Turbo Trevor|Trevor', 'The Marshal Magnet|Magnet', 'Wee Willie Windmill|Windmill', 'The Midlife Crisis|Crisis',
  'Big Dave Energy|Big Dave', 'The Tote Bag Terror|Tote Bag', 'Sir Spikes Pickering|Spikes', 'The Last Ice Lolly|Ice Lolly',
  'Grandmaster Gait|Grandmaster', 'The Abandoned Pram|Pram', 'Doctor Doppler|The Doctor', 'The Plantain Express|Express',
  'Squirrel Whisperer|Whisperer', 'Captain Carb-Load|Captain Carbs', 'The Victoria Line|Victoria', 'Northern Line Delays|Delays',
  'The Heart-Rate Zone|Zone Five', 'The Bus Replacement|Bus Replacement', 'Mister Overpronation|Overpronation', 'The Big Toe|Big Toe',
  'Reggie Rapidfoot|Reggie', 'The Allotment Rocket|Rocket', 'Sid Vicious Circle|Sid', 'The Puddle Dodger|Dodger',
  'Brian Behind-You|Brian', 'The Iced Bun|Iced Bun',
  'Fast Eddie Flapjack|Flapjack', 'The Sock Tan Bandit|Sock Tan', 'Wally Wind-Assisted|Wally', 'Colonel Kilometre|The Colonel',
  'The Garmin Gremlin|Gremlin', 'The Strava Stallion|Stallion', 'Jammy Dodger|Jammy', 'The Golden Barcode|Golden Barcode',
  'Lord of the Long Run|Lord Long Run', 'Fartlek Freddie|Fartlek', 'Tempo Tim|Tempo Tim', 'The Splits Personality|Splits',
  'Sprinty McSprintface|Sprinty', 'The Penultimate Bend|Bendy', 'Gary Gazelle|Gazelle',
  'The Lido Lizard|Lizard', 'Pound Shop Bolt|Pound Shop Bolt', 'The Thursday Night Pint|Pint', 'Kevin from Accounts|Kevin',
  'The Volunteer Hugger|Hugger', 'Hi-Vis Hero|Hi-Vis', 'The Cone Collector|Cone Collector', 'The Funnel Fiend|Funnel Fiend',
  'Chip Timing Charlie|Charlie', 'The Tail Walker\'s Nemesis|Nemesis', 'Wobbly Bob|Wobbly Bob', 'The Shin Splint Kid|The Kid',
  'Lord Elgin Marbles|Lord Elgin', 'The Pret Prince|Pret Prince', 'Bagpuss Bolt|Bagpuss', 'The Duck Pond Dasher|Dasher',
  'The Hot Cross Bun|Bun', 'Simply the Breast-Stroke|Breast-Stroke', 'The Bin Lorry|Bin Lorry',
  'Snappy Pete|Snappy Pete', 'The Overtaking Lane|Overtaker', 'Rocket Ron|Rocket Ron', 'Spaghetti Legs|Spaghetti',
  'The Sunday Roast|Sunday Roast', 'Earl Grey Lightning|Earl Grey', 'The Wobbly Jelly|Jelly', 'Haringey Hotfoot|Hotfoot',
  'The Electric Kettle|Kettle', 'Monsieur Marmite|Marmite', 'The Commuter|Commuter', 'Pacemaker Pete|Pacemaker',
  'Mr Freeze-Frame|Freeze-Frame', 'The Long Socks|Long Socks', 'Prawn Cocktail Crisp|Prawn Cocktail', 'The Biscuit Tin|Biscuit Tin',
  'Steady Eddie Spaghetti|Steady Eddie', 'The Box Junction|Box Junction', 'Sir Kitkat Chunky|Sir Kitkat', 'The Spare Rib|Spare Rib',
  'Nigel Two-Laps|Nigel', 'The Swan Upper|Swan Upper', 'Peregrine Puffington|Puffington', 'The Postcode Lottery|Postcode',
  'Danger Dad|Danger Dad', 'The Gravy Train|Gravy Train', 'Little Chef|Little Chef', 'The Crumpet Crusader|Crusader',
  'Johnny Jaffa|Jaffa', 'The Late Bloomer|Bloomer', 'Sir Runs-a-Lot|Sir Runs', 'The Mince Pie|Mince Pie',
];

export const TAGLINES = [
  'Powered by flat whites and spite.', 'Runs on banana bread and unresolved grudges.', 'Has never once enjoyed a hill.',
  'Owns four Garmins. Trusts none of them.', 'Thinks a gel is a dessert.', 'Trained exclusively on stairs at Finsbury Park station.',
  'Overtakes on bends. Apologises on straights.', 'Once outran a Deliveroo cyclist. Mentions it daily.', 'Warm-up consists of a strong opinion.',
  'Believes the Hill is a personal insult.', 'Sponsored by nobody. Yet.', 'Carries a satsuma for emergencies.', 'Has a spreadsheet for his spreadsheets.',
  'Fuelled by a full English and blind optimism.', 'Claims his watch was on auto-pause.', 'Waves at every marshal. Twice.',
  'Has a tattoo of the course map. Allegedly.', 'Can\'t hear you, has AirPods in.', 'Runs like he\'s late for a train. Because he is.',
  'Has opinions on carbon plates.', 'Quietly confident. Loudly breathing.', 'Kit is colour-coordinated. Legs are not.', 'Here for the post-run pastry.',
  'Nobody knows his real name. Not even him.', 'Thinks Strava kudos are legal tender.', 'Trained by a disappointed pigeon.', 'All gas, some brakes.',
  'Has mastered the finish-funnel lean.', 'Swears the course is long.', 'Does a sprint finish even when alone.', 'Has a pre-race playlist of sea shanties.',
  'Shoes older than some marshals.', 'Last seen chasing an ice cream van.', 'Holds the unofficial record for high-fives.', 'Insists it\'s "just a training run".',
  'Will absolutely talk to you about cadence.', 'Has never stretched. Never will.', 'Thinks the tail walker is following him personally.',
  'Built for comfort, not for speed. Or so he says.', 'Brought his own cones.', 'Mostly elbows.', 'A dark horse. A small, wheezy horse.',
  'Taper expert. Training amateur.', 'Holds strong views about the café queue.', 'Runs with the grace of a dropped deckchair.',
];

export const PERSONALITIES = [
  { key: 'showboat', label: 'Showboat', intro: ['Lane {lane}: {name}. Waves to crowds that are not there.', 'Lane {lane}, {name}. Has already practised his podium pose.'] },
  { key: 'nervous', label: 'Bag of Nerves', intro: ['In lane {lane}, {name}. Has checked his laces nine times.', 'Lane {lane}: {name}. Visibly sweating, and we haven\'t started.'] },
  { key: 'stats', label: 'Data Nerd', intro: ['Lane {lane}, {name}. Has three watches on. All for science.', 'In lane {lane}, {name}. Knows his heart rate better than his postcode.'] },
  { key: 'cheerful', label: 'Ray of Sunshine', intro: ['Lane {lane}: {name}. Thanks every marshal by name.', 'In lane {lane}, {name}. Grinning like he\'s already won.'] },
  { key: 'grumpy', label: 'Grump', intro: ['Lane {lane}, {name}. Has complained about the weather. Whatever the weather.', 'In lane {lane}, {name}. Hasn\'t smiled since the Jubilee.'] },
  { key: 'mysterious', label: 'Enigma', intro: ['Lane {lane}: {name}. Says nothing. Reveals less.', 'In lane {lane}, {name}. Nobody saw him arrive.'] },
  { key: 'philosopher', label: 'Philosopher', intro: ['Lane {lane}, {name}. Believes the real race is the one within.', 'In lane {lane}, {name}. Asks: is a parkrun ever truly finished?'] },
  { key: 'dadjoke', label: 'Dad Joker', intro: ['Lane {lane}: {name}. Says he\'s "running late". He says it every week.', 'In lane {lane}, {name}. Has a pun ready for every kilometre.'] },
  { key: 'gearhead', label: 'Kit Obsessive', intro: ['Lane {lane}, {name}. His shoes cost more than my car.', 'In lane {lane}, {name}. Carbon plates, carbon gels, carbon-neutral attitude.'] },
  { key: 'veteran', label: 'Old Hand', intro: ['Lane {lane}: {name}. Has run this course more times than the squirrels.', 'In lane {lane}, {name}. Knows every root and pothole personally.'] },
  { key: 'chaotic', label: 'Agent of Chaos', intro: ['Lane {lane}, {name}. Strategy? Never heard of her.', 'In lane {lane}, {name}. Could win, could fall in the lake.'] },
  { key: 'competitive', label: 'Fierce Competitor', intro: ['Lane {lane}: {name}. Treats parkrun like the Olympic final.', 'In lane {lane}, {name}. Says "it\'s not a race". It is to him.'] },
  { key: 'laidback', label: 'Horizontal', intro: ['Lane {lane}, {name}. Arrived in sliders. Still in sliders.', 'In lane {lane}, {name}. Here mainly for the coffee afterwards.'] },
  { key: 'superstitious', label: 'Superstitious', intro: ['Lane {lane}: {name}. Lucky socks, unwashed since the spring.', 'In lane {lane}, {name}. Touched every tree on the way in. For luck.'] },
  { key: 'foodie', label: 'Snack Strategist', intro: ['Lane {lane}, {name}. Running purely towards brunch.', 'In lane {lane}, {name}. Carb-loaded on three croissants. As one does.'] },
  { key: 'diva', label: 'Diva', intro: ['Lane {lane}: {name}. Demanded a green room. There is no green room.', 'In lane {lane}, {name}. Will not be photographed from the left.'] },
];

// Bold palette (distinct hues); secondary is a high-contrast trim colour.
export const PALETTE = [
  { primary: '#ff3b3b', secondary: '#ffe066', name: 'Pillar-Box Red' },
  { primary: '#ff8c1a', secondary: '#1d1d6b', name: 'Tangerine' },
  { primary: '#ffd60a', secondary: '#1a1a1a', name: 'Custard' },
  { primary: '#7ed321', secondary: '#13315c', name: 'Lime' },
  { primary: '#12b886', secondary: '#ffffff', name: 'Emerald' },
  { primary: '#22c3e6', secondary: '#0b2545', name: 'Lido Blue' },
  { primary: '#2f5bea', secondary: '#ffffff', name: 'Royal Blue' },
  { primary: '#8b5cf6', secondary: '#fef08a', name: 'Violet' },
  { primary: '#ff4fa3', secondary: '#1a1a1a', name: 'Bubblegum' },
  { primary: '#8d5524', secondary: '#ffd166', name: 'Toffee' },
  { primary: '#1f2937', secondary: '#ff3b3b', name: 'Midnight' },
  { primary: '#f5f5f5', secondary: '#e63946', name: 'Snow White' },
  { primary: '#a3e635', secondary: '#6b21a8', name: 'Highlighter' },
  { primary: '#b91c1c', secondary: '#f8fafc', name: 'Claret' },
];

export const LOOK_OPTIONS = {
  build: ['stocky', 'lanky', 'compact', 'tall'],
  hat: [null, null, 'cap', 'beanie', 'headband', 'bucket', 'visor', 'bobble', 'sweatband', 'backwards-cap'],
  hair: ['short', 'bald', 'curly', 'mohawk', 'quiff', 'buzz', 'afro', 'mullet', 'bun', 'spiky', 'ponytail', 'swept'],
  accessory: [null, null, 'sunglasses', 'medal', 'headphones', 'wristbands', 'moustache', 'beard', 'bumbag', 'scarf', 'cape', 'bib'],
  skin: ['#ffdbc4', '#f1c6a5', '#e0ac69', '#c68642', '#8d5524', '#5c3a21'],
  face: ['grin', 'determined', 'smug', 'wide-eyed', 'gritted', 'cheeky', 'sleepy', 'tongue-out'],
};

export const ROUND_TITLES = [
  'The Boating Lake Derby', 'The Seven Sisters Stakes', 'The Oat Milk Invitational', 'The Hill Climb Handicap', 'The Flat White Classic',
  'The Manor House Gold Cup', 'The Duck Pond Dash', 'The Barcode Bonanza', 'The Tennis Court Trophy', 'The Café Queue Cup',
  'The Two-Lap Tussle', 'The Nine O\'Clock Stakes', 'The Funnel Finale', 'The Marshal\'s Plate', 'The Hi-Vis Handicap',
  'The Stroud Green Sprint', 'The Grand Finsbury Steeplechase (No Steeples)', 'The Avenue of Trees Trophy', 'The Bandstand Bash',
  'The Sourdough Sweepstakes', 'The Puddle Plate', 'The Squirrel Stakes', 'The Token Tussle', 'The Saturday Morning Shootout',
  'The Hackney Overspill Handicap', 'The Lido Classic', 'The Pigeon Cup', 'The Tail Walker Trophy', 'The Chip-Timing Challenge',
  'The Golden Gel Cup', 'The Running Track Rumble', 'The Great North London Grudge Match', 'The Wobbly Legs Invitational',
  'The Seven-Minute-Mile Memorial', 'The Bacon Roll Stakes', 'The Muddy Shins Derby', 'The Lactic Acid Test', 'The Kudos Cup',
  'The Overtaking Lane Open', 'The Biscuit Tin Classic',
];

function pickDistinct(rng, arr, n, usedSet) {
  const fresh = rng.shuffle(arr.filter((x) => !usedSet?.has(x)));
  const rest = rng.shuffle(arr.filter((x) => usedSet?.has(x)));
  return [...fresh, ...rest].slice(0, n);
}

export function makeCharacters(n, rng, mem) {
  const nicks = pickDistinct(rng, NICKNAMES, n, mem?.nicknames);
  const tags = pickDistinct(rng, TAGLINES, n, mem?.taglines);
  const cols = rng.shuffle(PALETTE).slice(0, n);
  const pers = pickDistinct(rng, PERSONALITIES, n, mem?.personalities);
  const builds = rng.shuffle([...LOOK_OPTIONS.build, ...LOOK_OPTIONS.build]).slice(0, n);
  const hairs = rng.shuffle(LOOK_OPTIONS.hair);
  return Array.from({ length: n }, (_, i) => {
    const [full, short] = nicks[i].split('|');
    mem?.nicknames?.add(nicks[i]); mem?.taglines?.add(tags[i]); mem?.personalities?.add(pers[i]);
    return {
      nickname: full,
      shortName: short || full.split(' ').at(-1),
      tagline: tags[i],
      colour: { ...cols[i] },
      look: {
        build: builds[i],
        hat: rng.pick(LOOK_OPTIONS.hat),
        hair: hairs[i % hairs.length],
        accessory: rng.pick(LOOK_OPTIONS.accessory),
        skin: rng.pick(LOOK_OPTIONS.skin),
        face: rng.pick(LOOK_OPTIONS.face),
      },
      personality: pers[i].label,
      personalityKey: pers[i].key,
      introTpl: rng.pick(pers[i].intro),
    };
  });
}

export function introLine(ch, lane) { return fill(ch.introTpl, { lane, name: ch.nickname }); }

export function roundTitle(rng, mem) {
  const t = pickDistinct(rng, ROUND_TITLES, 1, mem?.titles)[0];
  mem?.titles?.add(t);
  return t;
}
