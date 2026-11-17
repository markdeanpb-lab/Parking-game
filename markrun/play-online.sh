#!/bin/bash
# Start MARKRUN inside a GitHub Codespace and make it reachable from your phones and TV.
cd "$(dirname "$0")" || exit 1
[ -d node_modules ] || npm install
[ -f client/dist/tv.js ] || npm run build
if [ -n "$CODESPACE_NAME" ]; then
  # phones need the port to be public (no GitHub login on the phones)
  ( sleep 4; gh codespace ports visibility 8080:public -c "$CODESPACE_NAME" >/dev/null 2>&1 \
      && echo "  [ok] Port 8080 is public - phones can join." \
      || echo "  [!] Could not make port 8080 public automatically: open the PORTS tab, right-click 8080 > Port Visibility > Public." ) &
fi
exec node --disable-warning=ExperimentalWarning server/index.mjs --port 8080 "$@"
