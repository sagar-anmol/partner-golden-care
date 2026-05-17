'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinkClass = `font-medium transition-colors duration-200 hover:text-[#d4a024]`

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5c547 0%, #d4a024 100%)' }}>
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <span className="text-2xl font-bold" style={{ color: '#1a1410' }}>GoldenCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="nav-link font-medium">How It Works</Link>
            <Link href="/about" className="nav-link font-medium">Why Partner</Link>
            <Link href="/contact" className="nav-link font-medium">Contact Us</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="px-5 py-2 rounded-lg sign-in-btn font-medium">
              Sign In
            </Link>
            <Link href="/join" className="px-6 py-2 text-white rounded-lg sign-up-btn font-medium shadow-md">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: '#6b6258' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t pt-4" style={{ borderColor: '#e8e4dc' }}>
            <Link href="/how-it-works" className="nav-link block font-medium py-2">How It Works</Link>
            <Link href="/about" className="nav-link block font-medium py-2">Why Partner</Link>
            <Link href="/contact" className="nav-link block font-medium py-2">Contact Us</Link>
            <hr style={{ borderColor: '#e8e4dc', margin: '0.5rem 0' }} />
            <Link href="/login" className="block text-center px-4 py-2 font-medium rounded-lg sign-in-btn">
              Sign In
            </Link>
            <Link href="/join" className="block text-center px-4 py-2 text-white rounded-lg sign-up-btn font-medium">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
