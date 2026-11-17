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

## Open issues / next priorities
- Release-candidate fixes in progress:
  - cap pre-race stakes at 50% outside the finale;
  - trim the finale reel;
  - hotter hot tips;
  - fill reveal cards that have generic Strava titles;
  - market polish;
  - TV betting card polish.
- Real-hardware frame rate is not measured: the headless renderer is software-only. Merging static props per tile is the next step if a laptop iGPU struggles.
- The last two runs (Oct 2026) are newer than the weather archive used, so they have no weather facts until a refresh.
