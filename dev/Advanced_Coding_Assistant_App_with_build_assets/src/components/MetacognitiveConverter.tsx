import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { AlertCircle, CheckCircle2, Code2, FileText, Brain, Lightbulb, Eye } from 'lucide-react';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { parseToAST } from '../lib/parsers';
import { generateJavaScriptAnnotated } from '../lib/generators/javascript-generator-annotated';
import { TerminologyHelper } from './TerminologyHelper';

export function MetacognitiveConverter() {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [showMetacognition, setShowMetacognition] = useState(true);
  const [showActorPattern, setShowActorPattern] = useState(true);
  const [explainEveryLine, setExplainEveryLine] = useState(true);
  const [hasTyped, setHasTyped] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasTyped(true);
    const code = e.target.value;
    setInputCode(code);
    
    if (code.trim()) {
      try {
        const ast = parseToAST(code, 'natural');
        const generated = generateJavaScriptAnnotated(ast, {
          indentSize: 2,
          indentChar: ' ',
          includeComments: true,
          showMetacognition,
          showActorPattern,
          explainEveryLine
        });
        setOutputCode(generated);
      } catch (err) {
        console.error('Conversion error:', err);
      }
    } else {
      setOutputCode('');
    }
  };

  const regenerate = () => {
    if (inputCode.trim()) {
      try {
        const ast = parseToAST(inputCode, 'natural');
        const generated = generateJavaScriptAnnotated(ast, {
          indentSize: 2,
          indentChar: ' ',
          includeComments: true,
          showMetacognition,
          showActorPattern,
          explainEveryLine
        });
        setOutputCode(generated);
      } catch (err) {
        console.error('Conversion error:', err);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Learning Options */}
      <Card className="border-2 border-purple-600/20">
        <CardHeader className="bg-purple-50">
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Learning Mode Options
          </CardTitle>
          <CardDescription>
            Control how much explanation you want to see
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TooltipProvider>
              <div className="flex items-center justify-between p-4 border-2 border-purple-200 rounded-lg bg-purple-50">
                <div className="flex items-center gap-3 flex-1">
                  <Tooltip>
                    <TooltipTrigger>
                      <Brain className="w-5 h-5 text-purple-600" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-bold mb-2">Metacognition (Thinking Out Loud)</p>
                      <p className="text-sm">Shows HOW I'm thinking about converting your code. Explains WHY each decision was made, WHERE concepts come from, and HOW they connect.</p>
                      <p className="text-sm mt-2 italic">This is like having a teacher explain their thought process step-by-step.</p>
                    </TooltipContent>
                  </Tooltip>
                  <Label htmlFor="metacognition" className="cursor-pointer flex-1">
                    Show "Thinking Out Loud"
                  </Label>
                </div>
                <Switch
                  id="metacognition"
                  checked={showMetacognition}
                  onCheckedChange={(checked) => {
                    setShowMetacognition(checked);
                    setTimeout(regenerate, 100);
                  }}
                />
              </div>

              <div className="flex items-center justify-between p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                <div className="flex items-center gap-3 flex-1">
                  <Tooltip>
                    <TooltipTrigger>
                      <Eye className="w-5 h-5 text-blue-600" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-bold mb-2">Actor.Action Pattern</p>
                      <p className="text-sm">Highlights the pattern: ACTOR (who does it) . ACTION (what they do) (INPUT)</p>
                      <p className="text-sm mt-2">Example: console.log(value)</p>
                      <ul className="list-disc ml-4 mt-2 text-xs">
                        <li>ACTOR = console (the thing doing it)</li>
                        <li>ACTION = log (what it does)</li>
                        <li>INPUT = value (what to log)</li>
                      </ul>
                      <p className="text-sm mt-2 italic">This pattern repeats EVERYWHERE in code!</p>
                    </TooltipContent>
                  </Tooltip>
                  <Label htmlFor="actor-pattern" className="cursor-pointer flex-1">
                    Highlight Actor.Action
                  </Label>
                </div>
                <Switch
                  id="actor-pattern"
                  checked={showActorPattern}
                  onCheckedChange={(checked) => {
                    setShowActorPattern(checked);
                    setTimeout(regenerate, 100);
                  }}
                />
              </div>

              <div className="flex items-center justify-between p-4 border-2 border-green-200 rounded-lg bg-green-50">
                <div className="flex items-center gap-3 flex-1">
                  <Tooltip>
                    <TooltipTrigger>
                      <Lightbulb className="w-5 h-5 text-green-600" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-bold mb-2">Explain Every Line</p>
                      <p className="text-sm">Adds detailed explanations for EVERY line of code showing:</p>
                      <ul className="list-disc ml-4 mt-2 text-xs">
                        <li>⚙️ SYNTAX: How to write it</li>
                        <li>📝 PARTS: What each piece means</li>
                        <li>✅ RESULT: What happens after</li>
                      </ul>
                      <p className="text-sm mt-2 italic">Perfect for beginners - nothing is assumed!</p>
                    </TooltipContent>
                  </Tooltip>
                  <Label htmlFor="explain-lines" className="cursor-pointer flex-1">
                    Explain Every Line
                  </Label>
                </div>
                <Switch
                  id="explain-lines"
                  checked={explainEveryLine}
                  onCheckedChange={(checked) => {
                    setExplainEveryLine(checked);
                    setTimeout(regenerate, 100);
                  }}
                />
              </div>
            </TooltipProvider>
          </div>

          <Alert className="mt-4 border-purple-600 bg-purple-50">
            <Lightbulb className="h-4 w-4 text-purple-600" />
            <AlertDescription className="text-purple-900">
              <strong>💡 How to Use These Options:</strong>
              <ul className="list-disc ml-4 mt-2 space-y-1 text-sm">
                <li><strong>All On:</strong> Maximum learning - see everything explained (recommended for beginners)</li>
                <li><strong>Metacognition Only:</strong> See the high-level thinking process</li>
                <li><strong>Actor Pattern Only:</strong> Focus on understanding the actor.action(input) pattern</li>
                <li><strong>All Off:</strong> Clean code only (for when you're confident)</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Terminology Helper */}
      {inputCode.trim() && <TerminologyHelper userInput={inputCode} />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="border-2 border-blue-600/20">
          <CardHeader className="bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Step 1: Write in Plain English</CardTitle>
                  <CardDescription>Describe what you want the code to do</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="bg-blue-50 border-blue-200">Input</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <Alert className="mb-4 border-blue-200 bg-blue-50">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-900">
                <strong>Instructions (Read First!):</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1 text-sm">
                  <li><strong>Write in plain English</strong> - Like you're telling a friend</li>
                  <li><strong>One step per line</strong> - Keep it simple</li>
                  <li><strong>Be specific</strong> - Say exactly what you want</li>
                  <li><strong>Don't worry about code syntax</strong> - That's what we're here to learn!</li>
                </ol>
              </AlertDescription>
            </Alert>

            <div className="relative">
              <Textarea
                value={inputCode}
                onChange={handleInputChange}
                placeholder="Try these examples:&#10;&#10;Set name to John&#10;Set age to 25&#10;If age is greater than 18&#10;  Print You are an adult&#10;Otherwise&#10;  Print You are a minor&#10;&#10;Or:&#10;&#10;Set counter to 0&#10;While counter is less than 5&#10;  Print counter&#10;  Set counter to counter + 1"
                className="min-h-[500px] font-mono text-sm bg-white border-2"
              />
              {!hasTyped && (
                <div className="absolute top-4 right-4 pointer-events-none">
                  <Badge variant="secondary">Start typing here →</Badge>
                </div>
              )}
            </div>
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
                  <CardTitle>Step 2: Learn the JavaScript Code</CardTitle>
                  <CardDescription>With detailed explanations</CardDescription>
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
                  <AlertDescription className="text-green-900">
                    <strong>How to Read This Code:</strong>
                    <ul className="list-decimal ml-4 mt-2 space-y-1 text-sm">
                      <li><strong>Read the comments first</strong> - They explain the thinking</li>
                      <li><strong>Look for === headings</strong> - They show major steps</li>
                      <li><strong>Find the actor.action patterns</strong> - They're highlighted</li>
                      <li><strong>Take your time</strong> - Understanding is more important than speed!</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="relative">
                  <pre className="min-h-[500px] p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto border-2 border-green-600/20 text-sm whitespace-pre-wrap">
                    <code>{outputCode}</code>
                  </pre>
                </div>

                <Alert className="mt-4 border-purple-600 bg-purple-50">
                  <Brain className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-900">
                    <strong>🧠 Key Patterns to Notice:</strong>
                    <ul className="list-disc ml-4 mt-2 space-y-1 text-sm">
                      <li><strong>Comments explain WHY</strong> - Not just WHAT the code does</li>
                      <li><strong>High-level steps → code</strong> - See how thinking becomes code</li>
                      <li><strong>actor.action(input)</strong> - This pattern is everywhere!</li>
                      <li><strong>Repeated explanations</strong> - Same concepts explained multiple ways</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </>
            ) : (
              <div className="min-h-[500px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <div className="text-center text-muted-foreground max-w-md">
                  <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">Annotated code will appear here</p>
                  <p className="text-sm">Start by writing your instructions on the left in plain English</p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 text-left text-sm text-blue-900">
                    <p className="font-bold mb-2">💡 What makes this different:</p>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Shows HOW the teacher is thinking</li>
                      <li>Explains WHERE each concept comes from</li>
                      <li>Breaks down the actor.action pattern</li>
                      <li>Assumes ZERO prior knowledge</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
