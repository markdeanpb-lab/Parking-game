// The radio DJ: Dave "Double Yellow" Dobson, Snorbens FM 104.7.
// Reacts to what actually happens in the game. Speech uses the browser's speech synthesis where available;
// subtitles are always shown.
//
// How it decides what to say:
//  - Every game event maps to a bank of lines. Lines are templates: {var} is filled from the event, the game
//    state and the DJ's memory of this game; a line whose variables cannot all be filled is skipped, which is
//    how callbacks ("that's twice now...") only appear when they are true. [a|b] picks one alternative.
//    A '~' splits a line into a shouted part and a dry aside (spoken lower and slower).
//  - A line is never repeated within a game (a championship counts as one game), except in banks marked
//    `repeat` (countdown shouts). If a bank is used up, colour simply stays quiet.
//  - Priorities: 4 results (cuts anything), 3 critical (cuts colour/important, queues behind other criticals),
//    2 important (cuts colour, else waits briefly), 1 colour (only into silence, never near a big moment).
//    Queued lines go stale quickly, so the voice never lags behind the action.

export const DJ_NAME = "Dave 'Double Yellow' Dobson";
export const STATION = 'Snorbens FM 104.7';

const rnd = Math.random;
const pickFrom = (arr) => arr[Math.floor(rnd() * arr.length)];
const nameOf = (x) => (!x ? null : typeof x === 'string' ? x : x.isPlayer ? 'our contestant' : x.name || (x.p && x.p.name) || (x.comp && x.comp.name) || null);
const listNames = (a) => (a.length <= 1 ? a[0] || '' : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);
const times = (n) => (n === 1 ? 'once' : n === 2 ? 'twice' : n === 3 ? 'three times' : n === 4 ? 'four times' : n + ' times');
const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const STREET_KEY = { 'Church Street': 'church', 'Grange Street': 'grange', 'Dalton Street': 'dalton', 'Bernard Street': 'bernard', 'Catherine Street': 'catherine' };

// TTL (seconds a line may wait in the queue before it is dropped as stale), by priority
const TTL = { 1: 1.0, 2: 2.6, 3: 5, 4: 8 };
// minimum seconds between two lines from the same category
const COOL = {
  kerb: 5, kerbMany: 5, hitParked: 6, hitRival: 6, hitByRival: 6, hitExtra: 6, honk: 14, shove: 12, speeding: 20,
  wrongWay: 10, wrongWayReal: 10, cushion: 25, aiCrash: 25, stall: 10, aborted: 8, fooled: 6, nearMiss: 9, contested: 8,
  overshot: 12, longReverse: 14, yellow: 8, permitParked: 8, blockedParked: 8, struggle: 6, vanBlocked: 8, rivalParked: 1.5,
  banter: 5, observe: 5, parkColour: 3.5, rivalRobbed: 4,
};

// ------------------------------------------------------------------------------------------- the lines
const L = {
  // ----------------------------------------------------------------------------- openers
  gameStart: [
    "GOOD MORNING, ST ALBANS! Dave Double Yellow Dobson on Snorbens FM, it's eight forty-seven on a school day, and {cars} cars are about to fight over {bays} spaces. Somebody's parking in Harpenden.",
    "Welcome to PARKING PANIC, live from the terraces! {cars} drivers, {bays} spaces, and a council that's been out since six with the cones. Let's have it!",
    "This is Snorbens FM, Hertfordshire's third-best breakfast show! {cars} motorists, {bays} spaces, and the neighbourhood WhatsApp group is already on forty unread messages.",
    "GOOD MORNING! Average house round here: nine hundred grand. Average parking spaces that come with it: none. {cars} cars, {bays} spaces. GO ON THEN!",
    "It's PARKING PANIC on Snorbens FM! The residents' association has lodged a formal complaint about this programme. Brilliant. {cars} cars, {bays} spaces!",
  ],
  rushStart: [
    "It's RUSH HOUR on Snorbens FM! Extra traffic, shorter clocks, and {cars} drivers who all should have left ten minutes ago.",
    "RUSH HOUR! The Thameslink's delayed, the school gates shut in nine minutes, and there are {bays} spaces for {cars} cars. Good luck. You'll need it.",
    "Welcome to RUSH HOUR, where the clocks are shorter and the tempers are not. {cars} cars, {bays} spaces, and every SUV in Hertfordshire.",
  ],
  champStart1: [
    "Welcome to the PARKING CHAMPIONSHIP! {label}. {rivals} rivals, three heats, and one Golden Parking Permit. I polish it every morning.",
    "It's the CHAMPIONSHIP! {label}. Points carry over, grudges carry over, and the Golden Permit is in a glass case in my studio.",
  ],
  champStart2: [
    "{label}! Our contestant's through on {score} points, and Dazza's joined the field. He's got a van and he's not afraid to use it.",
    "Welcome back for {label}. Same streets, fewer friends, and Dazza's white van. {cars} cars, {bays} spaces.",
  ],
  champStart3: [
    "THE GRAND FINAL HEAT! All six rivals, extra traffic, and Tarquin's back. He never left. He just doesn't indicate.",
    "{label}! Arabella, Geoffrey, Dazza, Tarquin, Poppy and Sandra. And our contestant, on {score} points. This is the big one.",
  ],
  freeStart: [
    "Free Drive! No rivals, no clock, just you and the terraces. Practise your parallel parking, and try not to clip anybody's wing mirror. They will post about it.",
    "No pressure this time. Have a pootle round, find a bay, back it in. Think of it as a driving lesson without Poppy's instructor gripping the handle.",
  ],
  roundIntro: [
    "Round {round}! {cars} cars, {bays} spaces. The council's moved the cones again. They do it for fun. I've seen the minutes.",
    "On to round {round}. {cars} drivers, {bays} spaces, and a lot of people pretending they're not looking at each other.",
    { t: "Round {round}, and we've lost {lastOut}. Last seen walking to the station with a bag for life. {cars} remain.", w: 2 },
    { t: "Round {round}. {leader} leads on {leaderPts} points. Points mean prizes. Spaces mean everything. {bays} of them.", w: 1.5, when: (c) => !c.leaderIsPlayer },
    { t: "Round {round}, and our contestant is top of the table on {leaderPts}. {bays} spaces. Everybody's gunning for you now.", w: 1.5, when: (c) => c.leaderIsPlayer },
    "Round {round}. {cars} cars, {bays} spaces, and the cones have been moved by a council officer who has never once owned a car.",
    "Round {round}! The cones are out, the curtains are twitching, and there are {bays} spaces for {cars} cars.",
    "Round {round}. {bays} spaces. {cars} cars. And one very tired lollipop lady.",
    { t: "Round {round}, and we have a NEW LEADER: {newLeader}, on {newLeaderPts} points! Somebody's been practising on the quiet. {bays} spaces.", w: 4 },
    { t: "Round {round}, and our contestant goes into it TOP of the table on {youLead}! Window down, elbow out. {bays} spaces.", w: 4 },
    "Here we go, round {round}! {cars} still in it, {bays} spaces. Keep it clockwise, keep it civil, keep it under twenty.",
    { t: "Round {round}! I've just been told {cars} cars are left and the residents' association has called an emergency meeting. About me.", when: (c) => c.round >= 3 },
    { t: "Round {round}. {cars} cars, {bays} spaces. If you're just joining us: no, this isn't normal. Yes, it is every morning.", when: (c) => c.round >= 2 },
    { t: "Heat {heat}, round {round}. {cars} cars, {bays} spaces. The cones have seen things.", when: (c) => c.heat >= 2 },
    { t: "Round {round}! And {robber}'s still in this. The one who robbed our contestant on {robStreet}. I've not forgotten. Hertfordshire has not forgotten.", w: 3 },
    "Round {round}. {cars} cars, {bays} spaces. Somewhere on Dalton Street a man in a dressing gown is filming this for the WhatsApp group.",
    { t: "Round {round}. Down to {cars}: {aliveNames}. The tension on these terraces is thicker than a heritage-colour undercoat.", when: (c) => c.cars <= 5 },
    { t: "Round {round}! Just {cars} left. You could cut the atmosphere with a residents' permit.", when: (c) => c.cars <= 4 },
    { t: "Round {round}. Our contestant's on {score} points and still in it. {bays} spaces. One fewer than last time, because I'm cruel.", when: (c) => c.round >= 3 },
  ],
  finalIntro: [
    "THIS IS IT. THE FINAL. Our contestant versus {rival}. ONE space. I haven't been this excited since they resurfaced Catherine Street.",
    "Ladies and gentlemen, the GRAND FINAL. Two cars will circulate. One will park. The other will be standing on the Thameslink all the way to St Pancras.",
    "THE FINAL! Our contestant against {rivalTitle}, {rival}! One space, one Golden Parking Permit, and one very long walk for the loser.",
    { t: "THE FINAL! And it's {rival}, who robbed our contestant on {robStreet} in round {robRound}. You could not write this. One space!", w: 4 },
  ],
  eventTease: [
    "My producer's just handed me an envelope. I'm not allowed to open it until the music stops. ~ I've opened it.",
    "I'm told something's happening this round. I'm told very little, to be fair. I'm told where the kettle is.",
    "Word from the traffic desk: something's afoot. The traffic desk is Brian. Brian is a window.",
  ],
  leader: [
    { t: "Our contestant goes TOP of the leaderboard on {points} points! Window down, elbow out, absolutely insufferable!", when: (c) => c.isPlayer },
    { t: "Our contestant's top of the table on {points}! Don't let it go to your head. Let it go to the WhatsApp group.", when: (c) => c.isPlayer },
    { t: "New leader! {name} goes top on {points} points. Smug face on.", when: (c) => !c.isPlayer },
    { t: "{name}'s top of the table now, {points} points. Don't tell them. It'll go to their head.", when: (c) => !c.isPlayer },
  ],

  // ----------------------------------------------------------------------------- music phase
  musicStart: [
    "Snorbens FM, one oh four point seven! ~ You're stuck with us.",
    "You're listening to Snorbens FM. ~ Mainly because the dial's broken.",
    "Here's a classic. It's 'Permit Me' by Residents Only. Keep moving, and eyes on those cones!",
    "This one's 'Reversing Into You' by the Wing Mirrors. Clockwise, please. This is St Albans, not the Wild West.",
    "Here's 'Twenty's Plenty' by DJ Speed Cushion. Scout your spaces. Any coned bay could open when the music stops.",
    "Coming up, 'Bag For Life' by The Ocado Vans. Keep circulating, and no hovering by the cones.",
    "Here's 'Loft Conversion' by Planning Permission. It's a slow build, and it's been refused twice.",
    "Music on! This is 'Don't Stop Me Now'. ~ I will, though. When you least expect it.",
    "Snorbens FM! Playing the hits, and the occasional speed cushion.",
    "Here's 'Dropped Kerb' by The Driveways. Do not park on it. I mean the song. Also the kerb.",
    "This is 'Bin Day Blues' by The Wheelie Bins. Green, black and brown, and nobody knows which one's which.",
  ],
  musicStartFinal: [
    "The final, and here's a song for it. It's called 'One Space', and it's by me. Keep moving.",
    "Music for the final! A theme tune I had composed specially. It cost forty quid and a parking permit.",
    "Here we go. The music's on, the Golden Permit's on the line, and I am on my sixth coffee.",
  ],
  banterQueue: [
    "There's a queue of {count} behind {name}'s {carName}. You cannot overtake on these streets. People have tried. They're still in therapy.",
    "{name} is leading a procession of {count}. It's like a funeral cortege, but less cheerful.",
    "{count} cars stuck behind {name}. If this was the M25, it'd be on the news.",
  ],
  banterQueue_major: [
    "Geoffrey's doing a stately fourteen with {count} cars behind him. He's not slow. He's 'taking in the architecture'.",
  ],
  banterQueue_poppy: [
    "Poppy's L plates are leading a convoy of {count}. Her instructor has his eyes shut.",
  ],
  banterQueue_lorry: [
    "Behind the bin lorry: {count} cars, and the slow realisation that it stops at every house.",
  ],
  banterQueuePlayer: [
    "Our contestant's stuck behind {name}'s {carName}. Deep breaths. In through the nose.",
    "Nothing our contestant can do but sit behind {name} and think about their life choices.",
    "Our contestant's got a lovely view of {name}'s rear bumper. Memorise it. That's your life now.",
  ],
  banterQueuePlayer_lorry: [
    "Our contestant is stuck behind the bin lorry. Every house. Every bin. Every single one.",
  ],
  banterSlow: [
    "Our contestant's doing {mph} miles an hour. I've seen wheelie bins move faster on a windy day.",
    "{mph} miles an hour. Even Geoffrey thinks that's a bit much.",
    "Crawling along at {mph}. The cones won't come off any quicker if you stare at them.",
  ],
  banterLate: [
    "Any second now... any second... my finger is on the button.",
    "Don't relax. I could stop this at any moment. It's the only power I have.",
    "Getting twitchy? I am. Fourth coffee.",
    "Eyes on the cones. Eyes on the cones.",
    "Is it now? Is it now? ~ It might be now.",
    "My finger's hovering. Like a hatchback outside a primary school.",
    "Not long now. Keep it moving. Keep it scouting. I'm watching.",
  ],
  banterBluff: [
    { t: "I'm stopping it... NOW! ~ No I'm not. Sorry. Couldn't resist.", when: (c) => c.round >= 2 },
    { t: "Here it comes... here it comes... ~ That was a sneeze.", when: (c) => c.round >= 2 },
  ],
  banterGeneral: [
    "Fun fact: there are more cars on these four streets than there are spaces. That's not a fun fact. That's the problem.",
    "Lovely morning. Bit overcast. Perfect parking weather. No glare off the bonnets.",
    "Just had a text from Gill on Bernard Street. She says 'turn it down'. ~ No, Gill.",
    "If you're just joining us, it's musical chairs with cars. Yes, the council approved it. No, they didn't read it.",
    "A reminder that this is a twenty zone. Twenty. Not twenty-ish.",
    "House prices round here have gone up four per cent while I've been talking. Parking spaces have not.",
    "Traffic news. ~ It's bad. It's always bad. That was the traffic news.",
    "News just in: an Ocado van has been sighted. Nobody panic. ~ Well. Panic a bit.",
    "Somebody's just put a cone back out that the council took in. That's not the council. That's Sandra.",
  ],
  street_church: [
    "Our contestant's on Church Street. Cars half up the pavement, big trees overhead. Mind the pigeons. They've got aim.",
    "Church Street: so narrow the neighbours pass the sugar across it. Our contestant's squeezing through.",
    "Church Street, everybody. One-way since forever, and still somebody tries it every Tuesday.",
    "Over the speed table on Church Street. If you had a coffee in the cupholder, you haven't any more.",
  ],
  street_grange: [
    "Grange Street! Home of the vintage campervan. Two of them. Neither has moved since about 1994.",
    "Our contestant's on Grange Street, admiring the bay windows. The only bays round here that are always free.",
    "Grange Street. The north-west end's a dead end, by the way. Don't go up there. Nobody comes back.",
    "Grange Street, where every second car is a white SUV, and so is every first car.",
  ],
  street_dalton: [
    "Dalton Street, and the bins are out. Green, black and brown. Brown's garden waste. I looked it up. I've got a lot of time.",
    "Down Dalton Street. Lovely picket fences. Scaffolding on the left. Another loft extension. Where do they think the extra cars go? HERE.",
    "Dalton Street. A telegraph pole, a forecourt behind a fence, and absolutely no sympathy.",
    "Our contestant's on Dalton Street. Somewhere, a curtain is twitching.",
  ],
  street_bernard: [
    "Bernard Street! Bays down one side, double yellows down the other, and a corner shop that's seen it all.",
    "Bernard Street. One-way, little black bollards all along the kerb. Short, stubborn, undefeated.",
    "Our contestant's on Bernard Street. Lovely chimney pots. You'll be looking at those a lot if you don't find a space.",
  ],
  street_catherine: [
    "Catherine Street. Short, sweet, and recently resurfaced, which round here counts as a festival.",
  ],
  // what the rivals are up to, from the game state
  obsTailgate: [
    "{name}'s sitting about a foot off {victim}'s bumper on {street}. Bit close. Bit personal.",
    "{name} is right up {victim}'s exhaust on {street}. They'll be sharing a postcode in a minute.",
  ],
  obsTailgate_tarquin: [
    "Tarquin's BMW is so close to {victim} he could read their parking permit.",
    "Tarquin's tailgating {victim} down {street}. Indicators? Never heard of them.",
  ],
  obsTailgate_mum: [
    "Arabella's SUV is filling {victim}'s mirrors. All of them. Including the vanity mirror.",
  ],
  obsTailgate_dazza: [
    "Dazza's tailgating {victim}. He's not aggressive, he's just got a hundred and forty-seven drops.",
  ],
  obsCluster: [
    "{n} of them on {street} right now: {names}. If the music stops now, it's a bloodbath.",
    "Busy on {street}! {names}. That's not traffic, that's a gathering.",
  ],
  obsAhead: [
    "{name}'s {carName} is right in front of our contestant on {street}. Whoever's first in that queue gets first dibs.",
    "Our contestant's following {name} down {street}. When the music stops, {name} gets the first gap. That's the law of these streets.",
  ],
  obsBehind: [
    "And look who's in our contestant's mirror: {name}. Don't brake suddenly. ~ Or do. I'm not your dad.",
    "{name} is sitting right behind our contestant on {street}. Close enough to borrow a cup of sugar.",
  ],
  obsBehind_mum: [
    "Arabella's SUV is right behind our contestant. From her seat you're just a rumour.",
  ],
  obsBehind_tarquin: [
    "Tarquin's on our contestant's back bumper. He's flashing his lights. That's not a thank you.",
  ],
  obsHover: [
    "{name}'s slowed right down next to the cones on {street}. We've all seen that trick, {name}.",
  ],
  obsHover_sandra: [
    "Sandra's dawdling on {street}. She knows something. She always knows something.",
  ],
  obsHover_major: [
    "Geoffrey's slowed down on {street} to read the notice on the cones. All of it. Including the small print.",
  ],
  obsSlow_major: [
    "Geoffrey's doing a steady {mph}. Mirror, signal, mirror, mirror, mirror.",
  ],
  obsSlow_poppy: [
    "Poppy's at {mph} miles an hour, both hands at ten to two, knuckles white.",
  ],
  obsFast: [
    "{name}'s doing a good {mph} on {street}. It's a twenty zone. I'm sure we'll hear about it on the WhatsApp group.",
  ],
  obsLeader: [
    { t: "On the leaderboard: {leader} top with {leaderPts}. Our contestant's on {score}.", when: (c) => !c.leaderIsPlayer },
    { t: "Quick look at the table. {leader} leads on {leaderPts}. Our contestant, {score}. All to play for, as they say on proper radio.", when: (c) => !c.leaderIsPlayer },
    { t: "Our contestant tops the table on {leaderPts}. Don't get cocky. Cocky gets kerbed.", when: (c) => c.leaderIsPlayer },
    { t: "Our contestant's top of the pile on {leaderPts} points. I'm told {aliveRival} has noticed.", when: (c) => c.leaderIsPlayer },
  ],
  persona_mum: [
    "Arabella's on hands-free to the school. She's late. She's always late. She's been late since 2019.",
    "I'm told Arabella's SUV has never been off-road. It's never even been on a verge.",
    "Arabella's got two bags for life on the back seat, and a child she's fairly sure is hers.",
  ],
  persona_major: [
    "Geoffrey's indicating. He's not turning. He's just letting us know he could.",
    "Geoffrey has written to the council about these cones. Twice. In fountain pen.",
    "Geoffrey's saloon is so clean you could eat your dinner off it. He has. On a Sunday.",
  ],
  persona_dazza: [
    "Dazza's hazards are on. He's moving. They're just always on.",
    "Dazza's got a sausage roll on the dashboard and a parcel for number nineteen. Number nineteen will never see it.",
    "Dazza's on drop ninety-three. He's left the last one in a wheelie bin. 'Safe place'.",
  ],
  persona_tarquin: [
    "Tarquin's BMW. Personalised plate. Personalised attitude.",
    "Tarquin drives to the station every morning. It's four hundred metres. He's got a gym membership.",
    "Tarquin's indicators came as an optional extra. He didn't tick the box.",
  ],
  persona_poppy: [
    "Poppy's instructor has just pressed his imaginary brake. Again. It's not dual control. It's just a foot.",
    "Poppy's on her third lesson. Her instructor is on his third career.",
    "Poppy's checking her mirrors. All of them. Constantly. She hasn't looked forward since Grange Street.",
  ],
  persona_sandra: [
    "Sandra's lived round here thirty years. She knows every gap, every bin day, and what you did in 2011.",
    "Sandra runs the residents' WhatsApp group. Four hundred members. Zero chill.",
    "Sandra's just waved at a neighbour. That's not friendly. That's reconnaissance.",
  ],

  // ----------------------------------------------------------------------------- the music stops
  musicStop: [
    "PARK! PARK! PARK! The cones are OFF! Try {STREET}!",
    "THE MUSIC'S STOPPED! FIND A SPACE! {bays} spaces, {cars} cars! There's one on {STREET}!",
    "AND STOP! PARK! PARK! PARK! There's a gap on {STREET}! GO GO GO!",
    "PARK! PARK! PARK! {bays} SPACES, {cars} CARS! SOMEBODY'S WALKING HOME!",
    "STOP THE MUSIC! PARK! PARK! PARK! {STREET}! MOVE!",
    { t: "PARK! PARK! PARK! Only {bays} spaces now! {STREET}! DON'T THINK, PARK!", when: (c) => c.bays <= 3 },
    "PARK! PARK! PARK! GO! GO! GO! Try {STREET}!",
    "THAT'S IT! MUSIC OFF! PARK! PARK! PARK! {bays} spaces!",
    "PARK! PARK! PARK! The cones are coming off! Look on {STREET}!",
    "THE MUSIC'S STOPPED! EVERYBODY PARK! {STREET}! GO!",
    "PARK! PARK! PARK! {cars} cars, {bays} spaces, NO MERCY!",
    "PARK! PARK! PARK! Round {round}! {STREET}! Find a gap and get in it!",
    "OFF! IT'S OFF! PARK! PARK! PARK! {STREET} has a space!",
    "PARK! PARK! PARK! Mirror, signal, PANIC! {STREET}!",
  ],
  musicStopFake: [
    "PARK! PARK! PARK! There's a lovely big gap on {FAKE}! ~ Oh. No. That's somebody's driveway. Ignore me.",
    "THE MUSIC'S STOPPED! THERE'S ONE ON {FAKE}! ~ Wait. Dropped kerb. That's a driveway. Sorry.",
    "PARK! PARK! Go for {FAKE}! ~ Hang on, that's number twelve's driveway, and he's coming out in his dressing gown.",
    "PARK! PARK! PARK! Try {FAKE}! ~ Hmm. There's a gate. And a gnome. That might be a driveway.",
  ],
  musicStopFinal: [
    "PARK! PARK! PARK! TWO DRIVERS! ONE SPACE! IT'S ON {STREET}! THIS IS WHAT THEY'VE TRAINED FOR!",
    "THE MUSIC'S STOPPED! ONE SPACE! {STREET}! GO, GO, GO!",
    "PARK! PARK! PARK! ONE SPACE ON {STREET}! THE GOLDEN PERMIT IS RIGHT THERE!",
    "PARK! PARK! PARK! THIS IS FOR THE GOLDEN PERMIT! {STREET}! GO!",
    "PARK! PARK! PARK! {STREET}! ONE SPACE! FOR EVERYTHING!",
  ],
  musicStopPerfect: [
    "PARK! PARK! PARK! And look at THAT on {PERFECT}! A space you could land a helicopter in! EVERYBODY WANTS IT!",
    "THE MUSIC'S STOPPED! And there's the PERFECT SPOT on {PERFECT}! Massive! Level! GO!",
  ],

  // ----------------------------------------------------------------------------- random events
  binLorry: [
    "Oh no. It's bin day. There's a bin lorry on {street}, and it's stopping for every single wheelie bin.",
    "Bad news: the bin lorry has entered {street}. Recycling waits for no man. Neither does it overtake.",
    "Breaking news from {street}: the bin lorry. Two blokes, one lorry, and the patience of a saint required.",
  ],
  schoolRun: [
    "It's the SCHOOL RUN! {count} enormous SUVs have just joined us, each carrying one small child and a cello.",
    "Here comes the school run! {count} extra four-by-fours, none of which have ever seen a field.",
    "School run traffic, everybody! {count} more cars, all of them late, all of them blaming you.",
  ],
  deliveryVan: [
    "There's a DELIVERY VAN in the space on {street}! He says he'll be two minutes. He will not be two minutes.",
    "A van's sat in the space on {street}, hazards on. Hazards on means 'I'm allowed'. It does not.",
    "Oh, there's a delivery van in the bay on {street}! Wait for it to go, or go elsewhere!",
  ],
  vanGone: [
    "THE VAN'S GONE! That space on {STREET} is back in play!",
    "He's off! The van's left {STREET}! GO GO GO!",
    "The van's pulled out of {street}! Two minutes, he said. It was nearly two minutes.",
  ],
  permit: [
    { t: "HOLD ON! The council have made that space on {street} PERMIT HOLDERS ONLY! New one opening on {newStreet}! GO!", when: (c) => c.street !== c.newStreet },
    { t: "HOLD ON! That space on {street} is suddenly PERMIT HOLDERS ONLY! There's a fresh one further along {street}! GO!", when: (c) => c.street === c.newStreet },
    { t: "PLOT TWIST! {street} is now a residents' permit zone! Unless your council tax bill says {street}, get to {newStreet}!", when: (c) => c.street !== c.newStreet },
    { t: "PLOT TWIST! The council's just stuck a permit sign on that bay on {street}! Another one's opened up the road! MOVE!", when: (c) => c.street === c.newStreet },
    { t: "Oh, the council! They've just stuck a permit sign on {street}! There's a fresh space on {newStreet}! MOVE!", when: (c) => c.street !== c.newStreet },
  ],
  perfectSpot: [
    "The PERFECT SPOT has appeared on {street}! Look at the size of it! It's a stampede!",
  ],
  vanBlocked: [
    "You're blocking the van in! Back off and let him out, or NOBODY's getting that space!",
    "Let the van out! He can't leave if you're sat on his bumper!",
    "The van's trying to leave! Give him room! He's got a hundred more of these to do.",
  ],

  // ----------------------------------------------------------------------------- countdown
  tick20: { repeat: true, lines: [
    "Twenty seconds! {Hunters} still out there!",
    "Twenty seconds left, and {hunters} still looking!",
    "Twenty seconds!",
  ] },
  tick10: { repeat: true, lines: [
    "TEN SECONDS!",
    "Ten seconds! {Hunters} still looking!",
    "TEN! {HUNTERS}, MOVE!",
    "TEN SECONDS LEFT! Somebody's going home!",
  ] },
  tick5: { repeat: true, lines: ['FIVE!', 'FIVE SECONDS!', 'FIVE! FOUR!'] },
  lastSpace: [
    "ONE SPACE LEFT! It's on {street}, and I'm cutting the clock! {secs} SECONDS!",
    "LAST SPACE! {STREET}! {secs} seconds! Somebody's going home!",
    "THAT'S THE LAST ONE! {STREET}! I've cut the clock! {secs} SECONDS! GO!",
    { t: "ONE SPACE, {STREET}! {HUNTERS} STILL HUNTING! {secs} SECONDS!", w: 2 },
    "ONE LEFT! {STREET}! Clock's cut! {secs} seconds! Whoever wants it most!",
    "LAST SPACE IN ST ALBANS! Well, on {STREET}! {secs} SECONDS!",
    "THAT'S ONE SPACE! {STREET}! I'm cutting the clock to {secs}! Don't look at me like that!",
    { t: "ONE SPACE! {STREET}! {HUNTERS}! It's between you! {secs} SECONDS!", when: (c) => c.nHunt === 2 },
    "DOWN TO ONE! {STREET}! {secs} seconds on the clock and no manners left on the street!",
  ],
  finalClock: [
    "I'm cutting the clock! {secs} SECONDS FOR THE GOLDEN PERMIT!",
    "Clock's cut! {secs} seconds! One space, two cars, no prisoners!",
    "{secs} SECONDS! That's all you get! I've cut it! I'm drunk on power!",
  ],
  whistle: [
    "TIME! But they're still reversing in! I'm allowing it!",
    "ON THE WHISTLE! Half in! The stewards are muttering, but I'll allow it!",
  ],

  // ----------------------------------------------------------------------------- parking
  playerPerfect: [
    "OH, THAT IS FILTH! Dead straight on {street}, tucked right in! Somebody frame that parking!",
    "A SHOWROOM FINISH on {street}! I've got goosebumps. Actual goosebumps. And I'm in a cupboard!",
    { t: "LOOK AT THAT! Straight, central, tucked in! Even Geoffrey's taking notes!", when: (c) => c.alive.includes('Geoffrey') },
    "OH, THAT'S GORGEOUS! {street} will be talking about that for years. On the WhatsApp group. Positively, for once.",
    "PERFECTION on {street}! If parking was an Olympic sport, and I've written to them, that's a ten.",
    "That is a PROPER park! Not a millimetre wasted! {points} points!",
    { t: "FIRST IN, AND IT'S A SHOWROOM FINISH! On {street}! The rest of them can go home!", when: (c) => c.order === 1, w: 2 },
    { t: "SHOWROOM FINISH on {street}, with {secs} seconds to spare! Calm as you like!", when: (c) => c.secs >= 15 },
    "OH YES! Kerb-hugging, line-straight, SHOWROOM on {street}! I'm going to need a moment.",
    "LOOK AT IT! Parallel to the kerb, central in the bay! You could put that in a brochure for {street}!",
    "SHOWROOM! On {street}! The curtains are twitching, and for once it's admiration!",
    { t: "Another SHOWROOM FINISH! That's {perfects} today! Our contestant is a parking machine!", when: (c) => c.perfects >= 3, w: 2 },
    { t: "SHOWROOM FINISH! And after {kerbs} kerbs on the way, nobody saw that coming! Least of all the kerbs!", when: (c) => c.kerbs >= 3, w: 3 },
  ],
  playerTidy: [
    "Tidy! Very tidy. Our contestant is safe on {street}.",
    "That's in, and it's neat! Our contestant lives to park another day.",
    "Lovely! In on {street}, nice and tidy. {points} points.",
    "IN! On {street}! Tidy enough to keep the neighbours quiet. Well. Quieter.",
    { t: "FIRST IN! Our contestant's parked on {street} before anybody else has even found a gap!", when: (c) => c.order === 1, w: 3 },
  ],
  playerOk: [
    "It's in. It's not pretty, but it's in.",
    "Our contestant is parked on {street}. Let's not look too closely at how.",
    "That'll do! It's in the bay, mostly. The bay's fine with it.",
    "Parked! At an angle Geoffrey would describe as 'continental'.",
  ],
  playerAwful: [
    "That's not parked, that's ABANDONED. It counts, but the stewards have fined you for crimes against parallel parking.",
    "Our contestant has parked like they've popped into the chippy. Safe. Fined.",
    "Is that parked? The stewards say yes. The kerb says no. The kerb is a foot away.",
    "Safe! But the back end's in a different postcode. Points off!",
  ],
  playerParkedAny: { repeat: true, lines: [
    "[IN|PARKED|SAFE]! Our contestant's [in|parked up|tucked in] on {street}! [Lovely|Get in|Beautiful]!",
    "[Yes|YES|Oh yes]! [Safe|Parked] on {street}! [Round {round} survived|{points} points|Another round in the bag]!",
  ] },
  playerAwfulAny: { repeat: true, lines: [
    "[Parked|In]. [Sort of|Technically|Allegedly]. On {street}. [Fined|Points off], [obviously|naturally].",
  ] },
  playerAfterStruggle: [
    "IN! AT LAST! After {attempts} attempts! Get the bunting out on {street}!",
    "FINALLY! {attempts} goes, but it's IN! The residents are applauding! One of them sarcastically!",
  ],
  playerClutch: [
    "IN! WITH {secs} SECONDS LEFT! ON {STREET}! I CAN'T TAKE THIS!",
    "AT THE DEATH! OUR CONTESTANT, ON {STREET}! I need a lie down!",
    "{secs} SECONDS TO SPARE! OUR CONTESTANT IS IN! MY HEART!",
  ],
  rivalParked: [
    "{name}'s in on {street}!",
    "{name} has bagged a space on {street}. {left} left.",
    "That's {name} parked on {street}.",
    "{Tname}, {name}, is IN on {street}.",
    "And {name} takes {street}! {left} left!",
    "{name}, {street}, done.",
  ],
  rivalFirst: [
    "{name} is first in, on {street}! Not even breathing hard.",
    "First to park: {name}, on {street}! That's local knowledge, or luck, or both.",
  ],
  rivalOneLeft: [
    "{name}'s in on {street}! That leaves ONE space! ONE!",
    "{NAME} PARKS ON {STREET}! ONE SPACE LEFT!",
    "{name} grabs {street}! Just one space now!",
  ],
  rivalPerfect: [
    "{name} slides into {street} like butter. Textbook.",
    "Oh, that's BEAUTIFUL from {name} on {street}. Not a millimetre wasted.",
  ],
  rivalAwful: [
    "{name}'s {carName} is technically parked on {street}. Technically.",
    "{name} has abandoned the {carName} on {street}. It counts. It shouldn't, but it counts.",
  ],
  rivalParked_mum: [
    "Arabella's in on {street}. Two wheels on the pavement, one in a hedge. She's calling it parked.",
    "Arabella's SUV is in on {street}. The whole street's gone dark. It's blocking the sun.",
    "Arabella's parked on {street}! She'll be out in a minute to tell somebody else they're too close.",
  ],
  rivalParked_major: [
    "Geoffrey's in on {street}. Exactly six inches from the kerb. He's measured it. He carries a ruler.",
    "Geoffrey's parked on {street}. Of course it's perfect. He's been practising since decimalisation.",
    "And Geoffrey's in on {street}. He's getting out to check. He's satisfied. He's getting back in.",
  ],
  rivalParked_dazza: [
    "Dazza's dumped the van on {street}. Hazards on. Job done.",
    "Dazza's in on {street}! I say in. The van is in the general area of {street}.",
    "Dazza's parked on {street} and he's already out with a parcel. That's not a space, that's a drop.",
  ],
  rivalParked_tarquin: [
    "Tarquin's in on {street}. No indicator. No apology. No soul.",
    "Tarquin's BMW has taken {street}. He'll leave it there till Saturday and drive to the gym.",
    "Tarquin's parked on {street}. Slightly over the line, so nobody parks near the BMW.",
  ],
  rivalParked_poppy: [
    "POPPY'S DONE IT! She's parked on {street}! Her instructor is weeping! I'm weeping!",
    "Poppy's in on {street}! It took eleven goes, but she's in! Somebody give her a certificate!",
    "Poppy has parked on {street}, and she's put the handbrake on so hard she's pulled a muscle.",
  ],
  rivalParked_sandra: [
    "Sandra's in on {street}. Of course she is. She knew that bay was opening before the council did.",
    "Sandra's parked on {street}, right outside her friend's house. She'll pop in for a coffee. She'll stay three hours.",
    "Sandra's in on {street}. Thirty years on these streets. She could do it blindfolded. She may have.",
  ],
  rivalParkedRobber: [
    { t: "{name}'s in on {street}. Yes, {name}. The one who robbed our contestant in round {robRound}. Enjoy it. Karma has a long memory and no parking permit.", w: 1 },
  ],
  lastGasp: [
    "{NAME}'S IN WITH {secs} SECONDS LEFT! On {street}! At the absolute death!",
    "LAST GASP FROM {NAME}! {street}! {secs} seconds! Unbelievable!",
    "{name} squeezes in on {street} with {secs} seconds on the clock! They're not even breathing!",
  ],

  // ----------------------------------------------------------------------------- robberies and duels
  robbed: [
    "UNBELIEVABLE SCENES ON {STREET}! {name}'s {carName} has absolutely ROBBED our contestant!",
    "OH NO! {name}'s nicked it! Our contestant was RIGHT THERE on {street}!",
    "ROBBERY ON {STREET}! {name} just swooped in! Find another one, quick!",
    "DAYLIGHT ROBBERY on {street}! {name}, you absolute menace!",
    "NO! NO! NO! {name} has stolen it from right under our contestant's nose on {street}!",
    "{NAME}! Of all the spaces on {street}, {name} takes THAT one!",
    "STOLEN! On {street}! {name}, the residents' association will be hearing about this!",
  ],
  robbed_mum: ["ARABELLA'S TAKEN IT! She just drove the SUV straight in! Her kids are going to be on time and you are NOT!"],
  robbed_major: ["GEOFFREY'S TAKEN IT! He was so slow you never saw him coming! Nobody EVER sees Geoffrey coming!"],
  robbed_dazza: ["DAZZA'S HAD IT! Hazards on, van in, gone! That's a robbery with a delivery note!"],
  robbed_tarquin: ["TARQUIN! No indicator, no warning, just the BMW in YOUR space on {street}! I am FURIOUS!"],
  robbed_poppy: ["POPPY'S TAKEN IT! The LEARNER! The L PLATES! Her instructor's doing a lap of honour!"],
  robbed_sandra: ["SANDRA'S HAD IT! She knew! She always knows! Thirty years of local knowledge just mugged you on {street}!"],
  robbedAgain: [
    { t: "{NAME} AGAIN! That's {robTimes} now {name}'s robbed our contestant! Somebody ring the council!", when: (c) => c.robPlayerCount >= 2, w: 5 },
    { t: "{NAME}'S AT IT AGAIN! That's {robTimes} now {name}'s robbed someone{onStreetAgain}! Lock up your spaces!", when: (c) => c.robCount >= 2, w: 3 },
  ],
  stole: [
    "DAYLIGHT ROBBERY! Our contestant has pinched that right from under {name}'s nose!",
    "OH, that's CHEEKY! {name} was lining that up and our contestant's helped themselves!",
    "Our contestant's NICKED IT off {name}! I shouldn't cheer! I'm cheering!",
  ],
  stole_mum: ["You've taken Arabella's space! She's winding the window down! She's going to say 'excuse me' in THAT voice!"],
  stole_major: ["You've pinched Geoffrey's space! He's not angry. He's just disappointed. He'll write."],
  stole_tarquin: ["You've robbed TARQUIN! The BMW's been out-BMW'd! Revenge, served at twenty miles an hour!"],
  stole_dazza: ["You've nicked Dazza's spot! He's going to leave your next parcel in your wheelie bin."],
  stole_poppy: ["You took the learner's space! Poppy, I'm so sorry. ~ Our contestant isn't."],
  stole_sandra: ["You beat SANDRA to it! On her own street! The WhatsApp group will be absolutely ablaze!"],
  stoleAgain: [
    { t: "That's {stoleTimes} our contestant's robbed someone today! You're worse than Tarquin!", when: (c) => c.stoleCount >= 2 },
  ],
  rivalRobbed: [
    "OH! {thief} has just robbed {victim} on {street}! Swooped right in!",
    "{victim} was lining it up on {street} and {thief}'s just taken it! The cheek!",
    "Rival-on-rival crime on {street}! {thief} mugs off {victim}!",
    "Ooh, {victim} is NOT happy. {thief}'s taken that space on {street}. There'll be words. Passive-aggressive ones. On a note.",
  ],
  rivalRobbed_tarquin: ["Tarquin's just robbed {victim} on {street}. No indicator, obviously."],
  rivalRobbedAgain: [
    { t: "That's {robTimes} now {thief}'s robbed someone{onStreetAgain}! Lock up your spaces!", when: (c) => c.robCount >= 2, w: 5 },
  ],
  contested: [
    "{names} are all going for the same space on {street}! Somebody's going to blink!",
    "Two into one won't go! {names}, both heading for {street}!",
    "It's a standoff on {street}! {names}! Who wants it more?",
  ],
  contestedPlayer: [
    "Our contestant and {others} are going for the same bay on {street}! Who's got the nerve?",
    "It's you or {others} for that space on {street}! Don't blink!",
    "Duel on {street}! Our contestant versus {others}! There's one bay and no manners!",
  ],
  nearMiss: [
    "OOH! That was close! You could barely pass a parking ticket through that gap!",
    "Whoa! Inches! I've had closer shaves, but I use a cheap razor.",
    "Ooh! That was tighter than a Victorian terrace's hallway!",
  ],
  nearMissRival: [
    "Missed {name} by a whisker! I've seen more space between semi-detached houses!",
    "That close to {name}'s {carName}! {name}'s life just flashed before their eyes. It was mostly parking.",
    "OOH! Nearly took {name}'s wing mirror off! They're folding it in. Wise.",
  ],
  nearMiss_lorry: ["Ooh, nearly clipped the bin lorry! The bin men are staring. They've seen everything, and they're still staring."],
  nearMiss_traffic: ["That SUV missed you by a coat of paint! The school run waits for no one."],
  nearMissAgain: [
    { t: "Another near miss! That's {nearCount}! Nerves of steel, or no mirrors. One of the two.", when: (c) => c.nearCount >= 3, w: 3 },
  ],
  overshot: [
    "You've gone PAST IT! The space on {street} is behind you!",
    "Overshot! The bay's behind you on {street}! IT'S BEHIND YOU! It's like a pantomime!",
    "Missed it! Drove right past the space on {street}! Back up!",
    "That was your space! On {street}! You waved at it as you went past!",
    "Past it again on {street}! It's not a drive-through!",
    "Sailed straight past the bay on {street}! The residents are pointing at it! All of them!",
  ],
  longReverse: [
    "Our contestant's been reversing for {seconds} seconds. That's not parking, that's a commute.",
    "Still reversing! Beep beep beep! They can hear this in Harpenden.",
    "Our contestant's reversing the length of the street. The Highway Code is lying on the floor, weeping.",
  ],
  photoFinish: [
    "PHOTO FINISH! {winner} beats {loser} by a bumper! The stewards are checking the dashcam!",
    "IT'S A PHOTO FINISH! {winner} by a nose! {loser} was THAT close!",
  ],

  // ----------------------------------------------------------------------------- driving
  struggle: [
    "That's attempt number {count} at the same parallel park. At this point, I'd get the bus.",
    "Attempt {count}. Back a bit. Forward a bit. I've seen container ships dock faster.",
    "Attempt {count}! The whole street's come out to watch. Someone's brought a flask.",
    "Attempt {count}! Number twenty-three is filming it for the WhatsApp group. Crying-laughing emoji.",
    "{count} goes! A resident's offering to guide you in. He's waving his arms like he's landing a plane.",
    { t: "Attempt {count}. I've made a tea, had a biscuit and read the council's entire parking strategy.", when: (c) => c.count >= 8 },
  ],
  kerb: [
    "Kerb! That kerb's been there since eighteen eighty-seven. It's not moving for you.",
    "Ooh, that's a kerbing. Somewhere, a tyre fitter has just put a deposit on a boat.",
    "Clonk! That's the kerb, and that's another alloy wheel heading for a refurb.",
    "Kerb strike! The wheel's fine. ~ The wheel is not fine.",
  ],
  kerbMany: [
    "That's kerb number {kerbs}! Those alloys now have the texture of a digestive biscuit.",
    "Kerb {kerbs}! Is our contestant parking or sanding?",
    "{kerbs} kerbs and counting! The council's going to start invoicing.",
    "Kerb {kerbs}. I've stopped saying 'ooh'. I'm just counting now.",
    { t: "Kerb {kerbs}. Our contestant isn't driving down this street, they're reading it in Braille.", when: (c) => c.kerbs >= 7 },
  ],
  hitParked: [
    "That was a resident's car! It's fine. They'll just leave a passive-aggressive note.",
    "CONTACT with a parked car! That'll be on the neighbourhood WhatsApp group within the minute.",
    "Bit of a nudge there. Round here we call that parking by ear.",
    "Oh, you've tapped a parked car! Someone's coming out in slippers!",
    "Ooh, that's somebody's second car. Their pride and joy. Well, their second pride and joy.",
  ],
  hitRival: [
    "Contact with {name}! Swapping paint AND insurance details!",
    "Our contestant's gone into the back of {name}! Whose fault was that? Theirs. It was theirs.",
    "Bump! Into {name}'s {carName}! That's going to need a strongly worded email.",
  ],
  hitRival_tarquin: ["You've dinged the BMW! Tarquin's photographing the scratch. He's ringing his solicitor. He's ringing his dad."],
  hitRival_major: ["You've nudged Geoffrey! He's very calmly writing your registration down in a small notebook."],
  hitRival_mum: ["You've touched Arabella's SUV! You'll be hearing from her husband. He's 'in insurance'."],
  hitByRival: [
    "{name} has just driven into our contestant! Absolutely no apology. Classic.",
    "Ooh, {name}'s rammed us! And they're acting like WE did it!",
  ],
  hitByRival_mum: ["Arabella's SUV just nudged you. She didn't even notice. She can't see anything shorter than a lamppost."],
  hitByRival_tarquin: ["Tarquin's just driven into you! He's gesturing. That's not an apology."],
  hitExtra_lorry: ["You've bumped the bin lorry! The bin men are not impressed. They've seen everything, and they're still not impressed."],
  hitExtra_traffic: ["Bump with the school-run traffic! There's a child in the back of that car giving you a thumbs down."],
  hitExtra_van: ["You've clipped the delivery van! He's left you a card. 'Sorry we missed you.'"],
  shove: [
    "{name} is PHYSICALLY SHUNTING our contestant down the road!",
    "{name}'s run out of patience and is using the {carName} as a snowplough!",
    "{name}'s pushing us along! That's not driving, that's curling!",
  ],
  shove_mum: ["Arabella's shoving you up the road with the SUV! She's late for drop-off and you are in the WAY!"],
  honkPlayer: [
    "{name}'s on the horn! In St Albans! Before nine! Bold.",
    "A long, meaningful beep from {name}. I think we all know what that meant.",
    "{name} honks. In this postcode, that's basically a declaration of war.",
    "Parp! {name} is unhappy. Somewhere, a residents' association minute is being drafted.",
  ],
  honkPlayer_major: ["Geoffrey's tooted. Very politely. Like a cough at a funeral."],
  honkPlayer_poppy: ["Poppy's honked by accident. She's apologising to the windscreen."],
  wrongWayReal: [
    "That is a ONE-WAY street! {street}'s been one-way for decades! There are signs! Big blue ones!",
    "WRONG WAY up {street}! Points off, and a stern letter from the council!",
    "Against the arrows on {street}! The blue sign is not a suggestion!",
  ],
  wrongWay: [
    "Our contestant's going against the flow on {street}. Brave. Stupid, but brave.",
    "Everybody else is going clockwise. Our contestant has other ideas.",
    "Wrong way round on {street}! It's musical chairs, not dodgems!",
  ],
  speeding: [
    "{mph} in a twenty zone! This is {street}, not Silverstone!",
    "{mph} miles an hour past the terraces! The community speed watch need a bigger clipboard!",
    "It's a TWENTY zone! You're doing {mph}! Somewhere a crossing patrol is having palpitations!",
  ],
  loiter1: [
    "Keep moving, please! No hovering next to the cones. We've all seen that trick.",
    "Oi! Circulate! This is musical chairs, not a picnic!",
    "No loitering! You're sat next to that cone like it owes you money.",
  ],
  loiter2: [
    "Right, the stewards have had enough. LOITERING PENALTY! Your engine cuts out when the music stops!",
    "That's it! Loitering penalty! The engine gets cut when the music stops. Should've kept moving!",
  ],
  falseStart: [
    "And there's the penalty! Engine's cut! That's what you get for hovering!",
    "Engine off! Two seconds in the sin bin for loitering! Watch them all go!",
  ],
  driveway: [
    "NO! That's a DRIVEWAY! Number twelve's just come out in his dressing gown, and he is FURIOUS!",
    "You can't park across a driveway! Well. You can. But not in MY competition!",
    "That's a dropped kerb! That's a DRIVEWAY! A man is holding a mug and staring at you!",
    "DRIVEWAY! On {street}! A woman's at the window holding up a sign that just says 'NO'.",
  ],
  yellow: [
    "DOUBLE YELLOWS! That's not a space, that's a donation to the council!",
    "Our contestant's stopped on double yellows on {street}. I can hear the traffic warden's moped.",
    "Yellow lines! Two of them! That means no, twice!",
  ],
  permitParked: [
    "That bay's permit holders only now! Unless you've got proof of address on {street}, keep looking!",
    "Permit only! You need a council permit, two utility bills and a character reference!",
    "That's a permit bay! The permit costs more than your car and you haven't got one!",
  ],
  blockedParked: [
    "There's a van in it! You can't park IN a van!",
    "That space has a van in it. Physics says no.",
  ],
  fooled: [
    "{name} tried to park across somebody's driveway on {street}. Bless. We've all been there.",
    "{name} has fallen for my fake tip! Parked across a driveway on {street}! Sorry, {name}!",
  ],
  fooled_poppy: ["Poppy believed me and parked across a driveway! Poppy, love, I'm a radio DJ. Never believe a radio DJ."],
  stall: [
    "{name} has stalled. Again. There's a queue building you could see from the Abbey.",
    "And {name}'s stalled it. Clutch in. Clutch IN.",
  ],
  stall_poppy: [
    "Poppy's stalled! Her instructor's doing his breathing exercises. In for four. Hold for seven.",
    "Poppy's stalled it. She's turning it off and on again. That's not how cars work, Poppy. ~ Although it worked.",
  ],
  stallAgain: [
    { t: "That's stall number {stalls} from {name}! Her instructor has started billing by the stall.", when: (c) => c.key === 'poppy' && c.stalls >= 2, w: 3 },
    { t: "Stall number {stalls} for {name}. I've started a tally on the studio window.", when: (c) => c.stalls >= 3, w: 3 },
  ],
  aborted: [
    "{name} has bottled it and pulled back out! That space on {street} is still open!",
    "{name}'s given up on {street}! It's back on the market. Round here that means it'll go over the asking price.",
    "{name} is pulling out of {street}! Too tight! Space is up for grabs!",
  ],
  cushion: [
    "Speed cushion! That's what they're there for!",
    "Mind the cushions! That suspension isn't going to thank you.",
  ],
  aiCrash: [
    "There's been a coming-together further up the road! Wing mirrors everywhere!",
    "Crunch! Somebody's had a bump up the road. I can hear the insurance forms filling themselves in.",
    "Bit of a shunt between the rivals up there. Two people exchanging details, and looks.",
  ],

  // ----------------------------------------------------------------------------- park phase colour
  man_mum: ["Arabella's reversing the SUV into {street}. Four cameras, six sensors, and she's still using the Force."],
  man_major: [
    "Geoffrey's reversing into {street}. Mirror. Signal. Manoeuvre. ~ Pipe.",
    "Geoffrey's going in on {street}. Slowly. Beautifully. Possibly by Thursday.",
  ],
  man_dazza: ["Dazza's going into {street} like he's delivering a parcel. Fast, and with no regard for the recipient."],
  man_tarquin: ["Tarquin's swinging into {street}. No indicator, obviously. Why start now?"],
  man_poppy: [
    "Poppy's attempting {street}. Her instructor has closed his eyes. I'm closing mine.",
    "Poppy's in the gap on {street}. Forward. Back. Forward. Her instructor's reaching for the Rescue Remedy.",
  ],
  man_sandra: ["Sandra's slotting into {street}. She's done this one before. About four thousand times."],
  man: ["{name}'s going in on {street}!", "{name}'s reversing in on {street}! Beep, beep, beep!"],
  parkCount: [
    { t: "{free} spaces left, {nHunt} cars still looking. Not all of them are going to make it, and frankly, that's showbiz.", when: (c) => c.free >= 2 },
    { t: "{free} spaces, {nHunt} cars. Even I can do that maths, and I failed GCSE.", when: (c) => c.free >= 2 },
    { t: "Still {free} spaces out there. {Hunters}, I'm looking at you.", when: (c) => c.free >= 2 },
  ],
  ring: [
    "Follow the yellow ring! It's on {ringStreet}!",
    "That space on {ringStreet}, that's your best bet! GO!",
    "The ring's on {ringStreet}! I'm not saying go there. ~ Go there.",
  ],
  playerSafe: [
    "Our contestant's safe, so we can all sit back and enjoy watching everybody else suffer.",
    "Safe and parked. Kettle on. Let's watch {hunters} panic.",
    "Our contestant's in. Now it's {hunters} fighting for scraps. Lovely.",
  ],
  seeking: [
    "{name}'s bearing down on {street}!",
    "{name}'s gunning for {street}. The {carName} means business.",
    "{name}'s heading for {street} at a speed the residents will be discussing later.",
  ],

  // ----------------------------------------------------------------------------- round results
  victory: [
    "THEY'VE DONE IT! THE GREATEST PARKING PERFORMANCE HERTFORDSHIRE HAS EVER SEEN! THE GOLDEN PARKING PERMIT IS THEIRS!",
    "CHAMPION! Our contestant has out-parked the lot of them! Somebody get the Mayor on the phone!",
    "THE GOLDEN PERMIT! Our contestant WINS! {loser} will be parking in the multi-storey until the end of time!",
    "IT'S OVER! OUR CONTESTANT WINS! I've just hugged my producer. She did not want that.",
  ],
  victoryPhoto: [
    "BY A BUMPER! A PHOTO FINISH! Our contestant beats {loser} to the last space in St Albans! THE GOLDEN PERMIT!",
  ],
  eliminatedPlayer: [
    "Devastating. No parking space. No dignity. Just another morning in St Albans.",
    "And that's it for our contestant. Nothing left to do but circle the block until the end of time.",
    "Our contestant is OUT. They'll be parking in Harpenden and getting the train in.",
    "OUT! Our contestant will have to park at the station and walk. Up the hill. In the drizzle.",
    "That's the end for our contestant. Leave the car, grab a bag for life, and walk with your head held high. Ish.",
  ],
  playerOutRobbed: [
    { t: "OUT! And it all went wrong when {robber} robbed them on {robStreet}. I'll never forgive {robber}. Never.", w: 3 },
  ],
  playerOutFinal: [
    "{winner} WINS IT! Our contestant came SO close. Second place. Second is just first loser with a longer walk.",
    "It's {winner}! {winner} takes the Golden Permit! Our contestant will be getting the bus. Not even the Thameslink. The bus.",
  ],
  playerOutPhoto: [
    "PHOTO FINISH! It's {winner} by a bumper! Our contestant, beaten to the Golden Permit by inches!",
  ],
  eliminatedRival: [
    "{name} is OUT! No space! That's a long walk back from the station car park.",
    "It's all over for {name}. Gutted. Absolutely gutted.",
    "{name}'s OUT! Round {round} claims another victim!",
    "{name} is OUT, and our contestant is SAFE!",
    "{name} is OUT! Round {round}, and the {carName} goes home!",
    "And {name}'s OUT! The {carName} will be on a verge in Harpenden by lunchtime.",
    "{name}: OUT. No space, no permit, no dignity.",
    "OUT goes {name}! I'll miss them. ~ I won't. But I'll say I will.",
    "{name} is OUT, and the WhatsApp group is already discussing it. Mostly in capitals.",
    { t: "{name} is OUT again! That's {outTimes} this championship! Some people never learn!", when: (c) => c.outCount >= 2, w: 4 },
  ],
  out_mum: [
    "ARABELLA'S OUT! The kids are going to be late! She's already on the phone to the school!",
    "Arabella is OUT! She'll be double-parked outside the school gates in four minutes. It's what she does best.",
  ],
  out_major: [
    "Geoffrey's OUT! The perfect parker, undone by being slower than continental drift. He'll be writing to the paper.",
    "Geoffrey is OUT! He's taking it well. He's taking it very well. He's sitting very, very still.",
  ],
  out_dazza: [
    "DAZZA'S OUT! He'll just leave the van in the road with the hazards on. He was going to anyway.",
    "Dazza is OUT! A hundred and forty-seven drops and nowhere to park. To be fair, that's every day for Dazza.",
  ],
  out_tarquin: [
    "TARQUIN'S OUT! The BMW is OUT! I'm a professional, but YES! YES!",
    "Tarquin is OUT! He's not indicating his disappointment, either.",
  ],
  out_poppy: [
    "Poppy's OUT! Bless her. Her instructor says she did ever so well. Her instructor is lying.",
    "Poppy is OUT! But she didn't stall that time, and I think we should all celebrate that.",
  ],
  out_sandra: [
    "SANDRA'S OUT! Thirty years of local knowledge, beaten by a cone! The WhatsApp group is in MOURNING!",
    "Sandra is OUT! She's drafting a message to the residents' group about it. It's going to be long.",
  ],
  outKarma: [
    { t: "{NAME} IS OUT! KARMA! That's for {robStreet}, {name}! That's for {robStreet}!", w: 6 },
  ],
  eliminatedMany: [
    "{names}: ALL OUT! It's CARNAGE out there!",
    "Two at once! {names}, BOTH OUT! It's a double booking!",
    "{names}, OUT! The station car park is filling up nicely!",
    "{names} are OUT! Multiple casualties on the terraces!",
    "Gone! {names}! Left on the platform like the last Thameslink's just pulled out!",
  ],
  champNext: [
    "That's the heat won! But don't get comfortable. The next one's harder, and the spaces are no bigger.",
    "Heat won! On to the next. Same streets. Nastier rivals. Less patience.",
  ],
  champion: [
    "CHAMPION OF THE WHOLE CHAMPIONSHIP! The Golden Parking Permit is yours! Valid for one space, one day, at the council's discretion!",
  ],
  freePark: [],
  freePerfect: ["Now THAT is how you park. Do it like that when it matters.", "Showroom! Frame it. Then do it again with Tarquin up your bumper."],
  freeTidy: ["Nice and tidy. Keep practising.", "Tidy. Geoffrey would nod. Not smile. Nod."],
  freeOk: ["It's in. Bit wonky. Have another go.", "That'll do. It won't do in the final, mind."],
  freeAwful: ["I've seen better parking outside a kebab shop at two in the morning. Again!", "That's not parked, that's been left. Again!"],
};

// ------------------------------------------------------------------------------------------- the DJ
export class DJ {
  constructor(onSubtitle) {
    this.onSubtitle = onSubtitle || (() => {});
    this.queue = [];
    this.current = null;
    this.voiceOn = true;
    this.voice = null;
    this.clock = 0;
    this.lastEnd = -10;
    this.holdUntil = 0;
    this.frantic = false;
    this.subT = 0;
    this.sfx = null;               // optional AudioEngine: crowd reactions and stings
    this.log = null;               // optional array: transcript of what was (and wasn't) said, for tests
    this.game = null;
    this.used = new Set();
    this.usedAt = new Map();
    this.catAt = {};
    this.speakToken = 0;
    this.resetMemory();
    this.synth = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null;
    if (this.synth) {
      const load = () => { this.voice = this.pickVoice(); };
      load();
      if (this.synth.addEventListener) this.synth.addEventListener('voiceschanged', load);
      else this.synth.onvoiceschanged = load;
    }
  }

  resetMemory() {
    this.mem = {
      robs: [], steals: 0, stalls: {}, nearMiss: 0, outs: [], leader: null, struggleRound: 0,
      roundRob: null, perfectStreet: null, stash: [], photo: null, endSaid: false, parkedAt: {},
    };
  }

  // ------------------------------------------------------------ voice
  pickVoice() {
    const vs = this.synth.getVoices() || [];
    const score = (v) => {
      let s = 0;
      if (/en[-_]GB/i.test(v.lang)) s += 100; else if (/^en/i.test(v.lang)) s += 10; else return -1;
      if (/natural|neural|online|premium|enhanced/i.test(v.name)) s += 30;
      if (/\b(Ryan|Thomas|George|Arthur|Daniel|Oliver|Harry|Alfie|Elliot|Noah)\b/i.test(v.name)) s += 25;
      if (/UK English Male/i.test(v.name)) s += 22;
      if (/\bmale\b/i.test(v.name) && !/female/i.test(v.name)) s += 10;
      if (/female|Libby|Sonia|Maisie|Hazel|Susan|Kate|Serena|Stephanie|Martha|Bella/i.test(v.name)) s -= 8;
      if (/compact|eloquence|novelty|whisper|bells|bad news|jester|zarvox|trinoids/i.test(v.name)) s -= 60;
      return s;
    };
    let best = null, bs = -1;
    for (const v of vs) { const s = score(v); if (s > bs) { bs = s; best = v; } }
    return best;
  }
  get speaking() { return !!this.current; }

  // ------------------------------------------------------------ line selection
  bank(key) {
    const b = L[key];
    if (!b) return null;
    return Array.isArray(b) ? { lines: b, repeat: false } : b;
  }
  has(key) { const b = this.bank(key); return !!(b && b.lines.length); }

  fill(tpl, c) {
    let ok = true;
    let s = tpl.replace(/\[([^\[\]]+)\]/g, (_, alts) => pickFrom(alts.split('|')));
    s = s.replace(/\{(\w+)\}/g, (_, k) => {
      let real = k in c ? k : Object.keys(c).find((x) => x.toLowerCase() === k.toLowerCase());
      let v = real === undefined ? undefined : c[real];
      if (v === undefined || v === null || v === '' || v === false || (typeof v === 'number' && !Number.isFinite(v))) { ok = false; return ''; }
      v = String(v);
      if (k.length > 1 && k === k.toUpperCase()) return v.toUpperCase();
      if (k[0] !== k[0].toLowerCase() && real[0] === real[0].toLowerCase()) return cap(v);
      return v;
    });
    return ok ? s : null;
  }

  /** Choose a line from a bank, honouring the no-repeat rule. Returns {id, text} or null. */
  choose(key, c, allowRepeat = false) {
    const bank = this.bank(key);
    const repeat = bank && (bank.repeat || allowRepeat);
    if (!bank) return null;
    const lastFirst = this.lastText ? this.lastText.split(/\s+/)[0].toUpperCase() : '';
    const cands = [];
    for (const raw of bank.lines) {
      const e = typeof raw === 'string' ? { t: raw } : raw;
      if (e.when) { let pass = false; try { pass = e.when(c); } catch (err) { pass = false; } if (!pass) continue; }
      const id = key + '#' + e.t;
      const used = this.used.has(id);
      if (used && !repeat) continue;
      const text = this.fill(e.t, c);
      if (!text) continue;
      let w = e.w || 1;
      if (used) w *= 0.001 * (1 + this.clock - (this.usedAt.get(id) || 0));      // repeat banks: least recently used
      if (text.split(/\s+/)[0].toUpperCase() === lastFirst) w *= 0.3;               // vary the openers
      cands.push({ id, text, w, tpl: e.t });
    }
    if (!cands.length) return null;
    let total = 0; for (const x of cands) total += x.w;
    let r = rnd() * total;
    for (const x of cands) { r -= x.w; if (r <= 0) return x; }
    return cands[cands.length - 1];
  }

  /** Public: a line's text without saying it (used for the game-over quote). */
  line(key, data = {}) {
    const ch = this.choose(key, { ...this.baseCtx(), ...data });
    return ch ? ch.text.replace(/\s*~\s*/g, ' ') : '';
  }

  // ------------------------------------------------------------ queue + priorities
  /**
   * Say something from a bank (or the first bank in a list that has a usable line).
   * priority: 4 = result (cuts anything), 3 = critical, 2 = important, 1 = colour.
   */
  say(keys, c = {}, pri = 1, opts = {}) {
    if (!Array.isArray(keys)) keys = [keys];
    const cat = opts.cat || keys[keys.length - 1];
    if (COOL[cat] && this.clock - (this.catAt[cat] ?? -1e9) < COOL[cat]) return false;
    if (pri === 1 && !this.colourWindow(opts)) return false;
    if (pri === 2 && this.current && this.current.pri >= 3 && this.queue.some((q) => q.pri >= 2 && q.cat === cat)) return false;
    let ch = null, key = null;
    for (const k of keys) {
      if (!k) continue;
      if (this.queue.some((q) => q.key === k) && !(this.bank(k) || {}).repeat) continue;
      ch = this.choose(k, c);
      if (ch) { key = k; break; }
    }
    if (!ch && pri >= 3) {
      // important moments always land: reuse the least recently used line rather than say nothing
      for (const k of keys) { if (k && (ch = this.choose(k, c, true))) { key = k; ch.reuse = true; break; } }
    }
    if (!ch) { this.note('nothing', keys[0], pri); return false; }
    const item = { key, cat, id: ch.id, tpl: ch.tpl, c, text: ch.text, pri, at: this.clock, ttl: opts.ttl ?? TTL[pri], delay: opts.delay || 0, sfx: opts.sfx || null, ev: opts.ev || keys[0], force: !!opts.force, reuse: !!ch.reuse };
    // reserve now so a queued line can't be picked twice
    this.used.add(ch.id); this.usedAt.set(ch.id, this.clock);
    this.catAt[cat] = this.clock;
    this.enqueue(item);
    return true;
  }

  colourWindow(opts) {
    if (this.current || this.queue.length) return false;
    if (this.clock < this.holdUntil) return false;
    if (this.clock - this.lastEnd < (opts.gap ?? 1.4)) return false;
    // never start colour that would still be going when the music is due to stop
    const g = this.game;
    if (g && g.phase === 'music' && Number.isFinite(g.stopAt) && g.stopAt - g.phaseT < (opts.need ?? 3.5)) return !!opts.tease;
    if (g && g.phase === 'park' && g.timeLeft < 6.5 && !opts.tease) return false;
    return true;
  }

  enqueue(item) {
    const cur = this.current;
    const drop = (q) => { this.release(q); this.note('dropped', q.key, q.pri, q.text); };
    if (item.pri >= 3) {
      // anything less important that is waiting is now old news
      this.queue = this.queue.filter((q) => (q.pri >= 3 ? true : (drop(q), false)));
      // cut the current line if it matters less (a result waits for a critical line to finish, unless forced)
      if (cur && (cur.pri < 3 || (item.force && cur.pri < 4))) this.cut('cut by ' + item.key);
      let i = this.queue.findIndex((q) => q.pri < item.pri);
      if (i < 0) i = this.queue.length;
      this.queue.splice(i, 0, item);
      while (this.queue.length > 3) drop(this.queue.pop());
    } else if (item.pri === 2) {
      // the freshest important line replaces any older one still waiting
      this.queue = this.queue.filter((q) => (q.pri >= 3 ? true : (drop(q), false)));
      if (cur && cur.pri === 1 && !this.queue.length) { this.cut('cut by ' + item.key); this.queue.unshift(item); }
      else this.queue.push(item);
    } else {
      this.queue.push(item);
    }
  }
  release(item) { this.used.delete(item.id); }
  cut(reason) {
    if (this.current) this.note('cut', this.current.key, this.current.pri, reason);
    this.stopSpeech();
    this.current = null;
  }
  interrupt() { this.stopSpeech(); this.current = null; }
  stopSpeech() {
    this.speakToken++;
    if (this.synth) { try { this.synth.cancel(); } catch (e) { /* ignore */ } }
  }
  silence() { this.queue = []; this.interrupt(); this.onSubtitle(null); }
  note(kind, key, pri, text, id, ev) { if (this.log) this.log.push({ t: this.clock, kind, key, pri, text, id, ev }); }

  update(dt) {
    this.clock += dt;
    if (this.current) {
      const cur = this.current;
      cur.t += dt;
      const done = cur.t > cur.maxT || (cur.spoken && cur.ended && cur.t > cur.minT) || (!cur.spoken && cur.t > cur.est);
      if (done) { this.current = null; this.lastEnd = this.clock; this.subT = 1.4; }
    }
    if (!this.current) {
      while (this.queue.length) {
        const next = this.queue[0];
        if (this.clock - next.at > next.ttl + next.delay) { this.queue.shift(); this.release(next); this.note('stale', next.key, next.pri, next.text); continue; }
        if (this.clock - next.at < next.delay) break;
        this.queue.shift(); this.start(next); break;
      }
    }
    if (!this.current && this.subT > 0) { this.subT -= dt; if (this.subT <= 0) this.onSubtitle(null); }
    if (!this.current && !this.queue.length && this.game) this.autoColour();
  }

  prosody(item, aside) {
    const late = this.game && this.game.phase === 'park' && this.game.timeLeft < 8;
    let rate = { 1: 1.04, 2: 1.12, 3: 1.18, 4: 1.12 }[item.pri] || 1.08;
    let pitch = { 1: 1.0, 2: 1.06, 3: 1.16, 4: 1.12 }[item.pri] || 1.05;
    const letters = item.text.replace(/[^A-Za-z]/g, '');
    const shout = letters.length && letters.replace(/[^A-Z]/g, '').length / letters.length > 0.6;
    if (shout) { pitch += 0.08; rate += 0.04; }
    if (this.frantic) rate += 0.06;
    if (late) rate += 0.06;
    if (aside) { rate = Math.min(rate, 1.0) - 0.04; pitch = 0.9; }
    return { rate: Math.min(1.45, rate), pitch: Math.min(1.35, pitch) };
  }

  start(item) {
    // refresh anything that changes by the second (the clock, who is still hunting) so a queued line is never out of date
    if (item.tpl && item.c && this.game && /\{(secs|hunters|nHunt|free|HUNTERS|Hunters)\}/.test(item.tpl) && !/\[/.test(item.tpl)) {
      const b = this.baseCtx();
      const t2 = this.fill(item.tpl, { ...item.c, secs: b.secs, hunters: b.hunters, nHunt: b.nHunt, free: b.free });
      if (t2) item.text = t2;
    }
    const shown = item.text.replace(/\s*~\s*/g, ' ');
    const words = shown.split(/\s+/).length;
    const pr = this.prosody(item, false);
    const est = 0.5 + words * 0.36 / pr.rate + (item.text.includes('~') ? 0.4 : 0);
    this.current = { ...item, t: 0, est, minT: Math.min(1.0, est * 0.5), maxT: est + 2, spoken: false, ended: false };
    this.lastText = shown;
    this.onSubtitle(shown);
    this.note(item.reuse ? 'say-reuse' : 'say', item.key, item.pri, shown, item.id, item.ev);
    if (item.pri >= 3) this.holdUntil = this.clock + est + 1.6;
    if (item.sfx && this.sfx && this.sfx.react) { try { this.sfx.react(item.sfx); } catch (e) { /* ignore */ } }
    if (!(this.voiceOn && this.synth && typeof SpeechSynthesisUtterance !== 'undefined')) return;
    try {
      // never let the browser's own queue build up behind us
      const busy = this.synth.speaking || this.synth.pending;
      if (busy) this.synth.cancel();
      const token = ++this.speakToken;
      const cur = this.current;
      const parts = item.text.split(/\s*~\s*/).filter(Boolean);
      const utts = parts.map((p, i) => {
        const u = new SpeechSynthesisUtterance(this.toSpeech(p));
        if (this.voice) u.voice = this.voice;
        u.lang = (this.voice && this.voice.lang) || 'en-GB';
        const ps = this.prosody(item, i > 0);
        u.rate = ps.rate; u.pitch = ps.pitch; u.volume = 1;
        return u;
      });
      const last = utts[utts.length - 1];
      last.onend = () => { cur.ended = true; };
      for (const u of utts) u.onerror = () => { cur.ended = true; };
      cur.utts = utts;            // keep references (Chrome drops onend for collected utterances)
      cur.spoken = true; cur.maxT = est * 1.3 + 1.2;
      const go = () => { if (token !== this.speakToken || this.current !== cur) return; for (const u of utts) this.synth.speak(u); };
      if (busy) setTimeout(go, 40); else go();
    } catch (e) { this.current.spoken = false; }
  }
  toSpeech(text) {
    return text
      .replace(/\bSt (Albans|Pancras|Peter)/g, 'Saint $1')
      .replace(/\bFM\b/g, 'F M').replace(/\bSUVs\b/g, 'S U Vs').replace(/\bSUV\b/g, 'S U V').replace(/\bBMW('d|'s)?\b/g, (m, s) => 'B M W' + (s || ''))
      .replace(/\bGCSE\b/g, 'G C S E').replace(/\bL plates\b/gi, 'L-plates').replace(/\bDJ\b/g, 'D J')
      .replace(/([A-Z])([A-Z']+)/g, (m, a, b) => a + b.toLowerCase());     // SHOUTING -> Shouting, so it isn't spelt out
  }

  // ------------------------------------------------------------ context
  baseCtx() {
    const g = this.game;
    if (!g || !g.competitors) return {};
    const alive = g.competitors.filter((c) => c.alive);
    const rivals = alive.filter((c) => !c.isPlayer);
    const free = typeof g.freeBays === 'function' && g.phase === 'park' ? g.freeBays().length : g.nBays;
    const hunt = alive.filter((c) => !c.parked).map(nameOf);
    const c = {
      round: g.round, cars: alive.length, bays: free, score: Math.round(g.score || 0), kerbs: g.stats ? g.stats.kerbs : 0,
      final: !!g.final, alive: alive.map((x) => x.name), aliveNames: listNames(rivals.map((x) => x.name).concat(alive.some((x) => x.isPlayer) ? ['our contestant'] : [])),
      hunters: hunt.length && hunt.length <= 3 ? listNames(hunt) : null, nHunt: hunt.length, free,
      secs: g.timeLeft !== undefined && g.phase === 'park' ? Math.max(1, Math.round(g.timeLeft)) : null, heat: g.mode && g.mode.heat,
      aliveRival: rivals.length ? rivals[Math.floor(rivals.length / 2)].name : null,
    };
    // the leader (round 2 onwards)
    if (g.round >= 2) {
      const top = [...g.competitors].filter((x) => x.alive).sort((a, b) => b.points - a.points)[0];
      if (top && top.points > 0) { c.leaderIsPlayer = !!top.isPlayer; c.leader = top.isPlayer ? 'Our contestant' : top.name; c.leaderPts = Math.round(top.points); }
    }
    const lastOut = this.mem.outs.filter((o) => o.round === g.round - 1).map((o) => o.name);
    if (lastOut.length) c.lastOut = listNames(lastOut);
    // the last rival to rob the player who is still in the game
    const r = [...this.mem.robs].reverse().find((x) => x.victim === 'You' && alive.some((a) => a.name === x.thief));
    if (r) { c.robber = r.thief; c.robStreet = r.street; c.robRound = r.round; }
    return c;
  }
  who(x) {
    if (!x) return {};
    if (typeof x === 'string') { const comp = this.game && this.game.competitors && this.game.competitors.find((c) => c.name === x); return comp ? this.who(comp) : { name: x }; }
    const comp = x.p && !x.name ? (x.comp || null) : x;
    const p = comp ? comp : x.p;
    if (!p) return {};
    if (p.isPlayer) return { name: 'our contestant', isPlayer: true, key: 'player' };
    const title = p.title || (x.p && x.p.title) || '';
    return { name: p.name || (x.p && x.p.name), title, tname: title.replace(/^The /, 'the '), carName: p.carName || (x.p && x.p.carName), key: p.key || (x.p && x.p.key), isPlayer: false };
  }
  ctx(extra = {}) { return { ...this.baseCtx(), ...extra }; }
  /** persona-specific bank first (if it still has an unused line), then the generic one */
  pk(base, key, chance = 0.7) { return key && this.has(base + '_' + key) && rnd() < chance ? [base + '_' + key, base] : [base]; }
  react(kind) { if (this.sfx && this.sfx.react) { try { this.sfx.react(kind); } catch (e) { /* ignore */ } } }

  // ------------------------------------------------------------ running commentary from the game state
  autoColour() {
    const g = this.game;
    if (!g || !g.drivers || !g.track) return;
    if (this.clock - this.lastEnd < 2.2 || this.clock < this.holdUntil) return;
    if (this.clock - (this.autoAt || -1e9) < (g.phase === 'park' ? 2.5 : 4.5)) return;
    if (g.phase === 'music' && g.phaseT > 3) { this.autoAt = this.clock; this.observeMusic(g); }
    else if (g.phase === 'park' && g.phaseT > 4) { this.autoAt = this.clock; this.observePark(g); }
  }

  rivalsOnRoad(g) {
    return g.drivers.filter((d) => d.comp && !d.comp.isPlayer && d.comp.alive && d.state !== 'out' && !d.car.ghost);
  }
  streetOf(g, car) { try { return g.track.locate(car.x, car.z).edge.name; } catch (e) { return null; } }

  observeMusic(g) {
    const pc = g.player.car, opts = [];
    const rivals = this.rivalsOnRoad(g);
    const all = g.world ? g.world.cars.filter((c) => !c.ghost) : [];
    const nameFor = (car) => { if (car === pc) return 'our contestant'; const d = g.drivers.find((x) => x.car === car); return d ? (d.comp ? d.comp.name : null) : null; };
    for (const d of rivals) {
      const car = d.car, w = this.who(d.comp), street = this.streetOf(g, car);
      const mph = Math.round(Math.abs(car.v) * 2.237);
      // tailgating someone
      for (const o of all) {
        if (o === car) continue;
        const l = car.toLocal(o.x, o.z);
        if (l.f > 2 && l.f < car.len / 2 + o.len / 2 + 2.2 && Math.abs(l.r) < 1.8 && Math.abs(car.v) > 4) {
          const victim = nameFor(o);
          if (victim) opts.push({ keys: this.pk('obsTailgate', w.key, 0.8), c: { ...w, victim, street }, w: d.p.aggression > 0.7 ? 3 : 1 });
        }
      }
      // right in front of / behind the player
      const lp = pc.toLocal(car.x, car.z);
      if (lp.f > 3 && lp.f < 22 && Math.abs(lp.r) < 2.5) opts.push({ keys: ['obsAhead'], c: { ...w, street }, w: 1.5 });
      if (lp.f < -3 && lp.f > -12 && Math.abs(lp.r) < 2.5) opts.push({ keys: this.pk('obsBehind', w.key, 0.8), c: { ...w, street }, w: 1.5 });
      // dawdling by the cones
      if (Math.abs(car.v) < 4 && g.bays.some((b) => b.state === 'coned' && Math.hypot(b.x - car.x, b.z - car.z) < 8)) opts.push({ keys: this.pk('obsHover', w.key, 0.9), c: { ...w, street }, w: 1.2 });
      if ((w.key === 'major' || w.key === 'poppy') && Math.abs(car.v) > 1 && mph < 16) opts.push({ keys: ['obsSlow_' + w.key], c: { ...w, mph, street }, w: 0.8 });
      if (mph >= 24) opts.push({ keys: ['obsFast'], c: { ...w, mph, street }, w: 1 });
      opts.push({ keys: ['persona_' + w.key], c: w, w: 0.7 });
    }
    // clusters
    const by = {};
    for (const d of rivals) { const s = this.streetOf(g, d.car); if (s) (by[s] = by[s] || []).push(d.comp.name); }
    for (const [street, names] of Object.entries(by)) if (names.length >= 3) opts.push({ keys: ['obsCluster'], c: { street, n: names.length, names: listNames(names) }, w: 2 });
    if (g.round >= 2) opts.push({ keys: ['obsLeader'], c: {}, w: 0.6 });
    const ps = this.streetOf(g, pc);
    if (ps && STREET_KEY[ps]) opts.push({ keys: ['street_' + STREET_KEY[ps]], c: { street: ps }, w: 0.8 });
    opts.push({ keys: ['banterGeneral'], c: {}, w: 0.5 });
    this.sayOne(opts, 'observe');
  }

  observePark(g) {
    const opts = [];
    const me = g.playerComp;
    for (const d of this.rivalsOnRoad(g)) {
      if (d.comp.parked) continue;
      const w = this.who(d.comp);
      if (d.state === 'manoeuvre' && d.target) opts.push({ keys: this.pk('man', w.key, 0.85), c: { ...w, street: d.target.street }, w: 2 });
      else if ((d.state === 'seek' || d.state === 'react') && d.target && Math.abs(d.car.v) > 6) opts.push({ keys: ['seeking'], c: { ...w, street: d.target.street }, w: 0.8 });
    }
    const c = this.baseCtx();
    if (c.nHunt >= 2 && c.free >= 1) opts.push({ keys: ['parkCount'], c: {}, w: 0.8 });
    if (me && me.alive && !me.parked && g.lastPick && g.lastPick.duel && g.lastPick.duel.bay && !g.lastPick.duel.bay.occupant && g.timeLeft > 8) {
      opts.push({ keys: ['ring'], c: { ringStreet: g.lastPick.duel.bay.street }, w: 1 });
    }
    if (me && me.parked && c.nHunt >= 1) opts.push({ keys: ['playerSafe'], c: {}, w: 1 });
    this.sayOne(opts, 'parkColour');
  }

  sayOne(opts, cat) {
    // weighted order, then the first one that has an unused line
    const order = [];
    const pool = opts.slice();
    while (pool.length) {
      let tot = 0; for (const o of pool) tot += o.w;
      let r = rnd() * tot, i = 0;
      for (; i < pool.length - 1; i++) { r -= pool[i].w; if (r <= 0) break; }
      order.push(pool.splice(i, 1)[0]);
    }
    for (const o of order) {
      const c = this.ctx(o.c);
      if (o.keys.some((k) => this.choose(k, c)) && this.say(o.keys, c, 1, { cat, ev: 'auto' })) return true;
    }
    return false;
  }

  // ------------------------------------------------------------ game events
  handle(type, d = {}, game) {
    if (game) this.game = game;
    try { this.handleEvent(type, d || {}, game || this.game || {}); } catch (e) { if (this.log) this.note('error', type, 0, String(e && e.stack || e)); }
  }

  handleEvent(type, d, g) {
    const m = this.mem;
    const comp = d.comp || d.rival || (d.driver && (d.driver.comp || d.driver));
    const w = this.who(comp);
    switch (type) {
      case 'gameStart': {
        const champCont = d.mode && d.mode.key === 'champ' && d.mode.heat > 1;
        if (!champCont) { this.used.clear(); this.usedAt.clear(); this.resetMemory(); }
        this.catAt = {}; this.queue = []; this.frantic = false;
        break;
      }
      case 'roundIntro': {
        this.frantic = false; m.roundRob = null; m.perfectStreet = null; m.stash = []; m.photo = null; m.endSaid = false; m.struggleRound = 0;
        const c = this.ctx({ ...d, label: d.mode && d.mode.label, rivals: (d.cars || 1) - 1 });
        if (m.leader && m.leader.fresh && d.round > 1) { c.newLeader = m.leader.isPlayer ? null : m.leader.name; c.youLead = m.leader.isPlayer ? Math.round(m.leader.points) : null; c.newLeaderPts = Math.round(m.leader.points); m.leader.fresh = false; }
        let keys;
        if (d.round === 1) {
          const mk = d.mode && d.mode.key;
          keys = mk === 'rush' ? ['rushStart', 'gameStart'] : mk === 'champ' ? ['champStart' + (d.mode.heat || 1), 'champStart1', 'gameStart'] : ['gameStart'];
        } else if (d.final) {
          const r = g.competitors && g.competitors.find((x) => x.alive && !x.isPlayer);
          if (r) { c.rival = r.name; c.rivalTitle = r.title.replace(/^The /, 'the '); }
          keys = ['finalIntro', 'roundIntro'];
        } else keys = ['roundIntro'];
        this.say(keys, c, 3, { delay: 0.6, ttl: 6 });
        if (d.event && d.round > 1 && rnd() < 0.5) this.say('eventTease', c, 2, { ttl: 4 });
        break;
      }
      case 'leader': {
        const lw = this.who(d.name);
        const isPlayer = d.name === 'You' || lw.isPlayer || (d.comp && d.comp.isPlayer);
        m.leader = { name: isPlayer ? 'Our contestant' : nameOf(d.name) || d.name, points: d.points, isPlayer, fresh: true };
        this.say('leader', this.ctx({ ...lw, name: isPlayer ? 'our contestant' : lw.name || d.name, points: Math.round(d.points), isPlayer }), 2, { ttl: 7 });
        break;
      }
      case 'freeStart': this.say('freeStart', {}, 3); break;
      case 'musicStart': {
        const c = this.ctx(d);
        this.say(d.final ? ['musicStartFinal', 'musicStart'] : ['musicStart'], c, 2, { ttl: 5 });
        break;
      }
      case 'banter': {
        const late = g.phase === 'music' && Number.isFinite(g.stopAt) && g.phaseT > g.stopAt - 5;
        const c = this.ctx(d);
        const q = d.queue;
        const opts = [];
        if (late) opts.push({ keys: ['banterLate'], c, w: 3, tease: true });
        if (q && q.leader) {
          const lk = q.leader.lorry ? 'lorry' : q.leader.key;
          const qc = { ...c, name: q.leader.name === 'Bin Lorry' ? 'the bin lorry' : q.leader.name, carName: q.leader.carName, count: q.count };
          if (q.hasPlayer) opts.push({ keys: this.pk('banterQueuePlayer', lk, 0.9), c: qc, w: 3 });
          else if (q.leader.name !== 'Traffic') opts.push({ keys: this.pk('banterQueue', lk, 0.8), c: qc, w: 2 });
        }
        if (d.mph !== undefined && d.mph < 6) opts.push({ keys: ['banterSlow'], c: { ...c, mph: Math.max(1, Math.round(d.mph)) }, w: 1 });
        if (!late && g.round >= 2 && rnd() < 0.25) opts.push({ keys: ['banterBluff'], c, w: 1, tease: true });
        if (d.street && STREET_KEY[d.street]) opts.push({ keys: ['street_' + STREET_KEY[d.street]], c, w: 1 });
        opts.push({ keys: ['banterGeneral'], c, w: 0.4 });
        // late/tease lines are short and allowed right up to the stop
        const ordered = opts.sort((a, b) => b.w * (0.5 + rnd()) - a.w * (0.5 + rnd()));
        for (const o of ordered) if (this.say(o.keys, o.c, 1, { cat: 'banter', tease: o.tease, need: o.tease ? 1.6 : 3.5 })) break;
        break;
      }
      case 'musicStop': {
        this.frantic = true;
        this.queue = this.queue.filter((q) => q.pri >= 3 && q.key !== 'musicStart');
        const c = this.ctx({ ...d, street: d.street || 'the next street', fake: d.fakeStreet, perfect: m.perfectStreet });
        const keys = d.final ? ['musicStopFinal', 'musicStop'] : m.perfectStreet ? ['musicStopPerfect', 'musicStop'] : d.fakeStreet ? ['musicStopFake', 'musicStop'] : ['musicStop'];
        this.say(keys, c, 4, { ttl: 3, force: true });
        this.react('roar');
        for (const s of m.stash) this.say(s.keys, s.c, 3, { ttl: 7 });
        m.stash = [];
        break;
      }
      case 'event': {
        const c = this.ctx(d);
        const atStop = g.phase === 'park' && (g.phaseT || 0) < 0.05;
        if (d.kind === 'fakeSpace') break;                           // the musicStop line does it
        if (d.kind === 'perfectSpot' && atStop) { m.perfectStreet = d.street; break; }
        if (d.kind === 'deliveryVan' && atStop) { m.stash.push({ keys: ['deliveryVan'], c }); break; }
        const pri = d.kind === 'permit' || d.kind === 'vanGone' || d.kind === 'perfectSpot' ? 3 : 2;
        this.say(d.kind, c, pri, { ttl: pri === 3 ? 5 : 4 });
        if (d.kind === 'permit') this.react('groan');
        if (d.kind === 'binLorry' || d.kind === 'schoolRun') this.react('groan');
        break;
      }
      case 'tick': {
        if (g.playerComp && !g.playerComp.alive) break;
        const c = this.ctx(d);
        if (d.t === 20 && g.countdown > 28) this.say('tick20', c, 2, { ttl: 1.5 });
        if (d.t === 10) this.say('tick10', c, 2, { ttl: 1.2 });
        if (d.t === 5) this.say('tick5', c, 3, { ttl: 1.0 });
        break;
      }
      case 'lastSpace': this.say(g.final ? ['finalClock', 'lastSpace'] : ['lastSpace'], this.ctx(d), 3, { ttl: 5 }); this.react('gasp'); break;
      case 'whistle': this.say('whistle', this.ctx(d), 3, { ttl: 2 }); break;
      case 'parked': this.onParked(d, g, w); break;
      case 'lastGasp': {
        const lw = this.who(d.comp);
        const prev = m.parkedAt[lw.name];
        if (prev !== undefined && this.clock - prev < 1.5 && m.lastClutch === lw.name) break;     // already said it
        if (lw.isPlayer) this.say('playerClutch', this.ctx({ street: d.street, secs: Math.max(1, Math.round(d.timeLeft || 1)) }), 3, { ttl: 3 });
        else this.say('lastGasp', this.ctx({ ...lw, street: d.street, secs: Math.max(1, Math.round(d.timeLeft || 1)) }), 3, { ttl: 3 });
        m.lastClutch = lw.name;
        this.react('roar');
        break;
      }
      case 'robbed': {
        const r = { thief: w.name, victim: 'You', street: d.street, round: g.round };
        const prevSame = m.robs.filter((x) => x.thief === w.name);
        m.robs.push(r); m.roundRob = r;
        const c = this.ctx({ ...w, street: d.street, robCount: prevSame.length + 1, robTimes: times(prevSame.length + 1), robPlayerCount: prevSame.filter((x) => x.victim === 'You').length + 1, onStreetAgain: prevSame.some((x) => x.street === d.street) ? ' on ' + d.street : null });
        if (!c.onStreetAgain) c.onStreetAgain = '';
        c.robTimes = times(c.robPlayerCount >= 2 ? c.robPlayerCount : c.robCount);
        this.say(['robbedAgain', ...this.pk('robbed', w.key, 0.6)], c, 3, { ttl: 4 });
        this.react('groan');
        break;
      }
      case 'stole': {
        m.steals++;
        const c = this.ctx({ ...w, street: d.street, stoleCount: m.steals, stoleTimes: times(m.steals) });
        this.say(['stoleAgain', ...this.pk('stole', w.key, 0.7)], c, 3, { ttl: 3.5 });
        this.react('cheer');
        break;
      }
      case 'rivalRobbed': {
        const thief = this.who(d.thief), victim = this.who(d.victim);
        const tn = thief.name || nameOf(d.thief), vn = victim.name || nameOf(d.victim);
        if (!tn || !vn) break;
        const street = d.street || (d.bay && d.bay.street);
        const prev = m.robs.filter((x) => x.thief === tn);
        m.robs.push({ thief: tn, victim: vn, street, round: g.round });
        const c = this.ctx({ ...thief, thief: tn, victim: vn, street, robCount: prev.length + 1, robTimes: times(prev.length + 1), onStreetAgain: prev.some((x) => x.street === street) ? ' on ' + street : '' });
        this.say(['rivalRobbedAgain', ...this.pk('rivalRobbed', thief.key, 0.6)], c, 2, { ttl: 3, cat: 'rivalRobbed' });
        this.react('ooh');
        break;
      }
      case 'contested': {
        const names = (d.drivers || []).map((x) => nameOf(x) === 'You' ? 'our contestant' : nameOf(x)).filter(Boolean);
        if (names.length < 2) break;
        const street = d.street || (d.bay && d.bay.street);
        const hasPlayer = names.includes('our contestant');
        const others = names.filter((n) => n !== 'our contestant');
        const c = this.ctx({ names: listNames(names), others: listNames(others), street });
        this.say(hasPlayer ? ['contestedPlayer', 'contested'] : ['contested'], c, hasPlayer ? 2 : 1, { ttl: 2.5, cat: 'contested' });
        break;
      }
      case 'nearMiss': {
        m.nearMiss++;
        const rw = this.who(d.rival);
        const c = this.ctx({ ...rw, nearCount: m.nearMiss });
        const keys = ['nearMissAgain'];
        if (rw.name) keys.push('nearMissRival');
        else if (d.extra && this.has('nearMiss_' + d.extra)) keys.push('nearMiss_' + d.extra);
        keys.push('nearMiss');
        this.say(keys, c, g.phase === 'park' ? 2 : 1, { ttl: 2, cat: 'nearMiss' });
        this.react('ooh');
        break;
      }
      case 'overshot': this.say('overshot', this.ctx({ street: d.street || (d.bay && d.bay.street) }), 2, { ttl: 2 }); break;
      case 'longReverse': this.say('longReverse', this.ctx({ seconds: Math.round(d.seconds || 0) || null }), 1, { ttl: 2, gap: 0.8 }); break;
      case 'photoFinish': {
        const win = this.who(d.winner), lose = this.who(d.loser);
        m.photo = { winner: win.isPlayer ? 'our contestant' : win.name || nameOf(d.winner), loser: lose.isPlayer ? 'our contestant' : lose.name || nameOf(d.loser) };
        if (m.endSaid) this.say('photoFinish', this.ctx({ winner: cap(m.photo.winner), loser: m.photo.loser }), 3, { ttl: 6 });
        this.react('roar');
        break;
      }
      case 'struggle': {
        m.struggleRound = d.count;
        this.say('struggle', this.ctx(d), 2, { ttl: 2.5 });
        if (d.count >= 6) this.react('laugh');
        break;
      }
      case 'impact': {
        if (!d.player) { this.say('aiCrash', this.ctx(), 1); break; }
        const c = this.ctx({ kerbs: d.kerbs });
        if (d.kind === 'kerb') {
          if (d.speed > 2.2) {
            const many = d.kerbs >= 3 && (d.kerbs <= 5 || d.kerbs % 2 === 0);
            this.say(many ? ['kerbMany', 'kerb'] : ['kerb'], c, d.speed > 4 ? 2 : 1, { cat: 'kerb' });
          }
        } else if (d.kind === 'static') {
          if (d.speed > 1.5) { this.say('hitParked', c, d.speed > 4 ? 2 : 1); if (d.speed > 3) this.react('gasp'); }
        } else if (d.rival && d.speed > 1.5) {
          const rw = this.who(d.rival);
          this.say(this.pk(d.playerAtFault ? 'hitRival' : 'hitByRival', rw.key, 0.6), { ...c, ...rw }, 2);
          if (d.speed > 3) this.react('ooh');
        } else if (d.extra && d.speed > 1.5) {
          const k = d.extra === 'lorry' ? 'lorry' : d.extra === 'traffic' ? (g.event === 'deliveryVan' && g.van ? 'van' : 'traffic') : null;
          if (k) this.say('hitExtra_' + k, c, 2, { cat: 'hitExtra' });
        }
        break;
      }
      case 'shove': this.say(this.pk('shove', w.key, 0.7), this.ctx(w), 2); break;
      case 'honk': if (d.atPlayer) this.say(this.pk('honkPlayer', w.key, 0.6), this.ctx(w), 1, { cat: 'honk' }); break;
      case 'wrongWay': this.say(d.real ? 'wrongWayReal' : 'wrongWay', this.ctx(d), 2); break;
      case 'speeding': this.say('speeding', this.ctx(d), 2, { ttl: 2 }); break;
      case 'loiter': this.say(d.level === 2 ? 'loiter2' : 'loiter1', this.ctx(), d.level === 2 ? 3 : 2); break;
      case 'falseStart': this.say('falseStart', this.ctx(), 2, { ttl: 4 }); break;
      case 'driveway': this.say('driveway', this.ctx(d), 3, { ttl: 3 }); this.react('laugh'); break;
      case 'yellow': this.say('yellow', this.ctx(d), 2); break;
      case 'permitParked': this.say('permitParked', this.ctx(d), 2); break;
      case 'blockedParked': this.say('blockedParked', this.ctx(d), 2); break;
      case 'vanBlocked': this.say('vanBlocked', this.ctx(d), 2); break;
      case 'fooled': this.say(this.pk('fooled', w.key, 0.9), this.ctx({ ...w, street: d.street }), 2, { ttl: 3 }); this.react('laugh'); break;
      case 'stall': {
        m.stalls[w.name] = (m.stalls[w.name] || 0) + 1;
        const c = this.ctx({ ...w, stalls: m.stalls[w.name] });
        this.say(['stallAgain', ...this.pk('stall', w.key, 0.7)], c, 1, { cat: 'stall', gap: 0.8 });
        break;
      }
      case 'aborted': if (d.bay) this.say('aborted', this.ctx({ ...w, street: d.bay.street }), 1, { gap: 0.8 }); break;
      case 'cushion': if (d.speed > 9) this.say('cushion', this.ctx(), 1); break;
      case 'roundEnd': this.onRoundEnd(d, g); break;
      case 'victory':
        if (d.champNext) this.say('champNext', this.ctx(d), 3, { ttl: 6 });
        else if (d.champion) this.say(['champion', 'victory'], this.ctx(d), 3, { ttl: 6 });
        break;
      case 'freePark': {
        const k = { perfect: 'freePerfect', tidy: 'freeTidy', ok: 'freeOk', awful: 'freeAwful' }[d.rating && d.rating.key];
        if (k) this.say(k, {}, 2);
        break;
      }
      default: break;
    }
  }

  onParked(d, g, w) {
    const m = this.mem;
    const street = d.bay && d.bay.street;
    const secs = Math.max(1, Math.round(d.timeLeft || 0));
    const rk = d.rating && d.rating.key;
    m.parkedAt[w.name] = this.clock;
    if (d.isPlayer) {
      const c = this.ctx({ street, points: d.points, order: d.order, secs, attempts: m.struggleRound >= 4 ? m.struggleRound : null, perfects: g.stats ? g.stats.perfects : 0 });
      let keys;
      if (d.timeLeft !== undefined && d.timeLeft < 3 && rk !== 'awful') { keys = ['playerClutch']; m.lastClutch = w.name; }
      else if (m.struggleRound >= 4 && rk !== 'awful') keys = ['playerAfterStruggle'];
      else keys = [];
      keys.push({ perfect: 'playerPerfect', tidy: 'playerTidy', ok: 'playerOk', awful: 'playerAwful' }[rk] || 'playerOk', rk === 'awful' ? 'playerAwfulAny' : 'playerParkedAny');
      this.say(keys, c, 3, { ttl: 3, force: true });
      this.react(rk === 'awful' ? 'laugh' : rk === 'perfect' ? 'airhorn' : 'cheer');
      return;
    }
    const left = d.baysLeft === 1 ? 'One space' : d.baysLeft + ' spaces';
    const c = this.ctx({ ...w, street, left, secs, baysLeft: d.baysLeft });
    const robbedUs = [...m.robs].reverse().find((x) => x.thief === w.name && x.victim === 'You' && x.round < g.round);
    if (robbedUs) { c.robRound = robbedUs.round; }
    if (d.timeLeft !== undefined && d.timeLeft < 3 && d.baysLeft >= 0) { m.lastClutch = w.name; this.say('lastGasp', c, 3, { ttl: 2.5 }); this.react('roar'); return; }
    if (d.final) return;                                   // the result line covers it
    const keys = [];
    let pri = 2;
    if (robbedUs && rnd() < 0.6) keys.push('rivalParkedRobber');
    if (d.baysLeft === 1) { keys.push('rivalOneLeft'); pri = 2; }
    else if (d.order === 1 && rnd() < 0.5) keys.push('rivalFirst');
    if (rk === 'perfect' && rnd() < 0.4) keys.push('rivalPerfect');
    if (rk === 'awful' && rnd() < 0.6) keys.push('rivalAwful');
    keys.push(...this.pk('rivalParked', w.key, 0.65));
    if (!keys.includes('rivalParked')) keys.push('rivalParked');
    // routine rival parks are important only when nothing else is going on
    if (d.baysLeft > 1 && this.current && this.current.pri >= 2) pri = 1;
    this.say(keys, c, pri, { ttl: 1.8, cat: 'rivalParked', gap: 0.3 });
  }

  onRoundEnd(d, g) {
    const m = this.mem;
    this.frantic = false;
    m.endSaid = true;
    const outs = (d.out || []).filter((c) => !c.isPlayer);
    for (const c of d.out || []) m.outs.push({ name: c.isPlayer ? 'our contestant' : c.name, round: d.round });
    const photo = m.photo;
    if (d.result === 'victory') {
      const loser = outs[0] ? outs[0].name : null;
      this.say(photo ? ['victoryPhoto', 'victory'] : ['victory'], this.ctx({ loser }), 4, { ttl: 6 });
      return;
    }
    if (d.playerOut) {
      if (d.final) {
        const winner = (d.survivors || []).find((c) => !c.isPlayer);
        const c = this.ctx({ winner: winner ? winner.name : null });
        this.say(photo ? ['playerOutPhoto', 'playerOutFinal', 'eliminatedPlayer'] : ['playerOutFinal', 'eliminatedPlayer'], c, 4, { ttl: 6 });
      } else {
        const rr = m.roundRob;
        const c = this.ctx({ robber: rr ? rr.thief : null, robStreet: rr ? rr.street : null });
        this.say(rr && rnd() < 0.7 ? ['playerOutRobbed', 'eliminatedPlayer'] : ['eliminatedPlayer'], c, 4, { ttl: 6 });
      }
      this.react('aww');
      return;
    }
    if (!outs.length) return;
    if (outs.length > 1) {
      this.say('eliminatedMany', this.ctx({ names: listNames(outs.map((c) => c.name)) }), 4, { ttl: 6 });
    } else {
      const o = this.who(outs[0]);
      const rob = [...m.robs].reverse().find((x) => x.thief === o.name && x.victim === 'You');
      const outCount = m.outs.filter((x) => x.name === o.name).length;
      const c = this.ctx({ ...o, robStreet: rob ? rob.street : null, outCount, outTimes: times(outCount) });
      const pre = outCount >= 2 && rnd() < 0.7 ? ['eliminatedRival'] : [];
      this.say(rob ? ['outKarma', ...pre, ...this.pk('out', o.key, 0.75), 'eliminatedRival'] : [...pre, ...this.pk('out', o.key, 0.75), 'eliminatedRival'], c, 4, { ttl: 6 });
    }
    this.react(rnd() < 0.5 ? 'cheer' : 'aww');
  }
}

export const DJ_LINES = L;     // exported for tests
