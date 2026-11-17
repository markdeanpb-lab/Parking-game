# Refreshing MARKRUN's historical data

Gameplay never touches the internet. New parkruns only appear after an explicit refresh, which writes new raw files under
`data/raw/` and re-runs the idempotent importer into `data/markrun.db`. Already-imported activities and streams are not
fetched again.

## Option A — on the home computer (parkrun + weather, and Strava via your own API app)
1. One-time Strava setup (optional, about 3 minutes):
   - Create a free API application at https://www.strava.com/settings/api. Set "Authorization Callback Domain" to `localhost`.
   - Run `node server/import/refresh.mjs --strava-auth --client-id <ID> --client-secret <SECRET>`, open the printed URL, then approve.
     Tokens are saved to `data/strava_credentials.json`, which is git-ignored.
2. To refresh, use **Refresh Historical Data** in the TV lobby's settings, or run `npm run refresh`.
   - It fetches the parkrun results page and lists only Strava activities since the last import (with a 3-day overlap).
   - It downloads pacing streams only for newly matched parkruns, plus weather for any runs missing it.
   - Without Strava credentials, new parkruns get an estimated pacing profile, flagged as estimated in the game, until a Strava refresh supplies the real one.

## Option B — ask Claude Code (uses the Strava connector, no API app needed)
In a Claude Code session on this repository with the Strava connector enabled, say:
> Refresh MARKRUN historical data following markrun/docs/REFRESH.md option B.

Claude should then:
1. Run `npm run refresh -- --no-strava`. This fetches the parkrun page and weather, and shows which parkrun dates still have no matched Strava stream.
2. Call `list_activities`, with `range_start` set to 3 days before `max(start_local)` in `strava_activities`, plus `first=100`, `include_polyline=true` and `include_tags=true`. Copy each saved tool-result file verbatim into `data/raw/strava/activities/page_<first start_local>.json`. Never retype data.
3. Run `npm run ingest`. Then, for every `matches.activity_id` with no row in `streams`, call `get_activity_streams` at full resolution. Use the streams `time,distance,altitude,location,heart_rate,velocity_smooth,grade_smooth,moving,cadence`. Copy each saved file to `data/raw/strava/streams/<id>.json`. If a result comes back inline, recover it from the transcript with `tools/extract_inline_streams.py`.
4. Run `npm run ingest`, then `npm run audit`, then commit `data/`.
