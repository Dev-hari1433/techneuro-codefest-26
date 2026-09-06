import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Clock, Users, ArrowRight, BookOpen, ExternalLink, Download } from 'lucide-react';
import { EVENTS_DATA } from '../data/eventsData';

function WhatsAppIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function EventGrid({ onSelectEvent, onOpenRegister }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesTab =
      activeTab === 'All' ||
      (activeTab === 'Technical' && event.category === 'Technical') ||
      (activeTab === 'Non-Technical' && event.category === 'Non-Technical');

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const categories = [
    { label: 'All Events', value: 'All', count: 5 },
    { label: 'Technical Events', value: 'Technical', count: 3 },
    { label: 'Non-Technical Events', value: 'Non-Technical', count: 2 },
  ];

  return (
    <section
      id="events"
      className="relative w-full bg-[#F5EFEB] text-stone-900 py-24 px-4 sm:px-8 border-t border-stone-300/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-[11px] font-semibold tracking-wider text-stone-800 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-copper-600" />
              <span>Event Arenas &amp; Regulations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-950 tracking-tight">
              Your journey to department <br className="hidden sm:inline" />
              glory starts here
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Choose your arena. 5 distinct challenges divided into Technical and Non-Technical categories. Strictly up to 2 members per team (1 team per department).
          </p>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-300/60">
          
          {/* Category Tabs with Animated Pill Underline/Background */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-full border border-stone-300/70 w-full sm:w-auto overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveTab(cat.value)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#1A120B] rounded-full shadow-md"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat.label}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-copper-500 text-white'
                          : 'bg-stone-300/80 text-stone-700'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search event, rules, topic..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Responsive Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => {
              const isTech = event.category === 'Technical';

              return (
                <motion.div
                  layout
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  {/* Event Image Top Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-stone-900">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    
                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md ${
                          isTech
                            ? 'bg-[#00F5FF]/90 text-stone-950 font-extrabold shadow-cyan-950/40'
                            : 'bg-[#F59E0B]/95 text-stone-950 font-extrabold shadow-amber-950/40'
                        }`}
                      >
                        {event.category}
                      </span>
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                        {event.badge}
                      </span>
                    </div>

                    {/* Time & Team Badges Overlaid on Media Bottom */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="inline-flex items-center gap-1 font-mono font-medium text-copper-300">
                        <Clock className="w-3.5 h-3.5" />
                        {event.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-stone-200 font-mono text-[11px] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                        <Users className="w-3.5 h-3.5 text-copper-300" />
                        {event.id === 'technical-mehndi' ? '👤 1 Member (Solo)' : '👥 2 Members'}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-display text-stone-950 group-hover:text-copper-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs font-semibold text-copper-700 mt-1 italic">
                        "{event.tagline}"
                      </p>
                      
                      {/* Concise 2-line summary */}
                      <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed mt-3 line-clamp-2">
                        {event.summary}
                      </p>
                    </div>

                    {/* Action Bar with 3 Interactive Buttons */}
                    <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col gap-2">
                      
                      {/* Row 1: Register Team (Primary) & Rulebook (Secondary) */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onOpenRegister(event.id)}
                          className="w-full py-2 px-3 rounded-full bg-[#1A120B] hover:bg-copper-600 text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                        >
                          <span>Register Team</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onSelectEvent(event.id)}
                          className="w-full py-2 px-3 rounded-full border border-stone-300 hover:border-stone-900 bg-stone-50 hover:bg-white text-stone-900 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-stone-700" />
                          <span>Rulebook</span>
                        </button>
                      </div>

                      {/* Row 2: Join WhatsApp Outbound Button */}
                      <a
                        href={event.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded-full bg-emerald-600/10 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-600/30 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Join WhatsApp Group</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-base text-stone-600 font-medium">
              No events found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('All');
              }}
              className="mt-4 px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
