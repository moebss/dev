import { Phone, Calendar } from 'lucide-react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export default function StickyCTA({ onOpenContact }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#10172a]/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+4916096351750"
          className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 text-white py-3 px-3 rounded-lg font-bold text-xs shadow"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Anrufen</span>
        </a>

        <button
          onClick={onOpenContact}
          className="flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 py-3 px-3 rounded-lg font-bold text-xs shadow cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Erstgespräch</span>
        </button>
      </div>
    </div>
  );
}
