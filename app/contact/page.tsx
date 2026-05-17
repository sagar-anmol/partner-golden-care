'use client'

import { FormEvent, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // POST request to dummy API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('[v0] Contact form submitted:', data)
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to submit form. Please try again.')
      }
    } catch (err) {
      console.error('[v0] Contact form error:', err)
      setError('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-gold-50 to-white min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition" style={{ border: '1px solid #e8e4dc' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">partners@goldencare.in</p>
            <a
              href="mailto:partners@goldencare.in"
              className="font-medium transition"
              style={{ color: '#d4a024' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#c4941d'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d4a024'}
            >
              Send Email
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition" style={{ border: '1px solid #e8e4dc' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">+91 98765 43210</p>
            <a
              href="tel:+919876543210"
              className="font-medium transition"
              style={{ color: '#d4a024' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#c4941d'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d4a024'}
            >
              Call Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition" style={{ border: '1px solid #e8e4dc' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">New Delhi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm" style={{ border: '1px solid #e8e4dc' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              ✓ Thank you! Your message has been received. We&apos;ll get back to you soon.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition"
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                style={{ borderColor: '#e8e4dc' }}
                onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                style={{ borderColor: '#e8e4dc' }}
                onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition bg-white"
                style={{ borderColor: '#e8e4dc' }}
                onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
              >
                <option value="">Select a subject</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="support">Support Request</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition resize-none"
                style={{ borderColor: '#e8e4dc' }}
                onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 text-white rounded-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                background: loading ? '#d4a024' : 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = 'linear-gradient(90deg, #d4a024 0%, #c4941d 100%)')}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.background = 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)')}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            We typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
