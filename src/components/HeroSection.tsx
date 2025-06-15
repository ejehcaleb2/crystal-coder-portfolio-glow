
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I build thoughtful digital solutions with backend precision and frontend flair.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 space-y-8 px-4">
        {/* Floating Avatar */}
        <div className="relative mx-auto w-48 h-48 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-crystal-blue to-neon-purple animate-glow-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-cyber-black flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-crystal-blue">
              CE
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold glow-text bg-gradient-to-r from-crystal-blue to-electric-cyan bg-clip-text text-transparent animate-slide-up">
            Hi, I'm Caleb Ejeh
          </h1>
          
          {/* Typing Animation */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-glow-white/80 font-inter max-w-4xl">
              {displayText}
              <span className="animate-blink border-r-2 border-crystal-blue ml-1"></span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button
            onClick={() => scrollToSection('projects')}
            className="glass-panel hover-glow neon-border bg-gradient-to-r from-crystal-blue/20 to-electric-cyan/20 text-crystal-blue font-semibold px-8 py-4 text-lg animate-float"
            style={{ animationDelay: '0s' }}
          >
            🚀 View Projects
          </Button>
          
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="glass-panel hover-glow border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 px-8 py-4 text-lg animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            📫 Contact Me
          </Button>
        </div>

        {/* Developer Mode Easter Egg */}
        <div className="pt-8">
          <button className="text-xs text-white/40 hover:text-crystal-blue transition-colors font-mono">
            [ Activate Developer Mode ]
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-crystal-blue rounded-full animate-particle-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-neon-purple rounded-full animate-particle-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-electric-cyan rounded-full animate-particle-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;
