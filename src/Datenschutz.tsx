import { X } from "lucide-react";
import { motion } from "motion/react";

export const Datenschutz = ({ onClose }: { onClose: () => void }) => (
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

            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Datenschutzerklärung</h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>1. Verantwortlicher</h3>
                    <p>
                        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                        Alexander Rheindorf – Rheindorf Digital<br />
                        E-Mail: hello@rheindorf.digital
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>2. Erhebung und Speicherung personenbezogener Daten</h3>
                    <p>
                        Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst (sog. Server-Logfiles).
                        Diese umfassen u.a. den verwendeten Webbrowser, das Betriebssystem, den Domainnamen Ihres Internet-Service-Providers
                        und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>3. Kontaktaufnahme</h3>
                    <p>
                        Wenn Sie per E-Mail Kontakt mit mir aufnehmen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für
                        den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>4. Cookies</h3>
                    <p>
                        Diese Website verwendet keine Tracking-Cookies. Es werden keine personenbezogenen Daten über Cookies erhoben
                        oder an Dritte weitergegeben.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>5. Analyse-Tools</h3>
                    <p>
                        Auf dieser Website werden keine Analyse- oder Tracking-Tools von Drittanbietern eingesetzt.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>6. Ihre Rechte</h3>
                    <p>Sie haben jederzeit das Recht auf:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Auskunft über Ihre bei mir gespeicherten personenbezogenen Daten</li>
                        <li>Berichtigung unrichtiger personenbezogener Daten</li>
                        <li>Löschung Ihrer bei mir gespeicherten Daten</li>
                        <li>Einschränkung der Datenverarbeitung</li>
                        <li>Widerspruch gegen die Verarbeitung</li>
                        <li>Datenübertragbarkeit</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>7. SSL-Verschlüsselung</h3>
                    <p>
                        Diese Seite nutzt aus Gründen der Sicherheit eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                        Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.
                    </p>
                </div>
            </div>
        </motion.div>
    </div>
);
