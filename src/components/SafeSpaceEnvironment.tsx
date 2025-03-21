
import React, { useState } from 'react';
import { Send, Moon, Sun, Waves, Wind, CloudRain } from 'lucide-react';
import { cn } from '@/lib/utils';

const environments = [
  { id: 'forest', name: 'Forest Retreat', icon: <Wind className="h-5 w-5" />, description: 'Calming forest sounds with gentle rustling leaves' },
  { id: 'beach', name: 'Beach Serenity', icon: <Waves className="h-5 w-5" />, description: 'Soothing ocean waves and distant seagulls' },
  { id: 'night', name: 'Night Sky', icon: <Moon className="h-5 w-5" />, description: 'Quiet night atmosphere with cricket sounds' },
  { id: 'morning', name: 'Morning Meadow', icon: <Sun className="h-5 w-5" />, description: 'Bright morning with birds chirping' },
  { id: 'rain', name: 'Gentle Rain', icon: <CloudRain className="h-5 w-5" />, description: 'Soft rainfall on a window' },
];

const messages = [
  { sender: 'ai', text: "Welcome to your safe space. How are you feeling today?" },
  { sender: 'user', text: "I've been feeling a bit overwhelmed lately." },
  { sender: 'ai', text: "I understand. It's normal to feel overwhelmed sometimes. Would you like to talk about what's been on your mind, or would you prefer to try a breathing exercise first?" },
];

const SafeSpaceEnvironment = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState(environments[0]);
  const [chatMessages, setChatMessages] = useState(messages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = { sender: 'user', text: inputMessage };
    setChatMessages([...chatMessages, newMessage]);
    setInputMessage('');
    
    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai',
        text: "I hear you. It sounds like you're going through a challenging time. Remember that your emotions are valid, and it's okay to take things one step at a time. What specific aspects feel overwhelming right now?"
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Environment Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Choose Your Environment</h3>
        <div className="flex overflow-x-auto pb-2 gap-3 hide-scrollbar">
          {environments.map((env) => (
            <button
              key={env.id}
              className={cn(
                "flex-shrink-0 px-4 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 border",
                currentEnvironment.id === env.id
                  ? "bg-mind-100 border-mind-300"
                  : "bg-white hover:bg-mind-50 border-mind-100"
              )}
              onClick={() => setCurrentEnvironment(env)}
            >
              <div className={cn(
                "p-2 rounded-full",
                currentEnvironment.id === env.id ? "bg-mind-500 text-white" : "bg-mind-100 text-mind-700"
              )}>
                {env.icon}
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{env.name}</div>
                <div className="text-xs text-muted-foreground">{env.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Safe Space Visualization */}
      <div className="glass-card p-4 mb-6 relative overflow-hidden h-[200px] sm:h-[300px]">
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          currentEnvironment.id === 'forest' && "bg-[url('https://images.unsplash.com/photo-1587524309026-b1a8f847eed6?q=80&w=2940')] bg-cover bg-center",
          currentEnvironment.id === 'beach' && "bg-[url('https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2942')] bg-cover bg-center",
          currentEnvironment.id === 'night' && "bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=3165')] bg-cover bg-center",
          currentEnvironment.id === 'morning' && "bg-[url('https://images.unsplash.com/photo-1535742061772-be1737f842d9?q=80&w=2880')] bg-cover bg-center",
          currentEnvironment.id === 'rain' && "bg-[url('https://images.unsplash.com/photo-1574440652341-af3304e6f132?q=80&w=2991')] bg-cover bg-center",
        )} />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-mind-950/20" />
        
        <div className="relative z-10 text-white text-center flex flex-col items-center justify-center h-full p-4">
          <h3 className="text-2xl font-bold mb-2">{currentEnvironment.name}</h3>
          <p className="max-w-md text-white/90">{currentEnvironment.description}</p>
        </div>
      </div>
      
      {/* Chat Interface */}
      <div className="flex-1 glass-card overflow-hidden flex flex-col">
        <div className="p-4 border-b border-mind-100">
          <h3 className="font-medium">Conversation with Your Digital Twin</h3>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.map((message, index) => (
            <div 
              key={index}
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.sender === 'ai' 
                  ? "bg-mind-50 border border-mind-100 self-start" 
                  : "bg-mind-500 text-white self-end ml-auto"
              )}
            >
              {message.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="bg-mind-50 border border-mind-100 self-start p-3 rounded-lg max-w-[80%]">
              <div className="flex gap-1">
                <div className="h-2 w-2 bg-mind-300 rounded-full animate-pulse" />
                <div className="h-2 w-2 bg-mind-400 rounded-full animate-pulse animation-delay-300" />
                <div className="h-2 w-2 bg-mind-500 rounded-full animate-pulse animation-delay-700" />
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-mind-100">
          <div className="flex gap-2">
            <textarea
              className="flex-1 border border-mind-200 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-mind-500 min-h-[60px] max-h-[120px] resize-none"
              placeholder="Type your message here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-mind-500 hover:bg-mind-600 text-white rounded-lg p-3 flex items-center justify-center button-hover-effect"
              onClick={handleSendMessage}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSpaceEnvironment;
