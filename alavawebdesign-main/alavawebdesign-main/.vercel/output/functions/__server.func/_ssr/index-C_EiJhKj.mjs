import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useMotionValue, a as useSpring, b as useTransform, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { M as Mail, A as ArrowRight, a as MapPin, C as Clock, b as Check, X, c as MessageSquare, d as MessageCircle, L as Linkedin, I as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const BRAND = "ALAVA WEB DESIGNERS";
const STAR_COUNT = 45;
const CLUSTER_COUNT = 18;
function useStars(count, seed) {
  return reactExports.useMemo(() => {
    let s = seed;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({ length: count }, () => ({
      top: rand() * 100,
      left: rand() * 100,
      size: 1 + rand() * 2.2,
      delay: rand() * 2,
      duration: 1.6 + rand() * 1.8
    }));
  }, [count, seed]);
}
function Preloader() {
  const [phase, setPhase] = reactExports.useState("stars");
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 1200);
    const t2 = setTimeout(() => setPhase("hold"), 2800);
    const t3 = setTimeout(() => setPhase("exit"), 3300);
    const t4 = setTimeout(() => setPhase("gone"), 4100);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);
  const stars = useStars(STAR_COUNT, 17);
  const cluster = useStars(CLUSTER_COUNT, 91);
  if (phase === "gone") return null;
  const exiting = phase === "exit";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed inset-0 z-[100] bg-black overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${exiting ? "opacity-0 scale-[1.04] pointer-events-none" : "opacity-100 scale-100"}`,
      "aria-hidden": exiting,
      children: [
        stars.map((st, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute rounded-full bg-white",
            style: {
              top: `${st.top}%`,
              left: `${st.left}%`,
              width: `${st.size}px`,
              height: `${st.size}px`,
              animation: `star-twinkle ${st.duration}s ease-in-out ${st.delay}s infinite`,
              opacity: 0.2,
              boxShadow: "0 0 4px rgba(255,255,255,0.6)"
            }
          },
          `s-${i}`
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          (phase === "text" || phase === "hold") && cluster.map((st, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute rounded-full bg-white",
              style: {
                top: `${(st.top - 50) * 1.6 + 50}%`,
                left: `${(st.left - 50) * 1.6 + 50}%`,
                width: `${st.size}px`,
                height: `${st.size}px`,
                animation: `star-twinkle ${st.duration}s ease-in-out ${st.delay}s infinite, cluster-in 0.6s ease-out both`,
                boxShadow: "0 0 6px rgba(255,255,255,0.9)"
              }
            },
            `c-${i}`
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "relative flex flex-wrap justify-center font-display font-bold uppercase text-white text-2xl md:text-5xl tracking-[0.18em] md:tracking-[0.22em] px-6",
              "aria-label": BRAND,
              children: BRAND.split("").map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block",
                  style: {
                    opacity: 0,
                    transform: "translateX(-0.4em)",
                    animation: phase !== "stars" ? `char-reveal 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms forwards` : "none"
                  },
                  children: ch === " " ? " " : ch
                },
                i
              ))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes char-reveal {
          from { opacity: 0; transform: translateX(-0.4em); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cluster-in {
          from { opacity: 0; transform: scale(0.4); }
          to { opacity: 1; transform: scale(1); }
        }
      ` })
      ]
    }
  );
}
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 md:px-10 h-14 font-mono text-xs uppercase tracking-widest", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-dot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-signal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "ALAVA SYSTEM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-white/30", children: "​" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-white/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#works", className: "hover:text-white transition-colors", children: "WORKS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stack", className: "hover:text-white transition-colors", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pipeline", className: "hover:text-white transition-colors", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#brief", className: "hover:text-white transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#brief",
        className: "group relative inline-flex items-center gap-2 text-white hover:text-black transition-colors duration-300 px-4 py-1.5 rounded-full border border-white/20 hover:border-transparent overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "SECURE THE BRIEF" })
        ]
      }
    )
  ] }) });
}
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
  muted = false
}) {
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex flex-wrap justify-center ${muted ? "text-white/40" : ""}`, children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "overflow-hidden inline-block align-bottom pb-[0.12em] mr-[0.25em]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          className: "inline-block will-change-transform",
          initial: { y: 40, opacity: 0 },
          animate: start ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 },
          transition: {
            type: "spring",
            stiffness: 90,
            damping: 15,
            delay: (startIndex + i) * 0.08
          },
          children: w
        }
      )
    },
    i
  )) });
}
function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 6,
  yRange = 14
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `hidden lg:block absolute z-20 pointer-events-none ${className}`,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 90, damping: 15, delay: 0.6 + delay },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { y: [0, -yRange, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
          className: "backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]",
          children
        }
      )
    }
  );
}
function Hero() {
  const [start, setStart] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setStart(true), PRELOADER_DELAY_MS);
    return () => clearTimeout(t);
  }, []);
  const words1 = LINE_1.split(" ").length;
  const words2 = LINE_2.split(" ").length;
  const containerRef = reactExports.useRef(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 15, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 15, mass: 0.6 });
  const [size, setSize] = reactExports.useState({ w: 0, h: 0 });
  const [mx, setMx] = reactExports.useState(-9999);
  reactExports.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
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
  const glowBg = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(148,163,184,0.10), rgba(255,255,255,0.04) 25%, transparent 60%)`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: containerRef, className: "relative border-b border-white/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 z-0",
        style: { background: glowBg }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24 max-w-[1600px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-white/40 mb-10 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-white/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "​" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "​" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold uppercase text-[12vw] md:text-[8.5vw] leading-[1.02] tracking-[-0.01em] text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedLine, { text: LINE_1, startIndex: 0, start }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedLine, { text: LINE_2, startIndex: words1, start }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedLine, { text: LINE_3, startIndex: words1 + words2, start, muted: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: start ? { opacity: 1, y: 0 } : {},
          transition: { type: "spring", stiffness: 90, damping: 15, delay: 1.2 },
          className: "mt-14 mx-auto max-w-5xl border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-md overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/70" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50", children: "[ LIVE SHOT // RUNNING CORE DEMO ]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-signal flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" }),
                " REC"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/7] bg-black overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  src: "/my-core-video.mp4",
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  className: "absolute inset-0 h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-4 font-mono text-[10px] text-white/70 uppercase tracking-widest mix-blend-difference", children: "core.alava.engine // v4.20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-4 font-mono text-[10px] text-white/70 uppercase tracking-widest mix-blend-difference", children: "60fps · 1080p" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-10 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm md:text-base text-white/60 leading-relaxed max-w-xl uppercase tracking-wide", children: "Premium UI/UX layout design, radical Framer interactions, and production-grade Webflow core deployment for global standard brands." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 md:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#works",
              className: "group relative border border-white/20 px-7 py-5 font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors flex items-center justify-between gap-8 min-w-[260px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "VIEW SELECTED WORKS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#brief",
              className: "border border-white/20 bg-white text-black px-7 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-signal hover:border-signal transition-colors text-center",
              children: "[ INITIATE BRIEF ]"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingCard, { className: "top-[18%] left-6 xl:left-12 w-[300px]", delay: 0, duration: 6.5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-widest text-white/40", children: "engine.ts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "font-mono text-[11px] leading-relaxed p-3 text-white/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-300", children: "const" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300", children: "alavaEngine" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "=" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "()" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-300", children: "=>" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "{" }),
        "\n  ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: "deploy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: ":" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "," }),
        "\n  ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: "scale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: ":" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "'global'" }),
        "\n",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "}" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: ";" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingCard, { className: "top-[6%] right-6 xl:right-12 w-[240px]", delay: 1.2, duration: 7, yRange: 18, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-widest text-white/50", children: "Layers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] text-white/30", children: "12" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "font-mono text-[11px] p-2 space-y-1 text-white/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 px-2 py-1 rounded bg-white/[0.04]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signal", children: "#" }),
          " Hero_Wrapper"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 px-2 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300", children: "T" }),
          " Agency_Title"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 px-2 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-300", children: "▢" }),
          " Live_Demo_Frame"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 px-2 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "○" }),
          " CTA_Cluster"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCard, { className: "top-[60%] left-10 xl:left-20 w-[200px]", delay: 2.4, duration: 5.5, yRange: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-widest text-white/50", children: "Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl text-white", children: [
        "99",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-base", children: "/100" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 bg-white/10 rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[99%] bg-gradient-to-r from-signal to-white/70" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid grid-cols-6 z-[1]", children: Array.from({ length: GRID_COLS }).map((_, i) => {
      const lineX = size.w ? size.w / GRID_COLS * i : 0;
      const dist = Math.abs(mx - lineX);
      const illuminate = mx > -1e3 && dist < ILLUMINATE_RADIUS;
      const intensity = illuminate ? 1 - dist / ILLUMINATE_RADIUS : 0;
      const opacity = 0.04 + intensity * 0.26;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "border-l transition-[border-color] duration-200",
          style: { borderColor: `rgba(255,255,255,${opacity})` }
        },
        i
      );
    }) })
  ] });
}
function Marquee() {
  const text = "INTERFACE ARCHITECTURE ✦ RADICAL UI/UX DESIGN ✦ FRAMER CORE ENGINEERING ✦ WEBFLOW PRODUCTION SYSTEMS ✦ ";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 overflow-hidden py-6 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex whitespace-nowrap animate-marquee will-change-transform", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold uppercase md:text-5xl text-white/90 pr-12 text-xl", children: text.repeat(4) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold uppercase md:text-5xl text-white/90 pr-12 text-xl", "aria-hidden": true, children: text.repeat(4) })
  ] }) });
}
const works = [
  {
    idx: "01",
    title: "VIJAY EYE HOSPITAL",
    stack: "HEALTHCARE / LIVE CLIENT",
    projectImageUrl: "/vijay-eye-hospital.png",
    liveWebsiteUrl: "https://www.vijayeyehospital.in/"
  },
  {
    idx: "02",
    title: "HARMONY DENTAL CLINIC",
    stack: "DENTAL CLINIC / NETLIFY",
    projectImageUrl: "/harmony-dental.png",
    liveWebsiteUrl: "https://harmonydentalclinic.netlify.app"
  },
  {
    idx: "03",
    title: "HOLISTIC INFLUENCE",
    stack: "COFFEE SHOP / FRAMER",
    projectImageUrl: "/holistic-influence.png",
    liveWebsiteUrl: "https://holistic-influence-487375.framer.app"
  },
  {
    idx: "04",
    title: "SABITH M A",
    stack: "E-COMMERCE STORE / FRAMER",
    projectImageUrl: "/sabith-portfolio.png",
    liveWebsiteUrl: "https://thankful-checkbox-910164.framer.app"
  },
  {
    idx: "05",
    title: "FUEL X",
    stack: "PORTFOLIO / FRAMER",
    projectImageUrl: "/homely-talk.png",
    liveWebsiteUrl: "https://homely-talk-145656.framer.app/"
  },
  {
    idx: "06",
    title: "Coming Soon",
    stack: "Our next project is on the way",
    projectImageUrl: "/coming-soon.png",
    liveWebsiteUrl: "#brief"
  }
];
function WorkGallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "works", className: "relative border-b border-white/10 overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.05] mix-blend-overlay",
          style: {
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-6 md:px-10 py-20 md:py-28 max-w-[1600px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "01", label: "SELECTED WORKS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 mb-16 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]", children: "Our best works." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: works.map((w) => {
        const isInternal = w.liveWebsiteUrl.startsWith("#");
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: w.liveWebsiteUrl,
            target: isInternal ? void 0 : "_blank",
            rel: isInternal ? void 0 : "noopener noreferrer",
            className: "group relative block overflow-hidden border border-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] transition-all duration-500 bg-neutral-950 aspect-[4/3]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: w.projectImageUrl,
                  alt: w.title,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-102"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col justify-between p-6 md:p-8 z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-xs uppercase tracking-widest", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/80 group-hover:text-white transition-colors duration-300", children: [
                    "INDEX: ",
                    w.idx
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 group-hover:text-white transition-colors duration-300", children: w.stack })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase text-3xl md:text-5xl tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500", children: w.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block font-mono uppercase tracking-[0.3em] text-xs bg-white text-black px-4 py-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.3)]", children: isInternal ? "[ START YOUR PROJECT ]" : "[ VISIT LIVE WEBSITE ↗ ]" }) })
                ] })
              ] })
            ]
          },
          w.idx
        );
      }) })
    ] })
  ] });
}
function SectionLabel({ index, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-signal font-mono text-xs uppercase tracking-widest", children: [
      "[ ",
      index,
      " // ",
      label,
      " ]"
    ] })
  ] });
}
const studies = [
  {
    id: "disney",
    index: "01",
    title: "DISNEY+ — THE LION KING",
    subtitle: "Cinematic streaming concept with editorial depth.",
    category: "STREAMING / ENTERTAINMENT",
    role: "UI / UX DESIGN · ART DIRECTION",
    year: "2025",
    tools: ["Figma", "Photoshop", "After Effects"],
    client: "Concept · Disney+",
    imageUrl: "/disney-lionking.png",
    accent: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
    overview: "A concept redesign of the Disney+ landing experience built around a single hero title — The Lion King. The goal was to translate the emotional weight of a flagship film into a digital storefront that feels less like a catalog and more like a movie poster you can walk into.",
    challenge: "Most streaming homepages flatten every title into the same row of thumbnails. Discovery becomes noise. The challenge: how do you preserve the cinematic gravity of a tentpole film while still surfacing the long tail of Bollywood, Hollywood, Marvel and National Geographic libraries below?",
    process: [
      {
        step: "01",
        title: "Audit & mood",
        body: "Pulled 40+ reference frames from Disney's theatrical key art and competing streamers (Netflix, Apple TV+, MUBI). Identified the gap: nobody was treating the hero as a poster — they were treating it as a banner."
      },
      {
        step: "02",
        title: "Hero composition",
        body: "Built the fold around a centered lion portrait framed by parallax foliage. The pink WATCH TRAILER pill is the only saturated CTA on the page — every other interaction is monochrome white-on-glass so the eye lands here first."
      },
      {
        step: "03",
        title: "Card system",
        body: "Designed a tilt-stack module for 'Most Popular' that mimics how Blu-ray cases used to sit on a shelf. The tactility makes the curation feel hand-picked, not algorithmic."
      },
      {
        step: "04",
        title: "Brand rails",
        body: "Studio logos sit in a quiet white strip — they're trust signals, not décor. Below the fold, Top Bollywood and Top Hollywood rails return to a conventional poster grid for fast scanning."
      }
    ],
    solution: "A two-mode homepage: cinematic above the fold, library below. The hero acts as an editorial cover; the rails act as a video store. The deep purple wash unifies both modes and lets the studio brand colors (Marvel red, National Geographic yellow) punch through without clashing.",
    results: [
      { label: "Concept hero CTR (proto)", value: "+38%" },
      { label: "Time to first play", value: "-22%" },
      { label: "Frames designed", value: "26" },
      { label: "Components shipped", value: "41" }
    ],
    palette: ["#1a0530", "#3d0a5c", "#d946ef", "#fbbf24"]
  },
  {
    id: "letschat",
    index: "02",
    title: "LET'S CHAT — TEAM MESSAGING",
    subtitle: "A friendlier, faster team chat for small businesses.",
    category: "SAAS / PRODUCT UI",
    role: "PRODUCT DESIGN · UI SYSTEM",
    year: "2025",
    tools: ["Figma", "FigJam", "Lottie"],
    client: "Let's Chat Inc.",
    imageUrl: "/letschat.png",
    accent: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    overview: "A marketing site + product preview for Let's Chat, an unlimited team messaging tool targeted at small businesses. The brief: feel as friendly as a coffee-shop conversation, ship as professional as enterprise SaaS.",
    challenge: "The category is owned by Slack and Teams. Beating them on features is a losing fight. The site had to lead with personality — warmth, real faces, real conversations — and only then earn the click toward pricing.",
    process: [
      {
        step: "01",
        title: "Voice & tone",
        body: "Set a copy rule: never more than 6 words per headline above the fold. 'Have your best chat' did the heavy lifting; everything else supported."
      },
      {
        step: "02",
        title: "Photographic hero",
        body: "Used two real portraits at different scales with floating chat bubbles between them — the product UI is literally happening between two humans, not inside a sterile device frame."
      },
      {
        step: "03",
        title: "Inline product demo",
        body: "Mid-page, a full-bleed mock of the chat surface itself replaces the usual feature grid. Visitors see the actual interface before they click Try It Free."
      },
      {
        step: "04",
        title: "Trust band",
        body: "5,200 businesses · 5-star rating sit next to a real photo of a team using the product. Social proof as image, not badge."
      }
    ],
    solution: "A single-page narrative that moves from emotion (smiling faces) → product (real chat UI) → proof (rated 5 stars) → action (Try It Free). The dotted pattern motif threads the whole page together without ever becoming decorative noise.",
    results: [
      { label: "Demo request rate", value: "+54%" },
      { label: "Avg. scroll depth", value: "82%" },
      { label: "Sections", value: "5" },
      { label: "Build time", value: "11 days" }
    ],
    palette: ["#2563eb", "#3b82f6", "#dbeafe", "#0f172a"]
  },
  {
    id: "pizzabox",
    index: "03",
    title: "MR PIZZA BOX — RESTAURANT",
    subtitle: "Showcase site for a local pizzeria — order via Swiggy & Zomato.",
    category: "F&B / BRAND SITE",
    role: "BRAND · WEB DESIGN",
    year: "2024",
    tools: ["Figma", "Webflow", "Photoshop"],
    client: "Pizza Box · Vadodara",
    imageUrl: "/pizzabox.png",
    accent: "bg-orange-500/10 text-orange-300 border-orange-500/30",
    overview: "Pizza Box is a neighborhood pizzeria in Vadodara that didn't need a checkout — they already had Swiggy and Zomato. What they needed was a site that made people hungry enough to open those apps.",
    challenge: "Restaurant sites usually fail in one of two ways: they're a brochure no one reads, or they're a half-built ordering system that loses to the delivery apps anyway. We had to pick a lane — and we picked appetite.",
    process: [
      {
        step: "01",
        title: "Hero as packaging",
        body: "Led the page with the actual orange pizza box — the brand's most recognizable physical object. The cream background lets the orange scream without competing."
      },
      {
        step: "02",
        title: "Editorial split",
        body: "'MR PIZZA BOX' is set in a magazine-style mixed weight serif over a full-bleed pizza photograph. This is the section that converts hunger into intent."
      },
      {
        step: "03",
        title: "Menu as gallery",
        body: "Pizzas and pastas live in a tabbed gallery (ALL / PIZZA / PASTA / DRINKS) with a Buy pill that hands off to the delivery apps — no fake cart, no fake checkout."
      },
      {
        step: "04",
        title: "Atmosphere section",
        body: "A quiet block titled 'Comfort & Coziness' shows the dining room itself, reminding locals that dine-in is also a thing. Reviews carousel anchors the bottom."
      }
    ],
    solution: "A single scroll that performs three jobs in order: brand → appetite → handoff. Orders go to Swiggy and Zomato where the operations already work. The site stays small, fast, and honest about what it is.",
    results: [
      { label: "App handoff CTR", value: "+47%" },
      { label: "Lighthouse perf.", value: "96" },
      { label: "Menu items", value: "18" },
      { label: "Sections", value: "6" }
    ],
    palette: ["#fef3e7", "#f97316", "#1a1a1a", "#22c55e"]
  },
  {
    id: "livara",
    index: "04",
    title: "LIVARA — FASHION E-COMMERCE",
    subtitle: "Editorial fashion storefront with a countdown-driven drop.",
    category: "E-COMMERCE / FASHION",
    role: "UI · ART DIRECTION",
    year: "2025",
    tools: ["Figma", "Shopify", "Cloudinary"],
    client: "Livara",
    imageUrl: "/livara.png",
    accent: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    overview: "Livara is a fashion label that wanted their site to read more like an editorial than a Shopify theme. The product had to feel curated — every item on the page chosen, not uploaded.",
    challenge: "Most fashion DTC sites suffer from grid sameness — 12 products in a 4×3 grid, infinite scroll, nothing to remember. Livara wanted shoppers to leave with a feeling, not just a cart.",
    process: [
      {
        step: "01",
        title: "Editorial hero",
        body: "Big serif headline ('DISCOVER AND FIND YOUR OWN FASHION!') paired with a single hero portrait in a soft mint blob. The model breaks the column grid — that asymmetry sets the editorial tone."
      },
      {
        step: "02",
        title: "Best selling shelf",
        body: "Three featured products in equal-weight cards. Pastel backdrops behind each model unify the row visually even though the garments are different."
      },
      {
        step: "03",
        title: "Filter-as-tab",
        body: "'Our products' uses a quiet underline tab system (SALE / HOT / NEW / ACCESSORIES) instead of a heavy filter rail. Less chrome, faster browsing."
      },
      {
        step: "04",
        title: "Drop module",
        body: "The Exclusive Offer block uses a live countdown (Days / Hours / Mins) on a mint card to manufacture urgency without resorting to popups."
      }
    ],
    solution: "A storefront that behaves like a lookbook on the way in and a store on the way out. The deep magenta footer rebalances the soft pastels above it and gives the page a real bottom — not just a fade.",
    results: [
      { label: "Add-to-cart rate", value: "+31%" },
      { label: "Avg. session", value: "3m 42s" },
      { label: "Bounce", value: "-18%" },
      { label: "Components", value: "34" }
    ],
    palette: ["#a3e4c1", "#7c1d6f", "#fef3e7", "#0f172a"]
  }
];
function DesignShowcase() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "designs", className: "relative border-b border-white/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.25_0.08_320/0.30),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.22_0.06_240/0.35),transparent_60%)]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-6 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "02", label: "UI / UX CASE STUDIES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 mb-16 flex flex-col items-center text-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight text-white", children: [
          "UI AND UX ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]", children: "DESIGN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md font-mono uppercase tracking-widest text-xs text-white/50", children: "// FOUR SHIPPED CONCEPTS. EACH WITH PROBLEM, PROCESS, AND PROOF — THE WAY A CASE STUDY SHOULD READ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-24 md:space-y-40", children: studies.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseCard, { study: s, flipped: i % 2 === 1, onOpen: () => setOpen(s) }, s.id)) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(CaseModal, { study: open, onClose: () => setOpen(null) })
  ] });
}
function CaseCard({
  study,
  flipped,
  onOpen
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `lg:col-span-7 ${flipped ? "lg:order-2" : "lg:order-1"} group relative`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onOpen,
              className: "block w-full text-left relative overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-black", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: study.imageUrl,
                    alt: study.title,
                    loading: "lazy",
                    className: "absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover:translate-y-[-30%]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex gap-2 font-mono text-[10px] uppercase tracking-widest", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1.5 border ${study.accent}`, children: study.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 border border-white/20 bg-black/60 text-white/80", children: study.year })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono uppercase tracking-[0.3em] text-xs bg-white text-black px-4 py-3 border border-white", children: "[ READ CASE STUDY ↗ ]" }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1.5", children: study.palette.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "h-6 flex-1 border border-white/10",
              style: { background: c },
              title: c
            },
            c
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `lg:col-span-5 ${flipped ? "lg:order-1" : "lg:order-2"} space-y-6`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-widest text-white/40", children: [
        "[ ",
        study.index,
        " // CASE STUDY ]"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-3xl md:text-5xl uppercase tracking-tight leading-[0.95]", children: study.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg md:text-xl leading-snug", children: study.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-y-4 gap-x-6 font-mono text-[11px] uppercase tracking-widest border-t border-white/10 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-white/40 mb-1", children: "// ROLE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-white/90", children: study.role })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-white/40 mb-1", children: "// CLIENT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-white/90", children: study.client })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-white/40 mb-1", children: "// TOOLS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-white/90 flex flex-wrap gap-2", children: study.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 border border-white/20", children: t }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 leading-relaxed", children: study.overview }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onOpen,
          className: "inline-flex items-center gap-3 bg-white text-black px-6 py-4 font-mono uppercase tracking-[0.3em] text-xs hover:bg-white/80 transition-colors",
          children: "[ OPEN FULL CASE STUDY ↗ ]"
        }
      )
    ] })
  ] });
}
function CaseModal({ study, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "min-h-full max-w-6xl mx-auto my-0 md:my-8 bg-black border border-white/10",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 bg-black/90 backdrop-blur border-b border-white/10 px-6 md:px-10 py-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/60", children: [
                "// CASE STUDY · ",
                study.index
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "text-white/70 hover:text-white border border-white/20 px-4 py-2",
                  children: "[ CLOSE ✕ ]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-10 py-10 md:py-16 space-y-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1.5 border ${study.accent}`, children: study.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 border border-white/20 text-white/70", children: study.year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 border border-white/20 text-white/70", children: study.client })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-7xl uppercase tracking-tight leading-[0.9]", children: study.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xl md:text-2xl max-w-3xl", children: study.subtitle })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "border border-white/10 bg-white/[0.02] p-4 md:p-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: study.imageUrl,
                    alt: study.title,
                    className: "w-full h-auto block"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40 text-center", children: [
                  "// FIG.",
                  study.index,
                  " — ",
                  study.title,
                  " · FULL DESIGN"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "OVERVIEW", body: study.overview }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "THE CHALLENGE", body: study.challenge, accent: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BlockHeader, { title: "PROCESS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10 border border-white/10", children: study.process.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black p-6 md:p-8 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-widest text-white/40", children: [
                    "[ STEP ",
                    p.step,
                    " ]"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-2xl uppercase tracking-tight", children: p.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 leading-relaxed", children: p.body })
                ] }, p.step)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "THE SOLUTION", body: study.solution }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BlockHeader, { title: "RESULTS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10", children: study.results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black p-6 md:p-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl md:text-5xl tracking-tight text-white", children: r.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-[10px] uppercase tracking-widest text-white/40", children: r.label })
                ] }, r.label)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BlockHeader, { title: "COLOR PALETTE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10", children: study.palette.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black p-6 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full aspect-square border border-white/10",
                      style: { background: c }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-white/60", children: c })
                ] }, c)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-widest text-white/50", children: [
                  "// END OF CASE STUDY · ",
                  study.index
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "bg-white text-black px-6 py-4 font-mono uppercase tracking-[0.3em] text-xs hover:bg-white/80",
                    children: "[ BACK TO VAULT ↗ ]"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function BlockHeader({ title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-widest text-white/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-white/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "[ ",
      title,
      " ]"
    ] })
  ] });
}
function Block({ title, body, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlockHeader, { title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `max-w-3xl text-lg md:text-xl leading-relaxed ${accent ? "text-white" : "text-white/70"}`,
        children: body
      }
    )
  ] });
}
const modules = [
  {
    id: "01",
    title: "UI / UX & RESPONSIVE DESIGN",
    description: "User-focused layout systems engineered from initial design frames to complete screen responsiveness. Crafting modern, creative digital spaces tailored to unique brand identities.",
    services: ["UI/UX Design", "Responsive Web Design", "User-Focused Design"],
    badge: "[ LAYER_COMPONENTS: STABLE ]",
    className: "md:col-span-7 md:row-span-2",
    variant: "tools",
    microTag: "[ TOOL_MATRIX: ACTIVE ]"
  },
  {
    id: "02",
    title: "FIGMA TO FRAMER // HTML • CSS • JS",
    description: "Transforming design prototypes into ultra-fast, animated, functional web systems. Clean-coded logic layers and fluid interaction frameworks built with native code structures.",
    services: ["Website Design & Development", "Creative Websites", "Modern Layout Production"],
    badge: "[ FRAME_RATE: 60FPS // EXECUTION ]",
    className: "md:col-span-5",
    variant: "stepper",
    microTag: "[ SPRINT_VELOCITY: OPTIMIZED ]"
  },
  {
    id: "03",
    title: "LANDING PAGES & CONVERSION STRUCTURES",
    description: "High-end landing pages designed with strict psychological flow to capture leads instantly, combined with structural SEO optimization to secure top search visibility.",
    services: ["Landing Page Design", "SEO Optimization"],
    badge: "[ ACCELERATION: ACTIVE // INDEXED ]",
    className: "md:col-span-5",
    variant: "timeline",
    microTag: "[ CONV_INDEX: +218% ]"
  },
  {
    id: "04",
    title: "WEBSITE REDESIGN & ONGOING MAINTENANCE",
    description: "Comprehensive overhaul strategies for outdated systems alongside constant ecosystem maintenance. Regular code optimization, security patches, and structural feature scaling.",
    services: ["Website Redesign", "Website Maintenance"],
    badge: "[ SYSTEM_STATE: AGENT_SUPPORT ]",
    className: "md:col-span-12",
    variant: "maintenance",
    microTag: "[ UPTIME: 99.98% ]"
  }
];
const spring = { type: "spring", stiffness: 120, damping: 18 };
const hoverSpring = { type: "spring", stiffness: 140, damping: 16 };
const orbitTools = [
  { label: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { label: "Framer", logo: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  { label: "Shopify", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
  { label: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
  { label: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
  { label: "Illustrator", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
  { label: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
];
const steps = ["INTAKE", "WIREFRAME", "FRAMER BUILD", "LOGIC HANDOFF"];
const timeline = [
  { q: "Q.01", label: "INTAKE PROTOCOL", value: "BRIEF // DNA SCAN" },
  { q: "Q.02", label: "ARCHITECTURE", value: "WIREFRAME // TOKENS" },
  { q: "Q.03", label: "ENGAGEMENT MODEL", value: "SPRINT_VELOCITY: OPTIMIZED" },
  { q: "Q.04", label: "MOTION CORE", value: "FRAMER // GSAP LAYER" },
  { q: "Q.05", label: "DEPLOYMENT", value: "EDGE // 60FPS" },
  { q: "Q.06", label: "MAINTAIN", value: "AGENT_SUPPORT: ON" }
];
function FloatingToolMatrix() {
  const [hovered, setHovered] = reactExports.useState(false);
  const radius = 120;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative mt-8 h-[300px] md:h-[360px] w-full overflow-hidden border border-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_65%)]",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute border border-white/10 rounded-full",
              style: { width: radius * 2, height: radius * 2 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute border border-dashed border-white/5 rounded-full",
              style: { width: radius * 2 + 40, height: radius * 2 + 40 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute flex flex-col items-center gap-2 z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.9)] animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-widest text-white/70", children: "[ ALAVA_CORE ]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: 360 },
              transition: {
                duration: hovered ? 40 : 20,
                repeat: Infinity,
                ease: "linear"
              },
              className: "absolute",
              style: { width: radius * 2, height: radius * 2 },
              children: orbitTools.map((t, i) => {
                const angle = i / orbitTools.length * 360;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-1/2 left-1/2",
                    style: {
                      transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { rotate: -360 },
                        transition: {
                          duration: hovered ? 40 : 20,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        className: "-translate-x-1/2 -translate-y-1/2",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            whileHover: { scale: 1.1, transition: hoverSpring },
                            className: "flex items-center gap-1.5 border border-white/10 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full hover:border-white/40 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all cursor-default",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: t.logo,
                                  alt: t.label,
                                  className: "h-3.5 w-3.5 object-contain",
                                  loading: "lazy"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs tracking-wide text-white whitespace-nowrap", children: t.label })
                            ]
                          }
                        )
                      }
                    )
                  },
                  t.label
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-3 font-mono text-[9px] tracking-widest text-white/30", children: "[ ECOSYSTEM_ORBIT // REVOLVING ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 right-3 flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-emerald-400 animate-pulse" }),
          " SYNCED"
        ] })
      ]
    }
  );
}
function HorizontalStepper() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-6 mb-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        whileHover: { scale: 1.08, transition: hoverSpring },
        className: "flex-1 border border-white/15 bg-white/[0.03] px-2 py-2 text-center font-mono text-[9px] md:text-[10px] tracking-widest text-white/70 hover:text-white hover:border-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)] transition-all",
        children: [
          "[ ",
          s,
          " ]"
        ]
      }
    ),
    i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1 font-mono text-[10px] text-white/30", children: "──▶" })
  ] }, s)) }) });
}
function TimelineGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-3 gap-2", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      whileHover: { scale: 1.04, transition: hoverSpring },
      initial: { opacity: 0, y: 12 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { ...spring, delay: i * 0.04 },
      className: "border border-white/10 bg-white/[0.02] p-3 hover:border-white/30 hover:shadow-[0_0_18px_rgba(255,255,255,0.08)] transition-all",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] tracking-widest text-emerald-400/80 mb-1", children: t.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans text-xs font-bold uppercase tracking-tight text-white mb-2 leading-tight", children: t.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] tracking-wider text-white/40", children: [
          "[ ",
          t.value,
          " ]"
        ] })
      ]
    },
    t.q
  )) });
}
function MaintenanceBar() {
  const ticks = ["MONITOR", "PATCH", "OPTIMIZE", "SCALE", "AUDIT", "REPORT"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-6 gap-2", children: ticks.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      animate: { y: [0, -4, 0] },
      transition: { duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" },
      whileHover: { scale: 1.08, transition: hoverSpring },
      className: "border border-white/10 bg-white/[0.02] px-3 py-3 flex items-center justify-between hover:border-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)] transition-all",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] tracking-widest text-white/70", children: [
          "[ ",
          t,
          " ]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" })
      ]
    },
    t
  )) });
}
function CraftStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stack", className: "border-b border-white/10 bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-10 py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-mono text-xs uppercase tracking-widest", children: "[ 03 // HOW WE WORK ]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight text-white", children: [
        "HOW WE ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]", children: "WORK" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-12 md:auto-rows-[minmax(260px,auto)] gap-3 md:gap-4", children: modules.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { ...spring, delay: i * 0.05 },
        whileHover: { backgroundColor: "rgba(255,255,255,0.02)" },
        className: `group relative border border-white/10 hover:border-white/30 transition-colors duration-300 p-7 md:p-9 flex flex-col overflow-hidden ${m.className}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between font-mono text-[10px] tracking-widest text-white/40 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "MODULE // ",
              m.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-emerald-400 animate-pulse" }),
              "ONLINE"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans tracking-tight text-xl md:text-2xl font-black text-white uppercase leading-[1.05] mb-5", children: m.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm md:text-base leading-relaxed font-normal text-slate-400 max-w-2xl", children: m.description }),
            m.variant === "tools" && /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingToolMatrix, {}),
            m.variant === "stepper" && /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalStepper, {}),
            m.variant === "timeline" && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineGrid, {}),
            m.variant === "maintenance" && /* @__PURE__ */ jsxRuntimeExports.jsx(MaintenanceBar, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-auto pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-2 items-end", children: m.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.li,
              {
                whileHover: { scale: 1.08, transition: hoverSpring },
                className: "font-mono text-[10px] uppercase tracking-wider text-white/70 border border-white/15 px-2.5 py-1 group-hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] hover:text-white transition-all",
                children: [
                  "[ ",
                  s.toUpperCase(),
                  " ]"
                ]
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:items-end gap-1", children: [
              m.microTag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 font-mono text-[10px] tracking-wider", children: m.microTag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 font-mono text-[10px] tracking-wider whitespace-nowrap", children: m.badge })
            ] })
          ] })
        ]
      },
      m.id
    )) })
  ] }) });
}
const tiers = [
  {
    id: "basic",
    name: "BASIC",
    price: "₹5,007.27",
    architecture: "1 Landing Page (Up to 4 sections) + CTA Structured UX. Business-ready.",
    delivery: "2-day delivery • 2 Revisions",
    buttonText: "ENGAGE BASIC DEPLOYMENT",
    features: [
      "1 Functional Page",
      "Responsive Design Structure",
      "Content Asset Handoff",
      "1 Plugin Integration"
    ]
  },
  {
    id: "standard",
    name: "STANDARD",
    price: "₹20,029.07",
    architecture: "Full Multi-Page Website (3-5 Pages) + CTA Structured UX. Business-ready.",
    delivery: "5-day delivery • 3 Revisions",
    buttonText: "ENGAGE STANDARD DEPLOYMENT",
    features: [
      "3 Functional Pages",
      "Responsive Design Structure",
      "Content Asset Handoff",
      "3 Plugin/Extension Integrations"
    ],
    popular: true
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "₹40,058.14",
    architecture: "Premium Multi-Page Site (Up to 8 pages) OR Full E-Commerce store.",
    delivery: "10-day delivery • 4 Revisions",
    buttonText: "ENGAGE PREMIUM DEPLOYMENT",
    features: [
      "8 Functional Pages",
      "Responsive Design Structure",
      "Content Asset Handoff",
      "7 Plugin/Extension Integrations"
    ]
  }
];
function CheckIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "#10b981", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" }) }) });
}
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative border-b border-white/10 bg-[#0a0a0c] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-6 md:px-10 py-24 md:py-32 max-w-[1200px] mx-auto z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16 md:mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-3xl md:text-4xl text-white font-bold tracking-tight mb-4", children: "Simple and Affordable Pricing Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-slate-400 text-base md:text-lg", children: "Start tracking and improving your finance management with structured design." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8", children: tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative flex flex-col p-8 md:p-10 rounded-2xl bg-[#121214]/60 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${tier.popular ? "border-white/10 shadow-2xl" : "border-white/5"}`,
          children: [
            tier.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" }),
            tier.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-slate-700/80 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-widest border border-white/10 shadow-lg", children: "Most Popular" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: `font-sans font-medium mb-4 ${tier.popular ? "text-white text-lg" : "text-slate-300 text-lg"}`,
                  children: tier.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans font-bold text-3xl text-white mb-2 tracking-tight", children: tier.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 mb-6", children: tier.delivery }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-slate-400 leading-relaxed", children: tier.architecture })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `w-full py-3.5 px-4 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 mb-8 ${tier.popular ? "bg-gradient-to-r from-[#FF6B4A] to-[#FF4F27] text-white rounded-xl shadow-[0_4px_14px_rgba(255,107,74,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,74,0.4)]" : "bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10"}`,
                children: tier.buttonText
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-white/5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#121214] px-3 text-[10px] font-medium tracking-widest text-slate-500 uppercase", children: "Features" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: tier.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "font-sans text-sm text-slate-300 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckIcon, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
            ] }, i)) })
          ]
        },
        tier.id
      )) })
    ] })
  ] });
}
const phases = [
  { code: "01 // DISCOVERY", title: "Discovery & Research", desc: "We start by understanding your business, goals, audience, and competitors. This helps us create a clear strategy before any design work begins." },
  { code: "02 // PLANNING", title: "Design & Planning", desc: "Next, we create wireframes and design concepts that define the structure, user experience, and visual direction of the website." },
  { code: "03 // MOTION", title: "Interactions & Refinement", desc: "We add smooth animations, transitions, and interactive elements that make the website feel engaging without sacrificing usability." },
  { code: "04 // LAUNCH", title: "Development & Launch", desc: "Finally, we build the website, optimize it for speed and performance, connect any required CMS or integrations, and launch it with full testing and support." }
];
function Pipeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pipeline", className: "border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-10 py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "03", label: "DEPLOYMENT PROCESS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 mb-20", children: [
      "The deployment ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "process." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8 md:pl-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 md:left-8 top-0 bottom-0 w-px bg-white/10" }),
      phases.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative group py-10 md:py-14 border-t border-white/10 hover:bg-white/[0.03] transition-colors duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[26px] md:-left-[34px] top-12 h-3 w-3 bg-black border border-white/40 group-hover:bg-signal group-hover:border-signal transition-colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-6 items-start px-2 md:px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-signal transition-colors", children: p.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "md:col-span-5 font-display font-bold uppercase text-3xl md:text-5xl tracking-tight leading-[0.95]", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-4 font-mono text-sm text-white/50 tracking-wide leading-relaxed", children: p.desc })
            ] })
          ]
        },
        p.code
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10" })
    ] })
  ] }) });
}
function IntakeForm() {
  const [sent, setSent] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const formRef = reactExports.useRef(null);
  const handleMouseMove = reactExports.useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);
  const handleFormMouseMove = reactExports.useCallback((e) => {
    const el = formRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    el.style.setProperty("--form-mouse-x", `${x}%`);
    el.style.setProperty("--form-mouse-y", `${y}%`);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "brief",
      ref: containerRef,
      onMouseMove: handleMouseMove,
      className: "relative border-b border-white/10 bg-black overflow-hidden",
      style: {
        "--mouse-x": "50%",
        "--mouse-y": "50%"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 z-0",
            style: {
              background: "radial-gradient(circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(52, 211, 153, 0.12) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none",
            style: {
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-20 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "04", label: "GET IN TOUCH" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]", children: "Get In Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-20 bg-white/20 my-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-xs uppercase tracking-[0.3em] text-white font-bold mb-4", children: "Let's Build Something Great Together" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm md:text-base text-white/50 max-w-xl leading-relaxed", children: "Whether it's a new website, a redesign, or a custom digital experience, we'd love to hear about it." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-white/10 bg-black/45 backdrop-blur-md p-6 md:p-12 shadow-2xl rounded-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-8 pr-0 lg:pr-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans font-semibold text-[10px] text-slate-500 uppercase tracking-widest mb-4", children: "[ SECURE_LINK PROTOCOLS ]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=alavadesigner@gmail.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group block p-6 border border-white/5 bg-white/[0.01] hover:border-signal/30 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(52,211,153,0.05)] transition-all duration-300 relative overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 group-hover:text-signal transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans text-[10px] text-white/40 tracking-widest uppercase mb-2", children: "// EMAIL" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans font-bold text-lg md:text-xl text-white group-hover:text-signal transition-colors break-all leading-tight", children: "alavadesigner@gmail.com" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-sans text-[10px] text-white/30 mt-3 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1.5 uppercase", children: [
                      "Open in Gmail ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 10 })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group block p-6 border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-300 relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-60 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans text-[10px] text-white/40 tracking-widest uppercase mb-2", children: "// STUDIO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans font-black text-lg md:text-xl text-white tracking-tight uppercase mb-1", children: "ALAVA Web Designers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans text-sm text-white/60", children: "Vadodara, Gujarat, India" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group block p-6 border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-300 relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-60 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans text-[10px] text-white/40 tracking-widest uppercase mb-2", children: "// RESPONSE TIME" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans text-base text-white/80", children: "Usually within 24 hours on weekdays" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-white/5 font-sans text-[10px] text-white/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 ALAVA WEB DESIGNERS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "SYSTEM SECURITY // ALL PROTOCOLS PROPRIETARY" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                ref: formRef,
                onMouseMove: handleFormMouseMove,
                className: "lg:col-span-7 space-y-8 border border-white/10 bg-white/[0.01] p-6 md:p-10 relative overflow-hidden transition-all duration-300 rounded-none hover:border-signal/20 group/panel",
                style: {
                  "--form-mouse-x": "50%",
                  "--form-mouse-y": "50%"
                },
                onSubmit: (e) => {
                  e.preventDefault();
                  setSent(true);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300",
                      style: {
                        background: "radial-gradient(circle 350px at var(--form-mouse-x, 50%) var(--form-mouse-y, 50%), rgba(52, 211, 153, 0.28) 0%, rgba(52, 211, 153, 0.05) 50%, transparent 85%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 font-sans font-semibold text-[10px] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.45)] uppercase tracking-widest mb-4", children: "[ TRANSMISSION PANEL ]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "IDENTITY / COMPANY NAME", name: "name", placeholder: "Enter your name or agency..." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "SECURE MAIL RELAY", name: "email", type: "email", placeholder: "name@domain.com" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-sans font-semibold text-xs uppercase tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] block", children: "Tell Us About Your Project" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        rows: 5,
                        required: true,
                        className: "w-full bg-black/45 border border-white/10 p-5 font-sans text-sm text-white placeholder:text-white/20 focus:border-signal/50 focus:bg-black/75 focus:shadow-[0_0_15px_rgba(52,211,153,0.06)] focus:outline-none transition-all duration-300 resize-none",
                        placeholder: "Share your goals, project requirements, timeline, and any ideas you already have in mind."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: sent,
                      className: `relative z-10 w-full font-sans font-semibold uppercase tracking-[0.3em] text-xs md:text-sm py-6 transition-all duration-500 flex items-center justify-center gap-3 border ${sent ? "bg-signal/15 border-signal text-signal shadow-[0_0_15px_rgba(52,211,153,0.1)]" : "bg-white text-black border-white hover:bg-signal hover:border-signal hover:text-black hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]"}`,
                      children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "animate-bounce" }),
                        " // MESSAGE TRANSMITTED ✓"
                      ] }) : "[ Start Your Project → ]"
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 relative z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-sans font-semibold text-xs uppercase tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] block", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name,
        type,
        required: true,
        placeholder,
        className: "w-full bg-black/45 border border-white/10 py-3.5 px-4 font-sans text-sm text-white placeholder:text-white/20 focus:border-signal/50 focus:bg-black/75 focus:shadow-[0_0_15px_rgba(52,211,153,0.06)] focus:outline-none transition-all duration-300"
      }
    )
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs uppercase tracking-widest text-white/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-signal animate-pulse-dot" }),
      "ALAVA SYSTEM — ONLINE"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "v2.6 // BUILT IN VADODARA, INDIA" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 — ALL CORES RESERVED" })
  ] }) });
}
function FloatingDock() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const socialLinks = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
      href: "https://wa.me/919173910955",
      color: "hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]",
      bgColor: "bg-emerald-500/10",
      accent: "text-emerald-400"
    },
    {
      id: "gmail",
      name: "Gmail",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }),
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=alavadesigner@gmail.com",
      color: "hover:text-red-400 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]",
      bgColor: "bg-red-500/10",
      accent: "text-red-400"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 }),
      href: "https://www.linkedin.com/in/priyanshu-kumar-b10457253",
      color: "hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
      bgColor: "bg-blue-500/10",
      accent: "text-blue-400"
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 }),
      href: "https://www.instagram.com/d.e.s.i.n.r?igsh=MXVtNXR0NDljaXZyNg%3D%3D&utm_source=qr",
      color: "hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]",
      bgColor: "bg-fuchsia-500/10",
      accent: "text-fuchsia-400"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-6 right-6 z-50 font-mono text-xs select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: {
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          },
          hidden: {}
        },
        className: "flex flex-col items-end gap-3",
        children: socialLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: {
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 15, scale: 0.8 }
            },
            transition: { type: "spring", stiffness: 260, damping: 20 },
            className: "flex items-center gap-3 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 border border-white/10 text-white/80 px-3 py-1.5 uppercase tracking-widest text-[9px] pointer-events-none shadow-xl backdrop-blur-sm", children: link.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/90 text-white/60 backdrop-blur-sm transition-all duration-300 ${link.color}`,
                  children: link.icon
                }
              )
            ]
          },
          link.id
        ))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: () => setIsOpen(!isOpen),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: `relative flex h-14 w-14 items-center justify-center rounded-full border bg-black/95 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 ${isOpen ? "border-red-500/40 hover:border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.25)]" : "border-white/15 hover:border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.08)]"}`,
        children: [
          !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-0 right-0 flex h-3 w-3 -mt-0.5 -mr-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-emerald-400 border border-black" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-5 w-5 flex items-center justify-center", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-red-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 20, className: "text-white" }) })
        ]
      }
    )
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Preloader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-black text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkGallery, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DesignShowcase, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CraftStack, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pipeline, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IntakeForm, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingDock, {})
    ] })
  ] });
}
export {
  Index as component
};
