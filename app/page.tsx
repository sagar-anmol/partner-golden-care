'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, TrendingUp, Heart, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-32" style={{ background: 'linear-gradient(180deg, #fffef7 0%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Badges */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto" style={{ backgroundColor: '#fff4d6', color: '#8b6f1f' }}>
              <span>💰</span>
              <span>Earn Competitive Commissions</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium w-fit mx-auto">
              <span>🌍</span>
              <span>Growing in metro cities</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#1a1410' }}>
                  Join Our Partner Program and<br />
                  <span style={{ color: '#d4a024' }}>Unlock New Revenue Streams</span>
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: '#4a4138' }}>
                  Do great work helping older generations while building a sustainable business. Join our partner network and earn competitive commissions while making a real difference.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle style={{ color: '#f5c547' }} size={20} />
                  <span style={{ color: '#4a4138' }}>Earn better commissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle style={{ color: '#f5c547' }} size={20} />
                  <span style={{ color: '#4a4138' }}>Full business support and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle style={{ color: '#f5c547' }} size={20} />
                  <span style={{ color: '#4a4138' }}>Marketing materials and tools included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-8 py-4 text-white rounded-xl transition font-semibold shadow-lg"
                  style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(90deg, #d4a024 0%, #c4941d 100%)'}
                  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)'}
                >
                  <ArrowRight className="mr-2" size={20} />
                  Join Us Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold"
                  style={{ backgroundColor: '#ffffff', color: '#d4a024', border: '2px solid #f5c547' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fffef7'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 rounded-3xl opacity-40" style={{ background: 'linear-gradient(135deg, #ffe8a8 0%, #fff4d6 100%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart style={{ color: '#ffe8a8' }} size={120} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1410' }}>Why Partner with GoldenCare?</h2>
            <p className="text-lg" style={{ color: '#6b6258' }}>Everything you need to build a successful business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl transition" style={{ background: 'linear-gradient(135deg, #fffef7 0%, #fff4d6 100%)', border: '1px solid #ffe8a8' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1410' }}>Revenue Growth</h3>
              <p style={{ color: '#4a4138' }}>
                Earn good commissions and scale your income with our expanding network.
              </p>
            </div>

            <div className="p-8 rounded-2xl transition" style={{ background: 'linear-gradient(135deg, #fffef7 0%, #fff4d6 100%)', border: '1px solid #ffe8a8' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1410' }}>Complete Support</h3>
              <p style={{ color: '#4a4138' }}>
                Get dedicated onboarding, training, and 24/7 partner support to help you succeed.
              </p>
            </div>

            <div className="p-8 rounded-2xl transition" style={{ background: 'linear-gradient(135deg, #fffef7 0%, #fff4d6 100%)', border: '1px solid #ffe8a8' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1410' }}>Make a Difference</h3>
              <p style={{ color: '#4a4138' }}>
                Help elderly people get compassionate care while building a profitable business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fffef7 0%, #fff4d6 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1410' }}>How It Works</h2>
            <p className="text-lg" style={{ color: '#6b6258' }}>Get started in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application and tell us about your vision' },
              { step: '2', title: 'Onboard', desc: 'Receive training and get all the tools you need' },
              { step: '3', title: 'Launch', desc: 'Start connecting with clients and building your network' },
              { step: '4', title: 'Grow', desc: 'Scale your profile and earn recurring commissions' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', border: '2px solid #f5c547' }}>
                <div className="w-12 h-12 rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1a1410' }}>{item.title}</h3>
                <p className="text-center" style={{ color: '#6b6258' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1410' }}>What Our Partners Receive</h2>
            <p className="text-lg" style={{ color: '#6b6258' }}>Comprehensive support and resources</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Competitive  commissions',
              'Marketing & promotional materials',
              'Real-time analytics and reporting dashboard',
              'Dedicated partner success manager',
              'Free training programs',
              'Access to exclusive partner events',
              'Advanced CRM tools for client management',
              'Co-marketing opportunities',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg transition" style={{ backgroundColor: '#fffef7' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#fff4d6'} onMouseLeave={(e) => e.target.style.backgroundColor = '#fffef7'}>
                <Zap style={{ color: '#d4a024' }} size={20} className="flex-shrink-0 mt-1" />
                <span className="font-medium" style={{ color: '#3d3530' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #d4a024 0%, #8b6f1f 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>Ready to Unlock New Revenue?</h2>
          <p className="text-xl mb-8" style={{ color: '#fffef7' }}>
            Join thousands of successful partners building meaningful profile with GoldenCare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#d4a024' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#fffef7'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
            >
              <ArrowRight className="mr-2" size={20} />
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold"
              style={{ backgroundColor: '#c4941d', color: '#ffffff', border: '2px solid #ffffff' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#b45309'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#c4941d'}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
