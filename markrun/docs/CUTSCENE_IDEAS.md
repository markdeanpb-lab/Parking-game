# MARKRUN cutscene catalogue

Ideation only. Nothing here is implemented. Pick, cut and remix.

The rule behind every idea: **the slowdown is real, the reason is made up.** Every cutscene is triggered by
something that genuinely happened in a runner's data. Finish times, positions and the race outcome are never
touched. A cutscene either pauses the broadcast clock and resumes at exactly the same race second, replays a
moment that already happened live, or plays as a picture-in-picture inset while the race keeps running.

---

## 0. What the data can and cannot support (read first)

I checked the history DB (98 performances: 85 `main`, 13 `novelty`) so the triggers below are real, not
hoped-for. Frequencies are **per runner** ("of 98 runs"). With 5 runners in a race, "per race" is roughly
`1 - (1 - p)^5`.

| Signal | Source | How often |
|---|---|---|
| A 250 m window run at least 25% slower than his own average (outside the Hill, start and finish) | `progress` | 29/98 runs (about 83% of races have one) |
| A 250 m window run at least 15% faster than his average | `progress` | 61/98 (almost every race) |
| The Hill, lap 1 (1720 m) | `HILL_M` | 200 m climb is median 1.14x his average pace, up to 1.32x |
| The Hill, lap 2 (4220 m) | `HILL_M` | median 1.18x, and slower than lap 1 in 67/98 runs |
| Fast start (first km at least 5% quicker than average) | `features.firstKmVsAvg` | 58/98 |
| Fast start then fade (`halfRatio > 1.04`) | `features` | about 50/98 |
| Negative split (`halfRatio < 1`) | `features.halfRatio` | 25/98 |
| Strong kick (last 400 m at least 8% quicker) | `features.kick` | 27/98. The last 200 m ran as fast as 0.57x average pace |
| Funfair diversion | `performances.diversions` | 6 runs (Easter and August 2022 to 2024). **Two per run**: about 360-820 m and about 2910-3370 m, bulging 43-50 m off course |
| Overtakes, lead changes, breakaway (gap > 60 m), late lead change (> 3500 m) | `analyse().events` | Most races |
| Lapping | derived | Very rare. Only when a 36-40 min novelty run meets a sub-19 run |
| Cold (≤ 2 °C) / freezing (≤ 0 °C) | `facts.weather` | 10 / 6 runs |
| Windy (≥ 25 km/h) / gusty (≥ 40 km/h gusts) | `facts.weather` | 10 / 12 |
| Rain (condition code 7-8) / measurable rain (> 0.3 mm) | `facts.weather` | 19 / 7 |
| Fog (code 5) or humidity ≥ 95% | `facts.weather` | 8 / 16 |
| "Heat" | `facts.weather` | **No true heat: the warmest is 19 °C.** 9 runs at ≥ 16 °C. Play it as a British heatwave |
| Ran ≥ 8 km the day before | `facts.day_before` | about 8 runs (longest 13 km) |
| Raced the day before (a mile race, track 5ks, a short race) | `facts.day_before` names | about 4 runs |
| Rode / swam / lifted weights the day before | `facts.day_before` sport | 2 / 1 / 1 |
| Taper week (`rel_week ≤ 0.4`) / big week (`≥ 1.8`) | `facts.rel_week` | 11 / 9 |
| PB at Finsbury | `facts.was_finsbury_pb` | 21/98 |
| Heart rate peak ≥ 195 | `performances.hr` | about 5 of 76 runs with HR |
| **Warm-up km** | `facts.warmup_km` | **0 for all 98 runs, so it cannot be used as a trigger** (fix the importer or drop the idea) |
| **Half marathon the day before** | n/a | **Never happened.** The closest is a 13 km run, or a race the day before |

Two quirks of the data make good comedy:

- **Each Mark brings his own weather.** The five runners come from five different Saturdays, so in one race
  one Mark may be in drizzle while the next is in winter sun. It's literally true, and very Looney Tunes.
- **The funfair is only there for one of them.** On a funfair weekend only that Saturday's Mark diverts.
  The other four run straight past a fair that, on their day, did not exist.

### Why the funfair felt like nothing happened

A diversion is about 400-450 m, roughly 80-120 race seconds. In the middle of the broadcast the clock runs
at roughly 10-15 race seconds per screen second, so the whole detour is over in under 10 s of screen time.
The camera stays on a tight long-lens track, so you never see the fair or the bulge in the route. Section 1
fixes this with a sign, a local time-stretch, a wide shot and a set piece.

### Cutscene modes (used throughout)

| Mode | Clock | Use for |
|---|---|---|
| **REPLAY** | Paused. The live event already happened on screen, then we cut to "ACTION REPLAY" for the comic reason | Slowdowns and overtakes. Feels like real sports TV, because the viewer sees the real effect first, then the reason |
| **FREEZE** | Paused before the event. Freeze-frame plus a cartoon caption, play the gag, then unfreeze at the same race second | Things "about to happen": surges, diversions, the Hill |
| **INSET** | Running. A picture-in-picture box, 2-4 s | Small gags, overtakes, anything in a busy patch |
| **STRETCH** | Running, slowed. A local slow-down of the shared time map, the same for every runner, so relative positions are untouched (the existing invariant) | Making a real event readable: funfair, a late lead change |
| **PRE-ROLL / POST** | Not running yet, or already ended | Start-line and finish gags, so no pause cost at all |

---

## 1. Signature funfair sequences (the fix for the complaint)

Every funfair sequence follows the same five-beat recipe, so that the funfair is **obvious**, **visible** and
**explained**:

1. **Warning (live, 2 s).** A big yellow diamond road sign, "DIVERSION →", pops up on the path. Marshal
   Maureen swings a paddle. Jeff: *"Hang on, hang on, there's a DIVERSION!"*
2. **Stretch.** Slow the shared time map to about 3x real time across the diverted runner's `fromM` to `toM`.
3. **Wide establishing shot (3 s).** A drone or helicopter shot of the whole fair: Ferris wheel, carousel,
   helter-skelter and bunting. The normal course is drawn as a white line, and the diverted runner's real
   route (`diversions[].path`) is drawn as a glowing Indiana-Jones-map dotted line bulging round the fair. The
   other four Marks carry on along the white line.
4. **Set piece (FREEZE, 5-8 s).** One of the gags below, played at the fair.
5. **Rejoin (live, 2 s).** A course-side camera catches him popping back out through the hedge or entrance
   arch, with a "BACK ON COURSE" stamp. Then a data-true payoff line:
   - If his pace through the diversion was within ±3% of his average: Pam: *"And he's lost... no time at all.
     Suspicious."*
   - If it was slower: Jeff: *"That cost him [n] seconds!"* (computed from `progress` against his average)
   - If it was faster: Pam: *"He came out quicker than he went in. I want a steward's enquiry."*

Because every funfair runner diverts **twice**, each sequence is written as a **lap 1 set-up and lap 2
payoff**. Lap 2 can be an INSET if the pause budget is tight.

The five signatures:

### F1. Test Your Strength
- **Trigger:** Funfair diversion (6 runs, 2 per run). Use the slow variant when the lap 1 detour pace is ≥ 3%
  slower than his average, and the launch variant when it is faster.
- **Gag:** Lap 1: he grabs the mallet, swings, and the puck creeps up the scale past "WEED" and "WOBBLY"
  and stops at "PARKRUNNER". He shrugs and jogs off. Lap 2: same stall, he takes a run-up, DING! The bell
  launches off the top, sails over the fair and lands in the boating lake. A duck surfaces wearing it.
  - Launch variant: he stands on the lever himself, the stallholder hits the other end, and he is
    catapulted over the hedge back onto the course.
- **Duration:** 6 s plus a 4 s payoff
- **Build:** M. A new strongman tower with a scale ("WEED / WOBBLY / PARKRUNNER / LEGEND / JEFF"), a mallet, a
  puck and a bell
- **Variants:** The top rung reads "PAM" on a rare roll. The goose rings it first. The bell lands on Jeff's
  commentary box (cut to Jeff, dazed, still talking).

### F2. Hook-a-Duck Hustle
- **Trigger:** Funfair diversion, any. This uses the **existing** hook-a-duck stall.
- **Gag:** He leans over the stall with a hook pole and fishes. Every duck dodges, and one is clearly Gerald
  the Goose in a duck costume. He finally hooks one and wins a giant plush goose, which he carries, sprinting,
  back onto the course. Lap 2: he passes the stall and hands the plush back. The stallholder gives him a
  bigger one.
- **Duration:** 7 s
- **Build:** S-M. Reuses the stall; needs a pole, a plush prop and a carry pose
- **Variants:** The prize is a goldfish-shaped balloon that floats him an inch off the ground for a few steps.
  Pam wins instead (cut to her box holding a duck). The plush appears again on the podium at the end of the
  race.

### F3. Candyfloss Cumulus
- **Trigger:** Funfair diversion. Slower than average gives the "sticky" variant; faster gives the "nimbus"
  variant.
- **Gag:** He runs straight through the candyfloss stall and comes out wearing an enormous pink beehive. A
  flock of pigeons, led by Clive, follows him nibbling it. By the rejoin it's gone, and Clive burps.
  - Nimbus variant: the floss forms a cloud he rides like a magic carpet back onto the course.
- **Duration:** 6 s
- **Build:** M. A floss stall and spinning drum, a pink "hair" mesh that shrinks, and a pigeon flock
  (boids-lite)
- **Variants:** Blue floss. A wasp follows instead of pigeons. A floss moustache. Pam: *"That's his lunch
  sorted."*

### F4. Waltzer Whirl
- **Trigger:** Funfair diversion. Lap 1 slow, lap 2 fast (the commonest pairing; flip it when the data
  flips).
- **Gag:** He hops into a waltzer car. The operator gives it a spin ("SCREAM IF YOU WANT TO GO FASTER" flashes
  on the canopy). He climbs out dizzy and runs in wobbly spirals with cartoon birds circling his head. The
  spiral path improbably lands him exactly back on the course line.
  - Lap 2: he gets in again, is spun up to speed, and is flung out like a slingshot.
- **Duration:** 7 s
- **Build:** L. A new waltzer platform with 5 tub cars, a spinning operator, a dizzy-walk cycle and a stars
  halo
- **Variants:** The goose is the operator. He spins so fast he comes out facing backwards and runs the first
  10 m in reverse. A carousel version reuses the **existing** carousel: he mounts a horse that gallops off the
  platform.

### F5. Dodgem Dash
- **Trigger:** Funfair diversion. Good for the run with the **biggest** bulge (`maxOffM` ≥ 47).
- **Gag:** He vaults into a dodgem. Sparks crackle on the ceiling mesh. He is bumped by a toddler, a granny
  and Gerald the Goose (wearing goggles). He finds the gap, drives out of the exit ramp, ditches the car at
  the hedge and runs. Lap 2 INSET: the goose is still driving, alone, doing donuts.
- **Duration:** 7 s
- **Build:** L. A new dodgem floor with 6 cars and pole sparks; the runner in a seated pose
- **Variants:** He signals to turn with his arm in the car. A traffic warden marshal gives him a ticket. Pam:
  *"No insurance."*

### Extra funfair beats (to rotate across a night)
- **F6. Helter-Skelter Shortcut** (existing prop): he climbs the stairs with a mat, slides, and skids
  out of the bottom straight back onto the course. *(S-M)*
- **F7. Ferris Wheel Scout** (existing prop): one revolution; at the top he scouts the field with
  binoculars, sees the leader, panics, and slides down a spoke. *(M)*
- **F8. Fortune Teller:** a tent, a crystal ball, and the ball shows his finish time as "??:??". Pam:
  *"Spoilers."* Never show the real time before the finish. *(S)*
- **F9. Coconut Shy:** he throws, misses, and the coconut boomerangs back; he heads it like a footballer.
  *(S)*
- **F10. The Ghost Fair (INSET, live):** a non-funfair Mark runs past the fair. For him it is translucent and
  shimmering, because on his Saturday it wasn't there. Jeff: *"Why isn't HE going in?"* Pam: *"Not his
  weekend, Jeff."* *(S as a shader on the fair group)*

---

## 2. Mid-race slowdowns

**Shared trigger.** Take the runner's worst 250 m window (10 progress steps), excluding the first 100 m, both
Hill climbs (1720-1960 m and 4220-4460 m), and the final 300 m. Fire when pace ≥ 1.20x his own average
(`officialS/5000` s per metre). Then **tag the window by course zone** so the gag fits the scenery:
start arch, the funfair strip, the tree avenue (about 800-1310 m and 3300-3810 m), playground, tennis,
the boating lake (about 2000-2250 m) and the café kiosks. Default mode: REPLAY, so the viewer has already
seen him drop back live.

### A1. Goose Toll Booth
- **Trigger:** Slow window in the boating-lake zone, or any zone if the goose's night arc says so. Fires in
  about 1 race in 4.
- **Gag:** Gerald the Goose steps out and lowers a tiny red-and-white barrier. He holds out a wing. Mark pats
  his pockets and pays with a jelly baby. The goose stamps his hand and lifts the barrier. Jeff: *"He's been
  TOLLED!"* Pam: *"Contactless was down."*
- **Duration:** 6 s, REPLAY
- **Build:** M. The goose rig, a barrier and a pocket-pat
- **Variants:** The goose scans his barcode with its beak. Two geese mean "peak-time pricing". The goose
  waves him through and tolls the next runner instead.

### A2. The Puddle of Destiny
- **Trigger:** Slow window in the first 600 m, or any zone on a wet day (rain code 7-8). About 1 race in 5.
  Easter egg: one of his own run notes blames a puddle on the first corner. Mention it only after the reveal.
- **Gag:** A puddle grows to pond size. He tiptoes round its rim like a tightrope walker, arms windmilling. A
  duck in a rubber ring paddles past. He makes it, dry, and a passing dog shakes itself all over him.
- **Duration:** 5 s, REPLAY
- **Build:** M. A scaling water decal, a tightrope walk cycle, and a dog shake
- **Variants:** The puddle has a "DEEP END" sign. He builds a bridge from a twig. It's frozen and he goes
  curling across (see the weather section).

### A3. Squirrel Standoff
- **Trigger:** Slow window in the tree avenue. About 1 race in 5.
- **Gag:** A Western standoff. A leaf blows across like tumbleweed. A squirrel and Mark eye each other in
  extreme close-up. The squirrel "draws"... an acorn. They mirror each other side-to-side three times, then the
  squirrel tips an imaginary hat and lets him pass.
- **Duration:** 6 s, REPLAY
- **Build:** M. Squirrel rig, close-up eye shots, a whistle sting
- **Variants:** Three squirrels (the Squirrel Syndicate). The squirrel throws a conker that bounces off his
  head. Mark offers a jelly baby as a peace treaty.

### A4. Laces of Doom
- **Trigger:** Fallback for any slow window with no zone-specific gag. Very common.
- **Gag:** A magpie ties his laces together. He bunny-hops three times, kneels and unties them, and the knot
  becomes a perfect gift bow.
- **Duration:** 5 s, REPLAY
- **Build:** S. A hop cycle and a magpie
- **Variants (by personality):**
  - Kit Obsessive: speed-laces snap like catapults.
  - Superstitious: re-ties in a lucky order and kisses the shoe.
  - Grump: glares at the magpie, and the magpie apologises.

### A5. Selfie Ambush
- **Trigger:** Slow window near the start arch, the lake, or a crowd zone. About 1 race in 6.
- **Gag:** A tourist with a selfie stick steps across the path. Mark involuntarily stops and does a
  thumbs-up. The flash freezes him to a grey statue for a beat, then he cracks free. Pam: *"Pictured:
  regret."*
- **Duration:** 4 s, INSET or FREEZE
- **Build:** S
- **Variants:** Showboat does three poses. Enigma puts on sunglasses. A whole coach party lines up.

### A6. The Smell of Bacon
- **Trigger:** Slow window near the café kiosks. About 1 race in 6. Weighted to the Snack Strategist
  personality.
- **Gag:** A visible cartoon aroma ribbon curls out of the café and forms a beckoning finger. It lifts him by
  the nose and floats him towards the counter. A sign, "QUEUE: 45 MINS", breaks the spell and he drops back
  onto the path.
- **Duration:** 6 s, REPLAY
- **Build:** M. A ribbon spline and a float pose
- **Variants:** A croissant. A flat white with a steam heart. A sausage roll. The Snack Strategist pockets a
  pastry on the way past.

### A7. High-Five Gauntlet
- **Trigger:** Slow window by a playground or marshal point. About 1 race in 6. Weighted to Ray of Sunshine
  and Showboat.
- **Gag:** A row of kids and one marshal with hands up. He cannot refuse: a xylophone note for each high five
  in fast cuts. The last kid pulls a "too slow!" and he falls for it.
- **Duration:** 5 s, REPLAY
- **Build:** M. Reuses the crowd system
- **Variants:** The goose is at the end of the row. Jeff counts aloud: *"EIGHT! NINE! TEN!"* A double-hand
  slap that spins him round.

### A8. Satellite Search
- **Trigger:** A short, sharp slowdown (≥ 1.3x over 100 m) with no better zone gag. Weighted to Data Nerd and
  Kit Obsessive.
- **Gag:** He stops and stares at his watch, which shows a spinning globe. Up in the sky, three cartoon
  satellites argue and point in different directions. One gives a thumbs-up and he's off. Pam: *"Searching for
  satellites. Or meaning."*
- **Duration:** 5 s, FREEZE
- **Build:** S-M. Sky satellites
- **Variants:** The watch says "Are you still running?" He wears three watches, and they disagree.

### A9. Pram Convoy
- **Trigger:** Slow window in the tree avenue or a narrow section. About 1 race in 8.
- **Gag:** Three prams side by side, parents chatting. He tries left, he tries right, then limbos under a dog
  lead strung between two of them.
- **Duration:** 6 s, REPLAY
- **Build:** M. A pram prop and a limbo pose
- **Variants:** A dog-walker with nine dogs. A brass band. A family of ducks crossing in single file (he
  holds up traffic like a lollipop man).

### A10. The Sneeze
- **Trigger:** Slow window in the tree avenue on a spring date (March to June).
- **Gag:** Blossom petals spiral up his nose. "Ah... ah..." The sneeze recoils him 10 m backwards,
  cartoon-style, with his legs spinning on the spot. Then he recovers. Jeff: *"Bless you!"*
- **Duration:** 4 s, REPLAY
- **Build:** S. A petal burst and a recoil
- **Variants:**
  - Autumn: he vanishes into a leaf pile and pops out wearing it.
  - Winter: a snowflake lands on his tongue.

### A11. The Stitch Tailor
- **Trigger:** Slow window in km 2-3 **after** a fast first km (`firstKmVsAvg ≤ -0.05`). Common, about 1
  race in 3.
- **Gag:** A tiny tailor gremlin with a thimble sews his side as he runs. He hops on one leg while it finishes,
  bites off the thread, and tips its hat.
- **Duration:** 5 s, REPLAY
- **Build:** M. The gremlin rig
- **Variants:** The gremlin uses a sewing machine. It's measuring him for a suit. It hands him an invoice.

### A12. Lost Jelly Baby
- **Trigger:** Generic fallback.
- **Gag:** He drops a jelly baby and searches with a giant magnifying glass. It is stuck to his own forehead.
  A pigeon takes it.
- **Duration:** 4 s, REPLAY
- **Build:** S
- **Variants:** A key. A gel. His barcode.

### A13. Tennis Rally
- **Trigger:** Slow window by the tennis courts.
- **Gag:** A stray tennis ball bounces across the path. He returns it with his water bottle. A full rally
  breaks out over the fence, with an umpire chair calling "OUT!" He jogs on. Jeff: *"Fifteen-love to the
  runner!"*
- **Duration:** 6 s, REPLAY
- **Build:** M. Ball arcs and a bottle swing
- **Variants:** The ball is served by the goose. He wins the point and bows. A ball hits Pam's flask.

---

## 3. Surges and speed-ups

**Shared trigger.** His best 250 m window at ≤ 0.85x average pace (common), or a "burst": 100 m at ≥ 25%
quicker than his rolling 500 m pace. Default mode: FREEZE just before the burst, so the cause lands and then
the real surge plays live.

### B1. Bee in the Shorts
- **Trigger:** Any surge. Fallback.
- **Gag:** A buzzing bee draws a loopy flight path on screen. Mark's eyes widen and his legs blur into a
  figure-eight. He leaves a Mark-shaped dust cloud behind.
- **Duration:** 4 s, FREEZE
- **Build:** S. A dust-cloud silhouette and a leg-blur
- **Variants:** A wasp. A swarm shaped like an arrow. The bee has a tiny bib number.

### B2. The Ice-Cream Van Jingle
- **Trigger:** A surge on a run at ≥ 12 °C, or near the café. About 1 race in 5.
- **Gag:** Dairy Dave's van pulls up beside the course playing its tinny tune. Mark speeds after it. The van
  drives off at exactly his speed, forever just out of reach. The back sign reads "SORRY, SOLD OUT OF 99s".
- **Duration:** 5 s, FREEZE then live
- **Build:** M. The van, a jingle and a chase pose
- **Variants:** The van reverses into view. Pam gets the last cone. The jingle is a slowed-down version of the
  MARKRUN theme.

### B3. Rival Pigeon
- **Trigger:** Any surge, with a recurring-character cooldown.
- **Gag:** Clive the pigeon struts beside him at running pace, head-bobbing mockingly. Mark notices; steam
  comes out of his ears. He surges, and Clive flaps off, leaving a feather in his headband.
- **Duration:** 5 s, REPLAY
- **Build:** M. A pigeon walk cycle
- **Variants:** Clive wears sunglasses. Clive flies alongside like a jet. Two pigeons draft each other.

### B4. Downhill Bowling Ball
- **Trigger:** His fastest 250 m window starts within 300 m after the Hill crest (about 1960-2260 m or
  4460-4700 m; the lap 2 version must end before the last 300 m). Common.
- **Gag:** He curls into a ball and rolls downhill like a bowling ball. He skittles a row of cones ("STRIKE!"),
  then uncurls running. Marshal Maureen resets the cones.
- **Duration:** 5 s, REPLAY
- **Build:** M. A ball-form swap and cone physics (faked)
- **Variants:** Spare (one cone wobbles and stays up). He surfs down on a picnic tray. The goose is the last
  pin.

### B5. Rocket Fuel Gel
- **Trigger:** The largest single surge in the race (burst ≥ 30%).
- **Gag:** He produces a gel labelled "ROCKET FUEL (BANANA)" and gulps it. His face goes red from the collar
  up like a thermometer, steam whistles from his ears, and he blasts off leaving smoke rings shaped like
  footprints.
- **Duration:** 5 s, FREEZE
- **Build:** M. A colour sweep and smoke rings
- **Variants:** A flapjack. A jelly baby the size of a loaf. A Victoria sponge.

### B6. Did I Leave the Hob On?
- **Trigger:** A surge in lap 2 not explained by anything else.
- **Gag:** A thought bubble appears: a hob glowing red. He gasps and accelerates. Pam: *"He's left the hob
  on."*
- **Duration:** 4 s, FREEZE
- **Build:** S. Thought-bubble cards
- **Variants:** Parking meter running out. The café's last pastry. A pigeon on his car.

### B7. Spurred On by a Kid
- **Trigger:** A surge or overtake on the Hill or in km 4.
  - Real nod, anonymised: one run note says a kid tried to take him on the Hill. Never use names, kit or
    clubs.
- **Gag:** A small kid in a generic sports kit draws level and gives him a cheeky look. Mark finds another
  gear. At the top they fist-bump, and the kid gets a bigger cheer than he does.
- **Duration:** 5 s, REPLAY
- **Build:** M. A kid rig from the crowd library
- **Variants:** It's a granny with walking poles. It's the snail. It's Biscuit the dog.

---

## 4. The Hill (fires in every race; use at most one per race)

### C1. Everest Expedition
- **Trigger:** The runner with the biggest lap 1 Hill ratio (`HILL_M[0]`), when ≥ 1.18x.
- **Gag:** The camera dutch-tilts until the Hill looks vertical. Snow appears on the top. A marshal Sherpa
  offers an oxygen mask, which is Pam's tartan flask. He plants a flag at the summit. Pam: *"It's about
  fourteen metres high, Jeff."*
- **Duration:** 7 s, FREEZE
- **Build:** M-L. Camera roll, a snow decal, a flag and the flask
- **Variants:** Base camp with tents. A yeti marshal. Jeff on a walkie-talkie: *"Base camp to Mark!"*

### C2. The Treadmill Hill
- **Trigger:** Lap 2 Hill slower than lap 1 (67/98 runs). Pick the runner with the biggest lap 2 versus lap 1
  difference.
- **Gag:** A Hanna-Barbera background loop: he runs past the same tree, the same bench, and the same goose
  three times. On the third pass he notices. The goose waves.
- **Duration:** 6 s, REPLAY
- **Build:** M, but cheap: a looping background plate
- **Variants:** The same marshal says "Nearly there!" three times. The same "THE HILL" sign keeps
  reappearing. The pigeon is reading a newspaper.

### C3. Snail Overtake
- **Trigger:** The slowest climber on the lap 2 Hill (≥ 1.25x).
- **Gag:** A snail wearing a tiny bib glides past him with speed lines and a whoosh. Pam: *"Snail's on for a
  PB."*
- **Duration:** 4 s, INSET
- **Build:** S
- **Variants:** A tortoise. A pensioner on a mobility scooter. A slug in a skinsuit.

### C4. The Hill Wakes Up
- **Trigger:** Lap 2 Hill, when 3+ runners hit it within 20 race seconds of each other.
- **Gag:** The Hill opens a sleepy face, yawns, and stretches visibly taller. The sign flips from "THE HILL"
  to "THE HILL 2: HILL HARDER".
- **Duration:** 5 s, FREEZE
- **Build:** M. A morph target on the hill mesh, and a sign flip
- **Variants:** The Hill sighs and shrinks for the leader. It winks at Pam.

### C5. Mountain Goat
- **Trigger:** A runner climbs the Hill at ≤ 1.06x his average (rare, about 1 race in 8).
- **Gag:** Little horns and a goat bell appear. He bounds up rocks that aren't there. Jeff: *"He's a MOUNTAIN
  GOAT!"*
- **Duration:** 4 s, INSET
- **Build:** S. Horn and bell accessories
- **Variants:** Spring-loaded shoes. A chairlift. A ski-jump off the crest.

### C6. Summit Flag Swap
- **Trigger:** A lead change or overtake on the Hill.
- **Gag:** The first man over the crest plants a little flag. The next arrival plucks it and plants his own.
- **Duration:** 3 s, INSET
- **Build:** S
- **Variants:** A Union Jack bunting war. The goose plants a breadcrumb flag.

---

## 5. Overtakes, lead changes and gaps

### D1. Mirror, Signal, Manoeuvre
- **Trigger:** An `overtake` event, especially one involving a backed runner. Several per race; use 1-2.
- **Gag:** The passer sprouts a wing mirror on his shoulder, checks it, flicks an arm indicator ("tick-tock"),
  and pulls out. The overtaken runner gets a "PARP PARP" horn and a dust cloud.
- **Duration:** 4 s, INSET
- **Build:** S. A mirror prop, an arm pose and a horn SFX
- **Variants:** A learner "L" plate. A hazard-lights double blink. Undertaking on the inside, with a tut from
  Pam.

### D2. Slipstream Slingshot
- **Trigger:** An overtake where the passer sat within 5 m behind for ≥ 30 race seconds first.
- **Gag:** Wind-tunnel airflow lines over the front man. The passer tucks in like a cyclist, then pings out
  like an elastic band.
- **Duration:** 5 s, REPLAY
- **Build:** M. Airflow line FX
- **Variants:** He rides a little shopping trolley in the slipstream. A peloton of ducks behind him.

### D3. The Crown Hops
- **Trigger:** A `lead_change` event.
- **Gag:** A tiny cardboard "LEADER" crown leaps from one head to the next. The old leader pats his bare head,
  confused.
- **Duration:** 3 s, INSET (cheap enough to use every time)
- **Build:** S
- **Variants:** A leader's balloon on a string. The goose follows the leader. A spotlight.

### D4. Mind the Gap
- **Trigger:** A `breakaway` event (gap > 60 m). About half of races.
- **Gag:** A Tube chime and "Mind the gap". A rubber band stretched between the leader and second place
  twangs, stretches, and SNAPS. Second place boings backwards. Jeff: *"He's GONE!"*
- **Duration:** 5 s, FREEZE
- **Build:** M. A band spline and a snap
- **Variants:** "This is a Victoria line service to the finish." The doors close on the chaser.

### D5. Late Lead Change Eyes
- **Trigger:** `lateLeadChange` (> 3500 m), and only if it is before the final 300 m.
- **Gag:** The overtaken leader's eyes pop out on stalks for a beat, then snap back. He grits his teeth.
- **Duration:** 3 s, INSET with a short STRETCH
- **Build:** S
- **Variants:** His jaw hits the floor. His hair stands on end. Pam spits out her tea.

### D6. A Very British Overtake
- **Trigger:** An overtake where either runner is Ray of Sunshine, Old Hand or Horizontal, or an overtake that
  takes more than 15 race seconds.
- **Gag:** Both runners say "sorry" (speech bubbles) three times, gesture "after you", and hold an imaginary
  door. A small queue of ducks forms behind them.
- **Duration:** 4 s, INSET
- **Build:** S
- **Variants:** They shake hands. One offers a biscuit. Pam: *"Very British overtake."*

### D7. Lapped!
- **Trigger:** The leader passes a runner a full lap (2500 m) behind. Rare: it needs a slow novelty run plus a
  fast PB run.
- **Gag:** The leader whooshes past, and the lapped runner spins like a top. When he stops, he gives a
  gracious royal wave.
- **Duration:** 4 s, INSET
- **Build:** S
- **Variants:** He holds up a "WELL DONE" card. He offers a jelly baby.

### D8. The Yo-Yo
- **Trigger:** The same pair swaps places 3+ times in `events`.
- **Gag:** They are visibly joined by a bungee cord, pinging back and forth, until they're tangled together
  and have to untangle.
- **Duration:** 6 s, REPLAY
- **Build:** M. A cord spline
- **Variants:** A three-legged-race tie. A tug-of-war rope. Pam: *"Get a room."*

---

## 6. Whole-race pacing shapes

### E1. Human Cannonball
- **Trigger:** A fast start (`firstKmVsAvg ≤ -0.06`), and the most extreme in the field. Most races.
- **Gag:** At the gun, a circus cannon BOOMs and fires him off the line ahead of everyone. Jeff: *"He's shot
  out like a cannonball!"*
- **Duration:** 3 s, an INSET in the start pre-roll
- **Build:** S-M. The cannon and a smoke puff
- **Variants:** A catapult. A champagne cork. A greyhound trap. Callback: see E2.

### E2. Spaghetti Legs
- **Trigger:** A fade (`halfRatio ≥ 1.05` after a fast start), firing at that runner's worst lap 2 window.
  Most races have one; it pairs with E1.
- **Gag:** His legs turn into wobbly spaghetti; a meatball rolls past. He wobbles on, determined. Pam: *"The
  cannonball's run out of cannon."*
- **Duration:** 5 s, REPLAY
- **Build:** M. A vertex-wobble shader on the legs
- **Variants:** Jelly legs. Noodle legs. Accordion legs.

### E3. Low Battery
- **Trigger:** A fade, as an alternative to E2.
- **Gag:** A phone battery icon above his head drains to red 1% with a sad "bloop". Marshal Maureen plugs
  him into a lamppost with a long cable. A lightning bolt, then he unplugs and plods on.
- **Duration:** 6 s, REPLAY
- **Build:** M
- **Variants:** "Low fuel" petrol light. A wind-up key in his back that a kid winds.

### E4. The Sleepy Starter
- **Trigger:** A negative split (`halfRatio ≤ 0.97`). About 3 races in 4 have one.
- **Gag:**
  - Pre-roll: he's in a deckchair under a newspaper as the others line up.
  - Lap 2 (FREEZE): an alarm clock rings, he flings off a dressing gown to reveal race kit, and goes.
- **Duration:** 3 s plus 5 s
- **Build:** M. A deckchair, an alarm clock and a gown
- **Variants:** A sleeping bag. Earplugs. A rooster.

### E5. Metronome Man
- **Trigger:** Very even pacing: all five km splits within ±1.5% of the average. Uncommon.
- **Gag:** A metronome ticks over his head. Pam sets her egg timer by him. At the finish she peels a perfect
  boiled egg.
- **Duration:** 4 s, INSET
- **Build:** S
- **Variants:** A cuckoo clock. Big Ben chimes. A conductor's baton.

### E6. The Kilometre Black Hole
- **Trigger:** His slowest km (`features.slowestKm`) is km 2, 3 or 4 and ≥ 5% slower than his average.
- **Gag:** The colours desaturate. Melting clocks hang off the trees. He runs in treacle slow-motion with a
  "boing" soundtrack, then pops out back into colour.
- **Duration:** 6 s, REPLAY
- **Build:** M-L. A post-process tint, clock props and a slow-mo blend
- **Variants:** A Bermuda Triangle sign. Fog. A wormhole spits him out.

### E7. Second Wind (literally)
- **Trigger:** A fast window within 600 m after a slow window.
- **Gag:** A little cloud with puffed cheeks blows him along from behind.
- **Duration:** 4 s, INSET
- **Build:** S
- **Variants:** It's the same rain cloud from J1. It runs out of breath and coughs.

### E8. Turbo Kick
- **Trigger:** A strong kick (`kick ≤ -0.10`). It happens in the final 400 m, so **never pause**: run it as
  a live overlay or as a post-race replay.
- **Gag (live overlay):** Speed lines, and his legs blur into a spinning wheel. "PARP PARP".
- **Gag (post-race replay):** The same, plus a flame trail that scorches a "MARKRUN" logo into the grass.
- **Duration:** 3 s live, 5 s replay
- **Build:** S

---

## 7. Back of the field

### H1. Tail Walker's Footsteps
- **Trigger:** A runner who is last for ≥ 60% of race time.
- **Gag:** A hi-vis tail walker creeps up behind him. Every time Mark glances back, the tail walker freezes
  and pretends to admire a tree. It's Grandmother's Footsteps.
- **Duration:** 5 s, REPLAY
- **Build:** S-M
- **Variants:** The tail walker hides behind a bin. He's on a deckchair with wheels. He whistles innocently.

### H2. The Cone Collector
- **Trigger:** Last place in lap 2.
- **Gag:** A volunteer behind him collects cones faster than he can run. The stack grows comically tall,
  sways, and topples onto Jeff's box.
- **Duration:** 5 s, REPLAY
- **Build:** M

### H3. Duck Cheer Squad
- **Trigger:** Last place on a steady run (no big slow windows).
- **Gag:** The ducks line the path and cheer. One holds a tiny banner: "GO ON SON".
- **Duration:** 3 s, INSET
- **Build:** S

### H4. The Scenic Route
- **Trigger:** The runner's official time is ≥ 25% slower than the field median. Mostly `novelty` runs (13
  runs, 26-40 min), several of which were him running with a friend.
- **Gag:** He jogs along chatting to a cartoon running buddy. Their speech bubbles are pictograms: a kettle, a
  cat, a holiday, a sausage roll. He stops to smell a flower.
- **Duration:** 5 s, INSET
- **Build:** M. A buddy character (generic, never a real person)
- **Variants:** He's carrying a coffee. He's reading a newspaper while running. Downhill, the buddy grabs his
  hand and they gallop.

---

## 8. Context facts (bets are locked, so these are safe to show)

### G1. Legs of Lead
- **Trigger:** `day_before` has a run ≥ 8 km (about 8 runs), **and** he is slow on the lap 2 Hill or fades.
- **Gag:** His legs turn to cast iron with a stamped label, "10K YESTERDAY". CLANK, CLANK footsteps. A magpie
  lands on them and slides off.
- **Duration:** 5 s, REPLAY
- **Build:** M. A material swap and a stamp decal
- **Variants:** Anchors. Concrete wellies. Lead diver's boots.

### G2. Yesterday's Medal
- **Trigger:** `day_before` activity name looks like a race (mile, 5000s, 5ks, "1st"). About 4 runs.
- **Gag:** He's wearing an enormous gold medal. It gets heavier step by step, like an anchor. He takes it off,
  hangs it on the goose, and speeds up.
- **Duration:** 5 s, REPLAY or FREEZE
- **Build:** M
- **Variants:** A trophy in his arms. A champion's sash snagging on bushes.

### G3. Wrong-Sport Muscle Memory
- **Trigger:** `day_before` sport is Ride, Swim or WeightTraining (4 runs).
  - Ride: his legs start pedalling in mid-air, and he rings an imaginary bell.
  - Swim: goggles on, front-crawl arms down the avenue, breathing every three.
  - Weights: he stops to deadlift a park bench.
- **Duration:** 4 s, INSET
- **Build:** S each

### G4. Fresh as a Daisy
- **Trigger:** A taper week (`rel_week ≤ 0.4`, 11 runs) and he runs faster than his median.
- **Gag:** Flowers sprout in his footprints; bluebirds circle. Pam: *"Rested. It's disgusting."*
- **Duration:** 4 s, INSET
- **Build:** S

### G5. The Training Diary
- **Trigger:** A big week (`rel_week ≥ 1.8`, 9 runs) plus a slow window.
- **Gag:** A huge training log is chained to his ankle, pages flapping in the wind.
- **Duration:** 5 s, REPLAY
- **Build:** M

### G6. Cobwebs
- **Trigger:** `days_since_last_run ≥ 14`.
- **Gag:** Start pre-roll: he's coated in cobwebs. A spider abseils off his cap and he blows dust off his
  sleeve.
- **Duration:** 4 s, PRE-ROLL
- **Build:** S

### G7. Saving It for Later
- **Trigger:** `race_upcoming` within 21 days, and an even, controlled run.
- **Gag:** He carries a piggy bank labelled "FOR LATER" and visibly refuses to spend anything. At the
  finish, he gives it a shake: it rattles.
- **Duration:** 5 s, INSET plus a post beat
- **Build:** S

### G8. First Time Here
- **Trigger:** `finsbury_number == 1`.
- **Gag:** He's holding a paper map upside-down at the start. Marshal Maureen turns it round for him.
- **Duration:** 3 s, PRE-ROLL
- **Build:** S

### G9. Kettle Head
- **Trigger:** HR peak ≥ 195 bpm (about 5 runs), shown at the moment of the peak, but not in the final 300 m.
- **Gag:** His head whistles like a kettle and steam puffs out. Cut to Pam calmly pouring tea from... somewhere.
- **Duration:** 4 s, INSET
- **Build:** S
- **Variants:** A pressure gauge. A steam train whistle.

### G10. Golden Barcode
- **Trigger:** `was_finsbury_pb`. Only after the finish and reveal.
- **Gag:** His barcode glows gold to an angelic choir "aaah". The goose bows.
- **Duration:** 4 s, POST
- **Build:** S

### G11. Milestone Confetti
- **Trigger:** `finsbury_number` is a round milestone (25, 50, 75, or the 90s). Post-finish only.
- **Gag:** A confetti cannon misfires, and then goes off ten seconds later all over Pam.
- **Duration:** 4 s, POST
- **Build:** S

---

## 9. Start-of-race gags (PRE-ROLL, no clock cost)

### S1. Jeff's False Start
- **Trigger:** Any race. Weighted to a Bag of Nerves runner in the line-up.
- **Gag:** Jeff: *"And they're... GOing to be under starter's orders any moment!"* The nervous runner bolts on
  "GO", gets 10 m, freezes, and moonwalks back to the line. Pam: *"Well done, Jeff."*
- **Duration:** 5 s
- **Build:** S. Reverse walk
- **Variants:** Jeff sneezes "HA-GO!". A car alarm. The goose honks and three of them go.

### S2. The Briefing That Never Ends
- **Trigger:** The first race of the night.
- **Gag:** The run director's briefing drags on. Runners' heads droop, a cobweb forms between two of them, a
  duck nods off. A whistle wakes everyone.
- **Duration:** 6 s
- **Build:** M

### S3. Barcode Panic
- **Trigger:** Any race, rare.
- **Gag:** One runner pats every pocket frantically. The barcode is stuck to his forehead. Pam: *"No barcode,
  no time."*
- **Duration:** 4 s
- **Build:** S

### S4. The Late Arrival
- **Trigger:** The runner with the slowest first 100 m in the field.
- **Gag:** As the gun goes, he sprints in from the café, flat white held high, and dumps it on Pam's desk.
- **Duration:** 4 s
- **Build:** S-M

### S5. The Starter's Pistol
- **Trigger:** Any race.
- **Gag:** The starter fires, and a "BANG!" flag pops out of the barrel. Nobody moves. The goose honks and
  everyone goes.
- **Duration:** 3 s
- **Build:** S

### S6. Domino Lunges
- **Trigger:** A Showboat in the line-up.
- **Gag:** He does an elaborate stretch. The others copy, then he copies them, then a domino of lunges topples
  the end runner.
- **Duration:** 5 s
- **Build:** M

---

## 10. Finish-line gags (POST only: after the final 300 m, or after the last finisher)

### X1. The Wildlife Photographer
- **Trigger:** A photo finish: adjacent finishers ≤ 1.0 s apart, or `winningMarginS ≤ 1`.
- **Gag:** Pam steps out with a comically long telephoto lens. Print 1 is the goose's backside. Print 2 is the
  real finish, nose-to-nose, with Jeff holding a ruler against the screen.
- **Duration:** 7 s, POST
- **Build:** M. A print card with a frozen frame of the real finish
- **Variants:** Print 1 is Jeff's thumb. A Polaroid shake. A pigeon photobomb.

### X2. Nose Job
- **Trigger:** Margin ≤ 0.3 s.
- **Gag:** In the photo, the winner's nose stretches Pinocchio-style across the line.
- **Duration:** 4 s, POST
- **Build:** S

### X3. The Dip
- **Trigger:** A sprint finish (`kick ≤ -0.15`) by a top-2 finisher.
- **Gag:** In the replay his lean goes so far he's horizontal. He curling-stones through the funnel on his
  chest while Marshal Maureen sweeps the ground ahead with a broom.
- **Duration:** 5 s, POST
- **Build:** M

### X4. Knee Slide Splashdown
- **Trigger:** The winner, if he won by > 10 s or is a Showboat.
- **Gag:** A knee slide that just keeps going: across the grass, off screen. Cut to the boating lake: SPLASH.
  The ducks hold up scorecards: 9.5, 9.0, 10.
- **Duration:** 6 s, POST
- **Build:** M

### X5. Sore Loser VAR
- **Trigger:** Second place by < 3 s.
- **Gag:** He demands a review (a TV-rectangle mime). Cut to Jeff in a VAR booth with a headset. The replay
  shows a squirrel "offside". The verdict stands. He kicks a cone, which bounces back and taps his shin.
- **Duration:** 7 s, POST
- **Build:** M
- **Variants:** Hawk-Eye for a tennis-style challenge. The goose is the referee.

### X6. The Lace Excuse
- **Trigger:** Second place, short version.
- **Gag:** He immediately kneels to tie a lace that is already tied, pointing at it for the camera.
- **Duration:** 3 s, POST
- **Build:** S

### X7. Crate Podium
- **Trigger:** The race end. A default celebration.
- **Gag:** Milk-crate podium. The goose sneaks onto the silver step, and Clive takes bronze.
- **Duration:** 5 s, POST
- **Build:** M

### X8. Last Finisher Fanfare
- **Trigger:** The last finisher.
- **Gag:** He gets a bigger welcome than the winner: bunting, a brass band. A confetti cannon misfires, then
  goes off on Pam.
- **Duration:** 5 s, POST
- **Build:** M

### X9. Starfish
- **Trigger:** Any finisher in the "celebrate" shot.
- **Gag:** He flops onto the grass like a starfish. Biscuit the dog licks his face and he springs up.
- **Duration:** 4 s, POST
- **Build:** S

---

## 11. Weather set pieces ("each Mark brought his own weather")

Each runner carries his own day's weather as a small personal effect. That's comedic, and it is also the
literal truth. It also tells the viewer, without words, that the five runners are from different days.

### W1. Personal Raincloud
- **Trigger:** A rain code (7-8) or `prcp_mm > 0.3`. About 19 runs, so 2 races in 3 have one.
- **Gag:** A small grey cloud rains on him only. He sidesteps; it follows. He borrows Pam's umbrella; the
  cloud tilts and rains sideways. If he has a slow window, puddles appear under the cloud.
- **Duration:** 5 s, INSET (or REPLAY when tied to a slowdown)
- **Build:** M. A particle cloud parented to the runner
- **Variants:** A tiny lightning bolt singes his hair. The cloud wears a sad face. It rains on the goose too.

### W2. Headwind Mime
- **Trigger:** `wind_kmh ≥ 25` (10 runs), tied to his slowest window.
- **Gag:** He leans into the wind like a mime walking against a gale. His cheeks flap and his cap blows off.
  A goose is blown backwards past him, upside down.
  - Tailwind variant (fast window): he opens his jacket like a sail and glides.
- **Duration:** 5 s, REPLAY or FREEZE
- **Build:** M. A lean pose, cheek flap and cap physics

### W3. Hat Chase
- **Trigger:** `gust_kmh ≥ 40` (12 runs), in any slow window.
- **Gag:** A gust takes his cap. He chases it, and it lands on Gerald the Goose, who wears it smugly.
- **Duration:** 4 s, REPLAY
- **Build:** S

### W4. Brass Monkeys
- **Trigger:** `temp_c ≤ 2` (10 runs).
- **Gag:** His breath plumes freeze into ice cubes that clink to the ground. An icicle grows on his nose. On
  the lake, ducks are ice-skating.
  - At ≤ 0 °C (6 runs): he hits a frozen puddle and curls across it, while Marshal Maureen sweeps ahead.
- **Duration:** 5 s
- **Build:** M

### W5. Pea Souper
- **Trigger:** Fog (code 5) or `rhum ≥ 98`.
- **Gag:** The screen fogs right over. Only his eyes are visible. A foghorn sounds. He passes a marshal
  wearing a lighthouse hat with a rotating beam.
- **Duration:** 4 s, INSET
- **Build:** S-M. A fog post-process, local to the runner

### W6. The British Heatwave
- **Trigger:** `temp_c ≥ 16` (9 runs). The warmest was 19 °C.
  - Easter egg after the reveal: one run was titled along the lines of "too fast, too hot".
- **Gag:** A heat shimmer. He wilts like a flower in a vase, then perks up when Dairy Dave's van drives
  alongside dripping. Pam: *"Nineteen degrees. Carnage."*
- **Duration:** 5 s
- **Build:** M

### W7. Weather Wars
- **Trigger:** Two runners with **different** weather classes within 10 m of each other (one dry, one wet,
  or one calm, one windy). Fires most when the field spans seasons.
- **Gag:** The screen splits diagonally: sunshine on one side, drizzle on the other. The sun and the rain
  cloud argue and shove each other over the runners' heads. Jeff: *"It's raining on HIM but not on HIM!"*
  Pam: *"Different Saturdays, Jeff."*
- **Duration:** 5 s, FREEZE
- **Build:** M-L. A split-screen shader; it reuses W1 and the sun FX
- **Why it matters:** It's the cleanest way to teach the whole premise of the game wordlessly.

---

## 12. Recurring characters

A small cast that lives in the park across the whole night. They make the world feel alive and give cutscenes
a storyline. Seed them deterministically per session.

| Character | Look | Personality | Where they appear |
|---|---|---|---|
| **Gerald the Goose** | Big white goose, a single black eyebrow, honk SFX | The antagonist. Petty, proud, never actually wins | Toll booth (A1), Hill loop (C2), dodgems (F5), podium (X7), hat thief (W3) |
| **Biscuit the Dog** | Scruffy terrier, trailing lead, ears that flap | Overjoyed. Joins any runner for 50 m and always beats him. His owner shouts "BISCUIT!" off screen | Puddle shake (A2), Starfish (X9), "spurred on" variant (B7) |
| **Marshal Maureen** | Hi-vis, whistle, clipboard, cone under her arm | The kindest person in the park. Unflappable | Diversion paddle (section 1), cone reset (B4), charging cable (E3), curling sweep (X3, W4) |
| **Dairy Dave's Van** | Pastel van with a giant cone on the roof and a tinny original jingle | Always just out of reach | Surges (B2), heatwave (W6) |
| **Pam's Tartan Flask** | Tartan flask with a steaming cup lid | Pam's emotional support object | Oxygen mask (C1). Sound sting: the lid "clink" ends every cutscene |
| **Clive the Pigeon** | Grey pigeon with a strut and sunglasses on special occasions | The rival. Insufferable | Surges (B3), candyfloss (F3), bronze medal (X7) |
| Supporting | The duck chorus with scorecards, the Squirrel Syndicate, the bib-wearing snail, Tail Walker Tony | | |

**Night arcs**, which escalate across races in a session:
- **Gerald:**
  - Race 1: glares from the lake.
  - Race 2: hisses.
  - Race 3: the toll booth.
  - Race 4: turns up in a hi-vis vest, impersonating a marshal.
  - Race 5 and later: wears bib "G00SE" and appears in the photo finish.
- **Clive versus Pam's flask:** he keeps trying to land on it. In the final race, he does, and the lid goes
  "clink".
- **The plush goose** (from F2): if won, it sits on Pam's desk for the rest of the night.

---

## 13. Pacing rules

**Budget per race (about 140 s of broadcast):**
- At most **3 pausing cutscenes** (FREEZE or REPLAY), plus up to 3 INSETs.
- At most **18 s of total pause** (about 13% of the broadcast).
- A funfair race gets its signature (lap 1, plus lap 2 as an INSET) and at most **1** other pausing
  cutscene.
- Start-line PRE-ROLL and finish POST gags don't count. Use at most 1 of each per race.

**Spacing and no-go zones:**
- At least **20 broadcast seconds** between pausing cutscenes, and at least 6 s between any two cutscenes.
- None in the first 8 broadcast seconds after the gun (the start scrum is the show).
- **Never pause once the leader is inside the final 300 m (4700 m).** Pause nothing in the finale regime of
  `buildTimeMap`, either. Allowed during the finale: live overlays (E8) and nothing else.
  - Finish gags are POST: they play after the last finisher, in the existing "celebrate" window, and may
    replay the finish.
- Don't pause while a live battle is on: two runners within 3 m of each other in km 4-5, or a pending
  `lead_change`. Defer the cutscene to a REPLAY afterwards, or drop it.

**Selection (deterministic, seeded by `roundId`):**
1. Build candidates from the data triggers. Each candidate is scored as **drama** (how extreme the data is)
   + **relevance** (involves a backed runner) + **freshness** (from night memory) + **variety** (a category
   not already used this race).
2. Pick greedily within the budget and spacing rules.
3. If both players backed different runners, alternate the featured runner, and don't give only one side the
   "bad luck" gags.

**Repetition across a night** (reuse the session memory that commentary already uses):
- Cooldown per cutscene id: 4 races.
- Cooldown per variant: the rest of the night.
- At most 1 Hill gag per race, and rotate C1-C6.
- A recurring character appears in at most 1 pausing cutscene per race (their night-arc beat), plus any
  number of tiny background cameos.
- Rotate the funfair signature: never the same F-number twice in a night if more than one funfair runner
  shows up.

**Keeping the tension while paused:**
- Prefer REPLAY to FREEZE. The viewer has already seen the real drop live, and the replay is the
  explanation, not a delay.
- Keep the HUD leaderboard visible but greyed, with a "LIVE RACE PAUSED" chip and the race clock frozen. Never
  hide the positions.
- Get in with a freeze-frame sting (a vinyl scratch and halftone). Get out with a rewind whirr, a Pam's-flask
  "clink", and a match-cut to the exact frozen frame. The world unfreezes, and Jeff picks up mid-sentence:
  *"...and we're BACK!"*
- Pause the live commentary queue during a cutscene, so no call overlaps the gag and no live call gets lost.
- Optional: both phones get a "SKIP" button. If both players press it, the cutscene cuts straight back.

**Honesty:**
- During any cutscene, a small goose-shaped stamp in the corner reads **"DRAMATISATION"**.
- On the reveal screen, each cutscene can show a "What really happened" card. For example: *"He slowed 22%
  for 250 m by the lake. Why? Nobody knows. We blame the goose."* This makes the data the punchline, and
  doubles as a clue post-mortem.

---

## 14. Tone guardrails

- **Mark is always the hero.** Obstacles come from outside: geese, wind, puddles, prams, funfairs. Self-inflicted
  gags are about enthusiasm (too keen, too many high fives, too fond of bacon), never about ability, body
  shape, age or intelligence.
- **No injuries played for pain.** Run titles mention knees, ankles and blisters. If any of that is shown
  at all, it is a cartoon plaster and a thumbs-up. No limping, no wincing.
- **Family-friendly.** No alcohol (some run titles mention pints and hangovers: never use them), no toilet
  humour beyond a portaloo door at most, no peril for animals (geese and dogs always end smug and fine), and
  no real prizes of live animals.
- **No real third parties.** Run notes name friends, pacers, rivals and a well-known politician. **Never**
  name, depict or caricature any of them. Use generic cartoon extras ("a running buddy", "a kid"). No real
  football kits, brands, sponsors or parkrun logos. The ice-cream van jingle is original.
- **Never spoil the result.** Nothing before the finish may show a finish time, a place, the run date or a
  run title. The fortune teller shows "??:??". Facts are safe to dramatise because bets are already locked,
  but the date and the title stay hidden until the reveal.
- **Reads from a sofa.**
  - One idea per shot, big silhouettes, a 0.5 s hold on every reaction.
  - Captions are four words or fewer, in the HUD's chunky font.
  - At most one spoken line per cutscene, so the gag works with the sound off.
- **Affectionate, dry, British.** Jeff overclaims; Pam undercuts. The joke is on the situation, not the man.
  If a gag would make Mark wince on the sofa, cut it.

---

## 15. Top 12 for a first implementation batch

Chosen for fixing the stated complaint first, then for how often each fires, how clearly it reads from a
sofa, how much it reuses existing assets (the fair's Ferris wheel, carousel, helter-skelter, hook-a-duck
stall, crowds, Hill sign, lake), and for building the shared cutscene machinery early.

1. **Funfair package plus F2 Hook-a-Duck Hustle.** This is the user's complaint: the diversion sign,
   time-stretch, drone wide with the route drawn, and a set piece at the **existing** stall. It also builds
   the FREEZE mode, the STRETCH mode and the rejoin stamp that everything else reuses.
2. **F1 Test Your Strength.** The best lap 1 set-up to lap 2 payoff, and it uses both real diversions. One
   new prop.
3. **A1 Goose Toll Booth.** It introduces Gerald, the spine of the recurring cast, and REPLAY mode. Readable
   with no sound.
4. **C2 The Treadmill Hill.** It fires in 2 of 3 runs (lap 2 Hill slower) and is cheap: a background loop.
   Classic Hanna-Barbera.
5. **C1 Everest Expedition.** The Hill is the course's brand. A big, visual, every-race candidate with a
   perfect Pam line.
6. **E2 Spaghetti Legs.** Fade is the commonest pacing story in the data. One leg shader, endlessly reusable.
7. **E1 Human Cannonball.** A start inset with zero clock cost. Pairs with E2 as a callback, which teaches
   viewers that cutscenes track a real story.
8. **W1 Personal Raincloud.** Two races in three have a wet runner. It wordlessly explains "each Mark is from
   a different day", and leads into W7 Weather Wars later.
9. **D1 Mirror, Signal, Manoeuvre.** An INSET with no pause, for the most frequent event (overtakes). Cheap,
   and it makes overtakes on backed runners pop.
10. **B2 The Ice-Cream Van Jingle.** It gives surges a cause, adds a recurring character with an audio hook,
    and covers the FREEZE-then-live surge pattern.
11. **X1 The Wildlife Photographer.** Photo-finish drama in the POST slot, so it never breaks the
    final-300 m rule. Pam's long lens is iconic.
12. **X5 Sore Loser VAR.** The sore-loser beat, with Jeff in the booth. It reuses the same frozen-frame print
    card as X1.

**Next batch candidates:** D4 Mind the Gap, H1 Tail Walker's Footsteps, W7 Weather Wars, F4 Waltzer Whirl, S1
Jeff's False Start and G1 Legs of Lead.
