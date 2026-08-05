import React from 'react';
import { NavigationPage } from '../types';
import { SoapbrietyLogo } from './SoapbrietyLogo';
import { Calendar, HeartHandshake, ShieldCheck, Flame, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <SoapbrietyLogo variant="emblem" size="md" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2E23] border border-[#3A5C44] text-[#86EFAC] text-xs font-mono-num font-bold uppercase tracking-widest">
          <Calendar className="w-3.5 h-3.5 text-[#C87A4B]" />
          APRIL 20, 2023 • FOUNDER DJ'S CLEAN DATE
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif-heading font-black text-[#F5F2EB] uppercase leading-tight">
          Washing Away Yesterday. <br />
          <span className="text-[#C87A4B]">Choosing To Move Forward.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#A3B3A6] font-sans leading-relaxed">
          The true story of how a morning wash basin on April 20, 2023 sparked a nationwide movement centered around recovery, discipline, and second chances.
        </p>
      </div>

      {/* Documentary Chapters */}
      <div className="space-y-16">
        {/* Chapter 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[#0E1310] border border-[#223126]">
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A3E30]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="DJ founder story"
              className="w-full h-full object-cover filter contrast-110 brightness-90"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase">CHAPTER ONE</span>
            <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
              My Rock Bottom: April 20, 2023
            </h2>
            <p className="text-sm text-[#A3B3A6] leading-relaxed">
              For years, addiction ran the show. It eroded my physical health, alienated the people I loved, and left me spiritually bankrupt. On the morning of April 20, 2023, I hit a rock bottom that left no room for denial. I walked to the bathroom sink, turned the cold water handle, and washed my face. Staring at my reflection, I made one absolute commitment: I will not surrender today.
            </p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[#0E1310] border border-[#223126]">
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-mono-num font-bold text-[#4ADE80] uppercase">CHAPTER TWO</span>
            <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
              Finding Purpose In Discipline
            </h2>
            <p className="text-sm text-[#A3B3A6] leading-relaxed">
              Early recovery demands routine. You need physical anchors that reinforce your decision to stay clean. I discovered cold-process soapmaking during my early months of sobriety. Saponifying oils, measuring essential botanicals, and letting soap cure for 6 weeks required exact patience and discipline—the exact qualities required to maintain sobriety.
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A3E30] order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=800&q=80"
              alt="Handcrafted cold process soapmaking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[#0E1310] border border-[#223126]">
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A3E30]">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
              alt="The Wheelhouse community recovery center"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono-num font-bold text-[#86EFAC] uppercase">CHAPTER THREE</span>
            <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
              Funding The Wheelhouse & Giving Back
            </h2>
            <p className="text-sm text-[#A3B3A6] leading-relaxed">
              Soapbriety was never meant to be a simple e-commerce store. From day one, we pledged our profits to fund <strong className="text-[#F5F2EB]">The Wheelhouse</strong>—our community recovery center. Today, every bar sold directly sponsors peer support circles, weekly hot meals, hygiene kits, and emergency transit passes for people trying to get clean.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Quote Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17261B] via-[#101812] to-[#1E1611] border border-[#2E4535] text-center space-y-4 shadow-2xl">
        <Quote className="w-10 h-10 text-[#C87A4B] mx-auto opacity-60" />
        <h3 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB] max-w-2xl mx-auto">
          "Everyone deserves another opportunity to rebuild themselves. The soap is simply the daily reminder. Hope is the product."
        </h3>
        <div className="text-xs font-mono-num font-bold text-[#4ADE80]">
          — DJ, Founder of Soapbriety
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-widest shadow-xl copper-glow"
          >
            Shop Flagship Collection
          </button>
          <button
            onClick={() => onNavigate('wheelhouse')}
            className="px-8 py-4 rounded-xl bg-[#141A16] text-[#F5F2EB] font-bold text-xs uppercase tracking-widest border border-[#28392C]"
          >
            Visit The Wheelhouse Page
          </button>
        </div>
      </div>
    </div>
  );
};
