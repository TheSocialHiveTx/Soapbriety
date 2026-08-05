import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Giving Back', 'Ingredients', 'Recovery', 'Subscriptions', 'Wholesale', 'Shipping & Returns'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E2E23] border border-[#3A5C44] text-[#86EFAC] text-xs font-mono-num font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4 text-[#4ADE80]" />
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
          Got Questions? We Have Answers.
        </h1>
        <p className="text-sm text-[#A3B3A6]">
          Learn more about our cold-process formulation, subscription perks, and how every order directly supports The Wheelhouse.
        </p>
      </div>

      {/* Search & Category Pills */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#4ADE80] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword (e.g. DJ, shipping, ingredients)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0F1411] border border-[#223026] text-sm text-[#F5F2EB] placeholder-[#607065] focus:outline-none focus:border-[#4ADE80]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono-num font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3E5C46]'
                  : 'bg-[#121614] text-[#8E9E91] border border-[#222E26] hover:text-[#F5F2EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-[#101512] border border-[#202B23] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-heading font-bold text-base text-[#F5F2EB] hover:text-[#4ADE80] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C87A4B] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#4ADE80]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#A3B3A6] leading-relaxed border-t border-[#1C261F] pt-4 font-sans">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
