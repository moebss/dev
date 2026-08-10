import { Star, CheckCircle2, ShieldCheck, ArrowRight, Bot, Sparkles, Code2, Zap } from 'lucide-react';
import alexanderHeroImg from '../images/itsme.png';
import alexanderProfileImg from '../images/profile.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0f19] border-b border-slate-800">
      
      {/* WebGradients Ambient Emerald/Cyan Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Personal Founder Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-emerald-500/40 px-4 py-1.5 rounded-full shadow-sm w-fit mb-6">
            <img 
              src={alexanderProfileImg} 
              alt="Alexander Rheindorf Gründer & Entwickler" 
              className="w-7 h-7 rounded-full object-cover border border-emerald-400"
            />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 tracking-wider">
                Alexander Rheindorf • Webdesign & KI-Automationen Köln/NRW
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1] mb-6">
            High-End Websites & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">KI-Automationen</span>.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-slate-300 text-pretty mb-8 max-w-xl font-normal leading-relaxed">
            Ich bin <strong className="text-white font-semibold">Alexander Rheindorf</strong>. Ich entwickle kaufstarke Websites und 24/7 KI-Telefonassistenten für Handwerker, Friseure, Shisha-Shops & lokale Betriebe in Köln & NRW. 
            <strong className="text-emerald-400 font-semibold block mt-1"> Kein teurer Agentur-Overhead – direkt, persönlich, messbare Ergebnisse.</strong>
          </p>

          {/* Primary CTA + Rechner Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Kostenloses Erstgespräch anfragen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#rechner"
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base px-6 py-4 rounded-xl border border-slate-700 shadow-sm transition-colors text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Projekt-Kosten schätzen</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-300 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Festpreisgarantie</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% DSGVO-Konform</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>14 Tage Express-Umsetzung</span>
            </div>
          </div>

        </div>

        {/* Right 50% Edge-to-Edge Image with Alexander's Real Personal Portrait */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-950">
          
          <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
            <img
              src={alexanderHeroImg}
              alt="Alexander Rheindorf Gründer Rheindorf Digital"
              className="max-h-[600px] w-auto object-contain filter drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent lg:hidden" />

          {/* Floating Glassmorphism Founder Badge */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-xs bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/40 shadow-2xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/40 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Alexander Rheindorf</p>
                <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">Persönlicher Ansprechpartner & Entwickler</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
