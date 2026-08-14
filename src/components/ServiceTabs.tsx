import { useState } from 'react';
import { Layout, Bot, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../images/hero_rheindorf.jpg';
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
      desc: 'Maßgeschneiderte, ultraschnelle Websites speziell für lokale Unternehmen in Köln & NRW. Keine langweiligen Baukästen, sondern kaufstarke Benutzeroberflächen mit modernster React- & Vite-Technologie.',
      bullets: [
        '100% Smartphone- und Tablet-Optimierung (Mobile First)',
        'Ladezeiten unter 0.8 Sekunden (Lighthouse Score 98+)',
        'Integrierter Vorher/Nachher-Slider & interaktiver Preiskalkulator',
        'Rechtssicher nach DSGVO & § 5 DDG mit self-hosted Schriftarten'
      ],
      price: 'ab 1.490 € (Festpreis)',
      img: heroImg
    },
    {
      id: 'ki',
      title: '24/7 KI-Telefonassistent & Voice AI',
      icon: Bot,
      tag: 'Keine verlorenen Anrufe mehr',
      desc: 'Ein intelligenter Sprachassistent nimmt Ihre Anrufe auf der Baustelle oder im Kundentermin entgegen, beantwortet Kundenfragen und bucht Termine direkt in Ihren Kalender.',
      bullets: [
        '24/7 telefonische Erreichbarkeit auch nach Feierabend',
        'Direkte Kalender-Synchronisation (Google/Outlook)',
        'Natürlich klingende deutsche KI-Stimme mit Fachvokabular',
        'SMS/WhatsApp-Zusammenfassung nach jedem Anruf an Sie'
      ],
      price: 'ab 1.890 € (Einmalig)',
      img: aiAutomationImg
    },
    {
      id: 'seo',
      title: 'Lokale SEO & Google Maps 3-Pack',
      icon: TrendingUp,
      tag: 'Mehr Neukunden aus der Region',
      desc: 'Gezielte Suchmaschinenoptimierung für Köln, Kerpen, Erftkreis & NRW. Damit Neukunden aus Ihrer Region bei Google ganz oben landen.',
      bullets: [
        'Schema.org ProfessionalService & LocalBusiness JSON-LD',
        'Keyword-Strategie für Ihre lokale Stadt & Dienstleistungen',
        'Google My Business & Bewertungs-Integration',
        'Nachhaltige Top-Platzierungen ohne teure Google Ads'
      ],
      price: 'im Web-Paket enthalten',
      img: heroImg
    },
    {
      id: 'wartung',
      title: 'Rundum-Sorglos Wartung & Support',
      icon: ShieldCheck,
      tag: 'Maximale Zuverlässigkeit',
      desc: 'Regelmäßige Sicherheits-Updates, Hosting auf deutschen High-Speed Servern, Domain-Verwaltung und schnelle Content-Anpassungen innerhalb von 24 Stunden.',
      bullets: [
        'Superschnelles Hosting auf deutschen Servern',
        'Laufende Sicherheits- & Performance-Überwachung',
        'Änderungswünsche per WhatsApp innerhalb 24h erledigt',
        'Monatlich kündbar – keine Knebelverträge'
      ],
      price: 'ab 49 € / Monat',
      img: heroImg
    }
  ];

  const current = services.find(s => s.id === activeTab) || services[0];
  const CurrentIcon = current.icon;

  return (
    <section id="pakete" className="py-24 bg-[#0e1626] border-b border-[#1e2c4a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-[#080c14] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Leistungspakete & Festpreise
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Transparente Preise, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              maximale Wirkung
            </span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Wählen Sie den passenden Baustein für Ihren Betrieb. 100% Festpreisgarantie ohne versteckte Zusatzkosten.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'bg-[#080c14] border-emerald-500 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500'
                    : 'bg-[#080c14]/60 border-[#1e2c4a] hover:border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#131d33] text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <div>
                  <span className={`font-outfit text-sm font-bold block ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {service.title.split('&')[0]}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold block mt-0.5">
                    {service.price}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Card */}
        <div className="bg-[#080c14] border border-[#1e2c4a] rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.tag}</span>
            </div>

            <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {current.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {current.desc}
            </p>

            {/* Bullets */}
            <div className="space-y-3 pt-2">
              {current.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#1e2c4a] flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Paket unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-400 font-mono">
                Richtpreis: <strong className="text-white font-bold">{current.price}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1e2c4a] shadow-xl">
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0e1626]/90 backdrop-blur-md p-4 rounded-xl border border-[#1e2c4a]">
              <span className="text-xs font-bold text-white block">Rheindorf Digital Qualitäts-Standard</span>
              <span className="text-[11px] text-emerald-400">100% maßgeschneidert • Keine monatlichen Lizenzgebühren</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
