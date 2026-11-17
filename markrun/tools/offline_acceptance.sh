#!/bin/sh
# OFFLINE ACCEPTANCE: run the game in a fresh network namespace (loopback only: the internet is physically unreachable),
# play 3 full rounds through real browser pages (TV + 2 phones), kill + restart the host mid-session, and resume.
# Usage: sh tools/offline_acceptance.sh [extra e2e args]
cd "$(dirname "$0")/.." || exit 1
exec unshare -rn sh -c "python3 -I tools/lo_up.py && env -u HTTPS_PROXY -u https_proxy -u HTTP_PROXY -u http_proxy node tools/e2e.mjs --rounds=3 --restart-after=1 --out=tests/out/offline $*"
