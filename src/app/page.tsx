import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Users, Zap, Calendar, MessageCircle, Rocket } from 'lucide-react';
import Hero from '@/components/Hero';
import EventCard from '@/components/EventCard';
import SponsorGrid from '@/components/SponsorGrid';
import { getUpcomingEvents, getAllSponsors } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cursor Italy - Milano AI Development Community',
  description: 'Join Italy\'s premier community for AI-powered development with Cursor. Monthly meetups, workshops, and networking in Milano.',
};

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents();
  const sponsors = await getAllSponsors();
  
  const nextEvent = upcomingEvents[0];
  const featuredEvents = upcomingEvents.slice(0, 3);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Hero 
        nextEvent={nextEvent ? {
          title: nextEvent.title,
          date: nextEvent.date,
          location: nextEvent.location,
          registrationUrl: nextEvent.registrationUrl
        } : undefined}
        memberCount={14}
      />

      {/* What We Do Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together Italy's most passionate developers to explore the future of AI-powered development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-milano-gradient rounded-2xl flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Live Coding Sessions
              </h3>
              <p className="text-gray-600">
                Watch experts build real applications with Cursor's AI capabilities, from idea to deployment in minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-milano-gradient rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Community Networking
              </h3>
              <p className="text-gray-600">
                Connect with like-minded developers, share experiences, and build lasting professional relationships.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-milano-gradient rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                AI-Powered Workshops
              </h3>
              <p className="text-gray-600">
                Hands-on workshops where you'll learn to leverage AI for faster development and better products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {featuredEvents.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600">
                  Don't miss these exciting opportunities to learn and connect
                </p>
              </div>
              <Link
                href="/events"
                className="btn btn-secondary hidden sm:flex"
              >
                All Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => (
                <EventCard
                  key={event.slug}
                  event={event}
                  variant={index === 0 ? 'featured' : 'default'}
                />
              ))}
            </div>

            <div className="text-center mt-12 sm:hidden">
              <Link
                href="/events"
                className="btn btn-secondary"
              >
                View All Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Community Stats */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Growing Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a thriving ecosystem of developers, creators, and innovators across Italy
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">14+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">1</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">Monthly</div>
              <div className="text-gray-600">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">AI-Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
                  Why Join Cursor Italy?
                </h2>
                <p className="text-lg text-gray-600">
                  Be part of Italy's most innovative developer community and stay ahead in the AI revolution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Learn from Experts</h3>
                    <p className="text-gray-600">Get insights from industry leaders and Cursor ambassadors like Luca Bianchi.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Regular Events</h3>
                    <p className="text-gray-600">Monthly meetups with workshops, talks, and networking opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Speaking Opportunities</h3>
                    <p className="text-gray-600">Share your expertise through our open CFP system powered by Sessionize.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Vibrant Network</h3>
                    <p className="text-gray-600">Connect with developers, designers, and entrepreneurs across Italy.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={siteConfig.social.meetup || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Join on Meetup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="btn btn-secondary"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-milano-gradient rounded-2xl p-8 text-center text-white">
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Build?</h3>
                    <p className="text-white/90">
                      Join us in shaping the future of development with AI-powered tools and a passionate community.
                    </p>
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Monthly meetups in Milano</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Hands-on coding workshops</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Networking with industry experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Access to latest AI development tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      {sponsors.length > 0 && (
        <SponsorGrid 
          sponsors={sponsors} 
          title="Our Amazing Sponsors"
        />
      )}

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
                Ready to Join the Community?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of Italy's premier AI development community. Learn, connect, and build the future together.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={siteConfig.social.meetup || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Join on Meetup
              </Link>
              <Link
                href="/events"
                className="btn btn-secondary btn-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View Events
              </Link>
            </div>

            <div className="text-sm text-gray-500">
              Or follow us on{' '}
              <Link 
                href={siteConfig.social.linkedin || '#'}
                className="text-cursor-blue hover:text-blue-700 transition-colors duration-200"
              >
                LinkedIn
              </Link>
              {' '}and{' '}
              <Link 
                href={siteConfig.social.luma || '#'}
                className="text-cursor-blue hover:text-blue-700 transition-colors duration-200"
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