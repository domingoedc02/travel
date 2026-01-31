"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    key: "tokyo" as const,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    color: "from-kuro-900/80",
  },
  {
    key: "kyoto" as const,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    color: "from-aka-900/80",
  },
  {
    key: "fuji" as const,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop",
    color: "from-sumi-900/80",
  },
  {
    key: "osaka" as const,
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=600&fit=crop",
    color: "from-gold-900/80",
  },
];

export function DestinationsGrid() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <p className="text-aka-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.destinations.tagline}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900">
              {t.destinations.title}
            </h2>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => {
            const data = t.destinations[dest.key];
            return (
              <StaggerItem key={dest.key}>
                <Link href="/services">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={dest.image}
                      alt={data.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${dest.color} to-transparent`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/70 text-xs tracking-wider mb-1">
                        {data.nameJp}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {data.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                        {data.description}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-aka-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
