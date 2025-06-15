
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center glow-text mb-12">
          About Caleb
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="glass-panel p-6 hover-glow neon-border animate-float">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center max-w-sm mx-auto">
                <div className="text-6xl font-bold text-crystal-blue">CE</div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-4">
            <div className="glass-panel p-6 neon-border hover-glow">
              <p className="text-base text-glow-white/90 leading-relaxed font-inter">
                I'm <span className="text-crystal-blue font-semibold">Caleb Ejeh</span>, a self-taught developer 
                currently studying Economics at the University of Lagos. I founded{' '}
                <span className="text-electric-cyan">HomeEase</span> to fight housing inequality and{' '}
                <span className="text-neon-purple">Statech</span> to empower African youth in tech.
              </p>
              
              <p className="text-base text-glow-white/90 leading-relaxed font-inter mt-3">
                I use code to solve real-world problems with clarity and compassion, focusing on projects 
                that make a meaningful impact in housing, logistics, and finance.
              </p>
            </div>

            {/* Key Traits */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: '🎯', trait: 'Mission-driven', description: 'Building solutions that matter' },
                { icon: '⚡', trait: 'Backend-leaning Full-stack', description: 'Node.js expertise with React finesse' },
                { icon: '🌍', trait: 'Real-world Impact', description: 'Housing, logistics, and finance solutions' }
              ].map((item, index) => (
                <div
                  key={item.trait}
                  className="glass-panel p-3 neon-border hover-glow flex items-center space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="text-crystal-blue font-semibold text-sm">{item.trait}</h3>
                    <p className="text-xs text-glow-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
