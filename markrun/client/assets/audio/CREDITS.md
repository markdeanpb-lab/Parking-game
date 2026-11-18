# MARKRUN audio: sources and licence

All music and sound effects in this folder are **original works made for MARKRUN**. They were composed in code and rendered
offline by `tools/compose_audio.mjs` (band-limited oscillators, Karplus-Strong plucks, FM bells and e-piano, formant-filtered
crowd voices, Freeverb), then encoded to MP3 with ffmpeg/LAME. No samples, loops or third-party recordings are used.

- Licence: **CC0 1.0** (public domain dedication). Use them for anything.
- Rebuild: `npm run build:audio` (needs `ffmpeg` with libmp3lame on the PATH). The output is deterministic.
- `manifest.json` lists every cue and, for the looping music beds, the loop length and stems (the game plays the stems in
  sync and fades the extra layers in: the betting bed tightens for the last 20 seconds and the race bed builds in the final km).

| File | What | Used for |
|---|---|---|
| theme.mp3 | MARKRUN theme sting: snare roll, rising brass fanfare, timpani, crash | news desk, round theme card |
| lobby.mp3 | relaxed e-piano / plucked-bass bed (loop) | lobby, standings |
| bet_a.mp3, bet_b.mp3 | tense pizzicato countdown bed + its "hurry" layer (loop) | betting |
| race_a.mp3, race_b.mp3 | driving D-minor broadcast groove + its final-km layer (loop) | the race |
| heartbeat.mp3 | five lub-dubs over a low drone | photo finish |
| fanfare.mp3 | short brass + glockenspiel win fanfare | finish line, winner reveal, payouts |
| coins.mp3 | cascade of coin clinks | payouts |
| sadtrombone.mp3 | muted "wah wah wah waaah" | the biggest loser |
| crowd_swell.mp3, crowd_roar.mp3 | crowd babble, cheers and applause | overtakes, lead changes, the finish |
| sting_in.mp3, sting_comedy.mp3, sting_drama.mp3 | brass hit / slide whistle + xylophone / dun-dun-DUNNN | cutscenes |
| drumroll.mp3 | snare roll into a cymbal | bet reveal, finale |
| cardflip.mp3 | whoosh + sparkle | results reveal cards |

Kenney.nl's CC0 packs were the first choice, but downloading them was blocked from the build machine, so everything was
composed from scratch instead.

The premium commentary voices are not in this folder: they are the Kokoro-82M model (Apache-2.0,
https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX), run by kokoro-js 1.2.1 (Apache-2.0) on onnxruntime-web (MIT).
The Node edition downloads them with `npm run voices:download`; the web edition fetches them from Hugging Face on first use.
