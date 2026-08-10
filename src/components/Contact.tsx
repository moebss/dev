import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Bot } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Honeypot spam protection
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#10172a] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Info Panel (2 cols) */}
          <div className="lg:col-span-2 bg-[#080c14] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border-r border-slate-800">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-slate-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-md mb-6 inline-block">
                Erstgespräch & Beratung
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Sprechen wir über Ihr Digital-Projekt
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Haben Sie Fragen zu einer neuen Website, KI-Telefonassistenten oder lokaler SEO in Köln & NRW? Rufen Sie mich direkt an oder schreiben Sie mir.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 text-emerald-400 border border-slate-800 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telefon & WhatsApp:</span>
                    <a href="tel:+4916096351750" className="text-base font-bold text-white hover:text-emerald-400 transition-colors tabular-nums">
                      0160 / 963 517 50
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 text-emerald-400 border border-slate-800 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-Mail:</span>
                    <a href="mailto:hello@rheindorf.digital" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      hello@rheindorf.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 text-emerald-400 border border-slate-800 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Standort:</span>
                    <p className="text-sm font-semibold text-white">
                      Kerpen, Köln & NRW
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
              Einzugsgebiet: Köln, Kerpen, Erftstadt, Frechen, Hürth, Bonn, Düsseldorf & ganz NRW.
            </div>
          </div>

          {/* Right Form Panel (3 cols) */}
          <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    Kostenloses Erstgespräch anfragen
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Füllen Sie das Formular aus. Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen.
                  </p>
                </div>

                {/* Honeypot Spam Protection (Hidden Field) */}
                <input
                  type="text"
                  name="website_url_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Stefan Krahn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0171 / 12345678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="beispiel@domain.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Projekt / Anliegen
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Projekt (z.B. Neue Website & KI-Telefonassistent für Handwerksbetrieb in Köln)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kostenloses Erstgespräch anfragen</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Ihre Daten werden vertraulich behandelt. Mit dem Absenden stimmen Sie der Kontaktaufnahme zu.
                </p>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Vielen Dank für Ihre Anfrage, {name}!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Ich habe Ihre Nachricht erhalten und melde mich innerhalb von 24 Stunden persönlich bei Ihnen unter <strong className="text-emerald-400">{phone}</strong>.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
