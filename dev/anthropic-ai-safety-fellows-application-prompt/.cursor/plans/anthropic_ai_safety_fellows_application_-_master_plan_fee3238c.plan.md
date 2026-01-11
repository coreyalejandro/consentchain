---
name: Anthropic AI Safety Fellows Application - Master Plan
overview: Create a comprehensive, modular work plan for building the Anthropic AI Safety Fellows application that honors the user's full vision while enabling parallel execution. The plan organizes work into independent modules (like Coursera courses) that can be executed in any order, ensuring all 7 deliverables are completed with gold-standard prompts, SOPs, and complete conversation/file capture.
todos:
  - id: module-0-master-prd
    content: Create All-in-One-Prompt-PRD-Plan.md as single source of truth with all 7 deliverables, SOPs, and verification processes
    status: pending
  - id: module-1-capture-corpus
    content: Capture ALL 7 conversations and 7 files from ChatGPT project into evidence repository with complete fidelity
    status: pending
    dependencies:
      - module-0-master-prd
  - id: module-2-essay-narrative
    content: Develop compelling narrative essay responses optimized for ATS with visceral through-line
    status: pending
    dependencies:
      - module-0-master-prd
  - id: module-3-application-repo
    content: Build GitHub repository with Devpost-style interface including video script and interview Q&A
    status: pending
    dependencies:
      - module-0-master-prd
      - module-2-essay-narrative
  - id: module-4-research-build
    content: Build and launch 'Intention Is All You Need' research project with Phase 1-3 artifacts and Anthropic integrations
    status: pending
    dependencies:
      - module-0-master-prd
      - module-1-capture-corpus
  - id: module-5-repo-refactor
    content: Refactor 2-3 favorite GitHub repos with AI safety objectives and ML best practices
    status: pending
    dependencies:
      - module-0-master-prd
  - id: module-6-gold-prompts
    content: Create gold-standard CARE protocol prompts + PRDs + deterministic plans for all projects
    status: pending
    dependencies:
      - module-0-master-prd
      - module-4-research-build
      - module-5-repo-refactor
  - id: module-7-reference-training
    content: Create PR-style training packet for references with talking points and Q&A preparation
    status: pending
    dependencies:
      - module-0-master-prd
      - module-2-essay-narrative
---

# Anthropic AI Safety Fellows Application - Master Execution Plan

## Executive Summary

This plan creates a **gold-standard "All-in-One-Prompt-PRD-Plan.md"** as the single source of truth, then organizes all 7 deliverables into **modular, parallel-executable components** that can be worked on simultaneously. The structure mirrors Coursera's modular course design—each module is independent and can be completed in any order.

**Critical Foundation:** Before any work begins, Module 0 creates the master governance document that defines all deliverables, SOPs, and verification processes.

**Timeline:** Application due Monday, January 12 at 9:00 AM. Work can proceed in parallel across modules.

---

## Module 0: Master Governance Document (PREREQUISITE - Must Complete First)

**Status:** Foundation - Blocks all other work until complete
**Dependencies:** None
**Can run in parallel with:** Nothing (this is the blocker)

### Objective

Create `All-in-One-Prompt-PRD-Plan.md` that serves as the **single source of truth** for all 7 deliverables, operational SOPs, and verification processes.

### Tasks

1. **Synthesize existing documentation**

- Review all attached files (All-in-One-Prompt-PRD-Plan.md, handoff.md, Reproducibility in Research, etc.)
- Extract core research thesis: "Intention Is All You Need" as complement to "Attention Is All You Need" and Constitutional AI
- Document unique contributions: divergency, translation, intention from autistic/schizophrenic perspective
- Map Anthropic integrations: Constitutional AI, Constitutional Classifiers, MCP

2. **Create master PRD structure**

- Define all 7 deliverables with acceptance criteria
- Document SOPs (feedback loops, guardrails, verification)
- Establish evidence-based completion verification
- Create modular work breakdown structure

3. **Write gold-standard AI prompt template**

- CARE protocol integration
- Deterministic, descriptive instructions (blind-person-readable)
- Intent clarification requirements
- Verification checkpoints

**Output:** `All-in-One-Prompt-PRD-Plan.md` in workspace root

---

## Module 1: Complete Conversation & File Capture

**Status:** Independent - Can run immediately after Module 0
**Dependencies:** Module 0 (for SOPs)
**Can run in parallel with:** Modules 2-7

### Objective

Capture **ALL 7 conversations and 7 files** from the "Intention Is All You Need" ChatGPT project folder into the `ChatGPT_Project_Sync` repository with complete fidelity.

### Tasks

1. **Audit current state**

- Identify all 7 conversations in ChatGPT project
- Identify all 7 stored files
- Compare against current snapshot (`/Users/coreyalejandro/dev/ChatGPT_Project_Sync/snapshot/intention-is-all-you-need/`)
- Document missing items from MISSING.md

2. **Ingest complete corpus**

- Export all conversations from ChatGPT project
- Export all files from ChatGPT project
- Run ITAYN agent to convert to evidence Markdown
- Verify: 7 conversation markdown files + 7 file artifacts

3. **Verify completeness**

- Cross-reference against manifest.json
- Ensure no mock data remains
- Generate completeness receipt

**Output:** Complete evidence corpus in `evidence/conversations/` and `evidence/files/`

---

## Module 2: Essay Narrative Development

**Status:** Independent - Can run in parallel
**Dependencies:** Module 0, Module 1 (for context)
**Can run in parallel with:** Modules 1, 3-7

### Objective

Create compelling, visceral narrative responses to Anthropic essay questions that:

- Articulate professional/personal journey to AI safety
- Score well on ATS systems
- Demonstrate polymathic knowledge base
- Show unique perspective from autistic/schizophrenic experience

### Tasks

1. **Extract essay questions**

- Review Anthropic application form
- Identify all essay/short-answer prompts
- Map to narrative themes

2. **Develop narrative through-line**

- Map personal/professional experiences
- Connect to "Intention Is All You Need" research
- Highlight unique contributions and insights
- Ensure ATS optimization

3. **Write and refine responses**

- Draft each essay response
- Apply ATS optimization techniques
- Verify narrative coherence
- Get user approval

**Output:** `application/essay-responses.md` with all answers

---

## Module 3: Application Repository & Devpost-Style Interface

**Status:** Independent - Can run in parallel
**Dependencies:** Module 0, Module 2 (for content)
**Can run in parallel with:** Modules 1, 2, 4-7

### Objective

Convert Anthropic application into a GitHub repository with Devpost-style hackathon entry interface that:

- Merges application questions and answers
- Includes anticipated interview questions
- Features scripted narrated video
- Provides low-effort, high-value reviewer experience

### Tasks

1. **Repository structure design**

- Create GitHub repo structure
- Design Devpost-style navigation
- Plan video script outline

2. **Build interactive interface**

- Convert application form to markdown/web format
- Add interview Q&A section
- Create video script with narration
- Implement accessible navigation

3. **Deploy and verify**

- Push to GitHub
- Test user experience
- Verify all content accessible

**Output:** Live GitHub repository with Devpost-style interface

---

## Module 4: "Intention Is All You Need" Research Project Build

**Status:** Independent - Can run in parallel
**Dependencies:** Module 0, Module 1 (for complete corpus)
**Can run in parallel with:** Modules 1-3, 5-7

### Objective

Build and launch the "Intention Is All You Need" research repository with:

- MVPs of essential research components
- Integration with Anthropic's work (Constitutional AI, CC, MCP)
- Refactored to complement Anthropic's research
- Phase 1-3 artifacts complete

### Tasks

1. **Review existing PRD and artifacts**

- Review Phase 1-3 specifications from attached All-in-One-Prompt-PRD-Plan.md
- Identify what exists vs. what needs building
- Map to Anthropic research integrations

2. **Build research components**

- Create artifacts/ directory with required files
- Implement SEC (Shared Existential Context) spec
- Build intention-translation loop mechanism
- Create evaluation metrics

3. **Integrate Anthropic methods**

- Implement Constitutional AI critique/revision
- Add Constitutional Classifier guardrails
- Integrate MCP for context plumbing
- Document integrations explicitly

4. **Launch and verify**

- Complete Phase 1-3 artifacts
- Verify explainability requirements met
- Test tool/product translations (ISG, Clarity Mode)

**Output:** Complete `intention-is-all-you-need/` repository with all phases

---

## Module 5: Repository Refactoring with AI Safety Objectives

**Status:** Independent - Can run in parallel
**Dependencies:** Module 0
**Can run in parallel with:** Modules 1-4, 6-7

### Objective

Refactor user's most important/favorite GitHub repositories to include:

- Value-added AI safety objectives
- Machine learning best practices
- Safety-aligned outcomes
- Documentation of safety contributions

### Tasks

1. **Identify target repositories**

- User specifies 2-3 "most important and favorite" repos
- Assess current state
- Plan refactoring approach

2. **Apply AI safety objectives**

- Add safety considerations to each repo
- Implement ML best practices
- Document safety outcomes
- Create safety contribution summaries

3. **Generate documentation**

- Update READMEs with safety focus
- Create safety contribution reports
- Document before/after improvements

**Output:** Refactored repositories with AI safety enhancements

---

## Module 6: Gold-Standard Prompts & PRDs for All Projects

**Status:** Independent - Can run in parallel
**Dependencies:** Module 0, Module 4, Module 5
**Can run in parallel with:** Modules 1-5, 7

### Objective

Create gold-standard "All-in-One-Prompt-PRD-Plan.md" documents for:

- "Intention Is All You Need" project
- Each refactored repository from Module 5

Each document includes:

- CARE protocol-compliant prompt
- Gold-standard PRD
- Deterministic execution plan (blind-person-readable)
- Step-by-step build instructions

### Tasks

1. **Template creation**

- Design CARE protocol template
- Create PRD template structure
- Design deterministic instruction format

2. **Generate for each project**

- "Intention Is All You Need" prompt+PRD+plan
- Repository refactoring prompt+PRD+plan (for each repo)
- Verify all are deterministic and descriptive

3. **Quality verification**

- Test "blind person readability"
- Verify determinism (no ambiguity)
- Check CARE protocol compliance

**Output:** Complete prompt+PRD+plan documents for all projects

---

## Module 7: Reference Training Packet

**Status:** Independent - Can run in parallel
**Dependencies:** Module 0, Module 2 (for application content)
**Can run in parallel with:** Modules 1-6

### Objective

Create PR-style training packet to help references effectively engage with Anthropic interview committee, including:

- Summary of applicant's work and contributions
- Key talking points
- Anticipated questions and suggested responses
- Relationship context and examples

### Tasks

1. **Content development**

- Summarize applicant's AI safety contributions
- Highlight unique perspectives and insights
- Create key talking points
- Anticipate committee questions

2. **Training materials**

- Create reference guide document
- Develop Q&A preparation materials
- Include relationship context
- Add examples and evidence

3. **Package and deliver**

- Format as professional training packet
- Create accessible version
- Prepare delivery mechanism

**Output:** `references/training-packet.md` with all materials

---

## Operational SOPs (Applied to All Modules)

### SOP 1: Intent Clarification Feedback Loop

**Requirement:** Before building anything, AI must:

1. Restate user intent in concrete terms
2. Show what will be created (file paths, structure)
3. Get explicit confirmation
4. Proceed only after confirmation

### SOP 2: Evidence-Based Verification

**Requirement:** For every deliverable:

1. Generate completion receipt with:

- What exists (file paths, line counts, hashes)
- What does not exist
- What could not be verified
- Functional status

2. Prevent false completion claims
3. Make verification auditable

### SOP 3: Real-Time Logging

**Requirement:** AI must:

1. Stream thoughts and actions in real-time
2. Log all file operations
3. Record all decisions and rationale
4. Maintain execution log for audit

---

## Verification & Completion Criteria

### Module 0 Complete When:

- [ ] `All-in-One-Prompt-PRD-Plan.md` exists in workspace root
- [ ] All 7 deliverables defined with acceptance criteria
- [ ] SOPs documented and enforceable
- [ ] Modular work structure validated

### Module 1 Complete When:

- [ ] 7 conversation markdown files in `evidence/conversations/`
- [ ] 7 file artifacts captured
- [ ] No mock data remains
- [ ] Completeness receipt generated

### Module 2 Complete When:

- [ ] All essay questions answered
- [ ] Narrative through-line verified
- [ ] ATS optimization applied
- [ ] User approval obtained

### Module 3 Complete When:

- [ ] GitHub repository created and deployed
- [ ] Devpost-style interface functional
- [ ] Video script complete
- [ ] All content accessible

### Module 4 Complete When:

- [ ] Phase 1-3 artifacts complete
- [ ] Anthropic integrations documented
- [ ] Tool/product translations specified
- [ ] Repository launched

### Module 5 Complete When:

- [ ] 2-3 repositories refactored
- [ ] AI safety objectives added
- [ ] Documentation updated
- [ ] Safety contributions documented

### Module 6 Complete When:

- [ ] Prompt+PRD+plan for "Intention Is All You Need"
- [ ] Prompt+PRD+plan for each refactored repo
- [ ] All documents deterministic and blind-person-readable
- [ ] CARE protocol compliance verified

### Module 7 Complete When:

- [ ] Training packet document complete
- [ ] Key talking points developed
- [ ] Q&A materials prepared
- [ ] Ready for reference distribution

---

## Execution Strategy

**Parallel Execution Model:**

- Module 0 runs first (foundation)
- Modules 1-7 can run simultaneously after Module 0
- Each module is independent
- Progress tracked via completion criteria checklists

**Resource Allocation:**

- Cursor for primary development
- Windsurf for parallel tasks (where appropriate)
- Anthropic API for specialized tasks
- GitHub for repository management

**Quality Gates:**

- Each module must pass its completion criteria
- SOPs enforced at all times
- Evidence-based verification required
- User approval for critical outputs (essays, final deliverables)

---

## Risk Mitigation

1. **Time constraint (3 days):** Modular structure enables parallel work
2. **Vision preservation:** Master PRD (Module 0) locks in vision before execution
3. **Completeness:** Module 1 ensures all conversations/files captured
4. **Quality:** SOPs prevent false completion claims
5. **Accessibility:** All instructions deterministic and descriptive

---

## Next Steps

1. **User confirms plan** → Begin Module 0
2. **Module 0 complete** → Unlock parallel execution of Modules 1-7
3. **Continuous verification** → Apply SOPs throughout
4. **Final integration** → Assemble all deliverables
5. **Submission preparation** → Final review and packaging