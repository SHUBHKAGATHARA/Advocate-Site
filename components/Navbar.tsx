'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Premium Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.a
          href="tel:+919638312551"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-white to-gray-100 rounded-full shadow-2xl text-black font-bold"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Phone className="h-6 w-6" />
        </motion.a>
      </motion.div>

      {/* Premium Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-amber-400/20 shadow-2xl shadow-amber-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-white to-gray-100 rounded-full flex items-center justify-center shadow-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Scale className="h-6 w-6 text-black" />
              </motion.div>
              <div>
                <h1 className="text-xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>
                  Adv. Kishor Kagathara
                </h1>
                <p className="text-xs text-gray-300 font-semibold tracking-wider uppercase">
                  Legal Excellence
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="relative group text-gray-200 hover:text-white transition-colors duration-300 font-bold text-lg"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-100 group-hover:w-full transition-all duration-300"
                      layout
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.a
                href="tel:+919638312551"
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold">+91 96383 12551</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-white to-gray-100 text-black"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/20"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 text-lg font-semibold border-b border-gray-700 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Contact */}
                <div className="pt-6 border-t border-gray-700">
                  <div className="space-y-4">
                    <a
                      href="tel:+919638312551"
                      className="flex items-center space-x-3 text-white hover:text-gray-200 transition-colors duration-300"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold">+91 96383 12551</span>
                    </a>
                    <a
                      href="mailto:kbk.advocatedhrol@gmail.com"
                      className="flex items-center space-x-3 text-white hover:text-gray-200 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="font-semibold">kbk.advocatedhrol@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}