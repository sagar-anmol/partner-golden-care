'use client'

import { CheckCircle, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #fffef7 0%, #fff4d6 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#1a1410' }}>
              About <span style={{ color: '#d4a024' }}>GoldenCare</span>
            </h1>
            <p className="text-xl" style={{ color: '#6b6258' }}>
              Building a global network of partners who are transforming the industry with innovation, excellence, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold" style={{ color: '#1a1410' }}>Our Mission</h2>
              <div className="h-1 w-16 rounded" style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}></div>
              <p className="text-lg" style={{ color: '#6b6258' }}>
                To empower individual by providing them with world-class partnership opportunities, tools, and support that enable them to build sustainable, profitable reach while delivering exceptional value to customers.
              </p>
              <p style={{ color: '#6b6258' }}>
                We believe in creating win-win partnerships where success is shared, and growth is mutual. Our partners are not just vendors—they are integral members of our ecosystem.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold" style={{ color: '#1a1410' }}>Our Vision</h2>
              <div className="h-1 w-16 rounded" style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}></div>
              <p className="text-lg" style={{ color: '#6b6258' }}>
                To become the most trusted and preferred partner network globally, known for our unwavering commitment to excellence, innovation, and the success of our partners.
              </p>
              <p style={{ color: '#6b6258' }}>
                We envision a future where partnerships are built on transparency, mutual respect, and shared values—creating a thriving ecosystem where everyone can achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ backgroundColor: '#fffbf0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1410' }}>Our Core Values</h2>
            <p className="text-xl" style={{ color: '#6b6258' }}>The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                desc: 'We pursue excellence in every aspect of our business'
              },
              {
                icon: Target,
                title: 'Integrity',
                desc: 'Honesty and transparency in all our dealings'
              },
              {
                icon: Users,
                title: 'Partnership',
                desc: 'We succeed when our partners succeed'
              },
              {
                icon: CheckCircle,
                title: 'Innovation',
                desc: 'Continuous improvement and forward thinking'
              }
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white p-6 rounded-xl hover:shadow-lg transition text-center" style={{ border: '1px solid #e8e4dc' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1410' }}>{value.title}</h3>
                  <p className="text-sm" style={{ color: '#6b6258' }}>{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History & Growth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#1a1410' }}>Our Journey</h2>

          <div className="space-y-8">
            {[
              {
                year: '2026',
                title: 'Founded',
                desc: 'GoldenCare was established with a vision to revolutionize the partnership model'
              },
              /*{
                year: '2026',
                title: '100 Partners Milestone',
                desc: 'Reached 100 active partners across multiple regions'
              },
              {
                year: '2019',
                title: 'Global Expansion',
                desc: 'Expanded to 50+ countries with localized support teams'
              },
              {
                year: '2021',
                title: '₹10M+ Paid Out',
                desc: 'Distributed over ₹10 million in commissions to our partners'
              },
              {
                year: '2023',
                title: '1000+ Partners',
                desc: 'Celebrated reaching 1000+ active partners in our network'
              },
              {
                year: '2024',
                title: 'Platform 2.0',
                desc: 'Launched our revolutionary new partner platform with advanced features'
              }*/
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl text-white font-bold" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
                    {idx + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold" style={{ color: '#d4a024' }}>{milestone.year}</p>
                  <h3 className="text-xl font-bold mt-1" style={{ color: '#1a1410' }}>{milestone.title}</h3>
                  <p className="mt-2" style={{ color: '#6b6258' }}>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #d4a024 0%, #c4941d 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            {[
              { number: 'NA', label: 'Active Partners' },
              { number: 'NA', label: 'Countries' },
              { number: 'NA', label: 'Paid Out' },
              { number: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p style={{ color: '#fffef7' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1a1410' }}>Ready to Be Part of Our Story?</h2>
          <p className="text-xl mb-8" style={{ color: '#6b6258' }}>
            Join thousands of successful partners who are building their future with GoldenCare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 text-white rounded-xl transition font-semibold shadow-lg"
              style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #d4a024 0%, #c4941d 100%)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)'}
            >
              Join Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold"
              style={{ backgroundColor: '#ffffff', border: '2px solid #f5c547', color: '#d4a024' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fffef7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
