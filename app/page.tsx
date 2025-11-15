'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Calendar, Scale, Shield, Heart, Building2, FileText, Users, MapPin, Mail, Star, User } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add click listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

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

  const servicePreviewCards = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Criminal Defense",
      description: "Expert criminal defense representation with proven track record in complex cases.",
      color: "from-red-400 to-red-600",
      link: "/services#criminal"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Civil Litigation",
      description: "Comprehensive civil litigation services for disputes and personal injury cases.",
      color: "from-blue-400 to-blue-600",
      link: "/services#civil"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Family Law",
      description: "Compassionate legal guidance through family matters and divorce proceedings.",
      color: "from-pink-400 to-pink-600",
      link: "/services#family"
    }
  ]

  const quickInfoCards = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "15+ Years",
      subtitle: "Experience",
      description: "Trusted legal expertise"
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "500+",
      subtitle: "Cases Handled",
      description: "Successfully resolved"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "98%",
      subtitle: "Success Rate",
      description: "Proven track record"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={heroInView ? { scale: 1, opacity: 1 } : {}}
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
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 rounded-full blur-xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
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
            <span className="text-white">Adv. </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Kishor Kagathara
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Expert Legal Counsel & Advocate
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 text-gray-400 mb-8"
          >
            <MapPin className="h-5 w-5" />
            <span>Laxminarayan Complex, Near Government Hospital, Dhrol</span>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {quickInfoCards.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center px-4"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                  {stat.title}
                </div>
                <div className="text-gray-300 text-sm font-semibold">
                  {stat.subtitle}
                </div>
                <div className="text-gray-400 text-xs">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span>+91 96383 12551</span>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span>kbk.advocatedhrol@gmail.com</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>

            <motion.a
              href="tel:+919638312551"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Adv. Kishor Kagathara
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              With over 15 years of dedicated legal practice, I provide comprehensive legal services 
              with unwavering commitment to justice and client satisfaction.
            </p>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
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
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
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
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-500">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={service.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative w-full px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 text-yellow-400 font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              
              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Call +91 96383 12551
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}