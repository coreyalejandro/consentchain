/**
 * Evidence Extractor
 *
 * Extracts claims from raw input and tags them with epistemic markers.
 * This component supports I1 (Evidence-First Outputs) by ensuring every
 * material claim carries a tag and evidence pointer.
 *
 * @see constitutional-validator.ts for I1 validation
 */
import type { RawInput, ConfidenceLevel } from '../types/sec-spec.js';
import type { EpistemicTag, EvidencePointer, ProofCarryingClaim } from './constitutional-validator.js';
/**
 * Evidence extraction result
 */
export interface ExtractionResult {
    claims: ProofCarryingClaim[];
    rawEvidencePointers: EvidencePointer[];
    confidence: ConfidenceLevel;
    metadata: {
        totalClaimsExtracted: number;
        observedCount: number;
        inferredCount: number;
        speculatedCount: number;
        unresolvedPointers: number;
    };
}
/**
 * Configuration for the evidence extractor
 */
export interface ExtractorConfig {
    strictMode: boolean;
    requireEvidence: boolean;
    defaultTag: EpistemicTag;
    minClaimLength: number;
    maxClaimsPerInput: number;
}
/**
 * Default configuration
 */
export declare const DEFAULT_EXTRACTOR_CONFIG: ExtractorConfig;
/**
 * Evidence Extractor class
 *
 * Extracts and tags claims from raw input, generating evidence pointers
 * for each material claim. Supports the I1 Evidence-First invariant.
 */
export declare class EvidenceExtractor {
    private config;
    private claimCounter;
    constructor(config?: Partial<ExtractorConfig>);
    /**
     * Extract all claims from raw input
     */
    extract(input: RawInput): ExtractionResult;
    /**
     * Extract claims by regex pattern
     */
    private extractByPattern;
    /**
     * Extract file paths from text
     */
    private extractFilePaths;
    /**
     * Remove duplicate claims
     */
    private deduplicateClaims;
    /**
     * Link evidence pointers to relevant claims
     */
    private linkEvidenceToClaims;
    /**
     * Calculate overall confidence based on extraction metadata
     */
    private calculateConfidence;
    /**
     * Tag a single claim with evidence
     */
    tagClaim(text: string, tag: EpistemicTag, evidence?: EvidencePointer[]): ProofCarryingClaim;
    /**
     * Create an evidence pointer
     */
    createPointer(type: EvidencePointer['type'], reference: string, resolved?: boolean): EvidencePointer;
    /**
     * Validate that all claims have evidence (strict mode)
     */
    validateEvidence(claims: ProofCarryingClaim[]): {
        valid: boolean;
        missing: ProofCarryingClaim[];
    };
}
/**
 * Factory function for creating an evidence extractor
 */
export declare function createEvidenceExtractor(config?: Partial<ExtractorConfig>): EvidenceExtractor;
/**
 * Quick utility to tag a claim
 */
export declare function tagAsClaim(text: string, tag: EpistemicTag, evidenceRef?: string): ProofCarryingClaim;
//# sourceMappingURL=evidence-extractor.d.ts.map