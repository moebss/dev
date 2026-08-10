import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Was kostet eine Website – und lohnt sich das für mein kleines Unternehmen?',
      a: 'Die Investition startet bei einem fairen Pauschalpreis ohne Abo und ohne versteckte Kosten. Die meisten meiner Kunden gewinnen bereits im ersten Monat neue Anfragen über ihre neue Website.'
    },
    {
      q: 'Wie funktioniert der KI-Telefonassistent genau?',
      a: 'Der KI-Telefonassistent nimmt Anrufe entgegen, beantwortet häufig gestellte Fragen zu Ihren Leistungen und bucht Termine direkt in Ihren Google- oder Outlook-Kalender. Alles vollautomatisch rund um die Uhr.'
    },
    {
      q: 'Ist die KI-Telefonie und Datenverarbeitung wirklich DSGVO-konform?',
      a: 'Ja, zu 100%. Alle Daten werden verschlüsselt verarbeitet, das Hosting erfolgt ausschließlich in Rechenzentren innerhalb der Europäischen Union.'
    },
    {
      q: 'Wie schnell ist das Projekt umgesetzt?',
      a: 'In der Regel steht Ihre fertige Website oder KI-Automation innerhalb von 10 bis 14 Tagen nach Bereitstellung der Erst-Informationen.'
    },
    {
      q: 'Muss ich mich um Hosting, Domain und Technik selbst kümmern?',
      a: 'Nein. Ich übernehme das komplette technische Setup von der Domain-Einrichtung bis zum schnellen EU-Hosting.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Häufige Fragen (FAQ)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
            Klartext & Transparente Antworten
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 rounded-xl overflow-hidden transition-all bg-[#10172a] hover:border-slate-700"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-white text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 font-normal">
                    {f.a}
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
