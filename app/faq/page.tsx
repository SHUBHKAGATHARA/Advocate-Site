'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Scale, 
  Clock, 
  DollarSign,
  FileText,
  Users,
  Shield,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const faqs: FAQItem[] = [
    {
      question: "What types of legal services do you provide?",
      answer: "I provide comprehensive legal services including Criminal Defense, Civil Litigation, Family & Divorce Law, Property & Real Estate, Corporate & Business Law, and Employment Law. I handle everything from consultation to representation in courts.",
      category: "Services"
    },
    {
      question: "How much do your legal services cost?",
      answer: "Legal fees vary depending on the complexity and type of case. I offer transparent pricing with no hidden costs. For most consultations, I provide a free initial 30-minute discussion to understand your needs and provide a fee estimate.",
      category: "Fees"
    },
    {
      question: "Do you offer free consultation?",
      answer: "Yes, I offer a free 30-minute initial consultation for new clients. This allows me to understand your legal matter and provide you with an overview of your options and potential strategies.",
      category: "Consultation"
    },
    {
      question: "How long does a typical case take to resolve?",
      answer: "Case duration varies significantly based on complexity, court schedules, and case type. Simple matters may resolve in weeks, while complex litigation can take months or years. I provide realistic timelines during our initial consultation.",
      category: "Process"
    },
    {
      question: "Are you available for emergency legal matters?",
      answer: "Yes, I provide 24/7 emergency legal services for urgent matters such as criminal arrests, restraining orders, bail applications, and other time-sensitive legal issues. You can reach us at +91 96383 12551 or +91 99242 63454 anytime.",
      category: "Emergency"
    },
    {
      question: "What documents should I bring for my first meeting?",
      answer: "Please bring all relevant documents related to your case including contracts, court notices, police reports, property documents, correspondence, and any other paperwork. If unsure, it's better to bring more documents than needed.",
      category: "Consultation"
    },
    {
      question: "Do you handle cases outside of Dhrol?",
      answer: "Yes, I handle cases throughout Gujarat state and can represent clients in various district courts, high courts, and tribunals. I travel to different locations as needed for my clients' legal matters.",
      category: "Services"
    },
    {
      question: "How do you communicate case updates?",
      answer: "I maintain regular communication through phone calls, WhatsApp, email, and in-person meetings. You'll receive updates after every significant development, court hearing, or when important decisions need to be made.",
      category: "Process"
    },
    {
      question: "What is your success rate?",
      answer: "I maintain a 98% success rate across different case types through thorough preparation, strategic planning, and dedicated representation. However, each case is unique and success depends on various factors including evidence and legal merits.",
      category: "General"
    },
    {
      question: "Can you help with property registration and documentation?",
      answer: "Yes, I provide comprehensive property legal services including registration, documentation, title verification, property disputes, buying/selling agreements, and resolving ownership issues.",
      category: "Property"
    },
    {
      question: "Do you offer payment plans for legal fees?",
      answer: "Yes, I understand legal matters can be financially challenging. I offer flexible payment plans and installment options based on the case type and client's financial situation. We can discuss this during consultation.",
      category: "Fees"
    },
    {
      question: "What should I expect during my first consultation?",
      answer: "During the initial consultation, I'll listen to your legal issue, review relevant documents, explain your legal options, discuss potential strategies, provide a timeline estimate, and outline the fee structure. It's a comprehensive assessment of your case.",
      category: "Consultation"
    }
  ]

  const categories = ['All', 'Services', 'Fees', 'Consultation', 'Process', 'Emergency', 'Property', 'General']

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 50%)'
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/15 rounded-full"
            style={{
              left: `${12 + i * 12}%`,
              top: `${10 + i * 10}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: 4 + i * 0.5,
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
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
          >
            <HelpCircle className="mr-2 h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">
              Frequently Asked Questions
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Legal </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about legal services, processes, and working with Adv. Kishor Kagathara
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'btn-premium-white'
                    : 'btn-premium-outline border border-white/40 text-white hover:bg-white hover:text-black'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div variants={itemVariants} className="space-y-4 mb-20">
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-card border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <HelpCircle className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-white font-semibold text-lg pr-4">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-white" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      <div className="p-6 pl-20">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                        <div className="mt-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Can't find what you're looking for? Get in touch for personalized assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="tel:+919924263454"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-all duration-300"
            >
              <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Call Directly</h3>
              <p className="text-green-400 font-semibold">+91 96383 12551 | +91 99242 63454</p>
              <p className="text-gray-300 text-sm mt-2">Available 24/7 for emergencies</p>
            </motion.a>

            <motion.a
              href="mailto:jbk1630@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 backdrop-blur-sm text-center hover:border-blue-400/40 transition-all duration-300"
            >
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Send Email</h3>
              <p className="text-blue-400 font-semibold text-sm">kbk.advocatedhrol@gmail.com | jbk1630@gmail.com</p>
              <p className="text-gray-300 text-sm mt-2">Response within 2-4 hours</p>
            </motion.a>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 backdrop-blur-sm text-center hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
              >
                <Calendar className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Book Consultation</h3>
                <p className="text-yellow-400 font-semibold">Free 30 minutes</p>
                <p className="text-gray-300 text-sm mt-2">Schedule your meeting</p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}