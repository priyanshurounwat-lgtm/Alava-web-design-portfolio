export function Marquee() {
  const text = "INTERFACE ARCHITECTURE ✦ RADICAL UI/UX DESIGN ✦ FRAMER CORE ENGINEERING ✦ WEBFLOW PRODUCTION SYSTEMS ✦ ";
  return (
    <div className="border-b border-white/10 overflow-hidden py-6 md:py-8">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        <span className="font-display font-bold uppercase md:text-5xl text-white/90 pr-12 text-xl">
          {text.repeat(4)}
        </span>
        <span className="font-display font-bold uppercase md:text-5xl text-white/90 pr-12 text-xl" aria-hidden>
          {text.repeat(4)}
        </span>
      </div>
    </div>
  );
}
