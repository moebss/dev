import { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Phone, Mail, User, ShieldCheck, MessageSquare } from 'lucide-react';

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

    return { 
      low: low.toLocaleString('de-DE'), 
      high: high.toLocaleString('de-DE'),
      totalVal: total
    };
  };

  const estimate = calculateEstimate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hallo Alexander! Ich habe den Projekt-Rechner auf rheindorf.digital ausgefüllt:%0A- Fokus: ${projectFocus}%0A- Betrieb: ${companySize}%0A- Zusatzfunktion: ${extraFeatures}%0A- Geschätzter Richtwert: ${estimate.low} € - ${estimate.high} €.%0A%0ABitte melde dich bei mir für ein kurzes Erstgespräch!`;
    return `https://wa.me/4916096351750?text=${text}`;
  };

  return (
    <section id="rechner" className="py-24 bg-[#0e1626] text-white relative overflow-hidden border-b border-[#1e2c4a]/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#080c14] border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Kostenfreier Sofort-Rechner</span>
          </div>
          
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Projekt-Kosten in <span className="text-emerald-400">60 Sekunden</span> schätzen.
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base">
            Wähle deine Anforderungen für eine transparente Richtwert-Kalkulation inklusive 100% Festpreisgarantie.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#080c14] border border-[#1e2c4a] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between gap-2 mb-8 pb-6 border-b border-[#1e2c4a]">
            {[
              { num: 1, label: 'Projektart' },
              { num: 2, label: 'Betriebsgröße' },
              { num: 3, label: 'Zusatz-Tools' },
              { num: 4, label: 'Ergebnis' }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer ${
                  step === s.num
                    ? 'text-emerald-400'
                    : step > s.num
                    ? 'text-slate-300'
                    : 'text-slate-600'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step === s.num
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : step > s.num
                      ? 'bg-[#131d33] text-emerald-400'
                      : 'bg-[#0e1626] text-slate-600'
                  }`}
                >
                  {s.num}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          {/* STEP 1: Project Focus */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-outfit text-xl font-bold text-white">
                Schritt 1: Was ist das Hauptziel deines Projekts?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'website',
                    title: 'High-End Webdesign Relaunch',
                    sub: 'Moderne, superschnelle Website speziell für Kundenanfragen',
                    tag: 'Bestseller'
                  },
                  {
                    id: 'ki',
                    title: '24/7 KI-Telefonassistent',
                    sub: 'Smarte Sprach-KI für automatische Anruf- & Terminannahme',
                    tag: 'Voice AI'
                  },
                  {
                    id: 'bundle',
                    title: 'Komplettpaket (Web + KI)',
                    sub: 'Vollständiger Relaunch + intelligenter KI-Telefonassistent',
                    tag: 'Empfehlung'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setProjectFocus(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      projectFocus === item.id
                        ? 'bg-[#0e1626] border-emerald-500 ring-1 ring-emerald-500 shadow-lg'
                        : 'bg-[#0e1626]/60 border-[#1e2c4a] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mb-2">
                        {item.tag}
                      </span>
                      <h4 className="font-outfit font-bold text-base text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Weiter zu Schritt 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Company Size */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-outfit text-xl font-bold text-white">
                Schritt 2: Für welchen Betrieb ist das System gedacht?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'solo',
                    title: 'Einzelunternehmer & Meister',
                    sub: '1–2 Personen (z.B. selbstständiger Handwerker, Studio-Inhaber)'
                  },
                  {
                    id: 'team',
                    title: 'Lokales KMU / Meisterbetrieb',
                    sub: '3–15 Mitarbeiter mit festem Team & wachsendem Kundenstamm'
                  },
                  {
                    id: 'enterprise',
                    title: 'Größerer Betrieb & Filialen',
                    sub: '15+ Mitarbeiter mit mehreren Standorten oder Spezialgewerken'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setCompanySize(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      companySize === item.id
                        ? 'bg-[#0e1626] border-emerald-500 ring-1 ring-emerald-500 shadow-lg'
                        : 'bg-[#0e1626]/60 border-[#1e2c4a] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <h4 className="font-outfit font-bold text-base text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="bg-[#0e1626] text-slate-300 border border-[#1e2c4a] text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl cursor-pointer"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Extra Features */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-outfit text-xl font-bold text-white">
                Schritt 3: Welche Zusatz-Tools wünschst du dir?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'none',
                    title: 'Standard High-End Setup',
                    sub: 'Inklusive Mobile-First, DSGVO, SSL & modernstem Styling'
                  },
                  {
                    id: 'seo',
                    title: 'Local SEO & Google Maps Turbo',
                    sub: 'Schema.org JSON-LD & regionale Keyword-Optimierung für Köln/NRW'
                  },
                  {
                    id: 'showcase',
                    title: 'Interaktiver Kunden-Rechner / Slider',
                    sub: 'Individueller Kostenkalkulator oder Vorher/Nachher-Slider als Lead-Magnet'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setExtraFeatures(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      extraFeatures === item.id
                        ? 'bg-[#0e1626] border-emerald-500 ring-1 ring-emerald-500 shadow-lg'
                        : 'bg-[#0e1626]/60 border-[#1e2c4a] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <h4 className="font-outfit font-bold text-base text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#0e1626] text-slate-300 border border-[#1e2c4a] text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl cursor-pointer"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Ergebnis Berechnen</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Live Result & Actions */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in">
              
              <div className="text-center bg-[#0e1626] border border-emerald-500/40 p-8 rounded-3xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Geschätzter Richtwert (Pauschal / Einmalig)
                </span>
                
                <div className="font-outfit text-4xl sm:text-6xl font-black text-white">
                  {estimate.low} € – {estimate.high} €
                </div>
                
                <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Inklusive 100% Festpreisgarantie, 14 Tagen Umsetzungszeit, Responsive Design, SSL & Quellcode-Übergabe.
                </p>
              </div>

              {/* Direct Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs uppercase tracking-wider p-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kalkulation per WhatsApp senden</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider p-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Unverbindliches Erstgespräch anfragen</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Kalkulation von vorne beginnen
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
