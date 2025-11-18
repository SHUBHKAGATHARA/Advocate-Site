'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  MessageSquare,
  Calendar,
  Briefcase 
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  legalMatter: string
}

export default function ContactPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    legalMatter: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          legalMatter: ''
        })
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.error || 'Failed to send message. Please try again or contact me directly.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 96383 12551 | +91 99242 63454",
      href: "tel:+919924263454",
      description: "Available 24/7 for urgent legal matters"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "jbk1630@gmail.com",
      href: "mailto:jbk1630@gmail.com",
      description: "I typically respond within 2-4 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      value: "Laxminarayan Complex, Near Government Hospital, Dhrol",
      href: "https://maps.google.com/?q=Dhrol+Gujarat",
      description: "Easy parking and accessibility"
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)'
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/25 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${5 + i * 9}%`
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 container-premium py-20"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 glass-card"
          >
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact
            <br />
            <span className="text-white/80">Adv. Kishor Kagathara</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to discuss your legal matter? I'm here to help you navigate your legal challenges with expert guidance and personalized attention.
          </motion.p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.includes('maps') ? '_blank' : undefined}
              whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px rgba(255,255,255,0.1)" }}
              className="block p-6 rounded-2xl glass-card border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/90 font-semibold">{item.value}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="mr-3 h-8 w-8 text-yellow-400" />
                Send a Message
              </h2>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                      : 'bg-red-500/20 border border-red-500/40 text-red-300'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p>{statusMessage}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 flex items-center">
                      <User className="mr-2 h-4 w-4 text-yellow-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-yellow-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-yellow-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-yellow-400" />
                      Legal Matter *
                    </label>
                    <select
                      name="legalMatter"
                      value={formData.legalMatter}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    >
                      <option value="">Select practice area</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="civil">Civil Litigation</option>
                      <option value="family">Family & Divorce Law</option>
                      <option value="property">Property & Real Estate</option>
                      <option value="corporate">Corporate & Business Law</option>
                      <option value="employment">Employment Law</option>
                      <option value="other">Other Legal Matter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-yellow-400" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                    placeholder="Please describe your legal matter in detail..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-white to-gray-100 text-black hover:shadow-2xl hover:shadow-white/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Office Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="mr-3 h-6 w-6 text-yellow-400" />
                Office Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-semibold">By Appointment</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-yellow-400/10 px-4 rounded-xl border border-yellow-400/20">
                  <span className="text-yellow-400 font-semibold">Emergency</span>
                  <span className="text-yellow-400 font-bold">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Emergency Legal Services</h3>
              <p className="text-gray-300 mb-6">
                Facing an urgent legal matter? I'm available 24/7 for criminal arrests, 
                restraining orders, bail applications, and other time-sensitive legal emergencies.
              </p>
              <motion.a
                href="tel:+919924263454"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-center py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                🚨 Emergency Hotline: +91 96383 12551 | +91 99242 63454
              </motion.a>
            </div>

            {/* Schedule Consultation */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Schedule a Free Consultation</h3>
              <p className="text-gray-300 mb-6">
                Prefer to meet in person? Schedule a free 30-minute consultation to discuss your legal needs. 
                I offer flexible scheduling including evenings and weekends.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-white to-gray-100 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Consultation</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}