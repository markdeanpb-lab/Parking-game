# MARKRUN cutscene catalogue 2: gags mined from the real data

A second batch of 20 cutscenes, built from a fresh dig through `data/markrun.db` and 2,400 simulated rounds.
It follows the same rule as `CUTSCENE_IDEAS.md`: **the event is real, the reason is made up**, and nothing
changes a time or a position.

No new funfair gags are proposed. Only 6 runs have a diversion and the existing package covers them.

Contents:
1. What the data says (new findings)
2. What the matchups say
3. The 20 new cutscenes, ranked
4. Recommended live rotation and firing rates
5. Data work needed before building
6. Guardrails specific to this batch

---

## 1. What the data says (new findings)

Method: read-only scripts over all 98 results, 1,468 activities, the pacing, heart-rate and facts tables.
"Runs" below means of the 98 Finsbury runs (85 `main`, 13 `novelty`).

### Storylines hiding in the archive

| Truth | Evidence |
|---|---|
| **The PB ladder has 21 rungs.** | 24:51 (Oct 2021) down to 18:42 (Oct 2024). 14 of the 21 came in the first 12 months. |
| **The 20-minute wall was real.** | Seven runs between 20:00 and 20:37 (20:37, 20:34, 20:15, 20:22, 20:21, 20:07, 20:06) before and around the first sub-20: 19:25 on 18 March 2023, a 42-second jump in one week. Since then 26 sub-20s: 12 of 27 runs in 2023, 8 of 17 in 2024, 4 of 8 in 2025, 2 of 2 in 2026. |
| **The one-second siege.** | Autumn 2023, chasing 19:20: 19:25, 19:31, 19:21, 19:20 (equalled to the second), then 19:18. His own note on the 19:20 blames a puddle on the first corner for two seconds. |
| **He PBs six days after half marathons.** | 5 runs came 6 days after a half. Three of them were PBs (20:37, 18:52, 18:42), including the two fastest runs in the archive. |
| **His fastest run followed his biggest month.** | 18:42 came after 278 km in 28 days, the highest in the data. It was also run in the middle of a 13 km outing. |
| **Final Finsbury, then the visitor.** | Run 95 (19:10, his third fastest at the time) was the last before moving away. He has been back three times. After a 532-day gap he returned and finished 7th, his best position ever. |
| **"Need to get to 100."** | He is on 98 Finsbury runs and wrote that himself on the latest one. |
| **A half marathon before breakfast.** | On the morning of one run he had already run 21.2 km, starting at 06:51. He then ran 25:33. Another run is the middle of a 20 km long run. |
| **A real standstill.** | One comeback run has a 23.5 s step over 25 m at 3.05 km (normal: 6.6 s). His note: full send on lap 1, regrets on lap 2. It is also the biggest fade in the archive (second half 19% slower). |

### Signals the first catalogue did not use

| Signal | Source | How often |
|---|---|---|
| Warm-up run the same morning (08:20 to 08:50) | `strava_activities`, same date | **29 runs**. `facts.warmup_km` wrongly says 0 for all 98 (see section 5) |
| Treadmill session in the 7 days before | activity names / `is_trainer` | 35 runs ("Treadmill Thursday" is a recurring title) |
| Track or interval session in the 7 days before | activity names (`8 x 800` etc.) | 24 runs |
| Swim / weights / yoga / ski in the 7 days before | `facts.cross_training_7d` | 7 / 15 / 3 / 2 runs (ski is novelty-only) |
| Ride in the 7 days before | same | 22 runs |
| Race the next day | `facts.race_upcoming.days_after <= 1` | 6 runs (4 main) |
| Half marathon in the 7 days before | `facts.race_recent` | 5 runs |
| 28+ days since his last Finsbury run | `facts.prev_finsbury.days_before` | 19 runs. In the gaps he ran other parkruns, in Wales, Vienna, Edinburgh and Tokyo among others |
| Mean heart rate | `performances.hr` | 76 runs. Ranges from 141 to 186 bpm **for near-identical times** |
| Cadence | `strava_activities.avg_cadence` | 76 runs. 177 steps/min in 2022 rising to 188 in 2026 |
| Thumbs-up count on the activity | `raw_json.summary.kudos_count` | All 98. Average 5 in 2021, 29 in 2025. Final Finsbury has the most: 43 |
| Finishing position | `parkrun_results.position` | 7th to 774th |
| Humidity 90%+ | `facts.weather.rhum` | 38 runs |
| Lap-2 Hill quicker than lap 1 by 4%+ | `progress` | 17 runs |
| Identical official times | `parkrun_results` | **8 pairs** in the main pool: 19:20, 19:25, 19:42, 21:30, 21:51, 21:53, 22:26, 25:33 |

### Oddities worth knowing

- **Heart rate is not tied to pace.** 19:21 at a mean of 186 bpm and 19:32 at a mean of 141 bpm are 11 seconds
  apart on the clock and 45 beats apart on the watch. Wrist sensors are flaky, so truth cards say "his watch
  recorded".
- **Peak heart rate is not always at the finish.** Of 76 runs with data, the peak falls on the Hill in 23, in
  the last 300 m in 16, and elsewhere in 37.
- **Extremes:** coldest -5 °C, warmest 19 °C, strongest gust 65 km/h (on a comeback run, 25:13), most thumbs-up
  43, biggest week before a run 70 km (a funfair run, 8 days before a half).
- **Skiing and tennis exist but barely touch Finsbury.** Seven ski days in January 2025 sit before two novelty
  runs. The single tennis session is not within a week of any Finsbury run, so it cannot be a trigger.

---

## 2. What the matchups say

Method: 400 simulated nights of 6 rounds (2,400 rounds) through `createRound`, default settings. No run repeats
within a night, so a night shows 30 different Saturdays.

Theme mix: pace bands 49%, data themes 41%, funfair 6%, wildcard 4%.

| Field situation | Rounds | Nights with at least one |
|---|---|---|
| Two runners with the **same official time** | 8.6% | 45% |
| Two runners within 1 s | 36.4% | 96% |
| Two runs 7 days apart (consecutive Saturdays) | 41.4% | 97% |
| Two runs **either side of the same race** | 19.4% | 77% |
| Era gap of 2+ years in the field | 43.3% | 98% |
| Era gap of 3+ years in the field | 18.4% | 76% |
| Era gap 3+ years **and** the newer Mark really overtakes the older after 1 km | 16.8% | not measured |
| The older run beats a run 2+ years newer | 29.3% | 91% |
| Finish order is exactly newest to oldest | 5.0% | 26% |
| Newest run wins and oldest run is last | 14.9% | 61% |
| Oldest run wins | 9.2% | 49% |
| Mean heart rate 25+ bpm apart, times within 30 s | 20.5% | 82% |
| Cadence 8+ steps/min apart and side by side at 3 km | 10.3% | 52% |
| Thumbs-up spread of 20+ | 18.7% | not measured |
| A sub-20 run in the field / a 20:00 to 20:37 run / both | 47.2% / 33.3% / 25.3% | 100% / 96% / 86% |
| A PB-day run in the field / it wins | 78.2% / 18.1% | 100% / 73% |
| Two PB-day runs in one field | 0% | 0% (selection prevents it) |
| A wet-day runner | 56.6% | 100% (3.4 rounds a night) |
| Final Finsbury in the field | 5.9% | 36% |
| A post-move "visitor" run | 16.3% | 78% |
| A lapping | 0.2% | 1% |

What this means for gags:

- **Same-time pairs are a gift.** Nearly half of all nights contain a true dead heat between two Saturdays
  months apart. Nothing in the live set uses it.
- **Eras collide less than expected inside pace bands** (fast fields are all 2023 onward), but data themes mix
  them, so a 3-year gap turns up in most nights.
- **PB-versus-PB cannot happen**, so no gag should depend on it.
- **Before-and-after pairs are common** because selection likes runs from the same training block: 12 races
  have a main-pool run on each side.
- **The current planner averages 2.35 gags and 0.94 pauses a race, and 7.5% of races get none.** The new
  batch is almost all pre, post and inset, which is what lifts the count without adding pauses.

---

## 3. The 20 new cutscenes, ranked

Format for each: trigger and rate, staging, mode and duration, lines (one plays; two spares), build size,
truth card. Rates are from the 2,400 simulated rounds unless they say "runs".

### 1. The Pointing Standoff

- **Type:** matchup (pair).
- **Trigger:** two runners in the field have the same official time. 8.6% of rounds, 45% of nights. 8 such
  pairs exist in the main pool. Takes priority over the Wildlife Photographer.
- **Staging:**
  1. They cross the line in the same frame. Freeze.
  2. Both turn, see each other, and point. Hold.
  3. They circle, still pointing. Maureen arrives holding one finish token. She looks at it, shrugs, and snaps
     it in half.
  4. Gerald walks through the middle and both point at Gerald.
- **Mode:** post. **Duration:** 7 s.
- **Lines:**
  - Pam: "Same man. Same time. Different Saturday."
  - Jeff: "It's a DEAD HEAT! With HIMSELF!"
  - Pam: "One of them is copying."
- **Build:** S. Reuses the photo-finish freeze. One new pose and a snappable token.
- **Truth:** "Both really ran 19:20: one in April 2023, one in December 2023. Identical to the second, 224 days
  apart."

### 2. The Sub-20 Wall

- **Type:** storyline (night-long).
- **Trigger:** any field with a sub-20 finisher (47.2% of rounds) or a 20:00 to 20:37 finisher (33.3%); both
  in 25.3%. A night averages 9.8 sub-20 finishers and 2.8 near misses.
- **Staging:** when the race clock reads 20:00, a cartoon brick wall drops across the finish straight.
  - Anyone already home is through.
  - A runner due in the next 37 seconds runs into it at full tilt and leaves a perfect Mark-shaped hole. He
    steps back through the hole, thumbs up, and jogs to the line.
  - Slower runners arrive later and use the hole politely, wiping their feet.
  - **The wall keeps its holes all night.** By race 6 it is lace. Clive nests in one hole. In the final race
    Gerald opens a small door in it that was there all along.
  - First smash of the night gets a wider shot: the sub-20 Mark hurdles the wall as it drops.
- **Mode:** live overlay in the finale (never pauses), plus a 2 s post tag showing the wall's current state.
  **Duration:** 3 s live.
- **Lines:**
  - Pam: "He spent ten months on the wrong side of that."
  - Jeff: "It's the TWENTY-MINUTE WALL! And he's gone STRAIGHT THROUGH IT!"
  - Pam: "There's a door, Jeff."
- **Build:** M. One wall prop with hole decals stored in session memory.
- **Truth:** "He ran between 20:00 and 20:37 seven times. Then, on 18 March 2023, 19:25. He has gone under 20
  minutes 26 times since."

### 3. The Mirror Routine

- **Type:** matchup (pair, past versus future).
- **Trigger:** two runners 3+ years apart, and the newer one really overtakes the older between 1 km and
  4.7 km. 16.8% of rounds.
- **Staging:** the old silent-film mirror gag.
  1. Newer Mark draws level. Both glance sideways, then look again.
  2. They mirror each other: scratch head, check watch, wave. Perfect sync.
  3. Older Mark tries to catch him out with a sudden star jump. Newer Mark matches it.
  4. Newer Mark breaks the mirror by producing a medal from his pocket, taps his nose, and pulls away. Older
     Mark checks his own pockets. Nothing.
- **Mode:** inset (picture-in-picture, anchored to the real overtake). **Duration:** 5 s.
- **Lines:**
  - Pam: "He's just been overtaken by his own future."
  - Jeff: "It's MARK against MARK! And the newer model's got more features!"
  - Pam: "No spoilers, please."
- **Build:** M. Paired animation driven from one clip with a mirror flip.
- **Truth:** "These two runs were 3 years and 2 months apart. Same man, same course. The later one really did
  pass the earlier one at 2.4 km." No year is shown until the reveal.

### 4. Heart vs Heart

- **Type:** matchup (pair).
- **Trigger:** two runners with heart-rate data whose mean differs by 25+ bpm and whose official times are
  within 30 s. 20.5% of rounds, 82% of nights.
- **Staging:** split-screen X-ray of two chests, side by side at the same speed.
  - Left: a red cartoon heart hammering so hard it punches the ribcage outward. Steam. A tiny alarm bell.
  - Right: a heart in a deckchair with a newspaper and a cup of tea. It turns a page.
  - Final beat: the left heart leans across the split and knocks on the right heart's side to ask how.
- **Mode:** inset. **Duration:** 5 s.
- **Lines:**
  - Pam: "Same pace. One of them is having a lovely time."
  - Jeff: "Look at that heart GO! And look at that one... reading!"
  - Pam: "Forty-five beats a minute between them. I'd ask for a refund on the watch."
- **Build:** S to M. Two heart puppets; reusable for a solo "peak" variant.
- **Truth:** "His watch recorded an average of 186 bpm for one of these runs and 141 for the other. The
  finishing times were 11 seconds apart."

### 5. Half Marathon Before Breakfast

- **Type:** training life.
- **Trigger:** a runner logged a warm-up run earlier the same morning. 29 runs; a qualifying runner is in
  76.6% of rounds, so gate it to about 15%. The big variant (8+ km already run: 3 runs) appears in 3.8% of
  rounds, 22% of nights, and always fires.
- **Staging (pre-roll, on the start line):**
  - **Standard (1 to 3 km):** four Marks yawn in dressing gowns holding mugs. The fifth jogs in through the
    gate already steaming gently, does two smug lunges, and the dressing gowns drop.
  - **Big (21.2 km):** the fifth Mark staggers in from the horizon in a foil blanket and breaks a finish tape
    held across the START line. He raises both arms. Maureen gently turns him round and points at the course.
    His face falls. The gun goes.
- **Mode:** pre. **Duration:** 4 s standard, 6 s big.
- **Lines:**
  - Pam: "He's done a half marathon already. Before nine."
  - Jeff: "He thinks he's FINISHED! Somebody tell him!"
  - Pam: "The rest of them have had toast."
- **Build:** S. Start-line props only.
- **Truth:** "He really had run 21.2 km that morning, setting off at 06:51, before running 25:33 here." Or:
  "He jogged 2 km to warm up. The others, on their Saturdays, did not."

### 6. Before and After

- **Type:** matchup (pair).
- **Trigger:** one runner has a race coming up and another has that same race just behind him (matching race
  name in `race_upcoming` and `race_recent`). 19.4% of rounds, 77% of nights. 12 races qualify.
- **Staging:**
  1. "Before" Mark runs with a race number pinned on, nervously polishing his shoes mid-stride.
  2. "After" Mark draws alongside wearing the medal and a foil cape.
  3. Before Mark stares at the medal, points at it, points at himself, mouths "is that...?"
  4. After Mark hides the medal behind his back and whistles. The medal ribbon is still visible. Before Mark
     tries to peek round him for the rest of the shot.
- **Mode:** inset. **Duration:** 5 s.
- **Lines:**
  - Pam: "One of them knows how it goes."
  - Jeff: "That's the SAME RACE! He's run it and he HASN'T run it!"
  - Pam: "Don't tell him. He'll only worry."
- **Build:** M. Medal, cape and race-number props (shared with gags 11 and 14).
- **Truth:** "One of these runs was the day before a half marathon. The other was six days after the same
  half marathon. He ran 1:46:30."

### 7. Road to 100

- **Type:** storyline (night-long).
- **Trigger:** every race. Each runner's `finsbury_number` gets stamped. A night stamps exactly 30 of the 98.
  The Final Finsbury run appears in 36% of nights; run 97 or 98 in 65%.
- **Staging:** Marshal Maureen has a loyalty card the size of a door with 100 boxes.
  - After each race she stamps the five run numbers. Two seconds, top corner.
  - The card visibly fills across the night. Clive keeps trying to stamp it himself.
  - **If Final Finsbury (run 95) is stamped:** a removal van idles behind her and Mark waves from the cab.
  - **If run 96, 97 or 98 is stamped:** the stamp says VISITOR and he is holding a train ticket.
  - **End of night:** the full card, 98 boxes inked by now in faint grey with tonight's 30 in bold. Two boxes
    empty. Maureen taps them with her pen and looks at the sofa.
- **Mode:** post tag each race; a longer card shot in the night's closing sequence. **Duration:** 2 s per
  race, 6 s finale.
- **Lines:**
  - Pam: "Ninety-eight. He needs two more. He knows."
  - Jeff: "TWO to go! Get your trainers on!"
  - Pam: "Free coffee at a hundred. Probably."
- **Build:** M. One UI card, session memory for the stamps.
- **Truth:** "Mark has run Finsbury 98 times. On the 98th he wrote that he needs to get to 100."

### 8. Where's the Incline Button?

- **Type:** training life, Hill.
- **Trigger:** a treadmill session in the 7 days before, and a lap-1 Hill climb 15%+ slower than his average
  pace. 9 runs; 40.8% of rounds. Shares the one-Hill-gag-per-race slot.
- **Staging:**
  1. Halfway up the Hill he starts jabbing the air in front of him.
  2. A ghostly treadmill console fades in around his hands. He presses the down arrow. Beep. Nothing.
  3. He presses it harder. Gerald leans in from the side and presses UP with his beak.
  4. The whole Hill tilts five degrees steeper with a creak. Mark looks at the camera.
- **Mode:** inset (so it costs no pause). **Duration:** 5 s.
- **Lines:**
  - Pam: "Outdoors doesn't have a console."
  - Jeff: "He's looking for the INCLINE BUTTON!"
  - Pam: "That's what Thursdays indoors do to a man."
- **Build:** M. Console overlay and a tilt on the Hill mesh.
- **Truth:** "He had run on a treadmill twice that week. The real Hill then cost him 22% of his pace."

### 9. The PB Bell

- **Type:** storyline (night-long).
- **Trigger:** a run that was a course PB on its day finishes in the top two. PB-day runs are in 78.2% of
  rounds and win 18.1%. Cap at three rings a night, escalating.
- **Staging:** a brass bell on a post by the finish.
  - **First ring:** Maureen rings it properly. Lovely.
  - **Second ring:** the rope comes away in her hand. She rings it with a cone.
  - **Third ring:** the bell drops off the post and rolls into the boating lake. Gerald surfaces wearing it as
    a hat, and keeps it on for the rest of the night in every other shot.
- **Mode:** post. **Duration:** 4 s.
- **Lines:**
  - Jeff: "RING THE BELL! That was a PERSONAL BEST on the day!"
  - Pam: "Twenty-one of these in the archive. The bell is tired."
  - Pam: "That's the goose's bell now."
- **Build:** S. One prop, three states.
- **Truth:** "This run was a course PB when he ran it. He has set 21, from 24:51 to 18:42." Shown only after
  the finish.

### 10. The Wrong Kit Bag

- **Type:** training life (other sports).
- **Trigger:** swim, weights, yoga or ski in the 7 days before; the sport with the most minutes picks the
  costume. 25 runs (weights 15, swim 5, yoga 3, ski 2). Eligible in 86% of rounds, so gate to about 13%. The
  ski variant only reaches the screen in wildcard rounds (0.8% of rounds).
- **Staging (pre-roll):** he unzips his bag on the start line and puts on what is in it.
  - **Swim:** goggles, armbands and a rubber ring. He runs the first 200 m doing front crawl.
  - **Weights:** a barbell across his shoulders. He gets through the start arch sideways.
  - **Yoga:** holds tree pose, eyes shut, as the other four leave. Opens one eye.
  - **Ski:** skis and poles on grass, snowploughing. Biscuit rides the back of a ski.
  - Each costume is thrown off by 200 m and Biscuit carries it back.
- **Mode:** pre, with a 3 s live tail. **Duration:** 5 s.
- **Lines:**
  - Pam: "Wrong bag."
  - Jeff: "He's brought his GOGGLES! To a PARKRUN!"
  - Pam: "He swam on Thursday. Some of him still is."
- **Build:** M. Four costume sets, one shared animation hook.
- **Truth:** "In the week before this run he went swimming once and lifted weights twice."

### 11. The Foil Cape

- **Type:** training life (races).
- **Trigger:** a half marathon in the 7 days before. 5 runs, all main; in 18.3% of rounds, 80% of nights.
- **Staging:** he runs in last Sunday's foil blanket, worn as a cape, medal bouncing.
  - Lap 1: the cape drags and the medal clonks him on the chin.
  - **PB variant (3 of the 5 runs):** on lap 2 the cape catches the wind, fills, and he lifts an inch off the
    path in a superhero pose for 50 m. He lands without breaking stride and looks surprised.
  - **Non-PB variant:** the cape fills, lifts, and deposits him gently back where he was.
- **Mode:** inset. **Duration:** 4 s.
- **Lines:**
  - Pam: "Six days after a half marathon. That should not work."
  - Jeff: "He's still got the MEDAL on!"
  - Pam: "Rest is for other people, apparently."
- **Build:** S, if gag 6 has already built the cape and medal.
- **Truth:** "He ran a half marathon six days earlier. Three of his 21 PBs came exactly six days after a
  half, including his two fastest runs here."

### 12. The Ascent of Mark

- **Type:** matchup (whole field).
- **Trigger:** the finish order is exactly newest run to oldest run. 5.0% of rounds, 26% of nights. A looser
  version (newest wins, oldest last) fires in 14.9%. Reverse variant when the oldest run wins: 9.2%.
- **Staging (post, at the reveal when dates are shown anyway):** the five Marks line up in profile in the
  famous evolution silhouette, a stroll on the left to a full stride on the right. Year labels drop in under each.
  The leftmost is in a dressing gown, holding a mug.
  - **Reverse variant:** the oldest Mark stands on the crate podium while his four newer selves
    hold the crate up, politely furious.
- **Mode:** post. **Duration:** 5 s.
- **Lines:**
  - Pam: "Five years of Saturdays, in order."
  - Jeff: "It's EVOLUTION, Pam! Right there on the path!"
  - Pam: "Science would like a word about the dressing gown."
- **Build:** S. Five poses and a caption row.
- **Truth:** "They finished in exact date order: 2026 first, 2021 last. Every year he got quicker."

### 13. The Puddle That Grew

- **Type:** storyline (night-long).
- **Trigger:** each round with a wet-day runner (rain code 7-8 or more than 0.3 mm) raises the puddle one
  level. 56.6% of rounds; 3.4 a night on average. The real "puddle run" appears in 39% of nights and is the
  payoff.
- **Staging:** a puddle on the first corner, seen as lap 2 comes through.
  - Level 1: a damp patch. He steps over it.
  - Level 2: a puddle. Biscuit is in it.
  - Level 3: a pond. Ducks, and a "NO FISHING" sign.
  - Level 4: Gerald in a rowing boat charging for crossings (callback to the toll booth).
  - Level 5: Maureen has built a small bridge with cones.
  - Only wet-day Marks get splashed. Dry-day Marks run through it as if it is not there, because for them it
    was not.
- **Mode:** inset as lap 2 passes the first corner. **Duration:** 3 s.
- **Lines:**
  - Pam: "That puddle was not there an hour ago."
  - Jeff: "It's getting BIGGER! Why is nobody else seeing this?"
  - Pam: "He once blamed that puddle for two seconds. In writing."
- **Build:** S to M. One decal that scales, plus four dressing props.
- **Truth:** "It rained on 3 of tonight's Saturdays. On one real run he equalled his PB to the second and
  noted that the puddle on the first corner had cost him two."

### 14. Bubble Wrap

- **Type:** training life (races).
- **Trigger:** a race the next day. 6 runs (4 main); in 21.7% of rounds.
- **Staging:** he runs wrapped in bubble wrap with FRAGILE tape round the middle, taking tiny careful steps.
  - On the Hill the bubbles start popping one at a time. He winces at each pop.
  - Biscuit trots alongside and pops one on purpose. Mark gasps.
  - At the top Maureen re-tapes him and sends him on.
- **Mode:** inset. **Duration:** 4 s.
- **Lines:**
  - Pam: "He's got a race tomorrow. He's being careful."
  - Jeff: "Don't POP him! He's needed in the morning!"
  - Pam: "This side up."
- **Build:** S. One wrap shader and a pop particle.
- **Truth:** "He ran a 10 km race the next morning. Here he ran 23:31, nearly four minutes outside his
  previous Finsbury time. He was saving it."

### 15. The Escalator

- **Type:** Hill (common pattern; the opposite of the Treadmill Hill).
- **Trigger:** his lap-2 Hill climb is 4%+ quicker than lap 1. 17 runs; in 35.1% of rounds. Shares the Hill
  slot.
- **Staging:**
  1. Lap 1: he slogs up the Hill in a small replay.
  2. Lap 2: he arrives, glances left and right, and steps onto an escalator nobody else can see.
  3. He rides it standing still, one hand on the rail, checking his watch, overtaking his own lap-1 ghost.
  4. A rival on the stairs beside him stares. At the top he steps off without looking back.
- **Mode:** inset. **Duration:** 4 s.
- **Lines:**
  - Pam: "Quicker up it the second time. That's not how hills work."
  - Jeff: "He's found an ESCALATOR!"
  - Pam: "Stand on the right, please."
- **Build:** M. Escalator prop on the Hill and a ghost replay.
- **Truth:** "He climbed the Hill 7% quicker on lap 2 than on lap 1. Only 17 of his 98 runs manage that."

### 16. Sewing-Machine Legs

- **Type:** matchup (pair, common pattern).
- **Trigger:** two runners with cadence data 8+ steps/min apart who are within 4 s of each other at 3 km.
  10.3% of rounds, 52% of nights. (Any pair 10+ steps apart: 23.3%.)
- **Staging:** a low leg-cam, two pairs of legs side by side at the same speed.
  - One pair is a blur, with a sewing-machine needle sound and a line of neat stitches left on the path.
  - The other pair lopes in long, slow, giraffe strides.
  - A metronome over each. The fast one's metronome shakes itself off its stand.
  - The legs' real animation rate is set from the real cadence, so the picture is literally true.
- **Mode:** inset. **Duration:** 4 s.
- **Lines:**
  - Pam: "Same speed. One of them is doing a lot more admin."
  - Jeff: "Look at those legs GO! Look at those legs... stroll!"
  - Pam: "A hundred and ninety steps a minute. I counted. I didn't."
- **Build:** S. A playback-rate parameter and one camera.
- **Truth:** "His watch counted 190 steps a minute on one of these runs and 173 on the other. His stride got
  quicker every year from 2022 to 2026."

### 17. Track Tuesday

- **Type:** training life, surge.
- **Trigger:** an interval session in the 7 days before, and a mid-race 250 m at least 10% quicker than his
  average. 14 runs; in 54.2% of rounds, so gate to about 12%. Alternates with the Ice-Cream Van in the surge
  slot (the van needs 11 °C; this does not).
- **Staging:**
  1. A whistle. Red track lanes unroll along the path under his feet like a carpet.
  2. A hand with a stopwatch pops out of a bush. He drops into sprint form for the real 250 m.
  3. At the end of the rep the lanes roll themselves back up. He puts hands on knees for one second, then
     remembers where he is.
  4. A chalkboard in the bush flips from "REP 1 OF 8" to "REP 2 OF 8". He sees it and runs away.
- **Mode:** inset over the real surge. **Duration:** 4 s.
- **Lines:**
  - Pam: "He thinks it's Tuesday."
  - Jeff: "That's a REP! He's doing REPS!"
  - Pam: "Seven more to go, apparently."
- **Build:** M. Lane decal with an unroll animation.
- **Truth:** "He really did surge: 250 m at 12% quicker than his average. Four days earlier he had run eight
  800 m reps on the track."

### 18. The Tourist

- **Type:** training life (holidays and parkrun tourism).
- **Trigger:** 28+ days since his previous Finsbury run. 19 runs; in 67.7% of rounds, so gate to about 10%.
  The 532-day return is the deluxe variant.
- **Staging (pre-roll):** Maureen has set up a passport desk at the start.
  - He arrives wheeling a suitcase covered in generic stickers: a dragon, a waltz, a castle, a volcano.
  - She flicks through a very thick passport, stamps it, and waves him in.
  - **Deluxe (17 months away):** his spot on the start line has a cobwebbed RESERVED sign. He arrives with a
    luggage trolley and a puppy on a lead. Maureen needs a second stamp pad.
- **Mode:** pre. **Duration:** 4 s.
- **Lines:**
  - Pam: "Five weeks away. He's been seeing other parks."
  - Jeff: "He's BACK! Where's he BEEN?"
  - Pam: "Anything to declare? Apart from the tan."
- **Build:** S to M. Desk, suitcase, sticker sheet.
- **Truth:** "It had been 35 days since his last Finsbury run. In between he ran parkruns in Wales and
  north London." Deluxe: "He came back after 532 days away and finished 7th, his highest position ever."

### 19. Humidity Hair

- **Type:** weather (common pattern).
- **Trigger:** humidity 90%+ on his Saturday. 38 runs; in 83% of rounds, so gate to about 10% and prefer the
  dampest runner. Never in the same race as the Personal Raincloud.
- **Staging:** his hair grows a little at each kilometre marker.
  - 1 km: a slight fluff. 2 km: a dandelion. 3 km: a hedge.
  - 4 km: Clive lands in it and settles down. Mark does not notice.
  - The runner beside him, from a dry Saturday, stays perfectly neat and keeps glancing over.
- **Mode:** inset, two short beats. **Duration:** 2 s plus 3 s.
- **Lines:**
  - Pam: "Ninety-three per cent humidity. There are consequences."
  - Jeff: "It's getting BIGGER, Pam!"
  - Pam: "The pigeon's moved in."
- **Build:** S. A hair scale parameter.
- **Truth:** "Humidity was 93% on his Saturday. The Mark next to him ran on a crisp, dry one."

### 20. Thumbs-Up Shower

- **Type:** matchup (whole field).
- **Trigger:** the highest and lowest thumbs-up counts in the field differ by 20+. 18.7% of rounds. (25+:
  10.2%.)
- **Staging (post):** thumbs-up balloons fall from the sky, the real number for each run.
  - The newest Mark is buried to the neck. One hand sticks out, also doing a thumbs-up.
  - The oldest Mark gets three. He looks at them fondly. Clive pops one.
  - The Final Finsbury run, if present, gets all 43 and a small brass band.
- **Mode:** post. **Duration:** 4 s.
- **Lines:**
  - Pam: "Three thumbs. He's kept all of them."
  - Jeff: "FORTY-THREE of them! He's gone under!"
  - Pam: "Popularity. It came with the pace."
- **Build:** S. A particle count per runner.
- **Truth:** "This run got 3 thumbs-up from his friends online. That one got 43, his most ever: it was his
  last Finsbury before moving away."

### Requirement check

| Requirement | Gags |
|---|---|
| Matchup or pair (4+) | 1, 3, 4, 6, 12, 16, 20 |
| Storyline across a night (3+) | 2, 7, 9, 13 |
| Wider training life (3+) | 5, 8, 10, 11, 14, 17, 18 |
| Common patterns (Hill, surge, weather, cadence) in place of the funfair slots | 8, 15, 16, 17, 19 |
| New funfair gags | none |

---

## 4. Recommended live rotation

### The live set (21)

Keep 11 of the 12 built gags and add the top 10 new ones.

| Slot | Gags | Pauses? |
|---|---|---|
| Pre-roll (one per race) | Human Cannonball, Half Marathon Before Breakfast, The Wrong Kit Bag | no |
| Hill (one per race) | Everest Expedition, Treadmill Hill, Where's the Incline Button? | Everest and Treadmill yes; Incline no |
| Slowdown / fade | Goose Toll Booth, Spaghetti Legs | yes |
| Surge | Ice-Cream Van | yes |
| Weather | Personal Raincloud | no |
| Pair insets | Mirror Routine, Heart vs Heart, Before and After | no |
| Funfair | the existing package (Hook-a-Duck, Test Your Strength) | lap 1 only |
| Finale overlay | The Sub-20 Wall | no |
| Post (one per race) | The Pointing Standoff, Wildlife Photographer, Sore Loser VAR, The PB Bell | no |
| Night tag (every race) | Road to 100 | no |

- **Bench Mirror, Signal, Manoeuvre.** It is already gated for a weak picture. The Mirror Routine and the pair
  insets now cover overtakes with a stronger image and a real truth.
- **Second wave, in order:** The Foil Cape, The Ascent of Mark, The Puddle That Grew, Bubble Wrap, The
  Escalator, Sewing-Machine Legs, Track Tuesday, The Tourist, Humidity Hair, Thumbs-Up Shower.

### Rule changes

- **At most 1 pausing cutscene per race** (currently 3). Extra pausing candidates fall back to an inset where
  the planner already supports it (Goose, Spaghetti, Treadmill) or are dropped.
- A funfair race spends its one pause on the lap-1 set piece. Lap 2 plays as an inset, as it can today.
- Keep: one pre, one post, at most 3 insets, the 6 s spacing rule, nothing paused inside the final 300 m.
- Storyline gags (Wall, Bell, Road to 100) are exempt from the 4-race cooldown. They have per-night caps
  instead: Wall 4 showings, Bell 3 rings, Road to 100 every race.
- Pair gags: at most 2 of each per night, and never two pair insets on the same pair.

### Target firing rates

Measured by replaying the 2,400 simulated rounds with the rules above and these gates.

| Gag | Eligible | Gate | Fires (races) | Nights with it |
|---|---|---|---|---|
| The Sub-20 Wall | 55% | 0.9 if a near miss; 0.8 for the night's first; else 0.25 | 39% | 100% |
| Human Cannonball | as now | as now | 30% | not measured |
| Personal Raincloud | as now | as now | 27% | 99% |
| Spaghetti Legs | as now | one-pause rule | 26% | 95% |
| The PB Bell | 29% | 0.9, cap 3 a night | 25% | 88% |
| Wildlife Photographer | as now | yields to the Standoff | 18% | 85% |
| Before and After | 19% | 0.9, cap 2 | 17% | 72% |
| Half Marathon Before Breakfast | 54% | 0.3 (1.0 for the big variant) | 17% | 70% |
| Heart vs Heart | 21% | 0.8, cap 2 | 16% | 75% |
| Treadmill Hill | as now | one-pause rule | 16% | 74% |
| Ice-Cream Van | as now | one-pause rule | 15% | 80% |
| Goose Toll Booth | as now | one-pause rule | 15% | 82% |
| Funfair package | as now | as now | 18% | 84% |
| Where's the Incline Button? | 27% (no other Hill gag) | 0.5, cap 2 | 13% | 61% |
| The Wrong Kit Bag | 46% (pre slot free) | 0.3, cap 2 | 13% | 58% |
| Mirror Routine | 17% | 0.8, cap 2 | 13% | 60% |
| Everest Expedition | as now | one-pause rule | 13% | 69% |
| The Pointing Standoff | 9% | always | 9% | 45% |
| Sore Loser VAR | as now | yields to the Standoff | 6% | 31% |
| Road to 100 | 100% | always (2 s tag) | 100% | 100% |

### What a night looks like

| Measure | Now | Proposed |
|---|---|---|
| Gags per race (not counting the Road to 100 tag) | 2.35 | **3.44** |
| Races with no gag | 7.5% | **0.6%** |
| Pauses per race | 0.94 (up to 3) | **0.66 (never more than 1)** |
| Different gags seen in a 6-race night | not measured | **14.5 on average, never fewer than 10** |

Spread of gags per race under the proposal: one 6%, two 17%, three 29%, four 28%, five 15%, six 5%. If six
feels busy, cap at five by dropping the lowest-scoring inset.

When second-wave gags are added, give each a gate that lands it at 8 to 12% of races and lower the Wall's
repeat gate to 0.15, so the average stays near 3.5.

---

## 5. Data work needed before building

None of this changes results. It adds facts the planner can read.

| Need | Used by | Notes |
|---|---|---|
| Fix `facts.warmup_km` | 5 | It is 0 for all 98 runs, but 29 runs have a separate run logged between 08:20 and 08:50 that morning. Sum same-date runs that start before the parkrun activity. Also catch the two runs where the parkrun sits inside a longer activity (activity distance 13 km and 20 km). |
| `treadmill_7d`, `intervals_7d` | 8, 17 | Count activities in the prior 7 days whose name matches treadmill, or a reps pattern such as `8 x 800`. |
| `hr_mean` | 4 | Mean of the non-null `performances.hr` values. Present for 76 runs. |
| `cadence_spm` | 16 | `strava_activities.avg_cadence` times two. Present for 76 runs. |
| `thumbs_up` | 20 | `raw_json.summary.kudos_count`. |
| `same_time_as` | 1 | Not a fact: compare `officialS` across the field at plan time. |
| Race identity for pairs | 6 | Compare `race_upcoming.name` with `race_recent.name` at plan time. Never display the name. |
| Session memory | 2, 7, 9, 13 | Wall holes, stamped run numbers, bell state, puddle level. Same store the goose arc uses. |

The simulation and trigger scripts are in the session scratchpad
(`/tmp/claude-0/-home-user-Parking-game/201ae4ef-9467-51e3-9846-baf7bf89ba8b/scratchpad/fable-data/`):
`sim.mjs` generates the nights, `trig.mjs` measures triggers, `rot.mjs` replays the proposed rotation. That
folder is temporary; copy them into `tools/` if they should be kept.

---

## 6. Guardrails specific to this batch

- **Dates stay hidden until the reveal.** Era gags (3, 12, 20) never show a year during the race. The Mirror
  Routine shows only that one Mark is "newer". Year labels appear in post gags and truth cards only.
- **The Sub-20 Wall shows a clock time, not a result.** It drops at 20:00 on the race clock, which is already
  on screen, so it spoils nothing.
- **The PB Bell rings only after the finish.** PB status is a strong clue and must not leak earlier.
- **No real people.** Run notes name friends, pacers, rivals, a partner and a politician. None appear. Extras
  are generic.
- **No brands.** "Thumbs-up", not the app's word for it. No show titles, shoe makes or race sponsors. Race
  names are never displayed; truth cards say "a half marathon" or "a 10 km race".
- **No alcohol.** Several run notes mention pints and hangovers. No gag uses them.
- **No injuries played for pain.** The comeback runs (ankle, knee) are not used as triggers here. Bubble Wrap
  is about caution before a race, not about being hurt.
- **Heart rate is "what his watch recorded".** The gag is the gap between two readings, never a comment on
  his fitness.
- **Mark is the hero.** In every gag he ends up fine and usually pleased: through the wall, off the
  escalator, back in the race. The joke lands on the wall, the goose, the puddle or the watch.
