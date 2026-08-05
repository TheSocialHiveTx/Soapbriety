import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { SoapbrietyLogo } from './SoapbrietyLogo';
import { ShoppingBag, Search, Menu, X, Heart, Sparkles, User, HelpCircle, PhoneCall, Truck, Shield, Award, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onSearchClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavLinks: { id: NavigationPage; label: string }[] = [
    { id: 'shop', label: 'Shop' },
    { id: 'story', label: 'Our Story' },
    { id: 'wheelhouse', label: 'The Wheelhouse' },
    { id: 'impact', label: 'Impact' },
    { id: 'journal', label: 'Journal' },
  ];

  const secondaryNavLinks: { id: NavigationPage; label: string }[] = [
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0C0D0E]/95 backdrop-blur-md border-b border-[#1E2521]">
      {/* Top Announcement Bar - Sleek & Single Line */}
      <div className="bg-[#121A15] border-b border-[#1E2C22] py-1.5 px-4 text-[11px] font-mono-num text-[#A3B3A6] text-center flex items-center justify-center gap-2 sm:gap-4 overflow-hidden tracking-wider">
        <span className="flex items-center gap-1.5 text-[#4ADE80] font-bold uppercase">
          <Truck className="w-3.5 h-3.5" />
          FREE US SHIPPING $45+
        </span>
        <span className="text-[#2A3E31]">•</span>
        <span className="text-[#F5F2EB]">
          Every Bar Funds Recovery at <strong className="text-[#C87A4B] font-bold">The Wheelhouse</strong>
        </span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F5F2EB] hover:text-[#4ADE80] transition-colors rounded-lg hover:bg-[#151C17]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Brand Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
        >
          <SoapbrietyLogo variant="wordmark" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {mainNavLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wider uppercase transition-all rounded-lg ${
                  isActive
                    ? 'text-[#4ADE80] bg-[#16251C]'
                    : 'text-[#A3B3A6] hover:text-[#F5F2EB] hover:bg-[#141A16]'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* More Nav Dropdown */}
          <div className="relative group/more">
            <button className="px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wider uppercase text-[#A3B3A6] hover:text-[#F5F2EB] hover:bg-[#141A16] rounded-lg transition-colors flex items-center gap-1">
              More
              <span className="text-[9px] opacity-70">▼</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-44 py-2 bg-[#0F1411] border border-[#243428] rounded-2xl shadow-2xl opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible transition-all duration-200 z-50">
              {secondaryNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                    currentPage === link.id
                      ? 'text-[#4ADE80] bg-[#192A1F]'
                      : 'text-[#A3B3A6] hover:text-[#F5F2EB] hover:bg-[#151D18]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Action Buttons: Search & Cart */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-xl bg-[#121714] text-[#A3B3A6] hover:text-[#4ADE80] hover:bg-[#17221B] border border-[#202E24] transition-all"
            title="Search Products"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('wholesale')}
            className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#142018] text-[#86EFAC] border border-[#284231] text-xs font-bold uppercase tracking-wider hover:bg-[#1A2C21] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
            Wholesale
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#D98A5B] transition-all shadow-md copper-glow"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-[#0C0D0E] text-[#4ADE80] text-[10px] font-mono-num font-black ml-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1E2822] bg-[#0E1310] px-4 py-6 space-y-4 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {[...mainNavLinks, ...secondaryNavLinks].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-3 text-left font-serif-heading font-bold text-sm tracking-wide rounded-xl border transition-all ${
                  currentPage === link.id
                    ? 'bg-[#1A2B20] border-[#385541] text-[#4ADE80]'
                    : 'bg-[#121614] border-[#1F2922] text-[#F5F2EB] hover:bg-[#17201A]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1F2922] flex flex-col gap-2">
            <div className="text-center text-[11px] font-mono-num text-[#78887C]">
              Soapbriety • Clean Date: April 20, 2023
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
