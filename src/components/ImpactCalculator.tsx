import React, { useState } from 'react';
import { HeartHandshake, Utensils, Bus, ShieldCheck, Sparkles } from 'lucide-react';

export const ImpactCalculator: React.FC = () => {
  const [barsPerMonth, setBarsPerMonth] = useState<number>(3);

  const annualBars = barsPerMonth * 12;
  const peerHours = Math.round(annualBars * 1.5);
  const mealsFunded = Math.round(annualBars * 3);
  const transitPasses = Math.round(annualBars * 0.75);
  const hygieneKits = Math.round(annualBars * 1.25);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121E15] via-[#0E1510] to-[#16120F] border border-[#2B4232] p-6 sm:p-10 shadow-2xl">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#4ADE80]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-mono-num font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            THE IMPACT CALCULATOR
          </div>
          <h3 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
            See Your Personal Impact at The Wheelhouse
          </h3>
          <p className="text-xs sm:text-sm text-[#9EB0A1]">
            Slide to select your family's monthly soap bar usage and calculate how many hours of peer recovery circles your order funds annually.
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="max-w-lg mx-auto p-6 rounded-2xl bg-[#090D0A] border border-[#213025] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono-num font-bold">
            <span className="text-[#A3B3A6]">Monthly Soap Usage:</span>
            <span className="text-lg text-[#4ADE80] font-black">{barsPerMonth} Bars / Month</span>
          </div>

          <input
            type="range"
            min="1"
            max="12"
            value={barsPerMonth}
            onChange={(e) => setBarsPerMonth(parseInt(e.target.value))}
            className="w-full h-2.5 bg-[#17231B] rounded-lg appearance-none cursor-pointer accent-[#4ADE80]"
          />

          <div className="flex justify-between text-[10px] font-mono-num text-[#68786B]">
            <span>1 Bar (Individual)</span>
            <span>3 Bars (Household)</span>
            <span>6 Bars (Family)</span>
            <span>12 Bars (Wholesale/Gifts)</span>
          </div>
        </div>

        {/* 1-Year Impact Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#121A15] border border-[#24362A] text-center space-y-1">
            <HeartHandshake className="w-6 h-6 text-[#4ADE80] mx-auto" />
            <div className="text-2xl sm:text-3xl font-mono-num font-black text-[#F5F2EB]">
              {peerHours} hrs
            </div>
            <div className="text-[11px] font-mono-num text-[#9EB0A1] font-bold">
              Peer Recovery Circles
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#121A15] border border-[#24362A] text-center space-y-1">
            <Utensils className="w-6 h-6 text-[#C87A4B] mx-auto" />
            <div className="text-2xl sm:text-3xl font-mono-num font-black text-[#F5F2EB]">
              {mealsFunded}
            </div>
            <div className="text-[11px] font-mono-num text-[#9EB0A1] font-bold">
              Hot Fellowship Meals
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#121A15] border border-[#24362A] text-center space-y-1">
            <ShieldCheck className="w-6 h-6 text-[#86EFAC] mx-auto" />
            <div className="text-2xl sm:text-3xl font-mono-num font-black text-[#F5F2EB]">
              {hygieneKits}
            </div>
            <div className="text-[11px] font-mono-num text-[#9EB0A1] font-bold">
              Hygiene Kits
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#121A15] border border-[#24362A] text-center space-y-1">
            <Bus className="w-6 h-6 text-[#38BDF8] mx-auto" />
            <div className="text-2xl sm:text-3xl font-mono-num font-black text-[#F5F2EB]">
              {transitPasses}
            </div>
            <div className="text-[11px] font-mono-num text-[#9EB0A1] font-bold">
              Crisis Transit Passes
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#8E9E91] font-mono-num">
          The soap is simply the daily reminder. <span className="text-[#F5F2EB] font-bold">Hope is the product.</span>
        </div>
      </div>
    </div>
  );
};
