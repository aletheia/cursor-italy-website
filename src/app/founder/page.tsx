import { Metadata } from 'next';
import Link from 'next/link';
import { Award, ExternalLink, MessageCircle, Users, Calendar, Code, ArrowRight } from 'lucide-react';
import { getAboutBySlug } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Meet Our Founder - Luca Bianchi',
  description: 'Learn about Luca Bianchi, founder of Cursor Italy and Cursor Ambassador, his vision, and journey in building Italy\'s AI development community.',
};

export default async function FounderPage() {
  const founder = await getAboutBySlug('founder');

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="hero-bg section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
                  <Award className="w-4 h-4 text-cursor-blue mr-2" />
                  <span className="text-sm font-medium text-gray-700">Cursor Ambassador</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="gradient-text">Luca Bianchi</span>
                </h1>
                
                <p className="text-xl text-gray-600">
                  Founder of Cursor Italy, Cursor Ambassador, and passionate advocate for AI-powered development in Italy.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-cursor-blue" />
                    <div>
                      <div className="font-semibold text-gray-900">14+</div>
                      <div className="text-sm text-gray-600">Community Members</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-8 h-8 text-cursor-blue" />
                    <div>
                      <div className="font-semibold text-gray-900">2024</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={siteConfig.social.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Connect on LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={siteConfig.social.meetup || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Join Community
                  <Users className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Founder Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder for founder image */}
                  <div className="w-full h-full bg-milano-gradient flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-16 h-16" />
                      </div>
                      <div className="text-2xl font-bold mb-2">Luca Bianchi</div>
                      <div className="text-lg opacity-90 mb-4">Founder & Ambassador</div>
                      <div className="text-sm opacity-75">Building Italy's AI Future</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 text-center">
                  <Award className="w-8 h-8 text-cursor-blue mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Cursor</div>
                  <div className="text-xs text-gray-600">Ambassador</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 text-center">
                  <Code className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">AI</div>
                  <div className="text-xs text-gray-600">Advocate</div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          {founder && (
            <div 
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: founder.content }}
            />
          )}
        </div>
      </section>

      {/* Achievements & Impact */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Impact & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Luca's contributions to the Italian tech community and AI development ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Community Building */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Builder
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Founded Cursor Italy and built a thriving community of 14+ passionate developers in Milano
              </p>
              <div className="text-2xl font-bold text-blue-600">14+</div>
              <div className="text-xs text-gray-500">Active Members</div>
            </div>

            {/* Speaking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Speaker & Educator
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Regular speaker on AI development, product specification, and community building
              </p>
              <div className="text-2xl font-bold text-green-600">Expert</div>
              <div className="text-xs text-gray-500">AI Development</div>
            </div>

            {/* Ambassador */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cursor Ambassador
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Official representative of Cursor in Italy, promoting AI-powered development tools
              </p>
              <div className="text-2xl font-bold text-purple-600">Official</div>
              <div className="text-xs text-gray-500">Ambassador</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
                  Vision for the Future
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Luca envisions an Italy where every developer has access to cutting-edge AI tools and a supportive community to accelerate their growth and innovation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-cursor-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Democratize AI Development</h3>
                    <p className="text-gray-600 text-sm">Make advanced AI development tools accessible to developers across Italy, regardless of their background or experience level.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-cursor-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Foster Innovation</h3>
                    <p className="text-gray-600 text-sm">Create an environment where developers can experiment, learn, and build innovative solutions using AI-powered tools.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-cursor-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Build Community</h3>
                    <p className="text-gray-600 text-sm">Connect passionate developers across Italy to share knowledge, collaborate on projects, and grow together.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-milano-gradient rounded-2xl p-8 text-center text-white">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Future is AI-Powered</h3>
                    <p className="text-white/90 text-sm">
                      "We're not just learning to use AI tools—we're building the future of development itself."
                    </p>
                  </div>
                  <div className="text-xs opacity-75">- Luca Bianchi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
                Join Luca's Vision
              </h2>
              <p className="text-lg text-gray-600">
                Be part of the movement that's shaping the future of AI development in Italy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                  <Users className="w-8 h-8 text-cursor-blue mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Join the Community
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Connect with fellow developers, attend events, and be part of our growing community.
                  </p>
                  <Link
                    href={siteConfig.social.meetup || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full"
                  >
                    Join on Meetup
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                  <MessageCircle className="w-8 h-8 text-cursor-blue mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Speak at an Event
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Share your expertise and contribute to the community through our open CFP system.
                  </p>
                  <Link
                    href={siteConfig.social.sessionize || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full"
                  >
                    Submit Proposal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500">
                Want to connect directly with Luca?{' '}
                <Link 
                  href={siteConfig.social.linkedin || '#'}
                  className="text-cursor-blue hover:text-blue-700 transition-colors duration-200"
                >
                  Find him on LinkedIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}