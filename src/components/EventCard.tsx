import clsx from 'clsx';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Event } from '@/lib/types';

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'featured' | 'compact';
  showContent?: boolean;
}

export default function EventCard({
  event,
  variant = 'default',
  showContent = false,
}: EventCardProps) {
  const isUpcoming = new Date(event.date) >= new Date();
  const eventDate = new Date(event.date);

  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formatTime = (time: string, timezone?: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return (
      date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }) + (timezone ? ` ${timezone}` : '')
    );
  };

  if (variant === 'compact') {
    return (
      <div className='bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200'>
        <div className='flex items-start justify-between'>
          <div className='flex-1 min-w-0'>
            <h3 className='font-semibold text-gray-900 truncate mb-1'>
              {event.title}
            </h3>
            <div className='flex items-center text-sm text-gray-600 mb-2'>
              <Calendar className='w-4 h-4 mr-1' />
              <span>{formattedDate}</span>
              <span className='mx-2'>•</span>
              <Clock className='w-4 h-4 mr-1' />
              <span>{formatTime(event.startTime, event.timezone)}</span>
            </div>
            <div className='flex items-center text-sm text-gray-600'>
              <MapPin className='w-4 h-4 mr-1 flex-shrink-0' />
              <span className='truncate'>{event.location}</span>
            </div>
          </div>

          <div className='ml-4 flex items-center space-x-2'>
            {event.attendees && (
              <div className='flex items-center text-sm text-gray-600'>
                <Users className='w-4 h-4 mr-1' />
                <span>{event.attendees}</span>
              </div>
            )}
            <Link
              href={`/events/${event.slug}`}
              className='text-cursor-blue hover:text-blue-700 transition-colors duration-200'
            >
              <ArrowRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200',
        variant === 'featured' ? 'lg:col-span-2 card-hover' : 'card-hover',
        isUpcoming ? 'ring-2 ring-cursor-blue/20' : ''
      )}
    >
      {/* Event Image */}
      {event.image && (
        <div
          className={clsx(
            'relative overflow-hidden',
            variant === 'featured' ? 'h-64' : 'h-48'
          )}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className='object-cover transition-transform duration-200 hover:scale-105'
          />

          {/* Status Badge */}
          <div className='absolute top-4 left-4'>
            <span
              className={clsx(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
                isUpcoming
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              )}
            >
              {isUpcoming ? 'Upcoming' : 'Past Event'}
            </span>
          </div>

          {/* Date Badge */}
          <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center'>
            <div className='text-sm font-semibold text-gray-900'>
              {eventDate.getDate()}
            </div>
            <div className='text-xs text-gray-600 uppercase'>
              {eventDate.toLocaleDateString('en-US', { month: 'short' })}
            </div>
          </div>
        </div>
      )}

      {/* Event Content */}
      <div className='p-6'>
        <div className='space-y-4'>
          {/* Event Title */}
          <div>
            <h3
              className={clsx(
                'font-semibold text-gray-900 leading-tight',
                variant === 'featured' ? 'text-xl lg:text-2xl' : 'text-lg'
              )}
            >
              {event.title}
            </h3>
            {event.description && (
              <p className='text-gray-600 mt-2 line-clamp-2'>
                {event.description}
              </p>
            )}
          </div>

          {/* Event Details */}
          <div className='space-y-2'>
            <div className='flex items-center text-sm text-gray-600'>
              <Calendar className='w-4 h-4 mr-2 flex-shrink-0' />
              <span>{formattedDate}</span>
              <span className='mx-2'>•</span>
              <Clock className='w-4 h-4 mr-1' />
              <span>{formatTime(event.startTime, event.timezone)}</span>
              {event.endTime && (
                <>
                  <span className='mx-1'>-</span>
                  <span>{formatTime(event.endTime, event.timezone)}</span>
                </>
              )}
            </div>

            <div className='flex items-center text-sm text-gray-600'>
              <MapPin className='w-4 h-4 mr-2 flex-shrink-0' />
              <span className='flex-1'>{event.location}</span>
              {event.locationUrl && (
                <Link
                  href={event.locationUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-cursor-blue hover:text-blue-700 transition-colors duration-200'
                >
                  <ExternalLink className='w-4 h-4' />
                </Link>
              )}
            </div>
          </div>

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {event.tags.map(tag => (
                <span
                  key={tag}
                  className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className='space-y-12'>
              <h4 className='font-medium text-gray-900'>Speakers:</h4>
              <div className='space-y-1'>
                {event.speakers.map((speaker, index) => (
                  <div key={index} className='text-sm'>
                    <span className='font-medium text-gray-900'>
                      {speaker.name}
                    </span>
                    {speaker.topic && (
                      <span className='text-gray-600'> - {speaker.topic}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Preview */}
          {showContent && event.content && (
            <div
              className='prose prose-sm max-w-none text-gray-600'
              dangerouslySetInnerHTML={{
                __html: `${event.content.substring(0, 300)}...`,
              }}
            />
          )}

          {/* Actions */}
          <div className='flex flex-wrap gap-3 pt-4'>
            <Link
              href={`/events/${event.slug}`}
              className='btn btn-primary btn-sm flex-1 sm:flex-none'
            >
              View Details
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>

            {isUpcoming && event.registrationUrl && (
              <Link
                href={event.registrationUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary btn-sm flex-1 sm:flex-none'
              >
                Register
                <ExternalLink className='w-4 h-4 ml-2' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
