'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const supabase = createClient()
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError(authError.message === 'Invalid login credentials'
        ? 'Wrong email or password. Please try again.'
        : authError.message)
      setLoading(false)
      return
    }

    setSuccess(`Welcome back, ${data.user?.email}! Redirecting...`)
    setTimeout(() => router.push('/'), 1200)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20"
      style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #ffffff 100%)' }}>
      <div className="w-full max-w-md px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg" style={{ border: '1px solid #e8e4dc' }}>

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
              <LogIn className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your GoldenCare partner account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition"
                style={{ borderColor: '#e8e4dc' }}
                onFocus={e => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212,160,36,0.2)' }}
                onBlur={e => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none' }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'} value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none transition"
                  style={{ borderColor: '#e8e4dc' }}
                  onFocus={e => { e.target.style.borderColor = '#d4a024'; e.target.style.boxShadow = '0 0 0 2px rgba(212,160,36,0.2)' }}
                  onBlur={e => { e.target.style.borderColor = '#e8e4dc'; e.target.style.boxShadow = 'none' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                ❌ {error}
              </div>
            )}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ✅ {success}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full px-6 py-3 text-white rounded-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2 transition"
              style={{ background: 'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)' }}>
              {loading
                ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Signing in...</>
                : <><LogIn size={20} /> Sign In</>}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            {"Don't have an account? "}
            <Link href="/join" className="font-semibold" style={{ color: '#d4a024' }}>Apply Now</Link>
          </div>

          <div className="mt-6 pt-4 flex justify-center gap-4 text-xs" style={{ borderTop: '1px solid #e8e4dc' }}>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700">Privacy</Link>
            <span className="text-gray-300">•</span>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700">Terms</Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-gray-500 hover:text-gray-700">Support</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
