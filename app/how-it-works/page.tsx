'use client'

import Link from 'next/link'
import { ArrowRight, Users, Target, Zap, TrendingUp, Award, HeartHandshake } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gold-50 to-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">Partner Program</span> Works
            </h1>
            <p className="text-xl text-gray-700">
              A simple, transparent process to help you build a sustainable business while making an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl h-80 flex items-center justify-center">
                  <Users className="text-gold-300" size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply & Get Approved</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Submit a simple application form telling us about yourself and your vision. Our team reviews applications within 24 hours and will reach out with next steps.
                    </p>
                    <div className="bg-gold-50 border-l-4 border-gold-500 p-4">
                      <p className="text-gray-700">
                        <strong>What we&apos;re looking for:</strong> Motivated individuals with entrepreneurial spirit, customer service mindset, and commitment to helping seniors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl h-80 flex items-center justify-center">
                  <Zap className="text-gold-300" size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Onboarding & Training</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Get access to our partner portal, training materials, and dedicated onboarding specialist. Learn our platform, business model, and best practices for success.
                    </p>
                    <div className="bg-gold-50 border-l-4 border-gold-500 p-4">
                      <p className="text-gray-700">
                        <strong>Includes:</strong> Platform training, sales techniques, marketing materials, CRM tools, and 24/7 support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl h-80 flex items-center justify-center">
                  <Target className="text-gold-300" size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Launch & Connect Clients</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Start connecting with customers in your area. You&apos;ll receive leads, referrals, and support from our team to help you grow quickly.
                    </p>
                    <div className="bg-gold-50 border-l-4 border-gold-500 p-4">
                      <p className="text-gray-700">
                        <strong>Support provided:</strong> Lead generation, marketing support, customer service backup, and technical assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl h-80 flex items-center justify-center">
                  <TrendingUp className="text-gold-300" size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Scale & Earn</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Grow your customer base and earn 20-30% recurring commissions on every client. Build a sustainable, scalable business with our support every step of the way.
                    </p>
                    <div className="bg-gold-50 border-l-4 border-gold-500 p-4">
                      <p className="text-gray-700">
                        <strong>Growth tools:</strong> Analytics dashboard, performance bonuses, co-marketing opportunities, and advance support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 bg-gradient-to-b from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Earn</h2>
            <p className="text-lg text-gray-600">Transparent, recurring commission structure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gold-200 text-center hover:shadow-xl transition">
              <Award className="text-gold-600 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Base Commission</h3>
              <p className="text-4xl font-bold text-gold-600 mb-2">20%</p>
              <p className="text-gray-600">On every customer transaction</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gold-200 text-center hover:shadow-xl transition">
              <TrendingUp className="text-gold-600 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Bonus</h3>
              <p className="text-4xl font-bold text-gold-600 mb-2">+10%</p>
              <p className="text-gray-600">When you exceed monthly targets</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gold-200 text-center hover:shadow-xl transition">
              <HeartHandshake className="text-gold-600 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Referral Bonus</h3>
              <p className="text-4xl font-bold text-gold-600 mb-2">₹5K+</p>
              <p className="text-gray-600">For each partner you refer</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gold-600 to-gold-700 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Example Monthly Earnings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>10 active clients at ₹5,000/month</span>
                    <strong>₹10,000 base</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>20% commission</span>
                    <strong>₹2,000</strong>
                  </div>
                  <div className="border-t border-gold-400 pt-3 mt-3 flex justify-between text-lg">
                    <span>Monthly earning potential</span>
                    <strong>₹2,000+</strong>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">As You Scale</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>50 active clients at ₹5,000/month</span>
                    <strong>₹50,000 base</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>20% commission + 10% bonus</span>
                    <strong>₹15,000</strong>
                  </div>
                  <div className="border-t border-gold-400 pt-3 mt-3 flex justify-between text-lg">
                    <span>Monthly earning potential</span>
                    <strong>₹15,000+</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Model Works</h2>
            <p className="text-lg text-gray-600">Benefits for everyone involved</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gold-50 p-8 rounded-2xl border border-gold-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For You</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Build your own business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Recurring income stream</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Full support & training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Flexible schedule</span>
                </li>
              </ul>
            </div>

            <div className="bg-gold-50 p-8 rounded-2xl border border-gold-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Seniors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Access quality care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Local trusted partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Personalized attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Verified caregivers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gold-50 p-8 rounded-2xl border border-gold-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For GoldenCare</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Grow faster nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Better local relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Scalable business model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Passionate partners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gold-100 mb-8">
            Join our growing network of partners building successful businesses.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 rounded-xl hover:bg-gold-50 transition font-semibold shadow-lg"
          >
            <ArrowRight className="mr-2" size={20} />
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
