import React, { useState, useEffect } from 'react';
import { NavigationPage, Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { StoryPage } from './components/StoryPage';
import { WheelhousePage } from './components/WheelhousePage';
import { ImpactPage } from './components/ImpactPage';
import { WholesalePage } from './components/WholesalePage';
import { JournalPage } from './components/JournalPage';
import { FAQPage } from './components/FAQPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { Check, HeartHandshake } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('soapbriety_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('soapbriety_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Scroll to top on page navigation
  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product, isSubscription = false) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, isSubscription: isSubscription || item.isSubscription }
            : item
        );
      }
      return [...prev, { product, quantity: 1, isSubscription }];
    });

    showToast(`Added ${product.name} to cart (+${product.impactHours}h Wheelhouse impact)`);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleSubscription = (productId: string, isSubscription: boolean) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, isSubscription } : item))
    );
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#0C0D0E] text-[#F5F2EB] selection:bg-[#C87A4B] selection:text-[#0C0D0E]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#172E1E] border border-[#3E5C46] text-[#86EFAC] text-xs font-mono-num font-bold shadow-2xl animate-bounce">
          <HeartHandshake className="w-4 h-4 text-[#4ADE80]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />

      {/* Main Page Routing Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onSelectProduct={(p) => setQuickViewProduct(p)}
          />
        )}
        {currentPage === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onSelectProduct={(p) => setQuickViewProduct(p)}
          />
        )}
        {currentPage === 'story' && <StoryPage onNavigate={handleNavigate} />}
        {currentPage === 'wheelhouse' && <WheelhousePage onNavigate={handleNavigate} />}
        {currentPage === 'impact' && <ImpactPage onNavigate={handleNavigate} />}
        {currentPage === 'wholesale' && <WholesalePage onNavigate={handleNavigate} />}
        {currentPage === 'journal' && <JournalPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onToggleSubscription={handleToggleSubscription}
        onCheckoutSuccess={handleCheckoutSuccess}
      />

      {/* Quick View Product Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />
    </div>
  );
}
