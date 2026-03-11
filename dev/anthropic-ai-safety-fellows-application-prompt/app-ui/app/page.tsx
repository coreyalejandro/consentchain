import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light tracking-[0.3em] text-zinc-50 mb-6">
          COL-PROACTIVE
        </h1>
        <p className="text-lg font-light text-zinc-300 mb-4">
          Anthropic AI Safety Fellows Application
        </p>
        <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
          A methodology that treats reliability failures as safety failures —
          the MBSE bridge between "Attention Is All You Need" and "Constitutional AI"
        </p>
      </div>

      {/* Core Thesis */}
      <section
        className="border border-zinc-800 p-8 mb-12"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="core-thesis-heading"
      >
        <h2 id="core-thesis-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">The Core Thesis</h2>
        <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
          <p>
            <strong className="text-zinc-50">Design of Everything</strong> defines WHY the system must exist.
          </p>
          <p>
            <strong className="text-zinc-50">Zero Shot OS</strong> defines HOW the system must behave.
          </p>
          <p>
            <strong className="text-zinc-50">COL (Cognitive Operating Layer)</strong> defines WHAT MUST HAPPEN FIRST
            for either to be possible at all: <em>turning human cognition into something machines can safely
            and correctly act on.</em>
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <nav className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mb-16" aria-label="Application sections">
        <Link
          href="/essays"
          className="border border-zinc-800 hover:border-zinc-600 transition-colors p-6"
          aria-label="Essays - 35-year arc: Teacher to Dean to AI Engineer"
        >
          <h2 className="text-xl font-light tracking-wide text-zinc-50 mb-2">
            Essays
          </h2>
          <p className="text-sm text-zinc-400">
            35-year arc: Teacher → Dean → AI Engineer
          </p>
        </Link>

        <Link
          href="/research"
          className="border border-zinc-800 hover:border-zinc-600 transition-colors p-6"
          aria-label="Research - COL-PROACTIVE: The MBSE Bridge"
        >
          <h2 className="text-xl font-light tracking-wide text-zinc-50 mb-2">
            Research
          </h2>
          <p className="text-sm text-zinc-400">
            COL-PROACTIVE: The MBSE Bridge
          </p>
        </Link>

        <Link
          href="/video"
          className="border border-zinc-800 hover:border-zinc-600 transition-colors p-6"
          aria-label="Video submission script"
        >
          <h2 className="text-xl font-light tracking-wide text-zinc-50 mb-2">
            Video
          </h2>
          <p className="text-sm text-zinc-400">
            Video submission script
          </p>
        </Link>

        <Link
          href="/itayn"
          className="border border-zinc-800 hover:border-zinc-600 transition-colors p-6"
          aria-label="ITAYN Demo - intention translation preview"
        >
          <h2 className="text-xl font-light tracking-wide text-zinc-50 mb-2">
            ITAYN Demo
          </h2>
          <p className="text-sm text-zinc-400">
            Intention translation preview
          </p>
        </Link>

        <Link
          href="/interview"
          className="border border-zinc-800 hover:border-zinc-600 transition-colors p-6"
          aria-label="Interview Q&A preparation"
        >
          <h2 className="text-xl font-light tracking-wide text-zinc-50 mb-2">
            Interview
          </h2>
          <p className="text-sm text-zinc-400">
            Q&A preparation
          </p>
        </Link>
      </nav>

      {/* Safety Axiom */}
      <section
        className="border border-zinc-800 p-8 mb-12"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="safety-axiom-heading"
      >
        <h2 id="safety-axiom-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">The Safety Axiom</h2>
        <blockquote className="text-zinc-300 italic border-l-2 border-zinc-600 pl-4" role="quote">
          "If a system can make confident claims about reality that are false, and users must
          rely on those claims to act, then intent is irrelevant — the effect is operationally
          indistinguishable from malice."
        </blockquote>
        <p className="text-sm text-zinc-400 mt-4">
          Therefore, epistemic reliability is a safety requirement, not a quality feature.
        </p>
      </section>

      {/* The 35-Year Arc */}
      <section
        className="border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="arc-heading"
      >
        <h2 id="arc-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">The 35-Year Arc</h2>
        <div className="grid gap-6 md:grid-cols-3" role="list" aria-label="Career phases">
          <article role="listitem" aria-labelledby="phase1-heading">
            <h3 id="phase1-heading" className="text-lg font-light text-zinc-50 mb-2">Phase 1: The Educator</h3>
            <p className="text-xs text-zinc-500 mb-2"><time dateTime="1991/2010">1991-2010</time></p>
            <p className="text-sm text-zinc-400">
              Safety as precondition for cognition. Building classrooms where the vulnerable could thrive.
            </p>
          </article>
          <article role="listitem" aria-labelledby="phase2-heading">
            <h3 id="phase2-heading" className="text-lg font-light text-zinc-50 mb-2">Phase 2: The Dean</h3>
            <p className="text-xs text-zinc-500 mb-2"><time dateTime="2010/2020">2010-2020</time></p>
            <p className="text-sm text-zinc-400">
              Systems must adapt to humans. The "dis-enabled" frame: people are not disabled;
              they are dis-enabled by systems.
            </p>
          </article>
          <article role="listitem" aria-labelledby="phase3-heading">
            <h3 id="phase3-heading" className="text-lg font-light text-zinc-50 mb-2">Phase 3: The AI Engineer</h3>
            <p className="text-xs text-zinc-500 mb-2"><time dateTime="2020">2020-Present</time></p>
            <p className="text-sm text-zinc-400">
              Epistemic reliability as safety requirement. COL-PROACTIVE: the MBSE bridge.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
