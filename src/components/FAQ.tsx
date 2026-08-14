import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wie lange dauert die Umsetzung einer neuen Website?',
      a: 'In der Regel steht Ihre fertige Website innerhalb von 14 Tagen nach Freigabe des Konzepts online. Durch den Verzicht auf Agentur-Wasserkopf und den direkten Kontakt mit Alexander Rheindorf gibt es keine Verzögerungen.'
    },
    {
      q: 'Gibt es versteckte monatliche Kosten oder Knebelverträge?',
      a: 'Nein. Ich arbeite mit 100% Festpreisgarantie. Der gesamte Quellcode und die Website gehören nach Projektabschluss vollständig Ihnen. Optionale Wartungs- und Hosting-Pakete sind monatlich kündbar.'
    },
    {
      q: 'Wie funktioniert der 24/7 KI-Telefonassistent genau?',
      a: 'Der KI-Telefonassistent wird mit den genauen Informationen Ihres Betriebs (Öffnungszeiten, Preise, Leistungen, FAQ) trainiert. Ruft ein Kunde an, wenn Sie auf der Baustelle oder im Feierabend sind, nimmt die KI den Anruf entgegen, beantwortet Fragen und bucht Termine direkt in Ihren Kalender. Anschließend erhalten Sie eine SMS/WhatsApp-Zusammenfassung.'
    },
    {
      q: 'Ist die Website DSGVO-konform und rechtssicher?',
      a: 'Ja, zu 100%. Alle Schriftarten werden lokal gehostet (keine CDN-Google-Fonts), es gibt ein abmahnsicheres Impressum nach § 5 DDG, eine Datenschutzerklärung sowie SSL-Verschlüsselung.'
    },
    {
      q: 'Können Sie auch bestehende Websites modernisieren (Relaunch)?',
      a: 'Absolut. Wir übernehmen Ihre bestehenden Inhalte, Texte und Domains und überführen sie in ein modernes, schnelles High-End Webdesign mit messbar besseren Ladezeiten und höheren Conversion-Raten.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0e1626] border-b border-[#1e2c4a]/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-[#080c14] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Fragen & Antworten
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Häufig gestellte Fragen
          </h2>
          <p className="text-slate-300 text-base font-normal">
            Alles, was Sie über Ablauf, Preise und Technologie wissen müssen.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#080c14] border border-[#1e2c4a] rounded-2xl overflow-hidden shadow-md transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-outfit font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#131d33] flex items-center justify-center text-emerald-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-[#1e2c4a]/60 pt-4 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
