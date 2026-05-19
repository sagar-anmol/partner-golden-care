'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, LogOut, User } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export default function Navigation() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    // Get initial session
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    router.push('/')
    router.refresh()
  }

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Partner'

  return (
    <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e8e4dc' }}>
      <style>{`
        .nav-link { color: #6b6258; }
        .nav-link:hover { color: #d4a024; }
        .sign-in-btn { border: 2px solid #f5c547; color: #d4a024; }
        .sign-in-btn:hover { background-color: #fffef7; }
        .sign-up-btn { background: linear-gradient(90deg, #f5c547 0%, #d4a024 100%); }
        .sign-up-btn:hover { background: linear-gradient(90deg, #d4a024 0%, #c4941d 100%); }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image src="/Generated_image.png" alt="GoldenCare Logo" fill className="object-contain" priority />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#1a1410' }}>GoldenCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="nav-link font-medium">How It Works</Link>
            <Link href="/about" className="nav-link font-medium">Why Partner</Link>
            <Link href="/contact" className="nav-link font-medium">Contact Us</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {loading ? (
              <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            ) : user ? (
              // Logged in state
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#fffef7', border: '1px solid #f5c547' }}>
                  <User size={16} style={{ color: '#d4a024' }} />
                  <span className="text-sm font-medium" style={{ color: '#1a1410' }}>{displayName}</span>
                </div>
                <button onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition sign-in-btn">
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            ) : (
              // Logged out state
              <>
                <Link href="/login" className="px-5 py-2 rounded-lg sign-in-btn font-medium">Sign In</Link>
                <Link href="/join" className="px-6 py-2 text-white rounded-lg sign-up-btn font-medium shadow-md">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" style={{ color: '#6b6258' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t pt-4" style={{ borderColor: '#e8e4dc' }}>
            <Link href="/how-it-works" className="nav-link block font-medium py-2" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link href="/about" className="nav-link block font-medium py-2" onClick={() => setIsOpen(false)}>Why Partner</Link>
            <Link href="/contact" className="nav-link block font-medium py-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <hr style={{ borderColor: '#e8e4dc' }} />
            {user ? (
              <>
                <div className="px-4 py-2 text-sm font-medium" style={{ color: '#d4a024' }}>
                  👤 {displayName}
                </div>
                <button onClick={handleLogout}
                  className="w-full text-center px-4 py-2 font-medium rounded-lg sign-in-btn flex items-center justify-center gap-2">
                  <LogOut size={16} /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block text-center px-4 py-2 font-medium rounded-lg sign-in-btn" onClick={() => setIsOpen(false)}>Sign In</Link>
                <Link href="/join" className="block text-center px-4 py-2 text-white rounded-lg sign-up-btn font-medium" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
