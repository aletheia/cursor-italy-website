import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getEventBySlug } from '@/lib/markdown';

interface LivePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: LivePageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Live Stream Not Found',
    };
  }

  return {
    title: `${event.title} - Live Stream - Cursor Italy`,
    description: `Watch ${event.title} live`,
    openGraph: {
      title: `${event.title} - Live Stream`,
      description: `Watch ${event.title} live`,
      images: event.image ? [event.image] : [],
    },
  };
}

export default async function LivePage({ params }: LivePageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  // YouTube video ID - extract from URL or set directly
  const videoId = 'mV8gD8q9eP8';

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <section className='bg-white border-b'>
        <div className='max-w-7xl mx-auto container-padding py-6'>
          <Link
            href={`/events/${slug}`}
            className='inline-flex items-center text-cursor-blue hover:text-blue-700 transition-colors duration-200 mb-4'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Event Details
          </Link>

          <h1 className='text-3xl lg:text-4xl font-bold text-gray-900'>
            {event.title} - Live Stream
          </h1>
        </div>
      </section>

      {/* Live Stream */}
      <section className='section-padding'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            {/* YouTube Embed */}
            <div
              className='relative w-full'
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={event.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </div>

            {/* Event Info Below Stream */}
            <div className='p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                About This Event
              </h2>
              <p className='text-lg text-gray-600 mb-6'>{event.description}</p>

              <div className='flex flex-wrap gap-4'>
                <Link href={`/events/${slug}`} className='btn btn-primary'>
                  View Event Details
                </Link>
                {event.registrationUrl && (
                  <Link
                    href={event.registrationUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-secondary'
                  >
                    Register for Future Events
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className='mt-12'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Today's Speakers
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {event.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl p-6 shadow-md'
                  >
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {speaker.name}
                    </h3>
                    <h4 className='text-lg font-semibold text-cursor-blue mb-3'>
                      {speaker.topic}
                    </h4>
                    <p className='text-gray-600'>{speaker.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
