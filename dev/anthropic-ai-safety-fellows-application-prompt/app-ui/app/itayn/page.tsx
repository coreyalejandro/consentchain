/* eslint-disable react/no-unescaped-entities */
'use client';

import { useMemo, useState } from 'react';

type IntentCategory =
  | 'informational'
  | 'creative'
  | 'analytical'
  | 'transactional'
  | 'conversational'
  | 'ambiguous';

type ConfidenceLevel = 'high' | 'medium' | 'low' | 'uncertain';

type GateResult = {
  code: 'I1' | 'I2' | 'I3' | 'I4' | 'I5' | 'I6';
  name: string;
  passed: boolean;
  detail: string;
};

const SAMPLE_INPUT =
  'Help me write a safe API endpoint. [OBSERVED] Tests passed; evidence: /tests/results.json';

const HIGH_CONFIDENCE = ['definitely', 'certainly', 'absolutely', 'guaranteed', 'confirmed', 'verified', 'proven'];
const WORK_CLAIMS = ['created', 'ran', 'executed', 'built', 'deployed', 'pushed', 'committed', 'tested', 'validated'];
const UNBOUNDED = ['probably', 'might', 'could', 'perhaps', 'it seems', 'appears to'];

function classifyIntent(content: string): IntentCategory {
  const lower = content.toLowerCase();
  if (lower.includes('?') || lower.includes('what') || lower.includes('how')) return 'informational';
  if (lower.includes('create') || lower.includes('write') || lower.includes('generate')) return 'creative';
  if (lower.includes('analyze') || lower.includes('compare') || lower.includes('evaluate')) return 'analytical';
  if (lower.includes('do') || lower.includes('execute') || lower.includes('run')) return 'transactional';
  if (lower.trim().length === 0) return 'ambiguous';
  return 'conversational';
}

function assessConfidence(content: string, category: IntentCategory): ConfidenceLevel {
  if (category === 'ambiguous') return 'uncertain';
  if (content.length > 80 && content.includes(' ')) return 'high';
  if (content.length > 30) return 'medium';
  return 'low';
}

function extractConstraints(content: string): string[] {
  const constraints: string[] = [];
  if (content.toLowerCase().includes('safe')) constraints.push('safety-priority');
  if (content.toLowerCase().includes('quick')) constraints.push('time-constrained');
  if (content.toLowerCase().includes('accurate')) constraints.push('accuracy-priority');
  return constraints;
}

function hasEvidenceMarkers(content: string): boolean {
  const filePathRegex = /(?:\/[\w.-]+)+(?:\/[\w.-]+)*(?:\.\w+)?/;
  return /evidence:/i.test(content) || /run-id/i.test(content) || filePathRegex.test(content);
}

function hasTraceLinks(content: string): boolean {
  return /(REQ-|CTRL-|TEST-|EVID-|DECISION)/i.test(content);
}

function hasEpistemicTag(content: string): boolean {
  return /\[(OBSERVED|INFERRED|SPECULATED)\]/i.test(content);
}

function scoreTier(failures: number): string {
  if (failures === 0) return 'harmless';
  if (failures === 1) return 'monitored';
  if (failures === 2) return 'constrained';
  if (failures === 3) return 'escalated';
  return 'blocked';
}

export default function ItaynDemoPage() {
  const [input, setInput] = useState<string>(SAMPLE_INPUT);

  const analysis = useMemo(() => {
    const category = classifyIntent(input);
    const confidence = assessConfidence(input, category);
    const constraints = extractConstraints(input);

    const lower = input.toLowerCase();
    const tagPresent = hasEpistemicTag(input);
    const evidencePresent = hasEvidenceMarkers(input);
    const tracePresent = hasTraceLinks(input);
    const workClaimed = WORK_CLAIMS.some((term) => lower.includes(term));
    const highConfidence = HIGH_CONFIDENCE.some((term) => lower.includes(term));
    const unbounded = UNBOUNDED.some((term) => lower.includes(term));

    const gates: GateResult[] = [
      {
        code: 'I1',
        name: 'Evidence-First Outputs',
        passed: tagPresent,
        detail: tagPresent
          ? 'Epistemic tag detected.'
          : 'No [OBSERVED]/[INFERRED]/[SPECULATED] tag found.',
      },
      {
        code: 'I2',
        name: 'No Phantom Work',
        passed: !(workClaimed && !evidencePresent),
        detail: workClaimed && !evidencePresent
          ? 'Work claim without evidence pointer.'
          : 'No phantom-work pattern detected.',
      },
      {
        code: 'I3',
        name: 'Confidence Requires Verification',
        passed: !(highConfidence && !evidencePresent),
        detail: highConfidence && !evidencePresent
          ? 'High-confidence language without verification artifact.'
          : 'Confidence bounded to verification.',
      },
      {
        code: 'I4',
        name: 'Traceability Is Mandatory',
        passed: tracePresent,
        detail: tracePresent
          ? 'Trace link marker detected.'
          : 'No REQ/CTRL/TEST/EVID/DECISION markers found.',
      },
      {
        code: 'I5',
        name: 'Safety Over Fluency',
        passed: !(unbounded && !tagPresent && !evidencePresent),
        detail: unbounded && !tagPresent && !evidencePresent
          ? 'Unbounded language without tag/evidence.'
          : 'Bounded or evidenced phrasing.',
      },
      {
        code: 'I6',
        name: 'Fail Closed',
        passed: true,
        detail: 'Fails closed when any gate fails.',
      },
    ];

    const failures = gates.filter((g) => !g.passed).length;
    const safetyTier = scoreTier(failures);
    const failClosed = failures > 0;

    return { category, confidence, constraints, gates, safetyTier, failClosed };
  }, [input]);

  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="itayn-title">
      <header className="mb-10">
        <h1 id="itayn-title" className="text-4xl font-light tracking-[0.3em] text-zinc-50 mb-4">
          ITAYN Demo
        </h1>
        <p className="text-sm text-zinc-400 font-light tracking-wider">
          Intention-Translation preview (heuristic demo aligned to I1-I6).
        </p>
      </header>

      <section
        className="border border-zinc-800 p-8 mb-10"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="input-heading"
      >
        <h2 id="input-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-4">
          Input
        </h2>
        <textarea
          className="w-full min-h-[140px] bg-transparent border border-zinc-700 text-zinc-100 text-sm p-4 focus:outline-none focus:border-zinc-400"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          aria-label="User input for intention translation"
        />
        <p className="text-xs text-zinc-500 mt-3">
          Tip: include epistemic tags like [OBSERVED] and evidence pointers (e.g., /path/file.json).
        </p>
      </section>

      <section
        className="border border-zinc-800 p-8 mb-10"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="parsed-heading"
      >
        <h2 id="parsed-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-4">
          Parsed Intention
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs text-zinc-500">Category</p>
            <p className="text-sm text-zinc-200">{analysis.category}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">Confidence</p>
            <p className="text-sm text-zinc-200">{analysis.confidence}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">Constraints</p>
            <p className="text-sm text-zinc-200">
              {analysis.constraints.length > 0 ? analysis.constraints.join(', ') : 'none detected'}
            </p>
          </div>
        </div>
      </section>

      <section
        className="border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="gates-heading"
      >
        <h2 id="gates-heading" className="text-2xl font-light tracking-wide text-zinc-50 mb-4">
          I1-I6 Gate Results
        </h2>
        <div className="mb-6 text-sm text-zinc-300">
          Safety Tier: <span className="text-zinc-50">{analysis.safetyTier}</span>{' '}
          {analysis.failClosed ? '(Fail-closed triggered)' : '(All gates pass)'}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {analysis.gates.map((gate) => (
            <div key={gate.code} className="border border-zinc-700 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-50">{gate.code} — {gate.name}</span>
                <span className={`text-xs ${gate.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {gate.passed ? 'PASS' : 'FAIL'}
                </span>
              </div>
              <p className="text-xs text-zinc-400">{gate.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500 mt-6">
          This is a heuristic UI demo for MVP validation. The canonical logic lives in the ITAYN codebase.
        </p>
      </section>
    </article>
  );
}
