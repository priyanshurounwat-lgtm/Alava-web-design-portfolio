import { motion } from "framer-motion";
import { useState } from "react";

type Module = {
  id: string;
  title: string;
  description: string;
  services: string[];
  badge: string;
  className: string;
  variant: "tools" | "timeline" | "stepper" | "maintenance";
  microTag?: string;
};

const modules: Module[] = [
  {
    id: "01",
    title: "UI / UX & RESPONSIVE DESIGN",
    description:
      "User-focused layout systems engineered from initial design frames to complete screen responsiveness. Crafting modern, creative digital spaces tailored to unique brand identities.",
    services: ["UI/UX Design", "Responsive Web Design", "User-Focused Design"],
    badge: "[ LAYER_COMPONENTS: STABLE ]",
    className: "md:col-span-7 md:row-span-2",
    variant: "tools",
    microTag: "[ TOOL_MATRIX: ACTIVE ]",
  },
  {
    id: "02",
    title: "FIGMA TO FRAMER // HTML • CSS • JS",
    description:
      "Transforming design prototypes into ultra-fast, animated, functional web systems. Clean-coded logic layers and fluid interaction frameworks built with native code structures.",
    services: ["Website Design & Development", "Creative Websites", "Modern Layout Production"],
    badge: "[ FRAME_RATE: 60FPS // EXECUTION ]",
    className: "md:col-span-5",
    variant: "stepper",
    microTag: "[ SPRINT_VELOCITY: OPTIMIZED ]",
  },
  {
    id: "03",
    title: "LANDING PAGES & CONVERSION STRUCTURES",
    description:
      "High-end landing pages designed with strict psychological flow to capture leads instantly, combined with structural SEO optimization to secure top search visibility.",
    services: ["Landing Page Design", "SEO Optimization"],
    badge: "[ ACCELERATION: ACTIVE // INDEXED ]",
    className: "md:col-span-5",
    variant: "timeline",
    microTag: "[ CONV_INDEX: +218% ]",
  },
  {
    id: "04",
    title: "WEBSITE REDESIGN & ONGOING MAINTENANCE",
    description:
      "Comprehensive overhaul strategies for outdated systems alongside constant ecosystem maintenance. Regular code optimization, security patches, and structural feature scaling.",
    services: ["Website Redesign", "Website Maintenance"],
    badge: "[ SYSTEM_STATE: AGENT_SUPPORT ]",
    className: "md:col-span-12",
    variant: "maintenance",
    microTag: "[ UPTIME: 99.98% ]",
  },
];

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };
const hoverSpring = { type: "spring" as const, stiffness: 140, damping: 16 };

const orbitTools = [
  {
    label: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  { label: "Framer", logo: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  { label: "Shopify", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
  { label: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
  {
    label: "Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  },
  {
    label: "Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  },
  {
    label: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
];

const tools = [
  { label: "FIGMA", glyph: "◆" },
  { label: "FRAMER", glyph: "▲" },
  { label: "HTML5", glyph: "❮/❯" },
  { label: "CSS3", glyph: "▣" },
  { label: "JAVASCRIPT", glyph: "{ }" },
  { label: "SHOPIFY", glyph: "◉" },
];

const steps = ["INTAKE", "WIREFRAME", "FRAMER BUILD", "LOGIC HANDOFF"];

const timeline = [
  { q: "Q.01", label: "INTAKE PROTOCOL", value: "BRIEF // DNA SCAN" },
  { q: "Q.02", label: "ARCHITECTURE", value: "WIREFRAME // TOKENS" },
  { q: "Q.03", label: "ENGAGEMENT MODEL", value: "SPRINT_VELOCITY: OPTIMIZED" },
  { q: "Q.04", label: "MOTION CORE", value: "FRAMER // GSAP LAYER" },
  { q: "Q.05", label: "DEPLOYMENT", value: "EDGE // 60FPS" },
  { q: "Q.06", label: "MAINTAIN", value: "AGENT_SUPPORT: ON" },
];

function FloatingToolMatrix() {
  const [hovered, setHovered] = useState(false);
  const radius = 120;
  return (
    <div
      className="relative mt-8 h-[300px] md:h-[360px] w-full overflow-hidden border border-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_65%)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="relative h-full w-full flex items-center justify-center">
        {/* orbit track */}
        <div
          className="absolute border border-white/10 rounded-full"
          style={{ width: radius * 2, height: radius * 2 }}
        />
        <div
          className="absolute border border-dashed border-white/5 rounded-full"
          style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}
        />

        {/* core */}
        <div className="absolute flex flex-col items-center gap-2 z-10">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.9)] animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-white/70">
            [ ALAVA_CORE ]
          </span>
        </div>

        {/* revolving capsules */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: hovered ? 40 : 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{ width: radius * 2, height: radius * 2 }}
        >
          {orbitTools.map((t, i) => {
            const angle = (i / orbitTools.length) * 360;
            return (
              <div
                key={t.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                {/* counter-rotate so text stays upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: hovered ? 40 : 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="-translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, transition: hoverSpring }}
                    className="flex items-center gap-1.5 border border-white/10 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full hover:border-white/40 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all cursor-default"
                  >
                    <img
                      src={t.logo}
                      alt={t.label}
                      className="h-3.5 w-3.5 object-contain"
                      loading="lazy"
                    />
                    <span className="font-sans text-xs tracking-wide text-white whitespace-nowrap">
                      {t.label}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-2 left-3 font-mono text-[9px] tracking-widest text-white/30">
        [ ECOSYSTEM_ORBIT // REVOLVING ]
      </div>
      <div className="absolute bottom-2 right-3 flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/30">
        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" /> SYNCED
      </div>
    </div>
  );
}

function HorizontalStepper() {
  return (
    <div className="relative mt-6 mb-6 w-full">
      <div className="flex items-center justify-between gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 flex items-center">
            <motion.div
              whileHover={{ scale: 1.08, transition: hoverSpring }}
              className="flex-1 border border-white/15 bg-white/[0.03] px-2 py-2 text-center font-mono text-[9px] md:text-[10px] tracking-widest text-white/70 hover:text-white hover:border-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)] transition-all"
            >
              [ {s} ]
            </motion.div>
            {i < steps.length - 1 && (
              <span className="px-1 font-mono text-[10px] text-white/30">──▶</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
      {timeline.map((t, i) => (
        <motion.div
          key={t.q}
          whileHover={{ scale: 1.04, transition: hoverSpring }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: i * 0.04 }}
          className="border border-white/10 bg-white/[0.02] p-3 hover:border-white/30 hover:shadow-[0_0_18px_rgba(255,255,255,0.08)] transition-all"
        >
          <div className="font-mono text-[9px] tracking-widest text-emerald-400/80 mb-1">{t.q}</div>
          <div className="font-sans text-xs font-bold uppercase tracking-tight text-white mb-2 leading-tight">
            {t.label}
          </div>
          <div className="font-mono text-[10px] tracking-wider text-white/40">[ {t.value} ]</div>
        </motion.div>
      ))}
    </div>
  );
}

function MaintenanceBar() {
  const ticks = ["MONITOR", "PATCH", "OPTIMIZE", "SCALE", "AUDIT", "REPORT"];
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-2">
      {ticks.map((t, i) => (
        <motion.div
          key={t}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, transition: hoverSpring }}
          className="border border-white/10 bg-white/[0.02] px-3 py-3 flex items-center justify-between hover:border-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)] transition-all"
        >
          <span className="font-mono text-[10px] tracking-widest text-white/70">[ {t} ]</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>
      ))}
    </div>
  );
}

export function CraftStack() {
  return (
    <section id="stack" className="border-b border-white/10 bg-black">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
              [ 03 // HOW WE WORK ]
            </span>
          </div>

          <h2 className="font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight text-white">
            HOW WE{" "}
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">WORK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[minmax(260px,auto)] gap-3 md:gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...spring, delay: i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className={`group relative border border-white/10 hover:border-white/30 transition-colors duration-300 p-7 md:p-9 flex flex-col overflow-hidden ${m.className}`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)]" />

              <div className="relative flex items-center justify-between font-mono text-[10px] tracking-widest text-white/40 mb-8">
                <span>MODULE // {m.id}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="relative flex flex-col">
                <h3 className="font-sans tracking-tight text-xl md:text-2xl font-black text-white uppercase leading-[1.05] mb-5">
                  {m.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-relaxed font-normal text-slate-400 max-w-2xl">
                  {m.description}
                </p>

                {m.variant === "tools" && <FloatingToolMatrix />}
                {m.variant === "stepper" && <HorizontalStepper />}
                {m.variant === "timeline" && <TimelineGrid />}
                {m.variant === "maintenance" && <MaintenanceBar />}
              </div>

              <div className="relative mt-auto pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <ul className="flex flex-wrap gap-2 items-end">
                  {m.services.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={{ scale: 1.08, transition: hoverSpring }}
                      className="font-mono text-[10px] uppercase tracking-wider text-white/70 border border-white/15 px-2.5 py-1 group-hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] hover:text-white transition-all"
                    >
                      [ {s.toUpperCase()} ]
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-col md:items-end gap-1">
                  {m.microTag && (
                    <span className="text-white/40 font-mono text-[10px] tracking-wider">
                      {m.microTag}
                    </span>
                  )}
                  <span className="text-white/40 font-mono text-[10px] tracking-wider whitespace-nowrap">
                    {m.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
