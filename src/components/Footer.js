import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const LinkedInIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a3a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-[#2a2a3a]">
          <div className="flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-3 w-fit">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                GD
              </div>
              <span className="text-white font-semibold text-lg">Gayangi Devindi</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer and IoT Engineer based in Sri Lanka. Building meaningful digital experiences across web, mobile, and hardware.
            </p>
            <div className="flex gap-3 mt-1">
              <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg border border-[#2a2a3a] flex items-center justify-center text-slate-500 hover:text-orange-400 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200">
                <GitHubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-[#2a2a3a] flex items-center justify-center text-slate-500 hover:text-orange-400 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200">
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs text-orange-400 tracking-widest uppercase mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              <li><a href="#home" className="group flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors duration-200"><span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-300 overflow-hidden" />Home</a></li>
              <li><a href="#about" className="group flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors duration-200"><span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-300 overflow-hidden" />About</a></li>
              <li><a href="#projects" className="group flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors duration-200"><span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-300 overflow-hidden" />Projects</a></li>
              <li><a href="#contact" className="group flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors duration-200"><span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-300 overflow-hidden" />Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs text-orange-400 tracking-widest uppercase mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li><a href="mailto:gyangidevindi@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-white text-sm transition-colors duration-200"><Mail size={16} className="text-orange-400" />gyangidevindi@gmail.com</a></li>
              <li><a href="tel:0760689429" className="flex items-center gap-3 text-slate-500 hover:text-white text-sm transition-colors duration-200"><Phone size={16} className="text-orange-400" />0760689429</a></li>
              <li className="flex items-center gap-3 text-slate-500 text-sm"><MapPin size={16} className="text-orange-400" />Matara, Sri Lanka</li>
            </ul>

            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-5 py-2.5 rounded-xl transition-all duration-200">
                Get In Touch
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6 text-slate-600 text-xs">
          <p>2025 Gayangi Devindi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React and Tailwind CSS
            <span className="text-orange-500/60">·</span>
            Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}