import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Trophy, Users, Flame, ChevronRight, Phone, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { SYMPOSIUM_INFO } from '../data/eventsData';
import StarfieldBackground from './StarfieldBackground';

export default function Hero({ onOpenRegister, onSelectEvent, onScrollTo }) {
  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-[#140C07] via-[#1A120B] to-[#241710] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-8 overflow-hidden"
    >
      {/* Starfield Glowing Particles & Shimmering Sparkles */}
      <StarfieldBackground density={50} showSparkles={true} />

      {/* Warm Ambient Glow Highlights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-copper-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Lines (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, CTAs, Feature Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Prominent Announcement Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-semibold tracking-wider text-copper-300 uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-copper-400" />
              <span>Department of Computer Science with Artificial Intelligence</span>
            </div>

            {/* Overline: TechNeuro Club Presents */}
            <p className="text-copper-400 font-display font-bold text-base sm:text-xl tracking-wide uppercase mb-1">
              TechNeuro Club Presents
            </p>

            {/* Main Title: TechNeuro Codefest'26 */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.04] text-white mb-4">
              TechNeuro <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-200 to-copper-300">
                Codefest'26
              </span>
            </h1>

            {/* Sub-headline: Code the future. Master the mind. */}
            <p className="text-lg sm:text-xl font-display font-semibold text-stone-200 mb-4">
              Code the future. Master the mind.
            </p>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-stone-300/90 max-w-xl font-normal leading-relaxed mb-8">
              An inter-departmental arena combining algorithmic precision, low-code AI innovation, tactical puzzles, and creative execution. Strictly 1 team per department.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              {/* Primary Pill Button */}
              <button
                onClick={() => onOpenRegister('ai-avengers')}
                className="group flex items-center gap-3 pl-6 pr-2 py-3 bg-white text-stone-950 font-semibold text-sm rounded-full hover:bg-stone-100 transition-all shadow-xl hover:shadow-2xl cursor-pointer"
              >
                <span>Register Your Team</span>
                <span className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform group-hover:scale-105">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Secondary Pill Button */}
              <button
                onClick={() => onScrollTo('arc-gallery')}
                className="group flex items-center gap-3 pl-6 pr-2 py-3 glass-pill text-stone-200 hover:text-white font-medium text-sm rounded-full hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>Explore All 5 Events</span>
                <span className="w-9 h-9 rounded-full bg-white/15 text-stone-200 group-hover:text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Bottom Feature Pills: 3 Frosted Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="glass-pill rounded-2xl p-3.5 flex items-start gap-3 transition-transform hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-full bg-copper-500/20 text-copper-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-white">1 Team / Dept</h2>
                  <p className="text-[11px] text-stone-400 leading-tight mt-0.5">Strict department cap</p>
                </div>
              </div>

              <div className="glass-pill rounded-2xl p-3.5 flex items-start gap-3 transition-transform hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-white">5 Distinct Arenas</h2>
                  <p className="text-[11px] text-stone-400 leading-tight mt-0.5">3 Tech, 2 Non-Tech</p>
                </div>
              </div>

              <div className="glass-pill rounded-2xl p-3.5 flex items-start gap-3 transition-transform hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-white">Cash &amp; Trophies</h2>
                  <p className="text-[11px] text-stone-400 leading-tight mt-0.5">Department glory</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full-Height Beautifully Blended Hero Artwork */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-amber-400/15 to-copper-500/20 rounded-[36px] blur-2xl pointer-events-none" />

            {/* Luxury Framed Container Taking Full Space */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-[#2E1E15] to-[#1A120B]">
              <img
                src="/images/hero-ai-human.png"
                alt="AI and Human Intellect Symbiosis — TechNeuro Codefest'26"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter saturate-[1.02] contrast-[1.02]"
              />

              {/* Ambient Blending Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140C07]/85 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#140C07] to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
