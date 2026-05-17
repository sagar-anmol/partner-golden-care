import { CheckCircle, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gold-50 to-gold-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">GoldenCare</span>
            </h1>
            <p className="text-xl text-gray-600">
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
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded"></div>
              <p className="text-lg text-gray-600">
                To empower entrepreneurs and businesses by providing them with world-class partnership opportunities, tools, and support that enable them to build sustainable, profitable businesses while delivering exceptional value to their customers.
              </p>
              <p className="text-gray-600">
                We believe in creating win-win partnerships where success is shared, and growth is mutual. Our partners are not just vendors—they are integral members of our ecosystem.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded"></div>
              <p className="text-lg text-gray-600">
                To become the most trusted and preferred partner network globally, known for our unwavering commitment to excellence, innovation, and the success of our partners.
              </p>
              <p className="text-gray-600">
                We envision a future where partnerships are built on transparency, mutual respect, and shared values—creating a thriving ecosystem where everyone can achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
                <div key={idx} className="bg-white p-6 rounded-xl border border-gold-200 hover:shadow-lg transition text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History & Growth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Journey</h2>

          <div className="space-y-8">
            {[
              {
                year: '2015',
                title: 'Founded',
                desc: 'GoldenCare was established with a vision to revolutionize the partnership model'
              },
              {
                year: '2017',
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
              }
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold text-gold-600">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                  <p className="text-gray-600 mt-2">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            {[
              { number: '1000+', label: 'Active Partners' },
              { number: '50+', label: 'Countries' },
              { number: '₹50M+', label: 'Paid Out' },
              { number: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-gold-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful partners who are building their future with GoldenCare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-xl hover:from-gold-500 hover:to-gold-600 transition font-semibold shadow-lg"
            >
              Join Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 border-2 border-gold-300 rounded-xl hover:bg-gold-50 transition font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
