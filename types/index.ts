// ==========================================
// Elimidia Website - TypeScript Interfaces
// ==========================================

// Navigation
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isButton?: boolean;
}

// Kontaktinformationen
export interface ContactInfo {
  company: string;
  street: string;
  city: string;
  country: string;
  phone: string;
  whatsapp?: string;
  email: string;
  openingHours?: string;
  vatId?: string;
}

// Social Media Links
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

// Hero Section
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  backgroundImage: string;
}

// Generische Section
export interface SectionItem {
  id: string;
  icon?: string;
  title: string;
  description: string;
  imageUrl?: string;
  linkText?: string;
  linkHref?: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  items?: SectionItem[];
  backgroundColor?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
}

// Timeline Step
export interface TimelineStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon?: string;
}

// FAQ Item
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  imageUrl?: string;
  rating?: number;
}

// Service/Product
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  icon?: string;
}

// Kontaktformular Daten
export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiryType: 'kakaobohnen' | 'transport' | 'beides' | 'sonstiges';
  message: string;
}

// Page Data Structures
export interface HomePageData {
  hero: HeroData;
  introduction: Section;
  services: Section;
  whyImidia: Section;
  cta: Section;
}

export interface AboutPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  story: Section;
  values: Section;
  team: Section;
  quality: Section;
}

export interface ServicesPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  cocoa: Section;
  transport: Section;
  additionalServices: Section;
}

export interface TransportPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  overview: Section;
  process: {
    title: string;
    subtitle: string;
    steps: TimelineStep[];
  };
  features: Section;
  regions: Section;
}

export interface ContactPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  formSection: {
    title: string;
    description: string;
  };
  inquiryTypes: {
    value: ContactFormData['inquiryType'];
    label: string;
  }[];
}

export interface FAQPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  categories: {
    id: string;
    title: string;
    items: FAQItem[];
  }[];
}

// Complete Site Data
export interface SiteData {
  // Meta Information
  meta: {
    siteName: string;
    slogan: string;
    description: string;
    keywords: string[];
    foundingDate: string;
  };

  // Contact & Address
  contact: ContactInfo;

  // Navigation
  navigation: NavItem[];

  // Social Media
  socialLinks: SocialLink[];

  // Page Content
  pages: {
    home: HomePageData;
    about: AboutPageData;
    services: ServicesPageData;
    transport: TransportPageData;
    contact: ContactPageData;
    faq: FAQPageData;
  };

  // Testimonials
  testimonials: Testimonial[];

  // Footer
  footer: {
    description: string;
    quickLinks: NavItem[];
    legalLinks: NavItem[];
  };
}
