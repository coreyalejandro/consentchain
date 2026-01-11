import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { AlertCircle, CheckCircle2, Code2, FileText, ArrowRight, RefreshCw } from 'lucide-react';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { parseToAST, detectLanguage, InputLanguage } from '../lib/parsers';
import { generateCode, OutputLanguage } from '../lib/generators';
import { generatePseudocode } from '../lib/generators/pseudocode-generator';

interface UniversalConverterProps {
  initialSource?: string;
  initialTarget?: string;
}

export function UniversalConverter({ initialSource = 'natural', initialTarget = 'javascript' }: UniversalConverterProps) {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [pseudocodeView, setPseudocodeView] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState<InputLanguage | 'auto'>(initialSource as any);
  const [targetLanguage, setTargetLanguage] = useState<OutputLanguage>(initialTarget as any);
  const [detectedLanguage, setDetectedLanguage] = useState<InputLanguage | null>(null);
  const [hasTyped, setHasTyped] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasTyped(true);
    const code = e.target.value;
    setInputCode(code);
    setError(null);
    
    if (code.trim()) {
      try {
        // Detect language if auto mode
        const inputLang = sourceLanguage === 'auto' ? detectLanguage(code) : (sourceLanguage as InputLanguage);
        setDetectedLanguage(inputLang);
        
        // Parse to AST
        const ast = parseToAST(code, inputLang);
        
        // Generate pseudocode for middle panel
        const pseudo = generatePseudocode(ast, { indentSize: 2, indentChar: ' ', includeComments: true });
        setPseudocodeView(pseudo);
        
        // Generate target code
        const generated = generateCode(ast, targetLanguage, { indentSize: 2, indentChar: ' ', includeComments: true });
        setOutputCode(generated);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Conversion error');
        console.error('Conversion error:', err);
      }
    } else {
      setPseudocodeView('');
      setOutputCode('');
      setDetectedLanguage(null);
    }
  };

  const handleTargetLanguageChange = (lang: string) => {
    setTargetLanguage(lang as OutputLanguage);
    
    // Regenerate with new target language
    if (inputCode.trim() && pseudocodeView) {
      try {
        const inputLang = sourceLanguage === 'auto' ? detectLanguage(inputCode) : (sourceLanguage as InputLanguage);
        const ast = parseToAST(inputCode, inputLang);
        const generated = generateCode(ast, lang as OutputLanguage, { indentSize: 2, indentChar: ' ', includeComments: true });
        setOutputCode(generated);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Conversion error');
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Language Selection Bar */}
      <Card className="border-2 border-purple-600/20">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <label className="text-sm">Source Language</label>
              <Select value={sourceLanguage} onValueChange={(v) => setSourceLanguage(v as any)}>
                <SelectTrigger className="w-[180px] border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">🔍 Auto-Detect</SelectItem>
                  <SelectItem value="natural">💬 Natural Language</SelectItem>
                  <SelectItem value="pseudocode">📝 Pseudocode</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="scala">Scala</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                </SelectContent>
              </Select>
              {detectedLanguage && sourceLanguage === 'auto' && (
                <Badge variant="outline" className="bg-blue-50 text-xs">
                  Detected: {detectedLanguage}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-purple-600" />
              <RefreshCw className="w-5 h-5 text-gray-400" />
              <ArrowRight className="w-6 h-6 text-purple-600" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <label className="text-sm">Target Language</label>
              <Select value={targetLanguage} onValueChange={handleTargetLanguageChange}>
                <SelectTrigger className="w-[180px] border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pseudocode">📝 Pseudocode</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="scala">Scala</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert className="border-red-600 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-900">
            <strong>Conversion Error:</strong> {error}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <Card className="border-2 border-blue-600/20">
          <CardHeader className="bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Input Code</CardTitle>
                  <CardDescription>
                    {sourceLanguage === 'auto' 
                      ? 'Write code in any language' 
                      : `Write in ${sourceLanguage}`}
                  </CardDescription>
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
                <ul className="list-decimal ml-4 mt-2 space-y-1 text-sm">
                  <li>Type or paste code in ANY supported language</li>
                  <li>Use natural language descriptions</li>
                  <li>Auto-detect will identify your language</li>
                  <li>Code converts automatically as you type</li>
                </ul>
              </AlertDescription>
            </Alert>

            <div className="relative">
              <Textarea
                value={inputCode}
                onChange={handleInputChange}
                placeholder="Examples:&#10;&#10;Natural Language:&#10;Set name to John&#10;If age is greater than 18&#10;  Print Adult&#10;&#10;JavaScript:&#10;let x = 5;&#10;if (x > 3) {&#10;  console.log('yes');&#10;}&#10;&#10;Python:&#10;x = 5&#10;if x > 3:&#10;  print('yes')"
                className="min-h-[500px] font-mono text-sm bg-white border-2"
              />
              {!hasTyped && (
                <div className="absolute top-4 right-4 pointer-events-none">
                  <Badge variant="secondary">Start typing →</Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Pseudocode Middle View */}
        <Card className="border-2 border-purple-600/20">
          <CardHeader className="bg-purple-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Pseudocode (IR)</CardTitle>
                  <CardDescription>Intermediate representation</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="bg-purple-50 border-purple-200">AST</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {pseudocodeView ? (
              <>
                <Alert className="mb-4 border-purple-200 bg-purple-50">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-900 text-sm">
                    <strong>Standardized Format:</strong> This is our universal pseudocode that serves as the bridge between all languages.
                  </AlertDescription>
                </Alert>

                <pre className="min-h-[500px] p-4 bg-gray-900 text-purple-400 rounded-lg overflow-auto border-2 border-purple-600/20 text-sm">
                  <code>{pseudocodeView}</code>
                </pre>
              </>
            ) : (
              <div className="min-h-[500px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <div className="text-center text-muted-foreground">
                  <RefreshCw className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Pseudocode will appear here</p>
                  <p className="text-sm mt-2">This shows the universal format</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className="border-2 border-green-600/20">
          <CardHeader className="bg-green-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Output Code</CardTitle>
                  <CardDescription>Converted to {targetLanguage}</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-50 border-green-200">Output</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {outputCode ? (
              <>
                <Alert className="mb-4 border-green-200 bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-900 text-sm">
                    <strong>Generated Code:</strong> This code is ready to use in your {targetLanguage} project.
                  </AlertDescription>
                </Alert>

                <pre className="min-h-[500px] p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto border-2 border-green-600/20 text-sm">
                  <code>{outputCode}</code>
                </pre>
              </>
            ) : (
              <div className="min-h-[500px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <div className="text-center text-muted-foreground">
                  <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Generated code will appear here</p>
                  <p className="text-sm mt-2">Start by entering code on the left</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}