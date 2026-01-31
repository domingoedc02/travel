"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { Heart, Gem, Award, Leaf } from "lucide-react";

const values = [
  { icon: Heart, titleKey: "value1Title" as const, descKey: "value1Desc" as const },
  { icon: Gem, titleKey: "value2Title" as const, descKey: "value2Desc" as const },
  { icon: Award, titleKey: "value3Title" as const, descKey: "value3Desc" as const },
  { icon: Leaf, titleKey: "value4Title" as const, descKey: "value4Desc" as const },
];

const teamMembers = [
  { name: "Kenji Yamamoto", role: "Founder & CEO", nameJp: "山本 健二" },
  { name: "Sakura Tanaka", role: "Head of Operations", nameJp: "田中 さくら" },
  { name: "Yusuke Nakamura", role: "Lead Guide", nameJp: "中村 裕介" },
  { name: "Aiko Sato", role: "Customer Experience", nameJp: "佐藤 愛子" },
];

const aboutImages = [
  "/images/unsplash/japanese-street.jpg",
  "/images/unsplash/zen-garden.jpg",
  "/images/unsplash/temple-gates.jpg",
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/unsplash/kyoto-temple.jpg"
          alt="Japan landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-kuro-900/60" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-aka-300 text-sm tracking-[0.3em] uppercase mb-3"
          >
            {t.about.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            {t.about.title}
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 japan-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollAnimation variant="fadeLeft">
              <div>
                <p className="text-lg text-sumi-600 leading-relaxed mb-6">
                  {t.about.intro}
                </p>
                <p className="text-sumi-500 leading-relaxed">
                  {t.about.story}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeRight">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={aboutImages[0]}
                      alt="About Imperial Japan Tours"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src={aboutImages[1]}
                      alt="Japan scenery"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src={aboutImages[2]}
                      alt="Japan culture"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900 mb-6">
              {t.about.missionTitle}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <p className="text-lg text-sumi-500 leading-relaxed">
              {t.about.mission}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-kuro-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {t.about.valuesTitle}
              </h2>
            </ScrollAnimation>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.titleKey}>
                <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-aka-500/20 flex items-center justify-center">
                    <v.icon className="w-7 h-7 text-aka-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t.about[v.titleKey]}
                  </h3>
                  <p className="text-kuro-200 text-sm leading-relaxed">
                    {t.about[v.descKey]}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 japan-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900">
                {t.about.teamTitle}
              </h2>
            </ScrollAnimation>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center p-6 rounded-2xl bg-white border border-aka-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-aka-200 to-kuro-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-kuro-700">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs text-sumi-400 mb-1">{member.nameJp}</p>
                  <h3 className="font-semibold text-sumi-800">{member.name}</h3>
                  <p className="text-sm text-sumi-500">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cultural Commitment */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation variant="fadeLeft">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/unsplash/shrine-path.jpg"
                  alt="Japanese culture"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeRight">
              <div>
                <h2 className="text-3xl font-bold text-sumi-900 mb-4">
                  {t.about.culturalTitle}
                </h2>
                <p className="text-sumi-500 leading-relaxed">
                  {t.about.culturalDesc}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
