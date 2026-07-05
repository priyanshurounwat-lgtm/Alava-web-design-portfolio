import { SectionLabel } from "./WorkGallery";

const phases = [
  { code: "01 // DISCOVERY", title: "Discovery & Research", desc: "We start by understanding your business, goals, audience, and competitors. This helps us create a clear strategy before any design work begins." },
  { code: "02 // PLANNING", title: "Design & Planning", desc: "Next, we create wireframes and design concepts that define the structure, user experience, and visual direction of the website." },
  { code: "03 // MOTION", title: "Interactions & Refinement", desc: "We add smooth animations, transitions, and interactive elements that make the website feel engaging without sacrificing usability." },
  { code: "04 // LAUNCH", title: "Development & Launch", desc: "Finally, we build the website, optimize it for speed and performance, connect any required CMS or integrations, and launch it with full testing and support." },
];

export function Pipeline() {
  return (
    <section id="pipeline" className="border-b border-white/10">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <SectionLabel index="03" label="DEPLOYMENT PROCESS" />
        <h2 className="font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 mb-20">
          The deployment <br />
          <span className="text-white/40">process.</span>
        </h2>

        <div className="relative pl-8 md:pl-20">
          <div className="absolute left-2 md:left-8 top-0 bottom-0 w-px bg-white/10" />
          {phases.map((p) => (
            <div
              key={p.code}
              className="relative group py-10 md:py-14 border-t border-white/10 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="absolute -left-[26px] md:-left-[34px] top-12 h-3 w-3 bg-black border border-white/40 group-hover:bg-signal group-hover:border-signal transition-colors" />
              <div className="grid md:grid-cols-12 gap-6 items-start px-2 md:px-6">
                <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-signal transition-colors">
                  {p.code}
                </div>
                <h3 className="md:col-span-5 font-display font-bold uppercase text-3xl md:text-5xl tracking-tight leading-[0.95]">
                  {p.title}
                </h3>
                <p className="md:col-span-4 font-mono text-sm text-white/50 tracking-wide leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
