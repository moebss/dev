import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// ─── FLOW DATA ────────────────────────────────────────────────────────────────

const FLOWS = {
    input: {
        id: "input",
        label: "Nachricht verarbeiten",
        emoji: "📨",
        accentColor: "#10b981", // Emerald-500 matching the site
        description: "Sprache oder Text → Kalender-Eintrag in 3 Sekunden",
        nodes: [
            {
                id: "tg_trigger", x: 30, y: 185,
                icon: "✈️", brand: "#0088cc", category: "TRIGGER",
                label: "Telegram Bot", sublabel: "Eingehende Nachricht",
                detail: {
                    title: "Telegram Trigger",
                    desc: "Du schickst dem Bot eine Nachricht — Sprachnachricht oder Text. n8n empfängt sie in Echtzeit via Webhook und startet den Workflow sofort.",
                    tools: ["Telegram Bot API", "n8n Webhook"],
                    output: '{ type: "voice" | "text", content: "..." }',
                },
            },
            {
                id: "if_node", x: 240, y: 185,
                icon: "⚡", brand: "#F59E0B", category: "ROUTER",
                label: "Typ erkennen", sublabel: "Audio oder Text?",
                detail: {
                    title: "If-Node: Nachrichtentyp",
                    desc: "Prüft ob es eine Sprachnachricht (voice/audio) oder Text ist. Zwei Pfade — beide landen am Ende beim selben GPT-Knoten.",
                    tools: ["n8n If-Node"],
                    output: "→ Audio-Pfad  /  → Text-Pfad",
                },
            },
            {
                id: "get_file", x: 450, y: 80,
                icon: "📁", brand: "#0088cc", category: "AKTION",
                label: "Audio laden", sublabel: "Telegram get file",
                detail: {
                    title: "Get File",
                    desc: "Das OGG-Audio der Sprachnachricht wird über die Telegram File API heruntergeladen und als Binary für Whisper vorbereitet.",
                    tools: ["Telegram File API"],
                    output: "audio/ogg → base64 binary",
                },
            },
            {
                id: "transcribe", x: 660, y: 80,
                icon: "🎙️", brand: "#7C6AF7", category: "KI",
                label: "Transkription", sublabel: "OpenAI Whisper",
                detail: {
                    title: "Whisper: Sprache → Text",
                    desc: "OpenAI Whisper transkribiert die Sprachnachricht auf Deutsch. Funktioniert zuverlässig auch bei schnellem Sprechen, Dialekt oder Hintergrundgeräuschen.",
                    tools: ["OpenAI Whisper API"],
                    output: '"Morgen um 14 Uhr Zahnarzt"',
                },
            },
            {
                id: "parse_ai", x: 450, y: 300,
                icon: "🤖", brand: "#7C6AF7", category: "KI",
                label: "Termin extrahieren", sublabel: "GPT-4o",
                detail: {
                    title: "GPT-4o: Termin parsen",
                    desc: 'Versteht natürliche Sprache: "Übermorgen um drei Kaffee mit Lisa im Café Central" → Datum, Uhrzeit, Titel, Ort werden strukturiert extrahiert.',
                    tools: ["OpenAI GPT-4o"],
                    output: '{ title, date, time, location }',
                },
            },
            {
                id: "cal_create", x: 660, y: 300,
                icon: "📅", brand: "#00C896", category: "AKTION",
                label: "Termin anlegen", sublabel: "Google Calendar",
                detail: {
                    title: "Google Calendar: Event erstellen",
                    desc: "Der strukturierte Termin wird automatisch im richtigen Kalender angelegt — mit Titel, Datum, Uhrzeit und Ort. Kein manuelles Tippen nötig.",
                    tools: ["Google Calendar API"],
                    output: "Event ID + Kalender-URL",
                },
            },
            {
                id: "confirm", x: 870, y: 185,
                icon: "✅", brand: "#00C896", category: "AKTION",
                label: "Bestätigung", sublabel: "Telegram reply",
                detail: {
                    title: "Bestätigung senden",
                    desc: 'Sofortige Antwort im Telegram-Chat: "✅ Kaffee mit Lisa — Mo 10.03. · 15:00 Uhr · Café Central"',
                    tools: ["Telegram Bot API"],
                    output: "Message gesendet ✓",
                },
            },
        ],
        edges: [
            { from: "tg_trigger", to: "if_node", label: "" },
            { from: "if_node", to: "get_file", label: "🎤 Audio" },
            { from: "if_node", to: "parse_ai", label: "💬 Text" },
            { from: "get_file", to: "transcribe", label: "" },
            { from: "transcribe", to: "parse_ai", label: "" },
            { from: "parse_ai", to: "cal_create", label: "" },
            { from: "cal_create", to: "confirm", label: "" },
        ],
        autoPlay: ["tg_trigger", "if_node", "get_file", "transcribe", "parse_ai", "cal_create", "confirm"],
        stats: [
            { label: "Latenz", value: "~3 Sek." },
            { label: "Sprache erkannt", value: "Deutsch" },
            { label: "Genauigkeit", value: "> 95%" },
        ],
    },

    daily: {
        id: "daily",
        label: "Tages-Briefing",
        emoji: "🌅",
        accentColor: "#F59E0B",
        description: "Jeden Morgen um 7:00 Uhr — dein Tag auf einen Blick",
        nodes: [
            {
                id: "d_cron", x: 30, y: 200,
                icon: "⏰", brand: "#F59E0B", category: "TRIGGER",
                label: "Jeden Morgen", sublabel: "07:00 Uhr täglich",
                detail: {
                    title: "Cron Trigger: 7:00 Uhr",
                    desc: "Startet jeden Morgen pünktlich um 7:00 Uhr — vollautomatisch, ohne dass du etwas tun musst.",
                    tools: ["n8n Schedule Trigger"],
                    output: "timestamp: today 07:00",
                },
            },
            {
                id: "d_cal1", x: 230, y: 100,
                icon: "📆", brand: "#0088cc", category: "AKTION",
                label: "Privat-Kalender", sublabel: "Heute abrufen",
                detail: {
                    title: "Google Calendar: Privat",
                    desc: "Alle privaten Termine des heutigen Tages werden abgerufen — parallel zu den anderen Kalendern für maximale Geschwindigkeit.",
                    tools: ["Google Calendar API"],
                    output: "events[] für heute",
                },
            },
            {
                id: "d_cal2", x: 230, y: 210,
                icon: "📆", brand: "#0088cc", category: "AKTION",
                label: "Arbeits-Kalender", sublabel: "Heute abrufen",
                detail: {
                    title: "Google Calendar: Arbeit",
                    desc: "Geschäftliche Termine, Meetings und Calls werden gleichzeitig abgerufen.",
                    tools: ["Google Calendar API"],
                    output: "events[] für heute",
                },
            },
            {
                id: "d_cal3", x: 230, y: 320,
                icon: "📆", brand: "#0088cc", category: "AKTION",
                label: "Shared Kalender", sublabel: "Heute abrufen",
                detail: {
                    title: "Google Calendar: Shared",
                    desc: "Geteilter Kalender mit dem Team oder Familie — auch diese Termine fließen ins Briefing ein.",
                    tools: ["Google Calendar API"],
                    output: "events[] für heute",
                },
            },
            {
                id: "d_merge", x: 450, y: 210,
                icon: "🔀", brand: "#7C6AF7", category: "LOGIK",
                label: "Zusammenführen", sublabel: "Merge + sortieren",
                detail: {
                    title: "Merge & Sortierung",
                    desc: "Alle drei Kalender-Responses werden gemergt, nach Uhrzeit sortiert und Duplikate entfernt.",
                    tools: ["n8n Merge Node"],
                    output: "events[] sortiert nach Zeit",
                },
            },
            {
                id: "d_gpt", x: 650, y: 210,
                icon: "✍️", brand: "#7C6AF7", category: "KI",
                label: "Briefing verfassen", sublabel: "GPT-4o",
                detail: {
                    title: "GPT-4o: Briefing schreiben",
                    desc: 'GPT formuliert eine natürliche Zusammenfassung: "Guten Morgen! Du hast heute 3 Termine: 9:00 Team-Meeting, 12:00 Mittagessen mit Jan, 15:30 Kundencall mit Firma XY."',
                    tools: ["OpenAI GPT-4o"],
                    output: "Formatierter Briefing-Text",
                },
            },
            {
                id: "d_send", x: 860, y: 210,
                icon: "✈️", brand: "#0088cc", category: "AKTION",
                label: "Telegram senden", sublabel: "Tages-Briefing",
                detail: {
                    title: "Telegram: Briefing verschicken",
                    desc: "Das fertige Briefing landet jeden Morgen um 7 Uhr in deinem Telegram. Kein Kalender öffnen, kein Scrollen — alles auf einen Blick.",
                    tools: ["Telegram Bot API"],
                    output: "Message gesendet ✓",
                },
            },
        ],
        edges: [
            { from: "d_cron", to: "d_cal1" },
            { from: "d_cron", to: "d_cal2" },
            { from: "d_cron", to: "d_cal3" },
            { from: "d_cal1", to: "d_merge" },
            { from: "d_cal2", to: "d_merge" },
            { from: "d_cal3", to: "d_merge" },
            { from: "d_merge", to: "d_gpt" },
            { from: "d_gpt", to: "d_send" },
        ],
        autoPlay: ["d_cron", "d_cal1", "d_cal2", "d_cal3", "d_merge", "d_gpt", "d_send"],
        stats: [
            { label: "Uhrzeit", value: "07:00 täglich" },
            { label: "Kalender", value: "3 parallel" },
            { label: "Laufzeit", value: "~4 Sek." },
        ],
    },

    weekly: {
        id: "weekly",
        label: "Wochen-Briefing",
        emoji: "📋",
        accentColor: "#00C896",
        description: "Jeden Montag 6:00 Uhr — die ganze Woche im Überblick",
        nodes: [
            {
                id: "w_cron", x: 30, y: 200,
                icon: "📅", brand: "#00C896", category: "TRIGGER",
                label: "Jeden Montag", sublabel: "06:00 Uhr",
                detail: {
                    title: "Cron Trigger: Mo 6:00 Uhr",
                    desc: "Jeden Montag um 6 Uhr startet die Wochenübersicht — bevor der Arbeitstag beginnt, bist du bereits vorbereitet.",
                    tools: ["n8n Schedule Trigger"],
                    output: "timestamp: monday 06:00",
                },
            },
            {
                id: "w_cal1", x: 230, y: 100,
                icon: "📆", brand: "#0088cc", category: "AKTION",
                label: "Kalender 1", sublabel: "Mo–So abrufen",
                detail: {
                    title: "Kalender: Mo bis So",
                    desc: "Alle Termine der gesamten Kalenderwoche werden aus Kalender 1 abgerufen.",
                    tools: ["Google Calendar API"],
                    output: "events[] diese Woche",
                },
            },
            {
                id: "w_cal2", x: 230, y: 210,
                icon: "📆", brand: "#0088cc", category: "AKTION",
                label: "Kalender 2", sublabel: "Mo–So abrufen",
                detail: {
                    title: "Kalender 2: Arbeit",
                    desc: "Zweiter Kalender — z.B. geschäftliche Termine oder ein Team-Kalender — wird parallel abgerufen.",
                    tools: ["Google Calendar API"],
                    output: "events[] diese Woche",
                },
            },
            {
                id: "w_cal3", x: 230, y: 320,
                icon: "📆", brand: "#0088cc", category: "AKTION",
                label: "Kalender 3", sublabel: "Mo–So abrufen",
                detail: {
                    title: "Kalender 3: Shared",
                    desc: "Geteilter oder dritter Kalender für die Wochenübersicht.",
                    tools: ["Google Calendar API"],
                    output: "events[] diese Woche",
                },
            },
            {
                id: "w_merge", x: 450, y: 210,
                icon: "🔀", brand: "#7C6AF7", category: "LOGIK",
                label: "Zusammenführen", sublabel: "Nach Tag gruppieren",
                detail: {
                    title: "Merge + Gruppierung",
                    desc: "Alle Termine werden zusammengeführt und nach Wochentag gruppiert. Leere Tage werden als 'Frei' markiert.",
                    tools: ["n8n Merge Node", "Function Node"],
                    output: "{ mo:[], di:[], mi:[], ... }",
                },
            },
            {
                id: "w_gpt", x: 650, y: 210,
                icon: "✍️", brand: "#7C6AF7", category: "KI",
                label: "Wochenplan", sublabel: "GPT-4o",
                detail: {
                    title: "GPT-4o: Wochenplan schreiben",
                    desc: "GPT erstellt eine strukturierte Wochenübersicht mit Highlight der wichtigsten Termine, Puffer-Zeiten und einer kurzen Einschätzung der Woche.",
                    tools: ["OpenAI GPT-4o"],
                    output: "Formatierter Wochenplan",
                },
            },
            {
                id: "w_send", x: 860, y: 210,
                icon: "✈️", brand: "#0088cc", category: "AKTION",
                label: "Telegram senden", sublabel: "Wochenplan",
                detail: {
                    title: "Telegram: Wochenplan verschicken",
                    desc: "Der komplette Wochenplan landet jeden Montag um 6 Uhr in Telegram. Du weißt was kommt — bevor der Tag überhaupt beginnt.",
                    tools: ["Telegram Bot API"],
                    output: "Message gesendet ✓",
                },
            },
        ],
        edges: [
            { from: "w_cron", to: "w_cal1" },
            { from: "w_cron", to: "w_cal2" },
            { from: "w_cron", to: "w_cal3" },
            { from: "w_cal1", to: "w_merge" },
            { from: "w_cal2", to: "w_merge" },
            { from: "w_cal3", to: "w_merge" },
            { from: "w_merge", to: "w_gpt" },
            { from: "w_gpt", to: "w_send" },
        ],
        autoPlay: ["w_cron", "w_cal1", "w_cal2", "w_cal3", "w_merge", "w_gpt", "w_send"],
        stats: [
            { label: "Uhrzeit", value: "Mo, 06:00" },
            { label: "Zeitraum", value: "Mo–So" },
            { label: "Kalender", value: "3 parallel" },
        ],
    },
};

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const NW = 162, NH = 68;
const CATEGORY_COLORS = {
    TRIGGER: "#F59E0B", ROUTER: "#F59E0B", KI: "#7C6AF7",
    AKTION: "#00C896", LOGIK: "#7C6AF7",
};

function ncx(n: any) { return n.x + NW / 2; }
function ncy(n: any) { return n.y + NH / 2; }

// ─── EDGE ─────────────────────────────────────────────────────────────────────
function Edge({ from, to, animated, color, label }: any) {
    const fx = ncx(from), fy = ncy(from);
    const tx = ncx(to), ty = ncy(to);
    const mx = (fx + tx) / 2;
    const d = `M${fx},${fy} C${mx},${fy} ${mx},${ty} ${tx},${ty}`;
    const midX = mx, midY = (fy + ty) / 2;

    return (
        <g>
            {/* Base line */}
            <path d={d} fill="none"
                stroke={animated ? color : "rgba(255,255,255,0.07)"}
                strokeWidth={animated ? 2 : 1.5}
                opacity={animated ? 0.8 : 1}
            />
            {/* Animated dashes */}
            {animated && (
                <path d={d} fill="none" stroke={color}
                    strokeWidth={2.5} strokeDasharray="6 5"
                    style={{ animation: "flowDash 0.8s linear infinite" }}
                    opacity={0.9}
                />
            )}
            {/* Moving dot */}
            {animated && (
                <circle r={5} fill={color} opacity={0.95}
                    style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
                    <animateMotion dur="1s" repeatCount="indefinite" path={d} />
                </circle>
            )}
            {/* Edge label */}
            {label && (
                <g>
                    <rect x={midX - 26} y={midY - 10} width={52} height={18} rx={4}
                        fill="#0a150f" stroke={animated ? color : "rgba(255,255,255,0.08)"}
                        strokeWidth={1} opacity={0.95} />
                    <text x={midX} y={midY + 1} textAnchor="middle" dominantBaseline="middle"
                        fill={animated ? color : "rgba(255,255,255,0.3)"}
                        fontSize={9} fontFamily="monospace">
                        {label}
                    </text>
                </g>
            )}
        </g>
    );
}

// ─── NODE ─────────────────────────────────────────────────────────────────────
function WorkflowNode({ node, isActive, isPast, onClick }: any) {
    const catColor = (CATEGORY_COLORS as any)[node.category] || "#00C896";
    return (
        <g transform={`translate(${node.x},${node.y})`}
            onClick={() => onClick(node.id)}
            style={{ cursor: "pointer" }}>

            {/* Active glow */}
            {isActive && (
                <>
                    <rect x={-8} y={-8} width={NW + 16} height={NH + 16} rx={17}
                        fill={node.brand} opacity={0.08}
                        style={{ filter: "blur(10px)" }} />
                    <rect x={-3} y={-3} width={NW + 6} height={NH + 6} rx={14}
                        fill="none" stroke={node.brand} strokeWidth={1}
                        opacity={0.3} strokeDasharray="4 3"
                        style={{ animation: "rotDash 4s linear infinite" }} />
                </>
            )}

            {/* Card body */}
            <rect x={0} y={0} width={NW} height={NH} rx={11}
                fill={isActive ? "#0f1f18" : isPast ? "#0b1812" : "#09120e"}
                stroke={isActive ? node.brand : isPast ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)"}
                strokeWidth={isActive ? 1.5 : 1}
                style={{ transition: "all 0.25s ease" }}
            />

            {/* Category stripe */}
            <rect x={0} y={0} width={4} height={NH} rx={2}
                fill={catColor} opacity={isActive ? 0.8 : 0.25} />

            {/* Icon bg */}
            <rect x={12} y={12} width={42} height={42} rx={9}
                fill={node.brand} opacity={isActive ? 0.18 : isPast ? 0.08 : 0.06} />
            <text x={33} y={33} textAnchor="middle" dominantBaseline="middle" fontSize={18}>
                {node.icon}
            </text>

            {/* Labels */}
            <text x={62} y={27}
                fill={isActive ? "#fff" : isPast ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.5)"}
                fontSize={11.5} fontWeight={isActive ? "700" : "500"}
                fontFamily="'Space Grotesk', sans-serif"
                style={{ transition: "all 0.2s" }}>
                {node.label}
            </text>
            <text x={62} y={44}
                fill={isActive ? node.brand : "rgba(255,255,255,0.28)"}
                fontSize={9.5} fontFamily="'JetBrains Mono', 'Fira Code', monospace"
                style={{ transition: "all 0.2s" }}>
                {node.sublabel}
            </text>

            {/* Category badge */}
            <text x={NW - 8} y={12}
                textAnchor="end"
                fill={catColor} opacity={isActive ? 0.7 : 0.2}
                fontSize={7.5} fontFamily="monospace" letterSpacing="0.05em">
                {node.category}
            </text>

            {/* Done checkmark */}
            {isPast && !isActive && (
                <circle cx={NW - 9} cy={NH - 9} r={7} fill="#00C896" opacity={0.2} />
            )}
            {isPast && !isActive && (
                <text x={NW - 9} y={NH - 8} textAnchor="middle" dominantBaseline="middle"
                    fontSize={9} fill="#00C896" opacity={0.6}>✓</text>
            )}
        </g>
    );
}

// ─── DETAIL PANEL ─────────────────────────────────────────────────────────────
function DetailPanel({ node, flowColor }: any) {
    if (!node) return (
        <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", height: "100%", gap: 12, opacity: 0.35,
        }}>
            <div style={{ fontSize: 32 }}>←</div>
            <p style={{
                color: "rgba(255,255,255,0.4)", fontSize: 11.5, textAlign: "center",
                lineHeight: 1.6, margin: 0, fontFamily: "'Space Grotesk', sans-serif",
            }}>
                Node anklicken<br />für Details
            </p>
        </div>
    );

    const catColor = (CATEGORY_COLORS as any)[node.category] || flowColor;

    return (
        <div key={node.id} style={{ animation: "panelIn 0.22s ease", height: "100%" }}>
            {/* Category badge */}
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                background: catColor + "18", border: `1px solid ${catColor}30`,
                borderRadius: 6, padding: "3px 10px", marginBottom: 16,
            }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: catColor }} />
                <span style={{ color: catColor, fontSize: 9.5, fontFamily: "monospace", letterSpacing: "0.1em" }}>
                    {node.category}
                </span>
            </div>

            {/* Icon + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: node.brand + "20", border: `1px solid ${node.brand}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                }}>{node.icon}</div>
                <h3 style={{
                    color: "#fff", fontSize: 13, fontWeight: 700,
                    margin: 0, lineHeight: 1.3, fontFamily: "'Space Grotesk', sans-serif",
                }}>{node.detail.title}</h3>
            </div>

            {/* Description */}
            <p style={{
                color: "rgba(255,255,255,0.52)", fontSize: 11.5,
                lineHeight: 1.75, margin: "0 0 16px",
                fontFamily: "'Space Grotesk', sans-serif",
            }}>{node.detail.desc}</p>

            {/* Output preview */}
            <div style={{
                background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 7, padding: "8px 12px", marginBottom: 14,
            }}>
                <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 8.5, fontFamily: "monospace", marginBottom: 4, letterSpacing: "0.08em" }}>
                    OUTPUT
                </div>
                <div style={{ color: "#00C896", fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.5 }}>
                    {node.detail.output}
                </div>
            </div>

            {/* Tools */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {node.detail.tools.map((t: string) => (
                    <span key={t} style={{
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.4)", borderRadius: 5,
                        padding: "3px 8px", fontSize: 9, fontFamily: "monospace",
                    }}>{t}</span>
                ))}
            </div>
        </div>
    );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export const AutomationFlow = () => {
    const [flowId, setFlowId] = useState<"input" | "daily" | "weekly">("input");
    const [activeId, setActiveId] = useState<string | null>(null);
    const [pastIds, setPastIds] = useState<string[]>([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [stepIdx, setStepIdx] = useState(0);
    const intervalRef = useRef<any>(null);

    const flow = FLOWS[flowId];
    const sequence = flow.autoPlay;

    // Reset on flow change
    useEffect(() => {
        setActiveId(null);
        setPastIds([]);
        setStepIdx(0);
        setIsPlaying(true);
    }, [flowId]);

    // Auto-play ticker
    useEffect(() => {
        if (!isPlaying) return;
        intervalRef.current = setInterval(() => {
            setStepIdx(prev => {
                const next = (prev + 1) % sequence.length;
                setActiveId(sequence[next]);
                setPastIds(sequence.slice(0, next));
                return next;
            });
        }, 1400);
        return () => clearInterval(intervalRef.current);
    }, [isPlaying, sequence]);

    // Init first step
    useEffect(() => {
        if (isPlaying) {
            setActiveId(sequence[0]);
            setPastIds([]);
        }
    }, [isPlaying, flowId, sequence]);

    const handleNodeClick = (id: string) => {
        setIsPlaying(false);
        clearInterval(intervalRef.current);
        setActiveId(prev => prev === id ? null : id);
    };

    const handlePlay = () => {
        setStepIdx(0);
        setPastIds([]);
        setActiveId(sequence[0]);
        setIsPlaying(true);
    };

    const activeNode = flow.nodes.find(n => n.id === activeId);
    const SVG_W = 1060, SVG_H = 440;

    return (
        <div style={{
            background: "#080f0b",
            borderRadius: 20,
            border: "1px solid rgba(0,200,150,0.12)",
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            overflow: "hidden",
            maxWidth: 1060,
            margin: "0 auto",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 40px 120px rgba(0,0,0,0.7), 0 0 80px rgba(0,200,150,0.04)",
        }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes flowDash { to { stroke-dashoffset: -22; } }
        @keyframes rotDash { to { stroke-dashoffset: -40; } }
        @keyframes panelIn { from { opacity:0; transform:translateX(8px); } to { opacity:1; transform:translateX(0); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.85)} }
        @keyframes tabIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

            {/* ── TITLEBAR ── */}
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "11px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.015)",
            }}>
                <div className="flex items-center gap-3">
                    <div style={{ display: "flex", gap: 6 }}>
                        {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.9 }} />
                        ))}
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, fontFamily: "monospace" }}>
                        rheindorf.digital — automation-engine.n8n
                    </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {isPlaying ? (
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <div style={{
                                width: 7, height: 7, borderRadius: "50%", background: "#00C896",
                                animation: "pulse 1.4s ease-in-out infinite",
                            }} />
                            <span style={{ color: "#00C896", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.08em" }}>RUNNING</span>
                        </div>
                    ) : (
                        <button onClick={handlePlay} style={{
                            background: "rgba(0,200,150,0.08)", border: "1px solid rgba(0,200,150,0.2)",
                            color: "#00C896", borderRadius: 6, padding: "4px 13px",
                            fontSize: 10, cursor: "pointer", fontFamily: "monospace",
                            letterSpacing: "0.05em", transition: "all 0.15s",
                        }}>▶ PLAY</button>
                    )}
                    <button onClick={() => setIsPlaying(false)} className="hover:bg-white/5 transition-colors" style={{
                        background: "transparent", border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.3)", borderRadius: 6, padding: "4px 10px",
                        fontSize: 10, cursor: "pointer", fontFamily: "monospace",
                    }}>■ PAUSE</button>
                </div>
            </div>

            {/* ── FLOW TABS ── */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-white/5 bg-black/20">
                {(Object.values(FLOWS) as any).map((f: any) => {
                    const active = flowId === f.id;
                    return (
                        <button key={f.id}
                            onClick={() => setFlowId(f.id)}
                            style={{
                                display: "flex", alignItems: "center", gap: 7,
                                background: active ? "rgba(255,255,255,0.03)" : "transparent",
                                border: "none",
                                borderBottom: active ? `2px solid ${f.accentColor}` : "2px solid transparent",
                                borderRight: "1px solid rgba(255,255,255,0.04)",
                                color: active ? "#fff" : "rgba(255,255,255,0.35)",
                                padding: "11px 22px",
                                fontSize: 12.5, cursor: "pointer",
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: active ? 600 : 400,
                                transition: "all 0.15s",
                                flexShrink: 0,
                            }}>
                            <span style={{ fontSize: 14 }}>{f.emoji}</span>
                            {f.label}
                            {active && (
                                <div style={{
                                    width: 6, height: 6, borderRadius: "50%",
                                    background: f.accentColor, opacity: 0.8, marginLeft: 2,
                                    animation: isPlaying ? "pulse 1.4s infinite" : "none",
                                }} />
                            )}
                        </button>
                    );
                })}
                {/* Description */}
                <div style={{
                    marginLeft: "auto", display: "flex", alignItems: "center",
                    paddingRight: 20, color: "rgba(255,255,255,0.2)",
                    fontSize: 11, fontFamily: "monospace",
                }} className="hidden md:flex">
                    {flow.description}
                </div>
            </div>

            {/* ── CANVAS + PANEL ── */}
            <div className="flex flex-col lg:flex-row">

                {/* SVG Canvas */}
                <div className="flex-1 min-w-0 relative overflow-x-auto no-scrollbar">
                    <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                        className="min-w-[800px] lg:min-w-[1060px]"
                        style={{ width: "100%", height: "auto", display: "block" }}>
                        <defs>
                            <pattern id="grid2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="0.9" fill="rgba(255,255,255,0.025)" />
                            </pattern>
                            {/* Radial glow for active area */}
                            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor={flow.accentColor} stopOpacity="0.04" />
                                <stop offset="100%" stopColor={flow.accentColor} stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width={SVG_W} height={SVG_H} fill="url(#grid2)" />
                        <rect width={SVG_W} height={SVG_H} fill="url(#centerGlow)" />

                        {/* Edges */}
                        {flow.edges.map((e, i) => {
                            const fromNode = flow.nodes.find(n => n.id === e.from);
                            const toNode = flow.nodes.find(n => n.id === e.to);
                            const isAnim = isPlaying
                                ? (activeId === e.from || activeId === e.to || pastIds.includes(e.from))
                                : (activeId === e.from || activeId === e.to);
                            return (
                                <Edge key={i} from={fromNode} to={toNode}
                                    animated={isAnim} color={flow.accentColor} label={e.label} />
                            );
                        })}

                        {/* Nodes */}
                        {flow.nodes.map(node => (
                            <WorkflowNode key={node.id} node={node}
                                isActive={activeId === node.id}
                                isPast={pastIds.includes(node.id)}
                                onClick={handleNodeClick} />
                        ))}

                        {/* Step counter */}
                        {isPlaying && (
                            <text x={SVG_W - 14} y={SVG_H - 10} textAnchor="end"
                                fill="rgba(255,255,255,0.2)" fontSize={10} fontFamily="monospace">
                                STEP {stepIdx + 1} / {sequence.length}
                            </text>
                        )}
                    </svg>
                </div>

                {/* Detail Panel */}
                <div style={{
                    width: "100%", borderLeft: "0px",
                    padding: "22px 18px", background: "rgba(0,0,0,0.22)",
                }} className="lg:w-[248px] lg:border-l lg:border-white/5">
                    <DetailPanel node={activeNode} flowColor={flow.accentColor} />
                </div>
            </div>

            {/* ── FOOTER STATS ── */}
            <div className="border-t border-white/5 p-4 py-3 flex flex-col md:flex-row items-center gap-4 bg-black/20">
                {/* Flow stats */}
                <div className="flex gap-6 md:gap-12 w-full md:w-auto overflow-x-auto no-scrollbar">
                    {flow.stats.map(s => (
                        <div key={s.label} className="shrink-0">
                            <div style={{ color: "rgba(255,255,255,0.22)", fontSize: 9, fontFamily: "monospace", letterSpacing: "0.06em" }}>
                                {s.label.toUpperCase()}
                            </div>
                            <div style={{ color: flow.accentColor, fontSize: 13, fontWeight: 600, marginTop: 2 }}>
                                {s.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-7 bg-white/5 mx-2" />

                {/* Node legend */}
                <div className="flex flex-wrap gap-4 items-center">
                    {Object.entries(CATEGORY_COLORS).filter(([k]) => ["TRIGGER", "KI", "AKTION", "LOGIK"].includes(k)).map(([k, v]) => (
                        <div key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: v }} />
                            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "monospace" }}>{k}</span>
                        </div>
                    ))}
                </div>

                {/* Hint */}
                <div style={{
                    marginLeft: "auto", color: "rgba(255,255,255,0.15)",
                    fontSize: 10, fontFamily: "monospace",
                }} className="hidden lg:block">
                    {isPlaying ? "← Klick pausiert & zeigt Details" : "Node anklicken · PLAY für Animation"}
                </div>
            </div>
        </div>
    );
}
