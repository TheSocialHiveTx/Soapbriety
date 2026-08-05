import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'day-one-cold-process',
    name: 'DAY ONE',
    subtitle: 'Activated Charcoal & Fraser Fir Cold Process Bar',
    price: 14.00,
    rating: 4.98,
    reviewCount: 248,
    category: 'Best Sellers',
    tags: ['Detox', 'Cold Process', 'Woodsy', 'Exfoliating'],
    scentProfile: {
      top: ['Fraser Fir Needle', 'Crisp Mountain Breeze'],
      heart: ['Crushed Cedarwood', 'Wild Sage'],
      base: ['Smoked Birch', 'Deep Earth Pine'],
      intensity: 'Bold'
    },
    ingredients: [
      'Saponified Organic Coconut Oil',
      'Extra Virgin Olive Oil',
      'Sustainable Palm Oil (RSPO Certified)',
      'Activated Bamboo Charcoal',
      'Fraser Fir Essential Oil',
      'Raw Shea Butter',
      'Pumice Stone Grit'
    ],
    skinBenefits: [
      'Draws out impurities & environmental toxins',
      'Exfoliates dead skin cells for smooth feel',
      'Deep cleansing for active lifestyles',
      'Nourishes skin barrier without drying'
    ],
    impactHours: 1.5,
    description: 'Day One marks the moment you decide to take control. Infused with detoxifying bamboo charcoal and wild Fraser fir, this bar delivers a rich, creamy lather with microscopic pumice grit to wash away yesterday\'s grit.',
    storySnippet: 'Inspired by DJ\'s first 24 hours of sobriety on April 20, 2023. A reminder that every morning is a clean slate.',
    directions: 'Lather under warm water. Massage over shoulders, chest, and body in circular motions. Rinse thoroughly and embrace the clean start.',
    weightOz: 5.5,
    images: [
      'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'wheelhouse-reserve',
    name: 'WHEELHOUSE RESERVE',
    subtitle: 'Bourbon Birch, Tobacco Leaf & Honey Soap',
    price: 16.00,
    rating: 5.0,
    reviewCount: 192,
    category: 'Best Sellers',
    tags: ['Signature', 'Warm', 'Rich Lather', 'Deep Hydration'],
    scentProfile: {
      top: ['Sweet Tobacco Leaf', 'Golden Amber'],
      heart: ['Bourbon Cask Oak', 'Wildflower Honey'],
      base: ['Smoked Vanilla Bean', 'Dark Teakwood'],
      intensity: 'Bold'
    },
    ingredients: [
      'Organic Goat Milk Base',
      'Saponified Avocado Oil',
      'Unrefined Cocoa Butter',
      'Raw Local Honey',
      'Colloidal Oatmeal',
      'Tobacco Leaf & Oak Infused Oils'
    ],
    skinBenefits: [
      'Deep hydration for dry or stressed skin',
      'Soothes inflammation & redness',
      'Lathers into velvet moisture barrier',
      'Rich in natural Vitamin E & fatty acids'
    ],
    impactHours: 2.0,
    description: 'Our flagship signature bar dedicated to The Wheelhouse recovery community center. Crafted with organic goat milk, raw local honey, and rich bourbon oak notes, it leaves the skin deeply hydrated and subtly scent-matched.',
    storySnippet: '100% of net proceeds from Wheelhouse Reserve directly sponsor peer recovery circle hosting and weekend fellowship meals.',
    directions: 'Work into a velvety lather between palms or washcloth. Cleanse gently. Suitable for both face and full body.',
    weightOz: 6.0,
    images: [
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'citrus-reclamation',
    name: 'CITRUS RECLAMATION',
    subtitle: 'Blood Orange, Grapefruit & Poppy Seed Exfoliant',
    price: 14.00,
    rating: 4.95,
    reviewCount: 134,
    category: 'Fruit Collection',
    tags: ['Fruit', 'Energizing', 'Exfoliating', 'Brightening'],
    scentProfile: {
      top: ['Cold-Pressed Blood Orange', 'Ruby Red Grapefruit'],
      heart: ['Tangerine Zest', 'Bergamot Leaf'],
      base: ['White Cedar', 'Sunbaked Vetiver'],
      intensity: 'Medium'
    },
    ingredients: [
      'Cold-Pressed Olive Oil',
      'Organic Coconut Oil',
      'Jojoba Seed Oil',
      'Blue Poppy Seeds',
      'Blood Orange Essential Oil',
      'Turmeric Root Powder (Natural Color)'
    ],
    skinBenefits: [
      'Awakens senses with crisp citrus aromatherapy',
      'Natural poppy seed micro-exfoliation',
      'Evens out skin tone with botanical antioxidant boost',
      'Non-greasy, refreshing rinse'
    ],
    impactHours: 1.5,
    description: 'A surge of bright optimism. Cold-pressed blood orange and ruby red grapefruit combine with natural poppy seeds to buff away dullness and energize body and mind during early morning routines.',
    storySnippet: 'Designed to symbolize the clarity that comes when the morning fog clears.',
    directions: 'Rub directly onto skin to experience gentle poppy seed scrubbing action.',
    weightOz: 5.5,
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'iron-clasp-topical',
    name: 'IRON CLASP DERMA-RECOVERY',
    subtitle: 'Targeted Pine Tar & Eucalyptus Topical Salve Bar',
    price: 18.00,
    rating: 4.99,
    reviewCount: 176,
    category: 'Topicals',
    tags: ['Topical', 'Therapeutic', 'Pine Tar', 'Eczema Friendly'],
    scentProfile: {
      top: ['Eucalyptus Globulus', 'Peppermint Leaf'],
      heart: ['Medicinal Pine Tar', 'Tea Tree essential oil'],
      base: ['Dark Earth Resins', 'Cade Wood'],
      intensity: 'Bold'
    },
    ingredients: [
      'Pure Kiln-Burned Pine Tar',
      'Organic Neem Oil',
      'Colloidal Oat Flour',
      'Shea Butter',
      'Tea Tree Oil',
      'Eucalyptus Essential Oil',
      'Saponified Sweet Almond Oil'
    ],
    skinBenefits: [
      'Soothes persistent itchiness, eczema & psoriasis symptoms',
      'Antimicrobial pine tar calms stressed skin patches',
      'Cools overworked muscles with pure peppermint',
      'Heavy-duty restoration for hands, elbows and knees'
    ],
    impactHours: 2.2,
    description: 'Formulated for hard-working hands and skin facing heavy stress. Pure kiln-burned pine tar combined with tea tree and organic neem oil yields an unvarnished therapeutic bar that combats stubborn dryness and irritation.',
    storySnippet: 'Created for tradespeople, athletes, and anyone building their life back with their own two hands.',
    directions: 'Lather onto affected skin or weary hands. Allow lather to rest on skin for 60 seconds before rinsing.',
    weightOz: 6.0,
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'apothecary-mint-fruit',
    name: 'WILD FIG & MINT RENEWAL',
    subtitle: 'Crushed Fig Leaves, Peppermint & French Green Clay',
    price: 15.00,
    rating: 4.92,
    reviewCount: 88,
    category: 'Fruit Collection',
    tags: ['Fruit', 'Clay', 'Refreshing', 'Cooling'],
    scentProfile: {
      top: ['Crushed Spearmint', 'Wild Fig Bark'],
      heart: ['Peppermint Essential Oil', 'Green Tea Leaf'],
      base: ['Earthy Moss', 'Sandalwood'],
      intensity: 'Medium'
    },
    ingredients: [
      'French Green Clay',
      'Saponified Castor Oil',
      'Organic Virgin Coconut Oil',
      'Crushed Fig Leaf Extract',
      'Peppermint Essential Oil',
      'Spinach Powder (Natural Color)'
    ],
    skinBenefits: [
      'French Green Clay purifies oily pores',
      'Spearmint provides intense cooling sensation',
      'Locks in natural moisture balance',
      'Silky smooth foam'
    ],
    impactHours: 1.5,
    description: 'A crisp botanical infusion combining earthy wild fig leaves with cooling peppermint and French green clay. Perfectly balanced to tighten pores and leave skin invigorated.',
    storySnippet: 'Reminds us that nature provides everything needed for renewal.',
    directions: 'Massage over wet skin. Enjoy the tingling cooling effect as green clay absorbs surface oil.',
    weightOz: 5.5,
    images: [
      'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true
  },
  {
    id: 'solstice-ember-seasonal',
    name: 'SOLSTICE EMBER (LIMITED)',
    subtitle: 'Smoked Cedar, Clove & Spiced Cinnamon Cold Process',
    price: 16.00,
    rating: 5.0,
    reviewCount: 64,
    category: 'Limited Releases',
    tags: ['Limited', 'Seasonal', 'Warm Spice', 'Rich'],
    scentProfile: {
      top: ['Crushed Clove Bud', 'Nutmeg'],
      heart: ['Smoked Himalayan Cedar', 'Cinnamon Bark'],
      base: ['Warm Leather Accord', 'Roasted Tonka Bean'],
      intensity: 'Bold'
    },
    ingredients: [
      'Saponified Organic Babassu Oil',
      'Pure Cocoa Butter',
      'Clove Bud Oil',
      'Himalayan Cedarwood',
      'Ground Cinnamon Bark Exfoliant',
      'Red Moroccan Clay'
    ],
    skinBenefits: [
      'Warming spice notes stimulate skin circulation',
      'Rich cocoa butter leaves long-lasting softness',
      'Deep comforting fragrance for cold seasons',
      'Gentle spice dusting'
    ],
    impactHours: 2.0,
    description: 'Small-batch seasonal release poured in micro-runs of only 500 bars. Solstice Ember captures the quiet heat of a winter fireside with smoked cedar, clove bud, and cocoa butter.',
    storySnippet: 'Hand-numbered batch stamp on every eco-friendly box.',
    directions: 'Use daily in warm bath or shower for a grounding, aromatic escape.',
    weightOz: 5.8,
    images: [
      'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80'
    ],
    isLimited: true,
    inStock: true
  },
  {
    id: 'calm-anchor-topical',
    name: 'CALM ANCHOR SENSITIVE',
    subtitle: 'Fragrance-Free Chamomile, Oatmeal & Calendula Soap',
    price: 14.00,
    rating: 4.97,
    reviewCount: 112,
    category: 'Topicals',
    tags: ['Sensitive', 'Fragrance-Free', 'Calendula', 'Unscented'],
    scentProfile: {
      top: ['Natural Oat Straw (Subtle)'],
      heart: ['Clean Chamomile Blossom'],
      base: ['Unrefined Shea Butter'],
      intensity: 'Subtle'
    },
    ingredients: [
      'Infused Calendula Petal Extractions',
      'Whole Organic Oat Flour',
      'Saponified Olive Oil',
      'Organic Golden Jojoba',
      'Chamomile Flower Extract',
      'Pure Water'
    ],
    skinBenefits: [
      '100% free of added fragrances or synthetic dyes',
      'Safe for infants, facial skin, and compromised barriers',
      'Calendula petals calm sensitive redness instantly',
      'Ultra-mild pH balanced formulation'
    ],
    impactHours: 1.5,
    description: 'Pure, unadulterated comfort. Designed for ultra-sensitive skin that reacts to added fragrances or harsh surfactants. Infused with whole calendula flowers and organic oats.',
    storySnippet: 'Created when community members in early detox needed gentle skin support without intense aromatics.',
    directions: 'Work into a creamy foam with hands. Gently smooth over delicate face or dry skin areas.',
    weightOz: 5.5,
    images: [
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true
  },
  {
    id: 'fresh-start-gift-box',
    name: 'THE FRESH START TRIO GIFT BOX',
    subtitle: 'Includes Day One, Wheelhouse Reserve & Citrus Reclamation',
    price: 42.00,
    rating: 5.0,
    reviewCount: 310,
    category: 'Gift Boxes',
    tags: ['Gift Set', 'Custom Box', 'Impact Gift', 'Best Sellers'],
    scentProfile: {
      top: ['Fir Needle & Citrus'],
      heart: ['Bourbon Oak & Honey'],
      base: ['Charcoal Earth & Amber'],
      intensity: 'Bold'
    },
    ingredients: [
      '3 Full-Size Handcrafted Bars (5.5oz each)',
      'Handmade Cedarwood Soap Saver Tray',
      'Founder DJ Personal Story Letter',
      'Custom Matte Black Gift Presentation Sleeve'
    ],
    skinBenefits: [
      'Complete skincare spectrum: Detox, Hydrate & Exfoliate',
      'Includes solid cedarwood draining soap dish',
      'Ideal gift for milestones, sobriety anniversaries, and holidays'
    ],
    impactHours: 5.0,
    description: 'The definitive Soapbriety experience packaged in a dark luxury foil-stamped presentation box. Contains our top three flagship bars plus a custom solid cedarwood drainage tray that doubles the life of every bar.',
    storySnippet: 'Every Fresh Start Box directly funds 5 hours of peer support circles at The Wheelhouse.',
    directions: 'Unbox, select your morning ritual bar, and place on included cedar tray between uses.',
    weightOz: 18.0,
    images: [
      'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'discipline-crate-box',
    name: 'THE DISCIPLINE HEAVYWEIGHT CRATE',
    subtitle: '5 Bar Master Bundle + Custom Copper Soap Dish',
    price: 68.00,
    rating: 5.0,
    reviewCount: 145,
    category: 'Gift Boxes',
    tags: ['Crate', 'Master Bundle', 'Copper Dish', 'Maximum Impact'],
    scentProfile: {
      top: ['Complete Aromatherapy Arsenal'],
      heart: ['Woodsy, Citrus, Floral & Spice'],
      base: ['Earth, Oak & Charcoal'],
      intensity: 'Bold'
    },
    ingredients: [
      '5 Master Handcrafted Soap Bars (5.5oz - 6.0oz)',
      'Solid Forged Copper Water-Draining Soap Dish',
      'Soapbriety Linen Travel Wash Bag',
      'Certificate of Impact signed by Founder DJ'
    ],
    skinBenefits: [
      'Full season skin maintenance regimen',
      'Forged copper tray resists rust & bacterial growth',
      'Saves 20% compared to individual bar purchases'
    ],
    impactHours: 8.5,
    description: 'Our ultimate gift box for those who value craftsmanship and purpose. Features 5 distinct bars, a hand-forged solid copper drainage dish, and a Linen Travel Pouch.',
    storySnippet: 'Provides substantial funding for Wheelhouse weekend outreach meals.',
    directions: 'Store unopened bars in cool dry location until ready for rotation.',
    weightOz: 32.0,
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true
  }
];
