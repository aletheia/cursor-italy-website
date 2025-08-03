import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'Cursor',
    'AI Development', 
    'IDE',
    'Milano',
    'Italy',
    'Meetup',
    'Artificial Intelligence',
    'Programming',
    'Developers',
    'Community'
  ],
  authors: [{ name: siteConfig.organizer }],
  creator: siteConfig.organizer,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google, Bing verification codes when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${inter.className}`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}