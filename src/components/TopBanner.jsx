import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TopBanner({ onOpenRegister }) {
  return (
    <aside aria-label="Announcement" className="w-full bg-[#FAF7F2] text-stone-900 border-b border-stone-200/80 text-xs sm:text-sm py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center font-medium">
        <span className="inline-flex items-center gap-1.5 text-copper-600 font-semibold tracking-wide uppercase text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-copper-600" />
          TechNeuro Club Presents
        </span>
        <span className="hidden sm:inline text-stone-400">•</span>
        <span className="text-stone-700">
          Inter-Departmental Technical &amp; Non-Technical Meet 2026
        </span>
        <button
          onClick={onOpenRegister}
          className="inline-flex items-center gap-1 text-copper-700 hover:text-copper-900 font-semibold transition-colors underline-offset-4 hover:underline ml-1 cursor-pointer"
        >
          <span>Register Your Department</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </aside>
  );
}
