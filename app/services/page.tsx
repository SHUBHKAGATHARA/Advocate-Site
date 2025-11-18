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
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/5"
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
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-500/10 to-pink-600/5"
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
      ],
      color: "from-green-400 to-green-600",
      bgColor: "from-green-500/10 to-green-600/5"
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
      ],
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/5"
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
      ],
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/5"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        {/* Page Header */}
        <motion.div 
          variants={cardVariants}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
          >
            <span className="text-yellow-400 text-sm font-medium">
              Legal Services by Adv. Kishor Kagathara
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Comprehensive </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Legal Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            With over 15 years of experience, I provide expert legal representation across all major practice areas. 
            From criminal defense to corporate law, I offer personalized attention and proven results for every client.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-100 text-black font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
            
            <motion.a
              href="tel:+919924263454"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              +91 96383 12551 | +91 99242 63454
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
                      <span className="text-gray-300 text-sm">{feature}</span>
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
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose Adv. Kishor Kagathara?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">15+ Years Experience</h4>
                <p className="text-gray-300">Proven track record in handling complex legal cases</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">500+ Cases Won</h4>
                <p className="text-gray-300">Successfully resolved cases across multiple practice areas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Personalized Service</h4>
                <p className="text-gray-300">Individual attention and tailored legal strategies</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-100 text-black font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              
              <motion.a
                href="mailto:jbk1630@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}