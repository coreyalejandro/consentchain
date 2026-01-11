# Metacognitive Learning System

## What is Metacognition?

**Metacognition** means "thinking about thinking." It's the practice of making your thought process visible and explicit.

For learning to code, this means:
- Showing **WHY** each decision was made
- Explaining **WHERE** concepts come from
- Demonstrating **HOW** to transition from one step to the next
- Making **NO ASSUMPTIONS** about prior knowledge

## The Problem This Solves

### Traditional Code Teaching Says:
```javascript
let name = "John";
```

### Students Think:
- "Where did `let` come from?"
- "Why not `var` or `const`?"
- "What's the equals sign doing?"
- "Why the semicolon?"

### Traditional Teaching Assumes You Know:
- What variables are
- Why we declare them
- How assignment works
- Programming syntax conventions

## Our Metacognitive Approach

### We Show The Thinking Process:

```javascript
// === HIGH-LEVEL STEP: Creating a variable ===
// THINKING: I need to store a value for later use
// WHY 'let': Variables can change (not constant)
// WHAT: Declaring "name" with initial value

// ⚙️ SYNTAX: let variableName = value;
// 📝 PARTS: 'let' = keyword, 'name' = name, '=' = assignment, "John" = what to store

let name = "John";

// ✅ RESULT: Variable "name" is now ready to use
```

## Key Principles

### 1. Show High-Level Design → Code Mapping

**High-Level Step:** "Create a variable to store a person's name"

**Thinking Process:**
- Need to store data → use a variable
- Data might change → use `let` not `const`
- It's text → use a string (quotes)
- Need a descriptive name → call it `name`

**Resulting Code:** `let name = "John";`

### 2. Explain The Actor.Action(Input) Pattern

This is THE fundamental pattern in programming:

```
ACTOR . ACTION ( INPUT )
  ↓       ↓        ↓
 who    what     what
does   they     they
 it    do      need
```

**Example:**
```javascript
console.log("Hello");
```

Breaking it down:
- **ACTOR** = `console` (the thing doing the action)
- **ACTION** = `log` (the action being performed)
- **INPUT** = `"Hello"` (what the action needs to work with)

**Why This Matters:** This pattern repeats EVERYWHERE:
- `array.push(item)` - array does push with item
- `string.toUpperCase()` - string does toUpperCase
- `Math.random()` - Math does random
- `object.method()` - object does method

### 3. The "Self" Concept Explained

When you see code like:
```javascript
validation = self.checkAnswer(answer)
```

Read it as:
- **Left side (`validation`)** = storage box for the result
- **Actor (`self`)** = "me, the current object"
- **Action (`checkAnswer`)** = what I'm doing
- **Input (`answer`)** = what I need to do it

**Important:** `self` is NOT the variable on the left. The left is just where you STORE the result.

Think of it like:
```
result = actor.action(input)
  ↓       ↓      ↓      ↓
store  who    what   what
here   does   they   they
        it    do    need
```

### 4. Never Assume Prior Knowledge

Every time we introduce something new, we explain:

**PROMISE:** What this thing will do
**CONTRACT:** What it needs to work
**WHY:** Why we're using it (not something else)
**HOW:** How it connects to what we already know

**Example - Introducing a Function:**

```javascript
// === PROMISE: This function will check if a number is even ===
// === CONTRACT: Give it a number, it returns true/false ===
// === WHY: We might check this many times, so make it reusable ===
// === HOW: Functions are like recipes - write once, use many times ===

function isEven(number) {
  return number % 2 === 0;
}
```

### 5. Repeat, Repeat, Repeat

Key concepts are explained:
- When first introduced (full explanation)
- Each time they appear (shorter reminder)
- In different contexts (new perspectives)
- With different examples (varied understanding)

**Why:** Repetition builds neural pathways. Neurodivergent learners especially benefit from seeing the same concept multiple ways.

## Teaching Strategies

### Hover Tooltips
Every construct has a hover explanation:

```
Hover over 'let': 
  "Keyword for declaring a variable that can change.
   Use 'const' if value won't change.
   Use 'var' only in old code (outdated)."
```

### Inline Comments

Three types:

1. **Metacognitive** - Shows thinking process
   ```javascript
   // THINKING: I need to repeat this code 10 times
   ```

2. **Structural** - Shows what's happening
   ```javascript
   // ⚙️ SYNTAX: for (start; condition; increment) { code }
   ```

3. **Result** - Shows outcome
   ```javascript
   // ✅ RESULT: Loop ran 10 times
   ```

### Progressive Disclosure

**Level 1 - Beginner:** ALL explanations
```javascript
// === HIGH-LEVEL STEP: Making a decision ===
// THINKING: Should I do something or not? Depends on a condition
// WHY: Different actions for different situations
// HOW IT WORKS: Test condition → if true, run code inside { }
// ⚙️ SYNTAX: if (condition) { codeToRun }
// 📝 PARTS: 'if' = keyword, (condition) = test, { } = code block

if (age > 18) {
  // INSIDE THE IF: These lines only run if condition is TRUE
  console.log("Adult");
}
```

**Level 2 - Intermediate:** Key points only
```javascript
// === DECISION: Check age ===
if (age > 18) {
  console.log("Adult");
}
```

**Level 3 - Advanced:** Minimal annotations
```javascript
if (age > 18) {
  console.log("Adult");
}
```

## Design for Neurodivergence

### For Autism Spectrum:
- ✅ Explicit, unambiguous language
- ✅ Clear rules and patterns
- ✅ Predictable structure
- ✅ Visual hierarchy
- ✅ NO implied knowledge

### For ADHD:
- ✅ Clear focus indicators
- ✅ Chunked information
- ✅ Progress tracking
- ✅ Engagement through interactivity
- ✅ Immediate feedback

### For OCD:
- ✅ Complete information (no gaps)
- ✅ Clear "done" states
- ✅ Verification steps
- ✅ Comprehensive checklists
- ✅ Nothing left ambiguous

### For Bipolar/Psychosis:
- ✅ Grounding in concrete examples
- ✅ Reality-checked information
- ✅ Clear cause-effect relationships
- ✅ Stable, consistent formatting
- ✅ Error prevention (not just correction)

## Example: Complete Metacognitive Flow

### Input (Natural Language):
```
Set counter to 0
While counter is less than 5
  Print counter
  Set counter to counter + 1
```

### Output (Metacognitive JavaScript):
```javascript
// === METACOGNITION: How I'm thinking about this code ===
// I'm going to convert your pseudocode step by step.
// Each line will have comments explaining WHY I made that choice.

// === HIGH-LEVEL STEP: Creating a variable ===
// THINKING: I need to store a value for later use
// WHY 'let': Variables can change (not constant)
// WHAT: Declaring "counter" with initial value
// ⚙️ SYNTAX: let variableName = value;
// 📝 PARTS: 'let' = keyword, 'counter' = name, '=' = assignment, 0 = what to store

let counter = 0;

// ✅ RESULT: Variable "counter" is now ready to use

// === HIGH-LEVEL STEP: Repeating code ===
// THINKING: I need to do something multiple times
// WHY 'while': Keep going as long as condition is true
// HOW IT WORKS: Check condition → run code → check again → repeat
// ⚙️ SYNTAX: while (condition) { codeToRepeat }
// ⚠️ IMPORTANT: Make sure condition eventually becomes false (or loop forever!)

while (counter < 5) {
  // INSIDE THE LOOP: This code runs over and over until condition is false
  
  // === HIGH-LEVEL STEP: Showing output ===
  // THINKING: I need to display something to the user
  // WHY 'console.log': Standard way to print in JavaScript
  // 🎯 ACTOR.ACTION PATTERN:
  //    ACTOR = 'console' (the thing doing the action)
  //    ACTION = 'log' (what it does - prints to console)
  //    INPUT = counter (what to print)
  // ⚙️ SYNTAX: console.log(value);
  
  console.log(counter);
  
  // ✅ RESULT: Value is displayed in the console
  
  // === HIGH-LEVEL STEP: Changing a variable's value ===
  // THINKING: I already created this variable, now updating it
  // WHY: We need to store a new value in "counter"
  // ⚙️ SYNTAX: variableName = newValue;
  // 📝 PARTS: 'counter' = variable to change, '=' = assignment, counter + 1 = new value
  
  counter = counter + 1;
  
  // ✅ RESULT: "counter" now has a different value
  // NOTE: This makes the while condition eventually become false (stops infinite loop!)
}
```

## Toggle Options

Users can control the level of explanation:

1. **Show Metacognition** - Thinking process comments
2. **Show Actor.Action Pattern** - Highlight actor.action explanations
3. **Explain Every Line** - Detailed syntax breakdown

This allows gradual progression from full scaffolding to independent coding.

## Assessment

Instead of "did they get it right?", we ask:

1. Can you explain WHY this code works?
2. Can you identify the actor.action pattern?
3. Can you trace the thought process?
4. Can you predict what happens next?
5. Can you explain it to someone else?

## Success Metrics

Students master coding when they can:
- ✅ Explain their thinking process
- ✅ Identify patterns across different contexts
- ✅ Make explicit the implicit
- ✅ Teach others what they've learned
- ✅ Transfer knowledge to new situations

---

## Implementation Notes

This system is built with these core files:
- `/lib/generators/javascript-generator-annotated.ts` - Annotated code generation
- `/components/MetacognitiveConverter.tsx` - Interactive learning interface
- `/PSEUDOCODE_SYNTAX.md` - Our universal pseudocode specification

The goal: **Make expert thinking visible to novices.**
