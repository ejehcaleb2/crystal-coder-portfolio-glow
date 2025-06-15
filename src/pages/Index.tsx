
import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-black relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <CursorGlow />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
