"use client";

import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { Search, Palette, Sparkles } from "lucide-react";

const steps = [
  { icon: Search, num: "01", titleKey: "step1Title" as const, descKey: "step1Desc" as const },
  { icon: Palette, num: "02", titleKey: "step2Title" as const, descKey: "step2Desc" as const },
  { icon: Sparkles, num: "03", titleKey: "step3Title" as const, descKey: "step3Desc" as const },
];

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 japan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <p className="text-aka-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.howItWorks.tagline}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900">
              {t.howItWorks.title}
            </h2>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="relative text-center">
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-aka-200" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white shadow-md border border-aka-100">
                  <step.icon className="w-8 h-8 text-aka-500" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-aka-500 text-white text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-sumi-800 mb-3">
                  {t.howItWorks[step.titleKey]}
                </h3>
                <p className="text-sumi-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {t.howItWorks[step.descKey]}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
