/**
 * Intention-Translation Loop
 *
 * Core mechanism of ITAYN: captures user intent, validates against
 * Constitutional AI principles, translates to safe actions, and
 * provides feedback for continuous alignment.
 */
import type { RawInput, ParsedIntention, SafeAction, SECContext, SECConfig, FeedbackSignal } from '../types/sec-spec.js';
/**
 * The four-phase Intention-Translation Loop
 *
 * Phase 1: CAPTURE - Extract intention from raw input
 * Phase 2: VALIDATE - Check against Constitutional AI principles
 * Phase 3: TRANSLATE - Convert to safe, executable action
 * Phase 4: FEEDBACK - Learn from outcomes for continuous improvement
 */
export declare class IntentionTranslationLoop {
    private readonly config;
    private readonly validator;
    private readonly contextManager;
    private readonly auditLog;
    constructor(config: SECConfig);
    /**
     * Phase 1: CAPTURE - Parse raw input into structured intention
     */
    capture(input: RawInput): Promise<ParsedIntention>;
    /**
     * Phase 2: VALIDATE - Run Constitutional AI checks
     */
    validate(intention: ParsedIntention): Promise<SECContext['safety']>;
    /**
     * Phase 3: TRANSLATE - Convert intention to safe action
     */
    translate(intention: ParsedIntention, safety: SECContext['safety']): Promise<SafeAction>;
    /**
     * Phase 4: FEEDBACK - Process outcome signals
     */
    feedback(action: SafeAction, signal: Partial<FeedbackSignal>): Promise<void>;
    /**
     * Full loop execution: Capture -> Validate -> Translate
     */
    process(input: RawInput): Promise<SECContext>;
    private classifyIntent;
    private assessConfidence;
    private extractGoal;
    private extractConstraints;
    private deriveGuardrails;
    private mapIntentToAction;
    private buildParameters;
    private generateId;
    private audit;
}
//# sourceMappingURL=intention-translation-loop.d.ts.map