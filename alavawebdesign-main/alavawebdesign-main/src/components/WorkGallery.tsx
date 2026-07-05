type Work = {
  idx: string;
  title: string;
  stack: string;
  projectImageUrl: string;
  liveWebsiteUrl: string;
};

const works: Work[] = [
  {
    idx: "01",
    title: "VIJAY EYE HOSPITAL",
    stack: "HEALTHCARE / LIVE CLIENT",
    projectImageUrl: "/vijay-eye-hospital.png",
    liveWebsiteUrl: "https://www.vijayeyehospital.in/",
  },
  {
    idx: "02",
    title: "HARMONY DENTAL CLINIC",
    stack: "DENTAL CLINIC / NETLIFY",
    projectImageUrl: "/harmony-dental.png",
    liveWebsiteUrl: "https://harmonydentalclinic.netlify.app",
  },
  {
    idx: "03",
    title: "HOLISTIC INFLUENCE",
    stack: "COFFEE SHOP / FRAMER",
    projectImageUrl: "/holistic-influence.png",
    liveWebsiteUrl: "https://holistic-influence-487375.framer.app",
  },
  {
    idx: "04",
    title: "SABITH M A",
    stack: "E-COMMERCE STORE / FRAMER",
    projectImageUrl: "/sabith-portfolio.png",
    liveWebsiteUrl: "https://thankful-checkbox-910164.framer.app",
  },
  {
    idx: "05",
    title: "FUEL X",
    stack: "PORTFOLIO / FRAMER",
    projectImageUrl: "/homely-talk.png",
    liveWebsiteUrl: "https://homely-talk-145656.framer.app/",
  },
  {
    idx: "06",
    title: "Coming Soon",
    stack: "Our next project is on the way",
    projectImageUrl: "/coming-soon.png",
    liveWebsiteUrl: "#brief",
  },
];

export function WorkGallery() {
  return (
    <section id="works" className="relative border-b border-white/10 overflow-hidden bg-black">
      {/* Clean static ambient layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-10 py-20 md:py-28 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <SectionLabel index="01" label="SELECTED WORKS" />
          <h2 className="font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 mb-16 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Our best works.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {works.map((w) => {
            const isInternal = w.liveWebsiteUrl.startsWith("#");
            return (
              <a
                key={w.idx}
                href={w.liveWebsiteUrl}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                className="group relative block overflow-hidden border border-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] transition-all duration-500 bg-neutral-950 aspect-[4/3]"
              >
                <img
                  src={w.projectImageUrl}
                  alt={w.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500" />

                <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">INDEX: {w.idx}</span>
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">{w.stack}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-3xl md:text-5xl tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">
                      {w.title}
                    </h3>
                    <div className="mt-4 overflow-hidden">
                      <span className="inline-block font-mono uppercase tracking-[0.3em] text-xs bg-white text-black px-4 py-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {isInternal ? "[ START YOUR PROJECT ]" : "[ VISIT LIVE WEBSITE ↗ ]"}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-pulse" />
      <span className="text-signal font-mono text-xs uppercase tracking-widest">
        [ {index} // {label} ]
      </span>
    </div>
  );
}
