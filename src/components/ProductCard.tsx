import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ShoppingBag, Eye, Sparkles, Heart, Clock } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, isSubscription?: boolean) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  onSelectProduct
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="group relative flex flex-col h-full rounded-2xl bg-[#121614] border border-[#232F27] hover:border-[#3E5C46] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl">
      {/* Top Media Container */}
      <div 
        className="relative aspect-square w-full bg-[#0D100E] overflow-hidden cursor-pointer"
        onClick={() => onSelectProduct(product)}
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex flex-col gap-1">
            {product.isBestSeller && (
              <span className="px-2.5 py-1 rounded-md bg-[#C87A4B] text-[#0C0D0E] text-[10px] font-mono-num font-black uppercase tracking-wider shadow-md">
                BEST SELLER
              </span>
            )}
            {product.isLimited && (
              <span className="px-2.5 py-1 rounded-md bg-[#991B1B] text-[#F5F2EB] text-[10px] font-mono-num font-black uppercase tracking-wider shadow-md">
                LIMITED RELEASE
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0C0D0E]/80 backdrop-blur-md border border-[#2F4436] text-[#4ADE80] text-[10px] font-mono-num font-bold">
            <Clock className="w-3 h-3 text-[#4ADE80]" />
            +{product.impactHours}h Wheelhouse
          </span>
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-0 bg-[#0C0D0E]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-3 rounded-full bg-[#121614] text-[#F5F2EB] hover:text-[#4ADE80] border border-[#2F4436] shadow-xl hover:scale-110 transition-all"
            title="Quick View Scent & Ingredients"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="px-5 py-3 rounded-full bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-wider hover:bg-[#D98A5B] shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Category & Scent Intensity */}
        <div className="flex items-center justify-between text-[11px] font-mono-num text-[#8E9E91]">
          <span className="uppercase tracking-widest text-[#C87A4B] font-semibold">
            {product.category}
          </span>
          <span className="px-2 py-0.5 rounded bg-[#17211B] border border-[#28382D] text-[#86EFAC]">
            {product.scentProfile.intensity} Fragrance
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif-heading font-black text-lg text-[#F5F2EB] group-hover:text-[#4ADE80] transition-colors cursor-pointer leading-tight"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#9EB0A1] line-clamp-1 mt-1 font-sans">
            {product.subtitle}
          </p>
        </div>

        {/* Top Scent Notes Preview */}
        <div className="pt-2 border-t border-[#1C241E] flex flex-wrap gap-1.5">
          {product.scentProfile.top.map((note, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#151A17] border border-[#232F27] text-[#C9D6CB]"
            >
              🌿 {note}
            </span>
          ))}
        </div>

        {/* Rating & Price row */}
        <div className="mt-auto pt-3 border-t border-[#1C241E] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center text-[#F59E0B]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-mono-num font-bold text-[#F5F2EB]">
              {product.rating.toFixed(2)}
            </span>
            <span className="text-[10px] text-[#708074]">
              ({product.reviewCount})
            </span>
          </div>

          <div className="text-right">
            <span className="text-base font-mono-num font-extrabold text-[#F5F2EB]">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Add To Cart CTA Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full mt-2 py-2.5 rounded-xl bg-[#1A271F] hover:bg-[#23352A] border border-[#304838] text-[#86EFAC] group-hover:text-[#4ADE80] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          Add To Cart • ${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};
