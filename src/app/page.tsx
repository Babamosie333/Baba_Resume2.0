import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import FeaturesIntro from "@/components/sections/features-intro";
import FeatureAiDetection from "@/components/sections/feature-ai-detection";
import FeatureDataSecurity from "@/components/sections/feature-data-security";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesIntro />
      <FeatureAiDetection />
      <FeatureDataSecurity />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
