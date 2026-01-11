/**
 * COL-PROACTIVE Constitutional Validator Tests
 *
 * These tests PROVE the I1-I6 invariants work.
 */

import { describe, it, expect } from 'vitest';
import {
  ConstitutionalValidator,
  type ProofCarryingClaim,
  type InvariantCheckResult
} from './constitutional-validator.js';

describe('COL-PROACTIVE I1-I6 Gates', () => {

  describe('I1: Evidence-First Outputs', () => {
    it('accepts claims tagged as OBSERVED with evidence', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-1',
        text: 'File exists at /path/to/file.ts',
        tag: 'OBSERVED',
        evidencePointers: [{ type: 'file', reference: '/path/to/file.ts', resolved: true }]
      };

      const result = validator.validateI1(claim);
      expect(result.passed).toBe(true);
      console.log('[I1 PASS] OBSERVED claim with evidence accepted');
    });

    it('rejects OBSERVED claims without evidence', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-2',
        text: 'File exists somewhere',
        tag: 'OBSERVED',
        evidencePointers: []
      };

      const result = validator.validateI1(claim);
      expect(result.passed).toBe(false);
      expect(result.code).toBe('I1');
      console.log('[I1 FAIL] OBSERVED claim without evidence REJECTED');
    });

    it('accepts SPECULATED claims with required properties', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-3',
        text: 'This might work',
        tag: 'SPECULATED',
        evidencePointers: [],
        nonActionable: true,
        nextCheck: 'Run tests to verify'
      };

      const result = validator.validateI1(claim);
      expect(result.passed).toBe(true);
      console.log('[I1 PASS] SPECULATED claim with nonActionable and nextCheck accepted');
    });

    it('rejects SPECULATED claims without nonActionable flag', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-4',
        text: 'This might work',
        tag: 'SPECULATED',
        evidencePointers: []
      };

      const result = validator.validateI1(claim);
      expect(result.passed).toBe(false);
      expect(result.missing).toContain('NON-ACTIONABLE: true for SPECULATED claim');
      console.log('[I1 FAIL] SPECULATED claim without nonActionable REJECTED');
    });

    it('accepts INFERRED claims with premises, rule, and falsifier', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-5',
        text: 'The function is pure because it has no side effects',
        tag: 'INFERRED',
        evidencePointers: [],
        premises: ['No global state modification', 'No I/O operations'],
        inferenceRule: 'A function with no side effects is pure',
        falsifier: 'Find a side effect in the function body'
      };

      const result = validator.validateI1(claim);
      expect(result.passed).toBe(true);
      console.log('[I1 PASS] INFERRED claim with premises, rule, falsifier accepted');
    });
  });

  describe('I2: No Phantom Work', () => {
    it('rejects work claims without artifacts', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-6',
        text: 'I created the file',
        tag: 'OBSERVED',
        evidencePointers: []
      };

      const result = validator.validateI2(claim, false); // artifactExists = false
      expect(result.passed).toBe(false);
      expect(result.code).toBe('I2');
      console.log('[I2 FAIL] Phantom work claim REJECTED - no artifact proof');
    });

    it('accepts work claims with artifact evidence', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-7',
        text: 'Created file at /output/result.json',
        tag: 'OBSERVED',
        evidencePointers: [{
          type: 'file',
          reference: '/output/result.json',
          resolved: true
        }]
      };

      const result = validator.validateI2(claim, true); // artifactExists = true
      expect(result.passed).toBe(true);
      console.log('[I2 PASS] Work claim with artifact accepted');
    });

    it('accepts non-work claims without artifacts', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-8',
        text: 'The file contains JSON data',
        tag: 'OBSERVED',
        evidencePointers: []
      };

      const result = validator.validateI2(claim, false);
      expect(result.passed).toBe(true);
      console.log('[I2 PASS] Non-work claim passes without artifact');
    });
  });

  describe('I3: Confidence Requires Verification', () => {
    it('rejects high confidence without verification', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-9',
        text: 'I am definitely certain this is correct',
        tag: 'OBSERVED',
        evidencePointers: []
      };

      const result = validator.validateI3(claim, false); // hasVerificationArtifacts = false
      expect(result.passed).toBe(false);
      expect(result.code).toBe('I3');
      console.log('[I3 FAIL] High confidence without verification REJECTED');
    });

    it('accepts high confidence with verification artifacts', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-10',
        text: 'This is definitely verified by tests',
        tag: 'OBSERVED',
        evidencePointers: [{ type: 'run', reference: 'test-run-12345', resolved: true }]
      };

      const result = validator.validateI3(claim, true); // hasVerificationArtifacts = true
      expect(result.passed).toBe(true);
      console.log('[I3 PASS] High confidence with verification accepted');
    });

    it('accepts low confidence without verification', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-11',
        text: 'I think this might be right',
        tag: 'SPECULATED',
        evidencePointers: [],
        nonActionable: true,
        nextCheck: 'Run verification'
      };

      const result = validator.validateI3(claim, false);
      expect(result.passed).toBe(true);
      console.log('[I3 PASS] Low confidence claim accepted without verification');
    });
  });

  describe('I4: Traceability Is Mandatory', () => {
    it('rejects claims without trace links', () => {
      const validator = new ConstitutionalValidator();
      const result = validator.validateI4(false); // hasTraceLinks = false
      expect(result.passed).toBe(false);
      expect(result.code).toBe('I4');
      console.log('[I4 FAIL] No trace links REJECTED');
    });

    it('accepts claims with trace links', () => {
      const validator = new ConstitutionalValidator();
      const result = validator.validateI4(true); // hasTraceLinks = true
      expect(result.passed).toBe(true);
      console.log('[I4 PASS] Trace links present accepted');
    });
  });

  describe('I5: Safety Over Fluency', () => {
    it('accepts bounded verifiable statements', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-12',
        text: 'Tests passed: 47/50. Coverage: 82%',
        tag: 'OBSERVED',
        evidencePointers: [{ type: 'run', reference: 'test-run-abc', resolved: true }]
      };

      const result = validator.validateI5(claim);
      expect(result.passed).toBe(true);
      console.log('[I5 PASS] Bounded verifiable statement accepted');
    });

    it('rejects unbounded fluent narrative without evidence', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-13',
        text: 'It seems to work probably in most cases'
      } as ProofCarryingClaim; // Missing tag and evidencePointers

      const result = validator.validateI5(claim);
      expect(result.passed).toBe(false);
      expect(result.code).toBe('I5');
      console.log('[I5 FAIL] Unbounded fluent narrative REJECTED');
    });
  });

  describe('I6: Fail Closed', () => {
    it('produces structured failure output', () => {
      const validator = new ConstitutionalValidator();
      const claim: ProofCarryingClaim = {
        id: 'claim-14',
        text: 'I definitely created the work',
        tag: 'OBSERVED',
        evidencePointers: []
      };

      // Collect failures from multiple gates
      const failures: InvariantCheckResult[] = [];

      const i1Result = validator.validateI1(claim);
      if (!i1Result.passed) failures.push(i1Result);

      const i2Result = validator.validateI2(claim, false);
      if (!i2Result.passed) failures.push(i2Result);

      const i3Result = validator.validateI3(claim, false);
      if (!i3Result.passed) failures.push(i3Result);

      // Generate fail-closed output
      if (failures.length > 0) {
        const failClosedOutput = validator.generateFailClosedOutput(failures);

        console.log('\n=== FAIL CLOSED OUTPUT ===');
        console.log(`GATE FAILED: ${failClosedOutput.invariant}`);
        console.log(`WHY: ${failClosedOutput.why}`);
        console.log(`MISSING: ${failClosedOutput.missing.join(', ')}`);
        console.log(`NEXT: ${failClosedOutput.next}`);
        console.log('===========================\n');

        expect(failClosedOutput.invariant).toBeDefined();
        expect(failClosedOutput.next).toBeDefined();
      }
    });
  });

  describe('Full Pipeline Validation', () => {
    it('validates a proper claim through all gates', () => {
      const validator = new ConstitutionalValidator();
      const validClaim: ProofCarryingClaim = {
        id: 'valid-claim',
        text: '[OBSERVED] Test passed with output at /tests/results.json',
        tag: 'OBSERVED',
        evidencePointers: [
          { type: 'file', reference: '/tests/results.json', resolved: true },
          { type: 'run', reference: 'run-id-12345', resolved: true }
        ]
      };

      // Run all gate validations
      const i1Result = validator.validateI1(validClaim);
      const i2Result = validator.validateI2(validClaim, true);
      const i3Result = validator.validateI3(validClaim, true);
      const i4Result = validator.validateI4(true);
      const i5Result = validator.validateI5(validClaim);

      const allPassed = [i1Result, i2Result, i3Result, i4Result, i5Result].every(r => r.passed);

      console.log('\n=== FULL VALIDATION ===');
      console.log(`Claim: ${validClaim.text}`);
      console.log(`I1 (Evidence-First): ${i1Result.passed ? 'PASS' : 'FAIL'}`);
      console.log(`I2 (No Phantom Work): ${i2Result.passed ? 'PASS' : 'FAIL'}`);
      console.log(`I3 (Confidence Verification): ${i3Result.passed ? 'PASS' : 'FAIL'}`);
      console.log(`I4 (Traceability): ${i4Result.passed ? 'PASS' : 'FAIL'}`);
      console.log(`I5 (Safety Over Fluency): ${i5Result.passed ? 'PASS' : 'FAIL'}`);
      console.log(`Result: ${allPassed ? 'PASSED ALL GATES' : 'FAILED'}`);
      console.log('========================\n');

      expect(allPassed).toBe(true);
    });
  });
});
