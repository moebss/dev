
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Calendar, Clock, Tag, Filter } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    tags: string[];
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "ki-im-mittelstand",
        title: "Warum KI im Mittelstand kein Luxus mehr ist",
        date: "28. Februar 2026",
        readTime: "5 Min.",
        excerpt: "Viele Unternehmen denken, KI sei nur was für Konzerne. Dabei liegen die größten Chancen oft in kleinen, smarten Automatisierungen – und die sind einfacher umzusetzen, als man denkt.",
        tags: ["KI", "Mittelstand", "Automatisierung"],
        content: `
## Warum KI im Mittelstand kein Luxus mehr ist

Viele Unternehmen denken, KI sei nur was für Konzerne mit riesigen IT-Abteilungen. Dabei liegen die größten Chancen oft in kleinen, smarten Automatisierungen – und die sind einfacher umzusetzen, als man denkt.

### Der Mythos der teuren KI

Wenn man "Künstliche Intelligenz" hört, denkt man schnell an selbstfahrende Autos oder ChatGPT. Aber KI im Mittelstand sieht ganz anders aus: Es geht um intelligente Assistenten, die E-Mails sortieren, Angebote vorausfüllen oder Kundendaten automatisch pflegen.

### Drei Beispiele aus der Praxis

**1. Automatische Angebotsgestaltung**
Ein Handwerksbetrieb spart pro Woche 5 Stunden, weil ein KI-Assistent Angebote auf Basis vergangener Projekte vorbefüllt.

**2. E-Mail-Triage im HR**
Bewerbungen werden automatisch gesichtet, kategorisiert und mit einem Quick-Score versehen – HR konzentriert sich auf die besten Kandidaten.

**3. Chatbot für Kundenfragen**
Ein einfacher KI-Chatbot beantwortet 70% der wiederkehrenden Fragen auf der Website – rund um die Uhr.

### Der erste Schritt

Fang klein an. Such dir einen Prozess, der dich jeden Tag nervt – und frag dich: Könnte eine Maschine das für mich erledigen? Die Antwort ist häufiger "Ja" als du denkst.
    `
    },
    {
        slug: "website-oder-social-media",
        title: "Website oder Social Media – was braucht dein Business wirklich?",
        date: "25. Februar 2026",
        readTime: "4 Min.",
        excerpt: "Instagram, LinkedIn oder doch eine eigene Website? Die richtige Antwort hängt von deinem Ziel ab. Hier erfährst du, wann sich was lohnt.",
        tags: ["Web Development", "Strategie", "Social Media"],
        content: `
## Website oder Social Media – was braucht dein Business wirklich?

Instagram, LinkedIn oder doch eine eigene Website? Die richtige Antwort hängt von deinem Ziel ab.

### Social Media: Schnell, aber nicht deins

Social Media ist großartig für Reichweite und Sichtbarkeit. Aber: Du baust auf gemieteter Fläche. Der Algorithmus entscheidet, wer dich sieht – und das kann sich jederzeit ändern.

### Website: Dein digitales Zuhause

Eine Website gehört dir. Du kontrollierst Design, Inhalte und Nutzererfahrung. Für Vertrauen, Professionalität und Sichtbarkeit bei Google ist sie unverzichtbar.

### Die goldene Mitte

Meine Empfehlung: **Beides**. Aber starte mit der Website als Fundament. Social Media ist der Verstärker, aber dein digitales Zuhause sollte stehen, bevor du Gäste einlädst.

### Checkliste für deine Entscheidung

- Willst du Vertrauen aufbauen? → **Website**
- Willst du schnell Reichweite? → **Social Media**
- Willst du bei Google gefunden werden? → **Website**
- Willst du mit Kunden interagieren? → **Social Media**
- Willst du alles unter Kontrolle haben? → **Website**
    `
    },
    {
        slug: "prozesse-digitalisieren",
        title: "5 Anzeichen, dass dein Unternehmen Prozesse digitalisieren sollte",
        date: "20. Februar 2026",
        readTime: "3 Min.",
        excerpt: "Excel-Chaos, manuelle Datenpflege und E-Mail-Ping-Pong – wenn dir das bekannt vorkommt, ist es Zeit für digitale Workflows.",
        tags: ["Digitalisierung", "Workflows", "Effizienz"],
        content: `
## 5 Anzeichen, dass dein Unternehmen Prozesse digitalisieren sollte

Excel-Chaos, manuelle Datenpflege und E-Mail-Ping-Pong – kommt dir das bekannt vor?

### 1. Du pflegst die gleichen Daten an mehreren Stellen

Wenn du Kundendaten in Excel, im Mailprogramm und auf Papier gleichzeitig pflegst, ist es höchste Zeit für ein zentrales System.

### 2. Informationen gehen regelmäßig verloren

"Das hatte ich dir doch gemailt!" – Wenn dieser Satz öfter fällt, fehlt ein zentraler Informationsfluss.

### 3. Onboarding neuer Mitarbeiter dauert Wochen

Je länger ein neuer Mitarbeiter braucht, um sich zurechtzufinden, desto ineffizienter sind deine internen Prozesse.

### 4. Du verbringst mehr Zeit mit Verwaltung als mit deinem Kerngeschäft

Administrative Aufgaben sollten nicht den Großteil deines Tages fressen. Automatisierung schafft Freiraum.

### 5. Deine Kunden warten zu lange auf Antworten

Wenn Anfragen tagelang liegen bleiben, weil niemand den Überblick hat, verlierst du nicht nur Zeit – sondern auch Kunden.

### Fazit

Wenn du dich in drei oder mehr Punkten wiedererkannt hast, ist es an der Zeit, deine Prozesse zu überdenken. Der erste Schritt: Melde dich bei mir.
    `
    },
    {
        slug: "lead-workflows-vertrieb",
        title: "Wie automatisierte Lead-Workflows deinen Vertrieb beschleunigen",
        date: "18. Februar 2026",
        readTime: "5 Min.",
        excerpt: "Leads kommen rein – aber keiner reagiert schnell genug. Mit automatisierten Workflows wird jeder Lead sofort bewertet, zugewiesen und kontaktiert.",
        tags: ["Workflows", "Vertrieb", "CRM"],
        content: `
## Wie automatisierte Lead-Workflows deinen Vertrieb beschleunigen

Leads kommen rein – aber keiner reagiert schnell genug. Das Ergebnis: verlorene Kunden und verpasste Umsätze.

### Das Problem: Zu langsame Reaktionszeiten

Studien zeigen, dass die Chance einen Lead zu konvertieren nach 5 Minuten dramatisch sinkt. Trotzdem vergehen in vielen Unternehmen Stunden oder Tage, bevor jemand reagiert.

### Die Lösung: Automatisierte Lead-Qualifizierung

Ein Workflow, der automatisch greift, sobald ein Lead eingeht:

**1. Lead erfassen** – Aus Formular, E-Mail oder Chat wird automatisch ein CRM-Eintrag erstellt.

**2. Lead bewerten** – KI analysiert den Lead und vergibt einen Score basierend auf Branche, Unternehmensgröße und Anfrage.

**3. Lead zuweisen** – Der passende Vertriebsmitarbeiter wird automatisch benachrichtigt.

**4. Follow-up starten** – Eine personalisierte E-Mail wird innerhalb von 2 Minuten versendet.

### Das Ergebnis

- Reaktionszeit von Stunden auf Sekunden
- 40% höhere Conversion-Rate
- Vertrieb konzentriert sich auf die vielversprechendsten Leads

### Fazit

Wer seine Lead-Bearbeitung automatisiert, gewinnt nicht nur Zeit – sondern auch mehr Kunden.
    `
    },
    {
        slug: "rechnungen-automatisieren",
        title: "Rechnungsverarbeitung automatisieren: So sparst du 10 Stunden pro Woche",
        date: "15. Februar 2026",
        readTime: "4 Min.",
        excerpt: "Rechnungen abtippen, prüfen, weiterleiten – das kostet Stunden. Automatisierte Workflows übernehmen das für dich.",
        tags: ["Workflows", "Finance", "Automatisierung"],
        content: `
## Rechnungsverarbeitung automatisieren

Rechnungen abtippen, prüfen, weiterleiten – das kostet jede Woche Stunden. Dabei lässt sich genau dieser Prozess hervorragend automatisieren.

### Der typische manuelle Prozess

- Rechnung kommt per E-Mail oder Post
- Jemand tippt die Daten ab
- Prüfung auf Korrektheit
- Freigabe einholen
- In die Buchhaltung übertragen

### Der automatisierte Prozess

**Schritt 1:** Rechnung wird automatisch aus dem E-Mail-Postfach extrahiert

**Schritt 2:** KI liest die relevanten Daten aus (Betrag, Datum, Lieferant, USt-Id)

**Schritt 3:** Automatischer Abgleich mit bestehenden Bestellungen

**Schritt 4:** Bei Übereinstimmung → automatische Freigabe und Buchung

**Schritt 5:** Bei Abweichung → Benachrichtigung an den zuständigen Mitarbeiter

### Der ROI

- **10+ Stunden** pro Woche gespart
- **95% weniger** manuelle Eingabefehler
- **Sofortige** Übersicht über offene Rechnungen

### Für wen ist das geeignet?

Jedes Unternehmen, das mehr als 20 Rechnungen pro Monat verarbeitet, profitiert von diesem Workflow.
    `
    },
    {
        slug: "onboarding-automatisierung",
        title: "Mitarbeiter-Onboarding per Workflow: Der erste Tag zählt",
        date: "12. Februar 2026",
        readTime: "4 Min.",
        excerpt: "Ein neuer Mitarbeiter startet – und es fehlen Zugänge, Ausstattung und der Welcome-Call. Mit automatisierten Onboarding-Workflows passiert das nie wieder.",
        tags: ["Workflows", "HR", "Onboarding"],
        content: `
## Mitarbeiter-Onboarding per Workflow

Ein neuer Mitarbeiter startet – und es fehlen Zugänge, Ausstattung und der Welcome-Call. Klingt bekannt?

### Warum Onboarding so oft schiefgeht

Onboarding ist ein Prozess, der viele Abteilungen betrifft: IT, HR, Fachabteilung, Office Management. Ohne Automatisierung geht immer etwas unter.

### Der automatisierte Onboarding-Workflow

Sobald ein neuer Vertrag unterschrieben wird, startet der Workflow automatisch:

**Woche -2 vor Startdatum:**
- IT erhält Ticket für Laptop und Zugänge
- HR bereitet Unterlagen vor
- Willkommens-E-Mail wird vorbereitet

**Tag 1:**
- Automatische Willkommens-E-Mail mit allen wichtigen Links
- Kalender-Einladungen für Kennenlern-Meetings
- Onboarding-Aufgaben werden im Projektmanagement-Tool erstellt

**Woche 1-4:**
- Wöchentliche Check-in-Erinnerungen an den Vorgesetzten
- Feedback-Formular nach 30 Tagen

### Das Ergebnis

- Kein Mitarbeiter startet mehr ohne Zugänge
- HR spart 3 Stunden pro Onboarding
- Neue Mitarbeiter fühlen sich sofort willkommen
    `
    },
    {
        slug: "email-triage-workflow",
        title: "E-Mail-Triage: Wie KI dein Postfach managt",
        date: "10. Februar 2026",
        readTime: "4 Min.",
        excerpt: "200 E-Mails am Tag, die Hälfte irrelevant. Ein KI-Triage-Workflow sortiert, kategorisiert und beantwortet – bevor du morgens den Kaffee trinkst.",
        tags: ["Workflows", "KI", "E-Mail"],
        content: `
## E-Mail-Triage: Wie KI dein Postfach managt

200 E-Mails am Tag. Die Hälfte irrelevant, ein Viertel dringend, der Rest irgendwo dazwischen. Wer soll da noch den Überblick behalten?

### Das Problem

E-Mail-Overload ist real. Manager verbringen im Schnitt **2,5 Stunden pro Tag** mit E-Mails. Die meiste Zeit geht für Sortieren und Weiterleiten drauf.

### Die Lösung: KI-basierte E-Mail-Triage

Ein Workflow, der jede eingehende E-Mail analysiert:

**1. Kategorisierung** – KI erkennt, ob es eine Kundenanfrage, interne Nachricht, Rechnung oder Newsletter ist.

**2. Priorisierung** – Dringende Anfragen werden nach oben sortiert, Newsletter archiviert.

**3. Auto-Reply** – Standardanfragen erhalten sofort eine Bestätigung mit geschätzter Antwortzeit.

**4. Weiterleitung** – Anfragen werden dem richtigen Team zugewiesen (Support, Sales, HR).

### Praxisbeispiel

Ein E-Commerce-Unternehmen mit 150+ täglichen Kundenanfragen spart durch KI-Triage **15 Stunden pro Woche** – und hat die durchschnittliche Antwortzeit von 8 Stunden auf 45 Minuten reduziert.

### Fazit

E-Mail-Triage ist einer der einfachsten und wirkungsvollsten Workflows. Der ROI kommt innerhalb der ersten Woche.
    `
    },
    {
        slug: "social-media-automatisierung",
        title: "Social Media Content auf Autopilot: So funktioniert's",
        date: "8. Februar 2026",
        readTime: "5 Min.",
        excerpt: "Content-Ideen, Texte, Bilder, Posting – alles automatisiert. Wie eine Content-Pipeline funktioniert, ohne die persönliche Note zu verlieren.",
        tags: ["Workflows", "Social Media", "Marketing"],
        content: `
## Social Media Content auf Autopilot

Content-Erstellung frisst Zeit. Ideen finden, Texte schreiben, Bilder erstellen, posten, analysieren – und das für mehrere Plattformen gleichzeitig.

### Die Content-Pipeline

Ein Workflow, der aus einer Idee einen fertigen Post macht:

**1. Themen-Input** – Du gibst ein Thema, ein Keyword oder eine Branchennews ein.

**2. KI-Texterstellung** – Die KI erstellt drei Varianten: LinkedIn (professionell), Instagram (locker), Twitter (knackig).

**3. Review-Schritt** – Du bekommst die Entwürfe zur Freigabe – ein Klick genügt.

**4. Automatisches Posting** – Nach Freigabe werden die Posts zur optimalen Zeit veröffentlicht.

**5. Performance-Tracking** – Engagement-Daten werden gesammelt und als Wochenbericht zugestellt.

### Wichtig: Authentizität bewahren

Der Workflow nimmt dir die Fleißarbeit ab – aber **du** gibst den Ton an. Jeder Post geht durch deinen Review. Keine generische KI-Textwüste.

### Zeitersparnis

- Ohne Pipeline: ~8 Stunden/Woche für 5 Posts
- Mit Pipeline: ~2 Stunden/Woche für 10 Posts

### Für wen?

Selbstständige, Agenturen und KMU, die regelmäßig posten wollen, aber nicht die Ressourcen für ein Social-Media-Team haben.
    `
    },
    {
        slug: "crm-automatisierung",
        title: "CRM-Automatisierung: Schluss mit manuellem Daten-Pingpong",
        date: "5. Februar 2026",
        readTime: "4 Min.",
        excerpt: "CRM-Daten manuell pflegen ist wie Wasser mit einem Sieb tragen. Automatisierte Workflows halten dein CRM immer aktuell – ohne Mehraufwand.",
        tags: ["Workflows", "CRM", "Vertrieb"],
        content: `
## CRM-Automatisierung: Schluss mit Daten-Pingpong

Dein CRM ist nur so gut wie die Daten darin. Und wenn die Pflege manuell passiert, sind sie meistens veraltet, unvollständig oder falsch.

### Das Problem

- Vertrieb vergisst, Kontakte einzutragen
- Leads werden doppelt angelegt
- Follow-ups gehen unter
- Keine einheitliche Datenstruktur

### Die Lösung: CRM auf Autopilot

**Kontakte automatisch erstellen** – Jede Anfrage über Website, E-Mail oder Telefon wird automatisch als Kontakt im CRM angelegt.

**Daten anreichern** – Firmenname, Branche und Unternehmensgröße werden automatisch aus öffentlichen Quellen ergänzt.

**Follow-up-Erinnerungen** – Das System erinnert den Vertrieb automatisch an offene Follow-ups.

**Pipeline-Updates** – Wenn ein Angebot versendet oder ein Termin gebucht wird, aktualisiert sich die Pipeline automatisch.

### Der Unterschied

- **Vorher:** CRM als lästige Pflicht, die niemand macht
- **Nachher:** CRM als lebendiges Tool, das den Vertrieb unterstützt

### Quick Win

Starte mit einem einzigen Workflow: "Neuer Website-Lead → CRM-Eintrag + Willkommens-E-Mail". Das dauert 30 Minuten Setup und spart sofort Zeit.
    `
    },
    {
        slug: "reporting-workflow",
        title: "Automatisches KPI-Reporting: Daten, die von alleine kommen",
        date: "3. Februar 2026",
        readTime: "3 Min.",
        excerpt: "Jeden Montag die gleichen Zahlen aus 5 Tools zusammenkopieren? Ein Reporting-Workflow liefert dir den fertigen Bericht ins Postfach.",
        tags: ["Workflows", "Reporting", "KI"],
        content: `
## Automatisches KPI-Reporting

Jeden Montag die gleichen Zahlen zusammenkopieren: Google Analytics, CRM, Ad-Manager, E-Mail-Tool. Das nervt – und ist fehleranfällig.

### Der Reporting-Workflow

**1. Daten sammeln** – Der Workflow zapft automatisch alle relevanten Quellen an: Website-Traffic, Conversion-Rates, Ad-Spend, E-Mail-Opens.

**2. Daten aufbereiten** – Zahlen werden aggregiert, Trends berechnet, Vergleiche zum Vormonat gezogen.

**3. Report erstellen** – Ein visueller Bericht wird als PDF oder Dashboard generiert.

**4. Versand** – Jeden Montag um 8:00 landet der Report im Postfach des Teams.

### Was reingehört

- Website-Traffic und Conversion-Rates
- Werbeausgaben und ROI
- Neue Leads und Pipeline-Wert
- E-Mail-Performance (Öffnungs- und Klickraten)
- Social Media Engagement

### Der Effekt

- **2 Stunden** Arbeitszeit pro Woche gespart
- Immer aktuelle Zahlen, kein Copy & Paste
- Team trifft bessere Entscheidungen, weil die Daten da sind
    `
    },
    {
        slug: "angebote-automatisieren",
        title: "Angebotserstellung in 2 Minuten statt 2 Stunden",
        date: "1. Februar 2026",
        readTime: "4 Min.",
        excerpt: "Angebote schreiben dauert ewig – Vorlage suchen, Daten eintragen, PDF erstellen, versenden. Ein Workflow macht das in unter 2 Minuten.",
        tags: ["Workflows", "Vertrieb", "Automatisierung"],
        content: `
## Angebotserstellung in 2 Minuten

Ein Kunde fragt an. Du weißt genau, was er braucht. Aber bis das Angebot raus ist, vergehen trotzdem 2 Stunden – weil du die Vorlage suchen, Daten eintragen, Preise berechnen und das PDF formatieren musst.

### Der Workflow

**1. Anfrage erfassen** – Kunde füllt ein einfaches Formular aus (oder du trägst die Daten in 30 Sekunden ein).

**2. Angebot generieren** – Auf Basis der Eingaben wird automatisch ein PDF mit deinem Branding erstellt.

**3. Preiskalkulation** – Preise werden automatisch berechnet, inklusive Rabatte und Sonderkonditionen.

**4. Versand** – Das fertige Angebot wird per E-Mail an den Kunden gesendet.

**5. Follow-up** – Nach 3 Tagen ohne Reaktion geht automatisch eine Erinnerung raus.

### Praxis-Beispiel

Ein Handwerksbetrieb erstellt pro Woche 15 Angebote. Vorher: 2 Stunden pro Angebot = 30 Stunden/Woche. Nachher: 2 Minuten pro Angebot = 30 Minuten/Woche.

### Die gesparte Zeit

- **29,5 Stunden** pro Woche für andere Aufgaben
- Angebote gehen noch am selben Tag raus
- Professionelles Branding in jedem Angebot
    `
    },
    {
        slug: "termin-management-workflow",
        title: "Termin-Management: Vom Buchen bis zum Follow-up automatisiert",
        date: "28. Januar 2026",
        readTime: "3 Min.",
        excerpt: "Kunden buchen, Erinnerungen verschicken, No-Shows nachfassen – das alles passiert automatisch, während du dich auf das Gespräch vorbereitest.",
        tags: ["Workflows", "Termine", "CRM"],
        content: `
## Termin-Management automatisiert

Termine koordinieren ist eine der zeitaufwendigsten Aufgaben – und eine der am einfachsten zu automatisierenden.

### Der Workflow

**Buchung:** Kunde wählt einen freien Slot in deinem Kalender.

**Sofort:** Bestätigung per E-Mail mit allen Details und Meeting-Link.

**24h vorher:** Automatische Erinnerung an den Kunden.

**Nach dem Termin:** Follow-up-E-Mail mit Zusammenfassung und nächsten Schritten.

**CRM-Update:** Termin und Notizen werden automatisch im CRM protokolliert.

### Bonus: No-Show-Handling

Wenn ein Kunde nicht erscheint, wird automatisch eine freundliche Nachricht versendet mit der Möglichkeit, neu zu buchen.

### Ergebnis

- Null manueller Aufwand für Terminkoordination
- Weniger No-Shows durch automatische Erinnerungen
- Professioneller Eindruck bei jedem Kundenkontakt
    `
    },
    {
        slug: "mahnwesen-automatisieren",
        title: "Automatisches Mahnwesen: So bleibt kein Euro liegen",
        date: "25. Januar 2026",
        readTime: "4 Min.",
        excerpt: "Überfällige Rechnungen manuell nachverfolgen kostet Nerven und Zeit. Ein Mahnworkflow erledigt das diplomatisch und zuverlässig.",
        tags: ["Workflows", "Finance", "Automatisierung"],
        content: `
## Automatisches Mahnwesen

Offene Rechnungen sind ärgerlich. Noch ärgerlicher ist es, jede Woche manuell nachzuhaken. Ein automatisierter Mahnworkflow löst das Problem.

### Die Mahnstufen

**Stufe 1 – Freundliche Erinnerung** (3 Tage nach Fälligkeit):
"Vielleicht ist es untergegangen – hier nochmal die Rechnung."

**Stufe 2 – Zweite Erinnerung** (10 Tage nach Fälligkeit):
"Die Rechnung ist noch offen. Bitte überweisen Sie bis..."

**Stufe 3 – Letzte Mahnung** (21 Tage nach Fälligkeit):
"Letzte Erinnerung vor weiteren Schritten."

### Automatisch, aber menschlich

Die Texte sind freundlich formuliert. Kein aggressiver Ton, kein juristisches Kauderwelsch. Denn meistens sind offene Rechnungen schlicht vergessen worden.

### Transparenz

- Dashboard mit allen offenen Posten
- Automatische Benachrichtigung an dich bei Stufe 3
- Wenn bezahlt → Workflow stoppt sofort

### Effekt

- **90% der Rechnungen** werden nach Stufe 1 bezahlt
- Du musst keine unangenehmen Anrufe machen
- Cashflow verbessert sich spürbar
    `
    }
];

// Get all unique tags
const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags))).sort();

// Simple Markdown-like renderer
const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: any[] = [];

    lines.forEach((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) {
            elements.push(<div key={i} className="h-4" />);
        } else if (trimmed.startsWith("## ")) {
            elements.push(<h2 key={i} className="text-3xl font-bold mt-8 mb-4">{trimmed.slice(3)}</h2>);
        } else if (trimmed.startsWith("### ")) {
            elements.push(<h3 key={i} className="text-xl font-bold mt-6 mb-3 text-emerald-400">{trimmed.slice(4)}</h3>);
        } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
            elements.push(<p key={i} className="text-zinc-200 font-bold mb-2">{trimmed.slice(2, -2)}</p>);
        } else if (trimmed.startsWith("- ")) {
            const text = trimmed.slice(2);
            const parts = text.split("**");
            elements.push(
                <div key={i} className="flex gap-3 mb-2 ml-4">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span className="text-zinc-400">
                        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-zinc-200">{part}</strong> : part)}
                    </span>
                </div>
            );
        } else {
            const parts = text_bold_split(trimmed);
            elements.push(<p key={i} className="text-zinc-400 leading-relaxed mb-3">{parts}</p>);
        }
    });

    return elements;
};

const text_bold_split = (text: string) => {
    const parts = text.split("**");
    if (parts.length === 1) return text;
    return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-zinc-200">{part}</strong> : part);
};

// Blog list view with tag filtering
export const BlogList = ({ onNavigate }: { onNavigate: (hash: string) => void }) => {
    const [activeTag, setActiveTag] = useState("Alle");

    const filteredPosts = activeTag === "Alle"
        ? blogPosts
        : blogPosts.filter(p => p.tags.includes(activeTag));

    return (
        <section className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Blog</h2>
                    <h3 className="text-4xl font-bold mb-4">Gedanken, Tipps & Insights</h3>
                    <p className="text-zinc-400">Praxisnahe Artikel rund um Workflows, KI und Digitalisierung im Mittelstand.</p>
                </div>

                {/* Tag Filter */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase mb-3">
                        <Filter className="w-3 h-3" /> Filtern nach Thema
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTag("Alle")}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeTag === "Alle"
                                ? "bg-emerald-500 text-black"
                                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"
                                }`}
                        >
                            Alle ({blogPosts.length})
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeTag === tag
                                    ? "bg-emerald-500 text-black"
                                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Posts */}
                <div className="space-y-8">
                    {filteredPosts.map((post, idx) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            onClick={() => onNavigate(`#/blog/${post.slug}`)}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{post.title}</h4>
                            <p className="text-zinc-400 mb-5 leading-relaxed">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-zinc-500 uppercase flex items-center gap-1">
                                            <Tag className="w-2.5 h-2.5" /> {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-emerald-500 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    Lesen <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Empty state */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-zinc-500 font-mono text-sm">Keine Artikel für diesen Filter gefunden.</p>
                        <button onClick={() => setActiveTag("Alle")} className="text-emerald-500 hover:text-emerald-400 text-sm mt-2">
                            Alle anzeigen
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

// Blog detail view
export const BlogPost = ({ slug, onNavigate }: { slug: string; onNavigate: (hash: string) => void }) => {
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <section className="pt-32 pb-24 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h2>
                    <button onClick={() => onNavigate("#/blog")} className="text-emerald-500 hover:text-emerald-400 flex items-center gap-2 mx-auto">
                        <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="pt-32 pb-24 min-h-screen">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <button
                        onClick={() => onNavigate("#/blog")}
                        className="text-zinc-500 hover:text-emerald-400 flex items-center gap-2 mb-8 text-sm font-mono transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
                    </button>

                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 uppercase flex items-center gap-1">
                                <Tag className="w-2.5 h-2.5" /> {tag}
                            </span>
                        ))}
                    </div>

                    <article className="prose-custom">
                        {renderContent(post.content)}
                    </article>

                    <div className="mt-16 pt-8 border-t border-white/5">
                        <button
                            onClick={() => onNavigate("#/blog")}
                            className="text-emerald-500 hover:text-emerald-400 flex items-center gap-2 text-sm font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Alle Artikel anzeigen
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
