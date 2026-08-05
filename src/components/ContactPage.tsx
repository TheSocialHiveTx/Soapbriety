import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E2E23] border border-[#3A5C44] text-[#86EFAC] text-xs font-mono-num font-bold uppercase tracking-widest">
          <Mail className="w-4 h-4 text-[#4ADE80]" />
          GET IN TOUCH WITH SOAPBRIETY
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
          Contact Our Team
        </h1>
        <p className="text-sm text-[#A3B3A6] leading-relaxed">
          Questions about your order, wholesale inquiries, media requests, or volunteering with The Wheelhouse? We're here for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0F1411] border border-[#243428] space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif-heading font-black text-2xl text-[#F5F2EB]">
              Direct Contacts
            </h3>
            <p className="text-xs text-[#9EB0A1] leading-relaxed">
              Soapbriety headquarters and craft facility operate out of Oregon. Orders dispatch within 1-2 business days.
            </p>
          </div>

          <div className="space-y-4 text-xs font-mono-num text-[#D0C9B8]">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8E9E91] block text-[10px] uppercase">Email Support</span>
                <span className="font-bold">support@soapbriety.com</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C87A4B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8E9E91] block text-[10px] uppercase">The Wheelhouse Center</span>
                <span className="font-bold">Downtown Recovery Center, Portland OR</span>
              </div>
            </div>
          </div>

          {/* Social Links Box */}
          <div className="pt-6 border-t border-[#1C261E] space-y-3">
            <h4 className="font-serif-heading font-bold text-xs text-[#F5F2EB] uppercase tracking-wider">
              Official Social Accounts
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/soapbriety"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-[#141A16] border border-[#26352A] text-xs font-mono-num font-bold text-[#E1306C] hover:bg-[#1D2721] flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567785470478"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-[#141A16] border border-[#26352A] text-xs font-mono-num font-bold text-[#1877F2] hover:bg-[#1D2721] flex items-center justify-center gap-2"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0F1411] border border-[#243428]">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#4ADE80] mx-auto" />
              <h3 className="font-serif-heading font-bold text-xl text-[#F5F2EB]">Message Sent!</h3>
              <p className="text-xs text-[#9EB0A1]">
                Thank you for reaching out. A team member will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Wholesale Inquiry">Wholesale Dealer Inquiry</option>
                  <option value="Media & Press">Media & Press</option>
                  <option value="Wheelhouse Sponsorship">Wheelhouse Event Sponsorship</option>
                  <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-num font-bold text-[#A3B3A6] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] focus:outline-none focus:border-[#4ADE80]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-widest hover:bg-[#D98A5B] transition-all flex items-center justify-center gap-2 copper-glow"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
