"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  HoverScale,
} from "@/components/animations";
import { Heart, ShoppingCart, Star, ChefHat } from "lucide-react";
import Image from "next/image";

const menuItems = {
  pizza: [
    { name: "margherita", desc: "margheritaDesc", price: 130 },
    { name: "chickenPizza", desc: "chickenPizzaDesc", price: 175 },
    { name: "superCrunchyPizza", desc: "superCrunchyPizzaDesc", price: 200 },
    { name: "chickenBBQPizza", desc: "chickenBBQPizzaDesc", price: 190 },
    { name: "chickenRanchPizza", desc: "chickenRanchPizzaDesc", price: 190 },
    { name: "shrimpPizza", desc: "shrimpPizzaDesc", price: 280 },
  ],
  crepe: [
    { name: "margheritaCrepe", desc: "margheritaCrepeDesc", price: 95 },
    { name: "sujukCrepe", desc: "sujukCrepeDesc", price: 95 },
    { name: "mixedMeatCrepe", desc: "mixedMeatCrepeDesc", price: 120 },
    { name: "koftaCrepe", desc: "koftaCrepeDesc", price: 110 },
    { name: "shawarmaCrepe", desc: "shawarmaCrepeDesc", price: 110 },
    { name: "paniniCrepe", desc: "paniniCrepeDesc", price: 80 },
  ],
  meals: [
    { name: "chickenGrill", desc: "chickenGrillDesc", price: 200 },
    { name: "mushroomGrill", desc: "mushroomGrillDesc", price: 230 },
    { name: "barMizan", desc: "barMizanDesc", price: 250 },
    { name: "fajitaChicken", desc: "fajitaChickenDesc", price: 240 },
    { name: "chickenCrispy", desc: "chickenCrispyDesc", price: 185 },
    { name: "chickenAugust", desc: "chickenAugustDesc", price: 260 },
  ],
  breakfast: [
    { name: "croissantClassic", desc: "croissantClassicDesc", price: 75 },
    { name: "croissantAugust", desc: "croissantAugustDesc", price: 90 },
    { name: "toastClassic", desc: "toastClassicDesc", price: 70 },
    { name: "nutellaCroissant", desc: "nutellaCroissantDesc", price: 80 },
    { name: "omeletRoll", desc: "omeletRollDesc", price: 70 },
  ],
  drinks: [
    { name: "icedChocolate", desc: "icedChocolateDesc", price: 60 },
    { name: "icedLatte", desc: "icedLatteDesc", price: 65 },
    { name: "frappie", desc: "frappieDesc", price: 75 },
    { name: "icedMatchaLatte", desc: "icedMatchaLatteDesc", price: 75 },
    { name: "milkShakeVanilla", desc: "milkShakeVanillaDesc", price: 70 },
  ],
};

const featuredItem = {
  name: "chickenAugust",
  desc: "chickenAugustDesc",
  fullDesc: "chickenAugustFullDesc",
  price: 260,
  featured: true,
};

const categoryHighlights = [
  {
    id: "pizza",
    titleKey: "pizzaCategory",
    image: "/menu/pizza-card.jpg",
  },
  {
    id: "crepe",
    titleKey: "crepeCategory",
    image: "/menu/crepe-card.jpg",
  },
  {
    id: "meals",
    titleKey: "mealsCategory",
    image: "/menu/meals-card.jpg",
  },
  {
    id: "breakfast",
    titleKey: "breakfastCategory",
    image: "/menu/breakfast-card.jpg",
  },
  {
    id: "drinks",
    titleKey: "iceDrinksCategory",
    image: "/menu/icedrinks-card.jpg",
  },
];

type Category = "all" | "pizza" | "crepe" | "meals" | "breakfast" | "drinks";

export default function MenuPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return [
        ...menuItems.pizza.map((item) => ({ ...item, category: "pizza" })),
        ...menuItems.crepe.map((item) => ({ ...item, category: "crepe" })),
        ...menuItems.meals.map((item) => ({ ...item, category: "meals" })),
        ...menuItems.breakfast.map((item) => ({ ...item, category: "breakfast" })),
        ...menuItems.drinks.map((item) => ({ ...item, category: "drinks" })),
      ];
    }
    return menuItems[selectedCategory as keyof typeof menuItems].map(
      (item) => ({
        ...item,
        category: selectedCategory,
      })
    );
  }, [selectedCategory]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const isRTL = language === "ar";

  return (
    <div
      className={`min-h-screen bg-[#eef0e7] text-[#1f473f] font-sans ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Page Header */}
        <FadeIn delay={0.1} className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5e786d]">
            {t.menu.title}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#163f35] sm:text-5xl">
            {t.menu.title}
          </h1>
          <p className="mt-4 text-lg text-[#415b52]">{t.menu.subtitle}</p>
        </FadeIn>

        {/* Menu Photo Categories */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categoryHighlights.map((category) => (
            <div
              key={category.id}
              className="group overflow-hidden rounded-[1.7rem] border border-[#d7d1c2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={category.image}
                  alt={t.menu[category.titleKey as keyof typeof t.menu]}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-[#8c9d8c]">
                  {t.menu[category.titleKey as keyof typeof t.menu]}
                </p>
                <p className="text-sm text-[#4a6256]">
                  {language === "en"
                    ? "Authentic menu visuals from our café"
                    : "صور قائمة أصلية من مقهانا"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Dish Section */}
        <SlideInLeft delay={0.2} className="mb-16">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-[#f9f4ee] shadow-[0_40px_120px_-40px_rgba(15,23,42,0.55)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <ChefHat className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
                    {t.menu.featured}
                  </p>
                </div>
                <h2 className="text-3xl font-semibold leading-tight">
                  {t.menu[featuredItem.name as keyof typeof t.menu]}
                </h2>
                <p className="text-base leading-7 text-slate-300">
                  {t.menu[featuredItem.fullDesc as keyof typeof t.menu]}
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-bold">{featuredItem.price} EGP</p>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <ScaleIn delay={0.3} className="flex flex-col items-center justify-center">
                <div className="mb-6 w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center">
                  <Image
                    src="/coffee-cup.svg"
                    alt="Featured Smoked Salmon"
                    width={120}
                    height={120}
                    className="text-amber-600"
                  />
                </div>
                <button
                  onClick={addToCart}
                  className="rounded-2xl bg-[#f9f4ee] px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:shadow-lg"
                >
                  {t.menu.addToCart}
                </button>
              </ScaleIn>
            </div>
          </div>
        </SlideInLeft>

        {/* Category Filter */}
        <FadeIn delay={0.3} className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {(
              [
                { id: "all", label: t.menu.title },
                { id: "pizza", label: t.menu.pizzaCategory },
                { id: "crepe", label: t.menu.crepeCategory },
                { id: "meals", label: t.menu.mealsCategory },
                { id: "breakfast", label: t.menu.breakfastCategory },
                { id: "drinks", label: t.menu.iceDrinksCategory },
              ] as Array<{ id: Category; label: string }>
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-6 py-2 font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-slate-950 text-[#f9f4ee]"
                    : "border border-slate-300 text-slate-700 hover:border-slate-950"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Menu Items Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <ScaleIn key={`${item.category}-${item.name}`} delay={0.1 * index}>
              <HoverScale>
                <div className="group rounded-[1.5rem] bg-white p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)] transition hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-950">
                        {t.menu[item.name as keyof typeof t.menu]}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {t.menu[item.desc as keyof typeof t.menu]}
                      </p>
                      <p className="mt-4 text-xl font-bold text-slate-950">
                        {item.price} EGP
                      </p>
                    </div>
                    <button
                      onClick={() => toggleFavorite(item.name)}
                      className="mt-1 transition hover:scale-125"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          favorites.includes(item.name)
                            ? "fill-red-500 text-red-500"
                            : "text-slate-300 hover:text-red-500"
                        }`}
                      />
                    </button>
                  </div>

                  <button
                    onClick={addToCart}
                    className="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      {t.menu.addToCart}
                    </div>
                  </button>
                </div>
              </HoverScale>
            </ScaleIn>
          ))}
        </div>

        {/* Shopping Cart Indicator */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 rounded-full bg-slate-950 px-6 py-3 text-[#f9f4ee] font-semibold shadow-lg">
            <ShoppingCart className="inline-block mr-2 h-5 w-5" />
            {cartCount} {cartCount === 1 ? "item" : "items"}
          </div>
        )}
      </main>
    </div>
  );
}
