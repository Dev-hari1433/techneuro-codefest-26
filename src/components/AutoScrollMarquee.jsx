import React from 'react';
import { Sparkles, Trophy, Cpu, Flame, Palette, Compass, ShieldCheck, Zap } from 'lucide-react';
import { MARQUEE_ITEMS, SYMPOSIUM_INFO } from '../data/eventsData';

export default function AutoScrollMarquee({ onOpenRegister, onSelectEvent }) {
  const row1 = [
    { label: "TechNeuro Codefest'26", icon: <Sparkles className="w-3.5 h-3.5 text-copper-600" /> },
    { label: "Dept of CS & AI", icon: <Cpu className="w-3.5 h-3.5 text-cyan-600" /> },
    { label: "AI Avengers (3 Rounds • No Elimination)", icon: <Zap className="w-3.5 h-3.5 text-cyan-600" /> },
    { label: "Prompt to Product (60m AI Build)", icon: <Sparkles className="w-3.5 h-3.5 text-copper-600" /> },
    { label: "Technical Mehndi (Solo 1 Member)", icon: <Palette className="w-3.5 h-3.5 text-amber-600" /> },
    { label: "Cooking Without Fire (Zero Heat)", icon: <Flame className="w-3.5 h-3.5 text-amber-600" /> },
    { label: "Treasure Hunt (20 Clues)", icon: <Compass className="w-3.5 h-3.5 text-amber-600" /> },
    { label: "President: Ganesh Kumar (6369230106)", icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> },
  ];

  const row2 = [
    { label: "Department Championship Rolling Trophy", icon: <Trophy className="w-3.5 h-3.5 text-amber-600" /> },
    { label: "Strictly 1 Team per Academic Department", icon: <ShieldCheck className="w-3.5 h-3.5 text-copper-600" /> },
    { label: "Live Microsoft Word Prompt Log Submission", icon: <Sparkles className="w-3.5 h-3.5 text-cyan-600" /> },
    { label: "Instant Official WhatsApp Updates", icon: <Zap className="w-3.5 h-3.5 text-emerald-600" /> },
    { label: "Cash Prizes & Merit Shields", icon: <Trophy className="w-3.5 h-3.5 text-amber-600" /> },
    { label: "₹50,000+ Overall Prize Pool", icon: <Sparkles className="w-3.5 h-3.5 text-copper-600" /> },
    { label: "Free-hand Algorithmic Henna Art", icon: <Palette className="w-3.5 h-3.5 text-copper-600" /> },
    { label: "Zero Pre-cut Ingredients Allowed", icon: <Flame className="w-3.5 h-3.5 text-amber-600" /> },
  ];

  return (
    <section
      id="marquee-showcase"
      className="relative w-full bg-[#FAF7F2] text-stone-900 py-20 overflow-hidden border-t border-stone-300/60 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-[11px] font-semibold tracking-wider text-stone-800 uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-copper-600" />
          <span>Continuous Symposium Stream</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950">
          The arena at a glance
        </h3>
      </div>

      {/* Track 1: Leftward Infinite Scroll */}
      <div className="flex overflow-hidden relative mb-4">
        <div className="flex gap-3 animate-marquee whitespace-nowrap py-1">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-200/90 shadow-sm text-xs font-semibold text-stone-800 hover:border-copper-500 hover:shadow-md transition-all shrink-0 cursor-default"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Rightward / Counter Infinite Scroll */}
      <div className="flex overflow-hidden relative">
        <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap py-1">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A120B] text-white border border-stone-800 shadow-sm text-xs font-semibold hover:border-copper-400 hover:shadow-md transition-all shrink-0 cursor-default"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
