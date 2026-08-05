import React, { useState } from 'react';
import { JournalArticle, NavigationPage } from '../types';
import { JOURNAL_ARTICLES } from '../data/content';
import { Clock, User, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';

interface JournalPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Recovery',
    'Discipline',
    'Healthy Habits',
    'Natural Ingredients',
    'Wheelhouse Events'
  ];

  const filtered = selectedCategory === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E2E23] border border-[#3A5C44] text-[#86EFAC] text-xs font-mono-num font-bold uppercase tracking-widest">
          <BookOpen className="w-4 h-4 text-[#4ADE80]" />
          THE SOAPBRIETY JOURNAL
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
          Recovery, Discipline & Craftsmanship
        </h1>
        <p className="text-sm text-[#A3B3A6] leading-relaxed">
          Articles, founder reflections, natural skincare guides, and community impact recaps from DJ and The Wheelhouse team.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto justify-center pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono-num font-bold transition-all shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3E5C46]'
                : 'bg-[#121614] text-[#8E9E91] border border-[#222E26] hover:text-[#F5F2EB]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {JOURNAL_ARTICLES.length > 0 && selectedCategory === 'All' && (
        <div
          onClick={() => setActiveArticle(JOURNAL_ARTICLES[0])}
          className="group relative rounded-3xl overflow-hidden bg-[#101512] border border-[#233127] hover:border-[#4ADE80] transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 shadow-2xl"
        >
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src={JOURNAL_ARTICLES[0].heroImage}
              alt={JOURNAL_ARTICLES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded bg-[#C87A4B] text-[#0C0D0E] text-[10px] font-mono-num font-black uppercase">
                FEATURED ARTICLE • {JOURNAL_ARTICLES[0].category}
              </span>
              <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB] group-hover:text-[#4ADE80] transition-colors leading-tight">
                {JOURNAL_ARTICLES[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-[#9EB0A1] leading-relaxed line-clamp-3">
                {JOURNAL_ARTICLES[0].excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C261E] flex items-center justify-between text-xs font-mono-num text-[#8E9E91]">
              <div className="flex items-center gap-2">
                <img src={JOURNAL_ARTICLES[0].authorAvatar} alt="" className="w-7 h-7 rounded-full object-cover" />
                <span>{JOURNAL_ARTICLES[0].author} • {JOURNAL_ARTICLES[0].date}</span>
              </div>
              <span>{JOURNAL_ARTICLES[0].readTime}</span>
            </div>
          </div>
        </div>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group rounded-2xl bg-[#121714] border border-[#222E26] hover:border-[#3E5C46] overflow-hidden cursor-pointer transition-all shadow-lg flex flex-col justify-between"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0C0D0E]/80 backdrop-blur-md text-[#4ADE80] font-mono-num text-[10px] font-bold">
                {article.category}
              </span>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB] group-hover:text-[#4ADE80] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-[#9EB0A1] line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1C261E] flex items-center justify-between text-[11px] font-mono-num text-[#78887C]">
                <span>By {article.author}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md" onClick={() => setActiveArticle(null)}></div>

          <div className="relative w-full max-w-3xl bg-[#0D100E] border border-[#27382C] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#F5F2EB] max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-[#1E2921] flex items-center justify-between bg-[#111613]">
              <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <button onClick={() => setActiveArticle(null)} className="p-2 text-[#8E9E91] hover:text-[#F5F2EB]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-3 text-xs font-mono-num text-[#8E9E91]">
                <img src={activeArticle.authorAvatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="text-[#F5F2EB] font-bold">{activeArticle.author}</div>
                  <div>{activeArticle.authorRole} • Published {activeArticle.date}</div>
                </div>
              </div>

              <img src={activeArticle.heroImage} alt="" className="w-full aspect-[16/9] object-cover rounded-2xl" />

              <div className="space-y-4 text-sm text-[#D0C9B8] leading-relaxed">
                {activeArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
