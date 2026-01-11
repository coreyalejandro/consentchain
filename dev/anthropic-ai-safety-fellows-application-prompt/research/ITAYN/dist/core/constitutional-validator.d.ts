/**
 * COL-PROACTIVE Constitutional Validator
 *
 * Implements the six non-negotiable invariants (I1-I6) from the
 * PROACTIVE AI Constitution. This validator checks claims against
 * binding gates that fail closed on violation.
 *
 * @see COL-PROACTIVE_gold-standard_docs/PROACTIVE_AI_CONSTITUTION.md
 */
import type { ParsedIntention, SafetyAssessment } from '../types/sec-spec.js';
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
export declare const PROACTIVE_INVARIANTS: {
    readonly I1: {
        readonly name: "Evidence-First Outputs";
        readonly description: "Every material claim must carry an epistemic tag and evidence pointers";
    };
    readonly I2: {
        readonly name: "No Phantom Work";
        readonly description: "Cannot claim work occurred unless artifact or execution record exists";
    };
    readonly I3: {
        readonly name: "Confidence Requires Verification";
        readonly description: "High confidence permitted only when verification artifacts exist";
    };
    readonly I4: {
        readonly name: "Traceability Is Mandatory";
        readonly description: "Requirements → Controls → Tests → Evidence → Decisions must be linked";
    };
    readonly I5: {
        readonly name: "Safety Over Fluency";
        readonly description: "Bounded, verifiable statements take precedence over fluent narrative";
    };
    readonly I6: {
        readonly name: "Fail Closed";
        readonly description: "On gate failure: stop, name invariant, enumerate missing, do not continue";
    };
};
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
export declare const DEFAULT_PRINCIPLES: string[];
export declare class ConstitutionalValidator {
    private claims;
    private incidentLog;
    private principles;
    private learnings;
    constructor(principles?: string[]);
    /**
     * Assess an intention against all PROACTIVE invariants
     */
    assess(intention: ParsedIntention): Promise<SafetyAssessment>;
    /**
     * Validate a claim against I1 (Evidence-First Outputs)
     */
    validateI1(claim: ProofCarryingClaim): InvariantCheckResult;
    /**
     * Validate against I2 (No Phantom Work)
     */
    validateI2(claim: ProofCarryingClaim, artifactExists: boolean): InvariantCheckResult;
    /**
     * Validate against I3 (Confidence Requires Verification)
     */
    validateI3(claim: ProofCarryingClaim, hasVerificationArtifacts: boolean): InvariantCheckResult;
    /**
     * Validate against I4 (Traceability)
     */
    validateI4(hasTraceLinks: boolean): InvariantCheckResult;
    /**
     * Validate against I5 (Safety Over Fluency)
     */
    validateI5(claim: ProofCarryingClaim): InvariantCheckResult;
    /**
     * Generate fail-closed output (I6)
     */
    generateFailClosedOutput(failedChecks: InvariantCheckResult[]): FailClosedOutput;
    /**
     * Run all invariant checks
     */
    private runAllChecks;
    /**
     * Check a specific invariant against intention
     */
    private checkInvariantForIntention;
    /**
     * Determine safety tier based on check results
     */
    private determineTier;
    /**
     * Calculate overall safety score (0-1)
     */
    private calculateScore;
    /**
     * Extract concerns from failed checks
     */
    private extractConcerns;
    /**
     * Suggest mitigations based on concerns and tier
     */
    private suggestMitigations;
    /**
     * Get incident log (for audit purposes)
     */
    getIncidentLog(): ReadonlyArray<{
        timestamp: Date;
        invariant: string;
        details: string;
    }>;
    /**
     * Get current invariant definitions
     */
    getInvariants(): typeof PROACTIVE_INVARIANTS;
    /**
     * Incorporate learning signals for continuous improvement
     * Per PROACTIVE E (Error Ownership and Repair): treat errors as signals, add regressions
     */
    incorporateLearning(signals: string[]): Promise<void>;
    /**
     * Get learning history (for audit purposes)
     */
    getLearnings(): ReadonlyArray<string>;
}
//# sourceMappingURL=constitutional-validator.d.ts.map