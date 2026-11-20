# Live hijinks v2: design

The user's verdict on v1: a good start, but it felt rushed, and the gags had no stakes. v2 fixes both.
- **Real time on the beat.** The shared broadcast clock eases down to real time around the moment that matters.
- **Every headline gag has a consequence.** A place really changes hands, on screen.
- **The threat is telegraphed first,** so the sofa gets its "uh oh".
- **His own training week.** Some gags come straight from the runner's real week.

Fable's v1 review is folded in.
- The biggest gag goes on the deciding lead change.
- The final kilometre is reserved for the battle.
- The chip carries the name, the places and the time delta, and the backer's avatar flashes.
- Pam retorts after each gag, and the money lines name the player.
- Micro-gags fill the gaps without a camera cut.
- "What really happened" cards follow the race.

Code:
- `server/game/hijinks.mjs` is the planner.
- `server/game/raceplan.mjs` has `retimeForWindows`, the eased clock.
- `client/tv/race/hijinks/index.js` is playback.
- `tools/build_hijinks_preview.mjs` builds `release/hijinks-preview-v2.html`.

Tests are in `tests/hijinks.test.mjs`.

## 1. What the data says

These sources were studied:
- `data/markrun.db`, which holds 98 Finsbury runs, `performances.progress` every 25 m, and 1,468 Strava activities.
- The facts table, with 2,650 rows across 27 keys.
- 150 to 300 rounds generated with `createRound` (scratch scripts `study.mjs`, `pick2.mjs` and `pick3.mjs`).

**Passes and pace.** The 150 generated rounds produced 1,367 real passes between 300 m and the final kilometre, about 9 per round.
- In 417 of those passes, the passed runner was 4% or more off his own pace over the 200 m round the pass. That is a "lose" gag on him.
- In 723, the passer was 4% or more quicker than his own pace. That is a "gain" gag.
- 29 passes were both, and 256 (19%) were neither. The neither group gets the pace-free pass gags, leapfrog and cartwheel.
- Per round, a median of 7 passes have a real pace cause (minimum 0, maximum 26).
- 88 passes happened on the Hill.
- Another 373 passes happened in the final kilometre. Most of those belong to the lead battle and stay clean.

Passes that are given straight back within 20 race seconds are dropped. A "+1 PLACE" that reverses in the next breath is a lie.

**Lead changes.** 45 of 261 rounds without a funfair detour have their deciding lead change in the final kilometre with a backed runner in it. Those rounds get THE moment (section 3).

**Training facts** come from the runner's own seven days before the run. Counts and kinds only: names, titles and descriptions are never shown or matched.

| Fact | Of the 98 runs | Rounds (of 150) where at least one of the five has it |
|---|---|---|
| Bike ride(s) in the week | 22 (+3 the day before) | 105 |
| Swim(s) | 7 (+1) | 67 |
| Weights | 15 (+1) | 91 |
| Treadmill run(s) | 16 | 69 |
| Interval session(s) | 26 | 105 |
| A half marathon in the previous 7 days | 6 | 22 |
| A marathon block, or a marathon in the last 14 days | 5 | 4 |
| Another race the very next day | about 7 | 44 |
| Skiing | 2 | 1 (left out) |

Activity names and descriptions sometimes mention real people, so they are never read for gags. "Overslept and hungover" is the kind of title we skip on tone grounds too.

## 2. The catalogue

Each gag has a trigger and a frequency over 200 generated rounds, with Mark and Jo backing the two runners in the final lead change. Every gag lands on a real pace or position moment, and nothing moves a runner. The rounds average 6.0 headline gags (median 6, maximum 8) plus 3.7 micro-gags.

| Gag | Trigger (all real) | Telegraph (the "uh oh") | Beat (at 1x) | Consequence | Freq. |
|---|---|---|---|---|---|
| Goose chase | He slowed at least 4%, and is passed | The goose waits on the verge ahead, honking | CHOMP on the shorts as the rival goes by | −1 | 75 |
| Banana | Slowed and passed | A peel on the path, with a flashing ring and "!" | He slips, legs windmilling, as the rival goes by | −1 | 60 |
| Raincloud | Slowed and passed | A black cloud rolls in from up the course, "RUMBLE" | Soaked, hunched, splosh | −1 | 26 |
| Rocket shoes | Surged at least 4%, and passes | His heels fizz ("FZZT") | Ignition, flames, speed lines | +1 | 67 |
| Wasps | Surged and passes | A swarm hangs by the path, "BZZZZ" | He bolts with arms flailing, "ZOOM" | +1 | 60 |
| Ice-cream van | Surged and passes | The van parked ahead, jingle notes floating up | He chases it past the rival, "WAIT!" | +1 | 68 |
| Leapfrog | Pass with no pace story | Springs on his heels | He vaults the man he passes; "OI!" and a fist | +1 | 47 |
| Cartwheel | Pass with no pace story | "WATCH THIS" | Two cartwheels past; a double take, "?!" | +1 | 21 |
| Hill rope | Lap-1 Hill at least 12% slower than his average | Maureen waves from up the climb | She hauls him up on a rope | (flavour) | 25 |
| **Pedal legs** | Bike ride(s) that week, plus a real surge-pass | A ghost bike fades in under him | His legs turn like pedals, "DING DING" | +1 | 21 |
| **Front crawl** | Swim(s) that week, plus surge-pass | A puddle ahead with a marker | He swims through it, splashing | +1 | 18 |
| **Lap counter** | Interval session(s) that week, plus surge-pass | A giant stopwatch counts 3, 2, 1 | "GO!", BEEP, he kicks: "REP!" | +1 | 26 |
| **Flex** | Weights that week, plus a surge-pass on the Hill | A "GYM WEEK..." bubble | Double biceps up the climb | +1 | rare |
| **Incline button** | Treadmill run(s) that week, plus slowed-and-passed | A treadmill console floats in, "INCLINE 0.0%" | He jabs the buttons, "BEEP? BEEP?" | −1 | 32 |
| **Foil cape** | A half marathon that week, plus slowed-and-passed | Headwind lines | The foil blanket billows like a parachute | −1 | 8 |
| **Marathon legs** | Marathon block, plus slowed-and-passed | The knees start to wobble | Jelly legs | −1 | rare |
| **Bubble wrap** | Racing again tomorrow, plus slowed-and-passed | Wrapped up | Tiptoeing; "POP!" | −1 | 12 |
| **Lasso reel (THE moment)** | The deciding lead change in the final km, with a backed runner in it | He swings a lasso round his head, "YEE-HAW!" | Throws it over the leader, reels himself in, lets go and takes the lead | ▲ to 1st | 45 / 261 rounds |

Bold rows are the training-life gags. A round averages 1.1 of them (maximum 4).

Fable's other ideas were evaluated and are not built yet:
- **Photo-finish lunge** (margin under 1 s): only 9% of rounds qualify, and the 3D engineer owns the photo-finish set piece. It's the next candidate for THE moment when the margin is under 1 s.
- **Piano drop** (his slowest km is the last): it conflicts with "the final km belongs to the battle" unless the piano victim is in the battle. Planned as a THE-moment variant.
- **Dog-lead tangle** (two runners within 0.5 s for 15 s or more, with no pass): a good fit for the middle of the race. Next on the list.
- **Tea stop / catapult at the lap-2 summit:** the lap-2 Hill is in the final kilometre, so it fires only if the runner is in the battle.

**Micro-gags.** These last 1.5 s, need no camera cut, and play only if their runner is already in the shot.

| Micro | Trigger |
|---|---|
| Stitch (hand to side, "OOF!") | A real 100 m dip of at least 4.5% |
| Shoelace (a lace flapping, a glance down) | A real 100 m dip of at least 4.5% |
| A dog yapping alongside | A real 100 m kick of at least 4.5% |
| A hat blowing off | A real 100 m kick of at least 4.5% |

Micro-gags must not land within about 2 s of a headline gag, and must be at least 6 s apart. In the final kilometre they only go on the lead pair.

## 3. Consequence rules

- **The consequence is the real pass.** "Lose" is a pass on him while he really was slower than his own pace. "Gain" is a pass by him while he really was quicker.
  - The place has to hold for 20 race seconds.
  - The chip shows the places, from the real ranks 6 s before and 20 s after the pass, as "▼ 2nd→3rd" or "▲ 3rd→2nd".
  - It also shows the time he lost or gained over the 200 m against his own average ("LOST 2.1 s").
- **The money.** When a backed runner is involved:
  - The backer's avatar flashes in the chip.
  - Jeff names the player ("Mark's money is wobbling!", "Kerching for Jo!").
  - If both backed runners are involved: "Jo is off the sofa! Mark can't look!"
  - Pam gives a retort after the gag.
- **The final kilometre belongs to the lead battle.** Nothing else is decorated there. If the deciding lead change has a backed runner in it, it gets THE moment:
  - The lasso.
  - The longest real-time beat (4.5 s before the pass, 3.5 s after).
  - It is placed first.
- **Selection.**
  - Best first, scored on:
    - the pace anomaly
    - his own week (+3)
    - backed subject (+4); backed other runner (+2.5)
    - a consequence (+2)
    - a lead change (+1.5)
    - early in the race (−1.5)
  - Spread out, one of each kind, and at most 3 per runner.
  - Telegraph-to-end spans never overlap.
  - Nothing before about 11 broadcast seconds, so the gun shot is left alone.

## 4. The clock (real time on the beat)

`retimeForWindows(plan, windows, { maxDurationS })` rebuilds the time map. Each hijink's beat runs at **1 race second per broadcast second**, from 2.2 s before the pass to 1.8 s after (4.5 s and 3.5 s for THE moment). It ramps in and out over 3.5 race seconds either side.

One clock serves every runner, so positions, order and finishing times are untouched (the unit tests check this). Every event and commentary time is recomputed from its race moment.

To stay within about 3 minutes (178 s plus the 8.5 s pre-roll), the middle of the race is sped up evenly, never more than 1.8x. The start and the finale are untouched.

Each headline gag then plays as:
1. **Telegraph**, about 2.6 s. The threat comes into view, and the HUD shows the uh-oh chip, for example "⚠ HUGGER (Mark's pick): NO INCLINE BUTTON".
2. **Gag**, about 1.2 s, while the clock eases down.
3. **Beat at 1x**, 4 to 8 s.
4. **Consequence**: the chip and badge with "▲/▼ places · time", the avatar flash, the money line and Pam's retort.

## 5. Telegraph and labels

- **The threat is placed where the camera can see it.** A hazard waits at its real spot once he's within 6 to 7 m of it. Until then it is held 6 to 7 m ahead of him, because at the fast clock he closes 50 m a second.
- **One chip at a time,** carrying the name: "BANANA! · SPIKES", then "SPIKES ▼ 3rd→4th · LOST 2.1 s".
- **Bursts sit above and ahead of the runner,** off his face and his name tag. Bursts that only repeated the chip were removed.
- **One subtitle at a time.** A hijink line has the floor, and regular commentary that would land on a gag is dropped in the preview. Names in the commentary use the HUD's short name.
- **Director.**
  - A hijink is a subject from its telegraph onwards. That is a one-line hook: `telegraphAtBroadcastS ?? atBroadcastS - 1.2`.
  - The close gag cameras (`gag3q`, `gagside` and `gagrear`) and the side choice are from v1.
  - The 3D engineer owns the rest of the director, the tags and the finish.

## 6. Fields on `plan.hijinks[]` (for the director and the HUD)

- `id`, `kind`, `who`, `other?`, `name` (the short name), `backers` ([player names])
- `telegraphAtBroadcastS`, `atBroadcastS`, `beatBroadcastS` (the real pass), `untilBroadcastS`
- `raceS: { telegraph, at, beat, until, slow0, slow1 }` (race seconds; the source of truth for retiming)
- `consequence: { type: 'lose'|'gain', places, other, from, to, fromText, toText, deltaS } | null`
- `finale?` (true on THE moment), `warn` (the uh-oh text), `caption`
- `line`, `retort`, `after` (`{ speaker, text }`)
- `angles`, `lookAhead?`, `prio`, `truth` (the "what really happened" card)
- `params: { atM, ratio?, passB }`

`plan.microGags[]` holds `{ id, kind, who, atBroadcastS, untilBroadcastS, raceS: { at } }`. The director doesn't read it, so a micro-gag never causes a cut.
