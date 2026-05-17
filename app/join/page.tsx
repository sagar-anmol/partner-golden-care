'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function JoinPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]" style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight" style={{ color: '#1a1410' }}>
                Join Our Partner Program<br />
                <span style={{ color: '#d4a024' }}>Unlock Revenue & Impact</span>
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
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} style={{ color: '#d4a024' }} />
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
                className="inline-flex items-center justify-center px-8 py-4 text-white rounded-xl transition font-semibold shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #d4a024 0%, #c4941d 100%)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)'}
              >
                Start Your Journey <ArrowRight className="ml-2" size={20} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold"
                style={{
                  background: '#ffffff',
                  border: '2px solid #f5c547',
                  color: '#d4a024'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fffef7'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                Ask Questions
              </Link>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div id="signup" className="bg-white rounded-2xl p-8 shadow-lg" style={{ border: '1px solid #e8e4dc' }}>
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
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
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
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
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
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
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
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Industry Experience *
                </label>
                <select required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition bg-white" style={{ borderColor: '#e8e4dc' }} onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }} onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}>
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
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition resize-none"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 rounded"
                  style={{ borderColor: '#f5c547', accentColor: '#d4a024' }}
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms-of-service" className="font-medium" style={{ color: '#d4a024' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4941d'} onMouseLeave={(e) => e.currentTarget.style.color = '#d4a024'}>
                    Terms of Service
                  </Link>
                  {' and '}
                  <Link href="/privacy-policy" className="font-medium" style={{ color: '#d4a024' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4941d'} onMouseLeave={(e) => e.currentTarget.style.color = '#d4a024'}>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 text-white rounded-lg transition font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #d4a024 0%, #c4941d 100%)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)'}
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
              <div className="text-4xl font-bold mb-2" style={{ color: '#d4a024' }}>
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
