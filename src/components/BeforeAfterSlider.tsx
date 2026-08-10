import { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertTriangle, CheckCircle2 } from 'lucide-react';
import aiAutomationImg from '../images/ai_automation.jpg';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
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
    <section id="vorher-nachher" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-slate-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
            Transformation im Vergleich
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">
            Alt-Website vs. Rheindorf Digital KI-System
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 text-pretty">
            Ziehen Sie den Regler, um den Unterschied zwischen einer veralteten Baukasten-Seite und einem modernen KI-gestützten Lead-System zu sehen.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 select-none cursor-ew-resize touch-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            
            {/* After Image (Background / Base: High Tech AI Automation) */}
            <img
              src={aiAutomationImg}
              alt="Nachher: Rheindorf Digital KI-System"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Badge After */}
            <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs px-3.5 py-2 rounded-md shadow-lg backdrop-blur-md pointer-events-none z-10 flex items-center gap-2 border border-emerald-400/40">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>NACHHER (Rheindorf Digital System)</span>
            </div>

            {/* Before Overlay (Veraltete Website representation) */}
            <div
              className="absolute inset-0 overflow-hidden bg-slate-950/95"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="p-8 sm:p-12 text-slate-400 space-y-4 max-w-lg">
                <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-400 px-3 py-1 rounded-md text-xs font-bold border border-rose-500/30 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>VORHER (Standard Alt-Website)</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-300">
                  Langsam, schwerfällig & 0 Kundenfragen außerhalb der Bürozeiten
                </h3>
                <ul className="space-y-2 text-xs text-slate-400 font-medium">
                  <li className="flex items-center gap-2">❌ Veralteter Baukasten / Ladezeiten &gt; 4 Sekunden</li>
                  <li className="flex items-center gap-2">❌ Anrufe außerhalb der Arbeitszeit gehen verloren</li>
                  <li className="flex items-center gap-2">❌ Keine lokale SEO-Spezialisierung in Köln</li>
                </ul>
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)] cursor-ew-resize pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 text-white border-2 border-emerald-400 shadow-2xl flex items-center justify-center pointer-events-auto hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

          </div>

          {/* Helper caption */}
          <p className="text-center text-xs font-semibold text-slate-400 mt-4 flex items-center justify-center gap-2">
            <MoveHorizontal className="w-4 h-4 text-emerald-400" />
            <span>Ziehen Sie den Regler mit der Maus oder dem Finger</span>
          </p>
        </div>

      </div>
    </section>
  );
}
