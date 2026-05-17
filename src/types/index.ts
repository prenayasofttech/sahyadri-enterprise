// ============================================================
// Sahyadri Enterprises — TypeScript Type Definitions
// ============================================================

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
  brand?: string;
  model_number?: string;
  is_featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  display_order: number;
  is_active: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image_url: string;
  tag: string;
  author: string;
  published_at: string;
}

export interface Client {
  id: number;
  name: string;
  logo_url?: string;
  icon: string;
  category: string;
  display_order: number;
}

export interface Certification {
  id: number;
  name: string;
  badge_text: string;
  description: string;
  logo_url?: string;
  display_order: number;
}

export interface Distributor {
  id: number;
  name: string;
  tagline: string;
  logo_url?: string;
  display_order: number;
}

export interface Enquiry {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export interface StatItem {
  target: number;
  label: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  image: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}
