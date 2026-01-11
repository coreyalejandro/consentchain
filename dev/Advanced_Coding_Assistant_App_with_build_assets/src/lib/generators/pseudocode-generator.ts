/**
 * PSEUDOCODE GENERATOR
 * Generates our standardized pseudocode format from AST
 */

import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generatePseudocode(ast: PseudoNode[], options: GenerateOptions): string {
  const lines: string[] = [];
  
  for (const node of ast) {
    lines.push(...generateNode(node, 0, options));
  }
  
  return lines.join('\n');
}

function generateNode(node: PseudoNode, indent: number, options: GenerateOptions): string[] {
  const indentStr = options.indentChar!.repeat(indent * options.indentSize!);
  
  switch (node.type) {
    case 'VariableDeclaration':
      if (node.isConstant) {
        return [`${indentStr}CONSTANT ${node.name} IS ${generateExpression(node.value!)}`];
      }
      return [`${indentStr}SET ${node.name} TO ${generateExpression(node.value!)}`];
    
    case 'Assignment':
      return [`${indentStr}SET ${node.target} TO ${generateExpression(node.value)}`];
    
    case 'IfStatement':
      const ifLines = [`${indentStr}IF ${generateExpression(node.condition)} THEN`];
      node.body.forEach(stmt => ifLines.push(...generateNode(stmt, indent + 1, options)));
      ifLines.push(`${indentStr}END IF`);
      return ifLines;
    
    case 'WhileLoop':
      const whileLines = [`${indentStr}WHILE ${generateExpression(node.condition)} DO`];
      node.body.forEach(stmt => whileLines.push(...generateNode(stmt, indent + 1, options)));
      whileLines.push(`${indentStr}END WHILE`);
      return whileLines;
    
    case 'ForLoop':
      const forLines = [`${indentStr}FOR LOOP`];
      node.body.forEach(stmt => forLines.push(...generateNode(stmt, indent + 1, options)));
      forLines.push(`${indentStr}END FOR`);
      return forLines;
    
    case 'ForEachLoop':
      const forEachLines = [`${indentStr}FOR EACH ${node.variable} IN ${generateExpression(node.iterable)} DO`];
      node.body.forEach(stmt => forEachLines.push(...generateNode(stmt, indent + 1, options)));
      forEachLines.push(`${indentStr}END FOR EACH`);
      return forEachLines;
    
    case 'PrintStatement':
      return [`${indentStr}PRINT ${generateExpression(node.value)}`];
    
    case 'Comment':
      return options.includeComments ? [`${indentStr}// ${node.text}`] : [];
    
    default:
      return [`${indentStr}// ${JSON.stringify(node)}`];
  }
}

function generateExpression(node: PseudoNode): string {
  switch (node.type) {
    case 'Literal':
      if (node.dataType === 'string') {
        return `"${node.value}"`;
      }
      return String(node.value);
    
    case 'Identifier':
      return node.name;
    
    case 'BinaryExpression':
      const opMap: Record<string, string> = {
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '%': 'MOD',
        '==': '==',
        '!=': '!=',
        '<': '<',
        '>': '>',
        '<=': '<=',
        '>=': '>=',
        '&&': 'AND',
        '||': 'OR'
      };
      return `${generateExpression(node.left)} ${opMap[node.operator] || node.operator} ${generateExpression(node.right)}`;
    
    default:
      return '';
  }
}