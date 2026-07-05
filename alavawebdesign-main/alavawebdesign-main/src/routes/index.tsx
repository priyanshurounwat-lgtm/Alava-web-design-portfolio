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

function Index() {
  return (
    <>
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
