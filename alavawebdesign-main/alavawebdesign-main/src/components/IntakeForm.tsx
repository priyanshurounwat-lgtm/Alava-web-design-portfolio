import { useState, useRef, useCallback } from "react";
import { SectionLabel } from "./WorkGallery";
import { Mail, MapPin, Clock, ArrowRight, Check } from "lucide-react";

export function IntakeForm() {
  const [sent, setSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const handleFormMouseMove = useCallback((e: React.MouseEvent<HTMLFormElement>) => {
    const el = formRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--form-mouse-x", `${x}%`);
    el.style.setProperty("--form-mouse-y", `${y}%`);
  }, []);

  return (
    <section 
      id="brief" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative border-b border-white/10 bg-black overflow-hidden"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%"
      } as React.CSSProperties}
    >
      {/* Dynamic Mouse-Tracking Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(52, 211, 153, 0.12) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)",
        }}
      />

      {/* Grid pattern ambient layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
          <SectionLabel index="04" label="GET IN TOUCH" />
          <h2 className="font-display font-bold uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Get In Touch
          </h2>
          
          <div className="h-px w-20 bg-white/20 my-8" />
          
          <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-white font-bold mb-4">
            Let's Build Something Great Together
          </h3>
          <p className="font-sans text-sm md:text-base text-white/50 max-w-xl leading-relaxed">
            Whether it's a new website, a redesign, or a custom digital experience, we'd love to hear about it.
          </p>
        </div>

        {/* Form and Contacts Bento Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-white/10 bg-black/45 backdrop-blur-md p-6 md:p-12 shadow-2xl rounded-none">
          
          {/* LEFT COLUMN: Premium Contact Details */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8">
            <div className="font-sans font-semibold text-[10px] text-slate-500 uppercase tracking-widest mb-4">
              [ SECURE_LINK PROTOCOLS ]
            </div>

            {/* Email Card */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alavadesigner@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 border border-white/5 bg-white/[0.01] hover:border-signal/30 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(52,211,153,0.05)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 group-hover:text-signal transition-all duration-300">
                <Mail size={16} />
              </div>
              <div className="font-sans text-[10px] text-white/40 tracking-widest uppercase mb-2">// EMAIL</div>
              <div className="font-sans font-bold text-lg md:text-xl text-white group-hover:text-signal transition-colors break-all leading-tight">
                alavadesigner@gmail.com
              </div>
              <div className="font-sans text-[10px] text-white/30 mt-3 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1.5 uppercase">
                Open in Gmail <ArrowRight size={10} />
              </div>
            </a>

            {/* Studio Card */}
            <div className="group block p-6 border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-60 transition-all">
                <MapPin size={16} />
              </div>
              <div className="font-sans text-[10px] text-white/40 tracking-widest uppercase mb-2">// STUDIO</div>
              <div className="font-sans font-black text-lg md:text-xl text-white tracking-tight uppercase mb-1">
                ALAVA Web Designers
              </div>
              <div className="font-sans text-sm text-white/60">
                Vadodara, Gujarat, India
              </div>
            </div>

            {/* Response Time Card */}
            <div className="group block p-6 border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-60 transition-all">
                <Clock size={16} />
              </div>
              <div className="font-sans text-[10px] text-white/40 tracking-widest uppercase mb-2">// RESPONSE TIME</div>
              <div className="font-sans text-base text-white/80">
                Usually within 24 hours on weekdays
              </div>
            </div>

            {/* Bottom System Label */}
            <div className="pt-8 border-t border-white/5 font-sans text-[10px] text-white/30 space-y-1">
              <div>© 2026 ALAVA WEB DESIGNERS</div>
              <div>SYSTEM SECURITY // ALL PROTOCOLS PROPRIETARY</div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form / Transmission Panel */}
          <form
            ref={formRef}
            onMouseMove={handleFormMouseMove}
            className="lg:col-span-7 space-y-8 border border-white/10 bg-white/[0.01] p-6 md:p-10 relative overflow-hidden transition-all duration-300 rounded-none hover:border-signal/20 group/panel"
            style={{
              "--form-mouse-x": "50%",
              "--form-mouse-y": "50%"
            } as React.CSSProperties}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {/* Dynamic Inner Panel Spotlight */}
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle 350px at var(--form-mouse-x, 50%) var(--form-mouse-y, 50%), rgba(52, 211, 153, 0.28) 0%, rgba(52, 211, 153, 0.05) 50%, transparent 85%)",
              }}
            />

            <div className="relative z-10 font-sans font-semibold text-[10px] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.45)] uppercase tracking-widest mb-4">
              [ TRANSMISSION PANEL ]
            </div>

            <Field label="IDENTITY / COMPANY NAME" name="name" placeholder="Enter your name or agency..." />
            <Field label="SECURE MAIL RELAY" name="email" type="email" placeholder="name@domain.com" />

            <div className="space-y-3 relative z-10">
              <label className="font-sans font-semibold text-xs uppercase tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] block">
                Tell Us About Your Project
              </label>
              <textarea
                rows={5}
                required
                className="w-full bg-black/45 border border-white/10 p-5 font-sans text-sm text-white placeholder:text-white/20 focus:border-signal/50 focus:bg-black/75 focus:shadow-[0_0_15px_rgba(52,211,153,0.06)] focus:outline-none transition-all duration-300 resize-none"
                placeholder="Share your goals, project requirements, timeline, and any ideas you already have in mind."
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className={`relative z-10 w-full font-sans font-semibold uppercase tracking-[0.3em] text-xs md:text-sm py-6 transition-all duration-500 flex items-center justify-center gap-3 border ${
                sent 
                  ? "bg-signal/15 border-signal text-signal shadow-[0_0_15px_rgba(52,211,153,0.1)]" 
                  : "bg-white text-black border-white hover:bg-signal hover:border-signal hover:text-black hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]"
              }`}
            >
              {sent ? (
                <>
                  <Check size={14} className="animate-bounce" /> // MESSAGE TRANSMITTED ✓
                </>
              ) : (
                "[ Start Your Project → ]"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ 
  label, 
  name, 
  type = "text", 
  placeholder 
}: { 
  label: string; 
  name: string; 
  type?: string; 
  placeholder: string;
}) {
  return (
    <div className="space-y-3 relative z-10">
      <label className="font-sans font-semibold text-xs uppercase tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] block">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-black/45 border border-white/10 py-3.5 px-4 font-sans text-sm text-white placeholder:text-white/20 focus:border-signal/50 focus:bg-black/75 focus:shadow-[0_0_15px_rgba(52,211,153,0.06)] focus:outline-none transition-all duration-300"
      />
    </div>
  );
}
