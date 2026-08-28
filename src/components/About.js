import React from "react";
import {
  MapPin, ArrowRight, Code2, Cpu,
  Smartphone, Palette, Users, Award, ExternalLink, Mail, Download,
  GraduationCap, TrendingUp, School, Target, Circle, Sparkles,
  Briefcase, X,
} from "lucide-react";
import myCV from "../assets/Gayangi_Devindi_CV.pdf";
import profileImg1 from "../assets/me.jpeg";
import profileImg2 from "../assets/m1.jpg";
import profileImg3 from "../assets/m2.jpg";
import profileImg4 from "../assets/m3.jpg";
import profileImg5 from "../assets/m4.jpg";
import profileImg6 from "../assets/m5.jpg";
import profileImg7 from "../assets/m6.jpg";
import profileImg8 from "../assets/m7.jpg";
import profileImg9 from "../assets/f3.jpg";
import certImg1 from "../assets/port.jpg";
import certImg2 from "../assets/leo.jpg";

const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const skillGroups = [
  { title: "Languages", items: ["Java", "C/C++", "JavaScript", "PHP", "Python"] },
  { title: "Frontend & Mobile", items: ["React", "HTML/CSS", "Flutter", "Dart"] },
  { title: "Backend & Data", items: ["Firebase", "Node.js", "REST APIs"] },
  { title: "Cloud, Tools & Design", items: ["Git", "ESP32", "Figma", "UI/UX Prototyping"] },
];

const alResults = [
  { subject: "Chemistry", grade: "A" },
  { subject: "Combined Maths", grade: "A" },
  { subject: "Physics", grade: "B" },
];

const MEDIUM_PROFILE_URL = "https://medium.com/@gayangidevindi";
const mediumArticles = [];

const currentlyLearning = ["Node.js", "TypeScript", "System Design", "AWS Basics"];

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

// Data used by the "Full Profile" modal card
const fullProfileHighlights = [
  { label: "Current CGPA", value: "3.40" },
  { label: "Z-Score", value: "1.7792" },
  { label: "District Rank", value: "150" },
  { label: "O/L Results", value: "9 A's" },
];

const fullProfileEducation = [
  {
    degree: "BSc in Information Technology",
    institute: "University of Moratuwa",
    period: "Ongoing",
    detail: "Focus on full-stack development, IoT systems, and emerging technologies.",
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    institute: "Mahinda Rajapaksa College, Matara",
    period: "Completed",
    detail: "Chemistry (A), Combined Maths (A), Physics (B).",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institute: "Mahinda Rajapaksa College, Matara",
    period: "Completed",
    detail: "9 A's.",
  },
];

function SectionLabel({ text }) {
  return (
    <div className="mb-6">
      <p className="text-orange-400 text-xs tracking-widest uppercase mb-2">{text}</p>
      <div className="h-px w-12 bg-orange-500" />
    </div>
  );
}

function About() {
  const [activeAchievement, setActiveAchievement] = React.useState(null);
  const [showFullProfile, setShowFullProfile] = React.useState(false);

  // Lock background scroll while the Full Profile modal is open
  React.useEffect(() => {
    if (showFullProfile) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = original; };
    }
  }, [showFullProfile]);

  return (
    <div id="about" className="bg-[#0a0a0f] text-[#f1f5f9]">

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
            <p className="text-orange-400 font-medium mb-3">Software Engineering Undergraduate | Full-Stack Developer</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <MapPin size={14} />
              <span>University of Moratuwa, Sri Lanka</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              I am a full-stack developer and IoT engineer studying Information Technology at the
              University of Moratuwa. I am passionate about building innovative digital solutions
              across web development, embedded systems, and mobile application development.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My journey in technology ranges from developing ESP32-based IoT prototypes to building
              scalable web applications. I enjoy collaborative environments where creativity and
              technical excellence come together to solve practical problems.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <ExternalLink size={19} />
              </a>
              <a href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <LinkedInIcon size={19} />
              </a>
              <a href="mailto:gyangidevindi@gmail.com" aria-label="Email" className="w-11 h-11 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <Mail size={19} />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setShowFullProfile(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Full Profile <ArrowRight size={16} />
              </button>
              <a href="#contact" className="inline-flex items-center gap-2 border border-[#2a2a3a] hover:border-orange-500 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all">
                <Mail size={16} /> Contact
              </a>
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
      <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
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

      {/* Education */}
      <section id="education" className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Background" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Education</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { value: "3.40", label: "Current CGPA" },
              { value: "1.7792", label: "Z-Score" },
              { value: "150", label: "District Rank" },
              { value: "9 A's", label: "O/L Results" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 text-center hover:border-orange-500/50 transition-colors">
                <p className="text-3xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="relative pl-8 space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-[#2a2a3a]">
            <div className="relative">
              <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 ring-4 ring-[#0a0a0f]" />
              <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">BSc in Information Technology</h3>
                    <p className="text-orange-400 text-sm">University of Moratuwa</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-2">Ongoing education with a focus on full-stack development, IoT systems, and emerging technologies.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 ring-4 ring-[#0a0a0f]" />
              <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <School className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">G.C.E. Advanced Level — Physical Science Stream</h3>
                    <p className="text-orange-400 text-sm">Mahinda Rajapaksa College, Matara</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {alResults.map((result) => (
                    <div key={result.subject} className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl p-4 text-center">
                      <p className={`text-2xl font-black mb-1 ${result.grade === "A" ? "text-orange-400" : "text-amber-500"}`}>{result.grade}</p>
                      <p className="text-slate-500 text-xs">{result.subject}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs font-semibold"><TrendingUp size={14} /> Z-Score: 1.7792</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs font-semibold"><Award size={14} /> District Rank: 150</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 ring-4 ring-[#0a0a0f]" />
              <div className="bg-[#16161f] border border-[#2a2a3a] p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
                <div className="flex items-start gap-3">
                  <School className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">G.C.E. Ordinary Level</h3>
                    <p className="text-orange-400 text-sm">Mahinda Rajapaksa College, Matara</p>
                    <span className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs font-semibold"><Award size={14} /> 9 A's</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="certifications" className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
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
            <a href="#projects" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors">
              See All Projects <ArrowRight size={16} />
            </a>
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

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Skills" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-5 hover:border-orange-500/50 transition-colors">
                <h3 className="text-white font-semibold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="bg-[#0a0a0f] border border-[#2a2a3a] text-slate-300 rounded-full px-3 py-1.5 text-xs font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Writing */}
      <section id="writing" className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Technical Writing" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notes from the Build</h2>
          <p className="text-slate-400 max-w-2xl mb-8">I share practical notes and lessons from software development, cloud computing, AI, and projects.</p>
          {mediumArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {mediumArticles.map((article) => (
                <article key={article.title} className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6">
                  <p className="text-orange-400 text-xs uppercase tracking-widest mb-3">{article.category}</p>
                  <h3 className="text-white font-semibold text-lg mb-2">{article.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{article.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Follow my technical writing on Medium</h3>
                <p className="text-slate-500 text-sm">Articles will appear here as they are published.</p>
              </div>
              <a href={MEDIUM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-5 py-3 rounded-xl transition-colors">Read on Medium <ExternalLink size={16} /></a>
            </div>
          )}
        </div>
      </section>

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

      {/* Full Profile Modal Card */}
      {showFullProfile && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowFullProfile(false)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[88vh] overflow-y-auto bg-[#16161f] border border-[#2a2a3a] rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowFullProfile(false)}
              aria-label="Close full profile"
              className="absolute top-5 right-5 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0f] border border-[#2a2a3a] text-slate-300 hover:text-white hover:border-orange-500/50 transition-all"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="relative p-8 md:p-10 border-b border-[#2a2a3a] bg-gradient-to-br from-orange-600/10 to-amber-600/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <img
                  src={profileImg1}
                  alt="Gayangi Devindi"
                  className="w-20 h-20 rounded-2xl object-cover object-top border border-[#2a2a3a]"
                />
                <div>
                  <p className="text-orange-400 text-xs tracking-widest uppercase mb-1">Full Profile</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Gayangi Devindi</h2>
                  <p className="text-slate-400 text-sm mt-1">Software Engineering Undergraduate · Full-Stack & IoT Developer</p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mt-2">
                    <MapPin size={12} />
                    <span>University of Moratuwa, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-10">

              {/* Professional Summary */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={16} className="text-orange-400" />
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Professional Summary</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Full-stack developer and IoT engineer pursuing a BSc in Information Technology at the
                  University of Moratuwa, with hands-on experience across web development, embedded
                  systems, and mobile applications. Comfortable working end-to-end — from designing
                  interfaces in Figma to building REST APIs and deploying ESP32-based hardware
                  integrations. Active contributor within the IEEE Student Branch and Rotaract Club,
                  balancing technical delivery with team leadership and community involvement.
                </p>
              </div>

              {/* Key Stats */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Academic Highlights</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {fullProfileHighlights.map((stat) => (
                    <div key={stat.label} className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl p-4 text-center">
                      <p className="text-xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">{stat.value}</p>
                      <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={16} className="text-orange-400" />
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Education</h3>
                </div>
                <div className="space-y-3">
                  {fullProfileEducation.map((edu) => (
                    <div key={edu.degree} className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <p className="text-white font-medium text-sm">{edu.degree}</p>
                        <span className="text-orange-400 text-xs font-medium">{edu.period}</span>
                      </div>
                      <p className="text-slate-500 text-xs mt-1">{edu.institute}</p>
                      <p className="text-slate-400 text-sm mt-2">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skills */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Core Skills</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl p-4">
                      <p className="text-slate-300 text-xs font-semibold uppercase tracking-wide mb-2">{group.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-[#16161f] border border-[#2a2a3a] text-orange-400">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Objective */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-orange-400" />
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Career Objective</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Seeking internship and entry-level opportunities to apply full-stack and IoT skills
                  to real-world problems, contribute within a team, and grow under experienced
                  engineers. Open to remote, hybrid, or on-site roles.
                </p>
              </div>

              {/* Contact & CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-[#2a2a3a]">
                <div className="flex items-center gap-3">
                  <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                    <ExternalLink size={17} />
                  </a>
                  <a href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                    <LinkedInIcon size={17} />
                  </a>
                  <a href="mailto:gyangidevindi@gmail.com" aria-label="Email" className="w-10 h-10 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                    <Mail size={17} />
                  </a>
                </div>
                <a
                  href={myCV}
                  download="Gayangi_Devindi_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  <Download size={16} /> Download Full CV
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Career Objective & Availability */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#16161f] border border-[#2a2a3a] rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-600/5 pointer-events-none" />
            <div className="relative grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Target size={18} className="text-orange-400" />
                  <p className="text-orange-400 text-xs tracking-widest uppercase">Career Objective</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  Looking to grow as a full-stack engineer who builds real, working products.
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  I am seeking internship and entry-level opportunities where I can apply my full-stack
                  and IoT skills to solve practical problems, contribute to a team, and continue learning
                  from experienced engineers. I am open to remote, hybrid, or on-site roles.
                </p>
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-orange-400" />
                    <p className="text-slate-300 text-sm font-semibold">Currently Learning</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentlyLearning.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-[#0a0a0f] border border-[#2a2a3a] text-slate-300 text-xs rounded-full hover:border-orange-500/50 hover:text-orange-400 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <Circle className="absolute inline-flex h-full w-full text-green-500 fill-green-500 animate-ping opacity-75" size={10} />
                    <Circle className="relative inline-flex h-2.5 w-2.5 text-green-500 fill-green-500" size={10} />
                  </span>
                  <span className="text-green-400 text-sm font-semibold">Open to Opportunities</span>
                </div>
                <div className="space-y-4">
                  <div><p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Looking for</p><p className="text-white text-sm font-medium">Internships & Entry-Level Roles</p></div>
                  <div className="border-t border-[#2a2a3a] pt-4"><p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Work Mode</p><p className="text-white text-sm font-medium">Remote / Hybrid / On-site</p></div>
                  <div className="border-t border-[#2a2a3a] pt-4"><p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Focus Areas</p><p className="text-white text-sm font-medium">Full-Stack Web & IoT</p></div>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gayangidevindi@gmail.com&su=Let%27s%20work%20together"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
                >
                  <Mail size={16} /> Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-8 py-3 rounded-xl transition-all">
                <Mail size={16} /> Contact Me
              </a>
              <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#2a2a3a] hover:border-orange-500 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all">
                <ExternalLink size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;