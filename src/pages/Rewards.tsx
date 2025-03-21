
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import RewardCard from '@/components/RewardCard';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Sample reward data
const rewardData = [
  {
    id: 1,
    title: 'First Conversation',
    description: 'Complete your first therapeutic conversation with your digital twin.',
    type: 'achievement',
    progress: 100,
    completedAt: 'May 15, 2023',
    to: '/safe-space',
    isLocked: false,
  },
  {
    id: 2,
    title: '7-Day Streak',
    description: 'Log in and engage with your digital twin for 7 consecutive days.',
    type: 'streak',
    progress: 71,
    completedAt: '',
    to: '/safe-space',
    isLocked: false,
  },
  {
    id: 3,
    title: 'Mindfulness Master',
    description: 'Complete 10 mindfulness sessions in your safe space environment.',
    type: 'milestone',
    progress: 30,
    completedAt: '',
    to: '/safe-space',
    isLocked: false,
  },
  {
    id: 4,
    title: 'Emotional Insight',
    description: 'Receive your first personalized emotional insight report from your digital twin.',
    type: 'insight',
    progress: 100,
    completedAt: 'May 20, 2023',
    to: '/safe-space',
    isLocked: false,
  },
  {
    id: 5,
    title: 'Community Contributor',
    description: 'Share an anonymized insight to help improve the collective mental health database.',
    type: 'community',
    progress: 0,
    completedAt: '',
    to: '',
    isLocked: true,
  },
  {
    id: 6,
    title: '30-Day Journey',
    description: 'Complete a full month of regular sessions with your digital twin.',
    type: 'milestone',
    progress: 10,
    completedAt: '',
    to: '/safe-space',
    isLocked: false,
  },
  {
    id: 7,
    title: 'Anxiety Management',
    description: 'Master three different anxiety management techniques with your digital twin.',
    type: 'achievement',
    progress: 66,
    completedAt: '',
    to: '/safe-space',
    isLocked: false,
  },
  {
    id: 8,
    title: 'Balance Seeker',
    description: 'Explore all available safe space environments for different therapeutic needs.',
    type: 'achievement',
    progress: 40,
    completedAt: '',
    to: '/safe-space',
    isLocked: false,
  },
];

const Rewards = () => {
  const [filterType, setFilterType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredRewards = rewardData.filter(reward => {
    // Apply type filter
    if (filterType && reward.type !== filterType) return false;
    
    // Apply search query
    if (searchQuery && !reward.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !reward.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const completedRewards = filteredRewards.filter(r => r.completedAt).length;
  const totalRewards = filteredRewards.length;
  const completionPercentage = Math.round((completedRewards / totalRewards) * 100) || 0;
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back navigation */}
          <Link to="/safe-space" className="inline-flex items-center gap-2 text-mind-600 hover:text-mind-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Safe Space
          </Link>
          
          {/* Page header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-mind-50 border border-mind-100 shadow-softer">
              <span className="text-mind-700 text-sm font-medium">Engagement System</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Rewards Journey</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Track your progress, earn achievements, and unlock new features as you continue your mental wellbeing journey.
            </p>
          </div>
          
          {/* Progress overview */}
          <div className="glass-card p-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Rewards Progress</h3>
                <p className="text-muted-foreground mb-4">You've completed {completedRewards} out of {totalRewards} available rewards.</p>
                
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden max-w-md">
                    <div 
                      className="h-full bg-mind-500 rounded-full" 
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{completionPercentage}%</span>
                </div>
              </div>
              
              <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                <button className="px-4 py-2 bg-white border border-mind-200 rounded-lg shadow-softer hover:bg-mind-50 transition-colors button-hover-effect">
                  View Achievements
                </button>
                <button className="px-4 py-2 bg-mind-500 text-white rounded-lg shadow-md hover:bg-mind-600 transition-colors button-hover-effect">
                  Claim Rewards
                </button>
              </div>
            </div>
          </div>
          
          {/* Filters and search */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <button 
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-colors",
                  filterType === null
                    ? "bg-mind-500 text-white"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => setFilterType(null)}
              >
                All
              </button>
              
              <button 
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-colors",
                  filterType === 'achievement'
                    ? "bg-mind-500 text-white"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => setFilterType('achievement')}
              >
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  Achievements
                </span>
              </button>
              
              <button 
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-colors",
                  filterType === 'streak'
                    ? "bg-mind-500 text-white"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => setFilterType('streak')}
              >
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  Streaks
                </span>
              </button>
              
              <button 
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-colors",
                  filterType === 'milestone'
                    ? "bg-mind-500 text-white"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => setFilterType('milestone')}
              >
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Milestones
                </span>
              </button>
              
              <button 
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-colors",
                  filterType === 'insight'
                    ? "bg-mind-500 text-white"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => setFilterType('insight')}
              >
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Insights
                </span>
              </button>
              
              <button 
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-colors",
                  filterType === 'community'
                    ? "bg-mind-500 text-white"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => setFilterType('community')}
              >
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  Community
                </span>
              </button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search rewards"
                className="pl-10 pr-4 py-2 border border-mind-200 rounded-lg w-full max-w-xs focus:outline-none focus:ring-1 focus:ring-mind-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Rewards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRewards.length > 0 ? (
              filteredRewards.map((reward) => (
                <RewardCard
                  key={reward.id}
                  title={reward.title}
                  description={reward.description}
                  type={reward.type as any}
                  progress={reward.progress}
                  completedAt={reward.completedAt}
                  to={reward.to}
                  isLocked={reward.isLocked}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No rewards match your search criteria.</p>
                <button 
                  className="mt-4 px-4 py-2 bg-mind-50 text-mind-600 rounded-lg hover:bg-mind-100 transition-colors"
                  onClick={() => {
                    setFilterType(null);
                    setSearchQuery('');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
