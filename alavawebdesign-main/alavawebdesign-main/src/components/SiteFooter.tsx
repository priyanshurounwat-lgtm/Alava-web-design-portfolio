export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs uppercase tracking-widest text-white/40">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-signal animate-pulse-dot" />
          ALAVA SYSTEM — ONLINE
        </div>
        <div>v2.6 // BUILT IN VADODARA, INDIA</div>
        <div>© 2026 — ALL CORES RESERVED</div>
      </div>
    </footer>
  );
}
