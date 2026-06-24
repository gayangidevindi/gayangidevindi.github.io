import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import About from '../components/About';

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6 md:px-12 lg:px-24">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#16161f] border border-[#2a2a3a] rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-300 text-sm">Available for work</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">Gayangi Devindi</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Developer. Innovator. Creator.</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">Full-stack developer and IoT engineer passionate about building meaningful digital experiences. From embedded systems to modern web applications, I craft solutions that blend creativity with technology.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">View Projects<ArrowRight size={20} /></Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-orange-500 text-orange-400 hover:text-orange-300 hover:border-orange-400 font-semibold rounded-xl transition-all duration-300">Contact Me<ArrowRight size={20} /></Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div><div className="text-3xl font-bold text-orange-400">9+</div><div className="text-slate-500 text-sm">Projects</div></div>
            <div className="hidden sm:block w-px h-12 bg-[#2a2a3a]" />
            <div><div className="text-3xl font-bold text-orange-400">2+</div><div className="text-slate-500 text-sm">Years Experience</div></div>
            <div className="hidden sm:block w-px h-12 bg-[#2a2a3a]" />
            <div><div className="text-3xl font-bold text-orange-400">IoT + Web</div><div className="text-slate-500 text-sm">Full Stack</div></div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#111118] border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-slate-500 mb-8 text-sm">TECHNOLOGIES & TOOLS</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Flutter', 'ESP32', 'Figma', 'PHP', 'JavaScript', 'Python', 'Dart', 'HTML/CSS', 'Git'].map((skill, idx) => (
              <div key={idx} className="px-4 py-2 bg-[#16161f] border border-[#2a2a3a] text-slate-300 rounded-full text-sm hover:border-orange-500/50 transition-colors">{skill}</div>
            ))}
          </div>
        </div>
      </section>
      <About />
    </div>
  );
}
