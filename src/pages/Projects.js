import React, { useState } from 'react';

import {
  ArrowRight,
  Crown,
  ExternalLink,
} from 'lucide-react';

import { FaGithub, FaFigma } from 'react-icons/fa';

import ProjectDetails, { projectsData } from './ProjectDetails';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Scroll animation refs
  const filterRef = useScrollAnimation({ threshold: '0.2' });
  const projectsGridRef = useScrollAnimation({ threshold: '0.2' });
  const projectsHeaderRef = useScrollAnimation({ threshold: '0.2' });
  const projectsSectionRef = useScrollAnimation({ threshold: '0.1' });

  const categories = [
    'All',
    'Software',
    'Web',
    'Hardware',
    'Mobile',
    'Design',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={projectsHeaderRef} className="mb-16 text-center">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & Works
          </h1>

          <div className="w-12 h-px bg-orange-500 mx-auto mb-6" />

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            A collection of my recent work spanning full-stack software
            development, web applications, mobile applications, IoT systems,
            and UI/UX design.
          </p>

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

        {/* Filters */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
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

        {/* Projects */}
        <div ref={projectsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const isMedicareX = project.id === 1;

            return (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                data-scroll-child
                className={`group relative cursor-pointer bg-[#16161f] border rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 ${
                  isMedicareX
                    ? 'pt-24 md:pt-20 md:col-span-2 lg:col-span-3 border-orange-500/50 bg-gradient-to-br from-[#16161f] to-[#1b1718]'
                    : 'border-[#2a2a3a]'
                }`}
              >
                {/* Badges for Featured Project (MedicareX) */}
                {isMedicareX && (
                  <div className="absolute top-5 right-5 z-10 flex max-w-[calc(100%-2.5rem)] flex-wrap justify-end gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-semibold">
                      <Crown size={12} /> Group Project | Team Leader
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-300 rounded-full text-xs font-semibold">
                      <Crown size={13} /> Featured Project
                    </span>
                  </div>
                )}

                {/* Role Badge for Other Projects */}
                {project.role && !isMedicareX && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-semibold">
                    <Crown size={12} />
                    {project.role}
                  </div>
                )}

                {/* Conditional Layout Container: 2 columns for MedicareX, standard flow for others */}
                <div className={isMedicareX ? 'grid md:grid-cols-2 gap-8 items-center' : ''}>
                  
                  {/* Left Column: Details & Content */}
                  <div className={isMedicareX ? 'flex flex-col justify-center' : ''}>
                    {/* Regular project cover image (remains on top for non-MedicareX cards) */}
                    {!isMedicareX && project.cover && (
                      <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        className="mb-6 h-44 w-full rounded-xl border border-[#2a2a3a] bg-[#0d0d14] object-contain md:h-52"
                      />
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-semibold text-white mb-3 pr-4 ${
                        isMedicareX ? 'text-2xl md:text-3xl max-w-3xl' : 'text-lg'
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stack.slice(0, isMedicareX ? 4 : 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-[#0a0a0f] border border-[#2a2a3a] text-orange-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > (isMedicareX ? 4 : 2) && (
                        <span className="text-xs px-2 py-1 bg-[#0a0a0f] border border-[#2a2a3a] text-slate-500 rounded">
                          +{project.stack.length - (isMedicareX ? 4 : 2)}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p
                      className={`text-slate-400 mb-4 leading-relaxed ${
                        isMedicareX ? 'text-base max-w-3xl' : 'text-sm'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Status */}
                    {project.status && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
                          {project.status}
                        </span>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span className="inline-flex items-center text-sm font-medium">
                        View Details <ArrowRight size={16} className="ml-2" />
                      </span>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-orange-300"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {project.prototype && (
                        <a
                          href={project.prototype}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-orange-300"
                        >
                          <FaFigma size={14} /> Figma
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-orange-300"
                        >
                          <FaGithub size={14} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: MedicareX Cover Image */}
                  {isMedicareX && project.cover && (
                    <div className="order-first md:order-last w-full h-full min-h-[240px] md:min-h-[300px]">
                      <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        className="w-full h-full max-h-[360px] rounded-xl border border-[#2a2a3a] bg-[#0d0d14] object-contain shadow-md"
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Details Modal */}
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