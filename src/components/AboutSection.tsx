
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center glow-text mb-16">
          About Caleb
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="glass-panel p-8 hover-glow neon-border animate-float">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-8xl font-bold text-crystal-blue">CE</div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="glass-panel p-8 neon-border hover-glow">
              <p className="text-lg text-glow-white/90 leading-relaxed font-inter">
                I'm <span className="text-crystal-blue font-semibold">Caleb Ejeh</span>, a self-taught developer 
                currently studying Economics at the University of Lagos. I founded{' '}
                <span className="text-electric-cyan">HomeEase</span> to fight housing inequality and{' '}
                <span className="text-neon-purple">Statech</span> to empower African youth in tech.
              </p>
              
              <p className="text-lg text-glow-white/90 leading-relaxed font-inter mt-4">
                I use code to solve real-world problems with clarity and compassion, focusing on projects 
                that make a meaningful impact in housing, logistics, and finance.
              </p>
            </div>

            {/* Key Traits */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: '🎯', trait: 'Mission-driven', description: 'Building solutions that matter' },
                { icon: '⚡', trait: 'Backend-leaning Full-stack', description: 'Node.js expertise with React finesse' },
                { icon: '🌍', trait: 'Real-world Impact', description: 'Housing, logistics, and finance solutions' }
              ].map((item, index) => (
                <div
                  key={item.trait}
                  className="glass-panel p-4 neon-border hover-glow flex items-center space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-crystal-blue font-semibold">{item.trait}</h3>
                    <p className="text-sm text-glow-white/70">{item.description}</p>
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
