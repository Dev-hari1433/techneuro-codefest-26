import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, ExternalLink, Sparkles, Clock, MessageSquareQuote, ShieldCheck, ArrowRight } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventsData';
import StarfieldBackground from './StarfieldBackground';

function WhatsAppIcon({ className = "w-4 h-4" }) {
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

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "6369230106";
  const convenerName = "Ganesh Kumar";

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#120A05] text-white py-20 px-4 sm:px-8 overflow-hidden border-t border-white/10"
    >
      {/* Starfield & Sparkling Particles Background */}
      <StarfieldBackground density={25} showSparkles={true} />

      {/* Subtle Warm Amber Ambient Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-copper-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold uppercase tracking-wider mb-3">
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>President Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Have questions? Connect with our team
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Reach out directly for department squad queries, reporting instructions, or rulebook clarifications.
          </p>
        </div>

        {/* Refined Luxury Convener Contact Card */}
        <div className="bg-gradient-to-b from-[#1F140D] to-[#170E08] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
          
          {/* Top: Convener Profile Strip */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3.5">
              {/* Avatar Initials */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-copper-500 to-amber-400 p-[1.5px] flex items-center justify-center shrink-0 shadow-md">
                <div className="w-full h-full bg-[#1A120B] rounded-2xl flex items-center justify-center font-display font-bold text-base text-copper-300">
                  GK
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {convenerName}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Inquiries" />
                </div>
                <p className="text-xs text-stone-400">
                  President • Dept of Computer Science with Artificial Intelligence
                </p>
              </div>
            </div>

            {/* Small Elegant Phone Badge with WhatsApp Icon */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-current" />
              <span className="text-xs font-mono font-medium text-stone-200">
                +91 {phoneNumber}
              </span>
              <button
                onClick={handleCopyNumber}
                className="ml-1 text-[11px] text-stone-400 hover:text-white transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copied ? (
                  <span className="text-emerald-400 text-[10px] font-semibold">Copied</span>
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>

          {/* Middle: Action Buttons (WhatsApp + Call) */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={`https://wa.me/91${phoneNumber}?text=Hi%20Ganesh%20Kumar%2C%20I%20have%20a%20query%20regarding%20TechNeuro%20Codefest%2726`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950/60 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={`tel:+91${phoneNumber}`}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-white/20 hover:bg-white/10 text-stone-200 hover:text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-copper-400" />
              <span>Call (+91 {phoneNumber})</span>
            </a>
          </div>

          {/* Bottom: Venue & Timings Strip */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-copper-400 shrink-0" />
              <span>{SYMPOSIUM_INFO.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-copper-400 shrink-0" />
              <span>Desk Response: 08:30 AM – 09:00 PM IST</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
