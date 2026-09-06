import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RadialEventArc from './components/RadialEventArc';
import EventGrid from './components/EventGrid';
import ArenaMatchmaker from './components/ArenaMatchmaker';
import AutoScrollMarquee from './components/AutoScrollMarquee';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EventDrawer from './components/EventDrawer';
import RegistrationModal from './components/RegistrationModal';
import RulebookDownloadModal from './components/RulebookDownloadModal';
import { EVENTS_DATA } from './data/eventsData';

export default function App() {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [preselectedEventId, setPreselectedEventId] = useState('ai-avengers');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const selectedEvent = EVENTS_DATA.find((e) => e.id === selectedEventId) || null;

  const handleOpenRegister = (eventId) => {
    if (eventId && typeof eventId === 'string') {
      setPreselectedEventId(eventId);
    }
    setIsRegisterOpen(true);
  };

  const handleSelectEvent = (eventId) => {
    setSelectedEventId(eventId);
  };

  const handleCloseDrawer = () => {
    setSelectedEventId(null);
  };

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col selection:bg-copper-500 selection:text-white">
      {/* Top Announcement Bar */}
      <TopBanner onOpenRegister={() => handleOpenRegister('ai-avengers')} />

      {/* Floating Dark Glassmorphic Navbar */}
      <Navbar
        onOpenRegister={() => handleOpenRegister('ai-avengers')}
        onScrollTo={handleScrollTo}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* Dark Mocha Luxury Hero Section with Prominent Title */}
        <Hero
          onOpenRegister={() => handleOpenRegister('ai-avengers')}
          onSelectEvent={handleSelectEvent}
          onScrollTo={handleScrollTo}
        />

        {/* The Iconic Semi-Circular Radial Event Gallery Arc (Enhanced & Filled) */}
        <RadialEventArc
          onSelectEvent={handleSelectEvent}
          onOpenRegister={() => handleOpenRegister('ai-avengers')}
          onDownloadRulebook={() => setIsDownloadOpen(true)}
        />

        {/* Event Arenas & Interactive Filters Grid with 3 Action Buttons */}
        <EventGrid
          onSelectEvent={handleSelectEvent}
          onOpenRegister={handleOpenRegister}
        />

        {/* Interactive Arena Matchmaker & Skill Matrix */}
        <ArenaMatchmaker
          onSelectEvent={handleSelectEvent}
          onOpenRegister={handleOpenRegister}
        />

        {/* Continuous Auto-Scrolling Marquee Carousel (Replaces Testimonials) */}
        <AutoScrollMarquee
          onOpenRegister={handleOpenRegister}
          onSelectEvent={handleSelectEvent}
        />

        {/* Guidelines, ID Card Directives & FAQ */}
        <FAQSection />

        {/* Dedicated WhatsApp & Convener Contact Section (Ganesh Kumar • 6369230106) */}
        <ContactSection />
      </main>

      {/* Luxury Dark Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenRegister={() => handleOpenRegister('ai-avengers')}
        onDownloadRulebook={() => setIsDownloadOpen(true)}
      />

      {/* Slide-over Rulebook Drawer */}
      <EventDrawer
        event={selectedEvent}
        isOpen={Boolean(selectedEventId)}
        onClose={handleCloseDrawer}
        onOpenRegister={(eventId) => handleOpenRegister(eventId)}
      />

      {/* Department Registration Modal with Solo Limit for Technical Mehndi */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialEventId={preselectedEventId}
      />

      {/* PDF Rulebook Download Modal */}
      <RulebookDownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}
