"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";

const galleryImages = [
  {
    src: "/images/unsplash/zen-garden.jpg",
    alt: "Cherry blossoms in Tokyo",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unsplash/shrine-path.jpg",
    alt: "Traditional Japanese gate",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/unsplash/bamboo-grove.jpg",
    alt: "Bamboo forest in Kyoto",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unsplash/tokyo-tower.jpg",
    alt: "Tokyo cityscape at night",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unsplash/japanese-garden.jpg",
    alt: "Mount Fuji with lake",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unsplash/cherry-blossom.jpg",
    alt: "Japanese temple garden",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 japan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <p className="text-aka-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.gallery.tagline}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900">
              {t.gallery.title}
            </h2>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <StaggerItem key={i} className={img.span}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-kuro-900/0 group-hover:bg-kuro-900/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
