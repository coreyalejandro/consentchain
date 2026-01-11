import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Alert, AlertDescription } from './components/ui/alert';
import { UniversalConverter } from './components/UniversalConverter';
import { MetacognitiveConverter } from './components/MetacognitiveConverter';
import { ActorActionExplainer } from './components/ActorActionExplainer';
import { QuickReferenceGuide } from './components/QuickReferenceGuide';
import { PatternHierarchy } from './components/PatternHierarchy';
import { PatternDictionary } from './components/PatternDictionary';
import { StepByStepGuide } from './components/StepByStepGuide';
import { MasteryTracker } from './components/MasteryTracker';
import { Badge } from './components/ui/badge';
import { 
  Code2, 
  GraduationCap, 
  Target, 
  Settings,
  BookOpen,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('convert');
  
  // Learning steps state
  const [steps, setSteps] = useState([
    {
      id: 'step-1',
      title: 'Understand the Problem',
      description: 'Before writing any code or pseudocode, you must clearly understand what problem you are trying to solve.',
      whatToDo: [
        'Read the problem or requirement carefully, word by word',
        'Identify the input (what information you have)',
        'Identify the output (what result you need)',
        'Write down the goal in your own words'
      ],
      whatNotToDo: [
        'Skip reading the full problem',
        'Start coding before understanding',
        'Assume you know what is needed without verification',
        'Rush through this step'
      ],
      tips: [
        'Reread the problem 2-3 times before proceeding',
        'Circle or highlight key words in the problem',
        'Ask yourself: "What is the input and what should come out?"'
      ],
      commonMistakes: [
        'Jumping straight to code without planning',
        'Misunderstanding what the problem is asking for',
        'Not identifying edge cases or special situations'
      ],
      completed: false
    },
    {
      id: 'step-2',
      title: 'Write Clear Pseudocode',
      description: 'Pseudocode is a plain English description of your program logic. It helps you think through the solution before writing actual code.',
      whatToDo: [
        'Write each step in simple, clear English',
        'Put each action on its own line',
        'Use indentation to show which steps belong together',
        'Describe WHAT to do, not HOW the computer does it'
      ],
      whatNotToDo: [
        'Write actual programming syntax',
        'Use complicated technical jargon',
        'Skip steps because they seem obvious',
        'Write everything in one long paragraph'
      ],
      tips: [
        'Think of pseudocode like writing a recipe',
        'Each line should be a single, clear instruction',
        'Use words like "if", "then", "otherwise" for conditions'
      ],
      commonMistakes: [
        'Mixing pseudocode with real code syntax',
        'Being too vague (e.g., "do the thing")',
        'Not breaking complex operations into smaller steps'
      ],
      completed: false
    },
    {
      id: 'step-3',
      title: 'Convert to Code',
      description: 'Transform your pseudocode into actual programming language syntax. The tool will help you with this conversion.',
      whatToDo: [
        'Enter your pseudocode in the left panel',
        'Review the generated code in the right panel',
        'Compare each line of pseudocode to the generated code',
        'Make sure you understand what each code line does'
      ],
      whatNotToDo: [
        'Copy code without understanding it',
        'Assume the generated code is always perfect',
        'Skip reviewing the conversion',
        'Move forward if you don\'t understand a part'
      ],
      tips: [
        'The tool generates code automatically as you type',
        'If code looks wrong, check your pseudocode first',
        'You can change the programming language using the dropdown'
      ],
      commonMistakes: [
        'Not verifying the generated code matches your intent',
        'Skipping syntax details like semicolons or brackets',
        'Not understanding variable names or data types'
      ],
      completed: false
    },
    {
      id: 'step-4',
      title: 'Test and Verify',
      description: 'Testing ensures your code works correctly. Always test with different inputs to find and fix problems.',
      whatToDo: [
        'Copy the generated code to your development environment',
        'Run the code with the expected input',
        'Check if the output matches what you expected',
        'Try different inputs, including edge cases'
      ],
      whatNotToDo: [
        'Assume the code works without testing',
        'Test only once with one input',
        'Ignore error messages',
        'Skip this step to "save time"'
      ],
      tips: [
        'Test with normal inputs first',
        'Then test with unusual or extreme values',
        'Keep track of what works and what doesn\'t'
      ],
      commonMistakes: [
        'Testing only the "happy path" (normal cases)',
        'Not checking error messages carefully',
        'Giving up after the first error instead of debugging'
      ],
      completed: false
    },
    {
      id: 'step-5',
      title: 'Practice and Reinforce',
      description: 'Mastery comes from repeated practice. Complete similar exercises to strengthen your understanding.',
      whatToDo: [
        'Try solving a similar problem from scratch',
        'Explain the code to yourself or someone else',
        'Write notes about what you learned',
        'Mark this topic as practiced in your mastery tracker'
      ],
      whatNotToDo: [
        'Move to a new topic immediately',
        'Practice only once and assume you\'ve mastered it',
        'Skip making notes about what you learned',
        'Practice when you\'re too tired or distracted'
      ],
      tips: [
        'Repetition is key to mastery',
        'Try to practice at the same time each day',
        'Review your notes before each practice session'
      ],
      commonMistakes: [
        'Not practicing enough times to achieve mastery',
        'Practicing without understanding',
        'Not tracking progress systematically'
      ],
      completed: false
    }
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  
  // Mastery tracking state
  const [masteryLevels, setMasteryLevels] = useState([
    {
      topic: 'Variables and Data Types',
      level: 3,
      maxLevel: 5,
      practices: 7,
      lastPracticed: '2 days ago'
    },
    {
      topic: 'Conditional Statements (If/Else)',
      level: 2,
      maxLevel: 5,
      practices: 4,
      lastPracticed: '1 week ago'
    },
    {
      topic: 'Loops and Iteration',
      level: 1,
      maxLevel: 5,
      practices: 2,
      lastPracticed: '2 weeks ago'
    },
    {
      topic: 'Functions and Methods',
      level: 0,
      maxLevel: 5,
      practices: 0,
      lastPracticed: 'Never'
    },
    {
      topic: 'Arrays and Lists',
      level: 1,
      maxLevel: 5,
      practices: 1,
      lastPracticed: '1 week ago'
    }
  ]);

  const handleStepComplete = (stepId: string) => {
    setSteps(prevSteps => 
      prevSteps.map(step => 
        step.id === stepId ? { ...step, completed: true } : step
      )
    );
    
    const nextIncompleteIndex = steps.findIndex((step, index) => 
      index > currentStep && !step.completed
    );
    
    if (nextIncompleteIndex !== -1) {
      setCurrentStep(nextIncompleteIndex);
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white border-b-4 border-purple-600 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                Code Mastery Assistant
              </h1>
              <p className="text-muted-foreground">
                Advanced Pseudocode-to-Code Converter & Learning Platform
              </p>
            </div>
            
            <Badge variant="outline" className="bg-purple-100 border-purple-600 text-purple-900 px-4 py-2">
              Universal Code Translator
            </Badge>
          </div>
        </div>
      </header>

      {/* Important Instructions Alert */}
      <div className="container mx-auto px-4 py-4">
        <Alert className="border-2 border-blue-600 bg-blue-50">
          <AlertCircle className="h-5 w-5 text-blue-600" />
          <AlertDescription>
            <strong className="text-blue-900 block mb-2">📋 IMPORTANT - READ BEFORE STARTING:</strong>
            <div className="space-y-2 text-blue-900">
              <p><strong>1. DO NOT SKIP STEPS:</strong> Each step is essential. Complete them in order.</p>
              <p><strong>2. READ ALL INSTRUCTIONS:</strong> Read every instruction fully before taking action.</p>
              <p><strong>3. ASK FOR HELP:</strong> If anything is unclear, stop and seek clarification.</p>
              <p><strong>4. TAKE YOUR TIME:</strong> There is no rush. Understanding is more important than speed.</p>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-white border-2 border-gray-200">
            <TabsTrigger 
              value="convert" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Code2 className="w-4 h-4" />
              Convert Code
            </TabsTrigger>
            <TabsTrigger 
              value="metacognitive" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Lightbulb className="w-4 h-4" />
              Learning Mode
            </TabsTrigger>
            <TabsTrigger 
              value="learn" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4" />
              Step-by-Step
            </TabsTrigger>
            <TabsTrigger 
              value="mastery" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <GraduationCap className="w-4 h-4" />
              Track Progress
            </TabsTrigger>
          </TabsList>

          {/* Convert Tab */}
          <TabsContent value="convert" className="space-y-6">
            <Card className="border-2 border-blue-600/20 bg-white">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                  Universal Code Translator
                </CardTitle>
                <CardDescription>
                  Convert between ANY supported language - Natural Language, Pseudocode, JavaScript, TypeScript, Python, Java, Scala, Rust, Go
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-600">Step 1</Badge>
                      <h4>Choose Source</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Select your input language or use Auto-Detect to automatically identify it.
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-purple-200 rounded-lg bg-purple-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-purple-600">Step 2</Badge>
                      <h4>Write Code</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Type or paste code in ANY supported format - from natural language to actual code.
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-orange-200 rounded-lg bg-orange-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-600">Step 3</Badge>
                      <h4>View Pseudocode</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      See the universal pseudocode representation in the middle panel.
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-600">Step 4</Badge>
                      <h4>Get Output</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Select target language and get converted code instantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <UniversalConverter />
          </TabsContent>

          {/* Metacognitive Learning Tab */}
          <TabsContent value="metacognitive" className="space-y-6">
            <Card className="border-2 border-purple-600/20 bg-white">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                  Metacognitive Learning Mode
                </CardTitle>
                <CardDescription>
                  See HOW and WHY code works - with "thinking out loud" explanations designed for neurodivergent learners
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Alert className="border-purple-600 bg-purple-50">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                  <AlertDescription className="text-purple-900">
                    <strong className="block mb-2">🧠 What Makes This Special:</strong>
                    <ul className="list-disc ml-4 space-y-1 text-sm">
                      <li><strong>Metacognition:</strong> Shows the THINKING PROCESS behind each decision</li>
                      <li><strong>Actor.Action Pattern:</strong> Explains the fundamental pattern that appears everywhere</li>
                      <li><strong>Zero Assumptions:</strong> Explains everything like you're learning for the first time</li>
                      <li><strong>Repeated Explanations:</strong> Key concepts explained multiple ways, multiple times</li>
                      <li><strong>High-Level → Code Mapping:</strong> See how abstract ideas become concrete code</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <PatternHierarchy />
            
            <PatternDictionary />
            
            <QuickReferenceGuide />
            
            <MetacognitiveConverter />
          </TabsContent>

          {/* Learning Guide Tab */}
          <TabsContent value="learn" className="space-y-6">
            <Card className="border-2 border-purple-600/20 bg-white">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Mastery Learning Approach
                </CardTitle>
                <CardDescription>
                  This guide uses proven mastery learning techniques designed for your success
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Alert className="border-purple-600 bg-purple-50">
                    <Lightbulb className="h-5 w-5 text-purple-600" />
                    <AlertDescription className="text-purple-900">
                      <strong className="block mb-2">Why Mastery Learning Works:</strong>
                      <ul className="list-disc ml-4 space-y-1">
                        <li><strong>One step at a time:</strong> Each skill builds on the previous one</li>
                        <li><strong>Complete understanding:</strong> You don't move forward until you truly understand</li>
                        <li><strong>Multiple modalities:</strong> Visual, written, and interactive learning</li>
                        <li><strong>Clear expectations:</strong> You always know exactly what to do next</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            <ActorActionExplainer />

            <StepByStepGuide 
              steps={steps}
              onStepComplete={handleStepComplete}
              currentStep={currentStep}
            />
          </TabsContent>

          {/* Mastery Tracking Tab */}
          <TabsContent value="mastery" className="space-y-6">
            <MasteryTracker 
              masteryLevels={masteryLevels}
              totalPractices={14}
              currentStreak={3}
            />
            
            <Card className="border-2 border-green-600/20">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Practice Recommendations
                </CardTitle>
                <CardDescription>
                  Suggested exercises to improve your mastery levels
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Alert className="border-blue-600 bg-blue-50">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    <AlertDescription className="text-blue-900">
                      <strong className="block mb-2">📚 Next Practice Session:</strong>
                      <p className="mb-2">Based on your progress, we recommend practicing:</p>
                      <ol className="list-decimal ml-4 space-y-1">
                        <li><strong>Conditional Statements</strong> - You're at level 2/5. Practice 3 more times to master.</li>
                        <li><strong>Loops and Iteration</strong> - You're at level 1/5. This is a foundational skill.</li>
                        <li><strong>Functions and Methods</strong> - Start practicing this new topic.</li>
                      </ol>
                    </AlertDescription>
                  </Alert>

                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
                    <h4 className="mb-2">💡 Remember:</h4>
                    <ul className="list-disc ml-4 space-y-1 text-muted-foreground">
                      <li>Practice regularly, even if just for 15 minutes</li>
                      <li>Review topics you've already mastered to maintain skills</li>
                      <li>It's okay to take breaks when you need them</li>
                      <li>Progress is not always linear - that's normal!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-purple-600 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-muted-foreground">
            <p>Built with accessibility and neurodiversity in mind</p>
            <p className="text-sm mt-2">Take your time. Every step matters. You've got this! 💪</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
