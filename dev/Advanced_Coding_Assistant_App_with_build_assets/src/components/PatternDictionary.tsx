import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, ArrowRight, Link as LinkIcon, Layers, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function PatternDictionary() {
  return (
    <Card className="border-2 border-blue-600/20">
      <CardHeader className="bg-blue-50">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          Pattern Dictionary: All Variations
        </CardTitle>
        <CardDescription>
          Every code pattern you'll encounter, explained with consistent slot labeling
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Canonical Pattern */}
        <Alert className="border-purple-600 bg-purple-50">
          <AlertDescription className="text-purple-900">
            <strong className="block mb-3 text-lg">📐 The Canonical Pattern (Memorize This!):</strong>
            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 mb-3">
              <p className="text-center mb-2">
                <strong className="text-purple-900">
                  "Actor performs method using arguments and outputs the result"
                </strong>
              </p>
              <code className="block text-center bg-gray-900 text-green-400 p-3 rounded mt-2">
                result = actor.method(arguments)
              </code>
            </div>
            <div className="grid grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-blue-50 rounded border border-blue-200">
                <strong className="text-blue-900">ACTOR</strong>
                <p className="text-xs text-muted-foreground">Who/what does it</p>
              </div>
              <div className="p-2 bg-purple-50 rounded border border-purple-200">
                <strong className="text-purple-900">METHOD</strong>
                <p className="text-xs text-muted-foreground">Name of action</p>
              </div>
              <div className="p-2 bg-orange-50 rounded border border-orange-200">
                <strong className="text-orange-900">ARGUMENTS</strong>
                <p className="text-xs text-muted-foreground">Input pieces</p>
              </div>
              <div className="p-2 bg-green-50 rounded border border-green-200">
                <strong className="text-green-900">RESULT</strong>
                <p className="text-xs text-muted-foreground">What comes back</p>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="simple">Simple Call</TabsTrigger>
            <TabsTrigger value="void">No Result</TabsTrigger>
            <TabsTrigger value="no-args">No Arguments</TabsTrigger>
            <TabsTrigger value="chained">Chained</TabsTrigger>
            <TabsTrigger value="nested">Nested</TabsTrigger>
          </TabsList>

          {/* Simple Method Call */}
          <TabsContent value="simple" className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-blue-600">Pattern 1</Badge>
                Simple Method Call
              </h4>
              
              <TooltipProvider>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-300 mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Code Example:</p>
                  <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono">
                    sum = calculator.add(3, 4)
                  </code>
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-sm"><strong>Breaking Down the Slots:</strong></p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-3 bg-blue-50 rounded border border-blue-200 cursor-help">
                            <strong className="text-blue-900 block mb-1">ACTOR:</strong>
                            <code className="text-sm">calculator</code>
                            <p className="text-xs text-muted-foreground mt-1">The object doing the work</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            The <strong>actor</strong> is the object, variable, or entity that has the method.
                            Think of it as "who" or "what" is performing the action.
                          </p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-3 bg-purple-50 rounded border border-purple-200 cursor-help">
                            <strong className="text-purple-900 block mb-1">METHOD:</strong>
                            <code className="text-sm">add</code>
                            <p className="text-xs text-muted-foreground mt-1">The action being performed</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            The <strong>method</strong> is the name of the function/action the actor can perform.
                            It describes WHAT the actor is doing.
                          </p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-3 bg-orange-50 rounded border border-orange-200 cursor-help">
                            <strong className="text-orange-900 block mb-1">ARGUMENTS:</strong>
                            <code className="text-sm">3, 4</code>
                            <p className="text-xs text-muted-foreground mt-1">The input pieces needed</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            The <strong>arguments</strong> are the specific values you pass to the method.
                            They are the actual data the method needs to do its job.
                          </p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-3 bg-green-50 rounded border border-green-200 cursor-help">
                            <strong className="text-green-900 block mb-1">RESULT:</strong>
                            <code className="text-sm">sum</code>
                            <p className="text-xs text-muted-foreground mt-1">Variable storing output</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            The <strong>result</strong> is what the method returns/produces.
                            It's stored in a variable so you can use it later.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </TooltipProvider>

              <Alert className="border-blue-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">📝 Say It Out Loud:</strong>
                  <p className="italic text-blue-900">
                    "The <strong>calculator</strong> (actor) performs <strong>add</strong> (method) 
                    using <strong>3 and 4</strong> (arguments) and outputs the <strong>sum</strong> (result)."
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* No Result (Void) */}
          <TabsContent value="void" className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-purple-600">Pattern 2</Badge>
                Method with No Result (Void)
              </h4>
              
              <div className="bg-white p-4 rounded-lg border-2 border-purple-300 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Code Example:</p>
                <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono">
                  console.log("Hello, World!")
                </code>
                
                <div className="mt-4 space-y-2">
                  <p className="text-sm"><strong>Breaking Down the Slots:</strong></p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 rounded border border-blue-200">
                      <strong className="text-blue-900 block mb-1">ACTOR:</strong>
                      <code className="text-sm">console</code>
                    </div>

                    <div className="p-3 bg-purple-50 rounded border border-purple-200">
                      <strong className="text-purple-900 block mb-1">METHOD:</strong>
                      <code className="text-sm">log</code>
                    </div>

                    <div className="p-3 bg-orange-50 rounded border border-orange-200">
                      <strong className="text-orange-900 block mb-1">ARGUMENTS:</strong>
                      <code className="text-sm">"Hello, World!"</code>
                    </div>

                    <div className="p-3 bg-gray-100 rounded border-2 border-gray-300 relative">
                      <X className="w-4 h-4 absolute top-2 right-2 text-gray-400" />
                      <strong className="text-gray-500 block mb-1">RESULT:</strong>
                      <code className="text-sm text-gray-500">none (void)</code>
                      <p className="text-xs text-gray-500 mt-1">No value returned</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-purple-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">📝 Say It Out Loud:</strong>
                  <p className="italic text-purple-900 mb-2">
                    "The <strong>console</strong> (actor) performs <strong>log</strong> (method) 
                    using <strong>"Hello, World!"</strong> (argument). No result is returned; 
                    the method performs an action (displays text) but doesn't give back a value."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Key Insight:</strong> Some methods DO things (like printing to screen) 
                    but don't RETURN anything. The result slot is empty/void.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* No Arguments */}
          <TabsContent value="no-args" className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-orange-600">Pattern 3</Badge>
                Method with No Arguments
              </h4>
              
              <div className="bg-white p-4 rounded-lg border-2 border-orange-300 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Code Example:</p>
                <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono">
                  randomNum = Math.random()
                </code>
                
                <div className="mt-4 space-y-2">
                  <p className="text-sm"><strong>Breaking Down the Slots:</strong></p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 rounded border border-blue-200">
                      <strong className="text-blue-900 block mb-1">ACTOR:</strong>
                      <code className="text-sm">Math</code>
                    </div>

                    <div className="p-3 bg-purple-50 rounded border border-purple-200">
                      <strong className="text-purple-900 block mb-1">METHOD:</strong>
                      <code className="text-sm">random</code>
                    </div>

                    <div className="p-3 bg-gray-100 rounded border-2 border-gray-300 relative">
                      <X className="w-4 h-4 absolute top-2 right-2 text-gray-400" />
                      <strong className="text-gray-500 block mb-1">ARGUMENTS:</strong>
                      <code className="text-sm text-gray-500">none</code>
                      <p className="text-xs text-gray-500 mt-1">Empty parentheses ()</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      <strong className="text-green-900 block mb-1">RESULT:</strong>
                      <code className="text-sm">randomNum</code>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-orange-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">📝 Say It Out Loud:</strong>
                  <p className="italic text-orange-900 mb-2">
                    "The <strong>Math</strong> (actor) performs <strong>random</strong> (method) 
                    with <strong>no arguments needed</strong> and outputs <strong>randomNum</strong> (result)."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Key Insight:</strong> Some methods don't need any input to do their job. 
                    You still write the parentheses <code>()</code> but leave them empty.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Chained Calls */}
          <TabsContent value="chained" className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border-2 border-green-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-green-600">Pattern 4</Badge>
                Chained Method Calls
                <LinkIcon className="w-4 h-4 text-green-600" />
              </h4>
              
              <div className="bg-white p-4 rounded-lg border-2 border-green-300 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Code Example:</p>
                <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono">
                  final = obj.first().second(10)
                </code>
                
                <div className="mt-4 space-y-3">
                  <p className="text-sm"><strong>Breaking Down the Chain (Two Calls!):</strong></p>
                  
                  <div className="p-3 bg-blue-50 rounded border-2 border-blue-300">
                    <strong className="text-blue-900 mb-2 block">🔗 Call #1:</strong>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm mb-2">
                      intermediate = obj.first()
                    </code>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="p-2 bg-white rounded">
                        <strong>ACTOR:</strong> obj
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>METHOD:</strong> first
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>ARGS:</strong> none
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>RESULT:</strong> intermediate
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>

                  <div className="p-3 bg-purple-50 rounded border-2 border-purple-300">
                    <strong className="text-purple-900 mb-2 block">🔗 Call #2:</strong>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm mb-2">
                      final = intermediate.second(10)
                    </code>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="p-2 bg-white rounded">
                        <strong>ACTOR:</strong> intermediate
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>METHOD:</strong> second
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>ARGS:</strong> 10
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>RESULT:</strong> final
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-green-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">📝 Say It Out Loud:</strong>
                  <p className="italic text-green-900 mb-3">
                    "The <strong>obj</strong> actor performs <strong>first</strong> method with no arguments, 
                    yielding an <strong>intermediate object</strong>. That intermediate object then performs 
                    <strong>second</strong> method with argument <strong>10</strong>, returning the <strong>final</strong> result."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Key Insight:</strong> Chaining is just TWO (or more) method calls in a row. 
                    The result of one becomes the actor for the next! Break it into separate steps to understand it.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Nested Calls */}
          <TabsContent value="nested" className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border-2 border-pink-200">
              <h4 className="mb-3 flex items-center gap-2">
                <Badge className="bg-pink-600">Pattern 5</Badge>
                Nested Method Calls
                <Layers className="w-4 h-4 text-pink-600" />
              </h4>
              
              <div className="bg-white p-4 rounded-lg border-2 border-pink-300 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Code Example:</p>
                <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono">
                  result = calculator.add(5, Math.random())
                </code>
                
                <div className="mt-4 space-y-3">
                  <p className="text-sm"><strong>Breaking Down the Nesting (Inner First!):</strong></p>
                  
                  <div className="p-3 bg-orange-50 rounded border-2 border-orange-300">
                    <strong className="text-orange-900 mb-2 block">📍 INNER Call (Happens First):</strong>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm mb-2">
                      temp = Math.random()
                    </code>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="p-2 bg-white rounded">
                        <strong>ACTOR:</strong> Math
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>METHOD:</strong> random
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>ARGS:</strong> none
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>RESULT:</strong> temp
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-pink-600" />
                  </div>

                  <div className="p-3 bg-blue-50 rounded border-2 border-blue-300">
                    <strong className="text-blue-900 mb-2 block">📍 OUTER Call (Uses Inner Result):</strong>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm mb-2">
                      result = calculator.add(5, temp)
                    </code>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="p-2 bg-white rounded">
                        <strong>ACTOR:</strong> calculator
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>METHOD:</strong> add
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>ARGS:</strong> 5, temp
                      </div>
                      <div className="p-2 bg-white rounded">
                        <strong>RESULT:</strong> result
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-pink-600 bg-white">
                <AlertDescription>
                  <strong className="block mb-2">📝 Say It Out Loud:</strong>
                  <p className="italic text-pink-900 mb-3">
                    "First, <strong>Math</strong> performs <strong>random</strong> with no arguments to get a temporary value. 
                    Then, <strong>calculator</strong> performs <strong>add</strong> using <strong>5 and that temporary value</strong> 
                    as arguments, returning the <strong>result</strong>."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Key Insight:</strong> Nested calls work from the INSIDE OUT. 
                    The innermost method executes first, and its result becomes an argument for the outer method.
                    Always start with the deepest nested call!
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary Reference */}
        <Alert className="border-purple-600 bg-gradient-to-r from-purple-50 to-blue-50">
          <AlertDescription className="text-purple-900">
            <strong className="block mb-3">🎯 Quick Reference for ALL Patterns:</strong>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Badge className="bg-blue-600 min-w-[80px]">Pattern 1</Badge>
                <span><strong>Simple:</strong> result = actor.method(args)</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge className="bg-purple-600 min-w-[80px]">Pattern 2</Badge>
                <span><strong>Void:</strong> actor.method(args) ← no result</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge className="bg-orange-600 min-w-[80px]">Pattern 3</Badge>
                <span><strong>No Args:</strong> result = actor.method() ← empty ()</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge className="bg-green-600 min-w-[80px]">Pattern 4</Badge>
                <span><strong>Chained:</strong> Break into separate calls, result → next actor</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge className="bg-pink-600 min-w-[80px]">Pattern 5</Badge>
                <span><strong>Nested:</strong> Solve innermost first, use result as argument</span>
              </div>
            </div>
            <p className="text-sm mt-4 italic">
              💡 Every line of code fits one of these five patterns. Learn them, and you can read ANY code!
            </p>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
