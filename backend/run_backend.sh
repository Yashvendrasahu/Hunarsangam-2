#!/bin/bash
# backend/run_backend.sh
PIDFILE="/tmp/hunarsangam_backend.pid"

if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
  echo "Backend already running with PID $(cat "$PIDFILE")"
  exit 0
fi

echo $$ > "$PIDFILE"
trap 'rm -f "$PIDFILE"' EXIT

PORT=${AI_BACKEND_PORT:-8001}
echo "Starting HunarSangam FastAPI AI Backend on port $PORT..."
while true; do
  python3 -m uvicorn backend.main:app --host 0.0.0.0 --port "$PORT"
  echo "Backend exited. Restarting in 2 seconds..."
  sleep 2
done

