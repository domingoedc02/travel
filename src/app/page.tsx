"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { DestinationsGrid } from "@/components/home/DestinationsGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { Gallery } from "@/components/home/Gallery";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <DestinationsGrid />
      <HowItWorks />
      <FeaturesSection />
      <TestimonialsCarousel />
      <Gallery />
      <CTASection />
    </>
  );
}
