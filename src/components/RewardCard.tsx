
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Calendar, Clock3, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RewardCardProps {
  title: string;
  description: string;
  type: 'achievement' | 'streak' | 'community' | 'insight' | 'milestone';
  progress?: number;
  completedAt?: string;
  to?: string;
  isLocked?: boolean;
}

const RewardCard: React.FC<RewardCardProps> = ({
  title,
  description,
  type,
  progress = 0,
  completedAt,
  to,
  isLocked = false,
}) => {
  const TypeIcon = () => {
    switch (type) {
      case 'achievement':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 'streak':
        return <Calendar className="h-5 w-5 text-orange-500" />;
      case 'community':
        return <Users className="h-5 w-5 text-purple-500" />;
      case 'insight':
        return <BarChart className="h-5 w-5 text-blue-500" />;
      case 'milestone':
        return <Clock3 className="h-5 w-5 text-green-500" />;
      default:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
    }
  };
  
  const CardContent = () => (
    <div className={cn(
      "p-5 rounded-xl border transition-all duration-200 h-full flex flex-col",
      isLocked 
        ? "bg-gray-50 border-gray-200 opacity-70" 
        : completedAt 
          ? "bg-white border-mind-200 shadow-softer" 
          : "bg-white border-mind-200 shadow-softer"
    )}>
      {/* Card header */}
      <div className="flex justify-between items-start mb-3">
        <div className={cn(
          "p-2 rounded-lg",
          type === 'achievement' && "bg-yellow-50",
          type === 'streak' && "bg-orange-50",
          type === 'community' && "bg-purple-50",
          type === 'insight' && "bg-blue-50",
          type === 'milestone' && "bg-green-50",
        )}>
          <TypeIcon />
        </div>
        
        {isLocked && (
          <div className="bg-gray-100 text-gray-500 text-xs font-medium py-1 px-2 rounded">
            Locked
          </div>
        )}
        
        {completedAt && !isLocked && (
          <div className="bg-green-50 text-green-600 text-xs font-medium py-1 px-2 rounded">
            Completed
          </div>
        )}
      </div>
      
      {/* Card content */}
      <h3 className={cn(
        "font-semibold text-lg mb-2",
        isLocked && "text-gray-500"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-sm mb-4 flex-grow",
        isLocked ? "text-gray-400" : "text-gray-600"
      )}>
        {description}
      </p>
      
      {/* Progress indicator */}
      {!completedAt && !isLocked && (
        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-mind-700 font-medium">{progress}% Complete</span>
            <span className="text-gray-500">100%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-mind-500 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      
      {/* Completion time */}
      {completedAt && !isLocked && (
        <div className="mt-auto text-xs text-gray-500">
          Completed on {completedAt}
        </div>
      )}
    </div>
  );
  
  return to && !isLocked ? (
    <Link 
      to={to} 
      className="block h-full transition-transform hover:-translate-y-1"
    >
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};

export default RewardCard;
