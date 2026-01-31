"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsCarousel() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const items = t.testimonials.items;

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <p className="text-aka-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.testimonials.tagline}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-sumi-900">
              {t.testimonials.title}
            </h2>
          </ScrollAnimation>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-washi-100 border border-aka-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <Quote className="w-8 h-8 text-aka-200 mb-4" />
                <p className="text-sumi-600 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm text-sumi-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-sumi-400">{item.location}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl bg-washi-100 border border-aka-100 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-10 h-10 text-aka-200 mb-4" />
                <p className="text-sumi-600 text-base leading-relaxed mb-6">
                  &ldquo;{items[current].text}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: items[current].rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="font-semibold text-sumi-800">
                  {items[current].name}
                </p>
                <p className="text-sm text-sumi-400">
                  {items[current].location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-sumi-200 flex items-center justify-center hover:border-aka-400 hover:text-aka-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-aka-500" : "bg-sumi-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-sumi-200 flex items-center justify-center hover:border-aka-400 hover:text-aka-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
