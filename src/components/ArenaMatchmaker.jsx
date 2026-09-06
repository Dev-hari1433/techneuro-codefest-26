import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, Target, Award, CheckCircle2, ChevronRight, Cpu, Flame, Palette, Compass, User, Users } from 'lucide-react';
import { EVENTS_DATA } from '../data/eventsData';

export default function ArenaMatchmaker({ onSelectEvent, onOpenRegister }) {
  const [selectedSkill, setSelectedSkill] = useState('ai-logic');

  const skillOptions = [
    {
      id: 'ai-logic',
      label: 'AI & Puzzles',
      icon: <Cpu className="w-4 h-4" />,
      matchedEventId: 'ai-avengers',
      title: 'Algorithmic Trivia & Mental Gauntlet',
      desc: 'Your squad excels in pattern connection, machine learning trivia, and hands-on deduction under pressure.',
      badge: '99% Match: AI Avengers',
      tip: 'Stay calm in Round 2 Brain Storm — connection puzzles require rapid divergent thinking between teammates.',
    },
    {
      id: 'prompt-web',
      label: 'Generative AI & Web',
      icon: <Sparkles className="w-4 h-4" />,
      matchedEventId: 'prompt-to-product',
      title: 'Prompt Crafting & Rapid Low-Code Sprint',
      desc: 'Your squad excels in translating real-world social challenges into functional digital products using modern AI assistants.',
      badge: '98% Match: Prompt to Product',
      tip: 'Meticulously log every iteration in your Word .docx file as you build; judges heavily reward prompt depth.',
    },
    {
      id: 'art-henna',
      label: 'Henna & Tech Art',
      icon: <Palette className="w-4 h-4" />,
      matchedEventId: 'technical-mehndi',
      title: 'Circuitry & Organic Henna Fusion',
      desc: 'Your artist combines delicate free-hand craftsmanship with computing motifs, PCB layouts, and binary code aesthetics.',
      badge: '96% Match: Technical Mehndi (Solo)',
      tip: 'Practice blending floral geometry with motherboard busses — symmetry and concept defense win gold.',
    },
    {
      id: 'culinary',
      label: 'Raw Gourmet Craft',
      icon: <Flame className="w-4 h-4" />,
      matchedEventId: 'cooking-without-fire',
      title: 'Fireless Gastronomy & Plating Artistry',
      desc: 'Your squad masters flavor layering, cold fusion salads, parfaits, and zero-heat culinary presentation.',
      badge: '97% Match: Cooking Without Fire',
      tip: 'Bring razor-sharp knives and clean prep bowls; remember that zero cutting is allowed before the buzzer!',
    },
    {
      id: 'sleuth-map',
      label: 'Campus Sleuthing',
      icon: <Compass className="w-4 h-4" />,
      matchedEventId: 'treasure-hunt',
      title: 'Cryptic Navigation & Relic Recovery',
      desc: 'Your squad thrives on lateral thinking, riddles, speed, and coordinated campus exploration.',
      badge: '98% Match: Treasure Hunt',
      tip: 'Do not run back after finding single items! Carry all 20 artifacts and return as one simultaneous haul.',
    },
  ];

  const currentOption = skillOptions.find((s) => s.id === selectedSkill) || skillOptions[0];
  const matchedEvent = EVENTS_DATA.find((e) => e.id === currentOption.matchedEventId) || EVENTS_DATA[0];
  const isSolo = matchedEvent.id === 'technical-mehndi';

  return (
    <section
      id="arena-matchmaker"
      className="relative w-full bg-[#1A120B] text-white py-24 px-4 sm:px-8 overflow-hidden border-t border-white/10"
    >
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-copper-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-semibold tracking-wider text-copper-300 uppercase mb-3">
            <Zap className="w-3.5 h-3.5 text-copper-400" />
            <span>Interactive Arena Matchmaker</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Which arena is your department's <br className="hidden sm:inline" />
            secret weapon?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
            Select your squad's primary superpower to find the ideal competition arena, winning strategies, and direct registration pathway.
          </p>
        </div>

        {/* Interactive Superpower Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {skillOptions.map((opt) => {
            const isSel = opt.id === selectedSkill;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedSkill(opt.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSel
                    ? 'bg-white text-stone-950 shadow-xl scale-105'
                    : 'glass-pill text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Card Grid Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#231710]/90 backdrop-blur-xl border border-white/15 rounded-[32px] p-6 sm:p-10 shadow-2xl">
          
          {/* Left: Matched Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-copper-500/20 text-copper-300 border border-copper-500/30">
                {currentOption.badge}
              </span>
              <span className="text-xs font-mono text-stone-400">
                {isSolo ? '👤 Strictly 1 Member (Solo)' : '👥 2 Members per Team'} • {matchedEvent.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
              {matchedEvent.title}
            </h3>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {currentOption.desc}
            </p>

            {/* Tactical Advantage Callout Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-copper-300 uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-copper-400" />
                <span>Adjudicator's Winning Tip</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 italic">
                "{currentOption.tip}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <button
                onClick={() => onOpenRegister(matchedEvent.id)}
                className="group flex items-center gap-2.5 pl-6 pr-2 py-2.5 bg-white text-stone-950 font-bold text-xs sm:text-sm rounded-full hover:bg-stone-100 transition-all shadow-lg cursor-pointer"
              >
                <span>Register for {matchedEvent.title}</span>
                <span className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={() => onSelectEvent(matchedEvent.id)}
                className="px-5 py-2.5 rounded-full border border-white/20 text-stone-200 hover:text-white text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
              >
                View Full Rules &amp; Rounds
              </button>
            </div>
          </div>

          {/* Right: Matched Event Image Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative group h-72 sm:h-80 bg-stone-900">
              <img
                src={matchedEvent.image}
                alt={matchedEvent.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140C07] via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md ${
                  matchedEvent.category === 'Technical'
                    ? 'bg-[#00F5FF] text-stone-950'
                    : 'bg-[#F59E0B] text-stone-950'
                }`}>
                  {matchedEvent.category}
                </span>
                <h4 className="text-lg font-bold font-display text-white mt-1">
                  {matchedEvent.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1">
                  "{matchedEvent.tagline}"
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
