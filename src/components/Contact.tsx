import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Bot, Sparkles, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('webdesign');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#080c14] border-b border-[#1e2c4a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0e1626] rounded-3xl border border-[#1e2c4a] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Info Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#080c14] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border-r border-[#1e2c4a]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              
              <div className="flex items-center gap-3 bg-[#131d33] border border-emerald-500/40 p-3 rounded-2xl w-fit">
                <img
                  src={alexanderProfileImg}
                  alt="Alexander Rheindorf"
                  className="w-10 h-10 rounded-xl object-cover border border-emerald-400"
                />
                <div>
                  <span className="text-xs font-bold text-white block">Alexander Rheindorf</span>
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Persönlicher Entwickler</span>
                </div>
              </div>

              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Lass uns über dein <span className="text-emerald-400">Projekt</span> sprechen.
              </h2>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Egal ob neue Website, 24/7 KI-Telefonassistent oder Relaunch – ruf mich direkt an, schreib mir auf WhatsApp oder nutze das Kontaktformular.
              </p>

              <div className="space-y-4 pt-2 text-sm">
                
                {/* Phone */}
                <a
                  href="tel:016096351750"
                  className="flex items-center gap-3.5 p-3.5 bg-[#0e1626] border border-[#1e2c4a] rounded-2xl hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#131d33] text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Direkt anrufen:</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      0160 96351750
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-%20oder%20KI-Projekt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 bg-[#0e1626] border border-[#1e2c4a] rounded-2xl hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">WhatsApp Direktchat:</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                      Jetzt Chat Starten ➔
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@rheindorf.digital"
                  className="flex items-center gap-3.5 p-3.5 bg-[#0e1626] border border-[#1e2c4a] rounded-2xl hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#131d33] text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">E-Mail:</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      hello@rheindorf.digital
                    </span>
                  </div>
                </a>

              </div>
            </div>

            <div className="pt-8 border-t border-[#1e2c4a] flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>50169 Kerpen • Köln & ganz NRW</span>
            </div>
          </div>

          {/* Right Form Panel (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            {submitted ? (
              <div className="bg-[#080c14] border border-emerald-500/40 p-8 rounded-3xl text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Vielen Dank für deine Anfrage!</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                  Ich habe deine Nachricht erhalten und melde mich innerhalb von 24 Stunden persönlich bei dir.
                </p>
                <div className="pt-4">
                  <a
                    href="tel:016096351750"
                    className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Dringend? Direkt anrufen (0160 96351750)</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot Spam Protection */}
                <input
                  type="text"
                  name="website_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                    Unverbindliche Projektanfrage
                  </span>
                  <h3 className="font-outfit text-2xl font-bold text-white">
                    Beschreibe kurz dein Vorhaben
                  </h3>
                </div>

                {/* Interest Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Woran hast du Interesse?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'webdesign', label: 'High-End Webdesign' },
                      { id: 'ki', label: 'KI-Telefonassistent' },
                      { id: 'komplett', label: 'Komplettpaket' }
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setInterest(opt.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                          interest === opt.id
                            ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md'
                            : 'bg-[#080c14] text-slate-300 border-[#1e2c4a] hover:border-slate-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Name / Ansprechpartner *</label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Markus Schmitz"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#080c14] border border-[#1e2c4a] focus:border-emerald-500 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Telefonnummer (für Rückruf) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="z.B. 0172 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#080c14] border border-[#1e2c4a] focus:border-emerald-500 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">E-Mail-Adresse</label>
                  <input
                    type="email"
                    placeholder="z.B. info@meisterbetrieb-schmitz.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#080c14] border border-[#1e2c4a] focus:border-emerald-500 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Nachricht / aktuelle Website (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Erzähle kurz von deinem Betrieb oder deinen aktuellen Herausforderungen..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#080c14] border border-[#1e2c4a] focus:border-emerald-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kostenloses Erstgespräch anfragen</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  100% unverbindlich • Keine Weitergabe deiner Daten • Antwort innerhalb 24h
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
