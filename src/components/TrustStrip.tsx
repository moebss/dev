import { Zap, ShieldCheck, Cpu, Code2, Lock, Bot, Star, MapPin } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    { icon: Zap, label: '< 0.8s Ladezeit', sub: 'Lighthouse 98+ Score' },
    { icon: ShieldCheck, label: '100% Festpreis', sub: 'Keine versteckten Kosten' },
    { icon: Bot, label: '24/7 KI-Voice', sub: 'Smarte Telefonannahme' },
    { icon: Lock, label: '100% DSGVO & § 5 DDG', sub: 'Rechtssicher in DE' },
    { icon: MapPin, label: 'Köln & NRW', sub: 'Vor Ort & Persönlich' },
    { icon: Code2, label: 'Modern React & Vite', sub: 'Kein Baukasten-Müll' }
  ];

  return (
    <section className="bg-[#080c14] border-b border-[#1e2c4a]/80 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1626]/60 border border-[#1e2c4a] p-4 rounded-2xl flex items-center gap-3 shadow-xs hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#131d33] border border-[#1e2c4a] flex items-center justify-center text-emerald-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-outfit text-xs font-bold text-white block leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
