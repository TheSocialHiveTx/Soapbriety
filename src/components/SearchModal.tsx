import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Search, X, Star, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.ingredients.some((i) => i.toLowerCase().includes(q)) ||
      p.scentProfile.top.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0E1210] border border-[#27372C] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#F5F2EB] flex flex-col">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-[#1E2921] flex items-center gap-3 bg-[#131915]">
          <Search className="w-5 h-5 text-[#4ADE80] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bars by name, scent notes (fir, charcoal, pine tar, honey)..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-[#F5F2EB] placeholder-[#607265] focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#8E9E91] hover:text-[#F5F2EB]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#1D2721] text-xs font-mono-num font-bold text-[#A3B3A6] hover:text-[#F5F2EB]"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8E9E91] font-mono-num">
              No handcrafted bars matched your search query "{query}".
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-[#131714] border border-[#222E26] hover:border-[#3E5C46] flex items-center justify-between gap-4 cursor-pointer transition-all hover:bg-[#18211C] group"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover bg-[#090D0A] shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-mono-num text-[#C87A4B] font-bold uppercase">
                      {product.category}
                    </span>
                    <h4 className="font-serif-heading font-bold text-sm text-[#F5F2EB] group-hover:text-[#4ADE80]">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#9EB0A1] line-clamp-1">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-mono-num font-bold text-sm text-[#F5F2EB]">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="text-[10px] font-mono-num text-[#4ADE80] flex items-center gap-1 justify-end">
                    +{product.impactHours}h Wheelhouse
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
