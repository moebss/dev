import { motion } from "motion/react";
import { Code2, Globe, Cpu, ArrowRight, Github, Linkedin, Mail, Terminal, Layers, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Code2 className="w-5 h-5 text-black" />
        </div>
        <span className="font-mono font-bold tracking-tighter text-xl">RHEINDORF<span className="text-emerald-500">.</span>DIGITAL</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
        <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
        <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
        <a href="#contact" className="px-4 py-2 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-colors">Hire Me</a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Building the future, one line of code at a time.";
  
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
            Available for new projects
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
            I build <span className="text-gradient">digital</span> solutions.
          </h1>
          <p className="text-xl text-zinc-400 mb-8 font-mono min-h-[1.5em]">
            {text}<span className="animate-pulse">_</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2 group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              View Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block absolute top-1/2 right-6 -translate-y-1/2 w-[450px]"
        >
          <div className="glass rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-white/10 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 text-[10px] font-mono text-zinc-500">rheindorf — bash</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-2 mb-2">
                <span className="text-emerald-500">➜</span>
                <span className="text-cyan-400">~/portfolio</span>
                <span className="text-zinc-500">git:(main)</span>
              </div>
              <div className="mb-4">
                <span className="text-zinc-300">cat skills.json</span>
              </div>
              <div className="text-zinc-400">
                <pre>{`{
  "frontend": ["React", "Next.js", "Tailwind"],
  "backend": ["Node.js", "Express", "SQLite"],
  "tools": ["Docker", "Git", "Vite"],
  "focus": "Process Digitization"
}`}</pre>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-emerald-500">➜</span>
                <span className="text-cyan-400">~/portfolio</span>
                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "High-performance, responsive websites built with modern frameworks like React, Next.js, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Vite"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Process Digitization",
      description: "Transforming manual workflows into automated digital systems. I help businesses eliminate paperwork, reduce manual data entry, and streamline operations through custom software solutions.",
      tags: ["Automation", "API Integration", "Workflows", "Efficiency"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end application development from database design to intuitive user interfaces.",
      tags: ["Node.js", "PostgreSQL", "Cloud"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Services</h2>
          <h3 className="text-4xl font-bold">What I can do for you</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
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

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Engine",
      category: "Web Development",
      image: "https://picsum.photos/seed/shop/800/600",
      link: "#"
    },
    {
      title: "Workflow Automator",
      category: "Digitization",
      image: "https://picsum.photos/seed/flow/800/600",
      link: "#"
    },
    {
      title: "Data Analytics Dashboard",
      category: "Full-Stack",
      image: "https://picsum.photos/seed/data/800/600",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Selected Projects</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            View all projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                    <ArrowRight className="w-6 h-6 -rotate-45" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-emerald-500 mb-2">{project.category}</p>
              <h4 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{project.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-emerald-500">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-black/60 font-mono text-sm uppercase tracking-[0.3em] mb-8">Let's work together</h2>
      <h3 className="text-5xl md:text-7xl font-bold text-black mb-12 tracking-tight">
        Have a project in mind?
      </h3>
      <a 
        href="mailto:hello@rheindorf.digital" 
        className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity underline underline-offset-8"
      >
        hello@rheindorf.digital
        <ArrowRight className="w-10 h-10" />
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
          <Code2 className="w-4 h-4 text-black" />
        </div>
        <span className="font-mono font-bold text-sm">RHEINDORF.DIGITAL</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
      </div>
      <p className="text-zinc-500 text-xs font-mono">
        © {new Date().getFullYear()} Rheindorf Digital. All rights reserved.
      </p>
    </div>
  </footer>
);

const About = () => (
  <section id="about" className="py-24 bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/coder/800/800" 
              alt="Developer" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-end">
            <span className="text-4xl font-bold text-emerald-500">5+</span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Years of Experience</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">About Me</h2>
          <h3 className="text-4xl font-bold mb-6">Crafting digital excellence with a focus on efficiency.</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            I'm a passionate developer dedicated to building high-quality web applications and optimizing business processes. My approach combines technical expertise with a deep understanding of operational needs.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Whether it's a sleek landing page or a complex internal automation tool, I focus on delivering solutions that are not just functional, but also scalable and maintainable.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-500" /> Fast Delivery
              </h4>
              <p className="text-sm text-zinc-500">Optimized workflows for quick turnarounds.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500" /> Clean Code
              </h4>
              <p className="text-sm text-zinc-500">Maintainable and scalable architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
