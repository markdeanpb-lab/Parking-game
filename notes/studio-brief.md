# Parking Panic: studio brief (shared by all specialists)

Project: /home/user/Parking-game. A three.js browser game, bundled with esbuild. Read README.md first.
- Build: `npm run build` (writes dist/game.js). Tests: `npm test` (headless sims, must stay green), `npm run test:browser`.
- Screenshots: `node tools/shots.mjs streets|play|phone|all <outdir>` (headless Chromium with software GL, so it is slow and not
  representative of real FPS). Baseline shots of the old version are in tests/out/baseline/. Put yours under tests/out/<your-name>/.
- In the page, `window.__pp` exposes { game, track, ui, audio, dj, camera, cam, meshes }. Setting `window.__pp.debugCam = {pos:[x,y,z], look:[x,y,z]}` freezes the camera there.
- World coords: x = east, z = south, metres. Streets are `track.edges[id]` with Path helpers (`path.at(s)`, `path.offsetAt(s, lateral)`; lateral + = right of competition travel direction).
  Edge ids: dalton (north from Catherine St), grangeAB + grangeBC (south-east), church (west, real one-way), bernard (north, real one-way), bernardS, catherine, stubs grangeNW, grangeSE, catherineW/E.

## Art direction (everyone)
Stylised indie arcade: chunky, readable, warm, toy-like but deliberate. NOT photoreal and NOT the current flat-box look.
Victorian/Edwardian St Albans terraces on an overcast-but-bright English morning. Soft lighting, good shadows, saturated
but not garish. Strong silhouettes (chimneys with pots, bay windows, porches, lintels). Everything should look designed.

## Reference photographs (the user's own; view them with the Read tool)
/root/.claude/uploads/ef2935b6-0763-55ec-a38a-7b0cc3406d43/
  fa30e95b-image.jpg  CHURCH ST: very narrow; cars parked down BOTH sides, the left row half up on the pavement under big overhanging trees and a hedge;
                      right side white/cream/grey painted two-storey terraces right on the pavement behind tiny brick front walls with railings; a paved speed table in the road ahead.
  24d6b74f-image.jpg  CHURCH ST junction (entry, from Grange St): red-brick house with long brick garden wall and black railings, timber gate, close-boarded fence on the right corner,
                      blue one-way arrow sign above a 20 sign on a post, double yellows round the corner.
  89025c61-image.jpg  GRANGE ST: two vintage VW campervans (cream, olive green) parked on the left in dashed white bays; red-brick terraces with ground-floor bay windows,
                      white window surrounds, slate roofs, chimneys; cars both sides; white SUVs on the right.
  daa64941-image.jpg  DALTON ST: red-brick terraces on the left with low white picket fences and tiny front yards; on the right cars on a block-paved off-street forecourt
                      behind a timber fence; dashed white bay lines; parked cars both sides; telegraph pole.
  efb6be02-image.jpg  DALTON ST far (north) end: yellow (gault) brick house on the right with black door, wheelie bins (green, black, brown) out on the pavement,
                      red terraces with white stucco lintels on the left (one under scaffolding), single yellow line, black bollard, a tree at the end.
  751faef1-image.jpg  BERNARD ST (straight): parking in dashed bays down ONE side (left as photographed), double yellows on the other side; terraces right on the pavement:
                      dark brick, red brick, white/cream painted; flagstone pavement; a corner shop at the far end of the street.
  4d172689-image.jpg  BERNARD ST (curving): marked bays on the left, double yellows on the right; red-brick terraces with white lintels and stone sills, prominent chimney stacks
                      with pots, short black bollards along the kerb, low brick front walls with railings, a hedge on the left.
Recognisability, not photo-copying. Never paste the photos as textures. Do not invent named real-world features beyond the photos and OSM.

## Rules for working in parallel
- You OWN only the files listed in your brief. Do not edit anyone else's files. `src/main.js` is owned by the director (me):
  you may make SMALL, surgical Edit-tool changes to main.js only for wiring in your own area, never rewrite it; list every main.js change in your report.
- Other specialists are editing other files at the same time. If the build or tests break in a file you don't own, wait a minute and retry; don't fix it.
- Keep your files compiling at all times (make changes in coherent steps). Do NOT git commit, push, or reset. Do not delete tests.
- Performance matters (phones): prefer merged geometry, instancing, few materials, canvas textures generated once.
- Before finishing: `npm run build && npm test` must pass, and you must have LOOKED at screenshots of your area. Be self-critical: iterate
  until it genuinely looks/plays better, not just until it runs.
- Final report (under 350 words): what you changed (by file), what you verified and how (name screenshot paths), what is still weak, and any
  requests for other specialists or for main.js.

## Event contract (game.js emits via game.emit(type, data); DJ, UI and main.js listen)
Existing: gameStart, roundIntro, freeStart, musicStart, musicStop, tick, banter, parked, robbed, stole, struggle, impact, shove, honk,
wrongWay, speeding, loiter, falseStart, driveway, yellow, permitParked, blockedParked, event{kind}, fooled, stall, aborted, whistle,
lastSpace, vanBlocked, cushion, roundEnd, gameover, victory, freePark, penalty, carAdded, carRemoved.
NEW (gameplay specialist adds; DJ/UI specialists may listen for them now and handle absence gracefully):
- nearMiss {rival|null, extra:persona key|null, gap}          player passes within ~0.35 m of a moving car or scrapes past without contact
- contested {bay, drivers:[names], street}                     two+ drivers (player or rivals) closing on the same free bay at the same time
- rivalRobbed {thief, victim, bay, street}                     a rival takes a space another rival was lining up for
- overshot {bay, street}                                       the player drives past the ringed/target space during the scramble
- lastGasp {comp, timeLeft, street}                            somebody parks with under 3 s left
- photoFinish {winner, loser, street}                          final round decided by under ~2 s or with the loser within ~10 m
- longReverse {seconds}                                        player has been reversing for a long way/time
- leader {name, points}                                        points leader changes between rounds
