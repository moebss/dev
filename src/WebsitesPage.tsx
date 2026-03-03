import { motion } from "motion/react";
import { ArrowLeft, Globe } from "lucide-react";

export const WebsitesPage = ({ onNavigate }: { onNavigate: (hash: string) => void }) => (
    <section className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
            {/* Back button */}
            <button
                onClick={() => onNavigate("#/")}
                className="text-zinc-500 hover:text-emerald-400 flex items-center gap-2 mb-8 text-sm font-mono transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
            </button>

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 relative"
            >
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Web Development</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    Websites, die <span className="text-gradient">beeindrucken</span>.
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl">
                    Moderne, performante Webseiten und Web-Apps – vom ersten Konzept bis zum Go-Live.
                </p>
            </motion.div>

            {/* Empty state */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center justify-center py-24 text-center"
            >
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                    <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Projekte kommen bald</h3>
                <p className="text-zinc-400 max-w-md mb-8">
                    Hier werden bald ausgewählte Web-Projekte präsentiert. Schau später wieder vorbei oder melde dich direkt bei mir.
                </p>
                <a
                    href="mailto:hello@rheindorf.digital"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all"
                >
                    Jetzt Kontakt aufnehmen
                </a>
            </motion.div>
        </div>
    </section>
);
