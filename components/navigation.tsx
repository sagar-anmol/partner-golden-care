'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gold-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">GoldenCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-gold-600 transition font-medium">How It Works</Link>
            <Link href="/about" className="text-gray-700 hover:text-gold-600 transition font-medium">Why Partner</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gold-600 transition font-medium">Contact Us</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="px-5 py-2 text-gold-600 border-2 border-gold-300 rounded-lg hover:bg-gold-50 transition font-medium">
              Sign In
            </Link>
            <Link href="/join" className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition font-medium shadow-md">
              Sign Up
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
            <Link href="/how-it-works" className="block text-gray-700 hover:text-gold-600 font-medium py-2">How It Works</Link>
            <Link href="/about" className="block text-gray-700 hover:text-gold-600 font-medium py-2">Why Partner</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-gold-600 font-medium py-2">Contact Us</Link>
            <hr className="my-2 border-gold-100" />
            <Link href="/login" className="block text-center px-4 py-2 text-gold-600 font-medium border-2 border-gold-300 rounded-lg hover:bg-gold-50">
              Sign In
            </Link>
            <Link href="/join" className="block text-center px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg font-medium">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
