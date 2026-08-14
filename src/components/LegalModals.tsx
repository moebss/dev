import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, Lock, ExternalLink } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[88vh] bg-[#0e1626] border border-[#1e2c4a] text-slate-200 rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#1e2c4a] bg-[#080c14]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              {type === 'impressum' ? <Scale className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="modal-title" className="font-outfit text-xl sm:text-2xl font-bold text-white leading-tight">
                {type === 'impressum' ? 'Impressum (§ 5 DDG & § 18 MStV)' : 'Datenschutzerklärung (DSGVO & TDDDG)'}
              </h2>
              <span className="text-[11px] text-emerald-400 font-semibold">
                Rheindorf Digital • Rechtssicherer Stand 2026
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Modal Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
          
          {type === 'impressum' ? (
            <>
              {/* Impressum Content */}
              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base sm:text-lg">
                  1. Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                </h3>
                <p className="bg-[#080c14] p-4 rounded-xl border border-[#1e2c4a]">
                  <strong className="text-white">Rheindorf Digital</strong><br />
                  Inhaber: Alexander Rheindorf<br />
                  50169 Kerpen (Nordrhein-Westfalen)<br />
                  Deutschland
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  2. Kontaktmöglichkeiten
                </h3>
                <p>
                  Telefon: <a href="tel:016096351750" className="text-emerald-400 font-mono underline font-bold">0160 96351750</a><br />
                  E-Mail: <a href="mailto:hello@rheindorf.digital" className="text-emerald-400 underline font-bold">hello@rheindorf.digital</a><br />
                  Internet: <a href="https://rheindorf.digital" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">https://rheindorf.digital</a>
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  3. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h3>
                <p>
                  Alexander Rheindorf<br />
                  50169 Kerpen
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  4. Umsatzsteuer
                </h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  Wird auf Anfrage bzw. nach Zuteilung mitgeteilt / Kleinunternehmerregelung gemäß § 19 UStG.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  5. EU-Streitbeilegung & Verbraucherstreitbeilegung
                </h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgender Adresse finden:{' '}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>https://ec.europa.eu/consumers/odr/</span>
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-slate-400 text-xs">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  6. Haftung für Inhalte und Links
                </h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  7. Urheberrecht
                </h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </>
          ) : (
            <>
              {/* Datenschutz Content */}
              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base sm:text-lg">
                  1. Datenschutz auf einen Blick
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  2. Verantwortliche Stelle
                </h3>
                <p className="bg-[#080c14] p-4 rounded-xl border border-[#1e2c4a]">
                  <strong className="text-white">Alexander Rheindorf – Rheindorf Digital</strong><br />
                  50169 Kerpen (Nordrhein-Westfalen)<br />
                  Telefon: 0160 96351750<br />
                  E-Mail: hello@rheindorf.digital
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  3. Datenerfassung auf dieser Website
                </h3>
                <p>
                  <strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage: Art. 6 Abs. 1 lit. f DSGVO.
                </p>
                <p>
                  <strong>Kontaktformular & Projekt-Kalkulator:</strong> Wenn Sie uns per Kontaktformular oder interaktivem Rechner Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse, Vorhaben) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Grundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
                </p>
                <p>
                  <strong>Kontaktaufnahme per WhatsApp / Telefon:</strong> Bei einer freiwilligen Kontaktaufnahme über WhatsApp oder Telefon verarbeiten wir Ihre Telefonnummer und Nachrichteninhalte ausschließlich zur Abwicklung Ihrer Anfrage. Grundlage: Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  4. Verzicht auf Tracking-Cookies & externe US-Schriftarten (TDDDG & DSGVO)
                </h3>
                <p className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300">
                  ✓ <strong>100% Lokale Schriftarten (@fontsource):</strong> Diese Seite nutzt ausschließlich lokal installierte Schriftarten. Es findet zu keinem Zeitpunkt eine Verbindung zu Servern von Google (Google Fonts) oder anderen Drittanbietern in den USA statt.<br />
                  ✓ <strong>Keine zustimmungspflichtigen Tracking-Cookies:</strong> Wir verzichten auf Google Analytics, Facebook-Pixel oder Marketing-Tracker. Eine Einwilligung über nervige Cookie-Banner nach § 25 TDDDG ist daher nicht erforderlich.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  5. Ihre Rechte als betroffene Person
                </h3>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li><strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                  <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                  <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                  <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                  <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                  <li><strong>Widerruf Ihrer Einwilligung</strong> jederzeit mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p className="pt-1">
                  <strong>Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO):</strong> Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Behörde in Nordrhein-Westfalen ist die <em>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf</em>.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-outfit font-bold text-white text-base">
                  6. SSL- bzw. TLS-Verschlüsselung
                </h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine moderne SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1e2c4a] bg-[#080c14] flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Datenschutz & Rechtssicherheit nach DSGVO, DDG & TDDDG
          </span>
          <button
            onClick={onClose}
            className="bg-[#0e1626] hover:bg-[#131d33] text-white border border-[#1e2c4a] px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
