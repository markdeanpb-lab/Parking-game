# Putting MARKRUN on itch.io (private) — step by step

You only need `markrun-itch.zip`: `release/markrun-itch.zip` in this repository, about 3.2 MB (it includes the music). There's nothing to install.

## 1. Create the project (on a computer, about 5 minutes)
1. Sign in at **itch.io**, open the account menu (top right), choose **Upload new project**.
2. Fill in:
   - **Title:** MARKRUN (anything you like).
   - **Kind of project:** **HTML**.
   - **Pricing:** **No payments**.
3. **Uploads:** click **Upload files** and choose `markrun-itch.zip`. When it has uploaded, tick **"This file will be played in the browser"**.
4. **Embed options:**
   - **Embed in page.** Viewport dimensions **1280 × 720**.
   - Tick **Mobile friendly**, and set orientation to **Portrait**.
   - Tick **Fullscreen button**.
   - Tick **Automatically start on page load**.
   - Leave **Click to launch in fullscreen** and **Enable scrollbars** **off**.
   - Tick **SharedArrayBuffer support**: this lets the premium commentary voices use several CPU cores, so they're ready faster.
5. **Visibility & access:** keep it as **Draft**. This keeps it private.
6. Click **Save**. On the project's edit page, itch shows a **Secret URL** for drafts. Copy it. Anyone with this link can play: share it only with your wife.

(Alternative: choose **Restricted** and set a **password**. itch then gives you a link that includes the password.)

## 2. One-time setup on the TV computer
1. Open the **Secret URL** in Chrome on the MacBook. Press the itch **fullscreen** button (bottom right of the game), or press **F**.
2. Click **📺 This is the TV**.
3. Click **⚙ Options** and paste the Secret URL into **Game page link**. Now the QR code on the TV opens the right page on your phones.

## 3. Every game night
1. MacBook: open the Secret URL, go fullscreen, click **This is the TV** (or **↩ Resume the TV**). Put it on the telly with an HDMI adapter or **Control Centre → Screen Mirroring**. Click once so the voices can talk.
2. Phones (best on the **same Wi-Fi** as the MacBook): scan the QR code on the TV, tap **Run game** if itch asks, then **📱 Join on my phone** and type the **4-letter code** shown on the TV.
3. Mark ticks **"I'm Mark"**. Play!

## If something goes wrong
| Problem | Fix |
|---|---|
| Phone says "Can't reach the TV" | Check the code. Keep the TV tab open and in front. Put both phones on the same Wi-Fi as the MacBook, not mobile data. |
| TV page was closed or reloaded | Open the link again and click **↩ Resume the TV**. The game and the room code come back, and the phones reconnect by themselves. |
| A phone dropped out | Reopen the page and tap **↩ Rejoin room**. Your bets are kept. |
| No voices | Click once on the TV. Subtitles always show. |

## Good to know
- **Premium voices:** the first time, the TV downloads the commentary voice model (about 90 MB) in the background. Until it's ready, commentary uses the browser's built-in voice. After that it's cached. You can switch it off in ⚙ Options.
- It needs the internet. A free public service (PeerJS) introduces the phones to the TV, then they talk directly.
- Keep the TV tab in the foreground while playing.
- Your running data is inside the zip (results, pacing, facts; no GPS routes from your other runs). Keep the project as Draft or Restricted.
- **New parkruns:** the itch version can't refresh itself. Ask Claude Code to "refresh MARKRUN historical data and rebuild the itch.io zip". Then on itch, **Edit game → Uploads**, delete the old zip and upload the new one, ticking "played in the browser" again.
