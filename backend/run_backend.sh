#!/bin/bash
# backend/run_backend.sh
PORT=${AI_BACKEND_PORT:-8001}
echo "Starting HunarSangam FastAPI AI Backend on port $PORT..."
python3.10 -m uvicorn backend.main:app --host 0.0.0.0 --port "$PORT"
