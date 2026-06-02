"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/menu/logo.jpg"
            alt="August Cafe Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <motion.p
              className="text-2xl font-semibold tracking-tight text-slate-900"
              whileHover={{ scale: 1.05 }}
            >
              August
            </motion.p>
            <p
              className={`text-sm uppercase tracking-[0.3em] text-slate-500 ${
                language === "ar" ? "text-right" : ""
              }`}
            >
              Cafe & Restaurant
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link
            href="/"
            className="transition hover:text-slate-900"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/menu"
            className="transition hover:text-slate-900"
          >
            {t.nav.menu}
          </Link>
          <a href="#about" className="transition hover:text-slate-900">
            {t.nav.about}
          </a>
          <a href="#contact" className="transition hover:text-slate-900">
            {t.nav.contact}
          </a>
        </nav>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "العربية" : "English"}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-4 md:hidden ${
            language === "ar" ? "text-right" : ""
          }`}
        >
          <Link
            href="/"
            className="text-slate-700 hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/menu"
            className="text-slate-700 hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.menu}
          </Link>
          <a
            href="#about"
            className="text-slate-700 hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            className="text-slate-700 hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.contact}
          </a>
        </motion.div>
      )}
    </header>
  );
}
