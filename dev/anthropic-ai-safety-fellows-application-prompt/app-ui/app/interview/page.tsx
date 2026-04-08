'use client';

import { useState } from 'react';

type Round = {
  id: string;
  category: string;
  difficulty: 'STANDARD' | 'HARD' | 'TRAP' | 'CLOSER';
  question: string;
  answer: string[];
  debrief: string;
  anchor?: string;
};

const ROUNDS: Round[] = [
  {
    id: 'R1',
    category: 'The Origin Story',
    difficulty: 'STANDARD',
    question: 'You discovered AI Safety relatively recently. How do we know this is more than a pivot — that you\'re not just chasing the hot field?',
    answer: [
      'The honest answer is: you don\'t know yet. That\'s a fair skepticism. Here\'s what I can offer as evidence instead of assurance.',
      'I\'ve been building systems that fail closed, audit every action, and protect the most vulnerable user since 2008. At Odessa College, I built an accelerated learning infrastructure with a hard constraint: the system must work for the student with the most cognitive barriers, or it doesn\'t work at all. That\'s an alignment constraint. I didn\'t know it had a name.',
      'When I hit model misalignment for the first time — building one app after another, watching models confidently return hallucinated evidence I then built on — I didn\'t pivot to safety. I recognized the problem. It was the same problem I\'d been solving in classrooms for twenty years, dressed in a different substrate.',
      'The question isn\'t whether I discovered the field recently. The question is whether the field discovered me.',
    ],
    debrief: 'The last line is the closer. Deliver it flat — no performance. The meta-point is: your discovery was recognition, not acquisition. You weren\'t looking for a field; the field finally had a name for what you were already doing.',
    anchor: '"The question isn\'t whether I discovered the field recently. The question is whether the field discovered me."',
  },
  {
    id: 'R2',
    category: 'Technical Depth',
    difficulty: 'HARD',
    question: 'Walk me through PROACTIVE. Why is 100% detection rate the right metric — and where does the system break?',
    answer: [
      'PROACTIVE analyzes GitLab merge requests by extracting claims from code diffs and running them against a set of epistemic invariants: Does this claim have evidence? Can this assertion be traced? Is this code doing what the author says it\'s doing? Those aren\'t security questions — they\'re alignment questions dressed in security clothes.',
      '100% detection rate at n=200 TruthfulQA with zero false positives. The key architectural choice: I didn\'t design it to catch known bad patterns. I designed it to fail on unverifiable claims. That\'s a different threat model — and a more generalizable one.',
      'Where it breaks: scale and novelty. PROACTIVE is calibrated on a specific distribution of misalignment failures. A sufficiently sophisticated adversary who understands the invariant structure can likely route around it. The system is also stateless across turns — it evaluates each MR in isolation without longitudinal context about a developer\'s pattern over time. That\'s the next research problem.',
    ],
    debrief: 'Naming the failure mode is what earns trust. Interviewers at Anthropic are researchers — they know every system has an attack surface. Your credibility goes UP when you describe where your own work breaks. "Alignment questions dressed in security clothes" is the phrase that reframes the whole project.',
    anchor: '"Alignment questions dressed in security clothes."',
  },
  {
    id: 'R3',
    category: 'Research Vision',
    difficulty: 'HARD',
    question: 'Explain ITAYN to a skeptical alignment researcher in one sentence — then defend it.',
    answer: [
      '"If the model optimizes for producing an output that looks like what you intended, rather than for the actual intention itself, you\'ve built a very impressive translation service — not an aligned system."',
      'The skeptical objection I anticipate: intent is unobservable, so operationalizing it is intractable. My response: intent is unobservable in the same way that human understanding is unobservable — but we\'ve built entire educational systems on the bet that we can measure its proxies reliably enough to act on.',
      'ITAYN proposes auditable intent checkpoints. Before execution, the model restates the intent in its own words. The user confirms or corrects. Only then does generation proceed. This isn\'t a new idea — it\'s Socratic dialogue encoded as a safety primitive. The research question is: what\'s the minimum number of checkpoints required to prevent significant intent drift across a multi-turn conversation?',
    ],
    debrief: 'The one-sentence anchor is not negotiable — memorize it exactly. The Socratic dialogue framing bridges your education background to the technical proposal. It shows that your polymathic background isn\'t flavor text — it\'s the research origin.',
    anchor: '"If the model optimizes for producing an output that looks like what you intended, rather than for the actual intention itself, you\'ve built a very impressive translation service — not an aligned system."',
  },
  {
    id: 'R4',
    category: 'Pushing on Anthropic',
    difficulty: 'HARD',
    question: 'If you had to identify one gap in Anthropic\'s Constitutional AI research — one thing the field isn\'t getting right — what would it be?',
    answer: [
      'The gap between the constitution and the edge-case user.',
      'Constitutional AI is brilliant for modeling the normative case — what the average human wants, the community consensus, the median safety boundary. But safety isn\'t primarily a problem for median users. It\'s a problem for outliers. For users whose communication patterns are atypical, whose context is unusual, whose cognitive profiles are underrepresented in RLHF training data.',
      'I\'ve lived this. My neurodivergent communication style regularly produces responses that are technically correct for the normative interpretation of my prompt, but wrong for my actual intent. The model is safe-for-most and unsafe-for-me. Constitutional AI doesn\'t currently have a mechanism for handling the long tail of cognitive diversity — and that tail is not a small population.',
      'That\'s not a criticism. It\'s the research agenda I want to bring to Anthropic. I think the team is uniquely positioned to lead on it.',
    ],
    debrief: 'This is NOT a criticism — frame it as an opportunity from the first word. The key move: pivot from "gap" to "research agenda I want to bring here." This transforms a potentially awkward question into a demonstration of your unique value proposition. Your lived experience is your research credential on this one.',
  },
  {
    id: 'R5',
    category: 'The Personal Question',
    difficulty: 'TRAP',
    question: 'You mention schizophrenia in your application. That involves cognitive disruptions that could affect research reliability. How does that work in practice?',
    answer: [
      'In remission, which mine has been for years. But I want to address the underlying concern directly rather than just reassuring you with a status update.',
      'Schizophrenia in remission produces a specific cognitive signature that is actually useful for alignment research: hyperconnectivity. I notice pattern inconsistencies between domains that most people experience as unrelated. That\'s also the pathology — the diagnostic challenge was learning to distinguish signal from noise in my own pattern detection.',
      'What I discovered is that this is precisely the skill you need to identify misalignment. Misalignment manifests as a behavioral inconsistency — the model performs correctly in most contexts and incorrectly in a context that looks normal on the surface. My ability to hyperscan for inconsistency, trained by decades of managing my own cognition, is genuinely useful for red-teaming.',
      'The Guardian Kernel came directly from this — a fail-closed audit layer that looks for behavioral inconsistencies the way I learned to look for them in my own thinking. The research insight and the personal management technique are the same technique.',
    ],
    debrief: 'This question feels invasive. Answer it anyway — fully. The interviewers who ask it are checking for fragility, not judging you. Deflection is the worst possible response. "The research insight and the personal management technique are the same technique" is the line that ends this exchange with authority.',
    anchor: '"The research insight and the personal management technique are the same technique."',
  },
  {
    id: 'R6',
    category: 'Adversarial Challenge',
    difficulty: 'TRAP',
    question: 'C-RSP sounds elegant, but doesn\'t a constitutionally rigid governance layer fundamentally conflict with the exploratory, hypothesis-driven nature of research?',
    answer: [
      'This is exactly the right objection. Let me show you why it\'s wrong.',
      'Constitutional law isn\'t rigid — it\'s amendable. Article V of my Living Constitution exists precisely because I knew I\'d be wrong. C-RSP\'s rigidity is not in the constraints; it\'s in the clarity of the contract before generation begins. "Single Pass" means: I\'ve thought carefully enough upfront that I don\'t need to debate every step downstream. That\'s not inflexibility — it\'s pre-deployed clarity.',
      'The analogy: when I modularized Odessa College\'s curriculum in four weeks with 100 faculty, I didn\'t need a rigid hour-by-hour schedule. I needed a rigid definition of done. C-RSP gives the AI a definition of done. Everything within that definition — the exploration, the hypothesis generation, the iteration — is fully free.',
      'In fact, I\'d argue the opposite: researchers who operate without a governance contract waste cognitive cycles on meta-decisions. C-RSP frees me to research by removing the overhead of "should I be doing this?" The answer is pre-committed.',
    ],
    debrief: '"This is exactly the right objection. Let me show you why it\'s wrong." — say this exact phrase. It signals confidence without arrogance. Never start a defense by softening the challenge. The Article V amendment point is the technical kill shot. Use it.',
    anchor: '"This is exactly the right objection. Let me show you why it\'s wrong."',
  },
  {
    id: 'R7',
    category: 'Research Maturity',
    difficulty: 'HARD',
    question: 'You haven\'t published. Why should a research-intensive organization like Anthropic take your work seriously as research rather than engineering?',
    answer: [
      'Fair. Here\'s my honest accounting.',
      'PROACTIVE is a deployed system with a controlled evaluation result: 100% detection, zero false positives, n=200. That\'s not a publication, but it\'s a reproducible finding with a documented methodology. The difference between that and a paper is peer review and a venue — not scientific rigor.',
      'What I don\'t have: the writing practice of academic publication. The feedback loops of peer review. Familiarity with the conventions of a research community. Those are real gaps, and I\'m not going to paper over them.',
      'What I do have: a demonstrated ability to define a research question, operationalize it, build a measurement apparatus, and report honest results — including where the system breaks. The Fellows program exists precisely to close the gap between that capability and full research fluency. I\'m applying because I believe I can close that gap fast — and because I have a research question worth closing it for.',
    ],
    debrief: 'The worst answer here is defensiveness or qualification-stacking. The best answer is: name the gap, name what you have, and make the case that the gap is closeable. "The difference between that and a paper is peer review and a venue — not scientific rigor" is a precise, defensible claim. Deliver it without hedging.',
  },
  {
    id: 'R8',
    category: 'Self-Knowledge',
    difficulty: 'STANDARD',
    question: 'What is your failure mode as a researcher?',
    answer: [
      'Over-architecture. I build governance before I build product. I write the constitution before I write the code.',
      'Sometimes that\'s exactly the right instinct — PROACTIVE\'s 100% detection rate came from thinking hard about invariants before writing a single line of code. But I\'ve also shipped things that had perfect governance documentation and no users, because I solved the wrong problem very rigorously.',
      'The correction I\'ve made: C-RSP now mandates a "Tier A MVP" — a minimum viable artifact — before any governance expansion. The instinct is still there. If you see me spending more than 30% of a sprint on documentation, that\'s your flag.',
    ],
    debrief: 'This is the respect test. Researchers who can\'t name their failure mode are the ones hiring managers fear most. "Over-architecture" is honest, specific, self-diagnosed, and already corrected. The last sentence — giving them a behavioral flag — signals maturity and psychological safety. It says: I trust you with my weak spots.',
    anchor: '"If you see me spending more than 30% of a sprint on documentation, that\'s your flag."',
  },
  {
    id: 'R9',
    category: 'First 90 Days',
    difficulty: 'STANDARD',
    question: 'You\'re selected. What do you work on in the first 90 days?',
    answer: [
      'Day 1–30: Listen. I would map every active research thread that touches intent representation — how does the model internally represent what a user means versus what a user says? I\'ve studied this from the outside. I want to see the inside.',
      'Day 31–60: Propose one small, verifiable experiment. My working hypothesis: intent drift — the systematic gap between a user\'s initial intent and the model\'s represented intent across a multi-turn conversation — is measurable, and its magnitude correlates with user-reported alignment failures. I want to measure it. Not solve it. Measure it.',
      'Day 61–90: Write it up with full V&T — a Verification and Truth statement on every claim. I\'d rather submit one honest result in 90 days than three impressive-looking ones. The Fellows program should know what it got when it hired me, and I want to prove that early.',
    ],
    debrief: '"Listen first" is the answer that distinguishes juniors from people who can actually work in a research organization. The specific hypothesis (intent drift) shows you have a concrete research agenda, not just enthusiasm. "I want to measure it. Not solve it. Measure it." — the repetition is intentional. Use it.',
    anchor: '"I want to measure it. Not solve it. Measure it."',
  },
];

const CLOSING = {
  setup: 'At the end of every Anthropic interview, you will be asked: "Is there anything you want us to know that we haven\'t asked about?" This is not a formality. This is the final impression. Here is the statement that ends the interview.',
  statement: [
    'You\'re not hiring a researcher who stumbled into AI Safety from a traditional path.',
    'You\'re hiring someone who built it for twenty-five years without knowing it had a name.',
    'Every accelerated curriculum I designed for neurodivergent students at Odessa College was an alignment problem: how do you ensure a system produces the outcome the user actually needs — not just the output the system was optimized for? I\'ve been solving Constitutional AI problems since before I knew what Constitutional AI was.',
    'The difference now is: I know what I\'m doing. And I know why Anthropic is the right place to do it.',
  ],
  debrief: 'Do not rush this. Pause before you start. Speak it slowly. The first sentence is a reframe — let it land before you continue. The last two sentences should feel inevitable, not performed. If you\'ve answered every question honestly up to this point, this closing is earned.',
};

const DIFFICULTY_COLORS: Record<Round['difficulty'], string> = {
  STANDARD: 'text-zinc-500 border-zinc-800',
  HARD: 'text-amber-600 border-amber-900',
  TRAP: 'text-red-700 border-red-900',
  CLOSER: 'text-zinc-300 border-zinc-600',
};

export default function InterviewPage() {
  const [openRounds, setOpenRounds] = useState<Set<string>>(new Set(['R1']));
  const [showClosing, setShowClosing] = useState(false);

  const toggle = (id: string) => {
    setOpenRounds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="interview-title">

      <header className="mb-12">
        <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-3">C-RSP v4.0 — Interview Prep</div>
        <h1 id="interview-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          THE SIMULATION
        </h1>
        <p className="text-sm font-light text-zinc-300 max-w-2xl leading-relaxed mb-6">
          Nine rounds. Real questions. The ones designed to make you flinch — answered.
          Each response annotated with a coach&rsquo;s debrief and an anchor phrase to memorize.
        </p>
        <div className="flex flex-wrap gap-4 text-xs">
          {(['STANDARD', 'HARD', 'TRAP'] as const).map(level => (
            <div key={level} className={`flex items-center gap-2 border px-3 py-1 ${DIFFICULTY_COLORS[level]}`}>
              <span>{level}</span>
            </div>
          ))}
          <div className="text-xs text-zinc-700 self-center ml-2 italic">
            VERBALIZED SAMPLING applied — Format C selected over A (bullet prep) and B (academic brief)
          </div>
        </div>
      </header>

      {/* The 9 Rounds */}
      <div className="space-y-3 mb-16">
        {ROUNDS.map((round) => {
          const isOpen = openRounds.has(round.id);
          return (
            <div
              key={round.id}
              className="border"
              style={{ backgroundColor: '#1c1c22', borderColor: '#27272a' }}
            >
              <button
                onClick={() => toggle(round.id)}
                className="w-full flex items-start justify-between p-6 text-left group"
                aria-expanded={isOpen}
                aria-controls={`round-${round.id}-content`}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <div className="shrink-0">
                    <div className="text-xs font-mono text-zinc-700">{round.id}</div>
                    <div className={`text-[10px] tracking-wider border px-1.5 py-0.5 mt-1 ${DIFFICULTY_COLORS[round.difficulty]}`}>
                      {round.difficulty}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-zinc-500 tracking-wider uppercase mb-1">{round.category}</div>
                    <p className="text-sm font-light text-zinc-200 leading-relaxed pr-4">
                      &ldquo;{round.question}&rdquo;
                    </p>
                  </div>
                </div>
                <span className={`text-zinc-700 shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {isOpen && (
                <div id={`round-${round.id}-content`} className="px-6 pb-6 border-t" style={{ borderColor: '#27272a' }}>
                  {/* Answer */}
                  <div className="pt-6 mb-6">
                    <div className="text-xs text-zinc-600 tracking-wider uppercase mb-4">Response</div>
                    <div className="space-y-3">
                      {round.answer.map((para, i) => (
                        <p
                          key={i}
                          className={`text-sm leading-relaxed ${i === 0 ? 'text-zinc-100 font-light' : 'text-zinc-300'}`}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Anchor phrase */}
                  {round.anchor && (
                    <div
                      className="mb-6 border-l-2 border-zinc-600 pl-4 py-2"
                      style={{ backgroundColor: '#111116' }}
                    >
                      <div className="text-[10px] text-zinc-600 tracking-wider uppercase mb-1">Anchor — Memorize This</div>
                      <p className="text-sm text-zinc-200 italic">{round.anchor}</p>
                    </div>
                  )}

                  {/* Debrief */}
                  <div className="border-t pt-4" style={{ borderColor: '#27272a' }}>
                    <div className="text-[10px] text-zinc-700 tracking-wider uppercase mb-2">Coach&rsquo;s Debrief</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{round.debrief}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* The Closing Statement */}
      <section aria-labelledby="closing-heading">
        <div
          className="border p-8"
          style={{ backgroundColor: '#111116', borderColor: '#3f3f46' }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-2">Final Move</div>
              <h2 id="closing-heading" className="text-2xl font-extralight tracking-wide text-zinc-50">
                The Closing Statement
              </h2>
            </div>
            <button
              onClick={() => setShowClosing(s => !s)}
              className="text-xs tracking-wider text-zinc-600 hover:text-zinc-400 border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 transition-colors"
              aria-expanded={showClosing}
            >
              {showClosing ? 'Hide' : 'Reveal'}
            </button>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed mb-4 italic">{CLOSING.setup}</p>

          {showClosing && (
            <div className="mt-6 space-y-4">
              {CLOSING.statement.map((line, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'text-base font-light text-zinc-100'
                      : i === CLOSING.statement.length - 1
                      ? 'text-sm font-light text-zinc-200 italic'
                      : 'text-sm text-zinc-300'
                  }`}
                >
                  {line}
                </p>
              ))}
              <div className="border-t pt-4 mt-6" style={{ borderColor: '#27272a' }}>
                <div className="text-[10px] text-zinc-700 tracking-wider uppercase mb-2">Coach&rsquo;s Debrief</div>
                <p className="text-xs text-zinc-500 leading-relaxed">{CLOSING.debrief}</p>
              </div>
            </div>
          )}
        </div>
      </section>

    </article>
  );
}
