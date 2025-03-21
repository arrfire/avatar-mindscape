
import React from 'react';
import Navbar from '@/components/Navbar';
import AvatarCustomizer from '@/components/AvatarCustomizer';
import { ArrowLeft, Brain, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AvatarCreation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back navigation */}
          <Link to="/" className="inline-flex items-center gap-2 text-mind-600 hover:text-mind-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          {/* Page header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-mind-50 border border-mind-100 shadow-softer">
              <span className="text-mind-700 text-sm font-medium">Step 1 of 3</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Create Your Digital Twin</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Customize your avatar to reflect your preferences. This digital representation will accompany you throughout your mental wellness journey.
            </p>
          </div>
          
          {/* Avatar customization */}
          <AvatarCustomizer />
          
          {/* Process steps */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-mind-500 text-white flex items-center justify-center font-semibold text-sm shadow-md">
                1
              </div>
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-100 flex items-center justify-center">
                <Brain className="h-6 w-6 text-mind-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Avatar</h3>
              <p className="text-muted-foreground">
                Customize your digital twin to create a visual representation that resonates with your identity.
              </p>
              <div className="mt-4 text-mind-600 text-sm font-medium">Current step</div>
            </div>
            
            <div className="bg-white p-6 border border-dashed border-mind-200 rounded-xl relative opacity-70">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div className="mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personality Assessment</h3>
              <p className="text-muted-foreground">
                Complete a brief assessment to help your digital twin understand your communication preferences.
              </p>
              <div className="mt-4 text-gray-400 text-sm">Coming up next</div>
            </div>
            
            <div className="bg-white p-6 border border-dashed border-mind-200 rounded-xl relative opacity-70">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div className="mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Finalize & Activate</h3>
              <p className="text-muted-foreground">
                Review your choices and activate your digital twin to begin your mental wellbeing journey.
              </p>
              <div className="mt-4 text-gray-400 text-sm">Final step</div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="mt-12 flex justify-between">
            <Link 
              to="/"
              className="px-6 py-3 border border-mind-200 rounded-lg text-mind-800 hover:bg-mind-50 button-hover-effect"
            >
              Cancel
            </Link>
            
            <Link 
              to="/safe-space"
              className="px-8 py-3 bg-mind-500 hover:bg-mind-600 text-white rounded-lg shadow-md button-hover-effect"
            >
              Continue to Safe Space
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCreation;
