# Google Developers Profile

> Ready-to-paste content for Google Developers profile.
> Uses canonical language from `01-identity/identity-language.md`.
> Claims bounded by `09-status/implementation-status-matrix.md`.
> Emphasis: AI/ML expertise, safety systems engineering, cloud architecture, open source.

---

## Display Name

Corey Alejandro

## Tagline

Safety Systems Designer — AI Safety, Constitutional AI, Systems Engineering

## Bio

I design safety-critical systems that prevent harm across AI, human decision-making, and learning environments. My work is organized into four safety domains — Epistemic, Human, Cognitive, and Empirical Safety — unified under SentinelOS, an AI safety operating layer that enforces six invariants (I1-I6) at every system boundary.

My primary contribution to the AI safety field is PROACTIVE, a constitutional AI safety agent that achieved 100% detection rate on n=200 TruthfulQA samples with 0% false positives. PROACTIVE validates epistemic claims in AI-generated outputs before they reach production — treating epistemic reliability as a safety requirement, not a quality feature.

Background: 25+ years in education and instructional design before transitioning to AI safety engineering. The same safety doctrine — every failure is a signal about the system — applies across both domains.

## Expertise Areas

### AI/ML Safety
- Constitutional AI agent design and validation
- Epistemic safety — detecting and preventing hallucinations, false claims, and phantom completions
- LLM output validation pipelines
- Safety-critical system architecture
- Invariant enforcement across AI system boundaries

### Systems Engineering
- Safety-critical systems design across four domains
- Invariant-based architecture (SentinelOS I1-I6)
- Monorepo architecture (Turborepo, 8-package systems)
- Cryptographic consent and audit ledgers
- CI/CD pipeline design for safety validation

### Cloud Architecture
- Kubernetes + Docker deployment for AI safety agents
- Container orchestration for multi-agent systems
- Helm chart configuration for safety workloads
- EKS deployment with Kyverno policies and OIDC auth

### Open Source
- PROACTIVE: Constitutional AI safety agent (Python, Claude API, GitLab CI/CD)
- UICare-System: Neurodivergent-friendly loop detection and rescue (TypeScript, Docker, K8s)
- ConsentChain: Cryptographic consent ledger for AI agents (TypeScript, Turborepo, Prisma)
- Instructional Integrity UI: Cognitive safety evaluator prototype (TypeScript, Next.js)

## Products

### PROACTIVE (Epistemic Safety)
Constitutional AI safety agent validated at n=200 with 100% detection rate and 0% false positives. Operates as GitLab Duo agent and Claude Code agent. Full test suite, CI/CD integration.
**Status:** Implemented

### UICare-System (Human Safety)
Loop detection and rescue system for neurodivergent-friendly development. MonitorAgent + RescueAgent architecture. Core innovation: "Reading the Room" — absence-over-presence detection.
**Status:** Partial — agents built, not yet in production

### ConsentChain (Empirical Safety)
Cryptographic consent governance for AI agents. Turborepo monorepo with 8 packages: agent-sdk, ledger, policy-engine, idempotency, step-up, vault-client, google-executor, shared.
**Status:** Partial — architecture complete, no production deployment

### Instructional Integrity UI (Cognitive Safety)
Evaluator interface with rubric system for assessing instructional artifacts against cognitive safety standards. Grounded in 25+ years of education work.
**Status:** Prototype

## Technologies

- **Languages:** TypeScript, Python
- **Frameworks:** Next.js, React, Remotion
- **AI/ML:** Claude API, GPT-4, Constitutional AI, TruthfulQA
- **Infrastructure:** Kubernetes, Docker, Helm, EKS, Kyverno
- **Data:** Prisma, PostgreSQL, cryptographic ledgers
- **Build:** Turborepo, CI/CD (GitLab CI, GitHub Actions)
- **Auth:** NextAuth, Auth0, OIDC, step-up authentication

## Links

- GitHub: [github.com/coreyalejandro](https://github.com/coreyalejandro)
- GitLab: [gitlab.com/coreyalejandro](https://gitlab.com/coreyalejandro)
- Portfolio: [coreys-agentic-portfolio] (link TBD)
- LinkedIn: [linkedin.com/in/coreyalejandro](https://linkedin.com/in/coreyalejandro)
