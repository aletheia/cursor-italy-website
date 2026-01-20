export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  location: string;
  organizer: string;
  images: {
    ogImage: string;
    heroImage: string;
    defaultEventImage: string;
  };
  social: {
    meetup?: string;
    linkedin?: string;
    luma?: string;
    sessionize?: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'Cursor Italy',
  description:
    'The community for builders, creators, and curious minds shaping the future with AI in Italy',
  url: 'https://cursor-italy.dev',
  location: 'Milano, Italy',
  organizer: 'Luca Bianchi',
  images: {
    ogImage: '/images/cursor_milano_square.jpg',
    heroImage: '/images/cursor_milano_landscape.jpg',
    defaultEventImage: '/images/meetup_20250916.jpg',
  },
  social: {
    meetup: 'https://www.meetup.com/cursor-italy/',
    linkedin: 'https://linkedin.com/company/cursor-italy',
    luma: 'https://lu.ma/cursor-milano-settembre',
    sessionize: 'https://sessionize.com/cursor-italy',
  },
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Sponsors', href: '/sponsors' },
];

export const footerLinks = {
  community: [
    { name: 'Join on Meetup', href: siteConfig.social.meetup || '#' },
    { name: 'Follow on LinkedIn', href: siteConfig.social.linkedin || '#' },
    { name: 'Events on Lu.ma', href: siteConfig.social.luma || '#' },
    { name: 'Speak at Event', href: siteConfig.social.sessionize || '#' },
  ],
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
    { name: 'Founder', href: '/founder' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Cursor IDE', href: 'https://cursor.sh' },
    { name: 'AI Development', href: '#' },
    { name: 'Learning Resources', href: '#' },
    { name: 'Community Guidelines', href: '/code-of-conduct' },
  ],
};
