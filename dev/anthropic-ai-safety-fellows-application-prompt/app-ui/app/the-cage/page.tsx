import Link from 'next/link';

const ARTICLES = [
  {
    id: 'I',
    title: 'Epistemic Responsibility',
    thesis: 'If a system can make confident claims about reality that are false, and users must rely on those claims to act, the effect is operationally indistinguishable from malice.',
    implication: 'Epistemic reliability is a safety requirement, not a quality feature. Every claim must be auditable.',
    enforcement: 'C-RSP Verification & Truth (V&T) statement. Every output ends with: Exists → Verified Against → Not Claimed → Non-Existent → Unverified → Functional Status.',
  },
  {
    id: 'II',
    title: 'Intent Preservation',
    thesis: 'The translation of human intent into machine instruction must be lossless. Any compression of intent is a compression of safety.',
    implication: 'ITAYN (Intention is All You Need) — treating intent as a high-fidelity input signal that overrides standard optimization shortcuts.',
    enforcement: 'Gatekeeper Prompts capture intent before execution. Intent must be restatable by the AI before any action is taken.',
  },
  {
    id: 'III',
    title: 'Modularity as Governance',
    thesis: 'A system that cannot be decomposed cannot be audited. A system that cannot be audited cannot be made safe.',
    implication: 'Every action gateway must be modular, fail-closed, and independently verifiable. Modules may be skipped; they may not be silently bypassed.',
    enforcement: 'SOP-2: Evidence receipts for every module completion. Manifest.json tracks state. No module is "done" without a verifiable artifact.',
  },
  {
    id: 'IV',
    title: 'Accessibility as Constitutional Right',
    thesis: 'People are not disabled. They are dis-enabled by systems. A safe system is one that removes its own barriers.',
    implication: 'Neuro-diversity is not an edge case. It is the signal. If the system is safe for the cognitively marginalized, it is safe.',
    enforcement: 'All interfaces: semantic HTML, ARIA roles, keyboard navigation, skip links. WCAG 2.1 AA as a floor, not a ceiling.',
  },
  {
    id: 'V',
    title: 'Amendment Protocol',
    thesis: 'No governance document is final. Every correction is a constitutional amendment. Learning must be institutionalized.',
    implication: 'Tasks/lessons.md: every correction from the user updates the amendment log. Mistakes become rules. Rules prevent recurrence.',
    enforcement: 'After any user correction: update lessons.md. Write rules for yourself. Ruthlessly iterate until mistake rate drops.',
  },
];

const ACTIVE_PROJECTS = [
  {
    name: 'ConsentChain',
    domain: 'Empirical Safety',
    status: 'Partial',
    description: 'Cryptographic consent ledger. 7-stage action gateway. Turborepo monorepo (8 packages).',
    repo: 'https://github.com/coreyalejandro/consentchain',
  },
  {
    name: 'PROACTIVE',
    domain: 'Epistemic Safety',
    status: 'Validated',
    description: 'GitLab CI/CD security agent. 212/212 tests. 100% detection rate.',
    repo: 'https://github.com/coreyalejandro/proactive-gitlab-agent',
  },
  {
    name: 'ITAYN',
    domain: 'Cognitive Safety',
    status: 'In Progress',
    description: 'Intention is All You Need — intent-based alignment research and MVP.',
    repo: null,
  },
  {
    name: 'The Living Constitution',
    domain: 'All 4 Domains',
    status: 'Active',
    description: 'Governance overlay for the Safety Systems Design Commonwealth. C-RSP authority source.',
    repo: 'https://github.com/coreyalejandro/the-living-constitution',
  },
];

export default function TheCagePage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="cage-title">

      <header className="mb-16">
        <div className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">C-RSP v4.0 — Module 8</div>
        <h1 id="cage-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          THE CAGE
        </h1>
        <p className="text-sm font-light text-zinc-400 max-w-2xl leading-relaxed">
          Interactive simulation of The Living Constitution (TLOC) governance framework.
          The cage doesn&rsquo;t trap the work. It makes it safe enough to run at full speed.
        </p>
        <div className="mt-4">
          <Link
            href="https://github.com/coreyalejandro/the-living-constitution"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            github.com/coreyalejandro/the-living-constitution →
          </Link>
        </div>
      </header>

      {/* The Articles */}
      <section className="mb-16" aria-labelledby="articles-heading">
        <h2 id="articles-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">
          The Living Constitution — Active Articles
        </h2>
        <div className="space-y-4">
          {ARTICLES.map((article) => (
            <details
              key={article.id}
              className="border border-zinc-800 group"
              style={{ backgroundColor: '#18181b' }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-6">
                  <span className="text-xs text-zinc-700 font-mono tracking-wider">ART. {article.id}</span>
                  <span className="text-sm font-light text-zinc-200 tracking-wide">{article.title}</span>
                </div>
                <span className="text-zinc-700 text-xs group-open:rotate-180 transition-transform duration-200" aria-hidden="true">
                  ▾
                </span>
              </summary>

              <div className="px-6 pb-6 border-t border-zinc-800 pt-6 space-y-4">
                <div>
                  <div className="text-xs text-zinc-600 tracking-wider uppercase mb-2">Thesis</div>
                  <blockquote className="text-sm text-zinc-300 italic leading-relaxed border-l border-zinc-700 pl-4" role="quote">
                    &ldquo;{article.thesis}&rdquo;
                  </blockquote>
                </div>
                <div>
                  <div className="text-xs text-zinc-600 tracking-wider uppercase mb-2">Implication</div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{article.implication}</p>
                </div>
                <div>
                  <div className="text-xs text-zinc-600 tracking-wider uppercase mb-2">Enforcement Mechanism</div>
                  <p className="text-xs text-zinc-600 leading-relaxed">{article.enforcement}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Active Projects under TLOC */}
      <section
        className="mb-16 border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">
          Active Projects — Safety Systems Design Commonwealth
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {ACTIVE_PROJECTS.map((project) => (
            <div key={project.name} className="border border-zinc-800 p-6" style={{ backgroundColor: '#111113' }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs tracking-wider text-zinc-600 mb-1">{project.domain}</div>
                  <h3 className="text-sm font-light text-zinc-200">{project.name}</h3>
                </div>
                <span className={`text-[10px] tracking-wider border px-2 py-0.5 ${
                  project.status === 'Validated'
                    ? 'text-zinc-400 border-zinc-600'
                    : 'text-zinc-700 border-zinc-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed mb-3">{project.description}</p>
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-zinc-700 hover:text-zinc-500 transition-colors"
                >
                  {project.repo.replace('https://', '')} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* C-RSP Authority Stack */}
      <section
        className="border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="authority-heading"
      >
        <h2 id="authority-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          C-RSP Authority Order (Strict)
        </h2>
        <p className="text-xs text-zinc-600 mb-6">Lower entries do not override higher entries.</p>
        <ol className="space-y-2" role="list">
          {[
            ['1', 'Canonical master template', 'projects/c-rsp/BUILD_CONTRACT.md'],
            ['2', 'Guided instance template', 'projects/c-rsp/BUILD_CONTRACT.instance.md'],
            ['3', 'Schema artifact', 'projects/c-rsp/contract-schema.json'],
            ['4', 'Outcome artifact (V&T shape)', 'projects/c-rsp/CRSP_OUTCOME_TEMPLATE.md'],
            ['5', 'Workflow / profile helpers', 'projects/c-rsp/workflows/*'],
            ['6', 'Executed project contracts', 'projects/*/BUILD_CONTRACT*'],
          ].map(([order, label, path]) => (
            <li key={order} className="flex items-start gap-4 text-xs" role="listitem">
              <span className="text-zinc-700 font-mono shrink-0 w-4">{order}.</span>
              <span className="text-zinc-500 shrink-0 w-48">{label}</span>
              <code className="text-zinc-700 font-mono">{path}</code>
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
}
