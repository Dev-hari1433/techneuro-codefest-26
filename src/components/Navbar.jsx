import React, { useState, useEffect } from 'react';
import { ArrowRight, LayoutGrid, Cpu, X, Menu, ShieldCheck } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventsData';

export default function Navbar({ onOpenRegister, onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-8 sm:top-10 left-0 right-0 z-40 px-4 sm:px-8 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full px-5 py-2.5 sm:py-3 pointer-events-auto transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-[#1A120B]/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50'
            : 'bg-[#1A120B]/60 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Left Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-stone-300 tracking-wide">
          <button
            onClick={() => onScrollTo('hero')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onScrollTo('arc-gallery')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Arenas
          </button>
          <button
            onClick={() => onScrollTo('arena-matchmaker')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Matchmaker
          </button>
          <button
            onClick={() => onScrollTo('marquee-showcase')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Highlights
          </button>
          <button
            onClick={() => onScrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => onScrollTo('faq')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Center Logo */}
        <button
          onClick={() => onScrollTo('hero')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-copper-500 to-amber-300 p-[1.5px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#1A120B] rounded-full flex items-center justify-center">
              <Cpu className="w-4 h-4 text-copper-400 group-hover:text-copper-300" />
            </div>
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
            tech<span className="text-copper-400">neuro</span>
            <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono ml-0.5 font-normal">
              '26
            </span>
          </span>
        </button>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenRegister('ai-avengers')}
            className="group hidden sm:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 bg-white text-stone-950 font-medium text-xs sm:text-sm rounded-full hover:bg-stone-100 transition-all shadow-md cursor-pointer hover:shadow-lg"
          >
            <span>Register Department</span>
            <span className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Quick Menu / 2x2 Grid Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-stone-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <LayoutGrid className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto pointer-events-auto bg-[#1A120B]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-stone-200">
            <button
              onClick={() => {
                onScrollTo('hero');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-white/10 hover:text-copper-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onScrollTo('arc-gallery');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-white/10 hover:text-copper-400 transition-colors"
            >
              5 Official Arenas
            </button>
            <button
              onClick={() => {
                onScrollTo('arena-matchmaker');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-white/10 hover:text-copper-400 transition-colors"
            >
              Interactive Arena Matchmaker
            </button>
            <button
              onClick={() => {
                onScrollTo('marquee-showcase');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-white/10 hover:text-copper-400 transition-colors"
            >
              Symposium Highlights
            </button>
            <button
              onClick={() => {
                onScrollTo('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-white/10 hover:text-copper-400 transition-colors"
            >
              WhatsApp Hotline (6369230106)
            </button>
            <button
              onClick={() => {
                onScrollTo('faq');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-white/10 hover:text-copper-400 transition-colors"
            >
              Frequently Asked Questions
            </button>

            <button
              onClick={() => {
                onOpenRegister('ai-avengers');
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full flex items-center justify-between px-5 py-3 bg-white text-stone-900 font-semibold rounded-full hover:bg-stone-100 transition-colors"
            >
              <span>Register Department Squad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
