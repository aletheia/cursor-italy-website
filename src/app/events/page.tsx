import { Calendar, Clock, Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

import EventCard from '@/components/EventCard';
import { siteConfig } from '@/lib/config';
import { getUpcomingEvents, getPastEvents } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join our upcoming events and explore past meetups, workshops, and talks.',
};

export default async function EventsPage() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='hero-bg section-padding'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='text-center space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                <span className='gradient-text'>Events</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Join us for exciting meetups, workshops, and talks about
                AI-powered development with Cursor
              </p>
            </div>

            {/* Quick Stats */}
            <div className='flex flex-wrap justify-center gap-8'>
              <div className='flex items-center space-x-2'>
                <Calendar className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>
                  Monthly Meetups
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Clock className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>
                  Usually 18:30 CEST
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Plus className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>Open CFP</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href={siteConfig.social.sessionize || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'
              >
                <Plus className='w-4 h-4 mr-2' />
                Propose a Talk
              </Link>
              <Link
                href={siteConfig.social.meetup || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 ? (
        <section className='section-padding bg-white'>
          <div className='max-w-7xl mx-auto container-padding'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Upcoming Events
              </h2>
              <p className='text-lg text-gray-600'>
                Don't miss these exciting opportunities to learn and connect
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={event.slug}
                  event={event}
                  variant={index === 0 ? 'featured' : 'default'}
                  showContent={true}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className='section-padding bg-white'>
          <div className='max-w-4xl mx-auto container-padding text-center'>
            <div className='space-y-6'>
              <div className='w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto'>
                <Calendar className='w-8 h-8 text-gray-400' />
              </div>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                  No Upcoming Events Yet
                </h2>
                <p className='text-gray-600 mb-6'>
                  We're planning our next amazing event! Stay tuned for updates
                  or join our community to be the first to know.
                </p>
              </div>
              <div className='flex flex-wrap justify-center gap-4'>
                <Link
                  href={siteConfig.social.meetup || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary'
                >
                  Join Community for Updates
                </Link>
                <Link
                  href={siteConfig.social.sessionize || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-secondary'
                >
                  Propose a Talk
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className='section-padding bg-gray-50'>
          <div className='max-w-7xl mx-auto container-padding'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Past Events
              </h2>
              <p className='text-lg text-gray-600'>
                Explore what we've accomplished together
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {pastEvents.map(event => (
                <EventCard key={event.slug} event={event} variant='compact' />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Speaking Opportunities */}
      <section className='section-padding bg-white'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Content */}
            <div className='space-y-6'>
              <div>
                <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                  Want to Speak?
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  We welcome speakers from all backgrounds and experience
                  levels. Share your knowledge with our passionate community.
                </p>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start space-x-4'>
                  <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-green-600 text-xs font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Open to All Levels
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      Whether you're a beginner or expert, we value diverse
                      perspectives and experiences.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-blue-600 text-xs font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Diverse Topics
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      AI development, Cursor tips, product management, design,
                      entrepreneurship, and more.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-purple-600 text-xs font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Supportive Environment
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      Our community is friendly and supportive, perfect for
                      first-time speakers.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Link
                  href={siteConfig.social.sessionize || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary'
                >
                  Submit Your Proposal
                  <Plus className='w-4 h-4 ml-2' />
                </Link>
                <Link href='/contact' className='btn btn-secondary'>
                  Contact Organizers
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className='relative'>
              <div className='bg-milano-gradient rounded-2xl p-8 text-center text-white'>
                <div className='space-y-6'>
                  <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto'>
                    <Plus className='w-8 h-8' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>
                      Share Your Expertise
                    </h3>
                    <p className='text-white/90 text-sm mb-4'>
                      Join our lineup of amazing speakers and help shape the
                      future of AI development in Italy.
                    </p>
                  </div>
                  <div className='space-y-3 text-left text-sm'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                      <span>Open Discussion</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                      <span>Full presentations (20-30 minutes)</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                      <span>Live coding sessions</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                      <span>Hands-on sessions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-4xl mx-auto container-padding text-center'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Never Miss an Event
              </h2>
              <p className='text-lg text-gray-600'>
                Join our community to get notified about upcoming events,
                workshops, and special announcements
              </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href={siteConfig.social.meetup || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary btn-lg'
              >
                Join on Meetup
              </Link>
              <Link
                href={siteConfig.social.linkedin || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary btn-lg'
              >
                Follow on LinkedIn
              </Link>
            </div>

            <div className='text-sm text-gray-500'>
              Or stay updated on{' '}
              <Link
                href={siteConfig.social.luma || '#'}
                className='text-cursor-blue hover:text-blue-700 transition-colors duration-200'
              >
                Lu.ma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
