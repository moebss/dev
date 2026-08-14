import { Star, Quote, CheckCircle2, Building2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marco & Elena',
      role: 'Inhaber, The Burning Bandit Kerpen',
      text: 'Alexander hat unser Tattoo-Studio online komplett neu aufgestellt. Der Cover-Up Slider und der Style-Rechner bringen uns wöchentlich messbar mehr Terminanfragen von echten Tattoo-Liebhabern.',
      rating: 5,
      branch: 'Tattoo & Fine Art'
    },
    {
      name: 'Alyas',
      role: 'Inhaber, Alyas Barbershop Horrem',
      text: 'Die Seite sieht extrem stark aus und lädt blitzschnell auf jedem Handy. Unsere Kunden loben die einfache Online-Terminanfrage und das moderne Gentleman-Design.',
      rating: 5,
      branch: 'Gentlemen\'s Barbershop'
    },
    {
      name: 'Mai & Team',
      role: 'Geschäftsleitung, The Nails Shop Horrem',
      text: 'Der Live-Instagram-Feed und das warme, elegante Farbkonzept passen perfekt zu unserem Salon. Die Zusammenarbeit mit Alexander war schnell, unkompliziert und absolut verlässlich.',
      rating: 5,
      branch: 'Boutique Nagelstudio'
    }
  ];

  return (
    <section id="kundenstimmen" className="py-24 bg-[#080c14] border-b border-[#1e2c4a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-[#0e1626] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Erfahrungen & Feedback
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Was lokale Inhaber über die <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Zusammenarbeit
            </span> sagen.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Echte Bewertungen von Betrieben, die mit Rheindorf Digital online messbar gewachsen sind.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#0e1626] border border-[#1e2c4a] p-8 rounded-3xl shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed italic">
                  „{rev.text}“
                </p>
              </div>

              <div className="pt-6 border-t border-[#1e2c4a] flex items-center justify-between">
                <div>
                  <h4 className="font-outfit font-bold text-white text-base">{rev.name}</h4>
                  <span className="text-xs text-slate-400 block">{rev.role}</span>
                </div>

                <span className="text-[10px] bg-[#131d33] text-emerald-400 border border-[#1e2c4a] px-2.5 py-1 rounded-full font-semibold">
                  {rev.branch}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
