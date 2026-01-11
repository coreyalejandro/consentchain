import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { Eye, ArrowRight } from 'lucide-react';

export function ActorActionExplainer() {
  const examples = [
    {
      code: 'console.log("Hello")',
      actor: 'console',
      actorDescription: 'The JavaScript console object (built-in tool for displaying messages)',
      action: 'log',
      actionDescription: 'The action/method that prints messages to the console',
      input: '"Hello"',
      inputDescription: 'What to print (a string of text)',
      result: 'Displays "Hello" in the browser console',
      analogy: 'Like asking a printer to print a document - printer.print(document)'
    },
    {
      code: 'array.push(item)',
      actor: 'array',
      actorDescription: 'An array (list) that you created',
      action: 'push',
      actionDescription: 'The action that adds something to the end of the array',
      input: 'item',
      inputDescription: 'The value you want to add to the array',
      result: 'Adds the item to the end of the array',
      analogy: 'Like telling a shopping list to add a new item - shoppingList.add(milk)'
    },
    {
      code: 'self.checkAnswer(answer)',
      actor: 'self',
      actorDescription: 'The current object (in this case, the agent/object doing the work)',
      action: 'checkAnswer',
      actionDescription: 'A method that validates if an answer is correct',
      input: 'answer',
      inputDescription: 'The answer to check',
      result: 'Returns whether the answer is valid',
      analogy: 'Like asking yourself to verify something - me.verify(thisAnswer)'
    },
    {
      code: 'Math.random()',
      actor: 'Math',
      actorDescription: 'JavaScript\'s built-in Math object (collection of math functions)',
      action: 'random',
      actionDescription: 'The action that generates a random number',
      input: '(no input)',
      inputDescription: 'This action needs nothing to work',
      result: 'Returns a random number between 0 and 1',
      analogy: 'Like asking a dice to give you a random number - dice.roll()'
    }
  ];

  return (
    <Card className="border-2 border-blue-600/20">
      <CardHeader className="bg-blue-50">
        <CardTitle className="flex items-center gap-2">
          <Eye className="w-6 h-6 text-blue-600" />
          Understanding: Actor.Method(Arguments) → Result
        </CardTitle>
        <CardDescription>
          The fundamental pattern that appears EVERYWHERE in programming - with precise slot labeling
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <Alert className="border-blue-600 bg-blue-50">
          <Eye className="h-5 w-5 text-blue-600" />
          <AlertDescription className="text-blue-900">
            <strong className="block mb-3 text-lg">🎯 The Canonical Pattern (Memorize This!):</strong>
            <div className="bg-white p-4 rounded-lg border-2 border-blue-300 mb-3">
              <p className="text-center mb-3">
                <strong>"Actor performs method using arguments and outputs the result"</strong>
              </p>
              <div className="font-mono text-lg bg-gray-900 text-green-400 p-3 rounded text-center">
                <span className="text-blue-400 font-bold">result</span>
                <span className="text-gray-400"> = </span>
                <span className="text-cyan-400 font-bold">ACTOR</span>
                <span className="text-gray-400">.</span>
                <span className="text-purple-400 font-bold">METHOD</span>
                <span className="text-gray-400">(</span>
                <span className="text-orange-400 font-bold">ARGUMENTS</span>
                <span className="text-gray-400">)</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-3">
                <Badge className="bg-cyan-600 min-w-[110px]">ACTOR</Badge>
                <ArrowRight className="w-4 h-4" />
                <span>Who/what does it</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 min-w-[110px]">METHOD</Badge>
                <ArrowRight className="w-4 h-4" />
                <span>Name of the action</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-600 min-w-[110px]">ARGUMENTS</Badge>
                <ArrowRight className="w-4 h-4" />
                <span>Input pieces needed</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-600 min-w-[110px]">RESULT</Badge>
                <ArrowRight className="w-4 h-4" />
                <span>What comes back/output</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        {examples.map((example, index) => (
          <div key={index} className="p-5 border-2 border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Badge variant="outline" className="mb-2">Example {index + 1}</Badge>
                <div className="font-mono text-lg bg-gray-900 text-green-400 p-3 rounded-lg inline-block">
                  {example.code}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Actor */}
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">ACTOR</Badge>
                  <code className="text-sm font-mono bg-white px-2 py-1 rounded border border-blue-300">
                    {example.actor}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">{example.actorDescription}</p>
              </div>

              {/* Action */}
              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600">ACTION</Badge>
                  <code className="text-sm font-mono bg-white px-2 py-1 rounded border border-purple-300">
                    {example.action}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">{example.actionDescription}</p>
              </div>

              {/* Input */}
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">INPUT</Badge>
                  <code className="text-sm font-mono bg-white px-2 py-1 rounded border border-green-300">
                    {example.input}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">{example.inputDescription}</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm mb-1"><strong>✅ What Happens:</strong></p>
              <p className="text-sm text-muted-foreground">{example.result}</p>
            </div>

            <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm mb-1"><strong>💡 Real-World Analogy:</strong></p>
              <p className="text-sm text-purple-900 italic">{example.analogy}</p>
            </div>
          </div>
        ))}

        <Alert className="border-orange-600 bg-orange-50">
          <AlertDescription className="text-orange-900">
            <strong className="block mb-2">🔑 Key Insights:</strong>
            <ul className="list-disc ml-4 space-y-1 text-sm">
              <li><strong>This pattern is EVERYWHERE</strong> - Once you see it, you'll see it in all code</li>
              <li><strong>The period (.) is crucial</strong> - It connects the actor to their action</li>
              <li><strong>Read left to right:</strong> "Actor does action using input"</li>
              <li><strong>Sometimes no input needed:</strong> Like Math.random() - just parentheses ()</li>
              <li><strong>Can chain multiple:</strong> Like array.filter().map() - output of one becomes actor for next</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
          <h4 className="mb-3">🧠 Practice Recognition:</h4>
          <p className="text-sm text-muted-foreground mb-3">
            When you see code, ask yourself these questions:
          </p>
          <ol className="list-decimal ml-4 space-y-2 text-sm">
            <li><strong>Who is doing something?</strong> (Find the actor before the period)</li>
            <li><strong>What are they doing?</strong> (Find the action/method after the period)</li>
            <li><strong>What do they need to do it?</strong> (Find the input inside parentheses)</li>
            <li><strong>What happens as a result?</strong> (What comes back or what changes)</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
