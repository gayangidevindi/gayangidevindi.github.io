import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GITHUB_URL = 'https://github.com/gayangidevindi';
const LINKEDIN_URL = 'https://www.linkedin.com/in/gayangi-devindi-0272a8290/';
const MEDIUM_PROFILE_URL = 'https://medium.com/@gayangidevindi';
const EMAIL = 'mailto:gyangidevindi@gmail.com';

const professionalStats = [
  { value: '10+', label: 'Projects across software, web, mobile and IoT' },
  { value: 'Full-stack', label: 'React, NestJS, Firebase and REST APIs' },
  { value: 'AI + Cloud', label: 'Groq, Pinecone and practical cloud workflows' },
  { value: 'Technical writing', label: 'Sharing practical software lessons' },
];

export default function Home() {
  const heroRef = useScrollAnimation({ threshold: '0.2' });
  const statsRef = useScrollAnimation({ threshold: '0.2' });
  const techRef = useScrollAnimation({ threshold: '0.2' });

  return (
    <div id="home" className="bg-[#0a0a0f]">
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6 md:px-12 lg:px-24">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <div data-scroll-child className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#16161f] border border-[#2a2a3a] rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-300 text-sm">Available for work</span>
          </div>
          <h1 data-scroll-child className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">Gayangi Devindi</h1>
          <h2 data-scroll-child className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Software Engineering Undergraduate | Full-Stack Developer</h2>
          <p data-scroll-child className="text-slate-400 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">I build practical software across React, NestJS, Firebase, Node.js, cloud services and AI integrations.</p>
          <p data-scroll-child className="text-slate-500 text-sm mb-10">React <span className="text-orange-400">•</span> NestJS <span className="text-orange-400">•</span> Firebase <span className="text-orange-400">•</span> Node.js <span className="text-orange-400">•</span> Cloud <span className="text-orange-400">•</span> AI</p>
          <div data-scroll-child className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">View Projects<ArrowRight size={20} /></a>
            <a href="/Gayangi_Devindi_CV.pdf" download="Gayangi_Devindi_CV.pdf" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-orange-500 text-orange-400 hover:text-orange-300 hover:border-orange-400 font-semibold rounded-xl transition-all duration-300"><Download size={20} />Download CV</a>
          </div>
          <div data-scroll-child className="flex justify-center items-center gap-3 mb-14" aria-label="Professional social links">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all"><FaGithub size={19} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all"><FaLinkedin size={19} /></a>
            <a href={MEDIUM_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all"><FaMedium size={19} /></a>
            <a href={EMAIL} aria-label="Email" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all"><Mail size={19} /></a>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {professionalStats.map((stat) => (
              <div key={stat.value} data-scroll-child className="bg-[#16161f]/80 border border-[#2a2a3a] rounded-xl p-4">
                <div className="text-xl font-bold text-orange-400">{stat.value}</div>
                <div className="text-slate-500 text-xs leading-relaxed mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={techRef} className="py-16 px-6 md:px-12 lg:px-24 bg-[#111118] border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <p data-scroll-child className="text-center text-slate-500 mb-8 text-sm">TECHNOLOGIES & TOOLS</p>
          <div data-scroll-child className="flex flex-wrap justify-center gap-3">
            {['React', 'Flutter', 'ESP32', 'Figma', 'PHP', 'JavaScript', 'Python', 'Dart', 'HTML/CSS', 'Git'].map((skill, idx) => (
              <div key={idx} className="px-4 py-2 bg-[#16161f] border border-[#2a2a3a] text-slate-300 rounded-full text-sm hover:border-orange-500/50 transition-colors">{skill}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
