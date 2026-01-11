import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2, Circle, AlertTriangle, Lightbulb, XCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Step {
  id: string;
  title: string;
  description: string;
  whatToDo: string[];
  whatNotToDo: string[];
  tips: string[];
  commonMistakes: string[];
  completed: boolean;
}

interface StepByStepGuideProps {
  steps: Step[];
  onStepComplete: (stepId: string) => void;
  currentStep: number;
}

export function StepByStepGuide({ steps, onStepComplete, currentStep }: StepByStepGuideProps) {
  return (
    <Card className="border-2 border-purple-600/20">
      <CardHeader className="bg-purple-50">
        <CardTitle>Step-by-Step Learning Guide</CardTitle>
        <CardDescription>
          Follow each step carefully. Read all instructions before proceeding.
        </CardDescription>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm">Progress:</span>
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-600 transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
          <Badge variant="outline" className="bg-purple-50">
            {currentStep} / {steps.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="space-y-4" defaultValue="step-0">
          {steps.map((step, index) => (
            <AccordionItem 
              key={step.id} 
              value={`step-${index}`}
              className={`border-2 rounded-lg overflow-hidden ${
                step.completed 
                  ? 'border-green-600/30 bg-green-50/50' 
                  : index === currentStep 
                  ? 'border-purple-600/50 bg-purple-50/50'
                  : 'border-gray-200'
              }`}
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-current">
                    {step.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : index === currentStep ? (
                      <Circle className="w-6 h-6 text-purple-600 fill-purple-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-mono bg-white px-2 py-0.5 rounded border">
                        Step {index + 1}
                      </span>
                      {step.completed && (
                        <Badge variant="outline" className="bg-green-50 border-green-600">
                          ✓ Complete
                        </Badge>
                      )}
                      {index === currentStep && !step.completed && (
                        <Badge variant="outline" className="bg-purple-50 border-purple-600">
                          ← Current Step
                        </Badge>
                      )}
                    </div>
                    <h4 className="mt-1">{step.title}</h4>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4 mt-4">
                  {/* Description */}
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-blue-600" />
                      What This Step Does
                    </h5>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* What to Do */}
                  <Alert className="border-green-600 bg-green-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertDescription>
                      <strong className="text-green-900 block mb-2">✓ WHAT TO DO (Follow These Steps):</strong>
                      <ol className="list-decimal ml-4 space-y-2 text-green-900">
                        {step.whatToDo.map((item, i) => (
                          <li key={i} className="pl-2">
                            <strong>Step {index + 1}.{i + 1}:</strong> {item}
                          </li>
                        ))}
                      </ol>
                    </AlertDescription>
                  </Alert>

                  {/* What NOT to Do */}
                  <Alert className="border-red-600 bg-red-50">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <AlertDescription>
                      <strong className="text-red-900 block mb-2">✗ WHAT NOT TO DO (Avoid These):</strong>
                      <ul className="list-disc ml-4 space-y-2 text-red-900">
                        {step.whatNotToDo.map((item, i) => (
                          <li key={i} className="pl-2">
                            <strong>Don't:</strong> {item}
                          </li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>

                  {/* Common Mistakes */}
                  {step.commonMistakes.length > 0 && (
                    <Alert className="border-orange-600 bg-orange-50">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <AlertDescription>
                        <strong className="text-orange-900 block mb-2">⚠ Common Mistakes to Avoid:</strong>
                        <ul className="list-disc ml-4 space-y-2 text-orange-900">
                          {step.commonMistakes.map((mistake, i) => (
                            <li key={i} className="pl-2">{mistake}</li>
                          ))}
                        </ul>
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Tips */}
                  {step.tips.length > 0 && (
                    <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                      <h5 className="mb-2 flex items-center gap-2 text-purple-900">
                        <Lightbulb className="w-4 h-4 text-purple-600" />
                        Helpful Tips
                      </h5>
                      <ul className="list-disc ml-4 space-y-1 text-purple-900">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="pl-2">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mark Complete Button */}
                  {!step.completed && (
                    <button
                      onClick={() => onStepComplete(step.id)}
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors border-2 border-purple-700"
                    >
                      ✓ I Have Completed This Step
                    </button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
