#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "[safe-dev] stopping existing Next.js dev servers..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "next start" 2>/dev/null || true

echo "[safe-dev] clearing .next and webpack caches..."
# Make sure immutable flags/permissions won't block cleanup on macOS.
chflags -R nouchg .next node_modules/.cache 2>/dev/null || true
chmod -R u+rwX .next node_modules/.cache 2>/dev/null || true
python3 - <<'PY'
import shutil
for p in ['.next', 'node_modules/.cache']:
    shutil.rmtree(p, ignore_errors=True)
    print(f'[safe-dev] cleared {p}')
PY

echo "[safe-dev] ensuring dependencies are installed..."
npm install

echo "[safe-dev] starting Next.js dev server..."
next dev --turbopack
