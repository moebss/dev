import { Zap, Gauge, Cpu, ShieldCheck, CheckCircle2, XCircle, Code2 } from 'lucide-react';

export default function TechBenchmark() {
  return (
    <section className="py-24 bg-[#080c14] border-b border-[#1e2c4a]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0e1626] border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-400 shadow-md">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span>Technologie-Benchmark & Performance</span>
          </div>
          
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Performance entscheidet über <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Kauf oder Absprung
            </span>.
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            53% aller Smartphone-Nutzer verlassen eine Website, wenn sie länger als 3 Sekunden lädt. Rheindorf Digital Websites laden in unter 0.8 Sekunden.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Legacy WordPress / Template Card */}
          <div className="bg-[#0e1626]/60 border border-rose-500/30 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                Typische Agentur / WordPress
              </span>
              <span className="font-mono text-rose-400 text-sm font-bold">Ladezeit: 3.8s – 5.2s</span>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-5 p-4 bg-[#080c14] rounded-2xl border border-rose-500/20">
              <div className="w-16 h-16 rounded-full border-4 border-rose-500 flex items-center justify-center font-outfit text-2xl font-black text-rose-400">
                38
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white text-base">Google PageSpeed Score</h4>
                <p className="text-xs text-rose-300">Schlechte Platzierung bei Google & hoher Absprung</p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>35+ überladene WordPress-Plugins & Sicherheitslücken</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Langsame PHP-Server mit Datenbank-Ladeverzögerung</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>US-CDNs & Abmahnrisiken durch externe Font-Server</span>
              </div>
            </div>
          </div>

          {/* Rheindorf Digital Stack Card */}
          <div className="bg-gradient-to-br from-[#0e1626] to-[#131d33] border border-emerald-500/50 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden ring-1 ring-emerald-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Rheindorf Digital Tech Stack</span>
              </span>
              <span className="font-mono text-emerald-400 text-sm font-bold">Ladezeit: &lt; 0.7s</span>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-5 p-4 bg-[#080c14] rounded-2xl border border-emerald-500/40">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-outfit text-2xl font-black text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                99
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white text-base">Google PageSpeed Score</h4>
                <p className="text-xs text-emerald-300">Top Rankings, 0% Absprung & maximale Conversion</p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-2.5 text-xs text-slate-200 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vite 6, React 19 & Tailwind CSS 4 – kein Ballast</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% DSGVO (§ 5 DDG) mit self-hosted Schriften</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Schema.org JSON-LD für sofortige Google-Anerkennung</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
