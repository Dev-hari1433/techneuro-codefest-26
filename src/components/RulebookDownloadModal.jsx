import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export default function RulebookDownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pdfFiles = [
    {
      title: 'AI Avengers Official Rule Book',
      filename: 'AI AVENGERS Rule book-1.pdf',
      category: 'Technical',
      size: '235 KB',
      rounds: 'Mind Masters • Brain Storm • Mystery Round',
    },
    {
      title: 'Prompt to Product Rule Book',
      filename: 'Prompt to product RULE BOOK.pdf',
      category: 'Technical',
      size: '256 KB',
      rounds: '60-min AI Web Hackathon • Word Prompt Log',
    },
    {
      title: 'Technical Mehndi Regulations',
      filename: 'mehndi 4.pdf',
      category: 'Technical',
      size: '110 KB',
      rounds: 'Natural Henna Cones • Circuitry & AI Icons',
    },
    {
      title: 'Cooking Without Fire Rules',
      filename: 'Cooking without fire rules.pdf',
      category: 'Non-Technical',
      size: '240 KB',
      rounds: '90 Mins • 2 Gourmet Cold Dishes • Zero Heat',
    },
    {
      title: 'Treasure Hunt Cryptic Rules',
      filename: 'Treasure_Hunt_Rules.pdf',
      category: 'Non-Technical',
      size: '37 KB',
      rounds: '20 Clues • Simultaneous Item Return • 75 Mins',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#1A120B] text-white rounded-[32px] border border-white/20 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-500/20 text-copper-300 border border-copper-500/30 text-[11px] font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Symposium Documents</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white">
              Download Event Rulebooks
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Direct access to the verified rules issued by the Department of Computer Science with Artificial Intelligence.
            </p>
          </div>

          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {pdfFiles.map((pdf, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-copper-500/20 text-copper-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-copper-300 transition-colors font-display">
                      {pdf.title}
                    </h4>
                    <p className="text-[11px] text-stone-400 mt-0.5">{pdf.rounds}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                        {pdf.category}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">
                        {pdf.size}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={`/${encodeURIComponent(pdf.filename)}`}
                  download={pdf.filename}
                  className="px-3.5 py-2 rounded-full bg-white text-stone-950 hover:bg-copper-400 hover:text-white text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-stone-400">
              Department Cap: Strictly 1 Team per Department
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
