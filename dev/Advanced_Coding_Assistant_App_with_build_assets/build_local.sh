#!/usr/bin/env bash
set -euo pipefail
echo "==> Building Advanced Coding Assistant App"
cd "$(dirname "$0")"
corepack enable
corepack prepare pnpm@9 --activate
pnpm install --frozen-lockfile
pnpm build
echo "==> Build complete. See ./dist"
