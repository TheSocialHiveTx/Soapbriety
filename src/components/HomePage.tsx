import React, { useState } from 'react';
import { Product, NavigationPage } from '../types';
import { PRODUCTS } from '../data/products';
import { REVIEWS, EVENTS, SOCIAL_POSTS, IMPACT_STATS } from '../data/content';
import { ProductCard } from './ProductCard';
import { SoapbrietyLogo } from './SoapbrietyLogo';
import { ImpactCalculator } from './ImpactCalculator';
import { 
  ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Play, Star, Calendar, 
  MapPin, Users, Award, CheckCircle2, Quote, Instagram, Facebook, ExternalLink, Flame
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onAddToCart: (product: Product, isSubscription?: boolean) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onQuickView,
  onSelectProduct
}) => {
  const [activeCollectionTab, setActiveCollectionTab] = useState<string>('All');
  const [activeReviewCategory, setActiveReviewCategory] = useState<'all' | 'product' | 'mission'>('all');

  const filteredProducts = activeCollectionTab === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCollectionTab);

  const filteredReviews = activeReviewCategory === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.category === activeReviewCategory);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070908] pt-12 pb-24 border-b border-[#1A261D]">
        {/* Cinematic Background Video / Atmospheric Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=2000&q=80"
            alt="Cold process soap pouring"
            className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-75 scale-105 transform animate-pulse"
            style={{ animationDuration: '10s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Skull Emblem Logo */}
          <div className="inline-block transform hover:scale-105 transition-transform duration-500">
            <SoapbrietyLogo variant="emblem" size="lg" />
          </div>

          {/* Hero Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2E20] border border-[#3A5C44] text-[#86EFAC] text-xs font-mono-num font-bold tracking-widest uppercase shadow-lg">
              <Flame className="w-4 h-4 text-[#C87A4B]" />
              FROTHY AF • APRIL 20, 2023 CLEAN DATE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-black tracking-tight text-[#F5F2EB] uppercase leading-[1.05]">
              MORE THAN SOAP. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F2EB] via-[#C87A4B] to-[#4ADE80]">
                EVERY BAR HELPS SOMEONE START OVER.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#A3B3A6] max-w-2xl mx-auto font-sans leading-relaxed">
              Premium handcrafted cold-process soap funding recovery, community outreach, and peer support circles through <span className="text-[#F5F2EB] font-bold">The Wheelhouse</span>.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('shop')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-extrabold text-xs uppercase tracking-widest hover:bg-[#D98A5B] transition-all flex items-center justify-center gap-3 shadow-2xl copper-glow"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('story')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#141C16] text-[#F5F2EB] hover:text-[#4ADE80] border border-[#27382D] hover:border-[#3E5C46] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-current text-[#4ADE80]" />
              Read Our Story (April 20, 2023)
            </button>
          </div>

          {/* Key Value Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#1C2920]/80 text-xs font-mono-num text-[#9EB0A1]">
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#101713]/60 border border-[#1E2C22]">
              <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
              <span>100% Cold-Process Craft</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#101713]/60 border border-[#1E2C22]">
              <HeartHandshake className="w-4 h-4 text-[#C87A4B]" />
              <span>Funds The Wheelhouse</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#101713]/60 border border-[#1E2C22]">
              <ShieldCheck className="w-4 h-4 text-[#86EFAC]" />
              <span>No Synthetic Detergents</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#101713]/60 border border-[#1E2C22]">
              <Sparkles className="w-4 h-4 text-[#F5F2EB]" />
              <span>Free US Shipping $45+</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY SOAPBRIETY EXISTS (DOCUMENTARY SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#121A15] via-[#0E1310] to-[#17120E] border border-[#273B2E] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden shadow-2xl">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#36503E] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                alt="Founder DJ crafting cold process soap"
                className="w-full h-full object-cover filter contrast-110 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0C0D0E]/90 backdrop-blur-md border border-[#26382D]">
                <span className="text-[10px] font-mono-num font-bold text-[#C87A4B] uppercase block">
                  FOUNDER • DJ
                </span>
                <span className="font-serif-heading font-bold text-sm text-[#F5F2EB]">
                  Clean & Sober since April 20, 2023
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              <span>WHY SOAPBRIETY EXISTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-black text-[#F5F2EB] leading-tight">
              The Soap Is Not The Product. <br />
              <span className="text-[#4ADE80]">Hope Is.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A3B3A6] leading-relaxed font-sans">
              <p>
                On <strong className="text-[#F5F2EB]">April 20, 2023</strong>, DJ made the life-changing decision to get clean and rebuild his life from the ground up. Soapbriety was born directly from that moment of total surrender and rebirth.
              </p>
              <p>
                Every handcrafted bar symbolizes washing away yesterday's mistakes and choosing to walk forward with discipline. Profits directly fund <strong className="text-[#F5F2EB]">The Wheelhouse</strong>—sponsoring peer recovery circles, hot meals, hygiene kits, and community outreach.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141E17] border-l-4 border-[#C87A4B] text-xs text-[#F5F2EB] font-serif-heading italic">
              "We don't just sell soap. We provide a daily physical reminder at the sink that you can start fresh anytime."
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('story')}
                className="px-6 py-3.5 rounded-xl bg-[#1E2E23] hover:bg-[#273D2F] border border-[#3C5D46] text-[#4ADE80] font-bold text-xs uppercase tracking-wider transition-all"
              >
                Read DJ’s Full Founder Journey
              </button>
              <button
                onClick={() => onNavigate('wheelhouse')}
                className="px-6 py-3.5 rounded-xl bg-[#141916] text-[#D0C9B8] hover:text-[#F5F2EB] border border-[#242F27] font-bold text-xs uppercase tracking-wider transition-all"
              >
                Learn About The Wheelhouse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              CURATED ARTISAN BATCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#F5F2EB]">
              Featured Collections
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-mono-num font-bold text-[#4ADE80] hover:underline flex items-center gap-1"
          >
            EXPLORE ALL COLLECTIONS <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Collection 1: Best Sellers */}
          <div
            onClick={() => {
              setActiveCollectionTab('Best Sellers');
              onNavigate('shop');
            }}
            className="group relative rounded-2xl overflow-hidden bg-[#121714] border border-[#233127] h-80 p-6 flex flex-col justify-end cursor-pointer shadow-xl hover:border-[#4ADE80] transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=800&q=80"
              alt="Best Sellers Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/60 to-transparent"></div>
            <div className="relative z-10 space-y-2">
              <span className="px-2.5 py-1 rounded bg-[#C87A4B] text-[#0C0D0E] text-[10px] font-mono-num font-black uppercase">
                BEST SELLERS
              </span>
              <h3 className="font-serif-heading font-black text-2xl text-[#F5F2EB]">
                Flagship Cold Process Bars
              </h3>
              <p className="text-xs text-[#A3B3A6] line-clamp-2">
                Day One, Wheelhouse Reserve, Iron Clasp Pine Tar. Deep lather, zero synthetic junk.
              </p>
            </div>
          </div>

          {/* Collection 2: Fruit Collection */}
          <div
            onClick={() => {
              setActiveCollectionTab('Fruit Collection');
              onNavigate('shop');
            }}
            className="group relative rounded-2xl overflow-hidden bg-[#121714] border border-[#233127] h-80 p-6 flex flex-col justify-end cursor-pointer shadow-xl hover:border-[#4ADE80] transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
              alt="Fruit Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/60 to-transparent"></div>
            <div className="relative z-10 space-y-2">
              <span className="px-2.5 py-1 rounded bg-[#22C55E] text-[#0C0D0E] text-[10px] font-mono-num font-black uppercase">
                FRUIT COLLECTION
              </span>
              <h3 className="font-serif-heading font-black text-2xl text-[#F5F2EB]">
                Citrus & Botanical Renewal
              </h3>
              <p className="text-xs text-[#A3B3A6] line-clamp-2">
                Blood orange, ruby red grapefruit, wild fig, blue poppy seed natural micro-scrubs.
              </p>
            </div>
          </div>

          {/* Collection 3: Topicals & Gift Sets */}
          <div
            onClick={() => {
              setActiveCollectionTab('Gift Boxes');
              onNavigate('shop');
            }}
            className="group relative rounded-2xl overflow-hidden bg-[#121714] border border-[#233127] h-80 p-6 flex flex-col justify-end cursor-pointer shadow-xl hover:border-[#4ADE80] transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80"
              alt="Fresh Start Gift Boxes"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/60 to-transparent"></div>
            <div className="relative z-10 space-y-2">
              <span className="px-2.5 py-1 rounded bg-[#F5F2EB] text-[#0C0D0E] text-[10px] font-mono-num font-black uppercase">
                GIFT SETS & CRATES
              </span>
              <h3 className="font-serif-heading font-black text-2xl text-[#F5F2EB]">
                Fresh Start Gift Boxes
              </h3>
              <p className="text-xs text-[#A3B3A6] line-clamp-2">
                3-bar and 5-bar luxury bundles packed with solid cedarwood drainage dishes & founder letters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1F2B23] pb-6">
          <div>
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              HANDMADE IN MICRO BATCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#F5F2EB]">
              Popular Handcrafted Bars
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Best Sellers', 'Fruit Collection', 'Topicals', 'Gift Boxes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCollectionTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-num font-bold transition-all ${
                  activeCollectionTab === tab
                    ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3A5C44]'
                    : 'bg-[#121614] text-[#8E9E91] border border-[#222E26] hover:text-[#F5F2EB]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 5. THE IMPACT ENGINE & TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0F1411] border border-[#243428] p-8 sm:p-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              TRANSPARENT COMMUNITY REINVESTMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#F5F2EB]">
              The Soapbriety Impact Engine
            </h2>
            <p className="text-sm text-[#A3B3A6]">
              Every bar you buy creates a direct ripple effect through recovery initiatives and community outreach at The Wheelhouse.
            </p>
          </div>

          {/* Animated Process Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 rounded-2xl bg-[#141B17] border border-[#223126] space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E3023] border border-[#3E5C46] text-[#4ADE80] font-mono-num font-black text-lg flex items-center justify-center mx-auto">
                01
              </div>
              <h4 className="font-serif-heading font-bold text-base text-[#F5F2EB]">You Buy Soap</h4>
              <p className="text-xs text-[#8E9E91]">You receive handcrafted cold-process bars brewed with raw ingredients.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141B17] border border-[#223126] space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E3023] border border-[#3E5C46] text-[#C87A4B] font-mono-num font-black text-lg flex items-center justify-center mx-auto">
                02
              </div>
              <h4 className="font-serif-heading font-bold text-base text-[#F5F2EB]">Proceeds Fund Wheelhouse</h4>
              <p className="text-xs text-[#8E9E91]">Fixed profits directly sponsor community recovery space facilities.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141B17] border border-[#223126] space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E3023] border border-[#3E5C46] text-[#86EFAC] font-mono-num font-black text-lg flex items-center justify-center mx-auto">
                03
              </div>
              <h4 className="font-serif-heading font-bold text-base text-[#F5F2EB]">Weekly Peer Circles</h4>
              <p className="text-xs text-[#8E9E91]">Free weekly mentorship, hot meals, and hygiene outreach hosted.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141B17] border border-[#223126] space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E3023] border border-[#3E5C46] text-[#F5F2EB] font-mono-num font-black text-lg flex items-center justify-center mx-auto">
                04
              </div>
              <h4 className="font-serif-heading font-bold text-base text-[#F5F2EB]">Lives Restored</h4>
              <p className="text-xs text-[#8E9E91]">Real individuals get second chances to rebuild themselves with dignity.</p>
            </div>
          </div>

          {/* Live Impact Counter Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#1C281F]">
            <div className="p-4 rounded-xl bg-[#0B0E0C] text-center">
              <div className="text-3xl font-mono-num font-black text-[#4ADE80]">
                {IMPACT_STATS.barsSold.toLocaleString()}+
              </div>
              <div className="text-[11px] font-mono-num text-[#8E9E91] uppercase tracking-wider mt-1">
                Handcrafted Bars Sold
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0E0C] text-center">
              <div className="text-3xl font-mono-num font-black text-[#C87A4B]">
                ${IMPACT_STATS.moneyDonated.toLocaleString()}+
              </div>
              <div className="text-[11px] font-mono-num text-[#8E9E91] uppercase tracking-wider mt-1">
                Funded to The Wheelhouse
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0E0C] text-center">
              <div className="text-3xl font-mono-num font-black text-[#86EFAC]">
                {IMPACT_STATS.eventsFunded}+
              </div>
              <div className="text-[11px] font-mono-num text-[#8E9E91] uppercase tracking-wider mt-1">
                Sober Events & Circles
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0E0C] text-center">
              <div className="text-3xl font-mono-num font-black text-[#F5F2EB]">
                {IMPACT_STATS.volunteerHours.toLocaleString()}+
              </div>
              <div className="text-[11px] font-mono-num text-[#8E9E91] uppercase tracking-wider mt-1">
                Community Volunteer Hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT CALCULATOR WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImpactCalculator />
      </section>

      {/* 7. MEET DJ - DOCUMENTARY MILESTONE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0E0C] border border-[#202E24] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
                THE FOUNDER'S JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#F5F2EB]">
                Meet DJ: Founder of Soapbriety
              </h2>
            </div>
            <button
              onClick={() => onNavigate('story')}
              className="px-6 py-3 rounded-xl bg-[#1E2E23] text-[#4ADE80] font-bold text-xs uppercase tracking-wider border border-[#3A5C44]"
            >
              Read Full Documentary Story
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[#121714] border border-[#222E26] space-y-3">
              <span className="text-xs font-mono-num font-bold text-[#C87A4B]">
                APRIL 20, 2023
              </span>
              <h4 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
                1. The Choice To Change
              </h4>
              <p className="text-xs text-[#8E9E91] leading-relaxed">
                DJ woke up, washed his face with cold water, and decided that April 20th would be his final day in addiction. The morning wash basin became the daily symbol of a clean start.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121714] border border-[#222E26] space-y-3">
              <span className="text-xs font-mono-num font-bold text-[#4ADE80]">
                SUMMER 2023
              </span>
              <h4 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
                2. Crafting Soap & Purpose
              </h4>
              <p className="text-xs text-[#8E9E91] leading-relaxed">
                Learning the disciplined art of cold-process soapmaking. Combining plant oils, essential oils, and curing bars for 42 days—a physical metaphor for patience in recovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121714] border border-[#222E26] space-y-3">
              <span className="text-xs font-mono-num font-bold text-[#86EFAC]">
                TODAY & BEYOND
              </span>
              <h4 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
                3. The Movement & Wheelhouse
              </h4>
              <p className="text-xs text-[#8E9E91] leading-relaxed">
                Soapbriety has shipped over 48,000 bars nationwide, funding hundreds of recovery support events and providing second chances to hundreds of individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMMUNITY MEDIA GALLERY (INSTAGRAM & FACEBOOK INTEGRATIONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              INSTAGRAM & FACEBOOK COMMUNITY FEED
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#F5F2EB]">
              Behind The Scenes & Impact Gallery
            </h2>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/soapbriety"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#141A16] border border-[#26352A] text-xs font-mono-num font-bold text-[#E1306C] hover:bg-[#1D2721] flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" /> @soapbriety
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567785470478"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#141A16] border border-[#26352A] text-xs font-mono-num font-bold text-[#1877F2] hover:bg-[#1D2721] flex items-center gap-2"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOCIAL_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#121614] border border-[#232F27] hover:border-[#4ADE80] transition-all shadow-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent opacity-80"></div>

              <div className="absolute top-3 left-3 p-2 rounded-lg bg-[#0C0D0E]/80 backdrop-blur-md text-xs">
                {post.platform === 'instagram' ? (
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                ) : (
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                )}
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0C0D0E]/90 backdrop-blur-md border border-[#25362A] text-xs space-y-1">
                <p className="text-[11px] text-[#D0C9B8] line-clamp-2">{post.caption}</p>
                <div className="flex items-center gap-3 text-[10px] font-mono-num text-[#4ADE80] pt-1">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS (PRODUCT REVIEWS VS MISSION STORIES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              VERIFIED BUYERS & COMMUNITY STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#F5F2EB]">
              What People Are Saying
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveReviewCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono-num font-bold transition-all ${
                activeReviewCategory === 'all'
                  ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3A5C44]'
                  : 'bg-[#121614] text-[#8E9E91] border border-[#222E26]'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setActiveReviewCategory('product')}
              className={`px-4 py-2 rounded-xl text-xs font-mono-num font-bold transition-all ${
                activeReviewCategory === 'product'
                  ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3A5C44]'
                  : 'bg-[#121614] text-[#8E9E91] border border-[#222E26]'
              }`}
            >
              Product Reviews
            </button>
            <button
              onClick={() => setActiveReviewCategory('mission')}
              className={`px-4 py-2 rounded-xl text-xs font-mono-num font-bold transition-all ${
                activeReviewCategory === 'mission'
                  ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3A5C44]'
                  : 'bg-[#121614] text-[#8E9E91] border border-[#222E26]'
              }`}
            >
              Mission Stories
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#121714] border border-[#233127] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {review.badge && (
                    <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-[#C87A4B]/20 text-[#C87A4B] border border-[#C87A4B]/30">
                      {review.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-serif-heading font-bold text-base text-[#F5F2EB]">
                  "{review.title}"
                </h4>
                <p className="text-xs text-[#9EB0A1] leading-relaxed">
                  {review.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C261E] flex items-center gap-3">
                <img
                  src={review.userAvatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#2A3B2F]"
                />
                <div>
                  <div className="font-serif-heading font-bold text-xs text-[#F5F2EB]">
                    {review.author}
                  </div>
                  <div className="text-[10px] font-mono-num text-[#78887C]">
                    {review.location} • Verified Buyer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
