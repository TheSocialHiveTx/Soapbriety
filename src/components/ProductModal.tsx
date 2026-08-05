import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, Clock, Shield, Sparkles, Check, RefreshCw } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, isSubscription?: boolean) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isSubscription, setIsSubscription] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);

  if (!product) return null;

  const currentPrice = isSubscription ? product.price * 0.85 : product.price;

  const handleAdd = () => {
    onAddToCart(product, isSubscription);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-[#0D100E] border border-[#27382C] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#F5F2EB] max-h-[90vh] flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#151A17] border border-[#2B3B30] text-[#A3B3A6] hover:text-[#F5F2EB] hover:bg-[#1E2721] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Column */}
        <div className="lg:w-1/2 p-6 bg-[#080B09] flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-[#1E2921]">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0F1411] border border-[#223026]">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0C0D0E]/80 backdrop-blur-md border border-[#2B3D30] text-[#4ADE80] text-xs font-mono-num font-bold">
              +{product.impactHours}h Wheelhouse Funded
            </div>
          </div>

          {/* Thumbnail row */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto w-full justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#4ADE80] scale-105' : 'border-[#223026] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Column */}
        <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-num text-[#C87A4B] font-bold uppercase tracking-wider mb-1">
              <span>{product.category}</span>
              <span>•</span>
              <span className="text-[#86EFAC]">{product.weightOz} oz cold process bar</span>
            </div>
            <h2 className="font-serif-heading font-black text-2xl sm:text-3xl text-[#F5F2EB]">
              {product.name}
            </h2>
            <p className="text-sm text-[#9EB0A1] mt-1 font-sans">
              {product.subtitle}
            </p>
          </div>

          {/* Price & Rating */}
          <div className="flex items-center justify-between py-3 border-y border-[#1E2921]">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-mono-num font-black text-[#F5F2EB]">
                ${currentPrice.toFixed(2)}
              </span>
              {isSubscription && (
                <span className="text-xs font-mono-num font-bold text-[#4ADE80] bg-[#172E1E] px-2 py-0.5 rounded border border-[#2F4D37]">
                  SAVE 15%
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-current text-[#F59E0B]" />
              <span className="font-mono-num font-bold text-sm">{product.rating.toFixed(2)}</span>
              <span className="text-xs text-[#78887C]">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Scent Notes Pyramid */}
          <div className="space-y-2.5 bg-[#121714] p-4 rounded-2xl border border-[#222F26]">
            <h4 className="text-xs font-mono-num font-bold uppercase tracking-wider text-[#C87A4B] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Fragrance Profile Notes
            </h4>
            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono-num">
              <div className="p-2 rounded bg-[#0B0E0C] border border-[#1E2921]">
                <span className="text-[#7E8E81] block text-[9px]">TOP</span>
                <span className="text-[#F5F2EB] font-medium">{product.scentProfile.top.join(', ')}</span>
              </div>
              <div className="p-2 rounded bg-[#0B0E0C] border border-[#1E2921]">
                <span className="text-[#7E8E81] block text-[9px]">HEART</span>
                <span className="text-[#F5F2EB] font-medium">{product.scentProfile.heart.join(', ')}</span>
              </div>
              <div className="p-2 rounded bg-[#0B0E0C] border border-[#1E2921]">
                <span className="text-[#7E8E81] block text-[9px]">BASE</span>
                <span className="text-[#F5F2EB] font-medium">{product.scentProfile.base.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Description & Story Snippet */}
          <div className="space-y-2 text-xs text-[#A3B3A6] leading-relaxed">
            <p>{product.description}</p>
            <p className="text-[#C87A4B] font-medium italic border-l-2 border-[#C87A4B] pl-3 py-1 bg-[#181310] rounded-r">
              "{product.storySnippet}"
            </p>
          </div>

          {/* Ingredients Preview */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono-num font-bold uppercase tracking-wider text-[#D0C9B8]">
              Key Botanicals & Ingredients
            </h4>
            <p className="text-[11px] text-[#8E9E91] leading-normal">
              {product.ingredients.join(', ')}.
            </p>
          </div>

          {/* Purchase Option (One-Time vs Subscription) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => setIsSubscription(false)}
              className={`p-3 rounded-xl border text-left transition-all ${
                !isSubscription
                  ? 'bg-[#1E2E23] border-[#4ADE80] text-[#F5F2EB]'
                  : 'bg-[#121614] border-[#222F26] text-[#8E9E91] hover:border-[#334438]'
              }`}
            >
              <div className="font-bold text-xs">One-Time Bar</div>
              <div className="text-[11px] font-mono-num text-[#9EB0A1] mt-0.5">${product.price.toFixed(2)}</div>
            </button>

            <button
              onClick={() => setIsSubscription(true)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSubscription
                  ? 'bg-[#1E2E23] border-[#4ADE80] text-[#F5F2EB]'
                  : 'bg-[#121614] border-[#222F26] text-[#8E9E91] hover:border-[#334438]'
              }`}
            >
              <div className="font-bold text-xs text-[#4ADE80] flex items-center justify-between">
                <span>Auto-Refill</span>
                <span className="text-[9px] bg-[#4ADE80]/20 px-1.5 py-0.5 rounded">SAVE 15%</span>
              </div>
              <div className="text-[11px] font-mono-num text-[#9EB0A1] mt-0.5">${(product.price * 0.85).toFixed(2)} / 30 days</div>
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAdd}
            className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 ${
              added
                ? 'bg-[#22C55E] text-[#0C0D0E]'
                : 'bg-[#C87A4B] text-[#0C0D0E] hover:bg-[#D98A5B] copper-glow'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                Added To Fresh Start Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                Add To Cart • ${currentPrice.toFixed(2)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
