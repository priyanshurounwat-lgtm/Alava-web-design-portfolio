import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/Preloader";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WorkGallery } from "@/components/WorkGallery";
import { DesignShowcase } from "@/components/DesignShowcase";
import { CraftStack } from "@/components/CraftStack";
import { Pricing } from "@/components/Pricing";
import { Pipeline } from "@/components/Pipeline";
import { IntakeForm } from "@/components/IntakeForm";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingDock } from "@/components/FloatingDock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alava Web Designers — Engineering Digital Scale" },
      { name: "description", content: "Premium UI/UX, radical Framer interactions, and production-grade Webflow deployment for global standard brands." },
      { property: "og:title", content: "Alava Web Designers — Engineering Digital Scale" },
      { property: "og:description", content: "Premium UI/UX, radical Framer interactions, and production-grade Webflow deployment for global standard brands." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:wght@300;400;500;700&family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ALAVA Web Designers",
  "url": "https://alavadesign.agency",
  "logo": "https://alavadesign.agency/founder-avatar.png",
  "image": "https://alavadesign.agency/coming-soon.png",
  "description": "ALAVA is a premium web design and development studio based in Vadodara, Gujarat, India. Crafting motion-driven, ultra-fast custom digital experiences.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.307159",
    "longitude": "73.181220"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.linkedin.com/company/alava-design",
    "https://www.instagram.com/alavadesign.agency"
  ]
};

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Preloader />
      <div className="min-h-screen bg-black text-white">
        <SiteHeader />
        <main>
          <Hero />
          <Marquee />
          <WorkGallery />
          <DesignShowcase />
          <CraftStack />
          <Pricing />
          <Pipeline />
          <IntakeForm />
        </main>
        <SiteFooter />
        <FloatingDock />
      </div>
    </>
  );
}
