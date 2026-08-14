import { ArrowRight, Phone, Sparkles, CheckCircle2, ShieldCheck, Zap, Bot, Code2 } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';
import heroImg from '../images/hero_rheindorf.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollToEstimator = () => {
    document.getElementById('rechner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080c14] pt-32 pb-20 sm:pt-36 sm:pb-24 border-b border-[#1e2c4a]/80">
      
      {/* 100vh Full Bleed Tech Photography with Dark Obsidian Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Alexander Rheindorf – Rheindorf Digital"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.18] scale-105"
        />
        {/* Deep Ambient Emerald / Navy Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/75 to-[#080c14]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-teal-900/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-8">
        
        {/* Eyebrow Founder Pill */}
        <div className="inline-flex items-center gap-3 bg-[#0e1626]/90 border border-emerald-500/40 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-emerald-400 backdrop-blur-md shadow-xl">
          <div className="w-5 h-5 rounded-full overflow-hidden border border-emerald-400 shrink-0">
            <img src={alexanderProfileImg} alt="Alexander Rheindorf" className="w-full h-full object-cover" />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="uppercase tracking-widest text-[11px] sm:text-xs">
            ALEXANDER RHEINDORF • WEBDESIGN & KI-AUTOMATIONEN KÖLN / NRW
          </span>
        </div>

        {/* Massive Outfit Display Headline */}
        <h1 className="font-outfit text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto">
          High-End Websites & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            KI-Automationen
          </span>.
        </h1>

        {/* Atmospheric Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
          Ich entwickle maßgeschneiderte Websites mit messbarem Neukundenstrom und 24/7 KI-Telefonassistenten für Handwerker, Salons & lokale Marktführer in Köln & NRW. 
          <span className="text-emerald-400 font-semibold block mt-1">Kein teurer Agentur-Overhead – direkt, schnell, messbare Ergebnisse.</span>
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            aria-label="Kostenloses Erstgespräch vereinbaren"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition-all transform active:scale-98 flex items-center gap-3 cursor-pointer group uppercase tracking-wider"
          >
            <span>Erstgespräch Buchen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToEstimator}
            aria-label="Projekt-Kosten berechnen"
            className="bg-[#0e1626]/90 hover:bg-[#131d33] text-white font-semibold text-base sm:text-lg px-7 py-4 sm:py-5 rounded-xl border border-[#1e2c4a] hover:border-emerald-500/40 backdrop-blur-md transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Projekt-Kosten Rechner</span>
          </button>

          <a
            href="tel:016096351750"
            className="bg-[#0e1626]/90 hover:bg-[#131d33] text-slate-300 hover:text-white font-semibold text-base sm:text-lg px-6 py-4 sm:py-5 rounded-xl border border-[#1e2c4a] transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span className="tabular-nums font-mono">0160 96351750</span>
          </a>
        </div>

        {/* High-Impact Metric Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-[#1e2c4a]/80 max-w-4xl mx-auto">
          <div className="bg-[#0e1626]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#1e2c4a]">
            <span className="font-outfit text-2xl font-bold text-emerald-400 block">100%</span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Festpreisgarantie</span>
          </div>

          <div className="bg-[#0e1626]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#1e2c4a]">
            <span className="font-outfit text-2xl font-bold text-white block">14 Tage</span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Express-Umsetzung</span>
          </div>

          <div className="bg-[#0e1626]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#1e2c4a]">
            <span className="font-outfit text-2xl font-bold text-white block flex items-center justify-center gap-1 text-slate-100">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>&lt; 0.8s</span>
            </span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Ladezeit (Lighthouse 98+)</span>
          </div>

          <div className="bg-[#0e1626]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#1e2c4a]">
            <span className="font-outfit text-2xl font-bold text-white block flex items-center justify-center gap-1 text-slate-200">
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>24/7</span>
            </span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">KI-Telefonassistent</span>
          </div>
        </div>

      </div>
    </section>
  );
}
