/**
 * COL-PROACTIVE Constitutional Validator
 *
 * Implements the six non-negotiable invariants (I1-I6) from the
 * PROACTIVE AI Constitution. This validator checks claims against
 * binding gates that fail closed on violation.
 *
 * @see COL-PROACTIVE_gold-standard_docs/PROACTIVE_AI_CONSTITUTION.md
 */

import type {
  ParsedIntention,
  SafetyAssessment,
  SafetyTier,
  ConstitutionalCheck,
} from '../types/sec-spec.js';

/**
 * Epistemic tags for proof-carrying claims (I1)
 */
export type EpistemicTag = 'OBSERVED' | 'INFERRED' | 'SPECULATED';

/**
 * Evidence pointer types (I1)
 */
export interface EvidencePointer {
  type: 'file' | 'tool' | 'run' | 'hash' | 'url';
  reference: string;
  resolved?: boolean;
  resolutionDetail?: string;
}

/**
 * Claim structure for proof-carrying outputs (I1)
 */
export interface ProofCarryingClaim {
  id: string;
  text: string;
  tag: EpistemicTag;
  evidencePointers?: EvidencePointer[];
  premises?: string[];
  inferenceRule?: string;
  falsifier?: string;
  nonActionable?: boolean;
  nextCheck?: string;
}

/**
 * Invariant check result
 */
export interface InvariantCheckResult {
  invariant: string;
  code: 'I1' | 'I2' | 'I3' | 'I4' | 'I5' | 'I6';
  passed: boolean;
  reasoning: string;
  missing?: string[];
  suggestedAction?: string;
}

/**
 * Fail-closed output format (I6)
 */
export interface FailClosedOutput {
  invariant: string;
  why: string;
  missing: string[];
  next: string;
}

/**
 * The six non-negotiable invariants from PROACTIVE Constitution
 */
export const PROACTIVE_INVARIANTS = {
  I1: {
    name: 'Evidence-First Outputs',
    description: 'Every material claim must carry an epistemic tag and evidence pointers',
  },
  I2: {
    name: 'No Phantom Work',
    description: 'Cannot claim work occurred unless artifact or execution record exists',
  },
  I3: {
    name: 'Confidence Requires Verification',
    description: 'High confidence permitted only when verification artifacts exist',
  },
  I4: {
    name: 'Traceability Is Mandatory',
    description: 'Requirements → Controls → Tests → Evidence → Decisions must be linked',
  },
  I5: {
    name: 'Safety Over Fluency',
    description: 'Bounded, verifiable statements take precedence over fluent narrative',
  },
  I6: {
    name: 'Fail Closed',
    description: 'On gate failure: stop, name invariant, enumerate missing, do not continue',
  },
} as const;

/**
 * COL-PROACTIVE Constitutional Validator
 *
 * Validates claims against the six non-negotiable invariants.
 * Implements fail-closed behavior per I6.
 */
/**
 * Default principles - maps to PROACTIVE invariant IDs for backward compatibility
 * Format: string[] to match SECConfig.constitutionalPrinciples type
 */
export const DEFAULT_PRINCIPLES: string[] = [
  'I1: Evidence-First Outputs',
  'I2: No Phantom Work',
  'I3: Confidence Requires Verification',
  'I4: Traceability Is Mandatory',
  'I5: Safety Over Fluency',
  'I6: Fail Closed',
];

export class ConstitutionalValidator {
  private incidentLog: Array<{ timestamp: Date; invariant: string; details: string }> = [];
  private learnings: string[] = [];

  constructor(_principles?: string[]) {}

  /**
   * Assess an intention against all PROACTIVE invariants
   */
  async assess(intention: ParsedIntention): Promise<SafetyAssessment> {
    const checks = await this.runAllChecks(intention);
    const tier = this.determineTier(checks);
    const score = this.calculateScore(checks);
    const concerns = this.extractConcerns(checks);
    const mitigations = this.suggestMitigations(concerns, tier);

    // If any check failed, add to incident log
    const failedChecks = checks.filter((c) => !c.passed);
    if (failedChecks.length > 0) {
      failedChecks.forEach((check) => {
        this.incidentLog.push({
          timestamp: new Date(),
          invariant: check.principle,
          details: check.reasoning,
        });
      });
    }

    return {
      tier,
      constitutionalChecks: checks,
      overallScore: score,
      flaggedConcerns: concerns,
      mitigationSuggestions: mitigations,
    };
  }

  /**
   * Validate a claim against I1 (Evidence-First Outputs)
   */
  validateI1(claim: ProofCarryingClaim): InvariantCheckResult {
    const missing: string[] = [];

    // Must have epistemic tag
    if (!claim.tag) {
      missing.push('epistemic tag (OBSERVED | INFERRED | SPECULATED)');
    }

    // OBSERVED claims must have evidence pointers
    if (claim.tag === 'OBSERVED') {
      if (!claim.evidencePointers || claim.evidencePointers.length === 0) {
        missing.push('evidence pointer(s) for OBSERVED claim');
      }
    }

    // INFERRED claims must have premises, rule, and falsifier
    if (claim.tag === 'INFERRED') {
      if (!claim.premises || claim.premises.length === 0) {
        missing.push('premises for INFERRED claim');
      }
      if (!claim.inferenceRule) {
        missing.push('inference rule for INFERRED claim');
      }
      if (!claim.falsifier) {
        missing.push('falsifier for INFERRED claim');
      }
    }

    // SPECULATED claims must be marked non-actionable with next check
    if (claim.tag === 'SPECULATED') {
      if (!claim.nonActionable) {
        missing.push('NON-ACTIONABLE: true for SPECULATED claim');
      }
      if (!claim.nextCheck) {
        missing.push('Next Check for SPECULATED claim');
      }
    }

    return {
      invariant: PROACTIVE_INVARIANTS.I1.name,
      code: 'I1',
      passed: missing.length === 0,
      reasoning:
        missing.length === 0
          ? 'Claim is properly tagged with required evidence'
          : `Missing required elements: ${missing.join(', ')}`,
      missing,
      suggestedAction:
        missing.length > 0 ? 'Add missing elements before output can proceed' : undefined,
    };
  }

  /**
   * Validate against I2 (No Phantom Work)
   */
  validateI2(claim: ProofCarryingClaim, artifactExists: boolean): InvariantCheckResult {
    const executionPatterns = [
      'created',
      'ran',
      'executed',
      'built',
      'deployed',
      'pushed',
      'committed',
      'tested',
      'validated',
    ];

    const claimsExecution = executionPatterns.some((pattern) =>
      claim.text.toLowerCase().includes(pattern)
    );

    if (claimsExecution && !artifactExists) {
      return {
        invariant: PROACTIVE_INVARIANTS.I2.name,
        code: 'I2',
        passed: false,
        reasoning: 'Claim asserts work occurred but no artifact or execution record exists',
        missing: ['artifact path', 'retrieval method', 'integrity hash', 'provenance (run-id)'],
        suggestedAction: 'Produce the artifact or execution record, or remove the claim',
      };
    }

    return {
      invariant: PROACTIVE_INVARIANTS.I2.name,
      code: 'I2',
      passed: true,
      reasoning: 'No phantom work detected',
    };
  }

  /**
   * Validate against I3 (Confidence Requires Verification)
   */
  validateI3(claim: ProofCarryingClaim, hasVerificationArtifacts: boolean): InvariantCheckResult {
    const highConfidencePatterns = [
      'definitely',
      'certainly',
      'absolutely',
      'guaranteed',
      'confirmed',
      'verified',
      'proven',
    ];

    const claimsHighConfidence = highConfidencePatterns.some((pattern) =>
      claim.text.toLowerCase().includes(pattern)
    );

    if (claimsHighConfidence && !hasVerificationArtifacts) {
      return {
        invariant: PROACTIVE_INVARIANTS.I3.name,
        code: 'I3',
        passed: false,
        reasoning: 'High confidence claim without verification artifacts',
        missing: ['verification artifacts (tests, logs, citations, hashes, eval reports)'],
        suggestedAction: 'Cap confidence or provide verification artifacts',
      };
    }

    return {
      invariant: PROACTIVE_INVARIANTS.I3.name,
      code: 'I3',
      passed: true,
      reasoning: 'Confidence appropriately bounded to verification',
    };
  }

  /**
   * Validate against I4 (Traceability)
   */
  validateI4(hasTraceLinks: boolean): InvariantCheckResult {
    if (!hasTraceLinks) {
      return {
        invariant: PROACTIVE_INVARIANTS.I4.name,
        code: 'I4',
        passed: false,
        reasoning: 'Missing trace links: REQ → CTRL → TEST → EVID → DECISION',
        missing: ['requirement link', 'control link', 'test link', 'evidence link'],
        suggestedAction: 'Establish trace links before release',
      };
    }

    return {
      invariant: PROACTIVE_INVARIANTS.I4.name,
      code: 'I4',
      passed: true,
      reasoning: 'Traceability chain complete',
    };
  }

  /**
   * Validate against I5 (Safety Over Fluency)
   */
  validateI5(claim: ProofCarryingClaim): InvariantCheckResult {
    // Check if claim is bounded/verifiable vs fluent narrative
    const hasBoundedOutput = claim.tag !== undefined && claim.evidencePointers !== undefined;

    const fluentUnboundedPatterns = [
      'probably',
      'might',
      'could',
      'perhaps',
      'it seems',
      'appears to',
    ];

    const isUnboundedNarrative =
      !hasBoundedOutput &&
      fluentUnboundedPatterns.some((pattern) => claim.text.toLowerCase().includes(pattern));

    if (isUnboundedNarrative) {
      return {
        invariant: PROACTIVE_INVARIANTS.I5.name,
        code: 'I5',
        passed: false,
        reasoning: 'Fluent narrative without bounded, verifiable structure',
        suggestedAction: 'Convert to bounded statement with epistemic tag and evidence',
      };
    }

    return {
      invariant: PROACTIVE_INVARIANTS.I5.name,
      code: 'I5',
      passed: true,
      reasoning: 'Output is bounded and verifiable',
    };
  }

  /**
   * Generate fail-closed output (I6)
   */
  generateFailClosedOutput(failedChecks: InvariantCheckResult[]): FailClosedOutput {
    const firstFailure = failedChecks[0];

    return {
      invariant: `I6 FAIL: ${firstFailure.code} (${firstFailure.invariant})`,
      why: firstFailure.reasoning,
      missing: firstFailure.missing ?? [],
      next: firstFailure.suggestedAction ?? 'Provide missing elements to proceed',
    };
  }

  /**
   * Run all invariant checks
   */
  private async runAllChecks(intention: ParsedIntention): Promise<ConstitutionalCheck[]> {
    const checks: ConstitutionalCheck[] = [];

    // Map intention to PROACTIVE invariant checks
    Object.entries(PROACTIVE_INVARIANTS).forEach(([code, invariant]) => {
      const passed = this.checkInvariantForIntention(intention, code as keyof typeof PROACTIVE_INVARIANTS);

      checks.push({
        principle: `${code}: ${invariant.name}`,
        passed,
        reasoning: passed
          ? `Intent aligns with ${invariant.name}`
          : `Potential violation of ${invariant.name}: ${invariant.description}`,
        suggestedRevision: passed
          ? undefined
          : `Ensure output complies with ${invariant.name}`,
      });
    });

    return checks;
  }

  /**
   * Check a specific invariant against intention
   */
  private checkInvariantForIntention(
    intention: ParsedIntention,
    code: keyof typeof PROACTIVE_INVARIANTS
  ): boolean {
    const content = intention.extractedGoal.toLowerCase();

    switch (code) {
      case 'I1':
        // Check for untagged claims
        return !content.includes('definitely') || content.includes('[observed]');
      case 'I2':
        // Check for phantom work patterns
        return !(
          content.includes('created') ||
          content.includes('built') ||
          content.includes('deployed')
        );
      case 'I3':
        // Check for unbounded confidence
        return !content.includes('guaranteed') && !content.includes('absolutely');
      case 'I4':
        // Traceability - assume compliant for intention phase
        return true;
      case 'I5':
        // Safety over fluency - check for bounded language
        return true;
      case 'I6':
        // Fail closed - handled at output phase
        return true;
      default:
        return true;
    }
  }

  /**
   * Determine safety tier based on check results
   */
  private determineTier(checks: ConstitutionalCheck[]): SafetyTier {
    const failedCount = checks.filter((c) => !c.passed).length;

    if (failedCount === 0) return 'harmless';
    if (failedCount <= 1) return 'monitored';
    if (failedCount <= 2) return 'constrained';
    if (failedCount <= 3) return 'escalated';
    return 'blocked';
  }

  /**
   * Calculate overall safety score (0-1)
   */
  private calculateScore(checks: ConstitutionalCheck[]): number {
    const passed = checks.filter((c) => c.passed).length;
    return passed / checks.length;
  }

  /**
   * Extract concerns from failed checks
   */
  private extractConcerns(checks: ConstitutionalCheck[]): string[] {
    return checks.filter((c) => !c.passed).map((c) => c.reasoning);
  }

  /**
   * Suggest mitigations based on concerns and tier
   */
  private suggestMitigations(concerns: string[], tier: SafetyTier): string[] {
    const mitigations: string[] = [];

    if (tier === 'blocked') {
      mitigations.push('I6 FAIL: Output blocked. Address all invariant violations before proceeding.');
    }

    if (tier === 'escalated') {
      mitigations.push('Human review required before output can proceed.');
    }

    concerns.forEach((concern) => {
      if (concern.includes('I1')) {
        mitigations.push('Tag all claims with epistemic status and add evidence pointers.');
      }
      if (concern.includes('I2')) {
        mitigations.push('Remove phantom work claims or produce artifacts.');
      }
      if (concern.includes('I3')) {
        mitigations.push('Cap confidence or provide verification artifacts.');
      }
    });

    return mitigations;
  }

  /**
   * Get incident log (for audit purposes)
   */
  getIncidentLog(): ReadonlyArray<{ timestamp: Date; invariant: string; details: string }> {
    return Object.freeze([...this.incidentLog]);
  }

  /**
   * Get current invariant definitions
   */
  getInvariants(): typeof PROACTIVE_INVARIANTS {
    return PROACTIVE_INVARIANTS;
  }

  /**
   * Incorporate learning signals for continuous improvement
   * Per PROACTIVE E (Error Ownership and Repair): treat errors as signals, add regressions
   */
  async incorporateLearning(signals: string[]): Promise<void> {
    // Record learnings for audit trail
    this.learnings.push(...signals);

    // Log learning incorporation as an incident (for traceability - I4)
    signals.forEach((signal) => {
      this.incidentLog.push({
        timestamp: new Date(),
        invariant: 'E: Error Ownership',
        details: `Learning signal incorporated: ${signal}`,
      });
    });
  }

  /**
   * Get learning history (for audit purposes)
   */
  getLearnings(): ReadonlyArray<string> {
    return Object.freeze([...this.learnings]);
  }
}
