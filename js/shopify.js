// ============================================================
// SOAPBRIETY — Shopify Storefront API Client (js/shopify.js)
// Centralized commerce backend: products, cart, checkout
// ============================================================

const SHOPIFY_CONFIG = {
  domain: 'soapbriety.myshopify.com',
  apiVersion: '2026-07',
  cartStorageKey: 'soapbriety_shopify_cart_id'
};

// ── Internal: build endpoint URL ──
function _shopifyEndpoint() {
  return 'https://' + SHOPIFY_CONFIG.domain + '/api/' + SHOPIFY_CONFIG.apiVersion + '/graphql.json';
}

// ── Internal: access token ──
function _shopifyToken() {
  return '6619ec7067c53c0402f42502c96c58c8';
}

// ── Core GraphQL fetch ──
async function shopifyFetch(query, variables) {
  try {
    const resp = await fetch(_shopifyEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': _shopifyToken()
      },
      body: JSON.stringify({ query, variables })
    });

    if (!resp.ok) {
      console.error('[Shopify] HTTP ' + resp.status);
      return { data: null, errors: [{ message: 'Network error (' + resp.status + ')' }] };
    }

    const json = await resp.json();

    if (json.errors && json.errors.length) {
      console.error('[Shopify] GraphQL errors:', json.errors.map(function(e) { return e.message; }));
    }

    return json;
  } catch (err) {
    console.error('[Shopify] Fetch failed:', err.message);
    return { data: null, errors: [{ message: 'Unable to connect to store.' }] };
  }
}


// ════════════════════════════════════════════════════════════
// PRODUCT QUERIES
// ════════════════════════════════════════════════════════════

const PRODUCTS_QUERY = `
query GetProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        handle
        title
        description
        descriptionHtml
        vendor
        productType
        tags
        availableForSale
        featuredImage {
          url
          altText
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        seo {
          title
          description
        }
        options {
          name
          values
        }
        variants(first: 20) {
          edges {
            node {
              id
              title
              availableForSale
              selectedOptions {
                name
                value
              }
              image {
                url
                altText
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}`;

const PRODUCT_BY_HANDLE_QUERY = `
query GetProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    handle
    title
    description
    descriptionHtml
    vendor
    productType
    tags
    availableForSale
    featuredImage {
      url
      altText
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
        }
      }
    }
    seo {
      title
      description
    }
    options {
      name
      values
    }
    variants(first: 20) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}`;

async function shopifyGetProducts(count) {
  count = count || 50;
  var result = await shopifyFetch(PRODUCTS_QUERY, { first: count });
  if (!result.data || !result.data.products) return [];
  return result.data.products.edges.map(function(edge) {
    return _normalizeProduct(edge.node);
  });
}

async function shopifyGetProductByHandle(handle) {
  var result = await shopifyFetch(PRODUCT_BY_HANDLE_QUERY, { handle: handle });
  if (!result.data || !result.data.productByHandle) return null;
  return _normalizeProduct(result.data.productByHandle);
}


// ── Normalize Shopify product to a flat usable object ──
function _normalizeProduct(node) {
  var images = node.images.edges.map(function(e) {
    return e.node.url;
  });
  var variants = node.variants.edges.map(function(e) {
    var v = e.node;
    return {
      id: v.id,
      title: v.title,
      availableForSale: v.availableForSale,
      selectedOptions: v.selectedOptions,
      image: v.image ? v.image.url : null,
      price: parseFloat(v.price.amount),
      currencyCode: v.price.currencyCode,
      compareAtPrice: v.compareAtPrice ? parseFloat(v.compareAtPrice.amount) : null,
      compareAtCurrencyCode: v.compareAtPrice ? v.compareAtPrice.currencyCode : null
    };
  });

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    descriptionHtml: node.descriptionHtml,
    vendor: node.vendor,
    productType: node.productType,
    tags: node.tags || [],
    availableForSale: node.availableForSale,
    featuredImage: node.featuredImage ? node.featuredImage.url : (images[0] || ''),
    images: images,
    seo: node.seo || {},
    options: node.options || [],
    variants: variants,
    // Convenience: default variant (first)
    price: variants.length ? variants[0].price : 0,
    compareAtPrice: variants.length ? variants[0].compareAtPrice : null,
    currencyCode: variants.length ? variants[0].currencyCode : 'USD',
    defaultVariantId: variants.length ? variants[0].id : null
  };
}


// ════════════════════════════════════════════════════════════
// CART OPERATIONS (Storefront Cart API)
// ════════════════════════════════════════════════════════════

const CART_FRAGMENT = `
fragment CartFields on Cart {
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
  }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
          amountPerQuantity {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
            product {
              title
              handle
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}`;

const CART_CREATE_MUTATION = `
mutation CartCreate($lines: [CartLineInput!]!) {
  cartCreate(input: { lines: $lines }) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}
` + CART_FRAGMENT;

const CART_LINES_ADD_MUTATION = `
mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}
` + CART_FRAGMENT;

const CART_LINES_UPDATE_MUTATION = `
mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}
` + CART_FRAGMENT;

const CART_LINES_REMOVE_MUTATION = `
mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}
` + CART_FRAGMENT;

const CART_QUERY = `
query GetCart($cartId: ID!) {
  cart(id: $cartId) {
    ...CartFields
  }
}
` + CART_FRAGMENT;


// ── Cart state ──
var _shopifyCart = null;

function getShopifyCart() {
  return _shopifyCart;
}

function _setShopifyCart(cart) {
  _shopifyCart = cart;
  if (cart && cart.id) {
    try { localStorage.setItem(SHOPIFY_CONFIG.cartStorageKey, cart.id); } catch(e) {}
  }
}

function _clearStoredCartId() {
  try { localStorage.removeItem(SHOPIFY_CONFIG.cartStorageKey); } catch(e) {}
  _shopifyCart = null;
}

function _getStoredCartId() {
  try { return localStorage.getItem(SHOPIFY_CONFIG.cartStorageKey); } catch(e) { return null; }
}


// ── Retrieve existing cart ──
async function shopifyRestoreCart() {
  var cartId = _getStoredCartId();
  if (!cartId) return null;

  var result = await shopifyFetch(CART_QUERY, { cartId: cartId });
  if (result.data && result.data.cart) {
    _setShopifyCart(result.data.cart);
    return result.data.cart;
  }

  // Cart is expired or invalid
  _clearStoredCartId();
  return null;
}


// ── Create new cart with items ──
async function shopifyCartCreate(merchandiseId, quantity) {
  quantity = quantity || 1;
  var result = await shopifyFetch(CART_CREATE_MUTATION, {
    lines: [{ merchandiseId: merchandiseId, quantity: quantity }]
  });

  if (result.data && result.data.cartCreate) {
    if (result.data.cartCreate.userErrors && result.data.cartCreate.userErrors.length) {
      console.error('[Shopify] Cart create errors:', result.data.cartCreate.userErrors);
      return { cart: null, errors: result.data.cartCreate.userErrors };
    }
    _setShopifyCart(result.data.cartCreate.cart);
    return { cart: result.data.cartCreate.cart, errors: [] };
  }

  return { cart: null, errors: [{ message: 'Failed to create cart.' }] };
}


// ── Add lines to existing cart ──
async function shopifyCartAdd(merchandiseId, quantity) {
  quantity = quantity || 1;

  // If no cart exists yet, create one
  if (!_shopifyCart) {
    return await shopifyCartCreate(merchandiseId, quantity);
  }

  var result = await shopifyFetch(CART_LINES_ADD_MUTATION, {
    cartId: _shopifyCart.id,
    lines: [{ merchandiseId: merchandiseId, quantity: quantity }]
  });

  if (result.data && result.data.cartLinesAdd) {
    if (result.data.cartLinesAdd.userErrors && result.data.cartLinesAdd.userErrors.length) {
      console.error('[Shopify] Cart add errors:', result.data.cartLinesAdd.userErrors);
      return { cart: null, errors: result.data.cartLinesAdd.userErrors };
    }
    _setShopifyCart(result.data.cartLinesAdd.cart);
    return { cart: result.data.cartLinesAdd.cart, errors: [] };
  }

  return { cart: null, errors: [{ message: 'Failed to add item to cart.' }] };
}


// ── Update line quantity ──
async function shopifyCartUpdateLine(lineId, quantity) {
  if (!_shopifyCart) return { cart: null, errors: [{ message: 'No active cart.' }] };

  var result = await shopifyFetch(CART_LINES_UPDATE_MUTATION, {
    cartId: _shopifyCart.id,
    lines: [{ id: lineId, quantity: quantity }]
  });

  if (result.data && result.data.cartLinesUpdate) {
    if (result.data.cartLinesUpdate.userErrors && result.data.cartLinesUpdate.userErrors.length) {
      console.error('[Shopify] Cart update errors:', result.data.cartLinesUpdate.userErrors);
      return { cart: null, errors: result.data.cartLinesUpdate.userErrors };
    }
    _setShopifyCart(result.data.cartLinesUpdate.cart);
    return { cart: result.data.cartLinesUpdate.cart, errors: [] };
  }

  return { cart: null, errors: [{ message: 'Failed to update cart.' }] };
}


// ── Remove line from cart ──
async function shopifyCartRemoveLine(lineId) {
  if (!_shopifyCart) return { cart: null, errors: [{ message: 'No active cart.' }] };

  var result = await shopifyFetch(CART_LINES_REMOVE_MUTATION, {
    cartId: _shopifyCart.id,
    lineIds: [lineId]
  });

  if (result.data && result.data.cartLinesRemove) {
    if (result.data.cartLinesRemove.userErrors && result.data.cartLinesRemove.userErrors.length) {
      console.error('[Shopify] Cart remove errors:', result.data.cartLinesRemove.userErrors);
      return { cart: null, errors: result.data.cartLinesRemove.userErrors };
    }
    _setShopifyCart(result.data.cartLinesRemove.cart);
    return { cart: result.data.cartLinesRemove.cart, errors: [] };
  }

  return { cart: null, errors: [{ message: 'Failed to remove item from cart.' }] };
}


// ── Get checkout URL ──
function shopifyGetCheckoutUrl() {
  if (_shopifyCart && _shopifyCart.checkoutUrl) {
    return _shopifyCart.checkoutUrl;
  }
  return null;
}


// ════════════════════════════════════════════════════════════
// CURRENCY FORMATTING
// ════════════════════════════════════════════════════════════

function formatMoney(amount, currencyCode) {
  currencyCode = currencyCode || 'USD';
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2
    }).format(amount);
  } catch (e) {
    return '$' + parseFloat(amount).toFixed(2);
  }
}


// ════════════════════════════════════════════════════════════
// NORMALIZED CART HELPERS (for UI consumption)
// ════════════════════════════════════════════════════════════

function shopifyCartLines() {
  if (!_shopifyCart || !_shopifyCart.lines) return [];
  return _shopifyCart.lines.edges.map(function(e) {
    var line = e.node;
    var merch = line.merchandise;
    return {
      lineId: line.id,
      quantity: line.quantity,
      variantId: merch.id,
      variantTitle: merch.title,
      selectedOptions: merch.selectedOptions,
      productTitle: merch.product ? merch.product.title : '',
      productHandle: merch.product ? merch.product.handle : '',
      image: merch.image ? merch.image.url : '',
      imageAlt: merch.image ? (merch.image.altText || '') : '',
      unitPrice: parseFloat(merch.price.amount),
      currencyCode: merch.price.currencyCode,
      lineTotal: parseFloat(line.cost.totalAmount.amount),
      lineCurrencyCode: line.cost.totalAmount.currencyCode
    };
  });
}

function shopifyCartTotalQuantity() {
  return _shopifyCart ? (_shopifyCart.totalQuantity || 0) : 0;
}

function shopifyCartSubtotal() {
  if (!_shopifyCart || !_shopifyCart.cost) return 0;
  return parseFloat(_shopifyCart.cost.subtotalAmount.amount);
}

function shopifyCartTotal() {
  if (!_shopifyCart || !_shopifyCart.cost) return 0;
  return parseFloat(_shopifyCart.cost.totalAmount.amount);
}

function shopifyCartCurrency() {
  if (!_shopifyCart || !_shopifyCart.cost) return 'USD';
  return _shopifyCart.cost.subtotalAmount.currencyCode;
}


// ════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════

// Product cache
var _shopifyProducts = [];

async function initShopify() {
  // 1. Fetch products
  _shopifyProducts = await shopifyGetProducts(50);

  // 2. Restore cart from localStorage
  await shopifyRestoreCart();

  return _shopifyProducts;
}

function getShopifyProducts() {
  return _shopifyProducts;
}
