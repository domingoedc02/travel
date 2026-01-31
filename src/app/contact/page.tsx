"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { BookingForm } from "@/components/contact/BookingForm";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useI18n();

  const contactCards = [
    {
      icon: MapPin,
      title: t.contact.info.addressTitle,
      content: t.contact.info.address,
    },
    {
      icon: Mail,
      title: t.contact.info.emailTitle,
      content: t.contact.info.email,
    },
    {
      icon: Phone,
      title: t.contact.info.phoneTitle,
      content: t.contact.info.phone,
    },
    {
      icon: Clock,
      title: t.contact.info.hoursTitle,
      content: t.contact.info.hours,
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&h=800&fit=crop"
          alt="Cherry blossoms in Japan"
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
            {t.contact.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/80 max-w-xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Form and Info */}
      <section className="py-24 lg:py-32 japan-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl border border-aka-100 p-8 lg:p-10 shadow-sm">
                  <BookingForm />
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {contactCards.map((card, i) => (
                <ScrollAnimation key={i} delay={i * 0.1}>
                  <div className="p-6 bg-white rounded-2xl border border-aka-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-aka-50 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-5 h-5 text-aka-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-sumi-800 mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-sumi-500 whitespace-pre-line">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}

              {/* Social Media */}
              <ScrollAnimation delay={0.4}>
                <div className="p-6 bg-white rounded-2xl border border-aka-100 shadow-sm">
                  <h3 className="font-semibold text-sm text-sumi-800 mb-4">
                    {t.contact.social.title}
                  </h3>
                  <div className="flex gap-3">
                    {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full bg-sumi-50 flex items-center justify-center hover:bg-aka-50 hover:text-aka-500 transition-all duration-300 text-sumi-400"
                        aria-label="Social media"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
