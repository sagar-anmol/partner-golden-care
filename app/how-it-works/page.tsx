'use client'

import Link from 'next/link'
import { ArrowRight, Users, Target, Zap, TrendingUp, Award, HeartHandshake } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="pt-16 pb-20" style={{ background: 'linear-gradient(180deg, #fffef7 0%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#1a1410' }}>
              How the <span style={{ color: '#d4a024' }}>Partner Program</span> Works
            </h1>
            <p className="text-xl" style={{ color: '#6b6258' }}>
              A simple, transparent process to help you build a sustainable business while making an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-3xl h-80 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff4d6 0%, #fffef7 100%)' }}>
                  <Users style={{ color: '#ffe8a8' }} size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                    <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '24px' }}>1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a1410' }}>Apply & Get Approved</h2>
                    <p className="text-lg mb-4" style={{ color: '#4a4138' }}>
                      Submit a simple application form telling us about yourself and your vision. Our team reviews applications within 24 hours and will reach out with next steps.
                    </p>
                    <div className="p-4" style={{ backgroundColor: '#fffef7', borderLeft: '4px solid #d4a024' }}>
                      <p style={{ color: '#4a4138' }}>
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
                <div className="rounded-3xl h-80 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff4d6 0%, #fffef7 100%)' }}>
                  <Zap style={{ color: '#ffe8a8' }} size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                    <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '24px' }}>2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a1410' }}>Onboarding & Training</h2>
                    <p className="text-lg mb-4" style={{ color: '#4a4138' }}>
                      Get access to our partner portal, training materials, and dedicated onboarding specialist. Learn our platform, business model, and best practices for success.
                    </p>
                    <div className="p-4" style={{ backgroundColor: '#fffef7', borderLeft: '4px solid #d4a024' }}>
                      <p style={{ color: '#4a4138' }}>
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
                <div className="rounded-3xl h-80 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff4d6 0%, #fffef7 100%)' }}>
                  <Target style={{ color: '#ffe8a8' }} size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                    <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '24px' }}>3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a1410' }}>Launch & Connect Clients</h2>
                    <p className="text-lg mb-4" style={{ color: '#4a4138' }}>
                      Start connecting with customers in your area. You&apos;ll receive leads, referrals, and support from our team to help you grow quickly.
                    </p>
                    <div className="p-4" style={{ backgroundColor: '#fffef7', borderLeft: '4px solid #d4a024' }}>
                      <p style={{ color: '#4a4138' }}>
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
                <div className="rounded-3xl h-80 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff4d6 0%, #fffef7 100%)' }}>
                  <TrendingUp style={{ color: '#ffe8a8' }} size={150} strokeWidth={0.5} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                    <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '24px' }}>4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a1410' }}>Scale & Earn</h2>
                    <p className="text-lg mb-4" style={{ color: '#4a4138' }}>
                      Grow your customer base and earn commissions on every client. Build a sustainable, scalable business with our support every step of the way.
                    </p>
                    <div className="p-4" style={{ backgroundColor: '#fffef7', borderLeft: '4px solid #d4a024' }}>
                      <p style={{ color: '#4a4138' }}>
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
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #fffef7 0%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1410' }}>How You Earn</h2>
            <p className="text-lg" style={{ color: '#6b6258' }}>Transparent, recurring commission structure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition" style={{ border: '2px solid #e8e4dc' }}>
              <Award style={{ color: '#d4a024' }} className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a1410' }}>Base Commission</h3>
              <p className="text-4xl font-bold mb-2" style={{ color: '#d4a024' }}></p>
              <p style={{ color: '#6b6258' }}>On every customer transaction</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition" style={{ border: '2px solid #e8e4dc' }}>
              <TrendingUp style={{ color: '#d4a024' }} className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a1410' }}>Performance Bonus</h3>
              <p className="text-4xl font-bold mb-2" style={{ color: '#d4a024' }}></p>
              <p style={{ color: '#6b6258' }}>When you exceed monthly targets</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition" style={{ border: '2px solid #e8e4dc' }}>
              <HeartHandshake style={{ color: '#d4a024' }} className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a1410' }}>Referral Bonus</h3>
              <p className="text-4xl font-bold mb-2" style={{ color: '#d4a024' }}></p>
              <p style={{ color: '#6b6258' }}>For each partner you refer</p>
            </div>
          </div>

          {/*<div className="mt-12 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #d4a024 0%, #8b6f1f 100%)' }}>
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
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }} className="pt-3 mt-3 flex justify-between text-lg">
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
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }} className="pt-3 mt-3 flex justify-between text-lg">
                    <span>Monthly earning potential</span>
                    <strong>₹15,000+</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1410' }}>Why This Model Works</h2>
            <p className="text-lg" style={{ color: '#6b6258' }}>Benefits for everyone involved</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#fffef7', border: '1px solid #e8e4dc' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1410' }}>For You</h3>
              <ul className="space-y-3" style={{ color: '#4a4138' }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Build your own profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Recurring income stream</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Full support & training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Flexible schedule</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#fffef7', border: '1px solid #e8e4dc' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1410' }}>For Seniors</h3>
              <ul className="space-y-3" style={{ color: '#4a4138' }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Access quality care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Local trusted partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Personalized attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Verified caregivers</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#fffef7', border: '1px solid #e8e4dc' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1410' }}>For GoldenCare</h3>
              <ul className="space-y-3" style={{ color: '#4a4138' }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Grow faster nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Better local relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Scalable business model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4a024', fontWeight: 'bold' }}>✓</span>
                  <span>Passionate partners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #d4a024 0%, #8b6f1f 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>Ready to Get Started?</h2>
          <p className="text-xl mb-8" style={{ color: '#fffef7' }}>
            Join our growing network of partners building successful businesses.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#d4a024' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#fffef7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
          >
            <ArrowRight className="mr-2" size={20} />
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
