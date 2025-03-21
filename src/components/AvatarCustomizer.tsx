
import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, RefreshCw, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  { id: 'face', name: 'Face Shape', options: ['Round', 'Oval', 'Square', 'Heart', 'Diamond'] },
  { id: 'skin', name: 'Skin Tone', options: ['Fair', 'Light', 'Medium', 'Tan', 'Deep'] },
  { id: 'eyes', name: 'Eyes', options: ['Round', 'Almond', 'Hooded', 'Wide', 'Downturned'] },
  { id: 'hair', name: 'Hair Style', options: ['Short', 'Medium', 'Long', 'Curly', 'Wavy', 'Straight'] },
  { id: 'clothes', name: 'Outfit', options: ['Casual', 'Professional', 'Athletic', 'Formal', 'Relaxed'] },
  { id: 'accessories', name: 'Accessories', options: ['None', 'Glasses', 'Earrings', 'Necklace', 'Hat'] },
];

const AvatarCustomizer = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [selections, setSelections] = useState<Record<string, string>>({
    face: 'Oval',
    skin: 'Medium',
    eyes: 'Round',
    hair: 'Medium',
    clothes: 'Casual',
    accessories: 'None',
  });
  const [isSaving, setIsSaving] = useState(false);

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];
  
  const handleOptionSelect = (option: string) => {
    setSelections(prev => ({
      ...prev,
      [activeFeature]: option,
    }));
  };

  const handleNextFeature = () => {
    const currentIndex = features.findIndex(f => f.id === activeFeature);
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveFeature(features[nextIndex].id);
  };

  const handlePrevFeature = () => {
    const currentIndex = features.findIndex(f => f.id === activeFeature);
    const prevIndex = currentIndex === 0 ? features.length - 1 : currentIndex - 1;
    setActiveFeature(features[prevIndex].id);
  };

  const handleRandomize = () => {
    const randomSelections = features.reduce((acc, feature) => {
      const randomOption = feature.options[Math.floor(Math.random() * feature.options.length)];
      return { ...acc, [feature.id]: randomOption };
    }, {});
    
    setSelections(randomSelections);
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      // Here you would typically save the avatar configuration to a backend
      console.log('Avatar saved:', selections);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
      {/* Avatar Preview */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="glass-card p-6 w-full max-w-md aspect-square flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-radial from-mind-300 to-mind-500 flex items-center justify-center">
                <span className="text-white text-8xl font-light">Ai</span>
              </div>
              <div className="mt-6 text-lg font-semibold text-mind-700">Your Digital Twin</div>
              <div className="text-sm text-muted-foreground mt-1">{selections.face} face, {selections.hair} hair</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex gap-4">
          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-mind-200 shadow-softer hover:bg-mind-50 transition-colors button-hover-effect"
            onClick={handleRandomize}
          >
            <RefreshCw className="h-4 w-4" />
            Randomize
          </button>
          
          <button 
            className={cn(
              "flex items-center gap-2 px-6 py-2 rounded-lg bg-mind-500 text-white shadow-md hover:bg-mind-600 transition-colors button-hover-effect",
              isSaving && "opacity-80"
            )}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Avatar
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Customization Controls */}
      <div className="w-full lg:w-1/2">
        <div className="glass-card p-6 w-full">
          <div className="flex items-center justify-between mb-6">
            <button 
              className="p-2 rounded-full hover:bg-mind-50"
              onClick={handlePrevFeature}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl font-semibold">{currentFeature.name}</h3>
            
            <button 
              className="p-2 rounded-full hover:bg-mind-50"
              onClick={handleNextFeature}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {currentFeature.options.map((option) => (
              <button
                key={option}
                className={cn(
                  "p-3 rounded-lg text-center transition-all duration-200 flex items-center justify-between",
                  selections[activeFeature] === option
                    ? "bg-mind-100 text-mind-800 font-medium border-2 border-mind-300"
                    : "bg-white hover:bg-mind-50 border border-mind-100"
                )}
                onClick={() => handleOptionSelect(option)}
              >
                <span>{option}</span>
                {selections[activeFeature] === option && (
                  <Check className="h-4 w-4 text-mind-500" />
                )}
              </button>
            ))}
          </div>
          
          <div className="mt-8">
            <h4 className="font-medium mb-3">Feature Navigation</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm transition-colors",
                    activeFeature === feature.id
                      ? "bg-mind-500 text-white"
                      : "bg-white hover:bg-mind-50 border border-mind-100"
                  )}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {feature.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCustomizer;
