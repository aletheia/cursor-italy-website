import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/lib/config';
import { getEventBySlug, getAllEvents } from '@/lib/markdown';

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map(event => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} - Cursor Italy`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: event.image ? [event.image] : [],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const isUpcoming = eventDate >= new Date();

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='hero-bg section-padding'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Content */}
            <div className='space-y-8'>
              <div>
                <Link
                  href='/events'
                  className='inline-flex items-center text-cursor-blue hover:text-blue-700 transition-colors duration-200 mb-6'
                >
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Back to Events
                </Link>

                <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
                  {event.title}
                </h1>

                <p className='text-xl text-gray-600 mb-8'>
                  {event.description}
                </p>
              </div>

              {/* Event Details */}
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Calendar className='w-5 h-5 text-cursor-blue' />
                  <span className='text-gray-700'>
                    {eventDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <div className='flex items-center space-x-3'>
                  <Clock className='w-5 h-5 text-cursor-blue' />
                  <span className='text-gray-700'>
                    {event.startTime} - {event.endTime} {event.timezone}
                  </span>
                </div>

                <div className='flex items-center space-x-3'>
                  <MapPin className='w-5 h-5 text-cursor-blue' />
                  <span className='text-gray-700'>{event.location}</span>
                </div>

                <div className='flex items-center space-x-3'>
                  <Users className='w-5 h-5 text-cursor-blue' />
                  <span className='text-gray-700'>
                    {event.attendees} / {event.maxAttendees} attendees
                  </span>
                </div>
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  {event.tags.map(tag => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-cursor-blue/10 text-cursor-blue rounded-full text-sm font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Registration Button */}
              {event.registrationUrl && (
                <div className='pt-4'>
                  <Link
                    href={event.registrationUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary btn-lg inline-flex items-center'
                  >
                    {isUpcoming ? 'Register Now' : 'View Event'}
                    <ExternalLink className='w-4 h-4 ml-2' />
                  </Link>
                </div>
              )}
            </div>

            {/* Event Image */}
            <div className='relative'>
              {(event.eventDetailImage || event.image) && (
                <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src={(event.eventDetailImage || event.image) as string}
                    alt={event.title}
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='prose prose-lg max-w-none'>
            <div dangerouslySetInnerHTML={{ __html: event.content }} />
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      {event.speakers && event.speakers.length > 0 && (
        <section className='section-padding bg-gray-50'>
          <div className='max-w-7xl mx-auto container-padding'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Speakers
              </h2>
              <p className='text-lg text-gray-600'>
                Meet the experts sharing their knowledge
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {event.speakers.map((speaker, index) => (
                <div key={index} className='bg-white rounded-2xl p-8 shadow-lg'>
                  <div className='space-y-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {speaker.name}
                    </h3>
                    <h4 className='text-lg font-semibold text-cursor-blue'>
                      {speaker.topic}
                    </h4>
                    <p className='text-gray-600'>{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding text-center'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Join Our Community
              </h2>
              <p className='text-lg text-gray-600'>
                Stay connected with Cursor Italy for more events and updates
              </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href={siteConfig.social.meetup || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'
              >
                Join on Meetup
              </Link>
              <Link
                href={siteConfig.social.linkedin || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                Follow on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
