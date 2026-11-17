#!/bin/bash
# Start MARKRUN inside a GitHub Codespace and make it reachable from your phones and TV.
cd "$(dirname "$0")" || exit 1
[ -d node_modules ] || npm install
[ -f client/dist/tv.js ] || npm run build
if [ -n "$CODESPACE_NAME" ]; then
  URL="https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-app.github.dev}"
  (
    sleep 5
    gh codespace ports visibility 8080:public -c "$CODESPACE_NAME" >/dev/null 2>&1
    sleep 3
    # Ask the public address for the game's health page WITHOUT any GitHub login, exactly like a phone would.
    code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "$URL/healthz")
    if [ "$code" = "200" ]; then
      echo ""
      echo "  ✅ Phones can join: port 8080 is public."
    else
      echo ""
      echo "  ⚠️  PHONES CAN'T JOIN YET (the game's port is still private - phones will see a 404)."
      echo "     Fix: click the PORTS tab (next to TERMINAL) -> right-click port 8080 ->"
      echo "          Port Visibility -> Public. Then rescan the QR code on the phones."
    fi
  ) &
fi
exec node --disable-warning=ExperimentalWarning server/index.mjs --port 8080 "$@"
