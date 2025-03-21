
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Brain, ShieldCheck, Sparkles, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-mind-600" />,
    title: 'Digital Twin Psychology',
    description: 'Your AI avatar learns and adapts to your unique psychological profile, creating truly personalized therapeutic interactions.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-mind-600" />,
    title: 'Blockchain Security',
    description: 'All your mental health data is securely stored using blockchain technology, ensuring privacy and data integrity.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-mind-600" />,
    title: 'Immersive Safe Spaces',
    description: 'Escape to virtual environments specifically designed to promote calm, focus, and emotional processing.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-mind-600" />,
    title: 'Progress Analytics',
    description: 'Track your mental wellbeing journey with detailed analytics and insights that help measure your growth.'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-mind-50 blur-[120px] opacity-70" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-mind-50 border border-mind-100 shadow-softer">
              <span className="text-mind-700 text-sm font-medium">Advanced Features</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">How Our Platform Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining cutting-edge AI, blockchain technology, and psychological research to create a new paradigm in mental health care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 flex flex-col items-start"
              >
                <div className="p-3 bg-mind-50 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 px-6 bg-mind-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-mind-100 shadow-softer">
              <span className="text-mind-700 text-sm font-medium">User Experiences</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who have transformed their mental wellbeing using our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-softer border border-mind-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-mind-200 flex items-center justify-center text-mind-600 font-semibold text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">Anxiety Management</div>
                </div>
              </div>
              <p className="text-gray-700">
                "The personalized safe spaces have been a game-changer for my anxiety. Having a digital twin that understands my triggers has helped me develop effective coping strategies."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-softer border border-mind-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-mind-200 flex items-center justify-center text-mind-600 font-semibold text-lg">
                  MS
                </div>
                <div className="ml-4">
                  <div className="font-medium">Michael Smith</div>
                  <div className="text-sm text-muted-foreground">Depression Recovery</div>
                </div>
              </div>
              <p className="text-gray-700">
                "The consistency of having my avatar available 24/7 has been crucial during my depression recovery. The blockchain rewards actually motivated me to maintain my therapy routines."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-softer border border-mind-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-mind-200 flex items-center justify-center text-mind-600 font-semibold text-lg">
                  AL
                </div>
                <div className="ml-4">
                  <div className="font-medium">Aisha Lee</div>
                  <div className="text-sm text-muted-foreground">Stress Reduction</div>
                </div>
              </div>
              <p className="text-gray-700">
                "I was skeptical about AI therapy, but the personalization is impressive. The immersive environments help me decompress after stressful days better than any technique I've tried before."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Your Wellbeing Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward improved mental health with your personalized digital twin and virtual safe spaces.
          </p>
          <a 
            href="/avatar-creation" 
            className="inline-block bg-mind-500 hover:bg-mind-600 text-white px-8 py-4 rounded-lg font-medium shadow-md button-hover-effect"
          >
            Create Your Avatar
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-mind-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-mind-800 font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">Mindscape</span>
            </div>
            <p className="text-mind-300 text-sm">
              Redefining mental health through AI and blockchain technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-mind-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-mind-800 text-center text-mind-400 text-sm">
          &copy; {new Date().getFullYear()} Mindscape Digital Twin Technology. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
