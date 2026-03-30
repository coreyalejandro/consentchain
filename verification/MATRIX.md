# Verification matrix (ConsentChain — PASS 8 template)

**Generated (UTC):** 2026-03-30T16:00:00Z  
**Machine-readable inventory:** `MASTER_PROJECT_INVENTORY.json`

| # | Claim | Evidence | Status |
|---|--------|----------|--------|
| 1 | C-RSP governance chain (INVARIANT_01–37) present and machine-checked | `scripts/verify_governance_chain.py`; `00-constitution/`; `03-enforcement/` | verified (local) |
| 2 | Institutionalization layer (regression ledger, review policy, system card) | `scripts/verify_institutionalization.py`; `verification/regression-ledger/` | verified (local) |
| 3 | CI parity: workflow contains inventory `ci_verification_commands` | `.github/workflows/verify.yml` | verified (local) |
| 4 | Remote qualifying run (artifact + record.json) | GitHub Actions; `verification/ci-remote-evidence/record.json` | pending first green run |

**Not claimed:** Resume-level product claims beyond this governance bootstrap; those remain covered by separate application tests and deployments.
