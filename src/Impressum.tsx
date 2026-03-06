import { X } from "lucide-react";
import { motion } from "motion/react";

export const Impressum = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
        <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'var(--color-bg-overlay)' }} />
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" style={{ backgroundColor: 'var(--color-bg-modal)', borderColor: 'var(--color-border-strong)' }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 hover:text-emerald-500 transition-colors" style={{ color: 'var(--color-text-muted)' }}
            >
                <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Impressum</h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>Angaben gemäß § 5 TMG</h3>
                    <p>Alexander Rheindorf</p>
                    <p>Rheindorf Digital</p>
                    <p>Pankratiusstraße 31</p>
                    <p>50129 Bergheim</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>Kontakt</h3>
                    <p>E-Mail: hello@rheindorf.digital</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                    <p>Alexander Rheindorf</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>Haftungsausschluss</h3>
                    <h4 className="font-medium mt-3 mb-1" style={{ color: 'var(--color-text-primary)' }}>Haftung für Inhalte</h4>
                    <p>
                        Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                        Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs.1
                        TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    </p>
                    <h4 className="font-medium mt-3 mb-1" style={{ color: 'var(--color-text-primary)' }}>Haftung für Links</h4>
                    <p>
                        Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb
                        kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
                        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>Urheberrecht</h3>
                    <p>
                        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                </div>
            </div>
        </motion.div>
    </div>
);
