import { useState, useEffect, useRef } from "react";
import React from 'react';

// ─── TOOL LOGOS as SVG paths ──────────────────────────────────────────────────
const LOGOS = {
    telegram: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#0088cc" />
            <path d="M5.5 11.5l11-4.5-1.5 9-3.5-2.5-2 2v-3l5-4.5-6.5 3.5-2.5-1z" fill="white" />
        </svg>
    ),
    openai: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#10a37f" />
            <path d="M12 6.5a2.5 2.5 0 0 1 2.5 2.5v1h1a1.5 1.5 0 0 1 0 3h-1v1a2.5 2.5 0 0 1-5 0v-1h-1a1.5 1.5 0 0 1 0-3h1V9A2.5 2.5 0 0 1 12 6.5z" fill="white" opacity="0.9" />
        </svg>
    ),
    google: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M12 11v2.4h3.3c-.1.8-.9 2.4-3.3 2.4-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6c1.1 0 1.9.5 2.3.9l1.6-1.5C14.8 8.4 13.5 7.8 12 7.8c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4c3.1 0 5.2-2.2 5.2-5.3 0-.4 0-.6-.1-.9H12z" fill="#4285f4" />
        </svg>
    ),
    n8n: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#ea4b71" />
            <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">n8n</text>
        </svg>
    ),
    whisper: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#7C6AF7" />
            <rect x="10" y="7" width="4" height="7" rx="2" fill="white" />
            <path d="M7 13a5 5 0 0 0 10 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="12" y1="18" x2="12" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    cron: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#F59E0B" />
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M12 9v3l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    merge: ({ size = 20 }: { size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#7C6AF7" />
            <path d="M7 8l5 4-5 4M17 12H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

// ─── FLOW DATA ────────────────────────────────────────────────────────────────
const FLOWS = {
    input: {
        id: "input", label: "Nachricht", emoji: "📨", accent: "#0088cc",
        tagline: "Sprache oder Text → Kalender-Eintrag in ~3 Sekunden",
        nodes: [
            {
                id: "tg1", x: 40, y: 200, w: 150, h: 58, logo: "telegram", brand: "#0088cc", cat: "TRIGGER",
                label: "Telegram Bot", sub: "Nachricht empfangen",
                log: "📨 Neue Nachricht empfangen",
                detail: { title: "Telegram Trigger", desc: "Du schickst dem Bot eine Sprach- oder Textnachricht. n8n empfängt sie via Webhook und startet sofort.", out: '{ type:"voice"|"text", chat_id, content }', tools: ["Telegram Bot API", "n8n Webhook"] }
            },
            {
                id: "if1", x: 230, y: 200, w: 150, h: 58, logo: "n8n", brand: "#F59E0B", cat: "ROUTER",
                label: "Typ erkennen", sub: "Audio oder Text?",
                log: "⚡ Nachrichtentyp erkannt: voice",
                detail: { title: "If-Node: Routing", desc: "Prüft ob die Nachricht eine Sprachnachricht (OGG) oder Text ist. Zwei Pfade — beide enden beim GPT-Knoten.", out: "→ Audio  /  → Text", tools: ["n8n If-Node"] }
            },
            {
                id: "gf1", x: 420, y: 80, w: 150, h: 58, logo: "telegram", brand: "#0088cc", cat: "AKTION",
                label: "Audio laden", sub: "get file",
                log: "📁 OGG-Datei heruntergeladen (142 KB)",
                detail: { title: "Telegram: Get File", desc: "Das OGG-Audio der Sprachnachricht wird von Telegram-Servern heruntergeladen und als Binary für Whisper aufbereitet.", out: "audio/ogg binary (base64)", tools: ["Telegram File API"] }
            },
            {
                id: "ws1", x: 610, y: 80, w: 150, h: 58, logo: "whisper", brand: "#7C6AF7", cat: "KI",
                label: "Transkription", sub: "OpenAI Whisper",
                log: '🎙️ Transkript: "Morgen 14 Uhr Zahnarzt"',
                detail: { title: "Whisper: Sprache → Text", desc: "OpenAI Whisper transkribiert auf Deutsch. Funktioniert präzise auch bei Dialekt, schnellem Sprechen oder Geräuschen.", out: '"Morgen um 14 Uhr Zahnarzt"', tools: ["OpenAI Whisper API"] }
            },
            {
                id: "gp1", x: 420, y: 330, w: 150, h: 58, logo: "openai", brand: "#7C6AF7", cat: "KI",
                label: "Termin extrahieren", sub: "GPT-4o",
                log: '🤖 Extrahiert: Di 11.03. · 14:00 · Zahnarzt',
                detail: { title: "GPT-4o: Parsen", desc: 'Versteht natürliche Sprache: "Übermorgen um drei Kaffee mit Lisa im Café Central" → strukturiertes JSON.', out: '{ title, date:"2025-03-11", time:"14:00", loc }', tools: ["OpenAI GPT-4o"] }
            },
            {
                id: "cc1", x: 610, y: 330, w: 150, h: 58, logo: "google", brand: "#00C896", cat: "AKTION",
                label: "Termin anlegen", sub: "Google Calendar",
                log: "📅 Event erstellt: event_id abc123",
                detail: { title: "Google Calendar: Create", desc: "Termin wird automatisch im richtigen Kalender angelegt — Titel, Datum, Uhrzeit, Ort. Keine manuelle Eingabe.", out: "event_id + htmlLink", tools: ["Google Calendar API"] }
            },
            {
                id: "cf1", x: 800, y: 200, w: 150, h: 58, logo: "telegram", brand: "#00C896", cat: "AKTION",
                label: "Bestätigung", sub: "Telegram reply",
                log: '✅ Gesendet: "Zahnarzt Di 14:00 gespeichert"',
                detail: { title: "Bestätigung senden", desc: 'Sofortige Antwort: "✅ Zahnarzt — Di 11.03. · 14:00 Uhr". Loop geschlossen.', out: "Message sent · 200 OK", tools: ["Telegram Bot API"] }
            },
        ],
        edges: [
            { f: "tg1", t: "if1" }, { f: "if1", t: "gf1", label: "🎤" }, { f: "if1", t: "gp1", label: "💬" },
            { f: "gf1", t: "ws1" }, { f: "ws1", t: "gp1" }, { f: "gp1", t: "cc1" }, { f: "cc1", t: "cf1" },
        ],
        seq: ["tg1", "if1", "gf1", "ws1", "gp1", "cc1", "cf1"],
        stats: [{ l: "Latenz", v: "~3s" }, { l: "Sprache", v: "DE" }, { l: "Acc.", v: ">95%" }, { l: "Ausführungen", v: "tägl." }],
    },

    daily: {
        id: "daily", label: "Tages-Briefing", emoji: "🌅", accent: "#F59E0B",
        tagline: "Jeden Morgen 7:00 Uhr — dein Tag auf einen Blick",
        nodes: [
            {
                id: "dc0", x: 30, y: 210, w: 150, h: 58, logo: "cron", brand: "#F59E0B", cat: "TRIGGER",
                label: "Jeden Morgen", sub: "07:00 Uhr",
                log: "⏰ Cron ausgelöst: 07:00:00",
                detail: { title: "Schedule: 7:00 Uhr tägl.", desc: "Vollautomatisch. Kein manuelles Auslösen nötig — der Workflow startet jeden Morgen pünktlich.", out: "{ ts: 'today 07:00' }", tools: ["n8n Schedule Trigger"] }
            },
            {
                id: "dc1", x: 240, y: 80, w: 150, h: 58, logo: "google", brand: "#0088cc", cat: "AKTION",
                label: "Privat-Kalender", sub: "Heute abrufen",
                log: "📆 3 Termine aus Privat-Kalender",
                detail: { title: "GCal: Privat", desc: "Private Termine des heutigen Tages werden parallel abgerufen.", out: "events[3]", tools: ["Google Calendar API"] }
            },
            {
                id: "dc2", x: 240, y: 210, w: 150, h: 58, logo: "google", brand: "#0088cc", cat: "AKTION",
                label: "Arbeits-Kalender", sub: "Heute abrufen",
                log: "📆 2 Termine aus Arbeits-Kalender",
                detail: { title: "GCal: Arbeit", desc: "Meetings und geschäftliche Termine werden gleichzeitig abgerufen.", out: "events[2]", tools: ["Google Calendar API"] }
            },
            {
                id: "dc3", x: 240, y: 340, w: 150, h: 58, logo: "google", brand: "#0088cc", cat: "AKTION",
                label: "Shared Kalender", sub: "Heute abrufen",
                log: "📆 1 Termin aus Shared-Kalender",
                detail: { title: "GCal: Shared", desc: "Geteilter Kalender mit Team oder Familie fließt ebenfalls ein.", out: "events[1]", tools: ["Google Calendar API"] }
            },
            {
                id: "dm0", x: 460, y: 210, w: 150, h: 58, logo: "merge", brand: "#7C6AF7", cat: "LOGIK",
                label: "Zusammenführen", sub: "Merge + sortieren",
                log: "🔀 6 Termine gemergt, sortiert, dedup.",
                detail: { title: "Merge & Sort", desc: "Alle Kalender-Responses werden gemergt, nach Uhrzeit sortiert, Duplikate entfernt.", out: "events[6] sorted", tools: ["n8n Merge Node"] }
            },
            {
                id: "dg0", x: 670, y: 210, w: 150, h: 58, logo: "openai", brand: "#7C6AF7", cat: "KI",
                label: "Briefing verfassen", sub: "GPT-4o",
                log: '✍️ Briefing generiert (312 Tokens)',
                detail: { title: "GPT-4o: Briefing", desc: 'Formuliert natürlich: "Guten Morgen! Heute hast du 6 Termine. Los geht\'s um 9:00 mit dem Team-Meeting..."', out: "Formatierter Briefing-Text", tools: ["OpenAI GPT-4o"] }
            },
            {
                id: "ds0", x: 880, y: 210, w: 150, h: 58, logo: "telegram", brand: "#0088cc", cat: "AKTION",
                label: "Telegram senden", sub: "Tages-Briefing",
                log: "✈️ Briefing gesendet · 07:00:04",
                detail: { title: "Telegram: Briefing", desc: "Fertig formatiertes Briefing landet um 7 Uhr in Telegram. Kein Kalender öffnen nötig.", out: "Message sent · 200 OK", tools: ["Telegram Bot API"] }
            },
        ],
        edges: [
            { f: "dc0", t: "dc1" }, { f: "dc0", t: "dc2" }, { f: "dc0", t: "dc3" },
            { f: "dc1", t: "dm0" }, { f: "dc2", t: "dm0" }, { f: "dc3", t: "dm0" },
            { f: "dm0", t: "dg0" }, { f: "dg0", t: "ds0" },
        ],
        seq: ["dc0", "dc1", "dc2", "dc3", "dm0", "dg0", "ds0"],
        stats: [{ l: "Uhrzeit", v: "07:00" }, { l: "Kalender", v: "3×" }, { l: "Parallel", v: "ja" }, { l: "Laufzeit", v: "~4s" }],
    },

    weekly: {
        id: "weekly", label: "Wochen-Briefing", emoji: "📋", accent: "#00C896",
        tagline: "Jeden Montag 6:00 Uhr — die ganze Woche im Überblick",
        nodes: [
            {
                id: "wc0", x: 30, y: 210, w: 150, h: 58, logo: "cron", brand: "#00C896", cat: "TRIGGER",
                label: "Jeden Montag", sub: "06:00 Uhr",
                log: "⏰ Wochenplan-Trigger ausgelöst",
                detail: { title: "Schedule: Mo 6:00 Uhr", desc: "Jeden Montag um 6 Uhr — bevor der Tag beginnt, hast du schon den vollen Überblick.", out: "{ ts: 'monday 06:00' }", tools: ["n8n Schedule Trigger"] }
            },
            {
                id: "wc1", x: 240, y: 80, w: 150, h: 58, logo: "google", brand: "#0088cc", cat: "AKTION",
                label: "Kalender 1", sub: "Mo–So abrufen",
                log: "📆 8 Termine KW10 aus Kalender 1",
                detail: { title: "GCal: Ganze Woche", desc: "Alle Termine von Mo bis So aus Kalender 1 abgerufen.", out: "events[8] KW10", tools: ["Google Calendar API"] }
            },
            {
                id: "wc2", x: 240, y: 210, w: 150, h: 58, logo: "google", brand: "#0088cc", cat: "AKTION",
                label: "Kalender 2", sub: "Mo–So abrufen",
                log: "📆 5 Termine KW10 aus Kalender 2",
                detail: { title: "GCal: Arbeit KW", desc: "Wöchentliche Arbeitstermine parallel abgerufen.", out: "events[5] KW10", tools: ["Google Calendar API"] }
            },
            {
                id: "wc3", x: 240, y: 340, w: 150, h: 58, logo: "google", brand: "#0088cc", cat: "AKTION",
                label: "Kalender 3", sub: "Mo–So abrufen",
                log: "📆 2 Termine KW10 aus Kalender 3",
                detail: { title: "GCal: Shared KW", desc: "Geteilter Kalender für Wochenübersicht.", out: "events[2] KW10", tools: ["Google Calendar API"] }
            },
            {
                id: "wm0", x: 460, y: 210, w: 150, h: 58, logo: "merge", brand: "#7C6AF7", cat: "LOGIK",
                label: "Zusammenführen", sub: "Nach Tag gruppieren",
                log: "🔀 15 Termine → nach Wochentag gruppiert",
                detail: { title: "Merge + Gruppierung", desc: "Zusammengeführt, nach Wochentag gruppiert. Leere Tage → 'Frei'.", out: "{ mo:[3], di:[2], mi:[4], ... }", tools: ["n8n Merge Node", "Function Node"] }
            },
            {
                id: "wg0", x: 670, y: 210, w: 150, h: 58, logo: "openai", brand: "#7C6AF7", cat: "KI",
                label: "Wochenplan", sub: "GPT-4o",
                log: '✍️ Wochenplan generiert (580 Tokens)',
                detail: { title: "GPT-4o: Wochenplan", desc: "GPT erstellt strukturierten Plan mit Highlights, freien Slots und Einschätzung der Woche.", out: "Formatierter Wochenplan", tools: ["OpenAI GPT-4o"] }
            },
            {
                id: "ws0", x: 880, y: 210, w: 150, h: 58, logo: "telegram", brand: "#0088cc", cat: "AKTION",
                label: "Telegram senden", sub: "Wochenplan",
                log: "✈️ Wochenplan gesendet · 06:00:06",
                detail: { title: "Telegram: Wochenplan", desc: "Kompletter Plan landet Mo um 6 Uhr in Telegram — du weißt was kommt bevor der Tag beginnt.", out: "Message sent · 200 OK", tools: ["Telegram Bot API"] }
            },
        ],
        edges: [
            { f: "wc0", t: "wc1" }, { f: "wc0", t: "wc2" }, { f: "wc0", t: "wc3" },
            { f: "wc1", t: "wm0" }, { f: "wc2", t: "wm0" }, { f: "wc3", t: "wm0" },
            { f: "wm0", t: "wg0" }, { f: "wg0", t: "ws0" },
        ],
        seq: ["wc0", "wc1", "wc2", "wc3", "wm0", "wg0", "ws0"],
        stats: [{ l: "Uhrzeit", v: "Mo 06:00" }, { l: "Zeitraum", v: "Mo–So" }, { l: "Kalender", v: "3×" }, { l: "Tokens", v: "~580" }],
    },
};

const CAT_COLOR: Record<string, string> = { TRIGGER: "#F59E0B", ROUTER: "#F59E0B", KI: "#7C6AF7", AKTION: "#00C896", LOGIK: "#7C6AF7" };
const SW = 1100, SH = 460;

// ─── helpers ──────────────────────────────────────────────────────────────────
function ncx(n: any) { return n.x + n.w / 2; }
function ncy(n: any) { return n.y + n.h / 2; }

// ─── Arrow edge ───────────────────────────────────────────────────────────────
function Arrow({ from, to, animated, color, label }: any) {
    const fx = ncx(from), fy = ncy(from);
    const tx = ncx(to), ty = ncy(to);
    // exit right edge of from-node, enter left edge of to-node
    const ex = from.x + from.w, ey = fy;
    const ex2 = to.x, ey2 = ty;
    const mx = (ex + ex2) / 2;
    const d = `M${ex},${ey} C${mx},${ey} ${mx},${ey2} ${ex2},${ey2}`;
    const lx = mx, ly = (ey + ey2) / 2;

    return (
        <g>
            {/* ghost base */}
            <path d={d} fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth={1.5} />

            {/* animated glow line */}
            {animated && <>
                <path d={d} fill="none" stroke={color} strokeWidth={3} opacity={0.15}
                    style={{ filter: `blur(3px)` }} />
                <path d={d} fill="none" stroke={color} strokeWidth={2}
                    strokeDasharray="6 4" style={{ animation: "fd .7s linear infinite" }} opacity={0.9} />
                <circle r={5} fill={color} opacity={0.95}
                    style={{ filter: `drop-shadow(0 0 6px ${color})` }}>
                    <animateMotion dur="0.9s" repeatCount="indefinite" path={d} />
                </circle>
            </>}

            {/* arrowhead at destination */}
            <defs>
                <marker id={`arr-${from.id}-${to.id}`} markerWidth="6" markerHeight="6"
                    refX="3" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z"
                        fill={animated ? color : "rgba(255,255,255,0.12)"}
                        style={{ transition: "fill 0.3s" }} />
                </marker>
            </defs>
            <path d={d} fill="none" stroke={animated ? color : "rgba(255,255,255,0.12)"}
                strokeWidth={animated ? 1.5 : 1}
                markerEnd={`url(#arr-${from.id}-${to.id})`}
                style={{ transition: "stroke 0.3s" }} />

            {/* edge label */}
            {label && (
                <g>
                    <rect x={lx - 16} y={ly - 9} width={32} height={17} rx={4}
                        fill="#07100d" stroke={animated ? color : "rgba(255,255,255,0.07)"} strokeWidth={1} />
                    <text x={lx} y={ly + 1} textAnchor="middle" dominantBaseline="middle"
                        fill={animated ? color : "rgba(255,255,255,0.3)"} fontSize={11} fontFamily="monospace">
                        {label}
                    </text>
                </g>
            )}
        </g>
    );
}

// ─── Node ─────────────────────────────────────────────────────────────────────
function WNode({ node, active, past, running, onClick }: any) {
    const cc = CAT_COLOR[node.cat] || "#00C896";
    const Logo = (LOGOS as any)[node.logo];
    return (
        <g transform={`translate(${node.x},${node.y})`}
            onClick={() => onClick(node.id)} style={{ cursor: "pointer" }}>

            {/* outer glow ring when active */}
            {active && <>
                <rect x={-7} y={-7} width={node.w + 14} height={node.h + 14} rx={15}
                    fill={node.brand} opacity={0.07} style={{ filter: "blur(10px)" }} />
                <rect x={-2} y={-2} width={node.w + 4} height={node.h + 4} rx={11}
                    fill="none" stroke={node.brand} strokeWidth={1.2} opacity={0.5}
                    strokeDasharray="5 4" style={{ animation: "rd 3s linear infinite" }} />
            </>}

            {/* card */}
            <rect x={0} y={0} width={node.w} height={node.h} rx={10}
                fill={active ? "#111d15" : past ? "#0c1810" : "#090d0b"}
                stroke={active ? node.brand : past ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.045)"}
                strokeWidth={active ? 1.5 : 1}
                style={{ transition: "fill 0.25s, stroke 0.25s" }} />

            {/* top accent line */}
            <rect x={12} y={0} width={node.w - 24} height={2} rx={1}
                fill={cc} opacity={active ? 0.9 : past ? 0.3 : 0.15}
                style={{ transition: "opacity 0.25s" }} />

            {/* logo */}
            {Logo && (
                <foreignObject x={10} y={12} width={28} height={28}>
                    <div style={{
                        width: 28, height: 28, borderRadius: 7, overflow: "hidden",
                        opacity: active ? 1 : past ? 0.6 : 0.4,
                        transition: "opacity 0.25s",
                        filter: active ? "none" : "grayscale(30%)"
                    }}>
                        <Logo size={28} />
                    </div>
                </foreignObject>
            )}

            {/* text */}
            <text x={46} y={24}
                fill={active ? "#ffffff" : past ? "rgba(255,255,255,0.62)" : "rgba(255,255,255,0.38)"}
                fontSize={11} fontWeight={active ? "700" : "500"}
                fontFamily="'Space Grotesk',sans-serif"
                style={{ transition: "fill 0.2s" }}>
                {node.label}
            </text>
            <text x={46} y={40}
                fill={active ? node.brand : "rgba(255,255,255,0.22)"}
                fontSize={9} fontFamily="monospace"
                style={{ transition: "fill 0.2s" }}>
                {node.sub}
            </text>

            {/* cat chip top-right */}
            <rect x={node.w - 48} y={6} width={42} height={13} rx={3}
                fill={cc} opacity={active ? 0.18 : 0.06} />
            <text x={node.w - 27} y={14} textAnchor="middle" dominantBaseline="middle"
                fill={cc} fontSize={7} fontFamily="monospace" letterSpacing="0.06em"
                opacity={active ? 0.9 : 0.3}>
                {node.cat}
            </text>

            {/* running spinner arc */}
            {running && (
                <circle cx={node.w - 8} cy={node.h - 8} r={5}
                    stroke={node.brand} strokeWidth={1.5} fill="none"
                    strokeDasharray="10 5" style={{ animation: "rd 0.8s linear infinite" }} />
            )}

            {/* past checkmark */}
            {past && !active && !running && (
                <g>
                    <circle cx={node.w - 8} cy={node.h - 8} r={6} fill="#00C896" opacity={0.15} />
                    <text x={node.w - 8} y={node.h - 7} textAnchor="middle" dominantBaseline="middle"
                        fontSize={8} fill="#00C896" opacity={0.55}>✓</text>
                </g>
            )}
        </g>
    );
}

// ─── Execution Log ────────────────────────────────────────────────────────────
function ExecLog({ entries, accent }: any) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
    }, [entries]);
    return (
        <div ref={ref} className="no-scrollbar" style={{
            background: "rgba(0,0,0,0.45)", borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "8px 10px", height: 120, overflowY: "auto",
            fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5,
        }}>
            {entries.length === 0 && (
                <div style={{ color: "rgba(255,255,255,0.2)", paddingTop: 40, textAlign: "center", fontSize: 10 }}>
                    — Workflow bereit —
                </div>
            )}
            {entries.map((e: any, i: number) => (
                <div key={i} style={{
                    display: "flex", gap: 8, marginBottom: 4,
                    animation: "logIn 0.2s ease",
                    color: i === entries.length - 1 ? "#fff" : "rgba(255,255,255,0.4)",
                }}>
                    <span style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0, fontSize: 9.5 }}>
                        {e.ts}
                    </span>
                    <span style={{ color: i === entries.length - 1 ? accent : "rgba(255,255,255,0.4)" }}>
                        {e.msg}
                    </span>
                </div>
            ))}
        </div>
    );
}

// ─── Detail Slide Panel ───────────────────────────────────────────────────────
function DetailSlide({ node, onClose, accent }: any) {
    if (!node) return null;
    const cc = CAT_COLOR[node.cat] || accent;
    const Logo = (LOGOS as any)[node.logo];
    return (
        <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(180deg,rgba(8,15,11,0.97) 0%,rgba(6,12,9,0.99) 100%)",
            borderTop: `1px solid ${cc}40`,
            padding: "16px 22px 14px",
            animation: "slideUp 0.22s cubic-bezier(.16,1,.3,1)",
            zIndex: 10,
            backdropFilter: "blur(12px)",
        }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1 }}>
                    {/* logo */}
                    <div style={{
                        width: 36, height: 36, borderRadius: 9, overflow: "hidden", flexShrink: 0,
                        boxShadow: `0 0 0 1px ${cc}30`, background: "black"
                    }}>
                        {Logo && <div className="flex items-center justify-center w-full h-full text-[#07100d]"><Logo size={36} /></div>}
                    </div>

                    {/* title + cat */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                            <h3 style={{
                                color: "#fff", fontSize: 13, fontWeight: 700, margin: 0,
                                fontFamily: "'Space Grotesk',sans-serif"
                            }}>
                                {node.detail.title}
                            </h3>
                            <span style={{
                                background: cc + "20", border: `1px solid ${cc}30`, color: cc,
                                borderRadius: 4, padding: "1px 7px", fontSize: 8, fontFamily: "monospace",
                                letterSpacing: "0.08em"
                            }}>
                                {node.cat}
                            </span>
                        </div>
                        <p style={{
                            color: "rgba(255,255,255,0.45)", fontSize: 11, lineHeight: 1.7, margin: 0,
                            fontFamily: "'Space Grotesk',sans-serif", maxWidth: 600
                        }}>
                            {node.detail.desc}
                        </p>
                    </div>
                </div>

                {/* output + tools right side */}
                <div style={{
                    display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end",
                    marginLeft: 20, flexShrink: 0, minWidth: 200
                }} className="hidden md:flex">
                    <div style={{
                        background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 6, padding: "6px 12px", width: "100%"
                    }}>
                        <div style={{
                            color: "rgba(255,255,255,0.18)", fontSize: 7.5, fontFamily: "monospace",
                            letterSpacing: "0.08em", marginBottom: 3
                        }}>OUTPUT</div>
                        <div style={{ color: "#00C896", fontSize: 9.5, fontFamily: "monospace", lineHeight: 1.5 }}>
                            {node.detail.out}
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "flex-end" }}>
                        {node.detail.tools.map((t: string) => (
                            <span key={t} style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.38)", borderRadius: 4,
                                padding: "2px 8px", fontSize: 8.5, fontFamily: "monospace"
                            }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* close */}
                <button onClick={onClose} style={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.4)", borderRadius: 5, width: 26, height: 26,
                    cursor: "pointer", fontSize: 13, marginLeft: 14, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "monospace",
                }}>×</button>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export const AutomationFlow = () => {
    const [fid, setFid] = useState<"input" | "daily" | "weekly">("input");
    const [activeId, setActiveId] = useState<string | null>(null);
    const [pastIds, setPastIds] = useState<string[]>([]);
    const [playing, setPlaying] = useState(true);
    const [step, setStep] = useState(0);
    const [logEntries, setLog] = useState<any[]>([]);
    const [panelNode, setPanelNode] = useState<any>(null);
    const timerRef = useRef<any>();

    const flow = FLOWS[fid];
    const seq = flow.seq;

    const ts = () => {
        const d = new Date();
        return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
    };

    const reset = (newFid?: "input" | "daily" | "weekly") => {
        clearInterval(timerRef.current);
        const flowId = newFid || fid;
        const f = FLOWS[flowId];
        setActiveId(f.seq[0]);
        setPastIds([]);
        setStep(0);
        setLog([{ ts: ts(), msg: f.nodes.find(n => n.id === f.seq[0])?.log || "" }]);
        setPanelNode(null);
        setPlaying(true);
    };

    useEffect(() => { reset(fid); }, [fid]);

    useEffect(() => {
        if (!playing) { clearInterval(timerRef.current); return; }
        timerRef.current = setInterval(() => {
            setStep(s => {
                const n = (s + 1) % seq.length;
                const nid = seq[n];
                setActiveId(nid);
                setPastIds(seq.slice(0, n));
                const node = flow.nodes.find(x => x.id === nid);
                if (node) setLog(l => [...l.slice(-8), { ts: ts(), msg: node.log }]);
                return n;
            });
        }, 1300);
        return () => clearInterval(timerRef.current);
    }, [playing, seq, flow.nodes]);

    const handleNodeClick = (id: string) => {
        clearInterval(timerRef.current);
        setPlaying(false);
        const node = flow.nodes.find(n => n.id === id);
        setPanelNode((prev: any) => prev?.id === id ? null : node);
        setActiveId(id);
    };

    const activeNode = flow.nodes.find(n => n.id === activeId);

    return (
        <div style={{
            background: "#07100d", borderRadius: 16,
            border: "1px solid rgba(0,200,150,0.1)",
            fontFamily: "'Space Grotesk',system-ui,sans-serif",
            overflow: "hidden", maxWidth: 1200, margin: "0 auto",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.7),0 40px 120px rgba(0,0,0,0.8),0 0 80px rgba(0,200,150,0.03)",
        }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes fd{to{stroke-dashoffset:-20}}
        @keyframes rd{to{stroke-dashoffset:-36}}
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes logIn{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:translateX(0)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.25}}
        @keyframes tabPop{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

            {/* ── TITLEBAR ── */}
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 16px", borderBottom: "1px solid rgba(255,255,255,0.045)",
                background: "rgba(0,0,0,0.3)"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ display: "flex", gap: 5 }}>
                        {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                        ))}
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 10.5, fontFamily: "JetBrains Mono,monospace", marginLeft: 6 }}>
                        rheindorf.digital  ·  automation-engine.n8n
                    </span>
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    {playing
                        ? <>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00C896", animation: "blink 1.4s infinite" }} />
                            <span style={{ color: "#00C896", fontSize: 9.5, fontFamily: "monospace", letterSpacing: "0.08em" }}>RUNNING</span>
                            <button onClick={() => setPlaying(false)} className="hover:bg-white/10" style={{
                                marginLeft: 8, background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)",
                                borderRadius: 5, padding: "3px 10px", fontSize: 9.5, cursor: "pointer", fontFamily: "monospace"
                            }}>
                                ■ PAUSE
                            </button>
                        </>
                        : <button onClick={() => reset()} className="hover:bg-[#00C896]/20" style={{
                            background: "rgba(0,200,150,0.08)",
                            border: "1px solid rgba(0,200,150,0.22)", color: "#00C896",
                            borderRadius: 5, padding: "3px 11px", fontSize: 9.5, cursor: "pointer", fontFamily: "monospace"
                        }}>
                            ▶ PLAY
                        </button>
                    }
                </div>
            </div>

            {/* ── TABS ── */}
            <div className="flex overflow-x-auto no-scrollbar" style={{
                borderBottom: "1px solid rgba(255,255,255,0.045)",
                background: "rgba(0,0,0,0.15)"
            }}>
                {(Object.values(FLOWS) as any[]).map(f => {
                    const on = fid === f.id;
                    return (
                        <button key={f.id} onClick={() => setFid(f.id)} style={{
                            display: "flex", alignItems: "center", gap: 6,
                            background: on ? "rgba(255,255,255,0.025)" : "transparent",
                            border: "none",
                            borderBottom: on ? `2px solid ${f.accent}` : "2px solid transparent",
                            borderRight: "1px solid rgba(255,255,255,0.04)",
                            color: on ? "#fff" : "rgba(255,255,255,0.28)",
                            padding: "8px 20px", fontSize: 12, cursor: "pointer",
                            fontFamily: "'Space Grotesk',sans-serif", fontWeight: on ? 600 : 400,
                            transition: "all 0.14s", flexShrink: 0,
                        }}>
                            <span style={{ fontSize: 14 }}>{f.emoji}</span>
                            {f.label}
                            {on && playing && <div style={{
                                width: 5, height: 5, borderRadius: "50%",
                                background: f.accent, animation: "blink 1.4s infinite", marginLeft: 2
                            }} />}
                        </button>
                    );
                })}
                <div className="hidden md:flex" style={{
                    flex: 1, alignItems: "center", justifyContent: "flex-end",
                    paddingRight: 16, color: "rgba(255,255,255,0.13)", fontSize: 10, fontFamily: "monospace"
                }}>
                    {flow.tagline}
                </div>
            </div>

            {/* ── MAIN BODY ── */}
            <div className="flex flex-col lg:flex-row relative">

                {/* SVG Canvas */}
                <div className="flex-1 min-w-0 relative overflow-x-auto no-scrollbar">
                    <svg viewBox={`0 0 ${SW} ${SH}`} className="min-w-[800px] lg:min-w-[800px]" style={{ width: "100%", height: "auto", display: "block" }}>
                        <defs>
                            <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="0.85" fill="rgba(255,255,255,0.02)" />
                            </pattern>
                            <radialGradient id="rglow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor={flow.accent} stopOpacity="0.04" />
                                <stop offset="100%" stopColor={flow.accent} stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width={SW} height={SH} fill="url(#dotgrid)" />
                        <rect width={SW} height={SH} fill="url(#rglow)" />

                        {/* edges first (behind nodes) */}
                        {flow.edges.map((e, i) => {
                            const fn = flow.nodes.find(n => n.id === e.f);
                            const tn = flow.nodes.find(n => n.id === e.t);
                            if (!fn || !tn) return null;
                            const anim = playing
                                ? (activeId === e.f || activeId === e.t || pastIds.includes(e.f))
                                : (activeId === e.f || activeId === e.t);
                            return <Arrow key={i} from={fn} to={tn} animated={anim} color={flow.accent} label={e.label} />;
                        })}

                        {/* nodes */}
                        {flow.nodes.map(n => (
                            <WNode key={n.id} node={n}
                                active={activeId === n.id}
                                past={pastIds.includes(n.id)}
                                running={playing && activeId === n.id}
                                onClick={handleNodeClick} />
                        ))}

                        {/* step counter */}
                        {playing && <text x={SW - 10} y={SH - 8} textAnchor="end"
                            fill="rgba(255,255,255,0.08)" fontSize={10} fontFamily="monospace">
                            {step + 1} / {seq.length}
                        </text>}
                    </svg>

                    {/* Detail slide panel (absolute, inside canvas area) */}
                    <DetailSlide node={panelNode} onClose={() => setPanelNode(null)} accent={flow.accent} />
                </div>

                {/* RIGHT: Execution Log */}
                <div style={{
                    width: "100%", borderLeft: "0px solid rgba(255,255,255,0.05)",
                    padding: "14px 13px", background: "rgba(0,0,0,0.22)",
                    display: "flex", flexDirection: "column", gap: 10
                }} className="lg:w-[260px] lg:border-l">

                    {/* active node summary */}
                    {activeNode && (
                        <div style={{
                            background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 8, padding: "9px 11px", animation: "logIn 0.2s ease"
                        }}>
                            <div style={{
                                fontSize: 8.5, color: "rgba(255,255,255,0.2)", fontFamily: "monospace",
                                letterSpacing: "0.07em", marginBottom: 5
                            }}>AKTIVER NODE</div>
                            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                                <div style={{ fontSize: 16, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {activeNode.logo && (LOGOS as any)[activeNode.logo] ? React.createElement((LOGOS as any)[activeNode.logo], { size: 20 }) : <span>⚡</span>}
                                </div>
                                <div>
                                    <div style={{
                                        color: "#fff", fontSize: 11.5, fontWeight: 600,
                                        fontFamily: "'Space Grotesk',sans-serif"
                                    }}>
                                        {activeNode.label}
                                    </div>
                                    <div style={{ color: flow.accent, fontSize: 9, fontFamily: "monospace", marginTop: 1 }}>
                                        {activeNode.sub}
                                    </div>
                                </div>
                            </div>
                            {!playing && (
                                <div style={{
                                    marginTop: 8, fontSize: 9.5, color: "rgba(255,255,255,0.3)",
                                    fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.5
                                }}>
                                    {activeNode.detail.desc.slice(0, 80)}…
                                    <span style={{ color: flow.accent, cursor: "pointer", marginLeft: 4 }}
                                        onClick={() => setPanelNode(activeNode)}>
                                        mehr ↓
                                    </span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* exec log */}
                    <div>
                        <div style={{
                            fontSize: 8.5, color: "rgba(255,255,255,0.2)", fontFamily: "monospace",
                            letterSpacing: "0.07em", marginBottom: 6
                        }}>EXECUTION LOG</div>
                        <ExecLog entries={logEntries} accent={flow.accent} />
                    </div>

                    {/* stats */}
                    <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                        {flow.stats.map(s => (
                            <div key={s.l} style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(255,255,255,0.05)", borderRadius: 6, padding: "6px 8px"
                            }}>
                                <div style={{
                                    color: "rgba(255,255,255,0.2)", fontSize: 8, fontFamily: "monospace",
                                    letterSpacing: "0.05em"
                                }}>{s.l.toUpperCase()}</div>
                                <div style={{ color: flow.accent, fontSize: 12, fontWeight: 600, marginTop: 2 }}>
                                    {s.v}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FOOTER ── */}
            <div className="flex flex-col md:flex-row items-center" style={{
                borderTop: "1px solid rgba(255,255,255,0.04)",
                padding: "7px 18px",
                background: "rgba(0,0,0,0.2)"
            }}>
                <div className="flex gap-4 md:gap-14 items-center flex-1 flex-wrap justify-center md:justify-start py-2 md:py-0">
                    {[["TRIGGER", "#F59E0B"], ["KI", "#7C6AF7"], ["AKTION", "#00C896"], ["LOGIK", "#7C6AF7"], ["ROUTER", "#F59E0B"]].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: v }} />
                            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 8.5, fontFamily: "monospace" }}>{k}</span>
                        </div>
                    ))}
                </div>
                <span className="hidden md:inline-block" style={{ color: "rgba(255,255,255,0.1)", fontSize: 9.5, fontFamily: "monospace" }}>
                    {playing ? "Node anklicken pausiert + zeigt Details" : "▶ PLAY · oder Node anklicken für Details ↓"}
                </span>
            </div>
        </div>
    );
}
