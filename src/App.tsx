import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Portfolio from './components/Portfolio';
import AiVoiceDemo from './components/AiVoiceDemo';
import BentoGrid from './components/BentoGrid';
import ServiceTabs from './components/ServiceTabs';
import RoiCalculator from './components/RoiCalculator';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import TechBenchmark from './components/TechBenchmark';
import CostEstimator from './components/CostEstimator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 pb-16 sm:pb-0 overflow-x-hidden">
      
      {/* 1. Header Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section (100vh Atmospheric Cinematic Canvas) */}
        <Hero onOpenContact={scrollToContact} />

        {/* 3. Tech & Trust Strip */}
        <TrustStrip />

        {/* 4. Live Portfolio Showcase (Alyas Barbershop, Burning Bandit, Nails Shop, AZ Heizung) */}
        <Portfolio onOpenContact={scrollToContact} />

        {/* 5. Live Interactive Voice AI Phone Assistant Simulator */}
        <AiVoiceDemo />

        {/* 6. Bento Grid: Why Rheindorf Digital & Tech Pillars */}
        <BentoGrid />

        {/* 7. Service Packages & Transparent Pricing */}
        <ServiceTabs onOpenContact={scrollToContact} />

        {/* 8. Interactive "Verpasster Umsatz" ROI Calculator for Handwerker & Salons */}
        <RoiCalculator onOpenContact={scrollToContact} />

        {/* 9. Interactive Before/After Transformation Slider */}
        <BeforeAfterSlider />

        {/* 10. Performance & Lighthouse 100 Benchmark */}
        <TechBenchmark />

        {/* 11. Interactive 60-Second Project Cost Estimator */}
        <CostEstimator onOpenContact={scrollToContact} />

        {/* 12. Local Business Testimonials & Social Proof */}
        <Testimonials />

        {/* 13. FAQ Sektion */}
        <FAQ />

        {/* 14. Direct High-Converting Contact with DSGVO Trigger */}
        <Contact onOpenDatenschutz={() => setLegalModal('datenschutz')} />
      </main>

      {/* 15. Structured 4-Column Footer */}
      <Footer
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* 16. Mobile Sticky Action Bar */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
