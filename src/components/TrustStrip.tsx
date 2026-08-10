import { Shield, Zap, Lock, MapPin, ThumbsUp } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="bg-[#10172a] text-white py-6 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between text-center md:text-left">
          
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/30 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Kein Agentur-Ballast</p>
              <p className="text-sm font-bold text-white">Direct-Developer Support</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/30 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Fairer Pauschalpreis</p>
              <p className="text-sm font-bold text-white">Keine versteckten Abos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/30 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Rechtskonform</p>
              <p className="text-sm font-bold text-white">100% DSGVO & EU-Hosting</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/30 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Regionaler Fokus</p>
              <p className="text-sm font-bold text-white">Köln, Kerpen & NRW</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
