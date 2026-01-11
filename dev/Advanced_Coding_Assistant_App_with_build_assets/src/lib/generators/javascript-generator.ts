/**
 * JAVASCRIPT GENERATOR
 * Generates JavaScript code from pseudocode AST
 */

import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generateJavaScript(ast: PseudoNode[], options: GenerateOptions): string {
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
      const keyword = node.isConstant ? 'const' : 'let';
      if (node.value) {
        return [`${indentStr}${keyword} ${node.name} = ${generateExpression(node.value)};`];
      }
      return [`${indentStr}${keyword} ${node.name};`];
    
    case 'Assignment':
      return [`${indentStr}${node.target} = ${generateExpression(node.value)};`];
    
    case 'IfStatement':
      const ifLines = [`${indentStr}if (${generateExpression(node.condition)}) {`];
      node.body.forEach(stmt => ifLines.push(...generateNode(stmt, indent + 1, options)));
      ifLines.push(`${indentStr}}`);
      return ifLines;
    
    case 'ElseIfStatement':
      const elseIfLines = [`${indentStr}else if (${generateExpression(node.condition)}) {`];
      node.body.forEach(stmt => elseIfLines.push(...generateNode(stmt, indent + 1, options)));
      elseIfLines.push(`${indentStr}}`);
      return elseIfLines;
    
    case 'ElseStatement':
      const elseLines = [`${indentStr}else {`];
      node.body.forEach(stmt => elseLines.push(...generateNode(stmt, indent + 1, options)));
      elseLines.push(`${indentStr}}`);
      return elseLines;
    
    case 'WhileLoop':
      const whileLines = [`${indentStr}while (${generateExpression(node.condition)}) {`];
      node.body.forEach(stmt => whileLines.push(...generateNode(stmt, indent + 1, options)));
      whileLines.push(`${indentStr}}`);
      return whileLines;
    
    case 'ForLoop':
      let initStr = '';
      if (node.init.type === 'VariableDeclaration') {
        const kw = node.init.isConstant ? 'const' : 'let';
        initStr = node.init.value 
          ? `${kw} ${node.init.name} = ${generateExpression(node.init.value)}`
          : `${kw} ${node.init.name}`;
      } else {
        initStr = generateExpression(node.init);
      }
      const condition = generateExpression(node.condition);
      const increment = generateExpression(node.increment);
      const forLines = [`${indentStr}for (${initStr}; ${condition}; ${increment}) {`];
      node.body.forEach(stmt => forLines.push(...generateNode(stmt, indent + 1, options)));
      forLines.push(`${indentStr}}`);
      return forLines;
    
    case 'ForEachLoop':
      const forEachLines = [`${indentStr}for (const ${node.variable} of ${generateExpression(node.iterable)}) {`];
      node.body.forEach(stmt => forEachLines.push(...generateNode(stmt, indent + 1, options)));
      forEachLines.push(`${indentStr}}`);
      return forEachLines;
    
    case 'FunctionDeclaration':
      const params = node.parameters.map(p => p.name).join(', ');
      const funcLines = [`${indentStr}function ${node.name}(${params}) {`];
      node.body.forEach(stmt => funcLines.push(...generateNode(stmt, indent + 1, options)));
      funcLines.push(`${indentStr}}`);
      return funcLines;
    
    case 'FunctionCall':
      const args = node.arguments.map(arg => generateExpression(arg)).join(', ');
      return [`${indentStr}${node.name}(${args});`];
    
    case 'ReturnStatement':
      if (node.value) {
        return [`${indentStr}return ${generateExpression(node.value)};`];
      }
      return [`${indentStr}return;`];
    
    case 'PrintStatement':
      return [`${indentStr}console.log(${generateExpression(node.value)});`];
    
    case 'ArrayDeclaration':
      const elements = node.elements.map(el => generateExpression(el)).join(', ');
      return [`${indentStr}const ${node.name} = [${elements}];`];
    
    case 'Comment':
      return options.includeComments ? [`${indentStr}// ${node.text}`] : [];
    
    default:
      return [`${indentStr}// Unsupported node: ${node.type}`];
  }
}

function generateExpression(node: PseudoNode): string {
  switch (node.type) {
    case 'Literal':
      if (node.dataType === 'string') {
        return `'${String(node.value).replace(/'/g, "\\'")}'`;
      }
      if (node.dataType === 'null') {
        return 'null';
      }
      return String(node.value);
    
    case 'Identifier':
      return node.name;
    
    case 'BinaryExpression':
      return `${generateExpression(node.left)} ${node.operator} ${generateExpression(node.right)}`;
    
    case 'UnaryExpression':
      if (node.operator === '++' || node.operator === '--') {
        return `${generateExpression(node.operand)}${node.operator}`;
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
