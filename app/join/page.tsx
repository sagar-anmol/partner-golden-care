'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function JoinPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    company: '', experience: '', motivation: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    const supabase = createClient()

    // Sign up with Supabase Auth
    const { data, error: signupError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.name,
          phone: form.phone,
          company: form.company,
        }
      }
    })

    if (signupError) {
      setError(signupError.message)
      setLoading(false)
      return
    }

    // Save partner application to DB
    if (data.user) {
      await supabase.from('partner_applications').insert({
        user_id: data.user.id,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        experience: form.experience,
        motivation: form.motivation,
        status: 'pending',
      })
    }

    setSuccess('Account created! Check your email to confirm, then you can log in.')
    setLoading(false)
    setTimeout(() => router.push('/login'), 3000)
  }

  const inputCls = "w-full px-4 py-3 border rounded-lg focus:outline-none transition"
  const inputStyle = { borderColor: '#e8e4dc' }
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#d4a024'
    e.target.style.boxShadow = '0 0 0 2px rgba(212,160,36,0.2)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#e8e4dc'
    e.target.style.boxShadow = 'none'
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]" style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight" style={{ color: '#1a1410' }}>
                Join Our Partner Program<br />
                <span style={{ color: '#d4a024' }}>Unlock Revenue & Impact</span>
              </h1>
              <p className="text-xl text-gray-700">
                Start earning recurring commissions while helping elderly people receive compassionate care.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Commission', desc: 'Earn ongoing commissions from every client' },
                { title: 'Marketing & Tools', desc: 'Access everything you need to grow your business' },
                { title: 'Dedicated Success Manager', desc: 'Personal support to help you achieve your goals' },
                { title: 'Analytics Dashboard', desc: 'Track earnings, growth, and performance metrics' },
                { title: 'Training', desc: 'Comprehensive onboarding and ongoing education' },
                { title: 'Community & Network', desc: 'Connect with partners and learn from the best' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} style={{ color: '#d4a024' }} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#signup" className="inline-flex items-center justify-center px-8 py-4 text-white rounded-xl font-semibold shadow-lg"
                style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}>
                Start Your Journey <ArrowRight className="ml-2" size={20} />
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold"
                style={{ background: '#ffffff', border: '2px solid #f5c547', color: '#d4a024' }}>
                Ask Questions
              </Link>
            </div>
          </div>

          {/* Right — Form */}
          <div id="signup" className="bg-white rounded-2xl p-8 shadow-lg" style={{ border: '1px solid #e8e4dc' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Partner Application</h2>
            <p className="text-gray-600 mb-6">
              Create your account and submit your partner application in one step.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                <input type="text" placeholder="John Doe" required value={form.name}
                  onChange={e => update('name', e.target.value)}
                  className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email Address *</label>
                <input type="email" placeholder="john@example.com" required value={form.email}
                  onChange={e => update('email', e.target.value)}
                  className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number *</label>
                <input type="tel" placeholder="+91 98765 43210" required value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Password * (min 6 characters)</label>
                <input type="password" placeholder="Create a strong password" required value={form.password}
                  onChange={e => update('password', e.target.value)}
                  className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password *</label>
                <input type="password" placeholder="Repeat your password" required value={form.confirmPassword}
                  onChange={e => update('confirmPassword', e.target.value)}
                  className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Company Name</label>
                <input type="text" placeholder="Your Company (optional)" value={form.company}
                  onChange={e => update('company', e.target.value)}
                  className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Industry Experience *</label>
                <select required value={form.experience} onChange={e => update('experience', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none transition bg-white"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (&lt;1 year)</option>
                  <option value="intermediate">Intermediate (1–3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="enterprise">Enterprise Level</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Why do you want to join? *</label>
                <textarea placeholder="Tell us about your interest..." rows={3} required value={form.motivation}
                  onChange={e => update('motivation', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none transition resize-none"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" required className="mt-1 w-4 h-4" style={{ accentColor: '#d4a024' }} />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms-of-service" className="font-medium" style={{ color: '#d4a024' }}>Terms of Service</Link>
                  {' and '}
                  <Link href="/privacy-policy" className="font-medium" style={{ color: '#d4a024' }}>Privacy Policy</Link>
                </label>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">❌ {error}</div>
              )}
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">✅ {success}</div>
              )}

              <button type="submit" disabled={loading}
                className="w-full px-6 py-3 text-white rounded-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}>
                {loading
                  ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting...</>
                  : 'Submit Application & Create Account'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Already have an account?{' '}
                <Link href="/login" style={{ color: '#d4a024' }}>Sign in here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
