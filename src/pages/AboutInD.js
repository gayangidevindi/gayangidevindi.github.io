import React from 'react';
import { Code, Layout, Smartphone, Palette, Mail, MapPin, ExternalLink } from 'lucide-react';

const LinkedInIcon = ({ size = 20, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


export default function AboutInD() {
  const skills = [
    { icon: Code, title: 'Web Development', desc: 'React, PHP, JavaScript, HTML/CSS' },
    { icon: Layout, title: 'IoT Systems', desc: 'ESP32, Arduino, embedded systems' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Flutter, Dart, cross-platform' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, prototyping, user research' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-1">
              <div className="w-full h-full bg-[#16161f] rounded-2xl flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">GD</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Gayangi Devindi</h3>
              <p className="text-orange-400 font-semibold mb-4">Full Stack Developer & IoT Engineer</p>
              <div className="flex items-center gap-2 text-slate-400 mb-6">
                <MapPin size={18} />
                <span>Matara, Sri Lanka</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <ExternalLink size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <LinkedInIcon size={20} className="text-slate-400" />
              </a>
              <a href="mailto:gyangidevindi@gmail.com" className="w-12 h-12 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-12 h-px bg-orange-500 mb-6" />
              <p className="text-slate-400 leading-relaxed mb-4">
                I am a full-stack developer and IoT engineer passionate about creating innovative digital solutions. With expertise in web development, embedded systems, and mobile app development, I bridge the gap between hardware and software.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My journey in tech spans from building IoT prototypes with ESP32 to developing scalable web applications. I thrive in collaborative environments where creativity meets technical excellence.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={idx} className="bg-[#16161f] border border-[#2a2a3a] p-4 rounded-xl hover:border-orange-500/50 transition-colors">
                      <Icon className="text-orange-400 mb-3" size={24} />
                      <h4 className="font-semibold text-white mb-1 text-sm">{skill.title}</h4>
                      <p className="text-slate-400 text-xs">{skill.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Education</h3>
              <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-xl">
                <h4 className="font-semibold text-white">BSc in Information and Communication Technology</h4>
                <p className="text-orange-400 text-sm mb-2">University of Ruhuna</p>
                <p className="text-slate-400 text-sm">Ongoing education with focus on full-stack development, IoT systems, and emerging technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
