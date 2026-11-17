# MARKRUN 🏃‍♂️📺📱

**MARKRUN** is a two-player sofa betting game built from Mark's real Finsbury parkrun history.

Each round, five genuine historical Finsbury parkruns become ridiculous characters. You both get factual-but-mischievous clues and bet fictional Parkpounds on your phones. Then a 3D broadcast replays the real race around Finsbury Park. Every runner follows its real recorded pacing and crosses the line at its exact official parkrun time.

## Quick start (the computer that drives the TV)

Requirements: **Node.js 22.13 or newer** (https://nodejs.org). Nothing else is needed: no database server and no internet during play.

```bash
cd markrun
npm install        # once
npm run build      # once (and after updating the code)
npm start
```

The console prints two addresses, for example:

```
TV:     http://192.168.1.23:8080/tv
Phones: http://192.168.1.23:8080/phone   (or scan the QR code on the TV)
```

1. **TV:** open the TV address in Chrome or Edge **on the host computer** (it is recognised automatically). If you'd rather use a smart-TV browser instead, use the `…/tv?key=…` address printed in the console: the key stops phones from posing as the TV. Send it to the TV over HDMI, or cast the tab or screen. Press **F** for fullscreen, then click once so sound and the commentators' voices can start.
2. **Phones:** both phones must be on the **same Wi-Fi** as the computer. Scan the QR code on the TV, type a name, pick an avatar and you're in.
3. If Mark is playing, he ticks **"I'm Mark (the runner)"** on his phone. He remembers his own runs, so the other player gets an extra hot tip.
4. **Start:** use the TV lobby, then pick the starting pot, rounds, bet timer, drinking-game mode, voice and music. Press **Space/Enter** on the TV (or tap "ready" on the phones) to move things along.

TV keys: `Space`/`Enter`/`→` next · `M` mute · `F` fullscreen · `L` force-lock all bets.

Useful start options:
- `npm start -- --port 9000`
- `npm start -- --host 192.168.1.23` (choose the LAN address yourself)
- `npm start -- --fresh` (forget the saved session)

### Troubleshooting
- **Phones can't connect:** check they're on the same Wi-Fi and not on a guest network. On Windows, allow Node.js through the firewall when asked, choosing *Private networks*. If the wrong address appears in the QR code, restart with `--host <your computer's Wi-Fi IP>`.
- **No voice:** click the TV page once. Browsers need a click before they can speak. Subtitles always show.
- **Something froze or the computer restarted:** run `npm start` again. The session (players, bankrolls, scores and the current round) resumes automatically. The phones reconnect by themselves.

## How a round works
1. **Introductions:** five anonymous historical Marks, each with a random nickname, colours and look.
2. **Clues:** each runner has 3 clues. One is public, on the TV and both phones. Each of you also gets one private clue on your own phone, either 🤫 gossip or one 🔥 **HOT TIP**. A hot tip is a true insider fact from the race itself, and the bookie hasn't priced it. Clue facts are true, but the framing is mischievous: some clues are hedged, some are plain facts, and some are Jeff or Pam confidently tipping (or slating) a runner. Dates, years, times and PBs are never shown before betting.
3. **Betting:** make win bets, head-to-head matchups and a side bet ("Will anyone visit the funfair?") at the bookie's odds. The bookie prices only what the public clues reveal, never the result. Bets stay hidden until both of you lock in, then the TV reveals them one at a time, smallest first. The final round pays double.
4. **The race:** a 3D broadcast of the real race. The broadcast clock runs faster through the middle and slows for the finale. The same clock applies to every runner, so real positions and overtakes are preserved. At halfway the race pauses for the **HALFWAY MARKET**: one in-play bet each at live odds. Your phone shows where your runners are and buzzes on lead changes. On the six real funfair weekends (Easter and August bank holidays), the GPS shows the course was diverted round the fairground. Those runners get distracted by the rides.
5. **Results:** cards flip over from last place to the winner, showing who each runner really was (date, official time, Strava title). Then come the clues that mattered (useful or red herring), payouts, awards and the scoreboard. Screens move on by themselves, or press **Next** on either phone. After the last round there's a champion ceremony with a superlatives reel.

## Your data (imported once, played forever)
All history lives in **`data/markrun.db`** (SQLite). It holds:
- 98 official Finsbury results
- 1,468 Strava activities
- 98 detailed pacing streams
- weather
- contextual facts, each with its source

The raw source files are kept under `data/raw/`. Game sessions are saved separately in `data/session.db`.

During normal play the game makes **no internet requests at all**. This is tested: `sh tools/offline_acceptance.sh` runs the game in a network namespace with no internet access, plays 3 full rounds through real browser pages, kills and restarts the host mid-session, and checks that everything resumes.

## Refreshing historical data (only when you want new parkruns)
Use **Refresh Historical Data** in the TV lobby (bottom right), or run `npm run refresh`. It only fetches what's new: the parkrun results page, any new Strava activities, pacing streams for newly matched parkruns, and weather.
- **Strava on the home computer:** create a free Strava API app once and run the one-line setup in [docs/REFRESH.md](docs/REFRESH.md).
- **No Strava setup:** ask Claude Code, which has the Strava connector, to "refresh MARKRUN historical data following markrun/docs/REFRESH.md option B", then pull the updated repository.

## For developers
- `npm test` runs data-integrity, game, server and race-plan tests.
- `node tools/e2e.mjs` plays full rounds with a TV and two phones in headless Chromium and blocks all non-local network access.
- `node tools/simulate.mjs --sessions 150` gives balance statistics: favourite win rate, archetype mix and repetition.
- `npm run audit` reports data coverage and quality.
- `node client/tv/race/devserver.mjs` serves a standalone 3D race preview at `/client/tv/race/preview.html`.
- Docs: `docs/CONTRACT.md` covers architecture and ownership, `docs/BRIEF.md` the art direction, and `docs/PROGRESS.md` the status record.
