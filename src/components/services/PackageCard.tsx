"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { Clock, Users, Sparkles } from "lucide-react";

interface PackageCardProps {
  name: string;
  nameJp: string;
  description: string;
  duration: string;
  capacity: number;
  price: string;
  highlights: string[];
  index: number;
}

export function PackageCard({
  name,
  nameJp,
  description,
  duration,
  capacity,
  price,
  highlights,
  index,
}: PackageCardProps) {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-aka-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-aka-400 via-gold-400 to-aka-400" />

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs text-sumi-400 tracking-wider mb-1">{nameJp}</p>
          <h3 className="text-xl font-bold text-sumi-900">{name}</h3>
        </div>

        {/* Description */}
        <p className="text-sumi-500 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-sumi-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-aka-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-aka-400" />
            <span>
              {t.services.capacity} {capacity} {t.services.passengers}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-sumi-700 uppercase tracking-wider mb-2">
            {t.services.highlights}
          </p>
          <div className="flex flex-wrap gap-2">
            {highlights.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-aka-50 text-aka-700 text-xs rounded-full"
              >
                <Sparkles className="w-3 h-3" />
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-sumi-100">
          <div>
            <p className="text-xs text-sumi-400">
              {t.services.from}
            </p>
            <p className="text-2xl font-bold text-sumi-900">{price}</p>
            <p className="text-xs text-sumi-400">{t.services.perPerson}</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-aka-500 text-white text-sm font-medium rounded-full hover:bg-aka-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {t.services.bookNow}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
