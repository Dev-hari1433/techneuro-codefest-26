import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, Users, ArrowUpRight, FileText, Trophy, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { EVENTS_DATA, SYMPOSIUM_STATS, SYMPOSIUM_INFO } from '../data/eventsData';

export default function RadialEventArc({ onSelectEvent, onOpenRegister, onDownloadRulebook }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Precision geometry for radial clock-like dial arc
  const cx = 530;
  const cy = 1120;
  const r = 1100;
  const startDeg = -116;
  const endDeg = -64;
  const totalTicks = 85;

  const polarToCartesian = (center_x, center_y, radius, deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: center_x + radius * Math.cos(rad),
      y: center_y + radius * Math.sin(rad),
    };
  };

  const describeArc = (center_x, center_y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(center_x, center_y, radius, startAngle);
    const end = polarToCartesian(center_x, center_y, radius, endAngle);
    return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} A ${radius} ${radius} 0 0 1 ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  };

  // Generate radiating clock-like ticks along the curve
  const ticks = Array.from({ length: totalTicks }, (_, i) => {
    const deg = startDeg + (i / (totalTicks - 1)) * (endDeg - startDeg);
    const rad = (deg * Math.PI) / 180;
    const isMajor = i % 10 === 0;
    const isMedium = i % 5 === 0 && !isMajor;
    const tickLen = isMajor ? 20 : isMedium ? 13 : 8;
    const rInner = r - tickLen / 2;
    const rOuter = r + tickLen / 2;
    const x1 = cx + rInner * Math.cos(rad);
    const y1 = cy + rInner * Math.sin(rad);
    const x2 = cx + rOuter * Math.cos(rad);
    const y2 = cy + rOuter * Math.sin(rad);
    return { x1, y1, x2, y2, isMajor, isMedium, deg };
  });

  // 5 events fanned out across the arc with exact matching dial coordinates
  const cardAngles = [
    { id: 'ai-avengers', rot: -16, offsetY: 74, dialDeg: -111.4, roman: 'I', time: '09:00 AM' },
    { id: 'prompt-to-product', rot: -8, offsetY: 20, dialDeg: -100.5, roman: 'II', time: '11:00 AM' },
    { id: 'technical-mehndi', rot: 0, offsetY: 0, dialDeg: -90.0, roman: 'III', time: '01:00 PM' },
    { id: 'cooking-without-fire', rot: 8, offsetY: 20, dialDeg: -79.5, roman: 'IV', time: '02:30 PM' },
    { id: 'treasure-hunt', rot: 16, offsetY: 74, dialDeg: -68.6, roman: 'V', time: '04:00 PM' },
  ];

  const leftEnd = polarToCartesian(cx, cy, r, startDeg);
  const rightEnd = polarToCartesian(cx, cy, r, endDeg);

  return (
    <section
      id="arc-gallery"
      className="relative w-full bg-[#FAF7F2] text-stone-900 pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* DESKTOP / TABLET FAN ARC (Large Screens) */}
        <div className="hidden lg:block relative w-full h-[510px] mx-auto overflow-visible">
          
          {/* SVG Clock-like Radial Dial crowning distinctly above the cards */}
          <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
            <svg
              className="w-[1060px] h-[480px] overflow-visible"
              viewBox="0 0 1060 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Dashed Chronograph Bezel Arc */}
              <path
                d={describeArc(cx, cy, r + 14, startDeg, endDeg)}
                stroke="#C2A78C"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                fill="none"
              />

              {/* Main Visible Solid Dial Arc */}
              <path
                d={describeArc(cx, cy, r, startDeg, endDeg)}
                stroke="#7A5636"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Inner Guideline Arc */}
              <path
                d={describeArc(cx, cy, r - 14, startDeg, endDeg)}
                stroke="#DAC4AC"
                strokeWidth="1"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Radiating Clock Dial Ticks */}
              {ticks.map((t, i) => (
                <line
                  key={i}
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  stroke={t.isMajor ? '#4A2E16' : t.isMedium ? '#7A5636' : '#BA9F83'}
                  strokeWidth={t.isMajor ? '2.5' : t.isMedium ? '1.8' : '1.2'}
                  strokeLinecap="round"
                />
              ))}

              {/* Start & Finale Chrono Badges on Outer Curve */}
              <text
                x={leftEnd.x}
                y={leftEnd.y - 14}
                fill="#7A5636"
                className="text-[9px] font-mono font-extrabold tracking-widest uppercase select-none"
              >
                09:00 AM • SYMPOSIUM COMMENCE
              </text>
              <text
                x={rightEnd.x}
                y={rightEnd.y - 14}
                textAnchor="end"
                fill="#7A5636"
                className="text-[9px] font-mono font-extrabold tracking-widest uppercase select-none"
              >
                05:00 PM • GRAND FINALE
              </text>

              {/* 5 Chronograph Jewel Pips and Roman Indices positioned on the Dial */}
              {cardAngles.map((config, idx) => {
                const event = EVENTS_DATA[idx];
                const isHovered = hoveredCard === event.id;
                const pipPos = polarToCartesian(cx, cy, r, config.dialDeg);
                const textPos = polarToCartesian(cx, cy, r - 22, config.dialDeg);
                const accentColor = event.category === 'Technical' ? '#00F5FF' : '#F59E0B';

                return (
                  <g key={config.id} className="transition-all duration-300">
                    {/* Concentric Jewel Halo */}
                    <circle
                      cx={pipPos.x}
                      cy={pipPos.y}
                      r={isHovered ? 8 : 5}
                      fill="none"
                      stroke={isHovered ? accentColor : '#A68565'}
                      strokeWidth={isHovered ? 2.5 : 1.2}
                      className="transition-all duration-300"
                    />
                    {/* Central Jewel Dot */}
                    <circle
                      cx={pipPos.x}
                      cy={pipPos.y}
                      r={isHovered ? 4.5 : 3}
                      fill={isHovered ? accentColor : '#503217'}
                      stroke="#FAF7F2"
                      strokeWidth={1.5}
                      className="transition-all duration-300"
                    />
                    {/* Roman Numeral Index (I - V) between Arc and Card */}
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isHovered ? (event.category === 'Technical' ? '#0891B2' : '#B45309') : '#6B4A2C'}
                      className="text-[11px] font-mono font-extrabold tracking-widest transition-colors duration-300 select-none"
                    >
                      {config.roman}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Fanned 5 Event Cards - STRICTLY RETAIN CURVED ROTATION ON HOVER/TOUCH */}
          <div className="absolute inset-0 flex justify-center items-start pt-14">
            <div className="relative w-[980px] h-[340px] flex justify-between items-center px-2">
              {EVENTS_DATA.map((event, idx) => {
                const config = cardAngles[idx];
                const isHovered = hoveredCard === event.id;

                return (
                  <motion.div
                    key={event.id}
                    onMouseEnter={() => setHoveredCard(event.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => onSelectEvent(event.id)}
                    initial={{
                      y: config.offsetY,
                      rotate: config.rot,
                      scale: 1,
                    }}
                    animate={{
                      y: isHovered ? config.offsetY - 14 : config.offsetY,
                      rotate: config.rot, // NEVER STRAIGHTEN: RETAIN PRECISE FAN ROTATION
                      scale: isHovered ? 1.05 : 1,
                    }}
                    whileHover={{
                      y: config.offsetY - 14,
                      rotate: config.rot, // NEVER STRAIGHTEN: RETAIN FAN ROTATION
                      scale: 1.05,
                      transition: { duration: 0.22, ease: 'easeOut' },
                    }}
                    whileTap={{
                      scale: 0.98,
                      rotate: config.rot, // NEVER STRAIGHTEN ON TAP/TOUCH
                    }}
                    style={{
                      zIndex: isHovered ? 30 : 10 + idx,
                    }}
                    className="cursor-pointer group relative w-[176px] h-[255px] rounded-[24px] overflow-hidden shadow-xl bg-white border border-stone-200/80 transition-shadow duration-300 hover:shadow-2xl"
                  >
                    {/* Event Photo */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover filter brightness-[0.92] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 p-3.5 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-start">
                        <span
                          className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md ${
                            event.category === 'Technical'
                              ? 'bg-[#00F5FF] text-stone-950 shadow-cyan-950/40'
                              : 'bg-[#F59E0B] text-stone-950 shadow-amber-950/40'
                          }`}
                        >
                          {event.category}
                        </span>

                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold leading-snug font-display text-white group-hover:text-amber-300 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-[10px] text-stone-300 line-clamp-1 mt-0.5 font-medium">
                          {event.duration} • {event.id === 'technical-mehndi' ? '👤 1 Member (Solo)' : '👥 2 Members'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET HORIZONTAL SCROLL / CAROUSEL VIEW */}
        <div className="lg:hidden mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-copper-700">
              Tap any arena to view verified rules
            </span>
            <span className="text-xs text-stone-400 font-mono">5 Arenas</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none -mx-4 px-4">
            {EVENTS_DATA.map((event) => (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event.id)}
                className="snap-center shrink-0 w-[220px] h-[310px] rounded-3xl overflow-hidden shadow-lg relative cursor-pointer border border-stone-200"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider self-start backdrop-blur-md ${
                      event.category === 'Technical'
                        ? 'bg-[#00F5FF] text-stone-950'
                        : 'bg-[#F59E0B] text-stone-950'
                    }`}
                  >
                    {event.category}
                  </span>
                  <div>
                    <h3 className="text-base font-bold font-display">{event.title}</h3>
                    <p className="text-xs text-stone-300 mt-1">
                      {event.duration} • {event.id === 'technical-mehndi' ? '👤 1 Member (Solo)' : '👥 2 Members'}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-2">
                      {event.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ENHANCED EDITORIAL SECTION (Fills the curve area and removes dead whitespace) */}
        <div className="max-w-4xl mx-auto text-center mt-6 lg:-mt-6 relative z-20">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 text-[11px] sm:text-xs font-semibold tracking-wider text-stone-800 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-copper-600" />
            <span>Official Symposium Overview • TechNeuro Codefest'26</span>
          </div>

          {/* Big Editorial Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-950 tracking-tight leading-[1.12] mb-4">
            Challenging minds through logic, <br className="hidden sm:inline" />
            code, and boundless creative craft
          </h2>

          {/* Descriptive Body Paragraph */}
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            We believe extraordinary innovation begins at the intersection of AI discipline and creative fire. The <strong className="text-stone-900 font-semibold">{SYMPOSIUM_INFO.department}</strong> invites the sharpest departmental squads to assemble, compete, and claim the rolling championship trophy.
          </p>

          {/* 3 Core Pillar Badges filling the curve area */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                100%
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 font-display">
                  Zero Elimination Guarantee
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                  All teams in AI Avengers play all 3 rounds — no premature exits.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Trophy className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 font-display">
                  Department Glory &amp; Shield
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                  Cumulative scoring crowns 1 overall Academic Department Champion.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-4 h-4 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 font-display">
                  Live Dispatch &amp; Support
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                  Instant prompt drops and WhatsApp helpline support at 6369230106.
                </p>
              </div>
            </div>
          </div>

          {/* Dual Action Pill Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
            <button
              onClick={onDownloadRulebook}
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-3 bg-stone-900 text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-stone-800 transition-all shadow-md hover:shadow-xl cursor-pointer"
            >
              <span>Download Complete Rulebook PDF</span>
              <span className="w-8 h-8 rounded-full bg-copper-500 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <FileText className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onOpenRegister('ai-avengers')}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-stone-300 hover:border-stone-900 bg-white text-stone-900 font-semibold text-xs sm:text-sm transition-all hover:shadow-md cursor-pointer"
            >
              <span>Register Department Squad</span>
              <ArrowRight className="w-3.5 h-3.5 text-copper-600 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* KEY SYMPOSIUM STATS STRIP (4-Column Metric Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 mt-16 pt-10 border-t border-stone-300/70 text-center">
          {SYMPOSIUM_STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center px-4 ${
                i !== 0 ? 'md:border-l md:border-stone-200' : ''
              }`}
            >
              <span className="text-3xl sm:text-5xl font-display font-extrabold text-stone-950 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-stone-800 uppercase tracking-wider mt-2">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
