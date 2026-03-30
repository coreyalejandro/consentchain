# ConsentChain repository status

> **Canonical JSON:** [`STATUS.json`](STATUS.json) — sole authoritative current-status artifact (PASS 10A).
> **Git HEAD:** use `git rev-parse HEAD` at checkout; `head_sha` in JSON is render-time (verifier normalizes to live HEAD for INVARIANT_42).

| Field | Value |
|-------|-------|
| `project` | `coreyalejandro/consentchain` |
| `last_verified_commit` | `db30d76f15e54a8d4b073a59ad554e40d64fc677` |
| `last_verified_run_id` | `23757931238` |
| `tip_state_truth` | `tip_pending` |
| `workflow_sha` | `b4396d799e4a2bfd8280b3cf863419c7d612c5f4d00871fb33d09f972ab001a1` |
| `escalation_state` | `review_required` |
| `reviewer_status` | `pending` |
| `governance_contract_version` | `v1.6.0` |
| `inventory_meta_generated_at_utc` | `2026-03-30T19:30:00Z` |

## Historical / evidence anchors

- **ci_remote_record_captured_at_utc:** `2026-03-30T17:25:00Z`
- **regression_ledger_last_commit_sha:** `a69e135791c572ee30409b67955eb233acbd9712`
- **regression_ledger_last_run_id:** `bootstrap-pass8-consentchain`
- **regression_ledger_last_timestamp_utc:** `2026-03-30T16:00:00Z`

## Cross-repo consistency (canonical TLC CI)

- **state:** `aligned`
- **detail:** Satellite repo; canonical↔satellite cross-repo verification runs in The Living Constitution CI.

## Truth boundary

Epistemic closure inside the repo: current operational status is synthesized into STATUS.json from inventory ci_provenance, git HEAD, workflow identity, regression ledger tail, and remote evidence record; STATUS.md is a deterministic render. External parties receive only exported proofs and schema-valid artifacts listed under open_interfaces.

Policy: `verification/closed-epistemics-open-interfaces-policy.json`
