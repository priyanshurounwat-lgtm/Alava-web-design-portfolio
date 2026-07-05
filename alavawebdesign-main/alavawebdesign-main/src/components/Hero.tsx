import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LINE_1 = "We don't just build";
const LINE_2 = "websites. We engineer";
const LINE_3 = "digital scale.";

const PRELOADER_DELAY_MS = 4200;
const GRID_COLS = 6;
const ILLUMINATE_RADIUS = 150;

function AnimatedLine({
  text,
  startIndex,
  start,
  muted = false,
}: {
  text: string;
  startIndex: number;
  start: boolean;
  muted?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap justify-center ${muted ? "text-white/40" : ""}`}>
      {words.map((w, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block align-bottom pb-[0.12em] mr-[0.25em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: 40, opacity: 0 }}
            animate={start ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 15,
              delay: (startIndex + i) * 0.08,
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 6,
  yRange = 14,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yRange?: number;
}) {
  return (
    <motion.div
      className={`hidden lg:block absolute z-20 pointer-events-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.6 + delay }}
    >
      <motion.div
        animate={{ y: [0, -yRange, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), PRELOADER_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const words1 = LINE_1.split(" ").length;
  const words2 = LINE_2.split(" ").length;

  const containerRef = useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 15, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 15, mass: 0.6 });

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [mx, setMx] = useState(-9999);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
      setMx(x);
      setSize({ w: rect.width, h: rect.height });
    };
    const onLeave = () => {
      mouseX.set(-9999);
      mouseY.set(-9999);
      setMx(-9999);
    };
    const onResize = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    onResize();
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [mouseX, mouseY]);

  const glowBg = useTransform([smoothX, smoothY], ([x, y]) =>
    `radial-gradient(600px circle at ${x}px ${y}px, rgba(148,163,184,0.10), rgba(255,255,255,0.04) 25%, transparent 60%)`
  );

  return (
    <section ref={containerRef} className="relative border-b border-white/10 overflow-hidden">
      {/* Cursor-following ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glowBg }}
      />

      <div className="relative z-10 px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-white/40 mb-10 animate-fade-up">
          <span className="h-px w-10 bg-white/30" />
          <span>​</span>
          <span>​</span>
        </div>

        <h1 className="font-display font-bold uppercase text-[12vw] md:text-[8.5vw] leading-[1.02] tracking-[-0.01em] text-center">
          <AnimatedLine text={LINE_1} startIndex={0} start={start} />
          <br className="hidden md:block" />
          <AnimatedLine text={LINE_2} startIndex={words1} start={start} />
          <br className="hidden md:block" />
          <AnimatedLine text={LINE_3} startIndex={words1 + words2} start={start} muted />
        </h1>

        {/* Live shot media preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 90, damping: 15, delay: 1.2 }}
          className="mt-14 mx-auto max-w-5xl border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50">
              [ LIVE SHOT // RUNNING CORE DEMO ]
            </span>
            <span className="font-mono text-[10px] text-signal flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" /> REC
            </span>
          </div>
          <div className="relative aspect-[16/7] bg-black overflow-hidden">
            <video
              src="/my-core-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/70 uppercase tracking-widest mix-blend-difference">
              core.alava.engine // v4.20
            </div>
            <div className="absolute top-3 right-4 font-mono text-[10px] text-white/70 uppercase tracking-widest mix-blend-difference">
              60fps · 1080p
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-end">
          <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed max-w-xl uppercase tracking-wide">
            Premium UI/UX layout design, radical Framer interactions, and production-grade Webflow core deployment for global standard brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href="#works"
              className="group relative border border-white/20 px-7 py-5 font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors flex items-center justify-between gap-8 min-w-[260px]"
            >
              <span>VIEW SELECTED WORKS</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#brief"
              className="border border-white/20 bg-white text-black px-7 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-signal hover:border-signal transition-colors text-center"
            >
              [ INITIATE BRIEF ]
            </a>
          </div>
        </div>
      </div>

      {/* Floating glassmorphic UI artifacts */}
      <FloatingCard className="top-[18%] left-6 xl:left-12 w-[300px]" delay={0} duration={6.5}>
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">engine.ts</span>
        </div>
        <pre className="font-mono text-[11px] leading-relaxed p-3 text-white/70">
<span className="text-pink-300">const</span> <span className="text-sky-300">alavaEngine</span> <span className="text-white/50">=</span> <span className="text-white/50">()</span> <span className="text-pink-300">{'=>'}</span> <span className="text-white/50">{'{'}</span>
{"\n  "}<span className="text-emerald-300">deploy</span><span className="text-white/50">:</span> <span className="text-amber-300">true</span><span className="text-white/50">,</span>
{"\n  "}<span className="text-emerald-300">scale</span><span className="text-white/50">:</span> <span className="text-amber-300">'global'</span>
{"\n"}<span className="text-white/50">{'}'}</span><span className="text-white/50">;</span>
        </pre>
      </FloatingCard>

      <FloatingCard className="top-[6%] right-6 xl:right-12 w-[240px]" delay={1.2} duration={7} yRange={18}>
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Layers</span>
          <span className="font-mono text-[9px] text-white/30">12</span>
        </div>
        <ul className="font-mono text-[11px] p-2 space-y-1 text-white/70">
          <li className="flex items-center gap-2 px-2 py-1 rounded bg-white/[0.04]">
            <span className="text-signal">#</span> Hero_Wrapper
          </li>
          <li className="flex items-center gap-2 px-2 py-1">
            <span className="text-sky-300">T</span> Agency_Title
          </li>
          <li className="flex items-center gap-2 px-2 py-1">
            <span className="text-pink-300">▢</span> Live_Demo_Frame
          </li>
          <li className="flex items-center gap-2 px-2 py-1">
            <span className="text-amber-300">○</span> CTA_Cluster
          </li>
        </ul>
      </FloatingCard>

      <FloatingCard className="top-[60%] left-10 xl:left-20 w-[200px]" delay={2.4} duration={5.5} yRange={12}>
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Performance</span>
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
          </div>
          <div className="font-display text-2xl text-white">99<span className="text-white/30 text-base">/100</span></div>
          <div className="mt-2 h-1 bg-white/10 rounded overflow-hidden">
            <div className="h-full w-[99%] bg-gradient-to-r from-signal to-white/70" />
          </div>
        </div>
      </FloatingCard>

      {/* Blueprint grid lines with cursor illumination */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 z-[1]">
        {Array.from({ length: GRID_COLS }).map((_, i) => {
          const lineX = size.w ? (size.w / GRID_COLS) * i : 0;
          const dist = Math.abs(mx - lineX);
          const illuminate = mx > -1000 && dist < ILLUMINATE_RADIUS;
          const intensity = illuminate ? 1 - dist / ILLUMINATE_RADIUS : 0;
          const opacity = 0.04 + intensity * 0.26;
          return (
            <div
              key={i}
              className="border-l transition-[border-color] duration-200"
              style={{ borderColor: `rgba(255,255,255,${opacity})` }}
            />
          );
        })}
      </div>
    </section>
  );
}
