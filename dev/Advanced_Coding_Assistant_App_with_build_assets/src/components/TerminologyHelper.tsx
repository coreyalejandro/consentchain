import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { Lightbulb, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { detectTerminologyIssues, getTerminologyFeedback, type TerminologySuggestion } from '../lib/terminology-enforcer';

interface TerminologyHelperProps {
  userInput: string;
  onSuggestionAccept?: (original: string, suggested: string) => void;
}

export function TerminologyHelper({ userInput, onSuggestionAccept }: TerminologyHelperProps) {
  const [suggestions, setSuggestions] = useState<TerminologySuggestion[]>([]);
  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    if (userInput.trim()) {
      const detected = detectTerminologyIssues(userInput);
      setSuggestions(detected);
      setShowHelper(detected.length > 0);
    } else {
      setSuggestions([]);
      setShowHelper(false);
    }
  }, [userInput]);

  if (!showHelper && suggestions.length === 0) {
    return null;
  }

  const categoryColors: Record<string, string> = {
    actor: 'blue',
    action: 'purple',
    recipe: 'orange',
    control: 'green',
    variable: 'pink'
  };

  const categoryIcons: Record<string, string> = {
    actor: '👤',
    action: '⚡',
    recipe: '📖',
    control: '🔀',
    variable: '📦'
  };

  // Group suggestions by original term to avoid duplicates
  const uniqueSuggestions = suggestions.reduce((acc, s) => {
    const key = `${s.original.toLowerCase()}-${s.suggested}`;
    if (!acc.has(key)) {
      acc.set(key, s);
    }
    return acc;
  }, new Map<string, TerminologySuggestion>());

  const uniqueList = Array.from(uniqueSuggestions.values());

  return (
    <Card className="border-2 border-orange-600/20 bg-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-900">
          <Lightbulb className="w-5 h-5" />
          💡 Terminology Helper
        </CardTitle>
        <CardDescription className="text-orange-800">
          Let's use our standard terms to make patterns easier to recognize!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.length > 0 ? (
          <>
            <Alert className="border-orange-600 bg-white">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-900">
                <strong className="block mb-2">🎯 I noticed some non-standard terms:</strong>
                <p className="text-sm">
                  You're on the right track! Let's adjust a few words to match our standard pseudocode.
                  This will help your brain recognize patterns faster.
                </p>
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              {uniqueList.map((suggestion, index) => {
                const icon = categoryIcons[suggestion.category] || '💡';
                
                // Map category to actual CSS classes
                const getBorderClasses = (category: string) => {
                  switch(category) {
                    case 'actor': return 'border-blue-200 hover:border-blue-400';
                    case 'action': return 'border-purple-200 hover:border-purple-400';
                    case 'recipe': return 'border-orange-200 hover:border-orange-400';
                    case 'control': return 'border-green-200 hover:border-green-400';
                    case 'variable': return 'border-pink-200 hover:border-pink-400';
                    default: return 'border-gray-200 hover:border-gray-400';
                  }
                };

                const getBadgeClasses = (category: string) => {
                  switch(category) {
                    case 'actor': return 'bg-blue-50 border-blue-300';
                    case 'action': return 'bg-purple-50 border-purple-300';
                    case 'recipe': return 'bg-orange-50 border-orange-300';
                    case 'control': return 'bg-green-50 border-green-300';
                    case 'variable': return 'bg-pink-50 border-pink-300';
                    default: return 'bg-gray-50 border-gray-300';
                  }
                };
                
                return (
                  <div 
                    key={index}
                    className={`p-4 bg-white rounded-lg border-2 transition-colors ${getBorderClasses(suggestion.category)}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{icon}</span>
                          <Badge variant="outline" className={getBadgeClasses(suggestion.category)}>
                            {suggestion.category}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-2">
                          <code className="px-2 py-1 bg-red-50 border border-red-200 rounded text-sm text-red-900">
                            {suggestion.original}
                          </code>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <code className="px-2 py-1 bg-green-50 border border-green-200 rounded text-sm text-green-900 font-bold">
                            {suggestion.suggested}
                          </code>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {suggestion.reason}
                        </p>
                      </div>
                      
                      {onSuggestionAccept && (
                        <button
                          onClick={() => onSuggestionAccept(suggestion.original, suggestion.suggested)}
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
                        >
                          Apply
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <Alert className="border-purple-600 bg-purple-50">
              <Lightbulb className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-purple-900">
                <strong className="block mb-2">🧠 Why Consistency Matters:</strong>
                <ul className="list-disc ml-4 space-y-1 text-sm">
                  <li>Your brain builds stronger neural pathways with repetition</li>
                  <li>Same words = patterns become automatic</li>
                  <li>Especially helpful for neurodivergent learners</li>
                  <li>Makes it easier to read ANY code later</li>
                </ul>
              </AlertDescription>
            </Alert>
          </>
        ) : (
          <Alert className="border-green-600 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-900">
              <strong className="block mb-2">✅ Perfect!</strong>
              <p className="text-sm">
                You're using our standard terminology. Your brain is building those pattern-recognition pathways!
              </p>
            </AlertDescription>
          </Alert>
        )}

        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="text-sm mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-blue-600" />
            <strong className="text-blue-900">Quick Reference:</strong>
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-white rounded">
              <strong className="text-blue-900">Say:</strong> <code>actor.action</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-red-900">Not:</strong> <code>object.method</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-blue-900">Say:</strong> <code>Recipe</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-red-900">Not:</strong> <code>function</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-blue-900">Say:</strong> <code>Give back</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-red-900">Not:</strong> <code>return</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-blue-900">Say:</strong> <code>OTHERWISE</code>
            </div>
            <div className="p-2 bg-white rounded">
              <strong className="text-red-900">Not:</strong> <code>else</code>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
