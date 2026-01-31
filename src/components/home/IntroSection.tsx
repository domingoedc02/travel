"use client";

import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { MapPin, Users, Car } from "lucide-react";

const highlights = [
  { icon: MapPin, titleKey: "highlight1Title" as const, descKey: "highlight1Desc" as const },
  { icon: Users, titleKey: "highlight2Title" as const, descKey: "highlight2Desc" as const },
  { icon: Car, titleKey: "highlight3Title" as const, descKey: "highlight3Desc" as const },
];

export function IntroSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 japan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollAnimation>
            <p className="text-aka-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.intro.tagline}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900 mb-6">
              {t.intro.title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-sumi-500 text-lg leading-relaxed">
              {t.intro.description}
            </p>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <StaggerItem key={item.titleKey}>
              <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-aka-100 hover:shadow-lg hover:border-aka-200 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-aka-50 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-aka-500" />
                </div>
                <h3 className="text-lg font-semibold text-sumi-800 mb-2">
                  {t.intro[item.titleKey]}
                </h3>
                <p className="text-sumi-500 text-sm">
                  {t.intro[item.descKey]}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
