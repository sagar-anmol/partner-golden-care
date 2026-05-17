'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, TrendingUp, Heart, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gold-50 to-white pt-16 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Badges */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium w-fit mx-auto">
              <span>💰</span>
              <span>Earn Competitive Commissions</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium w-fit mx-auto">
              <span>🌍</span>
              <span>Growing in 50+ Cities</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Join Our Partner Program and<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">Unlock New Revenue Streams</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Do great work helping older generations while building a sustainable business. Join our partner network and earn competitive commissions while making a real difference.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Earn 20-30% recurring commissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Full business support and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Marketing materials and tools included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition font-semibold shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="mr-2" size={20} />
                  Join Us Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 border-2 border-gold-300 rounded-xl hover:bg-gold-50 transition font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-200 via-gold-100 to-gold-50 rounded-3xl opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="text-gold-300" size={120} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with GoldenCare?</h2>
            <p className="text-lg text-gray-600">Everything you need to build a successful business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200 hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Growth</h3>
              <p className="text-gray-700">
                Earn 20-30% recurring commissions and scale your income with our expanding network.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200 hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Support</h3>
              <p className="text-gray-700">
                Get dedicated onboarding, training, and 24/7 partner support to help you succeed.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200 hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Make a Difference</h3>
              <p className="text-gray-700">
                Help elderly people get compassionate care while building a profitable business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application and tell us about your vision' },
              { step: '2', title: 'Onboard', desc: 'Receive training and get all the tools you need' },
              { step: '3', title: 'Launch', desc: 'Start connecting with clients and building your network' },
              { step: '4', title: 'Grow', desc: 'Scale your business and earn recurring commissions' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-xl border-2 border-gold-200 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Partners Receive</h2>
            <p className="text-lg text-gray-600">Comprehensive support and resources</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Competitive 20-30% recurring commissions',
              'Marketing & promotional materials',
              'Real-time analytics and reporting dashboard',
              'Dedicated partner success manager',
              'Free training and certification programs',
              'Access to exclusive partner events',
              'Advanced CRM tools for client management',
              'Co-marketing opportunities',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-gold-50 hover:bg-gold-100 transition">
                <Zap className="text-gold-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock New Revenue?</h2>
          <p className="text-xl text-gold-100 mb-8">
            Join thousands of successful partners building meaningful businesses with GoldenCare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 rounded-xl hover:bg-gold-50 transition font-semibold shadow-lg"
            >
              <ArrowRight className="mr-2" size={20} />
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-700 text-white border-2 border-white rounded-xl hover:bg-gold-800 transition font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
