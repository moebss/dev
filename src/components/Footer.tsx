import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function Footer({ onOpenImpressum, onOpenDatenschutz }: FooterProps) {
  return (
    <footer className="bg-[#080c14] text-slate-400 text-xs border-t border-slate-900">
      
      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-display font-bold text-lg shadow-md">
              RD
            </div>
            <div>
              <span className="font-display text-base font-bold text-white block leading-none">
                RHEINDORF <span className="text-emerald-400">DIGITAL</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-slate-400 block mt-1">
                Websites & KI-Automationen
              </span>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-xs">
            High-End Websites und 24/7 KI-Telefonassistenten für lokale Unternehmen in Köln & NRW. Kein Agentur-Overhead – direkt, schnell, messbare Ergebnisse.
          </p>

          <div className="flex items-center gap-2 text-slate-300 font-medium pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Festpreisgarantie</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">
            Schnellzugriff
          </h4>
          <ul className="space-y-2.5">
            <li><a href="#leistungen" className="hover:text-emerald-400 transition-colors">Leistungsübersicht</a></li>
            <li><a href="#vorher-nachher" className="hover:text-emerald-400 transition-colors">Vorher / Nachher Vergleich</a></li>
            <li><a href="#vorteile" className="hover:text-emerald-400 transition-colors">USPs & KI-Systeme</a></li>
            <li><a href="#rechner" className="hover:text-emerald-400 transition-colors">Interaktiver Projekt-Rechner</a></li>
            <li><a href="#bewertungen" className="hover:text-emerald-400 transition-colors">Kunden-Bewertungen</a></li>
            <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Häufige Fragen (FAQ)</a></li>
          </ul>
        </div>

        {/* Col 3: Contact & NAP */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">
            Kontakt & Region
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kerpen, Köln & NRW</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+4916096351750" className="hover:text-white font-semibold tabular-nums">0160 / 963 517 50</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:hello@rheindorf.digital" className="hover:text-white">hello@rheindorf.digital</a>
            </li>
          </ul>
        </div>

        {/* Col 4: Opening Hours & Legal */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">
            Erreichbarkeit & Rechtliches
          </h4>
          <p className="text-slate-300 mb-3 tabular-nums font-medium">
            Mo – Fr: 08:30 – 18:30 Uhr<br />
            24/7 KI-Telefonassistent aktiv
          </p>

          <div className="pt-4 border-t border-slate-900 space-y-2">
            <button onClick={onOpenImpressum} className="block hover:text-white transition-colors cursor-pointer text-left">
              Impressum & Pflichtangaben
            </button>
            <button onClick={onOpenDatenschutz} className="block hover:text-white transition-colors cursor-pointer text-left">
              Datenschutzerklärung (DSGVO)
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-950 py-6 bg-[#05080e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Rheindorf Digital. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1">
            <span>High-End Webdesign & KI-Automationen in Köln & NRW</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
