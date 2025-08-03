'use client';

import clsx from 'clsx';
import { Menu, X, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { navigation, siteConfig } from '@/lib/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200'>
      <div className='max-w-7xl mx-auto container-padding'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-milano-gradient rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>C</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-lg gradient-text'>
                Cursor Italy
              </span>
              <span className='text-xs text-gray-500 -mt-1'>
                {siteConfig.location}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-cursor-blue font-medium transition-colors duration-200'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link
              href={siteConfig.social.meetup || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary btn-sm'
            >
              <Users className='w-4 h-4 mr-2' />
              Join Community
            </Link>
            <Link href='/events' className='btn btn-primary btn-sm'>
              <Calendar className='w-4 h-4 mr-2' />
              Next Event
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type='button'
            className='md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <nav className='flex flex-col space-y-4 pt-4 border-t border-gray-200'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-cursor-blue font-medium transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className='flex flex-col space-y-2 pt-4'>
              <Link
                href={siteConfig.social.meetup || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary btn-sm justify-center'
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className='w-4 h-4 mr-2' />
                Join Community
              </Link>
              <Link
                href='/events'
                className='btn btn-primary btn-sm justify-center'
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className='w-4 h-4 mr-2' />
                Next Event
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
