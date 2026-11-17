# MARKRUN studio brief (shared by all specialists)

## The product
A two-player sofa party game (Mark + his wife, drinks in hand). Computer hosts and drives the TV; both join by QR on
their phones, which become private betting controllers. Each round: ~5 genuine historical Finsbury parkrun
performances of Mark become silly characters; each has 3 factual-but-mischievous clues (1 public on TV + phones,
1 private to each player's phone). Players bet fictional money (win bets + head-to-head matchups). A 3D broadcast
plays the REAL reconstructed race (1 Hz Strava pacing, rescaled to the official time) around the real 2-lap Finsbury
Park course with comedic British commentary. Then reveal (real date/time/Strava title), clue post-mortem, payouts,
scoreboard, next round. "Mario Party meets horse racing meets an absurd British sports broadcast."
Priorities: laughter, arguments about predictions, suspense, surprising outcomes, replayability, premium feel.

Read `docs/CONTRACT.md` (data shapes, ownership, hard rules). `data/fixtures/round.json` is a real-data fixture.
Project root: /home/user/Parking-game/markrun. Node 22 (`node:sqlite`), ESM everywhere.

## Art direction (everyone)
User's reference images (view them with the Read tool):
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/dfe508db-image.jpg  party-game race: chunky blue-grey track with white lane lines + chequered finish, red/white kerbs, blue chevron A-frame barriers, striped cones, cheering mushroom-people crowd, bright green grass
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/0d5dd9be-image.jpg  party-game board HUD: bold slanted player panels along the bottom with portrait, big ordinal ("1st"), coin counters; chunky number badge; soft pastel world
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/7bcc85c7-image.jpg  party-game overworld: saturated toy-like terrain, chunky low-poly trees, tan tiled paths, white picket fences, flags, bunting, big bright sky with puffy clouds
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/b9c59ae7-image.png  stylised hero-shooter character: exaggerated proportions, big hands/feet, painterly toon shading, strong silhouette, clothing details
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/6186b71a-image.jpg  same style, full body: big chest, chunky boots, belts/pouches, confident pose
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/8c1fc42d-image.jpg  cel-shaded kart racer: THICK BLACK OUTLINES, flat toon bands, HUD with slanted blue panels, big yellow numerals with dark outline, ordinal badge "3rd"
/root/.claude/uploads/201ae4ef-9467-51e3-9846-baf7bf89ba8b/6891e8e3-image.jpg  same game, desert: flat colour regions, outlines, chunky rocks, wooden fences

Translate into: bright saturated toy-like world, toon shading with crisp black outlines, chunky exaggerated original
characters (big heads/hands/feet, distinct silhouettes), bold slanted broadcast HUD panels with big outlined numerals.
NEVER copy any existing game's characters, logos, names or assets — everything must be original. Recognisably
Finsbury Park (course shape, boating lake, athletics track, tennis courts, tree-lined avenue, the Hill), stylised.

Shared UI language: fonts are bundled locally in `client/assets/fonts/` (owned by multiplayer/UI) — display font
"Lilita One" (chunky), body font "Nunito"; colour tokens in `client/shared/theme.css`. Offline: no CDNs.

## Rules for working in parallel
- You OWN only the files listed for you in CONTRACT.md. Do not edit others' files. If you need a change in someone
  else's area, describe it in your final report.
- Others are editing at the same time. If the build breaks in a file you don't own, wait and retry; don't fix it.
- Do NOT git commit/push/reset. Do not delete others' tests.
- Before finishing: your area builds/tests pass, and you have LOOKED at real screenshots of your work
  (Chromium + Playwright are preinstalled: `const { chromium } = require('/opt/node-tools/node_modules/playwright')`;
  WebGL works headless with `--use-angle=swiftshader`, slow but fine for stills). Save shots under `tests/out/<you>/`.
- Be self-critical: review as a demanding player, iterate (build -> look -> fix) until it is genuinely good.
- Final report: what you built, how to run/preview it, known issues, and any requested changes outside your area. Concise.
