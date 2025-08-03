import { Calendar, Linkedin, Users, Mic } from 'lucide-react';
import Link from 'next/link';

import { siteConfig, footerLinks } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto container-padding section-padding'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-milano-gradient rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>C</span>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold text-lg text-white'>
                  Cursor Italy
                </span>
                <span className='text-xs text-gray-400 -mt-1'>
                  {siteConfig.location}
                </span>
              </div>
            </div>
            <p className='text-gray-300 text-sm mb-6'>
              {siteConfig.description}
            </p>
            <div className='flex space-x-4'>
              {siteConfig.social.meetup && (
                <Link
                  href={siteConfig.social.meetup}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                  aria-label='Meetup'
                >
                  <Users className='w-5 h-5' />
                </Link>
              )}
              {siteConfig.social.linkedin && (
                <Link
                  href={siteConfig.social.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='w-5 h-5' />
                </Link>
              )}
              {siteConfig.social.luma && (
                <Link
                  href={siteConfig.social.luma}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                  aria-label='Lu.ma'
                >
                  <Calendar className='w-5 h-5' />
                </Link>
              )}
              {siteConfig.social.sessionize && (
                <Link
                  href={siteConfig.social.sessionize}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                  aria-label='Sessionize'
                >
                  <Mic className='w-5 h-5' />
                </Link>
              )}
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Community</h3>
            <ul className='space-y-2'>
              {footerLinks.community.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className='font-semibold text-white mb-4'>About</h3>
            <ul className='space-y-2'>
              {footerLinks.about.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Resources</h3>
            <ul className='space-y-2'>
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} {siteConfig.title}. Built with ❤️ for the Italian
            developer community.
          </p>
          <div className='mt-4 md:mt-0 flex items-center space-x-6'>
            <Link
              href='/privacy'
              className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
            >
              Terms of Service
            </Link>
            <Link
              href='/code-of-conduct'
              className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
