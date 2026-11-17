# MARKRUN UI redesign spec, iteration 3 ("declutter")

Source: player feedback from the first real game night, plus Nicolas Kraj, *Designing efficient user interfaces for games* (2020).
Player feedback in brief:
1. The TV and phone screens are "super super cluttered".
2. The phone should **click through, not scroll**.
3. The race camera moves too fast and is disorientating.

## The article's keys, applied to MARKRUN
1. **Protect the critical focus area.**
   - **TV race:** the runners, the centre and lower-centre two-thirds of the frame. No permanent UI there, ever. Permanent HUD sits in the corners only, small and light. Event stingers are brief, one at a time, and sit in the upper third.
   - **TV betting:** the five runner faces and their odds.
   - **Phone:** the one decision being made right now.
2. **Mix the UI categories**, choosing per element:
   - Spatial (in the world): a coloured ground ring or halo under runners a player backed, instead of HUD chips; floating name tags only when useful.
   - Diegetic: km boards, the lap board, the finish arch clock.
   - Meta: broadcast lower-thirds styled as a TV sports graphic.
   - Non-diegetic: a minimal position tower.
3. **Show only what matters in this context; hide the rest.**
   - Race HUD default: a compact top-3 tower, plus any runner a player backed if they're outside the top 3. Gaps show only in the final km.
   - Minimap: only in wide/drone shots, or not at all.
   - No "your bets" lists during the race.
   - Clue category labels, the "pays ×N" duplicates, decimal precision and "PUBLIC CLUE" taxonomy text all go. One icon each: 📺 public, 🤫 private, 🔥 hot tip.
4. **Design for flows and minimum eye travel.** Put information that's read together, together: e.g. a runner's odds next to their face, and a player's stake next to the runner. The phone is a linear flow of single-purpose steps.
5. **Mind visual weight.**
   - Fewer panels, fewer borders, one accent colour per context.
   - Big type for the one thing that matters; small, quiet type for everything else. A clue is a bold headline of 8 words or fewer, with an optional small kicker.
   - Test: if everything is shouting, nothing is.
6. **Design for the worst case, with safeguards.**
   - Long nicknames: use `shortName`, and fit or ellipsis.
   - 4 players, the maximum number of bets, and simultaneous events: at most ONE banner on screen, queued, with older ones dropped.
   - No overlap with subtitles.
   - The phone at 360×740 must never need vertical scrolling.

## Phone: click-through flow (no vertical scrolling at 360×740 or 390×844)
Every screen does one job. Big buttons sit at the bottom (thumb zone), with progress dots at the top.

**INTRO/BETTING**
1. **"Meet the field"**: one runner per screen, swiped or ‹ › tapped. Each screen shows:
   - a big portrait, the nickname and the odds;
   - the public clue (📺) and your private clue (🤫 or 🔥), headline style;
   - buttons: **Back to win** (opens a chip tray: 10 · 50 · 100 · MAX, then confirm) and **Next ›**.
   - The stake you've placed shows on the card itself.
2. **Head-to-heads**: one per screen. Tap a side, then pick a chip, or Skip.
3. **Side bet**: one screen (only if offered). Yes / No / Skip.
4. **Review**: a compact list of your bets (max 6 lines), the total staked and what you have left, **Edit** (jumps back) and **Hold to lock in** (press and hold for 0.8 s, with a fill animation and a haptic).
5. **Locked**: "Waiting for Jo…" with one large status. No other content.

**RACE**: one screen. Your backed runner(s): a big position and a status line ("2nd · closing"). Reactions sit as a single row of 5–6 emoji at the bottom.
**HALFWAY MARKET**: one screen, as today, fitting without scrolling.
**RESULTS**: one card per screen with **Next**: your net result, then your bets settled (max 6 lines), then any award.

## TV: decluttered layouts
- **Intro**: the 3D close-up is the focus. A slim lower-third shows the name, tagline and odds. One commentator line at a time.
- **Betting**:
  - Five runner cards, each with a face, name, big odds and ONE public clue headline (≤8 words, no labels). The kicker is small or omitted.
  - Head-to-heads and the side bet on one slim strip.
  - Player lock status as two small pills.
  - Subtitles only when someone is speaking, never covering the cards.
- **Race**: per key 3. Event banners are short ("LEAD CHANGE"), upper third, ≤1.5 s, one at a time.
- **Results**: one idea per screen, readable from 3 m.

## Camera: calm broadcast direction
- **Minimum shot length**: 8 s (10–12 s typical) through the middle of the race. Aim for no more than about 12–15 shots in a ~140 s race.
- **Smooth transitions**: blend between shots over about 1–1.5 s (camera glide) instead of hard cuts. Keep hard cuts only for the start gun, the finish line and the photo finish.
- **Fast middle**: while the broadcast clock is fast (mid-race, about 19× real time), use high, wide, slowly moving cameras (drone/blimp/far side), so the scenery doesn't whip past. Limit the camera's own speed and the apparent angular speed of the background.
- **Tight shots** only when the clock is slow: the start, the Hill if slowed, the funfair moment, the last 300 m.
- **Few, consistent shot types**: wide drone, side tracking from distance, head-on telephoto, the finish-line camera. Drop the rotating filler mix (blimp/chase/front/side cycling).
- **No camera shake**, and no FOV pumping.

## Premium pass (approved by the user; runs after the declutter)
Source: Fable's re-prioritised review ("make the current loop premium; no big new features").
- **P1 Finish set-piece:** a locked finish-line camera for the last ~150 m. Slow motion on the line, using the broadcast clock eased equally for all runners. A 3 s replay, then a per-player "MARK WINS 500pp" stamp. 3D + UI.
- **P2 Transitions and pacing:** one shared wipe plus sting between all phases. Time budgets: intros ≤45 s, reveal ≤20 s, results ≤60 s. Pre-staking allowed during intros. UI.
- **P3 Sound and haptics for every action:**
  - chip pitch rises with the stake;
  - lock-in thunk with a callout;
  - 10 s timer tick;
  - final-km music lift;
  - photo-finish heartbeat;
  - coin cascade on payouts;
  - music ducked under the voices, and voices never overlap.

  UI.
- **P4 Money in the race:** one live "if it ended now" number per player, flashing only on changes. Game (`provisionalNet`) + UI.
- **P5 One visual and motion system:** the race HUD uses the same fonts, tokens and panels as the menus, one easing curve, 150/400 ms durations, and counting numbers. 3D.
- **P6 Results choreography:** the winner is flipped last with the punchline, a tug-of-war payout, and avatars on awards. UI.
- **P7 Bet reveal face-off:** both players' chips on the runner cards, with a CLASH highlight and the biggest stake last. UI.
- **P8 Start and end of night:**
  - a cold open greeting the players by name;
  - an Options button;
  - one award at a time;
  - Rematch named after the loser;
  - a final-round Underdog Special for the trailing player.

  UI + game.
- **Safeguards:**
  - runners ≥15% of frame height mid-race;
  - a priority interrupt for lead changes involving backed runners;
  - the gap is shown when a backed runner is within 5 s;
  - a five-face strip plus a "Review & lock" shortcut on the phone;
  - kickers kept visible or spoken;
  - simulator re-run after the clue changes.

**Deferred:** Saturday Futures, The Marriage Ledger, "I Remember That One", halfway cash-out/double-down, a pre-recorded voice-over, and new prop types.
