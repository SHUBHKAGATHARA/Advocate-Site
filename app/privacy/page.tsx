'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, FileText, Scale, Eye, Lock, AlertTriangle } from 'lucide-react'

export default function PrivacyPolicyPage() {
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

  const sections = [
    {
      title: "Information Collection",
      icon: <FileText className="h-6 w-6" />,
      content: "We collect information you provide when contacting us through our website forms, email, or phone. This includes your name, email address, phone number, and details about your legal matter. We only collect information necessary to provide legal services."
    },
    {
      title: "Information Use", 
      icon: <Eye className="h-6 w-6" />,
      content: "Your information is used solely for providing legal services, responding to your inquiries, scheduling consultations, and maintaining client relationships. We do not sell, rent, or share your personal information with third parties except as required by law or with your explicit consent."
    },
    {
      title: "Data Security",
      icon: <Shield className="h-6 w-6" />,
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All communications are treated with the highest level of confidentiality as required by legal professional standards."
    },
    {
      title: "Attorney-Client Privilege",
      icon: <Lock className="h-6 w-6" />,
      content: "All communications between you and Adv. Kishor Kagathara are protected by attorney-client privilege. This means your information is kept strictly confidential and cannot be disclosed without your permission, except in very limited circumstances required by law."
    },
    {
      title: "Cookies and Tracking",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: "Our website may use cookies to improve user experience and analyze website traffic. We do not use tracking for advertising purposes. You can disable cookies in your browser settings if you prefer."
    },
    {
      title: "Contact and Updates",
      icon: <Scale className="h-6 w-6" />,
      content: "You have the right to access, update, or request deletion of your personal information. If you have questions about this privacy policy or wish to update your information, please contact us at kbk.advocatedhrol@gmail.com or +91 96383 12551."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-full blur-3xl"
        />
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
            <Shield className="mr-2 h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">
              Privacy & Legal Notice
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Privacy Policy & </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Legal Notice
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Your privacy and confidentiality are our top priorities. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400">
            Last Updated: November 15, 2024
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-8 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <AlertTriangle className="mr-3 h-6 w-6 text-red-400" />
              Important Legal Disclaimer
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>No Attorney-Client Relationship:</strong> Use of this website or communication with Adv. Kishor Kagathara through this website does not create an attorney-client relationship until a formal retainer agreement is signed.
              </p>
              <p>
                <strong>Not Legal Advice:</strong> Information on this website is for general informational purposes only and should not be construed as legal advice for your specific situation.
              </p>
              <p>
                <strong>Confidentiality:</strong> Do not include confidential or sensitive information in any communication through this website until an attorney-client relationship has been established.
              </p>
              <p>
                <strong>Jurisdiction:</strong> This website and the services offered are governed by the laws of India and the jurisdiction of Gujarat State courts.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Questions About Privacy or Legal Matters?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              If you have questions about this privacy policy or need legal assistance, don't hesitate to contact us.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-white font-bold mb-2">Email</h4>
                <a href="mailto:kbk.advocatedhrol@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  kbk.advocatedhrol@gmail.com
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-white font-bold mb-2">Phone</h4>
                <a href="tel:+919638312551" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  +91 96383 12551
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}