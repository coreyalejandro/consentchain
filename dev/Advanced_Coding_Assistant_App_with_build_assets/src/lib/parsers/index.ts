/**
 * UNIVERSAL CODE PARSER
 * 
 * This module coordinates parsing from various languages/formats into our
 * standardized pseudocode AST.
 */

import { PseudoNode } from '../pseudocode-ast';
import { parseNaturalLanguage } from './natural-language-parser';
import { parseJavaScript } from './javascript-parser';
import { parsePython } from './python-parser';
import { parseJava } from './java-parser';
import { parseTypeScript } from './typescript-parser';
import { parseRust } from './rust-parser';
import { parseGo } from './go-parser';
import { parseScala } from './scala-parser';
import { parsePseudocode } from './pseudocode-parser';

export type InputLanguage = 
  | 'natural'
  | 'pseudocode'
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'scala'
  | 'rust'
  | 'go';

export interface ParseOptions {
  strict?: boolean;
  preserveComments?: boolean;
}

/**
 * Detects the language of the input code
 */
export function detectLanguage(code: string): InputLanguage {
  const trimmed = code.trim();
  
  // Check for pseudocode keywords
  if (/\b(SET|DECLARE|CONSTANT|IF.*THEN|WHILE.*DO|FOR.*TO|FUNCTION.*RETURNS|END IF|END WHILE|END FOR|END FUNCTION)\b/i.test(trimmed)) {
    return 'pseudocode';
  }
  
  // Check for Python-specific syntax
  if (/^(def|class|import|from|if.*:|while.*:|for.*in.*:)/m.test(trimmed) || trimmed.includes('print(')) {
    return 'python';
  }
  
  // Check for Java-specific syntax
  if (/\b(public|private|protected|class|interface|extends|implements|static)\b/.test(trimmed) && 
      (trimmed.includes('System.out.println') || /\bclass\s+\w+/.test(trimmed))) {
    return 'java';
  }
  
  // Check for Rust-specific syntax
  if (/\b(fn|let|mut|impl|trait|pub|mod|use)\b/.test(trimmed) && 
      (/->/.test(trimmed) || /println!/.test(trimmed))) {
    return 'rust';
  }
  
  // Check for Go-specific syntax
  if (/\b(func|package|import|type|var|const|range)\b/.test(trimmed) && 
      (/fmt\.Print/.test(trimmed) || /func\s+\w+\(/.test(trimmed))) {
    return 'go';
  }
  
  // Check for Scala-specific syntax
  if (/\b(def|val|var|object|class|trait|extends|with)\b/.test(trimmed) && 
      (/println/.test(trimmed) || /def\s+\w+/.test(trimmed))) {
    return 'scala';
  }
  
  // Check for TypeScript-specific syntax
  if ((/:\s*(string|number|boolean|any|void)/.test(trimmed) || 
       /interface\s+\w+/.test(trimmed) || 
       /type\s+\w+\s*=/.test(trimmed)) &&
      (/\b(const|let|var|function|=>)\b/.test(trimmed))) {
    return 'typescript';
  }
  
  // Check for JavaScript
  if (/\b(const|let|var|function|=>|console\.log)\b/.test(trimmed)) {
    return 'javascript';
  }
  
  // Default to natural language
  return 'natural';
}

/**
 * Main parsing function - converts any supported language to pseudocode AST
 */
export function parseToAST(code: string, language?: InputLanguage, options: ParseOptions = {}): PseudoNode[] {
  const detectedLanguage = language || detectLanguage(code);
  
  try {
    switch (detectedLanguage) {
      case 'natural':
        return parseNaturalLanguage(code, options);
      case 'pseudocode':
        return parsePseudocode(code, options);
      case 'javascript':
        return parseJavaScript(code, options);
      case 'typescript':
        return parseTypeScript(code, options);
      case 'python':
        return parsePython(code, options);
      case 'java':
        return parseJava(code, options);
      case 'scala':
        return parseScala(code, options);
      case 'rust':
        return parseRust(code, options);
      case 'go':
        return parseGo(code, options);
      default:
        return parseNaturalLanguage(code, options);
    }
  } catch (error) {
    console.error(`Error parsing ${detectedLanguage}:`, error);
    // Fallback to natural language parser
    return parseNaturalLanguage(code, options);
  }
}