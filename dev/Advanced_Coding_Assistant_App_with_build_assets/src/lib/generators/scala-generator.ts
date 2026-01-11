import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generateScala(ast: PseudoNode[], options: GenerateOptions): string {
  const lines: string[] = [];
  
  lines.push('object Main extends App {');
  
  for (const node of ast) {
    lines.push(...generateNode(node, 1, options));
  }
  
  lines.push('}');
  
  return lines.join('\n');
}

function generateNode(node: PseudoNode, indent: number, options: GenerateOptions): string[] {
  const indentStr = '  '.repeat(indent);
  
  switch (node.type) {
    case 'VariableDeclaration':
      const keyword = node.isConstant ? 'val' : 'var';
      if (node.value) {
        return [`${indentStr}${keyword} ${node.name} = ${generateExpression(node.value)}`];
      }
      return [`${indentStr}${keyword} ${node.name}: Any = null`];
    
    case 'Assignment':
      return [`${indentStr}${node.target} = ${generateExpression(node.value)}`];
    
    case 'IfStatement':
      const ifLines = [`${indentStr}if (${generateExpression(node.condition)}) {`];
      node.body.forEach(stmt => ifLines.push(...generateNode(stmt, indent + 1, options)));
      ifLines.push(`${indentStr}}`);
      return ifLines;
    
    case 'WhileLoop':
      const whileLines = [`${indentStr}while (${generateExpression(node.condition)}) {`];
      node.body.forEach(stmt => whileLines.push(...generateNode(stmt, indent + 1, options)));
      whileLines.push(`${indentStr}}`);
      return whileLines;
    
    case 'PrintStatement':
      return [`${indentStr}println(${generateExpression(node.value)})`];
    
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
        return `"${String(node.value).replace(/"/g, '\\"')}"`;
      }
      return String(node.value);
    
    case 'Identifier':
      return node.name;
    
    case 'BinaryExpression':
      return `${generateExpression(node.left)} ${node.operator} ${generateExpression(node.right)}`;
    
    default:
      return '';
  }
}