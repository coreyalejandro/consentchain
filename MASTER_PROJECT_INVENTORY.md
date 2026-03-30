# ConsentChain governance inventory (PASS 8)

**Generated (UTC):** 2026-03-30T16:00:00Z  
**Machine-readable:** `MASTER_PROJECT_INVENTORY.json`

**Governance chain:** Canonical paths under `governance_artifacts`, `artifact_manifest`, `ci_verification_commands` (must appear in `.github/workflows/verify.yml`). Executable checks: `pip install -r requirements-verify.txt` then `python3 scripts/verify_governance_chain.py --root .` and `python3 scripts/verify_institutionalization.py --root .`; adversarial checks `python3 scripts/governance_failure_injection_tests.py`; run artifacts under `verification/runs/*-governance.json`.

**Tip-state (PASS 6 / PASS 7):** On mutable branch tips, inventory uses `pending` + `tip_pending`. `verified` + `tip_verified` only on frozen contexts per `verification/pass7-branch-verification-policy.json`. No automatic CI writeback to `MASTER_PROJECT_INVENTORY.json` or `record.json` on the default branch.

**Template:** `projects/c-rsp/PASS8_TEMPLATE.md` in The Living Constitution repo.
