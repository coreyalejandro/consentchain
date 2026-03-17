# Devpost Profile

> Ready-to-paste content for Devpost profile.
> Uses canonical language from `01-identity/identity-language.md`.
> Claims bounded by `09-status/implementation-status-matrix.md`.
> Emphasis: hackathon entries, competition evidence, build velocity.

---

## Display Name

Corey Alejandro

## Tagline

Safety Systems Designer — AI, Human, and Cognitive Safety

## Bio

I design safety-critical systems that prevent harm across AI, human decision-making, and learning environments. My work spans four safety domains — Epistemic, Human, Cognitive, and Empirical Safety — unified under SentinelOS, an AI safety operating layer enforcing six invariants at every system boundary.

Previously: 25+ years in education, instructional design, and student affairs. The same doctrine applied to learning environments before AI.

Doctrine: Safety is the whole system. No failure is meaningless.

## Skills

- AI Safety
- Constitutional AI
- Systems Design
- TypeScript
- Python
- Next.js / React
- Docker / Kubernetes
- Turborepo
- Instructional Design
- Accessibility

## Hackathon Projects

### PROACTIVE — Epistemic Safety Agent
**GitLab AI Hackathon (2026)**
**Domain:** Epistemic Safety

Constitutional AI safety agent that prevents false claims, hallucinations, and phantom completions in AI-generated code. Operates as both a GitLab Duo agent and a Claude Code agent with full CI/CD pipeline integration.

**Key results:**
- 100% detection rate on n=200 TruthfulQA samples
- 0% false positives
- Full test suite with 83% coverage
- Dual-agent architecture (GitLab Duo + Claude Code)

**What it does:** PROACTIVE reviews merge requests and code changes through a constitutional AI lens — each claim in AI-generated output is validated against ground truth before approval. It does not fix code; it prevents epistemic failures from reaching production.

**Built with:** Python, Claude API, GitLab CI/CD, TruthfulQA dataset
**Status:** Implemented and validated

---

### UICare-System — Human Safety System
**GitLab AI Hackathon (2026)**
**Domain:** Human Safety

Loop detection and rescue system for neurodivergent-friendly development. Uses a Shakespeare confidante metaphor — the system "reads the room" by detecting what is absent (progress, variation, completion) rather than what is present.

**Key results:**
- MonitorAgent detects repetitive loop patterns in developer behavior
- RescueAgent provides contextual intervention without disrupting flow
- Memory bank for persistent context across sessions
- Docker + Kubernetes deployment configuration

**What it does:** UICare watches for signs that a developer (especially neurodivergent developers) is stuck in an unproductive loop — not by tracking keystrokes, but by noticing the absence of forward motion. When it detects entrapment, it offers rescue through the RescueAgent.

**Built with:** TypeScript, GPT-4-mini, Docker, Kubernetes, React
**Status:** Partial — agents built, web UI exists, not yet in production

---

### ConsentChain — Empirical Safety Ledger
**Domain:** Empirical Safety

Cryptographic consent governance for AI agents. Every agent action must be consented, logged, and revocable. Built as a Turborepo monorepo with 8 packages.

**Key architecture:**
- Agent SDK for consent-aware agent development
- Cryptographic ledger for immutable action records
- Policy engine for consent rule enforcement
- Step-up authentication for high-risk actions
- Idempotency layer for safe retries

**Built with:** TypeScript, Next.js, Prisma, Turborepo, NextAuth/Auth0
**Status:** Partial — architecture complete, 8 packages built, no production deployment

---

### Instructional Integrity UI — Cognitive Safety Evaluator
**Domain:** Cognitive Safety

Evaluator interface for assessing instructional artifacts against cognitive safety rubrics. Grounded in 25+ years of education and instructional design work.

**Key features:**
- Rubric system with evidence states
- Evaluator interface with structured assessment flow
- Domain types for cognitive safety categories
- Journey map for evaluation process

**Built with:** TypeScript, Next.js, Prisma
**Status:** Prototype — working interface, core evaluation logic not yet wired

## Links

- GitHub: [github.com/coreyalejandro](https://github.com/coreyalejandro)
- Portfolio: [coreys-agentic-portfolio] (link TBD)
- GitLab: [gitlab.com/coreyalejandro](https://gitlab.com/coreyalejandro)
