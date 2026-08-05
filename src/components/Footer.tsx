import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { SoapbrietyLogo } from './SoapbrietyLogo';
import { Instagram, Facebook, Mail, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#08090A] border-t border-[#1C241E] text-[#F5F2EB] pt-16 pb-12">
      {/* Newsletter / Join the Movement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121F16] via-[#0D1510] to-[#18110D] border border-[#2D4534] p-8 sm:p-12 lg:p-16">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ADE80]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C87A4B]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-mono-num font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                JOIN THE MOVEMENT
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-black tracking-tight text-[#F5F2EB]">
                More Than Soap. <span className="text-[#C87A4B]">A Fresh Start.</span>
              </h2>
              <p className="text-base text-[#A3B3A6] leading-relaxed max-w-xl">
                Subscribe for early micro-batch bar drops, recovery milestone stories from DJ & The Wheelhouse, exclusive community events, and limited edition releases.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-6 rounded-2xl bg-[#172E1E] border border-[#3E5C46] flex items-center gap-4 text-[#86EFAC]">
                  <CheckCircle2 className="w-8 h-8 shrink-0 text-[#4ADE80]" />
                  <div>
                    <h4 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">Welcome to the Movement</h4>
                    <p className="text-xs text-[#A3B3A6] mt-0.5">Check your inbox for your 15% welcome code & founder story.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 px-5 py-4 rounded-xl bg-[#090C0A] border border-[#2B3B30] text-[#F5F2EB] placeholder-[#607065] focus:outline-none focus:border-[#4ADE80] transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-widest hover:bg-[#D98A5B] transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg copper-glow"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <div className="flex items-center gap-4 mt-4 text-[11px] font-mono-num text-[#78887C]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" /> No spam, ever
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#C87A4B]" /> 100% funds community outreach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A221C]">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <SoapbrietyLogo variant="wordmark" />
          <p className="text-sm text-[#8E9E91] leading-relaxed max-w-sm">
            Soapbriety exists to inspire fresh starts while funding recovery initiatives through The Wheelhouse. Handcrafted cold-process bars brewed with discipline, purpose, and raw ingredients.
          </p>
          <div className="text-xs font-mono-num text-[#C87A4B] font-bold">
            FOUNDED APRIL 20, 2023 BY DJ
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/soapbriety"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#141816] text-[#F5F2EB] hover:text-[#4ADE80] hover:bg-[#1D2620] border border-[#27322B] transition-all flex items-center gap-2 text-xs font-semibold"
              aria-label="Follow Soapbriety on Instagram"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567785470478"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#141816] text-[#F5F2EB] hover:text-[#4ADE80] hover:bg-[#1D2620] border border-[#27322B] transition-all flex items-center gap-2 text-xs font-semibold"
              aria-label="Follow Soapbriety on Facebook"
            >
              <Facebook className="w-4 h-4 text-[#1877F2]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Shop Navigation */}
        <div className="space-y-4">
          <h4 className="font-serif-heading font-bold text-sm tracking-widest text-[#F5F2EB] uppercase">
            Shop Collections
          </h4>
          <ul className="space-y-2.5 text-xs text-[#9EB0A1]">
            <li>
              <button onClick={() => onNavigate('shop')} className="hover:text-[#4ADE80] transition-colors">
                All Cold-Process Soap
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('shop')} className="hover:text-[#4ADE80] transition-colors">
                Best Sellers & Signature Bars
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('shop')} className="hover:text-[#4ADE80] transition-colors">
                The Fruit Collection
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('shop')} className="hover:text-[#4ADE80] transition-colors">
                Therapeutic Topicals & Salves
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('shop')} className="hover:text-[#4ADE80] transition-colors">
                Limited Micro-Releases
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('shop')} className="hover:text-[#4ADE80] transition-colors">
                Fresh Start Gift Boxes
              </button>
            </li>
          </ul>
        </div>

        {/* Brand Mission & Story */}
        <div className="space-y-4">
          <h4 className="font-serif-heading font-bold text-sm tracking-widest text-[#F5F2EB] uppercase">
            The Movement
          </h4>
          <ul className="space-y-2.5 text-xs text-[#9EB0A1]">
            <li>
              <button onClick={() => onNavigate('story')} className="hover:text-[#4ADE80] transition-colors">
                DJ’s Founder Story (April 20, 2023)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('wheelhouse')} className="hover:text-[#4ADE80] transition-colors">
                The Wheelhouse Recovery Center
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('impact')} className="hover:text-[#4ADE80] transition-colors">
                Live Community Impact Metrics
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('journal')} className="hover:text-[#4ADE80] transition-colors">
                Journal & Recovery Articles
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('wheelhouse')} className="hover:text-[#4ADE80] transition-colors">
                Upcoming Community Events
              </button>
            </li>
          </ul>
        </div>

        {/* Support & Business */}
        <div className="space-y-4">
          <h4 className="font-serif-heading font-bold text-sm tracking-widest text-[#F5F2EB] uppercase">
            Partnership & Help
          </h4>
          <ul className="space-y-2.5 text-xs text-[#9EB0A1]">
            <li>
              <button onClick={() => onNavigate('wholesale')} className="hover:text-[#C87A4B] font-bold text-[#C87A4B] transition-colors">
                Wholesale Portal & Bulk Orders
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faq')} className="hover:text-[#4ADE80] transition-colors">
                Frequently Asked Questions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#4ADE80] transition-colors">
                Contact & General Inquiries
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#4ADE80] transition-colors">
                Volunteer Opportunities
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#4ADE80] transition-colors">
                Media & Event Sponsorships
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-num text-[#6F7D72]">
        <div>
          © {new Date().getFullYear()} SOAPBRIETY LLC. All rights reserved. "More Than Soap. A Fresh Start."
        </div>
        <div className="flex items-center gap-4">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
          <span>•</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
};
