import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin, ArrowRight, Code2, Cpu,
  Smartphone, Palette, Users, Award, ExternalLink, Mail, Download,
} from "lucide-react";
import myCV from "../assets/my_cv.pdf";
import profileImg1 from "../assets/me.jpg";
import profileImg2 from "../assets/m1.jpg";
import profileImg3 from "../assets/m2.jpg";
import profileImg4 from "../assets/m3.jpg";
import profileImg5 from "../assets/m4.jpg";
import profileImg6 from "../assets/m5.jpg";
import profileImg7 from "../assets/m6.jpg";
import profileImg8 from "../assets/m7.jpg";
import profileImg9 from "../assets/m8.jpg";
import certImg1 from "../assets/port.jpg";
import certImg2 from "../assets/leo.jpg";

const services = [
  { icon: <Code2 size={22} />, title: "Web Development", desc: "Building responsive, full-stack web applications with modern frameworks." },
  { icon: <Cpu size={22} />, title: "IoT Systems", desc: "Designing embedded systems and real-time sensor dashboards with ESP32." },
  { icon: <Smartphone size={22} />, title: "Mobile Apps", desc: "Cross-platform mobile development using Flutter and Firebase." },
  { icon: <Palette size={22} />, title: "UI/UX Design", desc: "Crafting clean, user-centered interfaces with Figma." },
];

const volunteerItems = [
  { role: "Logistics Committee Member", org: "Open Week 2025 — IEEE Student Branch, University of Moratuwa" },
  { role: "Logistics Committee Member", org: "Robotic Day 2025 — IEEE Student Branch, University of Moratuwa" },
  { role: "Company Coordinator", org: "Rise Up Mora 2025 — IEEE Student Branch, University of Moratuwa" },
  { role: "Organizing Team Member", org: "MERCon 2025 — University of Moratuwa" },
  { role: "Active Member", org: "Rotaract Club of University of Moratuwa" },
];

const memberships = [
  {
    role: "Volunteer Management Committee Member",
    org: "IEEE Student Branch, University of Moratuwa",
    term: "25/26",
  },
  {
    role: "Media Committee Member",
    org: "IEEE Women in Engineering (WIE) Affinity Group, University of Moratuwa",
    term: "25/26",
  },
];

const achievements = [
  {
    title: "Third Place — WebX Portfolio Design Competition",
    organizer: "IEEE Women in Engineering (WIE) Affinity Group, University of Moratuwa",
    date: "December 2025",
    image: certImg1,
  },
  {
    title: "Certificate of Participation — AlgoArena",
    organizer: "Leo Club of University of Sri Jayewardenepura",
    date: "2025",
    image: certImg2,
  },
];

const featuredProjects = [
  { title: "Flutter Mobile App", desc: "A cross-platform mobile app to control IoT devices and monitor sensors in real time.", stack: ["Flutter", "Dart", "Firebase"] },
  { title: "Coffee Shop Website", desc: "Full-stack website with dynamic menu, online ordering, and an admin panel.", stack: ["PHP", "HTML", "CSS", "JavaScript"] },
  { title: "Compost Monitoring System", desc: "ESP32-powered system with a React dashboard for real-time compost data monitoring.", stack: ["ESP32", "React", "Arduino IDE"] },
];

const galleryImages = [
  profileImg2, profileImg3, profileImg6, profileImg8,
  profileImg4, profileImg5, profileImg7, profileImg9,
];

const skillsData = [
  { name: "React",  category: "Frontend", color: "from-orange-500 to-amber-500", description: "Building dynamic SPAs and component-driven UIs. Used in portfolio, dashboards, and IoT frontends.", years: "2 years", projects: 4 },
  { name: "JavaScript",  category: "Frontend", color: "from-orange-500 to-amber-500", description: "Core language for web interactivity, async logic, DOM manipulation, and API integration.", years: "2 years", projects: 6 },
  { name: "HTML/CSS",  category: "Frontend", color: "from-orange-500 to-amber-500", description: "Semantic markup and responsive layouts. Foundation of every web project.", years: "3 years", projects: 8 },
  { name: "PHP",  category: "Backend", color: "from-orange-600 to-orange-700", description: "Server-side scripting for dynamic web apps. Used in the coffee shop website backend and admin panel.", years: "1.5 years", projects: 2 },
  { name: "Java",  category: "Backend", color: "from-orange-600 to-orange-700", description: "Object-oriented programming, data structures, and algorithms. Core language studied at university.", years: "2 years", projects: 3 },
  { name: "Flutter",  category: "Mobile", color: "from-amber-500 to-yellow-600", description: "Cross-platform mobile development with Dart. Built IoT control apps with real-time Firebase sync.", years: "1.5 years", projects: 2 },
  { name: "Dart",  category: "Mobile", color: "from-amber-500 to-yellow-600", description: "Primary language for Flutter development. Strongly typed with modern async/await patterns.", years: "1.5 years", projects: 2 },
  { name: "Firebase",  category: "Mobile", color: "from-amber-500 to-yellow-600", description: "Real-time database, authentication, and cloud functions. Backend for Flutter mobile apps.", years: "1.5 years", projects: 3 },
  { name: "ESP32",  category: "Hardware", color: "from-orange-700 to-red-700", description: "Microcontroller programming for IoT systems. Used in compost monitor, soil sensor, and smart home projects.", years: "2 years", projects: 3 },
  { name: "C/C++",  category: "Hardware", color: "from-orange-700 to-red-700", description: "Low-level programming for Arduino and ESP32 firmware. Sensor interfacing and hardware control.", years: "2 years", projects: 3 },
  { name: "Python",  category: "Hardware", color: "from-orange-700 to-red-700", description: "Data processing scripts, automation, and rapid prototyping for hardware and general tasks.", years: "1 year", projects: 2 },
  { name: "Figma",  category: "Design", color: "from-yellow-500 to-orange-500", description: "UI/UX design, wireframing, prototyping, and component libraries for mobile and web apps.", years: "1 year", projects: 2 },
  { name: "Git",  category: "Tools", color: "from-orange-500 to-orange-600", description: "Version control, branching strategies, pull requests, and collaborative development workflows.", years: "2 years", projects: 8 },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Hardware", "Design", "Tools"];

const quizQuestions = [
  { question: "Which language is used to build Flutter apps?", options: ["Java", "Dart", "Swift", "Kotlin"], answer: "Dart" },
  { question: "What does ESP32 stand for?", options: ["A microcontroller by Espressif", "A JavaScript framework", "A Python library", "A cloud service"], answer: "A microcontroller by Espressif" },
  { question: "Which tool is used for UI/UX prototyping in this stack?", options: ["Adobe XD", "Sketch", "Figma", "InVision"], answer: "Figma" },
  { question: "What is React primarily used for?", options: ["Server-side scripting", "Building user interfaces", "Database management", "Hardware programming"], answer: "Building user interfaces" },
  { question: "Which language runs natively on Arduino and ESP32?", options: ["Python", "Java", "C/C++", "JavaScript"], answer: "C/C++" },
  { question: "What does Firebase provide for mobile apps?", options: ["UI components", "Real-time database and auth", "CSS styling", "Hardware drivers"], answer: "Real-time database and auth" },
  { question: "Which language is PHP used for?", options: ["Frontend styling", "Mobile development", "Server-side scripting", "IoT firmware"], answer: "Server-side scripting" },
];

function SectionLabel({ text }) {
  return (
    <div className="mb-6">
      <p className="text-orange-400 text-xs tracking-widest uppercase mb-2">{text}</p>
      <div className="h-px w-12 bg-orange-500" />
    </div>
  );
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedSkill, setSelectedSkill] = React.useState(null);
  const [quizMode, setQuizMode] = React.useState(false);
  const [quizIndex, setQuizIndex] = React.useState(0);
  const [quizScore, setQuizScore] = React.useState(0);
  const [quizAnswered, setQuizAnswered] = React.useState(null);
  const [quizFinished, setQuizFinished] = React.useState(false);


  React.useEffect(() => {
    
  }, [selectedSkill]);

  const filtered = activeCategory === "All"
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const handleAnswer = (option) => {
    if (quizAnswered !== null) return;
    setQuizAnswered(option);
    if (option === quizQuestions[quizIndex].answer) {
      setQuizScore(prev => prev + 1);
    }
    setTimeout(() => {
      if (quizIndex + 1 >= quizQuestions.length) {
        setQuizFinished(true);
      } else {
        setQuizIndex(prev => prev + 1);
        setQuizAnswered(null);
      }
    }, 900);
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizAnswered(null);
    setQuizFinished(false);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-orange-400 text-xs tracking-widest uppercase mb-2">Skills</p>
            <div className="h-px w-12 bg-orange-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
          </div>
          <button
            onClick={() => { setQuizMode(!quizMode); resetQuiz(); setSelectedSkill(null); }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
              quizMode
                ? "bg-orange-600 border-orange-500 text-white"
                : "bg-[#16161f] border-[#2a2a3a] text-slate-300 hover:border-orange-500/60 hover:text-white"
            }`}
          >
            {quizMode ? "Exit Quiz" : "Test Your Knowledge"}
          </button>
        </div>

        {/* QUIZ MODE */}
        {quizMode ? (
          <div className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-8 max-w-2xl mx-auto">
            {quizFinished ? (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-3xl font-black mx-auto mb-4">
                  {quizScore}/{quizQuestions.length}
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {quizScore >= 6 ? "Outstanding!" : quizScore >= 4 ? "Well Done!" : "Keep Learning!"}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  You scored {quizScore} out of {quizQuestions.length} on the tech stack quiz.
                </p>
                <button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-8 py-3 rounded-xl transition-all"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-orange-400 text-xs tracking-widest uppercase">Question {quizIndex + 1} of {quizQuestions.length}</span>
                  <span className="text-slate-400 text-xs">Score: {quizScore}</span>
                </div>
                <div className="w-full bg-[#0a0a0f] rounded-full h-1.5 mb-6">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
                    style={{ width: `${(quizIndex / quizQuestions.length) * 100}%` }}
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mb-6">{quizQuestions[quizIndex].question}</h3>
                <div className="flex flex-col gap-3">
                  {quizQuestions[quizIndex].options.map((option) => {
                    let style = "bg-[#0a0a0f] border border-[#2a2a3a] text-slate-300 hover:border-orange-500/50 hover:text-white";
                    if (quizAnswered !== null) {
                      if (option === quizQuestions[quizIndex].answer) style = "bg-green-500/10 border border-green-500 text-green-400";
                      else if (option === quizAnswered) style = "bg-red-500/10 border border-red-500 text-red-400";
                      else style = "bg-[#0a0a0f] border border-[#2a2a3a] text-slate-500";
                    }
                    return (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={`w-full text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${style}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setSelectedSkill(null); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-orange-600 border-orange-500 text-white"
                      : "bg-[#16161f] border-[#2a2a3a] text-slate-400 hover:text-white hover:border-orange-500/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Skill pills */}
              <div className="lg:col-span-2 flex flex-wrap gap-3 content-start">
                {filtered.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                      selectedSkill?.name === skill.name
                        ? "bg-orange-600/20 border-orange-500 text-white"
                        : "bg-[#16161f] border-[#2a2a3a] text-slate-300 hover:text-white hover:border-orange-500/50"
                    }`}
                  >
                    {skill.name}
                    <span className={`ml-2 text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      
                    </span>
                  </button>
                ))}
              </div>

              {/* Detail panel */}
              <div className="lg:col-span-1">
                {selectedSkill ? (
                  <div className="bg-[#16161f] border border-orange-500/30 rounded-2xl p-6 sticky top-24">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedSkill.color} flex items-center justify-center text-white font-bold text-sm mb-4`}>
                      {selectedSkill.name.slice(0, 2)}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{selectedSkill.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#0a0a0f] border border-[#2a2a3a] text-orange-400 mb-4 inline-block">
                      {selectedSkill.category}
                    </span>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{selectedSkill.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl p-3 text-center">
                        <p className="text-white font-bold text-lg">{selectedSkill.years}</p>
                        <p className="text-slate-500 text-xs mt-0.5">Experience</p>
                      </div>
                      <div className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl p-3 text-center">
                        <p className="text-white font-bold text-lg">{selectedSkill.projects}+</p>
                        <p className="text-slate-500 text-xs mt-0.5">Projects</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#16161f] border border-dashed border-[#2a2a3a] rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full min-h-48">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-sm">Click any skill to see details</p>
                    <p className="text-slate-600 text-xs mt-1">or try the quiz to test your knowledge</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function About() {
  const [activeAchievement, setActiveAchievement] = React.useState(null);

  return (
    <main className="bg-[#0a0a0f] text-[#f1f5f9]">

      {/* Hero */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 blur-2xl opacity-30" />
              <img
                src={profileImg1}
                alt="Gayangi Devindi"
                className="relative w-full h-full object-cover object-top rounded-2xl border border-[#2a2a3a]"
              />
            </div>
          </div>
          <div>
            <SectionLabel text="About Me" />
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Gayangi Devindi</h1>
            <p className="text-orange-400 font-medium mb-3">Full Stack Developer &amp; IoT Engineer</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <MapPin size={14} />
              <span>University of Moratuwa, Sri Lanka</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              I am an undergraduate at the University of Moratuwa, Faculty of Information Technology,
              with a strong interest in IoT, web, and mobile development. I enjoy creating innovative
              projects that bridge hardware and software to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/aboutind" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Full Profile <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-[#2a2a3a] hover:border-orange-500 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all">
                <Mail size={16} /> Contact
              </Link>
              <a
                href={myCV}
                download="Gayangi_Devindi_CV.pdf"
                className="inline-flex items-center gap-2 border border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 text-orange-400 hover:text-orange-300 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Services" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What I Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white mb-4">
                  {s.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Gallery" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Moments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-[#2a2a3a] aspect-square group">
                <img
                  src={img}
                  alt={`Moment ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Community" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Volunteering</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {volunteerItems.map((v, i) => (
              <div key={i} className="flex gap-4 bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 hover:border-orange-500/50 transition-all">
                <div className="mt-1 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{v.role}</p>
                  <p className="text-slate-400 text-sm mt-1">{v.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships & Achievements */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Achievements" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Memberships & Achievements</h2>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Memberships</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {memberships.map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 hover:border-orange-500/50 transition-all">
                    <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                      <Award size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.role}</p>
                      <p className="text-slate-400 text-sm mt-1">{item.org}</p>
                      <p className="text-slate-500 text-xs mt-2">Term {item.term}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {achievements.map((item, idx) => (
                  <div key={idx} className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all">
                    {item.image && (
                      <button
                        type="button"
                        onClick={() => setActiveAchievement(item)}
                        className="w-full overflow-hidden"
                      >
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                      </button>
                    )}
                    <div className="p-6">
                      <p className="text-white font-semibold mb-2">{item.title}</p>
                      <p className="text-slate-400 text-sm mb-3">{item.organizer}</p>
                      <p className="text-slate-500 text-xs">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Work" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <Link to="/projects" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors">
              See All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.title} className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#0a0a0f] border border-[#2a2a3a] text-orange-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills — interactive with quiz */}
      <SkillsSection />

      {/* Achievement Lightbox Overlay */}
      {activeAchievement && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0f]/95 flex items-center justify-center p-6" onClick={() => setActiveAchievement(null)}>
          <div className="relative max-w-4xl w-full bg-[#16161f] border border-[#2a2a3a] rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveAchievement(null)}
              className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0f] border border-[#2a2a3a] text-slate-300 hover:text-white hover:border-orange-500/50 transition-all"
            >
              ✕
            </button>
            <img
              src={activeAchievement.image}
              alt={activeAchievement.title}
              className="w-full max-h-[80vh] object-contain bg-[#0a0a0f]"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{activeAchievement.title}</h3>
              <p className="text-slate-400 mb-1">{activeAchievement.organizer}</p>
              <p className="text-slate-500 text-sm">{activeAchievement.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#16161f] border border-[#2a2a3a] rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/10 pointer-events-none" />
            <p className="text-orange-400 text-xs tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Interested in working together or just want to say hello? My inbox is always open.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-8 py-3 rounded-xl transition-all">
                <Mail size={16} /> Contact Me
              </Link>
              <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#2a2a3a] hover:border-orange-500 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all">
                <ExternalLink size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;