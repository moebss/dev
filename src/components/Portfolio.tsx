import { useState } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import heroImg from '../images/hero.jpg';
import aiAutomationImg from '../images/ai_automation.jpg';

interface PortfolioProps {
  onOpenContact: () => void;
}

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'weber-bad',
      category: 'handwerk',
      categoryLabel: 'Handwerk & Sanierung',
      title: 'Weber Badmanufaktur & Fliesenleger',
      location: 'Köln / Bonn',
      desc: 'High-End Badsanierungs-Landingpage mit interaktivem Vorher/Nachher-Slider, 3D-Badrechner & hellem Travertin-Design.',
      stats: '+300% mehr Anfragen im 1. Monat',
      tags: ['3D-Badrechner', 'Vorher/Nachher Slider', 'Local SEO Köln'],
      liveUrl: 'http://localhost:5055/',
      img: heroImg
    },
    {
      id: 'smoky-shop',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce & Retail',
      title: 'Smoky Lounge & Headshop',
      location: 'Horrem / Erftstadt',
      desc: 'Dark Editorial Online-Showcase mit Slide-Over Warenkorb, Versandkosten-Fortschrittsbalken & Altersverifikation (18+).',
      stats: '+45% höherer Warenkorbwert',
      tags: ['Slide-Over Cart', '18+ Jugendschutz', 'Dark Editorial'],
      liveUrl: '#',
      img: aiAutomationImg
    },
    {
      id: 'physio-praxis',
      category: 'gesundheit',
      categoryLabel: 'Gesundheit & Medizin',
      title: 'Physiotherapie & Reha-Zentrum',
      location: 'Bonn / Rhein-Sieg',
      desc: 'Medizinische Vertrauens-Website gekoppelt mit 24/7 KI-Telefonassistent zur automatischen Rezept- & Terminbuchung.',
      stats: '0 entgangene Patientenanrufe',
      tags: ['KI-Telefonassistent', 'Online-Termine', 'DSGVO-Hosting'],
      liveUrl: '#',
      img: heroImg
    },
    {
      id: 'apex-detailing',
      category: 'automotive',
      categoryLabel: 'Automotive & Detailing',
      title: 'Apex Car Detailing Studio',
      location: 'Düsseldorf / Köln',
      desc: 'High-Performance Landingpage für Keramikversiegelung & Lackkorrektur mit Vorher/Nachher-Gleitregler.',
      stats: 'Ausgebucht für 6 Wochen',
      tags: ['Lackkorrektur-Slider', 'Paket-Kalkulator', 'Mobile First'],
      liveUrl: '#',
      img: aiAutomationImg
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-slate-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
            Erfolgsgeschichten & Referenzen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">
            Ausgewählte Kundenprojekte
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 text-pretty">
            Ein Auszug aus realisierten Webdesign- und KI-Automations-Projekten für lokale Betriebe in Köln & NRW.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { id: 'all', label: 'Alle Projekte' },
            { id: 'handwerk', label: 'Handwerk & Sanierung' },
            { id: 'ecommerce', label: 'E-Commerce & Retail' },
            { id: 'gesundheit', label: 'Gesundheit & Medizin' },
            { id: 'automotive', label: 'Automotive' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#10172a] rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div className="relative h-60 overflow-hidden border-b border-slate-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/90 text-emerald-400 font-semibold text-xs px-3 py-1.5 rounded-md border border-emerald-500/30 backdrop-blur-md">
                  {project.categoryLabel}
                </div>
                <div className="absolute top-4 right-4 bg-slate-950/90 text-white font-semibold text-xs px-3 py-1.5 rounded-md border border-slate-700 backdrop-blur-md">
                  📍 {project.location}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2 rounded-lg text-emerald-400 text-xs font-bold mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Messbares Ergebnis: {project.stats}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] font-medium text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">System: High-End WebApp + KI</span>
                  <button
                    onClick={onOpenContact}
                    className="text-emerald-400 hover:text-emerald-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>Ähnliches Projekt anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 bg-slate-900/90 border border-slate-800 p-8 rounded-2xl text-center max-w-2xl mx-auto shadow-xl">
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Möchten Sie Ihr Unternehmen hier sehen?
          </h3>
          <p className="text-slate-300 text-sm mb-6">
            Lassen Sie uns in einem 15-minütigen Erstgespräch klären, was wir für Ihr Business in Köln & NRW herausholen können.
          </p>
          <button
            onClick={onOpenContact}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Jetzt kostenloses Erstgespräch vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
