"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  HoverScale,
} from "@/components/animations";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Coffee,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <div
      className={`min-h-screen bg-[#f7f3ed] text-slate-900 font-sans ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero Section */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center mb-20">
          <SlideInLeft delay={0.1}>
            <div className="space-y-6">
              <motion.span
                className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#f9f4ee]"
                whileHover={{ scale: 1.05 }}
              >
                {t.home.tagline}
              </motion.span>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                {t.home.title}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-700">
                {t.home.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <HoverScale>
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-[#f9f4ee] transition hover:bg-slate-700"
                  >
                    {t.home.viewMenu}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </HoverScale>
                <HoverScale>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    {t.home.reserveTable}
                  </a>
                </HoverScale>
              </div>
            </div>
          </SlideInLeft>

          {/* Featured Highlight Card */}
          <SlideInRight delay={0.2}>
            <motion.div
              className="rounded-[2rem] bg-slate-950 p-8 text-[#f9f4ee] shadow-[0_40px_120px_-40px_rgba(15,23,42,0.55)] lg:p-12"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
                    {t.home.featuredDish}
                  </p>
                </div>
                <h2 className="text-3xl font-semibold leading-tight">
                  {t.home.smokedSalmon.split(",")[0]}
                </h2>
                <p className="text-base leading-7 text-slate-300">
                  {t.home.smokedSalmon}
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-3xl bg-slate-900/90 p-5"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    {t.home.coffee}
                  </p>
                  <p className="mt-3 font-semibold text-xl">
                    {t.home.espressoTonic}
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-3xl bg-slate-900/90 p-5"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    {t.home.bakery}
                  </p>
                  <p className="mt-3 font-semibold text-xl">
                    {t.home.hazelnutCroissant}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </SlideInRight>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <FadeIn delay={0.3}>
            <div className="space-y-6 rounded-[2rem] bg-white p-10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)]">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-slate-950" />
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  {t.home.aboutUs}
                </p>
              </div>
              <h2 className="text-3xl font-semibold text-slate-950">
                {t.home.aboutTitle}
              </h2>
              <p className="max-w-2xl text-slate-700 leading-8">
                {t.home.aboutText}
              </p>
              <HoverScale>
                <Link
                  href="/menu"
                  className="inline-block rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  {t.home.viewMenu}
                </Link>
              </HoverScale>
            </div>
          </FadeIn>

          <ScaleIn delay={0.4}>
            <motion.div
              className="space-y-4 rounded-[2rem] bg-slate-950 p-10 text-[#f9f4ee] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.5)]"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-slate-300 mt-1" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                    {t.home.openingHours}
                  </p>
                  <p className="mt-3 text-lg font-semibold">{t.home.monFri}</p>
                  <p className="text-lg font-semibold">{t.home.satSun}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-300 mt-1" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                    {t.home.location}
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    {t.home.locationAddress}
                  </p>
                </div>
              </div>
            </motion.div>
          </ScaleIn>
        </section>

        {/* Contact Section */}
        <section id="contact" className="rounded-[2rem] bg-white p-10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)]">
          <FadeIn delay={0.5}>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  {t.home.contact}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                  {t.home.planVisit}
                </h2>
                <p className="mt-4 max-w-xl text-slate-700 leading-8">
                  {t.home.contactDesc}
                </p>
              </div>
              <div className="space-y-4 rounded-[1.75rem] bg-slate-100 p-8">
                <motion.div whileHover={{ x: 5 }}>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-slate-900 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {t.home.phone}
                      </p>
                      <p className="text-slate-600">(555) 012-3456</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-slate-900 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {t.home.email}
                      </p>
                      <p className="text-slate-600">hello@augustcafe.com</p>
                    </div>
                  </div>
                </motion.div>
                <HoverScale>
                  <a
                    href="mailto:hello@augustcafe.com"
                    className="mt-4 inline-block rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-[#f9f4ee] transition hover:bg-slate-700"
                  >
                    {t.home.bookOnline}
                  </a>
                </HoverScale>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/90 px-6 py-6 text-center text-sm text-slate-500 shadow-inner">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {t.home.footerText}
        </motion.p>
      </footer>
    </div>
  );
}
