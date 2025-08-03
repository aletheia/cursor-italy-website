import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CardProps } from '@/lib/types';

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  image,
  href,
  external = false,
  className,
  ...props
}) => {
  const baseClasses =
    'bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md';

  const content = (
    <div className={clsx(baseClasses, className)} {...props}>
      {image && (
        <div className='relative h-48 overflow-hidden rounded-t-xl'>
          <Image
            src={image}
            alt={title || 'Card image'}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      )}
      <div className='p-6'>
        {title && (
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h3>
        )}
        {description && <p className='text-gray-600 mb-4'>{description}</p>}
        {children}
      </div>
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='block hover:shadow-lg hover:-translate-y-1 transition-all duration-200'
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className='block hover:shadow-lg hover:-translate-y-1 transition-all duration-200'
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
