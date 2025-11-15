'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Calendar } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&auto=format&fit=crop&q=80')`
          }}
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
        >
          <span className="text-yellow-400 text-sm font-medium">
            ⚖️ Leading Legal Excellence
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Expert </span>
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Legal Services
          </span>
          <br />
          <span className="text-white">You Can Trust</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Professional legal representation with proven expertise in Criminal Law, 
          Civil Litigation, Family Law, and Corporate Advisory services.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '500+', label: 'Cases Won' },
            { number: '98%', label: 'Success Rate' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center px-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Now
          </motion.button>

          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center px-8 py-4 rounded-full bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}