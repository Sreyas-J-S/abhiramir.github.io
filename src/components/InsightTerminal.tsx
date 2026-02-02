"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Play, Circle } from "lucide-react";

const codeSnippets = [
  "import pandas as pd\nimport numpy as np",
  "df = pd.read_csv('market_data.csv')",
  "model = ScikitLearn.RandomForest()",
  "accuracy = model.evaluate(test_data)",
  "print(f'Accuracy: {accuracy:.2%}')",
];

export function InsightTerminal() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeSnippets.length) {
      const line = codeSnippets[lineIndex];
      let charIndex = 0;
      const interval = setInterval(() => {
        setText((prev) => prev + line[charIndex]);
        charIndex++;
        if (charIndex === line.length) {
          clearInterval(interval);
          setTimeout(() => {
            setText((prev) => prev + "\n");
            setLineIndex((prev) => prev + 1);
          }, 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [lineIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#0a0f1d] shadow-2xl">
      <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          <Circle size={12} className="fill-rose-500 text-rose-500" />
          <Circle size={12} className="fill-amber-500 text-amber-500" />
          <Circle size={12} className="fill-emerald-500 text-emerald-500" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <Terminal size={14} /> insight_engine.py
        </div>
        <div className="w-12"></div>
      </div>
      <div className="p-6 font-mono text-sm">
        <pre className="text-cyan-400 whitespace-pre-wrap">
          <code>
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-400 align-middle ml-1"
            />
          </code>
        </pre>
        {lineIndex === codeSnippets.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-3 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs flex items-center gap-3"
          >
            <Play size={14} className="fill-cyan-500" /> Output: Analysis Complete. Visualizing trends...
          </motion.div>
        )}
      </div>
    </div>
  );
}
