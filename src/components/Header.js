import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Mail, ExternalLink, MessageSquare } from 'lucide-react';

function LogoMark({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <radialGradient id="logoMarkGlow" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill="url(#logoMarkGlow)" />
      <polygon points="100,26 166,63 166,137 100,174 34,137 34,63" fill="none" stroke="url(#logoMarkGrad)" strokeWidth="3" strokeLinejoin="round" opacity="0.35" />
      <polygon points="100,26 166,63 100,100" fill="url(#logoMarkGrad)" opacity="0.98" />
      <polygon points="166,63 166,137 100,100" fill="url(#logoMarkGrad)" opacity="0.8" />
      <polygon points="166,137 100,174 100,100" fill="url(#logoMarkGrad)" opacity="0.62" />
      <polygon points="100,174 34,137 100,100" fill="url(#logoMarkGrad)" opacity="0.46" />
      <polygon points="34,137 34,63 100,100" fill="url(#logoMarkGrad)" opacity="0.62" />
      <polygon points="34,63 100,26 100,100" fill="url(#logoMarkGrad)" opacity="0.86" />
      <polygon points="100,26 166,63 100,100 34,63" fill="#fff7ed" opacity="0.14" />
    </svg>
  );
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Achievements' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = Array.from(document.querySelectorAll('main [id]'))
        .filter((element) => navLinks.some((link) => link.id === element.id));

      const offset = 140;
      let current = 'home';

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        if (section.offsetTop <= window.scrollY + offset) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setHireModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#0a0a0f]/60 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-center h-16 md:h-20">
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl blur-md opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative w-9 h-9 bg-gradient-to-br from-[#15151d] to-[#0a0a0f] rounded-xl flex items-center justify-center shadow-inner shadow-white/5 ring-1 ring-orange-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 overflow-hidden">
                  <LogoMark className="w-8 h-8" />
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-white font-semibold text-sm tracking-wide">Gayangi Devindi</span>
                <span className="text-orange-400/90 text-[10px] font-medium tracking-[0.2em] uppercase mt-1">Portfolio</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-lg" />
                    )}
                    <span className="absolute inset-0 bg-white/[0.03] border border-transparent group-hover:border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {isActive && (
                      <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://github.com/gayangidevindi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-white/10 hover:border-orange-500/50 bg-white/[0.02] hover:bg-white/[0.05] px-3.5 py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                GitHub <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <button
                onClick={() => setHireModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-px active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70"
              >
                Hire Me
              </button>
            </div>

            <button
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-orange-500/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                <X size={18} />
              </span>
              <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
                <Menu size={18} />
              </span>
            </button>
          </div>
        </div>

        <ScrollProgress />
      </header>

      <div className="h-16 md:h-20" />

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0d0d13] border-l border-white/10 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#15151d] to-[#0a0a0f] rounded-lg flex items-center justify-center ring-1 ring-orange-500/20 overflow-hidden">
                <LogoMark className="w-6 h-6" />
              </div>
              <span className="text-white font-semibold text-sm">Gayangi Devindi</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 rounded-md"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="px-4 py-6 flex flex-col gap-1" aria-label="Mobile">
            <p className="text-[10px] text-orange-400/90 font-semibold tracking-[0.2em] uppercase px-3 mb-3">Navigation</p>
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 ${
                    isActive ? 'bg-white/[0.04] border border-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 40}ms` : '0ms' }}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full" />}
                </a>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 px-4 py-6 border-t border-white/10 bg-[#0d0d13]">
            <button
              onClick={() => setHireModalOpen(true)}
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70"
            >
              Hire Me <ArrowUpRight size={15} />
            </button>
            <a
              href="https://github.com/gayangidevindi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-medium text-slate-400 hover:text-white border border-white/10 hover:border-orange-500/50 py-3 rounded-xl transition-all mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {hireModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hire-modal-title"
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={() => setHireModalOpen(false)} />
          <div className="relative bg-[#0d0d13] border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-md shadow-[0_25px_80px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.03] animate-[fadeIn_0.2s_ease-out]">
            <button
              onClick={() => setHireModalOpen(false)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
            >
              <X size={16} />
            </button>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#15151d] to-[#0a0a0f] flex items-center justify-center mb-4 ring-1 ring-orange-500/20 shadow-lg shadow-orange-500/20 overflow-hidden">
                <LogoMark className="w-10 h-10" />
              </div>
              <h2 id="hire-modal-title" className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                Let's Work Together
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am currently open to freelance projects, internships, and full-time opportunities.
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:gyangidevindi@gmail.com"
                onClick={() => setHireModalOpen(false)}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.04] rounded-xl p-4 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">Send an Email</p>
                  <p className="text-slate-500 text-xs mt-0.5">gyangidevindi@gmail.com</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
              </a>
              <a
                href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHireModalOpen(false)}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.04] rounded-xl p-4 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">Connect on LinkedIn</p>
                  <p className="text-slate-500 text-xs mt-0.5">linkedin.com/in/gayangi-devindi</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setHireModalOpen(false);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.04] rounded-xl p-4 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">Use Contact Form</p>
                  <p className="text-slate-500 text-xs mt-0.5">Fill out the full project details form</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <p className="text-slate-400 text-xs">Available for new opportunities — response within 24 hours</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default Header;