'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gold-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Grow Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">GoldenCare</span>
              </h1>
              <p className="text-xl text-gray-600">
                Join our partner network and unlock new revenue streams while providing exceptional value to your customers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-xl hover:from-gold-500 hover:to-gold-600 transition font-semibold shadow-lg hover:shadow-xl"
              >
                Join Us Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 border-2 border-gold-300 rounded-xl hover:bg-gold-50 transition font-semibold"
              >
                Sign In <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-gold-300 to-gold-500 rounded-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with GoldenCare?</h2>
            <p className="text-lg text-gray-600">Everything you need to succeed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gold-50 border border-gold-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grow Revenue</h3>
              <p className="text-gray-600">
                Increase your income with competitive commissions and performance bonuses.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gold-50 border border-gold-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Access our team of experts ready to help you succeed 24/7.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gold-50 border border-gold-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Protection</h3>
              <p className="text-gray-600">
                Your business is protected with our comprehensive insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Partners Get</h2>
            <p className="text-lg text-gold-100">Comprehensive tools and support for success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-white">
            {[
              'Competitive commission structure',
              'Marketing & promotional materials',
              'Real-time analytics dashboard',
              'Training & onboarding support',
              'Access to partner network',
              'Quarterly performance reviews',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="flex-shrink-0 text-gold-200" size={24} />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful partners in our growing network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-xl hover:from-gold-500 hover:to-gold-600 transition font-semibold shadow-lg"
            >
              Join Our Network
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 border-2 border-gold-300 rounded-xl hover:bg-gold-50 transition font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
