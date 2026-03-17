# GitHub Profile README

> Ready-to-paste content for GitHub profile README.
> Uses canonical language from `01-identity/identity-language.md`.
> Claims bounded by `09-status/implementation-status-matrix.md`.

---

```markdown
# Safety Systems Design

I design safety-critical systems that prevent harm across AI, human decision-making, and learning environments.

## Domains

| Domain | What It Prevents | Product | Status |
|--------|-----------------|---------|--------|
| **Epistemic Safety** | False claims, hallucinations, phantom completions | [PROACTIVE](https://gitlab.com/gitlab-ai-hackathon/participants/28441830) (GitLab) | Implemented |
| **Human Safety** | Cognitive overload, inaccessible design, loop entrapment | [UICare-System](https://github.com/coreyalejandro/uicare-system) | Partial |
| **Cognitive Safety** | Misunderstanding, flawed mental models, unsafe learning | [Instructional Integrity UI](https://github.com/coreyalejandro/instructional-integrity-ui) | Prototype |
| **Empirical Safety** | Consent opacity, action untraceability, unmeasured safety | [ConsentChain](https://github.com/coreyalejandro/consentchain) | Partial |

## Platform

**SentinelOS** — AI safety operating layer enforcing six invariants (I1-I6) at every system boundary.

SentinelOS is not a standalone product. It is the invariant-enforcement substrate that all domain products run on. Status: partial — PROACTIVE fully implements the invariants; other modules are in progress.

## Doctrine

> Safety is the whole system. No failure is meaningless.

1. Safety is the whole system — not a feature, not a layer, not an afterthought
2. No failure is meaningless — every failure is a signal; ignoring signals is itself a failure
3. Systems must govern truth, behavior, and human outcomes — not just model outputs
4. Alignment includes human interpretation, not just model outputs

## Featured Evidence

- **PROACTIVE**: Validated constitutional AI safety agent — 100% detection rate on n=200 TruthfulQA samples, 0% false positives. GitLab Duo + Claude Code agents, CI/CD pipeline, full test suite.
- **UICare-System**: MonitorAgent + RescueAgent for neurodivergent-friendly development. Shakespeare confidante metaphor. Loop detection and rescue. Docker + K8s deployment. Agents not yet in production.
- **ConsentChain**: Turborepo monorepo, 8 packages — agent-sdk, ledger, policy-engine, idempotency, step-up, vault-client, google-executor, shared. Cryptographic consent ledger with policy engine and step-up auth. No production deployment yet.
- **Instructional Integrity UI**: Working prototype with evaluator interface, rubric system, and evidence states. Grounded in 35 years of education and instructional design.

## Background

35 years in education, instructional design, and student affairs before AI. The same doctrine — safety as the whole system — applied to learning environments before it applied to AI systems. Built from lived experience as a neurodivergent person navigating systems that were not designed for safety.

---

*Safety is not a feature I add. It is the system I design.*
```

## Pinned Repos (Recommended Order)

Only these 5 repos should be public/pinned. Everything else: hidden or deprioritized.

1. `28441830` (PROACTIVE) — rename display to "PROACTIVE" if GitHub allows
2. `uicare-system`
3. `instructional-integrity-ui`
4. `consentchain`
5. `coreys-agentic-portfolio`

## Setup Notes

- Paste the markdown block above into the README.md of a repo named after your GitHub username (e.g., `coreyalejandro/coreyalejandro`)
- Update repo links to match actual GitHub URLs
- If repo names change, update the links here and in `04-products/`
