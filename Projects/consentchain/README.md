# ConsentChain

## What This Is

Agent consent governance system that transforms "we had consent" from a claim into a verifiable, auditable evidence chain. ConsentChain is a Turborepo monorepo with eight packages handling the full consent lifecycle: authorization, policy enforcement, cryptographic ledger recording, idempotency, step-up authentication for sensitive operations, and revocation.

## What Safety Problem It Addresses

**Domain:** Empirical Safety
**Failure class:** A system's described behavior does not match its actual behavior. Consent is assumed but not recorded. Agent actions cannot be audited after the fact.

AI agents act on behalf of users — scheduling meetings, accessing data, executing tasks — without verifiable consent records. When something goes wrong, there is no audit trail showing what was authorized, by whom, for what scope, and whether consent was later revoked. Without a consent ledger, "we had permission" is indistinguishable from "we assumed permission."

## Why It Matters

> No failure is meaningless. Safety is the whole system.

Without Empirical Safety, you *claim* safety. With it, you *prove* safety. ConsentChain makes this concrete: an AI agent that acts on behalf of a user must have a verifiable record of consent. The ledger is not optional — it is the evidence chain. Every entry answers five questions:

1. Was consent given?
2. By whom?
3. For what action and scope?
4. Can it be revoked?
5. Was it revoked?

This is I4 (Traceability Is Mandatory) applied to agent-human relationships. Every action flows through the chain: validation → idempotency → revocation check → policy evaluation → step-up auth → execution → ledger entry. No step is skippable.

## How It Fits the Platform / Domain

**Domain:** Empirical Safety
**Platform role:** Evidence chain infrastructure for Safety Systems Design
**Invariants enforced:** I1 (Evidence-First — consent requires evidence, not assumption), I4 (Traceability Mandatory — every agent action is ledgered), I6 (Fail Closed — missing consent blocks action)

### Architecture Position

ConsentChain is the "write" side of Empirical Safety — it records consent, logs actions, and enables revocation. The planned Empirical Safety Engine (ESE) is the "read" side — it would analyze patterns, detect drift, and measure whether safety interventions reduce harm. Together they complete the evidence loop.

### Action Gateway Pipeline

```
Agent Request
      ↓
┌──────────────┐
│  Validation  │  Schema + type checking
└──────┬───────┘
       ↓
┌──────────────┐
│ Idempotency  │  Prevent duplicate actions
└──────┬───────┘
       ↓
┌──────────────┐
│  Revocation  │  Check consent not revoked
└──────┬───────┘
       ↓
┌──────────────┐
│Policy Engine │  Rules-based authorization
└──────┬───────┘
       ↓
┌──────────────┐
│  Step-Up     │  Extra auth for sensitive ops
└──────┬───────┘
       ↓
┌──────────────┐
│  Execution   │  Perform the authorized action
└──────┬───────┘
       ↓
┌──────────────┐
│   Ledger     │  Cryptographic consent record
└──────────────┘
```

## What Is Real Now

- **Turborepo monorepo** with pnpm workspaces
- **8 packages:**
  - `agent-sdk` — SDK for agent integration
  - `ledger` — cryptographic consent ledger with `signer.ts`
  - `policy-engine` — rules-based policy evaluation (`rules.ts`)
  - `idempotency` — duplicate action prevention (`store.ts`)
  - `step-up` — step-up authentication for sensitive operations
  - `vault-client` — secrets management (placeholder — throws until configured)
  - `google-executor` — Google services executor (mock)
  - `shared` — types (`types.ts`) and constants (`constants.ts`)
- **Prisma schema** (SQLite via better-sqlite3): Agent, LedgerEntry, RevocationState, IdempotencyRecord, StepUpChallenge
- **Working API routes:**
  - `POST /api/agent/action` — full gateway pipeline (validation → idempotency → revocation → policy → step-up → exec → ledger)
  - `POST /api/auth/step-up` + `POST /api/auth/step-up/verify` — step-up authentication
  - `GET /api/ledger` — consent ledger query
  - `POST /api/revoke` — consent revocation
- **NextAuth with Auth0** integration
- **Prisma migrations** — schema applied with migration history
- **`dev.db`** — SQLite database (77KB, has data)
- **Build contract** — `consentchain-build-contract.md` (deterministic build spec)
- **HANDOFF.md** — detailed agent handoff documentation

**Implementation status:** Partial (monorepo scaffold, 8 packages, Prisma schema, API routes, auth — not production-deployed)

## How to Verify

```bash
# Clone
git clone <repo-url>
cd consentchain

# Install
pnpm install

# Run development server
pnpm dev
# API routes available at localhost

# Inspect the consent ledger schema
cat prisma/schema.prisma

# Inspect the SQLite database
sqlite3 dev.db ".tables"
sqlite3 dev.db "SELECT * FROM LedgerEntry LIMIT 5;"

# Inspect package structure
ls packages/
```

## Demo / Evidence

- **Action gateway:** `apps/web/src/app/api/agent/action/` — full 7-stage pipeline
- **Consent ledger:** `packages/ledger/` — cryptographic signing with `signer.ts`
- **Policy engine:** `packages/policy-engine/rules.ts` — authorization rules
- **Step-up auth:** `packages/step-up/` + `apps/web/src/app/api/auth/step-up/`
- **Idempotency:** `packages/idempotency/store.ts` — duplicate prevention
- **Prisma schema:** `prisma/schema.prisma` — 5 models with migrations
- **SQLite database:** `dev.db` — 77KB with existing data
- **Build contract:** `consentchain-build-contract.md` — deterministic specification

## Status Matrix

| Component | Status | Evidence |
|-----------|--------|---------|
| Turborepo monorepo | Implemented | `turbo.json`, `pnpm-workspace.yaml`, 8 packages |
| Agent SDK | Implemented | `packages/agent-sdk/` |
| Consent ledger + signer | Implemented | `packages/ledger/signer.ts` |
| Policy engine | Implemented | `packages/policy-engine/rules.ts` |
| Idempotency store | Implemented | `packages/idempotency/store.ts` |
| Step-up authentication | Implemented | `packages/step-up/` + API routes |
| Action gateway pipeline | Implemented | `POST /api/agent/action` — 7-stage pipeline |
| Ledger query API | Implemented | `GET /api/ledger` |
| Consent revocation API | Implemented | `POST /api/revoke` |
| NextAuth/Auth0 | Implemented | Auth integration configured |
| Prisma schema + migrations | Implemented | `prisma/schema.prisma`, `prisma/migrations/` |
| Shared types | Implemented | `packages/shared/types.ts`, `constants.ts` |
| Google executor | Mock | `packages/google-executor/` — 501 placeholder |
| Vault client | Placeholder | `packages/vault-client/` — throws until configured |
| Production deployment | Not deployed | Local development only |
| Test suite | Not implemented | No tests visible |

## Next Planned Work

- Implement test suite across all 8 packages
- Wire Google executor to real Google APIs
- Configure vault client for secrets management
- End-to-end test of the full action gateway pipeline
- Production deployment with proper Auth0 tenant
- Integration with Empirical Safety Engine (ESE) for consent analytics

---

### V&T Statement

**EXISTS:** Turborepo monorepo, 8 packages (agent-sdk, ledger, policy-engine, idempotency, step-up, vault-client, google-executor, shared), Prisma schema with migrations, API routes (action gateway, auth, ledger, revoke), NextAuth/Auth0, SQLite database, build contract
**VERIFIED AGAINST:** Package source code, Prisma schema, API route files, database file
**NOT CLAIMED:** Production deployment, Google integration (mock), vault integration (placeholder), test coverage, cryptographic signing under load
**STATUS:** PARTIAL

---

### Repository Structure

```
apps/
  web/                          # Next.js application
    src/app/api/
      agent/action/             # Full gateway pipeline
      auth/step-up/             # Step-up authentication
      ledger/                   # Consent ledger query
      revoke/                   # Consent revocation
      services/connect/google/  # Google executor (501)
packages/
  agent-sdk/                    # Agent integration SDK
  ledger/                       # Cryptographic consent ledger
    signer.ts                   # Consent signing
  policy-engine/                # Authorization rules
    rules.ts                    # Policy evaluation
  idempotency/                  # Duplicate prevention
    store.ts                    # Idempotency store
  step-up/                      # Sensitive operation auth
  vault-client/                 # Secrets management (placeholder)
  google-executor/              # Google services (mock)
  shared/                       # Types and constants
    types.ts
    constants.ts
prisma/
  schema.prisma                 # 5 models
  migrations/                   # Migration history
dev.db                          # SQLite database (77KB)
consentchain-build-contract.md  # Deterministic build spec
HANDOFF.md                      # Agent handoff
```

---

*Part of [Safety Systems Design](https://github.com/coreyalejandro) — Empirical Safety domain*
*Platform: SentinelOS — AI Safety Operating Layer*
