"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/config";
import { VideoBackground } from "@/components/shared/VideoBackground";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <VideoBackground
        desktopSrc="/videos/landscape.mp4"
        mobileSrc="/videos/landscape.mp4"
      />

      {/* Fallback gradient if no video */}
      <div className="absolute inset-0 bg-gradient-to-br from-kuro-900 via-kuro-800 to-sumi-900 -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Japanese calligraphy accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[16rem] font-bold text-white pointer-events-none select-none"
        >
          日本
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-aka-300 text-sm sm:text-base font-medium tracking-[0.3em] uppercase mb-4"
        >
          {t.hero.titleJp}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-aka-500 text-white font-semibold rounded-full hover:bg-aka-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
          >
            {t.hero.cta}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
