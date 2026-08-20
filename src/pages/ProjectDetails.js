import React, { useEffect } from 'react';

import {
  Zap,
  Coffee,
  Smartphone,
  Layers,
  Globe,
  ShoppingCart,
  PawPrint,
  Pill,
  Crown,
  X,
  ExternalLink,
  CheckCircle2,
  Code2,
  Database,
  BrainCircuit,
  ShieldCheck,
  Truck,
  BarChart3,
} from 'lucide-react';

import { FaGithub, FaFigma } from 'react-icons/fa';

/* =========================================================
   PROJECT DATA
========================================================= */

export const projectsData = [

  /* =======================================================
     1. MEDICAREX — SECOND YEAR SOFTWARE PROJECT
  ======================================================= */

  {
    id: 1,

    title: 'MediCareX — Smart Online Pharmacy Management System',

    category: 'Software',

    icon: Pill,

    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Native',
      'Expo',
      'NestJS',
      'Firebase Authentication',
      'Cloud Firestore',
      'Zustand',
      'Groq API',
      'Pinecone',
      'PayHere',
      'PDFKit',
      'Puppeteer',
    ],

    year: '2026',

    status: 'Completed',

    role: 'Team Project',

    liveDemo: 'https://innovatexuom.vercel.app',

    github: 'https://github.com/gayangidevindi',

    description:
      'A full-stack, multi-user online pharmacy and supply-chain management platform designed to digitally connect customers, pharmacists, suppliers, and administrators through a single integrated cloud-based system.',

    overview:
      'MediCareX is our second-year software project developed as a complete online pharmacy and pharmacy supply-chain management solution. The platform supports multiple user roles including Customers, Pharmacists, Suppliers, and Administrators. It combines online medicine purchasing, prescription processing, inventory management, supplier procurement, payment handling, delivery tracking, analytics, notifications, and AI-assisted decision support within one integrated system. The project includes both web and mobile interfaces and uses a modern full-stack architecture based on React, React Native, NestJS, Firebase Authentication, Cloud Firestore, Groq AI, Pinecone semantic search, and PayHere payment services.',

    fullProjectDetails: [
      'Multi-role system supporting Customers, Pharmacists, Suppliers, and Administrators.',
      'Firebase Authentication and role-based access for secure user management.',
      'Customer product browsing, search, shopping cart, checkout, order tracking, reviews, and prescription uploads.',
      'Pharmacist prescription verification and controlled product approval workflows.',
      'Supplier product catalog management with Admin approval before products become available.',
      'Supplier purchase-order approval and rejection workflows with inventory synchronization.',
      'Two-stage supplier payment process using an initial 50% payment and final 50% settlement.',
      'Supplier delivery tracking with courier selection, tracking numbers, and delivery-status updates.',
      'Admin management for users, suppliers, products, purchase orders, payments, inventory, and notifications.',
      'Sales Analytics and Financial Analytics dashboards for business monitoring.',
      'AI-assisted sales forecasting and supplier analytics using statistical calculations together with Groq-generated recommendations.',
      'Pinecone-powered semantic product search.',
      'PayHere payment integration for customer online payments.',
      'PDF generation for invoices and analytics reports.',
      'Cloud Firestore used for application data and real-time workflows.',
      'React-based web dashboards together with a React Native / Expo mobile application.',
    ],

    contributionTitle: 'My Contribution',

    contribution: [
      {
        title: 'Supplier Dashboard — End-to-End Development',
        description:
          'Developed the supplier-side workflows including dashboard overview, product catalog management, purchase-order handling, invoices and payments, low-stock alerts, delivery tracking, and supplier analytics.',
      },
      {
        title: 'Supplier Product Management',
        description:
          'Implemented product creation, editing, deletion, stock management, expiry information, Admin approval workflow, pending product monitoring, and synchronization between supplier and Admin inventory records.',
      },
      {
        title: 'Purchase Order Workflow',
        description:
          'Implemented supplier purchase-order approval and rejection logic, stock validation, stock synchronization, automatic invoice generation, initial supplier-payment creation, and Admin notifications.',
      },
      {
        title: 'Two-Stage Supplier Payment Workflow',
        description:
          'Worked on the initial 50% and final 50% supplier payment process, including invoices, payment status tracking, payment receipts, delivery unlocking, supplier notifications, and purchase-order completion.',
      },
      {
        title: 'Delivery Management',
        description:
          'Implemented delivery-status progression from Approved to Packed, In Delivery, Delivered, and Completed, including courier selection, tracking numbers, tracking URLs, and shipment notifications.',
      },
      {
        title: 'Supplier AI Analytics',
        description:
          'Developed analytics for supply recommendations, demand forecasting, payment risk, and restock suggestions using historical invoice data, statistical calculations, and business rules. Integrated Groq as an AI Business Advisor to interpret these calculated results and generate business summaries, priority actions, and watch items.',
      },
      {
        title: 'Admin Dashboard',
        description:
          'Worked on Admin dashboard features including system statistics, recent purchase orders, low-stock monitoring, inventory management, supplier-related workflows, and financial information.',
      },
      {
        title: 'Sales & Financial Analytics',
        description:
          'Implemented analytics using customer orders and supplier payments to calculate revenue, supplier cost, dashboard profit, profit margin, monthly trends, top products, supplier spending, and payment analysis.',
      },
      {
        title: 'AI Sales Forecasting',
        description:
          'Worked on inventory forecasting using historical customer-order data to estimate future demand and stock risk, with Groq used to provide understandable inventory recommendations.',
      },
      {
        title: 'Full-Stack Integration',
        description:
          'Integrated React frontend modules with NestJS REST APIs, Firebase Authentication, Cloud Firestore, external AI services, notifications, and PDF-generation services.',
      },
    ],

    keyFeatures: [
      'Customer, Pharmacist, Supplier, and Admin role-based modules',
      'Firebase Authentication and protected application workflows',
      'Prescription upload and pharmacist verification',
      'Product approval and inventory management',
      'Customer ordering, checkout, payment, and delivery tracking',
      'Supplier purchase-order and procurement workflow',
      'Initial 50% and final 50% supplier payment process',
      'Supplier invoice and payment tracking',
      'Low-stock monitoring and notifications',
      'Sales and financial analytics',
      'AI-assisted sales forecasting',
      'Supplier AI analytics and Groq Business Advisor',
      'Pinecone semantic product search',
      'PayHere online payment integration',
      'PDF invoice and analytics report generation',
      'React web application and React Native mobile application',
    ],
  },

  /* =======================================================
     2. UI/UX — MEDICAREX MOBILE APP
  ======================================================= */

  {
    id: 2,

    title: 'MediCareX Mobile App — UI/UX Design',

    category: 'Design',

    icon: Smartphone,

    stack: [
      'Figma',
      'Mobile UI/UX',
      'Interactive Prototype',
      'User Flows',
    ],

    year: '2026',

    status: 'Completed',

    prototype:
      'https://www.figma.com/proto/biQgcNlNtG7w9NcD4u2Mjl/SE-project?node-id=292-197&t=sApPpvaXO8H0BMWy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=292%3A197&show-proto-sidebar=1',

    description:
      'Interactive mobile application UI/UX prototype designed for the MediCareX second-year software project.',

    overview:
      'This Figma prototype was designed for the mobile side of the MediCareX pharmacy platform. The design focuses on creating a clear and accessible experience for customers interacting with pharmacy services through a mobile device.',

    keyFeatures: [
      'Mobile-first interface design',
      'Interactive Figma prototype',
      'Structured pharmacy user flows',
      'Reusable UI components',
      'Customer-focused navigation',
      'Consistent MediCareX design language',
      'Responsive mobile layouts',
    ],
  },

  /* =======================================================
     3. UI/UX — SUPPLIER DASHBOARD
  ======================================================= */

  {
    id: 3,

    title: 'MediCareX Supplier Dashboard — UI/UX Design',

    category: 'Design',

    icon: Layers,

    stack: [
      'Figma',
      'Dashboard Design',
      'UI/UX',
      'Interactive Prototype',
    ],

    year: '2026',

    status: 'Completed',

    prototype:
      'https://www.figma.com/proto/8NwFWMtgfgRxe9NxC0riQC/Supplier-Dashboard?node-id=2-4&p=f&t=yZf2uInyY1GhCRSn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4',

    description:
      'Interactive supplier dashboard prototype designed for the MediCareX second-year software project.',

    overview:
      'This prototype focuses on the supplier experience within MediCareX. It was designed to provide suppliers with a clear interface for monitoring purchase orders, products, deliveries, payments, and other supply-chain activities.',

    keyFeatures: [
      'Supplier dashboard interface',
      'Purchase-order management screens',
      'Product management UI',
      'Delivery-status design',
      'Invoice and payment interfaces',
      'Dashboard navigation structure',
      'Reusable components and layouts',
    ],
  },

  /* =======================================================
     4. RAPID COMPOST MAKER
  ======================================================= */

  {
    id: 4,

    title: 'Rapid Compost Maker',

    category: 'Hardware',

    icon: Zap,

    stack: [
      'ESP32',
      'DHT11',
      'MQ-135',
      'Arduino IDE',
    ],

    year: '2023',

    status: 'Completed',

    description:
      'An IoT-based composting system that monitors temperature, humidity, and gas levels in real time to optimize the composting process.',

    overview:
      'This first-year hardware project demonstrates how IoT technology can be applied to environmental solutions. By combining hardware sensors with real-time monitoring, the system provides users with useful information to improve the composting process and reduce organic waste.',

    keyFeatures: [
      'ESP32-based IoT implementation',
      'Temperature monitoring',
      'Humidity monitoring',
      'Gas-level monitoring',
      'Real-time sensor readings',
      'Environment-focused solution',
    ],
  },

  /* =======================================================
     5. CAFFEETTO
  ======================================================= */

  {
    id: 5,

    title: 'Caffeetto — Coffee Shop Website',

    category: 'Web',

    icon: Coffee,

    stack: [
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    year: '2023',

    status: 'Completed',

    description:
      'A full-stack website for a local coffee shop featuring a dynamic menu, online ordering system, and Admin functionality.',

    overview:
      'This project demonstrates how web technologies can support the digital operations of a small business. Customers can browse available products and interact with the website through an accessible online interface.',

    keyFeatures: [
      'Coffee-shop product/menu browsing',
      'Responsive user interface',
      'Online ordering functionality',
      'JavaScript-based interactions',
      'PHP-based backend functionality',
      'Administrative functionality',
    ],
  },

  /* =======================================================
     6. FLUTTER MOBILE APP
  ======================================================= */

  {
    id: 6,

    title: 'Flutter Mobile App',

    category: 'Mobile',

    icon: Smartphone,

    stack: [
      'Flutter',
      'Dart',
      'Firebase',
    ],

    year: '2023',

    status: 'Completed',

    description:
      'A cross-platform mobile application built with Flutter featuring Firebase integration, authentication, and a clean user interface.',

    overview:
      'This mobile application demonstrates cross-platform mobile development using Flutter and Dart together with Firebase services.',

    keyFeatures: [
      'Cross-platform mobile development',
      'Firebase integration',
      'Authentication',
      'Reusable Flutter widgets',
      'Responsive mobile interface',
    ],
  },

  /* =======================================================
     7. APP UI/UX DESIGN
  ======================================================= */

  {
    id: 7,

    title: 'App UI/UX Design',

    category: 'Design',

    icon: Layers,

    stack: [
      'Figma',
      'Prototyping',
      'User Research',
    ],

    year: '2023',

    status: 'Completed',

    description:
      'A UI/UX design project including wireframes, reusable design components, and an interactive prototype.',

    overview:
      'This project focuses on applying user-centered UI/UX design principles through wireframes, reusable components, layout consistency, and interactive prototyping.',

    keyFeatures: [
      'Wireframe design',
      'Interactive prototyping',
      'Reusable UI components',
      'User-centered design',
      'Visual consistency',
    ],
  },

  /* =======================================================
     8. PET SHOP
  ======================================================= */

  {
    id: 8,

    title: 'PetShop — E-Commerce Platform',

    category: 'Web',

    icon: ShoppingCart,

    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
    ],

    year: '2024',

    status: 'Completed',

    description:
      'A full-stack e-commerce platform for pet products with RESTful APIs, shopping-cart management, orders, contact handling, and recurring subscriptions.',

    overview:
      'PetShop is a personal full-stack practice project created to strengthen my experience with React, Node.js, Express, MongoDB, and REST API development. The system contains multiple backend modules and a responsive customer-facing interface.',

    keyFeatures: [
      '23 RESTful API endpoints',
      'User management',
      'Product management',
      'Order management',
      'Contact module',
      'Recurring product subscriptions',
      'React Context API cart management',
      'MongoDB and Mongoose backend',
      'Responsive React interface',
    ],
  },

  /* =======================================================
     9. DIGIX
  ======================================================= */

  {
    id: 9,

    title: 'DigiX — Pet Project',

    category: 'Web',

    icon: PawPrint,

    stack: [
      'JavaScript',
      'HTML',
      'CSS',
    ],

    year: '2024',

    status: 'Completed',

    description:
      'A JavaScript-driven personal project exploring dynamic UI interactions and clean frontend structuring.',

    overview:
      'DigiX was created as a personal practice project to experiment with JavaScript-driven interactions, responsive layouts, and maintainable frontend structures without relying on a large frontend framework.',

    keyFeatures: [
      'Vanilla JavaScript development',
      'Dynamic UI interactions',
      'Responsive layout',
      'Clean frontend structure',
      'Live web deployment',
    ],
  },

  /* =======================================================
     10. PORTFOLIO
  ======================================================= */

  {
    id: 10,

    title: 'Portfolio Website',

    category: 'Web',

    icon: Globe,

    stack: [
      'React',
      'Tailwind CSS',
      'GitHub Pages',
    ],

    year: '2024',

    status: 'Completed',

    description:
      'A personal developer portfolio built using React and Tailwind CSS to showcase projects, technical skills, and professional experience.',

    overview:
      'This portfolio demonstrates component-based frontend development with React and utility-first styling using Tailwind CSS. It provides a central location for showcasing my software-development work and design projects.',

    keyFeatures: [
      'Responsive portfolio design',
      'React component architecture',
      'Tailwind CSS styling',
      'Project filtering',
      'Interactive project details',
      'GitHub integration',
    ],
  },
];

/* =========================================================
   PROJECT DETAILS COMPONENT
========================================================= */

export default function ProjectDetails({
  project,
  onClose,
  onSelectProject,
}) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
  }, [onClose]);

  if (!project) return null;

  const Icon = project.icon;

  const defaultFeatures = [
    'Modern and responsive design',
    'Optimized performance',
    'Best practices implementation',
    'User-focused experience',
  ];

  const features =
    project.keyFeatures || defaultFeatures;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#2a2a3a] bg-[#0a0a0f] p-6 md:p-8 shadow-2xl shadow-black/50"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a3a] bg-[#16161f] text-slate-400 transition-all hover:border-orange-500/60 hover:text-white"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        <div className="max-w-5xl mx-auto">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="mb-12">

            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">

              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon
                  className="text-white"
                  size={40}
                />
              </div>

              <div className="flex-1">

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 pr-10">
                  {project.title}
                </h1>

                <div className="flex items-center gap-3 flex-wrap">

                  <p className="text-orange-400 font-semibold">
                    {project.category}
                  </p>

                  {project.status && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold">
                      <CheckCircle2 size={12} />
                      {project.status}
                    </span>
                  )}

                  {project.role && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-semibold">
                      <Crown size={12} />
                      {project.role}
                    </span>
                  )}

                </div>
              </div>

            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#16161f] border border-[#2a2a3a] text-orange-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Overview */}
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>

            {/* Main Links */}
            {(project.liveDemo ||
              project.prototype) && (
              <div className="flex flex-wrap gap-3 mt-7">

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}

                {project.prototype && (
                  <a
                    href={project.prototype}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/60 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    <FaFigma size={17} />
                    View Figma Prototype
                  </a>
                )}

              </div>
            )}

          </div>

          {/* =================================================
              PROJECT INFORMATION + DESCRIPTION
          ================================================= */}

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Project Info */}
            <div>

              <h2 className="text-2xl font-bold text-white mb-6">
                Project Information
              </h2>

              <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-6 space-y-6">

                <div>
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                    Category
                  </h3>

                  <p className="text-white font-semibold">
                    {project.category}
                  </p>
                </div>

                <div className="border-t border-[#2a2a3a] pt-6">
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                    Status
                  </h3>

                  <p className="text-emerald-400 font-semibold">
                    {project.status || 'Completed'}
                  </p>
                </div>

                <div className="border-t border-[#2a2a3a] pt-6">
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                    Year
                  </h3>

                  <p className="text-white font-semibold">
                    {project.year}
                  </p>
                </div>

                {project.role && (
                  <div className="border-t border-[#2a2a3a] pt-6">

                    <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                      Project Type
                    </h3>

                    <p className="text-white font-semibold flex items-center gap-2">
                      <Crown
                        size={16}
                        className="text-orange-400"
                      />

                      {project.role}
                    </p>

                  </div>
                )}

                <div className="border-t border-[#2a2a3a] pt-6">

                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-3">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {project.stack.map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-600/10 border border-orange-500/20 text-orange-400 rounded text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* Description */}
            <div>

              <h2 className="text-2xl font-bold text-white mb-6">
                Description
              </h2>

              <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-6">

                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="border-t border-[#2a2a3a] pt-6">

                  <h3 className="font-semibold text-white mb-4">
                    Key Features
                  </h3>

                  <ul className="space-y-3 text-slate-400 text-sm">

                    {features.map(
                      (feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <span className="text-orange-400 mt-0.5">
                            •
                          </span>

                          <span>
                            {feature}
                          </span>
                        </li>
                      )
                    )}

                  </ul>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              FULL PROJECT DETAILS
              MEDICAREX ONLY
          ================================================= */}

          {project.fullProjectDetails &&
            project.fullProjectDetails.length >
              0 && (
              <div className="mb-12">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Code2 size={20} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Full Project Overview
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      Core capabilities of the
                      MediCareX platform
                    </p>
                  </div>

                </div>

                <div className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 md:p-8">

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">

                    {project.fullProjectDetails.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >

                          <div className="mt-1 w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">

                            <CheckCircle2
                              size={13}
                            />

                          </div>

                          <p className="text-sm leading-relaxed text-slate-400">
                            {item}
                          </p>

                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>
            )}

          {/* =================================================
              MY CONTRIBUTION
              MEDICAREX ONLY
          ================================================= */}

          {project.contribution &&
            project.contribution.length > 0 && (
              <div className="mb-12">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Crown size={20} />
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {project.contributionTitle ||
                        'My Contribution'}
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      Areas I personally worked on
                      during the project
                    </p>

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-4">

                  {project.contribution.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-5 hover:border-orange-500/30 transition-colors"
                      >

                        <h3 className="text-white font-semibold mb-2">
                          {item.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.description}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>
            )}

          {/* =================================================
              MEDICAREX TECHNICAL ARCHITECTURE
          ================================================= */}

          {project.id === 1 && (
            <div className="mb-12">

              <h2 className="text-2xl font-bold text-white mb-6">
                Technical Architecture
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-5">

                  <Code2
                    size={22}
                    className="text-orange-400 mb-3"
                  />

                  <h3 className="font-semibold text-white mb-2">
                    Frontend
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    React, Vite, Tailwind CSS,
                    React Native, Expo and
                    Zustand.
                  </p>

                </div>

                <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-5">

                  <Database
                    size={22}
                    className="text-orange-400 mb-3"
                  />

                  <h3 className="font-semibold text-white mb-2">
                    Backend & Data
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    NestJS REST APIs, Firebase
                    Authentication and Cloud
                    Firestore.
                  </p>

                </div>

                <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-5">

                  <BrainCircuit
                    size={22}
                    className="text-orange-400 mb-3"
                  />

                  <h3 className="font-semibold text-white mb-2">
                    AI & Search
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Groq-powered AI assistance,
                    statistical forecasting and
                    Pinecone semantic search.
                  </p>

                </div>

                <div className="bg-[#16161f] border border-[#2a2a3a] rounded-xl p-5">

                  <ShieldCheck
                    size={22}
                    className="text-orange-400 mb-3"
                  />

                  <h3 className="font-semibold text-white mb-2">
                    Integrations
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    PayHere payments,
                    notifications, PDF
                    generation and secure
                    authenticated workflows.
                  </p>

                </div>

              </div>

            </div>
          )}

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <div className="flex flex-wrap justify-center gap-3 mb-16">

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300"
              >
                <ExternalLink size={18} />
                View Live Demo
              </a>
            )}

            {project.prototype && (
              <a
                href={project.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/60 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                <FaFigma size={18} />
                View Figma Prototype
              </a>
            )}

            <a
              href={
                project.github ||
                'https://github.com/gayangidevindi'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161f] border border-[#2a2a3a] hover:border-orange-500/60 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              <FaGithub size={18} />
              View GitHub
            </a>

          </div>

          {/* =================================================
              MORE PROJECTS
          ================================================= */}

          <div className="mt-16 pt-12 border-t border-[#2a2a3a]">

            <h2 className="text-2xl font-bold text-white mb-8">
              More Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {projectsData
                .filter(
                  (p) => p.id !== project.id
                )
                .slice(0, 2)
                .map((relatedProject) => {

                  const RelatedIcon =
                    relatedProject.icon;

                  return (
                    <button
                      key={relatedProject.id}
                      type="button"
                      onClick={() =>
                        onSelectProject(
                          relatedProject
                        )
                      }
                      className="group bg-[#16161f] border border-[#2a2a3a] rounded-xl p-6 text-left hover:border-orange-500/50 transition-all"
                    >

                      <div className="flex items-start gap-4 mb-4">

                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">

                          <RelatedIcon
                            className="text-white"
                            size={20}
                          />

                        </div>

                        <div>

                          <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                            {relatedProject.title}
                          </h3>

                          <p className="text-slate-500 text-sm">
                            {relatedProject.category}
                          </p>

                        </div>

                      </div>

                    </button>
                  );
                })}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}