
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-glow-white/60 font-inter text-sm">
              Copyright © 2025 Caleb Ejeh
            </p>
            <p className="text-glow-white/60 font-inter text-xs mt-1">
              Built with ❤️ using React, Tailwind, and Vercel
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="glass-panel p-3 neon-border hover-glow rounded-full group animate-float"
          >
            <div className="text-crystal-blue group-hover:text-electric-cyan transition-colors text-lg">
              ↑
            </div>
          </button>
        </div>

        {/* Decorative Line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-crystal-blue/30 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
