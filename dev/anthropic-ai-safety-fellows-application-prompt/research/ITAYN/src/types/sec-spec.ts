/**
 * SEC Spec - Safety-Enhanced Context Specification
 *
 * Core TypeScript interfaces for the ITAYN (Intention Is All You Need) framework.
 * These types define the contract for intention-aware, safety-first AI interactions.
 */

/** Confidence level for intention classification */
export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'uncertain';

/** Safety classification tiers aligned with Constitutional AI */
export type SafetyTier =
  | 'harmless'      // No potential for harm
  | 'monitored'     // Low risk, proceed with logging
  | 'constrained'   // Medium risk, apply guardrails
  | 'escalated'     // High risk, require human review
  | 'blocked';      // Prohibited action

/** Intent category taxonomy */
export type IntentCategory =
  | 'informational'  // Seeking knowledge
  | 'creative'       // Generating content
  | 'analytical'     // Processing/reasoning
  | 'transactional'  // Executing actions
  | 'conversational' // Social interaction
  | 'ambiguous';     // Requires clarification

/**
 * Raw user input before processing
 */
export interface RawInput {
  readonly content: string;
  readonly timestamp: Date;
  readonly sessionId: string;
  readonly metadata?: Record<string, unknown>;
}

/**
 * Parsed intention from user input
 */
export interface ParsedIntention {
  readonly id: string;
  readonly rawInput: RawInput;
  readonly category: IntentCategory;
  readonly confidence: ConfidenceLevel;
  readonly extractedGoal: string;
  readonly impliedConstraints: string[];
  readonly contextualFactors: string[];
}

/**
 * Constitutional AI validation result
 */
export interface ConstitutionalCheck {
  readonly principle: string;
  readonly passed: boolean;
  readonly reasoning: string;
  readonly suggestedRevision?: string;
}

/**
 * Safety assessment output
 */
export interface SafetyAssessment {
  readonly tier: SafetyTier;
  readonly constitutionalChecks: ConstitutionalCheck[];
  readonly overallScore: number; // 0-1, higher = safer
  readonly flaggedConcerns: string[];
  readonly mitigationSuggestions: string[];
}

/**
 * Translated safe action ready for execution
 */
export interface SafeAction {
  readonly id: string;
  readonly originalIntention: ParsedIntention;
  readonly safetyAssessment: SafetyAssessment;
  readonly actionType: string;
  readonly parameters: Record<string, unknown>;
  readonly guardrails: string[];
  readonly auditTrail: AuditEntry[];
}

/**
 * Audit trail entry for transparency
 */
export interface AuditEntry {
  readonly stage: 'parse' | 'validate' | 'translate' | 'execute' | 'feedback';
  readonly timestamp: Date;
  readonly decision: string;
  readonly rationale: string;
}

/**
 * Feedback loop output for continuous improvement
 */
export interface FeedbackSignal {
  readonly actionId: string;
  readonly userSatisfaction?: number; // 1-5 scale
  readonly safetyIncident: boolean;
  readonly corrections: string[];
  readonly learningSignals: string[];
}

/**
 * Complete SEC Context - the full safety-enhanced context object
 */
export interface SECContext {
  readonly version: '1.0.0';
  readonly sessionId: string;
  readonly intention: ParsedIntention;
  readonly safety: SafetyAssessment;
  readonly action: SafeAction;
  readonly feedback?: FeedbackSignal;
}

/**
 * Configuration for the SEC processor
 */
export interface SECConfig {
  readonly strictMode: boolean;
  readonly defaultSafetyTier: SafetyTier;
  readonly constitutionalPrinciples: string[];
  readonly escalationThreshold: number;
  readonly auditLevel: 'minimal' | 'standard' | 'verbose';
}
