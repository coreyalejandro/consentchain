# Governance system card (ConsentChain)

Purpose: Machine-checkable C-RSP governance overlay for this repository: invariant registry, enforcement map, evidence ledger, institutionalization, and CI parity (PASS 8 satellite layout from `packages/tlc-governance-kit` in The Living Constitution).

**Governance scope:** This repo only (`coreyalejandro/consentchain`). Application code paths are not modified by governance scripts; verifiers read JSON/Markdown and run Python checks.

**Continuously evaluated:** Full governance chain (`scripts/verify_governance_chain.py`), institutionalization (`scripts/verify_institutionalization.py`), evidence ledger schema, doctrine and invariant/enforcement/inventory links, CI command parity vs `MASTER_PROJECT_INVENTORY.json`, regression ledger, failure-injection tests. Scheduled runs execute `.github/workflows/verify.yml` on a weekly cron.

**Known failure modes:** Broken doctrine or invariant mapping, missing enforcement hooks, inventory or MD timestamp drift, invalid JSON evidence, remote CI record claiming success when artifacts are missing, commit or workflow hash mismatch, consecutive scheduled failures without escalation, missing or invalid regression ledger records.

Escalation thresholds (machine-readable): `verification/review-escalation-policy.json` — provenance or upload failure must not leave `ci_provenance.status=verified`; three consecutive scheduled failures require `blocking` escalation state; workflow file hash change without a fresh green run requires `pending` status; broken governance chain links require `critical` escalation; blocking or critical escalation requires reviewer acknowledgment or waiver per policy.

Tip-state exactness (PASS 6 / PASS 7): `ci_provenance.tip_state_truth` must align with `status`. Tip `verified` requires agreement with `verification/ci-remote-evidence/record.json` and `git HEAD` equal to `last_verified_commit` **only on a frozen verification target** (detached HEAD, `provenance/verified-*` branch, or `tlc-gov-verified-*` tag at that commit). Mutable branch tips (`main`, `feature/*`, …) must use `pending` + `tip_pending` in inventory even when HEAD matches the last qualifying commit; canonical verified history is `record.json` and the regression ledger (INVARIANT_37). Policy: `verification/tip-state-policy.json` and `verification/pass7-branch-verification-policy.json`. Protected governance paths are listed in `tip-state-policy.json`; drift since `last_remote_qualifying_commit` with `status=pending` requires `escalation_state` at least `review_required` when protected files changed. Qualifying remote runs and the no-CI-writeback boundary are machine-readable in `tip-state-policy.json`.

Current evidence boundary: Claims in this card are bounded by files in this repo at verification time and `verification/ci-remote-evidence/record.json` when `claimed_remote` is true. GitHub Actions run URLs and artifact bytes are external; only references and recorded fields are in-repo evidence.

Not claimed: Correctness of all application logic, production uptime, security of third-party services, or completeness of future work not listed in `verification/MATRIX.md`.

**Contract:** C-RSP institutionalization + tip-state + PASS 7 branch policy v1.5.0.
