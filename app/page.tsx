'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar, Scale, Shield, Heart, Users, MapPin, Mail, Star, User, CheckCircle, Award, Clock } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true })

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

      {/* Services Preview Section */}
      <section ref={servicesRef} className="section-premium">
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-responsive-lg font-bold text-white mb-4 animate-fade-in-up"
            >
              Our Legal Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200"
            >
              Comprehensive legal solutions tailored to your specific needs with unwavering commitment to justice
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className="card-premium group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-white mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-outline w-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="section-premium bg-white/5">
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <motion.div variants={itemVariants} className="animate-slide-in-left">
              <h2 className="text-responsive-lg font-bold text-white mb-6">
                Dedicated Legal Excellence Since 2009
              </h2>
              <p className="text-white/80 mb-6 text-lg leading-relaxed">
                With over 15 years of experience in the legal field, Adv. Kishor Kagathara has established 
                a reputation for providing exceptional legal counsel and achieving favorable outcomes for clients 
                across various practice areas.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/70 text-sm">Cases Won</div>
                </div>
              </div>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-white"
                >
                  Learn More About Us
                  <ArrowRight className="ml-3 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div variants={itemVariants} className="animate-slide-in-right">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                    <Scale className="w-16 h-16 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Justice Through Excellence
                  </h3>
                  <p className="text-white/80">
                    Committed to providing the highest standard of legal representation with integrity and professionalism.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-premium">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Real experiences from satisfied clients who trusted their legal matters with our expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-premium"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-white fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-white/80 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-white/10 pt-4">
                  <h5 className="text-white font-bold">{testimonial.name}</h5>
                  <p className="text-white/70 text-sm">{testimonial.case}</p>
                  <p className="text-white/50 text-xs mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section ref={contactRef} className="section-premium bg-white/5">
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-responsive-lg font-bold text-white mb-6 animate-fade-in-up"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200"
            >
              Contact us today for a consultation. We're here to help you navigate your legal challenges 
              with expertise and dedication.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-white"
                >
                  <Calendar className="mr-3 w-5 h-5" />
                  Schedule Consultation
                </motion.button>
              </Link>

              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call Now: +91 96383 12551
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}