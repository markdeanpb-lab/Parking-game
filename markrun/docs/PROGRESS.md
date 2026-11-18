# MARKRUN progress record

## Team (genuine Claude Code subagents, models confirmed through the Agent tool)
- **Lead:** Opus 5.5. Owns the data import, database, course geometry, race plan, contracts, integration and verification.
- **Adviser:** Fable 5.2, run as a separate subagent. It reviewed the architecture (milestone 1), the first playable round (milestone 2) and the release candidate (milestone 3).
- **Specialists:** Opus subagents for game design and comedy, the 3D broadcast, and multiplayer/UI. Sonnet subagents fetched the Strava streams in bulk.
- **Independent QA reviewer:** an Opus subagent with no access to the authors' reasoning. It ran 3D-mode playtests, checked phone edge cases and inspected WebSocket traffic for leaks.

## Implemented

### Data (imported once, played offline)
- 98 official Finsbury results, from the parkrun page (kept raw).
- 1,468 Strava activities.
- 98 pacing streams: 1 Hz for recent runs, roughly 3 s smart-recording for older ones. Two were extracted from longer activities.
- Weather at 09:00 UK time from Meteostat, for 96 of the 98 runs.
- 2,205 facts, each with its basis and references.
- 6 funfair course diversions, detected from GPS.
- All raw sources are kept, and everything is stored in SQLite.
- Refresh Historical Data is incremental: the parkrun page and weather are fetched directly, and Strava comes via the user's own API app or a Claude Code runbook.

### Pacing
- Checked against Strava's own lap data for 2026-10-10. Km splits agree to within about 2 s, and every runner finishes exactly at its official time.

### Course
- The centreline is the median of 40 of Mark's GPS traces: 2 laps, the Hill at about 1.7 km per lap, 22 m of relief.
- Park features come from OpenStreetMap.

### Game
- Banded field selection with secret archetypes and announced themes: band themes, data themes (Winter Warriors, Heatwave, Marathon Block, Taper, Windy, Rusty), The Funfair Stakes and a wildcard.
- At most one PB day per field, and round 1 never draws from the fast band.
- 3 clues per runner: one public, plus one private per player, either gossip or one 🔥 HOT TIP. Hot tips are true in-race insider facts that the bookie does not price.
- Clue styles: hedge, fact or Jeff/Pam tipster.
- The bookie uses public information only, fitted out of sample.
- Bets: win, head-to-head, funfair prop, halfway in-play market, and a double-payout final round.
- Bets are revealed one at a time, with clash lines.
- Clue review, sofa-readable reveal cards, awards, a session superlatives reel, two commentators with TTS and subtitles, and a drinking mode.
- "I'm Mark" handicap: the other player gets an extra hot tip.

### 3D broadcast
- Toon world with outlines and original characters.
- Finsbury Park landmarks: the lake with boats, the athletics track, playgrounds, the tree avenue, the Hill sign, km boards and arches.
- Crowd and set dressing.
- A camera director with a funfair cam, the halfway market pause, a photo-finish freeze, a podium and backer badges.
- One world per round, a real-time clock at low frame rates, and `seek` to resume after a TV reload.

### Multiplayer
- QR join and private phone controllers.
- Bets stay hidden until everyone locks.
- Live "your runner" status and vibration on the phones; the TV shows emoji reactions.
- Reconnect tokens, with seat claims approved on the TV.
- TV role authentication: loopback or a key.
- Progress-based safety timers.
- The session persists across host restarts.
- Refresh Historical Data is available in the lobby only.

## Verified (latest)
- `npm test`: 35/35 tests pass. They cover:
  - data integrity: official times, pacing monotonic and ending at the official time, facts with sources, idempotent import;
  - the game: leak checker over 2,000 rounds, payout maths, new bet types, hot-tip truth;
  - the server: state machine, bet hiding, restart persistence;
  - the race plan.
- `sh tools/offline_acceptance.sh` runs in a network namespace with no internet route. It plays 3 full rounds through real Chromium pages (TV plus 2 phones), including side bets and halfway bets, kills the host with SIGKILL after round 1 and resumes with identical bankrolls. Every round comes from the real game module, and no external requests are made.
- 3D-mode e2e (`--race=3d`) runs lobby → intro → bets → race → results → finale with no external requests. Headless software rendering is too slow for the bot to hit the halfway market in time.
- `tools/simulate.mjs`, over 1,200 rounds:

  | Measure | Result |
  |---|---|
  | Favourite win rate | 32% |
  | Win rate by price rank | 32 / 26 / 19 / 14 / 9% |
  | Median favourite price | 5/2 |
  | Rounds with an outsider at 10/1 or longer | 28% |
  | Hot tip ROI | +26% |
  | Random bettor ROI | about 0% |
  | Always-outsider ROI | −23% |
  | Late lead change | 45% of races |
  | Clue leaks | 0 |

- Independent QA confirmed:
  - no hidden-info leaks over WebSocket;
  - exact payout maths;
  - the same finish order everywhere;
  - solid bet validation.

  Its bugs (seat takeover, wall-clock timers, TV reload, net lines, TV auth, overlays) were fixed in iteration 2.

## Release-candidate fixes (Fable milestone-3 review: "ship, conditional on 2 blockers") — done
- Blocker 1: pre-race stakes capped at 50% of bankroll except in the double-payout finale (MAX chip); halfway bet counts within the cap;
  trailing player gets an extra hot tip in the final round.
- Blocker 2: finale reel = superlatives + ≤3 real awards, max 7 cards.
- Hot tips sit on the runner who was ahead, phrased positively, with a true finishing steer (ROI +24%); tipster openers never repeat in a round.
- Reveal cards: generic Strava titles replaced by "DID YOU KNOW?" + best true fun fact; extra fact line on every card.
- Halfway market: Jeff reads prices, phone shows "left to bet", market skipped when 2nd is >20 s back.
- TV betting card polish; 3D name tags avoid the HUD and hide in close-ups.
- Verified after fixes: `npm test` 38/38; offline acceptance (3 rounds, host SIGKILL + resume, side + halfway bets, zero external requests) passed.

## Open issues / next priorities
- Real-hardware frame rate unmeasured (headless rendering is software-only). If a laptop iGPU struggles in wide funfair shots
  (~1000 draw calls), merge static props per tile.
- The 3D-mode e2e is too slow headless for the bot to hit the 12 s halfway market (the 2D e2e covers that path).
- Pam's spoken reveal line still reads a generic Strava title ("Morning Run") even though the card shows a fun fact instead.
- The last two parkruns (Oct 2026) post-date the weather archive used, so they have no weather facts until a refresh.
- Hot-tip ROI (+24%) sits at the top of the target band; lower `tipPositiveShare` if tips feel too decisive in real play.


## Iteration 4: user feedback from the second game night, plus Fable's independent review (2026-11-18), done
- **Phase 1, the core game:**
  - Decisive key clues. Measured over 3,840 rounds: favourite wins 39%, clue-reader ROI +14%, blind outsider ROI −17%, hedged clues down to 12%.
  - FAVOURITE → OUTSIDER ranks, with plain-money winnings.
  - One head-to-head duel per round, showing both runners' clues.
  - A 500pp budget each round, with profit banked to a running score.
  - News-desk cold open, theme cards, a soft 90 s bet timer, and bug fixes.
- **Phase 2, the broadcast:**
  - Runners fill about 40–45% of the frame, with calm head-on cameras and a PiP map.
  - A big slanted HUD with player avatars, a clear finish line and photo finish, and consistent runner looks.
  - Weather and season visuals per theme.
- **Cutscenes:** 21 live gags (12 in batch 1, 10 in batch 2 from Fable's data dive; 2 benched), all triggered by real data.
  - About 3 per race, never more than one pause, with a DRAMATISATION stamp and a "what really happened" card for each.
  - Night storylines: Sub-20 Wall, PB Bell, Road to 100.
  - Funfair about 8% of races (rare, as the user asked).
  - Fable reviewed both batches, and its ship blockers are fixed.
- **Phase 3:**
  - Kokoro neural voices, pre-rendered during betting, with a fallback to the built-in voice. In this container a line takes about 2.5× real time; untested on a real MacBook.
  - Original composed CC0 music and stings.
  - The reveal as a memory prompt, plus the "Remember this one?" phone moment (+25pp).
- **Importer:** new facts for treadmill_7d, intervals_7d, hr_mean, cadence_spm and kudos.
- **Verified:** 101/101 tests; offline acceptance with a host restart (no phone scroll or clip, zero external requests); web edition with 25 checks; itch zip 3.2 MB.
- **Open:**
  - Restage "Before and After" and "Half Marathon Before Breakfast".
  - Real-hardware frame rate and voice speed are unmeasured.
  - The music is unheard by a human.
  - A reveal subtitle can linger from the previous card.
  - The player-text rewrite is deferred by the user; `content/MARKRUN_TEXT.txt` and the import tool are ready.
