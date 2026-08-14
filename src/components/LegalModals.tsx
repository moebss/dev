import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface LegalModalsProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalsProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (type) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#0e1626] border border-[#1e2c4a] text-slate-200 rounded-3xl shadow-2xl flex flex-col z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 id="modal-title" className="font-outfit text-2xl font-bold text-white">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain text-slate-300 text-sm leading-relaxed space-y-4">
          {type === 'impressum' ? (
            <>
              <h3 className="font-outfit font-bold text-white text-lg">Angaben gemäß § 5 DDG</h3>
              <p>
                Rheindorf Digital<br />
                Inhaber: Alexander Rheindorf<br />
                50169 Kerpen (NRW / Raum Köln)<br />
                Deutschland
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">Kontakt</h3>
              <p>
                Telefon: 0160 96351750<br />
                E-Mail: hello@rheindorf.digital<br />
                Web: https://rheindorf.digital
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">Umsatzsteuer</h3>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz wird auf Anfrage bereitgestellt.
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">Streitbeilegung</h3>
              <p className="text-xs text-slate-400">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-outfit font-bold text-white text-lg">1. Datenschutz auf einen Blick</h3>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">2. Verantwortliche Stelle</h3>
              <p>
                Alexander Rheindorf<br />
                Rheindorf Digital<br />
                50169 Kerpen<br />
                E-Mail: hello@rheindorf.digital
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">3. Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Kontaktanfragen & Projekt-Kalkulator:</strong> Wenn Sie uns per Kontaktformular, Rechner oder WhatsApp kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                <strong>Schriftarten (Self-Hosted):</strong> Diese Website nutzt lokal eingebundene Schriftarten (@fontsource) ohne Verbindung zu externen Servern wie Google Fonts. Es findet kein Datentransfer an Drittanbieter statt.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
