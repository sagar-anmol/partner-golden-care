import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span className="text-lg font-bold text-white">GoldenCare</span>
            </div>
            <p className="text-sm text-gray-400">Building partnerships that matter.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-gold-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gold-400 transition">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-gold-400 transition">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:partners@goldencare.in" className="hover:text-gold-400 transition">partners@goldencare.in</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-400 transition">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} GoldenCare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition">Twitter</a>
            <a href="#" className="hover:text-gold-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-gold-400 transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
