#!/bin/bash
# Local dev server with live reload.
# Edit any file → browser auto-refreshes within ~500ms.
# Stop with Ctrl+C.
set -e
cd "$(dirname "$0")"

PORT="${PORT:-8765}"

echo "Starting live-reload dev server on http://localhost:$PORT"
echo "    Watching: $(pwd)"
echo "    Edit any .html / .css / .js file → browser auto-refreshes."
echo "    Ctrl+C to stop."
echo ""

# live-server: lightweight static server with built-in WebSocket reload.
# --no-browser: don't auto-open browser (you keep your tab open)
# --watch: explicit watch list
# --quiet: less console noise
exec npx --yes live-server \
  --port="$PORT" \
  --no-browser \
  --quiet \
  --watch=index.html,framework.html,questionnaire.html,about.html,assets \
  --wait=200 \
  .
