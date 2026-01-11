import { generateJavaScript } from './javascript-generator';
import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generateTypeScript(ast: PseudoNode[], options: GenerateOptions): string {
  // TypeScript is mostly identical to JavaScript for basic constructs
  // TODO: Add type annotations
  return generateJavaScript(ast, options);
}