import {
  Shield,
  Users,
  MessageCircle,
  AlertTriangle,
  Mail,
} from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

import { getAboutBySlug } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description:
    'Community guidelines and expected behavior for Cursor Italy members.',
};

export default async function CodeOfConductPage() {
  const codeOfConduct = await getAboutBySlug('code-of-conduct');

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='hero-bg section-padding'>
        <div className='max-w-4xl mx-auto container-padding text-center'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg'>
                <Shield className='w-8 h-8 text-cursor-blue' />
              </div>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                <span className='gradient-text'>Code of Conduct</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                Creating a safe, welcoming, and productive environment for all
                members of our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className='section-padding bg-white'>
        <div className='max-w-7xl mx-auto container-padding'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto'>
                <Users className='w-6 h-6 text-green-600' />
              </div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Inclusive Community
              </h3>
              <p className='text-gray-600 text-sm'>
                Everyone is welcome regardless of background, experience level,
                or identity
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto'>
                <MessageCircle className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Respectful Communication
              </h3>
              <p className='text-gray-600 text-sm'>
                Professional, constructive, and kind interactions in all spaces
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto'>
                <Shield className='w-6 h-6 text-purple-600' />
              </div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Safe Environment
              </h3>
              <p className='text-gray-600 text-sm'>
                Zero tolerance for harassment, discrimination, or harmful
                behavior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-4xl mx-auto container-padding'>
          {codeOfConduct && (
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12'>
              <div
                className='prose-custom'
                dangerouslySetInnerHTML={{ __html: codeOfConduct.content }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Reporting Section */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
              Need to Report an Issue?
            </h2>
            <p className='text-lg text-gray-600'>
              We take all reports seriously and handle them with confidentiality
              and care
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Emergency Contact */}
            <div className='bg-red-50 border border-red-200 rounded-2xl p-6'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <AlertTriangle className='w-6 h-6 text-red-600' />
                </div>
                <div className='space-y-2'>
                  <h3 className='text-lg font-semibold text-red-900'>
                    Immediate Safety Concerns
                  </h3>
                  <p className='text-red-700 text-sm'>
                    If you are in immediate danger or experiencing harassment at
                    an event, please:
                  </p>
                  <ul className='space-y-1 text-red-700 text-sm'>
                    <li>• Contact venue security or local authorities</li>
                    <li>• Find an organizer immediately</li>
                    <li>• Call emergency services if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Issues */}
            <div className='bg-blue-50 border border-blue-200 rounded-2xl p-6'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-blue-600' />
                </div>
                <div className='space-y-2'>
                  <h3 className='text-lg font-semibold text-blue-900'>
                    Community Issues
                  </h3>
                  <p className='text-blue-700 text-sm'>
                    For violations of our Code of Conduct or community issues:
                  </p>
                  <div className='space-y-2'>
                    <div className='text-blue-700 text-sm'>
                      Email:{' '}
                      <span className='font-mono bg-blue-100 px-2 py-1 rounded'>
                        organizers@cursor-italy.dev
                      </span>
                    </div>
                    <div className='text-blue-700 text-sm'>
                      Anonymous form:{' '}
                      <Link href='#' className='underline'>
                        Report Anonymously
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What to Include */}
          <div className='mt-12 bg-gray-50 rounded-2xl p-6'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              What to Include in Your Report
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-medium text-gray-900 mb-2'>
                  Required Information:
                </h4>
                <ul className='space-y-1 text-gray-600 text-sm'>
                  <li>• Description of what happened</li>
                  <li>• When and where it occurred</li>
                  <li>• Your contact information</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium text-gray-900 mb-2'>
                  Helpful (if available):
                </h4>
                <ul className='space-y-1 text-gray-600 text-sm'>
                  <li>• Names of people involved</li>
                  <li>• Witnesses or supporting evidence</li>
                  <li>• Screenshots or messages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
              Our Response Process
            </h2>
            <p className='text-lg text-gray-600'>
              How we handle reports and ensure fair resolution
            </p>
          </div>

          <div className='space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='w-8 h-8 bg-cursor-blue text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm'>
                1
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 mb-1'>
                  Acknowledgment
                </h3>
                <p className='text-gray-600'>
                  We will acknowledge receipt of your report within 24 hours.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-8 h-8 bg-cursor-blue text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm'>
                2
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 mb-1'>
                  Investigation
                </h3>
                <p className='text-gray-600'>
                  We will investigate all reports fairly, confidentially, and
                  thoroughly.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-8 h-8 bg-cursor-blue text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm'>
                3
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 mb-1'>Action</h3>
                <p className='text-gray-600'>
                  Appropriate action will be taken based on our findings and the
                  severity of the issue.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-8 h-8 bg-cursor-blue text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm'>
                4
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 mb-1'>Follow-up</h3>
                <p className='text-gray-600'>
                  We will follow up with the reporter on the outcome and any
                  actions taken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding text-center'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold gradient-text mb-4'>
                Questions?
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                If you have questions about this Code of Conduct or need
                clarification on community guidelines
              </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='mailto:organizers@cursor-italy.dev'
                className='btn btn-primary'
              >
                <Mail className='w-4 h-4 mr-2' />
                Contact Organizers
              </Link>
              <Link href='/about' className='btn btn-secondary'>
                Learn About Us
              </Link>
            </div>

            <div className='text-sm text-gray-500 max-w-2xl mx-auto'>
              This Code of Conduct is a living document that may be updated as
              our community grows and evolves. All community members will be
              notified of any significant changes.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
