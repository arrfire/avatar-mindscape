
import React from 'react';
import Navbar from '@/components/Navbar';
import SafeSpaceEnvironment from '@/components/SafeSpaceEnvironment';
import { ArrowLeft, BookOpen, Calendar, Clock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const SafeSpace = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back navigation */}
          <Link to="/avatar-creation" className="inline-flex items-center gap-2 text-mind-600 hover:text-mind-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Avatar Creation
          </Link>
          
          {/* Page header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-mind-50 border border-mind-100 shadow-softer">
              <span className="text-mind-700 text-sm font-medium">Your Therapeutic Space</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Virtual Safe Space</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This is your personalized environment for therapeutic interactions. Customize the ambiance and engage with your digital twin in meaningful conversations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content - safe space environment */}
            <div className="lg:col-span-2">
              <SafeSpaceEnvironment />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Session info */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Current Session</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-mind-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Session Duration</div>
                      <div className="text-sm text-muted-foreground">24 minutes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-mind-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Session Frequency</div>
                      <div className="text-sm text-muted-foreground">3 this week</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-mind-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Conversation Topic</div>
                      <div className="text-sm text-muted-foreground">Stress Management</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-mind-100">
                  <button className="w-full px-4 py-2 bg-mind-500 hover:bg-mind-600 text-white rounded-lg flex items-center justify-center gap-2 button-hover-effect">
                    <Download className="h-4 w-4" />
                    Save Session Insights
                  </button>
                </div>
              </div>
              
              {/* Mood tracker */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Mood Tracker</h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Anxiety</span>
                      <span className="text-muted-foreground">Low</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-mind-500 rounded-full" style={{ width: '30%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Stress</span>
                      <span className="text-muted-foreground">Moderate</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-mind-500 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Focus</span>
                      <span className="text-muted-foreground">High</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-mind-500 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Overall Wellbeing</span>
                      <span className="text-muted-foreground">Improving</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-mind-500 rounded-full" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Techniques */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Recommended Techniques</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-mind-50 rounded-lg border border-mind-100">
                    <div className="font-medium">4-7-8 Breathing</div>
                    <div className="text-sm text-muted-foreground">Reduces anxiety quickly</div>
                  </div>
                  
                  <div className="p-3 bg-mind-50 rounded-lg border border-mind-100">
                    <div className="font-medium">Progressive Relaxation</div>
                    <div className="text-sm text-muted-foreground">Relieves physical tension</div>
                  </div>
                  
                  <div className="p-3 bg-mind-50 rounded-lg border border-mind-100">
                    <div className="font-medium">Thought Labeling</div>
                    <div className="text-sm text-muted-foreground">Manages intrusive thoughts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="mt-12 flex justify-between">
            <Link 
              to="/avatar-creation"
              className="px-6 py-3 border border-mind-200 rounded-lg text-mind-800 hover:bg-mind-50 button-hover-effect"
            >
              Back to Avatar
            </Link>
            
            <Link 
              to="/rewards"
              className="px-8 py-3 bg-mind-500 hover:bg-mind-600 text-white rounded-lg shadow-md button-hover-effect"
            >
              View Rewards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSpace;
