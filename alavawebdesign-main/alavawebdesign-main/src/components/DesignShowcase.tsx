import { useState } from "react";
import { SectionLabel } from "./WorkGallery";

type CaseStudy = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  year: string;
  tools: string[];
  client: string;
  imageUrl: string;
  accent: string; // tailwind classes for accent bg
  overview: string;
  challenge: string;
  process: { step: string; title: string; body: string }[];
  solution: string;
  results: { label: string; value: string }[];
  palette: string[];
};

const studies: CaseStudy[] = [
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
    overview:
      "A concept redesign of the Disney+ landing experience built around a single hero title — The Lion King. The goal was to translate the emotional weight of a flagship film into a digital storefront that feels less like a catalog and more like a movie poster you can walk into.",
    challenge:
      "Most streaming homepages flatten every title into the same row of thumbnails. Discovery becomes noise. The challenge: how do you preserve the cinematic gravity of a tentpole film while still surfacing the long tail of Bollywood, Hollywood, Marvel and National Geographic libraries below?",
    process: [
      {
        step: "01",
        title: "Audit & mood",
        body: "Pulled 40+ reference frames from Disney's theatrical key art and competing streamers (Netflix, Apple TV+, MUBI). Identified the gap: nobody was treating the hero as a poster — they were treating it as a banner.",
      },
      {
        step: "02",
        title: "Hero composition",
        body: "Built the fold around a centered lion portrait framed by parallax foliage. The pink WATCH TRAILER pill is the only saturated CTA on the page — every other interaction is monochrome white-on-glass so the eye lands here first.",
      },
      {
        step: "03",
        title: "Card system",
        body: "Designed a tilt-stack module for 'Most Popular' that mimics how Blu-ray cases used to sit on a shelf. The tactility makes the curation feel hand-picked, not algorithmic.",
      },
      {
        step: "04",
        title: "Brand rails",
        body: "Studio logos sit in a quiet white strip — they're trust signals, not décor. Below the fold, Top Bollywood and Top Hollywood rails return to a conventional poster grid for fast scanning.",
      },
    ],
    solution:
      "A two-mode homepage: cinematic above the fold, library below. The hero acts as an editorial cover; the rails act as a video store. The deep purple wash unifies both modes and lets the studio brand colors (Marvel red, National Geographic yellow) punch through without clashing.",
    results: [
      { label: "Concept hero CTR (proto)", value: "+38%" },
      { label: "Time to first play", value: "-22%" },
      { label: "Frames designed", value: "26" },
      { label: "Components shipped", value: "41" },
    ],
    palette: ["#1a0530", "#3d0a5c", "#d946ef", "#fbbf24"],
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
    overview:
      "A marketing site + product preview for Let's Chat, an unlimited team messaging tool targeted at small businesses. The brief: feel as friendly as a coffee-shop conversation, ship as professional as enterprise SaaS.",
    challenge:
      "The category is owned by Slack and Teams. Beating them on features is a losing fight. The site had to lead with personality — warmth, real faces, real conversations — and only then earn the click toward pricing.",
    process: [
      {
        step: "01",
        title: "Voice & tone",
        body: "Set a copy rule: never more than 6 words per headline above the fold. 'Have your best chat' did the heavy lifting; everything else supported.",
      },
      {
        step: "02",
        title: "Photographic hero",
        body: "Used two real portraits at different scales with floating chat bubbles between them — the product UI is literally happening between two humans, not inside a sterile device frame.",
      },
      {
        step: "03",
        title: "Inline product demo",
        body: "Mid-page, a full-bleed mock of the chat surface itself replaces the usual feature grid. Visitors see the actual interface before they click Try It Free.",
      },
      {
        step: "04",
        title: "Trust band",
        body: "5,200 businesses · 5-star rating sit next to a real photo of a team using the product. Social proof as image, not badge.",
      },
    ],
    solution:
      "A single-page narrative that moves from emotion (smiling faces) → product (real chat UI) → proof (rated 5 stars) → action (Try It Free). The dotted pattern motif threads the whole page together without ever becoming decorative noise.",
    results: [
      { label: "Demo request rate", value: "+54%" },
      { label: "Avg. scroll depth", value: "82%" },
      { label: "Sections", value: "5" },
      { label: "Build time", value: "11 days" },
    ],
    palette: ["#2563eb", "#3b82f6", "#dbeafe", "#0f172a"],
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
    overview:
      "Pizza Box is a neighborhood pizzeria in Vadodara that didn't need a checkout — they already had Swiggy and Zomato. What they needed was a site that made people hungry enough to open those apps.",
    challenge:
      "Restaurant sites usually fail in one of two ways: they're a brochure no one reads, or they're a half-built ordering system that loses to the delivery apps anyway. We had to pick a lane — and we picked appetite.",
    process: [
      {
        step: "01",
        title: "Hero as packaging",
        body: "Led the page with the actual orange pizza box — the brand's most recognizable physical object. The cream background lets the orange scream without competing.",
      },
      {
        step: "02",
        title: "Editorial split",
        body: "'MR PIZZA BOX' is set in a magazine-style mixed weight serif over a full-bleed pizza photograph. This is the section that converts hunger into intent.",
      },
      {
        step: "03",
        title: "Menu as gallery",
        body: "Pizzas and pastas live in a tabbed gallery (ALL / PIZZA / PASTA / DRINKS) with a Buy pill that hands off to the delivery apps — no fake cart, no fake checkout.",
      },
      {
        step: "04",
        title: "Atmosphere section",
        body: "A quiet block titled 'Comfort & Coziness' shows the dining room itself, reminding locals that dine-in is also a thing. Reviews carousel anchors the bottom.",
      },
    ],
    solution:
      "A single scroll that performs three jobs in order: brand → appetite → handoff. Orders go to Swiggy and Zomato where the operations already work. The site stays small, fast, and honest about what it is.",
    results: [
      { label: "App handoff CTR", value: "+47%" },
      { label: "Lighthouse perf.", value: "96" },
      { label: "Menu items", value: "18" },
      { label: "Sections", value: "6" },
    ],
    palette: ["#fef3e7", "#f97316", "#1a1a1a", "#22c55e"],
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
    overview:
      "Livara is a fashion label that wanted their site to read more like an editorial than a Shopify theme. The product had to feel curated — every item on the page chosen, not uploaded.",
    challenge:
      "Most fashion DTC sites suffer from grid sameness — 12 products in a 4×3 grid, infinite scroll, nothing to remember. Livara wanted shoppers to leave with a feeling, not just a cart.",
    process: [
      {
        step: "01",
        title: "Editorial hero",
        body: "Big serif headline ('DISCOVER AND FIND YOUR OWN FASHION!') paired with a single hero portrait in a soft mint blob. The model breaks the column grid — that asymmetry sets the editorial tone.",
      },
      {
        step: "02",
        title: "Best selling shelf",
        body: "Three featured products in equal-weight cards. Pastel backdrops behind each model unify the row visually even though the garments are different.",
      },
      {
        step: "03",
        title: "Filter-as-tab",
        body: "'Our products' uses a quiet underline tab system (SALE / HOT / NEW / ACCESSORIES) instead of a heavy filter rail. Less chrome, faster browsing.",
      },
      {
        step: "04",
        title: "Drop module",
        body: "The Exclusive Offer block uses a live countdown (Days / Hours / Mins) on a mint card to manufacture urgency without resorting to popups.",
      },
    ],
    solution:
      "A storefront that behaves like a lookbook on the way in and a store on the way out. The deep magenta footer rebalances the soft pastels above it and gives the page a real bottom — not just a fade.",
    results: [
      { label: "Add-to-cart rate", value: "+31%" },
      { label: "Avg. session", value: "3m 42s" },
      { label: "Bounce", value: "-18%" },
      { label: "Components", value: "34" },
    ],
    palette: ["#a3e4c1", "#7c1d6f", "#fef3e7", "#0f172a"],
  },
];

export function DesignShowcase() {
  const [open, setOpen] = useState<CaseStudy | null>(null);

  return (
    <section id="designs" className="relative border-b border-white/10 overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.25_0.08_320/0.30),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.22_0.06_240/0.35),transparent_60%)]" />
      </div>

      <div className="relative px-6 md:px-10 py-20 md:py-28">
        <SectionLabel index="02" label="UI / UX CASE STUDIES" />
        <div className="mt-6 mb-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight text-white">
            UI AND UX{" "}
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">DESIGN</span>
          </h2>
          <p className="max-w-md font-mono uppercase tracking-widest text-xs text-white/50">
            // FOUR SHIPPED CONCEPTS. EACH WITH PROBLEM, PROCESS, AND PROOF — THE WAY A CASE STUDY
            SHOULD READ.
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {studies.map((s, i) => (
            <CaseCard key={s.id} study={s} flipped={i % 2 === 1} onOpen={() => setOpen(s)} />
          ))}
        </div>
      </div>

      {open && <CaseModal study={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function CaseCard({
  study,
  flipped,
  onOpen,
}: {
  study: CaseStudy;
  flipped: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
      {/* Image */}
      <div className={`lg:col-span-7 ${flipped ? "lg:order-2" : "lg:order-1"} group relative`}>
        <button
          onClick={onOpen}
          className="block w-full text-left relative overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <img
              src={study.imageUrl}
              alt={study.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover:translate-y-[-30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2 font-mono text-[10px] uppercase tracking-widest">
              <span className={`px-3 py-1.5 border ${study.accent}`}>{study.category}</span>
              <span className="px-3 py-1.5 border border-white/20 bg-black/60 text-white/80">
                {study.year}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-mono uppercase tracking-[0.3em] text-xs bg-white text-black px-4 py-3 border border-white">
                [ READ CASE STUDY ↗ ]
              </span>
            </div>
          </div>
        </button>
        {/* palette strip */}
        <div className="mt-3 flex gap-1.5">
          {study.palette.map((c) => (
            <span
              key={c}
              className="h-6 flex-1 border border-white/10"
              style={{ background: c }}
              title={c}
            />
          ))}
        </div>
      </div>

      {/* Meta */}
      <div className={`lg:col-span-5 ${flipped ? "lg:order-1" : "lg:order-2"} space-y-6`}>
        <div className="font-mono text-xs uppercase tracking-widest text-white/40">
          [ {study.index} // CASE STUDY ]
        </div>
        <h3 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight leading-[0.95]">
          {study.title}
        </h3>
        <p className="text-white/70 text-lg md:text-xl leading-snug">{study.subtitle}</p>

        <dl className="grid grid-cols-2 gap-y-4 gap-x-6 font-mono text-[11px] uppercase tracking-widest border-t border-white/10 pt-6">
          <div>
            <dt className="text-white/40 mb-1">// ROLE</dt>
            <dd className="text-white/90">{study.role}</dd>
          </div>
          <div>
            <dt className="text-white/40 mb-1">// CLIENT</dt>
            <dd className="text-white/90">{study.client}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-white/40 mb-1">// TOOLS</dt>
            <dd className="text-white/90 flex flex-wrap gap-2">
              {study.tools.map((t) => (
                <span key={t} className="px-2 py-1 border border-white/20">
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <p className="text-white/60 leading-relaxed">{study.overview}</p>

        <button
          onClick={onOpen}
          className="inline-flex items-center gap-3 bg-white text-black px-6 py-4 font-mono uppercase tracking-[0.3em] text-xs hover:bg-white/80 transition-colors"
        >
          [ OPEN FULL CASE STUDY ↗ ]
        </button>
      </div>
    </article>
  );
}

function CaseModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="min-h-full max-w-6xl mx-auto my-0 md:my-8 bg-black border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* sticky bar */}
        <div className="sticky top-0 z-10 bg-black/90 backdrop-blur border-b border-white/10 px-6 md:px-10 py-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em]">
          <span className="text-white/60">// CASE STUDY · {study.index}</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white border border-white/20 px-4 py-2"
          >
            [ CLOSE ✕ ]
          </button>
        </div>

        <div className="px-6 md:px-10 py-10 md:py-16 space-y-16">
          {/* Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
              <span className={`px-3 py-1.5 border ${study.accent}`}>{study.category}</span>
              <span className="px-3 py-1.5 border border-white/20 text-white/70">{study.year}</span>
              <span className="px-3 py-1.5 border border-white/20 text-white/70">
                {study.client}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-7xl uppercase tracking-tight leading-[0.9]">
              {study.title}
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl">{study.subtitle}</p>
          </header>

          {/* Hero image — full bleed, contained, NO cropping */}
          <figure className="border border-white/10 bg-white/[0.02] p-4 md:p-8">
            <img src={study.imageUrl} alt={study.title} className="w-full h-auto block" />
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40 text-center">
              // FIG.{study.index} — {study.title} · FULL DESIGN
            </figcaption>
          </figure>

          {/* Overview */}
          <Block title="OVERVIEW" body={study.overview} />

          {/* Challenge */}
          <Block title="THE CHALLENGE" body={study.challenge} accent />

          {/* Process */}
          <section>
            <BlockHeader title="PROCESS" />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {study.process.map((p) => (
                <div key={p.step} className="bg-black p-6 md:p-8 space-y-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                    [ STEP {p.step} ]
                  </div>
                  <h4 className="font-display font-bold text-2xl uppercase tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <Block title="THE SOLUTION" body={study.solution} />

          {/* Results */}
          <section>
            <BlockHeader title="RESULTS" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {study.results.map((r) => (
                <div key={r.label} className="bg-black p-6 md:p-8 text-center">
                  <div className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white">
                    {r.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Palette */}
          <section>
            <BlockHeader title="COLOR PALETTE" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {study.palette.map((c) => (
                <div key={c} className="bg-black p-6 flex flex-col items-center gap-3">
                  <div
                    className="w-full aspect-square border border-white/10"
                    style={{ background: c }}
                  />
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                    {c}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-white/50">
              // END OF CASE STUDY · {study.index}
            </div>
            <button
              onClick={onClose}
              className="bg-white text-black px-6 py-4 font-mono uppercase tracking-[0.3em] text-xs hover:bg-white/80"
            >
              [ BACK TO VAULT ↗ ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-widest text-white/50">
      <span className="h-px w-10 bg-white/30" />
      <span>[ {title} ]</span>
    </div>
  );
}

function Block({ title, body, accent }: { title: string; body: string; accent?: boolean }) {
  return (
    <section>
      <BlockHeader title={title} />
      <p
        className={`max-w-3xl text-lg md:text-xl leading-relaxed ${
          accent ? "text-white" : "text-white/70"
        }`}
      >
        {body}
      </p>
    </section>
  );
}
