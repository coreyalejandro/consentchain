/**
 * Terminology Enforcer
 * 
 * Gently steers users to use our standardized pseudocode terminology
 * by detecting common variations and suggesting corrections.
 */

export interface TerminologySuggestion {
  original: string;
  suggested: string;
  reason: string;
  category: 'actor' | 'action' | 'recipe' | 'control' | 'variable';
}

/**
 * Standard terminology mappings
 * Maps common variations to our standard terms
 */
const TERMINOLOGY_MAP: Record<string, { standard: string; category: TerminologySuggestion['category']; reason: string }> = {
  // Actor variations
  'object': { standard: 'actor', category: 'actor', reason: 'We use "actor" to identify who/what does the action' },
  'thing': { standard: 'actor', category: 'actor', reason: 'We use "actor" to identify who/what does the action' },
  'person': { standard: 'actor', category: 'actor', reason: 'We use "actor" to identify who/what does the action' },
  'doer': { standard: 'actor', category: 'actor', reason: 'We use "actor" to identify who/what does the action' },
  'entity': { standard: 'actor', category: 'actor', reason: 'We use "actor" to identify who/what does the action' },
  
  // Action variations (at line level)
  'method': { standard: 'action', category: 'action', reason: 'At line level, we say "action" (method is the technical term)' },
  'function call': { standard: 'action', category: 'action', reason: 'At line level, we say "action"' },
  
  // Recipe variations
  'function': { standard: 'Recipe', category: 'recipe', reason: 'We say "Recipe" instead of "function" to make it more relatable' },
  'method': { standard: 'Recipe', category: 'recipe', reason: 'We say "Recipe" instead of "method" when defining grouped actions' },
  'procedure': { standard: 'Recipe', category: 'recipe', reason: 'We say "Recipe" - a set of steps to accomplish a task' },
  'def': { standard: 'Recipe', category: 'recipe', reason: 'We say "Recipe" instead of "def" (Python-specific term)' },
  'subroutine': { standard: 'Recipe', category: 'recipe', reason: 'We say "Recipe" to keep it simple and consistent' },
  
  // Return variations
  'return': { standard: 'Give back', category: 'recipe', reason: 'We say "Give back" instead of "return" - more natural language' },
  'returns': { standard: 'Gives back', category: 'recipe', reason: 'We say "Gives back" instead of "returns"' },
  'output': { standard: 'Give back', category: 'recipe', reason: 'We say "Give back" to show the recipe produces a result' },
  
  // Parameter/input variations
  'parameter': { standard: 'ingredient', category: 'recipe', reason: 'For recipes, we say "ingredient" (what the recipe needs)' },
  'param': { standard: 'ingredient', category: 'recipe', reason: 'For recipes, we say "ingredient"' },
  'argument': { standard: 'input', category: 'action', reason: 'For actions, we say "input" (what the action needs)' },
  'arg': { standard: 'input', category: 'action', reason: 'For actions, we say "input"' },
  
  // Control structure variations
  'if else': { standard: 'IF...THEN...OTHERWISE', category: 'control', reason: 'We use "IF...THEN...OTHERWISE...END IF" for clarity' },
  'elif': { standard: 'OTHERWISE IF', category: 'control', reason: 'We say "OTHERWISE IF" instead of "elif"' },
  'else if': { standard: 'OTHERWISE IF', category: 'control', reason: 'We say "OTHERWISE IF" for consistency' },
  'else': { standard: 'OTHERWISE', category: 'control', reason: 'We say "OTHERWISE" instead of "else"' },
  
  // Variable variations
  'let': { standard: 'SET...TO', category: 'variable', reason: 'We say "SET variableName TO value" instead of "let"' },
  'var': { standard: 'SET...TO', category: 'variable', reason: 'We say "SET variableName TO value" instead of "var"' },
  'const': { standard: 'CONSTANT...IS', category: 'variable', reason: 'We say "CONSTANT name IS value" for unchanging values' },
  'define': { standard: 'SET...TO', category: 'variable', reason: 'We say "SET variableName TO value"' },
  
  // Loop variations
  'for loop': { standard: 'FOR...FROM...TO...DO', category: 'control', reason: 'We say "FOR counter FROM start TO end DO"' },
  'foreach': { standard: 'FOR EACH...IN...DO', category: 'control', reason: 'We say "FOR EACH item IN collection DO"' },
  'for each': { standard: 'FOR EACH...IN...DO', category: 'control', reason: 'We say "FOR EACH item IN collection DO"' },
  'while loop': { standard: 'WHILE...DO', category: 'control', reason: 'We say "WHILE condition DO"' },
};

/**
 * Detects non-standard terminology and suggests corrections
 */
export function detectTerminologyIssues(text: string): TerminologySuggestion[] {
  const suggestions: TerminologySuggestion[] = [];
  const lowerText = text.toLowerCase();
  
  // Check each variation
  for (const [variation, info] of Object.entries(TERMINOLOGY_MAP)) {
    // Look for whole word matches (with word boundaries)
    const regex = new RegExp(`\\b${variation}\\b`, 'gi');
    const matches = text.match(regex);
    
    if (matches) {
      suggestions.push({
        original: matches[0], // Keep original case
        suggested: info.standard,
        reason: info.reason,
        category: info.category
      });
    }
  }
  
  return suggestions;
}

/**
 * Normalizes text to use standard terminology
 */
export function normalizeTerminology(text: string): { normalized: string; suggestions: TerminologySuggestion[] } {
  let normalized = text;
  const suggestions = detectTerminologyIssues(text);
  
  // Apply replacements
  for (const [variation, info] of Object.entries(TERMINOLOGY_MAP)) {
    const regex = new RegExp(`\\b${variation}\\b`, 'gi');
    normalized = normalized.replace(regex, info.standard);
  }
  
  return { normalized, suggestions };
}

/**
 * Gets help text for a specific term
 */
export function getTermHelp(term: string): string | null {
  const lowerTerm = term.toLowerCase();
  const info = TERMINOLOGY_MAP[lowerTerm];
  
  if (info) {
    return `💡 Standard Term: "${info.standard}" - ${info.reason}`;
  }
  
  return null;
}

/**
 * Checks if text follows standard terminology
 */
export function isStandardTerminology(text: string): boolean {
  const issues = detectTerminologyIssues(text);
  return issues.length === 0;
}

/**
 * Gets a formatted message about terminology issues
 */
export function getTerminologyFeedback(suggestions: TerminologySuggestion[]): string {
  if (suggestions.length === 0) {
    return '✅ Great! You\'re using our standard terminology.';
  }
  
  const grouped = suggestions.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, TerminologySuggestion[]>);
  
  let feedback = '💡 Terminology Suggestions:\n\n';
  
  for (const [category, items] of Object.entries(grouped)) {
    const unique = Array.from(new Set(items.map(i => i.original)));
    for (const original of unique) {
      const item = items.find(i => i.original === original)!;
      feedback += `• Instead of "${original}", try "${item.suggested}"\n  ${item.reason}\n\n`;
    }
  }
  
  feedback += '📚 Using consistent terms helps your brain recognize patterns faster!';
  
  return feedback;
}

/**
 * Pattern-specific suggestions
 */
export const PATTERN_HELP = {
  actorAction: {
    title: 'Line Pattern (Level 1)',
    format: 'actor.action(input)',
    description: 'Single instruction where an actor does one action',
    examples: [
      'console.log("Hello") // console (actor) does log (action)',
      'array.push(item) // array (actor) does push (action)',
      'Math.random() // Math (actor) does random (action)'
    ],
    rules: [
      'Always use "actor" not "object", "thing", or "person"',
      'Always use "action" not "method" or "function" at this level',
      'Always use "input" not "parameter" or "argument" at this level'
    ]
  },
  
  recipe: {
    title: 'Recipe Pattern (Level 2)',
    format: 'Recipe recipeName(ingredients):\n    actor.action(input)\n    Give back result',
    description: 'Named group of lines that accomplish one task',
    examples: [
      'Recipe greetPerson(name):\n    console.log("Hello, " + name)\n    Give back true'
    ],
    rules: [
      'Always start with "Recipe" not "function", "def", or "method"',
      'Use "ingredients" for what the recipe needs',
      'Use "Give back" not "return" for results',
      'Inside recipes, use actor.action(input) for each step'
    ]
  },
  
  program: {
    title: 'Program Pattern (Level 3)',
    format: 'Multiple recipes working together',
    description: 'Recipes calling other recipes to solve a bigger problem',
    examples: [
      'Recipe main():\n    data = getData()\n    result = process(data)\n    display(result)'
    ],
    rules: [
      'Programs are just recipes that call other recipes',
      'The main recipe coordinates everything',
      'Each recipe does ONE job well',
      'Calling a recipe is STILL actor.action!'
    ]
  }
};
