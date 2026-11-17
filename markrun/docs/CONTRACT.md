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
