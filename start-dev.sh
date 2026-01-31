#!/bin/bash
# Start the Necker Cup dev server
cd "$(dirname "$0")"

# Kill anything already on port 5173
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
sleep 2

echo "Starting dev server..."
echo "When you see 'Local: http://localhost:5173/' open that URL in your browser ADDRESS BAR (not Google search)."
echo ""

npm run dev
