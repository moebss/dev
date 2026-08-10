import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatenschutzModal({ isOpen, onClose }: ModalProps) {
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

        <h2 className="font-display text-2xl font-bold text-white mb-4">Datenschutzerklärung</h2>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong>1. Datenschutz auf einen Blick</strong></p>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
          </p>

          <p><strong>2. Datenerfassung & KI-Systeme</strong></p>
          <p>
            Anfragen über unser Erstkontaktformular oder den Projekt-Rechner werden verschlüsselt verarbeitet. Beim Einsatz unseres KI-Telefonassistenten erfolgt das Hosting und die Sprachverarbeitung zu 100% in ISO-zertifizierten EU-Rechenzentren.
          </p>
        </div>
      </div>
    </div>
  );
}
