import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { BookOpen, Brain, Eye, Target, CheckCircle2, Lightbulb } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function QuickReferenceGuide() {
  return (
    <Card className="border-2 border-blue-600/20">
      <CardHeader className="bg-blue-50">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          Quick Reference: Core Concepts
        </CardTitle>
        <CardDescription>
          Essential patterns and concepts you'll use everywhere
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Actor.Action Pattern */}
          <AccordionItem value="actor-action" className="border-2 rounded-lg px-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>1. The Actor.Action(Input) Pattern</span>
                <Badge variant="outline" className="bg-blue-50">Most Important!</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <Alert className="border-blue-600 bg-blue-50">
                <AlertDescription className="text-blue-900">
                  <strong>This is THE pattern you'll see everywhere in code!</strong>
                </AlertDescription>
              </Alert>

              <div className="font-mono text-lg bg-gray-900 text-green-400 p-4 rounded-lg">
                <span className="text-blue-400">actor</span>
                <span className="text-gray-500">.</span>
                <span className="text-purple-400">action</span>
                <span className="text-gray-500">(</span>
                <span className="text-green-400">input</span>
                <span className="text-gray-500">)</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="text-blue-900">Actor</strong>
                  <p className="text-sm text-muted-foreground mt-1">Who/what does it</p>
                  <p className="text-xs mt-2 italic">Before the period (.)</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <strong className="text-purple-900">Action</strong>
                  <p className="text-sm text-muted-foreground mt-1">What they do</p>
                  <p className="text-xs mt-2 italic">After the period (.)</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <strong className="text-green-900">Input</strong>
                  <p className="text-sm text-muted-foreground mt-1">What they need</p>
                  <p className="text-xs mt-2 italic">Inside parentheses ( )</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm"><strong>Examples:</strong></p>
                <code className="block bg-gray-900 text-green-400 p-2 rounded">console.log("Hello")</code>
                <p className="text-xs text-muted-foreground ml-2">console does log with "Hello"</p>
                
                <code className="block bg-gray-900 text-green-400 p-2 rounded mt-2">array.push(item)</code>
                <p className="text-xs text-muted-foreground ml-2">array does push with item</p>
                
                <code className="block bg-gray-900 text-green-400 p-2 rounded mt-2">self.checkAnswer(answer)</code>
                <p className="text-xs text-muted-foreground ml-2">self (me) does checkAnswer with answer</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* What is "self"? */}
          <AccordionItem value="self" className="border-2 rounded-lg px-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-purple-600" />
                <span>2. Understanding "self" (or "this")</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <Alert className="border-purple-600 bg-purple-50">
                <AlertDescription className="text-purple-900">
                  <strong>"self" means "me, the current object"</strong>
                </AlertDescription>
              </Alert>

              <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                <p className="mb-3"><strong>When you see:</strong></p>
                <code className="block bg-gray-900 text-green-400 p-3 rounded mb-3">
                  validation = self.checkAnswer(answer)
                </code>
                
                <p className="mb-2"><strong>Read it as:</strong></p>
                <ul className="list-disc ml-4 space-y-1 text-sm">
                  <li><code className="bg-purple-100 px-1 rounded">validation</code> = box to store the result</li>
                  <li><code className="bg-purple-100 px-1 rounded">self</code> = "me, the current object" (the ACTOR)</li>
                  <li><code className="bg-purple-100 px-1 rounded">checkAnswer</code> = what I'm doing (the ACTION)</li>
                  <li><code className="bg-purple-100 px-1 rounded">answer</code> = what I need (the INPUT)</li>
                </ul>
              </div>

              <Alert className="border-orange-600 bg-orange-50">
                <AlertDescription className="text-orange-900">
                  <strong>⚠️ Common Mistake:</strong> "self" is NOT the variable on the left!
                  <p className="mt-2 text-sm">The left side (<code>validation</code>) is just where you STORE the result. <code>self</code> is the thing DOING the action.</p>
                </AlertDescription>
              </Alert>

              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm"><strong>✅ Correct Understanding:</strong></p>
                <p className="text-sm text-muted-foreground mt-2">
                  Think: "I (self) am going to check this answer, and then store what I find out in a box called 'validation'"
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Variables */}
          <AccordionItem value="variables" className="border-2 rounded-lg px-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>3. Variables: Boxes for Storing Values</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <p className="text-sm">
                A variable is like a labeled box where you can store a value and use it later.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="text-blue-900">Creating (Declaring):</strong>
                  <code className="block bg-gray-900 text-green-400 p-2 rounded mt-2">
                    let name = "John"
                  </code>
                  <ul className="list-disc ml-4 mt-2 text-xs text-muted-foreground">
                    <li><code>let</code> = keyword (means "create a variable that can change")</li>
                    <li><code>name</code> = the label for your box</li>
                    <li><code>=</code> = assignment (put something in the box)</li>
                    <li><code>"John"</code> = the value to store</li>
                  </ul>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <strong className="text-purple-900">Changing (Reassigning):</strong>
                  <code className="block bg-gray-900 text-green-400 p-2 rounded mt-2">
                    name = "Sarah"
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Box already exists, just putting a new value in it
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <strong className="text-green-900">Using:</strong>
                  <code className="block bg-gray-900 text-green-400 p-2 rounded mt-2">
                    console.log(name)
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Look in the box and use whatever value is there
                  </p>
                </div>
              </div>

              <Alert className="border-blue-600 bg-blue-50">
                <AlertDescription className="text-blue-900 text-sm">
                  <strong>💡 Keywords:</strong>
                  <ul className="list-disc ml-4 mt-2 space-y-1">
                    <li><code>let</code> - variable that CAN change</li>
                    <li><code>const</code> - variable that CANNOT change (constant)</li>
                    <li><code>var</code> - old style (don't use in new code)</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>

          {/* Functions */}
          <AccordionItem value="functions" className="border-2 rounded-lg px-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-orange-600" />
                <span>4. Functions: Reusable Recipes</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <p className="text-sm">
                A function is like a recipe - write it once, use it many times.
              </p>

              <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                <strong className="text-orange-900 block mb-2">Creating a Function:</strong>
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm">
                  function greet(name) {"{"}<br/>
                  {"  "}return "Hello, " + name;<br/>
                  {"}"}
                </code>
                
                <div className="mt-3 space-y-2 text-sm">
                  <p><strong>Parts:</strong></p>
                  <ul className="list-disc ml-4 text-xs text-muted-foreground">
                    <li><code>function</code> = keyword (says "I'm making a function")</li>
                    <li><code>greet</code> = name of the function (what to call it)</li>
                    <li><code>(name)</code> = parameter (what input it needs)</li>
                    <li><code>{"{ }"}</code> = body (the code that runs)</li>
                    <li><code>return</code> = what comes back as result</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <strong className="text-green-900 block mb-2">Using (Calling) a Function:</strong>
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm">
                  greet("John")  // Returns "Hello, John"
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  This is the actor.action pattern! <code>greet</code> is doing its job with <code>"John"</code> as input
                </p>
              </div>

              <Alert className="border-purple-600 bg-purple-50">
                <AlertDescription className="text-purple-900 text-sm">
                  <strong>💡 Think of it as:</strong>
                  <ul className="list-disc ml-4 mt-2 space-y-1">
                    <li><strong>PROMISE:</strong> "I will greet people"</li>
                    <li><strong>CONTRACT:</strong> "Give me a name, I'll give back a greeting"</li>
                    <li><strong>WHY:</strong> "So I don't have to write greeting code every time"</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Alert className="mt-6 border-purple-600 bg-purple-50">
          <Lightbulb className="h-5 w-5 text-purple-600" />
          <AlertDescription className="text-purple-900">
            <strong className="block mb-2">🎯 Practice Strategy:</strong>
            <ol className="list-decimal ml-4 space-y-1 text-sm">
              <li>When you see code, identify the <strong>actor.action(input)</strong> pattern first</li>
              <li>Ask: "Who is doing what, and what do they need?"</li>
              <li>Read the metacognitive comments to understand WHY</li>
              <li>Try explaining it in your own words</li>
              <li>Repeat until it becomes automatic</li>
            </ol>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
