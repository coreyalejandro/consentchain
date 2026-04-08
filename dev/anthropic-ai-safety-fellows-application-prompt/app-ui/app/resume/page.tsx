const TIMELINE = [
  {
    era: 'EDUCATION',
    period: '1991–1997',
    role: 'BA Drama — Stanford University',
    org: 'Stanford University',
    highlights: [
      'First-generation college student. Navigated higher education as a neurodivergent Black man.',
      'Foundation in systems thinking, performance theory, and human behavior — not just technique.',
      'Developed early framework for cognitive accessibility and communication under pressure.',
    ],
    tags: ['Stanford', 'Systems Thinking', 'First-Gen', 'Human Behavior'],
  },
  {
    era: 'EDUCATOR',
    period: '1991–2008',
    role: 'Classroom Teacher → Instructional Coach → Technology Specialist',
    org: 'Oakland USD / Los Angeles USD / XCEL Academy (SF Charter)',
    highlights: [
      'Piloted mixed-grade collaborative learning models across K–4 (OUSD 1991–1997).',
      'Specialized in learning-disabled and second-language-learner pedagogy; GATE program lead (LAUSD 1997–2001).',
      'Joint district/school appointment: instructional technology integration — bridging policy and classroom practice (LAUSD 2001–2003).',
      'Co-founded XCEL Academy charter high school (SF Presidio); designed 9th-grade curriculum; hired and supervised faculty (2003–2004).',
      'Core insight emerged here: safety is the active prerequisite for learning — not a passive condition.',
    ],
    tags: ['K-20 Instruction', 'Instructional Design', 'Technology Integration', 'Special Education', 'Neurodiversity'],
  },
  {
    era: 'SYSTEMS',
    period: '2008–2015',
    role: 'Executive Director, OC Global → Director of Online Learning',
    org: 'Odessa College → Our Lady of the Lake University',
    highlights: [
      'Founded OC Global — equity-driven online college-within-a-college serving 5,000+ nontraditional learners annually.',
      'Restructured 16-week curricula into accelerated 8-week and 4-week course designs — first in Texas.',
      'Led institution-wide instructional technology integration with hands-on faculty support (100+ faculty).',
      'Piloted ReadSpeaker assistive technology; executed ADA/504 audits across entire curriculum.',
      'Launched MobileU — ML-driven SMS course delivery for infrastructure-poor students.',
      'Negotiated 10+ articulation agreements. Led Achieving the Dream data-analytics platform adoption.',
      'Directed 40% enrollment growth at OLLU in two years through 5-year strategic plan.',
      'Course-quality rubric scores: 2.8 → 4.2/5 after equity-centered PD program (OLLU).',
      'Chronicle of Higher Education, CBS 7, KWES coverage. BbWorld + Texas ACE eLearning Conference presenter.',
    ],
    tags: ['Systems Architecture', 'Modularity', 'Equity', 'ADA/504', 'LMS', 'Early ML/EdTech', 'Data Analytics'],
    proof: '5,000+ learners annually | First accelerated online college in Texas | 100+ faculty',
  },
  {
    era: 'BRIDGE',
    period: '2018–2024',
    role: 'Training Design → AI/ML Engineering Transition',
    org: 'Snooze / Outlier / Centific / Independent',
    highlights: [
      'Created "Aquatech Olympics" — gamified, ML-powered training system; reduced service errors/waste 58% in 3 months (Snooze 2018–2021).',
      'Completed IBM RAG and Agentic AI, Data Science Foundations, and MasterTrack Certificate in Instructional Design.',
      'Expert-level multimodal annotation (text, image, code, conversation) for frontier model training — Outlier.ai / Centific (2025–present).',
      'RLHF/RLAIF rubric evaluation: flagging hallucinated, biased, and unsafe content at scale.',
      'Built Google Sheets dashboards for annotation throughput tracking — performance analytics infrastructure.',
      'Realized: the formulas I was writing were mathematical expressions of the stories I\'d been telling for decades.',
    ],
    tags: ['Data Science', 'ML/AI Annotation', 'RLHF/RLAIF', 'Rubric Evaluation', 'Prompt Engineering'],
  },
  {
    era: 'RESEARCH',
    period: '2023–2025',
    role: 'AI Safety Researcher / Builder — SentinelOS',
    org: 'Self-employed | The Living Constitution',
    highlights: [
      'SentinelOS: AI Safety Operating Layer across 4 domains — Epistemic, Human, Cognitive, Empirical Safety.',
      'PROACTIVE Agent: constitutional governance layer — CI/CD security agent preventing hallucinated/unverifiable code from reaching production.',
      'ConsentChain: cryptographic consent ledger with full 7-stage execution pipeline (validation → policy → revocation → exec → ledger).',
      'UICare (HUI): dual-agent behavioral intervention for neurodivergent developers during high-risk cognitive states.',
      'Clarity AI: teacher-style rubrics replacing black-box reward functions — accelerated dev cycles 109×, reduced fine-tuning costs 326×.',
      'Pioneered C-RSP (Constitutionally-Regulated Single Pass) — treating AI instructions as paired-artifact law.',
      'Designed Guardian Kernel: no action without forensic audit against the constitution.',
    ],
    tags: ['Constitutional AI', 'Agentic Safety', 'Governance', 'Intent Alignment', 'C-RSP', 'Multi-Agent'],
  },
  {
    era: 'PROOF',
    period: '2024–2025',
    role: 'Lead Engineer — PROACTIVE / ConsentChain',
    org: 'GitLab Hackathon + Independent',
    highlights: [
      '100% detection rate with 0% false positives (n=200 TruthfulQA) — controlled evaluation pipeline.',
      '212/212 tests passing. Submitted and validated in GitLab hackathon.',
      'ConsentChain: Turborepo monorepo (8 packages), Prisma schema, NextAuth/Auth0, Docker deployment.',
      'Frostbyte ETL: enterprise async Python pipeline; jsonschema Draft-07 multi-tenant metadata security.',
      '"Blind-user heuristic" — non-visual users as the default constraint during architecture design.',
    ],
    tags: ['100% Detection Rate', '212/212 Tests', 'TypeScript', 'Python', 'Prisma', 'CI/CD Security'],
    proof: '212/212 tests | 100% detection | 0% false positives',
  },
  {
    era: 'NOW',
    period: '2025–Present',
    role: 'AI Safety Fellow Candidate',
    org: 'Anthropic — July 2026 Cohort',
    highlights: [
      'Applying the "One-Man Show" modularity rigor to Anthropic\'s Constitutional AI mission.',
      'Active: SentinelOS, The Living Constitution (6 projects), ITAYN research, ConsentChain.',
      'Multimodal annotation at Outlier.ai and Centific — frontier model training, RLHF, safety flagging.',
      '"Intention is All You Need" (ITAYN): intent-preserving alignment, lossless human-to-machine translation.',
      'Commitment: 10/10. This is not a career pivot. This is convergence.',
    ],
    tags: ['Constitutional AI', 'AI Safety Research', 'Anthropic', 'Intent Alignment', 'RLHF/RLAIF'],
  },
];

const TECHNICAL_STACK = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'SQL', 'Bash'] },
  { category: 'Frameworks', items: ['Next.js', 'Turborepo', 'Prisma', 'FastAPI', 'Axolotl', 'DSPy'] },
  { category: 'AI/ML', items: ['Constitutional AI', 'RLHF/RLAIF', 'RAG / Agentic AI', 'LLM Evaluation', 'TruthfulQA', 'CoT-Self-Instruct'] },
  { category: 'Infrastructure', items: ['Docker', 'GitLab CI/CD', 'Vercel', 'Qdrant', 'Neo4j', 'Supabase'] },
  { category: 'Governance', items: ['C-RSP', 'Zero-Shot OS', 'UPOS-7-VS', 'CARE Protocol', 'SentinelOS'] },
];

const EDUCATION = [
  { credential: 'IBM RAG and Agentic AI Specialization', year: 'Oct 2025' },
  { credential: 'Building AI Agents and Agentic Workflows Specialization — IBM', year: 'Sep 2025' },
  { credential: 'Data Science Foundations Specialization — IBM & University of London', year: '2025' },
  { credential: 'MasterTrack Certificate — Instructional Design', org: 'University of Illinois, Urbana-Champaign', year: '2024' },
  { credential: 'Google UX Design Professional Certificate', year: '2023' },
  { credential: 'MS Education — Online Teaching & Learning (Exemplary Thesis: LGBTQ+ Student Support)', org: 'Cal State East Bay', year: '' },
  { credential: 'Teaching Credential', org: 'University of San Francisco', year: '' },
  { credential: 'BA Drama', org: 'Stanford University', year: '' },
  { credential: '46 semester credits toward EdD in Educational Leadership (P–12)', org: 'UT San Antonio', year: '' },
];

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="resume-title">

      <header className="mb-16">
        <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-3">C-RSP v4.0 — Module 6</div>
        <h1 id="resume-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          THE ARC
        </h1>
        <p className="text-sm font-light text-zinc-300 max-w-2xl leading-relaxed">
          35 years compressed into evidence. Stanford → Educator → Dean → AI Engineer.
          Every transition was a safety problem in disguise.
        </p>
      </header>

      {/* Timeline */}
      <section className="mb-16" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-10">
          Career Timeline
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-700" aria-hidden="true" />

          <div className="space-y-0">
            {TIMELINE.map((node, index) => (
              <div key={node.era} className="relative pl-10 pb-10">
                {/* Era dot */}
                <div
                  className="absolute left-[-4px] top-2 w-2 h-2 bg-zinc-500"
                  aria-hidden="true"
                />

                <div
                  className="border p-8"
                  style={{
                    backgroundColor: index === TIMELINE.length - 1 ? '#222228' : '#1c1c22',
                    borderColor: index === TIMELINE.length - 1 ? '#3f3f46' : '#27272a',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-4 mb-1">
                        <span className="text-xs tracking-[0.25em] text-zinc-400 font-medium">{node.era}</span>
                        <time className="text-xs text-zinc-500">{node.period}</time>
                      </div>
                      <h3 className="text-base font-light tracking-wide text-zinc-100">{node.role}</h3>
                      <div className="text-xs text-zinc-500 mt-0.5">{node.org}</div>
                    </div>
                    {node.proof && (
                      <div className="hidden md:block text-right max-w-xs">
                        <div className="text-xs text-zinc-500 leading-relaxed border-l border-zinc-700 pl-3">{node.proof}</div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-4" role="list">
                    {node.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed" role="listitem">
                        <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4" role="list" aria-label="Tags">
                    {node.tags.map((tag) => (
                      <span
                        key={tag}
                        role="listitem"
                        className="text-[10px] tracking-wider text-zinc-500 border border-zinc-700 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        className="mb-8 border p-8"
        style={{ backgroundColor: '#1c1c22', borderColor: '#27272a' }}
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">
          Education & Certifications
        </h2>
        <div className="space-y-2">
          {EDUCATION.map((item, i) => (
            <div key={i} className="flex items-start gap-4 text-xs">
              <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
              <div>
                <span className="text-zinc-300">{item.credential}</span>
                {item.org && <span className="text-zinc-600"> — {item.org}</span>}
                {item.year && <span className="text-zinc-600"> ({item.year})</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Stack */}
      <section
        className="border p-8"
        style={{ backgroundColor: '#1c1c22', borderColor: '#27272a' }}
        aria-labelledby="stack-heading"
      >
        <h2 id="stack-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-8">
          Technical Stack
        </h2>
        <div className="grid gap-6 md:grid-cols-5">
          {TECHNICAL_STACK.map((group) => (
            <div key={group.category}>
              <div className="text-xs tracking-wider text-zinc-600 mb-3">{group.category}</div>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <div key={item} className="text-xs text-zinc-400">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
