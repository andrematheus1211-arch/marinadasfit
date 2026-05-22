import HeroSection from '@/components/HeroSection';
import PainSection from '@/components/PainSection';
import DiscoverySection from '@/components/DiscoverySection';
import BenefitsSection from '@/components/BenefitsSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import TransformationSection from '@/components/TransformationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OfferSection from '@/components/OfferSection';
import FaqSection from '@/components/FaqSection';
import FinalCTASection from '@/components/FinalCTASection';
import FloatingCTA from '@/components/FloatingCTA';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <HeroSection />
      <PainSection />
      <DiscoverySection />
      <BenefitsSection />
      <WhatYouGetSection />
      <TransformationSection />
      <TestimonialsSection />
      <OfferSection />
      <FaqSection />
      <FinalCTASection />
      <FloatingCTA />
    </main>
  );
}