import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustBar } from "@/components/landing/TrustBar";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { DifferentiatorSection } from "@/components/landing/DifferentiatorSection";
import { TransformationSection } from "@/components/landing/TransformationSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { LeadFormSection } from "@/components/landing/LeadFormSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <ProblemSection />
        <DifferentiatorSection />
        <TransformationSection />
        <PricingSection />
        <LeadFormSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
