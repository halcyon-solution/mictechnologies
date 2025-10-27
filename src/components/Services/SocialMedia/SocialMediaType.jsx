import React, { useState } from 'react';
import { TrendingUp, Users, Target, Zap, BarChart3, Sparkles, Share2, Briefcase, Video, MessageCircle, RefreshCw, Brain } from 'lucide-react';

export default function SocialMediaType() {
  const [activeTab, setActiveTab] = useState('facebook');

  const services = [
    { id: 'facebook', name: 'Facebook & Instagram', icon: Share2 },
    { id: 'linkedin', name: 'LinkedIn (B2B)', icon: Briefcase },
    { id: 'tiktok', name: 'TikTok & Snapchat', icon: Video },
    { id: 'twitter', name: 'Twitter & Pinterest', icon: MessageCircle },
    { id: 'retargeting', name: 'Smart Retargeting', icon: RefreshCw },
    { id: 'ai', name: 'AI-Powered Campaigns', icon: Brain }
  ];

  const contentMap = {
    facebook: {
      title: 'Transform Your Social Presence',
      description: 'Connect with billions of users on the world\'s most powerful platforms. We craft campaigns that stop the scroll and spark conversations.',
      features: [
        { icon: Target, title: 'Precision Targeting', desc: 'Reach your ideal customers with laser-focused audience strategies' },
        { icon: Sparkles, title: 'Creative Excellence', desc: 'Eye-catching visuals and compelling copy that drives action' },
        { icon: TrendingUp, title: 'Growth Focused', desc: 'Every campaign designed to boost your brand and bottom line' }
      ]
    },
    linkedin: {
      title: 'Elevate Your B2B Game',
      description: 'Position your startup as an industry leader. Connect with decision-makers and professionals who matter to your business.',
      features: [
        { icon: Users, title: 'Professional Network', desc: 'Tap into a community of business professionals and thought leaders' },
        { icon: Target, title: 'B2B Expertise', desc: 'Specialized strategies for reaching corporate audiences' },
        { icon: BarChart3, title: 'Lead Quality', desc: 'Generate high-value leads that convert into partnerships' }
      ]
    },
    tiktok: {
      title: 'Go Viral, Go Big',
      description: 'Capture the attention of younger audiences with short-form video content that entertains, educates, and converts.',
      features: [
        { icon: Video, title: 'Trending Content', desc: 'Stay ahead with viral-worthy content strategies' },
        { icon: Zap, title: 'Quick Impact', desc: 'Reach millions in hours with the right creative approach' },
        { icon: Users, title: 'Gen Z & Millennials', desc: 'Connect with the most engaged social media generation' }
      ]
    },
    twitter: {
      title: 'Join The Conversation',
      description: 'Build your brand voice and engage in real-time discussions. Perfect for news, trends, and community building.',
      features: [
        { icon: MessageCircle, title: 'Real-Time Engagement', desc: 'Be part of trending conversations as they happen' },
        { icon: Share2, title: 'Viral Potential', desc: 'One great tweet can reach millions organically' },
        { icon: Users, title: 'Community Building', desc: 'Foster loyal followers and brand advocates' }
      ]
    },
    retargeting: {
      title: 'Never Lose A Lead',
      description: 'Turn window shoppers into customers. Reconnect with interested visitors and guide them back to convert.',
      features: [
        { icon: RefreshCw, title: 'Smart Follow-Up', desc: 'Automatically re-engage visitors who showed interest' },
        { icon: Target, title: 'Behavior Based', desc: 'Personalized ads based on user actions and interests' },
        { icon: TrendingUp, title: 'Higher Conversions', desc: 'Convert up to 70% more than cold traffic campaigns' }
      ]
    },
    ai: {
      title: 'Work Smarter, Not Harder',
      description: 'Leverage cutting-edge AI to optimize every dollar spent. Get better results with data-driven decisions.',
      features: [
        { icon: Brain, title: 'AI Optimization', desc: 'Machine learning finds the best audiences and placements' },
        { icon: BarChart3, title: 'Performance Tracking', desc: 'Real-time analytics and insights at your fingertips' },
        { icon: Zap, title: 'Budget Efficiency', desc: 'Maximize ROI with intelligent budget allocation' }
      ]
    }
  };

  const activeContent = contentMap[activeTab];
  const ActiveIcon = services.find(s => s.id === activeTab)?.icon;

  return (
    <section className="w-full min-h-screen text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-pink-500 rounded"></div>
            <div className="w-12 h-1 bg-pink-500 rounded"></div>
            <div className="w-12 h-1 bg-pink-500 rounded"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Social Media Marketing Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From startup to success story - we help ambitious brands like yours dominate social media and drive real business results
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 md:p-5 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeTab === service.id
                    ? 'bg-pink-600 shadow-lg shadow-pink-500/50'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                <p className="text-xs md:text-sm font-medium text-center leading-tight">
                  {service.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className=" rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                {ActiveIcon && <ActiveIcon className="w-10 h-10 md:w-12 md:h-12 text-pink-500" />}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {activeContent.title}
                </h2>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                {activeContent.description}
              </p>

              <div className="space-y-4 md:space-y-6">
                {activeContent.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="bg-pink-600 p-2 md:p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FeatureIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-400">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-64 md:h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative h-full flex items-center justify-center">
                {ActiveIcon && (
                  <div className="relative">
                    <ActiveIcon className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-pink-500 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
                          {activeTab === 'facebook' && '3B+'}
                          {activeTab === 'linkedin' && '900M+'}
                          {activeTab === 'tiktok' && '1B+'}
                          {activeTab === 'twitter' && '500M+'}
                          {activeTab === 'retargeting' && '70%'}
                          {activeTab === 'ai' && 'AI'}
                        </div>
                        <div className="text-sm md:text-base lg:text-lg text-gray-300">
                          {activeTab === 'facebook' && 'Monthly Users'}
                          {activeTab === 'linkedin' && 'Professionals'}
                          {activeTab === 'tiktok' && 'Active Users'}
                          {activeTab === 'twitter' && 'Daily Users'}
                          {activeTab === 'retargeting' && 'Better ROI'}
                          {activeTab === 'ai' && 'Powered'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Waves on Social Media?
          </h3>
          <p className="text-base md:text-lg text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join forward-thinking startups that are already growing their brands with Mic Tech's social media expertise
          </p>
          <button className="bg-white text-pink-600 px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Let's Start Your Journey
          </button>
        </div> */}

      </div>
    </section>
  );
}