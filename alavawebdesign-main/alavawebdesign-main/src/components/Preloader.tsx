import { useEffect, useMemo, useState } from "react";

const BRAND = "ALAVA WEB DESIGNERS";
const STAR_COUNT = 45;
const CLUSTER_COUNT = 18;

type Star = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

function useStars(count: number, seed: number): Star[] {
  return useMemo(() => {
    // simple seeded RNG so SSR & client match
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
      duration: 1.6 + rand() * 1.8,
    }));
  }, [count, seed]);
}

export function Preloader() {
  const [phase, setPhase] = useState<"stars" | "text" | "hold" | "exit" | "gone">("stars");

  useEffect(() => {
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

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
        exiting ? "opacity-0 scale-[1.04] pointer-events-none" : "opacity-100 scale-100"
      }`}
      aria-hidden={exiting}
    >
      {/* Starfield */}
      {stars.map((st, i) => (
        <span
          key={`s-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: `${st.top}%`,
            left: `${st.left}%`,
            width: `${st.size}px`,
            height: `${st.size}px`,
            animation: `star-twinkle ${st.duration}s ease-in-out ${st.delay}s infinite`,
            opacity: 0.2,
            boxShadow: "0 0 4px rgba(255,255,255,0.6)",
          }}
        />
      ))}

      {/* Centered constellation + text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Cluster stars around the title */}
          {(phase === "text" || phase === "hold") &&
            cluster.map((st, i) => (
              <span
                key={`c-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  top: `${(st.top - 50) * 1.6 + 50}%`,
                  left: `${(st.left - 50) * 1.6 + 50}%`,
                  width: `${st.size}px`,
                  height: `${st.size}px`,
                  animation: `star-twinkle ${st.duration}s ease-in-out ${st.delay}s infinite, cluster-in 0.6s ease-out both`,
                  boxShadow: "0 0 6px rgba(255,255,255,0.9)",
                }}
              />
            ))}

          {/* Brand text */}
          <h1
            className="relative flex flex-wrap justify-center font-display font-bold uppercase text-white text-2xl md:text-5xl tracking-[0.18em] md:tracking-[0.22em] px-6"
            aria-label={BRAND}
          >
            {BRAND.split("").map((ch, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  opacity: 0,
                  transform: "translateX(-0.4em)",
                  animation:
                    phase !== "stars"
                      ? `char-reveal 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms forwards`
                      : "none",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
}
