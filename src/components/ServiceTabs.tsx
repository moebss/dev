import { useState } from 'react';
import { Layout, Bot, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import heroImg from '../images/hero.jpg';
import aiAutomationImg from '../images/ai_automation.jpg';

interface ServiceTabsProps {
  onOpenContact: () => void;
}

export default function ServiceTabs({ onOpenContact }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState('webdesign');

  const services = [
    {
      id: 'webdesign',
      title: 'High-End Webdesign & Relaunch',
      icon: Layout,
      tag: 'Bestseller für lokale Betriebe',
      desc: 'Maßgeschneiderte, ultraschnelle Websites speziell für lokale Unternehmen in Köln & NRW. Keine langweiligen Baukästen, sondern kaufstarke Benutzeroberflächen.',
      bullets: [
        'Responsive Design für 100% Smartphone-Optimierung',
        'Ladezeiten unter 1 Sekunde (Vite / React Architecture)',
        'Fotorealistisches Branchen-Matching',
        'Fest eingebettetes Lead-Formular für hohe Conversion'
      ],
      price: 'ab 1.490 € (Pauschal)',
      img: heroImg
    },
    {
      id: 'ki',
      title: '24/7 KI-Telefonassistent',
      icon: Bot,
      tag: 'Keine verlorenen Anrufe mehr',
      desc: 'Ein intelligenter Sprachassistent nimmt Anrufe entgegen, beantwortet Kundenfragen zur Dienstleistung und bucht Termine direkt in Ihren Google- oder Outlook-Kalender.',
      bullets: [
        'Vollautomatische 24/7 Erreichbarkeit auch nach Feierabend',
        'Direkte Synchronisation mit Ihrem Kalender',
        'Echte natürliche deutsche Sprachausgabe',
        '100% DSGVO-konforme Datenverarbeitung in der EU'
      ],
      price: 'ab 1.890 € (Einmalig)',
      img: aiAutomationImg
    },
    {
      id: 'seo',
      title: 'Lokale SEO & Google Maps Boost',
      icon: TrendingUp,
      tag: 'Mehr Neukunden aus der Region',
      desc: 'Gezielte lokale Suchmaschinenoptimierung für Köln, Kerpen & NRW. Damit Kunden aus Ihrer Umgebung Sie direkt auf Platz 1 bei Google finden.',
      bullets: [
        'Google My Business Optimierung & Schema.org JSON-LD',
        'Keywords-Ausrichtung auf Ihre spezifische Nische & Stadt',
        'Verstärkter Vertrauensaufbau durch Bewertungs-Badges',
        'Messbare Ergebnisse ab dem ersten Monat'
      ],
      price: 'im Paket enthalten',
      img: heroImg
    },
    {
      id: 'wartung',
      title: 'Wartung & DSGVO-Pflege',
      icon: ShieldCheck,
      tag: 'Rundum-Sorglos-Garantie',
      desc: 'Ich halte Ihre Website technisch aktuell, sichere Backups ab und kümmere mich um rechtliche Updates (Impressum/Datenschutz).',
      bullets: [
        'Monatliche Sicherheits- & Technik-Updates',
        'Regelmäßige automatisierte Cloud-Backups',
        'Rechtssichere Cookie- & Datenschutzerklärungen',
        'Direkter Ansprechpartner ohne Warteschleife'
      ],
      price: 'optional buchbar',
      img: aiAutomationImg
    }
  ];

  const current = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="leistungen" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-slate-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
            Leistungsspektrum
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">
            Digitaler Vorsprung für Ihr Unternehmen
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 text-pretty">
            Klicken Sie durch die Leistungsbereiche, um Details zu Funktion, Vorteilen und Preisen zu sehen.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-[#10172a] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Text & Details */}
          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-md mb-4">
                {current.tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {current.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.desc}
              </p>

              <div className="space-y-3 mb-8">
                {current.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Investition:</span>
                <span className="text-lg font-bold text-white font-display">{current.price}</span>
              </div>
              <button
                onClick={onOpenContact}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Details anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] lg:min-h-full">
            <img
              src={current.img}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
