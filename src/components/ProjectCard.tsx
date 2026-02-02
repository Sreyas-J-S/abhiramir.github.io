"use client";

import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  gradient: string;
  index: number;
  link?: string;
}

export function ProjectCard({ title, desc, tags, gradient, index, link }: ProjectCardProps) {
  const CardContent = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Abstract Background SVG Pattern */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-white/5 -translate-y-1/2 translate-x-1/2 group-hover:text-white/10 transition-colors duration-500" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="relative p-10 flex flex-col h-full z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, j) => (
              <span key={j} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <ExternalLink className="text-white/20 group-hover:text-white transition-colors" size={20} />
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">{title}</h3>
        <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">{desc}</p>

        <div className="mt-auto flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
          Explore Insights <ChevronRight size={16} />
        </div>
      </div>

      {/* Interactive Data Points (Visible on hover) */}
      <div className="absolute bottom-4 right-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{ height: [10, 30, 10] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            className="w-1 bg-cyan-500/50 rounded-full"
          />
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 0.98 }}
      className="group relative rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden cursor-pointer h-full min-h-[400px]"
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}
