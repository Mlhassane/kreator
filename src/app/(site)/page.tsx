import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Problem } from "@/components/sections/problem";
import { Audiences } from "@/components/sections/audiences";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { CreatorsShowcase } from "@/components/sections/creators-showcase";
import { Mission } from "@/components/sections/mission";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Problem />
      <Audiences />
      <HowItWorks />
      <DashboardPreview />
      <CreatorsShowcase />
      <Mission />
      <Testimonials />
      <PricingSection />
      <Faq />
      <FinalCta />
    </>
  );
}
