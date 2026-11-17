# MARKRUN progress record

## Team (genuine Claude Code subagents; models verified via the Agent tool)
- **Lead:** Opus 5.5. Owns the data import, DB, course geometry, race plan, contracts, integration and verification.
- **Adviser:** Fable 5.2, a separate subagent. Reviewed the architecture (milestone 1) and the first playable round (milestone 2).
- **Specialists:** Opus subagents for game design/comedy, 3D broadcast, and multiplayer/UI. Sonnet subagents for bulk Strava stream fetching.
- **Independent QA reviewer:** Opus, run without access to the authors' reasoning.

## Implemented
- **Historical data:**
  - 98 official Finsbury results (parkrun page, stored raw).
  - 1,468 Strava activities.
  - 98 pacing streams: 1 Hz for recent runs, about 3 s smart-recording for older ones; 2 of them extracted from longer runs.
  - Weather at 09:00 UK local time from Meteostat (96 of 98 runs; the 2 newest pre-date the station archive's coverage).
  - 2,205 facts, each with a basis and source refs.
  - 6 GPS-detected funfair course diversions.
  - All raw sources are kept. Everything is in SQLite.
- **Pacing check:** the reconstruction was checked against Strava's own lap data (2026-10-10). Km splits agree within about 2 s, and every runner finishes exactly at its official time.
- **Course:** the centreline is the median of 40 of Mark's GPS traces (2 laps, the Hill at about 1.7 km per lap, 22 m relief). Park features come from OSM.
- **Game:**
  - Banded field selection with archetypes and themes.
  - Three clues per runner (one public plus one private per player).
  - A public-information bookie.
  - Win and head-to-head bets.
  - Settlement, clue review, reveal cards, awards.
  - Two commentators with TTS and subtitles.
  - Drinking mode.
- **3D broadcast:** toon world with outlines, original characters, camera director, broadcast HUD, photo finish, funfair diversions.
- **Multiplayer:** QR join, private phone controllers, hidden bets until both players lock, reconnect tokens, session persistence across host restarts, and a Refresh Historical Data button (lobby only).

## Verified (latest)
- `npm test` passes (26 tests): data integrity, game (leak checker over thousands of rounds, payout maths), server (state machine, bet hiding, restart persistence) and race plan.
- `sh tools/offline_acceptance.sh` runs a network namespace with no internet route. It played 3 full rounds through real Chromium pages (TV plus 2 phones), killed and restarted the host after round 1, and resumed. Every round came from the real game module, with zero external requests.
- `tools/simulate.mjs` over 1,200 rounds:
  - favourite wins 36%, archetypes evenly mixed;
  - 45% of races have a late lead change, 23% are decided by 3 s or less;
  - zero clue leaks.

## Open issues / next priorities (from Fable's milestone-2 review and the lead's playtest)
1. Odds are too flat; private clues give no edge. Fix: one HOT TIP per player from in-race data, wider markets, contrarian head-to-heads.
2. Clue phrasing is monotonous ("X, or Y?"); some reveal fun facts repeat; dubious HR readings were shown as fact.
3. Round flow: staged bet reveal, a halfway in-play market, live phone status during the race, sofa-readable results with auto-advance, a double-payout final round, a finale superlatives reel.
4. Selection: themed rounds, at most 1 PB per field, round 1 not drawn from the fastest band.
5. 3D: an odd orange area by the lake, minimap empty during the flyover, truncated names, small funfair rides, sparse wide shots.
