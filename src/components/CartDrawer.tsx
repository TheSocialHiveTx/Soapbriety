import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, HeartHandshake, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onToggleSubscription: (productId: string, isSubscription: boolean) => void;
  onCheckoutSuccess: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onToggleSubscription,
  onCheckoutSuccess
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 45;
  const subtotal = items.reduce((acc, item) => {
    const itemPrice = item.isSubscription ? item.product.price * 0.85 : item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const totalImpactHours = items.reduce((acc, item) => {
    return acc + item.product.impactHours * item.quantity;
  }, 0);

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-[#000000]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer Box */}
      <div className="relative w-full max-w-md bg-[#0D100E] border-l border-[#232F27] h-full flex flex-col shadow-2xl z-10 text-[#F5F2EB] overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#1E2921] flex items-center justify-between bg-[#111613]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#4ADE80]" />
            <h3 className="font-serif-heading font-black text-lg text-[#F5F2EB]">
              Your Fresh Start Cart ({items.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#8E9E91] hover:text-[#F5F2EB] hover:bg-[#1A231C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-[#141C16] border-b border-[#223126] px-5 py-3 text-xs">
          {amountNeededForFreeShipping > 0 ? (
            <p className="text-[#C9D6CB]">
              Add <span className="font-mono-num font-bold text-[#4ADE80]">${amountNeededForFreeShipping.toFixed(2)}</span> more to unlock <span className="font-bold text-[#F5F2EB]">FREE Shipping</span>!
            </p>
          ) : (
            <p className="text-[#4ADE80] font-bold flex items-center gap-1.5">
              <Truck className="w-4 h-4" /> Unlocked FREE US Standard Shipping!
            </p>
          )}
          <div className="w-full h-1.5 bg-[#090D0A] rounded-full mt-2 overflow-hidden border border-[#223126]">
            <div
              className="h-full bg-gradient-to-r from-[#C87A4B] to-[#4ADE80] transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Live Community Impact Box */}
        {totalImpactHours > 0 && (
          <div className="mx-4 mt-4 p-3.5 rounded-xl bg-gradient-to-r from-[#172E1E] to-[#122216] border border-[#2F4D37] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <HeartHandshake className="w-5 h-5 text-[#4ADE80] shrink-0" />
              <div>
                <span className="font-bold text-[#F5F2EB] block">Wheelhouse Recovery Impact</span>
                <span className="text-[11px] text-[#A3B3A6]">This order funds peer support circles</span>
              </div>
            </div>
            <span className="font-mono-num font-extrabold text-sm text-[#4ADE80] bg-[#0A140D] px-2.5 py-1 rounded-lg border border-[#25422D]">
              +{totalImpactHours.toFixed(1)} hrs
            </span>
          </div>
        )}

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {checkoutComplete ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1E3A28] border-2 border-[#4ADE80] text-[#4ADE80] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#F5F2EB]">
                Order Confirmed!
              </h3>
              <p className="text-xs text-[#9EB0A1] max-w-xs mx-auto">
                Thank you for supporting Soapbriety and funding recovery at The Wheelhouse. A confirmation receipt & tracking details have been dispatched.
              </p>
              <div className="p-4 rounded-xl bg-[#141C16] border border-[#283C2F] text-xs font-mono-num text-[#86EFAC]">
                Estimated Impact: {totalImpactHours.toFixed(1)} hours of peer support circles funded.
              </div>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onCheckoutSuccess();
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-wider"
              >
                Back To Shop
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#141A16] border border-[#253328] flex items-center justify-center mx-auto text-[#68786B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-[#F5F2EB]">
                Your cart is empty
              </h4>
              <p className="text-xs text-[#8E9E91] max-w-xs mx-auto">
                Every handcrafted bar you add helps fund recovery programs and fresh starts at The Wheelhouse.
              </p>
            </div>
          ) : (
            items.map((item) => {
              const unitPrice = item.isSubscription ? item.product.price * 0.85 : item.product.price;
              return (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-xl bg-[#121714] border border-[#222E26] flex gap-3.5 items-center relative group"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#090D0A] shrink-0 border border-[#222E26]"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif-heading font-bold text-sm text-[#F5F2EB] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#68786B] hover:text-[#EF4444] p-1 transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[11px] font-mono-num text-[#8E9E91]">
                      ${unitPrice.toFixed(2)} each • {item.product.impactHours}h Wheelhouse
                    </div>

                    {/* Subscription Toggle option */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onToggleSubscription(item.product.id, !item.isSubscription)}
                        className={`text-[10px] font-mono-num px-2 py-0.5 rounded border transition-colors ${
                          item.isSubscription
                            ? 'bg-[#1E3A28] border-[#3E5C46] text-[#4ADE80] font-bold'
                            : 'bg-[#151B17] border-[#222E26] text-[#7E8E81] hover:text-[#F5F2EB]'
                        }`}
                      >
                        {item.isSubscription ? '✓ Auto-Renew (-15%)' : 'One-Time Purchase'}
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center border border-[#27362C] rounded-lg bg-[#0E1310] overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#8E9E91] hover:text-[#F5F2EB] hover:bg-[#1B251E]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-mono-num font-bold text-[#F5F2EB]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#8E9E91] hover:text-[#F5F2EB] hover:bg-[#1B251E]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono-num font-bold text-sm text-[#F5F2EB]">
                        ${(unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && !checkoutComplete && (
          <div className="p-5 border-t border-[#1E2921] bg-[#101412] space-y-3">
            <div className="space-y-1.5 text-xs font-mono-num text-[#9EB0A1]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#F5F2EB] font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated US Shipping</span>
                <span>{amountNeededForFreeShipping === 0 ? <span className="text-[#4ADE80] font-bold">FREE</span> : '$5.00'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#1C261F] text-sm text-[#F5F2EB] font-bold">
                <span>Estimated Total</span>
                <span className="text-base text-[#4ADE80]">
                  ${(subtotal + (amountNeededForFreeShipping === 0 ? 0 : 5)).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-widest hover:bg-[#D98A5B] transition-all flex items-center justify-center gap-2 shadow-xl copper-glow disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Proceed To Checkout
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] font-mono-num text-[#68786B]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" /> 256-Bit Encryption
              </span>
              <span>•</span>
              <span>30-Day Money Back</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
