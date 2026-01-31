"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export function CTASection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-kuro-800 via-kuro-900 to-sumi-900 relative overflow-hidden">
      {/* Decorative aka circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-aka-500/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gold-500/10 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-white/[0.03] pointer-events-none select-none">
        桜
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <p className="text-lg text-kuro-200 mb-10 leading-relaxed">
            {t.cta.subtitle}
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-aka-500 text-white font-semibold rounded-full hover:bg-aka-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              {t.cta.button}
            </Link>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
