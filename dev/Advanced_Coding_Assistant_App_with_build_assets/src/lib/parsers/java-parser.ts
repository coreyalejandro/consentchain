import { PseudoNode } from '../pseudocode-ast';
import { ParseOptions } from './index';
import { parseNaturalLanguage } from './natural-language-parser';

export function parseJava(code: string, options: ParseOptions = {}): PseudoNode[] {
  // For now, use natural language parser as fallback
  // TODO: Implement proper Java AST parser
  return parseNaturalLanguage(code, options);
}