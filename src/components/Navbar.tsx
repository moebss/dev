import { useState } from 'react';
import { Phone, Menu, X, Bot, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-slate-950 flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            RD
          </div>
          <div>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white block leading-none">
              RHEINDORF <span className="text-emerald-400">DIGITAL</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block mt-1">
              Websites & KI-Automationen Köln
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#leistungen" className="hover:text-emerald-400 transition-colors">Leistungen</a>
          <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
          <a href="#vorher-nachher" className="hover:text-emerald-400 transition-colors">Vorher / Nachher</a>
          <a href="#vorteile" className="hover:text-emerald-400 transition-colors">USPs & KI</a>
          <a href="#rechner" className="hover:text-emerald-400 transition-colors">Projekt-Rechner</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="tel:+4916096351750" 
            className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-900"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span className="tabular-nums">0160 / 963 517 50</span>
          </a>
          <button
            onClick={onOpenContact}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Projekt anfragen</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-emerald-400 focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10172a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-medium text-slate-200">
            <a href="#leistungen" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-800">Leistungen</a>
            <a href="#vorher-nachher" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-800">Vorher / Nachher</a>
            <a href="#vorteile" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-800">USPs & KI</a>
            <a href="#rechner" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-800">Projekt-Rechner</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2">FAQ</a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+4916096351750"
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-white font-semibold rounded-lg"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              0160 / 963 517 50
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg text-center shadow"
            >
              Kostenloses Erstgespräch anfragen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
