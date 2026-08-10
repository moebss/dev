import { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Phone, Mail, User } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [projectFocus, setProjectFocus] = useState<string>('website');
  const [companySize, setCompanySize] = useState<string>('team');
  const [extraFeatures, setExtraFeatures] = useState<string>('seo');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Estimate Calculation
  const calculateEstimate = () => {
    let base = 1490;
    if (projectFocus === 'ki') base = 1890;
    if (projectFocus === 'bundle') base = 2890;

    let sizeMultiplier = 1.0;
    if (companySize === 'solo') sizeMultiplier = 0.85;
    if (companySize === 'enterprise') sizeMultiplier = 1.35;

    let featureAdd = 0;
    if (extraFeatures === 'seo') featureAdd = 450;
    if (extraFeatures === 'showcase') featureAdd = 650;

    const total = Math.round(base * sizeMultiplier + featureAdd);
    const low = Math.round(total * 0.95);
    const high = Math.round(total * 1.08);

    return { low: low.toLocaleString('de-DE'), high: high.toLocaleString('de-DE') };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const estimate = calculateEstimate();

  return (
    <section id="rechner" className="py-20 bg-[#0b0f19] text-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            <span>Kostenfreier Sofort-Rechner</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Was kostet Ihr Digital-Projekt?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 text-pretty">
            Ermitteln Sie in 3 Klicks eine unverbindliche Orientierung für Ihre neue Website oder KI-Automation.
          </p>
        </div>

        {/* Rechner Card IMMORTAL RULE 1 & 3 */}
        <div className="bg-[#10172a]/95 border border-slate-700/80 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          {/* IMMORTAL RULE 4: Progress Indicator with shrink-0 and generous spacing */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800 gap-2 overflow-x-auto no-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2.5 shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                    step >= i ? 'bg-emerald-500 text-slate-950 shadow-md font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {i === 4 ? <Sparkles className="w-4 h-4" /> : i}
                </div>
                <span className="text-xs font-semibold text-slate-200 whitespace-nowrap pr-2">
                  {i === 1 && 'Projekt-Fokus'}
                  {i === 2 && 'Betriebsgröße'}
                  {i === 3 && 'Zusatz-Features'}
                  {i === 4 && 'Ergebnis'}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: Projekt-Fokus */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white text-center mb-6 font-display">
                Schritt 1: Welches Ziel verfolgen Sie?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'website', title: 'High-End Website', desc: 'Verkaufsstarke Landingpage / Relaunch' },
                  { id: 'ki', title: 'KI-Telefonassistent', desc: '24/7 Terminbuchung & Fragenbeantwortung' },
                  { id: 'bundle', title: 'Website + KI-System', desc: 'Vollständige digitale Transformation' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setProjectFocus(item.id); setStep(2); }}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      projectFocus === item.id
                        ? 'border-2 border-emerald-400 bg-emerald-950/40 text-white shadow-xl'
                        : 'border-slate-800 bg-slate-900/90 hover:border-emerald-500/50 text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <h4 className="font-bold text-base mb-1 text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Betriebsgröße */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white text-center mb-6 font-display">
                Schritt 2: Für wie viele Mitarbeiter/Kunden?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'solo', title: 'Einzelselbstständig', desc: 'Freiberufler, Coach, Einzelfirma' },
                  { id: 'team', title: 'Lokales Team (2–10)', desc: 'Handwerksbetrieb, Salon, Studio' },
                  { id: 'enterprise', title: 'Wachstumsbetrieb (>10)', desc: 'Mehrere Standorte / Hohes Anrufvolumen' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setCompanySize(item.id); setStep(3); }}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      companySize === item.id
                        ? 'border-2 border-emerald-400 bg-emerald-950/40 text-white shadow-xl'
                        : 'border-slate-800 bg-slate-900/90 hover:border-emerald-500/50 text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <h4 className="font-bold text-base mb-1 text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-start">
                <button onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-white underline cursor-pointer">
                  ← Zurück
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Zusatz-Features */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white text-center mb-6 font-display">
                Schritt 3: Gewünschtes Zusatz-Modul?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'seo', title: 'Lokale SEO Köln/NRW', desc: 'Google Maps Top-3 Ranking Optimierung' },
                  { id: 'showcase', title: 'Vorher/Nachher Showcase', desc: 'Interaktiver Vorher/Nachher Drag-Slider' },
                  { id: 'standard', title: 'Standard Paket', desc: 'Ohne zusätzliche Spezial-Module' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setExtraFeatures(item.id); setStep(4); }}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      extraFeatures === item.id
                        ? 'border-2 border-emerald-400 bg-emerald-950/40 text-white shadow-xl'
                        : 'border-slate-800 bg-slate-900/90 hover:border-emerald-500/50 text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <h4 className="font-bold text-base mb-1 text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-start">
                <button onClick={() => setStep(2)} className="text-xs text-slate-400 hover:text-white underline cursor-pointer">
                  ← Zurück
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Ergebnis & Formular */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              
              {!isSubmitted ? (
                <>
                  <div className="bg-slate-950/90 p-6 rounded-xl border border-emerald-500/40 inline-block w-full shadow-inner">
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                      Geschätztes Pauschal-Budget (Einmalig, Kein Abo):
                    </span>
                    <span className="text-3xl sm:text-4xl font-display font-bold text-emerald-400 tabular-nums block">
                      ca. {estimate.low} € – {estimate.high} €
                    </span>
                    <span className="text-xs text-slate-300 mt-2 block font-normal">
                      Inklusive vollständiger Entwicklung, Einrichtung & 14-Tage Express-Umsetzung.
                    </span>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left max-w-md mx-auto pt-4">
                    <p className="text-sm text-slate-200 font-semibold text-center">
                      Fordern Sie jetzt das konkrete Festpreis-Angebot & die kostenlose Erstberatung an:
                    </p>
                    <div>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Ihr Name / Unternehmensname"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="Telefonnummer für Rückfragen"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="E-Mail-Adresse"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold py-3.5 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Festpreis-Angebot anfordern</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <p className="text-[11px] text-slate-400 text-center">
                      🔒 Unverbindlich & Kostenlos. Antwort innerhalb von 24h.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">
                    Vielen Dank, {name}!
                  </h4>
                  <p className="text-slate-200 text-sm max-w-md mx-auto">
                    Ich habe Ihre Anfrage erhalten und melde mich innerhalb von 24 Stunden persönlich bei Ihnen unter <strong className="text-emerald-400">{phone}</strong>.
                  </p>
                </div>
              )}

              <div className="flex justify-center pt-4">
                <button onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-white underline cursor-pointer">
                  Neuberechnen
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
