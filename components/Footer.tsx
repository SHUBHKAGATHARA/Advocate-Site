'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Legal Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  const practiceAreas = [
    'Criminal Defense',
    'Civil Litigation', 
    'Family & Divorce Law',
    'Property & Real Estate',
    'Corporate & Business Law',
    'Employment Law'
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-black to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Scale className="h-7 w-7 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Adv. Kishor Kagathara</h3>
                <p className="text-sm text-gray-400">Legal Excellence</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed">
              Providing expert legal services in Dhrol, Gujarat with over 15 years of experience. 
              Committed to delivering justice and exceptional client service.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-yellow-400" />
                <a href="tel:+919638312551" className="hover:text-yellow-400 transition-colors">
                  +91 96383 12551
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-yellow-400" />
                <a href="mailto:kbk.advocatedhrol@gmail.com" className="hover:text-yellow-400 transition-colors">
                  kbk.advocatedhrol@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1" />
                <span>Laxminarayan Complex, Near Government Hospital, Dhrol, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <Link 
                    href="/services"
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {area}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Office Hours</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="h-4 w-4 text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-white font-semibold">Emergency Contact</h5>
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                <p className="text-red-300 text-sm font-semibold">24/7 Emergency Hotline</p>
                <a href="tel:+919638312551" className="text-red-400 font-bold hover:text-red-300 transition-colors">
                  +91 96383 12551
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Adv. Kishor Kagathara. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Advocate & Solicitor, Gujarat State Bar Council
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4">
            <p className="text-yellow-300 text-xs text-center leading-relaxed">
              <strong>Legal Notice:</strong> This website is for informational purposes only and does not constitute legal advice. 
              Communication through this website does not create an attorney-client relationship. 
              Please consult with Adv. Kishor Kagathara directly for legal advice specific to your situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}