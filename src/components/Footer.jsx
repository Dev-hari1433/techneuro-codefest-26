import React from 'react';
import { Cpu, ArrowUpRight, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventsData';
import StarfieldBackground from './StarfieldBackground';

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

export default function Footer({ onScrollTo, onOpenRegister, onDownloadRulebook }) {
  return (
    <footer className="w-full bg-[#100804] text-stone-300 pt-16 pb-12 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden">
      <StarfieldBackground density={20} showSparkles={false} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-copper-500 to-amber-300 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#1A120B] rounded-full flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-copper-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1">
                tech<span className="text-copper-400">neuro</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono ml-0.5 font-normal">
                  '26
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Organized with pride by <strong className="text-white">TechNeuro Club</strong>, under the auspices of the <strong className="text-white">{SYMPOSIUM_INFO.department}</strong>.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-copper-400 shrink-0" />
                <span>{SYMPOSIUM_INFO.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-copper-400 shrink-0" />
                <span>techneuro.csai@symposium.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0 fill-current" />
                <a
                  href={SYMPOSIUM_INFO.contactWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-mono font-medium text-emerald-400/90"
                >
                  WhatsApp: +91 {SYMPOSIUM_INFO.contactPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onScrollTo('arc-gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5 Official Arenas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('arena-matchmaker')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Interactive Arena Matchmaker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Department Hall of Fame
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Helpdesk &amp; WhatsApp Hotline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Symposium FAQs &amp; ID Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Department Access & Documents */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Helpline &amp; WhatsApp
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Direct line to our President &amp; Faculty mentor desk for squad verification, rulebooks, and queries.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={SYMPOSIUM_INFO.contactWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp ({SYMPOSIUM_INFO.contactPhone})</span>
              </a>

              <button
                onClick={onDownloadRulebook}
                className="px-5 py-2.5 rounded-full border border-white/20 text-stone-200 hover:text-white text-xs font-medium hover:bg-white/5 transition-colors cursor-pointer"
              >
                Rulebooks (.PDF)
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 TechNeuro Codefest. Department of Computer Science with Artificial Intelligence.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Crafted with precision &amp; algorithmic passion
          </p>
        </div>
      </div>
    </footer>
  );
}
