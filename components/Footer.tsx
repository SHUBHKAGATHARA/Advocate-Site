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
    <footer className="bg-black border-t border-white/20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white rounded-full" />
      </div>
      
      <div className="relative z-10 container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Scale className="h-7 w-7 text-black" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-tight">Legal Experts</h3>
                <p className="text-white/70 text-sm">Dhrol, Gujarat</p>
              </div>
            </motion.div>
            
            <p className="text-white/70 leading-relaxed">
              Providing expert legal services in Dhrol, Gujarat with over 15 years of experience. 
              Committed to delivering justice and exceptional client service.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 text-white" />
                <a href="tel:+919638312551" className="text-white/90 font-medium hover:text-white transition-colors">
                  +91 96383 12551
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 text-white" />
                <a href="mailto:kbk.advocatedhrol@gmail.com" className="text-white/90 font-medium hover:text-white transition-colors">
                  kbk.advocatedhrol@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3 p-2 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4 text-white mt-1" />
                <span className="text-white/90 font-medium">Laxminarayan Complex, Near Government Hospital, Dhrol, Gujarat</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors flex items-center group font-medium"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-tight">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <motion.li key={index}>
                  <Link 
                    href="/services"
                    className="text-white/80 hover:text-white transition-colors flex items-center group font-medium"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {area}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-tight">Office Hours</h4>
            <div className="space-y-4 mb-6">
              <motion.div 
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="h-4 w-4 text-white mt-1" />
                <div>
                  <p className="font-semibold text-white">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-white/80">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-white/80">Sunday: By Appointment</p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h5 className="text-white font-semibold tracking-tight">Emergency Contact</h5>
              <motion.div 
                className="p-4 bg-white/10 border border-white/20 rounded-xl glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-white/90 text-sm font-semibold">24/7 Emergency Hotline</p>
                <a href="tel:+919638312551" className="text-white font-bold hover:text-white/80 transition-colors">
                  +91 96383 12551
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm font-medium">
                © {new Date().getFullYear()} Adv. Kishor Kagathara. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Advocate & Solicitor, Gujarat State Bar Council
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Terms of Service
              </Link>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <motion.div 
            className="glass-card border border-white/20 rounded-xl p-4"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-white/80 text-xs text-center leading-relaxed">
              <strong className="text-white">Legal Notice:</strong> This website is for informational purposes only and does not constitute legal advice. 
              Communication through this website does not create an attorney-client relationship. 
              Please consult with Adv. Kishor Kagathara directly for legal advice specific to your situation.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}