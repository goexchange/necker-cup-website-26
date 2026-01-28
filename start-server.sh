#!/bin/bash
# Simple HTTP server script for testing the Necker Cup website

cd "$(dirname "$0")"

echo "Starting HTTP server on port 8000..."
echo "Open your browser and go to: http://localhost:8000/index-standalone.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python first, then Node.js
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v node &> /dev/null; then
    npx --yes http-server -p 8000
else
    echo "Error: Neither Python 3 nor Node.js found. Please install one of them."
    exit 1
fi
