import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generateGo(ast: PseudoNode[], options: GenerateOptions): string {
  const lines: string[] = [];
  
  lines.push('package main');
  lines.push('');
  lines.push('import "fmt"');
  lines.push('');
  lines.push('func main() {');
  
  for (const node of ast) {
    lines.push(...generateNode(node, 1, options));
  }
  
  lines.push('}');
  
  return lines.join('\n');
}

function generateNode(node: PseudoNode, indent: number, options: GenerateOptions): string[] {
  const indentStr = '\t'.repeat(indent);
  
  switch (node.type) {
    case 'VariableDeclaration':
      if (node.value) {
        return [`${indentStr}${node.name} := ${generateExpression(node.value)}`];
      }
      return [`${indentStr}var ${node.name} interface{}`];
    
    case 'Assignment':
      return [`${indentStr}${node.target} = ${generateExpression(node.value)}`];
    
    case 'IfStatement':
      const ifLines = [`${indentStr}if ${generateExpression(node.condition)} {`];
      node.body.forEach(stmt => ifLines.push(...generateNode(stmt, indent + 1, options)));
      ifLines.push(`${indentStr}}`);
      return ifLines;
    
    case 'WhileLoop':
      const whileLines = [`${indentStr}for ${generateExpression(node.condition)} {`];
      node.body.forEach(stmt => whileLines.push(...generateNode(stmt, indent + 1, options)));
      whileLines.push(`${indentStr}}`);
      return whileLines;
    
    case 'PrintStatement':
      return [`${indentStr}fmt.Println(${generateExpression(node.value)})`];
    
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
      const opMap: Record<string, string> = {
        '&&': '&&',
        '||': '||'
      };
      const op = opMap[node.operator] || node.operator;
      return `${generateExpression(node.left)} ${op} ${generateExpression(node.right)}`;
    
    default:
      return '';
  }
}