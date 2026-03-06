import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Check, Zap, FileText, MessageSquare, Share2, Users, ShoppingCart, BarChart3, UserPlus, FileOutput, CalendarClock, TrendingDown, ScrollText, Star, Mail, FolderKanban, AlertTriangle, Building2, PartyPopper } from "lucide-react";

export interface Workflow {
    id: number;
    icon: any;
    name: string;
    description: string;
    categories: string[];
    tags: string[];
}

export const workflows: Workflow[] = [
    {
        id: 1,
        icon: Zap,
        name: "AI-Leadqualifizierung & CRM",
        description: "Leads automatisch bewerten, ins CRM eintragen und Follow-up versenden.",
        categories: ["Sales & CRM"],
        tags: ["Agenturen", "B2B-Vertrieb"]
    },
    {
        id: 2,
        icon: FileText,
        name: "Rechnungs- & Belegverarbeitung",
        description: "Rechnungen per E-Mail auslesen, prüfen und in Buchhaltungssoftware übertragen.",
        categories: ["Finance"],
        tags: ["KMU", "Handwerk"]
    },
    {
        id: 3,
        icon: MessageSquare,
        name: "Kundenanfragen-Triage mit AI",
        description: "E-Mails und Tickets kategorisieren, zuweisen und Erst-Antwort automatisch senden.",
        categories: ["Operations"],
        tags: ["E-Commerce", "SaaS"]
    },
    {
        id: 4,
        icon: Share2,
        name: "Social Media Content Pipeline",
        description: "Thema eingeben, AI generiert Texte, nach Freigabe automatisch posten.",
        categories: ["Marketing"],
        tags: ["Agenturen", "KMU"]
    },
    {
        id: 5,
        icon: Users,
        name: "Kunden/Mitarbeiter-Onboarding",
        description: "Nach Vertragsabschluss automatisch E-Mails, Zugänge, Aufgaben und Kalender erstellen.",
        categories: ["HR & Onboarding"],
        tags: ["HR", "Agenturen"]
    },
    {
        id: 6,
        icon: ShoppingCart,
        name: "E-Commerce Bestellabwicklung",
        description: "Bestellungen aus Shopify/WooCommerce mit Lager, Versand und Kundenmail synchronisieren.",
        categories: ["E-Commerce"],
        tags: ["Online-Shops"]
    },
    {
        id: 7,
        icon: BarChart3,
        name: "AI KPI-Reporting-Bot",
        description: "Daten aus GA, CRM und Ads sammeln und als wöchentlichen Report versenden.",
        categories: ["Marketing"],
        tags: ["Marketing", "KMU"]
    },
    {
        id: 8,
        icon: UserPlus,
        name: "Bewerbermanagement",
        description: "Bewerbungen erfassen, bestätigen, ins ATS eintragen und Hiring Manager benachrichtigen.",
        categories: ["HR & Onboarding"],
        tags: ["HR", "Mittelstand"]
    },
    {
        id: 9,
        icon: FileOutput,
        name: "Automatisierte Angebotserstellung",
        description: "Aus Formular automatisch ein PDF-Angebot erstellen und per E-Mail versenden.",
        categories: ["Sales & CRM"],
        tags: ["Handwerk", "B2B"]
    },
    {
        id: 10,
        icon: CalendarClock,
        name: "Termin-Management-Automation",
        description: "Buchung löst CRM-Eintrag, Erinnerungen und Post-Meeting-Follow-up aus.",
        categories: ["Sales & CRM", "Operations"],
        tags: ["Berater", "Coaches"]
    },
    {
        id: 11,
        icon: TrendingDown,
        name: "Preismonitoring & Wettbewerb",
        description: "Konkurrenzpreise automatisch überwachen und bei Änderungen Alerts auslösen.",
        categories: ["E-Commerce"],
        tags: ["E-Commerce"]
    },
    {
        id: 12,
        icon: ScrollText,
        name: "Vertragsverwaltung & Fristen",
        description: "Vertragsablauf und Kündigungsfristen überwachen und rechtzeitig melden.",
        categories: ["Operations", "Finance"],
        tags: ["KMU", "Immobilien"]
    },
    {
        id: 13,
        icon: Star,
        name: "Kundenbewertungen-Management",
        description: "Google/Trustpilot-Bewertungen sammeln, analysieren und KI-basiert beantworten.",
        categories: ["Marketing"],
        tags: ["Lokale Unternehmen"]
    },
    {
        id: 14,
        icon: Mail,
        name: "Newsletter-Segmentierung",
        description: "Kontakte nach Verhalten segmentieren und automatische E-Mail-Sequenzen auslösen.",
        categories: ["Marketing", "E-Commerce"],
        tags: ["E-Commerce", "Coaches"]
    },
    {
        id: 15,
        icon: FolderKanban,
        name: "Projektmanagement-Automation",
        description: "Neuer CRM-Auftrag erstellt automatisch Projektstruktur in Asana oder Notion.",
        categories: ["Operations"],
        tags: ["Agenturen", "IT"]
    },
    {
        id: 16,
        icon: AlertTriangle,
        name: "Automatisches Mahnwesen",
        description: "Überfällige Rechnungen lösen mehrstufige Mahnsequenzen per E-Mail aus.",
        categories: ["Finance"],
        tags: ["Alle KMU"]
    },
    {
        id: 17,
        icon: Building2,
        name: "Immobilien-Lead-Routing",
        description: "Anfragen qualifizieren, dem richtigen Makler zuweisen und Exposé automatisch versenden.",
        categories: ["Sales & CRM"],
        tags: ["Immobilien"]
    },
    {
        id: 18,
        icon: PartyPopper,
        name: "Eventmanagement-Automation",
        description: "Anmeldung löst Bestätigung, Erinnerungen und Post-Event-Follow-up automatisch aus.",
        categories: ["Operations"],
        tags: ["Veranstalter", "Coaches"]
    }
];

const allCategories = ["Alle", "Sales & CRM", "Marketing", "HR & Onboarding", "Finance", "E-Commerce", "Operations"];

export const ProjectsPage = ({ onNavigate }: { onNavigate: (hash: string) => void }) => {
    const [activeFilter, setActiveFilter] = useState("Alle");

    const filteredWorkflows = activeFilter === "Alle"
        ? workflows
        : workflows.filter(w => w.categories.includes(activeFilter));

    return (
        <section className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Back button */}
                <button
                    onClick={() => onNavigate("#/")}
                    className="hover:text-emerald-500 flex items-center gap-2 mb-8 text-sm font-mono transition-colors" style={{ color: 'var(--color-text-muted)' }}
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
                    <div className="absolute -top-20 -left-20 w-72 h-72 blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: 'var(--color-glow)' }} />
                    <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Workflows</h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: 'var(--color-text-heading)' }}>
                        Automation, die <span className="text-gradient">sich selbst verkauft</span>.
                    </h1>
                    <p className="text-xl max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
                        18 praxiserprobte n8n-Workflows – bereit zum Einsatz. Von Lead-Qualifizierung über KI-gestützte Kundenbetreuung bis hin zu automatisiertem Mahnwesen.
                    </p>
                </motion.div>

                {/* Filter Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {allCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat
                                ? "bg-emerald-500 text-black"
                                : "border"
                                }`}
                            style={activeFilter !== cat ? { backgroundColor: 'var(--color-bg-tag)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' } : undefined}
                        >
                            {cat}
                            {activeFilter !== cat && (
                                <span className="ml-2 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                                    {cat === "Alle" ? workflows.length : workflows.filter(w => w.categories.includes(cat)).length}
                                </span>
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Workflow Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredWorkflows.map((workflow, idx) => {
                        const IconComponent = workflow.icon;
                        return (
                            <motion.div
                                key={workflow.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="group relative p-6 rounded-2xl border hover:border-emerald-500/50 transition-all overflow-hidden cursor-pointer" style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                            >
                                {/* Quick-Win overlay on hover */}
                                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <span className="flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                                        <Check className="w-3 h-3" /> Quick-Win
                                    </span>
                                </div>

                                {/* Workflow number */}
                                <span className="absolute top-4 left-6 text-[10px] font-mono" style={{ color: 'var(--color-text-faint)' }}>
                                    #{String(workflow.id).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-5 mt-4 group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-6 h-6" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">{workflow.name}</h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{workflow.description}</p>

                                {/* Categories */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {workflow.categories.map(cat => (
                                        <span key={cat} className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {workflow.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded uppercase" style={{ backgroundColor: 'var(--color-bg-tag)', color: 'var(--color-text-muted)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-8 rounded-2xl border grid grid-cols-2 md:grid-cols-3 gap-8" style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                >
                    <div className="text-center">
                        <span className="text-3xl font-bold text-emerald-500">18</span>
                        <p className="text-xs font-mono mt-1 uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Workflows</p>
                    </div>
                    <div className="text-center">
                        <span className="text-3xl font-bold text-emerald-500">6</span>
                        <p className="text-xs font-mono mt-1 uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Kategorien</p>
                    </div>
                    <div className="text-center">
                        <span className="text-3xl font-bold text-emerald-500">24h</span>
                        <p className="text-xs font-mono mt-1 uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Setup-Zeit</p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>Interesse an einem dieser Workflows?</p>
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
};
