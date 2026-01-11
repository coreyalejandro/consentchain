import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { Layers, ArrowDown, ArrowUp, Code2, Brain } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function PatternHierarchy() {
  return (
    <Card className="border-2 border-purple-600/20">
      <CardHeader className="bg-purple-50">
        <CardTitle className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-600" />
          Pattern Hierarchy: How Code is Organized
        </CardTitle>
        <CardDescription>
          Understanding the three levels: Line → Recipe → Program
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <Alert className="border-purple-600 bg-purple-50">
          <Brain className="h-5 w-5 text-purple-600" />
          <AlertDescription className="text-purple-900">
            <strong className="block mb-2">🎯 The Pattern Hierarchy:</strong>
            <p className="text-sm mb-3">All code follows this structure - from smallest to largest:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 min-w-[120px]">LEVEL 1: Line</Badge>
                <span><code>actor.action(input)</code> - A single instruction</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 min-w-[120px]">LEVEL 2: Recipe</Badge>
                <span>Multiple lines grouped to do one job (a function)</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-600 min-w-[120px]">LEVEL 3: Program</Badge>
                <span>Multiple recipes working together</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="level1">Level 1: Line</TabsTrigger>
            <TabsTrigger value="level2">Level 2: Recipe</TabsTrigger>
            <TabsTrigger value="level3">Level 3: Program</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Level 1 */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                <Badge className="bg-blue-600 mb-3">LEVEL 1</Badge>
                <h4 className="mb-2">Line (Single Action)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The smallest unit: one actor doing one action
                </p>
                <code className="block bg-gray-900 text-green-400 p-2 rounded text-xs">
                  actor.action(input)
                </code>
                <p className="text-xs mt-2 text-blue-900 italic">
                  Example: console.log("Hello")
                </p>
              </div>

              {/* Arrow Down */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <ArrowDown className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-purple-900">Multiple lines<br/>grouped together</p>
                  <ArrowDown className="w-8 h-8 text-purple-600 mx-auto mt-2" />
                </div>
              </div>

              {/* Level 2 */}
              <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300">
                <Badge className="bg-purple-600 mb-3">LEVEL 2</Badge>
                <h4 className="mb-2">Recipe (Function)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  A named group of lines that does ONE job
                </p>
                <code className="block bg-gray-900 text-green-400 p-2 rounded text-xs">
                  Recipe greetPerson:<br/>
                  {"  "}actor.action(input)<br/>
                  {"  "}actor.action(input)<br/>
                  {"  "}Give back result
                </code>
              </div>
            </div>

            <div className="flex items-center justify-center py-4">
              <div className="text-center">
                <ArrowDown className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-orange-900">Multiple recipes<br/>working together</p>
                <ArrowDown className="w-8 h-8 text-orange-600 mx-auto mt-2" />
              </div>
            </div>

            {/* Level 3 */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-2 border-orange-300">
              <Badge className="bg-orange-600 mb-3">LEVEL 3</Badge>
              <h4 className="mb-2">Program (Multiple Recipes)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Multiple recipes that call each other to solve a problem
              </p>
              <code className="block bg-gray-900 text-green-400 p-2 rounded text-xs">
                Recipe main:<br/>
                {"  "}data = getData()<br/>
                {"  "}result = processData(data)<br/>
                {"  "}displayResult(result)
              </code>
            </div>

            <Alert className="border-green-600 bg-green-50">
              <AlertDescription className="text-green-900">
                <strong className="block mb-2">🔑 Key Understanding:</strong>
                <ul className="list-disc ml-4 space-y-1 text-sm">
                  <li>Every recipe (function) contains multiple lines (actor.action)</li>
                  <li>Every program contains multiple recipes working together</li>
                  <li>You can zoom in (program → recipe → line) or zoom out (line → recipe → program)</li>
                  <li>The pattern is the SAME at every level!</li>
                </ul>
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Level 1: Line */}
          <TabsContent value="level1" className="space-y-4">
            <div className="p-5 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-blue-600">LEVEL 1</Badge>
                The Line: Single Action
              </h4>
              
              <Alert className="mb-4 border-blue-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">What is a Line?</strong>
                  <p className="text-sm">A line is the SMALLEST piece of code that does ONE thing. It always follows the pattern:</p>
                  <div className="font-mono text-lg bg-gray-900 text-green-400 p-3 rounded-lg my-3">
                    actor.action(input)
                  </div>
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-white rounded border-2 border-blue-200">
                  <strong className="text-blue-900 block mb-2">ACTOR</strong>
                  <p className="text-xs text-muted-foreground">Who/what is doing the action</p>
                  <code className="text-xs">console</code>, <code className="text-xs">array</code>, <code className="text-xs">self</code>
                </div>
                <div className="p-3 bg-white rounded border-2 border-purple-200">
                  <strong className="text-purple-900 block mb-2">ACTION</strong>
                  <p className="text-xs text-muted-foreground">What they're doing</p>
                  <code className="text-xs">log</code>, <code className="text-xs">push</code>, <code className="text-xs">calculate</code>
                </div>
                <div className="p-3 bg-white rounded border-2 border-green-200">
                  <strong className="text-green-900 block mb-2">INPUT</strong>
                  <p className="text-xs text-muted-foreground">What they need</p>
                  <code className="text-xs">"Hello"</code>, <code className="text-xs">item</code>, <code className="text-xs">number</code>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm"><strong>Common Examples:</strong></p>
                
                <div className="p-3 bg-white rounded border border-blue-200">
                  <code className="text-sm">console.log("Hello")</code>
                  <p className="text-xs text-muted-foreground mt-2">
                    console (actor) does log (action) with "Hello" (input)
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-blue-200">
                  <code className="text-sm">array.push(item)</code>
                  <p className="text-xs text-muted-foreground mt-2">
                    array (actor) does push (action) with item (input)
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-blue-200">
                  <code className="text-sm">result = Math.random()</code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Math (actor) does random (action) with no input needed, then store in result
                  </p>
                </div>
              </div>

              <Alert className="mt-4 border-orange-600 bg-orange-50">
                <AlertDescription className="text-orange-900">
                  <strong>⚠️ IMPORTANT - Standard Terminology:</strong>
                  <p className="text-sm mt-2">Always use these exact words in our pseudocode:</p>
                  <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
                    <li>Say <strong>"actor.action(input)"</strong> - NOT "person.action" or "thing.action"</li>
                    <li>Say <strong>"actor"</strong> - NOT "object" or "thing" or "doer"</li>
                    <li>Say <strong>"action"</strong> - NOT "method" or "function" at this level</li>
                    <li>Say <strong>"input"</strong> - NOT "parameter" or "argument" at this level</li>
                  </ul>
                  <p className="text-sm mt-2 italic">Consistency helps your brain recognize the pattern!</p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Level 2: Recipe */}
          <TabsContent value="level2" className="space-y-4">
            <div className="p-5 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-purple-600">LEVEL 2</Badge>
                The Recipe: Function/Method
              </h4>
              
              <Alert className="mb-4 border-purple-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">What is a Recipe?</strong>
                  <p className="text-sm mb-2">A recipe (also called a "function" or "method") is a GROUP of lines that work together to do ONE job.</p>
                  <p className="text-sm font-bold">Think of it like a cooking recipe:</p>
                  <ul className="list-disc ml-4 mt-2 text-sm">
                    <li>Has a NAME (like "Make Sandwich")</li>
                    <li>Needs INGREDIENTS (like bread, cheese)</li>
                    <li>Has STEPS (actor.action lines)</li>
                    <li>Produces a RESULT (the sandwich)</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <div className="bg-white p-4 rounded-lg border-2 border-purple-300 mb-4">
                <strong className="block mb-2">Pseudocode Pattern (USE THIS EXACT FORMAT):</strong>
                <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg">
                  Recipe recipeName(ingredients you need):<br/>
                  {"  "}actor.action(input)    &lt;-- Line (Level 1)<br/>
                  {"  "}actor.action(input)    &lt;-- Line (Level 1)<br/>
                  {"  "}actor.action(input)    &lt;-- Line (Level 1)<br/>
                  {"  "}Give back result
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm"><strong>Example: Recipe to Greet Someone</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <strong className="text-purple-900 block mb-2">Our Pseudocode:</strong>
                    <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm whitespace-pre">
{`Recipe greetPerson(name):
  greeting = "Hello, " + name
  console.log(greeting)
  Give back greeting`}
                    </code>
                  </div>

                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <strong className="text-blue-900 block mb-2">Breaking it Down:</strong>
                    <div className="space-y-2 text-xs">
                      <p><strong>Recipe name:</strong> greetPerson</p>
                      <p><strong>Ingredients (input):</strong> name</p>
                      <p><strong>Steps (lines):</strong></p>
                      <ul className="list-disc ml-4 space-y-1">
                        <li>Line 1: Create greeting text</li>
                        <li>Line 2: console does log</li>
                        <li>Line 3: Give back the greeting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-purple-300">
                  <strong className="block mb-2">🔄 How Recipes Connect to Lines:</strong>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowDown className="w-4 h-4 text-purple-600" />
                      <span><strong>Zoom In:</strong> A recipe CONTAINS multiple lines (actor.action)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowUp className="w-4 h-4 text-purple-600" />
                      <span><strong>Zoom Out:</strong> Each line is PART OF a recipe</span>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="mt-4 border-orange-600 bg-orange-50">
                <AlertDescription className="text-orange-900">
                  <strong>⚠️ IMPORTANT - Standard Terminology:</strong>
                  <p className="text-sm mt-2">Always use these exact words in our pseudocode:</p>
                  <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
                    <li>Say <strong>"Recipe"</strong> - NOT "function" or "method" at this level</li>
                    <li>Start with <strong>"Recipe recipeName(ingredients):"</strong></li>
                    <li>Use <strong>"Give back"</strong> - NOT "return"</li>
                    <li>Inside recipes, use <strong>actor.action(input)</strong> for each step</li>
                  </ul>
                  <p className="text-sm mt-2 italic">This keeps everything consistent and learnable!</p>
                </AlertDescription>
              </Alert>

              <Alert className="mt-4 border-green-600 bg-green-50">
                <AlertDescription className="text-green-900">
                  <strong>💡 Key Insight:</strong>
                  <p className="text-sm mt-2">
                    A recipe (Level 2) is just a CONTAINER for multiple lines (Level 1). 
                    The lines still follow actor.action(input), but now they're organized 
                    together because they work toward the same goal!
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Level 3: Program */}
          <TabsContent value="level3" className="space-y-4">
            <div className="p-5 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-orange-600">LEVEL 3</Badge>
                The Program: Multiple Recipes Working Together
              </h4>
              
              <Alert className="mb-4 border-orange-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">What is a Program?</strong>
                  <p className="text-sm mb-2">A program is multiple recipes that CALL EACH OTHER to solve a bigger problem.</p>
                  <p className="text-sm font-bold">Think of it like a restaurant kitchen:</p>
                  <ul className="list-disc ml-4 mt-2 text-sm">
                    <li>Multiple chefs (recipes) each doing their job</li>
                    <li>They work together to make the full meal</li>
                    <li>Each recipe can be used in different meals</li>
                    <li>The main recipe coordinates everything</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <p className="text-sm"><strong>Example: Simple Calculator Program</strong></p>
                
                <div className="bg-white p-4 rounded-lg border-2 border-orange-300">
                  <strong className="block mb-2">Complete Program in Pseudocode:</strong>
                  <code className="block bg-gray-900 text-green-400 p-4 rounded text-sm whitespace-pre font-mono">
{`Recipe add(num1, num2):
  result = num1 + num2
  Give back result

Recipe multiply(num1, num2):
  result = num1 * num2
  Give back result

Recipe main():
  a = 5
  b = 3
  sum = add(a, b)
  product = multiply(a, b)
  console.log("Sum:", sum)
  console.log("Product:", product)`}
                  </code>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border-2 border-blue-200">
                    <Badge className="bg-blue-600 mb-2 text-xs">Recipe: add</Badge>
                    <p className="text-xs text-muted-foreground">
                      Level 2: Contains lines<br/>
                      Level 3: Called by main
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border-2 border-blue-200">
                    <Badge className="bg-blue-600 mb-2 text-xs">Recipe: multiply</Badge>
                    <p className="text-xs text-muted-foreground">
                      Level 2: Contains lines<br/>
                      Level 3: Called by main
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border-2 border-orange-200">
                    <Badge className="bg-orange-600 mb-2 text-xs">Recipe: main</Badge>
                    <p className="text-xs text-muted-foreground">
                      Level 3: Coordinates<br/>
                      Calls other recipes
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg border-2 border-orange-300">
                  <strong className="block mb-2">🔄 The Complete Pattern Hierarchy:</strong>
                  <div className="space-y-3 text-sm">
                    <div className="p-2 bg-white rounded border border-blue-200">
                      <strong className="text-blue-900">Level 1 (Line):</strong>
                      <code className="block text-xs mt-1">console.log("Sum:", sum)</code>
                      <p className="text-xs text-muted-foreground mt-1">Single actor.action</p>
                    </div>
                    
                    <ArrowDown className="w-5 h-5 text-purple-600 mx-auto" />
                    
                    <div className="p-2 bg-white rounded border border-purple-200">
                      <strong className="text-purple-900">Level 2 (Recipe):</strong>
                      <code className="block text-xs mt-1">Recipe main() contains that line</code>
                      <p className="text-xs text-muted-foreground mt-1">Multiple lines grouped</p>
                    </div>
                    
                    <ArrowDown className="w-5 h-5 text-orange-600 mx-auto" />
                    
                    <div className="p-2 bg-white rounded border border-orange-200">
                      <strong className="text-orange-900">Level 3 (Program):</strong>
                      <code className="block text-xs mt-1">main() calls add() and multiply()</code>
                      <p className="text-xs text-muted-foreground mt-1">Recipes working together</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="mt-4 border-green-600 bg-green-50">
                <AlertDescription className="text-green-900">
                  <strong>💡 The Beautiful Pattern:</strong>
                  <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
                    <li><strong>Calling a recipe is STILL actor.action!</strong></li>
                    <li>When you write <code>add(a, b)</code>, that's actor.action(input)</li>
                    <li>The recipe name is the "action" and the ingredients are the "input"</li>
                    <li><strong>The SAME pattern works at ALL levels!</strong></li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>

        <Alert className="border-purple-600 bg-purple-50">
          <Code2 className="h-5 w-5 text-purple-600" />
          <AlertDescription className="text-purple-900">
            <strong className="block mb-2">🎯 Practice Strategy:</strong>
            <ol className="list-decimal ml-4 space-y-1 text-sm">
              <li><strong>Start with Level 1:</strong> Master actor.action(input) first</li>
              <li><strong>Move to Level 2:</strong> See how lines group into recipes</li>
              <li><strong>Understand Level 3:</strong> See how recipes call each other</li>
              <li><strong>Zoom in and out:</strong> Practice moving between levels</li>
              <li><strong>Use consistent terms:</strong> Always say "Recipe", "actor.action", "Give back"</li>
            </ol>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
