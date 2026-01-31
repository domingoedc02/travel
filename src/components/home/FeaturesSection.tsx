"use client";

import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { Car, Users, Calendar, Landmark, Headphones, BadgeCheck } from "lucide-react";

const features = [
  { icon: Car, titleKey: "feature1Title" as const, descKey: "feature1Desc" as const },
  { icon: Users, titleKey: "feature2Title" as const, descKey: "feature2Desc" as const },
  { icon: Calendar, titleKey: "feature3Title" as const, descKey: "feature3Desc" as const },
  { icon: Landmark, titleKey: "feature4Title" as const, descKey: "feature4Desc" as const },
  { icon: Headphones, titleKey: "feature5Title" as const, descKey: "feature5Desc" as const },
  { icon: BadgeCheck, titleKey: "feature6Title" as const, descKey: "feature6Desc" as const },
];

export function FeaturesSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-kuro-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-aka-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <p className="text-aka-300 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.whyUs.tagline}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t.whyUs.title}
            </h2>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.titleKey}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aka-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 mb-4 rounded-xl bg-aka-500/20 flex items-center justify-center group-hover:bg-aka-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-aka-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t.whyUs[feature.titleKey]}
                </h3>
                <p className="text-kuro-200 text-sm leading-relaxed">
                  {t.whyUs[feature.descKey]}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
