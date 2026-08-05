// ============================================================
// SOAPBRIETY — Static Data (js/data.js)
// All product, review, content, and FAQ data
// ============================================================

const PRODUCTS = [
  {
    id: 'day-one-cold-process',
    name: 'DAY ONE',
    subtitle: 'Activated Charcoal & Fraser Fir Cold Process Bar',
    price: 14.00, rating: 4.98, reviewCount: 248,
    category: 'Best Sellers',
    tags: ['Detox','Cold Process','Woodsy','Exfoliating'],
    scentProfile: { top: ['Fraser Fir Needle','Crisp Mountain Breeze'], heart: ['Crushed Cedarwood','Wild Sage'], base: ['Smoked Birch','Deep Earth Pine'], intensity: 'Bold' },
    ingredients: ['Saponified Organic Coconut Oil','Extra Virgin Olive Oil','Sustainable Palm Oil (RSPO Certified)','Activated Bamboo Charcoal','Fraser Fir Essential Oil','Raw Shea Butter','Pumice Stone Grit'],
    skinBenefits: ['Draws out impurities & environmental toxins','Exfoliates dead skin cells for smooth feel','Deep cleansing for active lifestyles','Nourishes skin barrier without drying'],
    impactHours: 1.5,
    description: "Day One marks the moment you decide to take control. Infused with detoxifying bamboo charcoal and wild Fraser fir, this bar delivers a rich, creamy lather with microscopic pumice grit to wash away yesterday's grit.",
    storySnippet: "Inspired by DJ's first 24 hours of sobriety on April 20, 2023. A reminder that every morning is a clean slate.",
    directions: 'Lather under warm water. Massage over shoulders, chest, and body in circular motions. Rinse thoroughly and embrace the clean start.',
    weightOz: 5.5,
    images: ['https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80'],
    isBestSeller: true, inStock: true
  },
  {
    id: 'wheelhouse-reserve',
    name: 'WHEELHOUSE RESERVE',
    subtitle: 'Bourbon Birch, Tobacco Leaf & Honey Soap',
    price: 16.00, rating: 5.0, reviewCount: 192,
    category: 'Best Sellers',
    tags: ['Signature','Warm','Rich Lather','Deep Hydration'],
    scentProfile: { top: ['Sweet Tobacco Leaf','Golden Amber'], heart: ['Bourbon Cask Oak','Wildflower Honey'], base: ['Smoked Vanilla Bean','Dark Teakwood'], intensity: 'Bold' },
    ingredients: ['Organic Goat Milk Base','Saponified Avocado Oil','Unrefined Cocoa Butter','Raw Local Honey','Colloidal Oatmeal','Tobacco Leaf & Oak Infused Oils'],
    skinBenefits: ['Deep hydration for dry or stressed skin','Soothes inflammation & redness','Lathers into velvet moisture barrier','Rich in natural Vitamin E & fatty acids'],
    impactHours: 2.0,
    description: 'Our flagship signature bar dedicated to The Wheelhouse recovery community center. Crafted with organic goat milk, raw local honey, and rich bourbon oak notes, it leaves the skin deeply hydrated.',
    storySnippet: '100% of net proceeds from Wheelhouse Reserve directly sponsor peer recovery circle hosting and weekend fellowship meals.',
    directions: 'Work into a velvety lather between palms or washcloth. Cleanse gently. Suitable for both face and full body.',
    weightOz: 6.0,
    images: ['https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80'],
    isBestSeller: true, inStock: true
  },
  {
    id: 'citrus-reclamation',
    name: 'CITRUS RECLAMATION',
    subtitle: 'Blood Orange, Grapefruit & Poppy Seed Exfoliant',
    price: 14.00, rating: 4.95, reviewCount: 134,
    category: 'Fruit Collection',
    tags: ['Fruit','Energizing','Exfoliating','Brightening'],
    scentProfile: { top: ['Cold-Pressed Blood Orange','Ruby Red Grapefruit'], heart: ['Tangerine Zest','Bergamot Leaf'], base: ['White Cedar','Sunbaked Vetiver'], intensity: 'Medium' },
    ingredients: ['Cold-Pressed Olive Oil','Organic Coconut Oil','Jojoba Seed Oil','Blue Poppy Seeds','Blood Orange Essential Oil','Turmeric Root Powder (Natural Color)'],
    skinBenefits: ['Awakens senses with crisp citrus aromatherapy','Natural poppy seed micro-exfoliation','Evens out skin tone with botanical antioxidant boost','Non-greasy, refreshing rinse'],
    impactHours: 1.5,
    description: 'A surge of bright optimism. Cold-pressed blood orange and ruby red grapefruit combine with natural poppy seeds to buff away dullness and energize body and mind.',
    storySnippet: 'Designed to symbolize the clarity that comes when the morning fog clears.',
    directions: 'Rub directly onto skin to experience gentle poppy seed scrubbing action.',
    weightOz: 5.5,
    images: ['https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80'],
    isBestSeller: false, inStock: true
  },
  {
    id: 'iron-clasp-topical',
    name: 'IRON CLASP DERMA-RECOVERY',
    subtitle: 'Targeted Pine Tar & Eucalyptus Topical Salve Bar',
    price: 18.00, rating: 4.99, reviewCount: 176,
    category: 'Topicals',
    tags: ['Topical','Therapeutic','Pine Tar','Eczema Friendly'],
    scentProfile: { top: ['Eucalyptus Globulus','Peppermint Leaf'], heart: ['Medicinal Pine Tar','Tea Tree essential oil'], base: ['Dark Earth Resins','Cade Wood'], intensity: 'Bold' },
    ingredients: ['Pure Kiln-Burned Pine Tar','Organic Neem Oil','Colloidal Oat Flour','Shea Butter','Tea Tree Oil','Eucalyptus Essential Oil','Saponified Sweet Almond Oil'],
    skinBenefits: ['Soothes persistent itchiness, eczema & psoriasis symptoms','Antimicrobial pine tar calms stressed skin patches','Cools overworked muscles with pure peppermint','Heavy-duty restoration for hands, elbows and knees'],
    impactHours: 2.2,
    description: 'Formulated for hard-working hands and skin facing heavy stress. Pure kiln-burned pine tar combined with tea tree and organic neem oil yields an unvarnished therapeutic bar.',
    storySnippet: 'Created for tradespeople, athletes, and anyone building their life back with their own two hands.',
    directions: 'Lather onto affected skin or weary hands. Allow lather to rest on skin for 60 seconds before rinsing.',
    weightOz: 6.0,
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80'],
    isBestSeller: true, inStock: true
  },
  {
    id: 'apothecary-mint-fruit',
    name: 'WILD FIG & MINT RENEWAL',
    subtitle: 'Crushed Fig Leaves, Peppermint & French Green Clay',
    price: 15.00, rating: 4.92, reviewCount: 88,
    category: 'Fruit Collection',
    tags: ['Fruit','Clay','Refreshing','Cooling'],
    scentProfile: { top: ['Crushed Spearmint','Wild Fig Bark'], heart: ['Peppermint Essential Oil','Green Tea Leaf'], base: ['Earthy Moss','Sandalwood'], intensity: 'Medium' },
    ingredients: ['French Green Clay','Saponified Castor Oil','Organic Virgin Coconut Oil','Crushed Fig Leaf Extract','Peppermint Essential Oil','Spinach Powder (Natural Color)'],
    skinBenefits: ['French Green Clay purifies oily pores','Spearmint provides intense cooling sensation','Locks in natural moisture balance','Silky smooth foam'],
    impactHours: 1.5,
    description: 'A crisp botanical infusion combining earthy wild fig leaves with cooling peppermint and French green clay. Perfectly balanced to tighten pores and leave skin invigorated.',
    storySnippet: 'Reminds us that nature provides everything needed for renewal.',
    directions: 'Massage over wet skin. Enjoy the tingling cooling effect as green clay absorbs surface oil.',
    weightOz: 5.5,
    images: ['https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=80'],
    inStock: true
  },
  {
    id: 'solstice-ember-seasonal',
    name: 'SOLSTICE EMBER (LIMITED)',
    subtitle: 'Smoked Cedar, Clove & Spiced Cinnamon Cold Process',
    price: 16.00, rating: 5.0, reviewCount: 64,
    category: 'Limited Releases',
    tags: ['Limited','Seasonal','Warm Spice','Rich'],
    scentProfile: { top: ['Crushed Clove Bud','Nutmeg'], heart: ['Smoked Himalayan Cedar','Cinnamon Bark'], base: ['Warm Leather Accord','Roasted Tonka Bean'], intensity: 'Bold' },
    ingredients: ['Saponified Organic Babassu Oil','Pure Cocoa Butter','Clove Bud Oil','Himalayan Cedarwood','Ground Cinnamon Bark Exfoliant','Red Moroccan Clay'],
    skinBenefits: ['Warming spice notes stimulate skin circulation','Rich cocoa butter leaves long-lasting softness','Deep comforting fragrance for cold seasons','Gentle spice dusting'],
    impactHours: 2.0,
    description: 'Small-batch seasonal release poured in micro-runs of only 500 bars. Solstice Ember captures the quiet heat of a winter fireside with smoked cedar, clove bud, and cocoa butter.',
    storySnippet: 'Hand-numbered batch stamp on every eco-friendly box.',
    directions: 'Use daily in warm bath or shower for a grounding, aromatic escape.',
    weightOz: 5.8,
    images: ['https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80'],
    isLimited: true, inStock: true
  },
  {
    id: 'calm-anchor-topical',
    name: 'CALM ANCHOR SENSITIVE',
    subtitle: 'Fragrance-Free Chamomile, Oatmeal & Calendula Soap',
    price: 14.00, rating: 4.97, reviewCount: 112,
    category: 'Topicals',
    tags: ['Sensitive','Fragrance-Free','Calendula','Unscented'],
    scentProfile: { top: ['Natural Oat Straw (Subtle)'], heart: ['Clean Chamomile Blossom'], base: ['Unrefined Shea Butter'], intensity: 'Subtle' },
    ingredients: ['Infused Calendula Petal Extractions','Whole Organic Oat Flour','Saponified Olive Oil','Organic Golden Jojoba','Chamomile Flower Extract','Pure Water'],
    skinBenefits: ['100% free of added fragrances or synthetic dyes','Safe for infants, facial skin, and compromised barriers','Calendula petals calm sensitive redness instantly','Ultra-mild pH balanced formulation'],
    impactHours: 1.5,
    description: 'Pure, unadulterated comfort. Designed for ultra-sensitive skin that reacts to added fragrances or harsh surfactants. Infused with whole calendula flowers and organic oats.',
    storySnippet: 'Created when community members in early detox needed gentle skin support without intense aromatics.',
    directions: 'Work into a creamy foam with hands. Gently smooth over delicate face or dry skin areas.',
    weightOz: 5.5,
    images: ['https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80'],
    inStock: true
  },
  {
    id: 'fresh-start-gift-box',
    name: 'THE FRESH START TRIO GIFT BOX',
    subtitle: 'Includes Day One, Wheelhouse Reserve & Citrus Reclamation',
    price: 42.00, rating: 5.0, reviewCount: 310,
    category: 'Gift Boxes',
    tags: ['Gift Set','Custom Box','Impact Gift','Best Sellers'],
    scentProfile: { top: ['Fir Needle & Citrus'], heart: ['Bourbon Oak & Honey'], base: ['Charcoal Earth & Amber'], intensity: 'Bold' },
    ingredients: ['3 Full-Size Handcrafted Bars (5.5oz each)','Handmade Cedarwood Soap Saver Tray','Founder DJ Personal Story Letter','Custom Matte Black Gift Presentation Sleeve'],
    skinBenefits: ['Complete skincare spectrum: Detox, Hydrate & Exfoliate','Includes solid cedarwood draining soap dish','Ideal gift for milestones, sobriety anniversaries, and holidays'],
    impactHours: 5.0,
    description: 'The definitive Soapbriety experience packaged in a dark luxury foil-stamped presentation box. Contains our top three flagship bars plus a custom solid cedarwood drainage tray.',
    storySnippet: 'Every Fresh Start Box directly funds 5 hours of peer support circles at The Wheelhouse.',
    directions: 'Unbox, select your morning ritual bar, and place on included cedar tray between uses.',
    weightOz: 18.0,
    images: ['https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1000&q=80'],
    isBestSeller: true, inStock: true
  },
  {
    id: 'discipline-crate-box',
    name: 'THE DISCIPLINE HEAVYWEIGHT CRATE',
    subtitle: '5 Bar Master Bundle + Custom Copper Soap Dish',
    price: 68.00, rating: 5.0, reviewCount: 145,
    category: 'Gift Boxes',
    tags: ['Crate','Master Bundle','Copper Dish','Maximum Impact'],
    scentProfile: { top: ['Complete Aromatherapy Arsenal'], heart: ['Woodsy, Citrus, Floral & Spice'], base: ['Earth, Oak & Charcoal'], intensity: 'Bold' },
    ingredients: ['5 Master Handcrafted Soap Bars (5.5oz - 6.0oz)','Solid Forged Copper Water-Draining Soap Dish','Soapbriety Linen Travel Wash Bag','Certificate of Impact signed by Founder DJ'],
    skinBenefits: ['Full season skin maintenance regimen','Forged copper tray resists rust & bacterial growth','Saves 20% compared to individual bar purchases'],
    impactHours: 8.5,
    description: 'Our ultimate gift box for those who value craftsmanship and purpose. Features 5 distinct bars, a hand-forged solid copper drainage dish, and a Linen Travel Pouch.',
    storySnippet: 'Provides substantial funding for Wheelhouse weekend outreach meals.',
    directions: 'Store unopened bars in cool dry location until ready for rotation.',
    weightOz: 32.0,
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1000&q=80'],
    inStock: true
  }
];

const REVIEWS = [
  { id:'rev-1', author:'Marcus Vance', location:'Denver, CO', rating:5, title:'Washes away the daily stress like nothing else.', comment:"The scent of Fraser fir and cedarwood is incredible, but knowing what DJ and the team are doing at The Wheelhouse makes every shower mean something deeper. 2 years clean myself, this bar is my morning anchor.", badge:'2 Years Clean', category:'mission', userAvatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
  { id:'rev-2', author:'Elena Rostova', location:'Austin, TX', rating:5, title:'Luxury scent without the synthetic perfume chemical smell.', comment:"Bourbon birch and honey smells like a high-end apothecary in London. The lather is creamy and my skin doesn't feel stripped. Plus, seeing the impact report attached to my order was deeply moving.", badge:'Verified Buyer', category:'product', userAvatar:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
  { id:'rev-3', author:'Dave "Mac" MacIntyre', location:'Portland, OR', rating:5, title:'Saved my hands after 10-hour carpentry shifts.', comment:"I work with lumber all day. Pine tar soap is usually harsh or smells like a bonfire. This Iron Clasp bar cures my cracked knuckles and doesn't leave grease behind. Worth every penny.", badge:'Tradesman', category:'product', userAvatar:'images/David.png' },
  { id:'rev-4', author:'Sarah Jenkins', location:'Seattle, WA', rating:5, title:'Bought for the cause, reordering for the quality.', comment:"I heard DJ on a recovery podcast and wanted to support The Wheelhouse. Citrus Reclamation smells unreal. The poppy seed scrub is perfection. Soapbriety is the real deal.", badge:'Supporter', category:'mission', userAvatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
  { id:'rev-5', author:'Brian K.', location:'Chicago, IL', rating:5, title:'The perfect 1-year sobriety gift for my brother.', comment:"Sent him the Fresh Start Trio Box. He called me in tears reading DJ's founder note. It wasn't just soap, it was a validation of his hard journey.", badge:'Gift Recipient Loved It', category:'mission', userAvatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
];

const JOURNAL_ARTICLES = [
  { id:'art-1', title:'April 20, 2023: The Morning That Changed Everything', category:'Recovery', excerpt:"Founder DJ recounts his final rock bottom, the quiet realization at sunrise, and how washing his face that morning became the catalyst for Soapbriety.", content:['On the morning of April 20, 2023, I woke up with nothing left in the tank. No excuses, no deflections, and no remaining illusions. Addiction had stripped away my health, my relationships, and my self-respect.','I walked into the bathroom, turned the faucet to cold, and washed my face. In that plain porcelain sink, staring at my reflection, I made one commitment: I will not surrender today.','That wash basin became an altar of accountability. Every morning since has started with cold water, raw soap, and the deliberate decision to start over. Soapbriety was born from that exact ritual. We don\'t sell soap — we sell daily reminders that your past does not dictate your next step.'], author:'DJ', authorRole:'Founder & Head Artisan', authorAvatar:'images/David.png', date:'2026-04-20', readTime:'6 min read', heroImage:'images/David.png', featured:true },
  { id:'art-2', title:'Why Cold-Process Soap Is An Exercise In Discipline', category:'Natural Ingredients', excerpt:'Commercial soaps use quick synthetic detergents. Cold process requires 6 weeks of patience, precision oil measurements, and zero shortcuts.', content:['In a world addicted to instant gratification, cold-process soapmaking is a rebellious act of patience.','We combine unrefined plant oils, botanical extracts, and essential oils with precision lye solution. The saponification process creates natural glycerin — a precious humectant commercial brands strip away to sell separately in lotion.','Each bar cures on custom cedar racks for 42 full days. No forced heat, no chemical hardeners, no rush. Just like personal recovery, there are no shortcuts to true transformation.'], author:'DJ', authorRole:'Founder', authorAvatar:'images/David.png', date:'2026-05-18', readTime:'4 min read', heroImage:'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1200&q=80' },
  { id:'art-3', title:'Inside The Wheelhouse: How Your Purchases Build Community Circles', category:'Wheelhouse Events', excerpt:'A detailed breakdown of where Soapbriety proceeds go: funding peer circles, hot fellowship meals, sober event hosting, and crisis transit passes.', content:['When you check out on Soapbriety, your receipt isn\'t just an invoice. It is a line-item contribution to localized recovery infrastructure.','Through The Wheelhouse, we host free weekly peer recovery circles, provide warm evening meals every Friday night, supply hygiene kits to local shelters, and sponsor emergency housing transition deposits.','Last month alone, Soapbriety customer purchases directly funded 412 hours of peer mentorship and 680 hot meals.'], author:'Sarah Lin', authorRole:'Community Outreach Lead', authorAvatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', date:'2026-06-30', readTime:'5 min read', heroImage:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80' }
];

const EVENTS = [
  { id:'ev-1', title:'Wheelhouse Monthly Sober Sunrise Run & Soap Workshop', date:'August 15, 2026', time:'7:00 AM - 11:00 AM', location:'The Wheelhouse Community Center, Downtown', category:'Community Gathering', description:'Start Saturday with a 5K community run/walk followed by a complimentary hot breakfast and a live cold-process soap-pouring demonstration by DJ.', attendeesCount:142, image:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80' },
  { id:'ev-2', title:'Peer Recovery Facilitator Training Circle', date:'August 22, 2026', time:'1:00 PM - 5:00 PM', location:'Wheelhouse Hall A', category:'Workshop', description:'Free intensive training for individuals in recovery interested in hosting peer support circles and mentorship programs.', attendeesCount:45, image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
  { id:'ev-3', title:'Annual Fresh Start Charity Gala & Auction', date:'September 12, 2026', time:'6:00 PM - 10:00 PM', location:'The Copper Warehouse, Arts District', category:'Fundraiser', description:'An evening celebrating recovery milestones, featuring live music, artisanal mocktails, custom artisan soap auctions, and guest speakers.', attendeesCount:310, image:'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' }
];

const SOCIAL_POSTS = [
  { id:'soc-1', platform:'instagram', imageUrl:'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=800&q=80', caption:'Pouring batch #420 of DAY ONE today. Fraser fir, smoked cedar, and activated bamboo charcoal. Every cut bar funds another hour of hope at @thewheelhouse. #Soapbriety #CleanStart #SoberLiving', likes:1420, comments:89, url:'https://www.instagram.com/soapbriety' },
  { id:'soc-2', platform:'instagram', imageUrl:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80', caption:"Sunrise fellowship run with 120+ community members. Sobriety isn't about taking things away—it's about claiming everything worth living for. ☀️ #TheWheelhouse #CleanLiving #Soapbriety", likes:2150, comments:134, url:'https://www.instagram.com/soapbriety' },
  { id:'soc-3', platform:'facebook', imageUrl:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', caption:'Volunteers packed over 500 hygiene kits for local recovery transition housing this weekend. Powered by your soap orders. Thank you for making fresh starts possible!', likes:980, comments:62, url:'https://www.facebook.com/profile.php?id=61567785470478' },
  { id:'soc-4', platform:'instagram', imageUrl:'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80', caption:'WHEELHOUSE RESERVE: Organic goat milk, raw honey, and sweet tobacco leaf. Rich, velvet lather designed to ground your morning. Tap link in bio to shop. 🧼✨', likes:1890, comments:76, url:'https://www.instagram.com/soapbriety' }
];

const FAQS = [
  { id:'faq-1', question:'How does every purchase support recovery initiatives and The Wheelhouse?', answer:'A fixed portion of net proceeds from every single bar sold goes directly into funding peer support circles, weekly hot meals, hygiene kit outreach, and crisis housing assistance at The Wheelhouse. Every bar equals roughly 1.5 to 2 hours of direct community outreach.', category:'Giving Back' },
  { id:'faq-2', question:'What makes Soapbriety cold-process soap different from store-bought soap?', answer:'Commercial body washes and soaps use synthetic detergent surfactants (like SLS), artificial foam boosters, and chemical perfumes that dry out skin. Our cold-process soaps are handcrafted from natural plant oils (coconut, olive, avocado, shea butter) and cured for 6 weeks, retaining naturally occurring moisturizing glycerin.', category:'Ingredients' },
  { id:'faq-3', question:"What is founder DJ's story and clean date?", answer:"On April 20, 2023, DJ chose recovery, taking control of his life and deciding to build something meaningful. He founded Soapbriety to create handcrafted soap that acts as a daily physical reminder of renewal, with profits reinvested into peer recovery networks.", category:'Recovery' },
  { id:'faq-4', question:'How do soap subscriptions work?', answer:'You can subscribe to your favorite bars or a curated bundle to save 15% on every shipment. Choose delivery every 30, 45, or 60 days. Swap fragrances, skip shipments, or cancel easily anytime in your customer account portal.', category:'Subscriptions' },
  { id:'faq-5', question:'Do you offer wholesale pricing for retailers, gyms, or barbershops?', answer:'Yes! We partner with select lifestyle retailers, barbershops, boutique hotels, gym facilities, and community spaces. Apply via our Wholesale Portal to access volume discount pricing, marketing collateral, and custom display fixtures.', category:'Wholesale' },
  { id:'faq-6', question:'What is your shipping policy & return guarantee?', answer:"We offer free standard shipping on all US orders over $45. Orders ship within 1-2 business days from our craft facility. If you aren't completely satisfied with your Soapbriety bar for any reason, contact us within 30 days for a full refund or exchange.", category:'Shipping & Returns' }
];

const IMPACT_STATS = { barsSold:48500, eventsFunded:240, moneyDonated:165000, volunteerHours:8900, livesImpacted:3400 };
