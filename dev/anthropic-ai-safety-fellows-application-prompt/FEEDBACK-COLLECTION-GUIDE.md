# Multi-Agent Feedback Collection Guide

## Current Situation

✅ **Master plan exists:** `.cursor/plans/anthropic_ai_safety_fellows_application_-_master_plan_fee3238c.plan.md` (525 lines, comprehensive)

⚠️ **Problem:** Multiple agents invoked in one chat to give feedback, but they're not producing feedback outputs.

## Answer: YES - Use Separate Chats

**Recommendation:** Terminate the current multi-agent chat and use separate chats for each agent's feedback.

### Why Separate Chats Work Better

1. **No interference:** Each agent can focus without competing for context
2. **Structured output:** Each agent can produce a complete feedback document
3. **Easier synthesis:** You get discrete feedback files to compare and merge
4. **Clear ownership:** Each agent knows they're the sole reviewer
5. **Better quality:** Agents give full attention instead of fragmenting across multiple conversations

## How to Collect Feedback

### Step 1: Terminate Current Multi-Agent Chat

Close the current chat where multiple agents are trying to give feedback simultaneously.

### Step 2: Create Focused Feedback Prompts

For each agent you want feedback from, start a **NEW, SEPARATE chat** with this prompt:

```
I need your expert feedback on a comprehensive master plan for my Anthropic AI Safety 
Fellows application. The plan is located at:

.cursor/plans/anthropic_ai_safety_fellows_application_-_master_plan_fee3238c.plan.md

Please:
1. Read the entire plan carefully
2. Provide structured feedback focusing on:
   - Completeness (are all deliverables covered?)
   - Clarity (are instructions deterministic enough?)
   - Feasibility (can this be executed in 3 days?)
   - Gaps or missing considerations
   - Suggestions for improvement
3. Create a feedback file called "agent-feedback-[YOUR-NAME].md" with your complete feedback
4. Be specific - cite line numbers or sections when referencing the plan

Use the write tool to create your feedback file - don't just describe it, actually write it.
```

### Step 3: Specify Feedback Focus Areas (Optional)

You can specialize each agent's feedback focus:

**Agent 1 (Architecture/Planning Expert):**
- Focus on modular structure, dependencies, parallelization strategy

**Agent 2 (AI Safety Expert):**
- Focus on AI safety objectives, Anthropic integrations, research components

**Agent 3 (Execution/Project Management Expert):**
- Focus on timeline feasibility, resource allocation, risk mitigation

**Agent 4 (Technical/Development Expert):**
- Focus on technical implementation, tooling, build processes

**Agent 5 (Writing/Communication Expert):**
- Focus on narrative structure, essay quality, ATS optimization

### Step 4: Require File Creation

**Critical:** Tell each agent explicitly:
```
"Use the write tool to create a file called 'agent-feedback-[name].md' with your complete 
feedback. Include all your analysis, suggestions, and recommendations in that file. 
Don't just discuss feedback - actually write the file."
```

### Step 5: Verify Feedback Files Exist

After each agent claims to have provided feedback, verify:
```bash
ls -la agent-feedback-*.md
```

If the file doesn't exist, the agent didn't complete the task.

## Feedback Collection Checklist

- [ ] Terminate current multi-agent chat
- [ ] Start Agent 1 feedback chat → Get `agent-feedback-agent1.md`
- [ ] Start Agent 2 feedback chat → Get `agent-feedback-agent2.md`
- [ ] Start Agent 3 feedback chat → Get `agent-feedback-agent3.md`
- [ ] (Continue for as many agents as needed)
- [ ] Verify all feedback files exist
- [ ] Review and synthesize feedback
- [ ] Update master plan with incorporated feedback
- [ ] Copy finalized plan to workspace root as `All-in-One-Prompt-PRD-Plan.md`

## Feedback Synthesis Template

Once you have all feedback files, create a synthesis document:

```markdown
# Feedback Synthesis - Master Plan Review

## Agents Consulted
- Agent 1: [Name] - Focus: [Area]
- Agent 2: [Name] - Focus: [Area]
- Agent 3: [Name] - Focus: [Area]

## Common Themes
[What multiple agents agreed on]

## Key Recommendations
[Prioritized list of improvements]

## Changes Incorporated
[List of plan updates based on feedback]

## Outstanding Questions
[Issues that need resolution before execution]
```

## After Feedback Collection

Once feedback is collected and synthesized:

1. **Update the master plan** with incorporated feedback
2. **Copy finalized plan** to workspace root as `All-in-One-Prompt-PRD-Plan.md`
3. **Begin Module 0 execution** (creating the final master PRD document)
4. **Proceed to parallel execution** of Modules 1-7

## Time Management

With a 3-day deadline:
- **Day 1 (Today):** Collect feedback (2-3 hours), synthesize (1 hour), finalize plan (1 hour) → Begin Module 0
- **Day 2:** Execute Modules 1-7 in parallel
- **Day 3:** Final integration, review, submission preparation

## Why This Approach Works

1. **Efficiency:** No agent coordination overhead
2. **Quality:** Each agent gives focused, complete feedback
3. **Clarity:** Discrete feedback files are easy to compare and merge
4. **Speed:** Parallel feedback collection (start multiple chats simultaneously)
5. **Accountability:** Each agent produces a verifiable output file

---

## Next Steps

1. ✅ Terminate current multi-agent feedback chat
2. Start separate chat with Agent 1 using the feedback prompt above
3. Verify `agent-feedback-agent1.md` is created
4. Repeat for remaining agents
5. Synthesize feedback and update plan
6. Begin execution phase
