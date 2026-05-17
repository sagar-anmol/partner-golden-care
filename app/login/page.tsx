'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, LogIn } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      if (email && password.length >= 6) {
        alert(`Welcome ${email}! (This is a demo)`)
        setEmail('')
        setPassword('')
      } else {
        setError('Please enter valid email and password (min 6 characters)')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20" style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #ffffff 100%)' }}>
      <div className="w-full max-w-md px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg" style={{ border: '1px solid #e8e4dc' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
              <LogIn className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your GoldenCare partner account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                style={{ borderColor: '#e8e4dc' }}
                onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <Link href="#forgot" className="text-sm font-medium" style={{ color: '#d4a024' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4941d'} onMouseLeave={(e) => e.currentTarget.style.color = '#d4a024'}>
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-transparent transition"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={(e) => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212, 160, 36, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded"
                style={{ borderColor: '#f5c547', accentColor: '#d4a024' }}
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
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
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Demo Info */}
          <div className="p-4 rounded-lg mb-6 text-center" style={{ backgroundColor: '#fffbf0', border: '1px solid #f5c547', color: '#d4a024' }}>
            <p className="text-sm text-gray-700">
              <strong>Demo Mode:</strong> Use any email and password (min 6 chars)
            </p>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/join" className="font-semibold" style={{ color: '#d4a024' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4941d'} onMouseLeave={(e) => e.currentTarget.style.color = '#d4a024'}>
                Apply Now
              </Link>
            </p>
          </div>

          {/* Additional Links */}
          <div className="mt-8 pt-6 flex justify-center gap-4 text-xs" style={{ borderTop: '1px solid #e8e4dc' }}>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700">
              Terms
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-gray-500 hover:text-gray-700">
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
