import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Zap, Coffee, Smartphone, Layers, LayoutDashboard, Globe,
  ShoppingCart, PawPrint, Pill, Crown,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Rapid Compost Maker',
    category: 'Hardware',
    icon: Zap,
    stack: ['ESP32', 'DHT11', 'MQ-135', 'Arduino IDE'],
    year: '2023',
    description: 'An IoT-based composting system that monitors temperature, humidity, and gas levels in real-time to optimize the composting process.',
    overview: 'This first-year hardware project demonstrates how IoT technology can be applied to environmental solutions. By combining hardware sensors with real-time monitoring, the system provides users with actionable insights to optimize their composting process and reduce waste.',
  },
  {
    id: 2,
    title: 'Caffeetto — Coffee Shop Website',
    category: 'Web',
    icon: Coffee,
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    year: '2023',
    description: 'A full-stack website for a local coffee shop featuring a dynamic menu, online ordering system, and admin panel.',
    overview: 'This project demonstrates how web development can help small businesses establish their digital presence. It includes features for browsing the menu, placing orders, and managing inventory through a secure admin dashboard.',
  },
  {
    id: 3,
    title: 'Flutter Mobile App',
    category: 'Mobile',
    icon: Smartphone,
    stack: ['Flutter', 'Dart', 'Firebase'],
    year: '2023',
    description: 'A cross-platform mobile application built with Flutter featuring real-time data sync, authentication, and a clean UI.',
    overview: 'This mobile application showcases best practices in cross-platform development. With Firebase backend integration, the app provides real-time data synchronization and a smooth user experience across iOS and Android platforms.',
  },
  {
    id: 4,
    title: 'App UI/UX Design',
    category: 'Design',
    icon: Layers,
    stack: ['Figma', 'Prototyping', 'User Research'],
    year: '2023',
    description: 'A complete UI/UX design system for a mobile application including wireframes, components library, and interactive prototype.',
    overview: 'This design project emphasizes user-centered design principles. The design system includes comprehensive wireframes, reusable components, and interactive prototypes that serve as a blueprint for developers.',
  },
  {
    id: 5,
    title: 'Smart Home Dashboard',
    category: 'Web',
    icon: LayoutDashboard,
    stack: ['React', 'Node.js', 'MQTT', 'WebSockets'],
    year: '2024',
    description: 'A real-time web dashboard for monitoring and controlling smart home IoT devices, with live sensor data visualization.',
    overview: 'This dashboard provides a comprehensive interface for smart home management. Real-time data updates via WebSockets, MQTT integration for IoT communication, and interactive visualizations make it easy to monitor and control connected devices.',
  },
  {
    id: 6,
    title: 'Pet Shop — E-Commerce Website',
    category: 'Web',
    icon: ShoppingCart,
    stack: ['HTML', 'CSS', 'JavaScript'],
    year: '2024',
    description: 'A fully responsive e-commerce platform for a pet shop, featuring product browsing, cart interaction, and a mobile-first shopping experience.',
    overview: 'This responsive e-commerce site demonstrates modern shopping UI/UX patterns built specifically around a pet store catalog, with a mobile-first approach and an interactive shopping cart for a smooth browsing experience.',
  },
  {
    id: 7,
    title: 'DigiX — Pet Project',
    category: 'Web',
    icon: PawPrint,
    stack: ['JavaScript', 'HTML', 'CSS'],
    year: '2024',
    description: 'A JavaScript-driven pet project exploring dynamic UI interactions and clean component structuring, deployed live for public access.',
    overview: 'DigiX was built as a personal pet project to experiment with dynamic JavaScript interactions and clean, maintainable front-end structuring outside of a framework, with a focus on responsive layout and live deployment.',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    category: 'Web',
    icon: Globe,
    stack: ['React', 'Tailwind CSS', 'GitHub Pages'],
    year: '2024',
    description: 'This portfolio website built with React and Tailwind CSS, deployed on GitHub Pages.',
    overview: 'This portfolio showcases modern web development practices with React for component-based architecture and Tailwind CSS for utility-first styling. Deployed on GitHub Pages for easy hosting and continuous integration.',
  },
  {
    id: 9,
    title: 'Smart Pharmacy Management System',
    category: 'Software',
    icon: Pill,
    stack: ['React', 'Nest.js', 'Firebase'],
    year: '2025',
    description: 'Developed a full-stack pharmacy and supply chain management platform with separate modules for customers, suppliers, pharmacists, and administrators. Built the frontend using React, Vite, Tailwind CSS, Firebase, and Zustand, while the backend was developed with NestJS and Firebase services. The system includes authentication, inventory management, order processing, prescription handling, analytics dashboards, notifications, file uploads, and AI-powered forecasting features, providing a complete digital solution for pharmacy operations and supply chain management.',
    overview: 'As team lead on this second-year group project, I coordinated feature planning, architecture decisions, and task delegation across the team. The system streamlines pharmacy operations with modules for inventory tracking, prescription management, billing, and customer records, built with a modern full-stack architecture.',
    role: 'Team Lead',
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f] min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-orange-400 hover:text-orange-300">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const Icon = project.icon;

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center">
              <Icon className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
              <div className="flex items-center gap-3">
                <p className="text-orange-400 font-semibold">{project.category}</p>
                {project.role && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-semibold">
                    <Crown size={12} />
                    {project.role}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#16161f] border border-[#2a2a3a] text-orange-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-400 leading-relaxed text-lg">{project.overview}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Project Information</h2>

            <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-6 space-y-6">
              <div>
                <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Category</h3>
                <p className="text-white font-semibold">{project.category}</p>
              </div>

              <div className="border-t border-[#2a2a3a] pt-6">
                <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Status</h3>
                <p className="text-white font-semibold">Completed</p>
              </div>

              <div className="border-t border-[#2a2a3a] pt-6">
                <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Year</h3>
                <p className="text-white font-semibold">{project.year}</p>
              </div>

              {project.role && (
                <div className="border-t border-[#2a2a3a] pt-6">
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Role</h3>
                  <p className="text-white font-semibold flex items-center gap-2">
                    <Crown size={16} className="text-orange-400" />
                    {project.role}
                  </p>
                </div>
              )}

              <div className="border-t border-[#2a2a3a] pt-6">
                <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-600/10 border border-orange-500/20 text-orange-400 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Description</h2>
            <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-6">
              <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

              <div className="border-t border-[#2a2a3a] pt-6">
                <h3 className="font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Modern and responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Optimized performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Best practices implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>User-focused experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <a
            href="https://github.com/gayangidevindi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/60 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
          >
            <FaGithub size={18} />
            View Source on GitHub
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-[#2a2a3a]">
          <h2 className="text-2xl font-bold text-white mb-8">More Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map(relatedProject => {
                const RelatedIcon = relatedProject.icon;
                return (
                  <Link
                    key={relatedProject.id}
                    to={`/project/${relatedProject.id}`}
                    className="group bg-[#16161f] border border-[#2a2a3a] rounded-xl p-6 hover:border-orange-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <RelatedIcon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-slate-500 text-sm">{relatedProject.category}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}