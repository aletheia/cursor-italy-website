import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  title: 'Cursor Italy',
  description: 'The community for builders, creators, and curious minds shaping the future with AI in Italy',
  url: 'https://cursor-italy.dev', // Update with actual domain
  location: 'Milano, Italy',
  organizer: 'Luca Bianchi',
  social: {
    meetup: 'https://www.meetup.com/cursor-italy/',
    linkedin: 'https://linkedin.com/company/cursor-italy', // Update with actual LinkedIn
    luma: 'https://lu.ma/cursor-italy', // Update with actual Lu.ma
    sessionize: 'https://sessionize.com/cursor-italy', // Update with actual Sessionize
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