# ConsentChain

ConsentChain is the governed implementation checkout for the ConsentChain family under **The Living Constitution** (TLC). Canonical path: `/Users/coreyalejandro/Projects/the-living-constitution/projects/consentchain` (git submodule). Path semantics (prior sibling checkout vs TLC submodule): see TLC `04-consentchain/REGISTRY_PATH_MIGRATION.md`.

## Verification bootstrap

Before running governance verification:

```bash
./scripts/bootstrap_repo.sh
```

This deepens shallow clones if needed, fetches tags (including the sibling `the-living-constitution` checkout in CI), and initializes submodules. No alternatives (PASS 13 / INVARIANT_54–56).

## Verification commands

From the repository root:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Agent handoff

This repository may use `HANDOFF.md` for session continuity.

- **Validate `HANDOFF.md` format**: `pnpm handoff:check`
- **Create `HANDOFF.md` from template** (if missing): `pnpm handoff:init`
