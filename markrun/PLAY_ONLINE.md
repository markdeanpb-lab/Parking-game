# Play MARKRUN with nothing installed (GitHub Codespaces)

GitHub lends you a small computer in the cloud (a "codespace"). It's free for personal accounts, with about 60 hours a month included. The game runs on that cloud computer. You open a link on the MacBook for the TV screen, and you both scan a QR code with your phones.

**First time: about 5 minutes. After that: about 1 minute.**

## Start a game
1. On the MacBook, open Chrome and sign in at **github.com**, then go to **github.com/markdeanpb-lab/Parking-game**.
2. Click the branch button near the top left (it says **main**). Choose **ccr-614f0e43-fz7ig0**.
3. Click the green **Code** button, open the **Codespaces** tab, then click **Create codespace on ccr-614f0e43-fz7ig0**.
   - The first time, it sets itself up for 2–4 minutes. Let it finish.
   - Next time you won't create a new one. Go to **github.com/codespaces** and click the one you already have.
4. A code-editor page opens in the browser. Ignore the code. At the bottom there's a **Terminal** panel. If you can't see it, use the ☰ menu: **Terminal → New Terminal**.
5. Click in the Terminal, type this and press **Enter**:
   ```
   markrun/play-online.sh
   ```
   **Important, every time:** open the **PORTS** tab (next to TERMINAL), right-click port **8080**, and choose **Port Visibility → Public**. Without this, the phones get a **404** page. The script tries to do it for you and tells you whether phones can join (✅ or ⚠️).
6. After a few seconds it prints a line starting **`TV: https://…`**. Hold **⌘ Command** and click that link. It opens in a new tab.
   - If GitHub shows a page saying you're about to access a development port, click **Continue**.
7. That new tab is the **TV screen**:
   - Put it on the telly with an HDMI adapter, or with **Control Centre → Screen Mirroring**.
   - Press **F** for fullscreen.
   - **Click once** so the commentators can talk.
8. **Phones:** scan the QR code on the TV with the camera app and tap the link. Type a name and pick an avatar. Mark ticks **"I'm Mark"**. Then play!

Keep the codespace tab open while you play. The phones and the TV can be on any internet connection; they don't even need to be on the same Wi-Fi.

## If something goes wrong
| Problem | Fix |
|---|---|
| A phone shows a **404** or a **GitHub sign-in** page | Go back to the codespace tab and open the **PORTS** tab next to Terminal. Right-click port **8080**, choose **Port Visibility → Public**, then scan the QR code again. |
| A phone shows "about to access a development port" | Tap **Continue**. GitHub shows this once. |
| Nothing happens when the script runs | Wait a minute, because the first start can still be setting up. Then run `markrun/play-online.sh` again. |
| The TV tab says it's reconnecting | Check the codespace tab is still open, then press **Enter** in the Terminal to see if the game stopped. If it did, run the script again. Scores are saved, and the game carries on where it left off. |
| No voices | Click once on the TV tab. Subtitles always show. |

## When you've finished
Just close the tabs. The codespace switches itself off after about 30 minutes of doing nothing, and your scores are kept. To delete it completely, go to **github.com/codespaces**, click **⋯** next to it, then **Delete**.

## Good to know
- This way needs the internet. The home-computer setup in README.md works with no internet at all.
- The game link is public, so anyone who has it could open it. Only share it with the person you're playing with. The TV controls are protected by a secret key in your TV link.
- Keep the repository **private**: it holds your running history, including route outlines that can reveal where you live. Codespaces work fine with private repositories.
