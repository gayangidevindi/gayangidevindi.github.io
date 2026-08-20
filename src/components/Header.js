import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Mail, ExternalLink, MessageSquare } from 'lucide-react';

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#2a2a3a] shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="#home" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  GD
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-white font-semibold text-sm tracking-wide">Gayangi Devindi</span>
                <span className="text-orange-400 text-xs tracking-widest uppercase mt-0.5">Portfolio</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-[#16161f] border border-[#2a2a3a] rounded-lg" />
                    )}
                    <span className="absolute inset-0 bg-[#16161f] border border-transparent group-hover:border-[#2a2a3a] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full" />
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
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-[#2a2a3a] hover:border-orange-500/60 px-3 py-2 rounded-lg transition-all duration-200"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
              <button
                onClick={() => setHireModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/20"
              >
                Hire Me
              </button>
            </div>

            <button
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-slate-400 hover:text-white hover:border-orange-500/60 transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className={`absolute top-0 right-0 h-full w-72 bg-[#111118] border-l border-[#2a2a3a] transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#2a2a3a]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                GD
              </div>
              <span className="text-white font-semibold text-sm">Gayangi Devindi</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <nav className="px-4 py-6 flex flex-col gap-1">
            <p className="text-xs text-orange-400 tracking-widest uppercase px-3 mb-3">Navigation</p>
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive ? 'bg-[#16161f] border border-[#2a2a3a] text-white' : 'text-slate-400 hover:text-white hover:bg-[#16161f]'
                  }`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />}
                </a>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 px-4 py-6 border-t border-[#2a2a3a]">
            <button
              onClick={() => setHireModalOpen(true)}
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20"
            >
              Hire Me <ArrowUpRight size={15} />
            </button>
            <a
              href="https://github.com/gayangidevindi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-medium text-slate-400 hover:text-white border border-[#2a2a3a] hover:border-orange-500/60 py-3 rounded-xl transition-all mt-3"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {hireModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setHireModalOpen(false)} />
          <div className="relative bg-[#111118] border border-[#2a2a3a] rounded-3xl p-8 md:p-10 w-full max-w-md shadow-2xl shadow-black/50">
            <button
              onClick={() => setHireModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-slate-400 hover:text-white hover:border-orange-500/60 transition-all"
            >
              <X size={16} />
            </button>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                GD
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Let's Work Together</h2>
              <p className="text-slate-400 text-sm">
                I am currently open to freelance projects, internships, and full-time opportunities.
              </p>
            </div>
            <div className="h-px bg-[#2a2a3a] mb-6" />
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:gyangidevindi@gmail.com"
                onClick={() => setHireModalOpen(false)}
                className="flex items-center gap-4 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/50 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">Send an Email</p>
                  <p className="text-slate-500 text-xs mt-0.5">gyangidevindi@gmail.com</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-orange-400 transition-colors ml-auto" />
              </a>
              <a
                href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHireModalOpen(false)}
                className="flex items-center gap-4 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/50 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">Connect on LinkedIn</p>
                  <p className="text-slate-500 text-xs mt-0.5">linkedin.com/in/gayangi-devindi</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-orange-400 transition-colors ml-auto" />
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setHireModalOpen(false);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-4 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/50 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">Use Contact Form</p>
                  <p className="text-slate-500 text-xs mt-0.5">Fill out the full project details form</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-orange-400 transition-colors ml-auto" />
              </a>
            </div>
            <div className="flex items-center gap-2 bg-[#16161f] border border-[#2a2a3a] rounded-xl px-4 py-3">
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
    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2a2a3a]">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default Header;