"use client";

import { motion } from "framer-motion";
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
  BarChart3
} from "lucide-react";

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
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#020617]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold font-syne tracking-tight text-white"
          >
            ABHIRAMI<span className="text-cyan-500">.</span>R
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
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
              className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="relative z-10"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Cpu size={14} /> Data Science Engineer
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="text-6xl md:text-8xl font-extrabold font-syne leading-[0.9] text-white mb-8"
              >
                Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Data</span> Into Insight.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                Machine Learning enthusiast focused on building predictive models and extracting meaningful patterns from complex datasets.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-2xl font-bold hover:bg-cyan-500 transition-all">
                  View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/abhirami-r-4b641828b" target="_blank" className="p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all text-slate-400 hover:text-white bg-white/5">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:rsabhirami189@gmail.com" className="p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all text-slate-400 hover:text-white bg-white/5">
                    <Mail size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full max-w-md h-full max-h-md bg-slate-900/50 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-8 flex flex-col items-center justify-center gap-8 overflow-hidden group">
                {/* Abstract Data Visualization */}
                <div className="grid grid-cols-4 gap-4 w-full h-full items-end p-4">
                  {[40, 70, 55, 90, 30, 85, 60, 45].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 1, repeat: Infinity, repeatType: "reverse" }}
                      className={`rounded-full w-full ${i % 2 === 0 ? 'bg-cyan-500/40' : 'bg-fuchsia-500/40'}`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/20 animate-spin-slow" />
                  <BrainCircuit className="text-white absolute" size={48} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold font-syne text-white mb-8 inline-flex items-center gap-4">
                  <span className="w-12 h-px bg-cyan-500"></span> About Me
                </h2>
                <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                  <p>
                    I am a motivated Data Science Engineer with a passion for problem-solving and technical innovation. 
                    Currently based at <span className="text-white font-semibold">Arcite Project Management Consultancy</span>, 
                    I specialize in converting unstructured data into actionable insights.
                  </p>
                  <p>
                    My background in Computer Science (B.Tech, 2021-2025) provided a solid foundation in engineering principles, 
                    which I now apply to machine learning and statistical modeling.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Experience", value: "Trainee", icon: Briefcase, color: "text-cyan-400" },
                  { label: "Education", value: "B.Tech CSE", icon: GraduationCap, color: "text-fuchsia-400" },
                  { label: "Focus", value: "Data Science", icon: Database, color: "text-amber-400" },
                  { label: "Passion", value: "Machine Learning", icon: BrainCircuit, color: "text-emerald-400" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <stat.icon className={`${stat.color} mb-4`} size={28} />
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">{stat.label}</div>
                    <div className="text-white font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold font-syne text-white mb-16 text-center">Technical Arsenal</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Languages", skills: ["Python", "Java", "SQL", "HTML"], icon: Code2, gradient: "from-blue-500 to-cyan-500" },
                { title: "Data Science", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"], icon: BarChart3, gradient: "from-fuchsia-500 to-purple-500" },
                { title: "Machine Learning", skills: ["Scikit-learn", "Supervised Learning", "EDA", "Statistical Analysis"], icon: LineChart, gradient: "from-cyan-500 to-teal-500" },
                { title: "Core Skills", skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration"], icon: Award, gradient: "from-amber-500 to-orange-500" },
              ].map((category, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/10`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
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
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6 leading-tight">Featured Engineering Projects</h2>
                <p className="text-slate-400 text-lg">A selection of technical implementations focusing on predictive modeling and data systems.</p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
                  <ChevronRight className="rotate-180" />
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Crop Recommendation System", 
                  desc: "ML model recommending crops based on soil nutrients and environmental factors (NPK, pH, Rainfall).",
                  tags: ["Python", "Scikit-learn", "Pandas"],
                  gradient: "from-emerald-500/20 to-cyan-500/20"
                },
                { 
                  title: "Fraud Detection Engine", 
                  desc: "Predictive system detecting fraudulent transactions with precision/recall optimization.",
                  tags: ["ML", "Data Analysis", "Python"],
                  gradient: "from-rose-500/20 to-orange-500/20"
                },
                { 
                  title: "Diabetes Prediction", 
                  desc: "Health analytics model identifying diabetes risk factors using clinical data parameters.",
                  tags: ["Scikit-learn", "NumPy", "EDA"],
                  gradient: "from-blue-500/20 to-indigo-500/20"
                },
                { 
                  title: "Campus Hub", 
                  desc: "Integrated digital platform for campus activities and resource management optimization.",
                  tags: ["Web Dev", "MySQL", "Java"],
                  gradient: "from-amber-500/20 to-yellow-500/20"
                },
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className="group relative rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                      <div className="flex gap-2">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ExternalLink className="text-white/20 group-hover:text-white transition-colors" size={20} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">{project.desc}</p>
                    <div className="mt-auto flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      Explore Case Study <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-syne text-white mb-16 text-center">Journey</h2>
            <div className="space-y-12">
              {[
                {
                  role: "Data Science Engineer Trainee",
                  company: "Arcite Project Management Consultancy",
                  period: "2025 - Present",
                  details: [
                    "Cleaning and transforming unstructured data using Pandas.",
                    "Executing Exploratory Data Analysis (EDA) and visualization.",
                    "Implementing supervised learning algorithms on real-world datasets.",
                    "Optimizing business decision-making through data-driven insights."
                  ]
                },
                {
                  role: "Java Programming Intern",
                  company: "ICT Academy",
                  period: "May 2023 - June 2023",
                  details: [
                    "Developed Event Management System with Java Swing & MySQL.",
                    "Designed event scheduling and registration architecture.",
                    "Collaborated in a structured enterprise environment."
                  ]
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 md:pl-16 border-l border-white/10 group">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-150 transition-transform" />
                  <div className="mb-2 text-cyan-500 font-bold text-sm tracking-widest uppercase">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-slate-400 font-medium mb-6">{exp.company}</div>
                  <ul className="space-y-3">
                    {exp.details.map((detail, j) => (
                      <li key={j} className="text-slate-500 text-sm leading-relaxed flex gap-2">
                        <span className="text-cyan-500/50 flex-shrink-0">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-syne text-white mb-4">Let's build something <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">impactful</span>.</div>
              <p className="text-slate-500 max-w-sm">Open for collaborations and opportunities in Data Science & Machine Learning.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <a href="mailto:rsabhirami189@gmail.com" className="text-xl font-bold text-white hover:text-cyan-500 transition-colors">rsabhirami189@gmail.com</a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/abhirami-r-4b641828b" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-all"><Linkedin size={20} /></a>
                <a href="#" className="p-3 rounded-full border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-all"><ExternalLink size={20} /></a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-bold tracking-widest uppercase">
            <div>© 2025 ABHIRAMI R. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
