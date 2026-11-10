// The radio DJ: reacts to what actually happens in the game.
// Speech uses the browser's speech synthesis where available; subtitles are always shown.

export const DJ_NAME = "Dave 'Double Yellow' Dobson";
export const STATION = 'Snorbens FM 104.7';

const pickFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const LINES = {
  gameStart: [
    "GOOD MORNING, ST ALBANS! It's 8:47, the school run's in full swing, and {cars} motorists are about to compete for {bays} parking spaces. This is going to get ugly!",
    "This is Snorbens FM, Hertfordshire's third-best breakfast show, LIVE from the terraces! {cars} cars. {bays} spaces. No mercy. It's PARKING PANIC!",
    "GOOD MORNING, HERTFORDSHIRE! Forget the football. {cars} drivers, {bays} spaces, and the council has been out with the cones. Let's park!",
  ],
  rushStart: [
    "It's RUSH HOUR on Snorbens FM! Extra traffic, shorter countdowns, and {cars} drivers who should all have left ten minutes ago!",
  ],
  champStart: [
    "Welcome to the PARKING CHAMPIONSHIP! {label}. {cars} drivers, {bays} spaces, and a Golden Permit at the end of it all!",
  ],
  freeStart: [
    "No pressure this time. Have a pootle round, practise your parallel parking, and try not to clip Number 14's wing mirror.",
  ],
  roundIntro: [
    "Round {round}! {cars} cars left, {bays} spaces up for grabs. The council's moved the cones again, the monsters.",
    "On to round {round}. {cars} drivers, {bays} spaces. Somebody is going home without a parking space, and frankly it could be anyone.",
    "Round {round}, and it's getting tense. {cars} cars, {bays} spaces, zero neighbourly goodwill.",
  ],
  finalIntro: [
    "THIS IS IT. THE FINAL. TWO DRIVERS. ONE SPACE. I haven't been this excited since they resurfaced Catherine Street!",
    "Ladies and gentlemen, the GRAND FINAL. Two cars will circulate. One will park. One will have to use the multi-storey.",
  ],
  musicStart: [
    "Engines on, music up! Keep circulating, and have a good look at those coned-off bays.",
    "Here's a banger. Keep it moving, keep it legal, and no hovering by the cones!",
    "Round and round we go! Clockwise, please. This is St Albans, not the Wild West.",
    "Music's on! Scout your spaces. Any of those coned bays could open when the music stops.",
  ],
  banterStreet: [
    "Our contestant's cruising down {street}. Lovely terraces. Shame about the parking.",
    "The yellow hatchback is on {street}, eyeing up the cones like a hawk.",
    "{street}, a street with eleven parking spaces and forty-one cars. And yet they keep trying.",
    "Our contestant is on {street}. Somewhere, a curtain is twitching.",
  ],
  banterQueue: [
    "There's a queue of {count} behind {name}'s {carName}. You could not overtake here if you tried. People have tried.",
    "{name} is leading a lovely little procession of {count}. It's like a funeral, but slower.",
  ],
  banterQueuePlayer: [
    "Our contestant is stuck behind {name}'s {carName}. Deep breaths. In through the nose.",
    "Nothing our contestant can do but sit behind {name} and think about their life choices.",
  ],
  banterSlow: [
    "Our contestant's doing {mph} miles an hour. I've seen wheelie bins move faster on a windy day.",
  ],
  banterLate: [
    "Any second now... any second... I've got my finger on the button...",
    "Don't relax. I could stop this music at ANY moment. I have that power. It's the only power I have.",
  ],
  musicStop: [
    "THE MUSIC'S STOPPED! FIND A SPACE! FIND A SPACE! THERE'S ONE ON {STREET}!",
    "PARK! PARK! PARK! The cones are OFF! There's a gap on {STREET}! GO!",
    "AND STOP! EVERYBODY PARK! {bays} spaces, {cars} cars! Try {STREET}!",
  ],
  musicStopFake: [
    "THE MUSIC'S STOPPED! FIND A SPACE! THERE'S ONE ON {FAKE}! NO, WAIT, THAT'S A DRIVEWAY!",
    "PARK! PARK! PARK! I can see a lovely big gap on {FAKE}! Oh. No. That's somebody's driveway. Ignore me!",
  ],
  musicStopFinal: [
    "TWO DRIVERS. ONE SPACE. {STREET}. THIS IS WHAT THEY'VE BEEN TRAINING FOR!",
    "THE MUSIC'S STOPPED! ONE SPACE! IT'S ON {STREET}! GO, GO, GO!",
  ],
  tick10: ['TEN SECONDS!', 'Ten seconds left!'],
  tick5: ['FIVE!', 'FIVE SECONDS!'],
  rivalParked: [
    "{name} is IN on {street}!",
    "{title} has bagged a space on {street}.",
    "That's {name} parked up on {street}. {left} left!",
  ],
  rivalParkedPerfect: [
    "{name} slides into {street} like butter. Textbook. You could set your watch by it.",
    "Oh, that is BEAUTIFUL from {name} on {street}. Not a millimetre wasted.",
  ],
  rivalParkedAwful: [
    "{name} is technically parked on {street}. Technically. That's a foot from the kerb and nobody's proud of it.",
    "{name}'s {carName} has been abandoned on {street}. It counts. It shouldn't, but it counts.",
  ],
  playerPerfect: [
    "OH, THAT IS FILTH! Six inches from the kerb, dead straight! Somebody frame that parking!",
    "A SHOWROOM finish from our contestant on {street}! I've got goosebumps. Actual goosebumps.",
  ],
  playerTidy: [
    "Tidy! Very tidy. Our contestant is safe on {street}.",
    "That's in, and it's neat! Our contestant lives to park another day.",
  ],
  playerOk: [
    "It's in. It's not pretty, but it's in.",
    "Our contestant is parked. Let's not look too closely at how.",
  ],
  playerAwful: [
    "That's not parked, that's ABANDONED. It counts, but the stewards have issued a fine for crimes against parallel parking.",
    "Our contestant has parked like someone who's popped into the chippy. Safe, but fined.",
  ],
  robbed: [
    "UNBELIEVABLE SCENES ON {STREET}! {title}'s {carName} has absolutely ROBBED our contestant!",
    "OH NO! {name} has nicked it! Our contestant was RIGHT THERE on {street}!",
    "ROBBERY ON {STREET}! {name} just swooped in! Find another one, quick!",
  ],
  stole: [
    "DAYLIGHT ROBBERY! Our contestant has pinched that from right under {name}'s nose!",
    "OH, that's cheeky! {name} was lining that up and our contestant has just helped themselves!",
  ],
  struggle: [
    "That's attempt number {count} at the same parallel park. At this point, mate, I'd suggest getting the bus.",
    "Attempt {count}. Back a bit. Forward a bit. Back a bit. I've seen container ships dock faster.",
    "Still going! Attempt number {count}! The whole street's come out to watch now.",
  ],
  kerb: [
    "OH DEAR! That's another alloy wheel heading for an expensive refurbishment!",
    "Kerb! That's the kerb! It's been there since 1887, it's not going to move!",
    "Ooh, that's a kerbing. Somewhere, a tyre fitter has just put a deposit on a boat.",
  ],
  kerbMany: [
    "Kerb strike number {n}! Those alloys now have the texture of a digestive biscuit.",
  ],
  hitParked: [
    "That was a resident's car! It's fine. They'll just leave a passive-aggressive note.",
    "CONTACT with a parked car! That'll be on the neighbourhood WhatsApp group within the minute.",
    "Bit of a nudge there. In this postcode we call that 'parking by ear'.",
  ],
  hitRival: [
    "Contact with {name}! Swapping paint AND insurance details!",
    "Ooh! Our contestant's gone into the back of {name}! Whose fault was that? Theirs. It was theirs.",
  ],
  hitByRival: [
    "{name} has just driven into our contestant! Absolutely no apology. Classic.",
  ],
  shove: [
    "{name} is PHYSICALLY SHUNTING our contestant down the road! You can't park there AND you can't stop there!",
    "{name} has run out of patience and is using the {carName} as a snow plough!",
  ],
  honkPlayer: [
    "{name}'s on the horn! In St Albans! Before nine! Bold.",
    "A long, meaningful beep from {name}. I think we all know what that meant.",
  ],
  wrongWayReal: [
    "That is a ONE-WAY street, and that is NOT the way! Points off, and a stern letter from the council!",
    "WRONG WAY up {street}! It's been one-way for decades! There are signs! Big blue ones!",
  ],
  wrongWay: [
    "Our contestant's going against the flow on {street}. Brave. Stupid, but brave.",
    "Everybody else is going clockwise. Our contestant has other ideas.",
  ],
  speeding: [
    "{mph} in a twenty zone! This is {street}, not Silverstone!",
    "{mph} miles an hour past the terraces! The community speed watch are going to need a bigger clipboard!",
  ],
  loiter1: [
    "Keep moving, please! No hovering next to the cones. We've all seen that trick.",
    "Oi! Circulate! This is musical chairs, not a picnic!",
  ],
  loiter2: [
    "Right, the stewards have had enough. That's a LOITERING penalty: the engine cuts out when the music stops!",
  ],
  falseStart: [
    "And there's the penalty! Engine's cut out! That's what you get for hovering!",
  ],
  driveway: [
    "NO! That's a DRIVEWAY! Number 12's just come out in his dressing gown, and he is FURIOUS!",
    "You can't park across a driveway! Well. You can. But not in MY competition!",
  ],
  yellow: [
    "DOUBLE YELLOWS! That's not a space, that's a forty-quid donation to the council!",
    "Our contestant has stopped on double yellows. I can already hear the traffic warden's moped.",
  ],
  permitParked: [
    "That bay's permit holders only now! Unless you've got proof of address on {street}, keep looking!",
  ],
  blockedParked: [
    "There's a van in it! You can't park IN a van!",
  ],
  binLorry: [
    "OH NO. It's bin day. There's a refuse lorry on {street}, and it is not moving for ANYBODY.",
    "Bad news, everyone: the bin lorry's arrived on {street}. Recycling waits for no man.",
  ],
  permit: [
    "HOLD ON! The council have just made that space on {street} PERMIT HOLDERS ONLY! But there's a fresh one on {newStreet}!",
    "PLOT TWIST! That bay on {street} is now a residents' permit zone! A new space has opened on {newStreet}! GO!",
  ],
  schoolRun: [
    "It's the SCHOOL RUN! {count} enormous SUVs have just joined us, each one carrying a single, very small child.",
    "Here comes the school run! {count} extra four-by-fours, none of which have ever seen a field.",
  ],
  deliveryVan: [
    "There's a DELIVERY VAN in the space on {street}! He says he'll only be two minutes. He will not be two minutes.",
  ],
  vanGone: [
    "THE VAN'S GONE! That space on {street} is back in play!",
  ],
  perfectSpot: [
    "STOP EVERYTHING! There's a space on {street} you could land a HELICOPTER in! Everybody wants it!",
    "The Perfect Spot has appeared on {street}! Look at the size of it! It's a stampede!",
  ],
  fooled: [
    "{name} tried to park on somebody's driveway on {street}. Bless. We've all been there.",
  ],
  stall: [
    "{name} has stalled. Again. There's a queue building you could see from space.",
    "And {name}'s stalled it. Clutch in, love. Clutch IN.",
  ],
  aborted: [
    "{name} has bottled it and pulled back out! That space on {street} is still open!",
  ],
  eliminatedPlayer: [
    "Devastating. No parking space. No dignity. Just another afternoon in St Albans.",
    "And that's it for our contestant. Nothing left to do but circle the block until the end of time.",
    "Our contestant is OUT. They'll be parking in Harpenden and getting the train in.",
  ],
  eliminatedRival: [
    "{names} is OUT! No space! That's a long walk back from the station car park.",
    "It's all over for {names}. Gutted. Absolutely gutted.",
  ],
  eliminatedMany: [
    "{names}: ALL OUT! It's CARNAGE out there!",
  ],
  whistle: ["ON THE WHISTLE! They're still reversing in! I'm allowing it!"],
  victory: [
    "THEY'VE DONE IT! THE GREATEST PARKING PERFORMANCE HERTFORDSHIRE HAS EVER WITNESSED! THE GOLDEN PARKING PERMIT IS THEIRS!",
    "CHAMPION! Our contestant has out-parked the lot of them! Somebody get the Mayor on the phone!",
  ],
  champNext: [
    "That's the heat won! But don't get comfortable. The next one's harder, and the spaces are no bigger.",
  ],
  cushion: [
    "Speed cushion! That's what they're there for!",
    "Mind the cushions! That suspension isn't going to thank you.",
  ],
  freePark: {
    perfect: ["Now THAT is how you park. Do it like that when it matters."],
    tidy: ["Nice and tidy. Keep practising."],
    ok: ["It's in. Bit wonky. Have another go."],
    awful: ["I've seen better parking outside a kebab shop at 2 a.m. Again!"],
  },
  aiCrash: [
    "There's been a coming-together further up the road! Wing mirrors everywhere!",
  ],
};

export class DJ {
  constructor(onSubtitle) {
    this.onSubtitle = onSubtitle;
    this.queue = [];
    this.current = null;
    this.voiceOn = true;
    this.voice = null;
    this.last = {};
    this.lastSaid = -10;
    this.clock = 0;
    this.frantic = false;
    this.synth = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null;
    if (this.synth) {
      const load = () => { this.voice = this.pickVoice(); };
      load();
      if (this.synth.addEventListener) this.synth.addEventListener('voiceschanged', load);
    }
  }
  pickVoice() {
    const vs = this.synth.getVoices();
    const want = [/Daniel/i, /UK English Male/i, /George/i, /Ryan/i, /Arthur/i, /Oliver/i, /en-GB/i];
    for (const re of want) { const v = vs.find((x) => (re.test(x.name) || re.test(x.lang)) && /en[-_]GB/i.test(x.lang)); if (v) return v; }
    return vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  get speaking() { return !!this.current; }

  line(key, data = {}) {
    const bank = LINES[key];
    if (!bank) return null;
    let choice = pickFrom(bank);
    if (bank.length > 1 && choice === this.last[key]) choice = bank[(bank.indexOf(choice) + 1) % bank.length];
    this.last[key] = choice;
    return choice.replace(/\{(\w+)\}/g, (_, k) => {
      if (k === 'STREET') return String(data.street || 'the next street').toUpperCase();
      if (k === 'FAKE') return String(data.fakeStreet || '').toUpperCase();
      return data[k] !== undefined && data[k] !== null ? data[k] : '';
    });
  }

  /** priority: 3 = must say now, 2 = important, 1 = colour */
  say(key, data, priority = 1) {
    const text = typeof key === 'string' && LINES[key] ? this.line(key, data) : key;
    if (!text) return;
    if (priority >= 3) { this.queue = this.queue.filter((q) => q.priority >= 3); this.interrupt(); this.queue.unshift({ text, priority, at: this.clock }); }
    else if (priority === 2) { if (this.queue.length < 2) this.queue.push({ text, priority, at: this.clock }); }
    else if (!this.current && !this.queue.length && this.clock - this.lastSaid > 2.5) this.queue.push({ text, priority, at: this.clock });
  }
  interrupt() {
    if (this.synth) { try { this.synth.cancel(); } catch (e) { /* ignore */ } }
    this.current = null;
  }
  silence() { this.queue = []; this.interrupt(); this.onSubtitle(null); }

  update(dt) {
    this.clock += dt;
    if (this.current) {
      this.current.t += dt;
      const done = this.current.t > this.current.maxT || (this.current.spoken && this.current.ended && this.current.t > this.current.minT);
      if (done) { this.current = null; this.lastSaid = this.clock; this.subT = 1.2; }
    } else if (this.queue.length) {
      const next = this.queue.shift();
      if (next.priority < 3 && this.clock - next.at > 4.5) return;   // stale: the moment has passed
      this.start(next);
    } else if (this.subT > 0) {
      this.subT -= dt;
      if (this.subT <= 0) this.onSubtitle(null);
    }
  }

  start(item) {
    const words = item.text.split(/\s+/).length;
    const est = 0.9 + words * (this.frantic ? 0.24 : 0.3);
    this.current = { ...item, t: 0, minT: Math.min(1.2, est), maxT: est + 2.5, spoken: false, ended: false };
    this.onSubtitle(item.text);
    if (this.voiceOn && this.synth) {
      try {
        const u = new SpeechSynthesisUtterance(this.toSpeech(item.text));
        if (this.voice) u.voice = this.voice;
        u.lang = 'en-GB'; u.rate = this.frantic ? 1.32 : 1.16; u.pitch = item.priority >= 3 ? 1.18 : 1.05; u.volume = 1;
        const cur = this.current;
        u.onend = () => { cur.ended = true; };
        u.onerror = () => { cur.ended = true; cur.spoken = false; cur.maxT = est; };
        cur.spoken = true; cur.maxT = est * 1.6 + 3;
        this.synth.speak(u);
      } catch (e) { this.current.maxT = est; }
    } else this.current.maxT = est;
  }
  toSpeech(text) {
    return text
      .replace(/\bSt\b\.? (Albans|Peter)/gi, 'Saint $1')
      .replace(/([A-Z])([A-Z']+)/g, (m, a, b) => a + b.toLowerCase())      // SHOUTING -> Shouting, so it isn't spelt out
      .replace(/\bFm\b/g, 'F M').replace(/\bSuv(s?)\b/gi, 'S U V$1').replace(/\bBmw\b/gi, 'B M W');
  }

  // ------------------------------------------------------------ game events
  handle(type, d, game) {
    const comp = d.comp || d.rival || (d.driver && d.driver.comp);
    const who = comp ? { name: comp.name, title: comp.title, carName: comp.carName } : d.driver ? { name: d.driver.p.title, title: d.driver.p.title, carName: d.driver.p.carName } : {};
    switch (type) {
      case 'roundIntro':
        this.frantic = false;
        if (d.round === 1) this.say(d.mode.key === 'rush' ? 'rushStart' : d.mode.key === 'champ' ? 'champStart' : 'gameStart', { ...d, label: d.mode.label }, 3);
        else this.say(d.final ? 'finalIntro' : 'roundIntro', d, 3);
        break;
      case 'freeStart': this.say('freeStart', {}, 3); break;
      case 'musicStart': this.say('musicStart', {}, 1); break;
      case 'banter':
        if (d.queue && d.queue.hasPlayer) this.say('banterQueuePlayer', { name: d.queue.leader.name, carName: d.queue.leader.carName });
        else if (d.queue && Math.random() < 0.6) this.say('banterQueue', { name: d.queue.leader.name, carName: d.queue.leader.carName, count: d.queue.count });
        else if (d.mph < 6 && Math.random() < 0.5) this.say('banterSlow', { mph: Math.max(1, Math.round(d.mph)) });
        else if (game.phaseT > game.stopAt - 5) this.say('banterLate', {});
        else this.say('banterStreet', d);
        break;
      case 'musicStop':
        this.frantic = true;
        this.say(d.final ? 'musicStopFinal' : d.fakeStreet ? 'musicStopFake' : 'musicStop', d, 3);
        break;
      case 'tick':
        if (d.t === 10) this.say('tick10', {}, 2);
        if (d.t === 5) this.say('tick5', {}, 2);
        break;
      case 'parked':
        if (d.isPlayer) this.say({ perfect: 'playerPerfect', tidy: 'playerTidy', ok: 'playerOk', awful: 'playerAwful' }[d.rating.key], { street: d.bay.street }, 3);
        else {
          const key = d.rating.key === 'perfect' && Math.random() < 0.7 ? 'rivalParkedPerfect' : d.rating.key === 'awful' ? 'rivalParkedAwful' : 'rivalParked';
          this.say(key, { ...who, street: d.bay.street, left: d.baysLeft === 1 ? 'One space' : d.baysLeft + ' spaces' }, d.final ? 2 : 1);
        }
        break;
      case 'robbed': this.say('robbed', { ...who, street: d.street }, 3); break;
      case 'stole': this.say('stole', who, 2); break;
      case 'struggle': this.say('struggle', d, 2); break;
      case 'impact':
        if (!d.player) { this.say('aiCrash', {}); break; }
        if (d.kind === 'kerb') { if (d.speed > 2.2) this.say(d.kerbs >= 4 && d.kerbs % 3 === 1 ? 'kerbMany' : 'kerb', { n: d.kerbs }, d.speed > 4 ? 2 : 1); }
        else if (d.kind === 'static') { if (d.speed > 1.5) this.say('hitParked', {}, d.speed > 4 ? 2 : 1); }
        else if (d.rival && d.speed > 1.5) this.say(d.playerAtFault ? 'hitRival' : 'hitByRival', { name: d.rival.name }, 1);
        break;
      case 'shove': this.say('shove', who, 2); break;
      case 'honk': if (d.atPlayer) this.say('honkPlayer', who, 1); break;
      case 'wrongWay': this.say(d.real ? 'wrongWayReal' : 'wrongWay', d, 2); break;
      case 'speeding': this.say('speeding', d, 1); break;
      case 'loiter': this.say(d.level === 2 ? 'loiter2' : 'loiter1', {}, 2); break;
      case 'falseStart': this.say('falseStart', {}, 2); break;
      case 'driveway': this.say('driveway', d, 3); break;
      case 'yellow': this.say('yellow', d, 2); break;
      case 'permitParked': this.say('permitParked', d, 2); break;
      case 'blockedParked': this.say('blockedParked', d, 2); break;
      case 'event':
        if (d.kind !== 'fakeSpace') this.say(d.kind, d, d.kind === 'permit' || d.kind === 'perfectSpot' || d.kind === 'vanGone' ? 3 : 2);
        break;
      case 'fooled': this.say('fooled', { ...who, street: d.street }, 1); break;
      case 'stall': this.say('stall', who, 1); break;
      case 'aborted': if (d.bay) this.say('aborted', { ...who, street: d.bay.street }, 1); break;
      case 'whistle': this.say('whistle', {}, 2); break;
      case 'cushion': if (d.speed > 9) this.say('cushion', {}, 1); break;
      case 'roundEnd': {
        this.frantic = false;
        if (d.result === 'victory') { this.say('victory', {}, 3); break; }
        if (d.playerOut) { this.say('eliminatedPlayer', {}, 3); break; }
        const names = d.out.map((c) => c.name);
        if (names.length) this.say(names.length > 1 ? 'eliminatedMany' : 'eliminatedRival', { names: names.length > 1 ? names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1] : names[0] }, 3);
        break;
      }
      case 'victory': if (d.champNext) this.say('champNext', {}, 2); break;
      case 'freePark': this.say(pickFrom(LINES.freePark[d.rating.key]), {}, 2); break;
      default: break;
    }
  }
}
