import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { siteConfig } from '@/lib/config';
import { generateMetadata } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = generateMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  image: siteConfig.images.ogImage,
  url: siteConfig.url,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.variable} ${inter.className}`}>
        <ErrorBoundary>
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
