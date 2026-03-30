# Verification Matrix
## Every Resume Claim -> Evidence

Last updated: 2026-03-30

| # | Resume Claim | Project | Evidence Location | Verification Method | Status | Result |
|---|-------------|---------|-------------------|-------------------|--------|--------|
| 1 | C-RSP governance chain (INVARIANT_01–37) present and machine-checked | ConsentChain | `scripts/verify_governance_chain.py`; `00-constitution/`; `03-enforcement/` | Local verifier | VERIFIED | PASS 9 — parity with TLC canonical |
| 2 | Institutionalization layer (regression ledger, review policy, system card) | ConsentChain | `scripts/verify_institutionalization.py`; `verification/regression-ledger/` | Local verifier | VERIFIED | Schema + policy files aligned |
| 3 | CI parity: workflow contains inventory `ci_verification_commands` | ConsentChain | `.github/workflows/verify.yml`; `MASTER_PROJECT_INVENTORY.json` | `verify_governance_chain.py` | VERIFIED | Commands embedded in workflow |
| 4 | Cross-repo governance parity vs The Living Constitution | ConsentChain | `scripts/verify_cross_repo_consistency.py`; TLC canonical checkout | Script compare | PASS 9 | Local + CI step |
| 5 | Remote qualifying run (artifact + record.json) | ConsentChain | GitHub Actions; `verification/ci-remote-evidence/record.json` | Remote CI | PENDING | First green run pending |

## Verification Progress

- Total claims: 5
- Verified: 4
- Partial: 0
- Pending: 1 (remote qualifying run)
- Failed: 0

*Updated 2026-03-30 — PASS 9 matrix categories aligned with TLC canonical column headers.*
