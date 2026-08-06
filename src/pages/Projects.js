import React, { useState } from 'react';
import {
  Zap, Coffee, Smartphone, Layers, LayoutDashboard, Globe,
  ShoppingCart, ArrowRight, PawPrint, Pill, Crown,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectDetails, { projectsData } from './ProjectDetails';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'Hardware', 'Mobile', 'Design', 'Software'];
  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects & Works</h1>
          <div className="w-12 h-px bg-orange-500 mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">A collection of my recent work spanning web development, IoT systems, mobile applications, and design.</p>

          <a
            href="https://github.com/gayangidevindi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/60 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
          >
            <FaGithub size={18} />
            View All Repositories on GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-orange-600 text-white'
                  : 'bg-[#16161f] border border-[#2a2a3a] text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group relative cursor-pointer bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
              >
                {project.role && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-semibold">
                    <Crown size={12} />
                    {project.role}
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.stack.slice(0, 2).map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-[#0a0a0f] border border-[#2a2a3a] text-orange-400 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-[#0a0a0f] border border-[#2a2a3a] text-slate-500 rounded">
                      +{project.stack.length - 2}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
        />
      )}
    </section>
  );
}