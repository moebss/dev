import { useState } from 'react';
import { Phone, ArrowRight, Menu, X, Bot, Sparkles, Code2 } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080c14]/92 backdrop-blur-md border-b border-[#1e2c4a]/80 py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Founder Badge */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0e1626] border border-emerald-500/40 p-0.5 flex items-center justify-center shadow-sm shrink-0 group-hover:border-emerald-400 transition-colors overflow-hidden">
            <img
              src={alexanderProfileImg}
              alt="Alexander Rheindorf"
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#080c14]" />
          </div>
          <div>
            <span className="font-outfit font-bold text-lg sm:text-xl tracking-tight text-white block leading-none group-hover:text-emerald-400 transition-colors">
              Rheindorf Digital
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-400 tracking-widest uppercase block mt-1">
              Webdesign & KI-Automationen
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible on XL screens) */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-semibold text-slate-300 uppercase tracking-widest">
          <a href="#projekte" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Projekte</a>
          <a href="#leistungen" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Leistungen</a>
          <a href="#ki-telefonie" className="hover:text-emerald-400 transition-colors whitespace-nowrap">KI-Telefonassistent</a>
          <a href="#transformation" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Vorher / Nachher</a>
          <a href="#rechner" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Projekt-Kalkulator</a>
          <a href="#kundenstimmen" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Kundenstimmen</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors whitespace-nowrap">FAQ</a>
        </nav>

        {/* Action Buttons & Mobile/Tablet Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="tel:016096351750"
            aria-label="Anrufen bei Alexander Rheindorf"
            className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-200 bg-[#0e1626] hover:bg-[#131d33] border border-[#1e2c4a] px-3.5 py-2.5 rounded-xl transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="tabular-nums font-mono">0160 96351750</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Projekt unverbindlich anfragen"
            className="hidden sm:flex bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs px-5 sm:px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all items-center gap-2 cursor-pointer uppercase tracking-wider whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Projekt Starten</span>
          </button>

          {/* Hamburger Button for Mobile and Tablets */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="xl:hidden p-2.5 rounded-xl bg-[#0e1626] border border-[#1e2c4a] text-slate-200 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden pt-4 pb-6 px-4 border-t border-[#1e2c4a] bg-[#080c14] space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 shadow-2xl rounded-b-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-200 uppercase tracking-wider">
            <a href="#projekte" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">Projekte</a>
            <a href="#leistungen" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">Leistungen</a>
            <a href="#ki-telefonie" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">KI-Telefonassistent</a>
            <a href="#transformation" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">Vorher / Nachher</a>
            <a href="#rechner" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">Projekt-Kalkulator</a>
            <a href="#kundenstimmen" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">Kundenstimmen</a>
            <a href="#faq" onClick={handleNavClick} className="p-3 rounded-xl hover:bg-[#0e1626] hover:text-emerald-400 transition-colors">FAQ</a>
          </nav>
          
          <div className="pt-2 border-t border-[#1e2c4a] flex flex-col gap-2.5">
            <a
              href="tel:016096351750"
              className="md:hidden w-full bg-[#0e1626] text-white border border-[#1e2c4a] font-semibold text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>0160 96351750</span>
            </a>
            
            <button
              onClick={() => { handleNavClick(); onOpenContact(); }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Projekt Starten</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
