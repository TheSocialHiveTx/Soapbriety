// ============================================================
// SOAPBRIETY — Main App (js/app.js)
// Router, state, cart, all interactivity
// ============================================================

/* ── SVG Icon helpers (lucide-style inline SVGs) ── */
const ICONS = {
  arrowRight:     `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  shoppingBag:    `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  search:         `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  x:              `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  menu:           `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  flame:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  sparkles:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.2 3.6L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.4L12 3z"/><path d="M5 16l.7 2.3L8 19l-2.3.7L5 22l-.7-2.3L2 19l2.3-.7L5 16z"/><path d="M19 13l.5 1.5L21 15l-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13z"/></svg>`,
  heartHandshake: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 13-1-1 2-2-3-3-2 2-3 3 4 4 2-2Z"/><path d="m15 13 2 2-2 2"/><path d="m18 15-2-2 2-2"/></svg>`,
  shieldCheck:    `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  checkCircle:    `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  check:          `<svg viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  star:           `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  eye:            `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  clock:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  truck:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  trash2:         `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  plus:           `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  chevronDown:    `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  instagram:      `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  facebook:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  mail:           `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  mapPin:         `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  users:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  utensils:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  bus:            `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>`,
  send:           `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  helpCircle:     `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  play:           `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  quote:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
  download:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  fileText:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  bookOpen:       `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  package:        `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  building2:      `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  filter:         `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  arrowUpDown:    `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>`,
  refCw:          `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
};

function icon(name, cls='') {
  return `<span class="icon-wrap ${cls}" style="display:inline-flex;align-items:center;justify-content:center;width:1em;height:1em;">${ICONS[name]||''}</span>`;
}

/* ── App State ── */
var SHOP_PRODUCTS = []; // Populated from Shopify or fallback
var _cartBusy = false;  // Prevents double-submit

const state = {
  currentPage: 'home',
  cartOpen: false,
  searchOpen: false,
  quickViewProduct: null,
  activeArticle: null,
  toastTimeout: null,
};


/* ── Navigation ── */
function navigate(page) {
  state.currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

/* ── Cart operations (Shopify Storefront Cart API) ── */
async function addToCart(variantIdOrProductId, quantity) {
  if (_cartBusy) return;
  _cartBusy = true;

  // Resolve the merchandiseId (variant ID)
  var merchandiseId = null;
  var productTitle = '';
  var product = SHOP_PRODUCTS.find(function(p) { return p.id === variantIdOrProductId || p.handle === variantIdOrProductId; });
  if (product) {
    merchandiseId = product.defaultVariantId;
    productTitle = product.title;
  } else {
    // Might already be a variant ID
    merchandiseId = variantIdOrProductId;
    // Try to find product title
    SHOP_PRODUCTS.forEach(function(p) {
      p.variants.forEach(function(v) {
        if (v.id === variantIdOrProductId) { productTitle = p.title; }
      });
    });
  }

  if (!merchandiseId) { _cartBusy = false; return; }

  var result = await shopifyCartAdd(merchandiseId, quantity || 1);
  _cartBusy = false;

  if (result.cart) {
    showToast('Added ' + (productTitle || 'item') + ' to cart');
    state.cartOpen = true;
    renderApp();
  } else {
    var errMsg = (result.errors && result.errors[0]) ? result.errors[0].message : 'Could not add to cart.';
    showToast(errMsg);
  }
}

async function removeFromCart(lineId) {
  if (_cartBusy) return;
  _cartBusy = true;
  var result = await shopifyCartRemoveLine(lineId);
  _cartBusy = false;
  if (result.cart) { renderApp(); }
  else { showToast('Could not remove item. Please try again.'); }
}

async function updateQuantity(lineId, newQuantity) {
  if (_cartBusy) return;
  if (newQuantity <= 0) { await removeFromCart(lineId); return; }
  _cartBusy = true;
  var result = await shopifyCartUpdateLine(lineId, newQuantity);
  _cartBusy = false;
  if (result.cart) { renderApp(); }
  else { showToast('Could not update quantity. Please try again.'); }
}

function cartTotal() {
  return shopifyCartSubtotal();
}

function cartCount() {
  return shopifyCartTotalQuantity();
}


/* ── Toast ── */
function showToast(msg) {
  clearTimeout(state.toastTimeout);
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = `${ICONS.heartHandshake} <span>${msg}</span>`;
  t.style.display = 'flex';
  state.toastTimeout = setTimeout(() => { t.style.display = 'none'; }, 3000);
}

/* ── Logo SVG ── */
const SKULL_SVG = `
<svg viewBox="0 0 200 200" class="w-full h-full">
  <defs>
    <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86EFAC"/>
      <stop offset="50%" stop-color="#22C55E"/>
      <stop offset="100%" stop-color="#14532D"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="40" r="14" fill="#22C55E" opacity=".3"/>
  <circle cx="140" cy="35" r="18" fill="#22C55E" opacity=".35"/>
  <circle cx="155" cy="65" r="12" fill="#22C55E" opacity=".25"/>
  <circle cx="45" cy="70" r="16" fill="#22C55E" opacity=".3"/>
  <circle cx="90" cy="22" r="7" fill="#86EFAC"/>
  <circle cx="106" cy="18" r="9" fill="#4ADE80"/>
  <circle cx="122" cy="26" r="6" fill="#86EFAC"/>
  <circle cx="78" cy="28" r="8" fill="#4ADE80"/>
  <path d="M100 35 C65 35 48 60 48 95 C48 120 58 138 74 145 L74 165 L126 165 L126 145 C142 138 152 120 152 95 C152 60 135 35 100 35 Z" fill="url(#sg)" stroke="#0C0D0E" stroke-width="5"/>
  <ellipse cx="78" cy="88" rx="14" ry="18" fill="#0C0D0E" stroke="#166534" stroke-width="3"/>
  <ellipse cx="122" cy="88" rx="14" ry="18" fill="#0C0D0E" stroke="#166534" stroke-width="3"/>
  <circle cx="78" cy="88" r="4" fill="#86EFAC"/>
  <circle cx="122" cy="88" r="4" fill="#86EFAC"/>
  <path d="M93 108 L107 108 L100 124 Z" fill="#0C0D0E"/>
  <path d="M78 145 L78 165 M89 145 L89 165 M100 145 L100 165 M111 145 L111 165 M122 145 L122 165" stroke="#0C0D0E" stroke-width="4"/>
  <path d="M60 85 Q54 115 58 140 Q62 160 55 180" stroke="#86EFAC" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M140 85 Q146 115 142 140 Q138 160 145 180" stroke="#86EFAC" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M100 124 Q98 148 102 175" stroke="#4ADE80" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`;

const WORDMARK_SKULL = `
<div class="nav-logo-icon">
  <svg viewBox="0 0 100 100" style="width:1.25rem;height:1.25rem;" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 15 C30 15 20 30 20 48 C20 60 26 70 35 73 L35 82 L65 82 L65 73 C74 70 80 60 80 48 C80 30 70 15 50 15 Z M35 48 A6 6 0 1 1 35 47.9 M65 48 A6 6 0 1 1 65 47.9 M44 60 L56 60 L50 67 Z M40 76 L43 82 M50 76 L50 82 M60 76 L57 82"/>
    <circle cx="30" cy="20" r="4" fill="#4ADE80" stroke="none" opacity=".9"/>
    <circle cx="68" cy="18" r="5" fill="#4ADE80" stroke="none" opacity=".9"/>
    <circle cx="74" cy="28" r="3.5" fill="#4ADE80" stroke="none" opacity=".8"/>
  </svg>
</div>`;

/* ── Render Navbar ── */
function renderNavbar() {
  const pages = [
    { id:'home', label:'Home' },
    { id:'shop', label:'Shop' },
    { id:'story', label:'Our Story' },
    { id:'wheelhouse', label:'The Wheelhouse' }
  ];
  const more = [
    { id:'wholesale', label:'Wholesale' },
    { id:'faq', label:'FAQ' },
    { id:'contact', label:'Contact' },
  ];

  return `
  <div class="announce-bar">
    <span class="free-ship">${ICONS.truck} FREE US SHIPPING $45+</span>
    <span style="color:#2A3E31">•</span>
    <span style="color:#F5F2EB">Every Bar Funds Recovery at <strong>The Wheelhouse</strong></span>
  </div>
  <div class="navbar-inner">
    <div class="nav-side nav-left">
      <button class="mobile-menu-btn" onclick="toggleMobileMenu()" id="mobile-menu-btn">${ICONS.menu}</button>
      <nav class="nav-links-desktop">
        <button class="nav-link ${state.currentPage==='shop'?'active':''}" onclick="navigate('shop')">Shop</button>
        <button class="nav-link ${state.currentPage==='story'?'active':''}" onclick="navigate('story')">Our Story</button>
        <button class="nav-link ${state.currentPage==='wheelhouse'?'active':''}" onclick="navigate('wheelhouse')">The Wheelhouse</button>
      </nav>
    </div>

    <a href="#" class="nav-logo-center" onclick="navigate('home');return false;">
      <img src="images/SIAP LOGO.png" alt="Soapbriety Logo">
    </a>

    <div class="nav-side nav-right">
      <nav class="nav-links-desktop">
        <button class="nav-link ${state.currentPage==='wholesale'?'active':''}" onclick="navigate('wholesale')">Wholesale</button>
        <button class="nav-link ${state.currentPage==='faq'?'active':''}" onclick="navigate('faq')">FAQ</button>
        <button class="nav-link ${state.currentPage==='contact'?'active':''}" onclick="navigate('contact')">Contact</button>
      </nav>
      <div class="nav-actions">
        <button class="nav-icon-btn" onclick="openSearch()" title="Search Products">${ICONS.search}</button>
        <button class="nav-icon-btn lg-hide" style="display:none;" onclick="navigate('wholesale')">${ICONS.sparkles}</button>
        <button class="nav-cart-btn" onclick="openCart()">
          ${ICONS.shoppingBag}
          <span class="hide-mobile">Cart</span>
          ${cartCount()>0?`<span class="cart-count">${cartCount()}</span>`:''}
        </button>
      </div>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-grid">
      ${[...pages,...more].map(p=>`<button class="mobile-nav-item ${state.currentPage===p.id?'active':''}" onclick="navigate('${p.id}');closeMobileMenu()">${p.label}</button>`).join('')}
    </div>
    <div style="padding-top:1rem;border-top:1px solid #1F2922;margin-top:1rem;text-align:center;font-size:.6875rem;font-family:var(--font-mono);color:#78887C;">
      Soapbriety • Clean Date: April 20, 2023
    </div>
  </div>`;
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  const b = document.getElementById('mobile-menu-btn');
  if (m) {
    m.classList.toggle('open');
    b.innerHTML = m.classList.contains('open') ? ICONS.x : ICONS.menu;
  }
}
function closeMobileMenu() {
  const m = document.getElementById('mobile-menu');
  const b = document.getElementById('mobile-menu-btn');
  if (m) { m.classList.remove('open'); b.innerHTML = ICONS.menu; }
}

/* ── Product Card HTML ── */
function productCardHTML(product) {
  var img0 = product.images[0] || product.featuredImage || '';
  var img1 = product.images[1] || img0;
  var price = product.price;
  var compareAt = product.compareAtPrice;
  var soldOut = !product.availableForSale;
  var variantId = product.defaultVariantId || product.id;

  return `
  <div class="product-card${soldOut ? ' sold-out' : ''}">
    <div class="product-img-wrap" onclick="openQuickView('${product.handle || product.id}')">
      <img src="${img0}" alt="${product.title}" loading="lazy"
           onmouseover="this.src='${img1}'"
           onmouseout="this.src='${img0}'">
      <div class="product-badges">
        <div style="display:flex;flex-direction:column;gap:.25rem;">
          ${(product.tags && product.tags.indexOf('best-seller') >= 0) ? '<span class="product-badge-bs">BEST SELLER</span>' : ''}
          ${soldOut ? '<span class="product-badge-ltd" style="background:var(--red);color:#fff;">SOLD OUT</span>' : ''}
          ${(compareAt && compareAt > price) ? '<span class="product-badge-ltd" style="background:var(--copper);">SALE</span>' : ''}
        </div>
      </div>
      <div class="product-hover-actions">
        <button class="hover-quick-view" onclick="event.stopPropagation();openQuickView('${product.handle || product.id}')" title="Quick View">${ICONS.eye}</button>
        ${soldOut ? '' : '<button class="hover-add" onclick="event.stopPropagation();addToCart(\'' + variantId + '\')">' + ICONS.shoppingBag + ' Quick Add</button>'}
      </div>
    </div>
    <div class="product-body">
      <div class="product-meta">
        <span class="product-cat">${product.productType || ''}</span>
      </div>
      <div>
        <div class="product-name" onclick="openQuickView('${product.handle || product.id}')">${product.title}</div>
        <p class="product-subtitle line-clamp-1">${product.description ? product.description.substring(0, 80) : ''}</p>
      </div>
      <div class="product-footer">
        <div class="product-rating"></div>
        <span class="product-price">
          ${(compareAt && compareAt > price) ? '<span style="text-decoration:line-through;color:var(--muted-dk);margin-right:.375rem;">' + formatMoney(compareAt, product.currencyCode) + '</span>' : ''}
          ${formatMoney(price, product.currencyCode)}
        </span>
      </div>
      ${soldOut
        ? '<button class="product-atc" disabled style="opacity:.5;cursor:not-allowed;">' + ICONS.shoppingBag + ' Sold Out</button>'
        : '<button class="product-atc" onclick="addToCart(\'' + variantId + '\')">'
          + ICONS.shoppingBag + ' Add To Cart • ' + formatMoney(price, product.currencyCode) + '</button>'}
    </div>
  </div>`;
}

/* ── HOME PAGE ── */
function renderHomePage() {
  const featuredProducts = SHOP_PRODUCTS.slice(0, 6);
  return `
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg">
      <img class="hero-img" src="gallery/c282a4c6-3cbc-4aa6-8abf-e4bce0e6e0c2.jpg" alt="Cold process soap pouring">
      <div class="hero-overlay-grad"></div>
      <div class="hero-dot-grid"></div>
    </div>
    <div class="hero-content">
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;max-width:56rem;">
        <div class="badge-pill badge-green" style="display:inline-flex;align-items:center;gap:.5rem;">
          ${ICONS.flame}<span style="color:var(--copper)"></span>FROTHY AF • APRIL 20, 2023 CLEAN DATE
        </div>
        <h1 class="hero-title">MORE THAN SOAP. <br><span class="gradient-text">EVERY BAR HELPS SOMEONE START OVER.</span></h1>
        <p class="hero-desc">Premium handcrafted cold-process soap funding recovery, community outreach, and peer support circles through <strong>The Wheelhouse</strong>.</p>
      </div>
      <div class="hero-ctas">
        <button class="btn btn-copper" onclick="navigate('shop')">Shop Collection ${ICONS.arrowRight}</button>
        <button class="btn btn-dark" onclick="navigate('story')">${ICONS.play} Read Our Story (April 20, 2023)</button>
      </div>
      <div class="hero-pillars">
        <div class="pillar">${ICONS.checkCircle} <span style="color:var(--green)"></span>100% Cold-Process Craft</div>
        <div class="pillar">${ICONS.heartHandshake} <span style="color:var(--copper)"></span>Funds The Wheelhouse</div>
        <div class="pillar">${ICONS.shieldCheck} <span style="color:var(--green-lt)"></span>No Synthetic Detergents</div>
        <div class="pillar">${ICONS.sparkles}Free US Shipping $45+</div>
      </div>
    </div>
  </section>

  <!-- WHY SECTION -->
  <section class="sections" style="margin-top:0;padding-bottom:0;">
    <div class="section" style="margin-top:6rem;">
      <div class="card-dark" style="padding:3rem 2rem;">
        <div class="why-grid">
          <div class="why-img-wrap">
            <img src="images/David.png" alt="Founder DJ">
            <div class="why-img-caption">
              <span class="caption-label">FOUNDER • DJ</span>
              <span class="caption-name">Clean &amp; Sober since April 20, 2023</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:1.5rem;">
            <span style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.1em;">WHY SOAPBRIETY EXISTS</span>
            <h2 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.5rem,4vw,3rem);color:var(--cream);line-height:1.1;">The Soap Is Not The Product. <br><span style="color:var(--green)">Hope Is.</span></h2>
            <div style="display:flex;flex-direction:column;gap:1rem;font-size:.875rem;color:var(--muted);line-height:1.7;">
              <p>On <strong style="color:var(--cream)">April 20, 2023</strong>, DJ made the life-changing decision to get clean and rebuild his life from the ground up. Soapbriety was born directly from that moment of total surrender and rebirth.</p>
              <p>Every handcrafted bar symbolizes washing away yesterday's mistakes and choosing to walk forward with discipline. Profits directly fund <strong style="color:var(--cream)">The Wheelhouse</strong>—sponsoring peer recovery circles, hot meals, hygiene kits, and community outreach.</p>
            </div>
            <div class="why-quote">"We don't just sell soap. We provide a daily physical reminder at the sink that you can start fresh anytime."</div>
            <div style="display:flex;flex-wrap:wrap;gap:1rem;padding-top:.5rem;">
              <button class="btn btn-green" onclick="navigate('story')">Read DJ's Full Founder Journey</button>
              <button class="btn btn-outline" onclick="navigate('wheelhouse')">Learn About The Wheelhouse</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 30 DAY CHIP SECTION -->
    <div class="section">
      <div style="padding:3rem 2rem;border-radius:1.5rem;background:linear-gradient(to right,#172E1E,#121D15);border:1px solid #2F4D37;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2rem;">
        <div style="flex:1;min-width:300px;">
          <div class="badge-pill badge-green" style="display:inline-flex;margin-bottom:1rem;">${ICONS.star} A ONE-TIME GESTURE OF RESPECT</div>
          <h3 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.5rem,3vw,2rem);color:var(--cream);margin-bottom:1rem;line-height:1.2;">Celebrating your first 30 days?</h3>
          <p style="font-size:1rem;color:var(--muted);line-height:1.7;margin-bottom:1rem;">That first month in recovery is the hardest part of the entire journey. To honor that huge step, your first 30-day chip gets you a free bar of soap on us.</p>
          <p style="font-size:1rem;color:var(--muted);line-height:1.7;margin-bottom:1.5rem;">Bring your 30-day token to an event or send us a photo of your chip to claim it. It’s a one-time gesture of respect from someone who’s walked that path, celebrating the moment you proved to yourself that a new life is possible. Stay Frothy AF.</p>
          <button class="btn btn-copper" onclick="navigate('contact')">Claim Your Free Bar</button>
        </div>
        <div style="flex:1;min-width:300px;display:flex;justify-content:center;align-items:center;">
          <div style="width:12rem;height:12rem;border-radius:50%;background:#0F1311;border:2px solid var(--copper);display:flex;justify-content:center;align-items:center;color:var(--copper);font-family:var(--font-serif);font-weight:900;font-size:3.5rem;box-shadow:0 0 30px rgba(206,140,92,0.15);">30</div>
        </div>
      </div>
    </div>



    <!-- PRODUCTS SECTION -->
    <div class="section">
      <div class="section-header" style="border-bottom:1px solid #1F2B23;padding-bottom:1.5rem;margin-bottom:2rem;">
        <div>
          <span class="section-eyebrow">HANDMADE IN MICRO BATCHES</span>
          <div class="section-title">Popular Handcrafted Bars</div>
        </div>
        <div class="tab-row" id="home-tabs">
          ${['All','Best Sellers','Fruit Collection','Topicals','Gift Boxes'].map(t=>`<button class="tab-btn ${t==='All'?'active':''}" onclick="filterHomeProducts('${t}',this)">${t}</button>`).join('')}
        </div>
      </div>
      <div class="grid grid-3" style="gap:1.5rem;" id="home-products-grid">
        ${featuredProducts.map(productCardHTML).join('')}
      </div>
    </div>


    <!-- TIMELINE -->
    <div class="section">
      <div class="card-dark" style="padding:3rem 2rem;">
        <div class="section-header" style="margin-bottom:2rem;">
          <div>
            <span class="section-eyebrow">THE FOUNDER'S JOURNEY</span>
            <div class="section-title">Meet DJ: Founder of Soapbriety</div>
          </div>
          <button class="btn btn-green btn-sm" onclick="navigate('story')">Read Full Documentary Story</button>
        </div>
        <div class="grid grid-3" style="gap:1.5rem;">
          <div class="program-card"><span style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:var(--copper);">APRIL 20, 2023</span><div class="program-title">1. The Choice To Change</div><p class="program-desc">DJ woke up, washed his face with cold water, and decided that April 20th would be his final day in addiction. The morning wash basin became the daily symbol of a clean start.</p></div>
          <div class="program-card"><span style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:var(--green);">SUMMER 2023</span><div class="program-title">2. Crafting Soap &amp; Purpose</div><p class="program-desc">Learning the disciplined art of cold-process soapmaking. Combining plant oils, essential oils, and curing bars for 42 days—a physical metaphor for patience in recovery.</p></div>
          <div class="program-card"><span style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:var(--green-lt);">TODAY &amp; BEYOND</span><div class="program-title">3. The Movement &amp; Wheelhouse</div><p class="program-desc">Soapbriety has shipped over 48,000 bars nationwide, funding hundreds of recovery support events and providing second chances to hundreds of individuals.</p></div>
        </div>
      </div>
    </div>



    <!-- REVIEWS -->
    <div class="section" style="padding-bottom:5rem;">
      <div class="section-header" style="margin-bottom:2rem;">
        <div>
          <span class="section-eyebrow">VERIFIED BUYERS &amp; COMMUNITY STORIES</span>
          <div class="section-title">What People Are Saying</div>
        </div>
        <div class="tab-row" id="review-tabs">
          <button class="tab-btn active" onclick="filterReviews('all',this)">All Reviews</button>
          <button class="tab-btn" onclick="filterReviews('product',this)">Product Reviews</button>
          <button class="tab-btn" onclick="filterReviews('mission',this)">Mission Stories</button>
        </div>
      </div>
      <div class="grid grid-3" style="gap:1.5rem;" id="reviews-grid">
        ${REVIEWS.slice(0,3).map(reviewCardHTML).join('')}
      </div>
    </div>
  </section>`;
}

function reviewCardHTML(r) {
  return `
  <div class="review-card">
    <div style="display:flex;flex-direction:column;gap:.75rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        ${r.badge?`<span class="review-badge">${r.badge}</span>`:''}
      </div>
      <div class="review-title">"${r.title}"</div>
      <p class="review-body">${r.comment}</p>
    </div>
    <div class="review-author">
      <img src="${r.userAvatar}" alt="${r.author}" class="review-avatar">
      <div>
        <div class="review-name">${r.author}</div>
        <div class="review-loc">${r.location} • Verified Buyer</div>
      </div>
    </div>
  </div>`;
}

function filterHomeProducts(tab, btn) {
  document.querySelectorAll('#home-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = tab === 'All' ? SHOP_PRODUCTS : SHOP_PRODUCTS.filter(p => (p.productType || '').toLowerCase() === tab.toLowerCase() || (p.tags && p.tags.indexOf(tab.toLowerCase().replace(/ /g,'-')) >= 0));
  document.getElementById('home-products-grid').innerHTML = filtered.slice(0,6).map(productCardHTML).join('');
}

function filterReviews(cat, btn) {
  document.querySelectorAll('#review-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = cat === 'all' ? REVIEWS : REVIEWS.filter(r => r.category === cat);
  document.getElementById('reviews-grid').innerHTML = filtered.slice(0,3).map(reviewCardHTML).join('');
}

/* ── IMPACT CALCULATOR ── */
function renderImpactCalculator() {
  return `
  <div class="impact-calc" id="impact-calc-widget">
    <div class="impact-calc-glow"></div>
    <div style="position:relative;z-index:1;display:flex;flex-direction:column;gap:2rem;">
      <div style="text-align:center;max-width:36rem;margin:0 auto;display:flex;flex-direction:column;gap:.5rem;">
        <div class="badge-pill badge-green" style="margin:0 auto;">${ICONS.sparkles} THE IMPACT CALCULATOR</div>
        <div class="section-title">See Your Personal Impact at The Wheelhouse</div>
        <p style="font-size:.875rem;color:#9EB0A1;">Slide to select your monthly soap bar usage and calculate how many hours of peer recovery circles your orders fund annually.</p>
      </div>
      <div style="max-width:32rem;margin:0 auto;padding:1.5rem;border-radius:1rem;background:#090D0A;border:1px solid #213025;width:100%;box-sizing:border-box;">
        <div style="display:flex;align-items:center;justify-content:space-between;font-size:.75rem;font-family:var(--font-mono);font-weight:700;margin-bottom:1rem;">
          <span style="color:var(--muted);">Monthly Soap Usage:</span>
          <span style="font-size:1.125rem;color:var(--green);font-weight:900;" id="calc-display">3 Bars / Month</span>
        </div>
        <input type="range" min="1" max="12" value="3" class="calc-slider" id="calc-slider" oninput="updateCalc(this.value)">
        <div style="display:flex;justify-content:space-between;font-size:.625rem;font-family:var(--font-mono);color:#68786B;margin-top:.5rem;">
          <span>1 Bar</span><span>3 Bars</span><span>6 Bars</span><span>12 Bars</span>
        </div>
      </div>
      <div class="grid grid-4" style="gap:1rem;">
        <div class="calc-metric">
          <span style="color:var(--green);">${ICONS.heartHandshake}</span>
          <div class="calc-metric-num" id="calc-hours">54</div>
          <div class="calc-metric-label">Peer Recovery Circles</div>
        </div>
        <div class="calc-metric">
          <span style="color:var(--copper);">${ICONS.utensils}</span>
          <div class="calc-metric-num" id="calc-meals">108</div>
          <div class="calc-metric-label">Hot Fellowship Meals</div>
        </div>
        <div class="calc-metric">
          <span style="color:var(--green-lt);">${ICONS.shieldCheck}</span>
          <div class="calc-metric-num" id="calc-kits">45</div>
          <div class="calc-metric-label">Hygiene Kits</div>
        </div>
        <div class="calc-metric">
          <span style="color:#38BDF8;">${ICONS.bus}</span>
          <div class="calc-metric-num" id="calc-transit">27</div>
          <div class="calc-metric-label">Crisis Transit Passes</div>
        </div>
      </div>
      <div style="text-align:center;font-size:.75rem;color:#8E9E91;font-family:var(--font-mono);">The soap is simply the daily reminder. <strong style="color:var(--cream)">Hope is the product.</strong></div>
    </div>
  </div>`;
}

function updateCalc(val) {
  const n = parseInt(val);
  const annual = n * 12;
  document.getElementById('calc-display').textContent = `${n} Bar${n>1?'s':''} / Month`;
  document.getElementById('calc-hours').textContent = Math.round(annual * 1.5) + ' hrs';
  document.getElementById('calc-meals').textContent = Math.round(annual * 3);
  document.getElementById('calc-kits').textContent = Math.round(annual * 1.25);
  document.getElementById('calc-transit').textContent = Math.round(annual * 0.75);
}

/* ── SHOP PAGE ── */
let shopState = { cat: 'All', intensity: 'All', sort: 'featured', q: '' };
function renderShopPage() {
  const cats = ['All','Best Sellers','Fruit Collection','Topicals','Seasonal','Gift Boxes','Limited Releases'];
  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:2.5rem;">
      <div style="border-radius:1.5rem;background:linear-gradient(to right,#14261B,#0E1611,#1C1510);border:1px solid #273A2D;padding:3rem 2rem;box-shadow:0 25px 50px rgba(0,0,0,.5);">
        <div class="badge-pill badge-green" style="display:inline-flex;">${ICONS.sparkles} 100% HANDCRAFTED COLD-PROCESS SOAP</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,6vw,3rem);color:var(--cream);margin:.75rem 0 .5rem;">The Soapbriety Catalog</h1>
        <p style="font-size:.875rem;color:var(--muted);line-height:1.7;max-width:36rem;">Every bar is cured for 42 days, poured with raw botanicals, and directly funds recovery programs at The Wheelhouse.</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div class="tab-scroll" id="shop-cat-tabs">
          ${cats.map(c=>`<button class="tab-btn ${c===shopState.cat?'active':''}" onclick="shopFilter('cat','${c}',this)">${c}</button>`).join('')}
        </div>
        <div class="shop-filter-row">
          <div class="shop-search-left">
            <div class="search-input-wrap">
              ${ICONS.search}
              <input type="text" class="search-input" id="shop-search-input" placeholder="Search by ingredient or fragrance..." value="${shopState.q}" oninput="shopFilter('q',this.value)">
            </div>
          </div>
          <div class="shop-filter-right">
            <div class="filter-label">${ICONS.filter} Intensity:
              <select class="filter-select" id="intensity-select" onchange="shopFilter('intensity',this.value)">
                <option value="All" ${shopState.intensity==='All'?'selected':''}>All Intensities</option>
                <option value="Subtle" ${shopState.intensity==='Subtle'?'selected':''}>Subtle</option>
                <option value="Medium" ${shopState.intensity==='Medium'?'selected':''}>Medium</option>
                <option value="Bold" ${shopState.intensity==='Bold'?'selected':''}>Bold</option>
              </select>
            </div>
            <div class="filter-label">${ICONS.arrowUpDown}
              <select class="filter-select" id="sort-select" onchange="shopFilter('sort',this.value)">
                <option value="featured" ${shopState.sort==='featured'?'selected':''}>Featured</option>
                <option value="price-low" ${shopState.sort==='price-low'?'selected':''}>Price: Low to High</option>
                <option value="price-high" ${shopState.sort==='price-high'?'selected':''}>Price: High to Low</option>
                <option value="rating" ${shopState.sort==='rating'?'selected':''}>Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div id="shop-grid">${renderShopGrid()}</div>
    </div>
  </div>`;
}

function renderShopGrid() {
  let filtered = SHOP_PRODUCTS.filter(p => {
    const mCat = shopState.cat === 'All' || (p.productType || '').toLowerCase() === shopState.cat.toLowerCase();
    const mInt = shopState.intensity === 'All'; // Intensity filter not applicable for Shopify products
    const q = shopState.q.toLowerCase();
    const mQ = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.tags && p.tags.some(function(t) { return t.toLowerCase().includes(q); }));
    return mCat && mInt && mQ;
  });
  if (shopState.sort === 'price-low') filtered.sort((a,b)=>a.price-b.price);
  else if (shopState.sort === 'price-high') filtered.sort((a,b)=>b.price-a.price);

  if (!filtered.length) return `
    <div style="padding:5rem 1rem;text-align:center;background:#0F1311;border-radius:1.5rem;border:1px solid #202A23;">
      <div style="font-family:var(--font-serif);font-weight:700;font-size:1.25rem;color:var(--cream);margin-bottom:.5rem;">No soaps found</div>
      <p style="font-size:.75rem;color:#8E9E91;margin-bottom:1rem;">Try adjusting your category filter or search terms.</p>
      <button class="btn btn-green btn-sm" onclick="shopResetFilters()">Reset Filters</button>
    </div>`;
  return `<div class="grid grid-3" style="gap:1.5rem;">${filtered.map(productCardHTML).join('')}</div>`;
}

function shopFilter(key, val, btn) {
  shopState[key] = val;
  if (key === 'cat' && btn) {
    document.querySelectorAll('#shop-cat-tabs .tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }
  document.getElementById('shop-grid').innerHTML = renderShopGrid();
}

function shopResetFilters() {
  shopState = { cat:'All', intensity:'All', sort:'featured', q:'' };
  renderApp();
}

/* ── STORY PAGE ── */
function renderStoryPage() {
  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:4rem;">
      <div style="text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.5rem;max-width:48rem;margin:0 auto;">
        <div class="badge-pill badge-green">${ICONS.calendar} APRIL 20, 2023 • FOUNDER DJ'S CLEAN DATE</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(2rem,6vw,3.5rem);color:var(--cream);text-transform:uppercase;line-height:1.05;">Washing Away Yesterday. <br><span style="color:var(--copper);">Choosing To Move Forward.</span></h1>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;">The true story of how a morning wash basin on April 20, 2023 sparked a nationwide movement centered around recovery, discipline, and second chances.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:4rem;align-items:start;">
        <div style="position:relative;border-radius:1.5rem;overflow:hidden;box-shadow:0 25px 50px rgba(0,0,0,.5);">
          <img src="images/David.png" alt="DJ founder story" style="width:100%;height:auto;display:block;filter:brightness(.9);">
        </div>
        <div style="display:flex;flex-direction:column;gap:1.5rem;color:var(--muted);line-height:1.8;font-size:1.125rem;">
          <h2 style="font-family:var(--font-serif);font-weight:900;font-size:2.5rem;color:var(--cream);line-height:1.1;margin-bottom:1rem;">What it do players.</h2>
          <p>For years, addiction ran my life, and my biggest problem was that I always found a way to make everything about me. I was trapped in a destructive cycle where I couldn't stop once I started, and I couldn't keep myself from starting again. I was constantly hurting myself and everyone around me.</p>
          <p>Hitting my rock bottom on April 20, 2023, meant finally getting tired of the pain. My life shifted completely when I surrendered, found God, and stepped into fellowship. It was deeply uncomfortable, but it taught me early on that there is no real growth in comfort. To recover, I had to learn how to get out of my own head and practice quiet, daily acts of selflessness.</p>
          <p>Moving away from a mindset where I took everything and left others with nothing, I found a new purpose in serving people. In October 2023, six months into my sobriety, I launched Soapbriety. Since I've always been a frothy individual, really the frothiest guy in the room, selling soap felt like the perfect vehicle to build a movement.</p>
          <p>But this brand was never just about soap. It became my way to pay it forward and give back to God, AA, and The Wheelhouse for giving me a second chance at life. You can either see a message or be the message, and I'm doing everything in my power to live out that message every day to make my family and friends proud.</p>
          <p>Looking ahead, I don't need to force my own agenda anymore. My plan for the future is simple: less of my will, and more of His. Thank you for being a part of this journey with me.</p>
          <div style="margin-top:1rem;font-family:var(--font-serif);font-weight:900;font-size:1.5rem;color:var(--copper);">Stay Frothy AF, <br><span style="color:var(--cream);">DJ</span></div>
        </div>
      </div>
      <div style="padding:3rem 2rem;border-radius:1.5rem;background:linear-gradient(to right,#17261B,#101812,#1E1611);border:1px solid #2E4535;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem;box-shadow:0 25px 50px rgba(0,0,0,.5);">
        <span style="font-size:2.5rem;color:var(--copper);opacity:.6;">${ICONS.quote}</span>
        <h3 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.25rem,3vw,2rem);color:var(--cream);max-width:40rem;">"Everyone deserves another opportunity to rebuild themselves. The soap is simply the daily reminder. Hope is the product."</h3>
        <div style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:var(--green);">— DJ, Founder of Soapbriety</div>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;padding-top:1rem;">
          <button class="btn btn-copper" onclick="navigate('shop')">Shop Flagship Collection</button>
          <button class="btn btn-dark" onclick="navigate('wheelhouse')">Visit The Wheelhouse Page</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ── WHEELHOUSE PAGE ── */
function renderWheelhousePage() {
  const galleryImages = [
    '04209442-3557-4d42-8b5b-117318ae55f7.jpg',
    '0e7628aa-c2f3-4a9b-8dd3-477cbf27664b.jpg',
    '3ada57e8-5227-4e4d-9ec3-ce7070a86040.jpg',
    '4a248cac-bfd3-4d98-b8cb-c7a8324b9fd3.jpg',
    '637fb6d4-5657-479a-8913-cb285b172f98.jpg',
    '6a5a62cf-433b-4d03-b4e6-026582229bc3.jpg',
    'aae475fc-65e8-4018-acb1-f7bf0d726b01.jpg',
    'ba33da71-ce16-4a14-8025-bb2adec42823.jpg',
    'c282a4c6-3cbc-4aa6-8abf-e4bce0e6e0c2.jpg',
    'dd166f18-136f-47a0-93e1-c56a675f3e7b.jpg',
    'ef050ec9-115f-4cff-9cb6-23c589c166f6.jpg',
    'f4183476-a5c1-49e8-9bec-57eeb949efb6.jpg'
  ];

  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:4rem;">
      <div style="border-radius:1.5rem;background:linear-gradient(to right,#17291D,#0E1711,#1C1510);border:1px solid #2B4232;padding:3rem 2rem;">
        <div class="badge-pill badge-green" style="display:inline-flex;margin-bottom:1rem;">${ICONS.heartHandshake} THE WHEELHOUSE RECOVERY COMMUNITY CENTER</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);margin-bottom:1rem;">Why Support The Wheelhouse?</h1>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;margin-bottom:1rem;">The Wheelhouse is a nonprofit men's recovery community in Deer Park, Texas, helping men overcome drug and alcohol addiction through a structured, spiritually centered, 12-Step recovery program. Since its beginnings in the 1950s, the organization has helped thousands of men rebuild their lives, restore their families, and become productive members of the community.</p>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;">Rather than simply providing a place to stay, The Wheelhouse offers a long-term path to recovery built on accountability, brotherhood, service, employment, and personal responsibility. Recovery is viewed as something practiced every day through structure, purpose, and community.</p>
      </div>

      <div>
        <h2 class="section-title" style="margin-bottom:1.5rem;">What Makes The Wheelhouse Different?</h2>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;margin-bottom:1.5rem;">Unlike many traditional treatment programs, The Wheelhouse emphasizes long-term transformation rather than short-term stabilization.</p>
        <div class="grid grid-3" style="gap:1.5rem;">
          <div class="program-card"><span style="color:var(--green)">${ICONS.home}</span><div class="program-title">Residential Community</div><p class="program-desc">A structured residential recovery community.</p></div>
          <div class="program-card"><span style="color:var(--copper)">${ICONS.sparkles}</span><div class="program-title">Spiritually Centered</div><p class="program-desc">A spiritually centered, 12-Step approach.</p></div>
          <div class="program-card"><span style="color:var(--amber)">${ICONS.users}</span><div class="program-title">Daily Accountability</div><p class="program-desc">Daily accountability and peer support.</p></div>
          <div class="program-card"><span style="color:var(--green-lt)">${ICONS.briefcase}</span><div class="program-title">Life Skills</div><p class="program-desc">Employment and life-skills development.</p></div>
          <div class="program-card"><span style="color:var(--blue)">${ICONS.shieldCheck}</span><div class="program-title">Transitional Living</div><p class="program-desc">Transitional sober living.</p></div>
          <div class="program-card"><span style="color:var(--copper)">${ICONS.heartHandshake}</span><div class="program-title">Community Service</div><p class="program-desc">Community service and volunteer opportunities.</p></div>
        </div>
        <div style="margin-top:1.5rem;padding:1.5rem;border-radius:1rem;background:#141C16;border:1px solid #283C2F;">
            <p style="font-size:1rem;color:var(--green-lt);font-weight:700;">The first 30 days of the program are offered free of charge, removing a major financial barrier for men seeking recovery.</p>
        </div>
      </div>

      <div>
        <h2 class="section-title" style="margin-bottom:1.5rem;">Why Community Support Matters</h2>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;margin-bottom:1.5rem;">Every meal served, every bed provided, every utility bill paid, and every recovery program offered is made possible through the generosity of individuals, churches, businesses, and volunteers.</p>
        <div class="grid grid-4" style="gap:1rem;">
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Safe housing</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Nutritious meals</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Recovery programming</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Transportation assistance</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Employment readiness</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Facility maintenance</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Educational materials</div>
            <div style="display:flex;align-items:center;gap:.75rem;padding:1rem;background:#121814;border:1px solid #233127;border-radius:.75rem;color:var(--cream);font-size:.875rem;"><span style="color:var(--green);width:1.5rem;height:1.5rem;display:flex;flex-shrink:0;">${ICONS.checkCircle}</span> Community outreach</div>
        </div>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;margin-top:1.5rem;">Because The Wheelhouse is a nonprofit, community support directly helps create opportunities for men who are committed to changing their lives.</p>
      </div>

      <div style="padding:3rem 2rem;border-radius:1.5rem;background:#0F1311;border:1px solid #202A23;">
        <h2 class="section-title" style="margin-bottom:1.5rem;">The Impact</h2>
        <div class="grid grid-2" style="gap:2rem;">
            <div style="display:flex;flex-direction:column;gap:1rem;">
                <div style="display:flex;align-items:flex-start;gap:1rem;">
                    <div style="color:var(--green);margin-top:.25rem;">${ICONS.arrowRight}</div>
                    <p style="font-size:1rem;color:var(--cream);line-height:1.5;">Helped more than 7,500 men begin rebuilding their lives.</p>
                </div>
                <div style="display:flex;align-items:flex-start;gap:1rem;">
                    <div style="color:var(--green);margin-top:.25rem;">${ICONS.arrowRight}</div>
                    <p style="font-size:1rem;color:var(--cream);line-height:1.5;">Reported that more than 64% of men who complete its long-term recovery program remain sober for at least one year after leaving.</p>
                </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:1rem;">
                <div style="display:flex;align-items:flex-start;gap:1rem;">
                    <div style="color:var(--green);margin-top:.25rem;">${ICONS.arrowRight}</div>
                    <p style="font-size:1rem;color:var(--cream);line-height:1.5;">Invested millions of dollars into housing, meals, recovery programming, and job readiness.</p>
                </div>
                <div style="display:flex;align-items:flex-start;gap:1rem;">
                    <div style="color:var(--green);margin-top:.25rem;">${ICONS.arrowRight}</div>
                    <p style="font-size:1rem;color:var(--cream);line-height:1.5;">Continued expanding its campus to serve more men in need.</p>
                </div>
            </div>
        </div>
      </div>

      <div>
        <h2 class="section-title" style="margin-bottom:1.5rem;">Ways You Can Help</h2>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;margin-bottom:1.5rem;">Supporting The Wheelhouse isn't limited to financial donations. Community members can make a difference by:</p>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;color:var(--cream);">
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Making a one-time or recurring donation</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Volunteering their time and skills</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Serving meals</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Becoming a recovery mentor (for qualified individuals)</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Participating in fundraising events</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Sponsoring community events</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Donating goods or professional services</li>
            <li style="display:flex;align-items:center;gap:.75rem;"><span style="color:var(--copper)">${ICONS.checkCircle}</span> Partnering as a business, church, or civic organization</li>
        </ul>
      </div>

      <div class="grid grid-2" style="gap:2rem;">
        <div style="padding:2rem;background:#121814;border:1px solid #233127;border-radius:1.5rem;">
            <h3 style="font-family:var(--font-serif);font-weight:700;font-size:1.5rem;color:var(--cream);margin-bottom:1rem;">Local Businesses Make Recovery Possible</h3>
            <p style="font-size:1rem;color:var(--muted);line-height:1.7;margin-bottom:1rem;">Businesses throughout Deer Park and the Greater Houston area play an important role in helping men rebuild their lives.</p>
            <p style="font-size:1rem;color:var(--muted);line-height:1.7;">Corporate sponsorships, in-kind donations, volunteer days, and employment opportunities give men in recovery the chance to regain stability, purpose, and confidence while strengthening the local community.</p>
        </div>
        <div style="padding:2rem;background:#121814;border:1px solid #233127;border-radius:1.5rem;">
            <h3 style="font-family:var(--font-serif);font-weight:700;font-size:1.5rem;color:var(--cream);margin-bottom:1rem;">Recovery Changes More Than One Life</h3>
            <p style="font-size:1rem;color:var(--muted);line-height:1.7;margin-bottom:1rem;">When one person recovers, the impact extends far beyond the individual.</p>
            <ul style="list-style:none;padding:0;margin:0 0 1rem 0;display:flex;flex-direction:column;gap:.5rem;color:var(--cream);">
                <li>• Families are reunited.</li>
                <li>• Children regain fathers.</li>
                <li>• Employers gain dependable workers.</li>
                <li>• Neighborhoods become stronger.</li>
                <li>• Communities become healthier.</li>
            </ul>
            <p style="font-size:1rem;color:var(--muted);line-height:1.7;">Supporting The Wheelhouse means investing in lasting recovery and helping create opportunities for men determined to build a better future.</p>
        </div>
      </div>

      <div>
        <h2 class="section-title" style="margin-bottom:1.5rem;">Life at The Wheelhouse</h2>
        <div class="grid grid-3" style="gap:1rem;">
          ${galleryImages.map(img => `
            <div style="border-radius:1rem;overflow:hidden;aspect-ratio:1/1;border:1px solid #2B4232;">
              <img src="gallery/${img}" alt="Wheelhouse Gallery Image" style="width:100%;height:100%;object-fit:cover;transition:transform .3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
          `).join('')}
        </div>
      </div>

      <div style="padding:2.5rem 2rem;border-radius:1.5rem;background:linear-gradient(to right,#172E1E,#121D15);border:1px solid #2F4D37;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem;">
        <div>
          <h3 style="font-family:var(--font-serif);font-weight:900;font-size:1.5rem;color:var(--cream);margin-bottom:.5rem;">Rebuild What Addiction Tried to Destroy</h3>
          <p style="font-size:.875rem;color:var(--muted);max-width:48rem;">Every act of generosity helps rebuild what addiction tried to destroy. Whether you choose to donate, volunteer, sponsor an event, or simply share our mission, your support gives men the opportunity to find hope, purpose, and lasting recovery.</p>
        </div>
        <button class="btn btn-copper" onclick="window.open('https://thewheelhouse.org', '_blank')">Learn More, Volunteer, or Donate</button>
      </div>
    </div>
  </div>`;
}

/* ── IMPACT PAGE ── */
function renderImpactPage() {
  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:4rem;">
      <div style="text-align:center;max-width:48rem;margin:0 auto;display:flex;flex-direction:column;gap:1rem;">
        <div class="badge-pill badge-green" style="margin:0 auto;">${ICONS.heartHandshake} COMMUNITY IMPACT REPORTING</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);">Verified Impact &amp; Community Transparency</h1>
        <p style="font-size:.875rem;color:var(--muted);line-height:1.7;">We believe in complete accountability. Every cold-process bar sold directly contributes to quantifiable recovery support at The Wheelhouse.</p>
      </div>
      <div class="grid grid-4" style="gap:1.5rem;">
        <div style="padding:1.5rem;border-radius:1rem;background:#121814;border:1px solid #233127;text-align:center;"><div style="font-size:2.25rem;font-family:var(--font-mono);font-weight:900;color:var(--green);">${IMPACT_STATS.barsSold.toLocaleString()}+</div><div style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:#9EB0A1;text-transform:uppercase;margin-top:.5rem;">Bars Sold Nationwide</div></div>
        <div style="padding:1.5rem;border-radius:1rem;background:#121814;border:1px solid #233127;text-align:center;"><div style="font-size:2.25rem;font-family:var(--font-mono);font-weight:900;color:var(--copper);">$${IMPACT_STATS.moneyDonated.toLocaleString()}+</div><div style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:#9EB0A1;text-transform:uppercase;margin-top:.5rem;">Direct Wheelhouse Funding</div></div>
        <div style="padding:1.5rem;border-radius:1rem;background:#121814;border:1px solid #233127;text-align:center;"><div style="font-size:2.25rem;font-family:var(--font-mono);font-weight:900;color:var(--green-lt);">${IMPACT_STATS.eventsFunded}+</div><div style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:#9EB0A1;text-transform:uppercase;margin-top:.5rem;">Peer Recovery Events</div></div>
        <div style="padding:1.5rem;border-radius:1rem;background:#121814;border:1px solid #233127;text-align:center;"><div style="font-size:2.25rem;font-family:var(--font-mono);font-weight:900;color:var(--cream);">${IMPACT_STATS.volunteerHours.toLocaleString()}+</div><div style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:#9EB0A1;text-transform:uppercase;margin-top:.5rem;">Volunteer Hours</div></div>
      </div>
      ${renderImpactCalculator()}
      <div style="padding:2rem;border-radius:1.5rem;background:#0F1411;border:1px solid #243428;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem;">
        <div>
          <h3 style="font-family:var(--font-serif);font-weight:700;font-size:1.25rem;color:var(--cream);display:flex;align-items:center;gap:.5rem;">${ICONS.fileText} Annual Wheelhouse Community Impact Report</h3>
          <p style="font-size:.75rem;color:#9EB0A1;margin-top:.375rem;">Download our complete audited breakdown of proceeds distribution, meal counts, and peer circle attendance logs.</p>
        </div>
        <button class="btn btn-green" onclick="alert('Downloading Soapbriety Annual Impact Report (PDF)...')">${ICONS.download} Download PDF Report</button>
      </div>
    </div>
  </div>`;
}

/* ── WHOLESALE PAGE ── */
function renderWholesalePage() {
  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:4rem;">
      <div style="border-radius:1.5rem;background:linear-gradient(to right,#192E20,#0E1711,#1F1810);border:1px solid #2D4534;padding:3rem 2rem;">
        <div class="badge-pill badge-green" style="display:inline-flex;margin-bottom:1rem;">${ICONS.sparkles} PARTNER DEALER PORTAL &amp; WHOLESALE</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);margin-bottom:1rem;">Stock Soapbriety In Your Space</h1>
        <p style="font-size:1rem;color:var(--muted);line-height:1.7;max-width:48rem;">Partner with a brand that customers respect. We supply barbershops, boutique grocers, gyms, recovery centers, and lifestyle retailers with handcrafted cold-process soap that sells itself.</p>
      </div>
      <div class="grid grid-2" style="gap:1.5rem;">
        <div class="benefit-card"><span style="color:var(--copper)">${ICONS.package}</span><div class="benefit-title">Dealer Pricing Margins</div><p class="benefit-desc">Generous wholesale margins with low minimum order quantities (MOQs) starting at just 50 bars.</p></div>

        <div class="benefit-card"><span style="color:var(--green-lt)">${ICONS.shieldCheck}</span><div class="benefit-title">Co-Branded Impact Marketing</div><p class="benefit-desc">Your store is featured on our dealer locator, highlighting how your business helps fund The Wheelhouse.</p></div>
      </div>
      <div style="max-width:48rem;margin:0 auto;padding:3rem 2rem;border-radius:1.5rem;background:#0F1411;border:1px solid #243428;width:100%;box-sizing:border-box;">
        <div style="text-align:center;margin-bottom:1.5rem;">
          <h2 style="font-family:var(--font-serif);font-weight:900;font-size:1.875rem;color:var(--cream);">Apply For Wholesale Dealer Account</h2>
          <p style="font-size:.875rem;color:#9EB0A1;margin-top:.5rem;">Fill out the form below to receive our wholesale catalog, sample kit, and opening order terms.</p>
        </div>
        <div id="wholesale-form-area">${renderWholesaleForm()}</div>
      </div>
    </div>
  </div>`;
}

function renderWholesaleForm() {
  return `
  <form onsubmit="submitWholesaleForm(event)">
    <div class="form-grid">
      <div class="form-field"><label class="form-label">Business Name *</label><input type="text" class="form-input" required placeholder="e.g. Iron &amp; Wood Barbershop"></div>
      <div class="form-field"><label class="form-label">Contact Person *</label><input type="text" class="form-input" required placeholder="Full Name"></div>
    </div>
    <div class="form-grid">
      <div class="form-field"><label class="form-label">Business Email *</label><input type="email" class="form-input" required placeholder="email@yourstore.com"></div>
      <div class="form-field"><label class="form-label">Phone Number</label><input type="tel" class="form-input" placeholder="(555) 000-0000"></div>
    </div>
    <div class="form-grid">
      <div class="form-field"><label class="form-label">Business Type</label>
        <select class="form-select"><option>Barbershop / Grooming Salon</option><option>Boutique Retailer / Gift Shop</option><option>Gym / Athletic Facility</option><option>Recovery Center / Wellness Space</option><option>Online E-commerce Store</option></select>
      </div>
      <div class="form-field"><label class="form-label">Estimated Monthly Order Volume</label>
        <select class="form-select"><option>50-100 bars</option><option>100-250 bars</option><option>250-500 bars</option><option>500+ bars (Tier 1 Volume)</option></select>
      </div>
    </div>
    <div class="form-field"><label class="form-label">Store Location / Notes</label><textarea class="form-textarea" rows="3" placeholder="Tell us a bit about your store or location..."></textarea></div>
    <button type="submit" class="btn btn-copper btn-full" style="margin-top:.5rem;">Submit Wholesale Application</button>
  </form>`;
}

function submitWholesaleForm(e) {
  e.preventDefault();
  document.getElementById('wholesale-form-area').innerHTML = `
  <div class="form-success">
    ${ICONS.checkCircle}
    <h3>Application Submitted!</h3>
    <p>Our wholesale team will review your account application within 24 business hours.</p>
  </div>`;
}

/* ── JOURNAL PAGE ── */
let journalCat = 'All';
function renderJournalPage() {
  const cats = ['All','Recovery','Discipline','Healthy Habits','Natural Ingredients','Wheelhouse Events'];
  const filtered = journalCat === 'All' ? JOURNAL_ARTICLES : JOURNAL_ARTICLES.filter(a=>a.category===journalCat);
  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:3rem;">
      <div style="text-align:center;max-width:36rem;margin:0 auto;display:flex;flex-direction:column;gap:1rem;">
        <div class="badge-pill badge-green" style="margin:0 auto;">${ICONS.bookOpen} THE SOAPBRIETY JOURNAL</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);">Recovery, Discipline &amp; Craftsmanship</h1>
        <p style="font-size:.875rem;color:var(--muted);line-height:1.7;">Articles, founder reflections, natural skincare guides, and community impact recaps from DJ and The Wheelhouse team.</p>
      </div>
      <div class="tab-scroll" style="justify-content:center;">
        ${cats.map(c=>`<button class="tab-btn ${c===journalCat?'active':''}" onclick="filterJournal('${c}',this)">${c}</button>`).join('')}
      </div>
      ${journalCat==='All'&&JOURNAL_ARTICLES.length?`
      <div onclick="openArticle('${JOURNAL_ARTICLES[0].id}')" style="cursor:pointer;border-radius:1.5rem;background:#101512;border:1px solid #233127;padding:1.5rem;display:grid;grid-template-columns:1fr;gap:1.5rem;transition:border-color .3s;" onmouseover="this.style.borderColor='var(--green)'" onmouseout="this.style.borderColor='#233127'">
        <div style="position:relative;aspect-ratio:16/9;border-radius:1rem;overflow:hidden;"><img src="${JOURNAL_ARTICLES[0].heroImage}" alt="${JOURNAL_ARTICLES[0].title}" style="width:100%;height:100%;object-fit:cover;filter:brightness(.9);"></div>
        <div style="display:flex;flex-direction:column;justify-content:space-between;gap:1rem;">
          <div style="display:flex;flex-direction:column;gap:.75rem;">
            <span style="padding:.25rem .625rem;border-radius:.25rem;background:var(--copper);color:var(--bg);font-size:.625rem;font-family:var(--font-mono);font-weight:900;text-transform:uppercase;width:fit-content;">FEATURED ARTICLE • ${JOURNAL_ARTICLES[0].category}</span>
            <h2 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.25rem,3vw,1.875rem);color:var(--cream);line-height:1.2;">${JOURNAL_ARTICLES[0].title}</h2>
            <p style="font-size:.875rem;color:#9EB0A1;line-height:1.5;">${JOURNAL_ARTICLES[0].excerpt}</p>
          </div>
          <div style="padding-top:1rem;border-top:1px solid #1C261E;display:flex;align-items:center;justify-content:space-between;font-size:.75rem;font-family:var(--font-mono);color:#8E9E91;">
            <div style="display:flex;align-items:center;gap:.5rem;"><img src="${JOURNAL_ARTICLES[0].authorAvatar}" alt="" style="width:1.75rem;height:1.75rem;border-radius:50%;object-fit:cover;"><span>${JOURNAL_ARTICLES[0].author} • ${JOURNAL_ARTICLES[0].date}</span></div>
            <span>${JOURNAL_ARTICLES[0].readTime}</span>
          </div>
        </div>
      </div>`:'' }
      <div class="grid grid-3" style="gap:1.5rem;">
        ${filtered.map(a=>`
        <div class="article-card" onclick="openArticle('${a.id}')">
          <div class="article-img-wrap"><img src="${a.heroImage}" alt="${a.title}" loading="lazy"><span class="article-cat-badge">${a.category}</span></div>
          <div class="article-body">
            <div>
              <div class="article-title">${a.title}</div>
              <p class="article-excerpt line-clamp-3">${a.excerpt}</p>
            </div>
            <div class="article-footer"><span>By ${a.author}</span><span>${a.readTime}</span></div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function filterJournal(cat, btn) {
  journalCat = cat;
  document.querySelectorAll('.tab-scroll .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderApp();
}

function openArticle(id) {
  const article = JOURNAL_ARTICLES.find(a=>a.id===id);
  if (!article) return;
  const overlay = document.getElementById('article-modal');
  overlay.innerHTML = `
  <div class="modal-backdrop" onclick="closeArticleModal()"></div>
  <div style="position:relative;width:100%;max-width:48rem;background:#0D100E;border:1px solid #27382C;border-radius:1.5rem;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,.7);z-index:10;max-height:90vh;display:flex;flex-direction:column;">
    <div style="padding:1rem 1.25rem;border-bottom:1px solid #1E2921;display:flex;align-items:center;justify-content:space-between;background:#111613;">
      <span style="font-size:.75rem;font-family:var(--font-mono);font-weight:700;color:var(--copper);text-transform:uppercase;">${article.category} • ${article.readTime}</span>
      <button onclick="closeArticleModal()" style="padding:.5rem;color:#8E9E91;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
    </div>
    <div style="padding:1.5rem 2rem;overflow-y:auto;display:flex;flex-direction:column;gap:1.5rem;">
      <h2 style="font-family:var(--font-serif);font-weight:900;font-size:1.875rem;color:var(--cream);">${article.title}</h2>
      <div style="display:flex;align-items:center;gap:.75rem;font-size:.75rem;font-family:var(--font-mono);color:#8E9E91;">
        <img src="${article.authorAvatar}" alt="" style="width:2rem;height:2rem;border-radius:50%;object-fit:cover;">
        <div><div style="color:var(--cream);font-weight:700;">${article.author}</div><div>${article.authorRole} • Published ${article.date}</div></div>
      </div>
      <img src="${article.heroImage}" alt="" style="width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:1rem;">
      <div style="display:flex;flex-direction:column;gap:1rem;font-size:.875rem;color:#D0C9B8;line-height:1.8;">
        ${article.content.map(p=>`<p>${p}</p>`).join('')}
      </div>
    </div>
  </div>`;
  overlay.style.display = 'flex';
}
function closeArticleModal() {
  const m = document.getElementById('article-modal');
  m.style.display = 'none';
  m.innerHTML = '';
}

/* ── FAQ PAGE ── */
let faqOpenId = FAQS[0]?.id;
let faqCat = 'All';
let faqQ = '';
function renderFAQPage() {
  const cats = ['All','Giving Back','Ingredients','Recovery','Subscriptions','Wholesale','Shipping & Returns'];
  const filtered = FAQS.filter(f => {
    const mCat = faqCat==='All'||f.category===faqCat;
    const q = faqQ.toLowerCase();
    const mQ = !q||f.question.toLowerCase().includes(q)||f.answer.toLowerCase().includes(q);
    return mCat && mQ;
  });
  return `
  <div style="max-width:56rem;margin:0 auto;padding:3rem 1rem 5rem;">
    <div style="display:flex;flex-direction:column;gap:2.5rem;">
      <div style="text-align:center;display:flex;flex-direction:column;gap:1rem;">
        <div class="badge-pill badge-green" style="margin:0 auto;">${ICONS.helpCircle} FREQUENTLY ASKED QUESTIONS</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);">Got Questions? We Have Answers.</h1>
        <p style="font-size:.875rem;color:var(--muted);">Learn more about our cold-process formulation, subscription perks, and how every order directly supports The Wheelhouse.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div class="search-input-wrap">
          ${ICONS.search}
          <input type="text" class="search-input" placeholder="Search questions by keyword (e.g. DJ, shipping, ingredients)..." oninput="faqFilter('q',this.value)" style="padding-left:2.375rem;">
        </div>
        <div class="tab-scroll" style="justify-content:center;">
          ${cats.map(c=>`<button class="tab-btn ${c===faqCat?'active':''}" onclick="faqFilter('cat','${c}',this)">${c}</button>`).join('')}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.75rem;" id="faq-list">
        ${filtered.map(faq=>`
        <div class="faq-item ${faqOpenId===faq.id?'open':''}" id="faq-${faq.id}">
          <button class="faq-btn" onclick="toggleFaq('${faq.id}')">
            <span>${faq.question}</span>
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-answer">${faq.answer}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function toggleFaq(id) {
  faqOpenId = faqOpenId === id ? null : id;
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.toggle('open', el.id === `faq-${id}` && faqOpenId === id);
  });
}

function faqFilter(key, val, btn) {
  if (key === 'cat') { faqCat = val; document.querySelectorAll('.tab-scroll .tab-btn').forEach(b=>b.classList.remove('active')); if(btn)btn.classList.add('active'); }
  else { faqQ = val; }
  renderApp();
}

/* ── CONTACT PAGE ── */
function renderContactPage() {
  return `
  <div class="section" style="padding-top:3rem;padding-bottom:5rem;">
    <div style="display:flex;flex-direction:column;gap:3rem;">
      <div style="text-align:center;max-width:36rem;margin:0 auto;display:flex;flex-direction:column;gap:1rem;">
        <div class="badge-pill badge-green" style="margin:0 auto;">${ICONS.mail} GET IN TOUCH WITH SOAPBRIETY</div>
        <h1 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);">Contact Our Team</h1>
        <p style="font-size:.875rem;color:var(--muted);line-height:1.7;">Questions about your order, wholesale inquiries, media requests, or volunteering with The Wheelhouse? We're here for you.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info-card">
          <div><h3 style="font-family:var(--font-serif);font-weight:900;font-size:1.5rem;color:var(--cream);margin-bottom:.75rem;">Direct Contacts</h3><p style="font-size:.75rem;color:#9EB0A1;line-height:1.6;">Soapbriety headquarters and craft facility operate out of Houston, Texas. Orders dispatch within 1-2 business days.</p></div>
          <div style="display:flex;flex-direction:column;gap:1rem;">
            <div class="contact-info-item" style="color:var(--green);">${ICONS.mail}<div><span class="contact-info-sublabel">Email Support</span><span style="font-weight:700;color:#D0C9B8;">soapbriety@gmail.com</span></div></div>
          </div>
          <div style="padding-top:1.5rem;border-top:1px solid #1C261E;">
            <h4 style="font-family:var(--font-serif);font-weight:700;font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--cream);margin-bottom:.75rem;">Official Social Accounts</h4>
            <div style="display:flex;gap:.75rem;">
              <a href="https://www.instagram.com/soapbriety" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm" style="flex:1;justify-content:center;color:var(--instagram);">${ICONS.instagram} Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61567785470478" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm" style="flex:1;justify-content:center;color:var(--facebook);">${ICONS.facebook} Facebook</a>
            </div>
          </div>
        </div>
        <div class="contact-form-card">
          <div id="contact-form-area">${renderContactForm()}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderContactForm() {
  return `
  <form onsubmit="submitContactForm(event)" style="display:flex;flex-direction:column;gap:1rem;">
    <div class="form-grid">
      <div><label class="form-label">Your Name *</label><input type="text" class="form-input" required placeholder="Full Name"></div>
      <div><label class="form-label">Your Email *</label><input type="email" class="form-input" required placeholder="email@domain.com"></div>
    </div>
    <div><label class="form-label">Subject *</label>
      <select class="form-select"><option>General Inquiry</option><option>Wholesale Dealer Inquiry</option><option>Media &amp; Press</option><option>Wheelhouse Event Sponsorship</option><option>Volunteer Opportunity</option></select>
    </div>
    <div><label class="form-label">Message *</label><textarea class="form-textarea" required rows="5" placeholder="How can we help you?"></textarea></div>
    <button type="submit" class="btn btn-copper btn-full">${ICONS.send} Send Message</button>
  </form>`;
}

function submitContactForm(e) {
  e.preventDefault();
  document.getElementById('contact-form-area').innerHTML = `
  <div class="form-success">
    ${ICONS.checkCircle}
    <h3>Message Sent!</h3>
    <p>Thank you for reaching out. A team member will respond within 24 hours.</p>
  </div>`;
}

/* ── FOOTER ── */
function renderFooter() {
  const footerLinks = {
    shop: [['shop','All Cold-Process Soap'],['shop','Best Sellers & Signature Bars'],['shop','The Fruit Collection'],['shop','Therapeutic Topicals & Salves'],['shop','Fresh Start Gift Boxes']],
    movement: [['story',"DJ's Founder Story (April 20, 2023)"],['wheelhouse','The Wheelhouse Recovery Center'],['impact','Live Community Impact Metrics'],['journal','Journal & Recovery Articles']],
    help: [['wholesale','Wholesale Portal & Bulk Orders'],['faq','Frequently Asked Questions'],['contact','Contact & General Inquiries'],['contact','Volunteer Opportunities'],['contact','Media & Event Sponsorships']],
  };
  return `
  <div style="max-width:1280px;margin:0 auto;padding-inline:1rem;">
    <!-- Newsletter CTA -->
    <div class="newsletter-cta" style="margin-bottom:4rem;">
      <div class="nl-glow-green"></div><div class="nl-glow-copper"></div>
      <div class="nl-grid">
        <div style="display:flex;flex-direction:column;gap:1rem;">
          <div class="badge-pill badge-green" style="display:inline-flex;">${ICONS.sparkles} JOIN THE MOVEMENT</div>
          <h2 style="font-family:var(--font-serif);font-weight:900;font-size:clamp(1.875rem,5vw,3rem);color:var(--cream);">More Than Soap. <span style="color:var(--copper)">A Fresh Start.</span></h2>
          <p style="color:var(--muted);line-height:1.7;">Subscribe for early micro-batch bar drops, recovery milestone stories from DJ &amp; The Wheelhouse, and exclusive community events.</p>
        </div>
        <div id="nl-area">
          <form onsubmit="subscribeNewsletter(event)" class="nl-form">
            <input type="email" class="nl-input" required placeholder="Enter your email address...">
            <button type="submit" class="btn btn-copper">Subscribe ${ICONS.arrowRight}</button>
          </form>
          <div class="nl-trust">
            <span class="nl-trust-item" style="color:var(--green);">${ICONS.shieldCheck} No spam, ever</span>
            <span>•</span>
            <span class="nl-trust-item" style="color:var(--copper);">${ICONS.heartHandshake} 100% funds community outreach</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Links -->
    <div class="footer-main">
      <div class="footer-brand">
        <div style="display:flex;align-items:center;gap:.625rem;">
          ${WORDMARK_SKULL}
          <div class="nav-logo-text"><span class="nav-logo-title">SOAPBRIETY</span><span class="nav-logo-sub">FROTHY AF • FRESH START</span></div>
        </div>
        <p class="footer-brand-desc">Soapbriety exists to inspire fresh starts while funding recovery initiatives through The Wheelhouse. Handcrafted cold-process bars brewed with discipline, purpose, and raw ingredients.</p>
        <div class="footer-founded">FOUNDED APRIL 20, 2023 BY DJ</div>
        <div class="footer-socials">
          <a href="https://www.instagram.com/soapbriety" target="_blank" rel="noopener noreferrer" class="footer-social-btn"><span style="color:var(--instagram)">${ICONS.instagram}</span><span>Instagram</span></a>
          <a href="https://www.facebook.com/profile.php?id=61567785470478" target="_blank" rel="noopener noreferrer" class="footer-social-btn"><span style="color:var(--facebook)">${ICONS.facebook}</span><span>Facebook</span></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop Collections</h4>
        ${footerLinks.shop.map(([p,l])=>`<button class="footer-link" onclick="navigate('${p}')">${l}</button>`).join('')}
      </div>
      <div class="footer-col">
        <h4>The Movement</h4>
        ${footerLinks.movement.map(([p,l])=>`<button class="footer-link" onclick="navigate('${p}')">${l}</button>`).join('')}
      </div>
      <div class="footer-col">
        <h4>Partnership &amp; Help</h4>
        ${footerLinks.help.map(([p,l],i)=>`<button class="footer-link ${i===0?'copper':''}" onclick="navigate('${p}')">${l}</button>`).join('')}
      </div>
    </div>
    <div class="footer-bottom">
      <div>© ${new Date().getFullYear()} SOAPBRIETY LLC. All rights reserved. "More Than Soap. A Fresh Start."</div>
      <div class="footer-legal"><span>Privacy Policy</span><span>•</span><span>Terms of Service</span><span>•</span><span>Accessibility</span></div>
    </div>
  </div>`;
}

function subscribeNewsletter(e) {
  e.preventDefault();
  document.getElementById('nl-area').innerHTML = `
  <div class="nl-success">
    ${ICONS.checkCircle}
    <div><h4 style="font-family:var(--font-serif);font-weight:700;font-size:1.125rem;color:var(--cream);">Welcome to the Movement</h4><p style="font-size:.75rem;color:var(--muted);margin-top:.25rem;">Check your inbox for your 15% welcome code & founder story.</p></div>
  </div>`;
}

/* ── CART DRAWER ── */
function renderCartDrawer() {
  if (!state.cartOpen) return '';
  const FREE_SHIP = 45;
  const lines = shopifyCartLines();
  const subtotal = cartTotal();
  const totalQty = cartCount();
  const needed = Math.max(0, FREE_SHIP - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIP) * 100);
  const currency = shopifyCartCurrency();

  return `
  <div class="cart-overlay" onclick="if(event.target===this)closeCart()">
    <div class="cart-drawer">
      <div class="cart-header">
        <div class="cart-title">${ICONS.shoppingBag} Your Fresh Start Cart (${totalQty})</div>
        <button class="cart-close" onclick="closeCart()">${ICONS.x}</button>
      </div>
      <div class="cart-ship-bar">
        ${needed > 0
          ? '<p>Add <strong style="color:var(--green);font-family:var(--font-mono);">' + formatMoney(needed, currency) + '</strong> more to unlock <strong style="color:var(--cream)">FREE Shipping</strong>!</p>'
          : '<p style="color:var(--green);font-weight:700;display:flex;align-items:center;gap:.375rem;">' + ICONS.truck + ' Unlocked FREE US Standard Shipping!</p>'}
        <div class="ship-progress-track"><div class="ship-progress-fill" style="width:${progress}%"></div></div>
      </div>
      <div class="cart-items">
        ${lines.length === 0
          ? '<div class="cart-empty"><div class="cart-empty-icon">' + ICONS.shoppingBag + '</div><div style="font-family:var(--font-serif);font-weight:700;font-size:1.125rem;color:var(--cream);">Your cart is empty</div><p style="font-size:.75rem;color:#8E9E91;text-align:center;">Every handcrafted bar you add helps fund recovery programs at The Wheelhouse.</p></div>'
          : lines.map(function(item) {
            var variantLabel = (item.variantTitle && item.variantTitle !== 'Default Title') ? '<div style="font-size:.6875rem;color:var(--muted-dk);">' + item.variantTitle + '</div>' : '';
            return '<div class="cart-item">'
              + '<img src="' + item.image + '" alt="' + item.productTitle + '" class="cart-item-img">'
              + '<div class="cart-item-info">'
              + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem;">'
              + '<div class="cart-item-name">' + item.productTitle + '</div>'
              + '<button class="cart-item-remove" onclick="removeFromCart(\'' + item.lineId + '\')">' + ICONS.trash2 + '</button>'
              + '</div>'
              + variantLabel
              + '<div class="cart-item-unit">' + formatMoney(item.unitPrice, item.currencyCode) + ' each</div>'
              + '<div style="display:flex;align-items:center;justify-content:space-between;padding-top:.375rem;">'
              + '<div class="cart-item-qty">'
              + '<button class="qty-btn" onclick="updateQuantity(\'' + item.lineId + '\',' + (item.quantity - 1) + ')">' + ICONS.minus + '</button>'
              + '<span class="qty-num">' + item.quantity + '</span>'
              + '<button class="qty-btn" onclick="updateQuantity(\'' + item.lineId + '\',' + (item.quantity + 1) + ')">' + ICONS.plus + '</button>'
              + '</div>'
              + '<span class="cart-item-price">' + formatMoney(item.lineTotal, item.lineCurrencyCode) + '</span>'
              + '</div></div></div>';
          }).join('')}
      </div>
      ${lines.length > 0 ? `
      <div class="cart-footer">
        <div style="display:flex;flex-direction:column;gap:.375rem;">
          <div class="cart-line"><span>Subtotal</span><span style="color:var(--cream);font-weight:700;">${formatMoney(subtotal, currency)}</span></div>
          <div class="cart-line"><span>Shipping &amp; taxes</span><span style="font-size:.75rem;color:var(--muted);">Calculated at checkout</span></div>
        </div>
        <button onclick="goToCheckout()" id="checkout-btn" class="btn btn-copper btn-full">${ICONS.sparkles} Proceed To Checkout ${ICONS.arrowRight}</button>
        <div class="cart-trust">
          <span class="cart-trust-item">${ICONS.shieldCheck} Secure Shopify Checkout</span>
          <span>•</span><span>30-Day Money Back</span>
        </div>
      </div>` : ''}
    </div>
  </div>`;
}

function goToCheckout() {
  var url = shopifyGetCheckoutUrl();
  if (url) {
    window.location.href = url;
  } else {
    showToast('Checkout is temporarily unavailable. Please try again.');
  }
}

/* ── PRODUCT MODAL ── */
let modalAdded = false;
let modalImg = 0;
let modalSelectedVariant = null;

function openQuickView(handleOrId) {
  var product = SHOP_PRODUCTS.find(function(p) { return p.handle === handleOrId || p.id === handleOrId; });
  if (!product) return;
  state.quickViewProduct = product;
  modalAdded = false;
  modalImg = 0;
  modalSelectedVariant = product.variants[0] || null;
  renderProductModal();
}

function renderProductModal() {
  const p = state.quickViewProduct;
  if (!p) return;
  var v = modalSelectedVariant || p.variants[0];
  var price = v ? v.price : p.price;
  var compareAt = v ? v.compareAtPrice : p.compareAtPrice;
  var currency = v ? v.currencyCode : (p.currencyCode || 'USD');
  var soldOut = v ? !v.availableForSale : !p.availableForSale;
  var variantId = v ? v.id : p.defaultVariantId;
  var hasMultipleVariants = p.variants.length > 1 && !(p.variants.length === 1 && p.variants[0].title === 'Default Title');
  var imgSrc = (p.images[modalImg] || p.images[0] || p.featuredImage || '');

  const m = document.getElementById('product-modal');
  m.innerHTML = `
  <div class="modal-backdrop" onclick="closeProductModal()"></div>
  <div class="modal-box">
    <button class="modal-close" onclick="closeProductModal()">${ICONS.x}</button>
    <div class="modal-gallery">
      <div class="modal-img-main">
        <img src="${imgSrc}" alt="${p.title}" id="modal-main-img">
      </div>
      ${p.images.length > 1 ? `
      <div class="modal-thumbs">
        ${p.images.map((img,i)=>'<div class="modal-thumb ' + (i===modalImg?'active':'') + '" onclick="setModalImg(' + i + ')"><img src="' + img + '" alt=""></div>').join('')}
      </div>` : ''}
    </div>
    <div class="modal-details">
      <div>
        <div class="modal-cat-line"><span>${p.productType || ''}</span></div>
        <div class="modal-product-name">${p.title}</div>
      </div>
      <div class="modal-price-row">
        <div style="display:flex;align-items:center;gap:.5rem;">
          ${(compareAt && compareAt > price) ? '<span style="text-decoration:line-through;color:var(--muted-dk);margin-right:.25rem;">' + formatMoney(compareAt, currency) + '</span>' : ''}
          <span class="modal-price">${formatMoney(price, currency)}</span>
          ${soldOut ? '<span class="save-badge" style="background:var(--red);">SOLD OUT</span>' : ''}
        </div>
      </div>
      ${hasMultipleVariants ? '<div class="purchase-options">' + p.variants.map(function(vr) {
        var isActive = (modalSelectedVariant && modalSelectedVariant.id === vr.id);
        return '<button class="purchase-opt ' + (isActive ? 'active' : '') + '" onclick="selectVariant(\'' + vr.id + '\')">' +
          '<div class="purchase-opt-title">' + vr.title + '</div>' +
          '<div class="purchase-opt-price">' + formatMoney(vr.price, vr.currencyCode) + (vr.availableForSale ? '' : ' - Sold Out') + '</div>' +
          '</button>';
      }).join('') + '</div>' : ''}
      <div>
        <p class="modal-desc">${p.descriptionHtml || p.description || ''}</p>
      </div>
      <button class="modal-atc-btn ${modalAdded ? 'added' : ''}${soldOut ? ' disabled' : ''}" onclick="modalAddToCart()" ${soldOut ? 'disabled' : ''}>
        ${modalAdded ? ICONS.check + ' Added To Cart!' : (soldOut ? ICONS.shoppingBag + ' Sold Out' : ICONS.shoppingBag + ' Add To Cart \u2022 ' + formatMoney(price, currency))}
      </button>
    </div>
  </div>`;
  m.style.display = 'flex';
}

function selectVariant(variantId) {
  var p = state.quickViewProduct;
  if (!p) return;
  var v = p.variants.find(function(vr) { return vr.id === variantId; });
  if (v) {
    modalSelectedVariant = v;
    // If variant has its own image, switch to it
    if (v.image) {
      var idx = p.images.indexOf(v.image);
      if (idx >= 0) modalImg = idx;
    }
    renderProductModal();
  }
}

function setModalImg(i) { modalImg = i; renderProductModal(); }
function modalAddToCart() {
  if (!state.quickViewProduct) return;
  var v = modalSelectedVariant || state.quickViewProduct.variants[0];
  if (!v || !v.availableForSale) return;
  addToCart(v.id);
  modalAdded = true;
  renderProductModal();
  setTimeout(function() { modalAdded = false; if(state.quickViewProduct) renderProductModal(); }, 1800);
}
function closeProductModal() {
  const m = document.getElementById('product-modal');
  m.style.display = 'none'; m.innerHTML = '';
  state.quickViewProduct = null;
}

/* ── SEARCH MODAL ── */
let searchQuery = '';
function openSearch() { state.searchOpen = true; searchQuery = ''; renderSearchModal(); }
function closeSearch() { state.searchOpen = false; const m=document.getElementById('search-modal'); m.style.display='none'; m.innerHTML=''; }

function renderSearchModal() {
  if (!state.searchOpen) return;
  const q = searchQuery.toLowerCase();
  const results = SHOP_PRODUCTS.filter(function(p) {
    return !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) ||
      (p.productType || '').toLowerCase().includes(q) || (p.tags && p.tags.some(function(t) { return t.toLowerCase().includes(q); }));
  });
  const m = document.getElementById('search-modal');
  m.innerHTML = `
  <div class="modal-backdrop" onclick="closeSearch()"></div>
  <div class="search-modal-box">
    <div class="search-bar-row">
      ${ICONS.search}
      <input type="text" class="search-modal-input" id="search-input" placeholder="Search bars by name, scent, type..." value="${searchQuery}" oninput="updateSearch(this.value)" autofocus>
      ${searchQuery?'<button onclick="updateSearch(\'\')" style="color:#8E9E91;background:none;border:none;cursor:pointer;padding:.25rem;">' + ICONS.x + '</button>':''}
      <button class="search-esc" onclick="closeSearch()">ESC</button>
    </div>
    <div class="search-results">
      ${results.length === 0 && q ? '<div style="padding:3rem;text-align:center;font-size:.75rem;color:#8E9E91;font-family:var(--font-mono);">No products matched "' + searchQuery + '".</div>' :
        results.map(function(p) {
          var img = p.images[0] || p.featuredImage || '';
          return '<div class="search-result-item" onclick="openQuickView(\'' + (p.handle || p.id) + '\');closeSearch();">'
            + '<div class="search-result-left">'
            + '<img src="' + img + '" alt="' + p.title + '" class="search-result-img">'
            + '<div>'
            + '<span class="search-result-cat">' + (p.productType || '') + '</span>'
            + '<div class="search-result-name">' + p.title + '</div>'
            + '</div></div>'
            + '<div class="search-result-right">'
            + '<span class="search-result-price">' + formatMoney(p.price, p.currencyCode) + '</span>'
            + '</div></div>';
        }).join('')}
    </div>
  </div>`;
  m.style.display = 'flex';
}

function updateSearch(q) {
  searchQuery = q;
  renderSearchModal();
  setTimeout(() => { const inp = document.getElementById('search-input'); if(inp){inp.focus();inp.setSelectionRange(inp.value.length,inp.value.length);} }, 0);
}

/* ── OPEN/CLOSE HELPERS ── */
function openCart() { state.cartOpen = true; renderApp(); }
function closeCart() { state.cartOpen = false; renderApp(); }

/* ── MAIN RENDER ── */
function renderApp() {
  // Navbar
  const nav = document.getElementById('navbar');
  if (nav) nav.innerHTML = renderNavbar();

  // Page
  const main = document.getElementById('main-content');
  if (!main) return;
  switch (state.currentPage) {
    case 'home':       main.innerHTML = renderHomePage(); break;
    case 'shop':       main.innerHTML = renderShopPage(); break;
    case 'story':      main.innerHTML = renderStoryPage(); break;
    case 'wheelhouse': main.innerHTML = renderWheelhousePage(); break;
    case 'wholesale':  main.innerHTML = renderWholesalePage(); break;
    case 'faq':        main.innerHTML = renderFAQPage(); break;
    case 'contact':    main.innerHTML = renderContactPage(); break;
    default:           main.innerHTML = renderHomePage();
  }

  // Footer
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = renderFooter();

  // Cart Drawer
  const cartEl = document.getElementById('cart-drawer-root');
  if (cartEl) cartEl.innerHTML = renderCartDrawer();

  // Keyboard ESC
  document.onkeydown = (e) => { if (e.key === 'Escape') { closeSearch(); closeProductModal(); closeCart(); } };
}

// Boot — async init with Shopify, fallback to static data
(async function() {
  // Show loading state
  document.addEventListener('DOMContentLoaded', function() {
    var main = document.getElementById('main-content');
    if (main) main.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;min-height:60vh;color:var(--muted);font-family:var(--font-mono);font-size:.875rem;"><div style="text-align:center;"><div style="margin-bottom:1rem;animation:pulse 1.5s infinite;">Loading Soapbriety...</div></div></div>';
  });

  // Wait for DOM
  await new Promise(function(resolve) {
    if (document.readyState !== 'loading') resolve();
    else document.addEventListener('DOMContentLoaded', resolve);
  });

  // Try Shopify, fall back to static data
  try {
    var products = await initShopify();
    if (products && products.length > 0) {
      SHOP_PRODUCTS = products;
      console.info('[Soapbriety] Loaded ' + products.length + ' products from Shopify.');
    } else {
      // Shopify returned no products — use static fallback
      SHOP_PRODUCTS = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];
      console.info('[Soapbriety] No Shopify products found; using static data (' + SHOP_PRODUCTS.length + ' products).');
    }
  } catch(err) {
    SHOP_PRODUCTS = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];
    console.warn('[Soapbriety] Shopify unavailable; using static fallback (' + SHOP_PRODUCTS.length + ' products).');
  }

  renderApp();
})();
