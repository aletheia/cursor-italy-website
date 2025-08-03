import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, Users, Calendar, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Cursor Italy organizers. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="gradient-text">Contact Us</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions, suggestions, or want to get involved? We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you want to speak at an event, become a sponsor, or just say hello, we're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {/* Organizer Info */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cursor-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-cursor-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Organizer</h3>
                    <p className="text-gray-600">{siteConfig.organizer}</p>
                    <p className="text-sm text-gray-500">{siteConfig.location}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">{siteConfig.location}</p>
                    <p className="text-sm text-gray-500">Events typically held in Milano</p>
                  </div>
                </div>

                {/* Events */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Events</h3>
                    <p className="text-gray-600">Monthly meetups</p>
                    <p className="text-sm text-gray-500">Usually at 18:30 CEST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ways to Connect
              </h3>

              <div className="space-y-4">
                {/* Join Community */}
                <Link
                  href={siteConfig.social.meetup || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          Join Our Community
                        </h4>
                        <p className="text-sm text-gray-600">Connect on Meetup</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </Link>

                {/* LinkedIn */}
                <Link
                  href={siteConfig.social.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          Follow on LinkedIn
                        </h4>
                        <p className="text-sm text-gray-600">Stay updated with news</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </Link>

                {/* Propose a Talk */}
                <Link
                  href={siteConfig.social.sessionize || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          Propose a Talk
                        </h4>
                        <p className="text-sm text-gray-600">Submit your session</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                  </div>
                </Link>

                {/* Email Contact */}
                <div className="block p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-sm text-gray-600">hello@cursor-italy.dev</p>
                      <p className="text-xs text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How can I speak at an event?</h3>
              <p className="text-gray-600">
                We welcome speakers of all levels! Submit your proposal through our Sessionize page or reach out to us directly. We're particularly interested in AI development, Cursor tips, and related topics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How can I become a sponsor?</h3>
              <p className="text-gray-600">
                We offer various sponsorship opportunities. Contact us via email or LinkedIn to discuss how your organization can support our community and get exposure to our talented developer community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Where are events held?</h3>
              <p className="text-gray-600">
                Our events are typically held in Milano, Italy. We partner with local tech companies and coworking spaces to provide great venues for our meetups.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How can I stay updated?</h3>
              <p className="text-gray-600">
                Join our Meetup group to get notified about upcoming events, follow us on LinkedIn for news and updates, or check our website regularly for the latest information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 