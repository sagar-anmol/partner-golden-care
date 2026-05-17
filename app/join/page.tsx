'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function JoinPage() {
  return (
    <div className="bg-gradient-to-br from-gold-50 to-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Join Our Partner Program<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">Unlock Revenue & Impact</span>
              </h1>
              <p className="text-xl text-gray-700">
                Start earning recurring commissions while helping elderly people receive compassionate care. Build your sustainable business with GoldenCare.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Unlock Revenue & Make Impact</h2>
              <div className="space-y-3">
                {[
                  { title: '20-30% Recurring Commission', desc: 'Earn ongoing commissions from every client' },
                  { title: 'Marketing & Tools', desc: 'Access everything you need to grow your business' },
                  { title: 'Dedicated Success Manager', desc: 'Personal support to help you achieve your goals' },
                  { title: 'Analytics Dashboard', desc: 'Track earnings, growth, and performance metrics' },
                  { title: 'Expert Training', desc: 'Comprehensive onboarding and ongoing education' },
                  { title: 'Community & Network', desc: 'Connect with partners and learn from the best' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 text-gold-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-xl hover:from-gold-500 hover:to-gold-600 transition font-semibold shadow-lg"
              >
                Start Your Journey <ArrowRight className="ml-2" size={20} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 border-2 border-gold-300 rounded-xl hover:bg-gold-50 transition font-semibold"
              >
                Ask Questions
              </Link>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div id="signup" className="bg-white rounded-2xl border border-gold-200 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Partner Application</h2>
            <p className="text-gray-600 mb-6">
              Join our network and start earning. Our team will reach out within 24 hours to discuss your opportunity.
            </p>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Industry Experience *
                </label>
                <select required className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition bg-white">
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (&lt;1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="enterprise">Enterprise Level</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Why do you want to join? *
                </label>
                <textarea
                  placeholder="Tell us about your interest..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 rounded border-gold-300 text-gold-600 focus:ring-gold-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms-of-service" className="text-gold-600 hover:text-gold-700 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-gold-600 hover:text-gold-700 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-lg hover:from-gold-500 hover:to-gold-600 transition font-semibold"
              >
                Submit Application
              </button>

              <p className="text-xs text-gray-500 text-center">
                Typically reviewed within 24-48 hours
              </p>
            </form>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              number: '1000+',
              label: 'Active Partners',
              desc: 'Join a thriving global community'
            },
            {
              number: '₹50M+',
              label: 'Paid Out',
              desc: 'Real earnings from real partners'
            },
            {
              number: '24/7',
              label: 'Support',
              desc: 'Always here to help you succeed'
            }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{stat.label}</h3>
              <p className="text-gray-600">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
