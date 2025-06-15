
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', category: 'language', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', category: 'backend', color: 'from-green-400 to-green-600' },
    { name: 'Express.js', category: 'backend', color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', category: 'database', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', category: 'database', color: 'from-blue-400 to-blue-600' },
    { name: 'React.js', category: 'frontend', color: 'from-blue-300 to-blue-500' },
    { name: 'Tailwind CSS', category: 'frontend', color: 'from-cyan-400 to-cyan-600' },
    { name: 'HTML5', category: 'frontend', color: 'from-orange-400 to-orange-600' },
    { name: 'CSS3', category: 'frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Git', category: 'tools', color: 'from-red-400 to-red-600' },
    { name: 'GitHub', category: 'tools', color: 'from-purple-400 to-purple-600' },
    { name: 'Vercel', category: 'tools', color: 'from-black to-gray-600' },
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredTech = filter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' }
  ];

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center glow-text mb-16">
          Tech Stack
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`glass-panel px-6 py-3 rounded-lg transition-all duration-300 font-inter font-medium ${
                filter === category.id
                  ? 'neon-border bg-crystal-blue/20 text-crystal-blue'
                  : 'border-white/20 text-glow-white/80 hover:border-crystal-blue/50 hover:text-crystal-blue'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-panel p-6 neon-border hover-glow text-center group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                {tech.name.charAt(0)}
              </div>
              <h3 className="text-glow-white font-semibold font-inter group-hover:text-crystal-blue transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
