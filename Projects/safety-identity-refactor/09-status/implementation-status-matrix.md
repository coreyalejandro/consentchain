# Implementation Status Matrix (Step 7)

> This matrix governs what may be said publicly about each artifact.
> Status labels: implemented | partial | prototype | planned
> No public claim may exceed the status recorded here.

---

## Primary Domain Repos

| Artifact | Type | Status | Evidence Available | Gaps | Public Claim Allowed |
|----------|------|--------|-------------------|------|---------------------|
| PROACTIVE (28441830) | Product | **Implemented** | GitLab Duo agent, Claude Code agent, CI/CD pipeline, tests, NARRATIVE.md, evidence/ dir | Not deployed to public GitLab instance | "Validated constitutional AI safety agent with 100% detection rate" |
| UICare-System | Product | **Partial** | MonitorAgent + RescueAgent (GPT-4o-mini), Docker + K8s deployment, web UI, memory-bank, docs (mania monitoring, design system, key management) | Agents not in production, web not fully wired | "Loop detection and rescue system for neurodivergent-friendly development" |
| Instructional Integrity UI | Product | **Prototype** | Homepage UI, evaluator mock, Prisma schema, journey map, rubric system, domain types, tests | No real evaluator execution, no auth, no persistence | "Working prototype with evaluator interface and rubric system" |
| ConsentChain | Product | **Partial** | Turborepo monorepo, 8 packages (agent-sdk, ledger, policy-engine, idempotency, step-up, vault-client, google-executor, shared), Prisma schema, API routes (action gateway, auth, revoke, ledger), NextAuth/Auth0 | No production deployment, Google executor is mock, vault not configured | "Agent consent governance with cryptographic ledger and policy engine" |

## Supporting Work

| Artifact | Type | Status | Evidence Available | Gaps | Public Claim Allowed |
|----------|------|--------|-------------------|------|---------------------|
| ITAYN framework | Library | **Implemented** | Build passes, types verified, ~1,524 lines | No external users | "TypeScript implementation of I1–I6 invariants" |
| COL-PROACTIVE research | Research | **Implemented** | Application submitted, web UI built | Outcome pending | "Research framework submitted to Anthropic" |
| PROACTIVE demo video | Artifact | **Partial** | Scenes complete, transitions built | Voiceover not generated | "Demo video in production" (NOT "completed") |
| HUI Gov | Module | **Planned** | Research grounded in COL-PROACTIVE | No code, no repo | "In design" only |
| Eval Workbench / ESE | Module | **Planned** | Architecture defined in docs | No code, no data | "Proposed" only |
| SentinelOS | Platform | **Partial** | Invariants defined, PROACTIVE implements them, narrative documented | Not all modules exist | "AI safety operating layer" with clear status per module |

## Status Label Definitions

| Status | Meaning | What You Can Say | What You Cannot Say |
|--------|---------|-----------------|-------------------|
| **Implemented** | Code exists, tests pass, evidence available | "Built", "Validated", "Shipped" | — |
| **Partial** | Some components exist, gaps remain | "In progress", specific component claims only | "Complete", "Shipped" |
| **Prototype** | Working UI/demo, core logic not wired | "Prototype", "Working interface" | "Product", "Shipped" |
| **Planned** | Design docs or mentions only | "Planned", "In design", "Proposed" | "In development", "Building" |
