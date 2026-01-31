"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { PackageCard } from "@/components/services/PackageCard";

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&h=800&fit=crop"
          alt="Japan cityscape"
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
            {t.services.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {t.services.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/80 max-w-xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 lg:py-32 japan-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.packages.map((pkg, i) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                nameJp={pkg.nameJp}
                description={pkg.description}
                duration={pkg.duration}
                capacity={pkg.capacity}
                price={pkg.price}
                highlights={pkg.highlights}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
