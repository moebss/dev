import { useState } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

import userImg1 from '../images/media_1786244763224.png';
import userImg2 from '../images/media_1786244838088.png';
import userImg3 from '../images/media_1786244996672.png';
import userImg4 from '../images/media_1786372914462.png';
import userImg5 from '../images/media_1786374893160.png';
import heroImg from '../images/hero_rheindorf.jpg';
import aiAutomationImg from '../images/ai_automation.jpg';

interface PortfolioProps {
  onOpenContact: () => void;
}

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'az-heizung',
      category: 'handwerk',
      categoryLabel: 'Sanitär & Heizungstausch',
      title: 'AZ Heizung-Sanitär Fachverkauf',
      location: 'Horrem / Erftkreis',
      desc: 'XXL Badsanierung & Heizungstausch Plattform mit Notdienst-Notruf, 3D-Kostenrechner & Meisterbetrieb-Garantie.',
      stats: '+300% mehr Anfragen im 1. Monat',
      tags: ['Badsanierungs-Rechner', 'Wärmepumpe', 'Local SEO Horrem'],
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
      img: userImg1
    },
    {
      id: 'schmitz-hairline',
      category: 'beauty',
      categoryLabel: 'Friseur & Beauty Boutique',
      title: 'Schmitz Guido Hairline',
      location: 'Köln / Horrem',
      desc: 'Boutique Luxury Editorial Auftritt mit Online-Terminbuchung, Vorher/Nachher-Styling & Instagram-Feed Integration.',
      stats: '+45% Neukunden-Termine',
      tags: ['Boutique Editorial', 'Online-Buchung', 'Stylist Showcase'],
      liveUrl: 'https://moebss.github.io/schmitz-hairline/',
      img: userImg2
    },
    {
      id: 'smoky-shop',
      category: 'ecommerce',
      categoryLabel: 'Shisha & Genussmittel',
      title: 'Smoky Head&Shisha Shop Horrem',
      location: 'Horrem (Seit 2013)',
      desc: 'SmokeFactory Dark Editorial mit warmem Amber-Glow, Facebook-Banner Integration & 1-Klick WhatsApp Support.',
      stats: 'Seit 2013 etabliert in Horrem',
      tags: ['Dark Gold Editorial', 'Facebook-Banner', 'WhatsApp Direct'],
      liveUrl: 'https://moebss.github.io/smoky-headshop-horrem/',
      img: userImg3
    },
    {
      id: 'handwerk-nawrath',
      category: 'handwerk',
      categoryLabel: 'Trockenbau & Sanierung',
      title: 'Handwerkerservice Nawrath',
      location: 'Erftstadt / Köln',
      desc: 'Robuste Handwerker-Landingpage mit Express-Anfrage-Funnel & 100% Festpreis-Garantie.',
      stats: 'Ausgebucht für 6 Wochen',
      tags: ['Express-Funnel', 'Trockenbau', 'Mobile First'],
      liveUrl: 'https://moebss.github.io/handwerkerservice-nawrath/',
      img: userImg4
    },
    {
      id: 'barth-beratung',
      category: 'consulting',
      categoryLabel: 'Unternehmensberatung & BwB',
      title: 'Klaus Barth GmbH Beratung',
      location: 'NRW / Erftkreis',
      desc: 'Executive Navy Corporate Portal mit BWA-Erfolgsberichten & digitalem Aufmaß-Rechner.',
      stats: '100% digitale BwB Prozesse',
      tags: ['Executive Navy', 'BWA-Reports', 'B2B Portal'],
      liveUrl: 'https://moebss.github.io/klaus-barth-beratung/',
      img: userImg5
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
            Erfolgsgeschichten & Echte Kunden-Demos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">
            Ausgewählte Kundenprojekte
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 text-pretty">
            Ein Auszug aus unseren fertig umgesetzten Webdesign- und KI-Automations-Projekten in Köln & NRW.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { id: 'all', label: 'Alle 16 Demos' },
            { id: 'handwerk', label: 'Sanitär & Handwerk' },
            { id: 'beauty', label: 'Friseur & Beauty' },
            { id: 'ecommerce', label: 'Shisha & Retail' },
            { id: 'consulting', label: 'B2B & Beratung' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 font-semibold">{project.location}</p>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400">{project.stats}</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <span>Demo Live ansehen</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
