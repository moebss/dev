import { Bot, ShieldCheck, Zap, Globe, CheckCircle2, Lock, Sparkles, PhoneCall, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import aiAutomationImg from '../images/ai_automation.jpg';
import heroImg from '../images/hero_rheindorf.jpg';

export default function BentoGrid() {
  return (
    <section id="leistungen" className="py-24 bg-[#080c14] border-b border-[#1e2c4a]/80 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-[#0e1626] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Technologie & Mehrwert
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Warum lokale Marktführer auf <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Rheindorf Digital
            </span> setzen.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Klassische Agenturen berechnen Projektmanager, Overhead und 6 Monate Wartezeit. Ich baue schlanke, konvertierende High-End Systeme direkt für Ihren Erfolg.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1 (Large 7-Col): 14-Tage Express & Direkter Draht */}
          <div className="lg:col-span-7 bg-[#0e1626] border border-[#1e2c4a] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#131d33] border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white leading-snug">
                Direkter Entwickler-Kontakt & 14 Tage Go-Live
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Sie sprechen nicht mit Praktikanten oder Account-Managern, sondern direkt mit Alexander Rheindorf. Schnelle Entscheidungen, maßgeschneiderter Code und Go-Live innerhalb von zwei Wochen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Keine monatelangen Meetings</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Festpreis-Garantie</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quellcode gehört zu 100% Ihnen</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Persönlicher WhatsApp-Draht</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1e2c4a] flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Status: Verfügbar für neue Projekte</span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Q3/Q4 2026 Slots offen</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 (5-Col): 24/7 KI-Telefonassistent Deep Dive */}
          <div id="ki-telefonie" className="lg:col-span-5 bg-gradient-to-br from-[#0e1626] to-[#131d33] border border-[#1e2c4a] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group">
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <Sparkles className="w-3 h-3" />
                <span>Voice AI Innovation</span>
              </div>

              <h3 className="font-outfit text-2xl font-bold text-white leading-tight">
                24/7 KI-Telefonassistent
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Nimmt Anrufe auf der Baustelle oder im Kundentermin an, qualifiziert Anliegen, beantwortet Fragen und bucht Termine direkt in Ihren Kalender.
              </p>

              {/* Interactive Voice Simulation Preview */}
              <div className="bg-[#080c14] border border-[#1e2c4a] p-4 rounded-2xl space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Live-Anrufannahme</span>
                  </span>
                  <span className="font-mono text-[10px]">00:18 min</span>
                </div>
                <p className="text-xs text-slate-200 italic leading-snug">
                  „Hallo! Ich nehme den Termin für die Badsanierung am Donnerstag um 10:00 Uhr gerne für Sie auf...“
                </p>
                <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-semibold pt-1 border-t border-slate-800">
                  <Calendar className="w-3 h-3" />
                  <span>Google Kalender + WhatsApp SMS Sync</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2c4a]/60">
              <a
                href="tel:016096351750"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
              >
                <span>Live-Demo anfordern</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 3 (4-Col): Local SEO & Google Maps 3-Pack */}
          <div className="lg:col-span-4 bg-[#0e1626] border border-[#1e2c4a] rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#131d33] border border-[#1e2c4a] flex items-center justify-center text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-white">
                Google Maps & Local SEO
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Vollständiges Schema.org JSON-LD Markup, NAP-Konsistenz & lokale Keyword-Cluster für Top-Platzierungen im Raum Köln & Erftkreis.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1e2c4a] text-xs font-semibold text-emerald-400">
              ✓ Schema.org ProfessionalService
            </div>
          </div>

          {/* Bento Card 4 (4-Col): Interaktive Lead-Tools & Rechner */}
          <div className="lg:col-span-4 bg-[#0e1626] border border-[#1e2c4a] rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#131d33] border border-[#1e2c4a] flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-white">
                Interaktive Rechner & Slider
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Vorher/Nachher-Transformationen, Style-Rechner & 3-Schritt-Preiskalkulatoren verwandeln passive Besucher in kaufbereite Anfragen.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1e2c4a] text-xs font-semibold text-emerald-400">
              ✓ 3x höhere Lead-Konversion
            </div>
          </div>

          {/* Bento Card 5 (4-Col): 100% DSGVO (§5 DDG) & Self-Hosted */}
          <div className="lg:col-span-4 bg-[#0e1626] border border-[#1e2c4a] rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#131d33] border border-[#1e2c4a] flex items-center justify-center text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-white">
                100% DSGVO & Deutsche Server
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Self-hosted Schriftarten, rechtssichere Impressum- & Datenschutz-Integration (§ 5 DDG) und abmahnsichere Formulare.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1e2c4a] text-xs font-semibold text-emerald-400">
              ✓ 0 externe Tracking-Tracker
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
