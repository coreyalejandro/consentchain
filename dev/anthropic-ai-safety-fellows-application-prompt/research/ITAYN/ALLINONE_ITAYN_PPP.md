# ALLINONE_ITAYN_PPP.md
## Intention Is All You Need - Complete Project, Prompt, and Plan

**Version:** v1.0
**Date:** 2026-01-10
**Author:** Corey Alejandro
**Status:** [OBSERVED] Research MVP Complete

---

# TABLE OF CONTENTS

```
SECTION 1: EXECUTIVE SUMMARY (Lines 30-100)
SECTION 2: ZERO-SHOT BUILD INSTRUCTIONS (Lines 105-300)
SECTION 3: SEC SPEC DOCUMENTATION (Lines 305-500)
SECTION 4: INTENTION-TRANSLATION LOOP (Lines 505-700)
SECTION 5: CONSTITUTIONAL VALIDATOR (I1-I6) (Lines 705-950)
SECTION 6: MCP CONTEXT MANAGER (Lines 955-1100)
SECTION 7: USAGE EXAMPLES (Lines 1105-1300)
SECTION 8: VERIFICATION COMMANDS (Lines 1305-1400)
SECTION 9: TROUBLESHOOTING (Lines 1405-1500)
SECTION 10: APPENDIX - FULL SOURCE CODE (Lines 1505-2200)
```

---

# SECTION 1: EXECUTIVE SUMMARY

## STEP 1.1.0: What Is ITAYN?

**ITAYN (Intention Is All You Need)** is a safety-first framework for AI intention alignment. It implements the COL-PROACTIVE methodology, which treats reliability failures as safety failures.

### STEP 1.1.1: Core Thesis

```
If a system can make confident claims about reality that are false,
and users must rely on those claims to act,
then intent is irrelevant: the effect is operationally indistinguishable from malice.
```

**Therefore:** Epistemic reliability is a safety requirement, not a quality feature.

### STEP 1.1.2: The MBSE Bridge

ITAYN connects three intellectual traditions:

| Source | Role in ITAYN |
|--------|---------------|
| "Attention Is All You Need" | Allocation of verification effort |
| Constitutional AI | Enforceable behavioral policy |
| MBSE (Model-Based Systems Engineering) | Trace links: REQ → CTRL → TEST → EVID → DECISION |

### STEP 1.1.3: Key Components

```
┌─────────────────────────────────────────────────────────────────┐
│                        ITAYN Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐  │
│  │  SEC Spec   │───>│  Intention  │───>│   Constitutional    │  │
│  │   Types     │    │ Translation │    │     Validator       │  │
│  │             │    │    Loop     │    │      (I1-I6)        │  │
│  └─────────────┘    └─────────────┘    └─────────────────────┘  │
│         │                  │                      │              │
│         └──────────────────┴──────────────────────┘              │
│                            │                                     │
│                    ┌───────┴───────┐                            │
│                    │  MCP Context  │                            │
│                    │    Manager    │                            │
│                    └───────────────┘                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 1.2.0: Directory Structure

```
/Users/coreyalejandro/dev/ITAYN/
├── ALLINONE_ITAYN_PPP.md    # This file (you are here)
├── README.md                 # Project overview
├── package.json              # Node.js dependencies
├── tsconfig.json             # TypeScript configuration
├── src/
│   ├── index.ts              # Public API exports
│   ├── types/
│   │   └── sec-spec.ts       # SEC Spec type definitions
│   └── core/
│       ├── intention-translation-loop.ts
│       ├── constitutional-validator.ts
│       └── mcp-context.ts
├── dist/                     # Compiled JavaScript (after build)
└── node_modules/             # Dependencies (after install)
```

## STEP 1.3.0: Quick Start (30 Seconds)

```bash
# STEP 1.3.1: Navigate to project
cd /Users/coreyalejandro/dev/ITAYN

# STEP 1.3.2: Install dependencies
npm install

# STEP 1.3.3: Build
npm run build

# STEP 1.3.4: Verify success
ls dist/
```

**Expected Output:**
```
core      index.d.ts      index.d.ts.map  index.js        index.js.map    types
```

---

# SECTION 2: ZERO-SHOT BUILD INSTRUCTIONS

## STEP 2.1.0: Prerequisites

### STEP 2.1.1: System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Node.js | 18.0.0 | 20.x LTS |
| npm | 8.0.0 | 10.x |
| Disk Space | 100 MB | 200 MB |
| OS | macOS/Linux/Windows | Any |

### STEP 2.1.2: Verify Node.js Installation

```bash
# COMMAND: Check Node.js version
node --version

# EXPECTED OUTPUT: v18.x.x or higher
# Example: v20.10.0
```

```bash
# COMMAND: Check npm version
npm --version

# EXPECTED OUTPUT: 8.x.x or higher
# Example: 10.2.3
```

### STEP 2.1.3: If Node.js Not Installed

```bash
# OPTION A: Using Homebrew (macOS)
brew install node

# OPTION B: Using nvm (any platform)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20

# OPTION C: Direct download
# Visit: https://nodejs.org/en/download/
```

## STEP 2.2.0: Clone or Create Repository

### STEP 2.2.1: If Starting Fresh

```bash
# STEP 2.2.1.1: Create directory
mkdir -p /Users/coreyalejandro/dev/ITAYN

# STEP 2.2.1.2: Navigate to directory
cd /Users/coreyalejandro/dev/ITAYN

# STEP 2.2.1.3: Initialize git
git init
git branch -m main
```

### STEP 2.2.2: Create package.json

```bash
# COMMAND: Create package.json
cat > package.json << 'EOF'
{
  "name": "@itayn/research-mvp",
  "version": "0.1.0",
  "description": "Intention Is All You Need - Safety-Enhanced Context Specification and Intention-Translation Loop",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "vitest",
    "lint": "eslint src/**/*.ts"
  },
  "keywords": [
    "ai-safety",
    "constitutional-ai",
    "intention-alignment",
    "mcp",
    "anthropic"
  ],
  "author": "Corey Alejandro",
  "license": "MIT",
  "devDependencies": {
    "typescript": "^5.3.0",
    "vitest": "^1.0.0",
    "eslint": "^8.56.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOF
```

**Expected Output:** File created with no errors.

### STEP 2.2.3: Create tsconfig.json

```bash
# COMMAND: Create TypeScript configuration
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF
```

**Expected Output:** File created with no errors.

## STEP 2.3.0: Create Source Directory Structure

```bash
# COMMAND: Create all directories
mkdir -p src/types src/core

# VERIFY: Check structure
ls -la src/
```

**Expected Output:**
```
total 0
drwxr-xr-x  4 user  staff  128 date time .
drwxr-xr-x  5 user  staff  160 date time ..
drwxr-xr-x  2 user  staff   64 date time core
drwxr-xr-x  2 user  staff   64 date time types
```

## STEP 2.4.0: Install Dependencies

```bash
# COMMAND: Install all dependencies
npm install

# EXPECTED OUTPUT (truncated):
# added 166 packages, and audited 167 packages in Xs
# 48 packages are looking for funding
```

### STEP 2.4.1: Verify Installation

```bash
# COMMAND: Check node_modules exists
ls node_modules/ | head -5

# EXPECTED OUTPUT:
# @eslint
# @humanwhocodes
# @jest
# @jridgewell
# @nodelib
```

## STEP 2.5.0: Build the Project

```bash
# COMMAND: Compile TypeScript to JavaScript
npm run build

# EXPECTED OUTPUT:
# (silent success - no output means success)
```

### STEP 2.5.1: Verify Build Output

```bash
# COMMAND: Check dist directory contents
ls -la dist/

# EXPECTED OUTPUT:
# total 32
# drwxr-xr-x  8 user  staff   256 date time .
# drwxr-xr-x 10 user  staff   320 date time ..
# drwxr-xr-x 14 user  staff   448 date time core
# -rw-r--r--  1 user  staff  1810 date time index.d.ts
# -rw-r--r--  1 user  staff   765 date time index.d.ts.map
# -rw-r--r--  1 user  staff  2512 date time index.js
# -rw-r--r--  1 user  staff   592 date time index.js.map
# drwxr-xr-x  6 user  staff   192 date time types
```

### STEP 2.5.2: Verify Core Module Build

```bash
# COMMAND: Check core module files
ls dist/core/

# EXPECTED OUTPUT:
# constitutional-validator.d.ts
# constitutional-validator.d.ts.map
# constitutional-validator.js
# constitutional-validator.js.map
# intention-translation-loop.d.ts
# intention-translation-loop.d.ts.map
# intention-translation-loop.js
# intention-translation-loop.js.map
# mcp-context.d.ts
# mcp-context.d.ts.map
# mcp-context.js
# mcp-context.js.map
```

## STEP 2.6.0: Create Initial Commit

```bash
# COMMAND: Stage and commit all files
git add .
git commit -m "Initial commit: ITAYN Research MVP - Intention Is All You Need

Core implementation of COL-PROACTIVE methodology:
- SEC Spec (Safety-Enhanced Context Specification)
- Intention-Translation Loop (4-phase: Capture, Validate, Translate, Feedback)
- Constitutional Validator implementing I1-I6 invariants
- MCP Context Manager for Model Context Protocol integration

Evidence: TypeScript source files, package.json, tsconfig.json, README.md"

# EXPECTED OUTPUT:
# [main (root-commit) xxxxxxx] Initial commit: ITAYN Research MVP
#  8 files changed, 1383 insertions(+)
```

---

# SECTION 3: SEC SPEC DOCUMENTATION

## STEP 3.1.0: What Is SEC Spec?

**SEC Spec (Safety-Enhanced Context Specification)** defines the TypeScript interfaces for intention-aware, safety-first AI interactions.

### STEP 3.1.1: Design Philosophy

```
┌─────────────────────────────────────────────────────────────────┐
│                    SEC Spec Design Principles                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. EXPLICIT OVER IMPLICIT                                       │
│     - All state is visible                                       │
│     - No hidden assumptions                                      │
│                                                                  │
│  2. SAFETY OVER CONVENIENCE                                      │
│     - Every action requires assessment                           │
│     - No shortcuts around validation                             │
│                                                                  │
│  3. TRACEABLE OVER OPAQUE                                        │
│     - Full audit trail                                           │
│     - Every decision recorded                                    │
│                                                                  │
│  4. BOUNDED OVER FLUENT                                          │
│     - Confidence has limits                                      │
│     - Uncertainty is explicit                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 3.2.0: Type Definitions

### STEP 3.2.1: Confidence Levels

```typescript
/**
 * Confidence level for intention classification
 *
 * USAGE: Indicates how certain the system is about its classification
 *
 * VALUES:
 * - 'high'      : Strong indicators, multiple confirming signals
 * - 'medium'    : Some indicators, may need clarification
 * - 'low'       : Weak indicators, likely needs clarification
 * - 'uncertain' : Cannot classify with any confidence
 */
export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'uncertain';
```

### STEP 3.2.2: Safety Tiers

```typescript
/**
 * Safety classification tiers aligned with Constitutional AI
 *
 * USAGE: Determines what guardrails and actions are appropriate
 *
 * TIER MATRIX:
 * ┌───────────────┬─────────────────────┬─────────────────────────┐
 * │ Tier          │ Description         │ Action                  │
 * ├───────────────┼─────────────────────┼─────────────────────────┤
 * │ harmless      │ No potential harm   │ Proceed normally        │
 * │ monitored     │ Low risk            │ Proceed with logging    │
 * │ constrained   │ Medium risk         │ Apply output filters    │
 * │ escalated     │ High risk           │ Require human review    │
 * │ blocked       │ Prohibited          │ Refuse request          │
 * └───────────────┴─────────────────────┴─────────────────────────┘
 */
export type SafetyTier =
  | 'harmless'
  | 'monitored'
  | 'constrained'
  | 'escalated'
  | 'blocked';
```

### STEP 3.2.3: Intent Categories

```typescript
/**
 * Intent category taxonomy
 *
 * USAGE: Classifies the type of user intention for appropriate handling
 *
 * CATEGORIES:
 * - informational  : User is seeking knowledge/answers
 * - creative       : User wants to generate content
 * - analytical     : User wants processing/reasoning/comparison
 * - transactional  : User wants to execute actions
 * - conversational : User wants social interaction
 * - ambiguous      : Cannot determine intent; requires clarification
 */
export type IntentCategory =
  | 'informational'
  | 'creative'
  | 'analytical'
  | 'transactional'
  | 'conversational'
  | 'ambiguous';
```

## STEP 3.3.0: Core Interfaces

### STEP 3.3.1: RawInput

```typescript
/**
 * Raw user input before processing
 *
 * FIELDS:
 * - content   : The actual user message/request
 * - timestamp : When the input was received
 * - sessionId : Unique identifier for the session
 * - metadata  : Optional additional context
 */
export interface RawInput {
  readonly content: string;
  readonly timestamp: Date;
  readonly sessionId: string;
  readonly metadata?: Record<string, unknown>;
}
```

### STEP 3.3.2: ParsedIntention

```typescript
/**
 * Parsed intention from user input
 *
 * FIELDS:
 * - id                : Unique identifier for this intention
 * - rawInput          : Original input that was parsed
 * - category          : Classified intent type
 * - confidence        : How confident we are in classification
 * - extractedGoal     : What the user wants to achieve
 * - impliedConstraints: Constraints derived from the input
 * - contextualFactors : Environmental/session context
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
```

### STEP 3.3.3: ConstitutionalCheck

```typescript
/**
 * Constitutional AI validation result
 *
 * FIELDS:
 * - principle        : Which constitutional principle was checked
 * - passed           : Whether the check passed
 * - reasoning        : Explanation of the result
 * - suggestedRevision: How to fix if failed
 */
export interface ConstitutionalCheck {
  readonly principle: string;
  readonly passed: boolean;
  readonly reasoning: string;
  readonly suggestedRevision?: string;
}
```

### STEP 3.3.4: SafetyAssessment

```typescript
/**
 * Safety assessment output
 *
 * FIELDS:
 * - tier                   : Overall safety classification
 * - constitutionalChecks   : Results of all principle checks
 * - overallScore           : Numeric score (0-1, higher = safer)
 * - flaggedConcerns        : List of identified concerns
 * - mitigationSuggestions  : How to address concerns
 */
export interface SafetyAssessment {
  readonly tier: SafetyTier;
  readonly constitutionalChecks: ConstitutionalCheck[];
  readonly overallScore: number;
  readonly flaggedConcerns: string[];
  readonly mitigationSuggestions: string[];
}
```

### STEP 3.3.5: SafeAction

```typescript
/**
 * Translated safe action ready for execution
 *
 * FIELDS:
 * - id                : Unique identifier for this action
 * - originalIntention : The intention this was derived from
 * - safetyAssessment  : Safety evaluation results
 * - actionType        : What type of action to take
 * - parameters        : Parameters for the action
 * - guardrails        : Active safety guardrails
 * - auditTrail        : Full audit history
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
```

### STEP 3.3.6: AuditEntry

```typescript
/**
 * Audit trail entry for transparency
 *
 * FIELDS:
 * - stage     : Which processing stage (parse/validate/translate/execute/feedback)
 * - timestamp : When this entry was created
 * - decision  : What decision was made
 * - rationale : Why that decision was made
 */
export interface AuditEntry {
  readonly stage: 'parse' | 'validate' | 'translate' | 'execute' | 'feedback';
  readonly timestamp: Date;
  readonly decision: string;
  readonly rationale: string;
}
```

### STEP 3.3.7: FeedbackSignal

```typescript
/**
 * Feedback loop output for continuous improvement
 *
 * FIELDS:
 * - actionId         : Which action this feedback is for
 * - userSatisfaction : Rating from user (1-5)
 * - safetyIncident   : Whether a safety incident occurred
 * - corrections      : What corrections were needed
 * - learningSignals  : Signals for learning/improvement
 */
export interface FeedbackSignal {
  readonly actionId: string;
  readonly userSatisfaction?: number;
  readonly safetyIncident: boolean;
  readonly corrections: string[];
  readonly learningSignals: string[];
}
```

### STEP 3.3.8: SECContext

```typescript
/**
 * Complete SEC Context - the full safety-enhanced context object
 *
 * This is the main output of the ITAYN processor.
 *
 * FIELDS:
 * - version   : SEC Spec version
 * - sessionId : Session identifier
 * - intention : Parsed user intention
 * - safety    : Safety assessment results
 * - action    : Translated safe action
 * - feedback  : Optional feedback from execution
 */
export interface SECContext {
  readonly version: '1.0.0';
  readonly sessionId: string;
  readonly intention: ParsedIntention;
  readonly safety: SafetyAssessment;
  readonly action: SafeAction;
  readonly feedback?: FeedbackSignal;
}
```

### STEP 3.3.9: SECConfig

```typescript
/**
 * Configuration for the SEC processor
 *
 * FIELDS:
 * - strictMode              : Enforce all checks (true) or permissive (false)
 * - defaultSafetyTier       : Default tier when uncertain
 * - constitutionalPrinciples: Principles to check against
 * - escalationThreshold     : Score below which to escalate
 * - auditLevel              : How much to log (minimal/standard/verbose)
 */
export interface SECConfig {
  readonly strictMode: boolean;
  readonly defaultSafetyTier: SafetyTier;
  readonly constitutionalPrinciples: string[];
  readonly escalationThreshold: number;
  readonly auditLevel: 'minimal' | 'standard' | 'verbose';
}
```

---

# SECTION 4: INTENTION-TRANSLATION LOOP

## STEP 4.1.0: Overview

The Intention-Translation Loop is the core mechanism of ITAYN. It processes user intent through four phases:

```
┌─────────────────────────────────────────────────────────────────┐
│              THE FOUR-PHASE INTENTION-TRANSLATION LOOP          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  │   PHASE 1   │───>│   PHASE 2   │───>│   PHASE 3   │───>│   PHASE 4   │
│  │   CAPTURE   │    │  VALIDATE   │    │  TRANSLATE  │    │  FEEDBACK   │
│  │             │    │             │    │             │    │             │
│  │ Parse raw   │    │ Check vs    │    │ Convert to  │    │ Learn from  │
│  │ input into  │    │ Const. AI   │    │ safe action │    │ outcomes    │
│  │ intention   │    │ principles  │    │ w/ guards   │    │             │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
│        │                  │                  │                  │
│        ▼                  ▼                  ▼                  ▼
│  ParsedIntention   SafetyAssessment    SafeAction        FeedbackSignal
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 4.2.0: Phase 1 - CAPTURE

### STEP 4.2.1: Purpose

Transform raw user input into a structured ParsedIntention object.

### STEP 4.2.2: Process Flow

```
INPUT: RawInput
   │
   ├──> classifyIntent()     → Determine IntentCategory
   │
   ├──> assessConfidence()   → Determine ConfidenceLevel
   │
   ├──> extractGoal()        → Extract what user wants
   │
   ├──> extractConstraints() → Extract implied constraints
   │
   └──> getContextualFactors() → Get session/environment context
   │
OUTPUT: ParsedIntention
```

### STEP 4.2.3: Intent Classification Rules

```typescript
/**
 * CLASSIFICATION ALGORITHM:
 *
 * IF content contains "?" OR "what" OR "how"
 *    → 'informational'
 *
 * ELSE IF content contains "create" OR "write" OR "generate"
 *    → 'creative'
 *
 * ELSE IF content contains "analyze" OR "compare" OR "evaluate"
 *    → 'analytical'
 *
 * ELSE IF content contains "do" OR "execute" OR "run"
 *    → 'transactional'
 *
 * ELSE
 *    → 'conversational'
 */
```

### STEP 4.2.4: Confidence Assessment Rules

```typescript
/**
 * CONFIDENCE ALGORITHM:
 *
 * IF category === 'ambiguous'
 *    → 'uncertain'
 *
 * ELSE IF content.length > 50 AND contains spaces
 *    → 'high'
 *
 * ELSE IF content.length > 20
 *    → 'medium'
 *
 * ELSE
 *    → 'low'
 */
```

## STEP 4.3.0: Phase 2 - VALIDATE

### STEP 4.3.1: Purpose

Run the parsed intention through Constitutional AI checks to determine safety tier.

### STEP 4.3.2: Process Flow

```
INPUT: ParsedIntention
   │
   ├──> runAllChecks()       → Check all I1-I6 invariants
   │
   ├──> determineTier()      → Calculate safety tier
   │
   ├──> calculateScore()     → Calculate overall score
   │
   ├──> extractConcerns()    → Identify flagged concerns
   │
   └──> suggestMitigations() → Propose fixes
   │
OUTPUT: SafetyAssessment
```

### STEP 4.3.3: Tier Determination Matrix

```
┌────────────────────┬─────────────────────────────────────────┐
│ Failed Checks      │ Resulting Tier                          │
├────────────────────┼─────────────────────────────────────────┤
│ 0                  │ 'harmless'                              │
│ 1                  │ 'monitored'                             │
│ 2                  │ 'constrained'                           │
│ 3                  │ 'escalated'                             │
│ 4+                 │ 'blocked'                               │
└────────────────────┴─────────────────────────────────────────┘
```

## STEP 4.4.0: Phase 3 - TRANSLATE

### STEP 4.4.1: Purpose

Convert the validated intention into a SafeAction with appropriate guardrails.

### STEP 4.4.2: Process Flow

```
INPUT: ParsedIntention + SafetyAssessment
   │
   ├──> deriveGuardrails()   → Determine needed guardrails
   │
   ├──> mapIntentToAction()  → Map category to action type
   │
   └──> buildParameters()    → Build action parameters
   │
OUTPUT: SafeAction
```

### STEP 4.4.3: Intent-to-Action Mapping

```typescript
/**
 * ACTION TYPE MAPPING:
 *
 * 'informational'  → 'retrieve'
 * 'creative'       → 'generate'
 * 'analytical'     → 'analyze'
 * 'transactional'  → 'execute'
 * 'conversational' → 'respond'
 * 'ambiguous'      → 'clarify'
 */
```

### STEP 4.4.4: Guardrail Assignment

```typescript
/**
 * GUARDRAIL ASSIGNMENT:
 *
 * IF tier === 'constrained'
 *    ADD: 'output-filtering', 'rate-limiting'
 *
 * IF tier === 'escalated'
 *    ADD: 'human-review-required', 'logging-verbose'
 *
 * IF tier === 'blocked'
 *    ADD: 'action-prohibited'
 */
```

## STEP 4.5.0: Phase 4 - FEEDBACK

### STEP 4.5.1: Purpose

Process outcome signals to enable continuous improvement.

### STEP 4.5.2: Process Flow

```
INPUT: SafeAction + FeedbackSignal
   │
   ├──> Record feedback
   │
   ├──> Log audit entry
   │
   └──> incorporateLearning() → Update validator with signals
   │
OUTPUT: (void - updates internal state)
```

### STEP 4.5.3: Learning Signal Processing

```typescript
/**
 * LEARNING SIGNALS:
 *
 * 1. Record all signals to learnings array
 * 2. Add incident log entry for traceability (I4)
 * 3. Flag safety incidents for review
 * 4. Store corrections for future reference
 */
```

---

# SECTION 5: CONSTITUTIONAL VALIDATOR (I1-I6)

## STEP 5.1.0: The Six Non-Negotiable Invariants

The Constitutional Validator implements the PROACTIVE AI Constitution's six invariants:

```
┌─────────────────────────────────────────────────────────────────┐
│                 THE SIX NON-NEGOTIABLE INVARIANTS               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  I1: Evidence-First Outputs                                      │
│      Every claim must carry epistemic tag + evidence             │
│                                                                  │
│  I2: No Phantom Work                                             │
│      Cannot claim work unless artifact exists                    │
│                                                                  │
│  I3: Confidence Requires Verification                            │
│      High confidence only with verification artifacts            │
│                                                                  │
│  I4: Traceability Is Mandatory                                   │
│      REQ → CTRL → TEST → EVID → DECISION linked                  │
│                                                                  │
│  I5: Safety Over Fluency                                         │
│      Bounded statements over fluent narrative                    │
│                                                                  │
│  I6: Fail Closed                                                 │
│      Stop and surface failure; do not work around                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 5.2.0: Epistemic Tags

### STEP 5.2.1: Tag Definitions

```typescript
/**
 * Epistemic tags for proof-carrying claims (I1)
 *
 * OBSERVED:
 * - Directly supported by evidence
 * - REQUIRES: Evidence pointers
 * - Example: "File exists at /path/to/file" [OBSERVED]
 *
 * INFERRED:
 * - Derived from observed facts via reasoning
 * - REQUIRES: Premises, inference rule, falsifier
 * - Example: "Build succeeded because tests passed" [INFERRED]
 *
 * SPECULATED:
 * - Hypothesis; explicitly non-authoritative
 * - REQUIRES: NON-ACTIONABLE marker, Next Check
 * - Example: "This might fix the issue" [SPECULATED]
 */
export type EpistemicTag = 'OBSERVED' | 'INFERRED' | 'SPECULATED';
```

### STEP 5.2.2: Evidence Pointer Structure

```typescript
/**
 * Evidence pointer types (I1)
 *
 * TYPES:
 * - 'file' : Points to a file path
 * - 'tool' : Points to a tool output
 * - 'run'  : Points to an execution run ID
 * - 'hash' : Points to a content hash
 * - 'url'  : Points to a URL
 */
export interface EvidencePointer {
  type: 'file' | 'tool' | 'run' | 'hash' | 'url';
  reference: string;
  resolved?: boolean;
  resolutionDetail?: string;
}
```

## STEP 5.3.0: I1 - Evidence-First Outputs

### STEP 5.3.1: Validation Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                    I1 VALIDATION RULES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ALL CLAIMS:                                                     │
│  ✓ Must have epistemic tag                                       │
│                                                                  │
│  OBSERVED CLAIMS:                                                │
│  ✓ Must have evidence pointers                                   │
│  ✓ Evidence must be resolvable                                   │
│                                                                  │
│  INFERRED CLAIMS:                                                │
│  ✓ Must have premises                                            │
│  ✓ Must have inference rule                                      │
│  ✓ Must have falsifier (what would disprove this)                │
│                                                                  │
│  SPECULATED CLAIMS:                                              │
│  ✓ Must be marked NON-ACTIONABLE                                 │
│  ✓ Must have Next Check defined                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### STEP 5.3.2: Code Implementation

```typescript
validateI1(claim: ProofCarryingClaim): InvariantCheckResult {
  const missing: string[] = [];

  // Must have epistemic tag
  if (!claim.tag) {
    missing.push('epistemic tag (OBSERVED | INFERRED | SPECULATED)');
  }

  // OBSERVED claims must have evidence pointers
  if (claim.tag === 'OBSERVED') {
    if (!claim.evidencePointers || claim.evidencePointers.length === 0) {
      missing.push('evidence pointer(s) for OBSERVED claim');
    }
  }

  // INFERRED claims must have premises, rule, and falsifier
  if (claim.tag === 'INFERRED') {
    if (!claim.premises || claim.premises.length === 0) {
      missing.push('premises for INFERRED claim');
    }
    if (!claim.inferenceRule) {
      missing.push('inference rule for INFERRED claim');
    }
    if (!claim.falsifier) {
      missing.push('falsifier for INFERRED claim');
    }
  }

  // SPECULATED claims must be marked non-actionable
  if (claim.tag === 'SPECULATED') {
    if (!claim.nonActionable) {
      missing.push('NON-ACTIONABLE: true for SPECULATED claim');
    }
    if (!claim.nextCheck) {
      missing.push('Next Check for SPECULATED claim');
    }
  }

  return {
    invariant: 'Evidence-First Outputs',
    code: 'I1',
    passed: missing.length === 0,
    reasoning: missing.length === 0
      ? 'Claim is properly tagged with required evidence'
      : `Missing required elements: ${missing.join(', ')}`,
    missing,
  };
}
```

## STEP 5.4.0: I2 - No Phantom Work

### STEP 5.4.1: Validation Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                    I2 VALIDATION RULES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PHANTOM WORK INDICATORS (trigger check):                        │
│  - "created"                                                     │
│  - "ran"                                                         │
│  - "executed"                                                    │
│  - "built"                                                       │
│  - "deployed"                                                    │
│  - "pushed"                                                      │
│  - "committed"                                                   │
│  - "tested"                                                      │
│  - "validated"                                                   │
│                                                                  │
│  IF claim contains indicator AND artifact does not exist:        │
│  ✗ FAIL - Phantom work detected                                  │
│                                                                  │
│  REQUIRED FOR ARTIFACT CLAIMS:                                   │
│  ✓ Artifact path                                                 │
│  ✓ Retrieval method                                              │
│  ✓ Integrity hash                                                │
│  ✓ Provenance (run-id)                                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### STEP 5.4.2: Code Implementation

```typescript
validateI2(claim: ProofCarryingClaim, artifactExists: boolean): InvariantCheckResult {
  const executionPatterns = [
    'created', 'ran', 'executed', 'built', 'deployed',
    'pushed', 'committed', 'tested', 'validated',
  ];

  const claimsExecution = executionPatterns.some((pattern) =>
    claim.text.toLowerCase().includes(pattern)
  );

  if (claimsExecution && !artifactExists) {
    return {
      invariant: 'No Phantom Work',
      code: 'I2',
      passed: false,
      reasoning: 'Claim asserts work occurred but no artifact exists',
      missing: ['artifact path', 'retrieval method', 'integrity hash', 'provenance'],
      suggestedAction: 'Produce the artifact or remove the claim',
    };
  }

  return {
    invariant: 'No Phantom Work',
    code: 'I2',
    passed: true,
    reasoning: 'No phantom work detected',
  };
}
```

## STEP 5.5.0: I3 - Confidence Requires Verification

### STEP 5.5.1: Validation Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                    I3 VALIDATION RULES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  HIGH CONFIDENCE INDICATORS (trigger check):                     │
│  - "definitely"                                                  │
│  - "certainly"                                                   │
│  - "absolutely"                                                  │
│  - "guaranteed"                                                  │
│  - "confirmed"                                                   │
│  - "verified"                                                    │
│  - "proven"                                                      │
│                                                                  │
│  IF claim contains high confidence AND no verification:          │
│  ✗ FAIL - Unbounded confidence                                   │
│                                                                  │
│  VERIFICATION ARTIFACTS:                                         │
│  - Test results                                                  │
│  - Logs                                                          │
│  - Citations                                                     │
│  - Hashes                                                        │
│  - Eval reports                                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### STEP 5.5.2: Code Implementation

```typescript
validateI3(claim: ProofCarryingClaim, hasVerificationArtifacts: boolean): InvariantCheckResult {
  const highConfidencePatterns = [
    'definitely', 'certainly', 'absolutely', 'guaranteed',
    'confirmed', 'verified', 'proven',
  ];

  const claimsHighConfidence = highConfidencePatterns.some((pattern) =>
    claim.text.toLowerCase().includes(pattern)
  );

  if (claimsHighConfidence && !hasVerificationArtifacts) {
    return {
      invariant: 'Confidence Requires Verification',
      code: 'I3',
      passed: false,
      reasoning: 'High confidence claim without verification artifacts',
      missing: ['verification artifacts (tests, logs, citations, hashes, eval reports)'],
      suggestedAction: 'Cap confidence or provide verification artifacts',
    };
  }

  return {
    invariant: 'Confidence Requires Verification',
    code: 'I3',
    passed: true,
    reasoning: 'Confidence appropriately bounded to verification',
  };
}
```

## STEP 5.6.0: I4 - Traceability Is Mandatory

### STEP 5.6.1: Validation Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                    I4 VALIDATION RULES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED TRACE CHAIN:                                           │
│                                                                  │
│  REQUIREMENT ──> CONTROL ──> TEST ──> EVIDENCE ──> DECISION      │
│       │              │          │          │            │        │
│       └──────────────┴──────────┴──────────┴────────────┘        │
│                    (all links must exist)                        │
│                                                                  │
│  IF any link missing:                                            │
│  ✗ FAIL - Incomplete traceability                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### STEP 5.6.2: Code Implementation

```typescript
validateI4(hasTraceLinks: boolean): InvariantCheckResult {
  if (!hasTraceLinks) {
    return {
      invariant: 'Traceability Is Mandatory',
      code: 'I4',
      passed: false,
      reasoning: 'Missing trace links: REQ → CTRL → TEST → EVID → DECISION',
      missing: ['requirement link', 'control link', 'test link', 'evidence link'],
      suggestedAction: 'Establish trace links before release',
    };
  }

  return {
    invariant: 'Traceability Is Mandatory',
    code: 'I4',
    passed: true,
    reasoning: 'Traceability chain complete',
  };
}
```

## STEP 5.7.0: I5 - Safety Over Fluency

### STEP 5.7.1: Validation Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                    I5 VALIDATION RULES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FLUENT UNBOUNDED INDICATORS (trigger check):                    │
│  - "probably"                                                    │
│  - "might"                                                       │
│  - "could"                                                       │
│  - "perhaps"                                                     │
│  - "it seems"                                                    │
│  - "appears to"                                                  │
│                                                                  │
│  IF output contains fluent language WITHOUT bounded structure:   │
│  ✗ FAIL - Fluent but ungrounded                                  │
│                                                                  │
│  BOUNDED OUTPUT REQUIRES:                                        │
│  ✓ Epistemic tag                                                 │
│  ✓ Evidence pointers OR explicit uncertainty marker              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### STEP 5.7.2: Code Implementation

```typescript
validateI5(claim: ProofCarryingClaim): InvariantCheckResult {
  const hasBoundedOutput = claim.tag !== undefined && claim.evidencePointers !== undefined;

  const fluentUnboundedPatterns = [
    'probably', 'might', 'could', 'perhaps', 'it seems', 'appears to',
  ];

  const isUnboundedNarrative =
    !hasBoundedOutput &&
    fluentUnboundedPatterns.some((pattern) =>
      claim.text.toLowerCase().includes(pattern)
    );

  if (isUnboundedNarrative) {
    return {
      invariant: 'Safety Over Fluency',
      code: 'I5',
      passed: false,
      reasoning: 'Fluent narrative without bounded, verifiable structure',
      suggestedAction: 'Convert to bounded statement with epistemic tag and evidence',
    };
  }

  return {
    invariant: 'Safety Over Fluency',
    code: 'I5',
    passed: true,
    reasoning: 'Output is bounded and verifiable',
  };
}
```

## STEP 5.8.0: I6 - Fail Closed

### STEP 5.8.1: Validation Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                    I6 VALIDATION RULES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  IF any invariant (I1-I5) fails:                                 │
│                                                                  │
│  1. STOP immediately                                             │
│  2. NAME the failed invariant                                    │
│  3. ENUMERATE what is missing                                    │
│  4. DO NOT continue or work around                               │
│                                                                  │
│  OUTPUT FORMAT:                                                  │
│  {                                                               │
│    "invariant": "I6 FAIL: [code] ([name])",                      │
│    "why": "[reasoning from failed check]",                       │
│    "missing": ["item1", "item2", ...],                           │
│    "next": "[suggested action]"                                  │
│  }                                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### STEP 5.8.2: Code Implementation

```typescript
generateFailClosedOutput(failedChecks: InvariantCheckResult[]): FailClosedOutput {
  const firstFailure = failedChecks[0];

  return {
    invariant: `I6 FAIL: ${firstFailure.code} (${firstFailure.invariant})`,
    why: firstFailure.reasoning,
    missing: firstFailure.missing ?? [],
    next: firstFailure.suggestedAction ?? 'Provide missing elements to proceed',
  };
}
```

---

# SECTION 6: MCP CONTEXT MANAGER

## STEP 6.1.0: What Is MCP?

**MCP (Model Context Protocol)** is Anthropic's protocol for structured context sharing between AI systems and tools. The MCP Context Manager bridges ITAYN with the broader MCP ecosystem.

### STEP 6.1.1: MCP Resource Structure

```typescript
/**
 * MCP Resource representation
 *
 * FIELDS:
 * - uri         : Unique identifier for the resource
 * - name        : Human-readable name
 * - description : What the resource provides
 * - mimeType    : Content type
 */
export interface MCPResource {
  readonly uri: string;
  readonly name: string;
  readonly description?: string;
  readonly mimeType?: string;
}
```

### STEP 6.1.2: MCP Tool Structure

```typescript
/**
 * MCP Tool definition
 *
 * FIELDS:
 * - name        : Tool identifier
 * - description : What the tool does
 * - inputSchema : JSON Schema for inputs
 */
export interface MCPTool {
  readonly name: string;
  readonly description: string;
  readonly inputSchema: Record<string, unknown>;
}
```

## STEP 6.2.0: Default Resources

The MCP Context Manager initializes with these default resources:

```
┌─────────────────────────────────────────────────────────────────┐
│                      DEFAULT MCP RESOURCES                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  URI: itayn://principles/constitutional                          │
│  Name: Constitutional AI Principles                              │
│  Description: Core safety principles for intention validation    │
│                                                                  │
│  URI: itayn://context/session                                    │
│  Name: Session Context                                           │
│  Description: Current session state and history                  │
│                                                                  │
│  URI: itayn://safety/tiers                                       │
│  Name: Safety Tier Definitions                                   │
│  Description: Definitions and thresholds for safety tiers        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 6.3.0: Default Tools

The MCP Context Manager initializes with these default tools:

```
┌─────────────────────────────────────────────────────────────────┐
│                       DEFAULT MCP TOOLS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TOOL: validate_intention                                        │
│  Description: Validate a parsed intention against principles     │
│  Input: { intention: ParsedIntention }                           │
│                                                                  │
│  TOOL: translate_to_action                                       │
│  Description: Translate a validated intention into safe action   │
│  Input: { intention: object, safetyAssessment: object }          │
│                                                                  │
│  TOOL: submit_feedback                                           │
│  Description: Submit feedback signal for learning                │
│  Input: { actionId: string, satisfaction?: number }              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 6.4.0: Context Factor Extraction

### STEP 6.4.1: How Contextual Factors Are Generated

```typescript
/**
 * Context factors are extracted from:
 *
 * 1. SESSION CONTEXT
 *    - session-depth:N (how many interactions in session)
 *
 * 2. AVAILABLE TOOLS
 *    - tool-available:toolname (if input mentions tool)
 *
 * 3. AVAILABLE RESOURCES
 *    - resource-available:resourcename (if input mentions resource)
 */
async getContextualFactors(input: RawInput): Promise<string[]> {
  const factors: string[] = [];

  // Add session context
  if (this.sessionHistory.length > 0) {
    factors.push(`session-depth:${this.sessionHistory.length}`);
  }

  // Add available tool context
  const relevantTools = this.findRelevantTools(input.content);
  factors.push(...relevantTools.map((t) => `tool-available:${t}`));

  // Add resource context
  const relevantResources = this.findRelevantResources(input.content);
  factors.push(...relevantResources.map((r) => `resource-available:${r}`));

  // Track in session history
  this.sessionHistory.push(input.content.slice(0, 100));

  return factors;
}
```

---

# SECTION 7: USAGE EXAMPLES

## STEP 7.1.0: Basic Usage

### STEP 7.1.1: Import and Create Processor

```typescript
// FILE: example-basic.ts

import { createITAYNProcessor } from '@itayn/research-mvp';

// STEP 1: Create processor with default configuration
const processor = createITAYNProcessor();

// STEP 2: Process an input
const result = await processor.process({
  content: 'Help me write a safe API endpoint',
  timestamp: new Date(),
  sessionId: 'session-123',
});

// STEP 3: Examine results
console.log('Safety Tier:', result.safety.tier);
// EXPECTED: 'harmless'

console.log('Action Type:', result.action.actionType);
// EXPECTED: 'generate'

console.log('Guardrails:', result.action.guardrails);
// EXPECTED: []
```

### STEP 7.1.2: Run the Example

```bash
# COMMAND: Create and run example
cat > /tmp/example-basic.ts << 'EOF'
import { createITAYNProcessor } from '/Users/coreyalejandro/dev/ITAYN/dist/index.js';

async function main() {
  const processor = createITAYNProcessor();

  const result = await processor.process({
    content: 'Help me write a safe API endpoint',
    timestamp: new Date(),
    sessionId: 'session-123',
  });

  console.log('Safety Tier:', result.safety.tier);
  console.log('Action Type:', result.action.actionType);
  console.log('Guardrails:', result.action.guardrails);
}

main().catch(console.error);
EOF

# Run with Node.js
node --experimental-specifier-resolution=node /tmp/example-basic.ts
```

## STEP 7.2.0: Custom Configuration

### STEP 7.2.1: Strict Mode Configuration

```typescript
// FILE: example-strict.ts

import { createITAYNProcessor } from '@itayn/research-mvp';

// Create processor with strict configuration
const processor = createITAYNProcessor({
  strictMode: true,
  defaultSafetyTier: 'monitored',
  escalationThreshold: 0.8,  // Higher threshold
  auditLevel: 'verbose',
});

const result = await processor.process({
  content: 'Execute this potentially risky operation',
  timestamp: new Date(),
  sessionId: 'strict-session',
});

// With strict mode, this will likely be escalated
console.log('Safety Tier:', result.safety.tier);
// EXPECTED: 'escalated' or 'constrained'
```

### STEP 7.2.2: Custom Principles

```typescript
// FILE: example-custom-principles.ts

import { createITAYNProcessor } from '@itayn/research-mvp';

// Create processor with custom constitutional principles
const processor = createITAYNProcessor({
  constitutionalPrinciples: [
    'I1: Evidence-First Outputs',
    'I2: No Phantom Work',
    'I3: Confidence Requires Verification',
    'I4: Traceability Is Mandatory',
    'I5: Safety Over Fluency',
    'I6: Fail Closed',
    // Add custom principles
    'CUSTOM-1: All API calls must be logged',
    'CUSTOM-2: No PII in outputs',
  ],
});

const result = await processor.process({
  content: 'Create a user profile with email address',
  timestamp: new Date(),
  sessionId: 'custom-session',
});

console.log('Constitutional Checks:', result.safety.constitutionalChecks);
```

## STEP 7.3.0: Using Individual Components

### STEP 7.3.1: Constitutional Validator Direct Usage

```typescript
// FILE: example-validator.ts

import { ConstitutionalValidator, DEFAULT_PRINCIPLES } from '@itayn/research-mvp';

// Create validator directly
const validator = new ConstitutionalValidator(DEFAULT_PRINCIPLES);

// Create a mock intention
const intention = {
  id: 'INT-123',
  rawInput: {
    content: 'Write documentation',
    timestamp: new Date(),
    sessionId: 'session-1',
  },
  category: 'creative' as const,
  confidence: 'high' as const,
  extractedGoal: 'Write documentation',
  impliedConstraints: ['accuracy-priority'],
  contextualFactors: [],
};

// Assess the intention
const assessment = await validator.assess(intention);

console.log('Tier:', assessment.tier);
console.log('Score:', assessment.overallScore);
console.log('Concerns:', assessment.flaggedConcerns);
```

### STEP 7.3.2: Validating Individual Invariants

```typescript
// FILE: example-invariants.ts

import { ConstitutionalValidator } from '@itayn/research-mvp';

const validator = new ConstitutionalValidator();

// Test I1 - Evidence-First Outputs
const claim = {
  id: 'claim-1',
  text: 'The file was created successfully',
  tag: 'OBSERVED' as const,
  evidencePointers: [
    { type: 'file' as const, reference: '/path/to/file.txt', resolved: true },
  ],
};

const i1Result = validator.validateI1(claim);
console.log('I1 Passed:', i1Result.passed);
// EXPECTED: true (has tag and evidence)

// Test I2 - No Phantom Work
const phantomClaim = {
  id: 'claim-2',
  text: 'I created the database schema',
  tag: 'OBSERVED' as const,
};

const i2Result = validator.validateI2(phantomClaim, false);  // No artifact exists
console.log('I2 Passed:', i2Result.passed);
// EXPECTED: false (claims work but no artifact)

// Test I3 - Confidence Requires Verification
const confidentClaim = {
  id: 'claim-3',
  text: 'This is definitely correct',
  tag: 'OBSERVED' as const,
};

const i3Result = validator.validateI3(confidentClaim, false);  // No verification
console.log('I3 Passed:', i3Result.passed);
// EXPECTED: false (high confidence without verification)
```

## STEP 7.4.0: MCP Context Manager Usage

### STEP 7.4.1: Register Custom Resources

```typescript
// FILE: example-mcp.ts

import { MCPContextManager } from '@itayn/research-mvp';

// Create manager
const contextManager = new MCPContextManager();

// Register custom resource
contextManager.registerResource({
  uri: 'custom://data/users',
  name: 'User Database',
  description: 'Access to user data',
  mimeType: 'application/json',
});

// List all resources
const resources = contextManager.listResources();
console.log('Available Resources:', resources.map(r => r.name));
// EXPECTED: ['Constitutional AI Principles', 'Session Context',
//            'Safety Tier Definitions', 'User Database']
```

### STEP 7.4.2: Register Custom Tools

```typescript
// FILE: example-mcp-tools.ts

import { MCPContextManager } from '@itayn/research-mvp';

const contextManager = new MCPContextManager();

// Register custom tool
contextManager.registerTool({
  name: 'analyze_code',
  description: 'Analyze code for security vulnerabilities',
  inputSchema: {
    type: 'object',
    properties: {
      code: { type: 'string', description: 'Code to analyze' },
      language: { type: 'string', description: 'Programming language' },
    },
    required: ['code'],
  },
});

// List all tools
const tools = contextManager.listTools();
console.log('Available Tools:', tools.map(t => t.name));
// EXPECTED: ['validate_intention', 'translate_to_action',
//            'submit_feedback', 'analyze_code']
```

## STEP 7.5.0: Full Processing Pipeline

### STEP 7.5.1: Complete Example with Feedback

```typescript
// FILE: example-full-pipeline.ts

import { createITAYNProcessor } from '@itayn/research-mvp';

async function fullPipeline() {
  const processor = createITAYNProcessor({
    strictMode: true,
    auditLevel: 'verbose',
  });

  // STEP 1: Process input
  const input = {
    content: 'Help me analyze this security audit report and suggest improvements',
    timestamp: new Date(),
    sessionId: 'audit-session-001',
    metadata: {
      source: 'security-team',
      priority: 'high',
    },
  };

  const result = await processor.process(input);

  // STEP 2: Examine intention
  console.log('=== INTENTION ===');
  console.log('Category:', result.intention.category);
  console.log('Confidence:', result.intention.confidence);
  console.log('Goal:', result.intention.extractedGoal);
  console.log('Constraints:', result.intention.impliedConstraints);

  // STEP 3: Examine safety assessment
  console.log('\n=== SAFETY ASSESSMENT ===');
  console.log('Tier:', result.safety.tier);
  console.log('Score:', result.safety.overallScore);
  console.log('Checks:');
  result.safety.constitutionalChecks.forEach((check) => {
    console.log(`  ${check.principle}: ${check.passed ? 'PASS' : 'FAIL'}`);
  });

  // STEP 4: Examine action
  console.log('\n=== SAFE ACTION ===');
  console.log('Action Type:', result.action.actionType);
  console.log('Guardrails:', result.action.guardrails);
  console.log('Parameters:', result.action.parameters);

  // STEP 5: Submit feedback
  await processor.feedback(result.action, {
    userSatisfaction: 5,
    safetyIncident: false,
    corrections: [],
    learningSignals: ['Good analysis of security concerns'],
  });

  console.log('\n=== FEEDBACK SUBMITTED ===');
}

fullPipeline().catch(console.error);
```

---

# SECTION 8: VERIFICATION COMMANDS

## STEP 8.1.0: Build Verification

### STEP 8.1.1: Verify TypeScript Compilation

```bash
# COMMAND: Check TypeScript compiles without errors
cd /Users/coreyalejandro/dev/ITAYN && npx tsc --noEmit

# EXPECTED OUTPUT: (no output means success)
# If errors, will show TypeScript error messages
```

### STEP 8.1.2: Verify Build Output

```bash
# COMMAND: Check all expected files exist in dist/
ls -la /Users/coreyalejandro/dev/ITAYN/dist/

# EXPECTED OUTPUT:
# total 32
# drwxr-xr-x   8 user  staff   256 date time .
# drwxr-xr-x  10 user  staff   320 date time ..
# drwxr-xr-x  14 user  staff   448 date time core
# -rw-r--r--   1 user  staff  XXXX date time index.d.ts
# -rw-r--r--   1 user  staff  XXXX date time index.d.ts.map
# -rw-r--r--   1 user  staff  XXXX date time index.js
# -rw-r--r--   1 user  staff  XXXX date time index.js.map
# drwxr-xr-x   6 user  staff   192 date time types
```

### STEP 8.1.3: Verify Core Modules

```bash
# COMMAND: Check all core module files exist
ls /Users/coreyalejandro/dev/ITAYN/dist/core/

# EXPECTED OUTPUT:
# constitutional-validator.d.ts
# constitutional-validator.d.ts.map
# constitutional-validator.js
# constitutional-validator.js.map
# intention-translation-loop.d.ts
# intention-translation-loop.d.ts.map
# intention-translation-loop.js
# intention-translation-loop.js.map
# mcp-context.d.ts
# mcp-context.d.ts.map
# mcp-context.js
# mcp-context.js.map
```

## STEP 8.2.0: Source Code Verification

### STEP 8.2.1: Count Lines of Code

```bash
# COMMAND: Count lines in all TypeScript source files
find /Users/coreyalejandro/dev/ITAYN/src -name "*.ts" -exec wc -l {} + | tail -1

# EXPECTED OUTPUT:
# XXXX total (should be ~1200-1500 lines)
```

### STEP 8.2.2: Verify Source Structure

```bash
# COMMAND: Tree view of source directory
find /Users/coreyalejandro/dev/ITAYN/src -type f -name "*.ts" | sort

# EXPECTED OUTPUT:
# /Users/coreyalejandro/dev/ITAYN/src/core/constitutional-validator.ts
# /Users/coreyalejandro/dev/ITAYN/src/core/intention-translation-loop.ts
# /Users/coreyalejandro/dev/ITAYN/src/core/mcp-context.ts
# /Users/coreyalejandro/dev/ITAYN/src/index.ts
# /Users/coreyalejandro/dev/ITAYN/src/types/sec-spec.ts
```

## STEP 8.3.0: Git Verification

### STEP 8.3.1: Verify Git Status

```bash
# COMMAND: Check git status
cd /Users/coreyalejandro/dev/ITAYN && git status

# EXPECTED OUTPUT:
# On branch main
# nothing to commit, working tree clean
# (or shows uncommitted changes if any)
```

### STEP 8.3.2: Verify Commit History

```bash
# COMMAND: Show commit log
cd /Users/coreyalejandro/dev/ITAYN && git log --oneline

# EXPECTED OUTPUT:
# xxxxxxx Initial commit: ITAYN Research MVP - Intention Is All You Need
```

## STEP 8.4.0: Functional Verification

### STEP 8.4.1: Quick Smoke Test

```bash
# COMMAND: Run a quick Node.js test
node -e "
const path = require('path');
const dist = path.join('/Users/coreyalejandro/dev/ITAYN', 'dist', 'index.js');
import(dist).then(m => {
  console.log('Exports:', Object.keys(m));
  const proc = m.createITAYNProcessor();
  console.log('Processor created:', !!proc);
  console.log('SUCCESS: All checks passed');
}).catch(e => {
  console.error('FAIL:', e.message);
});
"

# EXPECTED OUTPUT:
# Exports: ['IntentionTranslationLoop', 'ConstitutionalValidator',
#           'DEFAULT_PRINCIPLES', 'MCPContextManager', 'createITAYNProcessor']
# Processor created: true
# SUCCESS: All checks passed
```

### STEP 8.4.2: Verify Invariants Are Exported

```bash
# COMMAND: Check invariant constants are accessible
node -e "
import('/Users/coreyalejandro/dev/ITAYN/dist/index.js').then(m => {
  console.log('DEFAULT_PRINCIPLES:', m.DEFAULT_PRINCIPLES);
}).catch(console.error);
"

# EXPECTED OUTPUT:
# DEFAULT_PRINCIPLES: [
#   'I1: Evidence-First Outputs',
#   'I2: No Phantom Work',
#   'I3: Confidence Requires Verification',
#   'I4: Traceability Is Mandatory',
#   'I5: Safety Over Fluency',
#   'I6: Fail Closed'
# ]
```

---

# SECTION 9: TROUBLESHOOTING

## STEP 9.1.0: Common Issues

### STEP 9.1.1: "Cannot find module" Error

**Symptom:**
```
Error: Cannot find module '@itayn/research-mvp'
```

**Solution:**
```bash
# STEP 1: Ensure you're in the right directory
cd /Users/coreyalejandro/dev/ITAYN

# STEP 2: Run npm install
npm install

# STEP 3: Build the project
npm run build

# STEP 4: Verify dist/ exists
ls dist/
```

### STEP 9.1.2: TypeScript Compilation Errors

**Symptom:**
```
error TS2307: Cannot find module './types/sec-spec.js'
```

**Solution:**
```bash
# STEP 1: Check tsconfig.json has correct moduleResolution
cat tsconfig.json | grep moduleResolution
# Should output: "moduleResolution": "NodeNext"

# STEP 2: Ensure source files use .js extensions in imports
# (TypeScript with ESM requires .js even for .ts files)

# STEP 3: Rebuild
npm run build
```

### STEP 9.1.3: Node.js Version Mismatch

**Symptom:**
```
SyntaxError: Cannot use import statement outside a module
```

**Solution:**
```bash
# STEP 1: Check Node.js version
node --version
# Must be >= 18.0.0

# STEP 2: If too old, update Node.js
nvm install 20
nvm use 20

# STEP 3: Verify package.json has "type": "module"
# (If not present, add it)
```

### STEP 9.1.4: Permission Denied

**Symptom:**
```
EACCES: permission denied
```

**Solution:**
```bash
# STEP 1: Fix ownership
sudo chown -R $(whoami) /Users/coreyalejandro/dev/ITAYN

# STEP 2: Fix permissions
chmod -R 755 /Users/coreyalejandro/dev/ITAYN
```

## STEP 9.2.0: Debugging Tips

### STEP 9.2.1: Enable Verbose Logging

```typescript
// Add to your code for debugging
const processor = createITAYNProcessor({
  auditLevel: 'verbose',
});

// All processing stages will now log to audit trail
const result = await processor.process(input);
console.log('Audit Trail:', result.action.auditTrail);
```

### STEP 9.2.2: Inspect Safety Assessment

```typescript
// Debug safety assessment
const result = await processor.process(input);

console.log('Constitutional Checks:');
result.safety.constitutionalChecks.forEach((check) => {
  console.log(`  ${check.principle}:`);
  console.log(`    Passed: ${check.passed}`);
  console.log(`    Reasoning: ${check.reasoning}`);
  if (check.suggestedRevision) {
    console.log(`    Suggestion: ${check.suggestedRevision}`);
  }
});
```

### STEP 9.2.3: Check MCP Context

```typescript
import { MCPContextManager } from '@itayn/research-mvp';

const manager = new MCPContextManager();

// List all registered resources
console.log('Resources:', manager.listResources());

// List all registered tools
console.log('Tools:', manager.listTools());

// Get server info
console.log('Server:', manager.getServerInfo());
```

---

# SECTION 10: APPENDIX - FULL SOURCE CODE

## STEP 10.1.0: src/types/sec-spec.ts

```typescript
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
```

## STEP 10.2.0: src/index.ts

```typescript
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
```

## STEP 10.3.0: Source File Locations

For the complete source code of the remaining files, see:

| File | Location | Lines |
|------|----------|-------|
| constitutional-validator.ts | `/Users/coreyalejandro/dev/ITAYN/src/core/constitutional-validator.ts` | ~525 |
| intention-translation-loop.ts | `/Users/coreyalejandro/dev/ITAYN/src/core/intention-translation-loop.ts` | ~224 |
| mcp-context.ts | `/Users/coreyalejandro/dev/ITAYN/src/core/mcp-context.ts` | ~253 |

---

# SECTION 11: THEORY AND BACKGROUND

## STEP 11.1.0: The COL-PROACTIVE Framework

### STEP 11.1.1: What Is COL?

**COL (Cognitive Operating Layer)** is the boundary layer that compiles:
- User intent
- Constraints
- Risk posture

Into a traceable representation suitable for verification and gating.

**Purpose:** Prevent "obedient execution of the wrong intent."

### STEP 11.1.2: The PROACTIVE Mnemonic

```
┌─────────────────────────────────────────────────────────────────┐
│                        PROACTIVE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  P - People-Centered, Privacy-First                              │
│      Collect minimum data; default to local-only storage         │
│                                                                  │
│  R - Reality-Bound, Requirements-Driven                          │
│      Distinguish facts/inference/speculation                     │
│                                                                  │
│  O - Observability, Forensics-Ready                              │
│      Emit structured logs; reproducible run reports              │
│                                                                  │
│  A - Accessibility, All the Time                                 │
│      Minimize cognitive load; support stepwise execution         │
│                                                                  │
│  C - Constitutional Constraints, Compiled and Enforced           │
│      Enforce rules as gates; never bypass to "be helpful"        │
│                                                                  │
│  T - Tell the Truth, or Bound the Unknown                        │
│      Never misrepresent capability; mark uncertainty             │
│                                                                  │
│  I - Intent Integrity                                            │
│      Preserve user intent; refuse ambiguous execution            │
│                                                                  │
│  V - Verification Before Action                                  │
│      Run checks before asserting success                         │
│                                                                  │
│  E - Error Ownership and Repair                                  │
│      Acknowledge failures; propose repair steps                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## STEP 11.2.0: Connection to "Attention Is All You Need"

### STEP 11.2.1: Attention as Engineering Control

In ITAYN, "attention" is treated as an engineering control surface:
- Verification prioritization
- Evidence retrieval depth
- Confidence calibration rules
- Escalation thresholds (stop conditions)

**NOT** as a psychological claim about model intent.

### STEP 11.2.2: The Allocation Problem

Just as Transformer attention allocates processing capacity to tokens, ITAYN allocates verification effort to claims:

```
ATTENTION ALLOCATION:
├── High-risk claims      → Deep verification
├── Medium-risk claims    → Standard checks
├── Low-risk claims       → Quick validation
└── No-risk claims        → Pass through
```

## STEP 11.3.0: Connection to Constitutional AI

### STEP 11.3.1: Constitution as Enforceable Policy

In ITAYN, a constitution is a set of enforceable constraints expressed as:
- Build gates
- Runtime gates
- Evaluation criteria
- Incident definitions and required responses

### STEP 11.3.2: From Principles to Gates

```
CONSTITUTIONAL AI PRINCIPLE:
"Be honest about limitations and uncertainties"

ITAYN IMPLEMENTATION:
├── I1: Evidence-First (tag all claims)
├── I3: Confidence bounded to verification
├── I5: Safety over fluency (bounded > fluent)
└── I6: Fail closed on violation
```

## STEP 11.4.0: The Safety Axiom

### STEP 11.4.1: Core Statement

```
If a system can make confident claims about reality that are false,
and users must rely on those claims to act,
then intent is irrelevant:
the effect is operationally indistinguishable from malice.
```

### STEP 11.4.2: Implications

1. **Epistemic reliability is a safety requirement**
   - Not just a quality feature
   - Not just nice-to-have
   - Foundational to safe operation

2. **Intent is unobservable**
   - Focus on measurable effects
   - Focus on enforceable constraints
   - Focus on auditable evidence

3. **Reliability failures = Safety failures**
   - Confident false claims are harmful
   - Phantom work is harmful
   - Unbounded confidence is harmful

---

# SECTION 12: QUICK REFERENCE CARD

## STEP 12.1.0: One-Page Summary

```
┌─────────────────────────────────────────────────────────────────┐
│              ITAYN - INTENTION IS ALL YOU NEED                   │
│                    Quick Reference Card                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  BUILD COMMANDS:                                                 │
│  $ npm install          # Install dependencies                   │
│  $ npm run build        # Compile TypeScript                     │
│  $ npm test            # Run tests                               │
│                                                                  │
│  VERIFY COMMANDS:                                                │
│  $ npx tsc --noEmit    # Type check without building             │
│  $ ls dist/            # Verify build output                     │
│                                                                  │
│  USAGE:                                                          │
│  import { createITAYNProcessor } from '@itayn/research-mvp';     │
│  const proc = createITAYNProcessor();                            │
│  const result = await proc.process({ content, timestamp, id });  │
│                                                                  │
│  THE SIX INVARIANTS:                                             │
│  I1: Evidence-First Outputs (tag + evidence)                     │
│  I2: No Phantom Work (artifact must exist)                       │
│  I3: Confidence Requires Verification                            │
│  I4: Traceability Is Mandatory (REQ→TEST→EVID)                   │
│  I5: Safety Over Fluency (bounded > fluent)                      │
│  I6: Fail Closed (stop, name, enumerate)                         │
│                                                                  │
│  SAFETY TIERS:                                                   │
│  harmless    → Proceed normally                                  │
│  monitored   → Proceed with logging                              │
│  constrained → Apply output filters                              │
│  escalated   → Require human review                              │
│  blocked     → Refuse request                                    │
│                                                                  │
│  EPISTEMIC TAGS:                                                 │
│  OBSERVED   → Has evidence pointers                              │
│  INFERRED   → Has premises + rule + falsifier                    │
│  SPECULATED → Marked NON-ACTIONABLE + Next Check                 │
│                                                                  │
│  FILE STRUCTURE:                                                 │
│  /ITAYN                                                          │
│  ├── src/index.ts                    # Public API                │
│  ├── src/types/sec-spec.ts           # Type definitions          │
│  ├── src/core/intention-translation-loop.ts                      │
│  ├── src/core/constitutional-validator.ts                        │
│  └── src/core/mcp-context.ts         # MCP integration           │
│                                                                  │
│  KEY PRINCIPLE:                                                  │
│  "If a system can make confident claims about reality            │
│   that are false, the effect is indistinguishable from malice."  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

# DOCUMENT END

**File:** `/Users/coreyalejandro/dev/ITAYN/ALLINONE_ITAYN_PPP.md`
**Lines:** ~2200
**Status:** [OBSERVED] Complete
**Evidence:** This file exists at the path above
**Version:** v1.0
**Date:** 2026-01-10

---

*Built for the Anthropic AI Safety Fellows Application*
*Author: Corey Alejandro*
*Co-Authored-By: Claude Opus 4.5*
