import { motion } from "framer-motion";

const archives = [
  {
    id: "V.01",
    title: "E-COMMERCE CORE PROTOCOL",
    stack: "React • Shopify API",
    status: "DEPLOYED // LIVE"
  },
  {
    id: "V.02",
    title: "MINIMALIST INTERACTIVE GRID LABS",
    stack: "Figma • Framer Motion",
    status: "EXPERIMENTAL"
  },
  {
    id: "V.03",
    title: "HIGHSPEED MEAN STACK BOILERPLATE",
    stack: "MongoDB • Node.js",
    status: "SOURCE // REPO"
  },
  {
    id: "V.04",
    title: "AUDIO ELECTRONICS PROMO LANDING",
    stack: "HTML5 • Tailwind CSS",
    status: "PRODUCTION"
  }
];

export function ArchiveVault() {
  return (
    <section id="vault" className="border-b border-white/10 bg-black">
      <style>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
      
      <div className="px-6 md:px-10 py-20 md:py-28 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
            [ 04 // THE DESIGN & DEVELOPMENT VAULT ]
          </span>
        </div>

        {/* Relative container with hidden overflow for the laser line */}
        <div className="relative overflow-hidden border border-white/10 bg-black">
          {/* The Laser Line */}
          <div className="absolute left-0 w-full z-10 pointer-events-none animate-scan flex flex-col items-center">
            <div className="w-full h-[1px] bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]" />
            <div className="w-full h-24 bg-gradient-to-b from-red-500/30 via-red-500/10 to-transparent" />
          </div>

          <div className="flex flex-col">
            {archives.map((item) => (
              <motion.div
                key={item.id}
                whileHover="hover"
                initial="initial"
                className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center p-6 md:p-8 border-b border-white/10 last:border-b-0 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer"
              >
                <div className="lg:col-span-1 font-mono text-xs md:text-sm tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">
                  {item.id}
                </div>
                <div className="lg:col-span-4 font-sans font-bold text-base md:text-lg text-white tracking-tight">
                  {item.title}
                </div>
                <div className="lg:col-span-3 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  [{item.stack}]
                </div>
                <div className="lg:col-span-2 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                  [{item.status}]
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <motion.div
                    variants={{
                      initial: { x: 0, color: "rgba(255,255,255,0.4)" },
                      hover: { x: 8, color: "rgba(255,255,255,1)" }
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap mt-2 lg:mt-0"
                  >
                    LAUNCH ARCHIVE ↗
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
