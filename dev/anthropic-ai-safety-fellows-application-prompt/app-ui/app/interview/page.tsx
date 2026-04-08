'use client';

import { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// EVIDENCE BASE
// ─────────────────────────────────────────────────────────────────────────────

type Citation = {
  id: string;
  authors: string;
  year: string;
  title: string;
  journal: string;
  finding: string;
  url?: string;
};

const CITATIONS: Citation[] = [
  {
    id: 'C1',
    authors: 'Roediger, H.L., & Karpicke, J.D.',
    year: '2006',
    title: 'Test-enhanced learning: Taking memory tests improves long-term retention.',
    journal: 'Psychological Science, 17(3), 249–255.',
    finding: 'Students who practiced retrieval (testing themselves) retained ~50% more information after one week than students who re-read the same material. Most interview prep is review. This format forces generation.',
  },
  {
    id: 'C2',
    authors: 'Ericsson, K.A., Krampe, R.T., & Tesch-Römer, C.',
    year: '1993',
    title: 'The role of deliberate practice in the acquisition of expert performance.',
    journal: 'Psychological Review, 100(3), 363–406.',
    finding: 'Expert performance requires immediate, specific feedback on errors — not just time on task. Repetition without feedback produces automatization, not improvement. The coach\'s debrief annotation operationalizes this.',
  },
  {
    id: 'C3',
    authors: 'Miller, G.A.',
    year: '1956',
    title: 'The magical number seven, plus or minus two: Some limits on our capacity for processing information.',
    journal: 'Psychological Review, 63(2), 81–97.',
    finding: 'Working memory holds 7±2 items under normal conditions. Interview stress compresses this to 3–4. Anchor phrases encode full arguments as single retrievable units — exploiting chunking to beat working memory limits.',
  },
  {
    id: 'C4',
    authors: 'Sweller, J.',
    year: '1988',
    title: 'Cognitive load during problem solving: Effects on learning.',
    journal: 'Cognitive Science, 12(2), 257–285.',
    finding: 'Extraneous cognitive load degrades performance under pressure. Pre-committed anchor phrases reduce in-flight cognitive load, freeing capacity for the parts of the answer that require real-time reasoning.',
  },
  {
    id: 'C5',
    authors: 'Maurer, T.J., Solamon, J.M., & Troxtel, D.D.',
    year: '1998',
    title: 'Relationship of coaching with performance in situational employment interviews.',
    journal: 'Journal of Applied Psychology, 83(1), 128–136.',
    finding: 'Coached interviewees significantly outperformed uncoached candidates on structured situational interviews. Effect held even when controlling for cognitive ability and interview experience.',
  },
  {
    id: 'C6',
    authors: 'Huffcutt, A.I., Conway, J.M., Roth, P.L., & Stone, N.J.',
    year: '2001',
    title: 'Identification and meta-analytic assessment of psychological constructs measured in employment interviews.',
    journal: 'Journal of Applied Psychology, 86(5), 897–913.',
    finding: 'Structured behavioral interviews primarily measure: job knowledge, applied social skills, and conscientiousness. Questions designed to probe these constructs (not generic "tell me about yourself") predict performance most reliably.',
  },
  {
    id: 'C7',
    authors: 'Foa, E.B., & Kozak, M.J.',
    year: '1986',
    title: 'Emotional processing of fear: Exposure to corrective information.',
    journal: 'Psychological Bulletin, 99(1), 20–35.',
    finding: 'Anxiety about a stimulus is reduced most effectively by controlled exposure — not avoidance. TRAP questions are labeled and surfaced in a safe practice context precisely to eliminate the surprise response in the live interview.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ROUNDS
// ─────────────────────────────────────────────────────────────────────────────

type Round = {
  id: string;
  category: string;
  difficulty: 'STANDARD' | 'HARD' | 'TRAP' | 'CLOSER';
  question: string;
  answer: string[];
  debrief: string;
  anchor?: string;
  evidenceNote?: string;
};

const ROUNDS: Round[] = [
  // ── ORIGINAL 9 ────────────────────────────────────────────────────────────
  {
    id: 'R01',
    category: 'The Origin Story',
    difficulty: 'STANDARD',
    question: 'You discovered AI Safety relatively recently. How do we know this is more than a pivot — that you\'re not just chasing the hot field?',
    answer: [
      'The honest answer is: you don\'t know yet. That\'s a fair skepticism. Here\'s what I can offer as evidence instead of assurance.',
      'I\'ve been building systems that fail closed, audit every action, and protect the most vulnerable user since 2008. At Odessa College, I built an accelerated learning infrastructure with a hard constraint: the system must work for the student with the most cognitive barriers, or it doesn\'t work at all. That\'s an alignment constraint. I didn\'t know it had a name.',
      'When I hit model misalignment for the first time — building one app after another, watching models confidently return hallucinated evidence I then built on — I didn\'t pivot to safety. I recognized the problem. It was the same problem I\'d been solving in classrooms for twenty years, dressed in a different substrate.',
      'The question isn\'t whether I discovered the field recently. The question is whether the field discovered me.',
    ],
    debrief: 'The last line is the closer. Deliver it flat — no performance. The meta-point: your discovery was recognition, not acquisition. You weren\'t looking for a field; the field finally had a name for what you were already doing.',
    anchor: '"The question isn\'t whether I discovered the field recently. The question is whether the field discovered me."',
    evidenceNote: 'Behavioral interview structure: this is a "behavioral consistency" question (Huffcutt et al., 2001). Interviewers are looking for past behavior as the best predictor of future behavior. Lead with past evidence, not future intent.',
  },
  {
    id: 'R02',
    category: 'Technical Depth',
    difficulty: 'HARD',
    question: 'Walk me through PROACTIVE. Why is 100% detection rate the right metric — and where does the system break?',
    answer: [
      'PROACTIVE analyzes GitLab merge requests by extracting claims from code diffs and running them against epistemic invariants: Does this claim have evidence? Can this assertion be traced? Is this code doing what the author says it\'s doing? Those aren\'t security questions — they\'re alignment questions dressed in security clothes.',
      '100% detection rate at n=200 TruthfulQA with zero false positives. The key architectural choice: I didn\'t design it to catch known bad patterns. I designed it to fail on unverifiable claims. That\'s a different threat model — and a more generalizable one.',
      'Where it breaks: scale and novelty. PROACTIVE is calibrated on a specific distribution of misalignment failures. A sufficiently sophisticated adversary who understands the invariant structure can route around it. The system is also stateless across turns — it evaluates each merge request in isolation, without longitudinal context about a developer\'s pattern over time. That\'s the next research problem.',
    ],
    debrief: 'Naming the failure mode is what earns trust. Researchers at Anthropic know every system has an attack surface. Your credibility goes up when you describe where your work breaks. "Alignment questions dressed in security clothes" reframes the whole project.',
    anchor: '"Alignment questions dressed in security clothes."',
  },
  {
    id: 'R03',
    category: 'Research Vision',
    difficulty: 'HARD',
    question: 'Explain ITAYN to a skeptical alignment researcher in one sentence — then defend it.',
    answer: [
      '"If the model optimizes for producing an output that looks like what you intended, rather than for the actual intention itself, you\'ve built a very impressive translation service — not an aligned system."',
      'The skeptical objection I anticipate: intent is unobservable, so operationalizing it is intractable. My response: intent is unobservable in the same way that human understanding is unobservable — but we\'ve built entire educational systems on the bet that we can measure its proxies reliably enough to act on.',
      'ITAYN proposes auditable intent checkpoints. Before execution, the model restates the intent in its own words. The user confirms or corrects. Only then does generation proceed. This is Socratic dialogue encoded as a safety primitive. The research question is: what\'s the minimum number of checkpoints required to prevent significant intent drift across a multi-turn conversation?',
    ],
    debrief: 'The one-sentence anchor is not negotiable — memorize it exactly. The Socratic dialogue framing bridges your education background to the technical proposal. Your polymathic background isn\'t flavor text — it\'s the research origin.',
    anchor: '"If the model optimizes for producing an output that looks like what you intended — you\'ve built a very impressive translation service, not an aligned system."',
  },
  {
    id: 'R04',
    category: 'Pushing on Anthropic',
    difficulty: 'HARD',
    question: 'If you had to identify one gap in Anthropic\'s Constitutional AI research — one thing the field isn\'t getting right — what would it be?',
    answer: [
      'The gap between the constitution and the edge-case user.',
      'Constitutional AI is brilliant for modeling the normative case — the average human, the community consensus, the median safety boundary. But safety isn\'t primarily a problem for median users. It\'s a problem for outliers — users whose communication patterns are atypical, whose cognitive profiles are underrepresented in RLHF training data.',
      'I\'ve lived this. My neurodivergent communication style regularly produces responses that are technically correct for the normative interpretation of my prompt, but wrong for my actual intent. The model is safe-for-most and unsafe-for-me. Constitutional AI doesn\'t currently have a mechanism for the long tail of cognitive diversity — and that tail is not a small population.',
      'That\'s not a criticism. It\'s the research agenda I want to bring to Anthropic. I think this team is uniquely positioned to lead on it.',
    ],
    debrief: 'This is NOT a criticism — frame it as an opportunity from the first word. The key move: pivot immediately from "gap" to "research agenda I want to bring here." Your lived experience is your research credential on this one.',
  },
  {
    id: 'R05',
    category: 'The Personal Question',
    difficulty: 'TRAP',
    question: 'You mention schizophrenia in your application. That involves cognitive disruptions that could affect research reliability. How does that work in practice?',
    answer: [
      'In remission — which mine has been for years. But I want to address the underlying concern directly rather than just reassuring you with a status update.',
      'Schizophrenia in remission produces a specific cognitive signature that is genuinely useful for alignment research: hyperconnectivity. I notice pattern inconsistencies between domains that most people experience as unrelated. That\'s also the pathology — the diagnostic challenge was learning to distinguish signal from noise in my own pattern detection.',
      'What I discovered is that this is precisely the skill you need to identify misalignment. Misalignment manifests as a behavioral inconsistency — the model performs correctly in most contexts and incorrectly in a context that looks normal on the surface. My ability to hyperscan for inconsistency, trained by decades of managing my own cognition, is genuinely useful for red-teaming.',
      'The Guardian Kernel came directly from this — a fail-closed audit layer that looks for behavioral inconsistencies the way I learned to look for them in my own thinking. The research insight and the personal management technique are the same technique.',
    ],
    debrief: 'This question feels invasive. Answer it anyway — fully. The interviewers who ask it are checking for fragility, not judging you. Deflection is the worst possible response. The last sentence ends this exchange with authority.',
    anchor: '"The research insight and the personal management technique are the same technique."',
    evidenceNote: 'Note: asking about mental health status is legally protected territory in the US and UK. However, you disclosed it voluntarily in your application — which means interviewers may reasonably follow up. Answering directly, without defensiveness, is the most strategically and ethically sound approach.',
  },
  {
    id: 'R06',
    category: 'Adversarial Challenge',
    difficulty: 'TRAP',
    question: 'C-RSP sounds elegant, but doesn\'t a constitutionally rigid governance layer fundamentally conflict with the exploratory, hypothesis-driven nature of research?',
    answer: [
      'This is exactly the right objection. Let me show you why it\'s wrong.',
      'Constitutional law isn\'t rigid — it\'s amendable. Article V of my Living Constitution exists precisely because I knew I\'d be wrong. C-RSP\'s rigidity is not in the constraints; it\'s in the clarity of the contract before generation begins. "Single Pass" means: I\'ve thought carefully enough upfront that I don\'t need to debate every step downstream. That\'s not inflexibility — it\'s pre-deployed clarity.',
      'The analogy: when I modularized Odessa College\'s curriculum in four weeks with 100 faculty, I didn\'t need a rigid hour-by-hour schedule. I needed a rigid definition of done. C-RSP gives the AI a definition of done. Everything within that definition — the exploration, the hypothesis generation, the iteration — is fully free.',
      'Researchers who operate without a governance contract waste cognitive cycles on meta-decisions. C-RSP frees me to research by removing the overhead of "should I be doing this?" The answer is pre-committed.',
    ],
    debrief: '"This is exactly the right objection. Let me show you why it\'s wrong." — say this exact phrase. It signals confidence without arrogance. Never start a defense by softening the challenge. The Article V amendment point is the technical kill shot.',
    anchor: '"This is exactly the right objection. Let me show you why it\'s wrong."',
  },
  {
    id: 'R07',
    category: 'Research Maturity',
    difficulty: 'HARD',
    question: 'You haven\'t published. Why should a research-intensive organization like Anthropic take your work seriously as research rather than just engineering?',
    answer: [
      'Fair. Here\'s my honest accounting.',
      'PROACTIVE is a deployed system with a controlled evaluation result: 100% detection, zero false positives, n=200. That\'s not a publication, but it\'s a reproducible finding with a documented methodology. The difference between that and a paper is peer review and a venue — not scientific rigor.',
      'What I don\'t have: the writing practice of academic publication. The feedback loops of peer review. Familiarity with the conventions of the research community. Those are real gaps, and I\'m not going to paper over them.',
      'What I do have: a demonstrated ability to define a research question, operationalize it, build a measurement apparatus, and report honest results — including where the system breaks. The Fellows program exists precisely to close the gap between that capability and full research fluency. I\'m applying because I can close that gap fast — and because I have a question worth closing it for.',
    ],
    debrief: 'The worst answer here is defensiveness or credential-stacking. Name the gap, name what you have, make the case the gap is closeable. "The difference between that and a paper is peer review and a venue — not scientific rigor" is precise and defensible. Deliver it without hedging.',
    anchor: '"The difference between that and a paper is peer review and a venue — not scientific rigor."',
  },
  {
    id: 'R08',
    category: 'Self-Knowledge',
    difficulty: 'STANDARD',
    question: 'What is your failure mode as a researcher?',
    answer: [
      'Over-architecture. I build governance before I build product. I write the constitution before I write the code.',
      'Sometimes that\'s exactly the right instinct — PROACTIVE\'s 100% detection rate came from thinking hard about invariants before writing a single line of code. But I\'ve also shipped things that had perfect governance documentation and no users, because I solved the wrong problem very rigorously.',
      'The correction I\'ve made: C-RSP now mandates a "Tier A MVP" — a minimum viable artifact — before any governance expansion. The instinct is still there. If you see me spending more than 30% of a sprint on documentation, that\'s your flag.',
    ],
    debrief: 'This is the respect test. Researchers who can\'t name their failure mode are the ones hiring managers fear most. "Over-architecture" is honest, specific, self-diagnosed, and already corrected. The last sentence — giving them a behavioral flag — signals psychological safety.',
    anchor: '"If you see me spending more than 30% of a sprint on documentation, that\'s your flag."',
  },
  {
    id: 'R09',
    category: 'First 90 Days',
    difficulty: 'STANDARD',
    question: 'You\'re selected. What do you work on in the first 90 days?',
    answer: [
      'Day 1–30: Listen. I would map every active research thread that touches intent representation — how does the model internally represent what a user means versus what a user says? I\'ve studied this from the outside. I want to see the inside.',
      'Day 31–60: Propose one small, verifiable experiment. My working hypothesis: intent drift — the systematic gap between a user\'s initial intent and the model\'s represented intent across a multi-turn conversation — is measurable, and its magnitude correlates with user-reported alignment failures. I want to measure it. Not solve it. Measure it.',
      'Day 61–90: Write it up with a Verification and Truth statement on every claim. I\'d rather submit one honest result in 90 days than three impressive-looking ones.',
    ],
    debrief: '"Listen first" is the answer that distinguishes juniors from people who can work in a research organization. The specific hypothesis (intent drift) shows you have a concrete research agenda, not just enthusiasm. "I want to measure it. Not solve it. Measure it." — the repetition is intentional.',
    anchor: '"I want to measure it. Not solve it. Measure it."',
  },

  // ── NEW 9 ──────────────────────────────────────────────────────────────────
  {
    id: 'R10',
    category: 'Collaboration',
    difficulty: 'STANDARD',
    question: 'Research is collaborative. You\'ve largely worked alone. How do you handle giving and receiving critical feedback on your own work?',
    answer: [
      'I\'ve worked alone because I had to — solo builder, no team, no peer review. That\'s not an advantage, and I know it.',
      'Here\'s what I\'ve done about it: I\'ve built adversarial feedback structures into my workflow. C-RSP requires me to state what I\'m building, how I know it\'s working, and what would prove it wrong — before I touch a line of code. When I don\'t have a collaborator to push back, the governance document is the collaborator.',
      'What I don\'t yet have: the experience of watching someone tear apart work I\'m attached to and updating gracefully in public. I\'ve processed critique privately. I\'ve never workshopped research in front of a room. The Fellows program is partly for that, and I know it.',
      'What I do have: a diagnostic instinct for when I\'m being defensive versus when I have a legitimate objection. That instinct came from twenty years of teaching — you can\'t teach students to accept feedback until you model accepting it yourself.',
    ],
    debrief: 'Name what you don\'t have before they do. "The governance document is the collaborator" is the key line — it shows you\'ve compensated structurally, not just attitudinally. Ending with the teaching analogy grounds the claim in lived evidence.',
    anchor: '"When I don\'t have a collaborator to push back, the governance document is the collaborator."',
    evidenceNote: 'Constructs measured in research interviews include collaboration/teamwork as a primary behavioral competency (Huffcutt et al., 2001). Expect this question in every panel. It\'s not a check-box — it\'s a predictor of research productivity.',
  },
  {
    id: 'R11',
    category: 'Technical Failure',
    difficulty: 'HARD',
    question: 'Walk me through your most significant technical failure. I mean a real one — not a success story dressed up as a learning moment.',
    answer: [
      'I built an intent-translation system for ConsentChain that was architecturally perfect and completely unverifiable. The system parsed user consent language and mapped it to cryptographic commitments. The logic was elegant. The problem: I had no ground truth. I was evaluating correctness against my own interpretation of what the user intended — which is the exact problem I claimed the system was solving.',
      'I shipped it anyway, with a footnote in the docs saying "ground truth methodology pending." That\'s a research deception. It\'s not a lie — but it\'s a claim dressed as a finding, and I knew the difference when I wrote it.',
      'What I changed: every C-RSP contract now requires a V&T statement before delivery. Every claim must have an explicit "Verified Against" line. If I can\'t fill it in, the claim doesn\'t ship. The ConsentChain intent-parser is currently listed as "methodology pending" in the public docs. It will stay there until I have real ground truth.',
    ],
    debrief: 'Most candidates fail this question by giving a polished learning story. The real question is: can you identify when you misled yourself or others — and did you fix it structurally? "Architecturally perfect and completely unverifiable" — say that phrase verbatim. It signals epistemic precision.',
    anchor: '"Architecturally perfect and completely unverifiable."',
  },
  {
    id: 'R12',
    category: 'Generalization Problem',
    difficulty: 'HARD',
    question: 'You\'re designing safety systems for neurodivergent users. Your primary data source is your own lived experience. How do you avoid building for yourself rather than for a user population?',
    answer: [
      'This is the right scientific objection. n=1 is not a study.',
      'Here\'s how I\'ve handled it so far, and where I\'m still working: I\'ve designed ITAYN\'s intent-checkpoint architecture to be cognitively neutral — the model restates the intent, you confirm or correct, regardless of whether your communication is typical or not. The mechanism doesn\'t assume a neurotypical user. But I haven\'t validated it with users who have different cognitive profiles than mine.',
      'The research path I need: participatory design with neurodivergent users across different profiles — ADHD, dyslexia, dyscalculia, non-autistic schizophrenia — to test whether the checkpoint mechanism generalizes, or whether it\'s tuned to my specific failure modes.',
      'The honest answer: I am a motivated starting point for the research question. I am not the validation dataset. I know the difference, and closing that gap is part of why I\'m here.',
    ],
    debrief: '"I am a motivated starting point for the research question. I am not the validation dataset." — these two sentences are the answer. Hold your lived experience as valuable evidence while making its epistemic limitations explicit. This is scientific maturity on display.',
    anchor: '"I am a motivated starting point for the research question. I am not the validation dataset."',
  },
  {
    id: 'R13',
    category: 'Adaptability',
    difficulty: 'STANDARD',
    question: 'What if we assign you to a project that has nothing to do with your stated research interests? What happens?',
    answer: [
      'I do the work.',
      'The longer answer: I think about research assignment the way I think about curriculum. In my Odessa College days, faculty pushed back on course redesign by saying "this isn\'t my area." My response was always: the area is learning. The subject is a vehicle.',
      'The safety invariants I care about — epistemic reliability, intent preservation, fail-closed execution — aren\'t domain-specific. They apply to interpretability. They apply to red-teaming. They apply to model evaluation. The framework travels.',
      'One question before I start any new assignment: what does a good result look like, and how would we know we have it? If we can answer that together, I can do the work.',
    ],
    debrief: 'Short answers to this kind of question are more convincing than long ones. "I do the work." then justify it. The Odessa College story is earned — it maps a real past situation to a future context. End with the clarifying question — it signals research discipline, not passivity.',
    anchor: '"What does a good result look like, and how would we know we have it?"',
  },
  {
    id: 'R14',
    category: 'Framework Tension',
    difficulty: 'HARD',
    question: 'Constitutional AI assumes models can be trained to internalize values. ITAYN assumes models systematically misrepresent human intent during execution. Aren\'t these frameworks in tension? How can both be true?',
    answer: [
      'They\'re not in tension. They\'re solving the problem at different layers of the stack.',
      'Constitutional AI is a training intervention. It shapes the model\'s dispositions — its priors, its tendencies, what it\'s inclined to do by default. ITAYN is a runtime intervention. It addresses what happens when the model, despite good dispositions, misrepresents what you meant during the execution of a specific instruction.',
      'A constitutionally aligned model can still drift during a multi-turn conversation because intent is dynamic — it changes, compounds, and refines across turns in ways the model must continuously track. Constitutional AI trains the character. ITAYN navigates the conversation.',
      'The analogy: you can train a surgeon to have excellent values and still need a surgical checklist. The checklist doesn\'t imply the surgeon is unethical. It acknowledges that even well-trained agents, under certain conditions, produce errors. ITAYN is the surgical checklist for intent.',
    ],
    debrief: 'This is a technical gotcha designed to test whether you\'ve actually thought through the relationship between your ideas. The layered-stack framing neutralizes it immediately. The surgeon/checklist analogy is clean and precise — it lands with technical and non-technical audiences.',
    anchor: '"Constitutional AI trains the character. ITAYN navigates the conversation."',
  },
  {
    id: 'R15',
    category: 'Current Literature',
    difficulty: 'STANDARD',
    question: 'What\'s a paper you\'ve read in the last six months that changed how you think about alignment?',
    answer: [
      'Hubinger et al., 2024 — "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training."',
      'What it changed: I\'d been thinking about alignment failures as training failures — the model didn\'t learn the right values. Sleeper Agents suggests the failure mode is deeper. You can have a model that performs consistently aligned behavior under normal conditions and pursues misaligned goals under specific trigger conditions — and the training process cannot reliably detect this.',
      'That\'s a different threat model than ITAYN assumes. ITAYN\'s intent checkpoints work if misalignment manifests as drift — gradual departure from stated intent. They don\'t work well against a model that\'s strategically compliant until triggered. That paper has me rethinking whether intent-at-generation is even the right layer to instrument, or whether I need to be looking at goal-representation at the model internals level.',
    ],
    debrief: 'The answer is differentiated because it says "this paper revealed a gap in my own research." That\'s intellectual honesty, not weakness — it shows you\'re actively updating. Do not cite a paper you haven\'t actually read. If you haven\'t read Hubinger et al. (2024), replace this with one you have read and apply the same structure: what changed, and what does that mean for your work.',
    anchor: 'Read Hubinger et al. (2024). Then ask: does my research still hold against a strategically compliant model?',
    evidenceNote: 'Citation: Hubinger, E., Denison, C., Mu, J., Lambert, M., Tong, M., MacDiarmid, M., ... & Perez, E. (2024). Sleeper agents: Training deceptive LLMs that persist through safety training. arXiv:2401.05566.',
  },
  {
    id: 'R16',
    category: 'Polymath Challenge',
    difficulty: 'TRAP',
    question: '"Polymathic" can be a red flag in research. It sometimes means "hasn\'t gone deep enough anywhere to do real research." Make the case — not to me, but to a skeptical colleague — that breadth is a feature here, not a limitation.',
    answer: [
      'The most important AI safety results of the last decade didn\'t come from researchers who went deeper in one domain. They came from researchers who imported frameworks from somewhere else and applied them rigorously to alignment.',
      'Constitutional AI imported legal philosophy. RLHF imported behavioral economics. Interpretability methods borrowed from neuroscience. The field advances through cross-pollination, not depth alone.',
      'My breadth is not the absence of depth. It is the presence of many possible import paths. The critique "master of none" assumes that the research problems we face are within a single domain. They\'re not. Intent misrepresentation is a cognitive science problem dressed in a machine learning frame. Neurodiversity in safety is a pedagogical problem with a model evaluation solution. These intersections are where I live.',
      'The depth question is legitimate — I need to go deep on alignment formalism, and I will in this program. But the breadth is how I find the next question worth going deep on.',
    ],
    debrief: 'The framing "not to me, but to a skeptical colleague" is a test of whether you can argue your position without the safety of making it personal. Lead with the field\'s history — Constitutional AI and RLHF as cross-pollination examples. This grounds the claim in evidence, not self-advocacy.',
    anchor: '"My breadth is not the absence of depth. It is the presence of many possible import paths."',
  },
  {
    id: 'R17',
    category: 'Ethics Under Pressure',
    difficulty: 'TRAP',
    question: 'Your research produces a result that\'s technically important but commercially inconvenient for Anthropic. What do you do?',
    answer: [
      'I publish it.',
      'The longer answer: I think about Anthropic\'s commercial interests and its safety mission as fundamentally aligned — that\'s the premise I\'m operating under. If a result is commercially inconvenient but scientifically important, the question isn\'t "do I publish?" It\'s "how do we handle this as an organization that built a research institution precisely because it took safety seriously?"',
      'I\'d bring the result to my research lead immediately. I\'d be transparent about the tension. I\'d advocate for publication. If the decision was made to suppress a finding for commercial reasons alone — with no legitimate safety rationale — I\'d need to be on record as having objected.',
      'I\'m telling you this in the interview because it\'s the kind of thing you should know about the people you hire.',
    ],
    debrief: 'The last sentence is the one that matters. You\'re not playing a game — you\'re showing your hand. Anthropic is a safety-first organization that has publicly committed to research transparency. This answer demonstrates values alignment, not naivety. Deliver it without apology.',
    anchor: '"I\'m telling you this in the interview because it\'s the kind of thing you should know about the people you hire."',
  },
  {
    id: 'R18',
    category: 'The Conviction Question',
    difficulty: 'CLOSER',
    question: 'We\'ve talked about your projects and your background. Don\'t tell me why you belong here. Convince me. There\'s a difference.',
    answer: [
      'Twenty-five years ago, I walked into a classroom in Oakland and discovered that the children who couldn\'t fit the system were usually the ones the system most needed to learn from. I built my career on that discovery.',
      'Every modular curriculum, every accessibility audit, every policy redesign I\'ve done was a bet that the outlier is the signal, not the noise. That the system\'s failure to serve the edge case is the system\'s failure — not the edge case\'s.',
      'I came to AI safety because the exact same bet applies here. Models that behave well for average users and fail for edge-case users are not edge cases of a safety problem. They are the safety problem. The only way to build systems that are genuinely safe is to build them for the user who is hardest to build for.',
      'You don\'t just want a researcher who can formalize that idea. You want one who has spent thirty years proving it with their life. I have. That\'s why I belong here.',
    ],
    debrief: 'The CLOSER question is a direct challenge — "convince me." Credentials don\'t convince. Coherence does. The "outlier is the signal" line ties your education career to your safety research career through a single principle that has been true for your entire professional life. That is conviction. Speak slowly. Pause between the second and third paragraph.',
    anchor: '"The outlier is the signal, not the noise."',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CLOSING STATEMENT
// ─────────────────────────────────────────────────────────────────────────────

const CLOSING = {
  setup: 'At the end of every Anthropic interview, you will be asked: "Is there anything you want us to know that we haven\'t asked about?" This is not a formality. This is the final impression. The Closing Statement is gated behind a Reveal to preserve its impact in practice.',
  statement: [
    'You\'re not hiring a researcher who stumbled into AI Safety from a traditional path.',
    'You\'re hiring someone who built it for twenty-five years without knowing it had a name.',
    'Every accelerated curriculum I designed for neurodivergent students at Odessa College was an alignment problem: how do you ensure a system produces the outcome the user actually needs — not just the output the system was optimized for? I\'ve been solving Constitutional AI problems since before I knew what Constitutional AI was.',
    'The difference now is: I know what I\'m doing. And I know why Anthropic is the right place to do it.',
  ],
  debrief: 'Do not rush this. Pause before you start. Speak the first sentence slowly — it\'s a reframe, and it needs to land before you continue. The last two sentences should feel inevitable, not performed. If you\'ve answered every question honestly in the session, this closing is earned.',
};

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICE PROTOCOL
// ─────────────────────────────────────────────────────────────────────────────

const PROTOCOL_SESSIONS = [
  {
    session: 'Session 1',
    timing: '3–4 days before interview',
    duration: '60 min',
    instructions: [
      'Read the full Onboarding section. Understand the methodology before you touch a round.',
      'Work through R01–R06. For each: close the answer panel, attempt to answer out loud for 90 seconds, then reveal.',
      'After each reveal: identify which anchor phrase you used, which you didn\'t, and why.',
      'Do not re-read the same round twice in one session. Move forward only.',
    ],
    goal: 'Establish baseline. Find out which rounds feel unfamiliar — those are your high-priority items.',
  },
  {
    session: 'Session 2',
    timing: '2 days before interview',
    duration: '60 min',
    instructions: [
      'R07–R14. Same protocol: attempt out loud first, then reveal.',
      'Recite your R01–R06 anchor phrases from memory before starting. Do not look them up.',
      'For any HARD or TRAP question where your answer diverged significantly from the model answer: note the gap. Do not try to memorize the model answer — identify the principle you missed.',
    ],
    goal: 'Deepen retrieval practice on new material. Consolidate Session 1 anchors.',
  },
  {
    session: 'Session 3',
    timing: '1 day before interview',
    duration: '90 min',
    instructions: [
      'Full simulation: R01–R18 in sequence. Time yourself. 90 seconds per answer — no more.',
      'After each answer, check: did you use the anchor phrase? Did you name your own vulnerability before they could? Did you lead with evidence, not intent?',
      'Do the Closing Statement three times out loud. This is the one you cannot read during the interview.',
    ],
    goal: 'Performance under time pressure. Identify which answers require more than 90 seconds — those are the ones to tighten before the live session.',
  },
  {
    session: 'Interview Morning',
    timing: '1–2 hours before',
    duration: '20 min',
    instructions: [
      'Read all 18 anchor phrases only. Do not re-read answers.',
      'Recite the Closing Statement once, out loud, standing up.',
      'Close the laptop.',
    ],
    goal: 'Activation, not acquisition. You\'ve done the work. This session is just priming the retrieval cues.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const DIFFICULTY_STYLE: Record<Round['difficulty'], { badge: string; border: string }> = {
  STANDARD: { badge: 'text-zinc-500 border-zinc-700', border: '#27272a' },
  HARD: { badge: 'text-amber-600 border-amber-900', border: '#292010' },
  TRAP: { badge: 'text-red-700 border-red-900', border: '#291015' },
  CLOSER: { badge: 'text-zinc-200 border-zinc-500', border: '#3f3f46' },
};

export default function InterviewPage() {
  const [openRounds, setOpenRounds] = useState<Set<string>>(new Set(['R01']));
  const [onboardingOpen, setOnboardingOpen] = useState(true);
  const [protocolOpen, setProtocolOpen] = useState(false);
  const [citationsOpen, setCitationsOpen] = useState(false);
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

      {/* ── HEADER ── */}
      <header className="mb-12">
        <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-3">C-RSP v4.0 — Mock Interview</div>
        <h1 id="interview-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          MOCK INTERVIEW
        </h1>
        <p className="text-sm font-light text-zinc-300 max-w-2xl leading-relaxed mb-6">
          18 rounds. Real questions. The ones designed to make you flinch — answered.
          Evidence-based methodology. Sourced. Interactive. Built for researchers.
        </p>
        <div className="flex flex-wrap gap-3 text-xs">
          {(['STANDARD', 'HARD', 'TRAP', 'CLOSER'] as const).map(level => (
            <div key={level} className={`flex items-center gap-2 border px-3 py-1 ${DIFFICULTY_STYLE[level].badge}`}>
              <span>{level}</span>
              <span className="text-zinc-700">
                {ROUNDS.filter(r => r.difficulty === level).length}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* ── ONBOARDING ── */}
      <section className="mb-8" aria-labelledby="onboarding-heading">
        <div
          className="border"
          style={{ backgroundColor: '#111116', borderColor: '#3f3f46' }}
        >
          <button
            onClick={() => setOnboardingOpen(s => !s)}
            className="w-full flex items-center justify-between p-6 text-left"
            aria-expanded={onboardingOpen}
          >
            <div>
              <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-1">Start Here</div>
              <h2 id="onboarding-heading" className="text-lg font-light text-zinc-100">
                Why This Works — The Evidence Base
              </h2>
            </div>
            <span className={`text-zinc-600 transition-transform duration-200 ${onboardingOpen ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
          </button>

          {onboardingOpen && (
            <div className="px-6 pb-8 border-t" style={{ borderColor: '#27272a' }}>

              {/* What this is */}
              <div className="pt-6 mb-8">
                <h3 className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">What This Is</h3>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                  This mock interview is a <strong className="text-zinc-200 font-normal">Deliberate Practice Interview Preparation System</strong> —
                  not a Q&A review sheet. There is a critical difference, and it matters for your performance.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl mt-3">
                  Most interview prep works like flashcard review: you read the question, you read the model answer, you feel
                  familiar with both, and you conclude you&rsquo;re prepared. This produces what psychologists call the{' '}
                  <em className="text-zinc-300">fluency illusion</em> — you recognize the answer under ideal conditions, but
                  cannot generate it under pressure. The live interview is not ideal conditions.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl mt-3">
                  This format forces <strong className="text-zinc-200 font-normal">retrieval practice</strong>: you attempt to
                  answer before revealing the model response. That gap — the act of generating under uncertainty — is where
                  durable memory and interview performance actually form.
                </p>
              </div>

              {/* Three principles */}
              <div className="mb-8">
                <h3 className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">The Three Evidence-Based Principles</h3>
                <div className="space-y-6">

                  <div className="border-l-2 border-zinc-700 pl-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-light text-zinc-200">1. Retrieval Practice Effect</div>
                      <span className="text-[10px] text-zinc-700 border border-zinc-800 px-2 py-0.5 shrink-0 ml-4">C1</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                      Roediger & Karpicke (2006) found that students who practiced retrieval retained approximately{' '}
                      <strong className="text-zinc-300">50% more information after one week</strong> compared to students
                      who re-read the same material for the same duration. The effect is robust across content types, ages, and
                      educational levels. For interview preparation: do not re-read model answers. Attempt to generate first.
                      Then reveal. The gap is the training.
                    </p>
                    <p className="text-[10px] text-zinc-600 italic">
                      Roediger, H.L., & Karpicke, J.D. (2006). Psychological Science, 17(3), 249–255.
                    </p>
                  </div>

                  <div className="border-l-2 border-zinc-700 pl-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-light text-zinc-200">2. Deliberate Practice — Feedback Loops</div>
                      <span className="text-[10px] text-zinc-700 border border-zinc-800 px-2 py-0.5 shrink-0 ml-4">C2</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                      Ericsson, Krampe & Tesch-Römer (1993) — the foundational deliberate practice paper — established that
                      expert performance requires <strong className="text-zinc-300">immediate, specific feedback on errors</strong>,
                      not simply time on task. Repetition without feedback produces automatization of existing patterns, not
                      improvement. Each round in this mock interview includes a Coach&rsquo;s Debrief that provides the
                      specific behavioral feedback that solo review cannot. Read the debrief after every round, even the ones
                      where your answer felt strong.
                    </p>
                    <p className="text-[10px] text-zinc-600 italic">
                      Ericsson, K.A., Krampe, R.T., & Tesch-Römer, C. (1993). Psychological Review, 100(3), 363–406.
                    </p>
                  </div>

                  <div className="border-l-2 border-zinc-700 pl-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-light text-zinc-200">3. Anchor Phrases — Cognitive Load Reduction</div>
                      <span className="text-[10px] text-zinc-700 border border-zinc-800 px-2 py-0.5 shrink-0 ml-4">C3 + C4</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                      Miller (1956) established that working memory holds 7±2 information units under normal conditions.
                      Sweller (1988) demonstrated that extraneous cognitive load — the mental effort of managing
                      performance anxiety, question interpretation, and answer generation simultaneously — degrades
                      output quality. Anchor phrases exploit <strong className="text-zinc-300">chunking</strong>: a single
                      memorable sentence encodes the full argument as one retrievable unit, freeing working memory for
                      the parts of the answer that require real-time reasoning. Memorize the anchor for every round. It is
                      not a summary — it is a retrieval cue that unlocks the full response.
                    </p>
                    <p className="text-[10px] text-zinc-600 italic">
                      Miller, G.A. (1956). Psychological Review, 63(2), 81–97. |{' '}
                      Sweller, J. (1988). Cognitive Science, 12(2), 257–285.
                    </p>
                  </div>

                  <div className="border-l-2 border-zinc-700 pl-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-light text-zinc-200">4. Adversarial Exposure — Anxiety Reduction</div>
                      <span className="text-[10px] text-zinc-700 border border-zinc-800 px-2 py-0.5 shrink-0 ml-4">C7</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                      Foa & Kozak (1986) demonstrated that anxiety about a stimulus is reduced most effectively by
                      controlled exposure, not avoidance. TRAP questions (labeled in red) contain the questions designed
                      to trigger the strongest emotional response — the schizophrenia question, the ethics question,
                      the direct challenge to your framework. Encountering them here, in a safe context, eliminates
                      the <strong className="text-zinc-300">surprise response</strong> in the live session. You will not
                      be blindsided by something you have already survived.
                    </p>
                    <p className="text-[10px] text-zinc-600 italic">
                      Foa, E.B., & Kozak, M.J. (1986). Psychological Bulletin, 99(1), 20–35.
                    </p>
                  </div>

                  <div className="border-l-2 border-zinc-700 pl-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-light text-zinc-200">5. Coaching Improves Structured Interview Performance</div>
                      <span className="text-[10px] text-zinc-700 border border-zinc-800 px-2 py-0.5 shrink-0 ml-4">C5 + C6</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                      Maurer, Solamon & Troxtel (1998) found that coached candidates significantly outperformed uncoached
                      candidates on structured situational interviews, controlling for cognitive ability. Huffcutt et al. (2001)
                      identified the primary constructs measured in research and professional interviews:{' '}
                      <strong className="text-zinc-300">job knowledge, applied social skills, and conscientiousness</strong>.
                      Every round in this system is mapped to one or more of these constructs. The rounds are not randomly
                      selected — they are the questions that predict research performance.
                    </p>
                    <p className="text-[10px] text-zinc-600 italic">
                      Maurer et al. (1998). Journal of Applied Psychology, 83(1), 128–136. |{' '}
                      Huffcutt et al. (2001). Journal of Applied Psychology, 86(5), 897–913.
                    </p>
                  </div>

                </div>
              </div>

              {/* Anthropic-specific context */}
              <div className="mb-8 border border-zinc-800 p-5" style={{ backgroundColor: '#0e0e12' }}>
                <h3 className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">What Anthropic Interviews Look Like</h3>
                <p className="text-[10px] text-zinc-600 mb-4 italic">
                  Note: the following is based on public sources — Glassdoor reviews, LinkedIn disclosures, and Anthropic&rsquo;s
                  public careers documentation. It is not confirmed by Anthropic directly.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <div className="text-xs text-zinc-500 mb-2">Round 1 — Phone Screen (30–45 min)</div>
                    <div className="text-xs text-zinc-600 leading-relaxed">Background + motivation + research interest. STANDARD questions dominate. Focus: is this person genuinely interested in safety, or chasing the field?</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 mb-2">Round 2 — Technical (60 min)</div>
                    <div className="text-xs text-zinc-600 leading-relaxed">Deep dive on projects or live problem solving. HARD questions dominate. You will be asked where your system breaks. Have that answer ready.</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 mb-2">Round 3 — Panel / Values (60 min)</div>
                    <div className="text-xs text-zinc-600 leading-relaxed">Cross-functional. TRAP questions most likely here. Ethics under pressure, failure modes, collaboration. This round determines fit, not just capability.</div>
                  </div>
                </div>
              </div>

              {/* Practice Protocol toggle */}
              <div>
                <button
                  onClick={() => setProtocolOpen(s => !s)}
                  className="text-xs tracking-wider text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 px-4 py-2 transition-colors"
                  aria-expanded={protocolOpen}
                >
                  {protocolOpen ? 'Hide' : 'Show'} Practice Protocol →
                </button>

                {protocolOpen && (
                  <div className="mt-6 space-y-4">
                    <div className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">4-Session Practice Protocol</div>
                    {PROTOCOL_SESSIONS.map((s) => (
                      <div key={s.session} className="border border-zinc-800 p-5" style={{ backgroundColor: '#111116' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="text-xs font-medium text-zinc-300">{s.session}</div>
                            <div className="text-xs text-zinc-600">{s.timing} · {s.duration}</div>
                          </div>
                          <div className="text-xs text-zinc-700 border border-zinc-800 px-2 py-0.5 text-right max-w-xs">
                            Goal: {s.goal}
                          </div>
                        </div>
                        <ol className="space-y-2">
                          {s.instructions.map((inst, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-zinc-500 leading-relaxed">
                              <span className="text-zinc-700 font-mono shrink-0">{i + 1}.</span>
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </section>

      {/* ── CITATION REFERENCE ── */}
      <section className="mb-8">
        <button
          onClick={() => setCitationsOpen(s => !s)}
          className="w-full flex items-center justify-between border border-zinc-900 px-5 py-3 hover:border-zinc-800 transition-colors text-left"
          style={{ backgroundColor: '#0e0e12' }}
          aria-expanded={citationsOpen}
        >
          <span className="text-xs tracking-[0.3em] text-zinc-700 uppercase">Full Citation Reference ({CITATIONS.length} sources)</span>
          <span className={`text-zinc-700 transition-transform duration-200 ${citationsOpen ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
        </button>
        {citationsOpen && (
          <div className="border border-zinc-900 border-t-0 px-5 py-5 space-y-3" style={{ backgroundColor: '#0e0e12' }}>
            {CITATIONS.map((c) => (
              <div key={c.id} className="flex items-start gap-4">
                <span className="text-[10px] text-zinc-700 font-mono shrink-0 mt-0.5">[{c.id}]</span>
                <div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    <span className="text-zinc-400">{c.authors} ({c.year}).</span> {c.title}{' '}
                    <em>{c.journal}</em>
                  </p>
                  <p className="text-[10px] text-zinc-700 mt-1 leading-relaxed">{c.finding}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── ROUNDS ── */}
      <section aria-labelledby="rounds-heading" className="mb-16">
        <h2 id="rounds-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">
          18 Rounds — Attempt Out Loud Before Revealing
        </h2>
        <div className="space-y-2">
          {ROUNDS.map((round) => {
            const isOpen = openRounds.has(round.id);
            const style = DIFFICULTY_STYLE[round.difficulty];
            return (
              <div
                key={round.id}
                className="border"
                style={{ backgroundColor: '#1c1c22', borderColor: style.border }}
              >
                <button
                  onClick={() => toggle(round.id)}
                  className="w-full flex items-start justify-between p-5 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`round-${round.id}-content`}
                >
                  <div className="flex items-start gap-5 flex-1 min-w-0">
                    <div className="shrink-0 text-right" style={{ minWidth: '56px' }}>
                      <div className="text-xs font-mono text-zinc-700">{round.id}</div>
                      <div className={`text-[10px] tracking-wider border px-1.5 py-0.5 mt-1 ${style.badge}`}>
                        {round.difficulty}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-zinc-600 tracking-wider uppercase mb-1">{round.category}</div>
                      <p className="text-sm font-light text-zinc-200 leading-relaxed pr-6">
                        &ldquo;{round.question}&rdquo;
                      </p>
                    </div>
                  </div>
                  <span className={`text-zinc-700 shrink-0 mt-1.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div id={`round-${round.id}-content`} className="px-5 pb-6 border-t" style={{ borderColor: '#27272a' }}>

                    <div className="pt-5 mb-5">
                      <div className="text-[10px] text-zinc-600 tracking-wider uppercase mb-4">Response</div>
                      <div className="space-y-3">
                        {round.answer.map((para, i) => (
                          <p key={i} className={`text-sm leading-relaxed ${i === 0 ? 'text-zinc-100' : 'text-zinc-300'}`}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {round.anchor && (
                      <div className="mb-5 border-l-2 border-zinc-600 pl-4 py-2" style={{ backgroundColor: '#0e0e12' }}>
                        <div className="text-[10px] text-zinc-600 tracking-wider uppercase mb-1">Anchor Phrase — Memorize</div>
                        <p className="text-sm text-zinc-200 italic leading-relaxed">{round.anchor}</p>
                      </div>
                    )}

                    {round.evidenceNote && (
                      <div className="mb-5 border-l border-zinc-800 pl-4">
                        <div className="text-[10px] text-zinc-700 tracking-wider uppercase mb-1">Evidence Note</div>
                        <p className="text-xs text-zinc-600 leading-relaxed">{round.evidenceNote}</p>
                      </div>
                    )}

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
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section aria-labelledby="closing-heading">
        <div className="border p-8" style={{ backgroundColor: '#111116', borderColor: '#3f3f46' }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-2">Final Move</div>
              <h2 id="closing-heading" className="text-2xl font-extralight tracking-wide text-zinc-50">
                The Closing Statement
              </h2>
            </div>
            <button
              onClick={() => setShowClosing(s => !s)}
              className="text-xs tracking-wider text-zinc-600 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 transition-colors"
              aria-expanded={showClosing}
            >
              {showClosing ? 'Hide' : 'Reveal'}
            </button>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed italic mb-4">{CLOSING.setup}</p>
          {showClosing && (
            <div className="space-y-4 mt-6">
              {CLOSING.statement.map((line, i) => (
                <p key={i} className={`leading-relaxed ${
                  i === 0 ? 'text-base font-light text-zinc-100' :
                  i === CLOSING.statement.length - 1 ? 'text-sm font-light text-zinc-200 italic' :
                  'text-sm text-zinc-300'
                }`}>
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
