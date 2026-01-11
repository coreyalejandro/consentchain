#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Write-Host "==> Building Advanced Coding Assistant App"
Set-Location $PSScriptRoot
corepack enable
corepack prepare pnpm@9 --activate
pnpm install --frozen-lockfile
pnpm build
Write-Host "==> Build complete. See ./dist"
