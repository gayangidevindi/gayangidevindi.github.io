import React from 'react';
import { Code, Layout, Smartphone, Palette, Mail, MapPin, ExternalLink, GraduationCap, Award, TrendingUp, School, Target, Circle, Sparkles } from 'lucide-react';

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

  const alResults = [
    { subject: 'Chemistry', grade: 'A' },
    { subject: 'Combined Maths', grade: 'A' },
    { subject: 'Physics', grade: 'B' },
  ];

  const olStats = { passCount: 9, grade: 'A' };

  const currentlyLearning = ['Node.js', 'TypeScript', 'System Design', 'AWS Basics'];

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

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 gap-3 mt-10 w-full max-w-md">
              <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-4 text-center hover:border-orange-500/50 transition-colors">
                <p className="text-2xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">1.7792</p>
                <p className="text-slate-500 text-xs mt-1">Z-Score</p>
              </div>
              <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-4 text-center hover:border-orange-500/50 transition-colors">
                <p className="text-2xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">150</p>
                <p className="text-slate-500 text-xs mt-1">District Rank</p>
              </div>
              <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-4 text-center hover:border-orange-500/50 transition-colors">
                <p className="text-2xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">9 A's</p>
                <p className="text-slate-500 text-xs mt-1">O/L Results</p>
              </div>
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

            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Education</h3>

              <div className="relative pl-8 space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-[#2a2a3a]">

                {/* University */}
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 ring-4 ring-[#0a0a0f]" />
                  <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-xl hover:border-orange-500/50 transition-colors">
                    <div className="flex items-start gap-3 mb-2">
                      <GraduationCap className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-white">BSc in Information Technology</h4>
                        <p className="text-orange-400 text-sm">University of Moratuwa</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Ongoing education with focus on full-stack development, IoT systems, and emerging technologies.</p>
                  </div>
                </div>

                {/* A/L */}
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 ring-4 ring-[#0a0a0f]" />
                  <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-xl hover:border-orange-500/50 transition-colors">
                    <div className="flex items-start gap-3 mb-4">
                      <School className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-white">G.C.E. Advanced Level — Physical Science Stream</h4>
                        <p className="text-orange-400 text-sm">Mahinda Rajapaksa College, Matara</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {alResults.map((res) => (
                        <div key={res.subject} className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg p-3 text-center">
                          <p className={`text-2xl font-black mb-1 ${res.grade === 'A' ? 'text-orange-400' : 'text-amber-500'}`}>{res.grade}</p>
                          <p className="text-slate-500 text-xs leading-tight">{res.subject}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full">
                        <TrendingUp size={14} className="text-orange-400" />
                        <span className="text-orange-400 text-xs font-semibold">Z-Score: 1.7792</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full">
                        <Award size={14} className="text-orange-400" />
                        <span className="text-orange-400 text-xs font-semibold">District Rank: 150</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* O/L */}
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 ring-4 ring-[#0a0a0f]" />
                  <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-xl hover:border-orange-500/50 transition-colors">
                    <div className="flex items-start gap-3 mb-2">
                      <School className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-white">G.C.E. Ordinary Level</h4>
                        <p className="text-orange-400 text-sm">Mahinda Rajapaksa College, Matara</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full w-fit">
                      <Award size={14} className="text-orange-400" />
                      <span className="text-orange-400 text-xs font-semibold">9 A's</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Career Objective & Availability — full width */}
        <div className="mt-20 pt-16 border-t border-[#2a2a3a]">
          <div className="relative bg-[#16161f] border border-[#2a2a3a] rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-600/5 pointer-events-none" />

            <div className="relative grid md:grid-cols-3 gap-10 items-start">

              {/* Goal */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Target size={18} className="text-orange-400" />
                  <p className="text-orange-400 text-xs tracking-widest uppercase">Career Objective</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  Looking to grow as a full-stack engineer who builds real, working products.
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I'm seeking internship and entry-level opportunities where I can apply my full-stack
                  and IoT skills to solve practical problems, contribute to a team, and keep learning
                  from experienced engineers. Open to remote, hybrid, or on-site roles.
                </p>

                {/* Currently Learning */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-orange-400" />
                    <p className="text-slate-300 text-sm font-semibold">Currently Learning</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentlyLearning.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#0a0a0f] border border-[#2a2a3a] text-slate-300 text-xs rounded-full hover:border-orange-500/50 hover:text-orange-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <Circle className="absolute inline-flex h-full w-full text-green-500 fill-green-500 animate-ping opacity-75" size={10} />
                    <Circle className="relative inline-flex h-2.5 w-2.5 text-green-500 fill-green-500" size={10} />
                  </span>
                  <span className="text-green-400 text-sm font-semibold">Open to Opportunities</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Looking for</p>
                    <p className="text-white text-sm font-medium">Internships & Entry-Level Roles</p>
                  </div>
                  <div className="border-t border-[#2a2a3a] pt-4">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Work Mode</p>
                    <p className="text-white text-sm font-medium">Remote / Hybrid / On-site</p>
                  </div>
                  <div className="border-t border-[#2a2a3a] pt-4">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Focus Areas</p>
                    <p className="text-white text-sm font-medium">Full-Stack Web & IoT</p>
                  </div>
                </div>

                
                <a
                  href="mailto:gyangidevindi@gmail.com"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
                >
                  <Mail size={16} /> Let's Talk
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}