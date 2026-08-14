import { useState } from 'react';
import { TrendingDown, ArrowRight, Sparkles, PhoneOff, DollarSign, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

export default function RoiCalculator({ onOpenContact }: RoiCalculatorProps) {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(6);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(450);

  // Conversion rate of missed calls to lost customers ~ 50%
  const monthlyLostLeads = Math.round(missedCallsPerWeek * 4.33 * 0.5);
  const monthlyLostRevenue = Math.round(monthlyLostLeads * avgOrderValue);
  const yearlyLostRevenue = monthlyLostRevenue * 12;

  return (
    <section className="py-24 bg-[#0e1626] border-b border-[#1e2c4a]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#080c14] border border-rose-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-rose-400 shadow-md">
            <PhoneOff className="w-3.5 h-3.5 text-rose-400" />
            <span>ROI- & Umsatzverlust-Rechner</span>
          </div>
          
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Wie viel Umsatz verlierst du durch <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">
              unbeantwortete Anrufe?
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Wenn das Telefon auf der Baustelle oder im Kundentermin klingelt, ruft der Neukunde meist direkt den nächsten Betrieb bei Google an.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-5xl mx-auto bg-[#080c14] border border-[#1e2c4a] rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Missed calls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Verpasste Anrufe pro Woche
                </label>
                <span className="font-outfit text-2xl font-extrabold text-white font-mono bg-[#0e1626] px-4 py-1 rounded-xl border border-[#1e2c4a]">
                  {missedCallsPerWeek} Anrufe
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={missedCallsPerWeek}
                onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                className="w-full h-2.5 bg-[#131d33] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Anruf/Woche</span>
                <span>12 Anrufe</span>
                <span>25 Anrufe/Woche</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Durchschnittlicher Auftragswert (€)
                </label>
                <span className="font-outfit text-2xl font-extrabold text-emerald-400 font-mono bg-[#0e1626] px-4 py-1 rounded-xl border border-[#1e2c4a]">
                  {avgOrderValue.toLocaleString('de-DE')} €
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="3500"
                step="50"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2.5 bg-[#131d33] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>50 € (z.B. Salon)</span>
                <span>1.500 € (Handwerk)</span>
                <span>3.500 € (Sanierung)</span>
              </div>
            </div>

            <div className="p-4 bg-[#0e1626] rounded-2xl border border-[#1e2c4a] text-xs text-slate-300 space-y-2">
              <span className="font-bold text-white block">Rheindorf Digital Hebel:</span>
              <p className="leading-relaxed">
                Der 24/7 KI-Telefonassistent nimmt <strong>100%</strong> dieser Anrufe entgegen, beantwortet Detailfragen und bucht den Termin sofort ein.
              </p>
            </div>

          </div>

          {/* Result Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0e1626] to-[#131d33] border border-rose-500/40 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400 flex items-center justify-center gap-1.5">
                <TrendingDown className="w-4 h-4" />
                <span>Geschätzter Umsatzverlust</span>
              </span>
              
              <div className="font-outfit text-4xl sm:text-5xl font-black text-white font-mono leading-tight">
                {monthlyLostRevenue.toLocaleString('de-DE')} €
              </div>
              <span className="text-xs text-slate-400 block">jeden einzelnen Monat</span>
            </div>

            <div className="bg-[#080c14] p-4 rounded-2xl border border-[#1e2c4a] space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Auf das Jahr hochgerechnet:</span>
              <div className="font-outfit text-2xl font-bold text-rose-400 font-mono">
                ca. {yearlyLostRevenue.toLocaleString('de-DE')} € / Jahr
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Umsatz-Lücke jetzt schließen</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
