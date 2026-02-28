import { Footer } from "nextra-theme-docs";
import { BentoGrid } from "../_components/bento-grid";
import { FinalCTA } from "../_components/final-cta";
import { Hero } from "../_components/hero";
import { LogoMarquee } from "../_components/logo-marquee";
import { Pricing } from "../_components/pricing";
import { SmoothScroll } from "../_components/smooth-scroll";
import { siteConfig } from "../_config";

export default function HomePage() {
  const { hero, logoMarquee, bentoGrid, pricing, finalCTA, footer } = siteConfig.landingPage;

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        {hero.enabled && <Hero />}
        {logoMarquee.enabled && <LogoMarquee />}
        {bentoGrid.enabled && <BentoGrid />}
        {pricing.enabled && <Pricing />}
        {finalCTA.enabled && <FinalCTA />}
        {footer.enabled && <Footer />}
      </main>
    </SmoothScroll>
  );
}
