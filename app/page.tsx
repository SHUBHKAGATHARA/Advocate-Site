'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Calendar, Scale, Shield, Heart, Building2, FileText, Users, MapPin, Mail, Star, User, CheckCircle, Award, Clock } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const serviceCards = [
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Criminal Defense",
      description: "Expert criminal defense representation with proven track record in complex cases and trial advocacy.",
      features: ["Trial Advocacy", "Bail Applications", "Criminal Appeals", "White Collar Crime"],
      link: "/services#criminal"
    },
    {
      icon: <Scale className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Civil Litigation",
      description: "Comprehensive civil litigation services for disputes, contracts, and personal injury cases.",
      features: ["Contract Disputes", "Property Law", "Personal Injury", "Commercial Litigation"],
      link: "/services#civil"
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Family Law",
      description: "Compassionate legal guidance through family matters, divorce proceedings, and child custody.",
      features: ["Divorce Proceedings", "Child Custody", "Alimony", "Property Division"],
      link: "/services#family"
    }
  ]

  const statsCards = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
      description: "Trusted legal expertise"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Cases Handled",
      description: "Successfully resolved"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "98%",
      label: "Success Rate",
      description: "Proven track record"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Availability",
      description: "Emergency legal support"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Patel",
      case: "Property Dispute Resolution",
      rating: 5,
      location: "Dhrol",
      text: "Adv. Kishor Kagathara handled my complex property dispute with exceptional professionalism and expertise. His strategic approach helped me secure a favorable outcome."
    },
    {
      name: "Priya Shah",
      case: "Divorce & Child Custody",
      rating: 5,
      location: "Jamnagar",
      text: "During the most difficult period of my life, Adv. Kagathara provided not just legal expertise but also emotional support throughout the proceedings."
    },
    {
      name: "Vikram Industries",
      case: "Corporate Legal Advisory",
      rating: 5,
      location: "Rajkot",
      text: "We've been working with Adv. Kagathara for our company's legal needs. His business law expertise has been invaluable for our growth."
    }
  ]

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03) 0%, transparent 50%)`
          }}
        />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center section-premium"
      >
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center relative z-10"
          >
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="glass-card inline-flex items-center px-6 py-3 rounded-full mb-8 hover-glow"
            >
              <motion.span 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-3 text-xl"
              >
                ⚖️
              </motion.span>
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Leading Legal Excellence Since 2009
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-responsive-xl font-bold mb-6 text-gradient-white animate-fade-in-up"
            >
              Adv. Kishor Kagathara
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-responsive-lg text-white/90 mb-8 max-w-4xl mx-auto font-medium animate-fade-in-up delay-200"
            >
              Expert Legal Counsel & Trusted Advocate
              <span className="block text-responsive-md text-white/70 mt-2">
                Serving justice with integrity and excellence
              </span>
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="glass-card inline-flex items-center px-6 py-3 rounded-full mb-12 hover-lift"
            >
              <MapPin className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-medium text-sm sm:text-base">
                Laxminarayan Complex, Near Govt. Hospital, Dhrol
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-500"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-white group relative overflow-hidden"
                >
                  <Calendar className="mr-3 w-5 h-5" />
                  <span>Book Consultation</span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline group"
              >
                <Phone className="mr-3 w-5 h-5" />
                <span>Call Now</span>
                <motion.div
                  className="ml-3 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto animate-fade-in-up delay-300"
            >
              <div className="glass-card flex items-center justify-center p-4 hover-glow">
                <Phone className="w-5 h-5 text-white mr-3" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm sm:text-base">+91 96383 12551</div>
                  <div className="text-white font-semibold text-sm sm:text-base">+91 99242 63454</div>
                </div>
              </div>
              <div className="glass-card flex items-center justify-center p-4 hover-glow">
                <Mail className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-white font-semibold text-xs sm:text-sm">kbk.advocatedhrol@gmail.com</div>
                  <div className="text-white font-semibold text-xs sm:text-sm">jbk1630@gmail.com</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-premium bg-white/5">
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {statsCards.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-premium text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-black"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-semibold text-sm sm:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-white font-outline-2">
                Adv. Kishor Kagathara
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              With over 15 years of dedicated legal practice, I provide comprehensive legal services 
              with unwavering commitment to justice and client satisfaction.
            </p>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white bg-black/30 backdrop-blur-sm text-white font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Legal </span>
              <span className="text-white font-outline-2">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal representation across multiple practice areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicePreviewCards.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative"
              >
                  <div className="relative p-10 rounded-3xl glass-morphism premium-shadow hover:border-amber-400/50 transition-all duration-500 group">
                  
                  {/* Premium Service Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${service.color} text-white mb-8 luxury-gradient shadow-2xl`}
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gradient transition-all duration-300" style={{ fontFamily: 'Montserrat' }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-200 mb-8 leading-relaxed font-medium text-lg">
                    {service.description}
                  </p>

                  <Link href={service.link}>
                    <motion.button
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative w-full px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-100 text-black font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="text-black">Explore Service</span>
                        <ArrowRight className="ml-3 h-5 w-5 text-black transition-transform group-hover/btn:translate-x-2" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Client </span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real experiences from satisfied clients who trusted their legal matters with Adv. Kishor Kagathara
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                case: "Property Dispute Resolution",
                rating: 5,
                location: "Dhrol",
                text: "Adv. Kishor Kagathara handled my complex property dispute with exceptional professionalism and expertise. His strategic approach and dedication helped me secure a favorable outcome in a case that seemed impossible to win."
              },
              {
                name: "Priya Shah",
                case: "Divorce & Child Custody",
                rating: 5,
                location: "Jamnagar",
                text: "During the most difficult period of my life, Adv. Kagathara provided not just legal expertise but also emotional support. He secured fair custody arrangements and ensured my rights were protected throughout the proceedings."
              },
              {
                name: "Vikram Industries Pvt Ltd",
                case: "Corporate Legal Advisory",
                rating: 5,
                location: "Rajkot",
                text: "We've been working with Adv. Kagathara for our company's legal needs for over 3 years. His business law expertise and prompt responses have been invaluable for our company's growth and compliance requirements."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                    <User className="h-8 w-8 text-black" />
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <h5 className="text-white font-bold text-lg">{testimonial.name}</h5>
                  <p className="text-yellow-400 font-semibold text-sm">{testimonial.case}</p>
                  <p className="text-gray-400 text-sm mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Share Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Don't wait - get expert legal advice for your specific situation. 
              Contact Adv. Kishor Kagathara today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-black font-bold text-lg overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              
              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(251, 191, 36, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full border-2 border-amber-400 bg-slate-900/50 backdrop-blur-sm text-amber-400 font-bold text-lg hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-xl"
              >
                Call +91 99242 63454
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}