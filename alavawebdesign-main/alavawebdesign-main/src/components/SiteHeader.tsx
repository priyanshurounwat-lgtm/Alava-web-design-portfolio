export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/60">
      <div className="flex items-center justify-between px-6 md:px-10 h-14 font-mono text-xs uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="text-white">ALAVA SYSTEM</span>
          <span className="hidden md:inline text-white/30">//</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/50">
          <a href="#works" className="hover:text-white transition-colors">
            WORKS
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#pipeline" className="hover:text-white transition-colors">
            SERVICES
          </a>
          <a href="#brief" className="hover:text-white transition-colors">
            CONTACT
          </a>
        </nav>
        <a
          href="#brief"
          className="group relative inline-flex items-center gap-2 text-white hover:text-black transition-colors duration-300 px-4 py-1.5 rounded-full border border-white/20 hover:border-transparent overflow-hidden"
        >
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="relative">SECURE THE BRIEF</span>
        </a>
      </div>
    </header>
  );
}
