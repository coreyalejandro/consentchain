/**
 * PYTHON GENERATOR
 * Generates Python code from pseudocode AST
 */

import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generatePython(ast: PseudoNode[], options: GenerateOptions): string {
  const lines: string[] = [];
  
  for (const node of ast) {
    lines.push(...generateNode(node, 0, options));
  }
  
  return lines.join('\n');
}

function generateNode(node: PseudoNode, indent: number, options: GenerateOptions): string[] {
  // Python uses 4 spaces for indentation by default
  const indentSize = options.indentSize === 2 ? 4 : options.indentSize!;
  const indentStr = ' '.repeat(indent * indentSize);
  
  switch (node.type) {
    case 'VariableDeclaration':
      if (node.value) {
        return [`${indentStr}${node.name} = ${generateExpression(node.value)}`];
      }
      return [`${indentStr}${node.name} = None`];
    
    case 'Assignment':
      return [`${indentStr}${node.target} = ${generateExpression(node.value)}`];
    
    case 'IfStatement':
      const ifLines = [`${indentStr}if ${generateExpression(node.condition)}:`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => ifLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        ifLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return ifLines;
    
    case 'ElseIfStatement':
      const elifLines = [`${indentStr}elif ${generateExpression(node.condition)}:`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => elifLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        elifLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return elifLines;
    
    case 'ElseStatement':
      const elseLines = [`${indentStr}else:`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => elseLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        elseLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return elseLines;
    
    case 'WhileLoop':
      const whileLines = [`${indentStr}while ${generateExpression(node.condition)}:`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => whileLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        whileLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return whileLines;
    
    case 'ForLoop':
      // Convert to Python range-based for loop
      const forLines = [`${indentStr}for i in range(${extractRangeFromFor(node)}):`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => forLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        forLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return forLines;
    
    case 'ForEachLoop':
      const forEachLines = [`${indentStr}for ${node.variable} in ${generateExpression(node.iterable)}:`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => forEachLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        forEachLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return forEachLines;
    
    case 'FunctionDeclaration':
      const params = node.parameters.map(p => p.name).join(', ');
      const funcLines = [`${indentStr}def ${node.name}(${params}):`];
      if (node.body.length > 0) {
        node.body.forEach(stmt => funcLines.push(...generateNode(stmt, indent + 1, options)));
      } else {
        funcLines.push(`${' '.repeat((indent + 1) * indentSize)}pass`);
      }
      return funcLines;
    
    case 'FunctionCall':
      const args = node.arguments.map(arg => generateExpression(arg)).join(', ');
      return [`${indentStr}${node.name}(${args})`];
    
    case 'ReturnStatement':
      if (node.value) {
        return [`${indentStr}return ${generateExpression(node.value)}`];
      }
      return [`${indentStr}return`];
    
    case 'PrintStatement':
      return [`${indentStr}print(${generateExpression(node.value)})`];
    
    case 'ArrayDeclaration':
      const elements = node.elements.map(el => generateExpression(el)).join(', ');
      return [`${indentStr}${node.name} = [${elements}]`];
    
    case 'Comment':
      return options.includeComments ? [`${indentStr}# ${node.text}`] : [];
    
    default:
      return [`${indentStr}# Unsupported node: ${node.type}`];
  }
}

function generateExpression(node: PseudoNode): string {
  switch (node.type) {
    case 'Literal':
      if (node.dataType === 'string') {
        return `'${String(node.value).replace(/'/g, "\\'")}'`;
      }
      if (node.dataType === 'null') {
        return 'None';
      }
      if (node.dataType === 'boolean') {
        return node.value ? 'True' : 'False';
      }
      return String(node.value);
    
    case 'Identifier':
      return node.name;
    
    case 'BinaryExpression':
      const opMap: Record<string, string> = {
        '&&': 'and',
        '||': 'or',
        '==': '==',
        '!=': '!=',
        '%': '%'
      };
      const op = opMap[node.operator] || node.operator;
      return `${generateExpression(node.left)} ${op} ${generateExpression(node.right)}`;
    
    case 'UnaryExpression':
      if (node.operator === '!') {
        return `not ${generateExpression(node.operand)}`;
      }
      return `${node.operator}${generateExpression(node.operand)}`;
    
    case 'ArrayAccess':
      return `${node.array}[${generateExpression(node.index)}]`;
    
    case 'PropertyAccess':
      return `${node.object}.${node.property}`;
    
    case 'FunctionCall':
      const args = node.arguments.map(arg => generateExpression(arg)).join(', ');
      return `${node.name}(${args})`;
    
    case 'VariableDeclaration':
      return node.name;
    
    case 'Assignment':
      return `${node.target} = ${generateExpression(node.value)}`;
    
    default:
      return '';
  }
}

function extractRangeFromFor(node: any): string {
  // Try to extract range from for loop
  // Common pattern: for(let i = 0; i < n; i++)
  try {
    if (node.condition && node.condition.type === 'BinaryExpression') {
      const right = node.condition.right;
      if (right.type === 'Literal') {
        return String(right.value);
      } else if (right.type === 'Identifier') {
        return right.name;
      }
    }
  } catch (e) {
    // Fallback
  }
  return '10';
}