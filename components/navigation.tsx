'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gold-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">GoldenCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-gold-600 transition">About</Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gold-600 transition">Privacy</Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gold-600 transition">Terms</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gold-600 transition">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-gold-600 hover:text-gold-700 font-medium transition">
              Login
            </Link>
            <Link href="/join" className="px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-lg hover:from-gold-500 hover:to-gold-600 transition font-medium">
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gold-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gold-100 pt-4">
            <Link href="/about" className="block text-gray-600 hover:text-gold-600">About</Link>
            <Link href="/privacy-policy" className="block text-gray-600 hover:text-gold-600">Privacy Policy</Link>
            <Link href="/terms-of-service" className="block text-gray-600 hover:text-gold-600">Terms of Service</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gold-600">Contact</Link>
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="flex-1 text-center px-4 py-2 text-gold-600 font-medium border border-gold-300 rounded-lg hover:bg-gold-50">
                Login
              </Link>
              <Link href="/join" className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-lg font-medium">
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
