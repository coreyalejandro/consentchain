import Link from 'next/link';

const TALISMAN_PILLARS = [
  {
    id: 'DRY',
    label: 'Don\'t Repeat Yourself',
    description: 'Every pattern encoded once. Every deviation flagged. The system learns from the single source of truth.',
  },
  {
    id: 'KISS',
    label: 'Keep It Simple',
    description: 'Complexity is cognitive tax. A neurodivergent mind cannot afford to waste energy on unnecessary abstraction.',
  },
  {
    id: 'DETERMINISM',
    label: 'Determinism',
    description: 'Given the same inputs, the system must produce the same outputs. This is not a feature. It is a right.',
  },
  {
    id: 'SAFETY-FIRST',
    label: 'Safety as Precondition',
    description: 'Nothing works until the environment is safe. This was true in my classroom. It is true in the model.',
  },
];

const SECTORS = [
  {
    href: '/the-build',
    label: 'THE BUILD',
    sublabel: "I'm Just a Build",
    description: '60s cinematic homage. Four acts. One flag on the server mountain.',
  },
  {
    href: '/resume',
    label: 'RESUME',
    sublabel: 'The Arc',
    description: 'Stanford → Educator → Dean → AI Engineer. 35 years compressed into evidence.',
  },
  {
    href: '/ledger',
    label: 'LEDGER',
    sublabel: 'References',
    description: 'Zero-effort context for Odessa College and PROACTIVE GitLab. 100% detection rate.',
  },
  {
    href: '/the-cage',
    label: 'THE CAGE',
    sublabel: 'TLOC Simulation',
    description: 'Interactive simulation of The Living Constitution governance framework.',
  },
  {
    href: '/essays',
    label: 'ESSAYS',
    sublabel: 'Safety as Home',
    description: 'Visceral 25-year narrative through-line. ATS-optimized. Written in blood.',
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16">

      {/* Hero — The Talisman */}
      <header className="mb-20">
        <div className="mb-2">
          <span className="text-xs tracking-[0.3em] text-zinc-600 uppercase">C-RSP v4.0 — TLOC-ENFORCED</span>
        </div>
        <h1 className="text-5xl font-extralight tracking-[0.2em] text-zinc-50 mb-6">
          THE TALISMAN
        </h1>
        <div className="max-w-3xl">
          <p className="text-lg font-light text-zinc-300 leading-relaxed mb-4">
            I construct <strong className="text-zinc-50 font-normal">Gatekeeper Prompts</strong> — architectural
            constraints enforced before any generation occurs — because my neurodivergent mind learned, over
            three decades of building safe spaces, that{' '}
            <em className="text-zinc-200">the structure of the container determines the quality of what it holds.</em>
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed">
            My analytical style is shaped by a neurodivergent cognitive profile (Autism and Schizophrenia) and
            professional experience as a K–20 classroom teacher, charter school founder and principal, college
            administrator and instructional systems designer. I view task analysis not just as a method,
            but as the fundamental substrate of AI Safety.
          </p>
        </div>
      </header>

      {/* The 4 Pillars */}
      <section
        className="mb-16 border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="pillars-heading"
      >
        <h2 id="pillars-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">
          The Talisman — Four Enforced Constraints
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TALISMAN_PILLARS.map((pillar) => (
            <div key={pillar.id} className="border-l border-zinc-700 pl-4">
              <div className="text-xs tracking-[0.2em] text-zinc-500 mb-1">{pillar.id}</div>
              <div className="text-sm font-light text-zinc-200 mb-2">{pillar.label}</div>
              <div className="text-xs text-zinc-500 leading-relaxed">{pillar.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* C-RSP Core Thesis */}
      <section
        className="mb-16 border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="crsp-thesis-heading"
      >
        <h2 id="crsp-thesis-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          C-RSP — Constitutionally Regulated Single Pass
        </h2>
        <div className="space-y-4 text-sm text-zinc-300 leading-relaxed max-w-3xl">
          <p>
            I am pioneering{' '}
            <strong className="text-zinc-50 font-normal">C-RSP (Constitutionally-Regulated Single Pass)</strong>{' '}
            prompting. By treating AI instructions as &ldquo;paired-artifact&rdquo; law — JSON for the machine,
            Markdown for the human — I eliminate the &ldquo;Governance Gap&rdquo; in agentic workflows.
          </p>
          <p>
            My <strong className="text-zinc-50 font-normal">Guardian Kernel</strong> ensures that no action is
            taken without a forensic audit against the constitution. The same principle I enforced when I
            modularized Odessa College&rsquo;s curriculum: no step is taken without a verified contract.
          </p>
          <div className="grid gap-4 md:grid-cols-3 mt-6 pt-6 border-t border-zinc-800">
            <div>
              <div className="text-xs text-zinc-600 tracking-wider mb-2">DESIGN OF EVERYTHING</div>
              <div className="text-xs text-zinc-400">Defines <em>why</em> the system must exist.</div>
            </div>
            <div>
              <div className="text-xs text-zinc-600 tracking-wider mb-2">ZERO SHOT OS</div>
              <div className="text-xs text-zinc-400">Defines <em>how</em> the system must behave.</div>
            </div>
            <div>
              <div className="text-xs text-zinc-600 tracking-wider mb-2">COL (Cognitive Operating Layer)</div>
              <div className="text-xs text-zinc-400">Defines <em>what must happen first</em> — turning human cognition into something machines can safely act on.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Short Answers — Talisman Draft */}
      <section
        className="mb-16 border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="talisman-draft-heading"
      >
        <h2 id="talisman-draft-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          Anthropic Fellowship — Talisman Draft (Short Answers)
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-zinc-800 p-6" style={{ backgroundColor: '#111116' }}>
            <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">Project Highlight (Technical Execution)</div>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p className="text-zinc-200 font-light">
                <span className="text-zinc-50 font-normal">Project:</span> The Living Constitution (TLC) &ldquo;I&rsquo;m Just a Build&rdquo;
              </p>
              <p>
                I architected a Python 3.13-compliant Model Context Protocol (MCP) safety server (the Guardian Kernel) that
                enforces constitutional invariants across agentic workflows in real-time, achieving a 100% proactive anomaly
                detection rate.
              </p>
              <p>
                To translate this highly abstract governance system into public-facing pedagogical media, I engineered a deterministic,
                Remotion-based cinematic engine to programmatically generate an analog-homage safety teaser titled &ldquo;I&rsquo;m Just a Build.&rdquo;
              </p>
              <p className="text-zinc-400">
                This demonstrates my capacity to own the full AI Safety stack—from resolving bleeding-edge library dependency conflicts
                (FastMCP) at the kernel level to deploying highly constrained media pipelines for public transparency.
              </p>
            </div>
          </div>

          <div className="border border-zinc-800 p-6" style={{ backgroundColor: '#111116' }}>
            <div className="text-xs text-zinc-600 tracking-wider uppercase mb-3">Safety Philosophy (The Talisman Concept)</div>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p className="text-zinc-200 font-light">
                <span className="text-zinc-50 font-normal">Philosophy:</span> Executable Law via Deterministic Scaffolding
              </p>
              <p>
                My approach to AI Safety is a direct manifestation of my neurodivergent cognitive profile (Autism/Schizophrenia).
                I treat extreme, exhaustive task-analysis as the fundamental substrate of alignment.
              </p>
              <p>
                I do not trust narrative intent; I trust <span className="text-zinc-50 font-normal">Executable Law</span>. I build deterministic,
                cryptographic scaffolds—which I call &ldquo;Talismans&rdquo;—that anchor model behavior and prevent reasoning collapse.
              </p>
              <p>
                For example, before any code is written in a new repository within my architecture, a C-RSP (Constitutionally-Regulated
                Single Pass) JSON contract is generated and bound to the directory. The environment cannot execute without its Talisman.
                TLC is an operating model where uncertainty is regulated by strict, verifiable proof preceding execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Axiom */}
      <section
        className="mb-16 border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="axiom-heading"
      >
        <h2 id="axiom-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          The Safety Axiom
        </h2>
        <blockquote className="text-base font-light text-zinc-200 italic border-l-2 border-zinc-600 pl-6 leading-relaxed max-w-2xl" role="quote">
          &ldquo;If a system can make confident claims about reality that are false, and users must rely on
          those claims to act, then intent is irrelevant — the effect is operationally indistinguishable
          from malice.&rdquo;
        </blockquote>
        <p className="text-xs text-zinc-600 mt-4 ml-8">
          Therefore: epistemic reliability is a safety requirement, not a quality feature.
        </p>
      </section>

      {/* Sector Navigation */}
      <section aria-labelledby="sectors-heading">
        <h2 id="sectors-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          Application Sectors
        </h2>
        <nav className="grid gap-4 md:grid-cols-2 lg:grid-cols-5" aria-label="Application sectors">
          {SECTORS.map((sector) => (
            <Link
              key={sector.href}
              href={sector.href}
              className="group border border-zinc-800 hover:border-zinc-600 p-5 transition-colors"
              aria-label={`${sector.label} — ${sector.description}`}
            >
              <div className="text-xs tracking-[0.2em] text-zinc-500 group-hover:text-zinc-400 mb-1 transition-colors">
                {sector.sublabel}
              </div>
              <div className="text-sm font-light tracking-wider text-zinc-200 mb-3">
                {sector.label}
              </div>
              <div className="text-xs text-zinc-600 group-hover:text-zinc-500 leading-relaxed transition-colors">
                {sector.description}
              </div>
            </Link>
          ))}
        </nav>
      </section>

      {/* 35-Year Arc Footer */}
      <section
        className="mt-16 border-t border-zinc-900 pt-12"
        aria-labelledby="arc-footer-heading"
      >
        <h2 id="arc-footer-heading" className="text-xs tracking-[0.3em] text-zinc-700 uppercase mb-8">
          The 35-Year Arc
        </h2>
        <div className="grid gap-6 md:grid-cols-3" role="list">
          <article role="listitem" className="flex gap-4">
            <div className="w-px bg-zinc-800 shrink-0 mt-1" />
            <div>
              <time dateTime="1991/2010" className="text-xs text-zinc-700">1991–2010</time>
              <h3 className="text-sm font-light text-zinc-300 mt-1">The Educator</h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Safety as the active prerequisite for learning. Classrooms where the vulnerable thrive.
              </p>
            </div>
          </article>
          <article role="listitem" className="flex gap-4">
            <div className="w-px bg-zinc-800 shrink-0 mt-1" />
            <div>
              <time dateTime="2010/2020" className="text-xs text-zinc-700">2010–2020</time>
              <h3 className="text-sm font-light text-zinc-300 mt-1">The Dean</h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Systems must adapt to humans. First accelerated online college in Texas. Modularity as therapy.
              </p>
            </div>
          </article>
          <article role="listitem" className="flex gap-4">
            <div className="w-px bg-zinc-800 shrink-0 mt-1" />
            <div>
              <time dateTime="2020" className="text-xs text-zinc-700">2020–Present</time>
              <h3 className="text-sm font-light text-zinc-300 mt-1">The AI Engineer</h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Epistemic reliability as safety requirement. C-RSP, ITAYN, ConsentChain, PROACTIVE.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
