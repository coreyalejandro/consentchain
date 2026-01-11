import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { AlertCircle, CheckCircle2, Code2, FileText } from 'lucide-react';
import { Badge } from './ui/badge';

interface PseudocodeConverterProps {
  onPseudocodeChange: (value: string) => void;
  onCodeGenerate: (code: string) => void;
  pseudocode: string;
  generatedCode: string;
  language: string;
}

export function PseudocodeConverter({ 
  onPseudocodeChange, 
  onCodeGenerate, 
  pseudocode, 
  generatedCode,
  language 
}: PseudocodeConverterProps) {
  const [hasTyped, setHasTyped] = useState(false);

  const handlePseudocodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasTyped(true);
    onPseudocodeChange(e.target.value);
    
    // Auto-generate code as user types
    if (e.target.value.trim()) {
      const code = convertPseudocodeToCode(e.target.value, language);
      onCodeGenerate(code);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pseudocode Input Section */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Step 1: Write Your Pseudocode</CardTitle>
                <CardDescription>Type or paste your pseudocode in plain English</CardDescription>
              </div>
            </div>
            <Badge variant="outline" className="bg-blue-50 border-blue-200">Input</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Alert className="mb-4 border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-900">
              <strong>Instructions:</strong>
              <ul className="list-decimal ml-4 mt-2 space-y-1">
                <li>Write each step on a new line</li>
                <li>Use simple, clear language</li>
                <li>Describe what you want the code to do</li>
                <li>Don't worry about exact syntax</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="relative">
            <Textarea
              value={pseudocode}
              onChange={handlePseudocodeChange}
              placeholder="Example:&#10;&#10;Set name to John&#10;Set age to 25&#10;If age is greater than 18&#10;  Print Adult&#10;Otherwise&#10;  Print Minor&#10;End&#10;&#10;You can also write:&#10;Create variable name = Sarah&#10;Make age = 30"
              className="min-h-[400px] font-mono bg-white border-2"
            />
            {!hasTyped && (
              <div className="absolute top-4 right-4 pointer-events-none">
                <Badge variant="secondary">Start typing here →</Badge>
              </div>
            )}
          </div>

          {pseudocode && (
            <Alert className="mt-4 border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-900">
                ✓ Pseudocode entered. Code is being generated automatically.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Code Output Section */}
      <Card className="border-2 border-green-600/20">
        <CardHeader className="bg-green-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Code2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <CardTitle>Step 2: Review Generated Code</CardTitle>
                <CardDescription>Your pseudocode converted to {language}</CardDescription>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 border-green-200">Output</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {generatedCode ? (
            <>
              <Alert className="mb-4 border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-900">
                  <strong>Next Steps:</strong>
                  <ul className="list-decimal ml-4 mt-2 space-y-1">
                    <li>Read through the generated code carefully</li>
                    <li>Check the step-by-step breakdown below</li>
                    <li>Copy the code when you understand it</li>
                    <li>Test it in your development environment</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <div className="relative">
                <pre className="min-h-[400px] p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto border-2 border-green-600/20">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            </>
          ) : (
            <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              <div className="text-center text-muted-foreground">
                <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Generated code will appear here</p>
                <p className="text-sm mt-2">Start by entering pseudocode on the left</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function convertPseudocodeToCode(pseudocode: string, language: string): string {
  const lines = pseudocode.split('\n').filter(line => line.trim());
  
  if (language === 'javascript') {
    return convertToJavaScript(lines);
  } else if (language === 'python') {
    return convertToPython(lines);
  } else if (language === 'java') {
    return convertToJava(lines);
  }
  
  return '// Code will be generated based on your pseudocode';
}

function convertToJavaScript(lines: string[]): string {
  let code = '';
  let indentLevel = 0;
  const indent = () => '  '.repeat(indentLevel);

  for (const line of lines) {
    const trimmed = line.trim().toLowerCase();
    const originalLine = line.trim();
    
    if (!trimmed) continue;
    
    // Variable creation - more flexible patterns
    // Try to match variable assignment patterns
    let varMatch = trimmed.match(/(?:create|set|make|declare)\s+(?:a\s+)?(?:variable\s+)?(?:called\s+)?(\w+)\s+(?:and\s+)?(?:set\s+(?:it\s+)?)?(?:to|=|equals?)\s+(.+)/);
    if (!varMatch) {
      varMatch = trimmed.match(/(?:variable|var)\s+(?:called\s+)?(\w+)\s*(?:=|to|equals?)\s*(.+)/);
    }
    if (!varMatch) {
      varMatch = trimmed.match(/(\w+)\s*=\s*(.+)/);
    }
    
    if (varMatch) {
      const [, varName, value] = varMatch;
      const cleanValue = value.trim().replace(/^['"]|['"]$/g, '');
      
      // Determine if it's a number or string
      const isNumber = !isNaN(Number(cleanValue)) && cleanValue !== '';
      const finalValue = isNumber ? cleanValue : `'${cleanValue}'`;
      
      code += `${indent()}let ${varName} = ${finalValue};\n`;
      continue;
    }
    
    // If statements - more flexible
    if (trimmed.startsWith('if ') || trimmed.match(/^if\s+.+\s+then/i)) {
      let condition = trimmed.replace(/^if\s+/i, '').replace(/\s+then$/i, '').trim();
      
      // Convert natural language to operators
      condition = condition
        .replace(/\bis\s+greater\s+than\b/gi, '>')
        .replace(/\bis\s+less\s+than\b/gi, '<')
        .replace(/\bis\s+greater\s+than\s+or\s+equal\s+to\b/gi, '>=')
        .replace(/\bis\s+less\s+than\s+or\s+equal\s+to\b/gi, '<=')
        .replace(/\bis\s+equal\s+to\b/gi, '===')
        .replace(/\bequals\b/gi, '===')
        .replace(/\bis\s+not\s+equal\s+to\b/gi, '!==')
        .replace(/\bis\s+/gi, '=== ')
        .replace(/\band\b/gi, '&&')
        .replace(/\bor\b/gi, '||')
        .replace(/\bnot\b/gi, '!');
      
      code += `${indent()}if (${condition}) {\n`;
      indentLevel++;
      continue;
    }
    
    // Else/Otherwise/Else if
    if (trimmed === 'otherwise' || trimmed === 'else' || trimmed.startsWith('else ')) {
      indentLevel--;
      if (trimmed.startsWith('else if')) {
        let condition = trimmed.replace(/^else\s+if\s+/i, '').replace(/\s+then$/i, '').trim();
        condition = condition
          .replace(/\bis\s+greater\s+than\b/gi, '>')
          .replace(/\bis\s+less\s+than\b/gi, '<')
          .replace(/\bis\s+equal\s+to\b/gi, '===')
          .replace(/\bequals\b/gi, '===')
          .replace(/\bis\s+/gi, '=== ');
        code += `${indent()}} else if (${condition}) {\n`;
      } else {
        code += `${indent()}} else {\n`;
      }
      indentLevel++;
      continue;
    }
    
    // Print/Display/Output/Show statements
    if (trimmed.match(/^(print|display|output|show|log)/)) {
      let value = trimmed.replace(/^(print|display|output|show|log)\s*/i, '').trim();
      
      // If it's already quoted or a variable name, use as is
      if (value.match(/^['"].*['"]$/) || value.match(/^\w+$/)) {
        code += `${indent()}console.log(${value});\n`;
      } else {
        // Wrap in quotes
        code += `${indent()}console.log('${value}');\n`;
      }
      continue;
    }
    
    // Loop constructs
    if (trimmed.match(/^(for|loop|repeat|while)/)) {
      if (trimmed.includes('while')) {
        let condition = trimmed.replace(/^while\s+/i, '').replace(/:/g, '').trim();
        condition = condition
          .replace(/\bis\s+greater\s+than\b/gi, '>')
          .replace(/\bis\s+less\s+than\b/gi, '<')
          .replace(/\bis\s+equal\s+to\b/gi, '===');
        code += `${indent()}while (${condition}) {\n`;
        indentLevel++;
      } else if (trimmed.match(/repeat\s+\d+\s+times?/)) {
        const times = trimmed.match(/(\d+)/)?.[1] || '10';
        code += `${indent()}for (let i = 0; i < ${times}; i++) {\n`;
        indentLevel++;
      } else {
        code += `${indent()}// ${originalLine}\n`;
      }
      continue;
    }
    
    // End of block
    if (trimmed.match(/^(end|end\s+if|end\s+loop|end\s+while|end\s+for|\})/)) {
      if (indentLevel > 0) {
        indentLevel--;
        code += `${indent()}}\n`;
      }
      continue;
    }
    
    // Return statements
    if (trimmed.startsWith('return ')) {
      const value = trimmed.replace(/^return\s+/i, '').trim();
      code += `${indent()}return ${value};\n`;
      continue;
    }
    
    // Function calls or expressions with parentheses
    if (trimmed.match(/\w+\s*\(/)) {
      code += `${indent()}${originalLine};\n`;
      continue;
    }
    
    // Generic line - add as comment
    code += `${indent()}// ${originalLine}\n`;
  }

  // Close any remaining blocks
  while (indentLevel > 0) {
    indentLevel--;
    code += `${indent()}}\n`;
  }

  return code || '// Start typing pseudocode to see generated code';
}

function convertToPython(lines: string[]): string {
  let code = '';
  let indentLevel = 0;
  const indent = () => '    '.repeat(indentLevel);

  for (const line of lines) {
    const trimmed = line.trim().toLowerCase();
    const originalLine = line.trim();
    
    if (!trimmed) continue;
    
    // Variable creation - more flexible patterns
    let varMatch = trimmed.match(/(?:create|set|make|declare)\s+(?:a\s+)?(?:variable\s+)?(?:called\s+)?(\w+)\s+(?:and\s+)?(?:set\s+(?:it\s+)?)?(?:to|=|equals?)\s+(.+)/);
    if (!varMatch) {
      varMatch = trimmed.match(/(?:variable|var)\s+(?:called\s+)?(\w+)\s*(?:=|to|equals?)\s*(.+)/);
    }
    if (!varMatch) {
      varMatch = trimmed.match(/(\w+)\s*=\s*(.+)/);
    }
    
    if (varMatch) {
      const [, varName, value] = varMatch;
      const cleanValue = value.trim().replace(/^['"]|['"]$/g, '');
      
      const isNumber = !isNaN(Number(cleanValue)) && cleanValue !== '';
      const finalValue = isNumber ? cleanValue : `'${cleanValue}'`;
      
      code += `${indent()}${varName} = ${finalValue}\n`;
      continue;
    }
    
    // If statements
    if (trimmed.startsWith('if ') || trimmed.match(/^if\s+.+\s+then/i)) {
      let condition = trimmed.replace(/^if\s+/i, '').replace(/\s+then$/i, '').replace(/:$/g, '').trim();
      
      condition = condition
        .replace(/\bis\s+greater\s+than\b/gi, '>')
        .replace(/\bis\s+less\s+than\b/gi, '<')
        .replace(/\bis\s+greater\s+than\s+or\s+equal\s+to\b/gi, '>=')
        .replace(/\bis\s+less\s+than\s+or\s+equal\s+to\b/gi, '<=')
        .replace(/\bis\s+equal\s+to\b/gi, '==')
        .replace(/\bequals\b/gi, '==')
        .replace(/\bis\s+not\s+equal\s+to\b/gi, '!=')
        .replace(/\bis\s+/gi, '== ')
        .replace(/\band\b/gi, 'and')
        .replace(/\bor\b/gi, 'or')
        .replace(/\bnot\b/gi, 'not');
      
      code += `${indent()}if ${condition}:\n`;
      indentLevel++;
      continue;
    }
    
    // Else/Otherwise/Elif
    if (trimmed === 'otherwise' || trimmed === 'else' || trimmed.startsWith('else ') || trimmed.startsWith('elif ')) {
      indentLevel--;
      if (trimmed.startsWith('else if') || trimmed.startsWith('elif')) {
        let condition = trimmed.replace(/^(?:else\s+if|elif)\s+/i, '').replace(/\s+then$/i, '').replace(/:$/g, '').trim();
        condition = condition
          .replace(/\bis\s+greater\s+than\b/gi, '>')
          .replace(/\bis\s+less\s+than\b/gi, '<')
          .replace(/\bis\s+equal\s+to\b/gi, '==')
          .replace(/\bequals\b/gi, '==')
          .replace(/\bis\s+/gi, '== ');
        code += `${indent()}elif ${condition}:\n`;
      } else {
        code += `${indent()}else:\n`;
      }
      indentLevel++;
      continue;
    }
    
    // Print statements
    if (trimmed.match(/^(print|display|output|show|log)/)) {
      let value = trimmed.replace(/^(print|display|output|show|log)\s*/i, '').trim();
      
      if (value.match(/^['"].*['"]$/) || value.match(/^\w+$/)) {
        code += `${indent()}print(${value})\n`;
      } else {
        code += `${indent()}print('${value}')\n`;
      }
      continue;
    }
    
    // Loop constructs
    if (trimmed.match(/^(for|loop|repeat|while)/)) {
      if (trimmed.includes('while')) {
        let condition = trimmed.replace(/^while\s+/i, '').replace(/:/g, '').trim();
        condition = condition
          .replace(/\bis\s+greater\s+than\b/gi, '>')
          .replace(/\bis\s+less\s+than\b/gi, '<')
          .replace(/\bis\s+equal\s+to\b/gi, '==');
        code += `${indent()}while ${condition}:\n`;
        indentLevel++;
      } else if (trimmed.match(/repeat\s+\d+\s+times?/)) {
        const times = trimmed.match(/(\d+)/)?.[1] || '10';
        code += `${indent()}for i in range(${times}):\n`;
        indentLevel++;
      } else if (trimmed.match(/for\s+each/i)) {
        const match = trimmed.match(/for\s+each\s+(\w+)\s+in\s+(\w+)/i);
        if (match) {
          code += `${indent()}for ${match[1]} in ${match[2]}:\n`;
          indentLevel++;
        }
      } else {
        code += `${indent()}# ${originalLine}\n`;
      }
      continue;
    }
    
    // End of block (Python doesn't need explicit end, just dedent)
    if (trimmed.match(/^(end|end\s+if|end\s+loop|end\s+while|end\s+for)/)) {
      if (indentLevel > 0) {
        indentLevel--;
      }
      continue;
    }
    
    // Return statements
    if (trimmed.startsWith('return ')) {
      const value = trimmed.replace(/^return\s+/i, '').trim();
      code += `${indent()}return ${value}\n`;
      continue;
    }
    
    // Function calls
    if (trimmed.match(/\w+\s*\(/)) {
      code += `${indent()}${originalLine}\n`;
      continue;
    }
    
    // Generic line
    code += `${indent()}# ${originalLine}\n`;
  }

  return code || '# Start typing pseudocode to see generated code';
}

function convertToJava(lines: string[]): string {
  let code = 'public class Main {\n    public static void main(String[] args) {\n';
  let indentLevel = 2;
  const indent = () => '    '.repeat(indentLevel);

  for (const line of lines) {
    const trimmed = line.trim().toLowerCase();
    const originalLine = line.trim();
    
    if (!trimmed) continue;
    
    // Variable creation
    let varMatch = trimmed.match(/(?:create|set|make|declare)\s+(?:a\s+)?(?:variable\s+)?(?:called\s+)?(\w+)\s+(?:and\s+)?(?:set\s+(?:it\s+)?)?(?:to|=|equals?)\s+(.+)/);
    if (!varMatch) {
      varMatch = trimmed.match(/(?:variable|var)\s+(?:called\s+)?(\w+)\s*(?:=|to|equals?)\s*(.+)/);
    }
    if (!varMatch) {
      varMatch = trimmed.match(/(\w+)\s*=\s*(.+)/);
    }
    
    if (varMatch) {
      const [, varName, value] = varMatch;
      const cleanValue = value.trim().replace(/^['"]|['"]$/g, '');
      
      const isNumber = !isNaN(Number(cleanValue)) && cleanValue !== '';
      const type = isNumber ? 'int' : 'String';
      const finalValue = isNumber ? cleanValue : `"${cleanValue}"`;
      
      code += `${indent()}${type} ${varName} = ${finalValue};\n`;
      continue;
    }
    
    // If statements
    if (trimmed.startsWith('if ') || trimmed.match(/^if\s+.+\s+then/i)) {
      let condition = trimmed.replace(/^if\s+/i, '').replace(/\s+then$/i, '').trim();
      
      condition = condition
        .replace(/\bis\s+greater\s+than\b/gi, '>')
        .replace(/\bis\s+less\s+than\b/gi, '<')
        .replace(/\bis\s+greater\s+than\s+or\s+equal\s+to\b/gi, '>=')
        .replace(/\bis\s+less\s+than\s+or\s+equal\s+to\b/gi, '<=')
        .replace(/\bis\s+equal\s+to\b/gi, '==')
        .replace(/\bequals\b/gi, '==')
        .replace(/\bis\s+not\s+equal\s+to\b/gi, '!=')
        .replace(/\bis\s+/gi, '== ')
        .replace(/\band\b/gi, '&&')
        .replace(/\bor\b/gi, '||')
        .replace(/\bnot\b/gi, '!');
      
      code += `${indent()}if (${condition}) {\n`;
      indentLevel++;
      continue;
    }
    
    // Else/Otherwise
    if (trimmed === 'otherwise' || trimmed === 'else' || trimmed.startsWith('else ')) {
      indentLevel--;
      if (trimmed.startsWith('else if')) {
        let condition = trimmed.replace(/^else\s+if\s+/i, '').replace(/\s+then$/i, '').trim();
        condition = condition
          .replace(/\bis\s+greater\s+than\b/gi, '>')
          .replace(/\bis\s+less\s+than\b/gi, '<')
          .replace(/\bis\s+equal\s+to\b/gi, '==')
          .replace(/\bequals\b/gi, '==')
          .replace(/\bis\s+/gi, '== ');
        code += `${indent()}} else if (${condition}) {\n`;
      } else {
        code += `${indent()}} else {\n`;
      }
      indentLevel++;
      continue;
    }
    
    // Print statements
    if (trimmed.match(/^(print|display|output|show|log)/)) {
      let value = trimmed.replace(/^(print|display|output|show|log)\s*/i, '').trim();
      
      if (value.match(/^".*"$/) || value.match(/^\w+$/)) {
        code += `${indent()}System.out.println(${value});\n`;
      } else {
        code += `${indent()}System.out.println("${value}");\n`;
      }
      continue;
    }
    
    // Loop constructs
    if (trimmed.match(/^(for|loop|repeat|while)/)) {
      if (trimmed.includes('while')) {
        let condition = trimmed.replace(/^while\s+/i, '').replace(/:/g, '').trim();
        condition = condition
          .replace(/\bis\s+greater\s+than\b/gi, '>')
          .replace(/\bis\s+less\s+than\b/gi, '<')
          .replace(/\bis\s+equal\s+to\b/gi, '==');
        code += `${indent()}while (${condition}) {\n`;
        indentLevel++;
      } else if (trimmed.match(/repeat\s+\d+\s+times?/)) {
        const times = trimmed.match(/(\d+)/)?.[1] || '10';
        code += `${indent()}for (int i = 0; i < ${times}; i++) {\n`;
        indentLevel++;
      } else {
        code += `${indent()}// ${originalLine}\n`;
      }
      continue;
    }
    
    // End of block
    if (trimmed.match(/^(end|end\s+if|end\s+loop|end\s+while|end\s+for|\})/)) {
      if (indentLevel > 2) {
        indentLevel--;
        code += `${indent()}}\n`;
      }
      continue;
    }
    
    // Return statements
    if (trimmed.startsWith('return ')) {
      const value = trimmed.replace(/^return\s+/i, '').trim();
      code += `${indent()}return ${value};\n`;
      continue;
    }
    
    // Function calls
    if (trimmed.match(/\w+\s*\(/)) {
      code += `${indent()}${originalLine};\n`;
      continue;
    }
    
    // Generic line
    code += `${indent()}// ${originalLine}\n`;
  }

  while (indentLevel > 2) {
    indentLevel--;
    code += `${indent()}}\n`;
  }

  code += '    }\n}';
  return code;
}
