"use strict";
/**
 * Intention-Translation Loop
 *
 * Core mechanism of ITAYN: captures user intent, validates against
 * Constitutional AI principles, translates to safe actions, and
 * provides feedback for continuous alignment.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentionTranslationLoop = void 0;
const constitutional_validator_js_1 = require("./constitutional-validator.js");
const mcp_context_js_1 = require("./mcp-context.js");
/**
 * The four-phase Intention-Translation Loop
 *
 * Phase 1: CAPTURE - Extract intention from raw input
 * Phase 2: VALIDATE - Check against Constitutional AI principles
 * Phase 3: TRANSLATE - Convert to safe, executable action
 * Phase 4: FEEDBACK - Learn from outcomes for continuous improvement
 */
class IntentionTranslationLoop {
    config;
    validator;
    contextManager;
    auditLog = [];
    constructor(config) {
        this.config = config;
        this.validator = new constitutional_validator_js_1.ConstitutionalValidator(config.constitutionalPrinciples);
        this.contextManager = new mcp_context_js_1.MCPContextManager();
    }
    /**
     * Phase 1: CAPTURE - Parse raw input into structured intention
     */
    async capture(input) {
        const startTime = new Date();
        // Extract goal and classify intent
        const category = this.classifyIntent(input.content);
        const confidence = this.assessConfidence(input.content, category);
        const goal = this.extractGoal(input.content);
        const constraints = this.extractConstraints(input.content);
        const contextFactors = await this.contextManager.getContextualFactors(input);
        const intention = {
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
    async validate(intention) {
        const assessment = await this.validator.assess(intention);
        this.audit('validate', `Safety tier: ${assessment.tier}, score: ${assessment.overallScore}`, intention.id);
        // Escalate if below threshold
        if (assessment.overallScore < this.config.escalationThreshold) {
            this.audit('validate', `Escalation triggered: score below ${this.config.escalationThreshold}`, intention.id);
        }
        return assessment;
    }
    /**
     * Phase 3: TRANSLATE - Convert intention to safe action
     */
    async translate(intention, safety) {
        const guardrails = this.deriveGuardrails(safety);
        const actionType = this.mapIntentToAction(intention.category);
        const parameters = this.buildParameters(intention, safety);
        const action = {
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
    async feedback(action, signal) {
        const feedback = {
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
    async process(input) {
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
    classifyIntent(content) {
        const lower = content.toLowerCase();
        if (lower.includes('?') || lower.includes('what') || lower.includes('how'))
            return 'informational';
        if (lower.includes('create') || lower.includes('write') || lower.includes('generate'))
            return 'creative';
        if (lower.includes('analyze') || lower.includes('compare') || lower.includes('evaluate'))
            return 'analytical';
        if (lower.includes('do') || lower.includes('execute') || lower.includes('run'))
            return 'transactional';
        return 'conversational';
    }
    assessConfidence(content, category) {
        if (category === 'ambiguous')
            return 'uncertain';
        if (content.length > 50 && content.includes(' '))
            return 'high';
        if (content.length > 20)
            return 'medium';
        return 'low';
    }
    extractGoal(content) {
        return content.trim().slice(0, 200);
    }
    extractConstraints(content) {
        const constraints = [];
        if (content.includes('safe'))
            constraints.push('safety-priority');
        if (content.includes('quick'))
            constraints.push('time-constrained');
        if (content.includes('accurate'))
            constraints.push('accuracy-priority');
        return constraints;
    }
    deriveGuardrails(safety) {
        const guardrails = [];
        if (safety.tier === 'constrained')
            guardrails.push('output-filtering', 'rate-limiting');
        if (safety.tier === 'escalated')
            guardrails.push('human-review-required', 'logging-verbose');
        if (safety.tier === 'blocked')
            guardrails.push('action-prohibited');
        return guardrails;
    }
    mapIntentToAction(category) {
        const mapping = {
            informational: 'retrieve',
            creative: 'generate',
            analytical: 'analyze',
            transactional: 'execute',
            conversational: 'respond',
            ambiguous: 'clarify',
        };
        return mapping[category];
    }
    buildParameters(intention, safety) {
        return {
            goal: intention.extractedGoal,
            constraints: intention.impliedConstraints,
            safetyTier: safety.tier,
            maxTokens: safety.tier === 'constrained' ? 500 : 2000,
        };
    }
    generateId(prefix) {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    }
    audit(stage, decision, ref) {
        this.auditLog.push({
            stage,
            timestamp: new Date(),
            decision,
            rationale: `Processing ${ref}`,
        });
    }
}
exports.IntentionTranslationLoop = IntentionTranslationLoop;
//# sourceMappingURL=intention-translation-loop.js.map