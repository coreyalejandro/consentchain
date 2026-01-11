/**
 * UNIVERSAL PSEUDOCODE ABSTRACT SYNTAX TREE (AST)
 * 
 * This defines our standardized pseudocode representation that serves as
 * an intermediate format between all programming languages.
 */

export type PseudoNode =
  | VariableDeclaration
  | Assignment
  | IfStatement
  | ElseIfStatement
  | ElseStatement
  | WhileLoop
  | ForLoop
  | ForEachLoop
  | FunctionDeclaration
  | FunctionCall
  | ReturnStatement
  | PrintStatement
  | Comment
  | BinaryExpression
  | UnaryExpression
  | Literal
  | Identifier
  | ArrayDeclaration
  | ArrayAccess
  | ObjectDeclaration
  | PropertyAccess
  | Block;

export interface VariableDeclaration {
  type: 'VariableDeclaration';
  name: string;
  value?: PseudoNode;
  dataType?: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'null' | 'any';
  isConstant?: boolean;
}

export interface Assignment {
  type: 'Assignment';
  target: string | PropertyAccess | ArrayAccess;
  value: PseudoNode;
}

export interface IfStatement {
  type: 'IfStatement';
  condition: PseudoNode;
  body: PseudoNode[];
}

export interface ElseIfStatement {
  type: 'ElseIfStatement';
  condition: PseudoNode;
  body: PseudoNode[];
}

export interface ElseStatement {
  type: 'ElseStatement';
  body: PseudoNode[];
}

export interface WhileLoop {
  type: 'WhileLoop';
  condition: PseudoNode;
  body: PseudoNode[];
}

export interface ForLoop {
  type: 'ForLoop';
  init: PseudoNode;
  condition: PseudoNode;
  increment: PseudoNode;
  body: PseudoNode[];
}

export interface ForEachLoop {
  type: 'ForEachLoop';
  variable: string;
  iterable: PseudoNode;
  body: PseudoNode[];
}

export interface FunctionDeclaration {
  type: 'FunctionDeclaration';
  name: string;
  parameters: Array<{ name: string; type?: string }>;
  body: PseudoNode[];
  returnType?: string;
}

export interface FunctionCall {
  type: 'FunctionCall';
  name: string;
  arguments: PseudoNode[];
}

export interface ReturnStatement {
  type: 'ReturnStatement';
  value?: PseudoNode;
}

export interface PrintStatement {
  type: 'PrintStatement';
  value: PseudoNode;
}

export interface Comment {
  type: 'Comment';
  text: string;
}

export interface BinaryExpression {
  type: 'BinaryExpression';
  operator: '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||';
  left: PseudoNode;
  right: PseudoNode;
}

export interface UnaryExpression {
  type: 'UnaryExpression';
  operator: '!' | '-' | '++' | '--';
  operand: PseudoNode;
}

export interface Literal {
  type: 'Literal';
  value: string | number | boolean | null;
  dataType: 'string' | 'number' | 'boolean' | 'null';
}

export interface Identifier {
  type: 'Identifier';
  name: string;
}

export interface ArrayDeclaration {
  type: 'ArrayDeclaration';
  name: string;
  elements: PseudoNode[];
}

export interface ArrayAccess {
  type: 'ArrayAccess';
  array: string;
  index: PseudoNode;
}

export interface ObjectDeclaration {
  type: 'ObjectDeclaration';
  name: string;
  properties: Array<{ key: string; value: PseudoNode }>;
}

export interface PropertyAccess {
  type: 'PropertyAccess';
  object: string;
  property: string;
}

export interface Block {
  type: 'Block';
  statements: PseudoNode[];
}

/**
 * STANDARDIZED PSEUDOCODE SYNTAX
 * 
 * Our universal pseudocode language uses these keywords and structures:
 * 
 * VARIABLES:
 *   SET variableName TO value
 *   DECLARE variableName AS type WITH value
 *   CONSTANT constantName IS value
 * 
 * CONDITIONALS:
 *   IF condition THEN
 *     statements
 *   ELSE IF condition THEN
 *     statements
 *   ELSE
 *     statements
 *   END IF
 * 
 * LOOPS:
 *   WHILE condition DO
 *     statements
 *   END WHILE
 * 
 *   FOR i FROM start TO end STEP increment DO
 *     statements
 *   END FOR
 * 
 *   FOR EACH item IN collection DO
 *     statements
 *   END FOR EACH
 * 
 * FUNCTIONS:
 *   FUNCTION functionName(param1, param2) RETURNS type
 *     statements
 *     RETURN value
 *   END FUNCTION
 * 
 * OPERATORS:
 *   Arithmetic: +, -, *, /, MOD
 *   Comparison: ==, !=, <, >, <=, >=
 *   Logical: AND, OR, NOT
 * 
 * OUTPUT:
 *   PRINT value
 *   DISPLAY value
 *   OUTPUT value
 * 
 * ARRAYS:
 *   ARRAY arrayName IS [element1, element2, element3]
 *   arrayName[index]
 * 
 * OBJECTS:
 *   OBJECT objectName IS {key1: value1, key2: value2}
 *   objectName.property
 */