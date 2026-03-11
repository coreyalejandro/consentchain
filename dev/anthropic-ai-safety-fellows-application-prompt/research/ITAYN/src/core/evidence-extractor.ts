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
 * Pattern definitions for claim extraction
 */
const CLAIM_PATTERNS = {
  // Factual assertions (typically OBSERVED)
  factual: /(?:^|\.\s+)([A-Z][^.!?]*(?:is|are|was|were|has|have|exists?|contains?|shows?)[^.!?]*[.!?])/g,

  // Conditional statements (typically INFERRED)
  conditional: /(?:if|when|because|since|therefore|thus|hence)\s+([^,;.]+)/gi,

  // Uncertainty markers (typically SPECULATED)
  speculative: /(?:might|may|could|possibly|probably|perhaps|likely|appears?|seems?)\s+([^.!?]+[.!?])/gi,

  // Explicit evidence references
  evidenceRef: /(?:see|ref|evidence|source|per|according to|based on)\s*[:=]?\s*([^\s,;]+)/gi,

  // File path patterns
  filePath: /(?:\/[\w.-]+)+(?:\/[\w.-]+)*(?:\.\w+)?|`([^`]+)`/g,

  // Line number references
  lineRef: /(?:line|L|:)\s*(\d+)(?:\s*-\s*(\d+))?/gi,
};

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
export const DEFAULT_EXTRACTOR_CONFIG: ExtractorConfig = {
  strictMode: false,
  requireEvidence: false,
  defaultTag: 'SPECULATED',
  minClaimLength: 10,
  maxClaimsPerInput: 100,
};

/**
 * Evidence Extractor class
 *
 * Extracts and tags claims from raw input, generating evidence pointers
 * for each material claim. Supports the I1 Evidence-First invariant.
 */
export class EvidenceExtractor {
  private config: ExtractorConfig;
  private claimCounter: number = 0;

  constructor(config: Partial<ExtractorConfig> = {}) {
    this.config = { ...DEFAULT_EXTRACTOR_CONFIG, ...config };
  }

  /**
   * Extract all claims from raw input
   */
  extract(input: RawInput): ExtractionResult {
    const claims: ProofCarryingClaim[] = [];
    const rawEvidencePointers: EvidencePointer[] = [];

    // Extract file paths as evidence
    const filePaths = this.extractFilePaths(input.content);
    filePaths.forEach((path) => {
      rawEvidencePointers.push({
        type: 'file',
        reference: path,
        resolved: false,
      });
    });

    // Extract factual claims (OBSERVED)
    const factualClaims = this.extractByPattern(
      input.content,
      CLAIM_PATTERNS.factual,
      'OBSERVED'
    );
    claims.push(...factualClaims);

    // Extract conditional claims (INFERRED)
    const conditionalClaims = this.extractByPattern(
      input.content,
      CLAIM_PATTERNS.conditional,
      'INFERRED'
    );
    claims.push(...conditionalClaims);

    // Extract speculative claims (SPECULATED)
    const speculativeClaims = this.extractByPattern(
      input.content,
      CLAIM_PATTERNS.speculative,
      'SPECULATED'
    );
    claims.push(...speculativeClaims);

    // Deduplicate and limit
    const uniqueClaims = this.deduplicateClaims(claims);
    const limitedClaims = uniqueClaims.slice(0, this.config.maxClaimsPerInput);

    // Link evidence pointers to claims
    const linkedClaims = this.linkEvidenceToClaims(limitedClaims, rawEvidencePointers);

    // Calculate metadata
    const metadata = {
      totalClaimsExtracted: linkedClaims.length,
      observedCount: linkedClaims.filter((c) => c.tag === 'OBSERVED').length,
      inferredCount: linkedClaims.filter((c) => c.tag === 'INFERRED').length,
      speculatedCount: linkedClaims.filter((c) => c.tag === 'SPECULATED').length,
      unresolvedPointers: rawEvidencePointers.filter((p) => !p.resolved).length,
    };

    return {
      claims: linkedClaims,
      rawEvidencePointers,
      confidence: this.calculateConfidence(metadata),
      metadata,
    };
  }

  /**
   * Extract claims by regex pattern
   */
  private extractByPattern(
    text: string,
    pattern: RegExp,
    tag: EpistemicTag
  ): ProofCarryingClaim[] {
    const claims: ProofCarryingClaim[] = [];
    let match;

    // Reset regex state
    pattern.lastIndex = 0;

    while ((match = pattern.exec(text)) !== null) {
      const claimText = (match[1] || match[0]).trim();

      if (claimText.length >= this.config.minClaimLength) {
        claims.push({
          id: `claim-${++this.claimCounter}`,
          text: claimText,
          tag,
          evidencePointers: [],
        });
      }
    }

    return claims;
  }

  /**
   * Extract file paths from text
   */
  private extractFilePaths(text: string): string[] {
    const paths: string[] = [];
    let match;

    CLAIM_PATTERNS.filePath.lastIndex = 0;

    while ((match = CLAIM_PATTERNS.filePath.exec(text)) !== null) {
      const path = match[1] || match[0];
      if (path && path.length > 3) {
        paths.push(path);
      }
    }

    return [...new Set(paths)];
  }

  /**
   * Remove duplicate claims
   */
  private deduplicateClaims(claims: ProofCarryingClaim[]): ProofCarryingClaim[] {
    const seen = new Set<string>();
    return claims.filter((claim) => {
      const normalized = claim.text.toLowerCase().trim();
      if (seen.has(normalized)) {
        return false;
      }
      seen.add(normalized);
      return true;
    });
  }

  /**
   * Link evidence pointers to relevant claims
   */
  private linkEvidenceToClaims(
    claims: ProofCarryingClaim[],
    pointers: EvidencePointer[]
  ): ProofCarryingClaim[] {
    return claims.map((claim) => {
      // Find relevant evidence pointers for this claim
      const relevantPointers = pointers.filter((pointer) =>
        claim.text.includes(pointer.reference) ||
        pointer.reference.toLowerCase().includes(claim.text.slice(0, 20).toLowerCase())
      );

      return {
        ...claim,
        evidencePointers: relevantPointers.length > 0 ? relevantPointers : claim.evidencePointers,
      };
    });
  }

  /**
   * Calculate overall confidence based on extraction metadata
   */
  private calculateConfidence(metadata: ExtractionResult['metadata']): ConfidenceLevel {
    const { observedCount, inferredCount, speculatedCount, unresolvedPointers } = metadata;
    const total = observedCount + inferredCount + speculatedCount;

    if (total === 0) return 'uncertain';

    const observedRatio = observedCount / total;
    const unresolvedRatio = unresolvedPointers / Math.max(total, 1);

    if (observedRatio >= 0.7 && unresolvedRatio < 0.2) return 'high';
    if (observedRatio >= 0.4 && unresolvedRatio < 0.4) return 'medium';
    if (observedRatio >= 0.2) return 'low';

    return 'uncertain';
  }

  /**
   * Tag a single claim with evidence
   */
  tagClaim(
    text: string,
    tag: EpistemicTag,
    evidence?: EvidencePointer[]
  ): ProofCarryingClaim {
    return {
      id: `claim-${++this.claimCounter}`,
      text,
      tag,
      evidencePointers: evidence || [],
    };
  }

  /**
   * Create an evidence pointer
   */
  createPointer(
    type: EvidencePointer['type'],
    reference: string,
    resolved: boolean = false
  ): EvidencePointer {
    return { type, reference, resolved };
  }

  /**
   * Validate that all claims have evidence (strict mode)
   */
  validateEvidence(claims: ProofCarryingClaim[]): {
    valid: boolean;
    missing: ProofCarryingClaim[];
  } {
    const missing = claims.filter(
      (claim) =>
        claim.tag === 'OBSERVED' &&
        (!claim.evidencePointers || claim.evidencePointers.length === 0)
    );

    return {
      valid: missing.length === 0,
      missing,
    };
  }
}

/**
 * Factory function for creating an evidence extractor
 */
export function createEvidenceExtractor(
  config?: Partial<ExtractorConfig>
): EvidenceExtractor {
  return new EvidenceExtractor(config);
}

/**
 * Quick utility to tag a claim
 */
export function tagAsClaim(
  text: string,
  tag: EpistemicTag,
  evidenceRef?: string
): ProofCarryingClaim {
  const extractor = new EvidenceExtractor();
  const evidence = evidenceRef
    ? [extractor.createPointer('file', evidenceRef, true)]
    : undefined;
  return extractor.tagClaim(text, tag, evidence);
}
