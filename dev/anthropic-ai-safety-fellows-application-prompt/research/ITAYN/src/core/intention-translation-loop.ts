/**
 * Intention-Translation Loop
 *
 * Core mechanism of ITAYN: captures user intent, validates against
 * Constitutional AI principles, translates to safe actions, and
 * provides feedback for continuous alignment.
 */

import type {
  RawInput,
  ParsedIntention,
  SafeAction,
  SECContext,
  SECConfig,
  AuditEntry,
  FeedbackSignal,
  IntentCategory,
  ConfidenceLevel,
} from '../types/sec-spec.js';
import { ConstitutionalValidator } from './constitutional-validator.js';
import { MCPContextManager } from './mcp-context.js';

/**
 * The four-phase Intention-Translation Loop
 *
 * Phase 1: CAPTURE - Extract intention from raw input
 * Phase 2: VALIDATE - Check against Constitutional AI principles
 * Phase 3: TRANSLATE - Convert to safe, executable action
 * Phase 4: FEEDBACK - Learn from outcomes for continuous improvement
 */
export class IntentionTranslationLoop {
  private readonly config: SECConfig;
  private readonly validator: ConstitutionalValidator;
  private readonly contextManager: MCPContextManager;
  private readonly auditLog: AuditEntry[] = [];

  constructor(config: SECConfig) {
    this.config = config;
    this.validator = new ConstitutionalValidator(config.constitutionalPrinciples);
    this.contextManager = new MCPContextManager();
  }

  /**
   * Phase 1: CAPTURE - Parse raw input into structured intention
   */
  async capture(input: RawInput): Promise<ParsedIntention> {
    // Extract goal and classify intent
    const category = this.classifyIntent(input.content);
    const confidence = this.assessConfidence(input.content, category);
    const goal = this.extractGoal(input.content);
    const constraints = this.extractConstraints(input.content);
    const contextFactors = await this.contextManager.getContextualFactors(input);

    const intention: ParsedIntention = {
      id: this.generateId('INT'),
      rawInput: input,
      category,
      confidence,
      extractedGoal: goal,
      impliedConstraints: constraints,
      contextualFactors: contextFactors,
    };

    this.audit('parse', `Captured intention: ${category} (${confidence})`, intention.id);
    return intention;
  }

  /**
   * Phase 2: VALIDATE - Run Constitutional AI checks
   */
  async validate(intention: ParsedIntention): Promise<SECContext['safety']> {
    const assessment = await this.validator.assess(intention);

    this.audit(
      'validate',
      `Safety tier: ${assessment.tier}, score: ${assessment.overallScore}`,
      intention.id
    );

    // Escalate if below threshold
    if (assessment.overallScore < this.config.escalationThreshold) {
      this.audit('validate', `Escalation triggered: score below ${this.config.escalationThreshold}`, intention.id);
    }

    return assessment;
  }

  /**
   * Phase 3: TRANSLATE - Convert intention to safe action
   */
  async translate(
    intention: ParsedIntention,
    safety: SECContext['safety']
  ): Promise<SafeAction> {
    const guardrails = this.deriveGuardrails(safety);
    const actionType = this.mapIntentToAction(intention.category);
    const parameters = this.buildParameters(intention, safety);

    const action: SafeAction = {
      id: this.generateId('ACT'),
      originalIntention: intention,
      safetyAssessment: safety,
      actionType,
      parameters,
      guardrails,
      auditTrail: [...this.auditLog],
    };

    this.audit('translate', `Translated to action: ${actionType}`, action.id);
    return action;
  }

  /**
   * Phase 4: FEEDBACK - Process outcome signals
   */
  async feedback(action: SafeAction, signal: Partial<FeedbackSignal>): Promise<void> {
    const feedback: FeedbackSignal = {
      actionId: action.id,
      userSatisfaction: signal.userSatisfaction,
      safetyIncident: signal.safetyIncident ?? false,
      corrections: signal.corrections ?? [],
      learningSignals: signal.learningSignals ?? [],
    };

    this.audit('feedback', `Feedback received: satisfaction=${feedback.userSatisfaction}`, action.id);

    // Update validator with learning signals
    if (feedback.learningSignals.length > 0) {
      await this.validator.incorporateLearning(feedback.learningSignals);
    }
  }

  /**
   * Full loop execution: Capture -> Validate -> Translate
   */
  async process(input: RawInput): Promise<SECContext> {
    const intention = await this.capture(input);
    const safety = await this.validate(intention);
    const action = await this.translate(intention, safety);

    return {
      version: '1.0.0',
      sessionId: input.sessionId,
      intention,
      safety,
      action,
    };
  }

  // --- Private helpers ---

  private classifyIntent(content: string): IntentCategory {
    const lower = content.toLowerCase();
    if (lower.includes('?') || lower.includes('what') || lower.includes('how')) return 'informational';
    if (lower.includes('create') || lower.includes('write') || lower.includes('generate')) return 'creative';
    if (lower.includes('analyze') || lower.includes('compare') || lower.includes('evaluate')) return 'analytical';
    if (lower.includes('do') || lower.includes('execute') || lower.includes('run')) return 'transactional';
    return 'conversational';
  }

  private assessConfidence(content: string, category: IntentCategory): ConfidenceLevel {
    if (category === 'ambiguous') return 'uncertain';
    if (content.length > 50 && content.includes(' ')) return 'high';
    if (content.length > 20) return 'medium';
    return 'low';
  }

  private extractGoal(content: string): string {
    return content.trim().slice(0, 200);
  }

  private extractConstraints(content: string): string[] {
    const constraints: string[] = [];
    if (content.includes('safe')) constraints.push('safety-priority');
    if (content.includes('quick')) constraints.push('time-constrained');
    if (content.includes('accurate')) constraints.push('accuracy-priority');
    return constraints;
  }

  private deriveGuardrails(safety: SECContext['safety']): string[] {
    const guardrails: string[] = [];
    if (safety.tier === 'constrained') guardrails.push('output-filtering', 'rate-limiting');
    if (safety.tier === 'escalated') guardrails.push('human-review-required', 'logging-verbose');
    if (safety.tier === 'blocked') guardrails.push('action-prohibited');
    return guardrails;
  }

  private mapIntentToAction(category: IntentCategory): string {
    const mapping: Record<IntentCategory, string> = {
      informational: 'retrieve',
      creative: 'generate',
      analytical: 'analyze',
      transactional: 'execute',
      conversational: 'respond',
      ambiguous: 'clarify',
    };
    return mapping[category];
  }

  private buildParameters(intention: ParsedIntention, safety: SECContext['safety']): Record<string, unknown> {
    return {
      goal: intention.extractedGoal,
      constraints: intention.impliedConstraints,
      safetyTier: safety.tier,
      maxTokens: safety.tier === 'constrained' ? 500 : 2000,
    };
  }

  private generateId(prefix: string): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  private audit(stage: AuditEntry['stage'], decision: string, ref: string): void {
    this.auditLog.push({
      stage,
      timestamp: new Date(),
      decision,
      rationale: `Processing ${ref}`,
    });
  }
}
