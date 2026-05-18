'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12" style={{ backgroundColor: '#1a1410', color: '#a89988' }}>
      <style>{`
        .footer-link { color: #a89988; transition: color 0.2s; }
        .footer-link:hover { color: #f5c547; }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
  <div className="flex items-center gap-2">
    {/* Logo Container */}
    <div className="relative w-8 h-8 flex items-center justify-center">
      <Image 
        src="/Generated_image.png" // Ensure this is in your public/ folder
        alt="GoldenCare Logo"
        fill 
        className="object-contain"
      />
    </div>
    <span className="text-lg font-bold" style={{ color: '#ffffff' }}>GoldenCare</span>
  </div>
  <p className="text-sm" style={{ color: '#8b7d72' }}>Building partnerships that matter.</p>
</div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="footer-link">Terms of Service</Link></li>
              <li><Link href="/cookies" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} style={{ color: '#f5c547' }} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:partners@goldencare.in" className="footer-link">partner@goldencares.in</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} style={{ color: '#f5c547' }} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="footer-link">+91  9955638062</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} style={{ color: '#f5c547' }} className="mt-0.5 flex-shrink-0" />
                <span style={{ color: '#a89988' }}>Chandigarh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderTop: '1px solid #3d3530', color: '#8b7d72' }}>
          <p>&copy; {currentYear} GoldenCare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
