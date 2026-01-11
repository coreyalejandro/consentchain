# Code Mastery Assistant

## 🎯 Purpose

An advanced pseudocode-to-code converter and learning platform specifically designed for neurodivergent learners, with comprehensive metacognitive support, explicit pattern recognition, and zero assumed knowledge.

## 🧠 Core Philosophy

Based on insights from neurodivergent learning research, this tool:

1. **Shows Thinking Process** - Not just WHAT code does, but WHY and HOW
2. **Assumes Zero Knowledge** - Explains everything like talking to someone new
3. **Repeats Key Concepts** - Same ideas, multiple ways, multiple times
4. **Makes Patterns Explicit** - Highlights the actor.action(input) pattern everywhere
5. **Prevents Errors** - Comprehensive guidance to avoid self-sabotaging mistakes

## ✨ Key Features

### 1. **Universal Code Translator** (`/convert` tab)
- Converts between **ANY** supported languages
- Input formats: Natural Language, Pseudocode, JavaScript, TypeScript, Python, Java, Scala, Rust, Go
- Output formats: All of the above
- Shows intermediate pseudocode representation (AST)
- Auto-detects input language

### 2. **Metacognitive Learning Mode** (`/metacognitive` tab) 🌟
**This is the breakthrough feature based on the research conversation!**

Provides three levels of explanation:

#### **"Thinking Out Loud" (Metacognition)**
Shows the teacher's thought process:
```javascript
// === METACOGNITION: How I'm thinking about this code ===
// === HIGH-LEVEL STEP: Creating a variable ===
// THINKING: I need to store a value for later use
// WHY 'let': Variables can change (not constant)
// WHAT: Declaring "name" with initial value

let name = "John";
```

#### **Actor.Action Pattern Highlighting**
Explicitly shows the fundamental programming pattern:
```javascript
// 🎯 ACTOR.ACTION PATTERN:
//    ACTOR = 'console' (the thing doing the action)
//    ACTION = 'log' (what it does - prints to console)
//    INPUT = "Hello" (what to print)

console.log("Hello");
```

#### **Line-by-Line Explanations**
Breaks down every construct:
```javascript
// ⚙️ SYNTAX: let variableName = value;
// 📝 PARTS: 'let' = keyword, 'name' = variable name, '=' = assignment
// ✅ RESULT: Variable "name" is now ready to use
```

### 3. **Quick Reference Guide**
Interactive accordion with core concepts:
- Actor.Action(Input) pattern explained
- Understanding "self"/"this"
- Variables as storage boxes
- Functions as reusable recipes

### 4. **Actor.Action Explainer**
Visual breakdown of the pattern with:
- Color-coded components (Actor, Action, Input)
- Real-world analogies
- Multiple examples
- Practice recognition questions

### 5. **Step-by-Step Learning Guide** (`/learn` tab)
Mastery-based progression with:
- Clear "What to Do" and "What NOT to Do" sections
- Common mistakes highlighted
- Helpful tips
- Complete before moving forward

### 6. **Mastery Progress Tracker** (`/mastery` tab)
- Tracks practice sessions per topic
- Shows mastery levels (0-5 scale)
- Displays current streak
- Recommends next practice areas

## 🎓 Learning Approach

### Designed Specifically For:

#### **Autism Spectrum**
✅ Explicit, unambiguous language  
✅ Clear rules and patterns  
✅ Predictable structure  
✅ NO implied knowledge  

#### **ADHD**
✅ Clear focus indicators  
✅ Chunked information  
✅ Progress tracking  
✅ Immediate feedback  

#### **OCD**
✅ Complete information (no gaps)  
✅ Clear "done" states  
✅ Verification steps  
✅ Nothing left ambiguous  

#### **Bipolar/Psychosis**
✅ Grounding in concrete examples  
✅ Clear cause-effect relationships  
✅ Stable, consistent formatting  
✅ Error prevention (not just correction)  

## 📁 Project Structure

```
├── /components
│   ├── MetacognitiveConverter.tsx       ⭐ Main learning interface
│   ├── UniversalConverter.tsx           ⭐ Multi-language translator
│   ├── ActorActionExplainer.tsx         ⭐ Pattern education
│   ├── QuickReferenceGuide.tsx          ⭐ Core concepts
│   ├── StepByStepGuide.tsx              📚 Mastery learning
│   ├── MasteryTracker.tsx               📊 Progress tracking
│   └── PseudocodeConverter.tsx          (Legacy)
│
├── /lib
│   ├── pseudocode-ast.ts                🧠 Universal AST definition
│   ├── /parsers
│   │   ├── index.ts                     🔍 Language detection
│   │   ├── natural-language-parser.ts   💬 Plain English → AST
│   │   ├── javascript-parser.ts         (Stub for future)
│   │   ├── python-parser.ts             (Stub for future)
│   │   └── ...                          (Other language parsers)
│   └── /generators
│       ├── index.ts                     🏭 Code generation router
│       ├── javascript-generator.ts      ⚙️ AST → JavaScript
│       ├── javascript-generator-annotated.ts  🌟 With metacognition
│       ├── python-generator.ts          ⚙️ AST → Python
│       ├── pseudocode-generator.ts      ⚙️ AST → Pseudocode
│       └── ...                          (Other language generators)
│
└── /docs
    ├── PSEUDOCODE_SYNTAX.md             📝 Our standardized syntax
    ├── METACOGNITIVE_LEARNING.md        🧠 Learning philosophy
    └── README.md                        📖 This file
```

## 🎯 Key Insights from Research

### 1. The Actor.Action(Input) Pattern

**THE** fundamental pattern in all programming:

```
ACTOR . ACTION ( INPUT )
  ↓       ↓        ↓
 who    what     what
does   they     they
 it     do      need
```

Examples:
- `console.log("Hello")` - console does log with "Hello"
- `array.push(item)` - array does push with item
- `self.checkAnswer(answer)` - self (me) does checkAnswer with answer

### 2. Understanding "self"

When you see:
```javascript
validation = self.checkAnswer(answer)
```

- `validation` = box to store result (NOT the actor!)
- `self` = "me, the current object" (the ACTOR)
- `checkAnswer` = what I'm doing (the ACTION)
- `answer` = what I need (the INPUT)

### 3. Metacognitive Annotations

Show:
- **WHERE** concepts come from
- **WHY** each decision was made
- **HOW** to transition between steps
- **WHAT** happens as a result

### 4. Zero Assumed Knowledge

Every method/function introduction includes:
- **PROMISE:** What it will do
- **CONTRACT:** What it needs
- **WHY:** Why we're using it
- **HOW:** How it connects to big picture

## 🚀 Usage

### For Learners

1. **Start with Learning Mode** (`/metacognitive` tab)
   - Turn on all three options (Metacognition, Actor Pattern, Explain Every Line)
   - Write simple instructions in plain English
   - Read ALL the comments - they explain the thinking process

2. **Study the Quick Reference**
   - Understand the Actor.Action pattern first
   - Practice identifying it in code

3. **Use Step-by-Step Guide**
   - Follow mastery learning approach
   - Complete each step before moving forward
   - Mark completed when you truly understand

4. **Track Progress**
   - Check mastery tracker regularly
   - Aim for level 5 in each topic
   - Maintain practice streak

### For Educators

This system demonstrates:
- How to make expert thinking visible
- How to eliminate assumed knowledge
- How to support neurodivergent learners
- How to build genuine mastery

## 🎨 Design Principles

1. **High Contrast** - Easy to see and distinguish elements
2. **Clear Visual Hierarchy** - Important things stand out
3. **Consistent Patterns** - Same structure throughout
4. **Color Coding** - Blue (input), Purple (process), Green (output)
5. **Generous Spacing** - Reduce cognitive load
6. **Multiple Modalities** - Visual, text, interactive

## 🔧 Technical Stack

- **React** - Component-based UI
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Shadcn/ui** - Component library
- **Lucide React** - Icons

## 📚 Key Documentation

1. **PSEUDOCODE_SYNTAX.md** - Our standardized pseudocode language
2. **METACOGNITIVE_LEARNING.md** - Complete learning philosophy
3. **This README** - Project overview

## 🎓 Learning Outcomes

Students will be able to:

✅ Identify the actor.action(input) pattern in any code  
✅ Explain WHY code works, not just WHAT it does  
✅ Translate between natural language and code  
✅ Understand the thinking process behind code decisions  
✅ Transfer knowledge to new programming languages  
✅ Avoid common beginner mistakes through prevention  

## 💡 Inspiration

Built with insights from:
- Neurodivergent learning research
- Metacognitive teaching strategies
- Universal Design for Learning (UDL)
- Mastery learning principles
- Direct feedback from neurodivergent learners

## 🙏 Acknowledgments

This system was significantly improved based on a conversation analyzing:
- The importance of metacognitive "thinking out loud"
- How to eliminate assumed knowledge
- The power of the actor.action pattern
- Specific needs of autistic learners
- The danger of implicit transitions in teaching

---

**Built with accessibility, neurodiversity, and mastery learning in mind.**

*Take your time. Every step matters. You've got this! 💪*
