import React from 'react';
import { Clock, Calendar, MapPin, Sparkles } from 'lucide-react';
import { TIMELINE_SCHEDULE } from '../data/eventsData';

export default function TimelineSection() {
  return (
    <section
      id="schedule"
      className="relative w-full bg-[#FAF7F2] text-stone-900 py-24 px-4 sm:px-8 border-t border-stone-300/50"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 text-[11px] font-semibold tracking-wider text-stone-800 uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-copper-600" />
            <span>Master Itinerary</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-950 tracking-tight">
            Schedule of the day
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal mt-3 leading-relaxed">
            From reporting and verification to the crowning of the Overall Department Champion, explore the synchronous flow of TechNeuro Codefest'26.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-stone-300 ml-4 sm:ml-32 space-y-8">
          {TIMELINE_SCHEDULE.map((item, idx) => {
            const isTech = item.category === 'Technical';
            const isNonTech = item.category === 'Non-Technical';
            const isCeremony = item.category === 'Ceremony';

            return (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Time Indicator on Left for larger screens */}
                <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                  <span className="font-mono text-xs font-bold text-stone-900">
                    {item.time}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-stone-800 group-hover:border-copper-600 group-hover:scale-125 transition-all shadow-sm" />

                {/* Card */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <span className="sm:hidden font-mono text-xs font-bold text-copper-700">
                      {item.time}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isTech
                          ? 'bg-cyan-100 text-cyan-800'
                          : isNonTech
                          ? 'bg-amber-100 text-amber-800'
                          : isCeremony
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-950 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
