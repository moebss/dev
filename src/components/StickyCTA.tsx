import { Phone, MessageSquare, Sparkles } from 'lucide-react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export default function StickyCTA({ onOpenContact }: StickyCTAProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080c14]/95 backdrop-blur-lg border-t border-[#1e2c4a] p-3 px-4 flex items-center gap-3 shadow-2xl">
      <a
        href="tel:016096351750"
        aria-label="Alexander Rheindorf anrufen"
        className="flex-1 bg-[#0e1626] hover:bg-[#131d33] text-white border border-[#1e2c4a] py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span>Anrufen</span>
      </a>

      <a
        href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-%20oder%20KI-Projekt."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat öffnen"
        className="bg-[#25D366] text-slate-950 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-md"
      >
        <MessageSquare className="w-5 h-5" />
      </a>

      <button
        onClick={onOpenContact}
        className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 py-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Anfragen</span>
      </button>
    </div>
  );
}
