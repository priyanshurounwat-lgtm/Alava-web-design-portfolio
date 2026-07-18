import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, MessageCircle, Instagram, MessageSquare, X } from "lucide-react";

export function FloatingDock() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <MessageCircle size={18} />,
      href: "https://wa.me/919173910955",
      color:
        "hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]",
      bgColor: "bg-emerald-500/10",
      accent: "text-emerald-400",
    },
    {
      id: "gmail",
      name: "Gmail",
      icon: <Mail size={18} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=alavadesigner@gmail.com",
      color:
        "hover:text-red-400 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]",
      bgColor: "bg-red-500/10",
      accent: "text-red-400",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/priyanshu-kumar-b10457253",
      color:
        "hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
      bgColor: "bg-blue-500/10",
      accent: "text-blue-400",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: <Instagram size={18} />,
      href: "https://www.instagram.com/d.e.s.i.n.r?igsh=MXVtNXR0NDljaXZyNg%3D%3D&utm_source=qr",
      color:
        "hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]",
      bgColor: "bg-fuchsia-500/10",
      accent: "text-fuchsia-400",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono text-xs select-none">
      <div className="flex flex-col items-end gap-3">
        {/* Expanded Stack */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
                hidden: {},
              }}
              className="flex flex-col items-end gap-3"
            >
              {socialLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    visible: { opacity: 1, y: 0, scale: 1 },
                    hidden: { opacity: 0, y: 15, scale: 0.8 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex items-center gap-3 group"
                >
                  {/* Tooltip */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 border border-white/10 text-white/80 px-3 py-1.5 uppercase tracking-widest text-[9px] pointer-events-none shadow-xl backdrop-blur-sm">
                    {link.name}
                  </span>

                  {/* Anchor link */}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/90 text-white/60 backdrop-blur-sm transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Launcher Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full border bg-black/95 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 ${
            isOpen
              ? "border-red-500/40 hover:border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
              : "border-white/15 hover:border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          }`}
        >
          {/* Status glow dot when closed */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3 w-3 -mt-0.5 -mr-0.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 border border-black" />
            </span>
          )}

          <div className="relative h-5 w-5 flex items-center justify-center">
            {isOpen ? (
              <X size={20} className="text-red-400" />
            ) : (
              <MessageSquare size={20} className="text-white" />
            )}
          </div>
        </motion.button>
      </div>
    </div>
  );
}
