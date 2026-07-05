import { motion } from "framer-motion";

type PricingTier = {
  id: string;
  name: string;
  price: string;
  architecture: string;
  delivery: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
};

const tiers: PricingTier[] = [
  {
    id: "basic",
    name: "BASIC",
    price: "₹5,007.27",
    architecture: "1 Landing Page (Up to 4 sections) + CTA Structured UX. Business-ready.",
    delivery: "2-day delivery • 2 Revisions",
    buttonText: "ENGAGE BASIC DEPLOYMENT",
    features: [
      "1 Functional Page",
      "Responsive Design Structure",
      "Content Asset Handoff",
      "1 Plugin Integration",
    ],
  },
  {
    id: "standard",
    name: "STANDARD",
    price: "₹20,029.07",
    architecture: "Full Multi-Page Website (3-5 Pages) + CTA Structured UX. Business-ready.",
    delivery: "5-day delivery • 3 Revisions",
    buttonText: "ENGAGE STANDARD DEPLOYMENT",
    features: [
      "3 Functional Pages",
      "Responsive Design Structure",
      "Content Asset Handoff",
      "3 Plugin/Extension Integrations",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "₹40,058.14",
    architecture: "Premium Multi-Page Site (Up to 8 pages) OR Full E-Commerce store.",
    delivery: "10-day delivery • 4 Revisions",
    buttonText: "ENGAGE PREMIUM DEPLOYMENT",
    features: [
      "8 Functional Pages",
      "Responsive Design Structure",
      "Content Asset Handoff",
      "7 Plugin/Extension Integrations",
    ],
  },
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative border-b border-white/10 bg-[#0a0a0c] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-full blur-3xl" />
      
      <div className="relative px-6 md:px-10 py-24 md:py-32 max-w-[1200px] mx-auto z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="font-sans text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
            Simple and Affordable Pricing Plans
          </h2>
          <p className="font-sans text-slate-400 text-base md:text-lg">
            Start tracking and improving your finance management with structured design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col p-8 md:p-10 rounded-2xl bg-[#121214]/60 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                tier.popular ? "border-white/10 shadow-2xl" : "border-white/5"
              }`}
            >
              {/* Glow effect for popular card */}
              {tier.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />
              )}

              {/* Top Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-700/80 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-widest border border-white/10 shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 flex-1">
                <h3
                  className={`font-sans font-medium mb-4 ${
                    tier.popular ? "text-white text-lg" : "text-slate-300 text-lg"
                  }`}
                >
                  {tier.name}
                </h3>
                
                <div className="font-sans font-bold text-3xl text-white mb-2 tracking-tight">
                  {tier.price}
                </div>

                <div className="text-xs text-slate-400 mb-6">
                  {tier.delivery}
                </div>

                <p className="font-sans text-sm text-slate-400 leading-relaxed">
                  {tier.architecture}
                </p>
              </div>

              <button
                className={`w-full py-3.5 px-4 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 mb-8 ${
                  tier.popular
                    ? "bg-gradient-to-r from-[#FF6B4A] to-[#FF4F27] text-white rounded-xl shadow-[0_4px_14px_rgba(255,107,74,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,74,0.4)]"
                    : "bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10"
                }`}
              >
                {tier.buttonText}
              </button>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#121214] px-3 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                    Features
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="font-sans text-sm text-slate-300 flex items-center gap-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
