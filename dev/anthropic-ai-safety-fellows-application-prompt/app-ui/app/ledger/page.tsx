import Link from 'next/link';

const REFERENCES = [
  {
    id: 'ODESSA',
    label: 'Odessa College — OC Global',
    relationship: 'Administrative Dean (2010–2020)',
    contact_context: 'Dr. [Name] — VP of Academic Affairs, direct supervisor',
    proof_of_work: {
      headline: 'First Accelerated Online College in Texas',
      metric: '100 faculty | 80+ courses | 4-week modularization sprint',
      context:
        'I was hired to build OC Global — a greenfield online college — under a mandate to move fast without sacrificing rigor. I applied the same principle I now apply to AI governance: you cannot build a safe system without modular, auditable contracts at every layer.',
      talking_points: [
        'The 4-week modularization sprint: this proves I can handle the complex task analysis required for AI alignment work.',
        'Neurodiversity-first policy design: 20+ redesigned student support policies with accessibility as a non-negotiable constraint.',
        'MobileU: ML-driven SMS delivery of courses — early proof of the "access as safety" philosophy.',
        'WebEx integration: I piloted WebEx in educational settings before it was standard — comfort with first-mover technology.',
        'The Dean\'s axiom: "You are not disabled. You are dis-enabled by systems." This is Constitutional AI philosophy applied to human services.',
      ],
    },
    what_to_emphasize:
      'Focus on the 4-week modularization. This is the most direct analog to the sprint-based, modular AI safety work Anthropic values.',
  },
  {
    id: 'GITLAB',
    label: 'GitLab Hackathon — PROACTIVE',
    relationship: 'Lead Engineer (2024–2025)',
    contact_context: 'GitLab hackathon judges + public repo evidence',
    proof_of_work: {
      headline: '100% Detection Rate — Submitted, Deployed, Verified',
      metric: '212/212 tests passing | 100% CI/CD vulnerability detection',
      context:
        'PROACTIVE is my AI security agent for GitLab pipelines. It detects malicious code injection attempts in CI/CD environments with a 100% detection rate across the test corpus. This is not a demo. It is a deployed, tested, evidence-based system.',
      talking_points: [
        '212/212 tests — every edge case covered. This reflects my obsession with deterministic, fail-closed systems.',
        '100% detection rate — "Model Hunter" skills: the ability to systematically probe, evaluate, and benchmark AI behavior.',
        'The 7-stage gateway (validation → idempotency → revocation → policy → step-up → exec → ledger) reflects ConsentChain architecture.',
        'Submitted to GitLab hackathon — this is public, verifiable, time-stamped work.',
        'Architecture mirrors Constitutional AI principles: no action without policy check; every action is ledgered.',
      ],
    },
    what_to_emphasize:
      'Lead with the 100% detection rate and 212 tests. This is the most concrete technical validation in the entire application.',
  },
  {
    id: 'ADDITIONAL',
    label: 'Additional Context for Committee',
    relationship: 'For Anthropic Interview Panel',
    contact_context: 'Pre-read packet for technical screeners',
    proof_of_work: {
      headline: 'Why This Candidate is Unusual',
      metric: 'K-20 → Policy → Code → Safety Research — all in one person',
      context:
        'Most AI safety candidates arrive from pure research or pure engineering. I arrive from human safety — 25 years of building systems where the failure mode is a person being harmed, not a metric being miscalibrated. This is a different kind of rigor.',
      talking_points: [
        'I am autistic and schizophrenic. I build safety systems because I have needed them my entire life.',
        'I view neuro-diversity not as a liability but as a signal: if a system is safe for me, it is genuinely safe.',
        'My "Talisman" methodology — Gatekeeper Prompts enforcing DRY, KISS, Determinism — emerged from my neurotype, not from textbooks.',
        '"Intention is All You Need" (ITAYN) is a research claim: that preserving intent through the human-to-machine translation layer is the most important unsolved problem in alignment.',
        'The Living Constitution is not a portfolio project. It is a governance OS. I run my entire engineering practice through it.',
      ],
    },
    what_to_emphasize:
      'Lead with the lived experience angle. This is what no other candidate can offer. Follow immediately with the technical evidence.',
  },
];

export default function LedgerPage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="ledger-title">

      <header className="mb-16">
        <div className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">C-RSP v4.0 — Module 7</div>
        <h1 id="ledger-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          THE LEDGER
        </h1>
        <p className="text-sm font-light text-zinc-400 max-w-2xl leading-relaxed">
          Reference context — zero cognitive effort required. Everything your reference needs to
          speak on your behalf is here, structured, and verifiable.
        </p>
      </header>

      {/* Reference Entries */}
      <div className="space-y-8">
        {REFERENCES.map((ref) => (
          <section
            key={ref.id}
            className="border border-zinc-800 p-8"
            style={{ backgroundColor: '#18181b' }}
            aria-labelledby={`ref-${ref.id}-heading`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-xs tracking-[0.2em] text-zinc-600 uppercase mb-1">{ref.id}</div>
                <h2 id={`ref-${ref.id}-heading`} className="text-lg font-light tracking-wide text-zinc-100">
                  {ref.label}
                </h2>
                <div className="text-xs text-zinc-600 mt-1">{ref.relationship}</div>
                <div className="text-xs text-zinc-700 mt-0.5 italic">{ref.contact_context}</div>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-xs tracking-wider text-zinc-700 border border-zinc-800 px-3 py-1">
                  {ref.proof_of_work.metric}
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="mb-6 pb-6 border-b border-zinc-800">
              <div className="text-xs text-zinc-600 tracking-wider uppercase mb-2">Headline</div>
              <div className="text-sm font-light text-zinc-200">{ref.proof_of_work.headline}</div>
              <div className="text-xs text-zinc-600 mt-2 leading-relaxed">{ref.proof_of_work.context}</div>
            </div>

            {/* Talking Points */}
            <div className="mb-6">
              <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">
                Talking Points for Committee
              </div>
              <ol className="space-y-3" role="list">
                {ref.proof_of_work.talking_points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-zinc-400 leading-relaxed" role="listitem">
                    <span className="text-zinc-700 font-mono shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Emphasis Directive */}
            <div className="border-l-2 border-zinc-700 pl-4">
              <div className="text-xs text-zinc-600 tracking-wider uppercase mb-1">Lead With</div>
              <div className="text-xs text-zinc-400 leading-relaxed italic">{ref.what_to_emphasize}</div>
            </div>
          </section>
        ))}
      </div>

      {/* Additional Comments */}
      <section
        className="mt-16 border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="comments-heading"
      >
        <h2 id="comments-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          Additional Comments — Airtable Form
        </h2>
        <div className="space-y-6">
          <div>
            <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">Project Highlight (Technical Execution)</div>
            <blockquote className="text-sm text-zinc-300 leading-relaxed italic border-l border-zinc-700 pl-4" role="quote">
              &ldquo;Project: The Living Constitution (TLC) &amp; &lsquo;I&rsquo;m Just a Build.&rsquo; I architected a Python 3.13-compliant Model Context
              Protocol (MCP) safety server (the Guardian Kernel) that enforces constitutional invariants across agentic workflows in
              real-time, achieving a 100% proactive anomaly detection rate. To translate this highly abstract governance system into
              public-facing pedagogical media, I engineered a deterministic, Remotion-based cinematic engine to programmatically generate
              an analog-homage safety teaser titled &lsquo;I&rsquo;m Just a Build.&rsquo; This project demonstrates my capacity to own the full AI Safety
              stack—from resolving bleeding-edge library dependency conflicts (FastMCP) at the kernel level to deploying highly constrained
              media pipelines for public transparency.&rdquo;
            </blockquote>
          </div>
          <div>
            <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">Statement</div>
            <blockquote className="text-sm text-zinc-300 leading-relaxed italic border-l border-zinc-700 pl-4" role="quote">
              &ldquo;I go through great pains to ensure my work is truthful, transparent, and cognitively tangible.
              I insist that its output be two-fold: a timely contribution to the body of research and a developer-facing
              product that simultaneously scaffolds and expands user knowledge. The intersection of research and
              development is the most exciting relationship in our world; this persistent call-and-response tension
              between the public and the republic of the marketplace is the friction that drives innovation and evolution.&rdquo;
            </blockquote>
          </div>
          <div>
            <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">Neurodivergent Substrate</div>
            <blockquote className="text-sm text-zinc-300 leading-relaxed italic border-l border-zinc-700 pl-4" role="quote">
              &ldquo;My analytical style is shaped by a neurodivergent cognitive profile (Autism and Schizophrenia)
              and professional experience as a K–20 classroom teacher, charter school founder and principal, college
              administrator and instructional systems designer. In my workflow, I construct
              Gatekeeper Prompts (or &lsquo;Talismans&rsquo;) to enforce architectural constraints (DRY, KISS, Determinism)
              before any generation occurs. I view task analysis not just as a method, but as the fundamental
              substrate of AI Safety.&rdquo;
            </blockquote>
          </div>
          <div>
            <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">Safety Philosophy (The &ldquo;Talisman&rdquo; Concept)</div>
            <blockquote className="text-sm text-zinc-300 leading-relaxed italic border-l border-zinc-700 pl-4" role="quote">
              &ldquo;Philosophy: Executable Law via Deterministic Scaffolding. My approach to AI Safety is a direct manifestation of my
              neurodivergent cognitive profile (Autism/Schizophrenia). I treat extreme, exhaustive task-analysis as the fundamental
              substrate of alignment. I do not trust narrative intent; I trust &lsquo;Executable Law.&rsquo; I build deterministic, cryptographic
              scaffolds—which I call &lsquo;Talismans&rsquo;—that anchor model behavior and prevent reasoning collapse. For example, before any code is
              written in a new repository within my architecture, a C-RSP (Constitutionally-Regulated Single Pass) JSON contract is generated
              and bound to the directory. The environment cannot execute without its Talisman. TLC is an operating model where uncertainty
              is regulated by strict, verifiable proof preceding execution.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="mt-8 border border-zinc-800 p-8" style={{ backgroundColor: '#18181b' }} aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          Verification Links
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-l border-zinc-800 pl-4">
            <div className="text-xs text-zinc-600 mb-1">PROACTIVE Repo</div>
            <Link
              href="https://github.com/coreyalejandro/proactive-gitlab-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              github.com/coreyalejandro/proactive-gitlab-agent
            </Link>
          </div>
          <div className="border-l border-zinc-800 pl-4">
            <div className="text-xs text-zinc-600 mb-1">The Living Constitution</div>
            <Link
              href="https://github.com/coreyalejandro/the-living-constitution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              github.com/coreyalejandro/the-living-constitution
            </Link>
          </div>
          <div className="border-l border-zinc-800 pl-4">
            <div className="text-xs text-zinc-600 mb-1">LinkedIn</div>
            <Link
              href="https://www.linkedin.com/in/coreyalejandro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              linkedin.com/in/coreyalejandro
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
