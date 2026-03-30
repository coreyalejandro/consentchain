# ConsentChain repository status

> **Canonical JSON:** [`STATUS.json`](STATUS.json) — sole authoritative current-status artifact (PASS 10A).
> **PASS 11:** Governance truth is anchored to `truth_anchor` / `verification_target` (immutable tag + commit). `head_sha` is informational only.

| Field | Value |
|-------|-------|
| `project` | `coreyalejandro/consentchain` |
| `verification_target` | `fd149cf8c2a9cc3e746322c90cfab507f8cc0be1` |
| `head_sha` | `fd149cf8c2a9cc3e746322c90cfab507f8cc0be1` |
| `last_verified_commit` | `d6371f645d7d68a9238441ccdc4be27da0c88470` |
| `last_verified_run_id` | `23761674094` |
| `tip_state_truth` | `tip_pending` |
| `workflow_sha` | `b4396d799e4a2bfd8280b3cf863419c7d612c5f4d00871fb33d09f972ab001a1` |
| `escalation_state` | `review_required` |
| `reviewer_status` | `pending` |
| `governance_contract_version` | `v1.8.0` |
| `inventory_meta_generated_at_utc` | `2026-03-30T19:00:00Z` |

## Immutable truth anchor (PASS 11)

- **type:** `git_tag`
- **tag:** `tlc-gov-verified-fd149cf`
- **commit:** `fd149cf8c2a9cc3e746322c90cfab507f8cc0be1`

## Historical / evidence anchors

- **ci_remote_record_captured_at_utc:** `2026-03-30T19:00:00Z`
- **regression_ledger_last_commit_sha:** `a69e135791c572ee30409b67955eb233acbd9712`
- **regression_ledger_last_run_id:** `bootstrap-pass8-consentchain`
- **regression_ledger_last_timestamp_utc:** `2026-03-30T16:00:00Z`

## Cross-repo consistency (canonical TLC CI)

- **state:** `target_incomplete`
- **detail:** projects/consentchain governance tree not present (init submodule for full check)

## Truth boundary

Epistemic closure inside the repo: current operational status is synthesized into STATUS.json from inventory ci_provenance, git HEAD, workflow identity, regression ledger tail, and remote evidence record; STATUS.md is a deterministic render. External parties receive only exported proofs and schema-valid artifacts listed under open_interfaces.

Policy: `verification/closed-epistemics-open-interfaces-policy.json`
