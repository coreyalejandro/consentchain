import { PseudoNode } from '../pseudocode-ast';
import { ParseOptions } from './index';
import { parseNaturalLanguage } from './natural-language-parser';

export function parsePseudocode(code: string, options: ParseOptions = {}): PseudoNode[] {
  // Parse our standardized pseudocode format
  // For now, use natural language parser which handles similar syntax
  return parseNaturalLanguage(code, options);
}