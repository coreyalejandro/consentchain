#!/usr/bin/env bash
set -euo pipefail

echo "[BOOTSTRAP] Ensuring full clone integrity"

bootstrap_one() {
  local d="$1"
  if [ ! -d "$d/.git" ]; then
    return 0
  fi
  if git -C "$d" rev-parse --is-shallow-repository 2>/dev/null | grep -q true; then
    echo "[BOOTSTRAP] Deepening shallow clone ($d)"
    git -C "$d" fetch --unshallow
  fi
  git -C "$d" fetch --tags --force --prune
  if [ -z "$(git -C "$d" tag --list)" ]; then
    echo "BREACH: NO_TAGS_AVAILABLE ($d)"
    exit 1
  fi
}

bootstrap_one .
git submodule update --init --recursive

if [ -d the-living-constitution/.git ]; then
  bootstrap_one the-living-constitution
fi

echo "[BOOTSTRAP] Complete"
