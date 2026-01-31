"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/config";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-washi-200/95 backdrop-blur-md shadow-sm border-b border-aka-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.svg"
              alt="Imperial Japan Tours"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span
              className={`text-lg font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-sumi-900" : "text-white"
              }`}
            >
              Imperial Japan Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? isScrolled
                      ? "text-aka-600"
                      : "text-aka-300"
                    : isScrolled
                    ? "text-sumi-600 hover:text-aka-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t.nav[link.key]}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aka-500 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="px-5 py-2 bg-aka-500 text-white text-sm font-medium rounded-full hover:bg-aka-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {t.nav.bookNow}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? "text-sumi-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-washi-200/98 backdrop-blur-lg border-b border-aka-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "text-aka-600"
                        : "text-sumi-700 hover:text-aka-600"
                    }`}
                  >
                    {t.nav[link.key]}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-sumi-100">
                <LanguageSwitcher />
                <Link
                  href="/contact"
                  className="flex-1 text-center px-5 py-2.5 bg-aka-500 text-white text-sm font-medium rounded-full hover:bg-aka-600 transition-colors"
                >
                  {t.nav.bookNow}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
