import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_LIST } from '../data/eventsData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#F5EFEB] text-stone-900 py-24 px-4 sm:px-8 border-t border-stone-300/50"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 text-[11px] font-semibold tracking-wider text-stone-800 uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-copper-600" />
            <span>Guidelines &amp; Queries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-950 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal mt-3 leading-relaxed">
            Essential symposium directives, department quota caps, and participant expectations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-stone-200/90 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-stone-900 text-white rotate-180'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Notice Box */}
        <div id="rules" className="mt-12 p-6 rounded-3xl bg-amber-500/10 border border-amber-600/30 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-copper-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-800">
            <h3 className="font-bold text-stone-950 font-display text-sm">
              Official Symposium Advisory &amp; ID Card Policy
            </h3>
            <p className="mt-1 text-stone-600 leading-relaxed">
              Every participating student and model must carry their official institutional College ID card with physical verification at the desk. Mobile phones must be deposited or switched off during active competitive rounds. Violations will result in immediate disqualification of the department squad.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
