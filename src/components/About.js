import React from "react";
import {
  MapPin, ArrowRight, Code2, Cpu,
  Smartphone, Palette, Users, Award, ExternalLink, Mail, Download,
  GraduationCap, TrendingUp, School, Target, Sparkles,
  Briefcase, X,
  Coffee, Braces, FileCode2, Server, Terminal, Atom, LayoutTemplate,
  Package, Network, Flame, GitBranch, PenTool, Layers, Bot, Plug, Brain,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import profileImg1 from "../assets/me.jpeg";
import certImg1 from "../assets/port.jpg";
import certImg2 from "../assets/leo.jpg";
import certificateImg1 from "../assets/c1.jpeg";
import certificateImg2 from "../assets/c2.jpeg";
import certificateImg3 from "../assets/c3.jpeg";
import certificateImg4 from "../assets/c4.jpeg";
import certificateImg5 from "../assets/c5.png";

const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Maps each skill label to a representative lucide-react icon, shown in place
// of the two-letter abbreviation badge.
const skillIconMap = {
  Java: Coffee,
  "C/C++": Braces,
  JavaScript: FileCode2,
  PHP: Server,
  Python: Terminal,
  React: Atom,
  "Next.js": LayoutTemplate,
  "HTML/CSS": Code2,
  Flutter: Smartphone,
  Dart: Target,
  "Node.js": Package,
  "REST APIs": Network,
  Firebase: Flame,
  Git: GitBranch,
  ESP32: Cpu,
  Figma: PenTool,
  "UI/UX Prototyping": Layers,
  "Generative AI": Sparkles,
  "AI Application Development": Bot,
  "Model/API Integration": Plug,
  "Python for AI/ML": Brain,
};

const skillGroups = [
  { title: "Languages", items: ["Java", "C/C++", "JavaScript", "PHP", "Python"] },
  { title: "Frontend & Mobile", items: ["React","Next.js", "HTML/CSS", "Flutter", "Dart"] },
  { title: "Backend & Data", items: ["Firebase", "Node.js", "REST APIs"] },
  { title: "Cloud, Tools & Design", items: ["Git", "ESP32", "Figma", "UI/UX Prototyping"] },
];

const skillShowcaseGroups = [
  { title: "Languages", items: skillGroups[0].items },
  { title: "Frontend & Mobile", items: skillGroups[1].items },
  { title: "Backend & APIs", items: ["Node.js", "REST APIs"] },
  { title: "Databases & Cloud", items: ["Firebase"] },
  { title: "Tools & IoT", items: ["Git", "ESP32", "Figma", "UI/UX Prototyping"] },
  { title: "AI / Machine Learning", items: ["Generative AI", "AI Application Development", "Model/API Integration", "Python for AI/ML"] },
];

const alResults = [
  { subject: "Chemistry", grade: "A" },
  { subject: "Combined Maths", grade: "A" },
  { subject: "Physics", grade: "B" },
];

const MEDIUM_PROFILE_URL = "https://medium.com/@gayangidevindi";
const mediumArticles = [];

const currentlyLearning = ["Node.js", "TypeScript", "System Design", "AWS Basics"];

const currentFocusItems = [
  { title: "AI / Machine Learning", description: "Building foundational knowledge through guided study and experimentation." },
  { title: "Generative AI", description: "Exploring practical AI-powered application patterns." },
  { title: "Modern Software Engineering", description: "Developing stronger Node.js, TypeScript, system design, and AWS fundamentals." },
];

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

const leadershipItems = [
  ...volunteerItems,
  { role: "Co-Lead, Programme Committee", org: "MERCon 2026 — University of Moratuwa" },
  ...memberships.map((item) => ({ role: item.role, org: `${item.org} — Term ${item.term}` })),
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

const certificates = [
  { title: "Introduction to Generative AI Studio", organizer: "Google Cloud via Simplilearn SkillUp", date: "August 2026", image: certificateImg1 },
  { title: "Object Oriented Programming Foundations", organizer: "10Pearls University", date: "February 2025", image: certificateImg2 },
  { title: "Python from Zero-to-Hero (Beginner Level)", organizer: "Udemy", date: "February 2025", image: certificateImg3 },
  { title: "Python for Beginners", organizer: "Centre for Open & Distance Learning (CODL), University of Moratuwa", date: "March 2024", image: certificateImg4 },
  { title: "AWS Knowledge: Amazon Q Developer Fundamentals — Training Badge", organizer: "Amazon Web Services Training and Certification via Credly", date: "August 2026", image: certificateImg5 },
];

const featuredProjects = [
  { title: "MediCareX", category: "Full-Stack Software", icon: Code2, desc: "A full-stack pharmacy and supply-chain platform connecting customers, pharmacists, suppliers, and administrators.", stack: ["React", "NestJS", "Firebase"] },
  { title: "Study Helper Bot", category: "AI Web Application", icon: Sparkles, desc: "An AI-powered study workspace with concept tutoring, generated quizzes, and short-answer practice.", stack: ["Next.js", "TypeScript", "Groq"] },
  { title: "Exposure - AI Image Generator", category: "AI Product", icon: Cpu, desc: "A Next.js image-generation platform with prompt enhancement, saved galleries, and credit-based payments.", stack: ["Next.js", "Supabase", "Stripe"] },
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

function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div data-scroll-child className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <SectionLabel text={eyebrow} />
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">{description}</p>}
    </div>
  );
}

function StatusBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-300">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {children}
    </span>
  );
}

function SocialButton({ href, label, children }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#2a2a3a] bg-[#111118]/80 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70">
      {children}
    </a>
  );
}

function TimelineItem({ icon: Icon, children, last = false }) {
  return (
    <div className="relative pl-9">
      {!last && <span className="absolute bottom-[-2rem] left-[0.45rem] top-5 w-px bg-gradient-to-b from-orange-500/60 to-[#2a2a3a]" aria-hidden="true" />}
      <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#0a0a0f] bg-orange-500 text-white shadow-[0_0_0_1px_rgba(251,146,60,0.35)]" aria-hidden="true">
        <Icon size={10} />
      </span>
      {children}
    </div>
  );
}

function SkillChip({ skill }) {
  const Icon = skillIconMap[skill] || Code2;
  return (
    <span className="group/skill inline-flex items-center gap-2 rounded-xl border border-[#2a2a3a] bg-[#0a0a0f]/75 px-3 py-2 text-xs font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/50 hover:bg-orange-500/[0.06] hover:text-orange-100">
      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-orange-500/20 bg-orange-500/10 text-orange-300" aria-hidden="true">
        <Icon size={13} />
      </span>
      {skill}
    </span>
  );
}

const skillCategoryDetails = {
  Languages: { description: "Core programming languages", icon: Code2 },
  "Frontend & Mobile": { description: "Building modern user interfaces", icon: Smartphone },
  "Backend & APIs": { description: "Services and API foundations", icon: Code2 },
  "Databases & Cloud": { description: "Connected data and cloud services", icon: Cpu },
  "Tools & IoT": { description: "Development, hardware, and design workflow", icon: Cpu },
  "AI / Machine Learning": { description: "Current study and application exploration", icon: Sparkles },
};

function SkillCategory({ group }) {
  const details = skillCategoryDetails[group.title];
  const Icon = details.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_16px_40px_-24px_rgba(251,146,60,0.65)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-300">
            <Icon size={20} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{details.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.items.map((skill) => <SkillChip key={skill} skill={skill} />)}
        </div>
      </div>
    </article>
  );
}

function About() {
  const [activeAchievement, setActiveAchievement] = React.useState(null);
  const [activeCertificate, setActiveCertificate] = React.useState(null);
  const [showFullProfile, setShowFullProfile] = React.useState(false);

  // Scroll animation refs
  const heroRef = useScrollAnimation({ threshold: '0.2' });
  const skillsRef = useScrollAnimation({ threshold: '0.2' });
  const servicesRef = useScrollAnimation({ threshold: '0.2' });
  const educationRef = useScrollAnimation({ threshold: '0.2' });
  const volunteersRef = useScrollAnimation({ threshold: '0.2' });
  const achievementsRef = useScrollAnimation({ threshold: '0.2' });
  const certificatesRef = useScrollAnimation({ threshold: '0.2' });
  const featuredProjectsRef = useScrollAnimation({ threshold: '0.2' });
  const currentFocusRef = useScrollAnimation({ threshold: '0.2' });
  const writingRef = useScrollAnimation({ threshold: '0.2' });
  const careerRef = useScrollAnimation({ threshold: '0.2' });
  const contactRef = useScrollAnimation({ threshold: '0.2' });

  // Lock background scroll while the Full Profile modal is open
  React.useEffect(() => {
    if (showFullProfile) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = original; };
    }
  }, [showFullProfile]);

  React.useEffect(() => {
    const handleOverlayKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveAchievement(null);
        setActiveCertificate(null);
      }
    };

    window.addEventListener("keydown", handleOverlayKeyDown);
    return () => window.removeEventListener("keydown", handleOverlayKeyDown);
  }, []);

  return (
    <div id="about" className="flex flex-col bg-[#0a0a0f] text-[#f1f5f9]">

      {/* Hero */}
      <section ref={heroRef} className="order-1 relative overflow-hidden px-6 pb-24 pt-16 md:px-12 md:pb-28 lg:px-24">
        <div className="pointer-events-none absolute right-[-10rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-orange-500/[0.06] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
          <div data-scroll-child className="flex justify-center md:justify-start">
            <div className="relative w-64 sm:w-72 md:w-full md:max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] border border-orange-500/20" />
              <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-2xl border border-orange-500/20 bg-orange-500/[0.05]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[#2a2a3a] bg-[#16161f] p-2 shadow-[0_24px_70px_-35px_rgba(251,146,60,0.5)]">
                <img src={profileImg1} alt="Gayangi Devindi" className="h-full w-full rounded-[1.35rem] object-cover object-top" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/10 bg-[#0a0a0f]/75 px-3 py-2.5 backdrop-blur-md">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Based in Sri Lanka</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" aria-label="Available" />
                </div>
              </div>
            </div>
          </div>
          <div data-scroll-child>
            <SectionLabel text="About Me" />
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <StatusBadge>Open to opportunities</StatusBadge>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-500">Software • IoT • Design</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">Gayangi Devindi</h1>
            <p className="mt-4 text-lg font-medium text-orange-300">Software Engineering Undergraduate | Full-Stack Developer</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={15} className="text-orange-400" />
              <span>University of Moratuwa, Sri Lanka</span>
            </div>
            <div className="my-7 h-px max-w-xl bg-gradient-to-r from-orange-500/40 via-white/10 to-transparent" />
            <div className="max-w-2xl space-y-4 text-slate-400 leading-relaxed">
              <p>I am a full-stack developer and IoT engineer studying Information Technology at the University of Moratuwa. I am passionate about building innovative digital solutions across web development, embedded systems, and mobile application development.</p>
              <p>My journey in technology ranges from developing ESP32-based IoT prototypes to building scalable web applications. I enjoy collaborative environments where creativity and technical excellence come together to solve practical problems.</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <SocialButton href="https://github.com/gayangidevindi" label="GitHub"><ExternalLink size={19} /></SocialButton>
              <SocialButton href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" label="LinkedIn"><LinkedInIcon size={19} /></SocialButton>
              <SocialButton href="mailto:gyangidevindi@gmail.com" label="Email"><Mail size={19} /></SocialButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowFullProfile(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-18px_rgba(251,146,60,0.9)] transition-all hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-500"
              >
                Full Profile <ArrowRight size={16} />
              </button>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[#2a2a3a] bg-[#111118]/70 px-6 py-3 font-semibold text-slate-300 transition-all hover:-translate-y-0.5 hover:border-orange-500/60 hover:text-white">
                <Mail size={16} /> Contact
              </a>
              <a
                href="/Gayangi_Devindi_CV.pdf"
                download="Gayangi_Devindi_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-orange-500/40 px-6 py-3 font-semibold text-orange-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500/10 hover:text-orange-200"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section ref={servicesRef} id="experience" className="order-2 border-t border-[#2a2a3a] bg-[#0d0d13] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Capabilities" title="What I Do" description="I work across the product surface, from interaction design and responsive interfaces to connected systems and the services behind them." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, index) => (
              <article key={s.title} data-scroll-child className="group relative overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50">
                <span className="absolute right-5 top-5 text-xs font-medium text-slate-600">0{index + 1}</span>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-300 transition-transform duration-300 group-hover:-translate-y-1">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
                <div className="mt-6 h-px w-10 bg-orange-500/50 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section ref={educationRef} id="education" className="order-3 scroll-mt-24 border-t border-[#2a2a3a] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Background" title="Education" description="An academic foundation in information technology, backed by focused work across software, hardware, and digital experiences." />
          <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: "3.40", label: "Current CGPA" },
              { value: "1.7792", label: "Z-Score" },
              { value: "150", label: "District Rank" },
              { value: "9 A's", label: "O/L Results" },
            ].map((stat) => (
              <div key={stat.label} data-scroll-child className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-5 text-center transition-colors hover:border-orange-500/50">
                <p className="text-2xl font-black text-orange-300 md:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div data-scroll-child><TimelineItem icon={GraduationCap}>
              <div className="rounded-2xl border border-orange-500/25 bg-[#16161f] p-6 shadow-[0_18px_45px_-35px_rgba(251,146,60,0.8)]">
                <div className="flex items-start gap-3 mb-2">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-3"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">Ongoing</span><span className="text-xs text-slate-600">01</span></div>
                    <h3 className="text-xl font-semibold text-white">BSc in Information Technology</h3>
                    <p className="mt-1 text-orange-300">University of Moratuwa</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">Ongoing education with a focus on full-stack development, IoT systems, and emerging technologies.</p>
                <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full border border-[#2a2a3a] px-3 py-1.5 text-xs text-slate-300">Full-Stack Development</span><span className="rounded-full border border-[#2a2a3a] px-3 py-1.5 text-xs text-slate-300">IoT Systems</span><span className="rounded-full border border-[#2a2a3a] px-3 py-1.5 text-xs text-slate-300">Emerging Technologies</span></div>
              </div>
            </TimelineItem></div>

            <div data-scroll-child><TimelineItem icon={School}>
              <div className="rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-6 transition-colors hover:border-orange-500/40">
                <div className="flex items-start gap-3 mb-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">02 · Completed</p>
                    <h3 className="text-lg font-semibold text-white">G.C.E. Advanced Level — Physical Science Stream</h3>
                    <p className="mt-1 text-orange-300 text-sm">Mahinda Rajapaksa College, Matara</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {alResults.map((result) => (
                    <div key={result.subject} className="rounded-xl border border-[#2a2a3a] bg-[#0a0a0f] p-4 text-center">
                      <p className="mb-1 text-2xl font-black text-orange-300">{result.grade}</p>
                      <p className="text-xs text-slate-500">{result.subject}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-300"><TrendingUp size={14} /> Z-Score: 1.7792</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-300"><Award size={14} /> District Rank: 150</span>
                </div>
              </div>
            </TimelineItem></div>

            <div data-scroll-child><TimelineItem icon={School} last>
              <div className="rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-6 transition-colors hover:border-orange-500/40">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">03 · Completed</p>
                    <h3 className="text-lg font-semibold text-white">G.C.E. Ordinary Level</h3>
                    <p className="mt-1 text-orange-300 text-sm">Mahinda Rajapaksa College, Matara</p>
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-300"><Award size={14} /> 9 A's</span>
                  </div>
                </div>
              </div>
            </TimelineItem></div>

          </div>
        </div>
      </section>

      {/* Leadership & Engagement */}
      <section ref={volunteersRef} id="leadership" className="order-6 border-t border-[#2a2a3a] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Community" title="Leadership & Engagement" description="Leadership, committee, and community involvement alongside technical project work." />
          <div className="relative ml-2 border-l border-orange-500/25 pl-6 sm:ml-4 sm:pl-8">
            <div className="grid gap-3 md:grid-cols-2">
              {leadershipItems.map((item, index) => (
                <article key={`${item.role}-${item.org}`} data-scroll-child className="group relative rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-[#191922]">
                  <span className="absolute -left-[2rem] top-7 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0f] bg-orange-400 sm:-left-[2.4rem]" aria-hidden="true" />
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-300">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.role}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.org}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section ref={achievementsRef} id="achievements" className="order-7 scroll-mt-24 border-t border-[#2a2a3a] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Recognition" title="Achievements" description="Milestones and participation that reflect curiosity, craft, and involvement beyond the classroom." />
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item, idx) => (
              <article key={idx} data-scroll-child className="group overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#16161f] transition-all duration-300 hover:border-orange-500/50">
                <button type="button" onClick={() => setActiveAchievement(item)} className="w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </button>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-orange-300"><Award size={15} /><span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Achievement</span></div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.organizer}</p>
                  <p className="mt-3 text-xs text-slate-500">{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section ref={certificatesRef} id="certificates" className="order-8 scroll-mt-24 border-t border-[#2a2a3a] bg-[#0d0d13] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Learning" title="Certificates" description="A growing record of focused learning across software engineering, cloud, AI, and application development." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((item) => (
              <article key={item.title} data-scroll-child className="group overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#16161f] transition-all duration-300 hover:border-orange-500/50">
                <button type="button" onClick={() => setActiveCertificate(item)} className="block w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </button>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-orange-300"><GraduationCap size={15} /><span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Certification</span></div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.organizer}</p>
                  <p className="mt-3 text-xs text-slate-500">{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={featuredProjectsRef} className="order-5 border-t border-[#2a2a3a] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader eyebrow="Selected Work" title="Featured Projects" description="A few projects where product thinking, engineering, and experimentation meet." />
            <a href="#projects" className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-orange-300 transition-colors hover:text-orange-200">
              See All Projects <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((p, index) => {
              const ProjectIcon = p.icon;
              return (
              <article key={p.title} data-scroll-child className="group relative overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-300 transition-transform duration-300 group-hover:-translate-y-1"><ProjectIcon size={19} /></div>
                  <span className="text-xs font-medium text-slate-600">0{index + 1}</span>
                </div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">{p.category}</p>
                <h3 className="mb-3 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mb-6 min-h-[4.5rem] text-sm leading-relaxed text-slate-400">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#2a2a3a] bg-[#0a0a0f] px-3 py-1.5 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#projects" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-orange-300 transition-colors hover:text-white">Explore project <ArrowRight size={14} /></a>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section ref={skillsRef} id="skills" className="order-4 py-20 px-6 md:px-12 lg:px-24 border-t border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Skills" />
          <div data-scroll-child className="mb-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Technologies and tools I use to build modern, scalable applications.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillShowcaseGroups.map((group) => <div key={group.title} data-scroll-child><SkillCategory group={group} /></div>)}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section ref={currentFocusRef} className="order-9 border-t border-[#2a2a3a] bg-[#0d0d13] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Current Focus" title="What I'm Exploring" description="Currently expanding my knowledge in AI/ML and modern software engineering practices." />
          <div className="grid gap-4 md:grid-cols-3">
            {currentFocusItems.map((item, index) => (
              <article key={item.title} data-scroll-child className="group rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-300"><Sparkles size={18} /></div>
                  <span className="text-xs text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {currentlyLearning.map((technology) => (
              <span key={technology} className="rounded-full border border-orange-500/25 bg-orange-500/[0.06] px-3 py-1.5 text-xs font-medium text-orange-200">{technology}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Writing */}
      <section ref={writingRef} id="writing" className="order-11 border-t border-[#2a2a3a] bg-[#0d0d13] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Knowledge Sharing" title="Notes from the Build" description="I share practical notes and lessons from software development, cloud computing, AI, and projects." />
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
            <div data-scroll-child className="relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#16161f] p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div className="relative flex items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-300"><span className="text-xl font-black">M</span></div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Writing & Knowledge Sharing</p>
                  <h3 className="text-lg font-semibold text-white">Follow my technical writing on Medium</h3>
                  <p className="mt-2 text-sm text-slate-500">Articles will appear here as they are published.</p>
                </div>
              </div>
              <a href={MEDIUM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-500 md:self-auto">Read on Medium <ExternalLink size={16} /></a>
            </div>
          )}
        </div>
      </section>

      {/* Achievement Lightbox Overlay */}
      {activeAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]/95 p-4 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Achievement preview" onClick={() => setActiveAchievement(null)}>
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#2a2a3a] bg-[#16161f] shadow-[0_24px_80px_-30px_rgba(0,0,0,0.9)]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveAchievement(null)}
              aria-label="Close achievement preview"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a3a] bg-[#0a0a0f]/90 text-slate-300 transition-all hover:border-orange-500/50 hover:text-white"
            >
              <X size={18} />
            </button>
            <img
              src={activeAchievement.image}
              alt={activeAchievement.title}
              className="max-h-[72vh] w-full bg-[#0a0a0f] object-contain"
            />
            <div className="border-t border-[#2a2a3a] p-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">Achievement</p>
              <h3 className="mb-3 text-xl font-semibold text-white">{activeAchievement.title}</h3>
              <p className="mb-1 text-slate-400">{activeAchievement.organizer}</p>
              <p className="text-sm text-slate-500">{activeAchievement.date}</p>
            </div>
          </div>
        </div>
      )}

      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]/95 p-4 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setActiveCertificate(null)}>
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#2a2a3a] bg-[#16161f] shadow-[0_24px_80px_-30px_rgba(0,0,0,0.9)]" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setActiveCertificate(null)} aria-label="Close certificate preview" className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a3a] bg-[#0a0a0f]/90 text-slate-300 transition-all hover:border-orange-500/50 hover:text-white">
              <X size={18} />
            </button>
            <img src={activeCertificate.image} alt={activeCertificate.title} className="max-h-[72vh] w-full bg-[#0a0a0f] object-contain" />
            <div className="border-t border-[#2a2a3a] p-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">Certification</p>
              <h3 className="mb-3 text-xl font-semibold text-white">{activeCertificate.title}</h3>
              <p className="mb-1 text-slate-400">{activeCertificate.organizer}</p>
              <p className="text-sm text-slate-500">{activeCertificate.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Full Profile Modal Card */}
      {showFullProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]/90 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="full-profile-title"
          onClick={() => setShowFullProfile(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#2a2a3a] bg-[#16161f] shadow-[0_24px_80px_-30px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowFullProfile(false)}
              aria-label="Close full profile"
              className="absolute right-5 top-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a3a] bg-[#0a0a0f]/90 text-slate-300 transition-all hover:border-orange-500/50 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="relative border-b border-[#2a2a3a] bg-gradient-to-br from-orange-600/10 to-amber-600/10 p-7 md:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <img
                  src={profileImg1}
                  alt="Gayangi Devindi"
                  className="w-20 h-20 rounded-2xl object-cover object-top border border-[#2a2a3a]"
                />
                <div>
                  <p className="text-orange-400 text-xs tracking-widest uppercase mb-1">Full Profile</p>
                  <h2 id="full-profile-title" className="text-2xl font-bold text-white md:text-3xl">Gayangi Devindi</h2>
                  <p className="text-slate-400 text-sm mt-1">Software Engineering Undergraduate · Full-Stack & IoT Developer</p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mt-2">
                    <MapPin size={12} />
                    <span>University of Moratuwa, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 p-7 md:p-10">

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
                  href="/Gayangi_Devindi_CV.pdf"
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
      <section ref={careerRef} className="order-10 border-t border-[#2a2a3a] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Next Chapter" title="Career Objective" description="Building useful products, contributing to thoughtful teams, and growing through real engineering challenges." />
          <div data-scroll-child className="relative overflow-hidden rounded-3xl border border-[#2a2a3a] bg-[#16161f] p-7 md:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/[0.05] blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-3 md:items-start">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <Target size={18} className="text-orange-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Career Focus</p>
                </div>
                <h3 className="mb-4 text-2xl font-bold leading-snug text-white md:text-3xl">
                  Looking to grow as a full-stack engineer who builds real, working products.
                </h3>
                <p className="leading-relaxed text-slate-400">
                  I am seeking internship and entry-level opportunities where I can apply my full-stack
                  and IoT skills to solve practical problems, contribute to a team, and continue learning
                  from experienced engineers. I am open to remote, hybrid, or on-site roles.
                </p>
                <div className="mt-8 border-t border-[#2a2a3a] pt-6">
                  <div className="mb-3 flex items-center gap-2">
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

              <div className="rounded-2xl border border-emerald-500/20 bg-[#0a0a0f] p-6">
                <div className="mb-5 flex items-center gap-2">
                  <StatusBadge>Open to Opportunities</StatusBadge>
                </div>
                <div className="space-y-4">
                  <div><p className="mb-1 text-xs uppercase tracking-wider text-slate-500">Looking for</p><p className="text-sm font-medium text-white">Internships & Entry-Level Roles</p></div>
                  <div className="border-t border-[#2a2a3a] pt-4"><p className="mb-1 text-xs uppercase tracking-wider text-slate-500">Work Mode</p><p className="text-sm font-medium text-white">Remote / Hybrid / On-site</p></div>
                  <div className="border-t border-[#2a2a3a] pt-4"><p className="mb-1 text-xs uppercase tracking-wider text-slate-500">Focus Areas</p><p className="text-sm font-medium text-white">Full-Stack Web & IoT</p></div>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gayangidevindi@gmail.com&su=Let%27s%20work%20together"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-500"
                >
                  <Mail size={16} /> Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section ref={contactRef} className="order-12 border-t border-[#2a2a3a] px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div data-scroll-child className="relative overflow-hidden rounded-3xl border border-orange-500/25 bg-gradient-to-br from-orange-500/[0.08] via-[#16161f] to-[#16161f] p-8 text-center md:p-14">
            <div className="relative mx-auto max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-orange-300">Get In Touch</p>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Let's Connect</h2>
              <p className="mx-auto mb-8 max-w-md leading-relaxed text-slate-400">
              Interested in working together or just want to say hello? My inbox is always open.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-500">
                <Mail size={16} /> Contact Me
              </a>
              <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#2a2a3a] bg-[#0a0a0f]/40 px-8 py-3 font-semibold text-slate-300 transition-all hover:-translate-y-0.5 hover:border-orange-500/60 hover:text-white">
                <ExternalLink size={16} /> GitHub
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;