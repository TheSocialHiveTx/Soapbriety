import React from 'react';
import { NavigationPage } from '../types';
import { IMPACT_STATS, REVIEWS } from '../data/content';
import { ImpactCalculator } from './ImpactCalculator';
import { HeartHandshake, ShieldCheck, Award, FileText, Download, Users, ArrowRight } from 'lucide-react';

interface ImpactPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E2E23] border border-[#3A5C44] text-[#86EFAC] text-xs font-mono-num font-bold uppercase tracking-widest">
          <HeartHandshake className="w-4 h-4 text-[#4ADE80]" />
          COMMUNITY IMPACT REPORTING
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
          Verified Impact & Community Transparency
        </h1>
        <p className="text-sm sm:text-base text-[#A3B3A6] leading-relaxed">
          We believe in complete accountability. Every cold-process bar sold directly contributes to quantifiable recovery support at The Wheelhouse.
        </p>
      </div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#121814] border border-[#233127] text-center space-y-2">
          <div className="text-4xl font-mono-num font-black text-[#4ADE80]">
            {IMPACT_STATS.barsSold.toLocaleString()}+
          </div>
          <div className="text-xs font-mono-num font-bold text-[#9EB0A1] uppercase">
            Bars Sold Nationwide
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#121814] border border-[#233127] text-center space-y-2">
          <div className="text-4xl font-mono-num font-black text-[#C87A4B]">
            ${IMPACT_STATS.moneyDonated.toLocaleString()}+
          </div>
          <div className="text-xs font-mono-num font-bold text-[#9EB0A1] uppercase">
            Direct Wheelhouse Funding
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#121814] border border-[#233127] text-center space-y-2">
          <div className="text-4xl font-mono-num font-black text-[#86EFAC]">
            {IMPACT_STATS.eventsFunded}+
          </div>
          <div className="text-xs font-mono-num font-bold text-[#9EB0A1] uppercase">
            Peer Recovery Events
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#121814] border border-[#233127] text-center space-y-2">
          <div className="text-4xl font-mono-num font-black text-[#F5F2EB]">
            {IMPACT_STATS.volunteerHours.toLocaleString()}+
          </div>
          <div className="text-xs font-mono-num font-bold text-[#9EB0A1] uppercase">
            Volunteer Hours
          </div>
        </div>
      </div>

      {/* Calculator Widget */}
      <ImpactCalculator />

      {/* Annual Report Download Card */}
      <div className="p-8 rounded-3xl bg-[#0F1411] border border-[#243428] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-serif-heading font-bold text-xl text-[#F5F2EB] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#4ADE80]" />
            Annual Wheelhouse Community Impact Report
          </h3>
          <p className="text-xs text-[#9EB0A1]">
            Download our complete audited breakdown of proceeds distribution, meal counts, and peer circle attendance logs.
          </p>
        </div>

        <button
          onClick={() => alert("Downloading Soapbriety Annual Impact Report (PDF)...")}
          className="px-6 py-3.5 rounded-xl bg-[#1E2E23] text-[#4ADE80] font-bold text-xs uppercase tracking-wider border border-[#3E5C46] hover:bg-[#273D2F] transition-all flex items-center gap-2 shrink-0"
        >
          <Download className="w-4 h-4" /> Download PDF Report
        </button>
      </div>
    </div>
  );
};
