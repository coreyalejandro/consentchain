"use strict";
/**
 * ITAYN - Intention Is All You Need
 *
 * A safety-first framework for AI intention alignment.
 * Core thesis: By capturing, validating, and translating user intentions
 * through Constitutional AI principles, we can build AI systems that
 * are inherently aligned with human values.
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_EXTRACTOR_CONFIG = exports.tagAsClaim = exports.createEvidenceExtractor = exports.EvidenceExtractor = exports.MCPContextManager = exports.DEFAULT_PRINCIPLES = exports.ConstitutionalValidator = exports.IntentionTranslationLoop = void 0;
exports.createITAYNProcessor = createITAYNProcessor;
// Core - Intention Translation Loop
const intention_translation_loop_js_1 = require("./core/intention-translation-loop.js");
Object.defineProperty(exports, "IntentionTranslationLoop", { enumerable: true, get: function () { return intention_translation_loop_js_1.IntentionTranslationLoop; } });
// Core - Constitutional Validator
const constitutional_validator_js_1 = require("./core/constitutional-validator.js");
Object.defineProperty(exports, "ConstitutionalValidator", { enumerable: true, get: function () { return constitutional_validator_js_1.ConstitutionalValidator; } });
Object.defineProperty(exports, "DEFAULT_PRINCIPLES", { enumerable: true, get: function () { return constitutional_validator_js_1.DEFAULT_PRINCIPLES; } });
// Core - MCP Context
var mcp_context_js_1 = require("./core/mcp-context.js");
Object.defineProperty(exports, "MCPContextManager", { enumerable: true, get: function () { return mcp_context_js_1.MCPContextManager; } });
// Core - Evidence Extractor
var evidence_extractor_js_1 = require("./core/evidence-extractor.js");
Object.defineProperty(exports, "EvidenceExtractor", { enumerable: true, get: function () { return evidence_extractor_js_1.EvidenceExtractor; } });
Object.defineProperty(exports, "createEvidenceExtractor", { enumerable: true, get: function () { return evidence_extractor_js_1.createEvidenceExtractor; } });
Object.defineProperty(exports, "tagAsClaim", { enumerable: true, get: function () { return evidence_extractor_js_1.tagAsClaim; } });
Object.defineProperty(exports, "DEFAULT_EXTRACTOR_CONFIG", { enumerable: true, get: function () { return evidence_extractor_js_1.DEFAULT_EXTRACTOR_CONFIG; } });
/**
 * Create a pre-configured ITAYN processor with sensible defaults
 */
function createITAYNProcessor(overrides) {
    const defaultConfig = {
        strictMode: true,
        defaultSafetyTier: 'monitored',
        constitutionalPrinciples: constitutional_validator_js_1.DEFAULT_PRINCIPLES,
        escalationThreshold: 0.7,
        auditLevel: 'standard',
        ...overrides,
    };
    return new intention_translation_loop_js_1.IntentionTranslationLoop(defaultConfig);
}
/**
 * Quick-start example usage
 *
 * @example
 * ```typescript
 * import { createITAYNProcessor } from '@itayn/research-mvp';
 *
 * const processor = createITAYNProcessor();
 *
 * const result = await processor.process({
 *   content: 'Help me write a safe API endpoint',
 *   timestamp: new Date(),
 *   sessionId: 'session-123',
 * });
 *
 * console.log(result.safety.tier); // 'harmless'
 * console.log(result.action.actionType); // 'generate'
 * ```
 */
//# sourceMappingURL=index.js.map