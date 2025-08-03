'use client';

import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/lib/config';

interface HeroProps {
  nextEvent?: {
    title: string;
    date: string;
    location: string;
    registrationUrl?: string;
  };
  memberCount?: number;
}

export default function Hero({ nextEvent, memberCount = 14 }: HeroProps) {
  return (
    <section className='relative overflow-hidden hero-bg'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      {/* Hero Content */}
      <div className='relative max-w-7xl mx-auto container-padding section-padding'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200'>
                <span className='text-sm font-medium text-gray-700'>
                  🇮🇹 Welcome to Italy's AI Development Community
                </span>
              </div>

              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                <span className='gradient-text'>Cursor Italy</span>
                <br />
                <span className='text-gray-700'>Meetup</span>
              </h1>

              <p className='text-xl text-gray-600 max-w-2xl'>
                The community for builders, creators, and curious minds shaping
                the future with AI. Join developers across Italy who are
                passionate about Cursor and AI-powered development.
              </p>
            </div>

            {/* Stats */}
            <div className='flex flex-wrap items-center gap-6'>
              <div className='flex items-center space-x-2'>
                <Users className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>
                  {memberCount}+ Members
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>
                  {siteConfig.location}
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Calendar className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>
                  Monthly Events
                </span>
              </div>
            </div>

            {/* Next Event Card */}
            {nextEvent && (
              <div className='bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 space-y-4'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='font-medium text-gray-900'>Next Event</span>
                </div>

                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg text-gray-900 line-clamp-2'>
                    {nextEvent.title}
                  </h3>
                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='w-4 h-4' />
                      <span>
                        {new Date(nextEvent.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <MapPin className='w-4 h-4' />
                      <span>{nextEvent.location}</span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-wrap gap-3'>
                  <Link
                    href={nextEvent.registrationUrl || '/events'}
                    className='btn btn-primary btn-sm flex-1 sm:flex-none'
                  >
                    Register Now
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                  <Link
                    href='/events'
                    className='btn btn-secondary btn-sm flex-1 sm:flex-none'
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4'>
              <Link
                href={siteConfig.social.meetup || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary btn-lg'
              >
                <Users className='w-5 h-5 mr-2' />
                Join Community
              </Link>
              <Link href='/about' className='btn btn-secondary btn-lg'>
                Learn More
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className='relative'>
            <div className='relative z-10'>
              {/* Main Image */}
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/cursor_milano_landscape.jpg'
                  alt='Cursor Milano Meetup'
                  fill
                  className='object-cover'
                  priority
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-hero-gradient'></div>

                {/* Floating Badge */}
                <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='font-medium text-sm text-gray-900'>
                      Live Community
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce'>
                <div className='text-center'>
                  <div className='font-bold text-xl gradient-text'>AI</div>
                  <div className='text-xs text-gray-600'>Powered</div>
                </div>
              </div>

              <div className='absolute -bottom-6 -left-6 w-32 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center'>
                <div className='text-center'>
                  <div className='font-bold text-lg text-gray-900'>Milano</div>
                  <div className='text-xs text-gray-600'>Tech Hub</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className='absolute inset-0 -z-10'>
              <div className='absolute top-1/4 right-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
              <div className='absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-200'></div>
              <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-400'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          className='w-full h-20 text-white'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            fill='currentColor'
          ></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            fill='currentColor'
          ></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </section>
  );
}
