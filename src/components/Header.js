import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/aboutind', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group">
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
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {/* Active background pill */}
                  {isActive(link.path) && (
                    <span className="absolute inset-0 bg-[#16161f] border border-[#2a2a3a] rounded-lg" />
                  )}
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-[#16161f] border border-transparent group-hover:border-[#2a2a3a] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  {/* Active dot indicator */}
                  {isActive(link.path) && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/gayangidevindi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-[#2a2a3a] hover:border-orange-500/60 px-3 py-2 rounded-lg transition-all duration-200"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/20"
              >
                Hire Me
              </Link>
            </div>

            {/* ── Mobile Menu Button ── */}
            <button
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-slate-400 hover:text-white hover:border-orange-500/60 transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`}
              >
                <X size={18} />
              </span>
              <span
                className={`absolute transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                }`}
              >
                <Menu size={18} />
              </span>
            </button>

          </div>
        </div>

        {/* ── Progress bar (scroll indicator) ── */}
        <ScrollProgress />
      </header>

      {/* ── Spacer so content doesn't sit under fixed header ── */}
      <div className="h-16 md:h-20" />

      {/* ── Mobile Nav Drawer ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#111118] border-l border-[#2a2a3a] transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#2a2a3a]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                GD
              </div>
              <span className="text-white font-semibold text-sm">Gayangi Devindi</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="px-4 py-6 flex flex-col gap-1">
            <p className="text-xs text-orange-400 tracking-widest uppercase px-3 mb-3">Navigation</p>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#16161f] border border-[#2a2a3a] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-[#16161f]'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span>{link.label}</span>
                {isActive(link.path) && (
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-6 border-t border-[#2a2a3a]">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 py-3 rounded-xl transition-all"
            >
              Hire Me <ArrowUpRight size={15} />
            </Link>
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
    window.addEventListener('scroll', handleScroll);
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