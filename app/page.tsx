import { siteConfig } from "@/lib/config";
import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar config={{ name: siteConfig.name, url: siteConfig.url }} />
      <main>
        <HeroSection
          data={siteConfig.hero}
          slogan={siteConfig.slogan}
          ctaSecondaryLabel="查看演示 →"
        />
        <FeaturesSection features={siteConfig.features} />
        <HowItWorksSection steps={siteConfig.howItWorks} />
        <PricingSection plans={siteConfig.pricing} />
        <FAQSection items={siteConfig.faq} />
        <CTASection data={siteConfig.cta} />
        <Footer data={siteConfig.footer} brandName={siteConfig.name} />
      </main>
    </>
  );
}
