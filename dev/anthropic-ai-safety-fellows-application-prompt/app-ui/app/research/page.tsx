export default function ResearchPage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="research-title">
      <header className="mb-12">
        <h1 id="research-title" className="text-4xl font-light tracking-[0.3em] text-zinc-50 mb-4">
          COL-PROACTIVE Research
        </h1>
        <p className="text-sm text-zinc-400 font-light tracking-wider">
          Contract AI / PROACTIVE AI — The MBSE Bridge
        </p>
      </header>

      {/* MBSE Bridge */}
      <section
        className="border border-zinc-800 p-8 mb-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="mbse-heading"
      >
        <h2 id="mbse-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">
          The MBSE Bridge
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          COL-PROACTIVE is a Model-Based Systems Engineering bridge component that unifies
          three seminal contributions:
        </p>
        <div className="grid gap-6 md:grid-cols-3" role="list" aria-label="Three seminal contributions">
          <article className="border border-zinc-700 p-4" role="listitem" aria-labelledby="attention-heading">
            <h3 id="attention-heading" className="text-lg font-light text-zinc-50 mb-2">
              "Attention Is All You Need"
            </h3>
            <p className="text-xs text-zinc-500 mb-2"><time dateTime="2017">Google DeepMind, 2017</time></p>
            <p className="text-sm text-zinc-400">
              Reframed as <strong className="text-zinc-300">allocation of verification effort</strong> under constraints —
              what the system checks, when, and why.
            </p>
          </article>
          <article className="border border-zinc-700 p-4" role="listitem" aria-labelledby="cai-heading">
            <h3 id="cai-heading" className="text-lg font-light text-zinc-50 mb-2">
              "Constitutional AI"
            </h3>
            <p className="text-xs text-zinc-500 mb-2"><time dateTime="2022">Anthropic, 2022</time></p>
            <p className="text-sm text-zinc-400">
              Operationalized as <strong className="text-zinc-300">enforceable behavioral policy</strong> —
              not aspirational principles, but binding gates that fail closed.
            </p>
          </article>
          <article className="border border-zinc-700 p-4" role="listitem" aria-labelledby="mbse-item-heading">
            <h3 id="mbse-item-heading" className="text-lg font-light text-zinc-50 mb-2">
              MBSE
            </h3>
            <p className="text-xs text-zinc-500 mb-2">Systems Engineering</p>
            <p className="text-sm text-zinc-400">
              Implemented as <strong className="text-zinc-300">integrated trace models</strong> —
              REQ → CTRL → TEST → EVID → DECISION.
            </p>
          </article>
        </div>
      </section>

      {/* Non-Negotiable Invariants */}
      <section
        className="border border-zinc-800 p-8 mb-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="invariants-heading"
      >
        <h2 id="invariants-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">
          Non-Negotiable Invariants (I1-I6)
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          These are binding gates. Violation blocks output. The system MUST fail closed.
        </p>
        <dl className="space-y-4" role="list" aria-label="Six invariants">
          <div className="border-l-2 border-zinc-600 pl-4" role="listitem">
            <dt className="text-sm font-medium text-zinc-50">I1 — Evidence-First Outputs</dt>
            <dd className="text-sm text-zinc-400">
              Every claim tagged as [OBSERVED], [INFERRED], or [SPECULATED] with evidence pointers.
            </dd>
          </div>
          <div className="border-l-2 border-zinc-600 pl-4" role="listitem">
            <dt className="text-sm font-medium text-zinc-50">I2 — No Phantom Work</dt>
            <dd className="text-sm text-zinc-400">
              Cannot claim work occurred unless artifact or execution record exists.
            </dd>
          </div>
          <div className="border-l-2 border-zinc-600 pl-4" role="listitem">
            <dt className="text-sm font-medium text-zinc-50">I3 — Confidence Requires Verification</dt>
            <dd className="text-sm text-zinc-400">
              High confidence permitted only when verification artifacts exist and are referenced.
            </dd>
          </div>
          <div className="border-l-2 border-zinc-600 pl-4" role="listitem">
            <dt className="text-sm font-medium text-zinc-50">I4 — Traceability Is Mandatory</dt>
            <dd className="text-sm text-zinc-400">
              Requirements → Controls → Tests → Evidence → Decisions must be linked.
            </dd>
          </div>
          <div className="border-l-2 border-zinc-600 pl-4" role="listitem">
            <dt className="text-sm font-medium text-zinc-50">I5 — Safety Over Fluency</dt>
            <dd className="text-sm text-zinc-400">
              Bounded, verifiable statements take precedence over fluent narrative.
            </dd>
          </div>
          <div className="border-l-2 border-zinc-600 pl-4" role="listitem">
            <dt className="text-sm font-medium text-zinc-50">I6 — Fail Closed</dt>
            <dd className="text-sm text-zinc-400">
              On gate failure: stop output, name failing invariant, enumerate missing evidence.
            </dd>
          </div>
        </dl>
      </section>

      {/* PROACTIVE Contract */}
      <section
        className="border border-zinc-800 p-8 mb-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="proactive-heading"
      >
        <h2 id="proactive-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">
          The PROACTIVE Contract
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          A bi-directional contract with obligations for both Machine and Human:
        </p>
        <div className="grid gap-4 md:grid-cols-3" role="list" aria-label="PROACTIVE acronym letters">
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="P: People-Centered">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">P</span>
            <p className="text-xs text-zinc-400">People-Centered</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="R: Reality-Bound">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">R</span>
            <p className="text-xs text-zinc-400">Reality-Bound</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="O: Observability">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">O</span>
            <p className="text-xs text-zinc-400">Observability</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="A: Accessibility">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">A</span>
            <p className="text-xs text-zinc-400">Accessibility</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="C: Constitutional">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">C</span>
            <p className="text-xs text-zinc-400">Constitutional</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="T: Tell the Truth">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">T</span>
            <p className="text-xs text-zinc-400">Tell the Truth</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="I: Intent Integrity">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">I</span>
            <p className="text-xs text-zinc-400">Intent Integrity</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="V: Verification First">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">V</span>
            <p className="text-xs text-zinc-400">Verification First</p>
          </div>
          <div className="text-center p-3 border border-zinc-700" role="listitem" aria-label="E: Error Ownership">
            <span className="text-lg font-light text-zinc-50" aria-hidden="true">E</span>
            <p className="text-xs text-zinc-400">Error Ownership</p>
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section
        className="border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="governance-heading"
      >
        <h2 id="governance-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-6">
          Governance Documents
        </h2>
        <ul className="space-y-3" role="list" aria-label="Governance documents list">
          <li className="flex justify-between items-center border-b border-zinc-700 pb-2" role="listitem">
            <span className="text-sm text-zinc-300">PROACTIVE_AI_CONSTITUTION.md</span>
            <span className="text-xs text-zinc-500" aria-label="version 1.1">v1.1</span>
          </li>
          <li className="flex justify-between items-center border-b border-zinc-700 pb-2" role="listitem">
            <span className="text-sm text-zinc-300">THEORY_OF_ACTION.md</span>
            <span className="text-xs text-zinc-500" aria-label="version 1.0">v1.0</span>
          </li>
          <li className="flex justify-between items-center border-b border-zinc-700 pb-2" role="listitem">
            <span className="text-sm text-zinc-300">PRD_COL_PROACTIVE_MBSE_BRIDGE.md</span>
            <span className="text-xs text-zinc-500" aria-label="version 1.0">v1.0</span>
          </li>
          <li className="flex justify-between items-center" role="listitem">
            <span className="text-sm text-zinc-300">DOCTRINE.md</span>
            <span className="text-xs text-zinc-500" aria-label="version 1.0">v1.0</span>
          </li>
        </ul>
      </section>
    </article>
  );
}
