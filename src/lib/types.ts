export interface Event {
  slug: string;
  title: string;
  date: string;
  startTime: string;
  endTime?: string;
  timezone?: string;
  location: string;
  locationUrl?: string;
  description: string;
  image?: string;
  eventDetailImage?: string;
  published: boolean;
  attendees?: number;
  maxAttendees?: number;
  registrationUrl?: string;
  tags?: string[];
  speakers?: Speaker[];
  content: string;
}

export interface Speaker {
  name: string;
  topic: string;
  bio?: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Sponsor {
  slug: string;
  name: string;
  tier: 'main' | 'gold' | 'silver' | 'bronze' | 'community';
  logo: string;
  website: string;
  description: string;
  featured?: boolean;
  order?: number;
  content: string;
}

export interface AboutPage {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
}

export interface SocialLinks {
  meetup?: string;
  linkedin?: string;
  luma?: string;
  sessionize?: string;
  github?: string;
  discord?: string;
}

export interface ImageConfig {
  ogImage: string;
  heroImage: string;
  defaultEventImage: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  location: string;
  organizer: string;
  images: ImageConfig;
  social: SocialLinks;
}

export type ContentType = 'event' | 'sponsor' | 'about';