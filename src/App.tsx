import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Portfolio from './components/Portfolio';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import BentoGrid from './components/BentoGrid';
import CostEstimator from './components/CostEstimator';
import ServiceTabs from './components/ServiceTabs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ImpressumModal from './components/ImpressumModal';
import DatenschutzModal from './components/DatenschutzModal';

export default function App() {
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. Header Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section (50/50 Edge-to-Edge) */}
        <Hero onOpenContact={scrollToContact} />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Portfolio / Case Studies Showcase */}
        <Portfolio onOpenContact={scrollToContact} />

        {/* 5. Webflow Feature 1: Vorher / Nachher Slider */}
        <BeforeAfterSlider />

        {/* 5. Webflow Feature 2: Bento Grid Layout */}
        <BentoGrid />

        {/* 6. Webflow Feature 3: Interaktiver Projekt-Rechner */}
        <CostEstimator onOpenContact={scrollToContact} />

        {/* 7. Webflow Feature 4: Dynamic Service Tabs */}
        <ServiceTabs onOpenContact={scrollToContact} />

        {/* 8. Testimonials & Google Reviews */}
        <Testimonials />

        {/* 9. FAQ Sektion */}
        <FAQ />

        {/* 10. Direct Contact Form */}
        <Contact />
      </main>

      {/* 11. Structured 4-Column Footer */}
      <Footer
        onOpenImpressum={() => setImpressumOpen(true)}
        onOpenDatenschutz={() => setDatenschutzOpen(true)}
      />

      {/* 12. Mobile Sticky Action Bar */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Modals */}
      <ImpressumModal isOpen={impressumOpen} onClose={() => setImpressumOpen(false)} />
      <DatenschutzModal isOpen={datenschutzOpen} onClose={() => setDatenschutzOpen(false)} />

    </div>
  );
}
