import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#10172a] text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl border border-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="font-display text-2xl font-bold text-white mb-4">Impressum</h2>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p>
            Rheindorf Digital<br />
            Inhaber: Alexander Rheindorf<br />
            Kerpen, Nordrhein-Westfalen
          </p>

          <p><strong>Kontakt:</strong><br />
            Telefon: 0160 / 963 517 50<br />
            E-Mail: hello@rheindorf.digital<br />
            Website: https://rheindorf.digital
          </p>

          <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
            Alexander Rheindorf, Kerpen
          </p>
        </div>
      </div>
    </div>
  );
}
