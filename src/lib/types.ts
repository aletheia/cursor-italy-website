// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavigationItem[];
}

// Speaker type
export interface Speaker {
  name: string;
  topic: string;
  company?: string;
  bio?: string;
  image?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Sponsor type (for components that don't use content collections)
export interface Sponsor {
  slug: string;
  name: string;
  logo: string;
  url: string;
  tier: 'main' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'community';
  description: string;
  content?: string;
  order?: number;
}

// Utility types
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Component props types
export interface BaseComponentProps {
  className?: string;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  external?: boolean;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

// SEO types
export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'event';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Theme types
export type Theme = 'light' | 'dark' | 'system';
