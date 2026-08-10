import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Michael Weber',
      location: 'Weber Badmanufaktur, Köln',
      project: 'Badsanierungs-Landingpage & 3D-Rechner',
      date: 'Google Bewertung',
      text: 'Super unkomplizierte Zusammenarbeit. Innerhalb von 12 Tagen stand unsere neue Website inklusive interaktivem Bad-Rechner. Wir haben im ersten Monat bereits 8 qualifizierte Anfragen generiert!'
    },
    {
      name: 'Stefan Krahn',
      location: 'SHK Meisterbetrieb, Kerpen',
      project: 'Website Relaunch & KI-Telefonassistent',
      date: 'Google Bewertung',
      text: 'Der KI-Telefonassistent ist der absolute Wahnsinn. Wenn wir auf der Baustelle sind, nimmt die KI alle Anrufe entgegen und bucht Beratungstermine direkt in unseren Kalender. Kein entgangener Anruf mehr.'
    },
    {
      name: 'Alexander Lindner',
      location: 'Tattoo & Piercing Studio, Bonn',
      project: 'Showcase Website & Vorher/Nachher Slider',
      date: 'Google Bewertung',
      text: 'Endlich eine Website, die nicht wie ein langweiliges Template aussieht. Das Design passt zu 100% zu unserem Studio und die Buchungen laufen vollautomatisch.'
    }
  ];

  return (
    <section id="bewertungen" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full shadow-sm mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-200">5.0 Sterne Kundenbewertungen</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Ergebnisse für lokale Betriebe in Köln & NRW
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 text-pretty">
            Echte Erfahrungen von Handwerkern, Dienstleistern & Unternehmern aus der Region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#10172a] rounded-2xl p-8 border border-slate-800 shadow-md flex flex-col justify-between hover:border-emerald-500/50 transition-all relative"
            >
              <Quote className="w-10 h-10 text-emerald-500/10 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed italic mb-6">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <span>{r.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </h4>
                <p className="text-xs text-emerald-400 font-semibold">{r.location}</p>
                <p className="text-[11px] text-slate-400 mt-1">{r.project}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
