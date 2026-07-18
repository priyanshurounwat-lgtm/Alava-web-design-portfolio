import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

const springTransition = { type: "spring" as const, stiffness: 140, damping: 16 };

const techBadges = [
  "MEAN Stack",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "UI/UX Logic",
  "Shopify",
  "React.js",
  "Python",
  "Figma",
];

const highlights = [
  "Developed responsive web applications using modern frontend technologies and clean UI/UX practices.",
  "Strong understanding of REST API integration, frontend architecture, and AI-powered web solutions.",
  "Passionate about scalable frontend development and continuous learning in modern web technologies.",
];

export function FounderDossier() {
  const darkPanelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = darkPanelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <section id="founder" className="border-b border-white/10">
      {/* ═══════════════════════════════════════════════════
          TOP PANEL — EDITORIAL BIOGRAPHY (LIGHT TONE)
      ═══════════════════════════════════════════════════ */}
      <div className="bg-[#F8F8F6] text-[#111111]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20 md:py-28">
          {/* Editorial labels row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-12">
            <span
              className="px-6 py-2 border-l border-r border-black/10 text-sm uppercase tracking-[0.2em] text-[#111]/80 font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              PRIYANSHU KUMAR
            </span>
            <span
              className="px-6 py-2 border-l border-r border-black/10 text-sm uppercase tracking-[0.2em] text-[#111]/80 font-bold flex items-center gap-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 opacity-50" fill="currentColor">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ALAVA WEB DESIGN // DIGITAL SYSTEMS
            </span>
            <span
              className="px-6 py-2 border-l border-r border-black/10 text-sm uppercase tracking-[0.2em] text-[#111]/80 font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              EST. 2024
            </span>
          </div>

          {/* Large serif headline */}
          <h2
            className="text-center text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
            style={{ fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif" }}
          >
            Meet the Systems
            <br className="hidden md:block" /> Architect.
          </h2>

          {/* Thin separator */}
          <div className="flex justify-center">
            <div className="w-16 h-px bg-[#111]/15" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BOTTOM PANEL — BENTO DOSSIER & SPOTLIGHT (DARK)
      ═══════════════════════════════════════════════════ */}
      <div
        ref={darkPanelRef}
        onMouseMove={handleMouseMove}
        className="relative bg-black overflow-hidden"
        style={
          {
            "--mouse-x": "50%",
            "--mouse-y": "50%",
          } as React.CSSProperties
        }
      >
        {/* Mouse-tracking spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 px-6 md:px-10 py-20 md:py-28 max-w-[1600px] mx-auto">
          {/* Section tag */}
          <div className="flex items-center gap-3 mb-14">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
              [ 05 // THE FOUNDER RADAR & EXECUTIVE DOSSIER ]
            </span>
          </div>

          {/* Two-column dossier grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10">
            {/* LEFT COLUMN — Founder Data */}
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
              transition={springTransition}
              className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest">
                  [ RADAR_ID: FOUNDER_01 ]
                </span>

                <h3 className="font-sans text-3xl font-black text-white tracking-tight uppercase mt-5">
                  PRIYANSHU KUMAR
                </h3>
                <p className="text-slate-400 font-sans text-sm font-medium mt-1">
                  Founder & Lead Creative Systems Architect
                </p>

                <p className="text-slate-400 font-sans text-sm leading-relaxed mt-5">
                  Engineering modern, creative web systems that balance strict backend logic with
                  high-performance motion design. Spearheading digital product transformations at
                  Alava Web Designers.
                </p>

                {/* Contact strip */}
                <div className="mt-6 space-y-1.5">
                  <div className="font-mono text-[10px] text-slate-500 tracking-wider">
                    SYS_CONTACT: +91 91739 10955
                  </div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=alavadesigner@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-slate-500 tracking-wider hover:text-white transition-colors block"
                  >
                    MAIL_PROTOCOL: alavadesigner@gmail.com →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/priyanshu-kumar-b10457253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-emerald-400/70 tracking-wider hover:text-emerald-400 transition-colors block"
                  >
                    LINKED_NET → linkedin.com/in/priyanshu-kumar ↗
                  </a>
                </div>
              </div>

              <button className="mt-8 self-start bg-white/[0.05] backdrop-blur-md border border-white/10 text-white text-xs font-mono uppercase tracking-widest px-5 py-2.5 rounded-lg hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300">
                VERIFIED RESUME PROTOCOL ↓
              </button>
            </motion.div>

            {/* RIGHT COLUMN — Resume Tiers */}
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
              transition={springTransition}
              className="lg:col-span-8 p-8 md:p-10 flex flex-col gap-10"
            >
              {/* TIER A — Operational Summary */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <h4 className="text-white font-sans text-base font-bold uppercase tracking-tight">
                    AGENCY FREELANCE UI/UX ARCHITECT // ALAVA WEB DESIGNERS
                  </h4>
                  <span className="text-emerald-400 font-mono text-[10px] tracking-widest whitespace-nowrap">
                    2025 — PRESENT // ESTABLISHED CORE
                  </span>
                </div>
                <ul className="text-slate-400 font-sans text-xs space-y-2.5 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Engineered end-to-end Figma prototypes into ultra-fast, animated native Framer
                      and custom HTML/CSS/JavaScript digital systems.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Built a robust client acquisition framework specializing in high-conversion
                      landing pages and responsive e-commerce storefronts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Designed and developed responsive web interfaces using React.js, HTML5, CSS3,
                      and JavaScript with REST API integration.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Built reusable UI components and responsive layouts for mobile and desktop
                      platforms with Git-based collaborative workflows.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="w-full h-px bg-white/5" />

              {/* PROJECT — BackPacker */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <h4 className="text-white font-sans text-sm font-bold uppercase tracking-tight">
                    AI-POWERED GROUP TRAVEL PLANNING SYSTEM (BACKPACKER)
                  </h4>
                  <span className="text-slate-500 font-mono text-[10px] tracking-widest whitespace-nowrap">
                    2025 // DEPLOYED
                  </span>
                </div>
                <ul className="text-slate-400 font-sans text-xs space-y-2.5 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Developed an AI-based group travel planning application that analyzes user
                      preferences and generates optimized travel recommendations.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Implemented user authentication, group creation, conflict detection, itinerary
                      generation, and activity scheduling modules.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/30 mt-0.5">•</span>
                    <span>
                      Applied AI-based preference analysis techniques to improve group travel
                      decision-making with MongoDB backend.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="w-full h-px bg-white/5" />

              {/* TIER B — Academic Core */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <h4 className="text-white font-sans text-sm font-bold uppercase tracking-tight">
                    COMPUTER SCIENCE & ENGINEERING SYSTEMS // PARUL UNIVERSITY
                  </h4>
                  <span className="text-slate-500 font-mono text-[10px] tracking-widest whitespace-nowrap">
                    COMPLETION HORIZON: 2027
                  </span>
                </div>
                <p className="text-slate-500 font-mono text-[10px] tracking-wider mb-4">
                  B.TECH CSE (ARTIFICIAL INTELLIGENCE) // VADODARA, GUJARAT
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-white/[0.03] border border-white/10 text-white font-sans text-[11px] px-2.5 py-1 rounded-md hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-white/5" />

              {/* HIGHLIGHTS */}
              <div>
                <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-4 block">
                  [ EXECUTIVE_HIGHLIGHTS ]
                </span>
                <ul className="text-slate-400 font-sans text-xs space-y-2.5 leading-relaxed">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-400/60 mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
