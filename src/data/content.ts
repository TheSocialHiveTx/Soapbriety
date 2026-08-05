import { Review, JournalArticle, EventItem, SocialMediaPost, FAQItem } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'day-one-cold-process',
    author: 'Marcus Vance',
    location: 'Denver, CO',
    rating: 5,
    date: '2026-07-14',
    title: 'Washes away the daily stress like nothing else.',
    comment: 'The scent of Fraser fir and cedarwood is incredible, but knowing what DJ and the team are doing at The Wheelhouse makes every shower mean something deeper. 2 years clean myself, this bar is my morning anchor.',
    verified: true,
    category: 'mission',
    badge: '2 Years Clean',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    productId: 'wheelhouse-reserve',
    author: 'Elena Rostova',
    location: 'Austin, TX',
    rating: 5,
    date: '2026-07-02',
    title: 'Luxury scent without the synthetic perfume chemical smell.',
    comment: 'Bourbon birch and honey smells like a high-end apothecary in London. The lather is creamy and my skin doesn’t feel stripped. Plus, seeing the impact report attached to my order was deeply moving.',
    verified: true,
    category: 'product',
    badge: 'Verified Buyer',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    productId: 'iron-clasp-topical',
    author: 'Dave "Mac" MacIntyre',
    location: 'Portland, OR',
    rating: 5,
    date: '2026-06-21',
    title: 'Saved my hands after 10-hour carpentry shifts.',
    comment: 'I work with lumber all day. Pine tar soap is usually harsh or smells like a bonfire. This Iron Clasp bar cures my cracked knuckles and doesn’t leave grease behind. Worth every penny.',
    verified: true,
    category: 'product',
    badge: 'Tradesman',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    productId: 'citrus-reclamation',
    author: 'Sarah Jenkins',
    location: 'Seattle, WA',
    rating: 5,
    date: '2026-06-11',
    title: 'Bought for the cause, reordering for the quality.',
    comment: 'I heard DJ on a recovery podcast and wanted to support The Wheelhouse. Citrus Reclamation smells unreal. The poppy seed scrub is perfection. Soapbriety is the real deal.',
    verified: true,
    category: 'mission',
    badge: 'Supporter',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-5',
    productId: 'fresh-start-gift-box',
    author: 'Brian K.',
    location: 'Chicago, IL',
    rating: 5,
    date: '2026-05-30',
    title: 'The perfect 1-year sobriety gift for my brother.',
    comment: 'Sent him the Fresh Start Trio Box. He called me in tears reading DJ’s founder note. It wasn’t just soap, it was a validation of his hard journey.',
    verified: true,
    category: 'mission',
    badge: 'Gift Recipient Loved It',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'April 20, 2023: The Morning That Changed Everything',
    slug: 'april-20-the-morning-that-changed-everything',
    category: 'Recovery',
    excerpt: 'Founder DJ recounts his final rock bottom, the quiet realization at sunrise, and how washing his face that morning became the catalyst for Soapbriety.',
    content: [
      'On the morning of April 20, 2023, I woke up with nothing left in the tank. No excuses, no deflections, and no remaining illusions. Addiction had stripped away my health, my relationships, and my self-respect.',
      'I walked into the bathroom, turned the faucet to cold, and washed my face. In that plain porcelain sink, staring at my reflection, I made one commitment: I will not surrender today.',
      'That wash basin became a altar of accountability. Every morning since has started with cold water, raw soap, and the deliberate decision to start over. Soapbriety was born from that exact ritual. We don\'t sell soap—we sell daily reminders that your past does not dictate your next step.'
    ],
    author: 'DJ',
    authorRole: 'Founder & Head Artisan',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '2026-04-20',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'art-2',
    title: 'Why Cold-Process Soap Is A Exercise In Discipline',
    slug: 'why-cold-process-soap-is-an-exercise-in-discipline',
    category: 'Natural Ingredients',
    excerpt: 'Commercial soaps use quick synthetic detergents. Cold process requires 6 weeks of patience, precision oil measurements, and zero shortcuts.',
    content: [
      'In a world addicted to instant gratification, cold-process soapmaking is a rebellious act of patience.',
      'We combine unrefined plant oils, botanical extracts, and essential oils with precision lye solution. The saponification process creates natural glycerin—a precious humectant commercial brands strip away to sell separately in lotion.',
      'Each bar cures on custom cedar racks for 42 full days. No forced heat, no chemical hardeners, no rush. Just like personal recovery, there are no shortcuts to true transformation.'
    ],
    author: 'DJ',
    authorRole: 'Founder',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '2026-05-18',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-3',
    title: 'Inside The Wheelhouse: How Your Purchases Build Community Circles',
    slug: 'inside-the-wheelhouse-building-community-circles',
    category: 'Wheelhouse Events',
    excerpt: 'A detailed breakdown of where Soapbriety proceeds go: funding peer circles, hot fellowship meals, sober event hosting, and crisis transit passes.',
    content: [
      'When you check out on Soapbriety, your receipt isn\'t just an invoice. It is a line-item contribution to localized recovery infrastructure.',
      'Through The Wheelhouse, we host free weekly peer recovery circles, provide warm evening meals every Friday night, supply hygiene kits to local shelters, and sponsor emergency housing transition deposits.',
      'Last month alone, Soapbriety customer purchases directly funded 412 hours of peer mentorship and 680 hot meals.'
    ],
    author: 'Sarah Lin',
    authorRole: 'Community Outreach Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: '2026-06-30',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Wheelhouse Monthly Sober Sunrise Run & Soap Workshop',
    date: 'August 15, 2026',
    time: '7:00 AM - 11:00 AM',
    location: 'The Wheelhouse Community Center, Downtown',
    category: 'Community Gathering',
    description: 'Start Saturday with a 5K community run/walk followed by a complimentary hot breakfast and a live cold-process soappouring demonstration by DJ.',
    attendeesCount: 142,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    isUpcoming: true
  },
  {
    id: 'ev-2',
    title: 'Peer Recovery Facilitator Training Circle',
    date: 'August 22, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Wheelhouse Hall A',
    category: 'Workshop',
    description: 'Free intensive training for individuals in recovery interested in hosting peer support circles and mentorship programs.',
    attendeesCount: 45,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    isUpcoming: true
  },
  {
    id: 'ev-3',
    title: 'Annual Fresh Start Charity Gala & Auction',
    date: 'September 12, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'The Copper Warehouse, Arts District',
    category: 'Fundraiser',
    description: 'An evening celebrating recovery milestones, featuring live music, artisanal mocktails, custom artisan soap auctions, and guest speakers.',
    attendeesCount: 310,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    isUpcoming: true
  }
];

export const SOCIAL_POSTS: SocialMediaPost[] = [
  {
    id: 'soc-1',
    platform: 'instagram',
    imageUrl: 'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=800&q=80',
    caption: 'Pouring batch #420 of DAY ONE today. Fraser fir, smoked cedar, and activated bamboo charcoal. Every cut bar funds another hour of hope at @thewheelhouse. #Soapbriety #CleanStart #SoberLiving',
    likes: 1420,
    comments: 89,
    url: 'https://www.instagram.com/soapbriety',
    type: 'soap-making'
  },
  {
    id: 'soc-2',
    platform: 'instagram',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    caption: 'Sunrise fellowship run with 120+ community members. Sobriety isn\'t about taking things away—it\'s about claiming everything worth living for. ☀️ #TheWheelhouse #CleanLiving #Soapbriety',
    likes: 2150,
    comments: 134,
    url: 'https://www.instagram.com/soapbriety',
    type: 'recovery-event'
  },
  {
    id: 'soc-3',
    platform: 'facebook',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    caption: 'Volunteers packed over 500 hygiene kits for local recovery transition housing this weekend. Powered by your soap orders. Thank you for making fresh starts possible!',
    likes: 980,
    comments: 62,
    url: 'https://www.facebook.com/profile.php?id=61567785470478',
    type: 'volunteers'
  },
  {
    id: 'soc-4',
    platform: 'instagram',
    imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80',
    caption: 'WHEELHOUSE RESERVE: Organic goat milk, raw honey, and sweet tobacco leaf. Rich, velvet lather designed to ground your morning. Tap link in bio to shop. 🧼✨',
    likes: 1890,
    comments: 76,
    url: 'https://www.instagram.com/soapbriety',
    type: 'product'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does every purchase support recovery initiatives and The Wheelhouse?',
    answer: 'A fixed portion of net proceeds from every single bar sold goes directly into funding peer support circles, weekly hot meals, hygiene kit outreach, and crisis housing assistance at The Wheelhouse. Every bar equals roughly 1.5 to 2 hours of direct community outreach.',
    category: 'Giving Back'
  },
  {
    id: 'faq-2',
    question: 'What makes Soapbriety cold-process soap different from store-bought soap?',
    answer: 'Commercial body washes and soaps use synthetic detergent surfactants (like SLS), artificial foam boosters, and chemical perfumes that dry out skin. Our cold-process soaps are handcrafted from natural plant oils (coconut, olive, avocado, shea butter) and cured for 6 weeks, retaining naturally occurring moisturizing glycerin.',
    category: 'Ingredients'
  },
  {
    id: 'faq-3',
    question: 'What is founder DJ’s story and clean date?',
    answer: 'On April 20, 2023, DJ chose recovery, taking control of his life and deciding to build something meaningful. He founded Soapbriety to create handcrafted soap that acts as a daily physical reminder of renewal, with profits reinvested into peer recovery networks.',
    category: 'Recovery'
  },
  {
    id: 'faq-4',
    question: 'How do soap subscriptions work?',
    answer: 'You can subscribe to your favorite bars or a curated bundle to save 15% on every shipment. Choose delivery every 30, 45, or 60 days. Swap fragrances, skip shipments, or cancel easily anytime in your customer account portal.',
    category: 'Subscriptions'
  },
  {
    id: 'faq-5',
    question: 'Do you offer wholesale pricing for retailers, gyms, or barbershops?',
    answer: 'Yes! We partner with select lifestyle retailers, barbershops, boutique hotels, gym facilities, and community spaces. Apply via our Wholesale Portal to access volume discount pricing, marketing collateral, and custom display fixtures.',
    category: 'Wholesale'
  },
  {
    id: 'faq-6',
    question: 'What is your shipping policy & return guarantee?',
    answer: 'We offer free standard shipping on all US orders over $45. Orders ship within 1-2 business days from our craft facility. If you aren\'t completely satisfied with your Soapbriety bar for any reason, contact us within 30 days for a full refund or exchange.',
    category: 'Shipping & Returns'
  }
];

export const IMPACT_STATS = {
  barsSold: 48500,
  eventsFunded: 240,
  moneyDonated: 165000,
  volunteerHours: 8900,
  livesImpacted: 3400
};
