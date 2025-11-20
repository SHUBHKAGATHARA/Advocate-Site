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
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
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
      id: "criminal",
      icon: <Shield className="h-8 w-8" />,
      title: "Criminal Defense",
      description: "Expert defense representation for all types of criminal charges with proven track record in complex cases.",
      features: [
        "White Collar Crimes",
        "DUI Defense", 
        "Drug Charges",
        "Assault Cases",
        "Theft & Fraud",
        "Domestic Violence"
      ],
      color: "from-red-400 to-red-600",
      bgColor: "from-red-500/10 to-red-600/5"
    },
    {
      id: "civil",
      icon: <Scale className="h-8 w-8" />,
      title: "Civil Litigation",
      description: "Comprehensive civil litigation services for complex disputes, personal injury cases, and civil matters.",
      features: [
        "Personal Injury Claims",
        "Contract Disputes", 
        "Property Disputes",
        "Employment Issues",
        "Insurance Claims",
        "Consumer Protection"
      ],
    },
    {
      id: "family",
      icon: <Heart className="h-8 w-8" />,
      title: "Family & Divorce Law",
      description: "Compassionate legal guidance through family matters, divorce proceedings, and child custody cases.",
      features: [
        "Divorce Proceedings",
        "Child Custody",
        "Alimony & Maintenance",
        "Adoption Procedures",
        "Marriage Registration",
        "Domestic Relations"
      ],
    },
    {
      id: "property",
      icon: <Building2 className="h-8 w-8" />,
      title: "Property & Real Estate",
      description: "Complete real estate legal services for residential and commercial properties, transactions, and disputes.",
      features: [
        "Property Transactions",
        "Title Verification",
        "Real Estate Disputes",
        "Zoning Issues",
        "Landlord-Tenant Law",
        "Property Documentation"
      ]
    },
    {
      id: "corporate",
      icon: <FileText className="h-8 w-8" />,
      title: "Corporate & Business Law",
      description: "Strategic legal counsel for businesses of all sizes, corporate transactions, and compliance matters.",
      features: [
        "Business Formation",
        "Contract Drafting",
        "Mergers & Acquisitions",
        "Compliance Issues",
        "Partnership Agreements",
        "Corporate Governance"
      ]
    },
    {
      id: "employment",
      icon: <Gavel className="h-8 w-8" />,
      title: "Employment Law",
      description: "Comprehensive employment law services for both employers and employees in workplace matters.",
      features: [
        "Wrongful Termination",
        "Workplace Discrimination",
        "Sexual Harassment",
        "Labor Disputes",
        "Employment Contracts",
        "Workers' Rights"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${8 + i * 8}%`
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.9, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.3,
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
        <motion.div 
          variants={cardVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 glass-card"
          >
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Legal Services by Adv. Kishor Kagathara
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Legal
            <br />
            <span className="text-white/80">Solutions</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With over 15 years of experience, I provide expert legal representation across all major practice areas. 
            From criminal defense to corporate law, I offer personalized attention and proven results for every client.
          </motion.p>

          <div className="btn-container-mobile">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-white btn-mobile-safe group relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center text-lg font-bold">
                  Schedule Consultation
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
            
            <motion.a
              href="tel:+919924263454"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-outline btn-mobile-safe group w-full sm:w-auto"
            >
              <Phone className="mr-3 h-5 w-5" />
              <span className="hidden sm:inline">+91 96383 12551 | +91 99242 63454</span>
              <span className="sm:hidden">Call Now</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10
              }}
              className="group relative"
            >
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
                  <h4 className="text-white font-semibold mb-3">Key Areas:</h4>
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative w-full px-6 py-3 rounded-full bg-gradient-to-r from-white/20 to-gray-100/20 border border-white/30 text-white font-semibold hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Legal Help
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <motion.div 
          variants={cardVariants}
          className="text-center mb-16"
        >
          <motion.div 
            className="max-w-4xl mx-auto p-8 rounded-3xl glass-card border border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-responsive-3xl font-black text-white mb-8 tracking-tight">
              Why Choose Adv. Kishor Kagathara?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">15+ Years Experience</h4>
                <p className="text-white/70">Proven track record in handling complex legal cases</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Scale className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">500+ Cases Won</h4>
                <p className="text-white/70">Successfully resolved cases across multiple practice areas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">24/7 Availability</h4>
                <p className="text-white/70">Always available for urgent legal matters and consultations</p>
              </div>
            </div>
            
            <div className="btn-container-mobile">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-white btn-mobile-safe group relative overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center text-lg font-bold">
                    Get Free Consultation
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              
              <motion.a
                href="mailto:jbk1630@gmail.com"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline btn-mobile-safe group w-full sm:w-auto"
              >
                <Mail className="mr-3 h-5 w-5" />
                <span className="hidden sm:inline">Email Me</span>
                <span className="sm:hidden">Send Email</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}