import { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertTriangle, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import userImg1 from '../images/media_1786244763224.png';
import userImg4 from '../images/media_1786372914462.png';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <section id="transformation" className="py-24 bg-[#080c14] border-b border-[#1e2c4a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-[#0e1626] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Vorher / Nachher Transformation
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Veraltete Baukasten-Seite vs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Rheindorf Digital Lead-Maschine
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Ziehe den Schieberegler, um den Unterschied zwischen einer veralteten Standard-Seite und einem modernen High-End Webauftritt mit integriertem Rechner zu sehen.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1e2c4a] select-none cursor-ew-resize touch-none bg-[#0e1626]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER: Rheindorf Digital High-End System (Right Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={userImg4}
                alt="Rheindorf Digital High-End Relaunch"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>NACHHER: Rheindorf Digital</span>
              </div>
            </div>

            {/* BEFORE: Legacy Website (Left Layer, clipped by sliderPosition) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={userImg1}
                alt="Alte Baukasten-Website vor Relaunch"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75 max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 bg-rose-500/90 text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>VORHER: Alt-Website</span>
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-white shadow-2xl flex items-center justify-center text-emerald-400">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar below Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#0e1626] border border-[#1e2c4a] p-4 rounded-2xl text-center">
              <span className="text-xs text-slate-400 font-semibold uppercase block">Ladezeit-Optimierung</span>
              <span className="font-outfit text-xl font-bold text-emerald-400 mt-1 block">4.8s ➔ 0.7s</span>
            </div>

            <div className="bg-[#0e1626] border border-[#1e2c4a] p-4 rounded-2xl text-center">
              <span className="text-xs text-slate-400 font-semibold uppercase block">Kunden-Anfragen</span>
              <span className="font-outfit text-xl font-bold text-emerald-400 mt-1 block">+300% mehr Leads</span>
            </div>

            <div className="bg-[#0e1626] border border-[#1e2c4a] p-4 rounded-2xl text-center">
              <span className="text-xs text-slate-400 font-semibold uppercase block">Google Maps Ranking</span>
              <span className="font-outfit text-xl font-bold text-emerald-400 mt-1 block">Top-3 Platzierung</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
