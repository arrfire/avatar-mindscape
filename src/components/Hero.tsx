
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-[400px] w-[400px] rounded-full bg-mind-100/50 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 h-[300px] w-[300px] rounded-full bg-calm-100/50 blur-[80px]" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-soft animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 shadow-soft animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/50 shadow-soft animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-mind-50 border border-mind-100 shadow-softer">
          <span className="text-mind-700 text-sm font-medium">Redefining Mental Health</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          Your <span className="text-gradient">Digital Twin</span> <br />
          For Mental Wellbeing
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
          Experience personalized therapeutic interactions in immersive virtual safe spaces with your digital avatar, powered by AI and secured with blockchain.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up animation-delay-300">
          <Link 
            to="/avatar-creation" 
            className="bg-mind-500 hover:bg-mind-600 text-white px-8 py-4 rounded-lg font-medium shadow-md flex items-center justify-center gap-2 min-w-[180px] button-hover-effect"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <Link 
            to="/safe-space" 
            className="bg-white hover:bg-mind-50 text-mind-800 border border-mind-200 px-8 py-4 rounded-lg font-medium shadow-softer flex items-center justify-center min-w-[180px] button-hover-effect"
          >
            Explore Demo
          </Link>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full animate-fade-up animation-delay-500">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-mind-600 mb-2">89%</div>
          <p className="text-muted-foreground">Users report improved emotional wellbeing</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-mind-600 mb-2">10M+</div>
          <p className="text-muted-foreground">Therapeutic interactions completed</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-mind-600 mb-2">100%</div>
          <p className="text-muted-foreground">Secure blockchain data protection</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
