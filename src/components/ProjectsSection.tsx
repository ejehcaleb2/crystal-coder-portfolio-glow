
import React from 'react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'HomeEase',
      description: 'Housing affordability platform for Nigeria - Making quality housing accessible through innovative financial solutions and property matching.',
      tech: ['Node.js', 'React', 'MongoDB', 'Express'],
      category: 'housing',
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Crypto Dashboard',
      description: 'Live cryptocurrency tracker with real-time charts, portfolio management, and advanced analytics with pagination.',
      tech: ['React', 'Chart.js', 'API Integration', 'Tailwind'],
      category: 'finance',
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Delivery App',
      description: 'Multi-role application supporting vendor management, rider tracking, and customer ordering with real-time updates.',
      tech: ['Node.js', 'React', 'Socket.io', 'PostgreSQL'],
      category: 'delivery',
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Fintech Landing Page',
      description: 'Responsive landing page for digital finance platform, designed in Figma and built with modern web standards.',
      tech: ['React', 'Tailwind CSS', 'Figma', 'Framer Motion'],
      category: 'finance',
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'housing', label: 'Housing' },
    { id: 'finance', label: 'Finance' },
    { id: 'delivery', label: 'Delivery' }
  ];

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center glow-text mb-12">
          Featured Projects
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`glass-panel px-4 py-2 rounded-lg transition-all duration-300 font-inter font-medium text-sm ${
                filter === category.id
                  ? 'neon-border bg-neon-purple/20 text-neon-purple'
                  : 'border-white/20 text-glow-white/80 hover:border-neon-purple/50 hover:text-neon-purple'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-panel p-6 neon-border hover-glow animate-slide-up group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center group-hover:from-crystal-blue/10 group-hover:to-neon-purple/10 transition-all duration-300">
                <div className="text-3xl text-crystal-blue group-hover:scale-110 transition-transform">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-orbitron font-bold text-crystal-blue group-hover:glow-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-glow-white/80 font-inter leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-panel px-2 py-1 text-xs border-electric-cyan/30 text-electric-cyan rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3">
                  <Button
                    className="bg-gradient-to-r from-crystal-blue/20 to-electric-cyan/20 text-crystal-blue border-crystal-blue/30 hover:from-crystal-blue/30 hover:to-electric-cyan/30 text-sm px-4 py-2"
                    variant="outline"
                  >
                    Live Demo
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-neon-purple/20 to-purple-600/20 text-neon-purple border-neon-purple/30 hover:from-neon-purple/30 hover:to-purple-600/30 text-sm px-4 py-2"
                    variant="outline"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
