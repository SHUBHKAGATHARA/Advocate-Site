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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <Scale className="h-6 w-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Adv. Kishor Kagathara</h1>
              <p className="text-xs text-gray-400">Legal Excellence</p>
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
                  className="relative group text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Phone className="h-4 w-4" />
              <span>+91 96383 12551</span>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-sm overflow-hidden group"
            >
              <Link href="/contact" className="relative z-10 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Get Consultation
              </Link>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                variants={itemVariants}
                className="pt-4 border-t border-white/10"
              >
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-sm flex items-center justify-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get Consultation
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}