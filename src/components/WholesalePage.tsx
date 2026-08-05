import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { Sparkles, Building2, Package, FileText, CheckCircle2, Download, ShieldCheck, ArrowRight } from 'lucide-react';

interface WholesalePageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'Barbershop / Grooming Salon',
    estimatedMonthlyBars: '100-250 bars',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#192E20] via-[#0E1711] to-[#1F1810] border border-[#2D4534] p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-mono-num font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            PARTNER DEALER PORTAL & WHOLESALE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
            Stock Soapbriety In Your Space
          </h1>
          <p className="text-base sm:text-lg text-[#A3B3A6] leading-relaxed">
            Partner with a brand that customers respect. We supply barbershops, boutique grocers, gyms, recovery centers, and lifestyle retailers with handcrafted cold-process soap that sells itself.
          </p>
        </div>
      </div>

      {/* Dealer Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#121814] border border-[#243428] space-y-3">
          <Package className="w-8 h-8 text-[#C87A4B]" />
          <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
            50% Dealer Pricing Margin
          </h3>
          <p className="text-xs text-[#9EB0A1] leading-relaxed">
            Generous wholesale margins with low minimum order quantities (MOQs) starting at just 50 bars.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121814] border border-[#243428] space-y-3">
          <Building2 className="w-8 h-8 text-[#4ADE80]" />
          <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
            Custom Cedar Counter Displays
          </h3>
          <p className="text-xs text-[#9EB0A1] leading-relaxed">
            Receive branded solid cedarwood retail displays and high-impact POS signage with your first opening order.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121814] border border-[#243428] space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#86EFAC]" />
          <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
            Co-Branded Impact Marketing
          </h3>
          <p className="text-xs text-[#9EB0A1] leading-relaxed">
            Your store is featured on our dealer locator, highlighting how your business helps fund The Wheelhouse.
          </p>
        </div>
      </div>

      {/* B2B Wholesale Application Form */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0F1411] border border-[#243428] max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
            Apply For Wholesale Dealer Account
          </h2>
          <p className="text-xs sm:text-sm text-[#9EB0A1]">
            Fill out the form below to receive our wholesale catalog, sample kit, and opening order terms.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#172E1E] border border-[#3E5C46] text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#4ADE80] mx-auto" />
            <h3 className="font-serif-heading font-bold text-xl text-[#F5F2EB]">Application Submitted!</h3>
            <p className="text-xs text-[#9EB0A1]">
              Our wholesale team will review your account application within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Iron & Wood Barbershop"
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@yourstore.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                >
                  <option value="Barbershop / Grooming Salon">Barbershop / Grooming Salon</option>
                  <option value="Boutique Retailer / Gift Shop">Boutique Retailer / Gift Shop</option>
                  <option value="Gym / Athletic Facility">Gym / Athletic Facility</option>
                  <option value="Recovery Center / Wellness Space">Recovery Center / Wellness Space</option>
                  <option value="Online E-commerce Store">Online E-commerce Store</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Estimated Monthly Order Volume
                </label>
                <select
                  value={formData.estimatedMonthlyBars}
                  onChange={(e) => setFormData({ ...formData, estimatedMonthlyBars: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                >
                  <option value="50-100 bars">50 - 100 bars</option>
                  <option value="100-250 bars">100 - 250 bars</option>
                  <option value="250-500 bars">250 - 500 bars</option>
                  <option value="500+ bars">500+ bars (Tier 1 Volume)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                Store Location / Notes
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us a bit about your store or location..."
                className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-widest hover:bg-[#D98A5B] transition-all copper-glow"
            >
              Submit Wholesale Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
