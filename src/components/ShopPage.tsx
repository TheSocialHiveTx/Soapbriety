import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Filter, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface ShopPageProps {
  onAddToCart: (product: Product, isSubscription?: boolean) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onQuickView,
  onSelectProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedIntensity, setSelectedIntensity] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProductCategory[] = [
    'All',
    'Best Sellers',
    'Fruit Collection',
    'Topicals',
    'Seasonal',
    'Gift Boxes',
    'Limited Releases'
  ];

  let filtered = PRODUCTS.filter((p) => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchInt = selectedIntensity === 'All' || p.scentProfile.intensity === selectedIntensity;
    const matchSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCat && matchInt && matchSearch;
  });

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#14261B] via-[#0E1611] to-[#1C1510] border border-[#273A2D] p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-mono-num font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            100% HANDCRAFTED COLD-PROCESS SOAP
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
            The Soapbriety Catalog
          </h1>
          <p className="text-sm sm:text-base text-[#A3B3A6] font-sans leading-relaxed">
            Every bar is cured for 42 days, poured with raw botanicals, and directly funds recovery programs at The Wheelhouse.
          </p>
        </div>
      </div>

      {/* Controls Bar: Categories & Search & Sort */}
      <div className="space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono-num font-bold uppercase tracking-wider shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1E2E23] text-[#4ADE80] border border-[#3E5C46] shadow-md'
                  : 'bg-[#121614] text-[#8E9E91] border border-[#222E26] hover:text-[#F5F2EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search, Filter & Sort Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#101412] border border-[#202B23]">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#4ADE80] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ingredient or fragrance..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#090C0A] border border-[#222E26] text-xs text-[#F5F2EB] placeholder-[#607065] focus:outline-none focus:border-[#4ADE80]"
            />
          </div>

          {/* Scent Intensity & Sort controls */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-1.5 text-xs font-mono-num text-[#8E9E91]">
              <Filter className="w-3.5 h-3.5 text-[#C87A4B]" />
              <span>Intensity:</span>
              <select
                value={selectedIntensity}
                onChange={(e) => setSelectedIntensity(e.target.value)}
                className="bg-[#090C0A] border border-[#222E26] text-[#F5F2EB] text-xs font-mono-num rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#4ADE80]"
              >
                <option value="All">All Intensities</option>
                <option value="Subtle">Subtle</option>
                <option value="Medium">Medium</option>
                <option value="Bold">Bold</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono-num text-[#8E9E91]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#4ADE80]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#090C0A] border border-[#222E26] text-[#F5F2EB] text-xs font-mono-num rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#4ADE80]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-[#0F1311] rounded-3xl border border-[#202A23]">
          <h4 className="font-serif-heading font-bold text-xl text-[#F5F2EB]">No soaps found</h4>
          <p className="text-xs text-[#8E9E91]">Try adjusting your category filter or search terms.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedIntensity('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#1E2E23] text-[#4ADE80] font-bold text-xs uppercase"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
};
