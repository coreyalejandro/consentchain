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

// Types - SEC Spec
export type {
  ConfidenceLevel,
  SafetyTier,
  IntentCategory,
  RawInput,
  ParsedIntention,
  ConstitutionalCheck,
  SafetyAssessment,
  SafeAction,
  AuditEntry,
  FeedbackSignal,
  SECContext,
  SECConfig,
} from './types/sec-spec.js';

// Core - Intention Translation Loop
import { IntentionTranslationLoop as _IntentionTranslationLoop } from './core/intention-translation-loop.js';
export { _IntentionTranslationLoop as IntentionTranslationLoop };

// Core - Constitutional Validator
import {
  ConstitutionalValidator as _ConstitutionalValidator,
  DEFAULT_PRINCIPLES as _DEFAULT_PRINCIPLES,
} from './core/constitutional-validator.js';
export { _ConstitutionalValidator as ConstitutionalValidator, _DEFAULT_PRINCIPLES as DEFAULT_PRINCIPLES };

// Core - MCP Context
export {
  MCPContextManager,
  type MCPResource,
  type MCPTool,
  type MCPServerConfig,
  type ContextFactors,
} from './core/mcp-context.js';

// Core - Evidence Extractor
export {
  EvidenceExtractor,
  createEvidenceExtractor,
  tagAsClaim,
  type ExtractionResult,
  type ExtractorConfig,
  DEFAULT_EXTRACTOR_CONFIG,
} from './core/evidence-extractor.js';

/**
 * Create a pre-configured ITAYN processor with sensible defaults
 */
export function createITAYNProcessor(overrides?: Partial<import('./types/sec-spec.js').SECConfig>) {
  const defaultConfig: import('./types/sec-spec.js').SECConfig = {
    strictMode: true,
    defaultSafetyTier: 'monitored',
    constitutionalPrinciples: _DEFAULT_PRINCIPLES,
    escalationThreshold: 0.7,
    auditLevel: 'standard',
    ...overrides,
  };

  return new _IntentionTranslationLoop(defaultConfig);
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
