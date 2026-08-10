import { Bot, ShieldCheck, Zap, Globe, CheckCircle2, Lock } from 'lucide-react';
import aiAutomationImg from '../images/ai_automation.jpg';

export default function BentoGrid() {
  return (
    <section id="vorteile" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-slate-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
            Warum Rheindorf Digital
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">
            Moderne Technik ohne Agentur-Wasserkopf
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 text-pretty">
            Große Agenturen verrechnen Projektmanager, Meetings und Büro-Mieten. Bei mir bezahlen Sie nur für echte Leistung & Ergebnisse.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Large Feature Card (2 Columns wide on MD) */}
          <div className="md:col-span-2 bg-[#10172a] rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div className="relative z-10 max-w-lg mb-8">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/40 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Direkter Kontakt & Blitzschnelle Umsetzung
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Sie sprechen direkt mit dem Entwickler, der Ihre Website baut und Ihre KI-Systeme aufsetzt. Änderungswünsche werden ohne Umwege sofort umgesetzt.
              </p>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Keine langwierigen Abstimmungsschleifen</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Umsetzung in 14 Tagen nach Freigabe</span>
                </li>
              </ul>
            </div>

            <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-inner border border-slate-800">
              <img
                src={aiAutomationImg}
                alt="Automatisierter KI-Workflow"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
                  Visualisierung: KI-Workflow & Kalender-Automation
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 24/7 KI-Telefonist (1 Column) - IMMORTAL RULE 1 & 2 */}
          <div className="bg-[#10172a] text-white rounded-2xl p-8 border border-emerald-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/40 shadow-inner">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                24/7 KI-Telefonassistent
              </h3>
              {/* IMMORTAL RULE 3: High Contrast Subtext text-slate-200 */}
              <p className="text-slate-200 text-sm leading-relaxed">
                Nimmt Anrufe entgegen, beantwortet Fragen & bucht Kunden-Termine direkt in Ihren Kalender. Vollautomatisch.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <span className="text-3xl font-display font-bold text-emerald-400 block tabular-nums">24 / 7</span>
              <span className="text-xs text-slate-300 font-medium">Erreichbarkeit ohne Personalkosten</span>
            </div>
          </div>

          {/* Bento Card 3: Festpreisgarantie */}
          <div className="bg-[#10172a] rounded-2xl p-8 border border-slate-800 shadow-md flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-6 border border-slate-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                100% Festpreisgarantie
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Klarer Pauschalpreis vor Projektstart. Keine Abos, keine versteckten monatlichen Agentur-Zusatzkosten.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Transparente Kosten</span>
            </div>
          </div>

          {/* Bento Card 4: Lokale SEO Köln & NRW */}
          <div className="bg-[#10172a] rounded-2xl p-8 border border-slate-800 shadow-md flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-6 border border-slate-800">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Lokale SEO für Köln & NRW
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mit Schema.org LocalBusiness & perfekt optimierter Meta-Struktur für Top-Rankings in Ihrer Region.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Regionale Sichtbarkeit</span>
            </div>
          </div>

          {/* Bento Card 5: 100% DSGVO & EU-Hosting */}
          <div className="bg-[#10172a] rounded-2xl p-8 border border-slate-800 shadow-md flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-6 border border-slate-800">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                100% DSGVO & EU-Hosting
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rechtssichere Umsetzung, Datenverarbeitung in der EU & professioneller Impressum/Datenschutz-Schutz.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Maximale Rechtssicherheit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
