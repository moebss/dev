import { useState, useEffect } from 'react';
import { Bot, Play, Pause, PhoneCall, Volume2, Sparkles, CheckCircle2, Calendar, MessageSquare, Clock } from 'lucide-react';

export default function AiVoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const conversation = [
    { sender: 'Kunde', time: '00:02', text: 'Guten Tag, Schmitz hier. Bei uns im Bad tropft die Hauptleitung und wir brauchen dringend einen Termin.' },
    { sender: 'KI-Assistent', time: '00:06', text: 'Guten Tag Herr Schmitz! Ich nehme den Notfall sofort auf. Ist Wasser im Wohnbereich ausgetreten oder ist das Hauptventil bereits abgedreht?' },
    { sender: 'Kunde', time: '00:12', text: 'Hauptventil ist zu, aber wir bräuchten morgen früh jemanden vor Ort.' },
    { sender: 'KI-Assistent', time: '00:17', text: 'Verstanden. Ich habe für morgen um 08:30 Uhr einen Express-Slot frei. Passt Ihnen das? Ich trage es direkt in den Kalender unseres Meisters ein.' },
    { sender: 'Kunde', time: '00:23', text: 'Ja, 08:30 Uhr passt perfekt. Vielen Dank!' },
    { sender: 'KI-Assistent', time: '00:27', text: 'Perfekt, Termin ist gebucht! Eine Bestätigung per SMS ist soeben an Ihre Nummer raus. Einen schönen Tag!' }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentLine((prev) => {
          if (prev >= conversation.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, conversation.length]);

  return (
    <section className="py-24 bg-[#080c14] border-b border-[#1e2c4a]/80 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0e1626] border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-400 shadow-md">
            <Bot className="w-4 h-4 text-emerald-400" />
            <span>Live Voice AI Simulation</span>
          </div>
          
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Erlebe deinen <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">KI-Telefonassistenten</span> live.
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            So wickelt deine persönliche Telefon-KI Anrufe ab, wenn du auf der Baustelle, im Kundengespräch oder im wohlverdienten Feierabend bist.
          </p>
        </div>

        {/* Live Audio & Transcript Player Card */}
        <div className="max-w-4xl mx-auto bg-[#0e1626] border border-[#1e2c4a] rounded-3xl shadow-2xl p-6 sm:p-10">
          
          {/* Audio Console Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1e2c4a]">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                <PhoneCall className="w-6 h-6 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0e1626]" />
              </div>
              <div>
                <h3 className="font-outfit text-lg font-bold text-white flex items-center gap-2">
                  <span>Eingehender Notfall-Anruf</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    HD VOICE AI
                  </span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">Simulierte Baustellen-Rufumleitung</span>
              </div>
            </div>

            {/* Play / Pause Toggle */}
            <button
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                } else {
                  setCurrentLine(0);
                  setIsPlaying(true);
                }
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl flex items-center gap-2.5 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-slate-950" />}
              <span>{isPlaying ? 'Simulation Pausieren' : 'Gespräch Anhören'}</span>
            </button>
          </div>

          {/* Animated Waveform Visualizer */}
          <div className="py-6 flex items-center justify-center gap-1.5 h-16">
            {[40, 75, 30, 90, 60, 100, 45, 80, 65, 95, 35, 85, 50, 100, 70, 40, 90, 60, 30, 80, 55, 95, 40].map((height, i) => (
              <div
                key={i}
                className={`w-1 sm:w-1.5 rounded-full transition-all duration-300 ${
                  isPlaying ? 'bg-emerald-400' : 'bg-slate-700'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(15, (height * ((i % 3) + 1)) % 100)}%` : '15%'
                }}
              />
            ))}
          </div>

          {/* Transcript Dialogue Feed */}
          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 no-scrollbar">
            {conversation.map((msg, idx) => {
              const isAi = msg.sender === 'KI-Assistent';
              const isCurrent = currentLine === idx && isPlaying;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    isAi
                      ? 'bg-[#080c14] border-emerald-500/30 ml-4 sm:ml-8'
                      : 'bg-[#131d33] border-[#1e2c4a] mr-4 sm:mr-8'
                  } ${isCurrent ? 'ring-2 ring-emerald-400 shadow-lg scale-[1.01]' : 'opacity-90'}`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className={`font-bold flex items-center gap-1.5 ${isAi ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {isAi && <Bot className="w-3.5 h-3.5" />}
                      <span>{msg.sender}</span>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{msg.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {msg.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Feature Highlights beneath Dialogue */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-[#1e2c4a]">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kalender-Eintrag in Echtzeit</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SMS-Zusammenfassung an Kunden</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% DSGVO-konform in Deutschland</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
