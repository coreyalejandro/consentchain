/**
 * ANNOTATED JAVASCRIPT GENERATOR
 * Generates JavaScript with extensive metacognitive comments for learning
 */

import { PseudoNode } from '../pseudocode-ast';
import { GenerateOptions } from './index';

export interface AnnotationOptions extends GenerateOptions {
  showMetacognition?: boolean; // Show "thinking out loud" comments
  showActorPattern?: boolean;  // Highlight actor.action pattern
  explainEveryLine?: boolean;  // Add explanation for every line
}

export function generateJavaScriptAnnotated(ast: PseudoNode[], options: AnnotationOptions): string {
  const lines: string[] = [];
  
  if (options.showMetacognition) {
    lines.push('// === METACOGNITION: How I\'m thinking about this code ===');
    lines.push('// I\'m going to convert your pseudocode step by step.');
    lines.push('// Each line will have comments explaining WHY I made that choice.');
    lines.push('');
  }
  
  for (const node of ast) {
    lines.push(...generateNodeAnnotated(node, 0, options));
  }
  
  return lines.join('\n');
}

function generateNodeAnnotated(node: PseudoNode, indent: number, options: AnnotationOptions): string[] {
  const indentStr = options.indentChar!.repeat(indent * options.indentSize!);
  const lines: string[] = [];
  
  switch (node.type) {
    case 'VariableDeclaration':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Creating a variable ===`);
        lines.push(`${indentStr}// THINKING: I need to store a value for later use`);
        lines.push(`${indentStr}// WHY 'let': Variables can change (not constant)`);
        lines.push(`${indentStr}// WHAT: Declaring "${node.name}" with initial value`);
      }
      
      const keyword = node.isConstant ? 'const' : 'let';
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ⚙️ SYNTAX: let variableName = value;`);
        if (options.showActorPattern) {
          lines.push(`${indentStr}// 📝 PARTS: 'let' = keyword, '${node.name}' = name, '=' = assignment, value = what to store`);
        }
      }
      
      if (node.value) {
        const valueExpr = generateExpressionAnnotated(node.value, options);
        lines.push(`${indentStr}${keyword} ${node.name} = ${valueExpr};`);
      } else {
        lines.push(`${indentStr}${keyword} ${node.name};`);
      }
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ✅ RESULT: Variable "${node.name}" is now ready to use`);
      }
      lines.push('');
      return lines;
    
    case 'Assignment':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Changing a variable's value ===`);
        lines.push(`${indentStr}// THINKING: I already created this variable, now updating it`);
        lines.push(`${indentStr}// WHY: We need to store a new value in "${node.target}"`);
      }
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ⚙️ SYNTAX: variableName = newValue;`);
        if (options.showActorPattern) {
          lines.push(`${indentStr}// 📝 PARTS: '${node.target}' = variable to change, '=' = assignment, newValue = what to put in`);
        }
      }
      
      lines.push(`${indentStr}${node.target} = ${generateExpressionAnnotated(node.value, options)};`);
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ✅ RESULT: "${node.target}" now has a different value`);
      }
      lines.push('');
      return lines;
    
    case 'IfStatement':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Making a decision ===`);
        lines.push(`${indentStr}// THINKING: Should I do something or not? Depends on a condition`);
        lines.push(`${indentStr}// WHY: Different actions for different situations`);
        lines.push(`${indentStr}// HOW IT WORKS: Test condition → if true, run code inside { }`);
      }
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ⚙️ SYNTAX: if (condition) { codeToRun }`);
        lines.push(`${indentStr}// 📝 PARTS: 'if' = keyword, (condition) = test, { } = code block`);
      }
      
      lines.push(`${indentStr}if (${generateExpressionAnnotated(node.condition, options)}) {`);
      
      if (options.showMetacognition) {
        lines.push(`${indentStr}  // INSIDE THE IF: These lines only run if condition is TRUE`);
      }
      
      node.body.forEach(stmt => {
        lines.push(...generateNodeAnnotated(stmt, indent + 1, options));
      });
      
      lines.push(`${indentStr}}`);
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ✅ RESULT: Checked condition and ran code (or skipped it)`);
      }
      lines.push('');
      return lines;
    
    case 'WhileLoop':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Repeating code ===`);
        lines.push(`${indentStr}// THINKING: I need to do something multiple times`);
        lines.push(`${indentStr}// WHY 'while': Keep going as long as condition is true`);
        lines.push(`${indentStr}// HOW IT WORKS: Check condition → run code → check again → repeat`);
      }
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ⚙️ SYNTAX: while (condition) { codeToRepeat }`);
        lines.push(`${indentStr}// ⚠️ IMPORTANT: Make sure condition eventually becomes false (or loop forever!)`);
      }
      
      lines.push(`${indentStr}while (${generateExpressionAnnotated(node.condition, options)}) {`);
      
      if (options.showMetacognition) {
        lines.push(`${indentStr}  // INSIDE THE LOOP: This code runs over and over until condition is false`);
      }
      
      node.body.forEach(stmt => {
        lines.push(...generateNodeAnnotated(stmt, indent + 1, options));
      });
      
      lines.push(`${indentStr}}`);
      lines.push('');
      return lines;
    
    case 'ForLoop':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Counting loop ===`);
        lines.push(`${indentStr}// THINKING: I need to repeat something a specific number of times`);
        lines.push(`${indentStr}// WHY 'for': Best for counting (like "do this 10 times")`);
        lines.push(`${indentStr}// HOW IT WORKS: Start → check → run code → increment → check again`);
      }
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ⚙️ SYNTAX: for (start; condition; increment) { code }`);
        lines.push(`${indentStr}// 📝 PARTS: start = where to begin, condition = when to stop, increment = how to count`);
      }
      
      let initStr = '';
      if (node.init.type === 'VariableDeclaration') {
        const kw = node.init.isConstant ? 'const' : 'let';
        initStr = node.init.value 
          ? `${kw} ${node.init.name} = ${generateExpressionAnnotated(node.init.value, options)}`
          : `${kw} ${node.init.name}`;
      } else {
        initStr = generateExpressionAnnotated(node.init, options);
      }
      
      const condition = generateExpressionAnnotated(node.condition, options);
      const increment = generateExpressionAnnotated(node.increment, options);
      
      lines.push(`${indentStr}for (${initStr}; ${condition}; ${increment}) {`);
      
      if (options.showMetacognition) {
        lines.push(`${indentStr}  // INSIDE THE LOOP: This code runs each time we count`);
      }
      
      node.body.forEach(stmt => {
        lines.push(...generateNodeAnnotated(stmt, indent + 1, options));
      });
      
      lines.push(`${indentStr}}`);
      lines.push('');
      return lines;
    
    case 'PrintStatement':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Showing output ===`);
        lines.push(`${indentStr}// THINKING: I need to display something to the user`);
        lines.push(`${indentStr}// WHY 'console.log': Standard way to print in JavaScript`);
      }
      
      if (options.explainEveryLine && options.showActorPattern) {
        lines.push(`${indentStr}// 🎯 ACTOR.ACTION PATTERN:`);
        lines.push(`${indentStr}//    ACTOR = 'console' (the thing doing the action)`);
        lines.push(`${indentStr}//    ACTION = 'log' (what it does - prints to console)`);
        lines.push(`${indentStr}//    INPUT = the value in parentheses (what to print)`);
        lines.push(`${indentStr}// ⚙️ SYNTAX: console.log(value);`);
      }
      
      lines.push(`${indentStr}console.log(${generateExpressionAnnotated(node.value, options)});`);
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ✅ RESULT: Value is displayed in the console`);
      }
      lines.push('');
      return lines;
    
    case 'FunctionDeclaration':
      if (options.showMetacognition) {
        lines.push(`${indentStr}// === HIGH-LEVEL STEP: Creating a reusable action ===`);
        lines.push(`${indentStr}// THINKING: I'm making a "recipe" I can use multiple times`);
        lines.push(`${indentStr}// WHY function: Group related code so I don't repeat myself`);
        lines.push(`${indentStr}// PROMISE: This function named "${node.name}" will do a specific job`);
        lines.push(`${indentStr}// CONTRACT: Give it ${node.parameters.length} input(s), it does its job`);
      }
      
      if (options.explainEveryLine) {
        lines.push(`${indentStr}// ⚙️ SYNTAX: function name(params) { code }`);
        lines.push(`${indentStr}// 📝 PARTS: 'function' = keyword, name = what to call it, params = inputs it needs`);
      }
      
      const params = node.parameters.map(p => p.name).join(', ');
      lines.push(`${indentStr}function ${node.name}(${params}) {`);
      
      if (options.showMetacognition) {
        lines.push(`${indentStr}  // INSIDE FUNCTION: This code runs when we "call" the function`);
      }
      
      node.body.forEach(stmt => {
        lines.push(...generateNodeAnnotated(stmt, indent + 1, options));
      });
      
      lines.push(`${indentStr}}`);
      lines.push('');
      return lines;
    
    case 'Comment':
      return options.includeComments ? [`${indentStr}// ${node.text}`] : [];
    
    default:
      return [`${indentStr}// Unsupported node: ${node.type}`];
  }
}

function generateExpressionAnnotated(node: PseudoNode, options: AnnotationOptions): string {
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
      return `${generateExpressionAnnotated(node.left, options)} ${node.operator} ${generateExpressionAnnotated(node.right, options)}`;
    
    case 'UnaryExpression':
      if (node.operator === '++' || node.operator === '--') {
        return `${generateExpressionAnnotated(node.operand, options)}${node.operator}`;
      }
      return `${node.operator}${generateExpressionAnnotated(node.operand, options)}`;
    
    case 'ArrayAccess':
      return `${node.array}[${generateExpressionAnnotated(node.index, options)}]`;
    
    case 'PropertyAccess':
      return `${node.object}.${node.property}`;
    
    case 'FunctionCall':
      const args = node.arguments.map(arg => generateExpressionAnnotated(arg, options)).join(', ');
      return `${node.name}(${args})`;
    
    case 'VariableDeclaration':
      return node.name;
    
    case 'Assignment':
      return `${node.target} = ${generateExpressionAnnotated(node.value, options)}`;
    
    default:
      return '';
  }
}
