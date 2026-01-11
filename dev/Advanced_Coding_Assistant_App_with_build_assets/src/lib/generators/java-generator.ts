import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export function generateJava(ast: PseudoNode[], options: GenerateOptions): string {
  const lines: string[] = [];
  
  lines.push('public class Main {');
  lines.push('    public static void main(String[] args) {');
  
  for (const node of ast) {
    lines.push(...generateNode(node, 2, options));
  }
  
  lines.push('    }');
  lines.push('}');
  
  return lines.join('\n');
}

function generateNode(node: PseudoNode, indent: number, options: GenerateOptions): string[] {
  const indentStr = '    '.repeat(indent);
  
  switch (node.type) {
    case 'VariableDeclaration':
      const type = inferJavaType(node.value);
      if (node.value) {
        return [`${indentStr}${type} ${node.name} = ${generateExpression(node.value)};`];
      }
      return [`${indentStr}${type} ${node.name};`];
    
    case 'Assignment':
      return [`${indentStr}${node.target} = ${generateExpression(node.value)};`];
    
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
    
    case 'ForLoop':
      const init = generateExpression(node.init);
      const condition = generateExpression(node.condition);
      const increment = generateExpression(node.increment);
      const forLines = [`${indentStr}for (${init}; ${condition}; ${increment}) {`];
      node.body.forEach(stmt => forLines.push(...generateNode(stmt, indent + 1, options)));
      forLines.push(`${indentStr}}`);
      return forLines;
    
    case 'PrintStatement':
      return [`${indentStr}System.out.println(${generateExpression(node.value)});`];
    
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
    
    case 'VariableDeclaration':
      return `int ${node.name}`;
    
    case 'Assignment':
      return `${node.target} = ${generateExpression(node.value)}`;
    
    default:
      return '';
  }
}

function inferJavaType(value?: PseudoNode): string {
  if (!value || value.type !== 'Literal') return 'Object';
  
  switch (value.dataType) {
    case 'number':
      return Number.isInteger(value.value) ? 'int' : 'double';
    case 'string':
      return 'String';
    case 'boolean':
      return 'boolean';
    default:
      return 'Object';
  }
}