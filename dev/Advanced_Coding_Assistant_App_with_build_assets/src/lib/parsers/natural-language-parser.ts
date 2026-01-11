/**
 * NATURAL LANGUAGE PARSER
 * 
 * Converts natural language descriptions into pseudocode AST
 */

import { PseudoNode, VariableDeclaration, IfStatement, PrintStatement, Literal, Identifier, BinaryExpression, WhileLoop, ForLoop, Assignment, Comment } from '../pseudocode-ast';
import { ParseOptions } from './index';

export function parseNaturalLanguage(code: string, options: ParseOptions = {}): PseudoNode[] {
  const lines = code.split('\n');
  const ast: PseudoNode[] = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i].trim();
    
    if (!line) {
      i++;
      continue;
    }
    
    const result = parseLine(line, lines, i);
    if (result) {
      ast.push(result.node);
      i = result.nextIndex;
    } else {
      i++;
    }
  }
  
  return ast;
}

function parseLine(line: string, allLines: string[], currentIndex: number): { node: PseudoNode; nextIndex: number } | null {
  const lower = line.toLowerCase();
  
  // Variable declarations
  if (lower.match(/^(set|create|make|declare|define|let|var)/)) {
    return parseVariableDeclaration(line, currentIndex);
  }
  
  // Conditionals
  if (lower.startsWith('if ')) {
    return parseIfStatement(line, allLines, currentIndex);
  }
  
  // Loops
  if (lower.match(/^(while|loop|repeat)/)) {
    return parseLoop(line, allLines, currentIndex);
  }
  
  // Print statements
  if (lower.match(/^(print|display|output|show|log)/)) {
    return parsePrintStatement(line, currentIndex);
  }
  
  // Comments
  if (lower.startsWith('//') || lower.startsWith('#')) {
    return {
      node: {
        type: 'Comment',
        text: line.replace(/^(\/\/|#)\s*/, '')
      },
      nextIndex: currentIndex + 1
    };
  }
  
  // Assignment (existing variable)
  if (lower.match(/^\w+\s*(=|is|becomes|equals)\s*.+/)) {
    return parseAssignment(line, currentIndex);
  }
  
  // Default: treat as comment
  return {
    node: {
      type: 'Comment',
      text: line
    },
    nextIndex: currentIndex + 1
  };
}

function parseVariableDeclaration(line: string, index: number): { node: PseudoNode; nextIndex: number } | null {
  // Patterns:
  // "set x to 5"
  // "create variable name = John"
  // "declare age as 25"
  // "make count equal to 0"
  
  const patterns = [
    /^(?:set|create|make|declare|define|let|var)\s+(?:a\s+)?(?:variable\s+)?(?:called\s+)?(\w+)\s+(?:to|=|equals?|is|as)\s+(.+)/i,
    /^(\w+)\s*=\s*(.+)/i
  ];
  
  for (const pattern of patterns) {
    const match = line.match(pattern);
    if (match) {
      const [, name, valueStr] = match;
      const value = parseValue(valueStr.trim());
      
      return {
        node: {
          type: 'VariableDeclaration',
          name: name.trim(),
          value,
          dataType: inferType(value)
        },
        nextIndex: index + 1
      };
    }
  }
  
  return null;
}

function parseAssignment(line: string, index: number): { node: PseudoNode; nextIndex: number } | null {
  const match = line.match(/^(\w+)\s*(?:=|is|becomes|equals?)\s*(.+)/i);
  if (match) {
    const [, name, valueStr] = match;
    const value = parseValue(valueStr.trim());
    
    return {
      node: {
        type: 'Assignment',
        target: name.trim(),
        value
      },
      nextIndex: index + 1
    };
  }
  
  return null;
}

function parseIfStatement(line: string, allLines: string[], index: number): { node: PseudoNode; nextIndex: number } | null {
  // Pattern: "if condition then" or just "if condition"
  const conditionMatch = line.match(/^if\s+(.+?)(?:\s+then)?$/i);
  if (!conditionMatch) return null;
  
  const condition = parseCondition(conditionMatch[1]);
  const body: PseudoNode[] = [];
  
  // Find body (indented lines or until else/end)
  let i = index + 1;
  while (i < allLines.length) {
    const nextLine = allLines[i].trim();
    const lower = nextLine.toLowerCase();
    
    if (!nextLine) {
      i++;
      continue;
    }
    
    if (lower.match(/^(else|otherwise|end|end if|endif)/)) {
      break;
    }
    
    const result = parseLine(nextLine, allLines, i);
    if (result) {
      body.push(result.node);
      i = result.nextIndex;
    } else {
      i++;
    }
  }
  
  return {
    node: {
      type: 'IfStatement',
      condition,
      body
    },
    nextIndex: i
  };
}

function parseLoop(line: string, allLines: string[], index: number): { node: PseudoNode; nextIndex: number } | null {
  const lower = line.toLowerCase();
  
  // While loop
  if (lower.startsWith('while ')) {
    const conditionMatch = line.match(/^while\s+(.+?)(?:\s+do)?(?:\s*:)?$/i);
    if (conditionMatch) {
      const condition = parseCondition(conditionMatch[1]);
      const body: PseudoNode[] = [];
      
      let i = index + 1;
      while (i < allLines.length) {
        const nextLine = allLines[i].trim();
        const nextLower = nextLine.toLowerCase();
        
        if (!nextLine) {
          i++;
          continue;
        }
        
        if (nextLower.match(/^(end|end while|endwhile)/)) {
          i++;
          break;
        }
        
        const result = parseLine(nextLine, allLines, i);
        if (result) {
          body.push(result.node);
          i = result.nextIndex;
        } else {
          i++;
        }
      }
      
      return {
        node: {
          type: 'WhileLoop',
          condition,
          body
        },
        nextIndex: i
      };
    }
  }
  
  // Repeat N times
  if (lower.match(/^repeat\s+\d+\s+times?/)) {
    const match = line.match(/^repeat\s+(\d+)\s+times?/i);
    if (match) {
      const times = parseInt(match[1]);
      const body: PseudoNode[] = [];
      
      let i = index + 1;
      while (i < allLines.length) {
        const nextLine = allLines[i].trim();
        const nextLower = nextLine.toLowerCase();
        
        if (!nextLine) {
          i++;
          continue;
        }
        
        if (nextLower.match(/^(end|end repeat|endrepeat)/)) {
          i++;
          break;
        }
        
        const result = parseLine(nextLine, allLines, i);
        if (result) {
          body.push(result.node);
          i = result.nextIndex;
        } else {
          i++;
        }
      }
      
      return {
        node: {
          type: 'ForLoop',
          init: {
            type: 'VariableDeclaration',
            name: 'i',
            value: { type: 'Literal', value: 0, dataType: 'number' },
            dataType: 'number'
          },
          condition: {
            type: 'BinaryExpression',
            operator: '<',
            left: { type: 'Identifier', name: 'i' },
            right: { type: 'Literal', value: times, dataType: 'number' }
          },
          increment: {
            type: 'Assignment',
            target: 'i',
            value: {
              type: 'BinaryExpression',
              operator: '+',
              left: { type: 'Identifier', name: 'i' },
              right: { type: 'Literal', value: 1, dataType: 'number' }
            }
          },
          body
        },
        nextIndex: i
      };
    }
  }
  
  return null;
}

function parsePrintStatement(line: string, index: number): { node: PseudoNode; nextIndex: number } | null {
  const match = line.match(/^(?:print|display|output|show|log)\s+(.+)/i);
  if (match) {
    const value = parseValue(match[1].trim());
    return {
      node: {
        type: 'PrintStatement',
        value
      },
      nextIndex: index + 1
    };
  }
  
  return null;
}

function parseCondition(conditionStr: string): PseudoNode {
  const str = conditionStr.trim();
  
  // Handle comparison operators
  const comparisonPatterns = [
    { pattern: /(.+?)\s+(?:is\s+)?greater\s+than\s+(?:or\s+equal\s+to\s+)?(.+)/i, op: '>=' as const },
    { pattern: /(.+?)\s+(?:is\s+)?greater\s+than\s+(.+)/i, op: '>' as const },
    { pattern: /(.+?)\s+(?:is\s+)?less\s+than\s+(?:or\s+equal\s+to\s+)?(.+)/i, op: '<=' as const },
    { pattern: /(.+?)\s+(?:is\s+)?less\s+than\s+(.+)/i, op: '<' as const },
    { pattern: /(.+?)\s+(?:is\s+)?(?:equal\s+to|equals)\s+(.+)/i, op: '==' as const },
    { pattern: /(.+?)\s+(?:is\s+)?not\s+equal\s+to\s+(.+)/i, op: '!=' as const },
    { pattern: /(.+?)\s+>=\s+(.+)/, op: '>=' as const },
    { pattern: /(.+?)\s+>\s+(.+)/, op: '>' as const },
    { pattern: /(.+?)\s+<=\s+(.+)/, op: '<=' as const },
    { pattern: /(.+?)\s+<\s+(.+)/, op: '<' as const },
    { pattern: /(.+?)\s+===?\s+(.+)/, op: '==' as const },
    { pattern: /(.+?)\s+!==?\s+(.+)/, op: '!=' as const }
  ];
  
  for (const { pattern, op } of comparisonPatterns) {
    const match = str.match(pattern);
    if (match) {
      return {
        type: 'BinaryExpression',
        operator: op,
        left: parseValue(match[1].trim()),
        right: parseValue(match[2].trim())
      };
    }
  }
  
  // If no operator found, treat as identifier
  return parseValue(str);
}

function parseValue(valueStr: string): PseudoNode {
  const str = valueStr.trim();
  
  // String literals (quoted)
  if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
    return {
      type: 'Literal',
      value: str.slice(1, -1),
      dataType: 'string'
    };
  }
  
  // Number literals
  if (/^-?\d+(\.\d+)?$/.test(str)) {
    return {
      type: 'Literal',
      value: parseFloat(str),
      dataType: 'number'
    };
  }
  
  // Boolean literals
  if (str.toLowerCase() === 'true' || str.toLowerCase() === 'false') {
    return {
      type: 'Literal',
      value: str.toLowerCase() === 'true',
      dataType: 'boolean'
    };
  }
  
  // Null
  if (str.toLowerCase() === 'null' || str.toLowerCase() === 'none') {
    return {
      type: 'Literal',
      value: null,
      dataType: 'null'
    };
  }
  
  // Identifier (variable name)
  return {
    type: 'Identifier',
    name: str
  };
}

function inferType(value: PseudoNode): 'string' | 'number' | 'boolean' | 'null' | 'any' {
  if (value.type === 'Literal') {
    return value.dataType;
  }
  return 'any';
}