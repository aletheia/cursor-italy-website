import {
  Users,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/lib/config';
import { getAboutBySlug } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Cursor Italy, our mission, and our founder Luca Bianchi - Cursor Ambassador.',
};

export default async function AboutPage() {
  const [description, founder] = await Promise.all([
    getAboutBySlug('description'),
    getAboutBySlug('founder'),
  ]);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='hero-bg section-padding'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='text-center space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                About <span className='gradient-text'>Cursor Italy</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Building Italy's premier community for AI-powered development,
                one passionate developer at a time.
              </p>
            </div>

            {/* Quick Stats */}
            <div className='flex flex-wrap justify-center gap-8'>
              <div className='flex items-center space-x-2'>
                <Users className='w-5 h-5 text-cursor-blue' />
                <span className='font-semibold text-gray-900'>14+ Members</span>
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
                  Founded 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          {description && (
            <div
              className='prose-custom'
              dangerouslySetInnerHTML={{ __html: description.content }}
            />
          )}
        </div>
      </section>

      {/* Founder Section */}
      {founder && (
        <section className='section-padding bg-gray-50'>
          <div className='max-w-7xl mx-auto container-padding'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Founder Image */}
              <div className='order-2 lg:order-1'>
                <div className='relative'>
                  <div className='aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200'>
                    {/* Placeholder for founder image */}
                    <div className='w-full h-full bg-milano-gradient flex items-center justify-center'>
                      <div className='text-center text-white'>
                        <div className='w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                          <Users className='w-12 h-12' />
                        </div>
                        <div className='text-lg font-semibold'>
                          Luca Bianchi
                        </div>
                        <div className='text-sm opacity-90'>
                          Founder & Cursor Ambassador
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className='absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 text-center'>
                    <Award className='w-8 h-8 text-cursor-blue mx-auto mb-2' />
                    <div className='text-sm font-semibold text-gray-900'>
                      Cursor
                    </div>
                    <div className='text-xs text-gray-600'>Ambassador</div>
                  </div>
                </div>
              </div>

              {/* Founder Content */}
              <div className='order-1 lg:order-2 space-y-6'>
                <div>
                  <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                    Meet Our Founder
                  </h2>
                  <div
                    className='prose-custom'
                    dangerouslySetInnerHTML={{ __html: founder.content }}
                  />
                </div>

                <div className='flex flex-wrap gap-4'>
                  <Link
                    href={siteConfig.social.linkedin || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary'
                  >
                    Connect on LinkedIn
                    <ExternalLink className='w-4 h-4 ml-2' />
                  </Link>
                  <Link href='/founder' className='btn btn-secondary'>
                    Full Bio
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Values */}
      <section className='section-padding bg-white'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
              Our Values
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              The principles that guide our community and shape our events
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Value 1 */}
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto'>
                <Users className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900'>
                Inclusive Community
              </h3>
              <p className='text-gray-600'>
                We welcome developers of all skill levels and backgrounds,
                fostering an environment where everyone can learn and grow.
              </p>
            </div>

            {/* Value 2 */}
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto'>
                <Award className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900'>
                Excellence in Learning
              </h3>
              <p className='text-gray-600'>
                We strive to provide high-quality educational content and
                hands-on experiences that push the boundaries of AI development.
              </p>
            </div>

            {/* Value 3 */}
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto'>
                <ExternalLink className='w-8 h-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900'>
                Open Collaboration
              </h3>
              <p className='text-gray-600'>
                We believe in the power of sharing knowledge, collaborating on
                projects, and building together as a community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-4xl mx-auto container-padding text-center'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Community Guidelines
              </h2>
              <p className='text-lg text-gray-600'>
                We maintain a safe, welcoming, and productive environment for
                all members
              </p>
            </div>

            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Our Commitments
                  </h3>
                  <ul className='space-y-2 text-left text-gray-600'>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Respectful and inclusive environment</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>High-quality educational content</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Opportunities for all skill levels</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Open knowledge sharing</span>
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Community Expectations
                  </h3>
                  <ul className='space-y-2 text-left text-gray-600'>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Be respectful and professional</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Share knowledge and help others</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Follow event guidelines</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                      <span>Contribute positively to discussions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='mt-8 pt-8 border-t border-gray-200'>
                <Link href='/code-of-conduct' className='btn btn-primary'>
                  Read Full Code of Conduct
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding text-center'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Become Part of Our Story
              </h2>
              <p className='text-lg text-gray-600'>
                Join us in building the future of AI-powered development in
                Italy
              </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href={siteConfig.social.meetup || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary btn-lg'
              >
                <Users className='w-5 h-5 mr-2' />
                Join Community
              </Link>
              <Link href='/events' className='btn btn-secondary btn-lg'>
                <Calendar className='w-5 h-5 mr-2' />
                Attend Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
