import { useState } from 'react';
import { ExternalLink, Sparkles, ArrowRight, ShieldCheck, Star, Bot, CheckCircle2 } from 'lucide-react';

import userImg1 from '../images/media_1786244763224.png';
import userImg2 from '../images/media_1786244838088.png';
import userImg3 from '../images/media_1786244996672.png';
import userImg4 from '../images/media_1786372914462.png';
import userImg5 from '../images/media_1786374893160.png';
import aiAutomationImg from '../images/ai_automation.jpg';

interface PortfolioProps {
  onOpenContact: () => void;
}

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'alyas-barber',
      category: 'beauty',
      categoryLabel: 'Barbershop & Herrensalon',
      title: 'Alyas Barbershop Horrem',
      location: 'Kerpen-Horrem (Bahnhofstraße 14)',
      desc: '100vh Full-Bleed Dark Luxury Experience mit Fraunces-Typografie, interaktivem Style-Kalkulator & 1-Klick WhatsApp Terminbuchung.',
      stats: '4.9 ★ Top-Bewertet in Horrem',
      tags: ['100vh Cinematic Hero', 'Style-Rechner', 'DSGVO §5 DDG', 'Local SEO'],
      liveUrl: 'https://moebss.github.io/alyas-barbershop-horrem/',
      img: userImg2,
      badge: 'Live Projekt'
    },
    {
      id: 'burning-bandit',
      category: 'tattoo',
      categoryLabel: 'Tattoo & Fine Art',
      title: 'The Burning Bandit (Independent Ink)',
      location: 'Kerpen-Horrem (Hauptstraße 231)',
      desc: 'Dark Craft Atmosphäre in Champagner-Gold mit interaktivem Cover-Up Transformations-Slider, Artist-Showcase & 3-Schritt Preiskalkulator.',
      stats: '4.8 ★ bei 160+ Google Reviews',
      tags: ['Vorher/Nachher-Slider', 'Tattoo-Kalkulator', 'Resident Artists', 'Self-Hosted Fonts'],
      liveUrl: 'https://moebss.github.io/the-burning-bandit-kerpen/',
      img: userImg4,
      badge: 'Live Projekt'
    },
    {
      id: 'nails-shop',
      category: 'beauty',
      categoryLabel: 'Boutique Nagelstudio & Spa',
      title: 'The Nails Shop Horrem',
      location: 'Kerpen-Horrem (Hauptstraße 18)',
      desc: 'Sinnliches Premium-Design in warmem Leinen & Dusty Rose mit echtem Live Instagram-Embed Feed, Babyboomer-Slider & Online-Terminanfrage.',
      stats: '4.9 ★ (100+ Google Bewertungen)',
      tags: ['Live Instagram Feed', 'Babyboomer Slider', 'Spa Ästhetik', '100% DSGVO'],
      liveUrl: 'https://moebss.github.io/the-nails-shop-horrem/',
      img: userImg5,
      badge: 'Live Projekt'
    },
    {
      id: 'az-heizung',
      category: 'handwerk',
      categoryLabel: 'Sanitär & Heizungstausch',
      title: 'AZ Heizung-Sanitär Fachverkauf',
      location: 'Horrem / Erftkreis',
      desc: 'XXL Badsanierung & Heizungstausch Plattform mit Notdienst-Notruf, interaktivem 3D-Kostenrechner & Google Maps Local SEO Dominanz.',
      stats: '+300% mehr Anfragen im 1. Monat',
      tags: ['Badsanierungs-Rechner', 'Notfall-Routing', 'Meisterbetrieb Local SEO'],
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
      img: userImg1,
      badge: 'Case Study'
    },
    {
      id: 'ki-voice',
      category: 'ai',
      categoryLabel: 'Voice AI & Telefon-Automation',
      title: '24/7 KI-Telefonassistent für Handwerker',
      location: 'Köln / NRW',
      desc: 'Intelligente Telefon-KI, die Anrufe auf der Baustelle automatisch entgegennimmt, Kundenanliegen qualifiziert und Termine direkt in den Kalender einträgt.',
      stats: '0 verpasste Kundenanrufe mehr',
      tags: ['Sprach-KI (Voice AI)', 'Google Kalender Sync', 'WhatsApp-Zusammenfassung', 'Handwerker-Automation'],
      liveUrl: '#ki-telefonie',
      img: aiAutomationImg,
      badge: 'KI-Lösung'
    },
    {
      id: 'smoky-shop',
      category: 'lifestyle',
      categoryLabel: 'Shisha & Genussmittel',
      title: 'Smoky Head&Shisha Shop Horrem',
      location: 'Horrem (Seit 2013)',
      desc: 'Dark Editorial Webauftritt mit warmem Amber-Glow, Facebook-Banner Integration, Tabak-Katalog & 1-Klick WhatsApp Sofort-Support.',
      stats: 'Etablierter Marktführer seit 2013',
      tags: ['Dark Amber Design', 'WhatsApp Direct', 'Lokale Markenautorität'],
      liveUrl: 'https://moebss.github.io/smoky-headshop-horrem/',
      img: userImg3,
      badge: 'Live Projekt'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projekte" className="py-24 bg-[#0e1626] border-b border-[#1e2c4a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-[#080c14] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Echte Kundenprojekte & Live-Referenzen
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Maßgeschneiderte Webauftritte, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">die Kunden gewinnen</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Keine theoretischen Entwürfe. Klicke auf die Live-Demos und teste echte Ergebnisse, Ladezeiten und Lead-Generatoren.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {[
            { id: 'all', label: 'Alle Projekte' },
            { id: 'beauty', label: 'Salons & Barbershops' },
            { id: 'tattoo', label: 'Tattoo Studios' },
            { id: 'handwerk', label: 'Handwerk & Sanitär' },
            { id: 'ai', label: 'KI-Automationen' },
            { id: 'lifestyle', label: 'Retail & Shops' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25'
                  : 'bg-[#080c14] text-slate-300 hover:text-white border border-[#1e2c4a] hover:border-emerald-500/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#080c14] border border-[#1e2c4a] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Visual Header with Real Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.92] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.badge}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#0e1626]/90 backdrop-blur-md border border-[#1e2c4a] px-3 py-1 rounded-xl text-[11px] font-semibold text-emerald-400">
                    {project.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                      {project.categoryLabel}
                    </span>
                    <h3 className="font-outfit text-2xl font-bold text-white leading-snug mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="bg-[#0e1626] p-3 rounded-xl border border-[#1e2c4a] flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{project.stats}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-[#131d33] text-slate-300 border border-[#1e2c4a] px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                {project.liveUrl.startsWith('http') ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0e1626] hover:bg-emerald-500 hover:text-slate-950 text-white border border-[#1e2c4a] hover:border-emerald-400 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer group/btn shadow-md"
                  >
                    <span>Live-Website Öffnen</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <a
                    href={project.liveUrl}
                    className="w-full bg-[#0e1626] hover:bg-emerald-500 hover:text-slate-950 text-white border border-[#1e2c4a] hover:border-emerald-400 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer group/btn shadow-md"
                  >
                    <span>Mehr zur KI-Lösung</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global Portfolio CTA Banner */}
        <div className="mt-16 bg-[#080c14] border border-[#1e2c4a] p-7 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="font-outfit text-2xl sm:text-3xl font-bold text-white">
              Bereit für einen <span className="text-emerald-400">High-End Webauftritt</span> für deinen Betrieb?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              100% Festpreis, 14 Tage Express-Umsetzung, schlüsselfertig mit SEO, Impressum & interaktiven Kunden-Rechnern.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:016096351750"
              className="bg-[#0e1626] hover:bg-[#131d33] text-white border border-[#1e2c4a] px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              0160 96351750
            </a>
            <button
              onClick={onOpenContact}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              Projekt Anfragen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
