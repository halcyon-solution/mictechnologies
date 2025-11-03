import React from 'react';
import { 
  Search, TrendingUp, Target, BarChart3, Globe, Zap, CheckCircle, 
  ArrowRight, Award, Users, Clock, Shield 
} from 'lucide-react';

const SeoMarketing = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FF006E]" />,
      title: "Higher Rankings",
      text: "Achieve top positions on Google and increase your organic search visibility.",
    },
    {
      icon: <Target className="w-6 h-6 text-[#FF006E]" />,
      title: "Targeted Traffic",
      text: "Attract qualified visitors who are actively searching for your products or services.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#FF006E]" />,
      title: "ROI Growth",
      text: "Maximize your marketing ROI with cost-effective SEO strategies that deliver results.",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FF006E]" />,
      title: "Brand Authority",
      text: "Build credibility and establish your brand as an industry leader online.",
    },
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "On-Page SEO Optimization",
      text: "Optimize your website's content, meta tags, headers, and internal linking structure for maximum search engine visibility.",
      points: [
        "Keyword Research & Implementation",
        "Meta Tags & Title Optimization",
        "Content Quality Enhancement",
        "Internal Linking Strategy",
      ],
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Technical SEO Services",
      text: "Improve your website's technical foundation to ensure search engines can crawl, index, and rank your pages effectively.",
      points: [
        "Site Speed Optimization",
        "Mobile Responsiveness",
        "XML Sitemap Creation",
        "Schema Markup Implementation",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Off-Page SEO & Link Building",
      text: "Build high-quality backlinks and improve your domain authority through strategic off-page optimization techniques.",
      points: [
        "Quality Backlink Acquisition",
        "Guest Posting Strategy",
        "Social Media Signals",
        "Brand Mention Building",
      ],
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Local SEO Marketing",
      text: "Dominate local search results and attract nearby customers with targeted local SEO strategies and Google My Business optimization.",
      points: [
        "Google My Business Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Keyword Targeting",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "Proven Track Record",
      text: "10+ years of delivering successful SEO campaigns with measurable results for businesses of all sizes.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Expert Team",
      text: "Dedicated SEO specialists with extensive experience in all aspects of search engine optimization.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      title: "Data-Driven Approach",
      text: "We use advanced analytics and SEO tools to make informed decisions and optimize your campaigns.",
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "White-Hat Techniques",
      text: "We strictly follow Google's guidelines and use only ethical SEO practices for sustainable growth.",
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      title: "Fast Results",
      text: "See improvements in your rankings within 3-6 months with our aggressive yet safe SEO strategies.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Transparent Reporting",
      text: "Receive detailed monthly reports with clear metrics showing your SEO progress and ROI.",
    },
  ];

  return (
    <div className="bg-transparent text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 lg:px-16">
        <div className="max-w-[89rem] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-6 py-2">
            <Search className="w-4 h-4 text-[#FF006E]" />
            <span className="text-sm text-gray-300">Professional SEO Marketing Solutions</span>
          </div>
          <div className="h-6"></div>
          <h2 className="text-4xl lg:text-6xl font-black">
            Drive Organic Growth with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] to-[#ff338c]">
              Strategic SEO Marketing
            </span>
          </h2>
          <div className="h-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Boost your online visibility, increase qualified traffic, and dominate search engine results with our comprehensive SEO marketing strategies tailored for your business success.
          </p>
          <div className="h-16"></div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-[#FF006E] transition-all">
                <div className="w-12 h-12 bg-[#FF006E]/10 rounded-xl flex items-center justify-center">{b.icon}</div>
                <div className="h-4"></div>
                <h3 className="text-xl font-bold text-white">{b.title}</h3>
                <div className="h-2"></div>
                <p className="text-gray-400 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 px-6 lg:px-16 ">
        <div className="max-w-[89rem] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black">Comprehensive SEO Services</h2>
          <div className="h-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end SEO solutions designed to elevate your search engine performance
          </p>
          <div className="h-16"></div>

          <div className="grid lg:grid-cols-2 gap-8 text-left">
            {services.map((s, i) => (
              <div key={i} className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-[#FF006E]/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF006E] to-[#ff338c] rounded-2xl flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                    <div className="h-4"></div>
                    <p className="text-gray-400">{s.text}</p>
                    <div className="h-6"></div>
                    <div className="space-y-3">
                      {s.points.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#FF006E] flex-shrink-0" />
                          <span className="text-gray-300">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-[89rem] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black">Why Choose Our SEO Marketing Agency?</h2>
          <div className="h-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partner with proven SEO experts who deliver measurable results
          </p>
          <div className="h-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF006E] to-[#ff338c] rounded-2xl flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <div className="h-6"></div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <div className="h-3"></div>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-[89rem] mx-auto">
          <div className="bg-gradient-to-r from-[#FF006E] to-[#ff338c] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Boost Your Rankings?</h2>
              <div className="h-6"></div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Get a free SEO audit and discover how we can help you dominate search results and drive more organic traffic to your website.
              </p>
              <div className="h-10"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-[#FF006E] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoMarketing;
