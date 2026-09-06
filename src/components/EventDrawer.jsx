import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, ShieldAlert, Award, Phone, CheckCircle2, ChevronRight, FileText, Sparkles, Download, ExternalLink } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventsData';

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

export default function EventDrawer({ event, isOpen, onClose, onOpenRegister }) {
  const [activeSubTab, setActiveSubTab] = useState('rounds');

  if (!event) return null;

  const tabs = [
    { id: 'rounds', label: 'Rounds & Format' },
    { id: 'rules', label: 'Strict Rules' },
    { id: 'evaluation', label: 'Scoring & Criteria' },
    { id: 'coordinators', label: 'Convener & Help' },
  ];

  const isMehndi = event.id === 'technical-mehndi';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-over Drawer Surface */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#1A120B] text-white h-full shadow-2xl border-l border-white/15 flex flex-col z-10 overflow-hidden"
          >
            {/* Header with Image Banner */}
            <div className="relative h-56 shrink-0 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges and Event Title */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      event.category === 'Technical'
                        ? 'bg-[#00F5FF] text-stone-950 font-extrabold'
                        : 'bg-[#F59E0B] text-stone-950 font-extrabold'
                    }`}
                  >
                    {event.category}
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-stone-200">
                    {event.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-copper-300 italic mt-0.5">
                  "{event.tagline}"
                </p>
              </div>
            </div>

            {/* Quick Metrics & Links Bar */}
            <div className="px-6 py-3 bg-white/5 border-y border-white/10 flex items-center justify-between gap-3 text-xs sm:text-sm text-stone-300 flex-wrap">
              <div className="flex items-center gap-4 font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-copper-400" />
                  <span>{event.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isMehndi ? '👤 Strictly 1 Member (Solo)' : '👥 2 Members per Team'}</span>
                </div>
              </div>

              {/* Download Rulebook PDF Trigger */}
              {event.pdfFilename && (
                <a
                  href={`/${encodeURIComponent(event.pdfFilename)}`}
                  download={event.pdfFilename}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-copper-400" />
                  <span>Download Rulebook (.PDF)</span>
                </a>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="px-6 pt-3 border-b border-white/10 flex gap-2 overflow-x-auto scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`pb-3 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer whitespace-nowrap ${
                    activeSubTab === tab.id
                      ? 'text-white'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {tab.label}
                  {activeSubTab === tab.id && (
                    <motion.div
                      layoutId="activeSubTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-copper-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Body Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-stone-300">
              {/* ROUNDS TAB */}
              {activeSubTab === 'rounds' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-semibold text-copper-300 uppercase tracking-wider mb-1">
                      Structure Summary
                    </p>
                    <p className="text-xs text-stone-300">{event.summary}</p>
                    {event.keyHighlight && (
                      <p className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        {event.keyHighlight}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    {event.rounds.map((rnd, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-[#231710] border border-white/10 space-y-2"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-copper-500/30 text-copper-300 border border-copper-500/40">
                            {rnd.roundNumber}
                          </span>
                          <span className="text-xs font-mono text-stone-400">
                            {rnd.duration}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white font-display">
                          {rnd.name}
                        </h4>
                        <p className="text-xs text-stone-300 font-medium">
                          {rnd.format}
                        </p>

                        {Array.isArray(rnd.details) ? (
                          <ul className="mt-2 space-y-1 pl-4 list-disc text-xs text-stone-400">
                            {rnd.details.map((d, idx) => (
                              <li key={idx}>{d}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-stone-400">{rnd.details}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STRICT RULES TAB */}
              {activeSubTab === 'rules' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/30">
                    <div className="flex items-start gap-2.5">
                      <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-red-200">
                          Critical Disqualification Criteria
                        </h4>
                        <p className="text-xs text-red-300/90 mt-1 leading-relaxed">
                          {event.strictRule}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Standard Symposium Regulations
                    </h4>
                    <ul className="space-y-2.5 text-xs text-stone-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>College ID Mandatory:</strong> All participants must present legitimate student identity cards during reporting and desk verification.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>Reporting Time:</strong> Teams must arrive at the designated venue 15 minutes prior to official event commencement.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>Department Representation:</strong> Strictly 1 team per department ({isMehndi ? '1 member limit' : '2 members limit'}). Substitutions are not permitted once competition begins.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>Decisions Final:</strong> The decision of the jury panel and faculty adjudicators is ultimate and indisputable.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* EVALUATION TAB */}
              {activeSubTab === 'evaluation' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-copper-400" />
                      <h4 className="text-sm font-bold text-white">
                        Evaluation Rubric &amp; Weightage
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {event.evaluation.map((crit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-stone-300 pb-2 border-b border-white/5 last:border-0"
                        >
                          <span className="w-5 h-5 rounded-full bg-copper-500/20 text-copper-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span>{crit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* CONVENER & HELP TAB (Only Valid Official Info) */}
              {activeSubTab === 'coordinators' && (
                <div className="space-y-4">
                  <p className="text-xs text-stone-400">
                    Official Student Convener for {event.title} &amp; TechNeuro Codefest'26:
                  </p>
                  
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/15 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white font-display">
                          {SYMPOSIUM_INFO.convenerName}
                        </h4>
                        <p className="text-xs text-stone-400">
                          {SYMPOSIUM_INFO.convenerRole} • Department of CS &amp; AI
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                        <WhatsAppIcon className="w-3 h-3 fill-current" />
                        Verified Convener
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Phone className="w-3.5 h-3.5 text-copper-400" />
                      <span className="text-xs font-mono font-bold text-stone-200">
                        +91 {SYMPOSIUM_INFO.contactPhone}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center gap-2 flex-wrap">
                      <a
                        href={SYMPOSIUM_INFO.contactWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Chat on WhatsApp ({SYMPOSIUM_INFO.contactPhone})</span>
                      </a>

                      <a
                        href={`tel:+91${SYMPOSIUM_INFO.contactPhone}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-stone-200 text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3 h-3 text-copper-400" />
                        <span>Call Directly</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Footer */}
            <div className="p-5 border-t border-white/15 bg-[#140C07] flex items-center justify-between gap-3 flex-wrap">
              <a
                href={event.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs font-bold transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Join Official WhatsApp</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-white/20 text-stone-300 hover:text-white text-xs font-semibold hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenRegister(event.id);
                  }}
                  className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-white text-stone-950 font-bold text-xs sm:text-sm rounded-full hover:bg-stone-100 transition-all shadow-lg cursor-pointer"
                >
                  <span>Register Team</span>
                  <span className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
