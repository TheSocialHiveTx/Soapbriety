export type NavigationPage = 
  | 'home' 
  | 'shop' 
  | 'story' 
  | 'wheelhouse' 
  | 'impact' 
  | 'wholesale' 
  | 'journal' 
  | 'faq' 
  | 'contact';

export type ProductCategory = 
  | 'All'
  | 'Best Sellers' 
  | 'Fruit Collection' 
  | 'Topicals' 
  | 'Seasonal' 
  | 'Gift Boxes' 
  | 'Limited Releases';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: ProductCategory;
  tags: string[];
  scentProfile: {
    top: string[];
    heart: string[];
    base: string[];
    intensity: 'Subtle' | 'Medium' | 'Bold';
  };
  ingredients: string[];
  skinBenefits: string[];
  impactHours: number; // Hours of community outreach funded per bar
  description: string;
  storySnippet: string;
  directions: string;
  weightOz: number;
  images: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
  subscriptionFrequencyDays?: number; // 30, 45, 60
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  category: 'product' | 'mission';
  badge?: string;
  userAvatar?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Recovery' | 'Discipline' | 'Healthy Habits' | 'Natural Ingredients' | 'Behind The Scenes' | 'Wheelhouse Events' | 'Customer Stories';
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  heroImage: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Outreach' | 'Workshop' | 'Fundraiser' | 'Community Gathering';
  description: string;
  attendeesCount: number;
  image: string;
  isUpcoming: boolean;
}

export interface SocialMediaPost {
  id: string;
  platform: 'instagram' | 'facebook';
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  url: string;
  type: 'soap-making' | 'recovery-event' | 'volunteers' | 'behind-the-scenes' | 'product';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Recovery' | 'Shipping & Returns' | 'Wholesale' | 'Ingredients' | 'Subscriptions' | 'Giving Back';
}
