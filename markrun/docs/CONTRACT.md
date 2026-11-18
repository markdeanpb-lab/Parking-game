# MARKRUN integration contract (frozen; change only via the lead)

Fixture built from REAL data: `data/fixtures/round.json` (`node --disable-warning=ExperimentalWarning tools/make_fixture.mjs`).
Its names/clues/odds are placeholders until the game module produces real ones; its race plan is real.

## Layout and ownership
| Area | Files | Owner |
|---|---|---|
| Data import, DB, course geometry, race analysis | `server/db.mjs`, `server/import/**`, `server/game/raceplan.mjs`, `tools/build_course.py`, `tools/build.mjs`, `data/**`, this doc | lead |
| Game logic + content | `server/game/**` (except raceplan.mjs), `tools/simulate.mjs`, `tests/game*.test.mjs` | game designer |
| 3D race broadcast | `client/tv/race/**` | 3D specialist |
| Server, networking, phones, TV shell/screens, audio/TTS | `server/index.mjs`, `server/net/**`, `client/phone/**`, `client/tv/*` (not race/), `client/shared/**`, `tests/server*.test.mjs`, `tools/e2e.mjs` | multiplayer/UI |

Build: `npm run build` bundles `client/tv/main.js` -> `client/dist/tv.js` and `client/phone/main.js` -> `client/dist/phone.js` (esbuild, three.js bundled; no CDN — must work offline).
Static data the TV may fetch from the host: `/data/course.json`, `/data/park.json` (served from `data/course/`).

## Hard rules (all owners)
- Never contact Strava/parkrun/weather/any internet host at startup or during play. Everything from SQLite + local files. No CDN fonts/scripts.
- Before betting ends, nothing sent to TV or phones may reveal: dates, years, official times, PB status, finishing order, race archetype, event numbers, positions, Strava titles/descriptions (they contain dates/times). Phones never receive the race plan.
- Runner nicknames/colours/looks are randomised per round, independent of identity.
- Facts in clues must come from the `facts` table (with its `basis`/`refs`); framing may be mischievous, values must be true.

## Round lifecycle (server-authoritative)
`LOBBY -> INTRO -> BETTING -> RACE -> RESULTS -> SCOREBOARD -> (INTRO of next round | FINALE)`

## Game module API (server/game/round.mjs)
```js
createRound({ hist, sess, players: [{id, name}], roundNumber, settings, rng }) -> Round
settleRound(round, betsByPlayer: {[playerId]: Bet[]}, bankrolls: {[playerId]: number}) -> Results
```
### Round (server-side object; split for transport)
```js
{
  id, number,
  public: {                     // -> TV and phones
    roundId, number, title,     // title e.g. "The 9am Stakes"
    runners: [{ id: 'r1'..'r5', lane: 1..5, nickname, tagline,
      colour: { primary: '#hex', secondary: '#hex', name },
      look: { build: 'stocky'|'lanky'|'compact'|'tall', hat: string|null, hair: string, accessory: string|null, skin: '#hex', face: string },
      personality, intro,          // intro = TV announcer line
      publicClue: { id, text, category },
      odds: { win: 4.5, display: '7/2' } }],
    matchups: [{ id: 'm1', a: 'r2', b: 'r4', odds: { a: 1.9, b: 1.9 } }],
    rules: { minStake, maxBetsPerPlayer }
  },
  private: { [playerId]: [{ runnerId, id, text, category }] },   // -> only that player's phone (one per runner)
  racePlan,                      // -> TV only, at RACE start (shape below)
  hidden: { ... }                // server only: performances, facts, archetype
}
```
### Bet (phone -> server)
`{ type: 'win', runnerId, stake } | { type: 'h2h', matchupId, pick: runnerId, stake }`

### RacePlan (server/game/raceplan.mjs buildRacePlan) -> TV
```js
{ roundId, courseLengthM: 5000,
  runners: [{ id, officialS, progress: number[201] /* race seconds at every 25 m; last == officialS */, pacingSource }],
  timeMap: { map: [[raceS, broadcastS], ...] /* every race second */, durationS, raceEndS },
  events: [{ type: 'overtake'|'lead_change'|'breakaway'|'hill'|'lap'|'final_stretch'|'finish', raceS, broadcastS, ...details }],
  commentary: [{ broadcastS, text, speaker: 'jeff'|'pam', priority: 1..3, eventRef? }],   // added by game module
  finishOrder: [runnerId...], summary: {...} }
```
Position of runner r at broadcast time b: `raceS = broadcastToRace(timeMap, b)`, `metres = distanceAt(r.progress, raceS)`
(both exported from `server/game/raceplan.mjs`; pure functions, safe to import in the browser bundle).
On-course position: fraction = metres / 5000 along `course.json` `points` (polyline, 10 m steps of the 5000 m course).
A runner MUST cross the line exactly at `officialS` race time. The time map is shared by all runners (never per-runner).

### Results (settleRound)
```js
{ roundId, finishOrder: [{ runnerId, place, officialS, timeText }],
  reveal: [{ runnerId, date, dateText, eventNumber, overallPosition, ageGrade, stravaTitle, stravaDescription, finsburyNumber, wasPB, pacingSource, funFacts: [string] }],
  clueReview: [{ runnerId, clueId, owner: 'public'|playerId, verdict: 'useful'|'red_herring'|'neutral', quip }],
  archetype: { key, label, blurb },
  payouts: { [playerId]: { bets: [{ ...bet, won: bool, returned: number }], net: number, bankroll: number } },
  awards: [{ playerId, title, text }],
  commentary: [{ text, speaker }] }
```

### TV race view API (client/tv/race/index.js)
```js
createRaceView(container, { course, park, round: Round.public, plan: RacePlan, backedBy: { [runnerId]: [playerName] } })
  -> { playIntro(onDone), playRace(onEvent, onDone), showPodium(results), setPaused(b), dispose() }
```
`onEvent(evt)` fires as the broadcast passes each plan event / commentary line (shell uses it for subtitles + TTS).

## Iteration 2 additions (frozen 2026-11-17; game module provides, server/UI consume)
- Private clue objects gain `tier: 'hot' | 'gossip'`. Each player gets exactly ONE `hot` tip per round, a genuinely informative,
  TRUE in-race insider fact the bookie did NOT price, e.g. "hit the Hill first on lap 1" or "quickest first km in this field". Never a time, date or result.
  The rest are `gossip` (training/weather facts). The runner-player handicap is `settings.runnerPlayerId`: the OTHER player gets one extra hot tip.
- `round.public.theme = { key, label, blurb }` is announced on the TV (e.g. "Winter Warriors", "The Funfair Stakes"). The archetype stays secret.
- `round.public.payoutMultiplier`: 2 on the final round ("DOUBLE PAYOUT FINALE"), else 1.
- `round.public.props = [{ id, text, odds: { yes, no, displayYes, displayNo } }]` (e.g. "Will anyone visit the funfair?").
  Bet `{ type: 'prop', propId, pick: 'yes'|'no', stake }`.
- In-play "HALFWAY MARKET": `inPlayMarket(round)` returns `{ atM: 2500, standings: [{ runnerId, place, gapS }], odds: { [runnerId]: { win, display } } }`.
  Prices come only from the halfway standings and gaps that are on screen at that moment. At the plan's `lap` event the TV pauses the broadcast,
  the server opens the market for ~12 s, and each player may place ONE bet `{ type: 'inplay', runnerId, stake, odds }`.
  It's settled like a win bet at the locked-in odds.
- `betRevealOrder(round, betsByPlayer, bankrolls, players)` returns `[{ playerId, bet, line: { speaker, text } }]`, smallest to largest bet
  relative to bankroll. It names clashes ("they've both backed…") and head-to-head opposition. The TV reveals one at a time.
- `sessionSuperlatives(history, players)` returns `[{ title, text, playerId? }]` for the finale reel: biggest win, worst bet, most
  misleading clue of the night, "the real Mark of the night" (fastest actual run shown, with date), funfair moments.
- Results: `clueReview` gains `highlight: true` on the ≤3 clues that mattered most. `reveal[].headline` is the sofa-readable
  one-liner (date + time + Strava title). Detailed stats stay in `reveal[].funFacts`, shown on the phones, not the TV.

## Iteration 4 additions (user-approved 2026-11-18): phases 1–3
Ownership this iteration (new agents). Keep to your area, and use a small hook (call site) in another owner's file only where listed.
- **Game logic:** `server/game/**`, except `cutscenes.mjs`.
- **Cutscene planning:** `server/game/cutscenes.mjs` (new), called from round.mjs. The game agent adds that one call.
- **TV/phone/server UI:** `client/tv/*` (not race/), `client/phone/**`, `client/shared/**` (except portrait.js, see below), `server/net/**`, `server/index.mjs`, `web/**`.
- **3D broadcast:** `client/tv/race/**`, except `client/tv/race/cutscenes/**`.
- **Cutscene playback:** `client/tv/race/cutscenes/**` (new), with a small surgical hook in race/index.js and director.js.
- **Character look:** `client/shared/portrait.js` is owned by the 3D broadcast agent for this iteration, so portraits match the 3D runners (F6).

### New fields
- `public.runners[].rank`: 1..5, favourite to outsider, derived from the odds. The UI shows "FAVOURITE", "2nd favourite"… "OUTSIDER" prominently, with plain-money winnings ahead of the fractional odds.
- `public.theme = { key, label, blurb, explainer: [≤3 short lines], visual: { season: 'winter'|'spring'|'summer'|'autumn', weather: 'clear'|'rain'|'wind'|'fog'|'frost'|'sun', time: 'morning' } }`.
  - `visual` reflects the round's theme or the real conditions: for band themes, the weather of the median run; for data themes, the theme itself.
  - The 3D world uses it for theme visuals.
- **Economy (F5): score is separate from stakes.**
  - Each round every player gets a fresh betting **budget** (`settings.roundBudget`, default 500pp), which is NOT their score.
  - The net profit of the round is banked into a cumulative **score**: winnings minus stakes, and it can be negative.
  - The final round still pays double.
  - Bankruptcy and bailouts disappear.
  - `public.rules = { budget, minStake, maxBetsPerPlayer }`. Phones show "Budget left" while betting and the score elsewhere.
  - Settlement returns `{ net, score }` per player.
- **Bets:** win, plus ONE head-to-head per round. The funfair side bet is offered only in The Funfair Stakes theme. Head-to-head and side-bet screens show the relevant runners' clue headlines.
- **Cutscenes:** `racePlan.cutscenes = [{ id, kind, who, mode: 'replay'|'freeze'|'inset'|'slowmo'|'pre'|'post', atBroadcastS, durationS, params }]`, chosen from real data triggers by `server/game/cutscenes.mjs`.
  - Rules from docs/CUTSCENE_IDEAS.md:
    - ≤3 pausing cutscenes and ≤18 s of pause per race, ≥20 s apart;
    - none once the leader is in the last 300 m, and none during a live battle;
    - a cooldown across the night.
  - Freeze/replay modes PAUSE the broadcast clock, so they never change timing. Slow-mo eases the clock equally for ALL runners.
  - Each cutscene carries `lines: [{ speaker, text }]` (≤2 short lines) for the commentators. The reveal includes "What really happened".
- **Commentary voice (phase 3):** commentary lines are known when the race starts. The TV pre-renders them with Kokoro neural voices while bets are placed, and falls back to speechSynthesis if not ready.
