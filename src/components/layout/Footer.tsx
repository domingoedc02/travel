"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/config";
import { Instagram, Twitter, Facebook, Youtube, ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-kuro-900 text-white relative">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-aka-400 via-gold-400 to-aka-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.svg"
                alt="Imperial Japan Tours"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-lg font-semibold">Imperial Japan Tours</span>
            </div>
            <p className="text-kuro-200 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-kuro-800 flex items-center justify-center hover:bg-aka-500 transition-colors duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold-400 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: t.nav.home },
                { href: "/about", label: t.nav.about },
                { href: "/services", label: t.nav.services },
                { href: "/contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-kuro-200 hover:text-aka-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold-400 mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-sm text-kuro-200">
              <li>{t.contact.info.email}</li>
              <li>{t.contact.info.phone}</li>
              <li className="whitespace-pre-line">{t.contact.info.address}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold-400 mb-4">
              {t.footer.newsletter}
            </h4>
            <p className="text-sm text-kuro-200 mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-4 py-2 bg-kuro-800 border border-kuro-700 rounded-full text-sm text-white placeholder:text-kuro-400 focus:outline-none focus:border-aka-400 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-aka-500 text-white text-sm font-medium rounded-full hover:bg-aka-600 transition-colors"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-kuro-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-kuro-400">{t.footer.copyright}</p>
          <div className="flex gap-6 text-xs text-kuro-400">
            <a href="#" className="hover:text-aka-300 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-aka-300 transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-aka-500 text-white flex items-center justify-center hover:bg-aka-600 transition-colors shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
