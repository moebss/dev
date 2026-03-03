import { motion, AnimatePresence } from "motion/react";
import { Code2, Globe, Cpu, ArrowRight, Github, Linkedin, Mail, Terminal, Layers, Zap, Menu, X, Send, User, AtSign, MessageSquare, Quote, Calendar, Clock } from "lucide-react";
import React, { useState, useEffect } from "react";
import { BlogList, BlogPost, blogPosts } from "./Blog";
import { Impressum } from "./Impressum";
import { Datenschutz } from "./Datenschutz";
import { ProjectsPage, workflows } from "./ProjectsPage";
import { WebsitesPage } from "./WebsitesPage";

const Navbar = ({ onNavigate }: { onNavigate: (hash: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (hash: string) => {
    setMobileOpen(false);
    onNavigate(hash);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav("#/")}>
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-black" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-xl">RHEINDORF<span className="text-emerald-500">.</span>DIGITAL</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-emerald-400 transition-colors" onClick={() => handleNav("#/")}>Leistungen</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors" onClick={() => handleNav("#/")}>Portfolio</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors" onClick={() => handleNav("#/")}>Über mich</a>
          <a href="#/blog" className="hover:text-emerald-400 transition-colors" onClick={(e) => { e.preventDefault(); handleNav("#/blog"); }}>Blog</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors" onClick={() => handleNav("#/")}>FAQ</a>
          <a href="#contact" className="px-4 py-2 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-colors" onClick={() => handleNav("#/")}>Kontakt</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-base font-medium">
              <a href="#services" className="text-zinc-300 hover:text-emerald-400 transition-colors py-2" onClick={() => handleNav("#/")}>Leistungen</a>
              <a href="#projects" className="text-zinc-300 hover:text-emerald-400 transition-colors py-2" onClick={() => handleNav("#/")}>Portfolio</a>
              <a href="#about" className="text-zinc-300 hover:text-emerald-400 transition-colors py-2" onClick={() => handleNav("#/")}>Über mich</a>
              <a href="#/blog" className="text-zinc-300 hover:text-emerald-400 transition-colors py-2" onClick={(e) => { e.preventDefault(); handleNav("#/blog"); }}>Blog</a>
              <a href="#faq" className="text-zinc-300 hover:text-emerald-400 transition-colors py-2" onClick={() => handleNav("#/")}>FAQ</a>
              <a
                href="#contact"
                className="mt-2 px-4 py-3 bg-emerald-500 text-black font-bold rounded-xl text-center hover:bg-emerald-400 transition-colors"
                onClick={() => handleNav("#/")}
              >
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TerminalMockup = () => (
  <div className="glass rounded-2xl overflow-hidden shadow-2xl">
    <div className="bg-white/10 px-4 py-2.5 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500/50" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
      <div className="w-3 h-3 rounded-full bg-green-500/50" />
      <span className="ml-2 text-[10px] font-mono text-zinc-500">rheindorf — workflow.ts</span>
    </div>
    <div className="p-5 font-mono text-[12px] leading-relaxed">
      <div className="text-zinc-500 mb-1">// Lead-Automatisierung — n8n + OpenAI</div>
      <div className="mb-3">
        <span className="text-violet-400">async function</span>
        <span className="text-cyan-300"> qualifyLead</span>
        <span className="text-zinc-400">(lead: Lead) {"{"}  </span>
      </div>
      <div className="pl-4 space-y-1.5">
        <div>
          <span className="text-zinc-500">// 1. KI analysiert die Anfrage</span>
        </div>
        <div>
          <span className="text-violet-400">const </span>
          <span className="text-zinc-300">score = </span>
          <span className="text-violet-400">await </span>
          <span className="text-cyan-300">openai</span>
          <span className="text-zinc-400">.</span>
          <span className="text-cyan-300">analyze</span>
          <span className="text-zinc-400">(lead.</span>
          <span className="text-zinc-300">message</span>
          <span className="text-zinc-400">)</span>
        </div>
        <div className="mt-3">
          <span className="text-zinc-500">// 2. CRM-Update + Slack-Benachrichtigung</span>
        </div>
        <div>
          <span className="text-violet-400">await </span>
          <span className="text-cyan-300">Promise</span>
          <span className="text-zinc-400">.</span>
          <span className="text-cyan-300">all</span>
          <span className="text-zinc-400">([</span>
        </div>
        <div className="pl-4">
          <span className="text-cyan-300">crm</span>
          <span className="text-zinc-400">.</span>
          <span className="text-cyan-300">update</span>
          <span className="text-zinc-400">(lead, {"{ "}score{" }"}),</span>
        </div>
        <div className="pl-4">
          <span className="text-cyan-300">slack</span>
          <span className="text-zinc-400">.</span>
          <span className="text-cyan-300">notify</span>
          <span className="text-zinc-400">(</span>
          <span className="text-emerald-400">`Neuer Lead: ${"$"}{"{"}score{"}"}%`</span>
          <span className="text-zinc-400">)</span>
        </div>
        <div>
          <span className="text-zinc-400">])</span>
        </div>
        <div className="mt-3">
          <span className="text-zinc-500">// 3. Automatisches Follow-up planen</span>
        </div>
        <div>
          <span className="text-violet-400">if </span>
          <span className="text-zinc-400">(score {">"}= </span>
          <span className="text-amber-300">80</span>
          <span className="text-zinc-400">) </span>
          <span className="text-cyan-300">calendar</span>
          <span className="text-zinc-400">.</span>
          <span className="text-cyan-300">bookCall</span>
          <span className="text-zinc-400">(lead)</span>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-zinc-400">{"}"}  </span>
      </div>
      <div className="flex gap-2 mt-4 pt-3 border-t border-white/5">
        <span className="text-emerald-500">✓</span>
        <span className="text-zinc-500">3 Leads qualifiziert • letzte Ausführung: vor 4 Min.</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Die digitale Zukunft – eine Zeile Code nach der anderen.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Offen für neue Projekte
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[0.95]">
            Mehr Kunden, weniger Aufwand – durch <span className="text-gradient">Websites & Workflows</span>, die für dich arbeiten.
          </h1>
          <p className="text-xl text-zinc-400 mb-8 font-mono min-h-[1.5em]">
            {text}<span className="animate-pulse">_</span>
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="#contact" className="w-full sm:w-auto flex justify-center items-center px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all gap-2 group">
              Kostenloses Erstgespräch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="w-full sm:w-auto flex justify-center items-center px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Arbeiten ansehen
            </a>
          </div>

          {/* Mobile skill tags - visible when terminal is hidden */}
          <div className="flex flex-wrap gap-2 mt-8 lg:hidden">
            {["React", "Next.js", "n8n", "OpenAI", "TypeScript", "Vite"].map(tag => (
              <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block absolute top-1/2 right-6 -translate-y-1/2 w-[450px]"
        >
          <TerminalMockup />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
    </section>
  );
};

// Service Illustrations
const WebDevIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-28" fill="none">
    {/* Browser window */}
    <rect x="20" y="10" width="160" height="100" rx="8" stroke="rgba(16,185,129,0.3)" strokeWidth="1" fill="rgba(16,185,129,0.03)" />
    <rect x="20" y="10" width="160" height="20" rx="8" fill="rgba(255,255,255,0.05)" />
    <circle cx="34" cy="20" r="3" fill="rgba(239,68,68,0.4)" />
    <circle cx="44" cy="20" r="3" fill="rgba(234,179,8,0.4)" />
    <circle cx="54" cy="20" r="3" fill="rgba(34,197,94,0.4)" />
    {/* Code lines */}
    <rect x="32" y="40" width="60" height="3" rx="1.5" fill="rgba(16,185,129,0.4)" />
    <rect x="32" y="48" width="40" height="3" rx="1.5" fill="rgba(6,182,212,0.3)" />
    <rect x="32" y="56" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
    <rect x="32" y="64" width="55" height="3" rx="1.5" fill="rgba(16,185,129,0.25)" />
    <rect x="32" y="72" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
    {/* Preview panel */}
    <rect x="120" y="36" width="48" height="64" rx="4" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.15)" strokeWidth="0.5" />
    <rect x="126" y="42" width="36" height="4" rx="2" fill="rgba(16,185,129,0.3)" />
    <rect x="126" y="50" width="28" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
    <rect x="126" y="55" width="36" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
    <rect x="126" y="62" width="36" height="16" rx="3" fill="rgba(16,185,129,0.12)" />
    <rect x="126" y="82" width="20" height="6" rx="3" fill="rgba(16,185,129,0.35)" />
  </svg>
);

const AIIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-28" fill="none">
    {/* Central brain/chip */}
    <rect x="75" y="35" width="50" height="50" rx="10" stroke="rgba(6,182,212,0.4)" strokeWidth="1" fill="rgba(6,182,212,0.05)" />
    <circle cx="100" cy="60" r="12" stroke="rgba(16,185,129,0.5)" strokeWidth="1" fill="rgba(16,185,129,0.08)" />
    <circle cx="100" cy="60" r="4" fill="rgba(16,185,129,0.6)" />
    {/* Connection lines */}
    <line x1="75" y1="50" x2="40" y2="30" stroke="rgba(16,185,129,0.2)" strokeWidth="0.8" />
    <line x1="75" y1="70" x2="35" y2="85" stroke="rgba(6,182,212,0.2)" strokeWidth="0.8" />
    <line x1="125" y1="50" x2="160" y2="30" stroke="rgba(16,185,129,0.2)" strokeWidth="0.8" />
    <line x1="125" y1="70" x2="165" y2="90" stroke="rgba(6,182,212,0.2)" strokeWidth="0.8" />
    <line x1="100" y1="35" x2="100" y2="15" stroke="rgba(16,185,129,0.2)" strokeWidth="0.8" />
    <line x1="100" y1="85" x2="100" y2="105" stroke="rgba(6,182,212,0.2)" strokeWidth="0.8" />
    {/* Nodes */}
    <circle cx="40" cy="30" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8" />
    <circle cx="35" cy="85" r="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" />
    <circle cx="160" cy="30" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8" />
    <circle cx="165" cy="90" r="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" />
    <circle cx="100" cy="15" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8" />
    <circle cx="100" cy="105" r="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" />
    {/* Data pulses */}
    <circle cx="40" cy="30" r="3" fill="rgba(16,185,129,0.5)" />
    <circle cx="160" cy="30" r="3" fill="rgba(16,185,129,0.5)" />
    <circle cx="100" cy="15" r="3" fill="rgba(16,185,129,0.5)" />
    <circle cx="35" cy="85" r="3" fill="rgba(6,182,212,0.5)" />
    <circle cx="165" cy="90" r="3" fill="rgba(6,182,212,0.5)" />
    <circle cx="100" cy="105" r="3" fill="rgba(6,182,212,0.5)" />
  </svg>
);

const StrategyIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-28" fill="none">
    {/* Roadmap path */}
    <path d="M 30 90 Q 60 90 70 65 Q 80 40 100 40 Q 120 40 130 55 Q 140 70 160 50 Q 170 40 180 30" stroke="rgba(16,185,129,0.35)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M 30 90 Q 60 90 70 65 Q 80 40 100 40 Q 120 40 130 55 Q 140 70 160 50 Q 170 40 180 30" stroke="url(#strat-grad)" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 4" opacity="0.4" />
    {/* Milestone dots */}
    <circle cx="30" cy="90" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
    <circle cx="30" cy="90" r="3" fill="rgba(16,185,129,0.6)" />
    <circle cx="70" cy="65" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
    <circle cx="70" cy="65" r="3" fill="rgba(16,185,129,0.6)" />
    <circle cx="100" cy="40" r="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
    <circle cx="100" cy="40" r="3" fill="rgba(6,182,212,0.6)" />
    <circle cx="130" cy="55" r="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
    <circle cx="130" cy="55" r="3" fill="rgba(6,182,212,0.6)" />
    <circle cx="180" cy="30" r="8" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
    <circle cx="180" cy="30" r="4" fill="rgba(16,185,129,0.7)" />
    {/* Labels */}
    <text x="24" y="106" className="text-[8px] font-mono" fill="rgba(255,255,255,0.3)">Start</text>
    <text x="62" y="55" className="text-[8px] font-mono" fill="rgba(255,255,255,0.3)">Analyse</text>
    <text x="88" y="32" className="text-[8px] font-mono" fill="rgba(255,255,255,0.3)">Konzept</text>
    <text x="118" y="47" className="text-[8px] font-mono" fill="rgba(255,255,255,0.3)">Build</text>
    <text x="170" y="22" className="text-[8px] font-mono" fill="rgba(16,185,129,0.5)">Launch</text>
    {/* Arrow at end */}
    <path d="M 176 34 L 180 30 L 176 26" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <defs>
      <linearGradient id="strat-grad"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
    </defs>
  </svg>
);

const Services = () => {
  const services = [
    {
      illustration: <WebDevIllustration />,
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Moderne, performante Webseiten und Webanwendungen – von der Landing Page bis zur komplexen Web-App mit React, Next.js und TypeScript.",
      tags: ["React", "TypeScript", "Vite", "Next.js"]
    },
    {
      illustration: <AIIllustration />,
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Assistenten & Automatisierung",
      description: "Individuelle KI-Lösungen und Automatisierungen, die repetitive Aufgaben übernehmen – von Chatbots über API-Integrationen bis hin zu vollständig automatisierten Workflows.",
      tags: ["KI", "Automatisierung", "API", "Chatbots"]
    },
    {
      illustration: <StrategyIllustration />,
      icon: <Layers className="w-6 h-6" />,
      title: "Digitale Strategie & Beratung",
      description: "Ich helfe Unternehmen, die richtigen digitalen Werkzeuge zu finden – mit klarer Roadmap, ehrlicher Beratung und Fokus auf messbaren Ergebnissen.",
      tags: ["Strategie", "Beratung", "Digitalisierung"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Leistungen</h2>
          <h3 className="text-4xl font-bold">Was ich für dich tun kann</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all group"
            >
              {/* Illustration */}
              <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                {service.illustration}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold">{service.title}</h4>
              </div>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-zinc-500 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowsPreview = () => {
  // Pick 3 random workflows from the full list
  const [randomWorkflows] = useState(() => {
    const shuffled = [...workflows].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Workflows Section */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Workflows</h3>
          </div>
          <button onClick={() => window.location.hash = "#/projects"} className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            Alle Workflows <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomWorkflows.map((wf, idx) => {
            const IconComponent = wf.icon;
            return (
              <motion.div
                key={wf.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => window.location.hash = "#/projects"}
                className="group cursor-pointer p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <p className="text-xs font-mono text-emerald-500 mb-2">
                  {wf.categories[0]}
                </p>
                <h4 className="text-xl font-bold group-hover:text-emerald-400 transition-colors mb-2">{wf.name}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{wf.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Web Development Section */}
        <div className="flex items-end justify-between mb-16 mt-24">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Web Development</h3>
          </div>
          <button onClick={() => window.location.hash = "#/websites"} className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            Webseiten <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Projekt folgt", desc: "Mehr Infos in Kürze." },
            { title: "Projekt folgt", desc: "Mehr Infos in Kürze." },
            { title: "Projekt folgt", desc: "Mehr Infos in Kürze." },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => window.location.hash = "#/websites"}
              className="group cursor-pointer p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-5 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-emerald-500 mb-2">Web Development</p>
              <h4 className="text-xl font-bold group-hover:text-emerald-400 transition-colors mb-2">{project.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate send – replace with real API call
    setTimeout(() => {
      setFormState("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Kontakt</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Hast du ein <span className="text-gradient">Projekt</span> im Kopf?
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Schreib mir eine Nachricht – ich melde mich innerhalb von 24 Stunden bei dir. Ob erstes Kennenlernen, konkretes Projekt oder einfach eine Frage.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@rheindorf.digital" className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">hello@rheindorf.digital</span>
              </a>
              <a href="https://linkedin.com/in/alexander-rheindorf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a href="https://github.com/rheindorf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dein Name"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">E-Mail</label>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="deine@email.de"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Nachricht</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-600" />
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Erzähl mir von deinem Projekt..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState !== "idle"}
                className="w-full py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {formState === "idle" && (
                  <>
                    Nachricht senden
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {formState === "sending" && (
                  <>
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Wird gesendet...
                  </>
                )}
                {formState === "sent" && (
                  <>
                    ✓ Nachricht gesendet!
                  </>
                )}
              </button>

              <p className="text-[11px] text-zinc-600 text-center font-mono">
                Ich antworte in der Regel innerhalb von 24 Stunden.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Wie läuft eine Zusammenarbeit ab?",
      a: "In einem ersten Gespräch lernen wir uns kennen und klären dein Ziel. Danach erstelle ich ein konkretes Konzept mit Zeitplan und Preis. Nach deiner Freigabe setze ich um – mit regelmäßigen Updates und kurzen Feedbackschleifen."
    },

    {
      q: "Wie lange dauert die Umsetzung?",
      a: "Einen einzelnen Workflow kann ich oft innerhalb von 1–2 Tagen einrichten. Eine Website braucht je nach Umfang 2–4 Wochen. Den genauen Zeitplan klären wir vorab gemeinsam."
    },
    {
      q: "Muss ich selbst technisches Wissen mitbringen?",
      a: "Nein, überhaupt nicht. Ich erkläre alles verständlich und sorge dafür, dass du deine Lösung auch ohne IT-Kenntnisse bedienen und pflegen kannst."
    },
    {
      q: "Arbeitest du nur in der Region Köln/Aachen?",
      a: "Mein Netzwerk liegt in der Region, aber ich arbeite komplett remote. Ob Bergheim oder Berlin – die Zusammenarbeit funktioniert genauso reibungslos."
    },
    {
      q: "Was passiert nach dem Projekt?",
      a: "Wenn gewünscht, biete ich laufenden Support und Weiterentwicklung an. Du bist aber nicht an mich gebunden – alle Lösungen gehören dir und sind so gebaut, dass du sie auch selbst weiterführen kannst."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold">Häufige Fragen</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={false}
              className="rounded-2xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-emerald-500 text-2xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? "auto" : 0,
                  opacity: openIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-zinc-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onShowImpressum, onShowDatenschutz }: { onShowImpressum: () => void; onShowDatenschutz: () => void }) => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
          <Code2 className="w-4 h-4 text-black" />
        </div>
        <span className="font-mono font-bold text-sm">RHEINDORF.DIGITAL</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="mailto:hello@rheindorf.digital" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={onShowImpressum} className="text-zinc-500 hover:text-white text-xs font-mono transition-colors">Impressum</button>
        <button onClick={onShowDatenschutz} className="text-zinc-500 hover:text-white text-xs font-mono transition-colors">Datenschutz</button>
      </div>
      <p className="text-zinc-500 text-xs font-mono">
        © {new Date().getFullYear()} Rheindorf Digital. Alle Rechte vorbehalten.
      </p>
    </div>
  </footer>
);

const About = () => (
  <section id="about" className="py-16 md:py-24 bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Alexander Rheindorf"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-end">
            <span className="text-lg font-bold text-emerald-500">Köln / Aachen</span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Region</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Über mich</h2>
          <h3 className="text-4xl font-bold mb-6">Smarter arbeiten – mit Lösungen, die zu deinem Alltag passen.</h3>
          <p className="text-zinc-400 mb-5 leading-relaxed">
            Ich helfe Unternehmen dabei, smarter zu arbeiten – durch digitale Lösungen, die wirklich zu ihrem Alltag passen. Durch meine Arbeit in HR und im Mittelstand weiß ich: Der größte Hebel für Wachstum liegt oft nicht im Produkt, sondern in den Abläufen dahinter.
          </p>
          <p className="text-zinc-400 mb-5 leading-relaxed">
            Genau dort setze ich an – mit Websites, AI-Assistenten und digitalen Workflows, die Prozesse schlanker, schneller und skalierbarer machen.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Ich entwickle keine Lösungen von der Stange, sondern verstehe erst dein Business und baue dann das, was wirklich gebraucht wird.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-500" /> Aus der Praxis
              </h4>
              <p className="text-sm text-zinc-500">Lösungen, die aus echtem Verständnis für Geschäftsprozesse entstehen.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500" /> Maßgeschneidert
              </h4>
              <p className="text-sm text-zinc-500">Kein Standard – sondern genau das, was dein Business braucht.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco S.",
      initials: "MS",
      gradient: "from-emerald-500 to-cyan-500",
      role: "Geschäftsführer, IT-Dienstleistung",
      text: "Alexander hat unsere internen Abläufe komplett auf den Kopf gestellt – im besten Sinne. Wo vorher Excel-Listen und E-Mail-Chaos herrschten, laufen jetzt automatisierte Workflows.",
      highlight: "Zeitersparnis von 12 Stunden pro Woche"
    },
    {
      name: "Sarah K.",
      initials: "SK",
      gradient: "from-violet-500 to-pink-500",
      role: "Inhaberin, Kreativagentur",
      text: "Endlich eine Website, die nicht nur gut aussieht, sondern auch konvertiert. Alexander hat verstanden, was unser Business braucht – nicht was gerade trendy ist.",
      highlight: "3x mehr Anfragen seit Launch"
    },
    {
      name: "Thomas W.",
      initials: "TW",
      gradient: "from-amber-500 to-orange-500",
      role: "Leiter Vertrieb, Mittelstand",
      text: "Der Lead-Workflow hat unseren Vertrieb transformiert. Leads werden jetzt in Sekunden qualifiziert und zugewiesen statt in Stunden. Das hätte ich nie für möglich gehalten.",
      highlight: "Reaktionszeit von 4h auf 2 Min."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Kundenstimmen</h2>
          <h3 className="text-4xl font-bold">Was meine Kunden sagen</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-1 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-emerald-500" />
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 mt-2">
                "{t.text}"
              </p>

              {/* Highlight stat */}
              <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-6 inline-block">
                <span className="text-emerald-400 text-xs font-mono font-bold">{t.highlight}</span>
              </div>

              <div className="border-t border-white/5 pt-5 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-zinc-500 font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all group"
          >
            Jetzt Erstgespräch vereinbaren
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-zinc-500 text-xs font-mono mt-3">Kostenlos & unverbindlich</p>
        </motion.div>
      </div>
    </section>
  );
};

const BlogPreview = ({ onNavigate }: { onNavigate: (hash: string) => void }) => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Blog</h2>
            <h3 className="text-4xl font-bold">Aktuelle Artikel</h3>
          </div>
          <button
            onClick={() => onNavigate("#/blog")}
            className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            Alle Artikel <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onNavigate(`#/blog/${post.slug}`)}
              className="group cursor-pointer p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <h4 className="text-lg font-bold mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                {post.title}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-500 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => onNavigate("#/blog")}
            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
          >
            Alle Artikel <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const navigate = (hash: string) => {
    window.location.hash = hash;
    setRoute(hash);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    if (route.startsWith("#/blog/")) {
      const slug = route.replace("#/blog/", "");
      return <BlogPost slug={slug} onNavigate={navigate} />;
    }
    if (route === "#/blog") {
      return <BlogList onNavigate={navigate} />;
    }
    if (route === "#/projects") {
      return <ProjectsPage onNavigate={navigate} />;
    }
    if (route === "#/websites") {
      return <WebsitesPage onNavigate={navigate} />;
    }
    // Default: Landing Page
    return (
      <>
        <Hero />
        <Services />
        <WorkflowsPreview />
        <About />
        <Testimonials />
        <BlogPreview onNavigate={navigate} />
        <Contact />
        <FAQ />
      </>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer
        onShowImpressum={() => setShowImpressum(true)}
        onShowDatenschutz={() => setShowDatenschutz(true)}
      />
      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
    </div>
  );
}
