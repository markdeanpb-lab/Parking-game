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

## Web edition (itch.io, nothing to install)
The whole game can also run in the browser: the TV page is the host, and the phones connect to it peer-to-peer (WebRTC, matched up through the free PeerJS service).
- Build: `npm install`, then `npm run build:web`. Upload **`dist-web/markrun-itch.zip`** to itch.io: Kind of project **HTML**, tick **"This file will be played in the browser"**, viewport **1280 × 720**, tick **Mobile friendly** (orientation **Portrait**), **Fullscreen button** and **Automatically start on page load**. Set visibility to **Restricted** or **Draft** to keep it private.
- Play: on the MacBook, open the game page and click **📺 This is the TV**. The TV shows a 4-letter room code and a QR code. On each phone, scan the QR or open the game page and tap **📱 Join on my phone**, then enter the code. In ⚙ Options you can set the **Game page link** for the QR code to open. Leave it empty and the QR opens the game directly with the code filled in.
- Keep the TV tab open and visible. Same Wi-Fi is best. Reloading the TV or a phone resumes the game.
- New parkruns: refresh the data in the home-computer edition, run `npm run build:web` again and re-upload the zip. The web edition can't refresh by itself, so its Options show "Data last updated".
- Tests: `npm run test:web` uses a local signalling server and cross-origin iframes. `npm run test:web:cloud` does a quick check against the real PeerJS cloud.

## For developers
- `npm test` runs data-integrity, game, server and race-plan tests.
- `node tools/e2e.mjs` plays full rounds with a TV and two phones in headless Chromium and blocks all non-local network access.
- `node tools/simulate.mjs --sessions 150` gives balance statistics: favourite win rate, archetype mix and repetition.
- `npm run audit` reports data coverage and quality.
- `node client/tv/race/devserver.mjs` serves a standalone 3D race preview at `/client/tv/race/preview.html`.
- Docs: `docs/CONTRACT.md` covers architecture and ownership, `docs/BRIEF.md` the art direction, and `docs/PROGRESS.md` the status record.

## Rewriting the text
Every line a player can see or hear (commentary, clues, nicknames, hot tips, quips, awards, TV and phone screens, the web launcher, the 3D banners) can be exported to one plain-text file, rewritten in any text editor, and put back into the code automatically.

1. `node tools/text_export.mjs` writes **`content/MARKRUN_TEXT.txt`** (plus `content/text_index.json`, which the import needs; don't edit that one). The end of the output shows how many entries each section has. Add `--excluded` to also list text that was deliberately left out, and why.
2. Edit the text lines in `MARKRUN_TEXT.txt`. The rules are at the top of the file: leave the `[ID]` lines alone, keep every `{placeholder}`, keep one entry per ID, and an empty line ends an entry.
3. `node tools/text_import.mjs path/to/revised.txt` is a dry run. It lists every change and any problems: a dropped `{placeholder}`, a missing `||`, broken `<b>` tags, or an entry that is **STALE** because its source line changed after the export.
4. `node tools/text_import.mjs path/to/revised.txt --apply` writes the changes. Each file is syntax-checked before it is written, and lines with problems are skipped. Then run `node tools/text_export.mjs` again (the changed lines get new IDs) and `npm test`. Tests that check exact wording may need updating too.

The export only reads the code. What counts as player text, and which section each line goes in, is set in `tools/text_rules.mjs`. `tests/text-roundtrip.test.mjs` checks the round trip.
