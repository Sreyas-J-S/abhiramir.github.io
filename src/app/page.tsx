"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Code2,
  BrainCircuit,
  Linkedin,
  Mail,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  LineChart,
  BarChart3,
  TrendingUp,
  Target
} from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { InsightTerminal } from "@/components/InsightTerminal";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      <ParticleBackground />

      {/* Fixed Background Gradients */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#020617]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/10 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">A</div>
            <span className="text-xl font-bold font-syne tracking-tight text-white">
              ABHIRAMI <span className="text-cyan-500">R</span>
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="mailto:rsabhirami189@gmail.com"
              className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 font-bold"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-40 overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-7xl mx-auto flex flex-col gap-16 items-center"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="relative z-10 w-full"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-inner shadow-cyan-500/10">
                <Cpu size={14} className="animate-pulse" /> Data Science Engineering
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-7xl md:text-9xl font-black font-syne leading-none text-white mb-10 tracking-tighter"
              >
                Data <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500">Science<span className="text-white">.</span></span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-medium">
                Pioneering machine learning solutions to decode complex data patterns and drive intelligent decisions.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-6 items-center">
                <a href="#projects" className="group relative flex items-center gap-3 px-10 py-5 bg-cyan-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-xl shadow-cyan-500/20 active:scale-95">
                  Explore Work <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/abhirami-r-4b641828b" target="_blank" className="p-5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all text-slate-400 hover:text-white bg-white/5 backdrop-blur-sm group">
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="mailto:rsabhirami189@gmail.com" className="p-5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all text-slate-400 hover:text-white bg-white/5 backdrop-blur-sm group">
                    <Mail size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 to-fuchsia-500/10 rounded-full blur-[100px] animate-pulse" />
              <div className="relative z-10 p-8 rounded-[3rem] border border-white/10 bg-slate-900/40 backdrop-blur-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-lg shadow-rose-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-lg shadow-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-lg shadow-emerald-500/20" />
                  <span className="ml-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Live Data Analysis</span>
                </div>

                <div className="grid grid-cols-12 gap-3 h-64 items-end">
                  {[35, 65, 45, 85, 25, 95, 55, 75, 40, 60, 30, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: 0.2 + (i * 0.05),
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className={`rounded-t-lg w-full ${i % 3 === 0 ? 'bg-cyan-400/60' : i % 3 === 1 ? 'bg-fuchsia-400/60' : 'bg-white/20'} shadow-lg shadow-white/5`}
                    />
                  ))}
                </div>

                <div className="mt-8 flex justify-between items-center text-slate-500 font-mono text-[10px] tracking-tighter">
                  <span>00:00:01:04</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">+12.5% ACCURACY</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-56 h-56 border border-white/5 rounded-full border-dashed"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Insight Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-black font-syne text-white mb-4 uppercase tracking-[0.3em]">The Engine Room</h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">How I process reality into data</p>
            </motion.div>
            <InsightTerminal />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-black font-syne text-white mb-10 inline-flex flex-col">
                    <span className="text-cyan-500 text-xs tracking-[0.4em] uppercase mb-4">Background</span>
                    Core Mission
                  </h2>
                  <div className="space-y-8 text-slate-400 leading-relaxed text-xl font-medium">
                    <p>
                      I am a motivated Data Science Engineer with a passion for problem-solving and technical innovation.
                      Currently based at <span className="text-white underline decoration-cyan-500/30 underline-offset-8">Arcite Project Management Consultancy</span>,
                      I specialize in converting unstructured data into actionable insights.
                    </p>
                    <p>
                      My background in Computer Science provided a solid foundation in engineering principles.
                      I hold certifications in <span className="text-cyan-400">Python for Data Science</span> (Coursera) and
                      <span className="text-cyan-400">Java Programming</span> (ICT Academy).
                    </p>
                    <div className="pt-6 flex gap-10">
                      <div>
                        <div className="text-3xl font-black text-white mb-1">2021-2025</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">B.Tech CSE</div>
                      </div>
                      <div className="w-px h-12 bg-white/10" />
                      <div>
                        <div className="text-3xl font-black text-white mb-1">98%</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Model Precision</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full" />
                {[
                  { label: "Role", value: "Data Science Trainee", icon: Briefcase, color: "text-cyan-400", bg: "bg-cyan-400/5" },
                  { label: "Academia", value: "B.Tech CSE", icon: GraduationCap, color: "text-fuchsia-400", bg: "bg-fuchsia-400/5", sub: "APJ Abdul Kalam Tech Univ" },
                  { label: "Systems", value: "Predictive ML", icon: Target, color: "text-amber-400", bg: "bg-amber-400/5" },
                  { label: "Flow", value: "Automated EDA", icon: BrainCircuit, color: "text-emerald-400", bg: "bg-emerald-400/5" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-8 rounded-[2.5rem] ${stat.bg} border border-white/5 backdrop-blur-sm transition-all relative overflow-hidden group`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
                    <stat.icon className={`${stat.color} mb-6`} size={32} />
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-2">{stat.label}</div>
                    <div className="text-white font-black text-lg leading-tight">{stat.value}</div>
                    {stat.sub && <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-1">{stat.sub}</div>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black font-syne text-white mb-6 uppercase tracking-tighter">Technical Stack</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-4 gap-10">
              {[
                { title: "Languages", skills: ["Python", "SQL", "Java", "HTML"], icon: Code2, gradient: "from-blue-500 to-cyan-500" },
                { title: "Analytics", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"], icon: BarChart3, gradient: "from-fuchsia-500 to-purple-500" },
                { title: "Intelligence", skills: ["Scikit-learn", "Supervised Learning", "EDA", "Statistical Models"], icon: LineChart, gradient: "from-cyan-500 to-teal-500" },
                { title: "Core & OS", skills: ["Problem Solving", "Team Work", "Linux", "Windows/Mac"], icon: Award, gradient: "from-amber-500 to-orange-500" },
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[3rem] bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group shadow-2xl backdrop-blur-md"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-400 text-sm font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
              <div className="max-w-2xl">
                <div className="text-cyan-500 font-black text-[10px] tracking-[0.4em] uppercase mb-4">Portfolio</div>
                <h2 className="text-6xl md:text-8xl font-black font-syne text-white mb-8 leading-[0.85] tracking-tighter">Engineering <br />Solutions<span className="text-cyan-500">.</span></h2>
                <p className="text-slate-400 text-xl font-medium max-w-lg leading-relaxed">
                  A selection of technical implementations focusing on predictive modeling and data system architecture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Crop Recommendation System",
                  desc: "ML model recommending crops based on soil nutrients and environmental factors (NPK, pH, Rainfall). Optimized for precision in diverse climates.",
                  tags: ["Python", "Scikit-learn", "Pandas"],
                  gradient: "from-emerald-500/40 to-cyan-500/40"
                },
                {
                  title: "Fraud Detection Engine",
                  desc: "High-performance predictive system detecting fraudulent transactions with advanced precision/recall optimization for financial safety.",
                  tags: ["ML", "Data Analysis", "Python"],
                  gradient: "from-rose-500/40 to-orange-500/40"
                },
                {
                  title: "Diabetes Prediction",
                  desc: "Predictive health analytics model identifying diabetes risk factors using clinical data parameters and statistical modeling.",
                  tags: ["Scikit-learn", "NumPy", "EDA"],
                  gradient: "from-blue-500/40 to-indigo-500/40"
                },
                {
                  title: "Campus Hub",
                  desc: "Integrated digital platform for campus activities and resource management optimization. Built with scalable architecture.",
                  tags: ["Web Dev", "MySQL", "Java"],
                  gradient: "from-amber-500/40 to-yellow-500/40"
                },
              ].map((project, i) => (
                <ProjectCard key={i} {...project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black font-syne text-white mb-4 uppercase tracking-tighter">Timeline</h2>
              <p className="text-slate-500 font-bold text-xs tracking-[0.3em] uppercase">The path of progression</p>
            </div>
            <div className="space-y-16 relative">
              <div className="absolute left-[-2px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

              {[
                {
                  role: "Data Science Engineer Trainee",
                  company: "Arcite Project Management Consultancy",
                  period: "2025 - Present",
                  align: "left",
                  details: [
                    "Cleaning and transforming unstructured data using Pandas.",
                    "Executing Exploratory Data Analysis (EDA) and visualizations.",
                    "Implementing supervised learning algorithms on real-world datasets.",
                    "Optimizing business decision-making through data-driven insights."
                  ]
                },
                {
                  role: "Java Programming Intern",
                  company: "ICT Academy",
                  period: "May 2023 - June 2023",
                  align: "right",
                  details: [
                    "Developed Event Management System with Java Swing & MySQL.",
                    "Designed event scheduling and registration architecture.",
                    "Collaborated in a structured enterprise environment."
                  ]
                }
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: exp.align === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${exp.align === 'left' ? 'md:items-end' : 'md:items-start'} group`}
                >
                  <div className="absolute left-[-6px] md:left-1/2 top-2 w-3 h-3 rounded-full bg-cyan-500 md:-translate-x-1/2 shadow-[0_0_20px_rgba(6,182,212,0.6)] z-10 group-hover:scale-150 transition-transform" />

                  <div className={`w-full md:w-[45%] p-10 rounded-[2.5rem] bg-slate-900/60 border border-white/5 backdrop-blur-md group-hover:border-cyan-500/20 transition-all shadow-2xl ${exp.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="mb-4 text-cyan-500 font-black text-[10px] tracking-[0.3em] uppercase">{exp.period}</div>
                    <h3 className="text-3xl font-black text-white mb-2 leading-tight">{exp.role}</h3>
                    <div className="text-slate-400 font-bold text-sm mb-8 tracking-widest">{exp.company}</div>
                    <ul className={`space-y-4 ${exp.align === 'left' ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                      {exp.details.map((detail, j) => (
                        <li key={j} className={`text-slate-500 text-sm font-medium leading-relaxed flex gap-3 max-w-sm ${exp.align === 'left' ? 'md:flex-row-reverse md:text-right' : 'flex-row text-left'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-cyan-500/5 -z-10 blur-[150px]" />
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-9xl font-black font-syne text-white mb-12 tracking-tighter">
                Ready to <span className="text-cyan-500">Evolve?</span>
              </h2>
              <p className="text-slate-400 text-2xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently exploring new horizons in Data Engineering and Machine Learning. Let's build the future together.
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <a href="mailto:rsabhirami189@gmail.com" className="px-12 py-6 bg-white text-black rounded-3xl font-black text-lg tracking-widest uppercase hover:bg-cyan-500 hover:text-white transition-all shadow-2xl active:scale-95">
                  Send a Signal
                </a>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/abhirami-r-4b641828b" target="_blank" className="p-6 rounded-3xl border border-white/10 hover:border-white/40 text-white transition-all backdrop-blur-sm bg-white/5">
                    <Linkedin size={28} />
                  </a>
                  <a href="mailto:rsabhirami189@gmail.com" className="p-6 rounded-3xl border border-white/10 hover:border-white/40 text-white transition-all backdrop-blur-sm bg-white/5">
                    <Mail size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-white/5 bg-slate-900/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black tracking-[0.4em] uppercase text-slate-600">
            <div>© 2025 ABHIRAMI R. ALL SYSTEMS GO.</div>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Secure</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
