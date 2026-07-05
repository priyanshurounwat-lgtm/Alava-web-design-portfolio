import { SectionLabel } from "./WorkGallery";

type Tile = {
  code: string;
  title: string;
  body: string;
  className: string;
};

const tiles: Tile[] = [
  {
    code: "Q.01",
    title: "TIMELINE PROTOCOL",
    body: "14–21 Business Days from intake validation to production handoff.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    code: "Q.02",
    title: "CORE TECH STACK",
    body: "Figma for architecture. Framer & Webflow for production deployment.",
    className: "md:col-span-2",
  },
  {
    code: "Q.03",
    title: "ENGAGEMENT MODEL",
    body: "Fixed-scope sprints or retained partnership tracks.",
    className: "",
  },
  {
    code: "Q.04",
    title: "REVISION LOOPS",
    body: "Two structured review cycles per milestone — async via Loom + Linear.",
    className: "",
  },
  {
    code: "Q.05",
    title: "OWNERSHIP TRANSFER",
    body: "Full source, CMS keys, and component libraries delivered on signoff.",
    className: "md:col-span-2",
  },
  {
    code: "Q.06",
    title: "POST-LAUNCH SUPPORT",
    body: "30-day stabilization window + optional ongoing care plan.",
    className: "md:col-span-2",
  },
];

export function FaqBento() {
  return (
    <section id="faq" className="border-b border-white/10">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <SectionLabel index="03" label="PARADIGM REASSURANCE" />
        <h2 className="font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 mb-16">
          Studio FAQ <br />
          <span className="text-white/40">in blocks.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-3">
          {tiles.map((t) => (
            <div
              key={t.code}
              className={`magnetic-tile border border-white/10 p-6 md:p-8 flex flex-col justify-between ${t.className}`}
            >
              <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-white/40">
                <span>{t.code}</span>
                <span>·</span>
              </div>
              <div>
                <h3 className="font-display font-bold uppercase text-xl md:text-2xl tracking-tight text-white mb-3 leading-tight">
                  {t.title}
                </h3>
                <p className="font-mono text-xs md:text-sm uppercase tracking-wide text-white/60 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
