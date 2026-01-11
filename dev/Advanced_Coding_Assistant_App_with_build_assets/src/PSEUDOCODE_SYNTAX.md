# Universal Pseudocode Syntax Reference

## 🎯 CRITICAL: This is Our STANDARD - Always Use These Exact Terms!

This document defines our **FIXED, CONSISTENT** pseudocode language. Every time you write pseudocode, use EXACTLY these words and patterns. **Do not vary the terminology!**

## Core Philosophy

Our pseudocode is:
- **CONSISTENT**: Same words, same patterns, every single time
- **Language-agnostic**: Works as a bridge between all programming languages
- **Human-readable**: Uses plain English keywords
- **Unambiguous**: Clear structure with explicit keywords
- **Pattern-based**: Built on the actor.action(input) foundation

## 🏗️ The Three-Level Pattern Hierarchy

ALL code follows this structure:

```
LEVEL 1: Line    → actor.action(input) 
                   ↓
LEVEL 2: Recipe  → Multiple lines grouped together
                   ↓
LEVEL 3: Program → Multiple recipes working together
```

## LEVEL 1: The Line Pattern (actor.action)

**ALWAYS use this exact pattern for single actions:**

```pseudocode
actor.action(input)
```

**Required Terminology:**
- Use **"actor"** - NOT "object", "thing", "person", "doer"
- Use **"action"** - NOT "method", "function" at this level  
- Use **"input"** - NOT "parameter", "argument" at this level

**Examples:**
```pseudocode
console.log("Hello")          // console (actor) does log (action) with "Hello" (input)
array.push(item)              // array (actor) does push (action) with item (input)
Math.random()                 // Math (actor) does random (action) with no input
self.checkAnswer(answer)      // self (actor) does checkAnswer (action) with answer (input)
```

## LEVEL 2: The Recipe Pattern (Functions)

**ALWAYS use this exact format for recipes (functions):**

```pseudocode
Recipe recipeName(ingredients you need):
    actor.action(input)
    actor.action(input)
    Give back result
```

**Required Terminology:**
- Use **"Recipe"** - NOT "function", "method", "procedure", "def"
- Use **"Give back"** - NOT "return"
- Use **"ingredients"** - NOT "parameters", "arguments" (those are technical terms)
- Inside recipes, ALWAYS use **actor.action(input)** for steps

**Example:**
```pseudocode
Recipe greetPerson(name):
    greeting = "Hello, " + name
    console.log(greeting)
    Give back greeting
```

**Breaking Down the Recipe:**
- **Recipe name:** greetPerson (what this recipe does)
- **Ingredients:** name (what you need to give it)
- **Steps:** Lines using actor.action pattern
- **Give back:** What the recipe produces

## LEVEL 3: The Program Pattern

**Programs are multiple recipes working together:**

```pseudocode
Recipe helperRecipe(ingredients):
    actor.action(input)
    Give back result

Recipe main():
    data = helperRecipe(input)
    result = anotherRecipe(data)
    console.log(result)
```

## Standard Syntax Reference

### Variables

**Creating a variable (can change):**
```pseudocode
SET variableName TO value
```

**Creating a constant (cannot change):**
```pseudocode
CONSTANT constantName IS value
```

**Examples:**
```pseudocode
SET name TO "John"
SET age TO 25
CONSTANT PI IS 3.14159
```

**Why this syntax:**
- "SET...TO" clearly shows you're putting a value into storage
- "CONSTANT...IS" shows the value is permanent

### Conditional Statements (Making Decisions)

**ALWAYS use this exact format:**

```pseudocode
IF condition THEN
    actions when true
OTHERWISE IF condition THEN
    actions for second case
OTHERWISE
    actions when all false
END IF
```

**Required Terminology:**
- Use **"IF...THEN"** - NOT just "if"
- Use **"OTHERWISE IF"** - NOT "else if", "elif"
- Use **"OTHERWISE"** - NOT "else"
- Use **"END IF"** - Makes it crystal clear where the decision block ends

**Example:**
```pseudocode
IF age > 18 THEN
    console.log("Adult")
OTHERWISE IF age > 13 THEN
    console.log("Teenager")
OTHERWISE
    console.log("Child")
END IF
```

### Loops (Repeating Actions)

**While Loop (repeat while condition is true):**
```pseudocode
WHILE condition DO
    actions to repeat
END WHILE
```

**Counting Loop (repeat specific number of times):**
```pseudocode
FOR counter FROM start TO end DO
    actions to repeat
END FOR
```

**For Each Loop (do something with each item):**
```pseudocode
FOR EACH item IN collection DO
    actions with item
END FOR
```

**Required Terminology:**
- Use **"WHILE...DO"** and **"END WHILE"**
- Use **"FOR...FROM...TO...DO"** and **"END FOR"**
- Use **"FOR EACH...IN...DO"** and **"END FOR"**
- Always use **"END"** to close blocks clearly

**Examples:**
```pseudocode
// While loop
SET counter TO 0
WHILE counter < 5 DO
    console.log(counter)
    SET counter TO counter + 1
END WHILE

// Counting loop
FOR i FROM 0 TO 10 DO
    console.log(i)
END FOR

// For each loop
FOR EACH item IN shoppingList DO
    console.log(item)
END FOR
```

### Arrays (Lists of Items)

**Creating an array:**
```pseudocode
SET arrayName TO [item1, item2, item3]
```

**Accessing an item:**
```pseudocode
item = arrayName[position]
```

**Common array actions (using actor.action pattern):**
```pseudocode
arrayName.push(newItem)           // Add to end
arrayName.pop()                   // Remove from end
item = arrayName[index]           // Get item at position
SET arrayName[index] TO value     // Change item at position
```

**Example:**
```pseudocode
SET fruits TO ["apple", "banana", "orange"]
fruits.push("grape")
firstFruit = fruits[0]
console.log(firstFruit)
```

### Comments (Explanations)

**ALWAYS use // for comments:**
```pseudocode
// This is a comment explaining what comes next
SET name TO "John"  // This is an inline comment
```

### Complete Program Example

**Here's everything together following our STANDARD syntax:**

```pseudocode
// LEVEL 3: Program with multiple recipes

Recipe calculateAverage(numbers):
    // LEVEL 2: Recipe containing multiple lines
    
    // LEVEL 1: Lines using actor.action pattern
    total = 0
    
    FOR EACH num IN numbers DO
        SET total TO total + num
    END FOR
    
    average = total / numbers.length
    Give back average

Recipe main():
    // Create data
    SET scores TO [85, 92, 78, 95, 88]
    
    // Call recipe (this is ALSO actor.action!)
    result = calculateAverage(scores)
    
    // Display result
    console.log("Average:", result)
    
    // Decision based on result
    IF result >= 90 THEN
        console.log("Excellent!")
    OTHERWISE IF result >= 80 THEN
        console.log("Good job!")
    OTHERWISE
        console.log("Keep practicing!")
    END IF
```

## 🚨 Common Mistakes to AVOID

### ❌ DON'T Vary Terminology

**WRONG:**
```pseudocode
function greetPerson(params):        // Don't say "function"
    thing.doSomething(stuff)         // Don't say "thing" 
    return result                     // Don't say "return"
```

**RIGHT:**
```pseudocode
Recipe greetPerson(ingredients):     // Say "Recipe"
    actor.action(input)              // Say "actor.action"
    Give back result                 // Say "Give back"
```

### ❌ DON'T Skip "END" Keywords

**WRONG:**
```pseudocode
IF age > 18 THEN
    console.log("Adult")
// Where does the IF end? Unclear!
```

**RIGHT:**
```pseudocode
IF age > 18 THEN
    console.log("Adult")
END IF                               // Crystal clear ending!
```

### ❌ DON'T Use Programming Language Syntax

**WRONG:**
```pseudocode
let name = "John";                   // This is JavaScript, not pseudocode
def greet(name):                     // This is Python, not pseudocode
```

**RIGHT:**
```pseudocode
SET name TO "John"                   // This is OUR pseudocode
Recipe greet(name):                  // This is OUR pseudocode
```

## 📝 Quick Reference Card

**Use these EXACT words every time:**

| Concept | Our Standard Term | NOT These |
|---------|------------------|-----------|
| Single action | actor.action(input) | thing.method, object.function |
| Who does it | actor | object, thing, person, doer |
| What they do | action | method, function |
| What they need | input | parameter, argument, param |
| Grouped actions | Recipe | function, method, def, procedure |
| Recipe output | Give back | return, output |
| Recipe inputs | ingredients | parameters, arguments, params |
| Decision | IF...THEN...OTHERWISE...END IF | if/else, if-else |
| Alternative | OTHERWISE | else |
| Repeat while | WHILE...DO...END WHILE | while |
| Create variable | SET...TO | let, var, = |
| Fixed value | CONSTANT...IS | const |

## 🎓 Learning Strategy

1. **Start with Level 1:** Master actor.action(input) first
2. **Move to Level 2:** Learn to group lines into Recipes
3. **Understand Level 3:** See how Recipes work together
4. **Stay Consistent:** ALWAYS use the exact standard terms
5. **Correct Yourself:** If you say "function", change it to "Recipe"
6. **Correct Others:** Help peers use standard terminology too

## Why Consistency Matters

**Scientific Reason:** Your brain builds neural pathways through repetition. When you use the SAME words every time:
- Patterns become automatic
- Recognition gets faster
- Understanding deepens
- Transfer to real code is easier

**Neurodivergent-Specific Reason:** Especially for autistic learners, consistency eliminates ambiguity and reduces cognitive load. You don't have to wonder "is this the same thing with a different name?" - it's ALWAYS the same name!

## Pattern Recognition Practice

**Every time you see code, identify the pattern:**

```javascript
console.log("Hello")
```

Ask yourself:
1. What's the **actor**? (console)
2. What's the **action**? (log)
3. What's the **input**? ("Hello")
4. Is this a **line** or a **recipe**? (line)

```python
def greet(name):
    print(f"Hello, {name}")
    return True
```

Convert to OUR standard:
```pseudocode
Recipe greet(name):
    console.log("Hello, " + name)
    Give back true
```

---

**Remember: CONSISTENCY IS KEY. Use the same words every single time, and the patterns will become second nature!**
