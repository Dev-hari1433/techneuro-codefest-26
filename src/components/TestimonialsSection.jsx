import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight, Award, Trophy } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/eventsData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAF7F2] text-stone-900 py-24 px-4 sm:px-8 border-t border-stone-300/50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-[11px] font-semibold tracking-wider text-stone-800 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-copper-600" />
              <span>Department Hall of Fame</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-stone-950 tracking-tight">
              Voices from past champions <br className="hidden sm:inline" />
              and faculty mentors
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Banner */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl mb-8 overflow-hidden">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-stone-100 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* 5 Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-stone-500 ml-2">
                Verified Competitor Review
              </span>
            </div>

            <p className="text-lg sm:text-2xl font-display font-medium text-stone-900 leading-relaxed italic mb-8">
              "{TESTIMONIALS_DATA[currentIndex].quote}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-copper-500 to-amber-300 text-white font-display font-bold text-lg flex items-center justify-center shadow-md">
                  {TESTIMONIALS_DATA[currentIndex].name[0]}
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-950 font-display">
                    {TESTIMONIALS_DATA[currentIndex].name}
                  </h4>
                  <p className="text-xs text-copper-700 font-medium">
                    {TESTIMONIALS_DATA[currentIndex].role}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {TESTIMONIALS_DATA[currentIndex].department}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                {TESTIMONIALS_DATA[currentIndex].badge}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Secondary Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-stone-900 text-white border-stone-900 shadow-xl'
                  : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    currentIndex === idx
                      ? 'bg-copper-500 text-white'
                      : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  {item.badge}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        currentIndex === idx
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-400 text-amber-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p
                className={`text-xs leading-relaxed line-clamp-3 mb-4 italic ${
                  currentIndex === idx ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                "{item.quote}"
              </p>

              <div>
                <p className="text-xs font-bold font-display">{item.name}</p>
                <p
                  className={`text-[11px] ${
                    currentIndex === idx ? 'text-stone-400' : 'text-stone-500'
                  }`}
                >
                  {item.department}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
