
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center glow-text mb-16">
          Featured Projects
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`glass-panel px-6 py-3 rounded-lg transition-all duration-300 font-inter font-medium ${
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
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-panel p-8 neon-border hover-glow animate-slide-up group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center group-hover:from-crystal-blue/10 group-hover:to-neon-purple/10 transition-all duration-300">
                <div className="text-4xl text-crystal-blue group-hover:scale-110 transition-transform">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-crystal-blue group-hover:glow-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-glow-white/80 font-inter leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-panel px-3 py-1 text-sm border-electric-cyan/30 text-electric-cyan rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    className="bg-gradient-to-r from-crystal-blue/20 to-electric-cyan/20 text-crystal-blue border-crystal-blue/30 hover:from-crystal-blue/30 hover:to-electric-cyan/30"
                    variant="outline"
                  >
                    Live Demo
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-neon-purple/20 to-purple-600/20 text-neon-purple border-neon-purple/30 hover:from-neon-purple/30 hover:to-purple-600/30"
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
