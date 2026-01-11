/**
 * UNIVERSAL CODE GENERATOR
 * 
 * This module coordinates generation from pseudocode AST to various target languages
 */

import { PseudoNode } from '../pseudocode-ast';
import { generatePseudocode } from './pseudocode-generator';
import { generateJavaScript } from './javascript-generator';
import { generateTypeScript } from './typescript-generator';
import { generatePython } from './python-generator';
import { generateJava } from './java-generator';
import { generateScala } from './scala-generator';
import { generateRust } from './rust-generator';
import { generateGo } from './go-generator';

export type OutputLanguage = 
  | 'pseudocode'
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'scala'
  | 'rust'
  | 'go';

export interface GenerateOptions {
  indentSize?: number;
  indentChar?: ' ' | '\t';
  includeComments?: boolean;
  strictMode?: boolean;
}

/**
 * Main generation function - converts pseudocode AST to target language
 */
export function generateCode(ast: PseudoNode[], language: OutputLanguage, options: GenerateOptions = {}): string {
  const defaultOptions: GenerateOptions = {
    indentSize: 2,
    indentChar: ' ',
    includeComments: true,
    ...options
  };
  
  try {
    switch (language) {
      case 'pseudocode':
        return generatePseudocode(ast, defaultOptions);
      case 'javascript':
        return generateJavaScript(ast, defaultOptions);
      case 'typescript':
        return generateTypeScript(ast, defaultOptions);
      case 'python':
        return generatePython(ast, defaultOptions);
      case 'java':
        return generateJava(ast, defaultOptions);
      case 'scala':
        return generateScala(ast, defaultOptions);
      case 'rust':
        return generateRust(ast, defaultOptions);
      case 'go':
        return generateGo(ast, defaultOptions);
      default:
        throw new Error(`Unsupported output language: ${language}`);
    }
  } catch (error) {
    console.error(`Error generating ${language}:`, error);
    throw error;
  }
}