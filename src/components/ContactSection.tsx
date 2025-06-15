
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/ejehcaleb2',
      color: 'text-crystal-blue'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: 'text-electric-cyan'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:ejehcalebthefirst@gmail.com',
      color: 'text-neon-purple'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center glow-text mb-16">
          Send Transmission
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-panel p-8 neon-border hover-glow">
            <h3 className="text-2xl font-orbitron font-bold text-crystal-blue mb-6">
              Initiate Contact Protocol
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-panel neon-border bg-transparent text-glow-white placeholder:text-glow-white/50 border-crystal-blue/30 focus:border-crystal-blue"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-panel neon-border bg-transparent text-glow-white placeholder:text-glow-white/50 border-crystal-blue/30 focus:border-crystal-blue"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="glass-panel neon-border bg-transparent text-glow-white placeholder:text-glow-white/50 border-crystal-blue/30 focus:border-crystal-blue resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full glass-panel hover-glow neon-border bg-gradient-to-r from-crystal-blue/20 to-electric-cyan/20 text-crystal-blue font-semibold py-3 animate-glow-pulse"
              >
                🚀 Launch Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass-panel p-8 neon-border hover-glow animate-float">
              <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-6">
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                <p className="text-glow-white/80 font-inter">
                  Ready to collaborate on your next project? Let's build something amazing together.
                </p>
                
                <div className="flex flex-col space-y-2">
                  <span className="text-electric-cyan font-mono">
                    📍 Lagos, Nigeria
                  </span>
                  <span className="text-electric-cyan font-mono">
                    🎓 Economics Student
                  </span>
                  <span className="text-electric-cyan font-mono">
                    💻 Full-Stack Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-panel p-8 neon-border hover-glow">
              <h4 className="text-xl font-orbitron font-bold text-crystal-blue mb-6">
                Social Networks
              </h4>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-3 glass-panel neon-border hover-glow transition-all duration-300 group animate-slide-up ${link.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span className="font-inter font-medium">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
