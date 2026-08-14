import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function Footer({ onOpenImpressum, onOpenDatenschutz }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c14] text-slate-400 text-xs border-t border-[#1e2c4a]">
      
      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/40 shrink-0">
              <img src={alexanderProfileImg} alt="Alexander Rheindorf" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-outfit text-base font-bold text-white block leading-none">
                RHEINDORF <span className="text-emerald-400">DIGITAL</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-emerald-400 block mt-1">
                Webdesign & KI-Automationen
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
          <h4 className="font-outfit font-bold text-white uppercase tracking-wider mb-4 text-xs">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            <li><a href="#projekte" className="hover:text-emerald-400 transition-colors">Echte Kundenprojekte</a></li>
            <li><a href="#leistungen" className="hover:text-emerald-400 transition-colors">Technologie & USPs</a></li>
            <li><a href="#ki-telefonie" className="hover:text-emerald-400 transition-colors">24/7 KI-Telefonassistent</a></li>
            <li><a href="#pakete" className="hover:text-emerald-400 transition-colors">Preise & Pakete</a></li>
            <li><a href="#transformation" className="hover:text-emerald-400 transition-colors">Vorher / Nachher Slider</a></li>
            <li><a href="#rechner" className="hover:text-emerald-400 transition-colors">Projekt-Kalkulator</a></li>
            <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Häufige Fragen (FAQ)</a></li>
          </ul>
        </div>

        {/* Col 3: Live Demos */}
        <div>
          <h4 className="font-outfit font-bold text-white uppercase tracking-wider mb-4 text-xs">
            Live-Referenzen
          </h4>
          <ul className="space-y-2.5">
            <li><a href="https://moebss.github.io/alyas-barbershop-horrem/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Alyas Barbershop Horrem ↗</a></li>
            <li><a href="https://moebss.github.io/the-burning-bandit-kerpen/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">The Burning Bandit Tattoo ↗</a></li>
            <li><a href="https://moebss.github.io/the-nails-shop-horrem/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">The Nails Shop Horrem ↗</a></li>
            <li><a href="https://moebss.github.io/az-heizung-sanitaer/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">AZ Heizung-Sanitär ↗</a></li>
            <li><a href="https://moebss.github.io/smoky-headshop-horrem/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Smoky Shisha & Headshop ↗</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Region */}
        <div className="space-y-3">
          <h4 className="font-outfit font-bold text-white uppercase tracking-wider mb-4 text-xs">
            Kontakt & Region
          </h4>
          <p className="text-slate-300">
            <strong>Alexander Rheindorf</strong><br />
            50169 Kerpen / Raum Köln
          </p>
          <div className="space-y-1.5 pt-2">
            <a href="tel:016096351750" className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-mono">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>0160 96351750</span>
            </a>
            <a href="mailto:hello@rheindorf.digital" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>hello@rheindorf.digital</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-[#1e2c4a] bg-[#05080e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Rheindorf Digital • Inhaber Alexander Rheindorf. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <button
              onClick={onOpenImpressum}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Impressum (§ 5 DDG)
            </button>
            <button
              onClick={onOpenDatenschutz}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Datenschutzerklärung (DSGVO)
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0e1626] border border-[#1e2c4a] text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
