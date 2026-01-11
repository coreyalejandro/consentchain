import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Award, BookOpen, CheckCircle2, Target, TrendingUp } from 'lucide-react';

interface MasteryLevel {
  topic: string;
  level: number;
  maxLevel: number;
  practices: number;
  lastPracticed: string;
}

interface MasteryTrackerProps {
  masteryLevels: MasteryLevel[];
  totalPractices: number;
  currentStreak: number;
}

export function MasteryTracker({ masteryLevels, totalPractices, currentStreak }: MasteryTrackerProps) {
  const overallMastery = Math.round(
    (masteryLevels.reduce((sum, m) => sum + (m.level / m.maxLevel), 0) / masteryLevels.length) * 100
  );

  return (
    <Card className="border-2 border-amber-600/20">
      <CardHeader className="bg-amber-50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-600" />
              Your Mastery Progress
            </CardTitle>
            <CardDescription>
              Track your learning journey and skill development
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-amber-100 border-amber-600 text-amber-900 px-4 py-2">
            {overallMastery}% Overall Mastery
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Practices</p>
                <p className="text-2xl mt-1">{totalPractices}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl mt-1">{currentStreak} days</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Topics Mastered</p>
                <p className="text-2xl mt-1">
                  {masteryLevels.filter(m => m.level === m.maxLevel).length}/{masteryLevels.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mastery Levels by Topic */}
        <div className="space-y-4">
          <h4 className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-600" />
            Skill Breakdown
          </h4>
          
          {masteryLevels.map((mastery, index) => {
            const percentage = (mastery.level / mastery.maxLevel) * 100;
            const isMastered = mastery.level === mastery.maxLevel;
            
            return (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  isMastered 
                    ? 'bg-green-50 border-green-600/30' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h5>{mastery.topic}</h5>
                      {isMastered && (
                        <Badge variant="outline" className="bg-green-100 border-green-600">
                          ✓ Mastered
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Level {mastery.level} of {mastery.maxLevel} • {mastery.practices} practices • Last practiced: {mastery.lastPracticed}
                    </p>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    {Math.round(percentage)}%
                  </Badge>
                </div>
                
                <Progress value={percentage} className="h-3" />
                
                {!isMastered && (
                  <p className="text-sm text-muted-foreground mt-2">
                    💡 Practice {mastery.maxLevel - mastery.level} more time{mastery.maxLevel - mastery.level > 1 ? 's' : ''} to master this topic
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Encouragement Message */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
          <p className="text-center">
            {overallMastery >= 80 
              ? "🎉 Excellent progress! You're becoming a coding expert!"
              : overallMastery >= 50
              ? "🌟 Great work! Keep practicing to strengthen your skills!"
              : "💪 You're on the right path! Consistent practice leads to mastery!"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
