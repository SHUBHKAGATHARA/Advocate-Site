'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Scale, 
  Shield, 
  Heart, 
  Building2, 
  FileText, 
  Users, 
  Gavel,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function Services() {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Criminal Defense",
      description: "Expert defense representation for all types of criminal charges with proven track record.",
      features: ["White Collar Crimes", "DUI Defense", "Drug Charges", "Assault Cases"],
      color: "from-red-400 to-red-600",
      bgColor: "from-red-500/10 to-red-600/5"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Civil Litigation",
      description: "Comprehensive civil litigation services for complex disputes and personal injury cases.",
      features: ["Personal Injury", "Contract Disputes", "Employment Law", "Insurance Claims"],
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/5"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Family & Divorce Law",
      description: "Compassionate legal guidance through family matters and divorce proceedings.",
      features: ["Divorce Proceedings", "Child Custody", "Alimony", "Adoption"],
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-500/10 to-pink-600/5"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Property & Real Estate",
      description: "Complete real estate legal services for residential and commercial properties.",
      features: ["Property Transactions", "Real Estate Disputes", "Zoning Issues", "Landlord-Tenant"],
      color: "from-green-400 to-green-600",
      bgColor: "from-green-500/10 to-green-600/5"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Corporate & Business",
      description: "Strategic legal counsel for businesses of all sizes and corporate transactions.",
      features: ["Business Formation", "Contract Law", "Mergers & Acquisitions", "Compliance"],
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/5"
    },
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Employment Law",
      description: "Comprehensive employment law services for both employers and employees.",
      features: ["Wrongful Termination", "Discrimination", "Workplace Harassment", "Labor Disputes"],
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/5"
    }
  ]

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden"
      id="services"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div 
          variants={cardVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
          >
            <span className="text-yellow-400 text-sm font-medium">
              Our Legal Services
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Comprehensive </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Legal Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From criminal defense to corporate law, we provide expert legal representation 
            across all major practice areas with personalized attention.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10
              }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-500">
                {/* Service Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-6`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn relative w-full px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 text-yellow-400 font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Consult Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          variants={cardVariants}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Don't wait - get expert legal advice for your specific situation. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}